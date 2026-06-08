import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { a as useCustomToast, G as GATEWAY_ENDPOINT } from './server.mjs';
import { useRouter, useRoute } from 'vue-router';
import { L as LoaderCircle } from './loader-circle-DKvMQerE.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'perfect-debounce';
import '@vue/shared';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './createLucideIcon-toOOggq-.mjs';

const payments_api = {
  initiate: (payload) => GATEWAY_ENDPOINT.post("/payments/initiate", payload),
  verify: (reference) => GATEWAY_ENDPOINT.get(`/payments/verify/${reference}`)
};
const useVerifyPayment = () => {
  const loading = ref(false);
  const paymentStatus = ref(null);
  const { showToast } = useCustomToast();
  const verifyPayment = async (reference) => {
    loading.value = true;
    try {
      const res = await payments_api.verify(reference);
      paymentStatus.value = res.data?.status || "unknown";
      if (paymentStatus.value === "successful") {
        showToast({ title: "Payment Verified", message: "Your payment was successful!", toastType: "success" });
      } else {
        showToast({ title: "Payment Status", message: `Status: ${paymentStatus.value}`, toastType: "info" });
      }
      return res.data;
    } catch (err) {
      paymentStatus.value = "failed";
      showToast({ title: "Error", message: "Payment verification failed", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, paymentStatus, verifyPayment };
};
const _sfc_main = {
  __name: "payment-callback",
  __ssrInlineRender: true,
  setup(__props) {
    const progress = ref(0);
    useRouter();
    useRoute();
    useVerifyPayment();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 relative overflow-hidden flex items-center justify-center" }, _attrs))}><div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div><div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div><div class="container mx-auto px-6 relative z-10 max-w-lg"><div class="interactive-card p-12 lg:p-16 flex flex-col items-center text-center space-y-10"><div class="relative"><div class="w-24 h-24 bg-brand-cyan/10 rounded-[32px] flex items-center justify-center text-brand-cyan group">`);
      _push(ssrRenderComponent(unref(LoaderCircle), {
        size: 40,
        class: "animate-spin text-brand-cyan"
      }, null, _parent));
      _push(`</div><div class="absolute -inset-4 bg-brand-cyan/20 rounded-full blur-2xl animate-pulse -z-10"></div></div><div class="space-y-4"><h2 class="text-3xl font-black text-brand-dark tracking-tighter uppercase">Securing Payment.</h2><p class="text-slate-500 font-medium leading-relaxed"> Synchronizing with financial gateways to verify transaction: <span class="block mt-2 font-black text-sm text-brand-cyan tracking-widest uppercase">${ssrInterpolate(_ctx.$route.query.reference || "VALIDATING...")}</span></p></div><div class="w-full space-y-4"><div class="flex justify-between items-center text-[10px] font-black text-brand-dark px-1"><span>Verification Sequence</span><span class="text-brand-cyan">${ssrInterpolate(progress.value)}%</span></div><div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200"><div class="bg-brand-cyan h-full rounded-full transition-all duration-1000 shadow-sm" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse"> DO NOT REFRESH OR DISCONNECT </p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment-callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-callback-CtQSG8De.mjs.map
