import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useCustomToast, G as GATEWAY_ENDPOINT } from './server.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { M as Microscope } from './microscope-NIYICTiO.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
import { C as ChevronDown } from './chevron-down-BwjocHKn.mjs';
import { F as FileText } from './file-text-BUQYprbl.mjs';
import { X } from './x-BzrXjgTv.mjs';
import { L as LoaderCircle } from './loader-circle-DKvMQerE.mjs';
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

const CloudUpload = createLucideIcon("cloud-upload", [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
]);
const FingerprintPattern = createLucideIcon("fingerprint-pattern", [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
]);
const Hash = createLucideIcon("hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
const MailOpen = createLucideIcon("mail-open", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);
const PenLine = createLucideIcon("pen-line", [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
]);
const abstracts_api = {
  create: (payload) => GATEWAY_ENDPOINT.post("/abstracts", payload),
  getMyAbstracts: () => GATEWAY_ENDPOINT.get("/abstracts/my")
};
const useSubmitAbstract = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const submissionMode = ref("write");
  const selectedFile = ref(null);
  const form = ref({
    primaryAuthor: "",
    email: "",
    affiliation: "",
    keywords: "",
    conference: "THE 2ND INTERNATIONAL CONGRESS 2026 (ABUJA)",
    title: "",
    abstractBody: "",
    fileUrl: ""
  });
  const wordCount = computed(() => {
    if (submissionMode.value === "upload") return 0;
    const text = form.value.abstractBody.trim();
    if (!text) return 0;
    return text.split(/\s+/).length;
  });
  const keywordArray = computed(() => {
    return form.value.keywords.split(",").map((k) => k.trim()).filter(Boolean);
  });
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast({ title: "Error", message: "File exceeds 5MB limit", toastType: "error" });
        return;
      }
      selectedFile.value = file;
    }
  };
  const removeFile = () => {
    selectedFile.value = null;
  };
  const uploadDocument = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await GATEWAY_ENDPOINT.post("/media/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      if (res?.type === "ERROR" || res?.status >= 400) {
        throw new Error(res?.data?.message || "Upload failed");
      }
      return res.data.url;
    } catch (error) {
      throw new Error("Failed to upload document");
    }
  };
  const submitAbstract = async () => {
    if (submissionMode.value === "write" && (wordCount.value < 150 || wordCount.value > 250)) {
      showToast({ title: "Validation", message: "Abstract must be between 150 and 250 words", toastType: "warning" });
      return null;
    }
    if (submissionMode.value === "upload" && !selectedFile.value) {
      showToast({ title: "Validation", message: "Please select a file to upload", toastType: "warning" });
      return null;
    }
    if (!form.value.primaryAuthor || !form.value.title || !form.value.email || !form.value.affiliation) {
      showToast({ title: "Validation", message: "Please fill all required fields", toastType: "warning" });
      return null;
    }
    loading.value = true;
    try {
      let uploadedFileUrl = "";
      if (submissionMode.value === "upload" && selectedFile.value) {
        uploadedFileUrl = await uploadDocument(selectedFile.value);
      }
      const payload = {
        ...form.value,
        abstractBody: submissionMode.value === "write" ? form.value.abstractBody : "",
        fileUrl: uploadedFileUrl,
        keywords: keywordArray.value
      };
      const res = await abstracts_api.create(payload);
      if (res?.type === "ERROR" || res?.status >= 400) {
        showToast({ title: "Submission Failed", message: res?.data?.message || res?.data?.error || "Please check your inputs and try again.", toastType: "error" });
        loading.value = false;
        return null;
      }
      showToast({ title: "Success", message: "Abstract submitted successfully!", toastType: "success" });
      form.value = { primaryAuthor: "", email: "", affiliation: "", keywords: "", conference: form.value.conference, title: "", abstractBody: "", fileUrl: "" };
      selectedFile.value = null;
      return res.data;
    } catch (err) {
      showToast({ title: "Submission Failed", message: err?.response?.data?.message || err.message || "An error occurred", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, form, wordCount, submissionMode, selectedFile, keywordArray, handleFileUpload, removeFile, submitAbstract };
};
const _sfc_main = {
  __name: "abstracts",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      loading,
      form,
      wordCount,
      submissionMode,
      selectedFile,
      keywordArray
    } = useSubmitAbstract();
    ref(null);
    const guidelines = [
      "Mandatory structure: Background, Methods, Results, and Conclusion.",
      "Word limit: 150–250 words for typed submissions.",
      "Document uploads must be PDF or DOCX format (max 5MB).",
      "Ensure affiliations reflect current active academic institutions."
    ];
    const universities = [
      "University of Ibadan (UI)",
      "University of Lagos (UNILAG)",
      "Obafemi Awolowo University (OAU)",
      "Ahmadu Bello University (ABU)",
      "University of Nigeria, Nsukka (UNN)",
      "University of Benin (UNIBEN)",
      "University of Ilorin (UNILORIN)",
      "University of Port Harcourt (UNIPORT)",
      "University of Abuja (UNIABUJA)",
      "Lagos State University (LASU)",
      "Covenant University",
      "Babcock University",
      "Federal University of Technology, Minna (FUTMINNA)",
      "Federal University of Technology, Owerri (FUTO)",
      "Federal University of Technology, Akure (FUTA)",
      "Nnamdi Azikiwe University (UNIZIK)",
      "Bayero University Kano (BUK)",
      "University of Jos (UNIJOS)",
      "University of Calabar (UNICAL)",
      "University of Uyo (UNIUYO)",
      "Olabisi Onabanjo University (OOU)",
      "Afe Babalola University (ABUAD)"
    ];
    const showUniversities = ref(false);
    const filteredUniversities = computed(() => {
      if (!form.value.affiliation) return universities;
      const s = form.value.affiliation.toLowerCase();
      return universities.filter((u) => u.toLowerCase().includes(s));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-85dce143><section class="bg-white border-b border-slate-100" data-v-85dce143><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-85dce143><div class="max-w-3xl" data-v-85dce143><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-85dce143>`);
      _push(ssrRenderComponent(unref(FingerprintPattern), { size: 13 }, null, _parent));
      _push(` Scientific Research Hub </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-85dce143> Abstracts &amp; <span class="text-[#1d4e89]" data-v-85dce143> Publications.</span></h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]" data-v-85dce143> The central portal for submitting investigative findings, accessing scientific archives, and advancing the evolution of cellular pathology in Nigeria. </p></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-85dce143><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-85dce143><div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-v-85dce143><div class="lg:col-span-4 space-y-6" data-v-85dce143><div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden" data-v-85dce143>`);
      _push(ssrRenderComponent(unref(Microscope), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.04] text-blue-800 pointer-events-none"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5" data-v-85dce143>`);
      _push(ssrRenderComponent(unref(Microscope), {
        size: 20,
        class: "text-[#1d4e89]"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-85dce143>Submit your work</p><h2 class="text-[20px] font-bold text-slate-800 mb-3 leading-snug" data-v-85dce143> Contribute to the 2026 Scientific Compendium </h2><p class="text-[13px] text-slate-500 leading-relaxed" data-v-85dce143> Select your preferred submission method and complete the peer-review protocol to have your research archived. </p></div><div class="bg-white border border-slate-200 rounded-2xl p-7" data-v-85dce143><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-5" data-v-85dce143>Submission Guidelines</p><div class="space-y-4" data-v-85dce143><!--[-->`);
      ssrRenderList(guidelines, (g, i) => {
        _push(`<div class="flex items-start gap-4 group" data-v-85dce143><div class="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1d4e89] text-[12px] font-bold flex-shrink-0 mt-0.5 group-hover:bg-[#1d4e89] group-hover:text-white group-hover:border-[#1d4e89] transition-all duration-200" data-v-85dce143>${ssrInterpolate(i + 1)}</div><p class="text-[13px] text-slate-500 leading-relaxed" data-v-85dce143>${ssrInterpolate(g)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden" data-v-85dce143>`);
      _push(ssrRenderComponent(unref(MailOpen), {
        size: 110,
        class: "absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
      }, null, _parent));
      _push(`<p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-3" data-v-85dce143>Need help?</p><h3 class="text-[16px] font-bold text-white mb-2 leading-snug" data-v-85dce143>Have questions about your submission?</h3><p class="text-[13px] text-blue-200 leading-relaxed mb-5" data-v-85dce143> Reach out to the scientific committee for guidance on formatting or eligibility. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-blue-200 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact the committee `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 13 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Contact the committee "),
              createVNode(unref(ArrowRight), { size: 13 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="lg:col-span-8" data-v-85dce143><div class="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10" data-v-85dce143><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-85dce143>Abstract submission</p><h2 class="text-[22px] font-bold text-slate-800 mb-7 leading-snug" data-v-85dce143>Submit your research</h2><form class="space-y-6" data-v-85dce143><div class="flex p-1 bg-slate-100 rounded-xl border border-slate-200" data-v-85dce143><button type="button" class="${ssrRenderClass([
        "flex-1 py-3 text-[13px] font-semibold rounded-lg transition-all flex items-center justify-center gap-2",
        unref(submissionMode) === "write" ? "bg-white text-[#1d4e89] shadow-sm border border-slate-200" : "text-slate-400 hover:text-slate-600"
      ])}" data-v-85dce143>`);
      _push(ssrRenderComponent(unref(PenLine), { size: 14 }, null, _parent));
      _push(` Compose abstract </button><button type="button" class="${ssrRenderClass([
        "flex-1 py-3 text-[13px] font-semibold rounded-lg transition-all flex items-center justify-center gap-2",
        unref(submissionMode) === "upload" ? "bg-white text-[#1d4e89] shadow-sm border border-slate-200" : "text-slate-400 hover:text-slate-600"
      ])}" data-v-85dce143>`);
      _push(ssrRenderComponent(unref(CloudUpload), { size: 14 }, null, _parent));
      _push(` Upload document </button></div><div class="grid sm:grid-cols-2 gap-5" data-v-85dce143><div class="space-y-1.5" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Lead Investigator</label><input${ssrRenderAttr("value", unref(form).primaryAuthor)} type="text" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" placeholder="Dr. Jane Doe" required data-v-85dce143></div><div class="space-y-1.5" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Email Address</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" placeholder="jane.doe@institution.edu" required data-v-85dce143></div></div><div class="space-y-1.5 relative" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Affiliation / Institution</label><div class="relative" data-v-85dce143><input${ssrRenderAttr("value", unref(form).affiliation)} type="text" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 pr-10" placeholder="Search or enter institution..." required data-v-85dce143>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none",
        size: 16
      }, null, _parent));
      if (showUniversities.value && filteredUniversities.value.length) {
        _push(`<div class="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-52 overflow-y-auto p-1.5" data-v-85dce143><!--[-->`);
        ssrRenderList(filteredUniversities.value, (uni) => {
          _push(`<button type="button" class="w-full text-left px-4 py-2.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-[#1d4e89] font-medium rounded-lg transition-colors" data-v-85dce143>${ssrInterpolate(uni)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-1.5" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Scientific Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] font-semibold px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" placeholder="Enter the full title of your research" required data-v-85dce143></div><div class="space-y-1.5" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Keywords</label><input${ssrRenderAttr("value", unref(form).keywords)} type="text" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200" placeholder="Type keywords separated by comma (e.g., Cytology, Genetics)" required data-v-85dce143><div class="flex flex-wrap gap-2 pt-1 min-h-[28px]" data-v-85dce143><!--[-->`);
      ssrRenderList(unref(keywordArray), (kw, idx) => {
        _push(`<span class="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 border border-blue-100 text-[#1d4e89] rounded-lg text-[12px] font-semibold" data-v-85dce143>`);
        _push(ssrRenderComponent(unref(Hash), { size: 11 }, null, _parent));
        _push(` ${ssrInterpolate(kw)}</span>`);
      });
      _push(`<!--]--></div></div><div class="space-y-1.5" data-v-85dce143>`);
      if (unref(submissionMode) === "write") {
        _push(`<div class="space-y-1.5" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Abstract Body</label><div class="relative" data-v-85dce143><textarea rows="7" class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-4 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 resize-none leading-relaxed" placeholder="Draft your research summary (Background, Methods, Results, Conclusion)..." data-v-85dce143>${ssrInterpolate(unref(form).abstractBody)}</textarea><div class="absolute bottom-3 right-3 bg-white border border-slate-200 rounded-lg px-3 py-1" data-v-85dce143><span class="${ssrRenderClass([
          "text-[12px] font-semibold font-mono",
          unref(wordCount) < 150 || unref(wordCount) > 250 ? "text-rose-500" : "text-[#1d4e89]"
        ])}" data-v-85dce143>${ssrInterpolate(unref(wordCount))} / 250 words </span></div></div></div>`);
      } else {
        _push(`<div class="space-y-1.5" data-v-85dce143><label class="text-[12px] font-semibold text-slate-500" data-v-85dce143>Document Upload</label>`);
        if (!unref(selectedFile)) {
          _push(`<div class="relative cursor-pointer group" data-v-85dce143><div class="border border-dashed border-slate-300 group-hover:border-blue-300 bg-slate-50 group-hover:bg-blue-50/40 rounded-xl py-12 px-6 flex flex-col items-center justify-center text-center transition-all duration-200" data-v-85dce143><div class="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89] mb-4 group-hover:-translate-y-1 transition-transform duration-200" data-v-85dce143>`);
          _push(ssrRenderComponent(unref(CloudUpload), { size: 22 }, null, _parent));
          _push(`</div><p class="text-[14px] font-semibold text-slate-700 mb-1" data-v-85dce143>Click to browse documents</p><p class="text-[12px] text-slate-400" data-v-85dce143>PDF, DOC, DOCX — max 5MB</p></div><input type="file" class="hidden" accept=".pdf,.doc,.docx" data-v-85dce143></div>`);
        } else {
          _push(`<div class="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between" data-v-85dce143><div class="flex items-center gap-3" data-v-85dce143><div class="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89]" data-v-85dce143>`);
          _push(ssrRenderComponent(unref(FileText), { size: 18 }, null, _parent));
          _push(`</div><div data-v-85dce143><p class="text-[13px] font-semibold text-slate-800 truncate max-w-[220px] sm:max-w-[340px]" data-v-85dce143>${ssrInterpolate(unref(selectedFile).name)}</p><p class="text-[12px] text-slate-400" data-v-85dce143>${ssrInterpolate((unref(selectedFile).size / 1024 / 1024).toFixed(2))} MB</p></div></div><button type="button" class="w-8 h-8 rounded-lg bg-white hover:bg-rose-50 border border-slate-200 text-slate-400 hover:text-rose-500 flex items-center justify-center transition-all" data-v-85dce143>`);
          _push(ssrRenderComponent(unref(X), { size: 15 }, null, _parent));
          _push(`</button></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="pt-2" data-v-85dce143><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200" data-v-85dce143>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(unref(LoaderCircle), {
          class: "animate-spin",
          size: 16
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<span data-v-85dce143>Transmitting...</span>`);
      } else {
        _push(`<span class="flex items-center gap-2" data-v-85dce143> Formalize submission `);
        _push(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent));
        _push(`</span>`);
      }
      _push(`</button></div></form></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/abstracts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const abstracts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85dce143"]]);

export { abstracts as default };
//# sourceMappingURL=abstracts-Bxk6zxEY.mjs.map
