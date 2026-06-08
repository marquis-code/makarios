import { mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { u as useCreateAppointment, C as Clock } from './useCreateAppointment-DNfs5wb2.mjs';
import { _ as _export_sfc } from './server.mjs';
import { C as Calendar } from './calendar-G-gDUwIF.mjs';
import { C as ChevronDown } from './chevron-down-BwjocHKn.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
import { S as ShieldCheck } from './shield-check-C8vFK0lK.mjs';
import { G as Globe } from './globe-CEE0QZpa.mjs';
import { M as Microscope } from './microscope-NIYICTiO.mjs';
import { M as MapPin } from './map-pin-BeeoToV4.mjs';
import './createLucideIcon-toOOggq-.mjs';
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

const _sfc_main = {
  __name: "appointments",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, appointment } = useCreateAppointment();
    const features = [
      {
        title: "Global benchmarks",
        desc: "Consultations aligned with international diagnostic standards.",
        icon: Globe
      },
      {
        title: "Advanced analytics",
        desc: "Utilizing modern histopathology processing technologies.",
        icon: Microscope
      },
      {
        title: "Quick turnaround",
        desc: "Efficient case review within 48–72 business hours.",
        icon: Clock
      }
    ];
    const featureColors = [
      { bg: "bg-blue-50", icon: "text-[#1d4e89]" },
      { bg: "bg-green-50", icon: "text-green-700" },
      { bg: "bg-amber-50", icon: "text-amber-700" }
    ];
    const hubs = [
      { city: "Abuja", role: "Headquarters" },
      { city: "Lagos", role: "Coastal Hub" },
      { city: "Kano", role: "Northern Hub" },
      { city: "Enugu", role: "Eastern Hub" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-5e2d257b><section class="bg-white border-b border-slate-100" data-v-5e2d257b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-5e2d257b><div class="max-w-3xl" data-v-5e2d257b><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-5e2d257b>`);
      _push(ssrRenderComponent(unref(Calendar), { size: 13 }, null, _parent));
      _push(` Precision Consultations </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-5e2d257b> Schedule a <span class="text-[#1d4e89]" data-v-5e2d257b> Professional Session.</span></h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]" data-v-5e2d257b> Book clinical diagnoses, scientific consultations, or lab walkthroughs with Nigeria&#39;s premier cellular pathology experts. </p></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-5e2d257b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-5e2d257b><div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-v-5e2d257b><div class="lg:col-span-7" data-v-5e2d257b><div class="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10" data-v-5e2d257b><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-5e2d257b>Book your session</p><h2 class="text-[22px] font-bold text-slate-800 mb-7 leading-snug" data-v-5e2d257b>Appointment details</h2><form class="space-y-5" data-v-5e2d257b><div class="grid sm:grid-cols-2 gap-5" data-v-5e2d257b><div class="space-y-1.5" data-v-5e2d257b><label class="text-[12px] font-semibold text-slate-500" data-v-5e2d257b>Full Legal Name</label><input${ssrRenderAttr("value", unref(appointment).fullName)} type="text" placeholder="Dr. John Doe" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" required data-v-5e2d257b></div><div class="space-y-1.5" data-v-5e2d257b><label class="text-[12px] font-semibold text-slate-500" data-v-5e2d257b>Email Address</label><input${ssrRenderAttr("value", unref(appointment).email)} type="email" placeholder="john@scientific.ng" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" required data-v-5e2d257b></div></div><div class="space-y-1.5" data-v-5e2d257b><label class="text-[12px] font-semibold text-slate-500" data-v-5e2d257b>Service Category</label><div class="relative" data-v-5e2d257b><select class="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 appearance-none cursor-pointer" required data-v-5e2d257b><option value="" disabled selected data-v-5e2d257b>Select a professional service</option><option data-v-5e2d257b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Histopathology Case Review</option><option data-v-5e2d257b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Cytopathology Consultation</option><option data-v-5e2d257b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Molecular Diagnostic Advisory</option><option data-v-5e2d257b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Laboratory Quality Audit</option><option data-v-5e2d257b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Scientific Equipment Training</option></select>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none",
        size: 16
      }, null, _parent));
      _push(`</div></div><div class="grid sm:grid-cols-2 gap-5" data-v-5e2d257b><div class="space-y-1.5" data-v-5e2d257b><label class="text-[12px] font-semibold text-slate-500" data-v-5e2d257b>Preferred Date</label><input${ssrRenderAttr("value", unref(appointment).date)} type="date" class="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" required data-v-5e2d257b></div><div class="space-y-1.5" data-v-5e2d257b><label class="text-[12px] font-semibold text-slate-500" data-v-5e2d257b>Preferred Time</label><input${ssrRenderAttr("value", unref(appointment).time)} type="time" class="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" required data-v-5e2d257b></div></div><div class="space-y-1.5" data-v-5e2d257b><label class="text-[12px] font-semibold text-slate-500" data-v-5e2d257b>Case Summary / Inquiry</label><textarea rows="5" placeholder="Briefly describe the clinical context or scientific inquiry..." class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-4 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 resize-none leading-relaxed" data-v-5e2d257b>${ssrInterpolate(unref(appointment).message)}</textarea></div><div class="pt-2" data-v-5e2d257b><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-5e2d257b>`);
      if (unref(loading)) {
        _push(`<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-5e2d257b></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<span data-v-5e2d257b>Confirming reservation...</span>`);
      } else {
        _push(`<span class="flex items-center gap-2" data-v-5e2d257b> Confirm reservation `);
        _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
        _push(`</span>`);
      }
      _push(`</button></div></form></div></div><div class="lg:col-span-5 space-y-5" data-v-5e2d257b><div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden" data-v-5e2d257b>`);
      _push(ssrRenderComponent(unref(ShieldCheck), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5" data-v-5e2d257b>`);
      _push(ssrRenderComponent(unref(ShieldCheck), {
        size: 20,
        class: "text-white"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-2" data-v-5e2d257b>Scientific integrity</p><h3 class="text-[18px] font-bold text-white mb-3 leading-snug" data-v-5e2d257b>Guaranteed quality at every step</h3><p class="text-[13px] text-blue-200 leading-relaxed" data-v-5e2d257b> Every appointment is handled by board-certified Cellular Pathology Scientists under the strict guidelines of MDCN and international scientific standards. </p></div><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300" data-v-5e2d257b><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-6" data-v-5e2d257b>Why book with us?</p><div class="space-y-5" data-v-5e2d257b><!--[-->`);
      ssrRenderList(features, (feat, i) => {
        _push(`<div class="flex items-start gap-4 group" data-v-5e2d257b><div class="${ssrRenderClass([featureColors[i % featureColors.length].bg, "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"])}" data-v-5e2d257b>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feat.icon), {
          size: 18,
          class: featureColors[i % featureColors.length].icon
        }, null), _parent);
        _push(`</div><div data-v-5e2d257b><p class="text-[14px] font-semibold text-slate-800 mb-0.5" data-v-5e2d257b>${ssrInterpolate(feat.title)}</p><p class="text-[13px] text-slate-400 leading-relaxed" data-v-5e2d257b>${ssrInterpolate(feat.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300" data-v-5e2d257b><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-5" data-v-5e2d257b>Regional support hubs</p><div class="grid grid-cols-2 gap-3" data-v-5e2d257b><!--[-->`);
      ssrRenderList(hubs, (hub) => {
        _push(`<div class="bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200" data-v-5e2d257b><div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-3" data-v-5e2d257b>`);
        _push(ssrRenderComponent(unref(MapPin), {
          size: 15,
          class: "text-[#1d4e89]"
        }, null, _parent));
        _push(`</div><p class="text-[13px] font-bold text-slate-800" data-v-5e2d257b>${ssrInterpolate(hub.city)}</p><p class="text-[11px] text-slate-400 font-medium mt-0.5" data-v-5e2d257b>${ssrInterpolate(hub.role)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/appointments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const appointments = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e2d257b"]]);

export { appointments as default };
//# sourceMappingURL=appointments-CUTu49ir.mjs.map
