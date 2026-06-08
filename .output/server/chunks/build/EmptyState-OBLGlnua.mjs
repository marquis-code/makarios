import { _ as __nuxt_component_0 } from './nuxt-link-DDeWRX1V.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { I as Inbox } from './inbox-BgA8mAs9.mjs';
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
import './server.mjs';
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
import './createLucideIcon-toOOggq-.mjs';

const _sfc_main = {
  __name: "EmptyState",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "No Content Found"
    },
    message: {
      type: String,
      default: "Check back later for recent scientific updates and archives."
    },
    action: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-100" }, _attrs))}><div class="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-6">`);
      _push(ssrRenderComponent(unref(Inbox), {
        size: 40,
        "stroke-width": "1"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-black text-brand-blue mb-2">${ssrInterpolate(__props.title)}</h3><p class="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium text-base">${ssrInterpolate(__props.message)}</p>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (__props.action) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.action.to,
            class: "btn-premium px-8 py-3 text-[10px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.action.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.action.label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/EmptyState.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EmptyState-OBLGlnua.mjs.map
