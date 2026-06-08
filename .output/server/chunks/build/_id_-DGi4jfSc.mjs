import __nuxt_component_1 from './LoadingState-kkp6HvNz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import _sfc_main$1 from './EmptyState-OBLGlnua.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderTeleport } from 'vue/server-renderer';
import { c as conferences_api } from './conferences-Bq2UpmDq.mjs';
import { _ as _export_sfc, b as useSeoMeta, a as useCustomToast } from './server.mjs';
import { useRoute } from 'vue-router';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { C as Calendar } from './calendar-G-gDUwIF.mjs';
import { M as MapPin } from './map-pin-BeeoToV4.mjs';
import { U as Users } from './users-D6INsix-.mjs';
import { X } from './x-BzrXjgTv.mjs';
import { F as Facebook, T as Twitter, L as Linkedin } from './twitter-CIMqWhd6.mjs';
import { C as Copy } from './copy-CL7k6o2b.mjs';
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
import './inbox-BgA8mAs9.mjs';
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

const ArrowLeft = createLucideIcon("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Link = createLucideIcon("link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
const MessageCircle = createLucideIcon("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Share2 = createLucideIcon("share-2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
const Smartphone = createLucideIcon("smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
const ZoomIn = createLucideIcon("zoom-in", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
const useGetConference = () => {
  const loading = ref(false);
  const conference = ref(null);
  const { showToast } = useCustomToast();
  const getConference = async (id) => {
    loading.value = true;
    try {
      const res = await conferences_api.getConference(id);
      conference.value = res.data;
    } catch (err) {
      showToast({ title: "Error", message: "Failed to fetch conference", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, conference, getConference };
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const selectedImage = ref(null);
    const showShareModal = ref(false);
    const currentUrl = ref("");
    const nativeShareAvailable = ref(false);
    const { loading, conference } = useGetConference();
    useSeoMeta({
      title: () => conference.value?.title || "SCPSC Event",
      description: () => conference.value?.description || "Learn more about this upcoming SCPSC event.",
      ogTitle: () => conference.value?.title,
      ogDescription: () => conference.value?.description,
      ogImage: () => conference.value?.bannerImage || "https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg",
      twitterCard: "summary_large_image"
    });
    const allGalleryImages = computed(() => {
      if (!conference.value) return [];
      const images = [];
      if (conference.value.bannerImage) images.push(conference.value.bannerImage);
      if (conference.value.galleryImages?.length) images.push(...conference.value.galleryImages);
      return images;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingState = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_EmptyState = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-11cff10b>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_LoadingState, { class: "pt-32" }, null, _parent));
      } else if (unref(conference)) {
        _push(`<!--[--><div class="bg-white border-b border-slate-100 py-3 sticky top-0 z-50" data-v-11cff10b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" data-v-11cff10b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/conferences",
          class: "inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-slate-400 hover:text-[#1d4e89] transition-colors duration-200 no-underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowLeft), { size: 13 }, null, _parent2, _scopeId));
              _push2(` All Events `);
            } else {
              return [
                createVNode(unref(ArrowLeft), { size: 13 }),
                createTextVNode(" All Events ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-2" data-v-11cff10b><button class="top-btn" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(Share2), { size: 14 }, null, _parent));
        _push(` Share </button><button class="top-btn top-btn--accent" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(Link), { size: 14 }, null, _parent));
        _push(` Copy Link </button></div></div></div><section class="bg-white border-b border-slate-100" data-v-11cff10b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pb-16" data-v-11cff10b><div class="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start" data-v-11cff10b><div class="flex flex-col" data-v-11cff10b><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-[10px] font-bold tracking-[.18em] uppercase px-4 py-2 rounded-full border border-blue-100 mb-6 w-fit" data-v-11cff10b>${ssrInterpolate(unref(conference).status || "Upcoming")}</div><h1 class="text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] tracking-tight text-slate-900 mb-5" data-v-11cff10b>${ssrInterpolate(unref(conference).title)}</h1>`);
        if (unref(conference).description) {
          _push(`<p class="text-[15px] leading-[1.8] text-slate-500 mb-8 max-w-[560px]" data-v-11cff10b>${ssrInterpolate(unref(conference).description.slice(0, 200))}${ssrInterpolate(unref(conference).description.length > 200 ? "…" : "")}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap gap-2.5" data-v-11cff10b><div class="chip" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(Calendar), {
          size: 13,
          class: "text-[#1d4e89] flex-shrink-0"
        }, null, _parent));
        _push(`<span data-v-11cff10b>${ssrInterpolate(unref(conference).startDate ? new Date(unref(conference).startDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "Date TBA")}</span></div><div class="chip" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(MapPin), {
          size: 13,
          class: "text-[#1d4e89] flex-shrink-0"
        }, null, _parent));
        _push(`<span data-v-11cff10b>${ssrInterpolate(unref(conference).venue || "Venue TBA")}</span></div></div></div><div class="flex flex-col items-center gap-3" data-v-11cff10b><img${ssrRenderAttr("src", unref(conference).bannerImage || "https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg")} class="w-full max-w-[300px] max-h-[380px] object-contain rounded-2xl border border-slate-200 bg-slate-50 block"${ssrRenderAttr("alt", unref(conference).title + " poster")} data-v-11cff10b><button class="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 hover:text-[#1d4e89] border border-slate-200 hover:border-blue-200 px-3.5 py-1.5 rounded-full bg-transparent transition-all duration-200 cursor-pointer" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(ZoomIn), { size: 13 }, null, _parent));
        _push(` View Full Poster </button></div></div></div></section><section class="bg-white py-14 lg:py-16" data-v-11cff10b><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-11cff10b><div class="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start" data-v-11cff10b><div class="flex flex-col gap-12" data-v-11cff10b>`);
        if (unref(conference).description) {
          _push(`<div data-v-11cff10b><div class="flex items-center gap-3.5 mb-4" data-v-11cff10b><span class="block w-6 h-px bg-[#1d4e89]" data-v-11cff10b></span><span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]" data-v-11cff10b>About</span></div><h2 class="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-slate-900 mb-4" data-v-11cff10b>Event Overview</h2><p class="text-[15px] leading-[1.85] text-slate-500 whitespace-pre-wrap" data-v-11cff10b>${ssrInterpolate(unref(conference).description)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(conference).location) {
          _push(`<div data-v-11cff10b><div class="flex items-center gap-3.5 mb-4" data-v-11cff10b><span class="block w-6 h-px bg-[#1d4e89]" data-v-11cff10b></span><span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]" data-v-11cff10b>Venue</span></div><h2 class="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-slate-900 mb-4" data-v-11cff10b>Location Details</h2><div class="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200" data-v-11cff10b><div class="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0" data-v-11cff10b>`);
          _push(ssrRenderComponent(unref(MapPin), {
            size: 17,
            class: "text-[#1d4e89]"
          }, null, _parent));
          _push(`</div><div data-v-11cff10b><p class="text-[15px] font-bold text-slate-900 mb-1" data-v-11cff10b>${ssrInterpolate(unref(conference).venue)}</p><p class="text-[13px] leading-relaxed text-slate-500" data-v-11cff10b>${ssrInterpolate(unref(conference).location)}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (allGalleryImages.value && allGalleryImages.value.length > 0) {
          _push(`<div data-v-11cff10b><div class="flex items-center gap-3.5 mb-4" data-v-11cff10b><span class="block w-6 h-px bg-[#1d4e89]" data-v-11cff10b></span><span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]" data-v-11cff10b>Gallery</span></div><h2 class="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-slate-900 mb-5" data-v-11cff10b>Program Gallery</h2><div class="gallery-grid" data-v-11cff10b><!--[-->`);
          ssrRenderList(allGalleryImages.value, (img, idx) => {
            _push(`<div class="${ssrRenderClass([{ "gallery-item--featured": idx % 4 === 0 }, "gallery-item group"])}" data-v-11cff10b><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `Gallery image ${idx + 1}`)} class="gallery-img" data-v-11cff10b><div class="gallery-overlay" data-v-11cff10b>`);
            _push(ssrRenderComponent(unref(ZoomIn), {
              size: 17,
              class: "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            }, null, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><aside class="flex flex-col gap-4 lg:sticky lg:top-20" data-v-11cff10b><div class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200" data-v-11cff10b><p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-1" data-v-11cff10b>Registration</p><h3 class="text-[20px] font-bold text-slate-900 mb-5" data-v-11cff10b>Pricing</h3>`);
        if (unref(conference).pricing && unref(conference).pricing.length) {
          _push(`<div class="border border-slate-200 rounded-xl overflow-hidden" data-v-11cff10b><!--[-->`);
          ssrRenderList(unref(conference).pricing, (price) => {
            _push(`<div class="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100 last:border-0 hover:bg-blue-50/40 transition-colors duration-150" data-v-11cff10b><span class="text-[13px] font-semibold text-slate-600" data-v-11cff10b>${ssrInterpolate(price.label || price.category)}</span><span class="text-[15px] font-extrabold text-slate-900 tracking-tight" data-v-11cff10b>${ssrInterpolate(price.label && (price.label.includes("Africa") || price.label.includes("USD")) ? "$" : "₦")}${ssrInterpolate(price.amount.toLocaleString())}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<p class="text-[13px] text-slate-400" data-v-11cff10b>Pricing details unavailable or this event is free.</p>`);
        }
        _push(`</div><div class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200 relative overflow-hidden" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(Users), {
          size: 90,
          class: "absolute -right-3 -bottom-3 text-blue-100 pointer-events-none"
        }, null, _parent));
        _push(`<p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-4" data-v-11cff10b>Organizer</p><div class="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100" data-v-11cff10b><div class="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0" data-v-11cff10b><span class="text-[8px] font-black tracking-wide text-[#1d4e89]" data-v-11cff10b>SCPSC</span></div><div data-v-11cff10b><p class="text-[14px] font-bold text-slate-900 mb-0.5" data-v-11cff10b>SCPSC Nigeria</p><p class="text-[12px] text-slate-400" data-v-11cff10b>Society for Cellular Pathology Scientists of Nigeria</p></div></div><div class="flex items-center justify-between" data-v-11cff10b><span class="text-[11px] font-semibold text-slate-400" data-v-11cff10b>Share this event</span><div class="flex gap-2" data-v-11cff10b><button class="organizer-share-btn" aria-label="Share" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(Share2), { size: 13 }, null, _parent));
        _push(`</button><button class="organizer-share-btn" aria-label="Copy link" data-v-11cff10b>`);
        _push(ssrRenderComponent(unref(Link), { size: 13 }, null, _parent));
        _push(`</button></div></div></div></aside></div></div></section>`);
        ssrRenderTeleport(_push, (_push2) => {
          if (selectedImage.value) {
            _push2(`<div class="lightbox" data-v-11cff10b><button class="lightbox-close" aria-label="Close" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(X), { size: 18 }, null, _parent));
            _push2(`</button><img${ssrRenderAttr("src", selectedImage.value)} class="lightbox-img" data-v-11cff10b></div>`);
          } else {
            _push2(`<!---->`);
          }
        }, "body", false, _parent);
        ssrRenderTeleport(_push, (_push2) => {
          if (showShareModal.value) {
            _push2(`<div class="modal-backdrop" data-v-11cff10b><div class="modal-box" data-v-11cff10b><button class="modal-close-btn" aria-label="Close" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(X), { size: 16 }, null, _parent));
            _push2(`</button><p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-1" data-v-11cff10b>Spread the word</p><h3 class="text-[22px] font-bold text-slate-900 mb-6" data-v-11cff10b>Share Event</h3><div class="grid grid-cols-4 gap-2 mb-4" data-v-11cff10b><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${currentUrl.value}`)} target="_blank" class="share-platform" data-v-11cff10b><div class="share-icon-wrap share-icon-wrap--fb" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(Facebook), { size: 17 }, null, _parent));
            _push2(`</div><span data-v-11cff10b>Facebook</span></a><a${ssrRenderAttr("href", `https://twitter.com/intent/tweet?url=${currentUrl.value}&text=${encodeURIComponent(unref(conference)?.title)}`)} target="_blank" class="share-platform" data-v-11cff10b><div class="share-icon-wrap share-icon-wrap--tw" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(Twitter), { size: 17 }, null, _parent));
            _push2(`</div><span data-v-11cff10b>X</span></a><a${ssrRenderAttr("href", `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl.value}&title=${encodeURIComponent(unref(conference)?.title)}`)} target="_blank" class="share-platform" data-v-11cff10b><div class="share-icon-wrap share-icon-wrap--li" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(Linkedin), { size: 17 }, null, _parent));
            _push2(`</div><span data-v-11cff10b>LinkedIn</span></a><a${ssrRenderAttr("href", `https://api.whatsapp.com/send?text=${encodeURIComponent(unref(conference)?.title + " " + currentUrl.value)}`)} target="_blank" class="share-platform" data-v-11cff10b><div class="share-icon-wrap share-icon-wrap--wa" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(MessageCircle), { size: 17 }, null, _parent));
            _push2(`</div><span data-v-11cff10b>WhatsApp</span></a></div>`);
            if (nativeShareAvailable.value) {
              _push2(`<button class="native-share-btn" data-v-11cff10b>`);
              _push2(ssrRenderComponent(unref(Smartphone), { size: 14 }, null, _parent));
              _push2(` Share via Device </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center border border-slate-200 rounded-xl overflow-hidden" data-v-11cff10b><input type="text" readonly${ssrRenderAttr("value", currentUrl.value)} class="flex-1 bg-slate-50 px-3 py-2.5 text-[12px] text-slate-500 outline-none min-w-0 border-0" data-v-11cff10b><button class="px-3.5 py-2.5 bg-[#1d4e89] hover:bg-blue-800 text-white flex items-center flex-shrink-0 transition-colors duration-200 border-0 cursor-pointer" data-v-11cff10b>`);
            _push2(ssrRenderComponent(unref(Copy), { size: 13 }, null, _parent));
            _push2(`</button></div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
        }, "body", false, _parent);
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_EmptyState, {
          title: "Event Not Found",
          message: "The conference details could not be found.",
          class: "pt-32"
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/conferences/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11cff10b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DGi4jfSc.mjs.map
