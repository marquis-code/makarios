import { _ as __nuxt_component_0$1 } from './nuxt-link-DDeWRX1V.mjs';
import { mergeProps, defineComponent, ref, computed, watch, withCtx, unref, createVNode, toDisplayString, createTextVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, h as useCMS, k as useI18n, l as useRoute, m as _imports_0, o as useCookie, f as useRuntimeConfig } from './server.mjs';
import { G as Globe } from './globe-CEE0QZpa.mjs';
import { C as ChevronDown } from './chevron-down-BwjocHKn.mjs';
import { U as Users } from './users-D6INsix-.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { C as Calendar } from './calendar-G-gDUwIF.mjs';
import { U as User } from './user-MjtyRiwp.mjs';
import { X } from './x-BzrXjgTv.mjs';
import { u as useNewsletter, M as Mail } from './useNewsletter-B5XJZSJl.mjs';
import { F as Facebook, T as Twitter, L as Linkedin } from './twitter-CIMqWhd6.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
import { S as ShieldCheck } from './shield-check-C8vFK0lK.mjs';
import __nuxt_component_0$2 from './index-C2XScDlG.mjs';
import { useRoute as useRoute$1 } from 'vue-router';
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
import '@iconify/utils/lib/css/icon';

const ArrowUpRight = createLucideIcon("arrow-up-right", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const BookOpen = createLucideIcon("book-open", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const Instagram = createLucideIcon("instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
const _sfc_main$4 = {
  __name: "CoreLanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales: i18nLocales, setLocale } = useI18n();
    const locales = computed(() => i18nLocales.value || []);
    const currentLocale = computed(() => locale.value);
    const currentLanguageName = computed(() => {
      const loc = locales.value.find((l) => l.code === currentLocale.value);
      return loc ? loc.name : "English";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))}><button class="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors">`);
      _push(ssrRenderComponent(unref(Globe), { size: 16 }, null, _parent));
      _push(`<span class="hidden sm:inline-block">${ssrInterpolate(currentLanguageName.value)}</span><span class="sm:hidden uppercase">${ssrInterpolate(currentLocale.value)}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        size: 14,
        class: "opacity-50"
      }, null, _parent));
      _push(`</button><div class="absolute right-0 top-full mt-1 w-32 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] overflow-hidden"><!--[-->`);
      ssrRenderList(locales.value, (loc) => {
        _push(`<button class="${ssrRenderClass([{ "text-[#00A8B5] font-bold bg-slate-50": currentLocale.value === loc.code, "text-slate-600": currentLocale.value !== loc.code }, "w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors"])}">${ssrInterpolate(loc.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/LanguageSwitcher.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { cmsConfig } = useCMS();
    const { t } = useI18n();
    const route = useRoute();
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const activeMobileSubmenu = ref(null);
    const activeDropdown = ref(null);
    ref({});
    const isHomePage = computed(() => route.path === "/");
    const navigation = computed(() => [
      {
        label: t("nav.about_us"),
        children: [
          { label: t("nav.scientific_board"), to: "/about", icon: Users, description: t("nav.scientific_excellence") },
          { label: t("nav.abstracts"), to: "/abstracts", icon: BookOpen, description: t("nav.research_pubs") }
        ]
      },
      { label: t("nav.events"), to: "/conferences" },
      { label: t("nav.newsletters"), to: "/newsletters" },
      { label: t("nav.gallery"), to: "/gallery" },
      { label: t("nav.contact"), to: "/contact" },
      {
        label: t("nav.links"),
        children: [
          { label: t("nav.iac_website"), to: "https://www.cytology-iac.org/", icon: Globe, description: t("nav.iac_website_desc") }
        ]
      }
    ]);
    watch(() => route.path, () => {
      isMobileMenuOpen.value = false;
      activeMobileSubmenu.value = null;
      activeDropdown.value = null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-[100] transition-all duration-300", isMobileMenuOpen.value ? "h-screen lg:h-auto" : ""]
      }, _attrs))} data-v-17048da4><div class="${ssrRenderClass([[
        isScrolled.value || !isHomePage.value ? "max-w-full border-b border-slate-100 bg-white shadow-sm px-0" : "max-w-7xl mt-4 px-4 sm:px-6"
      ], "mx-auto transition-all duration-500"])}" data-v-17048da4><nav class="${ssrRenderClass([[
        isScrolled.value || !isHomePage.value ? "px-4 sm:px-6 lg:px-8 py-3.5 bg-white" : "bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm"
      ], "flex items-center justify-between transition-all duration-300"])}" data-v-17048da4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 group relative z-[110]",
        onClick: ($event) => isMobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 group-hover:border-blue-200 transition-colors duration-300" data-v-17048da4${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="SCPSC Logo" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-v-17048da4${_scopeId}></div><div class="flex flex-col leading-none gap-0.5" data-v-17048da4${_scopeId}><span class="text-[14px] font-bold tracking-tight text-slate-900" data-v-17048da4${_scopeId}>${ssrInterpolate(unref(cmsConfig)?.global?.siteName || "SCPSC")}</span><span class="text-[9px] font-semibold tracking-[0.25em] text-blue-600 uppercase" data-v-17048da4${_scopeId}>Nigeria</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-9 h-9 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 group-hover:border-blue-200 transition-colors duration-300" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "SCPSC Logo",
                  class: "w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                })
              ]),
              createVNode("div", { class: "flex flex-col leading-none gap-0.5" }, [
                createVNode("span", { class: "text-[14px] font-bold tracking-tight text-slate-900" }, toDisplayString(unref(cmsConfig)?.global?.siteName || "SCPSC"), 1),
                createVNode("span", { class: "text-[9px] font-semibold tracking-[0.25em] text-blue-600 uppercase" }, "Nigeria")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center gap-0.5" data-v-17048da4><!--[-->`);
      ssrRenderList(navigation.value, (link) => {
        _push(`<!--[-->`);
        if (!link.children) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            class: "nav-link",
            "active-class": "nav-link--active"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<div class="relative" data-v-17048da4><button class="${ssrRenderClass([activeDropdown.value === link.label ? "text-[#1d4e89] bg-blue-50" : "", "nav-link flex items-center gap-1.5"])}" data-v-17048da4>${ssrInterpolate(link.label)} `);
          _push(ssrRenderComponent(unref(ChevronDown), {
            size: 13,
            class: ["transition-transform duration-300 text-slate-400", activeDropdown.value === link.label ? "rotate-180 text-blue-600" : ""]
          }, null, _parent));
          _push(`</button>`);
          if (activeDropdown.value === link.label) {
            _push(`<div class="absolute top-[calc(100%+8px)] left-0 w-64 z-[200] origin-top-left" data-v-17048da4><div class="absolute -top-1.5 left-5 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 z-10" data-v-17048da4></div><div class="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-2 space-y-0.5" data-v-17048da4><!--[-->`);
            ssrRenderList(link.children, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.to,
                to: child.to,
                class: "flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group/item",
                onClick: ($event) => activeDropdown.value = null
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/item:bg-[#1d4e89] group-hover/item:text-white transition-colors duration-200" data-v-17048da4${_scopeId}>`);
                    if (child.icon) {
                      ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(child.icon), { size: 14 }, null), _parent2, _scopeId);
                    } else {
                      _push2(`<span class="text-[11px] font-semibold" data-v-17048da4${_scopeId}>${ssrInterpolate(child.label.charAt(0))}</span>`);
                    }
                    _push2(`</div><div class="flex flex-col gap-0.5" data-v-17048da4${_scopeId}><span class="text-[13px] font-semibold text-slate-800 leading-none" data-v-17048da4${_scopeId}>${ssrInterpolate(child.label)}</span>`);
                    if (child.description) {
                      _push2(`<span class="text-[11px] text-slate-400" data-v-17048da4${_scopeId}>${ssrInterpolate(child.description)}</span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/item:bg-[#1d4e89] group-hover/item:text-white transition-colors duration-200" }, [
                        child.icon ? (openBlock(), createBlock(resolveDynamicComponent(child.icon), {
                          key: 0,
                          size: 14
                        })) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-[11px] font-semibold"
                        }, toDisplayString(child.label.charAt(0)), 1))
                      ]),
                      createVNode("div", { class: "flex flex-col gap-0.5" }, [
                        createVNode("span", { class: "text-[13px] font-semibold text-slate-800 leading-none" }, toDisplayString(child.label), 1),
                        child.description ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-[11px] text-slate-400"
                        }, toDisplayString(child.description), 1)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="hidden lg:flex items-center gap-2" data-v-17048da4>`);
      _push(ssrRenderComponent(_sfc_main$4, { class: "text-slate-500" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/appointments",
        class: "inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:text-[#1d4e89] rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { size: 13 }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("nav.bookings"))}`);
          } else {
            return [
              createVNode(unref(Calendar), { size: 13 }),
              createTextVNode(" " + toDisplayString(_ctx.$t("nav.bookings")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://member.scpsn.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold bg-[#1d4e89] hover:bg-blue-800 text-white rounded-xl transition-colors duration-200 shadow-sm" data-v-17048da4>`);
      _push(ssrRenderComponent(unref(User), { size: 13 }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("nav.become_member"))}</a></div><button class="lg:hidden relative z-[110] w-9 h-9 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center gap-[5px] hover:bg-slate-50 transition-colors" aria-label="Toggle navigation menu" data-v-17048da4><span class="${ssrRenderClass(["ham-bar", isMobileMenuOpen.value ? "rotate-45 translate-y-[6px]" : ""])}" data-v-17048da4></span><span class="${ssrRenderClass(["ham-bar w-3 self-end mr-2", isMobileMenuOpen.value ? "opacity-0 translate-x-2" : ""])}" data-v-17048da4></span><span class="${ssrRenderClass(["ham-bar", isMobileMenuOpen.value ? "-rotate-45 -translate-y-[6px]" : ""])}" data-v-17048da4></span></button></nav></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="lg:hidden fixed inset-0 z-[105] bg-white flex flex-col pt-24 pb-8 px-5 overflow-y-auto" data-v-17048da4><button class="absolute top-5 right-5 w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors z-[120]" aria-label="Close menu" data-v-17048da4>`);
        _push(ssrRenderComponent(unref(X), { size: 18 }, null, _parent));
        _push(`</button><nav class="flex flex-col relative z-10 mb-auto" data-v-17048da4><!--[-->`);
        ssrRenderList(navigation.value, (link, i) => {
          _push(`<!--[-->`);
          if (link.children) {
            _push(`<div class="border-b border-slate-100" data-v-17048da4><button class="w-full flex items-center justify-between py-4 group" data-v-17048da4><div class="flex items-center gap-4" data-v-17048da4><span class="text-[10px] font-semibold text-blue-300 font-mono tabular-nums" data-v-17048da4>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><span class="text-[22px] font-bold text-slate-800 tracking-tight group-hover:text-[#1d4e89] transition-colors duration-200" data-v-17048da4>${ssrInterpolate(link.label)}</span></div>`);
            _push(ssrRenderComponent(unref(ChevronDown), {
              size: 18,
              class: ["text-slate-400 transition-transform duration-300", activeMobileSubmenu.value === link.label ? "rotate-180 text-blue-600" : ""]
            }, null, _parent));
            _push(`</button><div class="pl-10 pb-4 space-y-3 overflow-hidden" style="${ssrRenderStyle(activeMobileSubmenu.value === link.label ? null : { display: "none" })}" data-v-17048da4><!--[-->`);
            ssrRenderList(link.children, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.to,
                to: child.to,
                class: "flex items-center gap-3 group/child py-1",
                onClick: ($event) => isMobileMenuOpen.value = false
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/child:bg-[#1d4e89] group-hover/child:text-white transition-colors duration-200" data-v-17048da4${_scopeId}>`);
                    if (child.icon) {
                      ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(child.icon), { size: 14 }, null), _parent2, _scopeId);
                    } else {
                      _push2(`<span class="text-[11px] font-semibold" data-v-17048da4${_scopeId}>${ssrInterpolate(child.label.charAt(0))}</span>`);
                    }
                    _push2(`</div><div data-v-17048da4${_scopeId}><p class="text-[14px] font-semibold text-slate-700 group-hover/child:text-[#1d4e89] transition-colors" data-v-17048da4${_scopeId}>${ssrInterpolate(child.label)}</p>`);
                    if (child.description) {
                      _push2(`<p class="text-[11px] text-slate-400" data-v-17048da4${_scopeId}>${ssrInterpolate(child.description)}</p>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/child:bg-[#1d4e89] group-hover/child:text-white transition-colors duration-200" }, [
                        child.icon ? (openBlock(), createBlock(resolveDynamicComponent(child.icon), {
                          key: 0,
                          size: 14
                        })) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-[11px] font-semibold"
                        }, toDisplayString(child.label.charAt(0)), 1))
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[14px] font-semibold text-slate-700 group-hover/child:text-[#1d4e89] transition-colors" }, toDisplayString(child.label), 1),
                        child.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-[11px] text-slate-400"
                        }, toDisplayString(child.description), 1)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: link.to,
              class: "flex items-center gap-4 py-4 border-b border-slate-100 group",
              onClick: ($event) => isMobileMenuOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="text-[10px] font-semibold text-blue-300 font-mono tabular-nums" data-v-17048da4${_scopeId}>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><span class="text-[22px] font-bold text-slate-800 tracking-tight group-hover:text-[#1d4e89] group-hover:translate-x-1 transition-all duration-200" data-v-17048da4${_scopeId}>${ssrInterpolate(link.label)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-[10px] font-semibold text-blue-300 font-mono tabular-nums" }, toDisplayString(String(i + 1).padStart(2, "0")), 1),
                    createVNode("span", { class: "text-[22px] font-bold text-slate-800 tracking-tight group-hover:text-[#1d4e89] group-hover:translate-x-1 transition-all duration-200" }, toDisplayString(link.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav><div class="pt-8 space-y-3 relative z-10 border-t border-slate-100 mt-8" data-v-17048da4><div class="grid grid-cols-2 gap-3" data-v-17048da4>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/appointments",
          class: "flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-slate-700 border border-slate-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors",
          onClick: ($event) => isMobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Calendar), { size: 14 }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("nav.bookings"))}`);
            } else {
              return [
                createVNode(unref(Calendar), { size: 14 }),
                createTextVNode(" " + toDisplayString(_ctx.$t("nav.bookings")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="https://member.scpsn.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 text-[13px] font-semibold bg-[#1d4e89] text-white rounded-xl hover:bg-blue-800 transition-colors" data-v-17048da4>`);
        _push(ssrRenderComponent(unref(User), { size: 14 }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("nav.become_member"))}</a></div><div class="flex items-center justify-between pt-4 border-t border-slate-100" data-v-17048da4><div data-v-17048da4><p class="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-0.5" data-v-17048da4>${ssrInterpolate(_ctx.$t("nav.official_inquiries"))}</p><p class="text-[13px] font-semibold text-slate-700" data-v-17048da4>info@scpsn.org.ng</p></div><a href="mailto:info@scpsn.org.ng" class="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1d4e89] hover:border-blue-200 hover:bg-blue-50 transition-all" aria-label="Send email" data-v-17048da4>`);
        _push(ssrRenderComponent(unref(ArrowUpRight), { size: 15 }, null, _parent));
        _push(`</a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-17048da4"]]), { __name: "Header" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { cmsConfig } = useCMS();
    const { loading, email } = useNewsletter();
    const { t } = useI18n();
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    const footerLinks = computed(() => ({
      [t("footer.quick_nav")]: [
        { label: t("footer.scientific_board"), to: "/about" },
        { label: t("footer.upcoming_conf"), to: "/conferences" },
        { label: t("footer.member_portal"), to: "https://member.scpsn.com" }
      ],
      [t("footer.resources")]: [
        { label: t("footer.journal_archives"), to: "/abstracts" },
        { label: t("footer.protocol_guidelines"), to: "/about" },
        { label: t("footer.gallery"), to: "/gallery" },
        { label: t("footer.news_media"), to: "/" },
        { label: t("footer.contact_support"), to: "/contact" }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white border-t border-slate-100" }, _attrs))} data-v-554624e5><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12" data-v-554624e5><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16" data-v-554624e5><div class="lg:col-span-4 space-y-6" data-v-554624e5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 rounded-xl border border-slate-200 overflow-hidden flex-shrink-0 group-hover:border-blue-200 transition-colors duration-300" data-v-554624e5${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="SCPSN Logo" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-v-554624e5${_scopeId}></div><div class="flex flex-col leading-none gap-0.5" data-v-554624e5${_scopeId}><span class="text-[14px] font-bold tracking-tight text-slate-900" data-v-554624e5${_scopeId}>${ssrInterpolate(unref(cmsConfig)?.global?.siteName || "SCPSN")}</span><span class="text-[9px] font-semibold tracking-[0.25em] text-blue-600 uppercase" data-v-554624e5${_scopeId}>Nigeria</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 rounded-xl border border-slate-200 overflow-hidden flex-shrink-0 group-hover:border-blue-200 transition-colors duration-300" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "SCPSN Logo",
                  class: "w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                })
              ]),
              createVNode("div", { class: "flex flex-col leading-none gap-0.5" }, [
                createVNode("span", { class: "text-[14px] font-bold tracking-tight text-slate-900" }, toDisplayString(unref(cmsConfig)?.global?.siteName || "SCPSN"), 1),
                createVNode("span", { class: "text-[9px] font-semibold tracking-[0.25em] text-blue-600 uppercase" }, "Nigeria")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-[14px] text-slate-500 leading-relaxed max-w-sm" data-v-554624e5>${ssrInterpolate(_ctx.$t("footer.desc"))}</p><div class="flex items-center gap-2.5" data-v-554624e5>`);
      if (unref(cmsConfig)?.global?.socialLinks?.facebook) {
        _push(`<a${ssrRenderAttr("href", unref(cmsConfig).global.socialLinks.facebook)} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-icon" data-v-554624e5>`);
        _push(ssrRenderComponent(unref(Facebook), { size: 15 }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(cmsConfig)?.global?.socialLinks?.twitter) {
        _push(`<a${ssrRenderAttr("href", unref(cmsConfig).global.socialLinks.twitter)} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" class="social-icon" data-v-554624e5>`);
        _push(ssrRenderComponent(unref(Twitter), { size: 15 }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(cmsConfig)?.global?.socialLinks?.linkedin) {
        _push(`<a${ssrRenderAttr("href", unref(cmsConfig).global.socialLinks.linkedin)} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon" data-v-554624e5>`);
        _push(ssrRenderComponent(unref(Linkedin), { size: 15 }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(cmsConfig)?.global?.socialLinks?.instagram) {
        _push(`<a${ssrRenderAttr("href", unref(cmsConfig).global.socialLinks.instagram)} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-icon" data-v-554624e5>`);
        _push(ssrRenderComponent(unref(Instagram), { size: 15 }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-2 space-y-2" data-v-554624e5><a href="mailto:info@scpsn.org.ng" class="flex items-center gap-2 text-[13px] text-slate-500 hover:text-[#1d4e89] transition-colors group" data-v-554624e5>`);
      _push(ssrRenderComponent(unref(Mail), {
        size: 13,
        class: "flex-shrink-0 group-hover:text-[#1d4e89]"
      }, null, _parent));
      _push(` info@scpsn.org.ng </a></div></div><div class="lg:col-span-5 grid grid-cols-2 gap-8" data-v-554624e5><!--[-->`);
      ssrRenderList(footerLinks.value, (links, groupTitle) => {
        _push(`<div data-v-554624e5><h4 class="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-5" data-v-554624e5>${ssrInterpolate(groupTitle)}</h4><ul class="space-y-3" data-v-554624e5><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(`<li data-v-554624e5>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            class: "text-[14px] text-slate-600 hover:text-[#1d4e89] transition-colors duration-200 font-medium inline-flex items-center gap-1.5 group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300 flex-shrink-0" data-v-554624e5${_scopeId}></span> ${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createVNode("span", { class: "w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300 flex-shrink-0" }),
                  createTextVNode(" " + toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div><div class="lg:col-span-3 space-y-5" data-v-554624e5><div data-v-554624e5><h4 class="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-1.5" data-v-554624e5>${ssrInterpolate(_ctx.$t("footer.updates"))}</h4><p class="text-[14px] text-slate-500 leading-relaxed" data-v-554624e5>${ssrInterpolate(_ctx.$t("footer.mailing_list"))}</p></div><div class="relative" data-v-554624e5><input${ssrRenderAttr("value", unref(email))} type="email"${ssrRenderAttr("placeholder", _ctx.$t("footer.email_placeholder"))} class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-14 text-[13px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-400 transition-all duration-200" data-v-554624e5><button class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#1d4e89] hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} aria-label="Subscribe" data-v-554624e5>`);
      if (unref(loading)) {
        _push(`<div class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" data-v-554624e5></div>`);
      } else {
        _push(ssrRenderComponent(unref(ArrowRight), { size: 14 }, null, _parent));
      }
      _push(`</button></div><p class="text-[11px] text-slate-400 flex items-center gap-1.5" data-v-554624e5>`);
      _push(ssrRenderComponent(unref(ShieldCheck), {
        size: 12,
        class: "text-emerald-500 flex-shrink-0"
      }, null, _parent));
      _push(` No spam. Unsubscribe any time. </p></div></div></div><div class="border-t border-slate-100" data-v-554624e5><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" data-v-554624e5><p class="text-[12px] text-slate-400" data-v-554624e5> © ${ssrInterpolate(currentYear.value)} ${ssrInterpolate(unref(cmsConfig)?.global?.siteName || "Society for Cellular Pathology Scientists of Nigeria")}. All rights reserved. </p><div class="flex items-center gap-6" data-v-554624e5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-[12px] text-slate-400 hover:text-[#1d4e89] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-[12px] text-slate-400 hover:text-[#1d4e89] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("footer.terms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("footer.terms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-554624e5"]]), { __name: "Footer" });
const _sfc_main$1 = {
  __name: "AIChatWidget",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const isOpen = ref(false);
    const input = ref("");
    ref(null);
    const socket = ref(null);
    const unreadCount = ref(0);
    const predefinedResponses = ref([]);
    const showEmoji = ref(false);
    const pendingAttachments = ref([]);
    ref(null);
    const commonEmojis = ["👋", "👍", "😊", "✅", "🔬", "🏥", "📅", "💡", "⚠️", "📎", "👏", "🎉"];
    const showIdleWarning = ref(false);
    const showRating = ref(false);
    const guestName = useCookie("chat_guest_name", { default: () => "" });
    const guestEmail = useCookie("chat_guest_email", { default: () => "" });
    const roomId = useCookie("chat_room_id", { default: () => `guest_${Date.now()}` });
    const isIdentified = computed(() => !!guestName.value && !!guestEmail.value);
    const isValidIdentity = computed(() => guestName.value.length >= 2 && /^\S+@\S+\.\S+$/.test(guestEmail.value));
    const showProactiveTooltip = ref(false);
    const proactiveMessage = ref("Hi! Need help with this page?");
    const hasInteracted = ref(false);
    const config = useRuntimeConfig();
    config.public.apiBase || "https://spsn-backend.onrender.com/api";
    const messages = ref([]);
    const trackCurrentPage = () => {
      if (!socket.value) return;
      socket.value.emit("trackPage", {
        roomId: roomId.value,
        pageTitle: (void 0).title,
        pageUrl: (void 0).location.href
      });
    };
    watch(route, () => {
      trackCurrentPage();
      triggerProactiveEngagement();
    });
    const triggerProactiveEngagement = () => {
      if (isOpen.value || hasInteracted.value) return;
      if (route.path.includes("conferences")) proactiveMessage.value = "Interested in our upcoming conferences? I can help with registration.";
      else if (route.path.includes("membership")) proactiveMessage.value = "Questions about membership? See our requirements here.";
      else if (route.path.includes("abstracts")) proactiveMessage.value = "Submitting an abstract? Check our guidelines.";
      else proactiveMessage.value = "Welcome! Any questions about SCPSN?";
      setTimeout(() => {
        if (!isOpen.value && !hasInteracted.value) {
          showProactiveTooltip.value = true;
          setTimeout(() => {
            showProactiveTooltip.value = false;
          }, 1e4);
        }
      }, 5e3);
    };
    const formatTime = (ts) => {
      if (!ts) return "";
      return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-6 right-6 z-[100] font-sans" }, _attrs))} data-v-7f2e8944><button class="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group" aria-label="Open Chat" data-v-7f2e8944>`);
      if (unreadCount.value > 0) {
        _push(`<div class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce" data-v-7f2e8944>${ssrInterpolate(unreadCount.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isOpen.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "logos:whatsapp-icon",
          size: "32"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          size: "28"
        }, null, _parent));
      }
      if (showProactiveTooltip.value && !isOpen.value) {
        _push(`<div class="absolute right-20 bottom-2 bg-white text-slate-800 px-5 py-3 rounded-2xl text-[11px] font-bold shadow-2xl border border-slate-100 whitespace-nowrap min-w-[200px]" data-v-7f2e8944><p class="text-[#075E54] mb-1 flex items-center gap-1.5 text-[9px]" data-v-7f2e8944><span class="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" data-v-7f2e8944></span> Contextual Support </p> ${ssrInterpolate(proactiveMessage.value)} <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-slate-100" data-v-7f2e8944></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<div class="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[600px] bg-[#E5DDD5] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-white/20" data-v-7f2e8944><div class="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url(&#39;https://w0.peakpx.com/wallpaper/508/606/HD-wallpaper-whatsapp-l-light-patron-patrones.jpg&#39;)] bg-repeat" data-v-7f2e8944></div><div class="bg-[#075E54] p-5 text-white flex items-center justify-between z-10 shadow-lg relative shrink-0" data-v-7f2e8944><div class="flex items-center gap-4" data-v-7f2e8944><div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner" data-v-7f2e8944>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:bot",
          size: "24",
          class: "text-white/90"
        }, null, _parent));
        _push(`</div><div data-v-7f2e8944><h4 class="font-extrabold text-base leading-tight tracking-tight" data-v-7f2e8944>SCPSN Smart Bot</h4><p class="text-[9px] text-white/60 flex items-center gap-1.5 font-black tracking-[0.2em] mt-0.5" data-v-7f2e8944><span class="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" data-v-7f2e8944></span> Active &amp; Diagnostic </p></div></div><div class="flex gap-1" data-v-7f2e8944><button class="text-[9px] font-black bg-white/20 hover:bg-[#25D366] transition-all px-3 py-1.5 rounded-xl shadow-inner border border-white/10 shrink-0" data-v-7f2e8944> Live Agent </button></div></div>`);
        if (!isIdentified.value) {
          _push(`<div class="flex-grow z-10 flex flex-col p-8 items-center justify-center bg-white/95 backdrop-blur-md" data-v-7f2e8944><div class="w-24 h-24 bg-[#075E54]/5 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-black/5 animate-in zoom-in-50 duration-500" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:user-plus",
            size: "40",
            class: "text-[#075E54]"
          }, null, _parent));
          _push(`</div><div class="text-center mb-10" data-v-7f2e8944><h5 class="text-xl font-black text-slate-800 tracking-tight mb-2" data-v-7f2e8944>Initialize Session</h5><p class="text-sm font-bold text-slate-400 leading-relaxed" data-v-7f2e8944>Please provide your details to<br data-v-7f2e8944>access live administrative support.</p></div><div class="w-full space-y-4" data-v-7f2e8944><div class="space-y-1.5" data-v-7f2e8944><label class="text-[10px] font-black text-[#075E54] ml-1" data-v-7f2e8944>Full Name</label><input${ssrRenderAttr("value", unref(guestName))} placeholder="e.g. Dr. Adamu" class="form-input" data-v-7f2e8944></div><div class="space-y-1.5" data-v-7f2e8944><label class="text-[10px] font-black text-[#075E54] ml-1" data-v-7f2e8944>Email Address</label><input${ssrRenderAttr("value", unref(guestEmail))} type="email" placeholder="scientific@domain.com" class="form-input" data-v-7f2e8944></div><button${ssrIncludeBooleanAttr(!isValidIdentity.value) ? " disabled" : ""} class="btn-premium w-full !py-4 shadow-none mt-6" data-v-7f2e8944> Begin Secure Contact </button></div><p class="mt-10 text-[9px] font-bold text-slate-300 flex items-center gap-2" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:shield-check",
            size: "12"
          }, null, _parent));
          _push(` End-to-End Encrypted Handshake </p></div>`);
        } else {
          _push(`<!--[--><div class="flex-grow overflow-y-auto p-5 pb-8 space-y-4 z-10 scrollbar-thin scroll-smooth" data-v-7f2e8944><div class="flex justify-center my-6" data-v-7f2e8944><span class="bg-[#D1E9FF]/90 backdrop-blur-sm shadow-md text-[9px] font-black text-[#075E54] px-4 py-1.5 rounded-xl tracking-[0.2em]" data-v-7f2e8944> Session Established </span></div><!--[-->`);
          ssrRenderList(messages.value, (msg, i) => {
            _push(`<div class="${ssrRenderClass([
              "max-w-[85%] p-4 rounded-2xl text-[13.5px] leading-relaxed relative shadow-lg group",
              msg.sender === "user" ? "ml-auto bg-[#DCF8C6] text-slate-800 rounded-tr-none" : "mr-auto bg-white text-slate-800 rounded-tl-none border border-black/5"
            ])}" data-v-7f2e8944>`);
            if (msg.sender === "user") {
              _push(`<div class="absolute -top-0 -right-2 w-4 h-4 text-[#DCF8C6] fill-current" data-v-7f2e8944><svg viewBox="0 0 16 16" data-v-7f2e8944><path d="M16 0H0v16L16 0z" data-v-7f2e8944></path></svg></div>`);
            } else {
              _push(`<div class="absolute -top-0 -left-2 w-4 h-4 text-white fill-current" data-v-7f2e8944><svg viewBox="0 0 16 16" data-v-7f2e8944><path d="M0 0h16v16L0 0z" data-v-7f2e8944></path></svg></div>`);
            }
            if (msg.attachments && msg.attachments.length > 0) {
              _push(`<div class="mb-3 space-y-2" data-v-7f2e8944><!--[-->`);
              ssrRenderList(msg.attachments, (att, i2) => {
                _push(`<div class="rounded-xl overflow-hidden border border-black/5 bg-black/5" data-v-7f2e8944>`);
                if (att.startsWith("data:image")) {
                  _push(`<img${ssrRenderAttr("src", att)} class="w-full max-h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" data-v-7f2e8944>`);
                } else {
                  _push(`<div class="p-4 flex items-center gap-3 cursor-pointer hover:bg-black/5 transition-colors" data-v-7f2e8944>`);
                  _push(ssrRenderComponent(_component_Icon, {
                    name: "lucide:file",
                    size: "24",
                    class: "text-[#075E54] opacity-80"
                  }, null, _parent));
                  _push(`<span class="text-[10px] font-bold text-slate-700 truncate" data-v-7f2e8944>Attached Document</span></div>`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            if (msg.pageTitle && msg.sender !== "admin") {
              _push(`<div class="text-[8px] font-black text-[#075E54]/40 mb-2 pb-1 border-b border-black/5 flex items-center gap-1" data-v-7f2e8944>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "lucide:globe",
                size: "10"
              }, null, _parent));
              _push(` From: ${ssrInterpolate(msg.pageTitle)}</div>`);
            } else {
              _push(`<!---->`);
            }
            if (msg.sender !== "user") {
              _push(`<div class="text-[9px] font-black text-[#075E54]/60 mb-1.5 flex items-center gap-1" data-v-7f2e8944>`);
              if (msg.sender === "ai") {
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:bot",
                  size: "12",
                  class: "text-emerald-500"
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(` ${ssrInterpolate(msg.senderName || "SCPSN Intelligence")}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<p class="font-medium whitespace-pre-wrap tracking-tight" data-v-7f2e8944>${ssrInterpolate(msg.text)}</p><div class="flex items-center justify-end gap-1.5 mt-2 opacity-60" data-v-7f2e8944><span class="text-[9px] font-bold tracking-tighter" data-v-7f2e8944>${ssrInterpolate(formatTime(msg.createdAt))}</span>`);
            if (msg.sender === "user") {
              _push(`<div class="flex items-center" data-v-7f2e8944>`);
              if (msg.status === "read") {
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check-check",
                  size: "12",
                  class: "text-sky-500"
                }, null, _parent));
              } else if (msg.status === "delivered") {
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check-check",
                  size: "12",
                  class: "text-slate-400"
                }, null, _parent));
              } else {
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  size: "12",
                  class: "text-slate-400"
                }, null, _parent));
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
          if (predefinedResponses.value.length > 0 && messages.value.some((m) => m.sender === "ai")) {
            _push(`<div class="p-3 bg-[#F0F2F5]/80 backdrop-blur-md overflow-x-auto whitespace-nowrap scrollbar-thin border-t border-black/5" data-v-7f2e8944><div class="flex gap-2" data-v-7f2e8944><!--[-->`);
            ssrRenderList(predefinedResponses.value, (res, i) => {
              _push(`<button class="px-4 py-2 border border-[#075E54]/20 bg-white hover:bg-[#DCF8C6] hover:border-[#25D366] rounded-full text-[11px] font-bold text-[#075E54] transition-all whitespace-nowrap shadow-sm" data-v-7f2e8944>${ssrInterpolate(res.label)}</button>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (pendingAttachments.value.length > 0) {
            _push(`<div class="flex items-center gap-2 p-3 bg-white border-t border-black/5 z-20" data-v-7f2e8944><!--[-->`);
            ssrRenderList(pendingAttachments.value, (att, i) => {
              _push(`<div class="relative group" data-v-7f2e8944>`);
              if (att.startsWith("data:image")) {
                _push(`<img${ssrRenderAttr("src", att)} class="w-12 h-12 object-cover rounded-xl border border-slate-200" data-v-7f2e8944>`);
              } else {
                _push(`<div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200" data-v-7f2e8944>`);
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:file",
                  size: "18",
                  class: "text-slate-400"
                }, null, _parent));
                _push(`</div>`);
              }
              _push(`<button class="absolute -top-2 -right-2 w-5 h-5 bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" data-v-7f2e8944>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "lucide:x",
                size: "10"
              }, null, _parent));
              _push(`</button></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="p-4 bg-[#F0F2F5] flex items-end gap-2 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] relative" data-v-7f2e8944><div class="flex items-center gap-1 mb-0.5" data-v-7f2e8944><div class="relative" data-v-7f2e8944><button class="p-3 hover:bg-black/5 rounded-full text-slate-500 transition-colors" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:smile",
            size: "24"
          }, null, _parent));
          _push(`</button>`);
          if (showEmoji.value) {
            _push(`<div class="absolute bottom-full left-0 mb-4 bg-white border border-slate-100 p-4 rounded-3xl shadow-2xl flex gap-2 w-[280px] flex-wrap z-[100] cursor-default" data-v-7f2e8944><!--[-->`);
            ssrRenderList(commonEmojis, (e) => {
              _push(`<button class="text-2xl hover:scale-125 transition-transform" data-v-7f2e8944>${ssrInterpolate(e)}</button>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><button class="p-3 hover:bg-black/5 rounded-full text-slate-500 transition-colors" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:paperclip",
            size: "24"
          }, null, _parent));
          _push(`</button><input type="file" class="hidden" accept="image/*,.pdf,.doc,.docx" multiple data-v-7f2e8944></div><div class="flex-grow" data-v-7f2e8944><textarea rows="1" placeholder="Type a message..." class="w-full px-5 py-3.5 bg-white border-none rounded-2xl text-[14px] font-medium focus:ring-4 focus:ring-[#075E54]/5 outline-none shadow-sm max-h-32 resize-none transition-all placeholder:text-slate-400" data-v-7f2e8944>${ssrInterpolate(input.value)}</textarea></div><button${ssrIncludeBooleanAttr(!input.value.trim() && pendingAttachments.value.length === 0) ? " disabled" : ""} class="w-12 h-12 bg-[#075E54] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#128C7E] transition-all active:scale-90 disabled:opacity-30 disabled:scale-100 mb-0.5 shrink-0" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:send",
            size: "20",
            class: "ml-1"
          }, null, _parent));
          _push(`</button></div><!--]-->`);
        }
        if (showRating.value) {
          _push(`<div class="absolute inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-center justify-center" data-v-7f2e8944><div class="bg-white p-8 rounded-3xl m-4 w-full flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300" data-v-7f2e8944><div class="w-16 h-16 bg-[#075E54]/10 rounded-full flex items-center justify-center mb-6" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:star",
            size: "32",
            class: "text-[#075E54]"
          }, null, _parent));
          _push(`</div><h3 class="text-xl font-black text-slate-800 tracking-tight mb-2" data-v-7f2e8944>Rate Your Session</h3><p class="text-sm font-bold text-slate-400 mb-8" data-v-7f2e8944>How was the support quality?</p><div class="flex gap-2 mb-8" data-v-7f2e8944><!--[-->`);
          ssrRenderList(5, (star) => {
            _push(`<button class="text-4xl text-slate-300 hover:text-yellow-400 hover:scale-110 transition-all focus:text-yellow-400" data-v-7f2e8944>★</button>`);
          });
          _push(`<!--]--></div><button class="text-[10px] font-black text-slate-400 hover:text-slate-600 underline" data-v-7f2e8944>Skip &amp; Close</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showIdleWarning.value) {
          _push(`<div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-[150] flex items-center justify-center" data-v-7f2e8944><div class="bg-white p-6 rounded-3xl m-6 w-full text-center shadow-2xl" data-v-7f2e8944><div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4" data-v-7f2e8944>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:clock-4",
            size: "24",
            class: "text-amber-500"
          }, null, _parent));
          _push(`</div><h4 class="text-lg font-black text-slate-800 mb-2" data-v-7f2e8944>Are you still there?</h4><p class="text-[11px] font-bold text-slate-500 mb-6" data-v-7f2e8944>Your session is inactive.</p><div class="flex gap-3" data-v-7f2e8944><button class="flex-1 py-3 bg-[#075E54] text-white rounded-xl text-[10px] font-black tracking-[0.2em] hover:bg-[#128C7E] transition-all" data-v-7f2e8944>Continue</button><button class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black tracking-[0.2em] hover:bg-slate-200 transition-all" data-v-7f2e8944>Logout</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AIChatWidget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-7f2e8944"]]), { __name: "AIChatWidget" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      const _component_AIChatWidget = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col font-sans bg-slate-50 relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="flex-grow relative z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_AIChatWidget, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CEarBHkH.mjs.map
