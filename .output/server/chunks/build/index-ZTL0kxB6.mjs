import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc, h as useCMS, G as GATEWAY_ENDPOINT } from './server.mjs';
import _sfc_main$2 from './EmptyState-OBLGlnua.mjs';
import { u as useGetExcos } from './useGetExcos-BjB5F6QN.mjs';
import { u as useGetConferences } from './useGetConferences-DkVNekcZ.mjs';
import { u as useGallery, C as ChevronRight } from './useGallery-BAzcooiq.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { F as FlaskConical } from './flask-conical-DU3PU25S.mjs';
import { G as Globe } from './globe-CEE0QZpa.mjs';
import { M as Microscope } from './microscope-NIYICTiO.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
import { C as ChevronLeft } from './chevron-left-BR4bkJsQ.mjs';
import { U as User } from './user-MjtyRiwp.mjs';
import { A as Award } from './award-C3Kt0fIj.mjs';
import { M as MapPin } from './map-pin-BeeoToV4.mjs';
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
import './inbox-BgA8mAs9.mjs';
import './conferences-Bq2UpmDq.mjs';

const Check = createLucideIcon("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Dna = createLucideIcon("dna", [
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
  ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }]
]);
const GraduationCap = createLucideIcon("graduation-cap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
const Library = createLucideIcon("library", [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
]);
const Stethoscope = createLucideIcon("stethoscope", [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
]);
const adverts_api = {
  getPublicAdverts: () => GATEWAY_ENDPOINT.get("/adverts/public"),
  trackClick: (id) => GATEWAY_ENDPOINT.post(`/adverts/${id}/click`)
};
const useAdverts = () => {
  const loading = ref(false);
  const groupedAdverts = ref({});
  const fetchAdverts = async () => {
    loading.value = true;
    try {
      const res = await adverts_api.getPublicAdverts();
      groupedAdverts.value = res.data?.data || res.data || {};
    } catch (err) {
      console.error("Failed to load adverts", err);
    } finally {
      loading.value = false;
    }
  };
  const trackClick = async (id, url) => {
    try {
      adverts_api.trackClick(id).catch(console.error);
    } finally {
      if (url) (void 0).open(url, "_blank");
    }
  };
  return { loading, groupedAdverts, fetchAdverts, trackClick };
};
const _sfc_main$1 = {
  __name: "AdBanner",
  __ssrInlineRender: true,
  props: {
    adverts: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    useAdverts();
    const activeAdvert = computed(() => {
      return props.adverts[0];
    });
    const hasComplexData = computed(() => {
      const ad = activeAdvert.value;
      if (!ad) return false;
      return ad.services && ad.services.length > 0 || ad.benefits && ad.benefits.length > 0 || ad.targetAudience && ad.targetAudience.length > 0 || ad.companyName || ad.contactPhone;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.adverts && __props.adverts.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative group my-8" }, _attrs))}><a${ssrRenderAttr("href", activeAdvert.value.targetUrl || "#")} target="_blank" rel="noopener noreferrer" class="block w-full rounded-3xl overflow-hidden relative shadow-2xl hover:shadow-[0_20px_50px_rgba(0,150,255,0.15)] transition-all duration-500 bg-white"><div class="absolute top-4 right-4 z-30"><span class="px-3 py-1 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-black rounded-lg border border-white/20 shadow-lg">Sponsored</span></div>`);
        if (hasComplexData.value) {
          _push(`<div class="flex flex-col md:flex-row w-full bg-slate-50"><div class="w-full md:w-2/5 relative min-h-[300px] overflow-hidden bg-slate-900"><img${ssrRenderAttr("src", activeAdvert.value.imageUrl)} class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110" aria-hidden="true"><img${ssrRenderAttr("src", activeAdvert.value.imageUrl)}${ssrRenderAttr("alt", activeAdvert.value.title)} class="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 z-10"><div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 z-20 pointer-events-none"><h3 class="text-3xl font-black text-white drop-shadow-lg leading-tight">${ssrInterpolate(activeAdvert.value.companyName || activeAdvert.value.title)}</h3>`);
          if (activeAdvert.value.description) {
            _push(`<p class="text-white/90 mt-2 text-base">${ssrInterpolate(activeAdvert.value.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between"><div class="grid grid-cols-1 md:grid-cols-2 gap-8">`);
          if (activeAdvert.value.services && activeAdvert.value.services.length > 0) {
            _push(`<div><div class="flex items-center gap-2 mb-4 text-[#1d4e89]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13 2 2 4-4"></path></svg><h4 class="font-bold text-base tracking-wider">Our Services</h4></div><ul class="space-y-2"><!--[-->`);
            ssrRenderList(activeAdvert.value.services, (service, idx) => {
              _push(`<li class="flex items-start gap-2 text-base text-slate-700 font-medium"><span class="text-blue-500 mt-0.5">•</span> ${ssrInterpolate(service)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          if (activeAdvert.value.benefits && activeAdvert.value.benefits.length > 0) {
            _push(`<div><div class="flex items-center gap-2 mb-4 text-amber-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><h4 class="font-bold text-base tracking-wider">Benefits</h4></div><ul class="space-y-2"><!--[-->`);
            ssrRenderList(activeAdvert.value.benefits, (benefit, idx) => {
              _push(`<li class="flex items-start gap-2 text-base text-slate-700 font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg><span>${ssrInterpolate(benefit)}</span></li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          if (activeAdvert.value.targetAudience && activeAdvert.value.targetAudience.length > 0) {
            _push(`<div><div class="flex items-center gap-2 mb-4 text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><h4 class="font-bold text-base tracking-wider">Target Audience</h4></div><div class="flex flex-wrap gap-2"><!--[-->`);
            ssrRenderList(activeAdvert.value.targetAudience, (audience, idx) => {
              _push(`<span class="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-bold rounded-full">${ssrInterpolate(audience)}</span>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (activeAdvert.value.contactPhone || activeAdvert.value.contactEmail || activeAdvert.value.contactAddress) {
            _push(`<div class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6">`);
            if (activeAdvert.value.contactPhone) {
              _push(`<div class="flex items-center gap-2 text-slate-600 text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${ssrInterpolate(activeAdvert.value.contactPhone)}</div>`);
            } else {
              _push(`<!---->`);
            }
            if (activeAdvert.value.contactEmail) {
              _push(`<div class="flex items-center gap-2 text-slate-600 text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> ${ssrInterpolate(activeAdvert.value.contactEmail)}</div>`);
            } else {
              _push(`<!---->`);
            }
            if (activeAdvert.value.contactAddress) {
              _push(`<div class="flex items-center gap-2 text-slate-600 text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${ssrInterpolate(activeAdvert.value.contactAddress)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<div class="w-full relative bg-slate-900 flex items-center justify-center min-h-[250px] overflow-hidden"><img${ssrRenderAttr("src", activeAdvert.value.imageUrl)} class="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110" aria-hidden="true"><img${ssrRenderAttr("src", activeAdvert.value.imageUrl)}${ssrRenderAttr("alt", activeAdvert.value.title)} class="relative z-10 w-full max-h-[400px] object-contain group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl my-4 px-4">`);
          if (activeAdvert.value.description || activeAdvert.value.title) {
            _push(`<div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"><h4 class="text-white font-bold text-lg leading-tight drop-shadow-md">${ssrInterpolate(activeAdvert.value.title)}</h4>`);
            if (activeAdvert.value.description) {
              _push(`<p class="text-white/80 text-base mt-1 max-w-2xl drop-shadow-md line-clamp-2">${ssrInterpolate(activeAdvert.value.description)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</a></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const sponsors_api = {
  getPublicSponsors: () => GATEWAY_ENDPOINT.get("/sponsors/public")
};
const useSponsors = () => {
  const loading = ref(false);
  const sponsors = ref([]);
  const fetchSponsors = async () => {
    loading.value = true;
    try {
      const res = await sponsors_api.getPublicSponsors();
      sponsors.value = res.data?.data || res.data || [];
    } catch (err) {
      console.error("Failed to load sponsors", err);
    } finally {
      loading.value = false;
    }
  };
  return { loading, sponsors, fetchSponsors };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { cmsConfig } = useCMS();
    const { loading: loadingExcos, items: excos } = useGallery();
    const { loading, excos: excosList } = useGetExcos();
    const { groupedAdverts } = useAdverts();
    const { sponsors } = useSponsors();
    const { conferences } = useGetConferences();
    ref(false);
    const heroStats = [
      { value: "1,200+", label: "Qualified scientists" },
      { value: "82+", label: "Scientific events" },
      { value: "450+", label: "Lab networks" }
    ];
    ref(null);
    const carouselIndex = ref(0);
    const carouselExcos = computed(() => excos.value ?? []);
    const carouselLastIndex = computed(
      () => Math.max(0, carouselExcos.value.length - 1)
    );
    const tickerItems = [
      { label: "Precision diagnostics", icon: Microscope },
      { label: "Molecular research", icon: Dna },
      { label: "Cellular analysis", icon: FlaskConical },
      { label: "Global collaboration", icon: Globe },
      { label: "Professional excellence", icon: Award },
      { label: "Continuous training", icon: GraduationCap },
      { label: "Diagnostic mastery", icon: Stethoscope }
    ];
    const upcomingConferences = computed(
      () => [...conferences.value].filter((c) => c.status === "upcoming").sort((a, b) => {
        const oA = a.order ?? 999;
        const oB = b.order ?? 999;
        if (oA !== oB) return oA - oB;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }).slice(0, 3)
    );
    const pillarColors = [
      { bg: "bg-blue-50", icon: "text-[#1d4e89]" },
      { bg: "bg-green-50", icon: "text-green-700" },
      { bg: "bg-amber-50", icon: "text-amber-700" },
      { bg: "bg-teal-50", icon: "text-teal-700" }
    ];
    const activePillars = computed(() => {
      if (cmsConfig.value?.public?.home?.pillars?.length) {
        return cmsConfig.value.public.home.pillars.map((p, i) => ({
          title: p.title,
          desc: p.desc,
          icon: [Dna, FlaskConical, Library, Stethoscope][i % 4]
        }));
      }
      return [
        { title: "Advanced research", desc: "Cutting-edge investigative studies in molecular diagnostics and genomic pathology.", icon: Dna },
        { title: "Standardization", desc: "National protocols for high-precision histopathology processing and quality assurance.", icon: FlaskConical },
        { title: "Digital library", desc: "Exclusive access to peer-reviewed scientific journals, newsletters, and secure resources.", icon: Library },
        { title: "Mastery portal", desc: "Improving diagnostic accuracy through continuous training and international collaboration.", icon: Stethoscope }
      ];
    });
    const activeStats = computed(() => {
      if (cmsConfig.value?.public?.home?.stats?.length) {
        return cmsConfig.value.public.home.stats.map((s) => ({
          label: s.label,
          value: s.value
        }));
      }
      return [
        { label: "Qualified scientists", value: "1,200" },
        { label: "Scientific events", value: "82" },
        { label: "Lab networks", value: "450" },
        { label: "Awards issued", value: "45" }
      ];
    });
    const initiativeColors = [
      { bg: "bg-blue-50", icon: "text-[#1d4e89]", link: "text-[#1d4e89] hover:text-blue-800" },
      { bg: "bg-red-50", icon: "text-red-600", link: "text-red-600 hover:text-red-700" },
      { bg: "bg-teal-50", icon: "text-teal-700", link: "text-teal-700 hover:text-teal-800" }
    ];
    const activeInitiatives = computed(() => {
      if (cmsConfig.value?.public?.home?.initiatives?.length) {
        return cmsConfig.value.public.home.initiatives.map((ini, i) => ({
          title: ini.title,
          desc: ini.desc,
          icon: [Globe, Microscope, Dna][i % 3],
          to: "/about"
        }));
      }
      return [
        { title: "Digital pathology expansion", desc: "Implementing AI-driven diagnostic tools in laboratories across Nigeria and the sub-region.", icon: Globe, to: "/about" },
        { title: "Cancer screening project", desc: "Collaborating with oncology centres for early histopathology detection and prevention.", icon: Microscope, to: "/conferences" },
        { title: "Molecular genetics hub", desc: "A dedicated research initiative for genomic cellular analysis and data-driven pathology.", icon: Dna, to: "/abstracts" }
      ];
    });
    const fallbackSponsors = ["WHO", "IFCC", "ASCP", "IPH", "MLSCN", "FMOH"];
    const activeTiers = computed(() => {
      if (cmsConfig.value?.public?.home?.tiers?.length) {
        return cmsConfig.value.public.home.tiers;
      }
      return [
        {
          title: "New registration",
          price: "20,000",
          features: ["Full association membership", "Voting rights & governance", "Journal access", "Conference discounts"]
        },
        {
          title: "Membership Renewal",
          price: "10,000",
          features: ["Maintain active status", "Continuous journal access", "Resource vault access", "Mentorship & networking"]
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AdBanner = _sfc_main$1;
      const _component_EmptyState = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-eeea9462><section class="bg-white border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-32" data-v-eeea9462><div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-eeea9462><div data-v-eeea9462><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-eeea9462>`);
      _push(ssrRenderComponent(unref(FlaskConical), { size: 13 }, null, _parent));
      _push(` Society of Cellular Pathology Sciences of Nigeria </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-eeea9462> Precision in<br data-v-eeea9462><span class="text-[#1d4e89]" data-v-eeea9462>Cellular Pathology.</span><br data-v-eeea9462> Excellence in Science. </h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[480px] mb-9" data-v-eeea9462> Empowering medical laboratory scientists specialising in Histopathology and Cytopathology through innovation, global collaboration, and rigorous scientific standards. </p><div class="flex flex-wrap gap-3 mb-12" data-v-eeea9462>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/membership",
        class: "inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Become a member `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Become a member "),
              createVNode(unref(ArrowRight), { size: 15 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our mission `);
          } else {
            return [
              createTextVNode(" Our mission ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-wrap gap-8" data-v-eeea9462><!--[-->`);
      ssrRenderList(heroStats, (stat) => {
        _push(`<div data-v-eeea9462><div class="text-2xl font-bold text-[#1d4e89]" data-v-eeea9462>${ssrInterpolate(stat.value)}</div><div class="text-[12px] text-slate-400 font-medium mt-0.5" data-v-eeea9462>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:block" data-v-eeea9462><div class="relative" data-v-eeea9462><div class="flex items-center justify-between mb-5" data-v-eeea9462><div data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5" data-v-eeea9462>SCPSC Gallery</p><h3 class="text-[15px] font-bold text-slate-800" data-v-eeea9462>From our archive</h3></div><div class="flex items-center gap-2" data-v-eeea9462><button class="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-[#1d4e89] hover:bg-blue-50 transition-all duration-200 disabled:opacity-30"${ssrIncludeBooleanAttr(carouselIndex.value === 0) ? " disabled" : ""} aria-label="Previous member" data-v-eeea9462>`);
      _push(ssrRenderComponent(unref(ChevronLeft), { size: 15 }, null, _parent));
      _push(`</button><button class="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-[#1d4e89] hover:bg-blue-50 transition-all duration-200 disabled:opacity-30"${ssrIncludeBooleanAttr(carouselIndex.value >= carouselLastIndex.value) ? " disabled" : ""} aria-label="Next member" data-v-eeea9462>`);
      _push(ssrRenderComponent(unref(ChevronRight), { size: 15 }, null, _parent));
      _push(`</button></div></div><div class="overflow-hidden rounded-2xl border border-slate-100" data-v-eeea9462><div class="flex transition-transform duration-700 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${carouselIndex.value * 100}%)` })}" data-v-eeea9462><!--[-->`);
      ssrRenderList(carouselExcos.value, (exco) => {
        _push(`<div class="min-w-full relative" data-v-eeea9462><div class="aspect-[4/3] bg-blue-50 relative overflow-hidden" data-v-eeea9462>`);
        if (exco.imageUrl) {
          _push(`<img${ssrRenderAttr("src", exco.imageUrl)}${ssrRenderAttr("alt", exco.name)} class="w-full h-full object-cover" data-v-eeea9462>`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100" data-v-eeea9462><div class="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm" data-v-eeea9462>`);
          _push(ssrRenderComponent(unref(User), {
            size: 32,
            class: "text-blue-300"
          }, null, _parent));
          _push(`</div></div>`);
        }
        _push(`<div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" data-v-eeea9462></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex items-center justify-center gap-1.5 mt-4" data-v-eeea9462><!--[-->`);
      ssrRenderList(carouselExcos.value, (_, i) => {
        _push(`<button class="${ssrRenderClass([carouselIndex.value === i ? "w-5 h-1.5 bg-[#1d4e89]" : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400", "transition-all duration-300 rounded-full"])}"${ssrRenderAttr("aria-label", `Go to member ${i + 1}`)} data-v-eeea9462></button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(loadingExcos)) {
        _push(`<div class="aspect-[4/3] rounded-2xl bg-slate-100 animate-pulse" data-v-eeea9462></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:hidden mt-8" data-v-eeea9462><div class="flex items-center justify-between mb-4" data-v-eeea9462><div data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5" data-v-eeea9462>SCPSC Gallery</p><h3 class="text-[14px] font-bold text-slate-800" data-v-eeea9462>From our archive</h3></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-[12px] text-[#1d4e89] font-semibold inline-flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 12 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" View all "),
              createVNode(unref(ArrowRight), { size: 12 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="overflow-hidden pb-2" data-v-eeea9462><div class="ticker-track flex gap-3" data-v-eeea9462><!--[-->`);
      ssrRenderList([...carouselExcos.value, ...carouselExcos.value, ...carouselExcos.value, ...carouselExcos.value], (exco, i) => {
        _push(`<div class="flex-shrink-0 w-40" data-v-eeea9462><div class="rounded-xl overflow-hidden border border-slate-100 bg-slate-50" data-v-eeea9462><div class="h-44 bg-blue-50 relative overflow-hidden" data-v-eeea9462>`);
        if (exco.imageUrl) {
          _push(`<img${ssrRenderAttr("src", exco.imageUrl)}${ssrRenderAttr("alt", exco.name)} class="w-full h-full object-cover" data-v-eeea9462>`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center" data-v-eeea9462>`);
          _push(ssrRenderComponent(unref(User), {
            size: 28,
            class: "text-blue-200"
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" data-v-eeea9462></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><div class="bg-slate-50 border-b border-slate-100 overflow-hidden py-3.5" data-v-eeea9462><div class="ticker-track flex gap-10 whitespace-nowrap" data-v-eeea9462><!--[-->`);
      ssrRenderList([...tickerItems, ...tickerItems], (item, i) => {
        _push(`<div class="flex items-center gap-2.5 text-[13px] text-slate-500 font-medium flex-shrink-0" data-v-eeea9462>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          size: 14,
          class: "text-blue-600 flex-shrink-0"
        }, null), _parent);
        _push(` ${ssrInterpolate(item.label)}</div>`);
      });
      _push(`<!--]--></div></div>`);
      if (upcomingConferences.value.length > 0) {
        _push(`<section class="bg-white border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-eeea9462><div class="flex items-end justify-between mb-10 flex-wrap gap-4" data-v-eeea9462><div data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-eeea9462>Latest happenings</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" data-v-eeea9462>Upcoming conferences</h2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/conferences",
          class: "inline-flex items-center gap-1.5 text-[13px] text-[#1d4e89] font-semibold hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View all events `);
              _push2(ssrRenderComponent(unref(ArrowRight), { size: 14 }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" View all events "),
                createVNode(unref(ArrowRight), { size: 14 })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-v-eeea9462><!--[-->`);
        ssrRenderList(upcomingConferences.value, (conf) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: conf._id,
            to: `/conferences/${conf._id}`,
            class: "group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-300 block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="h-36 bg-blue-50 flex items-center justify-center relative overflow-hidden" data-v-eeea9462${_scopeId}>`);
                if (conf.bannerImage) {
                  _push2(`<img${ssrRenderAttr("src", conf.bannerImage)}${ssrRenderAttr("alt", conf.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-v-eeea9462${_scopeId}>`);
                } else {
                  _push2(ssrRenderComponent(unref(Microscope), {
                    size: 40,
                    class: "text-blue-200"
                  }, null, _parent2, _scopeId));
                }
                _push2(`<div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-slate-600 px-2.5 py-1 rounded-lg border border-slate-100" data-v-eeea9462${_scopeId}>${ssrInterpolate(conf.startDate ? new Date(conf.startDate).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" }) : "Upcoming")}</div></div><div class="p-5" data-v-eeea9462${_scopeId}><div class="flex items-center gap-1.5 text-[12px] text-blue-600 font-medium mb-2.5" data-v-eeea9462${_scopeId}>`);
                _push2(ssrRenderComponent(unref(MapPin), { size: 12 }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(conf.venue || "TBA")}</div><h3 class="text-[15px] font-semibold text-slate-800 leading-snug mb-2 line-clamp-2 group-hover:text-[#1d4e89] transition-colors" data-v-eeea9462${_scopeId}>${ssrInterpolate(conf.title)}</h3><p class="text-[13px] text-slate-400 line-clamp-2 mb-4" data-v-eeea9462${_scopeId}>${ssrInterpolate(conf.description)}</p><span class="text-[12px] font-semibold text-[#1d4e89] inline-flex items-center gap-1 group-hover:gap-2 transition-all" data-v-eeea9462${_scopeId}> Read more `);
                _push2(ssrRenderComponent(unref(ArrowRight), { size: 12 }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "h-36 bg-blue-50 flex items-center justify-center relative overflow-hidden" }, [
                    conf.bannerImage ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: conf.bannerImage,
                      alt: conf.title,
                      class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(unref(Microscope), {
                      key: 1,
                      size: 40,
                      class: "text-blue-200"
                    })),
                    createVNode("div", { class: "absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-slate-600 px-2.5 py-1 rounded-lg border border-slate-100" }, toDisplayString(conf.startDate ? new Date(conf.startDate).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" }) : "Upcoming"), 1)
                  ]),
                  createVNode("div", { class: "p-5" }, [
                    createVNode("div", { class: "flex items-center gap-1.5 text-[12px] text-blue-600 font-medium mb-2.5" }, [
                      createVNode(unref(MapPin), { size: 12 }),
                      createTextVNode(" " + toDisplayString(conf.venue || "TBA"), 1)
                    ]),
                    createVNode("h3", { class: "text-[15px] font-semibold text-slate-800 leading-snug mb-2 line-clamp-2 group-hover:text-[#1d4e89] transition-colors" }, toDisplayString(conf.title), 1),
                    createVNode("p", { class: "text-[13px] text-slate-400 line-clamp-2 mb-4" }, toDisplayString(conf.description), 1),
                    createVNode("span", { class: "text-[12px] font-semibold text-[#1d4e89] inline-flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                      createTextVNode(" Read more "),
                      createVNode(unref(ArrowRight), { size: 12 })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="bg-slate-50 border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-eeea9462><div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12" data-v-eeea9462><div data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-eeea9462>Core pillars</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight max-w-xl" data-v-eeea9462>${ssrInterpolate(unref(cmsConfig)?.public?.home?.homeHeaders?.pillarsTitle || "Advancing the frontiers of cellular pathology")}</h2></div><p class="text-[15px] text-slate-500 leading-relaxed max-w-md" data-v-eeea9462>${ssrInterpolate(unref(cmsConfig)?.public?.home?.homeHeaders?.pillarsSubtitle || "A society committed to scientific mastery, diagnostic precision, and the next generation of pathology professionals.")}</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-v-eeea9462><!--[-->`);
      ssrRenderList(activePillars.value, (pillar, i) => {
        _push(`<div class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group" data-v-eeea9462><div class="${ssrRenderClass([pillarColors[i % pillarColors.length].bg, "w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"])}" data-v-eeea9462>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pillar.icon), {
          size: 20,
          class: pillarColors[i % pillarColors.length].icon
        }, null), _parent);
        _push(`</div><h3 class="text-[15px] font-semibold text-slate-800 mb-2" data-v-eeea9462>${ssrInterpolate(pillar.title)}</h3><p class="text-[13px] text-slate-500 leading-relaxed" data-v-eeea9462>${ssrInterpolate(pillar.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-[#1d4e89]" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" data-v-eeea9462><div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-v-eeea9462><!--[-->`);
      ssrRenderList(activeStats.value, (stat) => {
        _push(`<div data-v-eeea9462><div class="text-4xl sm:text-5xl font-bold text-white mb-1" data-v-eeea9462>${ssrInterpolate(stat.value)}<span class="text-blue-300" data-v-eeea9462>+</span></div><div class="text-[12px] text-blue-200 font-medium tracking-wide uppercase" data-v-eeea9462>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      if (unref(groupedAdverts).IN_CONTENT_1?.length) {
        _push(`<section class="bg-white border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-eeea9462>`);
        _push(ssrRenderComponent(_component_AdBanner, {
          adverts: unref(groupedAdverts).IN_CONTENT_1
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="bg-white border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-eeea9462><div class="mb-12" data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-eeea9462>Strategic initiatives</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" data-v-eeea9462>${ssrInterpolate(unref(cmsConfig)?.public?.home?.homeHeaders?.initiativesTitle || "Leading transformations in science")}</h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-v-eeea9462><!--[-->`);
      ssrRenderList(activeInitiatives.value, (ini, i) => {
        _push(`<div class="border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group relative overflow-hidden" data-v-eeea9462>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(ini.icon), {
          size: 120,
          class: "absolute -right-6 -bottom-6 opacity-[0.04] text-blue-800 pointer-events-none"
        }, null), _parent);
        _push(`<div class="${ssrRenderClass([initiativeColors[i % initiativeColors.length].bg, "w-10 h-10 rounded-xl flex items-center justify-center mb-5"])}" data-v-eeea9462>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(ini.icon), {
          size: 20,
          class: initiativeColors[i % initiativeColors.length].icon
        }, null), _parent);
        _push(`</div><h3 class="text-[16px] font-semibold text-slate-800 mb-3 leading-snug" data-v-eeea9462>${ssrInterpolate(ini.title)}</h3><p class="text-[13px] text-slate-500 leading-relaxed mb-6" data-v-eeea9462>${ssrInterpolate(ini.desc)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: ini.to,
          class: ["inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all", initiativeColors[i % initiativeColors.length].link]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("home.exploration"))} `);
              _push2(ssrRenderComponent(unref(ArrowRight), {
                size: 13,
                class: "group-hover:translate-x-0.5 transition-transform"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("home.exploration")) + " ", 1),
                createVNode(unref(ArrowRight), {
                  size: 13,
                  class: "group-hover:translate-x-0.5 transition-transform"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-eeea9462><p class="text-[11px] text-slate-400 font-semibold tracking-widest uppercase text-center mb-8" data-v-eeea9462>${ssrInterpolate(unref(sponsors).length ? _ctx.$t("home.global_collab_sponsors") : _ctx.$t("home.global_collab"))}</p><div class="overflow-hidden" data-v-eeea9462><div class="ticker-track flex gap-16 items-center whitespace-nowrap" data-v-eeea9462>`);
      if (unref(sponsors).length) {
        _push(`<!--[-->`);
        ssrRenderList(6, (n) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(unref(sponsors), (sponsor) => {
            _push(`<!--[-->`);
            if (sponsor.websiteUrl) {
              _push(`<a${ssrRenderAttr("href", sponsor.websiteUrl)} target="_blank" rel="noopener noreferrer" class="flex-shrink-0 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300" data-v-eeea9462>`);
              if (sponsor.logoUrl) {
                _push(`<img${ssrRenderAttr("src", sponsor.logoUrl)}${ssrRenderAttr("alt", sponsor.name)} class="h-8 object-contain" data-v-eeea9462>`);
              } else {
                _push(`<span class="text-xl font-bold text-slate-400" data-v-eeea9462>${ssrInterpolate(sponsor.name)}</span>`);
              }
              _push(`</a>`);
            } else {
              _push(`<div class="flex-shrink-0 opacity-40" data-v-eeea9462>`);
              if (sponsor.logoUrl) {
                _push(`<img${ssrRenderAttr("src", sponsor.logoUrl)}${ssrRenderAttr("alt", sponsor.name)} class="h-8 object-contain" data-v-eeea9462>`);
              } else {
                _push(`<span class="text-xl font-bold text-slate-400" data-v-eeea9462>${ssrInterpolate(sponsor.name)}</span>`);
              }
              _push(`</div>`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(fallbackSponsors.concat(fallbackSponsors).concat(fallbackSponsors), (s, i) => {
          _push(`<span class="text-xl font-bold text-slate-300 flex-shrink-0" data-v-eeea9462>${ssrInterpolate(s)}</span>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></section><section class="bg-white border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-eeea9462><div class="text-center mb-12" data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-eeea9462>Membership tiers</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3" data-v-eeea9462>${ssrInterpolate(_ctx.$t("home.member_tiers"))}</h2><p class="text-[15px] text-slate-500 max-w-md mx-auto" data-v-eeea9462>${ssrInterpolate(_ctx.$t("home.join_community"))}</p></div><div class="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto" data-v-eeea9462><!--[-->`);
      ssrRenderList(activeTiers.value, (tier, i) => {
        _push(`<div class="${ssrRenderClass([i === 1 ? "border-blue-600 bg-[#1d4e89] text-white" : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm", "border rounded-2xl p-7 transition-all duration-300"])}" data-v-eeea9462>`);
        if (i === 1) {
          _push(`<div class="inline-block text-[11px] font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full mb-4" data-v-eeea9462> Most popular </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="${ssrRenderClass([i === 1 ? "text-white" : "text-slate-800", "text-[17px] font-bold mb-1"])}" data-v-eeea9462>${ssrInterpolate(tier.title)}</h3><div class="${ssrRenderClass([i === 1 ? "text-white" : "text-[#1d4e89]", "text-3xl font-bold mb-6"])}" data-v-eeea9462> ₦${ssrInterpolate(tier.price)} `);
        if (tier.title.includes("Renewal")) {
          _push(`<span class="${ssrRenderClass([i === 1 ? "text-blue-200" : "text-slate-400", "text-[14px] font-normal"])}" data-v-eeea9462> /year </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul class="space-y-3 mb-7" data-v-eeea9462><!--[-->`);
        ssrRenderList(tier.features, (feat) => {
          _push(`<li class="${ssrRenderClass([i === 1 ? "text-blue-100" : "text-slate-500", "flex items-center gap-2.5 text-[13px]"])}" data-v-eeea9462>`);
          _push(ssrRenderComponent(unref(Check), {
            size: 14,
            class: i === 1 ? "text-blue-200 flex-shrink-0" : "text-emerald-500 flex-shrink-0"
          }, null, _parent));
          _push(` ${ssrInterpolate(feat)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/membership",
          class: ["block w-full py-3 text-center rounded-xl text-[14px] font-semibold transition-colors duration-200", i === 1 ? "bg-white text-[#1d4e89] hover:bg-blue-50" : "bg-[#1d4e89] text-white hover:bg-blue-800"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tier.title.includes("Renewal") ? _ctx.$t("home.renew_now") : _ctx.$t("home.join_now"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(tier.title.includes("Renewal") ? _ctx.$t("home.renew_now") : _ctx.$t("home.join_now")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
      if (unref(groupedAdverts).ABOVE_FOOTER?.length) {
        _push(`<section class="bg-slate-50 border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-eeea9462>`);
        _push(ssrRenderComponent(_component_AdBanner, {
          adverts: unref(groupedAdverts).ABOVE_FOOTER
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="bg-slate-50 border-b border-slate-100" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-eeea9462><div class="text-center mb-12" data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-eeea9462>Leadership</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3" data-v-eeea9462>${ssrInterpolate(_ctx.$t("home.our_board"))}</h2><p class="text-[15px] text-slate-500 max-w-md mx-auto" data-v-eeea9462>${ssrInterpolate(_ctx.$t("home.board_subtitle"))}</p></div>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-16" data-v-eeea9462><div class="w-8 h-8 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" data-v-eeea9462></div></div>`);
      } else if (unref(excosList).length > 0) {
        _push(`<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-v-eeea9462><!--[-->`);
        ssrRenderList(unref(excosList), (exco) => {
          _push(`<div class="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-md hover:border-blue-200 transition-all duration-300" data-v-eeea9462><div class="aspect-[4/3] relative overflow-hidden bg-blue-50" data-v-eeea9462>`);
          if (exco.profilePicture) {
            _push(`<img${ssrRenderAttr("src", exco.profilePicture)}${ssrRenderAttr("alt", exco.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-v-eeea9462>`);
          } else {
            _push(`<div class="w-full h-full flex items-center justify-center" data-v-eeea9462><div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center" data-v-eeea9462>`);
            _push(ssrRenderComponent(unref(User), {
              size: 28,
              class: "text-blue-300"
            }, null, _parent));
            _push(`</div></div>`);
          }
          _push(`</div><div class="p-4" data-v-eeea9462><p class="text-[11px] text-blue-600 font-semibold tracking-wider uppercase mb-1" data-v-eeea9462>${ssrInterpolate(exco.position || "Executive member")}</p><h3 class="text-[14px] font-semibold text-slate-800 leading-snug" data-v-eeea9462>${ssrInterpolate(exco.name)}</h3></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_EmptyState, {
          title: _ctx.$t("home.board_under_constitution"),
          message: _ctx.$t("home.board_finalizing")
        }, null, _parent));
      }
      _push(`</div></section><section class="bg-white" data-v-eeea9462><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center" data-v-eeea9462><div class="max-w-2xl mx-auto" data-v-eeea9462><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-4" data-v-eeea9462>Get started</p><h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5" data-v-eeea9462> Ready to advance your career in pathology? </h2><p class="text-[16px] text-slate-500 leading-relaxed mb-9" data-v-eeea9462> Join over 1,200 scientists building the future of cellular pathology in Nigeria. </p><div class="flex flex-wrap gap-3 justify-center" data-v-eeea9462>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/membership",
        class: "inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Become a member `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Become a member "),
              createVNode(unref(ArrowRight), { size: 15 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn more about SCPSC `);
          } else {
            return [
              createTextVNode(" Learn more about SCPSC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eeea9462"]]);

export { index as default };
//# sourceMappingURL=index-ZTL0kxB6.mjs.map
