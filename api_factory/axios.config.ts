import axios, { type AxiosResponse } from "axios";
import { useUser } from "@/composables/modules/auth/user";
import { useCustomToast } from '@/composables/core/useCustomToast'
import { useTokenManager } from '@/composables/core/useTokenManager'

// Composable calls must happen inside the interceptors or setup lifecycle to be SSR safe
const getComposables = () => {
  const { showToast } = useCustomToast();
  const { token, logOut } = useUser();
  const tokenManager = useTokenManager();
  return { showToast, token, logOut, tokenManager };
};

const $GATEWAY_ENDPOINT = import.meta.env.VITE_BASE_URL || "http://localhost:3005/api";
const $GATEWAY_ENDPOINT_WITHOUT_VERSION = $GATEWAY_ENDPOINT;
const $GATEWAY_ENDPOINT_V2 = $GATEWAY_ENDPOINT + "/v2";
const $IMAGE_UPLOAD_ENDPOINT = import.meta.env.VITE_IMAGE_UPLOAD_BASE_URL || $GATEWAY_ENDPOINT + "/upload";

// Helper function to redirect to login page
const redirectToLogin = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('auth-change'));
    if (!window.location.pathname.includes('/login')) {
      window.location.href = '/login';
    }
  }
};

export const GATEWAY_ENDPOINT = axios.create({
  baseURL: $GATEWAY_ENDPOINT,
});

export const GATEWAY_ENDPOINT_V2 = axios.create({
  baseURL: $GATEWAY_ENDPOINT_V2
});

export const GATEWAY_ENDPOINT_WITH_AUTH = axios.create({
  baseURL: $GATEWAY_ENDPOINT,
});

export const GATEWAY_ENDPOINT_WITH_AUTH_FORM_DATA = axios.create({
  baseURL: $GATEWAY_ENDPOINT,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const GATEWAY_ENDPOINT_WITHOUT_VERSION = axios.create({
  baseURL: $GATEWAY_ENDPOINT_WITHOUT_VERSION,
});

export const GATEWAY_ENDPOINT_WITHOUT_VERSION_WITH_AUTH = axios.create({
  baseURL: $GATEWAY_ENDPOINT_WITHOUT_VERSION,
});

export const IMAGE_UPLOAD_ENDPOINT = axios.create({
  baseURL: $IMAGE_UPLOAD_ENDPOINT,
});

export interface CustomAxiosResponse extends AxiosResponse {
  value?: any;
  type?: string;
}

const instanceArray = [
  GATEWAY_ENDPOINT,
  GATEWAY_ENDPOINT_V2,
  GATEWAY_ENDPOINT_WITH_AUTH,
  GATEWAY_ENDPOINT_WITHOUT_VERSION,
  GATEWAY_ENDPOINT_WITHOUT_VERSION_WITH_AUTH,
  GATEWAY_ENDPOINT_WITH_AUTH_FORM_DATA
];

instanceArray.forEach((instance) => {
  instance.interceptors.request.use((config: any) => {
    const { token, businessId } = useUser();
    
    if (token.value) {
      config.headers.Authorization = `Bearer ${token.value}`;
    }

    if (businessId.value) {
      config.headers['X-Business-Id'] = businessId.value;
    }

    return config;
  });

  instance.interceptors.response.use(
    (response: CustomAxiosResponse) => {
      return response;
    },
    (err: any) => {
      const { showToast } = useCustomToast();
      const { token, logOut } = useUser();
      const tokenManager = useTokenManager();

      if (typeof err.response === "undefined") {
        showToast({
          title: "Error",
          message: "kindly check your network connection",
          toastType: "error",
          duration: 3000
        });
        return {
          type: "ERROR",
          ...err.response,
        };
      }
      if (err.response.status === 401) {
        const originalRequest = err.config;

        if (originalRequest._retry || originalRequest.url?.includes('/auth/refresh')) {
          logOut();
          showToast({
            title: "Session Expired",
            message: "Please login again",
            toastType: "error",
            duration: 3000
          });
          redirectToLogin();
          return Promise.reject(err);
        }

        originalRequest._retry = true;

        if (tokenManager.isTokenRefreshing()) {
          return tokenManager.queueFailedRequest()
            .then(newToken => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return instance(originalRequest);
            })
            .catch(error => Promise.reject(error));
        }

        return tokenManager.refreshAccessToken($GATEWAY_ENDPOINT)
          .then(newAccessToken => {
            token.value = newAccessToken as string;
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          })
          .catch(refreshError => {
            tokenManager.clearTokens();
            logOut();
            showToast({
              title: "Session Expired",
              message: "Please login again",
              toastType: "error",
              duration: 3000
            });
            redirectToLogin();
            return Promise.reject(refreshError);
          });
      } else if (err.response.status >= 400) {
        showToast({
          title: "Error",
          message: err?.response?.data?.message || err?.response?.data?.error || "An error occurred",
          toastType: "error",
          duration: 3000
        });
        return {
          type: "ERROR",
          ...err.response,
        };
      }
      return Promise.reject(err);
    }
  );
});
