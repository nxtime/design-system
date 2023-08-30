import kr, { useRef as tr, useState as Dr, useCallback as dc, useEffect as Cg, Fragment as bL, useDebugValue as RL } from "react";
import _i from "moment";
function DL(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var LE = { exports: {} }, Ah = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gT;
function kL() {
  if (gT)
    return Ah;
  gT = 1;
  var i = kr, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(C, T, R) {
    var k, O = {}, j = null, G = null;
    R !== void 0 && (j = "" + R), T.key !== void 0 && (j = "" + T.key), T.ref !== void 0 && (G = T.ref);
    for (k in T)
      d.call(T, k) && !S.hasOwnProperty(k) && (O[k] = T[k]);
    if (C && C.defaultProps)
      for (k in T = C.defaultProps, T)
        O[k] === void 0 && (O[k] = T[k]);
    return { $$typeof: o, type: C, key: j, ref: G, props: O, _owner: h.current };
  }
  return Ah.Fragment = c, Ah.jsx = m, Ah.jsxs = m, Ah;
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
var ST;
function ML() {
  return ST || (ST = 1, process.env.NODE_ENV !== "production" && function() {
    var i = kr, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), C = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), z = Symbol.iterator, J = "@@iterator";
    function he(M) {
      if (M === null || typeof M != "object")
        return null;
      var ae = z && M[z] || M[J];
      return typeof ae == "function" ? ae : null;
    }
    var ge = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(M) {
      {
        for (var ae = arguments.length, me = new Array(ae > 1 ? ae - 1 : 0), Pe = 1; Pe < ae; Pe++)
          me[Pe - 1] = arguments[Pe];
        re("error", M, me);
      }
    }
    function re(M, ae, me) {
      {
        var Pe = ge.ReactDebugCurrentFrame, rt = Pe.getStackAddendum();
        rt !== "" && (ae += "%s", me = me.concat([rt]));
        var mt = me.map(function(at) {
          return String(at);
        });
        mt.unshift("Warning: " + ae), Function.prototype.apply.call(console[M], console, mt);
      }
    }
    var se = !1, ce = !1, W = !1, ee = !1, Me = !1, He;
    He = Symbol.for("react.module.reference");
    function Qe(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === d || M === S || Me || M === h || M === R || M === k || ee || M === G || se || ce || W || typeof M == "object" && M !== null && (M.$$typeof === j || M.$$typeof === O || M.$$typeof === m || M.$$typeof === C || M.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === He || M.getModuleId !== void 0));
    }
    function it(M, ae, me) {
      var Pe = M.displayName;
      if (Pe)
        return Pe;
      var rt = ae.displayName || ae.name || "";
      return rt !== "" ? me + "(" + rt + ")" : me;
    }
    function Mt(M) {
      return M.displayName || "Context";
    }
    function Be(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case d:
          return "Fragment";
        case c:
          return "Portal";
        case S:
          return "Profiler";
        case h:
          return "StrictMode";
        case R:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case C:
            var ae = M;
            return Mt(ae) + ".Consumer";
          case m:
            var me = M;
            return Mt(me._context) + ".Provider";
          case T:
            return it(M, M.render, "ForwardRef");
          case O:
            var Pe = M.displayName || null;
            return Pe !== null ? Pe : Be(M.type) || "Memo";
          case j: {
            var rt = M, mt = rt._payload, at = rt._init;
            try {
              return Be(at(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ke = Object.assign, Qt = 0, gt, fn, fe, Ue, _e, St, Ct;
    function In() {
    }
    In.__reactDisabledLog = !0;
    function vr() {
      {
        if (Qt === 0) {
          gt = console.log, fn = console.info, fe = console.warn, Ue = console.error, _e = console.group, St = console.groupCollapsed, Ct = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: In,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        Qt++;
      }
    }
    function ri() {
      {
        if (Qt--, Qt === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, M, {
              value: gt
            }),
            info: Ke({}, M, {
              value: fn
            }),
            warn: Ke({}, M, {
              value: fe
            }),
            error: Ke({}, M, {
              value: Ue
            }),
            group: Ke({}, M, {
              value: _e
            }),
            groupCollapsed: Ke({}, M, {
              value: St
            }),
            groupEnd: Ke({}, M, {
              value: Ct
            })
          });
        }
        Qt < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _n = ge.ReactCurrentDispatcher, pa;
    function rr(M, ae, me) {
      {
        if (pa === void 0)
          try {
            throw Error();
          } catch (rt) {
            var Pe = rt.stack.trim().match(/\n( *(at )?)/);
            pa = Pe && Pe[1] || "";
          }
        return `
` + pa + M;
      }
    }
    var Mr = !1, ai;
    {
      var Or = typeof WeakMap == "function" ? WeakMap : Map;
      ai = new Or();
    }
    function ha(M, ae) {
      if (!M || Mr)
        return "";
      {
        var me = ai.get(M);
        if (me !== void 0)
          return me;
      }
      var Pe;
      Mr = !0;
      var rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = _n.current, _n.current = null, vr();
      try {
        if (ae) {
          var at = function() {
            throw Error();
          };
          if (Object.defineProperty(at.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(at, []);
            } catch (Et) {
              Pe = Et;
            }
            Reflect.construct(M, [], at);
          } else {
            try {
              at.call();
            } catch (Et) {
              Pe = Et;
            }
            M.call(at.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            Pe = Et;
          }
          M();
        }
      } catch (Et) {
        if (Et && Pe && typeof Et.stack == "string") {
          for (var Ve = Et.stack.split(`
`), Ln = Pe.stack.split(`
`), qt = Ve.length - 1, Zt = Ln.length - 1; qt >= 1 && Zt >= 0 && Ve[qt] !== Ln[Zt]; )
            Zt--;
          for (; qt >= 1 && Zt >= 0; qt--, Zt--)
            if (Ve[qt] !== Ln[Zt]) {
              if (qt !== 1 || Zt !== 1)
                do
                  if (qt--, Zt--, Zt < 0 || Ve[qt] !== Ln[Zt]) {
                    var mr = `
` + Ve[qt].replace(" at new ", " at ");
                    return M.displayName && mr.includes("<anonymous>") && (mr = mr.replace("<anonymous>", M.displayName)), typeof M == "function" && ai.set(M, mr), mr;
                  }
                while (qt >= 1 && Zt >= 0);
              break;
            }
        }
      } finally {
        Mr = !1, _n.current = mt, ri(), Error.prepareStackTrace = rt;
      }
      var ul = M ? M.displayName || M.name : "", yc = ul ? rr(ul) : "";
      return typeof M == "function" && ai.set(M, yc), yc;
    }
    function On(M, ae, me) {
      return ha(M, !1);
    }
    function ar(M) {
      var ae = M.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Vn(M, ae, me) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return ha(M, ar(M));
      if (typeof M == "string")
        return rr(M);
      switch (M) {
        case R:
          return rr("Suspense");
        case k:
          return rr("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case T:
            return On(M.render);
          case O:
            return Vn(M.type, ae, me);
          case j: {
            var Pe = M, rt = Pe._payload, mt = Pe._init;
            try {
              return Vn(mt(rt), ae, me);
            } catch {
            }
          }
        }
      return "";
    }
    var ir = Object.prototype.hasOwnProperty, lr = {}, va = ge.ReactDebugCurrentFrame;
    function Ha(M) {
      if (M) {
        var ae = M._owner, me = Vn(M.type, M._source, ae ? ae.type : null);
        va.setExtraStackFrame(me);
      } else
        va.setExtraStackFrame(null);
    }
    function bi(M, ae, me, Pe, rt) {
      {
        var mt = Function.call.bind(ir);
        for (var at in M)
          if (mt(M, at)) {
            var Ve = void 0;
            try {
              if (typeof M[at] != "function") {
                var Ln = Error((Pe || "React class") + ": " + me + " type `" + at + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[at] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Ve = M[at](ae, at, Pe, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              Ve = qt;
            }
            Ve && !(Ve instanceof Error) && (Ha(rt), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", me, at, typeof Ve), Ha(null)), Ve instanceof Error && !(Ve.message in lr) && (lr[Ve.message] = !0, Ha(rt), K("Failed %s type: %s", me, Ve.message), Ha(null));
          }
      }
    }
    var ii = Array.isArray;
    function Pa(M) {
      return ii(M);
    }
    function Zr(M) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, me = ae && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return me;
      }
    }
    function li(M) {
      try {
        return Kr(M), !1;
      } catch {
        return !0;
      }
    }
    function Kr(M) {
      return "" + M;
    }
    function Ya(M) {
      if (li(M))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zr(M)), Kr(M);
    }
    var mn = ge.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, il, Ia, ve;
    ve = {};
    function ze(M) {
      if (ir.call(M, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function lt(M) {
      if (ir.call(M, "key")) {
        var ae = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Ot(M, ae) {
      if (typeof M.ref == "string" && mn.current && ae && mn.current.stateNode !== ae) {
        var me = Be(mn.current.type);
        ve[me] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(mn.current.type), M.ref), ve[me] = !0);
      }
    }
    function Jt(M, ae) {
      {
        var me = function() {
          il || (il = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        me.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function Nn(M, ae) {
      {
        var me = function() {
          Ia || (Ia = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        me.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var dn = function(M, ae, me, Pe, rt, mt, at) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: M,
        key: ae,
        ref: me,
        props: at,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function Nr(M, ae, me, Pe, rt) {
      {
        var mt, at = {}, Ve = null, Ln = null;
        me !== void 0 && (Ya(me), Ve = "" + me), lt(ae) && (Ya(ae.key), Ve = "" + ae.key), ze(ae) && (Ln = ae.ref, Ot(ae, rt));
        for (mt in ae)
          ir.call(ae, mt) && !Xr.hasOwnProperty(mt) && (at[mt] = ae[mt]);
        if (M && M.defaultProps) {
          var qt = M.defaultProps;
          for (mt in qt)
            at[mt] === void 0 && (at[mt] = qt[mt]);
        }
        if (Ve || Ln) {
          var Zt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Ve && Jt(at, Zt), Ln && Nn(at, Zt);
        }
        return dn(M, Ve, Ln, rt, Pe, mn.current, at);
      }
    }
    var Pt = ge.ReactCurrentOwner, Jr = ge.ReactDebugCurrentFrame;
    function zt(M) {
      if (M) {
        var ae = M._owner, me = Vn(M.type, M._source, ae ? ae.type : null);
        Jr.setExtraStackFrame(me);
      } else
        Jr.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function Qo(M) {
      return typeof M == "object" && M !== null && M.$$typeof === o;
    }
    function Gl() {
      {
        if (Pt.current) {
          var M = Be(Pt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function qo(M) {
      {
        if (M !== void 0) {
          var ae = M.fileName.replace(/^.*[\\\/]/, ""), me = M.lineNumber;
          return `

Check your code at ` + ae + ":" + me + ".";
        }
        return "";
      }
    }
    var es = {};
    function mc(M) {
      {
        var ae = Gl();
        if (!ae) {
          var me = typeof M == "string" ? M : M.displayName || M.name;
          me && (ae = `

Check the top-level render call using <` + me + ">.");
        }
        return ae;
      }
    }
    function Ql(M, ae) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var me = mc(ae);
        if (es[me])
          return;
        es[me] = !0;
        var Pe = "";
        M && M._owner && M._owner !== Pt.current && (Pe = " It was passed a child from " + Be(M._owner.type) + "."), zt(M), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Pe), zt(null);
      }
    }
    function Zo(M, ae) {
      {
        if (typeof M != "object")
          return;
        if (Pa(M))
          for (var me = 0; me < M.length; me++) {
            var Pe = M[me];
            Qo(Pe) && Ql(Pe, ae);
          }
        else if (Qo(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var rt = he(M);
          if (typeof rt == "function" && rt !== M.entries)
            for (var mt = rt.call(M), at; !(at = mt.next()).done; )
              Qo(at.value) && Ql(at.value, ae);
        }
      }
    }
    function ql(M) {
      {
        var ae = M.type;
        if (ae == null || typeof ae == "string")
          return;
        var me;
        if (typeof ae == "function")
          me = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === O))
          me = ae.propTypes;
        else
          return;
        if (me) {
          var Pe = Be(ae);
          bi(me, M.props, "prop", Pe, M);
        } else if (ae.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var rt = Be(ae);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ko(M) {
      {
        for (var ae = Object.keys(M.props), me = 0; me < ae.length; me++) {
          var Pe = ae[me];
          if (Pe !== "children" && Pe !== "key") {
            zt(M), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), zt(null);
            break;
          }
        }
        M.ref !== null && (zt(M), K("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    function oi(M, ae, me, Pe, rt, mt) {
      {
        var at = Qe(M);
        if (!at) {
          var Ve = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = qo(rt);
          Ln ? Ve += Ln : Ve += Gl();
          var qt;
          M === null ? qt = "null" : Pa(M) ? qt = "array" : M !== void 0 && M.$$typeof === o ? (qt = "<" + (Be(M.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof M, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, Ve);
        }
        var Zt = Nr(M, ae, me, rt, mt);
        if (Zt == null)
          return Zt;
        if (at) {
          var mr = ae.children;
          if (mr !== void 0)
            if (Pe)
              if (Pa(mr)) {
                for (var ul = 0; ul < mr.length; ul++)
                  Zo(mr[ul], M);
                Object.freeze && Object.freeze(mr);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zo(mr, M);
        }
        return M === d ? Ko(Zt) : ql(Zt), Zt;
      }
    }
    function ll(M, ae, me) {
      return oi(M, ae, me, !0);
    }
    function ea(M, ae, me) {
      return oi(M, ae, me, !1);
    }
    var Va = ea, ol = ll;
    zh.Fragment = d, zh.jsx = Va, zh.jsxs = ol;
  }()), zh;
}
process.env.NODE_ENV === "production" ? LE.exports = kL() : LE.exports = ML();
var I = LE.exports;
function OL(i, o = 300) {
  let c;
  return function(...d) {
    clearTimeout(c), c = setTimeout(() => {
      i.apply(this, d);
    }, o);
  };
}
const gE = (i, o, c, d = !1) => {
  var m, C, T, R;
  const h = i.clientWidth, S = i.clientHeight;
  if ((m = o.current) == null || m.setAttribute("viewBox", `0 0 ${h} ${S}`), (C = o.current) == null || C.setAttribute("width", String(h)), !d) {
    (T = o.current) == null || T.setAttribute("height", String(S)), c({
      height: S,
      width: h
    });
    return;
  }
  (R = o.current) == null || R.setAttribute("height", String(S)), c((k) => ({
    ...k,
    width: h
  }));
}, k3 = ({
  type: i,
  width: o,
  height: c,
  hide: d,
  data: h,
  children: S,
  snap: m = !1
}) => {
  const C = tr(null), [T, R] = Dr({
    width: o ?? 0,
    height: c ?? 0
  }), k = tr(null), O = tr(null), j = dc(() => d ? [...h].filter((z) => (d.forEach((J) => delete z[J]), z)) : h, [d, h]);
  console.log(T), Cg(() => {
    var J;
    const z = (J = C == null ? void 0 : C.current) == null ? void 0 : J.parentNode;
    return window == null || window.addEventListener(
      "resize",
      OL(
        () => gE(z, C, R, c !== void 0)
      )
    ), (!o || !c) && gE(z, C, R, c !== void 0), () => z == null ? void 0 : z.removeEventListener(
      "resize",
      () => gE(z, C, () => {
      }, c !== void 0)
    );
  }, [R, o, c]);
  const G = Math.max(
    ...h.map((z) => Math.max(...Object.values(z)))
  );
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx(
      "div",
      {
        ref: k,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ I.jsxs(
      "svg",
      {
        ref: C,
        className: `chart ${i}`,
        viewBox: `0 0 ${o ?? 0} ${c ?? 0}`,
        width: T.width,
        height: T.height,
        onMouseMove: (z) => {
          if (O.current && C.current && k.current) {
            const J = O.current.style, he = z.clientX, ge = C.current.getBoundingClientRect().left, K = C.current.getBoundingClientRect().top;
            if (J.opacity = "1", m) {
              const ee = T.width / (h.length * 4), Me = Array.from({
                length: h.length
              }).map((it, Mt) => Math.abs(
                he - ge - ee * Mt - T.width / h.length * Mt
              )), He = Me.indexOf(
                Math.min(...Me)
              ), Qe = T.width / h.length * He + ee * He;
              J.transform = `translate(${Qe}px, 0px)`;
            } else
              J.transform = `translate(${z.clientX - ge}px, 0px)`, J.transition = "none";
            if (k.current.innerHTML === "") {
              k.current.style.opacity = "0";
              return;
            }
            const re = z.clientX - ge, se = k.current.clientWidth;
            k.current.style.opacity = "1";
            let ce = re + 20;
            const W = z.clientY - K + 20;
            k.current.offsetLeft + re + se + 20 > window.innerWidth && (ce = re - se - 20), k.current.style.transform = `translate(${ce}px, ${W}px)`;
          }
        },
        onMouseLeave: () => {
          k.current && O.current && (k.current.innerHTML = "", k.current.style.opacity = "0", O.current.style.opacity = "0");
        },
        children: [
          S({
            currentSize: T,
            tooltipRef: k,
            data: j(),
            maxItemValue: G,
            lineRef: O
          }),
          /* @__PURE__ */ I.jsx(
            "line",
            {
              ref: O,
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
var Ju = kr;
const Yh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Tg = (i, o, c, d = "") => {
  const h = i.split(":");
  if (i.slice(0, 1) === "@") {
    if (h.length < 2 || h.length > 3)
      return null;
    d = h.shift().slice(1);
  }
  if (h.length > 3 || !h.length)
    return null;
  if (h.length > 1) {
    const C = h.pop(), T = h.pop(), R = {
      // Allow provider without '@': "provider:prefix:name"
      provider: h.length > 0 ? h[0] : d,
      prefix: T,
      name: C
    };
    return o && !sg(R) ? null : R;
  }
  const S = h[0], m = S.split("-");
  if (m.length > 1) {
    const C = {
      provider: d,
      prefix: m.shift(),
      name: m.join("-")
    };
    return o && !sg(C) ? null : C;
  }
  if (c && d === "") {
    const C = {
      provider: d,
      prefix: "",
      name: S
    };
    return o && !sg(C, c) ? null : C;
  }
  return null;
}, sg = (i, o) => i ? !!((i.provider === "" || i.provider.match(Yh)) && (o && i.prefix === "" || i.prefix.match(Yh)) && i.name.match(Yh)) : !1, cb = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), mg = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), rw = Object.freeze({
  ...cb,
  ...mg
}), UE = Object.freeze({
  ...rw,
  body: "",
  hidden: !1
});
function NL(i, o) {
  const c = {};
  !i.hFlip != !o.hFlip && (c.hFlip = !0), !i.vFlip != !o.vFlip && (c.vFlip = !0);
  const d = ((i.rotate || 0) + (o.rotate || 0)) % 4;
  return d && (c.rotate = d), c;
}
function ET(i, o) {
  const c = NL(i, o);
  for (const d in UE)
    d in mg ? d in i && !(d in c) && (c[d] = mg[d]) : d in o ? c[d] = o[d] : d in i && (c[d] = i[d]);
  return c;
}
function LL(i, o) {
  const c = i.icons, d = i.aliases || /* @__PURE__ */ Object.create(null), h = /* @__PURE__ */ Object.create(null);
  function S(m) {
    if (c[m])
      return h[m] = [];
    if (!(m in h)) {
      h[m] = null;
      const C = d[m] && d[m].parent, T = C && S(C);
      T && (h[m] = [C].concat(T));
    }
    return h[m];
  }
  return (o || Object.keys(c).concat(Object.keys(d))).forEach(S), h;
}
function UL(i, o, c) {
  const d = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null);
  let S = {};
  function m(C) {
    S = ET(
      d[C] || h[C],
      S
    );
  }
  return m(o), c.forEach(m), ET(i, S);
}
function fb(i, o) {
  const c = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return c;
  i.not_found instanceof Array && i.not_found.forEach((h) => {
    o(h, null), c.push(h);
  });
  const d = LL(i);
  for (const h in d) {
    const S = d[h];
    S && (o(h, UL(i, h, S)), c.push(h));
  }
  return c;
}
const AL = {
  provider: "",
  aliases: {},
  not_found: {},
  ...cb
};
function SE(i, o) {
  for (const c in o)
    if (c in i && typeof i[c] != typeof o[c])
      return !1;
  return !0;
}
function db(i) {
  if (typeof i != "object" || i === null)
    return null;
  const o = i;
  if (typeof o.prefix != "string" || !i.icons || typeof i.icons != "object" || !SE(i, AL))
    return null;
  const c = o.icons;
  for (const h in c) {
    const S = c[h];
    if (!h.match(Yh) || typeof S.body != "string" || !SE(
      S,
      UE
    ))
      return null;
  }
  const d = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const h in d) {
    const S = d[h], m = S.parent;
    if (!h.match(Yh) || typeof m != "string" || !c[m] && !d[m] || !SE(
      S,
      UE
    ))
      return null;
  }
  return o;
}
const wT = /* @__PURE__ */ Object.create(null);
function zL(i, o) {
  return {
    provider: i,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pc(i, o) {
  const c = wT[i] || (wT[i] = /* @__PURE__ */ Object.create(null));
  return c[o] || (c[o] = zL(i, o));
}
function aw(i, o) {
  return db(o) ? fb(o, (c, d) => {
    d ? i.icons[c] = d : i.missing.add(c);
  }) : [];
}
function jL(i, o, c) {
  try {
    if (typeof c.body == "string")
      return i.icons[o] = { ...c }, !0;
  } catch {
  }
  return !1;
}
let Gh = !1;
function pb(i) {
  return typeof i == "boolean" && (Gh = i), Gh;
}
function FL(i) {
  const o = typeof i == "string" ? Tg(i, !0, Gh) : i;
  if (o) {
    const c = pc(o.provider, o.prefix), d = o.name;
    return c.icons[d] || (c.missing.has(d) ? null : void 0);
  }
}
function HL(i, o) {
  const c = Tg(i, !0, Gh);
  if (!c)
    return !1;
  const d = pc(c.provider, c.prefix);
  return jL(d, c.name, o);
}
function PL(i, o) {
  if (typeof i != "object")
    return !1;
  if (typeof o != "string" && (o = i.provider || ""), Gh && !o && !i.prefix) {
    let h = !1;
    return db(i) && (i.prefix = "", fb(i, (S, m) => {
      m && HL(S, m) && (h = !0);
    })), h;
  }
  const c = i.prefix;
  if (!sg({
    provider: o,
    prefix: c,
    name: "a"
  }))
    return !1;
  const d = pc(o, c);
  return !!aw(d, i);
}
const hb = Object.freeze({
  width: null,
  height: null
}), vb = Object.freeze({
  // Dimensions
  ...hb,
  // Transformations
  ...mg
}), YL = /(-?[0-9.]*[0-9]+[0-9.]*)/g, IL = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function _T(i, o, c) {
  if (o === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * o * c) / c;
  if (typeof i != "string")
    return i;
  const d = i.split(YL);
  if (d === null || !d.length)
    return i;
  const h = [];
  let S = d.shift(), m = IL.test(S);
  for (; ; ) {
    if (m) {
      const C = parseFloat(S);
      isNaN(C) ? h.push(S) : h.push(Math.ceil(C * o * c) / c);
    } else
      h.push(S);
    if (S = d.shift(), S === void 0)
      return h.join("");
    m = !m;
  }
}
const VL = (i) => i === "unset" || i === "undefined" || i === "none";
function $L(i, o) {
  const c = {
    ...rw,
    ...i
  }, d = {
    ...vb,
    ...o
  }, h = {
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height
  };
  let S = c.body;
  [c, d].forEach((z) => {
    const J = [], he = z.hFlip, ge = z.vFlip;
    let K = z.rotate;
    he ? ge ? K += 2 : (J.push(
      "translate(" + (h.width + h.left).toString() + " " + (0 - h.top).toString() + ")"
    ), J.push("scale(-1 1)"), h.top = h.left = 0) : ge && (J.push(
      "translate(" + (0 - h.left).toString() + " " + (h.height + h.top).toString() + ")"
    ), J.push("scale(1 -1)"), h.top = h.left = 0);
    let re;
    switch (K < 0 && (K -= Math.floor(K / 4) * 4), K = K % 4, K) {
      case 1:
        re = h.height / 2 + h.top, J.unshift(
          "rotate(90 " + re.toString() + " " + re.toString() + ")"
        );
        break;
      case 2:
        J.unshift(
          "rotate(180 " + (h.width / 2 + h.left).toString() + " " + (h.height / 2 + h.top).toString() + ")"
        );
        break;
      case 3:
        re = h.width / 2 + h.left, J.unshift(
          "rotate(-90 " + re.toString() + " " + re.toString() + ")"
        );
        break;
    }
    K % 2 === 1 && (h.left !== h.top && (re = h.left, h.left = h.top, h.top = re), h.width !== h.height && (re = h.width, h.width = h.height, h.height = re)), J.length && (S = '<g transform="' + J.join(" ") + '">' + S + "</g>");
  });
  const m = d.width, C = d.height, T = h.width, R = h.height;
  let k, O;
  m === null ? (O = C === null ? "1em" : C === "auto" ? R : C, k = _T(O, T / R)) : (k = m === "auto" ? T : m, O = C === null ? _T(k, R / T) : C === "auto" ? R : C);
  const j = {}, G = (z, J) => {
    VL(J) || (j[z] = J.toString());
  };
  return G("width", k), G("height", O), j.viewBox = h.left.toString() + " " + h.top.toString() + " " + T.toString() + " " + R.toString(), {
    attributes: j,
    body: S
  };
}
const BL = /\sid="(\S+)"/g, WL = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let GL = 0;
function QL(i, o = WL) {
  const c = [];
  let d;
  for (; d = BL.exec(i); )
    c.push(d[1]);
  if (!c.length)
    return i;
  const h = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((S) => {
    const m = typeof o == "function" ? o(S) : o + (GL++).toString(), C = S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"),
      "$1" + m + h + "$3"
    );
  }), i = i.replace(new RegExp(h, "g"), ""), i;
}
const AE = /* @__PURE__ */ Object.create(null);
function qL(i, o) {
  AE[i] = o;
}
function zE(i) {
  return AE[i] || AE[""];
}
function iw(i) {
  let o;
  if (typeof i.resources == "string")
    o = [i.resources];
  else if (o = i.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
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
const lw = /* @__PURE__ */ Object.create(null), jh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], cg = [];
for (; jh.length > 0; )
  jh.length === 1 || Math.random() > 0.5 ? cg.push(jh.shift()) : cg.push(jh.pop());
lw[""] = iw({
  resources: ["https://api.iconify.design"].concat(cg)
});
function ZL(i, o) {
  const c = iw(o);
  return c === null ? !1 : (lw[i] = c, !0);
}
function ow(i) {
  return lw[i];
}
const KL = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let xT = KL();
function XL(i, o) {
  const c = ow(i);
  if (!c)
    return 0;
  let d;
  if (!c.maxURL)
    d = 0;
  else {
    let h = 0;
    c.resources.forEach((m) => {
      h = Math.max(h, m.length);
    });
    const S = o + ".json?icons=";
    d = c.maxURL - h - c.path.length - S.length;
  }
  return d;
}
function JL(i) {
  return i === 404;
}
const e2 = (i, o, c) => {
  const d = [], h = XL(i, o), S = "icons";
  let m = {
    type: S,
    provider: i,
    prefix: o,
    icons: []
  }, C = 0;
  return c.forEach((T, R) => {
    C += T.length + 1, C >= h && R > 0 && (d.push(m), m = {
      type: S,
      provider: i,
      prefix: o,
      icons: []
    }, C = T.length), m.icons.push(T);
  }), d.push(m), d;
};
function t2(i) {
  if (typeof i == "string") {
    const o = ow(i);
    if (o)
      return o.path;
  }
  return "/";
}
const n2 = (i, o, c) => {
  if (!xT) {
    c("abort", 424);
    return;
  }
  let d = t2(o.provider);
  switch (o.type) {
    case "icons": {
      const S = o.prefix, C = o.icons.join(","), T = new URLSearchParams({
        icons: C
      });
      d += S + ".json?" + T.toString();
      break;
    }
    case "custom": {
      const S = o.uri;
      d += S.slice(0, 1) === "/" ? S.slice(1) : S;
      break;
    }
    default:
      c("abort", 400);
      return;
  }
  let h = 503;
  xT(i + d).then((S) => {
    const m = S.status;
    if (m !== 200) {
      setTimeout(() => {
        c(JL(m) ? "abort" : "next", m);
      });
      return;
    }
    return h = 501, S.json();
  }).then((S) => {
    if (typeof S != "object" || S === null) {
      setTimeout(() => {
        S === 404 ? c("abort", S) : c("next", h);
      });
      return;
    }
    setTimeout(() => {
      c("success", S);
    });
  }).catch(() => {
    c("next", h);
  });
}, r2 = {
  prepare: e2,
  send: n2
};
function a2(i) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, c = /* @__PURE__ */ Object.create(null);
  i.sort((h, S) => h.provider !== S.provider ? h.provider.localeCompare(S.provider) : h.prefix !== S.prefix ? h.prefix.localeCompare(S.prefix) : h.name.localeCompare(S.name));
  let d = {
    provider: "",
    prefix: "",
    name: ""
  };
  return i.forEach((h) => {
    if (d.name === h.name && d.prefix === h.prefix && d.provider === h.provider)
      return;
    d = h;
    const S = h.provider, m = h.prefix, C = h.name, T = c[S] || (c[S] = /* @__PURE__ */ Object.create(null)), R = T[m] || (T[m] = pc(S, m));
    let k;
    C in R.icons ? k = o.loaded : m === "" || R.missing.has(C) ? k = o.missing : k = o.pending;
    const O = {
      provider: S,
      prefix: m,
      name: C
    };
    k.push(O);
  }), o;
}
function mb(i, o) {
  i.forEach((c) => {
    const d = c.loaderCallbacks;
    d && (c.loaderCallbacks = d.filter((h) => h.id !== o));
  });
}
function i2(i) {
  i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0, setTimeout(() => {
    i.pendingCallbacksFlag = !1;
    const o = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let c = !1;
    const d = i.provider, h = i.prefix;
    o.forEach((S) => {
      const m = S.icons, C = m.pending.length;
      m.pending = m.pending.filter((T) => {
        if (T.prefix !== h)
          return !0;
        const R = T.name;
        if (i.icons[R])
          m.loaded.push({
            provider: d,
            prefix: h,
            name: R
          });
        else if (i.missing.has(R))
          m.missing.push({
            provider: d,
            prefix: h,
            name: R
          });
        else
          return c = !0, !0;
        return !1;
      }), m.pending.length !== C && (c || mb([i], S.id), S.callback(
        m.loaded.slice(0),
        m.missing.slice(0),
        m.pending.slice(0),
        S.abort
      ));
    });
  }));
}
let l2 = 0;
function o2(i, o, c) {
  const d = l2++, h = mb.bind(null, c, d);
  if (!o.pending.length)
    return h;
  const S = {
    id: d,
    icons: o,
    callback: i,
    abort: h
  };
  return c.forEach((m) => {
    (m.loaderCallbacks || (m.loaderCallbacks = [])).push(S);
  }), h;
}
function u2(i, o = !0, c = !1) {
  const d = [];
  return i.forEach((h) => {
    const S = typeof h == "string" ? Tg(h, o, c) : h;
    S && d.push(S);
  }), d;
}
var s2 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function c2(i, o, c, d) {
  const h = i.resources.length, S = i.random ? Math.floor(Math.random() * h) : i.index;
  let m;
  if (i.random) {
    let W = i.resources.slice(0);
    for (m = []; W.length > 1; ) {
      const ee = Math.floor(Math.random() * W.length);
      m.push(W[ee]), W = W.slice(0, ee).concat(W.slice(ee + 1));
    }
    m = m.concat(W);
  } else
    m = i.resources.slice(S).concat(i.resources.slice(0, S));
  const C = Date.now();
  let T = "pending", R = 0, k, O = null, j = [], G = [];
  typeof d == "function" && G.push(d);
  function z() {
    O && (clearTimeout(O), O = null);
  }
  function J() {
    T === "pending" && (T = "aborted"), z(), j.forEach((W) => {
      W.status === "pending" && (W.status = "aborted");
    }), j = [];
  }
  function he(W, ee) {
    ee && (G = []), typeof W == "function" && G.push(W);
  }
  function ge() {
    return {
      startTime: C,
      payload: o,
      status: T,
      queriesSent: R,
      queriesPending: j.length,
      subscribe: he,
      abort: J
    };
  }
  function K() {
    T = "failed", G.forEach((W) => {
      W(void 0, k);
    });
  }
  function re() {
    j.forEach((W) => {
      W.status === "pending" && (W.status = "aborted");
    }), j = [];
  }
  function se(W, ee, Me) {
    const He = ee !== "success";
    switch (j = j.filter((Qe) => Qe !== W), T) {
      case "pending":
        break;
      case "failed":
        if (He || !i.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (ee === "abort") {
      k = Me, K();
      return;
    }
    if (He) {
      k = Me, j.length || (m.length ? ce() : K());
      return;
    }
    if (z(), re(), !i.random) {
      const Qe = i.resources.indexOf(W.resource);
      Qe !== -1 && Qe !== i.index && (i.index = Qe);
    }
    T = "completed", G.forEach((Qe) => {
      Qe(Me);
    });
  }
  function ce() {
    if (T !== "pending")
      return;
    z();
    const W = m.shift();
    if (W === void 0) {
      if (j.length) {
        O = setTimeout(() => {
          z(), T === "pending" && (re(), K());
        }, i.timeout);
        return;
      }
      K();
      return;
    }
    const ee = {
      status: "pending",
      resource: W,
      callback: (Me, He) => {
        se(ee, Me, He);
      }
    };
    j.push(ee), R++, O = setTimeout(ce, i.rotate), c(W, o, ee.callback);
  }
  return setTimeout(ce), ge;
}
function yb(i) {
  const o = {
    ...s2,
    ...i
  };
  let c = [];
  function d() {
    c = c.filter((C) => C().status === "pending");
  }
  function h(C, T, R) {
    const k = c2(
      o,
      C,
      T,
      (O, j) => {
        d(), R && R(O, j);
      }
    );
    return c.push(k), k;
  }
  function S(C) {
    return c.find((T) => C(T)) || null;
  }
  return {
    query: h,
    find: S,
    setIndex: (C) => {
      o.index = C;
    },
    getIndex: () => o.index,
    cleanup: d
  };
}
function CT() {
}
const EE = /* @__PURE__ */ Object.create(null);
function f2(i) {
  if (!EE[i]) {
    const o = ow(i);
    if (!o)
      return;
    const c = yb(o), d = {
      config: o,
      redundancy: c
    };
    EE[i] = d;
  }
  return EE[i];
}
function d2(i, o, c) {
  let d, h;
  if (typeof i == "string") {
    const S = zE(i);
    if (!S)
      return c(void 0, 424), CT;
    h = S.send;
    const m = f2(i);
    m && (d = m.redundancy);
  } else {
    const S = iw(i);
    if (S) {
      d = yb(S);
      const m = i.resources ? i.resources[0] : "", C = zE(m);
      C && (h = C.send);
    }
  }
  return !d || !h ? (c(void 0, 424), CT) : d.query(o, h, c)().abort;
}
const TT = "iconify2", Qh = "iconify", gb = Qh + "-count", bT = Qh + "-version", Sb = 36e5, p2 = 168;
function jE(i, o) {
  try {
    return i.getItem(o);
  } catch {
  }
}
function uw(i, o, c) {
  try {
    return i.setItem(o, c), !0;
  } catch {
  }
}
function RT(i, o) {
  try {
    i.removeItem(o);
  } catch {
  }
}
function FE(i, o) {
  return uw(i, gb, o.toString());
}
function HE(i) {
  return parseInt(jE(i, gb)) || 0;
}
const bg = {
  local: !0,
  session: !0
}, Eb = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let sw = !1;
function h2(i) {
  sw = i;
}
let rg = typeof window > "u" ? {} : window;
function wb(i) {
  const o = i + "Storage";
  try {
    if (rg && rg[o] && typeof rg[o].length == "number")
      return rg[o];
  } catch {
  }
  bg[i] = !1;
}
function _b(i, o) {
  const c = wb(i);
  if (!c)
    return;
  const d = jE(c, bT);
  if (d !== TT) {
    if (d) {
      const C = HE(c);
      for (let T = 0; T < C; T++)
        RT(c, Qh + T.toString());
    }
    uw(c, bT, TT), FE(c, 0);
    return;
  }
  const h = Math.floor(Date.now() / Sb) - p2, S = (C) => {
    const T = Qh + C.toString(), R = jE(c, T);
    if (typeof R == "string") {
      try {
        const k = JSON.parse(R);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > h && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, C))
          return !0;
      } catch {
      }
      RT(c, T);
    }
  };
  let m = HE(c);
  for (let C = m - 1; C >= 0; C--)
    S(C) || (C === m - 1 ? (m--, FE(c, m)) : Eb[i].add(C));
}
function xb() {
  if (!sw) {
    h2(!0);
    for (const i in bg)
      _b(i, (o) => {
        const c = o.data, d = o.provider, h = c.prefix, S = pc(
          d,
          h
        );
        if (!aw(S, c).length)
          return !1;
        const m = c.lastModified || -1;
        return S.lastModifiedCached = S.lastModifiedCached ? Math.min(S.lastModifiedCached, m) : m, !0;
      });
  }
}
function v2(i, o) {
  const c = i.lastModifiedCached;
  if (
    // Matches or newer
    c && c >= o
  )
    return c === o;
  if (i.lastModifiedCached = o, c)
    for (const d in bg)
      _b(d, (h) => {
        const S = h.data;
        return h.provider !== i.provider || S.prefix !== i.prefix || S.lastModified === o;
      });
  return !0;
}
function m2(i, o) {
  sw || xb();
  function c(d) {
    let h;
    if (!bg[d] || !(h = wb(d)))
      return;
    const S = Eb[d];
    let m;
    if (S.size)
      S.delete(m = Array.from(S).shift());
    else if (m = HE(h), !FE(h, m + 1))
      return;
    const C = {
      cached: Math.floor(Date.now() / Sb),
      provider: i.provider,
      data: o
    };
    return uw(
      h,
      Qh + m.toString(),
      JSON.stringify(C)
    );
  }
  o.lastModified && !v2(i, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), c("local") || c("session"));
}
function DT() {
}
function y2(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, i2(i);
  }));
}
function g2(i, o) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(o).sort() : i.iconsToLoad = o, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: d } = i, h = i.iconsToLoad;
    delete i.iconsToLoad;
    let S;
    if (!h || !(S = zE(c)))
      return;
    S.prepare(c, d, h).forEach((C) => {
      d2(c, C, (T) => {
        if (typeof T != "object")
          C.icons.forEach((R) => {
            i.missing.add(R);
          });
        else
          try {
            const R = aw(
              i,
              T
            );
            if (!R.length)
              return;
            const k = i.pendingIcons;
            k && R.forEach((O) => {
              k.delete(O);
            }), m2(i, T);
          } catch (R) {
            console.error(R);
          }
        y2(i);
      });
    });
  }));
}
const S2 = (i, o) => {
  const c = u2(i, !0, pb()), d = a2(c);
  if (!d.pending.length) {
    let T = !0;
    return o && setTimeout(() => {
      T && o(
        d.loaded,
        d.missing,
        d.pending,
        DT
      );
    }), () => {
      T = !1;
    };
  }
  const h = /* @__PURE__ */ Object.create(null), S = [];
  let m, C;
  return d.pending.forEach((T) => {
    const { provider: R, prefix: k } = T;
    if (k === C && R === m)
      return;
    m = R, C = k, S.push(pc(R, k));
    const O = h[R] || (h[R] = /* @__PURE__ */ Object.create(null));
    O[k] || (O[k] = []);
  }), d.pending.forEach((T) => {
    const { provider: R, prefix: k, name: O } = T, j = pc(R, k), G = j.pendingIcons || (j.pendingIcons = /* @__PURE__ */ new Set());
    G.has(O) || (G.add(O), h[R][k].push(O));
  }), S.forEach((T) => {
    const { provider: R, prefix: k } = T;
    h[R][k].length && g2(T, h[R][k]);
  }), o ? o2(o, d, S) : DT;
};
function E2(i, o) {
  const c = {
    ...i
  };
  for (const d in o) {
    const h = o[d], S = typeof h;
    d in hb ? (h === null || h && (S === "string" || S === "number")) && (c[d] = h) : S === typeof c[d] && (c[d] = d === "rotate" ? h % 4 : h);
  }
  return c;
}
const w2 = /[\s,]+/;
function _2(i, o) {
  o.split(w2).forEach((c) => {
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
function x2(i, o = 0) {
  const c = i.replace(/^-?[0-9.]*/, "");
  function d(h) {
    for (; h < 0; )
      h += 4;
    return h % 4;
  }
  if (c === "") {
    const h = parseInt(i);
    return isNaN(h) ? 0 : d(h);
  } else if (c !== i) {
    let h = 0;
    switch (c) {
      case "%":
        h = 25;
        break;
      case "deg":
        h = 90;
    }
    if (h) {
      let S = parseFloat(i.slice(0, i.length - c.length));
      return isNaN(S) ? 0 : (S = S / h, S % 1 === 0 ? d(S) : 0);
    }
  }
  return o;
}
function C2(i, o) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const d in o)
    c += " " + d + '="' + o[d] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function T2(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function b2(i) {
  return "data:image/svg+xml," + T2(i);
}
function R2(i) {
  return 'url("' + b2(i) + '")';
}
let Ih;
function D2() {
  try {
    Ih = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Ih = null;
  }
}
function k2(i) {
  return Ih === void 0 && D2(), Ih ? Ih.createHTML(i) : i;
}
const Cb = {
  ...vb,
  inline: !1
}, M2 = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, O2 = {
  display: "inline-block"
}, PE = {
  backgroundColor: "currentColor"
}, Tb = {
  backgroundColor: "transparent"
}, kT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, MT = {
  WebkitMask: PE,
  mask: PE,
  background: Tb
};
for (const i in MT) {
  const o = MT[i];
  for (const c in kT)
    o[i + c] = kT[c];
}
const N2 = {
  ...Cb,
  inline: !0
};
function OT(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const L2 = (i, o, c, d) => {
  const h = c ? N2 : Cb, S = E2(h, o), m = o.mode || "svg", C = {}, T = o.style || {}, R = {
    ...m === "svg" ? M2 : {},
    ref: d
  };
  for (let ge in o) {
    const K = o[ge];
    if (K !== void 0)
      switch (ge) {
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
          S[ge] = K === !0 || K === "true" || K === 1;
          break;
        case "flip":
          typeof K == "string" && _2(S, K);
          break;
        case "color":
          C.color = K;
          break;
        case "rotate":
          typeof K == "string" ? S[ge] = x2(K) : typeof K == "number" && (S[ge] = K);
          break;
        case "ariaHidden":
        case "aria-hidden":
          K !== !0 && K !== "true" && delete R["aria-hidden"];
          break;
        default:
          h[ge] === void 0 && (R[ge] = K);
      }
  }
  const k = $L(i, S), O = k.attributes;
  if (S.inline && (C.verticalAlign = "-0.125em"), m === "svg") {
    R.style = {
      ...C,
      ...T
    }, Object.assign(R, O);
    let ge = 0, K = o.id;
    return typeof K == "string" && (K = K.replace(/-/g, "_")), R.dangerouslySetInnerHTML = {
      __html: k2(QL(k.body, K ? () => K + "ID" + ge++ : "iconifyReact"))
    }, Ju.createElement("svg", R);
  }
  const { body: j, width: G, height: z } = i, J = m === "mask" || (m === "bg" ? !1 : j.indexOf("currentColor") !== -1), he = C2(j, {
    ...O,
    width: G + "",
    height: z + ""
  });
  return R.style = {
    ...C,
    "--svg": R2(he),
    width: OT(O.width),
    height: OT(O.height),
    ...O2,
    ...J ? PE : Tb,
    ...T
  }, Ju.createElement("span", R);
};
pb(!0);
qL("", r2);
if (typeof document < "u" && typeof window < "u") {
  xb();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const o = i.IconifyPreload, c = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((d) => {
      try {
        // Check if item is an object and not null/array
        (typeof d != "object" || d === null || d instanceof Array || // Check for 'icons' and 'prefix'
        typeof d.icons != "object" || typeof d.prefix != "string" || // Add icon set
        !PL(d)) && console.error(c);
      } catch {
        console.error(c);
      }
    });
  }
  if (i.IconifyProviders !== void 0) {
    const o = i.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let c in o) {
        const d = "IconifyProviders[" + c + "] is invalid.";
        try {
          const h = o[c];
          if (typeof h != "object" || !h || h.resources === void 0)
            continue;
          ZL(c, h) || console.error(d);
        } catch {
          console.error(d);
        }
      }
  }
}
let bb = class extends Ju.Component {
  constructor(o) {
    super(o), this.state = {
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
  _setData(o) {
    this.state.icon !== o && this.setState({
      icon: o
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(o) {
    const c = this.state, d = this.props.icon;
    if (typeof d == "object" && d !== null && typeof d.body == "string") {
      this._icon = "", this._abortLoading(), (o || c.icon === null) && this._setData({
        data: d
      });
      return;
    }
    let h;
    if (typeof d != "string" || (h = Tg(d, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const S = FL(h);
    if (!S) {
      (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), S !== null && (this._loading = {
        name: d,
        abort: S2([h], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== d || c.icon === null) {
      this._abortLoading(), this._icon = d;
      const m = ["iconify"];
      h.prefix !== "" && m.push("iconify--" + h.prefix), h.provider !== "" && m.push("iconify--" + h.provider), this._setData({
        data: S,
        classes: m
      }), this.props.onLoad && this.props.onLoad(d);
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
  componentDidUpdate(o) {
    o.icon !== this.props.icon && this._checkIcon(!0);
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
    const o = this.props, c = this.state.icon;
    if (c === null)
      return o.children ? o.children : Ju.createElement("span", {});
    let d = o;
    return c.classes && (d = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + c.classes.join(" ")
    }), L2({
      ...rw,
      ...c.data
    }, d, o._inline, o._ref);
  }
};
const U2 = Ju.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !1
  };
  return Ju.createElement(bb, d);
});
Ju.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !0
  };
  return Ju.createElement(bb, d);
});
var Rr = U2;
const A2 = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
  const o = Math.random() * 16 | 0;
  return (i === "x" ? o : o & 3 | 8).toString(16);
}), z2 = ({
  onChange: i,
  defaultValue: o,
  children: c,
  name: d,
  invalidText: h,
  placeholder: S,
  variant: m,
  icon: C,
  required: T = !0,
  className: R = "",
  type: k = "text",
  id: O = A2(),
  ...j
}) => /* @__PURE__ */ I.jsxs("div", { className: `textfield ${m ? "bg-" + m : ""} ${R}`, children: [
  /* @__PURE__ */ I.jsx("label", { htmlFor: O, children: S ?? d ?? O }),
  /* @__PURE__ */ I.jsx(
    "input",
    {
      id: O,
      type: k,
      className: "input",
      name: d ?? O,
      onChange: i,
      defaultValue: o,
      placeholder: S ?? d ?? O ?? "",
      required: T,
      ...j
    }
  ),
  C && /* @__PURE__ */ I.jsx(Rr, { icon: C }),
  T && /* @__PURE__ */ I.jsx("span", { className: "required", children: h ?? d ? `${d ?? O} should not be empty!` : "Should not be empty!" }),
  c && c
] }), O3 = ({
  defaultShow: i = !1,
  ...o
}) => {
  const [c, d] = Dr(i);
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsx(
    z2,
    {
      ...o,
      className: "textfield-password",
      type: c ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ I.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => d((h) => !h),
          children: /* @__PURE__ */ I.jsx(Rr, { icon: c ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, j2 = (i) => {
  console.log(i);
}, F2 = (i) => {
  console.log(i);
}, H2 = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], P2 = ({
  defaultSelected: i,
  startDateRef: o,
  endDateRef: c,
  onClose: d
}) => {
  const [h, S] = Dr(
    (i == null ? void 0 : i.end) === void 0 ? _i() : i.end
  ), [m, C] = Dr(
    i === void 0 ? {
      start: null,
      end: null
    } : i
  ), T = h, R = T.clone().startOf("month"), k = T.clone().endOf("month"), O = [], j = R.day(), G = k.day();
  for (let z = j - 1; z >= 0; z--)
    O.push(R.clone().subtract(z, "days"));
  for (let z = R.clone().add(1, "day"); z.isSameOrBefore(k); z.add(1, "day"))
    O.push(z.clone());
  for (let z = 1; z <= 6 - G + 1; z++)
    O.push(k.clone().add(z, "days"));
  return /* @__PURE__ */ I.jsx("div", { className: "dropdown", children: /* @__PURE__ */ I.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ I.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              S(
                (z) => z.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ I.jsx(Rr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ I.jsx("button", { type: "button", className: "btn", children: T.format("MMM, YYYY") }),
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              S(
                (z) => z.clone().add(1, "month")
              );
            },
            disabled: h.clone().add(1, "month").isSameOrAfter(_i()),
            children: /* @__PURE__ */ I.jsx(Rr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ I.jsx("ul", { className: "date-weekdays", children: H2.map((z) => /* @__PURE__ */ I.jsx("li", { children: /* @__PURE__ */ I.jsx("span", { children: z }) }, z)) })
    ] }),
    /* @__PURE__ */ I.jsx("ul", { className: "days-container", children: O.map((z, J) => {
      var se, ce, W;
      let he = "";
      const ge = (se = m.start) != null && se.startOf("day").isSame(z) ? "selected start" : (W = (ce = m.end) == null ? void 0 : ce.startOf("day")) != null && W.isSame(z) ? "selected end" : "", K = z.format("MM") !== T.format("MM") ? "not-current" : "", re = z.isBetween(
        m.start,
        m.end
      ) ? "between" : "";
      return he += K + ge + re, /* @__PURE__ */ I.jsx("li", { children: /* @__PURE__ */ I.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var ee;
            if (!(o.current === null || c.current === null)) {
              if (((ee = m.start) == null ? void 0 : ee.date()) === z.date()) {
                C({
                  start: null,
                  end: null
                }), o.current.value = "", c.current.value = "";
                return;
              }
              if (m.start === null)
                C((Me) => ({
                  ...Me,
                  start: z
                })), o.current.value = z.format("YYYY-MM-DD");
              else if (m.start !== null) {
                if (z.isBefore(m.start)) {
                  C((Me) => ({
                    start: z,
                    end: Me.start
                  })), o.current.value = z.format("YYYY-MM-DD"), c.current.value = m.start.format("YYYY-MM-DD");
                  return;
                }
                C((Me) => ({
                  ...Me,
                  end: z
                })), c.current.value = z.format("YYYY-MM-DD");
              }
            }
          },
          className: he,
          disabled: z.isAfter(_i()),
          children: z.format("DD")
        }
      ) }, J);
    }) }),
    /* @__PURE__ */ I.jsx(
      "button",
      {
        type: "button",
        onClick: d,
        className: "btn btn-sm btn-primary",
        style: { alignSelf: "end" },
        children: "Done"
      }
    )
  ] }) });
}, N3 = ({
  defaultSelected: i,
  onSearch: o,
  children: c
}) => {
  const [d, h] = Dr(!1), S = tr(null), m = tr(null), C = {
    ref: S,
    type: "date",
    onFocus: j2,
    onClick: () => {
      h((R) => !R);
    },
    autoComplete: "off",
    defaultValue: i ? i.start.format("YYYY-MM-DD") : ""
  }, T = {
    ref: m,
    type: "date",
    onFocus: F2,
    onClick: () => {
      h((R) => !R);
    },
    autoComplete: "off",
    defaultValue: i != null && i.end ? i.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsxs(
    "form",
    {
      className: "date-range-picker",
      onSubmit: (R) => {
        R.preventDefault();
        const k = new FormData(R.target), O = Object.fromEntries(
          k.entries()
        );
        o == null || o(O);
      },
      children: [
        /* @__PURE__ */ I.jsxs("div", { className: "group rounded-box", children: [
          c({ startDateProps: C, endDateProps: T }),
          /* @__PURE__ */ I.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        d && /* @__PURE__ */ I.jsx(
          P2,
          {
            defaultSelected: i,
            startDateRef: S,
            endDateRef: m,
            onClose: () => h(!1)
          }
        )
      ]
    }
  ) });
}, Y2 = (i, o, c, d, h, S) => {
  let m = 0, C = !1;
  switch (i.key) {
    case "ArrowUp": {
      if (o === 0)
        return;
      m = o - 1, h.current[m].focus(), c(m), d.current = "";
      break;
    }
    case "ArrowDown": {
      if (o === S - 1)
        return;
      m = o + 1, h.current[m].focus(), d.current = "", c(m);
      break;
    }
    case "Backspace": {
      d.current = d.current.slice(0, -1), d.current.length > 0 && (C = !0);
      break;
    }
    default:
      i.key.length === 1 && isNaN(Number(i.key)) && (d.current += i.key, C = !0);
  }
  if (C) {
    const T = h.current.findIndex(
      (R) => R.innerText.toLowerCase().includes(d.current.toLowerCase())
    );
    if (T === -1)
      return;
    h.current[T].focus(), c(T);
  }
}, I2 = (i) => typeof i == "object" ? /* @__PURE__ */ I.jsx("span", { children: Object.values(i)[0] }) : /* @__PURE__ */ I.jsx("span", { children: i }), cw = ({
  items: i,
  currentSelected: o,
  selector: c,
  onChange: d,
  labelExtractor: h,
  required: S = !0,
  showQty: m = 4,
  style: C = {},
  name: T = "",
  position: R = "top",
  variant: k = "neutral",
  keyExtractor: O = I2
}) => {
  const [j, G] = Dr(!1), [z, J] = Dr(
    i.findIndex(
      (ce) => c ? ce[c] === (o == null ? void 0 : o[c]) : ce === o
    )
  ), [he, ge] = Dr(z), K = tr(null), re = tr(""), se = tr([]);
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: `select ${j ? "shadow-md" : ""} ${R}`,
      onBlur: () => {
      },
      style: C,
      children: [
        /* @__PURE__ */ I.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${k} btn-select ${j ? "active" : ""}`,
            onClick: () => {
              G((W) => !W);
              const ce = o === void 0 ? 0 : z;
              ge(ce), setTimeout(() => {
                j || se.current[ce].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ I.jsx("span", { className: z === -1 ? "not-selected" : "", children: z === -1 ? "Select one of the options" : (h == null ? void 0 : h(i[z])) ?? O(i[z]) }),
              /* @__PURE__ */ I.jsx(Rr, { icon: "eva:arrow-down-fill", vFlip: j })
            ]
          }
        ),
        /* @__PURE__ */ I.jsx(
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
            name: T,
            ref: K,
            required: S
          }
        ),
        j && /* @__PURE__ */ I.jsx(
          "ul",
          {
            className: `select-items${i.length > 4 ? " custom-scroll " : " "}bg-${k} shadow-md`,
            style: { "--select-items": m },
            children: i.map((ce, W) => /* @__PURE__ */ I.jsx("li", { className: "item", children: /* @__PURE__ */ I.jsx(
              "button",
              {
                type: "button",
                className: `${W === z ? "active" : ""}`,
                ref: (ee) => se.current[W] = ee,
                tabIndex: 0,
                onClick: () => {
                  J(W), d !== void 0 && d(W, i[W]), K.current && c && (K.current.value = String(i[W][c])), G(!1);
                },
                onMouseEnter: (ee) => {
                  ge(W), ee.target.focus();
                },
                onMouseLeave: () => {
                  ge(z);
                },
                onKeyDown: (ee) => Y2(
                  ee,
                  he,
                  ge,
                  re,
                  se,
                  i.length
                ),
                children: O(ce)
              }
            ) }, W))
          }
        )
      ]
    }
  );
}, V2 = [
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
var Rb;
function we() {
  return Rb.apply(null, arguments);
}
function $2(i) {
  Rb = i;
}
function nl(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function fc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function Dt(i, o) {
  return Object.prototype.hasOwnProperty.call(i, o);
}
function fw(i) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(i).length === 0;
  var o;
  for (o in i)
    if (Dt(i, o))
      return !1;
  return !0;
}
function Fa(i) {
  return i === void 0;
}
function Bo(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function ev(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function Db(i, o) {
  var c = [], d, h = i.length;
  for (d = 0; d < h; ++d)
    c.push(o(i[d], d));
  return c;
}
function Zu(i, o) {
  for (var c in o)
    Dt(o, c) && (i[c] = o[c]);
  return Dt(o, "toString") && (i.toString = o.toString), Dt(o, "valueOf") && (i.valueOf = o.valueOf), i;
}
function Bl(i, o, c, d) {
  return Xb(i, o, c, d, !0).utc();
}
function B2() {
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
function ut(i) {
  return i._pf == null && (i._pf = B2()), i._pf;
}
var YE;
Array.prototype.some ? YE = Array.prototype.some : YE = function(i) {
  var o = Object(this), c = o.length >>> 0, d;
  for (d = 0; d < c; d++)
    if (d in o && i.call(this, o[d], d, o))
      return !0;
  return !1;
};
function dw(i) {
  if (i._isValid == null) {
    var o = ut(i), c = YE.call(o.parsedDateParts, function(h) {
      return h != null;
    }), d = !isNaN(i._d.getTime()) && o.overflow < 0 && !o.empty && !o.invalidEra && !o.invalidMonth && !o.invalidWeekday && !o.weekdayMismatch && !o.nullInput && !o.invalidFormat && !o.userInvalidated && (!o.meridiem || o.meridiem && c);
    if (i._strict && (d = d && o.charsLeftOver === 0 && o.unusedTokens.length === 0 && o.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = d;
    else
      return d;
  }
  return i._isValid;
}
function Rg(i) {
  var o = Bl(NaN);
  return i != null ? Zu(ut(o), i) : ut(o).userInvalidated = !0, o;
}
var NT = we.momentProperties = [], wE = !1;
function pw(i, o) {
  var c, d, h, S = NT.length;
  if (Fa(o._isAMomentObject) || (i._isAMomentObject = o._isAMomentObject), Fa(o._i) || (i._i = o._i), Fa(o._f) || (i._f = o._f), Fa(o._l) || (i._l = o._l), Fa(o._strict) || (i._strict = o._strict), Fa(o._tzm) || (i._tzm = o._tzm), Fa(o._isUTC) || (i._isUTC = o._isUTC), Fa(o._offset) || (i._offset = o._offset), Fa(o._pf) || (i._pf = ut(o)), Fa(o._locale) || (i._locale = o._locale), S > 0)
    for (c = 0; c < S; c++)
      d = NT[c], h = o[d], Fa(h) || (i[d] = h);
  return i;
}
function tv(i) {
  pw(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), wE === !1 && (wE = !0, we.updateOffset(this), wE = !1);
}
function rl(i) {
  return i instanceof tv || i != null && i._isAMomentObject != null;
}
function kb(i) {
  we.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function Ci(i, o) {
  var c = !0;
  return Zu(function() {
    if (we.deprecationHandler != null && we.deprecationHandler(null, i), c) {
      var d = [], h, S, m, C = arguments.length;
      for (S = 0; S < C; S++) {
        if (h = "", typeof arguments[S] == "object") {
          h += `
[` + S + "] ";
          for (m in arguments[0])
            Dt(arguments[0], m) && (h += m + ": " + arguments[0][m] + ", ");
          h = h.slice(0, -2);
        } else
          h = arguments[S];
        d.push(h);
      }
      kb(
        i + `
Arguments: ` + Array.prototype.slice.call(d).join("") + `
` + new Error().stack
      ), c = !1;
    }
    return o.apply(this, arguments);
  }, o);
}
var LT = {};
function Mb(i, o) {
  we.deprecationHandler != null && we.deprecationHandler(i, o), LT[i] || (kb(o), LT[i] = !0);
}
we.suppressDeprecationWarnings = !1;
we.deprecationHandler = null;
function Wl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function W2(i) {
  var o, c;
  for (c in i)
    Dt(i, c) && (o = i[c], Wl(o) ? this[c] = o : this["_" + c] = o);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function IE(i, o) {
  var c = Zu({}, i), d;
  for (d in o)
    Dt(o, d) && (fc(i[d]) && fc(o[d]) ? (c[d] = {}, Zu(c[d], i[d]), Zu(c[d], o[d])) : o[d] != null ? c[d] = o[d] : delete c[d]);
  for (d in i)
    Dt(i, d) && !Dt(o, d) && fc(i[d]) && (c[d] = Zu({}, c[d]));
  return c;
}
function hw(i) {
  i != null && this.set(i);
}
var VE;
Object.keys ? VE = Object.keys : VE = function(i) {
  var o, c = [];
  for (o in i)
    Dt(i, o) && c.push(o);
  return c;
};
var G2 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Q2(i, o, c) {
  var d = this._calendar[i] || this._calendar.sameElse;
  return Wl(d) ? d.call(o, c) : d;
}
function $l(i, o, c) {
  var d = "" + Math.abs(i), h = o - d.length, S = i >= 0;
  return (S ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, h)).toString().substr(1) + d;
}
var vw = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ag = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, _E = {}, hd = {};
function Ie(i, o, c, d) {
  var h = d;
  typeof d == "string" && (h = function() {
    return this[d]();
  }), i && (hd[i] = h), o && (hd[o[0]] = function() {
    return $l(h.apply(this, arguments), o[1], o[2]);
  }), c && (hd[c] = function() {
    return this.localeData().ordinal(
      h.apply(this, arguments),
      i
    );
  });
}
function q2(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function Z2(i) {
  var o = i.match(vw), c, d;
  for (c = 0, d = o.length; c < d; c++)
    hd[o[c]] ? o[c] = hd[o[c]] : o[c] = q2(o[c]);
  return function(h) {
    var S = "", m;
    for (m = 0; m < d; m++)
      S += Wl(o[m]) ? o[m].call(h, i) : o[m];
    return S;
  };
}
function fg(i, o) {
  return i.isValid() ? (o = Ob(o, i.localeData()), _E[o] = _E[o] || Z2(o), _E[o](i)) : i.localeData().invalidDate();
}
function Ob(i, o) {
  var c = 5;
  function d(h) {
    return o.longDateFormat(h) || h;
  }
  for (ag.lastIndex = 0; c >= 0 && ag.test(i); )
    i = i.replace(
      ag,
      d
    ), ag.lastIndex = 0, c -= 1;
  return i;
}
var K2 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function X2(i) {
  var o = this._longDateFormat[i], c = this._longDateFormat[i.toUpperCase()];
  return o || !c ? o : (this._longDateFormat[i] = c.match(vw).map(function(d) {
    return d === "MMMM" || d === "MM" || d === "DD" || d === "dddd" ? d.slice(1) : d;
  }).join(""), this._longDateFormat[i]);
}
var J2 = "Invalid date";
function eU() {
  return this._invalidDate;
}
var tU = "%d", nU = /\d{1,2}/;
function rU(i) {
  return this._ordinal.replace("%d", i);
}
var aU = {
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
function iU(i, o, c, d) {
  var h = this._relativeTime[c];
  return Wl(h) ? h(i, o, c, d) : h.replace(/%d/i, i);
}
function lU(i, o) {
  var c = this._relativeTime[i > 0 ? "future" : "past"];
  return Wl(c) ? c(o) : c.replace(/%s/i, o);
}
var Vh = {};
function Qr(i, o) {
  var c = i.toLowerCase();
  Vh[c] = Vh[c + "s"] = Vh[o] = i;
}
function Ti(i) {
  return typeof i == "string" ? Vh[i] || Vh[i.toLowerCase()] : void 0;
}
function mw(i) {
  var o = {}, c, d;
  for (d in i)
    Dt(i, d) && (c = Ti(d), c && (o[c] = i[d]));
  return o;
}
var Nb = {};
function qr(i, o) {
  Nb[i] = o;
}
function oU(i) {
  var o = [], c;
  for (c in i)
    Dt(i, c) && o.push({ unit: c, priority: Nb[c] });
  return o.sort(function(d, h) {
    return d.priority - h.priority;
  }), o;
}
function Dg(i) {
  return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0;
}
function xi(i) {
  return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
}
function dt(i) {
  var o = +i, c = 0;
  return o !== 0 && isFinite(o) && (c = xi(o)), c;
}
function yd(i, o) {
  return function(c) {
    return c != null ? (Lb(this, i, c), we.updateOffset(this, o), this) : yg(this, i);
  };
}
function yg(i, o) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + o]() : NaN;
}
function Lb(i, o, c) {
  i.isValid() && !isNaN(c) && (o === "FullYear" && Dg(i.year()) && i.month() === 1 && i.date() === 29 ? (c = dt(c), i._d["set" + (i._isUTC ? "UTC" : "") + o](
    c,
    i.month(),
    Ug(c, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + o](c));
}
function uU(i) {
  return i = Ti(i), Wl(this[i]) ? this[i]() : this;
}
function sU(i, o) {
  if (typeof i == "object") {
    i = mw(i);
    var c = oU(i), d, h = c.length;
    for (d = 0; d < h; d++)
      this[c[d].unit](i[c[d].unit]);
  } else if (i = Ti(i), Wl(this[i]))
    return this[i](o);
  return this;
}
var Ub = /\d/, ni = /\d\d/, Ab = /\d{3}/, yw = /\d{4}/, kg = /[+-]?\d{6}/, ln = /\d\d?/, zb = /\d\d\d\d?/, jb = /\d\d\d\d\d\d?/, Mg = /\d{1,3}/, gw = /\d{1,4}/, Og = /[+-]?\d{1,6}/, gd = /\d+/, Ng = /[+-]?\d+/, cU = /Z|[+-]\d\d:?\d\d/gi, Lg = /Z|[+-]\d\d(?::?\d\d)?/gi, fU = /[+-]?\d+(\.\d{1,3})?/, nv = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, gg;
gg = {};
function be(i, o, c) {
  gg[i] = Wl(o) ? o : function(d, h) {
    return d && c ? c : o;
  };
}
function dU(i, o) {
  return Dt(gg, i) ? gg[i](o._strict, o._locale) : new RegExp(pU(i));
}
function pU(i) {
  return ti(
    i.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(o, c, d, h, S) {
        return c || d || h || S;
      }
    )
  );
}
function ti(i) {
  return i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var $E = {};
function It(i, o) {
  var c, d = o, h;
  for (typeof i == "string" && (i = [i]), Bo(o) && (d = function(S, m) {
    m[o] = dt(S);
  }), h = i.length, c = 0; c < h; c++)
    $E[i[c]] = d;
}
function rv(i, o) {
  It(i, function(c, d, h, S) {
    h._w = h._w || {}, o(c, h._w, h, S);
  });
}
function hU(i, o, c) {
  o != null && Dt($E, i) && $E[i](o, c._a, c, i);
}
var Gr = 0, Io = 1, Vl = 2, nr = 3, tl = 4, Vo = 5, cc = 6, vU = 7, mU = 8;
function yU(i, o) {
  return (i % o + o) % o;
}
var Mn;
Array.prototype.indexOf ? Mn = Array.prototype.indexOf : Mn = function(i) {
  var o;
  for (o = 0; o < this.length; ++o)
    if (this[o] === i)
      return o;
  return -1;
};
function Ug(i, o) {
  if (isNaN(i) || isNaN(o))
    return NaN;
  var c = yU(o, 12);
  return i += (o - c) / 12, c === 1 ? Dg(i) ? 29 : 28 : 31 - c % 7 % 2;
}
Ie("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Ie("MMM", 0, 0, function(i) {
  return this.localeData().monthsShort(this, i);
});
Ie("MMMM", 0, 0, function(i) {
  return this.localeData().months(this, i);
});
Qr("month", "M");
qr("month", 8);
be("M", ln);
be("MM", ln, ni);
be("MMM", function(i, o) {
  return o.monthsShortRegex(i);
});
be("MMMM", function(i, o) {
  return o.monthsRegex(i);
});
It(["M", "MM"], function(i, o) {
  o[Io] = dt(i) - 1;
});
It(["MMM", "MMMM"], function(i, o, c, d) {
  var h = c._locale.monthsParse(i, d, c._strict);
  h != null ? o[Io] = h : ut(c).invalidMonth = i;
});
var gU = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Fb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Hb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, SU = nv, EU = nv;
function wU(i, o) {
  return i ? nl(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || Hb).test(o) ? "format" : "standalone"][i.month()] : nl(this._months) ? this._months : this._months.standalone;
}
function _U(i, o) {
  return i ? nl(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[Hb.test(o) ? "format" : "standalone"][i.month()] : nl(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function xU(i, o, c) {
  var d, h, S, m = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d)
      S = Bl([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(
        S,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[d] = this.months(S, "").toLocaleLowerCase();
  return c ? o === "MMM" ? (h = Mn.call(this._shortMonthsParse, m), h !== -1 ? h : null) : (h = Mn.call(this._longMonthsParse, m), h !== -1 ? h : null) : o === "MMM" ? (h = Mn.call(this._shortMonthsParse, m), h !== -1 ? h : (h = Mn.call(this._longMonthsParse, m), h !== -1 ? h : null)) : (h = Mn.call(this._longMonthsParse, m), h !== -1 ? h : (h = Mn.call(this._shortMonthsParse, m), h !== -1 ? h : null));
}
function CU(i, o, c) {
  var d, h, S;
  if (this._monthsParseExact)
    return xU.call(this, i, o, c);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
    if (h = Bl([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp(
      "^" + this.months(h, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[d] = new RegExp(
      "^" + this.monthsShort(h, "").replace(".", "") + "$",
      "i"
    )), !c && !this._monthsParse[d] && (S = "^" + this.months(h, "") + "|^" + this.monthsShort(h, ""), this._monthsParse[d] = new RegExp(S.replace(".", ""), "i")), c && o === "MMMM" && this._longMonthsParse[d].test(i))
      return d;
    if (c && o === "MMM" && this._shortMonthsParse[d].test(i))
      return d;
    if (!c && this._monthsParse[d].test(i))
      return d;
  }
}
function Pb(i, o) {
  var c;
  if (!i.isValid())
    return i;
  if (typeof o == "string") {
    if (/^\d+$/.test(o))
      o = dt(o);
    else if (o = i.localeData().monthsParse(o), !Bo(o))
      return i;
  }
  return c = Math.min(i.date(), Ug(i.year(), o)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](o, c), i;
}
function Yb(i) {
  return i != null ? (Pb(this, i), we.updateOffset(this, !0), this) : yg(this, "Month");
}
function TU() {
  return Ug(this.year(), this.month());
}
function bU(i) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Ib.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Dt(this, "_monthsShortRegex") || (this._monthsShortRegex = SU), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function RU(i) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Ib.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Dt(this, "_monthsRegex") || (this._monthsRegex = EU), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function Ib() {
  function i(m, C) {
    return C.length - m.length;
  }
  var o = [], c = [], d = [], h, S;
  for (h = 0; h < 12; h++)
    S = Bl([2e3, h]), o.push(this.monthsShort(S, "")), c.push(this.months(S, "")), d.push(this.months(S, "")), d.push(this.monthsShort(S, ""));
  for (o.sort(i), c.sort(i), d.sort(i), h = 0; h < 12; h++)
    o[h] = ti(o[h]), c[h] = ti(c[h]);
  for (h = 0; h < 24; h++)
    d[h] = ti(d[h]);
  this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + o.join("|") + ")",
    "i"
  );
}
Ie("Y", 0, 0, function() {
  var i = this.year();
  return i <= 9999 ? $l(i, 4) : "+" + i;
});
Ie(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ie(0, ["YYYY", 4], 0, "year");
Ie(0, ["YYYYY", 5], 0, "year");
Ie(0, ["YYYYYY", 6, !0], 0, "year");
Qr("year", "y");
qr("year", 1);
be("Y", Ng);
be("YY", ln, ni);
be("YYYY", gw, yw);
be("YYYYY", Og, kg);
be("YYYYYY", Og, kg);
It(["YYYYY", "YYYYYY"], Gr);
It("YYYY", function(i, o) {
  o[Gr] = i.length === 2 ? we.parseTwoDigitYear(i) : dt(i);
});
It("YY", function(i, o) {
  o[Gr] = we.parseTwoDigitYear(i);
});
It("Y", function(i, o) {
  o[Gr] = parseInt(i, 10);
});
function $h(i) {
  return Dg(i) ? 366 : 365;
}
we.parseTwoDigitYear = function(i) {
  return dt(i) + (dt(i) > 68 ? 1900 : 2e3);
};
var Vb = yd("FullYear", !0);
function DU() {
  return Dg(this.year());
}
function kU(i, o, c, d, h, S, m) {
  var C;
  return i < 100 && i >= 0 ? (C = new Date(i + 400, o, c, d, h, S, m), isFinite(C.getFullYear()) && C.setFullYear(i)) : C = new Date(i, o, c, d, h, S, m), C;
}
function qh(i) {
  var o, c;
  return i < 100 && i >= 0 ? (c = Array.prototype.slice.call(arguments), c[0] = i + 400, o = new Date(Date.UTC.apply(null, c)), isFinite(o.getUTCFullYear()) && o.setUTCFullYear(i)) : o = new Date(Date.UTC.apply(null, arguments)), o;
}
function Sg(i, o, c) {
  var d = 7 + o - c, h = (7 + qh(i, 0, d).getUTCDay() - o) % 7;
  return -h + d - 1;
}
function $b(i, o, c, d, h) {
  var S = (7 + c - d) % 7, m = Sg(i, d, h), C = 1 + 7 * (o - 1) + S + m, T, R;
  return C <= 0 ? (T = i - 1, R = $h(T) + C) : C > $h(i) ? (T = i + 1, R = C - $h(i)) : (T = i, R = C), {
    year: T,
    dayOfYear: R
  };
}
function Zh(i, o, c) {
  var d = Sg(i.year(), o, c), h = Math.floor((i.dayOfYear() - d - 1) / 7) + 1, S, m;
  return h < 1 ? (m = i.year() - 1, S = h + $o(m, o, c)) : h > $o(i.year(), o, c) ? (S = h - $o(i.year(), o, c), m = i.year() + 1) : (m = i.year(), S = h), {
    week: S,
    year: m
  };
}
function $o(i, o, c) {
  var d = Sg(i, o, c), h = Sg(i + 1, o, c);
  return ($h(i) - d + h) / 7;
}
Ie("w", ["ww", 2], "wo", "week");
Ie("W", ["WW", 2], "Wo", "isoWeek");
Qr("week", "w");
Qr("isoWeek", "W");
qr("week", 5);
qr("isoWeek", 5);
be("w", ln);
be("ww", ln, ni);
be("W", ln);
be("WW", ln, ni);
rv(
  ["w", "ww", "W", "WW"],
  function(i, o, c, d) {
    o[d.substr(0, 1)] = dt(i);
  }
);
function MU(i) {
  return Zh(i, this._week.dow, this._week.doy).week;
}
var OU = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function NU() {
  return this._week.dow;
}
function LU() {
  return this._week.doy;
}
function UU(i) {
  var o = this.localeData().week(this);
  return i == null ? o : this.add((i - o) * 7, "d");
}
function AU(i) {
  var o = Zh(this, 1, 4).week;
  return i == null ? o : this.add((i - o) * 7, "d");
}
Ie("d", 0, "do", "day");
Ie("dd", 0, 0, function(i) {
  return this.localeData().weekdaysMin(this, i);
});
Ie("ddd", 0, 0, function(i) {
  return this.localeData().weekdaysShort(this, i);
});
Ie("dddd", 0, 0, function(i) {
  return this.localeData().weekdays(this, i);
});
Ie("e", 0, 0, "weekday");
Ie("E", 0, 0, "isoWeekday");
Qr("day", "d");
Qr("weekday", "e");
Qr("isoWeekday", "E");
qr("day", 11);
qr("weekday", 11);
qr("isoWeekday", 11);
be("d", ln);
be("e", ln);
be("E", ln);
be("dd", function(i, o) {
  return o.weekdaysMinRegex(i);
});
be("ddd", function(i, o) {
  return o.weekdaysShortRegex(i);
});
be("dddd", function(i, o) {
  return o.weekdaysRegex(i);
});
rv(["dd", "ddd", "dddd"], function(i, o, c, d) {
  var h = c._locale.weekdaysParse(i, d, c._strict);
  h != null ? o.d = h : ut(c).invalidWeekday = i;
});
rv(["d", "e", "E"], function(i, o, c, d) {
  o[d] = dt(i);
});
function zU(i, o) {
  return typeof i != "string" ? i : isNaN(i) ? (i = o.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function jU(i, o) {
  return typeof i == "string" ? o.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function Sw(i, o) {
  return i.slice(o, 7).concat(i.slice(0, o));
}
var FU = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Bb = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), HU = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), PU = nv, YU = nv, IU = nv;
function VU(i, o) {
  var c = nl(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(o) ? "format" : "standalone"];
  return i === !0 ? Sw(c, this._week.dow) : i ? c[i.day()] : c;
}
function $U(i) {
  return i === !0 ? Sw(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function BU(i) {
  return i === !0 ? Sw(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function WU(i, o, c) {
  var d, h, S, m = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d)
      S = Bl([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(
        S,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(
        S,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(S, "").toLocaleLowerCase();
  return c ? o === "dddd" ? (h = Mn.call(this._weekdaysParse, m), h !== -1 ? h : null) : o === "ddd" ? (h = Mn.call(this._shortWeekdaysParse, m), h !== -1 ? h : null) : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 ? h : null) : o === "dddd" ? (h = Mn.call(this._weekdaysParse, m), h !== -1 || (h = Mn.call(this._shortWeekdaysParse, m), h !== -1) ? h : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 ? h : null)) : o === "ddd" ? (h = Mn.call(this._shortWeekdaysParse, m), h !== -1 || (h = Mn.call(this._weekdaysParse, m), h !== -1) ? h : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 ? h : null)) : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 || (h = Mn.call(this._weekdaysParse, m), h !== -1) ? h : (h = Mn.call(this._shortWeekdaysParse, m), h !== -1 ? h : null));
}
function GU(i, o, c) {
  var d, h, S;
  if (this._weekdaysParseExact)
    return WU.call(this, i, o, c);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
    if (h = Bl([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp(
      "^" + this.weekdays(h, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[d] = new RegExp(
      "^" + this.weekdaysShort(h, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[d] = new RegExp(
      "^" + this.weekdaysMin(h, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[d] || (S = "^" + this.weekdays(h, "") + "|^" + this.weekdaysShort(h, "") + "|^" + this.weekdaysMin(h, ""), this._weekdaysParse[d] = new RegExp(S.replace(".", ""), "i")), c && o === "dddd" && this._fullWeekdaysParse[d].test(i))
      return d;
    if (c && o === "ddd" && this._shortWeekdaysParse[d].test(i))
      return d;
    if (c && o === "dd" && this._minWeekdaysParse[d].test(i))
      return d;
    if (!c && this._weekdaysParse[d].test(i))
      return d;
  }
}
function QU(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = zU(i, this.localeData()), this.add(i - o, "d")) : o;
}
function qU(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var o = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? o : this.add(i - o, "d");
}
function ZU(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var o = jU(i, this.localeData());
    return this.day(this.day() % 7 ? o : o - 7);
  } else
    return this.day() || 7;
}
function KU(i) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || Ew.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Dt(this, "_weekdaysRegex") || (this._weekdaysRegex = PU), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function XU(i) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || Ew.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Dt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = YU), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function JU(i) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || Ew.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Dt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = IU), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ew() {
  function i(k, O) {
    return O.length - k.length;
  }
  var o = [], c = [], d = [], h = [], S, m, C, T, R;
  for (S = 0; S < 7; S++)
    m = Bl([2e3, 1]).day(S), C = ti(this.weekdaysMin(m, "")), T = ti(this.weekdaysShort(m, "")), R = ti(this.weekdays(m, "")), o.push(C), c.push(T), d.push(R), h.push(C), h.push(T), h.push(R);
  o.sort(i), c.sort(i), d.sort(i), h.sort(i), this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + d.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + o.join("|") + ")",
    "i"
  );
}
function ww() {
  return this.hours() % 12 || 12;
}
function eA() {
  return this.hours() || 24;
}
Ie("H", ["HH", 2], 0, "hour");
Ie("h", ["hh", 2], 0, ww);
Ie("k", ["kk", 2], 0, eA);
Ie("hmm", 0, 0, function() {
  return "" + ww.apply(this) + $l(this.minutes(), 2);
});
Ie("hmmss", 0, 0, function() {
  return "" + ww.apply(this) + $l(this.minutes(), 2) + $l(this.seconds(), 2);
});
Ie("Hmm", 0, 0, function() {
  return "" + this.hours() + $l(this.minutes(), 2);
});
Ie("Hmmss", 0, 0, function() {
  return "" + this.hours() + $l(this.minutes(), 2) + $l(this.seconds(), 2);
});
function Wb(i, o) {
  Ie(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      o
    );
  });
}
Wb("a", !0);
Wb("A", !1);
Qr("hour", "h");
qr("hour", 13);
function Gb(i, o) {
  return o._meridiemParse;
}
be("a", Gb);
be("A", Gb);
be("H", ln);
be("h", ln);
be("k", ln);
be("HH", ln, ni);
be("hh", ln, ni);
be("kk", ln, ni);
be("hmm", zb);
be("hmmss", jb);
be("Hmm", zb);
be("Hmmss", jb);
It(["H", "HH"], nr);
It(["k", "kk"], function(i, o, c) {
  var d = dt(i);
  o[nr] = d === 24 ? 0 : d;
});
It(["a", "A"], function(i, o, c) {
  c._isPm = c._locale.isPM(i), c._meridiem = i;
});
It(["h", "hh"], function(i, o, c) {
  o[nr] = dt(i), ut(c).bigHour = !0;
});
It("hmm", function(i, o, c) {
  var d = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[tl] = dt(i.substr(d)), ut(c).bigHour = !0;
});
It("hmmss", function(i, o, c) {
  var d = i.length - 4, h = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[tl] = dt(i.substr(d, 2)), o[Vo] = dt(i.substr(h)), ut(c).bigHour = !0;
});
It("Hmm", function(i, o, c) {
  var d = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[tl] = dt(i.substr(d));
});
It("Hmmss", function(i, o, c) {
  var d = i.length - 4, h = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[tl] = dt(i.substr(d, 2)), o[Vo] = dt(i.substr(h));
});
function tA(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var nA = /[ap]\.?m?\.?/i, rA = yd("Hours", !0);
function aA(i, o, c) {
  return i > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
}
var Qb = {
  calendar: G2,
  longDateFormat: K2,
  invalidDate: J2,
  ordinal: tU,
  dayOfMonthOrdinalParse: nU,
  relativeTime: aU,
  months: gU,
  monthsShort: Fb,
  week: OU,
  weekdays: FU,
  weekdaysMin: HU,
  weekdaysShort: Bb,
  meridiemParse: nA
}, cn = {}, Fh = {}, Kh;
function iA(i, o) {
  var c, d = Math.min(i.length, o.length);
  for (c = 0; c < d; c += 1)
    if (i[c] !== o[c])
      return c;
  return d;
}
function UT(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function lA(i) {
  for (var o = 0, c, d, h, S; o < i.length; ) {
    for (S = UT(i[o]).split("-"), c = S.length, d = UT(i[o + 1]), d = d ? d.split("-") : null; c > 0; ) {
      if (h = Ag(S.slice(0, c).join("-")), h)
        return h;
      if (d && d.length >= c && iA(S, d) >= c - 1)
        break;
      c--;
    }
    o++;
  }
  return Kh;
}
function oA(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function Ag(i) {
  var o = null, c;
  if (cn[i] === void 0 && typeof module < "u" && module && module.exports && oA(i))
    try {
      o = Kh._abbr, c = require, c("./locale/" + i), Xu(o);
    } catch {
      cn[i] = null;
    }
  return cn[i];
}
function Xu(i, o) {
  var c;
  return i && (Fa(o) ? c = Wo(i) : c = _w(i, o), c ? Kh = c : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Kh._abbr;
}
function _w(i, o) {
  if (o !== null) {
    var c, d = Qb;
    if (o.abbr = i, cn[i] != null)
      Mb(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), d = cn[i]._config;
    else if (o.parentLocale != null)
      if (cn[o.parentLocale] != null)
        d = cn[o.parentLocale]._config;
      else if (c = Ag(o.parentLocale), c != null)
        d = c._config;
      else
        return Fh[o.parentLocale] || (Fh[o.parentLocale] = []), Fh[o.parentLocale].push({
          name: i,
          config: o
        }), null;
    return cn[i] = new hw(IE(d, o)), Fh[i] && Fh[i].forEach(function(h) {
      _w(h.name, h.config);
    }), Xu(i), cn[i];
  } else
    return delete cn[i], null;
}
function uA(i, o) {
  if (o != null) {
    var c, d, h = Qb;
    cn[i] != null && cn[i].parentLocale != null ? cn[i].set(IE(cn[i]._config, o)) : (d = Ag(i), d != null && (h = d._config), o = IE(h, o), d == null && (o.abbr = i), c = new hw(o), c.parentLocale = cn[i], cn[i] = c), Xu(i);
  } else
    cn[i] != null && (cn[i].parentLocale != null ? (cn[i] = cn[i].parentLocale, i === Xu() && Xu(i)) : cn[i] != null && delete cn[i]);
  return cn[i];
}
function Wo(i) {
  var o;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Kh;
  if (!nl(i)) {
    if (o = Ag(i), o)
      return o;
    i = [i];
  }
  return lA(i);
}
function sA() {
  return VE(cn);
}
function xw(i) {
  var o, c = i._a;
  return c && ut(i).overflow === -2 && (o = c[Io] < 0 || c[Io] > 11 ? Io : c[Vl] < 1 || c[Vl] > Ug(c[Gr], c[Io]) ? Vl : c[nr] < 0 || c[nr] > 24 || c[nr] === 24 && (c[tl] !== 0 || c[Vo] !== 0 || c[cc] !== 0) ? nr : c[tl] < 0 || c[tl] > 59 ? tl : c[Vo] < 0 || c[Vo] > 59 ? Vo : c[cc] < 0 || c[cc] > 999 ? cc : -1, ut(i)._overflowDayOfYear && (o < Gr || o > Vl) && (o = Vl), ut(i)._overflowWeeks && o === -1 && (o = vU), ut(i)._overflowWeekday && o === -1 && (o = mU), ut(i).overflow = o), i;
}
var cA = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, fA = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, dA = /Z|[+-]\d\d(?::?\d\d)?/, ig = [
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
], xE = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], pA = /^\/?Date\((-?\d+)/i, hA = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, vA = {
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
function qb(i) {
  var o, c, d = i._i, h = cA.exec(d) || fA.exec(d), S, m, C, T, R = ig.length, k = xE.length;
  if (h) {
    for (ut(i).iso = !0, o = 0, c = R; o < c; o++)
      if (ig[o][1].exec(h[1])) {
        m = ig[o][0], S = ig[o][2] !== !1;
        break;
      }
    if (m == null) {
      i._isValid = !1;
      return;
    }
    if (h[3]) {
      for (o = 0, c = k; o < c; o++)
        if (xE[o][1].exec(h[3])) {
          C = (h[2] || " ") + xE[o][0];
          break;
        }
      if (C == null) {
        i._isValid = !1;
        return;
      }
    }
    if (!S && C != null) {
      i._isValid = !1;
      return;
    }
    if (h[4])
      if (dA.exec(h[4]))
        T = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = m + (C || "") + (T || ""), Tw(i);
  } else
    i._isValid = !1;
}
function mA(i, o, c, d, h, S) {
  var m = [
    yA(i),
    Fb.indexOf(o),
    parseInt(c, 10),
    parseInt(d, 10),
    parseInt(h, 10)
  ];
  return S && m.push(parseInt(S, 10)), m;
}
function yA(i) {
  var o = parseInt(i, 10);
  return o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o;
}
function gA(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function SA(i, o, c) {
  if (i) {
    var d = Bb.indexOf(i), h = new Date(
      o[0],
      o[1],
      o[2]
    ).getDay();
    if (d !== h)
      return ut(c).weekdayMismatch = !0, c._isValid = !1, !1;
  }
  return !0;
}
function EA(i, o, c) {
  if (i)
    return vA[i];
  if (o)
    return 0;
  var d = parseInt(c, 10), h = d % 100, S = (d - h) / 100;
  return S * 60 + h;
}
function Zb(i) {
  var o = hA.exec(gA(i._i)), c;
  if (o) {
    if (c = mA(
      o[4],
      o[3],
      o[2],
      o[5],
      o[6],
      o[7]
    ), !SA(o[1], c, i))
      return;
    i._a = c, i._tzm = EA(o[8], o[9], o[10]), i._d = qh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), ut(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function wA(i) {
  var o = pA.exec(i._i);
  if (o !== null) {
    i._d = /* @__PURE__ */ new Date(+o[1]);
    return;
  }
  if (qb(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if (Zb(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : we.createFromInputFallback(i);
}
we.createFromInputFallback = Ci(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(i) {
    i._d = /* @__PURE__ */ new Date(i._i + (i._useUTC ? " UTC" : ""));
  }
);
function dd(i, o, c) {
  return i ?? o ?? c;
}
function _A(i) {
  var o = new Date(we.now());
  return i._useUTC ? [
    o.getUTCFullYear(),
    o.getUTCMonth(),
    o.getUTCDate()
  ] : [o.getFullYear(), o.getMonth(), o.getDate()];
}
function Cw(i) {
  var o, c, d = [], h, S, m;
  if (!i._d) {
    for (h = _A(i), i._w && i._a[Vl] == null && i._a[Io] == null && xA(i), i._dayOfYear != null && (m = dd(i._a[Gr], h[Gr]), (i._dayOfYear > $h(m) || i._dayOfYear === 0) && (ut(i)._overflowDayOfYear = !0), c = qh(m, 0, i._dayOfYear), i._a[Io] = c.getUTCMonth(), i._a[Vl] = c.getUTCDate()), o = 0; o < 3 && i._a[o] == null; ++o)
      i._a[o] = d[o] = h[o];
    for (; o < 7; o++)
      i._a[o] = d[o] = i._a[o] == null ? o === 2 ? 1 : 0 : i._a[o];
    i._a[nr] === 24 && i._a[tl] === 0 && i._a[Vo] === 0 && i._a[cc] === 0 && (i._nextDay = !0, i._a[nr] = 0), i._d = (i._useUTC ? qh : kU).apply(
      null,
      d
    ), S = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[nr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== S && (ut(i).weekdayMismatch = !0);
  }
}
function xA(i) {
  var o, c, d, h, S, m, C, T, R;
  o = i._w, o.GG != null || o.W != null || o.E != null ? (S = 1, m = 4, c = dd(
    o.GG,
    i._a[Gr],
    Zh(an(), 1, 4).year
  ), d = dd(o.W, 1), h = dd(o.E, 1), (h < 1 || h > 7) && (T = !0)) : (S = i._locale._week.dow, m = i._locale._week.doy, R = Zh(an(), S, m), c = dd(o.gg, i._a[Gr], R.year), d = dd(o.w, R.week), o.d != null ? (h = o.d, (h < 0 || h > 6) && (T = !0)) : o.e != null ? (h = o.e + S, (o.e < 0 || o.e > 6) && (T = !0)) : h = S), d < 1 || d > $o(c, S, m) ? ut(i)._overflowWeeks = !0 : T != null ? ut(i)._overflowWeekday = !0 : (C = $b(c, d, h, S, m), i._a[Gr] = C.year, i._dayOfYear = C.dayOfYear);
}
we.ISO_8601 = function() {
};
we.RFC_2822 = function() {
};
function Tw(i) {
  if (i._f === we.ISO_8601) {
    qb(i);
    return;
  }
  if (i._f === we.RFC_2822) {
    Zb(i);
    return;
  }
  i._a = [], ut(i).empty = !0;
  var o = "" + i._i, c, d, h, S, m, C = o.length, T = 0, R, k;
  for (h = Ob(i._f, i._locale).match(vw) || [], k = h.length, c = 0; c < k; c++)
    S = h[c], d = (o.match(dU(S, i)) || [])[0], d && (m = o.substr(0, o.indexOf(d)), m.length > 0 && ut(i).unusedInput.push(m), o = o.slice(
      o.indexOf(d) + d.length
    ), T += d.length), hd[S] ? (d ? ut(i).empty = !1 : ut(i).unusedTokens.push(S), hU(S, d, i)) : i._strict && !d && ut(i).unusedTokens.push(S);
  ut(i).charsLeftOver = C - T, o.length > 0 && ut(i).unusedInput.push(o), i._a[nr] <= 12 && ut(i).bigHour === !0 && i._a[nr] > 0 && (ut(i).bigHour = void 0), ut(i).parsedDateParts = i._a.slice(0), ut(i).meridiem = i._meridiem, i._a[nr] = CA(
    i._locale,
    i._a[nr],
    i._meridiem
  ), R = ut(i).era, R !== null && (i._a[Gr] = i._locale.erasConvertYear(R, i._a[Gr])), Cw(i), xw(i);
}
function CA(i, o, c) {
  var d;
  return c == null ? o : i.meridiemHour != null ? i.meridiemHour(o, c) : (i.isPM != null && (d = i.isPM(c), d && o < 12 && (o += 12), !d && o === 12 && (o = 0)), o);
}
function TA(i) {
  var o, c, d, h, S, m, C = !1, T = i._f.length;
  if (T === 0) {
    ut(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (h = 0; h < T; h++)
    S = 0, m = !1, o = pw({}, i), i._useUTC != null && (o._useUTC = i._useUTC), o._f = i._f[h], Tw(o), dw(o) && (m = !0), S += ut(o).charsLeftOver, S += ut(o).unusedTokens.length * 10, ut(o).score = S, C ? S < d && (d = S, c = o) : (d == null || S < d || m) && (d = S, c = o, m && (C = !0));
  Zu(i, c || o);
}
function bA(i) {
  if (!i._d) {
    var o = mw(i._i), c = o.day === void 0 ? o.date : o.day;
    i._a = Db(
      [o.year, o.month, c, o.hour, o.minute, o.second, o.millisecond],
      function(d) {
        return d && parseInt(d, 10);
      }
    ), Cw(i);
  }
}
function RA(i) {
  var o = new tv(xw(Kb(i)));
  return o._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
}
function Kb(i) {
  var o = i._i, c = i._f;
  return i._locale = i._locale || Wo(i._l), o === null || c === void 0 && o === "" ? Rg({ nullInput: !0 }) : (typeof o == "string" && (i._i = o = i._locale.preparse(o)), rl(o) ? new tv(xw(o)) : (ev(o) ? i._d = o : nl(c) ? TA(i) : c ? Tw(i) : DA(i), dw(i) || (i._d = null), i));
}
function DA(i) {
  var o = i._i;
  Fa(o) ? i._d = new Date(we.now()) : ev(o) ? i._d = new Date(o.valueOf()) : typeof o == "string" ? wA(i) : nl(o) ? (i._a = Db(o.slice(0), function(c) {
    return parseInt(c, 10);
  }), Cw(i)) : fc(o) ? bA(i) : Bo(o) ? i._d = new Date(o) : we.createFromInputFallback(i);
}
function Xb(i, o, c, d, h) {
  var S = {};
  return (o === !0 || o === !1) && (d = o, o = void 0), (c === !0 || c === !1) && (d = c, c = void 0), (fc(i) && fw(i) || nl(i) && i.length === 0) && (i = void 0), S._isAMomentObject = !0, S._useUTC = S._isUTC = h, S._l = c, S._i = i, S._f = o, S._strict = d, RA(S);
}
function an(i, o, c, d) {
  return Xb(i, o, c, d, !1);
}
var kA = Ci(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = an.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : Rg();
  }
), MA = Ci(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = an.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : Rg();
  }
);
function Jb(i, o) {
  var c, d;
  if (o.length === 1 && nl(o[0]) && (o = o[0]), !o.length)
    return an();
  for (c = o[0], d = 1; d < o.length; ++d)
    (!o[d].isValid() || o[d][i](c)) && (c = o[d]);
  return c;
}
function OA() {
  var i = [].slice.call(arguments, 0);
  return Jb("isBefore", i);
}
function NA() {
  var i = [].slice.call(arguments, 0);
  return Jb("isAfter", i);
}
var LA = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Hh = [
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
function UA(i) {
  var o, c = !1, d, h = Hh.length;
  for (o in i)
    if (Dt(i, o) && !(Mn.call(Hh, o) !== -1 && (i[o] == null || !isNaN(i[o]))))
      return !1;
  for (d = 0; d < h; ++d)
    if (i[Hh[d]]) {
      if (c)
        return !1;
      parseFloat(i[Hh[d]]) !== dt(i[Hh[d]]) && (c = !0);
    }
  return !0;
}
function AA() {
  return this._isValid;
}
function zA() {
  return al(NaN);
}
function zg(i) {
  var o = mw(i), c = o.year || 0, d = o.quarter || 0, h = o.month || 0, S = o.week || o.isoWeek || 0, m = o.day || 0, C = o.hour || 0, T = o.minute || 0, R = o.second || 0, k = o.millisecond || 0;
  this._isValid = UA(o), this._milliseconds = +k + R * 1e3 + // 1000
  T * 6e4 + // 1000 * 60
  C * 1e3 * 60 * 60, this._days = +m + S * 7, this._months = +h + d * 3 + c * 12, this._data = {}, this._locale = Wo(), this._bubble();
}
function dg(i) {
  return i instanceof zg;
}
function BE(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function jA(i, o, c) {
  var d = Math.min(i.length, o.length), h = Math.abs(i.length - o.length), S = 0, m;
  for (m = 0; m < d; m++)
    (c && i[m] !== o[m] || !c && dt(i[m]) !== dt(o[m])) && S++;
  return S + h;
}
function eR(i, o) {
  Ie(i, 0, 0, function() {
    var c = this.utcOffset(), d = "+";
    return c < 0 && (c = -c, d = "-"), d + $l(~~(c / 60), 2) + o + $l(~~c % 60, 2);
  });
}
eR("Z", ":");
eR("ZZ", "");
be("Z", Lg);
be("ZZ", Lg);
It(["Z", "ZZ"], function(i, o, c) {
  c._useUTC = !0, c._tzm = bw(Lg, i);
});
var FA = /([\+\-]|\d\d)/gi;
function bw(i, o) {
  var c = (o || "").match(i), d, h, S;
  return c === null ? null : (d = c[c.length - 1] || [], h = (d + "").match(FA) || ["-", 0, 0], S = +(h[1] * 60) + dt(h[2]), S === 0 ? 0 : h[0] === "+" ? S : -S);
}
function Rw(i, o) {
  var c, d;
  return o._isUTC ? (c = o.clone(), d = (rl(i) || ev(i) ? i.valueOf() : an(i).valueOf()) - c.valueOf(), c._d.setTime(c._d.valueOf() + d), we.updateOffset(c, !1), c) : an(i).local();
}
function WE(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
we.updateOffset = function() {
};
function HA(i, o, c) {
  var d = this._offset || 0, h;
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    if (typeof i == "string") {
      if (i = bw(Lg, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !c && (i = i * 60);
    return !this._isUTC && o && (h = WE(this)), this._offset = i, this._isUTC = !0, h != null && this.add(h, "m"), d !== i && (!o || this._changeInProgress ? rR(
      this,
      al(i - d, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, we.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? d : WE(this);
}
function PA(i, o) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, o), this) : -this.utcOffset();
}
function YA(i) {
  return this.utcOffset(0, i);
}
function IA(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(WE(this), "m")), this;
}
function VA() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = bw(cU, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function $A(i) {
  return this.isValid() ? (i = i ? an(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function BA() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function WA() {
  if (!Fa(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, o;
  return pw(i, this), i = Kb(i), i._a ? (o = i._isUTC ? Bl(i._a) : an(i._a), this._isDSTShifted = this.isValid() && jA(i._a, o.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function GA() {
  return this.isValid() ? !this._isUTC : !1;
}
function QA() {
  return this.isValid() ? this._isUTC : !1;
}
function tR() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var qA = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ZA = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function al(i, o) {
  var c = i, d = null, h, S, m;
  return dg(i) ? c = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : Bo(i) || !isNaN(+i) ? (c = {}, o ? c[o] = +i : c.milliseconds = +i) : (d = qA.exec(i)) ? (h = d[1] === "-" ? -1 : 1, c = {
    y: 0,
    d: dt(d[Vl]) * h,
    h: dt(d[nr]) * h,
    m: dt(d[tl]) * h,
    s: dt(d[Vo]) * h,
    ms: dt(BE(d[cc] * 1e3)) * h
    // the millisecond decimal point is included in the match
  }) : (d = ZA.exec(i)) ? (h = d[1] === "-" ? -1 : 1, c = {
    y: sc(d[2], h),
    M: sc(d[3], h),
    w: sc(d[4], h),
    d: sc(d[5], h),
    h: sc(d[6], h),
    m: sc(d[7], h),
    s: sc(d[8], h)
  }) : c == null ? c = {} : typeof c == "object" && ("from" in c || "to" in c) && (m = KA(
    an(c.from),
    an(c.to)
  ), c = {}, c.ms = m.milliseconds, c.M = m.months), S = new zg(c), dg(i) && Dt(i, "_locale") && (S._locale = i._locale), dg(i) && Dt(i, "_isValid") && (S._isValid = i._isValid), S;
}
al.fn = zg.prototype;
al.invalid = zA;
function sc(i, o) {
  var c = i && parseFloat(i.replace(",", "."));
  return (isNaN(c) ? 0 : c) * o;
}
function AT(i, o) {
  var c = {};
  return c.months = o.month() - i.month() + (o.year() - i.year()) * 12, i.clone().add(c.months, "M").isAfter(o) && --c.months, c.milliseconds = +o - +i.clone().add(c.months, "M"), c;
}
function KA(i, o) {
  var c;
  return i.isValid() && o.isValid() ? (o = Rw(o, i), i.isBefore(o) ? c = AT(i, o) : (c = AT(o, i), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
}
function nR(i, o) {
  return function(c, d) {
    var h, S;
    return d !== null && !isNaN(+d) && (Mb(
      o,
      "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), S = c, c = d, d = S), h = al(c, d), rR(this, h, i), this;
  };
}
function rR(i, o, c, d) {
  var h = o._milliseconds, S = BE(o._days), m = BE(o._months);
  i.isValid() && (d = d ?? !0, m && Pb(i, yg(i, "Month") + m * c), S && Lb(i, "Date", yg(i, "Date") + S * c), h && i._d.setTime(i._d.valueOf() + h * c), d && we.updateOffset(i, S || m));
}
var XA = nR(1, "add"), JA = nR(-1, "subtract");
function aR(i) {
  return typeof i == "string" || i instanceof String;
}
function ez(i) {
  return rl(i) || ev(i) || aR(i) || Bo(i) || nz(i) || tz(i) || i === null || i === void 0;
}
function tz(i) {
  var o = fc(i) && !fw(i), c = !1, d = [
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
  ], h, S, m = d.length;
  for (h = 0; h < m; h += 1)
    S = d[h], c = c || Dt(i, S);
  return o && c;
}
function nz(i) {
  var o = nl(i), c = !1;
  return o && (c = i.filter(function(d) {
    return !Bo(d) && aR(i);
  }).length === 0), o && c;
}
function rz(i) {
  var o = fc(i) && !fw(i), c = !1, d = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], h, S;
  for (h = 0; h < d.length; h += 1)
    S = d[h], c = c || Dt(i, S);
  return o && c;
}
function az(i, o) {
  var c = i.diff(o, "days", !0);
  return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
}
function iz(i, o) {
  arguments.length === 1 && (arguments[0] ? ez(arguments[0]) ? (i = arguments[0], o = void 0) : rz(arguments[0]) && (o = arguments[0], i = void 0) : (i = void 0, o = void 0));
  var c = i || an(), d = Rw(c, this).startOf("day"), h = we.calendarFormat(this, d) || "sameElse", S = o && (Wl(o[h]) ? o[h].call(this, c) : o[h]);
  return this.format(
    S || this.localeData().calendar(h, this, an(c))
  );
}
function lz() {
  return new tv(this);
}
function oz(i, o) {
  var c = rl(i) ? i : an(i);
  return this.isValid() && c.isValid() ? (o = Ti(o) || "millisecond", o === "millisecond" ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(o).valueOf()) : !1;
}
function uz(i, o) {
  var c = rl(i) ? i : an(i);
  return this.isValid() && c.isValid() ? (o = Ti(o) || "millisecond", o === "millisecond" ? this.valueOf() < c.valueOf() : this.clone().endOf(o).valueOf() < c.valueOf()) : !1;
}
function sz(i, o, c, d) {
  var h = rl(i) ? i : an(i), S = rl(o) ? o : an(o);
  return this.isValid() && h.isValid() && S.isValid() ? (d = d || "()", (d[0] === "(" ? this.isAfter(h, c) : !this.isBefore(h, c)) && (d[1] === ")" ? this.isBefore(S, c) : !this.isAfter(S, c))) : !1;
}
function cz(i, o) {
  var c = rl(i) ? i : an(i), d;
  return this.isValid() && c.isValid() ? (o = Ti(o) || "millisecond", o === "millisecond" ? this.valueOf() === c.valueOf() : (d = c.valueOf(), this.clone().startOf(o).valueOf() <= d && d <= this.clone().endOf(o).valueOf())) : !1;
}
function fz(i, o) {
  return this.isSame(i, o) || this.isAfter(i, o);
}
function dz(i, o) {
  return this.isSame(i, o) || this.isBefore(i, o);
}
function pz(i, o, c) {
  var d, h, S;
  if (!this.isValid())
    return NaN;
  if (d = Rw(i, this), !d.isValid())
    return NaN;
  switch (h = (d.utcOffset() - this.utcOffset()) * 6e4, o = Ti(o), o) {
    case "year":
      S = pg(this, d) / 12;
      break;
    case "month":
      S = pg(this, d);
      break;
    case "quarter":
      S = pg(this, d) / 3;
      break;
    case "second":
      S = (this - d) / 1e3;
      break;
    case "minute":
      S = (this - d) / 6e4;
      break;
    case "hour":
      S = (this - d) / 36e5;
      break;
    case "day":
      S = (this - d - h) / 864e5;
      break;
    case "week":
      S = (this - d - h) / 6048e5;
      break;
    default:
      S = this - d;
  }
  return c ? S : xi(S);
}
function pg(i, o) {
  if (i.date() < o.date())
    return -pg(o, i);
  var c = (o.year() - i.year()) * 12 + (o.month() - i.month()), d = i.clone().add(c, "months"), h, S;
  return o - d < 0 ? (h = i.clone().add(c - 1, "months"), S = (o - d) / (d - h)) : (h = i.clone().add(c + 1, "months"), S = (o - d) / (h - d)), -(c + S) || 0;
}
we.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
we.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function hz() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function vz(i) {
  if (!this.isValid())
    return null;
  var o = i !== !0, c = o ? this.clone().utc() : this;
  return c.year() < 0 || c.year() > 9999 ? fg(
    c,
    o ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Wl(Date.prototype.toISOString) ? o ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", fg(c, "Z")) : fg(
    c,
    o ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function mz() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", o = "", c, d, h, S;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", o = "Z"), c = "[" + i + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", h = "-MM-DD[T]HH:mm:ss.SSS", S = o + '[")]', this.format(c + d + h + S);
}
function yz(i) {
  i || (i = this.isUtc() ? we.defaultFormatUtc : we.defaultFormat);
  var o = fg(this, i);
  return this.localeData().postformat(o);
}
function gz(i, o) {
  return this.isValid() && (rl(i) && i.isValid() || an(i).isValid()) ? al({ to: this, from: i }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function Sz(i) {
  return this.from(an(), i);
}
function Ez(i, o) {
  return this.isValid() && (rl(i) && i.isValid() || an(i).isValid()) ? al({ from: this, to: i }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function wz(i) {
  return this.to(an(), i);
}
function iR(i) {
  var o;
  return i === void 0 ? this._locale._abbr : (o = Wo(i), o != null && (this._locale = o), this);
}
var lR = Ci(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function oR() {
  return this._locale;
}
var Eg = 1e3, vd = 60 * Eg, wg = 60 * vd, uR = (365 * 400 + 97) * 24 * wg;
function md(i, o) {
  return (i % o + o) % o;
}
function sR(i, o, c) {
  return i < 100 && i >= 0 ? new Date(i + 400, o, c) - uR : new Date(i, o, c).valueOf();
}
function cR(i, o, c) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, o, c) - uR : Date.UTC(i, o, c);
}
function _z(i) {
  var o, c;
  if (i = Ti(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? cR : sR, i) {
    case "year":
      o = c(this.year(), 0, 1);
      break;
    case "quarter":
      o = c(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      o = c(this.year(), this.month(), 1);
      break;
    case "week":
      o = c(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      o = c(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      o = c(this.year(), this.month(), this.date());
      break;
    case "hour":
      o = this._d.valueOf(), o -= md(
        o + (this._isUTC ? 0 : this.utcOffset() * vd),
        wg
      );
      break;
    case "minute":
      o = this._d.valueOf(), o -= md(o, vd);
      break;
    case "second":
      o = this._d.valueOf(), o -= md(o, Eg);
      break;
  }
  return this._d.setTime(o), we.updateOffset(this, !0), this;
}
function xz(i) {
  var o, c;
  if (i = Ti(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? cR : sR, i) {
    case "year":
      o = c(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      o = c(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      o = c(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      o = c(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      o = c(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      o = c(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      o = this._d.valueOf(), o += wg - md(
        o + (this._isUTC ? 0 : this.utcOffset() * vd),
        wg
      ) - 1;
      break;
    case "minute":
      o = this._d.valueOf(), o += vd - md(o, vd) - 1;
      break;
    case "second":
      o = this._d.valueOf(), o += Eg - md(o, Eg) - 1;
      break;
  }
  return this._d.setTime(o), we.updateOffset(this, !0), this;
}
function Cz() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Tz() {
  return Math.floor(this.valueOf() / 1e3);
}
function bz() {
  return new Date(this.valueOf());
}
function Rz() {
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
function Dz() {
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
function kz() {
  return this.isValid() ? this.toISOString() : null;
}
function Mz() {
  return dw(this);
}
function Oz() {
  return Zu({}, ut(this));
}
function Nz() {
  return ut(this).overflow;
}
function Lz() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Ie("N", 0, 0, "eraAbbr");
Ie("NN", 0, 0, "eraAbbr");
Ie("NNN", 0, 0, "eraAbbr");
Ie("NNNN", 0, 0, "eraName");
Ie("NNNNN", 0, 0, "eraNarrow");
Ie("y", ["y", 1], "yo", "eraYear");
Ie("y", ["yy", 2], 0, "eraYear");
Ie("y", ["yyy", 3], 0, "eraYear");
Ie("y", ["yyyy", 4], 0, "eraYear");
be("N", Dw);
be("NN", Dw);
be("NNN", Dw);
be("NNNN", $z);
be("NNNNN", Bz);
It(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, o, c, d) {
    var h = c._locale.erasParse(i, d, c._strict);
    h ? ut(c).era = h : ut(c).invalidEra = i;
  }
);
be("y", gd);
be("yy", gd);
be("yyy", gd);
be("yyyy", gd);
be("yo", Wz);
It(["y", "yy", "yyy", "yyyy"], Gr);
It(["yo"], function(i, o, c, d) {
  var h;
  c._locale._eraYearOrdinalRegex && (h = i.match(c._locale._eraYearOrdinalRegex)), c._locale.eraYearOrdinalParse ? o[Gr] = c._locale.eraYearOrdinalParse(i, h) : o[Gr] = parseInt(i, 10);
});
function Uz(i, o) {
  var c, d, h, S = this._eras || Wo("en")._eras;
  for (c = 0, d = S.length; c < d; ++c) {
    switch (typeof S[c].since) {
      case "string":
        h = we(S[c].since).startOf("day"), S[c].since = h.valueOf();
        break;
    }
    switch (typeof S[c].until) {
      case "undefined":
        S[c].until = 1 / 0;
        break;
      case "string":
        h = we(S[c].until).startOf("day").valueOf(), S[c].until = h.valueOf();
        break;
    }
  }
  return S;
}
function Az(i, o, c) {
  var d, h, S = this.eras(), m, C, T;
  for (i = i.toUpperCase(), d = 0, h = S.length; d < h; ++d)
    if (m = S[d].name.toUpperCase(), C = S[d].abbr.toUpperCase(), T = S[d].narrow.toUpperCase(), c)
      switch (o) {
        case "N":
        case "NN":
        case "NNN":
          if (C === i)
            return S[d];
          break;
        case "NNNN":
          if (m === i)
            return S[d];
          break;
        case "NNNNN":
          if (T === i)
            return S[d];
          break;
      }
    else if ([m, C, T].indexOf(i) >= 0)
      return S[d];
}
function zz(i, o) {
  var c = i.since <= i.until ? 1 : -1;
  return o === void 0 ? we(i.since).year() : we(i.since).year() + (o - i.offset) * c;
}
function jz() {
  var i, o, c, d = this.localeData().eras();
  for (i = 0, o = d.length; i < o; ++i)
    if (c = this.clone().startOf("day").valueOf(), d[i].since <= c && c <= d[i].until || d[i].until <= c && c <= d[i].since)
      return d[i].name;
  return "";
}
function Fz() {
  var i, o, c, d = this.localeData().eras();
  for (i = 0, o = d.length; i < o; ++i)
    if (c = this.clone().startOf("day").valueOf(), d[i].since <= c && c <= d[i].until || d[i].until <= c && c <= d[i].since)
      return d[i].narrow;
  return "";
}
function Hz() {
  var i, o, c, d = this.localeData().eras();
  for (i = 0, o = d.length; i < o; ++i)
    if (c = this.clone().startOf("day").valueOf(), d[i].since <= c && c <= d[i].until || d[i].until <= c && c <= d[i].since)
      return d[i].abbr;
  return "";
}
function Pz() {
  var i, o, c, d, h = this.localeData().eras();
  for (i = 0, o = h.length; i < o; ++i)
    if (c = h[i].since <= h[i].until ? 1 : -1, d = this.clone().startOf("day").valueOf(), h[i].since <= d && d <= h[i].until || h[i].until <= d && d <= h[i].since)
      return (this.year() - we(h[i].since).year()) * c + h[i].offset;
  return this.year();
}
function Yz(i) {
  return Dt(this, "_erasNameRegex") || kw.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function Iz(i) {
  return Dt(this, "_erasAbbrRegex") || kw.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function Vz(i) {
  return Dt(this, "_erasNarrowRegex") || kw.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function Dw(i, o) {
  return o.erasAbbrRegex(i);
}
function $z(i, o) {
  return o.erasNameRegex(i);
}
function Bz(i, o) {
  return o.erasNarrowRegex(i);
}
function Wz(i, o) {
  return o._eraYearOrdinalRegex || gd;
}
function kw() {
  var i = [], o = [], c = [], d = [], h, S, m = this.eras();
  for (h = 0, S = m.length; h < S; ++h)
    o.push(ti(m[h].name)), i.push(ti(m[h].abbr)), c.push(ti(m[h].narrow)), d.push(ti(m[h].name)), d.push(ti(m[h].abbr)), d.push(ti(m[h].narrow));
  this._erasRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  );
}
Ie(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Ie(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function jg(i, o) {
  Ie(0, [i, i.length], 0, o);
}
jg("gggg", "weekYear");
jg("ggggg", "weekYear");
jg("GGGG", "isoWeekYear");
jg("GGGGG", "isoWeekYear");
Qr("weekYear", "gg");
Qr("isoWeekYear", "GG");
qr("weekYear", 1);
qr("isoWeekYear", 1);
be("G", Ng);
be("g", Ng);
be("GG", ln, ni);
be("gg", ln, ni);
be("GGGG", gw, yw);
be("gggg", gw, yw);
be("GGGGG", Og, kg);
be("ggggg", Og, kg);
rv(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, o, c, d) {
    o[d.substr(0, 2)] = dt(i);
  }
);
rv(["gg", "GG"], function(i, o, c, d) {
  o[d] = we.parseTwoDigitYear(i);
});
function Gz(i) {
  return fR.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Qz(i) {
  return fR.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function qz() {
  return $o(this.year(), 1, 4);
}
function Zz() {
  return $o(this.isoWeekYear(), 1, 4);
}
function Kz() {
  var i = this.localeData()._week;
  return $o(this.year(), i.dow, i.doy);
}
function Xz() {
  var i = this.localeData()._week;
  return $o(this.weekYear(), i.dow, i.doy);
}
function fR(i, o, c, d, h) {
  var S;
  return i == null ? Zh(this, d, h).year : (S = $o(i, d, h), o > S && (o = S), Jz.call(this, i, o, c, d, h));
}
function Jz(i, o, c, d, h) {
  var S = $b(i, o, c, d, h), m = qh(S.year, 0, S.dayOfYear);
  return this.year(m.getUTCFullYear()), this.month(m.getUTCMonth()), this.date(m.getUTCDate()), this;
}
Ie("Q", 0, "Qo", "quarter");
Qr("quarter", "Q");
qr("quarter", 7);
be("Q", Ub);
It("Q", function(i, o) {
  o[Io] = (dt(i) - 1) * 3;
});
function ej(i) {
  return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3);
}
Ie("D", ["DD", 2], "Do", "date");
Qr("date", "D");
qr("date", 9);
be("D", ln);
be("DD", ln, ni);
be("Do", function(i, o) {
  return i ? o._dayOfMonthOrdinalParse || o._ordinalParse : o._dayOfMonthOrdinalParseLenient;
});
It(["D", "DD"], Vl);
It("Do", function(i, o) {
  o[Vl] = dt(i.match(ln)[0]);
});
var dR = yd("Date", !0);
Ie("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Qr("dayOfYear", "DDD");
qr("dayOfYear", 4);
be("DDD", Mg);
be("DDDD", Ab);
It(["DDD", "DDDD"], function(i, o, c) {
  c._dayOfYear = dt(i);
});
function tj(i) {
  var o = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return i == null ? o : this.add(i - o, "d");
}
Ie("m", ["mm", 2], 0, "minute");
Qr("minute", "m");
qr("minute", 14);
be("m", ln);
be("mm", ln, ni);
It(["m", "mm"], tl);
var nj = yd("Minutes", !1);
Ie("s", ["ss", 2], 0, "second");
Qr("second", "s");
qr("second", 15);
be("s", ln);
be("ss", ln, ni);
It(["s", "ss"], Vo);
var rj = yd("Seconds", !1);
Ie("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Ie(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Ie(0, ["SSS", 3], 0, "millisecond");
Ie(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Ie(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Ie(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Ie(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Ie(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Ie(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Qr("millisecond", "ms");
qr("millisecond", 16);
be("S", Mg, Ub);
be("SS", Mg, ni);
be("SSS", Mg, Ab);
var Ku, pR;
for (Ku = "SSSS"; Ku.length <= 9; Ku += "S")
  be(Ku, gd);
function aj(i, o) {
  o[cc] = dt(("0." + i) * 1e3);
}
for (Ku = "S"; Ku.length <= 9; Ku += "S")
  It(Ku, aj);
pR = yd("Milliseconds", !1);
Ie("z", 0, 0, "zoneAbbr");
Ie("zz", 0, 0, "zoneName");
function ij() {
  return this._isUTC ? "UTC" : "";
}
function lj() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var oe = tv.prototype;
oe.add = XA;
oe.calendar = iz;
oe.clone = lz;
oe.diff = pz;
oe.endOf = xz;
oe.format = yz;
oe.from = gz;
oe.fromNow = Sz;
oe.to = Ez;
oe.toNow = wz;
oe.get = uU;
oe.invalidAt = Nz;
oe.isAfter = oz;
oe.isBefore = uz;
oe.isBetween = sz;
oe.isSame = cz;
oe.isSameOrAfter = fz;
oe.isSameOrBefore = dz;
oe.isValid = Mz;
oe.lang = lR;
oe.locale = iR;
oe.localeData = oR;
oe.max = MA;
oe.min = kA;
oe.parsingFlags = Oz;
oe.set = sU;
oe.startOf = _z;
oe.subtract = JA;
oe.toArray = Rz;
oe.toObject = Dz;
oe.toDate = bz;
oe.toISOString = vz;
oe.inspect = mz;
typeof Symbol < "u" && Symbol.for != null && (oe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
oe.toJSON = kz;
oe.toString = hz;
oe.unix = Tz;
oe.valueOf = Cz;
oe.creationData = Lz;
oe.eraName = jz;
oe.eraNarrow = Fz;
oe.eraAbbr = Hz;
oe.eraYear = Pz;
oe.year = Vb;
oe.isLeapYear = DU;
oe.weekYear = Gz;
oe.isoWeekYear = Qz;
oe.quarter = oe.quarters = ej;
oe.month = Yb;
oe.daysInMonth = TU;
oe.week = oe.weeks = UU;
oe.isoWeek = oe.isoWeeks = AU;
oe.weeksInYear = Kz;
oe.weeksInWeekYear = Xz;
oe.isoWeeksInYear = qz;
oe.isoWeeksInISOWeekYear = Zz;
oe.date = dR;
oe.day = oe.days = QU;
oe.weekday = qU;
oe.isoWeekday = ZU;
oe.dayOfYear = tj;
oe.hour = oe.hours = rA;
oe.minute = oe.minutes = nj;
oe.second = oe.seconds = rj;
oe.millisecond = oe.milliseconds = pR;
oe.utcOffset = HA;
oe.utc = YA;
oe.local = IA;
oe.parseZone = VA;
oe.hasAlignedHourOffset = $A;
oe.isDST = BA;
oe.isLocal = GA;
oe.isUtcOffset = QA;
oe.isUtc = tR;
oe.isUTC = tR;
oe.zoneAbbr = ij;
oe.zoneName = lj;
oe.dates = Ci(
  "dates accessor is deprecated. Use date instead.",
  dR
);
oe.months = Ci(
  "months accessor is deprecated. Use month instead",
  Yb
);
oe.years = Ci(
  "years accessor is deprecated. Use year instead",
  Vb
);
oe.zone = Ci(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  PA
);
oe.isDSTShifted = Ci(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  WA
);
function oj(i) {
  return an(i * 1e3);
}
function uj() {
  return an.apply(null, arguments).parseZone();
}
function hR(i) {
  return i;
}
var kt = hw.prototype;
kt.calendar = Q2;
kt.longDateFormat = X2;
kt.invalidDate = eU;
kt.ordinal = rU;
kt.preparse = hR;
kt.postformat = hR;
kt.relativeTime = iU;
kt.pastFuture = lU;
kt.set = W2;
kt.eras = Uz;
kt.erasParse = Az;
kt.erasConvertYear = zz;
kt.erasAbbrRegex = Iz;
kt.erasNameRegex = Yz;
kt.erasNarrowRegex = Vz;
kt.months = wU;
kt.monthsShort = _U;
kt.monthsParse = CU;
kt.monthsRegex = RU;
kt.monthsShortRegex = bU;
kt.week = MU;
kt.firstDayOfYear = LU;
kt.firstDayOfWeek = NU;
kt.weekdays = VU;
kt.weekdaysMin = BU;
kt.weekdaysShort = $U;
kt.weekdaysParse = GU;
kt.weekdaysRegex = KU;
kt.weekdaysShortRegex = XU;
kt.weekdaysMinRegex = JU;
kt.isPM = tA;
kt.meridiem = aA;
function _g(i, o, c, d) {
  var h = Wo(), S = Bl().set(d, o);
  return h[c](S, i);
}
function vR(i, o, c) {
  if (Bo(i) && (o = i, i = void 0), i = i || "", o != null)
    return _g(i, o, c, "month");
  var d, h = [];
  for (d = 0; d < 12; d++)
    h[d] = _g(i, d, c, "month");
  return h;
}
function Mw(i, o, c, d) {
  typeof i == "boolean" ? (Bo(o) && (c = o, o = void 0), o = o || "") : (o = i, c = o, i = !1, Bo(o) && (c = o, o = void 0), o = o || "");
  var h = Wo(), S = i ? h._week.dow : 0, m, C = [];
  if (c != null)
    return _g(o, (c + S) % 7, d, "day");
  for (m = 0; m < 7; m++)
    C[m] = _g(o, (m + S) % 7, d, "day");
  return C;
}
function sj(i, o) {
  return vR(i, o, "months");
}
function cj(i, o) {
  return vR(i, o, "monthsShort");
}
function fj(i, o, c) {
  return Mw(i, o, c, "weekdays");
}
function dj(i, o, c) {
  return Mw(i, o, c, "weekdaysShort");
}
function pj(i, o, c) {
  return Mw(i, o, c, "weekdaysMin");
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
    var o = i % 10, c = dt(i % 100 / 10) === 1 ? "th" : o === 1 ? "st" : o === 2 ? "nd" : o === 3 ? "rd" : "th";
    return i + c;
  }
});
we.lang = Ci(
  "moment.lang is deprecated. Use moment.locale instead.",
  Xu
);
we.langData = Ci(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Wo
);
var Po = Math.abs;
function hj() {
  var i = this._data;
  return this._milliseconds = Po(this._milliseconds), this._days = Po(this._days), this._months = Po(this._months), i.milliseconds = Po(i.milliseconds), i.seconds = Po(i.seconds), i.minutes = Po(i.minutes), i.hours = Po(i.hours), i.months = Po(i.months), i.years = Po(i.years), this;
}
function mR(i, o, c, d) {
  var h = al(o, c);
  return i._milliseconds += d * h._milliseconds, i._days += d * h._days, i._months += d * h._months, i._bubble();
}
function vj(i, o) {
  return mR(this, i, o, 1);
}
function mj(i, o) {
  return mR(this, i, o, -1);
}
function zT(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function yj() {
  var i = this._milliseconds, o = this._days, c = this._months, d = this._data, h, S, m, C, T;
  return i >= 0 && o >= 0 && c >= 0 || i <= 0 && o <= 0 && c <= 0 || (i += zT(GE(c) + o) * 864e5, o = 0, c = 0), d.milliseconds = i % 1e3, h = xi(i / 1e3), d.seconds = h % 60, S = xi(h / 60), d.minutes = S % 60, m = xi(S / 60), d.hours = m % 24, o += xi(m / 24), T = xi(yR(o)), c += T, o -= zT(GE(T)), C = xi(c / 12), c %= 12, d.days = o, d.months = c, d.years = C, this;
}
function yR(i) {
  return i * 4800 / 146097;
}
function GE(i) {
  return i * 146097 / 4800;
}
function gj(i) {
  if (!this.isValid())
    return NaN;
  var o, c, d = this._milliseconds;
  if (i = Ti(i), i === "month" || i === "quarter" || i === "year")
    switch (o = this._days + d / 864e5, c = this._months + yR(o), i) {
      case "month":
        return c;
      case "quarter":
        return c / 3;
      case "year":
        return c / 12;
    }
  else
    switch (o = this._days + Math.round(GE(this._months)), i) {
      case "week":
        return o / 7 + d / 6048e5;
      case "day":
        return o + d / 864e5;
      case "hour":
        return o * 24 + d / 36e5;
      case "minute":
        return o * 1440 + d / 6e4;
      case "second":
        return o * 86400 + d / 1e3;
      case "millisecond":
        return Math.floor(o * 864e5) + d;
      default:
        throw new Error("Unknown unit " + i);
    }
}
function Sj() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + dt(this._months / 12) * 31536e6 : NaN;
}
function Go(i) {
  return function() {
    return this.as(i);
  };
}
var Ej = Go("ms"), wj = Go("s"), _j = Go("m"), xj = Go("h"), Cj = Go("d"), Tj = Go("w"), bj = Go("M"), Rj = Go("Q"), Dj = Go("y");
function kj() {
  return al(this);
}
function Mj(i) {
  return i = Ti(i), this.isValid() ? this[i + "s"]() : NaN;
}
function vc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var Oj = vc("milliseconds"), Nj = vc("seconds"), Lj = vc("minutes"), Uj = vc("hours"), Aj = vc("days"), zj = vc("months"), jj = vc("years");
function Fj() {
  return xi(this.days() / 7);
}
var Yo = Math.round, pd = {
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
function Hj(i, o, c, d, h) {
  return h.relativeTime(o || 1, !!c, i, d);
}
function Pj(i, o, c, d) {
  var h = al(i).abs(), S = Yo(h.as("s")), m = Yo(h.as("m")), C = Yo(h.as("h")), T = Yo(h.as("d")), R = Yo(h.as("M")), k = Yo(h.as("w")), O = Yo(h.as("y")), j = S <= c.ss && ["s", S] || S < c.s && ["ss", S] || m <= 1 && ["m"] || m < c.m && ["mm", m] || C <= 1 && ["h"] || C < c.h && ["hh", C] || T <= 1 && ["d"] || T < c.d && ["dd", T];
  return c.w != null && (j = j || k <= 1 && ["w"] || k < c.w && ["ww", k]), j = j || R <= 1 && ["M"] || R < c.M && ["MM", R] || O <= 1 && ["y"] || ["yy", O], j[2] = o, j[3] = +i > 0, j[4] = d, Hj.apply(null, j);
}
function Yj(i) {
  return i === void 0 ? Yo : typeof i == "function" ? (Yo = i, !0) : !1;
}
function Ij(i, o) {
  return pd[i] === void 0 ? !1 : o === void 0 ? pd[i] : (pd[i] = o, i === "s" && (pd.ss = o - 1), !0);
}
function Vj(i, o) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var c = !1, d = pd, h, S;
  return typeof i == "object" && (o = i, i = !1), typeof i == "boolean" && (c = i), typeof o == "object" && (d = Object.assign({}, pd, o), o.s != null && o.ss == null && (d.ss = o.s - 1)), h = this.localeData(), S = Pj(this, !c, d, h), c && (S = h.pastFuture(+this, S)), h.postformat(S);
}
var CE = Math.abs;
function fd(i) {
  return (i > 0) - (i < 0) || +i;
}
function Fg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = CE(this._milliseconds) / 1e3, o = CE(this._days), c = CE(this._months), d, h, S, m, C = this.asSeconds(), T, R, k, O;
  return C ? (d = xi(i / 60), h = xi(d / 60), i %= 60, d %= 60, S = xi(c / 12), c %= 12, m = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", T = C < 0 ? "-" : "", R = fd(this._months) !== fd(C) ? "-" : "", k = fd(this._days) !== fd(C) ? "-" : "", O = fd(this._milliseconds) !== fd(C) ? "-" : "", T + "P" + (S ? R + S + "Y" : "") + (c ? R + c + "M" : "") + (o ? k + o + "D" : "") + (h || d || i ? "T" : "") + (h ? O + h + "H" : "") + (d ? O + d + "M" : "") + (i ? O + m + "S" : "")) : "P0D";
}
var xt = zg.prototype;
xt.isValid = AA;
xt.abs = hj;
xt.add = vj;
xt.subtract = mj;
xt.as = gj;
xt.asMilliseconds = Ej;
xt.asSeconds = wj;
xt.asMinutes = _j;
xt.asHours = xj;
xt.asDays = Cj;
xt.asWeeks = Tj;
xt.asMonths = bj;
xt.asQuarters = Rj;
xt.asYears = Dj;
xt.valueOf = Sj;
xt._bubble = yj;
xt.clone = kj;
xt.get = Mj;
xt.milliseconds = Oj;
xt.seconds = Nj;
xt.minutes = Lj;
xt.hours = Uj;
xt.days = Aj;
xt.weeks = Fj;
xt.months = zj;
xt.years = jj;
xt.humanize = Vj;
xt.toISOString = Fg;
xt.toString = Fg;
xt.toJSON = Fg;
xt.locale = iR;
xt.localeData = oR;
xt.toIsoString = Ci(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Fg
);
xt.lang = lR;
Ie("X", 0, 0, "unix");
Ie("x", 0, 0, "valueOf");
be("x", Ng);
be("X", fU);
It("X", function(i, o, c) {
  c._d = new Date(parseFloat(i) * 1e3);
});
It("x", function(i, o, c) {
  c._d = new Date(dt(i));
});
//! moment.js
we.version = "2.29.4";
$2(an);
we.fn = oe;
we.min = OA;
we.max = NA;
we.now = LA;
we.utc = Bl;
we.unix = oj;
we.months = sj;
we.isDate = ev;
we.locale = Xu;
we.invalid = Rg;
we.duration = al;
we.isMoment = rl;
we.weekdays = fj;
we.parseZone = uj;
we.localeData = Wo;
we.isDuration = dg;
we.monthsShort = cj;
we.weekdaysMin = pj;
we.defineLocale = _w;
we.updateLocale = uA;
we.locales = sA;
we.weekdaysShort = dj;
we.normalizeUnits = Ti;
we.relativeTimeRounding = Yj;
we.relativeTimeThreshold = Ij;
we.calendarFormat = az;
we.prototype = oe;
we.HTML5_FMT = {
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
we.defineLocale("pt-br", {
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
const $j = {
  206: "Almoço",
  205: "Banheiro"
}, Bj = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Wj = ({
  data: i,
  lastSevenDays: o
}) => /* @__PURE__ */ I.jsx("div", { className: "detailed-workday--period", children: o.map((c, d) => {
  const h = _i(c).format("DD [de] MMMM"), S = i.find(
    ({ date: T }) => _i(T).format("YYYY/MM/DD") === c.format("YYYY/MM/DD")
  );
  if (S === void 0)
    return /* @__PURE__ */ I.jsx("div", { className: "day", children: /* @__PURE__ */ I.jsx("span", { children: h }) }, d);
  const m = _i.utc(S.start).format("HH[h]mm"), C = _i.utc(S.finish).format("HH[h]mm");
  return /* @__PURE__ */ I.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ I.jsx("span", { children: h }),
    /* @__PURE__ */ I.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ I.jsxs("span", { className: "service-time", children: [
      m,
      " - ",
      C
    ] }),
    /* @__PURE__ */ I.jsxs("span", { className: "description", children: [
      S.description,
      "*"
    ] }),
    /* @__PURE__ */ I.jsx("div", { className: "breaks", children: S.breaks.map((T, R) => {
      const k = _i.utc(T.start).format("HH[h]mm"), O = _i.utc(T.finish).format("HH[h]mm");
      return /* @__PURE__ */ I.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ I.jsx("span", { className: "break-item--label", children: $j[String(T.type)] }),
        /* @__PURE__ */ I.jsxs("span", { className: "break-item--content", children: [
          k,
          " - ",
          O
        ] })
      ] }, R);
    }) })
  ] }, d);
}) }), L3 = () => {
  const i = Array.from({ length: 7 }).map(
    (o, c) => _i().clone().subtract(7 - c, "days")
  );
  return /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ I.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ I.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ I.jsx(cw, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ I.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ I.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ I.jsx("div", { className: "weekdays", children: i.map((o) => {
          const c = _i(o).day();
          return /* @__PURE__ */ I.jsx("span", { className: "", children: Bj[c] });
        }) })
      ] }),
      V2.map((o, c) => /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ I.jsx("span", { children: o.agent.firstName }),
        /* @__PURE__ */ I.jsx(
          Wj,
          {
            data: o.period,
            lastSevenDays: i
          },
          c
        )
      ] }, c))
    ] })
  ] });
}, U3 = ({ logo: i, items: o }) => /* @__PURE__ */ I.jsxs("header", { className: "header", children: [
  i,
  o
] }), Gj = (i, o) => {
  var h, S, m, C;
  const d = i.currentTarget.childNodes[1].childNodes;
  switch (i.key) {
    case "ArrowDown": {
      if (o.current === d.length - 1)
        return;
      o.current += 1;
      const T = (S = (h = d[o.current]) == null ? void 0 : h.firstChild) == null ? void 0 : S.firstChild;
      T !== null && T.focus();
      break;
    }
    case "ArrowUp": {
      if (o.current === 2)
        return;
      o.current -= 1;
      const T = (C = (m = d[o.current]) == null ? void 0 : m.firstChild) == null ? void 0 : C.firstChild;
      T !== null && T.focus();
      break;
    }
    case " ": {
      const T = i.target;
      T instanceof HTMLAnchorElement && T.click();
    }
  }
}, jT = (i, o, c, d, h, S = 0, m) => {
  i.current === null || o.current === null || (d.route === c && i.current.classList.add("active"), i.current.classList.contains("active") && d.route !== c && i.current.classList.remove("active"), m || (o.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${d.label}</span>
      </div>
    `, o.current.style.opacity = "1", o.current.style.top = `calc(48px * ${h + S})`), i.current.style.top = `calc(48px * ${h + S})`);
}, Qj = (i, o, c, d, h, S, m) => {
  var C;
  {
    if (o.current === null || c.current === null)
      return;
    let T = -1;
    h || (c.current.innerHTML = "", c.current.style.opacity = "0"), S.forEach((R, k) => {
      i + R.route === d && (T = k, m !== null && k >= m && (T += S[m].submenus.length)), Object.hasOwnProperty.call(R, "submenus") && R.submenus.forEach((O, j) => {
        `${i}${R.route}${O.route}` === d && (m === k ? T = k + j + 1 : T = k);
      });
    }), (C = document.activeElement) == null || C.blur(), T > -1 && (o.current.style.top = `calc(48px * ${T})`, o.current.classList.add("active"));
  }
}, A3 = ({
  data: i,
  itemLink: o,
  onSettings: c,
  onLogout: d,
  prefix: h = "",
  pathname: S = ""
}) => {
  const m = tr(null), C = tr(null), T = tr(null), R = tr(3), [k, O] = Dr(!1), [j, G] = Dr(null);
  return /* @__PURE__ */ I.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: m,
      onKeyDown: (z) => Gj(z, R),
      children: [
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              m.current !== null && (O((z) => !z), m.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ I.jsx(Rr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ I.jsxs(
          "ul",
          {
            className: "sidebar-container",
            onMouseLeave: () => Qj(
              h,
              C,
              T,
              S,
              k,
              i,
              j
            ),
            children: [
              /* @__PURE__ */ I.jsx("span", { ref: C, className: "sidebar-selector" }),
              /* @__PURE__ */ I.jsx("div", { ref: T, className: "sidebar-tooltip" }),
              i.map((z, J) => /* @__PURE__ */ I.jsxs(bL, { children: [
                /* @__PURE__ */ I.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => jT(
                      C,
                      T,
                      S,
                      z,
                      j !== null && J > j ? J + i[j].submenus.length : J,
                      0,
                      k
                    ),
                    onClick: () => {
                      z != null && z.submenus && G(
                        (he) => he === J ? null : J
                      );
                    },
                    children: [
                      /* @__PURE__ */ I.jsx("div", { className: "sidebar-item--icon", children: o({
                        icon: z.icon,
                        label: z.label,
                        route: z.route,
                        isOpen: k,
                        props: {
                          className: z != null && z.submenus ? "group" : "",
                          onClick: () => {
                            R.current = J + 2, C.current && C.current.classList.toggle("active");
                          }
                        }
                      }) }),
                      (z == null ? void 0 : z.submenus) && /* @__PURE__ */ I.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        k && /* @__PURE__ */ I.jsx("span", { className: "sidebar-item--indicator", children: z.submenus.length }),
                        /* @__PURE__ */ I.jsx(
                          Rr,
                          {
                            icon: "ic:round-arrow-right",
                            height: 24,
                            rotate: J === j ? 45 : 0
                          }
                        )
                      ] })
                    ]
                  }
                ),
                (z == null ? void 0 : z.submenus) && J === j && /* @__PURE__ */ I.jsx("div", { className: "sidebar-submenu", children: z.submenus.map((he, ge) => /* @__PURE__ */ I.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => jT(
                      C,
                      T,
                      S,
                      he,
                      J,
                      ge + 1,
                      k
                    ),
                    children: o({
                      icon: he.icon,
                      label: he.label,
                      route: `${z.route}${he.route}`,
                      isOpen: k,
                      props: { className: "" }
                    })
                  },
                  he.route
                )) })
              ] }, J))
            ]
          }
        ),
        c && /* @__PURE__ */ I.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-settings-action ring-info",
            onClick: d,
            children: [
              /* @__PURE__ */ I.jsx(Rr, { icon: "ph:gear-six-fill", height: 16 }),
              k && /* @__PURE__ */ I.jsx("span", { children: "Settings" })
            ]
          }
        ),
        d && /* @__PURE__ */ I.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-exit-action ring-warning",
            onClick: d,
            children: [
              /* @__PURE__ */ I.jsx(Rr, { icon: "mingcute:exit-fill", height: 16 }),
              k && /* @__PURE__ */ I.jsx("span", { children: "Logout" })
            ]
          }
        )
      ]
    }
  );
};
var QE = { exports: {} }, za = {}, lg = { exports: {} }, TE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FT;
function qj() {
  return FT || (FT = 1, function(i) {
    function o(fe, Ue) {
      var _e = fe.length;
      fe.push(Ue);
      e:
        for (; 0 < _e; ) {
          var St = _e - 1 >>> 1, Ct = fe[St];
          if (0 < h(Ct, Ue))
            fe[St] = Ue, fe[_e] = Ct, _e = St;
          else
            break e;
        }
    }
    function c(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function d(fe) {
      if (fe.length === 0)
        return null;
      var Ue = fe[0], _e = fe.pop();
      if (_e !== Ue) {
        fe[0] = _e;
        e:
          for (var St = 0, Ct = fe.length, In = Ct >>> 1; St < In; ) {
            var vr = 2 * (St + 1) - 1, ri = fe[vr], _n = vr + 1, pa = fe[_n];
            if (0 > h(ri, _e))
              _n < Ct && 0 > h(pa, ri) ? (fe[St] = pa, fe[_n] = _e, St = _n) : (fe[St] = ri, fe[vr] = _e, St = vr);
            else if (_n < Ct && 0 > h(pa, _e))
              fe[St] = pa, fe[_n] = _e, St = _n;
            else
              break e;
          }
      }
      return Ue;
    }
    function h(fe, Ue) {
      var _e = fe.sortIndex - Ue.sortIndex;
      return _e !== 0 ? _e : fe.id - Ue.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      i.unstable_now = function() {
        return S.now();
      };
    } else {
      var m = Date, C = m.now();
      i.unstable_now = function() {
        return m.now() - C;
      };
    }
    var T = [], R = [], k = 1, O = null, j = 3, G = !1, z = !1, J = !1, he = typeof setTimeout == "function" ? setTimeout : null, ge = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function re(fe) {
      for (var Ue = c(R); Ue !== null; ) {
        if (Ue.callback === null)
          d(R);
        else if (Ue.startTime <= fe)
          d(R), Ue.sortIndex = Ue.expirationTime, o(T, Ue);
        else
          break;
        Ue = c(R);
      }
    }
    function se(fe) {
      if (J = !1, re(fe), !z)
        if (c(T) !== null)
          z = !0, gt(ce);
        else {
          var Ue = c(R);
          Ue !== null && fn(se, Ue.startTime - fe);
        }
    }
    function ce(fe, Ue) {
      z = !1, J && (J = !1, ge(Me), Me = -1), G = !0;
      var _e = j;
      try {
        for (re(Ue), O = c(T); O !== null && (!(O.expirationTime > Ue) || fe && !it()); ) {
          var St = O.callback;
          if (typeof St == "function") {
            O.callback = null, j = O.priorityLevel;
            var Ct = St(O.expirationTime <= Ue);
            Ue = i.unstable_now(), typeof Ct == "function" ? O.callback = Ct : O === c(T) && d(T), re(Ue);
          } else
            d(T);
          O = c(T);
        }
        if (O !== null)
          var In = !0;
        else {
          var vr = c(R);
          vr !== null && fn(se, vr.startTime - Ue), In = !1;
        }
        return In;
      } finally {
        O = null, j = _e, G = !1;
      }
    }
    var W = !1, ee = null, Me = -1, He = 5, Qe = -1;
    function it() {
      return !(i.unstable_now() - Qe < He);
    }
    function Mt() {
      if (ee !== null) {
        var fe = i.unstable_now();
        Qe = fe;
        var Ue = !0;
        try {
          Ue = ee(!0, fe);
        } finally {
          Ue ? Be() : (W = !1, ee = null);
        }
      } else
        W = !1;
    }
    var Be;
    if (typeof K == "function")
      Be = function() {
        K(Mt);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), Qt = Ke.port2;
      Ke.port1.onmessage = Mt, Be = function() {
        Qt.postMessage(null);
      };
    } else
      Be = function() {
        he(Mt, 0);
      };
    function gt(fe) {
      ee = fe, W || (W = !0, Be());
    }
    function fn(fe, Ue) {
      Me = he(function() {
        fe(i.unstable_now());
      }, Ue);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, i.unstable_continueExecution = function() {
      z || G || (z = !0, gt(ce));
    }, i.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : He = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, i.unstable_getFirstCallbackNode = function() {
      return c(T);
    }, i.unstable_next = function(fe) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var Ue = 3;
          break;
        default:
          Ue = j;
      }
      var _e = j;
      j = Ue;
      try {
        return fe();
      } finally {
        j = _e;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(fe, Ue) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var _e = j;
      j = fe;
      try {
        return Ue();
      } finally {
        j = _e;
      }
    }, i.unstable_scheduleCallback = function(fe, Ue, _e) {
      var St = i.unstable_now();
      switch (typeof _e == "object" && _e !== null ? (_e = _e.delay, _e = typeof _e == "number" && 0 < _e ? St + _e : St) : _e = St, fe) {
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
      return Ct = _e + Ct, fe = { id: k++, callback: Ue, priorityLevel: fe, startTime: _e, expirationTime: Ct, sortIndex: -1 }, _e > St ? (fe.sortIndex = _e, o(R, fe), c(T) === null && fe === c(R) && (J ? (ge(Me), Me = -1) : J = !0, fn(se, _e - St))) : (fe.sortIndex = Ct, o(T, fe), z || G || (z = !0, gt(ce))), fe;
    }, i.unstable_shouldYield = it, i.unstable_wrapCallback = function(fe) {
      var Ue = j;
      return function() {
        var _e = j;
        j = Ue;
        try {
          return fe.apply(this, arguments);
        } finally {
          j = _e;
        }
      };
    };
  }(TE)), TE;
}
var bE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var HT;
function Zj() {
  return HT || (HT = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = !1, c = !1, d = 5;
      function h(ve, ze) {
        var lt = ve.length;
        ve.push(ze), C(ve, ze, lt);
      }
      function S(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function m(ve) {
        if (ve.length === 0)
          return null;
        var ze = ve[0], lt = ve.pop();
        return lt !== ze && (ve[0] = lt, T(ve, lt, 0)), ze;
      }
      function C(ve, ze, lt) {
        for (var Ot = lt; Ot > 0; ) {
          var Jt = Ot - 1 >>> 1, Nn = ve[Jt];
          if (R(Nn, ze) > 0)
            ve[Jt] = ze, ve[Ot] = Nn, Ot = Jt;
          else
            return;
        }
      }
      function T(ve, ze, lt) {
        for (var Ot = lt, Jt = ve.length, Nn = Jt >>> 1; Ot < Nn; ) {
          var dn = (Ot + 1) * 2 - 1, Nr = ve[dn], Pt = dn + 1, Jr = ve[Pt];
          if (R(Nr, ze) < 0)
            Pt < Jt && R(Jr, Nr) < 0 ? (ve[Ot] = Jr, ve[Pt] = ze, Ot = Pt) : (ve[Ot] = Nr, ve[dn] = ze, Ot = dn);
          else if (Pt < Jt && R(Jr, ze) < 0)
            ve[Ot] = Jr, ve[Pt] = ze, Ot = Pt;
          else
            return;
        }
      }
      function R(ve, ze) {
        var lt = ve.sortIndex - ze.sortIndex;
        return lt !== 0 ? lt : ve.id - ze.id;
      }
      var k = 1, O = 2, j = 3, G = 4, z = 5;
      function J(ve, ze) {
      }
      var he = typeof performance == "object" && typeof performance.now == "function";
      if (he) {
        var ge = performance;
        i.unstable_now = function() {
          return ge.now();
        };
      } else {
        var K = Date, re = K.now();
        i.unstable_now = function() {
          return K.now() - re;
        };
      }
      var se = 1073741823, ce = -1, W = 250, ee = 5e3, Me = 1e4, He = se, Qe = [], it = [], Mt = 1, Be = null, Ke = j, Qt = !1, gt = !1, fn = !1, fe = typeof setTimeout == "function" ? setTimeout : null, Ue = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function St(ve) {
        for (var ze = S(it); ze !== null; ) {
          if (ze.callback === null)
            m(it);
          else if (ze.startTime <= ve)
            m(it), ze.sortIndex = ze.expirationTime, h(Qe, ze);
          else
            return;
          ze = S(it);
        }
      }
      function Ct(ve) {
        if (fn = !1, St(ve), !gt)
          if (S(Qe) !== null)
            gt = !0, Ya(In);
          else {
            var ze = S(it);
            ze !== null && mn(Ct, ze.startTime - ve);
          }
      }
      function In(ve, ze) {
        gt = !1, fn && (fn = !1, Xr()), Qt = !0;
        var lt = Ke;
        try {
          var Ot;
          if (!c)
            return vr(ve, ze);
        } finally {
          Be = null, Ke = lt, Qt = !1;
        }
      }
      function vr(ve, ze) {
        var lt = ze;
        for (St(lt), Be = S(Qe); Be !== null && !o && !(Be.expirationTime > lt && (!ve || Ha())); ) {
          var Ot = Be.callback;
          if (typeof Ot == "function") {
            Be.callback = null, Ke = Be.priorityLevel;
            var Jt = Be.expirationTime <= lt, Nn = Ot(Jt);
            lt = i.unstable_now(), typeof Nn == "function" ? Be.callback = Nn : Be === S(Qe) && m(Qe), St(lt);
          } else
            m(Qe);
          Be = S(Qe);
        }
        if (Be !== null)
          return !0;
        var dn = S(it);
        return dn !== null && mn(Ct, dn.startTime - lt), !1;
      }
      function ri(ve, ze) {
        switch (ve) {
          case k:
          case O:
          case j:
          case G:
          case z:
            break;
          default:
            ve = j;
        }
        var lt = Ke;
        Ke = ve;
        try {
          return ze();
        } finally {
          Ke = lt;
        }
      }
      function _n(ve) {
        var ze;
        switch (Ke) {
          case k:
          case O:
          case j:
            ze = j;
            break;
          default:
            ze = Ke;
            break;
        }
        var lt = Ke;
        Ke = ze;
        try {
          return ve();
        } finally {
          Ke = lt;
        }
      }
      function pa(ve) {
        var ze = Ke;
        return function() {
          var lt = Ke;
          Ke = ze;
          try {
            return ve.apply(this, arguments);
          } finally {
            Ke = lt;
          }
        };
      }
      function rr(ve, ze, lt) {
        var Ot = i.unstable_now(), Jt;
        if (typeof lt == "object" && lt !== null) {
          var Nn = lt.delay;
          typeof Nn == "number" && Nn > 0 ? Jt = Ot + Nn : Jt = Ot;
        } else
          Jt = Ot;
        var dn;
        switch (ve) {
          case k:
            dn = ce;
            break;
          case O:
            dn = W;
            break;
          case z:
            dn = He;
            break;
          case G:
            dn = Me;
            break;
          case j:
          default:
            dn = ee;
            break;
        }
        var Nr = Jt + dn, Pt = {
          id: Mt++,
          callback: ze,
          priorityLevel: ve,
          startTime: Jt,
          expirationTime: Nr,
          sortIndex: -1
        };
        return Jt > Ot ? (Pt.sortIndex = Jt, h(it, Pt), S(Qe) === null && Pt === S(it) && (fn ? Xr() : fn = !0, mn(Ct, Jt - Ot))) : (Pt.sortIndex = Nr, h(Qe, Pt), !gt && !Qt && (gt = !0, Ya(In))), Pt;
      }
      function Mr() {
      }
      function ai() {
        !gt && !Qt && (gt = !0, Ya(In));
      }
      function Or() {
        return S(Qe);
      }
      function ha(ve) {
        ve.callback = null;
      }
      function On() {
        return Ke;
      }
      var ar = !1, Vn = null, ir = -1, lr = d, va = -1;
      function Ha() {
        var ve = i.unstable_now() - va;
        return !(ve < lr);
      }
      function bi() {
      }
      function ii(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? lr = Math.floor(1e3 / ve) : lr = d;
      }
      var Pa = function() {
        if (Vn !== null) {
          var ve = i.unstable_now();
          va = ve;
          var ze = !0, lt = !0;
          try {
            lt = Vn(ze, ve);
          } finally {
            lt ? Zr() : (ar = !1, Vn = null);
          }
        } else
          ar = !1;
      }, Zr;
      if (typeof _e == "function")
        Zr = function() {
          _e(Pa);
        };
      else if (typeof MessageChannel < "u") {
        var li = new MessageChannel(), Kr = li.port2;
        li.port1.onmessage = Pa, Zr = function() {
          Kr.postMessage(null);
        };
      } else
        Zr = function() {
          fe(Pa, 0);
        };
      function Ya(ve) {
        Vn = ve, ar || (ar = !0, Zr());
      }
      function mn(ve, ze) {
        ir = fe(function() {
          ve(i.unstable_now());
        }, ze);
      }
      function Xr() {
        Ue(ir), ir = -1;
      }
      var il = bi, Ia = null;
      i.unstable_IdlePriority = z, i.unstable_ImmediatePriority = k, i.unstable_LowPriority = G, i.unstable_NormalPriority = j, i.unstable_Profiling = Ia, i.unstable_UserBlockingPriority = O, i.unstable_cancelCallback = ha, i.unstable_continueExecution = ai, i.unstable_forceFrameRate = ii, i.unstable_getCurrentPriorityLevel = On, i.unstable_getFirstCallbackNode = Or, i.unstable_next = _n, i.unstable_pauseExecution = Mr, i.unstable_requestPaint = il, i.unstable_runWithPriority = ri, i.unstable_scheduleCallback = rr, i.unstable_shouldYield = Ha, i.unstable_wrapCallback = pa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(bE)), bE;
}
var PT;
function gR() {
  return PT || (PT = 1, process.env.NODE_ENV === "production" ? lg.exports = qj() : lg.exports = Zj()), lg.exports;
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
var YT;
function Kj() {
  if (YT)
    return za;
  YT = 1;
  var i = kr, o = gR();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), h = {};
  function S(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (h[n] = r, n = 0; n < r.length; n++)
      d.add(r[n]);
  }
  var C = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, O = {};
  function j(n) {
    return T.call(O, n) ? !0 : T.call(k, n) ? !1 : R.test(n) ? O[n] = !0 : (k[n] = !0, !1);
  }
  function G(n, r, u, f) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function z(n, r, u, f) {
    if (r === null || typeof r > "u" || G(n, r, u, f))
      return !0;
    if (f)
      return !1;
    if (u !== null)
      switch (u.type) {
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
  function J(n, r, u, f, v, g, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = _;
  }
  var he = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    he[n] = new J(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    he[r] = new J(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    he[n] = new J(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    he[n] = new J(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    he[n] = new J(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    he[n] = new J(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    he[n] = new J(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    he[n] = new J(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    he[n] = new J(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ge = /[\-:]([a-z])/g;
  function K(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ge,
      K
    );
    he[r] = new J(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ge, K);
    he[r] = new J(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ge, K);
    he[r] = new J(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    he[n] = new J(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), he.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    he[n] = new J(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function re(n, r, u, f) {
    var v = he.hasOwnProperty(r) ? he[r] : null;
    (v !== null ? v.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (z(r, u, v, f) && (u = null), f || v === null ? j(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : v.mustUseProperty ? n[v.propertyName] = u === null ? v.type === 3 ? !1 : "" : u : (r = v.attributeName, f = v.attributeNamespace, u === null ? n.removeAttribute(r) : (v = v.type, u = v === 3 || v === 4 && u === !0 ? "" : "" + u, f ? n.setAttributeNS(f, r, u) : n.setAttribute(r, u))));
  }
  var se = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ce = Symbol.for("react.element"), W = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), Me = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), Qe = Symbol.for("react.provider"), it = Symbol.for("react.context"), Mt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), Qt = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), fn = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function Ue(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _e = Object.assign, St;
  function Ct(n) {
    if (St === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        St = r && r[1] || "";
      }
    return `
` + St + n;
  }
  var In = !1;
  function vr(n, r) {
    if (!n || In)
      return "";
    In = !0;
    var u = Error.prepareStackTrace;
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
        for (var v = B.stack.split(`
`), g = f.stack.split(`
`), _ = v.length - 1, D = g.length - 1; 1 <= _ && 0 <= D && v[_] !== g[D]; )
          D--;
        for (; 1 <= _ && 0 <= D; _--, D--)
          if (v[_] !== g[D]) {
            if (_ !== 1 || D !== 1)
              do
                if (_--, D--, 0 > D || v[_] !== g[D]) {
                  var N = `
` + v[_].replace(" at new ", " at ");
                  return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
                }
              while (1 <= _ && 0 <= D);
            break;
          }
      }
    } finally {
      In = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Ct(n) : "";
  }
  function ri(n) {
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
  function _n(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ee:
        return "Fragment";
      case W:
        return "Portal";
      case He:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Be:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case it:
          return (n.displayName || "Context") + ".Consumer";
        case Qe:
          return (n._context.displayName || "Context") + ".Provider";
        case Mt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Qt:
          return r = n.displayName || null, r !== null ? r : _n(n.type) || "Memo";
        case gt:
          r = n._payload, n = n._init;
          try {
            return _n(n(r));
          } catch {
          }
      }
    return null;
  }
  function pa(n) {
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
        return _n(r);
      case 8:
        return r === Me ? "StrictMode" : "Mode";
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
  function Mr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ai(n) {
    var r = Mr(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var v = u.get, g = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(_) {
        f = "" + _, g.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(_) {
        f = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Or(n) {
    n._valueTracker || (n._valueTracker = ai(n));
  }
  function ha(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), f = "";
    return n && (f = Mr(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== u ? (r.setValue(n), !0) : !1;
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
    var u = r.checked;
    return _e({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    u = rr(r.value != null ? r.value : u), n._wrapperState = { initialChecked: f, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ir(n, r) {
    r = r.checked, r != null && re(n, "checked", r, !1);
  }
  function lr(n, r) {
    ir(n, r);
    var u = rr(r.value), f = r.type;
    if (u != null)
      f === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ha(n, r.type, u) : r.hasOwnProperty("defaultValue") && Ha(n, r.type, rr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function va(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function Ha(n, r, u) {
    (r !== "number" || On(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var bi = Array.isArray;
  function ii(n, r, u, f) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < u.length; v++)
        r["$" + u[v]] = !0;
      for (u = 0; u < n.length; u++)
        v = r.hasOwnProperty("$" + n[u].value), n[u].selected !== v && (n[u].selected = v), v && f && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + rr(u), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === u) {
          n[v].selected = !0, f && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Pa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(c(91));
    return _e({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Zr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(c(92));
        if (bi(u)) {
          if (1 < u.length)
            throw Error(c(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: rr(u) };
  }
  function li(n, r) {
    var u = rr(r.value), f = rr(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), f != null && (n.defaultValue = "" + f);
  }
  function Kr(n) {
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
  function mn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ya(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Xr, il = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, f, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, f, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Xr = Xr || document.createElement("div"), Xr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Xr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ia(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ve = {
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
  }, ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function(n) {
    ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ve[r] = ve[n];
    });
  });
  function lt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || ve.hasOwnProperty(n) && ve[n] ? ("" + r).trim() : r + "px";
  }
  function Ot(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var f = u.indexOf("--") === 0, v = lt(u, r[u], f);
        u === "float" && (u = "cssFloat"), f ? n.setProperty(u, v) : n[u] = v;
      }
  }
  var Jt = _e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function dn(n, r) {
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
  var Nr = null;
  function Pt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Jr = null, zt = null, Yt = null;
  function Qo(n) {
    if (n = _s(n)) {
      if (typeof Jr != "function")
        throw Error(c(280));
      var r = n.stateNode;
      r && (r = je(r), Jr(n.stateNode, n.type, r));
    }
  }
  function Gl(n) {
    zt ? Yt ? Yt.push(n) : Yt = [n] : zt = n;
  }
  function qo() {
    if (zt) {
      var n = zt, r = Yt;
      if (Yt = zt = null, Qo(n), r)
        for (n = 0; n < r.length; n++)
          Qo(r[n]);
    }
  }
  function es(n, r) {
    return n(r);
  }
  function mc() {
  }
  var Ql = !1;
  function Zo(n, r, u) {
    if (Ql)
      return n(r, u);
    Ql = !0;
    try {
      return es(n, r, u);
    } finally {
      Ql = !1, (zt !== null || Yt !== null) && (mc(), qo());
    }
  }
  function ql(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var f = je(u);
    if (f === null)
      return null;
    u = f[r];
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
    if (u && typeof u != "function")
      throw Error(c(231, r, typeof u));
    return u;
  }
  var Ko = !1;
  if (C)
    try {
      var oi = {};
      Object.defineProperty(oi, "passive", { get: function() {
        Ko = !0;
      } }), window.addEventListener("test", oi, oi), window.removeEventListener("test", oi, oi);
    } catch {
      Ko = !1;
    }
  function ll(n, r, u, f, v, g, _, D, N) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, B);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var ea = !1, Va = null, ol = !1, M = null, ae = { onError: function(n) {
    ea = !0, Va = n;
  } };
  function me(n, r, u, f, v, g, _, D, N) {
    ea = !1, Va = null, ll.apply(ae, arguments);
  }
  function Pe(n, r, u, f, v, g, _, D, N) {
    if (me.apply(this, arguments), ea) {
      if (ea) {
        var B = Va;
        ea = !1, Va = null;
      } else
        throw Error(c(198));
      ol || (ol = !0, M = B);
    }
  }
  function rt(n) {
    var r = n, u = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function at(n) {
    if (rt(n) !== n)
      throw Error(c(188));
  }
  function Ve(n) {
    var r = n.alternate;
    if (!r) {
      if (r = rt(n), r === null)
        throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var u = n, f = r; ; ) {
      var v = u.return;
      if (v === null)
        break;
      var g = v.alternate;
      if (g === null) {
        if (f = v.return, f !== null) {
          u = f;
          continue;
        }
        break;
      }
      if (v.child === g.child) {
        for (g = v.child; g; ) {
          if (g === u)
            return at(v), n;
          if (g === f)
            return at(v), r;
          g = g.sibling;
        }
        throw Error(c(188));
      }
      if (u.return !== f.return)
        u = v, f = g;
      else {
        for (var _ = !1, D = v.child; D; ) {
          if (D === u) {
            _ = !0, u = v, f = g;
            break;
          }
          if (D === f) {
            _ = !0, f = v, u = g;
            break;
          }
          D = D.sibling;
        }
        if (!_) {
          for (D = g.child; D; ) {
            if (D === u) {
              _ = !0, u = g, f = v;
              break;
            }
            if (D === f) {
              _ = !0, f = g, u = v;
              break;
            }
            D = D.sibling;
          }
          if (!_)
            throw Error(c(189));
        }
      }
      if (u.alternate !== f)
        throw Error(c(190));
    }
    if (u.tag !== 3)
      throw Error(c(188));
    return u.stateNode.current === u ? n : r;
  }
  function Ln(n) {
    return n = Ve(n), n !== null ? qt(n) : null;
  }
  function qt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = qt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Zt = o.unstable_scheduleCallback, mr = o.unstable_cancelCallback, ul = o.unstable_shouldYield, yc = o.unstable_requestPaint, Et = o.unstable_now, Yg = o.unstable_getCurrentPriorityLevel, Ri = o.unstable_ImmediatePriority, st = o.unstable_UserBlockingPriority, sl = o.unstable_NormalPriority, av = o.unstable_LowPriority, Sd = o.unstable_IdlePriority, ts = null, $a = null;
  function iv(n) {
    if ($a && typeof $a.onCommitFiberRoot == "function")
      try {
        $a.onCommitFiberRoot(ts, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ma = Math.clz32 ? Math.clz32 : Ig, lv = Math.log, ov = Math.LN2;
  function Ig(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lv(n) / ov | 0) | 0;
  }
  var gc = 64, Xo = 4194304;
  function Zl(n) {
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
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var f = 0, v = n.suspendedLanes, g = n.pingedLanes, _ = u & 268435455;
    if (_ !== 0) {
      var D = _ & ~v;
      D !== 0 ? f = Zl(D) : (g &= _, g !== 0 && (f = Zl(g)));
    } else
      _ = u & ~v, _ !== 0 ? f = Zl(_) : g !== 0 && (f = Zl(g));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & v) && (v = f & -f, g = r & -r, v >= g || v === 16 && (g & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        u = 31 - ma(r), v = 1 << u, f |= n[u], r &= ~v;
    return f;
  }
  function Ed(n, r) {
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
  function Sc(n, r) {
    for (var u = n.suspendedLanes, f = n.pingedLanes, v = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var _ = 31 - ma(g), D = 1 << _, N = v[_];
      N === -1 ? (!(D & u) || D & f) && (v[_] = Ed(D, r)) : N <= r && (n.expiredLanes |= D), g &= ~D;
    }
  }
  function wd(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ec() {
    var n = gc;
    return gc <<= 1, !(gc & 4194240) && (gc = 64), n;
  }
  function _d(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function Kl(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ma(r), n[r] = u;
  }
  function Vg(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var v = 31 - ma(u), g = 1 << v;
      r[v] = 0, f[v] = -1, n[v] = -1, u &= ~g;
    }
  }
  function ns(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var f = 31 - ma(u), v = 1 << f;
      v & r | n[f] & r && (n[f] |= r), u &= ~v;
    }
  }
  var Nt = 0;
  function xd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var uv, wc, jt, sv, Cd, et = !1, rs = [], yn = null, ya = null, ga = null, as = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), Lt = [], $g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        as.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xn.delete(r.pointerId);
    }
  }
  function or(n, r, u, f, v, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: f, nativeEvent: g, targetContainers: [v] }, r !== null && (r = _s(r), r !== null && wc(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function cl(n, r, u, f, v) {
    switch (r) {
      case "focusin":
        return yn = or(yn, n, r, u, f, v), !0;
      case "dragenter":
        return ya = or(ya, n, r, u, f, v), !0;
      case "mouseover":
        return ga = or(ga, n, r, u, f, v), !0;
      case "pointerover":
        var g = v.pointerId;
        return as.set(g, or(as.get(g) || null, n, r, u, f, v)), !0;
      case "gotpointercapture":
        return g = v.pointerId, xn.set(g, or(xn.get(g) || null, n, r, u, f, v)), !0;
    }
    return !1;
  }
  function cv(n) {
    var r = Ea(n.target);
    if (r !== null) {
      var u = rt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = mt(u), r !== null) {
            n.blockedOn = r, Cd(n.priority, function() {
              jt(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
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
      var u = Cc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var f = new u.constructor(u.type, u);
        Nr = f, u.target.dispatchEvent(f), Nr = null;
      } else
        return r = _s(u), r !== null && wc(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function Td(n, r, u) {
    Jo(n) && u.delete(r);
  }
  function fv() {
    et = !1, yn !== null && Jo(yn) && (yn = null), ya !== null && Jo(ya) && (ya = null), ga !== null && Jo(ga) && (ga = null), as.forEach(Td), xn.forEach(Td);
  }
  function is(n, r) {
    n.blockedOn === r && (n.blockedOn = null, et || (et = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, fv)));
  }
  function ls(n) {
    function r(v) {
      return is(v, n);
    }
    if (0 < rs.length) {
      is(rs[0], n);
      for (var u = 1; u < rs.length; u++) {
        var f = rs[u];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (yn !== null && is(yn, n), ya !== null && is(ya, n), ga !== null && is(ga, n), as.forEach(r), xn.forEach(r), u = 0; u < Lt.length; u++)
      f = Lt[u], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Lt.length && (u = Lt[0], u.blockedOn === null); )
      cv(u), u.blockedOn === null && Lt.shift();
  }
  var eu = se.ReactCurrentBatchConfig, Xl = !0;
  function dv(n, r, u, f) {
    var v = Nt, g = eu.transition;
    eu.transition = null;
    try {
      Nt = 1, xc(n, r, u, f);
    } finally {
      Nt = v, eu.transition = g;
    }
  }
  function _c(n, r, u, f) {
    var v = Nt, g = eu.transition;
    eu.transition = null;
    try {
      Nt = 4, xc(n, r, u, f);
    } finally {
      Nt = v, eu.transition = g;
    }
  }
  function xc(n, r, u, f) {
    if (Xl) {
      var v = Cc(n, r, u, f);
      if (v === null)
        zc(n, r, f, os, u), Wa(n, f);
      else if (cl(v, n, r, u, f))
        f.stopPropagation();
      else if (Wa(n, f), r & 4 && -1 < $g.indexOf(n)) {
        for (; v !== null; ) {
          var g = _s(v);
          if (g !== null && uv(g), g = Cc(n, r, u, f), g === null && zc(n, r, f, os, u), g === v)
            break;
          v = g;
        }
        v !== null && f.stopPropagation();
      } else
        zc(n, r, f, null, u);
    }
  }
  var os = null;
  function Cc(n, r, u, f) {
    if (os = null, n = Pt(f), n = Ea(n), n !== null)
      if (r = rt(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return os = n, null;
  }
  function bd(n) {
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
        switch (Yg()) {
          case Ri:
            return 1;
          case st:
            return 4;
          case sl:
          case av:
            return 16;
          case Sd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Di = null, us = null, ss = null;
  function Rd() {
    if (ss)
      return ss;
    var n, r = us, u = r.length, f, v = "value" in Di ? Di.value : Di.textContent, g = v.length;
    for (n = 0; n < u && r[n] === v[n]; n++)
      ;
    var _ = u - n;
    for (f = 1; f <= _ && r[u - f] === v[g - f]; f++)
      ;
    return ss = v.slice(n, 1 < f ? 1 - f : void 0);
  }
  function tu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function cs() {
    return !0;
  }
  function pv() {
    return !1;
  }
  function ta(n) {
    function r(u, f, v, g, _) {
      this._reactName = u, this._targetInst = v, this.type = f, this.nativeEvent = g, this.target = _, this.currentTarget = null;
      for (var D in n)
        n.hasOwnProperty(D) && (u = n[D], this[D] = u ? u(g) : g[D]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? cs : pv, this.isPropagationStopped = pv, this;
    }
    return _e(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = cs);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = cs);
    }, persist: function() {
    }, isPersistent: cs }), r;
  }
  var fl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tc = ta(fl), nu = _e({}, fl, { view: 0, detail: 0 }), hv = ta(nu), bc, Dd, fs, Un = _e({}, nu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== fs && (fs && n.type === "mousemove" ? (bc = n.screenX - fs.screenX, Dd = n.screenY - fs.screenY) : Dd = bc = 0, fs = n), bc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Dd;
  } }), Rc = ta(Un), vv = _e({}, Un, { dataTransfer: 0 }), mv = ta(vv), Bg = _e({}, nu, { relatedTarget: 0 }), dl = ta(Bg), kd = _e({}, fl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yv = ta(kd), Wg = _e({}, fl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Gg = ta(Wg), Qg = _e({}, fl, { data: 0 }), Md = ta(Qg), Od = {
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
  }, gv = {
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
  }, Sv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ev(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Sv[n]) ? !!r[n] : !1;
  }
  function Nd() {
    return Ev;
  }
  var ki = _e({}, nu, { key: function(n) {
    if (n.key) {
      var r = Od[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = tu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? gv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nd, charCode: function(n) {
    return n.type === "keypress" ? tu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? tu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), qg = ta(ki), Ld = _e({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dc = ta(Ld), Ud = _e({}, nu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nd }), Zg = ta(Ud), kc = _e({}, fl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wv = ta(kc), Lr = _e({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mi = ta(Lr), gn = [9, 13, 27, 32], Ga = C && "CompositionEvent" in window, Jl = null;
  C && "documentMode" in document && (Jl = document.documentMode);
  var Mc = C && "TextEvent" in window && !Jl, _v = C && (!Ga || Jl && 8 < Jl && 11 >= Jl), ru = String.fromCharCode(32), xv = !1;
  function Cv(n, r) {
    switch (n) {
      case "keyup":
        return gn.indexOf(r.keyCode) !== -1;
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
  function Oc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var au = !1;
  function Kg(n, r) {
    switch (n) {
      case "compositionend":
        return Oc(r);
      case "keypress":
        return r.which !== 32 ? null : (xv = !0, ru);
      case "textInput":
        return n = r.data, n === ru && xv ? null : n;
      default:
        return null;
    }
  }
  function Xg(n, r) {
    if (au)
      return n === "compositionend" || !Ga && Cv(n, r) ? (n = Rd(), ss = us = Di = null, au = !1, n) : null;
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
        return _v && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Tv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Tv[n.type] : r === "textarea";
  }
  function Rv(n, r, u, f) {
    Gl(f), r = Ss(r, "onChange"), 0 < r.length && (u = new Tc("onChange", "change", null, u, f), n.push({ event: u, listeners: r }));
  }
  var ds = null, iu = null;
  function lu(n) {
    Ac(n, 0);
  }
  function ou(n) {
    var r = su(n);
    if (ha(r))
      return n;
  }
  function Dv(n, r) {
    if (n === "change")
      return r;
  }
  var Ad = !1;
  if (C) {
    var zd;
    if (C) {
      var jd = "oninput" in document;
      if (!jd) {
        var kv = document.createElement("div");
        kv.setAttribute("oninput", "return;"), jd = typeof kv.oninput == "function";
      }
      zd = jd;
    } else
      zd = !1;
    Ad = zd && (!document.documentMode || 9 < document.documentMode);
  }
  function Mv() {
    ds && (ds.detachEvent("onpropertychange", Ov), iu = ds = null);
  }
  function Ov(n) {
    if (n.propertyName === "value" && ou(iu)) {
      var r = [];
      Rv(r, iu, n, Pt(n)), Zo(lu, r);
    }
  }
  function Jg(n, r, u) {
    n === "focusin" ? (Mv(), ds = r, iu = u, ds.attachEvent("onpropertychange", Ov)) : n === "focusout" && Mv();
  }
  function e0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ou(iu);
  }
  function t0(n, r) {
    if (n === "click")
      return ou(r);
  }
  function Nv(n, r) {
    if (n === "input" || n === "change")
      return ou(r);
  }
  function n0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Sa = typeof Object.is == "function" ? Object.is : n0;
  function ps(n, r) {
    if (Sa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), f = Object.keys(r);
    if (u.length !== f.length)
      return !1;
    for (f = 0; f < u.length; f++) {
      var v = u[f];
      if (!T.call(r, v) || !Sa(n[v], r[v]))
        return !1;
    }
    return !0;
  }
  function Lv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Uv(n, r) {
    var u = Lv(n);
    n = 0;
    for (var f; u; ) {
      if (u.nodeType === 3) {
        if (f = n + u.textContent.length, n <= r && f >= r)
          return { node: u, offset: r - n };
        n = f;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Lv(u);
    }
  }
  function Av(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Av(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Nc() {
    for (var n = window, r = On(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = On(n.document);
    }
    return r;
  }
  function Oi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Lc(n) {
    var r = Nc(), u = n.focusedElem, f = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Av(u.ownerDocument.documentElement, u)) {
      if (f !== null && Oi(u)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = u.textContent.length, g = Math.min(f.start, v);
          f = f.end === void 0 ? g : Math.min(f.end, v), !n.extend && g > f && (v = f, f = g, g = v), v = Uv(u, g);
          var _ = Uv(
            u,
            f
          );
          v && _ && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), g > f ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var zv = C && "documentMode" in document && 11 >= document.documentMode, Qa = null, Fd = null, hs = null, Hd = !1;
  function jv(n, r, u) {
    var f = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Hd || Qa == null || Qa !== On(f) || (f = Qa, "selectionStart" in f && Oi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), hs && ps(hs, f) || (hs = f, f = Ss(Fd, "onSelect"), 0 < f.length && (r = new Tc("onSelect", "select", null, r, u), n.push({ event: r, listeners: f }), r.target = Qa)));
  }
  function Uc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var eo = { animationend: Uc("Animation", "AnimationEnd"), animationiteration: Uc("Animation", "AnimationIteration"), animationstart: Uc("Animation", "AnimationStart"), transitionend: Uc("Transition", "TransitionEnd") }, Pd = {}, Yd = {};
  C && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete eo.animationend.animation, delete eo.animationiteration.animation, delete eo.animationstart.animation), "TransitionEvent" in window || delete eo.transitionend.transition);
  function An(n) {
    if (Pd[n])
      return Pd[n];
    if (!eo[n])
      return n;
    var r = eo[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in Yd)
        return Pd[n] = r[u];
    return n;
  }
  var Id = An("animationend"), Fv = An("animationiteration"), Hv = An("animationstart"), Pv = An("transitionend"), Yv = /* @__PURE__ */ new Map(), Iv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ni(n, r) {
    Yv.set(n, r), S(r, [n]);
  }
  for (var vs = 0; vs < Iv.length; vs++) {
    var to = Iv[vs], r0 = to.toLowerCase(), ms = to[0].toUpperCase() + to.slice(1);
    Ni(r0, "on" + ms);
  }
  Ni(Id, "onAnimationEnd"), Ni(Fv, "onAnimationIteration"), Ni(Hv, "onAnimationStart"), Ni("dblclick", "onDoubleClick"), Ni("focusin", "onFocus"), Ni("focusout", "onBlur"), Ni(Pv, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), a0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));
  function Vv(n, r, u) {
    var f = n.type || "unknown-event";
    n.currentTarget = u, Pe(f, r, void 0, n), n.currentTarget = null;
  }
  function Ac(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var f = n[u], v = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (r)
          for (var _ = f.length - 1; 0 <= _; _--) {
            var D = f[_], N = D.instance, B = D.currentTarget;
            if (D = D.listener, N !== g && v.isPropagationStopped())
              break e;
            Vv(v, D, B), g = N;
          }
        else
          for (_ = 0; _ < f.length; _++) {
            if (D = f[_], N = D.instance, B = D.currentTarget, D = D.listener, N !== g && v.isPropagationStopped())
              break e;
            Vv(v, D, B), g = N;
          }
      }
    }
    if (ol)
      throw n = M, ol = !1, M = null, n;
  }
  function Ft(n, r) {
    var u = r[qd];
    u === void 0 && (u = r[qd] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    u.has(f) || ($v(r, n, 2, !1), u.add(f));
  }
  function pl(n, r, u) {
    var f = 0;
    r && (f |= 4), $v(u, n, f, r);
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function uu(n) {
    if (!n[Li]) {
      n[Li] = !0, d.forEach(function(u) {
        u !== "selectionchange" && (a0.has(u) || pl(u, !1, n), pl(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Li] || (r[Li] = !0, pl("selectionchange", !1, r));
    }
  }
  function $v(n, r, u, f) {
    switch (bd(r)) {
      case 1:
        var v = dv;
        break;
      case 4:
        v = _c;
        break;
      default:
        v = xc;
    }
    u = v.bind(null, r, u, n), v = void 0, !Ko || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), f ? v !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: v }) : n.addEventListener(r, u, !0) : v !== void 0 ? n.addEventListener(r, u, { passive: v }) : n.addEventListener(r, u, !1);
  }
  function zc(n, r, u, f, v) {
    var g = f;
    if (!(r & 1) && !(r & 2) && f !== null)
      e:
        for (; ; ) {
          if (f === null)
            return;
          var _ = f.tag;
          if (_ === 3 || _ === 4) {
            var D = f.stateNode.containerInfo;
            if (D === v || D.nodeType === 8 && D.parentNode === v)
              break;
            if (_ === 4)
              for (_ = f.return; _ !== null; ) {
                var N = _.tag;
                if ((N === 3 || N === 4) && (N = _.stateNode.containerInfo, N === v || N.nodeType === 8 && N.parentNode === v))
                  return;
                _ = _.return;
              }
            for (; D !== null; ) {
              if (_ = Ea(D), _ === null)
                return;
              if (N = _.tag, N === 5 || N === 6) {
                f = g = _;
                continue e;
              }
              D = D.parentNode;
            }
          }
          f = f.return;
        }
    Zo(function() {
      var B = g, ne = Pt(u), ie = [];
      e: {
        var te = Yv.get(n);
        if (te !== void 0) {
          var Se = Tc, Re = n;
          switch (n) {
            case "keypress":
              if (tu(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Se = qg;
              break;
            case "focusin":
              Re = "focus", Se = dl;
              break;
            case "focusout":
              Re = "blur", Se = dl;
              break;
            case "beforeblur":
            case "afterblur":
              Se = dl;
              break;
            case "click":
              if (u.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Se = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Se = mv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Se = Zg;
              break;
            case Id:
            case Fv:
            case Hv:
              Se = yv;
              break;
            case Pv:
              Se = wv;
              break;
            case "scroll":
              Se = hv;
              break;
            case "wheel":
              Se = Mi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Se = Gg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Se = Dc;
          }
          var Oe = (r & 4) !== 0, hn = !Oe && n === "scroll", F = Oe ? te !== null ? te + "Capture" : null : te;
          Oe = [];
          for (var U = B, Y; U !== null; ) {
            Y = U;
            var ue = Y.stateNode;
            if (Y.tag === 5 && ue !== null && (Y = ue, F !== null && (ue = ql(U, F), ue != null && Oe.push(gs(U, ue, Y)))), hn)
              break;
            U = U.return;
          }
          0 < Oe.length && (te = new Se(te, Re, null, u, ne), ie.push({ event: te, listeners: Oe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", Se = n === "mouseout" || n === "pointerout", te && u !== Nr && (Re = u.relatedTarget || u.fromElement) && (Ea(Re) || Re[Ui]))
            break e;
          if ((Se || te) && (te = ne.window === ne ? ne : (te = ne.ownerDocument) ? te.defaultView || te.parentWindow : window, Se ? (Re = u.relatedTarget || u.toElement, Se = B, Re = Re ? Ea(Re) : null, Re !== null && (hn = rt(Re), Re !== hn || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (Se = null, Re = B), Se !== Re)) {
            if (Oe = Rc, ue = "onMouseLeave", F = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Oe = Dc, ue = "onPointerLeave", F = "onPointerEnter", U = "pointer"), hn = Se == null ? te : su(Se), Y = Re == null ? te : su(Re), te = new Oe(ue, U + "leave", Se, u, ne), te.target = hn, te.relatedTarget = Y, ue = null, Ea(ne) === B && (Oe = new Oe(F, U + "enter", Re, u, ne), Oe.target = Y, Oe.relatedTarget = hn, ue = Oe), hn = ue, Se && Re)
              t: {
                for (Oe = Se, F = Re, U = 0, Y = Oe; Y; Y = no(Y))
                  U++;
                for (Y = 0, ue = F; ue; ue = no(ue))
                  Y++;
                for (; 0 < U - Y; )
                  Oe = no(Oe), U--;
                for (; 0 < Y - U; )
                  F = no(F), Y--;
                for (; U--; ) {
                  if (Oe === F || F !== null && Oe === F.alternate)
                    break t;
                  Oe = no(Oe), F = no(F);
                }
                Oe = null;
              }
            else
              Oe = null;
            Se !== null && Vd(ie, te, Se, Oe, !1), Re !== null && hn !== null && Vd(ie, hn, Re, Oe, !0);
          }
        }
        e: {
          if (te = B ? su(B) : window, Se = te.nodeName && te.nodeName.toLowerCase(), Se === "select" || Se === "input" && te.type === "file")
            var Ne = Dv;
          else if (bv(te))
            if (Ad)
              Ne = Nv;
            else {
              Ne = e0;
              var De = Jg;
            }
          else
            (Se = te.nodeName) && Se.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (Ne = t0);
          if (Ne && (Ne = Ne(n, B))) {
            Rv(ie, Ne, u, ne);
            break e;
          }
          De && De(n, te, B), n === "focusout" && (De = te._wrapperState) && De.controlled && te.type === "number" && Ha(te, "number", te.value);
        }
        switch (De = B ? su(B) : window, n) {
          case "focusin":
            (bv(De) || De.contentEditable === "true") && (Qa = De, Fd = B, hs = null);
            break;
          case "focusout":
            hs = Fd = Qa = null;
            break;
          case "mousedown":
            Hd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hd = !1, jv(ie, u, ne);
            break;
          case "selectionchange":
            if (zv)
              break;
          case "keydown":
          case "keyup":
            jv(ie, u, ne);
        }
        var Ae;
        if (Ga)
          e: {
            switch (n) {
              case "compositionstart":
                var Ze = "onCompositionStart";
                break e;
              case "compositionend":
                Ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ze = "onCompositionUpdate";
                break e;
            }
            Ze = void 0;
          }
        else
          au ? Cv(n, u) && (Ze = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Ze = "onCompositionStart");
        Ze && (_v && u.locale !== "ko" && (au || Ze !== "onCompositionStart" ? Ze === "onCompositionEnd" && au && (Ae = Rd()) : (Di = ne, us = "value" in Di ? Di.value : Di.textContent, au = !0)), De = Ss(B, Ze), 0 < De.length && (Ze = new Md(Ze, n, null, u, ne), ie.push({ event: Ze, listeners: De }), Ae ? Ze.data = Ae : (Ae = Oc(u), Ae !== null && (Ze.data = Ae)))), (Ae = Mc ? Kg(n, u) : Xg(n, u)) && (B = Ss(B, "onBeforeInput"), 0 < B.length && (ne = new Md("onBeforeInput", "beforeinput", null, u, ne), ie.push({ event: ne, listeners: B }), ne.data = Ae));
      }
      Ac(ie, r);
    });
  }
  function gs(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function Ss(n, r) {
    for (var u = r + "Capture", f = []; n !== null; ) {
      var v = n, g = v.stateNode;
      v.tag === 5 && g !== null && (v = g, g = ql(n, u), g != null && f.unshift(gs(n, g, v)), g = ql(n, r), g != null && f.push(gs(n, g, v))), n = n.return;
    }
    return f;
  }
  function no(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Vd(n, r, u, f, v) {
    for (var g = r._reactName, _ = []; u !== null && u !== f; ) {
      var D = u, N = D.alternate, B = D.stateNode;
      if (N !== null && N === f)
        break;
      D.tag === 5 && B !== null && (D = B, v ? (N = ql(u, g), N != null && _.unshift(gs(u, N, D))) : v || (N = ql(u, g), N != null && _.push(gs(u, N, D)))), u = u.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var $d = /\r\n?/g, i0 = /\u0000|\uFFFD/g;
  function Bd(n) {
    return (typeof n == "string" ? n : "" + n).replace($d, `
`).replace(i0, "");
  }
  function jc(n, r, u) {
    if (r = Bd(r), Bd(n) !== r && u)
      throw Error(c(425));
  }
  function Fc() {
  }
  var Wd = null, ro = null;
  function Es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ao = typeof setTimeout == "function" ? setTimeout : void 0, Bv = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, Qd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(n) {
    return Gd.resolve(null).then(n).catch(l0);
  } : ao;
  function l0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function hl(n, r) {
    var u = r, f = 0;
    do {
      var v = u.nextSibling;
      if (n.removeChild(u), v && v.nodeType === 8)
        if (u = v.data, u === "/$") {
          if (f === 0) {
            n.removeChild(v), ls(r);
            return;
          }
          f--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || f++;
      u = v;
    } while (u);
    ls(r);
  }
  function qa(n) {
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
  function ws(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var vl = Math.random().toString(36).slice(2), ui = "__reactFiber$" + vl, io = "__reactProps$" + vl, Ui = "__reactContainer$" + vl, qd = "__reactEvents$" + vl, o0 = "__reactListeners$" + vl, Zd = "__reactHandles$" + vl;
  function Ea(n) {
    var r = n[ui];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Ui] || u[ui]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = ws(n); n !== null; ) {
            if (u = n[ui])
              return u;
            n = ws(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function _s(n) {
    return n = n[ui] || n[Ui], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function su(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function je(n) {
    return n[io] || null;
  }
  var ml = [], Vt = -1;
  function tt(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > Vt || (n.current = ml[Vt], ml[Vt] = null, Vt--);
  }
  function bt(n, r) {
    Vt++, ml[Vt] = n.current, n.current = r;
  }
  var si = {}, qe = tt(si), on = tt(!1), Ur = si;
  function wa(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return si;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r)
      return f.__reactInternalMemoizedMaskedChildContext;
    var v = {}, g;
    for (g in u)
      v[g] = r[g];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function Kt(n) {
    return n = n.childContextTypes, n != null;
  }
  function _a() {
    Tt(on), Tt(qe);
  }
  function yl(n, r, u) {
    if (qe.current !== si)
      throw Error(c(168));
    bt(qe, r), bt(on, u);
  }
  function xs(n, r, u) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return u;
    f = f.getChildContext();
    for (var v in f)
      if (!(v in r))
        throw Error(c(108, pa(n) || "Unknown", v));
    return _e({}, u, f);
  }
  function Hc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || si, Ur = qe.current, bt(qe, n), bt(on, on.current), !0;
  }
  function Wv(n, r, u) {
    var f = n.stateNode;
    if (!f)
      throw Error(c(169));
    u ? (n = xs(n, r, Ur), f.__reactInternalMemoizedMergedChildContext = n, Tt(on), Tt(qe), bt(qe, n)) : Tt(on), bt(on, u);
  }
  var na = null, zn = !1, Cs = !1;
  function Kd(n) {
    na === null ? na = [n] : na.push(n);
  }
  function Xd(n) {
    zn = !0, Kd(n);
  }
  function Ar() {
    if (!Cs && na !== null) {
      Cs = !0;
      var n = 0, r = Nt;
      try {
        var u = na;
        for (Nt = 1; n < u.length; n++) {
          var f = u[n];
          do
            f = f(!0);
          while (f !== null);
        }
        na = null, zn = !1;
      } catch (v) {
        throw na !== null && (na = na.slice(n + 1)), Zt(Ri, Ar), v;
      } finally {
        Nt = r, Cs = !1;
      }
    }
    return null;
  }
  var gl = [], zr = 0, lo = null, cu = 0, jr = [], ur = 0, xa = null, $n = 1, Ai = "";
  function ra(n, r) {
    gl[zr++] = cu, gl[zr++] = lo, lo = n, cu = r;
  }
  function Jd(n, r, u) {
    jr[ur++] = $n, jr[ur++] = Ai, jr[ur++] = xa, xa = n;
    var f = $n;
    n = Ai;
    var v = 32 - ma(f) - 1;
    f &= ~(1 << v), u += 1;
    var g = 32 - ma(r) + v;
    if (30 < g) {
      var _ = v - v % 5;
      g = (f & (1 << _) - 1).toString(32), f >>= _, v -= _, $n = 1 << 32 - ma(r) + v | u << v | f, Ai = g + n;
    } else
      $n = 1 << g | u << v | f, Ai = n;
  }
  function Pc(n) {
    n.return !== null && (ra(n, 1), Jd(n, 1, 0));
  }
  function ep(n) {
    for (; n === lo; )
      lo = gl[--zr], gl[zr] = null, cu = gl[--zr], gl[zr] = null;
    for (; n === xa; )
      xa = jr[--ur], jr[ur] = null, Ai = jr[--ur], jr[ur] = null, $n = jr[--ur], jr[ur] = null;
  }
  var aa = null, Fr = null, $t = !1, Ca = null;
  function tp(n, r) {
    var u = Ma(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Gv(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, aa = n, Fr = qa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, aa = n, Fr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = xa !== null ? { id: $n, overflow: Ai } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Ma(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, aa = n, Fr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ic(n) {
    if ($t) {
      var r = Fr;
      if (r) {
        var u = r;
        if (!Gv(n, r)) {
          if (Yc(n))
            throw Error(c(418));
          r = qa(u.nextSibling);
          var f = aa;
          r && Gv(n, r) ? tp(f, u) : (n.flags = n.flags & -4097 | 2, $t = !1, aa = n);
        }
      } else {
        if (Yc(n))
          throw Error(c(418));
        n.flags = n.flags & -4097 | 2, $t = !1, aa = n;
      }
    }
  }
  function Qv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    aa = n;
  }
  function Vc(n) {
    if (n !== aa)
      return !1;
    if (!$t)
      return Qv(n), $t = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = Fr)) {
      if (Yc(n))
        throw qv(), Error(c(418));
      for (; r; )
        tp(n, r), r = qa(r.nextSibling);
    }
    if (Qv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                Fr = qa(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Fr = null;
      }
    } else
      Fr = aa ? qa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function qv() {
    for (var n = Fr; n; )
      n = qa(n.nextSibling);
  }
  function en() {
    Fr = aa = null, $t = !1;
  }
  function np(n) {
    Ca === null ? Ca = [n] : Ca.push(n);
  }
  var $c = se.ReactCurrentBatchConfig;
  function ia(n, r) {
    if (n && n.defaultProps) {
      r = _e({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var ci = tt(null), Bc = null, Sl = null, rp = null;
  function ap() {
    rp = Sl = Bc = null;
  }
  function El(n) {
    var r = ci.current;
    Tt(ci), n._currentValue = r;
  }
  function jn(n, r, u) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function de(n, r) {
    Bc = n, rp = Sl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Sn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (rp !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Sl === null) {
        if (Bc === null)
          throw Error(c(308));
        Sl = n, Bc.dependencies = { lanes: 0, firstContext: n };
      } else
        Sl = Sl.next = n;
    return r;
  }
  var Bn = null;
  function ip(n) {
    Bn === null ? Bn = [n] : Bn.push(n);
  }
  function Zv(n, r, u, f) {
    var v = r.interleaved;
    return v === null ? (u.next = u, ip(r)) : (u.next = v.next, v.next = u), r.interleaved = u, zi(n, f);
  }
  function zi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var wl = !1;
  function lp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ji(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(n, r, u) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, ct & 2) {
      var v = f.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), f.pending = r, zi(n, u);
    }
    return v = f.interleaved, v === null ? (r.next = r, ip(f)) : (r.next = v.next, v.next = r), f.interleaved = r, zi(n, u);
  }
  function Wc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, ns(n, u);
    }
  }
  function op(n, r) {
    var u = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, u === f)) {
      var v = null, g = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var _ = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          g === null ? v = g = _ : g = g.next = _, u = u.next;
        } while (u !== null);
        g === null ? v = g = r : g = g.next = r;
      } else
        v = g = r;
      u = { baseState: f.baseState, firstBaseUpdate: v, lastBaseUpdate: g, shared: f.shared, effects: f.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function xl(n, r, u, f) {
    var v = n.updateQueue;
    wl = !1;
    var g = v.firstBaseUpdate, _ = v.lastBaseUpdate, D = v.shared.pending;
    if (D !== null) {
      v.shared.pending = null;
      var N = D, B = N.next;
      N.next = null, _ === null ? g = B : _.next = B, _ = N;
      var ne = n.alternate;
      ne !== null && (ne = ne.updateQueue, D = ne.lastBaseUpdate, D !== _ && (D === null ? ne.firstBaseUpdate = B : D.next = B, ne.lastBaseUpdate = N));
    }
    if (g !== null) {
      var ie = v.baseState;
      _ = 0, ne = B = N = null, D = g;
      do {
        var te = D.lane, Se = D.eventTime;
        if ((f & te) === te) {
          ne !== null && (ne = ne.next = {
            eventTime: Se,
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          });
          e: {
            var Re = n, Oe = D;
            switch (te = r, Se = u, Oe.tag) {
              case 1:
                if (Re = Oe.payload, typeof Re == "function") {
                  ie = Re.call(Se, ie, te);
                  break e;
                }
                ie = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = Oe.payload, te = typeof Re == "function" ? Re.call(Se, ie, te) : Re, te == null)
                  break e;
                ie = _e({}, ie, te);
                break e;
              case 2:
                wl = !0;
            }
          }
          D.callback !== null && D.lane !== 0 && (n.flags |= 64, te = v.effects, te === null ? v.effects = [D] : te.push(D));
        } else
          Se = { eventTime: Se, lane: te, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, ne === null ? (B = ne = Se, N = ie) : ne = ne.next = Se, _ |= te;
        if (D = D.next, D === null) {
          if (D = v.shared.pending, D === null)
            break;
          te = D, D = te.next, te.next = null, v.lastBaseUpdate = te, v.shared.pending = null;
        }
      } while (1);
      if (ne === null && (N = ie), v.baseState = N, v.firstBaseUpdate = B, v.lastBaseUpdate = ne, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          _ |= v.lane, v = v.next;
        while (v !== r);
      } else
        g === null && (v.shared.lanes = 0);
      Yi |= _, n.lanes = _, n.memoizedState = ie;
    }
  }
  function oo(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var f = n[r], v = f.callback;
        if (v !== null) {
          if (f.callback = null, f = u, typeof v != "function")
            throw Error(c(191, v));
          v.call(f);
        }
      }
  }
  var Kv = new i.Component().refs;
  function up(n, r, u, f) {
    r = n.memoizedState, u = u(f, r), u = u == null ? r : _e({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Gc = { isMounted: function(n) {
    return (n = n._reactInternals) ? rt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var f = dr(), v = En(n), g = ji(f, v);
    g.payload = r, u != null && (g.callback = u), r = _l(n, g, v), r !== null && (pr(r, n, v, f), Wc(r, n, v));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var f = dr(), v = En(n), g = ji(f, v);
    g.tag = 1, g.payload = r, u != null && (g.callback = u), r = _l(n, g, v), r !== null && (pr(r, n, v, f), Wc(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = dr(), f = En(n), v = ji(u, f);
    v.tag = 2, r != null && (v.callback = r), r = _l(n, v, f), r !== null && (pr(r, n, f, u), Wc(r, n, f));
  } };
  function Xv(n, r, u, f, v, g, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, _) : r.prototype && r.prototype.isPureReactComponent ? !ps(u, f) || !ps(v, g) : !0;
  }
  function Jv(n, r, u) {
    var f = !1, v = si, g = r.contextType;
    return typeof g == "object" && g !== null ? g = pn(g) : (v = Kt(r) ? Ur : qe.current, f = r.contextTypes, g = (f = f != null) ? wa(n, v) : si), r = new r(u, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Gc, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function em(n, r, u, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, f), r.state !== n && Gc.enqueueReplaceState(r, r.state, null);
  }
  function Qc(n, r, u, f) {
    var v = n.stateNode;
    v.props = u, v.state = n.memoizedState, v.refs = Kv, lp(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? v.context = pn(g) : (g = Kt(r) ? Ur : qe.current, v.context = wa(n, g)), v.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (up(n, r, g, u), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && Gc.enqueueReplaceState(v, v.state, null), xl(n, u, v, f), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function fu(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(c(309));
          var f = u.stateNode;
        }
        if (!f)
          throw Error(c(147, n));
        var v = f, g = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(_) {
          var D = v.refs;
          D === Kv && (D = v.refs = {}), _ === null ? delete D[g] : D[g] = _;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!u._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function tm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function nm(n) {
    function r(F, U) {
      if (n) {
        var Y = F.deletions;
        Y === null ? (F.deletions = [U], F.flags |= 16) : Y.push(U);
      }
    }
    function u(F, U) {
      if (!n)
        return null;
      for (; U !== null; )
        r(F, U), U = U.sibling;
      return null;
    }
    function f(F, U) {
      for (F = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? F.set(U.key, U) : F.set(U.index, U), U = U.sibling;
      return F;
    }
    function v(F, U) {
      return F = Ol(F, U), F.index = 0, F.sibling = null, F;
    }
    function g(F, U, Y) {
      return F.index = Y, n ? (Y = F.alternate, Y !== null ? (Y = Y.index, Y < U ? (F.flags |= 2, U) : Y) : (F.flags |= 2, U)) : (F.flags |= 1048576, U);
    }
    function _(F) {
      return n && F.alternate === null && (F.flags |= 2), F;
    }
    function D(F, U, Y, ue) {
      return U === null || U.tag !== 6 ? (U = Vs(Y, F.mode, ue), U.return = F, U) : (U = v(U, Y), U.return = F, U);
    }
    function N(F, U, Y, ue) {
      var Ne = Y.type;
      return Ne === ee ? ne(F, U, Y.props.children, ue, Y.key) : U !== null && (U.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === gt && tm(Ne) === U.type) ? (ue = v(U, Y.props), ue.ref = fu(F, U, Y), ue.return = F, ue) : (ue = Df(Y.type, Y.key, Y.props, null, F.mode, ue), ue.ref = fu(F, U, Y), ue.return = F, ue);
    }
    function B(F, U, Y, ue) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== Y.containerInfo || U.stateNode.implementation !== Y.implementation ? (U = Ro(Y, F.mode, ue), U.return = F, U) : (U = v(U, Y.children || []), U.return = F, U);
    }
    function ne(F, U, Y, ue, Ne) {
      return U === null || U.tag !== 7 ? (U = bo(Y, F.mode, ue, Ne), U.return = F, U) : (U = v(U, Y), U.return = F, U);
    }
    function ie(F, U, Y) {
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return U = Vs("" + U, F.mode, Y), U.return = F, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ce:
            return Y = Df(U.type, U.key, U.props, null, F.mode, Y), Y.ref = fu(F, null, U), Y.return = F, Y;
          case W:
            return U = Ro(U, F.mode, Y), U.return = F, U;
          case gt:
            var ue = U._init;
            return ie(F, ue(U._payload), Y);
        }
        if (bi(U) || Ue(U))
          return U = bo(U, F.mode, Y, null), U.return = F, U;
        qc(F, U);
      }
      return null;
    }
    function te(F, U, Y, ue) {
      var Ne = U !== null ? U.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return Ne !== null ? null : D(F, U, "" + Y, ue);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case ce:
            return Y.key === Ne ? N(F, U, Y, ue) : null;
          case W:
            return Y.key === Ne ? B(F, U, Y, ue) : null;
          case gt:
            return Ne = Y._init, te(
              F,
              U,
              Ne(Y._payload),
              ue
            );
        }
        if (bi(Y) || Ue(Y))
          return Ne !== null ? null : ne(F, U, Y, ue, null);
        qc(F, Y);
      }
      return null;
    }
    function Se(F, U, Y, ue, Ne) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number")
        return F = F.get(Y) || null, D(U, F, "" + ue, Ne);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case ce:
            return F = F.get(ue.key === null ? Y : ue.key) || null, N(U, F, ue, Ne);
          case W:
            return F = F.get(ue.key === null ? Y : ue.key) || null, B(U, F, ue, Ne);
          case gt:
            var De = ue._init;
            return Se(F, U, Y, De(ue._payload), Ne);
        }
        if (bi(ue) || Ue(ue))
          return F = F.get(Y) || null, ne(U, F, ue, Ne, null);
        qc(U, ue);
      }
      return null;
    }
    function Re(F, U, Y, ue) {
      for (var Ne = null, De = null, Ae = U, Ze = U = 0, Pn = null; Ae !== null && Ze < Y.length; Ze++) {
        Ae.index > Ze ? (Pn = Ae, Ae = null) : Pn = Ae.sibling;
        var yt = te(F, Ae, Y[Ze], ue);
        if (yt === null) {
          Ae === null && (Ae = Pn);
          break;
        }
        n && Ae && yt.alternate === null && r(F, Ae), U = g(yt, U, Ze), De === null ? Ne = yt : De.sibling = yt, De = yt, Ae = Pn;
      }
      if (Ze === Y.length)
        return u(F, Ae), $t && ra(F, Ze), Ne;
      if (Ae === null) {
        for (; Ze < Y.length; Ze++)
          Ae = ie(F, Y[Ze], ue), Ae !== null && (U = g(Ae, U, Ze), De === null ? Ne = Ae : De.sibling = Ae, De = Ae);
        return $t && ra(F, Ze), Ne;
      }
      for (Ae = f(F, Ae); Ze < Y.length; Ze++)
        Pn = Se(Ae, F, Ze, Y[Ze], ue), Pn !== null && (n && Pn.alternate !== null && Ae.delete(Pn.key === null ? Ze : Pn.key), U = g(Pn, U, Ze), De === null ? Ne = Pn : De.sibling = Pn, De = Pn);
      return n && Ae.forEach(function(Nl) {
        return r(F, Nl);
      }), $t && ra(F, Ze), Ne;
    }
    function Oe(F, U, Y, ue) {
      var Ne = Ue(Y);
      if (typeof Ne != "function")
        throw Error(c(150));
      if (Y = Ne.call(Y), Y == null)
        throw Error(c(151));
      for (var De = Ne = null, Ae = U, Ze = U = 0, Pn = null, yt = Y.next(); Ae !== null && !yt.done; Ze++, yt = Y.next()) {
        Ae.index > Ze ? (Pn = Ae, Ae = null) : Pn = Ae.sibling;
        var Nl = te(F, Ae, yt.value, ue);
        if (Nl === null) {
          Ae === null && (Ae = Pn);
          break;
        }
        n && Ae && Nl.alternate === null && r(F, Ae), U = g(Nl, U, Ze), De === null ? Ne = Nl : De.sibling = Nl, De = Nl, Ae = Pn;
      }
      if (yt.done)
        return u(
          F,
          Ae
        ), $t && ra(F, Ze), Ne;
      if (Ae === null) {
        for (; !yt.done; Ze++, yt = Y.next())
          yt = ie(F, yt.value, ue), yt !== null && (U = g(yt, U, Ze), De === null ? Ne = yt : De.sibling = yt, De = yt);
        return $t && ra(F, Ze), Ne;
      }
      for (Ae = f(F, Ae); !yt.done; Ze++, yt = Y.next())
        yt = Se(Ae, F, Ze, yt.value, ue), yt !== null && (n && yt.alternate !== null && Ae.delete(yt.key === null ? Ze : yt.key), U = g(yt, U, Ze), De === null ? Ne = yt : De.sibling = yt, De = yt);
      return n && Ae.forEach(function(R0) {
        return r(F, R0);
      }), $t && ra(F, Ze), Ne;
    }
    function hn(F, U, Y, ue) {
      if (typeof Y == "object" && Y !== null && Y.type === ee && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case ce:
            e: {
              for (var Ne = Y.key, De = U; De !== null; ) {
                if (De.key === Ne) {
                  if (Ne = Y.type, Ne === ee) {
                    if (De.tag === 7) {
                      u(F, De.sibling), U = v(De, Y.props.children), U.return = F, F = U;
                      break e;
                    }
                  } else if (De.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === gt && tm(Ne) === De.type) {
                    u(F, De.sibling), U = v(De, Y.props), U.ref = fu(F, De, Y), U.return = F, F = U;
                    break e;
                  }
                  u(F, De);
                  break;
                } else
                  r(F, De);
                De = De.sibling;
              }
              Y.type === ee ? (U = bo(Y.props.children, F.mode, ue, Y.key), U.return = F, F = U) : (ue = Df(Y.type, Y.key, Y.props, null, F.mode, ue), ue.ref = fu(F, U, Y), ue.return = F, F = ue);
            }
            return _(F);
          case W:
            e: {
              for (De = Y.key; U !== null; ) {
                if (U.key === De)
                  if (U.tag === 4 && U.stateNode.containerInfo === Y.containerInfo && U.stateNode.implementation === Y.implementation) {
                    u(F, U.sibling), U = v(U, Y.children || []), U.return = F, F = U;
                    break e;
                  } else {
                    u(F, U);
                    break;
                  }
                else
                  r(F, U);
                U = U.sibling;
              }
              U = Ro(Y, F.mode, ue), U.return = F, F = U;
            }
            return _(F);
          case gt:
            return De = Y._init, hn(F, U, De(Y._payload), ue);
        }
        if (bi(Y))
          return Re(F, U, Y, ue);
        if (Ue(Y))
          return Oe(F, U, Y, ue);
        qc(F, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, U !== null && U.tag === 6 ? (u(F, U.sibling), U = v(U, Y), U.return = F, F = U) : (u(F, U), U = Vs(Y, F.mode, ue), U.return = F, F = U), _(F)) : u(F, U);
    }
    return hn;
  }
  var du = nm(!0), rm = nm(!1), Ts = {}, Za = tt(Ts), bs = tt(Ts), pu = tt(Ts);
  function uo(n) {
    if (n === Ts)
      throw Error(c(174));
    return n;
  }
  function sp(n, r) {
    switch (bt(pu, r), bt(bs, n), bt(Za, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : mn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = mn(r, n);
    }
    Tt(Za), bt(Za, r);
  }
  function Cl() {
    Tt(Za), Tt(bs), Tt(pu);
  }
  function Ye(n) {
    uo(pu.current);
    var r = uo(Za.current), u = mn(r, n.type);
    r !== u && (bt(bs, n), bt(Za, u));
  }
  function ot(n) {
    bs.current === n && (Tt(Za), Tt(bs));
  }
  var $e = tt(0);
  function tn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
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
  function Zc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Kc = se.ReactCurrentDispatcher, cp = se.ReactCurrentBatchConfig, so = 0, Bt = null, Z = null, pt = null, We = !1, fi = !1, la = 0, co = 0;
  function Wt() {
    throw Error(c(321));
  }
  function fo(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!Sa(n[u], r[u]))
        return !1;
    return !0;
  }
  function Tl(n, r, u, f, v, g) {
    if (so = g, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Kc.current = n === null || n.memoizedState === null ? s0 : c0, n = u(f, v), fi) {
      g = 0;
      do {
        if (fi = !1, la = 0, 25 <= g)
          throw Error(c(301));
        g += 1, pt = Z = null, r.updateQueue = null, Kc.current = dp, n = u(f, v);
      } while (fi);
    }
    if (Kc.current = hf, r = Z !== null && Z.next !== null, so = 0, pt = Z = Bt = null, We = !1, r)
      throw Error(c(300));
    return n;
  }
  function po() {
    var n = la !== 0;
    return la = 0, n;
  }
  function ba() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pt === null ? Bt.memoizedState = pt = n : pt = pt.next = n, pt;
  }
  function Hr() {
    if (Z === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Z.next;
    var r = pt === null ? Bt.memoizedState : pt.next;
    if (r !== null)
      pt = r, Z = n;
    else {
      if (n === null)
        throw Error(c(310));
      Z = n, n = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, pt === null ? Bt.memoizedState = pt = n : pt = pt.next = n;
    }
    return pt;
  }
  function ho(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Rs(n) {
    var r = Hr(), u = r.queue;
    if (u === null)
      throw Error(c(311));
    u.lastRenderedReducer = n;
    var f = Z, v = f.baseQueue, g = u.pending;
    if (g !== null) {
      if (v !== null) {
        var _ = v.next;
        v.next = g.next, g.next = _;
      }
      f.baseQueue = v = g, u.pending = null;
    }
    if (v !== null) {
      g = v.next, f = f.baseState;
      var D = _ = null, N = null, B = g;
      do {
        var ne = B.lane;
        if ((so & ne) === ne)
          N !== null && (N = N.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), f = B.hasEagerState ? B.eagerState : n(f, B.action);
        else {
          var ie = {
            lane: ne,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          N === null ? (D = N = ie, _ = f) : N = N.next = ie, Bt.lanes |= ne, Yi |= ne;
        }
        B = B.next;
      } while (B !== null && B !== g);
      N === null ? _ = f : N.next = D, Sa(f, r.memoizedState) || (Sn = !0), r.memoizedState = f, r.baseState = _, r.baseQueue = N, u.lastRenderedState = f;
    }
    if (n = u.interleaved, n !== null) {
      v = n;
      do
        g = v.lane, Bt.lanes |= g, Yi |= g, v = v.next;
      while (v !== n);
    } else
      v === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Ds(n) {
    var r = Hr(), u = r.queue;
    if (u === null)
      throw Error(c(311));
    u.lastRenderedReducer = n;
    var f = u.dispatch, v = u.pending, g = r.memoizedState;
    if (v !== null) {
      u.pending = null;
      var _ = v = v.next;
      do
        g = n(g, _.action), _ = _.next;
      while (_ !== v);
      Sa(g, r.memoizedState) || (Sn = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), u.lastRenderedState = g;
    }
    return [g, f];
  }
  function Xc() {
  }
  function Jc(n, r) {
    var u = Bt, f = Hr(), v = r(), g = !Sa(f.memoizedState, v);
    if (g && (f.memoizedState = v, Sn = !0), f = f.queue, ks(nf.bind(null, u, f, n), [n]), f.getSnapshot !== r || g || pt !== null && pt.memoizedState.tag & 1) {
      if (u.flags |= 2048, vo(9, tf.bind(null, u, f, v, r), void 0, null), nn === null)
        throw Error(c(349));
      so & 30 || ef(u, r, v);
    }
    return v;
  }
  function ef(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function tf(n, r, u, f) {
    r.value = u, r.getSnapshot = f, rf(r) && af(n);
  }
  function nf(n, r, u) {
    return u(function() {
      rf(r) && af(n);
    });
  }
  function rf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !Sa(n, u);
    } catch {
      return !0;
    }
  }
  function af(n) {
    var r = zi(n, 1);
    r !== null && pr(r, n, 1, -1);
  }
  function lf(n) {
    var r = ba();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ho, lastRenderedState: n }, r.queue = n, n = n.dispatch = pf.bind(null, Bt, n), [r.memoizedState, n];
  }
  function vo(n, r, u, f) {
    return n = { tag: n, create: r, destroy: u, deps: f, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (f = u.next, u.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function of() {
    return Hr().memoizedState;
  }
  function mo(n, r, u, f) {
    var v = ba();
    Bt.flags |= n, v.memoizedState = vo(1 | r, u, void 0, f === void 0 ? null : f);
  }
  function Fi(n, r, u, f) {
    var v = Hr();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (Z !== null) {
      var _ = Z.memoizedState;
      if (g = _.destroy, f !== null && fo(f, _.deps)) {
        v.memoizedState = vo(r, u, g, f);
        return;
      }
    }
    Bt.flags |= n, v.memoizedState = vo(1 | r, u, g, f);
  }
  function uf(n, r) {
    return mo(8390656, 8, n, r);
  }
  function ks(n, r) {
    return Fi(2048, 8, n, r);
  }
  function sf(n, r) {
    return Fi(4, 2, n, r);
  }
  function cf(n, r) {
    return Fi(4, 4, n, r);
  }
  function fp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function hu(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Fi(4, 4, fp.bind(null, r, n), u);
  }
  function ff() {
  }
  function vu(n, r) {
    var u = Hr();
    r = r === void 0 ? null : r;
    var f = u.memoizedState;
    return f !== null && r !== null && fo(r, f[1]) ? f[0] : (u.memoizedState = [n, r], n);
  }
  function bl(n, r) {
    var u = Hr();
    r = r === void 0 ? null : r;
    var f = u.memoizedState;
    return f !== null && r !== null && fo(r, f[1]) ? f[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function Pr(n, r, u) {
    return so & 21 ? (Sa(u, r) || (u = Ec(), Bt.lanes |= u, Yi |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Sn = !0), n.memoizedState = u);
  }
  function u0(n, r) {
    var u = Nt;
    Nt = u !== 0 && 4 > u ? u : 4, n(!0);
    var f = cp.transition;
    cp.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = u, cp.transition = f;
    }
  }
  function Ht() {
    return Hr().memoizedState;
  }
  function df(n, r, u) {
    var f = En(n);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, mu(n))
      Ms(r, u);
    else if (u = Zv(n, r, u, f), u !== null) {
      var v = dr();
      pr(u, n, f, v), am(u, r, f);
    }
  }
  function pf(n, r, u) {
    var f = En(n), v = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (mu(n))
      Ms(r, v);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var _ = r.lastRenderedState, D = g(_, u);
          if (v.hasEagerState = !0, v.eagerState = D, Sa(D, _)) {
            var N = r.interleaved;
            N === null ? (v.next = v, ip(r)) : (v.next = N.next, N.next = v), r.interleaved = v;
            return;
          }
        } catch {
        } finally {
        }
      u = Zv(n, r, v, f), u !== null && (v = dr(), pr(u, n, f, v), am(u, r, f));
    }
  }
  function mu(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function Ms(n, r) {
    fi = We = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function am(n, r, u) {
    if (u & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, ns(n, u);
    }
  }
  var hf = { readContext: pn, useCallback: Wt, useContext: Wt, useEffect: Wt, useImperativeHandle: Wt, useInsertionEffect: Wt, useLayoutEffect: Wt, useMemo: Wt, useReducer: Wt, useRef: Wt, useState: Wt, useDebugValue: Wt, useDeferredValue: Wt, useTransition: Wt, useMutableSource: Wt, useSyncExternalStore: Wt, useId: Wt, unstable_isNewReconciler: !1 }, s0 = { readContext: pn, useCallback: function(n, r) {
    return ba().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: uf, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, mo(
      4194308,
      4,
      fp.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = ba();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var f = ba();
    return r = u !== void 0 ? u(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = df.bind(null, Bt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = ba();
    return n = { current: n }, r.memoizedState = n;
  }, useState: lf, useDebugValue: ff, useDeferredValue: function(n) {
    return ba().memoizedState = n;
  }, useTransition: function() {
    var n = lf(!1), r = n[0];
    return n = u0.bind(null, n[1]), ba().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var f = Bt, v = ba();
    if ($t) {
      if (u === void 0)
        throw Error(c(407));
      u = u();
    } else {
      if (u = r(), nn === null)
        throw Error(c(349));
      so & 30 || ef(f, r, u);
    }
    v.memoizedState = u;
    var g = { value: u, getSnapshot: r };
    return v.queue = g, uf(nf.bind(
      null,
      f,
      g,
      n
    ), [n]), f.flags |= 2048, vo(9, tf.bind(null, f, g, u, r), void 0, null), u;
  }, useId: function() {
    var n = ba(), r = nn.identifierPrefix;
    if ($t) {
      var u = Ai, f = $n;
      u = (f & ~(1 << 32 - ma(f) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = la++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = co++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, c0 = {
    readContext: pn,
    useCallback: vu,
    useContext: pn,
    useEffect: ks,
    useImperativeHandle: hu,
    useInsertionEffect: sf,
    useLayoutEffect: cf,
    useMemo: bl,
    useReducer: Rs,
    useRef: of,
    useState: function() {
      return Rs(ho);
    },
    useDebugValue: ff,
    useDeferredValue: function(n) {
      var r = Hr();
      return Pr(r, Z.memoizedState, n);
    },
    useTransition: function() {
      var n = Rs(ho)[0], r = Hr().memoizedState;
      return [n, r];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Jc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, dp = { readContext: pn, useCallback: vu, useContext: pn, useEffect: ks, useImperativeHandle: hu, useInsertionEffect: sf, useLayoutEffect: cf, useMemo: bl, useReducer: Ds, useRef: of, useState: function() {
    return Ds(ho);
  }, useDebugValue: ff, useDeferredValue: function(n) {
    var r = Hr();
    return Z === null ? r.memoizedState = n : Pr(r, Z.memoizedState, n);
  }, useTransition: function() {
    var n = Ds(ho)[0], r = Hr().memoizedState;
    return [n, r];
  }, useMutableSource: Xc, useSyncExternalStore: Jc, useId: Ht, unstable_isNewReconciler: !1 };
  function yu(n, r) {
    try {
      var u = "", f = r;
      do
        u += ri(f), f = f.return;
      while (f);
      var v = u;
    } catch (g) {
      v = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function Os(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function vf(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var f0 = typeof WeakMap == "function" ? WeakMap : Map;
  function im(n, r, u) {
    u = ji(-1, u), u.tag = 3, u.payload = { element: null };
    var f = r.value;
    return u.callback = function() {
      _f || (_f = !0, wo = f), vf(n, r);
    }, u;
  }
  function Ns(n, r, u) {
    u = ji(-1, u), u.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var v = r.value;
      u.payload = function() {
        return f(v);
      }, u.callback = function() {
        vf(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (u.callback = function() {
      vf(n, r), typeof f != "function" && (hi === null ? hi = /* @__PURE__ */ new Set([this]) : hi.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), u;
  }
  function lm(n, r, u) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new f0();
      var v = /* @__PURE__ */ new Set();
      f.set(r, v);
    } else
      v = f.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(r, v));
    v.has(u) || (v.add(u), n = g0.bind(null, n, r, u), r.then(n, n));
  }
  function pp(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function hp(n, r, u, f, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = ji(-1, 1), r.tag = 2, _l(u, r, 1))), u.lanes |= 1), n);
  }
  var d0 = se.ReactCurrentOwner, Sn = !1;
  function Tn(n, r, u, f) {
    r.child = n === null ? rm(r, null, u, f) : du(r, n.child, u, f);
  }
  function Rl(n, r, u, f, v) {
    u = u.render;
    var g = r.ref;
    return de(r, v), f = Tl(n, r, u, f, g, v), u = po(), n !== null && !Sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Wn(n, r, v)) : ($t && u && Pc(r), r.flags |= 1, Tn(n, r, f, v), r.child);
  }
  function mf(n, r, u, f, v) {
    if (n === null) {
      var g = u.type;
      return typeof g == "function" && !Lp(g) && g.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = g, Yr(n, r, g, f, v)) : (n = Df(u.type, null, f, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & v)) {
      var _ = g.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ps, u(_, f) && n.ref === r.ref)
        return Wn(n, r, v);
    }
    return r.flags |= 1, n = Ol(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yr(n, r, u, f, v) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (ps(g, f) && n.ref === r.ref)
        if (Sn = !1, r.pendingProps = f = g, (n.lanes & v) !== 0)
          n.flags & 131072 && (Sn = !0);
        else
          return r.lanes = n.lanes, Wn(n, r, v);
    }
    return gu(n, r, u, f, v);
  }
  function yo(n, r, u) {
    var f = r.pendingProps, v = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, bt(Cu, oa), oa |= u;
      else {
        if (!(u & 1073741824))
          return n = g !== null ? g.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, bt(Cu, oa), oa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : u, bt(Cu, oa), oa |= f;
      }
    else
      g !== null ? (f = g.baseLanes | u, r.memoizedState = null) : f = u, bt(Cu, oa), oa |= f;
    return Tn(n, r, v, u), r.child;
  }
  function nt(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function gu(n, r, u, f, v) {
    var g = Kt(u) ? Ur : qe.current;
    return g = wa(r, g), de(r, v), u = Tl(n, r, u, f, g, v), f = po(), n !== null && !Sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Wn(n, r, v)) : ($t && f && Pc(r), r.flags |= 1, Tn(n, r, u, v), r.child);
  }
  function vp(n, r, u, f, v) {
    if (Kt(u)) {
      var g = !0;
      Hc(r);
    } else
      g = !1;
    if (de(r, v), r.stateNode === null)
      sr(n, r), Jv(r, u, f), Qc(r, u, f, v), f = !0;
    else if (n === null) {
      var _ = r.stateNode, D = r.memoizedProps;
      _.props = D;
      var N = _.context, B = u.contextType;
      typeof B == "object" && B !== null ? B = pn(B) : (B = Kt(u) ? Ur : qe.current, B = wa(r, B));
      var ne = u.getDerivedStateFromProps, ie = typeof ne == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ie || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (D !== f || N !== B) && em(r, _, f, B), wl = !1;
      var te = r.memoizedState;
      _.state = te, xl(r, f, _, v), N = r.memoizedState, D !== f || te !== N || on.current || wl ? (typeof ne == "function" && (up(r, u, ne, f), N = r.memoizedState), (D = wl || Xv(r, u, D, f, te, N, B)) ? (ie || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = N), _.props = f, _.state = N, _.context = B, f = D) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      _ = r.stateNode, Cn(n, r), D = r.memoizedProps, B = r.type === r.elementType ? D : ia(r.type, D), _.props = B, ie = r.pendingProps, te = _.context, N = u.contextType, typeof N == "object" && N !== null ? N = pn(N) : (N = Kt(u) ? Ur : qe.current, N = wa(r, N));
      var Se = u.getDerivedStateFromProps;
      (ne = typeof Se == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (D !== ie || te !== N) && em(r, _, f, N), wl = !1, te = r.memoizedState, _.state = te, xl(r, f, _, v);
      var Re = r.memoizedState;
      D !== ie || te !== Re || on.current || wl ? (typeof Se == "function" && (up(r, u, Se, f), Re = r.memoizedState), (B = wl || Xv(r, u, B, f, te, Re, N) || !1) ? (ne || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(f, Re, N), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(f, Re, N)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Re), _.props = f, _.state = Re, _.context = N, f = B) : (typeof _.componentDidUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return om(n, r, u, f, g, v);
  }
  function om(n, r, u, f, v, g) {
    nt(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!f && !_)
      return v && Wv(r, u, !1), Wn(n, r, g);
    f = r.stateNode, d0.current = r;
    var D = _ && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && _ ? (r.child = du(r, n.child, null, g), r.child = du(r, null, D, g)) : Tn(n, r, D, g), r.memoizedState = f.state, v && Wv(r, u, !0), r.child;
  }
  function um(n) {
    var r = n.stateNode;
    r.pendingContext ? yl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && yl(n, r.context, !1), sp(n, r.containerInfo);
  }
  function yf(n, r, u, f, v) {
    return en(), np(v), r.flags |= 256, Tn(n, r, u, f), r.child;
  }
  var go = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function yp(n, r, u) {
    var f = r.pendingProps, v = $e.current, g = !1, _ = (r.flags & 128) !== 0, D;
    if ((D = _) || (D = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), D ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), bt($e, v & 1), n === null)
      return Ic(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = f.children, n = f.fallback, g ? (f = r.mode, g = r.child, _ = { mode: "hidden", children: _ }, !(f & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = _) : g = Is(_, f, 0, null), n = bo(n, f, u, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = mp(u), r.memoizedState = go, n) : gp(r, _));
    if (v = n.memoizedState, v !== null && (D = v.dehydrated, D !== null))
      return p0(n, r, _, f, D, v, u);
    if (g) {
      g = f.fallback, _ = r.mode, v = n.child, D = v.sibling;
      var N = { mode: "hidden", children: f.children };
      return !(_ & 1) && r.child !== v ? (f = r.child, f.childLanes = 0, f.pendingProps = N, r.deletions = null) : (f = Ol(v, N), f.subtreeFlags = v.subtreeFlags & 14680064), D !== null ? g = Ol(D, g) : (g = bo(g, _, u, null), g.flags |= 2), g.return = r, f.return = r, f.sibling = g, r.child = f, f = g, g = r.child, _ = n.child.memoizedState, _ = _ === null ? mp(u) : { baseLanes: _.baseLanes | u, cachePool: null, transitions: _.transitions }, g.memoizedState = _, g.childLanes = n.childLanes & ~u, r.memoizedState = go, f;
    }
    return g = n.child, n = g.sibling, f = Ol(g, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = u), f.return = r, f.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function gp(n, r) {
    return r = Is({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Su(n, r, u, f) {
    return f !== null && np(f), du(r, n.child, null, u), n = gp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function p0(n, r, u, f, v, g, _) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, f = Os(Error(c(422))), Su(n, r, _, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = f.fallback, v = r.mode, f = Is({ mode: "visible", children: f.children }, v, 0, null), g = bo(g, v, _, null), g.flags |= 2, f.return = r, g.return = r, f.sibling = g, r.child = f, r.mode & 1 && du(r, n.child, null, _), r.child.memoizedState = mp(_), r.memoizedState = go, g);
    if (!(r.mode & 1))
      return Su(n, r, _, null);
    if (v.data === "$!") {
      if (f = v.nextSibling && v.nextSibling.dataset, f)
        var D = f.dgst;
      return f = D, g = Error(c(419)), f = Os(g, f, void 0), Su(n, r, _, f);
    }
    if (D = (_ & n.childLanes) !== 0, Sn || D) {
      if (f = nn, f !== null) {
        switch (_ & -_) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
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
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = v & (f.suspendedLanes | _) ? 0 : v, v !== 0 && v !== g.retryLane && (g.retryLane = v, zi(n, v), pr(f, n, v, -1));
      }
      return Mp(), f = Os(Error(c(421))), Su(n, r, _, f);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = S0.bind(null, n), v._reactRetry = r, null) : (n = g.treeContext, Fr = qa(v.nextSibling), aa = r, $t = !0, Ca = null, n !== null && (jr[ur++] = $n, jr[ur++] = Ai, jr[ur++] = xa, $n = n.id, Ai = n.overflow, xa = r), r = gp(r, f.children), r.flags |= 4096, r);
  }
  function Sp(n, r, u) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), jn(n.return, r, u);
  }
  function gf(n, r, u, f, v) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: v } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = u, g.tailMode = v);
  }
  function Ep(n, r, u) {
    var f = r.pendingProps, v = f.revealOrder, g = f.tail;
    if (Tn(n, r, f.children, u), f = $e.current, f & 2)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Sp(n, u, r);
            else if (n.tag === 19)
              Sp(n, u, r);
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
    if (bt($e, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (v) {
        case "forwards":
          for (u = r.child, v = null; u !== null; )
            n = u.alternate, n !== null && tn(n) === null && (v = u), u = u.sibling;
          u = v, u === null ? (v = r.child, r.child = null) : (v = u.sibling, u.sibling = null), gf(r, !1, v, u, g);
          break;
        case "backwards":
          for (u = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && tn(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = u, u = v, v = n;
          }
          gf(r, !0, u, null, g);
          break;
        case "together":
          gf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function sr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Wn(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Yi |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, u = Ol(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Ol(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Hi(n, r, u) {
    switch (r.tag) {
      case 3:
        um(r), en();
        break;
      case 5:
        Ye(r);
        break;
      case 1:
        Kt(r.type) && Hc(r);
        break;
      case 4:
        sp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, v = r.memoizedProps.value;
        bt(ci, f._currentValue), f._currentValue = v;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (bt($e, $e.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? yp(n, r, u) : (bt($e, $e.current & 1), n = Wn(n, r, u), n !== null ? n.sibling : null);
        bt($e, $e.current & 1);
        break;
      case 19:
        if (f = (u & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return Ep(n, r, u);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), bt($e, $e.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yo(n, r, u);
    }
    return Wn(n, r, u);
  }
  var Ls, So, Ra, bn;
  Ls = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, So = function() {
  }, Ra = function(n, r, u, f) {
    var v = n.memoizedProps;
    if (v !== f) {
      n = r.stateNode, uo(Za.current);
      var g = null;
      switch (u) {
        case "input":
          v = ar(n, v), f = ar(n, f), g = [];
          break;
        case "select":
          v = _e({}, v, { value: void 0 }), f = _e({}, f, { value: void 0 }), g = [];
          break;
        case "textarea":
          v = Pa(n, v), f = Pa(n, f), g = [];
          break;
        default:
          typeof v.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Fc);
      }
      Nn(u, f);
      var _;
      u = null;
      for (B in v)
        if (!f.hasOwnProperty(B) && v.hasOwnProperty(B) && v[B] != null)
          if (B === "style") {
            var D = v[B];
            for (_ in D)
              D.hasOwnProperty(_) && (u || (u = {}), u[_] = "");
          } else
            B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (h.hasOwnProperty(B) ? g || (g = []) : (g = g || []).push(B, null));
      for (B in f) {
        var N = f[B];
        if (D = v != null ? v[B] : void 0, f.hasOwnProperty(B) && N !== D && (N != null || D != null))
          if (B === "style")
            if (D) {
              for (_ in D)
                !D.hasOwnProperty(_) || N && N.hasOwnProperty(_) || (u || (u = {}), u[_] = "");
              for (_ in N)
                N.hasOwnProperty(_) && D[_] !== N[_] && (u || (u = {}), u[_] = N[_]);
            } else
              u || (g || (g = []), g.push(
                B,
                u
              )), u = N;
          else
            B === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, D = D ? D.__html : void 0, N != null && D !== N && (g = g || []).push(B, N)) : B === "children" ? typeof N != "string" && typeof N != "number" || (g = g || []).push(B, "" + N) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (h.hasOwnProperty(B) ? (N != null && B === "onScroll" && Ft("scroll", n), g || D === N || (g = [])) : (g = g || []).push(B, N));
      }
      u && (g = g || []).push("style", u);
      var B = g;
      (r.updateQueue = B) && (r.flags |= 4);
    }
  }, bn = function(n, r, u, f) {
    u !== f && (r.flags |= 4);
  };
  function Us(n, r) {
    if (!$t)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var u = null; r !== null; )
            r.alternate !== null && (u = r), r = r.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var f = null; u !== null; )
            u.alternate !== null && (f = u), u = u.sibling;
          f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
      }
  }
  function cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, f = 0;
    if (r)
      for (var v = n.child; v !== null; )
        u |= v.lanes | v.childLanes, f |= v.subtreeFlags & 14680064, f |= v.flags & 14680064, v.return = n, v = v.sibling;
    else
      for (v = n.child; v !== null; )
        u |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= f, n.childLanes = u, r;
  }
  function h0(n, r, u) {
    var f = r.pendingProps;
    switch (ep(r), r.tag) {
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
        return Kt(r.type) && _a(), cr(r), null;
      case 3:
        return f = r.stateNode, Cl(), Tt(on), Tt(qe), Zc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ca !== null && (Ys(Ca), Ca = null))), So(n, r), cr(r), null;
      case 5:
        ot(r);
        var v = uo(pu.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Ra(n, r, u, f, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(c(166));
            return cr(r), null;
          }
          if (n = uo(Za.current), Vc(r)) {
            f = r.stateNode, u = r.type;
            var g = r.memoizedProps;
            switch (f[ui] = r, f[io] = g, n = (r.mode & 1) !== 0, u) {
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
                for (v = 0; v < ys.length; v++)
                  Ft(ys[v], f);
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
                Vn(f, g), Ft("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!g.multiple }, Ft("invalid", f);
                break;
              case "textarea":
                Zr(f, g), Ft("invalid", f);
            }
            Nn(u, g), v = null;
            for (var _ in g)
              if (g.hasOwnProperty(_)) {
                var D = g[_];
                _ === "children" ? typeof D == "string" ? f.textContent !== D && (g.suppressHydrationWarning !== !0 && jc(f.textContent, D, n), v = ["children", D]) : typeof D == "number" && f.textContent !== "" + D && (g.suppressHydrationWarning !== !0 && jc(
                  f.textContent,
                  D,
                  n
                ), v = ["children", "" + D]) : h.hasOwnProperty(_) && D != null && _ === "onScroll" && Ft("scroll", f);
              }
            switch (u) {
              case "input":
                Or(f), va(f, g, !0);
                break;
              case "textarea":
                Or(f), Kr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = Fc);
            }
            f = v, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            _ = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = _.createElement(u, { is: f.is }) : (n = _.createElement(u), u === "select" && (_ = n, f.multiple ? _.multiple = !0 : f.size && (_.size = f.size))) : n = _.createElementNS(n, u), n[ui] = r, n[io] = f, Ls(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = dn(u, f), u) {
                case "dialog":
                  Ft("cancel", n), Ft("close", n), v = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ft("load", n), v = f;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < ys.length; v++)
                    Ft(ys[v], n);
                  v = f;
                  break;
                case "source":
                  Ft("error", n), v = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Ft(
                    "error",
                    n
                  ), Ft("load", n), v = f;
                  break;
                case "details":
                  Ft("toggle", n), v = f;
                  break;
                case "input":
                  Vn(n, f), v = ar(n, f), Ft("invalid", n);
                  break;
                case "option":
                  v = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, v = _e({}, f, { value: void 0 }), Ft("invalid", n);
                  break;
                case "textarea":
                  Zr(n, f), v = Pa(n, f), Ft("invalid", n);
                  break;
                default:
                  v = f;
              }
              Nn(u, v), D = v;
              for (g in D)
                if (D.hasOwnProperty(g)) {
                  var N = D[g];
                  g === "style" ? Ot(n, N) : g === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && il(n, N)) : g === "children" ? typeof N == "string" ? (u !== "textarea" || N !== "") && Ia(n, N) : typeof N == "number" && Ia(n, "" + N) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (h.hasOwnProperty(g) ? N != null && g === "onScroll" && Ft("scroll", n) : N != null && re(n, g, N, _));
                }
              switch (u) {
                case "input":
                  Or(n), va(n, f, !1);
                  break;
                case "textarea":
                  Or(n), Kr(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + rr(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, g = f.value, g != null ? ii(n, !!f.multiple, g, !1) : f.defaultValue != null && ii(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = Fc);
              }
              switch (u) {
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
          if (u = uo(pu.current), uo(Za.current), Vc(r)) {
            if (f = r.stateNode, u = r.memoizedProps, f[ui] = r, (g = f.nodeValue !== u) && (n = aa, n !== null))
              switch (n.tag) {
                case 3:
                  jc(f.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && jc(f.nodeValue, u, (n.mode & 1) !== 0);
              }
            g && (r.flags |= 4);
          } else
            f = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(f), f[ui] = r, r.stateNode = f;
        }
        return cr(r), null;
      case 13:
        if (Tt($e), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if ($t && Fr !== null && r.mode & 1 && !(r.flags & 128))
            qv(), en(), r.flags |= 98560, g = !1;
          else if (g = Vc(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!g)
                throw Error(c(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g)
                throw Error(c(317));
              g[ui] = r;
            } else
              en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            cr(r), g = !1;
          } else
            Ca !== null && (Ys(Ca), Ca = null), g = !0;
          if (!g)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || $e.current & 1 ? Dn === 0 && (Dn = 3) : Mp())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return Cl(), So(n, r), n === null && uu(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return El(r.type._context), cr(r), null;
      case 17:
        return Kt(r.type) && _a(), cr(r), null;
      case 19:
        if (Tt($e), g = r.memoizedState, g === null)
          return cr(r), null;
        if (f = (r.flags & 128) !== 0, _ = g.rendering, _ === null)
          if (f)
            Us(g, !1);
          else {
            if (Dn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (_ = tn(n), _ !== null) {
                  for (r.flags |= 128, Us(g, !1), f = _.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = u, u = r.child; u !== null; )
                    g = u, n = f, g.flags &= 14680066, _ = g.alternate, _ === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = _.childLanes, g.lanes = _.lanes, g.child = _.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = _.memoizedProps, g.memoizedState = _.memoizedState, g.updateQueue = _.updateQueue, g.type = _.type, n = _.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return bt($e, $e.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            g.tail !== null && Et() > bu && (r.flags |= 128, f = !0, Us(g, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = tn(_), n !== null) {
              if (r.flags |= 128, f = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Us(g, !0), g.tail === null && g.tailMode === "hidden" && !_.alternate && !$t)
                return cr(r), null;
            } else
              2 * Et() - g.renderingStartTime > bu && u !== 1073741824 && (r.flags |= 128, f = !0, Us(g, !1), r.lanes = 4194304);
          g.isBackwards ? (_.sibling = r.child, r.child = _) : (u = g.last, u !== null ? u.sibling = _ : r.child = _, g.last = _);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = Et(), r.sibling = null, u = $e.current, bt($e, f ? u & 1 | 2 : u & 1), r) : (cr(r), null);
      case 22:
      case 23:
        return kp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? oa & 1073741824 && (cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function wp(n, r) {
    switch (ep(r), r.tag) {
      case 1:
        return Kt(r.type) && _a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cl(), Tt(on), Tt(qe), Zc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ot(r), null;
      case 13:
        if (Tt($e), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(c(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Tt($e), null;
      case 4:
        return Cl(), null;
      case 10:
        return El(r.type._context), null;
      case 22:
      case 23:
        return kp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var As = !1, Rn = !1, sm = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function Eu(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (f) {
          sn(n, r, f);
        }
      else
        u.current = null;
  }
  function zs(n, r, u) {
    try {
      u();
    } catch (f) {
      sn(n, r, f);
    }
  }
  var cm = !1;
  function fm(n, r) {
    if (Wd = Xl, n = Nc(), Oi(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var f = u.getSelection && u.getSelection();
          if (f && f.rangeCount !== 0) {
            u = f.anchorNode;
            var v = f.anchorOffset, g = f.focusNode;
            f = f.focusOffset;
            try {
              u.nodeType, g.nodeType;
            } catch {
              u = null;
              break e;
            }
            var _ = 0, D = -1, N = -1, B = 0, ne = 0, ie = n, te = null;
            t:
              for (; ; ) {
                for (var Se; ie !== u || v !== 0 && ie.nodeType !== 3 || (D = _ + v), ie !== g || f !== 0 && ie.nodeType !== 3 || (N = _ + f), ie.nodeType === 3 && (_ += ie.nodeValue.length), (Se = ie.firstChild) !== null; )
                  te = ie, ie = Se;
                for (; ; ) {
                  if (ie === n)
                    break t;
                  if (te === u && ++B === v && (D = _), te === g && ++ne === f && (N = _), (Se = ie.nextSibling) !== null)
                    break;
                  ie = te, te = ie.parentNode;
                }
                ie = Se;
              }
            u = D === -1 || N === -1 ? null : { start: D, end: N };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (ro = { focusedElem: n, selectionRange: u }, Xl = !1, Te = r; Te !== null; )
      if (r = Te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Te = n;
      else
        for (; Te !== null; ) {
          r = Te;
          try {
            var Re = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Re !== null) {
                    var Oe = Re.memoizedProps, hn = Re.memoizedState, F = r.stateNode, U = F.getSnapshotBeforeUpdate(r.elementType === r.type ? Oe : ia(r.type, Oe), hn);
                    F.__reactInternalSnapshotBeforeUpdate = U;
                  }
                  break;
                case 3:
                  var Y = r.stateNode.containerInfo;
                  Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
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
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
        }
    return Re = cm, cm = !1, Re;
  }
  function js(n, r, u) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var v = f = f.next;
      do {
        if ((v.tag & n) === n) {
          var g = v.destroy;
          v.destroy = void 0, g !== void 0 && zs(r, u, g);
        }
        v = v.next;
      } while (v !== f);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var f = u.create;
          u.destroy = f();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function _p(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function xp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, xp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ui], delete r[io], delete r[qd], delete r[o0], delete r[Zd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function dm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Sf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || dm(n.return))
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
  function wu(n, r, u) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = Fc));
    else if (f !== 4 && (n = n.child, n !== null))
      for (wu(n, r, u), n = n.sibling; n !== null; )
        wu(n, r, u), n = n.sibling;
  }
  function di(n, r, u) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null))
      for (di(n, r, u), n = n.sibling; n !== null; )
        di(n, r, u), n = n.sibling;
  }
  var Xt = null, Fn = !1;
  function Da(n, r, u) {
    for (u = u.child; u !== null; )
      _u(n, r, u), u = u.sibling;
  }
  function _u(n, r, u) {
    if ($a && typeof $a.onCommitFiberUnmount == "function")
      try {
        $a.onCommitFiberUnmount(ts, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Rn || Eu(u, r);
      case 6:
        var f = Xt, v = Fn;
        Xt = null, Da(n, r, u), Xt = f, Fn = v, Xt !== null && (Fn ? (n = Xt, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : Xt.removeChild(u.stateNode));
        break;
      case 18:
        Xt !== null && (Fn ? (n = Xt, u = u.stateNode, n.nodeType === 8 ? hl(n.parentNode, u) : n.nodeType === 1 && hl(n, u), ls(n)) : hl(Xt, u.stateNode));
        break;
      case 4:
        f = Xt, v = Fn, Xt = u.stateNode.containerInfo, Fn = !0, Da(n, r, u), Xt = f, Fn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rn && (f = u.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          v = f = f.next;
          do {
            var g = v, _ = g.destroy;
            g = g.tag, _ !== void 0 && (g & 2 || g & 4) && zs(u, r, _), v = v.next;
          } while (v !== f);
        }
        Da(n, r, u);
        break;
      case 1:
        if (!Rn && (Eu(u, r), f = u.stateNode, typeof f.componentWillUnmount == "function"))
          try {
            f.props = u.memoizedProps, f.state = u.memoizedState, f.componentWillUnmount();
          } catch (D) {
            sn(u, r, D);
          }
        Da(n, r, u);
        break;
      case 21:
        Da(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Rn = (f = Rn) || u.memoizedState !== null, Da(n, r, u), Rn = f) : Da(n, r, u);
        break;
      default:
        Da(n, r, u);
    }
  }
  function Pi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new sm()), r.forEach(function(f) {
        var v = E0.bind(null, n, f);
        u.has(f) || (u.add(f), f.then(v, v));
      });
    }
  }
  function Ka(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var f = 0; f < u.length; f++) {
        var v = u[f];
        try {
          var g = n, _ = r, D = _;
          e:
            for (; D !== null; ) {
              switch (D.tag) {
                case 5:
                  Xt = D.stateNode, Fn = !1;
                  break e;
                case 3:
                  Xt = D.stateNode.containerInfo, Fn = !0;
                  break e;
                case 4:
                  Xt = D.stateNode.containerInfo, Fn = !0;
                  break e;
              }
              D = D.return;
            }
          if (Xt === null)
            throw Error(c(160));
          _u(g, _, v), Xt = null, Fn = !1;
          var N = v.alternate;
          N !== null && (N.return = null), v.return = null;
        } catch (B) {
          sn(v, r, B);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        pm(r, n), r = r.sibling;
  }
  function pm(n, r) {
    var u = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ka(r, n), pi(n), f & 4) {
          try {
            js(3, n, n.return), Fs(3, n);
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
          try {
            js(5, n, n.return);
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
        }
        break;
      case 1:
        Ka(r, n), pi(n), f & 512 && u !== null && Eu(u, u.return);
        break;
      case 5:
        if (Ka(r, n), pi(n), f & 512 && u !== null && Eu(u, u.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Ia(v, "");
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
        }
        if (f & 4 && (v = n.stateNode, v != null)) {
          var g = n.memoizedProps, _ = u !== null ? u.memoizedProps : g, D = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null)
            try {
              D === "input" && g.type === "radio" && g.name != null && ir(v, g), dn(D, _);
              var B = dn(D, g);
              for (_ = 0; _ < N.length; _ += 2) {
                var ne = N[_], ie = N[_ + 1];
                ne === "style" ? Ot(v, ie) : ne === "dangerouslySetInnerHTML" ? il(v, ie) : ne === "children" ? Ia(v, ie) : re(v, ne, ie, B);
              }
              switch (D) {
                case "input":
                  lr(v, g);
                  break;
                case "textarea":
                  li(v, g);
                  break;
                case "select":
                  var te = v._wrapperState.wasMultiple;
                  v._wrapperState.wasMultiple = !!g.multiple;
                  var Se = g.value;
                  Se != null ? ii(v, !!g.multiple, Se, !1) : te !== !!g.multiple && (g.defaultValue != null ? ii(
                    v,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  ) : ii(v, !!g.multiple, g.multiple ? [] : "", !1));
              }
              v[io] = g;
            } catch (Oe) {
              sn(n, n.return, Oe);
            }
        }
        break;
      case 6:
        if (Ka(r, n), pi(n), f & 4) {
          if (n.stateNode === null)
            throw Error(c(162));
          v = n.stateNode, g = n.memoizedProps;
          try {
            v.nodeValue = g;
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
        }
        break;
      case 3:
        if (Ka(r, n), pi(n), f & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ls(r.containerInfo);
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
        break;
      case 4:
        Ka(r, n), pi(n);
        break;
      case 13:
        Ka(r, n), pi(n), v = n.child, v.flags & 8192 && (g = v.memoizedState !== null, v.stateNode.isHidden = g, !g || v.alternate !== null && v.alternate.memoizedState !== null || (bp = Et())), f & 4 && Pi(n);
        break;
      case 22:
        if (ne = u !== null && u.memoizedState !== null, n.mode & 1 ? (Rn = (B = Rn) || ne, Ka(r, n), Rn = B) : Ka(r, n), pi(n), f & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !ne && n.mode & 1)
            for (Te = n, ne = n.child; ne !== null; ) {
              for (ie = Te = ne; Te !== null; ) {
                switch (te = Te, Se = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    js(4, te, te.return);
                    break;
                  case 1:
                    Eu(te, te.return);
                    var Re = te.stateNode;
                    if (typeof Re.componentWillUnmount == "function") {
                      f = te, u = te.return;
                      try {
                        r = f, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                      } catch (Oe) {
                        sn(f, u, Oe);
                      }
                    }
                    break;
                  case 5:
                    Eu(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      Cp(ie);
                      continue;
                    }
                }
                Se !== null ? (Se.return = te, Te = Se) : Cp(ie);
              }
              ne = ne.sibling;
            }
          e:
            for (ne = null, ie = n; ; ) {
              if (ie.tag === 5) {
                if (ne === null) {
                  ne = ie;
                  try {
                    v = ie.stateNode, B ? (g = v.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (D = ie.stateNode, N = ie.memoizedProps.style, _ = N != null && N.hasOwnProperty("display") ? N.display : null, D.style.display = lt("display", _));
                  } catch (Oe) {
                    sn(n, n.return, Oe);
                  }
                }
              } else if (ie.tag === 6) {
                if (ne === null)
                  try {
                    ie.stateNode.nodeValue = B ? "" : ie.memoizedProps;
                  } catch (Oe) {
                    sn(n, n.return, Oe);
                  }
              } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === n) && ie.child !== null) {
                ie.child.return = ie, ie = ie.child;
                continue;
              }
              if (ie === n)
                break e;
              for (; ie.sibling === null; ) {
                if (ie.return === null || ie.return === n)
                  break e;
                ne === ie && (ne = null), ie = ie.return;
              }
              ne === ie && (ne = null), ie.sibling.return = ie.return, ie = ie.sibling;
            }
        }
        break;
      case 19:
        Ka(r, n), pi(n), f & 4 && Pi(n);
        break;
      case 21:
        break;
      default:
        Ka(
          r,
          n
        ), pi(n);
    }
  }
  function pi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (dm(u)) {
              var f = u;
              break e;
            }
            u = u.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var v = f.stateNode;
            f.flags & 32 && (Ia(v, ""), f.flags &= -33);
            var g = Sf(n);
            di(n, g, v);
            break;
          case 3:
          case 4:
            var _ = f.stateNode.containerInfo, D = Sf(n);
            wu(n, D, _);
            break;
          default:
            throw Error(c(161));
        }
      } catch (N) {
        sn(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function hm(n, r, u) {
    Te = n, xu(n);
  }
  function xu(n, r, u) {
    for (var f = (n.mode & 1) !== 0; Te !== null; ) {
      var v = Te, g = v.child;
      if (v.tag === 22 && f) {
        var _ = v.memoizedState !== null || As;
        if (!_) {
          var D = v.alternate, N = D !== null && D.memoizedState !== null || Rn;
          D = As;
          var B = Rn;
          if (As = _, (Rn = N) && !B)
            for (Te = v; Te !== null; )
              _ = Te, N = _.child, _.tag === 22 && _.memoizedState !== null ? mm(v) : N !== null ? (N.return = _, Te = N) : mm(v);
          for (; g !== null; )
            Te = g, xu(g), g = g.sibling;
          Te = v, As = D, Rn = B;
        }
        vm(n);
      } else
        v.subtreeFlags & 8772 && g !== null ? (g.return = v, Te = g) : vm(n);
    }
  }
  function vm(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r.flags & 8772) {
        var u = r.alternate;
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
                  if (u === null)
                    f.componentDidMount();
                  else {
                    var v = r.elementType === r.type ? u.memoizedProps : ia(r.type, u.memoizedProps);
                    f.componentDidUpdate(v, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                  }
                var g = r.updateQueue;
                g !== null && oo(r, g, f);
                break;
              case 3:
                var _ = r.updateQueue;
                if (_ !== null) {
                  if (u = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        u = r.child.stateNode;
                        break;
                      case 1:
                        u = r.child.stateNode;
                    }
                  oo(r, _, u);
                }
                break;
              case 5:
                var D = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = D;
                  var N = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && u.focus();
                      break;
                    case "img":
                      N.src && (u.src = N.src);
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
                    var ne = B.memoizedState;
                    if (ne !== null) {
                      var ie = ne.dehydrated;
                      ie !== null && ls(ie);
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
        } catch (te) {
          sn(r, r.return, te);
        }
      }
      if (r === n) {
        Te = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, Te = u;
        break;
      }
      Te = r.return;
    }
  }
  function Cp(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r === n) {
        Te = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, Te = u;
        break;
      }
      Te = r.return;
    }
  }
  function mm(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Fs(4, r);
            } catch (N) {
              sn(r, u, N);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var v = r.return;
              try {
                f.componentDidMount();
              } catch (N) {
                sn(r, v, N);
              }
            }
            var g = r.return;
            try {
              _p(r);
            } catch (N) {
              sn(r, g, N);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              _p(r);
            } catch (N) {
              sn(r, _, N);
            }
        }
      } catch (N) {
        sn(r, r.return, N);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var D = r.sibling;
      if (D !== null) {
        D.return = r.return, Te = D;
        break;
      }
      Te = r.return;
    }
  }
  var Ef = Math.ceil, Hs = se.ReactCurrentDispatcher, Tp = se.ReactCurrentOwner, fr = se.ReactCurrentBatchConfig, ct = 0, nn = null, un = null, Hn = 0, oa = 0, Cu = tt(0), Dn = 0, Ps = null, Yi = 0, wf = 0, Tu = 0, Eo = null, yr = null, bp = 0, bu = 1 / 0, Ii = null, _f = !1, wo = null, hi = null, Dl = !1, kl = null, xf = 0, Ru = 0, Cf = null, _o = -1, xo = 0;
  function dr() {
    return ct & 6 ? Et() : _o !== -1 ? _o : _o = Et();
  }
  function En(n) {
    return n.mode & 1 ? ct & 2 && Hn !== 0 ? Hn & -Hn : $c.transition !== null ? (xo === 0 && (xo = Ec()), xo) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : bd(n.type)), n) : 1;
  }
  function pr(n, r, u, f) {
    if (50 < Ru)
      throw Ru = 0, Cf = null, Error(c(185));
    Kl(n, u, f), (!(ct & 2) || n !== nn) && (n === nn && (!(ct & 2) && (wf |= u), Dn === 4 && ka(n, Hn)), hr(n, f), u === 1 && ct === 0 && !(r.mode & 1) && (bu = Et() + 500, zn && Ar()));
  }
  function hr(n, r) {
    var u = n.callbackNode;
    Sc(n, r);
    var f = Ba(n, n === nn ? Hn : 0);
    if (f === 0)
      u !== null && mr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (u != null && mr(u), r === 1)
        n.tag === 0 ? Xd(ym.bind(null, n)) : Kd(ym.bind(null, n)), Qd(function() {
          !(ct & 6) && Ar();
        }), u = null;
      else {
        switch (xd(f)) {
          case 1:
            u = Ri;
            break;
          case 4:
            u = st;
            break;
          case 16:
            u = sl;
            break;
          case 536870912:
            u = Sd;
            break;
          default:
            u = sl;
        }
        u = Np(u, Du.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function Du(n, r) {
    if (_o = -1, xo = 0, ct & 6)
      throw Error(c(327));
    var u = n.callbackNode;
    if (Mu() && n.callbackNode !== u)
      return null;
    var f = Ba(n, n === nn ? Hn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = bf(n, f);
    else {
      r = f;
      var v = ct;
      ct |= 2;
      var g = Tf();
      (nn !== n || Hn !== r) && (Ii = null, bu = Et() + 500, Co(n, r));
      do
        try {
          m0();
          break;
        } catch (D) {
          gm(n, D);
        }
      while (1);
      ap(), Hs.current = g, ct = v, un !== null ? r = 0 : (nn = null, Hn = 0, r = Dn);
    }
    if (r !== 0) {
      if (r === 2 && (v = wd(n), v !== 0 && (f = v, r = Rp(n, v))), r === 1)
        throw u = Ps, Co(n, 0), ka(n, f), hr(n, Et()), u;
      if (r === 6)
        ka(n, f);
      else {
        if (v = n.current.alternate, !(f & 30) && !Dp(v) && (r = bf(n, f), r === 2 && (g = wd(n), g !== 0 && (f = g, r = Rp(n, g))), r === 1))
          throw u = Ps, Co(n, 0), ka(n, f), hr(n, Et()), u;
        switch (n.finishedWork = v, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            To(n, yr, Ii);
            break;
          case 3:
            if (ka(n, f), (f & 130023424) === f && (r = bp + 500 - Et(), 10 < r)) {
              if (Ba(n, 0) !== 0)
                break;
              if (v = n.suspendedLanes, (v & f) !== f) {
                dr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = ao(To.bind(null, n, yr, Ii), r);
              break;
            }
            To(n, yr, Ii);
            break;
          case 4:
            if (ka(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, v = -1; 0 < f; ) {
              var _ = 31 - ma(f);
              g = 1 << _, _ = r[_], _ > v && (v = _), f &= ~g;
            }
            if (f = v, f = Et() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Ef(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = ao(To.bind(null, n, yr, Ii), f);
              break;
            }
            To(n, yr, Ii);
            break;
          case 5:
            To(n, yr, Ii);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return hr(n, Et()), n.callbackNode === u ? Du.bind(null, n) : null;
  }
  function Rp(n, r) {
    var u = Eo;
    return n.current.memoizedState.isDehydrated && (Co(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = yr, yr = u, r !== null && Ys(r)), n;
  }
  function Ys(n) {
    yr === null ? yr = n : yr.push.apply(yr, n);
  }
  function Dp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var f = 0; f < u.length; f++) {
            var v = u[f], g = v.getSnapshot;
            v = v.value;
            try {
              if (!Sa(g(), v))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null)
        u.return = r, r = u;
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
  function ka(n, r) {
    for (r &= ~Tu, r &= ~wf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - ma(r), f = 1 << u;
      n[u] = -1, r &= ~f;
    }
  }
  function ym(n) {
    if (ct & 6)
      throw Error(c(327));
    Mu();
    var r = Ba(n, 0);
    if (!(r & 1))
      return hr(n, Et()), null;
    var u = bf(n, r);
    if (n.tag !== 0 && u === 2) {
      var f = wd(n);
      f !== 0 && (r = f, u = Rp(n, f));
    }
    if (u === 1)
      throw u = Ps, Co(n, 0), ka(n, r), hr(n, Et()), u;
    if (u === 6)
      throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, To(n, yr, Ii), hr(n, Et()), null;
  }
  function ku(n, r) {
    var u = ct;
    ct |= 1;
    try {
      return n(r);
    } finally {
      ct = u, ct === 0 && (bu = Et() + 500, zn && Ar());
    }
  }
  function Ml(n) {
    kl !== null && kl.tag === 0 && !(ct & 6) && Mu();
    var r = ct;
    ct |= 1;
    var u = fr.transition, f = Nt;
    try {
      if (fr.transition = null, Nt = 1, n)
        return n();
    } finally {
      Nt = f, fr.transition = u, ct = r, !(ct & 6) && Ar();
    }
  }
  function kp() {
    oa = Cu.current, Tt(Cu);
  }
  function Co(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Bv(u)), un !== null)
      for (u = un.return; u !== null; ) {
        var f = u;
        switch (ep(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && _a();
            break;
          case 3:
            Cl(), Tt(on), Tt(qe), Zc();
            break;
          case 5:
            ot(f);
            break;
          case 4:
            Cl();
            break;
          case 13:
            Tt($e);
            break;
          case 19:
            Tt($e);
            break;
          case 10:
            El(f.type._context);
            break;
          case 22:
          case 23:
            kp();
        }
        u = u.return;
      }
    if (nn = n, un = n = Ol(n.current, null), Hn = oa = r, Dn = 0, Ps = null, Tu = wf = Yi = 0, yr = Eo = null, Bn !== null) {
      for (r = 0; r < Bn.length; r++)
        if (u = Bn[r], f = u.interleaved, f !== null) {
          u.interleaved = null;
          var v = f.next, g = u.pending;
          if (g !== null) {
            var _ = g.next;
            g.next = v, f.next = _;
          }
          u.pending = f;
        }
      Bn = null;
    }
    return n;
  }
  function gm(n, r) {
    do {
      var u = un;
      try {
        if (ap(), Kc.current = hf, We) {
          for (var f = Bt.memoizedState; f !== null; ) {
            var v = f.queue;
            v !== null && (v.pending = null), f = f.next;
          }
          We = !1;
        }
        if (so = 0, pt = Z = Bt = null, fi = !1, la = 0, Tp.current = null, u === null || u.return === null) {
          Dn = 1, Ps = r, un = null;
          break;
        }
        e: {
          var g = n, _ = u.return, D = u, N = r;
          if (r = Hn, D.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var B = N, ne = D, ie = ne.tag;
            if (!(ne.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var te = ne.alternate;
              te ? (ne.updateQueue = te.updateQueue, ne.memoizedState = te.memoizedState, ne.lanes = te.lanes) : (ne.updateQueue = null, ne.memoizedState = null);
            }
            var Se = pp(_);
            if (Se !== null) {
              Se.flags &= -257, hp(Se, _, D, g, r), Se.mode & 1 && lm(g, B, r), r = Se, N = B;
              var Re = r.updateQueue;
              if (Re === null) {
                var Oe = /* @__PURE__ */ new Set();
                Oe.add(N), r.updateQueue = Oe;
              } else
                Re.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                lm(g, B, r), Mp();
                break e;
              }
              N = Error(c(426));
            }
          } else if ($t && D.mode & 1) {
            var hn = pp(_);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), hp(hn, _, D, g, r), np(yu(N, D));
              break e;
            }
          }
          g = N = yu(N, D), Dn !== 4 && (Dn = 2), Eo === null ? Eo = [g] : Eo.push(g), g = _;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var F = im(g, N, r);
                op(g, F);
                break e;
              case 1:
                D = N;
                var U = g.type, Y = g.stateNode;
                if (!(g.flags & 128) && (typeof U.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (hi === null || !hi.has(Y)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var ue = Ns(g, D, r);
                  op(g, ue);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Op(u);
      } catch (Ne) {
        r = Ne, un === u && u !== null && (un = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Tf() {
    var n = Hs.current;
    return Hs.current = hf, n === null ? hf : n;
  }
  function Mp() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), nn === null || !(Yi & 268435455) && !(wf & 268435455) || ka(nn, Hn);
  }
  function bf(n, r) {
    var u = ct;
    ct |= 2;
    var f = Tf();
    (nn !== n || Hn !== r) && (Ii = null, Co(n, r));
    do
      try {
        v0();
        break;
      } catch (v) {
        gm(n, v);
      }
    while (1);
    if (ap(), ct = u, Hs.current = f, un !== null)
      throw Error(c(261));
    return nn = null, Hn = 0, Dn;
  }
  function v0() {
    for (; un !== null; )
      Sm(un);
  }
  function m0() {
    for (; un !== null && !ul(); )
      Sm(un);
  }
  function Sm(n) {
    var r = wm(n.alternate, n, oa);
    n.memoizedProps = n.pendingProps, r === null ? Op(n) : un = r, Tp.current = null;
  }
  function Op(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = wp(u, r), u !== null) {
          u.flags &= 32767, un = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Dn = 6, un = null;
          return;
        }
      } else if (u = h0(u, r, oa), u !== null) {
        un = u;
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
  function To(n, r, u) {
    var f = Nt, v = fr.transition;
    try {
      fr.transition = null, Nt = 1, y0(n, r, u, f);
    } finally {
      fr.transition = v, Nt = f;
    }
    return null;
  }
  function y0(n, r, u, f) {
    do
      Mu();
    while (kl !== null);
    if (ct & 6)
      throw Error(c(327));
    u = n.finishedWork;
    var v = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = u.lanes | u.childLanes;
    if (Vg(n, g), n === nn && (un = nn = null, Hn = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Dl || (Dl = !0, Np(sl, function() {
      return Mu(), null;
    })), g = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || g) {
      g = fr.transition, fr.transition = null;
      var _ = Nt;
      Nt = 1;
      var D = ct;
      ct |= 4, Tp.current = null, fm(n, u), pm(u, n), Lc(ro), Xl = !!Wd, ro = Wd = null, n.current = u, hm(u), yc(), ct = D, Nt = _, fr.transition = g;
    } else
      n.current = u;
    if (Dl && (Dl = !1, kl = n, xf = v), g = n.pendingLanes, g === 0 && (hi = null), iv(u.stateNode), hr(n, Et()), r !== null)
      for (f = n.onRecoverableError, u = 0; u < r.length; u++)
        v = r[u], f(v.value, { componentStack: v.stack, digest: v.digest });
    if (_f)
      throw _f = !1, n = wo, wo = null, n;
    return xf & 1 && n.tag !== 0 && Mu(), g = n.pendingLanes, g & 1 ? n === Cf ? Ru++ : (Ru = 0, Cf = n) : Ru = 0, Ar(), null;
  }
  function Mu() {
    if (kl !== null) {
      var n = xd(xf), r = fr.transition, u = Nt;
      try {
        if (fr.transition = null, Nt = 16 > n ? 16 : n, kl === null)
          var f = !1;
        else {
          if (n = kl, kl = null, xf = 0, ct & 6)
            throw Error(c(331));
          var v = ct;
          for (ct |= 4, Te = n.current; Te !== null; ) {
            var g = Te, _ = g.child;
            if (Te.flags & 16) {
              var D = g.deletions;
              if (D !== null) {
                for (var N = 0; N < D.length; N++) {
                  var B = D[N];
                  for (Te = B; Te !== null; ) {
                    var ne = Te;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, ne, g);
                    }
                    var ie = ne.child;
                    if (ie !== null)
                      ie.return = ne, Te = ie;
                    else
                      for (; Te !== null; ) {
                        ne = Te;
                        var te = ne.sibling, Se = ne.return;
                        if (xp(ne), ne === B) {
                          Te = null;
                          break;
                        }
                        if (te !== null) {
                          te.return = Se, Te = te;
                          break;
                        }
                        Te = Se;
                      }
                  }
                }
                var Re = g.alternate;
                if (Re !== null) {
                  var Oe = Re.child;
                  if (Oe !== null) {
                    Re.child = null;
                    do {
                      var hn = Oe.sibling;
                      Oe.sibling = null, Oe = hn;
                    } while (Oe !== null);
                  }
                }
                Te = g;
              }
            }
            if (g.subtreeFlags & 2064 && _ !== null)
              _.return = g, Te = _;
            else
              e:
                for (; Te !== null; ) {
                  if (g = Te, g.flags & 2048)
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(9, g, g.return);
                    }
                  var F = g.sibling;
                  if (F !== null) {
                    F.return = g.return, Te = F;
                    break e;
                  }
                  Te = g.return;
                }
          }
          var U = n.current;
          for (Te = U; Te !== null; ) {
            _ = Te;
            var Y = _.child;
            if (_.subtreeFlags & 2064 && Y !== null)
              Y.return = _, Te = Y;
            else
              e:
                for (_ = U; Te !== null; ) {
                  if (D = Te, D.flags & 2048)
                    try {
                      switch (D.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fs(9, D);
                      }
                    } catch (Ne) {
                      sn(D, D.return, Ne);
                    }
                  if (D === _) {
                    Te = null;
                    break e;
                  }
                  var ue = D.sibling;
                  if (ue !== null) {
                    ue.return = D.return, Te = ue;
                    break e;
                  }
                  Te = D.return;
                }
          }
          if (ct = v, Ar(), $a && typeof $a.onPostCommitFiberRoot == "function")
            try {
              $a.onPostCommitFiberRoot(ts, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        Nt = u, fr.transition = r;
      }
    }
    return !1;
  }
  function Em(n, r, u) {
    r = yu(u, r), r = im(n, r, 1), n = _l(n, r, 1), r = dr(), n !== null && (Kl(n, 1, r), hr(n, r));
  }
  function sn(n, r, u) {
    if (n.tag === 3)
      Em(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Em(r, n, u);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (hi === null || !hi.has(f))) {
            n = yu(u, n), n = Ns(r, n, 1), r = _l(r, n, 1), n = dr(), r !== null && (Kl(r, 1, n), hr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function g0(n, r, u) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & u, nn === n && (Hn & u) === u && (Dn === 4 || Dn === 3 && (Hn & 130023424) === Hn && 500 > Et() - bp ? Co(n, 0) : Tu |= u), hr(n, r);
  }
  function Rf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Xo, Xo <<= 1, !(Xo & 130023424) && (Xo = 4194304)) : r = 1);
    var u = dr();
    n = zi(n, r), n !== null && (Kl(n, r, u), hr(n, u));
  }
  function S0(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), Rf(n, u);
  }
  function E0(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, v = n.memoizedState;
        v !== null && (u = v.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), Rf(n, u);
  }
  var wm;
  wm = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || on.current)
        Sn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Sn = !1, Hi(n, r, u);
        Sn = !!(n.flags & 131072);
      }
    else
      Sn = !1, $t && r.flags & 1048576 && Jd(r, cu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        sr(n, r), n = r.pendingProps;
        var v = wa(r, qe.current);
        de(r, u), v = Tl(null, r, f, n, v, u);
        var g = po();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kt(f) ? (g = !0, Hc(r)) : g = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, lp(r), v.updater = Gc, r.stateNode = v, v._reactInternals = r, Qc(r, f, n, u), r = om(null, r, f, !0, g, u)) : (r.tag = 0, $t && g && Pc(r), Tn(null, r, v, u), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (sr(n, r), n = r.pendingProps, v = f._init, f = v(f._payload), r.type = f, v = r.tag = _0(f), n = ia(f, n), v) {
            case 0:
              r = gu(null, r, f, n, u);
              break e;
            case 1:
              r = vp(null, r, f, n, u);
              break e;
            case 11:
              r = Rl(null, r, f, n, u);
              break e;
            case 14:
              r = mf(null, r, f, ia(f.type, n), u);
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
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), gu(n, r, f, v, u);
      case 1:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), vp(n, r, f, v, u);
      case 3:
        e: {
          if (um(r), n === null)
            throw Error(c(387));
          f = r.pendingProps, g = r.memoizedState, v = g.element, Cn(n, r), xl(r, f, null, u);
          var _ = r.memoizedState;
          if (f = _.element, g.isDehydrated)
            if (g = { element: f, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
              v = yu(Error(c(423)), r), r = yf(n, r, f, u, v);
              break e;
            } else if (f !== v) {
              v = yu(Error(c(424)), r), r = yf(n, r, f, u, v);
              break e;
            } else
              for (Fr = qa(r.stateNode.containerInfo.firstChild), aa = r, $t = !0, Ca = null, u = rm(r, null, f, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (en(), f === v) {
              r = Wn(n, r, u);
              break e;
            }
            Tn(n, r, f, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ye(r), n === null && Ic(r), f = r.type, v = r.pendingProps, g = n !== null ? n.memoizedProps : null, _ = v.children, Es(f, v) ? _ = null : g !== null && Es(f, g) && (r.flags |= 32), nt(n, r), Tn(n, r, _, u), r.child;
      case 6:
        return n === null && Ic(r), null;
      case 13:
        return yp(n, r, u);
      case 4:
        return sp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = du(r, null, f, u) : Tn(n, r, f, u), r.child;
      case 11:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), Rl(n, r, f, v, u);
      case 7:
        return Tn(n, r, r.pendingProps, u), r.child;
      case 8:
        return Tn(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return Tn(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (f = r.type._context, v = r.pendingProps, g = r.memoizedProps, _ = v.value, bt(ci, f._currentValue), f._currentValue = _, g !== null)
            if (Sa(g.value, _)) {
              if (g.children === v.children && !on.current) {
                r = Wn(n, r, u);
                break e;
              }
            } else
              for (g = r.child, g !== null && (g.return = r); g !== null; ) {
                var D = g.dependencies;
                if (D !== null) {
                  _ = g.child;
                  for (var N = D.firstContext; N !== null; ) {
                    if (N.context === f) {
                      if (g.tag === 1) {
                        N = ji(-1, u & -u), N.tag = 2;
                        var B = g.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var ne = B.pending;
                          ne === null ? N.next = N : (N.next = ne.next, ne.next = N), B.pending = N;
                        }
                      }
                      g.lanes |= u, N = g.alternate, N !== null && (N.lanes |= u), jn(
                        g.return,
                        u,
                        r
                      ), D.lanes |= u;
                      break;
                    }
                    N = N.next;
                  }
                } else if (g.tag === 10)
                  _ = g.type === r.type ? null : g.child;
                else if (g.tag === 18) {
                  if (_ = g.return, _ === null)
                    throw Error(c(341));
                  _.lanes |= u, D = _.alternate, D !== null && (D.lanes |= u), jn(_, u, r), _ = g.sibling;
                } else
                  _ = g.child;
                if (_ !== null)
                  _.return = g;
                else
                  for (_ = g; _ !== null; ) {
                    if (_ === r) {
                      _ = null;
                      break;
                    }
                    if (g = _.sibling, g !== null) {
                      g.return = _.return, _ = g;
                      break;
                    }
                    _ = _.return;
                  }
                g = _;
              }
          Tn(n, r, v.children, u), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, f = r.pendingProps.children, de(r, u), v = pn(v), f = f(v), r.flags |= 1, Tn(n, r, f, u), r.child;
      case 14:
        return f = r.type, v = ia(f, r.pendingProps), v = ia(f.type, v), mf(n, r, f, v, u);
      case 15:
        return Yr(n, r, r.type, r.pendingProps, u);
      case 17:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), sr(n, r), r.tag = 1, Kt(f) ? (n = !0, Hc(r)) : n = !1, de(r, u), Jv(r, f, v), Qc(r, f, v, u), om(null, r, f, !0, n, u);
      case 19:
        return Ep(n, r, u);
      case 22:
        return yo(n, r, u);
    }
    throw Error(c(156, r.tag));
  };
  function Np(n, r) {
    return Zt(n, r);
  }
  function w0(n, r, u, f) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ma(n, r, u, f) {
    return new w0(n, r, u, f);
  }
  function Lp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function _0(n) {
    if (typeof n == "function")
      return Lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Mt)
        return 11;
      if (n === Qt)
        return 14;
    }
    return 2;
  }
  function Ol(n, r) {
    var u = n.alternate;
    return u === null ? (u = Ma(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Df(n, r, u, f, v, g) {
    var _ = 2;
    if (f = n, typeof n == "function")
      Lp(n) && (_ = 1);
    else if (typeof n == "string")
      _ = 5;
    else
      e:
        switch (n) {
          case ee:
            return bo(u.children, v, g, r);
          case Me:
            _ = 8, v |= 8;
            break;
          case He:
            return n = Ma(12, u, r, v | 2), n.elementType = He, n.lanes = g, n;
          case Be:
            return n = Ma(13, u, r, v), n.elementType = Be, n.lanes = g, n;
          case Ke:
            return n = Ma(19, u, r, v), n.elementType = Ke, n.lanes = g, n;
          case fn:
            return Is(u, v, g, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Qe:
                  _ = 10;
                  break e;
                case it:
                  _ = 9;
                  break e;
                case Mt:
                  _ = 11;
                  break e;
                case Qt:
                  _ = 14;
                  break e;
                case gt:
                  _ = 16, f = null;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return r = Ma(_, u, r, v), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function bo(n, r, u, f) {
    return n = Ma(7, n, f, r), n.lanes = u, n;
  }
  function Is(n, r, u, f) {
    return n = Ma(22, n, f, r), n.elementType = fn, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Vs(n, r, u) {
    return n = Ma(6, n, null, r), n.lanes = u, n;
  }
  function Ro(n, r, u) {
    return r = Ma(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function x0(n, r, u, f, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _d(0), this.expirationTimes = _d(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _d(0), this.identifierPrefix = f, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function kf(n, r, u, f, v, g, _, D, N) {
    return n = new x0(n, r, u, D, N), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Ma(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lp(g), n;
  }
  function _m(n, r, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: u };
  }
  function Up(n) {
    if (!n)
      return si;
    n = n._reactInternals;
    e: {
      if (rt(n) !== n || n.tag !== 1)
        throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Kt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Kt(u))
        return xs(n, u, r);
    }
    return r;
  }
  function xm(n, r, u, f, v, g, _, D, N) {
    return n = kf(u, f, !0, n, v, g, _, D, N), n.context = Up(null), u = n.current, f = dr(), v = En(u), g = ji(f, v), g.callback = r ?? null, _l(u, g, v), n.current.lanes = v, Kl(n, v, f), hr(n, f), n;
  }
  function $s(n, r, u, f) {
    var v = r.current, g = dr(), _ = En(v);
    return u = Up(u), r.context === null ? r.context = u : r.pendingContext = u, r = ji(g, _), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = _l(v, r, _), n !== null && (pr(n, v, _, g), Wc(n, v, _)), _;
  }
  function Mf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Cm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function Ap(n, r) {
    Cm(n, r), (n = n.alternate) && Cm(n, r);
  }
  function Tm() {
    return null;
  }
  var zp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Of(n) {
    this._internalRoot = n;
  }
  Vi.prototype.render = Of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(c(409));
    $s(n, r, null, null);
  }, Vi.prototype.unmount = Of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ml(function() {
        $s(null, n, null, null);
      }), r[Ui] = null;
    }
  };
  function Vi(n) {
    this._internalRoot = n;
  }
  Vi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = sv();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Lt.length && r !== 0 && r < Lt[u].priority; u++)
        ;
      Lt.splice(u, 0, n), u === 0 && cv(n);
    }
  };
  function jp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Nf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function bm() {
  }
  function C0(n, r, u, f, v) {
    if (v) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var B = Mf(_);
          g.call(B);
        };
      }
      var _ = xm(r, f, n, 0, null, !1, !1, "", bm);
      return n._reactRootContainer = _, n[Ui] = _.current, uu(n.nodeType === 8 ? n.parentNode : n), Ml(), _;
    }
    for (; v = n.lastChild; )
      n.removeChild(v);
    if (typeof f == "function") {
      var D = f;
      f = function() {
        var B = Mf(N);
        D.call(B);
      };
    }
    var N = kf(n, 0, !1, null, null, !1, !1, "", bm);
    return n._reactRootContainer = N, n[Ui] = N.current, uu(n.nodeType === 8 ? n.parentNode : n), Ml(function() {
      $s(r, N, u, f);
    }), N;
  }
  function Lf(n, r, u, f, v) {
    var g = u._reactRootContainer;
    if (g) {
      var _ = g;
      if (typeof v == "function") {
        var D = v;
        v = function() {
          var N = Mf(_);
          D.call(N);
        };
      }
      $s(r, _, n, v);
    } else
      _ = C0(u, r, n, v, f);
    return Mf(_);
  }
  uv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = Zl(r.pendingLanes);
          u !== 0 && (ns(r, u | 1), hr(r, Et()), !(ct & 6) && (bu = Et() + 500, Ar()));
        }
        break;
      case 13:
        Ml(function() {
          var f = zi(n, 1);
          if (f !== null) {
            var v = dr();
            pr(f, n, 1, v);
          }
        }), Ap(n, 1);
    }
  }, wc = function(n) {
    if (n.tag === 13) {
      var r = zi(n, 134217728);
      if (r !== null) {
        var u = dr();
        pr(r, n, 134217728, u);
      }
      Ap(n, 134217728);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = En(n), u = zi(n, r);
      if (u !== null) {
        var f = dr();
        pr(u, n, r, f);
      }
      Ap(n, r);
    }
  }, sv = function() {
    return Nt;
  }, Cd = function(n, r) {
    var u = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = u;
    }
  }, Jr = function(n, r, u) {
    switch (r) {
      case "input":
        if (lr(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var f = u[r];
            if (f !== n && f.form === n.form) {
              var v = je(f);
              if (!v)
                throw Error(c(90));
              ha(f), lr(f, v);
            }
          }
        }
        break;
      case "textarea":
        li(n, u);
        break;
      case "select":
        r = u.value, r != null && ii(n, !!u.multiple, r, !1);
    }
  }, es = ku, mc = Ml;
  var T0 = { usingClientEntryPoint: !1, Events: [_s, su, je, Gl, qo, ku] }, Ou = { findFiberByHostInstance: Ea, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, b0 = { bundleType: Ou.bundleType, version: Ou.version, rendererPackageName: Ou.rendererPackageName, rendererConfig: Ou.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ou.findFiberByHostInstance || Tm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uf.isDisabled && Uf.supportsFiber)
      try {
        ts = Uf.inject(b0), $a = Uf;
      } catch {
      }
  }
  return za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T0, za.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!jp(r))
      throw Error(c(200));
    return _m(n, r, null, u);
  }, za.createRoot = function(n, r) {
    if (!jp(n))
      throw Error(c(299));
    var u = !1, f = "", v = zp;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = kf(n, 1, !1, null, null, u, !1, f, v), n[Ui] = r.current, uu(n.nodeType === 8 ? n.parentNode : n), new Of(r);
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
    return Ml(n);
  }, za.hydrate = function(n, r, u) {
    if (!Nf(r))
      throw Error(c(200));
    return Lf(null, n, r, !0, u);
  }, za.hydrateRoot = function(n, r, u) {
    if (!jp(n))
      throw Error(c(405));
    var f = u != null && u.hydratedSources || null, v = !1, g = "", _ = zp;
    if (u != null && (u.unstable_strictMode === !0 && (v = !0), u.identifierPrefix !== void 0 && (g = u.identifierPrefix), u.onRecoverableError !== void 0 && (_ = u.onRecoverableError)), r = xm(r, null, n, 1, u ?? null, v, !1, g, _), n[Ui] = r.current, uu(n), f)
      for (n = 0; n < f.length; n++)
        u = f[n], v = u._getVersion, v = v(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, v] : r.mutableSourceEagerHydrationData.push(
          u,
          v
        );
    return new Vi(r);
  }, za.render = function(n, r, u) {
    if (!Nf(r))
      throw Error(c(200));
    return Lf(null, n, r, !1, u);
  }, za.unmountComponentAtNode = function(n) {
    if (!Nf(n))
      throw Error(c(40));
    return n._reactRootContainer ? (Ml(function() {
      Lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ui] = null;
      });
    }), !0) : !1;
  }, za.unstable_batchedUpdates = ku, za.unstable_renderSubtreeIntoContainer = function(n, r, u, f) {
    if (!Nf(u))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Lf(n, r, u, !1, f);
  }, za.version = "18.2.0-next-9e3b772b8-20220608", za;
}
var ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IT;
function Xj() {
  return IT || (IT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = kr, o = gR(), c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = !1;
    function h(e) {
      d = e;
    }
    function S(e) {
      if (!d) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        C("warn", e, a);
      }
    }
    function m(e) {
      if (!d) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        C("error", e, a);
      }
    }
    function C(e, t, a) {
      {
        var l = c.ReactDebugCurrentFrame, s = l.getStackAddendum();
        s !== "" && (t += "%s", a = a.concat([s]));
        var p = a.map(function(y) {
          return String(y);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var T = 0, R = 1, k = 2, O = 3, j = 4, G = 5, z = 6, J = 7, he = 8, ge = 9, K = 10, re = 11, se = 12, ce = 13, W = 14, ee = 15, Me = 16, He = 17, Qe = 18, it = 19, Mt = 21, Be = 22, Ke = 23, Qt = 24, gt = 25, fn = !0, fe = !1, Ue = !1, _e = !1, St = !1, Ct = !0, In = !1, vr = !1, ri = !0, _n = !0, pa = !0, rr = /* @__PURE__ */ new Set(), Mr = {}, ai = {};
    function Or(e, t) {
      ha(e, t), ha(e + "Capture", t);
    }
    function ha(e, t) {
      Mr[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Mr[e] = t;
      {
        var a = e.toLowerCase();
        ai[a] = e, e === "onDoubleClick" && (ai.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        rr.add(t[l]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Object.prototype.hasOwnProperty;
    function Vn(e) {
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
    function va(e, t) {
      if (ir(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), lr(e);
    }
    function Ha(e) {
      if (ir(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), lr(e);
    }
    function bi(e, t) {
      if (ir(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), lr(e);
    }
    function ii(e, t) {
      if (ir(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), lr(e);
    }
    function Pa(e) {
      if (ir(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), lr(e);
    }
    function Zr(e) {
      if (ir(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), lr(e);
    }
    var li = 0, Kr = 1, Ya = 2, mn = 3, Xr = 4, il = 5, Ia = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ze = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + ve + "][" + ze + "]*$"), Ot = {}, Jt = {};
    function Nn(e) {
      return ar.call(Jt, e) ? !0 : ar.call(Ot, e) ? !1 : lt.test(e) ? (Jt[e] = !0, !0) : (Ot[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === li : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Nr(e, t, a, l) {
      if (a !== null && a.type === li)
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
    function Pt(e, t, a, l) {
      if (t === null || typeof t > "u" || Nr(e, t, a, l))
        return !0;
      if (l)
        return !1;
      if (a !== null)
        switch (a.type) {
          case mn:
            return !t;
          case Xr:
            return t === !1;
          case il:
            return isNaN(t);
          case Ia:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Jr(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function zt(e, t, a, l, s, p, y) {
      this.acceptsBooleans = t === Ya || t === mn || t === Xr, this.attributeName = l, this.attributeNamespace = s, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
    }
    var Yt = {}, Qo = [
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
      Yt[e] = new zt(
        e,
        li,
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
      Yt[t] = new zt(
        t,
        Kr,
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
      Yt[e] = new zt(
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
      Yt[e] = new zt(
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
      Yt[e] = new zt(
        e,
        mn,
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
      Yt[e] = new zt(
        e,
        mn,
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
      Yt[e] = new zt(
        e,
        Xr,
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
      Yt[e] = new zt(
        e,
        Ia,
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
      Yt[e] = new zt(
        e,
        il,
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
    var Gl = /[\-\:]([a-z])/g, qo = function(e) {
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
      var t = e.replace(Gl, qo);
      Yt[t] = new zt(
        t,
        Kr,
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
      var t = e.replace(Gl, qo);
      Yt[t] = new zt(
        t,
        Kr,
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
      var t = e.replace(Gl, qo);
      Yt[t] = new zt(
        t,
        Kr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new zt(
        e,
        Kr,
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
    Yt[es] = new zt(
      "xlinkHref",
      Kr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new zt(
        e,
        Kr,
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
    var mc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ql = !1;
    function Zo(e) {
      !Ql && mc.test(e) && (Ql = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ql(e, t, a, l) {
      if (l.mustUseProperty) {
        var s = l.propertyName;
        return e[s];
      } else {
        va(a, t), l.sanitizeURL && Zo("" + a);
        var p = l.attributeName, y = null;
        if (l.type === Xr) {
          if (e.hasAttribute(p)) {
            var E = e.getAttribute(p);
            return E === "" ? !0 : Pt(t, a, l, !1) ? E : E === "" + a ? a : E;
          }
        } else if (e.hasAttribute(p)) {
          if (Pt(t, a, l, !1))
            return e.getAttribute(p);
          if (l.type === mn)
            return a;
          y = e.getAttribute(p);
        }
        return Pt(t, a, l, !1) ? y === null ? a : y : y === "" + a ? a : y;
      }
    }
    function Ko(e, t, a, l) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var s = e.getAttribute(t);
        return va(a, t), s === "" + a ? a : s;
      }
    }
    function oi(e, t, a, l) {
      var s = Jr(t);
      if (!dn(t, s, l)) {
        if (Pt(t, a, s, l) && (a = null), l || s === null) {
          if (Nn(t)) {
            var p = t;
            a === null ? e.removeAttribute(p) : (va(a, t), e.setAttribute(p, "" + a));
          }
          return;
        }
        var y = s.mustUseProperty;
        if (y) {
          var E = s.propertyName;
          if (a === null) {
            var w = s.type;
            e[E] = w === mn ? !1 : "";
          } else
            e[E] = a;
          return;
        }
        var x = s.attributeName, b = s.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var A = s.type, L;
          A === mn || A === Xr && a === !0 ? L = "" : (va(a, x), L = "" + a, s.sanitizeURL && Zo(L.toString())), b ? e.setAttributeNS(b, x, L) : e.setAttribute(x, L);
        }
      }
    }
    var ll = Symbol.for("react.element"), ea = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), ol = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), me = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), rt = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), qt = Symbol.for("react.debug_trace_mode"), Zt = Symbol.for("react.offscreen"), mr = Symbol.for("react.legacy_hidden"), ul = Symbol.for("react.cache"), yc = Symbol.for("react.tracing_marker"), Et = Symbol.iterator, Yg = "@@iterator";
    function Ri(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Et && e[Et] || e[Yg];
      return typeof t == "function" ? t : null;
    }
    var st = Object.assign, sl = 0, av, Sd, ts, $a, iv, ma, lv;
    function ov() {
    }
    ov.__reactDisabledLog = !0;
    function Ig() {
      {
        if (sl === 0) {
          av = console.log, Sd = console.info, ts = console.warn, $a = console.error, iv = console.group, ma = console.groupCollapsed, lv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ov,
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
        sl++;
      }
    }
    function gc() {
      {
        if (sl--, sl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, e, {
              value: av
            }),
            info: st({}, e, {
              value: Sd
            }),
            warn: st({}, e, {
              value: ts
            }),
            error: st({}, e, {
              value: $a
            }),
            group: st({}, e, {
              value: iv
            }),
            groupCollapsed: st({}, e, {
              value: ma
            }),
            groupEnd: st({}, e, {
              value: lv
            })
          });
        }
        sl < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xo = c.ReactCurrentDispatcher, Zl;
    function Ba(e, t, a) {
      {
        if (Zl === void 0)
          try {
            throw Error();
          } catch (s) {
            var l = s.stack.trim().match(/\n( *(at )?)/);
            Zl = l && l[1] || "";
          }
        return `
` + Zl + e;
      }
    }
    var Ed = !1, Sc;
    {
      var wd = typeof WeakMap == "function" ? WeakMap : Map;
      Sc = new wd();
    }
    function Ec(e, t) {
      if (!e || Ed)
        return "";
      {
        var a = Sc.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      Ed = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = Xo.current, Xo.current = null, Ig();
      try {
        if (t) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch ($) {
              l = $;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch ($) {
              l = $;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            l = $;
          }
          e();
        }
      } catch ($) {
        if ($ && l && typeof $.stack == "string") {
          for (var E = $.stack.split(`
`), w = l.stack.split(`
`), x = E.length - 1, b = w.length - 1; x >= 1 && b >= 0 && E[x] !== w[b]; )
            b--;
          for (; x >= 1 && b >= 0; x--, b--)
            if (E[x] !== w[b]) {
              if (x !== 1 || b !== 1)
                do
                  if (x--, b--, b < 0 || E[x] !== w[b]) {
                    var A = `
` + E[x].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && Sc.set(e, A), A;
                  }
                while (x >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Ed = !1, Xo.current = p, gc(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", V = L ? Ba(L) : "";
      return typeof e == "function" && Sc.set(e, V), V;
    }
    function _d(e, t, a) {
      return Ec(e, !0);
    }
    function Kl(e, t, a) {
      return Ec(e, !1);
    }
    function Vg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ns(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ec(e, Vg(e));
      if (typeof e == "string")
        return Ba(e);
      switch (e) {
        case rt:
          return Ba("Suspense");
        case mt:
          return Ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Pe:
            return Kl(e.render);
          case at:
            return ns(e.type, t, a);
          case Ve: {
            var l = e, s = l._payload, p = l._init;
            try {
              return ns(p(s), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Nt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case G:
          return Ba(e.type);
        case Me:
          return Ba("Lazy");
        case ce:
          return Ba("Suspense");
        case it:
          return Ba("SuspenseList");
        case T:
        case k:
        case ee:
          return Kl(e.type);
        case re:
          return Kl(e.type.render);
        case R:
          return _d(e.type);
        default:
          return "";
      }
    }
    function xd(e) {
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
    function uv(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var s = t.displayName || t.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function wc(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Va:
          return "Fragment";
        case ea:
          return "Portal";
        case M:
          return "Profiler";
        case ol:
          return "StrictMode";
        case rt:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            var t = e;
            return wc(t) + ".Consumer";
          case ae:
            var a = e;
            return wc(a._context) + ".Provider";
          case Pe:
            return uv(e, e.render, "ForwardRef");
          case at:
            var l = e.displayName || null;
            return l !== null ? l : jt(e.type) || "Memo";
          case Ve: {
            var s = e, p = s._payload, y = s._init;
            try {
              return jt(y(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function sv(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function Cd(e) {
      return e.displayName || "Context";
    }
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Qt:
          return "Cache";
        case ge:
          var l = a;
          return Cd(l) + ".Consumer";
        case K:
          var s = a;
          return Cd(s._context) + ".Provider";
        case Qe:
          return "DehydratedFragment";
        case re:
          return sv(a, a.render, "ForwardRef");
        case J:
          return "Fragment";
        case G:
          return a;
        case j:
          return "Portal";
        case O:
          return "Root";
        case z:
          return "Text";
        case Me:
          return jt(a);
        case he:
          return a === ol ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case se:
          return "Profiler";
        case Mt:
          return "Scope";
        case ce:
          return "Suspense";
        case it:
          return "SuspenseList";
        case gt:
          return "TracingMarker";
        case R:
        case T:
        case He:
        case k:
        case W:
        case ee:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var rs = c.ReactDebugCurrentFrame, yn = null, ya = !1;
    function ga() {
      {
        if (yn === null)
          return null;
        var e = yn._debugOwner;
        if (e !== null && typeof e < "u")
          return et(e);
      }
      return null;
    }
    function as() {
      return yn === null ? "" : xd(yn);
    }
    function xn() {
      rs.getCurrentStack = null, yn = null, ya = !1;
    }
    function Lt(e) {
      rs.getCurrentStack = e === null ? null : as, yn = e, ya = !1;
    }
    function $g() {
      return yn;
    }
    function Wa(e) {
      ya = e;
    }
    function or(e) {
      return "" + e;
    }
    function cl(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Zr(e), e;
        default:
          return "";
      }
    }
    var cv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Jo(e, t) {
      cv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Td(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fv(e) {
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
      Zr(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var s = a.get, p = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(E) {
            Zr(E), l = "" + E, p.call(this, E);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var y = {
          getValue: function() {
            return l;
          },
          setValue: function(E) {
            Zr(E), l = "" + E;
          },
          stopTracking: function() {
            is(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Xl(e) {
      fv(e) || (e._valueTracker = eu(e));
    }
    function dv(e) {
      if (!e)
        return !1;
      var t = fv(e);
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
    var xc = !1, os = !1, Cc = !1, bd = !1;
    function Di(e) {
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
      Jo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !os && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), os = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xc && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), xc = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: cl(t.value != null ? t.value : l),
        controlled: Di(t)
      };
    }
    function Rd(e, t) {
      var a = e, l = t.checked;
      l != null && oi(a, "checked", l, !1);
    }
    function tu(e, t) {
      var a = e;
      {
        var l = Di(t);
        !a._wrapperState.controlled && l && !bd && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bd = !0), a._wrapperState.controlled && !l && !Cc && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cc = !0);
      }
      Rd(e, t);
      var s = cl(t.value), p = t.type;
      if (s != null)
        p === "number" ? (s === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != s) && (a.value = or(s)) : a.value !== or(s) && (a.value = or(s));
      else if (p === "submit" || p === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? fl(a, t.type, s) : t.hasOwnProperty("defaultValue") && fl(a, t.type, cl(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function cs(e, t, a) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, p = s === "submit" || s === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var y = or(l._wrapperState.initialValue);
        a || y !== l.value && (l.value = y), l.defaultValue = y;
      }
      var E = l.name;
      E !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, E !== "" && (l.name = E);
    }
    function pv(e, t) {
      var a = e;
      tu(a, t), ta(a, t);
    }
    function ta(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        va(a, "name");
        for (var s = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), p = 0; p < s.length; p++) {
          var y = s[p];
          if (!(y === e || y.form !== e.form)) {
            var E = Vm(y);
            if (!E)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dv(y), tu(y, E);
          }
        }
      }
    }
    function fl(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _c(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var Tc = !1, nu = !1, hv = !1;
    function bc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || nu || (nu = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (hv || (hv = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Tc && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Tc = !0);
    }
    function Dd(e, t) {
      t.value != null && e.setAttribute("value", or(cl(t.value)));
    }
    var fs = Array.isArray;
    function Un(e) {
      return fs(e);
    }
    var Rc;
    Rc = !1;
    function vv() {
      var e = ga();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var mv = ["value", "defaultValue"];
    function Bg(e) {
      {
        Jo("select", e);
        for (var t = 0; t < mv.length; t++) {
          var a = mv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, vv()) : !e.multiple && l && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, vv());
          }
        }
      }
    }
    function dl(e, t, a, l) {
      var s = e.options;
      if (t) {
        for (var p = a, y = {}, E = 0; E < p.length; E++)
          y["$" + p[E]] = !0;
        for (var w = 0; w < s.length; w++) {
          var x = y.hasOwnProperty("$" + s[w].value);
          s[w].selected !== x && (s[w].selected = x), x && l && (s[w].defaultSelected = !0);
        }
      } else {
        for (var b = or(cl(a)), A = null, L = 0; L < s.length; L++) {
          if (s[L].value === b) {
            s[L].selected = !0, l && (s[L].defaultSelected = !0);
            return;
          }
          A === null && !s[L].disabled && (A = s[L]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function kd(e, t) {
      return st({}, t, {
        value: void 0
      });
    }
    function yv(e, t) {
      var a = e;
      Bg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Rc && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Rc = !0);
    }
    function Wg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? dl(a, !!t.multiple, l, !1) : t.defaultValue != null && dl(a, !!t.multiple, t.defaultValue, !0);
    }
    function Gg(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? dl(a, !!t.multiple, s, !1) : l !== !!t.multiple && (t.defaultValue != null ? dl(a, !!t.multiple, t.defaultValue, !0) : dl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Qg(e, t) {
      var a = e, l = t.value;
      l != null && dl(a, !!t.multiple, l, !1);
    }
    var Md = !1;
    function Od(e, t) {
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
    function gv(e, t) {
      var a = e;
      Jo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Md && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component"), Md = !0);
      var l = t.value;
      if (l == null) {
        var s = t.children, p = t.defaultValue;
        if (s != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (p != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Un(s)) {
              if (s.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            p = s;
          }
        }
        p == null && (p = ""), l = p;
      }
      a._wrapperState = {
        initialValue: cl(l)
      };
    }
    function Sv(e, t) {
      var a = e, l = cl(t.value), s = cl(t.defaultValue);
      if (l != null) {
        var p = or(l);
        p !== a.value && (a.value = p), t.defaultValue == null && a.defaultValue !== p && (a.defaultValue = p);
      }
      s != null && (a.defaultValue = or(s));
    }
    function Ev(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Nd(e, t) {
      Sv(e, t);
    }
    var ki = "http://www.w3.org/1999/xhtml", qg = "http://www.w3.org/1998/Math/MathML", Ld = "http://www.w3.org/2000/svg";
    function Dc(e) {
      switch (e) {
        case "svg":
          return Ld;
        case "math":
          return qg;
        default:
          return ki;
      }
    }
    function Ud(e, t) {
      return e == null || e === ki ? Dc(t) : e === Ld && t === "foreignObject" ? ki : e;
    }
    var Zg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, s);
        });
      } : e;
    }, kc, wv = Zg(function(e, t) {
      if (e.namespaceURI === Ld && !("innerHTML" in e)) {
        kc = kc || document.createElement("div"), kc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = kc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Lr = 1, Mi = 3, gn = 8, Ga = 9, Jl = 11, Mc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Mi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, _v = {
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
    function xv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Cv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ru).forEach(function(e) {
      Cv.forEach(function(t) {
        ru[xv(t, e)] = ru[e];
      });
    });
    function Oc(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(ru.hasOwnProperty(e) && ru[e]) ? t + "px" : (ii(t, e), ("" + t).trim());
    }
    var au = /([A-Z])/g, Kg = /^ms-/;
    function Xg(e) {
      return e.replace(au, "-$1").toLowerCase().replace(Kg, "-ms-");
    }
    var Tv = function() {
    };
    {
      var bv = /^(?:webkit|moz|o)[A-Z]/, Rv = /^-ms-/, ds = /-(.)/g, iu = /;\s*$/, lu = {}, ou = {}, Dv = !1, Ad = !1, zd = function(e) {
        return e.replace(ds, function(t, a) {
          return a.toUpperCase();
        });
      }, jd = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          zd(e.replace(Rv, "ms-"))
        ));
      }, kv = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Mv = function(e, t) {
        ou.hasOwnProperty(t) && ou[t] || (ou[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(iu, "")));
      }, Ov = function(e, t) {
        Dv || (Dv = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Jg = function(e, t) {
        Ad || (Ad = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Tv = function(e, t) {
        e.indexOf("-") > -1 ? jd(e) : bv.test(e) ? kv(e) : iu.test(t) && Mv(e, t), typeof t == "number" && (isNaN(t) ? Ov(e, t) : isFinite(t) || Jg(e, t));
      };
    }
    var e0 = Tv;
    function t0(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var s = e[l];
            if (s != null) {
              var p = l.indexOf("--") === 0;
              t += a + (p ? l : Xg(l)) + ":", t += Oc(l, s, p), a = ";";
            }
          }
        return t || null;
      }
    }
    function Nv(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var s = l.indexOf("--") === 0;
          s || e0(l, t[l]);
          var p = Oc(l, t[l], s);
          l === "float" && (l = "cssFloat"), s ? a.setProperty(l, p) : a[l] = p;
        }
    }
    function n0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sa(e) {
      var t = {};
      for (var a in e)
        for (var l = _v[a] || [a], s = 0; s < l.length; s++)
          t[l[s]] = a;
      return t;
    }
    function ps(e, t) {
      {
        if (!t)
          return;
        var a = Sa(e), l = Sa(t), s = {};
        for (var p in a) {
          var y = a[p], E = l[p];
          if (E && y !== E) {
            var w = y + "," + E;
            if (s[w])
              continue;
            s[w] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", n0(e[y]) ? "Removing" : "Updating", y, E);
          }
        }
      }
    }
    var Lv = {
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
    }, Uv = st({
      menuitem: !0
    }, Lv), Av = "__html";
    function Nc(e, t) {
      if (t) {
        if (Uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Av in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Oi(e, t) {
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
    var Lc = {
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
    }, zv = {
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
    }, Qa = {}, Fd = new RegExp("^(aria)-[" + ze + "]*$"), hs = new RegExp("^(aria)[A-Z][" + ze + "]*$");
    function Hd(e, t) {
      {
        if (ar.call(Qa, t) && Qa[t])
          return !0;
        if (hs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = zv.hasOwnProperty(a) ? a : null;
          if (l == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Qa[t] = !0, !0;
          if (t !== l)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Qa[t] = !0, !0;
        }
        if (Fd.test(t)) {
          var s = t.toLowerCase(), p = zv.hasOwnProperty(s) ? s : null;
          if (p == null)
            return Qa[t] = !0, !1;
          if (t !== p)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), Qa[t] = !0, !0;
        }
      }
      return !0;
    }
    function jv(e, t) {
      {
        var a = [];
        for (var l in t) {
          var s = Hd(e, l);
          s || a.push(l);
        }
        var p = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function Uc(e, t) {
      Oi(e, t) || jv(e, t);
    }
    var eo = !1;
    function Pd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !eo && (eo = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Yd = function() {
    };
    {
      var An = {}, Id = /^on./, Fv = /^on[^A-Z]/, Hv = new RegExp("^(aria)-[" + ze + "]*$"), Pv = new RegExp("^(aria)[A-Z][" + ze + "]*$");
      Yd = function(e, t, a, l) {
        if (ar.call(An, t) && An[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), An[t] = !0, !0;
        if (l != null) {
          var p = l.registrationNameDependencies, y = l.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var E = y.hasOwnProperty(s) ? y[s] : null;
          if (E != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, E), An[t] = !0, !0;
          if (Id.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), An[t] = !0, !0;
        } else if (Id.test(t))
          return Fv.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), An[t] = !0, !0;
        if (Hv.test(t) || Pv.test(t))
          return !0;
        if (s === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), An[t] = !0, !0;
        if (s === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), An[t] = !0, !0;
        if (s === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), An[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), An[t] = !0, !0;
        var w = Jr(t), x = w !== null && w.type === li;
        if (Lc.hasOwnProperty(s)) {
          var b = Lc[s];
          if (b !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, b), An[t] = !0, !0;
        } else if (!x && t !== s)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), An[t] = !0, !0;
        return typeof a == "boolean" && Nr(t, a, w, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), An[t] = !0, !0) : x ? !0 : Nr(t, a, w, !1) ? (An[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === mn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), An[t] = !0), !0);
      };
    }
    var Yv = function(e, t, a) {
      {
        var l = [];
        for (var s in t) {
          var p = Yd(e, s, t[s], a);
          p || l.push(s);
        }
        var y = l.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        l.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : l.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function Iv(e, t, a) {
      Oi(e, t) || Yv(e, t, a);
    }
    var Ni = 1, vs = 2, to = 4, r0 = Ni | vs | to, ms = null;
    function ys(e) {
      ms !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ms = e;
    }
    function a0() {
      ms === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ms = null;
    }
    function Vv(e) {
      return e === ms;
    }
    function Ac(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Mi ? t.parentNode : t;
    }
    var Ft = null, pl = null, Li = null;
    function uu(e) {
      var t = Uu(e);
      if (t) {
        if (typeof Ft != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = Vm(a);
          Ft(t.stateNode, t.type, l);
        }
      }
    }
    function $v(e) {
      Ft = e;
    }
    function zc(e) {
      pl ? Li ? Li.push(e) : Li = [e] : pl = e;
    }
    function gs() {
      return pl !== null || Li !== null;
    }
    function Ss() {
      if (pl) {
        var e = pl, t = Li;
        if (pl = null, Li = null, uu(e), t)
          for (var a = 0; a < t.length; a++)
            uu(t[a]);
      }
    }
    var no = function(e, t) {
      return e(t);
    }, Vd = function() {
    }, $d = !1;
    function i0() {
      var e = gs();
      e && (Vd(), Ss());
    }
    function Bd(e, t, a) {
      if ($d)
        return e(t, a);
      $d = !0;
      try {
        return no(e, t, a);
      } finally {
        $d = !1, i0();
      }
    }
    function jc(e, t, a) {
      no = e, Vd = a;
    }
    function Fc(e) {
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
          return !!(a.disabled && Fc(t));
        default:
          return !1;
      }
    }
    function ro(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = Vm(a);
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
        var ao = {};
        Object.defineProperty(ao, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", ao, ao), window.removeEventListener("test", ao, ao);
      } catch {
        Es = !1;
      }
    function Bv(e, t, a, l, s, p, y, E, w) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (b) {
        this.onError(b);
      }
    }
    var Gd = Bv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Qd = document.createElement("react");
      Gd = function(t, a, l, s, p, y, E, w, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), A = !1, L = !0, V = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          Qd.removeEventListener(q, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function Fe() {
          A = !0, Q(), a.apply(l, xe), L = !1;
        }
        var Le, vt = !1, ft = !1;
        function H(P) {
          if (Le = P.error, vt = !0, Le === null && P.colno === 0 && P.lineno === 0 && (ft = !0), P.defaultPrevented && Le != null && typeof Le == "object")
            try {
              Le._suppressLogging = !0;
            } catch {
            }
        }
        var q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), Qd.addEventListener(q, Fe, !1), b.initEvent(q, !1, !1), Qd.dispatchEvent(b), $ && Object.defineProperty(window, "event", $), A && L && (vt ? ft && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", H), !A)
          return Q(), Bv.apply(this, arguments);
      };
    }
    var l0 = Gd, hl = !1, qa = null, ws = !1, vl = null, ui = {
      onError: function(e) {
        hl = !0, qa = e;
      }
    };
    function io(e, t, a, l, s, p, y, E, w) {
      hl = !1, qa = null, l0.apply(ui, arguments);
    }
    function Ui(e, t, a, l, s, p, y, E, w) {
      if (io.apply(this, arguments), hl) {
        var x = Zd();
        ws || (ws = !0, vl = x);
      }
    }
    function qd() {
      if (ws) {
        var e = vl;
        throw ws = !1, vl = null, e;
      }
    }
    function o0() {
      return hl;
    }
    function Zd() {
      if (hl) {
        var e = qa;
        return hl = !1, qa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ea(e) {
      return e._reactInternals;
    }
    function _s(e) {
      return e._reactInternals !== void 0;
    }
    function su(e, t) {
      e._reactInternals = t;
    }
    var je = (
      /*                      */
      0
    ), ml = (
      /*                */
      1
    ), Vt = (
      /*                    */
      2
    ), tt = (
      /*                       */
      4
    ), Tt = (
      /*                */
      16
    ), bt = (
      /*                 */
      32
    ), si = (
      /*                     */
      64
    ), qe = (
      /*                   */
      128
    ), on = (
      /*            */
      256
    ), Ur = (
      /*                          */
      512
    ), wa = (
      /*                     */
      1024
    ), Kt = (
      /*                      */
      2048
    ), _a = (
      /*                    */
      4096
    ), yl = (
      /*                   */
      8192
    ), xs = (
      /*             */
      16384
    ), Hc = Kt | tt | si | Ur | wa | xs, Wv = (
      /*               */
      32767
    ), na = (
      /*                   */
      32768
    ), zn = (
      /*                */
      65536
    ), Cs = (
      /* */
      131072
    ), Kd = (
      /*                       */
      1048576
    ), Xd = (
      /*                    */
      2097152
    ), Ar = (
      /*                 */
      4194304
    ), gl = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), lo = (
      /*              */
      33554432
    ), cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      tt | wa | 0
    ), jr = Vt | tt | Tt | bt | Ur | _a | yl, ur = tt | si | Ur | yl, xa = Kt | Tt, $n = Ar | gl | Xd, Ai = c.ReactCurrentOwner;
    function ra(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (Vt | _a)) !== je && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === O ? a : null;
    }
    function Jd(e) {
      if (e.tag === ce) {
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
    function Pc(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function ep(e) {
      return ra(e) === e;
    }
    function aa(e) {
      {
        var t = Ai.current;
        if (t !== null && t.tag === R) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", et(a) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var s = Ea(e);
      return s ? ra(s) === s : !1;
    }
    function Fr(e) {
      if (ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function $t(e) {
      var t = e.alternate;
      if (!t) {
        var a = ra(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var l = e, s = t; ; ) {
        var p = l.return;
        if (p === null)
          break;
        var y = p.alternate;
        if (y === null) {
          var E = p.return;
          if (E !== null) {
            l = s = E;
            continue;
          }
          break;
        }
        if (p.child === y.child) {
          for (var w = p.child; w; ) {
            if (w === l)
              return Fr(p), e;
            if (w === s)
              return Fr(p), t;
            w = w.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== s.return)
          l = p, s = y;
        else {
          for (var x = !1, b = p.child; b; ) {
            if (b === l) {
              x = !0, l = p, s = y;
              break;
            }
            if (b === s) {
              x = !0, s = p, l = y;
              break;
            }
            b = b.sibling;
          }
          if (!x) {
            for (b = y.child; b; ) {
              if (b === l) {
                x = !0, l = y, s = p;
                break;
              }
              if (b === s) {
                x = !0, s = y, l = p;
                break;
              }
              b = b.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== s)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Ca(e) {
      var t = $t(e);
      return t !== null ? tp(t) : null;
    }
    function tp(e) {
      if (e.tag === G || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = tp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gv(e) {
      var t = $t(e);
      return t !== null ? Yc(t) : null;
    }
    function Yc(e) {
      if (e.tag === G || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j) {
          var a = Yc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ic = o.unstable_scheduleCallback, Qv = o.unstable_cancelCallback, Vc = o.unstable_shouldYield, qv = o.unstable_requestPaint, en = o.unstable_now, np = o.unstable_getCurrentPriorityLevel, $c = o.unstable_ImmediatePriority, ia = o.unstable_UserBlockingPriority, ci = o.unstable_NormalPriority, Bc = o.unstable_LowPriority, Sl = o.unstable_IdlePriority, rp = o.unstable_yieldValue, ap = o.unstable_setDisableYieldValue, El = null, jn = null, de = null, pn = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ip(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ri && (e = st({}, e, {
          getLaneLabelMap: _l,
          injectProfilingHooks: ji
        })), El = t.inject(e), jn = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zv(e, t) {
      if (jn && typeof jn.onScheduleFiberRoot == "function")
        try {
          jn.onScheduleFiberRoot(El, e, t);
        } catch (a) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function zi(e, t) {
      if (jn && typeof jn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & qe) === qe;
          if (_n) {
            var l;
            switch (t) {
              case sr:
                l = $c;
                break;
              case Wn:
                l = ia;
                break;
              case Hi:
                l = ci;
                break;
              case Ls:
                l = Sl;
                break;
              default:
                l = ci;
                break;
            }
            jn.onCommitFiberRoot(El, e, l, a);
          }
        } catch (s) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", s));
        }
    }
    function wl(e) {
      if (jn && typeof jn.onPostCommitFiberRoot == "function")
        try {
          jn.onPostCommitFiberRoot(El, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function lp(e) {
      if (jn && typeof jn.onCommitFiberUnmount == "function")
        try {
          jn.onCommitFiberUnmount(El, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Cn(e) {
      if (typeof rp == "function" && (ap(e), h(e)), jn && typeof jn.setStrictMode == "function")
        try {
          jn.setStrictMode(El, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function ji(e) {
      de = e;
    }
    function _l() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Bt; a++) {
          var l = u0(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Wc(e) {
      de !== null && typeof de.markCommitStarted == "function" && de.markCommitStarted(e);
    }
    function op() {
      de !== null && typeof de.markCommitStopped == "function" && de.markCommitStopped();
    }
    function xl(e) {
      de !== null && typeof de.markComponentRenderStarted == "function" && de.markComponentRenderStarted(e);
    }
    function oo() {
      de !== null && typeof de.markComponentRenderStopped == "function" && de.markComponentRenderStopped();
    }
    function Kv(e) {
      de !== null && typeof de.markComponentPassiveEffectMountStarted == "function" && de.markComponentPassiveEffectMountStarted(e);
    }
    function up() {
      de !== null && typeof de.markComponentPassiveEffectMountStopped == "function" && de.markComponentPassiveEffectMountStopped();
    }
    function Gc(e) {
      de !== null && typeof de.markComponentPassiveEffectUnmountStarted == "function" && de.markComponentPassiveEffectUnmountStarted(e);
    }
    function Xv() {
      de !== null && typeof de.markComponentPassiveEffectUnmountStopped == "function" && de.markComponentPassiveEffectUnmountStopped();
    }
    function Jv(e) {
      de !== null && typeof de.markComponentLayoutEffectMountStarted == "function" && de.markComponentLayoutEffectMountStarted(e);
    }
    function em() {
      de !== null && typeof de.markComponentLayoutEffectMountStopped == "function" && de.markComponentLayoutEffectMountStopped();
    }
    function Qc(e) {
      de !== null && typeof de.markComponentLayoutEffectUnmountStarted == "function" && de.markComponentLayoutEffectUnmountStarted(e);
    }
    function fu() {
      de !== null && typeof de.markComponentLayoutEffectUnmountStopped == "function" && de.markComponentLayoutEffectUnmountStopped();
    }
    function qc(e, t, a) {
      de !== null && typeof de.markComponentErrored == "function" && de.markComponentErrored(e, t, a);
    }
    function tm(e, t, a) {
      de !== null && typeof de.markComponentSuspended == "function" && de.markComponentSuspended(e, t, a);
    }
    function nm(e) {
      de !== null && typeof de.markLayoutEffectsStarted == "function" && de.markLayoutEffectsStarted(e);
    }
    function du() {
      de !== null && typeof de.markLayoutEffectsStopped == "function" && de.markLayoutEffectsStopped();
    }
    function rm(e) {
      de !== null && typeof de.markPassiveEffectsStarted == "function" && de.markPassiveEffectsStarted(e);
    }
    function Ts() {
      de !== null && typeof de.markPassiveEffectsStopped == "function" && de.markPassiveEffectsStopped();
    }
    function Za(e) {
      de !== null && typeof de.markRenderStarted == "function" && de.markRenderStarted(e);
    }
    function bs() {
      de !== null && typeof de.markRenderYielded == "function" && de.markRenderYielded();
    }
    function pu() {
      de !== null && typeof de.markRenderStopped == "function" && de.markRenderStopped();
    }
    function uo(e) {
      de !== null && typeof de.markRenderScheduled == "function" && de.markRenderScheduled(e);
    }
    function sp(e, t) {
      de !== null && typeof de.markForceUpdateScheduled == "function" && de.markForceUpdateScheduled(e, t);
    }
    function Cl(e, t) {
      de !== null && typeof de.markStateUpdateScheduled == "function" && de.markStateUpdateScheduled(e, t);
    }
    var Ye = (
      /*                         */
      0
    ), ot = (
      /*                 */
      1
    ), $e = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), Ta = (
      /*              */
      16
    ), Zc = Math.clz32 ? Math.clz32 : so, Kc = Math.log, cp = Math.LN2;
    function so(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Kc(t) / cp | 0) | 0;
    }
    var Bt = 31, Z = (
      /*                        */
      0
    ), pt = (
      /*                          */
      0
    ), We = (
      /*                        */
      1
    ), fi = (
      /*    */
      2
    ), la = (
      /*             */
      4
    ), co = (
      /*            */
      8
    ), Wt = (
      /*                     */
      16
    ), fo = (
      /*                */
      32
    ), Tl = (
      /*                       */
      4194240
    ), po = (
      /*                        */
      64
    ), ba = (
      /*                        */
      128
    ), Hr = (
      /*                        */
      256
    ), ho = (
      /*                        */
      512
    ), Rs = (
      /*                        */
      1024
    ), Ds = (
      /*                        */
      2048
    ), Xc = (
      /*                        */
      4096
    ), Jc = (
      /*                        */
      8192
    ), ef = (
      /*                        */
      16384
    ), tf = (
      /*                       */
      32768
    ), nf = (
      /*                       */
      65536
    ), rf = (
      /*                       */
      131072
    ), af = (
      /*                       */
      262144
    ), lf = (
      /*                       */
      524288
    ), vo = (
      /*                       */
      1048576
    ), of = (
      /*                       */
      2097152
    ), mo = (
      /*                            */
      130023424
    ), Fi = (
      /*                             */
      4194304
    ), uf = (
      /*                             */
      8388608
    ), ks = (
      /*                             */
      16777216
    ), sf = (
      /*                             */
      33554432
    ), cf = (
      /*                             */
      67108864
    ), fp = Fi, hu = (
      /*          */
      134217728
    ), ff = (
      /*                          */
      268435455
    ), vu = (
      /*               */
      268435456
    ), bl = (
      /*                        */
      536870912
    ), Pr = (
      /*                   */
      1073741824
    );
    function u0(e) {
      {
        if (e & We)
          return "Sync";
        if (e & fi)
          return "InputContinuousHydration";
        if (e & la)
          return "InputContinuous";
        if (e & co)
          return "DefaultHydration";
        if (e & Wt)
          return "Default";
        if (e & fo)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & mo)
          return "Retry";
        if (e & hu)
          return "SelectiveHydration";
        if (e & vu)
          return "IdleHydration";
        if (e & bl)
          return "Idle";
        if (e & Pr)
          return "Offscreen";
      }
    }
    var Ht = -1, df = po, pf = Fi;
    function mu(e) {
      switch (Sn(e)) {
        case We:
          return We;
        case fi:
          return fi;
        case la:
          return la;
        case co:
          return co;
        case Wt:
          return Wt;
        case fo:
          return fo;
        case po:
        case ba:
        case Hr:
        case ho:
        case Rs:
        case Ds:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case lf:
        case vo:
        case of:
          return e & Tl;
        case Fi:
        case uf:
        case ks:
        case sf:
        case cf:
          return e & mo;
        case hu:
          return hu;
        case vu:
          return vu;
        case bl:
          return bl;
        case Pr:
          return Pr;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ms(e, t) {
      var a = e.pendingLanes;
      if (a === Z)
        return Z;
      var l = Z, s = e.suspendedLanes, p = e.pingedLanes, y = a & ff;
      if (y !== Z) {
        var E = y & ~s;
        if (E !== Z)
          l = mu(E);
        else {
          var w = y & p;
          w !== Z && (l = mu(w));
        }
      } else {
        var x = a & ~s;
        x !== Z ? l = mu(x) : p !== Z && (l = mu(p));
      }
      if (l === Z)
        return Z;
      if (t !== Z && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === Z) {
        var b = Sn(l), A = Sn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= A || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === Wt && (A & Tl) !== Z
        )
          return t;
      }
      (l & la) !== Z && (l |= a & Wt);
      var L = e.entangledLanes;
      if (L !== Z)
        for (var V = e.entanglements, $ = l & L; $ > 0; ) {
          var Q = Rl($), xe = 1 << Q;
          l |= V[Q], $ &= ~xe;
        }
      return l;
    }
    function am(e, t) {
      for (var a = e.eventTimes, l = Ht; t > 0; ) {
        var s = Rl(t), p = 1 << s, y = a[s];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function hf(e, t) {
      switch (e) {
        case We:
        case fi:
        case la:
          return t + 250;
        case co:
        case Wt:
        case fo:
        case po:
        case ba:
        case Hr:
        case ho:
        case Rs:
        case Ds:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case lf:
        case vo:
        case of:
          return t + 5e3;
        case Fi:
        case uf:
        case ks:
        case sf:
        case cf:
          return Ht;
        case hu:
        case vu:
        case bl:
        case Pr:
          return Ht;
        default:
          return m("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function s0(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, s = e.pingedLanes, p = e.expirationTimes, y = a; y > 0; ) {
        var E = Rl(y), w = 1 << E, x = p[E];
        x === Ht ? ((w & l) === Z || (w & s) !== Z) && (p[E] = hf(w, t)) : x <= t && (e.expiredLanes |= w), y &= ~w;
      }
    }
    function c0(e) {
      return mu(e.pendingLanes);
    }
    function dp(e) {
      var t = e.pendingLanes & ~Pr;
      return t !== Z ? t : t & Pr ? Pr : Z;
    }
    function yu(e) {
      return (e & We) !== Z;
    }
    function Os(e) {
      return (e & ff) !== Z;
    }
    function vf(e) {
      return (e & mo) === e;
    }
    function f0(e) {
      var t = We | la | Wt;
      return (e & t) === Z;
    }
    function im(e) {
      return (e & Tl) === e;
    }
    function Ns(e, t) {
      var a = fi | la | co | Wt;
      return (t & a) !== Z;
    }
    function lm(e, t) {
      return (t & e.expiredLanes) !== Z;
    }
    function pp(e) {
      return (e & Tl) !== Z;
    }
    function hp() {
      var e = df;
      return df <<= 1, (df & Tl) === Z && (df = po), e;
    }
    function d0() {
      var e = pf;
      return pf <<= 1, (pf & mo) === Z && (pf = Fi), e;
    }
    function Sn(e) {
      return e & -e;
    }
    function Tn(e) {
      return Sn(e);
    }
    function Rl(e) {
      return 31 - Zc(e);
    }
    function mf(e) {
      return Rl(e);
    }
    function Yr(e, t) {
      return (e & t) !== Z;
    }
    function yo(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function gu(e, t) {
      return e & ~t;
    }
    function vp(e, t) {
      return e & t;
    }
    function om(e) {
      return e;
    }
    function um(e, t) {
      return e !== pt && e < t ? e : t;
    }
    function yf(e) {
      for (var t = [], a = 0; a < Bt; a++)
        t.push(e);
      return t;
    }
    function go(e, t, a) {
      e.pendingLanes |= t, t !== bl && (e.suspendedLanes = Z, e.pingedLanes = Z);
      var l = e.eventTimes, s = mf(t);
      l[s] = a;
    }
    function mp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var s = Rl(l), p = 1 << s;
        a[s] = Ht, l &= ~p;
      }
    }
    function yp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function gp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Z, e.pingedLanes = Z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, s = e.eventTimes, p = e.expirationTimes, y = a; y > 0; ) {
        var E = Rl(y), w = 1 << E;
        l[E] = Z, s[E] = Ht, p[E] = Ht, y &= ~w;
      }
    }
    function Su(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, s = a; s; ) {
        var p = Rl(s), y = 1 << p;
        // Is this one of the newly entangled lanes?
        y & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[p] & t && (l[p] |= t), s &= ~y;
      }
    }
    function p0(e, t) {
      var a = Sn(t), l;
      switch (a) {
        case la:
          l = fi;
          break;
        case Wt:
          l = co;
          break;
        case po:
        case ba:
        case Hr:
        case ho:
        case Rs:
        case Ds:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case lf:
        case vo:
        case of:
        case Fi:
        case uf:
        case ks:
        case sf:
        case cf:
          l = fo;
          break;
        case bl:
          l = vu;
          break;
        default:
          l = pt;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== pt ? pt : l;
    }
    function Sp(e, t, a) {
      if (Bn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var s = mf(a), p = 1 << s, y = l[s];
          y.add(t), a &= ~p;
        }
    }
    function gf(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var s = mf(t), p = 1 << s, y = a[s];
          y.size > 0 && (y.forEach(function(E) {
            var w = E.alternate;
            (w === null || !l.has(w)) && l.add(E);
          }), y.clear()), t &= ~p;
        }
    }
    function Ep(e, t) {
      return null;
    }
    var sr = We, Wn = la, Hi = Wt, Ls = bl, So = pt;
    function Ra() {
      return So;
    }
    function bn(e) {
      So = e;
    }
    function Us(e, t) {
      var a = So;
      try {
        return So = e, t();
      } finally {
        So = a;
      }
    }
    function cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function h0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function wp(e, t) {
      return e !== 0 && e < t;
    }
    function As(e) {
      var t = Sn(e);
      return wp(sr, t) ? wp(Wn, t) ? Os(t) ? Hi : Ls : Wn : sr;
    }
    function Rn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sm;
    function Te(e) {
      sm = e;
    }
    function Eu(e) {
      sm(e);
    }
    var zs;
    function cm(e) {
      zs = e;
    }
    var fm;
    function js(e) {
      fm = e;
    }
    var Fs;
    function _p(e) {
      Fs = e;
    }
    var xp;
    function dm(e) {
      xp = e;
    }
    var Sf = !1, wu = [], di = null, Xt = null, Fn = null, Da = /* @__PURE__ */ new Map(), _u = /* @__PURE__ */ new Map(), Pi = [], Ka = [
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
    function pm(e) {
      return Ka.indexOf(e) > -1;
    }
    function pi(e, t, a, l, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: s,
        targetContainers: [l]
      };
    }
    function hm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          di = null;
          break;
        case "dragenter":
        case "dragleave":
          Xt = null;
          break;
        case "mouseover":
        case "mouseout":
          Fn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Da.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          _u.delete(l);
          break;
        }
      }
    }
    function xu(e, t, a, l, s, p) {
      if (e === null || e.nativeEvent !== p) {
        var y = pi(t, a, l, s, p);
        if (t !== null) {
          var E = Uu(t);
          E !== null && zs(E);
        }
        return y;
      }
      e.eventSystemFlags |= l;
      var w = e.targetContainers;
      return s !== null && w.indexOf(s) === -1 && w.push(s), e;
    }
    function vm(e, t, a, l, s) {
      switch (t) {
        case "focusin": {
          var p = s;
          return di = xu(di, e, t, a, l, p), !0;
        }
        case "dragenter": {
          var y = s;
          return Xt = xu(Xt, e, t, a, l, y), !0;
        }
        case "mouseover": {
          var E = s;
          return Fn = xu(Fn, e, t, a, l, E), !0;
        }
        case "pointerover": {
          var w = s, x = w.pointerId;
          return Da.set(x, xu(Da.get(x) || null, e, t, a, l, w)), !0;
        }
        case "gotpointercapture": {
          var b = s, A = b.pointerId;
          return _u.set(A, xu(_u.get(A) || null, e, t, a, l, b)), !0;
        }
      }
      return !1;
    }
    function Cp(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = ra(t);
        if (a !== null) {
          var l = a.tag;
          if (l === ce) {
            var s = Jd(a);
            if (s !== null) {
              e.blockedOn = s, xp(e.priority, function() {
                fm(a);
              });
              return;
            }
          } else if (l === O) {
            var p = a.stateNode;
            if (Rn(p)) {
              e.blockedOn = Pc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function mm(e) {
      for (var t = Fs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < Pi.length && wp(t, Pi[l].priority); l++)
        ;
      Pi.splice(l, 0, a), l === 0 && Cp(a);
    }
    function Ef(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = Eo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var s = e.nativeEvent, p = new s.constructor(s.type, s);
          ys(p), s.target.dispatchEvent(p), a0();
        } else {
          var y = Uu(l);
          return y !== null && zs(y), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hs(e, t, a) {
      Ef(e) && a.delete(t);
    }
    function Tp() {
      Sf = !1, di !== null && Ef(di) && (di = null), Xt !== null && Ef(Xt) && (Xt = null), Fn !== null && Ef(Fn) && (Fn = null), Da.forEach(Hs), _u.forEach(Hs);
    }
    function fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Sf || (Sf = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Tp)));
    }
    function ct(e) {
      if (wu.length > 0) {
        fr(wu[0], e);
        for (var t = 1; t < wu.length; t++) {
          var a = wu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      di !== null && fr(di, e), Xt !== null && fr(Xt, e), Fn !== null && fr(Fn, e);
      var l = function(E) {
        return fr(E, e);
      };
      Da.forEach(l), _u.forEach(l);
      for (var s = 0; s < Pi.length; s++) {
        var p = Pi[s];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; Pi.length > 0; ) {
        var y = Pi[0];
        if (y.blockedOn !== null)
          break;
        Cp(y), y.blockedOn === null && Pi.shift();
      }
    }
    var nn = c.ReactCurrentBatchConfig, un = !0;
    function Hn(e) {
      un = !!e;
    }
    function oa() {
      return un;
    }
    function Cu(e, t, a) {
      var l = yr(t), s;
      switch (l) {
        case sr:
          s = Dn;
          break;
        case Wn:
          s = Ps;
          break;
        case Hi:
        default:
          s = Yi;
          break;
      }
      return s.bind(null, t, a, e);
    }
    function Dn(e, t, a, l) {
      var s = Ra(), p = nn.transition;
      nn.transition = null;
      try {
        bn(sr), Yi(e, t, a, l);
      } finally {
        bn(s), nn.transition = p;
      }
    }
    function Ps(e, t, a, l) {
      var s = Ra(), p = nn.transition;
      nn.transition = null;
      try {
        bn(Wn), Yi(e, t, a, l);
      } finally {
        bn(s), nn.transition = p;
      }
    }
    function Yi(e, t, a, l) {
      un && wf(e, t, a, l);
    }
    function wf(e, t, a, l) {
      var s = Eo(e, t, a, l);
      if (s === null) {
        U0(e, t, l, Tu, a), hm(e, l);
        return;
      }
      if (vm(s, e, t, a, l)) {
        l.stopPropagation();
        return;
      }
      if (hm(e, l), t & to && pm(e)) {
        for (; s !== null; ) {
          var p = Uu(s);
          p !== null && Eu(p);
          var y = Eo(e, t, a, l);
          if (y === null && U0(e, t, l, Tu, a), y === s)
            break;
          s = y;
        }
        s !== null && l.stopPropagation();
        return;
      }
      U0(e, t, l, null, a);
    }
    var Tu = null;
    function Eo(e, t, a, l) {
      Tu = null;
      var s = Ac(l), p = Gs(s);
      if (p !== null) {
        var y = ra(p);
        if (y === null)
          p = null;
        else {
          var E = y.tag;
          if (E === ce) {
            var w = Jd(y);
            if (w !== null)
              return w;
            p = null;
          } else if (E === O) {
            var x = y.stateNode;
            if (Rn(x))
              return Pc(y);
            p = null;
          } else
            y !== p && (p = null);
        }
      }
      return Tu = p, null;
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
          return Wn;
        case "message": {
          var t = np();
          switch (t) {
            case $c:
              return sr;
            case ia:
              return Wn;
            case ci:
            case Bc:
              return Hi;
            case Sl:
              return Ls;
            default:
              return Hi;
          }
        }
        default:
          return Hi;
      }
    }
    function bp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function bu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ii(e, t, a, l) {
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
    var wo = null, hi = null, Dl = null;
    function kl(e) {
      return wo = e, hi = Cf(), !0;
    }
    function xf() {
      wo = null, hi = null, Dl = null;
    }
    function Ru() {
      if (Dl)
        return Dl;
      var e, t = hi, a = t.length, l, s = Cf(), p = s.length;
      for (e = 0; e < a && t[e] === s[e]; e++)
        ;
      var y = a - e;
      for (l = 1; l <= y && t[a - l] === s[p - l]; l++)
        ;
      var E = l > 1 ? 1 - l : void 0;
      return Dl = s.slice(e, E), Dl;
    }
    function Cf() {
      return "value" in wo ? wo.value : wo.textContent;
    }
    function _o(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function dr() {
      return !1;
    }
    function En(e) {
      function t(a, l, s, p, y) {
        this._reactName = a, this._targetInst = s, this.type = l, this.nativeEvent = p, this.target = y, this.currentTarget = null;
        for (var E in e)
          if (e.hasOwnProperty(E)) {
            var w = e[E];
            w ? this[E] = w(p) : this[E] = p[E];
          }
        var x = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return x ? this.isDefaultPrevented = xo : this.isDefaultPrevented = dr, this.isPropagationStopped = dr, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
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
        isPersistent: xo
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
    }, hr = En(pr), Du = st({}, pr, {
      view: 0,
      detail: 0
    }), Rp = En(Du), Ys, Dp, ka;
    function ym(e) {
      e !== ka && (ka && e.type === "mousemove" ? (Ys = e.screenX - ka.screenX, Dp = e.screenY - ka.screenY) : (Ys = 0, Dp = 0), ka = e);
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
      getModifierState: Rf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (ym(e), Ys);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Dp;
      }
    }), Ml = En(ku), kp = st({}, ku, {
      dataTransfer: 0
    }), Co = En(kp), gm = st({}, Du, {
      relatedTarget: 0
    }), Tf = En(gm), Mp = st({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = En(Mp), v0 = st({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), m0 = En(v0), Sm = st({}, pr, {
      data: 0
    }), Op = En(Sm), To = Op, y0 = {
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
    function Em(e) {
      if (e.key) {
        var t = y0[e.key] || e.key;
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
    function g0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = sn[e];
      return l ? !!a[l] : !1;
    }
    function Rf(e) {
      return g0;
    }
    var S0 = st({}, Du, {
      key: Em,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Rf,
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
    }), E0 = En(S0), wm = st({}, ku, {
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
    }), Np = En(wm), w0 = st({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rf
    }), Ma = En(w0), Lp = st({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _0 = En(Lp), Ol = st({}, ku, {
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
    }), Df = En(Ol), bo = [9, 13, 27, 32], Is = 229, Vs = On && "CompositionEvent" in window, Ro = null;
    On && "documentMode" in document && (Ro = document.documentMode);
    var x0 = On && "TextEvent" in window && !Ro, kf = On && (!Vs || Ro && Ro > 8 && Ro <= 11), _m = 32, Up = String.fromCharCode(_m);
    function xm() {
      Or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Or("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Or("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Or("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $s = !1;
    function Mf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Cm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ap(e, t) {
      return e === "keydown" && t.keyCode === Is;
    }
    function Tm(e, t) {
      switch (e) {
        case "keyup":
          return bo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Is;
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
    function Of(e) {
      return e.locale === "ko";
    }
    var Vi = !1;
    function jp(e, t, a, l, s) {
      var p, y;
      if (Vs ? p = Cm(t) : Vi ? Tm(t, l) && (p = "onCompositionEnd") : Ap(t, l) && (p = "onCompositionStart"), !p)
        return null;
      kf && !Of(l) && (!Vi && p === "onCompositionStart" ? Vi = kl(s) : p === "onCompositionEnd" && Vi && (y = Ru()));
      var E = Mm(a, p);
      if (E.length > 0) {
        var w = new Op(p, t, null, l, s);
        if (e.push({
          event: w,
          listeners: E
        }), y)
          w.data = y;
        else {
          var x = zp(l);
          x !== null && (w.data = x);
        }
      }
    }
    function Nf(e, t) {
      switch (e) {
        case "compositionend":
          return zp(t);
        case "keypress":
          var a = t.which;
          return a !== _m ? null : ($s = !0, Up);
        case "textInput":
          var l = t.data;
          return l === Up && $s ? null : l;
        default:
          return null;
      }
    }
    function bm(e, t) {
      if (Vi) {
        if (e === "compositionend" || !Vs && Tm(e, t)) {
          var a = Ru();
          return xf(), Vi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Mf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return kf && !Of(t) ? null : t.data;
        default:
          return null;
      }
    }
    function C0(e, t, a, l, s) {
      var p;
      if (x0 ? p = Nf(t, l) : p = bm(t, l), !p)
        return null;
      var y = Mm(a, "onBeforeInput");
      if (y.length > 0) {
        var E = new To("onBeforeInput", "beforeinput", null, l, s);
        e.push({
          event: E,
          listeners: y
        }), E.data = p;
      }
    }
    function Lf(e, t, a, l, s, p, y) {
      jp(e, t, a, l, s), C0(e, t, a, l, s);
    }
    var T0 = {
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
      return t === "input" ? !!T0[e.type] : t === "textarea";
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
    function b0(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function Uf() {
      Or("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      zc(l);
      var s = Mm(t, "onChange");
      if (s.length > 0) {
        var p = new hr("onChange", "change", null, a, l);
        e.push({
          event: p,
          listeners: s
        });
      }
    }
    var r = null, u = null;
    function f(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function v(e) {
      var t = [];
      n(t, u, e, Ac(e)), Bd(g, t);
    }
    function g(e) {
      Zw(e, 0);
    }
    function _(e) {
      var t = Pf(e);
      if (dv(t))
        return e;
    }
    function D(e, t) {
      if (e === "change")
        return t;
    }
    var N = !1;
    On && (N = b0("input") && (!document.documentMode || document.documentMode > 9));
    function B(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", ie);
    }
    function ne() {
      r && (r.detachEvent("onpropertychange", ie), r = null, u = null);
    }
    function ie(e) {
      e.propertyName === "value" && _(u) && v(e);
    }
    function te(e, t, a) {
      e === "focusin" ? (ne(), B(t, a)) : e === "focusout" && ne();
    }
    function Se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _(u);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Oe(e, t) {
      if (e === "click")
        return _(t);
    }
    function hn(e, t) {
      if (e === "input" || e === "change")
        return _(t);
    }
    function F(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || fl(e, "number", e.value);
    }
    function U(e, t, a, l, s, p, y) {
      var E = a ? Pf(a) : window, w, x;
      if (f(E) ? w = D : Ou(E) ? N ? w = hn : (w = Se, x = te) : Re(E) && (w = Oe), w) {
        var b = w(t, a);
        if (b) {
          n(e, b, l, s);
          return;
        }
      }
      x && x(t, E, a), t === "focusout" && F(E);
    }
    function Y() {
      ha("onMouseEnter", ["mouseout", "mouseover"]), ha("onMouseLeave", ["mouseout", "mouseover"]), ha("onPointerEnter", ["pointerout", "pointerover"]), ha("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ue(e, t, a, l, s, p, y) {
      var E = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout";
      if (E && !Vv(l)) {
        var x = l.relatedTarget || l.fromElement;
        if (x && (Gs(x) || Kp(x)))
          return;
      }
      if (!(!w && !E)) {
        var b;
        if (s.window === s)
          b = s;
        else {
          var A = s.ownerDocument;
          A ? b = A.defaultView || A.parentWindow : b = window;
        }
        var L, V;
        if (w) {
          var $ = l.relatedTarget || l.toElement;
          if (L = a, V = $ ? Gs($) : null, V !== null) {
            var Q = ra(V);
            (V !== Q || V.tag !== G && V.tag !== z) && (V = null);
          }
        } else
          L = null, V = a;
        if (L !== V) {
          var xe = Ml, Fe = "onMouseLeave", Le = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = Np, Fe = "onPointerLeave", Le = "onPointerEnter", vt = "pointer");
          var ft = L == null ? b : Pf(L), H = V == null ? b : Pf(V), q = new xe(Fe, vt + "leave", L, l, s);
          q.target = ft, q.relatedTarget = H;
          var P = null, le = Gs(s);
          if (le === a) {
            var Ce = new xe(Le, vt + "enter", V, l, s);
            Ce.target = H, Ce.relatedTarget = ft, P = Ce;
          }
          iD(e, q, P, L, V);
        }
      }
    }
    function Ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : Ne;
    function Ae(e, t) {
      if (De(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var s = 0; s < a.length; s++) {
        var p = a[s];
        if (!ar.call(t, p) || !De(e[p], t[p]))
          return !1;
      }
      return !0;
    }
    function Ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yt(e, t) {
      for (var a = Ze(e), l = 0, s = 0; a; ) {
        if (a.nodeType === Mi) {
          if (s = l + a.textContent.length, l <= t && s >= t)
            return {
              node: a,
              offset: t - l
            };
          l = s;
        }
        a = Ze(Pn(a));
      }
    }
    function Nl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var s = l.anchorNode, p = l.anchorOffset, y = l.focusNode, E = l.focusOffset;
      try {
        s.nodeType, y.nodeType;
      } catch {
        return null;
      }
      return R0(e, s, p, y, E);
    }
    function R0(e, t, a, l, s) {
      var p = 0, y = -1, E = -1, w = 0, x = 0, b = e, A = null;
      e:
        for (; ; ) {
          for (var L = null; b === t && (a === 0 || b.nodeType === Mi) && (y = p + a), b === l && (s === 0 || b.nodeType === Mi) && (E = p + s), b.nodeType === Mi && (p += b.nodeValue.length), (L = b.firstChild) !== null; )
            A = b, b = L;
          for (; ; ) {
            if (b === e)
              break e;
            if (A === t && ++w === a && (y = p), A === l && ++x === s && (E = p), (L = b.nextSibling) !== null)
              break;
            b = A, A = b.parentNode;
          }
          b = L;
        }
      return y === -1 || E === -1 ? null : {
        start: y,
        end: E
      };
    }
    function PR(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var s = l.getSelection(), p = e.textContent.length, y = Math.min(t.start, p), E = t.end === void 0 ? y : Math.min(t.end, p);
        if (!s.extend && y > E) {
          var w = E;
          E = y, y = w;
        }
        var x = yt(e, y), b = yt(e, E);
        if (x && b) {
          if (s.rangeCount === 1 && s.anchorNode === x.node && s.anchorOffset === x.offset && s.focusNode === b.node && s.focusOffset === b.offset)
            return;
          var A = a.createRange();
          A.setStart(x.node, x.offset), s.removeAllRanges(), y > E ? (s.addRange(A), s.extend(b.node, b.offset)) : (A.setEnd(b.node, b.offset), s.addRange(A));
        }
      }
    }
    function Fw(e) {
      return e && e.nodeType === Mi;
    }
    function Hw(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Fw(e) ? !1 : Fw(t) ? Hw(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function YR(e) {
      return e && e.ownerDocument && Hw(e.ownerDocument.documentElement, e);
    }
    function IR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Pw() {
      for (var e = window, t = _c(); t instanceof e.HTMLIFrameElement; ) {
        if (IR(t))
          e = t.contentWindow;
        else
          return t;
        t = _c(e.document);
      }
      return t;
    }
    function D0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function VR() {
      var e = Pw();
      return {
        focusedElem: e,
        selectionRange: D0(e) ? BR(e) : null
      };
    }
    function $R(e) {
      var t = Pw(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && YR(a)) {
        l !== null && D0(a) && WR(a, l);
        for (var s = [], p = a; p = p.parentNode; )
          p.nodeType === Lr && s.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var y = 0; y < s.length; y++) {
          var E = s[y];
          E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
        }
      }
    }
    function BR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Nl(e), t || {
        start: 0,
        end: 0
      };
    }
    function WR(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : PR(e, t);
    }
    var GR = On && "documentMode" in document && document.documentMode <= 11;
    function QR() {
      Or("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Af = null, k0 = null, Fp = null, M0 = !1;
    function qR(e) {
      if ("selectionStart" in e && D0(e))
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
    function ZR(e) {
      return e.window === e ? e.document : e.nodeType === Ga ? e : e.ownerDocument;
    }
    function Yw(e, t, a) {
      var l = ZR(a);
      if (!(M0 || Af == null || Af !== _c(l))) {
        var s = qR(Af);
        if (!Fp || !Ae(Fp, s)) {
          Fp = s;
          var p = Mm(k0, "onSelect");
          if (p.length > 0) {
            var y = new hr("onSelect", "select", null, t, a);
            e.push({
              event: y,
              listeners: p
            }), y.target = Af;
          }
        }
      }
    }
    function KR(e, t, a, l, s, p, y) {
      var E = a ? Pf(a) : window;
      switch (t) {
        case "focusin":
          (Ou(E) || E.contentEditable === "true") && (Af = E, k0 = a, Fp = null);
          break;
        case "focusout":
          Af = null, k0 = null, Fp = null;
          break;
        case "mousedown":
          M0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          M0 = !1, Yw(e, l, s);
          break;
        case "selectionchange":
          if (GR)
            break;
        case "keydown":
        case "keyup":
          Yw(e, l, s);
      }
    }
    function Rm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var zf = {
      animationend: Rm("Animation", "AnimationEnd"),
      animationiteration: Rm("Animation", "AnimationIteration"),
      animationstart: Rm("Animation", "AnimationStart"),
      transitionend: Rm("Transition", "TransitionEnd")
    }, O0 = {}, Iw = {};
    On && (Iw = document.createElement("div").style, "AnimationEvent" in window || (delete zf.animationend.animation, delete zf.animationiteration.animation, delete zf.animationstart.animation), "TransitionEvent" in window || delete zf.transitionend.transition);
    function Dm(e) {
      if (O0[e])
        return O0[e];
      if (!zf[e])
        return e;
      var t = zf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Iw)
          return O0[e] = t[a];
      return e;
    }
    var Vw = Dm("animationend"), $w = Dm("animationiteration"), Bw = Dm("animationstart"), Ww = Dm("transitionend"), Gw = /* @__PURE__ */ new Map(), Qw = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Nu(e, t) {
      Gw.set(e, t), Or(t, [e]);
    }
    function XR() {
      for (var e = 0; e < Qw.length; e++) {
        var t = Qw[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Nu(a, "on" + l);
      }
      Nu(Vw, "onAnimationEnd"), Nu($w, "onAnimationIteration"), Nu(Bw, "onAnimationStart"), Nu("dblclick", "onDoubleClick"), Nu("focusin", "onFocus"), Nu("focusout", "onBlur"), Nu(Ww, "onTransitionEnd");
    }
    function JR(e, t, a, l, s, p, y) {
      var E = Gw.get(t);
      if (E !== void 0) {
        var w = hr, x = t;
        switch (t) {
          case "keypress":
            if (_o(l) === 0)
              return;
          case "keydown":
          case "keyup":
            w = E0;
            break;
          case "focusin":
            x = "focus", w = Tf;
            break;
          case "focusout":
            x = "blur", w = Tf;
            break;
          case "beforeblur":
          case "afterblur":
            w = Tf;
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
            w = Ml;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Co;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ma;
            break;
          case Vw:
          case $w:
          case Bw:
            w = bf;
            break;
          case Ww:
            w = _0;
            break;
          case "scroll":
            w = Rp;
            break;
          case "wheel":
            w = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = m0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Np;
            break;
        }
        var b = (p & to) !== 0;
        {
          var A = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = rD(a, E, l.type, b, A);
          if (L.length > 0) {
            var V = new w(E, x, null, l, s);
            e.push({
              event: V,
              listeners: L
            });
          }
        }
      }
    }
    XR(), Y(), Uf(), QR(), xm();
    function eD(e, t, a, l, s, p, y) {
      JR(e, t, a, l, s, p);
      var E = (p & r0) === 0;
      E && (ue(e, t, a, l, s), U(e, t, a, l, s), KR(e, t, a, l, s), Lf(e, t, a, l, s));
    }
    var Hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], N0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hp));
    function qw(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Ui(l, t, void 0, e), e.currentTarget = null;
    }
    function tD(e, t, a) {
      var l;
      if (a)
        for (var s = t.length - 1; s >= 0; s--) {
          var p = t[s], y = p.instance, E = p.currentTarget, w = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          qw(e, w, E), l = y;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var b = t[x], A = b.instance, L = b.currentTarget, V = b.listener;
          if (A !== l && e.isPropagationStopped())
            return;
          qw(e, V, L), l = A;
        }
    }
    function Zw(e, t) {
      for (var a = (t & to) !== 0, l = 0; l < e.length; l++) {
        var s = e[l], p = s.event, y = s.listeners;
        tD(p, y, a);
      }
      qd();
    }
    function nD(e, t, a, l, s) {
      var p = Ac(a), y = [];
      eD(y, e, l, a, p, t), Zw(y, t);
    }
    function rn(e, t) {
      N0.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = Nk(t), s = lD(e, a);
      l.has(s) || (Kw(t, e, vs, a), l.add(s));
    }
    function L0(e, t, a) {
      N0.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= to), Kw(a, e, l, t);
    }
    var km = "_reactListening" + Math.random().toString(36).slice(2);
    function Pp(e) {
      if (!e[km]) {
        e[km] = !0, rr.forEach(function(a) {
          a !== "selectionchange" && (N0.has(a) || L0(a, !1, e), L0(a, !0, e));
        });
        var t = e.nodeType === Ga ? e : e.ownerDocument;
        t !== null && (t[km] || (t[km] = !0, L0("selectionchange", !1, t)));
      }
    }
    function Kw(e, t, a, l, s) {
      var p = Cu(e, t, a), y = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? Ii(e, t, p, y) : bu(e, t, p) : y !== void 0 ? _f(e, t, p, y) : bp(e, t, p);
    }
    function Xw(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function U0(e, t, a, l, s) {
      var p = l;
      if (!(t & Ni) && !(t & vs)) {
        var y = s;
        if (l !== null) {
          var E = l;
          e:
            for (; ; ) {
              if (E === null)
                return;
              var w = E.tag;
              if (w === O || w === j) {
                var x = E.stateNode.containerInfo;
                if (Xw(x, y))
                  break;
                if (w === j)
                  for (var b = E.return; b !== null; ) {
                    var A = b.tag;
                    if (A === O || A === j) {
                      var L = b.stateNode.containerInfo;
                      if (Xw(L, y))
                        return;
                    }
                    b = b.return;
                  }
                for (; x !== null; ) {
                  var V = Gs(x);
                  if (V === null)
                    return;
                  var $ = V.tag;
                  if ($ === G || $ === z) {
                    E = p = V;
                    continue e;
                  }
                  x = x.parentNode;
                }
              }
              E = E.return;
            }
        }
      }
      Bd(function() {
        return nD(e, t, a, p);
      });
    }
    function Yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function rD(e, t, a, l, s, p) {
      for (var y = t !== null ? t + "Capture" : null, E = l ? y : t, w = [], x = e, b = null; x !== null; ) {
        var A = x, L = A.stateNode, V = A.tag;
        if (V === G && L !== null && (b = L, E !== null)) {
          var $ = ro(x, E);
          $ != null && w.push(Yp(x, $, b));
        }
        if (s)
          break;
        x = x.return;
      }
      return w;
    }
    function Mm(e, t) {
      for (var a = t + "Capture", l = [], s = e; s !== null; ) {
        var p = s, y = p.stateNode, E = p.tag;
        if (E === G && y !== null) {
          var w = y, x = ro(s, a);
          x != null && l.unshift(Yp(s, x, w));
          var b = ro(s, t);
          b != null && l.push(Yp(s, b, w));
        }
        s = s.return;
      }
      return l;
    }
    function jf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== G);
      return e || null;
    }
    function aD(e, t) {
      for (var a = e, l = t, s = 0, p = a; p; p = jf(p))
        s++;
      for (var y = 0, E = l; E; E = jf(E))
        y++;
      for (; s - y > 0; )
        a = jf(a), s--;
      for (; y - s > 0; )
        l = jf(l), y--;
      for (var w = s; w--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = jf(a), l = jf(l);
      }
      return null;
    }
    function Jw(e, t, a, l, s) {
      for (var p = t._reactName, y = [], E = a; E !== null && E !== l; ) {
        var w = E, x = w.alternate, b = w.stateNode, A = w.tag;
        if (x !== null && x === l)
          break;
        if (A === G && b !== null) {
          var L = b;
          if (s) {
            var V = ro(E, p);
            V != null && y.unshift(Yp(E, V, L));
          } else if (!s) {
            var $ = ro(E, p);
            $ != null && y.push(Yp(E, $, L));
          }
        }
        E = E.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function iD(e, t, a, l, s) {
      var p = l && s ? aD(l, s) : null;
      l !== null && Jw(e, t, l, p, !1), s !== null && a !== null && Jw(e, a, s, p, !0);
    }
    function lD(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Oa = !1, Ip = "dangerouslySetInnerHTML", Om = "suppressContentEditableWarning", Lu = "suppressHydrationWarning", e_ = "autoFocus", Bs = "children", Ws = "style", Nm = "__html", A0, Lm, Vp, t_, Um, n_, r_;
    A0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Lm = function(e, t) {
      Uc(e, t), Pd(e, t), Iv(e, t, {
        registrationNameDependencies: Mr,
        possibleRegistrationNames: ai
      });
    }, n_ = On && !document.documentMode, Vp = function(e, t, a) {
      if (!Oa) {
        var l = Am(a), s = Am(t);
        s !== l && (Oa = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(l)));
      }
    }, t_ = function(e) {
      if (!Oa) {
        Oa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Um = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, r_ = function(e, t) {
      var a = e.namespaceURI === ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var oD = /\r\n?/g, uD = /\u0000|\uFFFD/g;
    function Am(e) {
      Pa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(oD, `
`).replace(uD, "");
    }
    function zm(e, t, a, l) {
      var s = Am(t), p = Am(e);
      if (p !== s && (l && (Oa || (Oa = !0, m('Text content did not match. Server: "%s" Client: "%s"', p, s))), a && fn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function a_(e) {
      return e.nodeType === Ga ? e : e.ownerDocument;
    }
    function sD() {
    }
    function jm(e) {
      e.onclick = sD;
    }
    function cD(e, t, a, l, s) {
      for (var p in l)
        if (l.hasOwnProperty(p)) {
          var y = l[p];
          if (p === Ws)
            y && Object.freeze(y), Nv(t, y);
          else if (p === Ip) {
            var E = y ? y[Nm] : void 0;
            E != null && wv(t, E);
          } else if (p === Bs)
            if (typeof y == "string") {
              var w = e !== "textarea" || y !== "";
              w && Mc(t, y);
            } else
              typeof y == "number" && Mc(t, "" + y);
          else
            p === Om || p === Lu || p === e_ || (Mr.hasOwnProperty(p) ? y != null && (typeof y != "function" && Um(p, y), p === "onScroll" && rn("scroll", t)) : y != null && oi(t, p, y, s));
        }
    }
    function fD(e, t, a, l) {
      for (var s = 0; s < t.length; s += 2) {
        var p = t[s], y = t[s + 1];
        p === Ws ? Nv(e, y) : p === Ip ? wv(e, y) : p === Bs ? Mc(e, y) : oi(e, p, y, l);
      }
    }
    function dD(e, t, a, l) {
      var s, p = a_(a), y, E = l;
      if (E === ki && (E = Dc(e)), E === ki) {
        if (s = Oi(e, t), !s && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var w = p.createElement("div");
          w.innerHTML = "<script><\/script>";
          var x = w.firstChild;
          y = w.removeChild(x);
        } else if (typeof t.is == "string")
          y = p.createElement(e, {
            is: t.is
          });
        else if (y = p.createElement(e), e === "select") {
          var b = y;
          t.multiple ? b.multiple = !0 : t.size && (b.size = t.size);
        }
      } else
        y = p.createElementNS(E, e);
      return E === ki && !s && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !ar.call(A0, e) && (A0[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function pD(e, t) {
      return a_(t).createTextNode(e);
    }
    function hD(e, t, a, l) {
      var s = Oi(t, a);
      Lm(t, a);
      var p;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), p = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), p = a;
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Hp.length; y++)
            rn(Hp[y], e);
          p = a;
          break;
        case "source":
          rn("error", e), p = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), p = a;
          break;
        case "details":
          rn("toggle", e), p = a;
          break;
        case "input":
          ss(e, a), p = us(e, a), rn("invalid", e);
          break;
        case "option":
          bc(e, a), p = a;
          break;
        case "select":
          yv(e, a), p = kd(e, a), rn("invalid", e);
          break;
        case "textarea":
          gv(e, a), p = Od(e, a), rn("invalid", e);
          break;
        default:
          p = a;
      }
      switch (Nc(t, p), cD(t, e, l, p, s), t) {
        case "input":
          Xl(e), cs(e, a, !1);
          break;
        case "textarea":
          Xl(e), Ev(e);
          break;
        case "option":
          Dd(e, a);
          break;
        case "select":
          Wg(e, a);
          break;
        default:
          typeof p.onClick == "function" && jm(e);
          break;
      }
    }
    function vD(e, t, a, l, s) {
      Lm(t, l);
      var p = null, y, E;
      switch (t) {
        case "input":
          y = us(e, a), E = us(e, l), p = [];
          break;
        case "select":
          y = kd(e, a), E = kd(e, l), p = [];
          break;
        case "textarea":
          y = Od(e, a), E = Od(e, l), p = [];
          break;
        default:
          y = a, E = l, typeof y.onClick != "function" && typeof E.onClick == "function" && jm(e);
          break;
      }
      Nc(t, E);
      var w, x, b = null;
      for (w in y)
        if (!(E.hasOwnProperty(w) || !y.hasOwnProperty(w) || y[w] == null))
          if (w === Ws) {
            var A = y[w];
            for (x in A)
              A.hasOwnProperty(x) && (b || (b = {}), b[x] = "");
          } else
            w === Ip || w === Bs || w === Om || w === Lu || w === e_ || (Mr.hasOwnProperty(w) ? p || (p = []) : (p = p || []).push(w, null));
      for (w in E) {
        var L = E[w], V = y != null ? y[w] : void 0;
        if (!(!E.hasOwnProperty(w) || L === V || L == null && V == null))
          if (w === Ws)
            if (L && Object.freeze(L), V) {
              for (x in V)
                V.hasOwnProperty(x) && (!L || !L.hasOwnProperty(x)) && (b || (b = {}), b[x] = "");
              for (x in L)
                L.hasOwnProperty(x) && V[x] !== L[x] && (b || (b = {}), b[x] = L[x]);
            } else
              b || (p || (p = []), p.push(w, b)), b = L;
          else if (w === Ip) {
            var $ = L ? L[Nm] : void 0, Q = V ? V[Nm] : void 0;
            $ != null && Q !== $ && (p = p || []).push(w, $);
          } else
            w === Bs ? (typeof L == "string" || typeof L == "number") && (p = p || []).push(w, "" + L) : w === Om || w === Lu || (Mr.hasOwnProperty(w) ? (L != null && (typeof L != "function" && Um(w, L), w === "onScroll" && rn("scroll", e)), !p && V !== L && (p = [])) : (p = p || []).push(w, L));
      }
      return b && (ps(b, E[Ws]), (p = p || []).push(Ws, b)), p;
    }
    function mD(e, t, a, l, s) {
      a === "input" && s.type === "radio" && s.name != null && Rd(e, s);
      var p = Oi(a, l), y = Oi(a, s);
      switch (fD(e, t, p, y), a) {
        case "input":
          tu(e, s);
          break;
        case "textarea":
          Sv(e, s);
          break;
        case "select":
          Gg(e, s);
          break;
      }
    }
    function yD(e) {
      {
        var t = e.toLowerCase();
        return Lc.hasOwnProperty(t) && Lc[t] || null;
      }
    }
    function gD(e, t, a, l, s, p, y) {
      var E, w;
      switch (E = Oi(t, a), Lm(t, a), t) {
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
          for (var x = 0; x < Hp.length; x++)
            rn(Hp[x], e);
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
          bc(e, a);
          break;
        case "select":
          yv(e, a), rn("invalid", e);
          break;
        case "textarea":
          gv(e, a), rn("invalid", e);
          break;
      }
      Nc(t, a);
      {
        w = /* @__PURE__ */ new Set();
        for (var b = e.attributes, A = 0; A < b.length; A++) {
          var L = b[A].name.toLowerCase();
          switch (L) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              w.add(b[A].name);
          }
        }
      }
      var V = null;
      for (var $ in a)
        if (a.hasOwnProperty($)) {
          var Q = a[$];
          if ($ === Bs)
            typeof Q == "string" ? e.textContent !== Q && (a[Lu] !== !0 && zm(e.textContent, Q, p, y), V = [Bs, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Lu] !== !0 && zm(e.textContent, Q, p, y), V = [Bs, "" + Q]);
          else if (Mr.hasOwnProperty($))
            Q != null && (typeof Q != "function" && Um($, Q), $ === "onScroll" && rn("scroll", e));
          else if (y && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof E == "boolean") {
            var xe = void 0, Fe = E && In ? null : Jr($);
            if (a[Lu] !== !0) {
              if (!($ === Om || $ === Lu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === Ip) {
                  var Le = e.innerHTML, vt = Q ? Q[Nm] : void 0;
                  if (vt != null) {
                    var ft = r_(e, vt);
                    ft !== Le && Vp($, Le, ft);
                  }
                } else if ($ === Ws) {
                  if (w.delete($), n_) {
                    var H = t0(Q);
                    xe = e.getAttribute("style"), H !== xe && Vp($, xe, H);
                  }
                } else if (E && !In)
                  w.delete($.toLowerCase()), xe = Ko(e, $, Q), Q !== xe && Vp($, xe, Q);
                else if (!dn($, Fe, E) && !Pt($, Q, Fe, E)) {
                  var q = !1;
                  if (Fe !== null)
                    w.delete(Fe.attributeName), xe = ql(e, $, Q, Fe);
                  else {
                    var P = l;
                    if (P === ki && (P = Dc(t)), P === ki)
                      w.delete($.toLowerCase());
                    else {
                      var le = yD($);
                      le !== null && le !== $ && (q = !0, w.delete(le)), w.delete($);
                    }
                    xe = Ko(e, $, Q);
                  }
                  var Ce = In;
                  !Ce && Q !== xe && !q && Vp($, xe, Q);
                }
              }
            }
          }
        }
      switch (y && // $FlowFixMe - Should be inferred as not undefined.
      w.size > 0 && a[Lu] !== !0 && t_(w), t) {
        case "input":
          Xl(e), cs(e, a, !0);
          break;
        case "textarea":
          Xl(e), Ev(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jm(e);
          break;
      }
      return V;
    }
    function SD(e, t, a) {
      var l = e.nodeValue !== t;
      return l;
    }
    function z0(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function j0(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function F0(e, t, a) {
      {
        if (Oa)
          return;
        Oa = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function H0(e, t) {
      {
        if (t === "" || Oa)
          return;
        Oa = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function ED(e, t, a) {
      switch (t) {
        case "input":
          pv(e, a);
          return;
        case "textarea":
          Nd(e, a);
          return;
        case "select":
          Qg(e, a);
          return;
      }
    }
    var $p = function() {
    }, Bp = function() {
    };
    {
      var wD = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], i_ = [
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
      ], _D = i_.concat(["button"]), xD = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], l_ = {
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
        var a = st({}, e || l_), l = {
          tag: t
        };
        return i_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), _D.indexOf(t) !== -1 && (a.pTagInButtonScope = null), wD.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var CD = function(e, t) {
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
            return xD.indexOf(t) === -1;
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
      }, TD = function(e, t) {
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
      }, o_ = {};
      $p = function(e, t, a) {
        a = a || l_;
        var l = a.current, s = l && l.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = CD(e, s) ? null : l, y = p ? null : TD(e, a), E = p || y;
        if (E) {
          var w = E.tag, x = !!p + "|" + e + "|" + w;
          if (!o_[x]) {
            o_[x] = !0;
            var b = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", p) {
              var L = "";
              w === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, w, A, L);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, w);
          }
        }
      };
    }
    var Fm = "suppressHydrationWarning", Hm = "$", Pm = "/$", Wp = "$?", Gp = "$!", bD = "style", P0 = null, Y0 = null;
    function RD(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case Ga:
        case Jl: {
          t = l === Ga ? "#document" : "#fragment";
          var s = e.documentElement;
          a = s ? s.namespaceURI : Ud(null, "");
          break;
        }
        default: {
          var p = l === gn ? e.parentNode : e, y = p.namespaceURI || null;
          t = p.tagName, a = Ud(y, t);
          break;
        }
      }
      {
        var E = t.toLowerCase(), w = Bp(null, E);
        return {
          namespace: a,
          ancestorInfo: w
        };
      }
    }
    function DD(e, t, a) {
      {
        var l = e, s = Ud(l.namespace, t), p = Bp(l.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: p
        };
      }
    }
    function C3(e) {
      return e;
    }
    function kD(e) {
      P0 = oa(), Y0 = VR();
      var t = null;
      return Hn(!1), t;
    }
    function MD(e) {
      $R(Y0), Hn(P0), P0 = null, Y0 = null;
    }
    function OD(e, t, a, l, s) {
      var p;
      {
        var y = l;
        if ($p(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var E = "" + t.children, w = Bp(y.ancestorInfo, e);
          $p(null, E, w);
        }
        p = y.namespace;
      }
      var x = dD(e, t, a, p);
      return Zp(s, x), q0(x, t), x;
    }
    function ND(e, t) {
      e.appendChild(t);
    }
    function LD(e, t, a, l, s) {
      switch (hD(e, t, a, l), t) {
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
    function UD(e, t, a, l, s, p) {
      {
        var y = p;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var E = "" + l.children, w = Bp(y.ancestorInfo, t);
          $p(null, E, w);
        }
      }
      return vD(e, t, a, l);
    }
    function I0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function AD(e, t, a, l) {
      {
        var s = a;
        $p(null, e, s.ancestorInfo);
      }
      var p = pD(e, t);
      return Zp(l, p), p;
    }
    function zD() {
      var e = window.event;
      return e === void 0 ? Hi : yr(e.type);
    }
    var V0 = typeof setTimeout == "function" ? setTimeout : void 0, jD = typeof clearTimeout == "function" ? clearTimeout : void 0, $0 = -1, u_ = typeof Promise == "function" ? Promise : void 0, FD = typeof queueMicrotask == "function" ? queueMicrotask : typeof u_ < "u" ? function(e) {
      return u_.resolve(null).then(e).catch(HD);
    } : V0;
    function HD(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function PD(e, t, a, l) {
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
    function YD(e, t, a, l, s, p) {
      mD(e, t, a, l, s), q0(e, s);
    }
    function s_(e) {
      Mc(e, "");
    }
    function ID(e, t, a) {
      e.nodeValue = a;
    }
    function VD(e, t) {
      e.appendChild(t);
    }
    function $D(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && jm(a);
    }
    function BD(e, t, a) {
      e.insertBefore(t, a);
    }
    function WD(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function GD(e, t) {
      e.removeChild(t);
    }
    function QD(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function B0(e, t) {
      var a = t, l = 0;
      do {
        var s = a.nextSibling;
        if (e.removeChild(a), s && s.nodeType === gn) {
          var p = s.data;
          if (p === Pm)
            if (l === 0) {
              e.removeChild(s), ct(t);
              return;
            } else
              l--;
          else
            (p === Hm || p === Wp || p === Gp) && l++;
        }
        a = s;
      } while (a);
      ct(t);
    }
    function qD(e, t) {
      e.nodeType === gn ? B0(e.parentNode, t) : e.nodeType === Lr && B0(e, t), ct(e);
    }
    function ZD(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function KD(e) {
      e.nodeValue = "";
    }
    function XD(e, t) {
      e = e;
      var a = t[bD], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Oc("display", l);
    }
    function JD(e, t) {
      e.nodeValue = t;
    }
    function ek(e) {
      e.nodeType === Lr ? e.textContent = "" : e.nodeType === Ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function tk(e, t, a) {
      return e.nodeType !== Lr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function nk(e, t) {
      return t === "" || e.nodeType !== Mi ? null : e;
    }
    function rk(e) {
      return e.nodeType !== gn ? null : e;
    }
    function c_(e) {
      return e.data === Wp;
    }
    function W0(e) {
      return e.data === Gp;
    }
    function ak(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, s;
      return t && (a = t.dgst, l = t.msg, s = t.stck), {
        message: l,
        digest: a,
        stack: s
      };
    }
    function ik(e, t) {
      e._reactRetry = t;
    }
    function Ym(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Lr || t === Mi)
          break;
        if (t === gn) {
          var a = e.data;
          if (a === Hm || a === Gp || a === Wp)
            break;
          if (a === Pm)
            return null;
        }
      }
      return e;
    }
    function Qp(e) {
      return Ym(e.nextSibling);
    }
    function lk(e) {
      return Ym(e.firstChild);
    }
    function ok(e) {
      return Ym(e.firstChild);
    }
    function uk(e) {
      return Ym(e.nextSibling);
    }
    function sk(e, t, a, l, s, p, y) {
      Zp(p, e), q0(e, a);
      var E;
      {
        var w = s;
        E = w.namespace;
      }
      var x = (p.mode & ot) !== Ye;
      return gD(e, t, a, E, l, x, y);
    }
    function ck(e, t, a, l) {
      return Zp(a, e), a.mode & ot, SD(e, t);
    }
    function fk(e, t) {
      Zp(t, e);
    }
    function dk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Pm) {
            if (a === 0)
              return Qp(t);
            a--;
          } else
            (l === Hm || l === Gp || l === Wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function f_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Hm || l === Gp || l === Wp) {
            if (a === 0)
              return t;
            a--;
          } else
            l === Pm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function pk(e) {
      ct(e);
    }
    function hk(e) {
      ct(e);
    }
    function vk(e) {
      return e !== "head" && e !== "body";
    }
    function mk(e, t, a, l) {
      var s = !0;
      zm(t.nodeValue, a, l, s);
    }
    function yk(e, t, a, l, s, p) {
      if (t[Fm] !== !0) {
        var y = !0;
        zm(l.nodeValue, s, p, y);
      }
    }
    function gk(e, t) {
      t.nodeType === Lr ? z0(e, t) : t.nodeType === gn || j0(e, t);
    }
    function Sk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Lr ? z0(a, t) : t.nodeType === gn || j0(a, t));
      }
    }
    function Ek(e, t, a, l, s) {
      (s || t[Fm] !== !0) && (l.nodeType === Lr ? z0(a, l) : l.nodeType === gn || j0(a, l));
    }
    function wk(e, t, a) {
      F0(e, t);
    }
    function _k(e, t) {
      H0(e, t);
    }
    function xk(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && F0(l, t);
      }
    }
    function Ck(e, t) {
      {
        var a = e.parentNode;
        a !== null && H0(a, t);
      }
    }
    function Tk(e, t, a, l, s, p) {
      (p || t[Fm] !== !0) && F0(a, l);
    }
    function bk(e, t, a, l, s) {
      (s || t[Fm] !== !0) && H0(a, l);
    }
    function Rk(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Dk(e) {
      Pp(e);
    }
    var Ff = Math.random().toString(36).slice(2), Hf = "__reactFiber$" + Ff, G0 = "__reactProps$" + Ff, qp = "__reactContainer$" + Ff, Q0 = "__reactEvents$" + Ff, kk = "__reactListeners$" + Ff, Mk = "__reactHandles$" + Ff;
    function Ok(e) {
      delete e[Hf], delete e[G0], delete e[Q0], delete e[kk], delete e[Mk];
    }
    function Zp(e, t) {
      t[Hf] = e;
    }
    function Im(e, t) {
      t[qp] = e;
    }
    function d_(e) {
      e[qp] = null;
    }
    function Kp(e) {
      return !!e[qp];
    }
    function Gs(e) {
      var t = e[Hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[qp] || a[Hf], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var s = f_(e); s !== null; ) {
              var p = s[Hf];
              if (p)
                return p;
              s = f_(s);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Uu(e) {
      var t = e[Hf] || e[qp];
      return t && (t.tag === G || t.tag === z || t.tag === ce || t.tag === O) ? t : null;
    }
    function Pf(e) {
      if (e.tag === G || e.tag === z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Vm(e) {
      return e[G0] || null;
    }
    function q0(e, t) {
      e[G0] = t;
    }
    function Nk(e) {
      var t = e[Q0];
      return t === void 0 && (t = e[Q0] = /* @__PURE__ */ new Set()), t;
    }
    var p_ = {}, h_ = c.ReactDebugCurrentFrame;
    function $m(e) {
      if (e) {
        var t = e._owner, a = ns(e.type, e._source, t ? t.type : null);
        h_.setExtraStackFrame(a);
      } else
        h_.setExtraStackFrame(null);
    }
    function $i(e, t, a, l, s) {
      {
        var p = Function.call.bind(ar);
        for (var y in e)
          if (p(e, y)) {
            var E = void 0;
            try {
              if (typeof e[y] != "function") {
                var w = Error((l || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              E = e[y](t, y, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              E = x;
            }
            E && !(E instanceof Error) && ($m(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, y, typeof E), $m(null)), E instanceof Error && !(E.message in p_) && (p_[E.message] = !0, $m(s), m("Failed %s type: %s", a, E.message), $m(null));
          }
      }
    }
    var Z0 = [], Bm;
    Bm = [];
    var Do = -1;
    function Au(e) {
      return {
        current: e
      };
    }
    function Ir(e, t) {
      if (Do < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Bm[Do] && m("Unexpected Fiber popped."), e.current = Z0[Do], Z0[Do] = null, Bm[Do] = null, Do--;
    }
    function Vr(e, t, a) {
      Do++, Z0[Do] = e.current, Bm[Do] = a, e.current = t;
    }
    var K0;
    K0 = {};
    var Xa = {};
    Object.freeze(Xa);
    var ko = Au(Xa), Ll = Au(!1), X0 = Xa;
    function Yf(e, t, a) {
      return a && Ul(t) ? X0 : ko.current;
    }
    function v_(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function If(e, t) {
      {
        var a = e.type, l = a.contextTypes;
        if (!l)
          return Xa;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var y in l)
          p[y] = t[y];
        {
          var E = et(e) || "Unknown";
          $i(l, p, "context", E);
        }
        return s && v_(e, t, p), p;
      }
    }
    function Wm() {
      return Ll.current;
    }
    function Ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gm(e) {
      Ir(Ll, e), Ir(ko, e);
    }
    function J0(e) {
      Ir(Ll, e), Ir(ko, e);
    }
    function m_(e, t, a) {
      {
        if (ko.current !== Xa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(ko, t, e), Vr(Ll, a, e);
      }
    }
    function y_(e, t, a) {
      {
        var l = e.stateNode, s = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var p = et(e) || "Unknown";
            K0[p] || (K0[p] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var y = l.getChildContext();
        for (var E in y)
          if (!(E in s))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + E + '" is not defined in childContextTypes.');
        {
          var w = et(e) || "Unknown";
          $i(s, y, "child context", w);
        }
        return st({}, a, y);
      }
    }
    function Qm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Xa;
        return X0 = ko.current, Vr(ko, a, e), Vr(Ll, Ll.current, e), !0;
      }
    }
    function g_(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var s = y_(e, t, X0);
          l.__reactInternalMemoizedMergedChildContext = s, Ir(Ll, e), Ir(ko, e), Vr(ko, s, e), Vr(Ll, a, e);
        } else
          Ir(Ll, e), Vr(Ll, a, e);
      }
    }
    function Lk(e) {
      {
        if (!ep(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (Ul(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var zu = 0, qm = 1, Mo = null, eS = !1, tS = !1;
    function S_(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    function Uk(e) {
      eS = !0, S_(e);
    }
    function E_() {
      eS && ju();
    }
    function ju() {
      if (!tS && Mo !== null) {
        tS = !0;
        var e = 0, t = Ra();
        try {
          var a = !0, l = Mo;
          for (bn(sr); e < l.length; e++) {
            var s = l[e];
            do
              s = s(a);
            while (s !== null);
          }
          Mo = null, eS = !1;
        } catch (p) {
          throw Mo !== null && (Mo = Mo.slice(e + 1)), Ic($c, ju), p;
        } finally {
          bn(t), tS = !1;
        }
      }
      return null;
    }
    var Vf = [], $f = 0, Zm = null, Km = 0, vi = [], mi = 0, Qs = null, Oo = 1, No = "";
    function Ak(e) {
      return Zs(), (e.flags & Kd) !== je;
    }
    function zk(e) {
      return Zs(), Km;
    }
    function jk() {
      var e = No, t = Oo, a = t & ~Fk(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Zs(), Vf[$f++] = Km, Vf[$f++] = Zm, Zm = e, Km = t;
    }
    function w_(e, t, a) {
      Zs(), vi[mi++] = Oo, vi[mi++] = No, vi[mi++] = Qs, Qs = e;
      var l = Oo, s = No, p = Xm(l) - 1, y = l & ~(1 << p), E = a + 1, w = Xm(t) + p;
      if (w > 30) {
        var x = p - p % 5, b = (1 << x) - 1, A = (y & b).toString(32), L = y >> x, V = p - x, $ = Xm(t) + V, Q = E << V, xe = Q | L, Fe = A + s;
        Oo = 1 << $ | xe, No = Fe;
      } else {
        var Le = E << p, vt = Le | y, ft = s;
        Oo = 1 << w | vt, No = ft;
      }
    }
    function nS(e) {
      Zs();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        qs(e, a), w_(e, a, l);
      }
    }
    function Xm(e) {
      return 32 - Zc(e);
    }
    function Fk(e) {
      return 1 << Xm(e) - 1;
    }
    function rS(e) {
      for (; e === Zm; )
        Zm = Vf[--$f], Vf[$f] = null, Km = Vf[--$f], Vf[$f] = null;
      for (; e === Qs; )
        Qs = vi[--mi], vi[mi] = null, No = vi[--mi], vi[mi] = null, Oo = vi[--mi], vi[mi] = null;
    }
    function Hk() {
      return Zs(), Qs !== null ? {
        id: Oo,
        overflow: No
      } : null;
    }
    function Pk(e, t) {
      Zs(), vi[mi++] = Oo, vi[mi++] = No, vi[mi++] = Qs, Oo = t.id, No = t.overflow, Qs = e;
    }
    function Zs() {
      Sr() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var gr = null, yi = null, Bi = !1, Ks = !1, Fu = null;
    function Yk() {
      Bi && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function __() {
      Ks = !0;
    }
    function Ik() {
      return Ks;
    }
    function Vk(e) {
      var t = e.stateNode.containerInfo;
      return yi = ok(t), gr = e, Bi = !0, Fu = null, Ks = !1, !0;
    }
    function $k(e, t, a) {
      return yi = uk(t), gr = e, Bi = !0, Fu = null, Ks = !1, a !== null && Pk(e, a), !0;
    }
    function x_(e, t) {
      switch (e.tag) {
        case O: {
          gk(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & ot) !== Ye;
          Ek(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ce: {
          var l = e.memoizedState;
          l.dehydrated !== null && Sk(l.dehydrated, t);
          break;
        }
      }
    }
    function C_(e, t) {
      x_(e, t);
      var a = GN();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Tt) : l.push(a);
    }
    function aS(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var l = t.type;
                t.pendingProps, wk(a, l);
                break;
              case z:
                var s = t.pendingProps;
                _k(a, s);
                break;
            }
            break;
          }
          case G: {
            var p = e.type, y = e.memoizedProps, E = e.stateNode;
            switch (t.tag) {
              case G: {
                var w = t.type, x = t.pendingProps, b = (e.mode & ot) !== Ye;
                Tk(
                  p,
                  y,
                  E,
                  w,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
              case z: {
                var A = t.pendingProps, L = (e.mode & ot) !== Ye;
                bk(
                  p,
                  y,
                  E,
                  A,
                  // TODO: Delete this argument when we remove the legacy root API.
                  L
                );
                break;
              }
            }
            break;
          }
          case ce: {
            var V = e.memoizedState, $ = V.dehydrated;
            if ($ !== null)
              switch (t.tag) {
                case G:
                  var Q = t.type;
                  t.pendingProps, xk($, Q);
                  break;
                case z:
                  var xe = t.pendingProps;
                  Ck($, xe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function T_(e, t) {
      t.flags = t.flags & ~_a | Vt, aS(e, t);
    }
    function b_(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var l = tk(t, a);
          return l !== null ? (e.stateNode = l, gr = e, yi = lk(l), !0) : !1;
        }
        case z: {
          var s = e.pendingProps, p = nk(t, s);
          return p !== null ? (e.stateNode = p, gr = e, yi = null, !0) : !1;
        }
        case ce: {
          var y = rk(t);
          if (y !== null) {
            var E = {
              dehydrated: y,
              treeContext: Hk(),
              retryLane: Pr
            };
            e.memoizedState = E;
            var w = QN(y);
            return w.return = e, e.child = w, gr = e, yi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function iS(e) {
      return (e.mode & ot) !== Ye && (e.flags & qe) === je;
    }
    function lS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function oS(e) {
      if (Bi) {
        var t = yi;
        if (!t) {
          iS(e) && (aS(gr, e), lS()), T_(gr, e), Bi = !1, gr = e;
          return;
        }
        var a = t;
        if (!b_(e, t)) {
          iS(e) && (aS(gr, e), lS()), t = Qp(a);
          var l = gr;
          if (!t || !b_(e, t)) {
            T_(gr, e), Bi = !1, gr = e;
            return;
          }
          C_(l, a);
        }
      }
    }
    function Bk(e, t, a) {
      var l = e.stateNode, s = !Ks, p = sk(l, e.type, e.memoizedProps, t, a, e, s);
      return e.updateQueue = p, p !== null;
    }
    function Wk(e) {
      var t = e.stateNode, a = e.memoizedProps, l = ck(t, a, e);
      if (l) {
        var s = gr;
        if (s !== null)
          switch (s.tag) {
            case O: {
              var p = s.stateNode.containerInfo, y = (s.mode & ot) !== Ye;
              mk(
                p,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
            case G: {
              var E = s.type, w = s.memoizedProps, x = s.stateNode, b = (s.mode & ot) !== Ye;
              yk(
                E,
                w,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
      }
      return l;
    }
    function Gk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      fk(a, e);
    }
    function Qk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return dk(a);
    }
    function R_(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== O && t.tag !== ce; )
        t = t.return;
      gr = t;
    }
    function Jm(e) {
      if (e !== gr)
        return !1;
      if (!Bi)
        return R_(e), Bi = !0, !1;
      if (e.tag !== O && (e.tag !== G || vk(e.type) && !I0(e.type, e.memoizedProps))) {
        var t = yi;
        if (t)
          if (iS(e))
            D_(e), lS();
          else
            for (; t; )
              C_(e, t), t = Qp(t);
      }
      return R_(e), e.tag === ce ? yi = Qk(e) : yi = gr ? Qp(e.stateNode) : null, !0;
    }
    function qk() {
      return Bi && yi !== null;
    }
    function D_(e) {
      for (var t = yi; t; )
        x_(e, t), t = Qp(t);
    }
    function Bf() {
      gr = null, yi = null, Bi = !1, Ks = !1;
    }
    function k_() {
      Fu !== null && (xC(Fu), Fu = null);
    }
    function Sr() {
      return Bi;
    }
    function uS(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    var Zk = c.ReactCurrentBatchConfig, Kk = null;
    function Xk() {
      return Zk.transition;
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
      var Jk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Xp = [], Jp = [], eh = [], th = [], nh = [], rh = [], Js = /* @__PURE__ */ new Set();
      Wi.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && Jp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && eh.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && th.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && nh.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && rh.push(e));
      }, Wi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(L) {
          e.add(et(L) || "Component"), Js.add(L.type);
        }), Xp = []);
        var t = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(L) {
          t.add(et(L) || "Component"), Js.add(L.type);
        }), Jp = []);
        var a = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(L) {
          a.add(et(L) || "Component"), Js.add(L.type);
        }), eh = []);
        var l = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(L) {
          l.add(et(L) || "Component"), Js.add(L.type);
        }), th = []);
        var s = /* @__PURE__ */ new Set();
        nh.length > 0 && (nh.forEach(function(L) {
          s.add(et(L) || "Component"), Js.add(L.type);
        }), nh = []);
        var p = /* @__PURE__ */ new Set();
        if (rh.length > 0 && (rh.forEach(function(L) {
          p.add(et(L) || "Component"), Js.add(L.type);
        }), rh = []), t.size > 0) {
          var y = Xs(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (l.size > 0) {
          var E = Xs(l);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, E);
        }
        if (p.size > 0) {
          var w = Xs(p);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (e.size > 0) {
          var x = Xs(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var b = Xs(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (s.size > 0) {
          var A = Xs(s);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var ey = /* @__PURE__ */ new Map(), M_ = /* @__PURE__ */ new Set();
      Wi.recordLegacyContextWarning = function(e, t) {
        var a = Jk(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!M_.has(e.type)) {
          var l = ey.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], ey.set(a, l)), l.push(e));
        }
      }, Wi.flushLegacyContextWarning = function() {
        ey.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(et(p) || "Component"), M_.add(p.type);
            });
            var s = Xs(l);
            try {
              Lt(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              xn();
            }
          }
        });
      }, Wi.discardPendingWarnings = function() {
        Xp = [], Jp = [], eh = [], th = [], nh = [], rh = [], ey = /* @__PURE__ */ new Map();
      };
    }
    function Gi(e, t) {
      if (e && e.defaultProps) {
        var a = st({}, t), l = e.defaultProps;
        for (var s in l)
          a[s] === void 0 && (a[s] = l[s]);
        return a;
      }
      return t;
    }
    var sS = Au(null), cS;
    cS = {};
    var ty = null, Wf = null, fS = null, ny = !1;
    function ry() {
      ty = null, Wf = null, fS = null, ny = !1;
    }
    function O_() {
      ny = !0;
    }
    function N_() {
      ny = !1;
    }
    function L_(e, t, a) {
      Vr(sS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cS;
    }
    function dS(e, t) {
      var a = sS.current;
      Ir(sS, t), e._currentValue = a;
    }
    function pS(e, t, a) {
      for (var l = e; l !== null; ) {
        var s = l.alternate;
        if (yo(l.childLanes, t) ? s !== null && !yo(s.childLanes, t) && (s.childLanes = nt(s.childLanes, t)) : (l.childLanes = nt(l.childLanes, t), s !== null && (s.childLanes = nt(s.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eM(e, t, a) {
      tM(e, t, a);
    }
    function tM(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var s = void 0, p = l.dependencies;
        if (p !== null) {
          s = l.child;
          for (var y = p.firstContext; y !== null; ) {
            if (y.context === t) {
              if (l.tag === R) {
                var E = Tn(a), w = Lo(Ht, E);
                w.tag = iy;
                var x = l.updateQueue;
                if (x !== null) {
                  var b = x.shared, A = b.pending;
                  A === null ? w.next = w : (w.next = A.next, A.next = w), b.pending = w;
                }
              }
              l.lanes = nt(l.lanes, a);
              var L = l.alternate;
              L !== null && (L.lanes = nt(L.lanes, a)), pS(l.return, a, e), p.lanes = nt(p.lanes, a);
              break;
            }
            y = y.next;
          }
        } else if (l.tag === K)
          s = l.type === e.type ? null : l.child;
        else if (l.tag === Qe) {
          var V = l.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = nt(V.lanes, a);
          var $ = V.alternate;
          $ !== null && ($.lanes = nt($.lanes, a)), pS(V, a, e), s = l.sibling;
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
            var Q = s.sibling;
            if (Q !== null) {
              Q.return = s.return, s = Q;
              break;
            }
            s = s.return;
          }
        l = s;
      }
    }
    function Gf(e, t) {
      ty = e, Wf = null, fS = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Yr(a.lanes, t) && yh(), a.firstContext = null);
      }
    }
    function Yn(e) {
      ny && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Wf === null) {
          if (ty === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Wf = a, ty.dependencies = {
            lanes: Z,
            firstContext: a
          };
        } else
          Wf = Wf.next = a;
      }
      return t;
    }
    var ec = null;
    function hS(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function nM() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var l = a.next, s = t.pending;
            if (s !== null) {
              var p = s.next;
              s.next = l, a.next = p;
            }
            t.pending = a;
          }
        }
        ec = null;
      }
    }
    function U_(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, hS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, ay(e, l);
    }
    function rM(e, t, a, l) {
      var s = t.interleaved;
      s === null ? (a.next = a, hS(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
    }
    function aM(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, hS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, ay(e, l);
    }
    function Na(e, t) {
      return ay(e, t);
    }
    var iM = ay;
    function ay(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (Vt | _a)) !== je && AC(e);
      for (var l = e, s = e.return; s !== null; )
        s.childLanes = nt(s.childLanes, t), a = s.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (s.flags & (Vt | _a)) !== je && AC(e), l = s, s = s.return;
      if (l.tag === O) {
        var p = l.stateNode;
        return p;
      } else
        return null;
    }
    var A_ = 0, z_ = 1, iy = 2, vS = 3, ly = !1, mS, oy;
    mS = !1, oy = null;
    function yS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Z
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function j_(e, t) {
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
    function Lo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: A_,
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
      if (oy === s && !mS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mS = !0), iN()) {
        var p = s.pending;
        return p === null ? t.next = t : (t.next = p.next, p.next = t), s.pending = t, iM(e, a);
      } else
        return aM(e, s, t, a);
    }
    function uy(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var s = l.shared;
        if (pp(a)) {
          var p = s.lanes;
          p = vp(p, e.pendingLanes);
          var y = nt(p, a);
          s.lanes = y, Su(e, y);
        }
      }
    }
    function gS(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var s = l.updateQueue;
        if (a === s) {
          var p = null, y = null, E = a.firstBaseUpdate;
          if (E !== null) {
            var w = E;
            do {
              var x = {
                eventTime: w.eventTime,
                lane: w.lane,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              };
              y === null ? p = y = x : (y.next = x, y = x), w = w.next;
            } while (w !== null);
            y === null ? p = y = t : (y.next = t, y = t);
          } else
            p = y = t;
          a = {
            baseState: s.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: y,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var b = a.lastBaseUpdate;
      b === null ? a.firstBaseUpdate = t : b.next = t, a.lastBaseUpdate = t;
    }
    function lM(e, t, a, l, s, p) {
      switch (a.tag) {
        case z_: {
          var y = a.payload;
          if (typeof y == "function") {
            O_();
            var E = y.call(p, l, s);
            {
              if (e.mode & tn) {
                Cn(!0);
                try {
                  y.call(p, l, s);
                } finally {
                  Cn(!1);
                }
              }
              N_();
            }
            return E;
          }
          return y;
        }
        case vS:
          e.flags = e.flags & ~zn | qe;
        case A_: {
          var w = a.payload, x;
          if (typeof w == "function") {
            O_(), x = w.call(p, l, s);
            {
              if (e.mode & tn) {
                Cn(!0);
                try {
                  w.call(p, l, s);
                } finally {
                  Cn(!1);
                }
              }
              N_();
            }
          } else
            x = w;
          return x == null ? l : st({}, l, x);
        }
        case iy:
          return ly = !0, l;
      }
      return l;
    }
    function sy(e, t, a, l) {
      var s = e.updateQueue;
      ly = !1, oy = s.shared;
      var p = s.firstBaseUpdate, y = s.lastBaseUpdate, E = s.shared.pending;
      if (E !== null) {
        s.shared.pending = null;
        var w = E, x = w.next;
        w.next = null, y === null ? p = x : y.next = x, y = w;
        var b = e.alternate;
        if (b !== null) {
          var A = b.updateQueue, L = A.lastBaseUpdate;
          L !== y && (L === null ? A.firstBaseUpdate = x : L.next = x, A.lastBaseUpdate = w);
        }
      }
      if (p !== null) {
        var V = s.baseState, $ = Z, Q = null, xe = null, Fe = null, Le = p;
        do {
          var vt = Le.lane, ft = Le.eventTime;
          if (yo(l, vt)) {
            if (Fe !== null) {
              var q = {
                eventTime: ft,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pt,
                tag: Le.tag,
                payload: Le.payload,
                callback: Le.callback,
                next: null
              };
              Fe = Fe.next = q;
            }
            V = lM(e, s, Le, V, t, a);
            var P = Le.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            Le.lane !== pt) {
              e.flags |= si;
              var le = s.effects;
              le === null ? s.effects = [Le] : le.push(Le);
            }
          } else {
            var H = {
              eventTime: ft,
              lane: vt,
              tag: Le.tag,
              payload: Le.payload,
              callback: Le.callback,
              next: null
            };
            Fe === null ? (xe = Fe = H, Q = V) : Fe = Fe.next = H, $ = nt($, vt);
          }
          if (Le = Le.next, Le === null) {
            if (E = s.shared.pending, E === null)
              break;
            var Ce = E, ye = Ce.next;
            Ce.next = null, Le = ye, s.lastBaseUpdate = Ce, s.shared.pending = null;
          }
        } while (!0);
        Fe === null && (Q = V), s.baseState = Q, s.firstBaseUpdate = xe, s.lastBaseUpdate = Fe;
        var Ge = s.shared.interleaved;
        if (Ge !== null) {
          var Je = Ge;
          do
            $ = nt($, Je.lane), Je = Je.next;
          while (Je !== Ge);
        } else
          p === null && (s.shared.lanes = Z);
        kh($), e.lanes = $, e.memoizedState = V;
      }
      oy = null;
    }
    function oM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function F_() {
      ly = !1;
    }
    function cy() {
      return ly;
    }
    function H_(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var s = 0; s < l.length; s++) {
          var p = l[s], y = p.callback;
          y !== null && (p.callback = null, oM(y, a));
        }
    }
    var SS = {}, P_ = new i.Component().refs, ES, wS, _S, xS, CS, Y_, fy, TS, bS, RS;
    {
      ES = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set(), RS = /* @__PURE__ */ new Set();
      var I_ = /* @__PURE__ */ new Set();
      fy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          I_.has(a) || (I_.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Y_ = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          CS.has(a) || (CS.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(SS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(SS);
    }
    function DS(e, t, a, l) {
      var s = e.memoizedState, p = a(l, s);
      {
        if (e.mode & tn) {
          Cn(!0);
          try {
            p = a(l, s);
          } finally {
            Cn(!1);
          }
        }
        Y_(t, p);
      }
      var y = p == null ? s : st({}, s, p);
      if (e.memoizedState = y, e.lanes === Z) {
        var E = e.updateQueue;
        E.baseState = y;
      }
    }
    var kS = {
      isMounted: aa,
      enqueueSetState: function(e, t, a) {
        var l = Ea(e), s = ca(), p = Gu(l), y = Lo(s, p);
        y.payload = t, a != null && (fy(a, "setState"), y.callback = a);
        var E = Hu(l, y, p);
        E !== null && (er(E, l, p, s), uy(E, l, p)), Cl(l, p);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Ea(e), s = ca(), p = Gu(l), y = Lo(s, p);
        y.tag = z_, y.payload = t, a != null && (fy(a, "replaceState"), y.callback = a);
        var E = Hu(l, y, p);
        E !== null && (er(E, l, p, s), uy(E, l, p)), Cl(l, p);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ea(e), l = ca(), s = Gu(a), p = Lo(l, s);
        p.tag = iy, t != null && (fy(t, "forceUpdate"), p.callback = t);
        var y = Hu(a, p, s);
        y !== null && (er(y, a, s, l), uy(y, a, s)), sp(a, s);
      }
    };
    function V_(e, t, a, l, s, p, y) {
      var E = e.stateNode;
      if (typeof E.shouldComponentUpdate == "function") {
        var w = E.shouldComponentUpdate(l, p, y);
        {
          if (e.mode & tn) {
            Cn(!0);
            try {
              w = E.shouldComponentUpdate(l, p, y);
            } finally {
              Cn(!1);
            }
          }
          w === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return w;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ae(a, l) || !Ae(s, p) : !0;
    }
    function uM(e, t, a) {
      var l = e.stateNode;
      {
        var s = jt(t) || "Component", p = l.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), l.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), l.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), l.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !bS.has(t) && (bS.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof l.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof l.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof l.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof l.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var y = l.props !== a;
        l.props !== void 0 && y && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), l.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !_S.has(t) && (_S.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof l.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof l.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var E = l.state;
        E && (typeof E != "object" || Un(E)) && m("%s.state: must be set to an object or null", s), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function $_(e, t) {
      t.updater = kS, e.stateNode = t, su(t, e), t._reactInternalInstance = SS;
    }
    function B_(e, t, a) {
      var l = !1, s = Xa, p = Xa, y = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === me && y._context === void 0
        );
        if (!E && !RS.has(t)) {
          RS.add(t);
          var w = "";
          y === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? w = " However, it is set to a " + typeof y + "." : y.$$typeof === ae ? w = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", w);
        }
      }
      if (typeof y == "object" && y !== null)
        p = Yn(y);
      else {
        s = Yf(e, t, !0);
        var x = t.contextTypes;
        l = x != null, p = l ? If(e, s) : Xa;
      }
      var b = new t(a, p);
      if (e.mode & tn) {
        Cn(!0);
        try {
          b = new t(a, p);
        } finally {
          Cn(!1);
        }
      }
      var A = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      $_(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && A === null) {
          var L = jt(t) || "Component";
          wS.has(L) || (wS.add(L), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, b.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var V = null, $ = null, Q = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), V !== null || $ !== null || Q !== null) {
            var xe = jt(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            xS.has(xe) || (xS.add(xe), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, Fe, V !== null ? `
  ` + V : "", $ !== null ? `
  ` + $ : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return l && v_(e, s, p), b;
    }
    function sM(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), kS.enqueueReplaceState(t, t.state, null));
    }
    function W_(e, t, a, l) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== s) {
        {
          var p = et(e) || "Component";
          ES.has(p) || (ES.add(p), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        kS.enqueueReplaceState(t, t.state, null);
      }
    }
    function MS(e, t, a, l) {
      uM(e, t, a);
      var s = e.stateNode;
      s.props = a, s.state = e.memoizedState, s.refs = P_, yS(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        s.context = Yn(p);
      else {
        var y = Yf(e, t, !0);
        s.context = If(e, y);
      }
      {
        if (s.state === a) {
          var E = jt(t) || "Component";
          TS.has(E) || (TS.add(E), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", E));
        }
        e.mode & tn && Wi.recordLegacyContextWarning(e, s), Wi.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      if (typeof w == "function" && (DS(e, t, w, a), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (sM(e, s), sy(e, a, s, l), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var x = tt;
        x |= Ar, (e.mode & Ta) !== Ye && (x |= zr), e.flags |= x;
      }
    }
    function cM(e, t, a, l) {
      var s = e.stateNode, p = e.memoizedProps;
      s.props = p;
      var y = s.context, E = t.contextType, w = Xa;
      if (typeof E == "object" && E !== null)
        w = Yn(E);
      else {
        var x = Yf(e, t, !0);
        w = If(e, x);
      }
      var b = t.getDerivedStateFromProps, A = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== a || y !== w) && W_(e, s, a, w), F_();
      var L = e.memoizedState, V = s.state = L;
      if (sy(e, a, s, l), V = e.memoizedState, p === a && L === V && !Wm() && !cy()) {
        if (typeof s.componentDidMount == "function") {
          var $ = tt;
          $ |= Ar, (e.mode & Ta) !== Ye && ($ |= zr), e.flags |= $;
        }
        return !1;
      }
      typeof b == "function" && (DS(e, t, b, a), V = e.memoizedState);
      var Q = cy() || V_(e, t, p, a, L, V, w);
      if (Q) {
        if (!A && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var xe = tt;
          xe |= Ar, (e.mode & Ta) !== Ye && (xe |= zr), e.flags |= xe;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var Fe = tt;
          Fe |= Ar, (e.mode & Ta) !== Ye && (Fe |= zr), e.flags |= Fe;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return s.props = a, s.state = V, s.context = w, Q;
    }
    function fM(e, t, a, l, s) {
      var p = t.stateNode;
      j_(e, t);
      var y = t.memoizedProps, E = t.type === t.elementType ? y : Gi(t.type, y);
      p.props = E;
      var w = t.pendingProps, x = p.context, b = a.contextType, A = Xa;
      if (typeof b == "object" && b !== null)
        A = Yn(b);
      else {
        var L = Yf(t, a, !0);
        A = If(t, L);
      }
      var V = a.getDerivedStateFromProps, $ = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !$ && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (y !== w || x !== A) && W_(t, p, l, A), F_();
      var Q = t.memoizedState, xe = p.state = Q;
      if (sy(t, l, p, s), xe = t.memoizedState, y === w && Q === xe && !Wm() && !cy() && !Ue)
        return typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= tt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= wa), !1;
      typeof V == "function" && (DS(t, a, V, l), xe = t.memoizedState);
      var Fe = cy() || V_(t, a, E, l, Q, xe, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ue;
      return Fe ? (!$ && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, xe, A), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, xe, A)), typeof p.componentDidUpdate == "function" && (t.flags |= tt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= wa)) : (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= tt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= wa), t.memoizedProps = l, t.memoizedState = xe), p.props = l, p.state = xe, p.context = A, Fe;
    }
    var OS, NS, LS, US, AS, G_ = function(e, t) {
    };
    OS = !1, NS = !1, LS = {}, US = {}, AS = {}, G_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        US[a] || (US[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ah(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & tn || vr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var s = et(e) || "Component";
          LS[s] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), LS[s] = !0);
        }
        if (a._owner) {
          var p = a._owner, y;
          if (p) {
            var E = p;
            if (E.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = E.stateNode;
          }
          if (!y)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var w = y;
          bi(l, "ref");
          var x = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var b = function(A) {
            var L = w.refs;
            L === P_ && (L = w.refs = {}), A === null ? delete L[x] : L[x] = A;
          };
          return b._stringRef = x, b;
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
    function dy(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function py(e) {
      {
        var t = et(e) || "Component";
        if (AS[t])
          return;
        AS[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Q_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function q_(e) {
      function t(H, q) {
        if (e) {
          var P = H.deletions;
          P === null ? (H.deletions = [q], H.flags |= Tt) : P.push(q);
        }
      }
      function a(H, q) {
        if (!e)
          return null;
        for (var P = q; P !== null; )
          t(H, P), P = P.sibling;
        return null;
      }
      function l(H, q) {
        for (var P = /* @__PURE__ */ new Map(), le = q; le !== null; )
          le.key !== null ? P.set(le.key, le) : P.set(le.index, le), le = le.sibling;
        return P;
      }
      function s(H, q) {
        var P = uc(H, q);
        return P.index = 0, P.sibling = null, P;
      }
      function p(H, q, P) {
        if (H.index = P, !e)
          return H.flags |= Kd, q;
        var le = H.alternate;
        if (le !== null) {
          var Ce = le.index;
          return Ce < q ? (H.flags |= Vt, q) : Ce;
        } else
          return H.flags |= Vt, q;
      }
      function y(H) {
        return e && H.alternate === null && (H.flags |= Vt), H;
      }
      function E(H, q, P, le) {
        if (q === null || q.tag !== z) {
          var Ce = uE(P, H.mode, le);
          return Ce.return = H, Ce;
        } else {
          var ye = s(q, P);
          return ye.return = H, ye;
        }
      }
      function w(H, q, P, le) {
        var Ce = P.type;
        if (Ce === Va)
          return b(H, q, P.props.children, le, P.key);
        if (q !== null && (q.elementType === Ce || // Keep this check inline so it only runs on the false path:
        HC(q, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ve && Q_(Ce) === q.type)) {
          var ye = s(q, P.props);
          return ye.ref = ah(H, q, P), ye.return = H, ye._debugSource = P._source, ye._debugOwner = P._owner, ye;
        }
        var Ge = oE(P, H.mode, le);
        return Ge.ref = ah(H, q, P), Ge.return = H, Ge;
      }
      function x(H, q, P, le) {
        if (q === null || q.tag !== j || q.stateNode.containerInfo !== P.containerInfo || q.stateNode.implementation !== P.implementation) {
          var Ce = sE(P, H.mode, le);
          return Ce.return = H, Ce;
        } else {
          var ye = s(q, P.children || []);
          return ye.return = H, ye;
        }
      }
      function b(H, q, P, le, Ce) {
        if (q === null || q.tag !== J) {
          var ye = qu(P, H.mode, le, Ce);
          return ye.return = H, ye;
        } else {
          var Ge = s(q, P);
          return Ge.return = H, Ge;
        }
      }
      function A(H, q, P) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var le = uE("" + q, H.mode, P);
          return le.return = H, le;
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case ll: {
              var Ce = oE(q, H.mode, P);
              return Ce.ref = ah(H, null, q), Ce.return = H, Ce;
            }
            case ea: {
              var ye = sE(q, H.mode, P);
              return ye.return = H, ye;
            }
            case Ve: {
              var Ge = q._payload, Je = q._init;
              return A(H, Je(Ge), P);
            }
          }
          if (Un(q) || Ri(q)) {
            var At = qu(q, H.mode, P, null);
            return At.return = H, At;
          }
          dy(H, q);
        }
        return typeof q == "function" && py(H), null;
      }
      function L(H, q, P, le) {
        var Ce = q !== null ? q.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Ce !== null ? null : E(H, q, "" + P, le);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ll:
              return P.key === Ce ? w(H, q, P, le) : null;
            case ea:
              return P.key === Ce ? x(H, q, P, le) : null;
            case Ve: {
              var ye = P._payload, Ge = P._init;
              return L(H, q, Ge(ye), le);
            }
          }
          if (Un(P) || Ri(P))
            return Ce !== null ? null : b(H, q, P, le, null);
          dy(H, P);
        }
        return typeof P == "function" && py(H), null;
      }
      function V(H, q, P, le, Ce) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var ye = H.get(P) || null;
          return E(q, ye, "" + le, Ce);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case ll: {
              var Ge = H.get(le.key === null ? P : le.key) || null;
              return w(q, Ge, le, Ce);
            }
            case ea: {
              var Je = H.get(le.key === null ? P : le.key) || null;
              return x(q, Je, le, Ce);
            }
            case Ve:
              var At = le._payload, wt = le._init;
              return V(H, q, P, wt(At), Ce);
          }
          if (Un(le) || Ri(le)) {
            var kn = H.get(P) || null;
            return b(q, kn, le, Ce, null);
          }
          dy(q, le);
        }
        return typeof le == "function" && py(q), null;
      }
      function $(H, q, P) {
        {
          if (typeof H != "object" || H === null)
            return q;
          switch (H.$$typeof) {
            case ll:
            case ea:
              G_(H, P);
              var le = H.key;
              if (typeof le != "string")
                break;
              if (q === null) {
                q = /* @__PURE__ */ new Set(), q.add(le);
                break;
              }
              if (!q.has(le)) {
                q.add(le);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case Ve:
              var Ce = H._payload, ye = H._init;
              $(ye(Ce), q, P);
              break;
          }
        }
        return q;
      }
      function Q(H, q, P, le) {
        for (var Ce = null, ye = 0; ye < P.length; ye++) {
          var Ge = P[ye];
          Ce = $(Ge, Ce, H);
        }
        for (var Je = null, At = null, wt = q, kn = 0, _t = 0, wn = null; wt !== null && _t < P.length; _t++) {
          wt.index > _t ? (wn = wt, wt = null) : wn = wt.sibling;
          var Br = L(H, wt, P[_t], le);
          if (Br === null) {
            wt === null && (wt = wn);
            break;
          }
          e && wt && Br.alternate === null && t(H, wt), kn = p(Br, kn, _t), At === null ? Je = Br : At.sibling = Br, At = Br, wt = wn;
        }
        if (_t === P.length) {
          if (a(H, wt), Sr()) {
            var br = _t;
            qs(H, br);
          }
          return Je;
        }
        if (wt === null) {
          for (; _t < P.length; _t++) {
            var ei = A(H, P[_t], le);
            ei !== null && (kn = p(ei, kn, _t), At === null ? Je = ei : At.sibling = ei, At = ei);
          }
          if (Sr()) {
            var fa = _t;
            qs(H, fa);
          }
          return Je;
        }
        for (var da = l(H, wt); _t < P.length; _t++) {
          var Wr = V(da, H, _t, P[_t], le);
          Wr !== null && (e && Wr.alternate !== null && da.delete(Wr.key === null ? _t : Wr.key), kn = p(Wr, kn, _t), At === null ? Je = Wr : At.sibling = Wr, At = Wr);
        }
        if (e && da.forEach(function(cd) {
          return t(H, cd);
        }), Sr()) {
          var Ho = _t;
          qs(H, Ho);
        }
        return Je;
      }
      function xe(H, q, P, le) {
        var Ce = Ri(P);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (NS || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), NS = !0), P.entries === Ce && (OS || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), OS = !0);
          var ye = Ce.call(P);
          if (ye)
            for (var Ge = null, Je = ye.next(); !Je.done; Je = ye.next()) {
              var At = Je.value;
              Ge = $(At, Ge, H);
            }
        }
        var wt = Ce.call(P);
        if (wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kn = null, _t = null, wn = q, Br = 0, br = 0, ei = null, fa = wt.next(); wn !== null && !fa.done; br++, fa = wt.next()) {
          wn.index > br ? (ei = wn, wn = null) : ei = wn.sibling;
          var da = L(H, wn, fa.value, le);
          if (da === null) {
            wn === null && (wn = ei);
            break;
          }
          e && wn && da.alternate === null && t(H, wn), Br = p(da, Br, br), _t === null ? kn = da : _t.sibling = da, _t = da, wn = ei;
        }
        if (fa.done) {
          if (a(H, wn), Sr()) {
            var Wr = br;
            qs(H, Wr);
          }
          return kn;
        }
        if (wn === null) {
          for (; !fa.done; br++, fa = wt.next()) {
            var Ho = A(H, fa.value, le);
            Ho !== null && (Br = p(Ho, Br, br), _t === null ? kn = Ho : _t.sibling = Ho, _t = Ho);
          }
          if (Sr()) {
            var cd = br;
            qs(H, cd);
          }
          return kn;
        }
        for (var Uh = l(H, wn); !fa.done; br++, fa = wt.next()) {
          var Il = V(Uh, H, br, fa.value, le);
          Il !== null && (e && Il.alternate !== null && Uh.delete(Il.key === null ? br : Il.key), Br = p(Il, Br, br), _t === null ? kn = Il : _t.sibling = Il, _t = Il);
        }
        if (e && Uh.forEach(function(TL) {
          return t(H, TL);
        }), Sr()) {
          var CL = br;
          qs(H, CL);
        }
        return kn;
      }
      function Fe(H, q, P, le) {
        if (q !== null && q.tag === z) {
          a(H, q.sibling);
          var Ce = s(q, P);
          return Ce.return = H, Ce;
        }
        a(H, q);
        var ye = uE(P, H.mode, le);
        return ye.return = H, ye;
      }
      function Le(H, q, P, le) {
        for (var Ce = P.key, ye = q; ye !== null; ) {
          if (ye.key === Ce) {
            var Ge = P.type;
            if (Ge === Va) {
              if (ye.tag === J) {
                a(H, ye.sibling);
                var Je = s(ye, P.props.children);
                return Je.return = H, Je._debugSource = P._source, Je._debugOwner = P._owner, Je;
              }
            } else if (ye.elementType === Ge || // Keep this check inline so it only runs on the false path:
            HC(ye, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === Ve && Q_(Ge) === ye.type) {
              a(H, ye.sibling);
              var At = s(ye, P.props);
              return At.ref = ah(H, ye, P), At.return = H, At._debugSource = P._source, At._debugOwner = P._owner, At;
            }
            a(H, ye);
            break;
          } else
            t(H, ye);
          ye = ye.sibling;
        }
        if (P.type === Va) {
          var wt = qu(P.props.children, H.mode, le, P.key);
          return wt.return = H, wt;
        } else {
          var kn = oE(P, H.mode, le);
          return kn.ref = ah(H, q, P), kn.return = H, kn;
        }
      }
      function vt(H, q, P, le) {
        for (var Ce = P.key, ye = q; ye !== null; ) {
          if (ye.key === Ce)
            if (ye.tag === j && ye.stateNode.containerInfo === P.containerInfo && ye.stateNode.implementation === P.implementation) {
              a(H, ye.sibling);
              var Ge = s(ye, P.children || []);
              return Ge.return = H, Ge;
            } else {
              a(H, ye);
              break;
            }
          else
            t(H, ye);
          ye = ye.sibling;
        }
        var Je = sE(P, H.mode, le);
        return Je.return = H, Je;
      }
      function ft(H, q, P, le) {
        var Ce = typeof P == "object" && P !== null && P.type === Va && P.key === null;
        if (Ce && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ll:
              return y(Le(H, q, P, le));
            case ea:
              return y(vt(H, q, P, le));
            case Ve:
              var ye = P._payload, Ge = P._init;
              return ft(H, q, Ge(ye), le);
          }
          if (Un(P))
            return Q(H, q, P, le);
          if (Ri(P))
            return xe(H, q, P, le);
          dy(H, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? y(Fe(H, q, "" + P, le)) : (typeof P == "function" && py(H), a(H, q));
      }
      return ft;
    }
    var Qf = q_(!0), Z_ = q_(!1);
    function dM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = uc(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = uc(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function pM(e, t) {
      for (var a = e.child; a !== null; )
        IN(a, t), a = a.sibling;
    }
    var ih = {}, Pu = Au(ih), lh = Au(ih), hy = Au(ih);
    function vy(e) {
      if (e === ih)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function K_() {
      var e = vy(hy.current);
      return e;
    }
    function zS(e, t) {
      Vr(hy, t, e), Vr(lh, e, e), Vr(Pu, ih, e);
      var a = RD(t);
      Ir(Pu, e), Vr(Pu, a, e);
    }
    function qf(e) {
      Ir(Pu, e), Ir(lh, e), Ir(hy, e);
    }
    function jS() {
      var e = vy(Pu.current);
      return e;
    }
    function X_(e) {
      vy(hy.current);
      var t = vy(Pu.current), a = DD(t, e.type);
      t !== a && (Vr(lh, e, e), Vr(Pu, a, e));
    }
    function FS(e) {
      lh.current === e && (Ir(Pu, e), Ir(lh, e));
    }
    var hM = 0, J_ = 1, ex = 1, oh = 2, Qi = Au(hM);
    function HS(e, t) {
      return (e & t) !== 0;
    }
    function Zf(e) {
      return e & J_;
    }
    function PS(e, t) {
      return e & J_ | t;
    }
    function vM(e, t) {
      return e | t;
    }
    function Yu(e, t) {
      Vr(Qi, t, e);
    }
    function Kf(e) {
      Ir(Qi, e);
    }
    function mM(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function my(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || c_(l) || W0(l))
              return t;
          }
        } else if (t.tag === it && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & qe) !== je;
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
    var La = (
      /*   */
      0
    ), Gn = (
      /* */
      1
    ), Al = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), Er = (
      /*   */
      8
    ), YS = [];
    function IS() {
      for (var e = 0; e < YS.length; e++) {
        var t = YS[e];
        t._workInProgressVersionPrimary = null;
      }
      YS.length = 0;
    }
    function yM(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Ee = c.ReactCurrentDispatcher, uh = c.ReactCurrentBatchConfig, VS, Xf;
    VS = /* @__PURE__ */ new Set();
    var tc = Z, Ut = null, qn = null, Zn = null, yy = !1, sh = !1, ch = 0, gM = 0, SM = 25, X = null, gi = null, Iu = -1, $S = !1;
    function Rt() {
      {
        var e = X;
        gi === null ? gi = [e] : gi.push(e);
      }
    }
    function pe() {
      {
        var e = X;
        gi !== null && (Iu++, gi[Iu] !== e && EM(e));
      }
    }
    function Jf(e) {
      e != null && !Un(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
    }
    function EM(e) {
      {
        var t = et(Ut);
        if (!VS.has(t) && (VS.add(t), gi !== null)) {
          for (var a = "", l = 30, s = 0; s <= Iu; s++) {
            for (var p = gi[s], y = s === Iu ? e : p, E = s + 1 + ". " + p; E.length < l; )
              E += " ";
            E += y + `
`, a += E;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function $r() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function BS(e, t) {
      if ($S)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", X), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, X, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!De(e[a], t[a]))
          return !1;
      return !0;
    }
    function ed(e, t, a, l, s, p) {
      tc = p, Ut = t, gi = e !== null ? e._debugHookTypes : null, Iu = -1, $S = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Z, e !== null && e.memoizedState !== null ? Ee.current = _x : gi !== null ? Ee.current = wx : Ee.current = Ex;
      var y = a(l, s);
      if (sh) {
        var E = 0;
        do {
          if (sh = !1, ch = 0, E >= SM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          E += 1, $S = !1, qn = null, Zn = null, t.updateQueue = null, Iu = -1, Ee.current = xx, y = a(l, s);
        } while (sh);
      }
      Ee.current = My, t._debugHookTypes = gi;
      var w = qn !== null && qn.next !== null;
      if (tc = Z, Ut = null, qn = null, Zn = null, X = null, gi = null, Iu = -1, e !== null && (e.flags & $n) !== (t.flags & $n) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== Ye && m("Internal React error: Expected static flag was missing. Please notify the React team."), yy = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function td() {
      var e = ch !== 0;
      return ch = 0, e;
    }
    function tx(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ye ? t.flags &= ~(lo | zr | Kt | tt) : t.flags &= ~(Kt | tt), e.lanes = gu(e.lanes, a);
    }
    function nx() {
      if (Ee.current = My, yy) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        yy = !1;
      }
      tc = Z, Ut = null, qn = null, Zn = null, gi = null, Iu = -1, X = null, vx = !1, sh = !1, ch = 0;
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
    function Si() {
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
    function rx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function WS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function GS(e, t, a) {
      var l = zl(), s;
      a !== void 0 ? s = a(t) : s = t, l.memoizedState = l.baseState = s;
      var p = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      };
      l.queue = p;
      var y = p.dispatch = CM.bind(null, Ut, p);
      return [l.memoizedState, y];
    }
    function QS(e, t, a) {
      var l = Si(), s = l.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var p = qn, y = p.baseQueue, E = s.pending;
      if (E !== null) {
        if (y !== null) {
          var w = y.next, x = E.next;
          y.next = x, E.next = w;
        }
        p.baseQueue !== y && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = y = E, s.pending = null;
      }
      if (y !== null) {
        var b = y.next, A = p.baseState, L = null, V = null, $ = null, Q = b;
        do {
          var xe = Q.lane;
          if (yo(tc, xe)) {
            if ($ !== null) {
              var Le = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pt,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              $ = $.next = Le;
            }
            if (Q.hasEagerState)
              A = Q.eagerState;
            else {
              var vt = Q.action;
              A = e(A, vt);
            }
          } else {
            var Fe = {
              lane: xe,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            $ === null ? (V = $ = Fe, L = A) : $ = $.next = Fe, Ut.lanes = nt(Ut.lanes, xe), kh(xe);
          }
          Q = Q.next;
        } while (Q !== null && Q !== b);
        $ === null ? L = A : $.next = V, De(A, l.memoizedState) || yh(), l.memoizedState = A, l.baseState = L, l.baseQueue = $, s.lastRenderedState = A;
      }
      var ft = s.interleaved;
      if (ft !== null) {
        var H = ft;
        do {
          var q = H.lane;
          Ut.lanes = nt(Ut.lanes, q), kh(q), H = H.next;
        } while (H !== ft);
      } else
        y === null && (s.lanes = Z);
      var P = s.dispatch;
      return [l.memoizedState, P];
    }
    function qS(e, t, a) {
      var l = Si(), s = l.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var p = s.dispatch, y = s.pending, E = l.memoizedState;
      if (y !== null) {
        s.pending = null;
        var w = y.next, x = w;
        do {
          var b = x.action;
          E = e(E, b), x = x.next;
        } while (x !== w);
        De(E, l.memoizedState) || yh(), l.memoizedState = E, l.baseQueue === null && (l.baseState = E), s.lastRenderedState = E;
      }
      return [E, p];
    }
    function T3(e, t, a) {
    }
    function b3(e, t, a) {
    }
    function ZS(e, t, a) {
      var l = Ut, s = zl(), p, y = Sr();
      if (y) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        p = a(), Xf || p !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Xf = !0);
      } else {
        if (p = t(), !Xf) {
          var E = t();
          De(p, E) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Xf = !0);
        }
        var w = Qy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(w, tc) || ax(l, t, p);
      }
      s.memoizedState = p;
      var x = {
        value: p,
        getSnapshot: t
      };
      return s.queue = x, _y(lx.bind(null, l, x, e), [e]), l.flags |= Kt, fh(Gn | Er, ix.bind(null, l, x, p, t), void 0, null), p;
    }
    function gy(e, t, a) {
      var l = Ut, s = Si(), p = t();
      if (!Xf) {
        var y = t();
        De(p, y) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Xf = !0);
      }
      var E = s.memoizedState, w = !De(E, p);
      w && (s.memoizedState = p, yh());
      var x = s.queue;
      if (ph(lx.bind(null, l, x, e), [e]), x.getSnapshot !== t || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zn !== null && Zn.memoizedState.tag & Gn) {
        l.flags |= Kt, fh(Gn | Er, ix.bind(null, l, x, p, t), void 0, null);
        var b = Qy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(b, tc) || ax(l, t, p);
      }
      return p;
    }
    function ax(e, t, a) {
      e.flags |= xs;
      var l = {
        getSnapshot: t,
        value: a
      }, s = Ut.updateQueue;
      if (s === null)
        s = rx(), Ut.updateQueue = s, s.stores = [l];
      else {
        var p = s.stores;
        p === null ? s.stores = [l] : p.push(l);
      }
    }
    function ix(e, t, a, l) {
      t.value = a, t.getSnapshot = l, ox(t) && ux(e);
    }
    function lx(e, t, a) {
      var l = function() {
        ox(t) && ux(e);
      };
      return a(l);
    }
    function ox(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !De(a, l);
      } catch {
        return !0;
      }
    }
    function ux(e) {
      var t = Na(e, We);
      t !== null && er(t, e, We, Ht);
    }
    function Sy(e) {
      var t = zl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: WS,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = TM.bind(null, Ut, a);
      return [t.memoizedState, l];
    }
    function KS(e) {
      return QS(WS);
    }
    function XS(e) {
      return qS(WS);
    }
    function fh(e, t, a, l) {
      var s = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, p = Ut.updateQueue;
      if (p === null)
        p = rx(), Ut.updateQueue = p, p.lastEffect = s.next = s;
      else {
        var y = p.lastEffect;
        if (y === null)
          p.lastEffect = s.next = s;
        else {
          var E = y.next;
          y.next = s, s.next = E, p.lastEffect = s;
        }
      }
      return s;
    }
    function JS(e) {
      var t = zl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ey(e) {
      var t = Si();
      return t.memoizedState;
    }
    function dh(e, t, a, l) {
      var s = zl(), p = l === void 0 ? null : l;
      Ut.flags |= e, s.memoizedState = fh(Gn | t, a, void 0, p);
    }
    function wy(e, t, a, l) {
      var s = Si(), p = l === void 0 ? null : l, y = void 0;
      if (qn !== null) {
        var E = qn.memoizedState;
        if (y = E.destroy, p !== null) {
          var w = E.deps;
          if (BS(p, w)) {
            s.memoizedState = fh(t, a, y, p);
            return;
          }
        }
      }
      Ut.flags |= e, s.memoizedState = fh(Gn | t, a, y, p);
    }
    function _y(e, t) {
      return (Ut.mode & Ta) !== Ye ? dh(lo | Kt | gl, Er, e, t) : dh(Kt | gl, Er, e, t);
    }
    function ph(e, t) {
      return wy(Kt, Er, e, t);
    }
    function e1(e, t) {
      return dh(tt, Al, e, t);
    }
    function xy(e, t) {
      return wy(tt, Al, e, t);
    }
    function t1(e, t) {
      var a = tt;
      return a |= Ar, (Ut.mode & Ta) !== Ye && (a |= zr), dh(a, Qn, e, t);
    }
    function Cy(e, t) {
      return wy(tt, Qn, e, t);
    }
    function sx(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var p = e();
        return s.current = p, function() {
          s.current = null;
        };
      }
    }
    function n1(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, s = tt;
      return s |= Ar, (Ut.mode & Ta) !== Ye && (s |= zr), dh(s, Qn, sx.bind(null, t, e), l);
    }
    function Ty(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return wy(tt, Qn, sx.bind(null, t, e), l);
    }
    function wM(e, t) {
    }
    var by = wM;
    function r1(e, t) {
      var a = zl(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function Ry(e, t) {
      var a = Si(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var p = s[1];
        if (BS(l, p))
          return s[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function a1(e, t) {
      var a = zl(), l = t === void 0 ? null : t, s = e();
      return a.memoizedState = [s, l], s;
    }
    function Dy(e, t) {
      var a = Si(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var p = s[1];
        if (BS(l, p))
          return s[0];
      }
      var y = e();
      return a.memoizedState = [y, l], y;
    }
    function i1(e) {
      var t = zl();
      return t.memoizedState = e, e;
    }
    function cx(e) {
      var t = Si(), a = qn, l = a.memoizedState;
      return dx(t, l, e);
    }
    function fx(e) {
      var t = Si();
      if (qn === null)
        return t.memoizedState = e, e;
      var a = qn.memoizedState;
      return dx(t, a, e);
    }
    function dx(e, t, a) {
      var l = !f0(tc);
      if (l) {
        if (!De(a, t)) {
          var s = hp();
          Ut.lanes = nt(Ut.lanes, s), kh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, yh()), e.memoizedState = a, a;
    }
    function _M(e, t, a) {
      var l = Ra();
      bn(cr(l, Wn)), e(!0);
      var s = uh.transition;
      uh.transition = {};
      var p = uh.transition;
      uh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bn(l), uh.transition = s, s === null && p._updatedFibers) {
          var y = p._updatedFibers.size;
          y > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
        }
      }
    }
    function l1() {
      var e = Sy(!1), t = e[0], a = e[1], l = _M.bind(null, a), s = zl();
      return s.memoizedState = l, [t, l];
    }
    function px() {
      var e = KS(), t = e[0], a = Si(), l = a.memoizedState;
      return [t, l];
    }
    function hx() {
      var e = XS(), t = e[0], a = Si(), l = a.memoizedState;
      return [t, l];
    }
    var vx = !1;
    function xM() {
      return vx;
    }
    function o1() {
      var e = zl(), t = Qy(), a = t.identifierPrefix, l;
      if (Sr()) {
        var s = jk();
        l = ":" + a + "R" + s;
        var p = ch++;
        p > 0 && (l += "H" + p.toString(32)), l += ":";
      } else {
        var y = gM++;
        l = ":" + a + "r" + y.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function ky() {
      var e = Si(), t = e.memoizedState;
      return t;
    }
    function CM(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gu(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (mx(e))
        yx(t, s);
      else {
        var p = U_(e, t, s, l);
        if (p !== null) {
          var y = ca();
          er(p, e, l, y), gx(p, t, l);
        }
      }
      Sx(e, l);
    }
    function TM(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Gu(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (mx(e))
        yx(t, s);
      else {
        var p = e.alternate;
        if (e.lanes === Z && (p === null || p.lanes === Z)) {
          var y = t.lastRenderedReducer;
          if (y !== null) {
            var E;
            E = Ee.current, Ee.current = qi;
            try {
              var w = t.lastRenderedState, x = y(w, a);
              if (s.hasEagerState = !0, s.eagerState = x, De(x, w)) {
                rM(e, t, s, l);
                return;
              }
            } catch {
            } finally {
              Ee.current = E;
            }
          }
        }
        var b = U_(e, t, s, l);
        if (b !== null) {
          var A = ca();
          er(b, e, l, A), gx(b, t, l);
        }
      }
      Sx(e, l);
    }
    function mx(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function yx(e, t) {
      sh = yy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function gx(e, t, a) {
      if (pp(a)) {
        var l = t.lanes;
        l = vp(l, e.pendingLanes);
        var s = nt(l, a);
        t.lanes = s, Su(e, s);
      }
    }
    function Sx(e, t, a) {
      Cl(e, t);
    }
    var My = {
      readContext: Yn,
      useCallback: $r,
      useContext: $r,
      useEffect: $r,
      useImperativeHandle: $r,
      useInsertionEffect: $r,
      useLayoutEffect: $r,
      useMemo: $r,
      useReducer: $r,
      useRef: $r,
      useState: $r,
      useDebugValue: $r,
      useDeferredValue: $r,
      useTransition: $r,
      useMutableSource: $r,
      useSyncExternalStore: $r,
      useId: $r,
      unstable_isNewReconciler: fe
    }, Ex = null, wx = null, _x = null, xx = null, jl = null, qi = null, Oy = null;
    {
      var u1 = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Ex = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Rt(), Jf(t), r1(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Rt(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Rt(), Jf(t), _y(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Rt(), Jf(a), n1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Rt(), Jf(t), e1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Rt(), Jf(t), t1(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Rt(), Jf(t);
          var a = Ee.current;
          Ee.current = jl;
          try {
            return a1(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Rt();
          var l = Ee.current;
          Ee.current = jl;
          try {
            return GS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Rt(), JS(e);
        },
        useState: function(e) {
          X = "useState", Rt();
          var t = Ee.current;
          Ee.current = jl;
          try {
            return Sy(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Rt(), i1(e);
        },
        useTransition: function() {
          return X = "useTransition", Rt(), l1();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Rt(), ZS(e, t, a);
        },
        useId: function() {
          return X = "useId", Rt(), o1();
        },
        unstable_isNewReconciler: fe
      }, wx = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", pe(), r1(e, t);
        },
        useContext: function(e) {
          return X = "useContext", pe(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", pe(), _y(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", pe(), n1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", pe(), e1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", pe(), t1(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", pe();
          var a = Ee.current;
          Ee.current = jl;
          try {
            return a1(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", pe();
          var l = Ee.current;
          Ee.current = jl;
          try {
            return GS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", pe(), JS(e);
        },
        useState: function(e) {
          X = "useState", pe();
          var t = Ee.current;
          Ee.current = jl;
          try {
            return Sy(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", pe(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", pe(), i1(e);
        },
        useTransition: function() {
          return X = "useTransition", pe(), l1();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", pe(), ZS(e, t, a);
        },
        useId: function() {
          return X = "useId", pe(), o1();
        },
        unstable_isNewReconciler: fe
      }, _x = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", pe(), Ry(e, t);
        },
        useContext: function(e) {
          return X = "useContext", pe(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", pe(), ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", pe(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", pe(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", pe(), Cy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", pe();
          var a = Ee.current;
          Ee.current = qi;
          try {
            return Dy(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", pe();
          var l = Ee.current;
          Ee.current = qi;
          try {
            return QS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", pe(), Ey();
        },
        useState: function(e) {
          X = "useState", pe();
          var t = Ee.current;
          Ee.current = qi;
          try {
            return KS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", pe(), by();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", pe(), cx(e);
        },
        useTransition: function() {
          return X = "useTransition", pe(), px();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", pe(), gy(e, t);
        },
        useId: function() {
          return X = "useId", pe(), ky();
        },
        unstable_isNewReconciler: fe
      }, xx = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", pe(), Ry(e, t);
        },
        useContext: function(e) {
          return X = "useContext", pe(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", pe(), ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", pe(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", pe(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", pe(), Cy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", pe();
          var a = Ee.current;
          Ee.current = Oy;
          try {
            return Dy(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", pe();
          var l = Ee.current;
          Ee.current = Oy;
          try {
            return qS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", pe(), Ey();
        },
        useState: function(e) {
          X = "useState", pe();
          var t = Ee.current;
          Ee.current = Oy;
          try {
            return XS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", pe(), by();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", pe(), fx(e);
        },
        useTransition: function() {
          return X = "useTransition", pe(), hx();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", pe(), gy(e, t);
        },
        useId: function() {
          return X = "useId", pe(), ky();
        },
        unstable_isNewReconciler: fe
      }, jl = {
        readContext: function(e) {
          return u1(), Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Xe(), Rt(), r1(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Xe(), Rt(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Xe(), Rt(), _y(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Xe(), Rt(), n1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Xe(), Rt(), e1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Xe(), Rt(), t1(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Xe(), Rt();
          var a = Ee.current;
          Ee.current = jl;
          try {
            return a1(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Xe(), Rt();
          var l = Ee.current;
          Ee.current = jl;
          try {
            return GS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Xe(), Rt(), JS(e);
        },
        useState: function(e) {
          X = "useState", Xe(), Rt();
          var t = Ee.current;
          Ee.current = jl;
          try {
            return Sy(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Xe(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Xe(), Rt(), i1(e);
        },
        useTransition: function() {
          return X = "useTransition", Xe(), Rt(), l1();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Xe(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Xe(), Rt(), ZS(e, t, a);
        },
        useId: function() {
          return X = "useId", Xe(), Rt(), o1();
        },
        unstable_isNewReconciler: fe
      }, qi = {
        readContext: function(e) {
          return u1(), Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Xe(), pe(), Ry(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Xe(), pe(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Xe(), pe(), ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Xe(), pe(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Xe(), pe(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Xe(), pe(), Cy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Xe(), pe();
          var a = Ee.current;
          Ee.current = qi;
          try {
            return Dy(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Xe(), pe();
          var l = Ee.current;
          Ee.current = qi;
          try {
            return QS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Xe(), pe(), Ey();
        },
        useState: function(e) {
          X = "useState", Xe(), pe();
          var t = Ee.current;
          Ee.current = qi;
          try {
            return KS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Xe(), pe(), by();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Xe(), pe(), cx(e);
        },
        useTransition: function() {
          return X = "useTransition", Xe(), pe(), px();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Xe(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Xe(), pe(), gy(e, t);
        },
        useId: function() {
          return X = "useId", Xe(), pe(), ky();
        },
        unstable_isNewReconciler: fe
      }, Oy = {
        readContext: function(e) {
          return u1(), Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Xe(), pe(), Ry(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Xe(), pe(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Xe(), pe(), ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Xe(), pe(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Xe(), pe(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Xe(), pe(), Cy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Xe(), pe();
          var a = Ee.current;
          Ee.current = qi;
          try {
            return Dy(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Xe(), pe();
          var l = Ee.current;
          Ee.current = qi;
          try {
            return qS(e, t, a);
          } finally {
            Ee.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Xe(), pe(), Ey();
        },
        useState: function(e) {
          X = "useState", Xe(), pe();
          var t = Ee.current;
          Ee.current = qi;
          try {
            return XS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Xe(), pe(), by();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Xe(), pe(), fx(e);
        },
        useTransition: function() {
          return X = "useTransition", Xe(), pe(), hx();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Xe(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Xe(), pe(), gy(e, t);
        },
        useId: function() {
          return X = "useId", Xe(), pe(), ky();
        },
        unstable_isNewReconciler: fe
      };
    }
    var Vu = o.unstable_now, Cx = 0, Ny = -1, hh = -1, Ly = -1, s1 = !1, Uy = !1;
    function Tx() {
      return s1;
    }
    function bM() {
      Uy = !0;
    }
    function RM() {
      s1 = !1, Uy = !1;
    }
    function DM() {
      s1 = Uy, Uy = !1;
    }
    function bx() {
      return Cx;
    }
    function Rx() {
      Cx = Vu();
    }
    function c1(e) {
      hh = Vu(), e.actualStartTime < 0 && (e.actualStartTime = Vu());
    }
    function Dx(e) {
      hh = -1;
    }
    function Ay(e, t) {
      if (hh >= 0) {
        var a = Vu() - hh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), hh = -1;
      }
    }
    function Fl(e) {
      if (Ny >= 0) {
        var t = Vu() - Ny;
        Ny = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case se:
              var s = a.stateNode;
              s.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function f1(e) {
      if (Ly >= 0) {
        var t = Vu() - Ly;
        Ly = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case se:
              var s = a.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Hl() {
      Ny = Vu();
    }
    function d1() {
      Ly = Vu();
    }
    function p1(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: xd(t),
        digest: null
      };
    }
    function h1(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function kM(e, t) {
      return !0;
    }
    function v1(e, t) {
      try {
        var a = kM(e, t);
        if (a === !1)
          return;
        var l = t.value, s = t.source, p = t.stack, y = p !== null ? p : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(l);
        }
        var E = s ? et(s) : null, w = E ? "The above error occurred in the <" + E + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === O)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = et(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var A = w + `
` + y + `

` + ("" + x);
        console.error(A);
      } catch (L) {
        setTimeout(function() {
          throw L;
        });
      }
    }
    var MM = typeof WeakMap == "function" ? WeakMap : Map;
    function kx(e, t, a) {
      var l = Lo(Ht, a);
      l.tag = vS, l.payload = {
        element: null
      };
      var s = t.value;
      return l.callback = function() {
        _N(s), v1(e, t);
      }, l;
    }
    function m1(e, t, a) {
      var l = Lo(Ht, a);
      l.tag = vS;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var p = t.value;
        l.payload = function() {
          return s(p);
        }, l.callback = function() {
          PC(e), v1(e, t);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
        PC(e), v1(e, t), typeof s != "function" && EN(this);
        var w = t.value, x = t.stack;
        this.componentDidCatch(w, {
          componentStack: x !== null ? x : ""
        }), typeof s != "function" && (Yr(e.lanes, We) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), l;
    }
    function Mx(e, t, a) {
      var l = e.pingCache, s;
      if (l === null ? (l = e.pingCache = new MM(), s = /* @__PURE__ */ new Set(), l.set(t, s)) : (s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s))), !s.has(a)) {
        s.add(a);
        var p = xN.bind(null, e, t, a);
        Bn && Mh(e, a), t.then(p, p);
      }
    }
    function OM(e, t, a, l) {
      var s = e.updateQueue;
      if (s === null) {
        var p = /* @__PURE__ */ new Set();
        p.add(a), e.updateQueue = p;
      } else
        s.add(a);
    }
    function NM(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === Ye && (a === T || a === re || a === ee)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Ox(e) {
      var t = e;
      do {
        if (t.tag === ce && mM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Nx(e, t, a, l, s) {
      if ((e.mode & ot) === Ye) {
        if (e === t)
          e.flags |= zn;
        else {
          if (e.flags |= qe, a.flags |= Cs, a.flags &= ~(Hc | na), a.tag === R) {
            var p = a.alternate;
            if (p === null)
              a.tag = He;
            else {
              var y = Lo(Ht, We);
              y.tag = iy, Hu(a, y, We);
            }
          }
          a.lanes = nt(a.lanes, We);
        }
        return e;
      }
      return e.flags |= zn, e.lanes = s, e;
    }
    function LM(e, t, a, l, s) {
      if (a.flags |= na, Bn && Mh(e, s), l !== null && typeof l == "object" && typeof l.then == "function") {
        var p = l;
        NM(a), Sr() && a.mode & ot && __();
        var y = Ox(t);
        if (y !== null) {
          y.flags &= ~on, Nx(y, t, a, e, s), y.mode & ot && Mx(e, p, s), OM(y, e, p);
          return;
        } else {
          if (!yu(s)) {
            Mx(e, p, s), q1();
            return;
          }
          var E = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = E;
        }
      } else if (Sr() && a.mode & ot) {
        __();
        var w = Ox(t);
        if (w !== null) {
          (w.flags & zn) === je && (w.flags |= on), Nx(w, t, a, e, s), uS(nc(l, a));
          return;
        }
      }
      l = nc(l, a), dN(l);
      var x = t;
      do {
        switch (x.tag) {
          case O: {
            var b = l;
            x.flags |= zn;
            var A = Tn(s);
            x.lanes = nt(x.lanes, A);
            var L = kx(x, b, A);
            gS(x, L);
            return;
          }
          case R:
            var V = l, $ = x.type, Q = x.stateNode;
            if ((x.flags & qe) === je && (typeof $.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !OC(Q))) {
              x.flags |= zn;
              var xe = Tn(s);
              x.lanes = nt(x.lanes, xe);
              var Fe = m1(x, V, xe);
              gS(x, Fe);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function UM() {
      return null;
    }
    var vh = c.ReactCurrentOwner, Zi = !1, y1, mh, g1, S1, E1, rc, w1, zy;
    y1 = {}, mh = {}, g1 = {}, S1 = {}, E1 = {}, rc = !1, w1 = {}, zy = {};
    function ua(e, t, a, l) {
      e === null ? t.child = Z_(t, null, a, l) : t.child = Qf(t, e.child, a, l);
    }
    function AM(e, t, a, l) {
      t.child = Qf(t, e.child, null, l), t.child = Qf(t, null, a, l);
    }
    function Lx(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && $i(
          p,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var y = a.render, E = t.ref, w, x;
      Gf(t, s), xl(t);
      {
        if (vh.current = t, Wa(!0), w = ed(e, t, y, l, E, s), x = td(), t.mode & tn) {
          Cn(!0);
          try {
            w = ed(e, t, y, l, E, s), x = td();
          } finally {
            Cn(!1);
          }
        }
        Wa(!1);
      }
      return oo(), e !== null && !Zi ? (tx(e, t, s), Uo(e, t, s)) : (Sr() && x && nS(t), t.flags |= ml, ua(e, t, w, s), t.child);
    }
    function Ux(e, t, a, l, s) {
      if (e === null) {
        var p = a.type;
        if (PN(p) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var y = p;
          return y = sd(p), t.tag = ee, t.type = y, C1(t, p), Ax(e, t, y, l, s);
        }
        {
          var E = p.propTypes;
          E && $i(
            E,
            l,
            // Resolved props
            "prop",
            jt(p)
          );
        }
        var w = lE(a.type, null, l, t, t.mode, s);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var x = a.type, b = x.propTypes;
        b && $i(
          b,
          l,
          // Resolved props
          "prop",
          jt(x)
        );
      }
      var A = e.child, L = M1(e, s);
      if (!L) {
        var V = A.memoizedProps, $ = a.compare;
        if ($ = $ !== null ? $ : Ae, $(V, l) && e.ref === t.ref)
          return Uo(e, t, s);
      }
      t.flags |= ml;
      var Q = uc(A, l);
      return Q.ref = t.ref, Q.return = t, t.child = Q, Q;
    }
    function Ax(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var p = t.elementType;
        if (p.$$typeof === Ve) {
          var y = p, E = y._payload, w = y._init;
          try {
            p = w(E);
          } catch {
            p = null;
          }
          var x = p && p.propTypes;
          x && $i(
            x,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            jt(p)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if (Ae(b, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Zi = !1, t.pendingProps = l = b, M1(e, s))
            (e.flags & Cs) !== je && (Zi = !0);
          else
            return t.lanes = e.lanes, Uo(e, t, s);
      }
      return _1(e, t, a, l, s);
    }
    function zx(e, t, a) {
      var l = t.pendingProps, s = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || _e)
        if ((t.mode & ot) === Ye) {
          var y = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = y, qy(t, a);
        } else if (Yr(a, Pr)) {
          var A = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var L = p !== null ? p.baseLanes : a;
          qy(t, L);
        } else {
          var E = null, w;
          if (p !== null) {
            var x = p.baseLanes;
            w = nt(x, a);
          } else
            w = a;
          t.lanes = t.childLanes = Pr;
          var b = {
            baseLanes: w,
            cachePool: E,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, qy(t, w), null;
        }
      else {
        var V;
        p !== null ? (V = nt(p.baseLanes, a), t.memoizedState = null) : V = a, qy(t, V);
      }
      return ua(e, t, s, a), t.child;
    }
    function zM(e, t, a) {
      var l = t.pendingProps;
      return ua(e, t, l, a), t.child;
    }
    function jM(e, t, a) {
      var l = t.pendingProps.children;
      return ua(e, t, l, a), t.child;
    }
    function FM(e, t, a) {
      {
        t.flags |= tt;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, p = s.children;
      return ua(e, t, p, a), t.child;
    }
    function jx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ur, t.flags |= Xd);
    }
    function _1(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && $i(
          p,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var y;
      {
        var E = Yf(t, a, !0);
        y = If(t, E);
      }
      var w, x;
      Gf(t, s), xl(t);
      {
        if (vh.current = t, Wa(!0), w = ed(e, t, a, l, y, s), x = td(), t.mode & tn) {
          Cn(!0);
          try {
            w = ed(e, t, a, l, y, s), x = td();
          } finally {
            Cn(!1);
          }
        }
        Wa(!1);
      }
      return oo(), e !== null && !Zi ? (tx(e, t, s), Uo(e, t, s)) : (Sr() && x && nS(t), t.flags |= ml, ua(e, t, w, s), t.child);
    }
    function Fx(e, t, a, l, s) {
      {
        switch (tL(t)) {
          case !1: {
            var p = t.stateNode, y = t.type, E = new y(t.memoizedProps, p.context), w = E.state;
            p.updater.enqueueSetState(p, w, null);
            break;
          }
          case !0: {
            t.flags |= qe, t.flags |= zn;
            var x = new Error("Simulated error coming from DevTools"), b = Tn(s);
            t.lanes = nt(t.lanes, b);
            var A = m1(t, nc(x, t), b);
            gS(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = a.propTypes;
          L && $i(
            L,
            l,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var V;
      Ul(a) ? (V = !0, Qm(t)) : V = !1, Gf(t, s);
      var $ = t.stateNode, Q;
      $ === null ? (Fy(e, t), B_(t, a, l), MS(t, a, l, s), Q = !0) : e === null ? Q = cM(t, a, l, s) : Q = fM(e, t, a, l, s);
      var xe = x1(e, t, a, Q, V, s);
      {
        var Fe = t.stateNode;
        Q && Fe.props !== l && (rc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), rc = !0);
      }
      return xe;
    }
    function x1(e, t, a, l, s, p) {
      jx(e, t);
      var y = (t.flags & qe) !== je;
      if (!l && !y)
        return s && g_(t, a, !1), Uo(e, t, p);
      var E = t.stateNode;
      vh.current = t;
      var w;
      if (y && typeof a.getDerivedStateFromError != "function")
        w = null, Dx();
      else {
        xl(t);
        {
          if (Wa(!0), w = E.render(), t.mode & tn) {
            Cn(!0);
            try {
              E.render();
            } finally {
              Cn(!1);
            }
          }
          Wa(!1);
        }
        oo();
      }
      return t.flags |= ml, e !== null && y ? AM(e, t, w, p) : ua(e, t, w, p), t.memoizedState = E.state, s && g_(t, a, !0), t.child;
    }
    function Hx(e) {
      var t = e.stateNode;
      t.pendingContext ? m_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && m_(e, t.context, !1), zS(e, t.containerInfo);
    }
    function HM(e, t, a) {
      if (Hx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, s = t.memoizedState, p = s.element;
      j_(e, t), sy(t, l, null, a);
      var y = t.memoizedState;
      t.stateNode;
      var E = y.element;
      if (s.isDehydrated) {
        var w = {
          element: E,
          isDehydrated: !1,
          cache: y.cache,
          pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
          transitions: y.transitions
        }, x = t.updateQueue;
        if (x.baseState = w, t.memoizedState = w, t.flags & on) {
          var b = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Px(e, t, E, a, b);
        } else if (E !== p) {
          var A = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Px(e, t, E, a, A);
        } else {
          Vk(t);
          var L = Z_(t, null, E, a);
          t.child = L;
          for (var V = L; V; )
            V.flags = V.flags & ~Vt | _a, V = V.sibling;
        }
      } else {
        if (Bf(), E === p)
          return Uo(e, t, a);
        ua(e, t, E, a);
      }
      return t.child;
    }
    function Px(e, t, a, l, s) {
      return Bf(), uS(s), t.flags |= on, ua(e, t, a, l), t.child;
    }
    function PM(e, t, a) {
      X_(t), e === null && oS(t);
      var l = t.type, s = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = s.children, E = I0(l, s);
      return E ? y = null : p !== null && I0(l, p) && (t.flags |= bt), jx(e, t), ua(e, t, y, a), t.child;
    }
    function YM(e, t) {
      return e === null && oS(t), null;
    }
    function IM(e, t, a, l) {
      Fy(e, t);
      var s = t.pendingProps, p = a, y = p._payload, E = p._init, w = E(y);
      t.type = w;
      var x = t.tag = YN(w), b = Gi(w, s), A;
      switch (x) {
        case T:
          return C1(t, w), t.type = w = sd(w), A = _1(null, t, w, b, l), A;
        case R:
          return t.type = w = eE(w), A = Fx(null, t, w, b, l), A;
        case re:
          return t.type = w = tE(w), A = Lx(null, t, w, b, l), A;
        case W: {
          if (t.type !== t.elementType) {
            var L = w.propTypes;
            L && $i(
              L,
              b,
              // Resolved for outer only
              "prop",
              jt(w)
            );
          }
          return A = Ux(
            null,
            t,
            w,
            Gi(w.type, b),
            // The inner type can have defaults too
            l
          ), A;
        }
      }
      var V = "";
      throw w !== null && typeof w == "object" && w.$$typeof === Ve && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function VM(e, t, a, l, s) {
      Fy(e, t), t.tag = R;
      var p;
      return Ul(a) ? (p = !0, Qm(t)) : p = !1, Gf(t, s), B_(t, a, l), MS(t, a, l, s), x1(null, t, a, !0, p, s);
    }
    function $M(e, t, a, l) {
      Fy(e, t);
      var s = t.pendingProps, p;
      {
        var y = Yf(t, a, !1);
        p = If(t, y);
      }
      Gf(t, l);
      var E, w;
      xl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = jt(a) || "Unknown";
          y1[x] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), y1[x] = !0);
        }
        t.mode & tn && Wi.recordLegacyContextWarning(t, null), Wa(!0), vh.current = t, E = ed(null, t, a, s, p, l), w = td(), Wa(!1);
      }
      if (oo(), t.flags |= ml, typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) {
        var b = jt(a) || "Unknown";
        mh[b] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), mh[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0
      ) {
        {
          var A = jt(a) || "Unknown";
          mh[A] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), mh[A] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Ul(a) ? (L = !0, Qm(t)) : L = !1, t.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null, yS(t), $_(t, E), MS(t, a, s, l), x1(null, t, a, !0, L, l);
      } else {
        if (t.tag = T, t.mode & tn) {
          Cn(!0);
          try {
            E = ed(null, t, a, s, p, l), w = td();
          } finally {
            Cn(!1);
          }
        }
        return Sr() && w && nS(t), ua(null, t, E, l), C1(t, a), t.child;
      }
    }
    function C1(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = ga();
          l && (a += `

Check the render method of \`` + l + "`.");
          var s = l || "", p = e._debugSource;
          p && (s = p.fileName + ":" + p.lineNumber), E1[s] || (E1[s] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = jt(t) || "Unknown";
          S1[y] || (m("%s: Function components do not support getDerivedStateFromProps.", y), S1[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = jt(t) || "Unknown";
          g1[E] || (m("%s: Function components do not support contextType.", E), g1[E] = !0);
        }
      }
    }
    var T1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: pt
    };
    function b1(e) {
      return {
        baseLanes: e,
        cachePool: UM(),
        transitions: null
      };
    }
    function BM(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function WM(e, t, a, l) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return HS(e, oh);
    }
    function GM(e, t) {
      return gu(e.childLanes, t);
    }
    function Yx(e, t, a) {
      var l = t.pendingProps;
      nL(t) && (t.flags |= qe);
      var s = Qi.current, p = !1, y = (t.flags & qe) !== je;
      if (y || WM(s, e) ? (p = !0, t.flags &= ~qe) : (e === null || e.memoizedState !== null) && (s = vM(s, ex)), s = Zf(s), Yu(t, s), e === null) {
        oS(t);
        var E = t.memoizedState;
        if (E !== null) {
          var w = E.dehydrated;
          if (w !== null)
            return XM(t, w);
        }
        var x = l.children, b = l.fallback;
        if (p) {
          var A = QM(t, x, b, a), L = t.child;
          return L.memoizedState = b1(a), t.memoizedState = T1, A;
        } else
          return R1(t, x);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var $ = V.dehydrated;
          if ($ !== null)
            return JM(e, t, y, l, $, V, a);
        }
        if (p) {
          var Q = l.fallback, xe = l.children, Fe = ZM(e, t, xe, Q, a), Le = t.child, vt = e.child.memoizedState;
          return Le.memoizedState = vt === null ? b1(a) : BM(vt, a), Le.childLanes = GM(e, a), t.memoizedState = T1, Fe;
        } else {
          var ft = l.children, H = qM(e, t, ft, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function R1(e, t, a) {
      var l = e.mode, s = {
        mode: "visible",
        children: t
      }, p = D1(s, l);
      return p.return = e, e.child = p, p;
    }
    function QM(e, t, a, l) {
      var s = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, E, w;
      return (s & ot) === Ye && p !== null ? (E = p, E.childLanes = Z, E.pendingProps = y, e.mode & $e && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = 0, E.treeBaseDuration = 0), w = qu(a, s, l, null)) : (E = D1(y, s), w = qu(a, s, l, null)), E.return = e, w.return = e, E.sibling = w, e.child = E, w;
    }
    function D1(e, t, a) {
      return IC(e, t, Z, null);
    }
    function Ix(e, t) {
      return uc(e, t);
    }
    function qM(e, t, a, l) {
      var s = e.child, p = s.sibling, y = Ix(s, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === Ye && (y.lanes = l), y.return = t, y.sibling = null, p !== null) {
        var E = t.deletions;
        E === null ? (t.deletions = [p], t.flags |= Tt) : E.push(p);
      }
      return t.child = y, y;
    }
    function ZM(e, t, a, l, s) {
      var p = t.mode, y = e.child, E = y.sibling, w = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & ot) === Ye && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var b = t.child;
        x = b, x.childLanes = Z, x.pendingProps = w, t.mode & $e && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = y.selfBaseDuration, x.treeBaseDuration = y.treeBaseDuration), t.deletions = null;
      } else
        x = Ix(y, w), x.subtreeFlags = y.subtreeFlags & $n;
      var A;
      return E !== null ? A = uc(E, l) : (A = qu(l, p, s, null), A.flags |= Vt), A.return = t, x.return = t, x.sibling = A, t.child = x, A;
    }
    function jy(e, t, a, l) {
      l !== null && uS(l), Qf(t, e.child, null, a);
      var s = t.pendingProps, p = s.children, y = R1(t, p);
      return y.flags |= Vt, t.memoizedState = null, y;
    }
    function KM(e, t, a, l, s) {
      var p = t.mode, y = {
        mode: "visible",
        children: a
      }, E = D1(y, p), w = qu(l, p, s, null);
      return w.flags |= Vt, E.return = t, w.return = t, E.sibling = w, t.child = E, (t.mode & ot) !== Ye && Qf(t, e.child, null, s), w;
    }
    function XM(e, t, a) {
      return (e.mode & ot) === Ye ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : W0(t) ? e.lanes = co : e.lanes = Pr, null;
    }
    function JM(e, t, a, l, s, p, y) {
      if (a)
        if (t.flags & on) {
          t.flags &= ~on;
          var H = h1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jy(e, t, y, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= qe, null;
          var q = l.children, P = l.fallback, le = KM(e, t, q, P, y), Ce = t.child;
          return Ce.memoizedState = b1(y), t.memoizedState = T1, le;
        }
      else {
        if (Yk(), (t.mode & ot) === Ye)
          return jy(
            e,
            t,
            y,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (W0(s)) {
          var E, w, x;
          {
            var b = ak(s);
            E = b.digest, w = b.message, x = b.stack;
          }
          var A;
          w ? A = new Error(w) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = h1(A, E, x);
          return jy(e, t, y, L);
        }
        var V = Yr(y, e.childLanes);
        if (Zi || V) {
          var $ = Qy();
          if ($ !== null) {
            var Q = p0($, y);
            if (Q !== pt && Q !== p.retryLane) {
              p.retryLane = Q;
              var xe = Ht;
              Na(e, Q), er($, e, Q, xe);
            }
          }
          q1();
          var Fe = h1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jy(e, t, y, Fe);
        } else if (c_(s)) {
          t.flags |= qe, t.child = e.child;
          var Le = CN.bind(null, e);
          return ik(s, Le), null;
        } else {
          $k(t, s, p.treeContext);
          var vt = l.children, ft = R1(t, vt);
          return ft.flags |= _a, ft;
        }
      }
    }
    function Vx(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = nt(l.lanes, t)), pS(e.return, t, a);
    }
    function eO(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ce) {
          var s = l.memoizedState;
          s !== null && Vx(l, a, e);
        } else if (l.tag === it)
          Vx(l, a, e);
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
    function tO(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && my(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function nO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !w1[e])
        if (w1[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function rO(e, t) {
      e !== void 0 && !zy[e] && (e !== "collapsed" && e !== "hidden" ? (zy[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (zy[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $x(e, t) {
      {
        var a = Un(e), l = !a && typeof Ri(e) == "function";
        if (a || l) {
          var s = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function aO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!$x(e[a], a))
              return;
        } else {
          var l = Ri(e);
          if (typeof l == "function") {
            var s = l.call(e);
            if (s)
              for (var p = s.next(), y = 0; !p.done; p = s.next()) {
                if (!$x(p.value, y))
                  return;
                y++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function k1(e, t, a, l, s) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: s
      } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = a, p.tailMode = s);
    }
    function Bx(e, t, a) {
      var l = t.pendingProps, s = l.revealOrder, p = l.tail, y = l.children;
      nO(s), rO(p, s), aO(y, s), ua(e, t, y, a);
      var E = Qi.current, w = HS(E, oh);
      if (w)
        E = PS(E, oh), t.flags |= qe;
      else {
        var x = e !== null && (e.flags & qe) !== je;
        x && eO(t, t.child, a), E = Zf(E);
      }
      if (Yu(t, E), (t.mode & ot) === Ye)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var b = tO(t.child), A;
            b === null ? (A = t.child, t.child = null) : (A = b.sibling, b.sibling = null), k1(
              t,
              !1,
              // isBackwards
              A,
              b,
              p
            );
            break;
          }
          case "backwards": {
            var L = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var $ = V.alternate;
              if ($ !== null && my($) === null) {
                t.child = V;
                break;
              }
              var Q = V.sibling;
              V.sibling = L, L = V, V = Q;
            }
            k1(
              t,
              !0,
              // isBackwards
              L,
              null,
              // last
              p
            );
            break;
          }
          case "together": {
            k1(
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
    function iO(e, t, a) {
      zS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Qf(t, null, l, a) : ua(e, t, l, a), t.child;
    }
    var Wx = !1;
    function lO(e, t, a) {
      var l = t.type, s = l._context, p = t.pendingProps, y = t.memoizedProps, E = p.value;
      {
        "value" in p || Wx || (Wx = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && $i(w, p, "prop", "Context.Provider");
      }
      if (L_(t, s, E), y !== null) {
        var x = y.value;
        if (De(x, E)) {
          if (y.children === p.children && !Wm())
            return Uo(e, t, a);
        } else
          eM(t, s, a);
      }
      var b = p.children;
      return ua(e, t, b, a), t.child;
    }
    var Gx = !1;
    function oO(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (Gx || (Gx = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var s = t.pendingProps, p = s.children;
      typeof p != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Gf(t, a);
      var y = Yn(l);
      xl(t);
      var E;
      return vh.current = t, Wa(!0), E = p(y), Wa(!1), oo(), t.flags |= ml, ua(e, t, E, a), t.child;
    }
    function yh() {
      Zi = !0;
    }
    function Fy(e, t) {
      (t.mode & ot) === Ye && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Vt);
    }
    function Uo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Dx(), kh(t.lanes), Yr(a, t.childLanes) ? (dM(e, t), t.child) : null;
    }
    function uO(e, t, a) {
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
        var p = l.deletions;
        return p === null ? (l.deletions = [e], l.flags |= Tt) : p.push(e), a.flags |= Vt, a;
      }
    }
    function M1(e, t) {
      var a = e.lanes;
      return !!Yr(a, t);
    }
    function sO(e, t, a) {
      switch (t.tag) {
        case O:
          Hx(t), t.stateNode, Bf();
          break;
        case G:
          X_(t);
          break;
        case R: {
          var l = t.type;
          Ul(l) && Qm(t);
          break;
        }
        case j:
          zS(t, t.stateNode.containerInfo);
          break;
        case K: {
          var s = t.memoizedProps.value, p = t.type._context;
          L_(t, p, s);
          break;
        }
        case se:
          {
            var y = Yr(a, t.childLanes);
            y && (t.flags |= tt);
            {
              var E = t.stateNode;
              E.effectDuration = 0, E.passiveEffectDuration = 0;
            }
          }
          break;
        case ce: {
          var w = t.memoizedState;
          if (w !== null) {
            if (w.dehydrated !== null)
              return Yu(t, Zf(Qi.current)), t.flags |= qe, null;
            var x = t.child, b = x.childLanes;
            if (Yr(a, b))
              return Yx(e, t, a);
            Yu(t, Zf(Qi.current));
            var A = Uo(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            Yu(t, Zf(Qi.current));
          break;
        }
        case it: {
          var L = (e.flags & qe) !== je, V = Yr(a, t.childLanes);
          if (L) {
            if (V)
              return Bx(e, t, a);
            t.flags |= qe;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), Yu(t, Qi.current), V)
            break;
          return null;
        }
        case Be:
        case Ke:
          return t.lanes = Z, zx(e, t, a);
      }
      return Uo(e, t, a);
    }
    function Qx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return uO(e, t, lE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, s = t.pendingProps;
        if (l !== s || Wm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Zi = !0;
        else {
          var p = M1(e, a);
          if (!p && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & qe) === je)
            return Zi = !1, sO(e, t, a);
          (e.flags & Cs) !== je ? Zi = !0 : Zi = !1;
        }
      } else if (Zi = !1, Sr() && Ak(t)) {
        var y = t.index, E = zk();
        w_(t, E, y);
      }
      switch (t.lanes = Z, t.tag) {
        case k:
          return $M(e, t, t.type, a);
        case Me: {
          var w = t.elementType;
          return IM(e, t, w, a);
        }
        case T: {
          var x = t.type, b = t.pendingProps, A = t.elementType === x ? b : Gi(x, b);
          return _1(e, t, x, A, a);
        }
        case R: {
          var L = t.type, V = t.pendingProps, $ = t.elementType === L ? V : Gi(L, V);
          return Fx(e, t, L, $, a);
        }
        case O:
          return HM(e, t, a);
        case G:
          return PM(e, t, a);
        case z:
          return YM(e, t);
        case ce:
          return Yx(e, t, a);
        case j:
          return iO(e, t, a);
        case re: {
          var Q = t.type, xe = t.pendingProps, Fe = t.elementType === Q ? xe : Gi(Q, xe);
          return Lx(e, t, Q, Fe, a);
        }
        case J:
          return zM(e, t, a);
        case he:
          return jM(e, t, a);
        case se:
          return FM(e, t, a);
        case K:
          return lO(e, t, a);
        case ge:
          return oO(e, t, a);
        case W: {
          var Le = t.type, vt = t.pendingProps, ft = Gi(Le, vt);
          if (t.type !== t.elementType) {
            var H = Le.propTypes;
            H && $i(
              H,
              ft,
              // Resolved for outer only
              "prop",
              jt(Le)
            );
          }
          return ft = Gi(Le.type, ft), Ux(e, t, Le, ft, a);
        }
        case ee:
          return Ax(e, t, t.type, t.pendingProps, a);
        case He: {
          var q = t.type, P = t.pendingProps, le = t.elementType === q ? P : Gi(q, P);
          return VM(e, t, q, le, a);
        }
        case it:
          return Bx(e, t, a);
        case Mt:
          break;
        case Be:
          return zx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nd(e) {
      e.flags |= tt;
    }
    function qx(e) {
      e.flags |= Ur, e.flags |= Xd;
    }
    var Zx, O1, Kx, Xx;
    Zx = function(e, t, a, l) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === G || s.tag === z)
          ND(e, s.stateNode);
        else if (s.tag !== j) {
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
    }, O1 = function(e, t) {
    }, Kx = function(e, t, a, l, s) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, E = jS(), w = UD(y, a, p, l, s, E);
        t.updateQueue = w, w && nd(t);
      }
    }, Xx = function(e, t, a, l) {
      a !== l && nd(t);
    };
    function gh(e, t) {
      if (!Sr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, l = null; a !== null; )
              a.alternate !== null && (l = a), a = a.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, p = null; s !== null; )
              s.alternate !== null && (p = s), s = s.sibling;
            p === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : p.sibling = null;
            break;
          }
        }
    }
    function wr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Z, l = je;
      if (t) {
        if ((e.mode & $e) !== Ye) {
          for (var w = e.selfBaseDuration, x = e.child; x !== null; )
            a = nt(a, nt(x.lanes, x.childLanes)), l |= x.subtreeFlags & $n, l |= x.flags & $n, w += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = w;
        } else
          for (var b = e.child; b !== null; )
            a = nt(a, nt(b.lanes, b.childLanes)), l |= b.subtreeFlags & $n, l |= b.flags & $n, b.return = e, b = b.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & $e) !== Ye) {
          for (var s = e.actualDuration, p = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), l |= y.subtreeFlags, l |= y.flags, s += y.actualDuration, p += y.treeBaseDuration, y = y.sibling;
          e.actualDuration = s, e.treeBaseDuration = p;
        } else
          for (var E = e.child; E !== null; )
            a = nt(a, nt(E.lanes, E.childLanes)), l |= E.subtreeFlags, l |= E.flags, E.return = e, E = E.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function cO(e, t, a) {
      if (qk() && (t.mode & ot) !== Ye && (t.flags & qe) === je)
        return D_(t), Bf(), t.flags |= on | na | zn, !1;
      var l = Jm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Gk(t), wr(t), (t.mode & $e) !== Ye) {
            var s = a !== null;
            if (s) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Bf(), (t.flags & qe) === je && (t.memoizedState = null), t.flags |= tt, wr(t), (t.mode & $e) !== Ye) {
            var y = a !== null;
            if (y) {
              var E = t.child;
              E !== null && (t.treeBaseDuration -= E.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return k_(), !0;
    }
    function Jx(e, t, a) {
      var l = t.pendingProps;
      switch (rS(t), t.tag) {
        case k:
        case Me:
        case ee:
        case T:
        case re:
        case J:
        case he:
        case se:
        case ge:
        case W:
          return wr(t), null;
        case R: {
          var s = t.type;
          return Ul(s) && Gm(t), wr(t), null;
        }
        case O: {
          var p = t.stateNode;
          if (qf(t), J0(t), IS(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = Jm(t);
            if (y)
              nd(t);
            else if (e !== null) {
              var E = e.memoizedState;
              // Check if this is a client root
              (!E.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & on) !== je) && (t.flags |= wa, k_());
            }
          }
          return O1(e, t), wr(t), null;
        }
        case G: {
          FS(t);
          var w = K_(), x = t.type;
          if (e !== null && t.stateNode != null)
            Kx(e, t, x, l, w), e.ref !== t.ref && qx(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return wr(t), null;
            }
            var b = jS(), A = Jm(t);
            if (A)
              Bk(t, w, b) && nd(t);
            else {
              var L = OD(x, l, w, b, t);
              Zx(L, t, !1, !1), t.stateNode = L, LD(L, x, l, w) && nd(t);
            }
            t.ref !== null && qx(t);
          }
          return wr(t), null;
        }
        case z: {
          var V = l;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            Xx(e, t, $, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = K_(), xe = jS(), Fe = Jm(t);
            Fe ? Wk(t) && nd(t) : t.stateNode = AD(V, Q, xe, t);
          }
          return wr(t), null;
        }
        case ce: {
          Kf(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = cO(e, t, Le);
            if (!vt)
              return t.flags & zn ? t : null;
          }
          if ((t.flags & qe) !== je)
            return t.lanes = a, (t.mode & $e) !== Ye && p1(t), t;
          var ft = Le !== null, H = e !== null && e.memoizedState !== null;
          if (ft !== H && ft) {
            var q = t.child;
            if (q.flags |= yl, (t.mode & ot) !== Ye) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !St);
              P || HS(Qi.current, ex) ? fN() : q1();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= tt), wr(t), (t.mode & $e) !== Ye && ft) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case j:
          return qf(t), O1(e, t), e === null && Dk(t.stateNode.containerInfo), wr(t), null;
        case K:
          var ye = t.type._context;
          return dS(ye, t), wr(t), null;
        case He: {
          var Ge = t.type;
          return Ul(Ge) && Gm(t), wr(t), null;
        }
        case it: {
          Kf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return wr(t), null;
          var At = (t.flags & qe) !== je, wt = Je.rendering;
          if (wt === null)
            if (At)
              gh(Je, !1);
            else {
              var kn = pN() && (e === null || (e.flags & qe) === je);
              if (!kn)
                for (var _t = t.child; _t !== null; ) {
                  var wn = my(_t);
                  if (wn !== null) {
                    At = !0, t.flags |= qe, gh(Je, !1);
                    var Br = wn.updateQueue;
                    return Br !== null && (t.updateQueue = Br, t.flags |= tt), t.subtreeFlags = je, pM(t, a), Yu(t, PS(Qi.current, oh)), t.child;
                  }
                  _t = _t.sibling;
                }
              Je.tail !== null && en() > EC() && (t.flags |= qe, At = !0, gh(Je, !1), t.lanes = fp);
            }
          else {
            if (!At) {
              var br = my(wt);
              if (br !== null) {
                t.flags |= qe, At = !0;
                var ei = br.updateQueue;
                if (ei !== null && (t.updateQueue = ei, t.flags |= tt), gh(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !wt.alternate && !Sr())
                  return wr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - Je.renderingStartTime > EC() && a !== Pr && (t.flags |= qe, At = !0, gh(Je, !1), t.lanes = fp);
            }
            if (Je.isBackwards)
              wt.sibling = t.child, t.child = wt;
            else {
              var fa = Je.last;
              fa !== null ? fa.sibling = wt : t.child = wt, Je.last = wt;
            }
          }
          if (Je.tail !== null) {
            var da = Je.tail;
            Je.rendering = da, Je.tail = da.sibling, Je.renderingStartTime = en(), da.sibling = null;
            var Wr = Qi.current;
            return At ? Wr = PS(Wr, oh) : Wr = Zf(Wr), Yu(t, Wr), da;
          }
          return wr(t), null;
        }
        case Mt:
          break;
        case Be:
        case Ke: {
          Q1(t);
          var Ho = t.memoizedState, cd = Ho !== null;
          if (e !== null) {
            var Uh = e.memoizedState, Il = Uh !== null;
            Il !== cd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_e && (t.flags |= yl);
          }
          return !cd || (t.mode & ot) === Ye ? wr(t) : Yr(Yl, Pr) && (wr(t), t.subtreeFlags & (Vt | tt) && (t.flags |= yl)), null;
        }
        case Qt:
          return null;
        case gt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function fO(e, t, a) {
      switch (rS(t), t.tag) {
        case R: {
          var l = t.type;
          Ul(l) && Gm(t);
          var s = t.flags;
          return s & zn ? (t.flags = s & ~zn | qe, (t.mode & $e) !== Ye && p1(t), t) : null;
        }
        case O: {
          t.stateNode, qf(t), J0(t), IS();
          var p = t.flags;
          return (p & zn) !== je && (p & qe) === je ? (t.flags = p & ~zn | qe, t) : null;
        }
        case G:
          return FS(t), null;
        case ce: {
          Kf(t);
          var y = t.memoizedState;
          if (y !== null && y.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Bf();
          }
          var E = t.flags;
          return E & zn ? (t.flags = E & ~zn | qe, (t.mode & $e) !== Ye && p1(t), t) : null;
        }
        case it:
          return Kf(t), null;
        case j:
          return qf(t), null;
        case K:
          var w = t.type._context;
          return dS(w, t), null;
        case Be:
        case Ke:
          return Q1(t), null;
        case Qt:
          return null;
        default:
          return null;
      }
    }
    function eC(e, t, a) {
      switch (rS(t), t.tag) {
        case R: {
          var l = t.type.childContextTypes;
          l != null && Gm(t);
          break;
        }
        case O: {
          t.stateNode, qf(t), J0(t), IS();
          break;
        }
        case G: {
          FS(t);
          break;
        }
        case j:
          qf(t);
          break;
        case ce:
          Kf(t);
          break;
        case it:
          Kf(t);
          break;
        case K:
          var s = t.type._context;
          dS(s, t);
          break;
        case Be:
        case Ke:
          Q1(t);
          break;
      }
    }
    var tC = null;
    tC = /* @__PURE__ */ new Set();
    var Hy = !1, _r = !1, dO = typeof WeakSet == "function" ? WeakSet : Set, ke = null, rd = null, ad = null;
    function pO(e) {
      io(null, function() {
        throw e;
      }), Zd();
    }
    var hO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & $e)
        try {
          Hl(), t.componentWillUnmount();
        } finally {
          Fl(e);
        }
      else
        t.componentWillUnmount();
    };
    function nC(e, t) {
      try {
        $u(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function N1(e, t, a) {
      try {
        hO(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function vO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function rC(e, t) {
      try {
        iC(e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function id(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var l;
          try {
            if (_n && pa && e.mode & $e)
              try {
                Hl(), l = a(null);
              } finally {
                Fl(e);
              }
            else
              l = a(null);
          } catch (s) {
            Gt(e, t, s);
          }
          typeof l == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function Py(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var aC = !1;
    function mO(e, t) {
      kD(e.containerInfo), ke = t, yO();
      var a = aC;
      return aC = !1, a;
    }
    function yO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & cu) !== je && t !== null ? (t.return = e, ke = t) : gO();
      }
    }
    function gO() {
      for (; ke !== null; ) {
        var e = ke;
        Lt(e);
        try {
          SO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        xn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function SO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & wa) !== je) {
        switch (Lt(e), e.tag) {
          case T:
          case re:
          case ee:
            break;
          case R: {
            if (t !== null) {
              var l = t.memoizedProps, s = t.memoizedState, p = e.stateNode;
              e.type === e.elementType && !rc && (p.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), p.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var y = p.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Gi(e.type, l), s);
              {
                var E = tC;
                y === void 0 && !E.has(e.type) && (E.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              p.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          }
          case O: {
            {
              var w = e.stateNode;
              ek(w.containerInfo);
            }
            break;
          }
          case G:
          case z:
          case j:
          case He:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        xn();
      }
    }
    function Ki(e, t, a) {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var p = s.next, y = p;
        do {
          if ((y.tag & e) === e) {
            var E = y.destroy;
            y.destroy = void 0, E !== void 0 && ((e & Er) !== La ? Gc(t) : (e & Qn) !== La && Qc(t), (e & Al) !== La && Oh(!0), Py(t, a, E), (e & Al) !== La && Oh(!1), (e & Er) !== La ? Xv() : (e & Qn) !== La && fu());
          }
          y = y.next;
        } while (y !== p);
      }
    }
    function $u(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next, p = s;
        do {
          if ((p.tag & e) === e) {
            (e & Er) !== La ? Kv(t) : (e & Qn) !== La && Jv(t);
            var y = p.create;
            (e & Al) !== La && Oh(!0), p.destroy = y(), (e & Al) !== La && Oh(!1), (e & Er) !== La ? up() : (e & Qn) !== La && em();
            {
              var E = p.destroy;
              if (E !== void 0 && typeof E != "function") {
                var w = void 0;
                (p.tag & Qn) !== je ? w = "useLayoutEffect" : (p.tag & Al) !== je ? w = "useInsertionEffect" : w = "useEffect";
                var x = void 0;
                E === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof E.then == "function" ? x = `

It looks like you wrote ` + w + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + w + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + E, m("%s must not return anything besides a function, which is used for clean-up.%s", w, x);
              }
            }
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function EO(e, t) {
      if ((t.flags & tt) !== je)
        switch (t.tag) {
          case se: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, s = l.id, p = l.onPostCommit, y = bx(), E = t.alternate === null ? "mount" : "update";
            Tx() && (E = "nested-update"), typeof p == "function" && p(s, E, a, y);
            var w = t.return;
            e:
              for (; w !== null; ) {
                switch (w.tag) {
                  case O:
                    var x = w.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                  case se:
                    var b = w.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                }
                w = w.return;
              }
            break;
          }
        }
    }
    function wO(e, t, a, l) {
      if ((a.flags & ur) !== je)
        switch (a.tag) {
          case T:
          case re:
          case ee: {
            if (!_r)
              if (a.mode & $e)
                try {
                  Hl(), $u(Qn | Gn, a);
                } finally {
                  Fl(a);
                }
              else
                $u(Qn | Gn, a);
            break;
          }
          case R: {
            var s = a.stateNode;
            if (a.flags & tt && !_r)
              if (t === null)
                if (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), s.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & $e)
                  try {
                    Hl(), s.componentDidMount();
                  } finally {
                    Fl(a);
                  }
                else
                  s.componentDidMount();
              else {
                var p = a.elementType === a.type ? t.memoizedProps : Gi(a.type, t.memoizedProps), y = t.memoizedState;
                if (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), s.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & $e)
                  try {
                    Hl(), s.componentDidUpdate(p, y, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Fl(a);
                  }
                else
                  s.componentDidUpdate(p, y, s.__reactInternalSnapshotBeforeUpdate);
              }
            var E = a.updateQueue;
            E !== null && (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), s.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), H_(a, E, s));
            break;
          }
          case O: {
            var w = a.updateQueue;
            if (w !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    x = a.child.stateNode;
                    break;
                  case R:
                    x = a.child.stateNode;
                    break;
                }
              H_(a, w, x);
            }
            break;
          }
          case G: {
            var b = a.stateNode;
            if (t === null && a.flags & tt) {
              var A = a.type, L = a.memoizedProps;
              PD(b, A, L);
            }
            break;
          }
          case z:
            break;
          case j:
            break;
          case se: {
            {
              var V = a.memoizedProps, $ = V.onCommit, Q = V.onRender, xe = a.stateNode.effectDuration, Fe = bx(), Le = t === null ? "mount" : "update";
              Tx() && (Le = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof $ == "function" && $(a.memoizedProps.id, Le, xe, Fe), gN(a);
                var vt = a.return;
                e:
                  for (; vt !== null; ) {
                    switch (vt.tag) {
                      case O:
                        var ft = vt.stateNode;
                        ft.effectDuration += xe;
                        break e;
                      case se:
                        var H = vt.stateNode;
                        H.effectDuration += xe;
                        break e;
                    }
                    vt = vt.return;
                  }
              }
            }
            break;
          }
          case ce: {
            kO(e, a);
            break;
          }
          case it:
          case He:
          case Mt:
          case Be:
          case Ke:
          case gt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      _r || a.flags & Ur && iC(a);
    }
    function _O(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          if (e.mode & $e)
            try {
              Hl(), nC(e, e.return);
            } finally {
              Fl(e);
            }
          else
            nC(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && vO(e, e.return, t), rC(e, e.return);
          break;
        }
        case G: {
          rC(e, e.return);
          break;
        }
      }
    }
    function xO(e, t) {
      for (var a = null, l = e; ; ) {
        if (l.tag === G) {
          if (a === null) {
            a = l;
            try {
              var s = l.stateNode;
              t ? ZD(s) : XD(l.stateNode, l.memoizedProps);
            } catch (y) {
              Gt(e, e.return, y);
            }
          }
        } else if (l.tag === z) {
          if (a === null)
            try {
              var p = l.stateNode;
              t ? KD(p) : JD(p, l.memoizedProps);
            } catch (y) {
              Gt(e, e.return, y);
            }
        } else if (!((l.tag === Be || l.tag === Ke) && l.memoizedState !== null && l !== e)) {
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
    function iC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, l;
        switch (e.tag) {
          case G:
            l = a;
            break;
          default:
            l = a;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & $e)
            try {
              Hl(), s = t(l);
            } finally {
              Fl(e);
            }
          else
            s = t(l);
          typeof s == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = l;
      }
    }
    function CO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function lC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, lC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && Ok(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function TO(e) {
      for (var t = e.return; t !== null; ) {
        if (oC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function oC(e) {
      return e.tag === G || e.tag === O || e.tag === j;
    }
    function uC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || oC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== z && t.tag !== Qe; ) {
            if (t.flags & Vt || t.child === null || t.tag === j)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Vt))
            return t.stateNode;
        }
    }
    function bO(e) {
      var t = TO(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & bt && (s_(a), t.flags &= ~bt);
          var l = uC(e);
          U1(e, l, a);
          break;
        }
        case O:
        case j: {
          var s = t.stateNode.containerInfo, p = uC(e);
          L1(e, p, s);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function L1(e, t, a) {
      var l = e.tag, s = l === G || l === z;
      if (s) {
        var p = e.stateNode;
        t ? WD(a, p, t) : $D(a, p);
      } else if (l !== j) {
        var y = e.child;
        if (y !== null) {
          L1(y, t, a);
          for (var E = y.sibling; E !== null; )
            L1(E, t, a), E = E.sibling;
        }
      }
    }
    function U1(e, t, a) {
      var l = e.tag, s = l === G || l === z;
      if (s) {
        var p = e.stateNode;
        t ? BD(a, p, t) : VD(a, p);
      } else if (l !== j) {
        var y = e.child;
        if (y !== null) {
          U1(y, t, a);
          for (var E = y.sibling; E !== null; )
            U1(E, t, a), E = E.sibling;
        }
      }
    }
    var xr = null, Xi = !1;
    function RO(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case G: {
                xr = l.stateNode, Xi = !1;
                break e;
              }
              case O: {
                xr = l.stateNode.containerInfo, Xi = !0;
                break e;
              }
              case j: {
                xr = l.stateNode.containerInfo, Xi = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        sC(e, t, a), xr = null, Xi = !1;
      }
      CO(a);
    }
    function Bu(e, t, a) {
      for (var l = a.child; l !== null; )
        sC(e, t, l), l = l.sibling;
    }
    function sC(e, t, a) {
      switch (lp(a), a.tag) {
        case G:
          _r || id(a, t);
        case z: {
          {
            var l = xr, s = Xi;
            xr = null, Bu(e, t, a), xr = l, Xi = s, xr !== null && (Xi ? QD(xr, a.stateNode) : GD(xr, a.stateNode));
          }
          return;
        }
        case Qe: {
          xr !== null && (Xi ? qD(xr, a.stateNode) : B0(xr, a.stateNode));
          return;
        }
        case j: {
          {
            var p = xr, y = Xi;
            xr = a.stateNode.containerInfo, Xi = !0, Bu(e, t, a), xr = p, Xi = y;
          }
          return;
        }
        case T:
        case re:
        case W:
        case ee: {
          if (!_r) {
            var E = a.updateQueue;
            if (E !== null) {
              var w = E.lastEffect;
              if (w !== null) {
                var x = w.next, b = x;
                do {
                  var A = b, L = A.destroy, V = A.tag;
                  L !== void 0 && ((V & Al) !== La ? Py(a, t, L) : (V & Qn) !== La && (Qc(a), a.mode & $e ? (Hl(), Py(a, t, L), Fl(a)) : Py(a, t, L), fu())), b = b.next;
                } while (b !== x);
              }
            }
          }
          Bu(e, t, a);
          return;
        }
        case R: {
          if (!_r) {
            id(a, t);
            var $ = a.stateNode;
            typeof $.componentWillUnmount == "function" && N1(a, t, $);
          }
          Bu(e, t, a);
          return;
        }
        case Mt: {
          Bu(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
          ) {
            var Q = _r;
            _r = Q || a.memoizedState !== null, Bu(e, t, a), _r = Q;
          } else
            Bu(e, t, a);
          break;
        }
        default: {
          Bu(e, t, a);
          return;
        }
      }
    }
    function DO(e) {
      e.memoizedState;
    }
    function kO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var s = l.memoizedState;
          if (s !== null) {
            var p = s.dehydrated;
            p !== null && hk(p);
          }
        }
      }
    }
    function cC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new dO()), t.forEach(function(l) {
          var s = TN.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Bn)
              if (rd !== null && ad !== null)
                Mh(ad, rd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(s, s);
          }
        });
      }
    }
    function MO(e, t, a) {
      rd = a, ad = e, Lt(t), fC(t, e), Lt(t), rd = null, ad = null;
    }
    function Ji(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var s = 0; s < l.length; s++) {
          var p = l[s];
          try {
            RO(e, t, p);
          } catch (w) {
            Gt(p, t, w);
          }
        }
      var y = $g();
      if (t.subtreeFlags & jr)
        for (var E = t.child; E !== null; )
          Lt(E), fC(E, e), E = E.sibling;
      Lt(y);
    }
    function fC(e, t, a) {
      var l = e.alternate, s = e.flags;
      switch (e.tag) {
        case T:
        case re:
        case W:
        case ee: {
          if (Ji(t, e), Pl(e), s & tt) {
            try {
              Ki(Al | Gn, e, e.return), $u(Al | Gn, e);
            } catch (Ge) {
              Gt(e, e.return, Ge);
            }
            if (e.mode & $e) {
              try {
                Hl(), Ki(Qn | Gn, e, e.return);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
              Fl(e);
            } else
              try {
                Ki(Qn | Gn, e, e.return);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
          }
          return;
        }
        case R: {
          Ji(t, e), Pl(e), s & Ur && l !== null && id(l, l.return);
          return;
        }
        case G: {
          Ji(t, e), Pl(e), s & Ur && l !== null && id(l, l.return);
          {
            if (e.flags & bt) {
              var p = e.stateNode;
              try {
                s_(p);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
            }
            if (s & tt) {
              var y = e.stateNode;
              if (y != null) {
                var E = e.memoizedProps, w = l !== null ? l.memoizedProps : E, x = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    YD(y, b, x, w, E, e);
                  } catch (Ge) {
                    Gt(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case z: {
          if (Ji(t, e), Pl(e), s & tt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, L = e.memoizedProps, V = l !== null ? l.memoizedProps : L;
            try {
              ID(A, V, L);
            } catch (Ge) {
              Gt(e, e.return, Ge);
            }
          }
          return;
        }
        case O: {
          if (Ji(t, e), Pl(e), s & tt && l !== null) {
            var $ = l.memoizedState;
            if ($.isDehydrated)
              try {
                pk(t.containerInfo);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
          }
          return;
        }
        case j: {
          Ji(t, e), Pl(e);
          return;
        }
        case ce: {
          Ji(t, e), Pl(e);
          var Q = e.child;
          if (Q.flags & yl) {
            var xe = Q.stateNode, Fe = Q.memoizedState, Le = Fe !== null;
            if (xe.isHidden = Le, Le) {
              var vt = Q.alternate !== null && Q.alternate.memoizedState !== null;
              vt || cN();
            }
          }
          if (s & tt) {
            try {
              DO(e);
            } catch (Ge) {
              Gt(e, e.return, Ge);
            }
            cC(e);
          }
          return;
        }
        case Be: {
          var ft = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ot
          ) {
            var H = _r;
            _r = H || ft, Ji(t, e), _r = H;
          } else
            Ji(t, e);
          if (Pl(e), s & yl) {
            var q = e.stateNode, P = e.memoizedState, le = P !== null, Ce = e;
            if (q.isHidden = le, le && !ft && (Ce.mode & ot) !== Ye) {
              ke = Ce;
              for (var ye = Ce.child; ye !== null; )
                ke = ye, NO(ye), ye = ye.sibling;
            }
            xO(Ce, le);
          }
          return;
        }
        case it: {
          Ji(t, e), Pl(e), s & tt && cC(e);
          return;
        }
        case Mt:
          return;
        default: {
          Ji(t, e), Pl(e);
          return;
        }
      }
    }
    function Pl(e) {
      var t = e.flags;
      if (t & Vt) {
        try {
          bO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~Vt;
      }
      t & _a && (e.flags &= ~_a);
    }
    function OO(e, t, a) {
      rd = a, ad = t, ke = e, dC(e, t, a), rd = null, ad = null;
    }
    function dC(e, t, a) {
      for (var l = (e.mode & ot) !== Ye; ke !== null; ) {
        var s = ke, p = s.child;
        if (s.tag === Be && l) {
          var y = s.memoizedState !== null, E = y || Hy;
          if (E) {
            A1(e, t, a);
            continue;
          } else {
            var w = s.alternate, x = w !== null && w.memoizedState !== null, b = x || _r, A = Hy, L = _r;
            Hy = E, _r = b, _r && !L && (ke = s, LO(s));
            for (var V = p; V !== null; )
              ke = V, dC(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            ke = s, Hy = A, _r = L, A1(e, t, a);
            continue;
          }
        }
        (s.subtreeFlags & ur) !== je && p !== null ? (p.return = s, ke = p) : A1(e, t, a);
      }
    }
    function A1(e, t, a) {
      for (; ke !== null; ) {
        var l = ke;
        if ((l.flags & ur) !== je) {
          var s = l.alternate;
          Lt(l);
          try {
            wO(t, s, l, a);
          } catch (y) {
            Gt(l, l.return, y);
          }
          xn();
        }
        if (l === e) {
          ke = null;
          return;
        }
        var p = l.sibling;
        if (p !== null) {
          p.return = l.return, ke = p;
          return;
        }
        ke = l.return;
      }
    }
    function NO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case T:
          case re:
          case W:
          case ee: {
            if (t.mode & $e)
              try {
                Hl(), Ki(Qn, t, t.return);
              } finally {
                Fl(t);
              }
            else
              Ki(Qn, t, t.return);
            break;
          }
          case R: {
            id(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && N1(t, t.return, l);
            break;
          }
          case G: {
            id(t, t.return);
            break;
          }
          case Be: {
            var s = t.memoizedState !== null;
            if (s) {
              pC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : pC(e);
      }
    }
    function pC(e) {
      for (; ke !== null; ) {
        var t = ke;
        if (t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function LO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Be) {
          var l = t.memoizedState !== null;
          if (l) {
            hC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : hC(e);
      }
    }
    function hC(e) {
      for (; ke !== null; ) {
        var t = ke;
        Lt(t);
        try {
          _O(t);
        } catch (l) {
          Gt(t, t.return, l);
        }
        if (xn(), t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function UO(e, t, a, l) {
      ke = t, AO(t, e, a, l);
    }
    function AO(e, t, a, l) {
      for (; ke !== null; ) {
        var s = ke, p = s.child;
        (s.subtreeFlags & xa) !== je && p !== null ? (p.return = s, ke = p) : zO(e, t, a, l);
      }
    }
    function zO(e, t, a, l) {
      for (; ke !== null; ) {
        var s = ke;
        if ((s.flags & Kt) !== je) {
          Lt(s);
          try {
            jO(t, s, a, l);
          } catch (y) {
            Gt(s, s.return, y);
          }
          xn();
        }
        if (s === e) {
          ke = null;
          return;
        }
        var p = s.sibling;
        if (p !== null) {
          p.return = s.return, ke = p;
          return;
        }
        ke = s.return;
      }
    }
    function jO(e, t, a, l) {
      switch (t.tag) {
        case T:
        case re:
        case ee: {
          if (t.mode & $e) {
            d1();
            try {
              $u(Er | Gn, t);
            } finally {
              f1(t);
            }
          } else
            $u(Er | Gn, t);
          break;
        }
      }
    }
    function FO(e) {
      ke = e, HO();
    }
    function HO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Tt) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var s = a[l];
              ke = s, IO(s, e);
            }
            {
              var p = e.alternate;
              if (p !== null) {
                var y = p.child;
                if (y !== null) {
                  p.child = null;
                  do {
                    var E = y.sibling;
                    y.sibling = null, y = E;
                  } while (y !== null);
                }
              }
            }
            ke = e;
          }
        }
        (e.subtreeFlags & xa) !== je && t !== null ? (t.return = e, ke = t) : PO();
      }
    }
    function PO() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & Kt) !== je && (Lt(e), YO(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function YO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          e.mode & $e ? (d1(), Ki(Er | Gn, e, e.return), f1(e)) : Ki(Er | Gn, e, e.return);
          break;
        }
      }
    }
    function IO(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        Lt(a), $O(a, t), xn();
        var l = a.child;
        l !== null ? (l.return = a, ke = l) : VO(e);
      }
    }
    function VO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, l = t.return;
        if (lC(t), t === e) {
          ke = null;
          return;
        }
        if (a !== null) {
          a.return = l, ke = a;
          return;
        }
        ke = l;
      }
    }
    function $O(e, t) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          e.mode & $e ? (d1(), Ki(Er, e, t), f1(e)) : Ki(Er, e, t);
          break;
        }
      }
    }
    function BO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          try {
            $u(Qn | Gn, e);
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
    function WO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          try {
            $u(Er | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function GO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          try {
            Ki(Qn | Gn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && N1(e, e.return, t);
          break;
        }
      }
    }
    function QO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee:
          try {
            Ki(Er | Gn, e, e.return);
          } catch (t) {
            Gt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Sh = Symbol.for;
      Sh("selector.component"), Sh("selector.has_pseudo_class"), Sh("selector.role"), Sh("selector.test_id"), Sh("selector.text");
    }
    var qO = [];
    function ZO() {
      qO.forEach(function(e) {
        return e();
      });
    }
    var KO = c.ReactCurrentActQueue;
    function XO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function vC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && KO.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var JO = Math.ceil, z1 = c.ReactCurrentDispatcher, j1 = c.ReactCurrentOwner, Cr = c.ReactCurrentBatchConfig, el = c.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), mC = (
      /*               */
      1
    ), Tr = (
      /*                */
      2
    ), Ei = (
      /*                */
      4
    ), Ao = 0, Eh = 1, ac = 2, Yy = 3, wh = 4, yC = 5, F1 = 6, ht = Kn, sa = null, vn = null, Xn = Z, Yl = Z, H1 = Au(Z), Jn = Ao, _h = null, Iy = Z, xh = Z, Vy = Z, Ch = null, Ua = null, P1 = 0, gC = 500, SC = 1 / 0, eN = 500, zo = null;
    function Th() {
      SC = en() + eN;
    }
    function EC() {
      return SC;
    }
    var $y = !1, Y1 = null, ld = null, ic = !1, Wu = null, bh = Z, I1 = [], V1 = null, tN = 50, Rh = 0, $1 = null, B1 = !1, By = !1, nN = 50, od = 0, Wy = null, Dh = Ht, Gy = Z, wC = !1;
    function Qy() {
      return sa;
    }
    function ca() {
      return (ht & (Tr | Ei)) !== Kn ? en() : (Dh !== Ht || (Dh = en()), Dh);
    }
    function Gu(e) {
      var t = e.mode;
      if ((t & ot) === Ye)
        return We;
      if ((ht & Tr) !== Kn && Xn !== Z)
        return Tn(Xn);
      var a = Xk() !== Kk;
      if (a) {
        if (Cr.transition !== null) {
          var l = Cr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Gy === pt && (Gy = hp()), Gy;
      }
      var s = Ra();
      if (s !== pt)
        return s;
      var p = zD();
      return p;
    }
    function rN(e) {
      var t = e.mode;
      return (t & ot) === Ye ? We : d0();
    }
    function er(e, t, a, l) {
      RN(), wC && m("useInsertionEffect must not schedule updates."), B1 && (By = !0), go(e, a, l), (ht & Tr) !== Z && e === sa ? MN(t) : (Bn && Sp(e, t, a), ON(t), e === sa && ((ht & Tr) === Kn && (xh = nt(xh, a)), Jn === wh && Qu(e, Xn)), Aa(e, l), a === We && ht === Kn && (t.mode & ot) === Ye && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !el.isBatchingLegacy && (Th(), E_()));
    }
    function aN(e, t, a) {
      var l = e.current;
      l.lanes = t, go(e, t, a), Aa(e, a);
    }
    function iN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ht & Tr) !== Kn
      );
    }
    function Aa(e, t) {
      var a = e.callbackNode;
      s0(e, t);
      var l = Ms(e, e === sa ? Xn : Z);
      if (l === Z) {
        a !== null && jC(a), e.callbackNode = null, e.callbackPriority = pt;
        return;
      }
      var s = Sn(l), p = e.callbackPriority;
      if (p === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(el.current !== null && a !== X1)) {
        a == null && p !== We && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && jC(a);
      var y;
      if (s === We)
        e.tag === zu ? (el.isBatchingLegacy !== null && (el.didScheduleLegacyUpdate = !0), Uk(CC.bind(null, e))) : S_(CC.bind(null, e)), el.current !== null ? el.current.push(ju) : FD(function() {
          (ht & (Tr | Ei)) === Kn && ju();
        }), y = null;
      else {
        var E;
        switch (As(l)) {
          case sr:
            E = $c;
            break;
          case Wn:
            E = ia;
            break;
          case Hi:
            E = ci;
            break;
          case Ls:
            E = Sl;
            break;
          default:
            E = ci;
            break;
        }
        y = J1(E, _C.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = y;
    }
    function _C(e, t) {
      if (RM(), Dh = Ht, Gy = Z, (ht & (Tr | Ei)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = Fo();
      if (l && e.callbackNode !== a)
        return null;
      var s = Ms(e, e === sa ? Xn : Z);
      if (s === Z)
        return null;
      var p = !Ns(e, s) && !lm(e, s) && !t, y = p ? vN(e, s) : Zy(e, s);
      if (y !== Ao) {
        if (y === ac) {
          var E = dp(e);
          E !== Z && (s = E, y = W1(e, E));
        }
        if (y === Eh) {
          var w = _h;
          throw lc(e, Z), Qu(e, s), Aa(e, en()), w;
        }
        if (y === F1)
          Qu(e, s);
        else {
          var x = !Ns(e, s), b = e.current.alternate;
          if (x && !oN(b)) {
            if (y = Zy(e, s), y === ac) {
              var A = dp(e);
              A !== Z && (s = A, y = W1(e, A));
            }
            if (y === Eh) {
              var L = _h;
              throw lc(e, Z), Qu(e, s), Aa(e, en()), L;
            }
          }
          e.finishedWork = b, e.finishedLanes = s, lN(e, y, s);
        }
      }
      return Aa(e, en()), e.callbackNode === a ? _C.bind(null, e) : null;
    }
    function W1(e, t) {
      var a = Ch;
      if (Rn(e)) {
        var l = lc(e, t);
        l.flags |= on, Rk(e.containerInfo);
      }
      var s = Zy(e, t);
      if (s !== ac) {
        var p = Ua;
        Ua = a, p !== null && xC(p);
      }
      return s;
    }
    function xC(e) {
      Ua === null ? Ua = e : Ua.push.apply(Ua, e);
    }
    function lN(e, t, a) {
      switch (t) {
        case Ao:
        case Eh:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          oc(e, Ua, zo);
          break;
        }
        case Yy: {
          if (Qu(e, a), vf(a) && // do not delay if we're inside an act() scope
          !FC()) {
            var l = P1 + gC - en();
            if (l > 10) {
              var s = Ms(e, Z);
              if (s !== Z)
                break;
              var p = e.suspendedLanes;
              if (!yo(p, a)) {
                ca(), yp(e, p);
                break;
              }
              e.timeoutHandle = V0(oc.bind(null, e, Ua, zo), l);
              break;
            }
          }
          oc(e, Ua, zo);
          break;
        }
        case wh: {
          if (Qu(e, a), im(a))
            break;
          if (!FC()) {
            var y = am(e, a), E = y, w = en() - E, x = bN(w) - w;
            if (x > 10) {
              e.timeoutHandle = V0(oc.bind(null, e, Ua, zo), x);
              break;
            }
          }
          oc(e, Ua, zo);
          break;
        }
        case yC: {
          oc(e, Ua, zo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function oN(e) {
      for (var t = e; ; ) {
        if (t.flags & xs) {
          var a = t.updateQueue;
          if (a !== null) {
            var l = a.stores;
            if (l !== null)
              for (var s = 0; s < l.length; s++) {
                var p = l[s], y = p.getSnapshot, E = p.value;
                try {
                  if (!De(y(), E))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var w = t.child;
        if (t.subtreeFlags & xs && w !== null) {
          w.return = t, t = w;
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
      t = gu(t, Vy), t = gu(t, xh), mp(e, t);
    }
    function CC(e) {
      if (DM(), (ht & (Tr | Ei)) !== Kn)
        throw new Error("Should not already be working.");
      Fo();
      var t = Ms(e, Z);
      if (!Yr(t, We))
        return Aa(e, en()), null;
      var a = Zy(e, t);
      if (e.tag !== zu && a === ac) {
        var l = dp(e);
        l !== Z && (t = l, a = W1(e, l));
      }
      if (a === Eh) {
        var s = _h;
        throw lc(e, Z), Qu(e, t), Aa(e, en()), s;
      }
      if (a === F1)
        throw new Error("Root did not complete. This is a bug in React.");
      var p = e.current.alternate;
      return e.finishedWork = p, e.finishedLanes = t, oc(e, Ua, zo), Aa(e, en()), null;
    }
    function uN(e, t) {
      t !== Z && (Su(e, nt(t, We)), Aa(e, en()), (ht & (Tr | Ei)) === Kn && (Th(), ju()));
    }
    function G1(e, t) {
      var a = ht;
      ht |= mC;
      try {
        return e(t);
      } finally {
        ht = a, ht === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !el.isBatchingLegacy && (Th(), E_());
      }
    }
    function sN(e, t, a, l, s) {
      var p = Ra(), y = Cr.transition;
      try {
        return Cr.transition = null, bn(sr), e(t, a, l, s);
      } finally {
        bn(p), Cr.transition = y, ht === Kn && Th();
      }
    }
    function jo(e) {
      Wu !== null && Wu.tag === zu && (ht & (Tr | Ei)) === Kn && Fo();
      var t = ht;
      ht |= mC;
      var a = Cr.transition, l = Ra();
      try {
        return Cr.transition = null, bn(sr), e ? e() : void 0;
      } finally {
        bn(l), Cr.transition = a, ht = t, (ht & (Tr | Ei)) === Kn && ju();
      }
    }
    function TC() {
      return (ht & (Tr | Ei)) !== Kn;
    }
    function qy(e, t) {
      Vr(H1, Yl, e), Yl = nt(Yl, t);
    }
    function Q1(e) {
      Yl = H1.current, Ir(H1, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = Z;
      var a = e.timeoutHandle;
      if (a !== $0 && (e.timeoutHandle = $0, jD(a)), vn !== null)
        for (var l = vn.return; l !== null; ) {
          var s = l.alternate;
          eC(s, l), l = l.return;
        }
      sa = e;
      var p = uc(e.current, null);
      return vn = p, Xn = Yl = t, Jn = Ao, _h = null, Iy = Z, xh = Z, Vy = Z, Ch = null, Ua = null, nM(), Wi.discardPendingWarnings(), p;
    }
    function bC(e, t) {
      do {
        var a = vn;
        try {
          if (ry(), nx(), xn(), j1.current = null, a === null || a.return === null) {
            Jn = Eh, _h = t, vn = null;
            return;
          }
          if (_n && a.mode & $e && Ay(a, !0), ri)
            if (oo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              tm(a, l, Xn);
            } else
              qc(a, t, Xn);
          LM(e, a.return, a, t, Xn), MC(a);
        } catch (s) {
          t = s, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function RC() {
      var e = z1.current;
      return z1.current = My, e === null ? My : e;
    }
    function DC(e) {
      z1.current = e;
    }
    function cN() {
      P1 = en();
    }
    function kh(e) {
      Iy = nt(e, Iy);
    }
    function fN() {
      Jn === Ao && (Jn = Yy);
    }
    function q1() {
      (Jn === Ao || Jn === Yy || Jn === ac) && (Jn = wh), sa !== null && (Os(Iy) || Os(xh)) && Qu(sa, Xn);
    }
    function dN(e) {
      Jn !== wh && (Jn = ac), Ch === null ? Ch = [e] : Ch.push(e);
    }
    function pN() {
      return Jn === Ao;
    }
    function Zy(e, t) {
      var a = ht;
      ht |= Tr;
      var l = RC();
      if (sa !== e || Xn !== t) {
        if (Bn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Mh(e, Xn), s.clear()), gf(e, t);
        }
        zo = Ep(), lc(e, t);
      }
      Za(t);
      do
        try {
          hN();
          break;
        } catch (p) {
          bC(e, p);
        }
      while (!0);
      if (ry(), ht = a, DC(l), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pu(), sa = null, Xn = Z, Jn;
    }
    function hN() {
      for (; vn !== null; )
        kC(vn);
    }
    function vN(e, t) {
      var a = ht;
      ht |= Tr;
      var l = RC();
      if (sa !== e || Xn !== t) {
        if (Bn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Mh(e, Xn), s.clear()), gf(e, t);
        }
        zo = Ep(), Th(), lc(e, t);
      }
      Za(t);
      do
        try {
          mN();
          break;
        } catch (p) {
          bC(e, p);
        }
      while (!0);
      return ry(), DC(l), ht = a, vn !== null ? (bs(), Ao) : (pu(), sa = null, Xn = Z, Jn);
    }
    function mN() {
      for (; vn !== null && !Vc(); )
        kC(vn);
    }
    function kC(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & $e) !== Ye ? (c1(e), a = Z1(t, e, Yl), Ay(e, !0)) : a = Z1(t, e, Yl), xn(), e.memoizedProps = e.pendingProps, a === null ? MC(e) : vn = a, j1.current = null;
    }
    function MC(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & na) === je) {
          Lt(t);
          var s = void 0;
          if ((t.mode & $e) === Ye ? s = Jx(a, t, Yl) : (c1(t), s = Jx(a, t, Yl), Ay(t, !1)), xn(), s !== null) {
            vn = s;
            return;
          }
        } else {
          var p = fO(a, t);
          if (p !== null) {
            p.flags &= Wv, vn = p;
            return;
          }
          if ((t.mode & $e) !== Ye) {
            Ay(t, !1);
            for (var y = t.actualDuration, E = t.child; E !== null; )
              y += E.actualDuration, E = E.sibling;
            t.actualDuration = y;
          }
          if (l !== null)
            l.flags |= na, l.subtreeFlags = je, l.deletions = null;
          else {
            Jn = F1, vn = null;
            return;
          }
        }
        var w = t.sibling;
        if (w !== null) {
          vn = w;
          return;
        }
        t = l, vn = t;
      } while (t !== null);
      Jn === Ao && (Jn = yC);
    }
    function oc(e, t, a) {
      var l = Ra(), s = Cr.transition;
      try {
        Cr.transition = null, bn(sr), yN(e, t, a, l);
      } finally {
        Cr.transition = s, bn(l);
      }
      return null;
    }
    function yN(e, t, a, l) {
      do
        Fo();
      while (Wu !== null);
      if (DN(), (ht & (Tr | Ei)) !== Kn)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, p = e.finishedLanes;
      if (Wc(p), s === null)
        return op(), null;
      if (p === Z && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Z, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = pt;
      var y = nt(s.lanes, s.childLanes);
      gp(e, y), e === sa && (sa = null, vn = null, Xn = Z), ((s.subtreeFlags & xa) !== je || (s.flags & xa) !== je) && (ic || (ic = !0, V1 = a, J1(ci, function() {
        return Fo(), null;
      })));
      var E = (s.subtreeFlags & (cu | jr | ur | xa)) !== je, w = (s.flags & (cu | jr | ur | xa)) !== je;
      if (E || w) {
        var x = Cr.transition;
        Cr.transition = null;
        var b = Ra();
        bn(sr);
        var A = ht;
        ht |= Ei, j1.current = null, mO(e, s), Rx(), MO(e, s, p), MD(e.containerInfo), e.current = s, nm(p), OO(s, e, p), du(), qv(), ht = A, bn(b), Cr.transition = x;
      } else
        e.current = s, Rx();
      var L = ic;
      if (ic ? (ic = !1, Wu = e, bh = p) : (od = 0, Wy = null), y = e.pendingLanes, y === Z && (ld = null), L || UC(e.current, !1), zi(s.stateNode, l), Bn && e.memoizedUpdaters.clear(), ZO(), Aa(e, en()), t !== null)
        for (var V = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var Q = t[$], xe = Q.stack, Fe = Q.digest;
          V(Q.value, {
            componentStack: xe,
            digest: Fe
          });
        }
      if ($y) {
        $y = !1;
        var Le = Y1;
        throw Y1 = null, Le;
      }
      return Yr(bh, We) && e.tag !== zu && Fo(), y = e.pendingLanes, Yr(y, We) ? (bM(), e === $1 ? Rh++ : (Rh = 0, $1 = e)) : Rh = 0, ju(), op(), null;
    }
    function Fo() {
      if (Wu !== null) {
        var e = As(bh), t = h0(Hi, e), a = Cr.transition, l = Ra();
        try {
          return Cr.transition = null, bn(t), SN();
        } finally {
          bn(l), Cr.transition = a;
        }
      }
      return !1;
    }
    function gN(e) {
      I1.push(e), ic || (ic = !0, J1(ci, function() {
        return Fo(), null;
      }));
    }
    function SN() {
      if (Wu === null)
        return !1;
      var e = V1;
      V1 = null;
      var t = Wu, a = bh;
      if (Wu = null, bh = Z, (ht & (Tr | Ei)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      B1 = !0, By = !1, rm(a);
      var l = ht;
      ht |= Ei, FO(t.current), UO(t, t.current, a, e);
      {
        var s = I1;
        I1 = [];
        for (var p = 0; p < s.length; p++) {
          var y = s[p];
          EO(t, y);
        }
      }
      Ts(), UC(t.current, !0), ht = l, ju(), By ? t === Wy ? od++ : (od = 0, Wy = t) : od = 0, B1 = !1, By = !1, wl(t);
      {
        var E = t.current.stateNode;
        E.effectDuration = 0, E.passiveEffectDuration = 0;
      }
      return !0;
    }
    function OC(e) {
      return ld !== null && ld.has(e);
    }
    function EN(e) {
      ld === null ? ld = /* @__PURE__ */ new Set([e]) : ld.add(e);
    }
    function wN(e) {
      $y || ($y = !0, Y1 = e);
    }
    var _N = wN;
    function NC(e, t, a) {
      var l = nc(a, t), s = kx(e, l, We), p = Hu(e, s, We), y = ca();
      p !== null && (go(p, We, y), Aa(p, y));
    }
    function Gt(e, t, a) {
      if (pO(a), Oh(!1), e.tag === O) {
        NC(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === O) {
          NC(l, e, a);
          return;
        } else if (l.tag === R) {
          var s = l.type, p = l.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && !OC(p)) {
            var y = nc(a, e), E = m1(l, y, We), w = Hu(l, E, We), x = ca();
            w !== null && (go(w, We, x), Aa(w, x));
            return;
          }
        }
        l = l.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function xN(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var s = ca();
      yp(e, a), NN(e), sa === e && yo(Xn, a) && (Jn === wh || Jn === Yy && vf(Xn) && en() - P1 < gC ? lc(e, Z) : Vy = nt(Vy, a)), Aa(e, s);
    }
    function LC(e, t) {
      t === pt && (t = rN(e));
      var a = ca(), l = Na(e, t);
      l !== null && (go(l, t, a), Aa(l, a));
    }
    function CN(e) {
      var t = e.memoizedState, a = pt;
      t !== null && (a = t.retryLane), LC(e, a);
    }
    function TN(e, t) {
      var a = pt, l;
      switch (e.tag) {
        case ce:
          l = e.stateNode;
          var s = e.memoizedState;
          s !== null && (a = s.retryLane);
          break;
        case it:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), LC(e, a);
    }
    function bN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : JO(e / 1960) * 1960;
    }
    function RN() {
      if (Rh > tN)
        throw Rh = 0, $1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      od > nN && (od = 0, Wy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function DN() {
      Wi.flushLegacyContextWarning(), Wi.flushPendingUnsafeLifecycleWarnings();
    }
    function UC(e, t) {
      Lt(e), Ky(e, zr, GO), t && Ky(e, lo, QO), Ky(e, zr, BO), t && Ky(e, lo, WO), xn();
    }
    function Ky(e, t, a) {
      for (var l = e, s = null; l !== null; ) {
        var p = l.subtreeFlags & t;
        l !== s && l.child !== null && p !== je ? l = l.child : ((l.flags & t) !== je && a(l), l.sibling !== null ? l = l.sibling : l = s = l.return);
      }
    }
    var Xy = null;
    function AC(e) {
      {
        if ((ht & Tr) !== Kn || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== k && t !== O && t !== R && t !== T && t !== re && t !== W && t !== ee)
          return;
        var a = et(e) || "ReactComponent";
        if (Xy !== null) {
          if (Xy.has(a))
            return;
          Xy.add(a);
        } else
          Xy = /* @__PURE__ */ new Set([a]);
        var l = yn;
        try {
          Lt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Lt(e) : xn();
        }
      }
    }
    var Z1;
    {
      var kN = null;
      Z1 = function(e, t, a) {
        var l = VC(kN, t);
        try {
          return Qx(e, t, a);
        } catch (p) {
          if (Ik() || p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (ry(), nx(), eC(e, t), VC(t, l), t.mode & $e && c1(t), io(null, Qx, null, e, t, a), o0()) {
            var s = Zd();
            typeof s == "object" && s !== null && s._suppressLogging && typeof p == "object" && p !== null && !p._suppressLogging && (p._suppressLogging = !0);
          }
          throw p;
        }
      };
    }
    var zC = !1, K1;
    K1 = /* @__PURE__ */ new Set();
    function MN(e) {
      if (ya && !xM())
        switch (e.tag) {
          case T:
          case re:
          case ee: {
            var t = vn && et(vn) || "Unknown", a = t;
            if (!K1.has(a)) {
              K1.add(a);
              var l = et(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case R: {
            zC || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), zC = !0);
            break;
          }
        }
    }
    function Mh(e, t) {
      if (Bn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          Sp(e, l, t);
        });
      }
    }
    var X1 = {};
    function J1(e, t) {
      {
        var a = el.current;
        return a !== null ? (a.push(t), X1) : Ic(e, t);
      }
    }
    function jC(e) {
      if (e !== X1)
        return Qv(e);
    }
    function FC() {
      return el.current !== null;
    }
    function ON(e) {
      {
        if (e.mode & ot) {
          if (!vC())
            return;
        } else if (!XO() || ht !== Kn || e.tag !== T && e.tag !== re && e.tag !== ee)
          return;
        if (el.current === null) {
          var t = yn;
          try {
            Lt(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? Lt(e) : xn();
          }
        }
      }
    }
    function NN(e) {
      e.tag !== zu && vC() && el.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Oh(e) {
      wC = e;
    }
    var wi = null, ud = null, LN = function(e) {
      wi = e;
    };
    function sd(e) {
      {
        if (wi === null)
          return e;
        var t = wi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function eE(e) {
      return sd(e);
    }
    function tE(e) {
      {
        if (wi === null)
          return e;
        var t = wi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = sd(e.render);
            if (e.render !== a) {
              var l = {
                $$typeof: Pe,
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
    function HC(e, t) {
      {
        if (wi === null)
          return !1;
        var a = e.elementType, l = t.type, s = !1, p = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof l == "function" && (s = !0);
            break;
          }
          case T: {
            (typeof l == "function" || p === Ve) && (s = !0);
            break;
          }
          case re: {
            (p === Pe || p === Ve) && (s = !0);
            break;
          }
          case W:
          case ee: {
            (p === at || p === Ve) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var y = wi(a);
          if (y !== void 0 && y === wi(l))
            return !0;
        }
        return !1;
      }
    }
    function PC(e) {
      {
        if (wi === null || typeof WeakSet != "function")
          return;
        ud === null && (ud = /* @__PURE__ */ new WeakSet()), ud.add(e);
      }
    }
    var UN = function(e, t) {
      {
        if (wi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        Fo(), jo(function() {
          nE(e.current, l, a);
        });
      }
    }, AN = function(e, t) {
      {
        if (e.context !== Xa)
          return;
        Fo(), jo(function() {
          Nh(t, e, null, null);
        });
      }
    };
    function nE(e, t, a) {
      {
        var l = e.alternate, s = e.child, p = e.sibling, y = e.tag, E = e.type, w = null;
        switch (y) {
          case T:
          case ee:
          case R:
            w = E;
            break;
          case re:
            w = E.render;
            break;
        }
        if (wi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, b = !1;
        if (w !== null) {
          var A = wi(w);
          A !== void 0 && (a.has(A) ? b = !0 : t.has(A) && (y === R ? b = !0 : x = !0));
        }
        if (ud !== null && (ud.has(e) || l !== null && ud.has(l)) && (b = !0), b && (e._debugNeedsRemount = !0), b || x) {
          var L = Na(e, We);
          L !== null && er(L, e, We, Ht);
        }
        s !== null && !b && nE(s, t, a), p !== null && nE(p, t, a);
      }
    }
    var zN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(s) {
          return s.current;
        }));
        return rE(e.current, l, a), a;
      }
    };
    function rE(e, t, a) {
      {
        var l = e.child, s = e.sibling, p = e.tag, y = e.type, E = null;
        switch (p) {
          case T:
          case ee:
          case R:
            E = y;
            break;
          case re:
            E = y.render;
            break;
        }
        var w = !1;
        E !== null && t.has(E) && (w = !0), w ? jN(e, a) : l !== null && rE(l, t, a), s !== null && rE(s, t, a);
      }
    }
    function jN(e, t) {
      {
        var a = FN(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case G:
              t.add(l.stateNode);
              return;
            case j:
              t.add(l.stateNode.containerInfo);
              return;
            case O:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function FN(e, t) {
      for (var a = e, l = !1; ; ) {
        if (a.tag === G)
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
    var aE;
    {
      aE = !1;
      try {
        var YC = Object.preventExtensions({});
      } catch {
        aE = !0;
      }
    }
    function HN(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = Z, this.childLanes = Z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !aE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ja = function(e, t, a, l) {
      return new HN(e, t, a, l);
    };
    function iE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function PN(e) {
      return typeof e == "function" && !iE(e) && e.defaultProps === void 0;
    }
    function YN(e) {
      if (typeof e == "function")
        return iE(e) ? R : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Pe)
          return re;
        if (t === at)
          return W;
      }
      return k;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ja(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = je, a.subtreeFlags = je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & $n, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case k:
        case T:
        case ee:
          a.type = sd(e.type);
          break;
        case R:
          a.type = eE(e.type);
          break;
        case re:
          a.type = tE(e.type);
          break;
      }
      return a;
    }
    function IN(e, t) {
      e.flags &= $n | Vt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Z, e.lanes = t, e.child = null, e.subtreeFlags = je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var l = a.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function VN(e, t, a) {
      var l;
      return e === qm ? (l = ot, t === !0 && (l |= tn, l |= Ta)) : l = Ye, Bn && (l |= $e), Ja(O, null, null, l);
    }
    function lE(e, t, a, l, s, p) {
      var y = k, E = e;
      if (typeof e == "function")
        iE(e) ? (y = R, E = eE(E)) : E = sd(E);
      else if (typeof e == "string")
        y = G;
      else
        e:
          switch (e) {
            case Va:
              return qu(a.children, s, p, t);
            case ol:
              y = he, s |= tn, (s & ot) !== Ye && (s |= Ta);
              break;
            case M:
              return $N(a, s, p, t);
            case rt:
              return BN(a, s, p, t);
            case mt:
              return WN(a, s, p, t);
            case Zt:
              return IC(a, s, p, t);
            case mr:
            case Ln:
            case ul:
            case yc:
            case qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    y = K;
                    break e;
                  case me:
                    y = ge;
                    break e;
                  case Pe:
                    y = re, E = tE(E);
                    break e;
                  case at:
                    y = W;
                    break e;
                  case Ve:
                    y = Me, E = null;
                    break e;
                }
              var w = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = l ? et(l) : null;
                x && (w += `

Check the render method of \`` + x + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + w));
            }
          }
      var b = Ja(y, a, t, s);
      return b.elementType = e, b.type = E, b.lanes = p, b._debugOwner = l, b;
    }
    function oE(e, t, a) {
      var l = null;
      l = e._owner;
      var s = e.type, p = e.key, y = e.props, E = lE(s, p, y, l, t, a);
      return E._debugSource = e._source, E._debugOwner = e._owner, E;
    }
    function qu(e, t, a, l) {
      var s = Ja(J, e, l, t);
      return s.lanes = a, s;
    }
    function $N(e, t, a, l) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Ja(se, e, l, t | $e);
      return s.elementType = M, s.lanes = a, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function BN(e, t, a, l) {
      var s = Ja(ce, e, l, t);
      return s.elementType = rt, s.lanes = a, s;
    }
    function WN(e, t, a, l) {
      var s = Ja(it, e, l, t);
      return s.elementType = mt, s.lanes = a, s;
    }
    function IC(e, t, a, l) {
      var s = Ja(Be, e, l, t);
      s.elementType = Zt, s.lanes = a;
      var p = {
        isHidden: !1
      };
      return s.stateNode = p, s;
    }
    function uE(e, t, a) {
      var l = Ja(z, e, null, t);
      return l.lanes = a, l;
    }
    function GN() {
      var e = Ja(G, null, null, Ye);
      return e.elementType = "DELETED", e;
    }
    function QN(e) {
      var t = Ja(Qe, null, null, Ye);
      return t.stateNode = e, t;
    }
    function sE(e, t, a) {
      var l = e.children !== null ? e.children : [], s = Ja(j, l, e.key, t);
      return s.lanes = a, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function VC(e, t) {
      return e === null && (e = Ja(k, null, null, Ye)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function qN(e, t, a, l, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = $0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = pt, this.eventTimes = yf(Z), this.expirationTimes = yf(Ht), this.pendingLanes = Z, this.suspendedLanes = Z, this.pingedLanes = Z, this.expiredLanes = Z, this.mutableReadLanes = Z, this.finishedLanes = Z, this.entangledLanes = Z, this.entanglements = yf(Z), this.identifierPrefix = l, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var p = this.pendingUpdatersLaneMap = [], y = 0; y < Bt; y++)
          p.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case qm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case zu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function $C(e, t, a, l, s, p, y, E, w, x) {
      var b = new qN(e, t, a, E, w), A = VN(t, p);
      b.current = A, A.stateNode = b;
      {
        var L = {
          element: l,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        A.memoizedState = L;
      }
      return yS(A), b;
    }
    var cE = "18.2.0";
    function ZN(e, t, a) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ha(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ea,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var fE, dE;
    fE = !1, dE = {};
    function BC(e) {
      if (!e)
        return Xa;
      var t = Ea(e), a = Lk(t);
      if (t.tag === R) {
        var l = t.type;
        if (Ul(l))
          return y_(t, l, a);
      }
      return a;
    }
    function KN(e, t) {
      {
        var a = Ea(e);
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
          var p = et(a) || "Component";
          if (!dE[p]) {
            dE[p] = !0;
            var y = yn;
            try {
              Lt(s), a.mode & tn ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p);
            } finally {
              y ? Lt(y) : xn();
            }
          }
        }
        return s.stateNode;
      }
    }
    function WC(e, t, a, l, s, p, y, E) {
      var w = !1, x = null;
      return $C(e, t, w, x, a, l, s, p, y);
    }
    function GC(e, t, a, l, s, p, y, E, w, x) {
      var b = !0, A = $C(a, l, b, e, s, p, y, E, w);
      A.context = BC(null);
      var L = A.current, V = ca(), $ = Gu(L), Q = Lo(V, $);
      return Q.callback = t ?? null, Hu(L, Q, $), aN(A, $, V), A;
    }
    function Nh(e, t, a, l) {
      Zv(t, e);
      var s = t.current, p = ca(), y = Gu(s);
      uo(y);
      var E = BC(a);
      t.context === null ? t.context = E : t.pendingContext = E, ya && yn !== null && !fE && (fE = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(yn) || "Unknown"));
      var w = Lo(p, y);
      w.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l);
      var x = Hu(s, w, y);
      return x !== null && (er(x, s, y, p), uy(x, s, y)), y;
    }
    function Jy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function XN(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (Rn(t)) {
            var a = c0(t);
            uN(t, a);
          }
          break;
        }
        case ce: {
          jo(function() {
            var s = Na(e, We);
            if (s !== null) {
              var p = ca();
              er(s, e, We, p);
            }
          });
          var l = We;
          pE(e, l);
          break;
        }
      }
    }
    function QC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = um(a.retryLane, t));
    }
    function pE(e, t) {
      QC(e, t);
      var a = e.alternate;
      a && QC(a, t);
    }
    function JN(e) {
      if (e.tag === ce) {
        var t = hu, a = Na(e, t);
        if (a !== null) {
          var l = ca();
          er(a, e, t, l);
        }
        pE(e, t);
      }
    }
    function eL(e) {
      if (e.tag === ce) {
        var t = Gu(e), a = Na(e, t);
        if (a !== null) {
          var l = ca();
          er(a, e, t, l);
        }
        pE(e, t);
      }
    }
    function qC(e) {
      var t = Gv(e);
      return t === null ? null : t.stateNode;
    }
    var ZC = function(e) {
      return null;
    };
    function tL(e) {
      return ZC(e);
    }
    var KC = function(e) {
      return !1;
    };
    function nL(e) {
      return KC(e);
    }
    var XC = null, JC = null, eT = null, tT = null, nT = null, rT = null, aT = null, iT = null, lT = null;
    {
      var oT = function(e, t, a) {
        var l = t[a], s = Un(e) ? e.slice() : st({}, e);
        return a + 1 === t.length ? (Un(s) ? s.splice(l, 1) : delete s[l], s) : (s[l] = oT(e[l], t, a + 1), s);
      }, uT = function(e, t) {
        return oT(e, t, 0);
      }, sT = function(e, t, a, l) {
        var s = t[l], p = Un(e) ? e.slice() : st({}, e);
        if (l + 1 === t.length) {
          var y = a[l];
          p[y] = p[s], Un(p) ? p.splice(s, 1) : delete p[s];
        } else
          p[s] = sT(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            a,
            l + 1
          );
        return p;
      }, cT = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return sT(e, t, a, 0);
      }, fT = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var s = t[a], p = Un(e) ? e.slice() : st({}, e);
        return p[s] = fT(e[s], t, a + 1, l), p;
      }, dT = function(e, t, a) {
        return fT(e, t, 0, a);
      }, hE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      XC = function(e, t, a, l) {
        var s = hE(e, t);
        if (s !== null) {
          var p = dT(s.memoizedState, a, l);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = st({}, e.memoizedProps);
          var y = Na(e, We);
          y !== null && er(y, e, We, Ht);
        }
      }, JC = function(e, t, a) {
        var l = hE(e, t);
        if (l !== null) {
          var s = uT(l.memoizedState, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var p = Na(e, We);
          p !== null && er(p, e, We, Ht);
        }
      }, eT = function(e, t, a, l) {
        var s = hE(e, t);
        if (s !== null) {
          var p = cT(s.memoizedState, a, l);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = st({}, e.memoizedProps);
          var y = Na(e, We);
          y !== null && er(y, e, We, Ht);
        }
      }, tT = function(e, t, a) {
        e.pendingProps = dT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Na(e, We);
        l !== null && er(l, e, We, Ht);
      }, nT = function(e, t) {
        e.pendingProps = uT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Na(e, We);
        a !== null && er(a, e, We, Ht);
      }, rT = function(e, t, a) {
        e.pendingProps = cT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Na(e, We);
        l !== null && er(l, e, We, Ht);
      }, aT = function(e) {
        var t = Na(e, We);
        t !== null && er(t, e, We, Ht);
      }, iT = function(e) {
        ZC = e;
      }, lT = function(e) {
        KC = e;
      };
    }
    function rL(e) {
      var t = Ca(e);
      return t === null ? null : t.stateNode;
    }
    function aL(e) {
      return null;
    }
    function iL() {
      return yn;
    }
    function lL(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return ip({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: XC,
        overrideHookStateDeletePath: JC,
        overrideHookStateRenamePath: eT,
        overrideProps: tT,
        overridePropsDeletePath: nT,
        overridePropsRenamePath: rT,
        setErrorHandler: iT,
        setSuspenseHandler: lT,
        scheduleUpdate: aT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: rL,
        findFiberByHostInstance: t || aL,
        // React Refresh
        findHostInstancesForRefresh: zN,
        scheduleRefresh: UN,
        scheduleRoot: AN,
        setRefreshHandler: LN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: iL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: cE
      });
    }
    var pT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function vE(e) {
      this._internalRoot = e;
    }
    eg.prototype.render = vE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : tg(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gn) {
          var l = qC(t.current);
          l && l.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Nh(e, t, null, null);
    }, eg.prototype.unmount = vE.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        TC() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), jo(function() {
          Nh(null, e, null, null);
        }), d_(t);
      }
    };
    function oL(e, t) {
      if (!tg(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      hT(e);
      var a = !1, l = !1, s = "", p = pT;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ll && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var y = WC(e, qm, null, a, l, s, p);
      Im(y.current, e);
      var E = e.nodeType === gn ? e.parentNode : e;
      return Pp(E), new vE(y);
    }
    function eg(e) {
      this._internalRoot = e;
    }
    function uL(e) {
      e && mm(e);
    }
    eg.prototype.unstable_scheduleHydration = uL;
    function sL(e, t, a) {
      if (!tg(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      hT(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, s = a != null && a.hydratedSources || null, p = !1, y = !1, E = "", w = pT;
      a != null && (a.unstable_strictMode === !0 && (p = !0), a.identifierPrefix !== void 0 && (E = a.identifierPrefix), a.onRecoverableError !== void 0 && (w = a.onRecoverableError));
      var x = GC(t, null, e, qm, l, p, y, E, w);
      if (Im(x.current, e), Pp(e), s)
        for (var b = 0; b < s.length; b++) {
          var A = s[b];
          yM(x, A);
        }
      return new eg(x);
    }
    function tg(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ga || e.nodeType === Jl || !Ct));
    }
    function Lh(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ga || e.nodeType === Jl || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function hT(e) {
      e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Kp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var cL = c.ReactCurrentOwner, vT;
    vT = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = qC(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = mE(e), s = !!(l && Uu(l));
      s && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function mE(e) {
      return e ? e.nodeType === Ga ? e.documentElement : e.firstChild : null;
    }
    function mT() {
    }
    function fL(e, t, a, l, s) {
      if (s) {
        if (typeof l == "function") {
          var p = l;
          l = function() {
            var L = Jy(y);
            p.call(L);
          };
        }
        var y = GC(
          t,
          l,
          e,
          zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          mT
        );
        e._reactRootContainer = y, Im(y.current, e);
        var E = e.nodeType === gn ? e.parentNode : e;
        return Pp(E), jo(), y;
      } else {
        for (var w; w = e.lastChild; )
          e.removeChild(w);
        if (typeof l == "function") {
          var x = l;
          l = function() {
            var L = Jy(b);
            x.call(L);
          };
        }
        var b = WC(
          e,
          zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          mT
        );
        e._reactRootContainer = b, Im(b.current, e);
        var A = e.nodeType === gn ? e.parentNode : e;
        return Pp(A), jo(function() {
          Nh(t, b, a, l);
        }), b;
      }
    }
    function dL(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ng(e, t, a, l, s) {
      vT(a), dL(s === void 0 ? null : s, "render");
      var p = a._reactRootContainer, y;
      if (!p)
        y = fL(a, t, e, s, l);
      else {
        if (y = p, typeof s == "function") {
          var E = s;
          s = function() {
            var w = Jy(y);
            E.call(w);
          };
        }
        Nh(t, y, e, s);
      }
      return Jy(y);
    }
    function pL(e) {
      {
        var t = cL.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Lr ? e : KN(e, "findDOMNode");
    }
    function hL(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Kp(t) && t._reactRootContainer === void 0;
        l && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ng(null, e, t, !0, a);
    }
    function vL(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Kp(t) && t._reactRootContainer === void 0;
        l && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ng(null, e, t, !1, a);
    }
    function mL(e, t, a, l) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_s(e))
        throw new Error("parentComponent must be a valid React Component");
      return ng(e, t, a, !1, l);
    }
    function yL(e) {
      if (!Lh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Kp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = mE(e), l = a && !Uu(a);
          l && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return jo(function() {
          ng(null, null, e, !1, function() {
            e._reactRootContainer = null, d_(e);
          });
        }), !0;
      } else {
        {
          var s = mE(e), p = !!(s && Uu(s)), y = e.nodeType === Lr && Lh(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Te(XN), cm(JN), js(eL), _p(Ra), dm(Us), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), $v(ED), jc(G1, sN, jo);
    function gL(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!tg(t))
        throw new Error("Target container is not a DOM element.");
      return ZN(e, t, null, a);
    }
    function SL(e, t, a, l) {
      return mL(e, t, a, l);
    }
    var yE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uu, Pf, Vm, zc, Ss, G1]
    };
    function EL(e, t) {
      return yE.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), oL(e, t);
    }
    function wL(e, t, a) {
      return yE.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sL(e, t, a);
    }
    function _L(e) {
      return TC() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), jo(e);
    }
    var xL = lL({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: cE,
      rendererPackageName: "react-dom"
    });
    if (!xL && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var yT = window.location.protocol;
      /^(https?|file):$/.test(yT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (yT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yE, ja.createPortal = gL, ja.createRoot = EL, ja.findDOMNode = pL, ja.flushSync = _L, ja.hydrate = hL, ja.hydrateRoot = wL, ja.render = vL, ja.unmountComponentAtNode = yL, ja.unstable_batchedUpdates = G1, ja.unstable_renderSubtreeIntoContainer = SL, ja.version = cE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ja;
}
function SR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SR);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (SR(), QE.exports = Kj()) : QE.exports = Xj();
var Jj = QE.exports;
const Bh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Hg = (i, o, c, d = "") => {
  const h = i.split(":");
  if (i.slice(0, 1) === "@") {
    if (h.length < 2 || h.length > 3)
      return null;
    d = h.shift().slice(1);
  }
  if (h.length > 3 || !h.length)
    return null;
  if (h.length > 1) {
    const C = h.pop(), T = h.pop(), R = {
      // Allow provider without '@': "provider:prefix:name"
      provider: h.length > 0 ? h[0] : d,
      prefix: T,
      name: C
    };
    return o && !hg(R) ? null : R;
  }
  const S = h[0], m = S.split("-");
  if (m.length > 1) {
    const C = {
      provider: d,
      prefix: m.shift(),
      name: m.join("-")
    };
    return o && !hg(C) ? null : C;
  }
  if (c && d === "") {
    const C = {
      provider: d,
      prefix: "",
      name: S
    };
    return o && !hg(C, c) ? null : C;
  }
  return null;
}, hg = (i, o) => i ? !!((i.provider === "" || i.provider.match(Bh)) && (o && i.prefix === "" || i.prefix.match(Bh)) && i.name.match(Bh)) : !1, ER = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), xg = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Ow = Object.freeze({
  ...ER,
  ...xg
}), qE = Object.freeze({
  ...Ow,
  body: "",
  hidden: !1
});
function eF(i, o) {
  const c = {};
  !i.hFlip != !o.hFlip && (c.hFlip = !0), !i.vFlip != !o.vFlip && (c.vFlip = !0);
  const d = ((i.rotate || 0) + (o.rotate || 0)) % 4;
  return d && (c.rotate = d), c;
}
function VT(i, o) {
  const c = eF(i, o);
  for (const d in qE)
    d in xg ? d in i && !(d in c) && (c[d] = xg[d]) : d in o ? c[d] = o[d] : d in i && (c[d] = i[d]);
  return c;
}
function tF(i, o) {
  const c = i.icons, d = i.aliases || /* @__PURE__ */ Object.create(null), h = /* @__PURE__ */ Object.create(null);
  function S(m) {
    if (c[m])
      return h[m] = [];
    if (!(m in h)) {
      h[m] = null;
      const C = d[m] && d[m].parent, T = C && S(C);
      T && (h[m] = [C].concat(T));
    }
    return h[m];
  }
  return (o || Object.keys(c).concat(Object.keys(d))).forEach(S), h;
}
function nF(i, o, c) {
  const d = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null);
  let S = {};
  function m(C) {
    S = VT(
      d[C] || h[C],
      S
    );
  }
  return m(o), c.forEach(m), VT(i, S);
}
function wR(i, o) {
  const c = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return c;
  i.not_found instanceof Array && i.not_found.forEach((h) => {
    o(h, null), c.push(h);
  });
  const d = tF(i);
  for (const h in d) {
    const S = d[h];
    S && (o(h, nF(i, h, S)), c.push(h));
  }
  return c;
}
const rF = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ER
};
function RE(i, o) {
  for (const c in o)
    if (c in i && typeof i[c] != typeof o[c])
      return !1;
  return !0;
}
function _R(i) {
  if (typeof i != "object" || i === null)
    return null;
  const o = i;
  if (typeof o.prefix != "string" || !i.icons || typeof i.icons != "object" || !RE(i, rF))
    return null;
  const c = o.icons;
  for (const h in c) {
    const S = c[h];
    if (!h.match(Bh) || typeof S.body != "string" || !RE(
      S,
      qE
    ))
      return null;
  }
  const d = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const h in d) {
    const S = d[h], m = S.parent;
    if (!h.match(Bh) || typeof m != "string" || !c[m] && !d[m] || !RE(
      S,
      qE
    ))
      return null;
  }
  return o;
}
const $T = /* @__PURE__ */ Object.create(null);
function aF(i, o) {
  return {
    provider: i,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function hc(i, o) {
  const c = $T[i] || ($T[i] = /* @__PURE__ */ Object.create(null));
  return c[o] || (c[o] = aF(i, o));
}
function Nw(i, o) {
  return _R(o) ? wR(o, (c, d) => {
    d ? i.icons[c] = d : i.missing.add(c);
  }) : [];
}
function iF(i, o, c) {
  try {
    if (typeof c.body == "string")
      return i.icons[o] = { ...c }, !0;
  } catch {
  }
  return !1;
}
let Xh = !1;
function xR(i) {
  return typeof i == "boolean" && (Xh = i), Xh;
}
function lF(i) {
  const o = typeof i == "string" ? Hg(i, !0, Xh) : i;
  if (o) {
    const c = hc(o.provider, o.prefix), d = o.name;
    return c.icons[d] || (c.missing.has(d) ? null : void 0);
  }
}
function oF(i, o) {
  const c = Hg(i, !0, Xh);
  if (!c)
    return !1;
  const d = hc(c.provider, c.prefix);
  return iF(d, c.name, o);
}
function uF(i, o) {
  if (typeof i != "object")
    return !1;
  if (typeof o != "string" && (o = i.provider || ""), Xh && !o && !i.prefix) {
    let h = !1;
    return _R(i) && (i.prefix = "", wR(i, (S, m) => {
      m && oF(S, m) && (h = !0);
    })), h;
  }
  const c = i.prefix;
  if (!hg({
    provider: o,
    prefix: c,
    name: "a"
  }))
    return !1;
  const d = hc(o, c);
  return !!Nw(d, i);
}
const CR = Object.freeze({
  width: null,
  height: null
}), TR = Object.freeze({
  // Dimensions
  ...CR,
  // Transformations
  ...xg
}), sF = /(-?[0-9.]*[0-9]+[0-9.]*)/g, cF = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function BT(i, o, c) {
  if (o === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * o * c) / c;
  if (typeof i != "string")
    return i;
  const d = i.split(sF);
  if (d === null || !d.length)
    return i;
  const h = [];
  let S = d.shift(), m = cF.test(S);
  for (; ; ) {
    if (m) {
      const C = parseFloat(S);
      isNaN(C) ? h.push(S) : h.push(Math.ceil(C * o * c) / c);
    } else
      h.push(S);
    if (S = d.shift(), S === void 0)
      return h.join("");
    m = !m;
  }
}
const fF = (i) => i === "unset" || i === "undefined" || i === "none";
function dF(i, o) {
  const c = {
    ...Ow,
    ...i
  }, d = {
    ...TR,
    ...o
  }, h = {
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height
  };
  let S = c.body;
  [c, d].forEach((z) => {
    const J = [], he = z.hFlip, ge = z.vFlip;
    let K = z.rotate;
    he ? ge ? K += 2 : (J.push(
      "translate(" + (h.width + h.left).toString() + " " + (0 - h.top).toString() + ")"
    ), J.push("scale(-1 1)"), h.top = h.left = 0) : ge && (J.push(
      "translate(" + (0 - h.left).toString() + " " + (h.height + h.top).toString() + ")"
    ), J.push("scale(1 -1)"), h.top = h.left = 0);
    let re;
    switch (K < 0 && (K -= Math.floor(K / 4) * 4), K = K % 4, K) {
      case 1:
        re = h.height / 2 + h.top, J.unshift(
          "rotate(90 " + re.toString() + " " + re.toString() + ")"
        );
        break;
      case 2:
        J.unshift(
          "rotate(180 " + (h.width / 2 + h.left).toString() + " " + (h.height / 2 + h.top).toString() + ")"
        );
        break;
      case 3:
        re = h.width / 2 + h.left, J.unshift(
          "rotate(-90 " + re.toString() + " " + re.toString() + ")"
        );
        break;
    }
    K % 2 === 1 && (h.left !== h.top && (re = h.left, h.left = h.top, h.top = re), h.width !== h.height && (re = h.width, h.width = h.height, h.height = re)), J.length && (S = '<g transform="' + J.join(" ") + '">' + S + "</g>");
  });
  const m = d.width, C = d.height, T = h.width, R = h.height;
  let k, O;
  m === null ? (O = C === null ? "1em" : C === "auto" ? R : C, k = BT(O, T / R)) : (k = m === "auto" ? T : m, O = C === null ? BT(k, R / T) : C === "auto" ? R : C);
  const j = {}, G = (z, J) => {
    fF(J) || (j[z] = J.toString());
  };
  return G("width", k), G("height", O), j.viewBox = h.left.toString() + " " + h.top.toString() + " " + T.toString() + " " + R.toString(), {
    attributes: j,
    body: S
  };
}
const pF = /\sid="(\S+)"/g, hF = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let vF = 0;
function mF(i, o = hF) {
  const c = [];
  let d;
  for (; d = pF.exec(i); )
    c.push(d[1]);
  if (!c.length)
    return i;
  const h = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((S) => {
    const m = typeof o == "function" ? o(S) : o + (vF++).toString(), C = S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"),
      "$1" + m + h + "$3"
    );
  }), i = i.replace(new RegExp(h, "g"), ""), i;
}
const ZE = /* @__PURE__ */ Object.create(null);
function yF(i, o) {
  ZE[i] = o;
}
function KE(i) {
  return ZE[i] || ZE[""];
}
function Lw(i) {
  let o;
  if (typeof i.resources == "string")
    o = [i.resources];
  else if (o = i.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
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
const Uw = /* @__PURE__ */ Object.create(null), Ph = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], vg = [];
for (; Ph.length > 0; )
  Ph.length === 1 || Math.random() > 0.5 ? vg.push(Ph.shift()) : vg.push(Ph.pop());
Uw[""] = Lw({
  resources: ["https://api.iconify.design"].concat(vg)
});
function gF(i, o) {
  const c = Lw(o);
  return c === null ? !1 : (Uw[i] = c, !0);
}
function Aw(i) {
  return Uw[i];
}
const SF = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let WT = SF();
function EF(i, o) {
  const c = Aw(i);
  if (!c)
    return 0;
  let d;
  if (!c.maxURL)
    d = 0;
  else {
    let h = 0;
    c.resources.forEach((m) => {
      h = Math.max(h, m.length);
    });
    const S = o + ".json?icons=";
    d = c.maxURL - h - c.path.length - S.length;
  }
  return d;
}
function wF(i) {
  return i === 404;
}
const _F = (i, o, c) => {
  const d = [], h = EF(i, o), S = "icons";
  let m = {
    type: S,
    provider: i,
    prefix: o,
    icons: []
  }, C = 0;
  return c.forEach((T, R) => {
    C += T.length + 1, C >= h && R > 0 && (d.push(m), m = {
      type: S,
      provider: i,
      prefix: o,
      icons: []
    }, C = T.length), m.icons.push(T);
  }), d.push(m), d;
};
function xF(i) {
  if (typeof i == "string") {
    const o = Aw(i);
    if (o)
      return o.path;
  }
  return "/";
}
const CF = (i, o, c) => {
  if (!WT) {
    c("abort", 424);
    return;
  }
  let d = xF(o.provider);
  switch (o.type) {
    case "icons": {
      const S = o.prefix, C = o.icons.join(","), T = new URLSearchParams({
        icons: C
      });
      d += S + ".json?" + T.toString();
      break;
    }
    case "custom": {
      const S = o.uri;
      d += S.slice(0, 1) === "/" ? S.slice(1) : S;
      break;
    }
    default:
      c("abort", 400);
      return;
  }
  let h = 503;
  WT(i + d).then((S) => {
    const m = S.status;
    if (m !== 200) {
      setTimeout(() => {
        c(wF(m) ? "abort" : "next", m);
      });
      return;
    }
    return h = 501, S.json();
  }).then((S) => {
    if (typeof S != "object" || S === null) {
      setTimeout(() => {
        S === 404 ? c("abort", S) : c("next", h);
      });
      return;
    }
    setTimeout(() => {
      c("success", S);
    });
  }).catch(() => {
    c("next", h);
  });
}, TF = {
  prepare: _F,
  send: CF
};
function bF(i) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, c = /* @__PURE__ */ Object.create(null);
  i.sort((h, S) => h.provider !== S.provider ? h.provider.localeCompare(S.provider) : h.prefix !== S.prefix ? h.prefix.localeCompare(S.prefix) : h.name.localeCompare(S.name));
  let d = {
    provider: "",
    prefix: "",
    name: ""
  };
  return i.forEach((h) => {
    if (d.name === h.name && d.prefix === h.prefix && d.provider === h.provider)
      return;
    d = h;
    const S = h.provider, m = h.prefix, C = h.name, T = c[S] || (c[S] = /* @__PURE__ */ Object.create(null)), R = T[m] || (T[m] = hc(S, m));
    let k;
    C in R.icons ? k = o.loaded : m === "" || R.missing.has(C) ? k = o.missing : k = o.pending;
    const O = {
      provider: S,
      prefix: m,
      name: C
    };
    k.push(O);
  }), o;
}
function bR(i, o) {
  i.forEach((c) => {
    const d = c.loaderCallbacks;
    d && (c.loaderCallbacks = d.filter((h) => h.id !== o));
  });
}
function RF(i) {
  i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0, setTimeout(() => {
    i.pendingCallbacksFlag = !1;
    const o = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let c = !1;
    const d = i.provider, h = i.prefix;
    o.forEach((S) => {
      const m = S.icons, C = m.pending.length;
      m.pending = m.pending.filter((T) => {
        if (T.prefix !== h)
          return !0;
        const R = T.name;
        if (i.icons[R])
          m.loaded.push({
            provider: d,
            prefix: h,
            name: R
          });
        else if (i.missing.has(R))
          m.missing.push({
            provider: d,
            prefix: h,
            name: R
          });
        else
          return c = !0, !0;
        return !1;
      }), m.pending.length !== C && (c || bR([i], S.id), S.callback(
        m.loaded.slice(0),
        m.missing.slice(0),
        m.pending.slice(0),
        S.abort
      ));
    });
  }));
}
let DF = 0;
function kF(i, o, c) {
  const d = DF++, h = bR.bind(null, c, d);
  if (!o.pending.length)
    return h;
  const S = {
    id: d,
    icons: o,
    callback: i,
    abort: h
  };
  return c.forEach((m) => {
    (m.loaderCallbacks || (m.loaderCallbacks = [])).push(S);
  }), h;
}
function MF(i, o = !0, c = !1) {
  const d = [];
  return i.forEach((h) => {
    const S = typeof h == "string" ? Hg(h, o, c) : h;
    S && d.push(S);
  }), d;
}
var OF = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function NF(i, o, c, d) {
  const h = i.resources.length, S = i.random ? Math.floor(Math.random() * h) : i.index;
  let m;
  if (i.random) {
    let W = i.resources.slice(0);
    for (m = []; W.length > 1; ) {
      const ee = Math.floor(Math.random() * W.length);
      m.push(W[ee]), W = W.slice(0, ee).concat(W.slice(ee + 1));
    }
    m = m.concat(W);
  } else
    m = i.resources.slice(S).concat(i.resources.slice(0, S));
  const C = Date.now();
  let T = "pending", R = 0, k, O = null, j = [], G = [];
  typeof d == "function" && G.push(d);
  function z() {
    O && (clearTimeout(O), O = null);
  }
  function J() {
    T === "pending" && (T = "aborted"), z(), j.forEach((W) => {
      W.status === "pending" && (W.status = "aborted");
    }), j = [];
  }
  function he(W, ee) {
    ee && (G = []), typeof W == "function" && G.push(W);
  }
  function ge() {
    return {
      startTime: C,
      payload: o,
      status: T,
      queriesSent: R,
      queriesPending: j.length,
      subscribe: he,
      abort: J
    };
  }
  function K() {
    T = "failed", G.forEach((W) => {
      W(void 0, k);
    });
  }
  function re() {
    j.forEach((W) => {
      W.status === "pending" && (W.status = "aborted");
    }), j = [];
  }
  function se(W, ee, Me) {
    const He = ee !== "success";
    switch (j = j.filter((Qe) => Qe !== W), T) {
      case "pending":
        break;
      case "failed":
        if (He || !i.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (ee === "abort") {
      k = Me, K();
      return;
    }
    if (He) {
      k = Me, j.length || (m.length ? ce() : K());
      return;
    }
    if (z(), re(), !i.random) {
      const Qe = i.resources.indexOf(W.resource);
      Qe !== -1 && Qe !== i.index && (i.index = Qe);
    }
    T = "completed", G.forEach((Qe) => {
      Qe(Me);
    });
  }
  function ce() {
    if (T !== "pending")
      return;
    z();
    const W = m.shift();
    if (W === void 0) {
      if (j.length) {
        O = setTimeout(() => {
          z(), T === "pending" && (re(), K());
        }, i.timeout);
        return;
      }
      K();
      return;
    }
    const ee = {
      status: "pending",
      resource: W,
      callback: (Me, He) => {
        se(ee, Me, He);
      }
    };
    j.push(ee), R++, O = setTimeout(ce, i.rotate), c(W, o, ee.callback);
  }
  return setTimeout(ce), ge;
}
function RR(i) {
  const o = {
    ...OF,
    ...i
  };
  let c = [];
  function d() {
    c = c.filter((C) => C().status === "pending");
  }
  function h(C, T, R) {
    const k = NF(
      o,
      C,
      T,
      (O, j) => {
        d(), R && R(O, j);
      }
    );
    return c.push(k), k;
  }
  function S(C) {
    return c.find((T) => C(T)) || null;
  }
  return {
    query: h,
    find: S,
    setIndex: (C) => {
      o.index = C;
    },
    getIndex: () => o.index,
    cleanup: d
  };
}
function GT() {
}
const DE = /* @__PURE__ */ Object.create(null);
function LF(i) {
  if (!DE[i]) {
    const o = Aw(i);
    if (!o)
      return;
    const c = RR(o), d = {
      config: o,
      redundancy: c
    };
    DE[i] = d;
  }
  return DE[i];
}
function UF(i, o, c) {
  let d, h;
  if (typeof i == "string") {
    const S = KE(i);
    if (!S)
      return c(void 0, 424), GT;
    h = S.send;
    const m = LF(i);
    m && (d = m.redundancy);
  } else {
    const S = Lw(i);
    if (S) {
      d = RR(S);
      const m = i.resources ? i.resources[0] : "", C = KE(m);
      C && (h = C.send);
    }
  }
  return !d || !h ? (c(void 0, 424), GT) : d.query(o, h, c)().abort;
}
const QT = "iconify2", Jh = "iconify", DR = Jh + "-count", qT = Jh + "-version", kR = 36e5, AF = 168;
function XE(i, o) {
  try {
    return i.getItem(o);
  } catch {
  }
}
function zw(i, o, c) {
  try {
    return i.setItem(o, c), !0;
  } catch {
  }
}
function ZT(i, o) {
  try {
    i.removeItem(o);
  } catch {
  }
}
function JE(i, o) {
  return zw(i, DR, o.toString());
}
function ew(i) {
  return parseInt(XE(i, DR)) || 0;
}
const Pg = {
  local: !0,
  session: !0
}, MR = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let jw = !1;
function zF(i) {
  jw = i;
}
let og = typeof window > "u" ? {} : window;
function OR(i) {
  const o = i + "Storage";
  try {
    if (og && og[o] && typeof og[o].length == "number")
      return og[o];
  } catch {
  }
  Pg[i] = !1;
}
function NR(i, o) {
  const c = OR(i);
  if (!c)
    return;
  const d = XE(c, qT);
  if (d !== QT) {
    if (d) {
      const C = ew(c);
      for (let T = 0; T < C; T++)
        ZT(c, Jh + T.toString());
    }
    zw(c, qT, QT), JE(c, 0);
    return;
  }
  const h = Math.floor(Date.now() / kR) - AF, S = (C) => {
    const T = Jh + C.toString(), R = XE(c, T);
    if (typeof R == "string") {
      try {
        const k = JSON.parse(R);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > h && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, C))
          return !0;
      } catch {
      }
      ZT(c, T);
    }
  };
  let m = ew(c);
  for (let C = m - 1; C >= 0; C--)
    S(C) || (C === m - 1 ? (m--, JE(c, m)) : MR[i].add(C));
}
function LR() {
  if (!jw) {
    zF(!0);
    for (const i in Pg)
      NR(i, (o) => {
        const c = o.data, d = o.provider, h = c.prefix, S = hc(
          d,
          h
        );
        if (!Nw(S, c).length)
          return !1;
        const m = c.lastModified || -1;
        return S.lastModifiedCached = S.lastModifiedCached ? Math.min(S.lastModifiedCached, m) : m, !0;
      });
  }
}
function jF(i, o) {
  const c = i.lastModifiedCached;
  if (
    // Matches or newer
    c && c >= o
  )
    return c === o;
  if (i.lastModifiedCached = o, c)
    for (const d in Pg)
      NR(d, (h) => {
        const S = h.data;
        return h.provider !== i.provider || S.prefix !== i.prefix || S.lastModified === o;
      });
  return !0;
}
function FF(i, o) {
  jw || LR();
  function c(d) {
    let h;
    if (!Pg[d] || !(h = OR(d)))
      return;
    const S = MR[d];
    let m;
    if (S.size)
      S.delete(m = Array.from(S).shift());
    else if (m = ew(h), !JE(h, m + 1))
      return;
    const C = {
      cached: Math.floor(Date.now() / kR),
      provider: i.provider,
      data: o
    };
    return zw(
      h,
      Jh + m.toString(),
      JSON.stringify(C)
    );
  }
  o.lastModified && !jF(i, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), c("local") || c("session"));
}
function KT() {
}
function HF(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, RF(i);
  }));
}
function PF(i, o) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(o).sort() : i.iconsToLoad = o, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: d } = i, h = i.iconsToLoad;
    delete i.iconsToLoad;
    let S;
    if (!h || !(S = KE(c)))
      return;
    S.prepare(c, d, h).forEach((C) => {
      UF(c, C, (T) => {
        if (typeof T != "object")
          C.icons.forEach((R) => {
            i.missing.add(R);
          });
        else
          try {
            const R = Nw(
              i,
              T
            );
            if (!R.length)
              return;
            const k = i.pendingIcons;
            k && R.forEach((O) => {
              k.delete(O);
            }), FF(i, T);
          } catch (R) {
            console.error(R);
          }
        HF(i);
      });
    });
  }));
}
const YF = (i, o) => {
  const c = MF(i, !0, xR()), d = bF(c);
  if (!d.pending.length) {
    let T = !0;
    return o && setTimeout(() => {
      T && o(
        d.loaded,
        d.missing,
        d.pending,
        KT
      );
    }), () => {
      T = !1;
    };
  }
  const h = /* @__PURE__ */ Object.create(null), S = [];
  let m, C;
  return d.pending.forEach((T) => {
    const { provider: R, prefix: k } = T;
    if (k === C && R === m)
      return;
    m = R, C = k, S.push(hc(R, k));
    const O = h[R] || (h[R] = /* @__PURE__ */ Object.create(null));
    O[k] || (O[k] = []);
  }), d.pending.forEach((T) => {
    const { provider: R, prefix: k, name: O } = T, j = hc(R, k), G = j.pendingIcons || (j.pendingIcons = /* @__PURE__ */ new Set());
    G.has(O) || (G.add(O), h[R][k].push(O));
  }), S.forEach((T) => {
    const { provider: R, prefix: k } = T;
    h[R][k].length && PF(T, h[R][k]);
  }), o ? kF(o, d, S) : KT;
};
function IF(i, o) {
  const c = {
    ...i
  };
  for (const d in o) {
    const h = o[d], S = typeof h;
    d in CR ? (h === null || h && (S === "string" || S === "number")) && (c[d] = h) : S === typeof c[d] && (c[d] = d === "rotate" ? h % 4 : h);
  }
  return c;
}
const VF = /[\s,]+/;
function $F(i, o) {
  o.split(VF).forEach((c) => {
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
function BF(i, o = 0) {
  const c = i.replace(/^-?[0-9.]*/, "");
  function d(h) {
    for (; h < 0; )
      h += 4;
    return h % 4;
  }
  if (c === "") {
    const h = parseInt(i);
    return isNaN(h) ? 0 : d(h);
  } else if (c !== i) {
    let h = 0;
    switch (c) {
      case "%":
        h = 25;
        break;
      case "deg":
        h = 90;
    }
    if (h) {
      let S = parseFloat(i.slice(0, i.length - c.length));
      return isNaN(S) ? 0 : (S = S / h, S % 1 === 0 ? d(S) : 0);
    }
  }
  return o;
}
function WF(i, o) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const d in o)
    c += " " + d + '="' + o[d] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function GF(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function QF(i) {
  return "data:image/svg+xml," + GF(i);
}
function qF(i) {
  return 'url("' + QF(i) + '")';
}
let Wh;
function ZF() {
  try {
    Wh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Wh = null;
  }
}
function KF(i) {
  return Wh === void 0 && ZF(), Wh ? Wh.createHTML(i) : i;
}
const UR = {
  ...TR,
  inline: !1
}, XF = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, JF = {
  display: "inline-block"
}, tw = {
  backgroundColor: "currentColor"
}, AR = {
  backgroundColor: "transparent"
}, XT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, JT = {
  WebkitMask: tw,
  mask: tw,
  background: AR
};
for (const i in JT) {
  const o = JT[i];
  for (const c in XT)
    o[i + c] = XT[c];
}
const e3 = {
  ...UR,
  inline: !0
};
function eb(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const t3 = (i, o, c, d) => {
  const h = c ? e3 : UR, S = IF(h, o), m = o.mode || "svg", C = {}, T = o.style || {}, R = {
    ...m === "svg" ? XF : {},
    ref: d
  };
  for (let ge in o) {
    const K = o[ge];
    if (K !== void 0)
      switch (ge) {
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
          S[ge] = K === !0 || K === "true" || K === 1;
          break;
        case "flip":
          typeof K == "string" && $F(S, K);
          break;
        case "color":
          C.color = K;
          break;
        case "rotate":
          typeof K == "string" ? S[ge] = BF(K) : typeof K == "number" && (S[ge] = K);
          break;
        case "ariaHidden":
        case "aria-hidden":
          K !== !0 && K !== "true" && delete R["aria-hidden"];
          break;
        default:
          h[ge] === void 0 && (R[ge] = K);
      }
  }
  const k = dF(i, S), O = k.attributes;
  if (S.inline && (C.verticalAlign = "-0.125em"), m === "svg") {
    R.style = {
      ...C,
      ...T
    }, Object.assign(R, O);
    let ge = 0, K = o.id;
    return typeof K == "string" && (K = K.replace(/-/g, "_")), R.dangerouslySetInnerHTML = {
      __html: KF(mF(k.body, K ? () => K + "ID" + ge++ : "iconifyReact"))
    }, kr.createElement("svg", R);
  }
  const { body: j, width: G, height: z } = i, J = m === "mask" || (m === "bg" ? !1 : j.indexOf("currentColor") !== -1), he = WF(j, {
    ...O,
    width: G + "",
    height: z + ""
  });
  return R.style = {
    ...C,
    "--svg": qF(he),
    width: eb(O.width),
    height: eb(O.height),
    ...JF,
    ...J ? tw : AR,
    ...T
  }, kr.createElement("span", R);
};
xR(!0);
yF("", TF);
if (typeof document < "u" && typeof window < "u") {
  LR();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const o = i.IconifyPreload, c = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((d) => {
      try {
        // Check if item is an object and not null/array
        (typeof d != "object" || d === null || d instanceof Array || // Check for 'icons' and 'prefix'
        typeof d.icons != "object" || typeof d.prefix != "string" || // Add icon set
        !uF(d)) && console.error(c);
      } catch {
        console.error(c);
      }
    });
  }
  if (i.IconifyProviders !== void 0) {
    const o = i.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let c in o) {
        const d = "IconifyProviders[" + c + "] is invalid.";
        try {
          const h = o[c];
          if (typeof h != "object" || !h || h.resources === void 0)
            continue;
          gF(c, h) || console.error(d);
        } catch {
          console.error(d);
        }
      }
  }
}
class zR extends kr.Component {
  constructor(o) {
    super(o), this.state = {
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
  _setData(o) {
    this.state.icon !== o && this.setState({
      icon: o
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(o) {
    const c = this.state, d = this.props.icon;
    if (typeof d == "object" && d !== null && typeof d.body == "string") {
      this._icon = "", this._abortLoading(), (o || c.icon === null) && this._setData({
        data: d
      });
      return;
    }
    let h;
    if (typeof d != "string" || (h = Hg(d, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const S = lF(h);
    if (!S) {
      (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), S !== null && (this._loading = {
        name: d,
        abort: YF([h], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== d || c.icon === null) {
      this._abortLoading(), this._icon = d;
      const m = ["iconify"];
      h.prefix !== "" && m.push("iconify--" + h.prefix), h.provider !== "" && m.push("iconify--" + h.provider), this._setData({
        data: S,
        classes: m
      }), this.props.onLoad && this.props.onLoad(d);
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
  componentDidUpdate(o) {
    o.icon !== this.props.icon && this._checkIcon(!0);
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
    const o = this.props, c = this.state.icon;
    if (c === null)
      return o.children ? o.children : kr.createElement("span", {});
    let d = o;
    return c.classes && (d = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + c.classes.join(" ")
    }), t3({
      ...Ow,
      ...c.data
    }, d, o._inline, o._ref);
  }
}
const n3 = kr.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !1
  };
  return kr.createElement(zR, d);
});
kr.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !0
  };
  return kr.createElement(zR, d);
});
const tb = (i) => {
  let o;
  const c = /* @__PURE__ */ new Set(), d = (T, R) => {
    const k = typeof T == "function" ? T(o) : T;
    if (!Object.is(k, o)) {
      const O = o;
      o = R ?? typeof k != "object" ? k : Object.assign({}, o, k), c.forEach((j) => j(o, O));
    }
  }, h = () => o, C = { setState: d, getState: h, subscribe: (T) => (c.add(T), () => c.delete(T)), destroy: () => {
    c.clear();
  } };
  return o = i(d, h, C), C;
}, r3 = (i) => i ? tb(i) : tb;
var nw = { exports: {} }, kE = {}, ug = { exports: {} }, ME = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nb;
function a3() {
  if (nb)
    return ME;
  nb = 1;
  var i = kr;
  function o(O, j) {
    return O === j && (O !== 0 || 1 / O === 1 / j) || O !== O && j !== j;
  }
  var c = typeof Object.is == "function" ? Object.is : o, d = i.useState, h = i.useEffect, S = i.useLayoutEffect, m = i.useDebugValue;
  function C(O, j) {
    var G = j(), z = d({ inst: { value: G, getSnapshot: j } }), J = z[0].inst, he = z[1];
    return S(function() {
      J.value = G, J.getSnapshot = j, T(J) && he({ inst: J });
    }, [O, G, j]), h(function() {
      return T(J) && he({ inst: J }), O(function() {
        T(J) && he({ inst: J });
      });
    }, [O]), m(G), G;
  }
  function T(O) {
    var j = O.getSnapshot;
    O = O.value;
    try {
      var G = j();
      return !c(O, G);
    } catch {
      return !0;
    }
  }
  function R(O, j) {
    return j();
  }
  var k = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? R : C;
  return ME.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : k, ME;
}
var OE = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rb;
function i3() {
  return rb || (rb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = kr, o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(re) {
      {
        for (var se = arguments.length, ce = new Array(se > 1 ? se - 1 : 0), W = 1; W < se; W++)
          ce[W - 1] = arguments[W];
        d("error", re, ce);
      }
    }
    function d(re, se, ce) {
      {
        var W = o.ReactDebugCurrentFrame, ee = W.getStackAddendum();
        ee !== "" && (se += "%s", ce = ce.concat([ee]));
        var Me = ce.map(function(He) {
          return String(He);
        });
        Me.unshift("Warning: " + se), Function.prototype.apply.call(console[re], console, Me);
      }
    }
    function h(re, se) {
      return re === se && (re !== 0 || 1 / re === 1 / se) || re !== re && se !== se;
    }
    var S = typeof Object.is == "function" ? Object.is : h, m = i.useState, C = i.useEffect, T = i.useLayoutEffect, R = i.useDebugValue, k = !1, O = !1;
    function j(re, se, ce) {
      k || i.startTransition !== void 0 && (k = !0, c("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var W = se();
      if (!O) {
        var ee = se();
        S(W, ee) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), O = !0);
      }
      var Me = m({
        inst: {
          value: W,
          getSnapshot: se
        }
      }), He = Me[0].inst, Qe = Me[1];
      return T(function() {
        He.value = W, He.getSnapshot = se, G(He) && Qe({
          inst: He
        });
      }, [re, W, se]), C(function() {
        G(He) && Qe({
          inst: He
        });
        var it = function() {
          G(He) && Qe({
            inst: He
          });
        };
        return re(it);
      }, [re]), R(W), W;
    }
    function G(re) {
      var se = re.getSnapshot, ce = re.value;
      try {
        var W = se();
        return !S(ce, W);
      } catch {
        return !0;
      }
    }
    function z(re, se, ce) {
      return se();
    }
    var J = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", he = !J, ge = he ? z : j, K = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : ge;
    OE.useSyncExternalStore = K, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), OE;
}
var ab;
function jR() {
  return ab || (ab = 1, process.env.NODE_ENV === "production" ? ug.exports = a3() : ug.exports = i3()), ug.exports;
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
var ib;
function l3() {
  if (ib)
    return kE;
  ib = 1;
  var i = kr, o = jR();
  function c(R, k) {
    return R === k && (R !== 0 || 1 / R === 1 / k) || R !== R && k !== k;
  }
  var d = typeof Object.is == "function" ? Object.is : c, h = o.useSyncExternalStore, S = i.useRef, m = i.useEffect, C = i.useMemo, T = i.useDebugValue;
  return kE.useSyncExternalStoreWithSelector = function(R, k, O, j, G) {
    var z = S(null);
    if (z.current === null) {
      var J = { hasValue: !1, value: null };
      z.current = J;
    } else
      J = z.current;
    z = C(function() {
      function ge(W) {
        if (!K) {
          if (K = !0, re = W, W = j(W), G !== void 0 && J.hasValue) {
            var ee = J.value;
            if (G(ee, W))
              return se = ee;
          }
          return se = W;
        }
        if (ee = se, d(re, W))
          return ee;
        var Me = j(W);
        return G !== void 0 && G(ee, Me) ? ee : (re = W, se = Me);
      }
      var K = !1, re, se, ce = O === void 0 ? null : O;
      return [function() {
        return ge(k());
      }, ce === null ? void 0 : function() {
        return ge(ce());
      }];
    }, [k, O, j, G]);
    var he = h(R, z[0], z[1]);
    return m(function() {
      J.hasValue = !0, J.value = he;
    }, [he]), T(he), he;
  }, kE;
}
var NE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lb;
function o3() {
  return lb || (lb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = kr, o = jR();
    function c(k, O) {
      return k === O && (k !== 0 || 1 / k === 1 / O) || k !== k && O !== O;
    }
    var d = typeof Object.is == "function" ? Object.is : c, h = o.useSyncExternalStore, S = i.useRef, m = i.useEffect, C = i.useMemo, T = i.useDebugValue;
    function R(k, O, j, G, z) {
      var J = S(null), he;
      J.current === null ? (he = {
        hasValue: !1,
        value: null
      }, J.current = he) : he = J.current;
      var ge = C(function() {
        var ce = !1, W, ee, Me = function(Mt) {
          if (!ce) {
            ce = !0, W = Mt;
            var Be = G(Mt);
            if (z !== void 0 && he.hasValue) {
              var Ke = he.value;
              if (z(Ke, Be))
                return ee = Ke, Ke;
            }
            return ee = Be, Be;
          }
          var Qt = W, gt = ee;
          if (d(Qt, Mt))
            return gt;
          var fn = G(Mt);
          return z !== void 0 && z(gt, fn) ? gt : (W = Mt, ee = fn, fn);
        }, He = j === void 0 ? null : j, Qe = function() {
          return Me(O());
        }, it = He === null ? void 0 : function() {
          return Me(He());
        };
        return [Qe, it];
      }, [O, j, G, z]), K = ge[0], re = ge[1], se = h(k, K, re);
      return m(function() {
        he.hasValue = !0, he.value = se;
      }, [se]), T(se), se;
    }
    NE.useSyncExternalStoreWithSelector = R, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), NE;
}
process.env.NODE_ENV === "production" ? nw.exports = l3() : nw.exports = o3();
var u3 = nw.exports;
const s3 = /* @__PURE__ */ DL(u3), { useSyncExternalStoreWithSelector: c3 } = s3;
function f3(i, o = i.getState, c) {
  const d = c3(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    o,
    c
  );
  return RL(d), d;
}
const ob = (i) => {
  const o = typeof i == "function" ? r3(i) : i, c = (d, h) => f3(o, d, h);
  return Object.assign(c, o), c;
}, d3 = (i) => i ? ob(i) : ob, p3 = (i, o) => (...c) => Object.assign({}, i, o(...c)), FR = d3(
  p3(
    {
      isOpen: !1,
      current: ""
    },
    (i) => ({
      openModal: (o) => i({ isOpen: !0, current: o }),
      closeModal: () => {
        const o = document.querySelector("#modal-root");
        o && (o.classList.add("closed"), setTimeout(() => {
          o.classList.remove("closed"), i({ isOpen: !1, current: "" });
        }, 190));
      }
    })
  )
), h3 = ({
  children: i,
  currentName: o,
  variant: c = "neutral",
  size: d = "normal",
  closeButton: h = !1,
  onClose: S = () => {
  }
}) => {
  const { isOpen: m, current: C, closeModal: T } = FR(), R = document.querySelector("#modal-root"), k = tr(null);
  return Cg(() => {
    m && k.current && k.current.focus();
  }, [m]), !m || o !== C ? null : R ? Jj.createPortal(
    /* @__PURE__ */ I.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: k,
        onKeyDown: (O) => {
          O.key === "Escape" && (S(), T());
        },
        className: "modal",
        children: [
          /* @__PURE__ */ I.jsx(
            "div",
            {
              className: "modal-overlay",
              onClick: () => {
                S(), T();
              }
            }
          ),
          /* @__PURE__ */ I.jsxs(
            "div",
            {
              className: `modal-body container rounded-box bg-${c} ${d}`,
              children: [
                h && /* @__PURE__ */ I.jsx(
                  "button",
                  {
                    type: "button",
                    className: "close-btn",
                    onClick: () => {
                      S(), T();
                    },
                    children: /* @__PURE__ */ I.jsx(n3, { icon: "mingcute:close-fill", height: 16 })
                  }
                ),
                i
              ]
            }
          )
        ]
      }
    ),
    R
  ) : null;
}, v3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], m3 = ({
  children: i,
  data: o,
  itemsPerPage: c = 30
}) => {
  const d = dc(() => o.length, [o]), [h, S] = Dr(1), [m, C] = Dr(c), T = dc(() => o.slice(
    (h - 1) * m,
    h * m
  ), [o, h, m]);
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx("div", { className: "table-content custom-scroll", children: i({ data: T() }) }),
    /* @__PURE__ */ I.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: h === 1,
          onClick: () => S(1),
          children: /* @__PURE__ */ I.jsx(Rr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: h === 1,
          onClick: () => S((R) => R - 1),
          children: /* @__PURE__ */ I.jsx(Rr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ I.jsxs("span", { children: [
        "Página ",
        /* @__PURE__ */ I.jsx("span", { className: "page", children: h }),
        " de",
        " ",
        /* @__PURE__ */ I.jsx("span", { className: "page", children: Math.ceil(d() / m) })
      ] }),
      /* @__PURE__ */ I.jsx(
        cw,
        {
          items: v3,
          currentSelected: c,
          labelExtractor: (R) => `Por página ${R}`,
          keyExtractor: (R) => R,
          showQty: 3,
          position: "bottom",
          onChange: (R, k) => {
            const O = Math.ceil(d() / k), j = h * m, z = (h > O ? O * k : h * k) / j, J = z !== 1 ? Math.floor(h / z) : h;
            h > O ? S(O) : S(J < 1 ? 1 : J), C(k);
          }
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(d() / m) === h,
          onClick: () => S((R) => R + 1),
          children: /* @__PURE__ */ I.jsx(Rr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(d() / m) === h,
          onClick: () => S(Math.ceil(d() / m)),
          title: "Last Page",
          children: /* @__PURE__ */ I.jsx(Rr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ I.jsxs("span", { children: [
        d(),
        " itens"
      ] })
    ] })
  ] });
}, HR = (i, o, c) => {
  let d;
  return (...h) => {
    const m = () => {
      d = null, c || i.apply(void 0, h);
    }, C = c && !d;
    clearTimeout(d), d = setTimeout(m, o), C && i.apply(void 0, h);
  };
}, y3 = (i) => {
  const [o, c] = Dr(i ?? null), [d, h] = Dr({
    top: (o == null ? void 0 : o.scrollTop) ?? 0,
    scrollHeight: (o == null ? void 0 : o.scrollHeight) ?? 0,
    height: (o == null ? void 0 : o.clientHeight) ?? 0
  });
  return Cg(() => {
    const S = () => {
      o && h({
        top: o.scrollTop,
        scrollHeight: o.scrollHeight,
        height: o.clientHeight
      });
    };
    if (o)
      return o == null || o.addEventListener("scroll", HR(S, 150)), () => {
        o == null || o.removeEventListener("scroll", S);
      };
  }, [o]), o ? { ...d, scrollTo: o.scrollTo, root: o, setRoot: c, changeScrollData: h } : {
    top: 0,
    scrollHeight: 0,
    height: 0,
    scrollTo: () => {
    },
    root: o,
    setRoot: c,
    changeScrollData: h
  };
}, g3 = ({
  children: i,
  data: o,
  tableContainerRef: c
}) => {
  const { height: d, scrollHeight: h, top: S, root: m, setRoot: C, changeScrollData: T } = y3(c == null ? void 0 : c.current), R = tr(0), k = tr(R.current * 2), O = 40, j = dc(() => c.current === null ? 10 : Math.ceil(c.current.clientHeight / O), [c]);
  Cg(() => (m === null && C(c.current), R.current = j(), () => {
  }), [j, c, m, C, T]);
  const G = dc(() => {
    let z = 0;
    return m === null ? [] : (R.current < 10 && (R.current = j() * 2), Math.ceil(d + S) === h && (k.current += R.current, m.scrollTo({
      top: R.current * O
    })), k.current > R.current * 3 && S > 0 && (z = k.current - R.current * 3), S === 0 && k.current > R.current * 3 && (k.current -= R.current, z = k.current - R.current * 3, m.scrollTo({
      top: R.current * O
    })), o.slice(z, k.current));
  }, [o, d, j, h, S, m, R]);
  return i({ data: G() });
}, S3 = {
  scroll: g3,
  pagination: m3
}, E3 = ({
  mode: i,
  children: o,
  data: c
}) => {
  const d = tr(null), h = S3[i];
  return /* @__PURE__ */ I.jsx("div", { className: `table-container ${i}`, ref: d, children: /* @__PURE__ */ I.jsx(h, { tableContainerRef: d, data: c, children: o }) });
}, w3 = ({
  closeModal: i,
  config: o
}) => /* @__PURE__ */ I.jsxs(h3, { currentName: "table-config-modal", children: [
  o.map((c) => /* @__PURE__ */ I.jsxs("div", { className: "container row between-center", children: [
    /* @__PURE__ */ I.jsx("span", { children: c }),
    /* @__PURE__ */ I.jsx(
      cw,
      {
        variant: "neutral",
        items: ["Expected", "Overhelmed", "Below Expectation"]
      }
    )
  ] }, c)),
  /* @__PURE__ */ I.jsx("button", { className: "btn btn-primary ring-info", onClick: i, children: "Save" })
] }), _3 = ({
  index: i,
  columns: o,
  translation: c,
  column: d,
  ordersType: h,
  orderedHeader: S,
  order: m,
  setOrder: C,
  tBodyRef: T,
  mousePosition: R
}) => /* @__PURE__ */ I.jsx("th", { children: /* @__PURE__ */ I.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ I.jsx("span", { children: c(d) }),
  /* @__PURE__ */ I.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ I.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${h[m] === "asc" && S.current === d ? "active" : ""}`,
        onClick: () => {
          C(
            (k) => k === 1 && S.current === d ? 0 : 1
          ), S.current = d;
        },
        children: /* @__PURE__ */ I.jsx(Rr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ I.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${h[m] === "desc" && S.current === d ? "active" : ""}`,
        onClick: () => {
          C(
            (k) => k === 2 && S.current === d ? 0 : 2
          ), S.current = d;
        },
        children: /* @__PURE__ */ I.jsx(Rr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  o.length - 1 !== i && /* @__PURE__ */ I.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (k) => {
        R.current.startPosition = k.clientX;
      },
      onMouseMove: (k) => {
        var z;
        if (T.current === null || R.current.startPosition === 0)
          return;
        R.current.currentPosition = k.clientX;
        const O = (z = T.current.firstChild) == null ? void 0 : z.childNodes[i];
        if (O === null)
          return;
        const j = O.getBoundingClientRect().width, G = R.current.currentPosition - R.current.startPosition;
        O.style.width = `${j + G}px`, R.current.startPosition = R.current.currentPosition;
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
      onClick: (k) => {
        var j;
        if (k.detail < 2 || T.current === null)
          return;
        const O = (j = T.current.firstChild) == null ? void 0 : j.childNodes[i];
        O !== null && (O.style.width = "auto");
      },
      children: [
        /* @__PURE__ */ I.jsx("span", {}),
        /* @__PURE__ */ I.jsx("span", {})
      ]
    }
  )
] }) }), x3 = (i, o, c = "asc") => {
  if (c === "default" || o === null)
    return i;
  const d = c === "asc" ? 1 : -1;
  return i.slice().sort((h, S) => {
    const m = h[o], C = S[o];
    return m < C ? -1 * d : m > C ? 1 * d : 0;
  });
}, ub = {
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
}, sb = ["default", "asc", "desc"], z3 = ({
  headers: i,
  data: o,
  hideColumn: c = [],
  dataConfig: d,
  showObject: h,
  // headersConfig,
  action: S,
  mode: m = "pagination"
}) => {
  const { closeModal: C, openModal: T } = FR(), R = (se) => Object.hasOwnProperty.call(ub, se) ? ub[se] : se, [k] = Dr(m), [O, j] = Dr(0), G = tr(null), z = tr(null), J = tr({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [he, ge] = Dr(""), K = dc(() => o.filter((se) => {
    if (he.trim() === "")
      return o;
    const ce = he.toLowerCase().trim();
    return Object.entries(se).some(([ee, Me]) => {
      var He;
      return c.includes(ee) ? !1 : typeof Me == "object" && Object.hasOwnProperty.call(d, ee) ? String((He = d == null ? void 0 : d[ee]) == null ? void 0 : He.call(d, Me, se)).toLowerCase().includes(ce) : typeof Me == "object" ? String(Object.values(Me)[0]).toLowerCase().includes(ce) : String(Me).toLowerCase().includes(ce);
    });
  }), [he, c, o, d]), re = dc(() => x3(K(), G.current, sb[O]), [O, K, G]);
  return /* @__PURE__ */ I.jsxs("div", { className: "table-full", children: [
    /* @__PURE__ */ I.jsxs("div", { className: "group rounded-box no-print", children: [
      /* @__PURE__ */ I.jsx("label", { className: "bg-primary", htmlFor: "find-all-table", children: "Buscar" }),
      /* @__PURE__ */ I.jsx(
        "input",
        {
          className: "input input-neutral ring-info",
          id: "find-all-table",
          placeholder: "Filtrar por....",
          style: { flex: "1" },
          onChange: HR((se) => {
            ge(se.target.value);
          }, 300)
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: "btn btn-primary btn-icon",
          style: { flex: "0" },
          onClick: () => T("table-config-modal"),
          children: /* @__PURE__ */ I.jsx(Rr, { icon: "mdi:filter" })
        }
      )
    ] }),
    /* @__PURE__ */ I.jsx(E3, { mode: k, data: re(), children: ({ data: se }) => {
      if (se.length === 0)
        return null;
      let ce = 0;
      return /* @__PURE__ */ I.jsxs("table", { className: "table", children: [
        /* @__PURE__ */ I.jsx("thead", { children: /* @__PURE__ */ I.jsxs("tr", { children: [
          i && i.map((W, ee) => c.includes(W) ? null : (ee++, /* @__PURE__ */ I.jsx("th", { children: W }, ee))),
          i === void 0 && Object.keys(se[0]).map((W) => c.includes(W) ? null : (ce++, /* @__PURE__ */ I.jsx(
            _3,
            {
              tBodyRef: z,
              mousePosition: J,
              orderedHeader: G,
              order: O,
              setOrder: j,
              column: W,
              index: ce - 1,
              columns: Object.keys(se[0]),
              ordersType: sb,
              translation: R
            },
            ce - 1
          ))),
          S && /* @__PURE__ */ I.jsx("th", { children: "Ação" })
        ] }) }),
        /* @__PURE__ */ I.jsx("tbody", { ref: z, children: se.map((W, ee) => /* @__PURE__ */ I.jsxs("tr", { tabIndex: 0, children: [
          Object.entries(W).map(([Me, He], Qe) => {
            var Mt;
            let it;
            return c.includes(Me) ? null : (typeof He == "object" && (d == null ? void 0 : d[Me]) === void 0 ? it = Object.values(He)[0] : Object.hasOwnProperty.call(d ?? {}, Me) ? it = (Mt = d == null ? void 0 : d[Me]) == null ? void 0 : Mt.call(
              d,
              He,
              W
            ) : it = He, /* @__PURE__ */ I.jsx(
              "td",
              {
                title: "Click to copy",
                style: { width: "auto" },
                children: typeof He != "object" || !(h != null && h[Me]) ? it : /* @__PURE__ */ I.jsx("div", { className: "cell-container", children: /* @__PURE__ */ I.jsxs("div", { className: "cell-container--header", children: [
                  it,
                  /* @__PURE__ */ I.jsx(
                    "button",
                    {
                      className: "btn btn-primary btn-icon btn-xs btn-square",
                      onClick: (Be) => {
                        var gt;
                        const Ke = (gt = Be.currentTarget.parentNode) == null ? void 0 : gt.parentNode;
                        if (Ke === null)
                          return;
                        if (Ke.lastChild.className === "content") {
                          Ke.removeChild(
                            Ke.lastChild
                          );
                          return;
                        }
                        const Qt = document.createElement("ul");
                        Qt.className = "content", Object.entries(He).forEach(
                          ([fn, fe]) => {
                            const Ue = document.createElement("li");
                            Ue.innerText = `${R(
                              fn
                            )}: ${fe}`, Qt.appendChild(Ue);
                          }
                        ), Ke.appendChild(
                          Qt
                        );
                      },
                      children: /* @__PURE__ */ I.jsx(Rr, { icon: "eva:arrow-down-fill" })
                    }
                  )
                ] }) })
              },
              Qe
            ));
          }),
          S && S(W, ee)
        ] }, ee)) })
      ] });
    } }),
    /* @__PURE__ */ I.jsx(w3, { config: Object.keys(o[0]), closeModal: C })
  ] });
};
export {
  k3 as Chart,
  N3 as DateRangePicker,
  L3 as DetailedWorkDay,
  U3 as Header,
  h3 as Modal,
  cw as Select,
  O3 as ShowPassword,
  A3 as Sidebar,
  z3 as Table,
  z2 as Textfield,
  HR as debounce,
  FR as useModal,
  y3 as useScroll
};
