import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { A as Award } from './award-C3Kt0fIj.mjs';
import { S as ShieldCheck } from './shield-check-C8vFK0lK.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@iconify/utils';
import 'consola';
import './server.mjs';
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

const CreditCard = createLucideIcon("credit-card", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
const _sfc_main = {
  __name: "payment",
  __ssrInlineRender: true,
  setup(__props) {
    const paymentCategories = [
      { title: "Membership Dues", desc: "Annual professional registration for practicing scientists.", icon: CreditCard },
      { title: "Conference Fees", desc: "Registration for upcoming annual scientific meetings.", icon: Award }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-24" }, _attrs))}><section class="container mx-auto px-6 max-w-5xl"><div class="text-center space-y-6 mb-20"><h1 class="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter">Secure <span class="text-brand-cyan">Dues &amp; Payments</span></h1><p class="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Centralized hub for membership subscriptions, conference registrations, and archival access fees.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-10"><!--[-->`);
      ssrRenderList(paymentCategories, (pay) => {
        _push(`<div class="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-brand-blue/5 hover:border-brand-cyan/30 transition-all duration-500 group"><div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pay.icon), { size: 28 }, null), _parent);
        _push(`</div><h3 class="text-2xl font-black text-brand-blue mb-4">${ssrInterpolate(pay.title)}</h3><p class="text-slate-500 font-medium mb-10 leading-relaxed">${ssrInterpolate(pay.desc)}</p><button class="btn-premium w-full py-4 text-[10px]">Initialize Payment</button></div>`);
      });
      _push(`<!--]--></div><div class="mt-20 p-10 bg-slate-50 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-white"><div class="flex items-center gap-6"><div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 shadow-lg">`);
      _push(ssrRenderComponent(unref(ShieldCheck), { size: 24 }, null, _parent));
      _push(`</div><div><p class="font-black text-brand-blue text-[10px]">Verified Transaction</p><p class="text-slate-500 text-base font-medium">All payments are secured via Paystack &amp; Flutterwave.</p></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-brand-blue font-black text-[10px] hover:text-brand-cyan transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Payment Support`);
          } else {
            return [
              createTextVNode("Payment Support")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-COsvGG98.mjs.map
