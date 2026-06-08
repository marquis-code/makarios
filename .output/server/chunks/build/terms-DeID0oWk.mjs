import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { F as FileText } from './file-text-BUQYprbl.mjs';
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
import './createLucideIcon-toOOggq-.mjs';

const _sfc_main = {
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-24 font-body bg-slate-50 min-h-screen" }, _attrs))} data-v-f352f3c5><div class="container mx-auto px-6 max-w-3xl" data-v-f352f3c5><div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm" data-v-f352f3c5><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-[11px] font-semibold px-4 py-2 rounded-full mb-6 border border-blue-100" data-v-f352f3c5>`);
      _push(ssrRenderComponent(unref(FileText), { size: 14 }, null, _parent));
      _push(` Legal Document </div><h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight" data-v-f352f3c5>Terms of Use</h1><div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed" data-v-f352f3c5><p class="mb-8 text-[15px]" data-v-f352f3c5>By accessing this portal, you agree to comply with the professional standards set by the SCPSC scientific board.</p><h2 class="text-[20px] font-bold text-slate-800 mt-10 mb-4 border-b border-slate-100 pb-2" data-v-f352f3c5>1. Membership Conduct</h2><p class="mb-8 text-[14px]" data-v-f352f3c5>All members must adhere to the Ethical Code of Conduct for Medical Laboratory Scientists in Nigeria.</p><h2 class="text-[20px] font-bold text-slate-800 mt-10 mb-4 border-b border-slate-100 pb-2" data-v-f352f3c5>2. Intellectual Property</h2><p class="mb-8 text-[14px]" data-v-f352f3c5>Scientific journals and abstracts accessed through this portal are protected material.</p><div class="mt-16 pt-6 border-t border-slate-100" data-v-f352f3c5><p class="text-[11px] font-semibold tracking-widest uppercase text-slate-400" data-v-f352f3c5>Last Updated: March 2026</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f352f3c5"]]);

export { terms as default };
//# sourceMappingURL=terms-DeID0oWk.mjs.map
