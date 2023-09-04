import kr, { useRef as xn, useState as _n, useCallback as Xu, useEffect as md, Fragment as RL, useDebugValue as kL } from "react";
function ML(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Nw = { exports: {} }, jh = {};
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
function OL() {
  if (gT)
    return jh;
  gT = 1;
  var a = kr, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, h = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(C, T, b) {
    var k, O = {}, z = null, B = null;
    b !== void 0 && (z = "" + b), T.key !== void 0 && (z = "" + T.key), T.ref !== void 0 && (B = T.ref);
    for (k in T)
      d.call(T, k) && !g.hasOwnProperty(k) && (O[k] = T[k]);
    if (C && C.defaultProps)
      for (k in T = C.defaultProps, T)
        O[k] === void 0 && (O[k] = T[k]);
    return { $$typeof: o, type: C, key: z, ref: B, props: O, _owner: h.current };
  }
  return jh.Fragment = s, jh.jsx = m, jh.jsxs = m, jh;
}
var Ah = {};
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
function NL() {
  return ST || (ST = 1, process.env.NODE_ENV !== "production" && function() {
    var a = kr, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), C = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), A = Symbol.iterator, Q = "@@iterator";
    function he(M) {
      if (M === null || typeof M != "object")
        return null;
      var ae = A && M[A] || M[Q];
      return typeof ae == "function" ? ae : null;
    }
    var we = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(M) {
      {
        for (var ae = arguments.length, ge = new Array(ae > 1 ? ae - 1 : 0), Ie = 1; Ie < ae; Ie++)
          ge[Ie - 1] = arguments[Ie];
        te("error", M, ge);
      }
    }
    function te(M, ae, ge) {
      {
        var Ie = we.ReactDebugCurrentFrame, it = Ie.getStackAddendum();
        it !== "" && (ae += "%s", ge = ge.concat([it]));
        var gt = ge.map(function(lt) {
          return String(lt);
        });
        gt.unshift("Warning: " + ae), Function.prototype.apply.call(console[M], console, gt);
      }
    }
    var Se = !1, oe = !1, G = !1, ee = !1, xe = !1, de;
    de = Symbol.for("react.module.reference");
    function pe(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === d || M === g || xe || M === h || M === b || M === k || ee || M === B || Se || oe || G || typeof M == "object" && M !== null && (M.$$typeof === z || M.$$typeof === O || M.$$typeof === m || M.$$typeof === C || M.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === de || M.getModuleId !== void 0));
    }
    function Qe(M, ae, ge) {
      var Ie = M.displayName;
      if (Ie)
        return Ie;
      var it = ae.displayName || ae.name || "";
      return it !== "" ? ge + "(" + it + ")" : ge;
    }
    function Je(M) {
      return M.displayName || "Context";
    }
    function Ae(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case d:
          return "Fragment";
        case s:
          return "Portal";
        case g:
          return "Profiler";
        case h:
          return "StrictMode";
        case b:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case C:
            var ae = M;
            return Je(ae) + ".Consumer";
          case m:
            var ge = M;
            return Je(ge._context) + ".Provider";
          case T:
            return Qe(M, M.render, "ForwardRef");
          case O:
            var Ie = M.displayName || null;
            return Ie !== null ? Ie : Ae(M.type) || "Memo";
          case z: {
            var it = M, gt = it._payload, lt = it._init;
            try {
              return Ae(lt(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, Pt = 0, yt, on, fe, Fe, Ee, wt, Tt;
    function $n() {
    }
    $n.__reactDisabledLog = !0;
    function yr() {
      {
        if (Pt === 0) {
          yt = console.log, on = console.info, fe = console.warn, Fe = console.error, Ee = console.group, wt = console.groupCollapsed, Tt = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: $n,
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
        Pt++;
      }
    }
    function ri() {
      {
        if (Pt--, Pt === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, M, {
              value: yt
            }),
            info: et({}, M, {
              value: on
            }),
            warn: et({}, M, {
              value: fe
            }),
            error: et({}, M, {
              value: Fe
            }),
            group: et({}, M, {
              value: Ee
            }),
            groupCollapsed: et({}, M, {
              value: wt
            }),
            groupEnd: et({}, M, {
              value: Tt
            })
          });
        }
        Pt < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Cn = we.ReactCurrentDispatcher, pa;
    function ar(M, ae, ge) {
      {
        if (pa === void 0)
          try {
            throw Error();
          } catch (it) {
            var Ie = it.stack.trim().match(/\n( *(at )?)/);
            pa = Ie && Ie[1] || "";
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
        var ge = ai.get(M);
        if (ge !== void 0)
          return ge;
      }
      var Ie;
      Mr = !0;
      var it = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = Cn.current, Cn.current = null, yr();
      try {
        if (ae) {
          var lt = function() {
            throw Error();
          };
          if (Object.defineProperty(lt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(lt, []);
            } catch (Et) {
              Ie = Et;
            }
            Reflect.construct(M, [], lt);
          } else {
            try {
              lt.call();
            } catch (Et) {
              Ie = Et;
            }
            M.call(lt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            Ie = Et;
          }
          M();
        }
      } catch (Et) {
        if (Et && Ie && typeof Et.stack == "string") {
          for (var Be = Et.stack.split(`
`), jn = Ie.stack.split(`
`), qt = Be.length - 1, Zt = jn.length - 1; qt >= 1 && Zt >= 0 && Be[qt] !== jn[Zt]; )
            Zt--;
          for (; qt >= 1 && Zt >= 0; qt--, Zt--)
            if (Be[qt] !== jn[Zt]) {
              if (qt !== 1 || Zt !== 1)
                do
                  if (qt--, Zt--, Zt < 0 || Be[qt] !== jn[Zt]) {
                    var gr = `
` + Be[qt].replace(" at new ", " at ");
                    return M.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", M.displayName)), typeof M == "function" && ai.set(M, gr), gr;
                  }
                while (qt >= 1 && Zt >= 0);
              break;
            }
        }
      } finally {
        Mr = !1, Cn.current = gt, ri(), Error.prepareStackTrace = it;
      }
      var ol = M ? M.displayName || M.name : "", mc = ol ? ar(ol) : "";
      return typeof M == "function" && ai.set(M, mc), mc;
    }
    function Ln(M, ae, ge) {
      return ha(M, !1);
    }
    function ir(M) {
      var ae = M.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Bn(M, ae, ge) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return ha(M, ir(M));
      if (typeof M == "string")
        return ar(M);
      switch (M) {
        case b:
          return ar("Suspense");
        case k:
          return ar("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case T:
            return Ln(M.render);
          case O:
            return Bn(M.type, ae, ge);
          case z: {
            var Ie = M, it = Ie._payload, gt = Ie._init;
            try {
              return Bn(gt(it), ae, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var lr = Object.prototype.hasOwnProperty, or = {}, va = we.ReactDebugCurrentFrame;
    function Ha(M) {
      if (M) {
        var ae = M._owner, ge = Bn(M.type, M._source, ae ? ae.type : null);
        va.setExtraStackFrame(ge);
      } else
        va.setExtraStackFrame(null);
    }
    function Ti(M, ae, ge, Ie, it) {
      {
        var gt = Function.call.bind(lr);
        for (var lt in M)
          if (gt(M, lt)) {
            var Be = void 0;
            try {
              if (typeof M[lt] != "function") {
                var jn = Error((Ie || "React class") + ": " + ge + " type `" + lt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[lt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              Be = M[lt](ae, lt, Ie, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              Be = qt;
            }
            Be && !(Be instanceof Error) && (Ha(it), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ie || "React class", ge, lt, typeof Be), Ha(null)), Be instanceof Error && !(Be.message in or) && (or[Be.message] = !0, Ha(it), K("Failed %s type: %s", ge, Be.message), Ha(null));
          }
      }
    }
    var ii = Array.isArray;
    function Pa(M) {
      return ii(M);
    }
    function Zr(M) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, ge = ae && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return ge;
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
    var mn = we.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, al, Ia, ye;
    ye = {};
    function He(M) {
      if (lr.call(M, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function ot(M) {
      if (lr.call(M, "key")) {
        var ae = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Ot(M, ae) {
      if (typeof M.ref == "string" && mn.current && ae && mn.current.stateNode !== ae) {
        var ge = Ae(mn.current.type);
        ye[ge] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(mn.current.type), M.ref), ye[ge] = !0);
      }
    }
    function Jt(M, ae) {
      {
        var ge = function() {
          al || (al = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ge.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function Un(M, ae) {
      {
        var ge = function() {
          Ia || (Ia = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ge.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var dn = function(M, ae, ge, Ie, it, gt, lt) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: M,
        key: ae,
        ref: ge,
        props: lt,
        // Record the component responsible for creating this element.
        _owner: gt
      };
      return Be._store = {}, Object.defineProperty(Be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.defineProperty(Be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: it
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function Nr(M, ae, ge, Ie, it) {
      {
        var gt, lt = {}, Be = null, jn = null;
        ge !== void 0 && (Ya(ge), Be = "" + ge), ot(ae) && (Ya(ae.key), Be = "" + ae.key), He(ae) && (jn = ae.ref, Ot(ae, it));
        for (gt in ae)
          lr.call(ae, gt) && !Xr.hasOwnProperty(gt) && (lt[gt] = ae[gt]);
        if (M && M.defaultProps) {
          var qt = M.defaultProps;
          for (gt in qt)
            lt[gt] === void 0 && (lt[gt] = qt[gt]);
        }
        if (Be || jn) {
          var Zt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Be && Jt(lt, Zt), jn && Un(lt, Zt);
        }
        return dn(M, Be, jn, it, Ie, mn.current, lt);
      }
    }
    var Yt = we.ReactCurrentOwner, Jr = we.ReactDebugCurrentFrame;
    function At(M) {
      if (M) {
        var ae = M._owner, ge = Bn(M.type, M._source, ae ? ae.type : null);
        Jr.setExtraStackFrame(ge);
      } else
        Jr.setExtraStackFrame(null);
    }
    var It;
    It = !1;
    function Go(M) {
      return typeof M == "object" && M !== null && M.$$typeof === o;
    }
    function Wl() {
      {
        if (Yt.current) {
          var M = Ae(Yt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Qo(M) {
      {
        if (M !== void 0) {
          var ae = M.fileName.replace(/^.*[\\\/]/, ""), ge = M.lineNumber;
          return `

Check your code at ` + ae + ":" + ge + ".";
        }
        return "";
      }
    }
    var es = {};
    function vc(M) {
      {
        var ae = Wl();
        if (!ae) {
          var ge = typeof M == "string" ? M : M.displayName || M.name;
          ge && (ae = `

Check the top-level render call using <` + ge + ">.");
        }
        return ae;
      }
    }
    function Gl(M, ae) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var ge = vc(ae);
        if (es[ge])
          return;
        es[ge] = !0;
        var Ie = "";
        M && M._owner && M._owner !== Yt.current && (Ie = " It was passed a child from " + Ae(M._owner.type) + "."), At(M), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Ie), At(null);
      }
    }
    function qo(M, ae) {
      {
        if (typeof M != "object")
          return;
        if (Pa(M))
          for (var ge = 0; ge < M.length; ge++) {
            var Ie = M[ge];
            Go(Ie) && Gl(Ie, ae);
          }
        else if (Go(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var it = he(M);
          if (typeof it == "function" && it !== M.entries)
            for (var gt = it.call(M), lt; !(lt = gt.next()).done; )
              Go(lt.value) && Gl(lt.value, ae);
        }
      }
    }
    function Ql(M) {
      {
        var ae = M.type;
        if (ae == null || typeof ae == "string")
          return;
        var ge;
        if (typeof ae == "function")
          ge = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === O))
          ge = ae.propTypes;
        else
          return;
        if (ge) {
          var Ie = Ae(ae);
          Ti(ge, M.props, "prop", Ie, M);
        } else if (ae.PropTypes !== void 0 && !It) {
          It = !0;
          var it = Ae(ae);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", it || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zo(M) {
      {
        for (var ae = Object.keys(M.props), ge = 0; ge < ae.length; ge++) {
          var Ie = ae[ge];
          if (Ie !== "children" && Ie !== "key") {
            At(M), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ie), At(null);
            break;
          }
        }
        M.ref !== null && (At(M), K("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function oi(M, ae, ge, Ie, it, gt) {
      {
        var lt = pe(M);
        if (!lt) {
          var Be = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = Qo(it);
          jn ? Be += jn : Be += Wl();
          var qt;
          M === null ? qt = "null" : Pa(M) ? qt = "array" : M !== void 0 && M.$$typeof === o ? (qt = "<" + (Ae(M.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof M, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, Be);
        }
        var Zt = Nr(M, ae, ge, it, gt);
        if (Zt == null)
          return Zt;
        if (lt) {
          var gr = ae.children;
          if (gr !== void 0)
            if (Ie)
              if (Pa(gr)) {
                for (var ol = 0; ol < gr.length; ol++)
                  qo(gr[ol], M);
                Object.freeze && Object.freeze(gr);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qo(gr, M);
        }
        return M === d ? Zo(Zt) : Ql(Zt), Zt;
      }
    }
    function il(M, ae, ge) {
      return oi(M, ae, ge, !0);
    }
    function ea(M, ae, ge) {
      return oi(M, ae, ge, !1);
    }
    var Va = ea, ll = il;
    Ah.Fragment = d, Ah.jsx = Va, Ah.jsxs = ll;
  }()), Ah;
}
process.env.NODE_ENV === "production" ? Nw.exports = OL() : Nw.exports = NL();
var F = Nw.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var fb;
function ce() {
  return fb.apply(null, arguments);
}
function LL(a) {
  fb = a;
}
function tl(a) {
  return a instanceof Array || Object.prototype.toString.call(a) === "[object Array]";
}
function fc(a) {
  return a != null && Object.prototype.toString.call(a) === "[object Object]";
}
function kt(a, o) {
  return Object.prototype.hasOwnProperty.call(a, o);
}
function nE(a) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(a).length === 0;
  var o;
  for (o in a)
    if (kt(a, o))
      return !1;
  return !0;
}
function Fa(a) {
  return a === void 0;
}
function $o(a) {
  return typeof a == "number" || Object.prototype.toString.call(a) === "[object Number]";
}
function ev(a) {
  return a instanceof Date || Object.prototype.toString.call(a) === "[object Date]";
}
function db(a, o) {
  var s = [], d, h = a.length;
  for (d = 0; d < h; ++d)
    s.push(o(a[d], d));
  return s;
}
function qu(a, o) {
  for (var s in o)
    kt(o, s) && (a[s] = o[s]);
  return kt(o, "toString") && (a.toString = o.toString), kt(o, "valueOf") && (a.valueOf = o.valueOf), a;
}
function $l(a, o, s, d) {
  return Ab(a, o, s, d, !0).utc();
}
function UL() {
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
function st(a) {
  return a._pf == null && (a._pf = UL()), a._pf;
}
var Lw;
Array.prototype.some ? Lw = Array.prototype.some : Lw = function(a) {
  var o = Object(this), s = o.length >>> 0, d;
  for (d = 0; d < s; d++)
    if (d in o && a.call(this, o[d], d, o))
      return !0;
  return !1;
};
function rE(a) {
  if (a._isValid == null) {
    var o = st(a), s = Lw.call(o.parsedDateParts, function(h) {
      return h != null;
    }), d = !isNaN(a._d.getTime()) && o.overflow < 0 && !o.empty && !o.invalidEra && !o.invalidMonth && !o.invalidWeekday && !o.weekdayMismatch && !o.nullInput && !o.invalidFormat && !o.userInvalidated && (!o.meridiem || o.meridiem && s);
    if (a._strict && (d = d && o.charsLeftOver === 0 && o.unusedTokens.length === 0 && o.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(a))
      a._isValid = d;
    else
      return d;
  }
  return a._isValid;
}
function Cg(a) {
  var o = $l(NaN);
  return a != null ? qu(st(o), a) : st(o).userInvalidated = !0, o;
}
var wT = ce.momentProperties = [], yw = !1;
function aE(a, o) {
  var s, d, h, g = wT.length;
  if (Fa(o._isAMomentObject) || (a._isAMomentObject = o._isAMomentObject), Fa(o._i) || (a._i = o._i), Fa(o._f) || (a._f = o._f), Fa(o._l) || (a._l = o._l), Fa(o._strict) || (a._strict = o._strict), Fa(o._tzm) || (a._tzm = o._tzm), Fa(o._isUTC) || (a._isUTC = o._isUTC), Fa(o._offset) || (a._offset = o._offset), Fa(o._pf) || (a._pf = st(o)), Fa(o._locale) || (a._locale = o._locale), g > 0)
    for (s = 0; s < g; s++)
      d = wT[s], h = o[d], Fa(h) || (a[d] = h);
  return a;
}
function tv(a) {
  aE(this, a), this._d = new Date(a._d != null ? a._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), yw === !1 && (yw = !0, ce.updateOffset(this), yw = !1);
}
function nl(a) {
  return a instanceof tv || a != null && a._isAMomentObject != null;
}
function pb(a) {
  ce.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + a);
}
function xi(a, o) {
  var s = !0;
  return qu(function() {
    if (ce.deprecationHandler != null && ce.deprecationHandler(null, a), s) {
      var d = [], h, g, m, C = arguments.length;
      for (g = 0; g < C; g++) {
        if (h = "", typeof arguments[g] == "object") {
          h += `
[` + g + "] ";
          for (m in arguments[0])
            kt(arguments[0], m) && (h += m + ": " + arguments[0][m] + ", ");
          h = h.slice(0, -2);
        } else
          h = arguments[g];
        d.push(h);
      }
      pb(
        a + `
Arguments: ` + Array.prototype.slice.call(d).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return o.apply(this, arguments);
  }, o);
}
var ET = {};
function hb(a, o) {
  ce.deprecationHandler != null && ce.deprecationHandler(a, o), ET[a] || (pb(o), ET[a] = !0);
}
ce.suppressDeprecationWarnings = !1;
ce.deprecationHandler = null;
function Bl(a) {
  return typeof Function < "u" && a instanceof Function || Object.prototype.toString.call(a) === "[object Function]";
}
function jL(a) {
  var o, s;
  for (s in a)
    kt(a, s) && (o = a[s], Bl(o) ? this[s] = o : this["_" + s] = o);
  this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Uw(a, o) {
  var s = qu({}, a), d;
  for (d in o)
    kt(o, d) && (fc(a[d]) && fc(o[d]) ? (s[d] = {}, qu(s[d], a[d]), qu(s[d], o[d])) : o[d] != null ? s[d] = o[d] : delete s[d]);
  for (d in a)
    kt(a, d) && !kt(o, d) && fc(a[d]) && (s[d] = qu({}, s[d]));
  return s;
}
function iE(a) {
  a != null && this.set(a);
}
var jw;
Object.keys ? jw = Object.keys : jw = function(a) {
  var o, s = [];
  for (o in a)
    kt(a, o) && s.push(o);
  return s;
};
var AL = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function zL(a, o, s) {
  var d = this._calendar[a] || this._calendar.sameElse;
  return Bl(d) ? d.call(o, s) : d;
}
function Vl(a, o, s) {
  var d = "" + Math.abs(a), h = o - d.length, g = a >= 0;
  return (g ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, h)).toString().substr(1) + d;
}
var lE = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, rg = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, gw = {}, pd = {};
function $e(a, o, s, d) {
  var h = d;
  typeof d == "string" && (h = function() {
    return this[d]();
  }), a && (pd[a] = h), o && (pd[o[0]] = function() {
    return Vl(h.apply(this, arguments), o[1], o[2]);
  }), s && (pd[s] = function() {
    return this.localeData().ordinal(
      h.apply(this, arguments),
      a
    );
  });
}
function FL(a) {
  return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
}
function HL(a) {
  var o = a.match(lE), s, d;
  for (s = 0, d = o.length; s < d; s++)
    pd[o[s]] ? o[s] = pd[o[s]] : o[s] = FL(o[s]);
  return function(h) {
    var g = "", m;
    for (m = 0; m < d; m++)
      g += Bl(o[m]) ? o[m].call(h, a) : o[m];
    return g;
  };
}
function sg(a, o) {
  return a.isValid() ? (o = vb(o, a.localeData()), gw[o] = gw[o] || HL(o), gw[o](a)) : a.localeData().invalidDate();
}
function vb(a, o) {
  var s = 5;
  function d(h) {
    return o.longDateFormat(h) || h;
  }
  for (rg.lastIndex = 0; s >= 0 && rg.test(a); )
    a = a.replace(
      rg,
      d
    ), rg.lastIndex = 0, s -= 1;
  return a;
}
var PL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function YL(a) {
  var o = this._longDateFormat[a], s = this._longDateFormat[a.toUpperCase()];
  return o || !s ? o : (this._longDateFormat[a] = s.match(lE).map(function(d) {
    return d === "MMMM" || d === "MM" || d === "DD" || d === "dddd" ? d.slice(1) : d;
  }).join(""), this._longDateFormat[a]);
}
var IL = "Invalid date";
function VL() {
  return this._invalidDate;
}
var $L = "%d", BL = /\d{1,2}/;
function WL(a) {
  return this._ordinal.replace("%d", a);
}
var GL = {
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
function QL(a, o, s, d) {
  var h = this._relativeTime[s];
  return Bl(h) ? h(a, o, s, d) : h.replace(/%d/i, a);
}
function qL(a, o) {
  var s = this._relativeTime[a > 0 ? "future" : "past"];
  return Bl(s) ? s(o) : s.replace(/%s/i, o);
}
var Yh = {};
function Qr(a, o) {
  var s = a.toLowerCase();
  Yh[s] = Yh[s + "s"] = Yh[o] = a;
}
function Ci(a) {
  return typeof a == "string" ? Yh[a] || Yh[a.toLowerCase()] : void 0;
}
function oE(a) {
  var o = {}, s, d;
  for (d in a)
    kt(a, d) && (s = Ci(d), s && (o[s] = a[d]));
  return o;
}
var mb = {};
function qr(a, o) {
  mb[a] = o;
}
function ZL(a) {
  var o = [], s;
  for (s in a)
    kt(a, s) && o.push({ unit: s, priority: mb[s] });
  return o.sort(function(d, h) {
    return d.priority - h.priority;
  }), o;
}
function Tg(a) {
  return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
}
function _i(a) {
  return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
}
function pt(a) {
  var o = +a, s = 0;
  return o !== 0 && isFinite(o) && (s = _i(o)), s;
}
function yd(a, o) {
  return function(s) {
    return s != null ? (yb(this, a, s), ce.updateOffset(this, o), this) : mg(this, a);
  };
}
function mg(a, o) {
  return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + o]() : NaN;
}
function yb(a, o, s) {
  a.isValid() && !isNaN(s) && (o === "FullYear" && Tg(a.year()) && a.month() === 1 && a.date() === 29 ? (s = pt(s), a._d["set" + (a._isUTC ? "UTC" : "") + o](
    s,
    a.month(),
    Og(s, a.month())
  )) : a._d["set" + (a._isUTC ? "UTC" : "") + o](s));
}
function KL(a) {
  return a = Ci(a), Bl(this[a]) ? this[a]() : this;
}
function XL(a, o) {
  if (typeof a == "object") {
    a = oE(a);
    var s = ZL(a), d, h = s.length;
    for (d = 0; d < h; d++)
      this[s[d].unit](a[s[d].unit]);
  } else if (a = Ci(a), Bl(this[a]))
    return this[a](o);
  return this;
}
var gb = /\d/, ni = /\d\d/, Sb = /\d{3}/, uE = /\d{4}/, bg = /[+-]?\d{6}/, ln = /\d\d?/, wb = /\d\d\d\d?/, Eb = /\d\d\d\d\d\d?/, Dg = /\d{1,3}/, sE = /\d{1,4}/, Rg = /[+-]?\d{1,6}/, gd = /\d+/, kg = /[+-]?\d+/, JL = /Z|[+-]\d\d:?\d\d/gi, Mg = /Z|[+-]\d\d(?::?\d\d)?/gi, e2 = /[+-]?\d+(\.\d{1,3})?/, nv = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, yg;
yg = {};
function ke(a, o, s) {
  yg[a] = Bl(o) ? o : function(d, h) {
    return d && s ? s : o;
  };
}
function t2(a, o) {
  return kt(yg, a) ? yg[a](o._strict, o._locale) : new RegExp(n2(a));
}
function n2(a) {
  return ti(
    a.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(o, s, d, h, g) {
        return s || d || h || g;
      }
    )
  );
}
function ti(a) {
  return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Aw = {};
function Vt(a, o) {
  var s, d = o, h;
  for (typeof a == "string" && (a = [a]), $o(o) && (d = function(g, m) {
    m[o] = pt(g);
  }), h = a.length, s = 0; s < h; s++)
    Aw[a[s]] = d;
}
function rv(a, o) {
  Vt(a, function(s, d, h, g) {
    h._w = h._w || {}, o(s, h._w, h, g);
  });
}
function r2(a, o, s) {
  o != null && kt(Aw, a) && Aw[a](o, s._a, s, a);
}
var Gr = 0, Yo = 1, Il = 2, rr = 3, el = 4, Io = 5, cc = 6, a2 = 7, i2 = 8;
function l2(a, o) {
  return (a % o + o) % o;
}
var Nn;
Array.prototype.indexOf ? Nn = Array.prototype.indexOf : Nn = function(a) {
  var o;
  for (o = 0; o < this.length; ++o)
    if (this[o] === a)
      return o;
  return -1;
};
function Og(a, o) {
  if (isNaN(a) || isNaN(o))
    return NaN;
  var s = l2(o, 12);
  return a += (o - s) / 12, s === 1 ? Tg(a) ? 29 : 28 : 31 - s % 7 % 2;
}
$e("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
$e("MMM", 0, 0, function(a) {
  return this.localeData().monthsShort(this, a);
});
$e("MMMM", 0, 0, function(a) {
  return this.localeData().months(this, a);
});
Qr("month", "M");
qr("month", 8);
ke("M", ln);
ke("MM", ln, ni);
ke("MMM", function(a, o) {
  return o.monthsShortRegex(a);
});
ke("MMMM", function(a, o) {
  return o.monthsRegex(a);
});
Vt(["M", "MM"], function(a, o) {
  o[Yo] = pt(a) - 1;
});
Vt(["MMM", "MMMM"], function(a, o, s, d) {
  var h = s._locale.monthsParse(a, d, s._strict);
  h != null ? o[Yo] = h : st(s).invalidMonth = a;
});
var o2 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), _b = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), xb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, u2 = nv, s2 = nv;
function c2(a, o) {
  return a ? tl(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || xb).test(o) ? "format" : "standalone"][a.month()] : tl(this._months) ? this._months : this._months.standalone;
}
function f2(a, o) {
  return a ? tl(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[xb.test(o) ? "format" : "standalone"][a.month()] : tl(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function d2(a, o, s) {
  var d, h, g, m = a.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d)
      g = $l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(
        g,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[d] = this.months(g, "").toLocaleLowerCase();
  return s ? o === "MMM" ? (h = Nn.call(this._shortMonthsParse, m), h !== -1 ? h : null) : (h = Nn.call(this._longMonthsParse, m), h !== -1 ? h : null) : o === "MMM" ? (h = Nn.call(this._shortMonthsParse, m), h !== -1 ? h : (h = Nn.call(this._longMonthsParse, m), h !== -1 ? h : null)) : (h = Nn.call(this._longMonthsParse, m), h !== -1 ? h : (h = Nn.call(this._shortMonthsParse, m), h !== -1 ? h : null));
}
function p2(a, o, s) {
  var d, h, g;
  if (this._monthsParseExact)
    return d2.call(this, a, o, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
    if (h = $l([2e3, d]), s && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp(
      "^" + this.months(h, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[d] = new RegExp(
      "^" + this.monthsShort(h, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[d] && (g = "^" + this.months(h, "") + "|^" + this.monthsShort(h, ""), this._monthsParse[d] = new RegExp(g.replace(".", ""), "i")), s && o === "MMMM" && this._longMonthsParse[d].test(a))
      return d;
    if (s && o === "MMM" && this._shortMonthsParse[d].test(a))
      return d;
    if (!s && this._monthsParse[d].test(a))
      return d;
  }
}
function Cb(a, o) {
  var s;
  if (!a.isValid())
    return a;
  if (typeof o == "string") {
    if (/^\d+$/.test(o))
      o = pt(o);
    else if (o = a.localeData().monthsParse(o), !$o(o))
      return a;
  }
  return s = Math.min(a.date(), Og(a.year(), o)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](o, s), a;
}
function Tb(a) {
  return a != null ? (Cb(this, a), ce.updateOffset(this, !0), this) : mg(this, "Month");
}
function h2() {
  return Og(this.year(), this.month());
}
function v2(a) {
  return this._monthsParseExact ? (kt(this, "_monthsRegex") || bb.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (kt(this, "_monthsShortRegex") || (this._monthsShortRegex = u2), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function m2(a) {
  return this._monthsParseExact ? (kt(this, "_monthsRegex") || bb.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (kt(this, "_monthsRegex") || (this._monthsRegex = s2), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
}
function bb() {
  function a(m, C) {
    return C.length - m.length;
  }
  var o = [], s = [], d = [], h, g;
  for (h = 0; h < 12; h++)
    g = $l([2e3, h]), o.push(this.monthsShort(g, "")), s.push(this.months(g, "")), d.push(this.months(g, "")), d.push(this.monthsShort(g, ""));
  for (o.sort(a), s.sort(a), d.sort(a), h = 0; h < 12; h++)
    o[h] = ti(o[h]), s[h] = ti(s[h]);
  for (h = 0; h < 24; h++)
    d[h] = ti(d[h]);
  this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + o.join("|") + ")",
    "i"
  );
}
$e("Y", 0, 0, function() {
  var a = this.year();
  return a <= 9999 ? Vl(a, 4) : "+" + a;
});
$e(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
$e(0, ["YYYY", 4], 0, "year");
$e(0, ["YYYYY", 5], 0, "year");
$e(0, ["YYYYYY", 6, !0], 0, "year");
Qr("year", "y");
qr("year", 1);
ke("Y", kg);
ke("YY", ln, ni);
ke("YYYY", sE, uE);
ke("YYYYY", Rg, bg);
ke("YYYYYY", Rg, bg);
Vt(["YYYYY", "YYYYYY"], Gr);
Vt("YYYY", function(a, o) {
  o[Gr] = a.length === 2 ? ce.parseTwoDigitYear(a) : pt(a);
});
Vt("YY", function(a, o) {
  o[Gr] = ce.parseTwoDigitYear(a);
});
Vt("Y", function(a, o) {
  o[Gr] = parseInt(a, 10);
});
function Ih(a) {
  return Tg(a) ? 366 : 365;
}
ce.parseTwoDigitYear = function(a) {
  return pt(a) + (pt(a) > 68 ? 1900 : 2e3);
};
var Db = yd("FullYear", !0);
function y2() {
  return Tg(this.year());
}
function g2(a, o, s, d, h, g, m) {
  var C;
  return a < 100 && a >= 0 ? (C = new Date(a + 400, o, s, d, h, g, m), isFinite(C.getFullYear()) && C.setFullYear(a)) : C = new Date(a, o, s, d, h, g, m), C;
}
function Gh(a) {
  var o, s;
  return a < 100 && a >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = a + 400, o = new Date(Date.UTC.apply(null, s)), isFinite(o.getUTCFullYear()) && o.setUTCFullYear(a)) : o = new Date(Date.UTC.apply(null, arguments)), o;
}
function gg(a, o, s) {
  var d = 7 + o - s, h = (7 + Gh(a, 0, d).getUTCDay() - o) % 7;
  return -h + d - 1;
}
function Rb(a, o, s, d, h) {
  var g = (7 + s - d) % 7, m = gg(a, d, h), C = 1 + 7 * (o - 1) + g + m, T, b;
  return C <= 0 ? (T = a - 1, b = Ih(T) + C) : C > Ih(a) ? (T = a + 1, b = C - Ih(a)) : (T = a, b = C), {
    year: T,
    dayOfYear: b
  };
}
function Qh(a, o, s) {
  var d = gg(a.year(), o, s), h = Math.floor((a.dayOfYear() - d - 1) / 7) + 1, g, m;
  return h < 1 ? (m = a.year() - 1, g = h + Vo(m, o, s)) : h > Vo(a.year(), o, s) ? (g = h - Vo(a.year(), o, s), m = a.year() + 1) : (m = a.year(), g = h), {
    week: g,
    year: m
  };
}
function Vo(a, o, s) {
  var d = gg(a, o, s), h = gg(a + 1, o, s);
  return (Ih(a) - d + h) / 7;
}
$e("w", ["ww", 2], "wo", "week");
$e("W", ["WW", 2], "Wo", "isoWeek");
Qr("week", "w");
Qr("isoWeek", "W");
qr("week", 5);
qr("isoWeek", 5);
ke("w", ln);
ke("ww", ln, ni);
ke("W", ln);
ke("WW", ln, ni);
rv(
  ["w", "ww", "W", "WW"],
  function(a, o, s, d) {
    o[d.substr(0, 1)] = pt(a);
  }
);
function S2(a) {
  return Qh(a, this._week.dow, this._week.doy).week;
}
var w2 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function E2() {
  return this._week.dow;
}
function _2() {
  return this._week.doy;
}
function x2(a) {
  var o = this.localeData().week(this);
  return a == null ? o : this.add((a - o) * 7, "d");
}
function C2(a) {
  var o = Qh(this, 1, 4).week;
  return a == null ? o : this.add((a - o) * 7, "d");
}
$e("d", 0, "do", "day");
$e("dd", 0, 0, function(a) {
  return this.localeData().weekdaysMin(this, a);
});
$e("ddd", 0, 0, function(a) {
  return this.localeData().weekdaysShort(this, a);
});
$e("dddd", 0, 0, function(a) {
  return this.localeData().weekdays(this, a);
});
$e("e", 0, 0, "weekday");
$e("E", 0, 0, "isoWeekday");
Qr("day", "d");
Qr("weekday", "e");
Qr("isoWeekday", "E");
qr("day", 11);
qr("weekday", 11);
qr("isoWeekday", 11);
ke("d", ln);
ke("e", ln);
ke("E", ln);
ke("dd", function(a, o) {
  return o.weekdaysMinRegex(a);
});
ke("ddd", function(a, o) {
  return o.weekdaysShortRegex(a);
});
ke("dddd", function(a, o) {
  return o.weekdaysRegex(a);
});
rv(["dd", "ddd", "dddd"], function(a, o, s, d) {
  var h = s._locale.weekdaysParse(a, d, s._strict);
  h != null ? o.d = h : st(s).invalidWeekday = a;
});
rv(["d", "e", "E"], function(a, o, s, d) {
  o[d] = pt(a);
});
function T2(a, o) {
  return typeof a != "string" ? a : isNaN(a) ? (a = o.weekdaysParse(a), typeof a == "number" ? a : null) : parseInt(a, 10);
}
function b2(a, o) {
  return typeof a == "string" ? o.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
}
function cE(a, o) {
  return a.slice(o, 7).concat(a.slice(0, o));
}
var D2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), kb = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), R2 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), k2 = nv, M2 = nv, O2 = nv;
function N2(a, o) {
  var s = tl(this._weekdays) ? this._weekdays : this._weekdays[a && a !== !0 && this._weekdays.isFormat.test(o) ? "format" : "standalone"];
  return a === !0 ? cE(s, this._week.dow) : a ? s[a.day()] : s;
}
function L2(a) {
  return a === !0 ? cE(this._weekdaysShort, this._week.dow) : a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
}
function U2(a) {
  return a === !0 ? cE(this._weekdaysMin, this._week.dow) : a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
}
function j2(a, o, s) {
  var d, h, g, m = a.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d)
      g = $l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(
        g,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(
        g,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(g, "").toLocaleLowerCase();
  return s ? o === "dddd" ? (h = Nn.call(this._weekdaysParse, m), h !== -1 ? h : null) : o === "ddd" ? (h = Nn.call(this._shortWeekdaysParse, m), h !== -1 ? h : null) : (h = Nn.call(this._minWeekdaysParse, m), h !== -1 ? h : null) : o === "dddd" ? (h = Nn.call(this._weekdaysParse, m), h !== -1 || (h = Nn.call(this._shortWeekdaysParse, m), h !== -1) ? h : (h = Nn.call(this._minWeekdaysParse, m), h !== -1 ? h : null)) : o === "ddd" ? (h = Nn.call(this._shortWeekdaysParse, m), h !== -1 || (h = Nn.call(this._weekdaysParse, m), h !== -1) ? h : (h = Nn.call(this._minWeekdaysParse, m), h !== -1 ? h : null)) : (h = Nn.call(this._minWeekdaysParse, m), h !== -1 || (h = Nn.call(this._weekdaysParse, m), h !== -1) ? h : (h = Nn.call(this._shortWeekdaysParse, m), h !== -1 ? h : null));
}
function A2(a, o, s) {
  var d, h, g;
  if (this._weekdaysParseExact)
    return j2.call(this, a, o, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
    if (h = $l([2e3, 1]).day(d), s && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp(
      "^" + this.weekdays(h, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[d] = new RegExp(
      "^" + this.weekdaysShort(h, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[d] = new RegExp(
      "^" + this.weekdaysMin(h, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[d] || (g = "^" + this.weekdays(h, "") + "|^" + this.weekdaysShort(h, "") + "|^" + this.weekdaysMin(h, ""), this._weekdaysParse[d] = new RegExp(g.replace(".", ""), "i")), s && o === "dddd" && this._fullWeekdaysParse[d].test(a))
      return d;
    if (s && o === "ddd" && this._shortWeekdaysParse[d].test(a))
      return d;
    if (s && o === "dd" && this._minWeekdaysParse[d].test(a))
      return d;
    if (!s && this._weekdaysParse[d].test(a))
      return d;
  }
}
function z2(a) {
  if (!this.isValid())
    return a != null ? this : NaN;
  var o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return a != null ? (a = T2(a, this.localeData()), this.add(a - o, "d")) : o;
}
function F2(a) {
  if (!this.isValid())
    return a != null ? this : NaN;
  var o = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return a == null ? o : this.add(a - o, "d");
}
function H2(a) {
  if (!this.isValid())
    return a != null ? this : NaN;
  if (a != null) {
    var o = b2(a, this.localeData());
    return this.day(this.day() % 7 ? o : o - 7);
  } else
    return this.day() || 7;
}
function P2(a) {
  return this._weekdaysParseExact ? (kt(this, "_weekdaysRegex") || fE.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (kt(this, "_weekdaysRegex") || (this._weekdaysRegex = k2), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Y2(a) {
  return this._weekdaysParseExact ? (kt(this, "_weekdaysRegex") || fE.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (kt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = M2), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function I2(a) {
  return this._weekdaysParseExact ? (kt(this, "_weekdaysRegex") || fE.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (kt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = O2), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function fE() {
  function a(k, O) {
    return O.length - k.length;
  }
  var o = [], s = [], d = [], h = [], g, m, C, T, b;
  for (g = 0; g < 7; g++)
    m = $l([2e3, 1]).day(g), C = ti(this.weekdaysMin(m, "")), T = ti(this.weekdaysShort(m, "")), b = ti(this.weekdays(m, "")), o.push(C), s.push(T), d.push(b), h.push(C), h.push(T), h.push(b);
  o.sort(a), s.sort(a), d.sort(a), h.sort(a), this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + d.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + o.join("|") + ")",
    "i"
  );
}
function dE() {
  return this.hours() % 12 || 12;
}
function V2() {
  return this.hours() || 24;
}
$e("H", ["HH", 2], 0, "hour");
$e("h", ["hh", 2], 0, dE);
$e("k", ["kk", 2], 0, V2);
$e("hmm", 0, 0, function() {
  return "" + dE.apply(this) + Vl(this.minutes(), 2);
});
$e("hmmss", 0, 0, function() {
  return "" + dE.apply(this) + Vl(this.minutes(), 2) + Vl(this.seconds(), 2);
});
$e("Hmm", 0, 0, function() {
  return "" + this.hours() + Vl(this.minutes(), 2);
});
$e("Hmmss", 0, 0, function() {
  return "" + this.hours() + Vl(this.minutes(), 2) + Vl(this.seconds(), 2);
});
function Mb(a, o) {
  $e(a, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      o
    );
  });
}
Mb("a", !0);
Mb("A", !1);
Qr("hour", "h");
qr("hour", 13);
function Ob(a, o) {
  return o._meridiemParse;
}
ke("a", Ob);
ke("A", Ob);
ke("H", ln);
ke("h", ln);
ke("k", ln);
ke("HH", ln, ni);
ke("hh", ln, ni);
ke("kk", ln, ni);
ke("hmm", wb);
ke("hmmss", Eb);
ke("Hmm", wb);
ke("Hmmss", Eb);
Vt(["H", "HH"], rr);
Vt(["k", "kk"], function(a, o, s) {
  var d = pt(a);
  o[rr] = d === 24 ? 0 : d;
});
Vt(["a", "A"], function(a, o, s) {
  s._isPm = s._locale.isPM(a), s._meridiem = a;
});
Vt(["h", "hh"], function(a, o, s) {
  o[rr] = pt(a), st(s).bigHour = !0;
});
Vt("hmm", function(a, o, s) {
  var d = a.length - 2;
  o[rr] = pt(a.substr(0, d)), o[el] = pt(a.substr(d)), st(s).bigHour = !0;
});
Vt("hmmss", function(a, o, s) {
  var d = a.length - 4, h = a.length - 2;
  o[rr] = pt(a.substr(0, d)), o[el] = pt(a.substr(d, 2)), o[Io] = pt(a.substr(h)), st(s).bigHour = !0;
});
Vt("Hmm", function(a, o, s) {
  var d = a.length - 2;
  o[rr] = pt(a.substr(0, d)), o[el] = pt(a.substr(d));
});
Vt("Hmmss", function(a, o, s) {
  var d = a.length - 4, h = a.length - 2;
  o[rr] = pt(a.substr(0, d)), o[el] = pt(a.substr(d, 2)), o[Io] = pt(a.substr(h));
});
function $2(a) {
  return (a + "").toLowerCase().charAt(0) === "p";
}
var B2 = /[ap]\.?m?\.?/i, W2 = yd("Hours", !0);
function G2(a, o, s) {
  return a > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Nb = {
  calendar: AL,
  longDateFormat: PL,
  invalidDate: IL,
  ordinal: $L,
  dayOfMonthOrdinalParse: BL,
  relativeTime: GL,
  months: o2,
  monthsShort: _b,
  week: w2,
  weekdays: D2,
  weekdaysMin: R2,
  weekdaysShort: kb,
  meridiemParse: B2
}, fn = {}, zh = {}, qh;
function Q2(a, o) {
  var s, d = Math.min(a.length, o.length);
  for (s = 0; s < d; s += 1)
    if (a[s] !== o[s])
      return s;
  return d;
}
function _T(a) {
  return a && a.toLowerCase().replace("_", "-");
}
function q2(a) {
  for (var o = 0, s, d, h, g; o < a.length; ) {
    for (g = _T(a[o]).split("-"), s = g.length, d = _T(a[o + 1]), d = d ? d.split("-") : null; s > 0; ) {
      if (h = Ng(g.slice(0, s).join("-")), h)
        return h;
      if (d && d.length >= s && Q2(g, d) >= s - 1)
        break;
      s--;
    }
    o++;
  }
  return qh;
}
function Z2(a) {
  return a.match("^[^/\\\\]*$") != null;
}
function Ng(a) {
  var o = null, s;
  if (fn[a] === void 0 && typeof module < "u" && module && module.exports && Z2(a))
    try {
      o = qh._abbr, s = require, s("./locale/" + a), Ku(o);
    } catch {
      fn[a] = null;
    }
  return fn[a];
}
function Ku(a, o) {
  var s;
  return a && (Fa(o) ? s = Bo(a) : s = pE(a, o), s ? qh = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + a + " not found. Did you forget to load it?"
  )), qh._abbr;
}
function pE(a, o) {
  if (o !== null) {
    var s, d = Nb;
    if (o.abbr = a, fn[a] != null)
      hb(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), d = fn[a]._config;
    else if (o.parentLocale != null)
      if (fn[o.parentLocale] != null)
        d = fn[o.parentLocale]._config;
      else if (s = Ng(o.parentLocale), s != null)
        d = s._config;
      else
        return zh[o.parentLocale] || (zh[o.parentLocale] = []), zh[o.parentLocale].push({
          name: a,
          config: o
        }), null;
    return fn[a] = new iE(Uw(d, o)), zh[a] && zh[a].forEach(function(h) {
      pE(h.name, h.config);
    }), Ku(a), fn[a];
  } else
    return delete fn[a], null;
}
function K2(a, o) {
  if (o != null) {
    var s, d, h = Nb;
    fn[a] != null && fn[a].parentLocale != null ? fn[a].set(Uw(fn[a]._config, o)) : (d = Ng(a), d != null && (h = d._config), o = Uw(h, o), d == null && (o.abbr = a), s = new iE(o), s.parentLocale = fn[a], fn[a] = s), Ku(a);
  } else
    fn[a] != null && (fn[a].parentLocale != null ? (fn[a] = fn[a].parentLocale, a === Ku() && Ku(a)) : fn[a] != null && delete fn[a]);
  return fn[a];
}
function Bo(a) {
  var o;
  if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)
    return qh;
  if (!tl(a)) {
    if (o = Ng(a), o)
      return o;
    a = [a];
  }
  return q2(a);
}
function X2() {
  return jw(fn);
}
function hE(a) {
  var o, s = a._a;
  return s && st(a).overflow === -2 && (o = s[Yo] < 0 || s[Yo] > 11 ? Yo : s[Il] < 1 || s[Il] > Og(s[Gr], s[Yo]) ? Il : s[rr] < 0 || s[rr] > 24 || s[rr] === 24 && (s[el] !== 0 || s[Io] !== 0 || s[cc] !== 0) ? rr : s[el] < 0 || s[el] > 59 ? el : s[Io] < 0 || s[Io] > 59 ? Io : s[cc] < 0 || s[cc] > 999 ? cc : -1, st(a)._overflowDayOfYear && (o < Gr || o > Il) && (o = Il), st(a)._overflowWeeks && o === -1 && (o = a2), st(a)._overflowWeekday && o === -1 && (o = i2), st(a).overflow = o), a;
}
var J2 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, eU = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tU = /Z|[+-]\d\d(?::?\d\d)?/, ag = [
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
], Sw = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], nU = /^\/?Date\((-?\d+)/i, rU = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, aU = {
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
function Lb(a) {
  var o, s, d = a._i, h = J2.exec(d) || eU.exec(d), g, m, C, T, b = ag.length, k = Sw.length;
  if (h) {
    for (st(a).iso = !0, o = 0, s = b; o < s; o++)
      if (ag[o][1].exec(h[1])) {
        m = ag[o][0], g = ag[o][2] !== !1;
        break;
      }
    if (m == null) {
      a._isValid = !1;
      return;
    }
    if (h[3]) {
      for (o = 0, s = k; o < s; o++)
        if (Sw[o][1].exec(h[3])) {
          C = (h[2] || " ") + Sw[o][0];
          break;
        }
      if (C == null) {
        a._isValid = !1;
        return;
      }
    }
    if (!g && C != null) {
      a._isValid = !1;
      return;
    }
    if (h[4])
      if (tU.exec(h[4]))
        T = "Z";
      else {
        a._isValid = !1;
        return;
      }
    a._f = m + (C || "") + (T || ""), mE(a);
  } else
    a._isValid = !1;
}
function iU(a, o, s, d, h, g) {
  var m = [
    lU(a),
    _b.indexOf(o),
    parseInt(s, 10),
    parseInt(d, 10),
    parseInt(h, 10)
  ];
  return g && m.push(parseInt(g, 10)), m;
}
function lU(a) {
  var o = parseInt(a, 10);
  return o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o;
}
function oU(a) {
  return a.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function uU(a, o, s) {
  if (a) {
    var d = kb.indexOf(a), h = new Date(
      o[0],
      o[1],
      o[2]
    ).getDay();
    if (d !== h)
      return st(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function sU(a, o, s) {
  if (a)
    return aU[a];
  if (o)
    return 0;
  var d = parseInt(s, 10), h = d % 100, g = (d - h) / 100;
  return g * 60 + h;
}
function Ub(a) {
  var o = rU.exec(oU(a._i)), s;
  if (o) {
    if (s = iU(
      o[4],
      o[3],
      o[2],
      o[5],
      o[6],
      o[7]
    ), !uU(o[1], s, a))
      return;
    a._a = s, a._tzm = sU(o[8], o[9], o[10]), a._d = Gh.apply(null, a._a), a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), st(a).rfc2822 = !0;
  } else
    a._isValid = !1;
}
function cU(a) {
  var o = nU.exec(a._i);
  if (o !== null) {
    a._d = /* @__PURE__ */ new Date(+o[1]);
    return;
  }
  if (Lb(a), a._isValid === !1)
    delete a._isValid;
  else
    return;
  if (Ub(a), a._isValid === !1)
    delete a._isValid;
  else
    return;
  a._strict ? a._isValid = !1 : ce.createFromInputFallback(a);
}
ce.createFromInputFallback = xi(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(a) {
    a._d = /* @__PURE__ */ new Date(a._i + (a._useUTC ? " UTC" : ""));
  }
);
function fd(a, o, s) {
  return a ?? o ?? s;
}
function fU(a) {
  var o = new Date(ce.now());
  return a._useUTC ? [
    o.getUTCFullYear(),
    o.getUTCMonth(),
    o.getUTCDate()
  ] : [o.getFullYear(), o.getMonth(), o.getDate()];
}
function vE(a) {
  var o, s, d = [], h, g, m;
  if (!a._d) {
    for (h = fU(a), a._w && a._a[Il] == null && a._a[Yo] == null && dU(a), a._dayOfYear != null && (m = fd(a._a[Gr], h[Gr]), (a._dayOfYear > Ih(m) || a._dayOfYear === 0) && (st(a)._overflowDayOfYear = !0), s = Gh(m, 0, a._dayOfYear), a._a[Yo] = s.getUTCMonth(), a._a[Il] = s.getUTCDate()), o = 0; o < 3 && a._a[o] == null; ++o)
      a._a[o] = d[o] = h[o];
    for (; o < 7; o++)
      a._a[o] = d[o] = a._a[o] == null ? o === 2 ? 1 : 0 : a._a[o];
    a._a[rr] === 24 && a._a[el] === 0 && a._a[Io] === 0 && a._a[cc] === 0 && (a._nextDay = !0, a._a[rr] = 0), a._d = (a._useUTC ? Gh : g2).apply(
      null,
      d
    ), g = a._useUTC ? a._d.getUTCDay() : a._d.getDay(), a._tzm != null && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[rr] = 24), a._w && typeof a._w.d < "u" && a._w.d !== g && (st(a).weekdayMismatch = !0);
  }
}
function dU(a) {
  var o, s, d, h, g, m, C, T, b;
  o = a._w, o.GG != null || o.W != null || o.E != null ? (g = 1, m = 4, s = fd(
    o.GG,
    a._a[Gr],
    Qh(an(), 1, 4).year
  ), d = fd(o.W, 1), h = fd(o.E, 1), (h < 1 || h > 7) && (T = !0)) : (g = a._locale._week.dow, m = a._locale._week.doy, b = Qh(an(), g, m), s = fd(o.gg, a._a[Gr], b.year), d = fd(o.w, b.week), o.d != null ? (h = o.d, (h < 0 || h > 6) && (T = !0)) : o.e != null ? (h = o.e + g, (o.e < 0 || o.e > 6) && (T = !0)) : h = g), d < 1 || d > Vo(s, g, m) ? st(a)._overflowWeeks = !0 : T != null ? st(a)._overflowWeekday = !0 : (C = Rb(s, d, h, g, m), a._a[Gr] = C.year, a._dayOfYear = C.dayOfYear);
}
ce.ISO_8601 = function() {
};
ce.RFC_2822 = function() {
};
function mE(a) {
  if (a._f === ce.ISO_8601) {
    Lb(a);
    return;
  }
  if (a._f === ce.RFC_2822) {
    Ub(a);
    return;
  }
  a._a = [], st(a).empty = !0;
  var o = "" + a._i, s, d, h, g, m, C = o.length, T = 0, b, k;
  for (h = vb(a._f, a._locale).match(lE) || [], k = h.length, s = 0; s < k; s++)
    g = h[s], d = (o.match(t2(g, a)) || [])[0], d && (m = o.substr(0, o.indexOf(d)), m.length > 0 && st(a).unusedInput.push(m), o = o.slice(
      o.indexOf(d) + d.length
    ), T += d.length), pd[g] ? (d ? st(a).empty = !1 : st(a).unusedTokens.push(g), r2(g, d, a)) : a._strict && !d && st(a).unusedTokens.push(g);
  st(a).charsLeftOver = C - T, o.length > 0 && st(a).unusedInput.push(o), a._a[rr] <= 12 && st(a).bigHour === !0 && a._a[rr] > 0 && (st(a).bigHour = void 0), st(a).parsedDateParts = a._a.slice(0), st(a).meridiem = a._meridiem, a._a[rr] = pU(
    a._locale,
    a._a[rr],
    a._meridiem
  ), b = st(a).era, b !== null && (a._a[Gr] = a._locale.erasConvertYear(b, a._a[Gr])), vE(a), hE(a);
}
function pU(a, o, s) {
  var d;
  return s == null ? o : a.meridiemHour != null ? a.meridiemHour(o, s) : (a.isPM != null && (d = a.isPM(s), d && o < 12 && (o += 12), !d && o === 12 && (o = 0)), o);
}
function hU(a) {
  var o, s, d, h, g, m, C = !1, T = a._f.length;
  if (T === 0) {
    st(a).invalidFormat = !0, a._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (h = 0; h < T; h++)
    g = 0, m = !1, o = aE({}, a), a._useUTC != null && (o._useUTC = a._useUTC), o._f = a._f[h], mE(o), rE(o) && (m = !0), g += st(o).charsLeftOver, g += st(o).unusedTokens.length * 10, st(o).score = g, C ? g < d && (d = g, s = o) : (d == null || g < d || m) && (d = g, s = o, m && (C = !0));
  qu(a, s || o);
}
function vU(a) {
  if (!a._d) {
    var o = oE(a._i), s = o.day === void 0 ? o.date : o.day;
    a._a = db(
      [o.year, o.month, s, o.hour, o.minute, o.second, o.millisecond],
      function(d) {
        return d && parseInt(d, 10);
      }
    ), vE(a);
  }
}
function mU(a) {
  var o = new tv(hE(jb(a)));
  return o._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
}
function jb(a) {
  var o = a._i, s = a._f;
  return a._locale = a._locale || Bo(a._l), o === null || s === void 0 && o === "" ? Cg({ nullInput: !0 }) : (typeof o == "string" && (a._i = o = a._locale.preparse(o)), nl(o) ? new tv(hE(o)) : (ev(o) ? a._d = o : tl(s) ? hU(a) : s ? mE(a) : yU(a), rE(a) || (a._d = null), a));
}
function yU(a) {
  var o = a._i;
  Fa(o) ? a._d = new Date(ce.now()) : ev(o) ? a._d = new Date(o.valueOf()) : typeof o == "string" ? cU(a) : tl(o) ? (a._a = db(o.slice(0), function(s) {
    return parseInt(s, 10);
  }), vE(a)) : fc(o) ? vU(a) : $o(o) ? a._d = new Date(o) : ce.createFromInputFallback(a);
}
function Ab(a, o, s, d, h) {
  var g = {};
  return (o === !0 || o === !1) && (d = o, o = void 0), (s === !0 || s === !1) && (d = s, s = void 0), (fc(a) && nE(a) || tl(a) && a.length === 0) && (a = void 0), g._isAMomentObject = !0, g._useUTC = g._isUTC = h, g._l = s, g._i = a, g._f = o, g._strict = d, mU(g);
}
function an(a, o, s, d) {
  return Ab(a, o, s, d, !1);
}
var gU = xi(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var a = an.apply(null, arguments);
    return this.isValid() && a.isValid() ? a < this ? this : a : Cg();
  }
), SU = xi(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var a = an.apply(null, arguments);
    return this.isValid() && a.isValid() ? a > this ? this : a : Cg();
  }
);
function zb(a, o) {
  var s, d;
  if (o.length === 1 && tl(o[0]) && (o = o[0]), !o.length)
    return an();
  for (s = o[0], d = 1; d < o.length; ++d)
    (!o[d].isValid() || o[d][a](s)) && (s = o[d]);
  return s;
}
function wU() {
  var a = [].slice.call(arguments, 0);
  return zb("isBefore", a);
}
function EU() {
  var a = [].slice.call(arguments, 0);
  return zb("isAfter", a);
}
var _U = function() {
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
function xU(a) {
  var o, s = !1, d, h = Fh.length;
  for (o in a)
    if (kt(a, o) && !(Nn.call(Fh, o) !== -1 && (a[o] == null || !isNaN(a[o]))))
      return !1;
  for (d = 0; d < h; ++d)
    if (a[Fh[d]]) {
      if (s)
        return !1;
      parseFloat(a[Fh[d]]) !== pt(a[Fh[d]]) && (s = !0);
    }
  return !0;
}
function CU() {
  return this._isValid;
}
function TU() {
  return rl(NaN);
}
function Lg(a) {
  var o = oE(a), s = o.year || 0, d = o.quarter || 0, h = o.month || 0, g = o.week || o.isoWeek || 0, m = o.day || 0, C = o.hour || 0, T = o.minute || 0, b = o.second || 0, k = o.millisecond || 0;
  this._isValid = xU(o), this._milliseconds = +k + b * 1e3 + // 1000
  T * 6e4 + // 1000 * 60
  C * 1e3 * 60 * 60, this._days = +m + g * 7, this._months = +h + d * 3 + s * 12, this._data = {}, this._locale = Bo(), this._bubble();
}
function cg(a) {
  return a instanceof Lg;
}
function zw(a) {
  return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
}
function bU(a, o, s) {
  var d = Math.min(a.length, o.length), h = Math.abs(a.length - o.length), g = 0, m;
  for (m = 0; m < d; m++)
    (s && a[m] !== o[m] || !s && pt(a[m]) !== pt(o[m])) && g++;
  return g + h;
}
function Fb(a, o) {
  $e(a, 0, 0, function() {
    var s = this.utcOffset(), d = "+";
    return s < 0 && (s = -s, d = "-"), d + Vl(~~(s / 60), 2) + o + Vl(~~s % 60, 2);
  });
}
Fb("Z", ":");
Fb("ZZ", "");
ke("Z", Mg);
ke("ZZ", Mg);
Vt(["Z", "ZZ"], function(a, o, s) {
  s._useUTC = !0, s._tzm = yE(Mg, a);
});
var DU = /([\+\-]|\d\d)/gi;
function yE(a, o) {
  var s = (o || "").match(a), d, h, g;
  return s === null ? null : (d = s[s.length - 1] || [], h = (d + "").match(DU) || ["-", 0, 0], g = +(h[1] * 60) + pt(h[2]), g === 0 ? 0 : h[0] === "+" ? g : -g);
}
function gE(a, o) {
  var s, d;
  return o._isUTC ? (s = o.clone(), d = (nl(a) || ev(a) ? a.valueOf() : an(a).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + d), ce.updateOffset(s, !1), s) : an(a).local();
}
function Fw(a) {
  return -Math.round(a._d.getTimezoneOffset());
}
ce.updateOffset = function() {
};
function RU(a, o, s) {
  var d = this._offset || 0, h;
  if (!this.isValid())
    return a != null ? this : NaN;
  if (a != null) {
    if (typeof a == "string") {
      if (a = yE(Mg, a), a === null)
        return this;
    } else
      Math.abs(a) < 16 && !s && (a = a * 60);
    return !this._isUTC && o && (h = Fw(this)), this._offset = a, this._isUTC = !0, h != null && this.add(h, "m"), d !== a && (!o || this._changeInProgress ? Yb(
      this,
      rl(a - d, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ce.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? d : Fw(this);
}
function kU(a, o) {
  return a != null ? (typeof a != "string" && (a = -a), this.utcOffset(a, o), this) : -this.utcOffset();
}
function MU(a) {
  return this.utcOffset(0, a);
}
function OU(a) {
  return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Fw(this), "m")), this;
}
function NU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var a = yE(JL, this._i);
    a != null ? this.utcOffset(a) : this.utcOffset(0, !0);
  }
  return this;
}
function LU(a) {
  return this.isValid() ? (a = a ? an(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1;
}
function UU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function jU() {
  if (!Fa(this._isDSTShifted))
    return this._isDSTShifted;
  var a = {}, o;
  return aE(a, this), a = jb(a), a._a ? (o = a._isUTC ? $l(a._a) : an(a._a), this._isDSTShifted = this.isValid() && bU(a._a, o.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function AU() {
  return this.isValid() ? !this._isUTC : !1;
}
function zU() {
  return this.isValid() ? this._isUTC : !1;
}
function Hb() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var FU = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, HU = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function rl(a, o) {
  var s = a, d = null, h, g, m;
  return cg(a) ? s = {
    ms: a._milliseconds,
    d: a._days,
    M: a._months
  } : $o(a) || !isNaN(+a) ? (s = {}, o ? s[o] = +a : s.milliseconds = +a) : (d = FU.exec(a)) ? (h = d[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: pt(d[Il]) * h,
    h: pt(d[rr]) * h,
    m: pt(d[el]) * h,
    s: pt(d[Io]) * h,
    ms: pt(zw(d[cc] * 1e3)) * h
    // the millisecond decimal point is included in the match
  }) : (d = HU.exec(a)) ? (h = d[1] === "-" ? -1 : 1, s = {
    y: sc(d[2], h),
    M: sc(d[3], h),
    w: sc(d[4], h),
    d: sc(d[5], h),
    h: sc(d[6], h),
    m: sc(d[7], h),
    s: sc(d[8], h)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (m = PU(
    an(s.from),
    an(s.to)
  ), s = {}, s.ms = m.milliseconds, s.M = m.months), g = new Lg(s), cg(a) && kt(a, "_locale") && (g._locale = a._locale), cg(a) && kt(a, "_isValid") && (g._isValid = a._isValid), g;
}
rl.fn = Lg.prototype;
rl.invalid = TU;
function sc(a, o) {
  var s = a && parseFloat(a.replace(",", "."));
  return (isNaN(s) ? 0 : s) * o;
}
function xT(a, o) {
  var s = {};
  return s.months = o.month() - a.month() + (o.year() - a.year()) * 12, a.clone().add(s.months, "M").isAfter(o) && --s.months, s.milliseconds = +o - +a.clone().add(s.months, "M"), s;
}
function PU(a, o) {
  var s;
  return a.isValid() && o.isValid() ? (o = gE(o, a), a.isBefore(o) ? s = xT(a, o) : (s = xT(o, a), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Pb(a, o) {
  return function(s, d) {
    var h, g;
    return d !== null && !isNaN(+d) && (hb(
      o,
      "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), g = s, s = d, d = g), h = rl(s, d), Yb(this, h, a), this;
  };
}
function Yb(a, o, s, d) {
  var h = o._milliseconds, g = zw(o._days), m = zw(o._months);
  a.isValid() && (d = d ?? !0, m && Cb(a, mg(a, "Month") + m * s), g && yb(a, "Date", mg(a, "Date") + g * s), h && a._d.setTime(a._d.valueOf() + h * s), d && ce.updateOffset(a, g || m));
}
var YU = Pb(1, "add"), IU = Pb(-1, "subtract");
function Ib(a) {
  return typeof a == "string" || a instanceof String;
}
function VU(a) {
  return nl(a) || ev(a) || Ib(a) || $o(a) || BU(a) || $U(a) || a === null || a === void 0;
}
function $U(a) {
  var o = fc(a) && !nE(a), s = !1, d = [
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
  ], h, g, m = d.length;
  for (h = 0; h < m; h += 1)
    g = d[h], s = s || kt(a, g);
  return o && s;
}
function BU(a) {
  var o = tl(a), s = !1;
  return o && (s = a.filter(function(d) {
    return !$o(d) && Ib(a);
  }).length === 0), o && s;
}
function WU(a) {
  var o = fc(a) && !nE(a), s = !1, d = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], h, g;
  for (h = 0; h < d.length; h += 1)
    g = d[h], s = s || kt(a, g);
  return o && s;
}
function GU(a, o) {
  var s = a.diff(o, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function QU(a, o) {
  arguments.length === 1 && (arguments[0] ? VU(arguments[0]) ? (a = arguments[0], o = void 0) : WU(arguments[0]) && (o = arguments[0], a = void 0) : (a = void 0, o = void 0));
  var s = a || an(), d = gE(s, this).startOf("day"), h = ce.calendarFormat(this, d) || "sameElse", g = o && (Bl(o[h]) ? o[h].call(this, s) : o[h]);
  return this.format(
    g || this.localeData().calendar(h, this, an(s))
  );
}
function qU() {
  return new tv(this);
}
function ZU(a, o) {
  var s = nl(a) ? a : an(a);
  return this.isValid() && s.isValid() ? (o = Ci(o) || "millisecond", o === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(o).valueOf()) : !1;
}
function KU(a, o) {
  var s = nl(a) ? a : an(a);
  return this.isValid() && s.isValid() ? (o = Ci(o) || "millisecond", o === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(o).valueOf() < s.valueOf()) : !1;
}
function XU(a, o, s, d) {
  var h = nl(a) ? a : an(a), g = nl(o) ? o : an(o);
  return this.isValid() && h.isValid() && g.isValid() ? (d = d || "()", (d[0] === "(" ? this.isAfter(h, s) : !this.isBefore(h, s)) && (d[1] === ")" ? this.isBefore(g, s) : !this.isAfter(g, s))) : !1;
}
function JU(a, o) {
  var s = nl(a) ? a : an(a), d;
  return this.isValid() && s.isValid() ? (o = Ci(o) || "millisecond", o === "millisecond" ? this.valueOf() === s.valueOf() : (d = s.valueOf(), this.clone().startOf(o).valueOf() <= d && d <= this.clone().endOf(o).valueOf())) : !1;
}
function ej(a, o) {
  return this.isSame(a, o) || this.isAfter(a, o);
}
function tj(a, o) {
  return this.isSame(a, o) || this.isBefore(a, o);
}
function nj(a, o, s) {
  var d, h, g;
  if (!this.isValid())
    return NaN;
  if (d = gE(a, this), !d.isValid())
    return NaN;
  switch (h = (d.utcOffset() - this.utcOffset()) * 6e4, o = Ci(o), o) {
    case "year":
      g = fg(this, d) / 12;
      break;
    case "month":
      g = fg(this, d);
      break;
    case "quarter":
      g = fg(this, d) / 3;
      break;
    case "second":
      g = (this - d) / 1e3;
      break;
    case "minute":
      g = (this - d) / 6e4;
      break;
    case "hour":
      g = (this - d) / 36e5;
      break;
    case "day":
      g = (this - d - h) / 864e5;
      break;
    case "week":
      g = (this - d - h) / 6048e5;
      break;
    default:
      g = this - d;
  }
  return s ? g : _i(g);
}
function fg(a, o) {
  if (a.date() < o.date())
    return -fg(o, a);
  var s = (o.year() - a.year()) * 12 + (o.month() - a.month()), d = a.clone().add(s, "months"), h, g;
  return o - d < 0 ? (h = a.clone().add(s - 1, "months"), g = (o - d) / (d - h)) : (h = a.clone().add(s + 1, "months"), g = (o - d) / (h - d)), -(s + g) || 0;
}
ce.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ce.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function rj() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function aj(a) {
  if (!this.isValid())
    return null;
  var o = a !== !0, s = o ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? sg(
    s,
    o ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Bl(Date.prototype.toISOString) ? o ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", sg(s, "Z")) : sg(
    s,
    o ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function ij() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var a = "moment", o = "", s, d, h, g;
  return this.isLocal() || (a = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", o = "Z"), s = "[" + a + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", h = "-MM-DD[T]HH:mm:ss.SSS", g = o + '[")]', this.format(s + d + h + g);
}
function lj(a) {
  a || (a = this.isUtc() ? ce.defaultFormatUtc : ce.defaultFormat);
  var o = sg(this, a);
  return this.localeData().postformat(o);
}
function oj(a, o) {
  return this.isValid() && (nl(a) && a.isValid() || an(a).isValid()) ? rl({ to: this, from: a }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function uj(a) {
  return this.from(an(), a);
}
function sj(a, o) {
  return this.isValid() && (nl(a) && a.isValid() || an(a).isValid()) ? rl({ from: this, to: a }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function cj(a) {
  return this.to(an(), a);
}
function Vb(a) {
  var o;
  return a === void 0 ? this._locale._abbr : (o = Bo(a), o != null && (this._locale = o), this);
}
var $b = xi(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(a) {
    return a === void 0 ? this.localeData() : this.locale(a);
  }
);
function Bb() {
  return this._locale;
}
var Sg = 1e3, hd = 60 * Sg, wg = 60 * hd, Wb = (365 * 400 + 97) * 24 * wg;
function vd(a, o) {
  return (a % o + o) % o;
}
function Gb(a, o, s) {
  return a < 100 && a >= 0 ? new Date(a + 400, o, s) - Wb : new Date(a, o, s).valueOf();
}
function Qb(a, o, s) {
  return a < 100 && a >= 0 ? Date.UTC(a + 400, o, s) - Wb : Date.UTC(a, o, s);
}
function fj(a) {
  var o, s;
  if (a = Ci(a), a === void 0 || a === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Qb : Gb, a) {
    case "year":
      o = s(this.year(), 0, 1);
      break;
    case "quarter":
      o = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      o = s(this.year(), this.month(), 1);
      break;
    case "week":
      o = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      o = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      o = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      o = this._d.valueOf(), o -= vd(
        o + (this._isUTC ? 0 : this.utcOffset() * hd),
        wg
      );
      break;
    case "minute":
      o = this._d.valueOf(), o -= vd(o, hd);
      break;
    case "second":
      o = this._d.valueOf(), o -= vd(o, Sg);
      break;
  }
  return this._d.setTime(o), ce.updateOffset(this, !0), this;
}
function dj(a) {
  var o, s;
  if (a = Ci(a), a === void 0 || a === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Qb : Gb, a) {
    case "year":
      o = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      o = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      o = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      o = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      o = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      o = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      o = this._d.valueOf(), o += wg - vd(
        o + (this._isUTC ? 0 : this.utcOffset() * hd),
        wg
      ) - 1;
      break;
    case "minute":
      o = this._d.valueOf(), o += hd - vd(o, hd) - 1;
      break;
    case "second":
      o = this._d.valueOf(), o += Sg - vd(o, Sg) - 1;
      break;
  }
  return this._d.setTime(o), ce.updateOffset(this, !0), this;
}
function pj() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function hj() {
  return Math.floor(this.valueOf() / 1e3);
}
function vj() {
  return new Date(this.valueOf());
}
function mj() {
  var a = this;
  return [
    a.year(),
    a.month(),
    a.date(),
    a.hour(),
    a.minute(),
    a.second(),
    a.millisecond()
  ];
}
function yj() {
  var a = this;
  return {
    years: a.year(),
    months: a.month(),
    date: a.date(),
    hours: a.hours(),
    minutes: a.minutes(),
    seconds: a.seconds(),
    milliseconds: a.milliseconds()
  };
}
function gj() {
  return this.isValid() ? this.toISOString() : null;
}
function Sj() {
  return rE(this);
}
function wj() {
  return qu({}, st(this));
}
function Ej() {
  return st(this).overflow;
}
function _j() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
$e("N", 0, 0, "eraAbbr");
$e("NN", 0, 0, "eraAbbr");
$e("NNN", 0, 0, "eraAbbr");
$e("NNNN", 0, 0, "eraName");
$e("NNNNN", 0, 0, "eraNarrow");
$e("y", ["y", 1], "yo", "eraYear");
$e("y", ["yy", 2], 0, "eraYear");
$e("y", ["yyy", 3], 0, "eraYear");
$e("y", ["yyyy", 4], 0, "eraYear");
ke("N", SE);
ke("NN", SE);
ke("NNN", SE);
ke("NNNN", Lj);
ke("NNNNN", Uj);
Vt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(a, o, s, d) {
    var h = s._locale.erasParse(a, d, s._strict);
    h ? st(s).era = h : st(s).invalidEra = a;
  }
);
ke("y", gd);
ke("yy", gd);
ke("yyy", gd);
ke("yyyy", gd);
ke("yo", jj);
Vt(["y", "yy", "yyy", "yyyy"], Gr);
Vt(["yo"], function(a, o, s, d) {
  var h;
  s._locale._eraYearOrdinalRegex && (h = a.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? o[Gr] = s._locale.eraYearOrdinalParse(a, h) : o[Gr] = parseInt(a, 10);
});
function xj(a, o) {
  var s, d, h, g = this._eras || Bo("en")._eras;
  for (s = 0, d = g.length; s < d; ++s) {
    switch (typeof g[s].since) {
      case "string":
        h = ce(g[s].since).startOf("day"), g[s].since = h.valueOf();
        break;
    }
    switch (typeof g[s].until) {
      case "undefined":
        g[s].until = 1 / 0;
        break;
      case "string":
        h = ce(g[s].until).startOf("day").valueOf(), g[s].until = h.valueOf();
        break;
    }
  }
  return g;
}
function Cj(a, o, s) {
  var d, h, g = this.eras(), m, C, T;
  for (a = a.toUpperCase(), d = 0, h = g.length; d < h; ++d)
    if (m = g[d].name.toUpperCase(), C = g[d].abbr.toUpperCase(), T = g[d].narrow.toUpperCase(), s)
      switch (o) {
        case "N":
        case "NN":
        case "NNN":
          if (C === a)
            return g[d];
          break;
        case "NNNN":
          if (m === a)
            return g[d];
          break;
        case "NNNNN":
          if (T === a)
            return g[d];
          break;
      }
    else if ([m, C, T].indexOf(a) >= 0)
      return g[d];
}
function Tj(a, o) {
  var s = a.since <= a.until ? 1 : -1;
  return o === void 0 ? ce(a.since).year() : ce(a.since).year() + (o - a.offset) * s;
}
function bj() {
  var a, o, s, d = this.localeData().eras();
  for (a = 0, o = d.length; a < o; ++a)
    if (s = this.clone().startOf("day").valueOf(), d[a].since <= s && s <= d[a].until || d[a].until <= s && s <= d[a].since)
      return d[a].name;
  return "";
}
function Dj() {
  var a, o, s, d = this.localeData().eras();
  for (a = 0, o = d.length; a < o; ++a)
    if (s = this.clone().startOf("day").valueOf(), d[a].since <= s && s <= d[a].until || d[a].until <= s && s <= d[a].since)
      return d[a].narrow;
  return "";
}
function Rj() {
  var a, o, s, d = this.localeData().eras();
  for (a = 0, o = d.length; a < o; ++a)
    if (s = this.clone().startOf("day").valueOf(), d[a].since <= s && s <= d[a].until || d[a].until <= s && s <= d[a].since)
      return d[a].abbr;
  return "";
}
function kj() {
  var a, o, s, d, h = this.localeData().eras();
  for (a = 0, o = h.length; a < o; ++a)
    if (s = h[a].since <= h[a].until ? 1 : -1, d = this.clone().startOf("day").valueOf(), h[a].since <= d && d <= h[a].until || h[a].until <= d && d <= h[a].since)
      return (this.year() - ce(h[a].since).year()) * s + h[a].offset;
  return this.year();
}
function Mj(a) {
  return kt(this, "_erasNameRegex") || wE.call(this), a ? this._erasNameRegex : this._erasRegex;
}
function Oj(a) {
  return kt(this, "_erasAbbrRegex") || wE.call(this), a ? this._erasAbbrRegex : this._erasRegex;
}
function Nj(a) {
  return kt(this, "_erasNarrowRegex") || wE.call(this), a ? this._erasNarrowRegex : this._erasRegex;
}
function SE(a, o) {
  return o.erasAbbrRegex(a);
}
function Lj(a, o) {
  return o.erasNameRegex(a);
}
function Uj(a, o) {
  return o.erasNarrowRegex(a);
}
function jj(a, o) {
  return o._eraYearOrdinalRegex || gd;
}
function wE() {
  var a = [], o = [], s = [], d = [], h, g, m = this.eras();
  for (h = 0, g = m.length; h < g; ++h)
    o.push(ti(m[h].name)), a.push(ti(m[h].abbr)), s.push(ti(m[h].narrow)), d.push(ti(m[h].name)), d.push(ti(m[h].abbr)), d.push(ti(m[h].narrow));
  this._erasRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
$e(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
$e(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ug(a, o) {
  $e(0, [a, a.length], 0, o);
}
Ug("gggg", "weekYear");
Ug("ggggg", "weekYear");
Ug("GGGG", "isoWeekYear");
Ug("GGGGG", "isoWeekYear");
Qr("weekYear", "gg");
Qr("isoWeekYear", "GG");
qr("weekYear", 1);
qr("isoWeekYear", 1);
ke("G", kg);
ke("g", kg);
ke("GG", ln, ni);
ke("gg", ln, ni);
ke("GGGG", sE, uE);
ke("gggg", sE, uE);
ke("GGGGG", Rg, bg);
ke("ggggg", Rg, bg);
rv(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(a, o, s, d) {
    o[d.substr(0, 2)] = pt(a);
  }
);
rv(["gg", "GG"], function(a, o, s, d) {
  o[d] = ce.parseTwoDigitYear(a);
});
function Aj(a) {
  return qb.call(
    this,
    a,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function zj(a) {
  return qb.call(
    this,
    a,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Fj() {
  return Vo(this.year(), 1, 4);
}
function Hj() {
  return Vo(this.isoWeekYear(), 1, 4);
}
function Pj() {
  var a = this.localeData()._week;
  return Vo(this.year(), a.dow, a.doy);
}
function Yj() {
  var a = this.localeData()._week;
  return Vo(this.weekYear(), a.dow, a.doy);
}
function qb(a, o, s, d, h) {
  var g;
  return a == null ? Qh(this, d, h).year : (g = Vo(a, d, h), o > g && (o = g), Ij.call(this, a, o, s, d, h));
}
function Ij(a, o, s, d, h) {
  var g = Rb(a, o, s, d, h), m = Gh(g.year, 0, g.dayOfYear);
  return this.year(m.getUTCFullYear()), this.month(m.getUTCMonth()), this.date(m.getUTCDate()), this;
}
$e("Q", 0, "Qo", "quarter");
Qr("quarter", "Q");
qr("quarter", 7);
ke("Q", gb);
Vt("Q", function(a, o) {
  o[Yo] = (pt(a) - 1) * 3;
});
function Vj(a) {
  return a == null ? Math.ceil((this.month() + 1) / 3) : this.month((a - 1) * 3 + this.month() % 3);
}
$e("D", ["DD", 2], "Do", "date");
Qr("date", "D");
qr("date", 9);
ke("D", ln);
ke("DD", ln, ni);
ke("Do", function(a, o) {
  return a ? o._dayOfMonthOrdinalParse || o._ordinalParse : o._dayOfMonthOrdinalParseLenient;
});
Vt(["D", "DD"], Il);
Vt("Do", function(a, o) {
  o[Il] = pt(a.match(ln)[0]);
});
var Zb = yd("Date", !0);
$e("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Qr("dayOfYear", "DDD");
qr("dayOfYear", 4);
ke("DDD", Dg);
ke("DDDD", Sb);
Vt(["DDD", "DDDD"], function(a, o, s) {
  s._dayOfYear = pt(a);
});
function $j(a) {
  var o = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return a == null ? o : this.add(a - o, "d");
}
$e("m", ["mm", 2], 0, "minute");
Qr("minute", "m");
qr("minute", 14);
ke("m", ln);
ke("mm", ln, ni);
Vt(["m", "mm"], el);
var Bj = yd("Minutes", !1);
$e("s", ["ss", 2], 0, "second");
Qr("second", "s");
qr("second", 15);
ke("s", ln);
ke("ss", ln, ni);
Vt(["s", "ss"], Io);
var Wj = yd("Seconds", !1);
$e("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
$e(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
$e(0, ["SSS", 3], 0, "millisecond");
$e(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
$e(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
$e(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
$e(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
$e(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
$e(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Qr("millisecond", "ms");
qr("millisecond", 16);
ke("S", Dg, gb);
ke("SS", Dg, ni);
ke("SSS", Dg, Sb);
var Zu, Kb;
for (Zu = "SSSS"; Zu.length <= 9; Zu += "S")
  ke(Zu, gd);
function Gj(a, o) {
  o[cc] = pt(("0." + a) * 1e3);
}
for (Zu = "S"; Zu.length <= 9; Zu += "S")
  Vt(Zu, Gj);
Kb = yd("Milliseconds", !1);
$e("z", 0, 0, "zoneAbbr");
$e("zz", 0, 0, "zoneName");
function Qj() {
  return this._isUTC ? "UTC" : "";
}
function qj() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var ue = tv.prototype;
ue.add = YU;
ue.calendar = QU;
ue.clone = qU;
ue.diff = nj;
ue.endOf = dj;
ue.format = lj;
ue.from = oj;
ue.fromNow = uj;
ue.to = sj;
ue.toNow = cj;
ue.get = KL;
ue.invalidAt = Ej;
ue.isAfter = ZU;
ue.isBefore = KU;
ue.isBetween = XU;
ue.isSame = JU;
ue.isSameOrAfter = ej;
ue.isSameOrBefore = tj;
ue.isValid = Sj;
ue.lang = $b;
ue.locale = Vb;
ue.localeData = Bb;
ue.max = SU;
ue.min = gU;
ue.parsingFlags = wj;
ue.set = XL;
ue.startOf = fj;
ue.subtract = IU;
ue.toArray = mj;
ue.toObject = yj;
ue.toDate = vj;
ue.toISOString = aj;
ue.inspect = ij;
typeof Symbol < "u" && Symbol.for != null && (ue[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
ue.toJSON = gj;
ue.toString = rj;
ue.unix = hj;
ue.valueOf = pj;
ue.creationData = _j;
ue.eraName = bj;
ue.eraNarrow = Dj;
ue.eraAbbr = Rj;
ue.eraYear = kj;
ue.year = Db;
ue.isLeapYear = y2;
ue.weekYear = Aj;
ue.isoWeekYear = zj;
ue.quarter = ue.quarters = Vj;
ue.month = Tb;
ue.daysInMonth = h2;
ue.week = ue.weeks = x2;
ue.isoWeek = ue.isoWeeks = C2;
ue.weeksInYear = Pj;
ue.weeksInWeekYear = Yj;
ue.isoWeeksInYear = Fj;
ue.isoWeeksInISOWeekYear = Hj;
ue.date = Zb;
ue.day = ue.days = z2;
ue.weekday = F2;
ue.isoWeekday = H2;
ue.dayOfYear = $j;
ue.hour = ue.hours = W2;
ue.minute = ue.minutes = Bj;
ue.second = ue.seconds = Wj;
ue.millisecond = ue.milliseconds = Kb;
ue.utcOffset = RU;
ue.utc = MU;
ue.local = OU;
ue.parseZone = NU;
ue.hasAlignedHourOffset = LU;
ue.isDST = UU;
ue.isLocal = AU;
ue.isUtcOffset = zU;
ue.isUtc = Hb;
ue.isUTC = Hb;
ue.zoneAbbr = Qj;
ue.zoneName = qj;
ue.dates = xi(
  "dates accessor is deprecated. Use date instead.",
  Zb
);
ue.months = xi(
  "months accessor is deprecated. Use month instead",
  Tb
);
ue.years = xi(
  "years accessor is deprecated. Use year instead",
  Db
);
ue.zone = xi(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  kU
);
ue.isDSTShifted = xi(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  jU
);
function Zj(a) {
  return an(a * 1e3);
}
function Kj() {
  return an.apply(null, arguments).parseZone();
}
function Xb(a) {
  return a;
}
var Mt = iE.prototype;
Mt.calendar = zL;
Mt.longDateFormat = YL;
Mt.invalidDate = VL;
Mt.ordinal = WL;
Mt.preparse = Xb;
Mt.postformat = Xb;
Mt.relativeTime = QL;
Mt.pastFuture = qL;
Mt.set = jL;
Mt.eras = xj;
Mt.erasParse = Cj;
Mt.erasConvertYear = Tj;
Mt.erasAbbrRegex = Oj;
Mt.erasNameRegex = Mj;
Mt.erasNarrowRegex = Nj;
Mt.months = c2;
Mt.monthsShort = f2;
Mt.monthsParse = p2;
Mt.monthsRegex = m2;
Mt.monthsShortRegex = v2;
Mt.week = S2;
Mt.firstDayOfYear = _2;
Mt.firstDayOfWeek = E2;
Mt.weekdays = N2;
Mt.weekdaysMin = U2;
Mt.weekdaysShort = L2;
Mt.weekdaysParse = A2;
Mt.weekdaysRegex = P2;
Mt.weekdaysShortRegex = Y2;
Mt.weekdaysMinRegex = I2;
Mt.isPM = $2;
Mt.meridiem = G2;
function Eg(a, o, s, d) {
  var h = Bo(), g = $l().set(d, o);
  return h[s](g, a);
}
function Jb(a, o, s) {
  if ($o(a) && (o = a, a = void 0), a = a || "", o != null)
    return Eg(a, o, s, "month");
  var d, h = [];
  for (d = 0; d < 12; d++)
    h[d] = Eg(a, d, s, "month");
  return h;
}
function EE(a, o, s, d) {
  typeof a == "boolean" ? ($o(o) && (s = o, o = void 0), o = o || "") : (o = a, s = o, a = !1, $o(o) && (s = o, o = void 0), o = o || "");
  var h = Bo(), g = a ? h._week.dow : 0, m, C = [];
  if (s != null)
    return Eg(o, (s + g) % 7, d, "day");
  for (m = 0; m < 7; m++)
    C[m] = Eg(o, (m + g) % 7, d, "day");
  return C;
}
function Xj(a, o) {
  return Jb(a, o, "months");
}
function Jj(a, o) {
  return Jb(a, o, "monthsShort");
}
function eA(a, o, s) {
  return EE(a, o, s, "weekdays");
}
function tA(a, o, s) {
  return EE(a, o, s, "weekdaysShort");
}
function nA(a, o, s) {
  return EE(a, o, s, "weekdaysMin");
}
Ku("en", {
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
  ordinal: function(a) {
    var o = a % 10, s = pt(a % 100 / 10) === 1 ? "th" : o === 1 ? "st" : o === 2 ? "nd" : o === 3 ? "rd" : "th";
    return a + s;
  }
});
ce.lang = xi(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ku
);
ce.langData = xi(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Bo
);
var Ho = Math.abs;
function rA() {
  var a = this._data;
  return this._milliseconds = Ho(this._milliseconds), this._days = Ho(this._days), this._months = Ho(this._months), a.milliseconds = Ho(a.milliseconds), a.seconds = Ho(a.seconds), a.minutes = Ho(a.minutes), a.hours = Ho(a.hours), a.months = Ho(a.months), a.years = Ho(a.years), this;
}
function eD(a, o, s, d) {
  var h = rl(o, s);
  return a._milliseconds += d * h._milliseconds, a._days += d * h._days, a._months += d * h._months, a._bubble();
}
function aA(a, o) {
  return eD(this, a, o, 1);
}
function iA(a, o) {
  return eD(this, a, o, -1);
}
function CT(a) {
  return a < 0 ? Math.floor(a) : Math.ceil(a);
}
function lA() {
  var a = this._milliseconds, o = this._days, s = this._months, d = this._data, h, g, m, C, T;
  return a >= 0 && o >= 0 && s >= 0 || a <= 0 && o <= 0 && s <= 0 || (a += CT(Hw(s) + o) * 864e5, o = 0, s = 0), d.milliseconds = a % 1e3, h = _i(a / 1e3), d.seconds = h % 60, g = _i(h / 60), d.minutes = g % 60, m = _i(g / 60), d.hours = m % 24, o += _i(m / 24), T = _i(tD(o)), s += T, o -= CT(Hw(T)), C = _i(s / 12), s %= 12, d.days = o, d.months = s, d.years = C, this;
}
function tD(a) {
  return a * 4800 / 146097;
}
function Hw(a) {
  return a * 146097 / 4800;
}
function oA(a) {
  if (!this.isValid())
    return NaN;
  var o, s, d = this._milliseconds;
  if (a = Ci(a), a === "month" || a === "quarter" || a === "year")
    switch (o = this._days + d / 864e5, s = this._months + tD(o), a) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (o = this._days + Math.round(Hw(this._months)), a) {
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
        throw new Error("Unknown unit " + a);
    }
}
function uA() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + pt(this._months / 12) * 31536e6 : NaN;
}
function Wo(a) {
  return function() {
    return this.as(a);
  };
}
var sA = Wo("ms"), cA = Wo("s"), fA = Wo("m"), dA = Wo("h"), pA = Wo("d"), hA = Wo("w"), vA = Wo("M"), mA = Wo("Q"), yA = Wo("y");
function gA() {
  return rl(this);
}
function SA(a) {
  return a = Ci(a), this.isValid() ? this[a + "s"]() : NaN;
}
function hc(a) {
  return function() {
    return this.isValid() ? this._data[a] : NaN;
  };
}
var wA = hc("milliseconds"), EA = hc("seconds"), _A = hc("minutes"), xA = hc("hours"), CA = hc("days"), TA = hc("months"), bA = hc("years");
function DA() {
  return _i(this.days() / 7);
}
var Po = Math.round, dd = {
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
function RA(a, o, s, d, h) {
  return h.relativeTime(o || 1, !!s, a, d);
}
function kA(a, o, s, d) {
  var h = rl(a).abs(), g = Po(h.as("s")), m = Po(h.as("m")), C = Po(h.as("h")), T = Po(h.as("d")), b = Po(h.as("M")), k = Po(h.as("w")), O = Po(h.as("y")), z = g <= s.ss && ["s", g] || g < s.s && ["ss", g] || m <= 1 && ["m"] || m < s.m && ["mm", m] || C <= 1 && ["h"] || C < s.h && ["hh", C] || T <= 1 && ["d"] || T < s.d && ["dd", T];
  return s.w != null && (z = z || k <= 1 && ["w"] || k < s.w && ["ww", k]), z = z || b <= 1 && ["M"] || b < s.M && ["MM", b] || O <= 1 && ["y"] || ["yy", O], z[2] = o, z[3] = +a > 0, z[4] = d, RA.apply(null, z);
}
function MA(a) {
  return a === void 0 ? Po : typeof a == "function" ? (Po = a, !0) : !1;
}
function OA(a, o) {
  return dd[a] === void 0 ? !1 : o === void 0 ? dd[a] : (dd[a] = o, a === "s" && (dd.ss = o - 1), !0);
}
function NA(a, o) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, d = dd, h, g;
  return typeof a == "object" && (o = a, a = !1), typeof a == "boolean" && (s = a), typeof o == "object" && (d = Object.assign({}, dd, o), o.s != null && o.ss == null && (d.ss = o.s - 1)), h = this.localeData(), g = kA(this, !s, d, h), s && (g = h.pastFuture(+this, g)), h.postformat(g);
}
var ww = Math.abs;
function cd(a) {
  return (a > 0) - (a < 0) || +a;
}
function jg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var a = ww(this._milliseconds) / 1e3, o = ww(this._days), s = ww(this._months), d, h, g, m, C = this.asSeconds(), T, b, k, O;
  return C ? (d = _i(a / 60), h = _i(d / 60), a %= 60, d %= 60, g = _i(s / 12), s %= 12, m = a ? a.toFixed(3).replace(/\.?0+$/, "") : "", T = C < 0 ? "-" : "", b = cd(this._months) !== cd(C) ? "-" : "", k = cd(this._days) !== cd(C) ? "-" : "", O = cd(this._milliseconds) !== cd(C) ? "-" : "", T + "P" + (g ? b + g + "Y" : "") + (s ? b + s + "M" : "") + (o ? k + o + "D" : "") + (h || d || a ? "T" : "") + (h ? O + h + "H" : "") + (d ? O + d + "M" : "") + (a ? O + m + "S" : "")) : "P0D";
}
var Ct = Lg.prototype;
Ct.isValid = CU;
Ct.abs = rA;
Ct.add = aA;
Ct.subtract = iA;
Ct.as = oA;
Ct.asMilliseconds = sA;
Ct.asSeconds = cA;
Ct.asMinutes = fA;
Ct.asHours = dA;
Ct.asDays = pA;
Ct.asWeeks = hA;
Ct.asMonths = vA;
Ct.asQuarters = mA;
Ct.asYears = yA;
Ct.valueOf = uA;
Ct._bubble = lA;
Ct.clone = gA;
Ct.get = SA;
Ct.milliseconds = wA;
Ct.seconds = EA;
Ct.minutes = _A;
Ct.hours = xA;
Ct.days = CA;
Ct.weeks = DA;
Ct.months = TA;
Ct.years = bA;
Ct.humanize = NA;
Ct.toISOString = jg;
Ct.toString = jg;
Ct.toJSON = jg;
Ct.locale = Vb;
Ct.localeData = Bb;
Ct.toIsoString = xi(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  jg
);
Ct.lang = $b;
$e("X", 0, 0, "unix");
$e("x", 0, 0, "valueOf");
ke("x", kg);
ke("X", e2);
Vt("X", function(a, o, s) {
  s._d = new Date(parseFloat(a) * 1e3);
});
Vt("x", function(a, o, s) {
  s._d = new Date(pt(a));
});
//! moment.js
ce.version = "2.29.4";
LL(an);
ce.fn = ue;
ce.min = wU;
ce.max = EU;
ce.now = _U;
ce.utc = $l;
ce.unix = Zj;
ce.months = Xj;
ce.isDate = ev;
ce.locale = Ku;
ce.invalid = Cg;
ce.duration = rl;
ce.isMoment = nl;
ce.weekdays = eA;
ce.parseZone = Kj;
ce.localeData = Bo;
ce.isDuration = cg;
ce.monthsShort = Jj;
ce.weekdaysMin = nA;
ce.defineLocale = pE;
ce.updateLocale = K2;
ce.locales = X2;
ce.weekdaysShort = tA;
ce.normalizeUnits = Ci;
ce.relativeTimeRounding = MA;
ce.relativeTimeThreshold = OA;
ce.calendarFormat = GU;
ce.prototype = ue;
ce.HTML5_FMT = {
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
function LA(a, o = 300) {
  let s;
  return function(...d) {
    clearTimeout(s), s = setTimeout(() => {
      a.apply(this, d);
    }, o);
  };
}
const Ew = (a, o, s, d = !1) => {
  var m, C, T, b;
  const h = a.clientWidth, g = a.clientHeight;
  if ((m = o.current) == null || m.setAttribute("viewBox", `0 0 ${h} ${g}`), (C = o.current) == null || C.setAttribute("width", String(h)), !d) {
    (T = o.current) == null || T.setAttribute("height", String(g)), s({
      height: g,
      width: h
    });
    return;
  }
  (b = o.current) == null || b.setAttribute("height", String(g)), s((k) => ({
    ...k,
    width: h
  }));
}, O3 = ({
  type: a,
  width: o,
  height: s,
  hide: d,
  data: h,
  children: g,
  snap: m = !1
}) => {
  const C = xn(null), [T, b] = _n({
    width: o ?? 0,
    height: s ?? 0
  }), k = xn(null), O = xn(null), z = Xu(() => d ? [...h].filter((A) => (d.forEach((Q) => delete A[Q]), A)) : h, [d, h]);
  console.log(T), md(() => {
    var Q;
    const A = (Q = C == null ? void 0 : C.current) == null ? void 0 : Q.parentNode;
    return window == null || window.addEventListener(
      "resize",
      LA(
        () => Ew(A, C, b, s !== void 0)
      )
    ), (!o || !s) && Ew(A, C, b, s !== void 0), () => A == null ? void 0 : A.removeEventListener(
      "resize",
      () => Ew(A, C, () => {
      }, s !== void 0)
    );
  }, [b, o, s]);
  const B = Math.max(
    ...h.map((A) => Math.max(...Object.values(A)))
  );
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx(
      "div",
      {
        ref: k,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ F.jsxs(
      "svg",
      {
        ref: C,
        className: `chart ${a}`,
        viewBox: `0 0 ${o ?? 0} ${s ?? 0}`,
        width: T.width,
        height: T.height,
        onMouseMove: (A) => {
          if (O.current && C.current && k.current) {
            const Q = O.current.style, he = A.clientX, we = C.current.getBoundingClientRect().left, K = C.current.getBoundingClientRect().top;
            if (Q.opacity = "1", m) {
              const ee = T.width / (h.length * 4), xe = Array.from({
                length: h.length
              }).map((Qe, Je) => Math.abs(
                he - we - ee * Je - T.width / h.length * Je
              )), de = xe.indexOf(
                Math.min(...xe)
              ), pe = T.width / h.length * de + ee * de;
              Q.transform = `translate(${pe}px, 0px)`;
            } else
              Q.transform = `translate(${A.clientX - we}px, 0px)`, Q.transition = "none";
            if (k.current.innerHTML === "") {
              k.current.style.opacity = "0";
              return;
            }
            const te = A.clientX - we, Se = k.current.clientWidth;
            k.current.style.opacity = "1";
            let oe = te + 20;
            const G = A.clientY - K + 20;
            k.current.offsetLeft + te + Se + 20 > window.innerWidth && (oe = te - Se - 20), k.current.style.transform = `translate(${oe}px, ${G}px)`;
          }
        },
        onMouseLeave: () => {
          k.current && O.current && (k.current.innerHTML = "", k.current.style.opacity = "0", O.current.style.opacity = "0");
        },
        children: [
          g({
            currentSize: T,
            tooltipRef: k,
            data: z(),
            maxItemValue: B,
            lineRef: O
          }),
          /* @__PURE__ */ F.jsx(
            "line",
            {
              ref: O,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: s,
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
const Vh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Ag = (a, o, s, d = "") => {
  const h = a.split(":");
  if (a.slice(0, 1) === "@") {
    if (h.length < 2 || h.length > 3)
      return null;
    d = h.shift().slice(1);
  }
  if (h.length > 3 || !h.length)
    return null;
  if (h.length > 1) {
    const C = h.pop(), T = h.pop(), b = {
      // Allow provider without '@': "provider:prefix:name"
      provider: h.length > 0 ? h[0] : d,
      prefix: T,
      name: C
    };
    return o && !dg(b) ? null : b;
  }
  const g = h[0], m = g.split("-");
  if (m.length > 1) {
    const C = {
      provider: d,
      prefix: m.shift(),
      name: m.join("-")
    };
    return o && !dg(C) ? null : C;
  }
  if (s && d === "") {
    const C = {
      provider: d,
      prefix: "",
      name: g
    };
    return o && !dg(C, s) ? null : C;
  }
  return null;
}, dg = (a, o) => a ? !!((a.provider === "" || a.provider.match(Vh)) && (o && a.prefix === "" || a.prefix.match(Vh)) && a.name.match(Vh)) : !1, nD = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), _g = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), _E = Object.freeze({
  ...nD,
  ..._g
}), Pw = Object.freeze({
  ..._E,
  body: "",
  hidden: !1
});
function UA(a, o) {
  const s = {};
  !a.hFlip != !o.hFlip && (s.hFlip = !0), !a.vFlip != !o.vFlip && (s.vFlip = !0);
  const d = ((a.rotate || 0) + (o.rotate || 0)) % 4;
  return d && (s.rotate = d), s;
}
function TT(a, o) {
  const s = UA(a, o);
  for (const d in Pw)
    d in _g ? d in a && !(d in s) && (s[d] = _g[d]) : d in o ? s[d] = o[d] : d in a && (s[d] = a[d]);
  return s;
}
function jA(a, o) {
  const s = a.icons, d = a.aliases || /* @__PURE__ */ Object.create(null), h = /* @__PURE__ */ Object.create(null);
  function g(m) {
    if (s[m])
      return h[m] = [];
    if (!(m in h)) {
      h[m] = null;
      const C = d[m] && d[m].parent, T = C && g(C);
      T && (h[m] = [C].concat(T));
    }
    return h[m];
  }
  return (o || Object.keys(s).concat(Object.keys(d))).forEach(g), h;
}
function AA(a, o, s) {
  const d = a.icons, h = a.aliases || /* @__PURE__ */ Object.create(null);
  let g = {};
  function m(C) {
    g = TT(
      d[C] || h[C],
      g
    );
  }
  return m(o), s.forEach(m), TT(a, g);
}
function rD(a, o) {
  const s = [];
  if (typeof a != "object" || typeof a.icons != "object")
    return s;
  a.not_found instanceof Array && a.not_found.forEach((h) => {
    o(h, null), s.push(h);
  });
  const d = jA(a);
  for (const h in d) {
    const g = d[h];
    g && (o(h, AA(a, h, g)), s.push(h));
  }
  return s;
}
const zA = {
  provider: "",
  aliases: {},
  not_found: {},
  ...nD
};
function _w(a, o) {
  for (const s in o)
    if (s in a && typeof a[s] != typeof o[s])
      return !1;
  return !0;
}
function aD(a) {
  if (typeof a != "object" || a === null)
    return null;
  const o = a;
  if (typeof o.prefix != "string" || !a.icons || typeof a.icons != "object" || !_w(a, zA))
    return null;
  const s = o.icons;
  for (const h in s) {
    const g = s[h];
    if (!h.match(Vh) || typeof g.body != "string" || !_w(
      g,
      Pw
    ))
      return null;
  }
  const d = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const h in d) {
    const g = d[h], m = g.parent;
    if (!h.match(Vh) || typeof m != "string" || !s[m] && !d[m] || !_w(
      g,
      Pw
    ))
      return null;
  }
  return o;
}
const bT = /* @__PURE__ */ Object.create(null);
function FA(a, o) {
  return {
    provider: a,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function dc(a, o) {
  const s = bT[a] || (bT[a] = /* @__PURE__ */ Object.create(null));
  return s[o] || (s[o] = FA(a, o));
}
function xE(a, o) {
  return aD(o) ? rD(o, (s, d) => {
    d ? a.icons[s] = d : a.missing.add(s);
  }) : [];
}
function HA(a, o, s) {
  try {
    if (typeof s.body == "string")
      return a.icons[o] = { ...s }, !0;
  } catch {
  }
  return !1;
}
let Zh = !1;
function iD(a) {
  return typeof a == "boolean" && (Zh = a), Zh;
}
function PA(a) {
  const o = typeof a == "string" ? Ag(a, !0, Zh) : a;
  if (o) {
    const s = dc(o.provider, o.prefix), d = o.name;
    return s.icons[d] || (s.missing.has(d) ? null : void 0);
  }
}
function YA(a, o) {
  const s = Ag(a, !0, Zh);
  if (!s)
    return !1;
  const d = dc(s.provider, s.prefix);
  return HA(d, s.name, o);
}
function IA(a, o) {
  if (typeof a != "object")
    return !1;
  if (typeof o != "string" && (o = a.provider || ""), Zh && !o && !a.prefix) {
    let h = !1;
    return aD(a) && (a.prefix = "", rD(a, (g, m) => {
      m && YA(g, m) && (h = !0);
    })), h;
  }
  const s = a.prefix;
  if (!dg({
    provider: o,
    prefix: s,
    name: "a"
  }))
    return !1;
  const d = dc(o, s);
  return !!xE(d, a);
}
const lD = Object.freeze({
  width: null,
  height: null
}), oD = Object.freeze({
  // Dimensions
  ...lD,
  // Transformations
  ..._g
}), VA = /(-?[0-9.]*[0-9]+[0-9.]*)/g, $A = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function DT(a, o, s) {
  if (o === 1)
    return a;
  if (s = s || 100, typeof a == "number")
    return Math.ceil(a * o * s) / s;
  if (typeof a != "string")
    return a;
  const d = a.split(VA);
  if (d === null || !d.length)
    return a;
  const h = [];
  let g = d.shift(), m = $A.test(g);
  for (; ; ) {
    if (m) {
      const C = parseFloat(g);
      isNaN(C) ? h.push(g) : h.push(Math.ceil(C * o * s) / s);
    } else
      h.push(g);
    if (g = d.shift(), g === void 0)
      return h.join("");
    m = !m;
  }
}
const BA = (a) => a === "unset" || a === "undefined" || a === "none";
function WA(a, o) {
  const s = {
    ..._E,
    ...a
  }, d = {
    ...oD,
    ...o
  }, h = {
    left: s.left,
    top: s.top,
    width: s.width,
    height: s.height
  };
  let g = s.body;
  [s, d].forEach((A) => {
    const Q = [], he = A.hFlip, we = A.vFlip;
    let K = A.rotate;
    he ? we ? K += 2 : (Q.push(
      "translate(" + (h.width + h.left).toString() + " " + (0 - h.top).toString() + ")"
    ), Q.push("scale(-1 1)"), h.top = h.left = 0) : we && (Q.push(
      "translate(" + (0 - h.left).toString() + " " + (h.height + h.top).toString() + ")"
    ), Q.push("scale(1 -1)"), h.top = h.left = 0);
    let te;
    switch (K < 0 && (K -= Math.floor(K / 4) * 4), K = K % 4, K) {
      case 1:
        te = h.height / 2 + h.top, Q.unshift(
          "rotate(90 " + te.toString() + " " + te.toString() + ")"
        );
        break;
      case 2:
        Q.unshift(
          "rotate(180 " + (h.width / 2 + h.left).toString() + " " + (h.height / 2 + h.top).toString() + ")"
        );
        break;
      case 3:
        te = h.width / 2 + h.left, Q.unshift(
          "rotate(-90 " + te.toString() + " " + te.toString() + ")"
        );
        break;
    }
    K % 2 === 1 && (h.left !== h.top && (te = h.left, h.left = h.top, h.top = te), h.width !== h.height && (te = h.width, h.width = h.height, h.height = te)), Q.length && (g = '<g transform="' + Q.join(" ") + '">' + g + "</g>");
  });
  const m = d.width, C = d.height, T = h.width, b = h.height;
  let k, O;
  m === null ? (O = C === null ? "1em" : C === "auto" ? b : C, k = DT(O, T / b)) : (k = m === "auto" ? T : m, O = C === null ? DT(k, b / T) : C === "auto" ? b : C);
  const z = {}, B = (A, Q) => {
    BA(Q) || (z[A] = Q.toString());
  };
  return B("width", k), B("height", O), z.viewBox = h.left.toString() + " " + h.top.toString() + " " + T.toString() + " " + b.toString(), {
    attributes: z,
    body: g
  };
}
const GA = /\sid="(\S+)"/g, QA = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let qA = 0;
function ZA(a, o = QA) {
  const s = [];
  let d;
  for (; d = GA.exec(a); )
    s.push(d[1]);
  if (!s.length)
    return a;
  const h = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return s.forEach((g) => {
    const m = typeof o == "function" ? o(g) : o + (qA++).toString(), C = g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    a = a.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"),
      "$1" + m + h + "$3"
    );
  }), a = a.replace(new RegExp(h, "g"), ""), a;
}
const Yw = /* @__PURE__ */ Object.create(null);
function KA(a, o) {
  Yw[a] = o;
}
function Iw(a) {
  return Yw[a] || Yw[""];
}
function CE(a) {
  let o;
  if (typeof a.resources == "string")
    o = [a.resources];
  else if (o = a.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
    // Root path
    path: a.path || "/",
    // URL length limit
    maxURL: a.maxURL || 500,
    // Timeout before next host is used.
    rotate: a.rotate || 750,
    // Timeout before failing query.
    timeout: a.timeout || 5e3,
    // Randomise default API end point.
    random: a.random === !0,
    // Start index
    index: a.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: a.dataAfterTimeout !== !1
  };
}
const TE = /* @__PURE__ */ Object.create(null), Hh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], pg = [];
for (; Hh.length > 0; )
  Hh.length === 1 || Math.random() > 0.5 ? pg.push(Hh.shift()) : pg.push(Hh.pop());
TE[""] = CE({
  resources: ["https://api.iconify.design"].concat(pg)
});
function XA(a, o) {
  const s = CE(o);
  return s === null ? !1 : (TE[a] = s, !0);
}
function bE(a) {
  return TE[a];
}
const JA = () => {
  let a;
  try {
    if (a = fetch, typeof a == "function")
      return a;
  } catch {
  }
};
let RT = JA();
function ez(a, o) {
  const s = bE(a);
  if (!s)
    return 0;
  let d;
  if (!s.maxURL)
    d = 0;
  else {
    let h = 0;
    s.resources.forEach((m) => {
      h = Math.max(h, m.length);
    });
    const g = o + ".json?icons=";
    d = s.maxURL - h - s.path.length - g.length;
  }
  return d;
}
function tz(a) {
  return a === 404;
}
const nz = (a, o, s) => {
  const d = [], h = ez(a, o), g = "icons";
  let m = {
    type: g,
    provider: a,
    prefix: o,
    icons: []
  }, C = 0;
  return s.forEach((T, b) => {
    C += T.length + 1, C >= h && b > 0 && (d.push(m), m = {
      type: g,
      provider: a,
      prefix: o,
      icons: []
    }, C = T.length), m.icons.push(T);
  }), d.push(m), d;
};
function rz(a) {
  if (typeof a == "string") {
    const o = bE(a);
    if (o)
      return o.path;
  }
  return "/";
}
const az = (a, o, s) => {
  if (!RT) {
    s("abort", 424);
    return;
  }
  let d = rz(o.provider);
  switch (o.type) {
    case "icons": {
      const g = o.prefix, C = o.icons.join(","), T = new URLSearchParams({
        icons: C
      });
      d += g + ".json?" + T.toString();
      break;
    }
    case "custom": {
      const g = o.uri;
      d += g.slice(0, 1) === "/" ? g.slice(1) : g;
      break;
    }
    default:
      s("abort", 400);
      return;
  }
  let h = 503;
  RT(a + d).then((g) => {
    const m = g.status;
    if (m !== 200) {
      setTimeout(() => {
        s(tz(m) ? "abort" : "next", m);
      });
      return;
    }
    return h = 501, g.json();
  }).then((g) => {
    if (typeof g != "object" || g === null) {
      setTimeout(() => {
        g === 404 ? s("abort", g) : s("next", h);
      });
      return;
    }
    setTimeout(() => {
      s("success", g);
    });
  }).catch(() => {
    s("next", h);
  });
}, iz = {
  prepare: nz,
  send: az
};
function lz(a) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, s = /* @__PURE__ */ Object.create(null);
  a.sort((h, g) => h.provider !== g.provider ? h.provider.localeCompare(g.provider) : h.prefix !== g.prefix ? h.prefix.localeCompare(g.prefix) : h.name.localeCompare(g.name));
  let d = {
    provider: "",
    prefix: "",
    name: ""
  };
  return a.forEach((h) => {
    if (d.name === h.name && d.prefix === h.prefix && d.provider === h.provider)
      return;
    d = h;
    const g = h.provider, m = h.prefix, C = h.name, T = s[g] || (s[g] = /* @__PURE__ */ Object.create(null)), b = T[m] || (T[m] = dc(g, m));
    let k;
    C in b.icons ? k = o.loaded : m === "" || b.missing.has(C) ? k = o.missing : k = o.pending;
    const O = {
      provider: g,
      prefix: m,
      name: C
    };
    k.push(O);
  }), o;
}
function uD(a, o) {
  a.forEach((s) => {
    const d = s.loaderCallbacks;
    d && (s.loaderCallbacks = d.filter((h) => h.id !== o));
  });
}
function oz(a) {
  a.pendingCallbacksFlag || (a.pendingCallbacksFlag = !0, setTimeout(() => {
    a.pendingCallbacksFlag = !1;
    const o = a.loaderCallbacks ? a.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let s = !1;
    const d = a.provider, h = a.prefix;
    o.forEach((g) => {
      const m = g.icons, C = m.pending.length;
      m.pending = m.pending.filter((T) => {
        if (T.prefix !== h)
          return !0;
        const b = T.name;
        if (a.icons[b])
          m.loaded.push({
            provider: d,
            prefix: h,
            name: b
          });
        else if (a.missing.has(b))
          m.missing.push({
            provider: d,
            prefix: h,
            name: b
          });
        else
          return s = !0, !0;
        return !1;
      }), m.pending.length !== C && (s || uD([a], g.id), g.callback(
        m.loaded.slice(0),
        m.missing.slice(0),
        m.pending.slice(0),
        g.abort
      ));
    });
  }));
}
let uz = 0;
function sz(a, o, s) {
  const d = uz++, h = uD.bind(null, s, d);
  if (!o.pending.length)
    return h;
  const g = {
    id: d,
    icons: o,
    callback: a,
    abort: h
  };
  return s.forEach((m) => {
    (m.loaderCallbacks || (m.loaderCallbacks = [])).push(g);
  }), h;
}
function cz(a, o = !0, s = !1) {
  const d = [];
  return a.forEach((h) => {
    const g = typeof h == "string" ? Ag(h, o, s) : h;
    g && d.push(g);
  }), d;
}
var fz = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function dz(a, o, s, d) {
  const h = a.resources.length, g = a.random ? Math.floor(Math.random() * h) : a.index;
  let m;
  if (a.random) {
    let G = a.resources.slice(0);
    for (m = []; G.length > 1; ) {
      const ee = Math.floor(Math.random() * G.length);
      m.push(G[ee]), G = G.slice(0, ee).concat(G.slice(ee + 1));
    }
    m = m.concat(G);
  } else
    m = a.resources.slice(g).concat(a.resources.slice(0, g));
  const C = Date.now();
  let T = "pending", b = 0, k, O = null, z = [], B = [];
  typeof d == "function" && B.push(d);
  function A() {
    O && (clearTimeout(O), O = null);
  }
  function Q() {
    T === "pending" && (T = "aborted"), A(), z.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), z = [];
  }
  function he(G, ee) {
    ee && (B = []), typeof G == "function" && B.push(G);
  }
  function we() {
    return {
      startTime: C,
      payload: o,
      status: T,
      queriesSent: b,
      queriesPending: z.length,
      subscribe: he,
      abort: Q
    };
  }
  function K() {
    T = "failed", B.forEach((G) => {
      G(void 0, k);
    });
  }
  function te() {
    z.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), z = [];
  }
  function Se(G, ee, xe) {
    const de = ee !== "success";
    switch (z = z.filter((pe) => pe !== G), T) {
      case "pending":
        break;
      case "failed":
        if (de || !a.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (ee === "abort") {
      k = xe, K();
      return;
    }
    if (de) {
      k = xe, z.length || (m.length ? oe() : K());
      return;
    }
    if (A(), te(), !a.random) {
      const pe = a.resources.indexOf(G.resource);
      pe !== -1 && pe !== a.index && (a.index = pe);
    }
    T = "completed", B.forEach((pe) => {
      pe(xe);
    });
  }
  function oe() {
    if (T !== "pending")
      return;
    A();
    const G = m.shift();
    if (G === void 0) {
      if (z.length) {
        O = setTimeout(() => {
          A(), T === "pending" && (te(), K());
        }, a.timeout);
        return;
      }
      K();
      return;
    }
    const ee = {
      status: "pending",
      resource: G,
      callback: (xe, de) => {
        Se(ee, xe, de);
      }
    };
    z.push(ee), b++, O = setTimeout(oe, a.rotate), s(G, o, ee.callback);
  }
  return setTimeout(oe), we;
}
function sD(a) {
  const o = {
    ...fz,
    ...a
  };
  let s = [];
  function d() {
    s = s.filter((C) => C().status === "pending");
  }
  function h(C, T, b) {
    const k = dz(
      o,
      C,
      T,
      (O, z) => {
        d(), b && b(O, z);
      }
    );
    return s.push(k), k;
  }
  function g(C) {
    return s.find((T) => C(T)) || null;
  }
  return {
    query: h,
    find: g,
    setIndex: (C) => {
      o.index = C;
    },
    getIndex: () => o.index,
    cleanup: d
  };
}
function kT() {
}
const xw = /* @__PURE__ */ Object.create(null);
function pz(a) {
  if (!xw[a]) {
    const o = bE(a);
    if (!o)
      return;
    const s = sD(o), d = {
      config: o,
      redundancy: s
    };
    xw[a] = d;
  }
  return xw[a];
}
function hz(a, o, s) {
  let d, h;
  if (typeof a == "string") {
    const g = Iw(a);
    if (!g)
      return s(void 0, 424), kT;
    h = g.send;
    const m = pz(a);
    m && (d = m.redundancy);
  } else {
    const g = CE(a);
    if (g) {
      d = sD(g);
      const m = a.resources ? a.resources[0] : "", C = Iw(m);
      C && (h = C.send);
    }
  }
  return !d || !h ? (s(void 0, 424), kT) : d.query(o, h, s)().abort;
}
const MT = "iconify2", Kh = "iconify", cD = Kh + "-count", OT = Kh + "-version", fD = 36e5, vz = 168;
function Vw(a, o) {
  try {
    return a.getItem(o);
  } catch {
  }
}
function DE(a, o, s) {
  try {
    return a.setItem(o, s), !0;
  } catch {
  }
}
function NT(a, o) {
  try {
    a.removeItem(o);
  } catch {
  }
}
function $w(a, o) {
  return DE(a, cD, o.toString());
}
function Bw(a) {
  return parseInt(Vw(a, cD)) || 0;
}
const zg = {
  local: !0,
  session: !0
}, dD = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let RE = !1;
function mz(a) {
  RE = a;
}
let ig = typeof window > "u" ? {} : window;
function pD(a) {
  const o = a + "Storage";
  try {
    if (ig && ig[o] && typeof ig[o].length == "number")
      return ig[o];
  } catch {
  }
  zg[a] = !1;
}
function hD(a, o) {
  const s = pD(a);
  if (!s)
    return;
  const d = Vw(s, OT);
  if (d !== MT) {
    if (d) {
      const C = Bw(s);
      for (let T = 0; T < C; T++)
        NT(s, Kh + T.toString());
    }
    DE(s, OT, MT), $w(s, 0);
    return;
  }
  const h = Math.floor(Date.now() / fD) - vz, g = (C) => {
    const T = Kh + C.toString(), b = Vw(s, T);
    if (typeof b == "string") {
      try {
        const k = JSON.parse(b);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > h && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, C))
          return !0;
      } catch {
      }
      NT(s, T);
    }
  };
  let m = Bw(s);
  for (let C = m - 1; C >= 0; C--)
    g(C) || (C === m - 1 ? (m--, $w(s, m)) : dD[a].add(C));
}
function vD() {
  if (!RE) {
    mz(!0);
    for (const a in zg)
      hD(a, (o) => {
        const s = o.data, d = o.provider, h = s.prefix, g = dc(
          d,
          h
        );
        if (!xE(g, s).length)
          return !1;
        const m = s.lastModified || -1;
        return g.lastModifiedCached = g.lastModifiedCached ? Math.min(g.lastModifiedCached, m) : m, !0;
      });
  }
}
function yz(a, o) {
  const s = a.lastModifiedCached;
  if (
    // Matches or newer
    s && s >= o
  )
    return s === o;
  if (a.lastModifiedCached = o, s)
    for (const d in zg)
      hD(d, (h) => {
        const g = h.data;
        return h.provider !== a.provider || g.prefix !== a.prefix || g.lastModified === o;
      });
  return !0;
}
function gz(a, o) {
  RE || vD();
  function s(d) {
    let h;
    if (!zg[d] || !(h = pD(d)))
      return;
    const g = dD[d];
    let m;
    if (g.size)
      g.delete(m = Array.from(g).shift());
    else if (m = Bw(h), !$w(h, m + 1))
      return;
    const C = {
      cached: Math.floor(Date.now() / fD),
      provider: a.provider,
      data: o
    };
    return DE(
      h,
      Kh + m.toString(),
      JSON.stringify(C)
    );
  }
  o.lastModified && !yz(a, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), s("local") || s("session"));
}
function LT() {
}
function Sz(a) {
  a.iconsLoaderFlag || (a.iconsLoaderFlag = !0, setTimeout(() => {
    a.iconsLoaderFlag = !1, oz(a);
  }));
}
function wz(a, o) {
  a.iconsToLoad ? a.iconsToLoad = a.iconsToLoad.concat(o).sort() : a.iconsToLoad = o, a.iconsQueueFlag || (a.iconsQueueFlag = !0, setTimeout(() => {
    a.iconsQueueFlag = !1;
    const { provider: s, prefix: d } = a, h = a.iconsToLoad;
    delete a.iconsToLoad;
    let g;
    if (!h || !(g = Iw(s)))
      return;
    g.prepare(s, d, h).forEach((C) => {
      hz(s, C, (T) => {
        if (typeof T != "object")
          C.icons.forEach((b) => {
            a.missing.add(b);
          });
        else
          try {
            const b = xE(
              a,
              T
            );
            if (!b.length)
              return;
            const k = a.pendingIcons;
            k && b.forEach((O) => {
              k.delete(O);
            }), gz(a, T);
          } catch (b) {
            console.error(b);
          }
        Sz(a);
      });
    });
  }));
}
const Ez = (a, o) => {
  const s = cz(a, !0, iD()), d = lz(s);
  if (!d.pending.length) {
    let T = !0;
    return o && setTimeout(() => {
      T && o(
        d.loaded,
        d.missing,
        d.pending,
        LT
      );
    }), () => {
      T = !1;
    };
  }
  const h = /* @__PURE__ */ Object.create(null), g = [];
  let m, C;
  return d.pending.forEach((T) => {
    const { provider: b, prefix: k } = T;
    if (k === C && b === m)
      return;
    m = b, C = k, g.push(dc(b, k));
    const O = h[b] || (h[b] = /* @__PURE__ */ Object.create(null));
    O[k] || (O[k] = []);
  }), d.pending.forEach((T) => {
    const { provider: b, prefix: k, name: O } = T, z = dc(b, k), B = z.pendingIcons || (z.pendingIcons = /* @__PURE__ */ new Set());
    B.has(O) || (B.add(O), h[b][k].push(O));
  }), g.forEach((T) => {
    const { provider: b, prefix: k } = T;
    h[b][k].length && wz(T, h[b][k]);
  }), o ? sz(o, d, g) : LT;
};
function _z(a, o) {
  const s = {
    ...a
  };
  for (const d in o) {
    const h = o[d], g = typeof h;
    d in lD ? (h === null || h && (g === "string" || g === "number")) && (s[d] = h) : g === typeof s[d] && (s[d] = d === "rotate" ? h % 4 : h);
  }
  return s;
}
const xz = /[\s,]+/;
function Cz(a, o) {
  o.split(xz).forEach((s) => {
    switch (s.trim()) {
      case "horizontal":
        a.hFlip = !0;
        break;
      case "vertical":
        a.vFlip = !0;
        break;
    }
  });
}
function Tz(a, o = 0) {
  const s = a.replace(/^-?[0-9.]*/, "");
  function d(h) {
    for (; h < 0; )
      h += 4;
    return h % 4;
  }
  if (s === "") {
    const h = parseInt(a);
    return isNaN(h) ? 0 : d(h);
  } else if (s !== a) {
    let h = 0;
    switch (s) {
      case "%":
        h = 25;
        break;
      case "deg":
        h = 90;
    }
    if (h) {
      let g = parseFloat(a.slice(0, a.length - s.length));
      return isNaN(g) ? 0 : (g = g / h, g % 1 === 0 ? d(g) : 0);
    }
  }
  return o;
}
function bz(a, o) {
  let s = a.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const d in o)
    s += " " + d + '="' + o[d] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + s + ">" + a + "</svg>";
}
function Dz(a) {
  return a.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Rz(a) {
  return "data:image/svg+xml," + Dz(a);
}
function kz(a) {
  return 'url("' + Rz(a) + '")';
}
let $h;
function Mz() {
  try {
    $h = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (a) => a
    });
  } catch {
    $h = null;
  }
}
function Oz(a) {
  return $h === void 0 && Mz(), $h ? $h.createHTML(a) : a;
}
const mD = {
  ...oD,
  inline: !1
}, Nz = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Lz = {
  display: "inline-block"
}, Ww = {
  backgroundColor: "currentColor"
}, yD = {
  backgroundColor: "transparent"
}, UT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, jT = {
  WebkitMask: Ww,
  mask: Ww,
  background: yD
};
for (const a in jT) {
  const o = jT[a];
  for (const s in UT)
    o[a + s] = UT[s];
}
const Uz = {
  ...mD,
  inline: !0
};
function AT(a) {
  return a + (a.match(/^[-0-9.]+$/) ? "px" : "");
}
const jz = (a, o, s, d) => {
  const h = s ? Uz : mD, g = _z(h, o), m = o.mode || "svg", C = {}, T = o.style || {}, b = {
    ...m === "svg" ? Nz : {},
    ref: d
  };
  for (let we in o) {
    const K = o[we];
    if (K !== void 0)
      switch (we) {
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
          g[we] = K === !0 || K === "true" || K === 1;
          break;
        case "flip":
          typeof K == "string" && Cz(g, K);
          break;
        case "color":
          C.color = K;
          break;
        case "rotate":
          typeof K == "string" ? g[we] = Tz(K) : typeof K == "number" && (g[we] = K);
          break;
        case "ariaHidden":
        case "aria-hidden":
          K !== !0 && K !== "true" && delete b["aria-hidden"];
          break;
        default:
          h[we] === void 0 && (b[we] = K);
      }
  }
  const k = WA(a, g), O = k.attributes;
  if (g.inline && (C.verticalAlign = "-0.125em"), m === "svg") {
    b.style = {
      ...C,
      ...T
    }, Object.assign(b, O);
    let we = 0, K = o.id;
    return typeof K == "string" && (K = K.replace(/-/g, "_")), b.dangerouslySetInnerHTML = {
      __html: Oz(ZA(k.body, K ? () => K + "ID" + we++ : "iconifyReact"))
    }, Ju.createElement("svg", b);
  }
  const { body: z, width: B, height: A } = a, Q = m === "mask" || (m === "bg" ? !1 : z.indexOf("currentColor") !== -1), he = bz(z, {
    ...O,
    width: B + "",
    height: A + ""
  });
  return b.style = {
    ...C,
    "--svg": kz(he),
    width: AT(O.width),
    height: AT(O.height),
    ...Lz,
    ...Q ? Ww : yD,
    ...T
  }, Ju.createElement("span", b);
};
iD(!0);
KA("", iz);
if (typeof document < "u" && typeof window < "u") {
  vD();
  const a = window;
  if (a.IconifyPreload !== void 0) {
    const o = a.IconifyPreload, s = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((d) => {
      try {
        // Check if item is an object and not null/array
        (typeof d != "object" || d === null || d instanceof Array || // Check for 'icons' and 'prefix'
        typeof d.icons != "object" || typeof d.prefix != "string" || // Add icon set
        !IA(d)) && console.error(s);
      } catch {
        console.error(s);
      }
    });
  }
  if (a.IconifyProviders !== void 0) {
    const o = a.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let s in o) {
        const d = "IconifyProviders[" + s + "] is invalid.";
        try {
          const h = o[s];
          if (typeof h != "object" || !h || h.resources === void 0)
            continue;
          XA(s, h) || console.error(d);
        } catch {
          console.error(d);
        }
      }
  }
}
let gD = class extends Ju.Component {
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
    const s = this.state, d = this.props.icon;
    if (typeof d == "object" && d !== null && typeof d.body == "string") {
      this._icon = "", this._abortLoading(), (o || s.icon === null) && this._setData({
        data: d
      });
      return;
    }
    let h;
    if (typeof d != "string" || (h = Ag(d, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const g = PA(h);
    if (!g) {
      (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), g !== null && (this._loading = {
        name: d,
        abort: Ez([h], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== d || s.icon === null) {
      this._abortLoading(), this._icon = d;
      const m = ["iconify"];
      h.prefix !== "" && m.push("iconify--" + h.prefix), h.provider !== "" && m.push("iconify--" + h.provider), this._setData({
        data: g,
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
    const o = this.props, s = this.state.icon;
    if (s === null)
      return o.children ? o.children : Ju.createElement("span", {});
    let d = o;
    return s.classes && (d = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + s.classes.join(" ")
    }), jz({
      ..._E,
      ...s.data
    }, d, o._inline, o._ref);
  }
};
const Az = Ju.forwardRef(function(o, s) {
  const d = {
    ...o,
    _ref: s,
    _inline: !1
  };
  return Ju.createElement(gD, d);
});
Ju.forwardRef(function(o, s) {
  const d = {
    ...o,
    _ref: s,
    _inline: !0
  };
  return Ju.createElement(gD, d);
});
var mr = Az;
const zz = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
  const o = Math.random() * 16 | 0;
  return (a === "x" ? o : o & 3 | 8).toString(16);
}), Fz = ({
  onChange: a,
  defaultValue: o,
  children: s,
  name: d,
  invalidText: h,
  placeholder: g,
  variant: m,
  icon: C,
  required: T = !0,
  className: b = "",
  type: k = "text",
  id: O = zz(),
  ...z
}) => /* @__PURE__ */ F.jsxs("div", { className: `textfield ${m ? "bg-" + m : ""} ${b}`, children: [
  /* @__PURE__ */ F.jsx("label", { htmlFor: O, children: g ?? d ?? O }),
  /* @__PURE__ */ F.jsx(
    "input",
    {
      id: O,
      type: k,
      className: "input",
      name: d ?? O,
      onChange: a,
      defaultValue: o,
      placeholder: g ?? d ?? O ?? "",
      required: T,
      ...z
    }
  ),
  C && /* @__PURE__ */ F.jsx(mr, { icon: C }),
  T && /* @__PURE__ */ F.jsx("span", { className: "required", children: h ?? d ? `${d ?? O} should not be empty!` : "Should not be empty!" }),
  s && s
] }), L3 = ({
  defaultShow: a = !1,
  ...o
}) => {
  const [s, d] = _n(a);
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsx(
    Fz,
    {
      ...o,
      className: "textfield-password",
      type: s ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ F.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => d((h) => !h),
          children: /* @__PURE__ */ F.jsx(mr, { icon: s ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, Hz = (a) => {
  console.log(a);
}, Pz = (a) => {
  console.log(a);
}, Yz = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], Iz = ({
  defaultSelected: a,
  startDateRef: o,
  endDateRef: s,
  onClose: d
}) => {
  const [h, g] = _n(
    (a == null ? void 0 : a.end) === void 0 ? ce() : a.end
  ), [m, C] = _n(
    a === void 0 ? {
      start: null,
      end: null
    } : a
  ), T = h, b = T.clone().startOf("month"), k = T.clone().endOf("month"), O = [], z = b.day(), B = k.day();
  for (let A = z - 1; A >= 0; A--)
    O.push(b.clone().subtract(A, "days"));
  for (let A = b.clone().add(1, "day"); A.isSameOrBefore(k); A.add(1, "day"))
    O.push(A.clone());
  for (let A = 1; A <= 6 - B + 1; A++)
    O.push(k.clone().add(A, "days"));
  return /* @__PURE__ */ F.jsx("div", { className: "dropdown", children: /* @__PURE__ */ F.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ F.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              g(
                (A) => A.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ F.jsx(mr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ F.jsx("button", { type: "button", className: "btn", children: T.format("MMM, YYYY") }),
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              g(
                (A) => A.clone().add(1, "month")
              );
            },
            disabled: h.clone().add(1, "month").isSameOrAfter(ce()),
            children: /* @__PURE__ */ F.jsx(mr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ F.jsx("ul", { className: "date-weekdays", children: Yz.map((A) => /* @__PURE__ */ F.jsx("li", { children: /* @__PURE__ */ F.jsx("span", { children: A }) }, A)) })
    ] }),
    /* @__PURE__ */ F.jsx("ul", { className: "days-container", children: O.map((A, Q) => {
      var Se, oe, G;
      let he = "";
      const we = (Se = m.start) != null && Se.startOf("day").isSame(A) ? "selected start" : (G = (oe = m.end) == null ? void 0 : oe.startOf("day")) != null && G.isSame(A) ? "selected end" : "", K = A.format("MM") !== T.format("MM") ? "not-current" : "", te = A.isBetween(
        m.start,
        m.end
      ) ? "between" : "";
      return he += K + we + te, /* @__PURE__ */ F.jsx("li", { children: /* @__PURE__ */ F.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var ee;
            if (!(o.current === null || s.current === null)) {
              if (((ee = m.start) == null ? void 0 : ee.date()) === A.date()) {
                C({
                  start: null,
                  end: null
                }), o.current.value = "", s.current.value = "";
                return;
              }
              if (m.start === null)
                C((xe) => ({
                  ...xe,
                  start: A
                })), o.current.value = A.format("YYYY-MM-DD");
              else if (m.start !== null) {
                if (A.isBefore(m.start)) {
                  C((xe) => ({
                    start: A,
                    end: xe.start
                  })), o.current.value = A.format("YYYY-MM-DD"), s.current.value = m.start.format("YYYY-MM-DD");
                  return;
                }
                C((xe) => ({
                  ...xe,
                  end: A
                })), s.current.value = A.format("YYYY-MM-DD");
              }
            }
          },
          className: he,
          disabled: A.isAfter(ce()),
          children: A.format("DD")
        }
      ) }, Q);
    }) }),
    /* @__PURE__ */ F.jsx(
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
}, U3 = ({
  defaultSelected: a,
  onSearch: o,
  children: s
}) => {
  const [d, h] = _n(!1), g = xn(null), m = xn(null), C = {
    ref: g,
    type: "date",
    name: "start",
    onFocus: Hz,
    onClick: () => {
      h((b) => !b);
    },
    autoComplete: "off",
    defaultValue: a ? a.start.format("YYYY-MM-DD") : ""
  }, T = {
    ref: m,
    type: "date",
    name: "end",
    onFocus: Pz,
    onClick: () => {
      h((b) => !b);
    },
    autoComplete: "off",
    defaultValue: a != null && a.end ? a.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsxs(
    "form",
    {
      className: "date-range-picker",
      onSubmit: (b) => {
        b.preventDefault();
        const k = new FormData(b.target), O = Object.fromEntries(k.entries()), z = {
          start: ce(O.start, "YYYY-MM-DD"),
          end: ce(O.end, "YYYY-MM-DD")
        };
        o == null || o(z);
      },
      children: [
        /* @__PURE__ */ F.jsxs("div", { className: "group rounded-box", children: [
          s({ startDateProps: C, endDateProps: T }),
          /* @__PURE__ */ F.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        d && /* @__PURE__ */ F.jsx(
          Iz,
          {
            defaultSelected: a,
            startDateRef: g,
            endDateRef: m,
            onClose: () => h(!1)
          }
        )
      ]
    }
  ) });
}, Vz = (a, o, s, d, h, g) => {
  let m = 0, C = !1;
  switch (a.key) {
    case "ArrowUp": {
      if (o === 0)
        return;
      m = o - 1, h.current[m].focus(), s(m), d.current = "";
      break;
    }
    case "ArrowDown": {
      if (o === g - 1)
        return;
      m = o + 1, h.current[m].focus(), d.current = "", s(m);
      break;
    }
    case "Backspace": {
      d.current = d.current.slice(0, -1), d.current.length > 0 && (C = !0);
      break;
    }
    default:
      a.key.length === 1 && isNaN(Number(a.key)) && (d.current += a.key, C = !0);
  }
  if (C) {
    const T = h.current.findIndex(
      (b) => b.innerText.toLowerCase().includes(d.current.toLowerCase())
    );
    if (T === -1)
      return;
    h.current[T].focus(), s(T);
  }
}, $z = (a) => typeof a == "object" ? /* @__PURE__ */ F.jsx("span", { children: Object.values(a)[0] }) : /* @__PURE__ */ F.jsx("span", { children: a }), kE = ({
  items: a,
  selected: o,
  currentSelected: s,
  selector: d,
  onChange: h,
  labelExtractor: g,
  required: m = !0,
  showQty: C = 4,
  style: T = {},
  name: b = "",
  position: k = "top",
  variant: O = "neutral",
  keyExtractor: z = $z
}) => {
  const [B, A] = _n(!1), [Q, he] = _n(
    a.findIndex(
      (G) => d ? G[d] === (s == null ? void 0 : s[d]) : G === s
    )
  );
  md(() => {
    o && o !== Q && he(o);
  }, [o, Q]);
  const [we, K] = _n(Q), te = xn(null), Se = xn(""), oe = xn([]);
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: `select ${B ? "shadow-md" : ""} ${k}`,
      onBlur: () => {
      },
      style: T,
      children: [
        /* @__PURE__ */ F.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${O} btn-select ${B ? "active" : ""}`,
            onClick: () => {
              A((ee) => !ee);
              const G = s === void 0 ? 0 : Q;
              K(G), setTimeout(() => {
                B || oe.current[G].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ F.jsx("span", { className: Q === -1 ? "not-selected" : "", children: Q === -1 ? "Selecione uma das opções" : (g == null ? void 0 : g(a[Q])) ?? z(a[Q]) }),
              /* @__PURE__ */ F.jsx(mr, { icon: "eva:arrow-down-fill", vFlip: B })
            ]
          }
        ),
        /* @__PURE__ */ F.jsx(
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
            ref: te,
            required: m
          }
        ),
        B && /* @__PURE__ */ F.jsx(
          "ul",
          {
            className: `select-items${a.length > 4 ? " custom-scroll " : " "}bg-${O} shadow-md`,
            style: { "--select-items": C },
            children: a.map((G, ee) => /* @__PURE__ */ F.jsx("li", { className: "item", children: /* @__PURE__ */ F.jsx(
              "button",
              {
                type: "button",
                className: `${ee === Q ? "active" : ""}`,
                ref: (xe) => oe.current[ee] = xe,
                tabIndex: 0,
                onClick: () => {
                  he(ee), h !== void 0 && h(ee, a[ee]), te.current && d && (te.current.value = String(a[ee][d])), A(!1);
                },
                onMouseEnter: (xe) => {
                  K(ee), xe.target.focus();
                },
                onMouseLeave: () => {
                  K(Q);
                },
                onKeyDown: (xe) => Vz(
                  xe,
                  we,
                  K,
                  Se,
                  oe,
                  a.length
                ),
                children: z(G)
              }
            ) }, ee))
          }
        )
      ]
    }
  );
}, zT = (a, o, s, d, h, g) => {
  let m = 0, C = !1;
  switch (a.key) {
    case "ArrowUp": {
      if (o === 0)
        return;
      m = o - 1, h.current[m].focus(), s(m), d.current = "";
      break;
    }
    case "ArrowDown": {
      if (o === g - 1)
        return;
      m = o + 1, h.current[m].focus(), d.current = "", s(m);
      break;
    }
    case "Backspace": {
      d.current = d.current.slice(0, -1), d.current.length > 0 && (C = !0);
      break;
    }
    default:
      a.key.length === 1 && isNaN(Number(a.key)) && (d.current += a.key, C = !0);
  }
  if (C) {
    const T = h.current.findIndex(
      (b) => b.innerText.toLowerCase().includes(d.current.toLowerCase())
    );
    if (T === -1)
      return;
    h.current[T].focus(), s(T);
  }
}, ME = (a, o, s) => {
  let d;
  return (...h) => {
    const m = () => {
      d = null, s || a.apply(void 0, h);
    }, C = s && !d;
    clearTimeout(d), d = setTimeout(m, o), C && a.apply(void 0, h);
  };
}, Bz = [
  {
    mode: "all",
    label: "Todos"
  },
  {
    mode: "selected",
    label: "Selecionados"
  },
  {
    mode: "not-selected",
    label: "Não selecionados"
  }
], Wz = (a) => typeof a == "object" ? /* @__PURE__ */ F.jsx("span", { children: Object.values(a)[0] }) : /* @__PURE__ */ F.jsx("span", { children: a }), j3 = ({
  items: a,
  selected: o,
  selector: s,
  onChange: d,
  labelExtractor: h,
  onAllChange: g = () => {
  },
  showQty: m = 10,
  style: C = {},
  position: T = "top",
  variant: b = "neutral",
  keyExtractor: k = Wz
}) => {
  const [O, z] = _n(!1), [B, A] = _n(o ?? []), [Q, he] = _n(
    "all"
  ), [we, K] = _n("");
  md(() => {
    o && o !== B && A(o ?? []);
  }, [o, B]);
  const te = Xu(() => {
    var pe;
    const de = [];
    for (let Qe = 0; Qe < a.length; Qe++) {
      if (!String(s ? (pe = a[Qe]) == null ? void 0 : pe[s] : a[Qe]).toLowerCase().includes(we))
        continue;
      if (Q === "all") {
        de.push(Qe);
        continue;
      }
      const et = B.includes(Qe);
      et && Q === "selected" && de.push(Qe), !et && Q === "not-selected" && de.push(Qe);
    }
    return de;
  }, [a, we, s, Q, B]), [Se, oe] = _n(0), G = xn(null), ee = xn(""), xe = xn([]);
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: `select multiselect ${O ? "shadow-md" : ""} ${T}`,
      onBlur: () => {
      },
      style: C,
      children: [
        /* @__PURE__ */ F.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${b} btn-select ${O ? "active" : ""}`,
            onClick: () => {
              z((de) => !de), oe(0);
            },
            children: [
              /* @__PURE__ */ F.jsx("span", { className: B.length === 0 ? "not-selected" : "", children: B.length === 0 ? "Clique para selecionar" : (h == null ? void 0 : h(B)) ?? `${B.length} selecionados` }),
              /* @__PURE__ */ F.jsx(mr, { icon: "eva:arrow-down-fill", vFlip: O })
            ]
          }
        ),
        O && /* @__PURE__ */ F.jsxs(
          "ul",
          {
            className: `select-items${a.length > 4 ? " custom-scroll " : " "}bg-${b} shadow-md`,
            style: { "--select-items": m },
            children: [
              /* @__PURE__ */ F.jsx(
                "li",
                {
                  className: "group rounded-box",
                  style: { width: "fit-content", padding: "var(--spacing-xs)" },
                  children: Bz.map((de) => /* @__PURE__ */ F.jsx(
                    "button",
                    {
                      className: `btn no-bounce btn-${de.mode === Q ? "primary" : "neutral"} btn-sm`,
                      onClick: () => he(de.mode),
                      children: de.label
                    },
                    de.mode
                  ))
                }
              ),
              /* @__PURE__ */ F.jsx("li", { className: "search-bar", children: /* @__PURE__ */ F.jsx(
                "input",
                {
                  className: "input",
                  type: "input",
                  placeholder: "Buscar...",
                  onChange: ME((de) => {
                    K(de.target.value.toLowerCase());
                  }, 300)
                }
              ) }),
              /* @__PURE__ */ F.jsx("li", { className: "item", children: /* @__PURE__ */ F.jsxs(
                "button",
                {
                  type: "button",
                  ref: (de) => xe.current[0] = de,
                  className: `${B.length === a.length ? "active" : ""}`,
                  onMouseEnter: (de) => {
                    oe(0), de.target.focus();
                  },
                  onClick: () => {
                    g(B.length !== a.length), B.length === a.length ? A([]) : A(a.map((de, pe) => pe));
                  },
                  onKeyDown: (de) => zT(
                    de,
                    Se,
                    oe,
                    ee,
                    xe,
                    a.length
                  ),
                  tabIndex: 0,
                  children: [
                    /* @__PURE__ */ F.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "checkbox checkbox-secondary",
                        onChange: () => {
                          g(B.length !== a.length), B.length === a.length ? A([]) : A(a.map((de, pe) => pe));
                        },
                        checked: B.length === a.length
                      }
                    ),
                    /* @__PURE__ */ F.jsx("span", { children: "Selecionar Tudo" })
                  ]
                }
              ) }),
              a.length === 0 || te().length === 0 && /* @__PURE__ */ F.jsx("li", { className: "item", style: { padding: "var(--spacing-xs)" }, children: /* @__PURE__ */ F.jsx("span", { children: "Nenhum item foi encontrado" }) }),
              a.map((de, pe) => {
                if (!te().includes(pe))
                  return null;
                const Qe = B.includes(pe);
                return /* @__PURE__ */ F.jsx("li", { className: "item", children: /* @__PURE__ */ F.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `${Qe ? "active" : ""}`,
                    ref: (Je) => xe.current[pe + 1] = Je,
                    tabIndex: 0,
                    onClick: () => {
                      A((Je) => Qe ? Je.filter((Ae) => Ae !== pe) : [...Je, pe]), d !== void 0 && d(pe, a[pe]), G.current && s && (G.current.value = String(a[pe][s]));
                    },
                    onMouseEnter: (Je) => {
                      oe(pe), Je.target.focus();
                    },
                    onMouseLeave: () => {
                      oe(0);
                    },
                    onKeyDown: (Je) => zT(
                      Je,
                      Se,
                      oe,
                      ee,
                      xe,
                      te().length + 1
                    ),
                    children: [
                      /* @__PURE__ */ F.jsx(
                        "input",
                        {
                          type: "checkbox",
                          className: "checkbox checkbox-secondary",
                          checked: Qe ?? !1,
                          onChange: () => {
                            A((Je) => Qe ? Je.filter(
                              (Ae) => Ae !== pe
                            ) : [...Je, pe]), d !== void 0 && d(pe, a[pe]), G.current && s && (G.current.value = String(a[pe][s]));
                          }
                        }
                      ),
                      k(de)
                    ]
                  }
                ) }, pe);
              })
            ]
          }
        )
      ]
    }
  );
};
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
ce.defineLocale("pt-br", {
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
const Gz = [
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
ce.locale("pt-br");
const Qz = {
  206: "Almoço",
  205: "Banheiro"
}, qz = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Zz = ({
  data: a,
  lastSevenDays: o
}) => /* @__PURE__ */ F.jsx("div", { className: "detailed-workday--period", children: o.map((s, d) => {
  const h = ce(s).format("DD [de] MMMM"), g = a.find(
    ({ date: T }) => ce(T).format("YYYY/MM/DD") === s.format("YYYY/MM/DD")
  );
  if (g === void 0)
    return /* @__PURE__ */ F.jsx("div", { className: "day", children: /* @__PURE__ */ F.jsx("span", { children: h }) }, d);
  const m = ce.utc(g.start).format("HH[h]mm"), C = ce.utc(g.finish).format("HH[h]mm");
  return /* @__PURE__ */ F.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ F.jsx("span", { children: h }),
    /* @__PURE__ */ F.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ F.jsxs("span", { className: "service-time", children: [
      m,
      " - ",
      C
    ] }),
    /* @__PURE__ */ F.jsxs("span", { className: "description", children: [
      g.description,
      "*"
    ] }),
    /* @__PURE__ */ F.jsx("div", { className: "breaks", children: g.breaks.map((T, b) => {
      const k = ce.utc(T.start).format("HH[h]mm"), O = ce.utc(T.finish).format("HH[h]mm");
      return /* @__PURE__ */ F.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ F.jsx("span", { className: "break-item--label", children: Qz[String(T.type)] }),
        /* @__PURE__ */ F.jsxs("span", { className: "break-item--content", children: [
          k,
          " - ",
          O
        ] })
      ] }, b);
    }) })
  ] }, d);
}) }), A3 = () => {
  const a = Array.from({ length: 7 }).map(
    (o, s) => ce().clone().subtract(7 - s, "days")
  );
  return /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ F.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ F.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ F.jsx(kE, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ F.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ F.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ F.jsx("div", { className: "weekdays", children: a.map((o) => {
          const s = ce(o).day();
          return /* @__PURE__ */ F.jsx("span", { className: "", children: qz[s] });
        }) })
      ] }),
      Gz.map((o, s) => /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ F.jsx("span", { children: o.agent.firstName }),
        /* @__PURE__ */ F.jsx(
          Zz,
          {
            data: o.period,
            lastSevenDays: a
          },
          s
        )
      ] }, s))
    ] })
  ] });
}, z3 = ({ logo: a, items: o }) => /* @__PURE__ */ F.jsxs("header", { className: "header", children: [
  a,
  o
] }), Kz = (a, o) => {
  var h, g, m, C;
  const d = a.currentTarget.childNodes[1].childNodes;
  switch (a.key) {
    case "ArrowDown": {
      if (o.current === d.length - 1)
        return;
      o.current += 1;
      const T = (g = (h = d[o.current]) == null ? void 0 : h.firstChild) == null ? void 0 : g.firstChild;
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
      const T = a.target;
      T instanceof HTMLAnchorElement && T.click();
    }
  }
}, FT = (a, o, s, d, h, g = 0, m) => {
  a.current === null || o.current === null || (d.route === s && a.current.classList.add("active"), a.current.classList.contains("active") && d.route !== s && a.current.classList.remove("active"), m || (o.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${d.label}</span>
      </div>
    `, o.current.style.opacity = "1", o.current.style.top = `calc(48px * ${h + g})`), a.current.style.top = `calc(48px * ${h + g})`);
}, Xz = (a, o, s, d, h, g, m) => {
  var C;
  {
    if (o.current === null || s.current === null)
      return;
    let T = -1;
    h || (s.current.innerHTML = "", s.current.style.opacity = "0"), g.forEach((b, k) => {
      a + b.route === d && (T = k, m !== null && k >= m && (T += g[m].submenus.length)), Object.hasOwnProperty.call(b, "submenus") && b.submenus.forEach((O, z) => {
        `${a}${b.route}${O.route}` === d && (m === k ? T = k + z + 1 : T = k);
      });
    }), (C = document.activeElement) == null || C.blur(), T > -1 && (o.current.style.top = `calc(48px * ${T})`, o.current.classList.add("active"));
  }
}, F3 = ({
  data: a,
  itemLink: o,
  onSettings: s,
  onLogout: d,
  prefix: h = "",
  pathname: g = ""
}) => {
  const m = xn(null), C = xn(null), T = xn(null), b = xn(3), [k, O] = _n(!1), [z, B] = _n(null);
  return /* @__PURE__ */ F.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: m,
      onKeyDown: (A) => Kz(A, b),
      children: [
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              m.current !== null && (O((A) => !A), m.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ F.jsx(mr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ F.jsxs(
          "ul",
          {
            className: "sidebar-container",
            onMouseLeave: () => Xz(
              h,
              C,
              T,
              g,
              k,
              a,
              z
            ),
            children: [
              /* @__PURE__ */ F.jsx("span", { ref: C, className: "sidebar-selector" }),
              /* @__PURE__ */ F.jsx("div", { ref: T, className: "sidebar-tooltip" }),
              a.map((A, Q) => /* @__PURE__ */ F.jsxs(RL, { children: [
                /* @__PURE__ */ F.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => FT(
                      C,
                      T,
                      g,
                      A,
                      z !== null && Q > z ? Q + a[z].submenus.length : Q,
                      0,
                      k
                    ),
                    onClick: () => {
                      A != null && A.submenus && B(
                        (he) => he === Q ? null : Q
                      );
                    },
                    children: [
                      /* @__PURE__ */ F.jsx("div", { className: "sidebar-item--icon", children: o({
                        icon: A.icon,
                        label: A.label,
                        route: A.route,
                        isOpen: k,
                        props: {
                          className: A != null && A.submenus ? "group" : "",
                          onClick: () => {
                            b.current = Q + 2, C.current && C.current.classList.toggle("active");
                          }
                        }
                      }) }),
                      (A == null ? void 0 : A.submenus) && /* @__PURE__ */ F.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        k && /* @__PURE__ */ F.jsx("span", { className: "sidebar-item--indicator", children: A.submenus.length }),
                        /* @__PURE__ */ F.jsx(
                          mr,
                          {
                            icon: "ic:round-arrow-right",
                            height: 24,
                            rotate: Q === z ? 45 : 0
                          }
                        )
                      ] })
                    ]
                  }
                ),
                (A == null ? void 0 : A.submenus) && Q === z && /* @__PURE__ */ F.jsx("div", { className: "sidebar-submenu", children: A.submenus.map((he, we) => /* @__PURE__ */ F.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => FT(
                      C,
                      T,
                      g,
                      he,
                      Q,
                      we + 1,
                      k
                    ),
                    children: o({
                      icon: he.icon,
                      label: he.label,
                      route: `${A.route}${he.route}`,
                      isOpen: k,
                      props: { className: "" }
                    })
                  },
                  he.route
                )) })
              ] }, Q))
            ]
          }
        ),
        s && /* @__PURE__ */ F.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-settings-action ring-info",
            onClick: d,
            children: [
              /* @__PURE__ */ F.jsx(mr, { icon: "ph:gear-six-fill", height: 16 }),
              k && /* @__PURE__ */ F.jsx("span", { children: "Settings" })
            ]
          }
        ),
        d && /* @__PURE__ */ F.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-exit-action ring-warning",
            onClick: d,
            children: [
              /* @__PURE__ */ F.jsx(mr, { icon: "mingcute:exit-fill", height: 16 }),
              k && /* @__PURE__ */ F.jsx("span", { children: "Logout" })
            ]
          }
        )
      ]
    }
  );
};
var Gw = { exports: {} }, Aa = {}, lg = { exports: {} }, Cw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var HT;
function Jz() {
  return HT || (HT = 1, function(a) {
    function o(fe, Fe) {
      var Ee = fe.length;
      fe.push(Fe);
      e:
        for (; 0 < Ee; ) {
          var wt = Ee - 1 >>> 1, Tt = fe[wt];
          if (0 < h(Tt, Fe))
            fe[wt] = Fe, fe[Ee] = Tt, Ee = wt;
          else
            break e;
        }
    }
    function s(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function d(fe) {
      if (fe.length === 0)
        return null;
      var Fe = fe[0], Ee = fe.pop();
      if (Ee !== Fe) {
        fe[0] = Ee;
        e:
          for (var wt = 0, Tt = fe.length, $n = Tt >>> 1; wt < $n; ) {
            var yr = 2 * (wt + 1) - 1, ri = fe[yr], Cn = yr + 1, pa = fe[Cn];
            if (0 > h(ri, Ee))
              Cn < Tt && 0 > h(pa, ri) ? (fe[wt] = pa, fe[Cn] = Ee, wt = Cn) : (fe[wt] = ri, fe[yr] = Ee, wt = yr);
            else if (Cn < Tt && 0 > h(pa, Ee))
              fe[wt] = pa, fe[Cn] = Ee, wt = Cn;
            else
              break e;
          }
      }
      return Fe;
    }
    function h(fe, Fe) {
      var Ee = fe.sortIndex - Fe.sortIndex;
      return Ee !== 0 ? Ee : fe.id - Fe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      a.unstable_now = function() {
        return g.now();
      };
    } else {
      var m = Date, C = m.now();
      a.unstable_now = function() {
        return m.now() - C;
      };
    }
    var T = [], b = [], k = 1, O = null, z = 3, B = !1, A = !1, Q = !1, he = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function te(fe) {
      for (var Fe = s(b); Fe !== null; ) {
        if (Fe.callback === null)
          d(b);
        else if (Fe.startTime <= fe)
          d(b), Fe.sortIndex = Fe.expirationTime, o(T, Fe);
        else
          break;
        Fe = s(b);
      }
    }
    function Se(fe) {
      if (Q = !1, te(fe), !A)
        if (s(T) !== null)
          A = !0, yt(oe);
        else {
          var Fe = s(b);
          Fe !== null && on(Se, Fe.startTime - fe);
        }
    }
    function oe(fe, Fe) {
      A = !1, Q && (Q = !1, we(xe), xe = -1), B = !0;
      var Ee = z;
      try {
        for (te(Fe), O = s(T); O !== null && (!(O.expirationTime > Fe) || fe && !Qe()); ) {
          var wt = O.callback;
          if (typeof wt == "function") {
            O.callback = null, z = O.priorityLevel;
            var Tt = wt(O.expirationTime <= Fe);
            Fe = a.unstable_now(), typeof Tt == "function" ? O.callback = Tt : O === s(T) && d(T), te(Fe);
          } else
            d(T);
          O = s(T);
        }
        if (O !== null)
          var $n = !0;
        else {
          var yr = s(b);
          yr !== null && on(Se, yr.startTime - Fe), $n = !1;
        }
        return $n;
      } finally {
        O = null, z = Ee, B = !1;
      }
    }
    var G = !1, ee = null, xe = -1, de = 5, pe = -1;
    function Qe() {
      return !(a.unstable_now() - pe < de);
    }
    function Je() {
      if (ee !== null) {
        var fe = a.unstable_now();
        pe = fe;
        var Fe = !0;
        try {
          Fe = ee(!0, fe);
        } finally {
          Fe ? Ae() : (G = !1, ee = null);
        }
      } else
        G = !1;
    }
    var Ae;
    if (typeof K == "function")
      Ae = function() {
        K(Je);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), Pt = et.port2;
      et.port1.onmessage = Je, Ae = function() {
        Pt.postMessage(null);
      };
    } else
      Ae = function() {
        he(Je, 0);
      };
    function yt(fe) {
      ee = fe, G || (G = !0, Ae());
    }
    function on(fe, Fe) {
      xe = he(function() {
        fe(a.unstable_now());
      }, Fe);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, a.unstable_continueExecution = function() {
      A || B || (A = !0, yt(oe));
    }, a.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, a.unstable_getFirstCallbackNode = function() {
      return s(T);
    }, a.unstable_next = function(fe) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var Fe = 3;
          break;
        default:
          Fe = z;
      }
      var Ee = z;
      z = Fe;
      try {
        return fe();
      } finally {
        z = Ee;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(fe, Fe) {
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
      var Ee = z;
      z = fe;
      try {
        return Fe();
      } finally {
        z = Ee;
      }
    }, a.unstable_scheduleCallback = function(fe, Fe, Ee) {
      var wt = a.unstable_now();
      switch (typeof Ee == "object" && Ee !== null ? (Ee = Ee.delay, Ee = typeof Ee == "number" && 0 < Ee ? wt + Ee : wt) : Ee = wt, fe) {
        case 1:
          var Tt = -1;
          break;
        case 2:
          Tt = 250;
          break;
        case 5:
          Tt = 1073741823;
          break;
        case 4:
          Tt = 1e4;
          break;
        default:
          Tt = 5e3;
      }
      return Tt = Ee + Tt, fe = { id: k++, callback: Fe, priorityLevel: fe, startTime: Ee, expirationTime: Tt, sortIndex: -1 }, Ee > wt ? (fe.sortIndex = Ee, o(b, fe), s(T) === null && fe === s(b) && (Q ? (we(xe), xe = -1) : Q = !0, on(Se, Ee - wt))) : (fe.sortIndex = Tt, o(T, fe), A || B || (A = !0, yt(oe))), fe;
    }, a.unstable_shouldYield = Qe, a.unstable_wrapCallback = function(fe) {
      var Fe = z;
      return function() {
        var Ee = z;
        z = Fe;
        try {
          return fe.apply(this, arguments);
        } finally {
          z = Ee;
        }
      };
    };
  }(Cw)), Cw;
}
var Tw = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PT;
function eF() {
  return PT || (PT = 1, function(a) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = !1, s = !1, d = 5;
      function h(ye, He) {
        var ot = ye.length;
        ye.push(He), C(ye, He, ot);
      }
      function g(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function m(ye) {
        if (ye.length === 0)
          return null;
        var He = ye[0], ot = ye.pop();
        return ot !== He && (ye[0] = ot, T(ye, ot, 0)), He;
      }
      function C(ye, He, ot) {
        for (var Ot = ot; Ot > 0; ) {
          var Jt = Ot - 1 >>> 1, Un = ye[Jt];
          if (b(Un, He) > 0)
            ye[Jt] = He, ye[Ot] = Un, Ot = Jt;
          else
            return;
        }
      }
      function T(ye, He, ot) {
        for (var Ot = ot, Jt = ye.length, Un = Jt >>> 1; Ot < Un; ) {
          var dn = (Ot + 1) * 2 - 1, Nr = ye[dn], Yt = dn + 1, Jr = ye[Yt];
          if (b(Nr, He) < 0)
            Yt < Jt && b(Jr, Nr) < 0 ? (ye[Ot] = Jr, ye[Yt] = He, Ot = Yt) : (ye[Ot] = Nr, ye[dn] = He, Ot = dn);
          else if (Yt < Jt && b(Jr, He) < 0)
            ye[Ot] = Jr, ye[Yt] = He, Ot = Yt;
          else
            return;
        }
      }
      function b(ye, He) {
        var ot = ye.sortIndex - He.sortIndex;
        return ot !== 0 ? ot : ye.id - He.id;
      }
      var k = 1, O = 2, z = 3, B = 4, A = 5;
      function Q(ye, He) {
      }
      var he = typeof performance == "object" && typeof performance.now == "function";
      if (he) {
        var we = performance;
        a.unstable_now = function() {
          return we.now();
        };
      } else {
        var K = Date, te = K.now();
        a.unstable_now = function() {
          return K.now() - te;
        };
      }
      var Se = 1073741823, oe = -1, G = 250, ee = 5e3, xe = 1e4, de = Se, pe = [], Qe = [], Je = 1, Ae = null, et = z, Pt = !1, yt = !1, on = !1, fe = typeof setTimeout == "function" ? setTimeout : null, Fe = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function wt(ye) {
        for (var He = g(Qe); He !== null; ) {
          if (He.callback === null)
            m(Qe);
          else if (He.startTime <= ye)
            m(Qe), He.sortIndex = He.expirationTime, h(pe, He);
          else
            return;
          He = g(Qe);
        }
      }
      function Tt(ye) {
        if (on = !1, wt(ye), !yt)
          if (g(pe) !== null)
            yt = !0, Ya($n);
          else {
            var He = g(Qe);
            He !== null && mn(Tt, He.startTime - ye);
          }
      }
      function $n(ye, He) {
        yt = !1, on && (on = !1, Xr()), Pt = !0;
        var ot = et;
        try {
          var Ot;
          if (!s)
            return yr(ye, He);
        } finally {
          Ae = null, et = ot, Pt = !1;
        }
      }
      function yr(ye, He) {
        var ot = He;
        for (wt(ot), Ae = g(pe); Ae !== null && !o && !(Ae.expirationTime > ot && (!ye || Ha())); ) {
          var Ot = Ae.callback;
          if (typeof Ot == "function") {
            Ae.callback = null, et = Ae.priorityLevel;
            var Jt = Ae.expirationTime <= ot, Un = Ot(Jt);
            ot = a.unstable_now(), typeof Un == "function" ? Ae.callback = Un : Ae === g(pe) && m(pe), wt(ot);
          } else
            m(pe);
          Ae = g(pe);
        }
        if (Ae !== null)
          return !0;
        var dn = g(Qe);
        return dn !== null && mn(Tt, dn.startTime - ot), !1;
      }
      function ri(ye, He) {
        switch (ye) {
          case k:
          case O:
          case z:
          case B:
          case A:
            break;
          default:
            ye = z;
        }
        var ot = et;
        et = ye;
        try {
          return He();
        } finally {
          et = ot;
        }
      }
      function Cn(ye) {
        var He;
        switch (et) {
          case k:
          case O:
          case z:
            He = z;
            break;
          default:
            He = et;
            break;
        }
        var ot = et;
        et = He;
        try {
          return ye();
        } finally {
          et = ot;
        }
      }
      function pa(ye) {
        var He = et;
        return function() {
          var ot = et;
          et = He;
          try {
            return ye.apply(this, arguments);
          } finally {
            et = ot;
          }
        };
      }
      function ar(ye, He, ot) {
        var Ot = a.unstable_now(), Jt;
        if (typeof ot == "object" && ot !== null) {
          var Un = ot.delay;
          typeof Un == "number" && Un > 0 ? Jt = Ot + Un : Jt = Ot;
        } else
          Jt = Ot;
        var dn;
        switch (ye) {
          case k:
            dn = oe;
            break;
          case O:
            dn = G;
            break;
          case A:
            dn = de;
            break;
          case B:
            dn = xe;
            break;
          case z:
          default:
            dn = ee;
            break;
        }
        var Nr = Jt + dn, Yt = {
          id: Je++,
          callback: He,
          priorityLevel: ye,
          startTime: Jt,
          expirationTime: Nr,
          sortIndex: -1
        };
        return Jt > Ot ? (Yt.sortIndex = Jt, h(Qe, Yt), g(pe) === null && Yt === g(Qe) && (on ? Xr() : on = !0, mn(Tt, Jt - Ot))) : (Yt.sortIndex = Nr, h(pe, Yt), !yt && !Pt && (yt = !0, Ya($n))), Yt;
      }
      function Mr() {
      }
      function ai() {
        !yt && !Pt && (yt = !0, Ya($n));
      }
      function Or() {
        return g(pe);
      }
      function ha(ye) {
        ye.callback = null;
      }
      function Ln() {
        return et;
      }
      var ir = !1, Bn = null, lr = -1, or = d, va = -1;
      function Ha() {
        var ye = a.unstable_now() - va;
        return !(ye < or);
      }
      function Ti() {
      }
      function ii(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? or = Math.floor(1e3 / ye) : or = d;
      }
      var Pa = function() {
        if (Bn !== null) {
          var ye = a.unstable_now();
          va = ye;
          var He = !0, ot = !0;
          try {
            ot = Bn(He, ye);
          } finally {
            ot ? Zr() : (ir = !1, Bn = null);
          }
        } else
          ir = !1;
      }, Zr;
      if (typeof Ee == "function")
        Zr = function() {
          Ee(Pa);
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
      function Ya(ye) {
        Bn = ye, ir || (ir = !0, Zr());
      }
      function mn(ye, He) {
        lr = fe(function() {
          ye(a.unstable_now());
        }, He);
      }
      function Xr() {
        Fe(lr), lr = -1;
      }
      var al = Ti, Ia = null;
      a.unstable_IdlePriority = A, a.unstable_ImmediatePriority = k, a.unstable_LowPriority = B, a.unstable_NormalPriority = z, a.unstable_Profiling = Ia, a.unstable_UserBlockingPriority = O, a.unstable_cancelCallback = ha, a.unstable_continueExecution = ai, a.unstable_forceFrameRate = ii, a.unstable_getCurrentPriorityLevel = Ln, a.unstable_getFirstCallbackNode = Or, a.unstable_next = Cn, a.unstable_pauseExecution = Mr, a.unstable_requestPaint = al, a.unstable_runWithPriority = ri, a.unstable_scheduleCallback = ar, a.unstable_shouldYield = Ha, a.unstable_wrapCallback = pa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tw)), Tw;
}
var YT;
function SD() {
  return YT || (YT = 1, process.env.NODE_ENV === "production" ? lg.exports = Jz() : lg.exports = eF()), lg.exports;
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
var IT;
function tF() {
  if (IT)
    return Aa;
  IT = 1;
  var a = kr, o = SD();
  function s(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), h = {};
  function g(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (h[n] = r, n = 0; n < r.length; n++)
      d.add(r[n]);
  }
  var C = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, O = {};
  function z(n) {
    return T.call(O, n) ? !0 : T.call(k, n) ? !1 : b.test(n) ? O[n] = !0 : (k[n] = !0, !1);
  }
  function B(n, r, u, f) {
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
  function A(n, r, u, f) {
    if (r === null || typeof r > "u" || B(n, r, u, f))
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
  function Q(n, r, u, f, v, S, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = S, this.removeEmptyString = _;
  }
  var he = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    he[n] = new Q(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    he[r] = new Q(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    he[n] = new Q(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    he[n] = new Q(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    he[n] = new Q(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    he[n] = new Q(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    he[n] = new Q(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    he[n] = new Q(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    he[n] = new Q(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function K(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      we,
      K
    );
    he[r] = new Q(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(we, K);
    he[r] = new Q(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(we, K);
    he[r] = new Q(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    he[n] = new Q(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), he.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    he[n] = new Q(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function te(n, r, u, f) {
    var v = he.hasOwnProperty(r) ? he[r] : null;
    (v !== null ? v.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (A(r, u, v, f) && (u = null), f || v === null ? z(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : v.mustUseProperty ? n[v.propertyName] = u === null ? v.type === 3 ? !1 : "" : u : (r = v.attributeName, f = v.attributeNamespace, u === null ? n.removeAttribute(r) : (v = v.type, u = v === 3 || v === 4 && u === !0 ? "" : "" + u, f ? n.setAttributeNS(f, r, u) : n.setAttribute(r, u))));
  }
  var Se = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, oe = Symbol.for("react.element"), G = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), xe = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), Qe = Symbol.for("react.context"), Je = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), Pt = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), on = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function Fe(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ee = Object.assign, wt;
  function Tt(n) {
    if (wt === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        wt = r && r[1] || "";
      }
    return `
` + wt + n;
  }
  var $n = !1;
  function yr(n, r) {
    if (!n || $n)
      return "";
    $n = !0;
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
          } catch (W) {
            var f = W;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            f = W;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          f = W;
        }
        n();
      }
    } catch (W) {
      if (W && f && typeof W.stack == "string") {
        for (var v = W.stack.split(`
`), S = f.stack.split(`
`), _ = v.length - 1, R = S.length - 1; 1 <= _ && 0 <= R && v[_] !== S[R]; )
          R--;
        for (; 1 <= _ && 0 <= R; _--, R--)
          if (v[_] !== S[R]) {
            if (_ !== 1 || R !== 1)
              do
                if (_--, R--, 0 > R || v[_] !== S[R]) {
                  var N = `
` + v[_].replace(" at new ", " at ");
                  return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
                }
              while (1 <= _ && 0 <= R);
            break;
          }
      }
    } finally {
      $n = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Tt(n) : "";
  }
  function ri(n) {
    switch (n.tag) {
      case 5:
        return Tt(n.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = yr(n.type, !1), n;
      case 11:
        return n = yr(n.type.render, !1), n;
      case 1:
        return n = yr(n.type, !0), n;
      default:
        return "";
    }
  }
  function Cn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ee:
        return "Fragment";
      case G:
        return "Portal";
      case de:
        return "Profiler";
      case xe:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Qe:
          return (n.displayName || "Context") + ".Consumer";
        case pe:
          return (n._context.displayName || "Context") + ".Provider";
        case Je:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Pt:
          return r = n.displayName || null, r !== null ? r : Cn(n.type) || "Memo";
        case yt:
          r = n._payload, n = n._init;
          try {
            return Cn(n(r));
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
        return Cn(r);
      case 8:
        return r === xe ? "StrictMode" : "Mode";
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
  function ar(n) {
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
      var v = u.get, S = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(_) {
        f = "" + _, S.call(this, _);
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
  function Ln(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ir(n, r) {
    var u = r.checked;
    return Ee({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    u = ar(r.value != null ? r.value : u), n._wrapperState = { initialChecked: f, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function lr(n, r) {
    r = r.checked, r != null && te(n, "checked", r, !1);
  }
  function or(n, r) {
    lr(n, r);
    var u = ar(r.value), f = r.type;
    if (u != null)
      f === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ha(n, r.type, u) : r.hasOwnProperty("defaultValue") && Ha(n, r.type, ar(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
    (r !== "number" || Ln(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var Ti = Array.isArray;
  function ii(n, r, u, f) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < u.length; v++)
        r["$" + u[v]] = !0;
      for (u = 0; u < n.length; u++)
        v = r.hasOwnProperty("$" + n[u].value), n[u].selected !== v && (n[u].selected = v), v && f && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + ar(u), r = null, v = 0; v < n.length; v++) {
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
      throw Error(s(91));
    return Ee({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Zr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(s(92));
        if (Ti(u)) {
          if (1 < u.length)
            throw Error(s(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: ar(u) };
  }
  function li(n, r) {
    var u = ar(r.value), f = ar(r.defaultValue);
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
  var Xr, al = function(n) {
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
  var ye = {
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
  }, He = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ye).forEach(function(n) {
    He.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ye[r] = ye[n];
    });
  });
  function ot(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || ye.hasOwnProperty(n) && ye[n] ? ("" + r).trim() : r + "px";
  }
  function Ot(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var f = u.indexOf("--") === 0, v = ot(u, r[u], f);
        u === "float" && (u = "cssFloat"), f ? n.setProperty(u, v) : n[u] = v;
      }
  }
  var Jt = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Un(n, r) {
    if (r) {
      if (Jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(s(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(s(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(s(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(s(62));
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
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Jr = null, At = null, It = null;
  function Go(n) {
    if (n = _s(n)) {
      if (typeof Jr != "function")
        throw Error(s(280));
      var r = n.stateNode;
      r && (r = Pe(r), Jr(n.stateNode, n.type, r));
    }
  }
  function Wl(n) {
    At ? It ? It.push(n) : It = [n] : At = n;
  }
  function Qo() {
    if (At) {
      var n = At, r = It;
      if (It = At = null, Go(n), r)
        for (n = 0; n < r.length; n++)
          Go(r[n]);
    }
  }
  function es(n, r) {
    return n(r);
  }
  function vc() {
  }
  var Gl = !1;
  function qo(n, r, u) {
    if (Gl)
      return n(r, u);
    Gl = !0;
    try {
      return es(n, r, u);
    } finally {
      Gl = !1, (At !== null || It !== null) && (vc(), Qo());
    }
  }
  function Ql(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var f = Pe(u);
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
      throw Error(s(231, r, typeof u));
    return u;
  }
  var Zo = !1;
  if (C)
    try {
      var oi = {};
      Object.defineProperty(oi, "passive", { get: function() {
        Zo = !0;
      } }), window.addEventListener("test", oi, oi), window.removeEventListener("test", oi, oi);
    } catch {
      Zo = !1;
    }
  function il(n, r, u, f, v, S, _, R, N) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, W);
    } catch (re) {
      this.onError(re);
    }
  }
  var ea = !1, Va = null, ll = !1, M = null, ae = { onError: function(n) {
    ea = !0, Va = n;
  } };
  function ge(n, r, u, f, v, S, _, R, N) {
    ea = !1, Va = null, il.apply(ae, arguments);
  }
  function Ie(n, r, u, f, v, S, _, R, N) {
    if (ge.apply(this, arguments), ea) {
      if (ea) {
        var W = Va;
        ea = !1, Va = null;
      } else
        throw Error(s(198));
      ll || (ll = !0, M = W);
    }
  }
  function it(n) {
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
  function gt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function lt(n) {
    if (it(n) !== n)
      throw Error(s(188));
  }
  function Be(n) {
    var r = n.alternate;
    if (!r) {
      if (r = it(n), r === null)
        throw Error(s(188));
      return r !== n ? null : n;
    }
    for (var u = n, f = r; ; ) {
      var v = u.return;
      if (v === null)
        break;
      var S = v.alternate;
      if (S === null) {
        if (f = v.return, f !== null) {
          u = f;
          continue;
        }
        break;
      }
      if (v.child === S.child) {
        for (S = v.child; S; ) {
          if (S === u)
            return lt(v), n;
          if (S === f)
            return lt(v), r;
          S = S.sibling;
        }
        throw Error(s(188));
      }
      if (u.return !== f.return)
        u = v, f = S;
      else {
        for (var _ = !1, R = v.child; R; ) {
          if (R === u) {
            _ = !0, u = v, f = S;
            break;
          }
          if (R === f) {
            _ = !0, f = v, u = S;
            break;
          }
          R = R.sibling;
        }
        if (!_) {
          for (R = S.child; R; ) {
            if (R === u) {
              _ = !0, u = S, f = v;
              break;
            }
            if (R === f) {
              _ = !0, f = S, u = v;
              break;
            }
            R = R.sibling;
          }
          if (!_)
            throw Error(s(189));
        }
      }
      if (u.alternate !== f)
        throw Error(s(190));
    }
    if (u.tag !== 3)
      throw Error(s(188));
    return u.stateNode.current === u ? n : r;
  }
  function jn(n) {
    return n = Be(n), n !== null ? qt(n) : null;
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
  var Zt = o.unstable_scheduleCallback, gr = o.unstable_cancelCallback, ol = o.unstable_shouldYield, mc = o.unstable_requestPaint, Et = o.unstable_now, Pg = o.unstable_getCurrentPriorityLevel, bi = o.unstable_ImmediatePriority, ct = o.unstable_UserBlockingPriority, ul = o.unstable_NormalPriority, av = o.unstable_LowPriority, Sd = o.unstable_IdlePriority, ts = null, $a = null;
  function iv(n) {
    if ($a && typeof $a.onCommitFiberRoot == "function")
      try {
        $a.onCommitFiberRoot(ts, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ma = Math.clz32 ? Math.clz32 : Yg, lv = Math.log, ov = Math.LN2;
  function Yg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lv(n) / ov | 0) | 0;
  }
  var yc = 64, Ko = 4194304;
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
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var f = 0, v = n.suspendedLanes, S = n.pingedLanes, _ = u & 268435455;
    if (_ !== 0) {
      var R = _ & ~v;
      R !== 0 ? f = ql(R) : (S &= _, S !== 0 && (f = ql(S)));
    } else
      _ = u & ~v, _ !== 0 ? f = ql(_) : S !== 0 && (f = ql(S));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & v) && (v = f & -f, S = r & -r, v >= S || v === 16 && (S & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        u = 31 - ma(r), v = 1 << u, f |= n[u], r &= ~v;
    return f;
  }
  function wd(n, r) {
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
    for (var u = n.suspendedLanes, f = n.pingedLanes, v = n.expirationTimes, S = n.pendingLanes; 0 < S; ) {
      var _ = 31 - ma(S), R = 1 << _, N = v[_];
      N === -1 ? (!(R & u) || R & f) && (v[_] = wd(R, r)) : N <= r && (n.expiredLanes |= R), S &= ~R;
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
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function Zl(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ma(r), n[r] = u;
  }
  function Ig(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var v = 31 - ma(u), S = 1 << v;
      r[v] = 0, f[v] = -1, n[v] = -1, u &= ~S;
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
  var uv, wc, zt, sv, Cd, nt = !1, rs = [], yn = null, ya = null, ga = null, as = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Lt = [], Vg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Tn.delete(r.pointerId);
    }
  }
  function ur(n, r, u, f, v, S) {
    return n === null || n.nativeEvent !== S ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: f, nativeEvent: S, targetContainers: [v] }, r !== null && (r = _s(r), r !== null && wc(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function sl(n, r, u, f, v) {
    switch (r) {
      case "focusin":
        return yn = ur(yn, n, r, u, f, v), !0;
      case "dragenter":
        return ya = ur(ya, n, r, u, f, v), !0;
      case "mouseover":
        return ga = ur(ga, n, r, u, f, v), !0;
      case "pointerover":
        var S = v.pointerId;
        return as.set(S, ur(as.get(S) || null, n, r, u, f, v)), !0;
      case "gotpointercapture":
        return S = v.pointerId, Tn.set(S, ur(Tn.get(S) || null, n, r, u, f, v)), !0;
    }
    return !1;
  }
  function cv(n) {
    var r = wa(n.target);
    if (r !== null) {
      var u = it(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = gt(u), r !== null) {
            n.blockedOn = r, Cd(n.priority, function() {
              zt(u);
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
  function Xo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = xc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
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
    Xo(n) && u.delete(r);
  }
  function fv() {
    nt = !1, yn !== null && Xo(yn) && (yn = null), ya !== null && Xo(ya) && (ya = null), ga !== null && Xo(ga) && (ga = null), as.forEach(Td), Tn.forEach(Td);
  }
  function is(n, r) {
    n.blockedOn === r && (n.blockedOn = null, nt || (nt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, fv)));
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
    for (yn !== null && is(yn, n), ya !== null && is(ya, n), ga !== null && is(ga, n), as.forEach(r), Tn.forEach(r), u = 0; u < Lt.length; u++)
      f = Lt[u], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Lt.length && (u = Lt[0], u.blockedOn === null); )
      cv(u), u.blockedOn === null && Lt.shift();
  }
  var Jo = Se.ReactCurrentBatchConfig, Kl = !0;
  function dv(n, r, u, f) {
    var v = Nt, S = Jo.transition;
    Jo.transition = null;
    try {
      Nt = 1, _c(n, r, u, f);
    } finally {
      Nt = v, Jo.transition = S;
    }
  }
  function Ec(n, r, u, f) {
    var v = Nt, S = Jo.transition;
    Jo.transition = null;
    try {
      Nt = 4, _c(n, r, u, f);
    } finally {
      Nt = v, Jo.transition = S;
    }
  }
  function _c(n, r, u, f) {
    if (Kl) {
      var v = xc(n, r, u, f);
      if (v === null)
        jc(n, r, f, os, u), Wa(n, f);
      else if (sl(v, n, r, u, f))
        f.stopPropagation();
      else if (Wa(n, f), r & 4 && -1 < Vg.indexOf(n)) {
        for (; v !== null; ) {
          var S = _s(v);
          if (S !== null && uv(S), S = xc(n, r, u, f), S === null && jc(n, r, f, os, u), S === v)
            break;
          v = S;
        }
        v !== null && f.stopPropagation();
      } else
        jc(n, r, f, null, u);
    }
  }
  var os = null;
  function xc(n, r, u, f) {
    if (os = null, n = Yt(f), n = wa(n), n !== null)
      if (r = it(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = gt(r), n !== null)
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
        switch (Pg()) {
          case bi:
            return 1;
          case ct:
            return 4;
          case ul:
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
  function Dd() {
    if (ss)
      return ss;
    var n, r = us, u = r.length, f, v = "value" in Di ? Di.value : Di.textContent, S = v.length;
    for (n = 0; n < u && r[n] === v[n]; n++)
      ;
    var _ = u - n;
    for (f = 1; f <= _ && r[u - f] === v[S - f]; f++)
      ;
    return ss = v.slice(n, 1 < f ? 1 - f : void 0);
  }
  function eu(n) {
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
    function r(u, f, v, S, _) {
      this._reactName = u, this._targetInst = v, this.type = f, this.nativeEvent = S, this.target = _, this.currentTarget = null;
      for (var R in n)
        n.hasOwnProperty(R) && (u = n[R], this[R] = u ? u(S) : S[R]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? cs : pv, this.isPropagationStopped = pv, this;
    }
    return Ee(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = cs);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = cs);
    }, persist: function() {
    }, isPersistent: cs }), r;
  }
  var cl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Cc = ta(cl), tu = Ee({}, cl, { view: 0, detail: 0 }), hv = ta(tu), Tc, Rd, fs, An = Ee({}, tu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== fs && (fs && n.type === "mousemove" ? (Tc = n.screenX - fs.screenX, Rd = n.screenY - fs.screenY) : Rd = Tc = 0, fs = n), Tc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rd;
  } }), bc = ta(An), vv = Ee({}, An, { dataTransfer: 0 }), mv = ta(vv), $g = Ee({}, tu, { relatedTarget: 0 }), fl = ta($g), kd = Ee({}, cl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yv = ta(kd), Bg = Ee({}, cl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wg = ta(Bg), Gg = Ee({}, cl, { data: 0 }), Md = ta(Gg), Od = {
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
  function wv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Sv[n]) ? !!r[n] : !1;
  }
  function Nd() {
    return wv;
  }
  var Ri = Ee({}, tu, { key: function(n) {
    if (n.key) {
      var r = Od[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = eu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? gv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nd, charCode: function(n) {
    return n.type === "keypress" ? eu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? eu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Qg = ta(Ri), Ld = Ee({}, An, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dc = ta(Ld), Ud = Ee({}, tu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nd }), qg = ta(Ud), Rc = Ee({}, cl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ev = ta(Rc), Lr = Ee({}, An, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ki = ta(Lr), gn = [9, 13, 27, 32], Ga = C && "CompositionEvent" in window, Xl = null;
  C && "documentMode" in document && (Xl = document.documentMode);
  var kc = C && "TextEvent" in window && !Xl, _v = C && (!Ga || Xl && 8 < Xl && 11 >= Xl), nu = String.fromCharCode(32), xv = !1;
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
  function Mc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ru = !1;
  function Zg(n, r) {
    switch (n) {
      case "compositionend":
        return Mc(r);
      case "keypress":
        return r.which !== 32 ? null : (xv = !0, nu);
      case "textInput":
        return n = r.data, n === nu && xv ? null : n;
      default:
        return null;
    }
  }
  function Kg(n, r) {
    if (ru)
      return n === "compositionend" || !Ga && Cv(n, r) ? (n = Dd(), ss = us = Di = null, ru = !1, n) : null;
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
  function Dv(n, r, u, f) {
    Wl(f), r = Ss(r, "onChange"), 0 < r.length && (u = new Cc("onChange", "change", null, u, f), n.push({ event: u, listeners: r }));
  }
  var ds = null, au = null;
  function iu(n) {
    Uc(n, 0);
  }
  function lu(n) {
    var r = uu(n);
    if (ha(r))
      return n;
  }
  function Rv(n, r) {
    if (n === "change")
      return r;
  }
  var jd = !1;
  if (C) {
    var Ad;
    if (C) {
      var zd = "oninput" in document;
      if (!zd) {
        var kv = document.createElement("div");
        kv.setAttribute("oninput", "return;"), zd = typeof kv.oninput == "function";
      }
      Ad = zd;
    } else
      Ad = !1;
    jd = Ad && (!document.documentMode || 9 < document.documentMode);
  }
  function Mv() {
    ds && (ds.detachEvent("onpropertychange", Ov), au = ds = null);
  }
  function Ov(n) {
    if (n.propertyName === "value" && lu(au)) {
      var r = [];
      Dv(r, au, n, Yt(n)), qo(iu, r);
    }
  }
  function Xg(n, r, u) {
    n === "focusin" ? (Mv(), ds = r, au = u, ds.attachEvent("onpropertychange", Ov)) : n === "focusout" && Mv();
  }
  function Jg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return lu(au);
  }
  function e0(n, r) {
    if (n === "click")
      return lu(r);
  }
  function Nv(n, r) {
    if (n === "input" || n === "change")
      return lu(r);
  }
  function t0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Sa = typeof Object.is == "function" ? Object.is : t0;
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
  function jv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? jv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Oc() {
    for (var n = window, r = Ln(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = Ln(n.document);
    }
    return r;
  }
  function Mi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Nc(n) {
    var r = Oc(), u = n.focusedElem, f = n.selectionRange;
    if (r !== u && u && u.ownerDocument && jv(u.ownerDocument.documentElement, u)) {
      if (f !== null && Mi(u)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = u.textContent.length, S = Math.min(f.start, v);
          f = f.end === void 0 ? S : Math.min(f.end, v), !n.extend && S > f && (v = f, f = S, S = v), v = Uv(u, S);
          var _ = Uv(
            u,
            f
          );
          v && _ && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), S > f ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Av = C && "documentMode" in document && 11 >= document.documentMode, Qa = null, Fd = null, hs = null, Hd = !1;
  function zv(n, r, u) {
    var f = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Hd || Qa == null || Qa !== Ln(f) || (f = Qa, "selectionStart" in f && Mi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), hs && ps(hs, f) || (hs = f, f = Ss(Fd, "onSelect"), 0 < f.length && (r = new Cc("onSelect", "select", null, r, u), n.push({ event: r, listeners: f }), r.target = Qa)));
  }
  function Lc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var Jl = { animationend: Lc("Animation", "AnimationEnd"), animationiteration: Lc("Animation", "AnimationIteration"), animationstart: Lc("Animation", "AnimationStart"), transitionend: Lc("Transition", "TransitionEnd") }, Pd = {}, Yd = {};
  C && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function zn(n) {
    if (Pd[n])
      return Pd[n];
    if (!Jl[n])
      return n;
    var r = Jl[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in Yd)
        return Pd[n] = r[u];
    return n;
  }
  var Id = zn("animationend"), Fv = zn("animationiteration"), Hv = zn("animationstart"), Pv = zn("transitionend"), Yv = /* @__PURE__ */ new Map(), Iv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Oi(n, r) {
    Yv.set(n, r), g(r, [n]);
  }
  for (var vs = 0; vs < Iv.length; vs++) {
    var eo = Iv[vs], n0 = eo.toLowerCase(), ms = eo[0].toUpperCase() + eo.slice(1);
    Oi(n0, "on" + ms);
  }
  Oi(Id, "onAnimationEnd"), Oi(Fv, "onAnimationIteration"), Oi(Hv, "onAnimationStart"), Oi("dblclick", "onDoubleClick"), Oi("focusin", "onFocus"), Oi("focusout", "onBlur"), Oi(Pv, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), g("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), g("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), g("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), g("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), r0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));
  function Vv(n, r, u) {
    var f = n.type || "unknown-event";
    n.currentTarget = u, Ie(f, r, void 0, n), n.currentTarget = null;
  }
  function Uc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var f = n[u], v = f.event;
      f = f.listeners;
      e: {
        var S = void 0;
        if (r)
          for (var _ = f.length - 1; 0 <= _; _--) {
            var R = f[_], N = R.instance, W = R.currentTarget;
            if (R = R.listener, N !== S && v.isPropagationStopped())
              break e;
            Vv(v, R, W), S = N;
          }
        else
          for (_ = 0; _ < f.length; _++) {
            if (R = f[_], N = R.instance, W = R.currentTarget, R = R.listener, N !== S && v.isPropagationStopped())
              break e;
            Vv(v, R, W), S = N;
          }
      }
    }
    if (ll)
      throw n = M, ll = !1, M = null, n;
  }
  function Ft(n, r) {
    var u = r[qd];
    u === void 0 && (u = r[qd] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    u.has(f) || ($v(r, n, 2, !1), u.add(f));
  }
  function dl(n, r, u) {
    var f = 0;
    r && (f |= 4), $v(u, n, f, r);
  }
  var Ni = "_reactListening" + Math.random().toString(36).slice(2);
  function ou(n) {
    if (!n[Ni]) {
      n[Ni] = !0, d.forEach(function(u) {
        u !== "selectionchange" && (r0.has(u) || dl(u, !1, n), dl(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ni] || (r[Ni] = !0, dl("selectionchange", !1, r));
    }
  }
  function $v(n, r, u, f) {
    switch (bd(r)) {
      case 1:
        var v = dv;
        break;
      case 4:
        v = Ec;
        break;
      default:
        v = _c;
    }
    u = v.bind(null, r, u, n), v = void 0, !Zo || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), f ? v !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: v }) : n.addEventListener(r, u, !0) : v !== void 0 ? n.addEventListener(r, u, { passive: v }) : n.addEventListener(r, u, !1);
  }
  function jc(n, r, u, f, v) {
    var S = f;
    if (!(r & 1) && !(r & 2) && f !== null)
      e:
        for (; ; ) {
          if (f === null)
            return;
          var _ = f.tag;
          if (_ === 3 || _ === 4) {
            var R = f.stateNode.containerInfo;
            if (R === v || R.nodeType === 8 && R.parentNode === v)
              break;
            if (_ === 4)
              for (_ = f.return; _ !== null; ) {
                var N = _.tag;
                if ((N === 3 || N === 4) && (N = _.stateNode.containerInfo, N === v || N.nodeType === 8 && N.parentNode === v))
                  return;
                _ = _.return;
              }
            for (; R !== null; ) {
              if (_ = wa(R), _ === null)
                return;
              if (N = _.tag, N === 5 || N === 6) {
                f = S = _;
                continue e;
              }
              R = R.parentNode;
            }
          }
          f = f.return;
        }
    qo(function() {
      var W = S, re = Yt(u), ie = [];
      e: {
        var ne = Yv.get(n);
        if (ne !== void 0) {
          var Ce = Cc, Me = n;
          switch (n) {
            case "keypress":
              if (eu(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ce = Qg;
              break;
            case "focusin":
              Me = "focus", Ce = fl;
              break;
            case "focusout":
              Me = "blur", Ce = fl;
              break;
            case "beforeblur":
            case "afterblur":
              Ce = fl;
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
              Ce = bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ce = mv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ce = qg;
              break;
            case Id:
            case Fv:
            case Hv:
              Ce = yv;
              break;
            case Pv:
              Ce = Ev;
              break;
            case "scroll":
              Ce = hv;
              break;
            case "wheel":
              Ce = ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ce = Wg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ce = Dc;
          }
          var Le = (r & 4) !== 0, hn = !Le && n === "scroll", H = Le ? ne !== null ? ne + "Capture" : null : ne;
          Le = [];
          for (var U = W, I; U !== null; ) {
            I = U;
            var se = I.stateNode;
            if (I.tag === 5 && se !== null && (I = se, H !== null && (se = Ql(U, H), se != null && Le.push(gs(U, se, I)))), hn)
              break;
            U = U.return;
          }
          0 < Le.length && (ne = new Ce(ne, Me, null, u, re), ie.push({ event: ne, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", Ce = n === "mouseout" || n === "pointerout", ne && u !== Nr && (Me = u.relatedTarget || u.fromElement) && (wa(Me) || Me[Li]))
            break e;
          if ((Ce || ne) && (ne = re.window === re ? re : (ne = re.ownerDocument) ? ne.defaultView || ne.parentWindow : window, Ce ? (Me = u.relatedTarget || u.toElement, Ce = W, Me = Me ? wa(Me) : null, Me !== null && (hn = it(Me), Me !== hn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (Ce = null, Me = W), Ce !== Me)) {
            if (Le = bc, se = "onMouseLeave", H = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Dc, se = "onPointerLeave", H = "onPointerEnter", U = "pointer"), hn = Ce == null ? ne : uu(Ce), I = Me == null ? ne : uu(Me), ne = new Le(se, U + "leave", Ce, u, re), ne.target = hn, ne.relatedTarget = I, se = null, wa(re) === W && (Le = new Le(H, U + "enter", Me, u, re), Le.target = I, Le.relatedTarget = hn, se = Le), hn = se, Ce && Me)
              t: {
                for (Le = Ce, H = Me, U = 0, I = Le; I; I = to(I))
                  U++;
                for (I = 0, se = H; se; se = to(se))
                  I++;
                for (; 0 < U - I; )
                  Le = to(Le), U--;
                for (; 0 < I - U; )
                  H = to(H), I--;
                for (; U--; ) {
                  if (Le === H || H !== null && Le === H.alternate)
                    break t;
                  Le = to(Le), H = to(H);
                }
                Le = null;
              }
            else
              Le = null;
            Ce !== null && Vd(ie, ne, Ce, Le, !1), Me !== null && hn !== null && Vd(ie, hn, Me, Le, !0);
          }
        }
        e: {
          if (ne = W ? uu(W) : window, Ce = ne.nodeName && ne.nodeName.toLowerCase(), Ce === "select" || Ce === "input" && ne.type === "file")
            var Ue = Rv;
          else if (bv(ne))
            if (jd)
              Ue = Nv;
            else {
              Ue = Jg;
              var Oe = Xg;
            }
          else
            (Ce = ne.nodeName) && Ce.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (Ue = e0);
          if (Ue && (Ue = Ue(n, W))) {
            Dv(ie, Ue, u, re);
            break e;
          }
          Oe && Oe(n, ne, W), n === "focusout" && (Oe = ne._wrapperState) && Oe.controlled && ne.type === "number" && Ha(ne, "number", ne.value);
        }
        switch (Oe = W ? uu(W) : window, n) {
          case "focusin":
            (bv(Oe) || Oe.contentEditable === "true") && (Qa = Oe, Fd = W, hs = null);
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
            Hd = !1, zv(ie, u, re);
            break;
          case "selectionchange":
            if (Av)
              break;
          case "keydown":
          case "keyup":
            zv(ie, u, re);
        }
        var ze;
        if (Ga)
          e: {
            switch (n) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          ru ? Cv(n, u) && (Ke = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (_v && u.locale !== "ko" && (ru || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && ru && (ze = Dd()) : (Di = re, us = "value" in Di ? Di.value : Di.textContent, ru = !0)), Oe = Ss(W, Ke), 0 < Oe.length && (Ke = new Md(Ke, n, null, u, re), ie.push({ event: Ke, listeners: Oe }), ze ? Ke.data = ze : (ze = Mc(u), ze !== null && (Ke.data = ze)))), (ze = kc ? Zg(n, u) : Kg(n, u)) && (W = Ss(W, "onBeforeInput"), 0 < W.length && (re = new Md("onBeforeInput", "beforeinput", null, u, re), ie.push({ event: re, listeners: W }), re.data = ze));
      }
      Uc(ie, r);
    });
  }
  function gs(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function Ss(n, r) {
    for (var u = r + "Capture", f = []; n !== null; ) {
      var v = n, S = v.stateNode;
      v.tag === 5 && S !== null && (v = S, S = Ql(n, u), S != null && f.unshift(gs(n, S, v)), S = Ql(n, r), S != null && f.push(gs(n, S, v))), n = n.return;
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
  function Vd(n, r, u, f, v) {
    for (var S = r._reactName, _ = []; u !== null && u !== f; ) {
      var R = u, N = R.alternate, W = R.stateNode;
      if (N !== null && N === f)
        break;
      R.tag === 5 && W !== null && (R = W, v ? (N = Ql(u, S), N != null && _.unshift(gs(u, N, R))) : v || (N = Ql(u, S), N != null && _.push(gs(u, N, R)))), u = u.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var $d = /\r\n?/g, a0 = /\u0000|\uFFFD/g;
  function Bd(n) {
    return (typeof n == "string" ? n : "" + n).replace($d, `
`).replace(a0, "");
  }
  function Ac(n, r, u) {
    if (r = Bd(r), Bd(n) !== r && u)
      throw Error(s(425));
  }
  function zc() {
  }
  var Wd = null, no = null;
  function ws(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ro = typeof setTimeout == "function" ? setTimeout : void 0, Bv = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, Qd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(n) {
    return Gd.resolve(null).then(n).catch(i0);
  } : ro;
  function i0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function pl(n, r) {
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
  function Es(n) {
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
  var hl = Math.random().toString(36).slice(2), ui = "__reactFiber$" + hl, ao = "__reactProps$" + hl, Li = "__reactContainer$" + hl, qd = "__reactEvents$" + hl, l0 = "__reactListeners$" + hl, Zd = "__reactHandles$" + hl;
  function wa(n) {
    var r = n[ui];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Li] || u[ui]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = Es(n); n !== null; ) {
            if (u = n[ui])
              return u;
            n = Es(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function _s(n) {
    return n = n[ui] || n[Li], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(s(33));
  }
  function Pe(n) {
    return n[ao] || null;
  }
  var vl = [], $t = -1;
  function rt(n) {
    return { current: n };
  }
  function bt(n) {
    0 > $t || (n.current = vl[$t], vl[$t] = null, $t--);
  }
  function Dt(n, r) {
    $t++, vl[$t] = n.current, n.current = r;
  }
  var si = {}, Ze = rt(si), un = rt(!1), Ur = si;
  function Ea(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return si;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r)
      return f.__reactInternalMemoizedMaskedChildContext;
    var v = {}, S;
    for (S in u)
      v[S] = r[S];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function Kt(n) {
    return n = n.childContextTypes, n != null;
  }
  function _a() {
    bt(un), bt(Ze);
  }
  function ml(n, r, u) {
    if (Ze.current !== si)
      throw Error(s(168));
    Dt(Ze, r), Dt(un, u);
  }
  function xs(n, r, u) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return u;
    f = f.getChildContext();
    for (var v in f)
      if (!(v in r))
        throw Error(s(108, pa(n) || "Unknown", v));
    return Ee({}, u, f);
  }
  function Fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || si, Ur = Ze.current, Dt(Ze, n), Dt(un, un.current), !0;
  }
  function Wv(n, r, u) {
    var f = n.stateNode;
    if (!f)
      throw Error(s(169));
    u ? (n = xs(n, r, Ur), f.__reactInternalMemoizedMergedChildContext = n, bt(un), bt(Ze), Dt(Ze, n)) : bt(un), Dt(un, u);
  }
  var na = null, Fn = !1, Cs = !1;
  function Kd(n) {
    na === null ? na = [n] : na.push(n);
  }
  function Xd(n) {
    Fn = !0, Kd(n);
  }
  function jr() {
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
        na = null, Fn = !1;
      } catch (v) {
        throw na !== null && (na = na.slice(n + 1)), Zt(bi, jr), v;
      } finally {
        Nt = r, Cs = !1;
      }
    }
    return null;
  }
  var yl = [], Ar = 0, io = null, su = 0, zr = [], sr = 0, xa = null, Wn = 1, Ui = "";
  function ra(n, r) {
    yl[Ar++] = su, yl[Ar++] = io, io = n, su = r;
  }
  function Jd(n, r, u) {
    zr[sr++] = Wn, zr[sr++] = Ui, zr[sr++] = xa, xa = n;
    var f = Wn;
    n = Ui;
    var v = 32 - ma(f) - 1;
    f &= ~(1 << v), u += 1;
    var S = 32 - ma(r) + v;
    if (30 < S) {
      var _ = v - v % 5;
      S = (f & (1 << _) - 1).toString(32), f >>= _, v -= _, Wn = 1 << 32 - ma(r) + v | u << v | f, Ui = S + n;
    } else
      Wn = 1 << S | u << v | f, Ui = n;
  }
  function Hc(n) {
    n.return !== null && (ra(n, 1), Jd(n, 1, 0));
  }
  function ep(n) {
    for (; n === io; )
      io = yl[--Ar], yl[Ar] = null, su = yl[--Ar], yl[Ar] = null;
    for (; n === xa; )
      xa = zr[--sr], zr[sr] = null, Ui = zr[--sr], zr[sr] = null, Wn = zr[--sr], zr[sr] = null;
  }
  var aa = null, Fr = null, Bt = !1, Ca = null;
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = xa !== null ? { id: Wn, overflow: Ui } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Ma(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, aa = n, Fr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Yc(n) {
    if (Bt) {
      var r = Fr;
      if (r) {
        var u = r;
        if (!Gv(n, r)) {
          if (Pc(n))
            throw Error(s(418));
          r = qa(u.nextSibling);
          var f = aa;
          r && Gv(n, r) ? tp(f, u) : (n.flags = n.flags & -4097 | 2, Bt = !1, aa = n);
        }
      } else {
        if (Pc(n))
          throw Error(s(418));
        n.flags = n.flags & -4097 | 2, Bt = !1, aa = n;
      }
    }
  }
  function Qv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    aa = n;
  }
  function Ic(n) {
    if (n !== aa)
      return !1;
    if (!Bt)
      return Qv(n), Bt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ws(n.type, n.memoizedProps)), r && (r = Fr)) {
      if (Pc(n))
        throw qv(), Error(s(418));
      for (; r; )
        tp(n, r), r = qa(r.nextSibling);
    }
    if (Qv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(s(317));
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
    Fr = aa = null, Bt = !1;
  }
  function np(n) {
    Ca === null ? Ca = [n] : Ca.push(n);
  }
  var Vc = Se.ReactCurrentBatchConfig;
  function ia(n, r) {
    if (n && n.defaultProps) {
      r = Ee({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var ci = rt(null), $c = null, gl = null, rp = null;
  function ap() {
    rp = gl = $c = null;
  }
  function Sl(n) {
    var r = ci.current;
    bt(ci), n._currentValue = r;
  }
  function Hn(n, r, u) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function ve(n, r) {
    $c = n, rp = gl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Sn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (rp !== n)
      if (n = { context: n, memoizedValue: r, next: null }, gl === null) {
        if ($c === null)
          throw Error(s(308));
        gl = n, $c.dependencies = { lanes: 0, firstContext: n };
      } else
        gl = gl.next = n;
    return r;
  }
  var Gn = null;
  function ip(n) {
    Gn === null ? Gn = [n] : Gn.push(n);
  }
  function Zv(n, r, u, f) {
    var v = r.interleaved;
    return v === null ? (u.next = u, ip(r)) : (u.next = v.next, v.next = u), r.interleaved = u, ji(n, f);
  }
  function ji(n, r) {
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
  function bn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ai(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function El(n, r, u) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, ft & 2) {
      var v = f.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), f.pending = r, ji(n, u);
    }
    return v = f.interleaved, v === null ? (r.next = r, ip(f)) : (r.next = v.next, v.next = r), f.interleaved = r, ji(n, u);
  }
  function Bc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, ns(n, u);
    }
  }
  function op(n, r) {
    var u = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, u === f)) {
      var v = null, S = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var _ = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          S === null ? v = S = _ : S = S.next = _, u = u.next;
        } while (u !== null);
        S === null ? v = S = r : S = S.next = r;
      } else
        v = S = r;
      u = { baseState: f.baseState, firstBaseUpdate: v, lastBaseUpdate: S, shared: f.shared, effects: f.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function _l(n, r, u, f) {
    var v = n.updateQueue;
    wl = !1;
    var S = v.firstBaseUpdate, _ = v.lastBaseUpdate, R = v.shared.pending;
    if (R !== null) {
      v.shared.pending = null;
      var N = R, W = N.next;
      N.next = null, _ === null ? S = W : _.next = W, _ = N;
      var re = n.alternate;
      re !== null && (re = re.updateQueue, R = re.lastBaseUpdate, R !== _ && (R === null ? re.firstBaseUpdate = W : R.next = W, re.lastBaseUpdate = N));
    }
    if (S !== null) {
      var ie = v.baseState;
      _ = 0, re = W = N = null, R = S;
      do {
        var ne = R.lane, Ce = R.eventTime;
        if ((f & ne) === ne) {
          re !== null && (re = re.next = {
            eventTime: Ce,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var Me = n, Le = R;
            switch (ne = r, Ce = u, Le.tag) {
              case 1:
                if (Me = Le.payload, typeof Me == "function") {
                  ie = Me.call(Ce, ie, ne);
                  break e;
                }
                ie = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = Le.payload, ne = typeof Me == "function" ? Me.call(Ce, ie, ne) : Me, ne == null)
                  break e;
                ie = Ee({}, ie, ne);
                break e;
              case 2:
                wl = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, ne = v.effects, ne === null ? v.effects = [R] : ne.push(R));
        } else
          Ce = { eventTime: Ce, lane: ne, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, re === null ? (W = re = Ce, N = ie) : re = re.next = Ce, _ |= ne;
        if (R = R.next, R === null) {
          if (R = v.shared.pending, R === null)
            break;
          ne = R, R = ne.next, ne.next = null, v.lastBaseUpdate = ne, v.shared.pending = null;
        }
      } while (1);
      if (re === null && (N = ie), v.baseState = N, v.firstBaseUpdate = W, v.lastBaseUpdate = re, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          _ |= v.lane, v = v.next;
        while (v !== r);
      } else
        S === null && (v.shared.lanes = 0);
      Pi |= _, n.lanes = _, n.memoizedState = ie;
    }
  }
  function lo(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var f = n[r], v = f.callback;
        if (v !== null) {
          if (f.callback = null, f = u, typeof v != "function")
            throw Error(s(191, v));
          v.call(f);
        }
      }
  }
  var Kv = new a.Component().refs;
  function up(n, r, u, f) {
    r = n.memoizedState, u = u(f, r), u = u == null ? r : Ee({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? it(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var f = pr(), v = wn(n), S = Ai(f, v);
    S.payload = r, u != null && (S.callback = u), r = El(n, S, v), r !== null && (hr(r, n, v, f), Bc(r, n, v));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var f = pr(), v = wn(n), S = Ai(f, v);
    S.tag = 1, S.payload = r, u != null && (S.callback = u), r = El(n, S, v), r !== null && (hr(r, n, v, f), Bc(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = pr(), f = wn(n), v = Ai(u, f);
    v.tag = 2, r != null && (v.callback = r), r = El(n, v, f), r !== null && (hr(r, n, f, u), Bc(r, n, f));
  } };
  function Xv(n, r, u, f, v, S, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, S, _) : r.prototype && r.prototype.isPureReactComponent ? !ps(u, f) || !ps(v, S) : !0;
  }
  function Jv(n, r, u) {
    var f = !1, v = si, S = r.contextType;
    return typeof S == "object" && S !== null ? S = pn(S) : (v = Kt(r) ? Ur : Ze.current, f = r.contextTypes, S = (f = f != null) ? Ea(n, v) : si), r = new r(u, S), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wc, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = S), r;
  }
  function em(n, r, u, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, f), r.state !== n && Wc.enqueueReplaceState(r, r.state, null);
  }
  function Gc(n, r, u, f) {
    var v = n.stateNode;
    v.props = u, v.state = n.memoizedState, v.refs = Kv, lp(n);
    var S = r.contextType;
    typeof S == "object" && S !== null ? v.context = pn(S) : (S = Kt(r) ? Ur : Ze.current, v.context = Ea(n, S)), v.state = n.memoizedState, S = r.getDerivedStateFromProps, typeof S == "function" && (up(n, r, S, u), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && Wc.enqueueReplaceState(v, v.state, null), _l(n, u, v, f), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function cu(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(s(309));
          var f = u.stateNode;
        }
        if (!f)
          throw Error(s(147, n));
        var v = f, S = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === S ? r.ref : (r = function(_) {
          var R = v.refs;
          R === Kv && (R = v.refs = {}), _ === null ? delete R[S] : R[S] = _;
        }, r._stringRef = S, r);
      }
      if (typeof n != "string")
        throw Error(s(284));
      if (!u._owner)
        throw Error(s(290, n));
    }
    return n;
  }
  function Qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(s(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function tm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function nm(n) {
    function r(H, U) {
      if (n) {
        var I = H.deletions;
        I === null ? (H.deletions = [U], H.flags |= 16) : I.push(U);
      }
    }
    function u(H, U) {
      if (!n)
        return null;
      for (; U !== null; )
        r(H, U), U = U.sibling;
      return null;
    }
    function f(H, U) {
      for (H = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? H.set(U.key, U) : H.set(U.index, U), U = U.sibling;
      return H;
    }
    function v(H, U) {
      return H = Ml(H, U), H.index = 0, H.sibling = null, H;
    }
    function S(H, U, I) {
      return H.index = I, n ? (I = H.alternate, I !== null ? (I = I.index, I < U ? (H.flags |= 2, U) : I) : (H.flags |= 2, U)) : (H.flags |= 1048576, U);
    }
    function _(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function R(H, U, I, se) {
      return U === null || U.tag !== 6 ? (U = Vs(I, H.mode, se), U.return = H, U) : (U = v(U, I), U.return = H, U);
    }
    function N(H, U, I, se) {
      var Ue = I.type;
      return Ue === ee ? re(H, U, I.props.children, se, I.key) : U !== null && (U.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === yt && tm(Ue) === U.type) ? (se = v(U, I.props), se.ref = cu(H, U, I), se.return = H, se) : (se = Df(I.type, I.key, I.props, null, H.mode, se), se.ref = cu(H, U, I), se.return = H, se);
    }
    function W(H, U, I, se) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== I.containerInfo || U.stateNode.implementation !== I.implementation ? (U = bo(I, H.mode, se), U.return = H, U) : (U = v(U, I.children || []), U.return = H, U);
    }
    function re(H, U, I, se, Ue) {
      return U === null || U.tag !== 7 ? (U = To(I, H.mode, se, Ue), U.return = H, U) : (U = v(U, I), U.return = H, U);
    }
    function ie(H, U, I) {
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return U = Vs("" + U, H.mode, I), U.return = H, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case oe:
            return I = Df(U.type, U.key, U.props, null, H.mode, I), I.ref = cu(H, null, U), I.return = H, I;
          case G:
            return U = bo(U, H.mode, I), U.return = H, U;
          case yt:
            var se = U._init;
            return ie(H, se(U._payload), I);
        }
        if (Ti(U) || Fe(U))
          return U = To(U, H.mode, I, null), U.return = H, U;
        Qc(H, U);
      }
      return null;
    }
    function ne(H, U, I, se) {
      var Ue = U !== null ? U.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return Ue !== null ? null : R(H, U, "" + I, se);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case oe:
            return I.key === Ue ? N(H, U, I, se) : null;
          case G:
            return I.key === Ue ? W(H, U, I, se) : null;
          case yt:
            return Ue = I._init, ne(
              H,
              U,
              Ue(I._payload),
              se
            );
        }
        if (Ti(I) || Fe(I))
          return Ue !== null ? null : re(H, U, I, se, null);
        Qc(H, I);
      }
      return null;
    }
    function Ce(H, U, I, se, Ue) {
      if (typeof se == "string" && se !== "" || typeof se == "number")
        return H = H.get(I) || null, R(U, H, "" + se, Ue);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case oe:
            return H = H.get(se.key === null ? I : se.key) || null, N(U, H, se, Ue);
          case G:
            return H = H.get(se.key === null ? I : se.key) || null, W(U, H, se, Ue);
          case yt:
            var Oe = se._init;
            return Ce(H, U, I, Oe(se._payload), Ue);
        }
        if (Ti(se) || Fe(se))
          return H = H.get(I) || null, re(U, H, se, Ue, null);
        Qc(U, se);
      }
      return null;
    }
    function Me(H, U, I, se) {
      for (var Ue = null, Oe = null, ze = U, Ke = U = 0, In = null; ze !== null && Ke < I.length; Ke++) {
        ze.index > Ke ? (In = ze, ze = null) : In = ze.sibling;
        var St = ne(H, ze, I[Ke], se);
        if (St === null) {
          ze === null && (ze = In);
          break;
        }
        n && ze && St.alternate === null && r(H, ze), U = S(St, U, Ke), Oe === null ? Ue = St : Oe.sibling = St, Oe = St, ze = In;
      }
      if (Ke === I.length)
        return u(H, ze), Bt && ra(H, Ke), Ue;
      if (ze === null) {
        for (; Ke < I.length; Ke++)
          ze = ie(H, I[Ke], se), ze !== null && (U = S(ze, U, Ke), Oe === null ? Ue = ze : Oe.sibling = ze, Oe = ze);
        return Bt && ra(H, Ke), Ue;
      }
      for (ze = f(H, ze); Ke < I.length; Ke++)
        In = Ce(ze, H, Ke, I[Ke], se), In !== null && (n && In.alternate !== null && ze.delete(In.key === null ? Ke : In.key), U = S(In, U, Ke), Oe === null ? Ue = In : Oe.sibling = In, Oe = In);
      return n && ze.forEach(function(Ol) {
        return r(H, Ol);
      }), Bt && ra(H, Ke), Ue;
    }
    function Le(H, U, I, se) {
      var Ue = Fe(I);
      if (typeof Ue != "function")
        throw Error(s(150));
      if (I = Ue.call(I), I == null)
        throw Error(s(151));
      for (var Oe = Ue = null, ze = U, Ke = U = 0, In = null, St = I.next(); ze !== null && !St.done; Ke++, St = I.next()) {
        ze.index > Ke ? (In = ze, ze = null) : In = ze.sibling;
        var Ol = ne(H, ze, St.value, se);
        if (Ol === null) {
          ze === null && (ze = In);
          break;
        }
        n && ze && Ol.alternate === null && r(H, ze), U = S(Ol, U, Ke), Oe === null ? Ue = Ol : Oe.sibling = Ol, Oe = Ol, ze = In;
      }
      if (St.done)
        return u(
          H,
          ze
        ), Bt && ra(H, Ke), Ue;
      if (ze === null) {
        for (; !St.done; Ke++, St = I.next())
          St = ie(H, St.value, se), St !== null && (U = S(St, U, Ke), Oe === null ? Ue = St : Oe.sibling = St, Oe = St);
        return Bt && ra(H, Ke), Ue;
      }
      for (ze = f(H, ze); !St.done; Ke++, St = I.next())
        St = Ce(ze, H, Ke, St.value, se), St !== null && (n && St.alternate !== null && ze.delete(St.key === null ? Ke : St.key), U = S(St, U, Ke), Oe === null ? Ue = St : Oe.sibling = St, Oe = St);
      return n && ze.forEach(function(b0) {
        return r(H, b0);
      }), Bt && ra(H, Ke), Ue;
    }
    function hn(H, U, I, se) {
      if (typeof I == "object" && I !== null && I.type === ee && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case oe:
            e: {
              for (var Ue = I.key, Oe = U; Oe !== null; ) {
                if (Oe.key === Ue) {
                  if (Ue = I.type, Ue === ee) {
                    if (Oe.tag === 7) {
                      u(H, Oe.sibling), U = v(Oe, I.props.children), U.return = H, H = U;
                      break e;
                    }
                  } else if (Oe.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === yt && tm(Ue) === Oe.type) {
                    u(H, Oe.sibling), U = v(Oe, I.props), U.ref = cu(H, Oe, I), U.return = H, H = U;
                    break e;
                  }
                  u(H, Oe);
                  break;
                } else
                  r(H, Oe);
                Oe = Oe.sibling;
              }
              I.type === ee ? (U = To(I.props.children, H.mode, se, I.key), U.return = H, H = U) : (se = Df(I.type, I.key, I.props, null, H.mode, se), se.ref = cu(H, U, I), se.return = H, H = se);
            }
            return _(H);
          case G:
            e: {
              for (Oe = I.key; U !== null; ) {
                if (U.key === Oe)
                  if (U.tag === 4 && U.stateNode.containerInfo === I.containerInfo && U.stateNode.implementation === I.implementation) {
                    u(H, U.sibling), U = v(U, I.children || []), U.return = H, H = U;
                    break e;
                  } else {
                    u(H, U);
                    break;
                  }
                else
                  r(H, U);
                U = U.sibling;
              }
              U = bo(I, H.mode, se), U.return = H, H = U;
            }
            return _(H);
          case yt:
            return Oe = I._init, hn(H, U, Oe(I._payload), se);
        }
        if (Ti(I))
          return Me(H, U, I, se);
        if (Fe(I))
          return Le(H, U, I, se);
        Qc(H, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, U !== null && U.tag === 6 ? (u(H, U.sibling), U = v(U, I), U.return = H, H = U) : (u(H, U), U = Vs(I, H.mode, se), U.return = H, H = U), _(H)) : u(H, U);
    }
    return hn;
  }
  var fu = nm(!0), rm = nm(!1), Ts = {}, Za = rt(Ts), bs = rt(Ts), du = rt(Ts);
  function oo(n) {
    if (n === Ts)
      throw Error(s(174));
    return n;
  }
  function sp(n, r) {
    switch (Dt(du, r), Dt(bs, n), Dt(Za, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : mn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = mn(r, n);
    }
    bt(Za), Dt(Za, r);
  }
  function xl() {
    bt(Za), bt(bs), bt(du);
  }
  function Ve(n) {
    oo(du.current);
    var r = oo(Za.current), u = mn(r, n.type);
    r !== u && (Dt(bs, n), Dt(Za, u));
  }
  function ut(n) {
    bs.current === n && (bt(Za), bt(bs));
  }
  var We = rt(0);
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
  function qc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Zc = Se.ReactCurrentDispatcher, cp = Se.ReactCurrentBatchConfig, uo = 0, Wt = null, X = null, ht = null, Ge = !1, fi = !1, la = 0, so = 0;
  function Gt() {
    throw Error(s(321));
  }
  function co(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!Sa(n[u], r[u]))
        return !1;
    return !0;
  }
  function Cl(n, r, u, f, v, S) {
    if (uo = S, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Zc.current = n === null || n.memoizedState === null ? u0 : s0, n = u(f, v), fi) {
      S = 0;
      do {
        if (fi = !1, la = 0, 25 <= S)
          throw Error(s(301));
        S += 1, ht = X = null, r.updateQueue = null, Zc.current = dp, n = u(f, v);
      } while (fi);
    }
    if (Zc.current = pf, r = X !== null && X.next !== null, uo = 0, ht = X = Wt = null, Ge = !1, r)
      throw Error(s(300));
    return n;
  }
  function fo() {
    var n = la !== 0;
    return la = 0, n;
  }
  function ba() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ht === null ? Wt.memoizedState = ht = n : ht = ht.next = n, ht;
  }
  function Hr() {
    if (X === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = X.next;
    var r = ht === null ? Wt.memoizedState : ht.next;
    if (r !== null)
      ht = r, X = n;
    else {
      if (n === null)
        throw Error(s(310));
      X = n, n = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, ht === null ? Wt.memoizedState = ht = n : ht = ht.next = n;
    }
    return ht;
  }
  function po(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ds(n) {
    var r = Hr(), u = r.queue;
    if (u === null)
      throw Error(s(311));
    u.lastRenderedReducer = n;
    var f = X, v = f.baseQueue, S = u.pending;
    if (S !== null) {
      if (v !== null) {
        var _ = v.next;
        v.next = S.next, S.next = _;
      }
      f.baseQueue = v = S, u.pending = null;
    }
    if (v !== null) {
      S = v.next, f = f.baseState;
      var R = _ = null, N = null, W = S;
      do {
        var re = W.lane;
        if ((uo & re) === re)
          N !== null && (N = N.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), f = W.hasEagerState ? W.eagerState : n(f, W.action);
        else {
          var ie = {
            lane: re,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          N === null ? (R = N = ie, _ = f) : N = N.next = ie, Wt.lanes |= re, Pi |= re;
        }
        W = W.next;
      } while (W !== null && W !== S);
      N === null ? _ = f : N.next = R, Sa(f, r.memoizedState) || (Sn = !0), r.memoizedState = f, r.baseState = _, r.baseQueue = N, u.lastRenderedState = f;
    }
    if (n = u.interleaved, n !== null) {
      v = n;
      do
        S = v.lane, Wt.lanes |= S, Pi |= S, v = v.next;
      while (v !== n);
    } else
      v === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Rs(n) {
    var r = Hr(), u = r.queue;
    if (u === null)
      throw Error(s(311));
    u.lastRenderedReducer = n;
    var f = u.dispatch, v = u.pending, S = r.memoizedState;
    if (v !== null) {
      u.pending = null;
      var _ = v = v.next;
      do
        S = n(S, _.action), _ = _.next;
      while (_ !== v);
      Sa(S, r.memoizedState) || (Sn = !0), r.memoizedState = S, r.baseQueue === null && (r.baseState = S), u.lastRenderedState = S;
    }
    return [S, f];
  }
  function Kc() {
  }
  function Xc(n, r) {
    var u = Wt, f = Hr(), v = r(), S = !Sa(f.memoizedState, v);
    if (S && (f.memoizedState = v, Sn = !0), f = f.queue, ks(tf.bind(null, u, f, n), [n]), f.getSnapshot !== r || S || ht !== null && ht.memoizedState.tag & 1) {
      if (u.flags |= 2048, ho(9, ef.bind(null, u, f, v, r), void 0, null), nn === null)
        throw Error(s(349));
      uo & 30 || Jc(u, r, v);
    }
    return v;
  }
  function Jc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function ef(n, r, u, f) {
    r.value = u, r.getSnapshot = f, nf(r) && rf(n);
  }
  function tf(n, r, u) {
    return u(function() {
      nf(r) && rf(n);
    });
  }
  function nf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !Sa(n, u);
    } catch {
      return !0;
    }
  }
  function rf(n) {
    var r = ji(n, 1);
    r !== null && hr(r, n, 1, -1);
  }
  function af(n) {
    var r = ba();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: n }, r.queue = n, n = n.dispatch = df.bind(null, Wt, n), [r.memoizedState, n];
  }
  function ho(n, r, u, f) {
    return n = { tag: n, create: r, destroy: u, deps: f, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (f = u.next, u.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function lf() {
    return Hr().memoizedState;
  }
  function vo(n, r, u, f) {
    var v = ba();
    Wt.flags |= n, v.memoizedState = ho(1 | r, u, void 0, f === void 0 ? null : f);
  }
  function zi(n, r, u, f) {
    var v = Hr();
    f = f === void 0 ? null : f;
    var S = void 0;
    if (X !== null) {
      var _ = X.memoizedState;
      if (S = _.destroy, f !== null && co(f, _.deps)) {
        v.memoizedState = ho(r, u, S, f);
        return;
      }
    }
    Wt.flags |= n, v.memoizedState = ho(1 | r, u, S, f);
  }
  function of(n, r) {
    return vo(8390656, 8, n, r);
  }
  function ks(n, r) {
    return zi(2048, 8, n, r);
  }
  function uf(n, r) {
    return zi(4, 2, n, r);
  }
  function sf(n, r) {
    return zi(4, 4, n, r);
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
  function pu(n, r, u) {
    return u = u != null ? u.concat([n]) : null, zi(4, 4, fp.bind(null, r, n), u);
  }
  function cf() {
  }
  function hu(n, r) {
    var u = Hr();
    r = r === void 0 ? null : r;
    var f = u.memoizedState;
    return f !== null && r !== null && co(r, f[1]) ? f[0] : (u.memoizedState = [n, r], n);
  }
  function Tl(n, r) {
    var u = Hr();
    r = r === void 0 ? null : r;
    var f = u.memoizedState;
    return f !== null && r !== null && co(r, f[1]) ? f[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function Pr(n, r, u) {
    return uo & 21 ? (Sa(u, r) || (u = Sc(), Wt.lanes |= u, Pi |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Sn = !0), n.memoizedState = u);
  }
  function o0(n, r) {
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
  function ff(n, r, u) {
    var f = wn(n);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, vu(n))
      Ms(r, u);
    else if (u = Zv(n, r, u, f), u !== null) {
      var v = pr();
      hr(u, n, f, v), am(u, r, f);
    }
  }
  function df(n, r, u) {
    var f = wn(n), v = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (vu(n))
      Ms(r, v);
    else {
      var S = n.alternate;
      if (n.lanes === 0 && (S === null || S.lanes === 0) && (S = r.lastRenderedReducer, S !== null))
        try {
          var _ = r.lastRenderedState, R = S(_, u);
          if (v.hasEagerState = !0, v.eagerState = R, Sa(R, _)) {
            var N = r.interleaved;
            N === null ? (v.next = v, ip(r)) : (v.next = N.next, N.next = v), r.interleaved = v;
            return;
          }
        } catch {
        } finally {
        }
      u = Zv(n, r, v, f), u !== null && (v = pr(), hr(u, n, f, v), am(u, r, f));
    }
  }
  function vu(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function Ms(n, r) {
    fi = Ge = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function am(n, r, u) {
    if (u & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, ns(n, u);
    }
  }
  var pf = { readContext: pn, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useInsertionEffect: Gt, useLayoutEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useMutableSource: Gt, useSyncExternalStore: Gt, useId: Gt, unstable_isNewReconciler: !1 }, u0 = { readContext: pn, useCallback: function(n, r) {
    return ba().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: of, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, vo(
      4194308,
      4,
      fp.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return vo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = ba();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var f = ba();
    return r = u !== void 0 ? u(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = ff.bind(null, Wt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = ba();
    return n = { current: n }, r.memoizedState = n;
  }, useState: af, useDebugValue: cf, useDeferredValue: function(n) {
    return ba().memoizedState = n;
  }, useTransition: function() {
    var n = af(!1), r = n[0];
    return n = o0.bind(null, n[1]), ba().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var f = Wt, v = ba();
    if (Bt) {
      if (u === void 0)
        throw Error(s(407));
      u = u();
    } else {
      if (u = r(), nn === null)
        throw Error(s(349));
      uo & 30 || Jc(f, r, u);
    }
    v.memoizedState = u;
    var S = { value: u, getSnapshot: r };
    return v.queue = S, of(tf.bind(
      null,
      f,
      S,
      n
    ), [n]), f.flags |= 2048, ho(9, ef.bind(null, f, S, u, r), void 0, null), u;
  }, useId: function() {
    var n = ba(), r = nn.identifierPrefix;
    if (Bt) {
      var u = Ui, f = Wn;
      u = (f & ~(1 << 32 - ma(f) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = la++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = so++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, s0 = {
    readContext: pn,
    useCallback: hu,
    useContext: pn,
    useEffect: ks,
    useImperativeHandle: pu,
    useInsertionEffect: uf,
    useLayoutEffect: sf,
    useMemo: Tl,
    useReducer: Ds,
    useRef: lf,
    useState: function() {
      return Ds(po);
    },
    useDebugValue: cf,
    useDeferredValue: function(n) {
      var r = Hr();
      return Pr(r, X.memoizedState, n);
    },
    useTransition: function() {
      var n = Ds(po)[0], r = Hr().memoizedState;
      return [n, r];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Xc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, dp = { readContext: pn, useCallback: hu, useContext: pn, useEffect: ks, useImperativeHandle: pu, useInsertionEffect: uf, useLayoutEffect: sf, useMemo: Tl, useReducer: Rs, useRef: lf, useState: function() {
    return Rs(po);
  }, useDebugValue: cf, useDeferredValue: function(n) {
    var r = Hr();
    return X === null ? r.memoizedState = n : Pr(r, X.memoizedState, n);
  }, useTransition: function() {
    var n = Rs(po)[0], r = Hr().memoizedState;
    return [n, r];
  }, useMutableSource: Kc, useSyncExternalStore: Xc, useId: Ht, unstable_isNewReconciler: !1 };
  function mu(n, r) {
    try {
      var u = "", f = r;
      do
        u += ri(f), f = f.return;
      while (f);
      var v = u;
    } catch (S) {
      v = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function Os(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function hf(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var c0 = typeof WeakMap == "function" ? WeakMap : Map;
  function im(n, r, u) {
    u = Ai(-1, u), u.tag = 3, u.payload = { element: null };
    var f = r.value;
    return u.callback = function() {
      Ef || (Ef = !0, wo = f), hf(n, r);
    }, u;
  }
  function Ns(n, r, u) {
    u = Ai(-1, u), u.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var v = r.value;
      u.payload = function() {
        return f(v);
      }, u.callback = function() {
        hf(n, r);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (u.callback = function() {
      hf(n, r), typeof f != "function" && (hi === null ? hi = /* @__PURE__ */ new Set([this]) : hi.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), u;
  }
  function lm(n, r, u) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new c0();
      var v = /* @__PURE__ */ new Set();
      f.set(r, v);
    } else
      v = f.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(r, v));
    v.has(u) || (v.add(u), n = y0.bind(null, n, r, u), r.then(n, n));
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Ai(-1, 1), r.tag = 2, El(u, r, 1))), u.lanes |= 1), n);
  }
  var f0 = Se.ReactCurrentOwner, Sn = !1;
  function Dn(n, r, u, f) {
    r.child = n === null ? rm(r, null, u, f) : fu(r, n.child, u, f);
  }
  function bl(n, r, u, f, v) {
    u = u.render;
    var S = r.ref;
    return ve(r, v), f = Cl(n, r, u, f, S, v), u = fo(), n !== null && !Sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Qn(n, r, v)) : (Bt && u && Hc(r), r.flags |= 1, Dn(n, r, f, v), r.child);
  }
  function vf(n, r, u, f, v) {
    if (n === null) {
      var S = u.type;
      return typeof S == "function" && !Lp(S) && S.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = S, Yr(n, r, S, f, v)) : (n = Df(u.type, null, f, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (S = n.child, !(n.lanes & v)) {
      var _ = S.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ps, u(_, f) && n.ref === r.ref)
        return Qn(n, r, v);
    }
    return r.flags |= 1, n = Ml(S, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yr(n, r, u, f, v) {
    if (n !== null) {
      var S = n.memoizedProps;
      if (ps(S, f) && n.ref === r.ref)
        if (Sn = !1, r.pendingProps = f = S, (n.lanes & v) !== 0)
          n.flags & 131072 && (Sn = !0);
        else
          return r.lanes = n.lanes, Qn(n, r, v);
    }
    return yu(n, r, u, f, v);
  }
  function mo(n, r, u) {
    var f = r.pendingProps, v = f.children, S = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Dt(xu, oa), oa |= u;
      else {
        if (!(u & 1073741824))
          return n = S !== null ? S.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Dt(xu, oa), oa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = S !== null ? S.baseLanes : u, Dt(xu, oa), oa |= f;
      }
    else
      S !== null ? (f = S.baseLanes | u, r.memoizedState = null) : f = u, Dt(xu, oa), oa |= f;
    return Dn(n, r, v, u), r.child;
  }
  function at(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yu(n, r, u, f, v) {
    var S = Kt(u) ? Ur : Ze.current;
    return S = Ea(r, S), ve(r, v), u = Cl(n, r, u, f, S, v), f = fo(), n !== null && !Sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Qn(n, r, v)) : (Bt && f && Hc(r), r.flags |= 1, Dn(n, r, u, v), r.child);
  }
  function vp(n, r, u, f, v) {
    if (Kt(u)) {
      var S = !0;
      Fc(r);
    } else
      S = !1;
    if (ve(r, v), r.stateNode === null)
      cr(n, r), Jv(r, u, f), Gc(r, u, f, v), f = !0;
    else if (n === null) {
      var _ = r.stateNode, R = r.memoizedProps;
      _.props = R;
      var N = _.context, W = u.contextType;
      typeof W == "object" && W !== null ? W = pn(W) : (W = Kt(u) ? Ur : Ze.current, W = Ea(r, W));
      var re = u.getDerivedStateFromProps, ie = typeof re == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ie || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (R !== f || N !== W) && em(r, _, f, W), wl = !1;
      var ne = r.memoizedState;
      _.state = ne, _l(r, f, _, v), N = r.memoizedState, R !== f || ne !== N || un.current || wl ? (typeof re == "function" && (up(r, u, re, f), N = r.memoizedState), (R = wl || Xv(r, u, R, f, ne, N, W)) ? (ie || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = N), _.props = f, _.state = N, _.context = W, f = R) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      _ = r.stateNode, bn(n, r), R = r.memoizedProps, W = r.type === r.elementType ? R : ia(r.type, R), _.props = W, ie = r.pendingProps, ne = _.context, N = u.contextType, typeof N == "object" && N !== null ? N = pn(N) : (N = Kt(u) ? Ur : Ze.current, N = Ea(r, N));
      var Ce = u.getDerivedStateFromProps;
      (re = typeof Ce == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (R !== ie || ne !== N) && em(r, _, f, N), wl = !1, ne = r.memoizedState, _.state = ne, _l(r, f, _, v);
      var Me = r.memoizedState;
      R !== ie || ne !== Me || un.current || wl ? (typeof Ce == "function" && (up(r, u, Ce, f), Me = r.memoizedState), (W = wl || Xv(r, u, W, f, ne, Me, N) || !1) ? (re || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(f, Me, N), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(f, Me, N)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || R === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Me), _.props = f, _.state = Me, _.context = N, f = W) : (typeof _.componentDidUpdate != "function" || R === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return om(n, r, u, f, S, v);
  }
  function om(n, r, u, f, v, S) {
    at(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!f && !_)
      return v && Wv(r, u, !1), Qn(n, r, S);
    f = r.stateNode, f0.current = r;
    var R = _ && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && _ ? (r.child = fu(r, n.child, null, S), r.child = fu(r, null, R, S)) : Dn(n, r, R, S), r.memoizedState = f.state, v && Wv(r, u, !0), r.child;
  }
  function um(n) {
    var r = n.stateNode;
    r.pendingContext ? ml(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ml(n, r.context, !1), sp(n, r.containerInfo);
  }
  function mf(n, r, u, f, v) {
    return en(), np(v), r.flags |= 256, Dn(n, r, u, f), r.child;
  }
  var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function yp(n, r, u) {
    var f = r.pendingProps, v = We.current, S = !1, _ = (r.flags & 128) !== 0, R;
    if ((R = _) || (R = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), R ? (S = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), Dt(We, v & 1), n === null)
      return Yc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = f.children, n = f.fallback, S ? (f = r.mode, S = r.child, _ = { mode: "hidden", children: _ }, !(f & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = _) : S = Is(_, f, 0, null), n = To(n, f, u, null), S.return = r, n.return = r, S.sibling = n, r.child = S, r.child.memoizedState = mp(u), r.memoizedState = yo, n) : gp(r, _));
    if (v = n.memoizedState, v !== null && (R = v.dehydrated, R !== null))
      return d0(n, r, _, f, R, v, u);
    if (S) {
      S = f.fallback, _ = r.mode, v = n.child, R = v.sibling;
      var N = { mode: "hidden", children: f.children };
      return !(_ & 1) && r.child !== v ? (f = r.child, f.childLanes = 0, f.pendingProps = N, r.deletions = null) : (f = Ml(v, N), f.subtreeFlags = v.subtreeFlags & 14680064), R !== null ? S = Ml(R, S) : (S = To(S, _, u, null), S.flags |= 2), S.return = r, f.return = r, f.sibling = S, r.child = f, f = S, S = r.child, _ = n.child.memoizedState, _ = _ === null ? mp(u) : { baseLanes: _.baseLanes | u, cachePool: null, transitions: _.transitions }, S.memoizedState = _, S.childLanes = n.childLanes & ~u, r.memoizedState = yo, f;
    }
    return S = n.child, n = S.sibling, f = Ml(S, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = u), f.return = r, f.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function gp(n, r) {
    return r = Is({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function gu(n, r, u, f) {
    return f !== null && np(f), fu(r, n.child, null, u), n = gp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function d0(n, r, u, f, v, S, _) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, f = Os(Error(s(422))), gu(n, r, _, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (S = f.fallback, v = r.mode, f = Is({ mode: "visible", children: f.children }, v, 0, null), S = To(S, v, _, null), S.flags |= 2, f.return = r, S.return = r, f.sibling = S, r.child = f, r.mode & 1 && fu(r, n.child, null, _), r.child.memoizedState = mp(_), r.memoizedState = yo, S);
    if (!(r.mode & 1))
      return gu(n, r, _, null);
    if (v.data === "$!") {
      if (f = v.nextSibling && v.nextSibling.dataset, f)
        var R = f.dgst;
      return f = R, S = Error(s(419)), f = Os(S, f, void 0), gu(n, r, _, f);
    }
    if (R = (_ & n.childLanes) !== 0, Sn || R) {
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
        v = v & (f.suspendedLanes | _) ? 0 : v, v !== 0 && v !== S.retryLane && (S.retryLane = v, ji(n, v), hr(f, n, v, -1));
      }
      return Mp(), f = Os(Error(s(421))), gu(n, r, _, f);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = g0.bind(null, n), v._reactRetry = r, null) : (n = S.treeContext, Fr = qa(v.nextSibling), aa = r, Bt = !0, Ca = null, n !== null && (zr[sr++] = Wn, zr[sr++] = Ui, zr[sr++] = xa, Wn = n.id, Ui = n.overflow, xa = r), r = gp(r, f.children), r.flags |= 4096, r);
  }
  function Sp(n, r, u) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), Hn(n.return, r, u);
  }
  function yf(n, r, u, f, v) {
    var S = n.memoizedState;
    S === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: v } : (S.isBackwards = r, S.rendering = null, S.renderingStartTime = 0, S.last = f, S.tail = u, S.tailMode = v);
  }
  function wp(n, r, u) {
    var f = r.pendingProps, v = f.revealOrder, S = f.tail;
    if (Dn(n, r, f.children, u), f = We.current, f & 2)
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
    if (Dt(We, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (v) {
        case "forwards":
          for (u = r.child, v = null; u !== null; )
            n = u.alternate, n !== null && tn(n) === null && (v = u), u = u.sibling;
          u = v, u === null ? (v = r.child, r.child = null) : (v = u.sibling, u.sibling = null), yf(r, !1, v, u, S);
          break;
        case "backwards":
          for (u = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && tn(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = u, u = v, v = n;
          }
          yf(r, !0, u, null, S);
          break;
        case "together":
          yf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function cr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Qn(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Pi |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(s(153));
    if (r.child !== null) {
      for (n = r.child, u = Ml(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Ml(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Fi(n, r, u) {
    switch (r.tag) {
      case 3:
        um(r), en();
        break;
      case 5:
        Ve(r);
        break;
      case 1:
        Kt(r.type) && Fc(r);
        break;
      case 4:
        sp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, v = r.memoizedProps.value;
        Dt(ci, f._currentValue), f._currentValue = v;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Dt(We, We.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? yp(n, r, u) : (Dt(We, We.current & 1), n = Qn(n, r, u), n !== null ? n.sibling : null);
        Dt(We, We.current & 1);
        break;
      case 19:
        if (f = (u & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return wp(n, r, u);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), Dt(We, We.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mo(n, r, u);
    }
    return Qn(n, r, u);
  }
  var Ls, go, Da, Rn;
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
  }, go = function() {
  }, Da = function(n, r, u, f) {
    var v = n.memoizedProps;
    if (v !== f) {
      n = r.stateNode, oo(Za.current);
      var S = null;
      switch (u) {
        case "input":
          v = ir(n, v), f = ir(n, f), S = [];
          break;
        case "select":
          v = Ee({}, v, { value: void 0 }), f = Ee({}, f, { value: void 0 }), S = [];
          break;
        case "textarea":
          v = Pa(n, v), f = Pa(n, f), S = [];
          break;
        default:
          typeof v.onClick != "function" && typeof f.onClick == "function" && (n.onclick = zc);
      }
      Un(u, f);
      var _;
      u = null;
      for (W in v)
        if (!f.hasOwnProperty(W) && v.hasOwnProperty(W) && v[W] != null)
          if (W === "style") {
            var R = v[W];
            for (_ in R)
              R.hasOwnProperty(_) && (u || (u = {}), u[_] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (h.hasOwnProperty(W) ? S || (S = []) : (S = S || []).push(W, null));
      for (W in f) {
        var N = f[W];
        if (R = v != null ? v[W] : void 0, f.hasOwnProperty(W) && N !== R && (N != null || R != null))
          if (W === "style")
            if (R) {
              for (_ in R)
                !R.hasOwnProperty(_) || N && N.hasOwnProperty(_) || (u || (u = {}), u[_] = "");
              for (_ in N)
                N.hasOwnProperty(_) && R[_] !== N[_] && (u || (u = {}), u[_] = N[_]);
            } else
              u || (S || (S = []), S.push(
                W,
                u
              )), u = N;
          else
            W === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, R = R ? R.__html : void 0, N != null && R !== N && (S = S || []).push(W, N)) : W === "children" ? typeof N != "string" && typeof N != "number" || (S = S || []).push(W, "" + N) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (h.hasOwnProperty(W) ? (N != null && W === "onScroll" && Ft("scroll", n), S || R === N || (S = [])) : (S = S || []).push(W, N));
      }
      u && (S = S || []).push("style", u);
      var W = S;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, Rn = function(n, r, u, f) {
    u !== f && (r.flags |= 4);
  };
  function Us(n, r) {
    if (!Bt)
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
  function fr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, f = 0;
    if (r)
      for (var v = n.child; v !== null; )
        u |= v.lanes | v.childLanes, f |= v.subtreeFlags & 14680064, f |= v.flags & 14680064, v.return = n, v = v.sibling;
    else
      for (v = n.child; v !== null; )
        u |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= f, n.childLanes = u, r;
  }
  function p0(n, r, u) {
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
        return fr(r), null;
      case 1:
        return Kt(r.type) && _a(), fr(r), null;
      case 3:
        return f = r.stateNode, xl(), bt(un), bt(Ze), qc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Ic(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ca !== null && (Ys(Ca), Ca = null))), go(n, r), fr(r), null;
      case 5:
        ut(r);
        var v = oo(du.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Da(n, r, u, f, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(s(166));
            return fr(r), null;
          }
          if (n = oo(Za.current), Ic(r)) {
            f = r.stateNode, u = r.type;
            var S = r.memoizedProps;
            switch (f[ui] = r, f[ao] = S, n = (r.mode & 1) !== 0, u) {
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
                Bn(f, S), Ft("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!S.multiple }, Ft("invalid", f);
                break;
              case "textarea":
                Zr(f, S), Ft("invalid", f);
            }
            Un(u, S), v = null;
            for (var _ in S)
              if (S.hasOwnProperty(_)) {
                var R = S[_];
                _ === "children" ? typeof R == "string" ? f.textContent !== R && (S.suppressHydrationWarning !== !0 && Ac(f.textContent, R, n), v = ["children", R]) : typeof R == "number" && f.textContent !== "" + R && (S.suppressHydrationWarning !== !0 && Ac(
                  f.textContent,
                  R,
                  n
                ), v = ["children", "" + R]) : h.hasOwnProperty(_) && R != null && _ === "onScroll" && Ft("scroll", f);
              }
            switch (u) {
              case "input":
                Or(f), va(f, S, !0);
                break;
              case "textarea":
                Or(f), Kr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (f.onclick = zc);
            }
            f = v, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            _ = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = _.createElement(u, { is: f.is }) : (n = _.createElement(u), u === "select" && (_ = n, f.multiple ? _.multiple = !0 : f.size && (_.size = f.size))) : n = _.createElementNS(n, u), n[ui] = r, n[ao] = f, Ls(n, r, !1, !1), r.stateNode = n;
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
                  Bn(n, f), v = ir(n, f), Ft("invalid", n);
                  break;
                case "option":
                  v = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, v = Ee({}, f, { value: void 0 }), Ft("invalid", n);
                  break;
                case "textarea":
                  Zr(n, f), v = Pa(n, f), Ft("invalid", n);
                  break;
                default:
                  v = f;
              }
              Un(u, v), R = v;
              for (S in R)
                if (R.hasOwnProperty(S)) {
                  var N = R[S];
                  S === "style" ? Ot(n, N) : S === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && al(n, N)) : S === "children" ? typeof N == "string" ? (u !== "textarea" || N !== "") && Ia(n, N) : typeof N == "number" && Ia(n, "" + N) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (h.hasOwnProperty(S) ? N != null && S === "onScroll" && Ft("scroll", n) : N != null && te(n, S, N, _));
                }
              switch (u) {
                case "input":
                  Or(n), va(n, f, !1);
                  break;
                case "textarea":
                  Or(n), Kr(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + ar(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, S = f.value, S != null ? ii(n, !!f.multiple, S, !1) : f.defaultValue != null && ii(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = zc);
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
        return fr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Rn(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null)
            throw Error(s(166));
          if (u = oo(du.current), oo(Za.current), Ic(r)) {
            if (f = r.stateNode, u = r.memoizedProps, f[ui] = r, (S = f.nodeValue !== u) && (n = aa, n !== null))
              switch (n.tag) {
                case 3:
                  Ac(f.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ac(f.nodeValue, u, (n.mode & 1) !== 0);
              }
            S && (r.flags |= 4);
          } else
            f = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(f), f[ui] = r, r.stateNode = f;
        }
        return fr(r), null;
      case 13:
        if (bt(We), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Bt && Fr !== null && r.mode & 1 && !(r.flags & 128))
            qv(), en(), r.flags |= 98560, S = !1;
          else if (S = Ic(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!S)
                throw Error(s(318));
              if (S = r.memoizedState, S = S !== null ? S.dehydrated : null, !S)
                throw Error(s(317));
              S[ui] = r;
            } else
              en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            fr(r), S = !1;
          } else
            Ca !== null && (Ys(Ca), Ca = null), S = !0;
          if (!S)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || We.current & 1 ? Mn === 0 && (Mn = 3) : Mp())), r.updateQueue !== null && (r.flags |= 4), fr(r), null);
      case 4:
        return xl(), go(n, r), n === null && ou(r.stateNode.containerInfo), fr(r), null;
      case 10:
        return Sl(r.type._context), fr(r), null;
      case 17:
        return Kt(r.type) && _a(), fr(r), null;
      case 19:
        if (bt(We), S = r.memoizedState, S === null)
          return fr(r), null;
        if (f = (r.flags & 128) !== 0, _ = S.rendering, _ === null)
          if (f)
            Us(S, !1);
          else {
            if (Mn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (_ = tn(n), _ !== null) {
                  for (r.flags |= 128, Us(S, !1), f = _.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = u, u = r.child; u !== null; )
                    S = u, n = f, S.flags &= 14680066, _ = S.alternate, _ === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = _.childLanes, S.lanes = _.lanes, S.child = _.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = _.memoizedProps, S.memoizedState = _.memoizedState, S.updateQueue = _.updateQueue, S.type = _.type, n = _.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Dt(We, We.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            S.tail !== null && Et() > Tu && (r.flags |= 128, f = !0, Us(S, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = tn(_), n !== null) {
              if (r.flags |= 128, f = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Us(S, !0), S.tail === null && S.tailMode === "hidden" && !_.alternate && !Bt)
                return fr(r), null;
            } else
              2 * Et() - S.renderingStartTime > Tu && u !== 1073741824 && (r.flags |= 128, f = !0, Us(S, !1), r.lanes = 4194304);
          S.isBackwards ? (_.sibling = r.child, r.child = _) : (u = S.last, u !== null ? u.sibling = _ : r.child = _, S.last = _);
        }
        return S.tail !== null ? (r = S.tail, S.rendering = r, S.tail = r.sibling, S.renderingStartTime = Et(), r.sibling = null, u = We.current, Dt(We, f ? u & 1 | 2 : u & 1), r) : (fr(r), null);
      case 22:
      case 23:
        return kp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? oa & 1073741824 && (fr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : fr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, r.tag));
  }
  function Ep(n, r) {
    switch (ep(r), r.tag) {
      case 1:
        return Kt(r.type) && _a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), bt(un), bt(Ze), qc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ut(r), null;
      case 13:
        if (bt(We), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(s(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return bt(We), null;
      case 4:
        return xl(), null;
      case 10:
        return Sl(r.type._context), null;
      case 22:
      case 23:
        return kp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var js = !1, kn = !1, sm = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function Su(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (f) {
          cn(n, r, f);
        }
      else
        u.current = null;
  }
  function As(n, r, u) {
    try {
      u();
    } catch (f) {
      cn(n, r, f);
    }
  }
  var cm = !1;
  function fm(n, r) {
    if (Wd = Kl, n = Oc(), Mi(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var f = u.getSelection && u.getSelection();
          if (f && f.rangeCount !== 0) {
            u = f.anchorNode;
            var v = f.anchorOffset, S = f.focusNode;
            f = f.focusOffset;
            try {
              u.nodeType, S.nodeType;
            } catch {
              u = null;
              break e;
            }
            var _ = 0, R = -1, N = -1, W = 0, re = 0, ie = n, ne = null;
            t:
              for (; ; ) {
                for (var Ce; ie !== u || v !== 0 && ie.nodeType !== 3 || (R = _ + v), ie !== S || f !== 0 && ie.nodeType !== 3 || (N = _ + f), ie.nodeType === 3 && (_ += ie.nodeValue.length), (Ce = ie.firstChild) !== null; )
                  ne = ie, ie = Ce;
                for (; ; ) {
                  if (ie === n)
                    break t;
                  if (ne === u && ++W === v && (R = _), ne === S && ++re === f && (N = _), (Ce = ie.nextSibling) !== null)
                    break;
                  ie = ne, ne = ie.parentNode;
                }
                ie = Ce;
              }
            u = R === -1 || N === -1 ? null : { start: R, end: N };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (no = { focusedElem: n, selectionRange: u }, Kl = !1, Re = r; Re !== null; )
      if (r = Re, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Re = n;
      else
        for (; Re !== null; ) {
          r = Re;
          try {
            var Me = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Me !== null) {
                    var Le = Me.memoizedProps, hn = Me.memoizedState, H = r.stateNode, U = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : ia(r.type, Le), hn);
                    H.__reactInternalSnapshotBeforeUpdate = U;
                  }
                  break;
                case 3:
                  var I = r.stateNode.containerInfo;
                  I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (se) {
            cn(r, r.return, se);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Re = n;
            break;
          }
          Re = r.return;
        }
    return Me = cm, cm = !1, Me;
  }
  function zs(n, r, u) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var v = f = f.next;
      do {
        if ((v.tag & n) === n) {
          var S = v.destroy;
          v.destroy = void 0, S !== void 0 && As(r, u, S);
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
    r !== null && (n.alternate = null, xp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ui], delete r[ao], delete r[qd], delete r[l0], delete r[Zd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function dm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function gf(n) {
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
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = zc));
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
  var Xt = null, Pn = !1;
  function Ra(n, r, u) {
    for (u = u.child; u !== null; )
      Eu(n, r, u), u = u.sibling;
  }
  function Eu(n, r, u) {
    if ($a && typeof $a.onCommitFiberUnmount == "function")
      try {
        $a.onCommitFiberUnmount(ts, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        kn || Su(u, r);
      case 6:
        var f = Xt, v = Pn;
        Xt = null, Ra(n, r, u), Xt = f, Pn = v, Xt !== null && (Pn ? (n = Xt, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : Xt.removeChild(u.stateNode));
        break;
      case 18:
        Xt !== null && (Pn ? (n = Xt, u = u.stateNode, n.nodeType === 8 ? pl(n.parentNode, u) : n.nodeType === 1 && pl(n, u), ls(n)) : pl(Xt, u.stateNode));
        break;
      case 4:
        f = Xt, v = Pn, Xt = u.stateNode.containerInfo, Pn = !0, Ra(n, r, u), Xt = f, Pn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kn && (f = u.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          v = f = f.next;
          do {
            var S = v, _ = S.destroy;
            S = S.tag, _ !== void 0 && (S & 2 || S & 4) && As(u, r, _), v = v.next;
          } while (v !== f);
        }
        Ra(n, r, u);
        break;
      case 1:
        if (!kn && (Su(u, r), f = u.stateNode, typeof f.componentWillUnmount == "function"))
          try {
            f.props = u.memoizedProps, f.state = u.memoizedState, f.componentWillUnmount();
          } catch (R) {
            cn(u, r, R);
          }
        Ra(n, r, u);
        break;
      case 21:
        Ra(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (kn = (f = kn) || u.memoizedState !== null, Ra(n, r, u), kn = f) : Ra(n, r, u);
        break;
      default:
        Ra(n, r, u);
    }
  }
  function Hi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new sm()), r.forEach(function(f) {
        var v = S0.bind(null, n, f);
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
          var S = n, _ = r, R = _;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  Xt = R.stateNode, Pn = !1;
                  break e;
                case 3:
                  Xt = R.stateNode.containerInfo, Pn = !0;
                  break e;
                case 4:
                  Xt = R.stateNode.containerInfo, Pn = !0;
                  break e;
              }
              R = R.return;
            }
          if (Xt === null)
            throw Error(s(160));
          Eu(S, _, v), Xt = null, Pn = !1;
          var N = v.alternate;
          N !== null && (N.return = null), v.return = null;
        } catch (W) {
          cn(v, r, W);
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
            zs(3, n, n.return), Fs(3, n);
          } catch (Le) {
            cn(n, n.return, Le);
          }
          try {
            zs(5, n, n.return);
          } catch (Le) {
            cn(n, n.return, Le);
          }
        }
        break;
      case 1:
        Ka(r, n), pi(n), f & 512 && u !== null && Su(u, u.return);
        break;
      case 5:
        if (Ka(r, n), pi(n), f & 512 && u !== null && Su(u, u.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Ia(v, "");
          } catch (Le) {
            cn(n, n.return, Le);
          }
        }
        if (f & 4 && (v = n.stateNode, v != null)) {
          var S = n.memoizedProps, _ = u !== null ? u.memoizedProps : S, R = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null)
            try {
              R === "input" && S.type === "radio" && S.name != null && lr(v, S), dn(R, _);
              var W = dn(R, S);
              for (_ = 0; _ < N.length; _ += 2) {
                var re = N[_], ie = N[_ + 1];
                re === "style" ? Ot(v, ie) : re === "dangerouslySetInnerHTML" ? al(v, ie) : re === "children" ? Ia(v, ie) : te(v, re, ie, W);
              }
              switch (R) {
                case "input":
                  or(v, S);
                  break;
                case "textarea":
                  li(v, S);
                  break;
                case "select":
                  var ne = v._wrapperState.wasMultiple;
                  v._wrapperState.wasMultiple = !!S.multiple;
                  var Ce = S.value;
                  Ce != null ? ii(v, !!S.multiple, Ce, !1) : ne !== !!S.multiple && (S.defaultValue != null ? ii(
                    v,
                    !!S.multiple,
                    S.defaultValue,
                    !0
                  ) : ii(v, !!S.multiple, S.multiple ? [] : "", !1));
              }
              v[ao] = S;
            } catch (Le) {
              cn(n, n.return, Le);
            }
        }
        break;
      case 6:
        if (Ka(r, n), pi(n), f & 4) {
          if (n.stateNode === null)
            throw Error(s(162));
          v = n.stateNode, S = n.memoizedProps;
          try {
            v.nodeValue = S;
          } catch (Le) {
            cn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (Ka(r, n), pi(n), f & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ls(r.containerInfo);
          } catch (Le) {
            cn(n, n.return, Le);
          }
        break;
      case 4:
        Ka(r, n), pi(n);
        break;
      case 13:
        Ka(r, n), pi(n), v = n.child, v.flags & 8192 && (S = v.memoizedState !== null, v.stateNode.isHidden = S, !S || v.alternate !== null && v.alternate.memoizedState !== null || (bp = Et())), f & 4 && Hi(n);
        break;
      case 22:
        if (re = u !== null && u.memoizedState !== null, n.mode & 1 ? (kn = (W = kn) || re, Ka(r, n), kn = W) : Ka(r, n), pi(n), f & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !re && n.mode & 1)
            for (Re = n, re = n.child; re !== null; ) {
              for (ie = Re = re; Re !== null; ) {
                switch (ne = Re, Ce = ne.child, ne.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    zs(4, ne, ne.return);
                    break;
                  case 1:
                    Su(ne, ne.return);
                    var Me = ne.stateNode;
                    if (typeof Me.componentWillUnmount == "function") {
                      f = ne, u = ne.return;
                      try {
                        r = f, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                      } catch (Le) {
                        cn(f, u, Le);
                      }
                    }
                    break;
                  case 5:
                    Su(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      Cp(ie);
                      continue;
                    }
                }
                Ce !== null ? (Ce.return = ne, Re = Ce) : Cp(ie);
              }
              re = re.sibling;
            }
          e:
            for (re = null, ie = n; ; ) {
              if (ie.tag === 5) {
                if (re === null) {
                  re = ie;
                  try {
                    v = ie.stateNode, W ? (S = v.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (R = ie.stateNode, N = ie.memoizedProps.style, _ = N != null && N.hasOwnProperty("display") ? N.display : null, R.style.display = ot("display", _));
                  } catch (Le) {
                    cn(n, n.return, Le);
                  }
                }
              } else if (ie.tag === 6) {
                if (re === null)
                  try {
                    ie.stateNode.nodeValue = W ? "" : ie.memoizedProps;
                  } catch (Le) {
                    cn(n, n.return, Le);
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
                re === ie && (re = null), ie = ie.return;
              }
              re === ie && (re = null), ie.sibling.return = ie.return, ie = ie.sibling;
            }
        }
        break;
      case 19:
        Ka(r, n), pi(n), f & 4 && Hi(n);
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
          throw Error(s(160));
        }
        switch (f.tag) {
          case 5:
            var v = f.stateNode;
            f.flags & 32 && (Ia(v, ""), f.flags &= -33);
            var S = gf(n);
            di(n, S, v);
            break;
          case 3:
          case 4:
            var _ = f.stateNode.containerInfo, R = gf(n);
            wu(n, R, _);
            break;
          default:
            throw Error(s(161));
        }
      } catch (N) {
        cn(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function hm(n, r, u) {
    Re = n, _u(n);
  }
  function _u(n, r, u) {
    for (var f = (n.mode & 1) !== 0; Re !== null; ) {
      var v = Re, S = v.child;
      if (v.tag === 22 && f) {
        var _ = v.memoizedState !== null || js;
        if (!_) {
          var R = v.alternate, N = R !== null && R.memoizedState !== null || kn;
          R = js;
          var W = kn;
          if (js = _, (kn = N) && !W)
            for (Re = v; Re !== null; )
              _ = Re, N = _.child, _.tag === 22 && _.memoizedState !== null ? mm(v) : N !== null ? (N.return = _, Re = N) : mm(v);
          for (; S !== null; )
            Re = S, _u(S), S = S.sibling;
          Re = v, js = R, kn = W;
        }
        vm(n);
      } else
        v.subtreeFlags & 8772 && S !== null ? (S.return = v, Re = S) : vm(n);
    }
  }
  function vm(n) {
    for (; Re !== null; ) {
      var r = Re;
      if (r.flags & 8772) {
        var u = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                kn || Fs(5, r);
                break;
              case 1:
                var f = r.stateNode;
                if (r.flags & 4 && !kn)
                  if (u === null)
                    f.componentDidMount();
                  else {
                    var v = r.elementType === r.type ? u.memoizedProps : ia(r.type, u.memoizedProps);
                    f.componentDidUpdate(v, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                  }
                var S = r.updateQueue;
                S !== null && lo(r, S, f);
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
                  lo(r, _, u);
                }
                break;
              case 5:
                var R = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = R;
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
                  var W = r.alternate;
                  if (W !== null) {
                    var re = W.memoizedState;
                    if (re !== null) {
                      var ie = re.dehydrated;
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
                throw Error(s(163));
            }
          kn || r.flags & 512 && _p(r);
        } catch (ne) {
          cn(r, r.return, ne);
        }
      }
      if (r === n) {
        Re = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, Re = u;
        break;
      }
      Re = r.return;
    }
  }
  function Cp(n) {
    for (; Re !== null; ) {
      var r = Re;
      if (r === n) {
        Re = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, Re = u;
        break;
      }
      Re = r.return;
    }
  }
  function mm(n) {
    for (; Re !== null; ) {
      var r = Re;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Fs(4, r);
            } catch (N) {
              cn(r, u, N);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var v = r.return;
              try {
                f.componentDidMount();
              } catch (N) {
                cn(r, v, N);
              }
            }
            var S = r.return;
            try {
              _p(r);
            } catch (N) {
              cn(r, S, N);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              _p(r);
            } catch (N) {
              cn(r, _, N);
            }
        }
      } catch (N) {
        cn(r, r.return, N);
      }
      if (r === n) {
        Re = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, Re = R;
        break;
      }
      Re = r.return;
    }
  }
  var Sf = Math.ceil, Hs = Se.ReactCurrentDispatcher, Tp = Se.ReactCurrentOwner, dr = Se.ReactCurrentBatchConfig, ft = 0, nn = null, sn = null, Yn = 0, oa = 0, xu = rt(0), Mn = 0, Ps = null, Pi = 0, wf = 0, Cu = 0, So = null, Sr = null, bp = 0, Tu = 1 / 0, Yi = null, Ef = !1, wo = null, hi = null, Dl = !1, Rl = null, _f = 0, bu = 0, xf = null, Eo = -1, _o = 0;
  function pr() {
    return ft & 6 ? Et() : Eo !== -1 ? Eo : Eo = Et();
  }
  function wn(n) {
    return n.mode & 1 ? ft & 2 && Yn !== 0 ? Yn & -Yn : Vc.transition !== null ? (_o === 0 && (_o = Sc()), _o) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : bd(n.type)), n) : 1;
  }
  function hr(n, r, u, f) {
    if (50 < bu)
      throw bu = 0, xf = null, Error(s(185));
    Zl(n, u, f), (!(ft & 2) || n !== nn) && (n === nn && (!(ft & 2) && (wf |= u), Mn === 4 && ka(n, Yn)), vr(n, f), u === 1 && ft === 0 && !(r.mode & 1) && (Tu = Et() + 500, Fn && jr()));
  }
  function vr(n, r) {
    var u = n.callbackNode;
    gc(n, r);
    var f = Ba(n, n === nn ? Yn : 0);
    if (f === 0)
      u !== null && gr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (u != null && gr(u), r === 1)
        n.tag === 0 ? Xd(ym.bind(null, n)) : Kd(ym.bind(null, n)), Qd(function() {
          !(ft & 6) && jr();
        }), u = null;
      else {
        switch (xd(f)) {
          case 1:
            u = bi;
            break;
          case 4:
            u = ct;
            break;
          case 16:
            u = ul;
            break;
          case 536870912:
            u = Sd;
            break;
          default:
            u = ul;
        }
        u = Np(u, Du.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function Du(n, r) {
    if (Eo = -1, _o = 0, ft & 6)
      throw Error(s(327));
    var u = n.callbackNode;
    if (ku() && n.callbackNode !== u)
      return null;
    var f = Ba(n, n === nn ? Yn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = Tf(n, f);
    else {
      r = f;
      var v = ft;
      ft |= 2;
      var S = Cf();
      (nn !== n || Yn !== r) && (Yi = null, Tu = Et() + 500, xo(n, r));
      do
        try {
          v0();
          break;
        } catch (R) {
          gm(n, R);
        }
      while (1);
      ap(), Hs.current = S, ft = v, sn !== null ? r = 0 : (nn = null, Yn = 0, r = Mn);
    }
    if (r !== 0) {
      if (r === 2 && (v = Ed(n), v !== 0 && (f = v, r = Dp(n, v))), r === 1)
        throw u = Ps, xo(n, 0), ka(n, f), vr(n, Et()), u;
      if (r === 6)
        ka(n, f);
      else {
        if (v = n.current.alternate, !(f & 30) && !Rp(v) && (r = Tf(n, f), r === 2 && (S = Ed(n), S !== 0 && (f = S, r = Dp(n, S))), r === 1))
          throw u = Ps, xo(n, 0), ka(n, f), vr(n, Et()), u;
        switch (n.finishedWork = v, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Co(n, Sr, Yi);
            break;
          case 3:
            if (ka(n, f), (f & 130023424) === f && (r = bp + 500 - Et(), 10 < r)) {
              if (Ba(n, 0) !== 0)
                break;
              if (v = n.suspendedLanes, (v & f) !== f) {
                pr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = ro(Co.bind(null, n, Sr, Yi), r);
              break;
            }
            Co(n, Sr, Yi);
            break;
          case 4:
            if (ka(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, v = -1; 0 < f; ) {
              var _ = 31 - ma(f);
              S = 1 << _, _ = r[_], _ > v && (v = _), f &= ~S;
            }
            if (f = v, f = Et() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Sf(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = ro(Co.bind(null, n, Sr, Yi), f);
              break;
            }
            Co(n, Sr, Yi);
            break;
          case 5:
            Co(n, Sr, Yi);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return vr(n, Et()), n.callbackNode === u ? Du.bind(null, n) : null;
  }
  function Dp(n, r) {
    var u = So;
    return n.current.memoizedState.isDehydrated && (xo(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = Sr, Sr = u, r !== null && Ys(r)), n;
  }
  function Ys(n) {
    Sr === null ? Sr = n : Sr.push.apply(Sr, n);
  }
  function Rp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var f = 0; f < u.length; f++) {
            var v = u[f], S = v.getSnapshot;
            v = v.value;
            try {
              if (!Sa(S(), v))
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
    for (r &= ~Cu, r &= ~wf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - ma(r), f = 1 << u;
      n[u] = -1, r &= ~f;
    }
  }
  function ym(n) {
    if (ft & 6)
      throw Error(s(327));
    ku();
    var r = Ba(n, 0);
    if (!(r & 1))
      return vr(n, Et()), null;
    var u = Tf(n, r);
    if (n.tag !== 0 && u === 2) {
      var f = Ed(n);
      f !== 0 && (r = f, u = Dp(n, f));
    }
    if (u === 1)
      throw u = Ps, xo(n, 0), ka(n, r), vr(n, Et()), u;
    if (u === 6)
      throw Error(s(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Co(n, Sr, Yi), vr(n, Et()), null;
  }
  function Ru(n, r) {
    var u = ft;
    ft |= 1;
    try {
      return n(r);
    } finally {
      ft = u, ft === 0 && (Tu = Et() + 500, Fn && jr());
    }
  }
  function kl(n) {
    Rl !== null && Rl.tag === 0 && !(ft & 6) && ku();
    var r = ft;
    ft |= 1;
    var u = dr.transition, f = Nt;
    try {
      if (dr.transition = null, Nt = 1, n)
        return n();
    } finally {
      Nt = f, dr.transition = u, ft = r, !(ft & 6) && jr();
    }
  }
  function kp() {
    oa = xu.current, bt(xu);
  }
  function xo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Bv(u)), sn !== null)
      for (u = sn.return; u !== null; ) {
        var f = u;
        switch (ep(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && _a();
            break;
          case 3:
            xl(), bt(un), bt(Ze), qc();
            break;
          case 5:
            ut(f);
            break;
          case 4:
            xl();
            break;
          case 13:
            bt(We);
            break;
          case 19:
            bt(We);
            break;
          case 10:
            Sl(f.type._context);
            break;
          case 22:
          case 23:
            kp();
        }
        u = u.return;
      }
    if (nn = n, sn = n = Ml(n.current, null), Yn = oa = r, Mn = 0, Ps = null, Cu = wf = Pi = 0, Sr = So = null, Gn !== null) {
      for (r = 0; r < Gn.length; r++)
        if (u = Gn[r], f = u.interleaved, f !== null) {
          u.interleaved = null;
          var v = f.next, S = u.pending;
          if (S !== null) {
            var _ = S.next;
            S.next = v, f.next = _;
          }
          u.pending = f;
        }
      Gn = null;
    }
    return n;
  }
  function gm(n, r) {
    do {
      var u = sn;
      try {
        if (ap(), Zc.current = pf, Ge) {
          for (var f = Wt.memoizedState; f !== null; ) {
            var v = f.queue;
            v !== null && (v.pending = null), f = f.next;
          }
          Ge = !1;
        }
        if (uo = 0, ht = X = Wt = null, fi = !1, la = 0, Tp.current = null, u === null || u.return === null) {
          Mn = 1, Ps = r, sn = null;
          break;
        }
        e: {
          var S = n, _ = u.return, R = u, N = r;
          if (r = Yn, R.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var W = N, re = R, ie = re.tag;
            if (!(re.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var ne = re.alternate;
              ne ? (re.updateQueue = ne.updateQueue, re.memoizedState = ne.memoizedState, re.lanes = ne.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var Ce = pp(_);
            if (Ce !== null) {
              Ce.flags &= -257, hp(Ce, _, R, S, r), Ce.mode & 1 && lm(S, W, r), r = Ce, N = W;
              var Me = r.updateQueue;
              if (Me === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(N), r.updateQueue = Le;
              } else
                Me.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                lm(S, W, r), Mp();
                break e;
              }
              N = Error(s(426));
            }
          } else if (Bt && R.mode & 1) {
            var hn = pp(_);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), hp(hn, _, R, S, r), np(mu(N, R));
              break e;
            }
          }
          S = N = mu(N, R), Mn !== 4 && (Mn = 2), So === null ? So = [S] : So.push(S), S = _;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, r &= -r, S.lanes |= r;
                var H = im(S, N, r);
                op(S, H);
                break e;
              case 1:
                R = N;
                var U = S.type, I = S.stateNode;
                if (!(S.flags & 128) && (typeof U.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (hi === null || !hi.has(I)))) {
                  S.flags |= 65536, r &= -r, S.lanes |= r;
                  var se = Ns(S, R, r);
                  op(S, se);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        Op(u);
      } catch (Ue) {
        r = Ue, sn === u && u !== null && (sn = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Cf() {
    var n = Hs.current;
    return Hs.current = pf, n === null ? pf : n;
  }
  function Mp() {
    (Mn === 0 || Mn === 3 || Mn === 2) && (Mn = 4), nn === null || !(Pi & 268435455) && !(wf & 268435455) || ka(nn, Yn);
  }
  function Tf(n, r) {
    var u = ft;
    ft |= 2;
    var f = Cf();
    (nn !== n || Yn !== r) && (Yi = null, xo(n, r));
    do
      try {
        h0();
        break;
      } catch (v) {
        gm(n, v);
      }
    while (1);
    if (ap(), ft = u, Hs.current = f, sn !== null)
      throw Error(s(261));
    return nn = null, Yn = 0, Mn;
  }
  function h0() {
    for (; sn !== null; )
      Sm(sn);
  }
  function v0() {
    for (; sn !== null && !ol(); )
      Sm(sn);
  }
  function Sm(n) {
    var r = Em(n.alternate, n, oa);
    n.memoizedProps = n.pendingProps, r === null ? Op(n) : sn = r, Tp.current = null;
  }
  function Op(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = Ep(u, r), u !== null) {
          u.flags &= 32767, sn = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Mn = 6, sn = null;
          return;
        }
      } else if (u = p0(u, r, oa), u !== null) {
        sn = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        sn = r;
        return;
      }
      sn = r = n;
    } while (r !== null);
    Mn === 0 && (Mn = 5);
  }
  function Co(n, r, u) {
    var f = Nt, v = dr.transition;
    try {
      dr.transition = null, Nt = 1, m0(n, r, u, f);
    } finally {
      dr.transition = v, Nt = f;
    }
    return null;
  }
  function m0(n, r, u, f) {
    do
      ku();
    while (Rl !== null);
    if (ft & 6)
      throw Error(s(327));
    u = n.finishedWork;
    var v = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(s(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var S = u.lanes | u.childLanes;
    if (Ig(n, S), n === nn && (sn = nn = null, Yn = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Dl || (Dl = !0, Np(ul, function() {
      return ku(), null;
    })), S = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || S) {
      S = dr.transition, dr.transition = null;
      var _ = Nt;
      Nt = 1;
      var R = ft;
      ft |= 4, Tp.current = null, fm(n, u), pm(u, n), Nc(no), Kl = !!Wd, no = Wd = null, n.current = u, hm(u), mc(), ft = R, Nt = _, dr.transition = S;
    } else
      n.current = u;
    if (Dl && (Dl = !1, Rl = n, _f = v), S = n.pendingLanes, S === 0 && (hi = null), iv(u.stateNode), vr(n, Et()), r !== null)
      for (f = n.onRecoverableError, u = 0; u < r.length; u++)
        v = r[u], f(v.value, { componentStack: v.stack, digest: v.digest });
    if (Ef)
      throw Ef = !1, n = wo, wo = null, n;
    return _f & 1 && n.tag !== 0 && ku(), S = n.pendingLanes, S & 1 ? n === xf ? bu++ : (bu = 0, xf = n) : bu = 0, jr(), null;
  }
  function ku() {
    if (Rl !== null) {
      var n = xd(_f), r = dr.transition, u = Nt;
      try {
        if (dr.transition = null, Nt = 16 > n ? 16 : n, Rl === null)
          var f = !1;
        else {
          if (n = Rl, Rl = null, _f = 0, ft & 6)
            throw Error(s(331));
          var v = ft;
          for (ft |= 4, Re = n.current; Re !== null; ) {
            var S = Re, _ = S.child;
            if (Re.flags & 16) {
              var R = S.deletions;
              if (R !== null) {
                for (var N = 0; N < R.length; N++) {
                  var W = R[N];
                  for (Re = W; Re !== null; ) {
                    var re = Re;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zs(8, re, S);
                    }
                    var ie = re.child;
                    if (ie !== null)
                      ie.return = re, Re = ie;
                    else
                      for (; Re !== null; ) {
                        re = Re;
                        var ne = re.sibling, Ce = re.return;
                        if (xp(re), re === W) {
                          Re = null;
                          break;
                        }
                        if (ne !== null) {
                          ne.return = Ce, Re = ne;
                          break;
                        }
                        Re = Ce;
                      }
                  }
                }
                var Me = S.alternate;
                if (Me !== null) {
                  var Le = Me.child;
                  if (Le !== null) {
                    Me.child = null;
                    do {
                      var hn = Le.sibling;
                      Le.sibling = null, Le = hn;
                    } while (Le !== null);
                  }
                }
                Re = S;
              }
            }
            if (S.subtreeFlags & 2064 && _ !== null)
              _.return = S, Re = _;
            else
              e:
                for (; Re !== null; ) {
                  if (S = Re, S.flags & 2048)
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zs(9, S, S.return);
                    }
                  var H = S.sibling;
                  if (H !== null) {
                    H.return = S.return, Re = H;
                    break e;
                  }
                  Re = S.return;
                }
          }
          var U = n.current;
          for (Re = U; Re !== null; ) {
            _ = Re;
            var I = _.child;
            if (_.subtreeFlags & 2064 && I !== null)
              I.return = _, Re = I;
            else
              e:
                for (_ = U; Re !== null; ) {
                  if (R = Re, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fs(9, R);
                      }
                    } catch (Ue) {
                      cn(R, R.return, Ue);
                    }
                  if (R === _) {
                    Re = null;
                    break e;
                  }
                  var se = R.sibling;
                  if (se !== null) {
                    se.return = R.return, Re = se;
                    break e;
                  }
                  Re = R.return;
                }
          }
          if (ft = v, jr(), $a && typeof $a.onPostCommitFiberRoot == "function")
            try {
              $a.onPostCommitFiberRoot(ts, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        Nt = u, dr.transition = r;
      }
    }
    return !1;
  }
  function wm(n, r, u) {
    r = mu(u, r), r = im(n, r, 1), n = El(n, r, 1), r = pr(), n !== null && (Zl(n, 1, r), vr(n, r));
  }
  function cn(n, r, u) {
    if (n.tag === 3)
      wm(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          wm(r, n, u);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (hi === null || !hi.has(f))) {
            n = mu(u, n), n = Ns(r, n, 1), r = El(r, n, 1), n = pr(), r !== null && (Zl(r, 1, n), vr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function y0(n, r, u) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = pr(), n.pingedLanes |= n.suspendedLanes & u, nn === n && (Yn & u) === u && (Mn === 4 || Mn === 3 && (Yn & 130023424) === Yn && 500 > Et() - bp ? xo(n, 0) : Cu |= u), vr(n, r);
  }
  function bf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ko, Ko <<= 1, !(Ko & 130023424) && (Ko = 4194304)) : r = 1);
    var u = pr();
    n = ji(n, r), n !== null && (Zl(n, r, u), vr(n, u));
  }
  function g0(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), bf(n, u);
  }
  function S0(n, r) {
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
        throw Error(s(314));
    }
    f !== null && f.delete(r), bf(n, u);
  }
  var Em;
  Em = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || un.current)
        Sn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Sn = !1, Fi(n, r, u);
        Sn = !!(n.flags & 131072);
      }
    else
      Sn = !1, Bt && r.flags & 1048576 && Jd(r, su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        cr(n, r), n = r.pendingProps;
        var v = Ea(r, Ze.current);
        ve(r, u), v = Cl(null, r, f, n, v, u);
        var S = fo();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kt(f) ? (S = !0, Fc(r)) : S = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, lp(r), v.updater = Wc, r.stateNode = v, v._reactInternals = r, Gc(r, f, n, u), r = om(null, r, f, !0, S, u)) : (r.tag = 0, Bt && S && Hc(r), Dn(null, r, v, u), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (cr(n, r), n = r.pendingProps, v = f._init, f = v(f._payload), r.type = f, v = r.tag = E0(f), n = ia(f, n), v) {
            case 0:
              r = yu(null, r, f, n, u);
              break e;
            case 1:
              r = vp(null, r, f, n, u);
              break e;
            case 11:
              r = bl(null, r, f, n, u);
              break e;
            case 14:
              r = vf(null, r, f, ia(f.type, n), u);
              break e;
          }
          throw Error(s(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), yu(n, r, f, v, u);
      case 1:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), vp(n, r, f, v, u);
      case 3:
        e: {
          if (um(r), n === null)
            throw Error(s(387));
          f = r.pendingProps, S = r.memoizedState, v = S.element, bn(n, r), _l(r, f, null, u);
          var _ = r.memoizedState;
          if (f = _.element, S.isDehydrated)
            if (S = { element: f, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = S, r.memoizedState = S, r.flags & 256) {
              v = mu(Error(s(423)), r), r = mf(n, r, f, u, v);
              break e;
            } else if (f !== v) {
              v = mu(Error(s(424)), r), r = mf(n, r, f, u, v);
              break e;
            } else
              for (Fr = qa(r.stateNode.containerInfo.firstChild), aa = r, Bt = !0, Ca = null, u = rm(r, null, f, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (en(), f === v) {
              r = Qn(n, r, u);
              break e;
            }
            Dn(n, r, f, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ve(r), n === null && Yc(r), f = r.type, v = r.pendingProps, S = n !== null ? n.memoizedProps : null, _ = v.children, ws(f, v) ? _ = null : S !== null && ws(f, S) && (r.flags |= 32), at(n, r), Dn(n, r, _, u), r.child;
      case 6:
        return n === null && Yc(r), null;
      case 13:
        return yp(n, r, u);
      case 4:
        return sp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = fu(r, null, f, u) : Dn(n, r, f, u), r.child;
      case 11:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), bl(n, r, f, v, u);
      case 7:
        return Dn(n, r, r.pendingProps, u), r.child;
      case 8:
        return Dn(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return Dn(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (f = r.type._context, v = r.pendingProps, S = r.memoizedProps, _ = v.value, Dt(ci, f._currentValue), f._currentValue = _, S !== null)
            if (Sa(S.value, _)) {
              if (S.children === v.children && !un.current) {
                r = Qn(n, r, u);
                break e;
              }
            } else
              for (S = r.child, S !== null && (S.return = r); S !== null; ) {
                var R = S.dependencies;
                if (R !== null) {
                  _ = S.child;
                  for (var N = R.firstContext; N !== null; ) {
                    if (N.context === f) {
                      if (S.tag === 1) {
                        N = Ai(-1, u & -u), N.tag = 2;
                        var W = S.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var re = W.pending;
                          re === null ? N.next = N : (N.next = re.next, re.next = N), W.pending = N;
                        }
                      }
                      S.lanes |= u, N = S.alternate, N !== null && (N.lanes |= u), Hn(
                        S.return,
                        u,
                        r
                      ), R.lanes |= u;
                      break;
                    }
                    N = N.next;
                  }
                } else if (S.tag === 10)
                  _ = S.type === r.type ? null : S.child;
                else if (S.tag === 18) {
                  if (_ = S.return, _ === null)
                    throw Error(s(341));
                  _.lanes |= u, R = _.alternate, R !== null && (R.lanes |= u), Hn(_, u, r), _ = S.sibling;
                } else
                  _ = S.child;
                if (_ !== null)
                  _.return = S;
                else
                  for (_ = S; _ !== null; ) {
                    if (_ === r) {
                      _ = null;
                      break;
                    }
                    if (S = _.sibling, S !== null) {
                      S.return = _.return, _ = S;
                      break;
                    }
                    _ = _.return;
                  }
                S = _;
              }
          Dn(n, r, v.children, u), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, f = r.pendingProps.children, ve(r, u), v = pn(v), f = f(v), r.flags |= 1, Dn(n, r, f, u), r.child;
      case 14:
        return f = r.type, v = ia(f, r.pendingProps), v = ia(f.type, v), vf(n, r, f, v, u);
      case 15:
        return Yr(n, r, r.type, r.pendingProps, u);
      case 17:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), cr(n, r), r.tag = 1, Kt(f) ? (n = !0, Fc(r)) : n = !1, ve(r, u), Jv(r, f, v), Gc(r, f, v, u), om(null, r, f, !0, n, u);
      case 19:
        return wp(n, r, u);
      case 22:
        return mo(n, r, u);
    }
    throw Error(s(156, r.tag));
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
  function E0(n) {
    if (typeof n == "function")
      return Lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Je)
        return 11;
      if (n === Pt)
        return 14;
    }
    return 2;
  }
  function Ml(n, r) {
    var u = n.alternate;
    return u === null ? (u = Ma(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Df(n, r, u, f, v, S) {
    var _ = 2;
    if (f = n, typeof n == "function")
      Lp(n) && (_ = 1);
    else if (typeof n == "string")
      _ = 5;
    else
      e:
        switch (n) {
          case ee:
            return To(u.children, v, S, r);
          case xe:
            _ = 8, v |= 8;
            break;
          case de:
            return n = Ma(12, u, r, v | 2), n.elementType = de, n.lanes = S, n;
          case Ae:
            return n = Ma(13, u, r, v), n.elementType = Ae, n.lanes = S, n;
          case et:
            return n = Ma(19, u, r, v), n.elementType = et, n.lanes = S, n;
          case on:
            return Is(u, v, S, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case pe:
                  _ = 10;
                  break e;
                case Qe:
                  _ = 9;
                  break e;
                case Je:
                  _ = 11;
                  break e;
                case Pt:
                  _ = 14;
                  break e;
                case yt:
                  _ = 16, f = null;
                  break e;
              }
            throw Error(s(130, n == null ? n : typeof n, ""));
        }
    return r = Ma(_, u, r, v), r.elementType = n, r.type = f, r.lanes = S, r;
  }
  function To(n, r, u, f) {
    return n = Ma(7, n, f, r), n.lanes = u, n;
  }
  function Is(n, r, u, f) {
    return n = Ma(22, n, f, r), n.elementType = on, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Vs(n, r, u) {
    return n = Ma(6, n, null, r), n.lanes = u, n;
  }
  function bo(n, r, u) {
    return r = Ma(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function _0(n, r, u, f, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _d(0), this.expirationTimes = _d(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _d(0), this.identifierPrefix = f, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, u, f, v, S, _, R, N) {
    return n = new _0(n, r, u, R, N), r === 1 ? (r = 1, S === !0 && (r |= 8)) : r = 0, S = Ma(3, null, null, r), n.current = S, S.stateNode = n, S.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lp(S), n;
  }
  function _m(n, r, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: G, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: u };
  }
  function Up(n) {
    if (!n)
      return si;
    n = n._reactInternals;
    e: {
      if (it(n) !== n || n.tag !== 1)
        throw Error(s(170));
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
      throw Error(s(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Kt(u))
        return xs(n, u, r);
    }
    return r;
  }
  function xm(n, r, u, f, v, S, _, R, N) {
    return n = Rf(u, f, !0, n, v, S, _, R, N), n.context = Up(null), u = n.current, f = pr(), v = wn(u), S = Ai(f, v), S.callback = r ?? null, El(u, S, v), n.current.lanes = v, Zl(n, v, f), vr(n, f), n;
  }
  function $s(n, r, u, f) {
    var v = r.current, S = pr(), _ = wn(v);
    return u = Up(u), r.context === null ? r.context = u : r.pendingContext = u, r = Ai(S, _), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = El(v, r, _), n !== null && (hr(n, v, _, S), Bc(n, v, _)), _;
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
  function Cm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function jp(n, r) {
    Cm(n, r), (n = n.alternate) && Cm(n, r);
  }
  function Tm() {
    return null;
  }
  var Ap = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Mf(n) {
    this._internalRoot = n;
  }
  Ii.prototype.render = Mf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(s(409));
    $s(n, r, null, null);
  }, Ii.prototype.unmount = Mf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      kl(function() {
        $s(null, n, null, null);
      }), r[Li] = null;
    }
  };
  function Ii(n) {
    this._internalRoot = n;
  }
  Ii.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = sv();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Lt.length && r !== 0 && r < Lt[u].priority; u++)
        ;
      Lt.splice(u, 0, n), u === 0 && cv(n);
    }
  };
  function zp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function bm() {
  }
  function x0(n, r, u, f, v) {
    if (v) {
      if (typeof f == "function") {
        var S = f;
        f = function() {
          var W = kf(_);
          S.call(W);
        };
      }
      var _ = xm(r, f, n, 0, null, !1, !1, "", bm);
      return n._reactRootContainer = _, n[Li] = _.current, ou(n.nodeType === 8 ? n.parentNode : n), kl(), _;
    }
    for (; v = n.lastChild; )
      n.removeChild(v);
    if (typeof f == "function") {
      var R = f;
      f = function() {
        var W = kf(N);
        R.call(W);
      };
    }
    var N = Rf(n, 0, !1, null, null, !1, !1, "", bm);
    return n._reactRootContainer = N, n[Li] = N.current, ou(n.nodeType === 8 ? n.parentNode : n), kl(function() {
      $s(r, N, u, f);
    }), N;
  }
  function Nf(n, r, u, f, v) {
    var S = u._reactRootContainer;
    if (S) {
      var _ = S;
      if (typeof v == "function") {
        var R = v;
        v = function() {
          var N = kf(_);
          R.call(N);
        };
      }
      $s(r, _, n, v);
    } else
      _ = x0(u, r, n, v, f);
    return kf(_);
  }
  uv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ql(r.pendingLanes);
          u !== 0 && (ns(r, u | 1), vr(r, Et()), !(ft & 6) && (Tu = Et() + 500, jr()));
        }
        break;
      case 13:
        kl(function() {
          var f = ji(n, 1);
          if (f !== null) {
            var v = pr();
            hr(f, n, 1, v);
          }
        }), jp(n, 1);
    }
  }, wc = function(n) {
    if (n.tag === 13) {
      var r = ji(n, 134217728);
      if (r !== null) {
        var u = pr();
        hr(r, n, 134217728, u);
      }
      jp(n, 134217728);
    }
  }, zt = function(n) {
    if (n.tag === 13) {
      var r = wn(n), u = ji(n, r);
      if (u !== null) {
        var f = pr();
        hr(u, n, r, f);
      }
      jp(n, r);
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
        if (or(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var f = u[r];
            if (f !== n && f.form === n.form) {
              var v = Pe(f);
              if (!v)
                throw Error(s(90));
              ha(f), or(f, v);
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
  }, es = Ru, vc = kl;
  var C0 = { usingClientEntryPoint: !1, Events: [_s, uu, Pe, Wl, Qo, Ru] }, Mu = { findFiberByHostInstance: wa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, T0 = { bundleType: Mu.bundleType, version: Mu.version, rendererPackageName: Mu.rendererPackageName, rendererConfig: Mu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = jn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Mu.findFiberByHostInstance || Tm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lf.isDisabled && Lf.supportsFiber)
      try {
        ts = Lf.inject(T0), $a = Lf;
      } catch {
      }
  }
  return Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0, Aa.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zp(r))
      throw Error(s(200));
    return _m(n, r, null, u);
  }, Aa.createRoot = function(n, r) {
    if (!zp(n))
      throw Error(s(299));
    var u = !1, f = "", v = Ap;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, u, !1, f, v), n[Li] = r.current, ou(n.nodeType === 8 ? n.parentNode : n), new Mf(r);
  }, Aa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(s(188)) : (n = Object.keys(n).join(","), Error(s(268, n)));
    return n = jn(r), n = n === null ? null : n.stateNode, n;
  }, Aa.flushSync = function(n) {
    return kl(n);
  }, Aa.hydrate = function(n, r, u) {
    if (!Of(r))
      throw Error(s(200));
    return Nf(null, n, r, !0, u);
  }, Aa.hydrateRoot = function(n, r, u) {
    if (!zp(n))
      throw Error(s(405));
    var f = u != null && u.hydratedSources || null, v = !1, S = "", _ = Ap;
    if (u != null && (u.unstable_strictMode === !0 && (v = !0), u.identifierPrefix !== void 0 && (S = u.identifierPrefix), u.onRecoverableError !== void 0 && (_ = u.onRecoverableError)), r = xm(r, null, n, 1, u ?? null, v, !1, S, _), n[Li] = r.current, ou(n), f)
      for (n = 0; n < f.length; n++)
        u = f[n], v = u._getVersion, v = v(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, v] : r.mutableSourceEagerHydrationData.push(
          u,
          v
        );
    return new Ii(r);
  }, Aa.render = function(n, r, u) {
    if (!Of(r))
      throw Error(s(200));
    return Nf(null, n, r, !1, u);
  }, Aa.unmountComponentAtNode = function(n) {
    if (!Of(n))
      throw Error(s(40));
    return n._reactRootContainer ? (kl(function() {
      Nf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Li] = null;
      });
    }), !0) : !1;
  }, Aa.unstable_batchedUpdates = Ru, Aa.unstable_renderSubtreeIntoContainer = function(n, r, u, f) {
    if (!Of(u))
      throw Error(s(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(s(38));
    return Nf(n, r, u, !1, f);
  }, Aa.version = "18.2.0-next-9e3b772b8-20220608", Aa;
}
var za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VT;
function nF() {
  return VT || (VT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = kr, o = SD(), s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = !1;
    function h(e) {
      d = e;
    }
    function g(e) {
      if (!d) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        C("warn", e, i);
      }
    }
    function m(e) {
      if (!d) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        C("error", e, i);
      }
    }
    function C(e, t, i) {
      {
        var l = s.ReactDebugCurrentFrame, c = l.getStackAddendum();
        c !== "" && (t += "%s", i = i.concat([c]));
        var p = i.map(function(y) {
          return String(y);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var T = 0, b = 1, k = 2, O = 3, z = 4, B = 5, A = 6, Q = 7, he = 8, we = 9, K = 10, te = 11, Se = 12, oe = 13, G = 14, ee = 15, xe = 16, de = 17, pe = 18, Qe = 19, Je = 21, Ae = 22, et = 23, Pt = 24, yt = 25, on = !0, fe = !1, Fe = !1, Ee = !1, wt = !1, Tt = !0, $n = !1, yr = !1, ri = !0, Cn = !0, pa = !0, ar = /* @__PURE__ */ new Set(), Mr = {}, ai = {};
    function Or(e, t) {
      ha(e, t), ha(e + "Capture", t);
    }
    function ha(e, t) {
      Mr[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Mr[e] = t;
      {
        var i = e.toLowerCase();
        ai[i] = e, e === "onDoubleClick" && (ai.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        ar.add(t[l]);
    }
    var Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function lr(e) {
      try {
        return or(e), !1;
      } catch {
        return !0;
      }
    }
    function or(e) {
      return "" + e;
    }
    function va(e, t) {
      if (lr(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), or(e);
    }
    function Ha(e) {
      if (lr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), or(e);
    }
    function Ti(e, t) {
      if (lr(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), or(e);
    }
    function ii(e, t) {
      if (lr(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), or(e);
    }
    function Pa(e) {
      if (lr(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), or(e);
    }
    function Zr(e) {
      if (lr(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bn(e)), or(e);
    }
    var li = 0, Kr = 1, Ya = 2, mn = 3, Xr = 4, al = 5, Ia = 6, ye = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", He = ye + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ye + "][" + He + "]*$"), Ot = {}, Jt = {};
    function Un(e) {
      return ir.call(Jt, e) ? !0 : ir.call(Ot, e) ? !1 : ot.test(e) ? (Jt[e] = !0, !0) : (Ot[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, i) {
      return t !== null ? t.type === li : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Nr(e, t, i, l) {
      if (i !== null && i.type === li)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (l)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var c = e.toLowerCase().slice(0, 5);
          return c !== "data-" && c !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, i, l) {
      if (t === null || typeof t > "u" || Nr(e, t, i, l))
        return !0;
      if (l)
        return !1;
      if (i !== null)
        switch (i.type) {
          case mn:
            return !t;
          case Xr:
            return t === !1;
          case al:
            return isNaN(t);
          case Ia:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Jr(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function At(e, t, i, l, c, p, y) {
      this.acceptsBooleans = t === Ya || t === mn || t === Xr, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
    }
    var It = {}, Go = [
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
    Go.forEach(function(e) {
      It[e] = new At(
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
      var t = e[0], i = e[1];
      It[t] = new At(
        t,
        Kr,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new At(
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
      It[e] = new At(
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
      It[e] = new At(
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
      It[e] = new At(
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
      It[e] = new At(
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
      It[e] = new At(
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
      It[e] = new At(
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
    var Wl = /[\-\:]([a-z])/g, Qo = function(e) {
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
      var t = e.replace(Wl, Qo);
      It[t] = new At(
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
      var t = e.replace(Wl, Qo);
      It[t] = new At(
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
      var t = e.replace(Wl, Qo);
      It[t] = new At(
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
      It[e] = new At(
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
    It[es] = new At(
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
      It[e] = new At(
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
    var vc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Gl = !1;
    function qo(e) {
      !Gl && vc.test(e) && (Gl = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, i, l) {
      if (l.mustUseProperty) {
        var c = l.propertyName;
        return e[c];
      } else {
        va(i, t), l.sanitizeURL && qo("" + i);
        var p = l.attributeName, y = null;
        if (l.type === Xr) {
          if (e.hasAttribute(p)) {
            var w = e.getAttribute(p);
            return w === "" ? !0 : Yt(t, i, l, !1) ? w : w === "" + i ? i : w;
          }
        } else if (e.hasAttribute(p)) {
          if (Yt(t, i, l, !1))
            return e.getAttribute(p);
          if (l.type === mn)
            return i;
          y = e.getAttribute(p);
        }
        return Yt(t, i, l, !1) ? y === null ? i : y : y === "" + i ? i : y;
      }
    }
    function Zo(e, t, i, l) {
      {
        if (!Un(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var c = e.getAttribute(t);
        return va(i, t), c === "" + i ? i : c;
      }
    }
    function oi(e, t, i, l) {
      var c = Jr(t);
      if (!dn(t, c, l)) {
        if (Yt(t, i, c, l) && (i = null), l || c === null) {
          if (Un(t)) {
            var p = t;
            i === null ? e.removeAttribute(p) : (va(i, t), e.setAttribute(p, "" + i));
          }
          return;
        }
        var y = c.mustUseProperty;
        if (y) {
          var w = c.propertyName;
          if (i === null) {
            var E = c.type;
            e[w] = E === mn ? !1 : "";
          } else
            e[w] = i;
          return;
        }
        var x = c.attributeName, D = c.attributeNamespace;
        if (i === null)
          e.removeAttribute(x);
        else {
          var j = c.type, L;
          j === mn || j === Xr && i === !0 ? L = "" : (va(i, x), L = "" + i, c.sanitizeURL && qo(L.toString())), D ? e.setAttributeNS(D, x, L) : e.setAttribute(x, L);
        }
      }
    }
    var il = Symbol.for("react.element"), ea = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), ll = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), ge = Symbol.for("react.context"), Ie = Symbol.for("react.forward_ref"), it = Symbol.for("react.suspense"), gt = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), jn = Symbol.for("react.scope"), qt = Symbol.for("react.debug_trace_mode"), Zt = Symbol.for("react.offscreen"), gr = Symbol.for("react.legacy_hidden"), ol = Symbol.for("react.cache"), mc = Symbol.for("react.tracing_marker"), Et = Symbol.iterator, Pg = "@@iterator";
    function bi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Et && e[Et] || e[Pg];
      return typeof t == "function" ? t : null;
    }
    var ct = Object.assign, ul = 0, av, Sd, ts, $a, iv, ma, lv;
    function ov() {
    }
    ov.__reactDisabledLog = !0;
    function Yg() {
      {
        if (ul === 0) {
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
            log: ct({}, e, {
              value: av
            }),
            info: ct({}, e, {
              value: Sd
            }),
            warn: ct({}, e, {
              value: ts
            }),
            error: ct({}, e, {
              value: $a
            }),
            group: ct({}, e, {
              value: iv
            }),
            groupCollapsed: ct({}, e, {
              value: ma
            }),
            groupEnd: ct({}, e, {
              value: lv
            })
          });
        }
        ul < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ko = s.ReactCurrentDispatcher, ql;
    function Ba(e, t, i) {
      {
        if (ql === void 0)
          try {
            throw Error();
          } catch (c) {
            var l = c.stack.trim().match(/\n( *(at )?)/);
            ql = l && l[1] || "";
          }
        return `
` + ql + e;
      }
    }
    var wd = !1, gc;
    {
      var Ed = typeof WeakMap == "function" ? WeakMap : Map;
      gc = new Ed();
    }
    function Sc(e, t) {
      if (!e || wd)
        return "";
      {
        var i = gc.get(e);
        if (i !== void 0)
          return i;
      }
      var l;
      wd = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = Ko.current, Ko.current = null, Yg();
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
          for (var w = $.stack.split(`
`), E = l.stack.split(`
`), x = w.length - 1, D = E.length - 1; x >= 1 && D >= 0 && w[x] !== E[D]; )
            D--;
          for (; x >= 1 && D >= 0; x--, D--)
            if (w[x] !== E[D]) {
              if (x !== 1 || D !== 1)
                do
                  if (x--, D--, D < 0 || w[x] !== E[D]) {
                    var j = `
` + w[x].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && gc.set(e, j), j;
                  }
                while (x >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        wd = !1, Ko.current = p, yc(), Error.prepareStackTrace = c;
      }
      var L = e ? e.displayName || e.name : "", V = L ? Ba(L) : "";
      return typeof e == "function" && gc.set(e, V), V;
    }
    function _d(e, t, i) {
      return Sc(e, !0);
    }
    function Zl(e, t, i) {
      return Sc(e, !1);
    }
    function Ig(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ns(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Sc(e, Ig(e));
      if (typeof e == "string")
        return Ba(e);
      switch (e) {
        case it:
          return Ba("Suspense");
        case gt:
          return Ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ie:
            return Zl(e.render);
          case lt:
            return ns(e.type, t, i);
          case Be: {
            var l = e, c = l._payload, p = l._init;
            try {
              return ns(p(c), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Nt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return Ba(e.type);
        case xe:
          return Ba("Lazy");
        case oe:
          return Ba("Suspense");
        case Qe:
          return Ba("SuspenseList");
        case T:
        case k:
        case ee:
          return Zl(e.type);
        case te:
          return Zl(e.type.render);
        case b:
          return _d(e.type);
        default:
          return "";
      }
    }
    function xd(e) {
      try {
        var t = "", i = e;
        do
          t += Nt(i), i = i.return;
        while (i);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function uv(e, t, i) {
      var l = e.displayName;
      if (l)
        return l;
      var c = t.displayName || t.name || "";
      return c !== "" ? i + "(" + c + ")" : i;
    }
    function wc(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
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
        case ll:
          return "StrictMode";
        case it:
          return "Suspense";
        case gt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ge:
            var t = e;
            return wc(t) + ".Consumer";
          case ae:
            var i = e;
            return wc(i._context) + ".Provider";
          case Ie:
            return uv(e, e.render, "ForwardRef");
          case lt:
            var l = e.displayName || null;
            return l !== null ? l : zt(e.type) || "Memo";
          case Be: {
            var c = e, p = c._payload, y = c._init;
            try {
              return zt(y(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function sv(e, t, i) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? i + "(" + l + ")" : i);
    }
    function Cd(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case Pt:
          return "Cache";
        case we:
          var l = i;
          return Cd(l) + ".Consumer";
        case K:
          var c = i;
          return Cd(c._context) + ".Provider";
        case pe:
          return "DehydratedFragment";
        case te:
          return sv(i, i.render, "ForwardRef");
        case Q:
          return "Fragment";
        case B:
          return i;
        case z:
          return "Portal";
        case O:
          return "Root";
        case A:
          return "Text";
        case xe:
          return zt(i);
        case he:
          return i === ll ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case Se:
          return "Profiler";
        case Je:
          return "Scope";
        case oe:
          return "Suspense";
        case Qe:
          return "SuspenseList";
        case yt:
          return "TracingMarker";
        case b:
        case T:
        case de:
        case k:
        case G:
        case ee:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var rs = s.ReactDebugCurrentFrame, yn = null, ya = !1;
    function ga() {
      {
        if (yn === null)
          return null;
        var e = yn._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function as() {
      return yn === null ? "" : xd(yn);
    }
    function Tn() {
      rs.getCurrentStack = null, yn = null, ya = !1;
    }
    function Lt(e) {
      rs.getCurrentStack = e === null ? null : as, yn = e, ya = !1;
    }
    function Vg() {
      return yn;
    }
    function Wa(e) {
      ya = e;
    }
    function ur(e) {
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
    function Xo(e, t) {
      cv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Td(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
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
    function Jo(e) {
      var t = Td(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Zr(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var c = i.get, p = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return c.call(this);
          },
          set: function(w) {
            Zr(w), l = "" + w, p.call(this, w);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var y = {
          getValue: function() {
            return l;
          },
          setValue: function(w) {
            Zr(w), l = "" + w;
          },
          stopTracking: function() {
            is(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Kl(e) {
      fv(e) || (e._valueTracker = Jo(e));
    }
    function dv(e) {
      if (!e)
        return !1;
      var t = fv(e);
      if (!t)
        return !0;
      var i = t.getValue(), l = ls(e);
      return l !== i ? (t.setValue(l), !0) : !1;
    }
    function Ec(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var _c = !1, os = !1, xc = !1, bd = !1;
    function Di(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function us(e, t) {
      var i = e, l = t.checked, c = ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? i._wrapperState.initialChecked
      });
      return c;
    }
    function ss(e, t) {
      Xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !os && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), os = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_c && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), _c = !0);
      var i = e, l = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: sl(t.value != null ? t.value : l),
        controlled: Di(t)
      };
    }
    function Dd(e, t) {
      var i = e, l = t.checked;
      l != null && oi(i, "checked", l, !1);
    }
    function eu(e, t) {
      var i = e;
      {
        var l = Di(t);
        !i._wrapperState.controlled && l && !bd && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bd = !0), i._wrapperState.controlled && !l && !xc && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xc = !0);
      }
      Dd(e, t);
      var c = sl(t.value), p = t.type;
      if (c != null)
        p === "number" ? (c === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != c) && (i.value = ur(c)) : i.value !== ur(c) && (i.value = ur(c));
      else if (p === "submit" || p === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? cl(i, t.type, c) : t.hasOwnProperty("defaultValue") && cl(i, t.type, sl(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function cs(e, t, i) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var c = t.type, p = c === "submit" || c === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var y = ur(l._wrapperState.initialValue);
        i || y !== l.value && (l.value = y), l.defaultValue = y;
      }
      var w = l.name;
      w !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, w !== "" && (l.name = w);
    }
    function pv(e, t) {
      var i = e;
      eu(i, t), ta(i, t);
    }
    function ta(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        va(i, "name");
        for (var c = l.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), p = 0; p < c.length; p++) {
          var y = c[p];
          if (!(y === e || y.form !== e.form)) {
            var w = Vm(y);
            if (!w)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dv(y), eu(y, w);
          }
        }
      }
    }
    function cl(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ec(e.ownerDocument) !== e) && (i == null ? e.defaultValue = ur(e._wrapperState.initialValue) : e.defaultValue !== ur(i) && (e.defaultValue = ur(i)));
    }
    var Cc = !1, tu = !1, hv = !1;
    function Tc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? a.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || tu || (tu = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (hv || (hv = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Cc && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Cc = !0);
    }
    function Rd(e, t) {
      t.value != null && e.setAttribute("value", ur(sl(t.value)));
    }
    var fs = Array.isArray;
    function An(e) {
      return fs(e);
    }
    var bc;
    bc = !1;
    function vv() {
      var e = ga();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var mv = ["value", "defaultValue"];
    function $g(e) {
      {
        Xo("select", e);
        for (var t = 0; t < mv.length; t++) {
          var i = mv[t];
          if (e[i] != null) {
            var l = An(e[i]);
            e.multiple && !l ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, vv()) : !e.multiple && l && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, vv());
          }
        }
      }
    }
    function fl(e, t, i, l) {
      var c = e.options;
      if (t) {
        for (var p = i, y = {}, w = 0; w < p.length; w++)
          y["$" + p[w]] = !0;
        for (var E = 0; E < c.length; E++) {
          var x = y.hasOwnProperty("$" + c[E].value);
          c[E].selected !== x && (c[E].selected = x), x && l && (c[E].defaultSelected = !0);
        }
      } else {
        for (var D = ur(sl(i)), j = null, L = 0; L < c.length; L++) {
          if (c[L].value === D) {
            c[L].selected = !0, l && (c[L].defaultSelected = !0);
            return;
          }
          j === null && !c[L].disabled && (j = c[L]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function kd(e, t) {
      return ct({}, t, {
        value: void 0
      });
    }
    function yv(e, t) {
      var i = e;
      $g(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bc && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bc = !0);
    }
    function Bg(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var l = t.value;
      l != null ? fl(i, !!t.multiple, l, !1) : t.defaultValue != null && fl(i, !!t.multiple, t.defaultValue, !0);
    }
    function Wg(e, t) {
      var i = e, l = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var c = t.value;
      c != null ? fl(i, !!t.multiple, c, !1) : l !== !!t.multiple && (t.defaultValue != null ? fl(i, !!t.multiple, t.defaultValue, !0) : fl(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Gg(e, t) {
      var i = e, l = t.value;
      l != null && fl(i, !!t.multiple, l, !1);
    }
    var Md = !1;
    function Od(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ur(i._wrapperState.initialValue)
      });
      return l;
    }
    function gv(e, t) {
      var i = e;
      Xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Md && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component"), Md = !0);
      var l = t.value;
      if (l == null) {
        var c = t.children, p = t.defaultValue;
        if (c != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (p != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (An(c)) {
              if (c.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              c = c[0];
            }
            p = c;
          }
        }
        p == null && (p = ""), l = p;
      }
      i._wrapperState = {
        initialValue: sl(l)
      };
    }
    function Sv(e, t) {
      var i = e, l = sl(t.value), c = sl(t.defaultValue);
      if (l != null) {
        var p = ur(l);
        p !== i.value && (i.value = p), t.defaultValue == null && i.defaultValue !== p && (i.defaultValue = p);
      }
      c != null && (i.defaultValue = ur(c));
    }
    function wv(e, t) {
      var i = e, l = i.textContent;
      l === i._wrapperState.initialValue && l !== "" && l !== null && (i.value = l);
    }
    function Nd(e, t) {
      Sv(e, t);
    }
    var Ri = "http://www.w3.org/1999/xhtml", Qg = "http://www.w3.org/1998/Math/MathML", Ld = "http://www.w3.org/2000/svg";
    function Dc(e) {
      switch (e) {
        case "svg":
          return Ld;
        case "math":
          return Qg;
        default:
          return Ri;
      }
    }
    function Ud(e, t) {
      return e == null || e === Ri ? Dc(t) : e === Ld && t === "foreignObject" ? Ri : e;
    }
    var qg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, l, c) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, l, c);
        });
      } : e;
    }, Rc, Ev = qg(function(e, t) {
      if (e.namespaceURI === Ld && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Lr = 1, ki = 3, gn = 8, Ga = 9, Xl = 11, kc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === ki) {
          i.nodeValue = t;
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
    }, nu = {
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
    Object.keys(nu).forEach(function(e) {
      Cv.forEach(function(t) {
        nu[xv(t, e)] = nu[e];
      });
    });
    function Mc(e, t, i) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !i && typeof t == "number" && t !== 0 && !(nu.hasOwnProperty(e) && nu[e]) ? t + "px" : (ii(t, e), ("" + t).trim());
    }
    var ru = /([A-Z])/g, Zg = /^ms-/;
    function Kg(e) {
      return e.replace(ru, "-$1").toLowerCase().replace(Zg, "-ms-");
    }
    var Tv = function() {
    };
    {
      var bv = /^(?:webkit|moz|o)[A-Z]/, Dv = /^-ms-/, ds = /-(.)/g, au = /;\s*$/, iu = {}, lu = {}, Rv = !1, jd = !1, Ad = function(e) {
        return e.replace(ds, function(t, i) {
          return i.toUpperCase();
        });
      }, zd = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ad(e.replace(Dv, "ms-"))
        ));
      }, kv = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Mv = function(e, t) {
        lu.hasOwnProperty(t) && lu[t] || (lu[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(au, "")));
      }, Ov = function(e, t) {
        Rv || (Rv = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Xg = function(e, t) {
        jd || (jd = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Tv = function(e, t) {
        e.indexOf("-") > -1 ? zd(e) : bv.test(e) ? kv(e) : au.test(t) && Mv(e, t), typeof t == "number" && (isNaN(t) ? Ov(e, t) : isFinite(t) || Xg(e, t));
      };
    }
    var Jg = Tv;
    function e0(e) {
      {
        var t = "", i = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var c = e[l];
            if (c != null) {
              var p = l.indexOf("--") === 0;
              t += i + (p ? l : Kg(l)) + ":", t += Mc(l, c, p), i = ";";
            }
          }
        return t || null;
      }
    }
    function Nv(e, t) {
      var i = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var c = l.indexOf("--") === 0;
          c || Jg(l, t[l]);
          var p = Mc(l, t[l], c);
          l === "float" && (l = "cssFloat"), c ? i.setProperty(l, p) : i[l] = p;
        }
    }
    function t0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sa(e) {
      var t = {};
      for (var i in e)
        for (var l = _v[i] || [i], c = 0; c < l.length; c++)
          t[l[c]] = i;
      return t;
    }
    function ps(e, t) {
      {
        if (!t)
          return;
        var i = Sa(e), l = Sa(t), c = {};
        for (var p in i) {
          var y = i[p], w = l[p];
          if (w && y !== w) {
            var E = y + "," + w;
            if (c[E])
              continue;
            c[E] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", t0(e[y]) ? "Removing" : "Updating", y, w);
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
    }, Uv = ct({
      menuitem: !0
    }, Lv), jv = "__html";
    function Oc(e, t) {
      if (t) {
        if (Uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(jv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
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
    }, Av = {
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
    }, Qa = {}, Fd = new RegExp("^(aria)-[" + He + "]*$"), hs = new RegExp("^(aria)[A-Z][" + He + "]*$");
    function Hd(e, t) {
      {
        if (ir.call(Qa, t) && Qa[t])
          return !0;
        if (hs.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), l = Av.hasOwnProperty(i) ? i : null;
          if (l == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Qa[t] = !0, !0;
          if (t !== l)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Qa[t] = !0, !0;
        }
        if (Fd.test(t)) {
          var c = t.toLowerCase(), p = Av.hasOwnProperty(c) ? c : null;
          if (p == null)
            return Qa[t] = !0, !1;
          if (t !== p)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), Qa[t] = !0, !0;
        }
      }
      return !0;
    }
    function zv(e, t) {
      {
        var i = [];
        for (var l in t) {
          var c = Hd(e, l);
          c || i.push(l);
        }
        var p = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : i.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function Lc(e, t) {
      Mi(e, t) || zv(e, t);
    }
    var Jl = !1;
    function Pd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Yd = function() {
    };
    {
      var zn = {}, Id = /^on./, Fv = /^on[^A-Z]/, Hv = new RegExp("^(aria)-[" + He + "]*$"), Pv = new RegExp("^(aria)[A-Z][" + He + "]*$");
      Yd = function(e, t, i, l) {
        if (ir.call(zn, t) && zn[t])
          return !0;
        var c = t.toLowerCase();
        if (c === "onfocusin" || c === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (l != null) {
          var p = l.registrationNameDependencies, y = l.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var w = y.hasOwnProperty(c) ? y[c] : null;
          if (w != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, w), zn[t] = !0, !0;
          if (Id.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Id.test(t))
          return Fv.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Hv.test(t) || Pv.test(t))
          return !0;
        if (c === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (c === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (c === "is" && i !== null && i !== void 0 && typeof i != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), zn[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var E = Jr(t), x = E !== null && E.type === li;
        if (Nc.hasOwnProperty(c)) {
          var D = Nc[c];
          if (D !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, D), zn[t] = !0, !0;
        } else if (!x && t !== c)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, c), zn[t] = !0, !0;
        return typeof i == "boolean" && Nr(t, i, E, !1) ? (i ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), zn[t] = !0, !0) : x ? !0 : Nr(t, i, E, !1) ? (zn[t] = !0, !1) : ((i === "false" || i === "true") && E !== null && E.type === mn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), zn[t] = !0), !0);
      };
    }
    var Yv = function(e, t, i) {
      {
        var l = [];
        for (var c in t) {
          var p = Yd(e, c, t[c], i);
          p || l.push(c);
        }
        var y = l.map(function(w) {
          return "`" + w + "`";
        }).join(", ");
        l.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : l.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function Iv(e, t, i) {
      Mi(e, t) || Yv(e, t, i);
    }
    var Oi = 1, vs = 2, eo = 4, n0 = Oi | vs | eo, ms = null;
    function ys(e) {
      ms !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ms = e;
    }
    function r0() {
      ms === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ms = null;
    }
    function Vv(e) {
      return e === ms;
    }
    function Uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ki ? t.parentNode : t;
    }
    var Ft = null, dl = null, Ni = null;
    function ou(e) {
      var t = Lu(e);
      if (t) {
        if (typeof Ft != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var l = Vm(i);
          Ft(t.stateNode, t.type, l);
        }
      }
    }
    function $v(e) {
      Ft = e;
    }
    function jc(e) {
      dl ? Ni ? Ni.push(e) : Ni = [e] : dl = e;
    }
    function gs() {
      return dl !== null || Ni !== null;
    }
    function Ss() {
      if (dl) {
        var e = dl, t = Ni;
        if (dl = null, Ni = null, ou(e), t)
          for (var i = 0; i < t.length; i++)
            ou(t[i]);
      }
    }
    var to = function(e, t) {
      return e(t);
    }, Vd = function() {
    }, $d = !1;
    function a0() {
      var e = gs();
      e && (Vd(), Ss());
    }
    function Bd(e, t, i) {
      if ($d)
        return e(t, i);
      $d = !0;
      try {
        return to(e, t, i);
      } finally {
        $d = !1, a0();
      }
    }
    function Ac(e, t, i) {
      to = e, Vd = i;
    }
    function zc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Wd(e, t, i) {
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
          return !!(i.disabled && zc(t));
        default:
          return !1;
      }
    }
    function no(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var l = Vm(i);
      if (l === null)
        return null;
      var c = l[t];
      if (Wd(t, e.type, l))
        return null;
      if (c && typeof c != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof c + "` type.");
      return c;
    }
    var ws = !1;
    if (Ln)
      try {
        var ro = {};
        Object.defineProperty(ro, "passive", {
          get: function() {
            ws = !0;
          }
        }), window.addEventListener("test", ro, ro), window.removeEventListener("test", ro, ro);
      } catch {
        ws = !1;
      }
    function Bv(e, t, i, l, c, p, y, w, E) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, x);
      } catch (D) {
        this.onError(D);
      }
    }
    var Gd = Bv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Qd = document.createElement("react");
      Gd = function(t, i, l, c, p, y, w, E, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var D = document.createEvent("Event"), j = !1, L = !0, V = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function q() {
          Qd.removeEventListener(Z, Ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var be = Array.prototype.slice.call(arguments, 3);
        function Ye() {
          j = !0, q(), i.apply(l, be), L = !1;
        }
        var je, mt = !1, dt = !1;
        function P(Y) {
          if (je = Y.error, mt = !0, je === null && Y.colno === 0 && Y.lineno === 0 && (dt = !0), Y.defaultPrevented && je != null && typeof je == "object")
            try {
              je._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", P), Qd.addEventListener(Z, Ye, !1), D.initEvent(Z, !1, !1), Qd.dispatchEvent(D), $ && Object.defineProperty(window, "event", $), j && L && (mt ? dt && (je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(je)), window.removeEventListener("error", P), !j)
          return q(), Bv.apply(this, arguments);
      };
    }
    var i0 = Gd, pl = !1, qa = null, Es = !1, hl = null, ui = {
      onError: function(e) {
        pl = !0, qa = e;
      }
    };
    function ao(e, t, i, l, c, p, y, w, E) {
      pl = !1, qa = null, i0.apply(ui, arguments);
    }
    function Li(e, t, i, l, c, p, y, w, E) {
      if (ao.apply(this, arguments), pl) {
        var x = Zd();
        Es || (Es = !0, hl = x);
      }
    }
    function qd() {
      if (Es) {
        var e = hl;
        throw Es = !1, hl = null, e;
      }
    }
    function l0() {
      return pl;
    }
    function Zd() {
      if (pl) {
        var e = qa;
        return pl = !1, qa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wa(e) {
      return e._reactInternals;
    }
    function _s(e) {
      return e._reactInternals !== void 0;
    }
    function uu(e, t) {
      e._reactInternals = t;
    }
    var Pe = (
      /*                      */
      0
    ), vl = (
      /*                */
      1
    ), $t = (
      /*                    */
      2
    ), rt = (
      /*                       */
      4
    ), bt = (
      /*                */
      16
    ), Dt = (
      /*                 */
      32
    ), si = (
      /*                     */
      64
    ), Ze = (
      /*                   */
      128
    ), un = (
      /*            */
      256
    ), Ur = (
      /*                          */
      512
    ), Ea = (
      /*                     */
      1024
    ), Kt = (
      /*                      */
      2048
    ), _a = (
      /*                    */
      4096
    ), ml = (
      /*                   */
      8192
    ), xs = (
      /*             */
      16384
    ), Fc = Kt | rt | si | Ur | Ea | xs, Wv = (
      /*               */
      32767
    ), na = (
      /*                   */
      32768
    ), Fn = (
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
    ), jr = (
      /*                 */
      4194304
    ), yl = (
      /*                */
      8388608
    ), Ar = (
      /*               */
      16777216
    ), io = (
      /*              */
      33554432
    ), su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      rt | Ea | 0
    ), zr = $t | rt | bt | Dt | Ur | _a | ml, sr = rt | si | Ur | ml, xa = Kt | bt, Wn = jr | yl | Xd, Ui = s.ReactCurrentOwner;
    function ra(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & ($t | _a)) !== Pe && (i = t.return), l = t.return;
        while (l);
      }
      return t.tag === O ? i : null;
    }
    function Jd(e) {
      if (e.tag === oe) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Hc(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function ep(e) {
      return ra(e) === e;
    }
    function aa(e) {
      {
        var t = Ui.current;
        if (t !== null && t.tag === b) {
          var i = t, l = i.stateNode;
          l._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(i) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var c = wa(e);
      return c ? ra(c) === c : !1;
    }
    function Fr(e) {
      if (ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Bt(e) {
      var t = e.alternate;
      if (!t) {
        var i = ra(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var l = e, c = t; ; ) {
        var p = l.return;
        if (p === null)
          break;
        var y = p.alternate;
        if (y === null) {
          var w = p.return;
          if (w !== null) {
            l = c = w;
            continue;
          }
          break;
        }
        if (p.child === y.child) {
          for (var E = p.child; E; ) {
            if (E === l)
              return Fr(p), e;
            if (E === c)
              return Fr(p), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== c.return)
          l = p, c = y;
        else {
          for (var x = !1, D = p.child; D; ) {
            if (D === l) {
              x = !0, l = p, c = y;
              break;
            }
            if (D === c) {
              x = !0, c = p, l = y;
              break;
            }
            D = D.sibling;
          }
          if (!x) {
            for (D = y.child; D; ) {
              if (D === l) {
                x = !0, l = y, c = p;
                break;
              }
              if (D === c) {
                x = !0, c = y, l = p;
                break;
              }
              D = D.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== c)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Ca(e) {
      var t = Bt(e);
      return t !== null ? tp(t) : null;
    }
    function tp(e) {
      if (e.tag === B || e.tag === A)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = tp(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function Gv(e) {
      var t = Bt(e);
      return t !== null ? Pc(t) : null;
    }
    function Pc(e) {
      if (e.tag === B || e.tag === A)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== z) {
          var i = Pc(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var Yc = o.unstable_scheduleCallback, Qv = o.unstable_cancelCallback, Ic = o.unstable_shouldYield, qv = o.unstable_requestPaint, en = o.unstable_now, np = o.unstable_getCurrentPriorityLevel, Vc = o.unstable_ImmediatePriority, ia = o.unstable_UserBlockingPriority, ci = o.unstable_NormalPriority, $c = o.unstable_LowPriority, gl = o.unstable_IdlePriority, rp = o.unstable_yieldValue, ap = o.unstable_setDisableYieldValue, Sl = null, Hn = null, ve = null, pn = !1, Gn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ip(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ri && (e = ct({}, e, {
          getLaneLabelMap: El,
          injectProfilingHooks: Ai
        })), Sl = t.inject(e), Hn = t;
      } catch (i) {
        m("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function Zv(e, t) {
      if (Hn && typeof Hn.onScheduleFiberRoot == "function")
        try {
          Hn.onScheduleFiberRoot(Sl, e, t);
        } catch (i) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", i));
        }
    }
    function ji(e, t) {
      if (Hn && typeof Hn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & Ze) === Ze;
          if (Cn) {
            var l;
            switch (t) {
              case cr:
                l = Vc;
                break;
              case Qn:
                l = ia;
                break;
              case Fi:
                l = ci;
                break;
              case Ls:
                l = gl;
                break;
              default:
                l = ci;
                break;
            }
            Hn.onCommitFiberRoot(Sl, e, l, i);
          }
        } catch (c) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", c));
        }
    }
    function wl(e) {
      if (Hn && typeof Hn.onPostCommitFiberRoot == "function")
        try {
          Hn.onPostCommitFiberRoot(Sl, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function lp(e) {
      if (Hn && typeof Hn.onCommitFiberUnmount == "function")
        try {
          Hn.onCommitFiberUnmount(Sl, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function bn(e) {
      if (typeof rp == "function" && (ap(e), h(e)), Hn && typeof Hn.setStrictMode == "function")
        try {
          Hn.setStrictMode(Sl, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Ai(e) {
      ve = e;
    }
    function El() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Wt; i++) {
          var l = o0(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Bc(e) {
      ve !== null && typeof ve.markCommitStarted == "function" && ve.markCommitStarted(e);
    }
    function op() {
      ve !== null && typeof ve.markCommitStopped == "function" && ve.markCommitStopped();
    }
    function _l(e) {
      ve !== null && typeof ve.markComponentRenderStarted == "function" && ve.markComponentRenderStarted(e);
    }
    function lo() {
      ve !== null && typeof ve.markComponentRenderStopped == "function" && ve.markComponentRenderStopped();
    }
    function Kv(e) {
      ve !== null && typeof ve.markComponentPassiveEffectMountStarted == "function" && ve.markComponentPassiveEffectMountStarted(e);
    }
    function up() {
      ve !== null && typeof ve.markComponentPassiveEffectMountStopped == "function" && ve.markComponentPassiveEffectMountStopped();
    }
    function Wc(e) {
      ve !== null && typeof ve.markComponentPassiveEffectUnmountStarted == "function" && ve.markComponentPassiveEffectUnmountStarted(e);
    }
    function Xv() {
      ve !== null && typeof ve.markComponentPassiveEffectUnmountStopped == "function" && ve.markComponentPassiveEffectUnmountStopped();
    }
    function Jv(e) {
      ve !== null && typeof ve.markComponentLayoutEffectMountStarted == "function" && ve.markComponentLayoutEffectMountStarted(e);
    }
    function em() {
      ve !== null && typeof ve.markComponentLayoutEffectMountStopped == "function" && ve.markComponentLayoutEffectMountStopped();
    }
    function Gc(e) {
      ve !== null && typeof ve.markComponentLayoutEffectUnmountStarted == "function" && ve.markComponentLayoutEffectUnmountStarted(e);
    }
    function cu() {
      ve !== null && typeof ve.markComponentLayoutEffectUnmountStopped == "function" && ve.markComponentLayoutEffectUnmountStopped();
    }
    function Qc(e, t, i) {
      ve !== null && typeof ve.markComponentErrored == "function" && ve.markComponentErrored(e, t, i);
    }
    function tm(e, t, i) {
      ve !== null && typeof ve.markComponentSuspended == "function" && ve.markComponentSuspended(e, t, i);
    }
    function nm(e) {
      ve !== null && typeof ve.markLayoutEffectsStarted == "function" && ve.markLayoutEffectsStarted(e);
    }
    function fu() {
      ve !== null && typeof ve.markLayoutEffectsStopped == "function" && ve.markLayoutEffectsStopped();
    }
    function rm(e) {
      ve !== null && typeof ve.markPassiveEffectsStarted == "function" && ve.markPassiveEffectsStarted(e);
    }
    function Ts() {
      ve !== null && typeof ve.markPassiveEffectsStopped == "function" && ve.markPassiveEffectsStopped();
    }
    function Za(e) {
      ve !== null && typeof ve.markRenderStarted == "function" && ve.markRenderStarted(e);
    }
    function bs() {
      ve !== null && typeof ve.markRenderYielded == "function" && ve.markRenderYielded();
    }
    function du() {
      ve !== null && typeof ve.markRenderStopped == "function" && ve.markRenderStopped();
    }
    function oo(e) {
      ve !== null && typeof ve.markRenderScheduled == "function" && ve.markRenderScheduled(e);
    }
    function sp(e, t) {
      ve !== null && typeof ve.markForceUpdateScheduled == "function" && ve.markForceUpdateScheduled(e, t);
    }
    function xl(e, t) {
      ve !== null && typeof ve.markStateUpdateScheduled == "function" && ve.markStateUpdateScheduled(e, t);
    }
    var Ve = (
      /*                         */
      0
    ), ut = (
      /*                 */
      1
    ), We = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), Ta = (
      /*              */
      16
    ), qc = Math.clz32 ? Math.clz32 : uo, Zc = Math.log, cp = Math.LN2;
    function uo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zc(t) / cp | 0) | 0;
    }
    var Wt = 31, X = (
      /*                        */
      0
    ), ht = (
      /*                          */
      0
    ), Ge = (
      /*                        */
      1
    ), fi = (
      /*    */
      2
    ), la = (
      /*             */
      4
    ), so = (
      /*            */
      8
    ), Gt = (
      /*                     */
      16
    ), co = (
      /*                */
      32
    ), Cl = (
      /*                       */
      4194240
    ), fo = (
      /*                        */
      64
    ), ba = (
      /*                        */
      128
    ), Hr = (
      /*                        */
      256
    ), po = (
      /*                        */
      512
    ), Ds = (
      /*                        */
      1024
    ), Rs = (
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
    ), zi = (
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
    ), fp = zi, pu = (
      /*          */
      134217728
    ), cf = (
      /*                          */
      268435455
    ), hu = (
      /*               */
      268435456
    ), Tl = (
      /*                        */
      536870912
    ), Pr = (
      /*                   */
      1073741824
    );
    function o0(e) {
      {
        if (e & Ge)
          return "Sync";
        if (e & fi)
          return "InputContinuousHydration";
        if (e & la)
          return "InputContinuous";
        if (e & so)
          return "DefaultHydration";
        if (e & Gt)
          return "Default";
        if (e & co)
          return "TransitionHydration";
        if (e & Cl)
          return "Transition";
        if (e & vo)
          return "Retry";
        if (e & pu)
          return "SelectiveHydration";
        if (e & hu)
          return "IdleHydration";
        if (e & Tl)
          return "Idle";
        if (e & Pr)
          return "Offscreen";
      }
    }
    var Ht = -1, ff = fo, df = zi;
    function vu(e) {
      switch (Sn(e)) {
        case Ge:
          return Ge;
        case fi:
          return fi;
        case la:
          return la;
        case so:
          return so;
        case Gt:
          return Gt;
        case co:
          return co;
        case fo:
        case ba:
        case Hr:
        case po:
        case Ds:
        case Rs:
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
          return e & Cl;
        case zi:
        case of:
        case ks:
        case uf:
        case sf:
          return e & vo;
        case pu:
          return pu;
        case hu:
          return hu;
        case Tl:
          return Tl;
        case Pr:
          return Pr;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ms(e, t) {
      var i = e.pendingLanes;
      if (i === X)
        return X;
      var l = X, c = e.suspendedLanes, p = e.pingedLanes, y = i & cf;
      if (y !== X) {
        var w = y & ~c;
        if (w !== X)
          l = vu(w);
        else {
          var E = y & p;
          E !== X && (l = vu(E));
        }
      } else {
        var x = i & ~c;
        x !== X ? l = vu(x) : p !== X && (l = vu(p));
      }
      if (l === X)
        return X;
      if (t !== X && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & c) === X) {
        var D = Sn(l), j = Sn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          D >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          D === Gt && (j & Cl) !== X
        )
          return t;
      }
      (l & la) !== X && (l |= i & Gt);
      var L = e.entangledLanes;
      if (L !== X)
        for (var V = e.entanglements, $ = l & L; $ > 0; ) {
          var q = bl($), be = 1 << q;
          l |= V[q], $ &= ~be;
        }
      return l;
    }
    function am(e, t) {
      for (var i = e.eventTimes, l = Ht; t > 0; ) {
        var c = bl(t), p = 1 << c, y = i[c];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function pf(e, t) {
      switch (e) {
        case Ge:
        case fi:
        case la:
          return t + 250;
        case so:
        case Gt:
        case co:
        case fo:
        case ba:
        case Hr:
        case po:
        case Ds:
        case Rs:
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
        case zi:
        case of:
        case ks:
        case uf:
        case sf:
          return Ht;
        case pu:
        case hu:
        case Tl:
        case Pr:
          return Ht;
        default:
          return m("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function u0(e, t) {
      for (var i = e.pendingLanes, l = e.suspendedLanes, c = e.pingedLanes, p = e.expirationTimes, y = i; y > 0; ) {
        var w = bl(y), E = 1 << w, x = p[w];
        x === Ht ? ((E & l) === X || (E & c) !== X) && (p[w] = pf(E, t)) : x <= t && (e.expiredLanes |= E), y &= ~E;
      }
    }
    function s0(e) {
      return vu(e.pendingLanes);
    }
    function dp(e) {
      var t = e.pendingLanes & ~Pr;
      return t !== X ? t : t & Pr ? Pr : X;
    }
    function mu(e) {
      return (e & Ge) !== X;
    }
    function Os(e) {
      return (e & cf) !== X;
    }
    function hf(e) {
      return (e & vo) === e;
    }
    function c0(e) {
      var t = Ge | la | Gt;
      return (e & t) === X;
    }
    function im(e) {
      return (e & Cl) === e;
    }
    function Ns(e, t) {
      var i = fi | la | so | Gt;
      return (t & i) !== X;
    }
    function lm(e, t) {
      return (t & e.expiredLanes) !== X;
    }
    function pp(e) {
      return (e & Cl) !== X;
    }
    function hp() {
      var e = ff;
      return ff <<= 1, (ff & Cl) === X && (ff = fo), e;
    }
    function f0() {
      var e = df;
      return df <<= 1, (df & vo) === X && (df = zi), e;
    }
    function Sn(e) {
      return e & -e;
    }
    function Dn(e) {
      return Sn(e);
    }
    function bl(e) {
      return 31 - qc(e);
    }
    function vf(e) {
      return bl(e);
    }
    function Yr(e, t) {
      return (e & t) !== X;
    }
    function mo(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function yu(e, t) {
      return e & ~t;
    }
    function vp(e, t) {
      return e & t;
    }
    function om(e) {
      return e;
    }
    function um(e, t) {
      return e !== ht && e < t ? e : t;
    }
    function mf(e) {
      for (var t = [], i = 0; i < Wt; i++)
        t.push(e);
      return t;
    }
    function yo(e, t, i) {
      e.pendingLanes |= t, t !== Tl && (e.suspendedLanes = X, e.pingedLanes = X);
      var l = e.eventTimes, c = vf(t);
      l[c] = i;
    }
    function mp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, l = t; l > 0; ) {
        var c = bl(l), p = 1 << c;
        i[c] = Ht, l &= ~p;
      }
    }
    function yp(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function gp(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = X, e.pingedLanes = X, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, c = e.eventTimes, p = e.expirationTimes, y = i; y > 0; ) {
        var w = bl(y), E = 1 << w;
        l[w] = X, c[w] = Ht, p[w] = Ht, y &= ~E;
      }
    }
    function gu(e, t) {
      for (var i = e.entangledLanes |= t, l = e.entanglements, c = i; c; ) {
        var p = bl(c), y = 1 << p;
        // Is this one of the newly entangled lanes?
        y & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[p] & t && (l[p] |= t), c &= ~y;
      }
    }
    function d0(e, t) {
      var i = Sn(t), l;
      switch (i) {
        case la:
          l = fi;
          break;
        case Gt:
          l = so;
          break;
        case fo:
        case ba:
        case Hr:
        case po:
        case Ds:
        case Rs:
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
        case zi:
        case of:
        case ks:
        case uf:
        case sf:
          l = co;
          break;
        case Tl:
          l = hu;
          break;
        default:
          l = ht;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== ht ? ht : l;
    }
    function Sp(e, t, i) {
      if (Gn)
        for (var l = e.pendingUpdatersLaneMap; i > 0; ) {
          var c = vf(i), p = 1 << c, y = l[c];
          y.add(t), i &= ~p;
        }
    }
    function yf(e, t) {
      if (Gn)
        for (var i = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var c = vf(t), p = 1 << c, y = i[c];
          y.size > 0 && (y.forEach(function(w) {
            var E = w.alternate;
            (E === null || !l.has(E)) && l.add(w);
          }), y.clear()), t &= ~p;
        }
    }
    function wp(e, t) {
      return null;
    }
    var cr = Ge, Qn = la, Fi = Gt, Ls = Tl, go = ht;
    function Da() {
      return go;
    }
    function Rn(e) {
      go = e;
    }
    function Us(e, t) {
      var i = go;
      try {
        return go = e, t();
      } finally {
        go = i;
      }
    }
    function fr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function p0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ep(e, t) {
      return e !== 0 && e < t;
    }
    function js(e) {
      var t = Sn(e);
      return Ep(cr, t) ? Ep(Qn, t) ? Os(t) ? Fi : Ls : Qn : cr;
    }
    function kn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sm;
    function Re(e) {
      sm = e;
    }
    function Su(e) {
      sm(e);
    }
    var As;
    function cm(e) {
      As = e;
    }
    var fm;
    function zs(e) {
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
    var gf = !1, wu = [], di = null, Xt = null, Pn = null, Ra = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new Map(), Hi = [], Ka = [
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
    function pi(e, t, i, l, c) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: c,
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
          Pn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          Ra.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          Eu.delete(l);
          break;
        }
      }
    }
    function _u(e, t, i, l, c, p) {
      if (e === null || e.nativeEvent !== p) {
        var y = pi(t, i, l, c, p);
        if (t !== null) {
          var w = Lu(t);
          w !== null && As(w);
        }
        return y;
      }
      e.eventSystemFlags |= l;
      var E = e.targetContainers;
      return c !== null && E.indexOf(c) === -1 && E.push(c), e;
    }
    function vm(e, t, i, l, c) {
      switch (t) {
        case "focusin": {
          var p = c;
          return di = _u(di, e, t, i, l, p), !0;
        }
        case "dragenter": {
          var y = c;
          return Xt = _u(Xt, e, t, i, l, y), !0;
        }
        case "mouseover": {
          var w = c;
          return Pn = _u(Pn, e, t, i, l, w), !0;
        }
        case "pointerover": {
          var E = c, x = E.pointerId;
          return Ra.set(x, _u(Ra.get(x) || null, e, t, i, l, E)), !0;
        }
        case "gotpointercapture": {
          var D = c, j = D.pointerId;
          return Eu.set(j, _u(Eu.get(j) || null, e, t, i, l, D)), !0;
        }
      }
      return !1;
    }
    function Cp(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var i = ra(t);
        if (i !== null) {
          var l = i.tag;
          if (l === oe) {
            var c = Jd(i);
            if (c !== null) {
              e.blockedOn = c, xp(e.priority, function() {
                fm(i);
              });
              return;
            }
          } else if (l === O) {
            var p = i.stateNode;
            if (kn(p)) {
              e.blockedOn = Hc(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function mm(e) {
      for (var t = Fs(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < Hi.length && Ep(t, Hi[l].priority); l++)
        ;
      Hi.splice(l, 0, i), l === 0 && Cp(i);
    }
    function Sf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], l = So(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (l === null) {
          var c = e.nativeEvent, p = new c.constructor(c.type, c);
          ys(p), c.target.dispatchEvent(p), r0();
        } else {
          var y = Lu(l);
          return y !== null && As(y), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hs(e, t, i) {
      Sf(e) && i.delete(t);
    }
    function Tp() {
      gf = !1, di !== null && Sf(di) && (di = null), Xt !== null && Sf(Xt) && (Xt = null), Pn !== null && Sf(Pn) && (Pn = null), Ra.forEach(Hs), Eu.forEach(Hs);
    }
    function dr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, gf || (gf = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Tp)));
    }
    function ft(e) {
      if (wu.length > 0) {
        dr(wu[0], e);
        for (var t = 1; t < wu.length; t++) {
          var i = wu[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      di !== null && dr(di, e), Xt !== null && dr(Xt, e), Pn !== null && dr(Pn, e);
      var l = function(w) {
        return dr(w, e);
      };
      Ra.forEach(l), Eu.forEach(l);
      for (var c = 0; c < Hi.length; c++) {
        var p = Hi[c];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; Hi.length > 0; ) {
        var y = Hi[0];
        if (y.blockedOn !== null)
          break;
        Cp(y), y.blockedOn === null && Hi.shift();
      }
    }
    var nn = s.ReactCurrentBatchConfig, sn = !0;
    function Yn(e) {
      sn = !!e;
    }
    function oa() {
      return sn;
    }
    function xu(e, t, i) {
      var l = Sr(t), c;
      switch (l) {
        case cr:
          c = Mn;
          break;
        case Qn:
          c = Ps;
          break;
        case Fi:
        default:
          c = Pi;
          break;
      }
      return c.bind(null, t, i, e);
    }
    function Mn(e, t, i, l) {
      var c = Da(), p = nn.transition;
      nn.transition = null;
      try {
        Rn(cr), Pi(e, t, i, l);
      } finally {
        Rn(c), nn.transition = p;
      }
    }
    function Ps(e, t, i, l) {
      var c = Da(), p = nn.transition;
      nn.transition = null;
      try {
        Rn(Qn), Pi(e, t, i, l);
      } finally {
        Rn(c), nn.transition = p;
      }
    }
    function Pi(e, t, i, l) {
      sn && wf(e, t, i, l);
    }
    function wf(e, t, i, l) {
      var c = So(e, t, i, l);
      if (c === null) {
        L0(e, t, l, Cu, i), hm(e, l);
        return;
      }
      if (vm(c, e, t, i, l)) {
        l.stopPropagation();
        return;
      }
      if (hm(e, l), t & eo && pm(e)) {
        for (; c !== null; ) {
          var p = Lu(c);
          p !== null && Su(p);
          var y = So(e, t, i, l);
          if (y === null && L0(e, t, l, Cu, i), y === c)
            break;
          c = y;
        }
        c !== null && l.stopPropagation();
        return;
      }
      L0(e, t, l, null, i);
    }
    var Cu = null;
    function So(e, t, i, l) {
      Cu = null;
      var c = Uc(l), p = Gs(c);
      if (p !== null) {
        var y = ra(p);
        if (y === null)
          p = null;
        else {
          var w = y.tag;
          if (w === oe) {
            var E = Jd(y);
            if (E !== null)
              return E;
            p = null;
          } else if (w === O) {
            var x = y.stateNode;
            if (kn(x))
              return Hc(y);
            p = null;
          } else
            y !== p && (p = null);
        }
      }
      return Cu = p, null;
    }
    function Sr(e) {
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
          return cr;
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
          return Qn;
        case "message": {
          var t = np();
          switch (t) {
            case Vc:
              return cr;
            case ia:
              return Qn;
            case ci:
            case $c:
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
    function bp(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function Tu(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function Yi(e, t, i, l) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: l
      }), i;
    }
    function Ef(e, t, i, l) {
      return e.addEventListener(t, i, {
        passive: l
      }), i;
    }
    var wo = null, hi = null, Dl = null;
    function Rl(e) {
      return wo = e, hi = xf(), !0;
    }
    function _f() {
      wo = null, hi = null, Dl = null;
    }
    function bu() {
      if (Dl)
        return Dl;
      var e, t = hi, i = t.length, l, c = xf(), p = c.length;
      for (e = 0; e < i && t[e] === c[e]; e++)
        ;
      var y = i - e;
      for (l = 1; l <= y && t[i - l] === c[p - l]; l++)
        ;
      var w = l > 1 ? 1 - l : void 0;
      return Dl = c.slice(e, w), Dl;
    }
    function xf() {
      return "value" in wo ? wo.value : wo.textContent;
    }
    function Eo(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
      return !0;
    }
    function pr() {
      return !1;
    }
    function wn(e) {
      function t(i, l, c, p, y) {
        this._reactName = i, this._targetInst = c, this.type = l, this.nativeEvent = p, this.target = y, this.currentTarget = null;
        for (var w in e)
          if (e.hasOwnProperty(w)) {
            var E = e[w];
            E ? this[w] = E(p) : this[w] = p[w];
          }
        var x = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return x ? this.isDefaultPrevented = _o : this.isDefaultPrevented = pr, this.isPropagationStopped = pr, this;
      }
      return ct(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = _o);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = _o);
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
        isPersistent: _o
      }), t;
    }
    var hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, vr = wn(hr), Du = ct({}, hr, {
      view: 0,
      detail: 0
    }), Dp = wn(Du), Ys, Rp, ka;
    function ym(e) {
      e !== ka && (ka && e.type === "mousemove" ? (Ys = e.screenX - ka.screenX, Rp = e.screenY - ka.screenY) : (Ys = 0, Rp = 0), ka = e);
    }
    var Ru = ct({}, Du, {
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
        return "movementX" in e ? e.movementX : (ym(e), Ys);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Rp;
      }
    }), kl = wn(Ru), kp = ct({}, Ru, {
      dataTransfer: 0
    }), xo = wn(kp), gm = ct({}, Du, {
      relatedTarget: 0
    }), Cf = wn(gm), Mp = ct({}, hr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Tf = wn(Mp), h0 = ct({}, hr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), v0 = wn(h0), Sm = ct({}, hr, {
      data: 0
    }), Op = wn(Sm), Co = Op, m0 = {
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
    }, ku = {
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
    function wm(e) {
      if (e.key) {
        var t = m0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Eo(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? ku[e.keyCode] || "Unidentified" : "";
    }
    var cn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function y0(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var l = cn[e];
      return l ? !!i[l] : !1;
    }
    function bf(e) {
      return y0;
    }
    var g0 = ct({}, Du, {
      key: wm,
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
        return e.type === "keypress" ? Eo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), S0 = wn(g0), Em = ct({}, Ru, {
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
    }), Np = wn(Em), w0 = ct({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bf
    }), Ma = wn(w0), Lp = ct({}, hr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), E0 = wn(Lp), Ml = ct({}, Ru, {
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
    }), Df = wn(Ml), To = [9, 13, 27, 32], Is = 229, Vs = Ln && "CompositionEvent" in window, bo = null;
    Ln && "documentMode" in document && (bo = document.documentMode);
    var _0 = Ln && "TextEvent" in window && !bo, Rf = Ln && (!Vs || bo && bo > 8 && bo <= 11), _m = 32, Up = String.fromCharCode(_m);
    function xm() {
      Or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Or("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Or("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Or("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $s = !1;
    function kf(e) {
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
    function jp(e, t) {
      return e === "keydown" && t.keyCode === Is;
    }
    function Tm(e, t) {
      switch (e) {
        case "keyup":
          return To.indexOf(t.keyCode) !== -1;
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
    function Ap(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Mf(e) {
      return e.locale === "ko";
    }
    var Ii = !1;
    function zp(e, t, i, l, c) {
      var p, y;
      if (Vs ? p = Cm(t) : Ii ? Tm(t, l) && (p = "onCompositionEnd") : jp(t, l) && (p = "onCompositionStart"), !p)
        return null;
      Rf && !Mf(l) && (!Ii && p === "onCompositionStart" ? Ii = Rl(c) : p === "onCompositionEnd" && Ii && (y = bu()));
      var w = Mm(i, p);
      if (w.length > 0) {
        var E = new Op(p, t, null, l, c);
        if (e.push({
          event: E,
          listeners: w
        }), y)
          E.data = y;
        else {
          var x = Ap(l);
          x !== null && (E.data = x);
        }
      }
    }
    function Of(e, t) {
      switch (e) {
        case "compositionend":
          return Ap(t);
        case "keypress":
          var i = t.which;
          return i !== _m ? null : ($s = !0, Up);
        case "textInput":
          var l = t.data;
          return l === Up && $s ? null : l;
        default:
          return null;
      }
    }
    function bm(e, t) {
      if (Ii) {
        if (e === "compositionend" || !Vs && Tm(e, t)) {
          var i = bu();
          return _f(), Ii = !1, i;
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
          return Rf && !Mf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function x0(e, t, i, l, c) {
      var p;
      if (_0 ? p = Of(t, l) : p = bm(t, l), !p)
        return null;
      var y = Mm(i, "onBeforeInput");
      if (y.length > 0) {
        var w = new Co("onBeforeInput", "beforeinput", null, l, c);
        e.push({
          event: w,
          listeners: y
        }), w.data = p;
      }
    }
    function Nf(e, t, i, l, c, p, y) {
      zp(e, t, i, l, c), x0(e, t, i, l, c);
    }
    var C0 = {
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
    function Mu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!C0[e.type] : t === "textarea";
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
    function T0(e) {
      if (!Ln)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), i = typeof l[t] == "function";
      }
      return i;
    }
    function Lf() {
      Or("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, i, l) {
      jc(l);
      var c = Mm(t, "onChange");
      if (c.length > 0) {
        var p = new vr("onChange", "change", null, i, l);
        e.push({
          event: p,
          listeners: c
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
      n(t, u, e, Uc(e)), Bd(S, t);
    }
    function S(e) {
      ZE(e, 0);
    }
    function _(e) {
      var t = Hf(e);
      if (dv(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var N = !1;
    Ln && (N = T0("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", ie);
    }
    function re() {
      r && (r.detachEvent("onpropertychange", ie), r = null, u = null);
    }
    function ie(e) {
      e.propertyName === "value" && _(u) && v(e);
    }
    function ne(e, t, i) {
      e === "focusin" ? (re(), W(t, i)) : e === "focusout" && re();
    }
    function Ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _(u);
    }
    function Me(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Le(e, t) {
      if (e === "click")
        return _(t);
    }
    function hn(e, t) {
      if (e === "input" || e === "change")
        return _(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || cl(e, "number", e.value);
    }
    function U(e, t, i, l, c, p, y) {
      var w = i ? Hf(i) : window, E, x;
      if (f(w) ? E = R : Mu(w) ? N ? E = hn : (E = Ce, x = ne) : Me(w) && (E = Le), E) {
        var D = E(t, i);
        if (D) {
          n(e, D, l, c);
          return;
        }
      }
      x && x(t, w, i), t === "focusout" && H(w);
    }
    function I() {
      ha("onMouseEnter", ["mouseout", "mouseover"]), ha("onMouseLeave", ["mouseout", "mouseover"]), ha("onPointerEnter", ["pointerout", "pointerover"]), ha("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function se(e, t, i, l, c, p, y) {
      var w = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (w && !Vv(l)) {
        var x = l.relatedTarget || l.fromElement;
        if (x && (Gs(x) || Kp(x)))
          return;
      }
      if (!(!E && !w)) {
        var D;
        if (c.window === c)
          D = c;
        else {
          var j = c.ownerDocument;
          j ? D = j.defaultView || j.parentWindow : D = window;
        }
        var L, V;
        if (E) {
          var $ = l.relatedTarget || l.toElement;
          if (L = i, V = $ ? Gs($) : null, V !== null) {
            var q = ra(V);
            (V !== q || V.tag !== B && V.tag !== A) && (V = null);
          }
        } else
          L = null, V = i;
        if (L !== V) {
          var be = kl, Ye = "onMouseLeave", je = "onMouseEnter", mt = "mouse";
          (t === "pointerout" || t === "pointerover") && (be = Np, Ye = "onPointerLeave", je = "onPointerEnter", mt = "pointer");
          var dt = L == null ? D : Hf(L), P = V == null ? D : Hf(V), Z = new be(Ye, mt + "leave", L, l, c);
          Z.target = dt, Z.relatedTarget = P;
          var Y = null, le = Gs(c);
          if (le === i) {
            var De = new be(je, mt + "enter", V, l, c);
            De.target = P, De.relatedTarget = dt, Y = De;
          }
          oR(e, Z, Y, L, V);
        }
      }
    }
    function Ue(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Oe = typeof Object.is == "function" ? Object.is : Ue;
    function ze(e, t) {
      if (Oe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), l = Object.keys(t);
      if (i.length !== l.length)
        return !1;
      for (var c = 0; c < i.length; c++) {
        var p = i[c];
        if (!ir.call(t, p) || !Oe(e[p], t[p]))
          return !1;
      }
      return !0;
    }
    function Ke(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function In(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function St(e, t) {
      for (var i = Ke(e), l = 0, c = 0; i; ) {
        if (i.nodeType === ki) {
          if (c = l + i.textContent.length, l <= t && c >= t)
            return {
              node: i,
              offset: t - l
            };
          l = c;
        }
        i = Ke(In(i));
      }
    }
    function Ol(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, l = i.getSelection && i.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var c = l.anchorNode, p = l.anchorOffset, y = l.focusNode, w = l.focusOffset;
      try {
        c.nodeType, y.nodeType;
      } catch {
        return null;
      }
      return b0(e, c, p, y, w);
    }
    function b0(e, t, i, l, c) {
      var p = 0, y = -1, w = -1, E = 0, x = 0, D = e, j = null;
      e:
        for (; ; ) {
          for (var L = null; D === t && (i === 0 || D.nodeType === ki) && (y = p + i), D === l && (c === 0 || D.nodeType === ki) && (w = p + c), D.nodeType === ki && (p += D.nodeValue.length), (L = D.firstChild) !== null; )
            j = D, D = L;
          for (; ; ) {
            if (D === e)
              break e;
            if (j === t && ++E === i && (y = p), j === l && ++x === c && (w = p), (L = D.nextSibling) !== null)
              break;
            D = j, j = D.parentNode;
          }
          D = L;
        }
      return y === -1 || w === -1 ? null : {
        start: y,
        end: w
      };
    }
    function ID(e, t) {
      var i = e.ownerDocument || document, l = i && i.defaultView || window;
      if (l.getSelection) {
        var c = l.getSelection(), p = e.textContent.length, y = Math.min(t.start, p), w = t.end === void 0 ? y : Math.min(t.end, p);
        if (!c.extend && y > w) {
          var E = w;
          w = y, y = E;
        }
        var x = St(e, y), D = St(e, w);
        if (x && D) {
          if (c.rangeCount === 1 && c.anchorNode === x.node && c.anchorOffset === x.offset && c.focusNode === D.node && c.focusOffset === D.offset)
            return;
          var j = i.createRange();
          j.setStart(x.node, x.offset), c.removeAllRanges(), y > w ? (c.addRange(j), c.extend(D.node, D.offset)) : (j.setEnd(D.node, D.offset), c.addRange(j));
        }
      }
    }
    function FE(e) {
      return e && e.nodeType === ki;
    }
    function HE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : FE(e) ? !1 : FE(t) ? HE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function VD(e) {
      return e && e.ownerDocument && HE(e.ownerDocument.documentElement, e);
    }
    function $D(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function PE() {
      for (var e = window, t = Ec(); t instanceof e.HTMLIFrameElement; ) {
        if ($D(t))
          e = t.contentWindow;
        else
          return t;
        t = Ec(e.document);
      }
      return t;
    }
    function D0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function BD() {
      var e = PE();
      return {
        focusedElem: e,
        selectionRange: D0(e) ? GD(e) : null
      };
    }
    function WD(e) {
      var t = PE(), i = e.focusedElem, l = e.selectionRange;
      if (t !== i && VD(i)) {
        l !== null && D0(i) && QD(i, l);
        for (var c = [], p = i; p = p.parentNode; )
          p.nodeType === Lr && c.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var y = 0; y < c.length; y++) {
          var w = c[y];
          w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
        }
      }
    }
    function GD(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ol(e), t || {
        start: 0,
        end: 0
      };
    }
    function QD(e, t) {
      var i = t.start, l = t.end;
      l === void 0 && (l = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(l, e.value.length)) : ID(e, t);
    }
    var qD = Ln && "documentMode" in document && document.documentMode <= 11;
    function ZD() {
      Or("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Uf = null, R0 = null, Fp = null, k0 = !1;
    function KD(e) {
      if ("selectionStart" in e && D0(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function XD(e) {
      return e.window === e ? e.document : e.nodeType === Ga ? e : e.ownerDocument;
    }
    function YE(e, t, i) {
      var l = XD(i);
      if (!(k0 || Uf == null || Uf !== Ec(l))) {
        var c = KD(Uf);
        if (!Fp || !ze(Fp, c)) {
          Fp = c;
          var p = Mm(R0, "onSelect");
          if (p.length > 0) {
            var y = new vr("onSelect", "select", null, t, i);
            e.push({
              event: y,
              listeners: p
            }), y.target = Uf;
          }
        }
      }
    }
    function JD(e, t, i, l, c, p, y) {
      var w = i ? Hf(i) : window;
      switch (t) {
        case "focusin":
          (Mu(w) || w.contentEditable === "true") && (Uf = w, R0 = i, Fp = null);
          break;
        case "focusout":
          Uf = null, R0 = null, Fp = null;
          break;
        case "mousedown":
          k0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          k0 = !1, YE(e, l, c);
          break;
        case "selectionchange":
          if (qD)
            break;
        case "keydown":
        case "keyup":
          YE(e, l, c);
      }
    }
    function Dm(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var jf = {
      animationend: Dm("Animation", "AnimationEnd"),
      animationiteration: Dm("Animation", "AnimationIteration"),
      animationstart: Dm("Animation", "AnimationStart"),
      transitionend: Dm("Transition", "TransitionEnd")
    }, M0 = {}, IE = {};
    Ln && (IE = document.createElement("div").style, "AnimationEvent" in window || (delete jf.animationend.animation, delete jf.animationiteration.animation, delete jf.animationstart.animation), "TransitionEvent" in window || delete jf.transitionend.transition);
    function Rm(e) {
      if (M0[e])
        return M0[e];
      if (!jf[e])
        return e;
      var t = jf[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in IE)
          return M0[e] = t[i];
      return e;
    }
    var VE = Rm("animationend"), $E = Rm("animationiteration"), BE = Rm("animationstart"), WE = Rm("transitionend"), GE = /* @__PURE__ */ new Map(), QE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ou(e, t) {
      GE.set(e, t), Or(t, [e]);
    }
    function eR() {
      for (var e = 0; e < QE.length; e++) {
        var t = QE[e], i = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Ou(i, "on" + l);
      }
      Ou(VE, "onAnimationEnd"), Ou($E, "onAnimationIteration"), Ou(BE, "onAnimationStart"), Ou("dblclick", "onDoubleClick"), Ou("focusin", "onFocus"), Ou("focusout", "onBlur"), Ou(WE, "onTransitionEnd");
    }
    function tR(e, t, i, l, c, p, y) {
      var w = GE.get(t);
      if (w !== void 0) {
        var E = vr, x = t;
        switch (t) {
          case "keypress":
            if (Eo(l) === 0)
              return;
          case "keydown":
          case "keyup":
            E = S0;
            break;
          case "focusin":
            x = "focus", E = Cf;
            break;
          case "focusout":
            x = "blur", E = Cf;
            break;
          case "beforeblur":
          case "afterblur":
            E = Cf;
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
            E = kl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = xo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Ma;
            break;
          case VE:
          case $E:
          case BE:
            E = Tf;
            break;
          case WE:
            E = E0;
            break;
          case "scroll":
            E = Dp;
            break;
          case "wheel":
            E = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = v0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Np;
            break;
        }
        var D = (p & eo) !== 0;
        {
          var j = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = iR(i, w, l.type, D, j);
          if (L.length > 0) {
            var V = new E(w, x, null, l, c);
            e.push({
              event: V,
              listeners: L
            });
          }
        }
      }
    }
    eR(), I(), Lf(), ZD(), xm();
    function nR(e, t, i, l, c, p, y) {
      tR(e, t, i, l, c, p);
      var w = (p & n0) === 0;
      w && (se(e, t, i, l, c), U(e, t, i, l, c), JD(e, t, i, l, c), Nf(e, t, i, l, c));
    }
    var Hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], O0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hp));
    function qE(e, t, i) {
      var l = e.type || "unknown-event";
      e.currentTarget = i, Li(l, t, void 0, e), e.currentTarget = null;
    }
    function rR(e, t, i) {
      var l;
      if (i)
        for (var c = t.length - 1; c >= 0; c--) {
          var p = t[c], y = p.instance, w = p.currentTarget, E = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          qE(e, E, w), l = y;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var D = t[x], j = D.instance, L = D.currentTarget, V = D.listener;
          if (j !== l && e.isPropagationStopped())
            return;
          qE(e, V, L), l = j;
        }
    }
    function ZE(e, t) {
      for (var i = (t & eo) !== 0, l = 0; l < e.length; l++) {
        var c = e[l], p = c.event, y = c.listeners;
        rR(p, y, i);
      }
      qd();
    }
    function aR(e, t, i, l, c) {
      var p = Uc(i), y = [];
      nR(y, e, l, i, p, t), ZE(y, t);
    }
    function rn(e, t) {
      O0.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, l = Uk(t), c = uR(e, i);
      l.has(c) || (KE(t, e, vs, i), l.add(c));
    }
    function N0(e, t, i) {
      O0.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= eo), KE(i, e, l, t);
    }
    var km = "_reactListening" + Math.random().toString(36).slice(2);
    function Pp(e) {
      if (!e[km]) {
        e[km] = !0, ar.forEach(function(i) {
          i !== "selectionchange" && (O0.has(i) || N0(i, !1, e), N0(i, !0, e));
        });
        var t = e.nodeType === Ga ? e : e.ownerDocument;
        t !== null && (t[km] || (t[km] = !0, N0("selectionchange", !1, t)));
      }
    }
    function KE(e, t, i, l, c) {
      var p = xu(e, t, i), y = void 0;
      ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? Yi(e, t, p, y) : Tu(e, t, p) : y !== void 0 ? Ef(e, t, p, y) : bp(e, t, p);
    }
    function XE(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function L0(e, t, i, l, c) {
      var p = l;
      if (!(t & Oi) && !(t & vs)) {
        var y = c;
        if (l !== null) {
          var w = l;
          e:
            for (; ; ) {
              if (w === null)
                return;
              var E = w.tag;
              if (E === O || E === z) {
                var x = w.stateNode.containerInfo;
                if (XE(x, y))
                  break;
                if (E === z)
                  for (var D = w.return; D !== null; ) {
                    var j = D.tag;
                    if (j === O || j === z) {
                      var L = D.stateNode.containerInfo;
                      if (XE(L, y))
                        return;
                    }
                    D = D.return;
                  }
                for (; x !== null; ) {
                  var V = Gs(x);
                  if (V === null)
                    return;
                  var $ = V.tag;
                  if ($ === B || $ === A) {
                    w = p = V;
                    continue e;
                  }
                  x = x.parentNode;
                }
              }
              w = w.return;
            }
        }
      }
      Bd(function() {
        return aR(e, t, i, p);
      });
    }
    function Yp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function iR(e, t, i, l, c, p) {
      for (var y = t !== null ? t + "Capture" : null, w = l ? y : t, E = [], x = e, D = null; x !== null; ) {
        var j = x, L = j.stateNode, V = j.tag;
        if (V === B && L !== null && (D = L, w !== null)) {
          var $ = no(x, w);
          $ != null && E.push(Yp(x, $, D));
        }
        if (c)
          break;
        x = x.return;
      }
      return E;
    }
    function Mm(e, t) {
      for (var i = t + "Capture", l = [], c = e; c !== null; ) {
        var p = c, y = p.stateNode, w = p.tag;
        if (w === B && y !== null) {
          var E = y, x = no(c, i);
          x != null && l.unshift(Yp(c, x, E));
          var D = no(c, t);
          D != null && l.push(Yp(c, D, E));
        }
        c = c.return;
      }
      return l;
    }
    function Af(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function lR(e, t) {
      for (var i = e, l = t, c = 0, p = i; p; p = Af(p))
        c++;
      for (var y = 0, w = l; w; w = Af(w))
        y++;
      for (; c - y > 0; )
        i = Af(i), c--;
      for (; y - c > 0; )
        l = Af(l), y--;
      for (var E = c; E--; ) {
        if (i === l || l !== null && i === l.alternate)
          return i;
        i = Af(i), l = Af(l);
      }
      return null;
    }
    function JE(e, t, i, l, c) {
      for (var p = t._reactName, y = [], w = i; w !== null && w !== l; ) {
        var E = w, x = E.alternate, D = E.stateNode, j = E.tag;
        if (x !== null && x === l)
          break;
        if (j === B && D !== null) {
          var L = D;
          if (c) {
            var V = no(w, p);
            V != null && y.unshift(Yp(w, V, L));
          } else if (!c) {
            var $ = no(w, p);
            $ != null && y.push(Yp(w, $, L));
          }
        }
        w = w.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function oR(e, t, i, l, c) {
      var p = l && c ? lR(l, c) : null;
      l !== null && JE(e, t, l, p, !1), c !== null && i !== null && JE(e, i, c, p, !0);
    }
    function uR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Oa = !1, Ip = "dangerouslySetInnerHTML", Om = "suppressContentEditableWarning", Nu = "suppressHydrationWarning", e_ = "autoFocus", Bs = "children", Ws = "style", Nm = "__html", U0, Lm, Vp, t_, Um, n_, r_;
    U0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Lm = function(e, t) {
      Lc(e, t), Pd(e, t), Iv(e, t, {
        registrationNameDependencies: Mr,
        possibleRegistrationNames: ai
      });
    }, n_ = Ln && !document.documentMode, Vp = function(e, t, i) {
      if (!Oa) {
        var l = jm(i), c = jm(t);
        c !== l && (Oa = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(c), JSON.stringify(l)));
      }
    }, t_ = function(e) {
      if (!Oa) {
        Oa = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Um = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, r_ = function(e, t) {
      var i = e.namespaceURI === Ri ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var sR = /\r\n?/g, cR = /\u0000|\uFFFD/g;
    function jm(e) {
      Pa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(sR, `
`).replace(cR, "");
    }
    function Am(e, t, i, l) {
      var c = jm(t), p = jm(e);
      if (p !== c && (l && (Oa || (Oa = !0, m('Text content did not match. Server: "%s" Client: "%s"', p, c))), i && on))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function a_(e) {
      return e.nodeType === Ga ? e : e.ownerDocument;
    }
    function fR() {
    }
    function zm(e) {
      e.onclick = fR;
    }
    function dR(e, t, i, l, c) {
      for (var p in l)
        if (l.hasOwnProperty(p)) {
          var y = l[p];
          if (p === Ws)
            y && Object.freeze(y), Nv(t, y);
          else if (p === Ip) {
            var w = y ? y[Nm] : void 0;
            w != null && Ev(t, w);
          } else if (p === Bs)
            if (typeof y == "string") {
              var E = e !== "textarea" || y !== "";
              E && kc(t, y);
            } else
              typeof y == "number" && kc(t, "" + y);
          else
            p === Om || p === Nu || p === e_ || (Mr.hasOwnProperty(p) ? y != null && (typeof y != "function" && Um(p, y), p === "onScroll" && rn("scroll", t)) : y != null && oi(t, p, y, c));
        }
    }
    function pR(e, t, i, l) {
      for (var c = 0; c < t.length; c += 2) {
        var p = t[c], y = t[c + 1];
        p === Ws ? Nv(e, y) : p === Ip ? Ev(e, y) : p === Bs ? kc(e, y) : oi(e, p, y, l);
      }
    }
    function hR(e, t, i, l) {
      var c, p = a_(i), y, w = l;
      if (w === Ri && (w = Dc(e)), w === Ri) {
        if (c = Mi(e, t), !c && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = p.createElement("div");
          E.innerHTML = "<script><\/script>";
          var x = E.firstChild;
          y = E.removeChild(x);
        } else if (typeof t.is == "string")
          y = p.createElement(e, {
            is: t.is
          });
        else if (y = p.createElement(e), e === "select") {
          var D = y;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        y = p.createElementNS(w, e);
      return w === Ri && !c && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !ir.call(U0, e) && (U0[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function vR(e, t) {
      return a_(t).createTextNode(e);
    }
    function mR(e, t, i, l) {
      var c = Mi(t, i);
      Lm(t, i);
      var p;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), p = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), p = i;
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Hp.length; y++)
            rn(Hp[y], e);
          p = i;
          break;
        case "source":
          rn("error", e), p = i;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), p = i;
          break;
        case "details":
          rn("toggle", e), p = i;
          break;
        case "input":
          ss(e, i), p = us(e, i), rn("invalid", e);
          break;
        case "option":
          Tc(e, i), p = i;
          break;
        case "select":
          yv(e, i), p = kd(e, i), rn("invalid", e);
          break;
        case "textarea":
          gv(e, i), p = Od(e, i), rn("invalid", e);
          break;
        default:
          p = i;
      }
      switch (Oc(t, p), dR(t, e, l, p, c), t) {
        case "input":
          Kl(e), cs(e, i, !1);
          break;
        case "textarea":
          Kl(e), wv(e);
          break;
        case "option":
          Rd(e, i);
          break;
        case "select":
          Bg(e, i);
          break;
        default:
          typeof p.onClick == "function" && zm(e);
          break;
      }
    }
    function yR(e, t, i, l, c) {
      Lm(t, l);
      var p = null, y, w;
      switch (t) {
        case "input":
          y = us(e, i), w = us(e, l), p = [];
          break;
        case "select":
          y = kd(e, i), w = kd(e, l), p = [];
          break;
        case "textarea":
          y = Od(e, i), w = Od(e, l), p = [];
          break;
        default:
          y = i, w = l, typeof y.onClick != "function" && typeof w.onClick == "function" && zm(e);
          break;
      }
      Oc(t, w);
      var E, x, D = null;
      for (E in y)
        if (!(w.hasOwnProperty(E) || !y.hasOwnProperty(E) || y[E] == null))
          if (E === Ws) {
            var j = y[E];
            for (x in j)
              j.hasOwnProperty(x) && (D || (D = {}), D[x] = "");
          } else
            E === Ip || E === Bs || E === Om || E === Nu || E === e_ || (Mr.hasOwnProperty(E) ? p || (p = []) : (p = p || []).push(E, null));
      for (E in w) {
        var L = w[E], V = y != null ? y[E] : void 0;
        if (!(!w.hasOwnProperty(E) || L === V || L == null && V == null))
          if (E === Ws)
            if (L && Object.freeze(L), V) {
              for (x in V)
                V.hasOwnProperty(x) && (!L || !L.hasOwnProperty(x)) && (D || (D = {}), D[x] = "");
              for (x in L)
                L.hasOwnProperty(x) && V[x] !== L[x] && (D || (D = {}), D[x] = L[x]);
            } else
              D || (p || (p = []), p.push(E, D)), D = L;
          else if (E === Ip) {
            var $ = L ? L[Nm] : void 0, q = V ? V[Nm] : void 0;
            $ != null && q !== $ && (p = p || []).push(E, $);
          } else
            E === Bs ? (typeof L == "string" || typeof L == "number") && (p = p || []).push(E, "" + L) : E === Om || E === Nu || (Mr.hasOwnProperty(E) ? (L != null && (typeof L != "function" && Um(E, L), E === "onScroll" && rn("scroll", e)), !p && V !== L && (p = [])) : (p = p || []).push(E, L));
      }
      return D && (ps(D, w[Ws]), (p = p || []).push(Ws, D)), p;
    }
    function gR(e, t, i, l, c) {
      i === "input" && c.type === "radio" && c.name != null && Dd(e, c);
      var p = Mi(i, l), y = Mi(i, c);
      switch (pR(e, t, p, y), i) {
        case "input":
          eu(e, c);
          break;
        case "textarea":
          Sv(e, c);
          break;
        case "select":
          Wg(e, c);
          break;
      }
    }
    function SR(e) {
      {
        var t = e.toLowerCase();
        return Nc.hasOwnProperty(t) && Nc[t] || null;
      }
    }
    function wR(e, t, i, l, c, p, y) {
      var w, E;
      switch (w = Mi(t, i), Lm(t, i), t) {
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
          ss(e, i), rn("invalid", e);
          break;
        case "option":
          Tc(e, i);
          break;
        case "select":
          yv(e, i), rn("invalid", e);
          break;
        case "textarea":
          gv(e, i), rn("invalid", e);
          break;
      }
      Oc(t, i);
      {
        E = /* @__PURE__ */ new Set();
        for (var D = e.attributes, j = 0; j < D.length; j++) {
          var L = D[j].name.toLowerCase();
          switch (L) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(D[j].name);
          }
        }
      }
      var V = null;
      for (var $ in i)
        if (i.hasOwnProperty($)) {
          var q = i[$];
          if ($ === Bs)
            typeof q == "string" ? e.textContent !== q && (i[Nu] !== !0 && Am(e.textContent, q, p, y), V = [Bs, q]) : typeof q == "number" && e.textContent !== "" + q && (i[Nu] !== !0 && Am(e.textContent, q, p, y), V = [Bs, "" + q]);
          else if (Mr.hasOwnProperty($))
            q != null && (typeof q != "function" && Um($, q), $ === "onScroll" && rn("scroll", e));
          else if (y && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof w == "boolean") {
            var be = void 0, Ye = w && $n ? null : Jr($);
            if (i[Nu] !== !0) {
              if (!($ === Om || $ === Nu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === Ip) {
                  var je = e.innerHTML, mt = q ? q[Nm] : void 0;
                  if (mt != null) {
                    var dt = r_(e, mt);
                    dt !== je && Vp($, je, dt);
                  }
                } else if ($ === Ws) {
                  if (E.delete($), n_) {
                    var P = e0(q);
                    be = e.getAttribute("style"), P !== be && Vp($, be, P);
                  }
                } else if (w && !$n)
                  E.delete($.toLowerCase()), be = Zo(e, $, q), q !== be && Vp($, be, q);
                else if (!dn($, Ye, w) && !Yt($, q, Ye, w)) {
                  var Z = !1;
                  if (Ye !== null)
                    E.delete(Ye.attributeName), be = Ql(e, $, q, Ye);
                  else {
                    var Y = l;
                    if (Y === Ri && (Y = Dc(t)), Y === Ri)
                      E.delete($.toLowerCase());
                    else {
                      var le = SR($);
                      le !== null && le !== $ && (Z = !0, E.delete(le)), E.delete($);
                    }
                    be = Zo(e, $, q);
                  }
                  var De = $n;
                  !De && q !== be && !Z && Vp($, be, q);
                }
              }
            }
          }
        }
      switch (y && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && i[Nu] !== !0 && t_(E), t) {
        case "input":
          Kl(e), cs(e, i, !0);
          break;
        case "textarea":
          Kl(e), wv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && zm(e);
          break;
      }
      return V;
    }
    function ER(e, t, i) {
      var l = e.nodeValue !== t;
      return l;
    }
    function j0(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function A0(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function z0(e, t, i) {
      {
        if (Oa)
          return;
        Oa = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function F0(e, t) {
      {
        if (t === "" || Oa)
          return;
        Oa = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function _R(e, t, i) {
      switch (t) {
        case "input":
          pv(e, i);
          return;
        case "textarea":
          Nd(e, i);
          return;
        case "select":
          Gg(e, i);
          return;
      }
    }
    var $p = function() {
    }, Bp = function() {
    };
    {
      var xR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], i_ = [
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
      ], CR = i_.concat(["button"]), TR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], l_ = {
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
        var i = ct({}, e || l_), l = {
          tag: t
        };
        return i_.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), CR.indexOf(t) !== -1 && (i.pTagInButtonScope = null), xR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = l, t === "form" && (i.formTag = l), t === "a" && (i.aTagInScope = l), t === "button" && (i.buttonTagInScope = l), t === "nobr" && (i.nobrTagInScope = l), t === "p" && (i.pTagInButtonScope = l), t === "li" && (i.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = l), i;
      };
      var bR = function(e, t) {
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
            return TR.indexOf(t) === -1;
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
      }, DR = function(e, t) {
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
      $p = function(e, t, i) {
        i = i || l_;
        var l = i.current, c = l && l.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = bR(e, c) ? null : l, y = p ? null : DR(e, i), w = p || y;
        if (w) {
          var E = w.tag, x = !!p + "|" + e + "|" + E;
          if (!o_[x]) {
            o_[x] = !0;
            var D = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", p) {
              var L = "";
              E === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, E, j, L);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, E);
          }
        }
      };
    }
    var Fm = "suppressHydrationWarning", Hm = "$", Pm = "/$", Wp = "$?", Gp = "$!", RR = "style", H0 = null, P0 = null;
    function kR(e) {
      var t, i, l = e.nodeType;
      switch (l) {
        case Ga:
        case Xl: {
          t = l === Ga ? "#document" : "#fragment";
          var c = e.documentElement;
          i = c ? c.namespaceURI : Ud(null, "");
          break;
        }
        default: {
          var p = l === gn ? e.parentNode : e, y = p.namespaceURI || null;
          t = p.tagName, i = Ud(y, t);
          break;
        }
      }
      {
        var w = t.toLowerCase(), E = Bp(null, w);
        return {
          namespace: i,
          ancestorInfo: E
        };
      }
    }
    function MR(e, t, i) {
      {
        var l = e, c = Ud(l.namespace, t), p = Bp(l.ancestorInfo, t);
        return {
          namespace: c,
          ancestorInfo: p
        };
      }
    }
    function D3(e) {
      return e;
    }
    function OR(e) {
      H0 = oa(), P0 = BD();
      var t = null;
      return Yn(!1), t;
    }
    function NR(e) {
      WD(P0), Yn(H0), H0 = null, P0 = null;
    }
    function LR(e, t, i, l, c) {
      var p;
      {
        var y = l;
        if ($p(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var w = "" + t.children, E = Bp(y.ancestorInfo, e);
          $p(null, w, E);
        }
        p = y.namespace;
      }
      var x = hR(e, t, i, p);
      return Zp(c, x), Q0(x, t), x;
    }
    function UR(e, t) {
      e.appendChild(t);
    }
    function jR(e, t, i, l, c) {
      switch (mR(e, t, i, l), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function AR(e, t, i, l, c, p) {
      {
        var y = p;
        if (typeof l.children != typeof i.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var w = "" + l.children, E = Bp(y.ancestorInfo, t);
          $p(null, w, E);
        }
      }
      return yR(e, t, i, l);
    }
    function Y0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function zR(e, t, i, l) {
      {
        var c = i;
        $p(null, e, c.ancestorInfo);
      }
      var p = vR(e, t);
      return Zp(l, p), p;
    }
    function FR() {
      var e = window.event;
      return e === void 0 ? Fi : Sr(e.type);
    }
    var I0 = typeof setTimeout == "function" ? setTimeout : void 0, HR = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = -1, u_ = typeof Promise == "function" ? Promise : void 0, PR = typeof queueMicrotask == "function" ? queueMicrotask : typeof u_ < "u" ? function(e) {
      return u_.resolve(null).then(e).catch(YR);
    } : I0;
    function YR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function IR(e, t, i, l) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function VR(e, t, i, l, c, p) {
      gR(e, t, i, l, c), Q0(e, c);
    }
    function s_(e) {
      kc(e, "");
    }
    function $R(e, t, i) {
      e.nodeValue = i;
    }
    function BR(e, t) {
      e.appendChild(t);
    }
    function WR(e, t) {
      var i;
      e.nodeType === gn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var l = e._reactRootContainer;
      l == null && i.onclick === null && zm(i);
    }
    function GR(e, t, i) {
      e.insertBefore(t, i);
    }
    function QR(e, t, i) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function qR(e, t) {
      e.removeChild(t);
    }
    function ZR(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function $0(e, t) {
      var i = t, l = 0;
      do {
        var c = i.nextSibling;
        if (e.removeChild(i), c && c.nodeType === gn) {
          var p = c.data;
          if (p === Pm)
            if (l === 0) {
              e.removeChild(c), ft(t);
              return;
            } else
              l--;
          else
            (p === Hm || p === Wp || p === Gp) && l++;
        }
        i = c;
      } while (i);
      ft(t);
    }
    function KR(e, t) {
      e.nodeType === gn ? $0(e.parentNode, t) : e.nodeType === Lr && $0(e, t), ft(e);
    }
    function XR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function JR(e) {
      e.nodeValue = "";
    }
    function ek(e, t) {
      e = e;
      var i = t[RR], l = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Mc("display", l);
    }
    function tk(e, t) {
      e.nodeValue = t;
    }
    function nk(e) {
      e.nodeType === Lr ? e.textContent = "" : e.nodeType === Ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function rk(e, t, i) {
      return e.nodeType !== Lr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ak(e, t) {
      return t === "" || e.nodeType !== ki ? null : e;
    }
    function ik(e) {
      return e.nodeType !== gn ? null : e;
    }
    function c_(e) {
      return e.data === Wp;
    }
    function B0(e) {
      return e.data === Gp;
    }
    function lk(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, l, c;
      return t && (i = t.dgst, l = t.msg, c = t.stck), {
        message: l,
        digest: i,
        stack: c
      };
    }
    function ok(e, t) {
      e._reactRetry = t;
    }
    function Ym(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Lr || t === ki)
          break;
        if (t === gn) {
          var i = e.data;
          if (i === Hm || i === Gp || i === Wp)
            break;
          if (i === Pm)
            return null;
        }
      }
      return e;
    }
    function Qp(e) {
      return Ym(e.nextSibling);
    }
    function uk(e) {
      return Ym(e.firstChild);
    }
    function sk(e) {
      return Ym(e.firstChild);
    }
    function ck(e) {
      return Ym(e.nextSibling);
    }
    function fk(e, t, i, l, c, p, y) {
      Zp(p, e), Q0(e, i);
      var w;
      {
        var E = c;
        w = E.namespace;
      }
      var x = (p.mode & ut) !== Ve;
      return wR(e, t, i, w, l, x, y);
    }
    function dk(e, t, i, l) {
      return Zp(i, e), i.mode & ut, ER(e, t);
    }
    function pk(e, t) {
      Zp(t, e);
    }
    function hk(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Pm) {
            if (i === 0)
              return Qp(t);
            i--;
          } else
            (l === Hm || l === Gp || l === Wp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function f_(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Hm || l === Gp || l === Wp) {
            if (i === 0)
              return t;
            i--;
          } else
            l === Pm && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function vk(e) {
      ft(e);
    }
    function mk(e) {
      ft(e);
    }
    function yk(e) {
      return e !== "head" && e !== "body";
    }
    function gk(e, t, i, l) {
      var c = !0;
      Am(t.nodeValue, i, l, c);
    }
    function Sk(e, t, i, l, c, p) {
      if (t[Fm] !== !0) {
        var y = !0;
        Am(l.nodeValue, c, p, y);
      }
    }
    function wk(e, t) {
      t.nodeType === Lr ? j0(e, t) : t.nodeType === gn || A0(e, t);
    }
    function Ek(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === Lr ? j0(i, t) : t.nodeType === gn || A0(i, t));
      }
    }
    function _k(e, t, i, l, c) {
      (c || t[Fm] !== !0) && (l.nodeType === Lr ? j0(i, l) : l.nodeType === gn || A0(i, l));
    }
    function xk(e, t, i) {
      z0(e, t);
    }
    function Ck(e, t) {
      F0(e, t);
    }
    function Tk(e, t, i) {
      {
        var l = e.parentNode;
        l !== null && z0(l, t);
      }
    }
    function bk(e, t) {
      {
        var i = e.parentNode;
        i !== null && F0(i, t);
      }
    }
    function Dk(e, t, i, l, c, p) {
      (p || t[Fm] !== !0) && z0(i, l);
    }
    function Rk(e, t, i, l, c) {
      (c || t[Fm] !== !0) && F0(i, l);
    }
    function kk(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Mk(e) {
      Pp(e);
    }
    var zf = Math.random().toString(36).slice(2), Ff = "__reactFiber$" + zf, W0 = "__reactProps$" + zf, qp = "__reactContainer$" + zf, G0 = "__reactEvents$" + zf, Ok = "__reactListeners$" + zf, Nk = "__reactHandles$" + zf;
    function Lk(e) {
      delete e[Ff], delete e[W0], delete e[G0], delete e[Ok], delete e[Nk];
    }
    function Zp(e, t) {
      t[Ff] = e;
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
      var t = e[Ff];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[qp] || i[Ff], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var c = f_(e); c !== null; ) {
              var p = c[Ff];
              if (p)
                return p;
              c = f_(c);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Lu(e) {
      var t = e[Ff] || e[qp];
      return t && (t.tag === B || t.tag === A || t.tag === oe || t.tag === O) ? t : null;
    }
    function Hf(e) {
      if (e.tag === B || e.tag === A)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Vm(e) {
      return e[W0] || null;
    }
    function Q0(e, t) {
      e[W0] = t;
    }
    function Uk(e) {
      var t = e[G0];
      return t === void 0 && (t = e[G0] = /* @__PURE__ */ new Set()), t;
    }
    var p_ = {}, h_ = s.ReactDebugCurrentFrame;
    function $m(e) {
      if (e) {
        var t = e._owner, i = ns(e.type, e._source, t ? t.type : null);
        h_.setExtraStackFrame(i);
      } else
        h_.setExtraStackFrame(null);
    }
    function Vi(e, t, i, l, c) {
      {
        var p = Function.call.bind(ir);
        for (var y in e)
          if (p(e, y)) {
            var w = void 0;
            try {
              if (typeof e[y] != "function") {
                var E = Error((l || "React class") + ": " + i + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              w = e[y](t, y, l, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              w = x;
            }
            w && !(w instanceof Error) && ($m(c), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", i, y, typeof w), $m(null)), w instanceof Error && !(w.message in p_) && (p_[w.message] = !0, $m(c), m("Failed %s type: %s", i, w.message), $m(null));
          }
      }
    }
    var q0 = [], Bm;
    Bm = [];
    var Do = -1;
    function Uu(e) {
      return {
        current: e
      };
    }
    function Ir(e, t) {
      if (Do < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Bm[Do] && m("Unexpected Fiber popped."), e.current = q0[Do], q0[Do] = null, Bm[Do] = null, Do--;
    }
    function Vr(e, t, i) {
      Do++, q0[Do] = e.current, Bm[Do] = i, e.current = t;
    }
    var Z0;
    Z0 = {};
    var Xa = {};
    Object.freeze(Xa);
    var Ro = Uu(Xa), Nl = Uu(!1), K0 = Xa;
    function Pf(e, t, i) {
      return i && Ll(t) ? K0 : Ro.current;
    }
    function v_(e, t, i) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Yf(e, t) {
      {
        var i = e.type, l = i.contextTypes;
        if (!l)
          return Xa;
        var c = e.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === t)
          return c.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var y in l)
          p[y] = t[y];
        {
          var w = nt(e) || "Unknown";
          Vi(l, p, "context", w);
        }
        return c && v_(e, t, p), p;
      }
    }
    function Wm() {
      return Nl.current;
    }
    function Ll(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gm(e) {
      Ir(Nl, e), Ir(Ro, e);
    }
    function X0(e) {
      Ir(Nl, e), Ir(Ro, e);
    }
    function m_(e, t, i) {
      {
        if (Ro.current !== Xa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Ro, t, e), Vr(Nl, i, e);
      }
    }
    function y_(e, t, i) {
      {
        var l = e.stateNode, c = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var p = nt(e) || "Unknown";
            Z0[p] || (Z0[p] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return i;
        }
        var y = l.getChildContext();
        for (var w in y)
          if (!(w in c))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + w + '" is not defined in childContextTypes.');
        {
          var E = nt(e) || "Unknown";
          Vi(c, y, "child context", E);
        }
        return ct({}, i, y);
      }
    }
    function Qm(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || Xa;
        return K0 = Ro.current, Vr(Ro, i, e), Vr(Nl, Nl.current, e), !0;
      }
    }
    function g_(e, t, i) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var c = y_(e, t, K0);
          l.__reactInternalMemoizedMergedChildContext = c, Ir(Nl, e), Ir(Ro, e), Vr(Ro, c, e), Vr(Nl, i, e);
        } else
          Ir(Nl, e), Vr(Nl, i, e);
      }
    }
    function jk(e) {
      {
        if (!ep(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case b: {
              var i = t.type;
              if (Ll(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ju = 0, qm = 1, ko = null, J0 = !1, eS = !1;
    function S_(e) {
      ko === null ? ko = [e] : ko.push(e);
    }
    function Ak(e) {
      J0 = !0, S_(e);
    }
    function w_() {
      J0 && Au();
    }
    function Au() {
      if (!eS && ko !== null) {
        eS = !0;
        var e = 0, t = Da();
        try {
          var i = !0, l = ko;
          for (Rn(cr); e < l.length; e++) {
            var c = l[e];
            do
              c = c(i);
            while (c !== null);
          }
          ko = null, J0 = !1;
        } catch (p) {
          throw ko !== null && (ko = ko.slice(e + 1)), Yc(Vc, Au), p;
        } finally {
          Rn(t), eS = !1;
        }
      }
      return null;
    }
    var If = [], Vf = 0, Zm = null, Km = 0, vi = [], mi = 0, Qs = null, Mo = 1, Oo = "";
    function zk(e) {
      return Zs(), (e.flags & Kd) !== Pe;
    }
    function Fk(e) {
      return Zs(), Km;
    }
    function Hk() {
      var e = Oo, t = Mo, i = t & ~Pk(t);
      return i.toString(32) + e;
    }
    function qs(e, t) {
      Zs(), If[Vf++] = Km, If[Vf++] = Zm, Zm = e, Km = t;
    }
    function E_(e, t, i) {
      Zs(), vi[mi++] = Mo, vi[mi++] = Oo, vi[mi++] = Qs, Qs = e;
      var l = Mo, c = Oo, p = Xm(l) - 1, y = l & ~(1 << p), w = i + 1, E = Xm(t) + p;
      if (E > 30) {
        var x = p - p % 5, D = (1 << x) - 1, j = (y & D).toString(32), L = y >> x, V = p - x, $ = Xm(t) + V, q = w << V, be = q | L, Ye = j + c;
        Mo = 1 << $ | be, Oo = Ye;
      } else {
        var je = w << p, mt = je | y, dt = c;
        Mo = 1 << E | mt, Oo = dt;
      }
    }
    function tS(e) {
      Zs();
      var t = e.return;
      if (t !== null) {
        var i = 1, l = 0;
        qs(e, i), E_(e, i, l);
      }
    }
    function Xm(e) {
      return 32 - qc(e);
    }
    function Pk(e) {
      return 1 << Xm(e) - 1;
    }
    function nS(e) {
      for (; e === Zm; )
        Zm = If[--Vf], If[Vf] = null, Km = If[--Vf], If[Vf] = null;
      for (; e === Qs; )
        Qs = vi[--mi], vi[mi] = null, Oo = vi[--mi], vi[mi] = null, Mo = vi[--mi], vi[mi] = null;
    }
    function Yk() {
      return Zs(), Qs !== null ? {
        id: Mo,
        overflow: Oo
      } : null;
    }
    function Ik(e, t) {
      Zs(), vi[mi++] = Mo, vi[mi++] = Oo, vi[mi++] = Qs, Mo = t.id, Oo = t.overflow, Qs = e;
    }
    function Zs() {
      Er() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var wr = null, yi = null, $i = !1, Ks = !1, zu = null;
    function Vk() {
      $i && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function __() {
      Ks = !0;
    }
    function $k() {
      return Ks;
    }
    function Bk(e) {
      var t = e.stateNode.containerInfo;
      return yi = sk(t), wr = e, $i = !0, zu = null, Ks = !1, !0;
    }
    function Wk(e, t, i) {
      return yi = ck(t), wr = e, $i = !0, zu = null, Ks = !1, i !== null && Ik(e, i), !0;
    }
    function x_(e, t) {
      switch (e.tag) {
        case O: {
          wk(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var i = (e.mode & ut) !== Ve;
          _k(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case oe: {
          var l = e.memoizedState;
          l.dehydrated !== null && Ek(l.dehydrated, t);
          break;
        }
      }
    }
    function C_(e, t) {
      x_(e, t);
      var i = qN();
      i.stateNode = t, i.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [i], e.flags |= bt) : l.push(i);
    }
    function rS(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case O: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var l = t.type;
                t.pendingProps, xk(i, l);
                break;
              case A:
                var c = t.pendingProps;
                Ck(i, c);
                break;
            }
            break;
          }
          case B: {
            var p = e.type, y = e.memoizedProps, w = e.stateNode;
            switch (t.tag) {
              case B: {
                var E = t.type, x = t.pendingProps, D = (e.mode & ut) !== Ve;
                Dk(
                  p,
                  y,
                  w,
                  E,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
              case A: {
                var j = t.pendingProps, L = (e.mode & ut) !== Ve;
                Rk(
                  p,
                  y,
                  w,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  L
                );
                break;
              }
            }
            break;
          }
          case oe: {
            var V = e.memoizedState, $ = V.dehydrated;
            if ($ !== null)
              switch (t.tag) {
                case B:
                  var q = t.type;
                  t.pendingProps, Tk($, q);
                  break;
                case A:
                  var be = t.pendingProps;
                  bk($, be);
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
      t.flags = t.flags & ~_a | $t, rS(e, t);
    }
    function b_(e, t) {
      switch (e.tag) {
        case B: {
          var i = e.type;
          e.pendingProps;
          var l = rk(t, i);
          return l !== null ? (e.stateNode = l, wr = e, yi = uk(l), !0) : !1;
        }
        case A: {
          var c = e.pendingProps, p = ak(t, c);
          return p !== null ? (e.stateNode = p, wr = e, yi = null, !0) : !1;
        }
        case oe: {
          var y = ik(t);
          if (y !== null) {
            var w = {
              dehydrated: y,
              treeContext: Yk(),
              retryLane: Pr
            };
            e.memoizedState = w;
            var E = ZN(y);
            return E.return = e, e.child = E, wr = e, yi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function aS(e) {
      return (e.mode & ut) !== Ve && (e.flags & Ze) === Pe;
    }
    function iS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function lS(e) {
      if ($i) {
        var t = yi;
        if (!t) {
          aS(e) && (rS(wr, e), iS()), T_(wr, e), $i = !1, wr = e;
          return;
        }
        var i = t;
        if (!b_(e, t)) {
          aS(e) && (rS(wr, e), iS()), t = Qp(i);
          var l = wr;
          if (!t || !b_(e, t)) {
            T_(wr, e), $i = !1, wr = e;
            return;
          }
          C_(l, i);
        }
      }
    }
    function Gk(e, t, i) {
      var l = e.stateNode, c = !Ks, p = fk(l, e.type, e.memoizedProps, t, i, e, c);
      return e.updateQueue = p, p !== null;
    }
    function Qk(e) {
      var t = e.stateNode, i = e.memoizedProps, l = dk(t, i, e);
      if (l) {
        var c = wr;
        if (c !== null)
          switch (c.tag) {
            case O: {
              var p = c.stateNode.containerInfo, y = (c.mode & ut) !== Ve;
              gk(
                p,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
            case B: {
              var w = c.type, E = c.memoizedProps, x = c.stateNode, D = (c.mode & ut) !== Ve;
              Sk(
                w,
                E,
                x,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                D
              );
              break;
            }
          }
      }
      return l;
    }
    function qk(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      pk(i, e);
    }
    function Zk(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return hk(i);
    }
    function D_(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== O && t.tag !== oe; )
        t = t.return;
      wr = t;
    }
    function Jm(e) {
      if (e !== wr)
        return !1;
      if (!$i)
        return D_(e), $i = !0, !1;
      if (e.tag !== O && (e.tag !== B || yk(e.type) && !Y0(e.type, e.memoizedProps))) {
        var t = yi;
        if (t)
          if (aS(e))
            R_(e), iS();
          else
            for (; t; )
              C_(e, t), t = Qp(t);
      }
      return D_(e), e.tag === oe ? yi = Zk(e) : yi = wr ? Qp(e.stateNode) : null, !0;
    }
    function Kk() {
      return $i && yi !== null;
    }
    function R_(e) {
      for (var t = yi; t; )
        x_(e, t), t = Qp(t);
    }
    function $f() {
      wr = null, yi = null, $i = !1, Ks = !1;
    }
    function k_() {
      zu !== null && (xC(zu), zu = null);
    }
    function Er() {
      return $i;
    }
    function oS(e) {
      zu === null ? zu = [e] : zu.push(e);
    }
    var Xk = s.ReactCurrentBatchConfig, Jk = null;
    function eM() {
      return Xk.transition;
    }
    var Bi = {
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
      var tM = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & tn && (t = i), i = i.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Xp = [], Jp = [], eh = [], th = [], nh = [], rh = [], Js = /* @__PURE__ */ new Set();
      Bi.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && Jp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && eh.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && th.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && nh.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && rh.push(e));
      }, Bi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(L) {
          e.add(nt(L) || "Component"), Js.add(L.type);
        }), Xp = []);
        var t = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(L) {
          t.add(nt(L) || "Component"), Js.add(L.type);
        }), Jp = []);
        var i = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(L) {
          i.add(nt(L) || "Component"), Js.add(L.type);
        }), eh = []);
        var l = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(L) {
          l.add(nt(L) || "Component"), Js.add(L.type);
        }), th = []);
        var c = /* @__PURE__ */ new Set();
        nh.length > 0 && (nh.forEach(function(L) {
          c.add(nt(L) || "Component"), Js.add(L.type);
        }), nh = []);
        var p = /* @__PURE__ */ new Set();
        if (rh.length > 0 && (rh.forEach(function(L) {
          p.add(nt(L) || "Component"), Js.add(L.type);
        }), rh = []), t.size > 0) {
          var y = Xs(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (l.size > 0) {
          var w = Xs(l);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, w);
        }
        if (p.size > 0) {
          var E = Xs(p);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var x = Xs(e);
          g(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (i.size > 0) {
          var D = Xs(i);
          g(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (c.size > 0) {
          var j = Xs(c);
          g(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var ey = /* @__PURE__ */ new Map(), M_ = /* @__PURE__ */ new Set();
      Bi.recordLegacyContextWarning = function(e, t) {
        var i = tM(e);
        if (i === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!M_.has(e.type)) {
          var l = ey.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], ey.set(i, l)), l.push(e));
        }
      }, Bi.flushLegacyContextWarning = function() {
        ey.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(nt(p) || "Component"), M_.add(p.type);
            });
            var c = Xs(l);
            try {
              Lt(i), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              Tn();
            }
          }
        });
      }, Bi.discardPendingWarnings = function() {
        Xp = [], Jp = [], eh = [], th = [], nh = [], rh = [], ey = /* @__PURE__ */ new Map();
      };
    }
    function Wi(e, t) {
      if (e && e.defaultProps) {
        var i = ct({}, t), l = e.defaultProps;
        for (var c in l)
          i[c] === void 0 && (i[c] = l[c]);
        return i;
      }
      return t;
    }
    var uS = Uu(null), sS;
    sS = {};
    var ty = null, Bf = null, cS = null, ny = !1;
    function ry() {
      ty = null, Bf = null, cS = null, ny = !1;
    }
    function O_() {
      ny = !0;
    }
    function N_() {
      ny = !1;
    }
    function L_(e, t, i) {
      Vr(uS, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== sS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = sS;
    }
    function fS(e, t) {
      var i = uS.current;
      Ir(uS, t), e._currentValue = i;
    }
    function dS(e, t, i) {
      for (var l = e; l !== null; ) {
        var c = l.alternate;
        if (mo(l.childLanes, t) ? c !== null && !mo(c.childLanes, t) && (c.childLanes = at(c.childLanes, t)) : (l.childLanes = at(l.childLanes, t), c !== null && (c.childLanes = at(c.childLanes, t))), l === i)
          break;
        l = l.return;
      }
      l !== i && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function nM(e, t, i) {
      rM(e, t, i);
    }
    function rM(e, t, i) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var c = void 0, p = l.dependencies;
        if (p !== null) {
          c = l.child;
          for (var y = p.firstContext; y !== null; ) {
            if (y.context === t) {
              if (l.tag === b) {
                var w = Dn(i), E = No(Ht, w);
                E.tag = iy;
                var x = l.updateQueue;
                if (x !== null) {
                  var D = x.shared, j = D.pending;
                  j === null ? E.next = E : (E.next = j.next, j.next = E), D.pending = E;
                }
              }
              l.lanes = at(l.lanes, i);
              var L = l.alternate;
              L !== null && (L.lanes = at(L.lanes, i)), dS(l.return, i, e), p.lanes = at(p.lanes, i);
              break;
            }
            y = y.next;
          }
        } else if (l.tag === K)
          c = l.type === e.type ? null : l.child;
        else if (l.tag === pe) {
          var V = l.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = at(V.lanes, i);
          var $ = V.alternate;
          $ !== null && ($.lanes = at($.lanes, i)), dS(V, i, e), c = l.sibling;
        } else
          c = l.child;
        if (c !== null)
          c.return = l;
        else
          for (c = l; c !== null; ) {
            if (c === e) {
              c = null;
              break;
            }
            var q = c.sibling;
            if (q !== null) {
              q.return = c.return, c = q;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function Wf(e, t) {
      ty = e, Bf = null, cS = null;
      var i = e.dependencies;
      if (i !== null) {
        var l = i.firstContext;
        l !== null && (Yr(i.lanes, t) && yh(), i.firstContext = null);
      }
    }
    function Vn(e) {
      ny && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (cS !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (ty === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = i, ty.dependencies = {
            lanes: X,
            firstContext: i
          };
        } else
          Bf = Bf.next = i;
      }
      return t;
    }
    var ec = null;
    function pS(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function aM() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var l = i.next, c = t.pending;
            if (c !== null) {
              var p = c.next;
              c.next = l, i.next = p;
            }
            t.pending = i;
          }
        }
        ec = null;
      }
    }
    function U_(e, t, i, l) {
      var c = t.interleaved;
      return c === null ? (i.next = i, pS(t)) : (i.next = c.next, c.next = i), t.interleaved = i, ay(e, l);
    }
    function iM(e, t, i, l) {
      var c = t.interleaved;
      c === null ? (i.next = i, pS(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
    }
    function lM(e, t, i, l) {
      var c = t.interleaved;
      return c === null ? (i.next = i, pS(t)) : (i.next = c.next, c.next = i), t.interleaved = i, ay(e, l);
    }
    function Na(e, t) {
      return ay(e, t);
    }
    var oM = ay;
    function ay(e, t) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), i === null && (e.flags & ($t | _a)) !== Pe && jC(e);
      for (var l = e, c = e.return; c !== null; )
        c.childLanes = at(c.childLanes, t), i = c.alternate, i !== null ? i.childLanes = at(i.childLanes, t) : (c.flags & ($t | _a)) !== Pe && jC(e), l = c, c = c.return;
      if (l.tag === O) {
        var p = l.stateNode;
        return p;
      } else
        return null;
    }
    var j_ = 0, A_ = 1, iy = 2, hS = 3, ly = !1, vS, oy;
    vS = !1, oy = null;
    function mS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: X
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function z_(e, t) {
      var i = t.updateQueue, l = e.updateQueue;
      if (i === l) {
        var c = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = c;
      }
    }
    function No(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: j_,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Fu(e, t, i) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var c = l.shared;
      if (oy === c && !vS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vS = !0), oN()) {
        var p = c.pending;
        return p === null ? t.next = t : (t.next = p.next, p.next = t), c.pending = t, oM(e, i);
      } else
        return lM(e, c, t, i);
    }
    function uy(e, t, i) {
      var l = t.updateQueue;
      if (l !== null) {
        var c = l.shared;
        if (pp(i)) {
          var p = c.lanes;
          p = vp(p, e.pendingLanes);
          var y = at(p, i);
          c.lanes = y, gu(e, y);
        }
      }
    }
    function yS(e, t) {
      var i = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var c = l.updateQueue;
        if (i === c) {
          var p = null, y = null, w = i.firstBaseUpdate;
          if (w !== null) {
            var E = w;
            do {
              var x = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              y === null ? p = y = x : (y.next = x, y = x), E = E.next;
            } while (E !== null);
            y === null ? p = y = t : (y.next = t, y = t);
          } else
            p = y = t;
          i = {
            baseState: c.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: y,
            shared: c.shared,
            effects: c.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var D = i.lastBaseUpdate;
      D === null ? i.firstBaseUpdate = t : D.next = t, i.lastBaseUpdate = t;
    }
    function uM(e, t, i, l, c, p) {
      switch (i.tag) {
        case A_: {
          var y = i.payload;
          if (typeof y == "function") {
            O_();
            var w = y.call(p, l, c);
            {
              if (e.mode & tn) {
                bn(!0);
                try {
                  y.call(p, l, c);
                } finally {
                  bn(!1);
                }
              }
              N_();
            }
            return w;
          }
          return y;
        }
        case hS:
          e.flags = e.flags & ~Fn | Ze;
        case j_: {
          var E = i.payload, x;
          if (typeof E == "function") {
            O_(), x = E.call(p, l, c);
            {
              if (e.mode & tn) {
                bn(!0);
                try {
                  E.call(p, l, c);
                } finally {
                  bn(!1);
                }
              }
              N_();
            }
          } else
            x = E;
          return x == null ? l : ct({}, l, x);
        }
        case iy:
          return ly = !0, l;
      }
      return l;
    }
    function sy(e, t, i, l) {
      var c = e.updateQueue;
      ly = !1, oy = c.shared;
      var p = c.firstBaseUpdate, y = c.lastBaseUpdate, w = c.shared.pending;
      if (w !== null) {
        c.shared.pending = null;
        var E = w, x = E.next;
        E.next = null, y === null ? p = x : y.next = x, y = E;
        var D = e.alternate;
        if (D !== null) {
          var j = D.updateQueue, L = j.lastBaseUpdate;
          L !== y && (L === null ? j.firstBaseUpdate = x : L.next = x, j.lastBaseUpdate = E);
        }
      }
      if (p !== null) {
        var V = c.baseState, $ = X, q = null, be = null, Ye = null, je = p;
        do {
          var mt = je.lane, dt = je.eventTime;
          if (mo(l, mt)) {
            if (Ye !== null) {
              var Z = {
                eventTime: dt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              Ye = Ye.next = Z;
            }
            V = uM(e, c, je, V, t, i);
            var Y = je.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            je.lane !== ht) {
              e.flags |= si;
              var le = c.effects;
              le === null ? c.effects = [je] : le.push(je);
            }
          } else {
            var P = {
              eventTime: dt,
              lane: mt,
              tag: je.tag,
              payload: je.payload,
              callback: je.callback,
              next: null
            };
            Ye === null ? (be = Ye = P, q = V) : Ye = Ye.next = P, $ = at($, mt);
          }
          if (je = je.next, je === null) {
            if (w = c.shared.pending, w === null)
              break;
            var De = w, _e = De.next;
            De.next = null, je = _e, c.lastBaseUpdate = De, c.shared.pending = null;
          }
        } while (!0);
        Ye === null && (q = V), c.baseState = q, c.firstBaseUpdate = be, c.lastBaseUpdate = Ye;
        var qe = c.shared.interleaved;
        if (qe !== null) {
          var tt = qe;
          do
            $ = at($, tt.lane), tt = tt.next;
          while (tt !== qe);
        } else
          p === null && (c.shared.lanes = X);
        kh($), e.lanes = $, e.memoizedState = V;
      }
      oy = null;
    }
    function sM(e, t) {
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
    function H_(e, t, i) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var c = 0; c < l.length; c++) {
          var p = l[c], y = p.callback;
          y !== null && (p.callback = null, sM(y, i));
        }
    }
    var gS = {}, P_ = new a.Component().refs, SS, wS, ES, _S, xS, Y_, fy, CS, TS, bS;
    {
      SS = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set();
      var I_ = /* @__PURE__ */ new Set();
      fy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          I_.has(i) || (I_.add(i), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Y_ = function(e, t) {
        if (t === void 0) {
          var i = zt(e) || "Component";
          xS.has(i) || (xS.add(i), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(gS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(gS);
    }
    function DS(e, t, i, l) {
      var c = e.memoizedState, p = i(l, c);
      {
        if (e.mode & tn) {
          bn(!0);
          try {
            p = i(l, c);
          } finally {
            bn(!1);
          }
        }
        Y_(t, p);
      }
      var y = p == null ? c : ct({}, c, p);
      if (e.memoizedState = y, e.lanes === X) {
        var w = e.updateQueue;
        w.baseState = y;
      }
    }
    var RS = {
      isMounted: aa,
      enqueueSetState: function(e, t, i) {
        var l = wa(e), c = ca(), p = Wu(l), y = No(c, p);
        y.payload = t, i != null && (fy(i, "setState"), y.callback = i);
        var w = Fu(l, y, p);
        w !== null && (nr(w, l, p, c), uy(w, l, p)), xl(l, p);
      },
      enqueueReplaceState: function(e, t, i) {
        var l = wa(e), c = ca(), p = Wu(l), y = No(c, p);
        y.tag = A_, y.payload = t, i != null && (fy(i, "replaceState"), y.callback = i);
        var w = Fu(l, y, p);
        w !== null && (nr(w, l, p, c), uy(w, l, p)), xl(l, p);
      },
      enqueueForceUpdate: function(e, t) {
        var i = wa(e), l = ca(), c = Wu(i), p = No(l, c);
        p.tag = iy, t != null && (fy(t, "forceUpdate"), p.callback = t);
        var y = Fu(i, p, c);
        y !== null && (nr(y, i, c, l), uy(y, i, c)), sp(i, c);
      }
    };
    function V_(e, t, i, l, c, p, y) {
      var w = e.stateNode;
      if (typeof w.shouldComponentUpdate == "function") {
        var E = w.shouldComponentUpdate(l, p, y);
        {
          if (e.mode & tn) {
            bn(!0);
            try {
              E = w.shouldComponentUpdate(l, p, y);
            } finally {
              bn(!1);
            }
          }
          E === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ze(i, l) || !ze(c, p) : !0;
    }
    function cM(e, t, i) {
      var l = e.stateNode;
      {
        var c = zt(t) || "Component", p = l.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), l.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), l.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), l.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), t.contextType && t.contextTypes && !TS.has(t) && (TS.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof l.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof l.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof l.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof l.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var y = l.props !== i;
        l.props !== void 0 && y && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), l.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !ES.has(t) && (ES.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof l.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof l.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var w = l.state;
        w && (typeof w != "object" || An(w)) && m("%s.state: must be set to an object or null", c), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function $_(e, t) {
      t.updater = RS, e.stateNode = t, uu(t, e), t._reactInternalInstance = gS;
    }
    function B_(e, t, i) {
      var l = !1, c = Xa, p = Xa, y = t.contextType;
      if ("contextType" in t) {
        var w = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === ge && y._context === void 0
        );
        if (!w && !bS.has(t)) {
          bS.add(t);
          var E = "";
          y === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? E = " However, it is set to a " + typeof y + "." : y.$$typeof === ae ? E = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", E);
        }
      }
      if (typeof y == "object" && y !== null)
        p = Vn(y);
      else {
        c = Pf(e, t, !0);
        var x = t.contextTypes;
        l = x != null, p = l ? Yf(e, c) : Xa;
      }
      var D = new t(i, p);
      if (e.mode & tn) {
        bn(!0);
        try {
          D = new t(i, p);
        } finally {
          bn(!1);
        }
      }
      var j = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      $_(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var L = zt(t) || "Component";
          wS.has(L) || (wS.add(L), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, D.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var V = null, $ = null, q = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), V !== null || $ !== null || q !== null) {
            var be = zt(t) || "Component", Ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _S.has(be) || (_S.add(be), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, be, Ye, V !== null ? `
  ` + V : "", $ !== null ? `
  ` + $ : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return l && v_(e, c, p), D;
    }
    function fM(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), RS.enqueueReplaceState(t, t.state, null));
    }
    function W_(e, t, i, l) {
      var c = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l), t.state !== c) {
        {
          var p = nt(e) || "Component";
          SS.has(p) || (SS.add(p), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        RS.enqueueReplaceState(t, t.state, null);
      }
    }
    function kS(e, t, i, l) {
      cM(e, t, i);
      var c = e.stateNode;
      c.props = i, c.state = e.memoizedState, c.refs = P_, mS(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        c.context = Vn(p);
      else {
        var y = Pf(e, t, !0);
        c.context = Yf(e, y);
      }
      {
        if (c.state === i) {
          var w = zt(t) || "Component";
          CS.has(w) || (CS.add(w), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", w));
        }
        e.mode & tn && Bi.recordLegacyContextWarning(e, c), Bi.recordUnsafeLifecycleWarnings(e, c);
      }
      c.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (DS(e, t, E, i), c.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (fM(e, c), sy(e, i, c, l), c.state = e.memoizedState), typeof c.componentDidMount == "function") {
        var x = rt;
        x |= jr, (e.mode & Ta) !== Ve && (x |= Ar), e.flags |= x;
      }
    }
    function dM(e, t, i, l) {
      var c = e.stateNode, p = e.memoizedProps;
      c.props = p;
      var y = c.context, w = t.contextType, E = Xa;
      if (typeof w == "object" && w !== null)
        E = Vn(w);
      else {
        var x = Pf(e, t, !0);
        E = Yf(e, x);
      }
      var D = t.getDerivedStateFromProps, j = typeof D == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !j && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (p !== i || y !== E) && W_(e, c, i, E), F_();
      var L = e.memoizedState, V = c.state = L;
      if (sy(e, i, c, l), V = e.memoizedState, p === i && L === V && !Wm() && !cy()) {
        if (typeof c.componentDidMount == "function") {
          var $ = rt;
          $ |= jr, (e.mode & Ta) !== Ve && ($ |= Ar), e.flags |= $;
        }
        return !1;
      }
      typeof D == "function" && (DS(e, t, D, i), V = e.memoizedState);
      var q = cy() || V_(e, t, p, i, L, V, E);
      if (q) {
        if (!j && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var be = rt;
          be |= jr, (e.mode & Ta) !== Ve && (be |= Ar), e.flags |= be;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var Ye = rt;
          Ye |= jr, (e.mode & Ta) !== Ve && (Ye |= Ar), e.flags |= Ye;
        }
        e.memoizedProps = i, e.memoizedState = V;
      }
      return c.props = i, c.state = V, c.context = E, q;
    }
    function pM(e, t, i, l, c) {
      var p = t.stateNode;
      z_(e, t);
      var y = t.memoizedProps, w = t.type === t.elementType ? y : Wi(t.type, y);
      p.props = w;
      var E = t.pendingProps, x = p.context, D = i.contextType, j = Xa;
      if (typeof D == "object" && D !== null)
        j = Vn(D);
      else {
        var L = Pf(t, i, !0);
        j = Yf(t, L);
      }
      var V = i.getDerivedStateFromProps, $ = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !$ && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (y !== E || x !== j) && W_(t, p, l, j), F_();
      var q = t.memoizedState, be = p.state = q;
      if (sy(t, l, p, c), be = t.memoizedState, y === E && q === be && !Wm() && !cy() && !Fe)
        return typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= rt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Ea), !1;
      typeof V == "function" && (DS(t, i, V, l), be = t.memoizedState);
      var Ye = cy() || V_(t, i, w, l, q, be, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Fe;
      return Ye ? (!$ && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, be, j), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, be, j)), typeof p.componentDidUpdate == "function" && (t.flags |= rt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= Ea)) : (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= rt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Ea), t.memoizedProps = l, t.memoizedState = be), p.props = l, p.state = be, p.context = j, Ye;
    }
    var MS, OS, NS, LS, US, G_ = function(e, t) {
    };
    MS = !1, OS = !1, NS = {}, LS = {}, US = {}, G_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = nt(t) || "Component";
        LS[i] || (LS[i] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ah(e, t, i) {
      var l = i.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & tn || yr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self)) {
          var c = nt(e) || "Component";
          NS[c] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), NS[c] = !0);
        }
        if (i._owner) {
          var p = i._owner, y;
          if (p) {
            var w = p;
            if (w.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = w.stateNode;
          }
          if (!y)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = y;
          Ti(l, "ref");
          var x = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var D = function(j) {
            var L = E.refs;
            L === P_ && (L = E.refs = {}), j === null ? delete L[x] : L[x] = j;
          };
          return D._stringRef = x, D;
        } else {
          if (typeof l != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
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
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function py(e) {
      {
        var t = nt(e) || "Component";
        if (US[t])
          return;
        US[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Q_(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function q_(e) {
      function t(P, Z) {
        if (e) {
          var Y = P.deletions;
          Y === null ? (P.deletions = [Z], P.flags |= bt) : Y.push(Z);
        }
      }
      function i(P, Z) {
        if (!e)
          return null;
        for (var Y = Z; Y !== null; )
          t(P, Y), Y = Y.sibling;
        return null;
      }
      function l(P, Z) {
        for (var Y = /* @__PURE__ */ new Map(), le = Z; le !== null; )
          le.key !== null ? Y.set(le.key, le) : Y.set(le.index, le), le = le.sibling;
        return Y;
      }
      function c(P, Z) {
        var Y = uc(P, Z);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function p(P, Z, Y) {
        if (P.index = Y, !e)
          return P.flags |= Kd, Z;
        var le = P.alternate;
        if (le !== null) {
          var De = le.index;
          return De < Z ? (P.flags |= $t, Z) : De;
        } else
          return P.flags |= $t, Z;
      }
      function y(P) {
        return e && P.alternate === null && (P.flags |= $t), P;
      }
      function w(P, Z, Y, le) {
        if (Z === null || Z.tag !== A) {
          var De = ow(Y, P.mode, le);
          return De.return = P, De;
        } else {
          var _e = c(Z, Y);
          return _e.return = P, _e;
        }
      }
      function E(P, Z, Y, le) {
        var De = Y.type;
        if (De === Va)
          return D(P, Z, Y.props.children, le, Y.key);
        if (Z !== null && (Z.elementType === De || // Keep this check inline so it only runs on the false path:
        HC(Z, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof De == "object" && De !== null && De.$$typeof === Be && Q_(De) === Z.type)) {
          var _e = c(Z, Y.props);
          return _e.ref = ah(P, Z, Y), _e.return = P, _e._debugSource = Y._source, _e._debugOwner = Y._owner, _e;
        }
        var qe = lw(Y, P.mode, le);
        return qe.ref = ah(P, Z, Y), qe.return = P, qe;
      }
      function x(P, Z, Y, le) {
        if (Z === null || Z.tag !== z || Z.stateNode.containerInfo !== Y.containerInfo || Z.stateNode.implementation !== Y.implementation) {
          var De = uw(Y, P.mode, le);
          return De.return = P, De;
        } else {
          var _e = c(Z, Y.children || []);
          return _e.return = P, _e;
        }
      }
      function D(P, Z, Y, le, De) {
        if (Z === null || Z.tag !== Q) {
          var _e = Qu(Y, P.mode, le, De);
          return _e.return = P, _e;
        } else {
          var qe = c(Z, Y);
          return qe.return = P, qe;
        }
      }
      function j(P, Z, Y) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var le = ow("" + Z, P.mode, Y);
          return le.return = P, le;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case il: {
              var De = lw(Z, P.mode, Y);
              return De.ref = ah(P, null, Z), De.return = P, De;
            }
            case ea: {
              var _e = uw(Z, P.mode, Y);
              return _e.return = P, _e;
            }
            case Be: {
              var qe = Z._payload, tt = Z._init;
              return j(P, tt(qe), Y);
            }
          }
          if (An(Z) || bi(Z)) {
            var jt = Qu(Z, P.mode, Y, null);
            return jt.return = P, jt;
          }
          dy(P, Z);
        }
        return typeof Z == "function" && py(P), null;
      }
      function L(P, Z, Y, le) {
        var De = Z !== null ? Z.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return De !== null ? null : w(P, Z, "" + Y, le);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case il:
              return Y.key === De ? E(P, Z, Y, le) : null;
            case ea:
              return Y.key === De ? x(P, Z, Y, le) : null;
            case Be: {
              var _e = Y._payload, qe = Y._init;
              return L(P, Z, qe(_e), le);
            }
          }
          if (An(Y) || bi(Y))
            return De !== null ? null : D(P, Z, Y, le, null);
          dy(P, Y);
        }
        return typeof Y == "function" && py(P), null;
      }
      function V(P, Z, Y, le, De) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var _e = P.get(Y) || null;
          return w(Z, _e, "" + le, De);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case il: {
              var qe = P.get(le.key === null ? Y : le.key) || null;
              return E(Z, qe, le, De);
            }
            case ea: {
              var tt = P.get(le.key === null ? Y : le.key) || null;
              return x(Z, tt, le, De);
            }
            case Be:
              var jt = le._payload, _t = le._init;
              return V(P, Z, Y, _t(jt), De);
          }
          if (An(le) || bi(le)) {
            var On = P.get(Y) || null;
            return D(Z, On, le, De, null);
          }
          dy(Z, le);
        }
        return typeof le == "function" && py(Z), null;
      }
      function $(P, Z, Y) {
        {
          if (typeof P != "object" || P === null)
            return Z;
          switch (P.$$typeof) {
            case il:
            case ea:
              G_(P, Y);
              var le = P.key;
              if (typeof le != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(le);
                break;
              }
              if (!Z.has(le)) {
                Z.add(le);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case Be:
              var De = P._payload, _e = P._init;
              $(_e(De), Z, Y);
              break;
          }
        }
        return Z;
      }
      function q(P, Z, Y, le) {
        for (var De = null, _e = 0; _e < Y.length; _e++) {
          var qe = Y[_e];
          De = $(qe, De, P);
        }
        for (var tt = null, jt = null, _t = Z, On = 0, xt = 0, En = null; _t !== null && xt < Y.length; xt++) {
          _t.index > xt ? (En = _t, _t = null) : En = _t.sibling;
          var Br = L(P, _t, Y[xt], le);
          if (Br === null) {
            _t === null && (_t = En);
            break;
          }
          e && _t && Br.alternate === null && t(P, _t), On = p(Br, On, xt), jt === null ? tt = Br : jt.sibling = Br, jt = Br, _t = En;
        }
        if (xt === Y.length) {
          if (i(P, _t), Er()) {
            var Rr = xt;
            qs(P, Rr);
          }
          return tt;
        }
        if (_t === null) {
          for (; xt < Y.length; xt++) {
            var ei = j(P, Y[xt], le);
            ei !== null && (On = p(ei, On, xt), jt === null ? tt = ei : jt.sibling = ei, jt = ei);
          }
          if (Er()) {
            var fa = xt;
            qs(P, fa);
          }
          return tt;
        }
        for (var da = l(P, _t); xt < Y.length; xt++) {
          var Wr = V(da, P, xt, Y[xt], le);
          Wr !== null && (e && Wr.alternate !== null && da.delete(Wr.key === null ? xt : Wr.key), On = p(Wr, On, xt), jt === null ? tt = Wr : jt.sibling = Wr, jt = Wr);
        }
        if (e && da.forEach(function(sd) {
          return t(P, sd);
        }), Er()) {
          var Fo = xt;
          qs(P, Fo);
        }
        return tt;
      }
      function be(P, Z, Y, le) {
        var De = bi(Y);
        if (typeof De != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (OS || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), OS = !0), Y.entries === De && (MS || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), MS = !0);
          var _e = De.call(Y);
          if (_e)
            for (var qe = null, tt = _e.next(); !tt.done; tt = _e.next()) {
              var jt = tt.value;
              qe = $(jt, qe, P);
            }
        }
        var _t = De.call(Y);
        if (_t == null)
          throw new Error("An iterable object provided no iterator.");
        for (var On = null, xt = null, En = Z, Br = 0, Rr = 0, ei = null, fa = _t.next(); En !== null && !fa.done; Rr++, fa = _t.next()) {
          En.index > Rr ? (ei = En, En = null) : ei = En.sibling;
          var da = L(P, En, fa.value, le);
          if (da === null) {
            En === null && (En = ei);
            break;
          }
          e && En && da.alternate === null && t(P, En), Br = p(da, Br, Rr), xt === null ? On = da : xt.sibling = da, xt = da, En = ei;
        }
        if (fa.done) {
          if (i(P, En), Er()) {
            var Wr = Rr;
            qs(P, Wr);
          }
          return On;
        }
        if (En === null) {
          for (; !fa.done; Rr++, fa = _t.next()) {
            var Fo = j(P, fa.value, le);
            Fo !== null && (Br = p(Fo, Br, Rr), xt === null ? On = Fo : xt.sibling = Fo, xt = Fo);
          }
          if (Er()) {
            var sd = Rr;
            qs(P, sd);
          }
          return On;
        }
        for (var Uh = l(P, En); !fa.done; Rr++, fa = _t.next()) {
          var Yl = V(Uh, P, Rr, fa.value, le);
          Yl !== null && (e && Yl.alternate !== null && Uh.delete(Yl.key === null ? Rr : Yl.key), Br = p(Yl, Br, Rr), xt === null ? On = Yl : xt.sibling = Yl, xt = Yl);
        }
        if (e && Uh.forEach(function(DL) {
          return t(P, DL);
        }), Er()) {
          var bL = Rr;
          qs(P, bL);
        }
        return On;
      }
      function Ye(P, Z, Y, le) {
        if (Z !== null && Z.tag === A) {
          i(P, Z.sibling);
          var De = c(Z, Y);
          return De.return = P, De;
        }
        i(P, Z);
        var _e = ow(Y, P.mode, le);
        return _e.return = P, _e;
      }
      function je(P, Z, Y, le) {
        for (var De = Y.key, _e = Z; _e !== null; ) {
          if (_e.key === De) {
            var qe = Y.type;
            if (qe === Va) {
              if (_e.tag === Q) {
                i(P, _e.sibling);
                var tt = c(_e, Y.props.children);
                return tt.return = P, tt._debugSource = Y._source, tt._debugOwner = Y._owner, tt;
              }
            } else if (_e.elementType === qe || // Keep this check inline so it only runs on the false path:
            HC(_e, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof qe == "object" && qe !== null && qe.$$typeof === Be && Q_(qe) === _e.type) {
              i(P, _e.sibling);
              var jt = c(_e, Y.props);
              return jt.ref = ah(P, _e, Y), jt.return = P, jt._debugSource = Y._source, jt._debugOwner = Y._owner, jt;
            }
            i(P, _e);
            break;
          } else
            t(P, _e);
          _e = _e.sibling;
        }
        if (Y.type === Va) {
          var _t = Qu(Y.props.children, P.mode, le, Y.key);
          return _t.return = P, _t;
        } else {
          var On = lw(Y, P.mode, le);
          return On.ref = ah(P, Z, Y), On.return = P, On;
        }
      }
      function mt(P, Z, Y, le) {
        for (var De = Y.key, _e = Z; _e !== null; ) {
          if (_e.key === De)
            if (_e.tag === z && _e.stateNode.containerInfo === Y.containerInfo && _e.stateNode.implementation === Y.implementation) {
              i(P, _e.sibling);
              var qe = c(_e, Y.children || []);
              return qe.return = P, qe;
            } else {
              i(P, _e);
              break;
            }
          else
            t(P, _e);
          _e = _e.sibling;
        }
        var tt = uw(Y, P.mode, le);
        return tt.return = P, tt;
      }
      function dt(P, Z, Y, le) {
        var De = typeof Y == "object" && Y !== null && Y.type === Va && Y.key === null;
        if (De && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case il:
              return y(je(P, Z, Y, le));
            case ea:
              return y(mt(P, Z, Y, le));
            case Be:
              var _e = Y._payload, qe = Y._init;
              return dt(P, Z, qe(_e), le);
          }
          if (An(Y))
            return q(P, Z, Y, le);
          if (bi(Y))
            return be(P, Z, Y, le);
          dy(P, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? y(Ye(P, Z, "" + Y, le)) : (typeof Y == "function" && py(P), i(P, Z));
      }
      return dt;
    }
    var Gf = q_(!0), Z_ = q_(!1);
    function hM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, l = uc(i, i.pendingProps);
        for (t.child = l, l.return = t; i.sibling !== null; )
          i = i.sibling, l = l.sibling = uc(i, i.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function vM(e, t) {
      for (var i = e.child; i !== null; )
        $N(i, t), i = i.sibling;
    }
    var ih = {}, Hu = Uu(ih), lh = Uu(ih), hy = Uu(ih);
    function vy(e) {
      if (e === ih)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function K_() {
      var e = vy(hy.current);
      return e;
    }
    function jS(e, t) {
      Vr(hy, t, e), Vr(lh, e, e), Vr(Hu, ih, e);
      var i = kR(t);
      Ir(Hu, e), Vr(Hu, i, e);
    }
    function Qf(e) {
      Ir(Hu, e), Ir(lh, e), Ir(hy, e);
    }
    function AS() {
      var e = vy(Hu.current);
      return e;
    }
    function X_(e) {
      vy(hy.current);
      var t = vy(Hu.current), i = MR(t, e.type);
      t !== i && (Vr(lh, e, e), Vr(Hu, i, e));
    }
    function zS(e) {
      lh.current === e && (Ir(Hu, e), Ir(lh, e));
    }
    var mM = 0, J_ = 1, ex = 1, oh = 2, Gi = Uu(mM);
    function FS(e, t) {
      return (e & t) !== 0;
    }
    function qf(e) {
      return e & J_;
    }
    function HS(e, t) {
      return e & J_ | t;
    }
    function yM(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      Vr(Gi, t, e);
    }
    function Zf(e) {
      Ir(Gi, e);
    }
    function gM(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function my(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === oe) {
          var i = t.memoizedState;
          if (i !== null) {
            var l = i.dehydrated;
            if (l === null || c_(l) || B0(l))
              return t;
          }
        } else if (t.tag === Qe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var c = (t.flags & Ze) !== Pe;
          if (c)
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
    ), qn = (
      /* */
      1
    ), Ul = (
      /*  */
      2
    ), Zn = (
      /*    */
      4
    ), _r = (
      /*   */
      8
    ), PS = [];
    function YS() {
      for (var e = 0; e < PS.length; e++) {
        var t = PS[e];
        t._workInProgressVersionPrimary = null;
      }
      PS.length = 0;
    }
    function SM(e, t) {
      var i = t._getVersion, l = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Te = s.ReactCurrentDispatcher, uh = s.ReactCurrentBatchConfig, IS, Kf;
    IS = /* @__PURE__ */ new Set();
    var tc = X, Ut = null, Kn = null, Xn = null, yy = !1, sh = !1, ch = 0, wM = 0, EM = 25, J = null, gi = null, Yu = -1, VS = !1;
    function Rt() {
      {
        var e = J;
        gi === null ? gi = [e] : gi.push(e);
      }
    }
    function me() {
      {
        var e = J;
        gi !== null && (Yu++, gi[Yu] !== e && _M(e));
      }
    }
    function Xf(e) {
      e != null && !An(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function _M(e) {
      {
        var t = nt(Ut);
        if (!IS.has(t) && (IS.add(t), gi !== null)) {
          for (var i = "", l = 30, c = 0; c <= Yu; c++) {
            for (var p = gi[c], y = c === Yu ? e : p, w = c + 1 + ". " + p; w.length < l; )
              w += " ";
            w += y + `
`, i += w;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
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
    function $S(e, t) {
      if (VS)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Oe(e[i], t[i]))
          return !1;
      return !0;
    }
    function Jf(e, t, i, l, c, p) {
      tc = p, Ut = t, gi = e !== null ? e._debugHookTypes : null, Yu = -1, VS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = X, e !== null && e.memoizedState !== null ? Te.current = _x : gi !== null ? Te.current = Ex : Te.current = wx;
      var y = i(l, c);
      if (sh) {
        var w = 0;
        do {
          if (sh = !1, ch = 0, w >= EM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          w += 1, VS = !1, Kn = null, Xn = null, t.updateQueue = null, Yu = -1, Te.current = xx, y = i(l, c);
        } while (sh);
      }
      Te.current = My, t._debugHookTypes = gi;
      var E = Kn !== null && Kn.next !== null;
      if (tc = X, Ut = null, Kn = null, Xn = null, J = null, gi = null, Yu = -1, e !== null && (e.flags & Wn) !== (t.flags & Wn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ut) !== Ve && m("Internal React error: Expected static flag was missing. Please notify the React team."), yy = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function ed() {
      var e = ch !== 0;
      return ch = 0, e;
    }
    function tx(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ve ? t.flags &= ~(io | Ar | Kt | rt) : t.flags &= ~(Kt | rt), e.lanes = yu(e.lanes, i);
    }
    function nx() {
      if (Te.current = My, yy) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        yy = !1;
      }
      tc = X, Ut = null, Kn = null, Xn = null, gi = null, Yu = -1, J = null, vx = !1, sh = !1, ch = 0;
    }
    function jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Xn === null ? Ut.memoizedState = Xn = e : Xn = Xn.next = e, Xn;
    }
    function Si() {
      var e;
      if (Kn === null) {
        var t = Ut.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Kn.next;
      var i;
      if (Xn === null ? i = Ut.memoizedState : i = Xn.next, i !== null)
        Xn = i, i = Xn.next, Kn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Kn = e;
        var l = {
          memoizedState: Kn.memoizedState,
          baseState: Kn.baseState,
          baseQueue: Kn.baseQueue,
          queue: Kn.queue,
          next: null
        };
        Xn === null ? Ut.memoizedState = Xn = l : Xn = Xn.next = l;
      }
      return Xn;
    }
    function rx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function BS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function WS(e, t, i) {
      var l = jl(), c;
      i !== void 0 ? c = i(t) : c = t, l.memoizedState = l.baseState = c;
      var p = {
        pending: null,
        interleaved: null,
        lanes: X,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      };
      l.queue = p;
      var y = p.dispatch = bM.bind(null, Ut, p);
      return [l.memoizedState, y];
    }
    function GS(e, t, i) {
      var l = Si(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var p = Kn, y = p.baseQueue, w = c.pending;
      if (w !== null) {
        if (y !== null) {
          var E = y.next, x = w.next;
          y.next = x, w.next = E;
        }
        p.baseQueue !== y && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = y = w, c.pending = null;
      }
      if (y !== null) {
        var D = y.next, j = p.baseState, L = null, V = null, $ = null, q = D;
        do {
          var be = q.lane;
          if (mo(tc, be)) {
            if ($ !== null) {
              var je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                action: q.action,
                hasEagerState: q.hasEagerState,
                eagerState: q.eagerState,
                next: null
              };
              $ = $.next = je;
            }
            if (q.hasEagerState)
              j = q.eagerState;
            else {
              var mt = q.action;
              j = e(j, mt);
            }
          } else {
            var Ye = {
              lane: be,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            };
            $ === null ? (V = $ = Ye, L = j) : $ = $.next = Ye, Ut.lanes = at(Ut.lanes, be), kh(be);
          }
          q = q.next;
        } while (q !== null && q !== D);
        $ === null ? L = j : $.next = V, Oe(j, l.memoizedState) || yh(), l.memoizedState = j, l.baseState = L, l.baseQueue = $, c.lastRenderedState = j;
      }
      var dt = c.interleaved;
      if (dt !== null) {
        var P = dt;
        do {
          var Z = P.lane;
          Ut.lanes = at(Ut.lanes, Z), kh(Z), P = P.next;
        } while (P !== dt);
      } else
        y === null && (c.lanes = X);
      var Y = c.dispatch;
      return [l.memoizedState, Y];
    }
    function QS(e, t, i) {
      var l = Si(), c = l.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var p = c.dispatch, y = c.pending, w = l.memoizedState;
      if (y !== null) {
        c.pending = null;
        var E = y.next, x = E;
        do {
          var D = x.action;
          w = e(w, D), x = x.next;
        } while (x !== E);
        Oe(w, l.memoizedState) || yh(), l.memoizedState = w, l.baseQueue === null && (l.baseState = w), c.lastRenderedState = w;
      }
      return [w, p];
    }
    function R3(e, t, i) {
    }
    function k3(e, t, i) {
    }
    function qS(e, t, i) {
      var l = Ut, c = jl(), p, y = Er();
      if (y) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        p = i(), Kf || p !== i() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (p = t(), !Kf) {
          var w = t();
          Oe(p, w) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
        }
        var E = Qy();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(E, tc) || ax(l, t, p);
      }
      c.memoizedState = p;
      var x = {
        value: p,
        getSnapshot: t
      };
      return c.queue = x, _y(lx.bind(null, l, x, e), [e]), l.flags |= Kt, fh(qn | _r, ix.bind(null, l, x, p, t), void 0, null), p;
    }
    function gy(e, t, i) {
      var l = Ut, c = Si(), p = t();
      if (!Kf) {
        var y = t();
        Oe(p, y) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var w = c.memoizedState, E = !Oe(w, p);
      E && (c.memoizedState = p, yh());
      var x = c.queue;
      if (ph(lx.bind(null, l, x, e), [e]), x.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & qn) {
        l.flags |= Kt, fh(qn | _r, ix.bind(null, l, x, p, t), void 0, null);
        var D = Qy();
        if (D === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(D, tc) || ax(l, t, p);
      }
      return p;
    }
    function ax(e, t, i) {
      e.flags |= xs;
      var l = {
        getSnapshot: t,
        value: i
      }, c = Ut.updateQueue;
      if (c === null)
        c = rx(), Ut.updateQueue = c, c.stores = [l];
      else {
        var p = c.stores;
        p === null ? c.stores = [l] : p.push(l);
      }
    }
    function ix(e, t, i, l) {
      t.value = i, t.getSnapshot = l, ox(t) && ux(e);
    }
    function lx(e, t, i) {
      var l = function() {
        ox(t) && ux(e);
      };
      return i(l);
    }
    function ox(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var l = t();
        return !Oe(i, l);
      } catch {
        return !0;
      }
    }
    function ux(e) {
      var t = Na(e, Ge);
      t !== null && nr(t, e, Ge, Ht);
    }
    function Sy(e) {
      var t = jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: X,
        dispatch: null,
        lastRenderedReducer: BS,
        lastRenderedState: e
      };
      t.queue = i;
      var l = i.dispatch = DM.bind(null, Ut, i);
      return [t.memoizedState, l];
    }
    function ZS(e) {
      return GS(BS);
    }
    function KS(e) {
      return QS(BS);
    }
    function fh(e, t, i, l) {
      var c = {
        tag: e,
        create: t,
        destroy: i,
        deps: l,
        // Circular
        next: null
      }, p = Ut.updateQueue;
      if (p === null)
        p = rx(), Ut.updateQueue = p, p.lastEffect = c.next = c;
      else {
        var y = p.lastEffect;
        if (y === null)
          p.lastEffect = c.next = c;
        else {
          var w = y.next;
          y.next = c, c.next = w, p.lastEffect = c;
        }
      }
      return c;
    }
    function XS(e) {
      var t = jl();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function wy(e) {
      var t = Si();
      return t.memoizedState;
    }
    function dh(e, t, i, l) {
      var c = jl(), p = l === void 0 ? null : l;
      Ut.flags |= e, c.memoizedState = fh(qn | t, i, void 0, p);
    }
    function Ey(e, t, i, l) {
      var c = Si(), p = l === void 0 ? null : l, y = void 0;
      if (Kn !== null) {
        var w = Kn.memoizedState;
        if (y = w.destroy, p !== null) {
          var E = w.deps;
          if ($S(p, E)) {
            c.memoizedState = fh(t, i, y, p);
            return;
          }
        }
      }
      Ut.flags |= e, c.memoizedState = fh(qn | t, i, y, p);
    }
    function _y(e, t) {
      return (Ut.mode & Ta) !== Ve ? dh(io | Kt | yl, _r, e, t) : dh(Kt | yl, _r, e, t);
    }
    function ph(e, t) {
      return Ey(Kt, _r, e, t);
    }
    function JS(e, t) {
      return dh(rt, Ul, e, t);
    }
    function xy(e, t) {
      return Ey(rt, Ul, e, t);
    }
    function e1(e, t) {
      var i = rt;
      return i |= jr, (Ut.mode & Ta) !== Ve && (i |= Ar), dh(i, Zn, e, t);
    }
    function Cy(e, t) {
      return Ey(rt, Zn, e, t);
    }
    function sx(e, t) {
      if (typeof t == "function") {
        var i = t, l = e();
        return i(l), function() {
          i(null);
        };
      } else if (t != null) {
        var c = t;
        c.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(c).join(", ") + "}");
        var p = e();
        return c.current = p, function() {
          c.current = null;
        };
      }
    }
    function t1(e, t, i) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = i != null ? i.concat([e]) : null, c = rt;
      return c |= jr, (Ut.mode & Ta) !== Ve && (c |= Ar), dh(c, Zn, sx.bind(null, t, e), l);
    }
    function Ty(e, t, i) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = i != null ? i.concat([e]) : null;
      return Ey(rt, Zn, sx.bind(null, t, e), l);
    }
    function xM(e, t) {
    }
    var by = xM;
    function n1(e, t) {
      var i = jl(), l = t === void 0 ? null : t;
      return i.memoizedState = [e, l], e;
    }
    function Dy(e, t) {
      var i = Si(), l = t === void 0 ? null : t, c = i.memoizedState;
      if (c !== null && l !== null) {
        var p = c[1];
        if ($S(l, p))
          return c[0];
      }
      return i.memoizedState = [e, l], e;
    }
    function r1(e, t) {
      var i = jl(), l = t === void 0 ? null : t, c = e();
      return i.memoizedState = [c, l], c;
    }
    function Ry(e, t) {
      var i = Si(), l = t === void 0 ? null : t, c = i.memoizedState;
      if (c !== null && l !== null) {
        var p = c[1];
        if ($S(l, p))
          return c[0];
      }
      var y = e();
      return i.memoizedState = [y, l], y;
    }
    function a1(e) {
      var t = jl();
      return t.memoizedState = e, e;
    }
    function cx(e) {
      var t = Si(), i = Kn, l = i.memoizedState;
      return dx(t, l, e);
    }
    function fx(e) {
      var t = Si();
      if (Kn === null)
        return t.memoizedState = e, e;
      var i = Kn.memoizedState;
      return dx(t, i, e);
    }
    function dx(e, t, i) {
      var l = !c0(tc);
      if (l) {
        if (!Oe(i, t)) {
          var c = hp();
          Ut.lanes = at(Ut.lanes, c), kh(c), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, yh()), e.memoizedState = i, i;
    }
    function CM(e, t, i) {
      var l = Da();
      Rn(fr(l, Qn)), e(!0);
      var c = uh.transition;
      uh.transition = {};
      var p = uh.transition;
      uh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Rn(l), uh.transition = c, c === null && p._updatedFibers) {
          var y = p._updatedFibers.size;
          y > 10 && g("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
        }
      }
    }
    function i1() {
      var e = Sy(!1), t = e[0], i = e[1], l = CM.bind(null, i), c = jl();
      return c.memoizedState = l, [t, l];
    }
    function px() {
      var e = ZS(), t = e[0], i = Si(), l = i.memoizedState;
      return [t, l];
    }
    function hx() {
      var e = KS(), t = e[0], i = Si(), l = i.memoizedState;
      return [t, l];
    }
    var vx = !1;
    function TM() {
      return vx;
    }
    function l1() {
      var e = jl(), t = Qy(), i = t.identifierPrefix, l;
      if (Er()) {
        var c = Hk();
        l = ":" + i + "R" + c;
        var p = ch++;
        p > 0 && (l += "H" + p.toString(32)), l += ":";
      } else {
        var y = wM++;
        l = ":" + i + "r" + y.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function ky() {
      var e = Si(), t = e.memoizedState;
      return t;
    }
    function bM(e, t, i) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Wu(e), c = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (mx(e))
        yx(t, c);
      else {
        var p = U_(e, t, c, l);
        if (p !== null) {
          var y = ca();
          nr(p, e, l, y), gx(p, t, l);
        }
      }
      Sx(e, l);
    }
    function DM(e, t, i) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Wu(e), c = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (mx(e))
        yx(t, c);
      else {
        var p = e.alternate;
        if (e.lanes === X && (p === null || p.lanes === X)) {
          var y = t.lastRenderedReducer;
          if (y !== null) {
            var w;
            w = Te.current, Te.current = Qi;
            try {
              var E = t.lastRenderedState, x = y(E, i);
              if (c.hasEagerState = !0, c.eagerState = x, Oe(x, E)) {
                iM(e, t, c, l);
                return;
              }
            } catch {
            } finally {
              Te.current = w;
            }
          }
        }
        var D = U_(e, t, c, l);
        if (D !== null) {
          var j = ca();
          nr(D, e, l, j), gx(D, t, l);
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
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function gx(e, t, i) {
      if (pp(i)) {
        var l = t.lanes;
        l = vp(l, e.pendingLanes);
        var c = at(l, i);
        t.lanes = c, gu(e, c);
      }
    }
    function Sx(e, t, i) {
      xl(e, t);
    }
    var My = {
      readContext: Vn,
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
    }, wx = null, Ex = null, _x = null, xx = null, Al = null, Qi = null, Oy = null;
    {
      var o1 = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      wx = {
        readContext: function(e) {
          return Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Rt(), Xf(t), n1(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Rt(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Rt(), Xf(t), _y(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Rt(), Xf(i), t1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Rt(), Xf(t), JS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Rt(), Xf(t), e1(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Rt(), Xf(t);
          var i = Te.current;
          Te.current = Al;
          try {
            return r1(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Rt();
          var l = Te.current;
          Te.current = Al;
          try {
            return WS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", Rt(), XS(e);
        },
        useState: function(e) {
          J = "useState", Rt();
          var t = Te.current;
          Te.current = Al;
          try {
            return Sy(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Rt(), a1(e);
        },
        useTransition: function() {
          return J = "useTransition", Rt(), i1();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", Rt(), qS(e, t, i);
        },
        useId: function() {
          return J = "useId", Rt(), l1();
        },
        unstable_isNewReconciler: fe
      }, Ex = {
        readContext: function(e) {
          return Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", me(), n1(e, t);
        },
        useContext: function(e) {
          return J = "useContext", me(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", me(), _y(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", me(), t1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", me(), JS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", me(), e1(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", me();
          var i = Te.current;
          Te.current = Al;
          try {
            return r1(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", me();
          var l = Te.current;
          Te.current = Al;
          try {
            return WS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", me(), XS(e);
        },
        useState: function(e) {
          J = "useState", me();
          var t = Te.current;
          Te.current = Al;
          try {
            return Sy(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", me(), a1(e);
        },
        useTransition: function() {
          return J = "useTransition", me(), i1();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", me(), qS(e, t, i);
        },
        useId: function() {
          return J = "useId", me(), l1();
        },
        unstable_isNewReconciler: fe
      }, _x = {
        readContext: function(e) {
          return Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", me(), Dy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", me(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", me(), ph(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", me(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", me(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", me(), Cy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", me();
          var i = Te.current;
          Te.current = Qi;
          try {
            return Ry(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", me();
          var l = Te.current;
          Te.current = Qi;
          try {
            return GS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", me(), wy();
        },
        useState: function(e) {
          J = "useState", me();
          var t = Te.current;
          Te.current = Qi;
          try {
            return ZS(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", me(), by();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", me(), cx(e);
        },
        useTransition: function() {
          return J = "useTransition", me(), px();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", me(), gy(e, t);
        },
        useId: function() {
          return J = "useId", me(), ky();
        },
        unstable_isNewReconciler: fe
      }, xx = {
        readContext: function(e) {
          return Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", me(), Dy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", me(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", me(), ph(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", me(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", me(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", me(), Cy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", me();
          var i = Te.current;
          Te.current = Oy;
          try {
            return Ry(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", me();
          var l = Te.current;
          Te.current = Oy;
          try {
            return QS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", me(), wy();
        },
        useState: function(e) {
          J = "useState", me();
          var t = Te.current;
          Te.current = Oy;
          try {
            return KS(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", me(), by();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", me(), fx(e);
        },
        useTransition: function() {
          return J = "useTransition", me(), hx();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", me(), gy(e, t);
        },
        useId: function() {
          return J = "useId", me(), ky();
        },
        unstable_isNewReconciler: fe
      }, Al = {
        readContext: function(e) {
          return o1(), Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Xe(), Rt(), n1(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Xe(), Rt(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Xe(), Rt(), _y(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Xe(), Rt(), t1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Xe(), Rt(), JS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Xe(), Rt(), e1(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Xe(), Rt();
          var i = Te.current;
          Te.current = Al;
          try {
            return r1(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Xe(), Rt();
          var l = Te.current;
          Te.current = Al;
          try {
            return WS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", Xe(), Rt(), XS(e);
        },
        useState: function(e) {
          J = "useState", Xe(), Rt();
          var t = Te.current;
          Te.current = Al;
          try {
            return Sy(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Xe(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Xe(), Rt(), a1(e);
        },
        useTransition: function() {
          return J = "useTransition", Xe(), Rt(), i1();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", Xe(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", Xe(), Rt(), qS(e, t, i);
        },
        useId: function() {
          return J = "useId", Xe(), Rt(), l1();
        },
        unstable_isNewReconciler: fe
      }, Qi = {
        readContext: function(e) {
          return o1(), Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Xe(), me(), Dy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Xe(), me(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Xe(), me(), ph(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Xe(), me(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Xe(), me(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Xe(), me(), Cy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Xe(), me();
          var i = Te.current;
          Te.current = Qi;
          try {
            return Ry(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Xe(), me();
          var l = Te.current;
          Te.current = Qi;
          try {
            return GS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", Xe(), me(), wy();
        },
        useState: function(e) {
          J = "useState", Xe(), me();
          var t = Te.current;
          Te.current = Qi;
          try {
            return ZS(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Xe(), me(), by();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Xe(), me(), cx(e);
        },
        useTransition: function() {
          return J = "useTransition", Xe(), me(), px();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", Xe(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", Xe(), me(), gy(e, t);
        },
        useId: function() {
          return J = "useId", Xe(), me(), ky();
        },
        unstable_isNewReconciler: fe
      }, Oy = {
        readContext: function(e) {
          return o1(), Vn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Xe(), me(), Dy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Xe(), me(), Vn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Xe(), me(), ph(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Xe(), me(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Xe(), me(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Xe(), me(), Cy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Xe(), me();
          var i = Te.current;
          Te.current = Qi;
          try {
            return Ry(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Xe(), me();
          var l = Te.current;
          Te.current = Qi;
          try {
            return QS(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return J = "useRef", Xe(), me(), wy();
        },
        useState: function(e) {
          J = "useState", Xe(), me();
          var t = Te.current;
          Te.current = Qi;
          try {
            return KS(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Xe(), me(), by();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Xe(), me(), fx(e);
        },
        useTransition: function() {
          return J = "useTransition", Xe(), me(), hx();
        },
        useMutableSource: function(e, t, i) {
          return J = "useMutableSource", Xe(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return J = "useSyncExternalStore", Xe(), me(), gy(e, t);
        },
        useId: function() {
          return J = "useId", Xe(), me(), ky();
        },
        unstable_isNewReconciler: fe
      };
    }
    var Iu = o.unstable_now, Cx = 0, Ny = -1, hh = -1, Ly = -1, u1 = !1, Uy = !1;
    function Tx() {
      return u1;
    }
    function RM() {
      Uy = !0;
    }
    function kM() {
      u1 = !1, Uy = !1;
    }
    function MM() {
      u1 = Uy, Uy = !1;
    }
    function bx() {
      return Cx;
    }
    function Dx() {
      Cx = Iu();
    }
    function s1(e) {
      hh = Iu(), e.actualStartTime < 0 && (e.actualStartTime = Iu());
    }
    function Rx(e) {
      hh = -1;
    }
    function jy(e, t) {
      if (hh >= 0) {
        var i = Iu() - hh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), hh = -1;
      }
    }
    function zl(e) {
      if (Ny >= 0) {
        var t = Iu() - Ny;
        Ny = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case O:
              var l = i.stateNode;
              l.effectDuration += t;
              return;
            case Se:
              var c = i.stateNode;
              c.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function c1(e) {
      if (Ly >= 0) {
        var t = Iu() - Ly;
        Ly = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case O:
              var l = i.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case Se:
              var c = i.stateNode;
              c !== null && (c.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function Fl() {
      Ny = Iu();
    }
    function f1() {
      Ly = Iu();
    }
    function d1(e) {
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
    function p1(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function OM(e, t) {
      return !0;
    }
    function h1(e, t) {
      try {
        var i = OM(e, t);
        if (i === !1)
          return;
        var l = t.value, c = t.source, p = t.stack, y = p !== null ? p : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(l);
        }
        var w = c ? nt(c) : null, E = w ? "The above error occurred in the <" + w + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === O)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var D = nt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + D + ".");
        }
        var j = E + `
` + y + `

` + ("" + x);
        console.error(j);
      } catch (L) {
        setTimeout(function() {
          throw L;
        });
      }
    }
    var NM = typeof WeakMap == "function" ? WeakMap : Map;
    function kx(e, t, i) {
      var l = No(Ht, i);
      l.tag = hS, l.payload = {
        element: null
      };
      var c = t.value;
      return l.callback = function() {
        CN(c), h1(e, t);
      }, l;
    }
    function v1(e, t, i) {
      var l = No(Ht, i);
      l.tag = hS;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var p = t.value;
        l.payload = function() {
          return c(p);
        }, l.callback = function() {
          PC(e), h1(e, t);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
        PC(e), h1(e, t), typeof c != "function" && _N(this);
        var E = t.value, x = t.stack;
        this.componentDidCatch(E, {
          componentStack: x !== null ? x : ""
        }), typeof c != "function" && (Yr(e.lanes, Ge) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), l;
    }
    function Mx(e, t, i) {
      var l = e.pingCache, c;
      if (l === null ? (l = e.pingCache = new NM(), c = /* @__PURE__ */ new Set(), l.set(t, c)) : (c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c))), !c.has(i)) {
        c.add(i);
        var p = TN.bind(null, e, t, i);
        Gn && Mh(e, i), t.then(p, p);
      }
    }
    function LM(e, t, i, l) {
      var c = e.updateQueue;
      if (c === null) {
        var p = /* @__PURE__ */ new Set();
        p.add(i), e.updateQueue = p;
      } else
        c.add(i);
    }
    function UM(e, t) {
      var i = e.tag;
      if ((e.mode & ut) === Ve && (i === T || i === te || i === ee)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Ox(e) {
      var t = e;
      do {
        if (t.tag === oe && gM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Nx(e, t, i, l, c) {
      if ((e.mode & ut) === Ve) {
        if (e === t)
          e.flags |= Fn;
        else {
          if (e.flags |= Ze, i.flags |= Cs, i.flags &= ~(Fc | na), i.tag === b) {
            var p = i.alternate;
            if (p === null)
              i.tag = de;
            else {
              var y = No(Ht, Ge);
              y.tag = iy, Fu(i, y, Ge);
            }
          }
          i.lanes = at(i.lanes, Ge);
        }
        return e;
      }
      return e.flags |= Fn, e.lanes = c, e;
    }
    function jM(e, t, i, l, c) {
      if (i.flags |= na, Gn && Mh(e, c), l !== null && typeof l == "object" && typeof l.then == "function") {
        var p = l;
        UM(i), Er() && i.mode & ut && __();
        var y = Ox(t);
        if (y !== null) {
          y.flags &= ~un, Nx(y, t, i, e, c), y.mode & ut && Mx(e, p, c), LM(y, e, p);
          return;
        } else {
          if (!mu(c)) {
            Mx(e, p, c), Q1();
            return;
          }
          var w = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = w;
        }
      } else if (Er() && i.mode & ut) {
        __();
        var E = Ox(t);
        if (E !== null) {
          (E.flags & Fn) === Pe && (E.flags |= un), Nx(E, t, i, e, c), oS(nc(l, i));
          return;
        }
      }
      l = nc(l, i), hN(l);
      var x = t;
      do {
        switch (x.tag) {
          case O: {
            var D = l;
            x.flags |= Fn;
            var j = Dn(c);
            x.lanes = at(x.lanes, j);
            var L = kx(x, D, j);
            yS(x, L);
            return;
          }
          case b:
            var V = l, $ = x.type, q = x.stateNode;
            if ((x.flags & Ze) === Pe && (typeof $.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && !OC(q))) {
              x.flags |= Fn;
              var be = Dn(c);
              x.lanes = at(x.lanes, be);
              var Ye = v1(x, V, be);
              yS(x, Ye);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function AM() {
      return null;
    }
    var vh = s.ReactCurrentOwner, qi = !1, m1, mh, y1, g1, S1, rc, w1, Ay;
    m1 = {}, mh = {}, y1 = {}, g1 = {}, S1 = {}, rc = !1, w1 = {}, Ay = {};
    function ua(e, t, i, l) {
      e === null ? t.child = Z_(t, null, i, l) : t.child = Gf(t, e.child, i, l);
    }
    function zM(e, t, i, l) {
      t.child = Gf(t, e.child, null, l), t.child = Gf(t, null, i, l);
    }
    function Lx(e, t, i, l, c) {
      if (t.type !== t.elementType) {
        var p = i.propTypes;
        p && Vi(
          p,
          l,
          // Resolved props
          "prop",
          zt(i)
        );
      }
      var y = i.render, w = t.ref, E, x;
      Wf(t, c), _l(t);
      {
        if (vh.current = t, Wa(!0), E = Jf(e, t, y, l, w, c), x = ed(), t.mode & tn) {
          bn(!0);
          try {
            E = Jf(e, t, y, l, w, c), x = ed();
          } finally {
            bn(!1);
          }
        }
        Wa(!1);
      }
      return lo(), e !== null && !qi ? (tx(e, t, c), Lo(e, t, c)) : (Er() && x && tS(t), t.flags |= vl, ua(e, t, E, c), t.child);
    }
    function Ux(e, t, i, l, c) {
      if (e === null) {
        var p = i.type;
        if (IN(p) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var y = p;
          return y = ud(p), t.tag = ee, t.type = y, x1(t, p), jx(e, t, y, l, c);
        }
        {
          var w = p.propTypes;
          w && Vi(
            w,
            l,
            // Resolved props
            "prop",
            zt(p)
          );
        }
        var E = iw(i.type, null, l, t, t.mode, c);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var x = i.type, D = x.propTypes;
        D && Vi(
          D,
          l,
          // Resolved props
          "prop",
          zt(x)
        );
      }
      var j = e.child, L = k1(e, c);
      if (!L) {
        var V = j.memoizedProps, $ = i.compare;
        if ($ = $ !== null ? $ : ze, $(V, l) && e.ref === t.ref)
          return Lo(e, t, c);
      }
      t.flags |= vl;
      var q = uc(j, l);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function jx(e, t, i, l, c) {
      if (t.type !== t.elementType) {
        var p = t.elementType;
        if (p.$$typeof === Be) {
          var y = p, w = y._payload, E = y._init;
          try {
            p = E(w);
          } catch {
            p = null;
          }
          var x = p && p.propTypes;
          x && Vi(
            x,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(p)
          );
        }
      }
      if (e !== null) {
        var D = e.memoizedProps;
        if (ze(D, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (qi = !1, t.pendingProps = l = D, k1(e, c))
            (e.flags & Cs) !== Pe && (qi = !0);
          else
            return t.lanes = e.lanes, Lo(e, t, c);
      }
      return E1(e, t, i, l, c);
    }
    function Ax(e, t, i) {
      var l = t.pendingProps, c = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || Ee)
        if ((t.mode & ut) === Ve) {
          var y = {
            baseLanes: X,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = y, qy(t, i);
        } else if (Yr(i, Pr)) {
          var j = {
            baseLanes: X,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var L = p !== null ? p.baseLanes : i;
          qy(t, L);
        } else {
          var w = null, E;
          if (p !== null) {
            var x = p.baseLanes;
            E = at(x, i);
          } else
            E = i;
          t.lanes = t.childLanes = Pr;
          var D = {
            baseLanes: E,
            cachePool: w,
            transitions: null
          };
          return t.memoizedState = D, t.updateQueue = null, qy(t, E), null;
        }
      else {
        var V;
        p !== null ? (V = at(p.baseLanes, i), t.memoizedState = null) : V = i, qy(t, V);
      }
      return ua(e, t, c, i), t.child;
    }
    function FM(e, t, i) {
      var l = t.pendingProps;
      return ua(e, t, l, i), t.child;
    }
    function HM(e, t, i) {
      var l = t.pendingProps.children;
      return ua(e, t, l, i), t.child;
    }
    function PM(e, t, i) {
      {
        t.flags |= rt;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var c = t.pendingProps, p = c.children;
      return ua(e, t, p, i), t.child;
    }
    function zx(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= Ur, t.flags |= Xd);
    }
    function E1(e, t, i, l, c) {
      if (t.type !== t.elementType) {
        var p = i.propTypes;
        p && Vi(
          p,
          l,
          // Resolved props
          "prop",
          zt(i)
        );
      }
      var y;
      {
        var w = Pf(t, i, !0);
        y = Yf(t, w);
      }
      var E, x;
      Wf(t, c), _l(t);
      {
        if (vh.current = t, Wa(!0), E = Jf(e, t, i, l, y, c), x = ed(), t.mode & tn) {
          bn(!0);
          try {
            E = Jf(e, t, i, l, y, c), x = ed();
          } finally {
            bn(!1);
          }
        }
        Wa(!1);
      }
      return lo(), e !== null && !qi ? (tx(e, t, c), Lo(e, t, c)) : (Er() && x && tS(t), t.flags |= vl, ua(e, t, E, c), t.child);
    }
    function Fx(e, t, i, l, c) {
      {
        switch (rL(t)) {
          case !1: {
            var p = t.stateNode, y = t.type, w = new y(t.memoizedProps, p.context), E = w.state;
            p.updater.enqueueSetState(p, E, null);
            break;
          }
          case !0: {
            t.flags |= Ze, t.flags |= Fn;
            var x = new Error("Simulated error coming from DevTools"), D = Dn(c);
            t.lanes = at(t.lanes, D);
            var j = v1(t, nc(x, t), D);
            yS(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = i.propTypes;
          L && Vi(
            L,
            l,
            // Resolved props
            "prop",
            zt(i)
          );
        }
      }
      var V;
      Ll(i) ? (V = !0, Qm(t)) : V = !1, Wf(t, c);
      var $ = t.stateNode, q;
      $ === null ? (Fy(e, t), B_(t, i, l), kS(t, i, l, c), q = !0) : e === null ? q = dM(t, i, l, c) : q = pM(e, t, i, l, c);
      var be = _1(e, t, i, q, V, c);
      {
        var Ye = t.stateNode;
        q && Ye.props !== l && (rc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), rc = !0);
      }
      return be;
    }
    function _1(e, t, i, l, c, p) {
      zx(e, t);
      var y = (t.flags & Ze) !== Pe;
      if (!l && !y)
        return c && g_(t, i, !1), Lo(e, t, p);
      var w = t.stateNode;
      vh.current = t;
      var E;
      if (y && typeof i.getDerivedStateFromError != "function")
        E = null, Rx();
      else {
        _l(t);
        {
          if (Wa(!0), E = w.render(), t.mode & tn) {
            bn(!0);
            try {
              w.render();
            } finally {
              bn(!1);
            }
          }
          Wa(!1);
        }
        lo();
      }
      return t.flags |= vl, e !== null && y ? zM(e, t, E, p) : ua(e, t, E, p), t.memoizedState = w.state, c && g_(t, i, !0), t.child;
    }
    function Hx(e) {
      var t = e.stateNode;
      t.pendingContext ? m_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && m_(e, t.context, !1), jS(e, t.containerInfo);
    }
    function YM(e, t, i) {
      if (Hx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, c = t.memoizedState, p = c.element;
      z_(e, t), sy(t, l, null, i);
      var y = t.memoizedState;
      t.stateNode;
      var w = y.element;
      if (c.isDehydrated) {
        var E = {
          element: w,
          isDehydrated: !1,
          cache: y.cache,
          pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
          transitions: y.transitions
        }, x = t.updateQueue;
        if (x.baseState = E, t.memoizedState = E, t.flags & un) {
          var D = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Px(e, t, w, i, D);
        } else if (w !== p) {
          var j = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Px(e, t, w, i, j);
        } else {
          Bk(t);
          var L = Z_(t, null, w, i);
          t.child = L;
          for (var V = L; V; )
            V.flags = V.flags & ~$t | _a, V = V.sibling;
        }
      } else {
        if ($f(), w === p)
          return Lo(e, t, i);
        ua(e, t, w, i);
      }
      return t.child;
    }
    function Px(e, t, i, l, c) {
      return $f(), oS(c), t.flags |= un, ua(e, t, i, l), t.child;
    }
    function IM(e, t, i) {
      X_(t), e === null && lS(t);
      var l = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = c.children, w = Y0(l, c);
      return w ? y = null : p !== null && Y0(l, p) && (t.flags |= Dt), zx(e, t), ua(e, t, y, i), t.child;
    }
    function VM(e, t) {
      return e === null && lS(t), null;
    }
    function $M(e, t, i, l) {
      Fy(e, t);
      var c = t.pendingProps, p = i, y = p._payload, w = p._init, E = w(y);
      t.type = E;
      var x = t.tag = VN(E), D = Wi(E, c), j;
      switch (x) {
        case T:
          return x1(t, E), t.type = E = ud(E), j = E1(null, t, E, D, l), j;
        case b:
          return t.type = E = J1(E), j = Fx(null, t, E, D, l), j;
        case te:
          return t.type = E = ew(E), j = Lx(null, t, E, D, l), j;
        case G: {
          if (t.type !== t.elementType) {
            var L = E.propTypes;
            L && Vi(
              L,
              D,
              // Resolved for outer only
              "prop",
              zt(E)
            );
          }
          return j = Ux(
            null,
            t,
            E,
            Wi(E.type, D),
            // The inner type can have defaults too
            l
          ), j;
        }
      }
      var V = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Be && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function BM(e, t, i, l, c) {
      Fy(e, t), t.tag = b;
      var p;
      return Ll(i) ? (p = !0, Qm(t)) : p = !1, Wf(t, c), B_(t, i, l), kS(t, i, l, c), _1(null, t, i, !0, p, c);
    }
    function WM(e, t, i, l) {
      Fy(e, t);
      var c = t.pendingProps, p;
      {
        var y = Pf(t, i, !1);
        p = Yf(t, y);
      }
      Wf(t, l);
      var w, E;
      _l(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var x = zt(i) || "Unknown";
          m1[x] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), m1[x] = !0);
        }
        t.mode & tn && Bi.recordLegacyContextWarning(t, null), Wa(!0), vh.current = t, w = Jf(null, t, i, c, p, l), E = ed(), Wa(!1);
      }
      if (lo(), t.flags |= vl, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) {
        var D = zt(i) || "Unknown";
        mh[D] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), mh[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0
      ) {
        {
          var j = zt(i) || "Unknown";
          mh[j] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), mh[j] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Ll(i) ? (L = !0, Qm(t)) : L = !1, t.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, mS(t), $_(t, w), kS(t, i, c, l), _1(null, t, i, !0, L, l);
      } else {
        if (t.tag = T, t.mode & tn) {
          bn(!0);
          try {
            w = Jf(null, t, i, c, p, l), E = ed();
          } finally {
            bn(!1);
          }
        }
        return Er() && E && tS(t), ua(null, t, w, l), x1(t, i), t.child;
      }
    }
    function x1(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", l = ga();
          l && (i += `

Check the render method of \`` + l + "`.");
          var c = l || "", p = e._debugSource;
          p && (c = p.fileName + ":" + p.lineNumber), S1[c] || (S1[c] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = zt(t) || "Unknown";
          g1[y] || (m("%s: Function components do not support getDerivedStateFromProps.", y), g1[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var w = zt(t) || "Unknown";
          y1[w] || (m("%s: Function components do not support contextType.", w), y1[w] = !0);
        }
      }
    }
    var C1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: ht
    };
    function T1(e) {
      return {
        baseLanes: e,
        cachePool: AM(),
        transitions: null
      };
    }
    function GM(e, t) {
      var i = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function QM(e, t, i, l) {
      if (t !== null) {
        var c = t.memoizedState;
        if (c === null)
          return !1;
      }
      return FS(e, oh);
    }
    function qM(e, t) {
      return yu(e.childLanes, t);
    }
    function Yx(e, t, i) {
      var l = t.pendingProps;
      aL(t) && (t.flags |= Ze);
      var c = Gi.current, p = !1, y = (t.flags & Ze) !== Pe;
      if (y || QM(c, e) ? (p = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (c = yM(c, ex)), c = qf(c), Pu(t, c), e === null) {
        lS(t);
        var w = t.memoizedState;
        if (w !== null) {
          var E = w.dehydrated;
          if (E !== null)
            return eO(t, E);
        }
        var x = l.children, D = l.fallback;
        if (p) {
          var j = ZM(t, x, D, i), L = t.child;
          return L.memoizedState = T1(i), t.memoizedState = C1, j;
        } else
          return b1(t, x);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var $ = V.dehydrated;
          if ($ !== null)
            return tO(e, t, y, l, $, V, i);
        }
        if (p) {
          var q = l.fallback, be = l.children, Ye = XM(e, t, be, q, i), je = t.child, mt = e.child.memoizedState;
          return je.memoizedState = mt === null ? T1(i) : GM(mt, i), je.childLanes = qM(e, i), t.memoizedState = C1, Ye;
        } else {
          var dt = l.children, P = KM(e, t, dt, i);
          return t.memoizedState = null, P;
        }
      }
    }
    function b1(e, t, i) {
      var l = e.mode, c = {
        mode: "visible",
        children: t
      }, p = D1(c, l);
      return p.return = e, e.child = p, p;
    }
    function ZM(e, t, i, l) {
      var c = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, w, E;
      return (c & ut) === Ve && p !== null ? (w = p, w.childLanes = X, w.pendingProps = y, e.mode & We && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = 0, w.treeBaseDuration = 0), E = Qu(i, c, l, null)) : (w = D1(y, c), E = Qu(i, c, l, null)), w.return = e, E.return = e, w.sibling = E, e.child = w, E;
    }
    function D1(e, t, i) {
      return IC(e, t, X, null);
    }
    function Ix(e, t) {
      return uc(e, t);
    }
    function KM(e, t, i, l) {
      var c = e.child, p = c.sibling, y = Ix(c, {
        mode: "visible",
        children: i
      });
      if ((t.mode & ut) === Ve && (y.lanes = l), y.return = t, y.sibling = null, p !== null) {
        var w = t.deletions;
        w === null ? (t.deletions = [p], t.flags |= bt) : w.push(p);
      }
      return t.child = y, y;
    }
    function XM(e, t, i, l, c) {
      var p = t.mode, y = e.child, w = y.sibling, E = {
        mode: "hidden",
        children: i
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & ut) === Ve && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var D = t.child;
        x = D, x.childLanes = X, x.pendingProps = E, t.mode & We && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = y.selfBaseDuration, x.treeBaseDuration = y.treeBaseDuration), t.deletions = null;
      } else
        x = Ix(y, E), x.subtreeFlags = y.subtreeFlags & Wn;
      var j;
      return w !== null ? j = uc(w, l) : (j = Qu(l, p, c, null), j.flags |= $t), j.return = t, x.return = t, x.sibling = j, t.child = x, j;
    }
    function zy(e, t, i, l) {
      l !== null && oS(l), Gf(t, e.child, null, i);
      var c = t.pendingProps, p = c.children, y = b1(t, p);
      return y.flags |= $t, t.memoizedState = null, y;
    }
    function JM(e, t, i, l, c) {
      var p = t.mode, y = {
        mode: "visible",
        children: i
      }, w = D1(y, p), E = Qu(l, p, c, null);
      return E.flags |= $t, w.return = t, E.return = t, w.sibling = E, t.child = w, (t.mode & ut) !== Ve && Gf(t, e.child, null, c), E;
    }
    function eO(e, t, i) {
      return (e.mode & ut) === Ve ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ge) : B0(t) ? e.lanes = so : e.lanes = Pr, null;
    }
    function tO(e, t, i, l, c, p, y) {
      if (i)
        if (t.flags & un) {
          t.flags &= ~un;
          var P = p1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return zy(e, t, y, P);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ze, null;
          var Z = l.children, Y = l.fallback, le = JM(e, t, Z, Y, y), De = t.child;
          return De.memoizedState = T1(y), t.memoizedState = C1, le;
        }
      else {
        if (Vk(), (t.mode & ut) === Ve)
          return zy(
            e,
            t,
            y,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (B0(c)) {
          var w, E, x;
          {
            var D = lk(c);
            w = D.digest, E = D.message, x = D.stack;
          }
          var j;
          E ? j = new Error(E) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = p1(j, w, x);
          return zy(e, t, y, L);
        }
        var V = Yr(y, e.childLanes);
        if (qi || V) {
          var $ = Qy();
          if ($ !== null) {
            var q = d0($, y);
            if (q !== ht && q !== p.retryLane) {
              p.retryLane = q;
              var be = Ht;
              Na(e, q), nr($, e, q, be);
            }
          }
          Q1();
          var Ye = p1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return zy(e, t, y, Ye);
        } else if (c_(c)) {
          t.flags |= Ze, t.child = e.child;
          var je = bN.bind(null, e);
          return ok(c, je), null;
        } else {
          Wk(t, c, p.treeContext);
          var mt = l.children, dt = b1(t, mt);
          return dt.flags |= _a, dt;
        }
      }
    }
    function Vx(e, t, i) {
      e.lanes = at(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = at(l.lanes, t)), dS(e.return, t, i);
    }
    function nO(e, t, i) {
      for (var l = t; l !== null; ) {
        if (l.tag === oe) {
          var c = l.memoizedState;
          c !== null && Vx(l, i, e);
        } else if (l.tag === Qe)
          Vx(l, i, e);
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
    function rO(e) {
      for (var t = e, i = null; t !== null; ) {
        var l = t.alternate;
        l !== null && my(l) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function aO(e) {
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
    function iO(e, t) {
      e !== void 0 && !Ay[e] && (e !== "collapsed" && e !== "hidden" ? (Ay[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ay[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $x(e, t) {
      {
        var i = An(e), l = !i && typeof bi(e) == "function";
        if (i || l) {
          var c = i ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, t, c), !1;
        }
      }
      return !0;
    }
    function lO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (An(e)) {
          for (var i = 0; i < e.length; i++)
            if (!$x(e[i], i))
              return;
        } else {
          var l = bi(e);
          if (typeof l == "function") {
            var c = l.call(e);
            if (c)
              for (var p = c.next(), y = 0; !p.done; p = c.next()) {
                if (!$x(p.value, y))
                  return;
                y++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function R1(e, t, i, l, c) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: i,
        tailMode: c
      } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = i, p.tailMode = c);
    }
    function Bx(e, t, i) {
      var l = t.pendingProps, c = l.revealOrder, p = l.tail, y = l.children;
      aO(c), iO(p, c), lO(y, c), ua(e, t, y, i);
      var w = Gi.current, E = FS(w, oh);
      if (E)
        w = HS(w, oh), t.flags |= Ze;
      else {
        var x = e !== null && (e.flags & Ze) !== Pe;
        x && nO(t, t.child, i), w = qf(w);
      }
      if (Pu(t, w), (t.mode & ut) === Ve)
        t.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var D = rO(t.child), j;
            D === null ? (j = t.child, t.child = null) : (j = D.sibling, D.sibling = null), R1(
              t,
              !1,
              // isBackwards
              j,
              D,
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
              var q = V.sibling;
              V.sibling = L, L = V, V = q;
            }
            R1(
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
            R1(
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
    function oO(e, t, i) {
      jS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Gf(t, null, l, i) : ua(e, t, l, i), t.child;
    }
    var Wx = !1;
    function uO(e, t, i) {
      var l = t.type, c = l._context, p = t.pendingProps, y = t.memoizedProps, w = p.value;
      {
        "value" in p || Wx || (Wx = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && Vi(E, p, "prop", "Context.Provider");
      }
      if (L_(t, c, w), y !== null) {
        var x = y.value;
        if (Oe(x, w)) {
          if (y.children === p.children && !Wm())
            return Lo(e, t, i);
        } else
          nM(t, c, i);
      }
      var D = p.children;
      return ua(e, t, D, i), t.child;
    }
    var Gx = !1;
    function sO(e, t, i) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (Gx || (Gx = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var c = t.pendingProps, p = c.children;
      typeof p != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Wf(t, i);
      var y = Vn(l);
      _l(t);
      var w;
      return vh.current = t, Wa(!0), w = p(y), Wa(!1), lo(), t.flags |= vl, ua(e, t, w, i), t.child;
    }
    function yh() {
      qi = !0;
    }
    function Fy(e, t) {
      (t.mode & ut) === Ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= $t);
    }
    function Lo(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), Rx(), kh(t.lanes), Yr(i, t.childLanes) ? (hM(e, t), t.child) : null;
    }
    function cO(e, t, i) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === l.child)
          l.child = i;
        else {
          var c = l.child;
          if (c === null)
            throw new Error("Expected parent to have a child.");
          for (; c.sibling !== t; )
            if (c = c.sibling, c === null)
              throw new Error("Expected to find the previous sibling.");
          c.sibling = i;
        }
        var p = l.deletions;
        return p === null ? (l.deletions = [e], l.flags |= bt) : p.push(e), i.flags |= $t, i;
      }
    }
    function k1(e, t) {
      var i = e.lanes;
      return !!Yr(i, t);
    }
    function fO(e, t, i) {
      switch (t.tag) {
        case O:
          Hx(t), t.stateNode, $f();
          break;
        case B:
          X_(t);
          break;
        case b: {
          var l = t.type;
          Ll(l) && Qm(t);
          break;
        }
        case z:
          jS(t, t.stateNode.containerInfo);
          break;
        case K: {
          var c = t.memoizedProps.value, p = t.type._context;
          L_(t, p, c);
          break;
        }
        case Se:
          {
            var y = Yr(i, t.childLanes);
            y && (t.flags |= rt);
            {
              var w = t.stateNode;
              w.effectDuration = 0, w.passiveEffectDuration = 0;
            }
          }
          break;
        case oe: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Pu(t, qf(Gi.current)), t.flags |= Ze, null;
            var x = t.child, D = x.childLanes;
            if (Yr(i, D))
              return Yx(e, t, i);
            Pu(t, qf(Gi.current));
            var j = Lo(e, t, i);
            return j !== null ? j.sibling : null;
          } else
            Pu(t, qf(Gi.current));
          break;
        }
        case Qe: {
          var L = (e.flags & Ze) !== Pe, V = Yr(i, t.childLanes);
          if (L) {
            if (V)
              return Bx(e, t, i);
            t.flags |= Ze;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), Pu(t, Gi.current), V)
            break;
          return null;
        }
        case Ae:
        case et:
          return t.lanes = X, Ax(e, t, i);
      }
      return Lo(e, t, i);
    }
    function Qx(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return cO(e, t, iw(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, c = t.pendingProps;
        if (l !== c || Wm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          qi = !0;
        else {
          var p = k1(e, i);
          if (!p && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ze) === Pe)
            return qi = !1, fO(e, t, i);
          (e.flags & Cs) !== Pe ? qi = !0 : qi = !1;
        }
      } else if (qi = !1, Er() && zk(t)) {
        var y = t.index, w = Fk();
        E_(t, w, y);
      }
      switch (t.lanes = X, t.tag) {
        case k:
          return WM(e, t, t.type, i);
        case xe: {
          var E = t.elementType;
          return $M(e, t, E, i);
        }
        case T: {
          var x = t.type, D = t.pendingProps, j = t.elementType === x ? D : Wi(x, D);
          return E1(e, t, x, j, i);
        }
        case b: {
          var L = t.type, V = t.pendingProps, $ = t.elementType === L ? V : Wi(L, V);
          return Fx(e, t, L, $, i);
        }
        case O:
          return YM(e, t, i);
        case B:
          return IM(e, t, i);
        case A:
          return VM(e, t);
        case oe:
          return Yx(e, t, i);
        case z:
          return oO(e, t, i);
        case te: {
          var q = t.type, be = t.pendingProps, Ye = t.elementType === q ? be : Wi(q, be);
          return Lx(e, t, q, Ye, i);
        }
        case Q:
          return FM(e, t, i);
        case he:
          return HM(e, t, i);
        case Se:
          return PM(e, t, i);
        case K:
          return uO(e, t, i);
        case we:
          return sO(e, t, i);
        case G: {
          var je = t.type, mt = t.pendingProps, dt = Wi(je, mt);
          if (t.type !== t.elementType) {
            var P = je.propTypes;
            P && Vi(
              P,
              dt,
              // Resolved for outer only
              "prop",
              zt(je)
            );
          }
          return dt = Wi(je.type, dt), Ux(e, t, je, dt, i);
        }
        case ee:
          return jx(e, t, t.type, t.pendingProps, i);
        case de: {
          var Z = t.type, Y = t.pendingProps, le = t.elementType === Z ? Y : Wi(Z, Y);
          return BM(e, t, Z, le, i);
        }
        case Qe:
          return Bx(e, t, i);
        case Je:
          break;
        case Ae:
          return Ax(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function td(e) {
      e.flags |= rt;
    }
    function qx(e) {
      e.flags |= Ur, e.flags |= Xd;
    }
    var Zx, M1, Kx, Xx;
    Zx = function(e, t, i, l) {
      for (var c = t.child; c !== null; ) {
        if (c.tag === B || c.tag === A)
          UR(e, c.stateNode);
        else if (c.tag !== z) {
          if (c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
        }
        if (c === t)
          return;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === t)
            return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    }, M1 = function(e, t) {
    }, Kx = function(e, t, i, l, c) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, w = AS(), E = AR(y, i, p, l, c, w);
        t.updateQueue = E, E && td(t);
      }
    }, Xx = function(e, t, i, l) {
      i !== l && td(t);
    };
    function gh(e, t) {
      if (!Er())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, l = null; i !== null; )
              i.alternate !== null && (l = i), i = i.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var c = e.tail, p = null; c !== null; )
              c.alternate !== null && (p = c), c = c.sibling;
            p === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : p.sibling = null;
            break;
          }
        }
    }
    function xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = X, l = Pe;
      if (t) {
        if ((e.mode & We) !== Ve) {
          for (var E = e.selfBaseDuration, x = e.child; x !== null; )
            i = at(i, at(x.lanes, x.childLanes)), l |= x.subtreeFlags & Wn, l |= x.flags & Wn, E += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = E;
        } else
          for (var D = e.child; D !== null; )
            i = at(i, at(D.lanes, D.childLanes)), l |= D.subtreeFlags & Wn, l |= D.flags & Wn, D.return = e, D = D.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & We) !== Ve) {
          for (var c = e.actualDuration, p = e.selfBaseDuration, y = e.child; y !== null; )
            i = at(i, at(y.lanes, y.childLanes)), l |= y.subtreeFlags, l |= y.flags, c += y.actualDuration, p += y.treeBaseDuration, y = y.sibling;
          e.actualDuration = c, e.treeBaseDuration = p;
        } else
          for (var w = e.child; w !== null; )
            i = at(i, at(w.lanes, w.childLanes)), l |= w.subtreeFlags, l |= w.flags, w.return = e, w = w.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = i, t;
    }
    function dO(e, t, i) {
      if (Kk() && (t.mode & ut) !== Ve && (t.flags & Ze) === Pe)
        return R_(t), $f(), t.flags |= un | na | Fn, !1;
      var l = Jm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (qk(t), xr(t), (t.mode & We) !== Ve) {
            var c = i !== null;
            if (c) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & Ze) === Pe && (t.memoizedState = null), t.flags |= rt, xr(t), (t.mode & We) !== Ve) {
            var y = i !== null;
            if (y) {
              var w = t.child;
              w !== null && (t.treeBaseDuration -= w.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return k_(), !0;
    }
    function Jx(e, t, i) {
      var l = t.pendingProps;
      switch (nS(t), t.tag) {
        case k:
        case xe:
        case ee:
        case T:
        case te:
        case Q:
        case he:
        case Se:
        case we:
        case G:
          return xr(t), null;
        case b: {
          var c = t.type;
          return Ll(c) && Gm(t), xr(t), null;
        }
        case O: {
          var p = t.stateNode;
          if (Qf(t), X0(t), YS(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = Jm(t);
            if (y)
              td(t);
            else if (e !== null) {
              var w = e.memoizedState;
              // Check if this is a client root
              (!w.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & un) !== Pe) && (t.flags |= Ea, k_());
            }
          }
          return M1(e, t), xr(t), null;
        }
        case B: {
          zS(t);
          var E = K_(), x = t.type;
          if (e !== null && t.stateNode != null)
            Kx(e, t, x, l, E), e.ref !== t.ref && qx(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return xr(t), null;
            }
            var D = AS(), j = Jm(t);
            if (j)
              Gk(t, E, D) && td(t);
            else {
              var L = LR(x, l, E, D, t);
              Zx(L, t, !1, !1), t.stateNode = L, jR(L, x, l, E) && td(t);
            }
            t.ref !== null && qx(t);
          }
          return xr(t), null;
        }
        case A: {
          var V = l;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            Xx(e, t, $, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var q = K_(), be = AS(), Ye = Jm(t);
            Ye ? Qk(t) && td(t) : t.stateNode = zR(V, q, be, t);
          }
          return xr(t), null;
        }
        case oe: {
          Zf(t);
          var je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var mt = dO(e, t, je);
            if (!mt)
              return t.flags & Fn ? t : null;
          }
          if ((t.flags & Ze) !== Pe)
            return t.lanes = i, (t.mode & We) !== Ve && d1(t), t;
          var dt = je !== null, P = e !== null && e.memoizedState !== null;
          if (dt !== P && dt) {
            var Z = t.child;
            if (Z.flags |= ml, (t.mode & ut) !== Ve) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !wt);
              Y || FS(Gi.current, ex) ? pN() : Q1();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= rt), xr(t), (t.mode & We) !== Ve && dt) {
            var De = t.child;
            De !== null && (t.treeBaseDuration -= De.treeBaseDuration);
          }
          return null;
        }
        case z:
          return Qf(t), M1(e, t), e === null && Mk(t.stateNode.containerInfo), xr(t), null;
        case K:
          var _e = t.type._context;
          return fS(_e, t), xr(t), null;
        case de: {
          var qe = t.type;
          return Ll(qe) && Gm(t), xr(t), null;
        }
        case Qe: {
          Zf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return xr(t), null;
          var jt = (t.flags & Ze) !== Pe, _t = tt.rendering;
          if (_t === null)
            if (jt)
              gh(tt, !1);
            else {
              var On = vN() && (e === null || (e.flags & Ze) === Pe);
              if (!On)
                for (var xt = t.child; xt !== null; ) {
                  var En = my(xt);
                  if (En !== null) {
                    jt = !0, t.flags |= Ze, gh(tt, !1);
                    var Br = En.updateQueue;
                    return Br !== null && (t.updateQueue = Br, t.flags |= rt), t.subtreeFlags = Pe, vM(t, i), Pu(t, HS(Gi.current, oh)), t.child;
                  }
                  xt = xt.sibling;
                }
              tt.tail !== null && en() > wC() && (t.flags |= Ze, jt = !0, gh(tt, !1), t.lanes = fp);
            }
          else {
            if (!jt) {
              var Rr = my(_t);
              if (Rr !== null) {
                t.flags |= Ze, jt = !0;
                var ei = Rr.updateQueue;
                if (ei !== null && (t.updateQueue = ei, t.flags |= rt), gh(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !_t.alternate && !Er())
                  return xr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - tt.renderingStartTime > wC() && i !== Pr && (t.flags |= Ze, jt = !0, gh(tt, !1), t.lanes = fp);
            }
            if (tt.isBackwards)
              _t.sibling = t.child, t.child = _t;
            else {
              var fa = tt.last;
              fa !== null ? fa.sibling = _t : t.child = _t, tt.last = _t;
            }
          }
          if (tt.tail !== null) {
            var da = tt.tail;
            tt.rendering = da, tt.tail = da.sibling, tt.renderingStartTime = en(), da.sibling = null;
            var Wr = Gi.current;
            return jt ? Wr = HS(Wr, oh) : Wr = qf(Wr), Pu(t, Wr), da;
          }
          return xr(t), null;
        }
        case Je:
          break;
        case Ae:
        case et: {
          G1(t);
          var Fo = t.memoizedState, sd = Fo !== null;
          if (e !== null) {
            var Uh = e.memoizedState, Yl = Uh !== null;
            Yl !== sd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Ee && (t.flags |= ml);
          }
          return !sd || (t.mode & ut) === Ve ? xr(t) : Yr(Pl, Pr) && (xr(t), t.subtreeFlags & ($t | rt) && (t.flags |= ml)), null;
        }
        case Pt:
          return null;
        case yt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function pO(e, t, i) {
      switch (nS(t), t.tag) {
        case b: {
          var l = t.type;
          Ll(l) && Gm(t);
          var c = t.flags;
          return c & Fn ? (t.flags = c & ~Fn | Ze, (t.mode & We) !== Ve && d1(t), t) : null;
        }
        case O: {
          t.stateNode, Qf(t), X0(t), YS();
          var p = t.flags;
          return (p & Fn) !== Pe && (p & Ze) === Pe ? (t.flags = p & ~Fn | Ze, t) : null;
        }
        case B:
          return zS(t), null;
        case oe: {
          Zf(t);
          var y = t.memoizedState;
          if (y !== null && y.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var w = t.flags;
          return w & Fn ? (t.flags = w & ~Fn | Ze, (t.mode & We) !== Ve && d1(t), t) : null;
        }
        case Qe:
          return Zf(t), null;
        case z:
          return Qf(t), null;
        case K:
          var E = t.type._context;
          return fS(E, t), null;
        case Ae:
        case et:
          return G1(t), null;
        case Pt:
          return null;
        default:
          return null;
      }
    }
    function eC(e, t, i) {
      switch (nS(t), t.tag) {
        case b: {
          var l = t.type.childContextTypes;
          l != null && Gm(t);
          break;
        }
        case O: {
          t.stateNode, Qf(t), X0(t), YS();
          break;
        }
        case B: {
          zS(t);
          break;
        }
        case z:
          Qf(t);
          break;
        case oe:
          Zf(t);
          break;
        case Qe:
          Zf(t);
          break;
        case K:
          var c = t.type._context;
          fS(c, t);
          break;
        case Ae:
        case et:
          G1(t);
          break;
      }
    }
    var tC = null;
    tC = /* @__PURE__ */ new Set();
    var Hy = !1, Cr = !1, hO = typeof WeakSet == "function" ? WeakSet : Set, Ne = null, nd = null, rd = null;
    function vO(e) {
      ao(null, function() {
        throw e;
      }), Zd();
    }
    var mO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & We)
        try {
          Fl(), t.componentWillUnmount();
        } finally {
          zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function nC(e, t) {
      try {
        Vu(Zn, e);
      } catch (i) {
        Qt(e, t, i);
      }
    }
    function O1(e, t, i) {
      try {
        mO(e, i);
      } catch (l) {
        Qt(e, t, l);
      }
    }
    function yO(e, t, i) {
      try {
        i.componentDidMount();
      } catch (l) {
        Qt(e, t, l);
      }
    }
    function rC(e, t) {
      try {
        iC(e);
      } catch (i) {
        Qt(e, t, i);
      }
    }
    function ad(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var l;
          try {
            if (Cn && pa && e.mode & We)
              try {
                Fl(), l = i(null);
              } finally {
                zl(e);
              }
            else
              l = i(null);
          } catch (c) {
            Qt(e, t, c);
          }
          typeof l == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          i.current = null;
    }
    function Py(e, t, i) {
      try {
        i();
      } catch (l) {
        Qt(e, t, l);
      }
    }
    var aC = !1;
    function gO(e, t) {
      OR(e.containerInfo), Ne = t, SO();
      var i = aC;
      return aC = !1, i;
    }
    function SO() {
      for (; Ne !== null; ) {
        var e = Ne, t = e.child;
        (e.subtreeFlags & su) !== Pe && t !== null ? (t.return = e, Ne = t) : wO();
      }
    }
    function wO() {
      for (; Ne !== null; ) {
        var e = Ne;
        Lt(e);
        try {
          EO(e);
        } catch (i) {
          Qt(e, e.return, i);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ne = t;
          return;
        }
        Ne = e.return;
      }
    }
    function EO(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Ea) !== Pe) {
        switch (Lt(e), e.tag) {
          case T:
          case te:
          case ee:
            break;
          case b: {
            if (t !== null) {
              var l = t.memoizedProps, c = t.memoizedState, p = e.stateNode;
              e.type === e.elementType && !rc && (p.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), p.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var y = p.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Wi(e.type, l), c);
              {
                var w = tC;
                y === void 0 && !w.has(e.type) && (w.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              p.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          }
          case O: {
            {
              var E = e.stateNode;
              nk(E.containerInfo);
            }
            break;
          }
          case B:
          case A:
          case z:
          case de:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function Zi(e, t, i) {
      var l = t.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var p = c.next, y = p;
        do {
          if ((y.tag & e) === e) {
            var w = y.destroy;
            y.destroy = void 0, w !== void 0 && ((e & _r) !== La ? Wc(t) : (e & Zn) !== La && Gc(t), (e & Ul) !== La && Oh(!0), Py(t, i, w), (e & Ul) !== La && Oh(!1), (e & _r) !== La ? Xv() : (e & Zn) !== La && cu());
          }
          y = y.next;
        } while (y !== p);
      }
    }
    function Vu(e, t) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next, p = c;
        do {
          if ((p.tag & e) === e) {
            (e & _r) !== La ? Kv(t) : (e & Zn) !== La && Jv(t);
            var y = p.create;
            (e & Ul) !== La && Oh(!0), p.destroy = y(), (e & Ul) !== La && Oh(!1), (e & _r) !== La ? up() : (e & Zn) !== La && em();
            {
              var w = p.destroy;
              if (w !== void 0 && typeof w != "function") {
                var E = void 0;
                (p.tag & Zn) !== Pe ? E = "useLayoutEffect" : (p.tag & Ul) !== Pe ? E = "useInsertionEffect" : E = "useEffect";
                var x = void 0;
                w === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof w.then == "function" ? x = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + w, m("%s must not return anything besides a function, which is used for clean-up.%s", E, x);
              }
            }
          }
          p = p.next;
        } while (p !== c);
      }
    }
    function _O(e, t) {
      if ((t.flags & rt) !== Pe)
        switch (t.tag) {
          case Se: {
            var i = t.stateNode.passiveEffectDuration, l = t.memoizedProps, c = l.id, p = l.onPostCommit, y = bx(), w = t.alternate === null ? "mount" : "update";
            Tx() && (w = "nested-update"), typeof p == "function" && p(c, w, i, y);
            var E = t.return;
            e:
              for (; E !== null; ) {
                switch (E.tag) {
                  case O:
                    var x = E.stateNode;
                    x.passiveEffectDuration += i;
                    break e;
                  case Se:
                    var D = E.stateNode;
                    D.passiveEffectDuration += i;
                    break e;
                }
                E = E.return;
              }
            break;
          }
        }
    }
    function xO(e, t, i, l) {
      if ((i.flags & sr) !== Pe)
        switch (i.tag) {
          case T:
          case te:
          case ee: {
            if (!Cr)
              if (i.mode & We)
                try {
                  Fl(), Vu(Zn | qn, i);
                } finally {
                  zl(i);
                }
              else
                Vu(Zn | qn, i);
            break;
          }
          case b: {
            var c = i.stateNode;
            if (i.flags & rt && !Cr)
              if (t === null)
                if (i.type === i.elementType && !rc && (c.props !== i.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), c.state !== i.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & We)
                  try {
                    Fl(), c.componentDidMount();
                  } finally {
                    zl(i);
                  }
                else
                  c.componentDidMount();
              else {
                var p = i.elementType === i.type ? t.memoizedProps : Wi(i.type, t.memoizedProps), y = t.memoizedState;
                if (i.type === i.elementType && !rc && (c.props !== i.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), c.state !== i.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & We)
                  try {
                    Fl(), c.componentDidUpdate(p, y, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    zl(i);
                  }
                else
                  c.componentDidUpdate(p, y, c.__reactInternalSnapshotBeforeUpdate);
              }
            var w = i.updateQueue;
            w !== null && (i.type === i.elementType && !rc && (c.props !== i.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), c.state !== i.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), H_(i, w, c));
            break;
          }
          case O: {
            var E = i.updateQueue;
            if (E !== null) {
              var x = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case B:
                    x = i.child.stateNode;
                    break;
                  case b:
                    x = i.child.stateNode;
                    break;
                }
              H_(i, E, x);
            }
            break;
          }
          case B: {
            var D = i.stateNode;
            if (t === null && i.flags & rt) {
              var j = i.type, L = i.memoizedProps;
              IR(D, j, L);
            }
            break;
          }
          case A:
            break;
          case z:
            break;
          case Se: {
            {
              var V = i.memoizedProps, $ = V.onCommit, q = V.onRender, be = i.stateNode.effectDuration, Ye = bx(), je = t === null ? "mount" : "update";
              Tx() && (je = "nested-update"), typeof q == "function" && q(i.memoizedProps.id, je, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Ye);
              {
                typeof $ == "function" && $(i.memoizedProps.id, je, be, Ye), wN(i);
                var mt = i.return;
                e:
                  for (; mt !== null; ) {
                    switch (mt.tag) {
                      case O:
                        var dt = mt.stateNode;
                        dt.effectDuration += be;
                        break e;
                      case Se:
                        var P = mt.stateNode;
                        P.effectDuration += be;
                        break e;
                    }
                    mt = mt.return;
                  }
              }
            }
            break;
          }
          case oe: {
            OO(e, i);
            break;
          }
          case Qe:
          case de:
          case Je:
          case Ae:
          case et:
          case yt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Cr || i.flags & Ur && iC(i);
    }
    function CO(e) {
      switch (e.tag) {
        case T:
        case te:
        case ee: {
          if (e.mode & We)
            try {
              Fl(), nC(e, e.return);
            } finally {
              zl(e);
            }
          else
            nC(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && yO(e, e.return, t), rC(e, e.return);
          break;
        }
        case B: {
          rC(e, e.return);
          break;
        }
      }
    }
    function TO(e, t) {
      for (var i = null, l = e; ; ) {
        if (l.tag === B) {
          if (i === null) {
            i = l;
            try {
              var c = l.stateNode;
              t ? XR(c) : ek(l.stateNode, l.memoizedProps);
            } catch (y) {
              Qt(e, e.return, y);
            }
          }
        } else if (l.tag === A) {
          if (i === null)
            try {
              var p = l.stateNode;
              t ? JR(p) : tk(p, l.memoizedProps);
            } catch (y) {
              Qt(e, e.return, y);
            }
        } else if (!((l.tag === Ae || l.tag === et) && l.memoizedState !== null && l !== e)) {
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
          i === l && (i = null), l = l.return;
        }
        i === l && (i = null), l.sibling.return = l.return, l = l.sibling;
      }
    }
    function iC(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, l;
        switch (e.tag) {
          case B:
            l = i;
            break;
          default:
            l = i;
        }
        if (typeof t == "function") {
          var c;
          if (e.mode & We)
            try {
              Fl(), c = t(l);
            } finally {
              zl(e);
            }
          else
            c = t(l);
          typeof c == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = l;
      }
    }
    function bO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function lC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, lC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var i = e.stateNode;
          i !== null && Lk(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function DO(e) {
      for (var t = e.return; t !== null; ) {
        if (oC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function oC(e) {
      return e.tag === B || e.tag === O || e.tag === z;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== A && t.tag !== pe; ) {
            if (t.flags & $t || t.child === null || t.tag === z)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & $t))
            return t.stateNode;
        }
    }
    function RO(e) {
      var t = DO(e);
      switch (t.tag) {
        case B: {
          var i = t.stateNode;
          t.flags & Dt && (s_(i), t.flags &= ~Dt);
          var l = uC(e);
          L1(e, l, i);
          break;
        }
        case O:
        case z: {
          var c = t.stateNode.containerInfo, p = uC(e);
          N1(e, p, c);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function N1(e, t, i) {
      var l = e.tag, c = l === B || l === A;
      if (c) {
        var p = e.stateNode;
        t ? QR(i, p, t) : WR(i, p);
      } else if (l !== z) {
        var y = e.child;
        if (y !== null) {
          N1(y, t, i);
          for (var w = y.sibling; w !== null; )
            N1(w, t, i), w = w.sibling;
        }
      }
    }
    function L1(e, t, i) {
      var l = e.tag, c = l === B || l === A;
      if (c) {
        var p = e.stateNode;
        t ? GR(i, p, t) : BR(i, p);
      } else if (l !== z) {
        var y = e.child;
        if (y !== null) {
          L1(y, t, i);
          for (var w = y.sibling; w !== null; )
            L1(w, t, i), w = w.sibling;
        }
      }
    }
    var Tr = null, Ki = !1;
    function kO(e, t, i) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case B: {
                Tr = l.stateNode, Ki = !1;
                break e;
              }
              case O: {
                Tr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
              case z: {
                Tr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (Tr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        sC(e, t, i), Tr = null, Ki = !1;
      }
      bO(i);
    }
    function $u(e, t, i) {
      for (var l = i.child; l !== null; )
        sC(e, t, l), l = l.sibling;
    }
    function sC(e, t, i) {
      switch (lp(i), i.tag) {
        case B:
          Cr || ad(i, t);
        case A: {
          {
            var l = Tr, c = Ki;
            Tr = null, $u(e, t, i), Tr = l, Ki = c, Tr !== null && (Ki ? ZR(Tr, i.stateNode) : qR(Tr, i.stateNode));
          }
          return;
        }
        case pe: {
          Tr !== null && (Ki ? KR(Tr, i.stateNode) : $0(Tr, i.stateNode));
          return;
        }
        case z: {
          {
            var p = Tr, y = Ki;
            Tr = i.stateNode.containerInfo, Ki = !0, $u(e, t, i), Tr = p, Ki = y;
          }
          return;
        }
        case T:
        case te:
        case G:
        case ee: {
          if (!Cr) {
            var w = i.updateQueue;
            if (w !== null) {
              var E = w.lastEffect;
              if (E !== null) {
                var x = E.next, D = x;
                do {
                  var j = D, L = j.destroy, V = j.tag;
                  L !== void 0 && ((V & Ul) !== La ? Py(i, t, L) : (V & Zn) !== La && (Gc(i), i.mode & We ? (Fl(), Py(i, t, L), zl(i)) : Py(i, t, L), cu())), D = D.next;
                } while (D !== x);
              }
            }
          }
          $u(e, t, i);
          return;
        }
        case b: {
          if (!Cr) {
            ad(i, t);
            var $ = i.stateNode;
            typeof $.componentWillUnmount == "function" && O1(i, t, $);
          }
          $u(e, t, i);
          return;
        }
        case Je: {
          $u(e, t, i);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            i.mode & ut
          ) {
            var q = Cr;
            Cr = q || i.memoizedState !== null, $u(e, t, i), Cr = q;
          } else
            $u(e, t, i);
          break;
        }
        default: {
          $u(e, t, i);
          return;
        }
      }
    }
    function MO(e) {
      e.memoizedState;
    }
    function OO(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var l = t.alternate;
        if (l !== null) {
          var c = l.memoizedState;
          if (c !== null) {
            var p = c.dehydrated;
            p !== null && mk(p);
          }
        }
      }
    }
    function cC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new hO()), t.forEach(function(l) {
          var c = DN.bind(null, e, l);
          if (!i.has(l)) {
            if (i.add(l), Gn)
              if (nd !== null && rd !== null)
                Mh(rd, nd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(c, c);
          }
        });
      }
    }
    function NO(e, t, i) {
      nd = i, rd = e, Lt(t), fC(t, e), Lt(t), nd = null, rd = null;
    }
    function Xi(e, t, i) {
      var l = t.deletions;
      if (l !== null)
        for (var c = 0; c < l.length; c++) {
          var p = l[c];
          try {
            kO(e, t, p);
          } catch (E) {
            Qt(p, t, E);
          }
        }
      var y = Vg();
      if (t.subtreeFlags & zr)
        for (var w = t.child; w !== null; )
          Lt(w), fC(w, e), w = w.sibling;
      Lt(y);
    }
    function fC(e, t, i) {
      var l = e.alternate, c = e.flags;
      switch (e.tag) {
        case T:
        case te:
        case G:
        case ee: {
          if (Xi(t, e), Hl(e), c & rt) {
            try {
              Zi(Ul | qn, e, e.return), Vu(Ul | qn, e);
            } catch (qe) {
              Qt(e, e.return, qe);
            }
            if (e.mode & We) {
              try {
                Fl(), Zi(Zn | qn, e, e.return);
              } catch (qe) {
                Qt(e, e.return, qe);
              }
              zl(e);
            } else
              try {
                Zi(Zn | qn, e, e.return);
              } catch (qe) {
                Qt(e, e.return, qe);
              }
          }
          return;
        }
        case b: {
          Xi(t, e), Hl(e), c & Ur && l !== null && ad(l, l.return);
          return;
        }
        case B: {
          Xi(t, e), Hl(e), c & Ur && l !== null && ad(l, l.return);
          {
            if (e.flags & Dt) {
              var p = e.stateNode;
              try {
                s_(p);
              } catch (qe) {
                Qt(e, e.return, qe);
              }
            }
            if (c & rt) {
              var y = e.stateNode;
              if (y != null) {
                var w = e.memoizedProps, E = l !== null ? l.memoizedProps : w, x = e.type, D = e.updateQueue;
                if (e.updateQueue = null, D !== null)
                  try {
                    VR(y, D, x, E, w, e);
                  } catch (qe) {
                    Qt(e, e.return, qe);
                  }
              }
            }
          }
          return;
        }
        case A: {
          if (Xi(t, e), Hl(e), c & rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, L = e.memoizedProps, V = l !== null ? l.memoizedProps : L;
            try {
              $R(j, V, L);
            } catch (qe) {
              Qt(e, e.return, qe);
            }
          }
          return;
        }
        case O: {
          if (Xi(t, e), Hl(e), c & rt && l !== null) {
            var $ = l.memoizedState;
            if ($.isDehydrated)
              try {
                vk(t.containerInfo);
              } catch (qe) {
                Qt(e, e.return, qe);
              }
          }
          return;
        }
        case z: {
          Xi(t, e), Hl(e);
          return;
        }
        case oe: {
          Xi(t, e), Hl(e);
          var q = e.child;
          if (q.flags & ml) {
            var be = q.stateNode, Ye = q.memoizedState, je = Ye !== null;
            if (be.isHidden = je, je) {
              var mt = q.alternate !== null && q.alternate.memoizedState !== null;
              mt || dN();
            }
          }
          if (c & rt) {
            try {
              MO(e);
            } catch (qe) {
              Qt(e, e.return, qe);
            }
            cC(e);
          }
          return;
        }
        case Ae: {
          var dt = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ut
          ) {
            var P = Cr;
            Cr = P || dt, Xi(t, e), Cr = P;
          } else
            Xi(t, e);
          if (Hl(e), c & ml) {
            var Z = e.stateNode, Y = e.memoizedState, le = Y !== null, De = e;
            if (Z.isHidden = le, le && !dt && (De.mode & ut) !== Ve) {
              Ne = De;
              for (var _e = De.child; _e !== null; )
                Ne = _e, UO(_e), _e = _e.sibling;
            }
            TO(De, le);
          }
          return;
        }
        case Qe: {
          Xi(t, e), Hl(e), c & rt && cC(e);
          return;
        }
        case Je:
          return;
        default: {
          Xi(t, e), Hl(e);
          return;
        }
      }
    }
    function Hl(e) {
      var t = e.flags;
      if (t & $t) {
        try {
          RO(e);
        } catch (i) {
          Qt(e, e.return, i);
        }
        e.flags &= ~$t;
      }
      t & _a && (e.flags &= ~_a);
    }
    function LO(e, t, i) {
      nd = i, rd = t, Ne = e, dC(e, t, i), nd = null, rd = null;
    }
    function dC(e, t, i) {
      for (var l = (e.mode & ut) !== Ve; Ne !== null; ) {
        var c = Ne, p = c.child;
        if (c.tag === Ae && l) {
          var y = c.memoizedState !== null, w = y || Hy;
          if (w) {
            U1(e, t, i);
            continue;
          } else {
            var E = c.alternate, x = E !== null && E.memoizedState !== null, D = x || Cr, j = Hy, L = Cr;
            Hy = w, Cr = D, Cr && !L && (Ne = c, jO(c));
            for (var V = p; V !== null; )
              Ne = V, dC(
                V,
                // New root; bubble back up to here and stop.
                t,
                i
              ), V = V.sibling;
            Ne = c, Hy = j, Cr = L, U1(e, t, i);
            continue;
          }
        }
        (c.subtreeFlags & sr) !== Pe && p !== null ? (p.return = c, Ne = p) : U1(e, t, i);
      }
    }
    function U1(e, t, i) {
      for (; Ne !== null; ) {
        var l = Ne;
        if ((l.flags & sr) !== Pe) {
          var c = l.alternate;
          Lt(l);
          try {
            xO(t, c, l, i);
          } catch (y) {
            Qt(l, l.return, y);
          }
          Tn();
        }
        if (l === e) {
          Ne = null;
          return;
        }
        var p = l.sibling;
        if (p !== null) {
          p.return = l.return, Ne = p;
          return;
        }
        Ne = l.return;
      }
    }
    function UO(e) {
      for (; Ne !== null; ) {
        var t = Ne, i = t.child;
        switch (t.tag) {
          case T:
          case te:
          case G:
          case ee: {
            if (t.mode & We)
              try {
                Fl(), Zi(Zn, t, t.return);
              } finally {
                zl(t);
              }
            else
              Zi(Zn, t, t.return);
            break;
          }
          case b: {
            ad(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && O1(t, t.return, l);
            break;
          }
          case B: {
            ad(t, t.return);
            break;
          }
          case Ae: {
            var c = t.memoizedState !== null;
            if (c) {
              pC(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Ne = i) : pC(e);
      }
    }
    function pC(e) {
      for (; Ne !== null; ) {
        var t = Ne;
        if (t === e) {
          Ne = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ne = i;
          return;
        }
        Ne = t.return;
      }
    }
    function jO(e) {
      for (; Ne !== null; ) {
        var t = Ne, i = t.child;
        if (t.tag === Ae) {
          var l = t.memoizedState !== null;
          if (l) {
            hC(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Ne = i) : hC(e);
      }
    }
    function hC(e) {
      for (; Ne !== null; ) {
        var t = Ne;
        Lt(t);
        try {
          CO(t);
        } catch (l) {
          Qt(t, t.return, l);
        }
        if (Tn(), t === e) {
          Ne = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ne = i;
          return;
        }
        Ne = t.return;
      }
    }
    function AO(e, t, i, l) {
      Ne = t, zO(t, e, i, l);
    }
    function zO(e, t, i, l) {
      for (; Ne !== null; ) {
        var c = Ne, p = c.child;
        (c.subtreeFlags & xa) !== Pe && p !== null ? (p.return = c, Ne = p) : FO(e, t, i, l);
      }
    }
    function FO(e, t, i, l) {
      for (; Ne !== null; ) {
        var c = Ne;
        if ((c.flags & Kt) !== Pe) {
          Lt(c);
          try {
            HO(t, c, i, l);
          } catch (y) {
            Qt(c, c.return, y);
          }
          Tn();
        }
        if (c === e) {
          Ne = null;
          return;
        }
        var p = c.sibling;
        if (p !== null) {
          p.return = c.return, Ne = p;
          return;
        }
        Ne = c.return;
      }
    }
    function HO(e, t, i, l) {
      switch (t.tag) {
        case T:
        case te:
        case ee: {
          if (t.mode & We) {
            f1();
            try {
              Vu(_r | qn, t);
            } finally {
              c1(t);
            }
          } else
            Vu(_r | qn, t);
          break;
        }
      }
    }
    function PO(e) {
      Ne = e, YO();
    }
    function YO() {
      for (; Ne !== null; ) {
        var e = Ne, t = e.child;
        if ((Ne.flags & bt) !== Pe) {
          var i = e.deletions;
          if (i !== null) {
            for (var l = 0; l < i.length; l++) {
              var c = i[l];
              Ne = c, $O(c, e);
            }
            {
              var p = e.alternate;
              if (p !== null) {
                var y = p.child;
                if (y !== null) {
                  p.child = null;
                  do {
                    var w = y.sibling;
                    y.sibling = null, y = w;
                  } while (y !== null);
                }
              }
            }
            Ne = e;
          }
        }
        (e.subtreeFlags & xa) !== Pe && t !== null ? (t.return = e, Ne = t) : IO();
      }
    }
    function IO() {
      for (; Ne !== null; ) {
        var e = Ne;
        (e.flags & Kt) !== Pe && (Lt(e), VO(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ne = t;
          return;
        }
        Ne = e.return;
      }
    }
    function VO(e) {
      switch (e.tag) {
        case T:
        case te:
        case ee: {
          e.mode & We ? (f1(), Zi(_r | qn, e, e.return), c1(e)) : Zi(_r | qn, e, e.return);
          break;
        }
      }
    }
    function $O(e, t) {
      for (; Ne !== null; ) {
        var i = Ne;
        Lt(i), WO(i, t), Tn();
        var l = i.child;
        l !== null ? (l.return = i, Ne = l) : BO(e);
      }
    }
    function BO(e) {
      for (; Ne !== null; ) {
        var t = Ne, i = t.sibling, l = t.return;
        if (lC(t), t === e) {
          Ne = null;
          return;
        }
        if (i !== null) {
          i.return = l, Ne = i;
          return;
        }
        Ne = l;
      }
    }
    function WO(e, t) {
      switch (e.tag) {
        case T:
        case te:
        case ee: {
          e.mode & We ? (f1(), Zi(_r, e, t), c1(e)) : Zi(_r, e, t);
          break;
        }
      }
    }
    function GO(e) {
      switch (e.tag) {
        case T:
        case te:
        case ee: {
          try {
            Vu(Zn | qn, e);
          } catch (i) {
            Qt(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            Qt(e, e.return, i);
          }
          break;
        }
      }
    }
    function QO(e) {
      switch (e.tag) {
        case T:
        case te:
        case ee: {
          try {
            Vu(_r | qn, e);
          } catch (t) {
            Qt(e, e.return, t);
          }
          break;
        }
      }
    }
    function qO(e) {
      switch (e.tag) {
        case T:
        case te:
        case ee: {
          try {
            Zi(Zn | qn, e, e.return);
          } catch (i) {
            Qt(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && O1(e, e.return, t);
          break;
        }
      }
    }
    function ZO(e) {
      switch (e.tag) {
        case T:
        case te:
        case ee:
          try {
            Zi(_r | qn, e, e.return);
          } catch (t) {
            Qt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Sh = Symbol.for;
      Sh("selector.component"), Sh("selector.has_pseudo_class"), Sh("selector.role"), Sh("selector.test_id"), Sh("selector.text");
    }
    var KO = [];
    function XO() {
      KO.forEach(function(e) {
        return e();
      });
    }
    var JO = s.ReactCurrentActQueue;
    function eN(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function vC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && JO.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var tN = Math.ceil, j1 = s.ReactCurrentDispatcher, A1 = s.ReactCurrentOwner, br = s.ReactCurrentBatchConfig, Ji = s.ReactCurrentActQueue, Jn = (
      /*             */
      0
    ), mC = (
      /*               */
      1
    ), Dr = (
      /*                */
      2
    ), wi = (
      /*                */
      4
    ), Uo = 0, wh = 1, ac = 2, Yy = 3, Eh = 4, yC = 5, z1 = 6, vt = Jn, sa = null, vn = null, er = X, Pl = X, F1 = Uu(X), tr = Uo, _h = null, Iy = X, xh = X, Vy = X, Ch = null, Ua = null, H1 = 0, gC = 500, SC = 1 / 0, nN = 500, jo = null;
    function Th() {
      SC = en() + nN;
    }
    function wC() {
      return SC;
    }
    var $y = !1, P1 = null, id = null, ic = !1, Bu = null, bh = X, Y1 = [], I1 = null, rN = 50, Dh = 0, V1 = null, $1 = !1, By = !1, aN = 50, ld = 0, Wy = null, Rh = Ht, Gy = X, EC = !1;
    function Qy() {
      return sa;
    }
    function ca() {
      return (vt & (Dr | wi)) !== Jn ? en() : (Rh !== Ht || (Rh = en()), Rh);
    }
    function Wu(e) {
      var t = e.mode;
      if ((t & ut) === Ve)
        return Ge;
      if ((vt & Dr) !== Jn && er !== X)
        return Dn(er);
      var i = eM() !== Jk;
      if (i) {
        if (br.transition !== null) {
          var l = br.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Gy === ht && (Gy = hp()), Gy;
      }
      var c = Da();
      if (c !== ht)
        return c;
      var p = FR();
      return p;
    }
    function iN(e) {
      var t = e.mode;
      return (t & ut) === Ve ? Ge : f0();
    }
    function nr(e, t, i, l) {
      kN(), EC && m("useInsertionEffect must not schedule updates."), $1 && (By = !0), yo(e, i, l), (vt & Dr) !== X && e === sa ? NN(t) : (Gn && Sp(e, t, i), LN(t), e === sa && ((vt & Dr) === Jn && (xh = at(xh, i)), tr === Eh && Gu(e, er)), ja(e, l), i === Ge && vt === Jn && (t.mode & ut) === Ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ji.isBatchingLegacy && (Th(), w_()));
    }
    function lN(e, t, i) {
      var l = e.current;
      l.lanes = t, yo(e, t, i), ja(e, i);
    }
    function oN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (vt & Dr) !== Jn
      );
    }
    function ja(e, t) {
      var i = e.callbackNode;
      u0(e, t);
      var l = Ms(e, e === sa ? er : X);
      if (l === X) {
        i !== null && zC(i), e.callbackNode = null, e.callbackPriority = ht;
        return;
      }
      var c = Sn(l), p = e.callbackPriority;
      if (p === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ji.current !== null && i !== K1)) {
        i == null && p !== Ge && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && zC(i);
      var y;
      if (c === Ge)
        e.tag === ju ? (Ji.isBatchingLegacy !== null && (Ji.didScheduleLegacyUpdate = !0), Ak(CC.bind(null, e))) : S_(CC.bind(null, e)), Ji.current !== null ? Ji.current.push(Au) : PR(function() {
          (vt & (Dr | wi)) === Jn && Au();
        }), y = null;
      else {
        var w;
        switch (js(l)) {
          case cr:
            w = Vc;
            break;
          case Qn:
            w = ia;
            break;
          case Fi:
            w = ci;
            break;
          case Ls:
            w = gl;
            break;
          default:
            w = ci;
            break;
        }
        y = X1(w, _C.bind(null, e));
      }
      e.callbackPriority = c, e.callbackNode = y;
    }
    function _C(e, t) {
      if (kM(), Rh = Ht, Gy = X, (vt & (Dr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, l = zo();
      if (l && e.callbackNode !== i)
        return null;
      var c = Ms(e, e === sa ? er : X);
      if (c === X)
        return null;
      var p = !Ns(e, c) && !lm(e, c) && !t, y = p ? yN(e, c) : Zy(e, c);
      if (y !== Uo) {
        if (y === ac) {
          var w = dp(e);
          w !== X && (c = w, y = B1(e, w));
        }
        if (y === wh) {
          var E = _h;
          throw lc(e, X), Gu(e, c), ja(e, en()), E;
        }
        if (y === z1)
          Gu(e, c);
        else {
          var x = !Ns(e, c), D = e.current.alternate;
          if (x && !sN(D)) {
            if (y = Zy(e, c), y === ac) {
              var j = dp(e);
              j !== X && (c = j, y = B1(e, j));
            }
            if (y === wh) {
              var L = _h;
              throw lc(e, X), Gu(e, c), ja(e, en()), L;
            }
          }
          e.finishedWork = D, e.finishedLanes = c, uN(e, y, c);
        }
      }
      return ja(e, en()), e.callbackNode === i ? _C.bind(null, e) : null;
    }
    function B1(e, t) {
      var i = Ch;
      if (kn(e)) {
        var l = lc(e, t);
        l.flags |= un, kk(e.containerInfo);
      }
      var c = Zy(e, t);
      if (c !== ac) {
        var p = Ua;
        Ua = i, p !== null && xC(p);
      }
      return c;
    }
    function xC(e) {
      Ua === null ? Ua = e : Ua.push.apply(Ua, e);
    }
    function uN(e, t, i) {
      switch (t) {
        case Uo:
        case wh:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          oc(e, Ua, jo);
          break;
        }
        case Yy: {
          if (Gu(e, i), hf(i) && // do not delay if we're inside an act() scope
          !FC()) {
            var l = H1 + gC - en();
            if (l > 10) {
              var c = Ms(e, X);
              if (c !== X)
                break;
              var p = e.suspendedLanes;
              if (!mo(p, i)) {
                ca(), yp(e, p);
                break;
              }
              e.timeoutHandle = I0(oc.bind(null, e, Ua, jo), l);
              break;
            }
          }
          oc(e, Ua, jo);
          break;
        }
        case Eh: {
          if (Gu(e, i), im(i))
            break;
          if (!FC()) {
            var y = am(e, i), w = y, E = en() - w, x = RN(E) - E;
            if (x > 10) {
              e.timeoutHandle = I0(oc.bind(null, e, Ua, jo), x);
              break;
            }
          }
          oc(e, Ua, jo);
          break;
        }
        case yC: {
          oc(e, Ua, jo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function sN(e) {
      for (var t = e; ; ) {
        if (t.flags & xs) {
          var i = t.updateQueue;
          if (i !== null) {
            var l = i.stores;
            if (l !== null)
              for (var c = 0; c < l.length; c++) {
                var p = l[c], y = p.getSnapshot, w = p.value;
                try {
                  if (!Oe(y(), w))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & xs && E !== null) {
          E.return = t, t = E;
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
    function Gu(e, t) {
      t = yu(t, Vy), t = yu(t, xh), mp(e, t);
    }
    function CC(e) {
      if (MM(), (vt & (Dr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      zo();
      var t = Ms(e, X);
      if (!Yr(t, Ge))
        return ja(e, en()), null;
      var i = Zy(e, t);
      if (e.tag !== ju && i === ac) {
        var l = dp(e);
        l !== X && (t = l, i = B1(e, l));
      }
      if (i === wh) {
        var c = _h;
        throw lc(e, X), Gu(e, t), ja(e, en()), c;
      }
      if (i === z1)
        throw new Error("Root did not complete. This is a bug in React.");
      var p = e.current.alternate;
      return e.finishedWork = p, e.finishedLanes = t, oc(e, Ua, jo), ja(e, en()), null;
    }
    function cN(e, t) {
      t !== X && (gu(e, at(t, Ge)), ja(e, en()), (vt & (Dr | wi)) === Jn && (Th(), Au()));
    }
    function W1(e, t) {
      var i = vt;
      vt |= mC;
      try {
        return e(t);
      } finally {
        vt = i, vt === Jn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ji.isBatchingLegacy && (Th(), w_());
      }
    }
    function fN(e, t, i, l, c) {
      var p = Da(), y = br.transition;
      try {
        return br.transition = null, Rn(cr), e(t, i, l, c);
      } finally {
        Rn(p), br.transition = y, vt === Jn && Th();
      }
    }
    function Ao(e) {
      Bu !== null && Bu.tag === ju && (vt & (Dr | wi)) === Jn && zo();
      var t = vt;
      vt |= mC;
      var i = br.transition, l = Da();
      try {
        return br.transition = null, Rn(cr), e ? e() : void 0;
      } finally {
        Rn(l), br.transition = i, vt = t, (vt & (Dr | wi)) === Jn && Au();
      }
    }
    function TC() {
      return (vt & (Dr | wi)) !== Jn;
    }
    function qy(e, t) {
      Vr(F1, Pl, e), Pl = at(Pl, t);
    }
    function G1(e) {
      Pl = F1.current, Ir(F1, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = X;
      var i = e.timeoutHandle;
      if (i !== V0 && (e.timeoutHandle = V0, HR(i)), vn !== null)
        for (var l = vn.return; l !== null; ) {
          var c = l.alternate;
          eC(c, l), l = l.return;
        }
      sa = e;
      var p = uc(e.current, null);
      return vn = p, er = Pl = t, tr = Uo, _h = null, Iy = X, xh = X, Vy = X, Ch = null, Ua = null, aM(), Bi.discardPendingWarnings(), p;
    }
    function bC(e, t) {
      do {
        var i = vn;
        try {
          if (ry(), nx(), Tn(), A1.current = null, i === null || i.return === null) {
            tr = wh, _h = t, vn = null;
            return;
          }
          if (Cn && i.mode & We && jy(i, !0), ri)
            if (lo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              tm(i, l, er);
            } else
              Qc(i, t, er);
          jM(e, i.return, i, t, er), MC(i);
        } catch (c) {
          t = c, vn === i && i !== null ? (i = i.return, vn = i) : i = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function DC() {
      var e = j1.current;
      return j1.current = My, e === null ? My : e;
    }
    function RC(e) {
      j1.current = e;
    }
    function dN() {
      H1 = en();
    }
    function kh(e) {
      Iy = at(e, Iy);
    }
    function pN() {
      tr === Uo && (tr = Yy);
    }
    function Q1() {
      (tr === Uo || tr === Yy || tr === ac) && (tr = Eh), sa !== null && (Os(Iy) || Os(xh)) && Gu(sa, er);
    }
    function hN(e) {
      tr !== Eh && (tr = ac), Ch === null ? Ch = [e] : Ch.push(e);
    }
    function vN() {
      return tr === Uo;
    }
    function Zy(e, t) {
      var i = vt;
      vt |= Dr;
      var l = DC();
      if (sa !== e || er !== t) {
        if (Gn) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (Mh(e, er), c.clear()), yf(e, t);
        }
        jo = wp(), lc(e, t);
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
      if (ry(), vt = i, RC(l), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return du(), sa = null, er = X, tr;
    }
    function mN() {
      for (; vn !== null; )
        kC(vn);
    }
    function yN(e, t) {
      var i = vt;
      vt |= Dr;
      var l = DC();
      if (sa !== e || er !== t) {
        if (Gn) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (Mh(e, er), c.clear()), yf(e, t);
        }
        jo = wp(), Th(), lc(e, t);
      }
      Za(t);
      do
        try {
          gN();
          break;
        } catch (p) {
          bC(e, p);
        }
      while (!0);
      return ry(), RC(l), vt = i, vn !== null ? (bs(), Uo) : (du(), sa = null, er = X, tr);
    }
    function gN() {
      for (; vn !== null && !Ic(); )
        kC(vn);
    }
    function kC(e) {
      var t = e.alternate;
      Lt(e);
      var i;
      (e.mode & We) !== Ve ? (s1(e), i = q1(t, e, Pl), jy(e, !0)) : i = q1(t, e, Pl), Tn(), e.memoizedProps = e.pendingProps, i === null ? MC(e) : vn = i, A1.current = null;
    }
    function MC(e) {
      var t = e;
      do {
        var i = t.alternate, l = t.return;
        if ((t.flags & na) === Pe) {
          Lt(t);
          var c = void 0;
          if ((t.mode & We) === Ve ? c = Jx(i, t, Pl) : (s1(t), c = Jx(i, t, Pl), jy(t, !1)), Tn(), c !== null) {
            vn = c;
            return;
          }
        } else {
          var p = pO(i, t);
          if (p !== null) {
            p.flags &= Wv, vn = p;
            return;
          }
          if ((t.mode & We) !== Ve) {
            jy(t, !1);
            for (var y = t.actualDuration, w = t.child; w !== null; )
              y += w.actualDuration, w = w.sibling;
            t.actualDuration = y;
          }
          if (l !== null)
            l.flags |= na, l.subtreeFlags = Pe, l.deletions = null;
          else {
            tr = z1, vn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          vn = E;
          return;
        }
        t = l, vn = t;
      } while (t !== null);
      tr === Uo && (tr = yC);
    }
    function oc(e, t, i) {
      var l = Da(), c = br.transition;
      try {
        br.transition = null, Rn(cr), SN(e, t, i, l);
      } finally {
        br.transition = c, Rn(l);
      }
      return null;
    }
    function SN(e, t, i, l) {
      do
        zo();
      while (Bu !== null);
      if (MN(), (vt & (Dr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      var c = e.finishedWork, p = e.finishedLanes;
      if (Bc(p), c === null)
        return op(), null;
      if (p === X && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = X, c === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ht;
      var y = at(c.lanes, c.childLanes);
      gp(e, y), e === sa && (sa = null, vn = null, er = X), ((c.subtreeFlags & xa) !== Pe || (c.flags & xa) !== Pe) && (ic || (ic = !0, I1 = i, X1(ci, function() {
        return zo(), null;
      })));
      var w = (c.subtreeFlags & (su | zr | sr | xa)) !== Pe, E = (c.flags & (su | zr | sr | xa)) !== Pe;
      if (w || E) {
        var x = br.transition;
        br.transition = null;
        var D = Da();
        Rn(cr);
        var j = vt;
        vt |= wi, A1.current = null, gO(e, c), Dx(), NO(e, c, p), NR(e.containerInfo), e.current = c, nm(p), LO(c, e, p), fu(), qv(), vt = j, Rn(D), br.transition = x;
      } else
        e.current = c, Dx();
      var L = ic;
      if (ic ? (ic = !1, Bu = e, bh = p) : (ld = 0, Wy = null), y = e.pendingLanes, y === X && (id = null), L || UC(e.current, !1), ji(c.stateNode, l), Gn && e.memoizedUpdaters.clear(), XO(), ja(e, en()), t !== null)
        for (var V = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var q = t[$], be = q.stack, Ye = q.digest;
          V(q.value, {
            componentStack: be,
            digest: Ye
          });
        }
      if ($y) {
        $y = !1;
        var je = P1;
        throw P1 = null, je;
      }
      return Yr(bh, Ge) && e.tag !== ju && zo(), y = e.pendingLanes, Yr(y, Ge) ? (RM(), e === V1 ? Dh++ : (Dh = 0, V1 = e)) : Dh = 0, Au(), op(), null;
    }
    function zo() {
      if (Bu !== null) {
        var e = js(bh), t = p0(Fi, e), i = br.transition, l = Da();
        try {
          return br.transition = null, Rn(t), EN();
        } finally {
          Rn(l), br.transition = i;
        }
      }
      return !1;
    }
    function wN(e) {
      Y1.push(e), ic || (ic = !0, X1(ci, function() {
        return zo(), null;
      }));
    }
    function EN() {
      if (Bu === null)
        return !1;
      var e = I1;
      I1 = null;
      var t = Bu, i = bh;
      if (Bu = null, bh = X, (vt & (Dr | wi)) !== Jn)
        throw new Error("Cannot flush passive effects while already rendering.");
      $1 = !0, By = !1, rm(i);
      var l = vt;
      vt |= wi, PO(t.current), AO(t, t.current, i, e);
      {
        var c = Y1;
        Y1 = [];
        for (var p = 0; p < c.length; p++) {
          var y = c[p];
          _O(t, y);
        }
      }
      Ts(), UC(t.current, !0), vt = l, Au(), By ? t === Wy ? ld++ : (ld = 0, Wy = t) : ld = 0, $1 = !1, By = !1, wl(t);
      {
        var w = t.current.stateNode;
        w.effectDuration = 0, w.passiveEffectDuration = 0;
      }
      return !0;
    }
    function OC(e) {
      return id !== null && id.has(e);
    }
    function _N(e) {
      id === null ? id = /* @__PURE__ */ new Set([e]) : id.add(e);
    }
    function xN(e) {
      $y || ($y = !0, P1 = e);
    }
    var CN = xN;
    function NC(e, t, i) {
      var l = nc(i, t), c = kx(e, l, Ge), p = Fu(e, c, Ge), y = ca();
      p !== null && (yo(p, Ge, y), ja(p, y));
    }
    function Qt(e, t, i) {
      if (vO(i), Oh(!1), e.tag === O) {
        NC(e, e, i);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === O) {
          NC(l, e, i);
          return;
        } else if (l.tag === b) {
          var c = l.type, p = l.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && !OC(p)) {
            var y = nc(i, e), w = v1(l, y, Ge), E = Fu(l, w, Ge), x = ca();
            E !== null && (yo(E, Ge, x), ja(E, x));
            return;
          }
        }
        l = l.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function TN(e, t, i) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var c = ca();
      yp(e, i), UN(e), sa === e && mo(er, i) && (tr === Eh || tr === Yy && hf(er) && en() - H1 < gC ? lc(e, X) : Vy = at(Vy, i)), ja(e, c);
    }
    function LC(e, t) {
      t === ht && (t = iN(e));
      var i = ca(), l = Na(e, t);
      l !== null && (yo(l, t, i), ja(l, i));
    }
    function bN(e) {
      var t = e.memoizedState, i = ht;
      t !== null && (i = t.retryLane), LC(e, i);
    }
    function DN(e, t) {
      var i = ht, l;
      switch (e.tag) {
        case oe:
          l = e.stateNode;
          var c = e.memoizedState;
          c !== null && (i = c.retryLane);
          break;
        case Qe:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), LC(e, i);
    }
    function RN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : tN(e / 1960) * 1960;
    }
    function kN() {
      if (Dh > rN)
        throw Dh = 0, V1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > aN && (ld = 0, Wy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function MN() {
      Bi.flushLegacyContextWarning(), Bi.flushPendingUnsafeLifecycleWarnings();
    }
    function UC(e, t) {
      Lt(e), Ky(e, Ar, qO), t && Ky(e, io, ZO), Ky(e, Ar, GO), t && Ky(e, io, QO), Tn();
    }
    function Ky(e, t, i) {
      for (var l = e, c = null; l !== null; ) {
        var p = l.subtreeFlags & t;
        l !== c && l.child !== null && p !== Pe ? l = l.child : ((l.flags & t) !== Pe && i(l), l.sibling !== null ? l = l.sibling : l = c = l.return);
      }
    }
    var Xy = null;
    function jC(e) {
      {
        if ((vt & Dr) !== Jn || !(e.mode & ut))
          return;
        var t = e.tag;
        if (t !== k && t !== O && t !== b && t !== T && t !== te && t !== G && t !== ee)
          return;
        var i = nt(e) || "ReactComponent";
        if (Xy !== null) {
          if (Xy.has(i))
            return;
          Xy.add(i);
        } else
          Xy = /* @__PURE__ */ new Set([i]);
        var l = yn;
        try {
          Lt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Lt(e) : Tn();
        }
      }
    }
    var q1;
    {
      var ON = null;
      q1 = function(e, t, i) {
        var l = VC(ON, t);
        try {
          return Qx(e, t, i);
        } catch (p) {
          if ($k() || p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (ry(), nx(), eC(e, t), VC(t, l), t.mode & We && s1(t), ao(null, Qx, null, e, t, i), l0()) {
            var c = Zd();
            typeof c == "object" && c !== null && c._suppressLogging && typeof p == "object" && p !== null && !p._suppressLogging && (p._suppressLogging = !0);
          }
          throw p;
        }
      };
    }
    var AC = !1, Z1;
    Z1 = /* @__PURE__ */ new Set();
    function NN(e) {
      if (ya && !TM())
        switch (e.tag) {
          case T:
          case te:
          case ee: {
            var t = vn && nt(vn) || "Unknown", i = t;
            if (!Z1.has(i)) {
              Z1.add(i);
              var l = nt(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case b: {
            AC || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), AC = !0);
            break;
          }
        }
    }
    function Mh(e, t) {
      if (Gn) {
        var i = e.memoizedUpdaters;
        i.forEach(function(l) {
          Sp(e, l, t);
        });
      }
    }
    var K1 = {};
    function X1(e, t) {
      {
        var i = Ji.current;
        return i !== null ? (i.push(t), K1) : Yc(e, t);
      }
    }
    function zC(e) {
      if (e !== K1)
        return Qv(e);
    }
    function FC() {
      return Ji.current !== null;
    }
    function LN(e) {
      {
        if (e.mode & ut) {
          if (!vC())
            return;
        } else if (!eN() || vt !== Jn || e.tag !== T && e.tag !== te && e.tag !== ee)
          return;
        if (Ji.current === null) {
          var t = yn;
          try {
            Lt(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? Lt(e) : Tn();
          }
        }
      }
    }
    function UN(e) {
      e.tag !== ju && vC() && Ji.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Oh(e) {
      EC = e;
    }
    var Ei = null, od = null, jN = function(e) {
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
    function J1(e) {
      return ud(e);
    }
    function ew(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = ud(e.render);
            if (e.render !== i) {
              var l = {
                $$typeof: Ie,
                render: i
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
        if (Ei === null)
          return !1;
        var i = e.elementType, l = t.type, c = !1, p = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof l == "function" && (c = !0);
            break;
          }
          case T: {
            (typeof l == "function" || p === Be) && (c = !0);
            break;
          }
          case te: {
            (p === Ie || p === Be) && (c = !0);
            break;
          }
          case G:
          case ee: {
            (p === lt || p === Be) && (c = !0);
            break;
          }
          default:
            return !1;
        }
        if (c) {
          var y = Ei(i);
          if (y !== void 0 && y === Ei(l))
            return !0;
        }
        return !1;
      }
    }
    function PC(e) {
      {
        if (Ei === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var AN = function(e, t) {
      {
        if (Ei === null)
          return;
        var i = t.staleFamilies, l = t.updatedFamilies;
        zo(), Ao(function() {
          tw(e.current, l, i);
        });
      }
    }, zN = function(e, t) {
      {
        if (e.context !== Xa)
          return;
        zo(), Ao(function() {
          Nh(t, e, null, null);
        });
      }
    };
    function tw(e, t, i) {
      {
        var l = e.alternate, c = e.child, p = e.sibling, y = e.tag, w = e.type, E = null;
        switch (y) {
          case T:
          case ee:
          case b:
            E = w;
            break;
          case te:
            E = w.render;
            break;
        }
        if (Ei === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, D = !1;
        if (E !== null) {
          var j = Ei(E);
          j !== void 0 && (i.has(j) ? D = !0 : t.has(j) && (y === b ? D = !0 : x = !0));
        }
        if (od !== null && (od.has(e) || l !== null && od.has(l)) && (D = !0), D && (e._debugNeedsRemount = !0), D || x) {
          var L = Na(e, Ge);
          L !== null && nr(L, e, Ge, Ht);
        }
        c !== null && !D && tw(c, t, i), p !== null && tw(p, t, i);
      }
    }
    var FN = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), l = new Set(t.map(function(c) {
          return c.current;
        }));
        return nw(e.current, l, i), i;
      }
    };
    function nw(e, t, i) {
      {
        var l = e.child, c = e.sibling, p = e.tag, y = e.type, w = null;
        switch (p) {
          case T:
          case ee:
          case b:
            w = y;
            break;
          case te:
            w = y.render;
            break;
        }
        var E = !1;
        w !== null && t.has(w) && (E = !0), E ? HN(e, i) : l !== null && nw(l, t, i), c !== null && nw(c, t, i);
      }
    }
    function HN(e, t) {
      {
        var i = PN(e, t);
        if (i)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case B:
              t.add(l.stateNode);
              return;
            case z:
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
    function PN(e, t) {
      for (var i = e, l = !1; ; ) {
        if (i.tag === B)
          l = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return l;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return l;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var rw;
    {
      rw = !1;
      try {
        var YC = Object.preventExtensions({});
      } catch {
        rw = !0;
      }
    }
    function YN(e, t, i, l) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Pe, this.subtreeFlags = Pe, this.deletions = null, this.lanes = X, this.childLanes = X, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !rw && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ja = function(e, t, i, l) {
      return new YN(e, t, i, l);
    };
    function aw(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function IN(e) {
      return typeof e == "function" && !aw(e) && e.defaultProps === void 0;
    }
    function VN(e) {
      if (typeof e == "function")
        return aw(e) ? b : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ie)
          return te;
        if (t === lt)
          return G;
      }
      return k;
    }
    function uc(e, t) {
      var i = e.alternate;
      i === null ? (i = Ja(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Pe, i.subtreeFlags = Pe, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Wn, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (i.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case k:
        case T:
        case ee:
          i.type = ud(e.type);
          break;
        case b:
          i.type = J1(e.type);
          break;
        case te:
          i.type = ew(e.type);
          break;
      }
      return i;
    }
    function $N(e, t) {
      e.flags &= Wn | $t;
      var i = e.alternate;
      if (i === null)
        e.childLanes = X, e.lanes = t, e.child = null, e.subtreeFlags = Pe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Pe, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var l = i.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function BN(e, t, i) {
      var l;
      return e === qm ? (l = ut, t === !0 && (l |= tn, l |= Ta)) : l = Ve, Gn && (l |= We), Ja(O, null, null, l);
    }
    function iw(e, t, i, l, c, p) {
      var y = k, w = e;
      if (typeof e == "function")
        aw(e) ? (y = b, w = J1(w)) : w = ud(w);
      else if (typeof e == "string")
        y = B;
      else
        e:
          switch (e) {
            case Va:
              return Qu(i.children, c, p, t);
            case ll:
              y = he, c |= tn, (c & ut) !== Ve && (c |= Ta);
              break;
            case M:
              return WN(i, c, p, t);
            case it:
              return GN(i, c, p, t);
            case gt:
              return QN(i, c, p, t);
            case Zt:
              return IC(i, c, p, t);
            case gr:
            case jn:
            case ol:
            case mc:
            case qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    y = K;
                    break e;
                  case ge:
                    y = we;
                    break e;
                  case Ie:
                    y = te, w = ew(w);
                    break e;
                  case lt:
                    y = G;
                    break e;
                  case Be:
                    y = xe, w = null;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = l ? nt(l) : null;
                x && (E += `

Check the render method of \`` + x + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
            }
          }
      var D = Ja(y, i, t, c);
      return D.elementType = e, D.type = w, D.lanes = p, D._debugOwner = l, D;
    }
    function lw(e, t, i) {
      var l = null;
      l = e._owner;
      var c = e.type, p = e.key, y = e.props, w = iw(c, p, y, l, t, i);
      return w._debugSource = e._source, w._debugOwner = e._owner, w;
    }
    function Qu(e, t, i, l) {
      var c = Ja(Q, e, l, t);
      return c.lanes = i, c;
    }
    function WN(e, t, i, l) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var c = Ja(Se, e, l, t | We);
      return c.elementType = M, c.lanes = i, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function GN(e, t, i, l) {
      var c = Ja(oe, e, l, t);
      return c.elementType = it, c.lanes = i, c;
    }
    function QN(e, t, i, l) {
      var c = Ja(Qe, e, l, t);
      return c.elementType = gt, c.lanes = i, c;
    }
    function IC(e, t, i, l) {
      var c = Ja(Ae, e, l, t);
      c.elementType = Zt, c.lanes = i;
      var p = {
        isHidden: !1
      };
      return c.stateNode = p, c;
    }
    function ow(e, t, i) {
      var l = Ja(A, e, null, t);
      return l.lanes = i, l;
    }
    function qN() {
      var e = Ja(B, null, null, Ve);
      return e.elementType = "DELETED", e;
    }
    function ZN(e) {
      var t = Ja(pe, null, null, Ve);
      return t.stateNode = e, t;
    }
    function uw(e, t, i) {
      var l = e.children !== null ? e.children : [], c = Ja(z, l, e.key, t);
      return c.lanes = i, c.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, c;
    }
    function VC(e, t) {
      return e === null && (e = Ja(k, null, null, Ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function KN(e, t, i, l, c) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = V0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ht, this.eventTimes = mf(X), this.expirationTimes = mf(Ht), this.pendingLanes = X, this.suspendedLanes = X, this.pingedLanes = X, this.expiredLanes = X, this.mutableReadLanes = X, this.finishedLanes = X, this.entangledLanes = X, this.entanglements = mf(X), this.identifierPrefix = l, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var p = this.pendingUpdatersLaneMap = [], y = 0; y < Wt; y++)
          p.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case qm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case ju:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function $C(e, t, i, l, c, p, y, w, E, x) {
      var D = new KN(e, t, i, w, E), j = BN(t, p);
      D.current = j, j.stateNode = D;
      {
        var L = {
          element: l,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = L;
      }
      return mS(j), D;
    }
    var sw = "18.2.0";
    function XN(e, t, i) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ha(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ea,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var cw, fw;
    cw = !1, fw = {};
    function BC(e) {
      if (!e)
        return Xa;
      var t = wa(e), i = jk(t);
      if (t.tag === b) {
        var l = t.type;
        if (Ll(l))
          return y_(t, l, i);
      }
      return i;
    }
    function JN(e, t) {
      {
        var i = wa(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var c = Ca(i);
        if (c === null)
          return null;
        if (c.mode & tn) {
          var p = nt(i) || "Component";
          if (!fw[p]) {
            fw[p] = !0;
            var y = yn;
            try {
              Lt(c), i.mode & tn ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p);
            } finally {
              y ? Lt(y) : Tn();
            }
          }
        }
        return c.stateNode;
      }
    }
    function WC(e, t, i, l, c, p, y, w) {
      var E = !1, x = null;
      return $C(e, t, E, x, i, l, c, p, y);
    }
    function GC(e, t, i, l, c, p, y, w, E, x) {
      var D = !0, j = $C(i, l, D, e, c, p, y, w, E);
      j.context = BC(null);
      var L = j.current, V = ca(), $ = Wu(L), q = No(V, $);
      return q.callback = t ?? null, Fu(L, q, $), lN(j, $, V), j;
    }
    function Nh(e, t, i, l) {
      Zv(t, e);
      var c = t.current, p = ca(), y = Wu(c);
      oo(y);
      var w = BC(i);
      t.context === null ? t.context = w : t.pendingContext = w, ya && yn !== null && !cw && (cw = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(yn) || "Unknown"));
      var E = No(p, y);
      E.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), E.callback = l);
      var x = Fu(c, E, y);
      return x !== null && (nr(x, c, y, p), uy(x, c, y)), y;
    }
    function Jy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case B:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function eL(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (kn(t)) {
            var i = s0(t);
            cN(t, i);
          }
          break;
        }
        case oe: {
          Ao(function() {
            var c = Na(e, Ge);
            if (c !== null) {
              var p = ca();
              nr(c, e, Ge, p);
            }
          });
          var l = Ge;
          dw(e, l);
          break;
        }
      }
    }
    function QC(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = um(i.retryLane, t));
    }
    function dw(e, t) {
      QC(e, t);
      var i = e.alternate;
      i && QC(i, t);
    }
    function tL(e) {
      if (e.tag === oe) {
        var t = pu, i = Na(e, t);
        if (i !== null) {
          var l = ca();
          nr(i, e, t, l);
        }
        dw(e, t);
      }
    }
    function nL(e) {
      if (e.tag === oe) {
        var t = Wu(e), i = Na(e, t);
        if (i !== null) {
          var l = ca();
          nr(i, e, t, l);
        }
        dw(e, t);
      }
    }
    function qC(e) {
      var t = Gv(e);
      return t === null ? null : t.stateNode;
    }
    var ZC = function(e) {
      return null;
    };
    function rL(e) {
      return ZC(e);
    }
    var KC = function(e) {
      return !1;
    };
    function aL(e) {
      return KC(e);
    }
    var XC = null, JC = null, eT = null, tT = null, nT = null, rT = null, aT = null, iT = null, lT = null;
    {
      var oT = function(e, t, i) {
        var l = t[i], c = An(e) ? e.slice() : ct({}, e);
        return i + 1 === t.length ? (An(c) ? c.splice(l, 1) : delete c[l], c) : (c[l] = oT(e[l], t, i + 1), c);
      }, uT = function(e, t) {
        return oT(e, t, 0);
      }, sT = function(e, t, i, l) {
        var c = t[l], p = An(e) ? e.slice() : ct({}, e);
        if (l + 1 === t.length) {
          var y = i[l];
          p[y] = p[c], An(p) ? p.splice(c, 1) : delete p[c];
        } else
          p[c] = sT(
            // $FlowFixMe number or string is fine here
            e[c],
            t,
            i,
            l + 1
          );
        return p;
      }, cT = function(e, t, i) {
        if (t.length !== i.length) {
          g("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < i.length - 1; l++)
            if (t[l] !== i[l]) {
              g("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return sT(e, t, i, 0);
      }, fT = function(e, t, i, l) {
        if (i >= t.length)
          return l;
        var c = t[i], p = An(e) ? e.slice() : ct({}, e);
        return p[c] = fT(e[c], t, i + 1, l), p;
      }, dT = function(e, t, i) {
        return fT(e, t, 0, i);
      }, pw = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      XC = function(e, t, i, l) {
        var c = pw(e, t);
        if (c !== null) {
          var p = dT(c.memoizedState, i, l);
          c.memoizedState = p, c.baseState = p, e.memoizedProps = ct({}, e.memoizedProps);
          var y = Na(e, Ge);
          y !== null && nr(y, e, Ge, Ht);
        }
      }, JC = function(e, t, i) {
        var l = pw(e, t);
        if (l !== null) {
          var c = uT(l.memoizedState, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = ct({}, e.memoizedProps);
          var p = Na(e, Ge);
          p !== null && nr(p, e, Ge, Ht);
        }
      }, eT = function(e, t, i, l) {
        var c = pw(e, t);
        if (c !== null) {
          var p = cT(c.memoizedState, i, l);
          c.memoizedState = p, c.baseState = p, e.memoizedProps = ct({}, e.memoizedProps);
          var y = Na(e, Ge);
          y !== null && nr(y, e, Ge, Ht);
        }
      }, tT = function(e, t, i) {
        e.pendingProps = dT(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Na(e, Ge);
        l !== null && nr(l, e, Ge, Ht);
      }, nT = function(e, t) {
        e.pendingProps = uT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Na(e, Ge);
        i !== null && nr(i, e, Ge, Ht);
      }, rT = function(e, t, i) {
        e.pendingProps = cT(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Na(e, Ge);
        l !== null && nr(l, e, Ge, Ht);
      }, aT = function(e) {
        var t = Na(e, Ge);
        t !== null && nr(t, e, Ge, Ht);
      }, iT = function(e) {
        ZC = e;
      }, lT = function(e) {
        KC = e;
      };
    }
    function iL(e) {
      var t = Ca(e);
      return t === null ? null : t.stateNode;
    }
    function lL(e) {
      return null;
    }
    function oL() {
      return yn;
    }
    function uL(e) {
      var t = e.findFiberByHostInstance, i = s.ReactCurrentDispatcher;
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
        currentDispatcherRef: i,
        findHostInstanceByFiber: iL,
        findFiberByHostInstance: t || lL,
        // React Refresh
        findHostInstancesForRefresh: FN,
        scheduleRefresh: AN,
        scheduleRoot: zN,
        setRefreshHandler: jN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: oL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: sw
      });
    }
    var pT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function hw(e) {
      this._internalRoot = e;
    }
    eg.prototype.render = hw.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : tg(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== gn) {
          var l = qC(t.current);
          l && l.parentNode !== i && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Nh(e, t, null, null);
    }, eg.prototype.unmount = hw.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        TC() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ao(function() {
          Nh(null, e, null, null);
        }), d_(t);
      }
    };
    function sL(e, t) {
      if (!tg(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      hT(e);
      var i = !1, l = !1, c = "", p = pT;
      t != null && (t.hydrate ? g("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === il && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var y = WC(e, qm, null, i, l, c, p);
      Im(y.current, e);
      var w = e.nodeType === gn ? e.parentNode : e;
      return Pp(w), new hw(y);
    }
    function eg(e) {
      this._internalRoot = e;
    }
    function cL(e) {
      e && mm(e);
    }
    eg.prototype.unstable_scheduleHydration = cL;
    function fL(e, t, i) {
      if (!tg(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      hT(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = i ?? null, c = i != null && i.hydratedSources || null, p = !1, y = !1, w = "", E = pT;
      i != null && (i.unstable_strictMode === !0 && (p = !0), i.identifierPrefix !== void 0 && (w = i.identifierPrefix), i.onRecoverableError !== void 0 && (E = i.onRecoverableError));
      var x = GC(t, null, e, qm, l, p, y, w, E);
      if (Im(x.current, e), Pp(e), c)
        for (var D = 0; D < c.length; D++) {
          var j = c[D];
          SM(x, j);
        }
      return new eg(x);
    }
    function tg(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ga || e.nodeType === Xl || !Tt));
    }
    function Lh(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ga || e.nodeType === Xl || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function hT(e) {
      e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Kp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var dL = s.ReactCurrentOwner, vT;
    vT = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = qC(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, l = vw(e), c = !!(l && Lu(l));
      c && !i && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function vw(e) {
      return e ? e.nodeType === Ga ? e.documentElement : e.firstChild : null;
    }
    function mT() {
    }
    function pL(e, t, i, l, c) {
      if (c) {
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
          ju,
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
        var w = e.nodeType === gn ? e.parentNode : e;
        return Pp(w), Ao(), y;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof l == "function") {
          var x = l;
          l = function() {
            var L = Jy(D);
            x.call(L);
          };
        }
        var D = WC(
          e,
          ju,
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
        e._reactRootContainer = D, Im(D.current, e);
        var j = e.nodeType === gn ? e.parentNode : e;
        return Pp(j), Ao(function() {
          Nh(t, D, i, l);
        }), D;
      }
    }
    function hL(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ng(e, t, i, l, c) {
      vT(i), hL(c === void 0 ? null : c, "render");
      var p = i._reactRootContainer, y;
      if (!p)
        y = pL(i, t, e, c, l);
      else {
        if (y = p, typeof c == "function") {
          var w = c;
          c = function() {
            var E = Jy(y);
            w.call(E);
          };
        }
        Nh(t, y, e, c);
      }
      return Jy(y);
    }
    function vL(e) {
      {
        var t = dL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Lr ? e : JN(e, "findDOMNode");
    }
    function mL(e, t, i) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Kp(t) && t._reactRootContainer === void 0;
        l && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ng(null, e, t, !0, i);
    }
    function yL(e, t, i) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Kp(t) && t._reactRootContainer === void 0;
        l && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ng(null, e, t, !1, i);
    }
    function gL(e, t, i, l) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_s(e))
        throw new Error("parentComponent must be a valid React Component");
      return ng(e, t, i, !1, l);
    }
    function SL(e) {
      if (!Lh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Kp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = vw(e), l = i && !Lu(i);
          l && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ao(function() {
          ng(null, null, e, !1, function() {
            e._reactRootContainer = null, d_(e);
          });
        }), !0;
      } else {
        {
          var c = vw(e), p = !!(c && Lu(c)), y = e.nodeType === Lr && Lh(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Re(eL), cm(tL), zs(nL), _p(Da), dm(Us), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), $v(_R), Ac(W1, fN, Ao);
    function wL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!tg(t))
        throw new Error("Target container is not a DOM element.");
      return XN(e, t, null, i);
    }
    function EL(e, t, i, l) {
      return gL(e, t, i, l);
    }
    var mw = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lu, Hf, Vm, jc, Ss, W1]
    };
    function _L(e, t) {
      return mw.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sL(e, t);
    }
    function xL(e, t, i) {
      return mw.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), fL(e, t, i);
    }
    function CL(e) {
      return TC() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ao(e);
    }
    var TL = uL({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: sw,
      rendererPackageName: "react-dom"
    });
    if (!TL && Ln && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var yT = window.location.protocol;
      /^(https?|file):$/.test(yT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (yT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mw, za.createPortal = wL, za.createRoot = _L, za.findDOMNode = vL, za.flushSync = CL, za.hydrate = mL, za.hydrateRoot = xL, za.render = yL, za.unmountComponentAtNode = SL, za.unstable_batchedUpdates = W1, za.unstable_renderSubtreeIntoContainer = EL, za.version = sw, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), za;
}
function wD() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wD);
    } catch (a) {
      console.error(a);
    }
  }
}
process.env.NODE_ENV === "production" ? (wD(), Gw.exports = tF()) : Gw.exports = nF();
var rF = Gw.exports;
const Bh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Fg = (a, o, s, d = "") => {
  const h = a.split(":");
  if (a.slice(0, 1) === "@") {
    if (h.length < 2 || h.length > 3)
      return null;
    d = h.shift().slice(1);
  }
  if (h.length > 3 || !h.length)
    return null;
  if (h.length > 1) {
    const C = h.pop(), T = h.pop(), b = {
      // Allow provider without '@': "provider:prefix:name"
      provider: h.length > 0 ? h[0] : d,
      prefix: T,
      name: C
    };
    return o && !hg(b) ? null : b;
  }
  const g = h[0], m = g.split("-");
  if (m.length > 1) {
    const C = {
      provider: d,
      prefix: m.shift(),
      name: m.join("-")
    };
    return o && !hg(C) ? null : C;
  }
  if (s && d === "") {
    const C = {
      provider: d,
      prefix: "",
      name: g
    };
    return o && !hg(C, s) ? null : C;
  }
  return null;
}, hg = (a, o) => a ? !!((a.provider === "" || a.provider.match(Bh)) && (o && a.prefix === "" || a.prefix.match(Bh)) && a.name.match(Bh)) : !1, ED = Object.freeze(
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
}), OE = Object.freeze({
  ...ED,
  ...xg
}), Qw = Object.freeze({
  ...OE,
  body: "",
  hidden: !1
});
function aF(a, o) {
  const s = {};
  !a.hFlip != !o.hFlip && (s.hFlip = !0), !a.vFlip != !o.vFlip && (s.vFlip = !0);
  const d = ((a.rotate || 0) + (o.rotate || 0)) % 4;
  return d && (s.rotate = d), s;
}
function $T(a, o) {
  const s = aF(a, o);
  for (const d in Qw)
    d in xg ? d in a && !(d in s) && (s[d] = xg[d]) : d in o ? s[d] = o[d] : d in a && (s[d] = a[d]);
  return s;
}
function iF(a, o) {
  const s = a.icons, d = a.aliases || /* @__PURE__ */ Object.create(null), h = /* @__PURE__ */ Object.create(null);
  function g(m) {
    if (s[m])
      return h[m] = [];
    if (!(m in h)) {
      h[m] = null;
      const C = d[m] && d[m].parent, T = C && g(C);
      T && (h[m] = [C].concat(T));
    }
    return h[m];
  }
  return (o || Object.keys(s).concat(Object.keys(d))).forEach(g), h;
}
function lF(a, o, s) {
  const d = a.icons, h = a.aliases || /* @__PURE__ */ Object.create(null);
  let g = {};
  function m(C) {
    g = $T(
      d[C] || h[C],
      g
    );
  }
  return m(o), s.forEach(m), $T(a, g);
}
function _D(a, o) {
  const s = [];
  if (typeof a != "object" || typeof a.icons != "object")
    return s;
  a.not_found instanceof Array && a.not_found.forEach((h) => {
    o(h, null), s.push(h);
  });
  const d = iF(a);
  for (const h in d) {
    const g = d[h];
    g && (o(h, lF(a, h, g)), s.push(h));
  }
  return s;
}
const oF = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ED
};
function bw(a, o) {
  for (const s in o)
    if (s in a && typeof a[s] != typeof o[s])
      return !1;
  return !0;
}
function xD(a) {
  if (typeof a != "object" || a === null)
    return null;
  const o = a;
  if (typeof o.prefix != "string" || !a.icons || typeof a.icons != "object" || !bw(a, oF))
    return null;
  const s = o.icons;
  for (const h in s) {
    const g = s[h];
    if (!h.match(Bh) || typeof g.body != "string" || !bw(
      g,
      Qw
    ))
      return null;
  }
  const d = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const h in d) {
    const g = d[h], m = g.parent;
    if (!h.match(Bh) || typeof m != "string" || !s[m] && !d[m] || !bw(
      g,
      Qw
    ))
      return null;
  }
  return o;
}
const BT = /* @__PURE__ */ Object.create(null);
function uF(a, o) {
  return {
    provider: a,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pc(a, o) {
  const s = BT[a] || (BT[a] = /* @__PURE__ */ Object.create(null));
  return s[o] || (s[o] = uF(a, o));
}
function NE(a, o) {
  return xD(o) ? _D(o, (s, d) => {
    d ? a.icons[s] = d : a.missing.add(s);
  }) : [];
}
function sF(a, o, s) {
  try {
    if (typeof s.body == "string")
      return a.icons[o] = { ...s }, !0;
  } catch {
  }
  return !1;
}
let Xh = !1;
function CD(a) {
  return typeof a == "boolean" && (Xh = a), Xh;
}
function cF(a) {
  const o = typeof a == "string" ? Fg(a, !0, Xh) : a;
  if (o) {
    const s = pc(o.provider, o.prefix), d = o.name;
    return s.icons[d] || (s.missing.has(d) ? null : void 0);
  }
}
function fF(a, o) {
  const s = Fg(a, !0, Xh);
  if (!s)
    return !1;
  const d = pc(s.provider, s.prefix);
  return sF(d, s.name, o);
}
function dF(a, o) {
  if (typeof a != "object")
    return !1;
  if (typeof o != "string" && (o = a.provider || ""), Xh && !o && !a.prefix) {
    let h = !1;
    return xD(a) && (a.prefix = "", _D(a, (g, m) => {
      m && fF(g, m) && (h = !0);
    })), h;
  }
  const s = a.prefix;
  if (!hg({
    provider: o,
    prefix: s,
    name: "a"
  }))
    return !1;
  const d = pc(o, s);
  return !!NE(d, a);
}
const TD = Object.freeze({
  width: null,
  height: null
}), bD = Object.freeze({
  // Dimensions
  ...TD,
  // Transformations
  ...xg
}), pF = /(-?[0-9.]*[0-9]+[0-9.]*)/g, hF = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function WT(a, o, s) {
  if (o === 1)
    return a;
  if (s = s || 100, typeof a == "number")
    return Math.ceil(a * o * s) / s;
  if (typeof a != "string")
    return a;
  const d = a.split(pF);
  if (d === null || !d.length)
    return a;
  const h = [];
  let g = d.shift(), m = hF.test(g);
  for (; ; ) {
    if (m) {
      const C = parseFloat(g);
      isNaN(C) ? h.push(g) : h.push(Math.ceil(C * o * s) / s);
    } else
      h.push(g);
    if (g = d.shift(), g === void 0)
      return h.join("");
    m = !m;
  }
}
const vF = (a) => a === "unset" || a === "undefined" || a === "none";
function mF(a, o) {
  const s = {
    ...OE,
    ...a
  }, d = {
    ...bD,
    ...o
  }, h = {
    left: s.left,
    top: s.top,
    width: s.width,
    height: s.height
  };
  let g = s.body;
  [s, d].forEach((A) => {
    const Q = [], he = A.hFlip, we = A.vFlip;
    let K = A.rotate;
    he ? we ? K += 2 : (Q.push(
      "translate(" + (h.width + h.left).toString() + " " + (0 - h.top).toString() + ")"
    ), Q.push("scale(-1 1)"), h.top = h.left = 0) : we && (Q.push(
      "translate(" + (0 - h.left).toString() + " " + (h.height + h.top).toString() + ")"
    ), Q.push("scale(1 -1)"), h.top = h.left = 0);
    let te;
    switch (K < 0 && (K -= Math.floor(K / 4) * 4), K = K % 4, K) {
      case 1:
        te = h.height / 2 + h.top, Q.unshift(
          "rotate(90 " + te.toString() + " " + te.toString() + ")"
        );
        break;
      case 2:
        Q.unshift(
          "rotate(180 " + (h.width / 2 + h.left).toString() + " " + (h.height / 2 + h.top).toString() + ")"
        );
        break;
      case 3:
        te = h.width / 2 + h.left, Q.unshift(
          "rotate(-90 " + te.toString() + " " + te.toString() + ")"
        );
        break;
    }
    K % 2 === 1 && (h.left !== h.top && (te = h.left, h.left = h.top, h.top = te), h.width !== h.height && (te = h.width, h.width = h.height, h.height = te)), Q.length && (g = '<g transform="' + Q.join(" ") + '">' + g + "</g>");
  });
  const m = d.width, C = d.height, T = h.width, b = h.height;
  let k, O;
  m === null ? (O = C === null ? "1em" : C === "auto" ? b : C, k = WT(O, T / b)) : (k = m === "auto" ? T : m, O = C === null ? WT(k, b / T) : C === "auto" ? b : C);
  const z = {}, B = (A, Q) => {
    vF(Q) || (z[A] = Q.toString());
  };
  return B("width", k), B("height", O), z.viewBox = h.left.toString() + " " + h.top.toString() + " " + T.toString() + " " + b.toString(), {
    attributes: z,
    body: g
  };
}
const yF = /\sid="(\S+)"/g, gF = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let SF = 0;
function wF(a, o = gF) {
  const s = [];
  let d;
  for (; d = yF.exec(a); )
    s.push(d[1]);
  if (!s.length)
    return a;
  const h = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return s.forEach((g) => {
    const m = typeof o == "function" ? o(g) : o + (SF++).toString(), C = g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    a = a.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"),
      "$1" + m + h + "$3"
    );
  }), a = a.replace(new RegExp(h, "g"), ""), a;
}
const qw = /* @__PURE__ */ Object.create(null);
function EF(a, o) {
  qw[a] = o;
}
function Zw(a) {
  return qw[a] || qw[""];
}
function LE(a) {
  let o;
  if (typeof a.resources == "string")
    o = [a.resources];
  else if (o = a.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
    // Root path
    path: a.path || "/",
    // URL length limit
    maxURL: a.maxURL || 500,
    // Timeout before next host is used.
    rotate: a.rotate || 750,
    // Timeout before failing query.
    timeout: a.timeout || 5e3,
    // Randomise default API end point.
    random: a.random === !0,
    // Start index
    index: a.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: a.dataAfterTimeout !== !1
  };
}
const UE = /* @__PURE__ */ Object.create(null), Ph = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], vg = [];
for (; Ph.length > 0; )
  Ph.length === 1 || Math.random() > 0.5 ? vg.push(Ph.shift()) : vg.push(Ph.pop());
UE[""] = LE({
  resources: ["https://api.iconify.design"].concat(vg)
});
function _F(a, o) {
  const s = LE(o);
  return s === null ? !1 : (UE[a] = s, !0);
}
function jE(a) {
  return UE[a];
}
const xF = () => {
  let a;
  try {
    if (a = fetch, typeof a == "function")
      return a;
  } catch {
  }
};
let GT = xF();
function CF(a, o) {
  const s = jE(a);
  if (!s)
    return 0;
  let d;
  if (!s.maxURL)
    d = 0;
  else {
    let h = 0;
    s.resources.forEach((m) => {
      h = Math.max(h, m.length);
    });
    const g = o + ".json?icons=";
    d = s.maxURL - h - s.path.length - g.length;
  }
  return d;
}
function TF(a) {
  return a === 404;
}
const bF = (a, o, s) => {
  const d = [], h = CF(a, o), g = "icons";
  let m = {
    type: g,
    provider: a,
    prefix: o,
    icons: []
  }, C = 0;
  return s.forEach((T, b) => {
    C += T.length + 1, C >= h && b > 0 && (d.push(m), m = {
      type: g,
      provider: a,
      prefix: o,
      icons: []
    }, C = T.length), m.icons.push(T);
  }), d.push(m), d;
};
function DF(a) {
  if (typeof a == "string") {
    const o = jE(a);
    if (o)
      return o.path;
  }
  return "/";
}
const RF = (a, o, s) => {
  if (!GT) {
    s("abort", 424);
    return;
  }
  let d = DF(o.provider);
  switch (o.type) {
    case "icons": {
      const g = o.prefix, C = o.icons.join(","), T = new URLSearchParams({
        icons: C
      });
      d += g + ".json?" + T.toString();
      break;
    }
    case "custom": {
      const g = o.uri;
      d += g.slice(0, 1) === "/" ? g.slice(1) : g;
      break;
    }
    default:
      s("abort", 400);
      return;
  }
  let h = 503;
  GT(a + d).then((g) => {
    const m = g.status;
    if (m !== 200) {
      setTimeout(() => {
        s(TF(m) ? "abort" : "next", m);
      });
      return;
    }
    return h = 501, g.json();
  }).then((g) => {
    if (typeof g != "object" || g === null) {
      setTimeout(() => {
        g === 404 ? s("abort", g) : s("next", h);
      });
      return;
    }
    setTimeout(() => {
      s("success", g);
    });
  }).catch(() => {
    s("next", h);
  });
}, kF = {
  prepare: bF,
  send: RF
};
function MF(a) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, s = /* @__PURE__ */ Object.create(null);
  a.sort((h, g) => h.provider !== g.provider ? h.provider.localeCompare(g.provider) : h.prefix !== g.prefix ? h.prefix.localeCompare(g.prefix) : h.name.localeCompare(g.name));
  let d = {
    provider: "",
    prefix: "",
    name: ""
  };
  return a.forEach((h) => {
    if (d.name === h.name && d.prefix === h.prefix && d.provider === h.provider)
      return;
    d = h;
    const g = h.provider, m = h.prefix, C = h.name, T = s[g] || (s[g] = /* @__PURE__ */ Object.create(null)), b = T[m] || (T[m] = pc(g, m));
    let k;
    C in b.icons ? k = o.loaded : m === "" || b.missing.has(C) ? k = o.missing : k = o.pending;
    const O = {
      provider: g,
      prefix: m,
      name: C
    };
    k.push(O);
  }), o;
}
function DD(a, o) {
  a.forEach((s) => {
    const d = s.loaderCallbacks;
    d && (s.loaderCallbacks = d.filter((h) => h.id !== o));
  });
}
function OF(a) {
  a.pendingCallbacksFlag || (a.pendingCallbacksFlag = !0, setTimeout(() => {
    a.pendingCallbacksFlag = !1;
    const o = a.loaderCallbacks ? a.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let s = !1;
    const d = a.provider, h = a.prefix;
    o.forEach((g) => {
      const m = g.icons, C = m.pending.length;
      m.pending = m.pending.filter((T) => {
        if (T.prefix !== h)
          return !0;
        const b = T.name;
        if (a.icons[b])
          m.loaded.push({
            provider: d,
            prefix: h,
            name: b
          });
        else if (a.missing.has(b))
          m.missing.push({
            provider: d,
            prefix: h,
            name: b
          });
        else
          return s = !0, !0;
        return !1;
      }), m.pending.length !== C && (s || DD([a], g.id), g.callback(
        m.loaded.slice(0),
        m.missing.slice(0),
        m.pending.slice(0),
        g.abort
      ));
    });
  }));
}
let NF = 0;
function LF(a, o, s) {
  const d = NF++, h = DD.bind(null, s, d);
  if (!o.pending.length)
    return h;
  const g = {
    id: d,
    icons: o,
    callback: a,
    abort: h
  };
  return s.forEach((m) => {
    (m.loaderCallbacks || (m.loaderCallbacks = [])).push(g);
  }), h;
}
function UF(a, o = !0, s = !1) {
  const d = [];
  return a.forEach((h) => {
    const g = typeof h == "string" ? Fg(h, o, s) : h;
    g && d.push(g);
  }), d;
}
var jF = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function AF(a, o, s, d) {
  const h = a.resources.length, g = a.random ? Math.floor(Math.random() * h) : a.index;
  let m;
  if (a.random) {
    let G = a.resources.slice(0);
    for (m = []; G.length > 1; ) {
      const ee = Math.floor(Math.random() * G.length);
      m.push(G[ee]), G = G.slice(0, ee).concat(G.slice(ee + 1));
    }
    m = m.concat(G);
  } else
    m = a.resources.slice(g).concat(a.resources.slice(0, g));
  const C = Date.now();
  let T = "pending", b = 0, k, O = null, z = [], B = [];
  typeof d == "function" && B.push(d);
  function A() {
    O && (clearTimeout(O), O = null);
  }
  function Q() {
    T === "pending" && (T = "aborted"), A(), z.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), z = [];
  }
  function he(G, ee) {
    ee && (B = []), typeof G == "function" && B.push(G);
  }
  function we() {
    return {
      startTime: C,
      payload: o,
      status: T,
      queriesSent: b,
      queriesPending: z.length,
      subscribe: he,
      abort: Q
    };
  }
  function K() {
    T = "failed", B.forEach((G) => {
      G(void 0, k);
    });
  }
  function te() {
    z.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), z = [];
  }
  function Se(G, ee, xe) {
    const de = ee !== "success";
    switch (z = z.filter((pe) => pe !== G), T) {
      case "pending":
        break;
      case "failed":
        if (de || !a.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (ee === "abort") {
      k = xe, K();
      return;
    }
    if (de) {
      k = xe, z.length || (m.length ? oe() : K());
      return;
    }
    if (A(), te(), !a.random) {
      const pe = a.resources.indexOf(G.resource);
      pe !== -1 && pe !== a.index && (a.index = pe);
    }
    T = "completed", B.forEach((pe) => {
      pe(xe);
    });
  }
  function oe() {
    if (T !== "pending")
      return;
    A();
    const G = m.shift();
    if (G === void 0) {
      if (z.length) {
        O = setTimeout(() => {
          A(), T === "pending" && (te(), K());
        }, a.timeout);
        return;
      }
      K();
      return;
    }
    const ee = {
      status: "pending",
      resource: G,
      callback: (xe, de) => {
        Se(ee, xe, de);
      }
    };
    z.push(ee), b++, O = setTimeout(oe, a.rotate), s(G, o, ee.callback);
  }
  return setTimeout(oe), we;
}
function RD(a) {
  const o = {
    ...jF,
    ...a
  };
  let s = [];
  function d() {
    s = s.filter((C) => C().status === "pending");
  }
  function h(C, T, b) {
    const k = AF(
      o,
      C,
      T,
      (O, z) => {
        d(), b && b(O, z);
      }
    );
    return s.push(k), k;
  }
  function g(C) {
    return s.find((T) => C(T)) || null;
  }
  return {
    query: h,
    find: g,
    setIndex: (C) => {
      o.index = C;
    },
    getIndex: () => o.index,
    cleanup: d
  };
}
function QT() {
}
const Dw = /* @__PURE__ */ Object.create(null);
function zF(a) {
  if (!Dw[a]) {
    const o = jE(a);
    if (!o)
      return;
    const s = RD(o), d = {
      config: o,
      redundancy: s
    };
    Dw[a] = d;
  }
  return Dw[a];
}
function FF(a, o, s) {
  let d, h;
  if (typeof a == "string") {
    const g = Zw(a);
    if (!g)
      return s(void 0, 424), QT;
    h = g.send;
    const m = zF(a);
    m && (d = m.redundancy);
  } else {
    const g = LE(a);
    if (g) {
      d = RD(g);
      const m = a.resources ? a.resources[0] : "", C = Zw(m);
      C && (h = C.send);
    }
  }
  return !d || !h ? (s(void 0, 424), QT) : d.query(o, h, s)().abort;
}
const qT = "iconify2", Jh = "iconify", kD = Jh + "-count", ZT = Jh + "-version", MD = 36e5, HF = 168;
function Kw(a, o) {
  try {
    return a.getItem(o);
  } catch {
  }
}
function AE(a, o, s) {
  try {
    return a.setItem(o, s), !0;
  } catch {
  }
}
function KT(a, o) {
  try {
    a.removeItem(o);
  } catch {
  }
}
function Xw(a, o) {
  return AE(a, kD, o.toString());
}
function Jw(a) {
  return parseInt(Kw(a, kD)) || 0;
}
const Hg = {
  local: !0,
  session: !0
}, OD = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let zE = !1;
function PF(a) {
  zE = a;
}
let og = typeof window > "u" ? {} : window;
function ND(a) {
  const o = a + "Storage";
  try {
    if (og && og[o] && typeof og[o].length == "number")
      return og[o];
  } catch {
  }
  Hg[a] = !1;
}
function LD(a, o) {
  const s = ND(a);
  if (!s)
    return;
  const d = Kw(s, ZT);
  if (d !== qT) {
    if (d) {
      const C = Jw(s);
      for (let T = 0; T < C; T++)
        KT(s, Jh + T.toString());
    }
    AE(s, ZT, qT), Xw(s, 0);
    return;
  }
  const h = Math.floor(Date.now() / MD) - HF, g = (C) => {
    const T = Jh + C.toString(), b = Kw(s, T);
    if (typeof b == "string") {
      try {
        const k = JSON.parse(b);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > h && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, C))
          return !0;
      } catch {
      }
      KT(s, T);
    }
  };
  let m = Jw(s);
  for (let C = m - 1; C >= 0; C--)
    g(C) || (C === m - 1 ? (m--, Xw(s, m)) : OD[a].add(C));
}
function UD() {
  if (!zE) {
    PF(!0);
    for (const a in Hg)
      LD(a, (o) => {
        const s = o.data, d = o.provider, h = s.prefix, g = pc(
          d,
          h
        );
        if (!NE(g, s).length)
          return !1;
        const m = s.lastModified || -1;
        return g.lastModifiedCached = g.lastModifiedCached ? Math.min(g.lastModifiedCached, m) : m, !0;
      });
  }
}
function YF(a, o) {
  const s = a.lastModifiedCached;
  if (
    // Matches or newer
    s && s >= o
  )
    return s === o;
  if (a.lastModifiedCached = o, s)
    for (const d in Hg)
      LD(d, (h) => {
        const g = h.data;
        return h.provider !== a.provider || g.prefix !== a.prefix || g.lastModified === o;
      });
  return !0;
}
function IF(a, o) {
  zE || UD();
  function s(d) {
    let h;
    if (!Hg[d] || !(h = ND(d)))
      return;
    const g = OD[d];
    let m;
    if (g.size)
      g.delete(m = Array.from(g).shift());
    else if (m = Jw(h), !Xw(h, m + 1))
      return;
    const C = {
      cached: Math.floor(Date.now() / MD),
      provider: a.provider,
      data: o
    };
    return AE(
      h,
      Jh + m.toString(),
      JSON.stringify(C)
    );
  }
  o.lastModified && !YF(a, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), s("local") || s("session"));
}
function XT() {
}
function VF(a) {
  a.iconsLoaderFlag || (a.iconsLoaderFlag = !0, setTimeout(() => {
    a.iconsLoaderFlag = !1, OF(a);
  }));
}
function $F(a, o) {
  a.iconsToLoad ? a.iconsToLoad = a.iconsToLoad.concat(o).sort() : a.iconsToLoad = o, a.iconsQueueFlag || (a.iconsQueueFlag = !0, setTimeout(() => {
    a.iconsQueueFlag = !1;
    const { provider: s, prefix: d } = a, h = a.iconsToLoad;
    delete a.iconsToLoad;
    let g;
    if (!h || !(g = Zw(s)))
      return;
    g.prepare(s, d, h).forEach((C) => {
      FF(s, C, (T) => {
        if (typeof T != "object")
          C.icons.forEach((b) => {
            a.missing.add(b);
          });
        else
          try {
            const b = NE(
              a,
              T
            );
            if (!b.length)
              return;
            const k = a.pendingIcons;
            k && b.forEach((O) => {
              k.delete(O);
            }), IF(a, T);
          } catch (b) {
            console.error(b);
          }
        VF(a);
      });
    });
  }));
}
const BF = (a, o) => {
  const s = UF(a, !0, CD()), d = MF(s);
  if (!d.pending.length) {
    let T = !0;
    return o && setTimeout(() => {
      T && o(
        d.loaded,
        d.missing,
        d.pending,
        XT
      );
    }), () => {
      T = !1;
    };
  }
  const h = /* @__PURE__ */ Object.create(null), g = [];
  let m, C;
  return d.pending.forEach((T) => {
    const { provider: b, prefix: k } = T;
    if (k === C && b === m)
      return;
    m = b, C = k, g.push(pc(b, k));
    const O = h[b] || (h[b] = /* @__PURE__ */ Object.create(null));
    O[k] || (O[k] = []);
  }), d.pending.forEach((T) => {
    const { provider: b, prefix: k, name: O } = T, z = pc(b, k), B = z.pendingIcons || (z.pendingIcons = /* @__PURE__ */ new Set());
    B.has(O) || (B.add(O), h[b][k].push(O));
  }), g.forEach((T) => {
    const { provider: b, prefix: k } = T;
    h[b][k].length && $F(T, h[b][k]);
  }), o ? LF(o, d, g) : XT;
};
function WF(a, o) {
  const s = {
    ...a
  };
  for (const d in o) {
    const h = o[d], g = typeof h;
    d in TD ? (h === null || h && (g === "string" || g === "number")) && (s[d] = h) : g === typeof s[d] && (s[d] = d === "rotate" ? h % 4 : h);
  }
  return s;
}
const GF = /[\s,]+/;
function QF(a, o) {
  o.split(GF).forEach((s) => {
    switch (s.trim()) {
      case "horizontal":
        a.hFlip = !0;
        break;
      case "vertical":
        a.vFlip = !0;
        break;
    }
  });
}
function qF(a, o = 0) {
  const s = a.replace(/^-?[0-9.]*/, "");
  function d(h) {
    for (; h < 0; )
      h += 4;
    return h % 4;
  }
  if (s === "") {
    const h = parseInt(a);
    return isNaN(h) ? 0 : d(h);
  } else if (s !== a) {
    let h = 0;
    switch (s) {
      case "%":
        h = 25;
        break;
      case "deg":
        h = 90;
    }
    if (h) {
      let g = parseFloat(a.slice(0, a.length - s.length));
      return isNaN(g) ? 0 : (g = g / h, g % 1 === 0 ? d(g) : 0);
    }
  }
  return o;
}
function ZF(a, o) {
  let s = a.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const d in o)
    s += " " + d + '="' + o[d] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + s + ">" + a + "</svg>";
}
function KF(a) {
  return a.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function XF(a) {
  return "data:image/svg+xml," + KF(a);
}
function JF(a) {
  return 'url("' + XF(a) + '")';
}
let Wh;
function e3() {
  try {
    Wh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (a) => a
    });
  } catch {
    Wh = null;
  }
}
function t3(a) {
  return Wh === void 0 && e3(), Wh ? Wh.createHTML(a) : a;
}
const jD = {
  ...bD,
  inline: !1
}, n3 = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, r3 = {
  display: "inline-block"
}, eE = {
  backgroundColor: "currentColor"
}, AD = {
  backgroundColor: "transparent"
}, JT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, eb = {
  WebkitMask: eE,
  mask: eE,
  background: AD
};
for (const a in eb) {
  const o = eb[a];
  for (const s in JT)
    o[a + s] = JT[s];
}
const a3 = {
  ...jD,
  inline: !0
};
function tb(a) {
  return a + (a.match(/^[-0-9.]+$/) ? "px" : "");
}
const i3 = (a, o, s, d) => {
  const h = s ? a3 : jD, g = WF(h, o), m = o.mode || "svg", C = {}, T = o.style || {}, b = {
    ...m === "svg" ? n3 : {},
    ref: d
  };
  for (let we in o) {
    const K = o[we];
    if (K !== void 0)
      switch (we) {
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
          g[we] = K === !0 || K === "true" || K === 1;
          break;
        case "flip":
          typeof K == "string" && QF(g, K);
          break;
        case "color":
          C.color = K;
          break;
        case "rotate":
          typeof K == "string" ? g[we] = qF(K) : typeof K == "number" && (g[we] = K);
          break;
        case "ariaHidden":
        case "aria-hidden":
          K !== !0 && K !== "true" && delete b["aria-hidden"];
          break;
        default:
          h[we] === void 0 && (b[we] = K);
      }
  }
  const k = mF(a, g), O = k.attributes;
  if (g.inline && (C.verticalAlign = "-0.125em"), m === "svg") {
    b.style = {
      ...C,
      ...T
    }, Object.assign(b, O);
    let we = 0, K = o.id;
    return typeof K == "string" && (K = K.replace(/-/g, "_")), b.dangerouslySetInnerHTML = {
      __html: t3(wF(k.body, K ? () => K + "ID" + we++ : "iconifyReact"))
    }, kr.createElement("svg", b);
  }
  const { body: z, width: B, height: A } = a, Q = m === "mask" || (m === "bg" ? !1 : z.indexOf("currentColor") !== -1), he = ZF(z, {
    ...O,
    width: B + "",
    height: A + ""
  });
  return b.style = {
    ...C,
    "--svg": JF(he),
    width: tb(O.width),
    height: tb(O.height),
    ...r3,
    ...Q ? eE : AD,
    ...T
  }, kr.createElement("span", b);
};
CD(!0);
EF("", kF);
if (typeof document < "u" && typeof window < "u") {
  UD();
  const a = window;
  if (a.IconifyPreload !== void 0) {
    const o = a.IconifyPreload, s = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((d) => {
      try {
        // Check if item is an object and not null/array
        (typeof d != "object" || d === null || d instanceof Array || // Check for 'icons' and 'prefix'
        typeof d.icons != "object" || typeof d.prefix != "string" || // Add icon set
        !dF(d)) && console.error(s);
      } catch {
        console.error(s);
      }
    });
  }
  if (a.IconifyProviders !== void 0) {
    const o = a.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let s in o) {
        const d = "IconifyProviders[" + s + "] is invalid.";
        try {
          const h = o[s];
          if (typeof h != "object" || !h || h.resources === void 0)
            continue;
          _F(s, h) || console.error(d);
        } catch {
          console.error(d);
        }
      }
  }
}
class zD extends kr.Component {
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
    const s = this.state, d = this.props.icon;
    if (typeof d == "object" && d !== null && typeof d.body == "string") {
      this._icon = "", this._abortLoading(), (o || s.icon === null) && this._setData({
        data: d
      });
      return;
    }
    let h;
    if (typeof d != "string" || (h = Fg(d, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const g = cF(h);
    if (!g) {
      (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), g !== null && (this._loading = {
        name: d,
        abort: BF([h], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== d || s.icon === null) {
      this._abortLoading(), this._icon = d;
      const m = ["iconify"];
      h.prefix !== "" && m.push("iconify--" + h.prefix), h.provider !== "" && m.push("iconify--" + h.provider), this._setData({
        data: g,
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
    const o = this.props, s = this.state.icon;
    if (s === null)
      return o.children ? o.children : kr.createElement("span", {});
    let d = o;
    return s.classes && (d = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + s.classes.join(" ")
    }), i3({
      ...OE,
      ...s.data
    }, d, o._inline, o._ref);
  }
}
const l3 = kr.forwardRef(function(o, s) {
  const d = {
    ...o,
    _ref: s,
    _inline: !1
  };
  return kr.createElement(zD, d);
});
kr.forwardRef(function(o, s) {
  const d = {
    ...o,
    _ref: s,
    _inline: !0
  };
  return kr.createElement(zD, d);
});
const nb = (a) => {
  let o;
  const s = /* @__PURE__ */ new Set(), d = (T, b) => {
    const k = typeof T == "function" ? T(o) : T;
    if (!Object.is(k, o)) {
      const O = o;
      o = b ?? typeof k != "object" ? k : Object.assign({}, o, k), s.forEach((z) => z(o, O));
    }
  }, h = () => o, C = { setState: d, getState: h, subscribe: (T) => (s.add(T), () => s.delete(T)), destroy: () => {
    s.clear();
  } };
  return o = a(d, h, C), C;
}, o3 = (a) => a ? nb(a) : nb;
var tE = { exports: {} }, Rw = {}, ug = { exports: {} }, kw = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rb;
function u3() {
  if (rb)
    return kw;
  rb = 1;
  var a = kr;
  function o(O, z) {
    return O === z && (O !== 0 || 1 / O === 1 / z) || O !== O && z !== z;
  }
  var s = typeof Object.is == "function" ? Object.is : o, d = a.useState, h = a.useEffect, g = a.useLayoutEffect, m = a.useDebugValue;
  function C(O, z) {
    var B = z(), A = d({ inst: { value: B, getSnapshot: z } }), Q = A[0].inst, he = A[1];
    return g(function() {
      Q.value = B, Q.getSnapshot = z, T(Q) && he({ inst: Q });
    }, [O, B, z]), h(function() {
      return T(Q) && he({ inst: Q }), O(function() {
        T(Q) && he({ inst: Q });
      });
    }, [O]), m(B), B;
  }
  function T(O) {
    var z = O.getSnapshot;
    O = O.value;
    try {
      var B = z();
      return !s(O, B);
    } catch {
      return !0;
    }
  }
  function b(O, z) {
    return z();
  }
  var k = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? b : C;
  return kw.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : k, kw;
}
var Mw = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ab;
function s3() {
  return ab || (ab = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = kr, o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(te) {
      {
        for (var Se = arguments.length, oe = new Array(Se > 1 ? Se - 1 : 0), G = 1; G < Se; G++)
          oe[G - 1] = arguments[G];
        d("error", te, oe);
      }
    }
    function d(te, Se, oe) {
      {
        var G = o.ReactDebugCurrentFrame, ee = G.getStackAddendum();
        ee !== "" && (Se += "%s", oe = oe.concat([ee]));
        var xe = oe.map(function(de) {
          return String(de);
        });
        xe.unshift("Warning: " + Se), Function.prototype.apply.call(console[te], console, xe);
      }
    }
    function h(te, Se) {
      return te === Se && (te !== 0 || 1 / te === 1 / Se) || te !== te && Se !== Se;
    }
    var g = typeof Object.is == "function" ? Object.is : h, m = a.useState, C = a.useEffect, T = a.useLayoutEffect, b = a.useDebugValue, k = !1, O = !1;
    function z(te, Se, oe) {
      k || a.startTransition !== void 0 && (k = !0, s("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var G = Se();
      if (!O) {
        var ee = Se();
        g(G, ee) || (s("The result of getSnapshot should be cached to avoid an infinite loop"), O = !0);
      }
      var xe = m({
        inst: {
          value: G,
          getSnapshot: Se
        }
      }), de = xe[0].inst, pe = xe[1];
      return T(function() {
        de.value = G, de.getSnapshot = Se, B(de) && pe({
          inst: de
        });
      }, [te, G, Se]), C(function() {
        B(de) && pe({
          inst: de
        });
        var Qe = function() {
          B(de) && pe({
            inst: de
          });
        };
        return te(Qe);
      }, [te]), b(G), G;
    }
    function B(te) {
      var Se = te.getSnapshot, oe = te.value;
      try {
        var G = Se();
        return !g(oe, G);
      } catch {
        return !0;
      }
    }
    function A(te, Se, oe) {
      return Se();
    }
    var Q = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", he = !Q, we = he ? A : z, K = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : we;
    Mw.useSyncExternalStore = K, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Mw;
}
var ib;
function FD() {
  return ib || (ib = 1, process.env.NODE_ENV === "production" ? ug.exports = u3() : ug.exports = s3()), ug.exports;
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
var lb;
function c3() {
  if (lb)
    return Rw;
  lb = 1;
  var a = kr, o = FD();
  function s(b, k) {
    return b === k && (b !== 0 || 1 / b === 1 / k) || b !== b && k !== k;
  }
  var d = typeof Object.is == "function" ? Object.is : s, h = o.useSyncExternalStore, g = a.useRef, m = a.useEffect, C = a.useMemo, T = a.useDebugValue;
  return Rw.useSyncExternalStoreWithSelector = function(b, k, O, z, B) {
    var A = g(null);
    if (A.current === null) {
      var Q = { hasValue: !1, value: null };
      A.current = Q;
    } else
      Q = A.current;
    A = C(function() {
      function we(G) {
        if (!K) {
          if (K = !0, te = G, G = z(G), B !== void 0 && Q.hasValue) {
            var ee = Q.value;
            if (B(ee, G))
              return Se = ee;
          }
          return Se = G;
        }
        if (ee = Se, d(te, G))
          return ee;
        var xe = z(G);
        return B !== void 0 && B(ee, xe) ? ee : (te = G, Se = xe);
      }
      var K = !1, te, Se, oe = O === void 0 ? null : O;
      return [function() {
        return we(k());
      }, oe === null ? void 0 : function() {
        return we(oe());
      }];
    }, [k, O, z, B]);
    var he = h(b, A[0], A[1]);
    return m(function() {
      Q.hasValue = !0, Q.value = he;
    }, [he]), T(he), he;
  }, Rw;
}
var Ow = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ob;
function f3() {
  return ob || (ob = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = kr, o = FD();
    function s(k, O) {
      return k === O && (k !== 0 || 1 / k === 1 / O) || k !== k && O !== O;
    }
    var d = typeof Object.is == "function" ? Object.is : s, h = o.useSyncExternalStore, g = a.useRef, m = a.useEffect, C = a.useMemo, T = a.useDebugValue;
    function b(k, O, z, B, A) {
      var Q = g(null), he;
      Q.current === null ? (he = {
        hasValue: !1,
        value: null
      }, Q.current = he) : he = Q.current;
      var we = C(function() {
        var oe = !1, G, ee, xe = function(Je) {
          if (!oe) {
            oe = !0, G = Je;
            var Ae = B(Je);
            if (A !== void 0 && he.hasValue) {
              var et = he.value;
              if (A(et, Ae))
                return ee = et, et;
            }
            return ee = Ae, Ae;
          }
          var Pt = G, yt = ee;
          if (d(Pt, Je))
            return yt;
          var on = B(Je);
          return A !== void 0 && A(yt, on) ? yt : (G = Je, ee = on, on);
        }, de = z === void 0 ? null : z, pe = function() {
          return xe(O());
        }, Qe = de === null ? void 0 : function() {
          return xe(de());
        };
        return [pe, Qe];
      }, [O, z, B, A]), K = we[0], te = we[1], Se = h(k, K, te);
      return m(function() {
        he.hasValue = !0, he.value = Se;
      }, [Se]), T(Se), Se;
    }
    Ow.useSyncExternalStoreWithSelector = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ow;
}
process.env.NODE_ENV === "production" ? tE.exports = c3() : tE.exports = f3();
var d3 = tE.exports;
const p3 = /* @__PURE__ */ ML(d3), { useSyncExternalStoreWithSelector: h3 } = p3;
function v3(a, o = a.getState, s) {
  const d = h3(
    a.subscribe,
    a.getState,
    a.getServerState || a.getState,
    o,
    s
  );
  return kL(d), d;
}
const ub = (a) => {
  const o = typeof a == "function" ? o3(a) : a, s = (d, h) => v3(o, d, h);
  return Object.assign(s, o), s;
}, HD = (a) => a ? ub(a) : ub, PD = (a, o) => (...s) => Object.assign({}, a, o(...s)), YD = HD(
  PD(
    {
      currentOpen: []
    },
    (a, o) => ({
      openModal: (s) => {
        if (o().currentOpen.includes(s))
          return;
        const d = [...o().currentOpen, s];
        console.log("Updated openModal: ", d), a({ currentOpen: d });
      },
      closeModal: () => {
        const s = document.querySelector("#modal-root");
        s && (s.classList.add("closed"), setTimeout(() => {
          s.classList.remove("closed");
          const d = o().currentOpen.slice(
            0,
            o().currentOpen.length - 1
          );
          console.log("Updated openModal: ", d), a({ currentOpen: d });
        }, 190));
      },
      closeAllModals: () => {
        const s = document.querySelector("#modal-root");
        s && (s.classList.add("closed"), setTimeout(() => {
          s.classList.remove("closed"), a({ currentOpen: [] });
        }, 190));
      }
    })
  )
), m3 = ({
  children: a,
  currentName: o,
  variant: s = "neutral",
  size: d = "normal",
  closeButton: h = !1,
  onClose: g = () => {
  }
}) => {
  const { currentOpen: m, closeModal: C } = YD(), T = document.querySelector("#modal-root"), b = xn(null);
  return md(() => {
    m.length > 0 && b.current && (b.current.focus(), T.style.display = "block"), m.length === 0 && (T.style.display = "none");
  }, [m, T]), m.includes(o) && T ? rF.createPortal(
    /* @__PURE__ */ F.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: b,
        onKeyDown: (k) => {
          k.key === "Escape" && (g(), C());
        },
        className: "modal",
        children: [
          /* @__PURE__ */ F.jsx(
            "div",
            {
              className: "modal-overlay",
              onClick: () => {
                g(), C();
              }
            }
          ),
          /* @__PURE__ */ F.jsxs(
            "div",
            {
              className: `modal-body container rounded-box bg-${s} ${d}`,
              children: [
                h && /* @__PURE__ */ F.jsx(
                  "button",
                  {
                    type: "button",
                    className: "close-btn",
                    onClick: () => {
                      g(), C();
                    },
                    children: /* @__PURE__ */ F.jsx(l3, { icon: "mingcute:close-fill", height: 16 })
                  }
                ),
                a
              ]
            }
          )
        ]
      }
    ),
    T
  ) : null;
}, y3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], g3 = ({
  children: a,
  data: o,
  itemsPerPage: s = 30
}) => {
  const d = Xu(() => o.length, [o]), [h, g] = _n(1), [m, C] = _n(s), T = Xu(() => o.slice(
    (h - 1) * m,
    h * m
  ), [o, h, m]);
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx("div", { className: "table-content custom-scroll", children: a({ data: T() }) }),
    /* @__PURE__ */ F.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: h === 1,
          onClick: () => g(1),
          children: /* @__PURE__ */ F.jsx(mr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: h === 1,
          onClick: () => g((b) => b - 1),
          children: /* @__PURE__ */ F.jsx(mr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ F.jsxs("span", { children: [
        "Página ",
        /* @__PURE__ */ F.jsx("span", { className: "page", children: h }),
        " de",
        " ",
        /* @__PURE__ */ F.jsx("span", { className: "page", children: Math.ceil(d() / m) })
      ] }),
      /* @__PURE__ */ F.jsx(
        kE,
        {
          items: y3,
          currentSelected: s,
          labelExtractor: (b) => `Por página ${b}`,
          keyExtractor: (b) => b,
          showQty: 3,
          position: "bottom",
          onChange: (b, k) => {
            const O = Math.ceil(d() / k), z = h * m, A = (h > O ? O * k : h * k) / z, Q = A !== 1 ? Math.floor(h / A) : h;
            h > O ? g(O) : g(Q < 1 ? 1 : Q), C(k);
          }
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(d() / m) === h,
          onClick: () => g((b) => b + 1),
          children: /* @__PURE__ */ F.jsx(mr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(d() / m) === h,
          onClick: () => g(Math.ceil(d() / m)),
          title: "Last Page",
          children: /* @__PURE__ */ F.jsx(mr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ F.jsxs("span", { children: [
        d(),
        " itens"
      ] })
    ] })
  ] });
}, S3 = (a) => {
  const [o, s] = _n(a ?? null), [d, h] = _n({
    top: (o == null ? void 0 : o.scrollTop) ?? 0,
    scrollHeight: (o == null ? void 0 : o.scrollHeight) ?? 0,
    height: (o == null ? void 0 : o.clientHeight) ?? 0
  });
  return md(() => {
    const g = () => {
      o && h({
        top: o.scrollTop,
        scrollHeight: o.scrollHeight,
        height: o.clientHeight
      });
    };
    if (o)
      return o == null || o.addEventListener("scroll", ME(g, 150)), () => {
        o == null || o.removeEventListener("scroll", g);
      };
  }, [o]), o ? { ...d, scrollTo: o.scrollTo, root: o, setRoot: s, changeScrollData: h } : {
    top: 0,
    scrollHeight: 0,
    height: 0,
    scrollTo: () => {
    },
    root: o,
    setRoot: s,
    changeScrollData: h
  };
}, w3 = ({
  children: a,
  data: o,
  tableContainerRef: s
}) => {
  const { height: d, scrollHeight: h, top: g, root: m, setRoot: C, changeScrollData: T } = S3(s == null ? void 0 : s.current), b = xn(0), k = xn(b.current * 2), O = 40, z = Xu(() => s.current === null ? 10 : Math.ceil(s.current.clientHeight / O), [s]);
  md(() => (m === null && C(s.current), b.current = z(), () => {
  }), [z, s, m, C, T]);
  const B = Xu(() => {
    let A = 0;
    return m === null ? [] : (b.current < 10 && (b.current = z() * 2), Math.ceil(d + g) === h && (k.current += b.current, m.scrollTo({
      top: b.current * O
    })), k.current > b.current * 3 && g > 0 && (A = k.current - b.current * 3), g === 0 && k.current > b.current * 3 && (k.current -= b.current, A = k.current - b.current * 3, m.scrollTo({
      top: b.current * O
    })), o.slice(A, k.current));
  }, [o, d, z, h, g, m, b]);
  return a({ data: B() });
}, E3 = {
  scroll: w3,
  pagination: g3
}, _3 = ({
  mode: a,
  children: o,
  data: s
}) => {
  const d = xn(null), h = E3[a];
  return /* @__PURE__ */ F.jsx("div", { className: `table-container ${a}`, ref: d, children: /* @__PURE__ */ F.jsx(h, { tableContainerRef: d, data: s, children: o }) });
}, x3 = ({
  closeModal: a,
  config: o
}) => /* @__PURE__ */ F.jsxs(m3, { currentName: "table-config-modal", children: [
  o.map((s) => /* @__PURE__ */ F.jsxs("div", { className: "container row between-center", children: [
    /* @__PURE__ */ F.jsx("span", { children: s }),
    /* @__PURE__ */ F.jsx(
      kE,
      {
        variant: "neutral",
        items: ["Expected", "Overhelmed", "Below Expectation"]
      }
    )
  ] }, s)),
  /* @__PURE__ */ F.jsx("button", { className: "btn btn-primary ring-info", onClick: a, children: "Save" })
] }), C3 = ({
  index: a,
  columns: o,
  translation: s,
  column: d,
  ordersType: h,
  orderedHeader: g,
  order: m,
  setOrder: C,
  tBodyRef: T,
  mousePosition: b
}) => /* @__PURE__ */ F.jsx("th", { children: /* @__PURE__ */ F.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ F.jsx("span", { children: s(d) }),
  /* @__PURE__ */ F.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ F.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${h[m] === "asc" && g.current === d ? "active" : ""}`,
        onClick: () => {
          C(
            (k) => k === 1 && g.current === d ? 0 : 1
          ), g.current = d;
        },
        children: /* @__PURE__ */ F.jsx(mr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${h[m] === "desc" && g.current === d ? "active" : ""}`,
        onClick: () => {
          C(
            (k) => k === 2 && g.current === d ? 0 : 2
          ), g.current = d;
        },
        children: /* @__PURE__ */ F.jsx(mr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  o.length - 1 !== a && /* @__PURE__ */ F.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (k) => {
        b.current.startPosition = k.clientX;
      },
      onMouseMove: (k) => {
        var A;
        if (T.current === null || b.current.startPosition === 0)
          return;
        b.current.currentPosition = k.clientX;
        const O = (A = T.current.firstChild) == null ? void 0 : A.childNodes[a];
        if (O === null)
          return;
        const z = O.getBoundingClientRect().width, B = b.current.currentPosition - b.current.startPosition;
        O.style.width = `${z + B}px`, b.current.startPosition = b.current.currentPosition;
      },
      onMouseUp: () => {
        b.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onMouseLeave: () => {
        b.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onClick: (k) => {
        var z;
        if (k.detail < 2 || T.current === null)
          return;
        const O = (z = T.current.firstChild) == null ? void 0 : z.childNodes[a];
        O !== null && (O.style.width = "auto");
      },
      children: [
        /* @__PURE__ */ F.jsx("span", {}),
        /* @__PURE__ */ F.jsx("span", {})
      ]
    }
  )
] }) }), T3 = (a, o, s = "asc") => {
  if (s === "default" || o === null)
    return a;
  const d = s === "asc" ? 1 : -1;
  return a.slice().sort((h, g) => {
    const m = h[o], C = g[o];
    return m < C ? -1 * d : m > C ? 1 * d : 0;
  });
}, sb = {
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
}, cb = ["default", "asc", "desc"], H3 = ({
  headers: a,
  data: o,
  dataConfig: s,
  showObject: d,
  // headersConfig,
  action: h,
  loading: g = !1,
  hideColumn: m = [],
  mode: C = "pagination"
}) => {
  const { closeModal: T, openModal: b } = YD(), k = (oe) => Object.hasOwnProperty.call(sb, oe) ? sb[oe] : oe, [O] = _n(C), [z, B] = _n(0), A = xn(null), Q = xn(null), he = xn({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [we, K] = _n(""), te = Xu(() => g ? [] : o.filter((oe) => {
    if (we.trim() === "")
      return o;
    const G = we.toLowerCase().trim();
    return Object.entries(oe).some(([xe, de]) => {
      var pe;
      return m.includes(xe) ? !1 : typeof de == "object" && Object.hasOwnProperty.call(s, xe) ? String(
        (pe = s == null ? void 0 : s[xe]) == null ? void 0 : pe.call(s, de, oe)
      ).toLowerCase().includes(G) : typeof de == "object" ? String(Object.values(de)[0]).toLowerCase().includes(G) : String(de).toLowerCase().includes(G);
    });
  }), [we, m, o, s, g]), Se = Xu(() => T3(te(), A.current, cb[z]), [z, te, A]);
  return /* @__PURE__ */ F.jsxs("div", { className: "table-full", children: [
    /* @__PURE__ */ F.jsxs("div", { className: "group rounded-box no-print", children: [
      /* @__PURE__ */ F.jsx("label", { className: "bg-primary", htmlFor: "find-all-table", children: "Buscar" }),
      /* @__PURE__ */ F.jsx(
        "input",
        {
          className: "input input-neutral ring-info",
          id: "find-all-table",
          placeholder: "Filtrar por....",
          style: { flex: "1" },
          onChange: ME((oe) => {
            K(oe.target.value);
          }, 300)
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-primary btn-icon",
          style: { flex: "0" },
          onClick: () => b("table-config-modal"),
          children: /* @__PURE__ */ F.jsx(mr, { icon: "mdi:filter" })
        }
      )
    ] }),
    /* @__PURE__ */ F.jsx(_3, { mode: O, data: Se(), children: ({ data: oe }) => {
      let G = 0;
      return /* @__PURE__ */ F.jsxs("table", { className: "table", children: [
        /* @__PURE__ */ F.jsx("thead", { children: /* @__PURE__ */ F.jsxs("tr", { children: [
          a && a.map((ee, xe) => m.includes(ee) ? null : (xe++, /* @__PURE__ */ F.jsx("th", { children: ee }, xe))),
          a === void 0 && oe.length > 0 && Object.keys(oe[0]).map((ee) => m.includes(ee) ? null : (G++, /* @__PURE__ */ F.jsx(
            C3,
            {
              tBodyRef: Q,
              mousePosition: he,
              orderedHeader: A,
              order: z,
              setOrder: B,
              column: ee,
              index: G - 1,
              columns: Object.keys(oe[0]),
              ordersType: cb,
              translation: k
            },
            G - 1
          ))),
          g && /* @__PURE__ */ F.jsx("th", {}),
          h && /* @__PURE__ */ F.jsx("th", { children: "Ação" })
        ] }) }),
        /* @__PURE__ */ F.jsxs("tbody", { ref: Q, children: [
          g && /* @__PURE__ */ F.jsx("h2", { className: "subtitle", style: { margin: "auto", marginTop: "1rem", width: "fit-content" }, children: "Carregando..." }),
          oe.map((ee, xe) => /* @__PURE__ */ F.jsxs("tr", { tabIndex: 0, children: [
            Object.entries(ee).map(([de, pe], Qe) => {
              var Ae;
              let Je;
              return m.includes(de) ? null : (typeof pe == "object" && (s == null ? void 0 : s[de]) === void 0 ? Je = Object.values(pe)[0] : Object.hasOwnProperty.call(s ?? {}, de) ? Je = (Ae = s == null ? void 0 : s[de]) == null ? void 0 : Ae.call(
                s,
                pe,
                ee
              ) : Je = pe, /* @__PURE__ */ F.jsx(
                "td",
                {
                  title: "Click to copy",
                  style: { width: "auto" },
                  children: typeof pe != "object" || !(d != null && d[de]) ? Je : /* @__PURE__ */ F.jsx("div", { className: "cell-container", children: /* @__PURE__ */ F.jsxs("div", { className: "cell-container--header", children: [
                    Je,
                    /* @__PURE__ */ F.jsx(
                      "button",
                      {
                        className: "btn btn-primary btn-icon btn-xs btn-square",
                        onClick: (et) => {
                          var on;
                          const Pt = (on = et.currentTarget.parentNode) == null ? void 0 : on.parentNode;
                          if (Pt === null)
                            return;
                          if (Pt.lastChild.className === "content") {
                            Pt.removeChild(
                              Pt.lastChild
                            );
                            return;
                          }
                          const yt = document.createElement("ul");
                          yt.className = "content", Object.entries(pe).forEach(
                            ([fe, Fe]) => {
                              const Ee = document.createElement("li");
                              Ee.innerText = `${k(
                                fe
                              )}: ${Fe}`, yt.appendChild(Ee);
                            }
                          ), Pt.appendChild(
                            yt
                          );
                        },
                        children: /* @__PURE__ */ F.jsx(mr, { icon: "eva:arrow-down-fill" })
                      }
                    )
                  ] }) })
                },
                Qe
              ));
            }),
            h && h(ee, xe)
          ] }, xe))
        ] })
      ] });
    } }),
    /* @__PURE__ */ F.jsx(x3, { config: Object.keys(o[0]), closeModal: T })
  ] });
}, b3 = {
  small: "4rem",
  medium: "6rem",
  large: "8rem"
}, P3 = HD(
  PD(
    {
      currentOpen: []
    },
    () => ({
      dispatch: (a) => {
        const o = document.querySelector("#toast-root"), s = document.createElement("div");
        s.className = "toast";
        const d = document.createElement("div");
        d.className = `toast-body shadow-md container rounded-box bg-${(a == null ? void 0 : a.variant) ?? "neutral"}`, s.append(d), s.style.setProperty(
          "--toast-size",
          `${b3[(a == null ? void 0 : a.size) ?? "small"]}`
        );
        const h = document.createElement("span");
        h.innerText = a.message;
        const g = document.createElement("button");
        g.className = "close-btn", g.innerText = "x", g.addEventListener("click", () => {
          s.classList.add("closed"), setTimeout(() => {
            s.remove();
          }, 200);
        });
        const m = document.createElement("div");
        m.className = "fill-bar", m.style.setProperty(
          "--fill-color",
          `var(--${(a == null ? void 0 : a.type) ?? "info"})`
        ), setTimeout(() => {
          s.classList.add("closed");
        }, 2.8 * 1e3), setTimeout(() => {
          s.remove();
        }, 3 * 1e3), d.append(h, g, m), o == null || o.appendChild(s);
      }
    })
  )
);
export {
  O3 as Chart,
  U3 as DateRangePicker,
  A3 as DetailedWorkDay,
  z3 as Header,
  m3 as Modal,
  j3 as MultiSelect,
  kE as Select,
  L3 as ShowPassword,
  F3 as Sidebar,
  H3 as Table,
  Fz as Textfield,
  ME as debounce,
  YD as useModal,
  S3 as useScroll,
  P3 as useToast
};
