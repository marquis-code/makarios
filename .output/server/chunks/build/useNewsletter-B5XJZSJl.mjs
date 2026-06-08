import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { ref } from 'vue';
import { a as useCustomToast, G as GATEWAY_ENDPOINT, f as useRuntimeConfig } from './server.mjs';
import axios from 'axios';

const Mail = createLucideIcon("mail", [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
]);
const newsletters_api = {
  getCategories: () => GATEWAY_ENDPOINT.get("/newsletters/categories"),
  subscribe: (payload) => GATEWAY_ENDPOINT.post("/newsletters/subscribe", payload),
  unsubscribe: (email) => GATEWAY_ENDPOINT.delete(`/newsletters/${email}`)
};
const useNewsletter = () => {
  const loading = ref(false);
  const email = ref("");
  const fullName = ref("");
  const categories = ref([]);
  const selectedCategories = ref([]);
  const proofFile = ref(null);
  const { showToast } = useCustomToast();
  const fetchCategories = async () => {
    loading.value = true;
    try {
      const res = await newsletters_api.getCategories();
      categories.value = res.data?.data || res.data || [];
    } catch (err) {
      showToast({ title: "Error", message: "Failed to load newsletter categories", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const config = useRuntimeConfig();
    const uploadUrl = config.public.apiBase ? `${config.public.apiBase}/media/upload` : "https://spsn-backend.onrender.com/api/media/upload";
    const response = await axios.post(uploadUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data.url;
  };
  const subscribe = async () => {
    if (!email.value) {
      showToast({ title: "Validation", message: "Please enter your email", toastType: "warning" });
      return;
    }
    if (selectedCategories.value.length === 0) {
      showToast({ title: "Validation", message: "Please select at least one newsletter category", toastType: "warning" });
      return;
    }
    const selectedCatsData = categories.value.filter((c) => selectedCategories.value.includes(c._id));
    const totalPrice = selectedCatsData.reduce((sum, c) => sum + c.price, 0);
    if (totalPrice > 0 && !proofFile.value) {
      showToast({ title: "Validation", message: "Please upload your proof of payment", toastType: "warning" });
      return;
    }
    loading.value = true;
    try {
      let proofOfPayment = "";
      if (proofFile.value) {
        showToast({ title: "Uploading", message: "Uploading proof of payment...", toastType: "info" });
        proofOfPayment = await uploadFile(proofFile.value);
      }
      const res = await newsletters_api.subscribe({
        email: email.value,
        fullName: fullName.value,
        categoryIds: selectedCategories.value,
        proofOfPayment
      });
      showToast({ title: "Subscribed!", message: "You have successfully subscribed to the newsletter.", toastType: "success" });
      email.value = "";
      fullName.value = "";
      selectedCategories.value = [];
      proofFile.value = null;
    } catch (err) {
      showToast({ title: "Error", message: err?.response?.data?.message || "Failed to subscribe", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  const subscribeFooter = async () => {
    if (!email.value) {
      showToast({ title: "Validation", message: "Please enter your email", toastType: "warning" });
      return;
    }
    loading.value = true;
    try {
      await newsletters_api.subscribe({
        email: email.value,
        categoryIds: []
      });
      showToast({ title: "Subscribed!", message: "You have successfully joined our mailing list.", toastType: "success" });
      email.value = "";
    } catch (err) {
      showToast({ title: "Error", message: err?.response?.data?.message || "Failed to subscribe", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, email, fullName, categories, selectedCategories, proofFile, fetchCategories, subscribe, subscribeFooter };
};

export { Mail as M, useNewsletter as u };
//# sourceMappingURL=useNewsletter-B5XJZSJl.mjs.map
