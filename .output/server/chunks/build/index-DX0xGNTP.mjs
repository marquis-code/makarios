import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import __nuxt_component_1 from './LoadingState-kkp6HvNz.mjs';
import _sfc_main$1 from './EmptyState-OBLGlnua.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useGetConferences } from './useGetConferences-DkVNekcZ.mjs';
import { _ as _export_sfc } from './server.mjs';
import { C as Calendar } from './calendar-G-gDUwIF.mjs';
import { M as MapPin } from './map-pin-BeeoToV4.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
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
import './inbox-BgA8mAs9.mjs';
import './createLucideIcon-toOOggq-.mjs';
import './conferences-Bq2UpmDq.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, conferences } = useGetConferences();
    const featuredConference = computed(() => {
      if (!conferences.value || conferences.value.length === 0) return null;
      return conferences.value.find((c) => c.status === "upcoming") || conferences.value[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_LoadingState = __nuxt_component_1;
      const _component_EmptyState = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-6b31d080><section class="bg-white border-b border-slate-100" data-v-6b31d080><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20" data-v-6b31d080><div class="max-w-3xl" data-v-6b31d080><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-6b31d080>`);
      _push(ssrRenderComponent(unref(Calendar), { size: 13 }, null, _parent));
      _push(` Global Events </div><h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-6b31d080> Scientific <span class="text-[#1d4e89]" data-v-6b31d080>Convergences</span></h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px] mb-10" data-v-6b31d080> Stay at the forefront of cellular pathology by attending our world-class congresses, specialized workshops, and research symposia. </p><div class="flex items-center flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-8" data-v-6b31d080><div data-v-6b31d080><p class="text-[26px] font-bold text-slate-900 tracking-tight leading-none" data-v-6b31d080>40+</p><p class="text-[10px] font-semibold tracking-[.18em] uppercase text-slate-400 mt-1" data-v-6b31d080>Annual Events</p></div><div class="w-px h-7 bg-slate-200 hidden sm:block" data-v-6b31d080></div><div data-v-6b31d080><p class="text-[26px] font-bold text-slate-900 tracking-tight leading-none" data-v-6b31d080>120+</p><p class="text-[10px] font-semibold tracking-[.18em] uppercase text-slate-400 mt-1" data-v-6b31d080>Countries</p></div><div class="w-px h-7 bg-slate-200 hidden sm:block" data-v-6b31d080></div><div data-v-6b31d080><p class="text-[26px] font-bold text-slate-900 tracking-tight leading-none" data-v-6b31d080>5K+</p><p class="text-[10px] font-semibold tracking-[.18em] uppercase text-slate-400 mt-1" data-v-6b31d080>Practitioners</p></div></div></div></div></section>`);
      if (featuredConference.value) {
        _push(`<section class="bg-white border-b border-slate-100 py-14 lg:py-16" data-v-6b31d080><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-6b31d080><div class="flex items-center gap-4 mb-8" data-v-6b31d080><span class="block w-7 h-px bg-[#1d4e89]" data-v-6b31d080></span><span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]" data-v-6b31d080>Next Major Event</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/conferences/${featuredConference.value._id}`,
          class: "featured-card group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative overflow-hidden min-h-[300px] lg:min-h-0 bg-slate-100" data-v-6b31d080${_scopeId}><img${ssrRenderAttr("src", featuredConference.value.bannerImage || "https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg")} class="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"${ssrRenderAttr("alt", featuredConference.value.title)} data-v-6b31d080${_scopeId}><div class="absolute top-5 left-5 bg-[#1d4e89] text-blue-200 text-[10px] font-extrabold tracking-[.18em] uppercase px-3.5 py-1.5 rounded-full" data-v-6b31d080${_scopeId}> Upcoming </div></div><div class="p-8 lg:p-10 flex flex-col justify-center" data-v-6b31d080${_scopeId}><p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-3" data-v-6b31d080${_scopeId}>Featured Conference</p><h2 class="text-[clamp(20px,2.5vw,30px)] font-bold leading-[1.2] tracking-tight text-slate-900 mb-4" data-v-6b31d080${_scopeId}>${ssrInterpolate(featuredConference.value.title)}</h2><p class="text-[13px] leading-[1.75] text-slate-500 mb-7 line-clamp-3" data-v-6b31d080${_scopeId}>${ssrInterpolate(featuredConference.value.description || "Join elite practitioners for an intensive exploration of cellular pathology and modern oncology diagnosis.")}</p><div class="flex border border-slate-200 rounded-xl overflow-hidden mb-7" data-v-6b31d080${_scopeId}><div class="flex items-center gap-3 px-4 py-3.5 flex-1" data-v-6b31d080${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Calendar), {
                size: 15,
                class: "text-[#1d4e89] flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-6b31d080${_scopeId}><p class="text-[9px] font-bold tracking-[.18em] uppercase text-slate-400 mb-0.5" data-v-6b31d080${_scopeId}>Date</p><p class="text-[13px] font-bold text-slate-800" data-v-6b31d080${_scopeId}>${ssrInterpolate(featuredConference.value.startDate ? new Date(featuredConference.value.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "TBA")}</p></div></div><div class="w-px bg-slate-200 flex-shrink-0" data-v-6b31d080${_scopeId}></div><div class="flex items-center gap-3 px-4 py-3.5 flex-1" data-v-6b31d080${_scopeId}>`);
              _push2(ssrRenderComponent(unref(MapPin), {
                size: 15,
                class: "text-[#1d4e89] flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-6b31d080${_scopeId}><p class="text-[9px] font-bold tracking-[.18em] uppercase text-slate-400 mb-0.5" data-v-6b31d080${_scopeId}>Venue</p><p class="text-[13px] font-bold text-slate-800" data-v-6b31d080${_scopeId}>${ssrInterpolate(featuredConference.value.venue || "TBA")}</p></div></div></div><div class="inline-flex items-center gap-2" data-v-6b31d080${_scopeId}><span class="inline-flex items-center gap-2 bg-[#1d4e89] text-white text-[13px] font-bold px-5 py-3 rounded-xl transition-colors duration-200 group-hover:bg-blue-800" data-v-6b31d080${_scopeId}> View Event Details `);
              _push2(ssrRenderComponent(unref(ArrowRight), { size: 14 }, null, _parent2, _scopeId));
              _push2(`</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative overflow-hidden min-h-[300px] lg:min-h-0 bg-slate-100" }, [
                  createVNode("img", {
                    src: featuredConference.value.bannerImage || "https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg",
                    class: "w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105",
                    alt: featuredConference.value.title
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "absolute top-5 left-5 bg-[#1d4e89] text-blue-200 text-[10px] font-extrabold tracking-[.18em] uppercase px-3.5 py-1.5 rounded-full" }, " Upcoming ")
                ]),
                createVNode("div", { class: "p-8 lg:p-10 flex flex-col justify-center" }, [
                  createVNode("p", { class: "text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-3" }, "Featured Conference"),
                  createVNode("h2", { class: "text-[clamp(20px,2.5vw,30px)] font-bold leading-[1.2] tracking-tight text-slate-900 mb-4" }, toDisplayString(featuredConference.value.title), 1),
                  createVNode("p", { class: "text-[13px] leading-[1.75] text-slate-500 mb-7 line-clamp-3" }, toDisplayString(featuredConference.value.description || "Join elite practitioners for an intensive exploration of cellular pathology and modern oncology diagnosis."), 1),
                  createVNode("div", { class: "flex border border-slate-200 rounded-xl overflow-hidden mb-7" }, [
                    createVNode("div", { class: "flex items-center gap-3 px-4 py-3.5 flex-1" }, [
                      createVNode(unref(Calendar), {
                        size: 15,
                        class: "text-[#1d4e89] flex-shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[9px] font-bold tracking-[.18em] uppercase text-slate-400 mb-0.5" }, "Date"),
                        createVNode("p", { class: "text-[13px] font-bold text-slate-800" }, toDisplayString(featuredConference.value.startDate ? new Date(featuredConference.value.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "TBA"), 1)
                      ])
                    ]),
                    createVNode("div", { class: "w-px bg-slate-200 flex-shrink-0" }),
                    createVNode("div", { class: "flex items-center gap-3 px-4 py-3.5 flex-1" }, [
                      createVNode(unref(MapPin), {
                        size: 15,
                        class: "text-[#1d4e89] flex-shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[9px] font-bold tracking-[.18em] uppercase text-slate-400 mb-0.5" }, "Venue"),
                        createVNode("p", { class: "text-[13px] font-bold text-slate-800" }, toDisplayString(featuredConference.value.venue || "TBA"), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "inline-flex items-center gap-2" }, [
                    createVNode("span", { class: "inline-flex items-center gap-2 bg-[#1d4e89] text-white text-[13px] font-bold px-5 py-3 rounded-xl transition-colors duration-200 group-hover:bg-blue-800" }, [
                      createTextVNode(" View Event Details "),
                      createVNode(unref(ArrowRight), { size: 14 })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="bg-white py-14 lg:py-16" data-v-6b31d080><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-6b31d080><div class="flex items-end justify-between mb-8 gap-4 flex-wrap" data-v-6b31d080><div data-v-6b31d080><p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-2" data-v-6b31d080>Past Events</p><h3 class="text-[clamp(26px,4vw,40px)] font-bold tracking-tight text-slate-900" data-v-6b31d080>Event Archives</h3></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.15em] uppercase text-slate-800 border-b border-slate-300 pb-0.5 hover:text-[#1d4e89] hover:border-[#1d4e89] transition-colors duration-200 whitespace-nowrap"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 13 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" View All "),
              createVNode(unref(ArrowRight), { size: 13 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_LoadingState, null, null, _parent));
      } else if (unref(conferences).length > 0) {
        _push(`<div class="archive-grid" data-v-6b31d080><!--[-->`);
        ssrRenderList(unref(conferences), (conference) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: conference._id,
            to: `/conferences/${conference._id}`,
            class: "archive-card group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative h-[200px] overflow-hidden bg-slate-100" data-v-6b31d080${_scopeId}><img${ssrRenderAttr("src", conference.bannerImage || "https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" style="${ssrRenderStyle({ "filter": "grayscale(15%)" })}"${ssrRenderAttr("alt", conference.title)} data-v-6b31d080${_scopeId}><div class="absolute top-3 right-3 bg-white border border-slate-200 text-slate-800 text-[11px] font-extrabold tracking-[.08em] px-2.5 py-0.5 rounded-full" data-v-6b31d080${_scopeId}>${ssrInterpolate(conference.startDate ? new Date(conference.startDate).getFullYear() : "Archive")}</div></div><div class="p-5 flex flex-col gap-1.5 flex-1" data-v-6b31d080${_scopeId}><p class="text-[10px] font-bold tracking-[.2em] uppercase text-[#1d4e89]" data-v-6b31d080${_scopeId}>${ssrInterpolate(conference.startDate ? new Date(conference.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "")}</p><h4 class="text-[15px] font-bold leading-[1.35] text-slate-900 line-clamp-2 flex-1" data-v-6b31d080${_scopeId}>${ssrInterpolate(conference.title)}</h4><div class="inline-flex items-center gap-1 text-[11px] font-bold tracking-[.1em] uppercase text-slate-400 mt-2 group-hover:text-[#1d4e89] transition-colors duration-200" data-v-6b31d080${_scopeId}> Read more `);
                _push2(ssrRenderComponent(unref(ArrowRight), {
                  size: 12,
                  class: "transition-transform duration-200 group-hover:translate-x-0.5"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative h-[200px] overflow-hidden bg-slate-100" }, [
                    createVNode("img", {
                      src: conference.bannerImage || "https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg",
                      class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]",
                      style: { "filter": "grayscale(15%)" },
                      alt: conference.title
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute top-3 right-3 bg-white border border-slate-200 text-slate-800 text-[11px] font-extrabold tracking-[.08em] px-2.5 py-0.5 rounded-full" }, toDisplayString(conference.startDate ? new Date(conference.startDate).getFullYear() : "Archive"), 1)
                  ]),
                  createVNode("div", { class: "p-5 flex flex-col gap-1.5 flex-1" }, [
                    createVNode("p", { class: "text-[10px] font-bold tracking-[.2em] uppercase text-[#1d4e89]" }, toDisplayString(conference.startDate ? new Date(conference.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : ""), 1),
                    createVNode("h4", { class: "text-[15px] font-bold leading-[1.35] text-slate-900 line-clamp-2 flex-1" }, toDisplayString(conference.title), 1),
                    createVNode("div", { class: "inline-flex items-center gap-1 text-[11px] font-bold tracking-[.1em] uppercase text-slate-400 mt-2 group-hover:text-[#1d4e89] transition-colors duration-200" }, [
                      createTextVNode(" Read more "),
                      createVNode(unref(ArrowRight), {
                        size: 12,
                        class: "transition-transform duration-200 group-hover:translate-x-0.5"
                      })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_EmptyState, {
          title: "No specialized events found in the archives.",
          message: "Check back later for recent scientific updates and upcoming conferences."
        }, null, _parent));
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/conferences/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b31d080"]]);

export { index as default };
//# sourceMappingURL=index-DX0xGNTP.mjs.map
