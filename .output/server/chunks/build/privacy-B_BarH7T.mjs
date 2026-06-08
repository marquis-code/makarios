import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-40 pb-24" }, _attrs))}><div class="container mx-auto px-6 max-w-3xl"><h1 class="text-4xl font-black text-brand-blue mb-10">Privacy Policy</h1><div class="prose prose-slate max-w-none text-slate-500 font-medium leading-[2]"><p class="mb-6">The Society for Cellular Pathology Scientists of Nigeria (SCPSC) respects your privacy and is committed to protecting your personal data.</p><h2 class="text-2xl font-bold text-brand-blue mt-12 mb-6">1. Information We Collect</h2><p class="mb-6">We collect personal information such as name, email address, and professional credentials when you register for membership or conferences.</p><h2 class="text-2xl font-bold text-brand-blue mt-12 mb-6">2. How We Use Data</h2><p class="mb-6">Your data is used to provide membership services, process payments, and send scientific updates.</p><p class="mt-20 text-[10px] font-black tracking-widest text-slate-400">Last Updated: March 2026</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { privacy as default };
//# sourceMappingURL=privacy-B_BarH7T.mjs.map
