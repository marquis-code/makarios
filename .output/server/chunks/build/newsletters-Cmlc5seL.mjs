import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useNewsletter, M as Mail } from './useNewsletter-B5XJZSJl.mjs';
import { _ as _export_sfc } from './server.mjs';
import { I as Inbox } from './inbox-BgA8mAs9.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { C as Copy } from './copy-CL7k6o2b.mjs';
import { U as Upload, F as FileCheck } from './upload-BYm2eVd6.mjs';
import { X } from './x-BzrXjgTv.mjs';
import 'axios';
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
import 'perfect-debounce';
import '@vue/shared';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const Newspaper = createLucideIcon("newspaper", [
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
      key: "39pd36"
    }
  ],
  ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }]
]);
const Receipt = createLucideIcon("receipt", [
  ["path", { d: "M12 17V7", key: "pyj7ub" }],
  ["path", { d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8", key: "1elt7d" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
      key: "ycz6yz"
    }
  ]
]);
const Send = createLucideIcon("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const ShoppingCart = createLucideIcon("shopping-cart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
const _sfc_main = {
  __name: "newsletters",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, email, fullName, categories, selectedCategories, proofFile } = useNewsletter();
    const activeCategories = computed(() => categories.value.filter((c) => c.isActive));
    const selectedCategoriesData = computed(
      () => activeCategories.value.filter((c) => selectedCategories.value.includes(c._id))
    );
    const totalPrice = computed(
      () => selectedCategoriesData.value.reduce((sum, c) => sum + c.price, 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-e70e1ca7><section class="bg-white border-b border-slate-100" data-v-e70e1ca7><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-e70e1ca7><div class="max-w-3xl" data-v-e70e1ca7><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-e70e1ca7>`);
      _push(ssrRenderComponent(unref(Mail), { size: 13 }, null, _parent));
      _push(` Newsletter Subscriptions </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-e70e1ca7> Stay informed with <span class="text-[#1d4e89]" data-v-e70e1ca7>SCPSC</span> publications. </h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]" data-v-e70e1ca7> Subscribe to our specialized publications and receive cutting-edge research, clinical updates, and pathology news directly in your inbox. </p></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-e70e1ca7><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-e70e1ca7><div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-v-e70e1ca7><div class="lg:col-span-7 space-y-5" data-v-e70e1ca7><div class="flex items-center justify-between mb-2" data-v-e70e1ca7><div data-v-e70e1ca7><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1" data-v-e70e1ca7>Step 1</p><h2 class="text-[20px] font-bold text-slate-800" data-v-e70e1ca7>Choose your categories</h2></div><span class="text-[12px] font-semibold text-slate-400 bg-white border border-slate-200 px-3 py-1.5 rounded-full" data-v-e70e1ca7>${ssrInterpolate(activeCategories.value.length)} available </span></div>`);
      if (unref(loading) && unref(categories).length === 0) {
        _push(`<div class="py-16 flex justify-center" data-v-e70e1ca7><div class="w-10 h-10 border-2 border-blue-100 border-t-[#1d4e89] rounded-full animate-spin" data-v-e70e1ca7></div></div>`);
      } else if (activeCategories.value.length === 0) {
        _push(`<div class="py-16 text-center text-slate-400 bg-white border border-slate-200 rounded-2xl" data-v-e70e1ca7>`);
        _push(ssrRenderComponent(unref(Inbox), {
          size: 32,
          class: "mx-auto mb-3 text-slate-300"
        }, null, _parent));
        _push(`<p class="text-[14px] font-semibold text-slate-500" data-v-e70e1ca7>No newsletter categories available at the moment.</p><p class="text-[13px] text-slate-400 mt-1" data-v-e70e1ca7>Please check back later.</p></div>`);
      } else {
        _push(`<div class="space-y-3" data-v-e70e1ca7><!--[-->`);
        ssrRenderList(activeCategories.value, (cat) => {
          _push(`<label class="${ssrRenderClass([
            "flex items-center gap-4 bg-white border-2 rounded-2xl p-5 cursor-pointer transition-all duration-200",
            unref(selectedCategories).includes(cat._id) ? "border-[#1d4e89] bg-blue-50/40 shadow-sm" : "border-slate-200 hover:border-blue-200 hover:shadow-sm"
          ])}" data-v-e70e1ca7><div class="${ssrRenderClass([
            "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
            unref(selectedCategories).includes(cat._id) ? "bg-[#1d4e89]" : "bg-slate-100"
          ])}" data-v-e70e1ca7>`);
          _push(ssrRenderComponent(unref(Newspaper), {
            size: 16,
            class: unref(selectedCategories).includes(cat._id) ? "text-white" : "text-slate-500"
          }, null, _parent));
          _push(`</div><div class="flex-grow" data-v-e70e1ca7><p class="text-[13px] font-semibold text-slate-800 mb-0.5" data-v-e70e1ca7>${ssrInterpolate(cat.title)}</p><p class="text-[12px] text-slate-400 leading-relaxed" data-v-e70e1ca7>${ssrInterpolate(cat.description)}</p></div><div class="text-right flex-shrink-0 mr-3" data-v-e70e1ca7><p class="${ssrRenderClass([cat.price === 0 ? "text-emerald-600" : "text-[#1d4e89]", "text-[18px] font-bold leading-none"])}" data-v-e70e1ca7>${ssrInterpolate(cat.price === 0 ? "Free" : "₦" + cat.price.toLocaleString())}</p><p class="text-[11px] text-slate-400 mt-0.5" data-v-e70e1ca7>/ subscription</p></div><input type="checkbox"${ssrRenderAttr("value", cat._id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategories)) ? ssrLooseContain(unref(selectedCategories), cat._id) : unref(selectedCategories)) ? " checked" : ""} class="w-5 h-5 accent-[#1d4e89] flex-shrink-0 cursor-pointer" data-v-e70e1ca7></label>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="lg:col-span-5" data-v-e70e1ca7><div class="bg-white border border-slate-200 rounded-2xl overflow-hidden sticky top-24" data-v-e70e1ca7><div class="bg-[#1d4e89] px-7 py-6 relative overflow-hidden" data-v-e70e1ca7>`);
      _push(ssrRenderComponent(unref(Receipt), {
        size: 100,
        class: "absolute -right-4 -bottom-4 text-white opacity-[0.06] pointer-events-none"
      }, null, _parent));
      _push(`<p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-1" data-v-e70e1ca7>Your subscription</p><h3 class="text-[17px] font-bold text-white" data-v-e70e1ca7>Summary &amp; checkout</h3></div><div class="p-7 space-y-5" data-v-e70e1ca7><div class="min-h-[80px]" data-v-e70e1ca7>`);
      if (selectedCategoriesData.value.length === 0) {
        _push(`<div class="border-2 border-dashed border-slate-200 rounded-xl py-6 text-center" data-v-e70e1ca7>`);
        _push(ssrRenderComponent(unref(ShoppingCart), {
          size: 22,
          class: "mx-auto text-slate-300 mb-2"
        }, null, _parent));
        _push(`<p class="text-[12px] text-slate-400" data-v-e70e1ca7>Select categories to get started</p></div>`);
      } else {
        _push(`<div class="space-y-0.5" data-v-e70e1ca7><!--[-->`);
        ssrRenderList(selectedCategoriesData.value, (cat) => {
          _push(`<div class="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0" data-v-e70e1ca7><span class="text-[12px] font-semibold text-slate-700 truncate pr-4" data-v-e70e1ca7>${ssrInterpolate(cat.title)}</span><span class="${ssrRenderClass([cat.price === 0 ? "text-emerald-600" : "text-[#1d4e89]", "text-[13px] font-bold flex-shrink-0"])}" data-v-e70e1ca7>${ssrInterpolate(cat.price === 0 ? "Free" : "₦" + cat.price.toLocaleString())}</span></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="flex items-end justify-between border-t border-slate-100 pt-4" data-v-e70e1ca7><p class="text-[12px] font-semibold text-slate-400" data-v-e70e1ca7>Total amount</p><p class="text-[24px] font-bold text-[#1d4e89]" data-v-e70e1ca7>₦${ssrInterpolate(totalPrice.value.toLocaleString())}</p></div><div class="border-t border-slate-100" data-v-e70e1ca7></div><div class="space-y-3" data-v-e70e1ca7><div data-v-e70e1ca7><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5" data-v-e70e1ca7>Step 2</p><p class="text-[13px] font-bold text-slate-700 mb-3" data-v-e70e1ca7>Your details</p></div><div class="space-y-1.5" data-v-e70e1ca7><label class="text-[11px] font-semibold text-slate-400" data-v-e70e1ca7>Full Name <span class="text-red-400" data-v-e70e1ca7>*</span></label><input${ssrRenderAttr("value", unref(fullName))} type="text" class="field" placeholder="e.g. MLS Jane Okonkwo" data-v-e70e1ca7></div><div class="space-y-1.5" data-v-e70e1ca7><label class="text-[11px] font-semibold text-slate-400" data-v-e70e1ca7>Email Address <span class="text-red-400" data-v-e70e1ca7>*</span></label><input${ssrRenderAttr("value", unref(email))} type="email" class="field" placeholder="e.g. jane@hospital.org" data-v-e70e1ca7></div></div>`);
      if (totalPrice.value > 0) {
        _push(`<!--[--><div class="border-t border-slate-100" data-v-e70e1ca7></div><div class="space-y-3" data-v-e70e1ca7><div data-v-e70e1ca7><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5" data-v-e70e1ca7>Step 3</p><p class="text-[13px] font-bold text-slate-700 mb-3" data-v-e70e1ca7>Payment</p></div><div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3" data-v-e70e1ca7><p class="text-[10px] font-semibold text-slate-400 uppercase tracking-widest" data-v-e70e1ca7>Bank transfer details</p><div class="space-y-1.5" data-v-e70e1ca7><div class="flex justify-between text-[12px]" data-v-e70e1ca7><span class="text-slate-400 font-semibold" data-v-e70e1ca7>Bank</span><span class="font-bold text-slate-800" data-v-e70e1ca7>First Bank of Nigeria</span></div><div class="flex justify-between text-[12px]" data-v-e70e1ca7><span class="text-slate-400 font-semibold" data-v-e70e1ca7>Account No.</span><span class="font-mono font-bold text-slate-800 tracking-wider" data-v-e70e1ca7>2012345678</span></div><div class="flex justify-between text-[12px]" data-v-e70e1ca7><span class="text-slate-400 font-semibold" data-v-e70e1ca7>Account Name</span><span class="font-bold text-slate-800" data-v-e70e1ca7>SCPSC Dues</span></div></div><div class="flex items-center justify-between pt-2 border-t border-slate-200" data-v-e70e1ca7><p class="text-[11px] text-slate-500 italic" data-v-e70e1ca7> Description: <strong class="text-[#1d4e89] not-italic" data-v-e70e1ca7>newsletter subscription</strong></p><button class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-[#1d4e89] bg-white border border-slate-200 hover:border-blue-200 px-2.5 py-1 rounded-lg transition-all" data-v-e70e1ca7>`);
        _push(ssrRenderComponent(unref(Copy), { size: 11 }, null, _parent));
        _push(` Copy </button></div></div><div class="space-y-1.5" data-v-e70e1ca7><label class="text-[11px] font-semibold text-slate-400" data-v-e70e1ca7> Proof of Payment <span class="text-red-400" data-v-e70e1ca7>*</span></label>`);
        if (!unref(proofFile)) {
          _push(`<div class="border border-dashed border-slate-300 hover:border-blue-300 bg-slate-50 hover:bg-blue-50/30 rounded-xl py-7 px-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group" data-v-e70e1ca7><div class="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89] mb-3 group-hover:-translate-y-1 transition-transform duration-200" data-v-e70e1ca7>`);
          _push(ssrRenderComponent(unref(Upload), { size: 18 }, null, _parent));
          _push(`</div><p class="text-[13px] font-semibold text-slate-700 mb-0.5" data-v-e70e1ca7>Click to upload receipt</p><p class="text-[11px] text-slate-400" data-v-e70e1ca7>PNG, JPG, or PDF — max 5MB</p></div>`);
        } else {
          _push(`<div class="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl" data-v-e70e1ca7><div class="flex items-center gap-2.5" data-v-e70e1ca7><div class="w-8 h-8 bg-white border border-emerald-200 rounded-lg flex items-center justify-center" data-v-e70e1ca7>`);
          _push(ssrRenderComponent(unref(FileCheck), {
            size: 14,
            class: "text-emerald-600"
          }, null, _parent));
          _push(`</div><div data-v-e70e1ca7><p class="text-[12px] font-semibold text-slate-800 truncate max-w-[160px]" data-v-e70e1ca7>${ssrInterpolate(unref(proofFile).name)}</p><p class="text-[11px] text-slate-400" data-v-e70e1ca7>${ssrInterpolate((unref(proofFile).size / 1024 / 1024).toFixed(2))} MB</p></div></div><button class="w-7 h-7 rounded-lg bg-white hover:bg-red-50 border border-slate-200 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all" data-v-e70e1ca7>`);
          _push(ssrRenderComponent(unref(X), { size: 13 }, null, _parent));
          _push(`</button></div>`);
        }
        _push(`<input type="file" class="hidden" accept="image/*,.pdf" data-v-e70e1ca7></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(unref(loading) || unref(selectedCategories).length === 0) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-e70e1ca7>`);
      if (unref(loading)) {
        _push(`<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-e70e1ca7></div>`);
      } else {
        _push(ssrRenderComponent(unref(Send), { size: 15 }, null, _parent));
      }
      _push(`<span data-v-e70e1ca7>${ssrInterpolate(unref(loading) ? "Submitting..." : totalPrice.value === 0 ? "Subscribe now" : "Submit subscription")}</span></button><p class="text-[11px] text-center text-slate-400" data-v-e70e1ca7> By subscribing, you agree to our Terms of Service and Privacy Policy. </p></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newsletters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newsletters = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e70e1ca7"]]);

export { newsletters as default };
//# sourceMappingURL=newsletters-Cmlc5seL.mjs.map
