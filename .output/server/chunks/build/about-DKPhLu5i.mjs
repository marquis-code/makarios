import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import { mergeProps, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useGetExcos } from './useGetExcos-BjB5F6QN.mjs';
import { _ as _export_sfc } from './server.mjs';
import { F as FlaskConical } from './flask-conical-DU3PU25S.mjs';
import { A as ArrowRight } from './arrow-right-Dfz0Bb1c.mjs';
import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { S as ShieldCheck } from './shield-check-C8vFK0lK.mjs';
import { M as Microscope } from './microscope-NIYICTiO.mjs';
import { G as Globe } from './globe-CEE0QZpa.mjs';
import { U as Users } from './users-D6INsix-.mjs';
import { U as User } from './user-MjtyRiwp.mjs';
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

const Eye = createLucideIcon("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Target = createLucideIcon("target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const _imports_0 = "" + __buildAssetsURL("hero1.BgpKtN_2.jpg");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, excos } = useGetExcos();
    const values = [
      {
        title: "Integrity",
        desc: "Highest standards of scientific honesty and ethical laboratory practice in every diagnostic discipline.",
        icon: ShieldCheck
      },
      {
        title: "Innovation",
        desc: "Embracing digital pathology, AI-driven diagnostics, and molecular diagnostic breakthroughs at the frontier.",
        icon: Microscope
      },
      {
        title: "Collaboration",
        desc: "Partnering with international scientific bodies and institutions for knowledge exchange and shared progress.",
        icon: Globe
      }
    ];
    const valueColors = [
      { bg: "bg-blue-50", icon: "text-[#1d4e89]" },
      { bg: "bg-green-50", icon: "text-green-700" },
      { bg: "bg-teal-50", icon: "text-teal-700" }
    ];
    const stats = [
      { value: "1,200", label: "Qualified scientists" },
      { value: "82", label: "Scientific events" },
      { value: "450", label: "Lab networks" },
      { value: "45", label: "Awards issued" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-body" }, _attrs))} data-v-dc98332f><section class="bg-white border-b border-slate-100" data-v-dc98332f><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pb-28" data-v-dc98332f><div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-dc98332f><div data-v-dc98332f><div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100" data-v-dc98332f>`);
      _push(ssrRenderComponent(unref(FlaskConical), { size: 13 }, null, _parent));
      _push(` Our Identity </div><h1 class="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6" data-v-dc98332f> Instituting Excellence in <span class="text-[#1d4e89]" data-v-dc98332f> Cellular Pathology Science.</span></h1><p class="text-[16px] text-slate-500 leading-relaxed max-w-[520px] mb-10" data-v-dc98332f> The Society for Cellular Pathology Scientists of Nigeria (SCPSC) is the professional body for medical laboratory scientists specialized in the field of histopathology and cytopathology. </p><div class="flex flex-wrap gap-3" data-v-dc98332f>`);
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
        to: "/conferences",
        class: "inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our conferences `);
          } else {
            return [
              createTextVNode(" Our conferences ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative hidden lg:block" data-v-dc98332f><div class="rounded-3xl overflow-hidden aspect-[4/3] bg-blue-50 relative shadow-sm border border-slate-100" data-v-dc98332f><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover" alt="Lab Work" data-v-dc98332f><div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" data-v-dc98332f></div></div><div class="absolute -bottom-5 -left-6 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-md" data-v-dc98332f><div class="text-2xl font-bold text-[#1d4e89]" data-v-dc98332f>1,200+</div><div class="text-[11px] text-slate-400 font-medium mt-0.5" data-v-dc98332f>Qualified scientists</div></div><div class="absolute -top-5 -right-6 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-md" data-v-dc98332f><div class="text-2xl font-bold text-[#1d4e89]" data-v-dc98332f>82+</div><div class="text-[11px] text-slate-400 font-medium mt-0.5" data-v-dc98332f>Scientific events</div></div></div></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-dc98332f><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-dc98332f><div class="grid lg:grid-cols-2 gap-6" data-v-dc98332f><div class="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden group" data-v-dc98332f>`);
      _push(ssrRenderComponent(unref(Eye), {
        size: 120,
        class: "absolute -right-6 -bottom-6 opacity-[0.04] text-blue-800 pointer-events-none"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6" data-v-dc98332f>`);
      _push(ssrRenderComponent(unref(Eye), {
        size: 20,
        class: "text-[#1d4e89]"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-3" data-v-dc98332f>Our Vision</p><h3 class="text-[20px] font-bold text-slate-800 mb-4 leading-snug" data-v-dc98332f> A world-class cellular pathology body </h3><p class="text-[14px] text-slate-500 leading-relaxed" data-v-dc98332f> To become a world-class professional body providing cutting-edge cellular pathology services through innovation, research, and standardization of laboratory practices in Nigeria and the West African sub-region. </p></div><div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-8 lg:p-10 relative overflow-hidden group" data-v-dc98332f>`);
      _push(ssrRenderComponent(unref(Target), {
        size: 120,
        class: "absolute -right-6 -bottom-6 opacity-[0.06] text-white pointer-events-none"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6" data-v-dc98332f>`);
      _push(ssrRenderComponent(unref(Target), {
        size: 20,
        class: "text-white"
      }, null, _parent));
      _push(`</div><p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-3" data-v-dc98332f>Our Mission</p><h3 class="text-[20px] font-bold text-white mb-4 leading-snug" data-v-dc98332f> Advancing cellular diagnosis globally </h3><p class="text-[14px] text-blue-200 leading-relaxed" data-v-dc98332f> Advancing the frontiers of cellular diagnosis and therapeutic laboratory science through training, advocacy, and collaboration with global stakeholders for improved patient care. </p></div></div></div></section><section class="bg-white border-b border-slate-100" data-v-dc98332f><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-dc98332f><div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12" data-v-dc98332f><div data-v-dc98332f><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-dc98332f>What drives us</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight max-w-xl" data-v-dc98332f> Core values that define our work </h2></div><p class="text-[15px] text-slate-500 leading-relaxed max-w-md" data-v-dc98332f> The principles that guide every decision, research initiative, and collaboration we undertake as a society. </p></div><div class="grid sm:grid-cols-3 gap-5" data-v-dc98332f><!--[-->`);
      ssrRenderList(values, (val, i) => {
        _push(`<div class="border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group relative overflow-hidden" data-v-dc98332f>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(val.icon), {
          size: 120,
          class: "absolute -right-6 -bottom-6 opacity-[0.04] text-blue-800 pointer-events-none"
        }, null), _parent);
        _push(`<div class="${ssrRenderClass([valueColors[i % valueColors.length].bg, "w-10 h-10 rounded-xl flex items-center justify-center mb-5"])}" data-v-dc98332f>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(val.icon), {
          size: 20,
          class: valueColors[i % valueColors.length].icon
        }, null), _parent);
        _push(`</div><h3 class="text-[16px] font-semibold text-slate-800 mb-3" data-v-dc98332f>${ssrInterpolate(val.title)}</h3><p class="text-[13px] text-slate-500 leading-relaxed" data-v-dc98332f>${ssrInterpolate(val.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-[#1d4e89]" data-v-dc98332f><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" data-v-dc98332f><div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-v-dc98332f><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div data-v-dc98332f><div class="text-4xl sm:text-5xl font-bold text-white mb-1" data-v-dc98332f>${ssrInterpolate(stat.value)}<span class="text-blue-300" data-v-dc98332f>+</span></div><div class="text-[12px] text-blue-200 font-medium tracking-wide uppercase" data-v-dc98332f>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 border-b border-slate-100" data-v-dc98332f><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-v-dc98332f><div class="text-center mb-12" data-v-dc98332f><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2" data-v-dc98332f>Our Leadership</p><h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3" data-v-dc98332f> Meet Our Executives </h2><p class="text-[15px] text-slate-500 max-w-md mx-auto" data-v-dc98332f> The dedicated professionals steering SCPSC toward scientific excellence and global impact. </p></div>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-16" data-v-dc98332f><div class="w-8 h-8 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" data-v-dc98332f></div></div>`);
      } else if (unref(excos).length === 0) {
        _push(`<div class="text-center py-16" data-v-dc98332f><div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4" data-v-dc98332f>`);
        _push(ssrRenderComponent(unref(Users), {
          size: 24,
          class: "text-blue-300"
        }, null, _parent));
        _push(`</div><p class="text-[15px] font-semibold text-slate-700 mb-1" data-v-dc98332f>No executives found</p><p class="text-[13px] text-slate-400" data-v-dc98332f>The leadership board is being finalized. Check back soon.</p></div>`);
      } else {
        _push(`<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-v-dc98332f><!--[-->`);
        ssrRenderList(unref(excos), (exco) => {
          _push(`<div class="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-md hover:border-blue-200 transition-all duration-300" data-v-dc98332f><div class="aspect-[4/3] relative overflow-hidden bg-blue-50" data-v-dc98332f>`);
          if (exco.profilePicture) {
            _push(`<img${ssrRenderAttr("src", exco.profilePicture)}${ssrRenderAttr("alt", exco.name)} class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" data-v-dc98332f>`);
          } else {
            _push(`<div class="w-full h-full flex items-center justify-center" data-v-dc98332f><div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center" data-v-dc98332f>`);
            _push(ssrRenderComponent(unref(User), {
              size: 28,
              class: "text-blue-300"
            }, null, _parent));
            _push(`</div></div>`);
          }
          _push(`</div><div class="p-5" data-v-dc98332f><p class="text-[11px] text-blue-600 font-semibold tracking-wider uppercase mb-1" data-v-dc98332f>${ssrInterpolate(exco.position || "Executive Member")}</p><h3 class="text-[15px] font-semibold text-slate-800 leading-snug mb-2" data-v-dc98332f>${ssrInterpolate(exco.name)}</h3>`);
          if (exco.bio) {
            _push(`<p class="text-[12px] text-slate-400 leading-relaxed line-clamp-2" data-v-dc98332f>${ssrInterpolate(exco.bio)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section><section class="bg-white" data-v-dc98332f><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center" data-v-dc98332f><div class="max-w-2xl mx-auto" data-v-dc98332f><p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-4" data-v-dc98332f>Get started</p><h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5" data-v-dc98332f> Ready to be part of something bigger? </h2><p class="text-[16px] text-slate-500 leading-relaxed mb-9" data-v-dc98332f> Join over 1,200 scientists building the future of cellular pathology in Nigeria. </p><div class="flex flex-wrap gap-3 justify-center" data-v-dc98332f>`);
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
        to: "/contact",
        class: "inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get in touch `);
          } else {
            return [
              createTextVNode(" Get in touch ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc98332f"]]);

export { about as default };
//# sourceMappingURL=about-DKPhLu5i.mjs.map
