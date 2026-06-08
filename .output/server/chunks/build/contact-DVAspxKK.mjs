import { ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useCreateAppointment, C as Clock } from './useCreateAppointment-DNfs5wb2.mjs';
import { u as useNewsletter, M as Mail } from './useNewsletter-B5XJZSJl.mjs';
import { _ as _export_sfc, a as useCustomToast, G as GATEWAY_ENDPOINT } from './server.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { M as MapPin } from './map-pin-BeeoToV4.mjs';
import { G as Globe } from './globe-CEE0QZpa.mjs';
import { C as CircleCheckBig } from './circle-check-big-D7zYEQSA.mjs';
import { C as ChevronDown } from './chevron-down-BwjocHKn.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
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

const MessagesSquare = createLucideIcon("messages-square", [
  [
    "path",
    {
      d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      key: "1n2ejm"
    }
  ],
  [
    "path",
    {
      d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
      key: "1qfcsi"
    }
  ]
]);
const Phone = createLucideIcon("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const enquiries_api = {
  create: (payload) => GATEWAY_ENDPOINT.post("/enquiries", payload)
};
const useSubmitEnquiry = () => {
  const loading = ref(false);
  const success = ref(false);
  const { showToast } = useCustomToast();
  const payload = ref({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const submitEnquiry = async () => {
    if (!payload.value.fullName || !payload.value.email || !payload.value.message) {
      showToast({ title: "Validation", message: "Please fill in all required fields", toastType: "warning" });
      return null;
    }
    loading.value = true;
    try {
      const apiPayload = {
        name: payload.value.fullName,
        email: payload.value.email,
        subject: payload.value.subject || "General Inquiry",
        message: payload.value.message
      };
      const res = await enquiries_api.create(apiPayload);
      success.value = true;
      showToast({ title: "Success", message: "Your message has been sent!", toastType: "success" });
      payload.value = { fullName: "", email: "", subject: "", message: "" };
      return res.data;
    } catch (err) {
      showToast({ title: "Error", message: err?.response?.data?.message || "Failed to send message", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, success, payload, submitEnquiry };
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const contactTab = ref("appointment");
    const { loading, success, appointment } = useCreateAppointment();
    const { loading: enquiryLoading, success: enquirySuccess, payload: enquiryPayload } = useSubmitEnquiry();
    const {
      loading: newsletterLoading,
      email: newsletterEmail,
      fullName: newsletterFullName,
      categories: newsletterCategories,
      selectedCategories
    } = useNewsletter();
    const totalAmount = computed(() => {
      if (!newsletterCategories.value) return 0;
      return newsletterCategories.value.filter((c) => selectedCategories.value.includes(c._id)).reduce((sum, c) => sum + c.price, 0);
    });
    const needsPayment = computed(() => totalAmount.value > 0);
    const contactInfo = [
      {
        title: "Physical office address",
        icon: MapPin,
        lines: ["AMLSN House, ", "Plot 672, Cadastral Zone (BO2), Durumi Phase 1, Abuja, FCT, Nigeria."],
        colors: { bg: "bg-blue-50", icon: "text-[#1d4e89]" }
      },
      {
        title: "Digital portal",
        icon: Globe,
        lines: ["info@scpsn.org.ng", "admin@scpsn.org.ng"],
        colors: { bg: "bg-teal-50", icon: "text-teal-700" }
      },
      {
        title: "Direct line",
        icon: Phone,
        lines: ["+234 901 437 7191", "+234 809 371 6175"],
        colors: { bg: "bg-green-50", icon: "text-green-700" }
      }
    ];
    const operatingHours = [
      { days: "Mon — Fri", time: "08:00 – 17:00 (GMT+1)", status: "Active" },
      { days: "Saturday", time: "10:00 – 14:00 (GMT+1)", status: "Limited" },
      { days: "Sunday", time: "Closed", status: "Closed" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-0ceab96b><section class="bg-white border-b border-slate-100" data-v-0ceab96b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-0ceab96b><div class="max-w-3xl" data-v-0ceab96b><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-0ceab96b>`);
      _push(ssrRenderComponent(unref(MessagesSquare), { size: 13 }, null, _parent));
      _push(` Strategic Hub </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-0ceab96b> Connect With <span class="text-[#1d4e89]" data-v-0ceab96b> SCPSC.</span></h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]" data-v-0ceab96b> Direct engagement for scientific inquiries, appointments, and laboratory consultations with Nigeria&#39;s premier cellular pathology body. </p></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-0ceab96b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-v-0ceab96b><div class="grid sm:grid-cols-3 gap-4" data-v-0ceab96b><!--[-->`);
      ssrRenderList(contactInfo, (info) => {
        _push(`<div class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-300 flex items-start gap-4" data-v-0ceab96b><div class="${ssrRenderClass([info.colors.bg, "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"])}" data-v-0ceab96b>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(info.icon), {
          size: 18,
          class: info.colors.icon
        }, null), _parent);
        _push(`</div><div data-v-0ceab96b><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1" data-v-0ceab96b>${ssrInterpolate(info.title)}</p><!--[-->`);
        ssrRenderList(info.lines, (line) => {
          _push(`<p class="text-[13px] font-medium text-slate-700 leading-relaxed" data-v-0ceab96b>${ssrInterpolate(line)}</p>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-white border-b border-slate-100" data-v-0ceab96b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-0ceab96b><div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-v-0ceab96b><div class="lg:col-span-7" data-v-0ceab96b><div class="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10" data-v-0ceab96b>`);
      if (unref(success) || unref(enquirySuccess)) {
        _push(`<div class="flex flex-col items-center justify-center text-center py-16" data-v-0ceab96b><div class="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-5" data-v-0ceab96b>`);
        _push(ssrRenderComponent(unref(CircleCheckBig), {
          size: 28,
          class: "text-green-600"
        }, null, _parent));
        _push(`</div><p class="text-[11px] font-semibold text-green-600 tracking-widest uppercase mb-2" data-v-0ceab96b>Success</p><h3 class="text-[22px] font-bold text-slate-800 mb-3 leading-snug" data-v-0ceab96b>Request received</h3><p class="text-[14px] text-slate-400 max-w-xs mx-auto leading-relaxed mb-8" data-v-0ceab96b> Your engagement has been added to our queue. A representative will be in touch shortly. </p><button class="inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200" data-v-0ceab96b> New engagement </button></div>`);
      } else {
        _push(`<!--[--><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-0ceab96b>Get in touch</p><h2 class="text-[22px] font-bold text-slate-800 mb-7 leading-snug" data-v-0ceab96b>Send us a message</h2><div class="flex p-1 bg-slate-100 rounded-xl border border-slate-200 mb-8" data-v-0ceab96b><button class="${ssrRenderClass([
          "flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all",
          contactTab.value === "appointment" ? "bg-white text-[#1d4e89] shadow-sm border border-slate-200" : "text-slate-400 hover:text-slate-600"
        ])}" data-v-0ceab96b> Appointment </button><button class="${ssrRenderClass([
          "flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all",
          contactTab.value === "enquiry" ? "bg-white text-[#1d4e89] shadow-sm border border-slate-200" : "text-slate-400 hover:text-slate-600"
        ])}" data-v-0ceab96b> General inquiry </button></div>`);
        if (contactTab.value === "appointment") {
          _push(`<form class="space-y-5" data-v-0ceab96b><div class="grid sm:grid-cols-2 gap-5" data-v-0ceab96b><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Designation &amp; Name</label><input${ssrRenderAttr("value", unref(appointment).fullName)} type="text" placeholder="Dr. John Doe, MLS" class="field" required data-v-0ceab96b></div><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Official Email</label><input${ssrRenderAttr("value", unref(appointment).email)} type="email" placeholder="john@example.com" class="field" required data-v-0ceab96b></div></div><div class="grid sm:grid-cols-2 gap-5" data-v-0ceab96b><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Priority Date</label><input${ssrRenderAttr("value", unref(appointment).date)} type="date" class="field" required data-v-0ceab96b></div><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Engagement Intent</label><div class="relative" data-v-0ceab96b><select class="field appearance-none cursor-pointer pr-9" required data-v-0ceab96b><option value="" disabled data-v-0ceab96b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, "") : ssrLooseEqual(unref(appointment).purpose, "")) ? " selected" : ""}>Select engagement type</option><option data-v-0ceab96b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Membership Protocols</option><option data-v-0ceab96b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Conference Sponsorship</option><option data-v-0ceab96b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Scientific Governance</option><option data-v-0ceab96b${ssrIncludeBooleanAttr(Array.isArray(unref(appointment).purpose) ? ssrLooseContain(unref(appointment).purpose, null) : ssrLooseEqual(unref(appointment).purpose, null)) ? " selected" : ""}>Laboratory Validation</option></select>`);
          _push(ssrRenderComponent(unref(ChevronDown), {
            class: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none",
            size: 16
          }, null, _parent));
          _push(`</div></div></div><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Brief Context</label><textarea rows="5" placeholder="Provide strategic details..." class="field resize-none leading-relaxed" data-v-0ceab96b>${ssrInterpolate(unref(appointment).message)}</textarea></div><div class="pt-2" data-v-0ceab96b><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-0ceab96b>`);
          if (unref(loading)) {
            _push(`<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-0ceab96b></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(loading)) {
            _push(`<span data-v-0ceab96b>Submitting...</span>`);
          } else {
            _push(`<span class="flex items-center gap-2" data-v-0ceab96b> Formalize appointment `);
            _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
            _push(`</span>`);
          }
          _push(`</button></div></form>`);
        } else {
          _push(`<form class="space-y-5" data-v-0ceab96b><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Your Name</label><input${ssrRenderAttr("value", unref(enquiryPayload).fullName)} type="text" placeholder="Full name" class="field" required data-v-0ceab96b></div><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Email Address</label><input${ssrRenderAttr("value", unref(enquiryPayload).email)} type="email" placeholder="john@example.com" class="field" required data-v-0ceab96b></div><div class="space-y-1.5" data-v-0ceab96b><label class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Message</label><textarea rows="6" placeholder="How can we help you today?" class="field resize-none leading-relaxed" data-v-0ceab96b>${ssrInterpolate(unref(enquiryPayload).message)}</textarea></div><div class="pt-2" data-v-0ceab96b><button type="submit"${ssrIncludeBooleanAttr(unref(enquiryLoading)) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-0ceab96b>`);
          if (unref(enquiryLoading)) {
            _push(`<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-0ceab96b></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(enquiryLoading)) {
            _push(`<span data-v-0ceab96b>Sending...</span>`);
          } else {
            _push(`<span class="flex items-center gap-2" data-v-0ceab96b> Send message `);
            _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
            _push(`</span>`);
          }
          _push(`</button></div></form>`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="lg:col-span-5 space-y-5" data-v-0ceab96b><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300" data-v-0ceab96b><div class="flex items-center gap-3 mb-6" data-v-0ceab96b><div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-v-0ceab96b>`);
      _push(ssrRenderComponent(unref(Clock), {
        size: 18,
        class: "text-[#1d4e89]"
      }, null, _parent));
      _push(`</div><div data-v-0ceab96b><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase" data-v-0ceab96b>Operational hours</p></div></div><div class="space-y-3" data-v-0ceab96b><!--[-->`);
      ssrRenderList(operatingHours, (schedule) => {
        _push(`<div class="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 last:pb-0" data-v-0ceab96b><span class="text-[13px] font-medium text-slate-500" data-v-0ceab96b>${ssrInterpolate(schedule.days)}</span><span class="${ssrRenderClass([schedule.status === "Closed" ? "bg-red-50 text-red-500 border border-red-100" : "bg-blue-50 text-[#1d4e89] border border-blue-100", "text-[12px] font-semibold px-3 py-1 rounded-lg"])}" data-v-0ceab96b>${ssrInterpolate(schedule.time)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden" data-v-0ceab96b>`);
      _push(ssrRenderComponent(unref(Globe), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5" data-v-0ceab96b>`);
      _push(ssrRenderComponent(unref(Globe), {
        size: 18,
        class: "text-white"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-2" data-v-0ceab96b>Strategic appointments</p><h3 class="text-[18px] font-bold text-white mb-3 leading-snug" data-v-0ceab96b> Engage with our executive scientific board </h3><p class="text-[13px] text-blue-200 leading-relaxed" data-v-0ceab96b> Formalize your engagement through our priority scheduling system for conferences, governance, and laboratory collaborations. </p></div><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden" data-v-0ceab96b>`);
      _push(ssrRenderComponent(unref(Mail), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.04] text-blue-800 pointer-events-none"
      }, null, _parent));
      _push(`<p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-0ceab96b>Newsletter</p><h3 class="text-[17px] font-bold text-slate-800 mb-3 leading-snug" data-v-0ceab96b>Join our scientific network</h3><p class="text-[13px] text-slate-500 leading-relaxed mb-6" data-v-0ceab96b> Receive prioritized updates on conference abstracts and legislative pathology news. </p><div class="space-y-3" data-v-0ceab96b><input${ssrRenderAttr("value", unref(newsletterFullName))} type="text" placeholder="Full name" class="field" data-v-0ceab96b><input${ssrRenderAttr("value", unref(newsletterEmail))} type="email" placeholder="Official email address" class="field" data-v-0ceab96b>`);
      if (unref(newsletterCategories).length > 0) {
        _push(`<div class="space-y-2 pt-1" data-v-0ceab96b><p class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b>Select newsletters</p><div class="space-y-2 max-h-36 overflow-y-auto" data-v-0ceab96b><!--[-->`);
        ssrRenderList(unref(newsletterCategories), (cat) => {
          _push(`<label class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-colors" data-v-0ceab96b><input type="checkbox"${ssrRenderAttr("value", cat._id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategories)) ? ssrLooseContain(unref(selectedCategories), cat._id) : unref(selectedCategories)) ? " checked" : ""} class="w-4 h-4 rounded border-slate-300 text-[#1d4e89] focus:ring-blue-200" data-v-0ceab96b><div data-v-0ceab96b><p class="text-[13px] font-semibold text-slate-800" data-v-0ceab96b>${ssrInterpolate(cat.title)}</p><p class="${ssrRenderClass([cat.price > 0 ? "text-[#1d4e89]" : "text-emerald-600", "text-[11px] font-medium"])}" data-v-0ceab96b>${ssrInterpolate(cat.price > 0 ? `₦${cat.price.toLocaleString()} / year` : "Free subscription")}</p></div></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (needsPayment.value) {
        _push(`<div class="space-y-1.5 pt-2 border-t border-slate-100" data-v-0ceab96b><p class="text-[12px] font-semibold text-slate-500" data-v-0ceab96b> Proof of payment <span class="text-[#1d4e89]" data-v-0ceab96b>— ₦${ssrInterpolate(totalAmount.value.toLocaleString())}</span></p><input type="file" accept="image/*,.pdf" class="w-full text-[12px] text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-blue-50 file:text-[#1d4e89] hover:file:bg-blue-100 cursor-pointer border border-slate-200 rounded-xl p-2 bg-white transition-colors" data-v-0ceab96b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(unref(newsletterLoading)) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200 mt-1" data-v-0ceab96b>`);
      if (unref(newsletterLoading)) {
        _push(`<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-0ceab96b></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(newsletterLoading)) {
        _push(`<span data-v-0ceab96b>Joining...</span>`);
      } else {
        _push(`<span class="flex items-center gap-2" data-v-0ceab96b> Join the network `);
        _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
        _push(`</span>`);
      }
      _push(`</button></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ceab96b"]]);

export { contact as default };
//# sourceMappingURL=contact-DVAspxKK.mjs.map
