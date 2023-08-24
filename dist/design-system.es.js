import Wo, { useRef as tr, useState as Dr, useCallback as dc, useEffect as hg, Fragment as CN, useDebugValue as TN } from "react";
import _i from "moment";
function xN(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var SE = { exports: {} }, Uh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BT;
function bN() {
  if (BT)
    return Uh;
  BT = 1;
  var i = Wo, u = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(D, b, R) {
    var z, N = {}, W = null, $ = null;
    R !== void 0 && (W = "" + R), b.key !== void 0 && (W = "" + b.key), b.ref !== void 0 && ($ = b.ref);
    for (z in b)
      p.call(b, z) && !E.hasOwnProperty(z) && (N[z] = b[z]);
    if (D && D.defaultProps)
      for (z in b = D.defaultProps, b)
        N[z] === void 0 && (N[z] = b[z]);
    return { $$typeof: u, type: D, key: W, ref: $, props: N, _owner: m.current };
  }
  return Uh.Fragment = c, Uh.jsx = g, Uh.jsxs = g, Uh;
}
var zh = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WT;
function RN() {
  return WT || (WT = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Wo, u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), D = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Y = Symbol.iterator, ne = "@@iterator";
    function ke(k) {
      if (k === null || typeof k != "object")
        return null;
      var ee = Y && k[Y] || k[ne];
      return typeof ee == "function" ? ee : null;
    }
    var Te = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ae(k) {
      {
        for (var ee = arguments.length, ve = new Array(ee > 1 ? ee - 1 : 0), Fe = 1; Fe < ee; Fe++)
          ve[Fe - 1] = arguments[Fe];
        ie("error", k, ve);
      }
    }
    function ie(k, ee, ve) {
      {
        var Fe = Te.ReactDebugCurrentFrame, nt = Fe.getStackAddendum();
        nt !== "" && (ee += "%s", ve = ve.concat([nt]));
        var mt = ve.map(function(rt) {
          return String(rt);
        });
        mt.unshift("Warning: " + ee), Function.prototype.apply.call(console[k], console, mt);
      }
    }
    var fe = !1, se = !1, J = !1, oe = !1, Qe = !1, at;
    at = Symbol.for("react.module.reference");
    function Ke(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === p || k === E || Qe || k === m || k === R || k === z || oe || k === $ || fe || se || J || typeof k == "object" && k !== null && (k.$$typeof === W || k.$$typeof === N || k.$$typeof === g || k.$$typeof === D || k.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === at || k.getModuleId !== void 0));
    }
    function ut(k, ee, ve) {
      var Fe = k.displayName;
      if (Fe)
        return Fe;
      var nt = ee.displayName || ee.name || "";
      return nt !== "" ? ve + "(" + nt + ")" : ve;
    }
    function kt(k) {
      return k.displayName || "Context";
    }
    function Ie(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && ae("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case E:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case D:
            var ee = k;
            return kt(ee) + ".Consumer";
          case g:
            var ve = k;
            return kt(ve._context) + ".Provider";
          case b:
            return ut(k, k.render, "ForwardRef");
          case N:
            var Fe = k.displayName || null;
            return Fe !== null ? Fe : Ie(k.type) || "Memo";
          case W: {
            var nt = k, mt = nt._payload, rt = nt._init;
            try {
              return Ie(rt(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, Xt = 0, Mt, _n, ce, je, Ee, gt, Ct;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function vr() {
      {
        if (Xt === 0) {
          Mt = console.log, _n = console.info, ce = console.warn, je = console.error, Ee = console.group, gt = console.groupCollapsed, Ct = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        Xt++;
      }
    }
    function ni() {
      {
        if (Xt--, Xt === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, k, {
              value: Mt
            }),
            info: tt({}, k, {
              value: _n
            }),
            warn: tt({}, k, {
              value: ce
            }),
            error: tt({}, k, {
              value: je
            }),
            group: tt({}, k, {
              value: Ee
            }),
            groupCollapsed: tt({}, k, {
              value: gt
            }),
            groupEnd: tt({}, k, {
              value: Ct
            })
          });
        }
        Xt < 0 && ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wn = Te.ReactCurrentDispatcher, da;
    function rr(k, ee, ve) {
      {
        if (da === void 0)
          try {
            throw Error();
          } catch (nt) {
            var Fe = nt.stack.trim().match(/\n( *(at )?)/);
            da = Fe && Fe[1] || "";
          }
        return `
` + da + k;
      }
    }
    var kr = !1, ri;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      ri = new Mr();
    }
    function pa(k, ee) {
      if (!k || kr)
        return "";
      {
        var ve = ri.get(k);
        if (ve !== void 0)
          return ve;
      }
      var Fe;
      kr = !0;
      var nt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = wn.current, wn.current = null, vr();
      try {
        if (ee) {
          var rt = function() {
            throw Error();
          };
          if (Object.defineProperty(rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(rt, []);
            } catch (St) {
              Fe = St;
            }
            Reflect.construct(k, [], rt);
          } else {
            try {
              rt.call();
            } catch (St) {
              Fe = St;
            }
            k.call(rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            Fe = St;
          }
          k();
        }
      } catch (St) {
        if (St && Fe && typeof St.stack == "string") {
          for (var Pe = St.stack.split(`
`), Ln = Fe.stack.split(`
`), Qt = Pe.length - 1, qt = Ln.length - 1; Qt >= 1 && qt >= 0 && Pe[Qt] !== Ln[qt]; )
            qt--;
          for (; Qt >= 1 && qt >= 0; Qt--, qt--)
            if (Pe[Qt] !== Ln[qt]) {
              if (Qt !== 1 || qt !== 1)
                do
                  if (Qt--, qt--, qt < 0 || Pe[Qt] !== Ln[qt]) {
                    var mr = `
` + Pe[Qt].replace(" at new ", " at ");
                    return k.displayName && mr.includes("<anonymous>") && (mr = mr.replace("<anonymous>", k.displayName)), typeof k == "function" && ri.set(k, mr), mr;
                  }
                while (Qt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        kr = !1, wn.current = mt, ni(), Error.prepareStackTrace = nt;
      }
      var ol = k ? k.displayName || k.name : "", mc = ol ? rr(ol) : "";
      return typeof k == "function" && ri.set(k, mc), mc;
    }
    function On(k, ee, ve) {
      return pa(k, !1);
    }
    function ar(k) {
      var ee = k.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function In(k, ee, ve) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return pa(k, ar(k));
      if (typeof k == "string")
        return rr(k);
      switch (k) {
        case R:
          return rr("Suspense");
        case z:
          return rr("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case b:
            return On(k.render);
          case N:
            return In(k.type, ee, ve);
          case W: {
            var Fe = k, nt = Fe._payload, mt = Fe._init;
            try {
              return In(mt(nt), ee, ve);
            } catch {
            }
          }
        }
      return "";
    }
    var ir = Object.prototype.hasOwnProperty, lr = {}, ha = Te.ReactDebugCurrentFrame;
    function Fa(k) {
      if (k) {
        var ee = k._owner, ve = In(k.type, k._source, ee ? ee.type : null);
        ha.setExtraStackFrame(ve);
      } else
        ha.setExtraStackFrame(null);
    }
    function xi(k, ee, ve, Fe, nt) {
      {
        var mt = Function.call.bind(ir);
        for (var rt in k)
          if (mt(k, rt)) {
            var Pe = void 0;
            try {
              if (typeof k[rt] != "function") {
                var Ln = Error((Fe || "React class") + ": " + ve + " type `" + rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Pe = k[rt](ee, rt, Fe, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              Pe = Qt;
            }
            Pe && !(Pe instanceof Error) && (Fa(nt), ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", ve, rt, typeof Pe), Fa(null)), Pe instanceof Error && !(Pe.message in lr) && (lr[Pe.message] = !0, Fa(nt), ae("Failed %s type: %s", ve, Pe.message), Fa(null));
          }
      }
    }
    var ai = Array.isArray;
    function Ha(k) {
      return ai(k);
    }
    function qr(k) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, ve = ee && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return ve;
      }
    }
    function ii(k) {
      try {
        return Zr(k), !1;
      } catch {
        return !0;
      }
    }
    function Zr(k) {
      return "" + k;
    }
    function Ya(k) {
      if (ii(k))
        return ae("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(k)), Zr(k);
    }
    var vn = Te.ReactCurrentOwner, Kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, al, Pa, he;
    he = {};
    function Ue(k) {
      if (ir.call(k, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function it(k) {
      if (ir.call(k, "key")) {
        var ee = Object.getOwnPropertyDescriptor(k, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Ot(k, ee) {
      if (typeof k.ref == "string" && vn.current && ee && vn.current.stateNode !== ee) {
        var ve = Ie(vn.current.type);
        he[ve] || (ae('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(vn.current.type), k.ref), he[ve] = !0);
      }
    }
    function Jt(k, ee) {
      {
        var ve = function() {
          al || (al = !0, ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ve.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: ve,
          configurable: !0
        });
      }
    }
    function Nn(k, ee) {
      {
        var ve = function() {
          Pa || (Pa = !0, ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ve.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: ve,
          configurable: !0
        });
      }
    }
    var fn = function(k, ee, ve, Fe, nt, mt, rt) {
      var Pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: k,
        key: ee,
        ref: ve,
        props: rt,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(Pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: nt
      }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
    };
    function Or(k, ee, ve, Fe, nt) {
      {
        var mt, rt = {}, Pe = null, Ln = null;
        ve !== void 0 && (Ya(ve), Pe = "" + ve), it(ee) && (Ya(ee.key), Pe = "" + ee.key), Ue(ee) && (Ln = ee.ref, Ot(ee, nt));
        for (mt in ee)
          ir.call(ee, mt) && !Kr.hasOwnProperty(mt) && (rt[mt] = ee[mt]);
        if (k && k.defaultProps) {
          var Qt = k.defaultProps;
          for (mt in Qt)
            rt[mt] === void 0 && (rt[mt] = Qt[mt]);
        }
        if (Pe || Ln) {
          var qt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          Pe && Jt(rt, qt), Ln && Nn(rt, qt);
        }
        return fn(k, Pe, Ln, nt, Fe, vn.current, rt);
      }
    }
    var Yt = Te.ReactCurrentOwner, Xr = Te.ReactDebugCurrentFrame;
    function At(k) {
      if (k) {
        var ee = k._owner, ve = In(k.type, k._source, ee ? ee.type : null);
        Xr.setExtraStackFrame(ve);
      } else
        Xr.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Qo(k) {
      return typeof k == "object" && k !== null && k.$$typeof === u;
    }
    function $l() {
      {
        if (Yt.current) {
          var k = Ie(Yt.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function qo(k) {
      {
        if (k !== void 0) {
          var ee = k.fileName.replace(/^.*[\\\/]/, ""), ve = k.lineNumber;
          return `

Check your code at ` + ee + ":" + ve + ".";
        }
        return "";
      }
    }
    var es = {};
    function vc(k) {
      {
        var ee = $l();
        if (!ee) {
          var ve = typeof k == "string" ? k : k.displayName || k.name;
          ve && (ee = `

Check the top-level render call using <` + ve + ">.");
        }
        return ee;
      }
    }
    function Gl(k, ee) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var ve = vc(ee);
        if (es[ve])
          return;
        es[ve] = !0;
        var Fe = "";
        k && k._owner && k._owner !== Yt.current && (Fe = " It was passed a child from " + Ie(k._owner.type) + "."), At(k), ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, Fe), At(null);
      }
    }
    function Zo(k, ee) {
      {
        if (typeof k != "object")
          return;
        if (Ha(k))
          for (var ve = 0; ve < k.length; ve++) {
            var Fe = k[ve];
            Qo(Fe) && Gl(Fe, ee);
          }
        else if (Qo(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var nt = ke(k);
          if (typeof nt == "function" && nt !== k.entries)
            for (var mt = nt.call(k), rt; !(rt = mt.next()).done; )
              Qo(rt.value) && Gl(rt.value, ee);
        }
      }
    }
    function Ql(k) {
      {
        var ee = k.type;
        if (ee == null || typeof ee == "string")
          return;
        var ve;
        if (typeof ee == "function")
          ve = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === N))
          ve = ee.propTypes;
        else
          return;
        if (ve) {
          var Fe = Ie(ee);
          xi(ve, k.props, "prop", Fe, k);
        } else if (ee.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var nt = Ie(ee);
          ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", nt || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ko(k) {
      {
        for (var ee = Object.keys(k.props), ve = 0; ve < ee.length; ve++) {
          var Fe = ee[ve];
          if (Fe !== "children" && Fe !== "key") {
            At(k), ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), At(null);
            break;
          }
        }
        k.ref !== null && (At(k), ae("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function li(k, ee, ve, Fe, nt, mt) {
      {
        var rt = Ke(k);
        if (!rt) {
          var Pe = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = qo(nt);
          Ln ? Pe += Ln : Pe += $l();
          var Qt;
          k === null ? Qt = "null" : Ha(k) ? Qt = "array" : k !== void 0 && k.$$typeof === u ? (Qt = "<" + (Ie(k.type) || "Unknown") + " />", Pe = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof k, ae("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, Pe);
        }
        var qt = Or(k, ee, ve, nt, mt);
        if (qt == null)
          return qt;
        if (rt) {
          var mr = ee.children;
          if (mr !== void 0)
            if (Fe)
              if (Ha(mr)) {
                for (var ol = 0; ol < mr.length; ol++)
                  Zo(mr[ol], k);
                Object.freeze && Object.freeze(mr);
              } else
                ae("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zo(mr, k);
        }
        return k === p ? Ko(qt) : Ql(qt), qt;
      }
    }
    function il(k, ee, ve) {
      return li(k, ee, ve, !0);
    }
    function Jr(k, ee, ve) {
      return li(k, ee, ve, !1);
    }
    var Va = Jr, ll = il;
    zh.Fragment = p, zh.jsx = Va, zh.jsxs = ll;
  }()), zh;
}
process.env.NODE_ENV === "production" ? SE.exports = bN() : SE.exports = RN();
var P = SE.exports;
function DN(i, u = 300) {
  let c;
  return function(...p) {
    clearTimeout(c), c = setTimeout(() => {
      i.apply(this, p);
    }, u);
  };
}
const lE = (i, u, c, p = !1) => {
  var g, D, b, R;
  const m = i.clientWidth, E = i.clientHeight;
  if ((g = u.current) == null || g.setAttribute("viewBox", `0 0 ${m} ${E}`), (D = u.current) == null || D.setAttribute("width", String(m)), !p) {
    (b = u.current) == null || b.setAttribute("height", String(E)), c({
      height: E,
      width: m
    });
    return;
  }
  (R = u.current) == null || R.setAttribute("height", String(E)), c((z) => ({
    ...z,
    width: m
  }));
}, Cj = ({
  type: i,
  width: u,
  height: c,
  hide: p,
  data: m,
  children: E,
  snap: g = !1
}) => {
  const D = tr(null), [b, R] = Dr({
    width: u ?? 0,
    height: c ?? 0
  }), z = tr(null), N = tr(null), W = dc(() => p ? [...m].filter((Y) => (p.forEach((ne) => delete Y[ne]), Y)) : m, [p, m]);
  console.log(b), hg(() => {
    var ne;
    const Y = (ne = D == null ? void 0 : D.current) == null ? void 0 : ne.parentNode;
    return window == null || window.addEventListener(
      "resize",
      DN(
        () => lE(Y, D, R, c !== void 0)
      )
    ), (!u || !c) && lE(Y, D, R, c !== void 0), () => Y == null ? void 0 : Y.removeEventListener(
      "resize",
      () => lE(Y, D, () => {
      }, c !== void 0)
    );
  }, [R, u, c]);
  const $ = Math.max(
    ...m.map((Y) => Math.max(...Object.values(Y)))
  );
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        ref: z,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ P.jsxs(
      "svg",
      {
        ref: D,
        className: `chart ${i}`,
        viewBox: `0 0 ${u ?? 0} ${c ?? 0}`,
        width: b.width,
        height: b.height,
        onMouseMove: (Y) => {
          if (N.current && D.current && z.current) {
            const ne = N.current.style, ke = Y.clientX, Te = D.current.getBoundingClientRect().left, ae = D.current.getBoundingClientRect().top;
            if (ne.opacity = "1", g) {
              const oe = b.width / (m.length * 4), Qe = Array.from({
                length: m.length
              }).map((ut, kt) => Math.abs(
                ke - Te - oe * kt - b.width / m.length * kt
              )), at = Qe.indexOf(
                Math.min(...Qe)
              ), Ke = b.width / m.length * at + oe * at;
              ne.transform = `translate(${Ke}px, 0px)`;
            } else
              ne.transform = `translate(${Y.clientX - Te}px, 0px)`, ne.transition = "none";
            if (z.current.innerHTML === "") {
              z.current.style.opacity = "0";
              return;
            }
            const ie = Y.clientX - Te, fe = z.current.clientWidth;
            z.current.style.opacity = "1";
            let se = ie + 20;
            const J = Y.clientY - ae + 20;
            z.current.offsetLeft + ie + fe + 20 > window.innerWidth && (se = ie - fe - 20), z.current.style.transform = `translate(${se}px, ${J}px)`;
          }
        },
        onMouseLeave: () => {
          z.current && N.current && (z.current.innerHTML = "", z.current.style.opacity = "0", N.current.style.opacity = "0");
        },
        children: [
          E({
            currentSize: b,
            tooltipRef: z,
            data: W(),
            maxItemValue: $,
            lineRef: N
          }),
          /* @__PURE__ */ P.jsx(
            "line",
            {
              ref: N,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: c,
              strokeDasharray: 8,
              style: { stroke: "#ded", strokeWidth: "2px" }
            }
          )
        ]
      }
    )
  ] });
};
var Ju = Wo;
const Hh = /^[a-z0-9]+(-[a-z0-9]+)*$/, vg = (i, u, c, p = "") => {
  const m = i.split(":");
  if (i.slice(0, 1) === "@") {
    if (m.length < 2 || m.length > 3)
      return null;
    p = m.shift().slice(1);
  }
  if (m.length > 3 || !m.length)
    return null;
  if (m.length > 1) {
    const D = m.pop(), b = m.pop(), R = {
      // Allow provider without '@': "provider:prefix:name"
      provider: m.length > 0 ? m[0] : p,
      prefix: b,
      name: D
    };
    return u && !ng(R) ? null : R;
  }
  const E = m[0], g = E.split("-");
  if (g.length > 1) {
    const D = {
      provider: p,
      prefix: g.shift(),
      name: g.join("-")
    };
    return u && !ng(D) ? null : D;
  }
  if (c && p === "") {
    const D = {
      provider: p,
      prefix: "",
      name: E
    };
    return u && !ng(D, c) ? null : D;
  }
  return null;
}, ng = (i, u) => i ? !!((i.provider === "" || i.provider.match(Hh)) && (u && i.prefix === "" || i.prefix.match(Hh)) && i.name.match(Hh)) : !1, Tx = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), og = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), AE = Object.freeze({
  ...Tx,
  ...og
}), EE = Object.freeze({
  ...AE,
  body: "",
  hidden: !1
});
function kN(i, u) {
  const c = {};
  !i.hFlip != !u.hFlip && (c.hFlip = !0), !i.vFlip != !u.vFlip && (c.vFlip = !0);
  const p = ((i.rotate || 0) + (u.rotate || 0)) % 4;
  return p && (c.rotate = p), c;
}
function $T(i, u) {
  const c = kN(i, u);
  for (const p in EE)
    p in og ? p in i && !(p in c) && (c[p] = og[p]) : p in u ? c[p] = u[p] : p in i && (c[p] = i[p]);
  return c;
}
function MN(i, u) {
  const c = i.icons, p = i.aliases || /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function E(g) {
    if (c[g])
      return m[g] = [];
    if (!(g in m)) {
      m[g] = null;
      const D = p[g] && p[g].parent, b = D && E(D);
      b && (m[g] = [D].concat(b));
    }
    return m[g];
  }
  return (u || Object.keys(c).concat(Object.keys(p))).forEach(E), m;
}
function ON(i, u, c) {
  const p = i.icons, m = i.aliases || /* @__PURE__ */ Object.create(null);
  let E = {};
  function g(D) {
    E = $T(
      p[D] || m[D],
      E
    );
  }
  return g(u), c.forEach(g), $T(i, E);
}
function xx(i, u) {
  const c = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return c;
  i.not_found instanceof Array && i.not_found.forEach((m) => {
    u(m, null), c.push(m);
  });
  const p = MN(i);
  for (const m in p) {
    const E = p[m];
    E && (u(m, ON(i, m, E)), c.push(m));
  }
  return c;
}
const NN = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Tx
};
function oE(i, u) {
  for (const c in u)
    if (c in i && typeof i[c] != typeof u[c])
      return !1;
  return !0;
}
function bx(i) {
  if (typeof i != "object" || i === null)
    return null;
  const u = i;
  if (typeof u.prefix != "string" || !i.icons || typeof i.icons != "object" || !oE(i, NN))
    return null;
  const c = u.icons;
  for (const m in c) {
    const E = c[m];
    if (!m.match(Hh) || typeof E.body != "string" || !oE(
      E,
      EE
    ))
      return null;
  }
  const p = u.aliases || /* @__PURE__ */ Object.create(null);
  for (const m in p) {
    const E = p[m], g = E.parent;
    if (!m.match(Hh) || typeof g != "string" || !c[g] && !p[g] || !oE(
      E,
      EE
    ))
      return null;
  }
  return u;
}
const GT = /* @__PURE__ */ Object.create(null);
function LN(i, u) {
  return {
    provider: i,
    prefix: u,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pc(i, u) {
  const c = GT[i] || (GT[i] = /* @__PURE__ */ Object.create(null));
  return c[u] || (c[u] = LN(i, u));
}
function jE(i, u) {
  return bx(u) ? xx(u, (c, p) => {
    p ? i.icons[c] = p : i.missing.add(c);
  }) : [];
}
function UN(i, u, c) {
  try {
    if (typeof c.body == "string")
      return i.icons[u] = { ...c }, !0;
  } catch {
  }
  return !1;
}
let Ih = !1;
function Rx(i) {
  return typeof i == "boolean" && (Ih = i), Ih;
}
function zN(i) {
  const u = typeof i == "string" ? vg(i, !0, Ih) : i;
  if (u) {
    const c = pc(u.provider, u.prefix), p = u.name;
    return c.icons[p] || (c.missing.has(p) ? null : void 0);
  }
}
function AN(i, u) {
  const c = vg(i, !0, Ih);
  if (!c)
    return !1;
  const p = pc(c.provider, c.prefix);
  return UN(p, c.name, u);
}
function jN(i, u) {
  if (typeof i != "object")
    return !1;
  if (typeof u != "string" && (u = i.provider || ""), Ih && !u && !i.prefix) {
    let m = !1;
    return bx(i) && (i.prefix = "", xx(i, (E, g) => {
      g && AN(E, g) && (m = !0);
    })), m;
  }
  const c = i.prefix;
  if (!ng({
    provider: u,
    prefix: c,
    name: "a"
  }))
    return !1;
  const p = pc(u, c);
  return !!jE(p, i);
}
const Dx = Object.freeze({
  width: null,
  height: null
}), kx = Object.freeze({
  // Dimensions
  ...Dx,
  // Transformations
  ...og
}), FN = /(-?[0-9.]*[0-9]+[0-9.]*)/g, HN = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function QT(i, u, c) {
  if (u === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * u * c) / c;
  if (typeof i != "string")
    return i;
  const p = i.split(FN);
  if (p === null || !p.length)
    return i;
  const m = [];
  let E = p.shift(), g = HN.test(E);
  for (; ; ) {
    if (g) {
      const D = parseFloat(E);
      isNaN(D) ? m.push(E) : m.push(Math.ceil(D * u * c) / c);
    } else
      m.push(E);
    if (E = p.shift(), E === void 0)
      return m.join("");
    g = !g;
  }
}
const YN = (i) => i === "unset" || i === "undefined" || i === "none";
function PN(i, u) {
  const c = {
    ...AE,
    ...i
  }, p = {
    ...kx,
    ...u
  }, m = {
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height
  };
  let E = c.body;
  [c, p].forEach((Y) => {
    const ne = [], ke = Y.hFlip, Te = Y.vFlip;
    let ae = Y.rotate;
    ke ? Te ? ae += 2 : (ne.push(
      "translate(" + (m.width + m.left).toString() + " " + (0 - m.top).toString() + ")"
    ), ne.push("scale(-1 1)"), m.top = m.left = 0) : Te && (ne.push(
      "translate(" + (0 - m.left).toString() + " " + (m.height + m.top).toString() + ")"
    ), ne.push("scale(1 -1)"), m.top = m.left = 0);
    let ie;
    switch (ae < 0 && (ae -= Math.floor(ae / 4) * 4), ae = ae % 4, ae) {
      case 1:
        ie = m.height / 2 + m.top, ne.unshift(
          "rotate(90 " + ie.toString() + " " + ie.toString() + ")"
        );
        break;
      case 2:
        ne.unshift(
          "rotate(180 " + (m.width / 2 + m.left).toString() + " " + (m.height / 2 + m.top).toString() + ")"
        );
        break;
      case 3:
        ie = m.width / 2 + m.left, ne.unshift(
          "rotate(-90 " + ie.toString() + " " + ie.toString() + ")"
        );
        break;
    }
    ae % 2 === 1 && (m.left !== m.top && (ie = m.left, m.left = m.top, m.top = ie), m.width !== m.height && (ie = m.width, m.width = m.height, m.height = ie)), ne.length && (E = '<g transform="' + ne.join(" ") + '">' + E + "</g>");
  });
  const g = p.width, D = p.height, b = m.width, R = m.height;
  let z, N;
  g === null ? (N = D === null ? "1em" : D === "auto" ? R : D, z = QT(N, b / R)) : (z = g === "auto" ? b : g, N = D === null ? QT(z, R / b) : D === "auto" ? R : D);
  const W = {}, $ = (Y, ne) => {
    YN(ne) || (W[Y] = ne.toString());
  };
  return $("width", z), $("height", N), W.viewBox = m.left.toString() + " " + m.top.toString() + " " + b.toString() + " " + R.toString(), {
    attributes: W,
    body: E
  };
}
const VN = /\sid="(\S+)"/g, IN = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let BN = 0;
function WN(i, u = IN) {
  const c = [];
  let p;
  for (; p = VN.exec(i); )
    c.push(p[1]);
  if (!c.length)
    return i;
  const m = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((E) => {
    const g = typeof u == "function" ? u(E) : u + (BN++).toString(), D = E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + D + ')([")]|\\.[a-z])', "g"),
      "$1" + g + m + "$3"
    );
  }), i = i.replace(new RegExp(m, "g"), ""), i;
}
const _E = /* @__PURE__ */ Object.create(null);
function $N(i, u) {
  _E[i] = u;
}
function wE(i) {
  return _E[i] || _E[""];
}
function FE(i) {
  let u;
  if (typeof i.resources == "string")
    u = [i.resources];
  else if (u = i.resources, !(u instanceof Array) || !u.length)
    return null;
  return {
    // API hosts
    resources: u,
    // Root path
    path: i.path || "/",
    // URL length limit
    maxURL: i.maxURL || 500,
    // Timeout before next host is used.
    rotate: i.rotate || 750,
    // Timeout before failing query.
    timeout: i.timeout || 5e3,
    // Randomise default API end point.
    random: i.random === !0,
    // Start index
    index: i.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: i.dataAfterTimeout !== !1
  };
}
const HE = /* @__PURE__ */ Object.create(null), Ah = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], rg = [];
for (; Ah.length > 0; )
  Ah.length === 1 || Math.random() > 0.5 ? rg.push(Ah.shift()) : rg.push(Ah.pop());
HE[""] = FE({
  resources: ["https://api.iconify.design"].concat(rg)
});
function GN(i, u) {
  const c = FE(u);
  return c === null ? !1 : (HE[i] = c, !0);
}
function YE(i) {
  return HE[i];
}
const QN = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let qT = QN();
function qN(i, u) {
  const c = YE(i);
  if (!c)
    return 0;
  let p;
  if (!c.maxURL)
    p = 0;
  else {
    let m = 0;
    c.resources.forEach((g) => {
      m = Math.max(m, g.length);
    });
    const E = u + ".json?icons=";
    p = c.maxURL - m - c.path.length - E.length;
  }
  return p;
}
function ZN(i) {
  return i === 404;
}
const KN = (i, u, c) => {
  const p = [], m = qN(i, u), E = "icons";
  let g = {
    type: E,
    provider: i,
    prefix: u,
    icons: []
  }, D = 0;
  return c.forEach((b, R) => {
    D += b.length + 1, D >= m && R > 0 && (p.push(g), g = {
      type: E,
      provider: i,
      prefix: u,
      icons: []
    }, D = b.length), g.icons.push(b);
  }), p.push(g), p;
};
function XN(i) {
  if (typeof i == "string") {
    const u = YE(i);
    if (u)
      return u.path;
  }
  return "/";
}
const JN = (i, u, c) => {
  if (!qT) {
    c("abort", 424);
    return;
  }
  let p = XN(u.provider);
  switch (u.type) {
    case "icons": {
      const E = u.prefix, D = u.icons.join(","), b = new URLSearchParams({
        icons: D
      });
      p += E + ".json?" + b.toString();
      break;
    }
    case "custom": {
      const E = u.uri;
      p += E.slice(0, 1) === "/" ? E.slice(1) : E;
      break;
    }
    default:
      c("abort", 400);
      return;
  }
  let m = 503;
  qT(i + p).then((E) => {
    const g = E.status;
    if (g !== 200) {
      setTimeout(() => {
        c(ZN(g) ? "abort" : "next", g);
      });
      return;
    }
    return m = 501, E.json();
  }).then((E) => {
    if (typeof E != "object" || E === null) {
      setTimeout(() => {
        E === 404 ? c("abort", E) : c("next", m);
      });
      return;
    }
    setTimeout(() => {
      c("success", E);
    });
  }).catch(() => {
    c("next", m);
  });
}, eL = {
  prepare: KN,
  send: JN
};
function tL(i) {
  const u = {
    loaded: [],
    missing: [],
    pending: []
  }, c = /* @__PURE__ */ Object.create(null);
  i.sort((m, E) => m.provider !== E.provider ? m.provider.localeCompare(E.provider) : m.prefix !== E.prefix ? m.prefix.localeCompare(E.prefix) : m.name.localeCompare(E.name));
  let p = {
    provider: "",
    prefix: "",
    name: ""
  };
  return i.forEach((m) => {
    if (p.name === m.name && p.prefix === m.prefix && p.provider === m.provider)
      return;
    p = m;
    const E = m.provider, g = m.prefix, D = m.name, b = c[E] || (c[E] = /* @__PURE__ */ Object.create(null)), R = b[g] || (b[g] = pc(E, g));
    let z;
    D in R.icons ? z = u.loaded : g === "" || R.missing.has(D) ? z = u.missing : z = u.pending;
    const N = {
      provider: E,
      prefix: g,
      name: D
    };
    z.push(N);
  }), u;
}
function Mx(i, u) {
  i.forEach((c) => {
    const p = c.loaderCallbacks;
    p && (c.loaderCallbacks = p.filter((m) => m.id !== u));
  });
}
function nL(i) {
  i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0, setTimeout(() => {
    i.pendingCallbacksFlag = !1;
    const u = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
    if (!u.length)
      return;
    let c = !1;
    const p = i.provider, m = i.prefix;
    u.forEach((E) => {
      const g = E.icons, D = g.pending.length;
      g.pending = g.pending.filter((b) => {
        if (b.prefix !== m)
          return !0;
        const R = b.name;
        if (i.icons[R])
          g.loaded.push({
            provider: p,
            prefix: m,
            name: R
          });
        else if (i.missing.has(R))
          g.missing.push({
            provider: p,
            prefix: m,
            name: R
          });
        else
          return c = !0, !0;
        return !1;
      }), g.pending.length !== D && (c || Mx([i], E.id), E.callback(
        g.loaded.slice(0),
        g.missing.slice(0),
        g.pending.slice(0),
        E.abort
      ));
    });
  }));
}
let rL = 0;
function aL(i, u, c) {
  const p = rL++, m = Mx.bind(null, c, p);
  if (!u.pending.length)
    return m;
  const E = {
    id: p,
    icons: u,
    callback: i,
    abort: m
  };
  return c.forEach((g) => {
    (g.loaderCallbacks || (g.loaderCallbacks = [])).push(E);
  }), m;
}
function iL(i, u = !0, c = !1) {
  const p = [];
  return i.forEach((m) => {
    const E = typeof m == "string" ? vg(m, u, c) : m;
    E && p.push(E);
  }), p;
}
var lL = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function oL(i, u, c, p) {
  const m = i.resources.length, E = i.random ? Math.floor(Math.random() * m) : i.index;
  let g;
  if (i.random) {
    let J = i.resources.slice(0);
    for (g = []; J.length > 1; ) {
      const oe = Math.floor(Math.random() * J.length);
      g.push(J[oe]), J = J.slice(0, oe).concat(J.slice(oe + 1));
    }
    g = g.concat(J);
  } else
    g = i.resources.slice(E).concat(i.resources.slice(0, E));
  const D = Date.now();
  let b = "pending", R = 0, z, N = null, W = [], $ = [];
  typeof p == "function" && $.push(p);
  function Y() {
    N && (clearTimeout(N), N = null);
  }
  function ne() {
    b === "pending" && (b = "aborted"), Y(), W.forEach((J) => {
      J.status === "pending" && (J.status = "aborted");
    }), W = [];
  }
  function ke(J, oe) {
    oe && ($ = []), typeof J == "function" && $.push(J);
  }
  function Te() {
    return {
      startTime: D,
      payload: u,
      status: b,
      queriesSent: R,
      queriesPending: W.length,
      subscribe: ke,
      abort: ne
    };
  }
  function ae() {
    b = "failed", $.forEach((J) => {
      J(void 0, z);
    });
  }
  function ie() {
    W.forEach((J) => {
      J.status === "pending" && (J.status = "aborted");
    }), W = [];
  }
  function fe(J, oe, Qe) {
    const at = oe !== "success";
    switch (W = W.filter((Ke) => Ke !== J), b) {
      case "pending":
        break;
      case "failed":
        if (at || !i.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (oe === "abort") {
      z = Qe, ae();
      return;
    }
    if (at) {
      z = Qe, W.length || (g.length ? se() : ae());
      return;
    }
    if (Y(), ie(), !i.random) {
      const Ke = i.resources.indexOf(J.resource);
      Ke !== -1 && Ke !== i.index && (i.index = Ke);
    }
    b = "completed", $.forEach((Ke) => {
      Ke(Qe);
    });
  }
  function se() {
    if (b !== "pending")
      return;
    Y();
    const J = g.shift();
    if (J === void 0) {
      if (W.length) {
        N = setTimeout(() => {
          Y(), b === "pending" && (ie(), ae());
        }, i.timeout);
        return;
      }
      ae();
      return;
    }
    const oe = {
      status: "pending",
      resource: J,
      callback: (Qe, at) => {
        fe(oe, Qe, at);
      }
    };
    W.push(oe), R++, N = setTimeout(se, i.rotate), c(J, u, oe.callback);
  }
  return setTimeout(se), Te;
}
function Ox(i) {
  const u = {
    ...lL,
    ...i
  };
  let c = [];
  function p() {
    c = c.filter((D) => D().status === "pending");
  }
  function m(D, b, R) {
    const z = oL(
      u,
      D,
      b,
      (N, W) => {
        p(), R && R(N, W);
      }
    );
    return c.push(z), z;
  }
  function E(D) {
    return c.find((b) => D(b)) || null;
  }
  return {
    query: m,
    find: E,
    setIndex: (D) => {
      u.index = D;
    },
    getIndex: () => u.index,
    cleanup: p
  };
}
function ZT() {
}
const uE = /* @__PURE__ */ Object.create(null);
function uL(i) {
  if (!uE[i]) {
    const u = YE(i);
    if (!u)
      return;
    const c = Ox(u), p = {
      config: u,
      redundancy: c
    };
    uE[i] = p;
  }
  return uE[i];
}
function sL(i, u, c) {
  let p, m;
  if (typeof i == "string") {
    const E = wE(i);
    if (!E)
      return c(void 0, 424), ZT;
    m = E.send;
    const g = uL(i);
    g && (p = g.redundancy);
  } else {
    const E = FE(i);
    if (E) {
      p = Ox(E);
      const g = i.resources ? i.resources[0] : "", D = wE(g);
      D && (m = D.send);
    }
  }
  return !p || !m ? (c(void 0, 424), ZT) : p.query(u, m, c)().abort;
}
const KT = "iconify2", Bh = "iconify", Nx = Bh + "-count", XT = Bh + "-version", Lx = 36e5, cL = 168;
function CE(i, u) {
  try {
    return i.getItem(u);
  } catch {
  }
}
function PE(i, u, c) {
  try {
    return i.setItem(u, c), !0;
  } catch {
  }
}
function JT(i, u) {
  try {
    i.removeItem(u);
  } catch {
  }
}
function TE(i, u) {
  return PE(i, Nx, u.toString());
}
function xE(i) {
  return parseInt(CE(i, Nx)) || 0;
}
const mg = {
  local: !0,
  session: !0
}, Ux = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let VE = !1;
function fL(i) {
  VE = i;
}
let Ky = typeof window > "u" ? {} : window;
function zx(i) {
  const u = i + "Storage";
  try {
    if (Ky && Ky[u] && typeof Ky[u].length == "number")
      return Ky[u];
  } catch {
  }
  mg[i] = !1;
}
function Ax(i, u) {
  const c = zx(i);
  if (!c)
    return;
  const p = CE(c, XT);
  if (p !== KT) {
    if (p) {
      const D = xE(c);
      for (let b = 0; b < D; b++)
        JT(c, Bh + b.toString());
    }
    PE(c, XT, KT), TE(c, 0);
    return;
  }
  const m = Math.floor(Date.now() / Lx) - cL, E = (D) => {
    const b = Bh + D.toString(), R = CE(c, b);
    if (typeof R == "string") {
      try {
        const z = JSON.parse(R);
        if (typeof z == "object" && typeof z.cached == "number" && z.cached > m && typeof z.provider == "string" && typeof z.data == "object" && typeof z.data.prefix == "string" && // Valid item: run callback
        u(z, D))
          return !0;
      } catch {
      }
      JT(c, b);
    }
  };
  let g = xE(c);
  for (let D = g - 1; D >= 0; D--)
    E(D) || (D === g - 1 ? (g--, TE(c, g)) : Ux[i].add(D));
}
function jx() {
  if (!VE) {
    fL(!0);
    for (const i in mg)
      Ax(i, (u) => {
        const c = u.data, p = u.provider, m = c.prefix, E = pc(
          p,
          m
        );
        if (!jE(E, c).length)
          return !1;
        const g = c.lastModified || -1;
        return E.lastModifiedCached = E.lastModifiedCached ? Math.min(E.lastModifiedCached, g) : g, !0;
      });
  }
}
function dL(i, u) {
  const c = i.lastModifiedCached;
  if (
    // Matches or newer
    c && c >= u
  )
    return c === u;
  if (i.lastModifiedCached = u, c)
    for (const p in mg)
      Ax(p, (m) => {
        const E = m.data;
        return m.provider !== i.provider || E.prefix !== i.prefix || E.lastModified === u;
      });
  return !0;
}
function pL(i, u) {
  VE || jx();
  function c(p) {
    let m;
    if (!mg[p] || !(m = zx(p)))
      return;
    const E = Ux[p];
    let g;
    if (E.size)
      E.delete(g = Array.from(E).shift());
    else if (g = xE(m), !TE(m, g + 1))
      return;
    const D = {
      cached: Math.floor(Date.now() / Lx),
      provider: i.provider,
      data: u
    };
    return PE(
      m,
      Bh + g.toString(),
      JSON.stringify(D)
    );
  }
  u.lastModified && !dL(i, u.lastModified) || Object.keys(u.icons).length && (u.not_found && (u = Object.assign({}, u), delete u.not_found), c("local") || c("session"));
}
function ex() {
}
function hL(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, nL(i);
  }));
}
function vL(i, u) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(u).sort() : i.iconsToLoad = u, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: p } = i, m = i.iconsToLoad;
    delete i.iconsToLoad;
    let E;
    if (!m || !(E = wE(c)))
      return;
    E.prepare(c, p, m).forEach((D) => {
      sL(c, D, (b) => {
        if (typeof b != "object")
          D.icons.forEach((R) => {
            i.missing.add(R);
          });
        else
          try {
            const R = jE(
              i,
              b
            );
            if (!R.length)
              return;
            const z = i.pendingIcons;
            z && R.forEach((N) => {
              z.delete(N);
            }), pL(i, b);
          } catch (R) {
            console.error(R);
          }
        hL(i);
      });
    });
  }));
}
const mL = (i, u) => {
  const c = iL(i, !0, Rx()), p = tL(c);
  if (!p.pending.length) {
    let b = !0;
    return u && setTimeout(() => {
      b && u(
        p.loaded,
        p.missing,
        p.pending,
        ex
      );
    }), () => {
      b = !1;
    };
  }
  const m = /* @__PURE__ */ Object.create(null), E = [];
  let g, D;
  return p.pending.forEach((b) => {
    const { provider: R, prefix: z } = b;
    if (z === D && R === g)
      return;
    g = R, D = z, E.push(pc(R, z));
    const N = m[R] || (m[R] = /* @__PURE__ */ Object.create(null));
    N[z] || (N[z] = []);
  }), p.pending.forEach((b) => {
    const { provider: R, prefix: z, name: N } = b, W = pc(R, z), $ = W.pendingIcons || (W.pendingIcons = /* @__PURE__ */ new Set());
    $.has(N) || ($.add(N), m[R][z].push(N));
  }), E.forEach((b) => {
    const { provider: R, prefix: z } = b;
    m[R][z].length && vL(b, m[R][z]);
  }), u ? aL(u, p, E) : ex;
};
function yL(i, u) {
  const c = {
    ...i
  };
  for (const p in u) {
    const m = u[p], E = typeof m;
    p in Dx ? (m === null || m && (E === "string" || E === "number")) && (c[p] = m) : E === typeof c[p] && (c[p] = p === "rotate" ? m % 4 : m);
  }
  return c;
}
const gL = /[\s,]+/;
function SL(i, u) {
  u.split(gL).forEach((c) => {
    switch (c.trim()) {
      case "horizontal":
        i.hFlip = !0;
        break;
      case "vertical":
        i.vFlip = !0;
        break;
    }
  });
}
function EL(i, u = 0) {
  const c = i.replace(/^-?[0-9.]*/, "");
  function p(m) {
    for (; m < 0; )
      m += 4;
    return m % 4;
  }
  if (c === "") {
    const m = parseInt(i);
    return isNaN(m) ? 0 : p(m);
  } else if (c !== i) {
    let m = 0;
    switch (c) {
      case "%":
        m = 25;
        break;
      case "deg":
        m = 90;
    }
    if (m) {
      let E = parseFloat(i.slice(0, i.length - c.length));
      return isNaN(E) ? 0 : (E = E / m, E % 1 === 0 ? p(E) : 0);
    }
  }
  return u;
}
function _L(i, u) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const p in u)
    c += " " + p + '="' + u[p] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function wL(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function CL(i) {
  return "data:image/svg+xml," + wL(i);
}
function TL(i) {
  return 'url("' + CL(i) + '")';
}
let Yh;
function xL() {
  try {
    Yh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Yh = null;
  }
}
function bL(i) {
  return Yh === void 0 && xL(), Yh ? Yh.createHTML(i) : i;
}
const Fx = {
  ...kx,
  inline: !1
}, RL = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, DL = {
  display: "inline-block"
}, bE = {
  backgroundColor: "currentColor"
}, Hx = {
  backgroundColor: "transparent"
}, tx = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, nx = {
  WebkitMask: bE,
  mask: bE,
  background: Hx
};
for (const i in nx) {
  const u = nx[i];
  for (const c in tx)
    u[i + c] = tx[c];
}
const kL = {
  ...Fx,
  inline: !0
};
function rx(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const ML = (i, u, c, p) => {
  const m = c ? kL : Fx, E = yL(m, u), g = u.mode || "svg", D = {}, b = u.style || {}, R = {
    ...g === "svg" ? RL : {},
    ref: p
  };
  for (let Te in u) {
    const ae = u[Te];
    if (ae !== void 0)
      switch (Te) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          E[Te] = ae === !0 || ae === "true" || ae === 1;
          break;
        case "flip":
          typeof ae == "string" && SL(E, ae);
          break;
        case "color":
          D.color = ae;
          break;
        case "rotate":
          typeof ae == "string" ? E[Te] = EL(ae) : typeof ae == "number" && (E[Te] = ae);
          break;
        case "ariaHidden":
        case "aria-hidden":
          ae !== !0 && ae !== "true" && delete R["aria-hidden"];
          break;
        default:
          m[Te] === void 0 && (R[Te] = ae);
      }
  }
  const z = PN(i, E), N = z.attributes;
  if (E.inline && (D.verticalAlign = "-0.125em"), g === "svg") {
    R.style = {
      ...D,
      ...b
    }, Object.assign(R, N);
    let Te = 0, ae = u.id;
    return typeof ae == "string" && (ae = ae.replace(/-/g, "_")), R.dangerouslySetInnerHTML = {
      __html: bL(WN(z.body, ae ? () => ae + "ID" + Te++ : "iconifyReact"))
    }, Ju.createElement("svg", R);
  }
  const { body: W, width: $, height: Y } = i, ne = g === "mask" || (g === "bg" ? !1 : W.indexOf("currentColor") !== -1), ke = _L(W, {
    ...N,
    width: $ + "",
    height: Y + ""
  });
  return R.style = {
    ...D,
    "--svg": TL(ke),
    width: rx(N.width),
    height: rx(N.height),
    ...DL,
    ...ne ? bE : Hx,
    ...b
  }, Ju.createElement("span", R);
};
Rx(!0);
$N("", eL);
if (typeof document < "u" && typeof window < "u") {
  jx();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const u = i.IconifyPreload, c = "Invalid IconifyPreload syntax.";
    typeof u == "object" && u !== null && (u instanceof Array ? u : [u]).forEach((p) => {
      try {
        // Check if item is an object and not null/array
        (typeof p != "object" || p === null || p instanceof Array || // Check for 'icons' and 'prefix'
        typeof p.icons != "object" || typeof p.prefix != "string" || // Add icon set
        !jN(p)) && console.error(c);
      } catch {
        console.error(c);
      }
    });
  }
  if (i.IconifyProviders !== void 0) {
    const u = i.IconifyProviders;
    if (typeof u == "object" && u !== null)
      for (let c in u) {
        const p = "IconifyProviders[" + c + "] is invalid.";
        try {
          const m = u[c];
          if (typeof m != "object" || !m || m.resources === void 0)
            continue;
          GN(c, m) || console.error(p);
        } catch {
          console.error(p);
        }
      }
  }
}
class Yx extends Ju.Component {
  constructor(u) {
    super(u), this.state = {
      // Render placeholder before component is mounted
      icon: null
    };
  }
  /**
   * Abort loading icon
   */
  _abortLoading() {
    this._loading && (this._loading.abort(), this._loading = null);
  }
  /**
   * Update state
   */
  _setData(u) {
    this.state.icon !== u && this.setState({
      icon: u
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(u) {
    const c = this.state, p = this.props.icon;
    if (typeof p == "object" && p !== null && typeof p.body == "string") {
      this._icon = "", this._abortLoading(), (u || c.icon === null) && this._setData({
        data: p
      });
      return;
    }
    let m;
    if (typeof p != "string" || (m = vg(p, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const E = zN(m);
    if (!E) {
      (!this._loading || this._loading.name !== p) && (this._abortLoading(), this._icon = "", this._setData(null), E !== null && (this._loading = {
        name: p,
        abort: mL([m], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== p || c.icon === null) {
      this._abortLoading(), this._icon = p;
      const g = ["iconify"];
      m.prefix !== "" && g.push("iconify--" + m.prefix), m.provider !== "" && g.push("iconify--" + m.provider), this._setData({
        data: E,
        classes: g
      }), this.props.onLoad && this.props.onLoad(p);
    }
  }
  /**
   * Component mounted
   */
  componentDidMount() {
    this._checkIcon(!1);
  }
  /**
   * Component updated
   */
  componentDidUpdate(u) {
    u.icon !== this.props.icon && this._checkIcon(!0);
  }
  /**
   * Abort loading
   */
  componentWillUnmount() {
    this._abortLoading();
  }
  /**
   * Render
   */
  render() {
    const u = this.props, c = this.state.icon;
    if (c === null)
      return u.children ? u.children : Ju.createElement("span", {});
    let p = u;
    return c.classes && (p = {
      ...u,
      className: (typeof u.className == "string" ? u.className + " " : "") + c.classes.join(" ")
    }), ML({
      ...AE,
      ...c.data
    }, p, u._inline, u._ref);
  }
}
const OL = Ju.forwardRef(function(u, c) {
  const p = {
    ...u,
    _ref: c,
    _inline: !1
  };
  return Ju.createElement(Yx, p);
});
Ju.forwardRef(function(u, c) {
  const p = {
    ...u,
    _ref: c,
    _inline: !0
  };
  return Ju.createElement(Yx, p);
});
var Rr = OL;
const NL = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
  const u = Math.random() * 16 | 0;
  return (i === "x" ? u : u & 3 | 8).toString(16);
}), LL = ({
  onChange: i,
  defaultValue: u,
  children: c,
  name: p,
  invalidText: m,
  placeholder: E,
  variant: g,
  icon: D,
  required: b = !0,
  className: R = "",
  type: z = "text",
  id: N = NL(),
  ...W
}) => /* @__PURE__ */ P.jsxs("div", { className: `textfield ${g ? "bg-" + g : ""} ${R}`, children: [
  /* @__PURE__ */ P.jsx("label", { htmlFor: N, children: E ?? p ?? N }),
  /* @__PURE__ */ P.jsx(
    "input",
    {
      id: N,
      type: z,
      className: "input",
      name: p ?? N,
      onChange: i,
      defaultValue: u,
      placeholder: E ?? p ?? N ?? "",
      required: b,
      ...W
    }
  ),
  D && /* @__PURE__ */ P.jsx(Rr, { icon: D }),
  b && /* @__PURE__ */ P.jsx("span", { className: "required", children: m ?? p ? `${p ?? N} should not be empty!` : "Should not be empty!" }),
  c && c
] }), Tj = ({
  defaultShow: i = !1,
  ...u
}) => {
  const [c, p] = Dr(i);
  return /* @__PURE__ */ P.jsx(P.Fragment, { children: /* @__PURE__ */ P.jsx(
    LL,
    {
      ...u,
      className: "textfield-password",
      type: c ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ P.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => p((m) => !m),
          children: /* @__PURE__ */ P.jsx(Rr, { icon: c ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, UL = (i) => {
  console.log(i);
}, zL = (i) => {
  console.log(i);
}, AL = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], jL = ({
  defaultSelected: i,
  startDateRef: u,
  endDateRef: c,
  onClose: p
}) => {
  const [m, E] = Dr(
    (i == null ? void 0 : i.end) === void 0 ? _i() : i.end
  ), [g, D] = Dr(
    i === void 0 ? {
      start: null,
      end: null
    } : i
  ), b = m, R = b.clone().startOf("month"), z = b.clone().endOf("month"), N = [], W = R.day(), $ = z.day();
  for (let Y = W - 1; Y >= 0; Y--)
    N.push(R.clone().subtract(Y, "days"));
  for (let Y = R.clone().add(1, "day"); Y.isSameOrBefore(z); Y.add(1, "day"))
    N.push(Y.clone());
  for (let Y = 1; Y <= 6 - $ + 1; Y++)
    N.push(z.clone().add(Y, "days"));
  return /* @__PURE__ */ P.jsx("div", { className: "dropdown", children: /* @__PURE__ */ P.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ P.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              E(
                (Y) => Y.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ P.jsx(Rr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ P.jsx("button", { type: "button", className: "btn", children: b.format("MMM, YYYY") }),
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              E(
                (Y) => Y.clone().add(1, "month")
              );
            },
            disabled: m.clone().add(1, "month").isSameOrAfter(_i()),
            children: /* @__PURE__ */ P.jsx(Rr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ P.jsx("ul", { className: "date-weekdays", children: AL.map((Y) => /* @__PURE__ */ P.jsx("li", { children: /* @__PURE__ */ P.jsx("span", { children: Y }) }, Y)) })
    ] }),
    /* @__PURE__ */ P.jsx("ul", { className: "days-container", children: N.map((Y, ne) => {
      var fe, se, J;
      let ke = "";
      const Te = (fe = g.start) != null && fe.startOf("day").isSame(Y) ? "selected start" : (J = (se = g.end) == null ? void 0 : se.startOf("day")) != null && J.isSame(Y) ? "selected end" : "", ae = Y.format("MM") !== b.format("MM") ? "not-current" : "", ie = Y.isBetween(
        g.start,
        g.end
      ) ? "between" : "";
      return ke += ae + Te + ie, /* @__PURE__ */ P.jsx("li", { children: /* @__PURE__ */ P.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var oe;
            if (!(u.current === null || c.current === null)) {
              if (((oe = g.start) == null ? void 0 : oe.date()) === Y.date()) {
                D({
                  start: null,
                  end: null
                }), u.current.value = "", c.current.value = "";
                return;
              }
              if (g.start === null)
                D((Qe) => ({
                  ...Qe,
                  start: Y
                })), u.current.value = Y.format("YYYY-MM-DD");
              else if (g.start !== null) {
                if (Y.isBefore(g.start)) {
                  D((Qe) => ({
                    start: Y,
                    end: Qe.start
                  })), u.current.value = Y.format("YYYY-MM-DD"), c.current.value = g.start.format("YYYY-MM-DD");
                  return;
                }
                D((Qe) => ({
                  ...Qe,
                  end: Y
                })), c.current.value = Y.format("YYYY-MM-DD");
              }
            }
          },
          className: ke,
          disabled: Y.isAfter(_i()),
          children: Y.format("DD")
        }
      ) }, ne);
    }) }),
    /* @__PURE__ */ P.jsx(
      "button",
      {
        type: "button",
        onClick: p,
        className: "btn btn-sm btn-primary",
        style: { alignSelf: "end" },
        children: "Done"
      }
    )
  ] }) });
}, xj = ({
  defaultSelected: i,
  onSearch: u,
  children: c
}) => {
  const [p, m] = Dr(!1), E = tr(null), g = tr(null), D = {
    ref: E,
    type: "date",
    onFocus: UL,
    onClick: () => {
      m((R) => !R);
    },
    autoComplete: "off",
    defaultValue: i ? i.start.format("YYYY-MM-DD") : ""
  }, b = {
    ref: g,
    type: "date",
    onFocus: zL,
    onClick: () => {
      m((R) => !R);
    },
    autoComplete: "off",
    defaultValue: i != null && i.end ? i.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ P.jsx(P.Fragment, { children: /* @__PURE__ */ P.jsxs(
    "form",
    {
      className: "date-range-picker",
      onSubmit: (R) => {
        R.preventDefault();
        const z = new FormData(R.target), N = Object.fromEntries(
          z.entries()
        );
        u == null || u(N);
      },
      children: [
        /* @__PURE__ */ P.jsxs("div", { className: "group rounded-box", children: [
          c({ startDateProps: D, endDateProps: b }),
          /* @__PURE__ */ P.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        p && /* @__PURE__ */ P.jsx(
          jL,
          {
            defaultSelected: i,
            startDateRef: E,
            endDateRef: g,
            onClose: () => m(!1)
          }
        )
      ]
    }
  ) });
}, FL = (i, u, c, p, m, E) => {
  let g = 0, D = !1;
  switch (i.key) {
    case "ArrowUp": {
      if (u === 0)
        return;
      g = u - 1, m.current[g].focus(), c(g), p.current = "";
      break;
    }
    case "ArrowDown": {
      if (u === E - 1)
        return;
      g = u + 1, m.current[g].focus(), p.current = "", c(g);
      break;
    }
    case "Backspace": {
      p.current = p.current.slice(0, -1), p.current.length > 0 && (D = !0);
      break;
    }
    default:
      i.key.length === 1 && isNaN(Number(i.key)) && (p.current += i.key, D = !0);
  }
  if (D) {
    const b = m.current.findIndex(
      (R) => R.innerText.toLowerCase().includes(p.current.toLowerCase())
    );
    if (b === -1)
      return;
    m.current[b].focus(), c(b);
  }
}, HL = (i) => typeof i == "object" ? /* @__PURE__ */ P.jsx("span", { children: "Object.values(value)[0]" }) : /* @__PURE__ */ P.jsx("span", { children: "value" }), IE = ({
  items: i,
  currentSelected: u,
  selector: c,
  onChange: p,
  labelExtractor: m,
  required: E = !0,
  showQty: g = 4,
  style: D = {},
  name: b = "",
  position: R = "top",
  variant: z = "neutral",
  keyExtractor: N = HL
}) => {
  const [W, $] = Dr(!1), [Y, ne] = Dr(
    i.findIndex(
      (se) => c ? se[c] === (u == null ? void 0 : u[c]) : se === u
    )
  ), [ke, Te] = Dr(Y), ae = tr(null), ie = tr(""), fe = tr([]);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: `select ${W ? "shadow-md" : ""} ${R}`,
      onBlur: () => {
      },
      style: D,
      children: [
        /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${z} btn-select ${W ? "active" : ""}`,
            onClick: () => {
              $((J) => !J);
              const se = u === void 0 ? 0 : Y;
              Te(se), setTimeout(() => {
                W || fe.current[se].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ P.jsx("span", { className: Y === -1 ? "not-selected" : "", children: Y === -1 ? "Select one of the options" : (m == null ? void 0 : m(i[Y])) ?? N(i[Y]) }),
              /* @__PURE__ */ P.jsx(Rr, { icon: "eva:arrow-down-fill", vFlip: W })
            ]
          }
        ),
        /* @__PURE__ */ P.jsx(
          "input",
          {
            style: {
              display: "block",
              position: "absolute",
              top: "100%",
              opacity: 0,
              height: 1,
              pointerEvents: "none"
            },
            autoComplete: "new-password",
            name: b,
            ref: ae,
            required: E
          }
        ),
        W && /* @__PURE__ */ P.jsx(
          "ul",
          {
            className: `select-items${i.length > 4 ? " custom-scroll " : " "}bg-${z} shadow-md`,
            style: { "--select-items": g },
            children: i.map((se, J) => /* @__PURE__ */ P.jsx("li", { className: "item", children: /* @__PURE__ */ P.jsx(
              "button",
              {
                type: "button",
                className: `${J === Y ? "active" : ""}`,
                ref: (oe) => fe.current[J] = oe,
                tabIndex: 0,
                onClick: () => {
                  ne(J), p !== void 0 && p(J, i[J]), ae.current && c && (ae.current.value = String(i[J][c])), $(!1);
                },
                onMouseEnter: (oe) => {
                  Te(J), oe.target.focus();
                },
                onMouseLeave: () => {
                  Te(Y);
                },
                onKeyDown: (oe) => FL(
                  oe,
                  ke,
                  Te,
                  ie,
                  fe,
                  i.length
                ),
                children: N(se)
              }
            ) }, J))
          }
        )
      ]
    }
  );
}, YL = [
  {
    agent: {
      firstName: "Ricardo",
      lastName: "Dutra",
      baseUserId: "ricardo.dutra"
    },
    period: [
      {
        date: "2023-08-08T03:00:00.002Z",
        start: "2023-08-08T06:24:32.532Z",
        finish: "2023-08-08T15:24:32.532Z",
        description: "Saída mais cedo",
        breaks: [
          {
            start: "2023-08-08T06:24:32.532Z",
            finish: "2023-08-08T06:24:32.532Z",
            type: 205
          }
        ]
      },
      {
        date: "2023-08-11T03:00:00.002Z",
        start: "2023-08-11T06:24:32.532Z",
        finish: "2023-08-11T14:58:32.532Z",
        description: "Saída mais cedo",
        breaks: [
          {
            start: "2023-08-11T09:24:32.532Z",
            finish: "2023-08-11T09:54:32.532Z",
            type: 206
          },
          {
            start: "2023-08-11T11:15:02.532Z",
            finish: "2023-08-11T11:29:32.532Z",
            type: 205
          }
        ]
      }
    ]
  },
  {
    agent: {
      firstName: "José",
      lastName: "Aultra",
      baseUserId: "jose.aultra"
    },
    period: [
      {
        date: "2023-08-09T03:00:00.002Z",
        start: "2023-08-09T06:24:32.532Z",
        finish: "2023-08-09T14:58:32.532Z",
        description: "Saída mais cedo",
        breaks: [
          {
            start: "2023-09-08T09:24:32.532Z",
            finish: "2023-09-08T09:54:32.532Z",
            type: 206
          },
          {
            start: "2023-09-08T11:15:02.532Z",
            finish: "2023-09-08T11:29:32.532Z",
            type: 205
          }
        ]
      }
    ]
  },
  {
    agent: {
      firstName: "Rinaldo",
      lastName: "Guilherme",
      baseUserId: "rinaldo.guilherme"
    },
    period: [
      {
        date: "2023-08-10T03:00:00.002Z",
        start: "2023-08-10T06:24:32.532Z",
        finish: "2023-08-10T14:58:32.532Z",
        description: "Saída mais cedo",
        breaks: [
          {
            start: "2023-09-08T09:24:32.532Z",
            finish: "2023-09-08T09:54:32.532Z",
            type: 206
          },
          {
            start: "2023-09-08T11:15:02.532Z",
            finish: "2023-09-08T11:29:32.532Z",
            type: 205
          }
        ]
      },
      {
        date: "2023-08-14T03:00:00.002Z",
        start: "2023-08-14T06:24:32.532Z",
        finish: "2023-08-14T14:58:32.532Z",
        description: "Saída mais cedo",
        breaks: [
          {
            start: "2023-09-08T09:24:32.532Z",
            finish: "2023-09-08T09:54:32.532Z",
            type: 206
          },
          {
            start: "2023-09-08T11:15:02.532Z",
            finish: "2023-09-08T11:29:32.532Z",
            type: 205
          }
        ]
      }
    ]
  }
];
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Px;
function Se() {
  return Px.apply(null, arguments);
}
function PL(i) {
  Px = i;
}
function tl(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function fc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function Rt(i, u) {
  return Object.prototype.hasOwnProperty.call(i, u);
}
function BE(i) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(i).length === 0;
  var u;
  for (u in i)
    if (Rt(i, u))
      return !1;
  return !0;
}
function ja(i) {
  return i === void 0;
}
function Bo(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function Qh(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function Vx(i, u) {
  var c = [], p, m = i.length;
  for (p = 0; p < m; ++p)
    c.push(u(i[p], p));
  return c;
}
function Zu(i, u) {
  for (var c in u)
    Rt(u, c) && (i[c] = u[c]);
  return Rt(u, "toString") && (i.toString = u.toString), Rt(u, "valueOf") && (i.valueOf = u.valueOf), i;
}
function Bl(i, u, c, p) {
  return db(i, u, c, p, !0).utc();
}
function VL() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function ot(i) {
  return i._pf == null && (i._pf = VL()), i._pf;
}
var RE;
Array.prototype.some ? RE = Array.prototype.some : RE = function(i) {
  var u = Object(this), c = u.length >>> 0, p;
  for (p = 0; p < c; p++)
    if (p in u && i.call(this, u[p], p, u))
      return !0;
  return !1;
};
function WE(i) {
  if (i._isValid == null) {
    var u = ot(i), c = RE.call(u.parsedDateParts, function(m) {
      return m != null;
    }), p = !isNaN(i._d.getTime()) && u.overflow < 0 && !u.empty && !u.invalidEra && !u.invalidMonth && !u.invalidWeekday && !u.weekdayMismatch && !u.nullInput && !u.invalidFormat && !u.userInvalidated && (!u.meridiem || u.meridiem && c);
    if (i._strict && (p = p && u.charsLeftOver === 0 && u.unusedTokens.length === 0 && u.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = p;
    else
      return p;
  }
  return i._isValid;
}
function yg(i) {
  var u = Bl(NaN);
  return i != null ? Zu(ot(u), i) : ot(u).userInvalidated = !0, u;
}
var ax = Se.momentProperties = [], sE = !1;
function $E(i, u) {
  var c, p, m, E = ax.length;
  if (ja(u._isAMomentObject) || (i._isAMomentObject = u._isAMomentObject), ja(u._i) || (i._i = u._i), ja(u._f) || (i._f = u._f), ja(u._l) || (i._l = u._l), ja(u._strict) || (i._strict = u._strict), ja(u._tzm) || (i._tzm = u._tzm), ja(u._isUTC) || (i._isUTC = u._isUTC), ja(u._offset) || (i._offset = u._offset), ja(u._pf) || (i._pf = ot(u)), ja(u._locale) || (i._locale = u._locale), E > 0)
    for (c = 0; c < E; c++)
      p = ax[c], m = u[p], ja(m) || (i[p] = m);
  return i;
}
function qh(i) {
  $E(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), sE === !1 && (sE = !0, Se.updateOffset(this), sE = !1);
}
function nl(i) {
  return i instanceof qh || i != null && i._isAMomentObject != null;
}
function Ix(i) {
  Se.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function Ci(i, u) {
  var c = !0;
  return Zu(function() {
    if (Se.deprecationHandler != null && Se.deprecationHandler(null, i), c) {
      var p = [], m, E, g, D = arguments.length;
      for (E = 0; E < D; E++) {
        if (m = "", typeof arguments[E] == "object") {
          m += `
[` + E + "] ";
          for (g in arguments[0])
            Rt(arguments[0], g) && (m += g + ": " + arguments[0][g] + ", ");
          m = m.slice(0, -2);
        } else
          m = arguments[E];
        p.push(m);
      }
      Ix(
        i + `
Arguments: ` + Array.prototype.slice.call(p).join("") + `
` + new Error().stack
      ), c = !1;
    }
    return u.apply(this, arguments);
  }, u);
}
var ix = {};
function Bx(i, u) {
  Se.deprecationHandler != null && Se.deprecationHandler(i, u), ix[i] || (Ix(u), ix[i] = !0);
}
Se.suppressDeprecationWarnings = !1;
Se.deprecationHandler = null;
function Wl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function IL(i) {
  var u, c;
  for (c in i)
    Rt(i, c) && (u = i[c], Wl(u) ? this[c] = u : this["_" + c] = u);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function DE(i, u) {
  var c = Zu({}, i), p;
  for (p in u)
    Rt(u, p) && (fc(i[p]) && fc(u[p]) ? (c[p] = {}, Zu(c[p], i[p]), Zu(c[p], u[p])) : u[p] != null ? c[p] = u[p] : delete c[p]);
  for (p in i)
    Rt(i, p) && !Rt(u, p) && fc(i[p]) && (c[p] = Zu({}, c[p]));
  return c;
}
function GE(i) {
  i != null && this.set(i);
}
var kE;
Object.keys ? kE = Object.keys : kE = function(i) {
  var u, c = [];
  for (u in i)
    Rt(i, u) && c.push(u);
  return c;
};
var BL = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function WL(i, u, c) {
  var p = this._calendar[i] || this._calendar.sameElse;
  return Wl(p) ? p.call(u, c) : p;
}
function Il(i, u, c) {
  var p = "" + Math.abs(i), m = u - p.length, E = i >= 0;
  return (E ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, m)).toString().substr(1) + p;
}
var QE = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Xy = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cE = {}, pd = {};
function Ye(i, u, c, p) {
  var m = p;
  typeof p == "string" && (m = function() {
    return this[p]();
  }), i && (pd[i] = m), u && (pd[u[0]] = function() {
    return Il(m.apply(this, arguments), u[1], u[2]);
  }), c && (pd[c] = function() {
    return this.localeData().ordinal(
      m.apply(this, arguments),
      i
    );
  });
}
function $L(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function GL(i) {
  var u = i.match(QE), c, p;
  for (c = 0, p = u.length; c < p; c++)
    pd[u[c]] ? u[c] = pd[u[c]] : u[c] = $L(u[c]);
  return function(m) {
    var E = "", g;
    for (g = 0; g < p; g++)
      E += Wl(u[g]) ? u[g].call(m, i) : u[g];
    return E;
  };
}
function ag(i, u) {
  return i.isValid() ? (u = Wx(u, i.localeData()), cE[u] = cE[u] || GL(u), cE[u](i)) : i.localeData().invalidDate();
}
function Wx(i, u) {
  var c = 5;
  function p(m) {
    return u.longDateFormat(m) || m;
  }
  for (Xy.lastIndex = 0; c >= 0 && Xy.test(i); )
    i = i.replace(
      Xy,
      p
    ), Xy.lastIndex = 0, c -= 1;
  return i;
}
var QL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function qL(i) {
  var u = this._longDateFormat[i], c = this._longDateFormat[i.toUpperCase()];
  return u || !c ? u : (this._longDateFormat[i] = c.match(QE).map(function(p) {
    return p === "MMMM" || p === "MM" || p === "DD" || p === "dddd" ? p.slice(1) : p;
  }).join(""), this._longDateFormat[i]);
}
var ZL = "Invalid date";
function KL() {
  return this._invalidDate;
}
var XL = "%d", JL = /\d{1,2}/;
function e2(i) {
  return this._ordinal.replace("%d", i);
}
var t2 = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function n2(i, u, c, p) {
  var m = this._relativeTime[c];
  return Wl(m) ? m(i, u, c, p) : m.replace(/%d/i, i);
}
function r2(i, u) {
  var c = this._relativeTime[i > 0 ? "future" : "past"];
  return Wl(c) ? c(u) : c.replace(/%s/i, u);
}
var Ph = {};
function Gr(i, u) {
  var c = i.toLowerCase();
  Ph[c] = Ph[c + "s"] = Ph[u] = i;
}
function Ti(i) {
  return typeof i == "string" ? Ph[i] || Ph[i.toLowerCase()] : void 0;
}
function qE(i) {
  var u = {}, c, p;
  for (p in i)
    Rt(i, p) && (c = Ti(p), c && (u[c] = i[p]));
  return u;
}
var $x = {};
function Qr(i, u) {
  $x[i] = u;
}
function a2(i) {
  var u = [], c;
  for (c in i)
    Rt(i, c) && u.push({ unit: c, priority: $x[c] });
  return u.sort(function(p, m) {
    return p.priority - m.priority;
  }), u;
}
function gg(i) {
  return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0;
}
function wi(i) {
  return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
}
function dt(i) {
  var u = +i, c = 0;
  return u !== 0 && isFinite(u) && (c = wi(u)), c;
}
function md(i, u) {
  return function(c) {
    return c != null ? (Gx(this, i, c), Se.updateOffset(this, u), this) : ug(this, i);
  };
}
function ug(i, u) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + u]() : NaN;
}
function Gx(i, u, c) {
  i.isValid() && !isNaN(c) && (u === "FullYear" && gg(i.year()) && i.month() === 1 && i.date() === 29 ? (c = dt(c), i._d["set" + (i._isUTC ? "UTC" : "") + u](
    c,
    i.month(),
    Tg(c, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + u](c));
}
function i2(i) {
  return i = Ti(i), Wl(this[i]) ? this[i]() : this;
}
function l2(i, u) {
  if (typeof i == "object") {
    i = qE(i);
    var c = a2(i), p, m = c.length;
    for (p = 0; p < m; p++)
      this[c[p].unit](i[c[p].unit]);
  } else if (i = Ti(i), Wl(this[i]))
    return this[i](u);
  return this;
}
var Qx = /\d/, ti = /\d\d/, qx = /\d{3}/, ZE = /\d{4}/, Sg = /[+-]?\d{6}/, ln = /\d\d?/, Zx = /\d\d\d\d?/, Kx = /\d\d\d\d\d\d?/, Eg = /\d{1,3}/, KE = /\d{1,4}/, _g = /[+-]?\d{1,6}/, yd = /\d+/, wg = /[+-]?\d+/, o2 = /Z|[+-]\d\d:?\d\d/gi, Cg = /Z|[+-]\d\d(?::?\d\d)?/gi, u2 = /[+-]?\d+(\.\d{1,3})?/, Zh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, sg;
sg = {};
function xe(i, u, c) {
  sg[i] = Wl(u) ? u : function(p, m) {
    return p && c ? c : u;
  };
}
function s2(i, u) {
  return Rt(sg, i) ? sg[i](u._strict, u._locale) : new RegExp(c2(i));
}
function c2(i) {
  return ei(
    i.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(u, c, p, m, E) {
        return c || p || m || E;
      }
    )
  );
}
function ei(i) {
  return i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ME = {};
function Vt(i, u) {
  var c, p = u, m;
  for (typeof i == "string" && (i = [i]), Bo(u) && (p = function(E, g) {
    g[u] = dt(E);
  }), m = i.length, c = 0; c < m; c++)
    ME[i[c]] = p;
}
function Kh(i, u) {
  Vt(i, function(c, p, m, E) {
    m._w = m._w || {}, u(c, m._w, m, E);
  });
}
function f2(i, u, c) {
  u != null && Rt(ME, i) && ME[i](u, c._a, c, i);
}
var $r = 0, Po = 1, Vl = 2, nr = 3, el = 4, Vo = 5, cc = 6, d2 = 7, p2 = 8;
function h2(i, u) {
  return (i % u + u) % u;
}
var Mn;
Array.prototype.indexOf ? Mn = Array.prototype.indexOf : Mn = function(i) {
  var u;
  for (u = 0; u < this.length; ++u)
    if (this[u] === i)
      return u;
  return -1;
};
function Tg(i, u) {
  if (isNaN(i) || isNaN(u))
    return NaN;
  var c = h2(u, 12);
  return i += (u - c) / 12, c === 1 ? gg(i) ? 29 : 28 : 31 - c % 7 % 2;
}
Ye("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Ye("MMM", 0, 0, function(i) {
  return this.localeData().monthsShort(this, i);
});
Ye("MMMM", 0, 0, function(i) {
  return this.localeData().months(this, i);
});
Gr("month", "M");
Qr("month", 8);
xe("M", ln);
xe("MM", ln, ti);
xe("MMM", function(i, u) {
  return u.monthsShortRegex(i);
});
xe("MMMM", function(i, u) {
  return u.monthsRegex(i);
});
Vt(["M", "MM"], function(i, u) {
  u[Po] = dt(i) - 1;
});
Vt(["MMM", "MMMM"], function(i, u, c, p) {
  var m = c._locale.monthsParse(i, p, c._strict);
  m != null ? u[Po] = m : ot(c).invalidMonth = i;
});
var v2 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Xx = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Jx = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, m2 = Zh, y2 = Zh;
function g2(i, u) {
  return i ? tl(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || Jx).test(u) ? "format" : "standalone"][i.month()] : tl(this._months) ? this._months : this._months.standalone;
}
function S2(i, u) {
  return i ? tl(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[Jx.test(u) ? "format" : "standalone"][i.month()] : tl(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function E2(i, u, c) {
  var p, m, E, g = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], p = 0; p < 12; ++p)
      E = Bl([2e3, p]), this._shortMonthsParse[p] = this.monthsShort(
        E,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[p] = this.months(E, "").toLocaleLowerCase();
  return c ? u === "MMM" ? (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : null) : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : null) : u === "MMM" ? (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : null)) : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : null));
}
function _2(i, u, c) {
  var p, m, E;
  if (this._monthsParseExact)
    return E2.call(this, i, u, c);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), p = 0; p < 12; p++) {
    if (m = Bl([2e3, p]), c && !this._longMonthsParse[p] && (this._longMonthsParse[p] = new RegExp(
      "^" + this.months(m, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[p] = new RegExp(
      "^" + this.monthsShort(m, "").replace(".", "") + "$",
      "i"
    )), !c && !this._monthsParse[p] && (E = "^" + this.months(m, "") + "|^" + this.monthsShort(m, ""), this._monthsParse[p] = new RegExp(E.replace(".", ""), "i")), c && u === "MMMM" && this._longMonthsParse[p].test(i))
      return p;
    if (c && u === "MMM" && this._shortMonthsParse[p].test(i))
      return p;
    if (!c && this._monthsParse[p].test(i))
      return p;
  }
}
function eb(i, u) {
  var c;
  if (!i.isValid())
    return i;
  if (typeof u == "string") {
    if (/^\d+$/.test(u))
      u = dt(u);
    else if (u = i.localeData().monthsParse(u), !Bo(u))
      return i;
  }
  return c = Math.min(i.date(), Tg(i.year(), u)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](u, c), i;
}
function tb(i) {
  return i != null ? (eb(this, i), Se.updateOffset(this, !0), this) : ug(this, "Month");
}
function w2() {
  return Tg(this.year(), this.month());
}
function C2(i) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || nb.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Rt(this, "_monthsShortRegex") || (this._monthsShortRegex = m2), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function T2(i) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || nb.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Rt(this, "_monthsRegex") || (this._monthsRegex = y2), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function nb() {
  function i(g, D) {
    return D.length - g.length;
  }
  var u = [], c = [], p = [], m, E;
  for (m = 0; m < 12; m++)
    E = Bl([2e3, m]), u.push(this.monthsShort(E, "")), c.push(this.months(E, "")), p.push(this.months(E, "")), p.push(this.monthsShort(E, ""));
  for (u.sort(i), c.sort(i), p.sort(i), m = 0; m < 12; m++)
    u[m] = ei(u[m]), c[m] = ei(c[m]);
  for (m = 0; m < 24; m++)
    p[m] = ei(p[m]);
  this._monthsRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + u.join("|") + ")",
    "i"
  );
}
Ye("Y", 0, 0, function() {
  var i = this.year();
  return i <= 9999 ? Il(i, 4) : "+" + i;
});
Ye(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ye(0, ["YYYY", 4], 0, "year");
Ye(0, ["YYYYY", 5], 0, "year");
Ye(0, ["YYYYYY", 6, !0], 0, "year");
Gr("year", "y");
Qr("year", 1);
xe("Y", wg);
xe("YY", ln, ti);
xe("YYYY", KE, ZE);
xe("YYYYY", _g, Sg);
xe("YYYYYY", _g, Sg);
Vt(["YYYYY", "YYYYYY"], $r);
Vt("YYYY", function(i, u) {
  u[$r] = i.length === 2 ? Se.parseTwoDigitYear(i) : dt(i);
});
Vt("YY", function(i, u) {
  u[$r] = Se.parseTwoDigitYear(i);
});
Vt("Y", function(i, u) {
  u[$r] = parseInt(i, 10);
});
function Vh(i) {
  return gg(i) ? 366 : 365;
}
Se.parseTwoDigitYear = function(i) {
  return dt(i) + (dt(i) > 68 ? 1900 : 2e3);
};
var rb = md("FullYear", !0);
function x2() {
  return gg(this.year());
}
function b2(i, u, c, p, m, E, g) {
  var D;
  return i < 100 && i >= 0 ? (D = new Date(i + 400, u, c, p, m, E, g), isFinite(D.getFullYear()) && D.setFullYear(i)) : D = new Date(i, u, c, p, m, E, g), D;
}
function Wh(i) {
  var u, c;
  return i < 100 && i >= 0 ? (c = Array.prototype.slice.call(arguments), c[0] = i + 400, u = new Date(Date.UTC.apply(null, c)), isFinite(u.getUTCFullYear()) && u.setUTCFullYear(i)) : u = new Date(Date.UTC.apply(null, arguments)), u;
}
function cg(i, u, c) {
  var p = 7 + u - c, m = (7 + Wh(i, 0, p).getUTCDay() - u) % 7;
  return -m + p - 1;
}
function ab(i, u, c, p, m) {
  var E = (7 + c - p) % 7, g = cg(i, p, m), D = 1 + 7 * (u - 1) + E + g, b, R;
  return D <= 0 ? (b = i - 1, R = Vh(b) + D) : D > Vh(i) ? (b = i + 1, R = D - Vh(i)) : (b = i, R = D), {
    year: b,
    dayOfYear: R
  };
}
function $h(i, u, c) {
  var p = cg(i.year(), u, c), m = Math.floor((i.dayOfYear() - p - 1) / 7) + 1, E, g;
  return m < 1 ? (g = i.year() - 1, E = m + Io(g, u, c)) : m > Io(i.year(), u, c) ? (E = m - Io(i.year(), u, c), g = i.year() + 1) : (g = i.year(), E = m), {
    week: E,
    year: g
  };
}
function Io(i, u, c) {
  var p = cg(i, u, c), m = cg(i + 1, u, c);
  return (Vh(i) - p + m) / 7;
}
Ye("w", ["ww", 2], "wo", "week");
Ye("W", ["WW", 2], "Wo", "isoWeek");
Gr("week", "w");
Gr("isoWeek", "W");
Qr("week", 5);
Qr("isoWeek", 5);
xe("w", ln);
xe("ww", ln, ti);
xe("W", ln);
xe("WW", ln, ti);
Kh(
  ["w", "ww", "W", "WW"],
  function(i, u, c, p) {
    u[p.substr(0, 1)] = dt(i);
  }
);
function R2(i) {
  return $h(i, this._week.dow, this._week.doy).week;
}
var D2 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function k2() {
  return this._week.dow;
}
function M2() {
  return this._week.doy;
}
function O2(i) {
  var u = this.localeData().week(this);
  return i == null ? u : this.add((i - u) * 7, "d");
}
function N2(i) {
  var u = $h(this, 1, 4).week;
  return i == null ? u : this.add((i - u) * 7, "d");
}
Ye("d", 0, "do", "day");
Ye("dd", 0, 0, function(i) {
  return this.localeData().weekdaysMin(this, i);
});
Ye("ddd", 0, 0, function(i) {
  return this.localeData().weekdaysShort(this, i);
});
Ye("dddd", 0, 0, function(i) {
  return this.localeData().weekdays(this, i);
});
Ye("e", 0, 0, "weekday");
Ye("E", 0, 0, "isoWeekday");
Gr("day", "d");
Gr("weekday", "e");
Gr("isoWeekday", "E");
Qr("day", 11);
Qr("weekday", 11);
Qr("isoWeekday", 11);
xe("d", ln);
xe("e", ln);
xe("E", ln);
xe("dd", function(i, u) {
  return u.weekdaysMinRegex(i);
});
xe("ddd", function(i, u) {
  return u.weekdaysShortRegex(i);
});
xe("dddd", function(i, u) {
  return u.weekdaysRegex(i);
});
Kh(["dd", "ddd", "dddd"], function(i, u, c, p) {
  var m = c._locale.weekdaysParse(i, p, c._strict);
  m != null ? u.d = m : ot(c).invalidWeekday = i;
});
Kh(["d", "e", "E"], function(i, u, c, p) {
  u[p] = dt(i);
});
function L2(i, u) {
  return typeof i != "string" ? i : isNaN(i) ? (i = u.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function U2(i, u) {
  return typeof i == "string" ? u.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function XE(i, u) {
  return i.slice(u, 7).concat(i.slice(0, u));
}
var z2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ib = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), A2 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), j2 = Zh, F2 = Zh, H2 = Zh;
function Y2(i, u) {
  var c = tl(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(u) ? "format" : "standalone"];
  return i === !0 ? XE(c, this._week.dow) : i ? c[i.day()] : c;
}
function P2(i) {
  return i === !0 ? XE(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function V2(i) {
  return i === !0 ? XE(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function I2(i, u, c) {
  var p, m, E, g = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], p = 0; p < 7; ++p)
      E = Bl([2e3, 1]).day(p), this._minWeekdaysParse[p] = this.weekdaysMin(
        E,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[p] = this.weekdaysShort(
        E,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[p] = this.weekdays(E, "").toLocaleLowerCase();
  return c ? u === "dddd" ? (m = Mn.call(this._weekdaysParse, g), m !== -1 ? m : null) : u === "ddd" ? (m = Mn.call(this._shortWeekdaysParse, g), m !== -1 ? m : null) : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 ? m : null) : u === "dddd" ? (m = Mn.call(this._weekdaysParse, g), m !== -1 || (m = Mn.call(this._shortWeekdaysParse, g), m !== -1) ? m : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 ? m : null)) : u === "ddd" ? (m = Mn.call(this._shortWeekdaysParse, g), m !== -1 || (m = Mn.call(this._weekdaysParse, g), m !== -1) ? m : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 ? m : null)) : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 || (m = Mn.call(this._weekdaysParse, g), m !== -1) ? m : (m = Mn.call(this._shortWeekdaysParse, g), m !== -1 ? m : null));
}
function B2(i, u, c) {
  var p, m, E;
  if (this._weekdaysParseExact)
    return I2.call(this, i, u, c);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), p = 0; p < 7; p++) {
    if (m = Bl([2e3, 1]).day(p), c && !this._fullWeekdaysParse[p] && (this._fullWeekdaysParse[p] = new RegExp(
      "^" + this.weekdays(m, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[p] = new RegExp(
      "^" + this.weekdaysShort(m, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[p] = new RegExp(
      "^" + this.weekdaysMin(m, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[p] || (E = "^" + this.weekdays(m, "") + "|^" + this.weekdaysShort(m, "") + "|^" + this.weekdaysMin(m, ""), this._weekdaysParse[p] = new RegExp(E.replace(".", ""), "i")), c && u === "dddd" && this._fullWeekdaysParse[p].test(i))
      return p;
    if (c && u === "ddd" && this._shortWeekdaysParse[p].test(i))
      return p;
    if (c && u === "dd" && this._minWeekdaysParse[p].test(i))
      return p;
    if (!c && this._weekdaysParse[p].test(i))
      return p;
  }
}
function W2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var u = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = L2(i, this.localeData()), this.add(i - u, "d")) : u;
}
function $2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var u = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? u : this.add(i - u, "d");
}
function G2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var u = U2(i, this.localeData());
    return this.day(this.day() % 7 ? u : u - 7);
  } else
    return this.day() || 7;
}
function Q2(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || JE.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Rt(this, "_weekdaysRegex") || (this._weekdaysRegex = j2), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function q2(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || JE.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Rt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = F2), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Z2(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || JE.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Rt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = H2), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function JE() {
  function i(z, N) {
    return N.length - z.length;
  }
  var u = [], c = [], p = [], m = [], E, g, D, b, R;
  for (E = 0; E < 7; E++)
    g = Bl([2e3, 1]).day(E), D = ei(this.weekdaysMin(g, "")), b = ei(this.weekdaysShort(g, "")), R = ei(this.weekdays(g, "")), u.push(D), c.push(b), p.push(R), m.push(D), m.push(b), m.push(R);
  u.sort(i), c.sort(i), p.sort(i), m.sort(i), this._weekdaysRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + p.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + u.join("|") + ")",
    "i"
  );
}
function e_() {
  return this.hours() % 12 || 12;
}
function K2() {
  return this.hours() || 24;
}
Ye("H", ["HH", 2], 0, "hour");
Ye("h", ["hh", 2], 0, e_);
Ye("k", ["kk", 2], 0, K2);
Ye("hmm", 0, 0, function() {
  return "" + e_.apply(this) + Il(this.minutes(), 2);
});
Ye("hmmss", 0, 0, function() {
  return "" + e_.apply(this) + Il(this.minutes(), 2) + Il(this.seconds(), 2);
});
Ye("Hmm", 0, 0, function() {
  return "" + this.hours() + Il(this.minutes(), 2);
});
Ye("Hmmss", 0, 0, function() {
  return "" + this.hours() + Il(this.minutes(), 2) + Il(this.seconds(), 2);
});
function lb(i, u) {
  Ye(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      u
    );
  });
}
lb("a", !0);
lb("A", !1);
Gr("hour", "h");
Qr("hour", 13);
function ob(i, u) {
  return u._meridiemParse;
}
xe("a", ob);
xe("A", ob);
xe("H", ln);
xe("h", ln);
xe("k", ln);
xe("HH", ln, ti);
xe("hh", ln, ti);
xe("kk", ln, ti);
xe("hmm", Zx);
xe("hmmss", Kx);
xe("Hmm", Zx);
xe("Hmmss", Kx);
Vt(["H", "HH"], nr);
Vt(["k", "kk"], function(i, u, c) {
  var p = dt(i);
  u[nr] = p === 24 ? 0 : p;
});
Vt(["a", "A"], function(i, u, c) {
  c._isPm = c._locale.isPM(i), c._meridiem = i;
});
Vt(["h", "hh"], function(i, u, c) {
  u[nr] = dt(i), ot(c).bigHour = !0;
});
Vt("hmm", function(i, u, c) {
  var p = i.length - 2;
  u[nr] = dt(i.substr(0, p)), u[el] = dt(i.substr(p)), ot(c).bigHour = !0;
});
Vt("hmmss", function(i, u, c) {
  var p = i.length - 4, m = i.length - 2;
  u[nr] = dt(i.substr(0, p)), u[el] = dt(i.substr(p, 2)), u[Vo] = dt(i.substr(m)), ot(c).bigHour = !0;
});
Vt("Hmm", function(i, u, c) {
  var p = i.length - 2;
  u[nr] = dt(i.substr(0, p)), u[el] = dt(i.substr(p));
});
Vt("Hmmss", function(i, u, c) {
  var p = i.length - 4, m = i.length - 2;
  u[nr] = dt(i.substr(0, p)), u[el] = dt(i.substr(p, 2)), u[Vo] = dt(i.substr(m));
});
function X2(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var J2 = /[ap]\.?m?\.?/i, eU = md("Hours", !0);
function tU(i, u, c) {
  return i > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
}
var ub = {
  calendar: BL,
  longDateFormat: QL,
  invalidDate: ZL,
  ordinal: XL,
  dayOfMonthOrdinalParse: JL,
  relativeTime: t2,
  months: v2,
  monthsShort: Xx,
  week: D2,
  weekdays: z2,
  weekdaysMin: A2,
  weekdaysShort: ib,
  meridiemParse: J2
}, cn = {}, jh = {}, Gh;
function nU(i, u) {
  var c, p = Math.min(i.length, u.length);
  for (c = 0; c < p; c += 1)
    if (i[c] !== u[c])
      return c;
  return p;
}
function lx(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function rU(i) {
  for (var u = 0, c, p, m, E; u < i.length; ) {
    for (E = lx(i[u]).split("-"), c = E.length, p = lx(i[u + 1]), p = p ? p.split("-") : null; c > 0; ) {
      if (m = xg(E.slice(0, c).join("-")), m)
        return m;
      if (p && p.length >= c && nU(E, p) >= c - 1)
        break;
      c--;
    }
    u++;
  }
  return Gh;
}
function aU(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function xg(i) {
  var u = null, c;
  if (cn[i] === void 0 && typeof module < "u" && module && module.exports && aU(i))
    try {
      u = Gh._abbr, c = require, c("./locale/" + i), Xu(u);
    } catch {
      cn[i] = null;
    }
  return cn[i];
}
function Xu(i, u) {
  var c;
  return i && (ja(u) ? c = $o(i) : c = t_(i, u), c ? Gh = c : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Gh._abbr;
}
function t_(i, u) {
  if (u !== null) {
    var c, p = ub;
    if (u.abbr = i, cn[i] != null)
      Bx(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), p = cn[i]._config;
    else if (u.parentLocale != null)
      if (cn[u.parentLocale] != null)
        p = cn[u.parentLocale]._config;
      else if (c = xg(u.parentLocale), c != null)
        p = c._config;
      else
        return jh[u.parentLocale] || (jh[u.parentLocale] = []), jh[u.parentLocale].push({
          name: i,
          config: u
        }), null;
    return cn[i] = new GE(DE(p, u)), jh[i] && jh[i].forEach(function(m) {
      t_(m.name, m.config);
    }), Xu(i), cn[i];
  } else
    return delete cn[i], null;
}
function iU(i, u) {
  if (u != null) {
    var c, p, m = ub;
    cn[i] != null && cn[i].parentLocale != null ? cn[i].set(DE(cn[i]._config, u)) : (p = xg(i), p != null && (m = p._config), u = DE(m, u), p == null && (u.abbr = i), c = new GE(u), c.parentLocale = cn[i], cn[i] = c), Xu(i);
  } else
    cn[i] != null && (cn[i].parentLocale != null ? (cn[i] = cn[i].parentLocale, i === Xu() && Xu(i)) : cn[i] != null && delete cn[i]);
  return cn[i];
}
function $o(i) {
  var u;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Gh;
  if (!tl(i)) {
    if (u = xg(i), u)
      return u;
    i = [i];
  }
  return rU(i);
}
function lU() {
  return kE(cn);
}
function n_(i) {
  var u, c = i._a;
  return c && ot(i).overflow === -2 && (u = c[Po] < 0 || c[Po] > 11 ? Po : c[Vl] < 1 || c[Vl] > Tg(c[$r], c[Po]) ? Vl : c[nr] < 0 || c[nr] > 24 || c[nr] === 24 && (c[el] !== 0 || c[Vo] !== 0 || c[cc] !== 0) ? nr : c[el] < 0 || c[el] > 59 ? el : c[Vo] < 0 || c[Vo] > 59 ? Vo : c[cc] < 0 || c[cc] > 999 ? cc : -1, ot(i)._overflowDayOfYear && (u < $r || u > Vl) && (u = Vl), ot(i)._overflowWeeks && u === -1 && (u = d2), ot(i)._overflowWeekday && u === -1 && (u = p2), ot(i).overflow = u), i;
}
var oU = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, uU = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, sU = /Z|[+-]\d\d(?::?\d\d)?/, Jy = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], fE = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], cU = /^\/?Date\((-?\d+)/i, fU = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, dU = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function sb(i) {
  var u, c, p = i._i, m = oU.exec(p) || uU.exec(p), E, g, D, b, R = Jy.length, z = fE.length;
  if (m) {
    for (ot(i).iso = !0, u = 0, c = R; u < c; u++)
      if (Jy[u][1].exec(m[1])) {
        g = Jy[u][0], E = Jy[u][2] !== !1;
        break;
      }
    if (g == null) {
      i._isValid = !1;
      return;
    }
    if (m[3]) {
      for (u = 0, c = z; u < c; u++)
        if (fE[u][1].exec(m[3])) {
          D = (m[2] || " ") + fE[u][0];
          break;
        }
      if (D == null) {
        i._isValid = !1;
        return;
      }
    }
    if (!E && D != null) {
      i._isValid = !1;
      return;
    }
    if (m[4])
      if (sU.exec(m[4]))
        b = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = g + (D || "") + (b || ""), a_(i);
  } else
    i._isValid = !1;
}
function pU(i, u, c, p, m, E) {
  var g = [
    hU(i),
    Xx.indexOf(u),
    parseInt(c, 10),
    parseInt(p, 10),
    parseInt(m, 10)
  ];
  return E && g.push(parseInt(E, 10)), g;
}
function hU(i) {
  var u = parseInt(i, 10);
  return u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u;
}
function vU(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function mU(i, u, c) {
  if (i) {
    var p = ib.indexOf(i), m = new Date(
      u[0],
      u[1],
      u[2]
    ).getDay();
    if (p !== m)
      return ot(c).weekdayMismatch = !0, c._isValid = !1, !1;
  }
  return !0;
}
function yU(i, u, c) {
  if (i)
    return dU[i];
  if (u)
    return 0;
  var p = parseInt(c, 10), m = p % 100, E = (p - m) / 100;
  return E * 60 + m;
}
function cb(i) {
  var u = fU.exec(vU(i._i)), c;
  if (u) {
    if (c = pU(
      u[4],
      u[3],
      u[2],
      u[5],
      u[6],
      u[7]
    ), !mU(u[1], c, i))
      return;
    i._a = c, i._tzm = yU(u[8], u[9], u[10]), i._d = Wh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), ot(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function gU(i) {
  var u = cU.exec(i._i);
  if (u !== null) {
    i._d = /* @__PURE__ */ new Date(+u[1]);
    return;
  }
  if (sb(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if (cb(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : Se.createFromInputFallback(i);
}
Se.createFromInputFallback = Ci(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(i) {
    i._d = /* @__PURE__ */ new Date(i._i + (i._useUTC ? " UTC" : ""));
  }
);
function fd(i, u, c) {
  return i ?? u ?? c;
}
function SU(i) {
  var u = new Date(Se.now());
  return i._useUTC ? [
    u.getUTCFullYear(),
    u.getUTCMonth(),
    u.getUTCDate()
  ] : [u.getFullYear(), u.getMonth(), u.getDate()];
}
function r_(i) {
  var u, c, p = [], m, E, g;
  if (!i._d) {
    for (m = SU(i), i._w && i._a[Vl] == null && i._a[Po] == null && EU(i), i._dayOfYear != null && (g = fd(i._a[$r], m[$r]), (i._dayOfYear > Vh(g) || i._dayOfYear === 0) && (ot(i)._overflowDayOfYear = !0), c = Wh(g, 0, i._dayOfYear), i._a[Po] = c.getUTCMonth(), i._a[Vl] = c.getUTCDate()), u = 0; u < 3 && i._a[u] == null; ++u)
      i._a[u] = p[u] = m[u];
    for (; u < 7; u++)
      i._a[u] = p[u] = i._a[u] == null ? u === 2 ? 1 : 0 : i._a[u];
    i._a[nr] === 24 && i._a[el] === 0 && i._a[Vo] === 0 && i._a[cc] === 0 && (i._nextDay = !0, i._a[nr] = 0), i._d = (i._useUTC ? Wh : b2).apply(
      null,
      p
    ), E = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[nr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== E && (ot(i).weekdayMismatch = !0);
  }
}
function EU(i) {
  var u, c, p, m, E, g, D, b, R;
  u = i._w, u.GG != null || u.W != null || u.E != null ? (E = 1, g = 4, c = fd(
    u.GG,
    i._a[$r],
    $h(an(), 1, 4).year
  ), p = fd(u.W, 1), m = fd(u.E, 1), (m < 1 || m > 7) && (b = !0)) : (E = i._locale._week.dow, g = i._locale._week.doy, R = $h(an(), E, g), c = fd(u.gg, i._a[$r], R.year), p = fd(u.w, R.week), u.d != null ? (m = u.d, (m < 0 || m > 6) && (b = !0)) : u.e != null ? (m = u.e + E, (u.e < 0 || u.e > 6) && (b = !0)) : m = E), p < 1 || p > Io(c, E, g) ? ot(i)._overflowWeeks = !0 : b != null ? ot(i)._overflowWeekday = !0 : (D = ab(c, p, m, E, g), i._a[$r] = D.year, i._dayOfYear = D.dayOfYear);
}
Se.ISO_8601 = function() {
};
Se.RFC_2822 = function() {
};
function a_(i) {
  if (i._f === Se.ISO_8601) {
    sb(i);
    return;
  }
  if (i._f === Se.RFC_2822) {
    cb(i);
    return;
  }
  i._a = [], ot(i).empty = !0;
  var u = "" + i._i, c, p, m, E, g, D = u.length, b = 0, R, z;
  for (m = Wx(i._f, i._locale).match(QE) || [], z = m.length, c = 0; c < z; c++)
    E = m[c], p = (u.match(s2(E, i)) || [])[0], p && (g = u.substr(0, u.indexOf(p)), g.length > 0 && ot(i).unusedInput.push(g), u = u.slice(
      u.indexOf(p) + p.length
    ), b += p.length), pd[E] ? (p ? ot(i).empty = !1 : ot(i).unusedTokens.push(E), f2(E, p, i)) : i._strict && !p && ot(i).unusedTokens.push(E);
  ot(i).charsLeftOver = D - b, u.length > 0 && ot(i).unusedInput.push(u), i._a[nr] <= 12 && ot(i).bigHour === !0 && i._a[nr] > 0 && (ot(i).bigHour = void 0), ot(i).parsedDateParts = i._a.slice(0), ot(i).meridiem = i._meridiem, i._a[nr] = _U(
    i._locale,
    i._a[nr],
    i._meridiem
  ), R = ot(i).era, R !== null && (i._a[$r] = i._locale.erasConvertYear(R, i._a[$r])), r_(i), n_(i);
}
function _U(i, u, c) {
  var p;
  return c == null ? u : i.meridiemHour != null ? i.meridiemHour(u, c) : (i.isPM != null && (p = i.isPM(c), p && u < 12 && (u += 12), !p && u === 12 && (u = 0)), u);
}
function wU(i) {
  var u, c, p, m, E, g, D = !1, b = i._f.length;
  if (b === 0) {
    ot(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (m = 0; m < b; m++)
    E = 0, g = !1, u = $E({}, i), i._useUTC != null && (u._useUTC = i._useUTC), u._f = i._f[m], a_(u), WE(u) && (g = !0), E += ot(u).charsLeftOver, E += ot(u).unusedTokens.length * 10, ot(u).score = E, D ? E < p && (p = E, c = u) : (p == null || E < p || g) && (p = E, c = u, g && (D = !0));
  Zu(i, c || u);
}
function CU(i) {
  if (!i._d) {
    var u = qE(i._i), c = u.day === void 0 ? u.date : u.day;
    i._a = Vx(
      [u.year, u.month, c, u.hour, u.minute, u.second, u.millisecond],
      function(p) {
        return p && parseInt(p, 10);
      }
    ), r_(i);
  }
}
function TU(i) {
  var u = new qh(n_(fb(i)));
  return u._nextDay && (u.add(1, "d"), u._nextDay = void 0), u;
}
function fb(i) {
  var u = i._i, c = i._f;
  return i._locale = i._locale || $o(i._l), u === null || c === void 0 && u === "" ? yg({ nullInput: !0 }) : (typeof u == "string" && (i._i = u = i._locale.preparse(u)), nl(u) ? new qh(n_(u)) : (Qh(u) ? i._d = u : tl(c) ? wU(i) : c ? a_(i) : xU(i), WE(i) || (i._d = null), i));
}
function xU(i) {
  var u = i._i;
  ja(u) ? i._d = new Date(Se.now()) : Qh(u) ? i._d = new Date(u.valueOf()) : typeof u == "string" ? gU(i) : tl(u) ? (i._a = Vx(u.slice(0), function(c) {
    return parseInt(c, 10);
  }), r_(i)) : fc(u) ? CU(i) : Bo(u) ? i._d = new Date(u) : Se.createFromInputFallback(i);
}
function db(i, u, c, p, m) {
  var E = {};
  return (u === !0 || u === !1) && (p = u, u = void 0), (c === !0 || c === !1) && (p = c, c = void 0), (fc(i) && BE(i) || tl(i) && i.length === 0) && (i = void 0), E._isAMomentObject = !0, E._useUTC = E._isUTC = m, E._l = c, E._i = i, E._f = u, E._strict = p, TU(E);
}
function an(i, u, c, p) {
  return db(i, u, c, p, !1);
}
var bU = Ci(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = an.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : yg();
  }
), RU = Ci(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = an.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : yg();
  }
);
function pb(i, u) {
  var c, p;
  if (u.length === 1 && tl(u[0]) && (u = u[0]), !u.length)
    return an();
  for (c = u[0], p = 1; p < u.length; ++p)
    (!u[p].isValid() || u[p][i](c)) && (c = u[p]);
  return c;
}
function DU() {
  var i = [].slice.call(arguments, 0);
  return pb("isBefore", i);
}
function kU() {
  var i = [].slice.call(arguments, 0);
  return pb("isAfter", i);
}
var MU = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Fh = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function OU(i) {
  var u, c = !1, p, m = Fh.length;
  for (u in i)
    if (Rt(i, u) && !(Mn.call(Fh, u) !== -1 && (i[u] == null || !isNaN(i[u]))))
      return !1;
  for (p = 0; p < m; ++p)
    if (i[Fh[p]]) {
      if (c)
        return !1;
      parseFloat(i[Fh[p]]) !== dt(i[Fh[p]]) && (c = !0);
    }
  return !0;
}
function NU() {
  return this._isValid;
}
function LU() {
  return rl(NaN);
}
function bg(i) {
  var u = qE(i), c = u.year || 0, p = u.quarter || 0, m = u.month || 0, E = u.week || u.isoWeek || 0, g = u.day || 0, D = u.hour || 0, b = u.minute || 0, R = u.second || 0, z = u.millisecond || 0;
  this._isValid = OU(u), this._milliseconds = +z + R * 1e3 + // 1000
  b * 6e4 + // 1000 * 60
  D * 1e3 * 60 * 60, this._days = +g + E * 7, this._months = +m + p * 3 + c * 12, this._data = {}, this._locale = $o(), this._bubble();
}
function ig(i) {
  return i instanceof bg;
}
function OE(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function UU(i, u, c) {
  var p = Math.min(i.length, u.length), m = Math.abs(i.length - u.length), E = 0, g;
  for (g = 0; g < p; g++)
    (c && i[g] !== u[g] || !c && dt(i[g]) !== dt(u[g])) && E++;
  return E + m;
}
function hb(i, u) {
  Ye(i, 0, 0, function() {
    var c = this.utcOffset(), p = "+";
    return c < 0 && (c = -c, p = "-"), p + Il(~~(c / 60), 2) + u + Il(~~c % 60, 2);
  });
}
hb("Z", ":");
hb("ZZ", "");
xe("Z", Cg);
xe("ZZ", Cg);
Vt(["Z", "ZZ"], function(i, u, c) {
  c._useUTC = !0, c._tzm = i_(Cg, i);
});
var zU = /([\+\-]|\d\d)/gi;
function i_(i, u) {
  var c = (u || "").match(i), p, m, E;
  return c === null ? null : (p = c[c.length - 1] || [], m = (p + "").match(zU) || ["-", 0, 0], E = +(m[1] * 60) + dt(m[2]), E === 0 ? 0 : m[0] === "+" ? E : -E);
}
function l_(i, u) {
  var c, p;
  return u._isUTC ? (c = u.clone(), p = (nl(i) || Qh(i) ? i.valueOf() : an(i).valueOf()) - c.valueOf(), c._d.setTime(c._d.valueOf() + p), Se.updateOffset(c, !1), c) : an(i).local();
}
function NE(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
Se.updateOffset = function() {
};
function AU(i, u, c) {
  var p = this._offset || 0, m;
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    if (typeof i == "string") {
      if (i = i_(Cg, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !c && (i = i * 60);
    return !this._isUTC && u && (m = NE(this)), this._offset = i, this._isUTC = !0, m != null && this.add(m, "m"), p !== i && (!u || this._changeInProgress ? yb(
      this,
      rl(i - p, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, Se.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? p : NE(this);
}
function jU(i, u) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, u), this) : -this.utcOffset();
}
function FU(i) {
  return this.utcOffset(0, i);
}
function HU(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(NE(this), "m")), this;
}
function YU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = i_(o2, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function PU(i) {
  return this.isValid() ? (i = i ? an(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function VU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function IU() {
  if (!ja(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, u;
  return $E(i, this), i = fb(i), i._a ? (u = i._isUTC ? Bl(i._a) : an(i._a), this._isDSTShifted = this.isValid() && UU(i._a, u.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function BU() {
  return this.isValid() ? !this._isUTC : !1;
}
function WU() {
  return this.isValid() ? this._isUTC : !1;
}
function vb() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var $U = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, GU = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function rl(i, u) {
  var c = i, p = null, m, E, g;
  return ig(i) ? c = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : Bo(i) || !isNaN(+i) ? (c = {}, u ? c[u] = +i : c.milliseconds = +i) : (p = $U.exec(i)) ? (m = p[1] === "-" ? -1 : 1, c = {
    y: 0,
    d: dt(p[Vl]) * m,
    h: dt(p[nr]) * m,
    m: dt(p[el]) * m,
    s: dt(p[Vo]) * m,
    ms: dt(OE(p[cc] * 1e3)) * m
    // the millisecond decimal point is included in the match
  }) : (p = GU.exec(i)) ? (m = p[1] === "-" ? -1 : 1, c = {
    y: sc(p[2], m),
    M: sc(p[3], m),
    w: sc(p[4], m),
    d: sc(p[5], m),
    h: sc(p[6], m),
    m: sc(p[7], m),
    s: sc(p[8], m)
  }) : c == null ? c = {} : typeof c == "object" && ("from" in c || "to" in c) && (g = QU(
    an(c.from),
    an(c.to)
  ), c = {}, c.ms = g.milliseconds, c.M = g.months), E = new bg(c), ig(i) && Rt(i, "_locale") && (E._locale = i._locale), ig(i) && Rt(i, "_isValid") && (E._isValid = i._isValid), E;
}
rl.fn = bg.prototype;
rl.invalid = LU;
function sc(i, u) {
  var c = i && parseFloat(i.replace(",", "."));
  return (isNaN(c) ? 0 : c) * u;
}
function ox(i, u) {
  var c = {};
  return c.months = u.month() - i.month() + (u.year() - i.year()) * 12, i.clone().add(c.months, "M").isAfter(u) && --c.months, c.milliseconds = +u - +i.clone().add(c.months, "M"), c;
}
function QU(i, u) {
  var c;
  return i.isValid() && u.isValid() ? (u = l_(u, i), i.isBefore(u) ? c = ox(i, u) : (c = ox(u, i), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
}
function mb(i, u) {
  return function(c, p) {
    var m, E;
    return p !== null && !isNaN(+p) && (Bx(
      u,
      "moment()." + u + "(period, number) is deprecated. Please use moment()." + u + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), E = c, c = p, p = E), m = rl(c, p), yb(this, m, i), this;
  };
}
function yb(i, u, c, p) {
  var m = u._milliseconds, E = OE(u._days), g = OE(u._months);
  i.isValid() && (p = p ?? !0, g && eb(i, ug(i, "Month") + g * c), E && Gx(i, "Date", ug(i, "Date") + E * c), m && i._d.setTime(i._d.valueOf() + m * c), p && Se.updateOffset(i, E || g));
}
var qU = mb(1, "add"), ZU = mb(-1, "subtract");
function gb(i) {
  return typeof i == "string" || i instanceof String;
}
function KU(i) {
  return nl(i) || Qh(i) || gb(i) || Bo(i) || JU(i) || XU(i) || i === null || i === void 0;
}
function XU(i) {
  var u = fc(i) && !BE(i), c = !1, p = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], m, E, g = p.length;
  for (m = 0; m < g; m += 1)
    E = p[m], c = c || Rt(i, E);
  return u && c;
}
function JU(i) {
  var u = tl(i), c = !1;
  return u && (c = i.filter(function(p) {
    return !Bo(p) && gb(i);
  }).length === 0), u && c;
}
function ez(i) {
  var u = fc(i) && !BE(i), c = !1, p = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], m, E;
  for (m = 0; m < p.length; m += 1)
    E = p[m], c = c || Rt(i, E);
  return u && c;
}
function tz(i, u) {
  var c = i.diff(u, "days", !0);
  return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
}
function nz(i, u) {
  arguments.length === 1 && (arguments[0] ? KU(arguments[0]) ? (i = arguments[0], u = void 0) : ez(arguments[0]) && (u = arguments[0], i = void 0) : (i = void 0, u = void 0));
  var c = i || an(), p = l_(c, this).startOf("day"), m = Se.calendarFormat(this, p) || "sameElse", E = u && (Wl(u[m]) ? u[m].call(this, c) : u[m]);
  return this.format(
    E || this.localeData().calendar(m, this, an(c))
  );
}
function rz() {
  return new qh(this);
}
function az(i, u) {
  var c = nl(i) ? i : an(i);
  return this.isValid() && c.isValid() ? (u = Ti(u) || "millisecond", u === "millisecond" ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(u).valueOf()) : !1;
}
function iz(i, u) {
  var c = nl(i) ? i : an(i);
  return this.isValid() && c.isValid() ? (u = Ti(u) || "millisecond", u === "millisecond" ? this.valueOf() < c.valueOf() : this.clone().endOf(u).valueOf() < c.valueOf()) : !1;
}
function lz(i, u, c, p) {
  var m = nl(i) ? i : an(i), E = nl(u) ? u : an(u);
  return this.isValid() && m.isValid() && E.isValid() ? (p = p || "()", (p[0] === "(" ? this.isAfter(m, c) : !this.isBefore(m, c)) && (p[1] === ")" ? this.isBefore(E, c) : !this.isAfter(E, c))) : !1;
}
function oz(i, u) {
  var c = nl(i) ? i : an(i), p;
  return this.isValid() && c.isValid() ? (u = Ti(u) || "millisecond", u === "millisecond" ? this.valueOf() === c.valueOf() : (p = c.valueOf(), this.clone().startOf(u).valueOf() <= p && p <= this.clone().endOf(u).valueOf())) : !1;
}
function uz(i, u) {
  return this.isSame(i, u) || this.isAfter(i, u);
}
function sz(i, u) {
  return this.isSame(i, u) || this.isBefore(i, u);
}
function cz(i, u, c) {
  var p, m, E;
  if (!this.isValid())
    return NaN;
  if (p = l_(i, this), !p.isValid())
    return NaN;
  switch (m = (p.utcOffset() - this.utcOffset()) * 6e4, u = Ti(u), u) {
    case "year":
      E = lg(this, p) / 12;
      break;
    case "month":
      E = lg(this, p);
      break;
    case "quarter":
      E = lg(this, p) / 3;
      break;
    case "second":
      E = (this - p) / 1e3;
      break;
    case "minute":
      E = (this - p) / 6e4;
      break;
    case "hour":
      E = (this - p) / 36e5;
      break;
    case "day":
      E = (this - p - m) / 864e5;
      break;
    case "week":
      E = (this - p - m) / 6048e5;
      break;
    default:
      E = this - p;
  }
  return c ? E : wi(E);
}
function lg(i, u) {
  if (i.date() < u.date())
    return -lg(u, i);
  var c = (u.year() - i.year()) * 12 + (u.month() - i.month()), p = i.clone().add(c, "months"), m, E;
  return u - p < 0 ? (m = i.clone().add(c - 1, "months"), E = (u - p) / (p - m)) : (m = i.clone().add(c + 1, "months"), E = (u - p) / (m - p)), -(c + E) || 0;
}
Se.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
Se.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function fz() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function dz(i) {
  if (!this.isValid())
    return null;
  var u = i !== !0, c = u ? this.clone().utc() : this;
  return c.year() < 0 || c.year() > 9999 ? ag(
    c,
    u ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Wl(Date.prototype.toISOString) ? u ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ag(c, "Z")) : ag(
    c,
    u ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function pz() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", u = "", c, p, m, E;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", u = "Z"), c = "[" + i + '("]', p = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", m = "-MM-DD[T]HH:mm:ss.SSS", E = u + '[")]', this.format(c + p + m + E);
}
function hz(i) {
  i || (i = this.isUtc() ? Se.defaultFormatUtc : Se.defaultFormat);
  var u = ag(this, i);
  return this.localeData().postformat(u);
}
function vz(i, u) {
  return this.isValid() && (nl(i) && i.isValid() || an(i).isValid()) ? rl({ to: this, from: i }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
}
function mz(i) {
  return this.from(an(), i);
}
function yz(i, u) {
  return this.isValid() && (nl(i) && i.isValid() || an(i).isValid()) ? rl({ from: this, to: i }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
}
function gz(i) {
  return this.to(an(), i);
}
function Sb(i) {
  var u;
  return i === void 0 ? this._locale._abbr : (u = $o(i), u != null && (this._locale = u), this);
}
var Eb = Ci(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function _b() {
  return this._locale;
}
var fg = 1e3, hd = 60 * fg, dg = 60 * hd, wb = (365 * 400 + 97) * 24 * dg;
function vd(i, u) {
  return (i % u + u) % u;
}
function Cb(i, u, c) {
  return i < 100 && i >= 0 ? new Date(i + 400, u, c) - wb : new Date(i, u, c).valueOf();
}
function Tb(i, u, c) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, u, c) - wb : Date.UTC(i, u, c);
}
function Sz(i) {
  var u, c;
  if (i = Ti(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? Tb : Cb, i) {
    case "year":
      u = c(this.year(), 0, 1);
      break;
    case "quarter":
      u = c(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      u = c(this.year(), this.month(), 1);
      break;
    case "week":
      u = c(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      u = c(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      u = c(this.year(), this.month(), this.date());
      break;
    case "hour":
      u = this._d.valueOf(), u -= vd(
        u + (this._isUTC ? 0 : this.utcOffset() * hd),
        dg
      );
      break;
    case "minute":
      u = this._d.valueOf(), u -= vd(u, hd);
      break;
    case "second":
      u = this._d.valueOf(), u -= vd(u, fg);
      break;
  }
  return this._d.setTime(u), Se.updateOffset(this, !0), this;
}
function Ez(i) {
  var u, c;
  if (i = Ti(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? Tb : Cb, i) {
    case "year":
      u = c(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      u = c(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      u = c(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      u = c(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      u = c(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      u = c(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      u = this._d.valueOf(), u += dg - vd(
        u + (this._isUTC ? 0 : this.utcOffset() * hd),
        dg
      ) - 1;
      break;
    case "minute":
      u = this._d.valueOf(), u += hd - vd(u, hd) - 1;
      break;
    case "second":
      u = this._d.valueOf(), u += fg - vd(u, fg) - 1;
      break;
  }
  return this._d.setTime(u), Se.updateOffset(this, !0), this;
}
function _z() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function wz() {
  return Math.floor(this.valueOf() / 1e3);
}
function Cz() {
  return new Date(this.valueOf());
}
function Tz() {
  var i = this;
  return [
    i.year(),
    i.month(),
    i.date(),
    i.hour(),
    i.minute(),
    i.second(),
    i.millisecond()
  ];
}
function xz() {
  var i = this;
  return {
    years: i.year(),
    months: i.month(),
    date: i.date(),
    hours: i.hours(),
    minutes: i.minutes(),
    seconds: i.seconds(),
    milliseconds: i.milliseconds()
  };
}
function bz() {
  return this.isValid() ? this.toISOString() : null;
}
function Rz() {
  return WE(this);
}
function Dz() {
  return Zu({}, ot(this));
}
function kz() {
  return ot(this).overflow;
}
function Mz() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Ye("N", 0, 0, "eraAbbr");
Ye("NN", 0, 0, "eraAbbr");
Ye("NNN", 0, 0, "eraAbbr");
Ye("NNNN", 0, 0, "eraName");
Ye("NNNNN", 0, 0, "eraNarrow");
Ye("y", ["y", 1], "yo", "eraYear");
Ye("y", ["yy", 2], 0, "eraYear");
Ye("y", ["yyy", 3], 0, "eraYear");
Ye("y", ["yyyy", 4], 0, "eraYear");
xe("N", o_);
xe("NN", o_);
xe("NNN", o_);
xe("NNNN", Pz);
xe("NNNNN", Vz);
Vt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, u, c, p) {
    var m = c._locale.erasParse(i, p, c._strict);
    m ? ot(c).era = m : ot(c).invalidEra = i;
  }
);
xe("y", yd);
xe("yy", yd);
xe("yyy", yd);
xe("yyyy", yd);
xe("yo", Iz);
Vt(["y", "yy", "yyy", "yyyy"], $r);
Vt(["yo"], function(i, u, c, p) {
  var m;
  c._locale._eraYearOrdinalRegex && (m = i.match(c._locale._eraYearOrdinalRegex)), c._locale.eraYearOrdinalParse ? u[$r] = c._locale.eraYearOrdinalParse(i, m) : u[$r] = parseInt(i, 10);
});
function Oz(i, u) {
  var c, p, m, E = this._eras || $o("en")._eras;
  for (c = 0, p = E.length; c < p; ++c) {
    switch (typeof E[c].since) {
      case "string":
        m = Se(E[c].since).startOf("day"), E[c].since = m.valueOf();
        break;
    }
    switch (typeof E[c].until) {
      case "undefined":
        E[c].until = 1 / 0;
        break;
      case "string":
        m = Se(E[c].until).startOf("day").valueOf(), E[c].until = m.valueOf();
        break;
    }
  }
  return E;
}
function Nz(i, u, c) {
  var p, m, E = this.eras(), g, D, b;
  for (i = i.toUpperCase(), p = 0, m = E.length; p < m; ++p)
    if (g = E[p].name.toUpperCase(), D = E[p].abbr.toUpperCase(), b = E[p].narrow.toUpperCase(), c)
      switch (u) {
        case "N":
        case "NN":
        case "NNN":
          if (D === i)
            return E[p];
          break;
        case "NNNN":
          if (g === i)
            return E[p];
          break;
        case "NNNNN":
          if (b === i)
            return E[p];
          break;
      }
    else if ([g, D, b].indexOf(i) >= 0)
      return E[p];
}
function Lz(i, u) {
  var c = i.since <= i.until ? 1 : -1;
  return u === void 0 ? Se(i.since).year() : Se(i.since).year() + (u - i.offset) * c;
}
function Uz() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].name;
  return "";
}
function zz() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].narrow;
  return "";
}
function Az() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].abbr;
  return "";
}
function jz() {
  var i, u, c, p, m = this.localeData().eras();
  for (i = 0, u = m.length; i < u; ++i)
    if (c = m[i].since <= m[i].until ? 1 : -1, p = this.clone().startOf("day").valueOf(), m[i].since <= p && p <= m[i].until || m[i].until <= p && p <= m[i].since)
      return (this.year() - Se(m[i].since).year()) * c + m[i].offset;
  return this.year();
}
function Fz(i) {
  return Rt(this, "_erasNameRegex") || u_.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function Hz(i) {
  return Rt(this, "_erasAbbrRegex") || u_.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function Yz(i) {
  return Rt(this, "_erasNarrowRegex") || u_.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function o_(i, u) {
  return u.erasAbbrRegex(i);
}
function Pz(i, u) {
  return u.erasNameRegex(i);
}
function Vz(i, u) {
  return u.erasNarrowRegex(i);
}
function Iz(i, u) {
  return u._eraYearOrdinalRegex || yd;
}
function u_() {
  var i = [], u = [], c = [], p = [], m, E, g = this.eras();
  for (m = 0, E = g.length; m < E; ++m)
    u.push(ei(g[m].name)), i.push(ei(g[m].abbr)), c.push(ei(g[m].narrow)), p.push(ei(g[m].name)), p.push(ei(g[m].abbr)), p.push(ei(g[m].narrow));
  this._erasRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  );
}
Ye(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Ye(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Rg(i, u) {
  Ye(0, [i, i.length], 0, u);
}
Rg("gggg", "weekYear");
Rg("ggggg", "weekYear");
Rg("GGGG", "isoWeekYear");
Rg("GGGGG", "isoWeekYear");
Gr("weekYear", "gg");
Gr("isoWeekYear", "GG");
Qr("weekYear", 1);
Qr("isoWeekYear", 1);
xe("G", wg);
xe("g", wg);
xe("GG", ln, ti);
xe("gg", ln, ti);
xe("GGGG", KE, ZE);
xe("gggg", KE, ZE);
xe("GGGGG", _g, Sg);
xe("ggggg", _g, Sg);
Kh(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, u, c, p) {
    u[p.substr(0, 2)] = dt(i);
  }
);
Kh(["gg", "GG"], function(i, u, c, p) {
  u[p] = Se.parseTwoDigitYear(i);
});
function Bz(i) {
  return xb.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Wz(i) {
  return xb.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function $z() {
  return Io(this.year(), 1, 4);
}
function Gz() {
  return Io(this.isoWeekYear(), 1, 4);
}
function Qz() {
  var i = this.localeData()._week;
  return Io(this.year(), i.dow, i.doy);
}
function qz() {
  var i = this.localeData()._week;
  return Io(this.weekYear(), i.dow, i.doy);
}
function xb(i, u, c, p, m) {
  var E;
  return i == null ? $h(this, p, m).year : (E = Io(i, p, m), u > E && (u = E), Zz.call(this, i, u, c, p, m));
}
function Zz(i, u, c, p, m) {
  var E = ab(i, u, c, p, m), g = Wh(E.year, 0, E.dayOfYear);
  return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
}
Ye("Q", 0, "Qo", "quarter");
Gr("quarter", "Q");
Qr("quarter", 7);
xe("Q", Qx);
Vt("Q", function(i, u) {
  u[Po] = (dt(i) - 1) * 3;
});
function Kz(i) {
  return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3);
}
Ye("D", ["DD", 2], "Do", "date");
Gr("date", "D");
Qr("date", 9);
xe("D", ln);
xe("DD", ln, ti);
xe("Do", function(i, u) {
  return i ? u._dayOfMonthOrdinalParse || u._ordinalParse : u._dayOfMonthOrdinalParseLenient;
});
Vt(["D", "DD"], Vl);
Vt("Do", function(i, u) {
  u[Vl] = dt(i.match(ln)[0]);
});
var bb = md("Date", !0);
Ye("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Gr("dayOfYear", "DDD");
Qr("dayOfYear", 4);
xe("DDD", Eg);
xe("DDDD", qx);
Vt(["DDD", "DDDD"], function(i, u, c) {
  c._dayOfYear = dt(i);
});
function Xz(i) {
  var u = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return i == null ? u : this.add(i - u, "d");
}
Ye("m", ["mm", 2], 0, "minute");
Gr("minute", "m");
Qr("minute", 14);
xe("m", ln);
xe("mm", ln, ti);
Vt(["m", "mm"], el);
var Jz = md("Minutes", !1);
Ye("s", ["ss", 2], 0, "second");
Gr("second", "s");
Qr("second", 15);
xe("s", ln);
xe("ss", ln, ti);
Vt(["s", "ss"], Vo);
var eA = md("Seconds", !1);
Ye("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Ye(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Ye(0, ["SSS", 3], 0, "millisecond");
Ye(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Ye(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Ye(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Ye(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Ye(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Ye(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Gr("millisecond", "ms");
Qr("millisecond", 16);
xe("S", Eg, Qx);
xe("SS", Eg, ti);
xe("SSS", Eg, qx);
var Ku, Rb;
for (Ku = "SSSS"; Ku.length <= 9; Ku += "S")
  xe(Ku, yd);
function tA(i, u) {
  u[cc] = dt(("0." + i) * 1e3);
}
for (Ku = "S"; Ku.length <= 9; Ku += "S")
  Vt(Ku, tA);
Rb = md("Milliseconds", !1);
Ye("z", 0, 0, "zoneAbbr");
Ye("zz", 0, 0, "zoneName");
function nA() {
  return this._isUTC ? "UTC" : "";
}
function rA() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var le = qh.prototype;
le.add = qU;
le.calendar = nz;
le.clone = rz;
le.diff = cz;
le.endOf = Ez;
le.format = hz;
le.from = vz;
le.fromNow = mz;
le.to = yz;
le.toNow = gz;
le.get = i2;
le.invalidAt = kz;
le.isAfter = az;
le.isBefore = iz;
le.isBetween = lz;
le.isSame = oz;
le.isSameOrAfter = uz;
le.isSameOrBefore = sz;
le.isValid = Rz;
le.lang = Eb;
le.locale = Sb;
le.localeData = _b;
le.max = RU;
le.min = bU;
le.parsingFlags = Dz;
le.set = l2;
le.startOf = Sz;
le.subtract = ZU;
le.toArray = Tz;
le.toObject = xz;
le.toDate = Cz;
le.toISOString = dz;
le.inspect = pz;
typeof Symbol < "u" && Symbol.for != null && (le[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
le.toJSON = bz;
le.toString = fz;
le.unix = wz;
le.valueOf = _z;
le.creationData = Mz;
le.eraName = Uz;
le.eraNarrow = zz;
le.eraAbbr = Az;
le.eraYear = jz;
le.year = rb;
le.isLeapYear = x2;
le.weekYear = Bz;
le.isoWeekYear = Wz;
le.quarter = le.quarters = Kz;
le.month = tb;
le.daysInMonth = w2;
le.week = le.weeks = O2;
le.isoWeek = le.isoWeeks = N2;
le.weeksInYear = Qz;
le.weeksInWeekYear = qz;
le.isoWeeksInYear = $z;
le.isoWeeksInISOWeekYear = Gz;
le.date = bb;
le.day = le.days = W2;
le.weekday = $2;
le.isoWeekday = G2;
le.dayOfYear = Xz;
le.hour = le.hours = eU;
le.minute = le.minutes = Jz;
le.second = le.seconds = eA;
le.millisecond = le.milliseconds = Rb;
le.utcOffset = AU;
le.utc = FU;
le.local = HU;
le.parseZone = YU;
le.hasAlignedHourOffset = PU;
le.isDST = VU;
le.isLocal = BU;
le.isUtcOffset = WU;
le.isUtc = vb;
le.isUTC = vb;
le.zoneAbbr = nA;
le.zoneName = rA;
le.dates = Ci(
  "dates accessor is deprecated. Use date instead.",
  bb
);
le.months = Ci(
  "months accessor is deprecated. Use month instead",
  tb
);
le.years = Ci(
  "years accessor is deprecated. Use year instead",
  rb
);
le.zone = Ci(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  jU
);
le.isDSTShifted = Ci(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  IU
);
function aA(i) {
  return an(i * 1e3);
}
function iA() {
  return an.apply(null, arguments).parseZone();
}
function Db(i) {
  return i;
}
var Dt = GE.prototype;
Dt.calendar = WL;
Dt.longDateFormat = qL;
Dt.invalidDate = KL;
Dt.ordinal = e2;
Dt.preparse = Db;
Dt.postformat = Db;
Dt.relativeTime = n2;
Dt.pastFuture = r2;
Dt.set = IL;
Dt.eras = Oz;
Dt.erasParse = Nz;
Dt.erasConvertYear = Lz;
Dt.erasAbbrRegex = Hz;
Dt.erasNameRegex = Fz;
Dt.erasNarrowRegex = Yz;
Dt.months = g2;
Dt.monthsShort = S2;
Dt.monthsParse = _2;
Dt.monthsRegex = T2;
Dt.monthsShortRegex = C2;
Dt.week = R2;
Dt.firstDayOfYear = M2;
Dt.firstDayOfWeek = k2;
Dt.weekdays = Y2;
Dt.weekdaysMin = V2;
Dt.weekdaysShort = P2;
Dt.weekdaysParse = B2;
Dt.weekdaysRegex = Q2;
Dt.weekdaysShortRegex = q2;
Dt.weekdaysMinRegex = Z2;
Dt.isPM = X2;
Dt.meridiem = tU;
function pg(i, u, c, p) {
  var m = $o(), E = Bl().set(p, u);
  return m[c](E, i);
}
function kb(i, u, c) {
  if (Bo(i) && (u = i, i = void 0), i = i || "", u != null)
    return pg(i, u, c, "month");
  var p, m = [];
  for (p = 0; p < 12; p++)
    m[p] = pg(i, p, c, "month");
  return m;
}
function s_(i, u, c, p) {
  typeof i == "boolean" ? (Bo(u) && (c = u, u = void 0), u = u || "") : (u = i, c = u, i = !1, Bo(u) && (c = u, u = void 0), u = u || "");
  var m = $o(), E = i ? m._week.dow : 0, g, D = [];
  if (c != null)
    return pg(u, (c + E) % 7, p, "day");
  for (g = 0; g < 7; g++)
    D[g] = pg(u, (g + E) % 7, p, "day");
  return D;
}
function lA(i, u) {
  return kb(i, u, "months");
}
function oA(i, u) {
  return kb(i, u, "monthsShort");
}
function uA(i, u, c) {
  return s_(i, u, c, "weekdays");
}
function sA(i, u, c) {
  return s_(i, u, c, "weekdaysShort");
}
function cA(i, u, c) {
  return s_(i, u, c, "weekdaysMin");
}
Xu("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(i) {
    var u = i % 10, c = dt(i % 100 / 10) === 1 ? "th" : u === 1 ? "st" : u === 2 ? "nd" : u === 3 ? "rd" : "th";
    return i + c;
  }
});
Se.lang = Ci(
  "moment.lang is deprecated. Use moment.locale instead.",
  Xu
);
Se.langData = Ci(
  "moment.langData is deprecated. Use moment.localeData instead.",
  $o
);
var Ho = Math.abs;
function fA() {
  var i = this._data;
  return this._milliseconds = Ho(this._milliseconds), this._days = Ho(this._days), this._months = Ho(this._months), i.milliseconds = Ho(i.milliseconds), i.seconds = Ho(i.seconds), i.minutes = Ho(i.minutes), i.hours = Ho(i.hours), i.months = Ho(i.months), i.years = Ho(i.years), this;
}
function Mb(i, u, c, p) {
  var m = rl(u, c);
  return i._milliseconds += p * m._milliseconds, i._days += p * m._days, i._months += p * m._months, i._bubble();
}
function dA(i, u) {
  return Mb(this, i, u, 1);
}
function pA(i, u) {
  return Mb(this, i, u, -1);
}
function ux(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function hA() {
  var i = this._milliseconds, u = this._days, c = this._months, p = this._data, m, E, g, D, b;
  return i >= 0 && u >= 0 && c >= 0 || i <= 0 && u <= 0 && c <= 0 || (i += ux(LE(c) + u) * 864e5, u = 0, c = 0), p.milliseconds = i % 1e3, m = wi(i / 1e3), p.seconds = m % 60, E = wi(m / 60), p.minutes = E % 60, g = wi(E / 60), p.hours = g % 24, u += wi(g / 24), b = wi(Ob(u)), c += b, u -= ux(LE(b)), D = wi(c / 12), c %= 12, p.days = u, p.months = c, p.years = D, this;
}
function Ob(i) {
  return i * 4800 / 146097;
}
function LE(i) {
  return i * 146097 / 4800;
}
function vA(i) {
  if (!this.isValid())
    return NaN;
  var u, c, p = this._milliseconds;
  if (i = Ti(i), i === "month" || i === "quarter" || i === "year")
    switch (u = this._days + p / 864e5, c = this._months + Ob(u), i) {
      case "month":
        return c;
      case "quarter":
        return c / 3;
      case "year":
        return c / 12;
    }
  else
    switch (u = this._days + Math.round(LE(this._months)), i) {
      case "week":
        return u / 7 + p / 6048e5;
      case "day":
        return u + p / 864e5;
      case "hour":
        return u * 24 + p / 36e5;
      case "minute":
        return u * 1440 + p / 6e4;
      case "second":
        return u * 86400 + p / 1e3;
      case "millisecond":
        return Math.floor(u * 864e5) + p;
      default:
        throw new Error("Unknown unit " + i);
    }
}
function mA() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + dt(this._months / 12) * 31536e6 : NaN;
}
function Go(i) {
  return function() {
    return this.as(i);
  };
}
var yA = Go("ms"), gA = Go("s"), SA = Go("m"), EA = Go("h"), _A = Go("d"), wA = Go("w"), CA = Go("M"), TA = Go("Q"), xA = Go("y");
function bA() {
  return rl(this);
}
function RA(i) {
  return i = Ti(i), this.isValid() ? this[i + "s"]() : NaN;
}
function hc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var DA = hc("milliseconds"), kA = hc("seconds"), MA = hc("minutes"), OA = hc("hours"), NA = hc("days"), LA = hc("months"), UA = hc("years");
function zA() {
  return wi(this.days() / 7);
}
var Yo = Math.round, dd = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function AA(i, u, c, p, m) {
  return m.relativeTime(u || 1, !!c, i, p);
}
function jA(i, u, c, p) {
  var m = rl(i).abs(), E = Yo(m.as("s")), g = Yo(m.as("m")), D = Yo(m.as("h")), b = Yo(m.as("d")), R = Yo(m.as("M")), z = Yo(m.as("w")), N = Yo(m.as("y")), W = E <= c.ss && ["s", E] || E < c.s && ["ss", E] || g <= 1 && ["m"] || g < c.m && ["mm", g] || D <= 1 && ["h"] || D < c.h && ["hh", D] || b <= 1 && ["d"] || b < c.d && ["dd", b];
  return c.w != null && (W = W || z <= 1 && ["w"] || z < c.w && ["ww", z]), W = W || R <= 1 && ["M"] || R < c.M && ["MM", R] || N <= 1 && ["y"] || ["yy", N], W[2] = u, W[3] = +i > 0, W[4] = p, AA.apply(null, W);
}
function FA(i) {
  return i === void 0 ? Yo : typeof i == "function" ? (Yo = i, !0) : !1;
}
function HA(i, u) {
  return dd[i] === void 0 ? !1 : u === void 0 ? dd[i] : (dd[i] = u, i === "s" && (dd.ss = u - 1), !0);
}
function YA(i, u) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var c = !1, p = dd, m, E;
  return typeof i == "object" && (u = i, i = !1), typeof i == "boolean" && (c = i), typeof u == "object" && (p = Object.assign({}, dd, u), u.s != null && u.ss == null && (p.ss = u.s - 1)), m = this.localeData(), E = jA(this, !c, p, m), c && (E = m.pastFuture(+this, E)), m.postformat(E);
}
var dE = Math.abs;
function cd(i) {
  return (i > 0) - (i < 0) || +i;
}
function Dg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = dE(this._milliseconds) / 1e3, u = dE(this._days), c = dE(this._months), p, m, E, g, D = this.asSeconds(), b, R, z, N;
  return D ? (p = wi(i / 60), m = wi(p / 60), i %= 60, p %= 60, E = wi(c / 12), c %= 12, g = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", b = D < 0 ? "-" : "", R = cd(this._months) !== cd(D) ? "-" : "", z = cd(this._days) !== cd(D) ? "-" : "", N = cd(this._milliseconds) !== cd(D) ? "-" : "", b + "P" + (E ? R + E + "Y" : "") + (c ? R + c + "M" : "") + (u ? z + u + "D" : "") + (m || p || i ? "T" : "") + (m ? N + m + "H" : "") + (p ? N + p + "M" : "") + (i ? N + g + "S" : "")) : "P0D";
}
var wt = bg.prototype;
wt.isValid = NU;
wt.abs = fA;
wt.add = dA;
wt.subtract = pA;
wt.as = vA;
wt.asMilliseconds = yA;
wt.asSeconds = gA;
wt.asMinutes = SA;
wt.asHours = EA;
wt.asDays = _A;
wt.asWeeks = wA;
wt.asMonths = CA;
wt.asQuarters = TA;
wt.asYears = xA;
wt.valueOf = mA;
wt._bubble = hA;
wt.clone = bA;
wt.get = RA;
wt.milliseconds = DA;
wt.seconds = kA;
wt.minutes = MA;
wt.hours = OA;
wt.days = NA;
wt.weeks = zA;
wt.months = LA;
wt.years = UA;
wt.humanize = YA;
wt.toISOString = Dg;
wt.toString = Dg;
wt.toJSON = Dg;
wt.locale = Sb;
wt.localeData = _b;
wt.toIsoString = Ci(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Dg
);
wt.lang = Eb;
Ye("X", 0, 0, "unix");
Ye("x", 0, 0, "valueOf");
xe("x", wg);
xe("X", u2);
Vt("X", function(i, u, c) {
  c._d = new Date(parseFloat(i) * 1e3);
});
Vt("x", function(i, u, c) {
  c._d = new Date(dt(i));
});
//! moment.js
Se.version = "2.29.4";
PL(an);
Se.fn = le;
Se.min = DU;
Se.max = kU;
Se.now = MU;
Se.utc = Bl;
Se.unix = aA;
Se.months = lA;
Se.isDate = Qh;
Se.locale = Xu;
Se.invalid = yg;
Se.duration = rl;
Se.isMoment = nl;
Se.weekdays = uA;
Se.parseZone = iA;
Se.localeData = $o;
Se.isDuration = ig;
Se.monthsShort = oA;
Se.weekdaysMin = cA;
Se.defineLocale = t_;
Se.updateLocale = iU;
Se.locales = lU;
Se.weekdaysShort = sA;
Se.normalizeUnits = Ti;
Se.relativeTimeRounding = FA;
Se.relativeTimeThreshold = HA;
Se.calendarFormat = tz;
Se.prototype = le;
Se.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
Se.defineLocale("pt-br", {
  months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
    "_"
  ),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
  weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
    "_"
  ),
  weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
  weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
  },
  calendar: {
    sameDay: "[Hoje às] LT",
    nextDay: "[Amanhã às] LT",
    nextWeek: "dddd [às] LT",
    lastDay: "[Ontem às] LT",
    lastWeek: function() {
      return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "em %s",
    past: "há %s",
    s: "poucos segundos",
    ss: "%d segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um mês",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  invalidDate: "Data inválida"
});
_i.locale("pt-br");
const PA = {
  206: "Almoço",
  205: "Banheiro"
}, VA = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], IA = ({
  data: i,
  lastSevenDays: u
}) => /* @__PURE__ */ P.jsx("div", { className: "detailed-workday--period", children: u.map((c, p) => {
  const m = _i(c).format("DD [de] MMMM"), E = i.find(
    ({ date: b }) => _i(b).format("YYYY/MM/DD") === c.format("YYYY/MM/DD")
  );
  if (E === void 0)
    return /* @__PURE__ */ P.jsx("div", { className: "day", children: /* @__PURE__ */ P.jsx("span", { children: m }) }, p);
  const g = _i.utc(E.start).format("HH[h]mm"), D = _i.utc(E.finish).format("HH[h]mm");
  return /* @__PURE__ */ P.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ P.jsx("span", { children: m }),
    /* @__PURE__ */ P.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ P.jsxs("span", { className: "service-time", children: [
      g,
      " - ",
      D
    ] }),
    /* @__PURE__ */ P.jsxs("span", { className: "description", children: [
      E.description,
      "*"
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "breaks", children: E.breaks.map((b, R) => {
      const z = _i.utc(b.start).format("HH[h]mm"), N = _i.utc(b.finish).format("HH[h]mm");
      return /* @__PURE__ */ P.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ P.jsx("span", { className: "break-item--label", children: PA[String(b.type)] }),
        /* @__PURE__ */ P.jsxs("span", { className: "break-item--content", children: [
          z,
          " - ",
          N
        ] })
      ] }, R);
    }) })
  ] }, p);
}) }), bj = () => {
  const i = Array.from({ length: 7 }).map(
    (u, c) => _i().clone().subtract(7 - c, "days")
  );
  return /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ P.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ P.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ P.jsx(IE, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ P.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ P.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ P.jsx("div", { className: "weekdays", children: i.map((u) => {
          const c = _i(u).day();
          return /* @__PURE__ */ P.jsx("span", { className: "", children: VA[c] });
        }) })
      ] }),
      YL.map((u, c) => /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ P.jsx("span", { children: u.agent.firstName }),
        /* @__PURE__ */ P.jsx(
          IA,
          {
            data: u.period,
            lastSevenDays: i
          },
          c
        )
      ] }, c))
    ] })
  ] });
}, Rj = ({ logo: i, items: u }) => /* @__PURE__ */ P.jsxs("header", { className: "header", children: [
  i,
  u
] }), BA = (i, u) => {
  var m, E, g, D;
  const p = i.currentTarget.childNodes[1].childNodes;
  switch (i.key) {
    case "ArrowDown": {
      if (u.current === p.length - 1)
        return;
      u.current += 1;
      const b = (E = (m = p[u.current]) == null ? void 0 : m.firstChild) == null ? void 0 : E.firstChild;
      b !== null && b.focus();
      break;
    }
    case "ArrowUp": {
      if (u.current === 2)
        return;
      u.current -= 1;
      const b = (D = (g = p[u.current]) == null ? void 0 : g.firstChild) == null ? void 0 : D.firstChild;
      b !== null && b.focus();
      break;
    }
    case " ": {
      const b = i.target;
      b instanceof HTMLAnchorElement && b.click();
    }
  }
}, sx = (i, u, c, p, m, E = 0, g) => {
  i.current === null || u.current === null || (p.route === c && i.current.classList.add("active"), i.current.classList.contains("active") && p.route !== c && i.current.classList.remove("active"), g || (u.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${p.label}</span>
      </div>
    `, u.current.style.opacity = "1", u.current.style.top = `calc(48px * ${m + E})`), i.current.style.top = `calc(48px * ${m + E})`);
}, WA = (i, u, c, p, m, E) => {
  var g;
  {
    if (i.current === null || u.current === null)
      return;
    let D = -1;
    p || (u.current.innerHTML = "", u.current.style.opacity = "0"), m.forEach((b, R) => {
      b.route === c && (D = R, E !== null && (D += m[E].submenus.length)), Object.hasOwnProperty.call(b, "submenus") && b.submenus.forEach((z, N) => {
        `${b.route}${z.route}` === c && (E === R ? D = R + N + 1 : D = R);
      });
    }), (g = document.activeElement) == null || g.blur(), D > -1 && (i.current.style.top = `calc(48px * ${D})`, i.current.classList.add("active"));
  }
}, Dj = ({
  data: i,
  itemLink: u,
  onSettings: c,
  onLogout: p,
  pathname: m = ""
}) => {
  const E = tr(null), g = tr(null), D = tr(null), b = tr(3), [R, z] = Dr(!1), [N, W] = Dr(null);
  return /* @__PURE__ */ P.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: E,
      onKeyDown: ($) => BA($, b),
      children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              E.current !== null && (z(($) => !$), E.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ P.jsx(Rr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "ul",
          {
            className: "sidebar-container",
            onMouseLeave: () => WA(
              g,
              D,
              m,
              R,
              i,
              N
            ),
            children: [
              /* @__PURE__ */ P.jsx("span", { ref: g, className: "sidebar-selector" }),
              /* @__PURE__ */ P.jsx("div", { ref: D, className: "sidebar-tooltip" }),
              i.map(($, Y) => /* @__PURE__ */ P.jsxs(CN, { children: [
                /* @__PURE__ */ P.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => sx(
                      g,
                      D,
                      m,
                      $,
                      N !== null && Y > N ? Y + i[N].submenus.length : Y,
                      0,
                      R
                    ),
                    onClick: () => {
                      $ != null && $.submenus && W(
                        (ne) => ne === Y ? null : Y
                      );
                    },
                    children: [
                      /* @__PURE__ */ P.jsx("div", { className: "sidebar-item--icon", children: u({
                        icon: $.icon,
                        label: $.label,
                        route: $.route,
                        isOpen: R,
                        props: {
                          className: $ != null && $.submenus ? "group" : "",
                          onClick: () => {
                            b.current = Y + 2, g.current && g.current.classList.toggle("active");
                          }
                        }
                      }) }),
                      ($ == null ? void 0 : $.submenus) && /* @__PURE__ */ P.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        R && /* @__PURE__ */ P.jsx("span", { className: "sidebar-item--indicator", children: $.submenus.length }),
                        /* @__PURE__ */ P.jsx(
                          Rr,
                          {
                            icon: "ic:round-arrow-right",
                            height: 24,
                            rotate: Y === N ? 45 : 0
                          }
                        )
                      ] })
                    ]
                  }
                ),
                ($ == null ? void 0 : $.submenus) && Y === N && /* @__PURE__ */ P.jsx("div", { className: "sidebar-submenu", children: $.submenus.map((ne, ke) => /* @__PURE__ */ P.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => sx(
                      g,
                      D,
                      m,
                      ne,
                      Y,
                      ke + 1,
                      R
                    ),
                    children: u({
                      icon: ne.icon,
                      label: ne.label,
                      route: `${$.route}${ne.route}`,
                      isOpen: R,
                      props: { className: "" }
                    })
                  },
                  ne.route
                )) })
              ] }, Y))
            ]
          }
        ),
        c && /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-settings-action ring-info",
            onClick: p,
            children: [
              /* @__PURE__ */ P.jsx(Rr, { icon: "ph:gear-six-fill", height: 16 }),
              R && /* @__PURE__ */ P.jsx("span", { children: "Settings" })
            ]
          }
        ),
        p && /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-exit-action ring-warning",
            onClick: p,
            children: [
              /* @__PURE__ */ P.jsx(Rr, { icon: "mingcute:exit-fill", height: 16 }),
              R && /* @__PURE__ */ P.jsx("span", { children: "Logout" })
            ]
          }
        )
      ]
    }
  );
};
var UE = { exports: {} }, za = {}, eg = { exports: {} }, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cx;
function $A() {
  return cx || (cx = 1, function(i) {
    function u(ce, je) {
      var Ee = ce.length;
      ce.push(je);
      e:
        for (; 0 < Ee; ) {
          var gt = Ee - 1 >>> 1, Ct = ce[gt];
          if (0 < m(Ct, je))
            ce[gt] = je, ce[Ee] = Ct, Ee = gt;
          else
            break e;
        }
    }
    function c(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function p(ce) {
      if (ce.length === 0)
        return null;
      var je = ce[0], Ee = ce.pop();
      if (Ee !== je) {
        ce[0] = Ee;
        e:
          for (var gt = 0, Ct = ce.length, Vn = Ct >>> 1; gt < Vn; ) {
            var vr = 2 * (gt + 1) - 1, ni = ce[vr], wn = vr + 1, da = ce[wn];
            if (0 > m(ni, Ee))
              wn < Ct && 0 > m(da, ni) ? (ce[gt] = da, ce[wn] = Ee, gt = wn) : (ce[gt] = ni, ce[vr] = Ee, gt = vr);
            else if (wn < Ct && 0 > m(da, Ee))
              ce[gt] = da, ce[wn] = Ee, gt = wn;
            else
              break e;
          }
      }
      return je;
    }
    function m(ce, je) {
      var Ee = ce.sortIndex - je.sortIndex;
      return Ee !== 0 ? Ee : ce.id - je.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      i.unstable_now = function() {
        return E.now();
      };
    } else {
      var g = Date, D = g.now();
      i.unstable_now = function() {
        return g.now() - D;
      };
    }
    var b = [], R = [], z = 1, N = null, W = 3, $ = !1, Y = !1, ne = !1, ke = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(ce) {
      for (var je = c(R); je !== null; ) {
        if (je.callback === null)
          p(R);
        else if (je.startTime <= ce)
          p(R), je.sortIndex = je.expirationTime, u(b, je);
        else
          break;
        je = c(R);
      }
    }
    function fe(ce) {
      if (ne = !1, ie(ce), !Y)
        if (c(b) !== null)
          Y = !0, Mt(se);
        else {
          var je = c(R);
          je !== null && _n(fe, je.startTime - ce);
        }
    }
    function se(ce, je) {
      Y = !1, ne && (ne = !1, Te(Qe), Qe = -1), $ = !0;
      var Ee = W;
      try {
        for (ie(je), N = c(b); N !== null && (!(N.expirationTime > je) || ce && !ut()); ) {
          var gt = N.callback;
          if (typeof gt == "function") {
            N.callback = null, W = N.priorityLevel;
            var Ct = gt(N.expirationTime <= je);
            je = i.unstable_now(), typeof Ct == "function" ? N.callback = Ct : N === c(b) && p(b), ie(je);
          } else
            p(b);
          N = c(b);
        }
        if (N !== null)
          var Vn = !0;
        else {
          var vr = c(R);
          vr !== null && _n(fe, vr.startTime - je), Vn = !1;
        }
        return Vn;
      } finally {
        N = null, W = Ee, $ = !1;
      }
    }
    var J = !1, oe = null, Qe = -1, at = 5, Ke = -1;
    function ut() {
      return !(i.unstable_now() - Ke < at);
    }
    function kt() {
      if (oe !== null) {
        var ce = i.unstable_now();
        Ke = ce;
        var je = !0;
        try {
          je = oe(!0, ce);
        } finally {
          je ? Ie() : (J = !1, oe = null);
        }
      } else
        J = !1;
    }
    var Ie;
    if (typeof ae == "function")
      Ie = function() {
        ae(kt);
      };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), Xt = tt.port2;
      tt.port1.onmessage = kt, Ie = function() {
        Xt.postMessage(null);
      };
    } else
      Ie = function() {
        ke(kt, 0);
      };
    function Mt(ce) {
      oe = ce, J || (J = !0, Ie());
    }
    function _n(ce, je) {
      Qe = ke(function() {
        ce(i.unstable_now());
      }, je);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, i.unstable_continueExecution = function() {
      Y || $ || (Y = !0, Mt(se));
    }, i.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : at = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, i.unstable_getFirstCallbackNode = function() {
      return c(b);
    }, i.unstable_next = function(ce) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var je = 3;
          break;
        default:
          je = W;
      }
      var Ee = W;
      W = je;
      try {
        return ce();
      } finally {
        W = Ee;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(ce, je) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var Ee = W;
      W = ce;
      try {
        return je();
      } finally {
        W = Ee;
      }
    }, i.unstable_scheduleCallback = function(ce, je, Ee) {
      var gt = i.unstable_now();
      switch (typeof Ee == "object" && Ee !== null ? (Ee = Ee.delay, Ee = typeof Ee == "number" && 0 < Ee ? gt + Ee : gt) : Ee = gt, ce) {
        case 1:
          var Ct = -1;
          break;
        case 2:
          Ct = 250;
          break;
        case 5:
          Ct = 1073741823;
          break;
        case 4:
          Ct = 1e4;
          break;
        default:
          Ct = 5e3;
      }
      return Ct = Ee + Ct, ce = { id: z++, callback: je, priorityLevel: ce, startTime: Ee, expirationTime: Ct, sortIndex: -1 }, Ee > gt ? (ce.sortIndex = Ee, u(R, ce), c(b) === null && ce === c(R) && (ne ? (Te(Qe), Qe = -1) : ne = !0, _n(fe, Ee - gt))) : (ce.sortIndex = Ct, u(b, ce), Y || $ || (Y = !0, Mt(se))), ce;
    }, i.unstable_shouldYield = ut, i.unstable_wrapCallback = function(ce) {
      var je = W;
      return function() {
        var Ee = W;
        W = je;
        try {
          return ce.apply(this, arguments);
        } finally {
          W = Ee;
        }
      };
    };
  }(pE)), pE;
}
var hE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx;
function GA() {
  return fx || (fx = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, c = !1, p = 5;
      function m(he, Ue) {
        var it = he.length;
        he.push(Ue), D(he, Ue, it);
      }
      function E(he) {
        return he.length === 0 ? null : he[0];
      }
      function g(he) {
        if (he.length === 0)
          return null;
        var Ue = he[0], it = he.pop();
        return it !== Ue && (he[0] = it, b(he, it, 0)), Ue;
      }
      function D(he, Ue, it) {
        for (var Ot = it; Ot > 0; ) {
          var Jt = Ot - 1 >>> 1, Nn = he[Jt];
          if (R(Nn, Ue) > 0)
            he[Jt] = Ue, he[Ot] = Nn, Ot = Jt;
          else
            return;
        }
      }
      function b(he, Ue, it) {
        for (var Ot = it, Jt = he.length, Nn = Jt >>> 1; Ot < Nn; ) {
          var fn = (Ot + 1) * 2 - 1, Or = he[fn], Yt = fn + 1, Xr = he[Yt];
          if (R(Or, Ue) < 0)
            Yt < Jt && R(Xr, Or) < 0 ? (he[Ot] = Xr, he[Yt] = Ue, Ot = Yt) : (he[Ot] = Or, he[fn] = Ue, Ot = fn);
          else if (Yt < Jt && R(Xr, Ue) < 0)
            he[Ot] = Xr, he[Yt] = Ue, Ot = Yt;
          else
            return;
        }
      }
      function R(he, Ue) {
        var it = he.sortIndex - Ue.sortIndex;
        return it !== 0 ? it : he.id - Ue.id;
      }
      var z = 1, N = 2, W = 3, $ = 4, Y = 5;
      function ne(he, Ue) {
      }
      var ke = typeof performance == "object" && typeof performance.now == "function";
      if (ke) {
        var Te = performance;
        i.unstable_now = function() {
          return Te.now();
        };
      } else {
        var ae = Date, ie = ae.now();
        i.unstable_now = function() {
          return ae.now() - ie;
        };
      }
      var fe = 1073741823, se = -1, J = 250, oe = 5e3, Qe = 1e4, at = fe, Ke = [], ut = [], kt = 1, Ie = null, tt = W, Xt = !1, Mt = !1, _n = !1, ce = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function gt(he) {
        for (var Ue = E(ut); Ue !== null; ) {
          if (Ue.callback === null)
            g(ut);
          else if (Ue.startTime <= he)
            g(ut), Ue.sortIndex = Ue.expirationTime, m(Ke, Ue);
          else
            return;
          Ue = E(ut);
        }
      }
      function Ct(he) {
        if (_n = !1, gt(he), !Mt)
          if (E(Ke) !== null)
            Mt = !0, Ya(Vn);
          else {
            var Ue = E(ut);
            Ue !== null && vn(Ct, Ue.startTime - he);
          }
      }
      function Vn(he, Ue) {
        Mt = !1, _n && (_n = !1, Kr()), Xt = !0;
        var it = tt;
        try {
          var Ot;
          if (!c)
            return vr(he, Ue);
        } finally {
          Ie = null, tt = it, Xt = !1;
        }
      }
      function vr(he, Ue) {
        var it = Ue;
        for (gt(it), Ie = E(Ke); Ie !== null && !u && !(Ie.expirationTime > it && (!he || Fa())); ) {
          var Ot = Ie.callback;
          if (typeof Ot == "function") {
            Ie.callback = null, tt = Ie.priorityLevel;
            var Jt = Ie.expirationTime <= it, Nn = Ot(Jt);
            it = i.unstable_now(), typeof Nn == "function" ? Ie.callback = Nn : Ie === E(Ke) && g(Ke), gt(it);
          } else
            g(Ke);
          Ie = E(Ke);
        }
        if (Ie !== null)
          return !0;
        var fn = E(ut);
        return fn !== null && vn(Ct, fn.startTime - it), !1;
      }
      function ni(he, Ue) {
        switch (he) {
          case z:
          case N:
          case W:
          case $:
          case Y:
            break;
          default:
            he = W;
        }
        var it = tt;
        tt = he;
        try {
          return Ue();
        } finally {
          tt = it;
        }
      }
      function wn(he) {
        var Ue;
        switch (tt) {
          case z:
          case N:
          case W:
            Ue = W;
            break;
          default:
            Ue = tt;
            break;
        }
        var it = tt;
        tt = Ue;
        try {
          return he();
        } finally {
          tt = it;
        }
      }
      function da(he) {
        var Ue = tt;
        return function() {
          var it = tt;
          tt = Ue;
          try {
            return he.apply(this, arguments);
          } finally {
            tt = it;
          }
        };
      }
      function rr(he, Ue, it) {
        var Ot = i.unstable_now(), Jt;
        if (typeof it == "object" && it !== null) {
          var Nn = it.delay;
          typeof Nn == "number" && Nn > 0 ? Jt = Ot + Nn : Jt = Ot;
        } else
          Jt = Ot;
        var fn;
        switch (he) {
          case z:
            fn = se;
            break;
          case N:
            fn = J;
            break;
          case Y:
            fn = at;
            break;
          case $:
            fn = Qe;
            break;
          case W:
          default:
            fn = oe;
            break;
        }
        var Or = Jt + fn, Yt = {
          id: kt++,
          callback: Ue,
          priorityLevel: he,
          startTime: Jt,
          expirationTime: Or,
          sortIndex: -1
        };
        return Jt > Ot ? (Yt.sortIndex = Jt, m(ut, Yt), E(Ke) === null && Yt === E(ut) && (_n ? Kr() : _n = !0, vn(Ct, Jt - Ot))) : (Yt.sortIndex = Or, m(Ke, Yt), !Mt && !Xt && (Mt = !0, Ya(Vn))), Yt;
      }
      function kr() {
      }
      function ri() {
        !Mt && !Xt && (Mt = !0, Ya(Vn));
      }
      function Mr() {
        return E(Ke);
      }
      function pa(he) {
        he.callback = null;
      }
      function On() {
        return tt;
      }
      var ar = !1, In = null, ir = -1, lr = p, ha = -1;
      function Fa() {
        var he = i.unstable_now() - ha;
        return !(he < lr);
      }
      function xi() {
      }
      function ai(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? lr = Math.floor(1e3 / he) : lr = p;
      }
      var Ha = function() {
        if (In !== null) {
          var he = i.unstable_now();
          ha = he;
          var Ue = !0, it = !0;
          try {
            it = In(Ue, he);
          } finally {
            it ? qr() : (ar = !1, In = null);
          }
        } else
          ar = !1;
      }, qr;
      if (typeof Ee == "function")
        qr = function() {
          Ee(Ha);
        };
      else if (typeof MessageChannel < "u") {
        var ii = new MessageChannel(), Zr = ii.port2;
        ii.port1.onmessage = Ha, qr = function() {
          Zr.postMessage(null);
        };
      } else
        qr = function() {
          ce(Ha, 0);
        };
      function Ya(he) {
        In = he, ar || (ar = !0, qr());
      }
      function vn(he, Ue) {
        ir = ce(function() {
          he(i.unstable_now());
        }, Ue);
      }
      function Kr() {
        je(ir), ir = -1;
      }
      var al = xi, Pa = null;
      i.unstable_IdlePriority = Y, i.unstable_ImmediatePriority = z, i.unstable_LowPriority = $, i.unstable_NormalPriority = W, i.unstable_Profiling = Pa, i.unstable_UserBlockingPriority = N, i.unstable_cancelCallback = pa, i.unstable_continueExecution = ri, i.unstable_forceFrameRate = ai, i.unstable_getCurrentPriorityLevel = On, i.unstable_getFirstCallbackNode = Mr, i.unstable_next = wn, i.unstable_pauseExecution = kr, i.unstable_requestPaint = al, i.unstable_runWithPriority = ni, i.unstable_scheduleCallback = rr, i.unstable_shouldYield = Fa, i.unstable_wrapCallback = da, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(hE)), hE;
}
var dx;
function Nb() {
  return dx || (dx = 1, process.env.NODE_ENV === "production" ? eg.exports = $A() : eg.exports = GA()), eg.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var px;
function QA() {
  if (px)
    return za;
  px = 1;
  var i = Wo, u = Nb();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), m = {};
  function E(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++)
      p.add(r[n]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), b = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, N = {};
  function W(n) {
    return b.call(N, n) ? !0 : b.call(z, n) ? !1 : R.test(n) ? N[n] = !0 : (z[n] = !0, !1);
  }
  function $(n, r, o, f) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Y(n, r, o, f) {
    if (r === null || typeof r > "u" || $(n, r, o, f))
      return !0;
    if (f)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function ne(n, r, o, f, h, y, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = w;
  }
  var ke = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ke[n] = new ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ke[r] = new ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ke[n] = new ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ke[n] = new ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ke[n] = new ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ke[n] = new ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ke[n] = new ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ke[n] = new ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ke[n] = new ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Te = /[\-:]([a-z])/g;
  function ae(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Te,
      ae
    );
    ke[r] = new ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Te, ae);
    ke[r] = new ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Te, ae);
    ke[r] = new ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ke[n] = new ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ke.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ke[n] = new ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ie(n, r, o, f) {
    var h = ke.hasOwnProperty(r) ? ke[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Y(r, o, h, f) && (o = null), f || h === null ? W(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, f = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, f ? n.setAttributeNS(f, r, o) : n.setAttribute(r, o))));
  }
  var fe = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, se = Symbol.for("react.element"), J = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), at = Symbol.for("react.profiler"), Ke = Symbol.for("react.provider"), ut = Symbol.for("react.context"), kt = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), Xt = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), _n = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function je(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ee = Object.assign, gt;
  function Ct(n) {
    if (gt === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        gt = r && r[1] || "";
      }
    return `
` + gt + n;
  }
  var Vn = !1;
  function vr(n, r) {
    if (!n || Vn)
      return "";
    Vn = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (B) {
            var f = B;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (B) {
            f = B;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (B) {
          f = B;
        }
        n();
      }
    } catch (B) {
      if (B && f && typeof B.stack == "string") {
        for (var h = B.stack.split(`
`), y = f.stack.split(`
`), w = h.length - 1, x = y.length - 1; 1 <= w && 0 <= x && h[w] !== y[x]; )
          x--;
        for (; 1 <= w && 0 <= x; w--, x--)
          if (h[w] !== y[x]) {
            if (w !== 1 || x !== 1)
              do
                if (w--, x--, 0 > x || h[w] !== y[x]) {
                  var M = `
` + h[w].replace(" at new ", " at ");
                  return n.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", n.displayName)), M;
                }
              while (1 <= w && 0 <= x);
            break;
          }
      }
    } finally {
      Vn = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Ct(n) : "";
  }
  function ni(n) {
    switch (n.tag) {
      case 5:
        return Ct(n.type);
      case 16:
        return Ct("Lazy");
      case 13:
        return Ct("Suspense");
      case 19:
        return Ct("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = vr(n.type, !1), n;
      case 11:
        return n = vr(n.type.render, !1), n;
      case 1:
        return n = vr(n.type, !0), n;
      default:
        return "";
    }
  }
  function wn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case oe:
        return "Fragment";
      case J:
        return "Portal";
      case at:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ut:
          return (n.displayName || "Context") + ".Consumer";
        case Ke:
          return (n._context.displayName || "Context") + ".Provider";
        case kt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Xt:
          return r = n.displayName || null, r !== null ? r : wn(n.type) || "Memo";
        case Mt:
          r = n._payload, n = n._init;
          try {
            return wn(n(r));
          } catch {
          }
      }
    return null;
  }
  function da(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return wn(r);
      case 8:
        return r === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function rr(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function kr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ri(n) {
    var r = kr(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get, y = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(w) {
        f = "" + w, y.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(w) {
        f = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mr(n) {
    n._valueTracker || (n._valueTracker = ri(n));
  }
  function pa(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), f = "";
    return n && (f = kr(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== o ? (r.setValue(n), !0) : !1;
  }
  function On(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ar(n, r) {
    var o = r.checked;
    return Ee({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function In(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    o = rr(r.value != null ? r.value : o), n._wrapperState = { initialChecked: f, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ir(n, r) {
    r = r.checked, r != null && ie(n, "checked", r, !1);
  }
  function lr(n, r) {
    ir(n, r);
    var o = rr(r.value), f = r.type;
    if (o != null)
      f === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Fa(n, r.type, o) : r.hasOwnProperty("defaultValue") && Fa(n, r.type, rr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ha(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Fa(n, r, o) {
    (r !== "number" || On(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var xi = Array.isArray;
  function ai(n, r, o, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < o.length; h++)
        r["$" + o[h]] = !0;
      for (o = 0; o < n.length; o++)
        h = r.hasOwnProperty("$" + n[o].value), n[o].selected !== h && (n[o].selected = h), h && f && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + rr(o), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === o) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ha(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(c(91));
    return Ee({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(c(92));
        if (xi(o)) {
          if (1 < o.length)
            throw Error(c(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: rr(o) };
  }
  function ii(n, r) {
    var o = rr(r.value), f = rr(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), f != null && (n.defaultValue = "" + f);
  }
  function Zr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ya(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ya(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Kr, al = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, f, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Kr = Kr || document.createElement("div"), Kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Kr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Pa(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var he = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ue = ["Webkit", "ms", "Moz", "O"];
  Object.keys(he).forEach(function(n) {
    Ue.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), he[r] = he[n];
    });
  });
  function it(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || he.hasOwnProperty(n) && he[n] ? ("" + r).trim() : r + "px";
  }
  function Ot(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var f = o.indexOf("--") === 0, h = it(o, r[o], f);
        o === "float" && (o = "cssFloat"), f ? n.setProperty(o, h) : n[o] = h;
      }
  }
  var Jt = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nn(n, r) {
    if (r) {
      if (Jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(c(62));
    }
  }
  function fn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Or = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xr = null, At = null, Pt = null;
  function Qo(n) {
    if (n = ws(n)) {
      if (typeof Xr != "function")
        throw Error(c(280));
      var r = n.stateNode;
      r && (r = ze(r), Xr(n.stateNode, n.type, r));
    }
  }
  function $l(n) {
    At ? Pt ? Pt.push(n) : Pt = [n] : At = n;
  }
  function qo() {
    if (At) {
      var n = At, r = Pt;
      if (Pt = At = null, Qo(n), r)
        for (n = 0; n < r.length; n++)
          Qo(r[n]);
    }
  }
  function es(n, r) {
    return n(r);
  }
  function vc() {
  }
  var Gl = !1;
  function Zo(n, r, o) {
    if (Gl)
      return n(r, o);
    Gl = !0;
    try {
      return es(n, r, o);
    } finally {
      Gl = !1, (At !== null || Pt !== null) && (vc(), qo());
    }
  }
  function Ql(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var f = ze(o);
    if (f === null)
      return null;
    o = f[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(c(231, r, typeof o));
    return o;
  }
  var Ko = !1;
  if (D)
    try {
      var li = {};
      Object.defineProperty(li, "passive", { get: function() {
        Ko = !0;
      } }), window.addEventListener("test", li, li), window.removeEventListener("test", li, li);
    } catch {
      Ko = !1;
    }
  function il(n, r, o, f, h, y, w, x, M) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, B);
    } catch (X) {
      this.onError(X);
    }
  }
  var Jr = !1, Va = null, ll = !1, k = null, ee = { onError: function(n) {
    Jr = !0, Va = n;
  } };
  function ve(n, r, o, f, h, y, w, x, M) {
    Jr = !1, Va = null, il.apply(ee, arguments);
  }
  function Fe(n, r, o, f, h, y, w, x, M) {
    if (ve.apply(this, arguments), Jr) {
      if (Jr) {
        var B = Va;
        Jr = !1, Va = null;
      } else
        throw Error(c(198));
      ll || (ll = !0, k = B);
    }
  }
  function nt(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function rt(n) {
    if (nt(n) !== n)
      throw Error(c(188));
  }
  function Pe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = nt(n), r === null)
        throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var o = n, f = r; ; ) {
      var h = o.return;
      if (h === null)
        break;
      var y = h.alternate;
      if (y === null) {
        if (f = h.return, f !== null) {
          o = f;
          continue;
        }
        break;
      }
      if (h.child === y.child) {
        for (y = h.child; y; ) {
          if (y === o)
            return rt(h), n;
          if (y === f)
            return rt(h), r;
          y = y.sibling;
        }
        throw Error(c(188));
      }
      if (o.return !== f.return)
        o = h, f = y;
      else {
        for (var w = !1, x = h.child; x; ) {
          if (x === o) {
            w = !0, o = h, f = y;
            break;
          }
          if (x === f) {
            w = !0, f = h, o = y;
            break;
          }
          x = x.sibling;
        }
        if (!w) {
          for (x = y.child; x; ) {
            if (x === o) {
              w = !0, o = y, f = h;
              break;
            }
            if (x === f) {
              w = !0, f = y, o = h;
              break;
            }
            x = x.sibling;
          }
          if (!w)
            throw Error(c(189));
        }
      }
      if (o.alternate !== f)
        throw Error(c(190));
    }
    if (o.tag !== 3)
      throw Error(c(188));
    return o.stateNode.current === o ? n : r;
  }
  function Ln(n) {
    return n = Pe(n), n !== null ? Qt(n) : null;
  }
  function Qt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Qt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var qt = u.unstable_scheduleCallback, mr = u.unstable_cancelCallback, ol = u.unstable_shouldYield, mc = u.unstable_requestPaint, St = u.unstable_now, kg = u.unstable_getCurrentPriorityLevel, bi = u.unstable_ImmediatePriority, st = u.unstable_UserBlockingPriority, ul = u.unstable_NormalPriority, Xh = u.unstable_LowPriority, gd = u.unstable_IdlePriority, ts = null, Ia = null;
  function Jh(n) {
    if (Ia && typeof Ia.onCommitFiberRoot == "function")
      try {
        Ia.onCommitFiberRoot(ts, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var va = Math.clz32 ? Math.clz32 : Mg, ev = Math.log, tv = Math.LN2;
  function Mg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ev(n) / tv | 0) | 0;
  }
  var yc = 64, Xo = 4194304;
  function ql(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ba(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var f = 0, h = n.suspendedLanes, y = n.pingedLanes, w = o & 268435455;
    if (w !== 0) {
      var x = w & ~h;
      x !== 0 ? f = ql(x) : (y &= w, y !== 0 && (f = ql(y)));
    } else
      w = o & ~h, w !== 0 ? f = ql(w) : y !== 0 && (f = ql(y));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & h) && (h = f & -f, y = r & -r, h >= y || h === 16 && (y & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        o = 31 - va(r), h = 1 << o, f |= n[o], r &= ~h;
    return f;
  }
  function Sd(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gc(n, r) {
    for (var o = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var w = 31 - va(y), x = 1 << w, M = h[w];
      M === -1 ? (!(x & o) || x & f) && (h[w] = Sd(x, r)) : M <= r && (n.expiredLanes |= x), y &= ~x;
    }
  }
  function Ed(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Sc() {
    var n = yc;
    return yc <<= 1, !(yc & 4194240) && (yc = 64), n;
  }
  function _d(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Zl(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - va(r), n[r] = o;
  }
  function Og(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var h = 31 - va(o), y = 1 << h;
      r[h] = 0, f[h] = -1, n[h] = -1, o &= ~y;
    }
  }
  function ns(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var f = 31 - va(o), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), o &= ~h;
    }
  }
  var Nt = 0;
  function wd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nv, Ec, jt, rv, Cd, Xe = !1, rs = [], mn = null, ma = null, ya = null, as = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Lt = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        ma = null;
        break;
      case "mouseover":
      case "mouseout":
        ya = null;
        break;
      case "pointerover":
      case "pointerout":
        as.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function or(n, r, o, f, h, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: f, nativeEvent: y, targetContainers: [h] }, r !== null && (r = ws(r), r !== null && Ec(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function sl(n, r, o, f, h) {
    switch (r) {
      case "focusin":
        return mn = or(mn, n, r, o, f, h), !0;
      case "dragenter":
        return ma = or(ma, n, r, o, f, h), !0;
      case "mouseover":
        return ya = or(ya, n, r, o, f, h), !0;
      case "pointerover":
        var y = h.pointerId;
        return as.set(y, or(as.get(y) || null, n, r, o, f, h)), !0;
      case "gotpointercapture":
        return y = h.pointerId, Cn.set(y, or(Cn.get(y) || null, n, r, o, f, h)), !0;
    }
    return !1;
  }
  function av(n) {
    var r = Sa(n.target);
    if (r !== null) {
      var o = nt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = mt(o), r !== null) {
            n.blockedOn = r, Cd(n.priority, function() {
              jt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Jo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Cc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var f = new o.constructor(o.type, o);
        Or = f, o.target.dispatchEvent(f), Or = null;
      } else
        return r = ws(o), r !== null && Ec(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Td(n, r, o) {
    Jo(n) && o.delete(r);
  }
  function iv() {
    Xe = !1, mn !== null && Jo(mn) && (mn = null), ma !== null && Jo(ma) && (ma = null), ya !== null && Jo(ya) && (ya = null), as.forEach(Td), Cn.forEach(Td);
  }
  function is(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xe || (Xe = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, iv)));
  }
  function ls(n) {
    function r(h) {
      return is(h, n);
    }
    if (0 < rs.length) {
      is(rs[0], n);
      for (var o = 1; o < rs.length; o++) {
        var f = rs[o];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (mn !== null && is(mn, n), ma !== null && is(ma, n), ya !== null && is(ya, n), as.forEach(r), Cn.forEach(r), o = 0; o < Lt.length; o++)
      f = Lt[o], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Lt.length && (o = Lt[0], o.blockedOn === null); )
      av(o), o.blockedOn === null && Lt.shift();
  }
  var eu = fe.ReactCurrentBatchConfig, Kl = !0;
  function lv(n, r, o, f) {
    var h = Nt, y = eu.transition;
    eu.transition = null;
    try {
      Nt = 1, wc(n, r, o, f);
    } finally {
      Nt = h, eu.transition = y;
    }
  }
  function _c(n, r, o, f) {
    var h = Nt, y = eu.transition;
    eu.transition = null;
    try {
      Nt = 4, wc(n, r, o, f);
    } finally {
      Nt = h, eu.transition = y;
    }
  }
  function wc(n, r, o, f) {
    if (Kl) {
      var h = Cc(n, r, o, f);
      if (h === null)
        zc(n, r, f, os, o), Wa(n, f);
      else if (sl(h, n, r, o, f))
        f.stopPropagation();
      else if (Wa(n, f), r & 4 && -1 < Ng.indexOf(n)) {
        for (; h !== null; ) {
          var y = ws(h);
          if (y !== null && nv(y), y = Cc(n, r, o, f), y === null && zc(n, r, f, os, o), y === h)
            break;
          h = y;
        }
        h !== null && f.stopPropagation();
      } else
        zc(n, r, f, null, o);
    }
  }
  var os = null;
  function Cc(n, r, o, f) {
    if (os = null, n = Yt(f), n = Sa(n), n !== null)
      if (r = nt(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return os = n, null;
  }
  function xd(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (kg()) {
          case bi:
            return 1;
          case st:
            return 4;
          case ul:
          case Xh:
            return 16;
          case gd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ri = null, us = null, ss = null;
  function bd() {
    if (ss)
      return ss;
    var n, r = us, o = r.length, f, h = "value" in Ri ? Ri.value : Ri.textContent, y = h.length;
    for (n = 0; n < o && r[n] === h[n]; n++)
      ;
    var w = o - n;
    for (f = 1; f <= w && r[o - f] === h[y - f]; f++)
      ;
    return ss = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function tu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function cs() {
    return !0;
  }
  function ov() {
    return !1;
  }
  function ea(n) {
    function r(o, f, h, y, w) {
      this._reactName = o, this._targetInst = h, this.type = f, this.nativeEvent = y, this.target = w, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(y) : y[x]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? cs : ov, this.isPropagationStopped = ov, this;
    }
    return Ee(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = cs);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = cs);
    }, persist: function() {
    }, isPersistent: cs }), r;
  }
  var cl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tc = ea(cl), nu = Ee({}, cl, { view: 0, detail: 0 }), uv = ea(nu), xc, Rd, fs, Un = Ee({}, nu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Od, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== fs && (fs && n.type === "mousemove" ? (xc = n.screenX - fs.screenX, Rd = n.screenY - fs.screenY) : Rd = xc = 0, fs = n), xc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rd;
  } }), bc = ea(Un), sv = Ee({}, Un, { dataTransfer: 0 }), cv = ea(sv), Lg = Ee({}, nu, { relatedTarget: 0 }), fl = ea(Lg), Dd = Ee({}, cl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fv = ea(Dd), Ug = Ee({}, cl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), zg = ea(Ug), Ag = Ee({}, cl, { data: 0 }), kd = ea(Ag), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, dv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, pv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = pv[n]) ? !!r[n] : !1;
  }
  function Od() {
    return hv;
  }
  var Di = Ee({}, nu, { key: function(n) {
    if (n.key) {
      var r = Md[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = tu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Od, charCode: function(n) {
    return n.type === "keypress" ? tu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? tu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), jg = ea(Di), Nd = Ee({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rc = ea(Nd), Ld = Ee({}, nu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Od }), Fg = ea(Ld), Dc = Ee({}, cl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vv = ea(Dc), Nr = Ee({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ki = ea(Nr), yn = [9, 13, 27, 32], $a = D && "CompositionEvent" in window, Xl = null;
  D && "documentMode" in document && (Xl = document.documentMode);
  var kc = D && "TextEvent" in window && !Xl, mv = D && (!$a || Xl && 8 < Xl && 11 >= Xl), ru = String.fromCharCode(32), yv = !1;
  function gv(n, r) {
    switch (n) {
      case "keyup":
        return yn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Mc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var au = !1;
  function Hg(n, r) {
    switch (n) {
      case "compositionend":
        return Mc(r);
      case "keypress":
        return r.which !== 32 ? null : (yv = !0, ru);
      case "textInput":
        return n = r.data, n === ru && yv ? null : n;
      default:
        return null;
    }
  }
  function Yg(n, r) {
    if (au)
      return n === "compositionend" || !$a && gv(n, r) ? (n = bd(), ss = us = Ri = null, au = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return mv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Sv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Sv[n.type] : r === "textarea";
  }
  function _v(n, r, o, f) {
    $l(f), r = Ss(r, "onChange"), 0 < r.length && (o = new Tc("onChange", "change", null, o, f), n.push({ event: o, listeners: r }));
  }
  var ds = null, iu = null;
  function lu(n) {
    Uc(n, 0);
  }
  function ou(n) {
    var r = su(n);
    if (pa(r))
      return n;
  }
  function wv(n, r) {
    if (n === "change")
      return r;
  }
  var Ud = !1;
  if (D) {
    var zd;
    if (D) {
      var Ad = "oninput" in document;
      if (!Ad) {
        var Cv = document.createElement("div");
        Cv.setAttribute("oninput", "return;"), Ad = typeof Cv.oninput == "function";
      }
      zd = Ad;
    } else
      zd = !1;
    Ud = zd && (!document.documentMode || 9 < document.documentMode);
  }
  function Tv() {
    ds && (ds.detachEvent("onpropertychange", xv), iu = ds = null);
  }
  function xv(n) {
    if (n.propertyName === "value" && ou(iu)) {
      var r = [];
      _v(r, iu, n, Yt(n)), Zo(lu, r);
    }
  }
  function Pg(n, r, o) {
    n === "focusin" ? (Tv(), ds = r, iu = o, ds.attachEvent("onpropertychange", xv)) : n === "focusout" && Tv();
  }
  function Vg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ou(iu);
  }
  function Ig(n, r) {
    if (n === "click")
      return ou(r);
  }
  function bv(n, r) {
    if (n === "input" || n === "change")
      return ou(r);
  }
  function Bg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ga = typeof Object.is == "function" ? Object.is : Bg;
  function ps(n, r) {
    if (ga(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), f = Object.keys(r);
    if (o.length !== f.length)
      return !1;
    for (f = 0; f < o.length; f++) {
      var h = o[f];
      if (!b.call(r, h) || !ga(n[h], r[h]))
        return !1;
    }
    return !0;
  }
  function Rv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Dv(n, r) {
    var o = Rv(n);
    n = 0;
    for (var f; o; ) {
      if (o.nodeType === 3) {
        if (f = n + o.textContent.length, n <= r && f >= r)
          return { node: o, offset: r - n };
        n = f;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Rv(o);
    }
  }
  function kv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? kv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Oc() {
    for (var n = window, r = On(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = On(n.document);
    }
    return r;
  }
  function Mi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Nc(n) {
    var r = Oc(), o = n.focusedElem, f = n.selectionRange;
    if (r !== o && o && o.ownerDocument && kv(o.ownerDocument.documentElement, o)) {
      if (f !== null && Mi(o)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = o.textContent.length, y = Math.min(f.start, h);
          f = f.end === void 0 ? y : Math.min(f.end, h), !n.extend && y > f && (h = f, f = y, y = h), h = Dv(o, y);
          var w = Dv(
            o,
            f
          );
          h && w && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), y > f ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Mv = D && "documentMode" in document && 11 >= document.documentMode, Ga = null, jd = null, hs = null, Fd = !1;
  function Ov(n, r, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Fd || Ga == null || Ga !== On(f) || (f = Ga, "selectionStart" in f && Mi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), hs && ps(hs, f) || (hs = f, f = Ss(jd, "onSelect"), 0 < f.length && (r = new Tc("onSelect", "select", null, r, o), n.push({ event: r, listeners: f }), r.target = Ga)));
  }
  function Lc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Jl = { animationend: Lc("Animation", "AnimationEnd"), animationiteration: Lc("Animation", "AnimationIteration"), animationstart: Lc("Animation", "AnimationStart"), transitionend: Lc("Transition", "TransitionEnd") }, Hd = {}, Yd = {};
  D && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function zn(n) {
    if (Hd[n])
      return Hd[n];
    if (!Jl[n])
      return n;
    var r = Jl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Yd)
        return Hd[n] = r[o];
    return n;
  }
  var Pd = zn("animationend"), Nv = zn("animationiteration"), Lv = zn("animationstart"), Uv = zn("transitionend"), zv = /* @__PURE__ */ new Map(), Av = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Oi(n, r) {
    zv.set(n, r), E(r, [n]);
  }
  for (var vs = 0; vs < Av.length; vs++) {
    var eo = Av[vs], Wg = eo.toLowerCase(), ms = eo[0].toUpperCase() + eo.slice(1);
    Oi(Wg, "on" + ms);
  }
  Oi(Pd, "onAnimationEnd"), Oi(Nv, "onAnimationIteration"), Oi(Lv, "onAnimationStart"), Oi("dblclick", "onDoubleClick"), Oi("focusin", "onFocus"), Oi("focusout", "onBlur"), Oi(Uv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $g = new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));
  function jv(n, r, o) {
    var f = n.type || "unknown-event";
    n.currentTarget = o, Fe(f, r, void 0, n), n.currentTarget = null;
  }
  function Uc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var f = n[o], h = f.event;
      f = f.listeners;
      e: {
        var y = void 0;
        if (r)
          for (var w = f.length - 1; 0 <= w; w--) {
            var x = f[w], M = x.instance, B = x.currentTarget;
            if (x = x.listener, M !== y && h.isPropagationStopped())
              break e;
            jv(h, x, B), y = M;
          }
        else
          for (w = 0; w < f.length; w++) {
            if (x = f[w], M = x.instance, B = x.currentTarget, x = x.listener, M !== y && h.isPropagationStopped())
              break e;
            jv(h, x, B), y = M;
          }
      }
    }
    if (ll)
      throw n = k, ll = !1, k = null, n;
  }
  function Ft(n, r) {
    var o = r[Qd];
    o === void 0 && (o = r[Qd] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    o.has(f) || (Fv(r, n, 2, !1), o.add(f));
  }
  function dl(n, r, o) {
    var f = 0;
    r && (f |= 4), Fv(o, n, f, r);
  }
  var Ni = "_reactListening" + Math.random().toString(36).slice(2);
  function uu(n) {
    if (!n[Ni]) {
      n[Ni] = !0, p.forEach(function(o) {
        o !== "selectionchange" && ($g.has(o) || dl(o, !1, n), dl(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ni] || (r[Ni] = !0, dl("selectionchange", !1, r));
    }
  }
  function Fv(n, r, o, f) {
    switch (xd(r)) {
      case 1:
        var h = lv;
        break;
      case 4:
        h = _c;
        break;
      default:
        h = wc;
    }
    o = h.bind(null, r, o, n), h = void 0, !Ko || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: h }) : n.addEventListener(r, o, !0) : h !== void 0 ? n.addEventListener(r, o, { passive: h }) : n.addEventListener(r, o, !1);
  }
  function zc(n, r, o, f, h) {
    var y = f;
    if (!(r & 1) && !(r & 2) && f !== null)
      e:
        for (; ; ) {
          if (f === null)
            return;
          var w = f.tag;
          if (w === 3 || w === 4) {
            var x = f.stateNode.containerInfo;
            if (x === h || x.nodeType === 8 && x.parentNode === h)
              break;
            if (w === 4)
              for (w = f.return; w !== null; ) {
                var M = w.tag;
                if ((M === 3 || M === 4) && (M = w.stateNode.containerInfo, M === h || M.nodeType === 8 && M.parentNode === h))
                  return;
                w = w.return;
              }
            for (; x !== null; ) {
              if (w = Sa(x), w === null)
                return;
              if (M = w.tag, M === 5 || M === 6) {
                f = y = w;
                continue e;
              }
              x = x.parentNode;
            }
          }
          f = f.return;
        }
    Zo(function() {
      var B = y, X = Yt(o), te = [];
      e: {
        var K = zv.get(n);
        if (K !== void 0) {
          var ye = Tc, be = n;
          switch (n) {
            case "keypress":
              if (tu(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              ye = jg;
              break;
            case "focusin":
              be = "focus", ye = fl;
              break;
            case "focusout":
              be = "blur", ye = fl;
              break;
            case "beforeblur":
            case "afterblur":
              ye = fl;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ye = bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ye = cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ye = Fg;
              break;
            case Pd:
            case Nv:
            case Lv:
              ye = fv;
              break;
            case Uv:
              ye = vv;
              break;
            case "scroll":
              ye = uv;
              break;
            case "wheel":
              ye = ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              ye = zg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ye = Rc;
          }
          var Me = (r & 4) !== 0, pn = !Me && n === "scroll", A = Me ? K !== null ? K + "Capture" : null : K;
          Me = [];
          for (var L = B, H; L !== null; ) {
            H = L;
            var ue = H.stateNode;
            if (H.tag === 5 && ue !== null && (H = ue, A !== null && (ue = Ql(L, A), ue != null && Me.push(gs(L, ue, H)))), pn)
              break;
            L = L.return;
          }
          0 < Me.length && (K = new ye(K, be, null, o, X), te.push({ event: K, listeners: Me }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", K && o !== Or && (be = o.relatedTarget || o.fromElement) && (Sa(be) || be[Li]))
            break e;
          if ((ye || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, ye ? (be = o.relatedTarget || o.toElement, ye = B, be = be ? Sa(be) : null, be !== null && (pn = nt(be), be !== pn || be.tag !== 5 && be.tag !== 6) && (be = null)) : (ye = null, be = B), ye !== be)) {
            if (Me = bc, ue = "onMouseLeave", A = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Me = Rc, ue = "onPointerLeave", A = "onPointerEnter", L = "pointer"), pn = ye == null ? K : su(ye), H = be == null ? K : su(be), K = new Me(ue, L + "leave", ye, o, X), K.target = pn, K.relatedTarget = H, ue = null, Sa(X) === B && (Me = new Me(A, L + "enter", be, o, X), Me.target = H, Me.relatedTarget = pn, ue = Me), pn = ue, ye && be)
              t: {
                for (Me = ye, A = be, L = 0, H = Me; H; H = to(H))
                  L++;
                for (H = 0, ue = A; ue; ue = to(ue))
                  H++;
                for (; 0 < L - H; )
                  Me = to(Me), L--;
                for (; 0 < H - L; )
                  A = to(A), H--;
                for (; L--; ) {
                  if (Me === A || A !== null && Me === A.alternate)
                    break t;
                  Me = to(Me), A = to(A);
                }
                Me = null;
              }
            else
              Me = null;
            ye !== null && Vd(te, K, ye, Me, !1), be !== null && pn !== null && Vd(te, pn, be, Me, !0);
          }
        }
        e: {
          if (K = B ? su(B) : window, ye = K.nodeName && K.nodeName.toLowerCase(), ye === "select" || ye === "input" && K.type === "file")
            var Oe = wv;
          else if (Ev(K))
            if (Ud)
              Oe = bv;
            else {
              Oe = Vg;
              var Re = Pg;
            }
          else
            (ye = K.nodeName) && ye.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (Oe = Ig);
          if (Oe && (Oe = Oe(n, B))) {
            _v(te, Oe, o, X);
            break e;
          }
          Re && Re(n, K, B), n === "focusout" && (Re = K._wrapperState) && Re.controlled && K.type === "number" && Fa(K, "number", K.value);
        }
        switch (Re = B ? su(B) : window, n) {
          case "focusin":
            (Ev(Re) || Re.contentEditable === "true") && (Ga = Re, jd = B, hs = null);
            break;
          case "focusout":
            hs = jd = Ga = null;
            break;
          case "mousedown":
            Fd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fd = !1, Ov(te, o, X);
            break;
          case "selectionchange":
            if (Mv)
              break;
          case "keydown":
          case "keyup":
            Ov(te, o, X);
        }
        var Le;
        if ($a)
          e: {
            switch (n) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          au ? gv(n, o) && (Ge = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (mv && o.locale !== "ko" && (au || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && au && (Le = bd()) : (Ri = X, us = "value" in Ri ? Ri.value : Ri.textContent, au = !0)), Re = Ss(B, Ge), 0 < Re.length && (Ge = new kd(Ge, n, null, o, X), te.push({ event: Ge, listeners: Re }), Le ? Ge.data = Le : (Le = Mc(o), Le !== null && (Ge.data = Le)))), (Le = kc ? Hg(n, o) : Yg(n, o)) && (B = Ss(B, "onBeforeInput"), 0 < B.length && (X = new kd("onBeforeInput", "beforeinput", null, o, X), te.push({ event: X, listeners: B }), X.data = Le));
      }
      Uc(te, r);
    });
  }
  function gs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ss(n, r) {
    for (var o = r + "Capture", f = []; n !== null; ) {
      var h = n, y = h.stateNode;
      h.tag === 5 && y !== null && (h = y, y = Ql(n, o), y != null && f.unshift(gs(n, y, h)), y = Ql(n, r), y != null && f.push(gs(n, y, h))), n = n.return;
    }
    return f;
  }
  function to(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Vd(n, r, o, f, h) {
    for (var y = r._reactName, w = []; o !== null && o !== f; ) {
      var x = o, M = x.alternate, B = x.stateNode;
      if (M !== null && M === f)
        break;
      x.tag === 5 && B !== null && (x = B, h ? (M = Ql(o, y), M != null && w.unshift(gs(o, M, x))) : h || (M = Ql(o, y), M != null && w.push(gs(o, M, x)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Id = /\r\n?/g, Gg = /\u0000|\uFFFD/g;
  function Bd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Id, `
`).replace(Gg, "");
  }
  function Ac(n, r, o) {
    if (r = Bd(r), Bd(n) !== r && o)
      throw Error(c(425));
  }
  function jc() {
  }
  var Wd = null, no = null;
  function Es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ro = typeof setTimeout == "function" ? setTimeout : void 0, Hv = typeof clearTimeout == "function" ? clearTimeout : void 0, $d = typeof Promise == "function" ? Promise : void 0, Gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof $d < "u" ? function(n) {
    return $d.resolve(null).then(n).catch(Qg);
  } : ro;
  function Qg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function pl(n, r) {
    var o = r, f = 0;
    do {
      var h = o.nextSibling;
      if (n.removeChild(o), h && h.nodeType === 8)
        if (o = h.data, o === "/$") {
          if (f === 0) {
            n.removeChild(h), ls(r);
            return;
          }
          f--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || f++;
      o = h;
    } while (o);
    ls(r);
  }
  function Qa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function _s(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var hl = Math.random().toString(36).slice(2), oi = "__reactFiber$" + hl, ao = "__reactProps$" + hl, Li = "__reactContainer$" + hl, Qd = "__reactEvents$" + hl, qg = "__reactListeners$" + hl, qd = "__reactHandles$" + hl;
  function Sa(n) {
    var r = n[oi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Li] || o[oi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = _s(n); n !== null; ) {
            if (o = n[oi])
              return o;
            n = _s(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ws(n) {
    return n = n[oi] || n[Li], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function su(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function ze(n) {
    return n[ao] || null;
  }
  var vl = [], It = -1;
  function Je(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > It || (n.current = vl[It], vl[It] = null, It--);
  }
  function xt(n, r) {
    It++, vl[It] = n.current, n.current = r;
  }
  var ui = {}, $e = Je(ui), on = Je(!1), Lr = ui;
  function Ea(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ui;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r)
      return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, y;
    for (y in o)
      h[y] = r[y];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function Zt(n) {
    return n = n.childContextTypes, n != null;
  }
  function _a() {
    Tt(on), Tt($e);
  }
  function ml(n, r, o) {
    if ($e.current !== ui)
      throw Error(c(168));
    xt($e, r), xt(on, o);
  }
  function Cs(n, r, o) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return o;
    f = f.getChildContext();
    for (var h in f)
      if (!(h in r))
        throw Error(c(108, da(n) || "Unknown", h));
    return Ee({}, o, f);
  }
  function Fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ui, Lr = $e.current, xt($e, n), xt(on, on.current), !0;
  }
  function Yv(n, r, o) {
    var f = n.stateNode;
    if (!f)
      throw Error(c(169));
    o ? (n = Cs(n, r, Lr), f.__reactInternalMemoizedMergedChildContext = n, Tt(on), Tt($e), xt($e, n)) : Tt(on), xt(on, o);
  }
  var ta = null, An = !1, Ts = !1;
  function Zd(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  function Kd(n) {
    An = !0, Zd(n);
  }
  function Ur() {
    if (!Ts && ta !== null) {
      Ts = !0;
      var n = 0, r = Nt;
      try {
        var o = ta;
        for (Nt = 1; n < o.length; n++) {
          var f = o[n];
          do
            f = f(!0);
          while (f !== null);
        }
        ta = null, An = !1;
      } catch (h) {
        throw ta !== null && (ta = ta.slice(n + 1)), qt(bi, Ur), h;
      } finally {
        Nt = r, Ts = !1;
      }
    }
    return null;
  }
  var yl = [], zr = 0, io = null, cu = 0, Ar = [], ur = 0, wa = null, Bn = 1, Ui = "";
  function na(n, r) {
    yl[zr++] = cu, yl[zr++] = io, io = n, cu = r;
  }
  function Xd(n, r, o) {
    Ar[ur++] = Bn, Ar[ur++] = Ui, Ar[ur++] = wa, wa = n;
    var f = Bn;
    n = Ui;
    var h = 32 - va(f) - 1;
    f &= ~(1 << h), o += 1;
    var y = 32 - va(r) + h;
    if (30 < y) {
      var w = h - h % 5;
      y = (f & (1 << w) - 1).toString(32), f >>= w, h -= w, Bn = 1 << 32 - va(r) + h | o << h | f, Ui = y + n;
    } else
      Bn = 1 << y | o << h | f, Ui = n;
  }
  function Hc(n) {
    n.return !== null && (na(n, 1), Xd(n, 1, 0));
  }
  function Jd(n) {
    for (; n === io; )
      io = yl[--zr], yl[zr] = null, cu = yl[--zr], yl[zr] = null;
    for (; n === wa; )
      wa = Ar[--ur], Ar[ur] = null, Ui = Ar[--ur], Ar[ur] = null, Bn = Ar[--ur], Ar[ur] = null;
  }
  var ra = null, jr = null, Bt = !1, Ca = null;
  function ep(n, r) {
    var o = ka(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Pv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, jr = Qa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = wa !== null ? { id: Bn, overflow: Ui } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ka(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pc(n) {
    if (Bt) {
      var r = jr;
      if (r) {
        var o = r;
        if (!Pv(n, r)) {
          if (Yc(n))
            throw Error(c(418));
          r = Qa(o.nextSibling);
          var f = ra;
          r && Pv(n, r) ? ep(f, o) : (n.flags = n.flags & -4097 | 2, Bt = !1, ra = n);
        }
      } else {
        if (Yc(n))
          throw Error(c(418));
        n.flags = n.flags & -4097 | 2, Bt = !1, ra = n;
      }
    }
  }
  function Vv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ra = n;
  }
  function Vc(n) {
    if (n !== ra)
      return !1;
    if (!Bt)
      return Vv(n), Bt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = jr)) {
      if (Yc(n))
        throw Iv(), Error(c(418));
      for (; r; )
        ep(n, r), r = Qa(r.nextSibling);
    }
    if (Vv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                jr = Qa(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        jr = null;
      }
    } else
      jr = ra ? Qa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Iv() {
    for (var n = jr; n; )
      n = Qa(n.nextSibling);
  }
  function en() {
    jr = ra = null, Bt = !1;
  }
  function tp(n) {
    Ca === null ? Ca = [n] : Ca.push(n);
  }
  var Ic = fe.ReactCurrentBatchConfig;
  function aa(n, r) {
    if (n && n.defaultProps) {
      r = Ee({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var si = Je(null), Bc = null, gl = null, np = null;
  function rp() {
    np = gl = Bc = null;
  }
  function Sl(n) {
    var r = si.current;
    Tt(si), n._currentValue = r;
  }
  function jn(n, r, o) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function de(n, r) {
    Bc = n, np = gl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (gn = !0), n.firstContext = null);
  }
  function dn(n) {
    var r = n._currentValue;
    if (np !== n)
      if (n = { context: n, memoizedValue: r, next: null }, gl === null) {
        if (Bc === null)
          throw Error(c(308));
        gl = n, Bc.dependencies = { lanes: 0, firstContext: n };
      } else
        gl = gl.next = n;
    return r;
  }
  var Wn = null;
  function ap(n) {
    Wn === null ? Wn = [n] : Wn.push(n);
  }
  function Bv(n, r, o, f) {
    var h = r.interleaved;
    return h === null ? (o.next = o, ap(r)) : (o.next = h.next, h.next = o), r.interleaved = o, zi(n, f);
  }
  function zi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var El = !1;
  function ip(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ai(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(n, r, o) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, ct & 2) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, zi(n, o);
    }
    return h = f.interleaved, h === null ? (r.next = r, ap(f)) : (r.next = h.next, h.next = r), f.interleaved = r, zi(n, o);
  }
  function Wc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, ns(n, o);
    }
  }
  function lp(n, r) {
    var o = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, o === f)) {
      var h = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var w = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? h = y = w : y = y.next = w, o = o.next;
        } while (o !== null);
        y === null ? h = y = r : y = y.next = r;
      } else
        h = y = r;
      o = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: y, shared: f.shared, effects: f.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function wl(n, r, o, f) {
    var h = n.updateQueue;
    El = !1;
    var y = h.firstBaseUpdate, w = h.lastBaseUpdate, x = h.shared.pending;
    if (x !== null) {
      h.shared.pending = null;
      var M = x, B = M.next;
      M.next = null, w === null ? y = B : w.next = B, w = M;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, x = X.lastBaseUpdate, x !== w && (x === null ? X.firstBaseUpdate = B : x.next = B, X.lastBaseUpdate = M));
    }
    if (y !== null) {
      var te = h.baseState;
      w = 0, X = B = M = null, x = y;
      do {
        var K = x.lane, ye = x.eventTime;
        if ((f & K) === K) {
          X !== null && (X = X.next = {
            eventTime: ye,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var be = n, Me = x;
            switch (K = r, ye = o, Me.tag) {
              case 1:
                if (be = Me.payload, typeof be == "function") {
                  te = be.call(ye, te, K);
                  break e;
                }
                te = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = Me.payload, K = typeof be == "function" ? be.call(ye, te, K) : be, K == null)
                  break e;
                te = Ee({}, te, K);
                break e;
              case 2:
                El = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, K = h.effects, K === null ? h.effects = [x] : K.push(x));
        } else
          ye = { eventTime: ye, lane: K, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, X === null ? (B = X = ye, M = te) : X = X.next = ye, w |= K;
        if (x = x.next, x === null) {
          if (x = h.shared.pending, x === null)
            break;
          K = x, x = K.next, K.next = null, h.lastBaseUpdate = K, h.shared.pending = null;
        }
      } while (1);
      if (X === null && (M = te), h.baseState = M, h.firstBaseUpdate = B, h.lastBaseUpdate = X, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          w |= h.lane, h = h.next;
        while (h !== r);
      } else
        y === null && (h.shared.lanes = 0);
      Yi |= w, n.lanes = w, n.memoizedState = te;
    }
  }
  function lo(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var f = n[r], h = f.callback;
        if (h !== null) {
          if (f.callback = null, f = o, typeof h != "function")
            throw Error(c(191, h));
          h.call(f);
        }
      }
  }
  var Wv = new i.Component().refs;
  function op(n, r, o, f) {
    r = n.memoizedState, o = o(f, r), o = o == null ? r : Ee({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var $c = { isMounted: function(n) {
    return (n = n._reactInternals) ? nt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var f = dr(), h = Sn(n), y = Ai(f, h);
    y.payload = r, o != null && (y.callback = o), r = _l(n, y, h), r !== null && (pr(r, n, h, f), Wc(r, n, h));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var f = dr(), h = Sn(n), y = Ai(f, h);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = _l(n, y, h), r !== null && (pr(r, n, h, f), Wc(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), f = Sn(n), h = Ai(o, f);
    h.tag = 2, r != null && (h.callback = r), r = _l(n, h, f), r !== null && (pr(r, n, f, o), Wc(r, n, f));
  } };
  function $v(n, r, o, f, h, y, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, y, w) : r.prototype && r.prototype.isPureReactComponent ? !ps(o, f) || !ps(h, y) : !0;
  }
  function Gv(n, r, o) {
    var f = !1, h = ui, y = r.contextType;
    return typeof y == "object" && y !== null ? y = dn(y) : (h = Zt(r) ? Lr : $e.current, f = r.contextTypes, y = (f = f != null) ? Ea(n, h) : ui), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $c, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Qv(n, r, o, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, f), r.state !== n && $c.enqueueReplaceState(r, r.state, null);
  }
  function Gc(n, r, o, f) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = Wv, ip(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? h.context = dn(y) : (y = Zt(r) ? Lr : $e.current, h.context = Ea(n, y)), h.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (op(n, r, y, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && $c.enqueueReplaceState(h, h.state, null), wl(n, o, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function fu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(c(309));
          var f = o.stateNode;
        }
        if (!f)
          throw Error(c(147, n));
        var h = f, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(w) {
          var x = h.refs;
          x === Wv && (x = h.refs = {}), w === null ? delete x[y] : x[y] = w;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!o._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function Qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Zv(n) {
    function r(A, L) {
      if (n) {
        var H = A.deletions;
        H === null ? (A.deletions = [L], A.flags |= 16) : H.push(L);
      }
    }
    function o(A, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(A, L), L = L.sibling;
      return null;
    }
    function f(A, L) {
      for (A = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? A.set(L.key, L) : A.set(L.index, L), L = L.sibling;
      return A;
    }
    function h(A, L) {
      return A = Ml(A, L), A.index = 0, A.sibling = null, A;
    }
    function y(A, L, H) {
      return A.index = H, n ? (H = A.alternate, H !== null ? (H = H.index, H < L ? (A.flags |= 2, L) : H) : (A.flags |= 2, L)) : (A.flags |= 1048576, L);
    }
    function w(A) {
      return n && A.alternate === null && (A.flags |= 2), A;
    }
    function x(A, L, H, ue) {
      return L === null || L.tag !== 6 ? (L = Is(H, A.mode, ue), L.return = A, L) : (L = h(L, H), L.return = A, L);
    }
    function M(A, L, H, ue) {
      var Oe = H.type;
      return Oe === oe ? X(A, L, H.props.children, ue, H.key) : L !== null && (L.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === Mt && qv(Oe) === L.type) ? (ue = h(L, H.props), ue.ref = fu(A, L, H), ue.return = A, ue) : (ue = Rf(H.type, H.key, H.props, null, A.mode, ue), ue.ref = fu(A, L, H), ue.return = A, ue);
    }
    function B(A, L, H, ue) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== H.containerInfo || L.stateNode.implementation !== H.implementation ? (L = bo(H, A.mode, ue), L.return = A, L) : (L = h(L, H.children || []), L.return = A, L);
    }
    function X(A, L, H, ue, Oe) {
      return L === null || L.tag !== 7 ? (L = xo(H, A.mode, ue, Oe), L.return = A, L) : (L = h(L, H), L.return = A, L);
    }
    function te(A, L, H) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = Is("" + L, A.mode, H), L.return = A, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case se:
            return H = Rf(L.type, L.key, L.props, null, A.mode, H), H.ref = fu(A, null, L), H.return = A, H;
          case J:
            return L = bo(L, A.mode, H), L.return = A, L;
          case Mt:
            var ue = L._init;
            return te(A, ue(L._payload), H);
        }
        if (xi(L) || je(L))
          return L = xo(L, A.mode, H, null), L.return = A, L;
        Qc(A, L);
      }
      return null;
    }
    function K(A, L, H, ue) {
      var Oe = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return Oe !== null ? null : x(A, L, "" + H, ue);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case se:
            return H.key === Oe ? M(A, L, H, ue) : null;
          case J:
            return H.key === Oe ? B(A, L, H, ue) : null;
          case Mt:
            return Oe = H._init, K(
              A,
              L,
              Oe(H._payload),
              ue
            );
        }
        if (xi(H) || je(H))
          return Oe !== null ? null : X(A, L, H, ue, null);
        Qc(A, H);
      }
      return null;
    }
    function ye(A, L, H, ue, Oe) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number")
        return A = A.get(H) || null, x(L, A, "" + ue, Oe);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case se:
            return A = A.get(ue.key === null ? H : ue.key) || null, M(L, A, ue, Oe);
          case J:
            return A = A.get(ue.key === null ? H : ue.key) || null, B(L, A, ue, Oe);
          case Mt:
            var Re = ue._init;
            return ye(A, L, H, Re(ue._payload), Oe);
        }
        if (xi(ue) || je(ue))
          return A = A.get(H) || null, X(L, A, ue, Oe, null);
        Qc(L, ue);
      }
      return null;
    }
    function be(A, L, H, ue) {
      for (var Oe = null, Re = null, Le = L, Ge = L = 0, Yn = null; Le !== null && Ge < H.length; Ge++) {
        Le.index > Ge ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var yt = K(A, Le, H[Ge], ue);
        if (yt === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && yt.alternate === null && r(A, Le), L = y(yt, L, Ge), Re === null ? Oe = yt : Re.sibling = yt, Re = yt, Le = Yn;
      }
      if (Ge === H.length)
        return o(A, Le), Bt && na(A, Ge), Oe;
      if (Le === null) {
        for (; Ge < H.length; Ge++)
          Le = te(A, H[Ge], ue), Le !== null && (L = y(Le, L, Ge), Re === null ? Oe = Le : Re.sibling = Le, Re = Le);
        return Bt && na(A, Ge), Oe;
      }
      for (Le = f(A, Le); Ge < H.length; Ge++)
        Yn = ye(Le, A, Ge, H[Ge], ue), Yn !== null && (n && Yn.alternate !== null && Le.delete(Yn.key === null ? Ge : Yn.key), L = y(Yn, L, Ge), Re === null ? Oe = Yn : Re.sibling = Yn, Re = Yn);
      return n && Le.forEach(function(Ol) {
        return r(A, Ol);
      }), Bt && na(A, Ge), Oe;
    }
    function Me(A, L, H, ue) {
      var Oe = je(H);
      if (typeof Oe != "function")
        throw Error(c(150));
      if (H = Oe.call(H), H == null)
        throw Error(c(151));
      for (var Re = Oe = null, Le = L, Ge = L = 0, Yn = null, yt = H.next(); Le !== null && !yt.done; Ge++, yt = H.next()) {
        Le.index > Ge ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var Ol = K(A, Le, yt.value, ue);
        if (Ol === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && Ol.alternate === null && r(A, Le), L = y(Ol, L, Ge), Re === null ? Oe = Ol : Re.sibling = Ol, Re = Ol, Le = Yn;
      }
      if (yt.done)
        return o(
          A,
          Le
        ), Bt && na(A, Ge), Oe;
      if (Le === null) {
        for (; !yt.done; Ge++, yt = H.next())
          yt = te(A, yt.value, ue), yt !== null && (L = y(yt, L, Ge), Re === null ? Oe = yt : Re.sibling = yt, Re = yt);
        return Bt && na(A, Ge), Oe;
      }
      for (Le = f(A, Le); !yt.done; Ge++, yt = H.next())
        yt = ye(Le, A, Ge, yt.value, ue), yt !== null && (n && yt.alternate !== null && Le.delete(yt.key === null ? Ge : yt.key), L = y(yt, L, Ge), Re === null ? Oe = yt : Re.sibling = yt, Re = yt);
      return n && Le.forEach(function(v0) {
        return r(A, v0);
      }), Bt && na(A, Ge), Oe;
    }
    function pn(A, L, H, ue) {
      if (typeof H == "object" && H !== null && H.type === oe && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case se:
            e: {
              for (var Oe = H.key, Re = L; Re !== null; ) {
                if (Re.key === Oe) {
                  if (Oe = H.type, Oe === oe) {
                    if (Re.tag === 7) {
                      o(A, Re.sibling), L = h(Re, H.props.children), L.return = A, A = L;
                      break e;
                    }
                  } else if (Re.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === Mt && qv(Oe) === Re.type) {
                    o(A, Re.sibling), L = h(Re, H.props), L.ref = fu(A, Re, H), L.return = A, A = L;
                    break e;
                  }
                  o(A, Re);
                  break;
                } else
                  r(A, Re);
                Re = Re.sibling;
              }
              H.type === oe ? (L = xo(H.props.children, A.mode, ue, H.key), L.return = A, A = L) : (ue = Rf(H.type, H.key, H.props, null, A.mode, ue), ue.ref = fu(A, L, H), ue.return = A, A = ue);
            }
            return w(A);
          case J:
            e: {
              for (Re = H.key; L !== null; ) {
                if (L.key === Re)
                  if (L.tag === 4 && L.stateNode.containerInfo === H.containerInfo && L.stateNode.implementation === H.implementation) {
                    o(A, L.sibling), L = h(L, H.children || []), L.return = A, A = L;
                    break e;
                  } else {
                    o(A, L);
                    break;
                  }
                else
                  r(A, L);
                L = L.sibling;
              }
              L = bo(H, A.mode, ue), L.return = A, A = L;
            }
            return w(A);
          case Mt:
            return Re = H._init, pn(A, L, Re(H._payload), ue);
        }
        if (xi(H))
          return be(A, L, H, ue);
        if (je(H))
          return Me(A, L, H, ue);
        Qc(A, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, L !== null && L.tag === 6 ? (o(A, L.sibling), L = h(L, H), L.return = A, A = L) : (o(A, L), L = Is(H, A.mode, ue), L.return = A, A = L), w(A)) : o(A, L);
    }
    return pn;
  }
  var du = Zv(!0), Kv = Zv(!1), xs = {}, qa = Je(xs), bs = Je(xs), pu = Je(xs);
  function oo(n) {
    if (n === xs)
      throw Error(c(174));
    return n;
  }
  function up(n, r) {
    switch (xt(pu, r), xt(bs, n), xt(qa, xs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Tt(qa), xt(qa, r);
  }
  function Cl() {
    Tt(qa), Tt(bs), Tt(pu);
  }
  function He(n) {
    oo(pu.current);
    var r = oo(qa.current), o = vn(r, n.type);
    r !== o && (xt(bs, n), xt(qa, o));
  }
  function lt(n) {
    bs.current === n && (Tt(qa), Tt(bs));
  }
  var Ve = Je(0);
  function tn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ta = [];
  function qc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Zc = fe.ReactCurrentDispatcher, sp = fe.ReactCurrentBatchConfig, uo = 0, Wt = null, q = null, pt = null, Be = !1, ci = !1, ia = 0, so = 0;
  function $t() {
    throw Error(c(321));
  }
  function co(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!ga(n[o], r[o]))
        return !1;
    return !0;
  }
  function Tl(n, r, o, f, h, y) {
    if (uo = y, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Zc.current = n === null || n.memoizedState === null ? Kg : Xg, n = o(f, h), ci) {
      y = 0;
      do {
        if (ci = !1, ia = 0, 25 <= y)
          throw Error(c(301));
        y += 1, pt = q = null, r.updateQueue = null, Zc.current = fp, n = o(f, h);
      } while (ci);
    }
    if (Zc.current = pf, r = q !== null && q.next !== null, uo = 0, pt = q = Wt = null, Be = !1, r)
      throw Error(c(300));
    return n;
  }
  function fo() {
    var n = ia !== 0;
    return ia = 0, n;
  }
  function xa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pt === null ? Wt.memoizedState = pt = n : pt = pt.next = n, pt;
  }
  function Fr() {
    if (q === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = q.next;
    var r = pt === null ? Wt.memoizedState : pt.next;
    if (r !== null)
      pt = r, q = n;
    else {
      if (n === null)
        throw Error(c(310));
      q = n, n = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, pt === null ? Wt.memoizedState = pt = n : pt = pt.next = n;
    }
    return pt;
  }
  function po(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Rs(n) {
    var r = Fr(), o = r.queue;
    if (o === null)
      throw Error(c(311));
    o.lastRenderedReducer = n;
    var f = q, h = f.baseQueue, y = o.pending;
    if (y !== null) {
      if (h !== null) {
        var w = h.next;
        h.next = y.next, y.next = w;
      }
      f.baseQueue = h = y, o.pending = null;
    }
    if (h !== null) {
      y = h.next, f = f.baseState;
      var x = w = null, M = null, B = y;
      do {
        var X = B.lane;
        if ((uo & X) === X)
          M !== null && (M = M.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), f = B.hasEagerState ? B.eagerState : n(f, B.action);
        else {
          var te = {
            lane: X,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          M === null ? (x = M = te, w = f) : M = M.next = te, Wt.lanes |= X, Yi |= X;
        }
        B = B.next;
      } while (B !== null && B !== y);
      M === null ? w = f : M.next = x, ga(f, r.memoizedState) || (gn = !0), r.memoizedState = f, r.baseState = w, r.baseQueue = M, o.lastRenderedState = f;
    }
    if (n = o.interleaved, n !== null) {
      h = n;
      do
        y = h.lane, Wt.lanes |= y, Yi |= y, h = h.next;
      while (h !== n);
    } else
      h === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ds(n) {
    var r = Fr(), o = r.queue;
    if (o === null)
      throw Error(c(311));
    o.lastRenderedReducer = n;
    var f = o.dispatch, h = o.pending, y = r.memoizedState;
    if (h !== null) {
      o.pending = null;
      var w = h = h.next;
      do
        y = n(y, w.action), w = w.next;
      while (w !== h);
      ga(y, r.memoizedState) || (gn = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
    }
    return [y, f];
  }
  function Kc() {
  }
  function Xc(n, r) {
    var o = Wt, f = Fr(), h = r(), y = !ga(f.memoizedState, h);
    if (y && (f.memoizedState = h, gn = !0), f = f.queue, ks(tf.bind(null, o, f, n), [n]), f.getSnapshot !== r || y || pt !== null && pt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ho(9, ef.bind(null, o, f, h, r), void 0, null), nn === null)
        throw Error(c(349));
      uo & 30 || Jc(o, r, h);
    }
    return h;
  }
  function Jc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function ef(n, r, o, f) {
    r.value = o, r.getSnapshot = f, nf(r) && rf(n);
  }
  function tf(n, r, o) {
    return o(function() {
      nf(r) && rf(n);
    });
  }
  function nf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ga(n, o);
    } catch {
      return !0;
    }
  }
  function rf(n) {
    var r = zi(n, 1);
    r !== null && pr(r, n, 1, -1);
  }
  function af(n) {
    var r = xa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: n }, r.queue = n, n = n.dispatch = df.bind(null, Wt, n), [r.memoizedState, n];
  }
  function ho(n, r, o, f) {
    return n = { tag: n, create: r, destroy: o, deps: f, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (f = o.next, o.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function lf() {
    return Fr().memoizedState;
  }
  function vo(n, r, o, f) {
    var h = xa();
    Wt.flags |= n, h.memoizedState = ho(1 | r, o, void 0, f === void 0 ? null : f);
  }
  function ji(n, r, o, f) {
    var h = Fr();
    f = f === void 0 ? null : f;
    var y = void 0;
    if (q !== null) {
      var w = q.memoizedState;
      if (y = w.destroy, f !== null && co(f, w.deps)) {
        h.memoizedState = ho(r, o, y, f);
        return;
      }
    }
    Wt.flags |= n, h.memoizedState = ho(1 | r, o, y, f);
  }
  function of(n, r) {
    return vo(8390656, 8, n, r);
  }
  function ks(n, r) {
    return ji(2048, 8, n, r);
  }
  function uf(n, r) {
    return ji(4, 2, n, r);
  }
  function sf(n, r) {
    return ji(4, 4, n, r);
  }
  function cp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function hu(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ji(4, 4, cp.bind(null, r, n), o);
  }
  function cf() {
  }
  function vu(n, r) {
    var o = Fr();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && co(r, f[1]) ? f[0] : (o.memoizedState = [n, r], n);
  }
  function xl(n, r) {
    var o = Fr();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && co(r, f[1]) ? f[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Hr(n, r, o) {
    return uo & 21 ? (ga(o, r) || (o = Sc(), Wt.lanes |= o, Yi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, gn = !0), n.memoizedState = o);
  }
  function Zg(n, r) {
    var o = Nt;
    Nt = o !== 0 && 4 > o ? o : 4, n(!0);
    var f = sp.transition;
    sp.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = o, sp.transition = f;
    }
  }
  function Ht() {
    return Fr().memoizedState;
  }
  function ff(n, r, o) {
    var f = Sn(n);
    if (o = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null }, mu(n))
      Ms(r, o);
    else if (o = Bv(n, r, o, f), o !== null) {
      var h = dr();
      pr(o, n, f, h), Xv(o, r, f);
    }
  }
  function df(n, r, o) {
    var f = Sn(n), h = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (mu(n))
      Ms(r, h);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var w = r.lastRenderedState, x = y(w, o);
          if (h.hasEagerState = !0, h.eagerState = x, ga(x, w)) {
            var M = r.interleaved;
            M === null ? (h.next = h, ap(r)) : (h.next = M.next, M.next = h), r.interleaved = h;
            return;
          }
        } catch {
        } finally {
        }
      o = Bv(n, r, h, f), o !== null && (h = dr(), pr(o, n, f, h), Xv(o, r, f));
    }
  }
  function mu(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function Ms(n, r) {
    ci = Be = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Xv(n, r, o) {
    if (o & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, ns(n, o);
    }
  }
  var pf = { readContext: dn, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: !1 }, Kg = { readContext: dn, useCallback: function(n, r) {
    return xa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: dn, useEffect: of, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, vo(
      4194308,
      4,
      cp.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return vo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = xa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var f = xa();
    return r = o !== void 0 ? o(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = ff.bind(null, Wt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = xa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: af, useDebugValue: cf, useDeferredValue: function(n) {
    return xa().memoizedState = n;
  }, useTransition: function() {
    var n = af(!1), r = n[0];
    return n = Zg.bind(null, n[1]), xa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var f = Wt, h = xa();
    if (Bt) {
      if (o === void 0)
        throw Error(c(407));
      o = o();
    } else {
      if (o = r(), nn === null)
        throw Error(c(349));
      uo & 30 || Jc(f, r, o);
    }
    h.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return h.queue = y, of(tf.bind(
      null,
      f,
      y,
      n
    ), [n]), f.flags |= 2048, ho(9, ef.bind(null, f, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = xa(), r = nn.identifierPrefix;
    if (Bt) {
      var o = Ui, f = Bn;
      o = (f & ~(1 << 32 - va(f) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ia++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = so++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Xg = {
    readContext: dn,
    useCallback: vu,
    useContext: dn,
    useEffect: ks,
    useImperativeHandle: hu,
    useInsertionEffect: uf,
    useLayoutEffect: sf,
    useMemo: xl,
    useReducer: Rs,
    useRef: lf,
    useState: function() {
      return Rs(po);
    },
    useDebugValue: cf,
    useDeferredValue: function(n) {
      var r = Fr();
      return Hr(r, q.memoizedState, n);
    },
    useTransition: function() {
      var n = Rs(po)[0], r = Fr().memoizedState;
      return [n, r];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Xc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, fp = { readContext: dn, useCallback: vu, useContext: dn, useEffect: ks, useImperativeHandle: hu, useInsertionEffect: uf, useLayoutEffect: sf, useMemo: xl, useReducer: Ds, useRef: lf, useState: function() {
    return Ds(po);
  }, useDebugValue: cf, useDeferredValue: function(n) {
    var r = Fr();
    return q === null ? r.memoizedState = n : Hr(r, q.memoizedState, n);
  }, useTransition: function() {
    var n = Ds(po)[0], r = Fr().memoizedState;
    return [n, r];
  }, useMutableSource: Kc, useSyncExternalStore: Xc, useId: Ht, unstable_isNewReconciler: !1 };
  function yu(n, r) {
    try {
      var o = "", f = r;
      do
        o += ni(f), f = f.return;
      while (f);
      var h = o;
    } catch (y) {
      h = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function Os(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function hf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Jg = typeof WeakMap == "function" ? WeakMap : Map;
  function Jv(n, r, o) {
    o = Ai(-1, o), o.tag = 3, o.payload = { element: null };
    var f = r.value;
    return o.callback = function() {
      _f || (_f = !0, Eo = f), hf(n, r);
    }, o;
  }
  function Ns(n, r, o) {
    o = Ai(-1, o), o.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      o.payload = function() {
        return f(h);
      }, o.callback = function() {
        hf(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      hf(n, r), typeof f != "function" && (pi === null ? pi = /* @__PURE__ */ new Set([this]) : pi.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function em(n, r, o) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Jg();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else
      h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(o) || (h.add(o), n = l0.bind(null, n, r, o), r.then(n, n));
  }
  function dp(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function pp(n, r, o, f, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ai(-1, 1), r.tag = 2, _l(o, r, 1))), o.lanes |= 1), n);
  }
  var e0 = fe.ReactCurrentOwner, gn = !1;
  function xn(n, r, o, f) {
    r.child = n === null ? Kv(r, null, o, f) : du(r, n.child, o, f);
  }
  function bl(n, r, o, f, h) {
    o = o.render;
    var y = r.ref;
    return de(r, h), f = Tl(n, r, o, f, y, h), o = fo(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, $n(n, r, h)) : (Bt && o && Hc(r), r.flags |= 1, xn(n, r, f, h), r.child);
  }
  function vf(n, r, o, f, h) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Np(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, Yr(n, r, y, f, h)) : (n = Rf(o.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & h)) {
      var w = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ps, o(w, f) && n.ref === r.ref)
        return $n(n, r, h);
    }
    return r.flags |= 1, n = Ml(y, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yr(n, r, o, f, h) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ps(y, f) && n.ref === r.ref)
        if (gn = !1, r.pendingProps = f = y, (n.lanes & h) !== 0)
          n.flags & 131072 && (gn = !0);
        else
          return r.lanes = n.lanes, $n(n, r, h);
    }
    return gu(n, r, o, f, h);
  }
  function mo(n, r, o) {
    var f = r.pendingProps, h = f.children, y = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xt(Tu, la), la |= o;
      else {
        if (!(o & 1073741824))
          return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xt(Tu, la), la |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = y !== null ? y.baseLanes : o, xt(Tu, la), la |= f;
      }
    else
      y !== null ? (f = y.baseLanes | o, r.memoizedState = null) : f = o, xt(Tu, la), la |= f;
    return xn(n, r, h, o), r.child;
  }
  function et(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function gu(n, r, o, f, h) {
    var y = Zt(o) ? Lr : $e.current;
    return y = Ea(r, y), de(r, h), o = Tl(n, r, o, f, y, h), f = fo(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, $n(n, r, h)) : (Bt && f && Hc(r), r.flags |= 1, xn(n, r, o, h), r.child);
  }
  function hp(n, r, o, f, h) {
    if (Zt(o)) {
      var y = !0;
      Fc(r);
    } else
      y = !1;
    if (de(r, h), r.stateNode === null)
      sr(n, r), Gv(r, o, f), Gc(r, o, f, h), f = !0;
    else if (n === null) {
      var w = r.stateNode, x = r.memoizedProps;
      w.props = x;
      var M = w.context, B = o.contextType;
      typeof B == "object" && B !== null ? B = dn(B) : (B = Zt(o) ? Lr : $e.current, B = Ea(r, B));
      var X = o.getDerivedStateFromProps, te = typeof X == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      te || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (x !== f || M !== B) && Qv(r, w, f, B), El = !1;
      var K = r.memoizedState;
      w.state = K, wl(r, f, w, h), M = r.memoizedState, x !== f || K !== M || on.current || El ? (typeof X == "function" && (op(r, o, X, f), M = r.memoizedState), (x = El || $v(r, o, x, f, K, M, B)) ? (te || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = M), w.props = f, w.state = M, w.context = B, f = x) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      w = r.stateNode, Tn(n, r), x = r.memoizedProps, B = r.type === r.elementType ? x : aa(r.type, x), w.props = B, te = r.pendingProps, K = w.context, M = o.contextType, typeof M == "object" && M !== null ? M = dn(M) : (M = Zt(o) ? Lr : $e.current, M = Ea(r, M));
      var ye = o.getDerivedStateFromProps;
      (X = typeof ye == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (x !== te || K !== M) && Qv(r, w, f, M), El = !1, K = r.memoizedState, w.state = K, wl(r, f, w, h);
      var be = r.memoizedState;
      x !== te || K !== be || on.current || El ? (typeof ye == "function" && (op(r, o, ye, f), be = r.memoizedState), (B = El || $v(r, o, B, f, K, be, M) || !1) ? (X || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(f, be, M), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(f, be, M)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = be), w.props = f, w.state = be, w.context = M, f = B) : (typeof w.componentDidUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return tm(n, r, o, f, y, h);
  }
  function tm(n, r, o, f, h, y) {
    et(n, r);
    var w = (r.flags & 128) !== 0;
    if (!f && !w)
      return h && Yv(r, o, !1), $n(n, r, y);
    f = r.stateNode, e0.current = r;
    var x = w && typeof o.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && w ? (r.child = du(r, n.child, null, y), r.child = du(r, null, x, y)) : xn(n, r, x, y), r.memoizedState = f.state, h && Yv(r, o, !0), r.child;
  }
  function nm(n) {
    var r = n.stateNode;
    r.pendingContext ? ml(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ml(n, r.context, !1), up(n, r.containerInfo);
  }
  function mf(n, r, o, f, h) {
    return en(), tp(h), r.flags |= 256, xn(n, r, o, f), r.child;
  }
  var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function mp(n, r, o) {
    var f = r.pendingProps, h = Ve.current, y = !1, w = (r.flags & 128) !== 0, x;
    if ((x = w) || (x = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), x ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), xt(Ve, h & 1), n === null)
      return Pc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = f.children, n = f.fallback, y ? (f = r.mode, y = r.child, w = { mode: "hidden", children: w }, !(f & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = w) : y = Vs(w, f, 0, null), n = xo(n, f, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = vp(o), r.memoizedState = yo, n) : yp(r, w));
    if (h = n.memoizedState, h !== null && (x = h.dehydrated, x !== null))
      return t0(n, r, w, f, x, h, o);
    if (y) {
      y = f.fallback, w = r.mode, h = n.child, x = h.sibling;
      var M = { mode: "hidden", children: f.children };
      return !(w & 1) && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = M, r.deletions = null) : (f = Ml(h, M), f.subtreeFlags = h.subtreeFlags & 14680064), x !== null ? y = Ml(x, y) : (y = xo(y, w, o, null), y.flags |= 2), y.return = r, f.return = r, f.sibling = y, r.child = f, f = y, y = r.child, w = n.child.memoizedState, w = w === null ? vp(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, y.memoizedState = w, y.childLanes = n.childLanes & ~o, r.memoizedState = yo, f;
    }
    return y = n.child, n = y.sibling, f = Ml(y, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = o), f.return = r, f.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function yp(n, r) {
    return r = Vs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Su(n, r, o, f) {
    return f !== null && tp(f), du(r, n.child, null, o), n = yp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function t0(n, r, o, f, h, y, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, f = Os(Error(c(422))), Su(n, r, w, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = f.fallback, h = r.mode, f = Vs({ mode: "visible", children: f.children }, h, 0, null), y = xo(y, h, w, null), y.flags |= 2, f.return = r, y.return = r, f.sibling = y, r.child = f, r.mode & 1 && du(r, n.child, null, w), r.child.memoizedState = vp(w), r.memoizedState = yo, y);
    if (!(r.mode & 1))
      return Su(n, r, w, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f)
        var x = f.dgst;
      return f = x, y = Error(c(419)), f = Os(y, f, void 0), Su(n, r, w, f);
    }
    if (x = (w & n.childLanes) !== 0, gn || x) {
      if (f = nn, f !== null) {
        switch (w & -w) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = h & (f.suspendedLanes | w) ? 0 : h, h !== 0 && h !== y.retryLane && (y.retryLane = h, zi(n, h), pr(f, n, h, -1));
      }
      return kp(), f = Os(Error(c(421))), Su(n, r, w, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = o0.bind(null, n), h._reactRetry = r, null) : (n = y.treeContext, jr = Qa(h.nextSibling), ra = r, Bt = !0, Ca = null, n !== null && (Ar[ur++] = Bn, Ar[ur++] = Ui, Ar[ur++] = wa, Bn = n.id, Ui = n.overflow, wa = r), r = yp(r, f.children), r.flags |= 4096, r);
  }
  function gp(n, r, o) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), jn(n.return, r, o);
  }
  function yf(n, r, o, f, h) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: o, tailMode: h } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = f, y.tail = o, y.tailMode = h);
  }
  function Sp(n, r, o) {
    var f = r.pendingProps, h = f.revealOrder, y = f.tail;
    if (xn(n, r, f.children, o), f = Ve.current, f & 2)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && gp(n, o, r);
            else if (n.tag === 19)
              gp(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      f &= 1;
    }
    if (xt(Ve, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (o = r.child, h = null; o !== null; )
            n = o.alternate, n !== null && tn(n) === null && (h = o), o = o.sibling;
          o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), yf(r, !1, h, o, y);
          break;
        case "backwards":
          for (o = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && tn(n) === null) {
              r.child = h;
              break;
            }
            n = h.sibling, h.sibling = o, o = h, h = n;
          }
          yf(r, !0, o, null, y);
          break;
        case "together":
          yf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function sr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function $n(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Yi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, o = Ml(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Ml(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Fi(n, r, o) {
    switch (r.tag) {
      case 3:
        nm(r), en();
        break;
      case 5:
        He(r);
        break;
      case 1:
        Zt(r.type) && Fc(r);
        break;
      case 4:
        up(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        xt(si, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (xt(Ve, Ve.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? mp(n, r, o) : (xt(Ve, Ve.current & 1), n = $n(n, r, o), n !== null ? n.sibling : null);
        xt(Ve, Ve.current & 1);
        break;
      case 19:
        if (f = (o & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return Sp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), xt(Ve, Ve.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mo(n, r, o);
    }
    return $n(n, r, o);
  }
  var Ls, go, ba, bn;
  Ls = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, go = function() {
  }, ba = function(n, r, o, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, oo(qa.current);
      var y = null;
      switch (o) {
        case "input":
          h = ar(n, h), f = ar(n, f), y = [];
          break;
        case "select":
          h = Ee({}, h, { value: void 0 }), f = Ee({}, f, { value: void 0 }), y = [];
          break;
        case "textarea":
          h = Ha(n, h), f = Ha(n, f), y = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = jc);
      }
      Nn(o, f);
      var w;
      o = null;
      for (B in h)
        if (!f.hasOwnProperty(B) && h.hasOwnProperty(B) && h[B] != null)
          if (B === "style") {
            var x = h[B];
            for (w in x)
              x.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
          } else
            B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (m.hasOwnProperty(B) ? y || (y = []) : (y = y || []).push(B, null));
      for (B in f) {
        var M = f[B];
        if (x = h != null ? h[B] : void 0, f.hasOwnProperty(B) && M !== x && (M != null || x != null))
          if (B === "style")
            if (x) {
              for (w in x)
                !x.hasOwnProperty(w) || M && M.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
              for (w in M)
                M.hasOwnProperty(w) && x[w] !== M[w] && (o || (o = {}), o[w] = M[w]);
            } else
              o || (y || (y = []), y.push(
                B,
                o
              )), o = M;
          else
            B === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, x = x ? x.__html : void 0, M != null && x !== M && (y = y || []).push(B, M)) : B === "children" ? typeof M != "string" && typeof M != "number" || (y = y || []).push(B, "" + M) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (m.hasOwnProperty(B) ? (M != null && B === "onScroll" && Ft("scroll", n), y || x === M || (y = [])) : (y = y || []).push(B, M));
      }
      o && (y = y || []).push("style", o);
      var B = y;
      (r.updateQueue = B) && (r.flags |= 4);
    }
  }, bn = function(n, r, o, f) {
    o !== f && (r.flags |= 4);
  };
  function Us(n, r) {
    if (!Bt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var f = null; o !== null; )
            o.alternate !== null && (f = o), o = o.sibling;
          f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
      }
  }
  function cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, f = 0;
    if (r)
      for (var h = n.child; h !== null; )
        o |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else
      for (h = n.child; h !== null; )
        o |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = o, r;
  }
  function n0(n, r, o) {
    var f = r.pendingProps;
    switch (Jd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return cr(r), null;
      case 1:
        return Zt(r.type) && _a(), cr(r), null;
      case 3:
        return f = r.stateNode, Cl(), Tt(on), Tt($e), qc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ca !== null && (Ps(Ca), Ca = null))), go(n, r), cr(r), null;
      case 5:
        lt(r);
        var h = oo(pu.current);
        if (o = r.type, n !== null && r.stateNode != null)
          ba(n, r, o, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(c(166));
            return cr(r), null;
          }
          if (n = oo(qa.current), Vc(r)) {
            f = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (f[oi] = r, f[ao] = y, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Ft("cancel", f), Ft("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ft("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < ys.length; h++)
                  Ft(ys[h], f);
                break;
              case "source":
                Ft("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Ft(
                  "error",
                  f
                ), Ft("load", f);
                break;
              case "details":
                Ft("toggle", f);
                break;
              case "input":
                In(f, y), Ft("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!y.multiple }, Ft("invalid", f);
                break;
              case "textarea":
                qr(f, y), Ft("invalid", f);
            }
            Nn(o, y), h = null;
            for (var w in y)
              if (y.hasOwnProperty(w)) {
                var x = y[w];
                w === "children" ? typeof x == "string" ? f.textContent !== x && (y.suppressHydrationWarning !== !0 && Ac(f.textContent, x, n), h = ["children", x]) : typeof x == "number" && f.textContent !== "" + x && (y.suppressHydrationWarning !== !0 && Ac(
                  f.textContent,
                  x,
                  n
                ), h = ["children", "" + x]) : m.hasOwnProperty(w) && x != null && w === "onScroll" && Ft("scroll", f);
              }
            switch (o) {
              case "input":
                Mr(f), ha(f, y, !0);
                break;
              case "textarea":
                Mr(f), Zr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (f.onclick = jc);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            w = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = w.createElement(o, { is: f.is }) : (n = w.createElement(o), o === "select" && (w = n, f.multiple ? w.multiple = !0 : f.size && (w.size = f.size))) : n = w.createElementNS(n, o), n[oi] = r, n[ao] = f, Ls(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = fn(o, f), o) {
                case "dialog":
                  Ft("cancel", n), Ft("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ft("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < ys.length; h++)
                    Ft(ys[h], n);
                  h = f;
                  break;
                case "source":
                  Ft("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Ft(
                    "error",
                    n
                  ), Ft("load", n), h = f;
                  break;
                case "details":
                  Ft("toggle", n), h = f;
                  break;
                case "input":
                  In(n, f), h = ar(n, f), Ft("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = Ee({}, f, { value: void 0 }), Ft("invalid", n);
                  break;
                case "textarea":
                  qr(n, f), h = Ha(n, f), Ft("invalid", n);
                  break;
                default:
                  h = f;
              }
              Nn(o, h), x = h;
              for (y in x)
                if (x.hasOwnProperty(y)) {
                  var M = x[y];
                  y === "style" ? Ot(n, M) : y === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && al(n, M)) : y === "children" ? typeof M == "string" ? (o !== "textarea" || M !== "") && Pa(n, M) : typeof M == "number" && Pa(n, "" + M) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? M != null && y === "onScroll" && Ft("scroll", n) : M != null && ie(n, y, M, w));
                }
              switch (o) {
                case "input":
                  Mr(n), ha(n, f, !1);
                  break;
                case "textarea":
                  Mr(n), Zr(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + rr(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, y = f.value, y != null ? ai(n, !!f.multiple, y, !1) : f.defaultValue != null && ai(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = jc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          bn(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null)
            throw Error(c(166));
          if (o = oo(pu.current), oo(qa.current), Vc(r)) {
            if (f = r.stateNode, o = r.memoizedProps, f[oi] = r, (y = f.nodeValue !== o) && (n = ra, n !== null))
              switch (n.tag) {
                case 3:
                  Ac(f.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ac(f.nodeValue, o, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            f = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(f), f[oi] = r, r.stateNode = f;
        }
        return cr(r), null;
      case 13:
        if (Tt(Ve), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Bt && jr !== null && r.mode & 1 && !(r.flags & 128))
            Iv(), en(), r.flags |= 98560, y = !1;
          else if (y = Vc(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!y)
                throw Error(c(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y)
                throw Error(c(317));
              y[oi] = r;
            } else
              en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            cr(r), y = !1;
          } else
            Ca !== null && (Ps(Ca), Ca = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ve.current & 1 ? Dn === 0 && (Dn = 3) : kp())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return Cl(), go(n, r), n === null && uu(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return Sl(r.type._context), cr(r), null;
      case 17:
        return Zt(r.type) && _a(), cr(r), null;
      case 19:
        if (Tt(Ve), y = r.memoizedState, y === null)
          return cr(r), null;
        if (f = (r.flags & 128) !== 0, w = y.rendering, w === null)
          if (f)
            Us(y, !1);
          else {
            if (Dn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = tn(n), w !== null) {
                  for (r.flags |= 128, Us(y, !1), f = w.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = o, o = r.child; o !== null; )
                    y = o, n = f, y.flags &= 14680066, w = y.alternate, w === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = w.childLanes, y.lanes = w.lanes, y.child = w.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = w.memoizedProps, y.memoizedState = w.memoizedState, y.updateQueue = w.updateQueue, y.type = w.type, n = w.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return xt(Ve, Ve.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && St() > bu && (r.flags |= 128, f = !0, Us(y, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = tn(w), n !== null) {
              if (r.flags |= 128, f = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Us(y, !0), y.tail === null && y.tailMode === "hidden" && !w.alternate && !Bt)
                return cr(r), null;
            } else
              2 * St() - y.renderingStartTime > bu && o !== 1073741824 && (r.flags |= 128, f = !0, Us(y, !1), r.lanes = 4194304);
          y.isBackwards ? (w.sibling = r.child, r.child = w) : (o = y.last, o !== null ? o.sibling = w : r.child = w, y.last = w);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = St(), r.sibling = null, o = Ve.current, xt(Ve, f ? o & 1 | 2 : o & 1), r) : (cr(r), null);
      case 22:
      case 23:
        return Dp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? la & 1073741824 && (cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function Ep(n, r) {
    switch (Jd(r), r.tag) {
      case 1:
        return Zt(r.type) && _a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cl(), Tt(on), Tt($e), qc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lt(r), null;
      case 13:
        if (Tt(Ve), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(c(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Tt(Ve), null;
      case 4:
        return Cl(), null;
      case 10:
        return Sl(r.type._context), null;
      case 22:
      case 23:
        return Dp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zs = !1, Rn = !1, rm = typeof WeakSet == "function" ? WeakSet : Set, Ce = null;
  function Eu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (f) {
          sn(n, r, f);
        }
      else
        o.current = null;
  }
  function As(n, r, o) {
    try {
      o();
    } catch (f) {
      sn(n, r, f);
    }
  }
  var am = !1;
  function im(n, r) {
    if (Wd = Kl, n = Oc(), Mi(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var f = o.getSelection && o.getSelection();
          if (f && f.rangeCount !== 0) {
            o = f.anchorNode;
            var h = f.anchorOffset, y = f.focusNode;
            f = f.focusOffset;
            try {
              o.nodeType, y.nodeType;
            } catch {
              o = null;
              break e;
            }
            var w = 0, x = -1, M = -1, B = 0, X = 0, te = n, K = null;
            t:
              for (; ; ) {
                for (var ye; te !== o || h !== 0 && te.nodeType !== 3 || (x = w + h), te !== y || f !== 0 && te.nodeType !== 3 || (M = w + f), te.nodeType === 3 && (w += te.nodeValue.length), (ye = te.firstChild) !== null; )
                  K = te, te = ye;
                for (; ; ) {
                  if (te === n)
                    break t;
                  if (K === o && ++B === h && (x = w), K === y && ++X === f && (M = w), (ye = te.nextSibling) !== null)
                    break;
                  te = K, K = te.parentNode;
                }
                te = ye;
              }
            o = x === -1 || M === -1 ? null : { start: x, end: M };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (no = { focusedElem: n, selectionRange: o }, Kl = !1, Ce = r; Ce !== null; )
      if (r = Ce, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ce = n;
      else
        for (; Ce !== null; ) {
          r = Ce;
          try {
            var be = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (be !== null) {
                    var Me = be.memoizedProps, pn = be.memoizedState, A = r.stateNode, L = A.getSnapshotBeforeUpdate(r.elementType === r.type ? Me : aa(r.type, Me), pn);
                    A.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var H = r.stateNode.containerInfo;
                  H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (ue) {
            sn(r, r.return, ue);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ce = n;
            break;
          }
          Ce = r.return;
        }
    return be = am, am = !1, be;
  }
  function js(n, r, o) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var y = h.destroy;
          h.destroy = void 0, y !== void 0 && As(r, o, y);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var f = o.create;
          o.destroy = f();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function _p(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function wp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, wp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[oi], delete r[ao], delete r[Qd], delete r[qg], delete r[qd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function lm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function gf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || lm(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function _u(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = jc));
    else if (f !== 4 && (n = n.child, n !== null))
      for (_u(n, r, o), n = n.sibling; n !== null; )
        _u(n, r, o), n = n.sibling;
  }
  function fi(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null))
      for (fi(n, r, o), n = n.sibling; n !== null; )
        fi(n, r, o), n = n.sibling;
  }
  var Kt = null, Fn = !1;
  function Ra(n, r, o) {
    for (o = o.child; o !== null; )
      wu(n, r, o), o = o.sibling;
  }
  function wu(n, r, o) {
    if (Ia && typeof Ia.onCommitFiberUnmount == "function")
      try {
        Ia.onCommitFiberUnmount(ts, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Rn || Eu(o, r);
      case 6:
        var f = Kt, h = Fn;
        Kt = null, Ra(n, r, o), Kt = f, Fn = h, Kt !== null && (Fn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Kt.removeChild(o.stateNode));
        break;
      case 18:
        Kt !== null && (Fn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? pl(n.parentNode, o) : n.nodeType === 1 && pl(n, o), ls(n)) : pl(Kt, o.stateNode));
        break;
      case 4:
        f = Kt, h = Fn, Kt = o.stateNode.containerInfo, Fn = !0, Ra(n, r, o), Kt = f, Fn = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rn && (f = o.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var y = h, w = y.destroy;
            y = y.tag, w !== void 0 && (y & 2 || y & 4) && As(o, r, w), h = h.next;
          } while (h !== f);
        }
        Ra(n, r, o);
        break;
      case 1:
        if (!Rn && (Eu(o, r), f = o.stateNode, typeof f.componentWillUnmount == "function"))
          try {
            f.props = o.memoizedProps, f.state = o.memoizedState, f.componentWillUnmount();
          } catch (x) {
            sn(o, r, x);
          }
        Ra(n, r, o);
        break;
      case 21:
        Ra(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Rn = (f = Rn) || o.memoizedState !== null, Ra(n, r, o), Rn = f) : Ra(n, r, o);
        break;
      default:
        Ra(n, r, o);
    }
  }
  function Hi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new rm()), r.forEach(function(f) {
        var h = u0.bind(null, n, f);
        o.has(f) || (o.add(f), f.then(h, h));
      });
    }
  }
  function Za(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var f = 0; f < o.length; f++) {
        var h = o[f];
        try {
          var y = n, w = r, x = w;
          e:
            for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  Kt = x.stateNode, Fn = !1;
                  break e;
                case 3:
                  Kt = x.stateNode.containerInfo, Fn = !0;
                  break e;
                case 4:
                  Kt = x.stateNode.containerInfo, Fn = !0;
                  break e;
              }
              x = x.return;
            }
          if (Kt === null)
            throw Error(c(160));
          wu(y, w, h), Kt = null, Fn = !1;
          var M = h.alternate;
          M !== null && (M.return = null), h.return = null;
        } catch (B) {
          sn(h, r, B);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        om(r, n), r = r.sibling;
  }
  function om(n, r) {
    var o = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Za(r, n), di(n), f & 4) {
          try {
            js(3, n, n.return), Fs(3, n);
          } catch (Me) {
            sn(n, n.return, Me);
          }
          try {
            js(5, n, n.return);
          } catch (Me) {
            sn(n, n.return, Me);
          }
        }
        break;
      case 1:
        Za(r, n), di(n), f & 512 && o !== null && Eu(o, o.return);
        break;
      case 5:
        if (Za(r, n), di(n), f & 512 && o !== null && Eu(o, o.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Pa(h, "");
          } catch (Me) {
            sn(n, n.return, Me);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var y = n.memoizedProps, w = o !== null ? o.memoizedProps : y, x = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              x === "input" && y.type === "radio" && y.name != null && ir(h, y), fn(x, w);
              var B = fn(x, y);
              for (w = 0; w < M.length; w += 2) {
                var X = M[w], te = M[w + 1];
                X === "style" ? Ot(h, te) : X === "dangerouslySetInnerHTML" ? al(h, te) : X === "children" ? Pa(h, te) : ie(h, X, te, B);
              }
              switch (x) {
                case "input":
                  lr(h, y);
                  break;
                case "textarea":
                  ii(h, y);
                  break;
                case "select":
                  var K = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!y.multiple;
                  var ye = y.value;
                  ye != null ? ai(h, !!y.multiple, ye, !1) : K !== !!y.multiple && (y.defaultValue != null ? ai(
                    h,
                    !!y.multiple,
                    y.defaultValue,
                    !0
                  ) : ai(h, !!y.multiple, y.multiple ? [] : "", !1));
              }
              h[ao] = y;
            } catch (Me) {
              sn(n, n.return, Me);
            }
        }
        break;
      case 6:
        if (Za(r, n), di(n), f & 4) {
          if (n.stateNode === null)
            throw Error(c(162));
          h = n.stateNode, y = n.memoizedProps;
          try {
            h.nodeValue = y;
          } catch (Me) {
            sn(n, n.return, Me);
          }
        }
        break;
      case 3:
        if (Za(r, n), di(n), f & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            ls(r.containerInfo);
          } catch (Me) {
            sn(n, n.return, Me);
          }
        break;
      case 4:
        Za(r, n), di(n);
        break;
      case 13:
        Za(r, n), di(n), h = n.child, h.flags & 8192 && (y = h.memoizedState !== null, h.stateNode.isHidden = y, !y || h.alternate !== null && h.alternate.memoizedState !== null || (xp = St())), f & 4 && Hi(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (Rn = (B = Rn) || X, Za(r, n), Rn = B) : Za(r, n), di(n), f & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !X && n.mode & 1)
            for (Ce = n, X = n.child; X !== null; ) {
              for (te = Ce = X; Ce !== null; ) {
                switch (K = Ce, ye = K.child, K.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    js(4, K, K.return);
                    break;
                  case 1:
                    Eu(K, K.return);
                    var be = K.stateNode;
                    if (typeof be.componentWillUnmount == "function") {
                      f = K, o = K.return;
                      try {
                        r = f, be.props = r.memoizedProps, be.state = r.memoizedState, be.componentWillUnmount();
                      } catch (Me) {
                        sn(f, o, Me);
                      }
                    }
                    break;
                  case 5:
                    Eu(K, K.return);
                    break;
                  case 22:
                    if (K.memoizedState !== null) {
                      Cp(te);
                      continue;
                    }
                }
                ye !== null ? (ye.return = K, Ce = ye) : Cp(te);
              }
              X = X.sibling;
            }
          e:
            for (X = null, te = n; ; ) {
              if (te.tag === 5) {
                if (X === null) {
                  X = te;
                  try {
                    h = te.stateNode, B ? (y = h.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (x = te.stateNode, M = te.memoizedProps.style, w = M != null && M.hasOwnProperty("display") ? M.display : null, x.style.display = it("display", w));
                  } catch (Me) {
                    sn(n, n.return, Me);
                  }
                }
              } else if (te.tag === 6) {
                if (X === null)
                  try {
                    te.stateNode.nodeValue = B ? "" : te.memoizedProps;
                  } catch (Me) {
                    sn(n, n.return, Me);
                  }
              } else if ((te.tag !== 22 && te.tag !== 23 || te.memoizedState === null || te === n) && te.child !== null) {
                te.child.return = te, te = te.child;
                continue;
              }
              if (te === n)
                break e;
              for (; te.sibling === null; ) {
                if (te.return === null || te.return === n)
                  break e;
                X === te && (X = null), te = te.return;
              }
              X === te && (X = null), te.sibling.return = te.return, te = te.sibling;
            }
        }
        break;
      case 19:
        Za(r, n), di(n), f & 4 && Hi(n);
        break;
      case 21:
        break;
      default:
        Za(
          r,
          n
        ), di(n);
    }
  }
  function di(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (lm(o)) {
              var f = o;
              break e;
            }
            o = o.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (Pa(h, ""), f.flags &= -33);
            var y = gf(n);
            fi(n, y, h);
            break;
          case 3:
          case 4:
            var w = f.stateNode.containerInfo, x = gf(n);
            _u(n, x, w);
            break;
          default:
            throw Error(c(161));
        }
      } catch (M) {
        sn(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function um(n, r, o) {
    Ce = n, Cu(n);
  }
  function Cu(n, r, o) {
    for (var f = (n.mode & 1) !== 0; Ce !== null; ) {
      var h = Ce, y = h.child;
      if (h.tag === 22 && f) {
        var w = h.memoizedState !== null || zs;
        if (!w) {
          var x = h.alternate, M = x !== null && x.memoizedState !== null || Rn;
          x = zs;
          var B = Rn;
          if (zs = w, (Rn = M) && !B)
            for (Ce = h; Ce !== null; )
              w = Ce, M = w.child, w.tag === 22 && w.memoizedState !== null ? cm(h) : M !== null ? (M.return = w, Ce = M) : cm(h);
          for (; y !== null; )
            Ce = y, Cu(y), y = y.sibling;
          Ce = h, zs = x, Rn = B;
        }
        sm(n);
      } else
        h.subtreeFlags & 8772 && y !== null ? (y.return = h, Ce = y) : sm(n);
    }
  }
  function sm(n) {
    for (; Ce !== null; ) {
      var r = Ce;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Rn || Fs(5, r);
                break;
              case 1:
                var f = r.stateNode;
                if (r.flags & 4 && !Rn)
                  if (o === null)
                    f.componentDidMount();
                  else {
                    var h = r.elementType === r.type ? o.memoizedProps : aa(r.type, o.memoizedProps);
                    f.componentDidUpdate(h, o.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && lo(r, y, f);
                break;
              case 3:
                var w = r.updateQueue;
                if (w !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  lo(r, w, o);
                }
                break;
              case 5:
                var x = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = x;
                  var M = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      M.autoFocus && o.focus();
                      break;
                    case "img":
                      M.src && (o.src = M.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var B = r.alternate;
                  if (B !== null) {
                    var X = B.memoizedState;
                    if (X !== null) {
                      var te = X.dehydrated;
                      te !== null && ls(te);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(c(163));
            }
          Rn || r.flags & 512 && _p(r);
        } catch (K) {
          sn(r, r.return, K);
        }
      }
      if (r === n) {
        Ce = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ce = o;
        break;
      }
      Ce = r.return;
    }
  }
  function Cp(n) {
    for (; Ce !== null; ) {
      var r = Ce;
      if (r === n) {
        Ce = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ce = o;
        break;
      }
      Ce = r.return;
    }
  }
  function cm(n) {
    for (; Ce !== null; ) {
      var r = Ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Fs(4, r);
            } catch (M) {
              sn(r, o, M);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (M) {
                sn(r, h, M);
              }
            }
            var y = r.return;
            try {
              _p(r);
            } catch (M) {
              sn(r, y, M);
            }
            break;
          case 5:
            var w = r.return;
            try {
              _p(r);
            } catch (M) {
              sn(r, w, M);
            }
        }
      } catch (M) {
        sn(r, r.return, M);
      }
      if (r === n) {
        Ce = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Ce = x;
        break;
      }
      Ce = r.return;
    }
  }
  var Sf = Math.ceil, Hs = fe.ReactCurrentDispatcher, Tp = fe.ReactCurrentOwner, fr = fe.ReactCurrentBatchConfig, ct = 0, nn = null, un = null, Hn = 0, la = 0, Tu = Je(0), Dn = 0, Ys = null, Yi = 0, Ef = 0, xu = 0, So = null, yr = null, xp = 0, bu = 1 / 0, Pi = null, _f = !1, Eo = null, pi = null, Rl = !1, Dl = null, wf = 0, Ru = 0, Cf = null, _o = -1, wo = 0;
  function dr() {
    return ct & 6 ? St() : _o !== -1 ? _o : _o = St();
  }
  function Sn(n) {
    return n.mode & 1 ? ct & 2 && Hn !== 0 ? Hn & -Hn : Ic.transition !== null ? (wo === 0 && (wo = Sc()), wo) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : xd(n.type)), n) : 1;
  }
  function pr(n, r, o, f) {
    if (50 < Ru)
      throw Ru = 0, Cf = null, Error(c(185));
    Zl(n, o, f), (!(ct & 2) || n !== nn) && (n === nn && (!(ct & 2) && (Ef |= o), Dn === 4 && Da(n, Hn)), hr(n, f), o === 1 && ct === 0 && !(r.mode & 1) && (bu = St() + 500, An && Ur()));
  }
  function hr(n, r) {
    var o = n.callbackNode;
    gc(n, r);
    var f = Ba(n, n === nn ? Hn : 0);
    if (f === 0)
      o !== null && mr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (o != null && mr(o), r === 1)
        n.tag === 0 ? Kd(fm.bind(null, n)) : Zd(fm.bind(null, n)), Gd(function() {
          !(ct & 6) && Ur();
        }), o = null;
      else {
        switch (wd(f)) {
          case 1:
            o = bi;
            break;
          case 4:
            o = st;
            break;
          case 16:
            o = ul;
            break;
          case 536870912:
            o = gd;
            break;
          default:
            o = ul;
        }
        o = Op(o, Du.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Du(n, r) {
    if (_o = -1, wo = 0, ct & 6)
      throw Error(c(327));
    var o = n.callbackNode;
    if (Mu() && n.callbackNode !== o)
      return null;
    var f = Ba(n, n === nn ? Hn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = xf(n, f);
    else {
      r = f;
      var h = ct;
      ct |= 2;
      var y = Tf();
      (nn !== n || Hn !== r) && (Pi = null, bu = St() + 500, Co(n, r));
      do
        try {
          a0();
          break;
        } catch (x) {
          dm(n, x);
        }
      while (1);
      rp(), Hs.current = y, ct = h, un !== null ? r = 0 : (nn = null, Hn = 0, r = Dn);
    }
    if (r !== 0) {
      if (r === 2 && (h = Ed(n), h !== 0 && (f = h, r = bp(n, h))), r === 1)
        throw o = Ys, Co(n, 0), Da(n, f), hr(n, St()), o;
      if (r === 6)
        Da(n, f);
      else {
        if (h = n.current.alternate, !(f & 30) && !Rp(h) && (r = xf(n, f), r === 2 && (y = Ed(n), y !== 0 && (f = y, r = bp(n, y))), r === 1))
          throw o = Ys, Co(n, 0), Da(n, f), hr(n, St()), o;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            To(n, yr, Pi);
            break;
          case 3:
            if (Da(n, f), (f & 130023424) === f && (r = xp + 500 - St(), 10 < r)) {
              if (Ba(n, 0) !== 0)
                break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                dr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = ro(To.bind(null, n, yr, Pi), r);
              break;
            }
            To(n, yr, Pi);
            break;
          case 4:
            if (Da(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var w = 31 - va(f);
              y = 1 << w, w = r[w], w > h && (h = w), f &= ~y;
            }
            if (f = h, f = St() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Sf(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = ro(To.bind(null, n, yr, Pi), f);
              break;
            }
            To(n, yr, Pi);
            break;
          case 5:
            To(n, yr, Pi);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return hr(n, St()), n.callbackNode === o ? Du.bind(null, n) : null;
  }
  function bp(n, r) {
    var o = So;
    return n.current.memoizedState.isDehydrated && (Co(n, r).flags |= 256), n = xf(n, r), n !== 2 && (r = yr, yr = o, r !== null && Ps(r)), n;
  }
  function Ps(n) {
    yr === null ? yr = n : yr.push.apply(yr, n);
  }
  function Rp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var f = 0; f < o.length; f++) {
            var h = o[f], y = h.getSnapshot;
            h = h.value;
            try {
              if (!ga(y(), h))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Da(n, r) {
    for (r &= ~xu, r &= ~Ef, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - va(r), f = 1 << o;
      n[o] = -1, r &= ~f;
    }
  }
  function fm(n) {
    if (ct & 6)
      throw Error(c(327));
    Mu();
    var r = Ba(n, 0);
    if (!(r & 1))
      return hr(n, St()), null;
    var o = xf(n, r);
    if (n.tag !== 0 && o === 2) {
      var f = Ed(n);
      f !== 0 && (r = f, o = bp(n, f));
    }
    if (o === 1)
      throw o = Ys, Co(n, 0), Da(n, r), hr(n, St()), o;
    if (o === 6)
      throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, To(n, yr, Pi), hr(n, St()), null;
  }
  function ku(n, r) {
    var o = ct;
    ct |= 1;
    try {
      return n(r);
    } finally {
      ct = o, ct === 0 && (bu = St() + 500, An && Ur());
    }
  }
  function kl(n) {
    Dl !== null && Dl.tag === 0 && !(ct & 6) && Mu();
    var r = ct;
    ct |= 1;
    var o = fr.transition, f = Nt;
    try {
      if (fr.transition = null, Nt = 1, n)
        return n();
    } finally {
      Nt = f, fr.transition = o, ct = r, !(ct & 6) && Ur();
    }
  }
  function Dp() {
    la = Tu.current, Tt(Tu);
  }
  function Co(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Hv(o)), un !== null)
      for (o = un.return; o !== null; ) {
        var f = o;
        switch (Jd(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && _a();
            break;
          case 3:
            Cl(), Tt(on), Tt($e), qc();
            break;
          case 5:
            lt(f);
            break;
          case 4:
            Cl();
            break;
          case 13:
            Tt(Ve);
            break;
          case 19:
            Tt(Ve);
            break;
          case 10:
            Sl(f.type._context);
            break;
          case 22:
          case 23:
            Dp();
        }
        o = o.return;
      }
    if (nn = n, un = n = Ml(n.current, null), Hn = la = r, Dn = 0, Ys = null, xu = Ef = Yi = 0, yr = So = null, Wn !== null) {
      for (r = 0; r < Wn.length; r++)
        if (o = Wn[r], f = o.interleaved, f !== null) {
          o.interleaved = null;
          var h = f.next, y = o.pending;
          if (y !== null) {
            var w = y.next;
            y.next = h, f.next = w;
          }
          o.pending = f;
        }
      Wn = null;
    }
    return n;
  }
  function dm(n, r) {
    do {
      var o = un;
      try {
        if (rp(), Zc.current = pf, Be) {
          for (var f = Wt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          Be = !1;
        }
        if (uo = 0, pt = q = Wt = null, ci = !1, ia = 0, Tp.current = null, o === null || o.return === null) {
          Dn = 1, Ys = r, un = null;
          break;
        }
        e: {
          var y = n, w = o.return, x = o, M = r;
          if (r = Hn, x.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var B = M, X = x, te = X.tag;
            if (!(X.mode & 1) && (te === 0 || te === 11 || te === 15)) {
              var K = X.alternate;
              K ? (X.updateQueue = K.updateQueue, X.memoizedState = K.memoizedState, X.lanes = K.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ye = dp(w);
            if (ye !== null) {
              ye.flags &= -257, pp(ye, w, x, y, r), ye.mode & 1 && em(y, B, r), r = ye, M = B;
              var be = r.updateQueue;
              if (be === null) {
                var Me = /* @__PURE__ */ new Set();
                Me.add(M), r.updateQueue = Me;
              } else
                be.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                em(y, B, r), kp();
                break e;
              }
              M = Error(c(426));
            }
          } else if (Bt && x.mode & 1) {
            var pn = dp(w);
            if (pn !== null) {
              !(pn.flags & 65536) && (pn.flags |= 256), pp(pn, w, x, y, r), tp(yu(M, x));
              break e;
            }
          }
          y = M = yu(M, x), Dn !== 4 && (Dn = 2), So === null ? So = [y] : So.push(y), y = w;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var A = Jv(y, M, r);
                lp(y, A);
                break e;
              case 1:
                x = M;
                var L = y.type, H = y.stateNode;
                if (!(y.flags & 128) && (typeof L.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (pi === null || !pi.has(H)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ue = Ns(y, x, r);
                  lp(y, ue);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Mp(o);
      } catch (Oe) {
        r = Oe, un === o && o !== null && (un = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Tf() {
    var n = Hs.current;
    return Hs.current = pf, n === null ? pf : n;
  }
  function kp() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), nn === null || !(Yi & 268435455) && !(Ef & 268435455) || Da(nn, Hn);
  }
  function xf(n, r) {
    var o = ct;
    ct |= 2;
    var f = Tf();
    (nn !== n || Hn !== r) && (Pi = null, Co(n, r));
    do
      try {
        r0();
        break;
      } catch (h) {
        dm(n, h);
      }
    while (1);
    if (rp(), ct = o, Hs.current = f, un !== null)
      throw Error(c(261));
    return nn = null, Hn = 0, Dn;
  }
  function r0() {
    for (; un !== null; )
      pm(un);
  }
  function a0() {
    for (; un !== null && !ol(); )
      pm(un);
  }
  function pm(n) {
    var r = vm(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? Mp(n) : un = r, Tp.current = null;
  }
  function Mp(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ep(o, r), o !== null) {
          o.flags &= 32767, un = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Dn = 6, un = null;
          return;
        }
      } else if (o = n0(o, r, la), o !== null) {
        un = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        un = r;
        return;
      }
      un = r = n;
    } while (r !== null);
    Dn === 0 && (Dn = 5);
  }
  function To(n, r, o) {
    var f = Nt, h = fr.transition;
    try {
      fr.transition = null, Nt = 1, i0(n, r, o, f);
    } finally {
      fr.transition = h, Nt = f;
    }
    return null;
  }
  function i0(n, r, o, f) {
    do
      Mu();
    while (Dl !== null);
    if (ct & 6)
      throw Error(c(327));
    o = n.finishedWork;
    var h = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (Og(n, y), n === nn && (un = nn = null, Hn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Rl || (Rl = !0, Op(ul, function() {
      return Mu(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = fr.transition, fr.transition = null;
      var w = Nt;
      Nt = 1;
      var x = ct;
      ct |= 4, Tp.current = null, im(n, o), om(o, n), Nc(no), Kl = !!Wd, no = Wd = null, n.current = o, um(o), mc(), ct = x, Nt = w, fr.transition = y;
    } else
      n.current = o;
    if (Rl && (Rl = !1, Dl = n, wf = h), y = n.pendingLanes, y === 0 && (pi = null), Jh(o.stateNode), hr(n, St()), r !== null)
      for (f = n.onRecoverableError, o = 0; o < r.length; o++)
        h = r[o], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (_f)
      throw _f = !1, n = Eo, Eo = null, n;
    return wf & 1 && n.tag !== 0 && Mu(), y = n.pendingLanes, y & 1 ? n === Cf ? Ru++ : (Ru = 0, Cf = n) : Ru = 0, Ur(), null;
  }
  function Mu() {
    if (Dl !== null) {
      var n = wd(wf), r = fr.transition, o = Nt;
      try {
        if (fr.transition = null, Nt = 16 > n ? 16 : n, Dl === null)
          var f = !1;
        else {
          if (n = Dl, Dl = null, wf = 0, ct & 6)
            throw Error(c(331));
          var h = ct;
          for (ct |= 4, Ce = n.current; Ce !== null; ) {
            var y = Ce, w = y.child;
            if (Ce.flags & 16) {
              var x = y.deletions;
              if (x !== null) {
                for (var M = 0; M < x.length; M++) {
                  var B = x[M];
                  for (Ce = B; Ce !== null; ) {
                    var X = Ce;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, X, y);
                    }
                    var te = X.child;
                    if (te !== null)
                      te.return = X, Ce = te;
                    else
                      for (; Ce !== null; ) {
                        X = Ce;
                        var K = X.sibling, ye = X.return;
                        if (wp(X), X === B) {
                          Ce = null;
                          break;
                        }
                        if (K !== null) {
                          K.return = ye, Ce = K;
                          break;
                        }
                        Ce = ye;
                      }
                  }
                }
                var be = y.alternate;
                if (be !== null) {
                  var Me = be.child;
                  if (Me !== null) {
                    be.child = null;
                    do {
                      var pn = Me.sibling;
                      Me.sibling = null, Me = pn;
                    } while (Me !== null);
                  }
                }
                Ce = y;
              }
            }
            if (y.subtreeFlags & 2064 && w !== null)
              w.return = y, Ce = w;
            else
              e:
                for (; Ce !== null; ) {
                  if (y = Ce, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(9, y, y.return);
                    }
                  var A = y.sibling;
                  if (A !== null) {
                    A.return = y.return, Ce = A;
                    break e;
                  }
                  Ce = y.return;
                }
          }
          var L = n.current;
          for (Ce = L; Ce !== null; ) {
            w = Ce;
            var H = w.child;
            if (w.subtreeFlags & 2064 && H !== null)
              H.return = w, Ce = H;
            else
              e:
                for (w = L; Ce !== null; ) {
                  if (x = Ce, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fs(9, x);
                      }
                    } catch (Oe) {
                      sn(x, x.return, Oe);
                    }
                  if (x === w) {
                    Ce = null;
                    break e;
                  }
                  var ue = x.sibling;
                  if (ue !== null) {
                    ue.return = x.return, Ce = ue;
                    break e;
                  }
                  Ce = x.return;
                }
          }
          if (ct = h, Ur(), Ia && typeof Ia.onPostCommitFiberRoot == "function")
            try {
              Ia.onPostCommitFiberRoot(ts, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        Nt = o, fr.transition = r;
      }
    }
    return !1;
  }
  function hm(n, r, o) {
    r = yu(o, r), r = Jv(n, r, 1), n = _l(n, r, 1), r = dr(), n !== null && (Zl(n, 1, r), hr(n, r));
  }
  function sn(n, r, o) {
    if (n.tag === 3)
      hm(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          hm(r, n, o);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (pi === null || !pi.has(f))) {
            n = yu(o, n), n = Ns(r, n, 1), r = _l(r, n, 1), n = dr(), r !== null && (Zl(r, 1, n), hr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function l0(n, r, o) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, nn === n && (Hn & o) === o && (Dn === 4 || Dn === 3 && (Hn & 130023424) === Hn && 500 > St() - xp ? Co(n, 0) : xu |= o), hr(n, r);
  }
  function bf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Xo, Xo <<= 1, !(Xo & 130023424) && (Xo = 4194304)) : r = 1);
    var o = dr();
    n = zi(n, r), n !== null && (Zl(n, r, o), hr(n, o));
  }
  function o0(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), bf(n, o);
  }
  function u0(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (o = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), bf(n, o);
  }
  var vm;
  vm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || on.current)
        gn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return gn = !1, Fi(n, r, o);
        gn = !!(n.flags & 131072);
      }
    else
      gn = !1, Bt && r.flags & 1048576 && Xd(r, cu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        sr(n, r), n = r.pendingProps;
        var h = Ea(r, $e.current);
        de(r, o), h = Tl(null, r, f, n, h, o);
        var y = fo();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Zt(f) ? (y = !0, Fc(r)) : y = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, ip(r), h.updater = $c, r.stateNode = h, h._reactInternals = r, Gc(r, f, n, o), r = tm(null, r, f, !0, y, o)) : (r.tag = 0, Bt && y && Hc(r), xn(null, r, h, o), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (sr(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = c0(f), n = aa(f, n), h) {
            case 0:
              r = gu(null, r, f, n, o);
              break e;
            case 1:
              r = hp(null, r, f, n, o);
              break e;
            case 11:
              r = bl(null, r, f, n, o);
              break e;
            case 14:
              r = vf(null, r, f, aa(f.type, n), o);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), gu(n, r, f, h, o);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), hp(n, r, f, h, o);
      case 3:
        e: {
          if (nm(r), n === null)
            throw Error(c(387));
          f = r.pendingProps, y = r.memoizedState, h = y.element, Tn(n, r), wl(r, f, null, o);
          var w = r.memoizedState;
          if (f = w.element, y.isDehydrated)
            if (y = { element: f, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              h = yu(Error(c(423)), r), r = mf(n, r, f, o, h);
              break e;
            } else if (f !== h) {
              h = yu(Error(c(424)), r), r = mf(n, r, f, o, h);
              break e;
            } else
              for (jr = Qa(r.stateNode.containerInfo.firstChild), ra = r, Bt = !0, Ca = null, o = Kv(r, null, f, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (en(), f === h) {
              r = $n(n, r, o);
              break e;
            }
            xn(n, r, f, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return He(r), n === null && Pc(r), f = r.type, h = r.pendingProps, y = n !== null ? n.memoizedProps : null, w = h.children, Es(f, h) ? w = null : y !== null && Es(f, y) && (r.flags |= 32), et(n, r), xn(n, r, w, o), r.child;
      case 6:
        return n === null && Pc(r), null;
      case 13:
        return mp(n, r, o);
      case 4:
        return up(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = du(r, null, f, o) : xn(n, r, f, o), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), bl(n, r, f, h, o);
      case 7:
        return xn(n, r, r.pendingProps, o), r.child;
      case 8:
        return xn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return xn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, y = r.memoizedProps, w = h.value, xt(si, f._currentValue), f._currentValue = w, y !== null)
            if (ga(y.value, w)) {
              if (y.children === h.children && !on.current) {
                r = $n(n, r, o);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var x = y.dependencies;
                if (x !== null) {
                  w = y.child;
                  for (var M = x.firstContext; M !== null; ) {
                    if (M.context === f) {
                      if (y.tag === 1) {
                        M = Ai(-1, o & -o), M.tag = 2;
                        var B = y.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var X = B.pending;
                          X === null ? M.next = M : (M.next = X.next, X.next = M), B.pending = M;
                        }
                      }
                      y.lanes |= o, M = y.alternate, M !== null && (M.lanes |= o), jn(
                        y.return,
                        o,
                        r
                      ), x.lanes |= o;
                      break;
                    }
                    M = M.next;
                  }
                } else if (y.tag === 10)
                  w = y.type === r.type ? null : y.child;
                else if (y.tag === 18) {
                  if (w = y.return, w === null)
                    throw Error(c(341));
                  w.lanes |= o, x = w.alternate, x !== null && (x.lanes |= o), jn(w, o, r), w = y.sibling;
                } else
                  w = y.child;
                if (w !== null)
                  w.return = y;
                else
                  for (w = y; w !== null; ) {
                    if (w === r) {
                      w = null;
                      break;
                    }
                    if (y = w.sibling, y !== null) {
                      y.return = w.return, w = y;
                      break;
                    }
                    w = w.return;
                  }
                y = w;
              }
          xn(n, r, h.children, o), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, f = r.pendingProps.children, de(r, o), h = dn(h), f = f(h), r.flags |= 1, xn(n, r, f, o), r.child;
      case 14:
        return f = r.type, h = aa(f, r.pendingProps), h = aa(f.type, h), vf(n, r, f, h, o);
      case 15:
        return Yr(n, r, r.type, r.pendingProps, o);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), sr(n, r), r.tag = 1, Zt(f) ? (n = !0, Fc(r)) : n = !1, de(r, o), Gv(r, f, h), Gc(r, f, h, o), tm(null, r, f, !0, n, o);
      case 19:
        return Sp(n, r, o);
      case 22:
        return mo(n, r, o);
    }
    throw Error(c(156, r.tag));
  };
  function Op(n, r) {
    return qt(n, r);
  }
  function s0(n, r, o, f) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ka(n, r, o, f) {
    return new s0(n, r, o, f);
  }
  function Np(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function c0(n) {
    if (typeof n == "function")
      return Np(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === kt)
        return 11;
      if (n === Xt)
        return 14;
    }
    return 2;
  }
  function Ml(n, r) {
    var o = n.alternate;
    return o === null ? (o = ka(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Rf(n, r, o, f, h, y) {
    var w = 2;
    if (f = n, typeof n == "function")
      Np(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case oe:
            return xo(o.children, h, y, r);
          case Qe:
            w = 8, h |= 8;
            break;
          case at:
            return n = ka(12, o, r, h | 2), n.elementType = at, n.lanes = y, n;
          case Ie:
            return n = ka(13, o, r, h), n.elementType = Ie, n.lanes = y, n;
          case tt:
            return n = ka(19, o, r, h), n.elementType = tt, n.lanes = y, n;
          case _n:
            return Vs(o, h, y, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ke:
                  w = 10;
                  break e;
                case ut:
                  w = 9;
                  break e;
                case kt:
                  w = 11;
                  break e;
                case Xt:
                  w = 14;
                  break e;
                case Mt:
                  w = 16, f = null;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return r = ka(w, o, r, h), r.elementType = n, r.type = f, r.lanes = y, r;
  }
  function xo(n, r, o, f) {
    return n = ka(7, n, f, r), n.lanes = o, n;
  }
  function Vs(n, r, o, f) {
    return n = ka(22, n, f, r), n.elementType = _n, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Is(n, r, o) {
    return n = ka(6, n, null, r), n.lanes = o, n;
  }
  function bo(n, r, o) {
    return r = ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function f0(n, r, o, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _d(0), this.expirationTimes = _d(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _d(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Df(n, r, o, f, h, y, w, x, M) {
    return n = new f0(n, r, o, x, M), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = ka(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: f, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ip(y), n;
  }
  function mm(n, r, o) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: o };
  }
  function Lp(n) {
    if (!n)
      return ui;
    n = n._reactInternals;
    e: {
      if (nt(n) !== n || n.tag !== 1)
        throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Zt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Zt(o))
        return Cs(n, o, r);
    }
    return r;
  }
  function ym(n, r, o, f, h, y, w, x, M) {
    return n = Df(o, f, !0, n, h, y, w, x, M), n.context = Lp(null), o = n.current, f = dr(), h = Sn(o), y = Ai(f, h), y.callback = r ?? null, _l(o, y, h), n.current.lanes = h, Zl(n, h, f), hr(n, f), n;
  }
  function Bs(n, r, o, f) {
    var h = r.current, y = dr(), w = Sn(h);
    return o = Lp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ai(y, w), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = _l(h, r, w), n !== null && (pr(n, h, w, y), Wc(n, h, w)), w;
  }
  function kf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function gm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Up(n, r) {
    gm(n, r), (n = n.alternate) && gm(n, r);
  }
  function Sm() {
    return null;
  }
  var zp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Mf(n) {
    this._internalRoot = n;
  }
  Vi.prototype.render = Mf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(c(409));
    Bs(n, r, null, null);
  }, Vi.prototype.unmount = Mf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      kl(function() {
        Bs(null, n, null, null);
      }), r[Li] = null;
    }
  };
  function Vi(n) {
    this._internalRoot = n;
  }
  Vi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = rv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Lt.length && r !== 0 && r < Lt[o].priority; o++)
        ;
      Lt.splice(o, 0, n), o === 0 && av(n);
    }
  };
  function Ap(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Em() {
  }
  function d0(n, r, o, f, h) {
    if (h) {
      if (typeof f == "function") {
        var y = f;
        f = function() {
          var B = kf(w);
          y.call(B);
        };
      }
      var w = ym(r, f, n, 0, null, !1, !1, "", Em);
      return n._reactRootContainer = w, n[Li] = w.current, uu(n.nodeType === 8 ? n.parentNode : n), kl(), w;
    }
    for (; h = n.lastChild; )
      n.removeChild(h);
    if (typeof f == "function") {
      var x = f;
      f = function() {
        var B = kf(M);
        x.call(B);
      };
    }
    var M = Df(n, 0, !1, null, null, !1, !1, "", Em);
    return n._reactRootContainer = M, n[Li] = M.current, uu(n.nodeType === 8 ? n.parentNode : n), kl(function() {
      Bs(r, M, o, f);
    }), M;
  }
  function Nf(n, r, o, f, h) {
    var y = o._reactRootContainer;
    if (y) {
      var w = y;
      if (typeof h == "function") {
        var x = h;
        h = function() {
          var M = kf(w);
          x.call(M);
        };
      }
      Bs(r, w, n, h);
    } else
      w = d0(o, r, n, h, f);
    return kf(w);
  }
  nv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ql(r.pendingLanes);
          o !== 0 && (ns(r, o | 1), hr(r, St()), !(ct & 6) && (bu = St() + 500, Ur()));
        }
        break;
      case 13:
        kl(function() {
          var f = zi(n, 1);
          if (f !== null) {
            var h = dr();
            pr(f, n, 1, h);
          }
        }), Up(n, 1);
    }
  }, Ec = function(n) {
    if (n.tag === 13) {
      var r = zi(n, 134217728);
      if (r !== null) {
        var o = dr();
        pr(r, n, 134217728, o);
      }
      Up(n, 134217728);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = Sn(n), o = zi(n, r);
      if (o !== null) {
        var f = dr();
        pr(o, n, r, f);
      }
      Up(n, r);
    }
  }, rv = function() {
    return Nt;
  }, Cd = function(n, r) {
    var o = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = o;
    }
  }, Xr = function(n, r, o) {
    switch (r) {
      case "input":
        if (lr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var f = o[r];
            if (f !== n && f.form === n.form) {
              var h = ze(f);
              if (!h)
                throw Error(c(90));
              pa(f), lr(f, h);
            }
          }
        }
        break;
      case "textarea":
        ii(n, o);
        break;
      case "select":
        r = o.value, r != null && ai(n, !!o.multiple, r, !1);
    }
  }, es = ku, vc = kl;
  var p0 = { usingClientEntryPoint: !1, Events: [ws, su, ze, $l, qo, ku] }, Ou = { findFiberByHostInstance: Sa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, h0 = { bundleType: Ou.bundleType, version: Ou.version, rendererPackageName: Ou.rendererPackageName, rendererConfig: Ou.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: fe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ou.findFiberByHostInstance || Sm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lf.isDisabled && Lf.supportsFiber)
      try {
        ts = Lf.inject(h0), Ia = Lf;
      } catch {
      }
  }
  return za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0, za.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ap(r))
      throw Error(c(200));
    return mm(n, r, null, o);
  }, za.createRoot = function(n, r) {
    if (!Ap(n))
      throw Error(c(299));
    var o = !1, f = "", h = zp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Df(n, 1, !1, null, null, o, !1, f, h), n[Li] = r.current, uu(n.nodeType === 8 ? n.parentNode : n), new Mf(r);
  }, za.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, za.flushSync = function(n) {
    return kl(n);
  }, za.hydrate = function(n, r, o) {
    if (!Of(r))
      throw Error(c(200));
    return Nf(null, n, r, !0, o);
  }, za.hydrateRoot = function(n, r, o) {
    if (!Ap(n))
      throw Error(c(405));
    var f = o != null && o.hydratedSources || null, h = !1, y = "", w = zp;
    if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = ym(r, null, n, 1, o ?? null, h, !1, y, w), n[Li] = r.current, uu(n), f)
      for (n = 0; n < f.length; n++)
        o = f[n], h = o._getVersion, h = h(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, h] : r.mutableSourceEagerHydrationData.push(
          o,
          h
        );
    return new Vi(r);
  }, za.render = function(n, r, o) {
    if (!Of(r))
      throw Error(c(200));
    return Nf(null, n, r, !1, o);
  }, za.unmountComponentAtNode = function(n) {
    if (!Of(n))
      throw Error(c(40));
    return n._reactRootContainer ? (kl(function() {
      Nf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Li] = null;
      });
    }), !0) : !1;
  }, za.unstable_batchedUpdates = ku, za.unstable_renderSubtreeIntoContainer = function(n, r, o, f) {
    if (!Of(o))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Nf(n, r, o, !1, f);
  }, za.version = "18.2.0-next-9e3b772b8-20220608", za;
}
var Aa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function qA() {
  return hx || (hx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Wo, u = Nb(), c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function m(e) {
      p = e;
    }
    function E(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        D("warn", e, a);
      }
    }
    function g(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        D("error", e, a);
      }
    }
    function D(e, t, a) {
      {
        var l = c.ReactDebugCurrentFrame, s = l.getStackAddendum();
        s !== "" && (t += "%s", a = a.concat([s]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var b = 0, R = 1, z = 2, N = 3, W = 4, $ = 5, Y = 6, ne = 7, ke = 8, Te = 9, ae = 10, ie = 11, fe = 12, se = 13, J = 14, oe = 15, Qe = 16, at = 17, Ke = 18, ut = 19, kt = 21, Ie = 22, tt = 23, Xt = 24, Mt = 25, _n = !0, ce = !1, je = !1, Ee = !1, gt = !1, Ct = !0, Vn = !1, vr = !1, ni = !0, wn = !0, da = !0, rr = /* @__PURE__ */ new Set(), kr = {}, ri = {};
    function Mr(e, t) {
      pa(e, t), pa(e + "Capture", t);
    }
    function pa(e, t) {
      kr[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), kr[e] = t;
      {
        var a = e.toLowerCase();
        ri[a] = e, e === "onDoubleClick" && (ri.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        rr.add(t[l]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Object.prototype.hasOwnProperty;
    function In(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ir(e) {
      try {
        return lr(e), !1;
      } catch {
        return !0;
      }
    }
    function lr(e) {
      return "" + e;
    }
    function ha(e, t) {
      if (ir(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), lr(e);
    }
    function Fa(e) {
      if (ir(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(e)), lr(e);
    }
    function xi(e, t) {
      if (ir(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), lr(e);
    }
    function ai(e, t) {
      if (ir(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), lr(e);
    }
    function Ha(e) {
      if (ir(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", In(e)), lr(e);
    }
    function qr(e) {
      if (ir(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", In(e)), lr(e);
    }
    var ii = 0, Zr = 1, Ya = 2, vn = 3, Kr = 4, al = 5, Pa = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ue = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", it = new RegExp("^[" + he + "][" + Ue + "]*$"), Ot = {}, Jt = {};
    function Nn(e) {
      return ar.call(Jt, e) ? !0 : ar.call(Ot, e) ? !1 : it.test(e) ? (Jt[e] = !0, !0) : (Ot[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === ii : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Or(e, t, a, l) {
      if (a !== null && a.type === ii)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (l)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, l) {
      if (t === null || typeof t > "u" || Or(e, t, a, l))
        return !0;
      if (l)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case Kr:
            return t === !1;
          case al:
            return isNaN(t);
          case Pa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Xr(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function At(e, t, a, l, s, d, v) {
      this.acceptsBooleans = t === Ya || t === vn || t === Kr, this.attributeName = l, this.attributeNamespace = s, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var Pt = {}, Qo = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Qo.forEach(function(e) {
      Pt[e] = new At(
        e,
        ii,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Pt[t] = new At(
        t,
        Zr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Pt[e] = new At(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Pt[e] = new At(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Pt[e] = new At(
        e,
        vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new At(
        e,
        vn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new At(
        e,
        Kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new At(
        e,
        Pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Pt[e] = new At(
        e,
        al,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var $l = /[\-\:]([a-z])/g, qo = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace($l, qo);
      Pt[t] = new At(
        t,
        Zr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace($l, qo);
      Pt[t] = new At(
        t,
        Zr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace($l, qo);
      Pt[t] = new At(
        t,
        Zr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new At(
        e,
        Zr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var es = "xlinkHref";
    Pt[es] = new At(
      "xlinkHref",
      Zr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new At(
        e,
        Zr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var vc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Gl = !1;
    function Zo(e) {
      !Gl && vc.test(e) && (Gl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, a, l) {
      if (l.mustUseProperty) {
        var s = l.propertyName;
        return e[s];
      } else {
        ha(a, t), l.sanitizeURL && Zo("" + a);
        var d = l.attributeName, v = null;
        if (l.type === Kr) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : Yt(t, a, l, !1) ? S : S === "" + a ? a : S;
          }
        } else if (e.hasAttribute(d)) {
          if (Yt(t, a, l, !1))
            return e.getAttribute(d);
          if (l.type === vn)
            return a;
          v = e.getAttribute(d);
        }
        return Yt(t, a, l, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Ko(e, t, a, l) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var s = e.getAttribute(t);
        return ha(a, t), s === "" + a ? a : s;
      }
    }
    function li(e, t, a, l) {
      var s = Xr(t);
      if (!fn(t, s, l)) {
        if (Yt(t, a, s, l) && (a = null), l || s === null) {
          if (Nn(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (ha(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var v = s.mustUseProperty;
        if (v) {
          var S = s.propertyName;
          if (a === null) {
            var _ = s.type;
            e[S] = _ === vn ? !1 : "";
          } else
            e[S] = a;
          return;
        }
        var C = s.attributeName, T = s.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var U = s.type, O;
          U === vn || U === Kr && a === !0 ? O = "" : (ha(a, C), O = "" + a, s.sanitizeURL && Zo(O.toString())), T ? e.setAttributeNS(T, C, O) : e.setAttribute(C, O);
        }
      }
    }
    var il = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), ll = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), ve = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), mr = Symbol.for("react.legacy_hidden"), ol = Symbol.for("react.cache"), mc = Symbol.for("react.tracing_marker"), St = Symbol.iterator, kg = "@@iterator";
    function bi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = St && e[St] || e[kg];
      return typeof t == "function" ? t : null;
    }
    var st = Object.assign, ul = 0, Xh, gd, ts, Ia, Jh, va, ev;
    function tv() {
    }
    tv.__reactDisabledLog = !0;
    function Mg() {
      {
        if (ul === 0) {
          Xh = console.log, gd = console.info, ts = console.warn, Ia = console.error, Jh = console.group, va = console.groupCollapsed, ev = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: tv,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ul++;
      }
    }
    function yc() {
      {
        if (ul--, ul === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, e, {
              value: Xh
            }),
            info: st({}, e, {
              value: gd
            }),
            warn: st({}, e, {
              value: ts
            }),
            error: st({}, e, {
              value: Ia
            }),
            group: st({}, e, {
              value: Jh
            }),
            groupCollapsed: st({}, e, {
              value: va
            }),
            groupEnd: st({}, e, {
              value: ev
            })
          });
        }
        ul < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xo = c.ReactCurrentDispatcher, ql;
    function Ba(e, t, a) {
      {
        if (ql === void 0)
          try {
            throw Error();
          } catch (s) {
            var l = s.stack.trim().match(/\n( *(at )?)/);
            ql = l && l[1] || "";
          }
        return `
` + ql + e;
      }
    }
    var Sd = !1, gc;
    {
      var Ed = typeof WeakMap == "function" ? WeakMap : Map;
      gc = new Ed();
    }
    function Sc(e, t) {
      if (!e || Sd)
        return "";
      {
        var a = gc.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      Sd = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Xo.current, Xo.current = null, Mg();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (I) {
              l = I;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (I) {
              l = I;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            l = I;
          }
          e();
        }
      } catch (I) {
        if (I && l && typeof I.stack == "string") {
          for (var S = I.stack.split(`
`), _ = l.stack.split(`
`), C = S.length - 1, T = _.length - 1; C >= 1 && T >= 0 && S[C] !== _[T]; )
            T--;
          for (; C >= 1 && T >= 0; C--, T--)
            if (S[C] !== _[T]) {
              if (C !== 1 || T !== 1)
                do
                  if (C--, T--, T < 0 || S[C] !== _[T]) {
                    var U = `
` + S[C].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && gc.set(e, U), U;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Sd = !1, Xo.current = d, yc(), Error.prepareStackTrace = s;
      }
      var O = e ? e.displayName || e.name : "", V = O ? Ba(O) : "";
      return typeof e == "function" && gc.set(e, V), V;
    }
    function _d(e, t, a) {
      return Sc(e, !0);
    }
    function Zl(e, t, a) {
      return Sc(e, !1);
    }
    function Og(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ns(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Sc(e, Og(e));
      if (typeof e == "string")
        return Ba(e);
      switch (e) {
        case nt:
          return Ba("Suspense");
        case mt:
          return Ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Fe:
            return Zl(e.render);
          case rt:
            return ns(e.type, t, a);
          case Pe: {
            var l = e, s = l._payload, d = l._init;
            try {
              return ns(d(s), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Nt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case $:
          return Ba(e.type);
        case Qe:
          return Ba("Lazy");
        case se:
          return Ba("Suspense");
        case ut:
          return Ba("SuspenseList");
        case b:
        case z:
        case oe:
          return Zl(e.type);
        case ie:
          return Zl(e.type.render);
        case R:
          return _d(e.type);
        default:
          return "";
      }
    }
    function wd(e) {
      try {
        var t = "", a = e;
        do
          t += Nt(a), a = a.return;
        while (a);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function nv(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var s = t.displayName || t.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function Ec(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Va:
          return "Fragment";
        case Jr:
          return "Portal";
        case k:
          return "Profiler";
        case ll:
          return "StrictMode";
        case nt:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ve:
            var t = e;
            return Ec(t) + ".Consumer";
          case ee:
            var a = e;
            return Ec(a._context) + ".Provider";
          case Fe:
            return nv(e, e.render, "ForwardRef");
          case rt:
            var l = e.displayName || null;
            return l !== null ? l : jt(e.type) || "Memo";
          case Pe: {
            var s = e, d = s._payload, v = s._init;
            try {
              return jt(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function rv(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function Cd(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Xt:
          return "Cache";
        case Te:
          var l = a;
          return Cd(l) + ".Consumer";
        case ae:
          var s = a;
          return Cd(s._context) + ".Provider";
        case Ke:
          return "DehydratedFragment";
        case ie:
          return rv(a, a.render, "ForwardRef");
        case ne:
          return "Fragment";
        case $:
          return a;
        case W:
          return "Portal";
        case N:
          return "Root";
        case Y:
          return "Text";
        case Qe:
          return jt(a);
        case ke:
          return a === ll ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case fe:
          return "Profiler";
        case kt:
          return "Scope";
        case se:
          return "Suspense";
        case ut:
          return "SuspenseList";
        case Mt:
          return "TracingMarker";
        case R:
        case b:
        case at:
        case z:
        case J:
        case oe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var rs = c.ReactDebugCurrentFrame, mn = null, ma = !1;
    function ya() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function as() {
      return mn === null ? "" : wd(mn);
    }
    function Cn() {
      rs.getCurrentStack = null, mn = null, ma = !1;
    }
    function Lt(e) {
      rs.getCurrentStack = e === null ? null : as, mn = e, ma = !1;
    }
    function Ng() {
      return mn;
    }
    function Wa(e) {
      ma = e;
    }
    function or(e) {
      return "" + e;
    }
    function sl(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qr(e), e;
        default:
          return "";
      }
    }
    var av = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Jo(e, t) {
      av[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Td(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function iv(e) {
      return e._valueTracker;
    }
    function is(e) {
      e._valueTracker = null;
    }
    function ls(e) {
      var t = "";
      return e && (Td(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function eu(e) {
      var t = Td(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qr(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var s = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(S) {
            qr(S), l = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return l;
          },
          setValue: function(S) {
            qr(S), l = "" + S;
          },
          stopTracking: function() {
            is(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Kl(e) {
      iv(e) || (e._valueTracker = eu(e));
    }
    function lv(e) {
      if (!e)
        return !1;
      var t = iv(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = ls(e);
      return l !== a ? (t.setValue(l), !0) : !1;
    }
    function _c(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var wc = !1, os = !1, Cc = !1, xd = !1;
    function Ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function us(e, t) {
      var a = e, l = t.checked, s = st({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? a._wrapperState.initialChecked
      });
      return s;
    }
    function ss(e, t) {
      Jo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !os && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ya() || "A component", t.type), os = !0), t.value !== void 0 && t.defaultValue !== void 0 && !wc && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ya() || "A component", t.type), wc = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: sl(t.value != null ? t.value : l),
        controlled: Ri(t)
      };
    }
    function bd(e, t) {
      var a = e, l = t.checked;
      l != null && li(a, "checked", l, !1);
    }
    function tu(e, t) {
      var a = e;
      {
        var l = Ri(t);
        !a._wrapperState.controlled && l && !xd && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xd = !0), a._wrapperState.controlled && !l && !Cc && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cc = !0);
      }
      bd(e, t);
      var s = sl(t.value), d = t.type;
      if (s != null)
        d === "number" ? (s === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != s) && (a.value = or(s)) : a.value !== or(s) && (a.value = or(s));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? cl(a, t.type, s) : t.hasOwnProperty("defaultValue") && cl(a, t.type, sl(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function cs(e, t, a) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, d = s === "submit" || s === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var v = or(l._wrapperState.initialValue);
        a || v !== l.value && (l.value = v), l.defaultValue = v;
      }
      var S = l.name;
      S !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, S !== "" && (l.name = S);
    }
    function ov(e, t) {
      var a = e;
      tu(a, t), ea(a, t);
    }
    function ea(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        ha(a, "name");
        for (var s = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < s.length; d++) {
          var v = s[d];
          if (!(v === e || v.form !== e.form)) {
            var S = jm(v);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            lv(v), tu(v, S);
          }
        }
      }
    }
    function cl(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _c(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var Tc = !1, nu = !1, uv = !1;
    function xc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || nu || (nu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (uv || (uv = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Tc && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Tc = !0);
    }
    function Rd(e, t) {
      t.value != null && e.setAttribute("value", or(sl(t.value)));
    }
    var fs = Array.isArray;
    function Un(e) {
      return fs(e);
    }
    var bc;
    bc = !1;
    function sv() {
      var e = ya();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var cv = ["value", "defaultValue"];
    function Lg(e) {
      {
        Jo("select", e);
        for (var t = 0; t < cv.length; t++) {
          var a = cv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, sv()) : !e.multiple && l && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, sv());
          }
        }
      }
    }
    function fl(e, t, a, l) {
      var s = e.options;
      if (t) {
        for (var d = a, v = {}, S = 0; S < d.length; S++)
          v["$" + d[S]] = !0;
        for (var _ = 0; _ < s.length; _++) {
          var C = v.hasOwnProperty("$" + s[_].value);
          s[_].selected !== C && (s[_].selected = C), C && l && (s[_].defaultSelected = !0);
        }
      } else {
        for (var T = or(sl(a)), U = null, O = 0; O < s.length; O++) {
          if (s[O].value === T) {
            s[O].selected = !0, l && (s[O].defaultSelected = !0);
            return;
          }
          U === null && !s[O].disabled && (U = s[O]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function Dd(e, t) {
      return st({}, t, {
        value: void 0
      });
    }
    function fv(e, t) {
      var a = e;
      Lg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bc && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bc = !0);
    }
    function Ug(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? fl(a, !!t.multiple, l, !1) : t.defaultValue != null && fl(a, !!t.multiple, t.defaultValue, !0);
    }
    function zg(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? fl(a, !!t.multiple, s, !1) : l !== !!t.multiple && (t.defaultValue != null ? fl(a, !!t.multiple, t.defaultValue, !0) : fl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ag(e, t) {
      var a = e, l = t.value;
      l != null && fl(a, !!t.multiple, l, !1);
    }
    var kd = !1;
    function Md(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = st({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: or(a._wrapperState.initialValue)
      });
      return l;
    }
    function dv(e, t) {
      var a = e;
      Jo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !kd && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ya() || "A component"), kd = !0);
      var l = t.value;
      if (l == null) {
        var s = t.children, d = t.defaultValue;
        if (s != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Un(s)) {
              if (s.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            d = s;
          }
        }
        d == null && (d = ""), l = d;
      }
      a._wrapperState = {
        initialValue: sl(l)
      };
    }
    function pv(e, t) {
      var a = e, l = sl(t.value), s = sl(t.defaultValue);
      if (l != null) {
        var d = or(l);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      s != null && (a.defaultValue = or(s));
    }
    function hv(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Od(e, t) {
      pv(e, t);
    }
    var Di = "http://www.w3.org/1999/xhtml", jg = "http://www.w3.org/1998/Math/MathML", Nd = "http://www.w3.org/2000/svg";
    function Rc(e) {
      switch (e) {
        case "svg":
          return Nd;
        case "math":
          return jg;
        default:
          return Di;
      }
    }
    function Ld(e, t) {
      return e == null || e === Di ? Rc(t) : e === Nd && t === "foreignObject" ? Di : e;
    }
    var Fg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, s);
        });
      } : e;
    }, Dc, vv = Fg(function(e, t) {
      if (e.namespaceURI === Nd && !("innerHTML" in e)) {
        Dc = Dc || document.createElement("div"), Dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Nr = 1, ki = 3, yn = 8, $a = 9, Xl = 11, kc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, mv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, ru = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function yv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var gv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ru).forEach(function(e) {
      gv.forEach(function(t) {
        ru[yv(t, e)] = ru[e];
      });
    });
    function Mc(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(ru.hasOwnProperty(e) && ru[e]) ? t + "px" : (ai(t, e), ("" + t).trim());
    }
    var au = /([A-Z])/g, Hg = /^ms-/;
    function Yg(e) {
      return e.replace(au, "-$1").toLowerCase().replace(Hg, "-ms-");
    }
    var Sv = function() {
    };
    {
      var Ev = /^(?:webkit|moz|o)[A-Z]/, _v = /^-ms-/, ds = /-(.)/g, iu = /;\s*$/, lu = {}, ou = {}, wv = !1, Ud = !1, zd = function(e) {
        return e.replace(ds, function(t, a) {
          return a.toUpperCase();
        });
      }, Ad = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          zd(e.replace(_v, "ms-"))
        ));
      }, Cv = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Tv = function(e, t) {
        ou.hasOwnProperty(t) && ou[t] || (ou[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(iu, "")));
      }, xv = function(e, t) {
        wv || (wv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Pg = function(e, t) {
        Ud || (Ud = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Ad(e) : Ev.test(e) ? Cv(e) : iu.test(t) && Tv(e, t), typeof t == "number" && (isNaN(t) ? xv(e, t) : isFinite(t) || Pg(e, t));
      };
    }
    var Vg = Sv;
    function Ig(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var s = e[l];
            if (s != null) {
              var d = l.indexOf("--") === 0;
              t += a + (d ? l : Yg(l)) + ":", t += Mc(l, s, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function bv(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var s = l.indexOf("--") === 0;
          s || Vg(l, t[l]);
          var d = Mc(l, t[l], s);
          l === "float" && (l = "cssFloat"), s ? a.setProperty(l, d) : a[l] = d;
        }
    }
    function Bg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ga(e) {
      var t = {};
      for (var a in e)
        for (var l = mv[a] || [a], s = 0; s < l.length; s++)
          t[l[s]] = a;
      return t;
    }
    function ps(e, t) {
      {
        if (!t)
          return;
        var a = ga(e), l = ga(t), s = {};
        for (var d in a) {
          var v = a[d], S = l[d];
          if (S && v !== S) {
            var _ = v + "," + S;
            if (s[_])
              continue;
            s[_] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Bg(e[v]) ? "Removing" : "Updating", v, S);
          }
        }
      }
    }
    var Rv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Dv = st({
      menuitem: !0
    }, Rv), kv = "__html";
    function Oc(e, t) {
      if (t) {
        if (Dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(kv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Mi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Nc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Mv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ga = {}, jd = new RegExp("^(aria)-[" + Ue + "]*$"), hs = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
    function Fd(e, t) {
      {
        if (ar.call(Ga, t) && Ga[t])
          return !0;
        if (hs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = Mv.hasOwnProperty(a) ? a : null;
          if (l == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ga[t] = !0, !0;
          if (t !== l)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Ga[t] = !0, !0;
        }
        if (jd.test(t)) {
          var s = t.toLowerCase(), d = Mv.hasOwnProperty(s) ? s : null;
          if (d == null)
            return Ga[t] = !0, !1;
          if (t !== d)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ga[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ov(e, t) {
      {
        var a = [];
        for (var l in t) {
          var s = Fd(e, l);
          s || a.push(l);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Lc(e, t) {
      Mi(e, t) || Ov(e, t);
    }
    var Jl = !1;
    function Hd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Yd = function() {
    };
    {
      var zn = {}, Pd = /^on./, Nv = /^on[^A-Z]/, Lv = new RegExp("^(aria)-[" + Ue + "]*$"), Uv = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
      Yd = function(e, t, a, l) {
        if (ar.call(zn, t) && zn[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (l != null) {
          var d = l.registrationNameDependencies, v = l.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = v.hasOwnProperty(s) ? v[s] : null;
          if (S != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, S), zn[t] = !0, !0;
          if (Pd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Pd.test(t))
          return Nv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Lv.test(t) || Uv.test(t))
          return !0;
        if (s === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (s === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (s === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var _ = Xr(t), C = _ !== null && _.type === ii;
        if (Nc.hasOwnProperty(s)) {
          var T = Nc[s];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), zn[t] = !0, !0;
        } else if (!C && t !== s)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), zn[t] = !0, !0;
        return typeof a == "boolean" && Or(t, a, _, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : C ? !0 : Or(t, a, _, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && _ !== null && _.type === vn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var zv = function(e, t, a) {
      {
        var l = [];
        for (var s in t) {
          var d = Yd(e, s, t[s], a);
          d || l.push(s);
        }
        var v = l.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        l.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Av(e, t, a) {
      Mi(e, t) || zv(e, t, a);
    }
    var Oi = 1, vs = 2, eo = 4, Wg = Oi | vs | eo, ms = null;
    function ys(e) {
      ms !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ms = e;
    }
    function $g() {
      ms === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ms = null;
    }
    function jv(e) {
      return e === ms;
    }
    function Uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ki ? t.parentNode : t;
    }
    var Ft = null, dl = null, Ni = null;
    function uu(e) {
      var t = Uu(e);
      if (t) {
        if (typeof Ft != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = jm(a);
          Ft(t.stateNode, t.type, l);
        }
      }
    }
    function Fv(e) {
      Ft = e;
    }
    function zc(e) {
      dl ? Ni ? Ni.push(e) : Ni = [e] : dl = e;
    }
    function gs() {
      return dl !== null || Ni !== null;
    }
    function Ss() {
      if (dl) {
        var e = dl, t = Ni;
        if (dl = null, Ni = null, uu(e), t)
          for (var a = 0; a < t.length; a++)
            uu(t[a]);
      }
    }
    var to = function(e, t) {
      return e(t);
    }, Vd = function() {
    }, Id = !1;
    function Gg() {
      var e = gs();
      e && (Vd(), Ss());
    }
    function Bd(e, t, a) {
      if (Id)
        return e(t, a);
      Id = !0;
      try {
        return to(e, t, a);
      } finally {
        Id = !1, Gg();
      }
    }
    function Ac(e, t, a) {
      to = e, Vd = a;
    }
    function jc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Wd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && jc(t));
        default:
          return !1;
      }
    }
    function no(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = jm(a);
      if (l === null)
        return null;
      var s = l[t];
      if (Wd(t, e.type, l))
        return null;
      if (s && typeof s != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var Es = !1;
    if (On)
      try {
        var ro = {};
        Object.defineProperty(ro, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", ro, ro), window.removeEventListener("test", ro, ro);
      } catch {
        Es = !1;
      }
    function Hv(e, t, a, l, s, d, v, S, _) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var $d = Hv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Gd = document.createElement("react");
      $d = function(t, a, l, s, d, v, S, _, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), U = !1, O = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function G() {
          Gd.removeEventListener(Q, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          U = !0, G(), a.apply(l, _e), O = !1;
        }
        var Ne, vt = !1, ft = !1;
        function j(F) {
          if (Ne = F.error, vt = !0, Ne === null && F.colno === 0 && F.lineno === 0 && (ft = !0), F.defaultPrevented && Ne != null && typeof Ne == "object")
            try {
              Ne._suppressLogging = !0;
            } catch {
            }
        }
        var Q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), Gd.addEventListener(Q, Ae, !1), T.initEvent(Q, !1, !1), Gd.dispatchEvent(T), I && Object.defineProperty(window, "event", I), U && O && (vt ? ft && (Ne = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ne = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ne)), window.removeEventListener("error", j), !U)
          return G(), Hv.apply(this, arguments);
      };
    }
    var Qg = $d, pl = !1, Qa = null, _s = !1, hl = null, oi = {
      onError: function(e) {
        pl = !0, Qa = e;
      }
    };
    function ao(e, t, a, l, s, d, v, S, _) {
      pl = !1, Qa = null, Qg.apply(oi, arguments);
    }
    function Li(e, t, a, l, s, d, v, S, _) {
      if (ao.apply(this, arguments), pl) {
        var C = qd();
        _s || (_s = !0, hl = C);
      }
    }
    function Qd() {
      if (_s) {
        var e = hl;
        throw _s = !1, hl = null, e;
      }
    }
    function qg() {
      return pl;
    }
    function qd() {
      if (pl) {
        var e = Qa;
        return pl = !1, Qa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Sa(e) {
      return e._reactInternals;
    }
    function ws(e) {
      return e._reactInternals !== void 0;
    }
    function su(e, t) {
      e._reactInternals = t;
    }
    var ze = (
      /*                      */
      0
    ), vl = (
      /*                */
      1
    ), It = (
      /*                    */
      2
    ), Je = (
      /*                       */
      4
    ), Tt = (
      /*                */
      16
    ), xt = (
      /*                 */
      32
    ), ui = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), on = (
      /*            */
      256
    ), Lr = (
      /*                          */
      512
    ), Ea = (
      /*                     */
      1024
    ), Zt = (
      /*                      */
      2048
    ), _a = (
      /*                    */
      4096
    ), ml = (
      /*                   */
      8192
    ), Cs = (
      /*             */
      16384
    ), Fc = Zt | Je | ui | Lr | Ea | Cs, Yv = (
      /*               */
      32767
    ), ta = (
      /*                   */
      32768
    ), An = (
      /*                */
      65536
    ), Ts = (
      /* */
      131072
    ), Zd = (
      /*                       */
      1048576
    ), Kd = (
      /*                    */
      2097152
    ), Ur = (
      /*                 */
      4194304
    ), yl = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), io = (
      /*              */
      33554432
    ), cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Je | Ea | 0
    ), Ar = It | Je | Tt | xt | Lr | _a | ml, ur = Je | ui | Lr | ml, wa = Zt | Tt, Bn = Ur | yl | Kd, Ui = c.ReactCurrentOwner;
    function na(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (It | _a)) !== ze && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === N ? a : null;
    }
    function Xd(e) {
      if (e.tag === se) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Hc(e) {
      return e.tag === N ? e.stateNode.containerInfo : null;
    }
    function Jd(e) {
      return na(e) === e;
    }
    function ra(e) {
      {
        var t = Ui.current;
        if (t !== null && t.tag === R) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var s = Sa(e);
      return s ? na(s) === s : !1;
    }
    function jr(e) {
      if (na(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Bt(e) {
      var t = e.alternate;
      if (!t) {
        var a = na(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var l = e, s = t; ; ) {
        var d = l.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var S = d.return;
          if (S !== null) {
            l = s = S;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var _ = d.child; _; ) {
            if (_ === l)
              return jr(d), e;
            if (_ === s)
              return jr(d), t;
            _ = _.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== s.return)
          l = d, s = v;
        else {
          for (var C = !1, T = d.child; T; ) {
            if (T === l) {
              C = !0, l = d, s = v;
              break;
            }
            if (T === s) {
              C = !0, s = d, l = v;
              break;
            }
            T = T.sibling;
          }
          if (!C) {
            for (T = v.child; T; ) {
              if (T === l) {
                C = !0, l = v, s = d;
                break;
              }
              if (T === s) {
                C = !0, s = v, l = d;
                break;
              }
              T = T.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== s)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== N)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Ca(e) {
      var t = Bt(e);
      return t !== null ? ep(t) : null;
    }
    function ep(e) {
      if (e.tag === $ || e.tag === Y)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ep(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Pv(e) {
      var t = Bt(e);
      return t !== null ? Yc(t) : null;
    }
    function Yc(e) {
      if (e.tag === $ || e.tag === Y)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== W) {
          var a = Yc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pc = u.unstable_scheduleCallback, Vv = u.unstable_cancelCallback, Vc = u.unstable_shouldYield, Iv = u.unstable_requestPaint, en = u.unstable_now, tp = u.unstable_getCurrentPriorityLevel, Ic = u.unstable_ImmediatePriority, aa = u.unstable_UserBlockingPriority, si = u.unstable_NormalPriority, Bc = u.unstable_LowPriority, gl = u.unstable_IdlePriority, np = u.unstable_yieldValue, rp = u.unstable_setDisableYieldValue, Sl = null, jn = null, de = null, dn = !1, Wn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ap(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ni && (e = st({}, e, {
          getLaneLabelMap: _l,
          injectProfilingHooks: Ai
        })), Sl = t.inject(e), jn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Bv(e, t) {
      if (jn && typeof jn.onScheduleFiberRoot == "function")
        try {
          jn.onScheduleFiberRoot(Sl, e, t);
        } catch (a) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function zi(e, t) {
      if (jn && typeof jn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (wn) {
            var l;
            switch (t) {
              case sr:
                l = Ic;
                break;
              case $n:
                l = aa;
                break;
              case Fi:
                l = si;
                break;
              case Ls:
                l = gl;
                break;
              default:
                l = si;
                break;
            }
            jn.onCommitFiberRoot(Sl, e, l, a);
          }
        } catch (s) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", s));
        }
    }
    function El(e) {
      if (jn && typeof jn.onPostCommitFiberRoot == "function")
        try {
          jn.onPostCommitFiberRoot(Sl, e);
        } catch (t) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ip(e) {
      if (jn && typeof jn.onCommitFiberUnmount == "function")
        try {
          jn.onCommitFiberUnmount(Sl, e);
        } catch (t) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof np == "function" && (rp(e), m(e)), jn && typeof jn.setStrictMode == "function")
        try {
          jn.setStrictMode(Sl, e);
        } catch (t) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ai(e) {
      de = e;
    }
    function _l() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wt; a++) {
          var l = Zg(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Wc(e) {
      de !== null && typeof de.markCommitStarted == "function" && de.markCommitStarted(e);
    }
    function lp() {
      de !== null && typeof de.markCommitStopped == "function" && de.markCommitStopped();
    }
    function wl(e) {
      de !== null && typeof de.markComponentRenderStarted == "function" && de.markComponentRenderStarted(e);
    }
    function lo() {
      de !== null && typeof de.markComponentRenderStopped == "function" && de.markComponentRenderStopped();
    }
    function Wv(e) {
      de !== null && typeof de.markComponentPassiveEffectMountStarted == "function" && de.markComponentPassiveEffectMountStarted(e);
    }
    function op() {
      de !== null && typeof de.markComponentPassiveEffectMountStopped == "function" && de.markComponentPassiveEffectMountStopped();
    }
    function $c(e) {
      de !== null && typeof de.markComponentPassiveEffectUnmountStarted == "function" && de.markComponentPassiveEffectUnmountStarted(e);
    }
    function $v() {
      de !== null && typeof de.markComponentPassiveEffectUnmountStopped == "function" && de.markComponentPassiveEffectUnmountStopped();
    }
    function Gv(e) {
      de !== null && typeof de.markComponentLayoutEffectMountStarted == "function" && de.markComponentLayoutEffectMountStarted(e);
    }
    function Qv() {
      de !== null && typeof de.markComponentLayoutEffectMountStopped == "function" && de.markComponentLayoutEffectMountStopped();
    }
    function Gc(e) {
      de !== null && typeof de.markComponentLayoutEffectUnmountStarted == "function" && de.markComponentLayoutEffectUnmountStarted(e);
    }
    function fu() {
      de !== null && typeof de.markComponentLayoutEffectUnmountStopped == "function" && de.markComponentLayoutEffectUnmountStopped();
    }
    function Qc(e, t, a) {
      de !== null && typeof de.markComponentErrored == "function" && de.markComponentErrored(e, t, a);
    }
    function qv(e, t, a) {
      de !== null && typeof de.markComponentSuspended == "function" && de.markComponentSuspended(e, t, a);
    }
    function Zv(e) {
      de !== null && typeof de.markLayoutEffectsStarted == "function" && de.markLayoutEffectsStarted(e);
    }
    function du() {
      de !== null && typeof de.markLayoutEffectsStopped == "function" && de.markLayoutEffectsStopped();
    }
    function Kv(e) {
      de !== null && typeof de.markPassiveEffectsStarted == "function" && de.markPassiveEffectsStarted(e);
    }
    function xs() {
      de !== null && typeof de.markPassiveEffectsStopped == "function" && de.markPassiveEffectsStopped();
    }
    function qa(e) {
      de !== null && typeof de.markRenderStarted == "function" && de.markRenderStarted(e);
    }
    function bs() {
      de !== null && typeof de.markRenderYielded == "function" && de.markRenderYielded();
    }
    function pu() {
      de !== null && typeof de.markRenderStopped == "function" && de.markRenderStopped();
    }
    function oo(e) {
      de !== null && typeof de.markRenderScheduled == "function" && de.markRenderScheduled(e);
    }
    function up(e, t) {
      de !== null && typeof de.markForceUpdateScheduled == "function" && de.markForceUpdateScheduled(e, t);
    }
    function Cl(e, t) {
      de !== null && typeof de.markStateUpdateScheduled == "function" && de.markStateUpdateScheduled(e, t);
    }
    var He = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), Ve = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), Ta = (
      /*              */
      16
    ), qc = Math.clz32 ? Math.clz32 : uo, Zc = Math.log, sp = Math.LN2;
    function uo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zc(t) / sp | 0) | 0;
    }
    var Wt = 31, q = (
      /*                        */
      0
    ), pt = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), ci = (
      /*    */
      2
    ), ia = (
      /*             */
      4
    ), so = (
      /*            */
      8
    ), $t = (
      /*                     */
      16
    ), co = (
      /*                */
      32
    ), Tl = (
      /*                       */
      4194240
    ), fo = (
      /*                        */
      64
    ), xa = (
      /*                        */
      128
    ), Fr = (
      /*                        */
      256
    ), po = (
      /*                        */
      512
    ), Rs = (
      /*                        */
      1024
    ), Ds = (
      /*                        */
      2048
    ), Kc = (
      /*                        */
      4096
    ), Xc = (
      /*                        */
      8192
    ), Jc = (
      /*                        */
      16384
    ), ef = (
      /*                       */
      32768
    ), tf = (
      /*                       */
      65536
    ), nf = (
      /*                       */
      131072
    ), rf = (
      /*                       */
      262144
    ), af = (
      /*                       */
      524288
    ), ho = (
      /*                       */
      1048576
    ), lf = (
      /*                       */
      2097152
    ), vo = (
      /*                            */
      130023424
    ), ji = (
      /*                             */
      4194304
    ), of = (
      /*                             */
      8388608
    ), ks = (
      /*                             */
      16777216
    ), uf = (
      /*                             */
      33554432
    ), sf = (
      /*                             */
      67108864
    ), cp = ji, hu = (
      /*          */
      134217728
    ), cf = (
      /*                          */
      268435455
    ), vu = (
      /*               */
      268435456
    ), xl = (
      /*                        */
      536870912
    ), Hr = (
      /*                   */
      1073741824
    );
    function Zg(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & ci)
          return "InputContinuousHydration";
        if (e & ia)
          return "InputContinuous";
        if (e & so)
          return "DefaultHydration";
        if (e & $t)
          return "Default";
        if (e & co)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & vo)
          return "Retry";
        if (e & hu)
          return "SelectiveHydration";
        if (e & vu)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & Hr)
          return "Offscreen";
      }
    }
    var Ht = -1, ff = fo, df = ji;
    function mu(e) {
      switch (gn(e)) {
        case Be:
          return Be;
        case ci:
          return ci;
        case ia:
          return ia;
        case so:
          return so;
        case $t:
          return $t;
        case co:
          return co;
        case fo:
        case xa:
        case Fr:
        case po:
        case Rs:
        case Ds:
        case Kc:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case ho:
        case lf:
          return e & Tl;
        case ji:
        case of:
        case ks:
        case uf:
        case sf:
          return e & vo;
        case hu:
          return hu;
        case vu:
          return vu;
        case xl:
          return xl;
        case Hr:
          return Hr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ms(e, t) {
      var a = e.pendingLanes;
      if (a === q)
        return q;
      var l = q, s = e.suspendedLanes, d = e.pingedLanes, v = a & cf;
      if (v !== q) {
        var S = v & ~s;
        if (S !== q)
          l = mu(S);
        else {
          var _ = v & d;
          _ !== q && (l = mu(_));
        }
      } else {
        var C = a & ~s;
        C !== q ? l = mu(C) : d !== q && (l = mu(d));
      }
      if (l === q)
        return q;
      if (t !== q && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === q) {
        var T = gn(l), U = gn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === $t && (U & Tl) !== q
        )
          return t;
      }
      (l & ia) !== q && (l |= a & $t);
      var O = e.entangledLanes;
      if (O !== q)
        for (var V = e.entanglements, I = l & O; I > 0; ) {
          var G = bl(I), _e = 1 << G;
          l |= V[G], I &= ~_e;
        }
      return l;
    }
    function Xv(e, t) {
      for (var a = e.eventTimes, l = Ht; t > 0; ) {
        var s = bl(t), d = 1 << s, v = a[s];
        v > l && (l = v), t &= ~d;
      }
      return l;
    }
    function pf(e, t) {
      switch (e) {
        case Be:
        case ci:
        case ia:
          return t + 250;
        case so:
        case $t:
        case co:
        case fo:
        case xa:
        case Fr:
        case po:
        case Rs:
        case Ds:
        case Kc:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case ho:
        case lf:
          return t + 5e3;
        case ji:
        case of:
        case ks:
        case uf:
        case sf:
          return Ht;
        case hu:
        case vu:
        case xl:
        case Hr:
          return Ht;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function Kg(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var S = bl(v), _ = 1 << S, C = d[S];
        C === Ht ? ((_ & l) === q || (_ & s) !== q) && (d[S] = pf(_, t)) : C <= t && (e.expiredLanes |= _), v &= ~_;
      }
    }
    function Xg(e) {
      return mu(e.pendingLanes);
    }
    function fp(e) {
      var t = e.pendingLanes & ~Hr;
      return t !== q ? t : t & Hr ? Hr : q;
    }
    function yu(e) {
      return (e & Be) !== q;
    }
    function Os(e) {
      return (e & cf) !== q;
    }
    function hf(e) {
      return (e & vo) === e;
    }
    function Jg(e) {
      var t = Be | ia | $t;
      return (e & t) === q;
    }
    function Jv(e) {
      return (e & Tl) === e;
    }
    function Ns(e, t) {
      var a = ci | ia | so | $t;
      return (t & a) !== q;
    }
    function em(e, t) {
      return (t & e.expiredLanes) !== q;
    }
    function dp(e) {
      return (e & Tl) !== q;
    }
    function pp() {
      var e = ff;
      return ff <<= 1, (ff & Tl) === q && (ff = fo), e;
    }
    function e0() {
      var e = df;
      return df <<= 1, (df & vo) === q && (df = ji), e;
    }
    function gn(e) {
      return e & -e;
    }
    function xn(e) {
      return gn(e);
    }
    function bl(e) {
      return 31 - qc(e);
    }
    function vf(e) {
      return bl(e);
    }
    function Yr(e, t) {
      return (e & t) !== q;
    }
    function mo(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function gu(e, t) {
      return e & ~t;
    }
    function hp(e, t) {
      return e & t;
    }
    function tm(e) {
      return e;
    }
    function nm(e, t) {
      return e !== pt && e < t ? e : t;
    }
    function mf(e) {
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function yo(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = q, e.pingedLanes = q);
      var l = e.eventTimes, s = vf(t);
      l[s] = a;
    }
    function vp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var s = bl(l), d = 1 << s;
        a[s] = Ht, l &= ~d;
      }
    }
    function mp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function yp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, s = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var S = bl(v), _ = 1 << S;
        l[S] = q, s[S] = Ht, d[S] = Ht, v &= ~_;
      }
    }
    function Su(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, s = a; s; ) {
        var d = bl(s), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[d] & t && (l[d] |= t), s &= ~v;
      }
    }
    function t0(e, t) {
      var a = gn(t), l;
      switch (a) {
        case ia:
          l = ci;
          break;
        case $t:
          l = so;
          break;
        case fo:
        case xa:
        case Fr:
        case po:
        case Rs:
        case Ds:
        case Kc:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case ho:
        case lf:
        case ji:
        case of:
        case ks:
        case uf:
        case sf:
          l = co;
          break;
        case xl:
          l = vu;
          break;
        default:
          l = pt;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== pt ? pt : l;
    }
    function gp(e, t, a) {
      if (Wn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var s = vf(a), d = 1 << s, v = l[s];
          v.add(t), a &= ~d;
        }
    }
    function yf(e, t) {
      if (Wn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var s = vf(t), d = 1 << s, v = a[s];
          v.size > 0 && (v.forEach(function(S) {
            var _ = S.alternate;
            (_ === null || !l.has(_)) && l.add(S);
          }), v.clear()), t &= ~d;
        }
    }
    function Sp(e, t) {
      return null;
    }
    var sr = Be, $n = ia, Fi = $t, Ls = xl, go = pt;
    function ba() {
      return go;
    }
    function bn(e) {
      go = e;
    }
    function Us(e, t) {
      var a = go;
      try {
        return go = e, t();
      } finally {
        go = a;
      }
    }
    function cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function n0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ep(e, t) {
      return e !== 0 && e < t;
    }
    function zs(e) {
      var t = gn(e);
      return Ep(sr, t) ? Ep($n, t) ? Os(t) ? Fi : Ls : $n : sr;
    }
    function Rn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var rm;
    function Ce(e) {
      rm = e;
    }
    function Eu(e) {
      rm(e);
    }
    var As;
    function am(e) {
      As = e;
    }
    var im;
    function js(e) {
      im = e;
    }
    var Fs;
    function _p(e) {
      Fs = e;
    }
    var wp;
    function lm(e) {
      wp = e;
    }
    var gf = !1, _u = [], fi = null, Kt = null, Fn = null, Ra = /* @__PURE__ */ new Map(), wu = /* @__PURE__ */ new Map(), Hi = [], Za = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function om(e) {
      return Za.indexOf(e) > -1;
    }
    function di(e, t, a, l, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: s,
        targetContainers: [l]
      };
    }
    function um(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fi = null;
          break;
        case "dragenter":
        case "dragleave":
          Kt = null;
          break;
        case "mouseover":
        case "mouseout":
          Fn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ra.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          wu.delete(l);
          break;
        }
      }
    }
    function Cu(e, t, a, l, s, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = di(t, a, l, s, d);
        if (t !== null) {
          var S = Uu(t);
          S !== null && As(S);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var _ = e.targetContainers;
      return s !== null && _.indexOf(s) === -1 && _.push(s), e;
    }
    function sm(e, t, a, l, s) {
      switch (t) {
        case "focusin": {
          var d = s;
          return fi = Cu(fi, e, t, a, l, d), !0;
        }
        case "dragenter": {
          var v = s;
          return Kt = Cu(Kt, e, t, a, l, v), !0;
        }
        case "mouseover": {
          var S = s;
          return Fn = Cu(Fn, e, t, a, l, S), !0;
        }
        case "pointerover": {
          var _ = s, C = _.pointerId;
          return Ra.set(C, Cu(Ra.get(C) || null, e, t, a, l, _)), !0;
        }
        case "gotpointercapture": {
          var T = s, U = T.pointerId;
          return wu.set(U, Cu(wu.get(U) || null, e, t, a, l, T)), !0;
        }
      }
      return !1;
    }
    function Cp(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = na(t);
        if (a !== null) {
          var l = a.tag;
          if (l === se) {
            var s = Xd(a);
            if (s !== null) {
              e.blockedOn = s, wp(e.priority, function() {
                im(a);
              });
              return;
            }
          } else if (l === N) {
            var d = a.stateNode;
            if (Rn(d)) {
              e.blockedOn = Hc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function cm(e) {
      for (var t = Fs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < Hi.length && Ep(t, Hi[l].priority); l++)
        ;
      Hi.splice(l, 0, a), l === 0 && Cp(a);
    }
    function Sf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = So(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var s = e.nativeEvent, d = new s.constructor(s.type, s);
          ys(d), s.target.dispatchEvent(d), $g();
        } else {
          var v = Uu(l);
          return v !== null && As(v), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hs(e, t, a) {
      Sf(e) && a.delete(t);
    }
    function Tp() {
      gf = !1, fi !== null && Sf(fi) && (fi = null), Kt !== null && Sf(Kt) && (Kt = null), Fn !== null && Sf(Fn) && (Fn = null), Ra.forEach(Hs), wu.forEach(Hs);
    }
    function fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, gf || (gf = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Tp)));
    }
    function ct(e) {
      if (_u.length > 0) {
        fr(_u[0], e);
        for (var t = 1; t < _u.length; t++) {
          var a = _u[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fi !== null && fr(fi, e), Kt !== null && fr(Kt, e), Fn !== null && fr(Fn, e);
      var l = function(S) {
        return fr(S, e);
      };
      Ra.forEach(l), wu.forEach(l);
      for (var s = 0; s < Hi.length; s++) {
        var d = Hi[s];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; Hi.length > 0; ) {
        var v = Hi[0];
        if (v.blockedOn !== null)
          break;
        Cp(v), v.blockedOn === null && Hi.shift();
      }
    }
    var nn = c.ReactCurrentBatchConfig, un = !0;
    function Hn(e) {
      un = !!e;
    }
    function la() {
      return un;
    }
    function Tu(e, t, a) {
      var l = yr(t), s;
      switch (l) {
        case sr:
          s = Dn;
          break;
        case $n:
          s = Ys;
          break;
        case Fi:
        default:
          s = Yi;
          break;
      }
      return s.bind(null, t, a, e);
    }
    function Dn(e, t, a, l) {
      var s = ba(), d = nn.transition;
      nn.transition = null;
      try {
        bn(sr), Yi(e, t, a, l);
      } finally {
        bn(s), nn.transition = d;
      }
    }
    function Ys(e, t, a, l) {
      var s = ba(), d = nn.transition;
      nn.transition = null;
      try {
        bn($n), Yi(e, t, a, l);
      } finally {
        bn(s), nn.transition = d;
      }
    }
    function Yi(e, t, a, l) {
      un && Ef(e, t, a, l);
    }
    function Ef(e, t, a, l) {
      var s = So(e, t, a, l);
      if (s === null) {
        w0(e, t, l, xu, a), um(e, l);
        return;
      }
      if (sm(s, e, t, a, l)) {
        l.stopPropagation();
        return;
      }
      if (um(e, l), t & eo && om(e)) {
        for (; s !== null; ) {
          var d = Uu(s);
          d !== null && Eu(d);
          var v = So(e, t, a, l);
          if (v === null && w0(e, t, l, xu, a), v === s)
            break;
          s = v;
        }
        s !== null && l.stopPropagation();
        return;
      }
      w0(e, t, l, null, a);
    }
    var xu = null;
    function So(e, t, a, l) {
      xu = null;
      var s = Uc(l), d = Gs(s);
      if (d !== null) {
        var v = na(d);
        if (v === null)
          d = null;
        else {
          var S = v.tag;
          if (S === se) {
            var _ = Xd(v);
            if (_ !== null)
              return _;
            d = null;
          } else if (S === N) {
            var C = v.stateNode;
            if (Rn(C))
              return Hc(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return xu = d, null;
    }
    function yr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return sr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return $n;
        case "message": {
          var t = tp();
          switch (t) {
            case Ic:
              return sr;
            case aa:
              return $n;
            case si:
            case Bc:
              return Fi;
            case gl:
              return Ls;
            default:
              return Fi;
          }
        }
        default:
          return Fi;
      }
    }
    function xp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function bu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Pi(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function _f(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var Eo = null, pi = null, Rl = null;
    function Dl(e) {
      return Eo = e, pi = Cf(), !0;
    }
    function wf() {
      Eo = null, pi = null, Rl = null;
    }
    function Ru() {
      if (Rl)
        return Rl;
      var e, t = pi, a = t.length, l, s = Cf(), d = s.length;
      for (e = 0; e < a && t[e] === s[e]; e++)
        ;
      var v = a - e;
      for (l = 1; l <= v && t[a - l] === s[d - l]; l++)
        ;
      var S = l > 1 ? 1 - l : void 0;
      return Rl = s.slice(e, S), Rl;
    }
    function Cf() {
      return "value" in Eo ? Eo.value : Eo.textContent;
    }
    function _o(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function dr() {
      return !1;
    }
    function Sn(e) {
      function t(a, l, s, d, v) {
        this._reactName = a, this._targetInst = s, this.type = l, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var _ = e[S];
            _ ? this[S] = _(d) : this[S] = d[S];
          }
        var C = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return C ? this.isDefaultPrevented = wo : this.isDefaultPrevented = dr, this.isPropagationStopped = dr, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var pr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, hr = Sn(pr), Du = st({}, pr, {
      view: 0,
      detail: 0
    }), bp = Sn(Du), Ps, Rp, Da;
    function fm(e) {
      e !== Da && (Da && e.type === "mousemove" ? (Ps = e.screenX - Da.screenX, Rp = e.screenY - Da.screenY) : (Ps = 0, Rp = 0), Da = e);
    }
    var ku = st({}, Du, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (fm(e), Ps);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Rp;
      }
    }), kl = Sn(ku), Dp = st({}, ku, {
      dataTransfer: 0
    }), Co = Sn(Dp), dm = st({}, Du, {
      relatedTarget: 0
    }), Tf = Sn(dm), kp = st({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xf = Sn(kp), r0 = st({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), a0 = Sn(r0), pm = st({}, pr, {
      data: 0
    }), Mp = Sn(pm), To = Mp, i0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Mu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function hm(e) {
      if (e.key) {
        var t = i0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = _o(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var sn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function l0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = sn[e];
      return l ? !!a[l] : !1;
    }
    function bf(e) {
      return l0;
    }
    var o0 = st({}, Du, {
      key: hm,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? _o(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? _o(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), u0 = Sn(o0), vm = st({}, ku, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Op = Sn(vm), s0 = st({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bf
    }), ka = Sn(s0), Np = st({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), c0 = Sn(Np), Ml = st({}, ku, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Rf = Sn(Ml), xo = [9, 13, 27, 32], Vs = 229, Is = On && "CompositionEvent" in window, bo = null;
    On && "documentMode" in document && (bo = document.documentMode);
    var f0 = On && "TextEvent" in window && !bo, Df = On && (!Is || bo && bo > 8 && bo <= 11), mm = 32, Lp = String.fromCharCode(mm);
    function ym() {
      Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Mr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Bs = !1;
    function kf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function gm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Up(e, t) {
      return e === "keydown" && t.keyCode === Vs;
    }
    function Sm(e, t) {
      switch (e) {
        case "keyup":
          return xo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function zp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Mf(e) {
      return e.locale === "ko";
    }
    var Vi = !1;
    function Ap(e, t, a, l, s) {
      var d, v;
      if (Is ? d = gm(t) : Vi ? Sm(t, l) && (d = "onCompositionEnd") : Up(t, l) && (d = "onCompositionStart"), !d)
        return null;
      Df && !Mf(l) && (!Vi && d === "onCompositionStart" ? Vi = Dl(s) : d === "onCompositionEnd" && Vi && (v = Ru()));
      var S = Tm(a, d);
      if (S.length > 0) {
        var _ = new Mp(d, t, null, l, s);
        if (e.push({
          event: _,
          listeners: S
        }), v)
          _.data = v;
        else {
          var C = zp(l);
          C !== null && (_.data = C);
        }
      }
    }
    function Of(e, t) {
      switch (e) {
        case "compositionend":
          return zp(t);
        case "keypress":
          var a = t.which;
          return a !== mm ? null : (Bs = !0, Lp);
        case "textInput":
          var l = t.data;
          return l === Lp && Bs ? null : l;
        default:
          return null;
      }
    }
    function Em(e, t) {
      if (Vi) {
        if (e === "compositionend" || !Is && Sm(e, t)) {
          var a = Ru();
          return wf(), Vi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!kf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Df && !Mf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function d0(e, t, a, l, s) {
      var d;
      if (f0 ? d = Of(t, l) : d = Em(t, l), !d)
        return null;
      var v = Tm(a, "onBeforeInput");
      if (v.length > 0) {
        var S = new To("onBeforeInput", "beforeinput", null, l, s);
        e.push({
          event: S,
          listeners: v
        }), S.data = d;
      }
    }
    function Nf(e, t, a, l, s, d, v) {
      Ap(e, t, a, l, s), d0(e, t, a, l, s);
    }
    var p0 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ou(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!p0[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function h0(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function Lf() {
      Mr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      zc(l);
      var s = Tm(t, "onChange");
      if (s.length > 0) {
        var d = new hr("onChange", "change", null, a, l);
        e.push({
          event: d,
          listeners: s
        });
      }
    }
    var r = null, o = null;
    function f(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function h(e) {
      var t = [];
      n(t, o, e, Uc(e)), Bd(y, t);
    }
    function y(e) {
      w_(e, 0);
    }
    function w(e) {
      var t = Hf(e);
      if (lv(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var M = !1;
    On && (M = h0("input") && (!document.documentMode || document.documentMode > 9));
    function B(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", te);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", te), r = null, o = null);
    }
    function te(e) {
      e.propertyName === "value" && w(o) && h(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (X(), B(t, a)) : e === "focusout" && X();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(o);
    }
    function be(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Me(e, t) {
      if (e === "click")
        return w(t);
    }
    function pn(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function A(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || cl(e, "number", e.value);
    }
    function L(e, t, a, l, s, d, v) {
      var S = a ? Hf(a) : window, _, C;
      if (f(S) ? _ = x : Ou(S) ? M ? _ = pn : (_ = ye, C = K) : be(S) && (_ = Me), _) {
        var T = _(t, a);
        if (T) {
          n(e, T, l, s);
          return;
        }
      }
      C && C(t, S, a), t === "focusout" && A(S);
    }
    function H() {
      pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ue(e, t, a, l, s, d, v) {
      var S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout";
      if (S && !jv(l)) {
        var C = l.relatedTarget || l.fromElement;
        if (C && (Gs(C) || Zp(C)))
          return;
      }
      if (!(!_ && !S)) {
        var T;
        if (s.window === s)
          T = s;
        else {
          var U = s.ownerDocument;
          U ? T = U.defaultView || U.parentWindow : T = window;
        }
        var O, V;
        if (_) {
          var I = l.relatedTarget || l.toElement;
          if (O = a, V = I ? Gs(I) : null, V !== null) {
            var G = na(V);
            (V !== G || V.tag !== $ && V.tag !== Y) && (V = null);
          }
        } else
          O = null, V = a;
        if (O !== V) {
          var _e = kl, Ae = "onMouseLeave", Ne = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = Op, Ae = "onPointerLeave", Ne = "onPointerEnter", vt = "pointer");
          var ft = O == null ? T : Hf(O), j = V == null ? T : Hf(V), Q = new _e(Ae, vt + "leave", O, l, s);
          Q.target = ft, Q.relatedTarget = j;
          var F = null, re = Gs(s);
          if (re === a) {
            var we = new _e(Ne, vt + "enter", V, l, s);
            we.target = j, we.relatedTarget = ft, F = we;
          }
          nR(e, Q, F, O, V);
        }
      }
    }
    function Oe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Re = typeof Object.is == "function" ? Object.is : Oe;
    function Le(e, t) {
      if (Re(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var s = 0; s < a.length; s++) {
        var d = a[s];
        if (!ar.call(t, d) || !Re(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Yn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yt(e, t) {
      for (var a = Ge(e), l = 0, s = 0; a; ) {
        if (a.nodeType === ki) {
          if (s = l + a.textContent.length, l <= t && s >= t)
            return {
              node: a,
              offset: t - l
            };
          l = s;
        }
        a = Ge(Yn(a));
      }
    }
    function Ol(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var s = l.anchorNode, d = l.anchorOffset, v = l.focusNode, S = l.focusOffset;
      try {
        s.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return v0(e, s, d, v, S);
    }
    function v0(e, t, a, l, s) {
      var d = 0, v = -1, S = -1, _ = 0, C = 0, T = e, U = null;
      e:
        for (; ; ) {
          for (var O = null; T === t && (a === 0 || T.nodeType === ki) && (v = d + a), T === l && (s === 0 || T.nodeType === ki) && (S = d + s), T.nodeType === ki && (d += T.nodeValue.length), (O = T.firstChild) !== null; )
            U = T, T = O;
          for (; ; ) {
            if (T === e)
              break e;
            if (U === t && ++_ === a && (v = d), U === l && ++C === s && (S = d), (O = T.nextSibling) !== null)
              break;
            T = U, U = T.parentNode;
          }
          T = O;
        }
      return v === -1 || S === -1 ? null : {
        start: v,
        end: S
      };
    }
    function jb(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var s = l.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), S = t.end === void 0 ? v : Math.min(t.end, d);
        if (!s.extend && v > S) {
          var _ = S;
          S = v, v = _;
        }
        var C = yt(e, v), T = yt(e, S);
        if (C && T) {
          if (s.rangeCount === 1 && s.anchorNode === C.node && s.anchorOffset === C.offset && s.focusNode === T.node && s.focusOffset === T.offset)
            return;
          var U = a.createRange();
          U.setStart(C.node, C.offset), s.removeAllRanges(), v > S ? (s.addRange(U), s.extend(T.node, T.offset)) : (U.setEnd(T.node, T.offset), s.addRange(U));
        }
      }
    }
    function c_(e) {
      return e && e.nodeType === ki;
    }
    function f_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : c_(e) ? !1 : c_(t) ? f_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Fb(e) {
      return e && e.ownerDocument && f_(e.ownerDocument.documentElement, e);
    }
    function Hb(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function d_() {
      for (var e = window, t = _c(); t instanceof e.HTMLIFrameElement; ) {
        if (Hb(t))
          e = t.contentWindow;
        else
          return t;
        t = _c(e.document);
      }
      return t;
    }
    function m0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Yb() {
      var e = d_();
      return {
        focusedElem: e,
        selectionRange: m0(e) ? Vb(e) : null
      };
    }
    function Pb(e) {
      var t = d_(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && Fb(a)) {
        l !== null && m0(a) && Ib(a, l);
        for (var s = [], d = a; d = d.parentNode; )
          d.nodeType === Nr && s.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < s.length; v++) {
          var S = s[v];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function Vb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ol(e), t || {
        start: 0,
        end: 0
      };
    }
    function Ib(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : jb(e, t);
    }
    var Bb = On && "documentMode" in document && document.documentMode <= 11;
    function Wb() {
      Mr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Uf = null, y0 = null, jp = null, g0 = !1;
    function $b(e) {
      if ("selectionStart" in e && m0(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Gb(e) {
      return e.window === e ? e.document : e.nodeType === $a ? e : e.ownerDocument;
    }
    function p_(e, t, a) {
      var l = Gb(a);
      if (!(g0 || Uf == null || Uf !== _c(l))) {
        var s = $b(Uf);
        if (!jp || !Le(jp, s)) {
          jp = s;
          var d = Tm(y0, "onSelect");
          if (d.length > 0) {
            var v = new hr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: d
            }), v.target = Uf;
          }
        }
      }
    }
    function Qb(e, t, a, l, s, d, v) {
      var S = a ? Hf(a) : window;
      switch (t) {
        case "focusin":
          (Ou(S) || S.contentEditable === "true") && (Uf = S, y0 = a, jp = null);
          break;
        case "focusout":
          Uf = null, y0 = null, jp = null;
          break;
        case "mousedown":
          g0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          g0 = !1, p_(e, l, s);
          break;
        case "selectionchange":
          if (Bb)
            break;
        case "keydown":
        case "keyup":
          p_(e, l, s);
      }
    }
    function _m(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var zf = {
      animationend: _m("Animation", "AnimationEnd"),
      animationiteration: _m("Animation", "AnimationIteration"),
      animationstart: _m("Animation", "AnimationStart"),
      transitionend: _m("Transition", "TransitionEnd")
    }, S0 = {}, h_ = {};
    On && (h_ = document.createElement("div").style, "AnimationEvent" in window || (delete zf.animationend.animation, delete zf.animationiteration.animation, delete zf.animationstart.animation), "TransitionEvent" in window || delete zf.transitionend.transition);
    function wm(e) {
      if (S0[e])
        return S0[e];
      if (!zf[e])
        return e;
      var t = zf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in h_)
          return S0[e] = t[a];
      return e;
    }
    var v_ = wm("animationend"), m_ = wm("animationiteration"), y_ = wm("animationstart"), g_ = wm("transitionend"), S_ = /* @__PURE__ */ new Map(), E_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Nu(e, t) {
      S_.set(e, t), Mr(t, [e]);
    }
    function qb() {
      for (var e = 0; e < E_.length; e++) {
        var t = E_[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Nu(a, "on" + l);
      }
      Nu(v_, "onAnimationEnd"), Nu(m_, "onAnimationIteration"), Nu(y_, "onAnimationStart"), Nu("dblclick", "onDoubleClick"), Nu("focusin", "onFocus"), Nu("focusout", "onBlur"), Nu(g_, "onTransitionEnd");
    }
    function Zb(e, t, a, l, s, d, v) {
      var S = S_.get(t);
      if (S !== void 0) {
        var _ = hr, C = t;
        switch (t) {
          case "keypress":
            if (_o(l) === 0)
              return;
          case "keydown":
          case "keyup":
            _ = u0;
            break;
          case "focusin":
            C = "focus", _ = Tf;
            break;
          case "focusout":
            C = "blur", _ = Tf;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Tf;
            break;
          case "click":
            if (l.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = kl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Co;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = ka;
            break;
          case v_:
          case m_:
          case y_:
            _ = xf;
            break;
          case g_:
            _ = c0;
            break;
          case "scroll":
            _ = bp;
            break;
          case "wheel":
            _ = Rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = a0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Op;
            break;
        }
        var T = (d & eo) !== 0;
        {
          var U = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = eR(a, S, l.type, T, U);
          if (O.length > 0) {
            var V = new _(S, C, null, l, s);
            e.push({
              event: V,
              listeners: O
            });
          }
        }
      }
    }
    qb(), H(), Lf(), Wb(), ym();
    function Kb(e, t, a, l, s, d, v) {
      Zb(e, t, a, l, s, d);
      var S = (d & Wg) === 0;
      S && (ue(e, t, a, l, s), L(e, t, a, l, s), Qb(e, t, a, l, s), Nf(e, t, a, l, s));
    }
    var Fp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], E0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Fp));
    function __(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Li(l, t, void 0, e), e.currentTarget = null;
    }
    function Xb(e, t, a) {
      var l;
      if (a)
        for (var s = t.length - 1; s >= 0; s--) {
          var d = t[s], v = d.instance, S = d.currentTarget, _ = d.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          __(e, _, S), l = v;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], U = T.instance, O = T.currentTarget, V = T.listener;
          if (U !== l && e.isPropagationStopped())
            return;
          __(e, V, O), l = U;
        }
    }
    function w_(e, t) {
      for (var a = (t & eo) !== 0, l = 0; l < e.length; l++) {
        var s = e[l], d = s.event, v = s.listeners;
        Xb(d, v, a);
      }
      Qd();
    }
    function Jb(e, t, a, l, s) {
      var d = Uc(a), v = [];
      Kb(v, e, l, a, d, t), w_(v, t);
    }
    function rn(e, t) {
      E0.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = kD(t), s = rR(e, a);
      l.has(s) || (C_(t, e, vs, a), l.add(s));
    }
    function _0(e, t, a) {
      E0.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= eo), C_(a, e, l, t);
    }
    var Cm = "_reactListening" + Math.random().toString(36).slice(2);
    function Hp(e) {
      if (!e[Cm]) {
        e[Cm] = !0, rr.forEach(function(a) {
          a !== "selectionchange" && (E0.has(a) || _0(a, !1, e), _0(a, !0, e));
        });
        var t = e.nodeType === $a ? e : e.ownerDocument;
        t !== null && (t[Cm] || (t[Cm] = !0, _0("selectionchange", !1, t)));
      }
    }
    function C_(e, t, a, l, s) {
      var d = Tu(e, t, a), v = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Pi(e, t, d, v) : bu(e, t, d) : v !== void 0 ? _f(e, t, d, v) : xp(e, t, d);
    }
    function T_(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function w0(e, t, a, l, s) {
      var d = l;
      if (!(t & Oi) && !(t & vs)) {
        var v = s;
        if (l !== null) {
          var S = l;
          e:
            for (; ; ) {
              if (S === null)
                return;
              var _ = S.tag;
              if (_ === N || _ === W) {
                var C = S.stateNode.containerInfo;
                if (T_(C, v))
                  break;
                if (_ === W)
                  for (var T = S.return; T !== null; ) {
                    var U = T.tag;
                    if (U === N || U === W) {
                      var O = T.stateNode.containerInfo;
                      if (T_(O, v))
                        return;
                    }
                    T = T.return;
                  }
                for (; C !== null; ) {
                  var V = Gs(C);
                  if (V === null)
                    return;
                  var I = V.tag;
                  if (I === $ || I === Y) {
                    S = d = V;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              S = S.return;
            }
        }
      }
      Bd(function() {
        return Jb(e, t, a, d);
      });
    }
    function Yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function eR(e, t, a, l, s, d) {
      for (var v = t !== null ? t + "Capture" : null, S = l ? v : t, _ = [], C = e, T = null; C !== null; ) {
        var U = C, O = U.stateNode, V = U.tag;
        if (V === $ && O !== null && (T = O, S !== null)) {
          var I = no(C, S);
          I != null && _.push(Yp(C, I, T));
        }
        if (s)
          break;
        C = C.return;
      }
      return _;
    }
    function Tm(e, t) {
      for (var a = t + "Capture", l = [], s = e; s !== null; ) {
        var d = s, v = d.stateNode, S = d.tag;
        if (S === $ && v !== null) {
          var _ = v, C = no(s, a);
          C != null && l.unshift(Yp(s, C, _));
          var T = no(s, t);
          T != null && l.push(Yp(s, T, _));
        }
        s = s.return;
      }
      return l;
    }
    function Af(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== $);
      return e || null;
    }
    function tR(e, t) {
      for (var a = e, l = t, s = 0, d = a; d; d = Af(d))
        s++;
      for (var v = 0, S = l; S; S = Af(S))
        v++;
      for (; s - v > 0; )
        a = Af(a), s--;
      for (; v - s > 0; )
        l = Af(l), v--;
      for (var _ = s; _--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Af(a), l = Af(l);
      }
      return null;
    }
    function x_(e, t, a, l, s) {
      for (var d = t._reactName, v = [], S = a; S !== null && S !== l; ) {
        var _ = S, C = _.alternate, T = _.stateNode, U = _.tag;
        if (C !== null && C === l)
          break;
        if (U === $ && T !== null) {
          var O = T;
          if (s) {
            var V = no(S, d);
            V != null && v.unshift(Yp(S, V, O));
          } else if (!s) {
            var I = no(S, d);
            I != null && v.push(Yp(S, I, O));
          }
        }
        S = S.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function nR(e, t, a, l, s) {
      var d = l && s ? tR(l, s) : null;
      l !== null && x_(e, t, l, d, !1), s !== null && a !== null && x_(e, a, s, d, !0);
    }
    function rR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ma = !1, Pp = "dangerouslySetInnerHTML", xm = "suppressContentEditableWarning", Lu = "suppressHydrationWarning", b_ = "autoFocus", Ws = "children", $s = "style", bm = "__html", C0, Rm, Vp, R_, Dm, D_, k_;
    C0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rm = function(e, t) {
      Lc(e, t), Hd(e, t), Av(e, t, {
        registrationNameDependencies: kr,
        possibleRegistrationNames: ri
      });
    }, D_ = On && !document.documentMode, Vp = function(e, t, a) {
      if (!Ma) {
        var l = km(a), s = km(t);
        s !== l && (Ma = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(l)));
      }
    }, R_ = function(e) {
      if (!Ma) {
        Ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Dm = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, k_ = function(e, t) {
      var a = e.namespaceURI === Di ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var aR = /\r\n?/g, iR = /\u0000|\uFFFD/g;
    function km(e) {
      Ha(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(aR, `
`).replace(iR, "");
    }
    function Mm(e, t, a, l) {
      var s = km(t), d = km(e);
      if (d !== s && (l && (Ma || (Ma = !0, g('Text content did not match. Server: "%s" Client: "%s"', d, s))), a && _n))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function M_(e) {
      return e.nodeType === $a ? e : e.ownerDocument;
    }
    function lR() {
    }
    function Om(e) {
      e.onclick = lR;
    }
    function oR(e, t, a, l, s) {
      for (var d in l)
        if (l.hasOwnProperty(d)) {
          var v = l[d];
          if (d === $s)
            v && Object.freeze(v), bv(t, v);
          else if (d === Pp) {
            var S = v ? v[bm] : void 0;
            S != null && vv(t, S);
          } else if (d === Ws)
            if (typeof v == "string") {
              var _ = e !== "textarea" || v !== "";
              _ && kc(t, v);
            } else
              typeof v == "number" && kc(t, "" + v);
          else
            d === xm || d === Lu || d === b_ || (kr.hasOwnProperty(d) ? v != null && (typeof v != "function" && Dm(d, v), d === "onScroll" && rn("scroll", t)) : v != null && li(t, d, v, s));
        }
    }
    function uR(e, t, a, l) {
      for (var s = 0; s < t.length; s += 2) {
        var d = t[s], v = t[s + 1];
        d === $s ? bv(e, v) : d === Pp ? vv(e, v) : d === Ws ? kc(e, v) : li(e, d, v, l);
      }
    }
    function sR(e, t, a, l) {
      var s, d = M_(a), v, S = l;
      if (S === Di && (S = Rc(e)), S === Di) {
        if (s = Mi(e, t), !s && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var _ = d.createElement("div");
          _.innerHTML = "<script><\/script>";
          var C = _.firstChild;
          v = _.removeChild(C);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var T = v;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        v = d.createElementNS(S, e);
      return S === Di && !s && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !ar.call(C0, e) && (C0[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function cR(e, t) {
      return M_(t).createTextNode(e);
    }
    function fR(e, t, a, l) {
      var s = Mi(t, a);
      Rm(t, a);
      var d;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Fp.length; v++)
            rn(Fp[v], e);
          d = a;
          break;
        case "source":
          rn("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), d = a;
          break;
        case "details":
          rn("toggle", e), d = a;
          break;
        case "input":
          ss(e, a), d = us(e, a), rn("invalid", e);
          break;
        case "option":
          xc(e, a), d = a;
          break;
        case "select":
          fv(e, a), d = Dd(e, a), rn("invalid", e);
          break;
        case "textarea":
          dv(e, a), d = Md(e, a), rn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Oc(t, d), oR(t, e, l, d, s), t) {
        case "input":
          Kl(e), cs(e, a, !1);
          break;
        case "textarea":
          Kl(e), hv(e);
          break;
        case "option":
          Rd(e, a);
          break;
        case "select":
          Ug(e, a);
          break;
        default:
          typeof d.onClick == "function" && Om(e);
          break;
      }
    }
    function dR(e, t, a, l, s) {
      Rm(t, l);
      var d = null, v, S;
      switch (t) {
        case "input":
          v = us(e, a), S = us(e, l), d = [];
          break;
        case "select":
          v = Dd(e, a), S = Dd(e, l), d = [];
          break;
        case "textarea":
          v = Md(e, a), S = Md(e, l), d = [];
          break;
        default:
          v = a, S = l, typeof v.onClick != "function" && typeof S.onClick == "function" && Om(e);
          break;
      }
      Oc(t, S);
      var _, C, T = null;
      for (_ in v)
        if (!(S.hasOwnProperty(_) || !v.hasOwnProperty(_) || v[_] == null))
          if (_ === $s) {
            var U = v[_];
            for (C in U)
              U.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else
            _ === Pp || _ === Ws || _ === xm || _ === Lu || _ === b_ || (kr.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
      for (_ in S) {
        var O = S[_], V = v != null ? v[_] : void 0;
        if (!(!S.hasOwnProperty(_) || O === V || O == null && V == null))
          if (_ === $s)
            if (O && Object.freeze(O), V) {
              for (C in V)
                V.hasOwnProperty(C) && (!O || !O.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in O)
                O.hasOwnProperty(C) && V[C] !== O[C] && (T || (T = {}), T[C] = O[C]);
            } else
              T || (d || (d = []), d.push(_, T)), T = O;
          else if (_ === Pp) {
            var I = O ? O[bm] : void 0, G = V ? V[bm] : void 0;
            I != null && G !== I && (d = d || []).push(_, I);
          } else
            _ === Ws ? (typeof O == "string" || typeof O == "number") && (d = d || []).push(_, "" + O) : _ === xm || _ === Lu || (kr.hasOwnProperty(_) ? (O != null && (typeof O != "function" && Dm(_, O), _ === "onScroll" && rn("scroll", e)), !d && V !== O && (d = [])) : (d = d || []).push(_, O));
      }
      return T && (ps(T, S[$s]), (d = d || []).push($s, T)), d;
    }
    function pR(e, t, a, l, s) {
      a === "input" && s.type === "radio" && s.name != null && bd(e, s);
      var d = Mi(a, l), v = Mi(a, s);
      switch (uR(e, t, d, v), a) {
        case "input":
          tu(e, s);
          break;
        case "textarea":
          pv(e, s);
          break;
        case "select":
          zg(e, s);
          break;
      }
    }
    function hR(e) {
      {
        var t = e.toLowerCase();
        return Nc.hasOwnProperty(t) && Nc[t] || null;
      }
    }
    function vR(e, t, a, l, s, d, v) {
      var S, _;
      switch (S = Mi(t, a), Rm(t, a), t) {
        case "dialog":
          rn("cancel", e), rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Fp.length; C++)
            rn(Fp[C], e);
          break;
        case "source":
          rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e);
          break;
        case "details":
          rn("toggle", e);
          break;
        case "input":
          ss(e, a), rn("invalid", e);
          break;
        case "option":
          xc(e, a);
          break;
        case "select":
          fv(e, a), rn("invalid", e);
          break;
        case "textarea":
          dv(e, a), rn("invalid", e);
          break;
      }
      Oc(t, a);
      {
        _ = /* @__PURE__ */ new Set();
        for (var T = e.attributes, U = 0; U < T.length; U++) {
          var O = T[U].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              _.add(T[U].name);
          }
        }
      }
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var G = a[I];
          if (I === Ws)
            typeof G == "string" ? e.textContent !== G && (a[Lu] !== !0 && Mm(e.textContent, G, d, v), V = [Ws, G]) : typeof G == "number" && e.textContent !== "" + G && (a[Lu] !== !0 && Mm(e.textContent, G, d, v), V = [Ws, "" + G]);
          else if (kr.hasOwnProperty(I))
            G != null && (typeof G != "function" && Dm(I, G), I === "onScroll" && rn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var _e = void 0, Ae = S && Vn ? null : Xr(I);
            if (a[Lu] !== !0) {
              if (!(I === xm || I === Lu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === Pp) {
                  var Ne = e.innerHTML, vt = G ? G[bm] : void 0;
                  if (vt != null) {
                    var ft = k_(e, vt);
                    ft !== Ne && Vp(I, Ne, ft);
                  }
                } else if (I === $s) {
                  if (_.delete(I), D_) {
                    var j = Ig(G);
                    _e = e.getAttribute("style"), j !== _e && Vp(I, _e, j);
                  }
                } else if (S && !Vn)
                  _.delete(I.toLowerCase()), _e = Ko(e, I, G), G !== _e && Vp(I, _e, G);
                else if (!fn(I, Ae, S) && !Yt(I, G, Ae, S)) {
                  var Q = !1;
                  if (Ae !== null)
                    _.delete(Ae.attributeName), _e = Ql(e, I, G, Ae);
                  else {
                    var F = l;
                    if (F === Di && (F = Rc(t)), F === Di)
                      _.delete(I.toLowerCase());
                    else {
                      var re = hR(I);
                      re !== null && re !== I && (Q = !0, _.delete(re)), _.delete(I);
                    }
                    _e = Ko(e, I, G);
                  }
                  var we = Vn;
                  !we && G !== _e && !Q && Vp(I, _e, G);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      _.size > 0 && a[Lu] !== !0 && R_(_), t) {
        case "input":
          Kl(e), cs(e, a, !0);
          break;
        case "textarea":
          Kl(e), hv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Om(e);
          break;
      }
      return V;
    }
    function mR(e, t, a) {
      var l = e.nodeValue !== t;
      return l;
    }
    function T0(e, t) {
      {
        if (Ma)
          return;
        Ma = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function x0(e, t) {
      {
        if (Ma)
          return;
        Ma = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function b0(e, t, a) {
      {
        if (Ma)
          return;
        Ma = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function R0(e, t) {
      {
        if (t === "" || Ma)
          return;
        Ma = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function yR(e, t, a) {
      switch (t) {
        case "input":
          ov(e, a);
          return;
        case "textarea":
          Od(e, a);
          return;
        case "select":
          Ag(e, a);
          return;
      }
    }
    var Ip = function() {
    }, Bp = function() {
    };
    {
      var gR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], O_ = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], SR = O_.concat(["button"]), ER = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Bp = function(e, t) {
        var a = st({}, e || N_), l = {
          tag: t
        };
        return O_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), SR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), gR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var _R = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ER.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, wR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, L_ = {};
      Ip = function(e, t, a) {
        a = a || N_;
        var l = a.current, s = l && l.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = _R(e, s) ? null : l, v = d ? null : wR(e, a), S = d || v;
        if (S) {
          var _ = S.tag, C = !!d + "|" + e + "|" + _;
          if (!L_[C]) {
            L_[C] = !0;
            var T = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", d) {
              var O = "";
              _ === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, _, U, O);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, _);
          }
        }
      };
    }
    var Nm = "suppressHydrationWarning", Lm = "$", Um = "/$", Wp = "$?", $p = "$!", CR = "style", D0 = null, k0 = null;
    function TR(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case $a:
        case Xl: {
          t = l === $a ? "#document" : "#fragment";
          var s = e.documentElement;
          a = s ? s.namespaceURI : Ld(null, "");
          break;
        }
        default: {
          var d = l === yn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = Ld(v, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), _ = Bp(null, S);
        return {
          namespace: a,
          ancestorInfo: _
        };
      }
    }
    function xR(e, t, a) {
      {
        var l = e, s = Ld(l.namespace, t), d = Bp(l.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: d
        };
      }
    }
    function gj(e) {
      return e;
    }
    function bR(e) {
      D0 = la(), k0 = Yb();
      var t = null;
      return Hn(!1), t;
    }
    function RR(e) {
      Pb(k0), Hn(D0), D0 = null, k0 = null;
    }
    function DR(e, t, a, l, s) {
      var d;
      {
        var v = l;
        if (Ip(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, _ = Bp(v.ancestorInfo, e);
          Ip(null, S, _);
        }
        d = v.namespace;
      }
      var C = sR(e, t, a, d);
      return qp(s, C), j0(C, t), C;
    }
    function kR(e, t) {
      e.appendChild(t);
    }
    function MR(e, t, a, l, s) {
      switch (fR(e, t, a, l), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function OR(e, t, a, l, s, d) {
      {
        var v = d;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var S = "" + l.children, _ = Bp(v.ancestorInfo, t);
          Ip(null, S, _);
        }
      }
      return dR(e, t, a, l);
    }
    function M0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function NR(e, t, a, l) {
      {
        var s = a;
        Ip(null, e, s.ancestorInfo);
      }
      var d = cR(e, t);
      return qp(l, d), d;
    }
    function LR() {
      var e = window.event;
      return e === void 0 ? Fi : yr(e.type);
    }
    var O0 = typeof setTimeout == "function" ? setTimeout : void 0, UR = typeof clearTimeout == "function" ? clearTimeout : void 0, N0 = -1, U_ = typeof Promise == "function" ? Promise : void 0, zR = typeof queueMicrotask == "function" ? queueMicrotask : typeof U_ < "u" ? function(e) {
      return U_.resolve(null).then(e).catch(AR);
    } : O0;
    function AR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function jR(e, t, a, l) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function FR(e, t, a, l, s, d) {
      pR(e, t, a, l, s), j0(e, s);
    }
    function z_(e) {
      kc(e, "");
    }
    function HR(e, t, a) {
      e.nodeValue = a;
    }
    function YR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Om(a);
    }
    function VR(e, t, a) {
      e.insertBefore(t, a);
    }
    function IR(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function BR(e, t) {
      e.removeChild(t);
    }
    function WR(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function L0(e, t) {
      var a = t, l = 0;
      do {
        var s = a.nextSibling;
        if (e.removeChild(a), s && s.nodeType === yn) {
          var d = s.data;
          if (d === Um)
            if (l === 0) {
              e.removeChild(s), ct(t);
              return;
            } else
              l--;
          else
            (d === Lm || d === Wp || d === $p) && l++;
        }
        a = s;
      } while (a);
      ct(t);
    }
    function $R(e, t) {
      e.nodeType === yn ? L0(e.parentNode, t) : e.nodeType === Nr && L0(e, t), ct(e);
    }
    function GR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function QR(e) {
      e.nodeValue = "";
    }
    function qR(e, t) {
      e = e;
      var a = t[CR], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Mc("display", l);
    }
    function ZR(e, t) {
      e.nodeValue = t;
    }
    function KR(e) {
      e.nodeType === Nr ? e.textContent = "" : e.nodeType === $a && e.documentElement && e.removeChild(e.documentElement);
    }
    function XR(e, t, a) {
      return e.nodeType !== Nr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function JR(e, t) {
      return t === "" || e.nodeType !== ki ? null : e;
    }
    function eD(e) {
      return e.nodeType !== yn ? null : e;
    }
    function A_(e) {
      return e.data === Wp;
    }
    function U0(e) {
      return e.data === $p;
    }
    function tD(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, s;
      return t && (a = t.dgst, l = t.msg, s = t.stck), {
        message: l,
        digest: a,
        stack: s
      };
    }
    function nD(e, t) {
      e._reactRetry = t;
    }
    function zm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Nr || t === ki)
          break;
        if (t === yn) {
          var a = e.data;
          if (a === Lm || a === $p || a === Wp)
            break;
          if (a === Um)
            return null;
        }
      }
      return e;
    }
    function Gp(e) {
      return zm(e.nextSibling);
    }
    function rD(e) {
      return zm(e.firstChild);
    }
    function aD(e) {
      return zm(e.firstChild);
    }
    function iD(e) {
      return zm(e.nextSibling);
    }
    function lD(e, t, a, l, s, d, v) {
      qp(d, e), j0(e, a);
      var S;
      {
        var _ = s;
        S = _.namespace;
      }
      var C = (d.mode & lt) !== He;
      return vR(e, t, a, S, l, C, v);
    }
    function oD(e, t, a, l) {
      return qp(a, e), a.mode & lt, mR(e, t);
    }
    function uD(e, t) {
      qp(t, e);
    }
    function sD(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var l = t.data;
          if (l === Um) {
            if (a === 0)
              return Gp(t);
            a--;
          } else
            (l === Lm || l === $p || l === Wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function j_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var l = t.data;
          if (l === Lm || l === $p || l === Wp) {
            if (a === 0)
              return t;
            a--;
          } else
            l === Um && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function cD(e) {
      ct(e);
    }
    function fD(e) {
      ct(e);
    }
    function dD(e) {
      return e !== "head" && e !== "body";
    }
    function pD(e, t, a, l) {
      var s = !0;
      Mm(t.nodeValue, a, l, s);
    }
    function hD(e, t, a, l, s, d) {
      if (t[Nm] !== !0) {
        var v = !0;
        Mm(l.nodeValue, s, d, v);
      }
    }
    function vD(e, t) {
      t.nodeType === Nr ? T0(e, t) : t.nodeType === yn || x0(e, t);
    }
    function mD(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Nr ? T0(a, t) : t.nodeType === yn || x0(a, t));
      }
    }
    function yD(e, t, a, l, s) {
      (s || t[Nm] !== !0) && (l.nodeType === Nr ? T0(a, l) : l.nodeType === yn || x0(a, l));
    }
    function gD(e, t, a) {
      b0(e, t);
    }
    function SD(e, t) {
      R0(e, t);
    }
    function ED(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && b0(l, t);
      }
    }
    function _D(e, t) {
      {
        var a = e.parentNode;
        a !== null && R0(a, t);
      }
    }
    function wD(e, t, a, l, s, d) {
      (d || t[Nm] !== !0) && b0(a, l);
    }
    function CD(e, t, a, l, s) {
      (s || t[Nm] !== !0) && R0(a, l);
    }
    function TD(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xD(e) {
      Hp(e);
    }
    var jf = Math.random().toString(36).slice(2), Ff = "__reactFiber$" + jf, z0 = "__reactProps$" + jf, Qp = "__reactContainer$" + jf, A0 = "__reactEvents$" + jf, bD = "__reactListeners$" + jf, RD = "__reactHandles$" + jf;
    function DD(e) {
      delete e[Ff], delete e[z0], delete e[A0], delete e[bD], delete e[RD];
    }
    function qp(e, t) {
      t[Ff] = e;
    }
    function Am(e, t) {
      t[Qp] = e;
    }
    function F_(e) {
      e[Qp] = null;
    }
    function Zp(e) {
      return !!e[Qp];
    }
    function Gs(e) {
      var t = e[Ff];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Qp] || a[Ff], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var s = j_(e); s !== null; ) {
              var d = s[Ff];
              if (d)
                return d;
              s = j_(s);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Uu(e) {
      var t = e[Ff] || e[Qp];
      return t && (t.tag === $ || t.tag === Y || t.tag === se || t.tag === N) ? t : null;
    }
    function Hf(e) {
      if (e.tag === $ || e.tag === Y)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function jm(e) {
      return e[z0] || null;
    }
    function j0(e, t) {
      e[z0] = t;
    }
    function kD(e) {
      var t = e[A0];
      return t === void 0 && (t = e[A0] = /* @__PURE__ */ new Set()), t;
    }
    var H_ = {}, Y_ = c.ReactDebugCurrentFrame;
    function Fm(e) {
      if (e) {
        var t = e._owner, a = ns(e.type, e._source, t ? t.type : null);
        Y_.setExtraStackFrame(a);
      } else
        Y_.setExtraStackFrame(null);
    }
    function Ii(e, t, a, l, s) {
      {
        var d = Function.call.bind(ar);
        for (var v in e)
          if (d(e, v)) {
            var S = void 0;
            try {
              if (typeof e[v] != "function") {
                var _ = Error((l || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              S = e[v](t, v, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              S = C;
            }
            S && !(S instanceof Error) && (Fm(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, v, typeof S), Fm(null)), S instanceof Error && !(S.message in H_) && (H_[S.message] = !0, Fm(s), g("Failed %s type: %s", a, S.message), Fm(null));
          }
      }
    }
    var F0 = [], Hm;
    Hm = [];
    var Ro = -1;
    function zu(e) {
      return {
        current: e
      };
    }
    function Pr(e, t) {
      if (Ro < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Hm[Ro] && g("Unexpected Fiber popped."), e.current = F0[Ro], F0[Ro] = null, Hm[Ro] = null, Ro--;
    }
    function Vr(e, t, a) {
      Ro++, F0[Ro] = e.current, Hm[Ro] = a, e.current = t;
    }
    var H0;
    H0 = {};
    var Ka = {};
    Object.freeze(Ka);
    var Do = zu(Ka), Nl = zu(!1), Y0 = Ka;
    function Yf(e, t, a) {
      return a && Ll(t) ? Y0 : Do.current;
    }
    function P_(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Pf(e, t) {
      {
        var a = e.type, l = a.contextTypes;
        if (!l)
          return Ka;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in l)
          d[v] = t[v];
        {
          var S = Xe(e) || "Unknown";
          Ii(l, d, "context", S);
        }
        return s && P_(e, t, d), d;
      }
    }
    function Ym() {
      return Nl.current;
    }
    function Ll(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Pm(e) {
      Pr(Nl, e), Pr(Do, e);
    }
    function P0(e) {
      Pr(Nl, e), Pr(Do, e);
    }
    function V_(e, t, a) {
      {
        if (Do.current !== Ka)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Do, t, e), Vr(Nl, a, e);
      }
    }
    function I_(e, t, a) {
      {
        var l = e.stateNode, s = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var d = Xe(e) || "Unknown";
            H0[d] || (H0[d] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = l.getChildContext();
        for (var S in v)
          if (!(S in s))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var _ = Xe(e) || "Unknown";
          Ii(s, v, "child context", _);
        }
        return st({}, a, v);
      }
    }
    function Vm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ka;
        return Y0 = Do.current, Vr(Do, a, e), Vr(Nl, Nl.current, e), !0;
      }
    }
    function B_(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var s = I_(e, t, Y0);
          l.__reactInternalMemoizedMergedChildContext = s, Pr(Nl, e), Pr(Do, e), Vr(Do, s, e), Vr(Nl, a, e);
        } else
          Pr(Nl, e), Vr(Nl, a, e);
      }
    }
    function MD(e) {
      {
        if (!Jd(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case N:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (Ll(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Au = 0, Im = 1, ko = null, V0 = !1, I0 = !1;
    function W_(e) {
      ko === null ? ko = [e] : ko.push(e);
    }
    function OD(e) {
      V0 = !0, W_(e);
    }
    function $_() {
      V0 && ju();
    }
    function ju() {
      if (!I0 && ko !== null) {
        I0 = !0;
        var e = 0, t = ba();
        try {
          var a = !0, l = ko;
          for (bn(sr); e < l.length; e++) {
            var s = l[e];
            do
              s = s(a);
            while (s !== null);
          }
          ko = null, V0 = !1;
        } catch (d) {
          throw ko !== null && (ko = ko.slice(e + 1)), Pc(Ic, ju), d;
        } finally {
          bn(t), I0 = !1;
        }
      }
      return null;
    }
    var Vf = [], If = 0, Bm = null, Wm = 0, hi = [], vi = 0, Qs = null, Mo = 1, Oo = "";
    function ND(e) {
      return Zs(), (e.flags & Zd) !== ze;
    }
    function LD(e) {
      return Zs(), Wm;
    }
    function UD() {
      var e = Oo, t = Mo, a = t & ~zD(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Zs(), Vf[If++] = Wm, Vf[If++] = Bm, Bm = e, Wm = t;
    }
    function G_(e, t, a) {
      Zs(), hi[vi++] = Mo, hi[vi++] = Oo, hi[vi++] = Qs, Qs = e;
      var l = Mo, s = Oo, d = $m(l) - 1, v = l & ~(1 << d), S = a + 1, _ = $m(t) + d;
      if (_ > 30) {
        var C = d - d % 5, T = (1 << C) - 1, U = (v & T).toString(32), O = v >> C, V = d - C, I = $m(t) + V, G = S << V, _e = G | O, Ae = U + s;
        Mo = 1 << I | _e, Oo = Ae;
      } else {
        var Ne = S << d, vt = Ne | v, ft = s;
        Mo = 1 << _ | vt, Oo = ft;
      }
    }
    function B0(e) {
      Zs();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        qs(e, a), G_(e, a, l);
      }
    }
    function $m(e) {
      return 32 - qc(e);
    }
    function zD(e) {
      return 1 << $m(e) - 1;
    }
    function W0(e) {
      for (; e === Bm; )
        Bm = Vf[--If], Vf[If] = null, Wm = Vf[--If], Vf[If] = null;
      for (; e === Qs; )
        Qs = hi[--vi], hi[vi] = null, Oo = hi[--vi], hi[vi] = null, Mo = hi[--vi], hi[vi] = null;
    }
    function AD() {
      return Zs(), Qs !== null ? {
        id: Mo,
        overflow: Oo
      } : null;
    }
    function jD(e, t) {
      Zs(), hi[vi++] = Mo, hi[vi++] = Oo, hi[vi++] = Qs, Mo = t.id, Oo = t.overflow, Qs = e;
    }
    function Zs() {
      Sr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var gr = null, mi = null, Bi = !1, Ks = !1, Fu = null;
    function FD() {
      Bi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Q_() {
      Ks = !0;
    }
    function HD() {
      return Ks;
    }
    function YD(e) {
      var t = e.stateNode.containerInfo;
      return mi = aD(t), gr = e, Bi = !0, Fu = null, Ks = !1, !0;
    }
    function PD(e, t, a) {
      return mi = iD(t), gr = e, Bi = !0, Fu = null, Ks = !1, a !== null && jD(e, a), !0;
    }
    function q_(e, t) {
      switch (e.tag) {
        case N: {
          vD(e.stateNode.containerInfo, t);
          break;
        }
        case $: {
          var a = (e.mode & lt) !== He;
          yD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case se: {
          var l = e.memoizedState;
          l.dehydrated !== null && mD(l.dehydrated, t);
          break;
        }
      }
    }
    function Z_(e, t) {
      q_(e, t);
      var a = BO();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Tt) : l.push(a);
    }
    function $0(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case N: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case $:
                var l = t.type;
                t.pendingProps, gD(a, l);
                break;
              case Y:
                var s = t.pendingProps;
                SD(a, s);
                break;
            }
            break;
          }
          case $: {
            var d = e.type, v = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case $: {
                var _ = t.type, C = t.pendingProps, T = (e.mode & lt) !== He;
                wD(
                  d,
                  v,
                  S,
                  _,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case Y: {
                var U = t.pendingProps, O = (e.mode & lt) !== He;
                CD(
                  d,
                  v,
                  S,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case se: {
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null)
              switch (t.tag) {
                case $:
                  var G = t.type;
                  t.pendingProps, ED(I, G);
                  break;
                case Y:
                  var _e = t.pendingProps;
                  _D(I, _e);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function K_(e, t) {
      t.flags = t.flags & ~_a | It, $0(e, t);
    }
    function X_(e, t) {
      switch (e.tag) {
        case $: {
          var a = e.type;
          e.pendingProps;
          var l = XR(t, a);
          return l !== null ? (e.stateNode = l, gr = e, mi = rD(l), !0) : !1;
        }
        case Y: {
          var s = e.pendingProps, d = JR(t, s);
          return d !== null ? (e.stateNode = d, gr = e, mi = null, !0) : !1;
        }
        case se: {
          var v = eD(t);
          if (v !== null) {
            var S = {
              dehydrated: v,
              treeContext: AD(),
              retryLane: Hr
            };
            e.memoizedState = S;
            var _ = WO(v);
            return _.return = e, e.child = _, gr = e, mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function G0(e) {
      return (e.mode & lt) !== He && (e.flags & $e) === ze;
    }
    function Q0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function q0(e) {
      if (Bi) {
        var t = mi;
        if (!t) {
          G0(e) && ($0(gr, e), Q0()), K_(gr, e), Bi = !1, gr = e;
          return;
        }
        var a = t;
        if (!X_(e, t)) {
          G0(e) && ($0(gr, e), Q0()), t = Gp(a);
          var l = gr;
          if (!t || !X_(e, t)) {
            K_(gr, e), Bi = !1, gr = e;
            return;
          }
          Z_(l, a);
        }
      }
    }
    function VD(e, t, a) {
      var l = e.stateNode, s = !Ks, d = lD(l, e.type, e.memoizedProps, t, a, e, s);
      return e.updateQueue = d, d !== null;
    }
    function ID(e) {
      var t = e.stateNode, a = e.memoizedProps, l = oD(t, a, e);
      if (l) {
        var s = gr;
        if (s !== null)
          switch (s.tag) {
            case N: {
              var d = s.stateNode.containerInfo, v = (s.mode & lt) !== He;
              pD(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case $: {
              var S = s.type, _ = s.memoizedProps, C = s.stateNode, T = (s.mode & lt) !== He;
              hD(
                S,
                _,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return l;
    }
    function BD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      uD(a, e);
    }
    function WD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return sD(a);
    }
    function J_(e) {
      for (var t = e.return; t !== null && t.tag !== $ && t.tag !== N && t.tag !== se; )
        t = t.return;
      gr = t;
    }
    function Gm(e) {
      if (e !== gr)
        return !1;
      if (!Bi)
        return J_(e), Bi = !0, !1;
      if (e.tag !== N && (e.tag !== $ || dD(e.type) && !M0(e.type, e.memoizedProps))) {
        var t = mi;
        if (t)
          if (G0(e))
            ew(e), Q0();
          else
            for (; t; )
              Z_(e, t), t = Gp(t);
      }
      return J_(e), e.tag === se ? mi = WD(e) : mi = gr ? Gp(e.stateNode) : null, !0;
    }
    function $D() {
      return Bi && mi !== null;
    }
    function ew(e) {
      for (var t = mi; t; )
        q_(e, t), t = Gp(t);
    }
    function Bf() {
      gr = null, mi = null, Bi = !1, Ks = !1;
    }
    function tw() {
      Fu !== null && (qC(Fu), Fu = null);
    }
    function Sr() {
      return Bi;
    }
    function Z0(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    var GD = c.ReactCurrentBatchConfig, QD = null;
    function qD() {
      return GD.transition;
    }
    var Wi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var ZD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Kp = [], Xp = [], Jp = [], eh = [], th = [], nh = [], Js = /* @__PURE__ */ new Set();
      Wi.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && eh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && nh.push(e));
      }, Wi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(O) {
          e.add(Xe(O) || "Component"), Js.add(O.type);
        }), Kp = []);
        var t = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          t.add(Xe(O) || "Component"), Js.add(O.type);
        }), Xp = []);
        var a = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(O) {
          a.add(Xe(O) || "Component"), Js.add(O.type);
        }), Jp = []);
        var l = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(O) {
          l.add(Xe(O) || "Component"), Js.add(O.type);
        }), eh = []);
        var s = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(O) {
          s.add(Xe(O) || "Component"), Js.add(O.type);
        }), th = []);
        var d = /* @__PURE__ */ new Set();
        if (nh.length > 0 && (nh.forEach(function(O) {
          d.add(Xe(O) || "Component"), Js.add(O.type);
        }), nh = []), t.size > 0) {
          var v = Xs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var S = Xs(l);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var _ = Xs(d);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, _);
        }
        if (e.size > 0) {
          var C = Xs(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var T = Xs(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (s.size > 0) {
          var U = Xs(s);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var Qm = /* @__PURE__ */ new Map(), nw = /* @__PURE__ */ new Set();
      Wi.recordLegacyContextWarning = function(e, t) {
        var a = ZD(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!nw.has(e.type)) {
          var l = Qm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Qm.set(a, l)), l.push(e));
        }
      }, Wi.flushLegacyContextWarning = function() {
        Qm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              l.add(Xe(d) || "Component"), nw.add(d.type);
            });
            var s = Xs(l);
            try {
              Lt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              Cn();
            }
          }
        });
      }, Wi.discardPendingWarnings = function() {
        Kp = [], Xp = [], Jp = [], eh = [], th = [], nh = [], Qm = /* @__PURE__ */ new Map();
      };
    }
    function $i(e, t) {
      if (e && e.defaultProps) {
        var a = st({}, t), l = e.defaultProps;
        for (var s in l)
          a[s] === void 0 && (a[s] = l[s]);
        return a;
      }
      return t;
    }
    var K0 = zu(null), X0;
    X0 = {};
    var qm = null, Wf = null, J0 = null, Zm = !1;
    function Km() {
      qm = null, Wf = null, J0 = null, Zm = !1;
    }
    function rw() {
      Zm = !0;
    }
    function aw() {
      Zm = !1;
    }
    function iw(e, t, a) {
      Vr(K0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== X0 && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = X0;
    }
    function eS(e, t) {
      var a = K0.current;
      Pr(K0, t), e._currentValue = a;
    }
    function tS(e, t, a) {
      for (var l = e; l !== null; ) {
        var s = l.alternate;
        if (mo(l.childLanes, t) ? s !== null && !mo(s.childLanes, t) && (s.childLanes = et(s.childLanes, t)) : (l.childLanes = et(l.childLanes, t), s !== null && (s.childLanes = et(s.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function KD(e, t, a) {
      XD(e, t, a);
    }
    function XD(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var s = void 0, d = l.dependencies;
        if (d !== null) {
          s = l.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === R) {
                var S = xn(a), _ = No(Ht, S);
                _.tag = Jm;
                var C = l.updateQueue;
                if (C !== null) {
                  var T = C.shared, U = T.pending;
                  U === null ? _.next = _ : (_.next = U.next, U.next = _), T.pending = _;
                }
              }
              l.lanes = et(l.lanes, a);
              var O = l.alternate;
              O !== null && (O.lanes = et(O.lanes, a)), tS(l.return, a, e), d.lanes = et(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === ae)
          s = l.type === e.type ? null : l.child;
        else if (l.tag === Ke) {
          var V = l.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = et(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = et(I.lanes, a)), tS(V, a, e), s = l.sibling;
        } else
          s = l.child;
        if (s !== null)
          s.return = l;
        else
          for (s = l; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var G = s.sibling;
            if (G !== null) {
              G.return = s.return, s = G;
              break;
            }
            s = s.return;
          }
        l = s;
      }
    }
    function $f(e, t) {
      qm = e, Wf = null, J0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Yr(a.lanes, t) && mh(), a.firstContext = null);
      }
    }
    function Pn(e) {
      Zm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (J0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Wf === null) {
          if (qm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Wf = a, qm.dependencies = {
            lanes: q,
            firstContext: a
          };
        } else
          Wf = Wf.next = a;
      }
      return t;
    }
    var ec = null;
    function nS(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function JD() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var l = a.next, s = t.pending;
            if (s !== null) {
              var d = s.next;
              s.next = l, a.next = d;
            }
            t.pending = a;
          }
        }
        ec = null;
      }
    }
    function lw(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, Xm(e, l);
    }
    function ek(e, t, a, l) {
      var s = t.interleaved;
      s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
    }
    function tk(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, Xm(e, l);
    }
    function Oa(e, t) {
      return Xm(e, t);
    }
    var nk = Xm;
    function Xm(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (It | _a)) !== ze && oT(e);
      for (var l = e, s = e.return; s !== null; )
        s.childLanes = et(s.childLanes, t), a = s.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (s.flags & (It | _a)) !== ze && oT(e), l = s, s = s.return;
      if (l.tag === N) {
        var d = l.stateNode;
        return d;
      } else
        return null;
    }
    var ow = 0, uw = 1, Jm = 2, rS = 3, ey = !1, aS, ty;
    aS = !1, ty = null;
    function iS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function sw(e, t) {
      var a = t.updateQueue, l = e.updateQueue;
      if (a === l) {
        var s = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = s;
      }
    }
    function No(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: ow,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Hu(e, t, a) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var s = l.shared;
      if (ty === s && !aS && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), aS = !0), nO()) {
        var d = s.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), s.pending = t, nk(e, a);
      } else
        return tk(e, s, t, a);
    }
    function ny(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var s = l.shared;
        if (dp(a)) {
          var d = s.lanes;
          d = hp(d, e.pendingLanes);
          var v = et(d, a);
          s.lanes = v, Su(e, v);
        }
      }
    }
    function lS(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var s = l.updateQueue;
        if (a === s) {
          var d = null, v = null, S = a.firstBaseUpdate;
          if (S !== null) {
            var _ = S;
            do {
              var C = {
                eventTime: _.eventTime,
                lane: _.lane,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null
              };
              v === null ? d = v = C : (v.next = C, v = C), _ = _.next;
            } while (_ !== null);
            v === null ? d = v = t : (v.next = t, v = t);
          } else
            d = v = t;
          a = {
            baseState: s.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: v,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function rk(e, t, a, l, s, d) {
      switch (a.tag) {
        case uw: {
          var v = a.payload;
          if (typeof v == "function") {
            rw();
            var S = v.call(d, l, s);
            {
              if (e.mode & tn) {
                Tn(!0);
                try {
                  v.call(d, l, s);
                } finally {
                  Tn(!1);
                }
              }
              aw();
            }
            return S;
          }
          return v;
        }
        case rS:
          e.flags = e.flags & ~An | $e;
        case ow: {
          var _ = a.payload, C;
          if (typeof _ == "function") {
            rw(), C = _.call(d, l, s);
            {
              if (e.mode & tn) {
                Tn(!0);
                try {
                  _.call(d, l, s);
                } finally {
                  Tn(!1);
                }
              }
              aw();
            }
          } else
            C = _;
          return C == null ? l : st({}, l, C);
        }
        case Jm:
          return ey = !0, l;
      }
      return l;
    }
    function ry(e, t, a, l) {
      var s = e.updateQueue;
      ey = !1, ty = s.shared;
      var d = s.firstBaseUpdate, v = s.lastBaseUpdate, S = s.shared.pending;
      if (S !== null) {
        s.shared.pending = null;
        var _ = S, C = _.next;
        _.next = null, v === null ? d = C : v.next = C, v = _;
        var T = e.alternate;
        if (T !== null) {
          var U = T.updateQueue, O = U.lastBaseUpdate;
          O !== v && (O === null ? U.firstBaseUpdate = C : O.next = C, U.lastBaseUpdate = _);
        }
      }
      if (d !== null) {
        var V = s.baseState, I = q, G = null, _e = null, Ae = null, Ne = d;
        do {
          var vt = Ne.lane, ft = Ne.eventTime;
          if (mo(l, vt)) {
            if (Ae !== null) {
              var Q = {
                eventTime: ft,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pt,
                tag: Ne.tag,
                payload: Ne.payload,
                callback: Ne.callback,
                next: null
              };
              Ae = Ae.next = Q;
            }
            V = rk(e, s, Ne, V, t, a);
            var F = Ne.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ne.lane !== pt) {
              e.flags |= ui;
              var re = s.effects;
              re === null ? s.effects = [Ne] : re.push(Ne);
            }
          } else {
            var j = {
              eventTime: ft,
              lane: vt,
              tag: Ne.tag,
              payload: Ne.payload,
              callback: Ne.callback,
              next: null
            };
            Ae === null ? (_e = Ae = j, G = V) : Ae = Ae.next = j, I = et(I, vt);
          }
          if (Ne = Ne.next, Ne === null) {
            if (S = s.shared.pending, S === null)
              break;
            var we = S, me = we.next;
            we.next = null, Ne = me, s.lastBaseUpdate = we, s.shared.pending = null;
          }
        } while (!0);
        Ae === null && (G = V), s.baseState = G, s.firstBaseUpdate = _e, s.lastBaseUpdate = Ae;
        var We = s.shared.interleaved;
        if (We !== null) {
          var Ze = We;
          do
            I = et(I, Ze.lane), Ze = Ze.next;
          while (Ze !== We);
        } else
          d === null && (s.shared.lanes = q);
        Dh(I), e.lanes = I, e.memoizedState = V;
      }
      ty = null;
    }
    function ak(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function cw() {
      ey = !1;
    }
    function ay() {
      return ey;
    }
    function fw(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var s = 0; s < l.length; s++) {
          var d = l[s], v = d.callback;
          v !== null && (d.callback = null, ak(v, a));
        }
    }
    var oS = {}, dw = new i.Component().refs, uS, sS, cS, fS, dS, pw, iy, pS, hS, vS;
    {
      uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set();
      var hw = /* @__PURE__ */ new Set();
      iy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          hw.has(a) || (hw.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, pw = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          dS.has(a) || (dS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(oS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(oS);
    }
    function mS(e, t, a, l) {
      var s = e.memoizedState, d = a(l, s);
      {
        if (e.mode & tn) {
          Tn(!0);
          try {
            d = a(l, s);
          } finally {
            Tn(!1);
          }
        }
        pw(t, d);
      }
      var v = d == null ? s : st({}, s, d);
      if (e.memoizedState = v, e.lanes === q) {
        var S = e.updateQueue;
        S.baseState = v;
      }
    }
    var yS = {
      isMounted: ra,
      enqueueSetState: function(e, t, a) {
        var l = Sa(e), s = sa(), d = Gu(l), v = No(s, d);
        v.payload = t, a != null && (iy(a, "setState"), v.callback = a);
        var S = Hu(l, v, d);
        S !== null && (er(S, l, d, s), ny(S, l, d)), Cl(l, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Sa(e), s = sa(), d = Gu(l), v = No(s, d);
        v.tag = uw, v.payload = t, a != null && (iy(a, "replaceState"), v.callback = a);
        var S = Hu(l, v, d);
        S !== null && (er(S, l, d, s), ny(S, l, d)), Cl(l, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Sa(e), l = sa(), s = Gu(a), d = No(l, s);
        d.tag = Jm, t != null && (iy(t, "forceUpdate"), d.callback = t);
        var v = Hu(a, d, s);
        v !== null && (er(v, a, s, l), ny(v, a, s)), up(a, s);
      }
    };
    function vw(e, t, a, l, s, d, v) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var _ = S.shouldComponentUpdate(l, d, v);
        {
          if (e.mode & tn) {
            Tn(!0);
            try {
              _ = S.shouldComponentUpdate(l, d, v);
            } finally {
              Tn(!1);
            }
          }
          _ === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return _;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, l) || !Le(s, d) : !0;
    }
    function ik(e, t, a) {
      var l = e.stateNode;
      {
        var s = jt(t) || "Component", d = l.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), l.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), l.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), l.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !hS.has(t) && (hS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof l.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof l.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof l.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof l.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var v = l.props !== a;
        l.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), l.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof l.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof l.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var S = l.state;
        S && (typeof S != "object" || Un(S)) && g("%s.state: must be set to an object or null", s), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function mw(e, t) {
      t.updater = yS, e.stateNode = t, su(t, e), t._reactInternalInstance = oS;
    }
    function yw(e, t, a) {
      var l = !1, s = Ka, d = Ka, v = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ve && v._context === void 0
        );
        if (!S && !vS.has(t)) {
          vS.add(t);
          var _ = "";
          v === void 0 ? _ = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? _ = " However, it is set to a " + typeof v + "." : v.$$typeof === ee ? _ = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? _ = " Did you accidentally pass the Context.Consumer instead?" : _ = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", _);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Pn(v);
      else {
        s = Yf(e, t, !0);
        var C = t.contextTypes;
        l = C != null, d = l ? Pf(e, s) : Ka;
      }
      var T = new t(a, d);
      if (e.mode & tn) {
        Tn(!0);
        try {
          T = new t(a, d);
        } finally {
          Tn(!1);
        }
      }
      var U = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      mw(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var O = jt(t) || "Component";
          sS.has(O) || (sS.add(O), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, T.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, G = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), V !== null || I !== null || G !== null) {
            var _e = jt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(_e) || (fS.add(_e), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, Ae, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return l && P_(e, s, d), T;
    }
    function lk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function gw(e, t, a, l) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== s) {
        {
          var d = Xe(e) || "Component";
          uS.has(d) || (uS.add(d), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        yS.enqueueReplaceState(t, t.state, null);
      }
    }
    function gS(e, t, a, l) {
      ik(e, t, a);
      var s = e.stateNode;
      s.props = a, s.state = e.memoizedState, s.refs = dw, iS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        s.context = Pn(d);
      else {
        var v = Yf(e, t, !0);
        s.context = Pf(e, v);
      }
      {
        if (s.state === a) {
          var S = jt(t) || "Component";
          pS.has(S) || (pS.add(S), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & tn && Wi.recordLegacyContextWarning(e, s), Wi.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (mS(e, t, _, a), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (lk(e, s), ry(e, a, s, l), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var C = Je;
        C |= Ur, (e.mode & Ta) !== He && (C |= zr), e.flags |= C;
      }
    }
    function ok(e, t, a, l) {
      var s = e.stateNode, d = e.memoizedProps;
      s.props = d;
      var v = s.context, S = t.contextType, _ = Ka;
      if (typeof S == "object" && S !== null)
        _ = Pn(S);
      else {
        var C = Yf(e, t, !0);
        _ = Pf(e, C);
      }
      var T = t.getDerivedStateFromProps, U = typeof T == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== a || v !== _) && gw(e, s, a, _), cw();
      var O = e.memoizedState, V = s.state = O;
      if (ry(e, a, s, l), V = e.memoizedState, d === a && O === V && !Ym() && !ay()) {
        if (typeof s.componentDidMount == "function") {
          var I = Je;
          I |= Ur, (e.mode & Ta) !== He && (I |= zr), e.flags |= I;
        }
        return !1;
      }
      typeof T == "function" && (mS(e, t, T, a), V = e.memoizedState);
      var G = ay() || vw(e, t, d, a, O, V, _);
      if (G) {
        if (!U && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var _e = Je;
          _e |= Ur, (e.mode & Ta) !== He && (_e |= zr), e.flags |= _e;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var Ae = Je;
          Ae |= Ur, (e.mode & Ta) !== He && (Ae |= zr), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return s.props = a, s.state = V, s.context = _, G;
    }
    function uk(e, t, a, l, s) {
      var d = t.stateNode;
      sw(e, t);
      var v = t.memoizedProps, S = t.type === t.elementType ? v : $i(t.type, v);
      d.props = S;
      var _ = t.pendingProps, C = d.context, T = a.contextType, U = Ka;
      if (typeof T == "object" && T !== null)
        U = Pn(T);
      else {
        var O = Yf(t, a, !0);
        U = Pf(t, O);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !I && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== _ || C !== U) && gw(t, d, l, U), cw();
      var G = t.memoizedState, _e = d.state = G;
      if (ry(t, l, d, s), _e = t.memoizedState, v === _ && G === _e && !Ym() && !ay() && !je)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Je), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Ea), !1;
      typeof V == "function" && (mS(t, a, V, l), _e = t.memoizedState);
      var Ae = ay() || vw(t, a, S, l, G, _e, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      je;
      return Ae ? (!I && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, _e, U), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, _e, U)), typeof d.componentDidUpdate == "function" && (t.flags |= Je), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Ea)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Je), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Ea), t.memoizedProps = l, t.memoizedState = _e), d.props = l, d.state = _e, d.context = U, Ae;
    }
    var SS, ES, _S, wS, CS, Sw = function(e, t) {
    };
    SS = !1, ES = !1, _S = {}, wS = {}, CS = {}, Sw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        wS[a] || (wS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function rh(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & tn || vr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var s = Xe(e) || "Component";
          _S[s] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), _S[s] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var S = d;
            if (S.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = S.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var _ = v;
          xi(l, "ref");
          var C = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(U) {
            var O = _.refs;
            O === dw && (O = _.refs = {}), U === null ? delete O[C] : O[C] = U;
          };
          return T._stringRef = C, T;
        } else {
          if (typeof l != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + l + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return l;
    }
    function ly(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function oy(e) {
      {
        var t = Xe(e) || "Component";
        if (CS[t])
          return;
        CS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Ew(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function _w(e) {
      function t(j, Q) {
        if (e) {
          var F = j.deletions;
          F === null ? (j.deletions = [Q], j.flags |= Tt) : F.push(Q);
        }
      }
      function a(j, Q) {
        if (!e)
          return null;
        for (var F = Q; F !== null; )
          t(j, F), F = F.sibling;
        return null;
      }
      function l(j, Q) {
        for (var F = /* @__PURE__ */ new Map(), re = Q; re !== null; )
          re.key !== null ? F.set(re.key, re) : F.set(re.index, re), re = re.sibling;
        return F;
      }
      function s(j, Q) {
        var F = uc(j, Q);
        return F.index = 0, F.sibling = null, F;
      }
      function d(j, Q, F) {
        if (j.index = F, !e)
          return j.flags |= Zd, Q;
        var re = j.alternate;
        if (re !== null) {
          var we = re.index;
          return we < Q ? (j.flags |= It, Q) : we;
        } else
          return j.flags |= It, Q;
      }
      function v(j) {
        return e && j.alternate === null && (j.flags |= It), j;
      }
      function S(j, Q, F, re) {
        if (Q === null || Q.tag !== Y) {
          var we = Z1(F, j.mode, re);
          return we.return = j, we;
        } else {
          var me = s(Q, F);
          return me.return = j, me;
        }
      }
      function _(j, Q, F, re) {
        var we = F.type;
        if (we === Va)
          return T(j, Q, F.props.children, re, F.key);
        if (Q !== null && (Q.elementType === we || // Keep this check inline so it only runs on the false path:
        fT(Q, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof we == "object" && we !== null && we.$$typeof === Pe && Ew(we) === Q.type)) {
          var me = s(Q, F.props);
          return me.ref = rh(j, Q, F), me.return = j, me._debugSource = F._source, me._debugOwner = F._owner, me;
        }
        var We = q1(F, j.mode, re);
        return We.ref = rh(j, Q, F), We.return = j, We;
      }
      function C(j, Q, F, re) {
        if (Q === null || Q.tag !== W || Q.stateNode.containerInfo !== F.containerInfo || Q.stateNode.implementation !== F.implementation) {
          var we = K1(F, j.mode, re);
          return we.return = j, we;
        } else {
          var me = s(Q, F.children || []);
          return me.return = j, me;
        }
      }
      function T(j, Q, F, re, we) {
        if (Q === null || Q.tag !== ne) {
          var me = qu(F, j.mode, re, we);
          return me.return = j, me;
        } else {
          var We = s(Q, F);
          return We.return = j, We;
        }
      }
      function U(j, Q, F) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var re = Z1("" + Q, j.mode, F);
          return re.return = j, re;
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case il: {
              var we = q1(Q, j.mode, F);
              return we.ref = rh(j, null, Q), we.return = j, we;
            }
            case Jr: {
              var me = K1(Q, j.mode, F);
              return me.return = j, me;
            }
            case Pe: {
              var We = Q._payload, Ze = Q._init;
              return U(j, Ze(We), F);
            }
          }
          if (Un(Q) || bi(Q)) {
            var zt = qu(Q, j.mode, F, null);
            return zt.return = j, zt;
          }
          ly(j, Q);
        }
        return typeof Q == "function" && oy(j), null;
      }
      function O(j, Q, F, re) {
        var we = Q !== null ? Q.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return we !== null ? null : S(j, Q, "" + F, re);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case il:
              return F.key === we ? _(j, Q, F, re) : null;
            case Jr:
              return F.key === we ? C(j, Q, F, re) : null;
            case Pe: {
              var me = F._payload, We = F._init;
              return O(j, Q, We(me), re);
            }
          }
          if (Un(F) || bi(F))
            return we !== null ? null : T(j, Q, F, re, null);
          ly(j, F);
        }
        return typeof F == "function" && oy(j), null;
      }
      function V(j, Q, F, re, we) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var me = j.get(F) || null;
          return S(Q, me, "" + re, we);
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case il: {
              var We = j.get(re.key === null ? F : re.key) || null;
              return _(Q, We, re, we);
            }
            case Jr: {
              var Ze = j.get(re.key === null ? F : re.key) || null;
              return C(Q, Ze, re, we);
            }
            case Pe:
              var zt = re._payload, Et = re._init;
              return V(j, Q, F, Et(zt), we);
          }
          if (Un(re) || bi(re)) {
            var kn = j.get(F) || null;
            return T(Q, kn, re, we, null);
          }
          ly(Q, re);
        }
        return typeof re == "function" && oy(Q), null;
      }
      function I(j, Q, F) {
        {
          if (typeof j != "object" || j === null)
            return Q;
          switch (j.$$typeof) {
            case il:
            case Jr:
              Sw(j, F);
              var re = j.key;
              if (typeof re != "string")
                break;
              if (Q === null) {
                Q = /* @__PURE__ */ new Set(), Q.add(re);
                break;
              }
              if (!Q.has(re)) {
                Q.add(re);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", re);
              break;
            case Pe:
              var we = j._payload, me = j._init;
              I(me(we), Q, F);
              break;
          }
        }
        return Q;
      }
      function G(j, Q, F, re) {
        for (var we = null, me = 0; me < F.length; me++) {
          var We = F[me];
          we = I(We, we, j);
        }
        for (var Ze = null, zt = null, Et = Q, kn = 0, _t = 0, En = null; Et !== null && _t < F.length; _t++) {
          Et.index > _t ? (En = Et, Et = null) : En = Et.sibling;
          var Br = O(j, Et, F[_t], re);
          if (Br === null) {
            Et === null && (Et = En);
            break;
          }
          e && Et && Br.alternate === null && t(j, Et), kn = d(Br, kn, _t), zt === null ? Ze = Br : zt.sibling = Br, zt = Br, Et = En;
        }
        if (_t === F.length) {
          if (a(j, Et), Sr()) {
            var br = _t;
            qs(j, br);
          }
          return Ze;
        }
        if (Et === null) {
          for (; _t < F.length; _t++) {
            var Ja = U(j, F[_t], re);
            Ja !== null && (kn = d(Ja, kn, _t), zt === null ? Ze = Ja : zt.sibling = Ja, zt = Ja);
          }
          if (Sr()) {
            var ca = _t;
            qs(j, ca);
          }
          return Ze;
        }
        for (var fa = l(j, Et); _t < F.length; _t++) {
          var Wr = V(fa, j, _t, F[_t], re);
          Wr !== null && (e && Wr.alternate !== null && fa.delete(Wr.key === null ? _t : Wr.key), kn = d(Wr, kn, _t), zt === null ? Ze = Wr : zt.sibling = Wr, zt = Wr);
        }
        if (e && fa.forEach(function(sd) {
          return t(j, sd);
        }), Sr()) {
          var Fo = _t;
          qs(j, Fo);
        }
        return Ze;
      }
      function _e(j, Q, F, re) {
        var we = bi(F);
        if (typeof we != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (ES || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ES = !0), F.entries === we && (SS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), SS = !0);
          var me = we.call(F);
          if (me)
            for (var We = null, Ze = me.next(); !Ze.done; Ze = me.next()) {
              var zt = Ze.value;
              We = I(zt, We, j);
            }
        }
        var Et = we.call(F);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kn = null, _t = null, En = Q, Br = 0, br = 0, Ja = null, ca = Et.next(); En !== null && !ca.done; br++, ca = Et.next()) {
          En.index > br ? (Ja = En, En = null) : Ja = En.sibling;
          var fa = O(j, En, ca.value, re);
          if (fa === null) {
            En === null && (En = Ja);
            break;
          }
          e && En && fa.alternate === null && t(j, En), Br = d(fa, Br, br), _t === null ? kn = fa : _t.sibling = fa, _t = fa, En = Ja;
        }
        if (ca.done) {
          if (a(j, En), Sr()) {
            var Wr = br;
            qs(j, Wr);
          }
          return kn;
        }
        if (En === null) {
          for (; !ca.done; br++, ca = Et.next()) {
            var Fo = U(j, ca.value, re);
            Fo !== null && (Br = d(Fo, Br, br), _t === null ? kn = Fo : _t.sibling = Fo, _t = Fo);
          }
          if (Sr()) {
            var sd = br;
            qs(j, sd);
          }
          return kn;
        }
        for (var Lh = l(j, En); !ca.done; br++, ca = Et.next()) {
          var Pl = V(Lh, j, br, ca.value, re);
          Pl !== null && (e && Pl.alternate !== null && Lh.delete(Pl.key === null ? br : Pl.key), Br = d(Pl, Br, br), _t === null ? kn = Pl : _t.sibling = Pl, _t = Pl);
        }
        if (e && Lh.forEach(function(wN) {
          return t(j, wN);
        }), Sr()) {
          var _N = br;
          qs(j, _N);
        }
        return kn;
      }
      function Ae(j, Q, F, re) {
        if (Q !== null && Q.tag === Y) {
          a(j, Q.sibling);
          var we = s(Q, F);
          return we.return = j, we;
        }
        a(j, Q);
        var me = Z1(F, j.mode, re);
        return me.return = j, me;
      }
      function Ne(j, Q, F, re) {
        for (var we = F.key, me = Q; me !== null; ) {
          if (me.key === we) {
            var We = F.type;
            if (We === Va) {
              if (me.tag === ne) {
                a(j, me.sibling);
                var Ze = s(me, F.props.children);
                return Ze.return = j, Ze._debugSource = F._source, Ze._debugOwner = F._owner, Ze;
              }
            } else if (me.elementType === We || // Keep this check inline so it only runs on the false path:
            fT(me, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof We == "object" && We !== null && We.$$typeof === Pe && Ew(We) === me.type) {
              a(j, me.sibling);
              var zt = s(me, F.props);
              return zt.ref = rh(j, me, F), zt.return = j, zt._debugSource = F._source, zt._debugOwner = F._owner, zt;
            }
            a(j, me);
            break;
          } else
            t(j, me);
          me = me.sibling;
        }
        if (F.type === Va) {
          var Et = qu(F.props.children, j.mode, re, F.key);
          return Et.return = j, Et;
        } else {
          var kn = q1(F, j.mode, re);
          return kn.ref = rh(j, Q, F), kn.return = j, kn;
        }
      }
      function vt(j, Q, F, re) {
        for (var we = F.key, me = Q; me !== null; ) {
          if (me.key === we)
            if (me.tag === W && me.stateNode.containerInfo === F.containerInfo && me.stateNode.implementation === F.implementation) {
              a(j, me.sibling);
              var We = s(me, F.children || []);
              return We.return = j, We;
            } else {
              a(j, me);
              break;
            }
          else
            t(j, me);
          me = me.sibling;
        }
        var Ze = K1(F, j.mode, re);
        return Ze.return = j, Ze;
      }
      function ft(j, Q, F, re) {
        var we = typeof F == "object" && F !== null && F.type === Va && F.key === null;
        if (we && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case il:
              return v(Ne(j, Q, F, re));
            case Jr:
              return v(vt(j, Q, F, re));
            case Pe:
              var me = F._payload, We = F._init;
              return ft(j, Q, We(me), re);
          }
          if (Un(F))
            return G(j, Q, F, re);
          if (bi(F))
            return _e(j, Q, F, re);
          ly(j, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? v(Ae(j, Q, "" + F, re)) : (typeof F == "function" && oy(j), a(j, Q));
      }
      return ft;
    }
    var Gf = _w(!0), ww = _w(!1);
    function sk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = uc(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = uc(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function ck(e, t) {
      for (var a = e.child; a !== null; )
        HO(a, t), a = a.sibling;
    }
    var ah = {}, Yu = zu(ah), ih = zu(ah), uy = zu(ah);
    function sy(e) {
      if (e === ah)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Cw() {
      var e = sy(uy.current);
      return e;
    }
    function TS(e, t) {
      Vr(uy, t, e), Vr(ih, e, e), Vr(Yu, ah, e);
      var a = TR(t);
      Pr(Yu, e), Vr(Yu, a, e);
    }
    function Qf(e) {
      Pr(Yu, e), Pr(ih, e), Pr(uy, e);
    }
    function xS() {
      var e = sy(Yu.current);
      return e;
    }
    function Tw(e) {
      sy(uy.current);
      var t = sy(Yu.current), a = xR(t, e.type);
      t !== a && (Vr(ih, e, e), Vr(Yu, a, e));
    }
    function bS(e) {
      ih.current === e && (Pr(Yu, e), Pr(ih, e));
    }
    var fk = 0, xw = 1, bw = 1, lh = 2, Gi = zu(fk);
    function RS(e, t) {
      return (e & t) !== 0;
    }
    function qf(e) {
      return e & xw;
    }
    function DS(e, t) {
      return e & xw | t;
    }
    function dk(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      Vr(Gi, t, e);
    }
    function Zf(e) {
      Pr(Gi, e);
    }
    function pk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function cy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === se) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || A_(l) || U0(l))
              return t;
          }
        } else if (t.tag === ut && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & $e) !== ze;
          if (s)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Na = (
      /*   */
      0
    ), Gn = (
      /* */
      1
    ), Ul = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), Er = (
      /*   */
      8
    ), kS = [];
    function MS() {
      for (var e = 0; e < kS.length; e++) {
        var t = kS[e];
        t._workInProgressVersionPrimary = null;
      }
      kS.length = 0;
    }
    function hk(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var ge = c.ReactCurrentDispatcher, oh = c.ReactCurrentBatchConfig, OS, Kf;
    OS = /* @__PURE__ */ new Set();
    var tc = q, Ut = null, qn = null, Zn = null, fy = !1, uh = !1, sh = 0, vk = 0, mk = 25, Z = null, yi = null, Vu = -1, NS = !1;
    function bt() {
      {
        var e = Z;
        yi === null ? yi = [e] : yi.push(e);
      }
    }
    function pe() {
      {
        var e = Z;
        yi !== null && (Vu++, yi[Vu] !== e && yk(e));
      }
    }
    function Xf(e) {
      e != null && !Un(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Z, typeof e);
    }
    function yk(e) {
      {
        var t = Xe(Ut);
        if (!OS.has(t) && (OS.add(t), yi !== null)) {
          for (var a = "", l = 30, s = 0; s <= Vu; s++) {
            for (var d = yi[s], v = s === Vu ? e : d, S = s + 1 + ". " + d; S.length < l; )
              S += " ";
            S += v + `
`, a += S;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ir() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function LS(e, t) {
      if (NS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Z), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Z, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Re(e[a], t[a]))
          return !1;
      return !0;
    }
    function Jf(e, t, a, l, s, d) {
      tc = d, Ut = t, yi = e !== null ? e._debugHookTypes : null, Vu = -1, NS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? ge.current = Qw : yi !== null ? ge.current = Gw : ge.current = $w;
      var v = a(l, s);
      if (uh) {
        var S = 0;
        do {
          if (uh = !1, sh = 0, S >= mk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, NS = !1, qn = null, Zn = null, t.updateQueue = null, Vu = -1, ge.current = qw, v = a(l, s);
        } while (uh);
      }
      ge.current = Ty, t._debugHookTypes = yi;
      var _ = qn !== null && qn.next !== null;
      if (tc = q, Ut = null, qn = null, Zn = null, Z = null, yi = null, Vu = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== He && g("Internal React error: Expected static flag was missing. Please notify the React team."), fy = !1, _)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function ed() {
      var e = sh !== 0;
      return sh = 0, e;
    }
    function Rw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== He ? t.flags &= ~(io | zr | Zt | Je) : t.flags &= ~(Zt | Je), e.lanes = gu(e.lanes, a);
    }
    function Dw() {
      if (ge.current = Ty, fy) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        fy = !1;
      }
      tc = q, Ut = null, qn = null, Zn = null, yi = null, Vu = -1, Z = null, Pw = !1, uh = !1, sh = 0;
    }
    function zl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Zn === null ? Ut.memoizedState = Zn = e : Zn = Zn.next = e, Zn;
    }
    function gi() {
      var e;
      if (qn === null) {
        var t = Ut.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = qn.next;
      var a;
      if (Zn === null ? a = Ut.memoizedState : a = Zn.next, a !== null)
        Zn = a, a = Zn.next, qn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        qn = e;
        var l = {
          memoizedState: qn.memoizedState,
          baseState: qn.baseState,
          baseQueue: qn.baseQueue,
          queue: qn.queue,
          next: null
        };
        Zn === null ? Ut.memoizedState = Zn = l : Zn = Zn.next = l;
      }
      return Zn;
    }
    function kw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function US(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function zS(e, t, a) {
      var l = zl(), s;
      a !== void 0 ? s = a(t) : s = t, l.memoizedState = l.baseState = s;
      var d = {
        pending: null,
        interleaved: null,
        lanes: q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      };
      l.queue = d;
      var v = d.dispatch = _k.bind(null, Ut, d);
      return [l.memoizedState, v];
    }
    function AS(e, t, a) {
      var l = gi(), s = l.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var d = qn, v = d.baseQueue, S = s.pending;
      if (S !== null) {
        if (v !== null) {
          var _ = v.next, C = S.next;
          v.next = C, S.next = _;
        }
        d.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = S, s.pending = null;
      }
      if (v !== null) {
        var T = v.next, U = d.baseState, O = null, V = null, I = null, G = T;
        do {
          var _e = G.lane;
          if (mo(tc, _e)) {
            if (I !== null) {
              var Ne = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pt,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null
              };
              I = I.next = Ne;
            }
            if (G.hasEagerState)
              U = G.eagerState;
            else {
              var vt = G.action;
              U = e(U, vt);
            }
          } else {
            var Ae = {
              lane: _e,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            };
            I === null ? (V = I = Ae, O = U) : I = I.next = Ae, Ut.lanes = et(Ut.lanes, _e), Dh(_e);
          }
          G = G.next;
        } while (G !== null && G !== T);
        I === null ? O = U : I.next = V, Re(U, l.memoizedState) || mh(), l.memoizedState = U, l.baseState = O, l.baseQueue = I, s.lastRenderedState = U;
      }
      var ft = s.interleaved;
      if (ft !== null) {
        var j = ft;
        do {
          var Q = j.lane;
          Ut.lanes = et(Ut.lanes, Q), Dh(Q), j = j.next;
        } while (j !== ft);
      } else
        v === null && (s.lanes = q);
      var F = s.dispatch;
      return [l.memoizedState, F];
    }
    function jS(e, t, a) {
      var l = gi(), s = l.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var d = s.dispatch, v = s.pending, S = l.memoizedState;
      if (v !== null) {
        s.pending = null;
        var _ = v.next, C = _;
        do {
          var T = C.action;
          S = e(S, T), C = C.next;
        } while (C !== _);
        Re(S, l.memoizedState) || mh(), l.memoizedState = S, l.baseQueue === null && (l.baseState = S), s.lastRenderedState = S;
      }
      return [S, d];
    }
    function Sj(e, t, a) {
    }
    function Ej(e, t, a) {
    }
    function FS(e, t, a) {
      var l = Ut, s = zl(), d, v = Sr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Kf || d !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (d = t(), !Kf) {
          var S = t();
          Re(d, S) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
        }
        var _ = Vy();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(_, tc) || Mw(l, t, d);
      }
      s.memoizedState = d;
      var C = {
        value: d,
        getSnapshot: t
      };
      return s.queue = C, my(Nw.bind(null, l, C, e), [e]), l.flags |= Zt, ch(Gn | Er, Ow.bind(null, l, C, d, t), void 0, null), d;
    }
    function dy(e, t, a) {
      var l = Ut, s = gi(), d = t();
      if (!Kf) {
        var v = t();
        Re(d, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var S = s.memoizedState, _ = !Re(S, d);
      _ && (s.memoizedState = d, mh());
      var C = s.queue;
      if (dh(Nw.bind(null, l, C, e), [e]), C.getSnapshot !== t || _ || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zn !== null && Zn.memoizedState.tag & Gn) {
        l.flags |= Zt, ch(Gn | Er, Ow.bind(null, l, C, d, t), void 0, null);
        var T = Vy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(T, tc) || Mw(l, t, d);
      }
      return d;
    }
    function Mw(e, t, a) {
      e.flags |= Cs;
      var l = {
        getSnapshot: t,
        value: a
      }, s = Ut.updateQueue;
      if (s === null)
        s = kw(), Ut.updateQueue = s, s.stores = [l];
      else {
        var d = s.stores;
        d === null ? s.stores = [l] : d.push(l);
      }
    }
    function Ow(e, t, a, l) {
      t.value = a, t.getSnapshot = l, Lw(t) && Uw(e);
    }
    function Nw(e, t, a) {
      var l = function() {
        Lw(t) && Uw(e);
      };
      return a(l);
    }
    function Lw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !Re(a, l);
      } catch {
        return !0;
      }
    }
    function Uw(e) {
      var t = Oa(e, Be);
      t !== null && er(t, e, Be, Ht);
    }
    function py(e) {
      var t = zl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: q,
        dispatch: null,
        lastRenderedReducer: US,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = wk.bind(null, Ut, a);
      return [t.memoizedState, l];
    }
    function HS(e) {
      return AS(US);
    }
    function YS(e) {
      return jS(US);
    }
    function ch(e, t, a, l) {
      var s = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, d = Ut.updateQueue;
      if (d === null)
        d = kw(), Ut.updateQueue = d, d.lastEffect = s.next = s;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = s.next = s;
        else {
          var S = v.next;
          v.next = s, s.next = S, d.lastEffect = s;
        }
      }
      return s;
    }
    function PS(e) {
      var t = zl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function hy(e) {
      var t = gi();
      return t.memoizedState;
    }
    function fh(e, t, a, l) {
      var s = zl(), d = l === void 0 ? null : l;
      Ut.flags |= e, s.memoizedState = ch(Gn | t, a, void 0, d);
    }
    function vy(e, t, a, l) {
      var s = gi(), d = l === void 0 ? null : l, v = void 0;
      if (qn !== null) {
        var S = qn.memoizedState;
        if (v = S.destroy, d !== null) {
          var _ = S.deps;
          if (LS(d, _)) {
            s.memoizedState = ch(t, a, v, d);
            return;
          }
        }
      }
      Ut.flags |= e, s.memoizedState = ch(Gn | t, a, v, d);
    }
    function my(e, t) {
      return (Ut.mode & Ta) !== He ? fh(io | Zt | yl, Er, e, t) : fh(Zt | yl, Er, e, t);
    }
    function dh(e, t) {
      return vy(Zt, Er, e, t);
    }
    function VS(e, t) {
      return fh(Je, Ul, e, t);
    }
    function yy(e, t) {
      return vy(Je, Ul, e, t);
    }
    function IS(e, t) {
      var a = Je;
      return a |= Ur, (Ut.mode & Ta) !== He && (a |= zr), fh(a, Qn, e, t);
    }
    function gy(e, t) {
      return vy(Je, Qn, e, t);
    }
    function zw(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var d = e();
        return s.current = d, function() {
          s.current = null;
        };
      }
    }
    function BS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, s = Je;
      return s |= Ur, (Ut.mode & Ta) !== He && (s |= zr), fh(s, Qn, zw.bind(null, t, e), l);
    }
    function Sy(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return vy(Je, Qn, zw.bind(null, t, e), l);
    }
    function gk(e, t) {
    }
    var Ey = gk;
    function WS(e, t) {
      var a = zl(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function _y(e, t) {
      var a = gi(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var d = s[1];
        if (LS(l, d))
          return s[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function $S(e, t) {
      var a = zl(), l = t === void 0 ? null : t, s = e();
      return a.memoizedState = [s, l], s;
    }
    function wy(e, t) {
      var a = gi(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var d = s[1];
        if (LS(l, d))
          return s[0];
      }
      var v = e();
      return a.memoizedState = [v, l], v;
    }
    function GS(e) {
      var t = zl();
      return t.memoizedState = e, e;
    }
    function Aw(e) {
      var t = gi(), a = qn, l = a.memoizedState;
      return Fw(t, l, e);
    }
    function jw(e) {
      var t = gi();
      if (qn === null)
        return t.memoizedState = e, e;
      var a = qn.memoizedState;
      return Fw(t, a, e);
    }
    function Fw(e, t, a) {
      var l = !Jg(tc);
      if (l) {
        if (!Re(a, t)) {
          var s = pp();
          Ut.lanes = et(Ut.lanes, s), Dh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, mh()), e.memoizedState = a, a;
    }
    function Sk(e, t, a) {
      var l = ba();
      bn(cr(l, $n)), e(!0);
      var s = oh.transition;
      oh.transition = {};
      var d = oh.transition;
      oh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bn(l), oh.transition = s, s === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function QS() {
      var e = py(!1), t = e[0], a = e[1], l = Sk.bind(null, a), s = zl();
      return s.memoizedState = l, [t, l];
    }
    function Hw() {
      var e = HS(), t = e[0], a = gi(), l = a.memoizedState;
      return [t, l];
    }
    function Yw() {
      var e = YS(), t = e[0], a = gi(), l = a.memoizedState;
      return [t, l];
    }
    var Pw = !1;
    function Ek() {
      return Pw;
    }
    function qS() {
      var e = zl(), t = Vy(), a = t.identifierPrefix, l;
      if (Sr()) {
        var s = UD();
        l = ":" + a + "R" + s;
        var d = sh++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = vk++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function Cy() {
      var e = gi(), t = e.memoizedState;
      return t;
    }
    function _k(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gu(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Vw(e))
        Iw(t, s);
      else {
        var d = lw(e, t, s, l);
        if (d !== null) {
          var v = sa();
          er(d, e, l, v), Bw(d, t, l);
        }
      }
      Ww(e, l);
    }
    function wk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gu(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Vw(e))
        Iw(t, s);
      else {
        var d = e.alternate;
        if (e.lanes === q && (d === null || d.lanes === q)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var S;
            S = ge.current, ge.current = Qi;
            try {
              var _ = t.lastRenderedState, C = v(_, a);
              if (s.hasEagerState = !0, s.eagerState = C, Re(C, _)) {
                ek(e, t, s, l);
                return;
              }
            } catch {
            } finally {
              ge.current = S;
            }
          }
        }
        var T = lw(e, t, s, l);
        if (T !== null) {
          var U = sa();
          er(T, e, l, U), Bw(T, t, l);
        }
      }
      Ww(e, l);
    }
    function Vw(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function Iw(e, t) {
      uh = fy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Bw(e, t, a) {
      if (dp(a)) {
        var l = t.lanes;
        l = hp(l, e.pendingLanes);
        var s = et(l, a);
        t.lanes = s, Su(e, s);
      }
    }
    function Ww(e, t, a) {
      Cl(e, t);
    }
    var Ty = {
      readContext: Pn,
      useCallback: Ir,
      useContext: Ir,
      useEffect: Ir,
      useImperativeHandle: Ir,
      useInsertionEffect: Ir,
      useLayoutEffect: Ir,
      useMemo: Ir,
      useReducer: Ir,
      useRef: Ir,
      useState: Ir,
      useDebugValue: Ir,
      useDeferredValue: Ir,
      useTransition: Ir,
      useMutableSource: Ir,
      useSyncExternalStore: Ir,
      useId: Ir,
      unstable_isNewReconciler: ce
    }, $w = null, Gw = null, Qw = null, qw = null, Al = null, Qi = null, xy = null;
    {
      var ZS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $w = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", bt(), Xf(t), WS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", bt(), Xf(t), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", bt(), Xf(a), BS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", bt(), Xf(t), VS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", bt(), Xf(t), IS(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", bt(), Xf(t);
          var a = ge.current;
          ge.current = Al;
          try {
            return $S(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", bt();
          var l = ge.current;
          ge.current = Al;
          try {
            return zS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", bt(), PS(e);
        },
        useState: function(e) {
          Z = "useState", bt();
          var t = ge.current;
          ge.current = Al;
          try {
            return py(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", bt(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", bt(), GS(e);
        },
        useTransition: function() {
          return Z = "useTransition", bt(), QS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", bt(), FS(e, t, a);
        },
        useId: function() {
          return Z = "useId", bt(), qS();
        },
        unstable_isNewReconciler: ce
      }, Gw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", pe(), WS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", pe(), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", pe(), BS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", pe(), VS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", pe(), IS(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", pe();
          var a = ge.current;
          ge.current = Al;
          try {
            return $S(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", pe();
          var l = ge.current;
          ge.current = Al;
          try {
            return zS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", pe(), PS(e);
        },
        useState: function(e) {
          Z = "useState", pe();
          var t = ge.current;
          ge.current = Al;
          try {
            return py(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", pe(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", pe(), GS(e);
        },
        useTransition: function() {
          return Z = "useTransition", pe(), QS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", pe(), FS(e, t, a);
        },
        useId: function() {
          return Z = "useId", pe(), qS();
        },
        unstable_isNewReconciler: ce
      }, Qw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", pe(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", pe(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", pe(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", pe(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", pe(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", pe();
          var a = ge.current;
          ge.current = Qi;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", pe();
          var l = ge.current;
          ge.current = Qi;
          try {
            return AS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", pe(), hy();
        },
        useState: function(e) {
          Z = "useState", pe();
          var t = ge.current;
          ge.current = Qi;
          try {
            return HS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", pe(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", pe(), Aw(e);
        },
        useTransition: function() {
          return Z = "useTransition", pe(), Hw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", pe(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", pe(), Cy();
        },
        unstable_isNewReconciler: ce
      }, qw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", pe(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", pe(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", pe(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", pe(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", pe(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", pe();
          var a = ge.current;
          ge.current = xy;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", pe();
          var l = ge.current;
          ge.current = xy;
          try {
            return jS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", pe(), hy();
        },
        useState: function(e) {
          Z = "useState", pe();
          var t = ge.current;
          ge.current = xy;
          try {
            return YS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", pe(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", pe(), jw(e);
        },
        useTransition: function() {
          return Z = "useTransition", pe(), Yw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", pe(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", pe(), Cy();
        },
        unstable_isNewReconciler: ce
      }, Al = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), bt(), WS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), bt(), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), bt(), BS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), bt(), VS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), bt(), IS(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), bt();
          var a = ge.current;
          ge.current = Al;
          try {
            return $S(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), bt();
          var l = ge.current;
          ge.current = Al;
          try {
            return zS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), bt(), PS(e);
        },
        useState: function(e) {
          Z = "useState", qe(), bt();
          var t = ge.current;
          ge.current = Al;
          try {
            return py(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), bt(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", qe(), bt(), GS(e);
        },
        useTransition: function() {
          return Z = "useTransition", qe(), bt(), QS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", qe(), bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", qe(), bt(), FS(e, t, a);
        },
        useId: function() {
          return Z = "useId", qe(), bt(), qS();
        },
        unstable_isNewReconciler: ce
      }, Qi = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), pe(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), pe(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), pe(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), pe(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), pe(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), pe();
          var a = ge.current;
          ge.current = Qi;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), pe();
          var l = ge.current;
          ge.current = Qi;
          try {
            return AS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), pe(), hy();
        },
        useState: function(e) {
          Z = "useState", qe(), pe();
          var t = ge.current;
          ge.current = Qi;
          try {
            return HS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), pe(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", qe(), pe(), Aw(e);
        },
        useTransition: function() {
          return Z = "useTransition", qe(), pe(), Hw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", qe(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", qe(), pe(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", qe(), pe(), Cy();
        },
        unstable_isNewReconciler: ce
      }, xy = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), pe(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), pe(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), pe(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), pe(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), pe(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), pe();
          var a = ge.current;
          ge.current = Qi;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), pe();
          var l = ge.current;
          ge.current = Qi;
          try {
            return jS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), pe(), hy();
        },
        useState: function(e) {
          Z = "useState", qe(), pe();
          var t = ge.current;
          ge.current = Qi;
          try {
            return YS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), pe(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", qe(), pe(), jw(e);
        },
        useTransition: function() {
          return Z = "useTransition", qe(), pe(), Yw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", qe(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", qe(), pe(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", qe(), pe(), Cy();
        },
        unstable_isNewReconciler: ce
      };
    }
    var Iu = u.unstable_now, Zw = 0, by = -1, ph = -1, Ry = -1, KS = !1, Dy = !1;
    function Kw() {
      return KS;
    }
    function Ck() {
      Dy = !0;
    }
    function Tk() {
      KS = !1, Dy = !1;
    }
    function xk() {
      KS = Dy, Dy = !1;
    }
    function Xw() {
      return Zw;
    }
    function Jw() {
      Zw = Iu();
    }
    function XS(e) {
      ph = Iu(), e.actualStartTime < 0 && (e.actualStartTime = Iu());
    }
    function eC(e) {
      ph = -1;
    }
    function ky(e, t) {
      if (ph >= 0) {
        var a = Iu() - ph;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ph = -1;
      }
    }
    function jl(e) {
      if (by >= 0) {
        var t = Iu() - by;
        by = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case fe:
              var s = a.stateNode;
              s.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function JS(e) {
      if (Ry >= 0) {
        var t = Iu() - Ry;
        Ry = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case fe:
              var s = a.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Fl() {
      by = Iu();
    }
    function e1() {
      Ry = Iu();
    }
    function t1(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: wd(t),
        digest: null
      };
    }
    function n1(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function bk(e, t) {
      return !0;
    }
    function r1(e, t) {
      try {
        var a = bk(e, t);
        if (a === !1)
          return;
        var l = t.value, s = t.source, d = t.stack, v = d !== null ? d : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(l);
        }
        var S = s ? Xe(s) : null, _ = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === N)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = Xe(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var U = _ + `
` + v + `

` + ("" + C);
        console.error(U);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var Rk = typeof WeakMap == "function" ? WeakMap : Map;
    function tC(e, t, a) {
      var l = No(Ht, a);
      l.tag = rS, l.payload = {
        element: null
      };
      var s = t.value;
      return l.callback = function() {
        SO(s), r1(e, t);
      }, l;
    }
    function a1(e, t, a) {
      var l = No(Ht, a);
      l.tag = rS;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var d = t.value;
        l.payload = function() {
          return s(d);
        }, l.callback = function() {
          dT(e), r1(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        dT(e), r1(e, t), typeof s != "function" && yO(this);
        var _ = t.value, C = t.stack;
        this.componentDidCatch(_, {
          componentStack: C !== null ? C : ""
        }), typeof s != "function" && (Yr(e.lanes, Be) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), l;
    }
    function nC(e, t, a) {
      var l = e.pingCache, s;
      if (l === null ? (l = e.pingCache = new Rk(), s = /* @__PURE__ */ new Set(), l.set(t, s)) : (s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s))), !s.has(a)) {
        s.add(a);
        var d = EO.bind(null, e, t, a);
        Wn && kh(e, a), t.then(d, d);
      }
    }
    function Dk(e, t, a, l) {
      var s = e.updateQueue;
      if (s === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        s.add(a);
    }
    function kk(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === He && (a === b || a === ie || a === oe)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function rC(e) {
      var t = e;
      do {
        if (t.tag === se && pk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function aC(e, t, a, l, s) {
      if ((e.mode & lt) === He) {
        if (e === t)
          e.flags |= An;
        else {
          if (e.flags |= $e, a.flags |= Ts, a.flags &= ~(Fc | ta), a.tag === R) {
            var d = a.alternate;
            if (d === null)
              a.tag = at;
            else {
              var v = No(Ht, Be);
              v.tag = Jm, Hu(a, v, Be);
            }
          }
          a.lanes = et(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= An, e.lanes = s, e;
    }
    function Mk(e, t, a, l, s) {
      if (a.flags |= ta, Wn && kh(e, s), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        kk(a), Sr() && a.mode & lt && Q_();
        var v = rC(t);
        if (v !== null) {
          v.flags &= ~on, aC(v, t, a, e, s), v.mode & lt && nC(e, d, s), Dk(v, e, d);
          return;
        } else {
          if (!yu(s)) {
            nC(e, d, s), j1();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = S;
        }
      } else if (Sr() && a.mode & lt) {
        Q_();
        var _ = rC(t);
        if (_ !== null) {
          (_.flags & An) === ze && (_.flags |= on), aC(_, t, a, e, s), Z0(nc(l, a));
          return;
        }
      }
      l = nc(l, a), sO(l);
      var C = t;
      do {
        switch (C.tag) {
          case N: {
            var T = l;
            C.flags |= An;
            var U = xn(s);
            C.lanes = et(C.lanes, U);
            var O = tC(C, T, U);
            lS(C, O);
            return;
          }
          case R:
            var V = l, I = C.type, G = C.stateNode;
            if ((C.flags & $e) === ze && (typeof I.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && !rT(G))) {
              C.flags |= An;
              var _e = xn(s);
              C.lanes = et(C.lanes, _e);
              var Ae = a1(C, V, _e);
              lS(C, Ae);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Ok() {
      return null;
    }
    var hh = c.ReactCurrentOwner, qi = !1, i1, vh, l1, o1, u1, rc, s1, My;
    i1 = {}, vh = {}, l1 = {}, o1 = {}, u1 = {}, rc = !1, s1 = {}, My = {};
    function oa(e, t, a, l) {
      e === null ? t.child = ww(t, null, a, l) : t.child = Gf(t, e.child, a, l);
    }
    function Nk(e, t, a, l) {
      t.child = Gf(t, e.child, null, l), t.child = Gf(t, null, a, l);
    }
    function iC(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Ii(
          d,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var v = a.render, S = t.ref, _, C;
      $f(t, s), wl(t);
      {
        if (hh.current = t, Wa(!0), _ = Jf(e, t, v, l, S, s), C = ed(), t.mode & tn) {
          Tn(!0);
          try {
            _ = Jf(e, t, v, l, S, s), C = ed();
          } finally {
            Tn(!1);
          }
        }
        Wa(!1);
      }
      return lo(), e !== null && !qi ? (Rw(e, t, s), Lo(e, t, s)) : (Sr() && C && B0(t), t.flags |= vl, oa(e, t, _, s), t.child);
    }
    function lC(e, t, a, l, s) {
      if (e === null) {
        var d = a.type;
        if (jO(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = ud(d), t.tag = oe, t.type = v, d1(t, d), oC(e, t, v, l, s);
        }
        {
          var S = d.propTypes;
          S && Ii(
            S,
            l,
            // Resolved props
            "prop",
            jt(d)
          );
        }
        var _ = Q1(a.type, null, l, t, t.mode, s);
        return _.ref = t.ref, _.return = t, t.child = _, _;
      }
      {
        var C = a.type, T = C.propTypes;
        T && Ii(
          T,
          l,
          // Resolved props
          "prop",
          jt(C)
        );
      }
      var U = e.child, O = g1(e, s);
      if (!O) {
        var V = U.memoizedProps, I = a.compare;
        if (I = I !== null ? I : Le, I(V, l) && e.ref === t.ref)
          return Lo(e, t, s);
      }
      t.flags |= vl;
      var G = uc(U, l);
      return G.ref = t.ref, G.return = t, t.child = G, G;
    }
    function oC(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === Pe) {
          var v = d, S = v._payload, _ = v._init;
          try {
            d = _(S);
          } catch {
            d = null;
          }
          var C = d && d.propTypes;
          C && Ii(
            C,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            jt(d)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Le(T, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (qi = !1, t.pendingProps = l = T, g1(e, s))
            (e.flags & Ts) !== ze && (qi = !0);
          else
            return t.lanes = e.lanes, Lo(e, t, s);
      }
      return c1(e, t, a, l, s);
    }
    function uC(e, t, a) {
      var l = t.pendingProps, s = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || Ee)
        if ((t.mode & lt) === He) {
          var v = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Iy(t, a);
        } else if (Yr(a, Hr)) {
          var U = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var O = d !== null ? d.baseLanes : a;
          Iy(t, O);
        } else {
          var S = null, _;
          if (d !== null) {
            var C = d.baseLanes;
            _ = et(C, a);
          } else
            _ = a;
          t.lanes = t.childLanes = Hr;
          var T = {
            baseLanes: _,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Iy(t, _), null;
        }
      else {
        var V;
        d !== null ? (V = et(d.baseLanes, a), t.memoizedState = null) : V = a, Iy(t, V);
      }
      return oa(e, t, s, a), t.child;
    }
    function Lk(e, t, a) {
      var l = t.pendingProps;
      return oa(e, t, l, a), t.child;
    }
    function Uk(e, t, a) {
      var l = t.pendingProps.children;
      return oa(e, t, l, a), t.child;
    }
    function zk(e, t, a) {
      {
        t.flags |= Je;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, d = s.children;
      return oa(e, t, d, a), t.child;
    }
    function sC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Lr, t.flags |= Kd);
    }
    function c1(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Ii(
          d,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var v;
      {
        var S = Yf(t, a, !0);
        v = Pf(t, S);
      }
      var _, C;
      $f(t, s), wl(t);
      {
        if (hh.current = t, Wa(!0), _ = Jf(e, t, a, l, v, s), C = ed(), t.mode & tn) {
          Tn(!0);
          try {
            _ = Jf(e, t, a, l, v, s), C = ed();
          } finally {
            Tn(!1);
          }
        }
        Wa(!1);
      }
      return lo(), e !== null && !qi ? (Rw(e, t, s), Lo(e, t, s)) : (Sr() && C && B0(t), t.flags |= vl, oa(e, t, _, s), t.child);
    }
    function cC(e, t, a, l, s) {
      {
        switch (XO(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, S = new v(t.memoizedProps, d.context), _ = S.state;
            d.updater.enqueueSetState(d, _, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= An;
            var C = new Error("Simulated error coming from DevTools"), T = xn(s);
            t.lanes = et(t.lanes, T);
            var U = a1(t, nc(C, t), T);
            lS(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && Ii(
            O,
            l,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var V;
      Ll(a) ? (V = !0, Vm(t)) : V = !1, $f(t, s);
      var I = t.stateNode, G;
      I === null ? (Ny(e, t), yw(t, a, l), gS(t, a, l, s), G = !0) : e === null ? G = ok(t, a, l, s) : G = uk(e, t, a, l, s);
      var _e = f1(e, t, a, G, V, s);
      {
        var Ae = t.stateNode;
        G && Ae.props !== l && (rc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), rc = !0);
      }
      return _e;
    }
    function f1(e, t, a, l, s, d) {
      sC(e, t);
      var v = (t.flags & $e) !== ze;
      if (!l && !v)
        return s && B_(t, a, !1), Lo(e, t, d);
      var S = t.stateNode;
      hh.current = t;
      var _;
      if (v && typeof a.getDerivedStateFromError != "function")
        _ = null, eC();
      else {
        wl(t);
        {
          if (Wa(!0), _ = S.render(), t.mode & tn) {
            Tn(!0);
            try {
              S.render();
            } finally {
              Tn(!1);
            }
          }
          Wa(!1);
        }
        lo();
      }
      return t.flags |= vl, e !== null && v ? Nk(e, t, _, d) : oa(e, t, _, d), t.memoizedState = S.state, s && B_(t, a, !0), t.child;
    }
    function fC(e) {
      var t = e.stateNode;
      t.pendingContext ? V_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && V_(e, t.context, !1), TS(e, t.containerInfo);
    }
    function Ak(e, t, a) {
      if (fC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, s = t.memoizedState, d = s.element;
      sw(e, t), ry(t, l, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var S = v.element;
      if (s.isDehydrated) {
        var _ = {
          element: S,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, C = t.updateQueue;
        if (C.baseState = _, t.memoizedState = _, t.flags & on) {
          var T = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return dC(e, t, S, a, T);
        } else if (S !== d) {
          var U = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return dC(e, t, S, a, U);
        } else {
          YD(t);
          var O = ww(t, null, S, a);
          t.child = O;
          for (var V = O; V; )
            V.flags = V.flags & ~It | _a, V = V.sibling;
        }
      } else {
        if (Bf(), S === d)
          return Lo(e, t, a);
        oa(e, t, S, a);
      }
      return t.child;
    }
    function dC(e, t, a, l, s) {
      return Bf(), Z0(s), t.flags |= on, oa(e, t, a, l), t.child;
    }
    function jk(e, t, a) {
      Tw(t), e === null && q0(t);
      var l = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = s.children, S = M0(l, s);
      return S ? v = null : d !== null && M0(l, d) && (t.flags |= xt), sC(e, t), oa(e, t, v, a), t.child;
    }
    function Fk(e, t) {
      return e === null && q0(t), null;
    }
    function Hk(e, t, a, l) {
      Ny(e, t);
      var s = t.pendingProps, d = a, v = d._payload, S = d._init, _ = S(v);
      t.type = _;
      var C = t.tag = FO(_), T = $i(_, s), U;
      switch (C) {
        case b:
          return d1(t, _), t.type = _ = ud(_), U = c1(null, t, _, T, l), U;
        case R:
          return t.type = _ = V1(_), U = cC(null, t, _, T, l), U;
        case ie:
          return t.type = _ = I1(_), U = iC(null, t, _, T, l), U;
        case J: {
          if (t.type !== t.elementType) {
            var O = _.propTypes;
            O && Ii(
              O,
              T,
              // Resolved for outer only
              "prop",
              jt(_)
            );
          }
          return U = lC(
            null,
            t,
            _,
            $i(_.type, T),
            // The inner type can have defaults too
            l
          ), U;
        }
      }
      var V = "";
      throw _ !== null && typeof _ == "object" && _.$$typeof === Pe && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + _ + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function Yk(e, t, a, l, s) {
      Ny(e, t), t.tag = R;
      var d;
      return Ll(a) ? (d = !0, Vm(t)) : d = !1, $f(t, s), yw(t, a, l), gS(t, a, l, s), f1(null, t, a, !0, d, s);
    }
    function Pk(e, t, a, l) {
      Ny(e, t);
      var s = t.pendingProps, d;
      {
        var v = Yf(t, a, !1);
        d = Pf(t, v);
      }
      $f(t, l);
      var S, _;
      wl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = jt(a) || "Unknown";
          i1[C] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), i1[C] = !0);
        }
        t.mode & tn && Wi.recordLegacyContextWarning(t, null), Wa(!0), hh.current = t, S = Jf(null, t, a, s, d, l), _ = ed(), Wa(!1);
      }
      if (lo(), t.flags |= vl, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var T = jt(a) || "Unknown";
        vh[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), vh[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var U = jt(a) || "Unknown";
          vh[U] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), vh[U] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Ll(a) ? (O = !0, Vm(t)) : O = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, iS(t), mw(t, S), gS(t, a, s, l), f1(null, t, a, !0, O, l);
      } else {
        if (t.tag = b, t.mode & tn) {
          Tn(!0);
          try {
            S = Jf(null, t, a, s, d, l), _ = ed();
          } finally {
            Tn(!1);
          }
        }
        return Sr() && _ && B0(t), oa(null, t, S, l), d1(t, a), t.child;
      }
    }
    function d1(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = ya();
          l && (a += `

Check the render method of \`` + l + "`.");
          var s = l || "", d = e._debugSource;
          d && (s = d.fileName + ":" + d.lineNumber), u1[s] || (u1[s] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = jt(t) || "Unknown";
          o1[v] || (g("%s: Function components do not support getDerivedStateFromProps.", v), o1[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var S = jt(t) || "Unknown";
          l1[S] || (g("%s: Function components do not support contextType.", S), l1[S] = !0);
        }
      }
    }
    var p1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: pt
    };
    function h1(e) {
      return {
        baseLanes: e,
        cachePool: Ok(),
        transitions: null
      };
    }
    function Vk(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ik(e, t, a, l) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return RS(e, lh);
    }
    function Bk(e, t) {
      return gu(e.childLanes, t);
    }
    function pC(e, t, a) {
      var l = t.pendingProps;
      JO(t) && (t.flags |= $e);
      var s = Gi.current, d = !1, v = (t.flags & $e) !== ze;
      if (v || Ik(s, e) ? (d = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (s = dk(s, bw)), s = qf(s), Pu(t, s), e === null) {
        q0(t);
        var S = t.memoizedState;
        if (S !== null) {
          var _ = S.dehydrated;
          if (_ !== null)
            return qk(t, _);
        }
        var C = l.children, T = l.fallback;
        if (d) {
          var U = Wk(t, C, T, a), O = t.child;
          return O.memoizedState = h1(a), t.memoizedState = p1, U;
        } else
          return v1(t, C);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return Zk(e, t, v, l, I, V, a);
        }
        if (d) {
          var G = l.fallback, _e = l.children, Ae = Gk(e, t, _e, G, a), Ne = t.child, vt = e.child.memoizedState;
          return Ne.memoizedState = vt === null ? h1(a) : Vk(vt, a), Ne.childLanes = Bk(e, a), t.memoizedState = p1, Ae;
        } else {
          var ft = l.children, j = $k(e, t, ft, a);
          return t.memoizedState = null, j;
        }
      }
    }
    function v1(e, t, a) {
      var l = e.mode, s = {
        mode: "visible",
        children: t
      }, d = m1(s, l);
      return d.return = e, e.child = d, d;
    }
    function Wk(e, t, a, l) {
      var s = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, S, _;
      return (s & lt) === He && d !== null ? (S = d, S.childLanes = q, S.pendingProps = v, e.mode & Ve && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), _ = qu(a, s, l, null)) : (S = m1(v, s), _ = qu(a, s, l, null)), S.return = e, _.return = e, S.sibling = _, e.child = S, _;
    }
    function m1(e, t, a) {
      return hT(e, t, q, null);
    }
    function hC(e, t) {
      return uc(e, t);
    }
    function $k(e, t, a, l) {
      var s = e.child, d = s.sibling, v = hC(s, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === He && (v.lanes = l), v.return = t, v.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= Tt) : S.push(d);
      }
      return t.child = v, v;
    }
    function Gk(e, t, a, l, s) {
      var d = t.mode, v = e.child, S = v.sibling, _ = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & lt) === He && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var T = t.child;
        C = T, C.childLanes = q, C.pendingProps = _, t.mode & Ve && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = v.selfBaseDuration, C.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        C = hC(v, _), C.subtreeFlags = v.subtreeFlags & Bn;
      var U;
      return S !== null ? U = uc(S, l) : (U = qu(l, d, s, null), U.flags |= It), U.return = t, C.return = t, C.sibling = U, t.child = C, U;
    }
    function Oy(e, t, a, l) {
      l !== null && Z0(l), Gf(t, e.child, null, a);
      var s = t.pendingProps, d = s.children, v = v1(t, d);
      return v.flags |= It, t.memoizedState = null, v;
    }
    function Qk(e, t, a, l, s) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, S = m1(v, d), _ = qu(l, d, s, null);
      return _.flags |= It, S.return = t, _.return = t, S.sibling = _, t.child = S, (t.mode & lt) !== He && Gf(t, e.child, null, s), _;
    }
    function qk(e, t, a) {
      return (e.mode & lt) === He ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : U0(t) ? e.lanes = so : e.lanes = Hr, null;
    }
    function Zk(e, t, a, l, s, d, v) {
      if (a)
        if (t.flags & on) {
          t.flags &= ~on;
          var j = n1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Oy(e, t, v, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var Q = l.children, F = l.fallback, re = Qk(e, t, Q, F, v), we = t.child;
          return we.memoizedState = h1(v), t.memoizedState = p1, re;
        }
      else {
        if (FD(), (t.mode & lt) === He)
          return Oy(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (U0(s)) {
          var S, _, C;
          {
            var T = tD(s);
            S = T.digest, _ = T.message, C = T.stack;
          }
          var U;
          _ ? U = new Error(_) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = n1(U, S, C);
          return Oy(e, t, v, O);
        }
        var V = Yr(v, e.childLanes);
        if (qi || V) {
          var I = Vy();
          if (I !== null) {
            var G = t0(I, v);
            if (G !== pt && G !== d.retryLane) {
              d.retryLane = G;
              var _e = Ht;
              Oa(e, G), er(I, e, G, _e);
            }
          }
          j1();
          var Ae = n1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Oy(e, t, v, Ae);
        } else if (A_(s)) {
          t.flags |= $e, t.child = e.child;
          var Ne = _O.bind(null, e);
          return nD(s, Ne), null;
        } else {
          PD(t, s, d.treeContext);
          var vt = l.children, ft = v1(t, vt);
          return ft.flags |= _a, ft;
        }
      }
    }
    function vC(e, t, a) {
      e.lanes = et(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = et(l.lanes, t)), tS(e.return, t, a);
    }
    function Kk(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === se) {
          var s = l.memoizedState;
          s !== null && vC(l, a, e);
        } else if (l.tag === ut)
          vC(l, a, e);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function Xk(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && cy(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Jk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !s1[e])
        if (s1[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function eM(e, t) {
      e !== void 0 && !My[e] && (e !== "collapsed" && e !== "hidden" ? (My[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (My[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function mC(e, t) {
      {
        var a = Un(e), l = !a && typeof bi(e) == "function";
        if (a || l) {
          var s = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function tM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!mC(e[a], a))
              return;
        } else {
          var l = bi(e);
          if (typeof l == "function") {
            var s = l.call(e);
            if (s)
              for (var d = s.next(), v = 0; !d.done; d = s.next()) {
                if (!mC(d.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function y1(e, t, a, l, s) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: s
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = a, d.tailMode = s);
    }
    function yC(e, t, a) {
      var l = t.pendingProps, s = l.revealOrder, d = l.tail, v = l.children;
      Jk(s), eM(d, s), tM(v, s), oa(e, t, v, a);
      var S = Gi.current, _ = RS(S, lh);
      if (_)
        S = DS(S, lh), t.flags |= $e;
      else {
        var C = e !== null && (e.flags & $e) !== ze;
        C && Kk(t, t.child, a), S = qf(S);
      }
      if (Pu(t, S), (t.mode & lt) === He)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var T = Xk(t.child), U;
            T === null ? (U = t.child, t.child = null) : (U = T.sibling, T.sibling = null), y1(
              t,
              !1,
              // isBackwards
              U,
              T,
              d
            );
            break;
          }
          case "backwards": {
            var O = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && cy(I) === null) {
                t.child = V;
                break;
              }
              var G = V.sibling;
              V.sibling = O, O = V, V = G;
            }
            y1(
              t,
              !0,
              // isBackwards
              O,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            y1(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function nM(e, t, a) {
      TS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Gf(t, null, l, a) : oa(e, t, l, a), t.child;
    }
    var gC = !1;
    function rM(e, t, a) {
      var l = t.type, s = l._context, d = t.pendingProps, v = t.memoizedProps, S = d.value;
      {
        "value" in d || gC || (gC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var _ = t.type.propTypes;
        _ && Ii(_, d, "prop", "Context.Provider");
      }
      if (iw(t, s, S), v !== null) {
        var C = v.value;
        if (Re(C, S)) {
          if (v.children === d.children && !Ym())
            return Lo(e, t, a);
        } else
          KD(t, s, a);
      }
      var T = d.children;
      return oa(e, t, T, a), t.child;
    }
    var SC = !1;
    function aM(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (SC || (SC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var s = t.pendingProps, d = s.children;
      typeof d != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), $f(t, a);
      var v = Pn(l);
      wl(t);
      var S;
      return hh.current = t, Wa(!0), S = d(v), Wa(!1), lo(), t.flags |= vl, oa(e, t, S, a), t.child;
    }
    function mh() {
      qi = !0;
    }
    function Ny(e, t) {
      (t.mode & lt) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= It);
    }
    function Lo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), Dh(t.lanes), Yr(a, t.childLanes) ? (sk(e, t), t.child) : null;
    }
    function iM(e, t, a) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === l.child)
          l.child = a;
        else {
          var s = l.child;
          if (s === null)
            throw new Error("Expected parent to have a child.");
          for (; s.sibling !== t; )
            if (s = s.sibling, s === null)
              throw new Error("Expected to find the previous sibling.");
          s.sibling = a;
        }
        var d = l.deletions;
        return d === null ? (l.deletions = [e], l.flags |= Tt) : d.push(e), a.flags |= It, a;
      }
    }
    function g1(e, t) {
      var a = e.lanes;
      return !!Yr(a, t);
    }
    function lM(e, t, a) {
      switch (t.tag) {
        case N:
          fC(t), t.stateNode, Bf();
          break;
        case $:
          Tw(t);
          break;
        case R: {
          var l = t.type;
          Ll(l) && Vm(t);
          break;
        }
        case W:
          TS(t, t.stateNode.containerInfo);
          break;
        case ae: {
          var s = t.memoizedProps.value, d = t.type._context;
          iw(t, d, s);
          break;
        }
        case fe:
          {
            var v = Yr(a, t.childLanes);
            v && (t.flags |= Je);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case se: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return Pu(t, qf(Gi.current)), t.flags |= $e, null;
            var C = t.child, T = C.childLanes;
            if (Yr(a, T))
              return pC(e, t, a);
            Pu(t, qf(Gi.current));
            var U = Lo(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            Pu(t, qf(Gi.current));
          break;
        }
        case ut: {
          var O = (e.flags & $e) !== ze, V = Yr(a, t.childLanes);
          if (O) {
            if (V)
              return yC(e, t, a);
            t.flags |= $e;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Pu(t, Gi.current), V)
            break;
          return null;
        }
        case Ie:
        case tt:
          return t.lanes = q, uC(e, t, a);
      }
      return Lo(e, t, a);
    }
    function EC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return iM(e, t, Q1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, s = t.pendingProps;
        if (l !== s || Ym() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          qi = !0;
        else {
          var d = g1(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === ze)
            return qi = !1, lM(e, t, a);
          (e.flags & Ts) !== ze ? qi = !0 : qi = !1;
        }
      } else if (qi = !1, Sr() && ND(t)) {
        var v = t.index, S = LD();
        G_(t, S, v);
      }
      switch (t.lanes = q, t.tag) {
        case z:
          return Pk(e, t, t.type, a);
        case Qe: {
          var _ = t.elementType;
          return Hk(e, t, _, a);
        }
        case b: {
          var C = t.type, T = t.pendingProps, U = t.elementType === C ? T : $i(C, T);
          return c1(e, t, C, U, a);
        }
        case R: {
          var O = t.type, V = t.pendingProps, I = t.elementType === O ? V : $i(O, V);
          return cC(e, t, O, I, a);
        }
        case N:
          return Ak(e, t, a);
        case $:
          return jk(e, t, a);
        case Y:
          return Fk(e, t);
        case se:
          return pC(e, t, a);
        case W:
          return nM(e, t, a);
        case ie: {
          var G = t.type, _e = t.pendingProps, Ae = t.elementType === G ? _e : $i(G, _e);
          return iC(e, t, G, Ae, a);
        }
        case ne:
          return Lk(e, t, a);
        case ke:
          return Uk(e, t, a);
        case fe:
          return zk(e, t, a);
        case ae:
          return rM(e, t, a);
        case Te:
          return aM(e, t, a);
        case J: {
          var Ne = t.type, vt = t.pendingProps, ft = $i(Ne, vt);
          if (t.type !== t.elementType) {
            var j = Ne.propTypes;
            j && Ii(
              j,
              ft,
              // Resolved for outer only
              "prop",
              jt(Ne)
            );
          }
          return ft = $i(Ne.type, ft), lC(e, t, Ne, ft, a);
        }
        case oe:
          return oC(e, t, t.type, t.pendingProps, a);
        case at: {
          var Q = t.type, F = t.pendingProps, re = t.elementType === Q ? F : $i(Q, F);
          return Yk(e, t, Q, re, a);
        }
        case ut:
          return yC(e, t, a);
        case kt:
          break;
        case Ie:
          return uC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function td(e) {
      e.flags |= Je;
    }
    function _C(e) {
      e.flags |= Lr, e.flags |= Kd;
    }
    var wC, S1, CC, TC;
    wC = function(e, t, a, l) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === $ || s.tag === Y)
          kR(e, s.stateNode);
        else if (s.tag !== W) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === t)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, S1 = function(e, t) {
    }, CC = function(e, t, a, l, s) {
      var d = e.memoizedProps;
      if (d !== l) {
        var v = t.stateNode, S = xS(), _ = OR(v, a, d, l, s, S);
        t.updateQueue = _, _ && td(t);
      }
    }, TC = function(e, t, a, l) {
      a !== l && td(t);
    };
    function yh(e, t) {
      if (!Sr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, l = null; a !== null; )
              a.alternate !== null && (l = a), a = a.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, d = null; s !== null; )
              s.alternate !== null && (d = s), s = s.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function _r(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = q, l = ze;
      if (t) {
        if ((e.mode & Ve) !== He) {
          for (var _ = e.selfBaseDuration, C = e.child; C !== null; )
            a = et(a, et(C.lanes, C.childLanes)), l |= C.subtreeFlags & Bn, l |= C.flags & Bn, _ += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = _;
        } else
          for (var T = e.child; T !== null; )
            a = et(a, et(T.lanes, T.childLanes)), l |= T.subtreeFlags & Bn, l |= T.flags & Bn, T.return = e, T = T.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & Ve) !== He) {
          for (var s = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = et(a, et(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, s += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = s, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            a = et(a, et(S.lanes, S.childLanes)), l |= S.subtreeFlags, l |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function oM(e, t, a) {
      if ($D() && (t.mode & lt) !== He && (t.flags & $e) === ze)
        return ew(t), Bf(), t.flags |= on | ta | An, !1;
      var l = Gm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (BD(t), _r(t), (t.mode & Ve) !== He) {
            var s = a !== null;
            if (s) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Bf(), (t.flags & $e) === ze && (t.memoizedState = null), t.flags |= Je, _r(t), (t.mode & Ve) !== He) {
            var v = a !== null;
            if (v) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return tw(), !0;
    }
    function xC(e, t, a) {
      var l = t.pendingProps;
      switch (W0(t), t.tag) {
        case z:
        case Qe:
        case oe:
        case b:
        case ie:
        case ne:
        case ke:
        case fe:
        case Te:
        case J:
          return _r(t), null;
        case R: {
          var s = t.type;
          return Ll(s) && Pm(t), _r(t), null;
        }
        case N: {
          var d = t.stateNode;
          if (Qf(t), P0(t), MS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = Gm(t);
            if (v)
              td(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & on) !== ze) && (t.flags |= Ea, tw());
            }
          }
          return S1(e, t), _r(t), null;
        }
        case $: {
          bS(t);
          var _ = Cw(), C = t.type;
          if (e !== null && t.stateNode != null)
            CC(e, t, C, l, _), e.ref !== t.ref && _C(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return _r(t), null;
            }
            var T = xS(), U = Gm(t);
            if (U)
              VD(t, _, T) && td(t);
            else {
              var O = DR(C, l, _, T, t);
              wC(O, t, !1, !1), t.stateNode = O, MR(O, C, l, _) && td(t);
            }
            t.ref !== null && _C(t);
          }
          return _r(t), null;
        }
        case Y: {
          var V = l;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            TC(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var G = Cw(), _e = xS(), Ae = Gm(t);
            Ae ? ID(t) && td(t) : t.stateNode = NR(V, G, _e, t);
          }
          return _r(t), null;
        }
        case se: {
          Zf(t);
          var Ne = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = oM(e, t, Ne);
            if (!vt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & $e) !== ze)
            return t.lanes = a, (t.mode & Ve) !== He && t1(t), t;
          var ft = Ne !== null, j = e !== null && e.memoizedState !== null;
          if (ft !== j && ft) {
            var Q = t.child;
            if (Q.flags |= ml, (t.mode & lt) !== He) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !gt);
              F || RS(Gi.current, bw) ? uO() : j1();
            }
          }
          var re = t.updateQueue;
          if (re !== null && (t.flags |= Je), _r(t), (t.mode & Ve) !== He && ft) {
            var we = t.child;
            we !== null && (t.treeBaseDuration -= we.treeBaseDuration);
          }
          return null;
        }
        case W:
          return Qf(t), S1(e, t), e === null && xD(t.stateNode.containerInfo), _r(t), null;
        case ae:
          var me = t.type._context;
          return eS(me, t), _r(t), null;
        case at: {
          var We = t.type;
          return Ll(We) && Pm(t), _r(t), null;
        }
        case ut: {
          Zf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return _r(t), null;
          var zt = (t.flags & $e) !== ze, Et = Ze.rendering;
          if (Et === null)
            if (zt)
              yh(Ze, !1);
            else {
              var kn = cO() && (e === null || (e.flags & $e) === ze);
              if (!kn)
                for (var _t = t.child; _t !== null; ) {
                  var En = cy(_t);
                  if (En !== null) {
                    zt = !0, t.flags |= $e, yh(Ze, !1);
                    var Br = En.updateQueue;
                    return Br !== null && (t.updateQueue = Br, t.flags |= Je), t.subtreeFlags = ze, ck(t, a), Pu(t, DS(Gi.current, lh)), t.child;
                  }
                  _t = _t.sibling;
                }
              Ze.tail !== null && en() > $C() && (t.flags |= $e, zt = !0, yh(Ze, !1), t.lanes = cp);
            }
          else {
            if (!zt) {
              var br = cy(Et);
              if (br !== null) {
                t.flags |= $e, zt = !0;
                var Ja = br.updateQueue;
                if (Ja !== null && (t.updateQueue = Ja, t.flags |= Je), yh(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Et.alternate && !Sr())
                  return _r(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - Ze.renderingStartTime > $C() && a !== Hr && (t.flags |= $e, zt = !0, yh(Ze, !1), t.lanes = cp);
            }
            if (Ze.isBackwards)
              Et.sibling = t.child, t.child = Et;
            else {
              var ca = Ze.last;
              ca !== null ? ca.sibling = Et : t.child = Et, Ze.last = Et;
            }
          }
          if (Ze.tail !== null) {
            var fa = Ze.tail;
            Ze.rendering = fa, Ze.tail = fa.sibling, Ze.renderingStartTime = en(), fa.sibling = null;
            var Wr = Gi.current;
            return zt ? Wr = DS(Wr, lh) : Wr = qf(Wr), Pu(t, Wr), fa;
          }
          return _r(t), null;
        }
        case kt:
          break;
        case Ie:
        case tt: {
          A1(t);
          var Fo = t.memoizedState, sd = Fo !== null;
          if (e !== null) {
            var Lh = e.memoizedState, Pl = Lh !== null;
            Pl !== sd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Ee && (t.flags |= ml);
          }
          return !sd || (t.mode & lt) === He ? _r(t) : Yr(Yl, Hr) && (_r(t), t.subtreeFlags & (It | Je) && (t.flags |= ml)), null;
        }
        case Xt:
          return null;
        case Mt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function uM(e, t, a) {
      switch (W0(t), t.tag) {
        case R: {
          var l = t.type;
          Ll(l) && Pm(t);
          var s = t.flags;
          return s & An ? (t.flags = s & ~An | $e, (t.mode & Ve) !== He && t1(t), t) : null;
        }
        case N: {
          t.stateNode, Qf(t), P0(t), MS();
          var d = t.flags;
          return (d & An) !== ze && (d & $e) === ze ? (t.flags = d & ~An | $e, t) : null;
        }
        case $:
          return bS(t), null;
        case se: {
          Zf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Bf();
          }
          var S = t.flags;
          return S & An ? (t.flags = S & ~An | $e, (t.mode & Ve) !== He && t1(t), t) : null;
        }
        case ut:
          return Zf(t), null;
        case W:
          return Qf(t), null;
        case ae:
          var _ = t.type._context;
          return eS(_, t), null;
        case Ie:
        case tt:
          return A1(t), null;
        case Xt:
          return null;
        default:
          return null;
      }
    }
    function bC(e, t, a) {
      switch (W0(t), t.tag) {
        case R: {
          var l = t.type.childContextTypes;
          l != null && Pm(t);
          break;
        }
        case N: {
          t.stateNode, Qf(t), P0(t), MS();
          break;
        }
        case $: {
          bS(t);
          break;
        }
        case W:
          Qf(t);
          break;
        case se:
          Zf(t);
          break;
        case ut:
          Zf(t);
          break;
        case ae:
          var s = t.type._context;
          eS(s, t);
          break;
        case Ie:
        case tt:
          A1(t);
          break;
      }
    }
    var RC = null;
    RC = /* @__PURE__ */ new Set();
    var Ly = !1, wr = !1, sM = typeof WeakSet == "function" ? WeakSet : Set, De = null, nd = null, rd = null;
    function cM(e) {
      ao(null, function() {
        throw e;
      }), qd();
    }
    var fM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ve)
        try {
          Fl(), t.componentWillUnmount();
        } finally {
          jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function DC(e, t) {
      try {
        Bu(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function E1(e, t, a) {
      try {
        fM(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function dM(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function kC(e, t) {
      try {
        OC(e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function ad(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var l;
          try {
            if (wn && da && e.mode & Ve)
              try {
                Fl(), l = a(null);
              } finally {
                jl(e);
              }
            else
              l = a(null);
          } catch (s) {
            Gt(e, t, s);
          }
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function Uy(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var MC = !1;
    function pM(e, t) {
      bR(e.containerInfo), De = t, hM();
      var a = MC;
      return MC = !1, a;
    }
    function hM() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & cu) !== ze && t !== null ? (t.return = e, De = t) : vM();
      }
    }
    function vM() {
      for (; De !== null; ) {
        var e = De;
        Lt(e);
        try {
          mM(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function mM(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ea) !== ze) {
        switch (Lt(e), e.tag) {
          case b:
          case ie:
          case oe:
            break;
          case R: {
            if (t !== null) {
              var l = t.memoizedProps, s = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !rc && (d.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), d.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : $i(e.type, l), s);
              {
                var S = RC;
                v === void 0 && !S.has(e.type) && (S.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case N: {
            {
              var _ = e.stateNode;
              KR(_.containerInfo);
            }
            break;
          }
          case $:
          case Y:
          case W:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function Zi(e, t, a) {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var d = s.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var S = v.destroy;
            v.destroy = void 0, S !== void 0 && ((e & Er) !== Na ? $c(t) : (e & Qn) !== Na && Gc(t), (e & Ul) !== Na && Mh(!0), Uy(t, a, S), (e & Ul) !== Na && Mh(!1), (e & Er) !== Na ? $v() : (e & Qn) !== Na && fu());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function Bu(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            (e & Er) !== Na ? Wv(t) : (e & Qn) !== Na && Gv(t);
            var v = d.create;
            (e & Ul) !== Na && Mh(!0), d.destroy = v(), (e & Ul) !== Na && Mh(!1), (e & Er) !== Na ? op() : (e & Qn) !== Na && Qv();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var _ = void 0;
                (d.tag & Qn) !== ze ? _ = "useLayoutEffect" : (d.tag & Ul) !== ze ? _ = "useInsertionEffect" : _ = "useEffect";
                var C = void 0;
                S === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? C = `

It looks like you wrote ` + _ + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + _ + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + S, g("%s must not return anything besides a function, which is used for clean-up.%s", _, C);
              }
            }
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function yM(e, t) {
      if ((t.flags & Je) !== ze)
        switch (t.tag) {
          case fe: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, s = l.id, d = l.onPostCommit, v = Xw(), S = t.alternate === null ? "mount" : "update";
            Kw() && (S = "nested-update"), typeof d == "function" && d(s, S, a, v);
            var _ = t.return;
            e:
              for (; _ !== null; ) {
                switch (_.tag) {
                  case N:
                    var C = _.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case fe:
                    var T = _.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                _ = _.return;
              }
            break;
          }
        }
    }
    function gM(e, t, a, l) {
      if ((a.flags & ur) !== ze)
        switch (a.tag) {
          case b:
          case ie:
          case oe: {
            if (!wr)
              if (a.mode & Ve)
                try {
                  Fl(), Bu(Qn | Gn, a);
                } finally {
                  jl(a);
                }
              else
                Bu(Qn | Gn, a);
            break;
          }
          case R: {
            var s = a.stateNode;
            if (a.flags & Je && !wr)
              if (t === null)
                if (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & Ve)
                  try {
                    Fl(), s.componentDidMount();
                  } finally {
                    jl(a);
                  }
                else
                  s.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : $i(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & Ve)
                  try {
                    Fl(), s.componentDidUpdate(d, v, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    jl(a);
                  }
                else
                  s.componentDidUpdate(d, v, s.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), fw(a, S, s));
            break;
          }
          case N: {
            var _ = a.updateQueue;
            if (_ !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case $:
                    C = a.child.stateNode;
                    break;
                  case R:
                    C = a.child.stateNode;
                    break;
                }
              fw(a, _, C);
            }
            break;
          }
          case $: {
            var T = a.stateNode;
            if (t === null && a.flags & Je) {
              var U = a.type, O = a.memoizedProps;
              jR(T, U, O);
            }
            break;
          }
          case Y:
            break;
          case W:
            break;
          case fe: {
            {
              var V = a.memoizedProps, I = V.onCommit, G = V.onRender, _e = a.stateNode.effectDuration, Ae = Xw(), Ne = t === null ? "mount" : "update";
              Kw() && (Ne = "nested-update"), typeof G == "function" && G(a.memoizedProps.id, Ne, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof I == "function" && I(a.memoizedProps.id, Ne, _e, Ae), vO(a);
                var vt = a.return;
                e:
                  for (; vt !== null; ) {
                    switch (vt.tag) {
                      case N:
                        var ft = vt.stateNode;
                        ft.effectDuration += _e;
                        break e;
                      case fe:
                        var j = vt.stateNode;
                        j.effectDuration += _e;
                        break e;
                    }
                    vt = vt.return;
                  }
              }
            }
            break;
          }
          case se: {
            bM(e, a);
            break;
          }
          case ut:
          case at:
          case kt:
          case Ie:
          case tt:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      wr || a.flags & Lr && OC(a);
    }
    function SM(e) {
      switch (e.tag) {
        case b:
        case ie:
        case oe: {
          if (e.mode & Ve)
            try {
              Fl(), DC(e, e.return);
            } finally {
              jl(e);
            }
          else
            DC(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && dM(e, e.return, t), kC(e, e.return);
          break;
        }
        case $: {
          kC(e, e.return);
          break;
        }
      }
    }
    function EM(e, t) {
      for (var a = null, l = e; ; ) {
        if (l.tag === $) {
          if (a === null) {
            a = l;
            try {
              var s = l.stateNode;
              t ? GR(s) : qR(l.stateNode, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
          }
        } else if (l.tag === Y) {
          if (a === null)
            try {
              var d = l.stateNode;
              t ? QR(d) : ZR(d, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
        } else if (!((l.tag === Ie || l.tag === tt) && l.memoizedState !== null && l !== e)) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === e)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return;
          a === l && (a = null), l = l.return;
        }
        a === l && (a = null), l.sibling.return = l.return, l = l.sibling;
      }
    }
    function OC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, l;
        switch (e.tag) {
          case $:
            l = a;
            break;
          default:
            l = a;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & Ve)
            try {
              Fl(), s = t(l);
            } finally {
              jl(e);
            }
          else
            s = t(l);
          typeof s == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = l;
      }
    }
    function _M(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function NC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, NC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === $) {
          var a = e.stateNode;
          a !== null && DD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function wM(e) {
      for (var t = e.return; t !== null; ) {
        if (LC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function LC(e) {
      return e.tag === $ || e.tag === N || e.tag === W;
    }
    function UC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || LC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== $ && t.tag !== Y && t.tag !== Ke; ) {
            if (t.flags & It || t.child === null || t.tag === W)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & It))
            return t.stateNode;
        }
    }
    function CM(e) {
      var t = wM(e);
      switch (t.tag) {
        case $: {
          var a = t.stateNode;
          t.flags & xt && (z_(a), t.flags &= ~xt);
          var l = UC(e);
          w1(e, l, a);
          break;
        }
        case N:
        case W: {
          var s = t.stateNode.containerInfo, d = UC(e);
          _1(e, d, s);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _1(e, t, a) {
      var l = e.tag, s = l === $ || l === Y;
      if (s) {
        var d = e.stateNode;
        t ? IR(a, d, t) : PR(a, d);
      } else if (l !== W) {
        var v = e.child;
        if (v !== null) {
          _1(v, t, a);
          for (var S = v.sibling; S !== null; )
            _1(S, t, a), S = S.sibling;
        }
      }
    }
    function w1(e, t, a) {
      var l = e.tag, s = l === $ || l === Y;
      if (s) {
        var d = e.stateNode;
        t ? VR(a, d, t) : YR(a, d);
      } else if (l !== W) {
        var v = e.child;
        if (v !== null) {
          w1(v, t, a);
          for (var S = v.sibling; S !== null; )
            w1(S, t, a), S = S.sibling;
        }
      }
    }
    var Cr = null, Ki = !1;
    function TM(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case $: {
                Cr = l.stateNode, Ki = !1;
                break e;
              }
              case N: {
                Cr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
              case W: {
                Cr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (Cr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        zC(e, t, a), Cr = null, Ki = !1;
      }
      _M(a);
    }
    function Wu(e, t, a) {
      for (var l = a.child; l !== null; )
        zC(e, t, l), l = l.sibling;
    }
    function zC(e, t, a) {
      switch (ip(a), a.tag) {
        case $:
          wr || ad(a, t);
        case Y: {
          {
            var l = Cr, s = Ki;
            Cr = null, Wu(e, t, a), Cr = l, Ki = s, Cr !== null && (Ki ? WR(Cr, a.stateNode) : BR(Cr, a.stateNode));
          }
          return;
        }
        case Ke: {
          Cr !== null && (Ki ? $R(Cr, a.stateNode) : L0(Cr, a.stateNode));
          return;
        }
        case W: {
          {
            var d = Cr, v = Ki;
            Cr = a.stateNode.containerInfo, Ki = !0, Wu(e, t, a), Cr = d, Ki = v;
          }
          return;
        }
        case b:
        case ie:
        case J:
        case oe: {
          if (!wr) {
            var S = a.updateQueue;
            if (S !== null) {
              var _ = S.lastEffect;
              if (_ !== null) {
                var C = _.next, T = C;
                do {
                  var U = T, O = U.destroy, V = U.tag;
                  O !== void 0 && ((V & Ul) !== Na ? Uy(a, t, O) : (V & Qn) !== Na && (Gc(a), a.mode & Ve ? (Fl(), Uy(a, t, O), jl(a)) : Uy(a, t, O), fu())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Wu(e, t, a);
          return;
        }
        case R: {
          if (!wr) {
            ad(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && E1(a, t, I);
          }
          Wu(e, t, a);
          return;
        }
        case kt: {
          Wu(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var G = wr;
            wr = G || a.memoizedState !== null, Wu(e, t, a), wr = G;
          } else
            Wu(e, t, a);
          break;
        }
        default: {
          Wu(e, t, a);
          return;
        }
      }
    }
    function xM(e) {
      e.memoizedState;
    }
    function bM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var s = l.memoizedState;
          if (s !== null) {
            var d = s.dehydrated;
            d !== null && fD(d);
          }
        }
      }
    }
    function AC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new sM()), t.forEach(function(l) {
          var s = wO.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Wn)
              if (nd !== null && rd !== null)
                kh(rd, nd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(s, s);
          }
        });
      }
    }
    function RM(e, t, a) {
      nd = a, rd = e, Lt(t), jC(t, e), Lt(t), nd = null, rd = null;
    }
    function Xi(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          try {
            TM(e, t, d);
          } catch (_) {
            Gt(d, t, _);
          }
        }
      var v = Ng();
      if (t.subtreeFlags & Ar)
        for (var S = t.child; S !== null; )
          Lt(S), jC(S, e), S = S.sibling;
      Lt(v);
    }
    function jC(e, t, a) {
      var l = e.alternate, s = e.flags;
      switch (e.tag) {
        case b:
        case ie:
        case J:
        case oe: {
          if (Xi(t, e), Hl(e), s & Je) {
            try {
              Zi(Ul | Gn, e, e.return), Bu(Ul | Gn, e);
            } catch (We) {
              Gt(e, e.return, We);
            }
            if (e.mode & Ve) {
              try {
                Fl(), Zi(Qn | Gn, e, e.return);
              } catch (We) {
                Gt(e, e.return, We);
              }
              jl(e);
            } else
              try {
                Zi(Qn | Gn, e, e.return);
              } catch (We) {
                Gt(e, e.return, We);
              }
          }
          return;
        }
        case R: {
          Xi(t, e), Hl(e), s & Lr && l !== null && ad(l, l.return);
          return;
        }
        case $: {
          Xi(t, e), Hl(e), s & Lr && l !== null && ad(l, l.return);
          {
            if (e.flags & xt) {
              var d = e.stateNode;
              try {
                z_(d);
              } catch (We) {
                Gt(e, e.return, We);
              }
            }
            if (s & Je) {
              var v = e.stateNode;
              if (v != null) {
                var S = e.memoizedProps, _ = l !== null ? l.memoizedProps : S, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    FR(v, T, C, _, S, e);
                  } catch (We) {
                    Gt(e, e.return, We);
                  }
              }
            }
          }
          return;
        }
        case Y: {
          if (Xi(t, e), Hl(e), s & Je) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, O = e.memoizedProps, V = l !== null ? l.memoizedProps : O;
            try {
              HR(U, V, O);
            } catch (We) {
              Gt(e, e.return, We);
            }
          }
          return;
        }
        case N: {
          if (Xi(t, e), Hl(e), s & Je && l !== null) {
            var I = l.memoizedState;
            if (I.isDehydrated)
              try {
                cD(t.containerInfo);
              } catch (We) {
                Gt(e, e.return, We);
              }
          }
          return;
        }
        case W: {
          Xi(t, e), Hl(e);
          return;
        }
        case se: {
          Xi(t, e), Hl(e);
          var G = e.child;
          if (G.flags & ml) {
            var _e = G.stateNode, Ae = G.memoizedState, Ne = Ae !== null;
            if (_e.isHidden = Ne, Ne) {
              var vt = G.alternate !== null && G.alternate.memoizedState !== null;
              vt || oO();
            }
          }
          if (s & Je) {
            try {
              xM(e);
            } catch (We) {
              Gt(e, e.return, We);
            }
            AC(e);
          }
          return;
        }
        case Ie: {
          var ft = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var j = wr;
            wr = j || ft, Xi(t, e), wr = j;
          } else
            Xi(t, e);
          if (Hl(e), s & ml) {
            var Q = e.stateNode, F = e.memoizedState, re = F !== null, we = e;
            if (Q.isHidden = re, re && !ft && (we.mode & lt) !== He) {
              De = we;
              for (var me = we.child; me !== null; )
                De = me, kM(me), me = me.sibling;
            }
            EM(we, re);
          }
          return;
        }
        case ut: {
          Xi(t, e), Hl(e), s & Je && AC(e);
          return;
        }
        case kt:
          return;
        default: {
          Xi(t, e), Hl(e);
          return;
        }
      }
    }
    function Hl(e) {
      var t = e.flags;
      if (t & It) {
        try {
          CM(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~It;
      }
      t & _a && (e.flags &= ~_a);
    }
    function DM(e, t, a) {
      nd = a, rd = t, De = e, FC(e, t, a), nd = null, rd = null;
    }
    function FC(e, t, a) {
      for (var l = (e.mode & lt) !== He; De !== null; ) {
        var s = De, d = s.child;
        if (s.tag === Ie && l) {
          var v = s.memoizedState !== null, S = v || Ly;
          if (S) {
            C1(e, t, a);
            continue;
          } else {
            var _ = s.alternate, C = _ !== null && _.memoizedState !== null, T = C || wr, U = Ly, O = wr;
            Ly = S, wr = T, wr && !O && (De = s, MM(s));
            for (var V = d; V !== null; )
              De = V, FC(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            De = s, Ly = U, wr = O, C1(e, t, a);
            continue;
          }
        }
        (s.subtreeFlags & ur) !== ze && d !== null ? (d.return = s, De = d) : C1(e, t, a);
      }
    }
    function C1(e, t, a) {
      for (; De !== null; ) {
        var l = De;
        if ((l.flags & ur) !== ze) {
          var s = l.alternate;
          Lt(l);
          try {
            gM(t, s, l, a);
          } catch (v) {
            Gt(l, l.return, v);
          }
          Cn();
        }
        if (l === e) {
          De = null;
          return;
        }
        var d = l.sibling;
        if (d !== null) {
          d.return = l.return, De = d;
          return;
        }
        De = l.return;
      }
    }
    function kM(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case b:
          case ie:
          case J:
          case oe: {
            if (t.mode & Ve)
              try {
                Fl(), Zi(Qn, t, t.return);
              } finally {
                jl(t);
              }
            else
              Zi(Qn, t, t.return);
            break;
          }
          case R: {
            ad(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && E1(t, t.return, l);
            break;
          }
          case $: {
            ad(t, t.return);
            break;
          }
          case Ie: {
            var s = t.memoizedState !== null;
            if (s) {
              HC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : HC(e);
      }
    }
    function HC(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function MM(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Ie) {
          var l = t.memoizedState !== null;
          if (l) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : YC(e);
      }
    }
    function YC(e) {
      for (; De !== null; ) {
        var t = De;
        Lt(t);
        try {
          SM(t);
        } catch (l) {
          Gt(t, t.return, l);
        }
        if (Cn(), t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function OM(e, t, a, l) {
      De = t, NM(t, e, a, l);
    }
    function NM(e, t, a, l) {
      for (; De !== null; ) {
        var s = De, d = s.child;
        (s.subtreeFlags & wa) !== ze && d !== null ? (d.return = s, De = d) : LM(e, t, a, l);
      }
    }
    function LM(e, t, a, l) {
      for (; De !== null; ) {
        var s = De;
        if ((s.flags & Zt) !== ze) {
          Lt(s);
          try {
            UM(t, s, a, l);
          } catch (v) {
            Gt(s, s.return, v);
          }
          Cn();
        }
        if (s === e) {
          De = null;
          return;
        }
        var d = s.sibling;
        if (d !== null) {
          d.return = s.return, De = d;
          return;
        }
        De = s.return;
      }
    }
    function UM(e, t, a, l) {
      switch (t.tag) {
        case b:
        case ie:
        case oe: {
          if (t.mode & Ve) {
            e1();
            try {
              Bu(Er | Gn, t);
            } finally {
              JS(t);
            }
          } else
            Bu(Er | Gn, t);
          break;
        }
      }
    }
    function zM(e) {
      De = e, AM();
    }
    function AM() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Tt) !== ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var s = a[l];
              De = s, HM(s, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S;
                  } while (v !== null);
                }
              }
            }
            De = e;
          }
        }
        (e.subtreeFlags & wa) !== ze && t !== null ? (t.return = e, De = t) : jM();
      }
    }
    function jM() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Zt) !== ze && (Lt(e), FM(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function FM(e) {
      switch (e.tag) {
        case b:
        case ie:
        case oe: {
          e.mode & Ve ? (e1(), Zi(Er | Gn, e, e.return), JS(e)) : Zi(Er | Gn, e, e.return);
          break;
        }
      }
    }
    function HM(e, t) {
      for (; De !== null; ) {
        var a = De;
        Lt(a), PM(a, t), Cn();
        var l = a.child;
        l !== null ? (l.return = a, De = l) : YM(e);
      }
    }
    function YM(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, l = t.return;
        if (NC(t), t === e) {
          De = null;
          return;
        }
        if (a !== null) {
          a.return = l, De = a;
          return;
        }
        De = l;
      }
    }
    function PM(e, t) {
      switch (e.tag) {
        case b:
        case ie:
        case oe: {
          e.mode & Ve ? (e1(), Zi(Er, e, t), JS(e)) : Zi(Er, e, t);
          break;
        }
      }
    }
    function VM(e) {
      switch (e.tag) {
        case b:
        case ie:
        case oe: {
          try {
            Bu(Qn | Gn, e);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
      }
    }
    function IM(e) {
      switch (e.tag) {
        case b:
        case ie:
        case oe: {
          try {
            Bu(Er | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function BM(e) {
      switch (e.tag) {
        case b:
        case ie:
        case oe: {
          try {
            Zi(Qn | Gn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && E1(e, e.return, t);
          break;
        }
      }
    }
    function WM(e) {
      switch (e.tag) {
        case b:
        case ie:
        case oe:
          try {
            Zi(Er | Gn, e, e.return);
          } catch (t) {
            Gt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var gh = Symbol.for;
      gh("selector.component"), gh("selector.has_pseudo_class"), gh("selector.role"), gh("selector.test_id"), gh("selector.text");
    }
    var $M = [];
    function GM() {
      $M.forEach(function(e) {
        return e();
      });
    }
    var QM = c.ReactCurrentActQueue;
    function qM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function PC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && QM.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ZM = Math.ceil, T1 = c.ReactCurrentDispatcher, x1 = c.ReactCurrentOwner, Tr = c.ReactCurrentBatchConfig, Ji = c.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), VC = (
      /*               */
      1
    ), xr = (
      /*                */
      2
    ), Si = (
      /*                */
      4
    ), Uo = 0, Sh = 1, ac = 2, zy = 3, Eh = 4, IC = 5, b1 = 6, ht = Kn, ua = null, hn = null, Xn = q, Yl = q, R1 = zu(q), Jn = Uo, _h = null, Ay = q, wh = q, jy = q, Ch = null, La = null, D1 = 0, BC = 500, WC = 1 / 0, KM = 500, zo = null;
    function Th() {
      WC = en() + KM;
    }
    function $C() {
      return WC;
    }
    var Fy = !1, k1 = null, id = null, ic = !1, $u = null, xh = q, M1 = [], O1 = null, XM = 50, bh = 0, N1 = null, L1 = !1, Hy = !1, JM = 50, ld = 0, Yy = null, Rh = Ht, Py = q, GC = !1;
    function Vy() {
      return ua;
    }
    function sa() {
      return (ht & (xr | Si)) !== Kn ? en() : (Rh !== Ht || (Rh = en()), Rh);
    }
    function Gu(e) {
      var t = e.mode;
      if ((t & lt) === He)
        return Be;
      if ((ht & xr) !== Kn && Xn !== q)
        return xn(Xn);
      var a = qD() !== QD;
      if (a) {
        if (Tr.transition !== null) {
          var l = Tr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Py === pt && (Py = pp()), Py;
      }
      var s = ba();
      if (s !== pt)
        return s;
      var d = LR();
      return d;
    }
    function eO(e) {
      var t = e.mode;
      return (t & lt) === He ? Be : e0();
    }
    function er(e, t, a, l) {
      TO(), GC && g("useInsertionEffect must not schedule updates."), L1 && (Hy = !0), yo(e, a, l), (ht & xr) !== q && e === ua ? RO(t) : (Wn && gp(e, t, a), DO(t), e === ua && ((ht & xr) === Kn && (wh = et(wh, a)), Jn === Eh && Qu(e, Xn)), Ua(e, l), a === Be && ht === Kn && (t.mode & lt) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ji.isBatchingLegacy && (Th(), $_()));
    }
    function tO(e, t, a) {
      var l = e.current;
      l.lanes = t, yo(e, t, a), Ua(e, a);
    }
    function nO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ht & xr) !== Kn
      );
    }
    function Ua(e, t) {
      var a = e.callbackNode;
      Kg(e, t);
      var l = Ms(e, e === ua ? Xn : q);
      if (l === q) {
        a !== null && sT(a), e.callbackNode = null, e.callbackPriority = pt;
        return;
      }
      var s = gn(l), d = e.callbackPriority;
      if (d === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ji.current !== null && a !== Y1)) {
        a == null && d !== Be && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && sT(a);
      var v;
      if (s === Be)
        e.tag === Au ? (Ji.isBatchingLegacy !== null && (Ji.didScheduleLegacyUpdate = !0), OD(ZC.bind(null, e))) : W_(ZC.bind(null, e)), Ji.current !== null ? Ji.current.push(ju) : zR(function() {
          (ht & (xr | Si)) === Kn && ju();
        }), v = null;
      else {
        var S;
        switch (zs(l)) {
          case sr:
            S = Ic;
            break;
          case $n:
            S = aa;
            break;
          case Fi:
            S = si;
            break;
          case Ls:
            S = gl;
            break;
          default:
            S = si;
            break;
        }
        v = P1(S, QC.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = v;
    }
    function QC(e, t) {
      if (Tk(), Rh = Ht, Py = q, (ht & (xr | Si)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = jo();
      if (l && e.callbackNode !== a)
        return null;
      var s = Ms(e, e === ua ? Xn : q);
      if (s === q)
        return null;
      var d = !Ns(e, s) && !em(e, s) && !t, v = d ? dO(e, s) : By(e, s);
      if (v !== Uo) {
        if (v === ac) {
          var S = fp(e);
          S !== q && (s = S, v = U1(e, S));
        }
        if (v === Sh) {
          var _ = _h;
          throw lc(e, q), Qu(e, s), Ua(e, en()), _;
        }
        if (v === b1)
          Qu(e, s);
        else {
          var C = !Ns(e, s), T = e.current.alternate;
          if (C && !aO(T)) {
            if (v = By(e, s), v === ac) {
              var U = fp(e);
              U !== q && (s = U, v = U1(e, U));
            }
            if (v === Sh) {
              var O = _h;
              throw lc(e, q), Qu(e, s), Ua(e, en()), O;
            }
          }
          e.finishedWork = T, e.finishedLanes = s, rO(e, v, s);
        }
      }
      return Ua(e, en()), e.callbackNode === a ? QC.bind(null, e) : null;
    }
    function U1(e, t) {
      var a = Ch;
      if (Rn(e)) {
        var l = lc(e, t);
        l.flags |= on, TD(e.containerInfo);
      }
      var s = By(e, t);
      if (s !== ac) {
        var d = La;
        La = a, d !== null && qC(d);
      }
      return s;
    }
    function qC(e) {
      La === null ? La = e : La.push.apply(La, e);
    }
    function rO(e, t, a) {
      switch (t) {
        case Uo:
        case Sh:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          oc(e, La, zo);
          break;
        }
        case zy: {
          if (Qu(e, a), hf(a) && // do not delay if we're inside an act() scope
          !cT()) {
            var l = D1 + BC - en();
            if (l > 10) {
              var s = Ms(e, q);
              if (s !== q)
                break;
              var d = e.suspendedLanes;
              if (!mo(d, a)) {
                sa(), mp(e, d);
                break;
              }
              e.timeoutHandle = O0(oc.bind(null, e, La, zo), l);
              break;
            }
          }
          oc(e, La, zo);
          break;
        }
        case Eh: {
          if (Qu(e, a), Jv(a))
            break;
          if (!cT()) {
            var v = Xv(e, a), S = v, _ = en() - S, C = CO(_) - _;
            if (C > 10) {
              e.timeoutHandle = O0(oc.bind(null, e, La, zo), C);
              break;
            }
          }
          oc(e, La, zo);
          break;
        }
        case IC: {
          oc(e, La, zo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function aO(e) {
      for (var t = e; ; ) {
        if (t.flags & Cs) {
          var a = t.updateQueue;
          if (a !== null) {
            var l = a.stores;
            if (l !== null)
              for (var s = 0; s < l.length; s++) {
                var d = l[s], v = d.getSnapshot, S = d.value;
                try {
                  if (!Re(v(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var _ = t.child;
        if (t.subtreeFlags & Cs && _ !== null) {
          _.return = t, t = _;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Qu(e, t) {
      t = gu(t, jy), t = gu(t, wh), vp(e, t);
    }
    function ZC(e) {
      if (xk(), (ht & (xr | Si)) !== Kn)
        throw new Error("Should not already be working.");
      jo();
      var t = Ms(e, q);
      if (!Yr(t, Be))
        return Ua(e, en()), null;
      var a = By(e, t);
      if (e.tag !== Au && a === ac) {
        var l = fp(e);
        l !== q && (t = l, a = U1(e, l));
      }
      if (a === Sh) {
        var s = _h;
        throw lc(e, q), Qu(e, t), Ua(e, en()), s;
      }
      if (a === b1)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, oc(e, La, zo), Ua(e, en()), null;
    }
    function iO(e, t) {
      t !== q && (Su(e, et(t, Be)), Ua(e, en()), (ht & (xr | Si)) === Kn && (Th(), ju()));
    }
    function z1(e, t) {
      var a = ht;
      ht |= VC;
      try {
        return e(t);
      } finally {
        ht = a, ht === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ji.isBatchingLegacy && (Th(), $_());
      }
    }
    function lO(e, t, a, l, s) {
      var d = ba(), v = Tr.transition;
      try {
        return Tr.transition = null, bn(sr), e(t, a, l, s);
      } finally {
        bn(d), Tr.transition = v, ht === Kn && Th();
      }
    }
    function Ao(e) {
      $u !== null && $u.tag === Au && (ht & (xr | Si)) === Kn && jo();
      var t = ht;
      ht |= VC;
      var a = Tr.transition, l = ba();
      try {
        return Tr.transition = null, bn(sr), e ? e() : void 0;
      } finally {
        bn(l), Tr.transition = a, ht = t, (ht & (xr | Si)) === Kn && ju();
      }
    }
    function KC() {
      return (ht & (xr | Si)) !== Kn;
    }
    function Iy(e, t) {
      Vr(R1, Yl, e), Yl = et(Yl, t);
    }
    function A1(e) {
      Yl = R1.current, Pr(R1, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = q;
      var a = e.timeoutHandle;
      if (a !== N0 && (e.timeoutHandle = N0, UR(a)), hn !== null)
        for (var l = hn.return; l !== null; ) {
          var s = l.alternate;
          bC(s, l), l = l.return;
        }
      ua = e;
      var d = uc(e.current, null);
      return hn = d, Xn = Yl = t, Jn = Uo, _h = null, Ay = q, wh = q, jy = q, Ch = null, La = null, JD(), Wi.discardPendingWarnings(), d;
    }
    function XC(e, t) {
      do {
        var a = hn;
        try {
          if (Km(), Dw(), Cn(), x1.current = null, a === null || a.return === null) {
            Jn = Sh, _h = t, hn = null;
            return;
          }
          if (wn && a.mode & Ve && ky(a, !0), ni)
            if (lo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              qv(a, l, Xn);
            } else
              Qc(a, t, Xn);
          Mk(e, a.return, a, t, Xn), nT(a);
        } catch (s) {
          t = s, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function JC() {
      var e = T1.current;
      return T1.current = Ty, e === null ? Ty : e;
    }
    function eT(e) {
      T1.current = e;
    }
    function oO() {
      D1 = en();
    }
    function Dh(e) {
      Ay = et(e, Ay);
    }
    function uO() {
      Jn === Uo && (Jn = zy);
    }
    function j1() {
      (Jn === Uo || Jn === zy || Jn === ac) && (Jn = Eh), ua !== null && (Os(Ay) || Os(wh)) && Qu(ua, Xn);
    }
    function sO(e) {
      Jn !== Eh && (Jn = ac), Ch === null ? Ch = [e] : Ch.push(e);
    }
    function cO() {
      return Jn === Uo;
    }
    function By(e, t) {
      var a = ht;
      ht |= xr;
      var l = JC();
      if (ua !== e || Xn !== t) {
        if (Wn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (kh(e, Xn), s.clear()), yf(e, t);
        }
        zo = Sp(), lc(e, t);
      }
      qa(t);
      do
        try {
          fO();
          break;
        } catch (d) {
          XC(e, d);
        }
      while (!0);
      if (Km(), ht = a, eT(l), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pu(), ua = null, Xn = q, Jn;
    }
    function fO() {
      for (; hn !== null; )
        tT(hn);
    }
    function dO(e, t) {
      var a = ht;
      ht |= xr;
      var l = JC();
      if (ua !== e || Xn !== t) {
        if (Wn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (kh(e, Xn), s.clear()), yf(e, t);
        }
        zo = Sp(), Th(), lc(e, t);
      }
      qa(t);
      do
        try {
          pO();
          break;
        } catch (d) {
          XC(e, d);
        }
      while (!0);
      return Km(), eT(l), ht = a, hn !== null ? (bs(), Uo) : (pu(), ua = null, Xn = q, Jn);
    }
    function pO() {
      for (; hn !== null && !Vc(); )
        tT(hn);
    }
    function tT(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & Ve) !== He ? (XS(e), a = F1(t, e, Yl), ky(e, !0)) : a = F1(t, e, Yl), Cn(), e.memoizedProps = e.pendingProps, a === null ? nT(e) : hn = a, x1.current = null;
    }
    function nT(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & ta) === ze) {
          Lt(t);
          var s = void 0;
          if ((t.mode & Ve) === He ? s = xC(a, t, Yl) : (XS(t), s = xC(a, t, Yl), ky(t, !1)), Cn(), s !== null) {
            hn = s;
            return;
          }
        } else {
          var d = uM(a, t);
          if (d !== null) {
            d.flags &= Yv, hn = d;
            return;
          }
          if ((t.mode & Ve) !== He) {
            ky(t, !1);
            for (var v = t.actualDuration, S = t.child; S !== null; )
              v += S.actualDuration, S = S.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= ta, l.subtreeFlags = ze, l.deletions = null;
          else {
            Jn = b1, hn = null;
            return;
          }
        }
        var _ = t.sibling;
        if (_ !== null) {
          hn = _;
          return;
        }
        t = l, hn = t;
      } while (t !== null);
      Jn === Uo && (Jn = IC);
    }
    function oc(e, t, a) {
      var l = ba(), s = Tr.transition;
      try {
        Tr.transition = null, bn(sr), hO(e, t, a, l);
      } finally {
        Tr.transition = s, bn(l);
      }
      return null;
    }
    function hO(e, t, a, l) {
      do
        jo();
      while ($u !== null);
      if (xO(), (ht & (xr | Si)) !== Kn)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, d = e.finishedLanes;
      if (Wc(d), s === null)
        return lp(), null;
      if (d === q && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = pt;
      var v = et(s.lanes, s.childLanes);
      yp(e, v), e === ua && (ua = null, hn = null, Xn = q), ((s.subtreeFlags & wa) !== ze || (s.flags & wa) !== ze) && (ic || (ic = !0, O1 = a, P1(si, function() {
        return jo(), null;
      })));
      var S = (s.subtreeFlags & (cu | Ar | ur | wa)) !== ze, _ = (s.flags & (cu | Ar | ur | wa)) !== ze;
      if (S || _) {
        var C = Tr.transition;
        Tr.transition = null;
        var T = ba();
        bn(sr);
        var U = ht;
        ht |= Si, x1.current = null, pM(e, s), Jw(), RM(e, s, d), RR(e.containerInfo), e.current = s, Zv(d), DM(s, e, d), du(), Iv(), ht = U, bn(T), Tr.transition = C;
      } else
        e.current = s, Jw();
      var O = ic;
      if (ic ? (ic = !1, $u = e, xh = d) : (ld = 0, Yy = null), v = e.pendingLanes, v === q && (id = null), O || lT(e.current, !1), zi(s.stateNode, l), Wn && e.memoizedUpdaters.clear(), GM(), Ua(e, en()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var G = t[I], _e = G.stack, Ae = G.digest;
          V(G.value, {
            componentStack: _e,
            digest: Ae
          });
        }
      if (Fy) {
        Fy = !1;
        var Ne = k1;
        throw k1 = null, Ne;
      }
      return Yr(xh, Be) && e.tag !== Au && jo(), v = e.pendingLanes, Yr(v, Be) ? (Ck(), e === N1 ? bh++ : (bh = 0, N1 = e)) : bh = 0, ju(), lp(), null;
    }
    function jo() {
      if ($u !== null) {
        var e = zs(xh), t = n0(Fi, e), a = Tr.transition, l = ba();
        try {
          return Tr.transition = null, bn(t), mO();
        } finally {
          bn(l), Tr.transition = a;
        }
      }
      return !1;
    }
    function vO(e) {
      M1.push(e), ic || (ic = !0, P1(si, function() {
        return jo(), null;
      }));
    }
    function mO() {
      if ($u === null)
        return !1;
      var e = O1;
      O1 = null;
      var t = $u, a = xh;
      if ($u = null, xh = q, (ht & (xr | Si)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      L1 = !0, Hy = !1, Kv(a);
      var l = ht;
      ht |= Si, zM(t.current), OM(t, t.current, a, e);
      {
        var s = M1;
        M1 = [];
        for (var d = 0; d < s.length; d++) {
          var v = s[d];
          yM(t, v);
        }
      }
      xs(), lT(t.current, !0), ht = l, ju(), Hy ? t === Yy ? ld++ : (ld = 0, Yy = t) : ld = 0, L1 = !1, Hy = !1, El(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function rT(e) {
      return id !== null && id.has(e);
    }
    function yO(e) {
      id === null ? id = /* @__PURE__ */ new Set([e]) : id.add(e);
    }
    function gO(e) {
      Fy || (Fy = !0, k1 = e);
    }
    var SO = gO;
    function aT(e, t, a) {
      var l = nc(a, t), s = tC(e, l, Be), d = Hu(e, s, Be), v = sa();
      d !== null && (yo(d, Be, v), Ua(d, v));
    }
    function Gt(e, t, a) {
      if (cM(a), Mh(!1), e.tag === N) {
        aT(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === N) {
          aT(l, e, a);
          return;
        } else if (l.tag === R) {
          var s = l.type, d = l.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !rT(d)) {
            var v = nc(a, e), S = a1(l, v, Be), _ = Hu(l, S, Be), C = sa();
            _ !== null && (yo(_, Be, C), Ua(_, C));
            return;
          }
        }
        l = l.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function EO(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var s = sa();
      mp(e, a), kO(e), ua === e && mo(Xn, a) && (Jn === Eh || Jn === zy && hf(Xn) && en() - D1 < BC ? lc(e, q) : jy = et(jy, a)), Ua(e, s);
    }
    function iT(e, t) {
      t === pt && (t = eO(e));
      var a = sa(), l = Oa(e, t);
      l !== null && (yo(l, t, a), Ua(l, a));
    }
    function _O(e) {
      var t = e.memoizedState, a = pt;
      t !== null && (a = t.retryLane), iT(e, a);
    }
    function wO(e, t) {
      var a = pt, l;
      switch (e.tag) {
        case se:
          l = e.stateNode;
          var s = e.memoizedState;
          s !== null && (a = s.retryLane);
          break;
        case ut:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), iT(e, a);
    }
    function CO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ZM(e / 1960) * 1960;
    }
    function TO() {
      if (bh > XM)
        throw bh = 0, N1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > JM && (ld = 0, Yy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function xO() {
      Wi.flushLegacyContextWarning(), Wi.flushPendingUnsafeLifecycleWarnings();
    }
    function lT(e, t) {
      Lt(e), Wy(e, zr, BM), t && Wy(e, io, WM), Wy(e, zr, VM), t && Wy(e, io, IM), Cn();
    }
    function Wy(e, t, a) {
      for (var l = e, s = null; l !== null; ) {
        var d = l.subtreeFlags & t;
        l !== s && l.child !== null && d !== ze ? l = l.child : ((l.flags & t) !== ze && a(l), l.sibling !== null ? l = l.sibling : l = s = l.return);
      }
    }
    var $y = null;
    function oT(e) {
      {
        if ((ht & xr) !== Kn || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== z && t !== N && t !== R && t !== b && t !== ie && t !== J && t !== oe)
          return;
        var a = Xe(e) || "ReactComponent";
        if ($y !== null) {
          if ($y.has(a))
            return;
          $y.add(a);
        } else
          $y = /* @__PURE__ */ new Set([a]);
        var l = mn;
        try {
          Lt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Lt(e) : Cn();
        }
      }
    }
    var F1;
    {
      var bO = null;
      F1 = function(e, t, a) {
        var l = vT(bO, t);
        try {
          return EC(e, t, a);
        } catch (d) {
          if (HD() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Km(), Dw(), bC(e, t), vT(t, l), t.mode & Ve && XS(t), ao(null, EC, null, e, t, a), qg()) {
            var s = qd();
            typeof s == "object" && s !== null && s._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var uT = !1, H1;
    H1 = /* @__PURE__ */ new Set();
    function RO(e) {
      if (ma && !Ek())
        switch (e.tag) {
          case b:
          case ie:
          case oe: {
            var t = hn && Xe(hn) || "Unknown", a = t;
            if (!H1.has(a)) {
              H1.add(a);
              var l = Xe(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case R: {
            uT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), uT = !0);
            break;
          }
        }
    }
    function kh(e, t) {
      if (Wn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          gp(e, l, t);
        });
      }
    }
    var Y1 = {};
    function P1(e, t) {
      {
        var a = Ji.current;
        return a !== null ? (a.push(t), Y1) : Pc(e, t);
      }
    }
    function sT(e) {
      if (e !== Y1)
        return Vv(e);
    }
    function cT() {
      return Ji.current !== null;
    }
    function DO(e) {
      {
        if (e.mode & lt) {
          if (!PC())
            return;
        } else if (!qM() || ht !== Kn || e.tag !== b && e.tag !== ie && e.tag !== oe)
          return;
        if (Ji.current === null) {
          var t = mn;
          try {
            Lt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Lt(e) : Cn();
          }
        }
      }
    }
    function kO(e) {
      e.tag !== Au && PC() && Ji.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Mh(e) {
      GC = e;
    }
    var Ei = null, od = null, MO = function(e) {
      Ei = e;
    };
    function ud(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        return t === void 0 ? e : t.current;
      }
    }
    function V1(e) {
      return ud(e);
    }
    function I1(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ud(e.render);
            if (e.render !== a) {
              var l = {
                $$typeof: Fe,
                render: a
              };
              return e.displayName !== void 0 && (l.displayName = e.displayName), l;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function fT(e, t) {
      {
        if (Ei === null)
          return !1;
        var a = e.elementType, l = t.type, s = !1, d = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof l == "function" && (s = !0);
            break;
          }
          case b: {
            (typeof l == "function" || d === Pe) && (s = !0);
            break;
          }
          case ie: {
            (d === Fe || d === Pe) && (s = !0);
            break;
          }
          case J:
          case oe: {
            (d === rt || d === Pe) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var v = Ei(a);
          if (v !== void 0 && v === Ei(l))
            return !0;
        }
        return !1;
      }
    }
    function dT(e) {
      {
        if (Ei === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var OO = function(e, t) {
      {
        if (Ei === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        jo(), Ao(function() {
          B1(e.current, l, a);
        });
      }
    }, NO = function(e, t) {
      {
        if (e.context !== Ka)
          return;
        jo(), Ao(function() {
          Oh(t, e, null, null);
        });
      }
    };
    function B1(e, t, a) {
      {
        var l = e.alternate, s = e.child, d = e.sibling, v = e.tag, S = e.type, _ = null;
        switch (v) {
          case b:
          case oe:
          case R:
            _ = S;
            break;
          case ie:
            _ = S.render;
            break;
        }
        if (Ei === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, T = !1;
        if (_ !== null) {
          var U = Ei(_);
          U !== void 0 && (a.has(U) ? T = !0 : t.has(U) && (v === R ? T = !0 : C = !0));
        }
        if (od !== null && (od.has(e) || l !== null && od.has(l)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var O = Oa(e, Be);
          O !== null && er(O, e, Be, Ht);
        }
        s !== null && !T && B1(s, t, a), d !== null && B1(d, t, a);
      }
    }
    var LO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(s) {
          return s.current;
        }));
        return W1(e.current, l, a), a;
      }
    };
    function W1(e, t, a) {
      {
        var l = e.child, s = e.sibling, d = e.tag, v = e.type, S = null;
        switch (d) {
          case b:
          case oe:
          case R:
            S = v;
            break;
          case ie:
            S = v.render;
            break;
        }
        var _ = !1;
        S !== null && t.has(S) && (_ = !0), _ ? UO(e, a) : l !== null && W1(l, t, a), s !== null && W1(s, t, a);
      }
    }
    function UO(e, t) {
      {
        var a = zO(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case $:
              t.add(l.stateNode);
              return;
            case W:
              t.add(l.stateNode.containerInfo);
              return;
            case N:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function zO(e, t) {
      for (var a = e, l = !1; ; ) {
        if (a.tag === $)
          l = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return l;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return l;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var $1;
    {
      $1 = !1;
      try {
        var pT = Object.preventExtensions({});
      } catch {
        $1 = !0;
      }
    }
    function AO(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = ze, this.subtreeFlags = ze, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !$1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Xa = function(e, t, a, l) {
      return new AO(e, t, a, l);
    };
    function G1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function jO(e) {
      return typeof e == "function" && !G1(e) && e.defaultProps === void 0;
    }
    function FO(e) {
      if (typeof e == "function")
        return G1(e) ? R : b;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Fe)
          return ie;
        if (t === rt)
          return J;
      }
      return z;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = Xa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ze, a.subtreeFlags = ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case z:
        case b:
        case oe:
          a.type = ud(e.type);
          break;
        case R:
          a.type = V1(e.type);
          break;
        case ie:
          a.type = I1(e.type);
          break;
      }
      return a;
    }
    function HO(e, t) {
      e.flags &= Bn | It;
      var a = e.alternate;
      if (a === null)
        e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = ze, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ze, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var l = a.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function YO(e, t, a) {
      var l;
      return e === Im ? (l = lt, t === !0 && (l |= tn, l |= Ta)) : l = He, Wn && (l |= Ve), Xa(N, null, null, l);
    }
    function Q1(e, t, a, l, s, d) {
      var v = z, S = e;
      if (typeof e == "function")
        G1(e) ? (v = R, S = V1(S)) : S = ud(S);
      else if (typeof e == "string")
        v = $;
      else
        e:
          switch (e) {
            case Va:
              return qu(a.children, s, d, t);
            case ll:
              v = ke, s |= tn, (s & lt) !== He && (s |= Ta);
              break;
            case k:
              return PO(a, s, d, t);
            case nt:
              return VO(a, s, d, t);
            case mt:
              return IO(a, s, d, t);
            case qt:
              return hT(a, s, d, t);
            case mr:
            case Ln:
            case ol:
            case mc:
            case Qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ee:
                    v = ae;
                    break e;
                  case ve:
                    v = Te;
                    break e;
                  case Fe:
                    v = ie, S = I1(S);
                    break e;
                  case rt:
                    v = J;
                    break e;
                  case Pe:
                    v = Qe, S = null;
                    break e;
                }
              var _ = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = l ? Xe(l) : null;
                C && (_ += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + _));
            }
          }
      var T = Xa(v, a, t, s);
      return T.elementType = e, T.type = S, T.lanes = d, T._debugOwner = l, T;
    }
    function q1(e, t, a) {
      var l = null;
      l = e._owner;
      var s = e.type, d = e.key, v = e.props, S = Q1(s, d, v, l, t, a);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function qu(e, t, a, l) {
      var s = Xa(ne, e, l, t);
      return s.lanes = a, s;
    }
    function PO(e, t, a, l) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Xa(fe, e, l, t | Ve);
      return s.elementType = k, s.lanes = a, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function VO(e, t, a, l) {
      var s = Xa(se, e, l, t);
      return s.elementType = nt, s.lanes = a, s;
    }
    function IO(e, t, a, l) {
      var s = Xa(ut, e, l, t);
      return s.elementType = mt, s.lanes = a, s;
    }
    function hT(e, t, a, l) {
      var s = Xa(Ie, e, l, t);
      s.elementType = qt, s.lanes = a;
      var d = {
        isHidden: !1
      };
      return s.stateNode = d, s;
    }
    function Z1(e, t, a) {
      var l = Xa(Y, e, null, t);
      return l.lanes = a, l;
    }
    function BO() {
      var e = Xa($, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function WO(e) {
      var t = Xa(Ke, null, null, He);
      return t.stateNode = e, t;
    }
    function K1(e, t, a) {
      var l = e.children !== null ? e.children : [], s = Xa(W, l, e.key, t);
      return s.lanes = a, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function vT(e, t) {
      return e === null && (e = Xa(z, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function $O(e, t, a, l, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = N0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = pt, this.eventTimes = mf(q), this.expirationTimes = mf(Ht), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = mf(q), this.identifierPrefix = l, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Wt; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Au:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function mT(e, t, a, l, s, d, v, S, _, C) {
      var T = new $O(e, t, a, S, _), U = YO(t, d);
      T.current = U, U.stateNode = T;
      {
        var O = {
          element: l,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = O;
      }
      return iS(U), T;
    }
    var X1 = "18.2.0";
    function GO(e, t, a) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Fa(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Jr,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var J1, eE;
    J1 = !1, eE = {};
    function yT(e) {
      if (!e)
        return Ka;
      var t = Sa(e), a = MD(t);
      if (t.tag === R) {
        var l = t.type;
        if (Ll(l))
          return I_(t, l, a);
      }
      return a;
    }
    function QO(e, t) {
      {
        var a = Sa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var s = Ca(a);
        if (s === null)
          return null;
        if (s.mode & tn) {
          var d = Xe(a) || "Component";
          if (!eE[d]) {
            eE[d] = !0;
            var v = mn;
            try {
              Lt(s), a.mode & tn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Lt(v) : Cn();
            }
          }
        }
        return s.stateNode;
      }
    }
    function gT(e, t, a, l, s, d, v, S) {
      var _ = !1, C = null;
      return mT(e, t, _, C, a, l, s, d, v);
    }
    function ST(e, t, a, l, s, d, v, S, _, C) {
      var T = !0, U = mT(a, l, T, e, s, d, v, S, _);
      U.context = yT(null);
      var O = U.current, V = sa(), I = Gu(O), G = No(V, I);
      return G.callback = t ?? null, Hu(O, G, I), tO(U, I, V), U;
    }
    function Oh(e, t, a, l) {
      Bv(t, e);
      var s = t.current, d = sa(), v = Gu(s);
      oo(v);
      var S = yT(a);
      t.context === null ? t.context = S : t.pendingContext = S, ma && mn !== null && !J1 && (J1 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(mn) || "Unknown"));
      var _ = No(d, v);
      _.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), _.callback = l);
      var C = Hu(s, _, v);
      return C !== null && (er(C, s, v, d), ny(C, s, v)), v;
    }
    function Gy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case $:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function qO(e) {
      switch (e.tag) {
        case N: {
          var t = e.stateNode;
          if (Rn(t)) {
            var a = Xg(t);
            iO(t, a);
          }
          break;
        }
        case se: {
          Ao(function() {
            var s = Oa(e, Be);
            if (s !== null) {
              var d = sa();
              er(s, e, Be, d);
            }
          });
          var l = Be;
          tE(e, l);
          break;
        }
      }
    }
    function ET(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nm(a.retryLane, t));
    }
    function tE(e, t) {
      ET(e, t);
      var a = e.alternate;
      a && ET(a, t);
    }
    function ZO(e) {
      if (e.tag === se) {
        var t = hu, a = Oa(e, t);
        if (a !== null) {
          var l = sa();
          er(a, e, t, l);
        }
        tE(e, t);
      }
    }
    function KO(e) {
      if (e.tag === se) {
        var t = Gu(e), a = Oa(e, t);
        if (a !== null) {
          var l = sa();
          er(a, e, t, l);
        }
        tE(e, t);
      }
    }
    function _T(e) {
      var t = Pv(e);
      return t === null ? null : t.stateNode;
    }
    var wT = function(e) {
      return null;
    };
    function XO(e) {
      return wT(e);
    }
    var CT = function(e) {
      return !1;
    };
    function JO(e) {
      return CT(e);
    }
    var TT = null, xT = null, bT = null, RT = null, DT = null, kT = null, MT = null, OT = null, NT = null;
    {
      var LT = function(e, t, a) {
        var l = t[a], s = Un(e) ? e.slice() : st({}, e);
        return a + 1 === t.length ? (Un(s) ? s.splice(l, 1) : delete s[l], s) : (s[l] = LT(e[l], t, a + 1), s);
      }, UT = function(e, t) {
        return LT(e, t, 0);
      }, zT = function(e, t, a, l) {
        var s = t[l], d = Un(e) ? e.slice() : st({}, e);
        if (l + 1 === t.length) {
          var v = a[l];
          d[v] = d[s], Un(d) ? d.splice(s, 1) : delete d[s];
        } else
          d[s] = zT(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            a,
            l + 1
          );
        return d;
      }, AT = function(e, t, a) {
        if (t.length !== a.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return zT(e, t, a, 0);
      }, jT = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var s = t[a], d = Un(e) ? e.slice() : st({}, e);
        return d[s] = jT(e[s], t, a + 1, l), d;
      }, FT = function(e, t, a) {
        return jT(e, t, 0, a);
      }, nE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      TT = function(e, t, a, l) {
        var s = nE(e, t);
        if (s !== null) {
          var d = FT(s.memoizedState, a, l);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = st({}, e.memoizedProps);
          var v = Oa(e, Be);
          v !== null && er(v, e, Be, Ht);
        }
      }, xT = function(e, t, a) {
        var l = nE(e, t);
        if (l !== null) {
          var s = UT(l.memoizedState, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var d = Oa(e, Be);
          d !== null && er(d, e, Be, Ht);
        }
      }, bT = function(e, t, a, l) {
        var s = nE(e, t);
        if (s !== null) {
          var d = AT(s.memoizedState, a, l);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = st({}, e.memoizedProps);
          var v = Oa(e, Be);
          v !== null && er(v, e, Be, Ht);
        }
      }, RT = function(e, t, a) {
        e.pendingProps = FT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Oa(e, Be);
        l !== null && er(l, e, Be, Ht);
      }, DT = function(e, t) {
        e.pendingProps = UT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Oa(e, Be);
        a !== null && er(a, e, Be, Ht);
      }, kT = function(e, t, a) {
        e.pendingProps = AT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Oa(e, Be);
        l !== null && er(l, e, Be, Ht);
      }, MT = function(e) {
        var t = Oa(e, Be);
        t !== null && er(t, e, Be, Ht);
      }, OT = function(e) {
        wT = e;
      }, NT = function(e) {
        CT = e;
      };
    }
    function eN(e) {
      var t = Ca(e);
      return t === null ? null : t.stateNode;
    }
    function tN(e) {
      return null;
    }
    function nN() {
      return mn;
    }
    function rN(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return ap({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: TT,
        overrideHookStateDeletePath: xT,
        overrideHookStateRenamePath: bT,
        overrideProps: RT,
        overridePropsDeletePath: DT,
        overridePropsRenamePath: kT,
        setErrorHandler: OT,
        setSuspenseHandler: NT,
        scheduleUpdate: MT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: eN,
        findFiberByHostInstance: t || tN,
        // React Refresh
        findHostInstancesForRefresh: LO,
        scheduleRefresh: OO,
        scheduleRoot: NO,
        setRefreshHandler: MO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: nN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: X1
      });
    }
    var HT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function rE(e) {
      this._internalRoot = e;
    }
    Qy.prototype.render = rE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : qy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== yn) {
          var l = _T(t.current);
          l && l.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Oh(e, t, null, null);
    }, Qy.prototype.unmount = rE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        KC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ao(function() {
          Oh(null, e, null, null);
        }), F_(t);
      }
    };
    function aN(e, t) {
      if (!qy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YT(e);
      var a = !1, l = !1, s = "", d = HT;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === il && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = gT(e, Im, null, a, l, s, d);
      Am(v.current, e);
      var S = e.nodeType === yn ? e.parentNode : e;
      return Hp(S), new rE(v);
    }
    function Qy(e) {
      this._internalRoot = e;
    }
    function iN(e) {
      e && cm(e);
    }
    Qy.prototype.unstable_scheduleHydration = iN;
    function lN(e, t, a) {
      if (!qy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, s = a != null && a.hydratedSources || null, d = !1, v = !1, S = "", _ = HT;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError));
      var C = ST(t, null, e, Im, l, d, v, S, _);
      if (Am(C.current, e), Hp(e), s)
        for (var T = 0; T < s.length; T++) {
          var U = s[T];
          hk(C, U);
        }
      return new Qy(C);
    }
    function qy(e) {
      return !!(e && (e.nodeType === Nr || e.nodeType === $a || e.nodeType === Xl || !Ct));
    }
    function Nh(e) {
      return !!(e && (e.nodeType === Nr || e.nodeType === $a || e.nodeType === Xl || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YT(e) {
      e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var oN = c.ReactCurrentOwner, PT;
    PT = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = _T(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = aE(e), s = !!(l && Uu(l));
      s && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function aE(e) {
      return e ? e.nodeType === $a ? e.documentElement : e.firstChild : null;
    }
    function VT() {
    }
    function uN(e, t, a, l, s) {
      if (s) {
        if (typeof l == "function") {
          var d = l;
          l = function() {
            var O = Gy(v);
            d.call(O);
          };
        }
        var v = ST(
          t,
          l,
          e,
          Au,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          VT
        );
        e._reactRootContainer = v, Am(v.current, e);
        var S = e.nodeType === yn ? e.parentNode : e;
        return Hp(S), Ao(), v;
      } else {
        for (var _; _ = e.lastChild; )
          e.removeChild(_);
        if (typeof l == "function") {
          var C = l;
          l = function() {
            var O = Gy(T);
            C.call(O);
          };
        }
        var T = gT(
          e,
          Au,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          VT
        );
        e._reactRootContainer = T, Am(T.current, e);
        var U = e.nodeType === yn ? e.parentNode : e;
        return Hp(U), Ao(function() {
          Oh(t, T, a, l);
        }), T;
      }
    }
    function sN(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Zy(e, t, a, l, s) {
      PT(a), sN(s === void 0 ? null : s, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = uN(a, t, e, s, l);
      else {
        if (v = d, typeof s == "function") {
          var S = s;
          s = function() {
            var _ = Gy(v);
            S.call(_);
          };
        }
        Oh(t, v, e, s);
      }
      return Gy(v);
    }
    function cN(e) {
      {
        var t = oN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Nr ? e : QO(e, "findDOMNode");
    }
    function fN(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Zp(t) && t._reactRootContainer === void 0;
        l && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Zy(null, e, t, !0, a);
    }
    function dN(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Zp(t) && t._reactRootContainer === void 0;
        l && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Zy(null, e, t, !1, a);
    }
    function pN(e, t, a, l) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ws(e))
        throw new Error("parentComponent must be a valid React Component");
      return Zy(e, t, a, !1, l);
    }
    function hN(e) {
      if (!Nh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = aE(e), l = a && !Uu(a);
          l && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ao(function() {
          Zy(null, null, e, !1, function() {
            e._reactRootContainer = null, F_(e);
          });
        }), !0;
      } else {
        {
          var s = aE(e), d = !!(s && Uu(s)), v = e.nodeType === Nr && Nh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ce(qO), am(ZO), js(KO), _p(ba), lm(Us), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Fv(yR), Ac(z1, lO, Ao);
    function vN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qy(t))
        throw new Error("Target container is not a DOM element.");
      return GO(e, t, null, a);
    }
    function mN(e, t, a, l) {
      return pN(e, t, a, l);
    }
    var iE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uu, Hf, jm, zc, Ss, z1]
    };
    function yN(e, t) {
      return iE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), aN(e, t);
    }
    function gN(e, t, a) {
      return iE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lN(e, t, a);
    }
    function SN(e) {
      return KC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ao(e);
    }
    var EN = rN({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: X1,
      rendererPackageName: "react-dom"
    });
    if (!EN && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var IT = window.location.protocol;
      /^(https?|file):$/.test(IT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (IT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE, Aa.createPortal = vN, Aa.createRoot = yN, Aa.findDOMNode = cN, Aa.flushSync = SN, Aa.hydrate = fN, Aa.hydrateRoot = gN, Aa.render = dN, Aa.unmountComponentAtNode = hN, Aa.unstable_batchedUpdates = z1, Aa.unstable_renderSubtreeIntoContainer = mN, Aa.version = X1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Aa;
}
function Lb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lb);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (Lb(), UE.exports = QA()) : UE.exports = qA();
var ZA = UE.exports;
const vx = (i) => {
  let u;
  const c = /* @__PURE__ */ new Set(), p = (b, R) => {
    const z = typeof b == "function" ? b(u) : b;
    if (!Object.is(z, u)) {
      const N = u;
      u = R ?? typeof z != "object" ? z : Object.assign({}, u, z), c.forEach((W) => W(u, N));
    }
  }, m = () => u, D = { setState: p, getState: m, subscribe: (b) => (c.add(b), () => c.delete(b)), destroy: () => {
    c.clear();
  } };
  return u = i(p, m, D), D;
}, KA = (i) => i ? vx(i) : vx;
var zE = { exports: {} }, vE = {}, tg = { exports: {} }, mE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mx;
function XA() {
  if (mx)
    return mE;
  mx = 1;
  var i = Wo;
  function u(N, W) {
    return N === W && (N !== 0 || 1 / N === 1 / W) || N !== N && W !== W;
  }
  var c = typeof Object.is == "function" ? Object.is : u, p = i.useState, m = i.useEffect, E = i.useLayoutEffect, g = i.useDebugValue;
  function D(N, W) {
    var $ = W(), Y = p({ inst: { value: $, getSnapshot: W } }), ne = Y[0].inst, ke = Y[1];
    return E(function() {
      ne.value = $, ne.getSnapshot = W, b(ne) && ke({ inst: ne });
    }, [N, $, W]), m(function() {
      return b(ne) && ke({ inst: ne }), N(function() {
        b(ne) && ke({ inst: ne });
      });
    }, [N]), g($), $;
  }
  function b(N) {
    var W = N.getSnapshot;
    N = N.value;
    try {
      var $ = W();
      return !c(N, $);
    } catch {
      return !0;
    }
  }
  function R(N, W) {
    return W();
  }
  var z = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? R : D;
  return mE.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : z, mE;
}
var yE = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yx;
function JA() {
  return yx || (yx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Wo, u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(ie) {
      {
        for (var fe = arguments.length, se = new Array(fe > 1 ? fe - 1 : 0), J = 1; J < fe; J++)
          se[J - 1] = arguments[J];
        p("error", ie, se);
      }
    }
    function p(ie, fe, se) {
      {
        var J = u.ReactDebugCurrentFrame, oe = J.getStackAddendum();
        oe !== "" && (fe += "%s", se = se.concat([oe]));
        var Qe = se.map(function(at) {
          return String(at);
        });
        Qe.unshift("Warning: " + fe), Function.prototype.apply.call(console[ie], console, Qe);
      }
    }
    function m(ie, fe) {
      return ie === fe && (ie !== 0 || 1 / ie === 1 / fe) || ie !== ie && fe !== fe;
    }
    var E = typeof Object.is == "function" ? Object.is : m, g = i.useState, D = i.useEffect, b = i.useLayoutEffect, R = i.useDebugValue, z = !1, N = !1;
    function W(ie, fe, se) {
      z || i.startTransition !== void 0 && (z = !0, c("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var J = fe();
      if (!N) {
        var oe = fe();
        E(J, oe) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), N = !0);
      }
      var Qe = g({
        inst: {
          value: J,
          getSnapshot: fe
        }
      }), at = Qe[0].inst, Ke = Qe[1];
      return b(function() {
        at.value = J, at.getSnapshot = fe, $(at) && Ke({
          inst: at
        });
      }, [ie, J, fe]), D(function() {
        $(at) && Ke({
          inst: at
        });
        var ut = function() {
          $(at) && Ke({
            inst: at
          });
        };
        return ie(ut);
      }, [ie]), R(J), J;
    }
    function $(ie) {
      var fe = ie.getSnapshot, se = ie.value;
      try {
        var J = fe();
        return !E(se, J);
      } catch {
        return !0;
      }
    }
    function Y(ie, fe, se) {
      return fe();
    }
    var ne = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ke = !ne, Te = ke ? Y : W, ae = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Te;
    yE.useSyncExternalStore = ae, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yE;
}
var gx;
function Ub() {
  return gx || (gx = 1, process.env.NODE_ENV === "production" ? tg.exports = XA() : tg.exports = JA()), tg.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx;
function ej() {
  if (Sx)
    return vE;
  Sx = 1;
  var i = Wo, u = Ub();
  function c(R, z) {
    return R === z && (R !== 0 || 1 / R === 1 / z) || R !== R && z !== z;
  }
  var p = typeof Object.is == "function" ? Object.is : c, m = u.useSyncExternalStore, E = i.useRef, g = i.useEffect, D = i.useMemo, b = i.useDebugValue;
  return vE.useSyncExternalStoreWithSelector = function(R, z, N, W, $) {
    var Y = E(null);
    if (Y.current === null) {
      var ne = { hasValue: !1, value: null };
      Y.current = ne;
    } else
      ne = Y.current;
    Y = D(function() {
      function Te(J) {
        if (!ae) {
          if (ae = !0, ie = J, J = W(J), $ !== void 0 && ne.hasValue) {
            var oe = ne.value;
            if ($(oe, J))
              return fe = oe;
          }
          return fe = J;
        }
        if (oe = fe, p(ie, J))
          return oe;
        var Qe = W(J);
        return $ !== void 0 && $(oe, Qe) ? oe : (ie = J, fe = Qe);
      }
      var ae = !1, ie, fe, se = N === void 0 ? null : N;
      return [function() {
        return Te(z());
      }, se === null ? void 0 : function() {
        return Te(se());
      }];
    }, [z, N, W, $]);
    var ke = m(R, Y[0], Y[1]);
    return g(function() {
      ne.hasValue = !0, ne.value = ke;
    }, [ke]), b(ke), ke;
  }, vE;
}
var gE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ex;
function tj() {
  return Ex || (Ex = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Wo, u = Ub();
    function c(z, N) {
      return z === N && (z !== 0 || 1 / z === 1 / N) || z !== z && N !== N;
    }
    var p = typeof Object.is == "function" ? Object.is : c, m = u.useSyncExternalStore, E = i.useRef, g = i.useEffect, D = i.useMemo, b = i.useDebugValue;
    function R(z, N, W, $, Y) {
      var ne = E(null), ke;
      ne.current === null ? (ke = {
        hasValue: !1,
        value: null
      }, ne.current = ke) : ke = ne.current;
      var Te = D(function() {
        var se = !1, J, oe, Qe = function(kt) {
          if (!se) {
            se = !0, J = kt;
            var Ie = $(kt);
            if (Y !== void 0 && ke.hasValue) {
              var tt = ke.value;
              if (Y(tt, Ie))
                return oe = tt, tt;
            }
            return oe = Ie, Ie;
          }
          var Xt = J, Mt = oe;
          if (p(Xt, kt))
            return Mt;
          var _n = $(kt);
          return Y !== void 0 && Y(Mt, _n) ? Mt : (J = kt, oe = _n, _n);
        }, at = W === void 0 ? null : W, Ke = function() {
          return Qe(N());
        }, ut = at === null ? void 0 : function() {
          return Qe(at());
        };
        return [Ke, ut];
      }, [N, W, $, Y]), ae = Te[0], ie = Te[1], fe = m(z, ae, ie);
      return g(function() {
        ke.hasValue = !0, ke.value = fe;
      }, [fe]), b(fe), fe;
    }
    gE.useSyncExternalStoreWithSelector = R, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), gE;
}
process.env.NODE_ENV === "production" ? zE.exports = ej() : zE.exports = tj();
var nj = zE.exports;
const rj = /* @__PURE__ */ xN(nj), { useSyncExternalStoreWithSelector: aj } = rj;
function ij(i, u = i.getState, c) {
  const p = aj(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    u,
    c
  );
  return TN(p), p;
}
const _x = (i) => {
  const u = typeof i == "function" ? KA(i) : i, c = (p, m) => ij(u, p, m);
  return Object.assign(c, u), c;
}, lj = (i) => i ? _x(i) : _x, oj = (i, u) => (...c) => Object.assign({}, i, u(...c)), zb = lj(
  oj(
    {
      isOpen: !1,
      current: ""
    },
    (i) => ({
      openModal: (u) => i({ isOpen: !0, current: u }),
      closeModal: () => {
        const u = document.querySelector("#modal-root");
        u && (u.classList.add("closed"), setTimeout(() => {
          u.classList.remove("closed"), i({ isOpen: !1, current: "" });
        }, 190));
      }
    })
  )
), uj = ({
  children: i,
  currentName: u,
  variant: c = "neutral"
}) => {
  const { isOpen: p, current: m, closeModal: E } = zb(), g = document.querySelector("#modal-root"), D = tr(null);
  return hg(() => {
    p && D.current && D.current.focus();
  }, [p]), !p || u !== m ? null : g ? ZA.createPortal(
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: D,
        onKeyDown: (b) => {
          b.key === "Escape" && E();
        },
        className: "modal",
        children: [
          /* @__PURE__ */ P.jsx("div", { className: "modal-overlay", onClick: E }),
          /* @__PURE__ */ P.jsx("div", { className: `modal-body container rounded-box bg-${c}`, children: i })
        ]
      }
    ),
    g
  ) : null;
}, sj = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], cj = ({
  children: i,
  data: u,
  itemsPerPage: c = 30
}) => {
  const p = dc(() => u.length, [u]), [m, E] = Dr(1), [g, D] = Dr(c), b = dc(() => u.slice(
    (m - 1) * g,
    m * g
  ), [u, m, g]);
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsx("div", { className: "table-content custom-scroll", children: i({ data: b() }) }),
    /* @__PURE__ */ P.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: m === 1,
          onClick: () => E(1),
          children: /* @__PURE__ */ P.jsx(Rr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: m === 1,
          onClick: () => E((R) => R - 1),
          children: /* @__PURE__ */ P.jsx(Rr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ P.jsxs("span", { children: [
        "Página ",
        /* @__PURE__ */ P.jsx("span", { className: "page", children: m }),
        " de",
        " ",
        /* @__PURE__ */ P.jsx("span", { className: "page", children: Math.ceil(p() / g) })
      ] }),
      /* @__PURE__ */ P.jsx(
        IE,
        {
          items: sj,
          currentSelected: c,
          labelExtractor: (R) => `Por página ${R}`,
          keyExtractor: (R) => R,
          showQty: 3,
          position: "bottom",
          onChange: (R, z) => {
            const N = Math.ceil(p() / z), W = m * g, Y = (m > N ? N * z : m * z) / W, ne = Y !== 1 ? Math.floor(m / Y) : m;
            m > N ? E(N) : E(ne < 1 ? 1 : ne), D(z);
          }
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(p() / g) === m,
          onClick: () => E((R) => R + 1),
          children: /* @__PURE__ */ P.jsx(Rr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(p() / g) === m,
          onClick: () => E(Math.ceil(p() / g)),
          title: "Last Page",
          children: /* @__PURE__ */ P.jsx(Rr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ P.jsxs("span", { children: [
        p(),
        " itens"
      ] })
    ] })
  ] });
}, Ab = (i, u, c) => {
  let p;
  return (...m) => {
    const g = () => {
      p = null, c || i.apply(void 0, m);
    }, D = c && !p;
    clearTimeout(p), p = setTimeout(g, u), D && i.apply(void 0, m);
  };
}, fj = (i) => {
  const [u, c] = Dr(i ?? null), [p, m] = Dr({
    top: (u == null ? void 0 : u.scrollTop) ?? 0,
    scrollHeight: (u == null ? void 0 : u.scrollHeight) ?? 0,
    height: (u == null ? void 0 : u.clientHeight) ?? 0
  });
  return hg(() => {
    const E = () => {
      u && m({
        top: u.scrollTop,
        scrollHeight: u.scrollHeight,
        height: u.clientHeight
      });
    };
    if (u)
      return u == null || u.addEventListener("scroll", Ab(E, 150)), () => {
        u == null || u.removeEventListener("scroll", E);
      };
  }, [u]), u ? { ...p, scrollTo: u.scrollTo, root: u, setRoot: c, changeScrollData: m } : {
    top: 0,
    scrollHeight: 0,
    height: 0,
    scrollTo: () => {
    },
    root: u,
    setRoot: c,
    changeScrollData: m
  };
}, dj = ({
  children: i,
  data: u,
  tableContainerRef: c
}) => {
  const { height: p, scrollHeight: m, top: E, root: g, setRoot: D, changeScrollData: b } = fj(c == null ? void 0 : c.current), R = tr(0), z = tr(R.current * 2), N = 40, W = dc(() => c.current === null ? 10 : Math.ceil(c.current.clientHeight / N), [c]);
  hg(() => (g === null && D(c.current), R.current = W(), () => {
  }), [W, c, g, D, b]);
  const $ = dc(() => {
    let Y = 0;
    return g === null ? [] : (R.current < 10 && (R.current = W() * 2), Math.ceil(p + E) === m && (z.current += R.current, g.scrollTo({
      top: R.current * N
    })), z.current > R.current * 3 && E > 0 && (Y = z.current - R.current * 3), E === 0 && z.current > R.current * 3 && (z.current -= R.current, Y = z.current - R.current * 3, g.scrollTo({
      top: R.current * N
    })), u.slice(Y, z.current));
  }, [u, p, W, m, E, g, R]);
  return i({ data: $() });
}, pj = {
  scroll: dj,
  pagination: cj
}, hj = ({
  mode: i,
  children: u,
  data: c
}) => {
  const p = tr(null), m = pj[i];
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      className: `table-container ${i}`,
      ref: p,
      children: /* @__PURE__ */ P.jsx(m, { tableContainerRef: p, data: c, children: u })
    }
  );
}, vj = ({
  closeModal: i,
  config: u
}) => /* @__PURE__ */ P.jsxs(uj, { currentName: "table-config-modal", children: [
  u.map((c) => /* @__PURE__ */ P.jsxs("div", { className: "container row center", children: [
    /* @__PURE__ */ P.jsx("span", { children: c }),
    /* @__PURE__ */ P.jsx(IE, { variant: "base-300", items: ["Expected", "Overhelmed", "Below Expectation"] })
  ] }, c)),
  /* @__PURE__ */ P.jsx("button", { className: "btn btn-primary ring-info", onClick: i, children: "Save" })
] }), mj = ({
  index: i,
  columns: u,
  translation: c,
  column: p,
  ordersType: m,
  orderedHeader: E,
  order: g,
  setOrder: D,
  tBodyRef: b,
  mousePosition: R
}) => /* @__PURE__ */ P.jsx("th", { children: /* @__PURE__ */ P.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ P.jsx("span", { children: c(p) }),
  /* @__PURE__ */ P.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ P.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${m[g] === "asc" && E.current === p ? "active" : ""}`,
        onClick: () => {
          D(
            (z) => z === 1 && E.current === p ? 0 : 1
          ), E.current = p;
        },
        children: /* @__PURE__ */ P.jsx(Rr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ P.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${m[g] === "desc" && E.current === p ? "active" : ""}`,
        onClick: () => {
          D(
            (z) => z === 2 && E.current === p ? 0 : 2
          ), E.current = p;
        },
        children: /* @__PURE__ */ P.jsx(Rr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  u.length - 1 !== i && /* @__PURE__ */ P.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (z) => {
        R.current.startPosition = z.clientX;
      },
      onMouseMove: (z) => {
        var Y;
        if (b.current === null || R.current.startPosition === 0)
          return;
        R.current.currentPosition = z.clientX;
        const N = (Y = b.current.firstChild) == null ? void 0 : Y.childNodes[i];
        if (N === null)
          return;
        const W = N.getBoundingClientRect().width, $ = R.current.currentPosition - R.current.startPosition;
        N.style.width = `${W + $}px`, R.current.startPosition = R.current.currentPosition;
      },
      onMouseUp: () => {
        R.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onMouseLeave: () => {
        R.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onClick: (z) => {
        var W;
        if (z.detail < 2 || b.current === null)
          return;
        const N = (W = b.current.firstChild) == null ? void 0 : W.childNodes[i];
        N !== null && (N.style.width = "auto");
      },
      children: [
        /* @__PURE__ */ P.jsx("span", {}),
        /* @__PURE__ */ P.jsx("span", {})
      ]
    }
  )
] }) }), yj = (i, u, c = "asc") => {
  if (c === "default" || u === null)
    return i;
  const p = c === "asc" ? 1 : -1;
  return i.slice().sort((m, E) => {
    const g = m[u], D = E[u];
    return g < D ? -1 * p : g > D ? 1 * p : 0;
  });
}, wx = {
  qty: "Quantidade",
  name: "Nome",
  product: "Produto",
  person: "Pessoa",
  address: "Endereço",
  age: "Idade",
  page: "Página",
  "per-page": "Por página",
  of: "de",
  items: "Itens"
}, Cx = ["default", "asc", "desc"], kj = ({
  headers: i,
  data: u,
  // hideColumn = [],
  dataConfig: c,
  // headersConfig,
  mode: p = "pagination"
}) => {
  const { closeModal: m, openModal: E } = zb(), g = (Te) => Object.hasOwnProperty.call(wx, Te) ? wx[Te] : Te, [D] = Dr(p), [b, R] = Dr(0), z = tr(null), N = tr(null), W = tr({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [$, Y] = Dr(""), ne = dc(() => u.filter((Te) => {
    if ($.trim() === "")
      return u;
    const ae = $.toLowerCase().trim();
    return Object.entries(Te).some(([fe, se]) => {
      var J;
      return typeof se == "object" && Object.hasOwnProperty.call(c, fe) ? String((J = c == null ? void 0 : c[fe]) == null ? void 0 : J.call(c, se)).toLowerCase().includes(ae) : typeof se == "object" ? String(Object.values(se)[0]).toLowerCase().includes(ae) : String(se).toLowerCase().includes(ae);
    });
  }), [$, u, c]), ke = dc(() => yj(ne(), z.current, Cx[b]), [b, ne, z]);
  return /* @__PURE__ */ P.jsxs("div", { className: "table-full", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "group rounded-box no-print", children: [
      /* @__PURE__ */ P.jsx("label", { className: "bg-primary", htmlFor: "find-all-table", children: "Find" }),
      /* @__PURE__ */ P.jsx(
        "input",
        {
          className: "input input-neutral ring-info",
          id: "find-all-table",
          placeholder: "Type here to filter...",
          style: { flex: "1" },
          onChange: Ab((Te) => {
            Y(Te.target.value);
          }, 300)
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-primary btn-icon",
          style: { flex: "0" },
          onClick: () => E("table-config-modal"),
          children: /* @__PURE__ */ P.jsx(Rr, { icon: "mdi:filter" })
        }
      )
    ] }),
    /* @__PURE__ */ P.jsx(hj, { mode: D, data: ke(), children: ({ data: Te }) => Te.length === 0 ? null : /* @__PURE__ */ P.jsxs("table", { className: "table", children: [
      /* @__PURE__ */ P.jsx("thead", { children: /* @__PURE__ */ P.jsxs("tr", { children: [
        i && i.map((ae, ie) => /* @__PURE__ */ P.jsx("th", { children: ae }, ie)),
        i === void 0 && Object.keys(Te[0]).map((ae, ie) => /* @__PURE__ */ P.jsx(
          mj,
          {
            tBodyRef: N,
            mousePosition: W,
            orderedHeader: z,
            order: b,
            setOrder: R,
            column: ae,
            index: ie,
            columns: Object.keys(Te[0]),
            ordersType: Cx,
            translation: g
          },
          ie
        ))
      ] }) }),
      /* @__PURE__ */ P.jsx("tbody", { ref: N, children: Te.map((ae, ie) => /* @__PURE__ */ P.jsx("tr", { tabIndex: 0, children: Object.entries(ae).map(([fe, se], J) => {
        var Qe;
        let oe;
        return typeof se == "object" && (c == null ? void 0 : c[fe]) === void 0 ? oe = Object.values(se)[0] : Object.hasOwnProperty.call(c ?? {}, fe) ? oe = (Qe = c == null ? void 0 : c[fe]) == null ? void 0 : Qe.call(c, se) : oe = se, /* @__PURE__ */ P.jsx(
          "td",
          {
            title: "Click to copy",
            style: { width: "auto" },
            children: typeof se != "object" ? oe : /* @__PURE__ */ P.jsx("div", { className: "cell-container", children: /* @__PURE__ */ P.jsxs("div", { className: "cell-container--header", children: [
              /* @__PURE__ */ P.jsx("span", { children: oe }),
              /* @__PURE__ */ P.jsx(
                "button",
                {
                  className: "btn btn-primary btn-icon btn-xs btn-square",
                  onClick: (at) => {
                    var kt;
                    const Ke = (kt = at.currentTarget.parentNode) == null ? void 0 : kt.parentNode;
                    if (Ke === null)
                      return;
                    if (Ke.lastChild.className === "content") {
                      Ke.removeChild(
                        Ke.lastChild
                      );
                      return;
                    }
                    const ut = document.createElement("ul");
                    ut.className = "content", Object.entries(se).forEach(
                      ([Ie, tt]) => {
                        const Xt = document.createElement("li");
                        Xt.innerText = `${g(
                          Ie
                        )}: ${tt}`, ut.appendChild(Xt);
                      }
                    ), Ke.appendChild(
                      ut
                    );
                  },
                  children: /* @__PURE__ */ P.jsx(Rr, { icon: "eva:arrow-down-fill" })
                }
              )
            ] }) })
          },
          J
        );
      }) }, ie)) })
    ] }) }),
    /* @__PURE__ */ P.jsx(vj, { config: Object.keys(u[0]), closeModal: m })
  ] });
};
export {
  Cj as Chart,
  xj as DateRangePicker,
  bj as DetailedWorkDay,
  Rj as Header,
  uj as Modal,
  IE as Select,
  Tj as ShowPassword,
  Dj as Sidebar,
  kj as Table,
  LL as Textfield,
  Ab as debounce,
  zb as useModal,
  fj as useScroll
};
