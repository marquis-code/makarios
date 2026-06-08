import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { U as Users } from './users-D6INsix-.mjs';
import { F as FlaskConical } from './flask-conical-DU3PU25S.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { A as Award } from './award-C3Kt0fIj.mjs';
import { C as CircleCheckBig } from './circle-check-big-D7zYEQSA.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
import { C as ChevronLeft } from './chevron-left-BR4bkJsQ.mjs';
import { C as Copy } from './copy-CL7k6o2b.mjs';
import { U as Upload, F as FileCheck } from './upload-BYm2eVd6.mjs';
import { X } from './x-BzrXjgTv.mjs';
import { C as Calendar } from './calendar-G-gDUwIF.mjs';
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

const Wallet = createLucideIcon("wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]);
const _sfc_main = {
  __name: "membership",
  __ssrInlineRender: true,
  setup(__props) {
    const activeStep = ref(1);
    const selectedFile = ref(null);
    ref(null);
    const registering = ref(false);
    const steps = ["Personal Info", "Work Details", "Payment"];
    const form = ref({
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      membershipType: ""
    });
    const benefits = [
      "Access to exclusive scientific publications and journals",
      "Discounted registration for the Annual Scientific Conference",
      "Eligibility to vote and hold office in the Society",
      "Access to the SCPSC mentorship network",
      "Professional development and training opportunities",
      "Networking with cellular pathology experts across Nigeria"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-5b386060><section class="bg-white border-b border-slate-100" data-v-5b386060><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-5b386060><div class="max-w-3xl" data-v-5b386060><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(Users), { size: 13 }, null, _parent));
      _push(` Membership Registration </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-5b386060> Join <span class="text-[#1d4e89]" data-v-5b386060>SCPSC</span> Today. </h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]" data-v-5b386060> Become a member of the Society for Cellular Pathology Scientists of Nigeria. Register online in just a few simple steps. </p></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-5b386060><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-5b386060><div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-v-5b386060><div class="lg:col-span-4 space-y-5" data-v-5b386060><div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(FlaskConical), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(FlaskConical), {
        size: 18,
        class: "text-white"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-2" data-v-5b386060>About SCPSC</p><h3 class="text-[17px] font-bold text-white mb-3 leading-snug" data-v-5b386060> Nigeria&#39;s premier cellular pathology body </h3><p class="text-[13px] text-blue-200 leading-relaxed" data-v-5b386060> Founded in 2007 in Ilorin, Kwara State, SCPSC is the official professional body for Histoscientists and Cytologists in Nigeria, championing excellence in cellular pathology across the nation. </p></div><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300" data-v-5b386060><div class="flex items-center gap-3 mb-6" data-v-5b386060><div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(Wallet), {
        size: 18,
        class: "text-[#1d4e89]"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase" data-v-5b386060>Membership fees</p></div><div class="space-y-3" data-v-5b386060><div class="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-xl" data-v-5b386060><div data-v-5b386060><p class="text-[13px] font-semibold text-slate-700" data-v-5b386060>New Registration</p><p class="text-[12px] text-slate-400 mt-0.5" data-v-5b386060>First-time members</p></div><span class="text-[20px] font-bold text-emerald-600" data-v-5b386060>₦20,000</span></div><div class="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl" data-v-5b386060><div data-v-5b386060><p class="text-[13px] font-semibold text-slate-700" data-v-5b386060>Annual Renewal</p><p class="text-[12px] text-slate-400 mt-0.5" data-v-5b386060>Existing members</p></div><span class="text-[20px] font-bold text-[#1d4e89]" data-v-5b386060>₦10,000<span class="text-[13px] font-normal text-slate-400" data-v-5b386060>/yr</span></span></div></div></div><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(Award), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.04] text-blue-800 pointer-events-none"
      }, null, _parent));
      _push(`<div class="flex items-center gap-3 mb-6" data-v-5b386060><div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(Award), {
        size: 18,
        class: "text-amber-600"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase" data-v-5b386060>Member benefits</p></div><ul class="space-y-3" data-v-5b386060><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<li class="flex items-start gap-3" data-v-5b386060>`);
        _push(ssrRenderComponent(unref(CircleCheckBig), {
          size: 15,
          class: "text-emerald-500 flex-shrink-0 mt-0.5"
        }, null, _parent));
        _push(`<span class="text-[13px] text-slate-500 leading-relaxed" data-v-5b386060>${ssrInterpolate(benefit)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between hover:border-blue-200 transition-all duration-200" data-v-5b386060><div data-v-5b386060><p class="text-[12px] font-semibold text-slate-400 mb-0.5" data-v-5b386060>Need help?</p><p class="text-[13px] font-semibold text-slate-700" data-v-5b386060>info@SCPSC.org.ng</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1d4e89] hover:text-blue-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact us `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 13 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Contact us "),
              createVNode(unref(ArrowRight), { size: 13 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="lg:col-span-8 space-y-5" data-v-5b386060><div class="bg-white border border-slate-200 rounded-2xl overflow-hidden" data-v-5b386060><div class="flex border-b border-slate-100" data-v-5b386060><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<button class="${ssrRenderClass([
          "flex-1 py-5 text-[13px] font-semibold transition-all relative",
          activeStep.value === i + 1 ? "text-[#1d4e89]" : "text-slate-400 hover:text-slate-600"
        ])}" data-v-5b386060><span class="hidden sm:inline" data-v-5b386060>${ssrInterpolate(String(i + 1).padStart(2, "0"))}. </span>${ssrInterpolate(step)} `);
        if (activeStep.value === i + 1) {
          _push(`<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d4e89] rounded-t-full" data-v-5b386060></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div><div class="h-1 bg-slate-100" data-v-5b386060><div class="h-full bg-[#1d4e89] transition-all duration-500" style="${ssrRenderStyle({ width: `${activeStep.value / 3 * 100}%` })}" data-v-5b386060></div></div><div class="p-7 lg:p-10 min-h-[440px]" data-v-5b386060>`);
      if (activeStep.value === 1) {
        _push(`<div class="space-y-5" data-v-5b386060><div data-v-5b386060><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1" data-v-5b386060>Step 1</p><h2 class="text-[20px] font-bold text-slate-800 mb-6" data-v-5b386060>Personal information</h2></div><div class="space-y-1.5" data-v-5b386060><label class="text-[12px] font-semibold text-slate-500" data-v-5b386060>Full Name <span class="text-red-400" data-v-5b386060>*</span></label><input${ssrRenderAttr("value", form.value.fullName)} type="text" class="field" placeholder="e.g. MLS Julius Kayode" data-v-5b386060></div><div class="space-y-1.5" data-v-5b386060><label class="text-[12px] font-semibold text-slate-500" data-v-5b386060>Email Address <span class="text-red-400" data-v-5b386060>*</span></label><input${ssrRenderAttr("value", form.value.email)} type="email" class="field" placeholder="e.g. julius@gmail.com" data-v-5b386060></div><div class="space-y-1.5" data-v-5b386060><label class="text-[12px] font-semibold text-slate-500" data-v-5b386060>Phone Number <span class="text-red-400" data-v-5b386060>*</span></label><input${ssrRenderAttr("value", form.value.phone)} type="tel" class="field" placeholder="e.g. 08012345678" data-v-5b386060></div><div class="pt-3" data-v-5b386060><button${ssrIncludeBooleanAttr(!form.value.fullName || !form.value.email || !form.value.phone) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-5b386060> Continue to work details `);
        _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeStep.value === 2) {
        _push(`<div class="space-y-5" data-v-5b386060><div data-v-5b386060><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1" data-v-5b386060>Step 2</p><h2 class="text-[20px] font-bold text-slate-800 mb-6" data-v-5b386060>Work details</h2></div><div class="space-y-1.5" data-v-5b386060><label class="text-[12px] font-semibold text-slate-500" data-v-5b386060>Place of Work / Institution</label><input${ssrRenderAttr("value", form.value.institution)} type="text" class="field" placeholder="e.g. University of Ilorin Teaching Hospital" data-v-5b386060></div><div class="space-y-1.5" data-v-5b386060><label class="text-[12px] font-semibold text-slate-500" data-v-5b386060>Registration Type <span class="text-red-400" data-v-5b386060>*</span></label><div class="grid sm:grid-cols-2 gap-4 pt-1" data-v-5b386060><button class="${ssrRenderClass([
          "p-5 rounded-xl border-2 transition-all text-left",
          form.value.membershipType === "New" ? "border-[#1d4e89] bg-blue-50/60" : "border-slate-200 hover:border-blue-200 bg-white"
        ])}" data-v-5b386060><div class="flex items-center justify-between mb-3" data-v-5b386060><p class="text-[13px] font-semibold text-slate-700" data-v-5b386060>New Registration</p><div class="${ssrRenderClass([form.value.membershipType === "New" ? "border-[#1d4e89] bg-[#1d4e89]" : "border-slate-300", "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all"])}" data-v-5b386060>`);
        if (form.value.membershipType === "New") {
          _push(`<div class="w-1.5 h-1.5 rounded-full bg-white" data-v-5b386060></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><p class="text-[22px] font-bold text-slate-900" data-v-5b386060>₦20,000</p><p class="text-[12px] text-slate-400 mt-0.5" data-v-5b386060>First-time member — one-time fee</p></button><button class="${ssrRenderClass([
          "p-5 rounded-xl border-2 transition-all text-left",
          form.value.membershipType === "Renewal" ? "border-[#1d4e89] bg-blue-50/60" : "border-slate-200 hover:border-blue-200 bg-white"
        ])}" data-v-5b386060><div class="flex items-center justify-between mb-3" data-v-5b386060><p class="text-[13px] font-semibold text-slate-700" data-v-5b386060>Annual Renewal</p><div class="${ssrRenderClass([form.value.membershipType === "Renewal" ? "border-[#1d4e89] bg-[#1d4e89]" : "border-slate-300", "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all"])}" data-v-5b386060>`);
        if (form.value.membershipType === "Renewal") {
          _push(`<div class="w-1.5 h-1.5 rounded-full bg-white" data-v-5b386060></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><p class="text-[22px] font-bold text-slate-900" data-v-5b386060>₦10,000<span class="text-[13px] font-normal text-slate-400" data-v-5b386060>/year</span></p><p class="text-[12px] text-slate-400 mt-0.5" data-v-5b386060>Existing member</p></button></div></div><div class="pt-3 flex gap-3" data-v-5b386060><button class="inline-flex items-center gap-1.5 border border-slate-200 hover:border-slate-300 text-slate-600 text-[14px] font-semibold px-5 py-3.5 rounded-xl transition-colors duration-200" data-v-5b386060>`);
        _push(ssrRenderComponent(unref(ChevronLeft), { size: 15 }, null, _parent));
        _push(` Back </button><button${ssrIncludeBooleanAttr(!form.value.membershipType) ? " disabled" : ""} class="flex-1 inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-5b386060> Continue to payment `);
        _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeStep.value === 3) {
        _push(`<div class="space-y-6" data-v-5b386060><div data-v-5b386060><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1" data-v-5b386060>Step 3</p><h2 class="text-[20px] font-bold text-slate-800 mb-6" data-v-5b386060>Payment &amp; receipt</h2></div><div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5" data-v-5b386060><div data-v-5b386060><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1" data-v-5b386060>Membership dues payment</p><h4 class="text-[17px] font-bold text-slate-800" data-v-5b386060>UBA — United Bank for Africa</h4></div><div class="grid grid-cols-2 gap-5" data-v-5b386060><div data-v-5b386060><p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1" data-v-5b386060>Account Number</p><p class="text-[18px] font-mono font-bold text-slate-800 tracking-widest" data-v-5b386060>1023844239</p></div><div data-v-5b386060><p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1" data-v-5b386060>Account Name</p><p class="text-[16px] font-bold text-slate-800" data-v-5b386060>SCPSC</p></div></div><div class="flex items-center justify-between pt-3 border-t border-slate-200" data-v-5b386060><p class="text-[13px] font-semibold text-[#1d4e89] flex items-center gap-2" data-v-5b386060>`);
        _push(ssrRenderComponent(unref(Wallet), { size: 14 }, null, _parent));
        _push(` ${ssrInterpolate(form.value.membershipType === "Renewal" ? "Renewal: ₦10,000" : "New Registration: ₦20,000")}</p><button class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 hover:text-[#1d4e89] bg-white border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-all" data-v-5b386060>`);
        _push(ssrRenderComponent(unref(Copy), { size: 12 }, null, _parent));
        _push(` Copy </button></div></div><div class="space-y-2" data-v-5b386060><label class="text-[12px] font-semibold text-slate-500" data-v-5b386060> Upload Payment Receipt <span class="text-red-400" data-v-5b386060>*</span></label><p class="text-[12px] text-slate-400" data-v-5b386060> After making your transfer, upload a screenshot or photo of your receipt. </p>`);
        if (!selectedFile.value) {
          _push(`<div class="border border-dashed border-slate-300 hover:border-blue-300 bg-slate-50 hover:bg-blue-50/30 rounded-xl py-10 px-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group" data-v-5b386060><div class="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89] mb-4 group-hover:-translate-y-1 transition-transform duration-200" data-v-5b386060>`);
          _push(ssrRenderComponent(unref(Upload), { size: 20 }, null, _parent));
          _push(`</div><p class="text-[14px] font-semibold text-slate-700 mb-1" data-v-5b386060>Click to upload your receipt</p><p class="text-[12px] text-slate-400" data-v-5b386060>PNG, JPG, or PDF — max 5MB</p></div>`);
        } else {
          _push(`<div class="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl" data-v-5b386060><div class="flex items-center gap-3" data-v-5b386060><div class="w-9 h-9 bg-white border border-emerald-200 rounded-lg flex items-center justify-center" data-v-5b386060>`);
          _push(ssrRenderComponent(unref(FileCheck), {
            size: 16,
            class: "text-emerald-600"
          }, null, _parent));
          _push(`</div><div data-v-5b386060><p class="text-[13px] font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[320px]" data-v-5b386060>${ssrInterpolate(selectedFile.value.name)}</p><p class="text-[11px] text-slate-400" data-v-5b386060>${ssrInterpolate((selectedFile.value.size / 1024 / 1024).toFixed(2))} MB</p></div></div><button class="w-8 h-8 rounded-lg bg-white hover:bg-red-50 border border-slate-200 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all" data-v-5b386060>`);
          _push(ssrRenderComponent(unref(X), { size: 14 }, null, _parent));
          _push(`</button></div>`);
        }
        _push(`<input type="file" class="hidden" accept="image/*,.pdf" data-v-5b386060></div><div class="pt-1 flex gap-3" data-v-5b386060><button${ssrIncludeBooleanAttr(registering.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 border border-slate-200 hover:border-slate-300 text-slate-600 text-[14px] font-semibold px-5 py-3.5 rounded-xl transition-colors duration-200" data-v-5b386060>`);
        _push(ssrRenderComponent(unref(ChevronLeft), { size: 15 }, null, _parent));
        _push(` Back </button><button${ssrIncludeBooleanAttr(registering.value || !selectedFile.value) ? " disabled" : ""} class="flex-1 inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-5b386060>`);
        if (registering.value) {
          _push(`<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-5b386060></div>`);
        } else {
          _push(`<!---->`);
        }
        if (registering.value) {
          _push(`<span data-v-5b386060>Submitting...</span>`);
        } else {
          _push(`<span class="flex items-center gap-2" data-v-5b386060> Submit registration `);
          _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
          _push(`</span>`);
        }
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300" data-v-5b386060><div class="flex items-start gap-4 mb-5" data-v-5b386060><div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(Calendar), {
        size: 18,
        class: "text-[#1d4e89]"
      }, null, _parent));
      _push(`</div><div data-v-5b386060><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5" data-v-5b386060>Conference payments</p><p class="text-[13px] text-slate-400" data-v-5b386060>For annual scientific conference registration</p></div></div><div class="grid grid-cols-3 gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5 mb-4" data-v-5b386060><div data-v-5b386060><p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1" data-v-5b386060>Bank</p><p class="text-[13px] font-bold text-slate-800" data-v-5b386060>Access Bank</p></div><div data-v-5b386060><p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1" data-v-5b386060>Account No.</p><p class="text-[14px] font-mono font-bold text-slate-800 tracking-wider" data-v-5b386060>0800585701</p></div><div data-v-5b386060><p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1" data-v-5b386060>Account Name</p><p class="text-[13px] font-bold text-slate-800" data-v-5b386060>SCPSC</p></div></div><button class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-400 hover:text-[#1d4e89] transition-colors" data-v-5b386060>`);
      _push(ssrRenderComponent(unref(Copy), { size: 12 }, null, _parent));
      _push(` Copy conference account number </button></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/membership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const membership = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b386060"]]);

export { membership as default };
//# sourceMappingURL=membership-CNtjxi7X.mjs.map
