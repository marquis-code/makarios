import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useGallery, C as ChevronRight } from './useGallery-BAzcooiq.mjs';
import { _ as _export_sfc } from './server.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { X } from './x-BzrXjgTv.mjs';
import { C as ChevronLeft } from './chevron-left-BR4bkJsQ.mjs';
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

const Expand = createLucideIcon("expand", [
  ["path", { d: "m15 15 6 6", key: "1s409w" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }],
  ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
  ["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
  ["path", { d: "M3 16v5h5", key: "1t08am" }],
  ["path", { d: "m3 21 6-6", key: "wwnumi" }],
  ["path", { d: "M3 8V3h5", key: "1ln10m" }],
  ["path", { d: "M9 9 3 3", key: "v551iv" }]
]);
const Image = createLucideIcon("image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, items } = useGallery();
    const activeCategory = ref("all");
    const lightboxOpen = ref(false);
    const currentImageIndex = ref(0);
    const categories = computed(() => {
      const cats = new Set(items.value.map((item) => item.category).filter(Boolean));
      return Array.from(cats).sort();
    });
    const filteredItems = computed(
      () => activeCategory.value === "all" ? items.value : items.value.filter((item) => item.category === activeCategory.value)
    );
    const currentLightboxItem = computed(
      () => filteredItems.value[currentImageIndex.value]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-b64772bd><section class="bg-white border-b border-slate-100" data-v-b64772bd><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-b64772bd><div class="max-w-3xl" data-v-b64772bd><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-b64772bd>`);
      _push(ssrRenderComponent(unref(Image), { size: 13 }, null, _parent));
      _push(` Moments </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-b64772bd> Association <span class="text-[#1d4e89]" data-v-b64772bd> Gallery.</span></h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]" data-v-b64772bd> Explore highlights from our scientific conferences, events, and training programs across Nigeria. </p></div></div></section><section class="bg-slate-50 border-b border-slate-100 sticky top-0 z-30" data-v-b64772bd><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-v-b64772bd><div class="flex flex-wrap gap-2" data-v-b64772bd><button class="${ssrRenderClass([
        "px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200",
        activeCategory.value === "all" ? "bg-[#1d4e89] text-white" : "bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-[#1d4e89]"
      ])}" data-v-b64772bd> All memories </button><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<button class="${ssrRenderClass([
          "px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 capitalize",
          activeCategory.value === cat ? "bg-[#1d4e89] text-white" : "bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-[#1d4e89]"
        ])}" data-v-b64772bd>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-white" data-v-b64772bd><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16" data-v-b64772bd>`);
      if (unref(loading)) {
        _push(`<div class="flex flex-col items-center justify-center py-24 gap-4" data-v-b64772bd><div class="w-8 h-8 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" data-v-b64772bd></div><p class="text-[13px] font-semibold text-slate-400 tracking-wide" data-v-b64772bd>Loading moments...</p></div>`);
      } else if (filteredItems.value.length === 0) {
        _push(`<div class="text-center py-24 bg-slate-50 rounded-2xl border border-slate-200" data-v-b64772bd><div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4" data-v-b64772bd>`);
        _push(ssrRenderComponent(unref(Image), {
          size: 24,
          class: "text-blue-300"
        }, null, _parent));
        _push(`</div><p class="text-[15px] font-semibold text-slate-700 mb-1" data-v-b64772bd>No images found</p><p class="text-[13px] text-slate-400" data-v-b64772bd>Check back later for new additions to our gallery.</p></div>`);
      } else {
        _push(`<div class="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5" data-v-b64772bd><!--[-->`);
        ssrRenderList(filteredItems.value, (item, index) => {
          _push(`<div class="group relative bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer break-inside-avoid" data-v-b64772bd><img${ssrRenderAttr("src", item.imageUrl)}${ssrRenderAttr("alt", item.title || "SCPSC Gallery Image")} class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" data-v-b64772bd><div class="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" data-v-b64772bd>`);
          if (item.category) {
            _push(`<span class="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest rounded-lg mb-2 w-fit border border-white/20" data-v-b64772bd>${ssrInterpolate(item.category)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (item.title) {
            _push(`<h3 class="text-white font-semibold text-[15px] leading-snug translate-y-3 group-hover:translate-y-0 transition-transform duration-300" data-v-b64772bd>${ssrInterpolate(item.title)}</h3>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/60" data-v-b64772bd>`);
          _push(ssrRenderComponent(unref(Expand), {
            size: 14,
            class: "text-slate-700"
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (lightboxOpen.value) {
          _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-md" data-v-b64772bd><button class="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-50" aria-label="Close lightbox" data-v-b64772bd>`);
          _push2(ssrRenderComponent(unref(X), { size: 18 }, null, _parent));
          _push2(`</button><button class="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-50 hidden sm:flex" aria-label="Previous image" data-v-b64772bd>`);
          _push2(ssrRenderComponent(unref(ChevronLeft), { size: 20 }, null, _parent));
          _push2(`</button><button class="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-50 hidden sm:flex" aria-label="Next image" data-v-b64772bd>`);
          _push2(ssrRenderComponent(unref(ChevronRight), { size: 20 }, null, _parent));
          _push2(`</button>`);
          if (currentLightboxItem.value) {
            _push2(`<div class="relative max-w-5xl w-full mx-auto px-4 sm:px-16 lg:px-24 flex flex-col items-center" data-v-b64772bd><img${ssrRenderAttr("src", currentLightboxItem.value.imageUrl)}${ssrRenderAttr("alt", currentLightboxItem.value.title || "Gallery image")} class="max-h-[78vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10" data-v-b64772bd><div class="text-center mt-5 max-w-xl" data-v-b64772bd>`);
            if (currentLightboxItem.value.category) {
              _push2(`<span class="inline-block px-3 py-1 bg-white/10 border border-white/10 text-white/80 text-[11px] font-semibold uppercase tracking-widest rounded-lg mb-2" data-v-b64772bd>${ssrInterpolate(currentLightboxItem.value.category)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (currentLightboxItem.value.title) {
              _push2(`<h2 class="text-[17px] font-semibold text-white leading-snug" data-v-b64772bd>${ssrInterpolate(currentLightboxItem.value.title)}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="text-white/30 text-[12px] font-medium mt-2 tracking-widest uppercase" data-v-b64772bd>${ssrInterpolate(currentImageIndex.value + 1)} / ${ssrInterpolate(filteredItems.value.length)}</p></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b64772bd"]]);

export { gallery as default };
//# sourceMappingURL=gallery-IMgEX621.mjs.map
