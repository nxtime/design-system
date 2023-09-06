import Dr, { useRef as En, useState as bn, useCallback as eu, useEffect as wd, Fragment as t2, useDebugValue as n2 } from "react";
function r2(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Gx = { exports: {} }, Hh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j_;
function a2() {
  if (j_)
    return Hh;
  j_ = 1;
  var r = Dr, o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, w, _) {
    var k, D = {}, O = null, F = null;
    _ !== void 0 && (O = "" + _), w.key !== void 0 && (O = "" + w.key), w.ref !== void 0 && (F = w.ref);
    for (k in w)
      c.call(w, k) && !m.hasOwnProperty(k) && (D[k] = w[k]);
    if (E && E.defaultProps)
      for (k in w = E.defaultProps, w)
        D[k] === void 0 && (D[k] = w[k]);
    return { $$typeof: o, type: E, key: O, ref: F, props: D, _owner: d.current };
  }
  return Hh.Fragment = l, Hh.jsx = v, Hh.jsxs = v, Hh;
}
var Ih = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U_;
function i2() {
  return U_ || (U_ = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Dr, o = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), N = Symbol.iterator, W = "@@iterator";
    function ue(L) {
      if (L === null || typeof L != "object")
        return null;
      var ie = N && L[N] || L[W];
      return typeof ie == "function" ? ie : null;
    }
    var de = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(L) {
      {
        for (var ie = arguments.length, xe = new Array(ie > 1 ? ie - 1 : 0), $e = 1; $e < ie; $e++)
          xe[$e - 1] = arguments[$e];
        X("error", L, xe);
      }
    }
    function X(L, ie, xe) {
      {
        var $e = de.ReactDebugCurrentFrame, it = $e.getStackAddendum();
        it !== "" && (ie += "%s", xe = xe.concat([it]));
        var St = xe.map(function(ot) {
          return String(ot);
        });
        St.unshift("Warning: " + ie), Function.prototype.apply.call(console[L], console, St);
      }
    }
    var se = !1, re = !1, G = !1, J = !1, we = !1, pe;
    pe = Symbol.for("react.module.reference");
    function me(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === c || L === m || we || L === d || L === _ || L === k || J || L === F || se || re || G || typeof L == "object" && L !== null && (L.$$typeof === O || L.$$typeof === D || L.$$typeof === v || L.$$typeof === E || L.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === pe || L.getModuleId !== void 0));
    }
    function Fe(L, ie, xe) {
      var $e = L.displayName;
      if ($e)
        return $e;
      var it = ie.displayName || ie.name || "";
      return it !== "" ? xe + "(" + it + ")" : xe;
    }
    function Qe(L) {
      return L.displayName || "Context";
    }
    function Ne(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case c:
          return "Fragment";
        case l:
          return "Portal";
        case m:
          return "Profiler";
        case d:
          return "StrictMode";
        case _:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case E:
            var ie = L;
            return Qe(ie) + ".Consumer";
          case v:
            var xe = L;
            return Qe(xe._context) + ".Provider";
          case w:
            return Fe(L, L.render, "ForwardRef");
          case D:
            var $e = L.displayName || null;
            return $e !== null ? $e : Ne(L.type) || "Memo";
          case O: {
            var it = L, St = it._payload, ot = it._init;
            try {
              return Ne(ot(St));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, lt = 0, st, Vt, he, Pe, be, wt, Tt;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function gr() {
      {
        if (lt === 0) {
          st = console.log, Vt = console.info, he = console.warn, Pe = console.error, be = console.group, wt = console.groupCollapsed, Tt = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        lt++;
      }
    }
    function ai() {
      {
        if (lt--, lt === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, L, {
              value: st
            }),
            info: Ze({}, L, {
              value: Vt
            }),
            warn: Ze({}, L, {
              value: he
            }),
            error: Ze({}, L, {
              value: Pe
            }),
            group: Ze({}, L, {
              value: be
            }),
            groupCollapsed: Ze({}, L, {
              value: wt
            }),
            groupEnd: Ze({}, L, {
              value: Tt
            })
          });
        }
        lt < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Cn = de.ReactCurrentDispatcher, ha;
    function ar(L, ie, xe) {
      {
        if (ha === void 0)
          try {
            throw Error();
          } catch (it) {
            var $e = it.stack.trim().match(/\n( *(at )?)/);
            ha = $e && $e[1] || "";
          }
        return `
` + ha + L;
      }
    }
    var Mr = !1, ii;
    {
      var Lr = typeof WeakMap == "function" ? WeakMap : Map;
      ii = new Lr();
    }
    function va(L, ie) {
      if (!L || Mr)
        return "";
      {
        var xe = ii.get(L);
        if (xe !== void 0)
          return xe;
      }
      var $e;
      Mr = !0;
      var it = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var St;
      St = Cn.current, Cn.current = null, gr();
      try {
        if (ie) {
          var ot = function() {
            throw Error();
          };
          if (Object.defineProperty(ot.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ot, []);
            } catch (bt) {
              $e = bt;
            }
            Reflect.construct(L, [], ot);
          } else {
            try {
              ot.call();
            } catch (bt) {
              $e = bt;
            }
            L.call(ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            $e = bt;
          }
          L();
        }
      } catch (bt) {
        if (bt && $e && typeof bt.stack == "string") {
          for (var We = bt.stack.split(`
`), Un = $e.stack.split(`
`), Kt = We.length - 1, Zt = Un.length - 1; Kt >= 1 && Zt >= 0 && We[Kt] !== Un[Zt]; )
            Zt--;
          for (; Kt >= 1 && Zt >= 0; Kt--, Zt--)
            if (We[Kt] !== Un[Zt]) {
              if (Kt !== 1 || Zt !== 1)
                do
                  if (Kt--, Zt--, Zt < 0 || We[Kt] !== Un[Zt]) {
                    var yr = `
` + We[Kt].replace(" at new ", " at ");
                    return L.displayName && yr.includes("<anonymous>") && (yr = yr.replace("<anonymous>", L.displayName)), typeof L == "function" && ii.set(L, yr), yr;
                  }
                while (Kt >= 1 && Zt >= 0);
              break;
            }
        }
      } finally {
        Mr = !1, Cn.current = St, ai(), Error.prepareStackTrace = it;
      }
      var so = L ? L.displayName || L.name : "", Sc = so ? ar(so) : "";
      return typeof L == "function" && ii.set(L, Sc), Sc;
    }
    function Nn(L, ie, xe) {
      return va(L, !1);
    }
    function ir(L) {
      var ie = L.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Bn(L, ie, xe) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return va(L, ir(L));
      if (typeof L == "string")
        return ar(L);
      switch (L) {
        case _:
          return ar("Suspense");
        case k:
          return ar("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case w:
            return Nn(L.render);
          case D:
            return Bn(L.type, ie, xe);
          case O: {
            var $e = L, it = $e._payload, St = $e._init;
            try {
              return Bn(St(it), ie, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var or = Object.prototype.hasOwnProperty, lr = {}, ma = de.ReactDebugCurrentFrame;
    function Ha(L) {
      if (L) {
        var ie = L._owner, xe = Bn(L.type, L._source, ie ? ie.type : null);
        ma.setExtraStackFrame(xe);
      } else
        ma.setExtraStackFrame(null);
    }
    function Ti(L, ie, xe, $e, it) {
      {
        var St = Function.call.bind(or);
        for (var ot in L)
          if (St(L, ot)) {
            var We = void 0;
            try {
              if (typeof L[ot] != "function") {
                var Un = Error(($e || "React class") + ": " + xe + " type `" + ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              We = L[ot](ie, ot, $e, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Kt) {
              We = Kt;
            }
            We && !(We instanceof Error) && (Ha(it), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $e || "React class", xe, ot, typeof We), Ha(null)), We instanceof Error && !(We.message in lr) && (lr[We.message] = !0, Ha(it), q("Failed %s type: %s", xe, We.message), Ha(null));
          }
      }
    }
    var oi = Array.isArray;
    function Ia(L) {
      return oi(L);
    }
    function Zr(L) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, xe = ie && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return xe;
      }
    }
    function li(L) {
      try {
        return Xr(L), !1;
      } catch {
        return !0;
      }
    }
    function Xr(L) {
      return "" + L;
    }
    function Ya(L) {
      if (li(L))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zr(L)), Xr(L);
    }
    var mn = de.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, io, $a, Se;
    Se = {};
    function He(L) {
      if (or.call(L, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function ut(L) {
      if (or.call(L, "key")) {
        var ie = Object.getOwnPropertyDescriptor(L, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Lt(L, ie) {
      if (typeof L.ref == "string" && mn.current && ie && mn.current.stateNode !== ie) {
        var xe = Ne(mn.current.type);
        Se[xe] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(mn.current.type), L.ref), Se[xe] = !0);
      }
    }
    function en(L, ie) {
      {
        var xe = function() {
          io || (io = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        xe.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function jn(L, ie) {
      {
        var xe = function() {
          $a || ($a = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        xe.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var dn = function(L, ie, xe, $e, it, St, ot) {
      var We = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: L,
        key: ie,
        ref: xe,
        props: ot,
        // Record the component responsible for creating this element.
        _owner: St
      };
      return We._store = {}, Object.defineProperty(We._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(We, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.defineProperty(We, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: it
      }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
    };
    function Nr(L, ie, xe, $e, it) {
      {
        var St, ot = {}, We = null, Un = null;
        xe !== void 0 && (Ya(xe), We = "" + xe), ut(ie) && (Ya(ie.key), We = "" + ie.key), He(ie) && (Un = ie.ref, Lt(ie, it));
        for (St in ie)
          or.call(ie, St) && !Jr.hasOwnProperty(St) && (ot[St] = ie[St]);
        if (L && L.defaultProps) {
          var Kt = L.defaultProps;
          for (St in Kt)
            ot[St] === void 0 && (ot[St] = Kt[St]);
        }
        if (We || Un) {
          var Zt = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          We && en(ot, Zt), Un && jn(ot, Zt);
        }
        return dn(L, We, Un, it, $e, mn.current, ot);
      }
    }
    var It = de.ReactCurrentOwner, ea = de.ReactDebugCurrentFrame;
    function zt(L) {
      if (L) {
        var ie = L._owner, xe = Bn(L.type, L._source, ie ? ie.type : null);
        ea.setExtraStackFrame(xe);
      } else
        ea.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function ql(L) {
      return typeof L == "object" && L !== null && L.$$typeof === o;
    }
    function qo() {
      {
        if (It.current) {
          var L = Ne(It.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Kl(L) {
      {
        if (L !== void 0) {
          var ie = L.fileName.replace(/^.*[\\\/]/, ""), xe = L.lineNumber;
          return `

Check your code at ` + ie + ":" + xe + ".";
        }
        return "";
      }
    }
    var nu = {};
    function yc(L) {
      {
        var ie = qo();
        if (!ie) {
          var xe = typeof L == "string" ? L : L.displayName || L.name;
          xe && (ie = `

Check the top-level render call using <` + xe + ">.");
        }
        return ie;
      }
    }
    function Ko(L, ie) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var xe = yc(ie);
        if (nu[xe])
          return;
        nu[xe] = !0;
        var $e = "";
        L && L._owner && L._owner !== It.current && ($e = " It was passed a child from " + Ne(L._owner.type) + "."), zt(L), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, $e), zt(null);
      }
    }
    function Zl(L, ie) {
      {
        if (typeof L != "object")
          return;
        if (Ia(L))
          for (var xe = 0; xe < L.length; xe++) {
            var $e = L[xe];
            ql($e) && Ko($e, ie);
          }
        else if (ql(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var it = ue(L);
          if (typeof it == "function" && it !== L.entries)
            for (var St = it.call(L), ot; !(ot = St.next()).done; )
              ql(ot.value) && Ko(ot.value, ie);
        }
      }
    }
    function Zo(L) {
      {
        var ie = L.type;
        if (ie == null || typeof ie == "string")
          return;
        var xe;
        if (typeof ie == "function")
          xe = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === D))
          xe = ie.propTypes;
        else
          return;
        if (xe) {
          var $e = Ne(ie);
          Ti(xe, L.props, "prop", $e, L);
        } else if (ie.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var it = Ne(ie);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", it || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xl(L) {
      {
        for (var ie = Object.keys(L.props), xe = 0; xe < ie.length; xe++) {
          var $e = ie[xe];
          if ($e !== "children" && $e !== "key") {
            zt(L), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $e), zt(null);
            break;
          }
        }
        L.ref !== null && (zt(L), q("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    function si(L, ie, xe, $e, it, St) {
      {
        var ot = me(L);
        if (!ot) {
          var We = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (We += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = Kl(it);
          Un ? We += Un : We += qo();
          var Kt;
          L === null ? Kt = "null" : Ia(L) ? Kt = "array" : L !== void 0 && L.$$typeof === o ? (Kt = "<" + (Ne(L.type) || "Unknown") + " />", We = " Did you accidentally export a JSX literal instead of a component?") : Kt = typeof L, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Kt, We);
        }
        var Zt = Nr(L, ie, xe, it, St);
        if (Zt == null)
          return Zt;
        if (ot) {
          var yr = ie.children;
          if (yr !== void 0)
            if ($e)
              if (Ia(yr)) {
                for (var so = 0; so < yr.length; so++)
                  Zl(yr[so], L);
                Object.freeze && Object.freeze(yr);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zl(yr, L);
        }
        return L === c ? Xl(Zt) : Zo(Zt), Zt;
      }
    }
    function oo(L, ie, xe) {
      return si(L, ie, xe, !0);
    }
    function ta(L, ie, xe) {
      return si(L, ie, xe, !1);
    }
    var Va = ta, lo = oo;
    Ih.Fragment = c, Ih.jsx = Va, Ih.jsxs = lo;
  }()), Ih;
}
process.env.NODE_ENV === "production" ? Gx.exports = a2() : Gx.exports = i2();
var P = Gx.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var AT;
function ve() {
  return AT.apply(null, arguments);
}
function o2(r) {
  AT = r;
}
function no(r) {
  return r instanceof Array || Object.prototype.toString.call(r) === "[object Array]";
}
function hc(r) {
  return r != null && Object.prototype.toString.call(r) === "[object Object]";
}
function Ot(r, o) {
  return Object.prototype.hasOwnProperty.call(r, o);
}
function gw(r) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(r).length === 0;
  var o;
  for (o in r)
    if (Ot(r, o))
      return !1;
  return !0;
}
function Pa(r) {
  return r === void 0;
}
function Wl(r) {
  return typeof r == "number" || Object.prototype.toString.call(r) === "[object Number]";
}
function lv(r) {
  return r instanceof Date || Object.prototype.toString.call(r) === "[object Date]";
}
function zT(r, o) {
  var l = [], c, d = r.length;
  for (c = 0; c < d; ++c)
    l.push(o(r[c], c));
  return l;
}
function Zs(r, o) {
  for (var l in o)
    Ot(o, l) && (r[l] = o[l]);
  return Ot(o, "toString") && (r.toString = o.toString), Ot(o, "valueOf") && (r.valueOf = o.valueOf), r;
}
function Go(r, o, l, c) {
  return lk(r, o, l, c, !0).utc();
}
function l2() {
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
function ft(r) {
  return r._pf == null && (r._pf = l2()), r._pf;
}
var Qx;
Array.prototype.some ? Qx = Array.prototype.some : Qx = function(r) {
  var o = Object(this), l = o.length >>> 0, c;
  for (c = 0; c < l; c++)
    if (c in o && r.call(this, o[c], c, o))
      return !0;
  return !1;
};
function yw(r) {
  if (r._isValid == null) {
    var o = ft(r), l = Qx.call(o.parsedDateParts, function(d) {
      return d != null;
    }), c = !isNaN(r._d.getTime()) && o.overflow < 0 && !o.empty && !o.invalidEra && !o.invalidMonth && !o.invalidWeekday && !o.weekdayMismatch && !o.nullInput && !o.invalidFormat && !o.userInvalidated && (!o.meridiem || o.meridiem && l);
    if (r._strict && (c = c && o.charsLeftOver === 0 && o.unusedTokens.length === 0 && o.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(r))
      r._isValid = c;
    else
      return c;
  }
  return r._isValid;
}
function zy(r) {
  var o = Go(NaN);
  return r != null ? Zs(ft(o), r) : ft(o).userInvalidated = !0, o;
}
var A_ = ve.momentProperties = [], Mx = !1;
function Sw(r, o) {
  var l, c, d, m = A_.length;
  if (Pa(o._isAMomentObject) || (r._isAMomentObject = o._isAMomentObject), Pa(o._i) || (r._i = o._i), Pa(o._f) || (r._f = o._f), Pa(o._l) || (r._l = o._l), Pa(o._strict) || (r._strict = o._strict), Pa(o._tzm) || (r._tzm = o._tzm), Pa(o._isUTC) || (r._isUTC = o._isUTC), Pa(o._offset) || (r._offset = o._offset), Pa(o._pf) || (r._pf = ft(o)), Pa(o._locale) || (r._locale = o._locale), m > 0)
    for (l = 0; l < m; l++)
      c = A_[l], d = o[c], Pa(d) || (r[c] = d);
  return r;
}
function sv(r) {
  Sw(this, r), this._d = new Date(r._d != null ? r._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Mx === !1 && (Mx = !0, ve.updateOffset(this), Mx = !1);
}
function ro(r) {
  return r instanceof sv || r != null && r._isAMomentObject != null;
}
function FT(r) {
  ve.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + r);
}
function Ci(r, o) {
  var l = !0;
  return Zs(function() {
    if (ve.deprecationHandler != null && ve.deprecationHandler(null, r), l) {
      var c = [], d, m, v, E = arguments.length;
      for (m = 0; m < E; m++) {
        if (d = "", typeof arguments[m] == "object") {
          d += `
[` + m + "] ";
          for (v in arguments[0])
            Ot(arguments[0], v) && (d += v + ": " + arguments[0][v] + ", ");
          d = d.slice(0, -2);
        } else
          d = arguments[m];
        c.push(d);
      }
      FT(
        r + `
Arguments: ` + Array.prototype.slice.call(c).join("") + `
` + new Error().stack
      ), l = !1;
    }
    return o.apply(this, arguments);
  }, o);
}
var z_ = {};
function PT(r, o) {
  ve.deprecationHandler != null && ve.deprecationHandler(r, o), z_[r] || (FT(o), z_[r] = !0);
}
ve.suppressDeprecationWarnings = !1;
ve.deprecationHandler = null;
function Qo(r) {
  return typeof Function < "u" && r instanceof Function || Object.prototype.toString.call(r) === "[object Function]";
}
function s2(r) {
  var o, l;
  for (l in r)
    Ot(r, l) && (o = r[l], Qo(o) ? this[l] = o : this["_" + l] = o);
  this._config = r, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function qx(r, o) {
  var l = Zs({}, r), c;
  for (c in o)
    Ot(o, c) && (hc(r[c]) && hc(o[c]) ? (l[c] = {}, Zs(l[c], r[c]), Zs(l[c], o[c])) : o[c] != null ? l[c] = o[c] : delete l[c]);
  for (c in r)
    Ot(r, c) && !Ot(o, c) && hc(r[c]) && (l[c] = Zs({}, l[c]));
  return l;
}
function xw(r) {
  r != null && this.set(r);
}
var Kx;
Object.keys ? Kx = Object.keys : Kx = function(r) {
  var o, l = [];
  for (o in r)
    Ot(r, o) && l.push(o);
  return l;
};
var u2 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function c2(r, o, l) {
  var c = this._calendar[r] || this._calendar.sameElse;
  return Qo(c) ? c.call(o, l) : c;
}
function Wo(r, o, l) {
  var c = "" + Math.abs(r), d = o - c.length, m = r >= 0;
  return (m ? l ? "+" : "" : "-") + Math.pow(10, Math.max(0, d)).toString().substr(1) + c;
}
var ww = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, cy = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Lx = {}, yd = {};
function Be(r, o, l, c) {
  var d = c;
  typeof c == "string" && (d = function() {
    return this[c]();
  }), r && (yd[r] = d), o && (yd[o[0]] = function() {
    return Wo(d.apply(this, arguments), o[1], o[2]);
  }), l && (yd[l] = function() {
    return this.localeData().ordinal(
      d.apply(this, arguments),
      r
    );
  });
}
function f2(r) {
  return r.match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
}
function d2(r) {
  var o = r.match(ww), l, c;
  for (l = 0, c = o.length; l < c; l++)
    yd[o[l]] ? o[l] = yd[o[l]] : o[l] = f2(o[l]);
  return function(d) {
    var m = "", v;
    for (v = 0; v < c; v++)
      m += Qo(o[v]) ? o[v].call(d, r) : o[v];
    return m;
  };
}
function gy(r, o) {
  return r.isValid() ? (o = HT(o, r.localeData()), Lx[o] = Lx[o] || d2(o), Lx[o](r)) : r.localeData().invalidDate();
}
function HT(r, o) {
  var l = 5;
  function c(d) {
    return o.longDateFormat(d) || d;
  }
  for (cy.lastIndex = 0; l >= 0 && cy.test(r); )
    r = r.replace(
      cy,
      c
    ), cy.lastIndex = 0, l -= 1;
  return r;
}
var p2 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function h2(r) {
  var o = this._longDateFormat[r], l = this._longDateFormat[r.toUpperCase()];
  return o || !l ? o : (this._longDateFormat[r] = l.match(ww).map(function(c) {
    return c === "MMMM" || c === "MM" || c === "DD" || c === "dddd" ? c.slice(1) : c;
  }).join(""), this._longDateFormat[r]);
}
var v2 = "Invalid date";
function m2() {
  return this._invalidDate;
}
var g2 = "%d", y2 = /\d{1,2}/;
function S2(r) {
  return this._ordinal.replace("%d", r);
}
var x2 = {
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
function w2(r, o, l, c) {
  var d = this._relativeTime[l];
  return Qo(d) ? d(r, o, l, c) : d.replace(/%d/i, r);
}
function b2(r, o) {
  var l = this._relativeTime[r > 0 ? "future" : "past"];
  return Qo(l) ? l(o) : l.replace(/%s/i, o);
}
var Gh = {};
function qr(r, o) {
  var l = r.toLowerCase();
  Gh[l] = Gh[l + "s"] = Gh[o] = r;
}
function _i(r) {
  return typeof r == "string" ? Gh[r] || Gh[r.toLowerCase()] : void 0;
}
function bw(r) {
  var o = {}, l, c;
  for (c in r)
    Ot(r, c) && (l = _i(c), l && (o[l] = r[c]));
  return o;
}
var IT = {};
function Kr(r, o) {
  IT[r] = o;
}
function E2(r) {
  var o = [], l;
  for (l in r)
    Ot(r, l) && o.push({ unit: l, priority: IT[l] });
  return o.sort(function(c, d) {
    return c.priority - d.priority;
  }), o;
}
function Fy(r) {
  return r % 4 === 0 && r % 100 !== 0 || r % 400 === 0;
}
function Ei(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}
function vt(r) {
  var o = +r, l = 0;
  return o !== 0 && isFinite(o) && (l = Ei(o)), l;
}
function bd(r, o) {
  return function(l) {
    return l != null ? (YT(this, r, l), ve.updateOffset(this, o), this) : Cy(this, r);
  };
}
function Cy(r, o) {
  return r.isValid() ? r._d["get" + (r._isUTC ? "UTC" : "") + o]() : NaN;
}
function YT(r, o, l) {
  r.isValid() && !isNaN(l) && (o === "FullYear" && Fy(r.year()) && r.month() === 1 && r.date() === 29 ? (l = vt(l), r._d["set" + (r._isUTC ? "UTC" : "") + o](
    l,
    r.month(),
    Vy(l, r.month())
  )) : r._d["set" + (r._isUTC ? "UTC" : "") + o](l));
}
function C2(r) {
  return r = _i(r), Qo(this[r]) ? this[r]() : this;
}
function _2(r, o) {
  if (typeof r == "object") {
    r = bw(r);
    var l = E2(r), c, d = l.length;
    for (c = 0; c < d; c++)
      this[l[c].unit](r[l[c].unit]);
  } else if (r = _i(r), Qo(this[r]))
    return this[r](o);
  return this;
}
var $T = /\d/, ri = /\d\d/, VT = /\d{3}/, Ew = /\d{4}/, Py = /[+-]?\d{6}/, ln = /\d\d?/, BT = /\d\d\d\d?/, WT = /\d\d\d\d\d\d?/, Hy = /\d{1,3}/, Cw = /\d{1,4}/, Iy = /[+-]?\d{1,6}/, Ed = /\d+/, Yy = /[+-]?\d+/, T2 = /Z|[+-]\d\d:?\d\d/gi, $y = /Z|[+-]\d\d(?::?\d\d)?/gi, k2 = /[+-]?\d+(\.\d{1,3})?/, uv = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _y;
_y = {};
function De(r, o, l) {
  _y[r] = Qo(o) ? o : function(c, d) {
    return c && l ? l : o;
  };
}
function R2(r, o) {
  return Ot(_y, r) ? _y[r](o._strict, o._locale) : new RegExp(D2(r));
}
function D2(r) {
  return ni(
    r.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(o, l, c, d, m) {
        return l || c || d || m;
      }
    )
  );
}
function ni(r) {
  return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Zx = {};
function $t(r, o) {
  var l, c = o, d;
  for (typeof r == "string" && (r = [r]), Wl(o) && (c = function(m, v) {
    v[o] = vt(m);
  }), d = r.length, l = 0; l < d; l++)
    Zx[r[l]] = c;
}
function cv(r, o) {
  $t(r, function(l, c, d, m) {
    d._w = d._w || {}, o(l, d._w, d, m);
  });
}
function O2(r, o, l) {
  o != null && Ot(Zx, r) && Zx[r](o, l._a, l, r);
}
var Qr = 0, $l = 1, Vo = 2, rr = 3, to = 4, Vl = 5, dc = 6, M2 = 7, L2 = 8;
function N2(r, o) {
  return (r % o + o) % o;
}
var Ln;
Array.prototype.indexOf ? Ln = Array.prototype.indexOf : Ln = function(r) {
  var o;
  for (o = 0; o < this.length; ++o)
    if (this[o] === r)
      return o;
  return -1;
};
function Vy(r, o) {
  if (isNaN(r) || isNaN(o))
    return NaN;
  var l = N2(o, 12);
  return r += (o - l) / 12, l === 1 ? Fy(r) ? 29 : 28 : 31 - l % 7 % 2;
}
Be("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Be("MMM", 0, 0, function(r) {
  return this.localeData().monthsShort(this, r);
});
Be("MMMM", 0, 0, function(r) {
  return this.localeData().months(this, r);
});
qr("month", "M");
Kr("month", 8);
De("M", ln);
De("MM", ln, ri);
De("MMM", function(r, o) {
  return o.monthsShortRegex(r);
});
De("MMMM", function(r, o) {
  return o.monthsRegex(r);
});
$t(["M", "MM"], function(r, o) {
  o[$l] = vt(r) - 1;
});
$t(["MMM", "MMMM"], function(r, o, l, c) {
  var d = l._locale.monthsParse(r, c, l._strict);
  d != null ? o[$l] = d : ft(l).invalidMonth = r;
});
var j2 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), GT = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), QT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, U2 = uv, A2 = uv;
function z2(r, o) {
  return r ? no(this._months) ? this._months[r.month()] : this._months[(this._months.isFormat || QT).test(o) ? "format" : "standalone"][r.month()] : no(this._months) ? this._months : this._months.standalone;
}
function F2(r, o) {
  return r ? no(this._monthsShort) ? this._monthsShort[r.month()] : this._monthsShort[QT.test(o) ? "format" : "standalone"][r.month()] : no(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function P2(r, o, l) {
  var c, d, m, v = r.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], c = 0; c < 12; ++c)
      m = Go([2e3, c]), this._shortMonthsParse[c] = this.monthsShort(
        m,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[c] = this.months(m, "").toLocaleLowerCase();
  return l ? o === "MMM" ? (d = Ln.call(this._shortMonthsParse, v), d !== -1 ? d : null) : (d = Ln.call(this._longMonthsParse, v), d !== -1 ? d : null) : o === "MMM" ? (d = Ln.call(this._shortMonthsParse, v), d !== -1 ? d : (d = Ln.call(this._longMonthsParse, v), d !== -1 ? d : null)) : (d = Ln.call(this._longMonthsParse, v), d !== -1 ? d : (d = Ln.call(this._shortMonthsParse, v), d !== -1 ? d : null));
}
function H2(r, o, l) {
  var c, d, m;
  if (this._monthsParseExact)
    return P2.call(this, r, o, l);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), c = 0; c < 12; c++) {
    if (d = Go([2e3, c]), l && !this._longMonthsParse[c] && (this._longMonthsParse[c] = new RegExp(
      "^" + this.months(d, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[c] = new RegExp(
      "^" + this.monthsShort(d, "").replace(".", "") + "$",
      "i"
    )), !l && !this._monthsParse[c] && (m = "^" + this.months(d, "") + "|^" + this.monthsShort(d, ""), this._monthsParse[c] = new RegExp(m.replace(".", ""), "i")), l && o === "MMMM" && this._longMonthsParse[c].test(r))
      return c;
    if (l && o === "MMM" && this._shortMonthsParse[c].test(r))
      return c;
    if (!l && this._monthsParse[c].test(r))
      return c;
  }
}
function qT(r, o) {
  var l;
  if (!r.isValid())
    return r;
  if (typeof o == "string") {
    if (/^\d+$/.test(o))
      o = vt(o);
    else if (o = r.localeData().monthsParse(o), !Wl(o))
      return r;
  }
  return l = Math.min(r.date(), Vy(r.year(), o)), r._d["set" + (r._isUTC ? "UTC" : "") + "Month"](o, l), r;
}
function KT(r) {
  return r != null ? (qT(this, r), ve.updateOffset(this, !0), this) : Cy(this, "Month");
}
function I2() {
  return Vy(this.year(), this.month());
}
function Y2(r) {
  return this._monthsParseExact ? (Ot(this, "_monthsRegex") || ZT.call(this), r ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ot(this, "_monthsShortRegex") || (this._monthsShortRegex = U2), this._monthsShortStrictRegex && r ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function $2(r) {
  return this._monthsParseExact ? (Ot(this, "_monthsRegex") || ZT.call(this), r ? this._monthsStrictRegex : this._monthsRegex) : (Ot(this, "_monthsRegex") || (this._monthsRegex = A2), this._monthsStrictRegex && r ? this._monthsStrictRegex : this._monthsRegex);
}
function ZT() {
  function r(v, E) {
    return E.length - v.length;
  }
  var o = [], l = [], c = [], d, m;
  for (d = 0; d < 12; d++)
    m = Go([2e3, d]), o.push(this.monthsShort(m, "")), l.push(this.months(m, "")), c.push(this.months(m, "")), c.push(this.monthsShort(m, ""));
  for (o.sort(r), l.sort(r), c.sort(r), d = 0; d < 12; d++)
    o[d] = ni(o[d]), l[d] = ni(l[d]);
  for (d = 0; d < 24; d++)
    c[d] = ni(c[d]);
  this._monthsRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + l.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + o.join("|") + ")",
    "i"
  );
}
Be("Y", 0, 0, function() {
  var r = this.year();
  return r <= 9999 ? Wo(r, 4) : "+" + r;
});
Be(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Be(0, ["YYYY", 4], 0, "year");
Be(0, ["YYYYY", 5], 0, "year");
Be(0, ["YYYYYY", 6, !0], 0, "year");
qr("year", "y");
Kr("year", 1);
De("Y", Yy);
De("YY", ln, ri);
De("YYYY", Cw, Ew);
De("YYYYY", Iy, Py);
De("YYYYYY", Iy, Py);
$t(["YYYYY", "YYYYYY"], Qr);
$t("YYYY", function(r, o) {
  o[Qr] = r.length === 2 ? ve.parseTwoDigitYear(r) : vt(r);
});
$t("YY", function(r, o) {
  o[Qr] = ve.parseTwoDigitYear(r);
});
$t("Y", function(r, o) {
  o[Qr] = parseInt(r, 10);
});
function Qh(r) {
  return Fy(r) ? 366 : 365;
}
ve.parseTwoDigitYear = function(r) {
  return vt(r) + (vt(r) > 68 ? 1900 : 2e3);
};
var XT = bd("FullYear", !0);
function V2() {
  return Fy(this.year());
}
function B2(r, o, l, c, d, m, v) {
  var E;
  return r < 100 && r >= 0 ? (E = new Date(r + 400, o, l, c, d, m, v), isFinite(E.getFullYear()) && E.setFullYear(r)) : E = new Date(r, o, l, c, d, m, v), E;
}
function Jh(r) {
  var o, l;
  return r < 100 && r >= 0 ? (l = Array.prototype.slice.call(arguments), l[0] = r + 400, o = new Date(Date.UTC.apply(null, l)), isFinite(o.getUTCFullYear()) && o.setUTCFullYear(r)) : o = new Date(Date.UTC.apply(null, arguments)), o;
}
function Ty(r, o, l) {
  var c = 7 + o - l, d = (7 + Jh(r, 0, c).getUTCDay() - o) % 7;
  return -d + c - 1;
}
function JT(r, o, l, c, d) {
  var m = (7 + l - c) % 7, v = Ty(r, c, d), E = 1 + 7 * (o - 1) + m + v, w, _;
  return E <= 0 ? (w = r - 1, _ = Qh(w) + E) : E > Qh(r) ? (w = r + 1, _ = E - Qh(r)) : (w = r, _ = E), {
    year: w,
    dayOfYear: _
  };
}
function ev(r, o, l) {
  var c = Ty(r.year(), o, l), d = Math.floor((r.dayOfYear() - c - 1) / 7) + 1, m, v;
  return d < 1 ? (v = r.year() - 1, m = d + Bl(v, o, l)) : d > Bl(r.year(), o, l) ? (m = d - Bl(r.year(), o, l), v = r.year() + 1) : (v = r.year(), m = d), {
    week: m,
    year: v
  };
}
function Bl(r, o, l) {
  var c = Ty(r, o, l), d = Ty(r + 1, o, l);
  return (Qh(r) - c + d) / 7;
}
Be("w", ["ww", 2], "wo", "week");
Be("W", ["WW", 2], "Wo", "isoWeek");
qr("week", "w");
qr("isoWeek", "W");
Kr("week", 5);
Kr("isoWeek", 5);
De("w", ln);
De("ww", ln, ri);
De("W", ln);
De("WW", ln, ri);
cv(
  ["w", "ww", "W", "WW"],
  function(r, o, l, c) {
    o[c.substr(0, 1)] = vt(r);
  }
);
function W2(r) {
  return ev(r, this._week.dow, this._week.doy).week;
}
var G2 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Q2() {
  return this._week.dow;
}
function q2() {
  return this._week.doy;
}
function K2(r) {
  var o = this.localeData().week(this);
  return r == null ? o : this.add((r - o) * 7, "d");
}
function Z2(r) {
  var o = ev(this, 1, 4).week;
  return r == null ? o : this.add((r - o) * 7, "d");
}
Be("d", 0, "do", "day");
Be("dd", 0, 0, function(r) {
  return this.localeData().weekdaysMin(this, r);
});
Be("ddd", 0, 0, function(r) {
  return this.localeData().weekdaysShort(this, r);
});
Be("dddd", 0, 0, function(r) {
  return this.localeData().weekdays(this, r);
});
Be("e", 0, 0, "weekday");
Be("E", 0, 0, "isoWeekday");
qr("day", "d");
qr("weekday", "e");
qr("isoWeekday", "E");
Kr("day", 11);
Kr("weekday", 11);
Kr("isoWeekday", 11);
De("d", ln);
De("e", ln);
De("E", ln);
De("dd", function(r, o) {
  return o.weekdaysMinRegex(r);
});
De("ddd", function(r, o) {
  return o.weekdaysShortRegex(r);
});
De("dddd", function(r, o) {
  return o.weekdaysRegex(r);
});
cv(["dd", "ddd", "dddd"], function(r, o, l, c) {
  var d = l._locale.weekdaysParse(r, c, l._strict);
  d != null ? o.d = d : ft(l).invalidWeekday = r;
});
cv(["d", "e", "E"], function(r, o, l, c) {
  o[c] = vt(r);
});
function X2(r, o) {
  return typeof r != "string" ? r : isNaN(r) ? (r = o.weekdaysParse(r), typeof r == "number" ? r : null) : parseInt(r, 10);
}
function J2(r, o) {
  return typeof r == "string" ? o.weekdaysParse(r) % 7 || 7 : isNaN(r) ? null : r;
}
function _w(r, o) {
  return r.slice(o, 7).concat(r.slice(0, o));
}
var ej = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ek = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), tj = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), nj = uv, rj = uv, aj = uv;
function ij(r, o) {
  var l = no(this._weekdays) ? this._weekdays : this._weekdays[r && r !== !0 && this._weekdays.isFormat.test(o) ? "format" : "standalone"];
  return r === !0 ? _w(l, this._week.dow) : r ? l[r.day()] : l;
}
function oj(r) {
  return r === !0 ? _w(this._weekdaysShort, this._week.dow) : r ? this._weekdaysShort[r.day()] : this._weekdaysShort;
}
function lj(r) {
  return r === !0 ? _w(this._weekdaysMin, this._week.dow) : r ? this._weekdaysMin[r.day()] : this._weekdaysMin;
}
function sj(r, o, l) {
  var c, d, m, v = r.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], c = 0; c < 7; ++c)
      m = Go([2e3, 1]).day(c), this._minWeekdaysParse[c] = this.weekdaysMin(
        m,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[c] = this.weekdaysShort(
        m,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[c] = this.weekdays(m, "").toLocaleLowerCase();
  return l ? o === "dddd" ? (d = Ln.call(this._weekdaysParse, v), d !== -1 ? d : null) : o === "ddd" ? (d = Ln.call(this._shortWeekdaysParse, v), d !== -1 ? d : null) : (d = Ln.call(this._minWeekdaysParse, v), d !== -1 ? d : null) : o === "dddd" ? (d = Ln.call(this._weekdaysParse, v), d !== -1 || (d = Ln.call(this._shortWeekdaysParse, v), d !== -1) ? d : (d = Ln.call(this._minWeekdaysParse, v), d !== -1 ? d : null)) : o === "ddd" ? (d = Ln.call(this._shortWeekdaysParse, v), d !== -1 || (d = Ln.call(this._weekdaysParse, v), d !== -1) ? d : (d = Ln.call(this._minWeekdaysParse, v), d !== -1 ? d : null)) : (d = Ln.call(this._minWeekdaysParse, v), d !== -1 || (d = Ln.call(this._weekdaysParse, v), d !== -1) ? d : (d = Ln.call(this._shortWeekdaysParse, v), d !== -1 ? d : null));
}
function uj(r, o, l) {
  var c, d, m;
  if (this._weekdaysParseExact)
    return sj.call(this, r, o, l);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), c = 0; c < 7; c++) {
    if (d = Go([2e3, 1]).day(c), l && !this._fullWeekdaysParse[c] && (this._fullWeekdaysParse[c] = new RegExp(
      "^" + this.weekdays(d, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[c] = new RegExp(
      "^" + this.weekdaysShort(d, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[c] = new RegExp(
      "^" + this.weekdaysMin(d, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[c] || (m = "^" + this.weekdays(d, "") + "|^" + this.weekdaysShort(d, "") + "|^" + this.weekdaysMin(d, ""), this._weekdaysParse[c] = new RegExp(m.replace(".", ""), "i")), l && o === "dddd" && this._fullWeekdaysParse[c].test(r))
      return c;
    if (l && o === "ddd" && this._shortWeekdaysParse[c].test(r))
      return c;
    if (l && o === "dd" && this._minWeekdaysParse[c].test(r))
      return c;
    if (!l && this._weekdaysParse[c].test(r))
      return c;
  }
}
function cj(r) {
  if (!this.isValid())
    return r != null ? this : NaN;
  var o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return r != null ? (r = X2(r, this.localeData()), this.add(r - o, "d")) : o;
}
function fj(r) {
  if (!this.isValid())
    return r != null ? this : NaN;
  var o = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return r == null ? o : this.add(r - o, "d");
}
function dj(r) {
  if (!this.isValid())
    return r != null ? this : NaN;
  if (r != null) {
    var o = J2(r, this.localeData());
    return this.day(this.day() % 7 ? o : o - 7);
  } else
    return this.day() || 7;
}
function pj(r) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || Tw.call(this), r ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ot(this, "_weekdaysRegex") || (this._weekdaysRegex = nj), this._weekdaysStrictRegex && r ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function hj(r) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || Tw.call(this), r ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ot(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = rj), this._weekdaysShortStrictRegex && r ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function vj(r) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || Tw.call(this), r ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ot(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = aj), this._weekdaysMinStrictRegex && r ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Tw() {
  function r(k, D) {
    return D.length - k.length;
  }
  var o = [], l = [], c = [], d = [], m, v, E, w, _;
  for (m = 0; m < 7; m++)
    v = Go([2e3, 1]).day(m), E = ni(this.weekdaysMin(v, "")), w = ni(this.weekdaysShort(v, "")), _ = ni(this.weekdays(v, "")), o.push(E), l.push(w), c.push(_), d.push(E), d.push(w), d.push(_);
  o.sort(r), l.sort(r), c.sort(r), d.sort(r), this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + c.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + l.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + o.join("|") + ")",
    "i"
  );
}
function kw() {
  return this.hours() % 12 || 12;
}
function mj() {
  return this.hours() || 24;
}
Be("H", ["HH", 2], 0, "hour");
Be("h", ["hh", 2], 0, kw);
Be("k", ["kk", 2], 0, mj);
Be("hmm", 0, 0, function() {
  return "" + kw.apply(this) + Wo(this.minutes(), 2);
});
Be("hmmss", 0, 0, function() {
  return "" + kw.apply(this) + Wo(this.minutes(), 2) + Wo(this.seconds(), 2);
});
Be("Hmm", 0, 0, function() {
  return "" + this.hours() + Wo(this.minutes(), 2);
});
Be("Hmmss", 0, 0, function() {
  return "" + this.hours() + Wo(this.minutes(), 2) + Wo(this.seconds(), 2);
});
function tk(r, o) {
  Be(r, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      o
    );
  });
}
tk("a", !0);
tk("A", !1);
qr("hour", "h");
Kr("hour", 13);
function nk(r, o) {
  return o._meridiemParse;
}
De("a", nk);
De("A", nk);
De("H", ln);
De("h", ln);
De("k", ln);
De("HH", ln, ri);
De("hh", ln, ri);
De("kk", ln, ri);
De("hmm", BT);
De("hmmss", WT);
De("Hmm", BT);
De("Hmmss", WT);
$t(["H", "HH"], rr);
$t(["k", "kk"], function(r, o, l) {
  var c = vt(r);
  o[rr] = c === 24 ? 0 : c;
});
$t(["a", "A"], function(r, o, l) {
  l._isPm = l._locale.isPM(r), l._meridiem = r;
});
$t(["h", "hh"], function(r, o, l) {
  o[rr] = vt(r), ft(l).bigHour = !0;
});
$t("hmm", function(r, o, l) {
  var c = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[to] = vt(r.substr(c)), ft(l).bigHour = !0;
});
$t("hmmss", function(r, o, l) {
  var c = r.length - 4, d = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[to] = vt(r.substr(c, 2)), o[Vl] = vt(r.substr(d)), ft(l).bigHour = !0;
});
$t("Hmm", function(r, o, l) {
  var c = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[to] = vt(r.substr(c));
});
$t("Hmmss", function(r, o, l) {
  var c = r.length - 4, d = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[to] = vt(r.substr(c, 2)), o[Vl] = vt(r.substr(d));
});
function gj(r) {
  return (r + "").toLowerCase().charAt(0) === "p";
}
var yj = /[ap]\.?m?\.?/i, Sj = bd("Hours", !0);
function xj(r, o, l) {
  return r > 11 ? l ? "pm" : "PM" : l ? "am" : "AM";
}
var rk = {
  calendar: u2,
  longDateFormat: p2,
  invalidDate: v2,
  ordinal: g2,
  dayOfMonthOrdinalParse: y2,
  relativeTime: x2,
  months: j2,
  monthsShort: GT,
  week: G2,
  weekdays: ej,
  weekdaysMin: tj,
  weekdaysShort: ek,
  meridiemParse: yj
}, fn = {}, Yh = {}, tv;
function wj(r, o) {
  var l, c = Math.min(r.length, o.length);
  for (l = 0; l < c; l += 1)
    if (r[l] !== o[l])
      return l;
  return c;
}
function F_(r) {
  return r && r.toLowerCase().replace("_", "-");
}
function bj(r) {
  for (var o = 0, l, c, d, m; o < r.length; ) {
    for (m = F_(r[o]).split("-"), l = m.length, c = F_(r[o + 1]), c = c ? c.split("-") : null; l > 0; ) {
      if (d = By(m.slice(0, l).join("-")), d)
        return d;
      if (c && c.length >= l && wj(m, c) >= l - 1)
        break;
      l--;
    }
    o++;
  }
  return tv;
}
function Ej(r) {
  return r.match("^[^/\\\\]*$") != null;
}
function By(r) {
  var o = null, l;
  if (fn[r] === void 0 && typeof module < "u" && module && module.exports && Ej(r))
    try {
      o = tv._abbr, l = require, l("./locale/" + r), Js(o);
    } catch {
      fn[r] = null;
    }
  return fn[r];
}
function Js(r, o) {
  var l;
  return r && (Pa(o) ? l = Gl(r) : l = Rw(r, o), l ? tv = l : typeof console < "u" && console.warn && console.warn(
    "Locale " + r + " not found. Did you forget to load it?"
  )), tv._abbr;
}
function Rw(r, o) {
  if (o !== null) {
    var l, c = rk;
    if (o.abbr = r, fn[r] != null)
      PT(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), c = fn[r]._config;
    else if (o.parentLocale != null)
      if (fn[o.parentLocale] != null)
        c = fn[o.parentLocale]._config;
      else if (l = By(o.parentLocale), l != null)
        c = l._config;
      else
        return Yh[o.parentLocale] || (Yh[o.parentLocale] = []), Yh[o.parentLocale].push({
          name: r,
          config: o
        }), null;
    return fn[r] = new xw(qx(c, o)), Yh[r] && Yh[r].forEach(function(d) {
      Rw(d.name, d.config);
    }), Js(r), fn[r];
  } else
    return delete fn[r], null;
}
function Cj(r, o) {
  if (o != null) {
    var l, c, d = rk;
    fn[r] != null && fn[r].parentLocale != null ? fn[r].set(qx(fn[r]._config, o)) : (c = By(r), c != null && (d = c._config), o = qx(d, o), c == null && (o.abbr = r), l = new xw(o), l.parentLocale = fn[r], fn[r] = l), Js(r);
  } else
    fn[r] != null && (fn[r].parentLocale != null ? (fn[r] = fn[r].parentLocale, r === Js() && Js(r)) : fn[r] != null && delete fn[r]);
  return fn[r];
}
function Gl(r) {
  var o;
  if (r && r._locale && r._locale._abbr && (r = r._locale._abbr), !r)
    return tv;
  if (!no(r)) {
    if (o = By(r), o)
      return o;
    r = [r];
  }
  return bj(r);
}
function _j() {
  return Kx(fn);
}
function Dw(r) {
  var o, l = r._a;
  return l && ft(r).overflow === -2 && (o = l[$l] < 0 || l[$l] > 11 ? $l : l[Vo] < 1 || l[Vo] > Vy(l[Qr], l[$l]) ? Vo : l[rr] < 0 || l[rr] > 24 || l[rr] === 24 && (l[to] !== 0 || l[Vl] !== 0 || l[dc] !== 0) ? rr : l[to] < 0 || l[to] > 59 ? to : l[Vl] < 0 || l[Vl] > 59 ? Vl : l[dc] < 0 || l[dc] > 999 ? dc : -1, ft(r)._overflowDayOfYear && (o < Qr || o > Vo) && (o = Vo), ft(r)._overflowWeeks && o === -1 && (o = M2), ft(r)._overflowWeekday && o === -1 && (o = L2), ft(r).overflow = o), r;
}
var Tj = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, kj = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Rj = /Z|[+-]\d\d(?::?\d\d)?/, fy = [
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
], Nx = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Dj = /^\/?Date\((-?\d+)/i, Oj = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Mj = {
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
function ak(r) {
  var o, l, c = r._i, d = Tj.exec(c) || kj.exec(c), m, v, E, w, _ = fy.length, k = Nx.length;
  if (d) {
    for (ft(r).iso = !0, o = 0, l = _; o < l; o++)
      if (fy[o][1].exec(d[1])) {
        v = fy[o][0], m = fy[o][2] !== !1;
        break;
      }
    if (v == null) {
      r._isValid = !1;
      return;
    }
    if (d[3]) {
      for (o = 0, l = k; o < l; o++)
        if (Nx[o][1].exec(d[3])) {
          E = (d[2] || " ") + Nx[o][0];
          break;
        }
      if (E == null) {
        r._isValid = !1;
        return;
      }
    }
    if (!m && E != null) {
      r._isValid = !1;
      return;
    }
    if (d[4])
      if (Rj.exec(d[4]))
        w = "Z";
      else {
        r._isValid = !1;
        return;
      }
    r._f = v + (E || "") + (w || ""), Mw(r);
  } else
    r._isValid = !1;
}
function Lj(r, o, l, c, d, m) {
  var v = [
    Nj(r),
    GT.indexOf(o),
    parseInt(l, 10),
    parseInt(c, 10),
    parseInt(d, 10)
  ];
  return m && v.push(parseInt(m, 10)), v;
}
function Nj(r) {
  var o = parseInt(r, 10);
  return o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o;
}
function jj(r) {
  return r.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Uj(r, o, l) {
  if (r) {
    var c = ek.indexOf(r), d = new Date(
      o[0],
      o[1],
      o[2]
    ).getDay();
    if (c !== d)
      return ft(l).weekdayMismatch = !0, l._isValid = !1, !1;
  }
  return !0;
}
function Aj(r, o, l) {
  if (r)
    return Mj[r];
  if (o)
    return 0;
  var c = parseInt(l, 10), d = c % 100, m = (c - d) / 100;
  return m * 60 + d;
}
function ik(r) {
  var o = Oj.exec(jj(r._i)), l;
  if (o) {
    if (l = Lj(
      o[4],
      o[3],
      o[2],
      o[5],
      o[6],
      o[7]
    ), !Uj(o[1], l, r))
      return;
    r._a = l, r._tzm = Aj(o[8], o[9], o[10]), r._d = Jh.apply(null, r._a), r._d.setUTCMinutes(r._d.getUTCMinutes() - r._tzm), ft(r).rfc2822 = !0;
  } else
    r._isValid = !1;
}
function zj(r) {
  var o = Dj.exec(r._i);
  if (o !== null) {
    r._d = /* @__PURE__ */ new Date(+o[1]);
    return;
  }
  if (ak(r), r._isValid === !1)
    delete r._isValid;
  else
    return;
  if (ik(r), r._isValid === !1)
    delete r._isValid;
  else
    return;
  r._strict ? r._isValid = !1 : ve.createFromInputFallback(r);
}
ve.createFromInputFallback = Ci(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(r) {
    r._d = /* @__PURE__ */ new Date(r._i + (r._useUTC ? " UTC" : ""));
  }
);
function md(r, o, l) {
  return r ?? o ?? l;
}
function Fj(r) {
  var o = new Date(ve.now());
  return r._useUTC ? [
    o.getUTCFullYear(),
    o.getUTCMonth(),
    o.getUTCDate()
  ] : [o.getFullYear(), o.getMonth(), o.getDate()];
}
function Ow(r) {
  var o, l, c = [], d, m, v;
  if (!r._d) {
    for (d = Fj(r), r._w && r._a[Vo] == null && r._a[$l] == null && Pj(r), r._dayOfYear != null && (v = md(r._a[Qr], d[Qr]), (r._dayOfYear > Qh(v) || r._dayOfYear === 0) && (ft(r)._overflowDayOfYear = !0), l = Jh(v, 0, r._dayOfYear), r._a[$l] = l.getUTCMonth(), r._a[Vo] = l.getUTCDate()), o = 0; o < 3 && r._a[o] == null; ++o)
      r._a[o] = c[o] = d[o];
    for (; o < 7; o++)
      r._a[o] = c[o] = r._a[o] == null ? o === 2 ? 1 : 0 : r._a[o];
    r._a[rr] === 24 && r._a[to] === 0 && r._a[Vl] === 0 && r._a[dc] === 0 && (r._nextDay = !0, r._a[rr] = 0), r._d = (r._useUTC ? Jh : B2).apply(
      null,
      c
    ), m = r._useUTC ? r._d.getUTCDay() : r._d.getDay(), r._tzm != null && r._d.setUTCMinutes(r._d.getUTCMinutes() - r._tzm), r._nextDay && (r._a[rr] = 24), r._w && typeof r._w.d < "u" && r._w.d !== m && (ft(r).weekdayMismatch = !0);
  }
}
function Pj(r) {
  var o, l, c, d, m, v, E, w, _;
  o = r._w, o.GG != null || o.W != null || o.E != null ? (m = 1, v = 4, l = md(
    o.GG,
    r._a[Qr],
    ev(on(), 1, 4).year
  ), c = md(o.W, 1), d = md(o.E, 1), (d < 1 || d > 7) && (w = !0)) : (m = r._locale._week.dow, v = r._locale._week.doy, _ = ev(on(), m, v), l = md(o.gg, r._a[Qr], _.year), c = md(o.w, _.week), o.d != null ? (d = o.d, (d < 0 || d > 6) && (w = !0)) : o.e != null ? (d = o.e + m, (o.e < 0 || o.e > 6) && (w = !0)) : d = m), c < 1 || c > Bl(l, m, v) ? ft(r)._overflowWeeks = !0 : w != null ? ft(r)._overflowWeekday = !0 : (E = JT(l, c, d, m, v), r._a[Qr] = E.year, r._dayOfYear = E.dayOfYear);
}
ve.ISO_8601 = function() {
};
ve.RFC_2822 = function() {
};
function Mw(r) {
  if (r._f === ve.ISO_8601) {
    ak(r);
    return;
  }
  if (r._f === ve.RFC_2822) {
    ik(r);
    return;
  }
  r._a = [], ft(r).empty = !0;
  var o = "" + r._i, l, c, d, m, v, E = o.length, w = 0, _, k;
  for (d = HT(r._f, r._locale).match(ww) || [], k = d.length, l = 0; l < k; l++)
    m = d[l], c = (o.match(R2(m, r)) || [])[0], c && (v = o.substr(0, o.indexOf(c)), v.length > 0 && ft(r).unusedInput.push(v), o = o.slice(
      o.indexOf(c) + c.length
    ), w += c.length), yd[m] ? (c ? ft(r).empty = !1 : ft(r).unusedTokens.push(m), O2(m, c, r)) : r._strict && !c && ft(r).unusedTokens.push(m);
  ft(r).charsLeftOver = E - w, o.length > 0 && ft(r).unusedInput.push(o), r._a[rr] <= 12 && ft(r).bigHour === !0 && r._a[rr] > 0 && (ft(r).bigHour = void 0), ft(r).parsedDateParts = r._a.slice(0), ft(r).meridiem = r._meridiem, r._a[rr] = Hj(
    r._locale,
    r._a[rr],
    r._meridiem
  ), _ = ft(r).era, _ !== null && (r._a[Qr] = r._locale.erasConvertYear(_, r._a[Qr])), Ow(r), Dw(r);
}
function Hj(r, o, l) {
  var c;
  return l == null ? o : r.meridiemHour != null ? r.meridiemHour(o, l) : (r.isPM != null && (c = r.isPM(l), c && o < 12 && (o += 12), !c && o === 12 && (o = 0)), o);
}
function Ij(r) {
  var o, l, c, d, m, v, E = !1, w = r._f.length;
  if (w === 0) {
    ft(r).invalidFormat = !0, r._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (d = 0; d < w; d++)
    m = 0, v = !1, o = Sw({}, r), r._useUTC != null && (o._useUTC = r._useUTC), o._f = r._f[d], Mw(o), yw(o) && (v = !0), m += ft(o).charsLeftOver, m += ft(o).unusedTokens.length * 10, ft(o).score = m, E ? m < c && (c = m, l = o) : (c == null || m < c || v) && (c = m, l = o, v && (E = !0));
  Zs(r, l || o);
}
function Yj(r) {
  if (!r._d) {
    var o = bw(r._i), l = o.day === void 0 ? o.date : o.day;
    r._a = zT(
      [o.year, o.month, l, o.hour, o.minute, o.second, o.millisecond],
      function(c) {
        return c && parseInt(c, 10);
      }
    ), Ow(r);
  }
}
function $j(r) {
  var o = new sv(Dw(ok(r)));
  return o._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
}
function ok(r) {
  var o = r._i, l = r._f;
  return r._locale = r._locale || Gl(r._l), o === null || l === void 0 && o === "" ? zy({ nullInput: !0 }) : (typeof o == "string" && (r._i = o = r._locale.preparse(o)), ro(o) ? new sv(Dw(o)) : (lv(o) ? r._d = o : no(l) ? Ij(r) : l ? Mw(r) : Vj(r), yw(r) || (r._d = null), r));
}
function Vj(r) {
  var o = r._i;
  Pa(o) ? r._d = new Date(ve.now()) : lv(o) ? r._d = new Date(o.valueOf()) : typeof o == "string" ? zj(r) : no(o) ? (r._a = zT(o.slice(0), function(l) {
    return parseInt(l, 10);
  }), Ow(r)) : hc(o) ? Yj(r) : Wl(o) ? r._d = new Date(o) : ve.createFromInputFallback(r);
}
function lk(r, o, l, c, d) {
  var m = {};
  return (o === !0 || o === !1) && (c = o, o = void 0), (l === !0 || l === !1) && (c = l, l = void 0), (hc(r) && gw(r) || no(r) && r.length === 0) && (r = void 0), m._isAMomentObject = !0, m._useUTC = m._isUTC = d, m._l = l, m._i = r, m._f = o, m._strict = c, $j(m);
}
function on(r, o, l, c) {
  return lk(r, o, l, c, !1);
}
var Bj = Ci(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var r = on.apply(null, arguments);
    return this.isValid() && r.isValid() ? r < this ? this : r : zy();
  }
), Wj = Ci(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var r = on.apply(null, arguments);
    return this.isValid() && r.isValid() ? r > this ? this : r : zy();
  }
);
function sk(r, o) {
  var l, c;
  if (o.length === 1 && no(o[0]) && (o = o[0]), !o.length)
    return on();
  for (l = o[0], c = 1; c < o.length; ++c)
    (!o[c].isValid() || o[c][r](l)) && (l = o[c]);
  return l;
}
function Gj() {
  var r = [].slice.call(arguments, 0);
  return sk("isBefore", r);
}
function Qj() {
  var r = [].slice.call(arguments, 0);
  return sk("isAfter", r);
}
var qj = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, $h = [
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
function Kj(r) {
  var o, l = !1, c, d = $h.length;
  for (o in r)
    if (Ot(r, o) && !(Ln.call($h, o) !== -1 && (r[o] == null || !isNaN(r[o]))))
      return !1;
  for (c = 0; c < d; ++c)
    if (r[$h[c]]) {
      if (l)
        return !1;
      parseFloat(r[$h[c]]) !== vt(r[$h[c]]) && (l = !0);
    }
  return !0;
}
function Zj() {
  return this._isValid;
}
function Xj() {
  return ao(NaN);
}
function Wy(r) {
  var o = bw(r), l = o.year || 0, c = o.quarter || 0, d = o.month || 0, m = o.week || o.isoWeek || 0, v = o.day || 0, E = o.hour || 0, w = o.minute || 0, _ = o.second || 0, k = o.millisecond || 0;
  this._isValid = Kj(o), this._milliseconds = +k + _ * 1e3 + // 1000
  w * 6e4 + // 1000 * 60
  E * 1e3 * 60 * 60, this._days = +v + m * 7, this._months = +d + c * 3 + l * 12, this._data = {}, this._locale = Gl(), this._bubble();
}
function yy(r) {
  return r instanceof Wy;
}
function Xx(r) {
  return r < 0 ? Math.round(-1 * r) * -1 : Math.round(r);
}
function Jj(r, o, l) {
  var c = Math.min(r.length, o.length), d = Math.abs(r.length - o.length), m = 0, v;
  for (v = 0; v < c; v++)
    (l && r[v] !== o[v] || !l && vt(r[v]) !== vt(o[v])) && m++;
  return m + d;
}
function uk(r, o) {
  Be(r, 0, 0, function() {
    var l = this.utcOffset(), c = "+";
    return l < 0 && (l = -l, c = "-"), c + Wo(~~(l / 60), 2) + o + Wo(~~l % 60, 2);
  });
}
uk("Z", ":");
uk("ZZ", "");
De("Z", $y);
De("ZZ", $y);
$t(["Z", "ZZ"], function(r, o, l) {
  l._useUTC = !0, l._tzm = Lw($y, r);
});
var eU = /([\+\-]|\d\d)/gi;
function Lw(r, o) {
  var l = (o || "").match(r), c, d, m;
  return l === null ? null : (c = l[l.length - 1] || [], d = (c + "").match(eU) || ["-", 0, 0], m = +(d[1] * 60) + vt(d[2]), m === 0 ? 0 : d[0] === "+" ? m : -m);
}
function Nw(r, o) {
  var l, c;
  return o._isUTC ? (l = o.clone(), c = (ro(r) || lv(r) ? r.valueOf() : on(r).valueOf()) - l.valueOf(), l._d.setTime(l._d.valueOf() + c), ve.updateOffset(l, !1), l) : on(r).local();
}
function Jx(r) {
  return -Math.round(r._d.getTimezoneOffset());
}
ve.updateOffset = function() {
};
function tU(r, o, l) {
  var c = this._offset || 0, d;
  if (!this.isValid())
    return r != null ? this : NaN;
  if (r != null) {
    if (typeof r == "string") {
      if (r = Lw($y, r), r === null)
        return this;
    } else
      Math.abs(r) < 16 && !l && (r = r * 60);
    return !this._isUTC && o && (d = Jx(this)), this._offset = r, this._isUTC = !0, d != null && this.add(d, "m"), c !== r && (!o || this._changeInProgress ? dk(
      this,
      ao(r - c, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ve.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? c : Jx(this);
}
function nU(r, o) {
  return r != null ? (typeof r != "string" && (r = -r), this.utcOffset(r, o), this) : -this.utcOffset();
}
function rU(r) {
  return this.utcOffset(0, r);
}
function aU(r) {
  return this._isUTC && (this.utcOffset(0, r), this._isUTC = !1, r && this.subtract(Jx(this), "m")), this;
}
function iU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var r = Lw(T2, this._i);
    r != null ? this.utcOffset(r) : this.utcOffset(0, !0);
  }
  return this;
}
function oU(r) {
  return this.isValid() ? (r = r ? on(r).utcOffset() : 0, (this.utcOffset() - r) % 60 === 0) : !1;
}
function lU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function sU() {
  if (!Pa(this._isDSTShifted))
    return this._isDSTShifted;
  var r = {}, o;
  return Sw(r, this), r = ok(r), r._a ? (o = r._isUTC ? Go(r._a) : on(r._a), this._isDSTShifted = this.isValid() && Jj(r._a, o.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function uU() {
  return this.isValid() ? !this._isUTC : !1;
}
function cU() {
  return this.isValid() ? this._isUTC : !1;
}
function ck() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var fU = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, dU = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ao(r, o) {
  var l = r, c = null, d, m, v;
  return yy(r) ? l = {
    ms: r._milliseconds,
    d: r._days,
    M: r._months
  } : Wl(r) || !isNaN(+r) ? (l = {}, o ? l[o] = +r : l.milliseconds = +r) : (c = fU.exec(r)) ? (d = c[1] === "-" ? -1 : 1, l = {
    y: 0,
    d: vt(c[Vo]) * d,
    h: vt(c[rr]) * d,
    m: vt(c[to]) * d,
    s: vt(c[Vl]) * d,
    ms: vt(Xx(c[dc] * 1e3)) * d
    // the millisecond decimal point is included in the match
  }) : (c = dU.exec(r)) ? (d = c[1] === "-" ? -1 : 1, l = {
    y: fc(c[2], d),
    M: fc(c[3], d),
    w: fc(c[4], d),
    d: fc(c[5], d),
    h: fc(c[6], d),
    m: fc(c[7], d),
    s: fc(c[8], d)
  }) : l == null ? l = {} : typeof l == "object" && ("from" in l || "to" in l) && (v = pU(
    on(l.from),
    on(l.to)
  ), l = {}, l.ms = v.milliseconds, l.M = v.months), m = new Wy(l), yy(r) && Ot(r, "_locale") && (m._locale = r._locale), yy(r) && Ot(r, "_isValid") && (m._isValid = r._isValid), m;
}
ao.fn = Wy.prototype;
ao.invalid = Xj;
function fc(r, o) {
  var l = r && parseFloat(r.replace(",", "."));
  return (isNaN(l) ? 0 : l) * o;
}
function P_(r, o) {
  var l = {};
  return l.months = o.month() - r.month() + (o.year() - r.year()) * 12, r.clone().add(l.months, "M").isAfter(o) && --l.months, l.milliseconds = +o - +r.clone().add(l.months, "M"), l;
}
function pU(r, o) {
  var l;
  return r.isValid() && o.isValid() ? (o = Nw(o, r), r.isBefore(o) ? l = P_(r, o) : (l = P_(o, r), l.milliseconds = -l.milliseconds, l.months = -l.months), l) : { milliseconds: 0, months: 0 };
}
function fk(r, o) {
  return function(l, c) {
    var d, m;
    return c !== null && !isNaN(+c) && (PT(
      o,
      "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), m = l, l = c, c = m), d = ao(l, c), dk(this, d, r), this;
  };
}
function dk(r, o, l, c) {
  var d = o._milliseconds, m = Xx(o._days), v = Xx(o._months);
  r.isValid() && (c = c ?? !0, v && qT(r, Cy(r, "Month") + v * l), m && YT(r, "Date", Cy(r, "Date") + m * l), d && r._d.setTime(r._d.valueOf() + d * l), c && ve.updateOffset(r, m || v));
}
var hU = fk(1, "add"), vU = fk(-1, "subtract");
function pk(r) {
  return typeof r == "string" || r instanceof String;
}
function mU(r) {
  return ro(r) || lv(r) || pk(r) || Wl(r) || yU(r) || gU(r) || r === null || r === void 0;
}
function gU(r) {
  var o = hc(r) && !gw(r), l = !1, c = [
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
  ], d, m, v = c.length;
  for (d = 0; d < v; d += 1)
    m = c[d], l = l || Ot(r, m);
  return o && l;
}
function yU(r) {
  var o = no(r), l = !1;
  return o && (l = r.filter(function(c) {
    return !Wl(c) && pk(r);
  }).length === 0), o && l;
}
function SU(r) {
  var o = hc(r) && !gw(r), l = !1, c = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], d, m;
  for (d = 0; d < c.length; d += 1)
    m = c[d], l = l || Ot(r, m);
  return o && l;
}
function xU(r, o) {
  var l = r.diff(o, "days", !0);
  return l < -6 ? "sameElse" : l < -1 ? "lastWeek" : l < 0 ? "lastDay" : l < 1 ? "sameDay" : l < 2 ? "nextDay" : l < 7 ? "nextWeek" : "sameElse";
}
function wU(r, o) {
  arguments.length === 1 && (arguments[0] ? mU(arguments[0]) ? (r = arguments[0], o = void 0) : SU(arguments[0]) && (o = arguments[0], r = void 0) : (r = void 0, o = void 0));
  var l = r || on(), c = Nw(l, this).startOf("day"), d = ve.calendarFormat(this, c) || "sameElse", m = o && (Qo(o[d]) ? o[d].call(this, l) : o[d]);
  return this.format(
    m || this.localeData().calendar(d, this, on(l))
  );
}
function bU() {
  return new sv(this);
}
function EU(r, o) {
  var l = ro(r) ? r : on(r);
  return this.isValid() && l.isValid() ? (o = _i(o) || "millisecond", o === "millisecond" ? this.valueOf() > l.valueOf() : l.valueOf() < this.clone().startOf(o).valueOf()) : !1;
}
function CU(r, o) {
  var l = ro(r) ? r : on(r);
  return this.isValid() && l.isValid() ? (o = _i(o) || "millisecond", o === "millisecond" ? this.valueOf() < l.valueOf() : this.clone().endOf(o).valueOf() < l.valueOf()) : !1;
}
function _U(r, o, l, c) {
  var d = ro(r) ? r : on(r), m = ro(o) ? o : on(o);
  return this.isValid() && d.isValid() && m.isValid() ? (c = c || "()", (c[0] === "(" ? this.isAfter(d, l) : !this.isBefore(d, l)) && (c[1] === ")" ? this.isBefore(m, l) : !this.isAfter(m, l))) : !1;
}
function TU(r, o) {
  var l = ro(r) ? r : on(r), c;
  return this.isValid() && l.isValid() ? (o = _i(o) || "millisecond", o === "millisecond" ? this.valueOf() === l.valueOf() : (c = l.valueOf(), this.clone().startOf(o).valueOf() <= c && c <= this.clone().endOf(o).valueOf())) : !1;
}
function kU(r, o) {
  return this.isSame(r, o) || this.isAfter(r, o);
}
function RU(r, o) {
  return this.isSame(r, o) || this.isBefore(r, o);
}
function DU(r, o, l) {
  var c, d, m;
  if (!this.isValid())
    return NaN;
  if (c = Nw(r, this), !c.isValid())
    return NaN;
  switch (d = (c.utcOffset() - this.utcOffset()) * 6e4, o = _i(o), o) {
    case "year":
      m = Sy(this, c) / 12;
      break;
    case "month":
      m = Sy(this, c);
      break;
    case "quarter":
      m = Sy(this, c) / 3;
      break;
    case "second":
      m = (this - c) / 1e3;
      break;
    case "minute":
      m = (this - c) / 6e4;
      break;
    case "hour":
      m = (this - c) / 36e5;
      break;
    case "day":
      m = (this - c - d) / 864e5;
      break;
    case "week":
      m = (this - c - d) / 6048e5;
      break;
    default:
      m = this - c;
  }
  return l ? m : Ei(m);
}
function Sy(r, o) {
  if (r.date() < o.date())
    return -Sy(o, r);
  var l = (o.year() - r.year()) * 12 + (o.month() - r.month()), c = r.clone().add(l, "months"), d, m;
  return o - c < 0 ? (d = r.clone().add(l - 1, "months"), m = (o - c) / (c - d)) : (d = r.clone().add(l + 1, "months"), m = (o - c) / (d - c)), -(l + m) || 0;
}
ve.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ve.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function OU() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function MU(r) {
  if (!this.isValid())
    return null;
  var o = r !== !0, l = o ? this.clone().utc() : this;
  return l.year() < 0 || l.year() > 9999 ? gy(
    l,
    o ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Qo(Date.prototype.toISOString) ? o ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", gy(l, "Z")) : gy(
    l,
    o ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function LU() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var r = "moment", o = "", l, c, d, m;
  return this.isLocal() || (r = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", o = "Z"), l = "[" + r + '("]', c = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", d = "-MM-DD[T]HH:mm:ss.SSS", m = o + '[")]', this.format(l + c + d + m);
}
function NU(r) {
  r || (r = this.isUtc() ? ve.defaultFormatUtc : ve.defaultFormat);
  var o = gy(this, r);
  return this.localeData().postformat(o);
}
function jU(r, o) {
  return this.isValid() && (ro(r) && r.isValid() || on(r).isValid()) ? ao({ to: this, from: r }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function UU(r) {
  return this.from(on(), r);
}
function AU(r, o) {
  return this.isValid() && (ro(r) && r.isValid() || on(r).isValid()) ? ao({ from: this, to: r }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function zU(r) {
  return this.to(on(), r);
}
function hk(r) {
  var o;
  return r === void 0 ? this._locale._abbr : (o = Gl(r), o != null && (this._locale = o), this);
}
var vk = Ci(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(r) {
    return r === void 0 ? this.localeData() : this.locale(r);
  }
);
function mk() {
  return this._locale;
}
var ky = 1e3, Sd = 60 * ky, Ry = 60 * Sd, gk = (365 * 400 + 97) * 24 * Ry;
function xd(r, o) {
  return (r % o + o) % o;
}
function yk(r, o, l) {
  return r < 100 && r >= 0 ? new Date(r + 400, o, l) - gk : new Date(r, o, l).valueOf();
}
function Sk(r, o, l) {
  return r < 100 && r >= 0 ? Date.UTC(r + 400, o, l) - gk : Date.UTC(r, o, l);
}
function FU(r) {
  var o, l;
  if (r = _i(r), r === void 0 || r === "millisecond" || !this.isValid())
    return this;
  switch (l = this._isUTC ? Sk : yk, r) {
    case "year":
      o = l(this.year(), 0, 1);
      break;
    case "quarter":
      o = l(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      o = l(this.year(), this.month(), 1);
      break;
    case "week":
      o = l(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      o = l(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      o = l(this.year(), this.month(), this.date());
      break;
    case "hour":
      o = this._d.valueOf(), o -= xd(
        o + (this._isUTC ? 0 : this.utcOffset() * Sd),
        Ry
      );
      break;
    case "minute":
      o = this._d.valueOf(), o -= xd(o, Sd);
      break;
    case "second":
      o = this._d.valueOf(), o -= xd(o, ky);
      break;
  }
  return this._d.setTime(o), ve.updateOffset(this, !0), this;
}
function PU(r) {
  var o, l;
  if (r = _i(r), r === void 0 || r === "millisecond" || !this.isValid())
    return this;
  switch (l = this._isUTC ? Sk : yk, r) {
    case "year":
      o = l(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      o = l(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      o = l(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      o = l(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      o = l(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      o = l(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      o = this._d.valueOf(), o += Ry - xd(
        o + (this._isUTC ? 0 : this.utcOffset() * Sd),
        Ry
      ) - 1;
      break;
    case "minute":
      o = this._d.valueOf(), o += Sd - xd(o, Sd) - 1;
      break;
    case "second":
      o = this._d.valueOf(), o += ky - xd(o, ky) - 1;
      break;
  }
  return this._d.setTime(o), ve.updateOffset(this, !0), this;
}
function HU() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function IU() {
  return Math.floor(this.valueOf() / 1e3);
}
function YU() {
  return new Date(this.valueOf());
}
function $U() {
  var r = this;
  return [
    r.year(),
    r.month(),
    r.date(),
    r.hour(),
    r.minute(),
    r.second(),
    r.millisecond()
  ];
}
function VU() {
  var r = this;
  return {
    years: r.year(),
    months: r.month(),
    date: r.date(),
    hours: r.hours(),
    minutes: r.minutes(),
    seconds: r.seconds(),
    milliseconds: r.milliseconds()
  };
}
function BU() {
  return this.isValid() ? this.toISOString() : null;
}
function WU() {
  return yw(this);
}
function GU() {
  return Zs({}, ft(this));
}
function QU() {
  return ft(this).overflow;
}
function qU() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Be("N", 0, 0, "eraAbbr");
Be("NN", 0, 0, "eraAbbr");
Be("NNN", 0, 0, "eraAbbr");
Be("NNNN", 0, 0, "eraName");
Be("NNNNN", 0, 0, "eraNarrow");
Be("y", ["y", 1], "yo", "eraYear");
Be("y", ["yy", 2], 0, "eraYear");
Be("y", ["yyy", 3], 0, "eraYear");
Be("y", ["yyyy", 4], 0, "eraYear");
De("N", jw);
De("NN", jw);
De("NNN", jw);
De("NNNN", oA);
De("NNNNN", lA);
$t(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(r, o, l, c) {
    var d = l._locale.erasParse(r, c, l._strict);
    d ? ft(l).era = d : ft(l).invalidEra = r;
  }
);
De("y", Ed);
De("yy", Ed);
De("yyy", Ed);
De("yyyy", Ed);
De("yo", sA);
$t(["y", "yy", "yyy", "yyyy"], Qr);
$t(["yo"], function(r, o, l, c) {
  var d;
  l._locale._eraYearOrdinalRegex && (d = r.match(l._locale._eraYearOrdinalRegex)), l._locale.eraYearOrdinalParse ? o[Qr] = l._locale.eraYearOrdinalParse(r, d) : o[Qr] = parseInt(r, 10);
});
function KU(r, o) {
  var l, c, d, m = this._eras || Gl("en")._eras;
  for (l = 0, c = m.length; l < c; ++l) {
    switch (typeof m[l].since) {
      case "string":
        d = ve(m[l].since).startOf("day"), m[l].since = d.valueOf();
        break;
    }
    switch (typeof m[l].until) {
      case "undefined":
        m[l].until = 1 / 0;
        break;
      case "string":
        d = ve(m[l].until).startOf("day").valueOf(), m[l].until = d.valueOf();
        break;
    }
  }
  return m;
}
function ZU(r, o, l) {
  var c, d, m = this.eras(), v, E, w;
  for (r = r.toUpperCase(), c = 0, d = m.length; c < d; ++c)
    if (v = m[c].name.toUpperCase(), E = m[c].abbr.toUpperCase(), w = m[c].narrow.toUpperCase(), l)
      switch (o) {
        case "N":
        case "NN":
        case "NNN":
          if (E === r)
            return m[c];
          break;
        case "NNNN":
          if (v === r)
            return m[c];
          break;
        case "NNNNN":
          if (w === r)
            return m[c];
          break;
      }
    else if ([v, E, w].indexOf(r) >= 0)
      return m[c];
}
function XU(r, o) {
  var l = r.since <= r.until ? 1 : -1;
  return o === void 0 ? ve(r.since).year() : ve(r.since).year() + (o - r.offset) * l;
}
function JU() {
  var r, o, l, c = this.localeData().eras();
  for (r = 0, o = c.length; r < o; ++r)
    if (l = this.clone().startOf("day").valueOf(), c[r].since <= l && l <= c[r].until || c[r].until <= l && l <= c[r].since)
      return c[r].name;
  return "";
}
function eA() {
  var r, o, l, c = this.localeData().eras();
  for (r = 0, o = c.length; r < o; ++r)
    if (l = this.clone().startOf("day").valueOf(), c[r].since <= l && l <= c[r].until || c[r].until <= l && l <= c[r].since)
      return c[r].narrow;
  return "";
}
function tA() {
  var r, o, l, c = this.localeData().eras();
  for (r = 0, o = c.length; r < o; ++r)
    if (l = this.clone().startOf("day").valueOf(), c[r].since <= l && l <= c[r].until || c[r].until <= l && l <= c[r].since)
      return c[r].abbr;
  return "";
}
function nA() {
  var r, o, l, c, d = this.localeData().eras();
  for (r = 0, o = d.length; r < o; ++r)
    if (l = d[r].since <= d[r].until ? 1 : -1, c = this.clone().startOf("day").valueOf(), d[r].since <= c && c <= d[r].until || d[r].until <= c && c <= d[r].since)
      return (this.year() - ve(d[r].since).year()) * l + d[r].offset;
  return this.year();
}
function rA(r) {
  return Ot(this, "_erasNameRegex") || Uw.call(this), r ? this._erasNameRegex : this._erasRegex;
}
function aA(r) {
  return Ot(this, "_erasAbbrRegex") || Uw.call(this), r ? this._erasAbbrRegex : this._erasRegex;
}
function iA(r) {
  return Ot(this, "_erasNarrowRegex") || Uw.call(this), r ? this._erasNarrowRegex : this._erasRegex;
}
function jw(r, o) {
  return o.erasAbbrRegex(r);
}
function oA(r, o) {
  return o.erasNameRegex(r);
}
function lA(r, o) {
  return o.erasNarrowRegex(r);
}
function sA(r, o) {
  return o._eraYearOrdinalRegex || Ed;
}
function Uw() {
  var r = [], o = [], l = [], c = [], d, m, v = this.eras();
  for (d = 0, m = v.length; d < m; ++d)
    o.push(ni(v[d].name)), r.push(ni(v[d].abbr)), l.push(ni(v[d].narrow)), c.push(ni(v[d].name)), c.push(ni(v[d].abbr)), c.push(ni(v[d].narrow));
  this._erasRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + l.join("|") + ")",
    "i"
  );
}
Be(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Be(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Gy(r, o) {
  Be(0, [r, r.length], 0, o);
}
Gy("gggg", "weekYear");
Gy("ggggg", "weekYear");
Gy("GGGG", "isoWeekYear");
Gy("GGGGG", "isoWeekYear");
qr("weekYear", "gg");
qr("isoWeekYear", "GG");
Kr("weekYear", 1);
Kr("isoWeekYear", 1);
De("G", Yy);
De("g", Yy);
De("GG", ln, ri);
De("gg", ln, ri);
De("GGGG", Cw, Ew);
De("gggg", Cw, Ew);
De("GGGGG", Iy, Py);
De("ggggg", Iy, Py);
cv(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(r, o, l, c) {
    o[c.substr(0, 2)] = vt(r);
  }
);
cv(["gg", "GG"], function(r, o, l, c) {
  o[c] = ve.parseTwoDigitYear(r);
});
function uA(r) {
  return xk.call(
    this,
    r,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function cA(r) {
  return xk.call(
    this,
    r,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function fA() {
  return Bl(this.year(), 1, 4);
}
function dA() {
  return Bl(this.isoWeekYear(), 1, 4);
}
function pA() {
  var r = this.localeData()._week;
  return Bl(this.year(), r.dow, r.doy);
}
function hA() {
  var r = this.localeData()._week;
  return Bl(this.weekYear(), r.dow, r.doy);
}
function xk(r, o, l, c, d) {
  var m;
  return r == null ? ev(this, c, d).year : (m = Bl(r, c, d), o > m && (o = m), vA.call(this, r, o, l, c, d));
}
function vA(r, o, l, c, d) {
  var m = JT(r, o, l, c, d), v = Jh(m.year, 0, m.dayOfYear);
  return this.year(v.getUTCFullYear()), this.month(v.getUTCMonth()), this.date(v.getUTCDate()), this;
}
Be("Q", 0, "Qo", "quarter");
qr("quarter", "Q");
Kr("quarter", 7);
De("Q", $T);
$t("Q", function(r, o) {
  o[$l] = (vt(r) - 1) * 3;
});
function mA(r) {
  return r == null ? Math.ceil((this.month() + 1) / 3) : this.month((r - 1) * 3 + this.month() % 3);
}
Be("D", ["DD", 2], "Do", "date");
qr("date", "D");
Kr("date", 9);
De("D", ln);
De("DD", ln, ri);
De("Do", function(r, o) {
  return r ? o._dayOfMonthOrdinalParse || o._ordinalParse : o._dayOfMonthOrdinalParseLenient;
});
$t(["D", "DD"], Vo);
$t("Do", function(r, o) {
  o[Vo] = vt(r.match(ln)[0]);
});
var wk = bd("Date", !0);
Be("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
qr("dayOfYear", "DDD");
Kr("dayOfYear", 4);
De("DDD", Hy);
De("DDDD", VT);
$t(["DDD", "DDDD"], function(r, o, l) {
  l._dayOfYear = vt(r);
});
function gA(r) {
  var o = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return r == null ? o : this.add(r - o, "d");
}
Be("m", ["mm", 2], 0, "minute");
qr("minute", "m");
Kr("minute", 14);
De("m", ln);
De("mm", ln, ri);
$t(["m", "mm"], to);
var yA = bd("Minutes", !1);
Be("s", ["ss", 2], 0, "second");
qr("second", "s");
Kr("second", 15);
De("s", ln);
De("ss", ln, ri);
$t(["s", "ss"], Vl);
var SA = bd("Seconds", !1);
Be("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Be(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Be(0, ["SSS", 3], 0, "millisecond");
Be(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Be(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Be(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Be(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Be(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Be(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
qr("millisecond", "ms");
Kr("millisecond", 16);
De("S", Hy, $T);
De("SS", Hy, ri);
De("SSS", Hy, VT);
var Xs, bk;
for (Xs = "SSSS"; Xs.length <= 9; Xs += "S")
  De(Xs, Ed);
function xA(r, o) {
  o[dc] = vt(("0." + r) * 1e3);
}
for (Xs = "S"; Xs.length <= 9; Xs += "S")
  $t(Xs, xA);
bk = bd("Milliseconds", !1);
Be("z", 0, 0, "zoneAbbr");
Be("zz", 0, 0, "zoneName");
function wA() {
  return this._isUTC ? "UTC" : "";
}
function bA() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var ce = sv.prototype;
ce.add = hU;
ce.calendar = wU;
ce.clone = bU;
ce.diff = DU;
ce.endOf = PU;
ce.format = NU;
ce.from = jU;
ce.fromNow = UU;
ce.to = AU;
ce.toNow = zU;
ce.get = C2;
ce.invalidAt = QU;
ce.isAfter = EU;
ce.isBefore = CU;
ce.isBetween = _U;
ce.isSame = TU;
ce.isSameOrAfter = kU;
ce.isSameOrBefore = RU;
ce.isValid = WU;
ce.lang = vk;
ce.locale = hk;
ce.localeData = mk;
ce.max = Wj;
ce.min = Bj;
ce.parsingFlags = GU;
ce.set = _2;
ce.startOf = FU;
ce.subtract = vU;
ce.toArray = $U;
ce.toObject = VU;
ce.toDate = YU;
ce.toISOString = MU;
ce.inspect = LU;
typeof Symbol < "u" && Symbol.for != null && (ce[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
ce.toJSON = BU;
ce.toString = OU;
ce.unix = IU;
ce.valueOf = HU;
ce.creationData = qU;
ce.eraName = JU;
ce.eraNarrow = eA;
ce.eraAbbr = tA;
ce.eraYear = nA;
ce.year = XT;
ce.isLeapYear = V2;
ce.weekYear = uA;
ce.isoWeekYear = cA;
ce.quarter = ce.quarters = mA;
ce.month = KT;
ce.daysInMonth = I2;
ce.week = ce.weeks = K2;
ce.isoWeek = ce.isoWeeks = Z2;
ce.weeksInYear = pA;
ce.weeksInWeekYear = hA;
ce.isoWeeksInYear = fA;
ce.isoWeeksInISOWeekYear = dA;
ce.date = wk;
ce.day = ce.days = cj;
ce.weekday = fj;
ce.isoWeekday = dj;
ce.dayOfYear = gA;
ce.hour = ce.hours = Sj;
ce.minute = ce.minutes = yA;
ce.second = ce.seconds = SA;
ce.millisecond = ce.milliseconds = bk;
ce.utcOffset = tU;
ce.utc = rU;
ce.local = aU;
ce.parseZone = iU;
ce.hasAlignedHourOffset = oU;
ce.isDST = lU;
ce.isLocal = uU;
ce.isUtcOffset = cU;
ce.isUtc = ck;
ce.isUTC = ck;
ce.zoneAbbr = wA;
ce.zoneName = bA;
ce.dates = Ci(
  "dates accessor is deprecated. Use date instead.",
  wk
);
ce.months = Ci(
  "months accessor is deprecated. Use month instead",
  KT
);
ce.years = Ci(
  "years accessor is deprecated. Use year instead",
  XT
);
ce.zone = Ci(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  nU
);
ce.isDSTShifted = Ci(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  sU
);
function EA(r) {
  return on(r * 1e3);
}
function CA() {
  return on.apply(null, arguments).parseZone();
}
function Ek(r) {
  return r;
}
var Mt = xw.prototype;
Mt.calendar = c2;
Mt.longDateFormat = h2;
Mt.invalidDate = m2;
Mt.ordinal = S2;
Mt.preparse = Ek;
Mt.postformat = Ek;
Mt.relativeTime = w2;
Mt.pastFuture = b2;
Mt.set = s2;
Mt.eras = KU;
Mt.erasParse = ZU;
Mt.erasConvertYear = XU;
Mt.erasAbbrRegex = aA;
Mt.erasNameRegex = rA;
Mt.erasNarrowRegex = iA;
Mt.months = z2;
Mt.monthsShort = F2;
Mt.monthsParse = H2;
Mt.monthsRegex = $2;
Mt.monthsShortRegex = Y2;
Mt.week = W2;
Mt.firstDayOfYear = q2;
Mt.firstDayOfWeek = Q2;
Mt.weekdays = ij;
Mt.weekdaysMin = lj;
Mt.weekdaysShort = oj;
Mt.weekdaysParse = uj;
Mt.weekdaysRegex = pj;
Mt.weekdaysShortRegex = hj;
Mt.weekdaysMinRegex = vj;
Mt.isPM = gj;
Mt.meridiem = xj;
function Dy(r, o, l, c) {
  var d = Gl(), m = Go().set(c, o);
  return d[l](m, r);
}
function Ck(r, o, l) {
  if (Wl(r) && (o = r, r = void 0), r = r || "", o != null)
    return Dy(r, o, l, "month");
  var c, d = [];
  for (c = 0; c < 12; c++)
    d[c] = Dy(r, c, l, "month");
  return d;
}
function Aw(r, o, l, c) {
  typeof r == "boolean" ? (Wl(o) && (l = o, o = void 0), o = o || "") : (o = r, l = o, r = !1, Wl(o) && (l = o, o = void 0), o = o || "");
  var d = Gl(), m = r ? d._week.dow : 0, v, E = [];
  if (l != null)
    return Dy(o, (l + m) % 7, c, "day");
  for (v = 0; v < 7; v++)
    E[v] = Dy(o, (v + m) % 7, c, "day");
  return E;
}
function _A(r, o) {
  return Ck(r, o, "months");
}
function TA(r, o) {
  return Ck(r, o, "monthsShort");
}
function kA(r, o, l) {
  return Aw(r, o, l, "weekdays");
}
function RA(r, o, l) {
  return Aw(r, o, l, "weekdaysShort");
}
function DA(r, o, l) {
  return Aw(r, o, l, "weekdaysMin");
}
Js("en", {
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
  ordinal: function(r) {
    var o = r % 10, l = vt(r % 100 / 10) === 1 ? "th" : o === 1 ? "st" : o === 2 ? "nd" : o === 3 ? "rd" : "th";
    return r + l;
  }
});
ve.lang = Ci(
  "moment.lang is deprecated. Use moment.locale instead.",
  Js
);
ve.langData = Ci(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Gl
);
var Il = Math.abs;
function OA() {
  var r = this._data;
  return this._milliseconds = Il(this._milliseconds), this._days = Il(this._days), this._months = Il(this._months), r.milliseconds = Il(r.milliseconds), r.seconds = Il(r.seconds), r.minutes = Il(r.minutes), r.hours = Il(r.hours), r.months = Il(r.months), r.years = Il(r.years), this;
}
function _k(r, o, l, c) {
  var d = ao(o, l);
  return r._milliseconds += c * d._milliseconds, r._days += c * d._days, r._months += c * d._months, r._bubble();
}
function MA(r, o) {
  return _k(this, r, o, 1);
}
function LA(r, o) {
  return _k(this, r, o, -1);
}
function H_(r) {
  return r < 0 ? Math.floor(r) : Math.ceil(r);
}
function NA() {
  var r = this._milliseconds, o = this._days, l = this._months, c = this._data, d, m, v, E, w;
  return r >= 0 && o >= 0 && l >= 0 || r <= 0 && o <= 0 && l <= 0 || (r += H_(ew(l) + o) * 864e5, o = 0, l = 0), c.milliseconds = r % 1e3, d = Ei(r / 1e3), c.seconds = d % 60, m = Ei(d / 60), c.minutes = m % 60, v = Ei(m / 60), c.hours = v % 24, o += Ei(v / 24), w = Ei(Tk(o)), l += w, o -= H_(ew(w)), E = Ei(l / 12), l %= 12, c.days = o, c.months = l, c.years = E, this;
}
function Tk(r) {
  return r * 4800 / 146097;
}
function ew(r) {
  return r * 146097 / 4800;
}
function jA(r) {
  if (!this.isValid())
    return NaN;
  var o, l, c = this._milliseconds;
  if (r = _i(r), r === "month" || r === "quarter" || r === "year")
    switch (o = this._days + c / 864e5, l = this._months + Tk(o), r) {
      case "month":
        return l;
      case "quarter":
        return l / 3;
      case "year":
        return l / 12;
    }
  else
    switch (o = this._days + Math.round(ew(this._months)), r) {
      case "week":
        return o / 7 + c / 6048e5;
      case "day":
        return o + c / 864e5;
      case "hour":
        return o * 24 + c / 36e5;
      case "minute":
        return o * 1440 + c / 6e4;
      case "second":
        return o * 86400 + c / 1e3;
      case "millisecond":
        return Math.floor(o * 864e5) + c;
      default:
        throw new Error("Unknown unit " + r);
    }
}
function UA() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + vt(this._months / 12) * 31536e6 : NaN;
}
function Ql(r) {
  return function() {
    return this.as(r);
  };
}
var AA = Ql("ms"), zA = Ql("s"), FA = Ql("m"), PA = Ql("h"), HA = Ql("d"), IA = Ql("w"), YA = Ql("M"), $A = Ql("Q"), VA = Ql("y");
function BA() {
  return ao(this);
}
function WA(r) {
  return r = _i(r), this.isValid() ? this[r + "s"]() : NaN;
}
function gc(r) {
  return function() {
    return this.isValid() ? this._data[r] : NaN;
  };
}
var GA = gc("milliseconds"), QA = gc("seconds"), qA = gc("minutes"), KA = gc("hours"), ZA = gc("days"), XA = gc("months"), JA = gc("years");
function ez() {
  return Ei(this.days() / 7);
}
var Yl = Math.round, gd = {
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
function tz(r, o, l, c, d) {
  return d.relativeTime(o || 1, !!l, r, c);
}
function nz(r, o, l, c) {
  var d = ao(r).abs(), m = Yl(d.as("s")), v = Yl(d.as("m")), E = Yl(d.as("h")), w = Yl(d.as("d")), _ = Yl(d.as("M")), k = Yl(d.as("w")), D = Yl(d.as("y")), O = m <= l.ss && ["s", m] || m < l.s && ["ss", m] || v <= 1 && ["m"] || v < l.m && ["mm", v] || E <= 1 && ["h"] || E < l.h && ["hh", E] || w <= 1 && ["d"] || w < l.d && ["dd", w];
  return l.w != null && (O = O || k <= 1 && ["w"] || k < l.w && ["ww", k]), O = O || _ <= 1 && ["M"] || _ < l.M && ["MM", _] || D <= 1 && ["y"] || ["yy", D], O[2] = o, O[3] = +r > 0, O[4] = c, tz.apply(null, O);
}
function rz(r) {
  return r === void 0 ? Yl : typeof r == "function" ? (Yl = r, !0) : !1;
}
function az(r, o) {
  return gd[r] === void 0 ? !1 : o === void 0 ? gd[r] : (gd[r] = o, r === "s" && (gd.ss = o - 1), !0);
}
function iz(r, o) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var l = !1, c = gd, d, m;
  return typeof r == "object" && (o = r, r = !1), typeof r == "boolean" && (l = r), typeof o == "object" && (c = Object.assign({}, gd, o), o.s != null && o.ss == null && (c.ss = o.s - 1)), d = this.localeData(), m = nz(this, !l, c, d), l && (m = d.pastFuture(+this, m)), d.postformat(m);
}
var jx = Math.abs;
function pd(r) {
  return (r > 0) - (r < 0) || +r;
}
function Qy() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = jx(this._milliseconds) / 1e3, o = jx(this._days), l = jx(this._months), c, d, m, v, E = this.asSeconds(), w, _, k, D;
  return E ? (c = Ei(r / 60), d = Ei(c / 60), r %= 60, c %= 60, m = Ei(l / 12), l %= 12, v = r ? r.toFixed(3).replace(/\.?0+$/, "") : "", w = E < 0 ? "-" : "", _ = pd(this._months) !== pd(E) ? "-" : "", k = pd(this._days) !== pd(E) ? "-" : "", D = pd(this._milliseconds) !== pd(E) ? "-" : "", w + "P" + (m ? _ + m + "Y" : "") + (l ? _ + l + "M" : "") + (o ? k + o + "D" : "") + (d || c || r ? "T" : "") + (d ? D + d + "H" : "") + (c ? D + c + "M" : "") + (r ? D + v + "S" : "")) : "P0D";
}
var _t = Wy.prototype;
_t.isValid = Zj;
_t.abs = OA;
_t.add = MA;
_t.subtract = LA;
_t.as = jA;
_t.asMilliseconds = AA;
_t.asSeconds = zA;
_t.asMinutes = FA;
_t.asHours = PA;
_t.asDays = HA;
_t.asWeeks = IA;
_t.asMonths = YA;
_t.asQuarters = $A;
_t.asYears = VA;
_t.valueOf = UA;
_t._bubble = NA;
_t.clone = BA;
_t.get = WA;
_t.milliseconds = GA;
_t.seconds = QA;
_t.minutes = qA;
_t.hours = KA;
_t.days = ZA;
_t.weeks = ez;
_t.months = XA;
_t.years = JA;
_t.humanize = iz;
_t.toISOString = Qy;
_t.toString = Qy;
_t.toJSON = Qy;
_t.locale = hk;
_t.localeData = mk;
_t.toIsoString = Ci(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Qy
);
_t.lang = vk;
Be("X", 0, 0, "unix");
Be("x", 0, 0, "valueOf");
De("x", Yy);
De("X", k2);
$t("X", function(r, o, l) {
  l._d = new Date(parseFloat(r) * 1e3);
});
$t("x", function(r, o, l) {
  l._d = new Date(vt(r));
});
//! moment.js
ve.version = "2.29.4";
o2(on);
ve.fn = ce;
ve.min = Gj;
ve.max = Qj;
ve.now = qj;
ve.utc = Go;
ve.unix = EA;
ve.months = _A;
ve.isDate = lv;
ve.locale = Js;
ve.invalid = zy;
ve.duration = ao;
ve.isMoment = ro;
ve.weekdays = kA;
ve.parseZone = CA;
ve.localeData = Gl;
ve.isDuration = yy;
ve.monthsShort = TA;
ve.weekdaysMin = DA;
ve.defineLocale = Rw;
ve.updateLocale = Cj;
ve.locales = _j;
ve.weekdaysShort = RA;
ve.normalizeUnits = _i;
ve.relativeTimeRounding = rz;
ve.relativeTimeThreshold = az;
ve.calendarFormat = xU;
ve.prototype = ce;
ve.HTML5_FMT = {
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
function oz(r, o = 300) {
  let l;
  return function(...c) {
    clearTimeout(l), l = setTimeout(() => {
      r.apply(this, c);
    }, o);
  };
}
const Ux = (r, o, l, c = !1) => {
  var v, E, w, _;
  const d = r.clientWidth, m = r.clientHeight;
  if ((v = o.current) == null || v.setAttribute("viewBox", `0 0 ${d} ${m}`), (E = o.current) == null || E.setAttribute("width", String(d)), !c) {
    (w = o.current) == null || w.setAttribute("height", String(m)), l({
      height: m,
      width: d
    });
    return;
  }
  (_ = o.current) == null || _.setAttribute("height", String(m)), l((k) => ({
    ...k,
    width: d
  }));
}, OP = ({
  type: r,
  width: o,
  height: l,
  hide: c,
  data: d,
  children: m,
  snap: v = !1
}) => {
  const E = En(null), [w, _] = bn({
    width: o ?? 0,
    height: l ?? 0
  }), k = En(null), D = En(null), O = eu(() => c ? [...d].filter((N) => (c.forEach((W) => delete N[W]), N)) : d, [c, d]);
  console.log(w), wd(() => {
    var W;
    const N = (W = E == null ? void 0 : E.current) == null ? void 0 : W.parentNode;
    return window == null || window.addEventListener(
      "resize",
      oz(
        () => Ux(N, E, _, l !== void 0)
      )
    ), (!o || !l) && Ux(N, E, _, l !== void 0), () => N == null ? void 0 : N.removeEventListener(
      "resize",
      () => Ux(N, E, () => {
      }, l !== void 0)
    );
  }, [_, o, l]);
  const F = Math.max(
    ...d.map((N) => Math.max(...Object.values(N)))
  );
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        ref: k,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ P.jsxs(
      "svg",
      {
        ref: E,
        className: `chart ${r}`,
        viewBox: `0 0 ${o ?? 0} ${l ?? 0}`,
        width: w.width,
        height: w.height,
        onMouseMove: (N) => {
          if (D.current && E.current && k.current) {
            const W = D.current.style, ue = N.clientX, de = E.current.getBoundingClientRect().left, q = E.current.getBoundingClientRect().top;
            if (W.opacity = "1", v) {
              const J = w.width / (d.length * 4), we = Array.from({
                length: d.length
              }).map((Fe, Qe) => Math.abs(
                ue - de - J * Qe - w.width / d.length * Qe
              )), pe = we.indexOf(
                Math.min(...we)
              ), me = w.width / d.length * pe + J * pe;
              W.transform = `translate(${me}px, 0px)`;
            } else
              W.transform = `translate(${N.clientX - de}px, 0px)`, W.transition = "none";
            if (k.current.innerHTML === "") {
              k.current.style.opacity = "0";
              return;
            }
            const X = N.clientX - de, se = k.current.clientWidth;
            k.current.style.opacity = "1";
            let re = X + 20;
            const G = N.clientY - q + 20;
            k.current.offsetLeft + X + se + 20 > window.innerWidth && (re = X - se - 20), k.current.style.transform = `translate(${re}px, ${G}px)`;
          }
        },
        onMouseLeave: () => {
          k.current && D.current && (k.current.innerHTML = "", k.current.style.opacity = "0", D.current.style.opacity = "0");
        },
        children: [
          m({
            currentSize: w,
            tooltipRef: k,
            data: O(),
            maxItemValue: F,
            lineRef: D
          }),
          /* @__PURE__ */ P.jsx(
            "line",
            {
              ref: D,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: l,
              strokeDasharray: 8,
              style: { stroke: "#ded", strokeWidth: "2px" }
            }
          )
        ]
      }
    )
  ] });
};
var tu = Dr;
const qh = /^[a-z0-9]+(-[a-z0-9]+)*$/, qy = (r, o, l, c = "") => {
  const d = r.split(":");
  if (r.slice(0, 1) === "@") {
    if (d.length < 2 || d.length > 3)
      return null;
    c = d.shift().slice(1);
  }
  if (d.length > 3 || !d.length)
    return null;
  if (d.length > 1) {
    const E = d.pop(), w = d.pop(), _ = {
      // Allow provider without '@': "provider:prefix:name"
      provider: d.length > 0 ? d[0] : c,
      prefix: w,
      name: E
    };
    return o && !xy(_) ? null : _;
  }
  const m = d[0], v = m.split("-");
  if (v.length > 1) {
    const E = {
      provider: c,
      prefix: v.shift(),
      name: v.join("-")
    };
    return o && !xy(E) ? null : E;
  }
  if (l && c === "") {
    const E = {
      provider: c,
      prefix: "",
      name: m
    };
    return o && !xy(E, l) ? null : E;
  }
  return null;
}, xy = (r, o) => r ? !!((r.provider === "" || r.provider.match(qh)) && (o && r.prefix === "" || r.prefix.match(qh)) && r.name.match(qh)) : !1, kk = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Oy = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), zw = Object.freeze({
  ...kk,
  ...Oy
}), tw = Object.freeze({
  ...zw,
  body: "",
  hidden: !1
});
function lz(r, o) {
  const l = {};
  !r.hFlip != !o.hFlip && (l.hFlip = !0), !r.vFlip != !o.vFlip && (l.vFlip = !0);
  const c = ((r.rotate || 0) + (o.rotate || 0)) % 4;
  return c && (l.rotate = c), l;
}
function I_(r, o) {
  const l = lz(r, o);
  for (const c in tw)
    c in Oy ? c in r && !(c in l) && (l[c] = Oy[c]) : c in o ? l[c] = o[c] : c in r && (l[c] = r[c]);
  return l;
}
function sz(r, o) {
  const l = r.icons, c = r.aliases || /* @__PURE__ */ Object.create(null), d = /* @__PURE__ */ Object.create(null);
  function m(v) {
    if (l[v])
      return d[v] = [];
    if (!(v in d)) {
      d[v] = null;
      const E = c[v] && c[v].parent, w = E && m(E);
      w && (d[v] = [E].concat(w));
    }
    return d[v];
  }
  return (o || Object.keys(l).concat(Object.keys(c))).forEach(m), d;
}
function uz(r, o, l) {
  const c = r.icons, d = r.aliases || /* @__PURE__ */ Object.create(null);
  let m = {};
  function v(E) {
    m = I_(
      c[E] || d[E],
      m
    );
  }
  return v(o), l.forEach(v), I_(r, m);
}
function Rk(r, o) {
  const l = [];
  if (typeof r != "object" || typeof r.icons != "object")
    return l;
  r.not_found instanceof Array && r.not_found.forEach((d) => {
    o(d, null), l.push(d);
  });
  const c = sz(r);
  for (const d in c) {
    const m = c[d];
    m && (o(d, uz(r, d, m)), l.push(d));
  }
  return l;
}
const cz = {
  provider: "",
  aliases: {},
  not_found: {},
  ...kk
};
function Ax(r, o) {
  for (const l in o)
    if (l in r && typeof r[l] != typeof o[l])
      return !1;
  return !0;
}
function Dk(r) {
  if (typeof r != "object" || r === null)
    return null;
  const o = r;
  if (typeof o.prefix != "string" || !r.icons || typeof r.icons != "object" || !Ax(r, cz))
    return null;
  const l = o.icons;
  for (const d in l) {
    const m = l[d];
    if (!d.match(qh) || typeof m.body != "string" || !Ax(
      m,
      tw
    ))
      return null;
  }
  const c = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const d in c) {
    const m = c[d], v = m.parent;
    if (!d.match(qh) || typeof v != "string" || !l[v] && !c[v] || !Ax(
      m,
      tw
    ))
      return null;
  }
  return o;
}
const Y_ = /* @__PURE__ */ Object.create(null);
function fz(r, o) {
  return {
    provider: r,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function vc(r, o) {
  const l = Y_[r] || (Y_[r] = /* @__PURE__ */ Object.create(null));
  return l[o] || (l[o] = fz(r, o));
}
function Fw(r, o) {
  return Dk(o) ? Rk(o, (l, c) => {
    c ? r.icons[l] = c : r.missing.add(l);
  }) : [];
}
function dz(r, o, l) {
  try {
    if (typeof l.body == "string")
      return r.icons[o] = { ...l }, !0;
  } catch {
  }
  return !1;
}
let nv = !1;
function Ok(r) {
  return typeof r == "boolean" && (nv = r), nv;
}
function pz(r) {
  const o = typeof r == "string" ? qy(r, !0, nv) : r;
  if (o) {
    const l = vc(o.provider, o.prefix), c = o.name;
    return l.icons[c] || (l.missing.has(c) ? null : void 0);
  }
}
function hz(r, o) {
  const l = qy(r, !0, nv);
  if (!l)
    return !1;
  const c = vc(l.provider, l.prefix);
  return dz(c, l.name, o);
}
function vz(r, o) {
  if (typeof r != "object")
    return !1;
  if (typeof o != "string" && (o = r.provider || ""), nv && !o && !r.prefix) {
    let d = !1;
    return Dk(r) && (r.prefix = "", Rk(r, (m, v) => {
      v && hz(m, v) && (d = !0);
    })), d;
  }
  const l = r.prefix;
  if (!xy({
    provider: o,
    prefix: l,
    name: "a"
  }))
    return !1;
  const c = vc(o, l);
  return !!Fw(c, r);
}
const Mk = Object.freeze({
  width: null,
  height: null
}), Lk = Object.freeze({
  // Dimensions
  ...Mk,
  // Transformations
  ...Oy
}), mz = /(-?[0-9.]*[0-9]+[0-9.]*)/g, gz = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function $_(r, o, l) {
  if (o === 1)
    return r;
  if (l = l || 100, typeof r == "number")
    return Math.ceil(r * o * l) / l;
  if (typeof r != "string")
    return r;
  const c = r.split(mz);
  if (c === null || !c.length)
    return r;
  const d = [];
  let m = c.shift(), v = gz.test(m);
  for (; ; ) {
    if (v) {
      const E = parseFloat(m);
      isNaN(E) ? d.push(m) : d.push(Math.ceil(E * o * l) / l);
    } else
      d.push(m);
    if (m = c.shift(), m === void 0)
      return d.join("");
    v = !v;
  }
}
const yz = (r) => r === "unset" || r === "undefined" || r === "none";
function Sz(r, o) {
  const l = {
    ...zw,
    ...r
  }, c = {
    ...Lk,
    ...o
  }, d = {
    left: l.left,
    top: l.top,
    width: l.width,
    height: l.height
  };
  let m = l.body;
  [l, c].forEach((N) => {
    const W = [], ue = N.hFlip, de = N.vFlip;
    let q = N.rotate;
    ue ? de ? q += 2 : (W.push(
      "translate(" + (d.width + d.left).toString() + " " + (0 - d.top).toString() + ")"
    ), W.push("scale(-1 1)"), d.top = d.left = 0) : de && (W.push(
      "translate(" + (0 - d.left).toString() + " " + (d.height + d.top).toString() + ")"
    ), W.push("scale(1 -1)"), d.top = d.left = 0);
    let X;
    switch (q < 0 && (q -= Math.floor(q / 4) * 4), q = q % 4, q) {
      case 1:
        X = d.height / 2 + d.top, W.unshift(
          "rotate(90 " + X.toString() + " " + X.toString() + ")"
        );
        break;
      case 2:
        W.unshift(
          "rotate(180 " + (d.width / 2 + d.left).toString() + " " + (d.height / 2 + d.top).toString() + ")"
        );
        break;
      case 3:
        X = d.width / 2 + d.left, W.unshift(
          "rotate(-90 " + X.toString() + " " + X.toString() + ")"
        );
        break;
    }
    q % 2 === 1 && (d.left !== d.top && (X = d.left, d.left = d.top, d.top = X), d.width !== d.height && (X = d.width, d.width = d.height, d.height = X)), W.length && (m = '<g transform="' + W.join(" ") + '">' + m + "</g>");
  });
  const v = c.width, E = c.height, w = d.width, _ = d.height;
  let k, D;
  v === null ? (D = E === null ? "1em" : E === "auto" ? _ : E, k = $_(D, w / _)) : (k = v === "auto" ? w : v, D = E === null ? $_(k, _ / w) : E === "auto" ? _ : E);
  const O = {}, F = (N, W) => {
    yz(W) || (O[N] = W.toString());
  };
  return F("width", k), F("height", D), O.viewBox = d.left.toString() + " " + d.top.toString() + " " + w.toString() + " " + _.toString(), {
    attributes: O,
    body: m
  };
}
const xz = /\sid="(\S+)"/g, wz = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let bz = 0;
function Ez(r, o = wz) {
  const l = [];
  let c;
  for (; c = xz.exec(r); )
    l.push(c[1]);
  if (!l.length)
    return r;
  const d = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return l.forEach((m) => {
    const v = typeof o == "function" ? o(m) : o + (bz++).toString(), E = m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = r.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + E + ')([")]|\\.[a-z])', "g"),
      "$1" + v + d + "$3"
    );
  }), r = r.replace(new RegExp(d, "g"), ""), r;
}
const nw = /* @__PURE__ */ Object.create(null);
function Cz(r, o) {
  nw[r] = o;
}
function rw(r) {
  return nw[r] || nw[""];
}
function Pw(r) {
  let o;
  if (typeof r.resources == "string")
    o = [r.resources];
  else if (o = r.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
    // Root path
    path: r.path || "/",
    // URL length limit
    maxURL: r.maxURL || 500,
    // Timeout before next host is used.
    rotate: r.rotate || 750,
    // Timeout before failing query.
    timeout: r.timeout || 5e3,
    // Randomise default API end point.
    random: r.random === !0,
    // Start index
    index: r.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: r.dataAfterTimeout !== !1
  };
}
const Hw = /* @__PURE__ */ Object.create(null), Vh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], wy = [];
for (; Vh.length > 0; )
  Vh.length === 1 || Math.random() > 0.5 ? wy.push(Vh.shift()) : wy.push(Vh.pop());
Hw[""] = Pw({
  resources: ["https://api.iconify.design"].concat(wy)
});
function _z(r, o) {
  const l = Pw(o);
  return l === null ? !1 : (Hw[r] = l, !0);
}
function Iw(r) {
  return Hw[r];
}
const Tz = () => {
  let r;
  try {
    if (r = fetch, typeof r == "function")
      return r;
  } catch {
  }
};
let V_ = Tz();
function kz(r, o) {
  const l = Iw(r);
  if (!l)
    return 0;
  let c;
  if (!l.maxURL)
    c = 0;
  else {
    let d = 0;
    l.resources.forEach((v) => {
      d = Math.max(d, v.length);
    });
    const m = o + ".json?icons=";
    c = l.maxURL - d - l.path.length - m.length;
  }
  return c;
}
function Rz(r) {
  return r === 404;
}
const Dz = (r, o, l) => {
  const c = [], d = kz(r, o), m = "icons";
  let v = {
    type: m,
    provider: r,
    prefix: o,
    icons: []
  }, E = 0;
  return l.forEach((w, _) => {
    E += w.length + 1, E >= d && _ > 0 && (c.push(v), v = {
      type: m,
      provider: r,
      prefix: o,
      icons: []
    }, E = w.length), v.icons.push(w);
  }), c.push(v), c;
};
function Oz(r) {
  if (typeof r == "string") {
    const o = Iw(r);
    if (o)
      return o.path;
  }
  return "/";
}
const Mz = (r, o, l) => {
  if (!V_) {
    l("abort", 424);
    return;
  }
  let c = Oz(o.provider);
  switch (o.type) {
    case "icons": {
      const m = o.prefix, E = o.icons.join(","), w = new URLSearchParams({
        icons: E
      });
      c += m + ".json?" + w.toString();
      break;
    }
    case "custom": {
      const m = o.uri;
      c += m.slice(0, 1) === "/" ? m.slice(1) : m;
      break;
    }
    default:
      l("abort", 400);
      return;
  }
  let d = 503;
  V_(r + c).then((m) => {
    const v = m.status;
    if (v !== 200) {
      setTimeout(() => {
        l(Rz(v) ? "abort" : "next", v);
      });
      return;
    }
    return d = 501, m.json();
  }).then((m) => {
    if (typeof m != "object" || m === null) {
      setTimeout(() => {
        m === 404 ? l("abort", m) : l("next", d);
      });
      return;
    }
    setTimeout(() => {
      l("success", m);
    });
  }).catch(() => {
    l("next", d);
  });
}, Lz = {
  prepare: Dz,
  send: Mz
};
function Nz(r) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, l = /* @__PURE__ */ Object.create(null);
  r.sort((d, m) => d.provider !== m.provider ? d.provider.localeCompare(m.provider) : d.prefix !== m.prefix ? d.prefix.localeCompare(m.prefix) : d.name.localeCompare(m.name));
  let c = {
    provider: "",
    prefix: "",
    name: ""
  };
  return r.forEach((d) => {
    if (c.name === d.name && c.prefix === d.prefix && c.provider === d.provider)
      return;
    c = d;
    const m = d.provider, v = d.prefix, E = d.name, w = l[m] || (l[m] = /* @__PURE__ */ Object.create(null)), _ = w[v] || (w[v] = vc(m, v));
    let k;
    E in _.icons ? k = o.loaded : v === "" || _.missing.has(E) ? k = o.missing : k = o.pending;
    const D = {
      provider: m,
      prefix: v,
      name: E
    };
    k.push(D);
  }), o;
}
function Nk(r, o) {
  r.forEach((l) => {
    const c = l.loaderCallbacks;
    c && (l.loaderCallbacks = c.filter((d) => d.id !== o));
  });
}
function jz(r) {
  r.pendingCallbacksFlag || (r.pendingCallbacksFlag = !0, setTimeout(() => {
    r.pendingCallbacksFlag = !1;
    const o = r.loaderCallbacks ? r.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let l = !1;
    const c = r.provider, d = r.prefix;
    o.forEach((m) => {
      const v = m.icons, E = v.pending.length;
      v.pending = v.pending.filter((w) => {
        if (w.prefix !== d)
          return !0;
        const _ = w.name;
        if (r.icons[_])
          v.loaded.push({
            provider: c,
            prefix: d,
            name: _
          });
        else if (r.missing.has(_))
          v.missing.push({
            provider: c,
            prefix: d,
            name: _
          });
        else
          return l = !0, !0;
        return !1;
      }), v.pending.length !== E && (l || Nk([r], m.id), m.callback(
        v.loaded.slice(0),
        v.missing.slice(0),
        v.pending.slice(0),
        m.abort
      ));
    });
  }));
}
let Uz = 0;
function Az(r, o, l) {
  const c = Uz++, d = Nk.bind(null, l, c);
  if (!o.pending.length)
    return d;
  const m = {
    id: c,
    icons: o,
    callback: r,
    abort: d
  };
  return l.forEach((v) => {
    (v.loaderCallbacks || (v.loaderCallbacks = [])).push(m);
  }), d;
}
function zz(r, o = !0, l = !1) {
  const c = [];
  return r.forEach((d) => {
    const m = typeof d == "string" ? qy(d, o, l) : d;
    m && c.push(m);
  }), c;
}
var Fz = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Pz(r, o, l, c) {
  const d = r.resources.length, m = r.random ? Math.floor(Math.random() * d) : r.index;
  let v;
  if (r.random) {
    let G = r.resources.slice(0);
    for (v = []; G.length > 1; ) {
      const J = Math.floor(Math.random() * G.length);
      v.push(G[J]), G = G.slice(0, J).concat(G.slice(J + 1));
    }
    v = v.concat(G);
  } else
    v = r.resources.slice(m).concat(r.resources.slice(0, m));
  const E = Date.now();
  let w = "pending", _ = 0, k, D = null, O = [], F = [];
  typeof c == "function" && F.push(c);
  function N() {
    D && (clearTimeout(D), D = null);
  }
  function W() {
    w === "pending" && (w = "aborted"), N(), O.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), O = [];
  }
  function ue(G, J) {
    J && (F = []), typeof G == "function" && F.push(G);
  }
  function de() {
    return {
      startTime: E,
      payload: o,
      status: w,
      queriesSent: _,
      queriesPending: O.length,
      subscribe: ue,
      abort: W
    };
  }
  function q() {
    w = "failed", F.forEach((G) => {
      G(void 0, k);
    });
  }
  function X() {
    O.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), O = [];
  }
  function se(G, J, we) {
    const pe = J !== "success";
    switch (O = O.filter((me) => me !== G), w) {
      case "pending":
        break;
      case "failed":
        if (pe || !r.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (J === "abort") {
      k = we, q();
      return;
    }
    if (pe) {
      k = we, O.length || (v.length ? re() : q());
      return;
    }
    if (N(), X(), !r.random) {
      const me = r.resources.indexOf(G.resource);
      me !== -1 && me !== r.index && (r.index = me);
    }
    w = "completed", F.forEach((me) => {
      me(we);
    });
  }
  function re() {
    if (w !== "pending")
      return;
    N();
    const G = v.shift();
    if (G === void 0) {
      if (O.length) {
        D = setTimeout(() => {
          N(), w === "pending" && (X(), q());
        }, r.timeout);
        return;
      }
      q();
      return;
    }
    const J = {
      status: "pending",
      resource: G,
      callback: (we, pe) => {
        se(J, we, pe);
      }
    };
    O.push(J), _++, D = setTimeout(re, r.rotate), l(G, o, J.callback);
  }
  return setTimeout(re), de;
}
function jk(r) {
  const o = {
    ...Fz,
    ...r
  };
  let l = [];
  function c() {
    l = l.filter((E) => E().status === "pending");
  }
  function d(E, w, _) {
    const k = Pz(
      o,
      E,
      w,
      (D, O) => {
        c(), _ && _(D, O);
      }
    );
    return l.push(k), k;
  }
  function m(E) {
    return l.find((w) => E(w)) || null;
  }
  return {
    query: d,
    find: m,
    setIndex: (E) => {
      o.index = E;
    },
    getIndex: () => o.index,
    cleanup: c
  };
}
function B_() {
}
const zx = /* @__PURE__ */ Object.create(null);
function Hz(r) {
  if (!zx[r]) {
    const o = Iw(r);
    if (!o)
      return;
    const l = jk(o), c = {
      config: o,
      redundancy: l
    };
    zx[r] = c;
  }
  return zx[r];
}
function Iz(r, o, l) {
  let c, d;
  if (typeof r == "string") {
    const m = rw(r);
    if (!m)
      return l(void 0, 424), B_;
    d = m.send;
    const v = Hz(r);
    v && (c = v.redundancy);
  } else {
    const m = Pw(r);
    if (m) {
      c = jk(m);
      const v = r.resources ? r.resources[0] : "", E = rw(v);
      E && (d = E.send);
    }
  }
  return !c || !d ? (l(void 0, 424), B_) : c.query(o, d, l)().abort;
}
const W_ = "iconify2", rv = "iconify", Uk = rv + "-count", G_ = rv + "-version", Ak = 36e5, Yz = 168;
function aw(r, o) {
  try {
    return r.getItem(o);
  } catch {
  }
}
function Yw(r, o, l) {
  try {
    return r.setItem(o, l), !0;
  } catch {
  }
}
function Q_(r, o) {
  try {
    r.removeItem(o);
  } catch {
  }
}
function iw(r, o) {
  return Yw(r, Uk, o.toString());
}
function ow(r) {
  return parseInt(aw(r, Uk)) || 0;
}
const Ky = {
  local: !0,
  session: !0
}, zk = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let $w = !1;
function $z(r) {
  $w = r;
}
let dy = typeof window > "u" ? {} : window;
function Fk(r) {
  const o = r + "Storage";
  try {
    if (dy && dy[o] && typeof dy[o].length == "number")
      return dy[o];
  } catch {
  }
  Ky[r] = !1;
}
function Pk(r, o) {
  const l = Fk(r);
  if (!l)
    return;
  const c = aw(l, G_);
  if (c !== W_) {
    if (c) {
      const E = ow(l);
      for (let w = 0; w < E; w++)
        Q_(l, rv + w.toString());
    }
    Yw(l, G_, W_), iw(l, 0);
    return;
  }
  const d = Math.floor(Date.now() / Ak) - Yz, m = (E) => {
    const w = rv + E.toString(), _ = aw(l, w);
    if (typeof _ == "string") {
      try {
        const k = JSON.parse(_);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > d && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, E))
          return !0;
      } catch {
      }
      Q_(l, w);
    }
  };
  let v = ow(l);
  for (let E = v - 1; E >= 0; E--)
    m(E) || (E === v - 1 ? (v--, iw(l, v)) : zk[r].add(E));
}
function Hk() {
  if (!$w) {
    $z(!0);
    for (const r in Ky)
      Pk(r, (o) => {
        const l = o.data, c = o.provider, d = l.prefix, m = vc(
          c,
          d
        );
        if (!Fw(m, l).length)
          return !1;
        const v = l.lastModified || -1;
        return m.lastModifiedCached = m.lastModifiedCached ? Math.min(m.lastModifiedCached, v) : v, !0;
      });
  }
}
function Vz(r, o) {
  const l = r.lastModifiedCached;
  if (
    // Matches or newer
    l && l >= o
  )
    return l === o;
  if (r.lastModifiedCached = o, l)
    for (const c in Ky)
      Pk(c, (d) => {
        const m = d.data;
        return d.provider !== r.provider || m.prefix !== r.prefix || m.lastModified === o;
      });
  return !0;
}
function Bz(r, o) {
  $w || Hk();
  function l(c) {
    let d;
    if (!Ky[c] || !(d = Fk(c)))
      return;
    const m = zk[c];
    let v;
    if (m.size)
      m.delete(v = Array.from(m).shift());
    else if (v = ow(d), !iw(d, v + 1))
      return;
    const E = {
      cached: Math.floor(Date.now() / Ak),
      provider: r.provider,
      data: o
    };
    return Yw(
      d,
      rv + v.toString(),
      JSON.stringify(E)
    );
  }
  o.lastModified && !Vz(r, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), l("local") || l("session"));
}
function q_() {
}
function Wz(r) {
  r.iconsLoaderFlag || (r.iconsLoaderFlag = !0, setTimeout(() => {
    r.iconsLoaderFlag = !1, jz(r);
  }));
}
function Gz(r, o) {
  r.iconsToLoad ? r.iconsToLoad = r.iconsToLoad.concat(o).sort() : r.iconsToLoad = o, r.iconsQueueFlag || (r.iconsQueueFlag = !0, setTimeout(() => {
    r.iconsQueueFlag = !1;
    const { provider: l, prefix: c } = r, d = r.iconsToLoad;
    delete r.iconsToLoad;
    let m;
    if (!d || !(m = rw(l)))
      return;
    m.prepare(l, c, d).forEach((E) => {
      Iz(l, E, (w) => {
        if (typeof w != "object")
          E.icons.forEach((_) => {
            r.missing.add(_);
          });
        else
          try {
            const _ = Fw(
              r,
              w
            );
            if (!_.length)
              return;
            const k = r.pendingIcons;
            k && _.forEach((D) => {
              k.delete(D);
            }), Bz(r, w);
          } catch (_) {
            console.error(_);
          }
        Wz(r);
      });
    });
  }));
}
const Qz = (r, o) => {
  const l = zz(r, !0, Ok()), c = Nz(l);
  if (!c.pending.length) {
    let w = !0;
    return o && setTimeout(() => {
      w && o(
        c.loaded,
        c.missing,
        c.pending,
        q_
      );
    }), () => {
      w = !1;
    };
  }
  const d = /* @__PURE__ */ Object.create(null), m = [];
  let v, E;
  return c.pending.forEach((w) => {
    const { provider: _, prefix: k } = w;
    if (k === E && _ === v)
      return;
    v = _, E = k, m.push(vc(_, k));
    const D = d[_] || (d[_] = /* @__PURE__ */ Object.create(null));
    D[k] || (D[k] = []);
  }), c.pending.forEach((w) => {
    const { provider: _, prefix: k, name: D } = w, O = vc(_, k), F = O.pendingIcons || (O.pendingIcons = /* @__PURE__ */ new Set());
    F.has(D) || (F.add(D), d[_][k].push(D));
  }), m.forEach((w) => {
    const { provider: _, prefix: k } = w;
    d[_][k].length && Gz(w, d[_][k]);
  }), o ? Az(o, c, m) : q_;
};
function qz(r, o) {
  const l = {
    ...r
  };
  for (const c in o) {
    const d = o[c], m = typeof d;
    c in Mk ? (d === null || d && (m === "string" || m === "number")) && (l[c] = d) : m === typeof l[c] && (l[c] = c === "rotate" ? d % 4 : d);
  }
  return l;
}
const Kz = /[\s,]+/;
function Zz(r, o) {
  o.split(Kz).forEach((l) => {
    switch (l.trim()) {
      case "horizontal":
        r.hFlip = !0;
        break;
      case "vertical":
        r.vFlip = !0;
        break;
    }
  });
}
function Xz(r, o = 0) {
  const l = r.replace(/^-?[0-9.]*/, "");
  function c(d) {
    for (; d < 0; )
      d += 4;
    return d % 4;
  }
  if (l === "") {
    const d = parseInt(r);
    return isNaN(d) ? 0 : c(d);
  } else if (l !== r) {
    let d = 0;
    switch (l) {
      case "%":
        d = 25;
        break;
      case "deg":
        d = 90;
    }
    if (d) {
      let m = parseFloat(r.slice(0, r.length - l.length));
      return isNaN(m) ? 0 : (m = m / d, m % 1 === 0 ? c(m) : 0);
    }
  }
  return o;
}
function Jz(r, o) {
  let l = r.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const c in o)
    l += " " + c + '="' + o[c] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + l + ">" + r + "</svg>";
}
function eF(r) {
  return r.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function tF(r) {
  return "data:image/svg+xml," + eF(r);
}
function nF(r) {
  return 'url("' + tF(r) + '")';
}
let Kh;
function rF() {
  try {
    Kh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (r) => r
    });
  } catch {
    Kh = null;
  }
}
function aF(r) {
  return Kh === void 0 && rF(), Kh ? Kh.createHTML(r) : r;
}
const Ik = {
  ...Lk,
  inline: !1
}, iF = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, oF = {
  display: "inline-block"
}, lw = {
  backgroundColor: "currentColor"
}, Yk = {
  backgroundColor: "transparent"
}, K_ = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Z_ = {
  WebkitMask: lw,
  mask: lw,
  background: Yk
};
for (const r in Z_) {
  const o = Z_[r];
  for (const l in K_)
    o[r + l] = K_[l];
}
const lF = {
  ...Ik,
  inline: !0
};
function X_(r) {
  return r + (r.match(/^[-0-9.]+$/) ? "px" : "");
}
const sF = (r, o, l, c) => {
  const d = l ? lF : Ik, m = qz(d, o), v = o.mode || "svg", E = {}, w = o.style || {}, _ = {
    ...v === "svg" ? iF : {},
    ref: c
  };
  for (let de in o) {
    const q = o[de];
    if (q !== void 0)
      switch (de) {
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
          m[de] = q === !0 || q === "true" || q === 1;
          break;
        case "flip":
          typeof q == "string" && Zz(m, q);
          break;
        case "color":
          E.color = q;
          break;
        case "rotate":
          typeof q == "string" ? m[de] = Xz(q) : typeof q == "number" && (m[de] = q);
          break;
        case "ariaHidden":
        case "aria-hidden":
          q !== !0 && q !== "true" && delete _["aria-hidden"];
          break;
        default:
          d[de] === void 0 && (_[de] = q);
      }
  }
  const k = Sz(r, m), D = k.attributes;
  if (m.inline && (E.verticalAlign = "-0.125em"), v === "svg") {
    _.style = {
      ...E,
      ...w
    }, Object.assign(_, D);
    let de = 0, q = o.id;
    return typeof q == "string" && (q = q.replace(/-/g, "_")), _.dangerouslySetInnerHTML = {
      __html: aF(Ez(k.body, q ? () => q + "ID" + de++ : "iconifyReact"))
    }, tu.createElement("svg", _);
  }
  const { body: O, width: F, height: N } = r, W = v === "mask" || (v === "bg" ? !1 : O.indexOf("currentColor") !== -1), ue = Jz(O, {
    ...D,
    width: F + "",
    height: N + ""
  });
  return _.style = {
    ...E,
    "--svg": nF(ue),
    width: X_(D.width),
    height: X_(D.height),
    ...oF,
    ...W ? lw : Yk,
    ...w
  }, tu.createElement("span", _);
};
Ok(!0);
Cz("", Lz);
if (typeof document < "u" && typeof window < "u") {
  Hk();
  const r = window;
  if (r.IconifyPreload !== void 0) {
    const o = r.IconifyPreload, l = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((c) => {
      try {
        // Check if item is an object and not null/array
        (typeof c != "object" || c === null || c instanceof Array || // Check for 'icons' and 'prefix'
        typeof c.icons != "object" || typeof c.prefix != "string" || // Add icon set
        !vz(c)) && console.error(l);
      } catch {
        console.error(l);
      }
    });
  }
  if (r.IconifyProviders !== void 0) {
    const o = r.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let l in o) {
        const c = "IconifyProviders[" + l + "] is invalid.";
        try {
          const d = o[l];
          if (typeof d != "object" || !d || d.resources === void 0)
            continue;
          _z(l, d) || console.error(c);
        } catch {
          console.error(c);
        }
      }
  }
}
let $k = class extends tu.Component {
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
    const l = this.state, c = this.props.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string") {
      this._icon = "", this._abortLoading(), (o || l.icon === null) && this._setData({
        data: c
      });
      return;
    }
    let d;
    if (typeof c != "string" || (d = qy(c, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const m = pz(d);
    if (!m) {
      (!this._loading || this._loading.name !== c) && (this._abortLoading(), this._icon = "", this._setData(null), m !== null && (this._loading = {
        name: c,
        abort: Qz([d], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== c || l.icon === null) {
      this._abortLoading(), this._icon = c;
      const v = ["iconify"];
      d.prefix !== "" && v.push("iconify--" + d.prefix), d.provider !== "" && v.push("iconify--" + d.provider), this._setData({
        data: m,
        classes: v
      }), this.props.onLoad && this.props.onLoad(c);
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
    const o = this.props, l = this.state.icon;
    if (l === null)
      return o.children ? o.children : tu.createElement("span", {});
    let c = o;
    return l.classes && (c = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + l.classes.join(" ")
    }), sF({
      ...zw,
      ...l.data
    }, c, o._inline, o._ref);
  }
};
const uF = tu.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !1
  };
  return tu.createElement($k, c);
});
tu.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !0
  };
  return tu.createElement($k, c);
});
var mr = uF;
const cF = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const o = Math.random() * 16 | 0;
  return (r === "x" ? o : o & 3 | 8).toString(16);
}), fF = ({
  onChange: r,
  defaultValue: o,
  children: l,
  name: c,
  invalidText: d,
  placeholder: m,
  variant: v,
  icon: E,
  required: w = !0,
  className: _ = "",
  type: k = "text",
  id: D = cF(),
  ...O
}) => /* @__PURE__ */ P.jsxs("div", { className: `textfield ${v ? "bg-" + v : ""} ${_}`, children: [
  /* @__PURE__ */ P.jsx("label", { htmlFor: D, children: m ?? c ?? D }),
  /* @__PURE__ */ P.jsx(
    "input",
    {
      id: D,
      type: k,
      className: "input",
      name: c ?? D,
      onChange: r,
      defaultValue: o,
      placeholder: m ?? c ?? D ?? "",
      required: w,
      ...O
    }
  ),
  E && /* @__PURE__ */ P.jsx(mr, { icon: E }),
  w && /* @__PURE__ */ P.jsx("span", { className: "required", children: d ?? c ? `${c ?? D} should not be empty!` : "Should not be empty!" }),
  l && l
] }), LP = ({
  defaultShow: r = !1,
  ...o
}) => {
  const [l, c] = bn(r);
  return /* @__PURE__ */ P.jsx(P.Fragment, { children: /* @__PURE__ */ P.jsx(
    fF,
    {
      ...o,
      className: "textfield-password",
      type: l ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ P.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => c((d) => !d),
          children: /* @__PURE__ */ P.jsx(mr, { icon: l ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, dF = (r) => {
  console.log(r);
}, pF = (r) => {
  console.log(r);
}, hF = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], vF = ({
  defaultSelected: r,
  startDateRef: o,
  endDateRef: l,
  onClose: c
}) => {
  const [d, m] = bn(
    (r == null ? void 0 : r.end) === void 0 ? ve() : r.end
  ), [v, E] = bn(
    r === void 0 ? {
      start: null,
      end: null
    } : r
  ), w = d, _ = w.clone().startOf("month"), k = w.clone().endOf("month"), D = [], O = _.day(), F = k.day();
  for (let N = O - 1; N >= 0; N--)
    D.push(_.clone().subtract(N, "days"));
  for (let N = _.clone().add(1, "day"); N.isSameOrBefore(k); N.add(1, "day"))
    D.push(N.clone());
  for (let N = 1; N <= 6 - F + 1; N++)
    D.push(k.clone().add(N, "days"));
  return /* @__PURE__ */ P.jsx("div", { className: "dropdown", children: /* @__PURE__ */ P.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ P.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              m(
                (N) => N.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ P.jsx(mr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ P.jsx("button", { type: "button", className: "btn", children: w.format("MMM, YYYY") }),
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              m(
                (N) => N.clone().add(1, "month")
              );
            },
            disabled: d.clone().add(1, "month").isSameOrAfter(ve()),
            children: /* @__PURE__ */ P.jsx(mr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ P.jsx("ul", { className: "date-weekdays", children: hF.map((N) => /* @__PURE__ */ P.jsx("li", { children: /* @__PURE__ */ P.jsx("span", { children: N }) }, N)) })
    ] }),
    /* @__PURE__ */ P.jsx("ul", { className: "days-container", children: D.map((N, W) => {
      var se, re, G;
      let ue = "";
      const de = (se = v.start) != null && se.startOf("day").isSame(N) ? "selected start" : (G = (re = v.end) == null ? void 0 : re.startOf("day")) != null && G.isSame(N) ? "selected end" : "", q = N.format("MM") !== w.format("MM") ? "not-current" : "", X = N.isBetween(
        v.start,
        v.end
      ) ? "between" : "";
      return ue += q + de + X, /* @__PURE__ */ P.jsx("li", { children: /* @__PURE__ */ P.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var J;
            if (!(o.current === null || l.current === null)) {
              if (((J = v.start) == null ? void 0 : J.date()) === N.date()) {
                E({
                  start: null,
                  end: null
                }), o.current.value = "", l.current.value = "";
                return;
              }
              if (v.start === null)
                E((we) => ({
                  ...we,
                  start: N
                })), o.current.value = N.format("YYYY-MM-DD");
              else if (v.start !== null) {
                if (N.isBefore(v.start)) {
                  E((we) => ({
                    start: N,
                    end: we.start
                  })), o.current.value = N.format("YYYY-MM-DD"), l.current.value = v.start.format("YYYY-MM-DD");
                  return;
                }
                E((we) => ({
                  ...we,
                  end: N
                })), l.current.value = N.format("YYYY-MM-DD");
              }
            }
          },
          className: ue,
          disabled: N.isAfter(ve()),
          children: N.format("DD")
        }
      ) }, W);
    }) }),
    /* @__PURE__ */ P.jsx(
      "button",
      {
        type: "button",
        onClick: c,
        className: "btn btn-sm btn-primary",
        style: { alignSelf: "end" },
        children: "Done"
      }
    )
  ] }) });
}, NP = ({
  defaultSelected: r,
  onSearch: o,
  children: l
}) => {
  const [c, d] = bn(!1), m = En(null), v = En(null), E = {
    ref: m,
    type: "date",
    name: "start",
    onFocus: dF,
    onClick: () => {
      d((_) => !_);
    },
    autoComplete: "off",
    defaultValue: r ? r.start.format("YYYY-MM-DD") : ""
  }, w = {
    ref: v,
    type: "date",
    name: "end",
    onFocus: pF,
    onClick: () => {
      d((_) => !_);
    },
    autoComplete: "off",
    defaultValue: r != null && r.end ? r.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ P.jsx(P.Fragment, { children: /* @__PURE__ */ P.jsxs(
    "form",
    {
      className: "date-range-picker",
      onSubmit: (_) => {
        _.preventDefault();
        const k = new FormData(_.target), D = Object.fromEntries(k.entries()), O = {
          start: ve(D.start, "YYYY-MM-DD"),
          end: ve(D.end, "YYYY-MM-DD")
        };
        o == null || o(O);
      },
      children: [
        /* @__PURE__ */ P.jsxs("div", { className: "group rounded-box", children: [
          l({ startDateProps: E, endDateProps: w }),
          /* @__PURE__ */ P.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        c && /* @__PURE__ */ P.jsx(
          vF,
          {
            defaultSelected: r,
            startDateRef: m,
            endDateRef: v,
            onClose: () => d(!1)
          }
        )
      ]
    }
  ) });
}, mF = (r, o, l, c, d, m) => {
  let v = 0, E = !1;
  switch (r.key) {
    case "ArrowUp": {
      if (o === 0)
        return;
      v = o - 1, d.current[v].focus(), l(v), c.current = "";
      break;
    }
    case "ArrowDown": {
      if (o === m - 1)
        return;
      v = o + 1, d.current[v].focus(), c.current = "", l(v);
      break;
    }
    case "Backspace": {
      c.current = c.current.slice(0, -1), c.current.length > 0 && (E = !0);
      break;
    }
    default:
      r.key.length === 1 && isNaN(Number(r.key)) && (c.current += r.key, E = !0);
  }
  if (E) {
    const w = d.current.findIndex(
      (_) => _.innerText.toLowerCase().includes(c.current.toLowerCase())
    );
    if (w === -1)
      return;
    d.current[w].focus(), l(w);
  }
}, gF = (r) => typeof r == "object" ? /* @__PURE__ */ P.jsx("span", { children: Object.values(r)[0] }) : /* @__PURE__ */ P.jsx("span", { children: r }), Vw = ({
  items: r,
  selected: o,
  currentSelected: l,
  selector: c,
  onChange: d,
  labelExtractor: m,
  required: v = !0,
  showQty: E = 4,
  style: w = {},
  name: _ = "",
  position: k = "top",
  variant: D = "neutral",
  keyExtractor: O = gF
}) => {
  const [F, N] = bn(!1), [W, ue] = bn(
    r.findIndex(
      (G) => c ? G[c] === (l == null ? void 0 : l[c]) : G === l
    )
  );
  wd(() => {
    o && o !== W && ue(o);
  }, [o, W]);
  const [de, q] = bn(W), X = En(null), se = En(""), re = En([]);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: `select ${F ? "shadow-md" : ""} ${k}`,
      onBlur: () => {
      },
      style: w,
      children: [
        /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${D} btn-select ${F ? "active" : ""}`,
            onClick: () => {
              N((J) => !J);
              const G = l === void 0 ? 0 : W;
              q(G), setTimeout(() => {
                F || re.current[G].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ P.jsx("span", { className: W === -1 ? "not-selected" : "", children: W === -1 ? "Selecione uma das opções" : (m == null ? void 0 : m(r[W])) ?? O(r[W]) }),
              /* @__PURE__ */ P.jsx(mr, { icon: "eva:arrow-down-fill", vFlip: F })
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
            name: _,
            ref: X,
            required: v
          }
        ),
        F && /* @__PURE__ */ P.jsx(
          "ul",
          {
            className: `select-items${r.length > 4 ? " custom-scroll " : " "}bg-${D} shadow-md`,
            style: { "--select-items": E },
            children: r.map((G, J) => /* @__PURE__ */ P.jsx("li", { className: "item", children: /* @__PURE__ */ P.jsx(
              "button",
              {
                type: "button",
                className: `${J === W ? "active" : ""}`,
                ref: (we) => re.current[J] = we,
                tabIndex: 0,
                onClick: () => {
                  ue(J), d !== void 0 && d(J, r[J]), X.current && c && (X.current.value = String(r[J][c])), N(!1);
                },
                onMouseEnter: (we) => {
                  q(J), we.target.focus();
                },
                onMouseLeave: () => {
                  q(W);
                },
                onKeyDown: (we) => mF(
                  we,
                  de,
                  q,
                  se,
                  re,
                  r.length
                ),
                children: O(G)
              }
            ) }, J))
          }
        )
      ]
    }
  );
}, J_ = (r, o, l, c, d, m) => {
  let v = 0, E = !1;
  switch (r.key) {
    case "ArrowUp": {
      if (o === 0)
        return;
      v = o - 1, d.current[v].focus(), l(v), c.current = "";
      break;
    }
    case "ArrowDown": {
      if (o === m - 1)
        return;
      v = o + 1, d.current[v].focus(), c.current = "", l(v);
      break;
    }
    case "Backspace": {
      c.current = c.current.slice(0, -1), c.current.length > 0 && (E = !0);
      break;
    }
    default:
      r.key.length === 1 && isNaN(Number(r.key)) && (c.current += r.key, E = !0);
  }
  if (E) {
    const w = d.current.findIndex(
      (_) => _.innerText.toLowerCase().includes(c.current.toLowerCase())
    );
    if (w === -1)
      return;
    d.current[w].focus(), l(w);
  }
}, Bw = (r, o, l) => {
  let c;
  return (...d) => {
    const v = () => {
      c = null, l || r.apply(void 0, d);
    }, E = l && !c;
    clearTimeout(c), c = setTimeout(v, o), E && r.apply(void 0, d);
  };
}, yF = [
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
], SF = (r) => typeof r == "object" ? /* @__PURE__ */ P.jsx("span", { children: Object.values(r)[0] }) : /* @__PURE__ */ P.jsx("span", { children: r }), jP = ({
  items: r,
  selected: o,
  selector: l,
  onChange: c,
  labelExtractor: d,
  onAllChange: m = () => {
  },
  showQty: v = 10,
  style: E = {},
  position: w = "top",
  variant: _ = "neutral",
  keyExtractor: k = SF
}) => {
  const [D, O] = bn(!1), [F, N] = bn(o ?? []), [W, ue] = bn(
    "all"
  ), [de, q] = bn("");
  wd(() => {
    o && o !== F && N(o ?? []);
  }, [o, F]);
  const X = eu(() => {
    var me;
    const pe = [];
    for (let Fe = 0; Fe < r.length; Fe++) {
      if (!String(l ? (me = r[Fe]) == null ? void 0 : me[l] : r[Fe]).toLowerCase().includes(de))
        continue;
      if (W === "all") {
        pe.push(Fe);
        continue;
      }
      const Ze = F.includes(Fe);
      Ze && W === "selected" && pe.push(Fe), !Ze && W === "not-selected" && pe.push(Fe);
    }
    return pe;
  }, [r, de, l, W, F]), [se, re] = bn(0), G = En(null), J = En(""), we = En([]);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: `select multiselect ${D ? "shadow-md" : ""} ${w}`,
      onBlur: () => {
      },
      style: E,
      children: [
        /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${_} btn-select ${D ? "active" : ""}`,
            onClick: () => {
              O((pe) => !pe), re(0);
            },
            children: [
              /* @__PURE__ */ P.jsx("span", { className: F.length === 0 ? "not-selected" : "", children: F.length === 0 ? "Clique para selecionar" : (d == null ? void 0 : d(F)) ?? `${F.length} selecionados` }),
              /* @__PURE__ */ P.jsx(mr, { icon: "eva:arrow-down-fill", vFlip: D })
            ]
          }
        ),
        D && /* @__PURE__ */ P.jsxs(
          "ul",
          {
            className: `select-items${r.length > 4 ? " custom-scroll " : " "}bg-${_} shadow-md`,
            style: { "--select-items": v },
            children: [
              /* @__PURE__ */ P.jsx(
                "li",
                {
                  className: "group rounded-box",
                  style: { width: "fit-content", padding: "var(--spacing-xs)" },
                  children: yF.map((pe) => /* @__PURE__ */ P.jsx(
                    "button",
                    {
                      className: `btn no-bounce btn-${pe.mode === W ? "primary" : "neutral"} btn-sm`,
                      onClick: () => ue(pe.mode),
                      children: pe.label
                    },
                    pe.mode
                  ))
                }
              ),
              /* @__PURE__ */ P.jsx("li", { className: "search-bar", children: /* @__PURE__ */ P.jsx(
                "input",
                {
                  className: "input",
                  type: "input",
                  placeholder: "Buscar...",
                  onChange: Bw((pe) => {
                    q(pe.target.value.toLowerCase());
                  }, 300)
                }
              ) }),
              /* @__PURE__ */ P.jsx("li", { className: "item", children: /* @__PURE__ */ P.jsxs(
                "button",
                {
                  type: "button",
                  ref: (pe) => we.current[0] = pe,
                  className: `${F.length === r.length ? "active" : ""}`,
                  onMouseEnter: (pe) => {
                    re(0), pe.target.focus();
                  },
                  onClick: () => {
                    m(F.length !== r.length), F.length === r.length ? N([]) : N(r.map((pe, me) => me));
                  },
                  onKeyDown: (pe) => J_(
                    pe,
                    se,
                    re,
                    J,
                    we,
                    r.length
                  ),
                  tabIndex: 0,
                  children: [
                    /* @__PURE__ */ P.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "checkbox checkbox-secondary",
                        onChange: () => {
                          m(F.length !== r.length), F.length === r.length ? N([]) : N(r.map((pe, me) => me));
                        },
                        checked: F.length === r.length
                      }
                    ),
                    /* @__PURE__ */ P.jsx("span", { children: "Selecionar Tudo" })
                  ]
                }
              ) }),
              r.length === 0 || X().length === 0 && /* @__PURE__ */ P.jsx("li", { className: "item", style: { padding: "var(--spacing-xs)" }, children: /* @__PURE__ */ P.jsx("span", { children: "Nenhum item foi encontrado" }) }),
              r.map((pe, me) => {
                if (!X().includes(me))
                  return null;
                const Fe = F.includes(me);
                return /* @__PURE__ */ P.jsx("li", { className: "item", children: /* @__PURE__ */ P.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `${Fe ? "active" : ""}`,
                    ref: (Qe) => we.current[me + 1] = Qe,
                    tabIndex: 0,
                    onClick: () => {
                      N((Qe) => Fe ? Qe.filter((Ne) => Ne !== me) : [...Qe, me]), c !== void 0 && c(me, r[me]), G.current && l && (G.current.value = String(r[me][l]));
                    },
                    onMouseEnter: (Qe) => {
                      re(me), Qe.target.focus();
                    },
                    onMouseLeave: () => {
                      re(0);
                    },
                    onKeyDown: (Qe) => J_(
                      Qe,
                      se,
                      re,
                      J,
                      we,
                      X().length + 1
                    ),
                    children: [
                      /* @__PURE__ */ P.jsx(
                        "input",
                        {
                          type: "checkbox",
                          className: "checkbox checkbox-secondary",
                          checked: Fe ?? !1,
                          onChange: () => {
                            N((Qe) => Fe ? Qe.filter(
                              (Ne) => Ne !== me
                            ) : [...Qe, me]), c !== void 0 && c(me, r[me]), G.current && l && (G.current.value = String(r[me][l]));
                          }
                        }
                      ),
                      k(pe)
                    ]
                  }
                ) }, me);
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
ve.defineLocale("pt-br", {
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
const xF = [
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
ve.locale("pt-br");
const wF = {
  206: "Almoço",
  205: "Banheiro"
}, bF = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], EF = ({
  data: r,
  lastSevenDays: o
}) => /* @__PURE__ */ P.jsx("div", { className: "detailed-workday--period", children: o.map((l, c) => {
  const d = ve(l).format("DD [de] MMMM"), m = r.find(
    ({ date: w }) => ve(w).format("YYYY/MM/DD") === l.format("YYYY/MM/DD")
  );
  if (m === void 0)
    return /* @__PURE__ */ P.jsx("div", { className: "day", children: /* @__PURE__ */ P.jsx("span", { children: d }) }, c);
  const v = ve.utc(m.start).format("HH[h]mm"), E = ve.utc(m.finish).format("HH[h]mm");
  return /* @__PURE__ */ P.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ P.jsx("span", { children: d }),
    /* @__PURE__ */ P.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ P.jsxs("span", { className: "service-time", children: [
      v,
      " - ",
      E
    ] }),
    /* @__PURE__ */ P.jsxs("span", { className: "description", children: [
      m.description,
      "*"
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "breaks", children: m.breaks.map((w, _) => {
      const k = ve.utc(w.start).format("HH[h]mm"), D = ve.utc(w.finish).format("HH[h]mm");
      return /* @__PURE__ */ P.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ P.jsx("span", { className: "break-item--label", children: wF[String(w.type)] }),
        /* @__PURE__ */ P.jsxs("span", { className: "break-item--content", children: [
          k,
          " - ",
          D
        ] })
      ] }, _);
    }) })
  ] }, c);
}) }), UP = () => {
  const r = Array.from({ length: 7 }).map(
    (o, l) => ve().clone().subtract(7 - l, "days")
  );
  return /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ P.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ P.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ P.jsx(Vw, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ P.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ P.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ P.jsx("div", { className: "weekdays", children: r.map((o) => {
          const l = ve(o).day();
          return /* @__PURE__ */ P.jsx("span", { className: "", children: bF[l] });
        }) })
      ] }),
      xF.map((o, l) => /* @__PURE__ */ P.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ P.jsx("span", { children: o.agent.firstName }),
        /* @__PURE__ */ P.jsx(
          EF,
          {
            data: o.period,
            lastSevenDays: r
          },
          l
        )
      ] }, l))
    ] })
  ] });
}, AP = ({ logo: r, items: o }) => /* @__PURE__ */ P.jsxs("header", { className: "header", children: [
  r,
  o
] }), CF = (r, o) => {
  var d, m, v, E;
  const c = r.currentTarget.childNodes[1].childNodes;
  switch (r.key) {
    case "ArrowDown": {
      if (o.current === c.length - 1)
        return;
      o.current += 1;
      const w = (m = (d = c[o.current]) == null ? void 0 : d.firstChild) == null ? void 0 : m.firstChild;
      w !== null && w.focus();
      break;
    }
    case "ArrowUp": {
      if (o.current === 2)
        return;
      o.current -= 1;
      const w = (E = (v = c[o.current]) == null ? void 0 : v.firstChild) == null ? void 0 : E.firstChild;
      w !== null && w.focus();
      break;
    }
    case " ": {
      const w = r.target;
      w instanceof HTMLAnchorElement && w.click();
    }
  }
}, eT = (r, o, l, c, d, m = 0, v) => {
  r.current === null || o.current === null || (c.route === l && r.current.classList.add("active"), r.current.classList.contains("active") && c.route !== l && r.current.classList.remove("active"), v || (o.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${c.label}</span>
      </div>
    `, o.current.style.opacity = "1", o.current.style.top = `calc(48px * ${d + m})`), r.current.style.top = `calc(48px * ${d + m})`);
}, _F = (r, o, l, c, d, m, v) => {
  var E;
  {
    if (o.current === null || l.current === null)
      return;
    let w = -1;
    d || (l.current.innerHTML = "", l.current.style.opacity = "0"), m.forEach((_, k) => {
      r + _.route === c && (w = k, v !== null && k >= v && (w += m[v].submenus.length)), Object.hasOwnProperty.call(_, "submenus") && _.submenus.forEach((D, O) => {
        `${r}${_.route}${D.route}` === c && (v === k ? w = k + O + 1 : w = k);
      });
    }), (E = document.activeElement) == null || E.blur(), w > -1 && (o.current.style.top = `calc(48px * ${w})`, o.current.classList.add("active"));
  }
}, zP = ({
  data: r,
  itemLink: o,
  onSettings: l,
  onLogout: c,
  prefix: d = "",
  pathname: m = ""
}) => {
  const v = En(null), E = En(null), w = En(null), _ = En(3), [k, D] = bn(!1), [O, F] = bn(null);
  return /* @__PURE__ */ P.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: v,
      onKeyDown: (N) => CF(N, _),
      children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              v.current !== null && (D((N) => !N), v.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ P.jsx(mr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "ul",
          {
            className: "sidebar-container",
            onMouseLeave: () => _F(
              d,
              E,
              w,
              m,
              k,
              r,
              O
            ),
            children: [
              /* @__PURE__ */ P.jsx("span", { ref: E, className: "sidebar-selector" }),
              /* @__PURE__ */ P.jsx("div", { ref: w, className: "sidebar-tooltip" }),
              r.map((N, W) => /* @__PURE__ */ P.jsxs(t2, { children: [
                /* @__PURE__ */ P.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => eT(
                      E,
                      w,
                      m,
                      N,
                      O !== null && W > O ? W + r[O].submenus.length : W,
                      0,
                      k
                    ),
                    onClick: () => {
                      N != null && N.submenus && F(
                        (ue) => ue === W ? null : W
                      );
                    },
                    children: [
                      /* @__PURE__ */ P.jsx("div", { className: "sidebar-item--icon", children: o({
                        icon: N.icon,
                        label: N.label,
                        route: N.route,
                        isOpen: k,
                        props: {
                          className: N != null && N.submenus ? "group" : "",
                          onClick: () => {
                            _.current = W + 2, E.current && E.current.classList.toggle("active");
                          }
                        }
                      }) }),
                      (N == null ? void 0 : N.submenus) && /* @__PURE__ */ P.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        k && /* @__PURE__ */ P.jsx("span", { className: "sidebar-item--indicator", children: N.submenus.length }),
                        /* @__PURE__ */ P.jsx(
                          mr,
                          {
                            icon: "ic:round-arrow-right",
                            height: 24,
                            rotate: W === O ? 45 : 0
                          }
                        )
                      ] })
                    ]
                  }
                ),
                (N == null ? void 0 : N.submenus) && W === O && /* @__PURE__ */ P.jsx("div", { className: "sidebar-submenu", children: N.submenus.map((ue, de) => /* @__PURE__ */ P.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => eT(
                      E,
                      w,
                      m,
                      ue,
                      W,
                      de + 1,
                      k
                    ),
                    children: o({
                      icon: ue.icon,
                      label: ue.label,
                      route: `${N.route}${ue.route}`,
                      isOpen: k,
                      props: { className: "" }
                    })
                  },
                  ue.route
                )) })
              ] }, W))
            ]
          }
        ),
        l && /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-settings-action ring-info",
            onClick: l,
            children: [
              /* @__PURE__ */ P.jsx(mr, { icon: "ph:gear-six-fill", height: 16 }),
              k && /* @__PURE__ */ P.jsx("span", { children: "Settings" })
            ]
          }
        ),
        c && /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-exit-action ring-warning",
            onClick: c,
            children: [
              /* @__PURE__ */ P.jsx(mr, { icon: "mingcute:exit-fill", height: 16 }),
              k && /* @__PURE__ */ P.jsx("span", { children: "Logout" })
            ]
          }
        )
      ]
    }
  );
};
var sw = { exports: {} }, za = {}, py = { exports: {} }, Fx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function TF() {
  return tT || (tT = 1, function(r) {
    function o(he, Pe) {
      var be = he.length;
      he.push(Pe);
      e:
        for (; 0 < be; ) {
          var wt = be - 1 >>> 1, Tt = he[wt];
          if (0 < d(Tt, Pe))
            he[wt] = Pe, he[be] = Tt, be = wt;
          else
            break e;
        }
    }
    function l(he) {
      return he.length === 0 ? null : he[0];
    }
    function c(he) {
      if (he.length === 0)
        return null;
      var Pe = he[0], be = he.pop();
      if (be !== Pe) {
        he[0] = be;
        e:
          for (var wt = 0, Tt = he.length, Vn = Tt >>> 1; wt < Vn; ) {
            var gr = 2 * (wt + 1) - 1, ai = he[gr], Cn = gr + 1, ha = he[Cn];
            if (0 > d(ai, be))
              Cn < Tt && 0 > d(ha, ai) ? (he[wt] = ha, he[Cn] = be, wt = Cn) : (he[wt] = ai, he[gr] = be, wt = gr);
            else if (Cn < Tt && 0 > d(ha, be))
              he[wt] = ha, he[Cn] = be, wt = Cn;
            else
              break e;
          }
      }
      return Pe;
    }
    function d(he, Pe) {
      var be = he.sortIndex - Pe.sortIndex;
      return be !== 0 ? be : he.id - Pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      r.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, E = v.now();
      r.unstable_now = function() {
        return v.now() - E;
      };
    }
    var w = [], _ = [], k = 1, D = null, O = 3, F = !1, N = !1, W = !1, ue = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function X(he) {
      for (var Pe = l(_); Pe !== null; ) {
        if (Pe.callback === null)
          c(_);
        else if (Pe.startTime <= he)
          c(_), Pe.sortIndex = Pe.expirationTime, o(w, Pe);
        else
          break;
        Pe = l(_);
      }
    }
    function se(he) {
      if (W = !1, X(he), !N)
        if (l(w) !== null)
          N = !0, st(re);
        else {
          var Pe = l(_);
          Pe !== null && Vt(se, Pe.startTime - he);
        }
    }
    function re(he, Pe) {
      N = !1, W && (W = !1, de(we), we = -1), F = !0;
      var be = O;
      try {
        for (X(Pe), D = l(w); D !== null && (!(D.expirationTime > Pe) || he && !Fe()); ) {
          var wt = D.callback;
          if (typeof wt == "function") {
            D.callback = null, O = D.priorityLevel;
            var Tt = wt(D.expirationTime <= Pe);
            Pe = r.unstable_now(), typeof Tt == "function" ? D.callback = Tt : D === l(w) && c(w), X(Pe);
          } else
            c(w);
          D = l(w);
        }
        if (D !== null)
          var Vn = !0;
        else {
          var gr = l(_);
          gr !== null && Vt(se, gr.startTime - Pe), Vn = !1;
        }
        return Vn;
      } finally {
        D = null, O = be, F = !1;
      }
    }
    var G = !1, J = null, we = -1, pe = 5, me = -1;
    function Fe() {
      return !(r.unstable_now() - me < pe);
    }
    function Qe() {
      if (J !== null) {
        var he = r.unstable_now();
        me = he;
        var Pe = !0;
        try {
          Pe = J(!0, he);
        } finally {
          Pe ? Ne() : (G = !1, J = null);
        }
      } else
        G = !1;
    }
    var Ne;
    if (typeof q == "function")
      Ne = function() {
        q(Qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ze = new MessageChannel(), lt = Ze.port2;
      Ze.port1.onmessage = Qe, Ne = function() {
        lt.postMessage(null);
      };
    } else
      Ne = function() {
        ue(Qe, 0);
      };
    function st(he) {
      J = he, G || (G = !0, Ne());
    }
    function Vt(he, Pe) {
      we = ue(function() {
        he(r.unstable_now());
      }, Pe);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(he) {
      he.callback = null;
    }, r.unstable_continueExecution = function() {
      N || F || (N = !0, st(re));
    }, r.unstable_forceFrameRate = function(he) {
      0 > he || 125 < he ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < he ? Math.floor(1e3 / he) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, r.unstable_getFirstCallbackNode = function() {
      return l(w);
    }, r.unstable_next = function(he) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var Pe = 3;
          break;
        default:
          Pe = O;
      }
      var be = O;
      O = Pe;
      try {
        return he();
      } finally {
        O = be;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(he, Pe) {
      switch (he) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          he = 3;
      }
      var be = O;
      O = he;
      try {
        return Pe();
      } finally {
        O = be;
      }
    }, r.unstable_scheduleCallback = function(he, Pe, be) {
      var wt = r.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? wt + be : wt) : be = wt, he) {
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
      return Tt = be + Tt, he = { id: k++, callback: Pe, priorityLevel: he, startTime: be, expirationTime: Tt, sortIndex: -1 }, be > wt ? (he.sortIndex = be, o(_, he), l(w) === null && he === l(_) && (W ? (de(we), we = -1) : W = !0, Vt(se, be - wt))) : (he.sortIndex = Tt, o(w, he), N || F || (N = !0, st(re))), he;
    }, r.unstable_shouldYield = Fe, r.unstable_wrapCallback = function(he) {
      var Pe = O;
      return function() {
        var be = O;
        O = Pe;
        try {
          return he.apply(this, arguments);
        } finally {
          O = be;
        }
      };
    };
  }(Fx)), Fx;
}
var Px = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function kF() {
  return nT || (nT = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = !1, l = !1, c = 5;
      function d(Se, He) {
        var ut = Se.length;
        Se.push(He), E(Se, He, ut);
      }
      function m(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function v(Se) {
        if (Se.length === 0)
          return null;
        var He = Se[0], ut = Se.pop();
        return ut !== He && (Se[0] = ut, w(Se, ut, 0)), He;
      }
      function E(Se, He, ut) {
        for (var Lt = ut; Lt > 0; ) {
          var en = Lt - 1 >>> 1, jn = Se[en];
          if (_(jn, He) > 0)
            Se[en] = He, Se[Lt] = jn, Lt = en;
          else
            return;
        }
      }
      function w(Se, He, ut) {
        for (var Lt = ut, en = Se.length, jn = en >>> 1; Lt < jn; ) {
          var dn = (Lt + 1) * 2 - 1, Nr = Se[dn], It = dn + 1, ea = Se[It];
          if (_(Nr, He) < 0)
            It < en && _(ea, Nr) < 0 ? (Se[Lt] = ea, Se[It] = He, Lt = It) : (Se[Lt] = Nr, Se[dn] = He, Lt = dn);
          else if (It < en && _(ea, He) < 0)
            Se[Lt] = ea, Se[It] = He, Lt = It;
          else
            return;
        }
      }
      function _(Se, He) {
        var ut = Se.sortIndex - He.sortIndex;
        return ut !== 0 ? ut : Se.id - He.id;
      }
      var k = 1, D = 2, O = 3, F = 4, N = 5;
      function W(Se, He) {
      }
      var ue = typeof performance == "object" && typeof performance.now == "function";
      if (ue) {
        var de = performance;
        r.unstable_now = function() {
          return de.now();
        };
      } else {
        var q = Date, X = q.now();
        r.unstable_now = function() {
          return q.now() - X;
        };
      }
      var se = 1073741823, re = -1, G = 250, J = 5e3, we = 1e4, pe = se, me = [], Fe = [], Qe = 1, Ne = null, Ze = O, lt = !1, st = !1, Vt = !1, he = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function wt(Se) {
        for (var He = m(Fe); He !== null; ) {
          if (He.callback === null)
            v(Fe);
          else if (He.startTime <= Se)
            v(Fe), He.sortIndex = He.expirationTime, d(me, He);
          else
            return;
          He = m(Fe);
        }
      }
      function Tt(Se) {
        if (Vt = !1, wt(Se), !st)
          if (m(me) !== null)
            st = !0, Ya(Vn);
          else {
            var He = m(Fe);
            He !== null && mn(Tt, He.startTime - Se);
          }
      }
      function Vn(Se, He) {
        st = !1, Vt && (Vt = !1, Jr()), lt = !0;
        var ut = Ze;
        try {
          var Lt;
          if (!l)
            return gr(Se, He);
        } finally {
          Ne = null, Ze = ut, lt = !1;
        }
      }
      function gr(Se, He) {
        var ut = He;
        for (wt(ut), Ne = m(me); Ne !== null && !o && !(Ne.expirationTime > ut && (!Se || Ha())); ) {
          var Lt = Ne.callback;
          if (typeof Lt == "function") {
            Ne.callback = null, Ze = Ne.priorityLevel;
            var en = Ne.expirationTime <= ut, jn = Lt(en);
            ut = r.unstable_now(), typeof jn == "function" ? Ne.callback = jn : Ne === m(me) && v(me), wt(ut);
          } else
            v(me);
          Ne = m(me);
        }
        if (Ne !== null)
          return !0;
        var dn = m(Fe);
        return dn !== null && mn(Tt, dn.startTime - ut), !1;
      }
      function ai(Se, He) {
        switch (Se) {
          case k:
          case D:
          case O:
          case F:
          case N:
            break;
          default:
            Se = O;
        }
        var ut = Ze;
        Ze = Se;
        try {
          return He();
        } finally {
          Ze = ut;
        }
      }
      function Cn(Se) {
        var He;
        switch (Ze) {
          case k:
          case D:
          case O:
            He = O;
            break;
          default:
            He = Ze;
            break;
        }
        var ut = Ze;
        Ze = He;
        try {
          return Se();
        } finally {
          Ze = ut;
        }
      }
      function ha(Se) {
        var He = Ze;
        return function() {
          var ut = Ze;
          Ze = He;
          try {
            return Se.apply(this, arguments);
          } finally {
            Ze = ut;
          }
        };
      }
      function ar(Se, He, ut) {
        var Lt = r.unstable_now(), en;
        if (typeof ut == "object" && ut !== null) {
          var jn = ut.delay;
          typeof jn == "number" && jn > 0 ? en = Lt + jn : en = Lt;
        } else
          en = Lt;
        var dn;
        switch (Se) {
          case k:
            dn = re;
            break;
          case D:
            dn = G;
            break;
          case N:
            dn = pe;
            break;
          case F:
            dn = we;
            break;
          case O:
          default:
            dn = J;
            break;
        }
        var Nr = en + dn, It = {
          id: Qe++,
          callback: He,
          priorityLevel: Se,
          startTime: en,
          expirationTime: Nr,
          sortIndex: -1
        };
        return en > Lt ? (It.sortIndex = en, d(Fe, It), m(me) === null && It === m(Fe) && (Vt ? Jr() : Vt = !0, mn(Tt, en - Lt))) : (It.sortIndex = Nr, d(me, It), !st && !lt && (st = !0, Ya(Vn))), It;
      }
      function Mr() {
      }
      function ii() {
        !st && !lt && (st = !0, Ya(Vn));
      }
      function Lr() {
        return m(me);
      }
      function va(Se) {
        Se.callback = null;
      }
      function Nn() {
        return Ze;
      }
      var ir = !1, Bn = null, or = -1, lr = c, ma = -1;
      function Ha() {
        var Se = r.unstable_now() - ma;
        return !(Se < lr);
      }
      function Ti() {
      }
      function oi(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? lr = Math.floor(1e3 / Se) : lr = c;
      }
      var Ia = function() {
        if (Bn !== null) {
          var Se = r.unstable_now();
          ma = Se;
          var He = !0, ut = !0;
          try {
            ut = Bn(He, Se);
          } finally {
            ut ? Zr() : (ir = !1, Bn = null);
          }
        } else
          ir = !1;
      }, Zr;
      if (typeof be == "function")
        Zr = function() {
          be(Ia);
        };
      else if (typeof MessageChannel < "u") {
        var li = new MessageChannel(), Xr = li.port2;
        li.port1.onmessage = Ia, Zr = function() {
          Xr.postMessage(null);
        };
      } else
        Zr = function() {
          he(Ia, 0);
        };
      function Ya(Se) {
        Bn = Se, ir || (ir = !0, Zr());
      }
      function mn(Se, He) {
        or = he(function() {
          Se(r.unstable_now());
        }, He);
      }
      function Jr() {
        Pe(or), or = -1;
      }
      var io = Ti, $a = null;
      r.unstable_IdlePriority = N, r.unstable_ImmediatePriority = k, r.unstable_LowPriority = F, r.unstable_NormalPriority = O, r.unstable_Profiling = $a, r.unstable_UserBlockingPriority = D, r.unstable_cancelCallback = va, r.unstable_continueExecution = ii, r.unstable_forceFrameRate = oi, r.unstable_getCurrentPriorityLevel = Nn, r.unstable_getFirstCallbackNode = Lr, r.unstable_next = Cn, r.unstable_pauseExecution = Mr, r.unstable_requestPaint = io, r.unstable_runWithPriority = ai, r.unstable_scheduleCallback = ar, r.unstable_shouldYield = Ha, r.unstable_wrapCallback = ha, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Px)), Px;
}
var rT;
function Vk() {
  return rT || (rT = 1, process.env.NODE_ENV === "production" ? py.exports = TF() : py.exports = kF()), py.exports;
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
var aT;
function RF() {
  if (aT)
    return za;
  aT = 1;
  var r = Dr, o = Vk();
  function l(n) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      a += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function m(n, a) {
    v(n, a), v(n + "Capture", a);
  }
  function v(n, a) {
    for (d[n] = a, n = 0; n < a.length; n++)
      c.add(a[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, D = {};
  function O(n) {
    return w.call(D, n) ? !0 : w.call(k, n) ? !1 : _.test(n) ? D[n] = !0 : (k[n] = !0, !1);
  }
  function F(n, a, u, p) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return p ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function N(n, a, u, p) {
    if (a === null || typeof a > "u" || F(n, a, u, p))
      return !0;
    if (p)
      return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function W(n, a, u, p, g, S, C) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = p, this.attributeNamespace = g, this.mustUseProperty = u, this.propertyName = n, this.type = a, this.sanitizeURL = S, this.removeEmptyString = C;
  }
  var ue = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ue[n] = new W(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    ue[a] = new W(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ue[n] = new W(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ue[n] = new W(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ue[n] = new W(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ue[n] = new W(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ue[n] = new W(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ue[n] = new W(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ue[n] = new W(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var de = /[\-:]([a-z])/g;
  function q(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(
      de,
      q
    );
    ue[a] = new W(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(de, q);
    ue[a] = new W(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(de, q);
    ue[a] = new W(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ue[n] = new W(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ue.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ue[n] = new W(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function X(n, a, u, p) {
    var g = ue.hasOwnProperty(a) ? ue[a] : null;
    (g !== null ? g.type !== 0 : p || !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (N(a, u, g, p) && (u = null), p || g === null ? O(a) && (u === null ? n.removeAttribute(a) : n.setAttribute(a, "" + u)) : g.mustUseProperty ? n[g.propertyName] = u === null ? g.type === 3 ? !1 : "" : u : (a = g.attributeName, p = g.attributeNamespace, u === null ? n.removeAttribute(a) : (g = g.type, u = g === 3 || g === 4 && u === !0 ? "" : "" + u, p ? n.setAttributeNS(p, a, u) : n.setAttribute(a, u))));
  }
  var se = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, re = Symbol.for("react.element"), G = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), we = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), Fe = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Vt = Symbol.for("react.offscreen"), he = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = he && n[he] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var be = Object.assign, wt;
  function Tt(n) {
    if (wt === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        wt = a && a[1] || "";
      }
    return `
` + wt + n;
  }
  var Vn = !1;
  function gr(n, a) {
    if (!n || Vn)
      return "";
    Vn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (a = function() {
          throw Error();
        }, Object.defineProperty(a.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (Q) {
            var p = Q;
          }
          Reflect.construct(n, [], a);
        } else {
          try {
            a.call();
          } catch (Q) {
            p = Q;
          }
          n.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Q) {
          p = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && p && typeof Q.stack == "string") {
        for (var g = Q.stack.split(`
`), S = p.stack.split(`
`), C = g.length - 1, M = S.length - 1; 1 <= C && 0 <= M && g[C] !== S[M]; )
          M--;
        for (; 1 <= C && 0 <= M; C--, M--)
          if (g[C] !== S[M]) {
            if (C !== 1 || M !== 1)
              do
                if (C--, M--, 0 > M || g[C] !== S[M]) {
                  var j = `
` + g[C].replace(" at new ", " at ");
                  return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
                }
              while (1 <= C && 0 <= M);
            break;
          }
      }
    } finally {
      Vn = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Tt(n) : "";
  }
  function ai(n) {
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
        return n = gr(n.type, !1), n;
      case 11:
        return n = gr(n.type.render, !1), n;
      case 1:
        return n = gr(n.type, !0), n;
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
      case J:
        return "Fragment";
      case G:
        return "Portal";
      case pe:
        return "Profiler";
      case we:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Fe:
          return (n.displayName || "Context") + ".Consumer";
        case me:
          return (n._context.displayName || "Context") + ".Provider";
        case Qe:
          var a = n.render;
          return n = n.displayName, n || (n = a.displayName || a.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case lt:
          return a = n.displayName || null, a !== null ? a : Cn(n.type) || "Memo";
        case st:
          a = n._payload, n = n._init;
          try {
            return Cn(n(a));
          } catch {
          }
      }
    return null;
  }
  function ha(n) {
    var a = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (a.displayName || "Context") + ".Consumer";
      case 10:
        return (a._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = a.render, n = n.displayName || n.name || "", a.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return a;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Cn(a);
      case 8:
        return a === we ? "StrictMode" : "Mode";
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
        if (typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
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
    var a = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function ii(n) {
    var a = Mr(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, a), p = "" + n[a];
    if (!n.hasOwnProperty(a) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var g = u.get, S = u.set;
      return Object.defineProperty(n, a, { configurable: !0, get: function() {
        return g.call(this);
      }, set: function(C) {
        p = "" + C, S.call(this, C);
      } }), Object.defineProperty(n, a, { enumerable: u.enumerable }), { getValue: function() {
        return p;
      }, setValue: function(C) {
        p = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[a];
      } };
    }
  }
  function Lr(n) {
    n._valueTracker || (n._valueTracker = ii(n));
  }
  function va(n) {
    if (!n)
      return !1;
    var a = n._valueTracker;
    if (!a)
      return !0;
    var u = a.getValue(), p = "";
    return n && (p = Mr(n) ? n.checked ? "true" : "false" : n.value), n = p, n !== u ? (a.setValue(n), !0) : !1;
  }
  function Nn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ir(n, a) {
    var u = a.checked;
    return be({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Bn(n, a) {
    var u = a.defaultValue == null ? "" : a.defaultValue, p = a.checked != null ? a.checked : a.defaultChecked;
    u = ar(a.value != null ? a.value : u), n._wrapperState = { initialChecked: p, initialValue: u, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null };
  }
  function or(n, a) {
    a = a.checked, a != null && X(n, "checked", a, !1);
  }
  function lr(n, a) {
    or(n, a);
    var u = ar(a.value), p = a.type;
    if (u != null)
      p === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (p === "submit" || p === "reset") {
      n.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? Ha(n, a.type, u) : a.hasOwnProperty("defaultValue") && Ha(n, a.type, ar(a.defaultValue)), a.checked == null && a.defaultChecked != null && (n.defaultChecked = !!a.defaultChecked);
  }
  function ma(n, a, u) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var p = a.type;
      if (!(p !== "submit" && p !== "reset" || a.value !== void 0 && a.value !== null))
        return;
      a = "" + n._wrapperState.initialValue, u || a === n.value || (n.value = a), n.defaultValue = a;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function Ha(n, a, u) {
    (a !== "number" || Nn(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var Ti = Array.isArray;
  function oi(n, a, u, p) {
    if (n = n.options, a) {
      a = {};
      for (var g = 0; g < u.length; g++)
        a["$" + u[g]] = !0;
      for (u = 0; u < n.length; u++)
        g = a.hasOwnProperty("$" + n[u].value), n[u].selected !== g && (n[u].selected = g), g && p && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + ar(u), a = null, g = 0; g < n.length; g++) {
        if (n[g].value === u) {
          n[g].selected = !0, p && (n[g].defaultSelected = !0);
          return;
        }
        a !== null || n[g].disabled || (a = n[g]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Ia(n, a) {
    if (a.dangerouslySetInnerHTML != null)
      throw Error(l(91));
    return be({}, a, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Zr(n, a) {
    var u = a.value;
    if (u == null) {
      if (u = a.children, a = a.defaultValue, u != null) {
        if (a != null)
          throw Error(l(92));
        if (Ti(u)) {
          if (1 < u.length)
            throw Error(l(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), u = a;
    }
    n._wrapperState = { initialValue: ar(u) };
  }
  function li(n, a) {
    var u = ar(a.value), p = ar(a.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), a.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), p != null && (n.defaultValue = "" + p);
  }
  function Xr(n) {
    var a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
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
  function mn(n, a) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ya(a) : n === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Jr, io = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, u, p, g) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(a, u, p, g);
      });
    } : n;
  }(function(n, a) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = a;
    else {
      for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = Jr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; a.firstChild; )
        n.appendChild(a.firstChild);
    }
  });
  function $a(n, a) {
    if (a) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var Se = {
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
  Object.keys(Se).forEach(function(n) {
    He.forEach(function(a) {
      a = a + n.charAt(0).toUpperCase() + n.substring(1), Se[a] = Se[n];
    });
  });
  function ut(n, a, u) {
    return a == null || typeof a == "boolean" || a === "" ? "" : u || typeof a != "number" || a === 0 || Se.hasOwnProperty(n) && Se[n] ? ("" + a).trim() : a + "px";
  }
  function Lt(n, a) {
    n = n.style;
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var p = u.indexOf("--") === 0, g = ut(u, a[u], p);
        u === "float" && (u = "cssFloat"), p ? n.setProperty(u, g) : n[u] = g;
      }
  }
  var en = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function jn(n, a) {
    if (a) {
      if (en[n] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(l(137, n));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
          throw Error(l(60));
        if (typeof a.dangerouslySetInnerHTML != "object" || !("__html" in a.dangerouslySetInnerHTML))
          throw Error(l(61));
      }
      if (a.style != null && typeof a.style != "object")
        throw Error(l(62));
    }
  }
  function dn(n, a) {
    if (n.indexOf("-") === -1)
      return typeof a.is == "string";
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
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ea = null, zt = null, Yt = null;
  function ql(n) {
    if (n = Cu(n)) {
      if (typeof ea != "function")
        throw Error(l(280));
      var a = n.stateNode;
      a && (a = Ie(a), ea(n.stateNode, n.type, a));
    }
  }
  function qo(n) {
    zt ? Yt ? Yt.push(n) : Yt = [n] : zt = n;
  }
  function Kl() {
    if (zt) {
      var n = zt, a = Yt;
      if (Yt = zt = null, ql(n), a)
        for (n = 0; n < a.length; n++)
          ql(a[n]);
    }
  }
  function nu(n, a) {
    return n(a);
  }
  function yc() {
  }
  var Ko = !1;
  function Zl(n, a, u) {
    if (Ko)
      return n(a, u);
    Ko = !0;
    try {
      return nu(n, a, u);
    } finally {
      Ko = !1, (zt !== null || Yt !== null) && (yc(), Kl());
    }
  }
  function Zo(n, a) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var p = Ie(u);
    if (p === null)
      return null;
    u = p[a];
    e:
      switch (a) {
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
          (p = !p.disabled) || (n = n.type, p = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !p;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(l(231, a, typeof u));
    return u;
  }
  var Xl = !1;
  if (E)
    try {
      var si = {};
      Object.defineProperty(si, "passive", { get: function() {
        Xl = !0;
      } }), window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
    } catch {
      Xl = !1;
    }
  function oo(n, a, u, p, g, S, C, M, j) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(u, Q);
    } catch (ae) {
      this.onError(ae);
    }
  }
  var ta = !1, Va = null, lo = !1, L = null, ie = { onError: function(n) {
    ta = !0, Va = n;
  } };
  function xe(n, a, u, p, g, S, C, M, j) {
    ta = !1, Va = null, oo.apply(ie, arguments);
  }
  function $e(n, a, u, p, g, S, C, M, j) {
    if (xe.apply(this, arguments), ta) {
      if (ta) {
        var Q = Va;
        ta = !1, Va = null;
      } else
        throw Error(l(198));
      lo || (lo = !0, L = Q);
    }
  }
  function it(n) {
    var a = n, u = n;
    if (n.alternate)
      for (; a.return; )
        a = a.return;
    else {
      n = a;
      do
        a = n, a.flags & 4098 && (u = a.return), n = a.return;
      while (n);
    }
    return a.tag === 3 ? u : null;
  }
  function St(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (a === null && (n = n.alternate, n !== null && (a = n.memoizedState)), a !== null)
        return a.dehydrated;
    }
    return null;
  }
  function ot(n) {
    if (it(n) !== n)
      throw Error(l(188));
  }
  function We(n) {
    var a = n.alternate;
    if (!a) {
      if (a = it(n), a === null)
        throw Error(l(188));
      return a !== n ? null : n;
    }
    for (var u = n, p = a; ; ) {
      var g = u.return;
      if (g === null)
        break;
      var S = g.alternate;
      if (S === null) {
        if (p = g.return, p !== null) {
          u = p;
          continue;
        }
        break;
      }
      if (g.child === S.child) {
        for (S = g.child; S; ) {
          if (S === u)
            return ot(g), n;
          if (S === p)
            return ot(g), a;
          S = S.sibling;
        }
        throw Error(l(188));
      }
      if (u.return !== p.return)
        u = g, p = S;
      else {
        for (var C = !1, M = g.child; M; ) {
          if (M === u) {
            C = !0, u = g, p = S;
            break;
          }
          if (M === p) {
            C = !0, p = g, u = S;
            break;
          }
          M = M.sibling;
        }
        if (!C) {
          for (M = S.child; M; ) {
            if (M === u) {
              C = !0, u = S, p = g;
              break;
            }
            if (M === p) {
              C = !0, p = S, u = g;
              break;
            }
            M = M.sibling;
          }
          if (!C)
            throw Error(l(189));
        }
      }
      if (u.alternate !== p)
        throw Error(l(190));
    }
    if (u.tag !== 3)
      throw Error(l(188));
    return u.stateNode.current === u ? n : a;
  }
  function Un(n) {
    return n = We(n), n !== null ? Kt(n) : null;
  }
  function Kt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var a = Kt(n);
      if (a !== null)
        return a;
      n = n.sibling;
    }
    return null;
  }
  var Zt = o.unstable_scheduleCallback, yr = o.unstable_cancelCallback, so = o.unstable_shouldYield, Sc = o.unstable_requestPaint, bt = o.unstable_now, e0 = o.unstable_getCurrentPriorityLevel, ki = o.unstable_ImmediatePriority, dt = o.unstable_UserBlockingPriority, uo = o.unstable_NormalPriority, fv = o.unstable_LowPriority, Cd = o.unstable_IdlePriority, ru = null, Ba = null;
  function dv(n) {
    if (Ba && typeof Ba.onCommitFiberRoot == "function")
      try {
        Ba.onCommitFiberRoot(ru, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ga = Math.clz32 ? Math.clz32 : t0, pv = Math.log, hv = Math.LN2;
  function t0(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (pv(n) / hv | 0) | 0;
  }
  var xc = 64, Jl = 4194304;
  function Xo(n) {
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
  function Wa(n, a) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var p = 0, g = n.suspendedLanes, S = n.pingedLanes, C = u & 268435455;
    if (C !== 0) {
      var M = C & ~g;
      M !== 0 ? p = Xo(M) : (S &= C, S !== 0 && (p = Xo(S)));
    } else
      C = u & ~g, C !== 0 ? p = Xo(C) : S !== 0 && (p = Xo(S));
    if (p === 0)
      return 0;
    if (a !== 0 && a !== p && !(a & g) && (g = p & -p, S = a & -a, g >= S || g === 16 && (S & 4194240) !== 0))
      return a;
    if (p & 4 && (p |= u & 16), a = n.entangledLanes, a !== 0)
      for (n = n.entanglements, a &= p; 0 < a; )
        u = 31 - ga(a), g = 1 << u, p |= n[u], a &= ~g;
    return p;
  }
  function _d(n, a) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return a + 250;
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
        return a + 5e3;
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
  function wc(n, a) {
    for (var u = n.suspendedLanes, p = n.pingedLanes, g = n.expirationTimes, S = n.pendingLanes; 0 < S; ) {
      var C = 31 - ga(S), M = 1 << C, j = g[C];
      j === -1 ? (!(M & u) || M & p) && (g[C] = _d(M, a)) : j <= a && (n.expiredLanes |= M), S &= ~M;
    }
  }
  function Td(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function bc() {
    var n = xc;
    return xc <<= 1, !(xc & 4194240) && (xc = 64), n;
  }
  function kd(n) {
    for (var a = [], u = 0; 31 > u; u++)
      a.push(n);
    return a;
  }
  function Jo(n, a, u) {
    n.pendingLanes |= a, a !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, a = 31 - ga(a), n[a] = u;
  }
  function n0(n, a) {
    var u = n.pendingLanes & ~a;
    n.pendingLanes = a, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= a, n.mutableReadLanes &= a, n.entangledLanes &= a, a = n.entanglements;
    var p = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var g = 31 - ga(u), S = 1 << g;
      a[g] = 0, p[g] = -1, n[g] = -1, u &= ~S;
    }
  }
  function au(n, a) {
    var u = n.entangledLanes |= a;
    for (n = n.entanglements; u; ) {
      var p = 31 - ga(u), g = 1 << p;
      g & a | n[p] & a && (n[p] |= a), u &= ~g;
    }
  }
  var Nt = 0;
  function Rd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var vv, Ec, Ft, mv, Dd, nt = !1, iu = [], gn = null, ya = null, Sa = null, ou = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), jt = [], r0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ga(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        gn = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        ou.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(a.pointerId);
    }
  }
  function sr(n, a, u, p, g, S) {
    return n === null || n.nativeEvent !== S ? (n = { blockedOn: a, domEventName: u, eventSystemFlags: p, nativeEvent: S, targetContainers: [g] }, a !== null && (a = Cu(a), a !== null && Ec(a)), n) : (n.eventSystemFlags |= p, a = n.targetContainers, g !== null && a.indexOf(g) === -1 && a.push(g), n);
  }
  function co(n, a, u, p, g) {
    switch (a) {
      case "focusin":
        return gn = sr(gn, n, a, u, p, g), !0;
      case "dragenter":
        return ya = sr(ya, n, a, u, p, g), !0;
      case "mouseover":
        return Sa = sr(Sa, n, a, u, p, g), !0;
      case "pointerover":
        var S = g.pointerId;
        return ou.set(S, sr(ou.get(S) || null, n, a, u, p, g)), !0;
      case "gotpointercapture":
        return S = g.pointerId, _n.set(S, sr(_n.get(S) || null, n, a, u, p, g)), !0;
    }
    return !1;
  }
  function gv(n) {
    var a = wa(n.target);
    if (a !== null) {
      var u = it(a);
      if (u !== null) {
        if (a = u.tag, a === 13) {
          if (a = St(u), a !== null) {
            n.blockedOn = a, Dd(n.priority, function() {
              Ft(u);
            });
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function es(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var u = Tc(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var p = new u.constructor(u.type, u);
        Nr = p, u.target.dispatchEvent(p), Nr = null;
      } else
        return a = Cu(u), a !== null && Ec(a), n.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function Od(n, a, u) {
    es(n) && u.delete(a);
  }
  function yv() {
    nt = !1, gn !== null && es(gn) && (gn = null), ya !== null && es(ya) && (ya = null), Sa !== null && es(Sa) && (Sa = null), ou.forEach(Od), _n.forEach(Od);
  }
  function lu(n, a) {
    n.blockedOn === a && (n.blockedOn = null, nt || (nt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, yv)));
  }
  function su(n) {
    function a(g) {
      return lu(g, n);
    }
    if (0 < iu.length) {
      lu(iu[0], n);
      for (var u = 1; u < iu.length; u++) {
        var p = iu[u];
        p.blockedOn === n && (p.blockedOn = null);
      }
    }
    for (gn !== null && lu(gn, n), ya !== null && lu(ya, n), Sa !== null && lu(Sa, n), ou.forEach(a), _n.forEach(a), u = 0; u < jt.length; u++)
      p = jt[u], p.blockedOn === n && (p.blockedOn = null);
    for (; 0 < jt.length && (u = jt[0], u.blockedOn === null); )
      gv(u), u.blockedOn === null && jt.shift();
  }
  var ts = se.ReactCurrentBatchConfig, el = !0;
  function Sv(n, a, u, p) {
    var g = Nt, S = ts.transition;
    ts.transition = null;
    try {
      Nt = 1, _c(n, a, u, p);
    } finally {
      Nt = g, ts.transition = S;
    }
  }
  function Cc(n, a, u, p) {
    var g = Nt, S = ts.transition;
    ts.transition = null;
    try {
      Nt = 4, _c(n, a, u, p);
    } finally {
      Nt = g, ts.transition = S;
    }
  }
  function _c(n, a, u, p) {
    if (el) {
      var g = Tc(n, a, u, p);
      if (g === null)
        Fc(n, a, p, uu, u), Ga(n, p);
      else if (co(g, n, a, u, p))
        p.stopPropagation();
      else if (Ga(n, p), a & 4 && -1 < r0.indexOf(n)) {
        for (; g !== null; ) {
          var S = Cu(g);
          if (S !== null && vv(S), S = Tc(n, a, u, p), S === null && Fc(n, a, p, uu, u), S === g)
            break;
          g = S;
        }
        g !== null && p.stopPropagation();
      } else
        Fc(n, a, p, null, u);
    }
  }
  var uu = null;
  function Tc(n, a, u, p) {
    if (uu = null, n = It(p), n = wa(n), n !== null)
      if (a = it(n), a === null)
        n = null;
      else if (u = a.tag, u === 13) {
        if (n = St(a), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (a.stateNode.current.memoizedState.isDehydrated)
          return a.tag === 3 ? a.stateNode.containerInfo : null;
        n = null;
      } else
        a !== n && (n = null);
    return uu = n, null;
  }
  function Md(n) {
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
        switch (e0()) {
          case ki:
            return 1;
          case dt:
            return 4;
          case uo:
          case fv:
            return 16;
          case Cd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ri = null, cu = null, fu = null;
  function Ld() {
    if (fu)
      return fu;
    var n, a = cu, u = a.length, p, g = "value" in Ri ? Ri.value : Ri.textContent, S = g.length;
    for (n = 0; n < u && a[n] === g[n]; n++)
      ;
    var C = u - n;
    for (p = 1; p <= C && a[u - p] === g[S - p]; p++)
      ;
    return fu = g.slice(n, 1 < p ? 1 - p : void 0);
  }
  function ns(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function du() {
    return !0;
  }
  function xv() {
    return !1;
  }
  function na(n) {
    function a(u, p, g, S, C) {
      this._reactName = u, this._targetInst = g, this.type = p, this.nativeEvent = S, this.target = C, this.currentTarget = null;
      for (var M in n)
        n.hasOwnProperty(M) && (u = n[M], this[M] = u ? u(S) : S[M]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? du : xv, this.isPropagationStopped = xv, this;
    }
    return be(a.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = du);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = du);
    }, persist: function() {
    }, isPersistent: du }), a;
  }
  var fo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, kc = na(fo), rs = be({}, fo, { view: 0, detail: 0 }), wv = na(rs), Rc, Nd, pu, An = be({}, rs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== pu && (pu && n.type === "mousemove" ? (Rc = n.screenX - pu.screenX, Nd = n.screenY - pu.screenY) : Nd = Rc = 0, pu = n), Rc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Nd;
  } }), Dc = na(An), bv = be({}, An, { dataTransfer: 0 }), Ev = na(bv), a0 = be({}, rs, { relatedTarget: 0 }), po = na(a0), jd = be({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cv = na(jd), i0 = be({}, fo, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), o0 = na(i0), l0 = be({}, fo, { data: 0 }), Ud = na(l0), Ad = {
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
  }, _v = {
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
  }, Tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kv(n) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(n) : (n = Tv[n]) ? !!a[n] : !1;
  }
  function zd() {
    return kv;
  }
  var Di = be({}, rs, { key: function(n) {
    if (n.key) {
      var a = Ad[n.key] || n.key;
      if (a !== "Unidentified")
        return a;
    }
    return n.type === "keypress" ? (n = ns(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? _v[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(n) {
    return n.type === "keypress" ? ns(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ns(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), s0 = na(Di), Fd = be({}, An, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oc = na(Fd), Pd = be({}, rs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), u0 = na(Pd), Mc = be({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rv = na(Mc), jr = be({}, An, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Oi = na(jr), yn = [9, 13, 27, 32], Qa = E && "CompositionEvent" in window, tl = null;
  E && "documentMode" in document && (tl = document.documentMode);
  var Lc = E && "TextEvent" in window && !tl, Dv = E && (!Qa || tl && 8 < tl && 11 >= tl), as = String.fromCharCode(32), Ov = !1;
  function Mv(n, a) {
    switch (n) {
      case "keyup":
        return yn.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var is = !1;
  function c0(n, a) {
    switch (n) {
      case "compositionend":
        return Nc(a);
      case "keypress":
        return a.which !== 32 ? null : (Ov = !0, as);
      case "textInput":
        return n = a.data, n === as && Ov ? null : n;
      default:
        return null;
    }
  }
  function f0(n, a) {
    if (is)
      return n === "compositionend" || !Qa && Mv(n, a) ? (n = Ld(), fu = cu = Ri = null, is = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which)
            return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Dv && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var Lv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nv(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!Lv[n.type] : a === "textarea";
  }
  function jv(n, a, u, p) {
    qo(p), a = wu(a, "onChange"), 0 < a.length && (u = new kc("onChange", "change", null, u, p), n.push({ event: u, listeners: a }));
  }
  var hu = null, os = null;
  function ls(n) {
    zc(n, 0);
  }
  function ss(n) {
    var a = cs(n);
    if (va(a))
      return n;
  }
  function Uv(n, a) {
    if (n === "change")
      return a;
  }
  var Hd = !1;
  if (E) {
    var Id;
    if (E) {
      var Yd = "oninput" in document;
      if (!Yd) {
        var Av = document.createElement("div");
        Av.setAttribute("oninput", "return;"), Yd = typeof Av.oninput == "function";
      }
      Id = Yd;
    } else
      Id = !1;
    Hd = Id && (!document.documentMode || 9 < document.documentMode);
  }
  function zv() {
    hu && (hu.detachEvent("onpropertychange", Fv), os = hu = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && ss(os)) {
      var a = [];
      jv(a, os, n, It(n)), Zl(ls, a);
    }
  }
  function d0(n, a, u) {
    n === "focusin" ? (zv(), hu = a, os = u, hu.attachEvent("onpropertychange", Fv)) : n === "focusout" && zv();
  }
  function p0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ss(os);
  }
  function h0(n, a) {
    if (n === "click")
      return ss(a);
  }
  function Pv(n, a) {
    if (n === "input" || n === "change")
      return ss(a);
  }
  function v0(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var xa = typeof Object.is == "function" ? Object.is : v0;
  function vu(n, a) {
    if (xa(n, a))
      return !0;
    if (typeof n != "object" || n === null || typeof a != "object" || a === null)
      return !1;
    var u = Object.keys(n), p = Object.keys(a);
    if (u.length !== p.length)
      return !1;
    for (p = 0; p < u.length; p++) {
      var g = u[p];
      if (!w.call(a, g) || !xa(n[g], a[g]))
        return !1;
    }
    return !0;
  }
  function Hv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Iv(n, a) {
    var u = Hv(n);
    n = 0;
    for (var p; u; ) {
      if (u.nodeType === 3) {
        if (p = n + u.textContent.length, n <= a && p >= a)
          return { node: u, offset: a - n };
        n = p;
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
      u = Hv(u);
    }
  }
  function Yv(n, a) {
    return n && a ? n === a ? !0 : n && n.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Yv(n, a.parentNode) : "contains" in n ? n.contains(a) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function jc() {
    for (var n = window, a = Nn(); a instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = a.contentWindow;
      else
        break;
      a = Nn(n.document);
    }
    return a;
  }
  function Mi(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  function Uc(n) {
    var a = jc(), u = n.focusedElem, p = n.selectionRange;
    if (a !== u && u && u.ownerDocument && Yv(u.ownerDocument.documentElement, u)) {
      if (p !== null && Mi(u)) {
        if (a = p.start, n = p.end, n === void 0 && (n = a), "selectionStart" in u)
          u.selectionStart = a, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (a = u.ownerDocument || document) && a.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var g = u.textContent.length, S = Math.min(p.start, g);
          p = p.end === void 0 ? S : Math.min(p.end, g), !n.extend && S > p && (g = p, p = S, S = g), g = Iv(u, S);
          var C = Iv(
            u,
            p
          );
          g && C && (n.rangeCount !== 1 || n.anchorNode !== g.node || n.anchorOffset !== g.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (a = a.createRange(), a.setStart(g.node, g.offset), n.removeAllRanges(), S > p ? (n.addRange(a), n.extend(C.node, C.offset)) : (a.setEnd(C.node, C.offset), n.addRange(a)));
        }
      }
      for (a = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && a.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < a.length; u++)
        n = a[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var $v = E && "documentMode" in document && 11 >= document.documentMode, qa = null, $d = null, mu = null, Vd = !1;
  function Vv(n, a, u) {
    var p = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Vd || qa == null || qa !== Nn(p) || (p = qa, "selectionStart" in p && Mi(p) ? p = { start: p.selectionStart, end: p.selectionEnd } : (p = (p.ownerDocument && p.ownerDocument.defaultView || window).getSelection(), p = { anchorNode: p.anchorNode, anchorOffset: p.anchorOffset, focusNode: p.focusNode, focusOffset: p.focusOffset }), mu && vu(mu, p) || (mu = p, p = wu($d, "onSelect"), 0 < p.length && (a = new kc("onSelect", "select", null, a, u), n.push({ event: a, listeners: p }), a.target = qa)));
  }
  function Ac(n, a) {
    var u = {};
    return u[n.toLowerCase()] = a.toLowerCase(), u["Webkit" + n] = "webkit" + a, u["Moz" + n] = "moz" + a, u;
  }
  var nl = { animationend: Ac("Animation", "AnimationEnd"), animationiteration: Ac("Animation", "AnimationIteration"), animationstart: Ac("Animation", "AnimationStart"), transitionend: Ac("Transition", "TransitionEnd") }, Bd = {}, Wd = {};
  E && (Wd = document.createElement("div").style, "AnimationEvent" in window || (delete nl.animationend.animation, delete nl.animationiteration.animation, delete nl.animationstart.animation), "TransitionEvent" in window || delete nl.transitionend.transition);
  function zn(n) {
    if (Bd[n])
      return Bd[n];
    if (!nl[n])
      return n;
    var a = nl[n], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in Wd)
        return Bd[n] = a[u];
    return n;
  }
  var Gd = zn("animationend"), Bv = zn("animationiteration"), Wv = zn("animationstart"), Gv = zn("transitionend"), Qv = /* @__PURE__ */ new Map(), qv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Li(n, a) {
    Qv.set(n, a), m(a, [n]);
  }
  for (var gu = 0; gu < qv.length; gu++) {
    var rl = qv[gu], m0 = rl.toLowerCase(), yu = rl[0].toUpperCase() + rl.slice(1);
    Li(m0, "on" + yu);
  }
  Li(Gd, "onAnimationEnd"), Li(Bv, "onAnimationIteration"), Li(Wv, "onAnimationStart"), Li("dblclick", "onDoubleClick"), Li("focusin", "onFocus"), Li("focusout", "onBlur"), Li(Gv, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), g0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Su));
  function Kv(n, a, u) {
    var p = n.type || "unknown-event";
    n.currentTarget = u, $e(p, a, void 0, n), n.currentTarget = null;
  }
  function zc(n, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var p = n[u], g = p.event;
      p = p.listeners;
      e: {
        var S = void 0;
        if (a)
          for (var C = p.length - 1; 0 <= C; C--) {
            var M = p[C], j = M.instance, Q = M.currentTarget;
            if (M = M.listener, j !== S && g.isPropagationStopped())
              break e;
            Kv(g, M, Q), S = j;
          }
        else
          for (C = 0; C < p.length; C++) {
            if (M = p[C], j = M.instance, Q = M.currentTarget, M = M.listener, j !== S && g.isPropagationStopped())
              break e;
            Kv(g, M, Q), S = j;
          }
      }
    }
    if (lo)
      throw n = L, lo = !1, L = null, n;
  }
  function Pt(n, a) {
    var u = a[ep];
    u === void 0 && (u = a[ep] = /* @__PURE__ */ new Set());
    var p = n + "__bubble";
    u.has(p) || (Zv(a, n, 2, !1), u.add(p));
  }
  function ho(n, a, u) {
    var p = 0;
    a && (p |= 4), Zv(u, n, p, a);
  }
  var Ni = "_reactListening" + Math.random().toString(36).slice(2);
  function us(n) {
    if (!n[Ni]) {
      n[Ni] = !0, c.forEach(function(u) {
        u !== "selectionchange" && (g0.has(u) || ho(u, !1, n), ho(u, !0, n));
      });
      var a = n.nodeType === 9 ? n : n.ownerDocument;
      a === null || a[Ni] || (a[Ni] = !0, ho("selectionchange", !1, a));
    }
  }
  function Zv(n, a, u, p) {
    switch (Md(a)) {
      case 1:
        var g = Sv;
        break;
      case 4:
        g = Cc;
        break;
      default:
        g = _c;
    }
    u = g.bind(null, a, u, n), g = void 0, !Xl || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (g = !0), p ? g !== void 0 ? n.addEventListener(a, u, { capture: !0, passive: g }) : n.addEventListener(a, u, !0) : g !== void 0 ? n.addEventListener(a, u, { passive: g }) : n.addEventListener(a, u, !1);
  }
  function Fc(n, a, u, p, g) {
    var S = p;
    if (!(a & 1) && !(a & 2) && p !== null)
      e:
        for (; ; ) {
          if (p === null)
            return;
          var C = p.tag;
          if (C === 3 || C === 4) {
            var M = p.stateNode.containerInfo;
            if (M === g || M.nodeType === 8 && M.parentNode === g)
              break;
            if (C === 4)
              for (C = p.return; C !== null; ) {
                var j = C.tag;
                if ((j === 3 || j === 4) && (j = C.stateNode.containerInfo, j === g || j.nodeType === 8 && j.parentNode === g))
                  return;
                C = C.return;
              }
            for (; M !== null; ) {
              if (C = wa(M), C === null)
                return;
              if (j = C.tag, j === 5 || j === 6) {
                p = S = C;
                continue e;
              }
              M = M.parentNode;
            }
          }
          p = p.return;
        }
    Zl(function() {
      var Q = S, ae = It(u), oe = [];
      e: {
        var ne = Qv.get(n);
        if (ne !== void 0) {
          var Ce = kc, Oe = n;
          switch (n) {
            case "keypress":
              if (ns(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ce = s0;
              break;
            case "focusin":
              Oe = "focus", Ce = po;
              break;
            case "focusout":
              Oe = "blur", Ce = po;
              break;
            case "beforeblur":
            case "afterblur":
              Ce = po;
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
              Ce = Dc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ce = Ev;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ce = u0;
              break;
            case Gd:
            case Bv:
            case Wv:
              Ce = Cv;
              break;
            case Gv:
              Ce = Rv;
              break;
            case "scroll":
              Ce = wv;
              break;
            case "wheel":
              Ce = Oi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ce = o0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ce = Oc;
          }
          var je = (a & 4) !== 0, hn = !je && n === "scroll", H = je ? ne !== null ? ne + "Capture" : null : ne;
          je = [];
          for (var A = Q, $; A !== null; ) {
            $ = A;
            var fe = $.stateNode;
            if ($.tag === 5 && fe !== null && ($ = fe, H !== null && (fe = Zo(A, H), fe != null && je.push(xu(A, fe, $)))), hn)
              break;
            A = A.return;
          }
          0 < je.length && (ne = new Ce(ne, Oe, null, u, ae), oe.push({ event: ne, listeners: je }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", Ce = n === "mouseout" || n === "pointerout", ne && u !== Nr && (Oe = u.relatedTarget || u.fromElement) && (wa(Oe) || Oe[ji]))
            break e;
          if ((Ce || ne) && (ne = ae.window === ae ? ae : (ne = ae.ownerDocument) ? ne.defaultView || ne.parentWindow : window, Ce ? (Oe = u.relatedTarget || u.toElement, Ce = Q, Oe = Oe ? wa(Oe) : null, Oe !== null && (hn = it(Oe), Oe !== hn || Oe.tag !== 5 && Oe.tag !== 6) && (Oe = null)) : (Ce = null, Oe = Q), Ce !== Oe)) {
            if (je = Dc, fe = "onMouseLeave", H = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (je = Oc, fe = "onPointerLeave", H = "onPointerEnter", A = "pointer"), hn = Ce == null ? ne : cs(Ce), $ = Oe == null ? ne : cs(Oe), ne = new je(fe, A + "leave", Ce, u, ae), ne.target = hn, ne.relatedTarget = $, fe = null, wa(ae) === Q && (je = new je(H, A + "enter", Oe, u, ae), je.target = $, je.relatedTarget = hn, fe = je), hn = fe, Ce && Oe)
              t: {
                for (je = Ce, H = Oe, A = 0, $ = je; $; $ = al($))
                  A++;
                for ($ = 0, fe = H; fe; fe = al(fe))
                  $++;
                for (; 0 < A - $; )
                  je = al(je), A--;
                for (; 0 < $ - A; )
                  H = al(H), $--;
                for (; A--; ) {
                  if (je === H || H !== null && je === H.alternate)
                    break t;
                  je = al(je), H = al(H);
                }
                je = null;
              }
            else
              je = null;
            Ce !== null && Qd(oe, ne, Ce, je, !1), Oe !== null && hn !== null && Qd(oe, hn, Oe, je, !0);
          }
        }
        e: {
          if (ne = Q ? cs(Q) : window, Ce = ne.nodeName && ne.nodeName.toLowerCase(), Ce === "select" || Ce === "input" && ne.type === "file")
            var Ue = Uv;
          else if (Nv(ne))
            if (Hd)
              Ue = Pv;
            else {
              Ue = p0;
              var Me = d0;
            }
          else
            (Ce = ne.nodeName) && Ce.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (Ue = h0);
          if (Ue && (Ue = Ue(n, Q))) {
            jv(oe, Ue, u, ae);
            break e;
          }
          Me && Me(n, ne, Q), n === "focusout" && (Me = ne._wrapperState) && Me.controlled && ne.type === "number" && Ha(ne, "number", ne.value);
        }
        switch (Me = Q ? cs(Q) : window, n) {
          case "focusin":
            (Nv(Me) || Me.contentEditable === "true") && (qa = Me, $d = Q, mu = null);
            break;
          case "focusout":
            mu = $d = qa = null;
            break;
          case "mousedown":
            Vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vd = !1, Vv(oe, u, ae);
            break;
          case "selectionchange":
            if ($v)
              break;
          case "keydown":
          case "keyup":
            Vv(oe, u, ae);
        }
        var ze;
        if (Qa)
          e: {
            switch (n) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          is ? Mv(n, u) && (Je = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Dv && u.locale !== "ko" && (is || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && is && (ze = Ld()) : (Ri = ae, cu = "value" in Ri ? Ri.value : Ri.textContent, is = !0)), Me = wu(Q, Je), 0 < Me.length && (Je = new Ud(Je, n, null, u, ae), oe.push({ event: Je, listeners: Me }), ze ? Je.data = ze : (ze = Nc(u), ze !== null && (Je.data = ze)))), (ze = Lc ? c0(n, u) : f0(n, u)) && (Q = wu(Q, "onBeforeInput"), 0 < Q.length && (ae = new Ud("onBeforeInput", "beforeinput", null, u, ae), oe.push({ event: ae, listeners: Q }), ae.data = ze));
      }
      zc(oe, a);
    });
  }
  function xu(n, a, u) {
    return { instance: n, listener: a, currentTarget: u };
  }
  function wu(n, a) {
    for (var u = a + "Capture", p = []; n !== null; ) {
      var g = n, S = g.stateNode;
      g.tag === 5 && S !== null && (g = S, S = Zo(n, u), S != null && p.unshift(xu(n, S, g)), S = Zo(n, a), S != null && p.push(xu(n, S, g))), n = n.return;
    }
    return p;
  }
  function al(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Qd(n, a, u, p, g) {
    for (var S = a._reactName, C = []; u !== null && u !== p; ) {
      var M = u, j = M.alternate, Q = M.stateNode;
      if (j !== null && j === p)
        break;
      M.tag === 5 && Q !== null && (M = Q, g ? (j = Zo(u, S), j != null && C.unshift(xu(u, j, M))) : g || (j = Zo(u, S), j != null && C.push(xu(u, j, M)))), u = u.return;
    }
    C.length !== 0 && n.push({ event: a, listeners: C });
  }
  var qd = /\r\n?/g, y0 = /\u0000|\uFFFD/g;
  function Kd(n) {
    return (typeof n == "string" ? n : "" + n).replace(qd, `
`).replace(y0, "");
  }
  function Pc(n, a, u) {
    if (a = Kd(a), Kd(n) !== a && u)
      throw Error(l(425));
  }
  function Hc() {
  }
  var Zd = null, il = null;
  function bu(n, a) {
    return n === "textarea" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var ol = typeof setTimeout == "function" ? setTimeout : void 0, Xv = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, Jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(n) {
    return Xd.resolve(null).then(n).catch(S0);
  } : ol;
  function S0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function vo(n, a) {
    var u = a, p = 0;
    do {
      var g = u.nextSibling;
      if (n.removeChild(u), g && g.nodeType === 8)
        if (u = g.data, u === "/$") {
          if (p === 0) {
            n.removeChild(g), su(a);
            return;
          }
          p--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || p++;
      u = g;
    } while (u);
    su(a);
  }
  function Ka(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3)
        break;
      if (a === 8) {
        if (a = n.data, a === "$" || a === "$!" || a === "$?")
          break;
        if (a === "/$")
          return null;
      }
    }
    return n;
  }
  function Eu(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (a === 0)
            return n;
          a--;
        } else
          u === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var mo = Math.random().toString(36).slice(2), ui = "__reactFiber$" + mo, ll = "__reactProps$" + mo, ji = "__reactContainer$" + mo, ep = "__reactEvents$" + mo, x0 = "__reactListeners$" + mo, tp = "__reactHandles$" + mo;
  function wa(n) {
    var a = n[ui];
    if (a)
      return a;
    for (var u = n.parentNode; u; ) {
      if (a = u[ji] || u[ui]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (n = Eu(n); n !== null; ) {
            if (u = n[ui])
              return u;
            n = Eu(n);
          }
        return a;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Cu(n) {
    return n = n[ui] || n[ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function cs(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(l(33));
  }
  function Ie(n) {
    return n[ll] || null;
  }
  var go = [], Bt = -1;
  function rt(n) {
    return { current: n };
  }
  function kt(n) {
    0 > Bt || (n.current = go[Bt], go[Bt] = null, Bt--);
  }
  function Rt(n, a) {
    Bt++, go[Bt] = n.current, n.current = a;
  }
  var ci = {}, Xe = rt(ci), sn = rt(!1), Ur = ci;
  function ba(n, a) {
    var u = n.type.contextTypes;
    if (!u)
      return ci;
    var p = n.stateNode;
    if (p && p.__reactInternalMemoizedUnmaskedChildContext === a)
      return p.__reactInternalMemoizedMaskedChildContext;
    var g = {}, S;
    for (S in u)
      g[S] = a[S];
    return p && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = a, n.__reactInternalMemoizedMaskedChildContext = g), g;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ea() {
    kt(sn), kt(Xe);
  }
  function yo(n, a, u) {
    if (Xe.current !== ci)
      throw Error(l(168));
    Rt(Xe, a), Rt(sn, u);
  }
  function _u(n, a, u) {
    var p = n.stateNode;
    if (a = a.childContextTypes, typeof p.getChildContext != "function")
      return u;
    p = p.getChildContext();
    for (var g in p)
      if (!(g in a))
        throw Error(l(108, ha(n) || "Unknown", g));
    return be({}, u, p);
  }
  function Ic(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ci, Ur = Xe.current, Rt(Xe, n), Rt(sn, sn.current), !0;
  }
  function Jv(n, a, u) {
    var p = n.stateNode;
    if (!p)
      throw Error(l(169));
    u ? (n = _u(n, a, Ur), p.__reactInternalMemoizedMergedChildContext = n, kt(sn), kt(Xe), Rt(Xe, n)) : kt(sn), Rt(sn, u);
  }
  var ra = null, Fn = !1, Tu = !1;
  function np(n) {
    ra === null ? ra = [n] : ra.push(n);
  }
  function rp(n) {
    Fn = !0, np(n);
  }
  function Ar() {
    if (!Tu && ra !== null) {
      Tu = !0;
      var n = 0, a = Nt;
      try {
        var u = ra;
        for (Nt = 1; n < u.length; n++) {
          var p = u[n];
          do
            p = p(!0);
          while (p !== null);
        }
        ra = null, Fn = !1;
      } catch (g) {
        throw ra !== null && (ra = ra.slice(n + 1)), Zt(ki, Ar), g;
      } finally {
        Nt = a, Tu = !1;
      }
    }
    return null;
  }
  var So = [], zr = 0, sl = null, fs = 0, Fr = [], ur = 0, Ca = null, Wn = 1, Ui = "";
  function aa(n, a) {
    So[zr++] = fs, So[zr++] = sl, sl = n, fs = a;
  }
  function ap(n, a, u) {
    Fr[ur++] = Wn, Fr[ur++] = Ui, Fr[ur++] = Ca, Ca = n;
    var p = Wn;
    n = Ui;
    var g = 32 - ga(p) - 1;
    p &= ~(1 << g), u += 1;
    var S = 32 - ga(a) + g;
    if (30 < S) {
      var C = g - g % 5;
      S = (p & (1 << C) - 1).toString(32), p >>= C, g -= C, Wn = 1 << 32 - ga(a) + g | u << g | p, Ui = S + n;
    } else
      Wn = 1 << S | u << g | p, Ui = n;
  }
  function Yc(n) {
    n.return !== null && (aa(n, 1), ap(n, 1, 0));
  }
  function ip(n) {
    for (; n === sl; )
      sl = So[--zr], So[zr] = null, fs = So[--zr], So[zr] = null;
    for (; n === Ca; )
      Ca = Fr[--ur], Fr[ur] = null, Ui = Fr[--ur], Fr[ur] = null, Wn = Fr[--ur], Fr[ur] = null;
  }
  var ia = null, Pr = null, Wt = !1, _a = null;
  function op(n, a) {
    var u = Ma(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = a, u.return = n, a = n.deletions, a === null ? (n.deletions = [u], n.flags |= 16) : a.push(u);
  }
  function em(n, a) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return a = a.nodeType !== 1 || u.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (n.stateNode = a, ia = n, Pr = Ka(a.firstChild), !0) : !1;
      case 6:
        return a = n.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (n.stateNode = a, ia = n, Pr = null, !0) : !1;
      case 13:
        return a = a.nodeType !== 8 ? null : a, a !== null ? (u = Ca !== null ? { id: Wn, overflow: Ui } : null, n.memoizedState = { dehydrated: a, treeContext: u, retryLane: 1073741824 }, u = Ma(18, null, null, 0), u.stateNode = a, u.return = n, n.child = u, ia = n, Pr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function $c(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Vc(n) {
    if (Wt) {
      var a = Pr;
      if (a) {
        var u = a;
        if (!em(n, a)) {
          if ($c(n))
            throw Error(l(418));
          a = Ka(u.nextSibling);
          var p = ia;
          a && em(n, a) ? op(p, u) : (n.flags = n.flags & -4097 | 2, Wt = !1, ia = n);
        }
      } else {
        if ($c(n))
          throw Error(l(418));
        n.flags = n.flags & -4097 | 2, Wt = !1, ia = n;
      }
    }
  }
  function tm(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ia = n;
  }
  function Bc(n) {
    if (n !== ia)
      return !1;
    if (!Wt)
      return tm(n), Wt = !0, !1;
    var a;
    if ((a = n.tag !== 3) && !(a = n.tag !== 5) && (a = n.type, a = a !== "head" && a !== "body" && !bu(n.type, n.memoizedProps)), a && (a = Pr)) {
      if ($c(n))
        throw nm(), Error(l(418));
      for (; a; )
        op(n, a), a = Ka(a.nextSibling);
    }
    if (tm(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(l(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (a === 0) {
                Pr = Ka(n.nextSibling);
                break e;
              }
              a--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || a++;
          }
          n = n.nextSibling;
        }
        Pr = null;
      }
    } else
      Pr = ia ? Ka(n.stateNode.nextSibling) : null;
    return !0;
  }
  function nm() {
    for (var n = Pr; n; )
      n = Ka(n.nextSibling);
  }
  function tn() {
    Pr = ia = null, Wt = !1;
  }
  function lp(n) {
    _a === null ? _a = [n] : _a.push(n);
  }
  var Wc = se.ReactCurrentBatchConfig;
  function oa(n, a) {
    if (n && n.defaultProps) {
      a = be({}, a), n = n.defaultProps;
      for (var u in n)
        a[u] === void 0 && (a[u] = n[u]);
      return a;
    }
    return a;
  }
  var fi = rt(null), Gc = null, xo = null, sp = null;
  function up() {
    sp = xo = Gc = null;
  }
  function wo(n) {
    var a = fi.current;
    kt(fi), n._currentValue = a;
  }
  function Pn(n, a, u) {
    for (; n !== null; ) {
      var p = n.alternate;
      if ((n.childLanes & a) !== a ? (n.childLanes |= a, p !== null && (p.childLanes |= a)) : p !== null && (p.childLanes & a) !== a && (p.childLanes |= a), n === u)
        break;
      n = n.return;
    }
  }
  function ge(n, a) {
    Gc = n, sp = xo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & a && (Sn = !0), n.firstContext = null);
  }
  function pn(n) {
    var a = n._currentValue;
    if (sp !== n)
      if (n = { context: n, memoizedValue: a, next: null }, xo === null) {
        if (Gc === null)
          throw Error(l(308));
        xo = n, Gc.dependencies = { lanes: 0, firstContext: n };
      } else
        xo = xo.next = n;
    return a;
  }
  var Gn = null;
  function cp(n) {
    Gn === null ? Gn = [n] : Gn.push(n);
  }
  function rm(n, a, u, p) {
    var g = a.interleaved;
    return g === null ? (u.next = u, cp(a)) : (u.next = g.next, g.next = u), a.interleaved = u, Ai(n, p);
  }
  function Ai(n, a) {
    n.lanes |= a;
    var u = n.alternate;
    for (u !== null && (u.lanes |= a), u = n, n = n.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var bo = !1;
  function fp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tn(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function zi(n, a) {
    return { eventTime: n, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function Eo(n, a, u) {
    var p = n.updateQueue;
    if (p === null)
      return null;
    if (p = p.shared, pt & 2) {
      var g = p.pending;
      return g === null ? a.next = a : (a.next = g.next, g.next = a), p.pending = a, Ai(n, u);
    }
    return g = p.interleaved, g === null ? (a.next = a, cp(p)) : (a.next = g.next, g.next = a), p.interleaved = a, Ai(n, u);
  }
  function Qc(n, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194240) !== 0)) {
      var p = a.lanes;
      p &= n.pendingLanes, u |= p, a.lanes = u, au(n, u);
    }
  }
  function dp(n, a) {
    var u = n.updateQueue, p = n.alternate;
    if (p !== null && (p = p.updateQueue, u === p)) {
      var g = null, S = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var C = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          S === null ? g = S = C : S = S.next = C, u = u.next;
        } while (u !== null);
        S === null ? g = S = a : S = S.next = a;
      } else
        g = S = a;
      u = { baseState: p.baseState, firstBaseUpdate: g, lastBaseUpdate: S, shared: p.shared, effects: p.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = a : n.next = a, u.lastBaseUpdate = a;
  }
  function Co(n, a, u, p) {
    var g = n.updateQueue;
    bo = !1;
    var S = g.firstBaseUpdate, C = g.lastBaseUpdate, M = g.shared.pending;
    if (M !== null) {
      g.shared.pending = null;
      var j = M, Q = j.next;
      j.next = null, C === null ? S = Q : C.next = Q, C = j;
      var ae = n.alternate;
      ae !== null && (ae = ae.updateQueue, M = ae.lastBaseUpdate, M !== C && (M === null ? ae.firstBaseUpdate = Q : M.next = Q, ae.lastBaseUpdate = j));
    }
    if (S !== null) {
      var oe = g.baseState;
      C = 0, ae = Q = j = null, M = S;
      do {
        var ne = M.lane, Ce = M.eventTime;
        if ((p & ne) === ne) {
          ae !== null && (ae = ae.next = {
            eventTime: Ce,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var Oe = n, je = M;
            switch (ne = a, Ce = u, je.tag) {
              case 1:
                if (Oe = je.payload, typeof Oe == "function") {
                  oe = Oe.call(Ce, oe, ne);
                  break e;
                }
                oe = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = je.payload, ne = typeof Oe == "function" ? Oe.call(Ce, oe, ne) : Oe, ne == null)
                  break e;
                oe = be({}, oe, ne);
                break e;
              case 2:
                bo = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, ne = g.effects, ne === null ? g.effects = [M] : ne.push(M));
        } else
          Ce = { eventTime: Ce, lane: ne, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, ae === null ? (Q = ae = Ce, j = oe) : ae = ae.next = Ce, C |= ne;
        if (M = M.next, M === null) {
          if (M = g.shared.pending, M === null)
            break;
          ne = M, M = ne.next, ne.next = null, g.lastBaseUpdate = ne, g.shared.pending = null;
        }
      } while (1);
      if (ae === null && (j = oe), g.baseState = j, g.firstBaseUpdate = Q, g.lastBaseUpdate = ae, a = g.shared.interleaved, a !== null) {
        g = a;
        do
          C |= g.lane, g = g.next;
        while (g !== a);
      } else
        S === null && (g.shared.lanes = 0);
      Ii |= C, n.lanes = C, n.memoizedState = oe;
    }
  }
  function ul(n, a, u) {
    if (n = a.effects, a.effects = null, n !== null)
      for (a = 0; a < n.length; a++) {
        var p = n[a], g = p.callback;
        if (g !== null) {
          if (p.callback = null, p = u, typeof g != "function")
            throw Error(l(191, g));
          g.call(p);
        }
      }
  }
  var am = new r.Component().refs;
  function pp(n, a, u, p) {
    a = n.memoizedState, u = u(p, a), u = u == null ? a : be({}, a, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? it(n) === n : !1;
  }, enqueueSetState: function(n, a, u) {
    n = n._reactInternals;
    var p = pr(), g = xn(n), S = zi(p, g);
    S.payload = a, u != null && (S.callback = u), a = Eo(n, S, g), a !== null && (hr(a, n, g, p), Qc(a, n, g));
  }, enqueueReplaceState: function(n, a, u) {
    n = n._reactInternals;
    var p = pr(), g = xn(n), S = zi(p, g);
    S.tag = 1, S.payload = a, u != null && (S.callback = u), a = Eo(n, S, g), a !== null && (hr(a, n, g, p), Qc(a, n, g));
  }, enqueueForceUpdate: function(n, a) {
    n = n._reactInternals;
    var u = pr(), p = xn(n), g = zi(u, p);
    g.tag = 2, a != null && (g.callback = a), a = Eo(n, g, p), a !== null && (hr(a, n, p, u), Qc(a, n, p));
  } };
  function im(n, a, u, p, g, S, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(p, S, C) : a.prototype && a.prototype.isPureReactComponent ? !vu(u, p) || !vu(g, S) : !0;
  }
  function om(n, a, u) {
    var p = !1, g = ci, S = a.contextType;
    return typeof S == "object" && S !== null ? S = pn(S) : (g = Xt(a) ? Ur : Xe.current, p = a.contextTypes, S = (p = p != null) ? ba(n, g) : ci), a = new a(u, S), n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = qc, n.stateNode = a, a._reactInternals = n, p && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = g, n.__reactInternalMemoizedMaskedChildContext = S), a;
  }
  function lm(n, a, u, p) {
    n = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, p), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(u, p), a.state !== n && qc.enqueueReplaceState(a, a.state, null);
  }
  function Kc(n, a, u, p) {
    var g = n.stateNode;
    g.props = u, g.state = n.memoizedState, g.refs = am, fp(n);
    var S = a.contextType;
    typeof S == "object" && S !== null ? g.context = pn(S) : (S = Xt(a) ? Ur : Xe.current, g.context = ba(n, S)), g.state = n.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (pp(n, a, S, u), g.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (a = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), a !== g.state && qc.enqueueReplaceState(g, g.state, null), Co(n, u, g, p), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ds(n, a, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(l(309));
          var p = u.stateNode;
        }
        if (!p)
          throw Error(l(147, n));
        var g = p, S = "" + n;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === S ? a.ref : (a = function(C) {
          var M = g.refs;
          M === am && (M = g.refs = {}), C === null ? delete M[S] : M[S] = C;
        }, a._stringRef = S, a);
      }
      if (typeof n != "string")
        throw Error(l(284));
      if (!u._owner)
        throw Error(l(290, n));
    }
    return n;
  }
  function Zc(n, a) {
    throw n = Object.prototype.toString.call(a), Error(l(31, n === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : n));
  }
  function sm(n) {
    var a = n._init;
    return a(n._payload);
  }
  function um(n) {
    function a(H, A) {
      if (n) {
        var $ = H.deletions;
        $ === null ? (H.deletions = [A], H.flags |= 16) : $.push(A);
      }
    }
    function u(H, A) {
      if (!n)
        return null;
      for (; A !== null; )
        a(H, A), A = A.sibling;
      return null;
    }
    function p(H, A) {
      for (H = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? H.set(A.key, A) : H.set(A.index, A), A = A.sibling;
      return H;
    }
    function g(H, A) {
      return H = Lo(H, A), H.index = 0, H.sibling = null, H;
    }
    function S(H, A, $) {
      return H.index = $, n ? ($ = H.alternate, $ !== null ? ($ = $.index, $ < A ? (H.flags |= 2, A) : $) : (H.flags |= 2, A)) : (H.flags |= 1048576, A);
    }
    function C(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function M(H, A, $, fe) {
      return A === null || A.tag !== 6 ? (A = Bu($, H.mode, fe), A.return = H, A) : (A = g(A, $), A.return = H, A);
    }
    function j(H, A, $, fe) {
      var Ue = $.type;
      return Ue === J ? ae(H, A, $.props.children, fe, $.key) : A !== null && (A.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === st && sm(Ue) === A.type) ? (fe = g(A, $.props), fe.ref = ds(H, A, $), fe.return = H, fe) : (fe = Of($.type, $.key, $.props, null, H.mode, fe), fe.ref = ds(H, A, $), fe.return = H, fe);
    }
    function Q(H, A, $, fe) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== $.containerInfo || A.stateNode.implementation !== $.implementation ? (A = Rl($, H.mode, fe), A.return = H, A) : (A = g(A, $.children || []), A.return = H, A);
    }
    function ae(H, A, $, fe, Ue) {
      return A === null || A.tag !== 7 ? (A = kl($, H.mode, fe, Ue), A.return = H, A) : (A = g(A, $), A.return = H, A);
    }
    function oe(H, A, $) {
      if (typeof A == "string" && A !== "" || typeof A == "number")
        return A = Bu("" + A, H.mode, $), A.return = H, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case re:
            return $ = Of(A.type, A.key, A.props, null, H.mode, $), $.ref = ds(H, null, A), $.return = H, $;
          case G:
            return A = Rl(A, H.mode, $), A.return = H, A;
          case st:
            var fe = A._init;
            return oe(H, fe(A._payload), $);
        }
        if (Ti(A) || Pe(A))
          return A = kl(A, H.mode, $, null), A.return = H, A;
        Zc(H, A);
      }
      return null;
    }
    function ne(H, A, $, fe) {
      var Ue = A !== null ? A.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return Ue !== null ? null : M(H, A, "" + $, fe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case re:
            return $.key === Ue ? j(H, A, $, fe) : null;
          case G:
            return $.key === Ue ? Q(H, A, $, fe) : null;
          case st:
            return Ue = $._init, ne(
              H,
              A,
              Ue($._payload),
              fe
            );
        }
        if (Ti($) || Pe($))
          return Ue !== null ? null : ae(H, A, $, fe, null);
        Zc(H, $);
      }
      return null;
    }
    function Ce(H, A, $, fe, Ue) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number")
        return H = H.get($) || null, M(A, H, "" + fe, Ue);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case re:
            return H = H.get(fe.key === null ? $ : fe.key) || null, j(A, H, fe, Ue);
          case G:
            return H = H.get(fe.key === null ? $ : fe.key) || null, Q(A, H, fe, Ue);
          case st:
            var Me = fe._init;
            return Ce(H, A, $, Me(fe._payload), Ue);
        }
        if (Ti(fe) || Pe(fe))
          return H = H.get($) || null, ae(A, H, fe, Ue, null);
        Zc(A, fe);
      }
      return null;
    }
    function Oe(H, A, $, fe) {
      for (var Ue = null, Me = null, ze = A, Je = A = 0, Yn = null; ze !== null && Je < $.length; Je++) {
        ze.index > Je ? (Yn = ze, ze = null) : Yn = ze.sibling;
        var xt = ne(H, ze, $[Je], fe);
        if (xt === null) {
          ze === null && (ze = Yn);
          break;
        }
        n && ze && xt.alternate === null && a(H, ze), A = S(xt, A, Je), Me === null ? Ue = xt : Me.sibling = xt, Me = xt, ze = Yn;
      }
      if (Je === $.length)
        return u(H, ze), Wt && aa(H, Je), Ue;
      if (ze === null) {
        for (; Je < $.length; Je++)
          ze = oe(H, $[Je], fe), ze !== null && (A = S(ze, A, Je), Me === null ? Ue = ze : Me.sibling = ze, Me = ze);
        return Wt && aa(H, Je), Ue;
      }
      for (ze = p(H, ze); Je < $.length; Je++)
        Yn = Ce(ze, H, Je, $[Je], fe), Yn !== null && (n && Yn.alternate !== null && ze.delete(Yn.key === null ? Je : Yn.key), A = S(Yn, A, Je), Me === null ? Ue = Yn : Me.sibling = Yn, Me = Yn);
      return n && ze.forEach(function(No) {
        return a(H, No);
      }), Wt && aa(H, Je), Ue;
    }
    function je(H, A, $, fe) {
      var Ue = Pe($);
      if (typeof Ue != "function")
        throw Error(l(150));
      if ($ = Ue.call($), $ == null)
        throw Error(l(151));
      for (var Me = Ue = null, ze = A, Je = A = 0, Yn = null, xt = $.next(); ze !== null && !xt.done; Je++, xt = $.next()) {
        ze.index > Je ? (Yn = ze, ze = null) : Yn = ze.sibling;
        var No = ne(H, ze, xt.value, fe);
        if (No === null) {
          ze === null && (ze = Yn);
          break;
        }
        n && ze && No.alternate === null && a(H, ze), A = S(No, A, Je), Me === null ? Ue = No : Me.sibling = No, Me = No, ze = Yn;
      }
      if (xt.done)
        return u(
          H,
          ze
        ), Wt && aa(H, Je), Ue;
      if (ze === null) {
        for (; !xt.done; Je++, xt = $.next())
          xt = oe(H, xt.value, fe), xt !== null && (A = S(xt, A, Je), Me === null ? Ue = xt : Me.sibling = xt, Me = xt);
        return Wt && aa(H, Je), Ue;
      }
      for (ze = p(H, ze); !xt.done; Je++, xt = $.next())
        xt = Ce(ze, H, Je, xt.value, fe), xt !== null && (n && xt.alternate !== null && ze.delete(xt.key === null ? Je : xt.key), A = S(xt, A, Je), Me === null ? Ue = xt : Me.sibling = xt, Me = xt);
      return n && ze.forEach(function(H0) {
        return a(H, H0);
      }), Wt && aa(H, Je), Ue;
    }
    function hn(H, A, $, fe) {
      if (typeof $ == "object" && $ !== null && $.type === J && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case re:
            e: {
              for (var Ue = $.key, Me = A; Me !== null; ) {
                if (Me.key === Ue) {
                  if (Ue = $.type, Ue === J) {
                    if (Me.tag === 7) {
                      u(H, Me.sibling), A = g(Me, $.props.children), A.return = H, H = A;
                      break e;
                    }
                  } else if (Me.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === st && sm(Ue) === Me.type) {
                    u(H, Me.sibling), A = g(Me, $.props), A.ref = ds(H, Me, $), A.return = H, H = A;
                    break e;
                  }
                  u(H, Me);
                  break;
                } else
                  a(H, Me);
                Me = Me.sibling;
              }
              $.type === J ? (A = kl($.props.children, H.mode, fe, $.key), A.return = H, H = A) : (fe = Of($.type, $.key, $.props, null, H.mode, fe), fe.ref = ds(H, A, $), fe.return = H, H = fe);
            }
            return C(H);
          case G:
            e: {
              for (Me = $.key; A !== null; ) {
                if (A.key === Me)
                  if (A.tag === 4 && A.stateNode.containerInfo === $.containerInfo && A.stateNode.implementation === $.implementation) {
                    u(H, A.sibling), A = g(A, $.children || []), A.return = H, H = A;
                    break e;
                  } else {
                    u(H, A);
                    break;
                  }
                else
                  a(H, A);
                A = A.sibling;
              }
              A = Rl($, H.mode, fe), A.return = H, H = A;
            }
            return C(H);
          case st:
            return Me = $._init, hn(H, A, Me($._payload), fe);
        }
        if (Ti($))
          return Oe(H, A, $, fe);
        if (Pe($))
          return je(H, A, $, fe);
        Zc(H, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? ($ = "" + $, A !== null && A.tag === 6 ? (u(H, A.sibling), A = g(A, $), A.return = H, H = A) : (u(H, A), A = Bu($, H.mode, fe), A.return = H, H = A), C(H)) : u(H, A);
    }
    return hn;
  }
  var ps = um(!0), cm = um(!1), ku = {}, Za = rt(ku), Ru = rt(ku), hs = rt(ku);
  function cl(n) {
    if (n === ku)
      throw Error(l(174));
    return n;
  }
  function hp(n, a) {
    switch (Rt(hs, a), Rt(Ru, n), Rt(Za, ku), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : mn(null, "");
        break;
      default:
        n = n === 8 ? a.parentNode : a, a = n.namespaceURI || null, n = n.tagName, a = mn(a, n);
    }
    kt(Za), Rt(Za, a);
  }
  function _o() {
    kt(Za), kt(Ru), kt(hs);
  }
  function Ve(n) {
    cl(hs.current);
    var a = cl(Za.current), u = mn(a, n.type);
    a !== u && (Rt(Ru, n), Rt(Za, u));
  }
  function ct(n) {
    Ru.current === n && (kt(Za), kt(Ru));
  }
  var Ge = rt(0);
  function nn(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128)
          return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === n)
        break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n)
          return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Ta = [];
  function Xc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Jc = se.ReactCurrentDispatcher, vp = se.ReactCurrentBatchConfig, fl = 0, Gt = null, ee = null, mt = null, qe = !1, di = !1, la = 0, dl = 0;
  function Qt() {
    throw Error(l(321));
  }
  function pl(n, a) {
    if (a === null)
      return !1;
    for (var u = 0; u < a.length && u < n.length; u++)
      if (!xa(n[u], a[u]))
        return !1;
    return !0;
  }
  function To(n, a, u, p, g, S) {
    if (fl = S, Gt = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Jc.current = n === null || n.memoizedState === null ? b0 : E0, n = u(p, g), di) {
      S = 0;
      do {
        if (di = !1, la = 0, 25 <= S)
          throw Error(l(301));
        S += 1, mt = ee = null, a.updateQueue = null, Jc.current = gp, n = u(p, g);
      } while (di);
    }
    if (Jc.current = mf, a = ee !== null && ee.next !== null, fl = 0, mt = ee = Gt = null, qe = !1, a)
      throw Error(l(300));
    return n;
  }
  function hl() {
    var n = la !== 0;
    return la = 0, n;
  }
  function ka() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? Gt.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function Hr() {
    if (ee === null) {
      var n = Gt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ee.next;
    var a = mt === null ? Gt.memoizedState : mt.next;
    if (a !== null)
      mt = a, ee = n;
    else {
      if (n === null)
        throw Error(l(310));
      ee = n, n = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, mt === null ? Gt.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function vl(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Du(n) {
    var a = Hr(), u = a.queue;
    if (u === null)
      throw Error(l(311));
    u.lastRenderedReducer = n;
    var p = ee, g = p.baseQueue, S = u.pending;
    if (S !== null) {
      if (g !== null) {
        var C = g.next;
        g.next = S.next, S.next = C;
      }
      p.baseQueue = g = S, u.pending = null;
    }
    if (g !== null) {
      S = g.next, p = p.baseState;
      var M = C = null, j = null, Q = S;
      do {
        var ae = Q.lane;
        if ((fl & ae) === ae)
          j !== null && (j = j.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), p = Q.hasEagerState ? Q.eagerState : n(p, Q.action);
        else {
          var oe = {
            lane: ae,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          j === null ? (M = j = oe, C = p) : j = j.next = oe, Gt.lanes |= ae, Ii |= ae;
        }
        Q = Q.next;
      } while (Q !== null && Q !== S);
      j === null ? C = p : j.next = M, xa(p, a.memoizedState) || (Sn = !0), a.memoizedState = p, a.baseState = C, a.baseQueue = j, u.lastRenderedState = p;
    }
    if (n = u.interleaved, n !== null) {
      g = n;
      do
        S = g.lane, Gt.lanes |= S, Ii |= S, g = g.next;
      while (g !== n);
    } else
      g === null && (u.lanes = 0);
    return [a.memoizedState, u.dispatch];
  }
  function Ou(n) {
    var a = Hr(), u = a.queue;
    if (u === null)
      throw Error(l(311));
    u.lastRenderedReducer = n;
    var p = u.dispatch, g = u.pending, S = a.memoizedState;
    if (g !== null) {
      u.pending = null;
      var C = g = g.next;
      do
        S = n(S, C.action), C = C.next;
      while (C !== g);
      xa(S, a.memoizedState) || (Sn = !0), a.memoizedState = S, a.baseQueue === null && (a.baseState = S), u.lastRenderedState = S;
    }
    return [S, p];
  }
  function ef() {
  }
  function tf(n, a) {
    var u = Gt, p = Hr(), g = a(), S = !xa(p.memoizedState, g);
    if (S && (p.memoizedState = g, Sn = !0), p = p.queue, Mu(af.bind(null, u, p, n), [n]), p.getSnapshot !== a || S || mt !== null && mt.memoizedState.tag & 1) {
      if (u.flags |= 2048, ml(9, rf.bind(null, u, p, g, a), void 0, null), rn === null)
        throw Error(l(349));
      fl & 30 || nf(u, a, g);
    }
    return g;
  }
  function nf(n, a, u) {
    n.flags |= 16384, n = { getSnapshot: a, value: u }, a = Gt.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, Gt.updateQueue = a, a.stores = [n]) : (u = a.stores, u === null ? a.stores = [n] : u.push(n));
  }
  function rf(n, a, u, p) {
    a.value = u, a.getSnapshot = p, of(a) && lf(n);
  }
  function af(n, a, u) {
    return u(function() {
      of(a) && lf(n);
    });
  }
  function of(n) {
    var a = n.getSnapshot;
    n = n.value;
    try {
      var u = a();
      return !xa(n, u);
    } catch {
      return !0;
    }
  }
  function lf(n) {
    var a = Ai(n, 1);
    a !== null && hr(a, n, 1, -1);
  }
  function sf(n) {
    var a = ka();
    return typeof n == "function" && (n = n()), a.memoizedState = a.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vl, lastRenderedState: n }, a.queue = n, n = n.dispatch = vf.bind(null, Gt, n), [a.memoizedState, n];
  }
  function ml(n, a, u, p) {
    return n = { tag: n, create: a, destroy: u, deps: p, next: null }, a = Gt.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, Gt.updateQueue = a, a.lastEffect = n.next = n) : (u = a.lastEffect, u === null ? a.lastEffect = n.next = n : (p = u.next, u.next = n, n.next = p, a.lastEffect = n)), n;
  }
  function uf() {
    return Hr().memoizedState;
  }
  function gl(n, a, u, p) {
    var g = ka();
    Gt.flags |= n, g.memoizedState = ml(1 | a, u, void 0, p === void 0 ? null : p);
  }
  function Fi(n, a, u, p) {
    var g = Hr();
    p = p === void 0 ? null : p;
    var S = void 0;
    if (ee !== null) {
      var C = ee.memoizedState;
      if (S = C.destroy, p !== null && pl(p, C.deps)) {
        g.memoizedState = ml(a, u, S, p);
        return;
      }
    }
    Gt.flags |= n, g.memoizedState = ml(1 | a, u, S, p);
  }
  function cf(n, a) {
    return gl(8390656, 8, n, a);
  }
  function Mu(n, a) {
    return Fi(2048, 8, n, a);
  }
  function ff(n, a) {
    return Fi(4, 2, n, a);
  }
  function df(n, a) {
    return Fi(4, 4, n, a);
  }
  function mp(n, a) {
    if (typeof a == "function")
      return n = n(), a(n), function() {
        a(null);
      };
    if (a != null)
      return n = n(), a.current = n, function() {
        a.current = null;
      };
  }
  function vs(n, a, u) {
    return u = u != null ? u.concat([n]) : null, Fi(4, 4, mp.bind(null, a, n), u);
  }
  function pf() {
  }
  function ms(n, a) {
    var u = Hr();
    a = a === void 0 ? null : a;
    var p = u.memoizedState;
    return p !== null && a !== null && pl(a, p[1]) ? p[0] : (u.memoizedState = [n, a], n);
  }
  function ko(n, a) {
    var u = Hr();
    a = a === void 0 ? null : a;
    var p = u.memoizedState;
    return p !== null && a !== null && pl(a, p[1]) ? p[0] : (n = n(), u.memoizedState = [n, a], n);
  }
  function Ir(n, a, u) {
    return fl & 21 ? (xa(u, a) || (u = bc(), Gt.lanes |= u, Ii |= u, n.baseState = !0), a) : (n.baseState && (n.baseState = !1, Sn = !0), n.memoizedState = u);
  }
  function w0(n, a) {
    var u = Nt;
    Nt = u !== 0 && 4 > u ? u : 4, n(!0);
    var p = vp.transition;
    vp.transition = {};
    try {
      n(!1), a();
    } finally {
      Nt = u, vp.transition = p;
    }
  }
  function Ht() {
    return Hr().memoizedState;
  }
  function hf(n, a, u) {
    var p = xn(n);
    if (u = { lane: p, action: u, hasEagerState: !1, eagerState: null, next: null }, gs(n))
      Lu(a, u);
    else if (u = rm(n, a, u, p), u !== null) {
      var g = pr();
      hr(u, n, p, g), fm(u, a, p);
    }
  }
  function vf(n, a, u) {
    var p = xn(n), g = { lane: p, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (gs(n))
      Lu(a, g);
    else {
      var S = n.alternate;
      if (n.lanes === 0 && (S === null || S.lanes === 0) && (S = a.lastRenderedReducer, S !== null))
        try {
          var C = a.lastRenderedState, M = S(C, u);
          if (g.hasEagerState = !0, g.eagerState = M, xa(M, C)) {
            var j = a.interleaved;
            j === null ? (g.next = g, cp(a)) : (g.next = j.next, j.next = g), a.interleaved = g;
            return;
          }
        } catch {
        } finally {
        }
      u = rm(n, a, g, p), u !== null && (g = pr(), hr(u, n, p, g), fm(u, a, p));
    }
  }
  function gs(n) {
    var a = n.alternate;
    return n === Gt || a !== null && a === Gt;
  }
  function Lu(n, a) {
    di = qe = !0;
    var u = n.pending;
    u === null ? a.next = a : (a.next = u.next, u.next = a), n.pending = a;
  }
  function fm(n, a, u) {
    if (u & 4194240) {
      var p = a.lanes;
      p &= n.pendingLanes, u |= p, a.lanes = u, au(n, u);
    }
  }
  var mf = { readContext: pn, useCallback: Qt, useContext: Qt, useEffect: Qt, useImperativeHandle: Qt, useInsertionEffect: Qt, useLayoutEffect: Qt, useMemo: Qt, useReducer: Qt, useRef: Qt, useState: Qt, useDebugValue: Qt, useDeferredValue: Qt, useTransition: Qt, useMutableSource: Qt, useSyncExternalStore: Qt, useId: Qt, unstable_isNewReconciler: !1 }, b0 = { readContext: pn, useCallback: function(n, a) {
    return ka().memoizedState = [n, a === void 0 ? null : a], n;
  }, useContext: pn, useEffect: cf, useImperativeHandle: function(n, a, u) {
    return u = u != null ? u.concat([n]) : null, gl(
      4194308,
      4,
      mp.bind(null, a, n),
      u
    );
  }, useLayoutEffect: function(n, a) {
    return gl(4194308, 4, n, a);
  }, useInsertionEffect: function(n, a) {
    return gl(4, 2, n, a);
  }, useMemo: function(n, a) {
    var u = ka();
    return a = a === void 0 ? null : a, n = n(), u.memoizedState = [n, a], n;
  }, useReducer: function(n, a, u) {
    var p = ka();
    return a = u !== void 0 ? u(a) : a, p.memoizedState = p.baseState = a, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: a }, p.queue = n, n = n.dispatch = hf.bind(null, Gt, n), [p.memoizedState, n];
  }, useRef: function(n) {
    var a = ka();
    return n = { current: n }, a.memoizedState = n;
  }, useState: sf, useDebugValue: pf, useDeferredValue: function(n) {
    return ka().memoizedState = n;
  }, useTransition: function() {
    var n = sf(!1), a = n[0];
    return n = w0.bind(null, n[1]), ka().memoizedState = n, [a, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, a, u) {
    var p = Gt, g = ka();
    if (Wt) {
      if (u === void 0)
        throw Error(l(407));
      u = u();
    } else {
      if (u = a(), rn === null)
        throw Error(l(349));
      fl & 30 || nf(p, a, u);
    }
    g.memoizedState = u;
    var S = { value: u, getSnapshot: a };
    return g.queue = S, cf(af.bind(
      null,
      p,
      S,
      n
    ), [n]), p.flags |= 2048, ml(9, rf.bind(null, p, S, u, a), void 0, null), u;
  }, useId: function() {
    var n = ka(), a = rn.identifierPrefix;
    if (Wt) {
      var u = Ui, p = Wn;
      u = (p & ~(1 << 32 - ga(p) - 1)).toString(32) + u, a = ":" + a + "R" + u, u = la++, 0 < u && (a += "H" + u.toString(32)), a += ":";
    } else
      u = dl++, a = ":" + a + "r" + u.toString(32) + ":";
    return n.memoizedState = a;
  }, unstable_isNewReconciler: !1 }, E0 = {
    readContext: pn,
    useCallback: ms,
    useContext: pn,
    useEffect: Mu,
    useImperativeHandle: vs,
    useInsertionEffect: ff,
    useLayoutEffect: df,
    useMemo: ko,
    useReducer: Du,
    useRef: uf,
    useState: function() {
      return Du(vl);
    },
    useDebugValue: pf,
    useDeferredValue: function(n) {
      var a = Hr();
      return Ir(a, ee.memoizedState, n);
    },
    useTransition: function() {
      var n = Du(vl)[0], a = Hr().memoizedState;
      return [n, a];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, gp = { readContext: pn, useCallback: ms, useContext: pn, useEffect: Mu, useImperativeHandle: vs, useInsertionEffect: ff, useLayoutEffect: df, useMemo: ko, useReducer: Ou, useRef: uf, useState: function() {
    return Ou(vl);
  }, useDebugValue: pf, useDeferredValue: function(n) {
    var a = Hr();
    return ee === null ? a.memoizedState = n : Ir(a, ee.memoizedState, n);
  }, useTransition: function() {
    var n = Ou(vl)[0], a = Hr().memoizedState;
    return [n, a];
  }, useMutableSource: ef, useSyncExternalStore: tf, useId: Ht, unstable_isNewReconciler: !1 };
  function ys(n, a) {
    try {
      var u = "", p = a;
      do
        u += ai(p), p = p.return;
      while (p);
      var g = u;
    } catch (S) {
      g = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: a, stack: g, digest: null };
  }
  function Nu(n, a, u) {
    return { value: n, source: null, stack: u ?? null, digest: a ?? null };
  }
  function gf(n, a) {
    try {
      console.error(a.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var C0 = typeof WeakMap == "function" ? WeakMap : Map;
  function dm(n, a, u) {
    u = zi(-1, u), u.tag = 3, u.payload = { element: null };
    var p = a.value;
    return u.callback = function() {
      Cf || (Cf = !0, bl = p), gf(n, a);
    }, u;
  }
  function ju(n, a, u) {
    u = zi(-1, u), u.tag = 3;
    var p = n.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var g = a.value;
      u.payload = function() {
        return p(g);
      }, u.callback = function() {
        gf(n, a);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (u.callback = function() {
      gf(n, a), typeof p != "function" && (vi === null ? vi = /* @__PURE__ */ new Set([this]) : vi.add(this));
      var C = a.stack;
      this.componentDidCatch(a.value, { componentStack: C !== null ? C : "" });
    }), u;
  }
  function pm(n, a, u) {
    var p = n.pingCache;
    if (p === null) {
      p = n.pingCache = new C0();
      var g = /* @__PURE__ */ new Set();
      p.set(a, g);
    } else
      g = p.get(a), g === void 0 && (g = /* @__PURE__ */ new Set(), p.set(a, g));
    g.has(u) || (g.add(u), n = M0.bind(null, n, a, u), a.then(n, n));
  }
  function yp(n) {
    do {
      var a;
      if ((a = n.tag === 13) && (a = n.memoizedState, a = a !== null ? a.dehydrated !== null : !0), a)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Sp(n, a, u, p, g) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = g, n) : (n === a ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (a = zi(-1, 1), a.tag = 2, Eo(u, a, 1))), u.lanes |= 1), n);
  }
  var _0 = se.ReactCurrentOwner, Sn = !1;
  function kn(n, a, u, p) {
    a.child = n === null ? cm(a, null, u, p) : ps(a, n.child, u, p);
  }
  function Ro(n, a, u, p, g) {
    u = u.render;
    var S = a.ref;
    return ge(a, g), p = To(n, a, u, p, S, g), u = hl(), n !== null && !Sn ? (a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~g, Qn(n, a, g)) : (Wt && u && Yc(a), a.flags |= 1, kn(n, a, p, g), a.child);
  }
  function yf(n, a, u, p, g) {
    if (n === null) {
      var S = u.type;
      return typeof S == "function" && !Fp(S) && S.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (a.tag = 15, a.type = S, Yr(n, a, S, p, g)) : (n = Of(u.type, null, p, a, a.mode, g), n.ref = a.ref, n.return = a, a.child = n);
    }
    if (S = n.child, !(n.lanes & g)) {
      var C = S.memoizedProps;
      if (u = u.compare, u = u !== null ? u : vu, u(C, p) && n.ref === a.ref)
        return Qn(n, a, g);
    }
    return a.flags |= 1, n = Lo(S, p), n.ref = a.ref, n.return = a, a.child = n;
  }
  function Yr(n, a, u, p, g) {
    if (n !== null) {
      var S = n.memoizedProps;
      if (vu(S, p) && n.ref === a.ref)
        if (Sn = !1, a.pendingProps = p = S, (n.lanes & g) !== 0)
          n.flags & 131072 && (Sn = !0);
        else
          return a.lanes = n.lanes, Qn(n, a, g);
    }
    return Ss(n, a, u, p, g);
  }
  function yl(n, a, u) {
    var p = a.pendingProps, g = p.children, S = n !== null ? n.memoizedState : null;
    if (p.mode === "hidden")
      if (!(a.mode & 1))
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Rt(_s, sa), sa |= u;
      else {
        if (!(u & 1073741824))
          return n = S !== null ? S.baseLanes | u : u, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, a.updateQueue = null, Rt(_s, sa), sa |= n, null;
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = S !== null ? S.baseLanes : u, Rt(_s, sa), sa |= p;
      }
    else
      S !== null ? (p = S.baseLanes | u, a.memoizedState = null) : p = u, Rt(_s, sa), sa |= p;
    return kn(n, a, g, u), a.child;
  }
  function at(n, a) {
    var u = a.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (a.flags |= 512, a.flags |= 2097152);
  }
  function Ss(n, a, u, p, g) {
    var S = Xt(u) ? Ur : Xe.current;
    return S = ba(a, S), ge(a, g), u = To(n, a, u, p, S, g), p = hl(), n !== null && !Sn ? (a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~g, Qn(n, a, g)) : (Wt && p && Yc(a), a.flags |= 1, kn(n, a, u, g), a.child);
  }
  function xp(n, a, u, p, g) {
    if (Xt(u)) {
      var S = !0;
      Ic(a);
    } else
      S = !1;
    if (ge(a, g), a.stateNode === null)
      cr(n, a), om(a, u, p), Kc(a, u, p, g), p = !0;
    else if (n === null) {
      var C = a.stateNode, M = a.memoizedProps;
      C.props = M;
      var j = C.context, Q = u.contextType;
      typeof Q == "object" && Q !== null ? Q = pn(Q) : (Q = Xt(u) ? Ur : Xe.current, Q = ba(a, Q));
      var ae = u.getDerivedStateFromProps, oe = typeof ae == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      oe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (M !== p || j !== Q) && lm(a, C, p, Q), bo = !1;
      var ne = a.memoizedState;
      C.state = ne, Co(a, p, C, g), j = a.memoizedState, M !== p || ne !== j || sn.current || bo ? (typeof ae == "function" && (pp(a, u, ae, p), j = a.memoizedState), (M = bo || im(a, u, M, p, ne, j, Q)) ? (oe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = p, a.memoizedState = j), C.props = p, C.state = j, C.context = Q, p = M) : (typeof C.componentDidMount == "function" && (a.flags |= 4194308), p = !1);
    } else {
      C = a.stateNode, Tn(n, a), M = a.memoizedProps, Q = a.type === a.elementType ? M : oa(a.type, M), C.props = Q, oe = a.pendingProps, ne = C.context, j = u.contextType, typeof j == "object" && j !== null ? j = pn(j) : (j = Xt(u) ? Ur : Xe.current, j = ba(a, j));
      var Ce = u.getDerivedStateFromProps;
      (ae = typeof Ce == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (M !== oe || ne !== j) && lm(a, C, p, j), bo = !1, ne = a.memoizedState, C.state = ne, Co(a, p, C, g);
      var Oe = a.memoizedState;
      M !== oe || ne !== Oe || sn.current || bo ? (typeof Ce == "function" && (pp(a, u, Ce, p), Oe = a.memoizedState), (Q = bo || im(a, u, Q, p, ne, Oe, j) || !1) ? (ae || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(p, Oe, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(p, Oe, j)), typeof C.componentDidUpdate == "function" && (a.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || M === n.memoizedProps && ne === n.memoizedState || (a.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && ne === n.memoizedState || (a.flags |= 1024), a.memoizedProps = p, a.memoizedState = Oe), C.props = p, C.state = Oe, C.context = j, p = Q) : (typeof C.componentDidUpdate != "function" || M === n.memoizedProps && ne === n.memoizedState || (a.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && ne === n.memoizedState || (a.flags |= 1024), p = !1);
    }
    return hm(n, a, u, p, S, g);
  }
  function hm(n, a, u, p, g, S) {
    at(n, a);
    var C = (a.flags & 128) !== 0;
    if (!p && !C)
      return g && Jv(a, u, !1), Qn(n, a, S);
    p = a.stateNode, _0.current = a;
    var M = C && typeof u.getDerivedStateFromError != "function" ? null : p.render();
    return a.flags |= 1, n !== null && C ? (a.child = ps(a, n.child, null, S), a.child = ps(a, null, M, S)) : kn(n, a, M, S), a.memoizedState = p.state, g && Jv(a, u, !0), a.child;
  }
  function vm(n) {
    var a = n.stateNode;
    a.pendingContext ? yo(n, a.pendingContext, a.pendingContext !== a.context) : a.context && yo(n, a.context, !1), hp(n, a.containerInfo);
  }
  function Sf(n, a, u, p, g) {
    return tn(), lp(g), a.flags |= 256, kn(n, a, u, p), a.child;
  }
  var Sl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function wp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function bp(n, a, u) {
    var p = a.pendingProps, g = Ge.current, S = !1, C = (a.flags & 128) !== 0, M;
    if ((M = C) || (M = n !== null && n.memoizedState === null ? !1 : (g & 2) !== 0), M ? (S = !0, a.flags &= -129) : (n === null || n.memoizedState !== null) && (g |= 1), Rt(Ge, g & 1), n === null)
      return Vc(a), n = a.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (a.mode & 1 ? n.data === "$!" ? a.lanes = 8 : a.lanes = 1073741824 : a.lanes = 1, null) : (C = p.children, n = p.fallback, S ? (p = a.mode, S = a.child, C = { mode: "hidden", children: C }, !(p & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = C) : S = Vu(C, p, 0, null), n = kl(n, p, u, null), S.return = a, n.return = a, S.sibling = n, a.child = S, a.child.memoizedState = wp(u), a.memoizedState = Sl, n) : Ep(a, C));
    if (g = n.memoizedState, g !== null && (M = g.dehydrated, M !== null))
      return T0(n, a, C, p, M, g, u);
    if (S) {
      S = p.fallback, C = a.mode, g = n.child, M = g.sibling;
      var j = { mode: "hidden", children: p.children };
      return !(C & 1) && a.child !== g ? (p = a.child, p.childLanes = 0, p.pendingProps = j, a.deletions = null) : (p = Lo(g, j), p.subtreeFlags = g.subtreeFlags & 14680064), M !== null ? S = Lo(M, S) : (S = kl(S, C, u, null), S.flags |= 2), S.return = a, p.return = a, p.sibling = S, a.child = p, p = S, S = a.child, C = n.child.memoizedState, C = C === null ? wp(u) : { baseLanes: C.baseLanes | u, cachePool: null, transitions: C.transitions }, S.memoizedState = C, S.childLanes = n.childLanes & ~u, a.memoizedState = Sl, p;
    }
    return S = n.child, n = S.sibling, p = Lo(S, { mode: "visible", children: p.children }), !(a.mode & 1) && (p.lanes = u), p.return = a, p.sibling = null, n !== null && (u = a.deletions, u === null ? (a.deletions = [n], a.flags |= 16) : u.push(n)), a.child = p, a.memoizedState = null, p;
  }
  function Ep(n, a) {
    return a = Vu({ mode: "visible", children: a }, n.mode, 0, null), a.return = n, n.child = a;
  }
  function xs(n, a, u, p) {
    return p !== null && lp(p), ps(a, n.child, null, u), n = Ep(a, a.pendingProps.children), n.flags |= 2, a.memoizedState = null, n;
  }
  function T0(n, a, u, p, g, S, C) {
    if (u)
      return a.flags & 256 ? (a.flags &= -257, p = Nu(Error(l(422))), xs(n, a, C, p)) : a.memoizedState !== null ? (a.child = n.child, a.flags |= 128, null) : (S = p.fallback, g = a.mode, p = Vu({ mode: "visible", children: p.children }, g, 0, null), S = kl(S, g, C, null), S.flags |= 2, p.return = a, S.return = a, p.sibling = S, a.child = p, a.mode & 1 && ps(a, n.child, null, C), a.child.memoizedState = wp(C), a.memoizedState = Sl, S);
    if (!(a.mode & 1))
      return xs(n, a, C, null);
    if (g.data === "$!") {
      if (p = g.nextSibling && g.nextSibling.dataset, p)
        var M = p.dgst;
      return p = M, S = Error(l(419)), p = Nu(S, p, void 0), xs(n, a, C, p);
    }
    if (M = (C & n.childLanes) !== 0, Sn || M) {
      if (p = rn, p !== null) {
        switch (C & -C) {
          case 4:
            g = 2;
            break;
          case 16:
            g = 8;
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
            g = 32;
            break;
          case 536870912:
            g = 268435456;
            break;
          default:
            g = 0;
        }
        g = g & (p.suspendedLanes | C) ? 0 : g, g !== 0 && g !== S.retryLane && (S.retryLane = g, Ai(n, g), hr(p, n, g, -1));
      }
      return Up(), p = Nu(Error(l(421))), xs(n, a, C, p);
    }
    return g.data === "$?" ? (a.flags |= 128, a.child = n.child, a = L0.bind(null, n), g._reactRetry = a, null) : (n = S.treeContext, Pr = Ka(g.nextSibling), ia = a, Wt = !0, _a = null, n !== null && (Fr[ur++] = Wn, Fr[ur++] = Ui, Fr[ur++] = Ca, Wn = n.id, Ui = n.overflow, Ca = a), a = Ep(a, p.children), a.flags |= 4096, a);
  }
  function Cp(n, a, u) {
    n.lanes |= a;
    var p = n.alternate;
    p !== null && (p.lanes |= a), Pn(n.return, a, u);
  }
  function xf(n, a, u, p, g) {
    var S = n.memoizedState;
    S === null ? n.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: p, tail: u, tailMode: g } : (S.isBackwards = a, S.rendering = null, S.renderingStartTime = 0, S.last = p, S.tail = u, S.tailMode = g);
  }
  function _p(n, a, u) {
    var p = a.pendingProps, g = p.revealOrder, S = p.tail;
    if (kn(n, a, p.children, u), p = Ge.current, p & 2)
      p = p & 1 | 2, a.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = a.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Cp(n, u, a);
            else if (n.tag === 19)
              Cp(n, u, a);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === a)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      p &= 1;
    }
    if (Rt(Ge, p), !(a.mode & 1))
      a.memoizedState = null;
    else
      switch (g) {
        case "forwards":
          for (u = a.child, g = null; u !== null; )
            n = u.alternate, n !== null && nn(n) === null && (g = u), u = u.sibling;
          u = g, u === null ? (g = a.child, a.child = null) : (g = u.sibling, u.sibling = null), xf(a, !1, g, u, S);
          break;
        case "backwards":
          for (u = null, g = a.child, a.child = null; g !== null; ) {
            if (n = g.alternate, n !== null && nn(n) === null) {
              a.child = g;
              break;
            }
            n = g.sibling, g.sibling = u, u = g, g = n;
          }
          xf(a, !0, u, null, S);
          break;
        case "together":
          xf(a, !1, null, null, void 0);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function cr(n, a) {
    !(a.mode & 1) && n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2);
  }
  function Qn(n, a, u) {
    if (n !== null && (a.dependencies = n.dependencies), Ii |= a.lanes, !(u & a.childLanes))
      return null;
    if (n !== null && a.child !== n.child)
      throw Error(l(153));
    if (a.child !== null) {
      for (n = a.child, u = Lo(n, n.pendingProps), a.child = u, u.return = a; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Lo(n, n.pendingProps), u.return = a;
      u.sibling = null;
    }
    return a.child;
  }
  function Pi(n, a, u) {
    switch (a.tag) {
      case 3:
        vm(a), tn();
        break;
      case 5:
        Ve(a);
        break;
      case 1:
        Xt(a.type) && Ic(a);
        break;
      case 4:
        hp(a, a.stateNode.containerInfo);
        break;
      case 10:
        var p = a.type._context, g = a.memoizedProps.value;
        Rt(fi, p._currentValue), p._currentValue = g;
        break;
      case 13:
        if (p = a.memoizedState, p !== null)
          return p.dehydrated !== null ? (Rt(Ge, Ge.current & 1), a.flags |= 128, null) : u & a.child.childLanes ? bp(n, a, u) : (Rt(Ge, Ge.current & 1), n = Qn(n, a, u), n !== null ? n.sibling : null);
        Rt(Ge, Ge.current & 1);
        break;
      case 19:
        if (p = (u & a.childLanes) !== 0, n.flags & 128) {
          if (p)
            return _p(n, a, u);
          a.flags |= 128;
        }
        if (g = a.memoizedState, g !== null && (g.rendering = null, g.tail = null, g.lastEffect = null), Rt(Ge, Ge.current), p)
          break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, yl(n, a, u);
    }
    return Qn(n, a, u);
  }
  var Uu, xl, Ra, Rn;
  Uu = function(n, a) {
    for (var u = a.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === a)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === a)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, xl = function() {
  }, Ra = function(n, a, u, p) {
    var g = n.memoizedProps;
    if (g !== p) {
      n = a.stateNode, cl(Za.current);
      var S = null;
      switch (u) {
        case "input":
          g = ir(n, g), p = ir(n, p), S = [];
          break;
        case "select":
          g = be({}, g, { value: void 0 }), p = be({}, p, { value: void 0 }), S = [];
          break;
        case "textarea":
          g = Ia(n, g), p = Ia(n, p), S = [];
          break;
        default:
          typeof g.onClick != "function" && typeof p.onClick == "function" && (n.onclick = Hc);
      }
      jn(u, p);
      var C;
      u = null;
      for (Q in g)
        if (!p.hasOwnProperty(Q) && g.hasOwnProperty(Q) && g[Q] != null)
          if (Q === "style") {
            var M = g[Q];
            for (C in M)
              M.hasOwnProperty(C) && (u || (u = {}), u[C] = "");
          } else
            Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (d.hasOwnProperty(Q) ? S || (S = []) : (S = S || []).push(Q, null));
      for (Q in p) {
        var j = p[Q];
        if (M = g != null ? g[Q] : void 0, p.hasOwnProperty(Q) && j !== M && (j != null || M != null))
          if (Q === "style")
            if (M) {
              for (C in M)
                !M.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (u || (u = {}), u[C] = "");
              for (C in j)
                j.hasOwnProperty(C) && M[C] !== j[C] && (u || (u = {}), u[C] = j[C]);
            } else
              u || (S || (S = []), S.push(
                Q,
                u
              )), u = j;
          else
            Q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, M = M ? M.__html : void 0, j != null && M !== j && (S = S || []).push(Q, j)) : Q === "children" ? typeof j != "string" && typeof j != "number" || (S = S || []).push(Q, "" + j) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (d.hasOwnProperty(Q) ? (j != null && Q === "onScroll" && Pt("scroll", n), S || M === j || (S = [])) : (S = S || []).push(Q, j));
      }
      u && (S = S || []).push("style", u);
      var Q = S;
      (a.updateQueue = Q) && (a.flags |= 4);
    }
  }, Rn = function(n, a, u, p) {
    u !== p && (a.flags |= 4);
  };
  function Au(n, a) {
    if (!Wt)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var p = null; u !== null; )
            u.alternate !== null && (p = u), u = u.sibling;
          p === null ? a || n.tail === null ? n.tail = null : n.tail.sibling = null : p.sibling = null;
      }
  }
  function fr(n) {
    var a = n.alternate !== null && n.alternate.child === n.child, u = 0, p = 0;
    if (a)
      for (var g = n.child; g !== null; )
        u |= g.lanes | g.childLanes, p |= g.subtreeFlags & 14680064, p |= g.flags & 14680064, g.return = n, g = g.sibling;
    else
      for (g = n.child; g !== null; )
        u |= g.lanes | g.childLanes, p |= g.subtreeFlags, p |= g.flags, g.return = n, g = g.sibling;
    return n.subtreeFlags |= p, n.childLanes = u, a;
  }
  function k0(n, a, u) {
    var p = a.pendingProps;
    switch (ip(a), a.tag) {
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
        return fr(a), null;
      case 1:
        return Xt(a.type) && Ea(), fr(a), null;
      case 3:
        return p = a.stateNode, _o(), kt(sn), kt(Xe), Xc(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), (n === null || n.child === null) && (Bc(a) ? a.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, _a !== null && ($u(_a), _a = null))), xl(n, a), fr(a), null;
      case 5:
        ct(a);
        var g = cl(hs.current);
        if (u = a.type, n !== null && a.stateNode != null)
          Ra(n, a, u, p, g), n.ref !== a.ref && (a.flags |= 512, a.flags |= 2097152);
        else {
          if (!p) {
            if (a.stateNode === null)
              throw Error(l(166));
            return fr(a), null;
          }
          if (n = cl(Za.current), Bc(a)) {
            p = a.stateNode, u = a.type;
            var S = a.memoizedProps;
            switch (p[ui] = a, p[ll] = S, n = (a.mode & 1) !== 0, u) {
              case "dialog":
                Pt("cancel", p), Pt("close", p);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", p);
                break;
              case "video":
              case "audio":
                for (g = 0; g < Su.length; g++)
                  Pt(Su[g], p);
                break;
              case "source":
                Pt("error", p);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  p
                ), Pt("load", p);
                break;
              case "details":
                Pt("toggle", p);
                break;
              case "input":
                Bn(p, S), Pt("invalid", p);
                break;
              case "select":
                p._wrapperState = { wasMultiple: !!S.multiple }, Pt("invalid", p);
                break;
              case "textarea":
                Zr(p, S), Pt("invalid", p);
            }
            jn(u, S), g = null;
            for (var C in S)
              if (S.hasOwnProperty(C)) {
                var M = S[C];
                C === "children" ? typeof M == "string" ? p.textContent !== M && (S.suppressHydrationWarning !== !0 && Pc(p.textContent, M, n), g = ["children", M]) : typeof M == "number" && p.textContent !== "" + M && (S.suppressHydrationWarning !== !0 && Pc(
                  p.textContent,
                  M,
                  n
                ), g = ["children", "" + M]) : d.hasOwnProperty(C) && M != null && C === "onScroll" && Pt("scroll", p);
              }
            switch (u) {
              case "input":
                Lr(p), ma(p, S, !0);
                break;
              case "textarea":
                Lr(p), Xr(p);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (p.onclick = Hc);
            }
            p = g, a.updateQueue = p, p !== null && (a.flags |= 4);
          } else {
            C = g.nodeType === 9 ? g : g.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof p.is == "string" ? n = C.createElement(u, { is: p.is }) : (n = C.createElement(u), u === "select" && (C = n, p.multiple ? C.multiple = !0 : p.size && (C.size = p.size))) : n = C.createElementNS(n, u), n[ui] = a, n[ll] = p, Uu(n, a, !1, !1), a.stateNode = n;
            e: {
              switch (C = dn(u, p), u) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), g = p;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), g = p;
                  break;
                case "video":
                case "audio":
                  for (g = 0; g < Su.length; g++)
                    Pt(Su[g], n);
                  g = p;
                  break;
                case "source":
                  Pt("error", n), g = p;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), g = p;
                  break;
                case "details":
                  Pt("toggle", n), g = p;
                  break;
                case "input":
                  Bn(n, p), g = ir(n, p), Pt("invalid", n);
                  break;
                case "option":
                  g = p;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!p.multiple }, g = be({}, p, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Zr(n, p), g = Ia(n, p), Pt("invalid", n);
                  break;
                default:
                  g = p;
              }
              jn(u, g), M = g;
              for (S in M)
                if (M.hasOwnProperty(S)) {
                  var j = M[S];
                  S === "style" ? Lt(n, j) : S === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && io(n, j)) : S === "children" ? typeof j == "string" ? (u !== "textarea" || j !== "") && $a(n, j) : typeof j == "number" && $a(n, "" + j) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (d.hasOwnProperty(S) ? j != null && S === "onScroll" && Pt("scroll", n) : j != null && X(n, S, j, C));
                }
              switch (u) {
                case "input":
                  Lr(n), ma(n, p, !1);
                  break;
                case "textarea":
                  Lr(n), Xr(n);
                  break;
                case "option":
                  p.value != null && n.setAttribute("value", "" + ar(p.value));
                  break;
                case "select":
                  n.multiple = !!p.multiple, S = p.value, S != null ? oi(n, !!p.multiple, S, !1) : p.defaultValue != null && oi(
                    n,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof g.onClick == "function" && (n.onclick = Hc);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  p = !!p.autoFocus;
                  break e;
                case "img":
                  p = !0;
                  break e;
                default:
                  p = !1;
              }
            }
            p && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 512, a.flags |= 2097152);
        }
        return fr(a), null;
      case 6:
        if (n && a.stateNode != null)
          Rn(n, a, n.memoizedProps, p);
        else {
          if (typeof p != "string" && a.stateNode === null)
            throw Error(l(166));
          if (u = cl(hs.current), cl(Za.current), Bc(a)) {
            if (p = a.stateNode, u = a.memoizedProps, p[ui] = a, (S = p.nodeValue !== u) && (n = ia, n !== null))
              switch (n.tag) {
                case 3:
                  Pc(p.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Pc(p.nodeValue, u, (n.mode & 1) !== 0);
              }
            S && (a.flags |= 4);
          } else
            p = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(p), p[ui] = a, a.stateNode = p;
        }
        return fr(a), null;
      case 13:
        if (kt(Ge), p = a.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Wt && Pr !== null && a.mode & 1 && !(a.flags & 128))
            nm(), tn(), a.flags |= 98560, S = !1;
          else if (S = Bc(a), p !== null && p.dehydrated !== null) {
            if (n === null) {
              if (!S)
                throw Error(l(318));
              if (S = a.memoizedState, S = S !== null ? S.dehydrated : null, !S)
                throw Error(l(317));
              S[ui] = a;
            } else
              tn(), !(a.flags & 128) && (a.memoizedState = null), a.flags |= 4;
            fr(a), S = !1;
          } else
            _a !== null && ($u(_a), _a = null), S = !0;
          if (!S)
            return a.flags & 65536 ? a : null;
        }
        return a.flags & 128 ? (a.lanes = u, a) : (p = p !== null, p !== (n !== null && n.memoizedState !== null) && p && (a.child.flags |= 8192, a.mode & 1 && (n === null || Ge.current & 1 ? On === 0 && (On = 3) : Up())), a.updateQueue !== null && (a.flags |= 4), fr(a), null);
      case 4:
        return _o(), xl(n, a), n === null && us(a.stateNode.containerInfo), fr(a), null;
      case 10:
        return wo(a.type._context), fr(a), null;
      case 17:
        return Xt(a.type) && Ea(), fr(a), null;
      case 19:
        if (kt(Ge), S = a.memoizedState, S === null)
          return fr(a), null;
        if (p = (a.flags & 128) !== 0, C = S.rendering, C === null)
          if (p)
            Au(S, !1);
          else {
            if (On !== 0 || n !== null && n.flags & 128)
              for (n = a.child; n !== null; ) {
                if (C = nn(n), C !== null) {
                  for (a.flags |= 128, Au(S, !1), p = C.updateQueue, p !== null && (a.updateQueue = p, a.flags |= 4), a.subtreeFlags = 0, p = u, u = a.child; u !== null; )
                    S = u, n = p, S.flags &= 14680066, C = S.alternate, C === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = C.childLanes, S.lanes = C.lanes, S.child = C.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = C.memoizedProps, S.memoizedState = C.memoizedState, S.updateQueue = C.updateQueue, S.type = C.type, n = C.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Rt(Ge, Ge.current & 1 | 2), a.child;
                }
                n = n.sibling;
              }
            S.tail !== null && bt() > ks && (a.flags |= 128, p = !0, Au(S, !1), a.lanes = 4194304);
          }
        else {
          if (!p)
            if (n = nn(C), n !== null) {
              if (a.flags |= 128, p = !0, u = n.updateQueue, u !== null && (a.updateQueue = u, a.flags |= 4), Au(S, !0), S.tail === null && S.tailMode === "hidden" && !C.alternate && !Wt)
                return fr(a), null;
            } else
              2 * bt() - S.renderingStartTime > ks && u !== 1073741824 && (a.flags |= 128, p = !0, Au(S, !1), a.lanes = 4194304);
          S.isBackwards ? (C.sibling = a.child, a.child = C) : (u = S.last, u !== null ? u.sibling = C : a.child = C, S.last = C);
        }
        return S.tail !== null ? (a = S.tail, S.rendering = a, S.tail = a.sibling, S.renderingStartTime = bt(), a.sibling = null, u = Ge.current, Rt(Ge, p ? u & 1 | 2 : u & 1), a) : (fr(a), null);
      case 22:
      case 23:
        return jp(), p = a.memoizedState !== null, n !== null && n.memoizedState !== null !== p && (a.flags |= 8192), p && a.mode & 1 ? sa & 1073741824 && (fr(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : fr(a), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, a.tag));
  }
  function Tp(n, a) {
    switch (ip(a), a.tag) {
      case 1:
        return Xt(a.type) && Ea(), n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 3:
        return _o(), kt(sn), kt(Xe), Xc(), n = a.flags, n & 65536 && !(n & 128) ? (a.flags = n & -65537 | 128, a) : null;
      case 5:
        return ct(a), null;
      case 13:
        if (kt(Ge), n = a.memoizedState, n !== null && n.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(l(340));
          tn();
        }
        return n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 19:
        return kt(Ge), null;
      case 4:
        return _o(), null;
      case 10:
        return wo(a.type._context), null;
      case 22:
      case 23:
        return jp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zu = !1, Dn = !1, mm = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function ws(n, a) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (p) {
          cn(n, a, p);
        }
      else
        u.current = null;
  }
  function Fu(n, a, u) {
    try {
      u();
    } catch (p) {
      cn(n, a, p);
    }
  }
  var gm = !1;
  function ym(n, a) {
    if (Zd = el, n = jc(), Mi(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var p = u.getSelection && u.getSelection();
          if (p && p.rangeCount !== 0) {
            u = p.anchorNode;
            var g = p.anchorOffset, S = p.focusNode;
            p = p.focusOffset;
            try {
              u.nodeType, S.nodeType;
            } catch {
              u = null;
              break e;
            }
            var C = 0, M = -1, j = -1, Q = 0, ae = 0, oe = n, ne = null;
            t:
              for (; ; ) {
                for (var Ce; oe !== u || g !== 0 && oe.nodeType !== 3 || (M = C + g), oe !== S || p !== 0 && oe.nodeType !== 3 || (j = C + p), oe.nodeType === 3 && (C += oe.nodeValue.length), (Ce = oe.firstChild) !== null; )
                  ne = oe, oe = Ce;
                for (; ; ) {
                  if (oe === n)
                    break t;
                  if (ne === u && ++Q === g && (M = C), ne === S && ++ae === p && (j = C), (Ce = oe.nextSibling) !== null)
                    break;
                  oe = ne, ne = oe.parentNode;
                }
                oe = Ce;
              }
            u = M === -1 || j === -1 ? null : { start: M, end: j };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (il = { focusedElem: n, selectionRange: u }, el = !1, Re = a; Re !== null; )
      if (a = Re, n = a.child, (a.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = a, Re = n;
      else
        for (; Re !== null; ) {
          a = Re;
          try {
            var Oe = a.alternate;
            if (a.flags & 1024)
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Oe !== null) {
                    var je = Oe.memoizedProps, hn = Oe.memoizedState, H = a.stateNode, A = H.getSnapshotBeforeUpdate(a.elementType === a.type ? je : oa(a.type, je), hn);
                    H.__reactInternalSnapshotBeforeUpdate = A;
                  }
                  break;
                case 3:
                  var $ = a.stateNode.containerInfo;
                  $.nodeType === 1 ? $.textContent = "" : $.nodeType === 9 && $.documentElement && $.removeChild($.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (fe) {
            cn(a, a.return, fe);
          }
          if (n = a.sibling, n !== null) {
            n.return = a.return, Re = n;
            break;
          }
          Re = a.return;
        }
    return Oe = gm, gm = !1, Oe;
  }
  function Pu(n, a, u) {
    var p = a.updateQueue;
    if (p = p !== null ? p.lastEffect : null, p !== null) {
      var g = p = p.next;
      do {
        if ((g.tag & n) === n) {
          var S = g.destroy;
          g.destroy = void 0, S !== void 0 && Fu(a, u, S);
        }
        g = g.next;
      } while (g !== p);
    }
  }
  function Hu(n, a) {
    if (a = a.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
      var u = a = a.next;
      do {
        if ((u.tag & n) === n) {
          var p = u.create;
          u.destroy = p();
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function kp(n) {
    var a = n.ref;
    if (a !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof a == "function" ? a(n) : a.current = n;
    }
  }
  function Rp(n) {
    var a = n.alternate;
    a !== null && (n.alternate = null, Rp(a)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (a = n.stateNode, a !== null && (delete a[ui], delete a[ll], delete a[ep], delete a[x0], delete a[tp])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Sm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function wf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Sm(n.return))
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
  function bs(n, a, u) {
    var p = n.tag;
    if (p === 5 || p === 6)
      n = n.stateNode, a ? u.nodeType === 8 ? u.parentNode.insertBefore(n, a) : u.insertBefore(n, a) : (u.nodeType === 8 ? (a = u.parentNode, a.insertBefore(n, u)) : (a = u, a.appendChild(n)), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = Hc));
    else if (p !== 4 && (n = n.child, n !== null))
      for (bs(n, a, u), n = n.sibling; n !== null; )
        bs(n, a, u), n = n.sibling;
  }
  function pi(n, a, u) {
    var p = n.tag;
    if (p === 5 || p === 6)
      n = n.stateNode, a ? u.insertBefore(n, a) : u.appendChild(n);
    else if (p !== 4 && (n = n.child, n !== null))
      for (pi(n, a, u), n = n.sibling; n !== null; )
        pi(n, a, u), n = n.sibling;
  }
  var Jt = null, Hn = !1;
  function Da(n, a, u) {
    for (u = u.child; u !== null; )
      Es(n, a, u), u = u.sibling;
  }
  function Es(n, a, u) {
    if (Ba && typeof Ba.onCommitFiberUnmount == "function")
      try {
        Ba.onCommitFiberUnmount(ru, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Dn || ws(u, a);
      case 6:
        var p = Jt, g = Hn;
        Jt = null, Da(n, a, u), Jt = p, Hn = g, Jt !== null && (Hn ? (n = Jt, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : Jt.removeChild(u.stateNode));
        break;
      case 18:
        Jt !== null && (Hn ? (n = Jt, u = u.stateNode, n.nodeType === 8 ? vo(n.parentNode, u) : n.nodeType === 1 && vo(n, u), su(n)) : vo(Jt, u.stateNode));
        break;
      case 4:
        p = Jt, g = Hn, Jt = u.stateNode.containerInfo, Hn = !0, Da(n, a, u), Jt = p, Hn = g;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dn && (p = u.updateQueue, p !== null && (p = p.lastEffect, p !== null))) {
          g = p = p.next;
          do {
            var S = g, C = S.destroy;
            S = S.tag, C !== void 0 && (S & 2 || S & 4) && Fu(u, a, C), g = g.next;
          } while (g !== p);
        }
        Da(n, a, u);
        break;
      case 1:
        if (!Dn && (ws(u, a), p = u.stateNode, typeof p.componentWillUnmount == "function"))
          try {
            p.props = u.memoizedProps, p.state = u.memoizedState, p.componentWillUnmount();
          } catch (M) {
            cn(u, a, M);
          }
        Da(n, a, u);
        break;
      case 21:
        Da(n, a, u);
        break;
      case 22:
        u.mode & 1 ? (Dn = (p = Dn) || u.memoizedState !== null, Da(n, a, u), Dn = p) : Da(n, a, u);
        break;
      default:
        Da(n, a, u);
    }
  }
  function Hi(n) {
    var a = n.updateQueue;
    if (a !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new mm()), a.forEach(function(p) {
        var g = N0.bind(null, n, p);
        u.has(p) || (u.add(p), p.then(g, g));
      });
    }
  }
  function Xa(n, a) {
    var u = a.deletions;
    if (u !== null)
      for (var p = 0; p < u.length; p++) {
        var g = u[p];
        try {
          var S = n, C = a, M = C;
          e:
            for (; M !== null; ) {
              switch (M.tag) {
                case 5:
                  Jt = M.stateNode, Hn = !1;
                  break e;
                case 3:
                  Jt = M.stateNode.containerInfo, Hn = !0;
                  break e;
                case 4:
                  Jt = M.stateNode.containerInfo, Hn = !0;
                  break e;
              }
              M = M.return;
            }
          if (Jt === null)
            throw Error(l(160));
          Es(S, C, g), Jt = null, Hn = !1;
          var j = g.alternate;
          j !== null && (j.return = null), g.return = null;
        } catch (Q) {
          cn(g, a, Q);
        }
      }
    if (a.subtreeFlags & 12854)
      for (a = a.child; a !== null; )
        xm(a, n), a = a.sibling;
  }
  function xm(n, a) {
    var u = n.alternate, p = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Xa(a, n), hi(n), p & 4) {
          try {
            Pu(3, n, n.return), Hu(3, n);
          } catch (je) {
            cn(n, n.return, je);
          }
          try {
            Pu(5, n, n.return);
          } catch (je) {
            cn(n, n.return, je);
          }
        }
        break;
      case 1:
        Xa(a, n), hi(n), p & 512 && u !== null && ws(u, u.return);
        break;
      case 5:
        if (Xa(a, n), hi(n), p & 512 && u !== null && ws(u, u.return), n.flags & 32) {
          var g = n.stateNode;
          try {
            $a(g, "");
          } catch (je) {
            cn(n, n.return, je);
          }
        }
        if (p & 4 && (g = n.stateNode, g != null)) {
          var S = n.memoizedProps, C = u !== null ? u.memoizedProps : S, M = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null)
            try {
              M === "input" && S.type === "radio" && S.name != null && or(g, S), dn(M, C);
              var Q = dn(M, S);
              for (C = 0; C < j.length; C += 2) {
                var ae = j[C], oe = j[C + 1];
                ae === "style" ? Lt(g, oe) : ae === "dangerouslySetInnerHTML" ? io(g, oe) : ae === "children" ? $a(g, oe) : X(g, ae, oe, Q);
              }
              switch (M) {
                case "input":
                  lr(g, S);
                  break;
                case "textarea":
                  li(g, S);
                  break;
                case "select":
                  var ne = g._wrapperState.wasMultiple;
                  g._wrapperState.wasMultiple = !!S.multiple;
                  var Ce = S.value;
                  Ce != null ? oi(g, !!S.multiple, Ce, !1) : ne !== !!S.multiple && (S.defaultValue != null ? oi(
                    g,
                    !!S.multiple,
                    S.defaultValue,
                    !0
                  ) : oi(g, !!S.multiple, S.multiple ? [] : "", !1));
              }
              g[ll] = S;
            } catch (je) {
              cn(n, n.return, je);
            }
        }
        break;
      case 6:
        if (Xa(a, n), hi(n), p & 4) {
          if (n.stateNode === null)
            throw Error(l(162));
          g = n.stateNode, S = n.memoizedProps;
          try {
            g.nodeValue = S;
          } catch (je) {
            cn(n, n.return, je);
          }
        }
        break;
      case 3:
        if (Xa(a, n), hi(n), p & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            su(a.containerInfo);
          } catch (je) {
            cn(n, n.return, je);
          }
        break;
      case 4:
        Xa(a, n), hi(n);
        break;
      case 13:
        Xa(a, n), hi(n), g = n.child, g.flags & 8192 && (S = g.memoizedState !== null, g.stateNode.isHidden = S, !S || g.alternate !== null && g.alternate.memoizedState !== null || (Mp = bt())), p & 4 && Hi(n);
        break;
      case 22:
        if (ae = u !== null && u.memoizedState !== null, n.mode & 1 ? (Dn = (Q = Dn) || ae, Xa(a, n), Dn = Q) : Xa(a, n), hi(n), p & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !ae && n.mode & 1)
            for (Re = n, ae = n.child; ae !== null; ) {
              for (oe = Re = ae; Re !== null; ) {
                switch (ne = Re, Ce = ne.child, ne.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pu(4, ne, ne.return);
                    break;
                  case 1:
                    ws(ne, ne.return);
                    var Oe = ne.stateNode;
                    if (typeof Oe.componentWillUnmount == "function") {
                      p = ne, u = ne.return;
                      try {
                        a = p, Oe.props = a.memoizedProps, Oe.state = a.memoizedState, Oe.componentWillUnmount();
                      } catch (je) {
                        cn(p, u, je);
                      }
                    }
                    break;
                  case 5:
                    ws(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      Dp(oe);
                      continue;
                    }
                }
                Ce !== null ? (Ce.return = ne, Re = Ce) : Dp(oe);
              }
              ae = ae.sibling;
            }
          e:
            for (ae = null, oe = n; ; ) {
              if (oe.tag === 5) {
                if (ae === null) {
                  ae = oe;
                  try {
                    g = oe.stateNode, Q ? (S = g.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (M = oe.stateNode, j = oe.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, M.style.display = ut("display", C));
                  } catch (je) {
                    cn(n, n.return, je);
                  }
                }
              } else if (oe.tag === 6) {
                if (ae === null)
                  try {
                    oe.stateNode.nodeValue = Q ? "" : oe.memoizedProps;
                  } catch (je) {
                    cn(n, n.return, je);
                  }
              } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
                oe.child.return = oe, oe = oe.child;
                continue;
              }
              if (oe === n)
                break e;
              for (; oe.sibling === null; ) {
                if (oe.return === null || oe.return === n)
                  break e;
                ae === oe && (ae = null), oe = oe.return;
              }
              ae === oe && (ae = null), oe.sibling.return = oe.return, oe = oe.sibling;
            }
        }
        break;
      case 19:
        Xa(a, n), hi(n), p & 4 && Hi(n);
        break;
      case 21:
        break;
      default:
        Xa(
          a,
          n
        ), hi(n);
    }
  }
  function hi(n) {
    var a = n.flags;
    if (a & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (Sm(u)) {
              var p = u;
              break e;
            }
            u = u.return;
          }
          throw Error(l(160));
        }
        switch (p.tag) {
          case 5:
            var g = p.stateNode;
            p.flags & 32 && ($a(g, ""), p.flags &= -33);
            var S = wf(n);
            pi(n, S, g);
            break;
          case 3:
          case 4:
            var C = p.stateNode.containerInfo, M = wf(n);
            bs(n, M, C);
            break;
          default:
            throw Error(l(161));
        }
      } catch (j) {
        cn(n, n.return, j);
      }
      n.flags &= -3;
    }
    a & 4096 && (n.flags &= -4097);
  }
  function wm(n, a, u) {
    Re = n, Cs(n);
  }
  function Cs(n, a, u) {
    for (var p = (n.mode & 1) !== 0; Re !== null; ) {
      var g = Re, S = g.child;
      if (g.tag === 22 && p) {
        var C = g.memoizedState !== null || zu;
        if (!C) {
          var M = g.alternate, j = M !== null && M.memoizedState !== null || Dn;
          M = zu;
          var Q = Dn;
          if (zu = C, (Dn = j) && !Q)
            for (Re = g; Re !== null; )
              C = Re, j = C.child, C.tag === 22 && C.memoizedState !== null ? Em(g) : j !== null ? (j.return = C, Re = j) : Em(g);
          for (; S !== null; )
            Re = S, Cs(S), S = S.sibling;
          Re = g, zu = M, Dn = Q;
        }
        bm(n);
      } else
        g.subtreeFlags & 8772 && S !== null ? (S.return = g, Re = S) : bm(n);
    }
  }
  function bm(n) {
    for (; Re !== null; ) {
      var a = Re;
      if (a.flags & 8772) {
        var u = a.alternate;
        try {
          if (a.flags & 8772)
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Dn || Hu(5, a);
                break;
              case 1:
                var p = a.stateNode;
                if (a.flags & 4 && !Dn)
                  if (u === null)
                    p.componentDidMount();
                  else {
                    var g = a.elementType === a.type ? u.memoizedProps : oa(a.type, u.memoizedProps);
                    p.componentDidUpdate(g, u.memoizedState, p.__reactInternalSnapshotBeforeUpdate);
                  }
                var S = a.updateQueue;
                S !== null && ul(a, S, p);
                break;
              case 3:
                var C = a.updateQueue;
                if (C !== null) {
                  if (u = null, a.child !== null)
                    switch (a.child.tag) {
                      case 5:
                        u = a.child.stateNode;
                        break;
                      case 1:
                        u = a.child.stateNode;
                    }
                  ul(a, C, u);
                }
                break;
              case 5:
                var M = a.stateNode;
                if (u === null && a.flags & 4) {
                  u = M;
                  var j = a.memoizedProps;
                  switch (a.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      j.autoFocus && u.focus();
                      break;
                    case "img":
                      j.src && (u.src = j.src);
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
                if (a.memoizedState === null) {
                  var Q = a.alternate;
                  if (Q !== null) {
                    var ae = Q.memoizedState;
                    if (ae !== null) {
                      var oe = ae.dehydrated;
                      oe !== null && su(oe);
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
                throw Error(l(163));
            }
          Dn || a.flags & 512 && kp(a);
        } catch (ne) {
          cn(a, a.return, ne);
        }
      }
      if (a === n) {
        Re = null;
        break;
      }
      if (u = a.sibling, u !== null) {
        u.return = a.return, Re = u;
        break;
      }
      Re = a.return;
    }
  }
  function Dp(n) {
    for (; Re !== null; ) {
      var a = Re;
      if (a === n) {
        Re = null;
        break;
      }
      var u = a.sibling;
      if (u !== null) {
        u.return = a.return, Re = u;
        break;
      }
      Re = a.return;
    }
  }
  function Em(n) {
    for (; Re !== null; ) {
      var a = Re;
      try {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            var u = a.return;
            try {
              Hu(4, a);
            } catch (j) {
              cn(a, u, j);
            }
            break;
          case 1:
            var p = a.stateNode;
            if (typeof p.componentDidMount == "function") {
              var g = a.return;
              try {
                p.componentDidMount();
              } catch (j) {
                cn(a, g, j);
              }
            }
            var S = a.return;
            try {
              kp(a);
            } catch (j) {
              cn(a, S, j);
            }
            break;
          case 5:
            var C = a.return;
            try {
              kp(a);
            } catch (j) {
              cn(a, C, j);
            }
        }
      } catch (j) {
        cn(a, a.return, j);
      }
      if (a === n) {
        Re = null;
        break;
      }
      var M = a.sibling;
      if (M !== null) {
        M.return = a.return, Re = M;
        break;
      }
      Re = a.return;
    }
  }
  var bf = Math.ceil, Iu = se.ReactCurrentDispatcher, Op = se.ReactCurrentOwner, dr = se.ReactCurrentBatchConfig, pt = 0, rn = null, un = null, In = 0, sa = 0, _s = rt(0), On = 0, Yu = null, Ii = 0, Ef = 0, Ts = 0, wl = null, Sr = null, Mp = 0, ks = 1 / 0, Yi = null, Cf = !1, bl = null, vi = null, Do = !1, Oo = null, _f = 0, Rs = 0, Tf = null, El = -1, Cl = 0;
  function pr() {
    return pt & 6 ? bt() : El !== -1 ? El : El = bt();
  }
  function xn(n) {
    return n.mode & 1 ? pt & 2 && In !== 0 ? In & -In : Wc.transition !== null ? (Cl === 0 && (Cl = bc()), Cl) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Md(n.type)), n) : 1;
  }
  function hr(n, a, u, p) {
    if (50 < Rs)
      throw Rs = 0, Tf = null, Error(l(185));
    Jo(n, u, p), (!(pt & 2) || n !== rn) && (n === rn && (!(pt & 2) && (Ef |= u), On === 4 && Oa(n, In)), vr(n, p), u === 1 && pt === 0 && !(a.mode & 1) && (ks = bt() + 500, Fn && Ar()));
  }
  function vr(n, a) {
    var u = n.callbackNode;
    wc(n, a);
    var p = Wa(n, n === rn ? In : 0);
    if (p === 0)
      u !== null && yr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (a = p & -p, n.callbackPriority !== a) {
      if (u != null && yr(u), a === 1)
        n.tag === 0 ? rp(Cm.bind(null, n)) : np(Cm.bind(null, n)), Jd(function() {
          !(pt & 6) && Ar();
        }), u = null;
      else {
        switch (Rd(p)) {
          case 1:
            u = ki;
            break;
          case 4:
            u = dt;
            break;
          case 16:
            u = uo;
            break;
          case 536870912:
            u = Cd;
            break;
          default:
            u = uo;
        }
        u = zp(u, Ds.bind(null, n));
      }
      n.callbackPriority = a, n.callbackNode = u;
    }
  }
  function Ds(n, a) {
    if (El = -1, Cl = 0, pt & 6)
      throw Error(l(327));
    var u = n.callbackNode;
    if (Ms() && n.callbackNode !== u)
      return null;
    var p = Wa(n, n === rn ? In : 0);
    if (p === 0)
      return null;
    if (p & 30 || p & n.expiredLanes || a)
      a = Rf(n, p);
    else {
      a = p;
      var g = pt;
      pt |= 2;
      var S = kf();
      (rn !== n || In !== a) && (Yi = null, ks = bt() + 500, _l(n, a));
      do
        try {
          D0();
          break;
        } catch (M) {
          _m(n, M);
        }
      while (1);
      up(), Iu.current = S, pt = g, un !== null ? a = 0 : (rn = null, In = 0, a = On);
    }
    if (a !== 0) {
      if (a === 2 && (g = Td(n), g !== 0 && (p = g, a = Lp(n, g))), a === 1)
        throw u = Yu, _l(n, 0), Oa(n, p), vr(n, bt()), u;
      if (a === 6)
        Oa(n, p);
      else {
        if (g = n.current.alternate, !(p & 30) && !Np(g) && (a = Rf(n, p), a === 2 && (S = Td(n), S !== 0 && (p = S, a = Lp(n, S))), a === 1))
          throw u = Yu, _l(n, 0), Oa(n, p), vr(n, bt()), u;
        switch (n.finishedWork = g, n.finishedLanes = p, a) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Tl(n, Sr, Yi);
            break;
          case 3:
            if (Oa(n, p), (p & 130023424) === p && (a = Mp + 500 - bt(), 10 < a)) {
              if (Wa(n, 0) !== 0)
                break;
              if (g = n.suspendedLanes, (g & p) !== p) {
                pr(), n.pingedLanes |= n.suspendedLanes & g;
                break;
              }
              n.timeoutHandle = ol(Tl.bind(null, n, Sr, Yi), a);
              break;
            }
            Tl(n, Sr, Yi);
            break;
          case 4:
            if (Oa(n, p), (p & 4194240) === p)
              break;
            for (a = n.eventTimes, g = -1; 0 < p; ) {
              var C = 31 - ga(p);
              S = 1 << C, C = a[C], C > g && (g = C), p &= ~S;
            }
            if (p = g, p = bt() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * bf(p / 1960)) - p, 10 < p) {
              n.timeoutHandle = ol(Tl.bind(null, n, Sr, Yi), p);
              break;
            }
            Tl(n, Sr, Yi);
            break;
          case 5:
            Tl(n, Sr, Yi);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return vr(n, bt()), n.callbackNode === u ? Ds.bind(null, n) : null;
  }
  function Lp(n, a) {
    var u = wl;
    return n.current.memoizedState.isDehydrated && (_l(n, a).flags |= 256), n = Rf(n, a), n !== 2 && (a = Sr, Sr = u, a !== null && $u(a)), n;
  }
  function $u(n) {
    Sr === null ? Sr = n : Sr.push.apply(Sr, n);
  }
  function Np(n) {
    for (var a = n; ; ) {
      if (a.flags & 16384) {
        var u = a.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var p = 0; p < u.length; p++) {
            var g = u[p], S = g.getSnapshot;
            g = g.value;
            try {
              if (!xa(S(), g))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (u = a.child, a.subtreeFlags & 16384 && u !== null)
        u.return = a, a = u;
      else {
        if (a === n)
          break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === n)
            return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Oa(n, a) {
    for (a &= ~Ts, a &= ~Ef, n.suspendedLanes |= a, n.pingedLanes &= ~a, n = n.expirationTimes; 0 < a; ) {
      var u = 31 - ga(a), p = 1 << u;
      n[u] = -1, a &= ~p;
    }
  }
  function Cm(n) {
    if (pt & 6)
      throw Error(l(327));
    Ms();
    var a = Wa(n, 0);
    if (!(a & 1))
      return vr(n, bt()), null;
    var u = Rf(n, a);
    if (n.tag !== 0 && u === 2) {
      var p = Td(n);
      p !== 0 && (a = p, u = Lp(n, p));
    }
    if (u === 1)
      throw u = Yu, _l(n, 0), Oa(n, a), vr(n, bt()), u;
    if (u === 6)
      throw Error(l(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = a, Tl(n, Sr, Yi), vr(n, bt()), null;
  }
  function Os(n, a) {
    var u = pt;
    pt |= 1;
    try {
      return n(a);
    } finally {
      pt = u, pt === 0 && (ks = bt() + 500, Fn && Ar());
    }
  }
  function Mo(n) {
    Oo !== null && Oo.tag === 0 && !(pt & 6) && Ms();
    var a = pt;
    pt |= 1;
    var u = dr.transition, p = Nt;
    try {
      if (dr.transition = null, Nt = 1, n)
        return n();
    } finally {
      Nt = p, dr.transition = u, pt = a, !(pt & 6) && Ar();
    }
  }
  function jp() {
    sa = _s.current, kt(_s);
  }
  function _l(n, a) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Xv(u)), un !== null)
      for (u = un.return; u !== null; ) {
        var p = u;
        switch (ip(p), p.tag) {
          case 1:
            p = p.type.childContextTypes, p != null && Ea();
            break;
          case 3:
            _o(), kt(sn), kt(Xe), Xc();
            break;
          case 5:
            ct(p);
            break;
          case 4:
            _o();
            break;
          case 13:
            kt(Ge);
            break;
          case 19:
            kt(Ge);
            break;
          case 10:
            wo(p.type._context);
            break;
          case 22:
          case 23:
            jp();
        }
        u = u.return;
      }
    if (rn = n, un = n = Lo(n.current, null), In = sa = a, On = 0, Yu = null, Ts = Ef = Ii = 0, Sr = wl = null, Gn !== null) {
      for (a = 0; a < Gn.length; a++)
        if (u = Gn[a], p = u.interleaved, p !== null) {
          u.interleaved = null;
          var g = p.next, S = u.pending;
          if (S !== null) {
            var C = S.next;
            S.next = g, p.next = C;
          }
          u.pending = p;
        }
      Gn = null;
    }
    return n;
  }
  function _m(n, a) {
    do {
      var u = un;
      try {
        if (up(), Jc.current = mf, qe) {
          for (var p = Gt.memoizedState; p !== null; ) {
            var g = p.queue;
            g !== null && (g.pending = null), p = p.next;
          }
          qe = !1;
        }
        if (fl = 0, mt = ee = Gt = null, di = !1, la = 0, Op.current = null, u === null || u.return === null) {
          On = 1, Yu = a, un = null;
          break;
        }
        e: {
          var S = n, C = u.return, M = u, j = a;
          if (a = In, M.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Q = j, ae = M, oe = ae.tag;
            if (!(ae.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var ne = ae.alternate;
              ne ? (ae.updateQueue = ne.updateQueue, ae.memoizedState = ne.memoizedState, ae.lanes = ne.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var Ce = yp(C);
            if (Ce !== null) {
              Ce.flags &= -257, Sp(Ce, C, M, S, a), Ce.mode & 1 && pm(S, Q, a), a = Ce, j = Q;
              var Oe = a.updateQueue;
              if (Oe === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(j), a.updateQueue = je;
              } else
                Oe.add(j);
              break e;
            } else {
              if (!(a & 1)) {
                pm(S, Q, a), Up();
                break e;
              }
              j = Error(l(426));
            }
          } else if (Wt && M.mode & 1) {
            var hn = yp(C);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), Sp(hn, C, M, S, a), lp(ys(j, M));
              break e;
            }
          }
          S = j = ys(j, M), On !== 4 && (On = 2), wl === null ? wl = [S] : wl.push(S), S = C;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, a &= -a, S.lanes |= a;
                var H = dm(S, j, a);
                dp(S, H);
                break e;
              case 1:
                M = j;
                var A = S.type, $ = S.stateNode;
                if (!(S.flags & 128) && (typeof A.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && (vi === null || !vi.has($)))) {
                  S.flags |= 65536, a &= -a, S.lanes |= a;
                  var fe = ju(S, M, a);
                  dp(S, fe);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        Ap(u);
      } catch (Ue) {
        a = Ue, un === u && u !== null && (un = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function kf() {
    var n = Iu.current;
    return Iu.current = mf, n === null ? mf : n;
  }
  function Up() {
    (On === 0 || On === 3 || On === 2) && (On = 4), rn === null || !(Ii & 268435455) && !(Ef & 268435455) || Oa(rn, In);
  }
  function Rf(n, a) {
    var u = pt;
    pt |= 2;
    var p = kf();
    (rn !== n || In !== a) && (Yi = null, _l(n, a));
    do
      try {
        R0();
        break;
      } catch (g) {
        _m(n, g);
      }
    while (1);
    if (up(), pt = u, Iu.current = p, un !== null)
      throw Error(l(261));
    return rn = null, In = 0, On;
  }
  function R0() {
    for (; un !== null; )
      Tm(un);
  }
  function D0() {
    for (; un !== null && !so(); )
      Tm(un);
  }
  function Tm(n) {
    var a = Rm(n.alternate, n, sa);
    n.memoizedProps = n.pendingProps, a === null ? Ap(n) : un = a, Op.current = null;
  }
  function Ap(n) {
    var a = n;
    do {
      var u = a.alternate;
      if (n = a.return, a.flags & 32768) {
        if (u = Tp(u, a), u !== null) {
          u.flags &= 32767, un = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, un = null;
          return;
        }
      } else if (u = k0(u, a, sa), u !== null) {
        un = u;
        return;
      }
      if (a = a.sibling, a !== null) {
        un = a;
        return;
      }
      un = a = n;
    } while (a !== null);
    On === 0 && (On = 5);
  }
  function Tl(n, a, u) {
    var p = Nt, g = dr.transition;
    try {
      dr.transition = null, Nt = 1, O0(n, a, u, p);
    } finally {
      dr.transition = g, Nt = p;
    }
    return null;
  }
  function O0(n, a, u, p) {
    do
      Ms();
    while (Oo !== null);
    if (pt & 6)
      throw Error(l(327));
    u = n.finishedWork;
    var g = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(l(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var S = u.lanes | u.childLanes;
    if (n0(n, S), n === rn && (un = rn = null, In = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Do || (Do = !0, zp(uo, function() {
      return Ms(), null;
    })), S = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || S) {
      S = dr.transition, dr.transition = null;
      var C = Nt;
      Nt = 1;
      var M = pt;
      pt |= 4, Op.current = null, ym(n, u), xm(u, n), Uc(il), el = !!Zd, il = Zd = null, n.current = u, wm(u), Sc(), pt = M, Nt = C, dr.transition = S;
    } else
      n.current = u;
    if (Do && (Do = !1, Oo = n, _f = g), S = n.pendingLanes, S === 0 && (vi = null), dv(u.stateNode), vr(n, bt()), a !== null)
      for (p = n.onRecoverableError, u = 0; u < a.length; u++)
        g = a[u], p(g.value, { componentStack: g.stack, digest: g.digest });
    if (Cf)
      throw Cf = !1, n = bl, bl = null, n;
    return _f & 1 && n.tag !== 0 && Ms(), S = n.pendingLanes, S & 1 ? n === Tf ? Rs++ : (Rs = 0, Tf = n) : Rs = 0, Ar(), null;
  }
  function Ms() {
    if (Oo !== null) {
      var n = Rd(_f), a = dr.transition, u = Nt;
      try {
        if (dr.transition = null, Nt = 16 > n ? 16 : n, Oo === null)
          var p = !1;
        else {
          if (n = Oo, Oo = null, _f = 0, pt & 6)
            throw Error(l(331));
          var g = pt;
          for (pt |= 4, Re = n.current; Re !== null; ) {
            var S = Re, C = S.child;
            if (Re.flags & 16) {
              var M = S.deletions;
              if (M !== null) {
                for (var j = 0; j < M.length; j++) {
                  var Q = M[j];
                  for (Re = Q; Re !== null; ) {
                    var ae = Re;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pu(8, ae, S);
                    }
                    var oe = ae.child;
                    if (oe !== null)
                      oe.return = ae, Re = oe;
                    else
                      for (; Re !== null; ) {
                        ae = Re;
                        var ne = ae.sibling, Ce = ae.return;
                        if (Rp(ae), ae === Q) {
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
                var Oe = S.alternate;
                if (Oe !== null) {
                  var je = Oe.child;
                  if (je !== null) {
                    Oe.child = null;
                    do {
                      var hn = je.sibling;
                      je.sibling = null, je = hn;
                    } while (je !== null);
                  }
                }
                Re = S;
              }
            }
            if (S.subtreeFlags & 2064 && C !== null)
              C.return = S, Re = C;
            else
              e:
                for (; Re !== null; ) {
                  if (S = Re, S.flags & 2048)
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pu(9, S, S.return);
                    }
                  var H = S.sibling;
                  if (H !== null) {
                    H.return = S.return, Re = H;
                    break e;
                  }
                  Re = S.return;
                }
          }
          var A = n.current;
          for (Re = A; Re !== null; ) {
            C = Re;
            var $ = C.child;
            if (C.subtreeFlags & 2064 && $ !== null)
              $.return = C, Re = $;
            else
              e:
                for (C = A; Re !== null; ) {
                  if (M = Re, M.flags & 2048)
                    try {
                      switch (M.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Hu(9, M);
                      }
                    } catch (Ue) {
                      cn(M, M.return, Ue);
                    }
                  if (M === C) {
                    Re = null;
                    break e;
                  }
                  var fe = M.sibling;
                  if (fe !== null) {
                    fe.return = M.return, Re = fe;
                    break e;
                  }
                  Re = M.return;
                }
          }
          if (pt = g, Ar(), Ba && typeof Ba.onPostCommitFiberRoot == "function")
            try {
              Ba.onPostCommitFiberRoot(ru, n);
            } catch {
            }
          p = !0;
        }
        return p;
      } finally {
        Nt = u, dr.transition = a;
      }
    }
    return !1;
  }
  function km(n, a, u) {
    a = ys(u, a), a = dm(n, a, 1), n = Eo(n, a, 1), a = pr(), n !== null && (Jo(n, 1, a), vr(n, a));
  }
  function cn(n, a, u) {
    if (n.tag === 3)
      km(n, n, u);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          km(a, n, u);
          break;
        } else if (a.tag === 1) {
          var p = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && (vi === null || !vi.has(p))) {
            n = ys(u, n), n = ju(a, n, 1), a = Eo(a, n, 1), n = pr(), a !== null && (Jo(a, 1, n), vr(a, n));
            break;
          }
        }
        a = a.return;
      }
  }
  function M0(n, a, u) {
    var p = n.pingCache;
    p !== null && p.delete(a), a = pr(), n.pingedLanes |= n.suspendedLanes & u, rn === n && (In & u) === u && (On === 4 || On === 3 && (In & 130023424) === In && 500 > bt() - Mp ? _l(n, 0) : Ts |= u), vr(n, a);
  }
  function Df(n, a) {
    a === 0 && (n.mode & 1 ? (a = Jl, Jl <<= 1, !(Jl & 130023424) && (Jl = 4194304)) : a = 1);
    var u = pr();
    n = Ai(n, a), n !== null && (Jo(n, a, u), vr(n, u));
  }
  function L0(n) {
    var a = n.memoizedState, u = 0;
    a !== null && (u = a.retryLane), Df(n, u);
  }
  function N0(n, a) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var p = n.stateNode, g = n.memoizedState;
        g !== null && (u = g.retryLane);
        break;
      case 19:
        p = n.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    p !== null && p.delete(a), Df(n, u);
  }
  var Rm;
  Rm = function(n, a, u) {
    if (n !== null)
      if (n.memoizedProps !== a.pendingProps || sn.current)
        Sn = !0;
      else {
        if (!(n.lanes & u) && !(a.flags & 128))
          return Sn = !1, Pi(n, a, u);
        Sn = !!(n.flags & 131072);
      }
    else
      Sn = !1, Wt && a.flags & 1048576 && ap(a, fs, a.index);
    switch (a.lanes = 0, a.tag) {
      case 2:
        var p = a.type;
        cr(n, a), n = a.pendingProps;
        var g = ba(a, Xe.current);
        ge(a, u), g = To(null, a, p, n, g, u);
        var S = hl();
        return a.flags |= 1, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0 ? (a.tag = 1, a.memoizedState = null, a.updateQueue = null, Xt(p) ? (S = !0, Ic(a)) : S = !1, a.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, fp(a), g.updater = qc, a.stateNode = g, g._reactInternals = a, Kc(a, p, n, u), a = hm(null, a, p, !0, S, u)) : (a.tag = 0, Wt && S && Yc(a), kn(null, a, g, u), a = a.child), a;
      case 16:
        p = a.elementType;
        e: {
          switch (cr(n, a), n = a.pendingProps, g = p._init, p = g(p._payload), a.type = p, g = a.tag = U0(p), n = oa(p, n), g) {
            case 0:
              a = Ss(null, a, p, n, u);
              break e;
            case 1:
              a = xp(null, a, p, n, u);
              break e;
            case 11:
              a = Ro(null, a, p, n, u);
              break e;
            case 14:
              a = yf(null, a, p, oa(p.type, n), u);
              break e;
          }
          throw Error(l(
            306,
            p,
            ""
          ));
        }
        return a;
      case 0:
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), Ss(n, a, p, g, u);
      case 1:
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), xp(n, a, p, g, u);
      case 3:
        e: {
          if (vm(a), n === null)
            throw Error(l(387));
          p = a.pendingProps, S = a.memoizedState, g = S.element, Tn(n, a), Co(a, p, null, u);
          var C = a.memoizedState;
          if (p = C.element, S.isDehydrated)
            if (S = { element: p, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, a.updateQueue.baseState = S, a.memoizedState = S, a.flags & 256) {
              g = ys(Error(l(423)), a), a = Sf(n, a, p, u, g);
              break e;
            } else if (p !== g) {
              g = ys(Error(l(424)), a), a = Sf(n, a, p, u, g);
              break e;
            } else
              for (Pr = Ka(a.stateNode.containerInfo.firstChild), ia = a, Wt = !0, _a = null, u = cm(a, null, p, u), a.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (tn(), p === g) {
              a = Qn(n, a, u);
              break e;
            }
            kn(n, a, p, u);
          }
          a = a.child;
        }
        return a;
      case 5:
        return Ve(a), n === null && Vc(a), p = a.type, g = a.pendingProps, S = n !== null ? n.memoizedProps : null, C = g.children, bu(p, g) ? C = null : S !== null && bu(p, S) && (a.flags |= 32), at(n, a), kn(n, a, C, u), a.child;
      case 6:
        return n === null && Vc(a), null;
      case 13:
        return bp(n, a, u);
      case 4:
        return hp(a, a.stateNode.containerInfo), p = a.pendingProps, n === null ? a.child = ps(a, null, p, u) : kn(n, a, p, u), a.child;
      case 11:
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), Ro(n, a, p, g, u);
      case 7:
        return kn(n, a, a.pendingProps, u), a.child;
      case 8:
        return kn(n, a, a.pendingProps.children, u), a.child;
      case 12:
        return kn(n, a, a.pendingProps.children, u), a.child;
      case 10:
        e: {
          if (p = a.type._context, g = a.pendingProps, S = a.memoizedProps, C = g.value, Rt(fi, p._currentValue), p._currentValue = C, S !== null)
            if (xa(S.value, C)) {
              if (S.children === g.children && !sn.current) {
                a = Qn(n, a, u);
                break e;
              }
            } else
              for (S = a.child, S !== null && (S.return = a); S !== null; ) {
                var M = S.dependencies;
                if (M !== null) {
                  C = S.child;
                  for (var j = M.firstContext; j !== null; ) {
                    if (j.context === p) {
                      if (S.tag === 1) {
                        j = zi(-1, u & -u), j.tag = 2;
                        var Q = S.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var ae = Q.pending;
                          ae === null ? j.next = j : (j.next = ae.next, ae.next = j), Q.pending = j;
                        }
                      }
                      S.lanes |= u, j = S.alternate, j !== null && (j.lanes |= u), Pn(
                        S.return,
                        u,
                        a
                      ), M.lanes |= u;
                      break;
                    }
                    j = j.next;
                  }
                } else if (S.tag === 10)
                  C = S.type === a.type ? null : S.child;
                else if (S.tag === 18) {
                  if (C = S.return, C === null)
                    throw Error(l(341));
                  C.lanes |= u, M = C.alternate, M !== null && (M.lanes |= u), Pn(C, u, a), C = S.sibling;
                } else
                  C = S.child;
                if (C !== null)
                  C.return = S;
                else
                  for (C = S; C !== null; ) {
                    if (C === a) {
                      C = null;
                      break;
                    }
                    if (S = C.sibling, S !== null) {
                      S.return = C.return, C = S;
                      break;
                    }
                    C = C.return;
                  }
                S = C;
              }
          kn(n, a, g.children, u), a = a.child;
        }
        return a;
      case 9:
        return g = a.type, p = a.pendingProps.children, ge(a, u), g = pn(g), p = p(g), a.flags |= 1, kn(n, a, p, u), a.child;
      case 14:
        return p = a.type, g = oa(p, a.pendingProps), g = oa(p.type, g), yf(n, a, p, g, u);
      case 15:
        return Yr(n, a, a.type, a.pendingProps, u);
      case 17:
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), cr(n, a), a.tag = 1, Xt(p) ? (n = !0, Ic(a)) : n = !1, ge(a, u), om(a, p, g), Kc(a, p, g, u), hm(null, a, p, !0, n, u);
      case 19:
        return _p(n, a, u);
      case 22:
        return yl(n, a, u);
    }
    throw Error(l(156, a.tag));
  };
  function zp(n, a) {
    return Zt(n, a);
  }
  function j0(n, a, u, p) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = p, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ma(n, a, u, p) {
    return new j0(n, a, u, p);
  }
  function Fp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function U0(n) {
    if (typeof n == "function")
      return Fp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Qe)
        return 11;
      if (n === lt)
        return 14;
    }
    return 2;
  }
  function Lo(n, a) {
    var u = n.alternate;
    return u === null ? (u = Ma(n.tag, a, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = a, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, a = n.dependencies, u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Of(n, a, u, p, g, S) {
    var C = 2;
    if (p = n, typeof n == "function")
      Fp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case J:
            return kl(u.children, g, S, a);
          case we:
            C = 8, g |= 8;
            break;
          case pe:
            return n = Ma(12, u, a, g | 2), n.elementType = pe, n.lanes = S, n;
          case Ne:
            return n = Ma(13, u, a, g), n.elementType = Ne, n.lanes = S, n;
          case Ze:
            return n = Ma(19, u, a, g), n.elementType = Ze, n.lanes = S, n;
          case Vt:
            return Vu(u, g, S, a);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case me:
                  C = 10;
                  break e;
                case Fe:
                  C = 9;
                  break e;
                case Qe:
                  C = 11;
                  break e;
                case lt:
                  C = 14;
                  break e;
                case st:
                  C = 16, p = null;
                  break e;
              }
            throw Error(l(130, n == null ? n : typeof n, ""));
        }
    return a = Ma(C, u, a, g), a.elementType = n, a.type = p, a.lanes = S, a;
  }
  function kl(n, a, u, p) {
    return n = Ma(7, n, p, a), n.lanes = u, n;
  }
  function Vu(n, a, u, p) {
    return n = Ma(22, n, p, a), n.elementType = Vt, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Bu(n, a, u) {
    return n = Ma(6, n, null, a), n.lanes = u, n;
  }
  function Rl(n, a, u) {
    return a = Ma(4, n.children !== null ? n.children : [], n.key, a), a.lanes = u, a.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, a;
  }
  function A0(n, a, u, p, g) {
    this.tag = a, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kd(0), this.expirationTimes = kd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kd(0), this.identifierPrefix = p, this.onRecoverableError = g, this.mutableSourceEagerHydrationData = null;
  }
  function Mf(n, a, u, p, g, S, C, M, j) {
    return n = new A0(n, a, u, M, j), a === 1 ? (a = 1, S === !0 && (a |= 8)) : a = 0, S = Ma(3, null, null, a), n.current = S, S.stateNode = n, S.memoizedState = { element: p, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fp(S), n;
  }
  function Dm(n, a, u) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: G, key: p == null ? null : "" + p, children: n, containerInfo: a, implementation: u };
  }
  function Pp(n) {
    if (!n)
      return ci;
    n = n._reactInternals;
    e: {
      if (it(n) !== n || n.tag !== 1)
        throw Error(l(170));
      var a = n;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break e;
          case 1:
            if (Xt(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(l(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Xt(u))
        return _u(n, u, a);
    }
    return a;
  }
  function Om(n, a, u, p, g, S, C, M, j) {
    return n = Mf(u, p, !0, n, g, S, C, M, j), n.context = Pp(null), u = n.current, p = pr(), g = xn(u), S = zi(p, g), S.callback = a ?? null, Eo(u, S, g), n.current.lanes = g, Jo(n, g, p), vr(n, p), n;
  }
  function Wu(n, a, u, p) {
    var g = a.current, S = pr(), C = xn(g);
    return u = Pp(u), a.context === null ? a.context = u : a.pendingContext = u, a = zi(S, C), a.payload = { element: n }, p = p === void 0 ? null : p, p !== null && (a.callback = p), n = Eo(g, a, C), n !== null && (hr(n, g, C, S), Qc(n, g, C)), C;
  }
  function Lf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Mm(n, a) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function Hp(n, a) {
    Mm(n, a), (n = n.alternate) && Mm(n, a);
  }
  function Lm() {
    return null;
  }
  var Ip = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Nf(n) {
    this._internalRoot = n;
  }
  $i.prototype.render = Nf.prototype.render = function(n) {
    var a = this._internalRoot;
    if (a === null)
      throw Error(l(409));
    Wu(n, a, null, null);
  }, $i.prototype.unmount = Nf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var a = n.containerInfo;
      Mo(function() {
        Wu(null, n, null, null);
      }), a[ji] = null;
    }
  };
  function $i(n) {
    this._internalRoot = n;
  }
  $i.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var a = mv();
      n = { blockedOn: null, target: n, priority: a };
      for (var u = 0; u < jt.length && a !== 0 && a < jt[u].priority; u++)
        ;
      jt.splice(u, 0, n), u === 0 && gv(n);
    }
  };
  function Yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function jf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Nm() {
  }
  function z0(n, a, u, p, g) {
    if (g) {
      if (typeof p == "function") {
        var S = p;
        p = function() {
          var Q = Lf(C);
          S.call(Q);
        };
      }
      var C = Om(a, p, n, 0, null, !1, !1, "", Nm);
      return n._reactRootContainer = C, n[ji] = C.current, us(n.nodeType === 8 ? n.parentNode : n), Mo(), C;
    }
    for (; g = n.lastChild; )
      n.removeChild(g);
    if (typeof p == "function") {
      var M = p;
      p = function() {
        var Q = Lf(j);
        M.call(Q);
      };
    }
    var j = Mf(n, 0, !1, null, null, !1, !1, "", Nm);
    return n._reactRootContainer = j, n[ji] = j.current, us(n.nodeType === 8 ? n.parentNode : n), Mo(function() {
      Wu(a, j, u, p);
    }), j;
  }
  function Uf(n, a, u, p, g) {
    var S = u._reactRootContainer;
    if (S) {
      var C = S;
      if (typeof g == "function") {
        var M = g;
        g = function() {
          var j = Lf(C);
          M.call(j);
        };
      }
      Wu(a, C, n, g);
    } else
      C = z0(u, a, n, g, p);
    return Lf(C);
  }
  vv = function(n) {
    switch (n.tag) {
      case 3:
        var a = n.stateNode;
        if (a.current.memoizedState.isDehydrated) {
          var u = Xo(a.pendingLanes);
          u !== 0 && (au(a, u | 1), vr(a, bt()), !(pt & 6) && (ks = bt() + 500, Ar()));
        }
        break;
      case 13:
        Mo(function() {
          var p = Ai(n, 1);
          if (p !== null) {
            var g = pr();
            hr(p, n, 1, g);
          }
        }), Hp(n, 1);
    }
  }, Ec = function(n) {
    if (n.tag === 13) {
      var a = Ai(n, 134217728);
      if (a !== null) {
        var u = pr();
        hr(a, n, 134217728, u);
      }
      Hp(n, 134217728);
    }
  }, Ft = function(n) {
    if (n.tag === 13) {
      var a = xn(n), u = Ai(n, a);
      if (u !== null) {
        var p = pr();
        hr(u, n, a, p);
      }
      Hp(n, a);
    }
  }, mv = function() {
    return Nt;
  }, Dd = function(n, a) {
    var u = Nt;
    try {
      return Nt = n, a();
    } finally {
      Nt = u;
    }
  }, ea = function(n, a, u) {
    switch (a) {
      case "input":
        if (lr(n, u), a = u.name, u.type === "radio" && a != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < u.length; a++) {
            var p = u[a];
            if (p !== n && p.form === n.form) {
              var g = Ie(p);
              if (!g)
                throw Error(l(90));
              va(p), lr(p, g);
            }
          }
        }
        break;
      case "textarea":
        li(n, u);
        break;
      case "select":
        a = u.value, a != null && oi(n, !!u.multiple, a, !1);
    }
  }, nu = Os, yc = Mo;
  var F0 = { usingClientEntryPoint: !1, Events: [Cu, cs, Ie, qo, Kl, Os] }, Ls = { findFiberByHostInstance: wa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, P0 = { bundleType: Ls.bundleType, version: Ls.version, rendererPackageName: Ls.rendererPackageName, rendererConfig: Ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Un(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ls.findFiberByHostInstance || Lm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Af.isDisabled && Af.supportsFiber)
      try {
        ru = Af.inject(P0), Ba = Af;
      } catch {
      }
  }
  return za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0, za.createPortal = function(n, a) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Yp(a))
      throw Error(l(200));
    return Dm(n, a, null, u);
  }, za.createRoot = function(n, a) {
    if (!Yp(n))
      throw Error(l(299));
    var u = !1, p = "", g = Ip;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError)), a = Mf(n, 1, !1, null, null, u, !1, p, g), n[ji] = a.current, us(n.nodeType === 8 ? n.parentNode : n), new Nf(a);
  }, za.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function" ? Error(l(188)) : (n = Object.keys(n).join(","), Error(l(268, n)));
    return n = Un(a), n = n === null ? null : n.stateNode, n;
  }, za.flushSync = function(n) {
    return Mo(n);
  }, za.hydrate = function(n, a, u) {
    if (!jf(a))
      throw Error(l(200));
    return Uf(null, n, a, !0, u);
  }, za.hydrateRoot = function(n, a, u) {
    if (!Yp(n))
      throw Error(l(405));
    var p = u != null && u.hydratedSources || null, g = !1, S = "", C = Ip;
    if (u != null && (u.unstable_strictMode === !0 && (g = !0), u.identifierPrefix !== void 0 && (S = u.identifierPrefix), u.onRecoverableError !== void 0 && (C = u.onRecoverableError)), a = Om(a, null, n, 1, u ?? null, g, !1, S, C), n[ji] = a.current, us(n), p)
      for (n = 0; n < p.length; n++)
        u = p[n], g = u._getVersion, g = g(u._source), a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [u, g] : a.mutableSourceEagerHydrationData.push(
          u,
          g
        );
    return new $i(a);
  }, za.render = function(n, a, u) {
    if (!jf(a))
      throw Error(l(200));
    return Uf(null, n, a, !1, u);
  }, za.unmountComponentAtNode = function(n) {
    if (!jf(n))
      throw Error(l(40));
    return n._reactRootContainer ? (Mo(function() {
      Uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ji] = null;
      });
    }), !0) : !1;
  }, za.unstable_batchedUpdates = Os, za.unstable_renderSubtreeIntoContainer = function(n, a, u, p) {
    if (!jf(u))
      throw Error(l(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(l(38));
    return Uf(n, a, u, !1, p);
  }, za.version = "18.2.0-next-9e3b772b8-20220608", za;
}
var Fa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function DF() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = Dr, o = Vk(), l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, c = !1;
    function d(e) {
      c = e;
    }
    function m(e) {
      if (!c) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          i[s - 1] = arguments[s];
        E("warn", e, i);
      }
    }
    function v(e) {
      if (!c) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          i[s - 1] = arguments[s];
        E("error", e, i);
      }
    }
    function E(e, t, i) {
      {
        var s = l.ReactDebugCurrentFrame, f = s.getStackAddendum();
        f !== "" && (t += "%s", i = i.concat([f]));
        var h = i.map(function(y) {
          return String(y);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var w = 0, _ = 1, k = 2, D = 3, O = 4, F = 5, N = 6, W = 7, ue = 8, de = 9, q = 10, X = 11, se = 12, re = 13, G = 14, J = 15, we = 16, pe = 17, me = 18, Fe = 19, Qe = 21, Ne = 22, Ze = 23, lt = 24, st = 25, Vt = !0, he = !1, Pe = !1, be = !1, wt = !1, Tt = !0, Vn = !1, gr = !1, ai = !0, Cn = !0, ha = !0, ar = /* @__PURE__ */ new Set(), Mr = {}, ii = {};
    function Lr(e, t) {
      va(e, t), va(e + "Capture", t);
    }
    function va(e, t) {
      Mr[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Mr[e] = t;
      {
        var i = e.toLowerCase();
        ii[i] = e, e === "onDoubleClick" && (ii.ondblclick = e);
      }
      for (var s = 0; s < t.length; s++)
        ar.add(t[s]);
    }
    var Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function or(e) {
      try {
        return lr(e), !1;
      } catch {
        return !0;
      }
    }
    function lr(e) {
      return "" + e;
    }
    function ma(e, t) {
      if (or(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), lr(e);
    }
    function Ha(e) {
      if (or(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), lr(e);
    }
    function Ti(e, t) {
      if (or(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), lr(e);
    }
    function oi(e, t) {
      if (or(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), lr(e);
    }
    function Ia(e) {
      if (or(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), lr(e);
    }
    function Zr(e) {
      if (or(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bn(e)), lr(e);
    }
    var li = 0, Xr = 1, Ya = 2, mn = 3, Jr = 4, io = 5, $a = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", He = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ut = new RegExp("^[" + Se + "][" + He + "]*$"), Lt = {}, en = {};
    function jn(e) {
      return ir.call(en, e) ? !0 : ir.call(Lt, e) ? !1 : ut.test(e) ? (en[e] = !0, !0) : (Lt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, i) {
      return t !== null ? t.type === li : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Nr(e, t, i, s) {
      if (i !== null && i.type === li)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (s)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var f = e.toLowerCase().slice(0, 5);
          return f !== "data-" && f !== "aria-";
        }
        default:
          return !1;
      }
    }
    function It(e, t, i, s) {
      if (t === null || typeof t > "u" || Nr(e, t, i, s))
        return !0;
      if (s)
        return !1;
      if (i !== null)
        switch (i.type) {
          case mn:
            return !t;
          case Jr:
            return t === !1;
          case io:
            return isNaN(t);
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ea(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function zt(e, t, i, s, f, h, y) {
      this.acceptsBooleans = t === Ya || t === mn || t === Jr, this.attributeName = s, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = y;
    }
    var Yt = {}, ql = [
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
    ql.forEach(function(e) {
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
      var t = e[0], i = e[1];
      Yt[t] = new zt(
        t,
        Xr,
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
        Jr,
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
        $a,
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
        io,
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
    var qo = /[\-\:]([a-z])/g, Kl = function(e) {
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
      var t = e.replace(qo, Kl);
      Yt[t] = new zt(
        t,
        Xr,
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
      var t = e.replace(qo, Kl);
      Yt[t] = new zt(
        t,
        Xr,
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
      var t = e.replace(qo, Kl);
      Yt[t] = new zt(
        t,
        Xr,
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
        Xr,
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
    var nu = "xlinkHref";
    Yt[nu] = new zt(
      "xlinkHref",
      Xr,
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
        Xr,
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
    var yc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ko = !1;
    function Zl(e) {
      !Ko && yc.test(e) && (Ko = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Zo(e, t, i, s) {
      if (s.mustUseProperty) {
        var f = s.propertyName;
        return e[f];
      } else {
        ma(i, t), s.sanitizeURL && Zl("" + i);
        var h = s.attributeName, y = null;
        if (s.type === Jr) {
          if (e.hasAttribute(h)) {
            var x = e.getAttribute(h);
            return x === "" ? !0 : It(t, i, s, !1) ? x : x === "" + i ? i : x;
          }
        } else if (e.hasAttribute(h)) {
          if (It(t, i, s, !1))
            return e.getAttribute(h);
          if (s.type === mn)
            return i;
          y = e.getAttribute(h);
        }
        return It(t, i, s, !1) ? y === null ? i : y : y === "" + i ? i : y;
      }
    }
    function Xl(e, t, i, s) {
      {
        if (!jn(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var f = e.getAttribute(t);
        return ma(i, t), f === "" + i ? i : f;
      }
    }
    function si(e, t, i, s) {
      var f = ea(t);
      if (!dn(t, f, s)) {
        if (It(t, i, f, s) && (i = null), s || f === null) {
          if (jn(t)) {
            var h = t;
            i === null ? e.removeAttribute(h) : (ma(i, t), e.setAttribute(h, "" + i));
          }
          return;
        }
        var y = f.mustUseProperty;
        if (y) {
          var x = f.propertyName;
          if (i === null) {
            var b = f.type;
            e[x] = b === mn ? !1 : "";
          } else
            e[x] = i;
          return;
        }
        var T = f.attributeName, R = f.attributeNamespace;
        if (i === null)
          e.removeAttribute(T);
        else {
          var z = f.type, U;
          z === mn || z === Jr && i === !0 ? U = "" : (ma(i, T), U = "" + i, f.sanitizeURL && Zl(U.toString())), R ? e.setAttributeNS(R, T, U) : e.setAttribute(T, U);
        }
      }
    }
    var oo = Symbol.for("react.element"), ta = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), lo = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), xe = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), it = Symbol.for("react.suspense"), St = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), Un = Symbol.for("react.scope"), Kt = Symbol.for("react.debug_trace_mode"), Zt = Symbol.for("react.offscreen"), yr = Symbol.for("react.legacy_hidden"), so = Symbol.for("react.cache"), Sc = Symbol.for("react.tracing_marker"), bt = Symbol.iterator, e0 = "@@iterator";
    function ki(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = bt && e[bt] || e[e0];
      return typeof t == "function" ? t : null;
    }
    var dt = Object.assign, uo = 0, fv, Cd, ru, Ba, dv, ga, pv;
    function hv() {
    }
    hv.__reactDisabledLog = !0;
    function t0() {
      {
        if (uo === 0) {
          fv = console.log, Cd = console.info, ru = console.warn, Ba = console.error, dv = console.group, ga = console.groupCollapsed, pv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: hv,
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
        uo++;
      }
    }
    function xc() {
      {
        if (uo--, uo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: dt({}, e, {
              value: fv
            }),
            info: dt({}, e, {
              value: Cd
            }),
            warn: dt({}, e, {
              value: ru
            }),
            error: dt({}, e, {
              value: Ba
            }),
            group: dt({}, e, {
              value: dv
            }),
            groupCollapsed: dt({}, e, {
              value: ga
            }),
            groupEnd: dt({}, e, {
              value: pv
            })
          });
        }
        uo < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Jl = l.ReactCurrentDispatcher, Xo;
    function Wa(e, t, i) {
      {
        if (Xo === void 0)
          try {
            throw Error();
          } catch (f) {
            var s = f.stack.trim().match(/\n( *(at )?)/);
            Xo = s && s[1] || "";
          }
        return `
` + Xo + e;
      }
    }
    var _d = !1, wc;
    {
      var Td = typeof WeakMap == "function" ? WeakMap : Map;
      wc = new Td();
    }
    function bc(e, t) {
      if (!e || _d)
        return "";
      {
        var i = wc.get(e);
        if (i !== void 0)
          return i;
      }
      var s;
      _d = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = Jl.current, Jl.current = null, t0();
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
            } catch (B) {
              s = B;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (B) {
              s = B;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            s = B;
          }
          e();
        }
      } catch (B) {
        if (B && s && typeof B.stack == "string") {
          for (var x = B.stack.split(`
`), b = s.stack.split(`
`), T = x.length - 1, R = b.length - 1; T >= 1 && R >= 0 && x[T] !== b[R]; )
            R--;
          for (; T >= 1 && R >= 0; T--, R--)
            if (x[T] !== b[R]) {
              if (T !== 1 || R !== 1)
                do
                  if (T--, R--, R < 0 || x[T] !== b[R]) {
                    var z = `
` + x[T].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && wc.set(e, z), z;
                  }
                while (T >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        _d = !1, Jl.current = h, xc(), Error.prepareStackTrace = f;
      }
      var U = e ? e.displayName || e.name : "", V = U ? Wa(U) : "";
      return typeof e == "function" && wc.set(e, V), V;
    }
    function kd(e, t, i) {
      return bc(e, !0);
    }
    function Jo(e, t, i) {
      return bc(e, !1);
    }
    function n0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function au(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return bc(e, n0(e));
      if (typeof e == "string")
        return Wa(e);
      switch (e) {
        case it:
          return Wa("Suspense");
        case St:
          return Wa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $e:
            return Jo(e.render);
          case ot:
            return au(e.type, t, i);
          case We: {
            var s = e, f = s._payload, h = s._init;
            try {
              return au(h(f), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Nt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return Wa(e.type);
        case we:
          return Wa("Lazy");
        case re:
          return Wa("Suspense");
        case Fe:
          return Wa("SuspenseList");
        case w:
        case k:
        case J:
          return Jo(e.type);
        case X:
          return Jo(e.type.render);
        case _:
          return kd(e.type);
        default:
          return "";
      }
    }
    function Rd(e) {
      try {
        var t = "", i = e;
        do
          t += Nt(i), i = i.return;
        while (i);
        return t;
      } catch (s) {
        return `
Error generating stack: ` + s.message + `
` + s.stack;
      }
    }
    function vv(e, t, i) {
      var s = e.displayName;
      if (s)
        return s;
      var f = t.displayName || t.name || "";
      return f !== "" ? i + "(" + f + ")" : i;
    }
    function Ec(e) {
      return e.displayName || "Context";
    }
    function Ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Va:
          return "Fragment";
        case ta:
          return "Portal";
        case L:
          return "Profiler";
        case lo:
          return "StrictMode";
        case it:
          return "Suspense";
        case St:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case xe:
            var t = e;
            return Ec(t) + ".Consumer";
          case ie:
            var i = e;
            return Ec(i._context) + ".Provider";
          case $e:
            return vv(e, e.render, "ForwardRef");
          case ot:
            var s = e.displayName || null;
            return s !== null ? s : Ft(e.type) || "Memo";
          case We: {
            var f = e, h = f._payload, y = f._init;
            try {
              return Ft(y(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function mv(e, t, i) {
      var s = t.displayName || t.name || "";
      return e.displayName || (s !== "" ? i + "(" + s + ")" : i);
    }
    function Dd(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case lt:
          return "Cache";
        case de:
          var s = i;
          return Dd(s) + ".Consumer";
        case q:
          var f = i;
          return Dd(f._context) + ".Provider";
        case me:
          return "DehydratedFragment";
        case X:
          return mv(i, i.render, "ForwardRef");
        case W:
          return "Fragment";
        case F:
          return i;
        case O:
          return "Portal";
        case D:
          return "Root";
        case N:
          return "Text";
        case we:
          return Ft(i);
        case ue:
          return i === lo ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case se:
          return "Profiler";
        case Qe:
          return "Scope";
        case re:
          return "Suspense";
        case Fe:
          return "SuspenseList";
        case st:
          return "TracingMarker";
        case _:
        case w:
        case pe:
        case k:
        case G:
        case J:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var iu = l.ReactDebugCurrentFrame, gn = null, ya = !1;
    function Sa() {
      {
        if (gn === null)
          return null;
        var e = gn._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function ou() {
      return gn === null ? "" : Rd(gn);
    }
    function _n() {
      iu.getCurrentStack = null, gn = null, ya = !1;
    }
    function jt(e) {
      iu.getCurrentStack = e === null ? null : ou, gn = e, ya = !1;
    }
    function r0() {
      return gn;
    }
    function Ga(e) {
      ya = e;
    }
    function sr(e) {
      return "" + e;
    }
    function co(e) {
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
    var gv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function es(e, t) {
      gv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Od(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function yv(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function su(e) {
      var t = "";
      return e && (Od(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ts(e) {
      var t = Od(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Zr(e[t]);
      var s = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var f = i.get, h = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return f.call(this);
          },
          set: function(x) {
            Zr(x), s = "" + x, h.call(this, x);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var y = {
          getValue: function() {
            return s;
          },
          setValue: function(x) {
            Zr(x), s = "" + x;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return y;
      }
    }
    function el(e) {
      yv(e) || (e._valueTracker = ts(e));
    }
    function Sv(e) {
      if (!e)
        return !1;
      var t = yv(e);
      if (!t)
        return !0;
      var i = t.getValue(), s = su(e);
      return s !== i ? (t.setValue(s), !0) : !1;
    }
    function Cc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var _c = !1, uu = !1, Tc = !1, Md = !1;
    function Ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function cu(e, t) {
      var i = e, s = t.checked, f = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: s ?? i._wrapperState.initialChecked
      });
      return f;
    }
    function fu(e, t) {
      es("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !uu && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Sa() || "A component", t.type), uu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_c && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Sa() || "A component", t.type), _c = !0);
      var i = e, s = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: co(t.value != null ? t.value : s),
        controlled: Ri(t)
      };
    }
    function Ld(e, t) {
      var i = e, s = t.checked;
      s != null && si(i, "checked", s, !1);
    }
    function ns(e, t) {
      var i = e;
      {
        var s = Ri(t);
        !i._wrapperState.controlled && s && !Md && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Md = !0), i._wrapperState.controlled && !s && !Tc && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Tc = !0);
      }
      Ld(e, t);
      var f = co(t.value), h = t.type;
      if (f != null)
        h === "number" ? (f === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != f) && (i.value = sr(f)) : i.value !== sr(f) && (i.value = sr(f));
      else if (h === "submit" || h === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? fo(i, t.type, f) : t.hasOwnProperty("defaultValue") && fo(i, t.type, co(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function du(e, t, i) {
      var s = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var f = t.type, h = f === "submit" || f === "reset";
        if (h && (t.value === void 0 || t.value === null))
          return;
        var y = sr(s._wrapperState.initialValue);
        i || y !== s.value && (s.value = y), s.defaultValue = y;
      }
      var x = s.name;
      x !== "" && (s.name = ""), s.defaultChecked = !s.defaultChecked, s.defaultChecked = !!s._wrapperState.initialChecked, x !== "" && (s.name = x);
    }
    function xv(e, t) {
      var i = e;
      ns(i, t), na(i, t);
    }
    function na(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var s = e; s.parentNode; )
          s = s.parentNode;
        ma(i, "name");
        for (var f = s.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), h = 0; h < f.length; h++) {
          var y = f[h];
          if (!(y === e || y.form !== e.form)) {
            var x = Km(y);
            if (!x)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Sv(y), ns(y, x);
          }
        }
      }
    }
    function fo(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Cc(e.ownerDocument) !== e) && (i == null ? e.defaultValue = sr(e._wrapperState.initialValue) : e.defaultValue !== sr(i) && (e.defaultValue = sr(i)));
    }
    var kc = !1, rs = !1, wv = !1;
    function Rc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? r.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || rs || (rs = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (wv || (wv = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !kc && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), kc = !0);
    }
    function Nd(e, t) {
      t.value != null && e.setAttribute("value", sr(co(t.value)));
    }
    var pu = Array.isArray;
    function An(e) {
      return pu(e);
    }
    var Dc;
    Dc = !1;
    function bv() {
      var e = Sa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ev = ["value", "defaultValue"];
    function a0(e) {
      {
        es("select", e);
        for (var t = 0; t < Ev.length; t++) {
          var i = Ev[t];
          if (e[i] != null) {
            var s = An(e[i]);
            e.multiple && !s ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, bv()) : !e.multiple && s && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, bv());
          }
        }
      }
    }
    function po(e, t, i, s) {
      var f = e.options;
      if (t) {
        for (var h = i, y = {}, x = 0; x < h.length; x++)
          y["$" + h[x]] = !0;
        for (var b = 0; b < f.length; b++) {
          var T = y.hasOwnProperty("$" + f[b].value);
          f[b].selected !== T && (f[b].selected = T), T && s && (f[b].defaultSelected = !0);
        }
      } else {
        for (var R = sr(co(i)), z = null, U = 0; U < f.length; U++) {
          if (f[U].value === R) {
            f[U].selected = !0, s && (f[U].defaultSelected = !0);
            return;
          }
          z === null && !f[U].disabled && (z = f[U]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function jd(e, t) {
      return dt({}, t, {
        value: void 0
      });
    }
    function Cv(e, t) {
      var i = e;
      a0(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Dc && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Dc = !0);
    }
    function i0(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var s = t.value;
      s != null ? po(i, !!t.multiple, s, !1) : t.defaultValue != null && po(i, !!t.multiple, t.defaultValue, !0);
    }
    function o0(e, t) {
      var i = e, s = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var f = t.value;
      f != null ? po(i, !!t.multiple, f, !1) : s !== !!t.multiple && (t.defaultValue != null ? po(i, !!t.multiple, t.defaultValue, !0) : po(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function l0(e, t) {
      var i = e, s = t.value;
      s != null && po(i, !!t.multiple, s, !1);
    }
    var Ud = !1;
    function Ad(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var s = dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: sr(i._wrapperState.initialValue)
      });
      return s;
    }
    function _v(e, t) {
      var i = e;
      es("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ud && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Sa() || "A component"), Ud = !0);
      var s = t.value;
      if (s == null) {
        var f = t.children, h = t.defaultValue;
        if (f != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (h != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (An(f)) {
              if (f.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              f = f[0];
            }
            h = f;
          }
        }
        h == null && (h = ""), s = h;
      }
      i._wrapperState = {
        initialValue: co(s)
      };
    }
    function Tv(e, t) {
      var i = e, s = co(t.value), f = co(t.defaultValue);
      if (s != null) {
        var h = sr(s);
        h !== i.value && (i.value = h), t.defaultValue == null && i.defaultValue !== h && (i.defaultValue = h);
      }
      f != null && (i.defaultValue = sr(f));
    }
    function kv(e, t) {
      var i = e, s = i.textContent;
      s === i._wrapperState.initialValue && s !== "" && s !== null && (i.value = s);
    }
    function zd(e, t) {
      Tv(e, t);
    }
    var Di = "http://www.w3.org/1999/xhtml", s0 = "http://www.w3.org/1998/Math/MathML", Fd = "http://www.w3.org/2000/svg";
    function Oc(e) {
      switch (e) {
        case "svg":
          return Fd;
        case "math":
          return s0;
        default:
          return Di;
      }
    }
    function Pd(e, t) {
      return e == null || e === Di ? Oc(t) : e === Fd && t === "foreignObject" ? Di : e;
    }
    var u0 = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, s, f) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, s, f);
        });
      } : e;
    }, Mc, Rv = u0(function(e, t) {
      if (e.namespaceURI === Fd && !("innerHTML" in e)) {
        Mc = Mc || document.createElement("div"), Mc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Mc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), jr = 1, Oi = 3, yn = 8, Qa = 9, tl = 11, Lc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Oi) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Dv = {
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
    }, as = {
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
    function Ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(as).forEach(function(e) {
      Mv.forEach(function(t) {
        as[Ov(t, e)] = as[e];
      });
    });
    function Nc(e, t, i) {
      var s = t == null || typeof t == "boolean" || t === "";
      return s ? "" : !i && typeof t == "number" && t !== 0 && !(as.hasOwnProperty(e) && as[e]) ? t + "px" : (oi(t, e), ("" + t).trim());
    }
    var is = /([A-Z])/g, c0 = /^ms-/;
    function f0(e) {
      return e.replace(is, "-$1").toLowerCase().replace(c0, "-ms-");
    }
    var Lv = function() {
    };
    {
      var Nv = /^(?:webkit|moz|o)[A-Z]/, jv = /^-ms-/, hu = /-(.)/g, os = /;\s*$/, ls = {}, ss = {}, Uv = !1, Hd = !1, Id = function(e) {
        return e.replace(hu, function(t, i) {
          return i.toUpperCase();
        });
      }, Yd = function(e) {
        ls.hasOwnProperty(e) && ls[e] || (ls[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Id(e.replace(jv, "ms-"))
        ));
      }, Av = function(e) {
        ls.hasOwnProperty(e) && ls[e] || (ls[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, zv = function(e, t) {
        ss.hasOwnProperty(t) && ss[t] || (ss[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(os, "")));
      }, Fv = function(e, t) {
        Uv || (Uv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, d0 = function(e, t) {
        Hd || (Hd = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Lv = function(e, t) {
        e.indexOf("-") > -1 ? Yd(e) : Nv.test(e) ? Av(e) : os.test(t) && zv(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || d0(e, t));
      };
    }
    var p0 = Lv;
    function h0(e) {
      {
        var t = "", i = "";
        for (var s in e)
          if (e.hasOwnProperty(s)) {
            var f = e[s];
            if (f != null) {
              var h = s.indexOf("--") === 0;
              t += i + (h ? s : f0(s)) + ":", t += Nc(s, f, h), i = ";";
            }
          }
        return t || null;
      }
    }
    function Pv(e, t) {
      var i = e.style;
      for (var s in t)
        if (t.hasOwnProperty(s)) {
          var f = s.indexOf("--") === 0;
          f || p0(s, t[s]);
          var h = Nc(s, t[s], f);
          s === "float" && (s = "cssFloat"), f ? i.setProperty(s, h) : i[s] = h;
        }
    }
    function v0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function xa(e) {
      var t = {};
      for (var i in e)
        for (var s = Dv[i] || [i], f = 0; f < s.length; f++)
          t[s[f]] = i;
      return t;
    }
    function vu(e, t) {
      {
        if (!t)
          return;
        var i = xa(e), s = xa(t), f = {};
        for (var h in i) {
          var y = i[h], x = s[h];
          if (x && y !== x) {
            var b = y + "," + x;
            if (f[b])
              continue;
            f[b] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", v0(e[y]) ? "Removing" : "Updating", y, x);
          }
        }
      }
    }
    var Hv = {
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
    }, Iv = dt({
      menuitem: !0
    }, Hv), Yv = "__html";
    function jc(e, t) {
      if (t) {
        if (Iv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Yv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
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
    var Uc = {
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
    }, $v = {
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
    }, qa = {}, $d = new RegExp("^(aria)-[" + He + "]*$"), mu = new RegExp("^(aria)[A-Z][" + He + "]*$");
    function Vd(e, t) {
      {
        if (ir.call(qa, t) && qa[t])
          return !0;
        if (mu.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), s = $v.hasOwnProperty(i) ? i : null;
          if (s == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), qa[t] = !0, !0;
          if (t !== s)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, s), qa[t] = !0, !0;
        }
        if ($d.test(t)) {
          var f = t.toLowerCase(), h = $v.hasOwnProperty(f) ? f : null;
          if (h == null)
            return qa[t] = !0, !1;
          if (t !== h)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), qa[t] = !0, !0;
        }
      }
      return !0;
    }
    function Vv(e, t) {
      {
        var i = [];
        for (var s in t) {
          var f = Vd(e, s);
          f || i.push(s);
        }
        var h = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : i.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function Ac(e, t) {
      Mi(e, t) || Vv(e, t);
    }
    var nl = !1;
    function Bd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !nl && (nl = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Wd = function() {
    };
    {
      var zn = {}, Gd = /^on./, Bv = /^on[^A-Z]/, Wv = new RegExp("^(aria)-[" + He + "]*$"), Gv = new RegExp("^(aria)[A-Z][" + He + "]*$");
      Wd = function(e, t, i, s) {
        if (ir.call(zn, t) && zn[t])
          return !0;
        var f = t.toLowerCase();
        if (f === "onfocusin" || f === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (s != null) {
          var h = s.registrationNameDependencies, y = s.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var x = y.hasOwnProperty(f) ? y[f] : null;
          if (x != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, x), zn[t] = !0, !0;
          if (Gd.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Gd.test(t))
          return Bv.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Wv.test(t) || Gv.test(t))
          return !0;
        if (f === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (f === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (f === "is" && i !== null && i !== void 0 && typeof i != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), zn[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var b = ea(t), T = b !== null && b.type === li;
        if (Uc.hasOwnProperty(f)) {
          var R = Uc[f];
          if (R !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, R), zn[t] = !0, !0;
        } else if (!T && t !== f)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, f), zn[t] = !0, !0;
        return typeof i == "boolean" && Nr(t, i, b, !1) ? (i ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), zn[t] = !0, !0) : T ? !0 : Nr(t, i, b, !1) ? (zn[t] = !0, !1) : ((i === "false" || i === "true") && b !== null && b.type === mn && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), zn[t] = !0), !0);
      };
    }
    var Qv = function(e, t, i) {
      {
        var s = [];
        for (var f in t) {
          var h = Wd(e, f, t[f], i);
          h || s.push(f);
        }
        var y = s.map(function(x) {
          return "`" + x + "`";
        }).join(", ");
        s.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : s.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function qv(e, t, i) {
      Mi(e, t) || Qv(e, t, i);
    }
    var Li = 1, gu = 2, rl = 4, m0 = Li | gu | rl, yu = null;
    function Su(e) {
      yu !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), yu = e;
    }
    function g0() {
      yu === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), yu = null;
    }
    function Kv(e) {
      return e === yu;
    }
    function zc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Oi ? t.parentNode : t;
    }
    var Pt = null, ho = null, Ni = null;
    function us(e) {
      var t = Us(e);
      if (t) {
        if (typeof Pt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var s = Km(i);
          Pt(t.stateNode, t.type, s);
        }
      }
    }
    function Zv(e) {
      Pt = e;
    }
    function Fc(e) {
      ho ? Ni ? Ni.push(e) : Ni = [e] : ho = e;
    }
    function xu() {
      return ho !== null || Ni !== null;
    }
    function wu() {
      if (ho) {
        var e = ho, t = Ni;
        if (ho = null, Ni = null, us(e), t)
          for (var i = 0; i < t.length; i++)
            us(t[i]);
      }
    }
    var al = function(e, t) {
      return e(t);
    }, Qd = function() {
    }, qd = !1;
    function y0() {
      var e = xu();
      e && (Qd(), wu());
    }
    function Kd(e, t, i) {
      if (qd)
        return e(t, i);
      qd = !0;
      try {
        return al(e, t, i);
      } finally {
        qd = !1, y0();
      }
    }
    function Pc(e, t, i) {
      al = e, Qd = i;
    }
    function Hc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Zd(e, t, i) {
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
          return !!(i.disabled && Hc(t));
        default:
          return !1;
      }
    }
    function il(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var s = Km(i);
      if (s === null)
        return null;
      var f = s[t];
      if (Zd(t, e.type, s))
        return null;
      if (f && typeof f != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof f + "` type.");
      return f;
    }
    var bu = !1;
    if (Nn)
      try {
        var ol = {};
        Object.defineProperty(ol, "passive", {
          get: function() {
            bu = !0;
          }
        }), window.addEventListener("test", ol, ol), window.removeEventListener("test", ol, ol);
      } catch {
        bu = !1;
      }
    function Xv(e, t, i, s, f, h, y, x, b) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, T);
      } catch (R) {
        this.onError(R);
      }
    }
    var Xd = Xv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Jd = document.createElement("react");
      Xd = function(t, i, s, f, h, y, x, b, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), z = !1, U = !0, V = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
        function K() {
          Jd.removeEventListener(Z, Ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var Te = Array.prototype.slice.call(arguments, 3);
        function Ye() {
          z = !0, K(), i.apply(s, Te), U = !1;
        }
        var Ae, yt = !1, ht = !1;
        function I(Y) {
          if (Ae = Y.error, yt = !0, Ae === null && Y.colno === 0 && Y.lineno === 0 && (ht = !0), Y.defaultPrevented && Ae != null && typeof Ae == "object")
            try {
              Ae._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), Jd.addEventListener(Z, Ye, !1), R.initEvent(Z, !1, !1), Jd.dispatchEvent(R), B && Object.defineProperty(window, "event", B), z && U && (yt ? ht && (Ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ae)), window.removeEventListener("error", I), !z)
          return K(), Xv.apply(this, arguments);
      };
    }
    var S0 = Xd, vo = !1, Ka = null, Eu = !1, mo = null, ui = {
      onError: function(e) {
        vo = !0, Ka = e;
      }
    };
    function ll(e, t, i, s, f, h, y, x, b) {
      vo = !1, Ka = null, S0.apply(ui, arguments);
    }
    function ji(e, t, i, s, f, h, y, x, b) {
      if (ll.apply(this, arguments), vo) {
        var T = tp();
        Eu || (Eu = !0, mo = T);
      }
    }
    function ep() {
      if (Eu) {
        var e = mo;
        throw Eu = !1, mo = null, e;
      }
    }
    function x0() {
      return vo;
    }
    function tp() {
      if (vo) {
        var e = Ka;
        return vo = !1, Ka = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wa(e) {
      return e._reactInternals;
    }
    function Cu(e) {
      return e._reactInternals !== void 0;
    }
    function cs(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), go = (
      /*                */
      1
    ), Bt = (
      /*                    */
      2
    ), rt = (
      /*                       */
      4
    ), kt = (
      /*                */
      16
    ), Rt = (
      /*                 */
      32
    ), ci = (
      /*                     */
      64
    ), Xe = (
      /*                   */
      128
    ), sn = (
      /*            */
      256
    ), Ur = (
      /*                          */
      512
    ), ba = (
      /*                     */
      1024
    ), Xt = (
      /*                      */
      2048
    ), Ea = (
      /*                    */
      4096
    ), yo = (
      /*                   */
      8192
    ), _u = (
      /*             */
      16384
    ), Ic = Xt | rt | ci | Ur | ba | _u, Jv = (
      /*               */
      32767
    ), ra = (
      /*                   */
      32768
    ), Fn = (
      /*                */
      65536
    ), Tu = (
      /* */
      131072
    ), np = (
      /*                       */
      1048576
    ), rp = (
      /*                    */
      2097152
    ), Ar = (
      /*                 */
      4194304
    ), So = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), sl = (
      /*              */
      33554432
    ), fs = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      rt | ba | 0
    ), Fr = Bt | rt | kt | Rt | Ur | Ea | yo, ur = rt | ci | Ur | yo, Ca = Xt | kt, Wn = Ar | So | rp, Ui = l.ReactCurrentOwner;
    function aa(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var s = t;
        do
          t = s, (t.flags & (Bt | Ea)) !== Ie && (i = t.return), s = t.return;
        while (s);
      }
      return t.tag === D ? i : null;
    }
    function ap(e) {
      if (e.tag === re) {
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
    function Yc(e) {
      return e.tag === D ? e.stateNode.containerInfo : null;
    }
    function ip(e) {
      return aa(e) === e;
    }
    function ia(e) {
      {
        var t = Ui.current;
        if (t !== null && t.tag === _) {
          var i = t, s = i.stateNode;
          s._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(i) || "A component"), s._warnedAboutRefsInRender = !0;
        }
      }
      var f = wa(e);
      return f ? aa(f) === f : !1;
    }
    function Pr(e) {
      if (aa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Wt(e) {
      var t = e.alternate;
      if (!t) {
        var i = aa(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var s = e, f = t; ; ) {
        var h = s.return;
        if (h === null)
          break;
        var y = h.alternate;
        if (y === null) {
          var x = h.return;
          if (x !== null) {
            s = f = x;
            continue;
          }
          break;
        }
        if (h.child === y.child) {
          for (var b = h.child; b; ) {
            if (b === s)
              return Pr(h), e;
            if (b === f)
              return Pr(h), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (s.return !== f.return)
          s = h, f = y;
        else {
          for (var T = !1, R = h.child; R; ) {
            if (R === s) {
              T = !0, s = h, f = y;
              break;
            }
            if (R === f) {
              T = !0, f = h, s = y;
              break;
            }
            R = R.sibling;
          }
          if (!T) {
            for (R = y.child; R; ) {
              if (R === s) {
                T = !0, s = y, f = h;
                break;
              }
              if (R === f) {
                T = !0, f = y, s = h;
                break;
              }
              R = R.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (s.alternate !== f)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (s.tag !== D)
        throw new Error("Unable to find node on an unmounted component.");
      return s.stateNode.current === s ? e : t;
    }
    function _a(e) {
      var t = Wt(e);
      return t !== null ? op(t) : null;
    }
    function op(e) {
      if (e.tag === F || e.tag === N)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = op(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function em(e) {
      var t = Wt(e);
      return t !== null ? $c(t) : null;
    }
    function $c(e) {
      if (e.tag === F || e.tag === N)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== O) {
          var i = $c(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var Vc = o.unstable_scheduleCallback, tm = o.unstable_cancelCallback, Bc = o.unstable_shouldYield, nm = o.unstable_requestPaint, tn = o.unstable_now, lp = o.unstable_getCurrentPriorityLevel, Wc = o.unstable_ImmediatePriority, oa = o.unstable_UserBlockingPriority, fi = o.unstable_NormalPriority, Gc = o.unstable_LowPriority, xo = o.unstable_IdlePriority, sp = o.unstable_yieldValue, up = o.unstable_setDisableYieldValue, wo = null, Pn = null, ge = null, pn = !1, Gn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function cp(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ai && (e = dt({}, e, {
          getLaneLabelMap: Eo,
          injectProfilingHooks: zi
        })), wo = t.inject(e), Pn = t;
      } catch (i) {
        v("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function rm(e, t) {
      if (Pn && typeof Pn.onScheduleFiberRoot == "function")
        try {
          Pn.onScheduleFiberRoot(wo, e, t);
        } catch (i) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", i));
        }
    }
    function Ai(e, t) {
      if (Pn && typeof Pn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & Xe) === Xe;
          if (Cn) {
            var s;
            switch (t) {
              case cr:
                s = Wc;
                break;
              case Qn:
                s = oa;
                break;
              case Pi:
                s = fi;
                break;
              case Uu:
                s = xo;
                break;
              default:
                s = fi;
                break;
            }
            Pn.onCommitFiberRoot(wo, e, s, i);
          }
        } catch (f) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", f));
        }
    }
    function bo(e) {
      if (Pn && typeof Pn.onPostCommitFiberRoot == "function")
        try {
          Pn.onPostCommitFiberRoot(wo, e);
        } catch (t) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function fp(e) {
      if (Pn && typeof Pn.onCommitFiberUnmount == "function")
        try {
          Pn.onCommitFiberUnmount(wo, e);
        } catch (t) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof sp == "function" && (up(e), d(e)), Pn && typeof Pn.setStrictMode == "function")
        try {
          Pn.setStrictMode(wo, e);
        } catch (t) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function zi(e) {
      ge = e;
    }
    function Eo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Gt; i++) {
          var s = w0(t);
          e.set(t, s), t *= 2;
        }
        return e;
      }
    }
    function Qc(e) {
      ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(e);
    }
    function dp() {
      ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
    }
    function Co(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function ul() {
      ge !== null && typeof ge.markComponentRenderStopped == "function" && ge.markComponentRenderStopped();
    }
    function am(e) {
      ge !== null && typeof ge.markComponentPassiveEffectMountStarted == "function" && ge.markComponentPassiveEffectMountStarted(e);
    }
    function pp() {
      ge !== null && typeof ge.markComponentPassiveEffectMountStopped == "function" && ge.markComponentPassiveEffectMountStopped();
    }
    function qc(e) {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStarted == "function" && ge.markComponentPassiveEffectUnmountStarted(e);
    }
    function im() {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStopped == "function" && ge.markComponentPassiveEffectUnmountStopped();
    }
    function om(e) {
      ge !== null && typeof ge.markComponentLayoutEffectMountStarted == "function" && ge.markComponentLayoutEffectMountStarted(e);
    }
    function lm() {
      ge !== null && typeof ge.markComponentLayoutEffectMountStopped == "function" && ge.markComponentLayoutEffectMountStopped();
    }
    function Kc(e) {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStarted == "function" && ge.markComponentLayoutEffectUnmountStarted(e);
    }
    function ds() {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStopped == "function" && ge.markComponentLayoutEffectUnmountStopped();
    }
    function Zc(e, t, i) {
      ge !== null && typeof ge.markComponentErrored == "function" && ge.markComponentErrored(e, t, i);
    }
    function sm(e, t, i) {
      ge !== null && typeof ge.markComponentSuspended == "function" && ge.markComponentSuspended(e, t, i);
    }
    function um(e) {
      ge !== null && typeof ge.markLayoutEffectsStarted == "function" && ge.markLayoutEffectsStarted(e);
    }
    function ps() {
      ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
    }
    function cm(e) {
      ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(e);
    }
    function ku() {
      ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped();
    }
    function Za(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function Ru() {
      ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
    }
    function hs() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function cl(e) {
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
    }
    function hp(e, t) {
      ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, t);
    }
    function _o(e, t) {
      ge !== null && typeof ge.markStateUpdateScheduled == "function" && ge.markStateUpdateScheduled(e, t);
    }
    var Ve = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Ge = (
      /*                    */
      2
    ), nn = (
      /*               */
      8
    ), Ta = (
      /*              */
      16
    ), Xc = Math.clz32 ? Math.clz32 : fl, Jc = Math.log, vp = Math.LN2;
    function fl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jc(t) / vp | 0) | 0;
    }
    var Gt = 31, ee = (
      /*                        */
      0
    ), mt = (
      /*                          */
      0
    ), qe = (
      /*                        */
      1
    ), di = (
      /*    */
      2
    ), la = (
      /*             */
      4
    ), dl = (
      /*            */
      8
    ), Qt = (
      /*                     */
      16
    ), pl = (
      /*                */
      32
    ), To = (
      /*                       */
      4194240
    ), hl = (
      /*                        */
      64
    ), ka = (
      /*                        */
      128
    ), Hr = (
      /*                        */
      256
    ), vl = (
      /*                        */
      512
    ), Du = (
      /*                        */
      1024
    ), Ou = (
      /*                        */
      2048
    ), ef = (
      /*                        */
      4096
    ), tf = (
      /*                        */
      8192
    ), nf = (
      /*                        */
      16384
    ), rf = (
      /*                       */
      32768
    ), af = (
      /*                       */
      65536
    ), of = (
      /*                       */
      131072
    ), lf = (
      /*                       */
      262144
    ), sf = (
      /*                       */
      524288
    ), ml = (
      /*                       */
      1048576
    ), uf = (
      /*                       */
      2097152
    ), gl = (
      /*                            */
      130023424
    ), Fi = (
      /*                             */
      4194304
    ), cf = (
      /*                             */
      8388608
    ), Mu = (
      /*                             */
      16777216
    ), ff = (
      /*                             */
      33554432
    ), df = (
      /*                             */
      67108864
    ), mp = Fi, vs = (
      /*          */
      134217728
    ), pf = (
      /*                          */
      268435455
    ), ms = (
      /*               */
      268435456
    ), ko = (
      /*                        */
      536870912
    ), Ir = (
      /*                   */
      1073741824
    );
    function w0(e) {
      {
        if (e & qe)
          return "Sync";
        if (e & di)
          return "InputContinuousHydration";
        if (e & la)
          return "InputContinuous";
        if (e & dl)
          return "DefaultHydration";
        if (e & Qt)
          return "Default";
        if (e & pl)
          return "TransitionHydration";
        if (e & To)
          return "Transition";
        if (e & gl)
          return "Retry";
        if (e & vs)
          return "SelectiveHydration";
        if (e & ms)
          return "IdleHydration";
        if (e & ko)
          return "Idle";
        if (e & Ir)
          return "Offscreen";
      }
    }
    var Ht = -1, hf = hl, vf = Fi;
    function gs(e) {
      switch (Sn(e)) {
        case qe:
          return qe;
        case di:
          return di;
        case la:
          return la;
        case dl:
          return dl;
        case Qt:
          return Qt;
        case pl:
          return pl;
        case hl:
        case ka:
        case Hr:
        case vl:
        case Du:
        case Ou:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case sf:
        case ml:
        case uf:
          return e & To;
        case Fi:
        case cf:
        case Mu:
        case ff:
        case df:
          return e & gl;
        case vs:
          return vs;
        case ms:
          return ms;
        case ko:
          return ko;
        case Ir:
          return Ir;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Lu(e, t) {
      var i = e.pendingLanes;
      if (i === ee)
        return ee;
      var s = ee, f = e.suspendedLanes, h = e.pingedLanes, y = i & pf;
      if (y !== ee) {
        var x = y & ~f;
        if (x !== ee)
          s = gs(x);
        else {
          var b = y & h;
          b !== ee && (s = gs(b));
        }
      } else {
        var T = i & ~f;
        T !== ee ? s = gs(T) : h !== ee && (s = gs(h));
      }
      if (s === ee)
        return ee;
      if (t !== ee && t !== s && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & f) === ee) {
        var R = Sn(s), z = Sn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === Qt && (z & To) !== ee
        )
          return t;
      }
      (s & la) !== ee && (s |= i & Qt);
      var U = e.entangledLanes;
      if (U !== ee)
        for (var V = e.entanglements, B = s & U; B > 0; ) {
          var K = Ro(B), Te = 1 << K;
          s |= V[K], B &= ~Te;
        }
      return s;
    }
    function fm(e, t) {
      for (var i = e.eventTimes, s = Ht; t > 0; ) {
        var f = Ro(t), h = 1 << f, y = i[f];
        y > s && (s = y), t &= ~h;
      }
      return s;
    }
    function mf(e, t) {
      switch (e) {
        case qe:
        case di:
        case la:
          return t + 250;
        case dl:
        case Qt:
        case pl:
        case hl:
        case ka:
        case Hr:
        case vl:
        case Du:
        case Ou:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case sf:
        case ml:
        case uf:
          return t + 5e3;
        case Fi:
        case cf:
        case Mu:
        case ff:
        case df:
          return Ht;
        case vs:
        case ms:
        case ko:
        case Ir:
          return Ht;
        default:
          return v("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function b0(e, t) {
      for (var i = e.pendingLanes, s = e.suspendedLanes, f = e.pingedLanes, h = e.expirationTimes, y = i; y > 0; ) {
        var x = Ro(y), b = 1 << x, T = h[x];
        T === Ht ? ((b & s) === ee || (b & f) !== ee) && (h[x] = mf(b, t)) : T <= t && (e.expiredLanes |= b), y &= ~b;
      }
    }
    function E0(e) {
      return gs(e.pendingLanes);
    }
    function gp(e) {
      var t = e.pendingLanes & ~Ir;
      return t !== ee ? t : t & Ir ? Ir : ee;
    }
    function ys(e) {
      return (e & qe) !== ee;
    }
    function Nu(e) {
      return (e & pf) !== ee;
    }
    function gf(e) {
      return (e & gl) === e;
    }
    function C0(e) {
      var t = qe | la | Qt;
      return (e & t) === ee;
    }
    function dm(e) {
      return (e & To) === e;
    }
    function ju(e, t) {
      var i = di | la | dl | Qt;
      return (t & i) !== ee;
    }
    function pm(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function yp(e) {
      return (e & To) !== ee;
    }
    function Sp() {
      var e = hf;
      return hf <<= 1, (hf & To) === ee && (hf = hl), e;
    }
    function _0() {
      var e = vf;
      return vf <<= 1, (vf & gl) === ee && (vf = Fi), e;
    }
    function Sn(e) {
      return e & -e;
    }
    function kn(e) {
      return Sn(e);
    }
    function Ro(e) {
      return 31 - Xc(e);
    }
    function yf(e) {
      return Ro(e);
    }
    function Yr(e, t) {
      return (e & t) !== ee;
    }
    function yl(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function Ss(e, t) {
      return e & ~t;
    }
    function xp(e, t) {
      return e & t;
    }
    function hm(e) {
      return e;
    }
    function vm(e, t) {
      return e !== mt && e < t ? e : t;
    }
    function Sf(e) {
      for (var t = [], i = 0; i < Gt; i++)
        t.push(e);
      return t;
    }
    function Sl(e, t, i) {
      e.pendingLanes |= t, t !== ko && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var s = e.eventTimes, f = yf(t);
      s[f] = i;
    }
    function wp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, s = t; s > 0; ) {
        var f = Ro(s), h = 1 << f;
        i[f] = Ht, s &= ~h;
      }
    }
    function bp(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ep(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var s = e.entanglements, f = e.eventTimes, h = e.expirationTimes, y = i; y > 0; ) {
        var x = Ro(y), b = 1 << x;
        s[x] = ee, f[x] = Ht, h[x] = Ht, y &= ~b;
      }
    }
    function xs(e, t) {
      for (var i = e.entangledLanes |= t, s = e.entanglements, f = i; f; ) {
        var h = Ro(f), y = 1 << h;
        // Is this one of the newly entangled lanes?
        y & t | // Is this lane transitively entangled with the newly entangled lanes?
        s[h] & t && (s[h] |= t), f &= ~y;
      }
    }
    function T0(e, t) {
      var i = Sn(t), s;
      switch (i) {
        case la:
          s = di;
          break;
        case Qt:
          s = dl;
          break;
        case hl:
        case ka:
        case Hr:
        case vl:
        case Du:
        case Ou:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case sf:
        case ml:
        case uf:
        case Fi:
        case cf:
        case Mu:
        case ff:
        case df:
          s = pl;
          break;
        case ko:
          s = ms;
          break;
        default:
          s = mt;
          break;
      }
      return (s & (e.suspendedLanes | t)) !== mt ? mt : s;
    }
    function Cp(e, t, i) {
      if (Gn)
        for (var s = e.pendingUpdatersLaneMap; i > 0; ) {
          var f = yf(i), h = 1 << f, y = s[f];
          y.add(t), i &= ~h;
        }
    }
    function xf(e, t) {
      if (Gn)
        for (var i = e.pendingUpdatersLaneMap, s = e.memoizedUpdaters; t > 0; ) {
          var f = yf(t), h = 1 << f, y = i[f];
          y.size > 0 && (y.forEach(function(x) {
            var b = x.alternate;
            (b === null || !s.has(b)) && s.add(x);
          }), y.clear()), t &= ~h;
        }
    }
    function _p(e, t) {
      return null;
    }
    var cr = qe, Qn = la, Pi = Qt, Uu = ko, xl = mt;
    function Ra() {
      return xl;
    }
    function Rn(e) {
      xl = e;
    }
    function Au(e, t) {
      var i = xl;
      try {
        return xl = e, t();
      } finally {
        xl = i;
      }
    }
    function fr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function k0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Tp(e, t) {
      return e !== 0 && e < t;
    }
    function zu(e) {
      var t = Sn(e);
      return Tp(cr, t) ? Tp(Qn, t) ? Nu(t) ? Pi : Uu : Qn : cr;
    }
    function Dn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var mm;
    function Re(e) {
      mm = e;
    }
    function ws(e) {
      mm(e);
    }
    var Fu;
    function gm(e) {
      Fu = e;
    }
    var ym;
    function Pu(e) {
      ym = e;
    }
    var Hu;
    function kp(e) {
      Hu = e;
    }
    var Rp;
    function Sm(e) {
      Rp = e;
    }
    var wf = !1, bs = [], pi = null, Jt = null, Hn = null, Da = /* @__PURE__ */ new Map(), Es = /* @__PURE__ */ new Map(), Hi = [], Xa = [
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
    function xm(e) {
      return Xa.indexOf(e) > -1;
    }
    function hi(e, t, i, s, f) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [s]
      };
    }
    function wm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          pi = null;
          break;
        case "dragenter":
        case "dragleave":
          Jt = null;
          break;
        case "mouseover":
        case "mouseout":
          Hn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          Da.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var s = t.pointerId;
          Es.delete(s);
          break;
        }
      }
    }
    function Cs(e, t, i, s, f, h) {
      if (e === null || e.nativeEvent !== h) {
        var y = hi(t, i, s, f, h);
        if (t !== null) {
          var x = Us(t);
          x !== null && Fu(x);
        }
        return y;
      }
      e.eventSystemFlags |= s;
      var b = e.targetContainers;
      return f !== null && b.indexOf(f) === -1 && b.push(f), e;
    }
    function bm(e, t, i, s, f) {
      switch (t) {
        case "focusin": {
          var h = f;
          return pi = Cs(pi, e, t, i, s, h), !0;
        }
        case "dragenter": {
          var y = f;
          return Jt = Cs(Jt, e, t, i, s, y), !0;
        }
        case "mouseover": {
          var x = f;
          return Hn = Cs(Hn, e, t, i, s, x), !0;
        }
        case "pointerover": {
          var b = f, T = b.pointerId;
          return Da.set(T, Cs(Da.get(T) || null, e, t, i, s, b)), !0;
        }
        case "gotpointercapture": {
          var R = f, z = R.pointerId;
          return Es.set(z, Cs(Es.get(z) || null, e, t, i, s, R)), !0;
        }
      }
      return !1;
    }
    function Dp(e) {
      var t = qu(e.target);
      if (t !== null) {
        var i = aa(t);
        if (i !== null) {
          var s = i.tag;
          if (s === re) {
            var f = ap(i);
            if (f !== null) {
              e.blockedOn = f, Rp(e.priority, function() {
                ym(i);
              });
              return;
            }
          } else if (s === D) {
            var h = i.stateNode;
            if (Dn(h)) {
              e.blockedOn = Yc(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Em(e) {
      for (var t = Hu(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, s = 0; s < Hi.length && Tp(t, Hi[s].priority); s++)
        ;
      Hi.splice(s, 0, i), s === 0 && Dp(i);
    }
    function bf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], s = wl(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (s === null) {
          var f = e.nativeEvent, h = new f.constructor(f.type, f);
          Su(h), f.target.dispatchEvent(h), g0();
        } else {
          var y = Us(s);
          return y !== null && Fu(y), e.blockedOn = s, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Iu(e, t, i) {
      bf(e) && i.delete(t);
    }
    function Op() {
      wf = !1, pi !== null && bf(pi) && (pi = null), Jt !== null && bf(Jt) && (Jt = null), Hn !== null && bf(Hn) && (Hn = null), Da.forEach(Iu), Es.forEach(Iu);
    }
    function dr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, wf || (wf = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Op)));
    }
    function pt(e) {
      if (bs.length > 0) {
        dr(bs[0], e);
        for (var t = 1; t < bs.length; t++) {
          var i = bs[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      pi !== null && dr(pi, e), Jt !== null && dr(Jt, e), Hn !== null && dr(Hn, e);
      var s = function(x) {
        return dr(x, e);
      };
      Da.forEach(s), Es.forEach(s);
      for (var f = 0; f < Hi.length; f++) {
        var h = Hi[f];
        h.blockedOn === e && (h.blockedOn = null);
      }
      for (; Hi.length > 0; ) {
        var y = Hi[0];
        if (y.blockedOn !== null)
          break;
        Dp(y), y.blockedOn === null && Hi.shift();
      }
    }
    var rn = l.ReactCurrentBatchConfig, un = !0;
    function In(e) {
      un = !!e;
    }
    function sa() {
      return un;
    }
    function _s(e, t, i) {
      var s = Sr(t), f;
      switch (s) {
        case cr:
          f = On;
          break;
        case Qn:
          f = Yu;
          break;
        case Pi:
        default:
          f = Ii;
          break;
      }
      return f.bind(null, t, i, e);
    }
    function On(e, t, i, s) {
      var f = Ra(), h = rn.transition;
      rn.transition = null;
      try {
        Rn(cr), Ii(e, t, i, s);
      } finally {
        Rn(f), rn.transition = h;
      }
    }
    function Yu(e, t, i, s) {
      var f = Ra(), h = rn.transition;
      rn.transition = null;
      try {
        Rn(Qn), Ii(e, t, i, s);
      } finally {
        Rn(f), rn.transition = h;
      }
    }
    function Ii(e, t, i, s) {
      un && Ef(e, t, i, s);
    }
    function Ef(e, t, i, s) {
      var f = wl(e, t, i, s);
      if (f === null) {
        G0(e, t, s, Ts, i), wm(e, s);
        return;
      }
      if (bm(f, e, t, i, s)) {
        s.stopPropagation();
        return;
      }
      if (wm(e, s), t & rl && xm(e)) {
        for (; f !== null; ) {
          var h = Us(f);
          h !== null && ws(h);
          var y = wl(e, t, i, s);
          if (y === null && G0(e, t, s, Ts, i), y === f)
            break;
          f = y;
        }
        f !== null && s.stopPropagation();
        return;
      }
      G0(e, t, s, null, i);
    }
    var Ts = null;
    function wl(e, t, i, s) {
      Ts = null;
      var f = zc(s), h = qu(f);
      if (h !== null) {
        var y = aa(h);
        if (y === null)
          h = null;
        else {
          var x = y.tag;
          if (x === re) {
            var b = ap(y);
            if (b !== null)
              return b;
            h = null;
          } else if (x === D) {
            var T = y.stateNode;
            if (Dn(T))
              return Yc(y);
            h = null;
          } else
            y !== h && (h = null);
        }
      }
      return Ts = h, null;
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
          var t = lp();
          switch (t) {
            case Wc:
              return cr;
            case oa:
              return Qn;
            case fi:
            case Gc:
              return Pi;
            case xo:
              return Uu;
            default:
              return Pi;
          }
        }
        default:
          return Pi;
      }
    }
    function Mp(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ks(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function Yi(e, t, i, s) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: s
      }), i;
    }
    function Cf(e, t, i, s) {
      return e.addEventListener(t, i, {
        passive: s
      }), i;
    }
    var bl = null, vi = null, Do = null;
    function Oo(e) {
      return bl = e, vi = Tf(), !0;
    }
    function _f() {
      bl = null, vi = null, Do = null;
    }
    function Rs() {
      if (Do)
        return Do;
      var e, t = vi, i = t.length, s, f = Tf(), h = f.length;
      for (e = 0; e < i && t[e] === f[e]; e++)
        ;
      var y = i - e;
      for (s = 1; s <= y && t[i - s] === f[h - s]; s++)
        ;
      var x = s > 1 ? 1 - s : void 0;
      return Do = f.slice(e, x), Do;
    }
    function Tf() {
      return "value" in bl ? bl.value : bl.textContent;
    }
    function El(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cl() {
      return !0;
    }
    function pr() {
      return !1;
    }
    function xn(e) {
      function t(i, s, f, h, y) {
        this._reactName = i, this._targetInst = f, this.type = s, this.nativeEvent = h, this.target = y, this.currentTarget = null;
        for (var x in e)
          if (e.hasOwnProperty(x)) {
            var b = e[x];
            b ? this[x] = b(h) : this[x] = h[x];
          }
        var T = h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1;
        return T ? this.isDefaultPrevented = Cl : this.isDefaultPrevented = pr, this.isPropagationStopped = pr, this;
      }
      return dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Cl);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Cl);
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
        isPersistent: Cl
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
    }, vr = xn(hr), Ds = dt({}, hr, {
      view: 0,
      detail: 0
    }), Lp = xn(Ds), $u, Np, Oa;
    function Cm(e) {
      e !== Oa && (Oa && e.type === "mousemove" ? ($u = e.screenX - Oa.screenX, Np = e.screenY - Oa.screenY) : ($u = 0, Np = 0), Oa = e);
    }
    var Os = dt({}, Ds, {
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
      getModifierState: Df,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Cm(e), $u);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Np;
      }
    }), Mo = xn(Os), jp = dt({}, Os, {
      dataTransfer: 0
    }), _l = xn(jp), _m = dt({}, Ds, {
      relatedTarget: 0
    }), kf = xn(_m), Up = dt({}, hr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rf = xn(Up), R0 = dt({}, hr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), D0 = xn(R0), Tm = dt({}, hr, {
      data: 0
    }), Ap = xn(Tm), Tl = Ap, O0 = {
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
    }, Ms = {
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
    function km(e) {
      if (e.key) {
        var t = O0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = El(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ms[e.keyCode] || "Unidentified" : "";
    }
    var cn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function M0(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var s = cn[e];
      return s ? !!i[s] : !1;
    }
    function Df(e) {
      return M0;
    }
    var L0 = dt({}, Ds, {
      key: km,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Df,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? El(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? El(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), N0 = xn(L0), Rm = dt({}, Os, {
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
    }), zp = xn(Rm), j0 = dt({}, Ds, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Df
    }), Ma = xn(j0), Fp = dt({}, hr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), U0 = xn(Fp), Lo = dt({}, Os, {
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
    }), Of = xn(Lo), kl = [9, 13, 27, 32], Vu = 229, Bu = Nn && "CompositionEvent" in window, Rl = null;
    Nn && "documentMode" in document && (Rl = document.documentMode);
    var A0 = Nn && "TextEvent" in window && !Rl, Mf = Nn && (!Bu || Rl && Rl > 8 && Rl <= 11), Dm = 32, Pp = String.fromCharCode(Dm);
    function Om() {
      Lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Lr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Lr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Lr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Wu = !1;
    function Lf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Mm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Hp(e, t) {
      return e === "keydown" && t.keyCode === Vu;
    }
    function Lm(e, t) {
      switch (e) {
        case "keyup":
          return kl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vu;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ip(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Nf(e) {
      return e.locale === "ko";
    }
    var $i = !1;
    function Yp(e, t, i, s, f) {
      var h, y;
      if (Bu ? h = Mm(t) : $i ? Lm(t, s) && (h = "onCompositionEnd") : Hp(t, s) && (h = "onCompositionStart"), !h)
        return null;
      Mf && !Nf(s) && (!$i && h === "onCompositionStart" ? $i = Oo(f) : h === "onCompositionEnd" && $i && (y = Rs()));
      var x = zm(i, h);
      if (x.length > 0) {
        var b = new Ap(h, t, null, s, f);
        if (e.push({
          event: b,
          listeners: x
        }), y)
          b.data = y;
        else {
          var T = Ip(s);
          T !== null && (b.data = T);
        }
      }
    }
    function jf(e, t) {
      switch (e) {
        case "compositionend":
          return Ip(t);
        case "keypress":
          var i = t.which;
          return i !== Dm ? null : (Wu = !0, Pp);
        case "textInput":
          var s = t.data;
          return s === Pp && Wu ? null : s;
        default:
          return null;
      }
    }
    function Nm(e, t) {
      if ($i) {
        if (e === "compositionend" || !Bu && Lm(e, t)) {
          var i = Rs();
          return _f(), $i = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Lf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Mf && !Nf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function z0(e, t, i, s, f) {
      var h;
      if (A0 ? h = jf(t, s) : h = Nm(t, s), !h)
        return null;
      var y = zm(i, "onBeforeInput");
      if (y.length > 0) {
        var x = new Tl("onBeforeInput", "beforeinput", null, s, f);
        e.push({
          event: x,
          listeners: y
        }), x.data = h;
      }
    }
    function Uf(e, t, i, s, f, h, y) {
      Yp(e, t, i, s, f), z0(e, t, i, s, f);
    }
    var F0 = {
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
    function Ls(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!F0[e.type] : t === "textarea";
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
    function P0(e) {
      if (!Nn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var s = document.createElement("div");
        s.setAttribute(t, "return;"), i = typeof s[t] == "function";
      }
      return i;
    }
    function Af() {
      Lr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, i, s) {
      Fc(s);
      var f = zm(t, "onChange");
      if (f.length > 0) {
        var h = new vr("onChange", "change", null, i, s);
        e.push({
          event: h,
          listeners: f
        });
      }
    }
    var a = null, u = null;
    function p(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function g(e) {
      var t = [];
      n(t, u, e, zc(e)), Kd(S, t);
    }
    function S(e) {
      db(e, 0);
    }
    function C(e) {
      var t = Yf(e);
      if (Sv(t))
        return e;
    }
    function M(e, t) {
      if (e === "change")
        return t;
    }
    var j = !1;
    Nn && (j = P0("input") && (!document.documentMode || document.documentMode > 9));
    function Q(e, t) {
      a = e, u = t, a.attachEvent("onpropertychange", oe);
    }
    function ae() {
      a && (a.detachEvent("onpropertychange", oe), a = null, u = null);
    }
    function oe(e) {
      e.propertyName === "value" && C(u) && g(e);
    }
    function ne(e, t, i) {
      e === "focusin" ? (ae(), Q(t, i)) : e === "focusout" && ae();
    }
    function Ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(u);
    }
    function Oe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function je(e, t) {
      if (e === "click")
        return C(t);
    }
    function hn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || fo(e, "number", e.value);
    }
    function A(e, t, i, s, f, h, y) {
      var x = i ? Yf(i) : window, b, T;
      if (p(x) ? b = M : Ls(x) ? j ? b = hn : (b = Ce, T = ne) : Oe(x) && (b = je), b) {
        var R = b(t, i);
        if (R) {
          n(e, R, s, f);
          return;
        }
      }
      T && T(t, x, i), t === "focusout" && H(x);
    }
    function $() {
      va("onMouseEnter", ["mouseout", "mouseover"]), va("onMouseLeave", ["mouseout", "mouseover"]), va("onPointerEnter", ["pointerout", "pointerover"]), va("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function fe(e, t, i, s, f, h, y) {
      var x = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (x && !Kv(s)) {
        var T = s.relatedTarget || s.fromElement;
        if (T && (qu(T) || nh(T)))
          return;
      }
      if (!(!b && !x)) {
        var R;
        if (f.window === f)
          R = f;
        else {
          var z = f.ownerDocument;
          z ? R = z.defaultView || z.parentWindow : R = window;
        }
        var U, V;
        if (b) {
          var B = s.relatedTarget || s.toElement;
          if (U = i, V = B ? qu(B) : null, V !== null) {
            var K = aa(V);
            (V !== K || V.tag !== F && V.tag !== N) && (V = null);
          }
        } else
          U = null, V = i;
        if (U !== V) {
          var Te = Mo, Ye = "onMouseLeave", Ae = "onMouseEnter", yt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Te = zp, Ye = "onPointerLeave", Ae = "onPointerEnter", yt = "pointer");
          var ht = U == null ? R : Yf(U), I = V == null ? R : Yf(V), Z = new Te(Ye, yt + "leave", U, s, f);
          Z.target = ht, Z.relatedTarget = I;
          var Y = null, le = qu(f);
          if (le === i) {
            var ke = new Te(Ae, yt + "enter", V, s, f);
            ke.target = I, ke.relatedTarget = ht, Y = ke;
          }
          jR(e, Z, Y, U, V);
        }
      }
    }
    function Ue(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Me = typeof Object.is == "function" ? Object.is : Ue;
    function ze(e, t) {
      if (Me(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), s = Object.keys(t);
      if (i.length !== s.length)
        return !1;
      for (var f = 0; f < i.length; f++) {
        var h = i[f];
        if (!ir.call(t, h) || !Me(e[h], t[h]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
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
    function xt(e, t) {
      for (var i = Je(e), s = 0, f = 0; i; ) {
        if (i.nodeType === Oi) {
          if (f = s + i.textContent.length, s <= t && f >= t)
            return {
              node: i,
              offset: t - s
            };
          s = f;
        }
        i = Je(Yn(i));
      }
    }
    function No(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, s = i.getSelection && i.getSelection();
      if (!s || s.rangeCount === 0)
        return null;
      var f = s.anchorNode, h = s.anchorOffset, y = s.focusNode, x = s.focusOffset;
      try {
        f.nodeType, y.nodeType;
      } catch {
        return null;
      }
      return H0(e, f, h, y, x);
    }
    function H0(e, t, i, s, f) {
      var h = 0, y = -1, x = -1, b = 0, T = 0, R = e, z = null;
      e:
        for (; ; ) {
          for (var U = null; R === t && (i === 0 || R.nodeType === Oi) && (y = h + i), R === s && (f === 0 || R.nodeType === Oi) && (x = h + f), R.nodeType === Oi && (h += R.nodeValue.length), (U = R.firstChild) !== null; )
            z = R, R = U;
          for (; ; ) {
            if (R === e)
              break e;
            if (z === t && ++b === i && (y = h), z === s && ++T === f && (x = h), (U = R.nextSibling) !== null)
              break;
            R = z, z = R.parentNode;
          }
          R = U;
        }
      return y === -1 || x === -1 ? null : {
        start: y,
        end: x
      };
    }
    function vR(e, t) {
      var i = e.ownerDocument || document, s = i && i.defaultView || window;
      if (s.getSelection) {
        var f = s.getSelection(), h = e.textContent.length, y = Math.min(t.start, h), x = t.end === void 0 ? y : Math.min(t.end, h);
        if (!f.extend && y > x) {
          var b = x;
          x = y, y = b;
        }
        var T = xt(e, y), R = xt(e, x);
        if (T && R) {
          if (f.rangeCount === 1 && f.anchorNode === T.node && f.anchorOffset === T.offset && f.focusNode === R.node && f.focusOffset === R.offset)
            return;
          var z = i.createRange();
          z.setStart(T.node, T.offset), f.removeAllRanges(), y > x ? (f.addRange(z), f.extend(R.node, R.offset)) : (z.setEnd(R.node, R.offset), f.addRange(z));
        }
      }
    }
    function eb(e) {
      return e && e.nodeType === Oi;
    }
    function tb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : eb(e) ? !1 : eb(t) ? tb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function mR(e) {
      return e && e.ownerDocument && tb(e.ownerDocument.documentElement, e);
    }
    function gR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function nb() {
      for (var e = window, t = Cc(); t instanceof e.HTMLIFrameElement; ) {
        if (gR(t))
          e = t.contentWindow;
        else
          return t;
        t = Cc(e.document);
      }
      return t;
    }
    function I0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function yR() {
      var e = nb();
      return {
        focusedElem: e,
        selectionRange: I0(e) ? xR(e) : null
      };
    }
    function SR(e) {
      var t = nb(), i = e.focusedElem, s = e.selectionRange;
      if (t !== i && mR(i)) {
        s !== null && I0(i) && wR(i, s);
        for (var f = [], h = i; h = h.parentNode; )
          h.nodeType === jr && f.push({
            element: h,
            left: h.scrollLeft,
            top: h.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var y = 0; y < f.length; y++) {
          var x = f[y];
          x.element.scrollLeft = x.left, x.element.scrollTop = x.top;
        }
      }
    }
    function xR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = No(e), t || {
        start: 0,
        end: 0
      };
    }
    function wR(e, t) {
      var i = t.start, s = t.end;
      s === void 0 && (s = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(s, e.value.length)) : vR(e, t);
    }
    var bR = Nn && "documentMode" in document && document.documentMode <= 11;
    function ER() {
      Lr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, Y0 = null, $p = null, $0 = !1;
    function CR(e) {
      if ("selectionStart" in e && I0(e))
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
    function _R(e) {
      return e.window === e ? e.document : e.nodeType === Qa ? e : e.ownerDocument;
    }
    function rb(e, t, i) {
      var s = _R(i);
      if (!($0 || zf == null || zf !== Cc(s))) {
        var f = CR(zf);
        if (!$p || !ze($p, f)) {
          $p = f;
          var h = zm(Y0, "onSelect");
          if (h.length > 0) {
            var y = new vr("onSelect", "select", null, t, i);
            e.push({
              event: y,
              listeners: h
            }), y.target = zf;
          }
        }
      }
    }
    function TR(e, t, i, s, f, h, y) {
      var x = i ? Yf(i) : window;
      switch (t) {
        case "focusin":
          (Ls(x) || x.contentEditable === "true") && (zf = x, Y0 = i, $p = null);
          break;
        case "focusout":
          zf = null, Y0 = null, $p = null;
          break;
        case "mousedown":
          $0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $0 = !1, rb(e, s, f);
          break;
        case "selectionchange":
          if (bR)
            break;
        case "keydown":
        case "keyup":
          rb(e, s, f);
      }
    }
    function jm(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var Ff = {
      animationend: jm("Animation", "AnimationEnd"),
      animationiteration: jm("Animation", "AnimationIteration"),
      animationstart: jm("Animation", "AnimationStart"),
      transitionend: jm("Transition", "TransitionEnd")
    }, V0 = {}, ab = {};
    Nn && (ab = document.createElement("div").style, "AnimationEvent" in window || (delete Ff.animationend.animation, delete Ff.animationiteration.animation, delete Ff.animationstart.animation), "TransitionEvent" in window || delete Ff.transitionend.transition);
    function Um(e) {
      if (V0[e])
        return V0[e];
      if (!Ff[e])
        return e;
      var t = Ff[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in ab)
          return V0[e] = t[i];
      return e;
    }
    var ib = Um("animationend"), ob = Um("animationiteration"), lb = Um("animationstart"), sb = Um("transitionend"), ub = /* @__PURE__ */ new Map(), cb = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ns(e, t) {
      ub.set(e, t), Lr(t, [e]);
    }
    function kR() {
      for (var e = 0; e < cb.length; e++) {
        var t = cb[e], i = t.toLowerCase(), s = t[0].toUpperCase() + t.slice(1);
        Ns(i, "on" + s);
      }
      Ns(ib, "onAnimationEnd"), Ns(ob, "onAnimationIteration"), Ns(lb, "onAnimationStart"), Ns("dblclick", "onDoubleClick"), Ns("focusin", "onFocus"), Ns("focusout", "onBlur"), Ns(sb, "onTransitionEnd");
    }
    function RR(e, t, i, s, f, h, y) {
      var x = ub.get(t);
      if (x !== void 0) {
        var b = vr, T = t;
        switch (t) {
          case "keypress":
            if (El(s) === 0)
              return;
          case "keydown":
          case "keyup":
            b = N0;
            break;
          case "focusin":
            T = "focus", b = kf;
            break;
          case "focusout":
            T = "blur", b = kf;
            break;
          case "beforeblur":
          case "afterblur":
            b = kf;
            break;
          case "click":
            if (s.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = _l;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Ma;
            break;
          case ib:
          case ob:
          case lb:
            b = Rf;
            break;
          case sb:
            b = U0;
            break;
          case "scroll":
            b = Lp;
            break;
          case "wheel":
            b = Of;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = D0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = zp;
            break;
        }
        var R = (h & rl) !== 0;
        {
          var z = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = LR(i, x, s.type, R, z);
          if (U.length > 0) {
            var V = new b(x, T, null, s, f);
            e.push({
              event: V,
              listeners: U
            });
          }
        }
      }
    }
    kR(), $(), Af(), ER(), Om();
    function DR(e, t, i, s, f, h, y) {
      RR(e, t, i, s, f, h);
      var x = (h & m0) === 0;
      x && (fe(e, t, i, s, f), A(e, t, i, s, f), TR(e, t, i, s, f), Uf(e, t, i, s, f));
    }
    var Vp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], B0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Vp));
    function fb(e, t, i) {
      var s = e.type || "unknown-event";
      e.currentTarget = i, ji(s, t, void 0, e), e.currentTarget = null;
    }
    function OR(e, t, i) {
      var s;
      if (i)
        for (var f = t.length - 1; f >= 0; f--) {
          var h = t[f], y = h.instance, x = h.currentTarget, b = h.listener;
          if (y !== s && e.isPropagationStopped())
            return;
          fb(e, b, x), s = y;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var R = t[T], z = R.instance, U = R.currentTarget, V = R.listener;
          if (z !== s && e.isPropagationStopped())
            return;
          fb(e, V, U), s = z;
        }
    }
    function db(e, t) {
      for (var i = (t & rl) !== 0, s = 0; s < e.length; s++) {
        var f = e[s], h = f.event, y = f.listeners;
        OR(h, y, i);
      }
      ep();
    }
    function MR(e, t, i, s, f) {
      var h = zc(i), y = [];
      DR(y, e, s, i, h, t), db(y, t);
    }
    function an(e, t) {
      B0.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, s = lO(t), f = UR(e, i);
      s.has(f) || (pb(t, e, gu, i), s.add(f));
    }
    function W0(e, t, i) {
      B0.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var s = 0;
      t && (s |= rl), pb(i, e, s, t);
    }
    var Am = "_reactListening" + Math.random().toString(36).slice(2);
    function Bp(e) {
      if (!e[Am]) {
        e[Am] = !0, ar.forEach(function(i) {
          i !== "selectionchange" && (B0.has(i) || W0(i, !1, e), W0(i, !0, e));
        });
        var t = e.nodeType === Qa ? e : e.ownerDocument;
        t !== null && (t[Am] || (t[Am] = !0, W0("selectionchange", !1, t)));
      }
    }
    function pb(e, t, i, s, f) {
      var h = _s(e, t, i), y = void 0;
      bu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, s ? y !== void 0 ? Yi(e, t, h, y) : ks(e, t, h) : y !== void 0 ? Cf(e, t, h, y) : Mp(e, t, h);
    }
    function hb(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function G0(e, t, i, s, f) {
      var h = s;
      if (!(t & Li) && !(t & gu)) {
        var y = f;
        if (s !== null) {
          var x = s;
          e:
            for (; ; ) {
              if (x === null)
                return;
              var b = x.tag;
              if (b === D || b === O) {
                var T = x.stateNode.containerInfo;
                if (hb(T, y))
                  break;
                if (b === O)
                  for (var R = x.return; R !== null; ) {
                    var z = R.tag;
                    if (z === D || z === O) {
                      var U = R.stateNode.containerInfo;
                      if (hb(U, y))
                        return;
                    }
                    R = R.return;
                  }
                for (; T !== null; ) {
                  var V = qu(T);
                  if (V === null)
                    return;
                  var B = V.tag;
                  if (B === F || B === N) {
                    x = h = V;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              x = x.return;
            }
        }
      }
      Kd(function() {
        return MR(e, t, i, h);
      });
    }
    function Wp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function LR(e, t, i, s, f, h) {
      for (var y = t !== null ? t + "Capture" : null, x = s ? y : t, b = [], T = e, R = null; T !== null; ) {
        var z = T, U = z.stateNode, V = z.tag;
        if (V === F && U !== null && (R = U, x !== null)) {
          var B = il(T, x);
          B != null && b.push(Wp(T, B, R));
        }
        if (f)
          break;
        T = T.return;
      }
      return b;
    }
    function zm(e, t) {
      for (var i = t + "Capture", s = [], f = e; f !== null; ) {
        var h = f, y = h.stateNode, x = h.tag;
        if (x === F && y !== null) {
          var b = y, T = il(f, i);
          T != null && s.unshift(Wp(f, T, b));
          var R = il(f, t);
          R != null && s.push(Wp(f, R, b));
        }
        f = f.return;
      }
      return s;
    }
    function Pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function NR(e, t) {
      for (var i = e, s = t, f = 0, h = i; h; h = Pf(h))
        f++;
      for (var y = 0, x = s; x; x = Pf(x))
        y++;
      for (; f - y > 0; )
        i = Pf(i), f--;
      for (; y - f > 0; )
        s = Pf(s), y--;
      for (var b = f; b--; ) {
        if (i === s || s !== null && i === s.alternate)
          return i;
        i = Pf(i), s = Pf(s);
      }
      return null;
    }
    function vb(e, t, i, s, f) {
      for (var h = t._reactName, y = [], x = i; x !== null && x !== s; ) {
        var b = x, T = b.alternate, R = b.stateNode, z = b.tag;
        if (T !== null && T === s)
          break;
        if (z === F && R !== null) {
          var U = R;
          if (f) {
            var V = il(x, h);
            V != null && y.unshift(Wp(x, V, U));
          } else if (!f) {
            var B = il(x, h);
            B != null && y.push(Wp(x, B, U));
          }
        }
        x = x.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function jR(e, t, i, s, f) {
      var h = s && f ? NR(s, f) : null;
      s !== null && vb(e, t, s, h, !1), f !== null && i !== null && vb(e, i, f, h, !0);
    }
    function UR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var La = !1, Gp = "dangerouslySetInnerHTML", Fm = "suppressContentEditableWarning", js = "suppressHydrationWarning", mb = "autoFocus", Gu = "children", Qu = "style", Pm = "__html", Q0, Hm, Qp, gb, Im, yb, Sb;
    Q0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Hm = function(e, t) {
      Ac(e, t), Bd(e, t), qv(e, t, {
        registrationNameDependencies: Mr,
        possibleRegistrationNames: ii
      });
    }, yb = Nn && !document.documentMode, Qp = function(e, t, i) {
      if (!La) {
        var s = Ym(i), f = Ym(t);
        f !== s && (La = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(f), JSON.stringify(s)));
      }
    }, gb = function(e) {
      if (!La) {
        La = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Im = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Sb = function(e, t) {
      var i = e.namespaceURI === Di ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var AR = /\r\n?/g, zR = /\u0000|\uFFFD/g;
    function Ym(e) {
      Ia(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(AR, `
`).replace(zR, "");
    }
    function $m(e, t, i, s) {
      var f = Ym(t), h = Ym(e);
      if (h !== f && (s && (La || (La = !0, v('Text content did not match. Server: "%s" Client: "%s"', h, f))), i && Vt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function xb(e) {
      return e.nodeType === Qa ? e : e.ownerDocument;
    }
    function FR() {
    }
    function Vm(e) {
      e.onclick = FR;
    }
    function PR(e, t, i, s, f) {
      for (var h in s)
        if (s.hasOwnProperty(h)) {
          var y = s[h];
          if (h === Qu)
            y && Object.freeze(y), Pv(t, y);
          else if (h === Gp) {
            var x = y ? y[Pm] : void 0;
            x != null && Rv(t, x);
          } else if (h === Gu)
            if (typeof y == "string") {
              var b = e !== "textarea" || y !== "";
              b && Lc(t, y);
            } else
              typeof y == "number" && Lc(t, "" + y);
          else
            h === Fm || h === js || h === mb || (Mr.hasOwnProperty(h) ? y != null && (typeof y != "function" && Im(h, y), h === "onScroll" && an("scroll", t)) : y != null && si(t, h, y, f));
        }
    }
    function HR(e, t, i, s) {
      for (var f = 0; f < t.length; f += 2) {
        var h = t[f], y = t[f + 1];
        h === Qu ? Pv(e, y) : h === Gp ? Rv(e, y) : h === Gu ? Lc(e, y) : si(e, h, y, s);
      }
    }
    function IR(e, t, i, s) {
      var f, h = xb(i), y, x = s;
      if (x === Di && (x = Oc(e)), x === Di) {
        if (f = Mi(e, t), !f && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = h.createElement("div");
          b.innerHTML = "<script><\/script>";
          var T = b.firstChild;
          y = b.removeChild(T);
        } else if (typeof t.is == "string")
          y = h.createElement(e, {
            is: t.is
          });
        else if (y = h.createElement(e), e === "select") {
          var R = y;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        y = h.createElementNS(x, e);
      return x === Di && !f && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !ir.call(Q0, e) && (Q0[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function YR(e, t) {
      return xb(t).createTextNode(e);
    }
    function $R(e, t, i, s) {
      var f = Mi(t, i);
      Hm(t, i);
      var h;
      switch (t) {
        case "dialog":
          an("cancel", e), an("close", e), h = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          an("load", e), h = i;
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Vp.length; y++)
            an(Vp[y], e);
          h = i;
          break;
        case "source":
          an("error", e), h = i;
          break;
        case "img":
        case "image":
        case "link":
          an("error", e), an("load", e), h = i;
          break;
        case "details":
          an("toggle", e), h = i;
          break;
        case "input":
          fu(e, i), h = cu(e, i), an("invalid", e);
          break;
        case "option":
          Rc(e, i), h = i;
          break;
        case "select":
          Cv(e, i), h = jd(e, i), an("invalid", e);
          break;
        case "textarea":
          _v(e, i), h = Ad(e, i), an("invalid", e);
          break;
        default:
          h = i;
      }
      switch (jc(t, h), PR(t, e, s, h, f), t) {
        case "input":
          el(e), du(e, i, !1);
          break;
        case "textarea":
          el(e), kv(e);
          break;
        case "option":
          Nd(e, i);
          break;
        case "select":
          i0(e, i);
          break;
        default:
          typeof h.onClick == "function" && Vm(e);
          break;
      }
    }
    function VR(e, t, i, s, f) {
      Hm(t, s);
      var h = null, y, x;
      switch (t) {
        case "input":
          y = cu(e, i), x = cu(e, s), h = [];
          break;
        case "select":
          y = jd(e, i), x = jd(e, s), h = [];
          break;
        case "textarea":
          y = Ad(e, i), x = Ad(e, s), h = [];
          break;
        default:
          y = i, x = s, typeof y.onClick != "function" && typeof x.onClick == "function" && Vm(e);
          break;
      }
      jc(t, x);
      var b, T, R = null;
      for (b in y)
        if (!(x.hasOwnProperty(b) || !y.hasOwnProperty(b) || y[b] == null))
          if (b === Qu) {
            var z = y[b];
            for (T in z)
              z.hasOwnProperty(T) && (R || (R = {}), R[T] = "");
          } else
            b === Gp || b === Gu || b === Fm || b === js || b === mb || (Mr.hasOwnProperty(b) ? h || (h = []) : (h = h || []).push(b, null));
      for (b in x) {
        var U = x[b], V = y != null ? y[b] : void 0;
        if (!(!x.hasOwnProperty(b) || U === V || U == null && V == null))
          if (b === Qu)
            if (U && Object.freeze(U), V) {
              for (T in V)
                V.hasOwnProperty(T) && (!U || !U.hasOwnProperty(T)) && (R || (R = {}), R[T] = "");
              for (T in U)
                U.hasOwnProperty(T) && V[T] !== U[T] && (R || (R = {}), R[T] = U[T]);
            } else
              R || (h || (h = []), h.push(b, R)), R = U;
          else if (b === Gp) {
            var B = U ? U[Pm] : void 0, K = V ? V[Pm] : void 0;
            B != null && K !== B && (h = h || []).push(b, B);
          } else
            b === Gu ? (typeof U == "string" || typeof U == "number") && (h = h || []).push(b, "" + U) : b === Fm || b === js || (Mr.hasOwnProperty(b) ? (U != null && (typeof U != "function" && Im(b, U), b === "onScroll" && an("scroll", e)), !h && V !== U && (h = [])) : (h = h || []).push(b, U));
      }
      return R && (vu(R, x[Qu]), (h = h || []).push(Qu, R)), h;
    }
    function BR(e, t, i, s, f) {
      i === "input" && f.type === "radio" && f.name != null && Ld(e, f);
      var h = Mi(i, s), y = Mi(i, f);
      switch (HR(e, t, h, y), i) {
        case "input":
          ns(e, f);
          break;
        case "textarea":
          Tv(e, f);
          break;
        case "select":
          o0(e, f);
          break;
      }
    }
    function WR(e) {
      {
        var t = e.toLowerCase();
        return Uc.hasOwnProperty(t) && Uc[t] || null;
      }
    }
    function GR(e, t, i, s, f, h, y) {
      var x, b;
      switch (x = Mi(t, i), Hm(t, i), t) {
        case "dialog":
          an("cancel", e), an("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          an("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < Vp.length; T++)
            an(Vp[T], e);
          break;
        case "source":
          an("error", e);
          break;
        case "img":
        case "image":
        case "link":
          an("error", e), an("load", e);
          break;
        case "details":
          an("toggle", e);
          break;
        case "input":
          fu(e, i), an("invalid", e);
          break;
        case "option":
          Rc(e, i);
          break;
        case "select":
          Cv(e, i), an("invalid", e);
          break;
        case "textarea":
          _v(e, i), an("invalid", e);
          break;
      }
      jc(t, i);
      {
        b = /* @__PURE__ */ new Set();
        for (var R = e.attributes, z = 0; z < R.length; z++) {
          var U = R[z].name.toLowerCase();
          switch (U) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(R[z].name);
          }
        }
      }
      var V = null;
      for (var B in i)
        if (i.hasOwnProperty(B)) {
          var K = i[B];
          if (B === Gu)
            typeof K == "string" ? e.textContent !== K && (i[js] !== !0 && $m(e.textContent, K, h, y), V = [Gu, K]) : typeof K == "number" && e.textContent !== "" + K && (i[js] !== !0 && $m(e.textContent, K, h, y), V = [Gu, "" + K]);
          else if (Mr.hasOwnProperty(B))
            K != null && (typeof K != "function" && Im(B, K), B === "onScroll" && an("scroll", e));
          else if (y && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof x == "boolean") {
            var Te = void 0, Ye = x && Vn ? null : ea(B);
            if (i[js] !== !0) {
              if (!(B === Fm || B === js || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              B === "value" || B === "checked" || B === "selected")) {
                if (B === Gp) {
                  var Ae = e.innerHTML, yt = K ? K[Pm] : void 0;
                  if (yt != null) {
                    var ht = Sb(e, yt);
                    ht !== Ae && Qp(B, Ae, ht);
                  }
                } else if (B === Qu) {
                  if (b.delete(B), yb) {
                    var I = h0(K);
                    Te = e.getAttribute("style"), I !== Te && Qp(B, Te, I);
                  }
                } else if (x && !Vn)
                  b.delete(B.toLowerCase()), Te = Xl(e, B, K), K !== Te && Qp(B, Te, K);
                else if (!dn(B, Ye, x) && !It(B, K, Ye, x)) {
                  var Z = !1;
                  if (Ye !== null)
                    b.delete(Ye.attributeName), Te = Zo(e, B, K, Ye);
                  else {
                    var Y = s;
                    if (Y === Di && (Y = Oc(t)), Y === Di)
                      b.delete(B.toLowerCase());
                    else {
                      var le = WR(B);
                      le !== null && le !== B && (Z = !0, b.delete(le)), b.delete(B);
                    }
                    Te = Xl(e, B, K);
                  }
                  var ke = Vn;
                  !ke && K !== Te && !Z && Qp(B, Te, K);
                }
              }
            }
          }
        }
      switch (y && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && i[js] !== !0 && gb(b), t) {
        case "input":
          el(e), du(e, i, !0);
          break;
        case "textarea":
          el(e), kv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Vm(e);
          break;
      }
      return V;
    }
    function QR(e, t, i) {
      var s = e.nodeValue !== t;
      return s;
    }
    function q0(e, t) {
      {
        if (La)
          return;
        La = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function K0(e, t) {
      {
        if (La)
          return;
        La = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Z0(e, t, i) {
      {
        if (La)
          return;
        La = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function X0(e, t) {
      {
        if (t === "" || La)
          return;
        La = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function qR(e, t, i) {
      switch (t) {
        case "input":
          xv(e, i);
          return;
        case "textarea":
          zd(e, i);
          return;
        case "select":
          l0(e, i);
          return;
      }
    }
    var qp = function() {
    }, Kp = function() {
    };
    {
      var KR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], wb = [
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
      ], ZR = wb.concat(["button"]), XR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], bb = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Kp = function(e, t) {
        var i = dt({}, e || bb), s = {
          tag: t
        };
        return wb.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), ZR.indexOf(t) !== -1 && (i.pTagInButtonScope = null), KR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = s, t === "form" && (i.formTag = s), t === "a" && (i.aTagInScope = s), t === "button" && (i.buttonTagInScope = s), t === "nobr" && (i.nobrTagInScope = s), t === "p" && (i.pTagInButtonScope = s), t === "li" && (i.listItemTagAutoclosing = s), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = s), i;
      };
      var JR = function(e, t) {
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
            return XR.indexOf(t) === -1;
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
      }, eD = function(e, t) {
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
      }, Eb = {};
      qp = function(e, t, i) {
        i = i || bb;
        var s = i.current, f = s && s.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var h = JR(e, f) ? null : s, y = h ? null : eD(e, i), x = h || y;
        if (x) {
          var b = x.tag, T = !!h + "|" + e + "|" + b;
          if (!Eb[T]) {
            Eb[T] = !0;
            var R = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", h) {
              var U = "";
              b === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, b, z, U);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, b);
          }
        }
      };
    }
    var Bm = "suppressHydrationWarning", Wm = "$", Gm = "/$", Zp = "$?", Xp = "$!", tD = "style", J0 = null, eS = null;
    function nD(e) {
      var t, i, s = e.nodeType;
      switch (s) {
        case Qa:
        case tl: {
          t = s === Qa ? "#document" : "#fragment";
          var f = e.documentElement;
          i = f ? f.namespaceURI : Pd(null, "");
          break;
        }
        default: {
          var h = s === yn ? e.parentNode : e, y = h.namespaceURI || null;
          t = h.tagName, i = Pd(y, t);
          break;
        }
      }
      {
        var x = t.toLowerCase(), b = Kp(null, x);
        return {
          namespace: i,
          ancestorInfo: b
        };
      }
    }
    function rD(e, t, i) {
      {
        var s = e, f = Pd(s.namespace, t), h = Kp(s.ancestorInfo, t);
        return {
          namespace: f,
          ancestorInfo: h
        };
      }
    }
    function TP(e) {
      return e;
    }
    function aD(e) {
      J0 = sa(), eS = yR();
      var t = null;
      return In(!1), t;
    }
    function iD(e) {
      SR(eS), In(J0), J0 = null, eS = null;
    }
    function oD(e, t, i, s, f) {
      var h;
      {
        var y = s;
        if (qp(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var x = "" + t.children, b = Kp(y.ancestorInfo, e);
          qp(null, x, b);
        }
        h = y.namespace;
      }
      var T = IR(e, t, i, h);
      return th(f, T), sS(T, t), T;
    }
    function lD(e, t) {
      e.appendChild(t);
    }
    function sD(e, t, i, s, f) {
      switch ($R(e, t, i, s), t) {
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
    function uD(e, t, i, s, f, h) {
      {
        var y = h;
        if (typeof s.children != typeof i.children && (typeof s.children == "string" || typeof s.children == "number")) {
          var x = "" + s.children, b = Kp(y.ancestorInfo, t);
          qp(null, x, b);
        }
      }
      return VR(e, t, i, s);
    }
    function tS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cD(e, t, i, s) {
      {
        var f = i;
        qp(null, e, f.ancestorInfo);
      }
      var h = YR(e, t);
      return th(s, h), h;
    }
    function fD() {
      var e = window.event;
      return e === void 0 ? Pi : Sr(e.type);
    }
    var nS = typeof setTimeout == "function" ? setTimeout : void 0, dD = typeof clearTimeout == "function" ? clearTimeout : void 0, rS = -1, Cb = typeof Promise == "function" ? Promise : void 0, pD = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cb < "u" ? function(e) {
      return Cb.resolve(null).then(e).catch(hD);
    } : nS;
    function hD(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vD(e, t, i, s) {
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
    function mD(e, t, i, s, f, h) {
      BR(e, t, i, s, f), sS(e, f);
    }
    function _b(e) {
      Lc(e, "");
    }
    function gD(e, t, i) {
      e.nodeValue = i;
    }
    function yD(e, t) {
      e.appendChild(t);
    }
    function SD(e, t) {
      var i;
      e.nodeType === yn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var s = e._reactRootContainer;
      s == null && i.onclick === null && Vm(i);
    }
    function xD(e, t, i) {
      e.insertBefore(t, i);
    }
    function wD(e, t, i) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function bD(e, t) {
      e.removeChild(t);
    }
    function ED(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function aS(e, t) {
      var i = t, s = 0;
      do {
        var f = i.nextSibling;
        if (e.removeChild(i), f && f.nodeType === yn) {
          var h = f.data;
          if (h === Gm)
            if (s === 0) {
              e.removeChild(f), pt(t);
              return;
            } else
              s--;
          else
            (h === Wm || h === Zp || h === Xp) && s++;
        }
        i = f;
      } while (i);
      pt(t);
    }
    function CD(e, t) {
      e.nodeType === yn ? aS(e.parentNode, t) : e.nodeType === jr && aS(e, t), pt(e);
    }
    function _D(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function TD(e) {
      e.nodeValue = "";
    }
    function kD(e, t) {
      e = e;
      var i = t[tD], s = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Nc("display", s);
    }
    function RD(e, t) {
      e.nodeValue = t;
    }
    function DD(e) {
      e.nodeType === jr ? e.textContent = "" : e.nodeType === Qa && e.documentElement && e.removeChild(e.documentElement);
    }
    function OD(e, t, i) {
      return e.nodeType !== jr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function MD(e, t) {
      return t === "" || e.nodeType !== Oi ? null : e;
    }
    function LD(e) {
      return e.nodeType !== yn ? null : e;
    }
    function Tb(e) {
      return e.data === Zp;
    }
    function iS(e) {
      return e.data === Xp;
    }
    function ND(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, s, f;
      return t && (i = t.dgst, s = t.msg, f = t.stck), {
        message: s,
        digest: i,
        stack: f
      };
    }
    function jD(e, t) {
      e._reactRetry = t;
    }
    function Qm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === jr || t === Oi)
          break;
        if (t === yn) {
          var i = e.data;
          if (i === Wm || i === Xp || i === Zp)
            break;
          if (i === Gm)
            return null;
        }
      }
      return e;
    }
    function Jp(e) {
      return Qm(e.nextSibling);
    }
    function UD(e) {
      return Qm(e.firstChild);
    }
    function AD(e) {
      return Qm(e.firstChild);
    }
    function zD(e) {
      return Qm(e.nextSibling);
    }
    function FD(e, t, i, s, f, h, y) {
      th(h, e), sS(e, i);
      var x;
      {
        var b = f;
        x = b.namespace;
      }
      var T = (h.mode & ct) !== Ve;
      return GR(e, t, i, x, s, T, y);
    }
    function PD(e, t, i, s) {
      return th(i, e), i.mode & ct, QR(e, t);
    }
    function HD(e, t) {
      th(t, e);
    }
    function ID(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === yn) {
          var s = t.data;
          if (s === Gm) {
            if (i === 0)
              return Jp(t);
            i--;
          } else
            (s === Wm || s === Xp || s === Zp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function kb(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === yn) {
          var s = t.data;
          if (s === Wm || s === Xp || s === Zp) {
            if (i === 0)
              return t;
            i--;
          } else
            s === Gm && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function YD(e) {
      pt(e);
    }
    function $D(e) {
      pt(e);
    }
    function VD(e) {
      return e !== "head" && e !== "body";
    }
    function BD(e, t, i, s) {
      var f = !0;
      $m(t.nodeValue, i, s, f);
    }
    function WD(e, t, i, s, f, h) {
      if (t[Bm] !== !0) {
        var y = !0;
        $m(s.nodeValue, f, h, y);
      }
    }
    function GD(e, t) {
      t.nodeType === jr ? q0(e, t) : t.nodeType === yn || K0(e, t);
    }
    function QD(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === jr ? q0(i, t) : t.nodeType === yn || K0(i, t));
      }
    }
    function qD(e, t, i, s, f) {
      (f || t[Bm] !== !0) && (s.nodeType === jr ? q0(i, s) : s.nodeType === yn || K0(i, s));
    }
    function KD(e, t, i) {
      Z0(e, t);
    }
    function ZD(e, t) {
      X0(e, t);
    }
    function XD(e, t, i) {
      {
        var s = e.parentNode;
        s !== null && Z0(s, t);
      }
    }
    function JD(e, t) {
      {
        var i = e.parentNode;
        i !== null && X0(i, t);
      }
    }
    function eO(e, t, i, s, f, h) {
      (h || t[Bm] !== !0) && Z0(i, s);
    }
    function tO(e, t, i, s, f) {
      (f || t[Bm] !== !0) && X0(i, s);
    }
    function nO(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function rO(e) {
      Bp(e);
    }
    var Hf = Math.random().toString(36).slice(2), If = "__reactFiber$" + Hf, oS = "__reactProps$" + Hf, eh = "__reactContainer$" + Hf, lS = "__reactEvents$" + Hf, aO = "__reactListeners$" + Hf, iO = "__reactHandles$" + Hf;
    function oO(e) {
      delete e[If], delete e[oS], delete e[lS], delete e[aO], delete e[iO];
    }
    function th(e, t) {
      t[If] = e;
    }
    function qm(e, t) {
      t[eh] = e;
    }
    function Rb(e) {
      e[eh] = null;
    }
    function nh(e) {
      return !!e[eh];
    }
    function qu(e) {
      var t = e[If];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[eh] || i[If], t) {
          var s = t.alternate;
          if (t.child !== null || s !== null && s.child !== null)
            for (var f = kb(e); f !== null; ) {
              var h = f[If];
              if (h)
                return h;
              f = kb(f);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Us(e) {
      var t = e[If] || e[eh];
      return t && (t.tag === F || t.tag === N || t.tag === re || t.tag === D) ? t : null;
    }
    function Yf(e) {
      if (e.tag === F || e.tag === N)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Km(e) {
      return e[oS] || null;
    }
    function sS(e, t) {
      e[oS] = t;
    }
    function lO(e) {
      var t = e[lS];
      return t === void 0 && (t = e[lS] = /* @__PURE__ */ new Set()), t;
    }
    var Db = {}, Ob = l.ReactDebugCurrentFrame;
    function Zm(e) {
      if (e) {
        var t = e._owner, i = au(e.type, e._source, t ? t.type : null);
        Ob.setExtraStackFrame(i);
      } else
        Ob.setExtraStackFrame(null);
    }
    function Vi(e, t, i, s, f) {
      {
        var h = Function.call.bind(ir);
        for (var y in e)
          if (h(e, y)) {
            var x = void 0;
            try {
              if (typeof e[y] != "function") {
                var b = Error((s || "React class") + ": " + i + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              x = e[y](t, y, s, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              x = T;
            }
            x && !(x instanceof Error) && (Zm(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, y, typeof x), Zm(null)), x instanceof Error && !(x.message in Db) && (Db[x.message] = !0, Zm(f), v("Failed %s type: %s", i, x.message), Zm(null));
          }
      }
    }
    var uS = [], Xm;
    Xm = [];
    var Dl = -1;
    function As(e) {
      return {
        current: e
      };
    }
    function $r(e, t) {
      if (Dl < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Xm[Dl] && v("Unexpected Fiber popped."), e.current = uS[Dl], uS[Dl] = null, Xm[Dl] = null, Dl--;
    }
    function Vr(e, t, i) {
      Dl++, uS[Dl] = e.current, Xm[Dl] = i, e.current = t;
    }
    var cS;
    cS = {};
    var Ja = {};
    Object.freeze(Ja);
    var Ol = As(Ja), jo = As(!1), fS = Ja;
    function $f(e, t, i) {
      return i && Uo(t) ? fS : Ol.current;
    }
    function Mb(e, t, i) {
      {
        var s = e.stateNode;
        s.__reactInternalMemoizedUnmaskedChildContext = t, s.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Vf(e, t) {
      {
        var i = e.type, s = i.contextTypes;
        if (!s)
          return Ja;
        var f = e.stateNode;
        if (f && f.__reactInternalMemoizedUnmaskedChildContext === t)
          return f.__reactInternalMemoizedMaskedChildContext;
        var h = {};
        for (var y in s)
          h[y] = t[y];
        {
          var x = nt(e) || "Unknown";
          Vi(s, h, "context", x);
        }
        return f && Mb(e, t, h), h;
      }
    }
    function Jm() {
      return jo.current;
    }
    function Uo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function eg(e) {
      $r(jo, e), $r(Ol, e);
    }
    function dS(e) {
      $r(jo, e), $r(Ol, e);
    }
    function Lb(e, t, i) {
      {
        if (Ol.current !== Ja)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Ol, t, e), Vr(jo, i, e);
      }
    }
    function Nb(e, t, i) {
      {
        var s = e.stateNode, f = t.childContextTypes;
        if (typeof s.getChildContext != "function") {
          {
            var h = nt(e) || "Unknown";
            cS[h] || (cS[h] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", h, h));
          }
          return i;
        }
        var y = s.getChildContext();
        for (var x in y)
          if (!(x in f))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + x + '" is not defined in childContextTypes.');
        {
          var b = nt(e) || "Unknown";
          Vi(f, y, "child context", b);
        }
        return dt({}, i, y);
      }
    }
    function tg(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || Ja;
        return fS = Ol.current, Vr(Ol, i, e), Vr(jo, jo.current, e), !0;
      }
    }
    function jb(e, t, i) {
      {
        var s = e.stateNode;
        if (!s)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var f = Nb(e, t, fS);
          s.__reactInternalMemoizedMergedChildContext = f, $r(jo, e), $r(Ol, e), Vr(Ol, f, e), Vr(jo, i, e);
        } else
          $r(jo, e), Vr(jo, i, e);
      }
    }
    function sO(e) {
      {
        if (!ip(e) || e.tag !== _)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case D:
              return t.stateNode.context;
            case _: {
              var i = t.type;
              if (Uo(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var zs = 0, ng = 1, Ml = null, pS = !1, hS = !1;
    function Ub(e) {
      Ml === null ? Ml = [e] : Ml.push(e);
    }
    function uO(e) {
      pS = !0, Ub(e);
    }
    function Ab() {
      pS && Fs();
    }
    function Fs() {
      if (!hS && Ml !== null) {
        hS = !0;
        var e = 0, t = Ra();
        try {
          var i = !0, s = Ml;
          for (Rn(cr); e < s.length; e++) {
            var f = s[e];
            do
              f = f(i);
            while (f !== null);
          }
          Ml = null, pS = !1;
        } catch (h) {
          throw Ml !== null && (Ml = Ml.slice(e + 1)), Vc(Wc, Fs), h;
        } finally {
          Rn(t), hS = !1;
        }
      }
      return null;
    }
    var Bf = [], Wf = 0, rg = null, ag = 0, mi = [], gi = 0, Ku = null, Ll = 1, Nl = "";
    function cO(e) {
      return Xu(), (e.flags & np) !== Ie;
    }
    function fO(e) {
      return Xu(), ag;
    }
    function dO() {
      var e = Nl, t = Ll, i = t & ~pO(t);
      return i.toString(32) + e;
    }
    function Zu(e, t) {
      Xu(), Bf[Wf++] = ag, Bf[Wf++] = rg, rg = e, ag = t;
    }
    function zb(e, t, i) {
      Xu(), mi[gi++] = Ll, mi[gi++] = Nl, mi[gi++] = Ku, Ku = e;
      var s = Ll, f = Nl, h = ig(s) - 1, y = s & ~(1 << h), x = i + 1, b = ig(t) + h;
      if (b > 30) {
        var T = h - h % 5, R = (1 << T) - 1, z = (y & R).toString(32), U = y >> T, V = h - T, B = ig(t) + V, K = x << V, Te = K | U, Ye = z + f;
        Ll = 1 << B | Te, Nl = Ye;
      } else {
        var Ae = x << h, yt = Ae | y, ht = f;
        Ll = 1 << b | yt, Nl = ht;
      }
    }
    function vS(e) {
      Xu();
      var t = e.return;
      if (t !== null) {
        var i = 1, s = 0;
        Zu(e, i), zb(e, i, s);
      }
    }
    function ig(e) {
      return 32 - Xc(e);
    }
    function pO(e) {
      return 1 << ig(e) - 1;
    }
    function mS(e) {
      for (; e === rg; )
        rg = Bf[--Wf], Bf[Wf] = null, ag = Bf[--Wf], Bf[Wf] = null;
      for (; e === Ku; )
        Ku = mi[--gi], mi[gi] = null, Nl = mi[--gi], mi[gi] = null, Ll = mi[--gi], mi[gi] = null;
    }
    function hO() {
      return Xu(), Ku !== null ? {
        id: Ll,
        overflow: Nl
      } : null;
    }
    function vO(e, t) {
      Xu(), mi[gi++] = Ll, mi[gi++] = Nl, mi[gi++] = Ku, Ll = t.id, Nl = t.overflow, Ku = e;
    }
    function Xu() {
      wr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var xr = null, yi = null, Bi = !1, Ju = !1, Ps = null;
    function mO() {
      Bi && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Fb() {
      Ju = !0;
    }
    function gO() {
      return Ju;
    }
    function yO(e) {
      var t = e.stateNode.containerInfo;
      return yi = AD(t), xr = e, Bi = !0, Ps = null, Ju = !1, !0;
    }
    function SO(e, t, i) {
      return yi = zD(t), xr = e, Bi = !0, Ps = null, Ju = !1, i !== null && vO(e, i), !0;
    }
    function Pb(e, t) {
      switch (e.tag) {
        case D: {
          GD(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var i = (e.mode & ct) !== Ve;
          qD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case re: {
          var s = e.memoizedState;
          s.dehydrated !== null && QD(s.dehydrated, t);
          break;
        }
      }
    }
    function Hb(e, t) {
      Pb(e, t);
      var i = bN();
      i.stateNode = t, i.return = e;
      var s = e.deletions;
      s === null ? (e.deletions = [i], e.flags |= kt) : s.push(i);
    }
    function gS(e, t) {
      {
        if (Ju)
          return;
        switch (e.tag) {
          case D: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var s = t.type;
                t.pendingProps, KD(i, s);
                break;
              case N:
                var f = t.pendingProps;
                ZD(i, f);
                break;
            }
            break;
          }
          case F: {
            var h = e.type, y = e.memoizedProps, x = e.stateNode;
            switch (t.tag) {
              case F: {
                var b = t.type, T = t.pendingProps, R = (e.mode & ct) !== Ve;
                eO(
                  h,
                  y,
                  x,
                  b,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case N: {
                var z = t.pendingProps, U = (e.mode & ct) !== Ve;
                tO(
                  h,
                  y,
                  x,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case re: {
            var V = e.memoizedState, B = V.dehydrated;
            if (B !== null)
              switch (t.tag) {
                case F:
                  var K = t.type;
                  t.pendingProps, XD(B, K);
                  break;
                case N:
                  var Te = t.pendingProps;
                  JD(B, Te);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Ib(e, t) {
      t.flags = t.flags & ~Ea | Bt, gS(e, t);
    }
    function Yb(e, t) {
      switch (e.tag) {
        case F: {
          var i = e.type;
          e.pendingProps;
          var s = OD(t, i);
          return s !== null ? (e.stateNode = s, xr = e, yi = UD(s), !0) : !1;
        }
        case N: {
          var f = e.pendingProps, h = MD(t, f);
          return h !== null ? (e.stateNode = h, xr = e, yi = null, !0) : !1;
        }
        case re: {
          var y = LD(t);
          if (y !== null) {
            var x = {
              dehydrated: y,
              treeContext: hO(),
              retryLane: Ir
            };
            e.memoizedState = x;
            var b = EN(y);
            return b.return = e, e.child = b, xr = e, yi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function yS(e) {
      return (e.mode & ct) !== Ve && (e.flags & Xe) === Ie;
    }
    function SS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function xS(e) {
      if (Bi) {
        var t = yi;
        if (!t) {
          yS(e) && (gS(xr, e), SS()), Ib(xr, e), Bi = !1, xr = e;
          return;
        }
        var i = t;
        if (!Yb(e, t)) {
          yS(e) && (gS(xr, e), SS()), t = Jp(i);
          var s = xr;
          if (!t || !Yb(e, t)) {
            Ib(xr, e), Bi = !1, xr = e;
            return;
          }
          Hb(s, i);
        }
      }
    }
    function xO(e, t, i) {
      var s = e.stateNode, f = !Ju, h = FD(s, e.type, e.memoizedProps, t, i, e, f);
      return e.updateQueue = h, h !== null;
    }
    function wO(e) {
      var t = e.stateNode, i = e.memoizedProps, s = PD(t, i, e);
      if (s) {
        var f = xr;
        if (f !== null)
          switch (f.tag) {
            case D: {
              var h = f.stateNode.containerInfo, y = (f.mode & ct) !== Ve;
              BD(
                h,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
            case F: {
              var x = f.type, b = f.memoizedProps, T = f.stateNode, R = (f.mode & ct) !== Ve;
              WD(
                x,
                b,
                T,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return s;
    }
    function bO(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      HD(i, e);
    }
    function EO(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ID(i);
    }
    function $b(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== D && t.tag !== re; )
        t = t.return;
      xr = t;
    }
    function og(e) {
      if (e !== xr)
        return !1;
      if (!Bi)
        return $b(e), Bi = !0, !1;
      if (e.tag !== D && (e.tag !== F || VD(e.type) && !tS(e.type, e.memoizedProps))) {
        var t = yi;
        if (t)
          if (yS(e))
            Vb(e), SS();
          else
            for (; t; )
              Hb(e, t), t = Jp(t);
      }
      return $b(e), e.tag === re ? yi = EO(e) : yi = xr ? Jp(e.stateNode) : null, !0;
    }
    function CO() {
      return Bi && yi !== null;
    }
    function Vb(e) {
      for (var t = yi; t; )
        Pb(e, t), t = Jp(t);
    }
    function Gf() {
      xr = null, yi = null, Bi = !1, Ju = !1;
    }
    function Bb() {
      Ps !== null && (PC(Ps), Ps = null);
    }
    function wr() {
      return Bi;
    }
    function wS(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    var _O = l.ReactCurrentBatchConfig, TO = null;
    function kO() {
      return _O.transition;
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
      var RO = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & nn && (t = i), i = i.return;
        return t;
      }, ec = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, rh = [], ah = [], ih = [], oh = [], lh = [], sh = [], tc = /* @__PURE__ */ new Set();
      Wi.recordUnsafeLifecycleWarnings = function(e, t) {
        tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & nn && typeof t.UNSAFE_componentWillMount == "function" && ah.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ih.push(e), e.mode & nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && oh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && lh.push(e), e.mode & nn && typeof t.UNSAFE_componentWillUpdate == "function" && sh.push(e));
      }, Wi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(U) {
          e.add(nt(U) || "Component"), tc.add(U.type);
        }), rh = []);
        var t = /* @__PURE__ */ new Set();
        ah.length > 0 && (ah.forEach(function(U) {
          t.add(nt(U) || "Component"), tc.add(U.type);
        }), ah = []);
        var i = /* @__PURE__ */ new Set();
        ih.length > 0 && (ih.forEach(function(U) {
          i.add(nt(U) || "Component"), tc.add(U.type);
        }), ih = []);
        var s = /* @__PURE__ */ new Set();
        oh.length > 0 && (oh.forEach(function(U) {
          s.add(nt(U) || "Component"), tc.add(U.type);
        }), oh = []);
        var f = /* @__PURE__ */ new Set();
        lh.length > 0 && (lh.forEach(function(U) {
          f.add(nt(U) || "Component"), tc.add(U.type);
        }), lh = []);
        var h = /* @__PURE__ */ new Set();
        if (sh.length > 0 && (sh.forEach(function(U) {
          h.add(nt(U) || "Component"), tc.add(U.type);
        }), sh = []), t.size > 0) {
          var y = ec(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var x = ec(s);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, x);
        }
        if (h.size > 0) {
          var b = ec(h);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var T = ec(e);
          m(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (i.size > 0) {
          var R = ec(i);
          m(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (f.size > 0) {
          var z = ec(f);
          m(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var lg = /* @__PURE__ */ new Map(), Wb = /* @__PURE__ */ new Set();
      Wi.recordLegacyContextWarning = function(e, t) {
        var i = RO(e);
        if (i === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Wb.has(e.type)) {
          var s = lg.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (s === void 0 && (s = [], lg.set(i, s)), s.push(e));
        }
      }, Wi.flushLegacyContextWarning = function() {
        lg.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], s = /* @__PURE__ */ new Set();
            e.forEach(function(h) {
              s.add(nt(h) || "Component"), Wb.add(h.type);
            });
            var f = ec(s);
            try {
              jt(i), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, f);
            } finally {
              _n();
            }
          }
        });
      }, Wi.discardPendingWarnings = function() {
        rh = [], ah = [], ih = [], oh = [], lh = [], sh = [], lg = /* @__PURE__ */ new Map();
      };
    }
    function Gi(e, t) {
      if (e && e.defaultProps) {
        var i = dt({}, t), s = e.defaultProps;
        for (var f in s)
          i[f] === void 0 && (i[f] = s[f]);
        return i;
      }
      return t;
    }
    var bS = As(null), ES;
    ES = {};
    var sg = null, Qf = null, CS = null, ug = !1;
    function cg() {
      sg = null, Qf = null, CS = null, ug = !1;
    }
    function Gb() {
      ug = !0;
    }
    function Qb() {
      ug = !1;
    }
    function qb(e, t, i) {
      Vr(bS, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ES && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ES;
    }
    function _S(e, t) {
      var i = bS.current;
      $r(bS, t), e._currentValue = i;
    }
    function TS(e, t, i) {
      for (var s = e; s !== null; ) {
        var f = s.alternate;
        if (yl(s.childLanes, t) ? f !== null && !yl(f.childLanes, t) && (f.childLanes = at(f.childLanes, t)) : (s.childLanes = at(s.childLanes, t), f !== null && (f.childLanes = at(f.childLanes, t))), s === i)
          break;
        s = s.return;
      }
      s !== i && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DO(e, t, i) {
      OO(e, t, i);
    }
    function OO(e, t, i) {
      var s = e.child;
      for (s !== null && (s.return = e); s !== null; ) {
        var f = void 0, h = s.dependencies;
        if (h !== null) {
          f = s.child;
          for (var y = h.firstContext; y !== null; ) {
            if (y.context === t) {
              if (s.tag === _) {
                var x = kn(i), b = jl(Ht, x);
                b.tag = dg;
                var T = s.updateQueue;
                if (T !== null) {
                  var R = T.shared, z = R.pending;
                  z === null ? b.next = b : (b.next = z.next, z.next = b), R.pending = b;
                }
              }
              s.lanes = at(s.lanes, i);
              var U = s.alternate;
              U !== null && (U.lanes = at(U.lanes, i)), TS(s.return, i, e), h.lanes = at(h.lanes, i);
              break;
            }
            y = y.next;
          }
        } else if (s.tag === q)
          f = s.type === e.type ? null : s.child;
        else if (s.tag === me) {
          var V = s.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = at(V.lanes, i);
          var B = V.alternate;
          B !== null && (B.lanes = at(B.lanes, i)), TS(V, i, e), f = s.sibling;
        } else
          f = s.child;
        if (f !== null)
          f.return = s;
        else
          for (f = s; f !== null; ) {
            if (f === e) {
              f = null;
              break;
            }
            var K = f.sibling;
            if (K !== null) {
              K.return = f.return, f = K;
              break;
            }
            f = f.return;
          }
        s = f;
      }
    }
    function qf(e, t) {
      sg = e, Qf = null, CS = null;
      var i = e.dependencies;
      if (i !== null) {
        var s = i.firstContext;
        s !== null && (Yr(i.lanes, t) && bh(), i.firstContext = null);
      }
    }
    function $n(e) {
      ug && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (CS !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Qf === null) {
          if (sg === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Qf = i, sg.dependencies = {
            lanes: ee,
            firstContext: i
          };
        } else
          Qf = Qf.next = i;
      }
      return t;
    }
    var nc = null;
    function kS(e) {
      nc === null ? nc = [e] : nc.push(e);
    }
    function MO() {
      if (nc !== null) {
        for (var e = 0; e < nc.length; e++) {
          var t = nc[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var s = i.next, f = t.pending;
            if (f !== null) {
              var h = f.next;
              f.next = s, i.next = h;
            }
            t.pending = i;
          }
        }
        nc = null;
      }
    }
    function Kb(e, t, i, s) {
      var f = t.interleaved;
      return f === null ? (i.next = i, kS(t)) : (i.next = f.next, f.next = i), t.interleaved = i, fg(e, s);
    }
    function LO(e, t, i, s) {
      var f = t.interleaved;
      f === null ? (i.next = i, kS(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
    }
    function NO(e, t, i, s) {
      var f = t.interleaved;
      return f === null ? (i.next = i, kS(t)) : (i.next = f.next, f.next = i), t.interleaved = i, fg(e, s);
    }
    function Na(e, t) {
      return fg(e, t);
    }
    var jO = fg;
    function fg(e, t) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), i === null && (e.flags & (Bt | Ea)) !== Ie && ZC(e);
      for (var s = e, f = e.return; f !== null; )
        f.childLanes = at(f.childLanes, t), i = f.alternate, i !== null ? i.childLanes = at(i.childLanes, t) : (f.flags & (Bt | Ea)) !== Ie && ZC(e), s = f, f = f.return;
      if (s.tag === D) {
        var h = s.stateNode;
        return h;
      } else
        return null;
    }
    var Zb = 0, Xb = 1, dg = 2, RS = 3, pg = !1, DS, hg;
    DS = !1, hg = null;
    function OS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Jb(e, t) {
      var i = t.updateQueue, s = e.updateQueue;
      if (i === s) {
        var f = {
          baseState: s.baseState,
          firstBaseUpdate: s.firstBaseUpdate,
          lastBaseUpdate: s.lastBaseUpdate,
          shared: s.shared,
          effects: s.effects
        };
        t.updateQueue = f;
      }
    }
    function jl(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: Zb,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Hs(e, t, i) {
      var s = e.updateQueue;
      if (s === null)
        return null;
      var f = s.shared;
      if (hg === f && !DS && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), DS = !0), jL()) {
        var h = f.pending;
        return h === null ? t.next = t : (t.next = h.next, h.next = t), f.pending = t, jO(e, i);
      } else
        return NO(e, f, t, i);
    }
    function vg(e, t, i) {
      var s = t.updateQueue;
      if (s !== null) {
        var f = s.shared;
        if (yp(i)) {
          var h = f.lanes;
          h = xp(h, e.pendingLanes);
          var y = at(h, i);
          f.lanes = y, xs(e, y);
        }
      }
    }
    function MS(e, t) {
      var i = e.updateQueue, s = e.alternate;
      if (s !== null) {
        var f = s.updateQueue;
        if (i === f) {
          var h = null, y = null, x = i.firstBaseUpdate;
          if (x !== null) {
            var b = x;
            do {
              var T = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              y === null ? h = y = T : (y.next = T, y = T), b = b.next;
            } while (b !== null);
            y === null ? h = y = t : (y.next = t, y = t);
          } else
            h = y = t;
          i = {
            baseState: f.baseState,
            firstBaseUpdate: h,
            lastBaseUpdate: y,
            shared: f.shared,
            effects: f.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var R = i.lastBaseUpdate;
      R === null ? i.firstBaseUpdate = t : R.next = t, i.lastBaseUpdate = t;
    }
    function UO(e, t, i, s, f, h) {
      switch (i.tag) {
        case Xb: {
          var y = i.payload;
          if (typeof y == "function") {
            Gb();
            var x = y.call(h, s, f);
            {
              if (e.mode & nn) {
                Tn(!0);
                try {
                  y.call(h, s, f);
                } finally {
                  Tn(!1);
                }
              }
              Qb();
            }
            return x;
          }
          return y;
        }
        case RS:
          e.flags = e.flags & ~Fn | Xe;
        case Zb: {
          var b = i.payload, T;
          if (typeof b == "function") {
            Gb(), T = b.call(h, s, f);
            {
              if (e.mode & nn) {
                Tn(!0);
                try {
                  b.call(h, s, f);
                } finally {
                  Tn(!1);
                }
              }
              Qb();
            }
          } else
            T = b;
          return T == null ? s : dt({}, s, T);
        }
        case dg:
          return pg = !0, s;
      }
      return s;
    }
    function mg(e, t, i, s) {
      var f = e.updateQueue;
      pg = !1, hg = f.shared;
      var h = f.firstBaseUpdate, y = f.lastBaseUpdate, x = f.shared.pending;
      if (x !== null) {
        f.shared.pending = null;
        var b = x, T = b.next;
        b.next = null, y === null ? h = T : y.next = T, y = b;
        var R = e.alternate;
        if (R !== null) {
          var z = R.updateQueue, U = z.lastBaseUpdate;
          U !== y && (U === null ? z.firstBaseUpdate = T : U.next = T, z.lastBaseUpdate = b);
        }
      }
      if (h !== null) {
        var V = f.baseState, B = ee, K = null, Te = null, Ye = null, Ae = h;
        do {
          var yt = Ae.lane, ht = Ae.eventTime;
          if (yl(s, yt)) {
            if (Ye !== null) {
              var Z = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                tag: Ae.tag,
                payload: Ae.payload,
                callback: Ae.callback,
                next: null
              };
              Ye = Ye.next = Z;
            }
            V = UO(e, f, Ae, V, t, i);
            var Y = Ae.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ae.lane !== mt) {
              e.flags |= ci;
              var le = f.effects;
              le === null ? f.effects = [Ae] : le.push(Ae);
            }
          } else {
            var I = {
              eventTime: ht,
              lane: yt,
              tag: Ae.tag,
              payload: Ae.payload,
              callback: Ae.callback,
              next: null
            };
            Ye === null ? (Te = Ye = I, K = V) : Ye = Ye.next = I, B = at(B, yt);
          }
          if (Ae = Ae.next, Ae === null) {
            if (x = f.shared.pending, x === null)
              break;
            var ke = x, Ee = ke.next;
            ke.next = null, Ae = Ee, f.lastBaseUpdate = ke, f.shared.pending = null;
          }
        } while (!0);
        Ye === null && (K = V), f.baseState = K, f.firstBaseUpdate = Te, f.lastBaseUpdate = Ye;
        var Ke = f.shared.interleaved;
        if (Ke !== null) {
          var tt = Ke;
          do
            B = at(B, tt.lane), tt = tt.next;
          while (tt !== Ke);
        } else
          h === null && (f.shared.lanes = ee);
        jh(B), e.lanes = B, e.memoizedState = V;
      }
      hg = null;
    }
    function AO(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function eE() {
      pg = !1;
    }
    function gg() {
      return pg;
    }
    function tE(e, t, i) {
      var s = t.effects;
      if (t.effects = null, s !== null)
        for (var f = 0; f < s.length; f++) {
          var h = s[f], y = h.callback;
          y !== null && (h.callback = null, AO(y, i));
        }
    }
    var LS = {}, nE = new r.Component().refs, NS, jS, US, AS, zS, rE, yg, FS, PS, HS;
    {
      NS = /* @__PURE__ */ new Set(), jS = /* @__PURE__ */ new Set(), US = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), FS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set();
      var aE = /* @__PURE__ */ new Set();
      yg = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          aE.has(i) || (aE.add(i), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, rE = function(e, t) {
        if (t === void 0) {
          var i = Ft(e) || "Component";
          zS.has(i) || (zS.add(i), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(LS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(LS);
    }
    function IS(e, t, i, s) {
      var f = e.memoizedState, h = i(s, f);
      {
        if (e.mode & nn) {
          Tn(!0);
          try {
            h = i(s, f);
          } finally {
            Tn(!1);
          }
        }
        rE(t, h);
      }
      var y = h == null ? f : dt({}, f, h);
      if (e.memoizedState = y, e.lanes === ee) {
        var x = e.updateQueue;
        x.baseState = y;
      }
    }
    var YS = {
      isMounted: ia,
      enqueueSetState: function(e, t, i) {
        var s = wa(e), f = fa(), h = Qs(s), y = jl(f, h);
        y.payload = t, i != null && (yg(i, "setState"), y.callback = i);
        var x = Hs(s, y, h);
        x !== null && (nr(x, s, h, f), vg(x, s, h)), _o(s, h);
      },
      enqueueReplaceState: function(e, t, i) {
        var s = wa(e), f = fa(), h = Qs(s), y = jl(f, h);
        y.tag = Xb, y.payload = t, i != null && (yg(i, "replaceState"), y.callback = i);
        var x = Hs(s, y, h);
        x !== null && (nr(x, s, h, f), vg(x, s, h)), _o(s, h);
      },
      enqueueForceUpdate: function(e, t) {
        var i = wa(e), s = fa(), f = Qs(i), h = jl(s, f);
        h.tag = dg, t != null && (yg(t, "forceUpdate"), h.callback = t);
        var y = Hs(i, h, f);
        y !== null && (nr(y, i, f, s), vg(y, i, f)), hp(i, f);
      }
    };
    function iE(e, t, i, s, f, h, y) {
      var x = e.stateNode;
      if (typeof x.shouldComponentUpdate == "function") {
        var b = x.shouldComponentUpdate(s, h, y);
        {
          if (e.mode & nn) {
            Tn(!0);
            try {
              b = x.shouldComponentUpdate(s, h, y);
            } finally {
              Tn(!1);
            }
          }
          b === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ze(i, s) || !ze(f, h) : !0;
    }
    function zO(e, t, i) {
      var s = e.stateNode;
      {
        var f = Ft(t) || "Component", h = s.render;
        h || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), s.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), s.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), s.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), t.contextType && t.contextTypes && !PS.has(t) && (PS.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof s.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), t.prototype && t.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof s.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof s.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof s.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof s.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var y = s.props !== i;
        s.props !== void 0 && y && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), s.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !US.has(t) && (US.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof s.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof s.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var x = s.state;
        x && (typeof x != "object" || An(x)) && v("%s.state: must be set to an object or null", f), typeof s.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function oE(e, t) {
      t.updater = YS, e.stateNode = t, cs(t, e), t._reactInternalInstance = LS;
    }
    function lE(e, t, i) {
      var s = !1, f = Ja, h = Ja, y = t.contextType;
      if ("contextType" in t) {
        var x = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === xe && y._context === void 0
        );
        if (!x && !HS.has(t)) {
          HS.add(t);
          var b = "";
          y === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? b = " However, it is set to a " + typeof y + "." : y.$$typeof === ie ? b = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", b);
        }
      }
      if (typeof y == "object" && y !== null)
        h = $n(y);
      else {
        f = $f(e, t, !0);
        var T = t.contextTypes;
        s = T != null, h = s ? Vf(e, f) : Ja;
      }
      var R = new t(i, h);
      if (e.mode & nn) {
        Tn(!0);
        try {
          R = new t(i, h);
        } finally {
          Tn(!1);
        }
      }
      var z = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      oE(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var U = Ft(t) || "Component";
          jS.has(U) || (jS.add(U), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, R.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var V = null, B = null, K = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), V !== null || B !== null || K !== null) {
            var Te = Ft(t) || "Component", Ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            AS.has(Te) || (AS.add(Te), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Te, Ye, V !== null ? `
  ` + V : "", B !== null ? `
  ` + B : "", K !== null ? `
  ` + K : ""));
          }
        }
      }
      return s && Mb(e, f, h), R;
    }
    function FO(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), YS.enqueueReplaceState(t, t.state, null));
    }
    function sE(e, t, i, s) {
      var f = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== f) {
        {
          var h = nt(e) || "Component";
          NS.has(h) || (NS.add(h), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", h));
        }
        YS.enqueueReplaceState(t, t.state, null);
      }
    }
    function $S(e, t, i, s) {
      zO(e, t, i);
      var f = e.stateNode;
      f.props = i, f.state = e.memoizedState, f.refs = nE, OS(e);
      var h = t.contextType;
      if (typeof h == "object" && h !== null)
        f.context = $n(h);
      else {
        var y = $f(e, t, !0);
        f.context = Vf(e, y);
      }
      {
        if (f.state === i) {
          var x = Ft(t) || "Component";
          FS.has(x) || (FS.add(x), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", x));
        }
        e.mode & nn && Wi.recordLegacyContextWarning(e, f), Wi.recordUnsafeLifecycleWarnings(e, f);
      }
      f.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (IS(e, t, b, i), f.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (FO(e, f), mg(e, i, f, s), f.state = e.memoizedState), typeof f.componentDidMount == "function") {
        var T = rt;
        T |= Ar, (e.mode & Ta) !== Ve && (T |= zr), e.flags |= T;
      }
    }
    function PO(e, t, i, s) {
      var f = e.stateNode, h = e.memoizedProps;
      f.props = h;
      var y = f.context, x = t.contextType, b = Ja;
      if (typeof x == "object" && x !== null)
        b = $n(x);
      else {
        var T = $f(e, t, !0);
        b = Vf(e, T);
      }
      var R = t.getDerivedStateFromProps, z = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !z && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== i || y !== b) && sE(e, f, i, b), eE();
      var U = e.memoizedState, V = f.state = U;
      if (mg(e, i, f, s), V = e.memoizedState, h === i && U === V && !Jm() && !gg()) {
        if (typeof f.componentDidMount == "function") {
          var B = rt;
          B |= Ar, (e.mode & Ta) !== Ve && (B |= zr), e.flags |= B;
        }
        return !1;
      }
      typeof R == "function" && (IS(e, t, R, i), V = e.memoizedState);
      var K = gg() || iE(e, t, h, i, U, V, b);
      if (K) {
        if (!z && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function") {
          var Te = rt;
          Te |= Ar, (e.mode & Ta) !== Ve && (Te |= zr), e.flags |= Te;
        }
      } else {
        if (typeof f.componentDidMount == "function") {
          var Ye = rt;
          Ye |= Ar, (e.mode & Ta) !== Ve && (Ye |= zr), e.flags |= Ye;
        }
        e.memoizedProps = i, e.memoizedState = V;
      }
      return f.props = i, f.state = V, f.context = b, K;
    }
    function HO(e, t, i, s, f) {
      var h = t.stateNode;
      Jb(e, t);
      var y = t.memoizedProps, x = t.type === t.elementType ? y : Gi(t.type, y);
      h.props = x;
      var b = t.pendingProps, T = h.context, R = i.contextType, z = Ja;
      if (typeof R == "object" && R !== null)
        z = $n(R);
      else {
        var U = $f(t, i, !0);
        z = Vf(t, U);
      }
      var V = i.getDerivedStateFromProps, B = typeof V == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !B && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (y !== b || T !== z) && sE(t, h, s, z), eE();
      var K = t.memoizedState, Te = h.state = K;
      if (mg(t, s, h, f), Te = t.memoizedState, y === b && K === Te && !Jm() && !gg() && !Pe)
        return typeof h.componentDidUpdate == "function" && (y !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= rt), typeof h.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= ba), !1;
      typeof V == "function" && (IS(t, i, V, s), Te = t.memoizedState);
      var Ye = gg() || iE(t, i, x, s, K, Te, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return Ye ? (!B && (typeof h.UNSAFE_componentWillUpdate == "function" || typeof h.componentWillUpdate == "function") && (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, Te, z), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, Te, z)), typeof h.componentDidUpdate == "function" && (t.flags |= rt), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= ba)) : (typeof h.componentDidUpdate == "function" && (y !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= rt), typeof h.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= ba), t.memoizedProps = s, t.memoizedState = Te), h.props = s, h.state = Te, h.context = z, Ye;
    }
    var VS, BS, WS, GS, QS, uE = function(e, t) {
    };
    VS = !1, BS = !1, WS = {}, GS = {}, QS = {}, uE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = nt(t) || "Component";
        GS[i] || (GS[i] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function uh(e, t, i) {
      var s = i.ref;
      if (s !== null && typeof s != "function" && typeof s != "object") {
        if ((e.mode & nn || gr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self)) {
          var f = nt(e) || "Component";
          WS[f] || (v('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', s), WS[f] = !0);
        }
        if (i._owner) {
          var h = i._owner, y;
          if (h) {
            var x = h;
            if (x.tag !== _)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = x.stateNode;
          }
          if (!y)
            throw new Error("Missing owner for string ref " + s + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = y;
          Ti(s, "ref");
          var T = "" + s;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var R = function(z) {
            var U = b.refs;
            U === nE && (U = b.refs = {}), z === null ? delete U[T] : U[T] = z;
          };
          return R._stringRef = T, R;
        } else {
          if (typeof s != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + s + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return s;
    }
    function Sg(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function xg(e) {
      {
        var t = nt(e) || "Component";
        if (QS[t])
          return;
        QS[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function fE(e) {
      function t(I, Z) {
        if (e) {
          var Y = I.deletions;
          Y === null ? (I.deletions = [Z], I.flags |= kt) : Y.push(Z);
        }
      }
      function i(I, Z) {
        if (!e)
          return null;
        for (var Y = Z; Y !== null; )
          t(I, Y), Y = Y.sibling;
        return null;
      }
      function s(I, Z) {
        for (var Y = /* @__PURE__ */ new Map(), le = Z; le !== null; )
          le.key !== null ? Y.set(le.key, le) : Y.set(le.index, le), le = le.sibling;
        return Y;
      }
      function f(I, Z) {
        var Y = cc(I, Z);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function h(I, Z, Y) {
        if (I.index = Y, !e)
          return I.flags |= np, Z;
        var le = I.alternate;
        if (le !== null) {
          var ke = le.index;
          return ke < Z ? (I.flags |= Bt, Z) : ke;
        } else
          return I.flags |= Bt, Z;
      }
      function y(I) {
        return e && I.alternate === null && (I.flags |= Bt), I;
      }
      function x(I, Z, Y, le) {
        if (Z === null || Z.tag !== N) {
          var ke = wx(Y, I.mode, le);
          return ke.return = I, ke;
        } else {
          var Ee = f(Z, Y);
          return Ee.return = I, Ee;
        }
      }
      function b(I, Z, Y, le) {
        var ke = Y.type;
        if (ke === Va)
          return R(I, Z, Y.props.children, le, Y.key);
        if (Z !== null && (Z.elementType === ke || // Keep this check inline so it only runs on the false path:
        t_(Z, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === We && cE(ke) === Z.type)) {
          var Ee = f(Z, Y.props);
          return Ee.ref = uh(I, Z, Y), Ee.return = I, Ee._debugSource = Y._source, Ee._debugOwner = Y._owner, Ee;
        }
        var Ke = xx(Y, I.mode, le);
        return Ke.ref = uh(I, Z, Y), Ke.return = I, Ke;
      }
      function T(I, Z, Y, le) {
        if (Z === null || Z.tag !== O || Z.stateNode.containerInfo !== Y.containerInfo || Z.stateNode.implementation !== Y.implementation) {
          var ke = bx(Y, I.mode, le);
          return ke.return = I, ke;
        } else {
          var Ee = f(Z, Y.children || []);
          return Ee.return = I, Ee;
        }
      }
      function R(I, Z, Y, le, ke) {
        if (Z === null || Z.tag !== W) {
          var Ee = Ks(Y, I.mode, le, ke);
          return Ee.return = I, Ee;
        } else {
          var Ke = f(Z, Y);
          return Ke.return = I, Ke;
        }
      }
      function z(I, Z, Y) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var le = wx("" + Z, I.mode, Y);
          return le.return = I, le;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case oo: {
              var ke = xx(Z, I.mode, Y);
              return ke.ref = uh(I, null, Z), ke.return = I, ke;
            }
            case ta: {
              var Ee = bx(Z, I.mode, Y);
              return Ee.return = I, Ee;
            }
            case We: {
              var Ke = Z._payload, tt = Z._init;
              return z(I, tt(Ke), Y);
            }
          }
          if (An(Z) || ki(Z)) {
            var At = Ks(Z, I.mode, Y, null);
            return At.return = I, At;
          }
          Sg(I, Z);
        }
        return typeof Z == "function" && xg(I), null;
      }
      function U(I, Z, Y, le) {
        var ke = Z !== null ? Z.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return ke !== null ? null : x(I, Z, "" + Y, le);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case oo:
              return Y.key === ke ? b(I, Z, Y, le) : null;
            case ta:
              return Y.key === ke ? T(I, Z, Y, le) : null;
            case We: {
              var Ee = Y._payload, Ke = Y._init;
              return U(I, Z, Ke(Ee), le);
            }
          }
          if (An(Y) || ki(Y))
            return ke !== null ? null : R(I, Z, Y, le, null);
          Sg(I, Y);
        }
        return typeof Y == "function" && xg(I), null;
      }
      function V(I, Z, Y, le, ke) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var Ee = I.get(Y) || null;
          return x(Z, Ee, "" + le, ke);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case oo: {
              var Ke = I.get(le.key === null ? Y : le.key) || null;
              return b(Z, Ke, le, ke);
            }
            case ta: {
              var tt = I.get(le.key === null ? Y : le.key) || null;
              return T(Z, tt, le, ke);
            }
            case We:
              var At = le._payload, Et = le._init;
              return V(I, Z, Y, Et(At), ke);
          }
          if (An(le) || ki(le)) {
            var Mn = I.get(Y) || null;
            return R(Z, Mn, le, ke, null);
          }
          Sg(Z, le);
        }
        return typeof le == "function" && xg(Z), null;
      }
      function B(I, Z, Y) {
        {
          if (typeof I != "object" || I === null)
            return Z;
          switch (I.$$typeof) {
            case oo:
            case ta:
              uE(I, Y);
              var le = I.key;
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
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case We:
              var ke = I._payload, Ee = I._init;
              B(Ee(ke), Z, Y);
              break;
          }
        }
        return Z;
      }
      function K(I, Z, Y, le) {
        for (var ke = null, Ee = 0; Ee < Y.length; Ee++) {
          var Ke = Y[Ee];
          ke = B(Ke, ke, I);
        }
        for (var tt = null, At = null, Et = Z, Mn = 0, Ct = 0, wn = null; Et !== null && Ct < Y.length; Ct++) {
          Et.index > Ct ? (wn = Et, Et = null) : wn = Et.sibling;
          var Wr = U(I, Et, Y[Ct], le);
          if (Wr === null) {
            Et === null && (Et = wn);
            break;
          }
          e && Et && Wr.alternate === null && t(I, Et), Mn = h(Wr, Mn, Ct), At === null ? tt = Wr : At.sibling = Wr, At = Wr, Et = wn;
        }
        if (Ct === Y.length) {
          if (i(I, Et), wr()) {
            var Rr = Ct;
            Zu(I, Rr);
          }
          return tt;
        }
        if (Et === null) {
          for (; Ct < Y.length; Ct++) {
            var ti = z(I, Y[Ct], le);
            ti !== null && (Mn = h(ti, Mn, Ct), At === null ? tt = ti : At.sibling = ti, At = ti);
          }
          if (wr()) {
            var da = Ct;
            Zu(I, da);
          }
          return tt;
        }
        for (var pa = s(I, Et); Ct < Y.length; Ct++) {
          var Gr = V(pa, I, Ct, Y[Ct], le);
          Gr !== null && (e && Gr.alternate !== null && pa.delete(Gr.key === null ? Ct : Gr.key), Mn = h(Gr, Mn, Ct), At === null ? tt = Gr : At.sibling = Gr, At = Gr);
        }
        if (e && pa.forEach(function(dd) {
          return t(I, dd);
        }), wr()) {
          var Hl = Ct;
          Zu(I, Hl);
        }
        return tt;
      }
      function Te(I, Z, Y, le) {
        var ke = ki(Y);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (BS || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), BS = !0), Y.entries === ke && (VS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), VS = !0);
          var Ee = ke.call(Y);
          if (Ee)
            for (var Ke = null, tt = Ee.next(); !tt.done; tt = Ee.next()) {
              var At = tt.value;
              Ke = B(At, Ke, I);
            }
        }
        var Et = ke.call(Y);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Mn = null, Ct = null, wn = Z, Wr = 0, Rr = 0, ti = null, da = Et.next(); wn !== null && !da.done; Rr++, da = Et.next()) {
          wn.index > Rr ? (ti = wn, wn = null) : ti = wn.sibling;
          var pa = U(I, wn, da.value, le);
          if (pa === null) {
            wn === null && (wn = ti);
            break;
          }
          e && wn && pa.alternate === null && t(I, wn), Wr = h(pa, Wr, Rr), Ct === null ? Mn = pa : Ct.sibling = pa, Ct = pa, wn = ti;
        }
        if (da.done) {
          if (i(I, wn), wr()) {
            var Gr = Rr;
            Zu(I, Gr);
          }
          return Mn;
        }
        if (wn === null) {
          for (; !da.done; Rr++, da = Et.next()) {
            var Hl = z(I, da.value, le);
            Hl !== null && (Wr = h(Hl, Wr, Rr), Ct === null ? Mn = Hl : Ct.sibling = Hl, Ct = Hl);
          }
          if (wr()) {
            var dd = Rr;
            Zu(I, dd);
          }
          return Mn;
        }
        for (var Ph = s(I, wn); !da.done; Rr++, da = Et.next()) {
          var $o = V(Ph, I, Rr, da.value, le);
          $o !== null && (e && $o.alternate !== null && Ph.delete($o.key === null ? Rr : $o.key), Wr = h($o, Wr, Rr), Ct === null ? Mn = $o : Ct.sibling = $o, Ct = $o);
        }
        if (e && Ph.forEach(function(e2) {
          return t(I, e2);
        }), wr()) {
          var JN = Rr;
          Zu(I, JN);
        }
        return Mn;
      }
      function Ye(I, Z, Y, le) {
        if (Z !== null && Z.tag === N) {
          i(I, Z.sibling);
          var ke = f(Z, Y);
          return ke.return = I, ke;
        }
        i(I, Z);
        var Ee = wx(Y, I.mode, le);
        return Ee.return = I, Ee;
      }
      function Ae(I, Z, Y, le) {
        for (var ke = Y.key, Ee = Z; Ee !== null; ) {
          if (Ee.key === ke) {
            var Ke = Y.type;
            if (Ke === Va) {
              if (Ee.tag === W) {
                i(I, Ee.sibling);
                var tt = f(Ee, Y.props.children);
                return tt.return = I, tt._debugSource = Y._source, tt._debugOwner = Y._owner, tt;
              }
            } else if (Ee.elementType === Ke || // Keep this check inline so it only runs on the false path:
            t_(Ee, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ke == "object" && Ke !== null && Ke.$$typeof === We && cE(Ke) === Ee.type) {
              i(I, Ee.sibling);
              var At = f(Ee, Y.props);
              return At.ref = uh(I, Ee, Y), At.return = I, At._debugSource = Y._source, At._debugOwner = Y._owner, At;
            }
            i(I, Ee);
            break;
          } else
            t(I, Ee);
          Ee = Ee.sibling;
        }
        if (Y.type === Va) {
          var Et = Ks(Y.props.children, I.mode, le, Y.key);
          return Et.return = I, Et;
        } else {
          var Mn = xx(Y, I.mode, le);
          return Mn.ref = uh(I, Z, Y), Mn.return = I, Mn;
        }
      }
      function yt(I, Z, Y, le) {
        for (var ke = Y.key, Ee = Z; Ee !== null; ) {
          if (Ee.key === ke)
            if (Ee.tag === O && Ee.stateNode.containerInfo === Y.containerInfo && Ee.stateNode.implementation === Y.implementation) {
              i(I, Ee.sibling);
              var Ke = f(Ee, Y.children || []);
              return Ke.return = I, Ke;
            } else {
              i(I, Ee);
              break;
            }
          else
            t(I, Ee);
          Ee = Ee.sibling;
        }
        var tt = bx(Y, I.mode, le);
        return tt.return = I, tt;
      }
      function ht(I, Z, Y, le) {
        var ke = typeof Y == "object" && Y !== null && Y.type === Va && Y.key === null;
        if (ke && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case oo:
              return y(Ae(I, Z, Y, le));
            case ta:
              return y(yt(I, Z, Y, le));
            case We:
              var Ee = Y._payload, Ke = Y._init;
              return ht(I, Z, Ke(Ee), le);
          }
          if (An(Y))
            return K(I, Z, Y, le);
          if (ki(Y))
            return Te(I, Z, Y, le);
          Sg(I, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? y(Ye(I, Z, "" + Y, le)) : (typeof Y == "function" && xg(I), i(I, Z));
      }
      return ht;
    }
    var Kf = fE(!0), dE = fE(!1);
    function IO(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, s = cc(i, i.pendingProps);
        for (t.child = s, s.return = t; i.sibling !== null; )
          i = i.sibling, s = s.sibling = cc(i, i.pendingProps), s.return = t;
        s.sibling = null;
      }
    }
    function YO(e, t) {
      for (var i = e.child; i !== null; )
        gN(i, t), i = i.sibling;
    }
    var ch = {}, Is = As(ch), fh = As(ch), wg = As(ch);
    function bg(e) {
      if (e === ch)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function pE() {
      var e = bg(wg.current);
      return e;
    }
    function qS(e, t) {
      Vr(wg, t, e), Vr(fh, e, e), Vr(Is, ch, e);
      var i = nD(t);
      $r(Is, e), Vr(Is, i, e);
    }
    function Zf(e) {
      $r(Is, e), $r(fh, e), $r(wg, e);
    }
    function KS() {
      var e = bg(Is.current);
      return e;
    }
    function hE(e) {
      bg(wg.current);
      var t = bg(Is.current), i = rD(t, e.type);
      t !== i && (Vr(fh, e, e), Vr(Is, i, e));
    }
    function ZS(e) {
      fh.current === e && ($r(Is, e), $r(fh, e));
    }
    var $O = 0, vE = 1, mE = 1, dh = 2, Qi = As($O);
    function XS(e, t) {
      return (e & t) !== 0;
    }
    function Xf(e) {
      return e & vE;
    }
    function JS(e, t) {
      return e & vE | t;
    }
    function VO(e, t) {
      return e | t;
    }
    function Ys(e, t) {
      Vr(Qi, t, e);
    }
    function Jf(e) {
      $r(Qi, e);
    }
    function BO(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Eg(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === re) {
          var i = t.memoizedState;
          if (i !== null) {
            var s = i.dehydrated;
            if (s === null || Tb(s) || iS(s))
              return t;
          }
        } else if (t.tag === Fe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var f = (t.flags & Xe) !== Ie;
          if (f)
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
    var ja = (
      /*   */
      0
    ), qn = (
      /* */
      1
    ), Ao = (
      /*  */
      2
    ), Kn = (
      /*    */
      4
    ), br = (
      /*   */
      8
    ), e1 = [];
    function t1() {
      for (var e = 0; e < e1.length; e++) {
        var t = e1[e];
        t._workInProgressVersionPrimary = null;
      }
      e1.length = 0;
    }
    function WO(e, t) {
      var i = t._getVersion, s = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, s] : e.mutableSourceEagerHydrationData.push(t, s);
    }
    var _e = l.ReactCurrentDispatcher, ph = l.ReactCurrentBatchConfig, n1, ed;
    n1 = /* @__PURE__ */ new Set();
    var rc = ee, Ut = null, Zn = null, Xn = null, Cg = !1, hh = !1, vh = 0, GO = 0, QO = 25, te = null, Si = null, $s = -1, r1 = !1;
    function Dt() {
      {
        var e = te;
        Si === null ? Si = [e] : Si.push(e);
      }
    }
    function ye() {
      {
        var e = te;
        Si !== null && ($s++, Si[$s] !== e && qO(e));
      }
    }
    function td(e) {
      e != null && !An(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function qO(e) {
      {
        var t = nt(Ut);
        if (!n1.has(t) && (n1.add(t), Si !== null)) {
          for (var i = "", s = 30, f = 0; f <= $s; f++) {
            for (var h = Si[f], y = f === $s ? e : h, x = f + 1 + ". " + h; x.length < s; )
              x += " ";
            x += y + `
`, i += x;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function Br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function a1(e, t) {
      if (r1)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Me(e[i], t[i]))
          return !1;
      return !0;
    }
    function nd(e, t, i, s, f, h) {
      rc = h, Ut = t, Si = e !== null ? e._debugHookTypes : null, $s = -1, r1 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? _e.current = FE : Si !== null ? _e.current = zE : _e.current = AE;
      var y = i(s, f);
      if (hh) {
        var x = 0;
        do {
          if (hh = !1, vh = 0, x >= QO)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          x += 1, r1 = !1, Zn = null, Xn = null, t.updateQueue = null, $s = -1, _e.current = PE, y = i(s, f);
        } while (hh);
      }
      _e.current = zg, t._debugHookTypes = Si;
      var b = Zn !== null && Zn.next !== null;
      if (rc = ee, Ut = null, Zn = null, Xn = null, te = null, Si = null, $s = -1, e !== null && (e.flags & Wn) !== (t.flags & Wn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== Ve && v("Internal React error: Expected static flag was missing. Please notify the React team."), Cg = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function rd() {
      var e = vh !== 0;
      return vh = 0, e;
    }
    function gE(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ve ? t.flags &= ~(sl | zr | Xt | rt) : t.flags &= ~(Xt | rt), e.lanes = Ss(e.lanes, i);
    }
    function yE() {
      if (_e.current = zg, Cg) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Cg = !1;
      }
      rc = ee, Ut = null, Zn = null, Xn = null, Si = null, $s = -1, te = null, ME = !1, hh = !1, vh = 0;
    }
    function zo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Xn === null ? Ut.memoizedState = Xn = e : Xn = Xn.next = e, Xn;
    }
    function xi() {
      var e;
      if (Zn === null) {
        var t = Ut.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Zn.next;
      var i;
      if (Xn === null ? i = Ut.memoizedState : i = Xn.next, i !== null)
        Xn = i, i = Xn.next, Zn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Zn = e;
        var s = {
          memoizedState: Zn.memoizedState,
          baseState: Zn.baseState,
          baseQueue: Zn.baseQueue,
          queue: Zn.queue,
          next: null
        };
        Xn === null ? Ut.memoizedState = Xn = s : Xn = Xn.next = s;
      }
      return Xn;
    }
    function SE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function i1(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function o1(e, t, i) {
      var s = zo(), f;
      i !== void 0 ? f = i(t) : f = t, s.memoizedState = s.baseState = f;
      var h = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      };
      s.queue = h;
      var y = h.dispatch = JO.bind(null, Ut, h);
      return [s.memoizedState, y];
    }
    function l1(e, t, i) {
      var s = xi(), f = s.queue;
      if (f === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var h = Zn, y = h.baseQueue, x = f.pending;
      if (x !== null) {
        if (y !== null) {
          var b = y.next, T = x.next;
          y.next = T, x.next = b;
        }
        h.baseQueue !== y && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), h.baseQueue = y = x, f.pending = null;
      }
      if (y !== null) {
        var R = y.next, z = h.baseState, U = null, V = null, B = null, K = R;
        do {
          var Te = K.lane;
          if (yl(rc, Te)) {
            if (B !== null) {
              var Ae = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                action: K.action,
                hasEagerState: K.hasEagerState,
                eagerState: K.eagerState,
                next: null
              };
              B = B.next = Ae;
            }
            if (K.hasEagerState)
              z = K.eagerState;
            else {
              var yt = K.action;
              z = e(z, yt);
            }
          } else {
            var Ye = {
              lane: Te,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            };
            B === null ? (V = B = Ye, U = z) : B = B.next = Ye, Ut.lanes = at(Ut.lanes, Te), jh(Te);
          }
          K = K.next;
        } while (K !== null && K !== R);
        B === null ? U = z : B.next = V, Me(z, s.memoizedState) || bh(), s.memoizedState = z, s.baseState = U, s.baseQueue = B, f.lastRenderedState = z;
      }
      var ht = f.interleaved;
      if (ht !== null) {
        var I = ht;
        do {
          var Z = I.lane;
          Ut.lanes = at(Ut.lanes, Z), jh(Z), I = I.next;
        } while (I !== ht);
      } else
        y === null && (f.lanes = ee);
      var Y = f.dispatch;
      return [s.memoizedState, Y];
    }
    function s1(e, t, i) {
      var s = xi(), f = s.queue;
      if (f === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var h = f.dispatch, y = f.pending, x = s.memoizedState;
      if (y !== null) {
        f.pending = null;
        var b = y.next, T = b;
        do {
          var R = T.action;
          x = e(x, R), T = T.next;
        } while (T !== b);
        Me(x, s.memoizedState) || bh(), s.memoizedState = x, s.baseQueue === null && (s.baseState = x), f.lastRenderedState = x;
      }
      return [x, h];
    }
    function kP(e, t, i) {
    }
    function RP(e, t, i) {
    }
    function u1(e, t, i) {
      var s = Ut, f = zo(), h, y = wr();
      if (y) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        h = i(), ed || h !== i() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), ed = !0);
      } else {
        if (h = t(), !ed) {
          var x = t();
          Me(h, x) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
        }
        var b = ty();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ju(b, rc) || xE(s, t, h);
      }
      f.memoizedState = h;
      var T = {
        value: h,
        getSnapshot: t
      };
      return f.queue = T, Dg(bE.bind(null, s, T, e), [e]), s.flags |= Xt, mh(qn | br, wE.bind(null, s, T, h, t), void 0, null), h;
    }
    function _g(e, t, i) {
      var s = Ut, f = xi(), h = t();
      if (!ed) {
        var y = t();
        Me(h, y) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
      }
      var x = f.memoizedState, b = !Me(x, h);
      b && (f.memoizedState = h, bh());
      var T = f.queue;
      if (yh(bE.bind(null, s, T, e), [e]), T.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & qn) {
        s.flags |= Xt, mh(qn | br, wE.bind(null, s, T, h, t), void 0, null);
        var R = ty();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ju(R, rc) || xE(s, t, h);
      }
      return h;
    }
    function xE(e, t, i) {
      e.flags |= _u;
      var s = {
        getSnapshot: t,
        value: i
      }, f = Ut.updateQueue;
      if (f === null)
        f = SE(), Ut.updateQueue = f, f.stores = [s];
      else {
        var h = f.stores;
        h === null ? f.stores = [s] : h.push(s);
      }
    }
    function wE(e, t, i, s) {
      t.value = i, t.getSnapshot = s, EE(t) && CE(e);
    }
    function bE(e, t, i) {
      var s = function() {
        EE(t) && CE(e);
      };
      return i(s);
    }
    function EE(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var s = t();
        return !Me(i, s);
      } catch {
        return !0;
      }
    }
    function CE(e) {
      var t = Na(e, qe);
      t !== null && nr(t, e, qe, Ht);
    }
    function Tg(e) {
      var t = zo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: i1,
        lastRenderedState: e
      };
      t.queue = i;
      var s = i.dispatch = eM.bind(null, Ut, i);
      return [t.memoizedState, s];
    }
    function c1(e) {
      return l1(i1);
    }
    function f1(e) {
      return s1(i1);
    }
    function mh(e, t, i, s) {
      var f = {
        tag: e,
        create: t,
        destroy: i,
        deps: s,
        // Circular
        next: null
      }, h = Ut.updateQueue;
      if (h === null)
        h = SE(), Ut.updateQueue = h, h.lastEffect = f.next = f;
      else {
        var y = h.lastEffect;
        if (y === null)
          h.lastEffect = f.next = f;
        else {
          var x = y.next;
          y.next = f, f.next = x, h.lastEffect = f;
        }
      }
      return f;
    }
    function d1(e) {
      var t = zo();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function kg(e) {
      var t = xi();
      return t.memoizedState;
    }
    function gh(e, t, i, s) {
      var f = zo(), h = s === void 0 ? null : s;
      Ut.flags |= e, f.memoizedState = mh(qn | t, i, void 0, h);
    }
    function Rg(e, t, i, s) {
      var f = xi(), h = s === void 0 ? null : s, y = void 0;
      if (Zn !== null) {
        var x = Zn.memoizedState;
        if (y = x.destroy, h !== null) {
          var b = x.deps;
          if (a1(h, b)) {
            f.memoizedState = mh(t, i, y, h);
            return;
          }
        }
      }
      Ut.flags |= e, f.memoizedState = mh(qn | t, i, y, h);
    }
    function Dg(e, t) {
      return (Ut.mode & Ta) !== Ve ? gh(sl | Xt | So, br, e, t) : gh(Xt | So, br, e, t);
    }
    function yh(e, t) {
      return Rg(Xt, br, e, t);
    }
    function p1(e, t) {
      return gh(rt, Ao, e, t);
    }
    function Og(e, t) {
      return Rg(rt, Ao, e, t);
    }
    function h1(e, t) {
      var i = rt;
      return i |= Ar, (Ut.mode & Ta) !== Ve && (i |= zr), gh(i, Kn, e, t);
    }
    function Mg(e, t) {
      return Rg(rt, Kn, e, t);
    }
    function _E(e, t) {
      if (typeof t == "function") {
        var i = t, s = e();
        return i(s), function() {
          i(null);
        };
      } else if (t != null) {
        var f = t;
        f.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(f).join(", ") + "}");
        var h = e();
        return f.current = h, function() {
          f.current = null;
        };
      }
    }
    function v1(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var s = i != null ? i.concat([e]) : null, f = rt;
      return f |= Ar, (Ut.mode & Ta) !== Ve && (f |= zr), gh(f, Kn, _E.bind(null, t, e), s);
    }
    function Lg(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var s = i != null ? i.concat([e]) : null;
      return Rg(rt, Kn, _E.bind(null, t, e), s);
    }
    function KO(e, t) {
    }
    var Ng = KO;
    function m1(e, t) {
      var i = zo(), s = t === void 0 ? null : t;
      return i.memoizedState = [e, s], e;
    }
    function jg(e, t) {
      var i = xi(), s = t === void 0 ? null : t, f = i.memoizedState;
      if (f !== null && s !== null) {
        var h = f[1];
        if (a1(s, h))
          return f[0];
      }
      return i.memoizedState = [e, s], e;
    }
    function g1(e, t) {
      var i = zo(), s = t === void 0 ? null : t, f = e();
      return i.memoizedState = [f, s], f;
    }
    function Ug(e, t) {
      var i = xi(), s = t === void 0 ? null : t, f = i.memoizedState;
      if (f !== null && s !== null) {
        var h = f[1];
        if (a1(s, h))
          return f[0];
      }
      var y = e();
      return i.memoizedState = [y, s], y;
    }
    function y1(e) {
      var t = zo();
      return t.memoizedState = e, e;
    }
    function TE(e) {
      var t = xi(), i = Zn, s = i.memoizedState;
      return RE(t, s, e);
    }
    function kE(e) {
      var t = xi();
      if (Zn === null)
        return t.memoizedState = e, e;
      var i = Zn.memoizedState;
      return RE(t, i, e);
    }
    function RE(e, t, i) {
      var s = !C0(rc);
      if (s) {
        if (!Me(i, t)) {
          var f = Sp();
          Ut.lanes = at(Ut.lanes, f), jh(f), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, bh()), e.memoizedState = i, i;
    }
    function ZO(e, t, i) {
      var s = Ra();
      Rn(fr(s, Qn)), e(!0);
      var f = ph.transition;
      ph.transition = {};
      var h = ph.transition;
      ph.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Rn(s), ph.transition = f, f === null && h._updatedFibers) {
          var y = h._updatedFibers.size;
          y > 10 && m("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), h._updatedFibers.clear();
        }
      }
    }
    function S1() {
      var e = Tg(!1), t = e[0], i = e[1], s = ZO.bind(null, i), f = zo();
      return f.memoizedState = s, [t, s];
    }
    function DE() {
      var e = c1(), t = e[0], i = xi(), s = i.memoizedState;
      return [t, s];
    }
    function OE() {
      var e = f1(), t = e[0], i = xi(), s = i.memoizedState;
      return [t, s];
    }
    var ME = !1;
    function XO() {
      return ME;
    }
    function x1() {
      var e = zo(), t = ty(), i = t.identifierPrefix, s;
      if (wr()) {
        var f = dO();
        s = ":" + i + "R" + f;
        var h = vh++;
        h > 0 && (s += "H" + h.toString(32)), s += ":";
      } else {
        var y = GO++;
        s = ":" + i + "r" + y.toString(32) + ":";
      }
      return e.memoizedState = s, s;
    }
    function Ag() {
      var e = xi(), t = e.memoizedState;
      return t;
    }
    function JO(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var s = Qs(e), f = {
        lane: s,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (LE(e))
        NE(t, f);
      else {
        var h = Kb(e, t, f, s);
        if (h !== null) {
          var y = fa();
          nr(h, e, s, y), jE(h, t, s);
        }
      }
      UE(e, s);
    }
    function eM(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var s = Qs(e), f = {
        lane: s,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (LE(e))
        NE(t, f);
      else {
        var h = e.alternate;
        if (e.lanes === ee && (h === null || h.lanes === ee)) {
          var y = t.lastRenderedReducer;
          if (y !== null) {
            var x;
            x = _e.current, _e.current = qi;
            try {
              var b = t.lastRenderedState, T = y(b, i);
              if (f.hasEagerState = !0, f.eagerState = T, Me(T, b)) {
                LO(e, t, f, s);
                return;
              }
            } catch {
            } finally {
              _e.current = x;
            }
          }
        }
        var R = Kb(e, t, f, s);
        if (R !== null) {
          var z = fa();
          nr(R, e, s, z), jE(R, t, s);
        }
      }
      UE(e, s);
    }
    function LE(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function NE(e, t) {
      hh = Cg = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function jE(e, t, i) {
      if (yp(i)) {
        var s = t.lanes;
        s = xp(s, e.pendingLanes);
        var f = at(s, i);
        t.lanes = f, xs(e, f);
      }
    }
    function UE(e, t, i) {
      _o(e, t);
    }
    var zg = {
      readContext: $n,
      useCallback: Br,
      useContext: Br,
      useEffect: Br,
      useImperativeHandle: Br,
      useInsertionEffect: Br,
      useLayoutEffect: Br,
      useMemo: Br,
      useReducer: Br,
      useRef: Br,
      useState: Br,
      useDebugValue: Br,
      useDeferredValue: Br,
      useTransition: Br,
      useMutableSource: Br,
      useSyncExternalStore: Br,
      useId: Br,
      unstable_isNewReconciler: he
    }, AE = null, zE = null, FE = null, PE = null, Fo = null, qi = null, Fg = null;
    {
      var w1 = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, et = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      AE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Dt(), td(t), m1(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Dt(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Dt(), td(t), Dg(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", Dt(), td(i), v1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Dt(), td(t), p1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Dt(), td(t), h1(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Dt(), td(t);
          var i = _e.current;
          _e.current = Fo;
          try {
            return g1(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", Dt();
          var s = _e.current;
          _e.current = Fo;
          try {
            return o1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", Dt(), d1(e);
        },
        useState: function(e) {
          te = "useState", Dt();
          var t = _e.current;
          _e.current = Fo;
          try {
            return Tg(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Dt(), y1(e);
        },
        useTransition: function() {
          return te = "useTransition", Dt(), S1();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", Dt(), u1(e, t, i);
        },
        useId: function() {
          return te = "useId", Dt(), x1();
        },
        unstable_isNewReconciler: he
      }, zE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ye(), m1(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ye(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ye(), Dg(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", ye(), v1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ye(), p1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ye(), h1(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ye();
          var i = _e.current;
          _e.current = Fo;
          try {
            return g1(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", ye();
          var s = _e.current;
          _e.current = Fo;
          try {
            return o1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", ye(), d1(e);
        },
        useState: function(e) {
          te = "useState", ye();
          var t = _e.current;
          _e.current = Fo;
          try {
            return Tg(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ye(), y1(e);
        },
        useTransition: function() {
          return te = "useTransition", ye(), S1();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", ye(), u1(e, t, i);
        },
        useId: function() {
          return te = "useId", ye(), x1();
        },
        unstable_isNewReconciler: he
      }, FE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ye(), jg(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ye(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", ye(), Lg(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ye();
          var i = _e.current;
          _e.current = qi;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", ye();
          var s = _e.current;
          _e.current = qi;
          try {
            return l1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", ye(), kg();
        },
        useState: function(e) {
          te = "useState", ye();
          var t = _e.current;
          _e.current = qi;
          try {
            return c1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ye(), Ng();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ye(), TE(e);
        },
        useTransition: function() {
          return te = "useTransition", ye(), DE();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", ye(), _g(e, t);
        },
        useId: function() {
          return te = "useId", ye(), Ag();
        },
        unstable_isNewReconciler: he
      }, PE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ye(), jg(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ye(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", ye(), Lg(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ye();
          var i = _e.current;
          _e.current = Fg;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", ye();
          var s = _e.current;
          _e.current = Fg;
          try {
            return s1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", ye(), kg();
        },
        useState: function(e) {
          te = "useState", ye();
          var t = _e.current;
          _e.current = Fg;
          try {
            return f1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ye(), Ng();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ye(), kE(e);
        },
        useTransition: function() {
          return te = "useTransition", ye(), OE();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", ye(), _g(e, t);
        },
        useId: function() {
          return te = "useId", ye(), Ag();
        },
        unstable_isNewReconciler: he
      }, Fo = {
        readContext: function(e) {
          return w1(), $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", et(), Dt(), m1(e, t);
        },
        useContext: function(e) {
          return te = "useContext", et(), Dt(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", et(), Dt(), Dg(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", et(), Dt(), v1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", et(), Dt(), p1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", et(), Dt(), h1(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", et(), Dt();
          var i = _e.current;
          _e.current = Fo;
          try {
            return g1(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", et(), Dt();
          var s = _e.current;
          _e.current = Fo;
          try {
            return o1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", et(), Dt(), d1(e);
        },
        useState: function(e) {
          te = "useState", et(), Dt();
          var t = _e.current;
          _e.current = Fo;
          try {
            return Tg(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", et(), Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", et(), Dt(), y1(e);
        },
        useTransition: function() {
          return te = "useTransition", et(), Dt(), S1();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", et(), Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", et(), Dt(), u1(e, t, i);
        },
        useId: function() {
          return te = "useId", et(), Dt(), x1();
        },
        unstable_isNewReconciler: he
      }, qi = {
        readContext: function(e) {
          return w1(), $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", et(), ye(), jg(e, t);
        },
        useContext: function(e) {
          return te = "useContext", et(), ye(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", et(), ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", et(), ye(), Lg(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", et(), ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", et(), ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", et(), ye();
          var i = _e.current;
          _e.current = qi;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", et(), ye();
          var s = _e.current;
          _e.current = qi;
          try {
            return l1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", et(), ye(), kg();
        },
        useState: function(e) {
          te = "useState", et(), ye();
          var t = _e.current;
          _e.current = qi;
          try {
            return c1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", et(), ye(), Ng();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", et(), ye(), TE(e);
        },
        useTransition: function() {
          return te = "useTransition", et(), ye(), DE();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", et(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", et(), ye(), _g(e, t);
        },
        useId: function() {
          return te = "useId", et(), ye(), Ag();
        },
        unstable_isNewReconciler: he
      }, Fg = {
        readContext: function(e) {
          return w1(), $n(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", et(), ye(), jg(e, t);
        },
        useContext: function(e) {
          return te = "useContext", et(), ye(), $n(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", et(), ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return te = "useImperativeHandle", et(), ye(), Lg(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", et(), ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", et(), ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", et(), ye();
          var i = _e.current;
          _e.current = qi;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          te = "useReducer", et(), ye();
          var s = _e.current;
          _e.current = qi;
          try {
            return s1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return te = "useRef", et(), ye(), kg();
        },
        useState: function(e) {
          te = "useState", et(), ye();
          var t = _e.current;
          _e.current = qi;
          try {
            return f1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", et(), ye(), Ng();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", et(), ye(), kE(e);
        },
        useTransition: function() {
          return te = "useTransition", et(), ye(), OE();
        },
        useMutableSource: function(e, t, i) {
          return te = "useMutableSource", et(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return te = "useSyncExternalStore", et(), ye(), _g(e, t);
        },
        useId: function() {
          return te = "useId", et(), ye(), Ag();
        },
        unstable_isNewReconciler: he
      };
    }
    var Vs = o.unstable_now, HE = 0, Pg = -1, Sh = -1, Hg = -1, b1 = !1, Ig = !1;
    function IE() {
      return b1;
    }
    function tM() {
      Ig = !0;
    }
    function nM() {
      b1 = !1, Ig = !1;
    }
    function rM() {
      b1 = Ig, Ig = !1;
    }
    function YE() {
      return HE;
    }
    function $E() {
      HE = Vs();
    }
    function E1(e) {
      Sh = Vs(), e.actualStartTime < 0 && (e.actualStartTime = Vs());
    }
    function VE(e) {
      Sh = -1;
    }
    function Yg(e, t) {
      if (Sh >= 0) {
        var i = Vs() - Sh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Sh = -1;
      }
    }
    function Po(e) {
      if (Pg >= 0) {
        var t = Vs() - Pg;
        Pg = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case D:
              var s = i.stateNode;
              s.effectDuration += t;
              return;
            case se:
              var f = i.stateNode;
              f.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function C1(e) {
      if (Hg >= 0) {
        var t = Vs() - Hg;
        Hg = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case D:
              var s = i.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
            case se:
              var f = i.stateNode;
              f !== null && (f.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function Ho() {
      Pg = Vs();
    }
    function _1() {
      Hg = Vs();
    }
    function T1(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ac(e, t) {
      return {
        value: e,
        source: t,
        stack: Rd(t),
        digest: null
      };
    }
    function k1(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function aM(e, t) {
      return !0;
    }
    function R1(e, t) {
      try {
        var i = aM(e, t);
        if (i === !1)
          return;
        var s = t.value, f = t.source, h = t.stack, y = h !== null ? h : "";
        if (s != null && s._suppressLogging) {
          if (e.tag === _)
            return;
          console.error(s);
        }
        var x = f ? nt(f) : null, b = x ? "The above error occurred in the <" + x + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === D)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = nt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var z = b + `
` + y + `

` + ("" + T);
        console.error(z);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var iM = typeof WeakMap == "function" ? WeakMap : Map;
    function BE(e, t, i) {
      var s = jl(Ht, i);
      s.tag = RS, s.payload = {
        element: null
      };
      var f = t.value;
      return s.callback = function() {
        ZL(f), R1(e, t);
      }, s;
    }
    function D1(e, t, i) {
      var s = jl(Ht, i);
      s.tag = RS;
      var f = e.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var h = t.value;
        s.payload = function() {
          return f(h);
        }, s.callback = function() {
          n_(e), R1(e, t);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (s.callback = function() {
        n_(e), R1(e, t), typeof f != "function" && qL(this);
        var b = t.value, T = t.stack;
        this.componentDidCatch(b, {
          componentStack: T !== null ? T : ""
        }), typeof f != "function" && (Yr(e.lanes, qe) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), s;
    }
    function WE(e, t, i) {
      var s = e.pingCache, f;
      if (s === null ? (s = e.pingCache = new iM(), f = /* @__PURE__ */ new Set(), s.set(t, f)) : (f = s.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(t, f))), !f.has(i)) {
        f.add(i);
        var h = XL.bind(null, e, t, i);
        Gn && Uh(e, i), t.then(h, h);
      }
    }
    function oM(e, t, i, s) {
      var f = e.updateQueue;
      if (f === null) {
        var h = /* @__PURE__ */ new Set();
        h.add(i), e.updateQueue = h;
      } else
        f.add(i);
    }
    function lM(e, t) {
      var i = e.tag;
      if ((e.mode & ct) === Ve && (i === w || i === X || i === J)) {
        var s = e.alternate;
        s ? (e.updateQueue = s.updateQueue, e.memoizedState = s.memoizedState, e.lanes = s.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function GE(e) {
      var t = e;
      do {
        if (t.tag === re && BO(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function QE(e, t, i, s, f) {
      if ((e.mode & ct) === Ve) {
        if (e === t)
          e.flags |= Fn;
        else {
          if (e.flags |= Xe, i.flags |= Tu, i.flags &= ~(Ic | ra), i.tag === _) {
            var h = i.alternate;
            if (h === null)
              i.tag = pe;
            else {
              var y = jl(Ht, qe);
              y.tag = dg, Hs(i, y, qe);
            }
          }
          i.lanes = at(i.lanes, qe);
        }
        return e;
      }
      return e.flags |= Fn, e.lanes = f, e;
    }
    function sM(e, t, i, s, f) {
      if (i.flags |= ra, Gn && Uh(e, f), s !== null && typeof s == "object" && typeof s.then == "function") {
        var h = s;
        lM(i), wr() && i.mode & ct && Fb();
        var y = GE(t);
        if (y !== null) {
          y.flags &= ~sn, QE(y, t, i, e, f), y.mode & ct && WE(e, h, f), oM(y, e, h);
          return;
        } else {
          if (!ys(f)) {
            WE(e, h, f), sx();
            return;
          }
          var x = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          s = x;
        }
      } else if (wr() && i.mode & ct) {
        Fb();
        var b = GE(t);
        if (b !== null) {
          (b.flags & Fn) === Ie && (b.flags |= sn), QE(b, t, i, e, f), wS(ac(s, i));
          return;
        }
      }
      s = ac(s, i), IL(s);
      var T = t;
      do {
        switch (T.tag) {
          case D: {
            var R = s;
            T.flags |= Fn;
            var z = kn(f);
            T.lanes = at(T.lanes, z);
            var U = BE(T, R, z);
            MS(T, U);
            return;
          }
          case _:
            var V = s, B = T.type, K = T.stateNode;
            if ((T.flags & Xe) === Ie && (typeof B.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !GC(K))) {
              T.flags |= Fn;
              var Te = kn(f);
              T.lanes = at(T.lanes, Te);
              var Ye = D1(T, V, Te);
              MS(T, Ye);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function uM() {
      return null;
    }
    var xh = l.ReactCurrentOwner, Ki = !1, O1, wh, M1, L1, N1, ic, j1, $g;
    O1 = {}, wh = {}, M1 = {}, L1 = {}, N1 = {}, ic = !1, j1 = {}, $g = {};
    function ua(e, t, i, s) {
      e === null ? t.child = dE(t, null, i, s) : t.child = Kf(t, e.child, i, s);
    }
    function cM(e, t, i, s) {
      t.child = Kf(t, e.child, null, s), t.child = Kf(t, null, i, s);
    }
    function qE(e, t, i, s, f) {
      if (t.type !== t.elementType) {
        var h = i.propTypes;
        h && Vi(
          h,
          s,
          // Resolved props
          "prop",
          Ft(i)
        );
      }
      var y = i.render, x = t.ref, b, T;
      qf(t, f), Co(t);
      {
        if (xh.current = t, Ga(!0), b = nd(e, t, y, s, x, f), T = rd(), t.mode & nn) {
          Tn(!0);
          try {
            b = nd(e, t, y, s, x, f), T = rd();
          } finally {
            Tn(!1);
          }
        }
        Ga(!1);
      }
      return ul(), e !== null && !Ki ? (gE(e, t, f), Ul(e, t, f)) : (wr() && T && vS(t), t.flags |= go, ua(e, t, b, f), t.child);
    }
    function KE(e, t, i, s, f) {
      if (e === null) {
        var h = i.type;
        if (vN(h) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var y = h;
          return y = fd(h), t.tag = J, t.type = y, z1(t, h), ZE(e, t, y, s, f);
        }
        {
          var x = h.propTypes;
          x && Vi(
            x,
            s,
            // Resolved props
            "prop",
            Ft(h)
          );
        }
        var b = Sx(i.type, null, s, t, t.mode, f);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var T = i.type, R = T.propTypes;
        R && Vi(
          R,
          s,
          // Resolved props
          "prop",
          Ft(T)
        );
      }
      var z = e.child, U = $1(e, f);
      if (!U) {
        var V = z.memoizedProps, B = i.compare;
        if (B = B !== null ? B : ze, B(V, s) && e.ref === t.ref)
          return Ul(e, t, f);
      }
      t.flags |= go;
      var K = cc(z, s);
      return K.ref = t.ref, K.return = t, t.child = K, K;
    }
    function ZE(e, t, i, s, f) {
      if (t.type !== t.elementType) {
        var h = t.elementType;
        if (h.$$typeof === We) {
          var y = h, x = y._payload, b = y._init;
          try {
            h = b(x);
          } catch {
            h = null;
          }
          var T = h && h.propTypes;
          T && Vi(
            T,
            s,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(h)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (ze(R, s) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ki = !1, t.pendingProps = s = R, $1(e, f))
            (e.flags & Tu) !== Ie && (Ki = !0);
          else
            return t.lanes = e.lanes, Ul(e, t, f);
      }
      return U1(e, t, i, s, f);
    }
    function XE(e, t, i) {
      var s = t.pendingProps, f = s.children, h = e !== null ? e.memoizedState : null;
      if (s.mode === "hidden" || be)
        if ((t.mode & ct) === Ve) {
          var y = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = y, ny(t, i);
        } else if (Yr(i, Ir)) {
          var z = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var U = h !== null ? h.baseLanes : i;
          ny(t, U);
        } else {
          var x = null, b;
          if (h !== null) {
            var T = h.baseLanes;
            b = at(T, i);
          } else
            b = i;
          t.lanes = t.childLanes = Ir;
          var R = {
            baseLanes: b,
            cachePool: x,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, ny(t, b), null;
        }
      else {
        var V;
        h !== null ? (V = at(h.baseLanes, i), t.memoizedState = null) : V = i, ny(t, V);
      }
      return ua(e, t, f, i), t.child;
    }
    function fM(e, t, i) {
      var s = t.pendingProps;
      return ua(e, t, s, i), t.child;
    }
    function dM(e, t, i) {
      var s = t.pendingProps.children;
      return ua(e, t, s, i), t.child;
    }
    function pM(e, t, i) {
      {
        t.flags |= rt;
        {
          var s = t.stateNode;
          s.effectDuration = 0, s.passiveEffectDuration = 0;
        }
      }
      var f = t.pendingProps, h = f.children;
      return ua(e, t, h, i), t.child;
    }
    function JE(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= Ur, t.flags |= rp);
    }
    function U1(e, t, i, s, f) {
      if (t.type !== t.elementType) {
        var h = i.propTypes;
        h && Vi(
          h,
          s,
          // Resolved props
          "prop",
          Ft(i)
        );
      }
      var y;
      {
        var x = $f(t, i, !0);
        y = Vf(t, x);
      }
      var b, T;
      qf(t, f), Co(t);
      {
        if (xh.current = t, Ga(!0), b = nd(e, t, i, s, y, f), T = rd(), t.mode & nn) {
          Tn(!0);
          try {
            b = nd(e, t, i, s, y, f), T = rd();
          } finally {
            Tn(!1);
          }
        }
        Ga(!1);
      }
      return ul(), e !== null && !Ki ? (gE(e, t, f), Ul(e, t, f)) : (wr() && T && vS(t), t.flags |= go, ua(e, t, b, f), t.child);
    }
    function eC(e, t, i, s, f) {
      {
        switch (ON(t)) {
          case !1: {
            var h = t.stateNode, y = t.type, x = new y(t.memoizedProps, h.context), b = x.state;
            h.updater.enqueueSetState(h, b, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= Fn;
            var T = new Error("Simulated error coming from DevTools"), R = kn(f);
            t.lanes = at(t.lanes, R);
            var z = D1(t, ac(T, t), R);
            MS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = i.propTypes;
          U && Vi(
            U,
            s,
            // Resolved props
            "prop",
            Ft(i)
          );
        }
      }
      var V;
      Uo(i) ? (V = !0, tg(t)) : V = !1, qf(t, f);
      var B = t.stateNode, K;
      B === null ? (Bg(e, t), lE(t, i, s), $S(t, i, s, f), K = !0) : e === null ? K = PO(t, i, s, f) : K = HO(e, t, i, s, f);
      var Te = A1(e, t, i, K, V, f);
      {
        var Ye = t.stateNode;
        K && Ye.props !== s && (ic || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), ic = !0);
      }
      return Te;
    }
    function A1(e, t, i, s, f, h) {
      JE(e, t);
      var y = (t.flags & Xe) !== Ie;
      if (!s && !y)
        return f && jb(t, i, !1), Ul(e, t, h);
      var x = t.stateNode;
      xh.current = t;
      var b;
      if (y && typeof i.getDerivedStateFromError != "function")
        b = null, VE();
      else {
        Co(t);
        {
          if (Ga(!0), b = x.render(), t.mode & nn) {
            Tn(!0);
            try {
              x.render();
            } finally {
              Tn(!1);
            }
          }
          Ga(!1);
        }
        ul();
      }
      return t.flags |= go, e !== null && y ? cM(e, t, b, h) : ua(e, t, b, h), t.memoizedState = x.state, f && jb(t, i, !0), t.child;
    }
    function tC(e) {
      var t = e.stateNode;
      t.pendingContext ? Lb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lb(e, t.context, !1), qS(e, t.containerInfo);
    }
    function hM(e, t, i) {
      if (tC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var s = t.pendingProps, f = t.memoizedState, h = f.element;
      Jb(e, t), mg(t, s, null, i);
      var y = t.memoizedState;
      t.stateNode;
      var x = y.element;
      if (f.isDehydrated) {
        var b = {
          element: x,
          isDehydrated: !1,
          cache: y.cache,
          pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
          transitions: y.transitions
        }, T = t.updateQueue;
        if (T.baseState = b, t.memoizedState = b, t.flags & sn) {
          var R = ac(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return nC(e, t, x, i, R);
        } else if (x !== h) {
          var z = ac(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return nC(e, t, x, i, z);
        } else {
          yO(t);
          var U = dE(t, null, x, i);
          t.child = U;
          for (var V = U; V; )
            V.flags = V.flags & ~Bt | Ea, V = V.sibling;
        }
      } else {
        if (Gf(), x === h)
          return Ul(e, t, i);
        ua(e, t, x, i);
      }
      return t.child;
    }
    function nC(e, t, i, s, f) {
      return Gf(), wS(f), t.flags |= sn, ua(e, t, i, s), t.child;
    }
    function vM(e, t, i) {
      hE(t), e === null && xS(t);
      var s = t.type, f = t.pendingProps, h = e !== null ? e.memoizedProps : null, y = f.children, x = tS(s, f);
      return x ? y = null : h !== null && tS(s, h) && (t.flags |= Rt), JE(e, t), ua(e, t, y, i), t.child;
    }
    function mM(e, t) {
      return e === null && xS(t), null;
    }
    function gM(e, t, i, s) {
      Bg(e, t);
      var f = t.pendingProps, h = i, y = h._payload, x = h._init, b = x(y);
      t.type = b;
      var T = t.tag = mN(b), R = Gi(b, f), z;
      switch (T) {
        case w:
          return z1(t, b), t.type = b = fd(b), z = U1(null, t, b, R, s), z;
        case _:
          return t.type = b = px(b), z = eC(null, t, b, R, s), z;
        case X:
          return t.type = b = hx(b), z = qE(null, t, b, R, s), z;
        case G: {
          if (t.type !== t.elementType) {
            var U = b.propTypes;
            U && Vi(
              U,
              R,
              // Resolved for outer only
              "prop",
              Ft(b)
            );
          }
          return z = KE(
            null,
            t,
            b,
            Gi(b.type, R),
            // The inner type can have defaults too
            s
          ), z;
        }
      }
      var V = "";
      throw b !== null && typeof b == "object" && b.$$typeof === We && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function yM(e, t, i, s, f) {
      Bg(e, t), t.tag = _;
      var h;
      return Uo(i) ? (h = !0, tg(t)) : h = !1, qf(t, f), lE(t, i, s), $S(t, i, s, f), A1(null, t, i, !0, h, f);
    }
    function SM(e, t, i, s) {
      Bg(e, t);
      var f = t.pendingProps, h;
      {
        var y = $f(t, i, !1);
        h = Vf(t, y);
      }
      qf(t, s);
      var x, b;
      Co(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var T = Ft(i) || "Unknown";
          O1[T] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), O1[T] = !0);
        }
        t.mode & nn && Wi.recordLegacyContextWarning(t, null), Ga(!0), xh.current = t, x = nd(null, t, i, f, h, s), b = rd(), Ga(!1);
      }
      if (ul(), t.flags |= go, typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) {
        var R = Ft(i) || "Unknown";
        wh[R] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), wh[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0
      ) {
        {
          var z = Ft(i) || "Unknown";
          wh[z] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), wh[z] = !0);
        }
        t.tag = _, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return Uo(i) ? (U = !0, tg(t)) : U = !1, t.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null, OS(t), oE(t, x), $S(t, i, f, s), A1(null, t, i, !0, U, s);
      } else {
        if (t.tag = w, t.mode & nn) {
          Tn(!0);
          try {
            x = nd(null, t, i, f, h, s), b = rd();
          } finally {
            Tn(!1);
          }
        }
        return wr() && b && vS(t), ua(null, t, x, s), z1(t, i), t.child;
      }
    }
    function z1(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", s = Sa();
          s && (i += `

Check the render method of \`` + s + "`.");
          var f = s || "", h = e._debugSource;
          h && (f = h.fileName + ":" + h.lineNumber), N1[f] || (N1[f] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Ft(t) || "Unknown";
          L1[y] || (v("%s: Function components do not support getDerivedStateFromProps.", y), L1[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var x = Ft(t) || "Unknown";
          M1[x] || (v("%s: Function components do not support contextType.", x), M1[x] = !0);
        }
      }
    }
    var F1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: mt
    };
    function P1(e) {
      return {
        baseLanes: e,
        cachePool: uM(),
        transitions: null
      };
    }
    function xM(e, t) {
      var i = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function wM(e, t, i, s) {
      if (t !== null) {
        var f = t.memoizedState;
        if (f === null)
          return !1;
      }
      return XS(e, dh);
    }
    function bM(e, t) {
      return Ss(e.childLanes, t);
    }
    function rC(e, t, i) {
      var s = t.pendingProps;
      MN(t) && (t.flags |= Xe);
      var f = Qi.current, h = !1, y = (t.flags & Xe) !== Ie;
      if (y || wM(f, e) ? (h = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (f = VO(f, mE)), f = Xf(f), Ys(t, f), e === null) {
        xS(t);
        var x = t.memoizedState;
        if (x !== null) {
          var b = x.dehydrated;
          if (b !== null)
            return kM(t, b);
        }
        var T = s.children, R = s.fallback;
        if (h) {
          var z = EM(t, T, R, i), U = t.child;
          return U.memoizedState = P1(i), t.memoizedState = F1, z;
        } else
          return H1(t, T);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var B = V.dehydrated;
          if (B !== null)
            return RM(e, t, y, s, B, V, i);
        }
        if (h) {
          var K = s.fallback, Te = s.children, Ye = _M(e, t, Te, K, i), Ae = t.child, yt = e.child.memoizedState;
          return Ae.memoizedState = yt === null ? P1(i) : xM(yt, i), Ae.childLanes = bM(e, i), t.memoizedState = F1, Ye;
        } else {
          var ht = s.children, I = CM(e, t, ht, i);
          return t.memoizedState = null, I;
        }
      }
    }
    function H1(e, t, i) {
      var s = e.mode, f = {
        mode: "visible",
        children: t
      }, h = I1(f, s);
      return h.return = e, e.child = h, h;
    }
    function EM(e, t, i, s) {
      var f = e.mode, h = e.child, y = {
        mode: "hidden",
        children: t
      }, x, b;
      return (f & ct) === Ve && h !== null ? (x = h, x.childLanes = ee, x.pendingProps = y, e.mode & Ge && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = 0, x.treeBaseDuration = 0), b = Ks(i, f, s, null)) : (x = I1(y, f), b = Ks(i, f, s, null)), x.return = e, b.return = e, x.sibling = b, e.child = x, b;
    }
    function I1(e, t, i) {
      return a_(e, t, ee, null);
    }
    function aC(e, t) {
      return cc(e, t);
    }
    function CM(e, t, i, s) {
      var f = e.child, h = f.sibling, y = aC(f, {
        mode: "visible",
        children: i
      });
      if ((t.mode & ct) === Ve && (y.lanes = s), y.return = t, y.sibling = null, h !== null) {
        var x = t.deletions;
        x === null ? (t.deletions = [h], t.flags |= kt) : x.push(h);
      }
      return t.child = y, y;
    }
    function _M(e, t, i, s, f) {
      var h = t.mode, y = e.child, x = y.sibling, b = {
        mode: "hidden",
        children: i
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (h & ct) === Ve && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var R = t.child;
        T = R, T.childLanes = ee, T.pendingProps = b, t.mode & Ge && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = y.selfBaseDuration, T.treeBaseDuration = y.treeBaseDuration), t.deletions = null;
      } else
        T = aC(y, b), T.subtreeFlags = y.subtreeFlags & Wn;
      var z;
      return x !== null ? z = cc(x, s) : (z = Ks(s, h, f, null), z.flags |= Bt), z.return = t, T.return = t, T.sibling = z, t.child = T, z;
    }
    function Vg(e, t, i, s) {
      s !== null && wS(s), Kf(t, e.child, null, i);
      var f = t.pendingProps, h = f.children, y = H1(t, h);
      return y.flags |= Bt, t.memoizedState = null, y;
    }
    function TM(e, t, i, s, f) {
      var h = t.mode, y = {
        mode: "visible",
        children: i
      }, x = I1(y, h), b = Ks(s, h, f, null);
      return b.flags |= Bt, x.return = t, b.return = t, x.sibling = b, t.child = x, (t.mode & ct) !== Ve && Kf(t, e.child, null, f), b;
    }
    function kM(e, t, i) {
      return (e.mode & ct) === Ve ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : iS(t) ? e.lanes = dl : e.lanes = Ir, null;
    }
    function RM(e, t, i, s, f, h, y) {
      if (i)
        if (t.flags & sn) {
          t.flags &= ~sn;
          var I = k1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Vg(e, t, y, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var Z = s.children, Y = s.fallback, le = TM(e, t, Z, Y, y), ke = t.child;
          return ke.memoizedState = P1(y), t.memoizedState = F1, le;
        }
      else {
        if (mO(), (t.mode & ct) === Ve)
          return Vg(
            e,
            t,
            y,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (iS(f)) {
          var x, b, T;
          {
            var R = ND(f);
            x = R.digest, b = R.message, T = R.stack;
          }
          var z;
          b ? z = new Error(b) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = k1(z, x, T);
          return Vg(e, t, y, U);
        }
        var V = Yr(y, e.childLanes);
        if (Ki || V) {
          var B = ty();
          if (B !== null) {
            var K = T0(B, y);
            if (K !== mt && K !== h.retryLane) {
              h.retryLane = K;
              var Te = Ht;
              Na(e, K), nr(B, e, K, Te);
            }
          }
          sx();
          var Ye = k1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Vg(e, t, y, Ye);
        } else if (Tb(f)) {
          t.flags |= Xe, t.child = e.child;
          var Ae = JL.bind(null, e);
          return jD(f, Ae), null;
        } else {
          SO(t, f, h.treeContext);
          var yt = s.children, ht = H1(t, yt);
          return ht.flags |= Ea, ht;
        }
      }
    }
    function iC(e, t, i) {
      e.lanes = at(e.lanes, t);
      var s = e.alternate;
      s !== null && (s.lanes = at(s.lanes, t)), TS(e.return, t, i);
    }
    function DM(e, t, i) {
      for (var s = t; s !== null; ) {
        if (s.tag === re) {
          var f = s.memoizedState;
          f !== null && iC(s, i, e);
        } else if (s.tag === Fe)
          iC(s, i, e);
        else if (s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === e)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === e)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }
    function OM(e) {
      for (var t = e, i = null; t !== null; ) {
        var s = t.alternate;
        s !== null && Eg(s) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function MM(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !j1[e])
        if (j1[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function LM(e, t) {
      e !== void 0 && !$g[e] && (e !== "collapsed" && e !== "hidden" ? ($g[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && ($g[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function oC(e, t) {
      {
        var i = An(e), s = !i && typeof ki(e) == "function";
        if (i || s) {
          var f = i ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", f, t, f), !1;
        }
      }
      return !0;
    }
    function NM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (An(e)) {
          for (var i = 0; i < e.length; i++)
            if (!oC(e[i], i))
              return;
        } else {
          var s = ki(e);
          if (typeof s == "function") {
            var f = s.call(e);
            if (f)
              for (var h = f.next(), y = 0; !h.done; h = f.next()) {
                if (!oC(h.value, y))
                  return;
                y++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Y1(e, t, i, s, f) {
      var h = e.memoizedState;
      h === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: i,
        tailMode: f
      } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = i, h.tailMode = f);
    }
    function lC(e, t, i) {
      var s = t.pendingProps, f = s.revealOrder, h = s.tail, y = s.children;
      MM(f), LM(h, f), NM(y, f), ua(e, t, y, i);
      var x = Qi.current, b = XS(x, dh);
      if (b)
        x = JS(x, dh), t.flags |= Xe;
      else {
        var T = e !== null && (e.flags & Xe) !== Ie;
        T && DM(t, t.child, i), x = Xf(x);
      }
      if (Ys(t, x), (t.mode & ct) === Ve)
        t.memoizedState = null;
      else
        switch (f) {
          case "forwards": {
            var R = OM(t.child), z;
            R === null ? (z = t.child, t.child = null) : (z = R.sibling, R.sibling = null), Y1(
              t,
              !1,
              // isBackwards
              z,
              R,
              h
            );
            break;
          }
          case "backwards": {
            var U = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var B = V.alternate;
              if (B !== null && Eg(B) === null) {
                t.child = V;
                break;
              }
              var K = V.sibling;
              V.sibling = U, U = V, V = K;
            }
            Y1(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              h
            );
            break;
          }
          case "together": {
            Y1(
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
    function jM(e, t, i) {
      qS(t, t.stateNode.containerInfo);
      var s = t.pendingProps;
      return e === null ? t.child = Kf(t, null, s, i) : ua(e, t, s, i), t.child;
    }
    var sC = !1;
    function UM(e, t, i) {
      var s = t.type, f = s._context, h = t.pendingProps, y = t.memoizedProps, x = h.value;
      {
        "value" in h || sC || (sC = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && Vi(b, h, "prop", "Context.Provider");
      }
      if (qb(t, f, x), y !== null) {
        var T = y.value;
        if (Me(T, x)) {
          if (y.children === h.children && !Jm())
            return Ul(e, t, i);
        } else
          DO(t, f, i);
      }
      var R = h.children;
      return ua(e, t, R, i), t.child;
    }
    var uC = !1;
    function AM(e, t, i) {
      var s = t.type;
      s._context === void 0 ? s !== s.Consumer && (uC || (uC = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : s = s._context;
      var f = t.pendingProps, h = f.children;
      typeof h != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, i);
      var y = $n(s);
      Co(t);
      var x;
      return xh.current = t, Ga(!0), x = h(y), Ga(!1), ul(), t.flags |= go, ua(e, t, x, i), t.child;
    }
    function bh() {
      Ki = !0;
    }
    function Bg(e, t) {
      (t.mode & ct) === Ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Bt);
    }
    function Ul(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), VE(), jh(t.lanes), Yr(i, t.childLanes) ? (IO(e, t), t.child) : null;
    }
    function zM(e, t, i) {
      {
        var s = t.return;
        if (s === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === s.child)
          s.child = i;
        else {
          var f = s.child;
          if (f === null)
            throw new Error("Expected parent to have a child.");
          for (; f.sibling !== t; )
            if (f = f.sibling, f === null)
              throw new Error("Expected to find the previous sibling.");
          f.sibling = i;
        }
        var h = s.deletions;
        return h === null ? (s.deletions = [e], s.flags |= kt) : h.push(e), i.flags |= Bt, i;
      }
    }
    function $1(e, t) {
      var i = e.lanes;
      return !!Yr(i, t);
    }
    function FM(e, t, i) {
      switch (t.tag) {
        case D:
          tC(t), t.stateNode, Gf();
          break;
        case F:
          hE(t);
          break;
        case _: {
          var s = t.type;
          Uo(s) && tg(t);
          break;
        }
        case O:
          qS(t, t.stateNode.containerInfo);
          break;
        case q: {
          var f = t.memoizedProps.value, h = t.type._context;
          qb(t, h, f);
          break;
        }
        case se:
          {
            var y = Yr(i, t.childLanes);
            y && (t.flags |= rt);
            {
              var x = t.stateNode;
              x.effectDuration = 0, x.passiveEffectDuration = 0;
            }
          }
          break;
        case re: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return Ys(t, Xf(Qi.current)), t.flags |= Xe, null;
            var T = t.child, R = T.childLanes;
            if (Yr(i, R))
              return rC(e, t, i);
            Ys(t, Xf(Qi.current));
            var z = Ul(e, t, i);
            return z !== null ? z.sibling : null;
          } else
            Ys(t, Xf(Qi.current));
          break;
        }
        case Fe: {
          var U = (e.flags & Xe) !== Ie, V = Yr(i, t.childLanes);
          if (U) {
            if (V)
              return lC(e, t, i);
            t.flags |= Xe;
          }
          var B = t.memoizedState;
          if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), Ys(t, Qi.current), V)
            break;
          return null;
        }
        case Ne:
        case Ze:
          return t.lanes = ee, XE(e, t, i);
      }
      return Ul(e, t, i);
    }
    function cC(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return zM(e, t, Sx(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var s = e.memoizedProps, f = t.pendingProps;
        if (s !== f || Jm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ki = !0;
        else {
          var h = $1(e, i);
          if (!h && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === Ie)
            return Ki = !1, FM(e, t, i);
          (e.flags & Tu) !== Ie ? Ki = !0 : Ki = !1;
        }
      } else if (Ki = !1, wr() && cO(t)) {
        var y = t.index, x = fO();
        zb(t, x, y);
      }
      switch (t.lanes = ee, t.tag) {
        case k:
          return SM(e, t, t.type, i);
        case we: {
          var b = t.elementType;
          return gM(e, t, b, i);
        }
        case w: {
          var T = t.type, R = t.pendingProps, z = t.elementType === T ? R : Gi(T, R);
          return U1(e, t, T, z, i);
        }
        case _: {
          var U = t.type, V = t.pendingProps, B = t.elementType === U ? V : Gi(U, V);
          return eC(e, t, U, B, i);
        }
        case D:
          return hM(e, t, i);
        case F:
          return vM(e, t, i);
        case N:
          return mM(e, t);
        case re:
          return rC(e, t, i);
        case O:
          return jM(e, t, i);
        case X: {
          var K = t.type, Te = t.pendingProps, Ye = t.elementType === K ? Te : Gi(K, Te);
          return qE(e, t, K, Ye, i);
        }
        case W:
          return fM(e, t, i);
        case ue:
          return dM(e, t, i);
        case se:
          return pM(e, t, i);
        case q:
          return UM(e, t, i);
        case de:
          return AM(e, t, i);
        case G: {
          var Ae = t.type, yt = t.pendingProps, ht = Gi(Ae, yt);
          if (t.type !== t.elementType) {
            var I = Ae.propTypes;
            I && Vi(
              I,
              ht,
              // Resolved for outer only
              "prop",
              Ft(Ae)
            );
          }
          return ht = Gi(Ae.type, ht), KE(e, t, Ae, ht, i);
        }
        case J:
          return ZE(e, t, t.type, t.pendingProps, i);
        case pe: {
          var Z = t.type, Y = t.pendingProps, le = t.elementType === Z ? Y : Gi(Z, Y);
          return yM(e, t, Z, le, i);
        }
        case Fe:
          return lC(e, t, i);
        case Qe:
          break;
        case Ne:
          return XE(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ad(e) {
      e.flags |= rt;
    }
    function fC(e) {
      e.flags |= Ur, e.flags |= rp;
    }
    var dC, V1, pC, hC;
    dC = function(e, t, i, s) {
      for (var f = t.child; f !== null; ) {
        if (f.tag === F || f.tag === N)
          lD(e, f.stateNode);
        else if (f.tag !== O) {
          if (f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
        }
        if (f === t)
          return;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === t)
            return;
          f = f.return;
        }
        f.sibling.return = f.return, f = f.sibling;
      }
    }, V1 = function(e, t) {
    }, pC = function(e, t, i, s, f) {
      var h = e.memoizedProps;
      if (h !== s) {
        var y = t.stateNode, x = KS(), b = uD(y, i, h, s, f, x);
        t.updateQueue = b, b && ad(t);
      }
    }, hC = function(e, t, i, s) {
      i !== s && ad(t);
    };
    function Eh(e, t) {
      if (!wr())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, s = null; i !== null; )
              i.alternate !== null && (s = i), i = i.sibling;
            s === null ? e.tail = null : s.sibling = null;
            break;
          }
          case "collapsed": {
            for (var f = e.tail, h = null; f !== null; )
              f.alternate !== null && (h = f), f = f.sibling;
            h === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : h.sibling = null;
            break;
          }
        }
    }
    function Er(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = ee, s = Ie;
      if (t) {
        if ((e.mode & Ge) !== Ve) {
          for (var b = e.selfBaseDuration, T = e.child; T !== null; )
            i = at(i, at(T.lanes, T.childLanes)), s |= T.subtreeFlags & Wn, s |= T.flags & Wn, b += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = b;
        } else
          for (var R = e.child; R !== null; )
            i = at(i, at(R.lanes, R.childLanes)), s |= R.subtreeFlags & Wn, s |= R.flags & Wn, R.return = e, R = R.sibling;
        e.subtreeFlags |= s;
      } else {
        if ((e.mode & Ge) !== Ve) {
          for (var f = e.actualDuration, h = e.selfBaseDuration, y = e.child; y !== null; )
            i = at(i, at(y.lanes, y.childLanes)), s |= y.subtreeFlags, s |= y.flags, f += y.actualDuration, h += y.treeBaseDuration, y = y.sibling;
          e.actualDuration = f, e.treeBaseDuration = h;
        } else
          for (var x = e.child; x !== null; )
            i = at(i, at(x.lanes, x.childLanes)), s |= x.subtreeFlags, s |= x.flags, x.return = e, x = x.sibling;
        e.subtreeFlags |= s;
      }
      return e.childLanes = i, t;
    }
    function PM(e, t, i) {
      if (CO() && (t.mode & ct) !== Ve && (t.flags & Xe) === Ie)
        return Vb(t), Gf(), t.flags |= sn | ra | Fn, !1;
      var s = og(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!s)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (bO(t), Er(t), (t.mode & Ge) !== Ve) {
            var f = i !== null;
            if (f) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Gf(), (t.flags & Xe) === Ie && (t.memoizedState = null), t.flags |= rt, Er(t), (t.mode & Ge) !== Ve) {
            var y = i !== null;
            if (y) {
              var x = t.child;
              x !== null && (t.treeBaseDuration -= x.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Bb(), !0;
    }
    function vC(e, t, i) {
      var s = t.pendingProps;
      switch (mS(t), t.tag) {
        case k:
        case we:
        case J:
        case w:
        case X:
        case W:
        case ue:
        case se:
        case de:
        case G:
          return Er(t), null;
        case _: {
          var f = t.type;
          return Uo(f) && eg(t), Er(t), null;
        }
        case D: {
          var h = t.stateNode;
          if (Zf(t), dS(t), t1(), h.pendingContext && (h.context = h.pendingContext, h.pendingContext = null), e === null || e.child === null) {
            var y = og(t);
            if (y)
              ad(t);
            else if (e !== null) {
              var x = e.memoizedState;
              // Check if this is a client root
              (!x.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & sn) !== Ie) && (t.flags |= ba, Bb());
            }
          }
          return V1(e, t), Er(t), null;
        }
        case F: {
          ZS(t);
          var b = pE(), T = t.type;
          if (e !== null && t.stateNode != null)
            pC(e, t, T, s, b), e.ref !== t.ref && fC(t);
          else {
            if (!s) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Er(t), null;
            }
            var R = KS(), z = og(t);
            if (z)
              xO(t, b, R) && ad(t);
            else {
              var U = oD(T, s, b, R, t);
              dC(U, t, !1, !1), t.stateNode = U, sD(U, T, s, b) && ad(t);
            }
            t.ref !== null && fC(t);
          }
          return Er(t), null;
        }
        case N: {
          var V = s;
          if (e && t.stateNode != null) {
            var B = e.memoizedProps;
            hC(e, t, B, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var K = pE(), Te = KS(), Ye = og(t);
            Ye ? wO(t) && ad(t) : t.stateNode = cD(V, K, Te, t);
          }
          return Er(t), null;
        }
        case re: {
          Jf(t);
          var Ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var yt = PM(e, t, Ae);
            if (!yt)
              return t.flags & Fn ? t : null;
          }
          if ((t.flags & Xe) !== Ie)
            return t.lanes = i, (t.mode & Ge) !== Ve && T1(t), t;
          var ht = Ae !== null, I = e !== null && e.memoizedState !== null;
          if (ht !== I && ht) {
            var Z = t.child;
            if (Z.flags |= yo, (t.mode & ct) !== Ve) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !wt);
              Y || XS(Qi.current, mE) ? HL() : sx();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= rt), Er(t), (t.mode & Ge) !== Ve && ht) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case O:
          return Zf(t), V1(e, t), e === null && rO(t.stateNode.containerInfo), Er(t), null;
        case q:
          var Ee = t.type._context;
          return _S(Ee, t), Er(t), null;
        case pe: {
          var Ke = t.type;
          return Uo(Ke) && eg(t), Er(t), null;
        }
        case Fe: {
          Jf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Er(t), null;
          var At = (t.flags & Xe) !== Ie, Et = tt.rendering;
          if (Et === null)
            if (At)
              Eh(tt, !1);
            else {
              var Mn = YL() && (e === null || (e.flags & Xe) === Ie);
              if (!Mn)
                for (var Ct = t.child; Ct !== null; ) {
                  var wn = Eg(Ct);
                  if (wn !== null) {
                    At = !0, t.flags |= Xe, Eh(tt, !1);
                    var Wr = wn.updateQueue;
                    return Wr !== null && (t.updateQueue = Wr, t.flags |= rt), t.subtreeFlags = Ie, YO(t, i), Ys(t, JS(Qi.current, dh)), t.child;
                  }
                  Ct = Ct.sibling;
                }
              tt.tail !== null && tn() > AC() && (t.flags |= Xe, At = !0, Eh(tt, !1), t.lanes = mp);
            }
          else {
            if (!At) {
              var Rr = Eg(Et);
              if (Rr !== null) {
                t.flags |= Xe, At = !0;
                var ti = Rr.updateQueue;
                if (ti !== null && (t.updateQueue = ti, t.flags |= rt), Eh(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Et.alternate && !wr())
                  return Er(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                tn() * 2 - tt.renderingStartTime > AC() && i !== Ir && (t.flags |= Xe, At = !0, Eh(tt, !1), t.lanes = mp);
            }
            if (tt.isBackwards)
              Et.sibling = t.child, t.child = Et;
            else {
              var da = tt.last;
              da !== null ? da.sibling = Et : t.child = Et, tt.last = Et;
            }
          }
          if (tt.tail !== null) {
            var pa = tt.tail;
            tt.rendering = pa, tt.tail = pa.sibling, tt.renderingStartTime = tn(), pa.sibling = null;
            var Gr = Qi.current;
            return At ? Gr = JS(Gr, dh) : Gr = Xf(Gr), Ys(t, Gr), pa;
          }
          return Er(t), null;
        }
        case Qe:
          break;
        case Ne:
        case Ze: {
          lx(t);
          var Hl = t.memoizedState, dd = Hl !== null;
          if (e !== null) {
            var Ph = e.memoizedState, $o = Ph !== null;
            $o !== dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !be && (t.flags |= yo);
          }
          return !dd || (t.mode & ct) === Ve ? Er(t) : Yr(Yo, Ir) && (Er(t), t.subtreeFlags & (Bt | rt) && (t.flags |= yo)), null;
        }
        case lt:
          return null;
        case st:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function HM(e, t, i) {
      switch (mS(t), t.tag) {
        case _: {
          var s = t.type;
          Uo(s) && eg(t);
          var f = t.flags;
          return f & Fn ? (t.flags = f & ~Fn | Xe, (t.mode & Ge) !== Ve && T1(t), t) : null;
        }
        case D: {
          t.stateNode, Zf(t), dS(t), t1();
          var h = t.flags;
          return (h & Fn) !== Ie && (h & Xe) === Ie ? (t.flags = h & ~Fn | Xe, t) : null;
        }
        case F:
          return ZS(t), null;
        case re: {
          Jf(t);
          var y = t.memoizedState;
          if (y !== null && y.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Gf();
          }
          var x = t.flags;
          return x & Fn ? (t.flags = x & ~Fn | Xe, (t.mode & Ge) !== Ve && T1(t), t) : null;
        }
        case Fe:
          return Jf(t), null;
        case O:
          return Zf(t), null;
        case q:
          var b = t.type._context;
          return _S(b, t), null;
        case Ne:
        case Ze:
          return lx(t), null;
        case lt:
          return null;
        default:
          return null;
      }
    }
    function mC(e, t, i) {
      switch (mS(t), t.tag) {
        case _: {
          var s = t.type.childContextTypes;
          s != null && eg(t);
          break;
        }
        case D: {
          t.stateNode, Zf(t), dS(t), t1();
          break;
        }
        case F: {
          ZS(t);
          break;
        }
        case O:
          Zf(t);
          break;
        case re:
          Jf(t);
          break;
        case Fe:
          Jf(t);
          break;
        case q:
          var f = t.type._context;
          _S(f, t);
          break;
        case Ne:
        case Ze:
          lx(t);
          break;
      }
    }
    var gC = null;
    gC = /* @__PURE__ */ new Set();
    var Wg = !1, Cr = !1, IM = typeof WeakSet == "function" ? WeakSet : Set, Le = null, id = null, od = null;
    function YM(e) {
      ll(null, function() {
        throw e;
      }), tp();
    }
    var $M = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ge)
        try {
          Ho(), t.componentWillUnmount();
        } finally {
          Po(e);
        }
      else
        t.componentWillUnmount();
    };
    function yC(e, t) {
      try {
        Bs(Kn, e);
      } catch (i) {
        qt(e, t, i);
      }
    }
    function B1(e, t, i) {
      try {
        $M(e, i);
      } catch (s) {
        qt(e, t, s);
      }
    }
    function VM(e, t, i) {
      try {
        i.componentDidMount();
      } catch (s) {
        qt(e, t, s);
      }
    }
    function SC(e, t) {
      try {
        wC(e);
      } catch (i) {
        qt(e, t, i);
      }
    }
    function ld(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var s;
          try {
            if (Cn && ha && e.mode & Ge)
              try {
                Ho(), s = i(null);
              } finally {
                Po(e);
              }
            else
              s = i(null);
          } catch (f) {
            qt(e, t, f);
          }
          typeof s == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          i.current = null;
    }
    function Gg(e, t, i) {
      try {
        i();
      } catch (s) {
        qt(e, t, s);
      }
    }
    var xC = !1;
    function BM(e, t) {
      aD(e.containerInfo), Le = t, WM();
      var i = xC;
      return xC = !1, i;
    }
    function WM() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & fs) !== Ie && t !== null ? (t.return = e, Le = t) : GM();
      }
    }
    function GM() {
      for (; Le !== null; ) {
        var e = Le;
        jt(e);
        try {
          QM(e);
        } catch (i) {
          qt(e, e.return, i);
        }
        _n();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function QM(e) {
      var t = e.alternate, i = e.flags;
      if ((i & ba) !== Ie) {
        switch (jt(e), e.tag) {
          case w:
          case X:
          case J:
            break;
          case _: {
            if (t !== null) {
              var s = t.memoizedProps, f = t.memoizedState, h = e.stateNode;
              e.type === e.elementType && !ic && (h.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), h.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var y = h.getSnapshotBeforeUpdate(e.elementType === e.type ? s : Gi(e.type, s), f);
              {
                var x = gC;
                y === void 0 && !x.has(e.type) && (x.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              h.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          }
          case D: {
            {
              var b = e.stateNode;
              DD(b.containerInfo);
            }
            break;
          }
          case F:
          case N:
          case O:
          case pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        _n();
      }
    }
    function Zi(e, t, i) {
      var s = t.updateQueue, f = s !== null ? s.lastEffect : null;
      if (f !== null) {
        var h = f.next, y = h;
        do {
          if ((y.tag & e) === e) {
            var x = y.destroy;
            y.destroy = void 0, x !== void 0 && ((e & br) !== ja ? qc(t) : (e & Kn) !== ja && Kc(t), (e & Ao) !== ja && Ah(!0), Gg(t, i, x), (e & Ao) !== ja && Ah(!1), (e & br) !== ja ? im() : (e & Kn) !== ja && ds());
          }
          y = y.next;
        } while (y !== h);
      }
    }
    function Bs(e, t) {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var f = s.next, h = f;
        do {
          if ((h.tag & e) === e) {
            (e & br) !== ja ? am(t) : (e & Kn) !== ja && om(t);
            var y = h.create;
            (e & Ao) !== ja && Ah(!0), h.destroy = y(), (e & Ao) !== ja && Ah(!1), (e & br) !== ja ? pp() : (e & Kn) !== ja && lm();
            {
              var x = h.destroy;
              if (x !== void 0 && typeof x != "function") {
                var b = void 0;
                (h.tag & Kn) !== Ie ? b = "useLayoutEffect" : (h.tag & Ao) !== Ie ? b = "useInsertionEffect" : b = "useEffect";
                var T = void 0;
                x === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof x.then == "function" ? T = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + x, v("%s must not return anything besides a function, which is used for clean-up.%s", b, T);
              }
            }
          }
          h = h.next;
        } while (h !== f);
      }
    }
    function qM(e, t) {
      if ((t.flags & rt) !== Ie)
        switch (t.tag) {
          case se: {
            var i = t.stateNode.passiveEffectDuration, s = t.memoizedProps, f = s.id, h = s.onPostCommit, y = YE(), x = t.alternate === null ? "mount" : "update";
            IE() && (x = "nested-update"), typeof h == "function" && h(f, x, i, y);
            var b = t.return;
            e:
              for (; b !== null; ) {
                switch (b.tag) {
                  case D:
                    var T = b.stateNode;
                    T.passiveEffectDuration += i;
                    break e;
                  case se:
                    var R = b.stateNode;
                    R.passiveEffectDuration += i;
                    break e;
                }
                b = b.return;
              }
            break;
          }
        }
    }
    function KM(e, t, i, s) {
      if ((i.flags & ur) !== Ie)
        switch (i.tag) {
          case w:
          case X:
          case J: {
            if (!Cr)
              if (i.mode & Ge)
                try {
                  Ho(), Bs(Kn | qn, i);
                } finally {
                  Po(i);
                }
              else
                Bs(Kn | qn, i);
            break;
          }
          case _: {
            var f = i.stateNode;
            if (i.flags & rt && !Cr)
              if (t === null)
                if (i.type === i.elementType && !ic && (f.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), f.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & Ge)
                  try {
                    Ho(), f.componentDidMount();
                  } finally {
                    Po(i);
                  }
                else
                  f.componentDidMount();
              else {
                var h = i.elementType === i.type ? t.memoizedProps : Gi(i.type, t.memoizedProps), y = t.memoizedState;
                if (i.type === i.elementType && !ic && (f.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), f.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & Ge)
                  try {
                    Ho(), f.componentDidUpdate(h, y, f.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Po(i);
                  }
                else
                  f.componentDidUpdate(h, y, f.__reactInternalSnapshotBeforeUpdate);
              }
            var x = i.updateQueue;
            x !== null && (i.type === i.elementType && !ic && (f.props !== i.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), f.state !== i.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), tE(i, x, f));
            break;
          }
          case D: {
            var b = i.updateQueue;
            if (b !== null) {
              var T = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case F:
                    T = i.child.stateNode;
                    break;
                  case _:
                    T = i.child.stateNode;
                    break;
                }
              tE(i, b, T);
            }
            break;
          }
          case F: {
            var R = i.stateNode;
            if (t === null && i.flags & rt) {
              var z = i.type, U = i.memoizedProps;
              vD(R, z, U);
            }
            break;
          }
          case N:
            break;
          case O:
            break;
          case se: {
            {
              var V = i.memoizedProps, B = V.onCommit, K = V.onRender, Te = i.stateNode.effectDuration, Ye = YE(), Ae = t === null ? "mount" : "update";
              IE() && (Ae = "nested-update"), typeof K == "function" && K(i.memoizedProps.id, Ae, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Ye);
              {
                typeof B == "function" && B(i.memoizedProps.id, Ae, Te, Ye), GL(i);
                var yt = i.return;
                e:
                  for (; yt !== null; ) {
                    switch (yt.tag) {
                      case D:
                        var ht = yt.stateNode;
                        ht.effectDuration += Te;
                        break e;
                      case se:
                        var I = yt.stateNode;
                        I.effectDuration += Te;
                        break e;
                    }
                    yt = yt.return;
                  }
              }
            }
            break;
          }
          case re: {
            aL(e, i);
            break;
          }
          case Fe:
          case pe:
          case Qe:
          case Ne:
          case Ze:
          case st:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Cr || i.flags & Ur && wC(i);
    }
    function ZM(e) {
      switch (e.tag) {
        case w:
        case X:
        case J: {
          if (e.mode & Ge)
            try {
              Ho(), yC(e, e.return);
            } finally {
              Po(e);
            }
          else
            yC(e, e.return);
          break;
        }
        case _: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && VM(e, e.return, t), SC(e, e.return);
          break;
        }
        case F: {
          SC(e, e.return);
          break;
        }
      }
    }
    function XM(e, t) {
      for (var i = null, s = e; ; ) {
        if (s.tag === F) {
          if (i === null) {
            i = s;
            try {
              var f = s.stateNode;
              t ? _D(f) : kD(s.stateNode, s.memoizedProps);
            } catch (y) {
              qt(e, e.return, y);
            }
          }
        } else if (s.tag === N) {
          if (i === null)
            try {
              var h = s.stateNode;
              t ? TD(h) : RD(h, s.memoizedProps);
            } catch (y) {
              qt(e, e.return, y);
            }
        } else if (!((s.tag === Ne || s.tag === Ze) && s.memoizedState !== null && s !== e)) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === e)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === e)
            return;
          i === s && (i = null), s = s.return;
        }
        i === s && (i = null), s.sibling.return = s.return, s = s.sibling;
      }
    }
    function wC(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, s;
        switch (e.tag) {
          case F:
            s = i;
            break;
          default:
            s = i;
        }
        if (typeof t == "function") {
          var f;
          if (e.mode & Ge)
            try {
              Ho(), f = t(s);
            } finally {
              Po(e);
            }
          else
            f = t(s);
          typeof f == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = s;
      }
    }
    function JM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function bC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, bC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var i = e.stateNode;
          i !== null && oO(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function eL(e) {
      for (var t = e.return; t !== null; ) {
        if (EC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function EC(e) {
      return e.tag === F || e.tag === D || e.tag === O;
    }
    function CC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || EC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== N && t.tag !== me; ) {
            if (t.flags & Bt || t.child === null || t.tag === O)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Bt))
            return t.stateNode;
        }
    }
    function tL(e) {
      var t = eL(e);
      switch (t.tag) {
        case F: {
          var i = t.stateNode;
          t.flags & Rt && (_b(i), t.flags &= ~Rt);
          var s = CC(e);
          G1(e, s, i);
          break;
        }
        case D:
        case O: {
          var f = t.stateNode.containerInfo, h = CC(e);
          W1(e, h, f);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function W1(e, t, i) {
      var s = e.tag, f = s === F || s === N;
      if (f) {
        var h = e.stateNode;
        t ? wD(i, h, t) : SD(i, h);
      } else if (s !== O) {
        var y = e.child;
        if (y !== null) {
          W1(y, t, i);
          for (var x = y.sibling; x !== null; )
            W1(x, t, i), x = x.sibling;
        }
      }
    }
    function G1(e, t, i) {
      var s = e.tag, f = s === F || s === N;
      if (f) {
        var h = e.stateNode;
        t ? xD(i, h, t) : yD(i, h);
      } else if (s !== O) {
        var y = e.child;
        if (y !== null) {
          G1(y, t, i);
          for (var x = y.sibling; x !== null; )
            G1(x, t, i), x = x.sibling;
        }
      }
    }
    var _r = null, Xi = !1;
    function nL(e, t, i) {
      {
        var s = t;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case F: {
                _r = s.stateNode, Xi = !1;
                break e;
              }
              case D: {
                _r = s.stateNode.containerInfo, Xi = !0;
                break e;
              }
              case O: {
                _r = s.stateNode.containerInfo, Xi = !0;
                break e;
              }
            }
            s = s.return;
          }
        if (_r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        _C(e, t, i), _r = null, Xi = !1;
      }
      JM(i);
    }
    function Ws(e, t, i) {
      for (var s = i.child; s !== null; )
        _C(e, t, s), s = s.sibling;
    }
    function _C(e, t, i) {
      switch (fp(i), i.tag) {
        case F:
          Cr || ld(i, t);
        case N: {
          {
            var s = _r, f = Xi;
            _r = null, Ws(e, t, i), _r = s, Xi = f, _r !== null && (Xi ? ED(_r, i.stateNode) : bD(_r, i.stateNode));
          }
          return;
        }
        case me: {
          _r !== null && (Xi ? CD(_r, i.stateNode) : aS(_r, i.stateNode));
          return;
        }
        case O: {
          {
            var h = _r, y = Xi;
            _r = i.stateNode.containerInfo, Xi = !0, Ws(e, t, i), _r = h, Xi = y;
          }
          return;
        }
        case w:
        case X:
        case G:
        case J: {
          if (!Cr) {
            var x = i.updateQueue;
            if (x !== null) {
              var b = x.lastEffect;
              if (b !== null) {
                var T = b.next, R = T;
                do {
                  var z = R, U = z.destroy, V = z.tag;
                  U !== void 0 && ((V & Ao) !== ja ? Gg(i, t, U) : (V & Kn) !== ja && (Kc(i), i.mode & Ge ? (Ho(), Gg(i, t, U), Po(i)) : Gg(i, t, U), ds())), R = R.next;
                } while (R !== T);
              }
            }
          }
          Ws(e, t, i);
          return;
        }
        case _: {
          if (!Cr) {
            ld(i, t);
            var B = i.stateNode;
            typeof B.componentWillUnmount == "function" && B1(i, t, B);
          }
          Ws(e, t, i);
          return;
        }
        case Qe: {
          Ws(e, t, i);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            i.mode & ct
          ) {
            var K = Cr;
            Cr = K || i.memoizedState !== null, Ws(e, t, i), Cr = K;
          } else
            Ws(e, t, i);
          break;
        }
        default: {
          Ws(e, t, i);
          return;
        }
      }
    }
    function rL(e) {
      e.memoizedState;
    }
    function aL(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var s = t.alternate;
        if (s !== null) {
          var f = s.memoizedState;
          if (f !== null) {
            var h = f.dehydrated;
            h !== null && $D(h);
          }
        }
      }
    }
    function TC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new IM()), t.forEach(function(s) {
          var f = eN.bind(null, e, s);
          if (!i.has(s)) {
            if (i.add(s), Gn)
              if (id !== null && od !== null)
                Uh(od, id);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            s.then(f, f);
          }
        });
      }
    }
    function iL(e, t, i) {
      id = i, od = e, jt(t), kC(t, e), jt(t), id = null, od = null;
    }
    function Ji(e, t, i) {
      var s = t.deletions;
      if (s !== null)
        for (var f = 0; f < s.length; f++) {
          var h = s[f];
          try {
            nL(e, t, h);
          } catch (b) {
            qt(h, t, b);
          }
        }
      var y = r0();
      if (t.subtreeFlags & Fr)
        for (var x = t.child; x !== null; )
          jt(x), kC(x, e), x = x.sibling;
      jt(y);
    }
    function kC(e, t, i) {
      var s = e.alternate, f = e.flags;
      switch (e.tag) {
        case w:
        case X:
        case G:
        case J: {
          if (Ji(t, e), Io(e), f & rt) {
            try {
              Zi(Ao | qn, e, e.return), Bs(Ao | qn, e);
            } catch (Ke) {
              qt(e, e.return, Ke);
            }
            if (e.mode & Ge) {
              try {
                Ho(), Zi(Kn | qn, e, e.return);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
              Po(e);
            } else
              try {
                Zi(Kn | qn, e, e.return);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
          }
          return;
        }
        case _: {
          Ji(t, e), Io(e), f & Ur && s !== null && ld(s, s.return);
          return;
        }
        case F: {
          Ji(t, e), Io(e), f & Ur && s !== null && ld(s, s.return);
          {
            if (e.flags & Rt) {
              var h = e.stateNode;
              try {
                _b(h);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
            }
            if (f & rt) {
              var y = e.stateNode;
              if (y != null) {
                var x = e.memoizedProps, b = s !== null ? s.memoizedProps : x, T = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    mD(y, R, T, b, x, e);
                  } catch (Ke) {
                    qt(e, e.return, Ke);
                  }
              }
            }
          }
          return;
        }
        case N: {
          if (Ji(t, e), Io(e), f & rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, U = e.memoizedProps, V = s !== null ? s.memoizedProps : U;
            try {
              gD(z, V, U);
            } catch (Ke) {
              qt(e, e.return, Ke);
            }
          }
          return;
        }
        case D: {
          if (Ji(t, e), Io(e), f & rt && s !== null) {
            var B = s.memoizedState;
            if (B.isDehydrated)
              try {
                YD(t.containerInfo);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
          }
          return;
        }
        case O: {
          Ji(t, e), Io(e);
          return;
        }
        case re: {
          Ji(t, e), Io(e);
          var K = e.child;
          if (K.flags & yo) {
            var Te = K.stateNode, Ye = K.memoizedState, Ae = Ye !== null;
            if (Te.isHidden = Ae, Ae) {
              var yt = K.alternate !== null && K.alternate.memoizedState !== null;
              yt || PL();
            }
          }
          if (f & rt) {
            try {
              rL(e);
            } catch (Ke) {
              qt(e, e.return, Ke);
            }
            TC(e);
          }
          return;
        }
        case Ne: {
          var ht = s !== null && s.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var I = Cr;
            Cr = I || ht, Ji(t, e), Cr = I;
          } else
            Ji(t, e);
          if (Io(e), f & yo) {
            var Z = e.stateNode, Y = e.memoizedState, le = Y !== null, ke = e;
            if (Z.isHidden = le, le && !ht && (ke.mode & ct) !== Ve) {
              Le = ke;
              for (var Ee = ke.child; Ee !== null; )
                Le = Ee, lL(Ee), Ee = Ee.sibling;
            }
            XM(ke, le);
          }
          return;
        }
        case Fe: {
          Ji(t, e), Io(e), f & rt && TC(e);
          return;
        }
        case Qe:
          return;
        default: {
          Ji(t, e), Io(e);
          return;
        }
      }
    }
    function Io(e) {
      var t = e.flags;
      if (t & Bt) {
        try {
          tL(e);
        } catch (i) {
          qt(e, e.return, i);
        }
        e.flags &= ~Bt;
      }
      t & Ea && (e.flags &= ~Ea);
    }
    function oL(e, t, i) {
      id = i, od = t, Le = e, RC(e, t, i), id = null, od = null;
    }
    function RC(e, t, i) {
      for (var s = (e.mode & ct) !== Ve; Le !== null; ) {
        var f = Le, h = f.child;
        if (f.tag === Ne && s) {
          var y = f.memoizedState !== null, x = y || Wg;
          if (x) {
            Q1(e, t, i);
            continue;
          } else {
            var b = f.alternate, T = b !== null && b.memoizedState !== null, R = T || Cr, z = Wg, U = Cr;
            Wg = x, Cr = R, Cr && !U && (Le = f, sL(f));
            for (var V = h; V !== null; )
              Le = V, RC(
                V,
                // New root; bubble back up to here and stop.
                t,
                i
              ), V = V.sibling;
            Le = f, Wg = z, Cr = U, Q1(e, t, i);
            continue;
          }
        }
        (f.subtreeFlags & ur) !== Ie && h !== null ? (h.return = f, Le = h) : Q1(e, t, i);
      }
    }
    function Q1(e, t, i) {
      for (; Le !== null; ) {
        var s = Le;
        if ((s.flags & ur) !== Ie) {
          var f = s.alternate;
          jt(s);
          try {
            KM(t, f, s, i);
          } catch (y) {
            qt(s, s.return, y);
          }
          _n();
        }
        if (s === e) {
          Le = null;
          return;
        }
        var h = s.sibling;
        if (h !== null) {
          h.return = s.return, Le = h;
          return;
        }
        Le = s.return;
      }
    }
    function lL(e) {
      for (; Le !== null; ) {
        var t = Le, i = t.child;
        switch (t.tag) {
          case w:
          case X:
          case G:
          case J: {
            if (t.mode & Ge)
              try {
                Ho(), Zi(Kn, t, t.return);
              } finally {
                Po(t);
              }
            else
              Zi(Kn, t, t.return);
            break;
          }
          case _: {
            ld(t, t.return);
            var s = t.stateNode;
            typeof s.componentWillUnmount == "function" && B1(t, t.return, s);
            break;
          }
          case F: {
            ld(t, t.return);
            break;
          }
          case Ne: {
            var f = t.memoizedState !== null;
            if (f) {
              DC(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Le = i) : DC(e);
      }
    }
    function DC(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Le = i;
          return;
        }
        Le = t.return;
      }
    }
    function sL(e) {
      for (; Le !== null; ) {
        var t = Le, i = t.child;
        if (t.tag === Ne) {
          var s = t.memoizedState !== null;
          if (s) {
            OC(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Le = i) : OC(e);
      }
    }
    function OC(e) {
      for (; Le !== null; ) {
        var t = Le;
        jt(t);
        try {
          ZM(t);
        } catch (s) {
          qt(t, t.return, s);
        }
        if (_n(), t === e) {
          Le = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Le = i;
          return;
        }
        Le = t.return;
      }
    }
    function uL(e, t, i, s) {
      Le = t, cL(t, e, i, s);
    }
    function cL(e, t, i, s) {
      for (; Le !== null; ) {
        var f = Le, h = f.child;
        (f.subtreeFlags & Ca) !== Ie && h !== null ? (h.return = f, Le = h) : fL(e, t, i, s);
      }
    }
    function fL(e, t, i, s) {
      for (; Le !== null; ) {
        var f = Le;
        if ((f.flags & Xt) !== Ie) {
          jt(f);
          try {
            dL(t, f, i, s);
          } catch (y) {
            qt(f, f.return, y);
          }
          _n();
        }
        if (f === e) {
          Le = null;
          return;
        }
        var h = f.sibling;
        if (h !== null) {
          h.return = f.return, Le = h;
          return;
        }
        Le = f.return;
      }
    }
    function dL(e, t, i, s) {
      switch (t.tag) {
        case w:
        case X:
        case J: {
          if (t.mode & Ge) {
            _1();
            try {
              Bs(br | qn, t);
            } finally {
              C1(t);
            }
          } else
            Bs(br | qn, t);
          break;
        }
      }
    }
    function pL(e) {
      Le = e, hL();
    }
    function hL() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & kt) !== Ie) {
          var i = e.deletions;
          if (i !== null) {
            for (var s = 0; s < i.length; s++) {
              var f = i[s];
              Le = f, gL(f, e);
            }
            {
              var h = e.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var x = y.sibling;
                    y.sibling = null, y = x;
                  } while (y !== null);
                }
              }
            }
            Le = e;
          }
        }
        (e.subtreeFlags & Ca) !== Ie && t !== null ? (t.return = e, Le = t) : vL();
      }
    }
    function vL() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Xt) !== Ie && (jt(e), mL(e), _n());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function mL(e) {
      switch (e.tag) {
        case w:
        case X:
        case J: {
          e.mode & Ge ? (_1(), Zi(br | qn, e, e.return), C1(e)) : Zi(br | qn, e, e.return);
          break;
        }
      }
    }
    function gL(e, t) {
      for (; Le !== null; ) {
        var i = Le;
        jt(i), SL(i, t), _n();
        var s = i.child;
        s !== null ? (s.return = i, Le = s) : yL(e);
      }
    }
    function yL(e) {
      for (; Le !== null; ) {
        var t = Le, i = t.sibling, s = t.return;
        if (bC(t), t === e) {
          Le = null;
          return;
        }
        if (i !== null) {
          i.return = s, Le = i;
          return;
        }
        Le = s;
      }
    }
    function SL(e, t) {
      switch (e.tag) {
        case w:
        case X:
        case J: {
          e.mode & Ge ? (_1(), Zi(br, e, t), C1(e)) : Zi(br, e, t);
          break;
        }
      }
    }
    function xL(e) {
      switch (e.tag) {
        case w:
        case X:
        case J: {
          try {
            Bs(Kn | qn, e);
          } catch (i) {
            qt(e, e.return, i);
          }
          break;
        }
        case _: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            qt(e, e.return, i);
          }
          break;
        }
      }
    }
    function wL(e) {
      switch (e.tag) {
        case w:
        case X:
        case J: {
          try {
            Bs(br | qn, e);
          } catch (t) {
            qt(e, e.return, t);
          }
          break;
        }
      }
    }
    function bL(e) {
      switch (e.tag) {
        case w:
        case X:
        case J: {
          try {
            Zi(Kn | qn, e, e.return);
          } catch (i) {
            qt(e, e.return, i);
          }
          break;
        }
        case _: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && B1(e, e.return, t);
          break;
        }
      }
    }
    function EL(e) {
      switch (e.tag) {
        case w:
        case X:
        case J:
          try {
            Zi(br | qn, e, e.return);
          } catch (t) {
            qt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ch = Symbol.for;
      Ch("selector.component"), Ch("selector.has_pseudo_class"), Ch("selector.role"), Ch("selector.test_id"), Ch("selector.text");
    }
    var CL = [];
    function _L() {
      CL.forEach(function(e) {
        return e();
      });
    }
    var TL = l.ReactCurrentActQueue;
    function kL(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function MC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && TL.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var RL = Math.ceil, q1 = l.ReactCurrentDispatcher, K1 = l.ReactCurrentOwner, Tr = l.ReactCurrentBatchConfig, eo = l.ReactCurrentActQueue, Jn = (
      /*             */
      0
    ), LC = (
      /*               */
      1
    ), kr = (
      /*                */
      2
    ), wi = (
      /*                */
      4
    ), Al = 0, _h = 1, oc = 2, Qg = 3, Th = 4, NC = 5, Z1 = 6, gt = Jn, ca = null, vn = null, er = ee, Yo = ee, X1 = As(ee), tr = Al, kh = null, qg = ee, Rh = ee, Kg = ee, Dh = null, Ua = null, J1 = 0, jC = 500, UC = 1 / 0, DL = 500, zl = null;
    function Oh() {
      UC = tn() + DL;
    }
    function AC() {
      return UC;
    }
    var Zg = !1, ex = null, sd = null, lc = !1, Gs = null, Mh = ee, tx = [], nx = null, OL = 50, Lh = 0, rx = null, ax = !1, Xg = !1, ML = 50, ud = 0, Jg = null, Nh = Ht, ey = ee, zC = !1;
    function ty() {
      return ca;
    }
    function fa() {
      return (gt & (kr | wi)) !== Jn ? tn() : (Nh !== Ht || (Nh = tn()), Nh);
    }
    function Qs(e) {
      var t = e.mode;
      if ((t & ct) === Ve)
        return qe;
      if ((gt & kr) !== Jn && er !== ee)
        return kn(er);
      var i = kO() !== TO;
      if (i) {
        if (Tr.transition !== null) {
          var s = Tr.transition;
          s._updatedFibers || (s._updatedFibers = /* @__PURE__ */ new Set()), s._updatedFibers.add(e);
        }
        return ey === mt && (ey = Sp()), ey;
      }
      var f = Ra();
      if (f !== mt)
        return f;
      var h = fD();
      return h;
    }
    function LL(e) {
      var t = e.mode;
      return (t & ct) === Ve ? qe : _0();
    }
    function nr(e, t, i, s) {
      nN(), zC && v("useInsertionEffect must not schedule updates."), ax && (Xg = !0), Sl(e, i, s), (gt & kr) !== ee && e === ca ? iN(t) : (Gn && Cp(e, t, i), oN(t), e === ca && ((gt & kr) === Jn && (Rh = at(Rh, i)), tr === Th && qs(e, er)), Aa(e, s), i === qe && gt === Jn && (t.mode & ct) === Ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !eo.isBatchingLegacy && (Oh(), Ab()));
    }
    function NL(e, t, i) {
      var s = e.current;
      s.lanes = t, Sl(e, t, i), Aa(e, i);
    }
    function jL(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (gt & kr) !== Jn
      );
    }
    function Aa(e, t) {
      var i = e.callbackNode;
      b0(e, t);
      var s = Lu(e, e === ca ? er : ee);
      if (s === ee) {
        i !== null && JC(i), e.callbackNode = null, e.callbackPriority = mt;
        return;
      }
      var f = Sn(s), h = e.callbackPriority;
      if (h === f && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(eo.current !== null && i !== fx)) {
        i == null && h !== qe && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && JC(i);
      var y;
      if (f === qe)
        e.tag === zs ? (eo.isBatchingLegacy !== null && (eo.didScheduleLegacyUpdate = !0), uO(HC.bind(null, e))) : Ub(HC.bind(null, e)), eo.current !== null ? eo.current.push(Fs) : pD(function() {
          (gt & (kr | wi)) === Jn && Fs();
        }), y = null;
      else {
        var x;
        switch (zu(s)) {
          case cr:
            x = Wc;
            break;
          case Qn:
            x = oa;
            break;
          case Pi:
            x = fi;
            break;
          case Uu:
            x = xo;
            break;
          default:
            x = fi;
            break;
        }
        y = dx(x, FC.bind(null, e));
      }
      e.callbackPriority = f, e.callbackNode = y;
    }
    function FC(e, t) {
      if (nM(), Nh = Ht, ey = ee, (gt & (kr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, s = Pl();
      if (s && e.callbackNode !== i)
        return null;
      var f = Lu(e, e === ca ? er : ee);
      if (f === ee)
        return null;
      var h = !ju(e, f) && !pm(e, f) && !t, y = h ? VL(e, f) : ry(e, f);
      if (y !== Al) {
        if (y === oc) {
          var x = gp(e);
          x !== ee && (f = x, y = ix(e, x));
        }
        if (y === _h) {
          var b = kh;
          throw sc(e, ee), qs(e, f), Aa(e, tn()), b;
        }
        if (y === Z1)
          qs(e, f);
        else {
          var T = !ju(e, f), R = e.current.alternate;
          if (T && !AL(R)) {
            if (y = ry(e, f), y === oc) {
              var z = gp(e);
              z !== ee && (f = z, y = ix(e, z));
            }
            if (y === _h) {
              var U = kh;
              throw sc(e, ee), qs(e, f), Aa(e, tn()), U;
            }
          }
          e.finishedWork = R, e.finishedLanes = f, UL(e, y, f);
        }
      }
      return Aa(e, tn()), e.callbackNode === i ? FC.bind(null, e) : null;
    }
    function ix(e, t) {
      var i = Dh;
      if (Dn(e)) {
        var s = sc(e, t);
        s.flags |= sn, nO(e.containerInfo);
      }
      var f = ry(e, t);
      if (f !== oc) {
        var h = Ua;
        Ua = i, h !== null && PC(h);
      }
      return f;
    }
    function PC(e) {
      Ua === null ? Ua = e : Ua.push.apply(Ua, e);
    }
    function UL(e, t, i) {
      switch (t) {
        case Al:
        case _h:
          throw new Error("Root did not complete. This is a bug in React.");
        case oc: {
          uc(e, Ua, zl);
          break;
        }
        case Qg: {
          if (qs(e, i), gf(i) && // do not delay if we're inside an act() scope
          !e_()) {
            var s = J1 + jC - tn();
            if (s > 10) {
              var f = Lu(e, ee);
              if (f !== ee)
                break;
              var h = e.suspendedLanes;
              if (!yl(h, i)) {
                fa(), bp(e, h);
                break;
              }
              e.timeoutHandle = nS(uc.bind(null, e, Ua, zl), s);
              break;
            }
          }
          uc(e, Ua, zl);
          break;
        }
        case Th: {
          if (qs(e, i), dm(i))
            break;
          if (!e_()) {
            var y = fm(e, i), x = y, b = tn() - x, T = tN(b) - b;
            if (T > 10) {
              e.timeoutHandle = nS(uc.bind(null, e, Ua, zl), T);
              break;
            }
          }
          uc(e, Ua, zl);
          break;
        }
        case NC: {
          uc(e, Ua, zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function AL(e) {
      for (var t = e; ; ) {
        if (t.flags & _u) {
          var i = t.updateQueue;
          if (i !== null) {
            var s = i.stores;
            if (s !== null)
              for (var f = 0; f < s.length; f++) {
                var h = s[f], y = h.getSnapshot, x = h.value;
                try {
                  if (!Me(y(), x))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & _u && b !== null) {
          b.return = t, t = b;
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
    function qs(e, t) {
      t = Ss(t, Kg), t = Ss(t, Rh), wp(e, t);
    }
    function HC(e) {
      if (rM(), (gt & (kr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      Pl();
      var t = Lu(e, ee);
      if (!Yr(t, qe))
        return Aa(e, tn()), null;
      var i = ry(e, t);
      if (e.tag !== zs && i === oc) {
        var s = gp(e);
        s !== ee && (t = s, i = ix(e, s));
      }
      if (i === _h) {
        var f = kh;
        throw sc(e, ee), qs(e, t), Aa(e, tn()), f;
      }
      if (i === Z1)
        throw new Error("Root did not complete. This is a bug in React.");
      var h = e.current.alternate;
      return e.finishedWork = h, e.finishedLanes = t, uc(e, Ua, zl), Aa(e, tn()), null;
    }
    function zL(e, t) {
      t !== ee && (xs(e, at(t, qe)), Aa(e, tn()), (gt & (kr | wi)) === Jn && (Oh(), Fs()));
    }
    function ox(e, t) {
      var i = gt;
      gt |= LC;
      try {
        return e(t);
      } finally {
        gt = i, gt === Jn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !eo.isBatchingLegacy && (Oh(), Ab());
      }
    }
    function FL(e, t, i, s, f) {
      var h = Ra(), y = Tr.transition;
      try {
        return Tr.transition = null, Rn(cr), e(t, i, s, f);
      } finally {
        Rn(h), Tr.transition = y, gt === Jn && Oh();
      }
    }
    function Fl(e) {
      Gs !== null && Gs.tag === zs && (gt & (kr | wi)) === Jn && Pl();
      var t = gt;
      gt |= LC;
      var i = Tr.transition, s = Ra();
      try {
        return Tr.transition = null, Rn(cr), e ? e() : void 0;
      } finally {
        Rn(s), Tr.transition = i, gt = t, (gt & (kr | wi)) === Jn && Fs();
      }
    }
    function IC() {
      return (gt & (kr | wi)) !== Jn;
    }
    function ny(e, t) {
      Vr(X1, Yo, e), Yo = at(Yo, t);
    }
    function lx(e) {
      Yo = X1.current, $r(X1, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var i = e.timeoutHandle;
      if (i !== rS && (e.timeoutHandle = rS, dD(i)), vn !== null)
        for (var s = vn.return; s !== null; ) {
          var f = s.alternate;
          mC(f, s), s = s.return;
        }
      ca = e;
      var h = cc(e.current, null);
      return vn = h, er = Yo = t, tr = Al, kh = null, qg = ee, Rh = ee, Kg = ee, Dh = null, Ua = null, MO(), Wi.discardPendingWarnings(), h;
    }
    function YC(e, t) {
      do {
        var i = vn;
        try {
          if (cg(), yE(), _n(), K1.current = null, i === null || i.return === null) {
            tr = _h, kh = t, vn = null;
            return;
          }
          if (Cn && i.mode & Ge && Yg(i, !0), ai)
            if (ul(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var s = t;
              sm(i, s, er);
            } else
              Zc(i, t, er);
          sM(e, i.return, i, t, er), WC(i);
        } catch (f) {
          t = f, vn === i && i !== null ? (i = i.return, vn = i) : i = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function $C() {
      var e = q1.current;
      return q1.current = zg, e === null ? zg : e;
    }
    function VC(e) {
      q1.current = e;
    }
    function PL() {
      J1 = tn();
    }
    function jh(e) {
      qg = at(e, qg);
    }
    function HL() {
      tr === Al && (tr = Qg);
    }
    function sx() {
      (tr === Al || tr === Qg || tr === oc) && (tr = Th), ca !== null && (Nu(qg) || Nu(Rh)) && qs(ca, er);
    }
    function IL(e) {
      tr !== Th && (tr = oc), Dh === null ? Dh = [e] : Dh.push(e);
    }
    function YL() {
      return tr === Al;
    }
    function ry(e, t) {
      var i = gt;
      gt |= kr;
      var s = $C();
      if (ca !== e || er !== t) {
        if (Gn) {
          var f = e.memoizedUpdaters;
          f.size > 0 && (Uh(e, er), f.clear()), xf(e, t);
        }
        zl = _p(), sc(e, t);
      }
      Za(t);
      do
        try {
          $L();
          break;
        } catch (h) {
          YC(e, h);
        }
      while (!0);
      if (cg(), gt = i, VC(s), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return hs(), ca = null, er = ee, tr;
    }
    function $L() {
      for (; vn !== null; )
        BC(vn);
    }
    function VL(e, t) {
      var i = gt;
      gt |= kr;
      var s = $C();
      if (ca !== e || er !== t) {
        if (Gn) {
          var f = e.memoizedUpdaters;
          f.size > 0 && (Uh(e, er), f.clear()), xf(e, t);
        }
        zl = _p(), Oh(), sc(e, t);
      }
      Za(t);
      do
        try {
          BL();
          break;
        } catch (h) {
          YC(e, h);
        }
      while (!0);
      return cg(), VC(s), gt = i, vn !== null ? (Ru(), Al) : (hs(), ca = null, er = ee, tr);
    }
    function BL() {
      for (; vn !== null && !Bc(); )
        BC(vn);
    }
    function BC(e) {
      var t = e.alternate;
      jt(e);
      var i;
      (e.mode & Ge) !== Ve ? (E1(e), i = ux(t, e, Yo), Yg(e, !0)) : i = ux(t, e, Yo), _n(), e.memoizedProps = e.pendingProps, i === null ? WC(e) : vn = i, K1.current = null;
    }
    function WC(e) {
      var t = e;
      do {
        var i = t.alternate, s = t.return;
        if ((t.flags & ra) === Ie) {
          jt(t);
          var f = void 0;
          if ((t.mode & Ge) === Ve ? f = vC(i, t, Yo) : (E1(t), f = vC(i, t, Yo), Yg(t, !1)), _n(), f !== null) {
            vn = f;
            return;
          }
        } else {
          var h = HM(i, t);
          if (h !== null) {
            h.flags &= Jv, vn = h;
            return;
          }
          if ((t.mode & Ge) !== Ve) {
            Yg(t, !1);
            for (var y = t.actualDuration, x = t.child; x !== null; )
              y += x.actualDuration, x = x.sibling;
            t.actualDuration = y;
          }
          if (s !== null)
            s.flags |= ra, s.subtreeFlags = Ie, s.deletions = null;
          else {
            tr = Z1, vn = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          vn = b;
          return;
        }
        t = s, vn = t;
      } while (t !== null);
      tr === Al && (tr = NC);
    }
    function uc(e, t, i) {
      var s = Ra(), f = Tr.transition;
      try {
        Tr.transition = null, Rn(cr), WL(e, t, i, s);
      } finally {
        Tr.transition = f, Rn(s);
      }
      return null;
    }
    function WL(e, t, i, s) {
      do
        Pl();
      while (Gs !== null);
      if (rN(), (gt & (kr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      var f = e.finishedWork, h = e.finishedLanes;
      if (Qc(h), f === null)
        return dp(), null;
      if (h === ee && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, f === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mt;
      var y = at(f.lanes, f.childLanes);
      Ep(e, y), e === ca && (ca = null, vn = null, er = ee), ((f.subtreeFlags & Ca) !== Ie || (f.flags & Ca) !== Ie) && (lc || (lc = !0, nx = i, dx(fi, function() {
        return Pl(), null;
      })));
      var x = (f.subtreeFlags & (fs | Fr | ur | Ca)) !== Ie, b = (f.flags & (fs | Fr | ur | Ca)) !== Ie;
      if (x || b) {
        var T = Tr.transition;
        Tr.transition = null;
        var R = Ra();
        Rn(cr);
        var z = gt;
        gt |= wi, K1.current = null, BM(e, f), $E(), iL(e, f, h), iD(e.containerInfo), e.current = f, um(h), oL(f, e, h), ps(), nm(), gt = z, Rn(R), Tr.transition = T;
      } else
        e.current = f, $E();
      var U = lc;
      if (lc ? (lc = !1, Gs = e, Mh = h) : (ud = 0, Jg = null), y = e.pendingLanes, y === ee && (sd = null), U || KC(e.current, !1), Ai(f.stateNode, s), Gn && e.memoizedUpdaters.clear(), _L(), Aa(e, tn()), t !== null)
        for (var V = e.onRecoverableError, B = 0; B < t.length; B++) {
          var K = t[B], Te = K.stack, Ye = K.digest;
          V(K.value, {
            componentStack: Te,
            digest: Ye
          });
        }
      if (Zg) {
        Zg = !1;
        var Ae = ex;
        throw ex = null, Ae;
      }
      return Yr(Mh, qe) && e.tag !== zs && Pl(), y = e.pendingLanes, Yr(y, qe) ? (tM(), e === rx ? Lh++ : (Lh = 0, rx = e)) : Lh = 0, Fs(), dp(), null;
    }
    function Pl() {
      if (Gs !== null) {
        var e = zu(Mh), t = k0(Pi, e), i = Tr.transition, s = Ra();
        try {
          return Tr.transition = null, Rn(t), QL();
        } finally {
          Rn(s), Tr.transition = i;
        }
      }
      return !1;
    }
    function GL(e) {
      tx.push(e), lc || (lc = !0, dx(fi, function() {
        return Pl(), null;
      }));
    }
    function QL() {
      if (Gs === null)
        return !1;
      var e = nx;
      nx = null;
      var t = Gs, i = Mh;
      if (Gs = null, Mh = ee, (gt & (kr | wi)) !== Jn)
        throw new Error("Cannot flush passive effects while already rendering.");
      ax = !0, Xg = !1, cm(i);
      var s = gt;
      gt |= wi, pL(t.current), uL(t, t.current, i, e);
      {
        var f = tx;
        tx = [];
        for (var h = 0; h < f.length; h++) {
          var y = f[h];
          qM(t, y);
        }
      }
      ku(), KC(t.current, !0), gt = s, Fs(), Xg ? t === Jg ? ud++ : (ud = 0, Jg = t) : ud = 0, ax = !1, Xg = !1, bo(t);
      {
        var x = t.current.stateNode;
        x.effectDuration = 0, x.passiveEffectDuration = 0;
      }
      return !0;
    }
    function GC(e) {
      return sd !== null && sd.has(e);
    }
    function qL(e) {
      sd === null ? sd = /* @__PURE__ */ new Set([e]) : sd.add(e);
    }
    function KL(e) {
      Zg || (Zg = !0, ex = e);
    }
    var ZL = KL;
    function QC(e, t, i) {
      var s = ac(i, t), f = BE(e, s, qe), h = Hs(e, f, qe), y = fa();
      h !== null && (Sl(h, qe, y), Aa(h, y));
    }
    function qt(e, t, i) {
      if (YM(i), Ah(!1), e.tag === D) {
        QC(e, e, i);
        return;
      }
      var s = null;
      for (s = t; s !== null; ) {
        if (s.tag === D) {
          QC(s, e, i);
          return;
        } else if (s.tag === _) {
          var f = s.type, h = s.stateNode;
          if (typeof f.getDerivedStateFromError == "function" || typeof h.componentDidCatch == "function" && !GC(h)) {
            var y = ac(i, e), x = D1(s, y, qe), b = Hs(s, x, qe), T = fa();
            b !== null && (Sl(b, qe, T), Aa(b, T));
            return;
          }
        }
        s = s.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function XL(e, t, i) {
      var s = e.pingCache;
      s !== null && s.delete(t);
      var f = fa();
      bp(e, i), lN(e), ca === e && yl(er, i) && (tr === Th || tr === Qg && gf(er) && tn() - J1 < jC ? sc(e, ee) : Kg = at(Kg, i)), Aa(e, f);
    }
    function qC(e, t) {
      t === mt && (t = LL(e));
      var i = fa(), s = Na(e, t);
      s !== null && (Sl(s, t, i), Aa(s, i));
    }
    function JL(e) {
      var t = e.memoizedState, i = mt;
      t !== null && (i = t.retryLane), qC(e, i);
    }
    function eN(e, t) {
      var i = mt, s;
      switch (e.tag) {
        case re:
          s = e.stateNode;
          var f = e.memoizedState;
          f !== null && (i = f.retryLane);
          break;
        case Fe:
          s = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      s !== null && s.delete(t), qC(e, i);
    }
    function tN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : RL(e / 1960) * 1960;
    }
    function nN() {
      if (Lh > OL)
        throw Lh = 0, rx = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ud > ML && (ud = 0, Jg = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function rN() {
      Wi.flushLegacyContextWarning(), Wi.flushPendingUnsafeLifecycleWarnings();
    }
    function KC(e, t) {
      jt(e), ay(e, zr, bL), t && ay(e, sl, EL), ay(e, zr, xL), t && ay(e, sl, wL), _n();
    }
    function ay(e, t, i) {
      for (var s = e, f = null; s !== null; ) {
        var h = s.subtreeFlags & t;
        s !== f && s.child !== null && h !== Ie ? s = s.child : ((s.flags & t) !== Ie && i(s), s.sibling !== null ? s = s.sibling : s = f = s.return);
      }
    }
    var iy = null;
    function ZC(e) {
      {
        if ((gt & kr) !== Jn || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== k && t !== D && t !== _ && t !== w && t !== X && t !== G && t !== J)
          return;
        var i = nt(e) || "ReactComponent";
        if (iy !== null) {
          if (iy.has(i))
            return;
          iy.add(i);
        } else
          iy = /* @__PURE__ */ new Set([i]);
        var s = gn;
        try {
          jt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          s ? jt(e) : _n();
        }
      }
    }
    var ux;
    {
      var aN = null;
      ux = function(e, t, i) {
        var s = i_(aN, t);
        try {
          return cC(e, t, i);
        } catch (h) {
          if (gO() || h !== null && typeof h == "object" && typeof h.then == "function")
            throw h;
          if (cg(), yE(), mC(e, t), i_(t, s), t.mode & Ge && E1(t), ll(null, cC, null, e, t, i), x0()) {
            var f = tp();
            typeof f == "object" && f !== null && f._suppressLogging && typeof h == "object" && h !== null && !h._suppressLogging && (h._suppressLogging = !0);
          }
          throw h;
        }
      };
    }
    var XC = !1, cx;
    cx = /* @__PURE__ */ new Set();
    function iN(e) {
      if (ya && !XO())
        switch (e.tag) {
          case w:
          case X:
          case J: {
            var t = vn && nt(vn) || "Unknown", i = t;
            if (!cx.has(i)) {
              cx.add(i);
              var s = nt(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", s, t, t);
            }
            break;
          }
          case _: {
            XC || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), XC = !0);
            break;
          }
        }
    }
    function Uh(e, t) {
      if (Gn) {
        var i = e.memoizedUpdaters;
        i.forEach(function(s) {
          Cp(e, s, t);
        });
      }
    }
    var fx = {};
    function dx(e, t) {
      {
        var i = eo.current;
        return i !== null ? (i.push(t), fx) : Vc(e, t);
      }
    }
    function JC(e) {
      if (e !== fx)
        return tm(e);
    }
    function e_() {
      return eo.current !== null;
    }
    function oN(e) {
      {
        if (e.mode & ct) {
          if (!MC())
            return;
        } else if (!kL() || gt !== Jn || e.tag !== w && e.tag !== X && e.tag !== J)
          return;
        if (eo.current === null) {
          var t = gn;
          try {
            jt(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? jt(e) : _n();
          }
        }
      }
    }
    function lN(e) {
      e.tag !== zs && MC() && eo.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ah(e) {
      zC = e;
    }
    var bi = null, cd = null, sN = function(e) {
      bi = e;
    };
    function fd(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function px(e) {
      return fd(e);
    }
    function hx(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = fd(e.render);
            if (e.render !== i) {
              var s = {
                $$typeof: $e,
                render: i
              };
              return e.displayName !== void 0 && (s.displayName = e.displayName), s;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function t_(e, t) {
      {
        if (bi === null)
          return !1;
        var i = e.elementType, s = t.type, f = !1, h = typeof s == "object" && s !== null ? s.$$typeof : null;
        switch (e.tag) {
          case _: {
            typeof s == "function" && (f = !0);
            break;
          }
          case w: {
            (typeof s == "function" || h === We) && (f = !0);
            break;
          }
          case X: {
            (h === $e || h === We) && (f = !0);
            break;
          }
          case G:
          case J: {
            (h === ot || h === We) && (f = !0);
            break;
          }
          default:
            return !1;
        }
        if (f) {
          var y = bi(i);
          if (y !== void 0 && y === bi(s))
            return !0;
        }
        return !1;
      }
    }
    function n_(e) {
      {
        if (bi === null || typeof WeakSet != "function")
          return;
        cd === null && (cd = /* @__PURE__ */ new WeakSet()), cd.add(e);
      }
    }
    var uN = function(e, t) {
      {
        if (bi === null)
          return;
        var i = t.staleFamilies, s = t.updatedFamilies;
        Pl(), Fl(function() {
          vx(e.current, s, i);
        });
      }
    }, cN = function(e, t) {
      {
        if (e.context !== Ja)
          return;
        Pl(), Fl(function() {
          zh(t, e, null, null);
        });
      }
    };
    function vx(e, t, i) {
      {
        var s = e.alternate, f = e.child, h = e.sibling, y = e.tag, x = e.type, b = null;
        switch (y) {
          case w:
          case J:
          case _:
            b = x;
            break;
          case X:
            b = x.render;
            break;
        }
        if (bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, R = !1;
        if (b !== null) {
          var z = bi(b);
          z !== void 0 && (i.has(z) ? R = !0 : t.has(z) && (y === _ ? R = !0 : T = !0));
        }
        if (cd !== null && (cd.has(e) || s !== null && cd.has(s)) && (R = !0), R && (e._debugNeedsRemount = !0), R || T) {
          var U = Na(e, qe);
          U !== null && nr(U, e, qe, Ht);
        }
        f !== null && !R && vx(f, t, i), h !== null && vx(h, t, i);
      }
    }
    var fN = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), s = new Set(t.map(function(f) {
          return f.current;
        }));
        return mx(e.current, s, i), i;
      }
    };
    function mx(e, t, i) {
      {
        var s = e.child, f = e.sibling, h = e.tag, y = e.type, x = null;
        switch (h) {
          case w:
          case J:
          case _:
            x = y;
            break;
          case X:
            x = y.render;
            break;
        }
        var b = !1;
        x !== null && t.has(x) && (b = !0), b ? dN(e, i) : s !== null && mx(s, t, i), f !== null && mx(f, t, i);
      }
    }
    function dN(e, t) {
      {
        var i = pN(e, t);
        if (i)
          return;
        for (var s = e; ; ) {
          switch (s.tag) {
            case F:
              t.add(s.stateNode);
              return;
            case O:
              t.add(s.stateNode.containerInfo);
              return;
            case D:
              t.add(s.stateNode.containerInfo);
              return;
          }
          if (s.return === null)
            throw new Error("Expected to reach root first.");
          s = s.return;
        }
      }
    }
    function pN(e, t) {
      for (var i = e, s = !1; ; ) {
        if (i.tag === F)
          s = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return s;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return s;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var gx;
    {
      gx = !1;
      try {
        var r_ = Object.preventExtensions({});
      } catch {
        gx = !0;
      }
    }
    function hN(e, t, i, s) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = s, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !gx && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ei = function(e, t, i, s) {
      return new hN(e, t, i, s);
    };
    function yx(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vN(e) {
      return typeof e == "function" && !yx(e) && e.defaultProps === void 0;
    }
    function mN(e) {
      if (typeof e == "function")
        return yx(e) ? _ : w;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $e)
          return X;
        if (t === ot)
          return G;
      }
      return k;
    }
    function cc(e, t) {
      var i = e.alternate;
      i === null ? (i = ei(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ie, i.subtreeFlags = Ie, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Wn, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var s = e.dependencies;
      switch (i.dependencies = s === null ? null : {
        lanes: s.lanes,
        firstContext: s.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case k:
        case w:
        case J:
          i.type = fd(e.type);
          break;
        case _:
          i.type = px(e.type);
          break;
        case X:
          i.type = hx(e.type);
          break;
      }
      return i;
    }
    function gN(e, t) {
      e.flags &= Wn | Bt;
      var i = e.alternate;
      if (i === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = Ie, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Ie, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var s = i.dependencies;
        e.dependencies = s === null ? null : {
          lanes: s.lanes,
          firstContext: s.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function yN(e, t, i) {
      var s;
      return e === ng ? (s = ct, t === !0 && (s |= nn, s |= Ta)) : s = Ve, Gn && (s |= Ge), ei(D, null, null, s);
    }
    function Sx(e, t, i, s, f, h) {
      var y = k, x = e;
      if (typeof e == "function")
        yx(e) ? (y = _, x = px(x)) : x = fd(x);
      else if (typeof e == "string")
        y = F;
      else
        e:
          switch (e) {
            case Va:
              return Ks(i.children, f, h, t);
            case lo:
              y = ue, f |= nn, (f & ct) !== Ve && (f |= Ta);
              break;
            case L:
              return SN(i, f, h, t);
            case it:
              return xN(i, f, h, t);
            case St:
              return wN(i, f, h, t);
            case Zt:
              return a_(i, f, h, t);
            case yr:
            case Un:
            case so:
            case Sc:
            case Kt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    y = q;
                    break e;
                  case xe:
                    y = de;
                    break e;
                  case $e:
                    y = X, x = hx(x);
                    break e;
                  case ot:
                    y = G;
                    break e;
                  case We:
                    y = we, x = null;
                    break e;
                }
              var b = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = s ? nt(s) : null;
                T && (b += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
            }
          }
      var R = ei(y, i, t, f);
      return R.elementType = e, R.type = x, R.lanes = h, R._debugOwner = s, R;
    }
    function xx(e, t, i) {
      var s = null;
      s = e._owner;
      var f = e.type, h = e.key, y = e.props, x = Sx(f, h, y, s, t, i);
      return x._debugSource = e._source, x._debugOwner = e._owner, x;
    }
    function Ks(e, t, i, s) {
      var f = ei(W, e, s, t);
      return f.lanes = i, f;
    }
    function SN(e, t, i, s) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var f = ei(se, e, s, t | Ge);
      return f.elementType = L, f.lanes = i, f.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, f;
    }
    function xN(e, t, i, s) {
      var f = ei(re, e, s, t);
      return f.elementType = it, f.lanes = i, f;
    }
    function wN(e, t, i, s) {
      var f = ei(Fe, e, s, t);
      return f.elementType = St, f.lanes = i, f;
    }
    function a_(e, t, i, s) {
      var f = ei(Ne, e, s, t);
      f.elementType = Zt, f.lanes = i;
      var h = {
        isHidden: !1
      };
      return f.stateNode = h, f;
    }
    function wx(e, t, i) {
      var s = ei(N, e, null, t);
      return s.lanes = i, s;
    }
    function bN() {
      var e = ei(F, null, null, Ve);
      return e.elementType = "DELETED", e;
    }
    function EN(e) {
      var t = ei(me, null, null, Ve);
      return t.stateNode = e, t;
    }
    function bx(e, t, i) {
      var s = e.children !== null ? e.children : [], f = ei(O, s, e.key, t);
      return f.lanes = i, f.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, f;
    }
    function i_(e, t) {
      return e === null && (e = ei(k, null, null, Ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function CN(e, t, i, s, f) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = rS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = mt, this.eventTimes = Sf(ee), this.expirationTimes = Sf(Ht), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = Sf(ee), this.identifierPrefix = s, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var h = this.pendingUpdatersLaneMap = [], y = 0; y < Gt; y++)
          h.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case ng:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case zs:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function o_(e, t, i, s, f, h, y, x, b, T) {
      var R = new CN(e, t, i, x, b), z = yN(t, h);
      R.current = z, z.stateNode = R;
      {
        var U = {
          element: s,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = U;
      }
      return OS(z), R;
    }
    var Ex = "18.2.0";
    function _N(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ha(s), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ta,
        key: s == null ? null : "" + s,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var Cx, _x;
    Cx = !1, _x = {};
    function l_(e) {
      if (!e)
        return Ja;
      var t = wa(e), i = sO(t);
      if (t.tag === _) {
        var s = t.type;
        if (Uo(s))
          return Nb(t, s, i);
      }
      return i;
    }
    function TN(e, t) {
      {
        var i = wa(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var s = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + s);
        }
        var f = _a(i);
        if (f === null)
          return null;
        if (f.mode & nn) {
          var h = nt(i) || "Component";
          if (!_x[h]) {
            _x[h] = !0;
            var y = gn;
            try {
              jt(f), i.mode & nn ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, h) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, h);
            } finally {
              y ? jt(y) : _n();
            }
          }
        }
        return f.stateNode;
      }
    }
    function s_(e, t, i, s, f, h, y, x) {
      var b = !1, T = null;
      return o_(e, t, b, T, i, s, f, h, y);
    }
    function u_(e, t, i, s, f, h, y, x, b, T) {
      var R = !0, z = o_(i, s, R, e, f, h, y, x, b);
      z.context = l_(null);
      var U = z.current, V = fa(), B = Qs(U), K = jl(V, B);
      return K.callback = t ?? null, Hs(U, K, B), NL(z, B, V), z;
    }
    function zh(e, t, i, s) {
      rm(t, e);
      var f = t.current, h = fa(), y = Qs(f);
      cl(y);
      var x = l_(i);
      t.context === null ? t.context = x : t.pendingContext = x, ya && gn !== null && !Cx && (Cx = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(gn) || "Unknown"));
      var b = jl(h, y);
      b.payload = {
        element: e
      }, s = s === void 0 ? null : s, s !== null && (typeof s != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", s), b.callback = s);
      var T = Hs(f, b, y);
      return T !== null && (nr(T, f, y, h), vg(T, f, y)), y;
    }
    function oy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case F:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function kN(e) {
      switch (e.tag) {
        case D: {
          var t = e.stateNode;
          if (Dn(t)) {
            var i = E0(t);
            zL(t, i);
          }
          break;
        }
        case re: {
          Fl(function() {
            var f = Na(e, qe);
            if (f !== null) {
              var h = fa();
              nr(f, e, qe, h);
            }
          });
          var s = qe;
          Tx(e, s);
          break;
        }
      }
    }
    function c_(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = vm(i.retryLane, t));
    }
    function Tx(e, t) {
      c_(e, t);
      var i = e.alternate;
      i && c_(i, t);
    }
    function RN(e) {
      if (e.tag === re) {
        var t = vs, i = Na(e, t);
        if (i !== null) {
          var s = fa();
          nr(i, e, t, s);
        }
        Tx(e, t);
      }
    }
    function DN(e) {
      if (e.tag === re) {
        var t = Qs(e), i = Na(e, t);
        if (i !== null) {
          var s = fa();
          nr(i, e, t, s);
        }
        Tx(e, t);
      }
    }
    function f_(e) {
      var t = em(e);
      return t === null ? null : t.stateNode;
    }
    var d_ = function(e) {
      return null;
    };
    function ON(e) {
      return d_(e);
    }
    var p_ = function(e) {
      return !1;
    };
    function MN(e) {
      return p_(e);
    }
    var h_ = null, v_ = null, m_ = null, g_ = null, y_ = null, S_ = null, x_ = null, w_ = null, b_ = null;
    {
      var E_ = function(e, t, i) {
        var s = t[i], f = An(e) ? e.slice() : dt({}, e);
        return i + 1 === t.length ? (An(f) ? f.splice(s, 1) : delete f[s], f) : (f[s] = E_(e[s], t, i + 1), f);
      }, C_ = function(e, t) {
        return E_(e, t, 0);
      }, __ = function(e, t, i, s) {
        var f = t[s], h = An(e) ? e.slice() : dt({}, e);
        if (s + 1 === t.length) {
          var y = i[s];
          h[y] = h[f], An(h) ? h.splice(f, 1) : delete h[f];
        } else
          h[f] = __(
            // $FlowFixMe number or string is fine here
            e[f],
            t,
            i,
            s + 1
          );
        return h;
      }, T_ = function(e, t, i) {
        if (t.length !== i.length) {
          m("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var s = 0; s < i.length - 1; s++)
            if (t[s] !== i[s]) {
              m("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return __(e, t, i, 0);
      }, k_ = function(e, t, i, s) {
        if (i >= t.length)
          return s;
        var f = t[i], h = An(e) ? e.slice() : dt({}, e);
        return h[f] = k_(e[f], t, i + 1, s), h;
      }, R_ = function(e, t, i) {
        return k_(e, t, 0, i);
      }, kx = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      h_ = function(e, t, i, s) {
        var f = kx(e, t);
        if (f !== null) {
          var h = R_(f.memoizedState, i, s);
          f.memoizedState = h, f.baseState = h, e.memoizedProps = dt({}, e.memoizedProps);
          var y = Na(e, qe);
          y !== null && nr(y, e, qe, Ht);
        }
      }, v_ = function(e, t, i) {
        var s = kx(e, t);
        if (s !== null) {
          var f = C_(s.memoizedState, i);
          s.memoizedState = f, s.baseState = f, e.memoizedProps = dt({}, e.memoizedProps);
          var h = Na(e, qe);
          h !== null && nr(h, e, qe, Ht);
        }
      }, m_ = function(e, t, i, s) {
        var f = kx(e, t);
        if (f !== null) {
          var h = T_(f.memoizedState, i, s);
          f.memoizedState = h, f.baseState = h, e.memoizedProps = dt({}, e.memoizedProps);
          var y = Na(e, qe);
          y !== null && nr(y, e, qe, Ht);
        }
      }, g_ = function(e, t, i) {
        e.pendingProps = R_(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var s = Na(e, qe);
        s !== null && nr(s, e, qe, Ht);
      }, y_ = function(e, t) {
        e.pendingProps = C_(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Na(e, qe);
        i !== null && nr(i, e, qe, Ht);
      }, S_ = function(e, t, i) {
        e.pendingProps = T_(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var s = Na(e, qe);
        s !== null && nr(s, e, qe, Ht);
      }, x_ = function(e) {
        var t = Na(e, qe);
        t !== null && nr(t, e, qe, Ht);
      }, w_ = function(e) {
        d_ = e;
      }, b_ = function(e) {
        p_ = e;
      };
    }
    function LN(e) {
      var t = _a(e);
      return t === null ? null : t.stateNode;
    }
    function NN(e) {
      return null;
    }
    function jN() {
      return gn;
    }
    function UN(e) {
      var t = e.findFiberByHostInstance, i = l.ReactCurrentDispatcher;
      return cp({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: h_,
        overrideHookStateDeletePath: v_,
        overrideHookStateRenamePath: m_,
        overrideProps: g_,
        overridePropsDeletePath: y_,
        overridePropsRenamePath: S_,
        setErrorHandler: w_,
        setSuspenseHandler: b_,
        scheduleUpdate: x_,
        currentDispatcherRef: i,
        findHostInstanceByFiber: LN,
        findFiberByHostInstance: t || NN,
        // React Refresh
        findHostInstancesForRefresh: fN,
        scheduleRefresh: uN,
        scheduleRoot: cN,
        setRefreshHandler: sN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: jN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Ex
      });
    }
    var D_ = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Rx(e) {
      this._internalRoot = e;
    }
    ly.prototype.render = Rx.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : sy(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== yn) {
          var s = f_(t.current);
          s && s.parentNode !== i && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      zh(e, t, null, null);
    }, ly.prototype.unmount = Rx.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        IC() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Fl(function() {
          zh(null, e, null, null);
        }), Rb(t);
      }
    };
    function AN(e, t) {
      if (!sy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      O_(e);
      var i = !1, s = !1, f = "", h = D_;
      t != null && (t.hydrate ? m("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === oo && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (f = t.identifierPrefix), t.onRecoverableError !== void 0 && (h = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var y = s_(e, ng, null, i, s, f, h);
      qm(y.current, e);
      var x = e.nodeType === yn ? e.parentNode : e;
      return Bp(x), new Rx(y);
    }
    function ly(e) {
      this._internalRoot = e;
    }
    function zN(e) {
      e && Em(e);
    }
    ly.prototype.unstable_scheduleHydration = zN;
    function FN(e, t, i) {
      if (!sy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      O_(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var s = i ?? null, f = i != null && i.hydratedSources || null, h = !1, y = !1, x = "", b = D_;
      i != null && (i.unstable_strictMode === !0 && (h = !0), i.identifierPrefix !== void 0 && (x = i.identifierPrefix), i.onRecoverableError !== void 0 && (b = i.onRecoverableError));
      var T = u_(t, null, e, ng, s, h, y, x, b);
      if (qm(T.current, e), Bp(e), f)
        for (var R = 0; R < f.length; R++) {
          var z = f[R];
          WO(T, z);
        }
      return new ly(T);
    }
    function sy(e) {
      return !!(e && (e.nodeType === jr || e.nodeType === Qa || e.nodeType === tl || !Tt));
    }
    function Fh(e) {
      return !!(e && (e.nodeType === jr || e.nodeType === Qa || e.nodeType === tl || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function O_(e) {
      e.nodeType === jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), nh(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var PN = l.ReactCurrentOwner, M_;
    M_ = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = f_(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, s = Dx(e), f = !!(s && Us(s));
      f && !i && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Dx(e) {
      return e ? e.nodeType === Qa ? e.documentElement : e.firstChild : null;
    }
    function L_() {
    }
    function HN(e, t, i, s, f) {
      if (f) {
        if (typeof s == "function") {
          var h = s;
          s = function() {
            var U = oy(y);
            h.call(U);
          };
        }
        var y = u_(
          t,
          s,
          e,
          zs,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          L_
        );
        e._reactRootContainer = y, qm(y.current, e);
        var x = e.nodeType === yn ? e.parentNode : e;
        return Bp(x), Fl(), y;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof s == "function") {
          var T = s;
          s = function() {
            var U = oy(R);
            T.call(U);
          };
        }
        var R = s_(
          e,
          zs,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          L_
        );
        e._reactRootContainer = R, qm(R.current, e);
        var z = e.nodeType === yn ? e.parentNode : e;
        return Bp(z), Fl(function() {
          zh(t, R, i, s);
        }), R;
      }
    }
    function IN(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function uy(e, t, i, s, f) {
      M_(i), IN(f === void 0 ? null : f, "render");
      var h = i._reactRootContainer, y;
      if (!h)
        y = HN(i, t, e, f, s);
      else {
        if (y = h, typeof f == "function") {
          var x = f;
          f = function() {
            var b = oy(y);
            x.call(b);
          };
        }
        zh(t, y, e, f);
      }
      return oy(y);
    }
    function YN(e) {
      {
        var t = PN.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === jr ? e : TN(e, "findDOMNode");
    }
    function $N(e, t, i) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var s = nh(t) && t._reactRootContainer === void 0;
        s && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return uy(null, e, t, !0, i);
    }
    function VN(e, t, i) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var s = nh(t) && t._reactRootContainer === void 0;
        s && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return uy(null, e, t, !1, i);
    }
    function BN(e, t, i, s) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Cu(e))
        throw new Error("parentComponent must be a valid React Component");
      return uy(e, t, i, !1, s);
    }
    function WN(e) {
      if (!Fh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = nh(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = Dx(e), s = i && !Us(i);
          s && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Fl(function() {
          uy(null, null, e, !1, function() {
            e._reactRootContainer = null, Rb(e);
          });
        }), !0;
      } else {
        {
          var f = Dx(e), h = !!(f && Us(f)), y = e.nodeType === jr && Fh(e.parentNode) && !!e.parentNode._reactRootContainer;
          h && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Re(kN), gm(RN), Pu(DN), kp(Ra), Sm(Au), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zv(qR), Pc(ox, FL, Fl);
    function GN(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sy(t))
        throw new Error("Target container is not a DOM element.");
      return _N(e, t, null, i);
    }
    function QN(e, t, i, s) {
      return BN(e, t, i, s);
    }
    var Ox = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Us, Yf, Km, Fc, wu, ox]
    };
    function qN(e, t) {
      return Ox.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AN(e, t);
    }
    function KN(e, t, i) {
      return Ox.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), FN(e, t, i);
    }
    function ZN(e) {
      return IC() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Fl(e);
    }
    var XN = UN({
      findFiberByHostInstance: qu,
      bundleType: 1,
      version: Ex,
      rendererPackageName: "react-dom"
    });
    if (!XN && Nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var N_ = window.location.protocol;
      /^(https?|file):$/.test(N_) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (N_ === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ox, Fa.createPortal = GN, Fa.createRoot = qN, Fa.findDOMNode = YN, Fa.flushSync = ZN, Fa.hydrate = $N, Fa.hydrateRoot = KN, Fa.render = VN, Fa.unmountComponentAtNode = WN, Fa.unstable_batchedUpdates = ox, Fa.unstable_renderSubtreeIntoContainer = QN, Fa.version = Ex, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Fa;
}
function Bk() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bk);
    } catch (r) {
      console.error(r);
    }
  }
}
process.env.NODE_ENV === "production" ? (Bk(), sw.exports = RF()) : sw.exports = DF();
var OF = sw.exports;
const Zh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Zy = (r, o, l, c = "") => {
  const d = r.split(":");
  if (r.slice(0, 1) === "@") {
    if (d.length < 2 || d.length > 3)
      return null;
    c = d.shift().slice(1);
  }
  if (d.length > 3 || !d.length)
    return null;
  if (d.length > 1) {
    const E = d.pop(), w = d.pop(), _ = {
      // Allow provider without '@': "provider:prefix:name"
      provider: d.length > 0 ? d[0] : c,
      prefix: w,
      name: E
    };
    return o && !by(_) ? null : _;
  }
  const m = d[0], v = m.split("-");
  if (v.length > 1) {
    const E = {
      provider: c,
      prefix: v.shift(),
      name: v.join("-")
    };
    return o && !by(E) ? null : E;
  }
  if (l && c === "") {
    const E = {
      provider: c,
      prefix: "",
      name: m
    };
    return o && !by(E, l) ? null : E;
  }
  return null;
}, by = (r, o) => r ? !!((r.provider === "" || r.provider.match(Zh)) && (o && r.prefix === "" || r.prefix.match(Zh)) && r.name.match(Zh)) : !1, Wk = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), My = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Ww = Object.freeze({
  ...Wk,
  ...My
}), uw = Object.freeze({
  ...Ww,
  body: "",
  hidden: !1
});
function MF(r, o) {
  const l = {};
  !r.hFlip != !o.hFlip && (l.hFlip = !0), !r.vFlip != !o.vFlip && (l.vFlip = !0);
  const c = ((r.rotate || 0) + (o.rotate || 0)) % 4;
  return c && (l.rotate = c), l;
}
function oT(r, o) {
  const l = MF(r, o);
  for (const c in uw)
    c in My ? c in r && !(c in l) && (l[c] = My[c]) : c in o ? l[c] = o[c] : c in r && (l[c] = r[c]);
  return l;
}
function LF(r, o) {
  const l = r.icons, c = r.aliases || /* @__PURE__ */ Object.create(null), d = /* @__PURE__ */ Object.create(null);
  function m(v) {
    if (l[v])
      return d[v] = [];
    if (!(v in d)) {
      d[v] = null;
      const E = c[v] && c[v].parent, w = E && m(E);
      w && (d[v] = [E].concat(w));
    }
    return d[v];
  }
  return (o || Object.keys(l).concat(Object.keys(c))).forEach(m), d;
}
function NF(r, o, l) {
  const c = r.icons, d = r.aliases || /* @__PURE__ */ Object.create(null);
  let m = {};
  function v(E) {
    m = oT(
      c[E] || d[E],
      m
    );
  }
  return v(o), l.forEach(v), oT(r, m);
}
function Gk(r, o) {
  const l = [];
  if (typeof r != "object" || typeof r.icons != "object")
    return l;
  r.not_found instanceof Array && r.not_found.forEach((d) => {
    o(d, null), l.push(d);
  });
  const c = LF(r);
  for (const d in c) {
    const m = c[d];
    m && (o(d, NF(r, d, m)), l.push(d));
  }
  return l;
}
const jF = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Wk
};
function Hx(r, o) {
  for (const l in o)
    if (l in r && typeof r[l] != typeof o[l])
      return !1;
  return !0;
}
function Qk(r) {
  if (typeof r != "object" || r === null)
    return null;
  const o = r;
  if (typeof o.prefix != "string" || !r.icons || typeof r.icons != "object" || !Hx(r, jF))
    return null;
  const l = o.icons;
  for (const d in l) {
    const m = l[d];
    if (!d.match(Zh) || typeof m.body != "string" || !Hx(
      m,
      uw
    ))
      return null;
  }
  const c = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const d in c) {
    const m = c[d], v = m.parent;
    if (!d.match(Zh) || typeof v != "string" || !l[v] && !c[v] || !Hx(
      m,
      uw
    ))
      return null;
  }
  return o;
}
const lT = /* @__PURE__ */ Object.create(null);
function UF(r, o) {
  return {
    provider: r,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function mc(r, o) {
  const l = lT[r] || (lT[r] = /* @__PURE__ */ Object.create(null));
  return l[o] || (l[o] = UF(r, o));
}
function Gw(r, o) {
  return Qk(o) ? Gk(o, (l, c) => {
    c ? r.icons[l] = c : r.missing.add(l);
  }) : [];
}
function AF(r, o, l) {
  try {
    if (typeof l.body == "string")
      return r.icons[o] = { ...l }, !0;
  } catch {
  }
  return !1;
}
let av = !1;
function qk(r) {
  return typeof r == "boolean" && (av = r), av;
}
function zF(r) {
  const o = typeof r == "string" ? Zy(r, !0, av) : r;
  if (o) {
    const l = mc(o.provider, o.prefix), c = o.name;
    return l.icons[c] || (l.missing.has(c) ? null : void 0);
  }
}
function FF(r, o) {
  const l = Zy(r, !0, av);
  if (!l)
    return !1;
  const c = mc(l.provider, l.prefix);
  return AF(c, l.name, o);
}
function PF(r, o) {
  if (typeof r != "object")
    return !1;
  if (typeof o != "string" && (o = r.provider || ""), av && !o && !r.prefix) {
    let d = !1;
    return Qk(r) && (r.prefix = "", Gk(r, (m, v) => {
      v && FF(m, v) && (d = !0);
    })), d;
  }
  const l = r.prefix;
  if (!by({
    provider: o,
    prefix: l,
    name: "a"
  }))
    return !1;
  const c = mc(o, l);
  return !!Gw(c, r);
}
const Kk = Object.freeze({
  width: null,
  height: null
}), Zk = Object.freeze({
  // Dimensions
  ...Kk,
  // Transformations
  ...My
}), HF = /(-?[0-9.]*[0-9]+[0-9.]*)/g, IF = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function sT(r, o, l) {
  if (o === 1)
    return r;
  if (l = l || 100, typeof r == "number")
    return Math.ceil(r * o * l) / l;
  if (typeof r != "string")
    return r;
  const c = r.split(HF);
  if (c === null || !c.length)
    return r;
  const d = [];
  let m = c.shift(), v = IF.test(m);
  for (; ; ) {
    if (v) {
      const E = parseFloat(m);
      isNaN(E) ? d.push(m) : d.push(Math.ceil(E * o * l) / l);
    } else
      d.push(m);
    if (m = c.shift(), m === void 0)
      return d.join("");
    v = !v;
  }
}
const YF = (r) => r === "unset" || r === "undefined" || r === "none";
function $F(r, o) {
  const l = {
    ...Ww,
    ...r
  }, c = {
    ...Zk,
    ...o
  }, d = {
    left: l.left,
    top: l.top,
    width: l.width,
    height: l.height
  };
  let m = l.body;
  [l, c].forEach((N) => {
    const W = [], ue = N.hFlip, de = N.vFlip;
    let q = N.rotate;
    ue ? de ? q += 2 : (W.push(
      "translate(" + (d.width + d.left).toString() + " " + (0 - d.top).toString() + ")"
    ), W.push("scale(-1 1)"), d.top = d.left = 0) : de && (W.push(
      "translate(" + (0 - d.left).toString() + " " + (d.height + d.top).toString() + ")"
    ), W.push("scale(1 -1)"), d.top = d.left = 0);
    let X;
    switch (q < 0 && (q -= Math.floor(q / 4) * 4), q = q % 4, q) {
      case 1:
        X = d.height / 2 + d.top, W.unshift(
          "rotate(90 " + X.toString() + " " + X.toString() + ")"
        );
        break;
      case 2:
        W.unshift(
          "rotate(180 " + (d.width / 2 + d.left).toString() + " " + (d.height / 2 + d.top).toString() + ")"
        );
        break;
      case 3:
        X = d.width / 2 + d.left, W.unshift(
          "rotate(-90 " + X.toString() + " " + X.toString() + ")"
        );
        break;
    }
    q % 2 === 1 && (d.left !== d.top && (X = d.left, d.left = d.top, d.top = X), d.width !== d.height && (X = d.width, d.width = d.height, d.height = X)), W.length && (m = '<g transform="' + W.join(" ") + '">' + m + "</g>");
  });
  const v = c.width, E = c.height, w = d.width, _ = d.height;
  let k, D;
  v === null ? (D = E === null ? "1em" : E === "auto" ? _ : E, k = sT(D, w / _)) : (k = v === "auto" ? w : v, D = E === null ? sT(k, _ / w) : E === "auto" ? _ : E);
  const O = {}, F = (N, W) => {
    YF(W) || (O[N] = W.toString());
  };
  return F("width", k), F("height", D), O.viewBox = d.left.toString() + " " + d.top.toString() + " " + w.toString() + " " + _.toString(), {
    attributes: O,
    body: m
  };
}
const VF = /\sid="(\S+)"/g, BF = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let WF = 0;
function GF(r, o = BF) {
  const l = [];
  let c;
  for (; c = VF.exec(r); )
    l.push(c[1]);
  if (!l.length)
    return r;
  const d = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return l.forEach((m) => {
    const v = typeof o == "function" ? o(m) : o + (WF++).toString(), E = m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = r.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + E + ')([")]|\\.[a-z])', "g"),
      "$1" + v + d + "$3"
    );
  }), r = r.replace(new RegExp(d, "g"), ""), r;
}
const cw = /* @__PURE__ */ Object.create(null);
function QF(r, o) {
  cw[r] = o;
}
function fw(r) {
  return cw[r] || cw[""];
}
function Qw(r) {
  let o;
  if (typeof r.resources == "string")
    o = [r.resources];
  else if (o = r.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
    // Root path
    path: r.path || "/",
    // URL length limit
    maxURL: r.maxURL || 500,
    // Timeout before next host is used.
    rotate: r.rotate || 750,
    // Timeout before failing query.
    timeout: r.timeout || 5e3,
    // Randomise default API end point.
    random: r.random === !0,
    // Start index
    index: r.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: r.dataAfterTimeout !== !1
  };
}
const qw = /* @__PURE__ */ Object.create(null), Bh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ey = [];
for (; Bh.length > 0; )
  Bh.length === 1 || Math.random() > 0.5 ? Ey.push(Bh.shift()) : Ey.push(Bh.pop());
qw[""] = Qw({
  resources: ["https://api.iconify.design"].concat(Ey)
});
function qF(r, o) {
  const l = Qw(o);
  return l === null ? !1 : (qw[r] = l, !0);
}
function Kw(r) {
  return qw[r];
}
const KF = () => {
  let r;
  try {
    if (r = fetch, typeof r == "function")
      return r;
  } catch {
  }
};
let uT = KF();
function ZF(r, o) {
  const l = Kw(r);
  if (!l)
    return 0;
  let c;
  if (!l.maxURL)
    c = 0;
  else {
    let d = 0;
    l.resources.forEach((v) => {
      d = Math.max(d, v.length);
    });
    const m = o + ".json?icons=";
    c = l.maxURL - d - l.path.length - m.length;
  }
  return c;
}
function XF(r) {
  return r === 404;
}
const JF = (r, o, l) => {
  const c = [], d = ZF(r, o), m = "icons";
  let v = {
    type: m,
    provider: r,
    prefix: o,
    icons: []
  }, E = 0;
  return l.forEach((w, _) => {
    E += w.length + 1, E >= d && _ > 0 && (c.push(v), v = {
      type: m,
      provider: r,
      prefix: o,
      icons: []
    }, E = w.length), v.icons.push(w);
  }), c.push(v), c;
};
function e3(r) {
  if (typeof r == "string") {
    const o = Kw(r);
    if (o)
      return o.path;
  }
  return "/";
}
const t3 = (r, o, l) => {
  if (!uT) {
    l("abort", 424);
    return;
  }
  let c = e3(o.provider);
  switch (o.type) {
    case "icons": {
      const m = o.prefix, E = o.icons.join(","), w = new URLSearchParams({
        icons: E
      });
      c += m + ".json?" + w.toString();
      break;
    }
    case "custom": {
      const m = o.uri;
      c += m.slice(0, 1) === "/" ? m.slice(1) : m;
      break;
    }
    default:
      l("abort", 400);
      return;
  }
  let d = 503;
  uT(r + c).then((m) => {
    const v = m.status;
    if (v !== 200) {
      setTimeout(() => {
        l(XF(v) ? "abort" : "next", v);
      });
      return;
    }
    return d = 501, m.json();
  }).then((m) => {
    if (typeof m != "object" || m === null) {
      setTimeout(() => {
        m === 404 ? l("abort", m) : l("next", d);
      });
      return;
    }
    setTimeout(() => {
      l("success", m);
    });
  }).catch(() => {
    l("next", d);
  });
}, n3 = {
  prepare: JF,
  send: t3
};
function r3(r) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, l = /* @__PURE__ */ Object.create(null);
  r.sort((d, m) => d.provider !== m.provider ? d.provider.localeCompare(m.provider) : d.prefix !== m.prefix ? d.prefix.localeCompare(m.prefix) : d.name.localeCompare(m.name));
  let c = {
    provider: "",
    prefix: "",
    name: ""
  };
  return r.forEach((d) => {
    if (c.name === d.name && c.prefix === d.prefix && c.provider === d.provider)
      return;
    c = d;
    const m = d.provider, v = d.prefix, E = d.name, w = l[m] || (l[m] = /* @__PURE__ */ Object.create(null)), _ = w[v] || (w[v] = mc(m, v));
    let k;
    E in _.icons ? k = o.loaded : v === "" || _.missing.has(E) ? k = o.missing : k = o.pending;
    const D = {
      provider: m,
      prefix: v,
      name: E
    };
    k.push(D);
  }), o;
}
function Xk(r, o) {
  r.forEach((l) => {
    const c = l.loaderCallbacks;
    c && (l.loaderCallbacks = c.filter((d) => d.id !== o));
  });
}
function a3(r) {
  r.pendingCallbacksFlag || (r.pendingCallbacksFlag = !0, setTimeout(() => {
    r.pendingCallbacksFlag = !1;
    const o = r.loaderCallbacks ? r.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let l = !1;
    const c = r.provider, d = r.prefix;
    o.forEach((m) => {
      const v = m.icons, E = v.pending.length;
      v.pending = v.pending.filter((w) => {
        if (w.prefix !== d)
          return !0;
        const _ = w.name;
        if (r.icons[_])
          v.loaded.push({
            provider: c,
            prefix: d,
            name: _
          });
        else if (r.missing.has(_))
          v.missing.push({
            provider: c,
            prefix: d,
            name: _
          });
        else
          return l = !0, !0;
        return !1;
      }), v.pending.length !== E && (l || Xk([r], m.id), m.callback(
        v.loaded.slice(0),
        v.missing.slice(0),
        v.pending.slice(0),
        m.abort
      ));
    });
  }));
}
let i3 = 0;
function o3(r, o, l) {
  const c = i3++, d = Xk.bind(null, l, c);
  if (!o.pending.length)
    return d;
  const m = {
    id: c,
    icons: o,
    callback: r,
    abort: d
  };
  return l.forEach((v) => {
    (v.loaderCallbacks || (v.loaderCallbacks = [])).push(m);
  }), d;
}
function l3(r, o = !0, l = !1) {
  const c = [];
  return r.forEach((d) => {
    const m = typeof d == "string" ? Zy(d, o, l) : d;
    m && c.push(m);
  }), c;
}
var s3 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function u3(r, o, l, c) {
  const d = r.resources.length, m = r.random ? Math.floor(Math.random() * d) : r.index;
  let v;
  if (r.random) {
    let G = r.resources.slice(0);
    for (v = []; G.length > 1; ) {
      const J = Math.floor(Math.random() * G.length);
      v.push(G[J]), G = G.slice(0, J).concat(G.slice(J + 1));
    }
    v = v.concat(G);
  } else
    v = r.resources.slice(m).concat(r.resources.slice(0, m));
  const E = Date.now();
  let w = "pending", _ = 0, k, D = null, O = [], F = [];
  typeof c == "function" && F.push(c);
  function N() {
    D && (clearTimeout(D), D = null);
  }
  function W() {
    w === "pending" && (w = "aborted"), N(), O.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), O = [];
  }
  function ue(G, J) {
    J && (F = []), typeof G == "function" && F.push(G);
  }
  function de() {
    return {
      startTime: E,
      payload: o,
      status: w,
      queriesSent: _,
      queriesPending: O.length,
      subscribe: ue,
      abort: W
    };
  }
  function q() {
    w = "failed", F.forEach((G) => {
      G(void 0, k);
    });
  }
  function X() {
    O.forEach((G) => {
      G.status === "pending" && (G.status = "aborted");
    }), O = [];
  }
  function se(G, J, we) {
    const pe = J !== "success";
    switch (O = O.filter((me) => me !== G), w) {
      case "pending":
        break;
      case "failed":
        if (pe || !r.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (J === "abort") {
      k = we, q();
      return;
    }
    if (pe) {
      k = we, O.length || (v.length ? re() : q());
      return;
    }
    if (N(), X(), !r.random) {
      const me = r.resources.indexOf(G.resource);
      me !== -1 && me !== r.index && (r.index = me);
    }
    w = "completed", F.forEach((me) => {
      me(we);
    });
  }
  function re() {
    if (w !== "pending")
      return;
    N();
    const G = v.shift();
    if (G === void 0) {
      if (O.length) {
        D = setTimeout(() => {
          N(), w === "pending" && (X(), q());
        }, r.timeout);
        return;
      }
      q();
      return;
    }
    const J = {
      status: "pending",
      resource: G,
      callback: (we, pe) => {
        se(J, we, pe);
      }
    };
    O.push(J), _++, D = setTimeout(re, r.rotate), l(G, o, J.callback);
  }
  return setTimeout(re), de;
}
function Jk(r) {
  const o = {
    ...s3,
    ...r
  };
  let l = [];
  function c() {
    l = l.filter((E) => E().status === "pending");
  }
  function d(E, w, _) {
    const k = u3(
      o,
      E,
      w,
      (D, O) => {
        c(), _ && _(D, O);
      }
    );
    return l.push(k), k;
  }
  function m(E) {
    return l.find((w) => E(w)) || null;
  }
  return {
    query: d,
    find: m,
    setIndex: (E) => {
      o.index = E;
    },
    getIndex: () => o.index,
    cleanup: c
  };
}
function cT() {
}
const Ix = /* @__PURE__ */ Object.create(null);
function c3(r) {
  if (!Ix[r]) {
    const o = Kw(r);
    if (!o)
      return;
    const l = Jk(o), c = {
      config: o,
      redundancy: l
    };
    Ix[r] = c;
  }
  return Ix[r];
}
function f3(r, o, l) {
  let c, d;
  if (typeof r == "string") {
    const m = fw(r);
    if (!m)
      return l(void 0, 424), cT;
    d = m.send;
    const v = c3(r);
    v && (c = v.redundancy);
  } else {
    const m = Qw(r);
    if (m) {
      c = Jk(m);
      const v = r.resources ? r.resources[0] : "", E = fw(v);
      E && (d = E.send);
    }
  }
  return !c || !d ? (l(void 0, 424), cT) : c.query(o, d, l)().abort;
}
const fT = "iconify2", iv = "iconify", eR = iv + "-count", dT = iv + "-version", tR = 36e5, d3 = 168;
function dw(r, o) {
  try {
    return r.getItem(o);
  } catch {
  }
}
function Zw(r, o, l) {
  try {
    return r.setItem(o, l), !0;
  } catch {
  }
}
function pT(r, o) {
  try {
    r.removeItem(o);
  } catch {
  }
}
function pw(r, o) {
  return Zw(r, eR, o.toString());
}
function hw(r) {
  return parseInt(dw(r, eR)) || 0;
}
const Xy = {
  local: !0,
  session: !0
}, nR = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Xw = !1;
function p3(r) {
  Xw = r;
}
let hy = typeof window > "u" ? {} : window;
function rR(r) {
  const o = r + "Storage";
  try {
    if (hy && hy[o] && typeof hy[o].length == "number")
      return hy[o];
  } catch {
  }
  Xy[r] = !1;
}
function aR(r, o) {
  const l = rR(r);
  if (!l)
    return;
  const c = dw(l, dT);
  if (c !== fT) {
    if (c) {
      const E = hw(l);
      for (let w = 0; w < E; w++)
        pT(l, iv + w.toString());
    }
    Zw(l, dT, fT), pw(l, 0);
    return;
  }
  const d = Math.floor(Date.now() / tR) - d3, m = (E) => {
    const w = iv + E.toString(), _ = dw(l, w);
    if (typeof _ == "string") {
      try {
        const k = JSON.parse(_);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > d && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, E))
          return !0;
      } catch {
      }
      pT(l, w);
    }
  };
  let v = hw(l);
  for (let E = v - 1; E >= 0; E--)
    m(E) || (E === v - 1 ? (v--, pw(l, v)) : nR[r].add(E));
}
function iR() {
  if (!Xw) {
    p3(!0);
    for (const r in Xy)
      aR(r, (o) => {
        const l = o.data, c = o.provider, d = l.prefix, m = mc(
          c,
          d
        );
        if (!Gw(m, l).length)
          return !1;
        const v = l.lastModified || -1;
        return m.lastModifiedCached = m.lastModifiedCached ? Math.min(m.lastModifiedCached, v) : v, !0;
      });
  }
}
function h3(r, o) {
  const l = r.lastModifiedCached;
  if (
    // Matches or newer
    l && l >= o
  )
    return l === o;
  if (r.lastModifiedCached = o, l)
    for (const c in Xy)
      aR(c, (d) => {
        const m = d.data;
        return d.provider !== r.provider || m.prefix !== r.prefix || m.lastModified === o;
      });
  return !0;
}
function v3(r, o) {
  Xw || iR();
  function l(c) {
    let d;
    if (!Xy[c] || !(d = rR(c)))
      return;
    const m = nR[c];
    let v;
    if (m.size)
      m.delete(v = Array.from(m).shift());
    else if (v = hw(d), !pw(d, v + 1))
      return;
    const E = {
      cached: Math.floor(Date.now() / tR),
      provider: r.provider,
      data: o
    };
    return Zw(
      d,
      iv + v.toString(),
      JSON.stringify(E)
    );
  }
  o.lastModified && !h3(r, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), l("local") || l("session"));
}
function hT() {
}
function m3(r) {
  r.iconsLoaderFlag || (r.iconsLoaderFlag = !0, setTimeout(() => {
    r.iconsLoaderFlag = !1, a3(r);
  }));
}
function g3(r, o) {
  r.iconsToLoad ? r.iconsToLoad = r.iconsToLoad.concat(o).sort() : r.iconsToLoad = o, r.iconsQueueFlag || (r.iconsQueueFlag = !0, setTimeout(() => {
    r.iconsQueueFlag = !1;
    const { provider: l, prefix: c } = r, d = r.iconsToLoad;
    delete r.iconsToLoad;
    let m;
    if (!d || !(m = fw(l)))
      return;
    m.prepare(l, c, d).forEach((E) => {
      f3(l, E, (w) => {
        if (typeof w != "object")
          E.icons.forEach((_) => {
            r.missing.add(_);
          });
        else
          try {
            const _ = Gw(
              r,
              w
            );
            if (!_.length)
              return;
            const k = r.pendingIcons;
            k && _.forEach((D) => {
              k.delete(D);
            }), v3(r, w);
          } catch (_) {
            console.error(_);
          }
        m3(r);
      });
    });
  }));
}
const y3 = (r, o) => {
  const l = l3(r, !0, qk()), c = r3(l);
  if (!c.pending.length) {
    let w = !0;
    return o && setTimeout(() => {
      w && o(
        c.loaded,
        c.missing,
        c.pending,
        hT
      );
    }), () => {
      w = !1;
    };
  }
  const d = /* @__PURE__ */ Object.create(null), m = [];
  let v, E;
  return c.pending.forEach((w) => {
    const { provider: _, prefix: k } = w;
    if (k === E && _ === v)
      return;
    v = _, E = k, m.push(mc(_, k));
    const D = d[_] || (d[_] = /* @__PURE__ */ Object.create(null));
    D[k] || (D[k] = []);
  }), c.pending.forEach((w) => {
    const { provider: _, prefix: k, name: D } = w, O = mc(_, k), F = O.pendingIcons || (O.pendingIcons = /* @__PURE__ */ new Set());
    F.has(D) || (F.add(D), d[_][k].push(D));
  }), m.forEach((w) => {
    const { provider: _, prefix: k } = w;
    d[_][k].length && g3(w, d[_][k]);
  }), o ? o3(o, c, m) : hT;
};
function S3(r, o) {
  const l = {
    ...r
  };
  for (const c in o) {
    const d = o[c], m = typeof d;
    c in Kk ? (d === null || d && (m === "string" || m === "number")) && (l[c] = d) : m === typeof l[c] && (l[c] = c === "rotate" ? d % 4 : d);
  }
  return l;
}
const x3 = /[\s,]+/;
function w3(r, o) {
  o.split(x3).forEach((l) => {
    switch (l.trim()) {
      case "horizontal":
        r.hFlip = !0;
        break;
      case "vertical":
        r.vFlip = !0;
        break;
    }
  });
}
function b3(r, o = 0) {
  const l = r.replace(/^-?[0-9.]*/, "");
  function c(d) {
    for (; d < 0; )
      d += 4;
    return d % 4;
  }
  if (l === "") {
    const d = parseInt(r);
    return isNaN(d) ? 0 : c(d);
  } else if (l !== r) {
    let d = 0;
    switch (l) {
      case "%":
        d = 25;
        break;
      case "deg":
        d = 90;
    }
    if (d) {
      let m = parseFloat(r.slice(0, r.length - l.length));
      return isNaN(m) ? 0 : (m = m / d, m % 1 === 0 ? c(m) : 0);
    }
  }
  return o;
}
function E3(r, o) {
  let l = r.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const c in o)
    l += " " + c + '="' + o[c] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + l + ">" + r + "</svg>";
}
function C3(r) {
  return r.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function _3(r) {
  return "data:image/svg+xml," + C3(r);
}
function T3(r) {
  return 'url("' + _3(r) + '")';
}
let Xh;
function k3() {
  try {
    Xh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (r) => r
    });
  } catch {
    Xh = null;
  }
}
function R3(r) {
  return Xh === void 0 && k3(), Xh ? Xh.createHTML(r) : r;
}
const oR = {
  ...Zk,
  inline: !1
}, D3 = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, O3 = {
  display: "inline-block"
}, vw = {
  backgroundColor: "currentColor"
}, lR = {
  backgroundColor: "transparent"
}, vT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, mT = {
  WebkitMask: vw,
  mask: vw,
  background: lR
};
for (const r in mT) {
  const o = mT[r];
  for (const l in vT)
    o[r + l] = vT[l];
}
const M3 = {
  ...oR,
  inline: !0
};
function gT(r) {
  return r + (r.match(/^[-0-9.]+$/) ? "px" : "");
}
const L3 = (r, o, l, c) => {
  const d = l ? M3 : oR, m = S3(d, o), v = o.mode || "svg", E = {}, w = o.style || {}, _ = {
    ...v === "svg" ? D3 : {},
    ref: c
  };
  for (let de in o) {
    const q = o[de];
    if (q !== void 0)
      switch (de) {
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
          m[de] = q === !0 || q === "true" || q === 1;
          break;
        case "flip":
          typeof q == "string" && w3(m, q);
          break;
        case "color":
          E.color = q;
          break;
        case "rotate":
          typeof q == "string" ? m[de] = b3(q) : typeof q == "number" && (m[de] = q);
          break;
        case "ariaHidden":
        case "aria-hidden":
          q !== !0 && q !== "true" && delete _["aria-hidden"];
          break;
        default:
          d[de] === void 0 && (_[de] = q);
      }
  }
  const k = $F(r, m), D = k.attributes;
  if (m.inline && (E.verticalAlign = "-0.125em"), v === "svg") {
    _.style = {
      ...E,
      ...w
    }, Object.assign(_, D);
    let de = 0, q = o.id;
    return typeof q == "string" && (q = q.replace(/-/g, "_")), _.dangerouslySetInnerHTML = {
      __html: R3(GF(k.body, q ? () => q + "ID" + de++ : "iconifyReact"))
    }, Dr.createElement("svg", _);
  }
  const { body: O, width: F, height: N } = r, W = v === "mask" || (v === "bg" ? !1 : O.indexOf("currentColor") !== -1), ue = E3(O, {
    ...D,
    width: F + "",
    height: N + ""
  });
  return _.style = {
    ...E,
    "--svg": T3(ue),
    width: gT(D.width),
    height: gT(D.height),
    ...O3,
    ...W ? vw : lR,
    ...w
  }, Dr.createElement("span", _);
};
qk(!0);
QF("", n3);
if (typeof document < "u" && typeof window < "u") {
  iR();
  const r = window;
  if (r.IconifyPreload !== void 0) {
    const o = r.IconifyPreload, l = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((c) => {
      try {
        // Check if item is an object and not null/array
        (typeof c != "object" || c === null || c instanceof Array || // Check for 'icons' and 'prefix'
        typeof c.icons != "object" || typeof c.prefix != "string" || // Add icon set
        !PF(c)) && console.error(l);
      } catch {
        console.error(l);
      }
    });
  }
  if (r.IconifyProviders !== void 0) {
    const o = r.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let l in o) {
        const c = "IconifyProviders[" + l + "] is invalid.";
        try {
          const d = o[l];
          if (typeof d != "object" || !d || d.resources === void 0)
            continue;
          qF(l, d) || console.error(c);
        } catch {
          console.error(c);
        }
      }
  }
}
class sR extends Dr.Component {
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
    const l = this.state, c = this.props.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string") {
      this._icon = "", this._abortLoading(), (o || l.icon === null) && this._setData({
        data: c
      });
      return;
    }
    let d;
    if (typeof c != "string" || (d = Zy(c, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const m = zF(d);
    if (!m) {
      (!this._loading || this._loading.name !== c) && (this._abortLoading(), this._icon = "", this._setData(null), m !== null && (this._loading = {
        name: c,
        abort: y3([d], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== c || l.icon === null) {
      this._abortLoading(), this._icon = c;
      const v = ["iconify"];
      d.prefix !== "" && v.push("iconify--" + d.prefix), d.provider !== "" && v.push("iconify--" + d.provider), this._setData({
        data: m,
        classes: v
      }), this.props.onLoad && this.props.onLoad(c);
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
    const o = this.props, l = this.state.icon;
    if (l === null)
      return o.children ? o.children : Dr.createElement("span", {});
    let c = o;
    return l.classes && (c = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + l.classes.join(" ")
    }), L3({
      ...Ww,
      ...l.data
    }, c, o._inline, o._ref);
  }
}
const N3 = Dr.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !1
  };
  return Dr.createElement(sR, c);
});
Dr.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !0
  };
  return Dr.createElement(sR, c);
});
const yT = (r) => {
  let o;
  const l = /* @__PURE__ */ new Set(), c = (w, _) => {
    const k = typeof w == "function" ? w(o) : w;
    if (!Object.is(k, o)) {
      const D = o;
      o = _ ?? typeof k != "object" ? k : Object.assign({}, o, k), l.forEach((O) => O(o, D));
    }
  }, d = () => o, E = { setState: c, getState: d, subscribe: (w) => (l.add(w), () => l.delete(w)), destroy: () => {
    l.clear();
  } };
  return o = r(c, d, E), E;
}, j3 = (r) => r ? yT(r) : yT;
var mw = { exports: {} }, Yx = {}, vy = { exports: {} }, $x = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ST;
function U3() {
  if (ST)
    return $x;
  ST = 1;
  var r = Dr;
  function o(D, O) {
    return D === O && (D !== 0 || 1 / D === 1 / O) || D !== D && O !== O;
  }
  var l = typeof Object.is == "function" ? Object.is : o, c = r.useState, d = r.useEffect, m = r.useLayoutEffect, v = r.useDebugValue;
  function E(D, O) {
    var F = O(), N = c({ inst: { value: F, getSnapshot: O } }), W = N[0].inst, ue = N[1];
    return m(function() {
      W.value = F, W.getSnapshot = O, w(W) && ue({ inst: W });
    }, [D, F, O]), d(function() {
      return w(W) && ue({ inst: W }), D(function() {
        w(W) && ue({ inst: W });
      });
    }, [D]), v(F), F;
  }
  function w(D) {
    var O = D.getSnapshot;
    D = D.value;
    try {
      var F = O();
      return !l(D, F);
    } catch {
      return !0;
    }
  }
  function _(D, O) {
    return O();
  }
  var k = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : E;
  return $x.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : k, $x;
}
var Vx = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xT;
function A3() {
  return xT || (xT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = Dr, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(X) {
      {
        for (var se = arguments.length, re = new Array(se > 1 ? se - 1 : 0), G = 1; G < se; G++)
          re[G - 1] = arguments[G];
        c("error", X, re);
      }
    }
    function c(X, se, re) {
      {
        var G = o.ReactDebugCurrentFrame, J = G.getStackAddendum();
        J !== "" && (se += "%s", re = re.concat([J]));
        var we = re.map(function(pe) {
          return String(pe);
        });
        we.unshift("Warning: " + se), Function.prototype.apply.call(console[X], console, we);
      }
    }
    function d(X, se) {
      return X === se && (X !== 0 || 1 / X === 1 / se) || X !== X && se !== se;
    }
    var m = typeof Object.is == "function" ? Object.is : d, v = r.useState, E = r.useEffect, w = r.useLayoutEffect, _ = r.useDebugValue, k = !1, D = !1;
    function O(X, se, re) {
      k || r.startTransition !== void 0 && (k = !0, l("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var G = se();
      if (!D) {
        var J = se();
        m(G, J) || (l("The result of getSnapshot should be cached to avoid an infinite loop"), D = !0);
      }
      var we = v({
        inst: {
          value: G,
          getSnapshot: se
        }
      }), pe = we[0].inst, me = we[1];
      return w(function() {
        pe.value = G, pe.getSnapshot = se, F(pe) && me({
          inst: pe
        });
      }, [X, G, se]), E(function() {
        F(pe) && me({
          inst: pe
        });
        var Fe = function() {
          F(pe) && me({
            inst: pe
          });
        };
        return X(Fe);
      }, [X]), _(G), G;
    }
    function F(X) {
      var se = X.getSnapshot, re = X.value;
      try {
        var G = se();
        return !m(re, G);
      } catch {
        return !0;
      }
    }
    function N(X, se, re) {
      return se();
    }
    var W = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ue = !W, de = ue ? N : O, q = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : de;
    Vx.useSyncExternalStore = q, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vx;
}
var wT;
function uR() {
  return wT || (wT = 1, process.env.NODE_ENV === "production" ? vy.exports = U3() : vy.exports = A3()), vy.exports;
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
var bT;
function z3() {
  if (bT)
    return Yx;
  bT = 1;
  var r = Dr, o = uR();
  function l(_, k) {
    return _ === k && (_ !== 0 || 1 / _ === 1 / k) || _ !== _ && k !== k;
  }
  var c = typeof Object.is == "function" ? Object.is : l, d = o.useSyncExternalStore, m = r.useRef, v = r.useEffect, E = r.useMemo, w = r.useDebugValue;
  return Yx.useSyncExternalStoreWithSelector = function(_, k, D, O, F) {
    var N = m(null);
    if (N.current === null) {
      var W = { hasValue: !1, value: null };
      N.current = W;
    } else
      W = N.current;
    N = E(function() {
      function de(G) {
        if (!q) {
          if (q = !0, X = G, G = O(G), F !== void 0 && W.hasValue) {
            var J = W.value;
            if (F(J, G))
              return se = J;
          }
          return se = G;
        }
        if (J = se, c(X, G))
          return J;
        var we = O(G);
        return F !== void 0 && F(J, we) ? J : (X = G, se = we);
      }
      var q = !1, X, se, re = D === void 0 ? null : D;
      return [function() {
        return de(k());
      }, re === null ? void 0 : function() {
        return de(re());
      }];
    }, [k, D, O, F]);
    var ue = d(_, N[0], N[1]);
    return v(function() {
      W.hasValue = !0, W.value = ue;
    }, [ue]), w(ue), ue;
  }, Yx;
}
var Bx = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ET;
function F3() {
  return ET || (ET = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = Dr, o = uR();
    function l(k, D) {
      return k === D && (k !== 0 || 1 / k === 1 / D) || k !== k && D !== D;
    }
    var c = typeof Object.is == "function" ? Object.is : l, d = o.useSyncExternalStore, m = r.useRef, v = r.useEffect, E = r.useMemo, w = r.useDebugValue;
    function _(k, D, O, F, N) {
      var W = m(null), ue;
      W.current === null ? (ue = {
        hasValue: !1,
        value: null
      }, W.current = ue) : ue = W.current;
      var de = E(function() {
        var re = !1, G, J, we = function(Qe) {
          if (!re) {
            re = !0, G = Qe;
            var Ne = F(Qe);
            if (N !== void 0 && ue.hasValue) {
              var Ze = ue.value;
              if (N(Ze, Ne))
                return J = Ze, Ze;
            }
            return J = Ne, Ne;
          }
          var lt = G, st = J;
          if (c(lt, Qe))
            return st;
          var Vt = F(Qe);
          return N !== void 0 && N(st, Vt) ? st : (G = Qe, J = Vt, Vt);
        }, pe = O === void 0 ? null : O, me = function() {
          return we(D());
        }, Fe = pe === null ? void 0 : function() {
          return we(pe());
        };
        return [me, Fe];
      }, [D, O, F, N]), q = de[0], X = de[1], se = d(k, q, X);
      return v(function() {
        ue.hasValue = !0, ue.value = se;
      }, [se]), w(se), se;
    }
    Bx.useSyncExternalStoreWithSelector = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bx;
}
process.env.NODE_ENV === "production" ? mw.exports = z3() : mw.exports = F3();
var P3 = mw.exports;
const H3 = /* @__PURE__ */ r2(P3), { useSyncExternalStoreWithSelector: I3 } = H3;
function Y3(r, o = r.getState, l) {
  const c = I3(
    r.subscribe,
    r.getState,
    r.getServerState || r.getState,
    o,
    l
  );
  return n2(c), c;
}
const CT = (r) => {
  const o = typeof r == "function" ? j3(r) : r, l = (c, d) => Y3(o, c, d);
  return Object.assign(l, o), l;
}, cR = (r) => r ? CT(r) : CT, fR = (r, o) => (...l) => Object.assign({}, r, o(...l)), dR = cR(
  fR(
    {
      currentOpen: []
    },
    (r, o) => ({
      openModal: (l) => {
        if (o().currentOpen.includes(l))
          return;
        const c = [...o().currentOpen, l];
        console.log("Updated openModal: ", c), r({ currentOpen: c });
      },
      closeModal: () => {
        const l = document.querySelector("#modal-root");
        l && (l.classList.add("closed"), setTimeout(() => {
          l.classList.remove("closed");
          const c = o().currentOpen.slice(
            0,
            o().currentOpen.length - 1
          );
          console.log("Updated openModal: ", c), r({ currentOpen: c });
        }, 190));
      },
      closeAllModals: () => {
        const l = document.querySelector("#modal-root");
        l && (l.classList.add("closed"), setTimeout(() => {
          l.classList.remove("closed"), r({ currentOpen: [] });
        }, 190));
      }
    })
  )
), $3 = ({
  children: r,
  currentName: o,
  variant: l = "neutral",
  size: c = "normal",
  closeButton: d = !1,
  onClose: m = () => {
  }
}) => {
  const { currentOpen: v, closeModal: E } = dR(), w = document.querySelector("#modal-root"), _ = En(null);
  return wd(() => {
    v.length > 0 && _.current && (_.current.focus(), w.style.display = "block"), v.length === 0 && (w.style.display = "none");
  }, [v, w]), v.includes(o) && w ? OF.createPortal(
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: _,
        onKeyDown: (k) => {
          k.key === "Escape" && (m(), E());
        },
        className: "modal",
        children: [
          /* @__PURE__ */ P.jsx(
            "div",
            {
              className: "modal-overlay",
              onClick: () => {
                m(), E();
              }
            }
          ),
          /* @__PURE__ */ P.jsxs(
            "div",
            {
              className: `modal-body container rounded-box bg-${l} ${c}`,
              children: [
                d && /* @__PURE__ */ P.jsx(
                  "button",
                  {
                    type: "button",
                    className: "close-btn",
                    onClick: () => {
                      m(), E();
                    },
                    children: /* @__PURE__ */ P.jsx(N3, { icon: "mingcute:close-fill", height: 16 })
                  }
                ),
                r
              ]
            }
          )
        ]
      }
    ),
    w
  ) : null;
}, V3 = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, o) {
    console && console[r] && console[r].apply(console, o);
  }
};
class Ly {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, l);
  }
  init(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = l.prefix || "i18next:", this.logger = o || V3, this.options = l, this.debug = l.debug;
  }
  log() {
    for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
      l[c] = arguments[c];
    return this.forward(l, "log", "", !0);
  }
  warn() {
    for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
      l[c] = arguments[c];
    return this.forward(l, "warn", "", !0);
  }
  error() {
    for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
      l[c] = arguments[c];
    return this.forward(l, "error", "");
  }
  deprecate() {
    for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
      l[c] = arguments[c];
    return this.forward(l, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(o, l, c, d) {
    return d && !this.debug ? null : (typeof o[0] == "string" && (o[0] = `${c}${this.prefix} ${o[0]}`), this.logger[l](o));
  }
  create(o) {
    return new Ly(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new Ly(this.logger, o);
  }
}
var Bo = new Ly();
class Jy {
  constructor() {
    this.observers = {};
  }
  on(o, l) {
    return o.split(" ").forEach((c) => {
      this.observers[c] = this.observers[c] || [], this.observers[c].push(l);
    }), this;
  }
  off(o, l) {
    if (this.observers[o]) {
      if (!l) {
        delete this.observers[o];
        return;
      }
      this.observers[o] = this.observers[o].filter((c) => c !== l);
    }
  }
  emit(o) {
    for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
      c[d - 1] = arguments[d];
    this.observers[o] && [].concat(this.observers[o]).forEach((m) => {
      m(...c);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((m) => {
      m.apply(m, [o, ...c]);
    });
  }
}
function Wh() {
  let r, o;
  const l = new Promise((c, d) => {
    r = c, o = d;
  });
  return l.resolve = r, l.reject = o, l;
}
function _T(r) {
  return r == null ? "" : "" + r;
}
function B3(r, o, l) {
  r.forEach((c) => {
    o[c] && (l[c] = o[c]);
  });
}
function Jw(r, o, l) {
  function c(v) {
    return v && v.indexOf("###") > -1 ? v.replace(/###/g, ".") : v;
  }
  function d() {
    return !r || typeof r == "string";
  }
  const m = typeof o != "string" ? [].concat(o) : o.split(".");
  for (; m.length > 1; ) {
    if (d())
      return {};
    const v = c(m.shift());
    !r[v] && l && (r[v] = new l()), Object.prototype.hasOwnProperty.call(r, v) ? r = r[v] : r = {};
  }
  return d() ? {} : {
    obj: r,
    k: c(m.shift())
  };
}
function TT(r, o, l) {
  const {
    obj: c,
    k: d
  } = Jw(r, o, Object);
  c[d] = l;
}
function W3(r, o, l, c) {
  const {
    obj: d,
    k: m
  } = Jw(r, o, Object);
  d[m] = d[m] || [], c && (d[m] = d[m].concat(l)), c || d[m].push(l);
}
function Ny(r, o) {
  const {
    obj: l,
    k: c
  } = Jw(r, o);
  if (l)
    return l[c];
}
function G3(r, o, l) {
  const c = Ny(r, l);
  return c !== void 0 ? c : Ny(o, l);
}
function pR(r, o, l) {
  for (const c in o)
    c !== "__proto__" && c !== "constructor" && (c in r ? typeof r[c] == "string" || r[c] instanceof String || typeof o[c] == "string" || o[c] instanceof String ? l && (r[c] = o[c]) : pR(r[c], o[c], l) : r[c] = o[c]);
  return r;
}
function hd(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Q3 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function q3(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (o) => Q3[o]) : r;
}
const K3 = [" ", ",", "?", "!", ";"];
function Z3(r, o, l) {
  o = o || "", l = l || "";
  const c = K3.filter((v) => o.indexOf(v) < 0 && l.indexOf(v) < 0);
  if (c.length === 0)
    return !0;
  const d = new RegExp(`(${c.map((v) => v === "?" ? "\\?" : v).join("|")})`);
  let m = !d.test(r);
  if (!m) {
    const v = r.indexOf(l);
    v > 0 && !d.test(r.substring(0, v)) && (m = !0);
  }
  return m;
}
function jy(r, o) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!r)
    return;
  if (r[o])
    return r[o];
  const c = o.split(l);
  let d = r;
  for (let m = 0; m < c.length; ++m) {
    if (!d || typeof d[c[m]] == "string" && m + 1 < c.length)
      return;
    if (d[c[m]] === void 0) {
      let v = 2, E = c.slice(m, m + v).join(l), w = d[E];
      for (; w === void 0 && c.length > m + v; )
        v++, E = c.slice(m, m + v).join(l), w = d[E];
      if (w === void 0)
        return;
      if (w === null)
        return null;
      if (o.endsWith(E)) {
        if (typeof w == "string")
          return w;
        if (E && typeof w[E] == "string")
          return w[E];
      }
      const _ = c.slice(m + v).join(l);
      return _ ? jy(w, _, l) : void 0;
    }
    d = d[c[m]];
  }
  return d;
}
function Uy(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class kT extends Jy {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = o || {}, this.options = l, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(o) {
    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
  }
  removeNamespaces(o) {
    const l = this.options.ns.indexOf(o);
    l > -1 && this.options.ns.splice(l, 1);
  }
  getResource(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator, v = d.ignoreJSONStructure !== void 0 ? d.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let E = [o, l];
    c && typeof c != "string" && (E = E.concat(c)), c && typeof c == "string" && (E = E.concat(m ? c.split(m) : c)), o.indexOf(".") > -1 && (E = o.split("."));
    const w = Ny(this.data, E);
    return w || !v || typeof c != "string" ? w : jy(this.data && this.data[o] && this.data[o][l], c, m);
  }
  addResource(o, l, c, d) {
    let m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const v = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator;
    let E = [o, l];
    c && (E = E.concat(v ? c.split(v) : c)), o.indexOf(".") > -1 && (E = o.split("."), d = l, l = E[1]), this.addNamespaces(l), TT(this.data, E, d), m.silent || this.emit("added", o, l, c, d);
  }
  addResources(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const m in c)
      (typeof c[m] == "string" || Object.prototype.toString.apply(c[m]) === "[object Array]") && this.addResource(o, l, m, c[m], {
        silent: !0
      });
    d.silent || this.emit("added", o, l, c);
  }
  addResourceBundle(o, l, c, d, m) {
    let v = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1
    }, E = [o, l];
    o.indexOf(".") > -1 && (E = o.split("."), d = c, c = l, l = E[1]), this.addNamespaces(l);
    let w = Ny(this.data, E) || {};
    d ? pR(w, c, m) : w = {
      ...w,
      ...c
    }, TT(this.data, E, w), v.silent || this.emit("added", o, l, c);
  }
  removeResourceBundle(o, l) {
    this.hasResourceBundle(o, l) && delete this.data[o][l], this.removeNamespaces(l), this.emit("removed", o, l);
  }
  hasResourceBundle(o, l) {
    return this.getResource(o, l) !== void 0;
  }
  getResourceBundle(o, l) {
    return l || (l = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(o, l)
    } : this.getResource(o, l);
  }
  getDataByLanguage(o) {
    return this.data[o];
  }
  hasLanguageSomeTranslations(o) {
    const l = this.getDataByLanguage(o);
    return !!(l && Object.keys(l) || []).find((c) => l[c] && Object.keys(l[c]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var hR = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, o, l, c, d) {
    return r.forEach((m) => {
      this.processors[m] && (o = this.processors[m].process(o, l, c, d));
    }), o;
  }
};
const RT = {};
class Ay extends Jy {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), B3(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = l, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Bo.create("translator");
  }
  changeLanguage(o) {
    o && (this.language = o);
  }
  exists(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (o == null)
      return !1;
    const c = this.resolve(o, l);
    return c && c.res !== void 0;
  }
  extractFromKey(o, l) {
    let c = l.nsSeparator !== void 0 ? l.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const d = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let m = l.ns || this.options.defaultNS || [];
    const v = c && o.indexOf(c) > -1, E = !this.options.userDefinedKeySeparator && !l.keySeparator && !this.options.userDefinedNsSeparator && !l.nsSeparator && !Z3(o, c, d);
    if (v && !E) {
      const w = o.match(this.interpolator.nestingRegexp);
      if (w && w.length > 0)
        return {
          key: o,
          namespaces: m
        };
      const _ = o.split(c);
      (c !== d || c === d && this.options.ns.indexOf(_[0]) > -1) && (m = _.shift()), o = _.join(d);
    }
    return typeof m == "string" && (m = [m]), {
      key: o,
      namespaces: m
    };
  }
  translate(o, l, c) {
    if (typeof l != "object" && this.options.overloadTranslationOptionHandler && (l = this.options.overloadTranslationOptionHandler(arguments)), typeof l == "object" && (l = {
      ...l
    }), l || (l = {}), o == null)
      return "";
    Array.isArray(o) || (o = [String(o)]);
    const d = l.returnDetails !== void 0 ? l.returnDetails : this.options.returnDetails, m = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, {
      key: v,
      namespaces: E
    } = this.extractFromKey(o[o.length - 1], l), w = E[E.length - 1], _ = l.lng || this.language, k = l.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (_ && _.toLowerCase() === "cimode") {
      if (k) {
        const X = l.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${w}${X}${v}`,
          usedKey: v,
          exactUsedKey: v,
          usedLng: _,
          usedNS: w
        } : `${w}${X}${v}`;
      }
      return d ? {
        res: v,
        usedKey: v,
        exactUsedKey: v,
        usedLng: _,
        usedNS: w
      } : v;
    }
    const D = this.resolve(o, l);
    let O = D && D.res;
    const F = D && D.usedKey || v, N = D && D.exactUsedKey || v, W = Object.prototype.toString.apply(O), ue = ["[object Number]", "[object Function]", "[object RegExp]"], de = l.joinArrays !== void 0 ? l.joinArrays : this.options.joinArrays, q = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (q && O && typeof O != "string" && typeof O != "boolean" && typeof O != "number" && ue.indexOf(W) < 0 && !(typeof de == "string" && W === "[object Array]")) {
      if (!l.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const X = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(F, O, {
          ...l,
          ns: E
        }) : `key '${v} (${this.language})' returned an object instead of string.`;
        return d ? (D.res = X, D) : X;
      }
      if (m) {
        const X = W === "[object Array]", se = X ? [] : {}, re = X ? N : F;
        for (const G in O)
          if (Object.prototype.hasOwnProperty.call(O, G)) {
            const J = `${re}${m}${G}`;
            se[G] = this.translate(J, {
              ...l,
              joinArrays: !1,
              ns: E
            }), se[G] === J && (se[G] = O[G]);
          }
        O = se;
      }
    } else if (q && typeof de == "string" && W === "[object Array]")
      O = O.join(de), O && (O = this.extendTranslation(O, o, l, c));
    else {
      let X = !1, se = !1;
      const re = l.count !== void 0 && typeof l.count != "string", G = Ay.hasDefaultValue(l), J = re ? this.pluralResolver.getSuffix(_, l.count, l) : "", we = l.ordinal && re ? this.pluralResolver.getSuffix(_, l.count, {
        ordinal: !1
      }) : "", pe = l[`defaultValue${J}`] || l[`defaultValue${we}`] || l.defaultValue;
      !this.isValidLookup(O) && G && (X = !0, O = pe), this.isValidLookup(O) || (se = !0, O = v);
      const me = (l.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && se ? void 0 : O, Fe = G && pe !== O && this.options.updateMissing;
      if (se || X || Fe) {
        if (this.logger.log(Fe ? "updateKey" : "missingKey", _, w, v, Fe ? pe : O), m) {
          const lt = this.resolve(v, {
            ...l,
            keySeparator: !1
          });
          lt && lt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Qe = [];
        const Ne = this.languageUtils.getFallbackCodes(this.options.fallbackLng, l.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Ne && Ne[0])
          for (let lt = 0; lt < Ne.length; lt++)
            Qe.push(Ne[lt]);
        else
          this.options.saveMissingTo === "all" ? Qe = this.languageUtils.toResolveHierarchy(l.lng || this.language) : Qe.push(l.lng || this.language);
        const Ze = (lt, st, Vt) => {
          const he = G && Vt !== O ? Vt : me;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(lt, w, st, he, Fe, l) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(lt, w, st, he, Fe, l), this.emit("missingKey", lt, w, st, O);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && re ? Qe.forEach((lt) => {
          this.pluralResolver.getSuffixes(lt, l).forEach((st) => {
            Ze([lt], v + st, l[`defaultValue${st}`] || pe);
          });
        }) : Ze(Qe, v, pe));
      }
      O = this.extendTranslation(O, o, l, D, c), se && O === v && this.options.appendNamespaceToMissingKey && (O = `${w}:${v}`), (se || X) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? O = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${w}:${v}` : v, X ? O : void 0) : O = this.options.parseMissingKeyHandler(O));
    }
    return d ? (D.res = O, D) : O;
  }
  extendTranslation(o, l, c, d, m) {
    var v = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      o = this.i18nFormat.parse(o, {
        ...this.options.interpolation.defaultVariables,
        ...c
      }, c.lng || this.language || d.usedLng, d.usedNS, d.usedKey, {
        resolved: d
      });
    else if (!c.skipInterpolation) {
      c.interpolation && this.interpolator.init({
        ...c,
        interpolation: {
          ...this.options.interpolation,
          ...c.interpolation
        }
      });
      const _ = typeof o == "string" && (c && c.interpolation && c.interpolation.skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let k;
      if (_) {
        const O = o.match(this.interpolator.nestingRegexp);
        k = O && O.length;
      }
      let D = c.replace && typeof c.replace != "string" ? c.replace : c;
      if (this.options.interpolation.defaultVariables && (D = {
        ...this.options.interpolation.defaultVariables,
        ...D
      }), o = this.interpolator.interpolate(o, D, c.lng || this.language, c), _) {
        const O = o.match(this.interpolator.nestingRegexp), F = O && O.length;
        k < F && (c.nest = !1);
      }
      !c.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (c.lng = d.usedLng), c.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var O = arguments.length, F = new Array(O), N = 0; N < O; N++)
          F[N] = arguments[N];
        return m && m[0] === F[0] && !c.context ? (v.logger.warn(`It seems you are nesting recursively key: ${F[0]} in key: ${l[0]}`), null) : v.translate(...F, l);
      }, c)), c.interpolation && this.interpolator.reset();
    }
    const E = c.postProcess || this.options.postProcess, w = typeof E == "string" ? [E] : E;
    return o != null && w && w.length && c.applyPostProcessor !== !1 && (o = hR.handle(w, o, l, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: d,
      ...c
    } : c, this)), o;
  }
  resolve(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c, d, m, v, E;
    return typeof o == "string" && (o = [o]), o.forEach((w) => {
      if (this.isValidLookup(c))
        return;
      const _ = this.extractFromKey(w, l), k = _.key;
      d = k;
      let D = _.namespaces;
      this.options.fallbackNS && (D = D.concat(this.options.fallbackNS));
      const O = l.count !== void 0 && typeof l.count != "string", F = O && !l.ordinal && l.count === 0 && this.pluralResolver.shouldUseIntlApi(), N = l.context !== void 0 && (typeof l.context == "string" || typeof l.context == "number") && l.context !== "", W = l.lngs ? l.lngs : this.languageUtils.toResolveHierarchy(l.lng || this.language, l.fallbackLng);
      D.forEach((ue) => {
        this.isValidLookup(c) || (E = ue, !RT[`${W[0]}-${ue}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(E) && (RT[`${W[0]}-${ue}`] = !0, this.logger.warn(`key "${d}" for languages "${W.join(", ")}" won't get resolved as namespace "${E}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), W.forEach((de) => {
          if (this.isValidLookup(c))
            return;
          v = de;
          const q = [k];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(q, k, de, ue, l);
          else {
            let se;
            O && (se = this.pluralResolver.getSuffix(de, l.count, l));
            const re = `${this.options.pluralSeparator}zero`, G = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (O && (q.push(k + se), l.ordinal && se.indexOf(G) === 0 && q.push(k + se.replace(G, this.options.pluralSeparator)), F && q.push(k + re)), N) {
              const J = `${k}${this.options.contextSeparator}${l.context}`;
              q.push(J), O && (q.push(J + se), l.ordinal && se.indexOf(G) === 0 && q.push(J + se.replace(G, this.options.pluralSeparator)), F && q.push(J + re));
            }
          }
          let X;
          for (; X = q.pop(); )
            this.isValidLookup(c) || (m = X, c = this.getResource(de, ue, X, l));
        }));
      });
    }), {
      res: c,
      usedKey: d,
      exactUsedKey: m,
      usedLng: v,
      usedNS: E
    };
  }
  isValidLookup(o) {
    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "");
  }
  getResource(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, l, c, d) : this.resourceStore.getResource(o, l, c, d);
  }
  static hasDefaultValue(o) {
    const l = "defaultValue";
    for (const c in o)
      if (Object.prototype.hasOwnProperty.call(o, c) && l === c.substring(0, l.length) && o[c] !== void 0)
        return !0;
    return !1;
  }
}
function Wx(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class DT {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Bo.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = Uy(o), !o || o.indexOf("-") < 0)
      return null;
    const l = o.split("-");
    return l.length === 2 || (l.pop(), l[l.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(l.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = Uy(o), !o || o.indexOf("-") < 0)
      return o;
    const l = o.split("-");
    return this.formatLanguageCode(l[0]);
  }
  formatLanguageCode(o) {
    if (typeof o == "string" && o.indexOf("-") > -1) {
      const l = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let c = o.split("-");
      return this.options.lowerCaseLng ? c = c.map((d) => d.toLowerCase()) : c.length === 2 ? (c[0] = c[0].toLowerCase(), c[1] = c[1].toUpperCase(), l.indexOf(c[1].toLowerCase()) > -1 && (c[1] = Wx(c[1].toLowerCase()))) : c.length === 3 && (c[0] = c[0].toLowerCase(), c[1].length === 2 && (c[1] = c[1].toUpperCase()), c[0] !== "sgn" && c[2].length === 2 && (c[2] = c[2].toUpperCase()), l.indexOf(c[1].toLowerCase()) > -1 && (c[1] = Wx(c[1].toLowerCase())), l.indexOf(c[2].toLowerCase()) > -1 && (c[2] = Wx(c[2].toLowerCase()))), c.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
  }
  isSupportedCode(o) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (o = this.getLanguagePartFromCode(o)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(o) > -1;
  }
  getBestMatchFromCodes(o) {
    if (!o)
      return null;
    let l;
    return o.forEach((c) => {
      if (l)
        return;
      const d = this.formatLanguageCode(c);
      (!this.options.supportedLngs || this.isSupportedCode(d)) && (l = d);
    }), !l && this.options.supportedLngs && o.forEach((c) => {
      if (l)
        return;
      const d = this.getLanguagePartFromCode(c);
      if (this.isSupportedCode(d))
        return l = d;
      l = this.options.supportedLngs.find((m) => {
        if (m === d || !(m.indexOf("-") < 0 && d.indexOf("-") < 0) && m.indexOf(d) === 0)
          return m;
      });
    }), l || (l = this.getFallbackCodes(this.options.fallbackLng)[0]), l;
  }
  getFallbackCodes(o, l) {
    if (!o)
      return [];
    if (typeof o == "function" && (o = o(l)), typeof o == "string" && (o = [o]), Object.prototype.toString.apply(o) === "[object Array]")
      return o;
    if (!l)
      return o.default || [];
    let c = o[l];
    return c || (c = o[this.getScriptPartFromCode(l)]), c || (c = o[this.formatLanguageCode(l)]), c || (c = o[this.getLanguagePartFromCode(l)]), c || (c = o.default), c || [];
  }
  toResolveHierarchy(o, l) {
    const c = this.getFallbackCodes(l || this.options.fallbackLng || [], o), d = [], m = (v) => {
      v && (this.isSupportedCode(v) ? d.push(v) : this.logger.warn(`rejecting language code not found in supportedLngs: ${v}`));
    };
    return typeof o == "string" && (o.indexOf("-") > -1 || o.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && m(this.formatLanguageCode(o)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && m(this.getScriptPartFromCode(o)), this.options.load !== "currentOnly" && m(this.getLanguagePartFromCode(o))) : typeof o == "string" && m(this.formatLanguageCode(o)), c.forEach((v) => {
      d.indexOf(v) < 0 && m(this.formatLanguageCode(v));
    }), d;
  }
}
let X3 = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], J3 = {
  1: function(r) {
    return +(r > 1);
  },
  2: function(r) {
    return +(r != 1);
  },
  3: function(r) {
    return 0;
  },
  4: function(r) {
    return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
  },
  5: function(r) {
    return r == 0 ? 0 : r == 1 ? 1 : r == 2 ? 2 : r % 100 >= 3 && r % 100 <= 10 ? 3 : r % 100 >= 11 ? 4 : 5;
  },
  6: function(r) {
    return r == 1 ? 0 : r >= 2 && r <= 4 ? 1 : 2;
  },
  7: function(r) {
    return r == 1 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
  },
  8: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : r != 8 && r != 11 ? 2 : 3;
  },
  9: function(r) {
    return +(r >= 2);
  },
  10: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : r < 7 ? 2 : r < 11 ? 3 : 4;
  },
  11: function(r) {
    return r == 1 || r == 11 ? 0 : r == 2 || r == 12 ? 1 : r > 2 && r < 20 ? 2 : 3;
  },
  12: function(r) {
    return +(r % 10 != 1 || r % 100 == 11);
  },
  13: function(r) {
    return +(r !== 0);
  },
  14: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : r == 3 ? 2 : 3;
  },
  15: function(r) {
    return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
  },
  16: function(r) {
    return r % 10 == 1 && r % 100 != 11 ? 0 : r !== 0 ? 1 : 2;
  },
  17: function(r) {
    return r == 1 || r % 10 == 1 && r % 100 != 11 ? 0 : 1;
  },
  18: function(r) {
    return r == 0 ? 0 : r == 1 ? 1 : 2;
  },
  19: function(r) {
    return r == 1 ? 0 : r == 0 || r % 100 > 1 && r % 100 < 11 ? 1 : r % 100 > 10 && r % 100 < 20 ? 2 : 3;
  },
  20: function(r) {
    return r == 1 ? 0 : r == 0 || r % 100 > 0 && r % 100 < 20 ? 1 : 2;
  },
  21: function(r) {
    return r % 100 == 1 ? 1 : r % 100 == 2 ? 2 : r % 100 == 3 || r % 100 == 4 ? 3 : 0;
  },
  22: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : (r < 0 || r > 10) && r % 10 == 0 ? 2 : 3;
  }
};
const eP = ["v1", "v2", "v3"], tP = ["v4"], OT = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function nP() {
  const r = {};
  return X3.forEach((o) => {
    o.lngs.forEach((l) => {
      r[l] = {
        numbers: o.nr,
        plurals: J3[o.fc]
      };
    });
  }), r;
}
class rP {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = l, this.logger = Bo.create("pluralResolver"), (!this.options.compatibilityJSON || tP.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = nP();
  }
  addRule(o, l) {
    this.rules[o] = l;
  }
  getRule(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Uy(o), {
          type: l.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[o] || this.rules[this.languageUtils.getLanguagePartFromCode(o)];
  }
  needsPlural(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const c = this.getRule(o, l);
    return this.shouldUseIntlApi() ? c && c.resolvedOptions().pluralCategories.length > 1 : c && c.numbers.length > 1;
  }
  getPluralFormsOfKey(o, l) {
    let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(o, c).map((d) => `${l}${d}`);
  }
  getSuffixes(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const c = this.getRule(o, l);
    return c ? this.shouldUseIntlApi() ? c.resolvedOptions().pluralCategories.sort((d, m) => OT[d] - OT[m]).map((d) => `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : c.numbers.map((d) => this.getSuffix(o, d, l)) : [];
  }
  getSuffix(o, l) {
    let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const d = this.getRule(o, c);
    return d ? this.shouldUseIntlApi() ? `${this.options.prepend}${c.ordinal ? `ordinal${this.options.prepend}` : ""}${d.select(l)}` : this.getSuffixRetroCompatible(d, l) : (this.logger.warn(`no plural rule found for: ${o}`), "");
  }
  getSuffixRetroCompatible(o, l) {
    const c = o.noAbs ? o.plurals(l) : o.plurals(Math.abs(l));
    let d = o.numbers[c];
    this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 && (d === 2 ? d = "plural" : d === 1 && (d = ""));
    const m = () => this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
    return this.options.compatibilityJSON === "v1" ? d === 1 ? "" : typeof d == "number" ? `_plural_${d.toString()}` : m() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 ? m() : this.options.prepend && c.toString() ? this.options.prepend + c.toString() : c.toString();
  }
  shouldUseIntlApi() {
    return !eP.includes(this.options.compatibilityJSON);
  }
}
function MT(r, o, l) {
  let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = G3(r, o, l);
  return !m && d && typeof l == "string" && (m = jy(r, l, c), m === void 0 && (m = jy(o, l, c))), m;
}
class aP {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Bo.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((l) => l), this.init(o);
  }
  init() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    o.interpolation || (o.interpolation = {
      escapeValue: !0
    });
    const l = o.interpolation;
    this.escape = l.escape !== void 0 ? l.escape : q3, this.escapeValue = l.escapeValue !== void 0 ? l.escapeValue : !0, this.useRawValueToEscape = l.useRawValueToEscape !== void 0 ? l.useRawValueToEscape : !1, this.prefix = l.prefix ? hd(l.prefix) : l.prefixEscaped || "{{", this.suffix = l.suffix ? hd(l.suffix) : l.suffixEscaped || "}}", this.formatSeparator = l.formatSeparator ? l.formatSeparator : l.formatSeparator || ",", this.unescapePrefix = l.unescapeSuffix ? "" : l.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l.unescapeSuffix || "", this.nestingPrefix = l.nestingPrefix ? hd(l.nestingPrefix) : l.nestingPrefixEscaped || hd("$t("), this.nestingSuffix = l.nestingSuffix ? hd(l.nestingSuffix) : l.nestingSuffixEscaped || hd(")"), this.nestingOptionsSeparator = l.nestingOptionsSeparator ? l.nestingOptionsSeparator : l.nestingOptionsSeparator || ",", this.maxReplaces = l.maxReplaces ? l.maxReplaces : 1e3, this.alwaysFormat = l.alwaysFormat !== void 0 ? l.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(o, "g");
    const l = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(l, "g");
    const c = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(c, "g");
  }
  interpolate(o, l, c, d) {
    let m, v, E;
    const w = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function _(F) {
      return F.replace(/\$/g, "$$$$");
    }
    const k = (F) => {
      if (F.indexOf(this.formatSeparator) < 0) {
        const de = MT(l, w, F, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(de, void 0, c, {
          ...d,
          ...l,
          interpolationkey: F
        }) : de;
      }
      const N = F.split(this.formatSeparator), W = N.shift().trim(), ue = N.join(this.formatSeparator).trim();
      return this.format(MT(l, w, W, this.options.keySeparator, this.options.ignoreJSONStructure), ue, c, {
        ...d,
        ...l,
        interpolationkey: W
      });
    };
    this.resetRegExp();
    const D = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, O = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (F) => _(F)
    }, {
      regex: this.regexp,
      safeValue: (F) => this.escapeValue ? _(this.escape(F)) : _(F)
    }].forEach((F) => {
      for (E = 0; m = F.regex.exec(o); ) {
        const N = m[1].trim();
        if (v = k(N), v === void 0)
          if (typeof D == "function") {
            const ue = D(o, m, d);
            v = typeof ue == "string" ? ue : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, N))
            v = "";
          else if (O) {
            v = m[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${N} for interpolating ${o}`), v = "";
        else
          typeof v != "string" && !this.useRawValueToEscape && (v = _T(v));
        const W = F.safeValue(v);
        if (o = o.replace(m[0], W), O ? (F.regex.lastIndex += v.length, F.regex.lastIndex -= m[0].length) : F.regex.lastIndex = 0, E++, E >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, l) {
    let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, m, v;
    function E(w, _) {
      const k = this.nestingOptionsSeparator;
      if (w.indexOf(k) < 0)
        return w;
      const D = w.split(new RegExp(`${k}[ ]*{`));
      let O = `{${D[1]}`;
      w = D[0], O = this.interpolate(O, v);
      const F = O.match(/'/g), N = O.match(/"/g);
      (F && F.length % 2 === 0 && !N || N.length % 2 !== 0) && (O = O.replace(/'/g, '"'));
      try {
        v = JSON.parse(O), _ && (v = {
          ..._,
          ...v
        });
      } catch (W) {
        return this.logger.warn(`failed parsing options string in nesting for key ${w}`, W), `${w}${k}${O}`;
      }
      return delete v.defaultValue, w;
    }
    for (; d = this.nestingRegexp.exec(o); ) {
      let w = [];
      v = {
        ...c
      }, v = v.replace && typeof v.replace != "string" ? v.replace : v, v.applyPostProcessor = !1, delete v.defaultValue;
      let _ = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const k = d[1].split(this.formatSeparator).map((D) => D.trim());
        d[1] = k.shift(), w = k, _ = !0;
      }
      if (m = l(E.call(this, d[1].trim(), v), v), m && d[0] === o && typeof m != "string")
        return m;
      typeof m != "string" && (m = _T(m)), m || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${o}`), m = ""), _ && (m = w.reduce((k, D) => this.format(k, D, c.lng, {
        ...c,
        interpolationkey: d[1].trim()
      }), m.trim())), o = o.replace(d[0], m), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
function iP(r) {
  let o = r.toLowerCase().trim();
  const l = {};
  if (r.indexOf("(") > -1) {
    const c = r.split("(");
    o = c[0].toLowerCase().trim();
    const d = c[1].substring(0, c[1].length - 1);
    o === "currency" && d.indexOf(":") < 0 ? l.currency || (l.currency = d.trim()) : o === "relativetime" && d.indexOf(":") < 0 ? l.range || (l.range = d.trim()) : d.split(";").forEach((m) => {
      if (!m)
        return;
      const [v, ...E] = m.split(":"), w = E.join(":").trim().replace(/^'+|'+$/g, "");
      l[v.trim()] || (l[v.trim()] = w), w === "false" && (l[v.trim()] = !1), w === "true" && (l[v.trim()] = !0), isNaN(w) || (l[v.trim()] = parseInt(w, 10));
    });
  }
  return {
    formatName: o,
    formatOptions: l
  };
}
function vd(r) {
  const o = {};
  return function(l, c, d) {
    const m = c + JSON.stringify(d);
    let v = o[m];
    return v || (v = r(Uy(c), d), o[m] = v), v(l);
  };
}
class oP {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Bo.create("formatter"), this.options = o, this.formats = {
      number: vd((l, c) => {
        const d = new Intl.NumberFormat(l, {
          ...c
        });
        return (m) => d.format(m);
      }),
      currency: vd((l, c) => {
        const d = new Intl.NumberFormat(l, {
          ...c,
          style: "currency"
        });
        return (m) => d.format(m);
      }),
      datetime: vd((l, c) => {
        const d = new Intl.DateTimeFormat(l, {
          ...c
        });
        return (m) => d.format(m);
      }),
      relativetime: vd((l, c) => {
        const d = new Intl.RelativeTimeFormat(l, {
          ...c
        });
        return (m) => d.format(m, c.range || "day");
      }),
      list: vd((l, c) => {
        const d = new Intl.ListFormat(l, {
          ...c
        });
        return (m) => d.format(m);
      })
    }, this.init(o);
  }
  init(o) {
    const l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = l.formatSeparator ? l.formatSeparator : l.formatSeparator || ",";
  }
  add(o, l) {
    this.formats[o.toLowerCase().trim()] = l;
  }
  addCached(o, l) {
    this.formats[o.toLowerCase().trim()] = vd(l);
  }
  format(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return l.split(this.formatSeparator).reduce((m, v) => {
      const {
        formatName: E,
        formatOptions: w
      } = iP(v);
      if (this.formats[E]) {
        let _ = m;
        try {
          const k = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, D = k.locale || k.lng || d.locale || d.lng || c;
          _ = this.formats[E](m, D, {
            ...w,
            ...d,
            ...k
          });
        } catch (k) {
          this.logger.warn(k);
        }
        return _;
      } else
        this.logger.warn(`there was no format function for ${E}`);
      return m;
    }, o);
  }
}
function lP(r, o) {
  r.pending[o] !== void 0 && (delete r.pending[o], r.pendingCount--);
}
class sP extends Jy {
  constructor(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = l, this.services = c, this.languageUtils = c.languageUtils, this.options = d, this.logger = Bo.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(c, d.backend, d);
  }
  queueLoad(o, l, c, d) {
    const m = {}, v = {}, E = {}, w = {};
    return o.forEach((_) => {
      let k = !0;
      l.forEach((D) => {
        const O = `${_}|${D}`;
        !c.reload && this.store.hasResourceBundle(_, D) ? this.state[O] = 2 : this.state[O] < 0 || (this.state[O] === 1 ? v[O] === void 0 && (v[O] = !0) : (this.state[O] = 1, k = !1, v[O] === void 0 && (v[O] = !0), m[O] === void 0 && (m[O] = !0), w[D] === void 0 && (w[D] = !0)));
      }), k || (E[_] = !0);
    }), (Object.keys(m).length || Object.keys(v).length) && this.queue.push({
      pending: v,
      pendingCount: Object.keys(v).length,
      loaded: {},
      errors: [],
      callback: d
    }), {
      toLoad: Object.keys(m),
      pending: Object.keys(v),
      toLoadLanguages: Object.keys(E),
      toLoadNamespaces: Object.keys(w)
    };
  }
  loaded(o, l, c) {
    const d = o.split("|"), m = d[0], v = d[1];
    l && this.emit("failedLoading", m, v, l), c && this.store.addResourceBundle(m, v, c), this.state[o] = l ? -1 : 2;
    const E = {};
    this.queue.forEach((w) => {
      W3(w.loaded, [m], v), lP(w, o), l && w.errors.push(l), w.pendingCount === 0 && !w.done && (Object.keys(w.loaded).forEach((_) => {
        E[_] || (E[_] = {});
        const k = w.loaded[_];
        k.length && k.forEach((D) => {
          E[_][D] === void 0 && (E[_][D] = !0);
        });
      }), w.done = !0, w.errors.length ? w.callback(w.errors) : w.callback());
    }), this.emit("loaded", E), this.queue = this.queue.filter((w) => !w.done);
  }
  read(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, v = arguments.length > 5 ? arguments[5] : void 0;
    if (!o.length)
      return v(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: o,
        ns: l,
        fcName: c,
        tried: d,
        wait: m,
        callback: v
      });
      return;
    }
    this.readingCalls++;
    const E = (_, k) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const D = this.waitingReads.shift();
        this.read(D.lng, D.ns, D.fcName, D.tried, D.wait, D.callback);
      }
      if (_ && k && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, l, c, d + 1, m * 2, v);
        }, m);
        return;
      }
      v(_, k);
    }, w = this.backend[c].bind(this.backend);
    if (w.length === 2) {
      try {
        const _ = w(o, l);
        _ && typeof _.then == "function" ? _.then((k) => E(null, k)).catch(E) : E(null, _);
      } catch (_) {
        E(_);
      }
      return;
    }
    return w(o, l, E);
  }
  prepareLoading(o, l) {
    let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), d && d();
    typeof o == "string" && (o = this.languageUtils.toResolveHierarchy(o)), typeof l == "string" && (l = [l]);
    const m = this.queueLoad(o, l, c, d);
    if (!m.toLoad.length)
      return m.pending.length || d(), null;
    m.toLoad.forEach((v) => {
      this.loadOne(v);
    });
  }
  load(o, l, c) {
    this.prepareLoading(o, l, {}, c);
  }
  reload(o, l, c) {
    this.prepareLoading(o, l, {
      reload: !0
    }, c);
  }
  loadOne(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const c = o.split("|"), d = c[0], m = c[1];
    this.read(d, m, "read", void 0, void 0, (v, E) => {
      v && this.logger.warn(`${l}loading namespace ${m} for language ${d} failed`, v), !v && E && this.logger.log(`${l}loaded namespace ${m} for language ${d}`, E), this.loaded(o, v, E);
    });
  }
  saveMissing(o, l, c, d, m) {
    let v = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, E = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(l)) {
      this.logger.warn(`did not save key "${c}" as the namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(c == null || c === "")) {
      if (this.backend && this.backend.create) {
        const w = {
          ...v,
          isUpdate: m
        }, _ = this.backend.create.bind(this.backend);
        if (_.length < 6)
          try {
            let k;
            _.length === 5 ? k = _(o, l, c, d, w) : k = _(o, l, c, d), k && typeof k.then == "function" ? k.then((D) => E(null, D)).catch(E) : E(null, k);
          } catch (k) {
            E(k);
          }
        else
          _(o, l, c, d, E, w);
      }
      !o || !o[0] || this.store.addResource(o[0], l, c, d);
    }
  }
}
function LT() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(r) {
      let o = {};
      if (typeof r[1] == "object" && (o = r[1]), typeof r[1] == "string" && (o.defaultValue = r[1]), typeof r[2] == "string" && (o.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
        const l = r[3] || r[2];
        Object.keys(l).forEach((c) => {
          o[c] = l[c];
        });
      }
      return o;
    },
    interpolation: {
      escapeValue: !0,
      format: (r, o, l, c) => r,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function NT(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function my() {
}
function uP(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((o) => {
    typeof r[o] == "function" && (r[o] = r[o].bind(r));
  });
}
class ov extends Jy {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = NT(o), this.services = {}, this.logger = Bo, this.modules = {
      external: []
    }, uP(this), l && !this.isInitialized && !o.isClone) {
      if (!this.options.initImmediate)
        return this.init(o, l), this;
      setTimeout(() => {
        this.init(o, l);
      }, 0);
    }
  }
  init() {
    var o = this;
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 ? arguments[1] : void 0;
    typeof l == "function" && (c = l, l = {}), !l.defaultNS && l.defaultNS !== !1 && l.ns && (typeof l.ns == "string" ? l.defaultNS = l.ns : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
    const d = LT();
    this.options = {
      ...d,
      ...this.options,
      ...NT(l)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator), l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator);
    function m(w) {
      return w ? typeof w == "function" ? new w() : w : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Bo.init(m(this.modules.logger), this.options) : Bo.init(null, this.options);
      let w;
      this.modules.formatter ? w = this.modules.formatter : typeof Intl < "u" && (w = oP);
      const _ = new DT(this.options);
      this.store = new kT(this.options.resources, this.options);
      const k = this.services;
      k.logger = Bo, k.resourceStore = this.store, k.languageUtils = _, k.pluralResolver = new rP(_, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), w && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (k.formatter = m(w), k.formatter.init(k, this.options), this.options.interpolation.format = k.formatter.format.bind(k.formatter)), k.interpolator = new aP(this.options), k.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, k.backendConnector = new sP(m(this.modules.backend), k.resourceStore, k, this.options), k.backendConnector.on("*", function(D) {
        for (var O = arguments.length, F = new Array(O > 1 ? O - 1 : 0), N = 1; N < O; N++)
          F[N - 1] = arguments[N];
        o.emit(D, ...F);
      }), this.modules.languageDetector && (k.languageDetector = m(this.modules.languageDetector), k.languageDetector.init && k.languageDetector.init(k, this.options.detection, this.options)), this.modules.i18nFormat && (k.i18nFormat = m(this.modules.i18nFormat), k.i18nFormat.init && k.i18nFormat.init(this)), this.translator = new Ay(this.services, this.options), this.translator.on("*", function(D) {
        for (var O = arguments.length, F = new Array(O > 1 ? O - 1 : 0), N = 1; N < O; N++)
          F[N - 1] = arguments[N];
        o.emit(D, ...F);
      }), this.modules.external.forEach((D) => {
        D.init && D.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, c || (c = my), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const w = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      w.length > 0 && w[0] !== "dev" && (this.options.lng = w[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((w) => {
      this[w] = function() {
        return o.store[w](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((w) => {
      this[w] = function() {
        return o.store[w](...arguments), o;
      };
    });
    const v = Wh(), E = () => {
      const w = (_, k) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), v.resolve(k), c(_, k);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return w(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, w);
    };
    return this.options.resources || !this.options.initImmediate ? E() : setTimeout(E, 0), v;
  }
  loadResources(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : my;
    const c = typeof o == "string" ? o : this.language;
    if (typeof o == "function" && (l = o), !this.options.resources || this.options.partialBundledLanguages) {
      if (c && c.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return l();
      const d = [], m = (v) => {
        !v || v === "cimode" || this.services.languageUtils.toResolveHierarchy(v).forEach((E) => {
          E !== "cimode" && d.indexOf(E) < 0 && d.push(E);
        });
      };
      c ? m(c) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((v) => m(v)), this.options.preload && this.options.preload.forEach((v) => m(v)), this.services.backendConnector.load(d, this.options.ns, (v) => {
        !v && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), l(v);
      });
    } else
      l(null);
  }
  reloadResources(o, l, c) {
    const d = Wh();
    return o || (o = this.languages), l || (l = this.options.ns), c || (c = my), this.services.backendConnector.reload(o, l, (m) => {
      d.resolve(), c(m);
    }), d;
  }
  use(o) {
    if (!o)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!o.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && hR.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this;
  }
  setResolvedLanguage(o) {
    if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
      for (let l = 0; l < this.languages.length; l++) {
        const c = this.languages[l];
        if (!(["cimode", "dev"].indexOf(c) > -1) && this.store.hasLanguageSomeTranslations(c)) {
          this.resolvedLanguage = c;
          break;
        }
      }
  }
  changeLanguage(o, l) {
    var c = this;
    this.isLanguageChangingTo = o;
    const d = Wh();
    this.emit("languageChanging", o);
    const m = (w) => {
      this.language = w, this.languages = this.services.languageUtils.toResolveHierarchy(w), this.resolvedLanguage = void 0, this.setResolvedLanguage(w);
    }, v = (w, _) => {
      _ ? (m(_), this.translator.changeLanguage(_), this.isLanguageChangingTo = void 0, this.emit("languageChanged", _), this.logger.log("languageChanged", _)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return c.t(...arguments);
      }), l && l(w, function() {
        return c.t(...arguments);
      });
    }, E = (w) => {
      !o && !w && this.services.languageDetector && (w = []);
      const _ = typeof w == "string" ? w : this.services.languageUtils.getBestMatchFromCodes(w);
      _ && (this.language || m(_), this.translator.language || this.translator.changeLanguage(_), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(_)), this.loadResources(_, (k) => {
        v(k, _);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? E(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(E) : this.services.languageDetector.detect(E) : E(o), d;
  }
  getFixedT(o, l, c) {
    var d = this;
    const m = function(v, E) {
      let w;
      if (typeof E != "object") {
        for (var _ = arguments.length, k = new Array(_ > 2 ? _ - 2 : 0), D = 2; D < _; D++)
          k[D - 2] = arguments[D];
        w = d.options.overloadTranslationOptionHandler([v, E].concat(k));
      } else
        w = {
          ...E
        };
      w.lng = w.lng || m.lng, w.lngs = w.lngs || m.lngs, w.ns = w.ns || m.ns, w.keyPrefix = w.keyPrefix || c || m.keyPrefix;
      const O = d.options.keySeparator || ".";
      let F;
      return w.keyPrefix && Array.isArray(v) ? F = v.map((N) => `${w.keyPrefix}${O}${N}`) : F = w.keyPrefix ? `${w.keyPrefix}${O}${v}` : v, d.t(F, w);
    };
    return typeof o == "string" ? m.lng = o : m.lngs = o, m.ns = l, m.keyPrefix = c, m;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(o) {
    this.options.defaultNS = o;
  }
  hasLoadedNamespace(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const c = l.lng || this.resolvedLanguage || this.languages[0], d = this.options ? this.options.fallbackLng : !1, m = this.languages[this.languages.length - 1];
    if (c.toLowerCase() === "cimode")
      return !0;
    const v = (E, w) => {
      const _ = this.services.backendConnector.state[`${E}|${w}`];
      return _ === -1 || _ === 2;
    };
    if (l.precheck) {
      const E = l.precheck(this, v);
      if (E !== void 0)
        return E;
    }
    return !!(this.hasResourceBundle(c, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || v(c, o) && (!d || v(m, o)));
  }
  loadNamespaces(o, l) {
    const c = Wh();
    return this.options.ns ? (typeof o == "string" && (o = [o]), o.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      c.resolve(), l && l(d);
    }), c) : (l && l(), Promise.resolve());
  }
  loadLanguages(o, l) {
    const c = Wh();
    typeof o == "string" && (o = [o]);
    const d = this.options.preload || [], m = o.filter((v) => d.indexOf(v) < 0);
    return m.length ? (this.options.preload = d.concat(m), this.loadResources((v) => {
      c.resolve(), l && l(v);
    }), c) : (l && l(), Promise.resolve());
  }
  dir(o) {
    if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o)
      return "rtl";
    const l = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], c = this.services && this.services.languageUtils || new DT(LT());
    return l.indexOf(c.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    return new ov(o, l);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : my;
    const c = o.forkResourceStore;
    c && delete o.forkResourceStore;
    const d = {
      ...this.options,
      ...o,
      isClone: !0
    }, m = new ov(d);
    return (o.debug !== void 0 || o.prefix !== void 0) && (m.logger = m.logger.clone(o)), ["store", "services", "language"].forEach((v) => {
      m[v] = this[v];
    }), m.services = {
      ...this.services
    }, m.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, c && (m.store = new kT(this.store.data, d), m.services.resourceStore = m.store), m.translator = new Ay(m.services, d), m.translator.on("*", function(v) {
      for (var E = arguments.length, w = new Array(E > 1 ? E - 1 : 0), _ = 1; _ < E; _++)
        w[_ - 1] = arguments[_];
      m.emit(v, ...w);
    }), m.init(d, l), m.translator.options = d, m.translator.backendConnector.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, m;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Or = ov.createInstance();
Or.createInstance = ov.createInstance;
Or.createInstance;
Or.dir;
Or.init;
Or.loadResources;
Or.reloadResources;
Or.use;
const cP = Or.changeLanguage;
Or.getFixedT;
Or.t;
Or.exists;
Or.setDefaultNamespace;
Or.hasLoadedNamespace;
Or.loadNamespaces;
Or.loadLanguages;
const pc = (r, o) => Or.t(r, o), fP = {
  common: {
    ok: "Okay",
    error: "Error",
    cancel: "Cancel",
    back: "Back",
    continue: "Continue",
    close: "Close",
    save: "Save",
    open: "Open",
    edit: "Edit",
    logout: "Log Out",
    new: "New",
    workgroups: "Work Groups",
    scalesgroups: "Scales Groups",
    scales: "Scales",
    company: "Company",
    companies: "Companies",
    database: "Databases",
    theme: "Theme",
    language: "Language",
    search: "Search",
    done: "Done",
    next: "Next",
    previous: "Previous",
    loading: "Loading",
    action: "Action"
  },
  complement: {
    add: "Add {{complement}}",
    select: "Select {{complement}}",
    remove: "Remove {{complement}}",
    new: "New {{complement}}",
    edit: "Edit {{complement}}",
    open: "Open {{complement}}",
    close: "Close {{complement}}"
  },
  settings: {
    "application-title": "Select a company and database"
  },
  table: {
    page: "Page",
    of: "of",
    "per-page": "Per page",
    items: "Items"
  },
  picker: {
    date: {
      days: {
        su: "Su",
        mo: "Mo",
        tu: "Tu",
        we: "We",
        th: "Th",
        fr: "Fr",
        sa: "Sa"
      }
    }
  },
  data: {
    workgroups: {
      name: "Name",
      agents: "Agents",
      supervisor: "Supervisor"
    },
    scales: {
      firstName: "First Name",
      lastName: "Last Name",
      baseUserId: "Base User ID"
    },
    scalesgroups: {
      name: "Name",
      timeScale: "Time Scale",
      workGroups: "Work Groups"
    }
  },
  themes: {
    coffe: "Coffee",
    light: "Light",
    dark: "Dark",
    forest: "Forest"
  },
  langs: {
    english: "English",
    portuguese: "Portuguese",
    spanish: "Spanish"
  }
}, dP = {
  common: {
    ok: "Aceptar",
    error: "Error",
    cancel: "Cancelar",
    back: "Volver",
    continue: "Continuar",
    close: "Cerrar",
    save: "Guardar",
    open: "Abrir",
    edit: "Editar",
    logout: "Cerrar sesión",
    new: "Nuevo",
    workgroups: "Grupos de Trabajo",
    scalesgroups: "Grupos de Escalas",
    scales: "Escalas",
    company: "Empresa",
    companies: "Empresas",
    database: "Bases de Datos",
    theme: "Tema",
    language: "Idioma",
    search: "Buscar",
    done: "Hecho",
    next: "Siguiente",
    previous: "Anterior",
    loading: "Cargando",
    action: "Acción"
  },
  complement: {
    add: "Agregar {{complement}}",
    select: "Seleccionar {{complement}}",
    remove: "Eliminar {{complement}}",
    new: "Nuevo {{complement}}",
    edit: "Editar {{complement}}",
    open: "Abrir {{complement}}",
    close: "Cerrar {{complement}}"
  },
  settings: {
    "application-title": "Seleccione una empresa y una base de datos"
  },
  table: {
    page: "Página",
    of: "de",
    "per-page": "Por página",
    items: "Elementos"
  },
  picker: {
    date: {
      days: {
        su: "Do",
        mo: "Lu",
        tu: "Ma",
        we: "Mi",
        th: "Ju",
        fr: "Vi",
        sa: "Sá"
      }
    }
  },
  data: {
    workgroups: {
      name: "Nombre",
      agents: "Agentes",
      supervisor: "Supervisor"
    },
    scales: {
      firstName: "Nombre",
      lastName: "Apellido",
      baseUserId: "ID de Usuario Base"
    },
    scalesgroups: {
      name: "Nombre",
      timeScale: "Escala de Tiempo",
      workGroups: "Grupos de Trabajo"
    }
  },
  themes: {
    coffe: "Café",
    light: "Claro",
    dark: "Oscuro",
    forest: "Bosque"
  },
  langs: {
    english: "Inglés",
    portuguese: "Portugués",
    spanish: "Español"
  }
}, pP = {
  common: {
    ok: "OK",
    error: "Erro",
    cancel: "Cancelar",
    back: "Voltar",
    continue: "Continuar",
    close: "Fechar",
    save: "Salvar",
    open: "Abrir",
    edit: "Editar",
    logout: "Sair",
    new: "Novo",
    workgroups: "Grupos de Trabalho",
    scalesgroups: "Grupos de Escalas",
    scales: "Escalas",
    company: "Empresa",
    companies: "Empresas",
    database: "Bancos de Dados",
    theme: "Tema",
    language: "Idioma",
    search: "Buscar",
    done: "Concluído",
    next: "Próximo",
    previous: "Anterior",
    loading: "Carregando",
    action: "Ação"
  },
  complement: {
    add: "Adicionar {{complement}}",
    select: "Selecionar {{complement}}",
    remove: "Remover {{complement}}",
    new: "Novo {{complement}}",
    edit: "Editar {{complement}}",
    open: "Abrir {{complement}}",
    close: "Fechar {{complement}}"
  },
  settings: {
    "application-title": "Selecione uma empresa e banco de dados"
  },
  table: {
    page: "Página",
    of: "de",
    "per-page": "Por página",
    items: "Itens"
  },
  picker: {
    date: {
      days: {
        su: "Dom",
        mo: "Seg",
        tu: "Ter",
        we: "Qua",
        th: "Qui",
        fr: "Sex",
        sa: "Sáb"
      }
    }
  },
  data: {
    workgroups: {
      name: "Nome",
      agents: "Agentes",
      supervisor: "Supervisor"
    },
    scales: {
      firstName: "Primeiro Nome",
      lastName: "Sobrenome",
      baseUserId: "ID de Usuário Base"
    },
    scalesgroups: {
      name: "Nome",
      timeScale: "Escala de Tempo",
      workGroups: "Grupos de Trabalho"
    }
  },
  themes: {
    coffe: "Café",
    light: "Claro",
    dark: "Escuro",
    forest: "Floresta"
  },
  langs: {
    english: "Inglês",
    portuguese: "Português",
    spanish: "Espanhol"
  }
}, hP = ({ language: r = "en" }) => {
  Or.init({
    lng: r,
    fallbackLng: "en",
    resources: {
      en: { translation: fP },
      "pt-BR": { translation: pP },
      es: { translation: dP }
    }
  });
}, vP = (r) => {
  cP(r);
}, mP = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], gP = ({
  children: r,
  data: o,
  itemsPerPage: l = 30
}) => {
  const c = eu(() => o.length, [o]), [d, m] = bn(1), [v, E] = bn(l), w = eu(() => o.slice(
    (d - 1) * v,
    d * v
  ), [o, d, v]);
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsx("div", { className: "table-content custom-scroll", children: r({ data: w() }) }),
    /* @__PURE__ */ P.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: d === 1,
          onClick: () => m(1),
          children: /* @__PURE__ */ P.jsx(mr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: d === 1,
          onClick: () => m((_) => _ - 1),
          children: /* @__PURE__ */ P.jsx(mr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ P.jsxs("span", { children: [
        pc("table.page"),
        " ",
        /* @__PURE__ */ P.jsx("span", { className: "page", children: d }),
        " ",
        pc("table.of"),
        " ",
        /* @__PURE__ */ P.jsx("span", { className: "page", children: Math.ceil(c() / v) })
      ] }),
      /* @__PURE__ */ P.jsx(
        Vw,
        {
          items: mP,
          currentSelected: l,
          labelExtractor: (_) => `${pc("table.per-page")} ${_}`,
          keyExtractor: (_) => _,
          showQty: 3,
          position: "bottom",
          onChange: (_, k) => {
            const D = Math.ceil(c() / k), O = d * v, N = (d > D ? D * k : d * k) / O, W = N !== 1 ? Math.floor(d / N) : d;
            d > D ? m(D) : m(W < 1 ? 1 : W), E(k);
          }
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(c() / v) === d,
          onClick: () => m((_) => _ + 1),
          children: /* @__PURE__ */ P.jsx(mr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(c() / v) === d,
          onClick: () => m(Math.ceil(c() / v)),
          title: "Last Page",
          children: /* @__PURE__ */ P.jsx(mr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ P.jsxs("span", { children: [
        c(),
        pc("table.items")
      ] })
    ] })
  ] });
}, yP = (r) => {
  const [o, l] = bn(r ?? null), [c, d] = bn({
    top: (o == null ? void 0 : o.scrollTop) ?? 0,
    scrollHeight: (o == null ? void 0 : o.scrollHeight) ?? 0,
    height: (o == null ? void 0 : o.clientHeight) ?? 0
  });
  return wd(() => {
    const m = () => {
      o && d({
        top: o.scrollTop,
        scrollHeight: o.scrollHeight,
        height: o.clientHeight
      });
    };
    if (o)
      return o == null || o.addEventListener("scroll", Bw(m, 150)), () => {
        o == null || o.removeEventListener("scroll", m);
      };
  }, [o]), o ? { ...c, scrollTo: o.scrollTo, root: o, setRoot: l, changeScrollData: d } : {
    top: 0,
    scrollHeight: 0,
    height: 0,
    scrollTo: () => {
    },
    root: o,
    setRoot: l,
    changeScrollData: d
  };
}, SP = ({
  children: r,
  data: o,
  tableContainerRef: l
}) => {
  const { height: c, scrollHeight: d, top: m, root: v, setRoot: E, changeScrollData: w } = yP(l == null ? void 0 : l.current), _ = En(0), k = En(_.current * 2), D = 40, O = eu(() => l.current === null ? 10 : Math.ceil(l.current.clientHeight / D), [l]);
  wd(() => (v === null && E(l.current), _.current = O(), () => {
  }), [O, l, v, E, w]);
  const F = eu(() => {
    let N = 0;
    return v === null ? [] : (_.current < 10 && (_.current = O() * 2), Math.ceil(c + m) === d && (k.current += _.current, v.scrollTo({
      top: _.current * D
    })), k.current > _.current * 3 && m > 0 && (N = k.current - _.current * 3), m === 0 && k.current > _.current * 3 && (k.current -= _.current, N = k.current - _.current * 3, v.scrollTo({
      top: _.current * D
    })), o.slice(N, k.current));
  }, [o, c, O, d, m, v, _]);
  return r({ data: F() });
}, xP = {
  scroll: SP,
  pagination: gP
}, wP = ({
  mode: r,
  children: o,
  data: l
}) => {
  const c = En(null), d = xP[r];
  return /* @__PURE__ */ P.jsx("div", { className: `table-container ${r}`, ref: c, children: /* @__PURE__ */ P.jsx(d, { tableContainerRef: c, data: l, children: o }) });
}, bP = ({
  closeModal: r,
  config: o
}) => /* @__PURE__ */ P.jsxs($3, { currentName: "table-config-modal", children: [
  o.map((l) => /* @__PURE__ */ P.jsxs("div", { className: "container row between-center", children: [
    /* @__PURE__ */ P.jsx("span", { children: l }),
    /* @__PURE__ */ P.jsx(
      Vw,
      {
        variant: "neutral",
        items: ["Expected", "Overhelmed", "Below Expectation"]
      }
    )
  ] }, l)),
  /* @__PURE__ */ P.jsx("button", { className: "btn btn-primary ring-info", onClick: r, children: "Save" })
] }), EP = ({
  index: r,
  columns: o,
  translation: l,
  column: c,
  ordersType: d,
  orderedHeader: m,
  order: v,
  setOrder: E,
  tBodyRef: w,
  mousePosition: _
}) => /* @__PURE__ */ P.jsx("th", { children: /* @__PURE__ */ P.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ P.jsx("span", { children: l(c) }),
  /* @__PURE__ */ P.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ P.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${d[v] === "asc" && m.current === c ? "active" : ""}`,
        onClick: () => {
          E(
            (k) => k === 1 && m.current === c ? 0 : 1
          ), m.current = c;
        },
        children: /* @__PURE__ */ P.jsx(mr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ P.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${d[v] === "desc" && m.current === c ? "active" : ""}`,
        onClick: () => {
          E(
            (k) => k === 2 && m.current === c ? 0 : 2
          ), m.current = c;
        },
        children: /* @__PURE__ */ P.jsx(mr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  o.length - 1 !== r && /* @__PURE__ */ P.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (k) => {
        _.current.startPosition = k.clientX;
      },
      onMouseMove: (k) => {
        var N;
        if (w.current === null || _.current.startPosition === 0)
          return;
        _.current.currentPosition = k.clientX;
        const D = (N = w.current.firstChild) == null ? void 0 : N.childNodes[r];
        if (D === null)
          return;
        const O = D.getBoundingClientRect().width, F = _.current.currentPosition - _.current.startPosition;
        D.style.width = `${O + F}px`, _.current.startPosition = _.current.currentPosition;
      },
      onMouseUp: () => {
        _.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onMouseLeave: () => {
        _.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onClick: (k) => {
        var O;
        if (k.detail < 2 || w.current === null)
          return;
        const D = (O = w.current.firstChild) == null ? void 0 : O.childNodes[r];
        D !== null && (D.style.width = "auto");
      },
      children: [
        /* @__PURE__ */ P.jsx("span", {}),
        /* @__PURE__ */ P.jsx("span", {})
      ]
    }
  )
] }) }), CP = (r, o, l = "asc") => {
  if (l === "default" || o === null)
    return r;
  const c = l === "asc" ? 1 : -1;
  return r.slice().sort((d, m) => {
    const v = d[o], E = m[o];
    return v < E ? -1 * c : v > E ? 1 * c : 0;
  });
}, jT = {
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
}, UT = ["default", "asc", "desc"], FP = ({
  headers: r,
  data: o,
  dataConfig: l,
  showObject: c,
  // headersConfig,
  action: d,
  loading: m = !1,
  hideColumn: v = [],
  mode: E = "pagination"
}) => {
  const { closeModal: w, openModal: _ } = dR(), k = (re) => Object.hasOwnProperty.call(jT, re) ? jT[re] : re, [D] = bn(E), [O, F] = bn(0), N = En(null), W = En(null), ue = En({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [de, q] = bn(""), X = eu(() => m ? [] : o.filter((re) => {
    if (de.trim() === "")
      return o;
    const G = de.toLowerCase().trim();
    return Object.entries(re).some(([we, pe]) => {
      var me;
      return v.includes(we) ? !1 : typeof pe == "object" && Object.hasOwnProperty.call(l, we) ? String(
        (me = l == null ? void 0 : l[we]) == null ? void 0 : me.call(l, pe, re)
      ).toLowerCase().includes(G) : typeof pe == "object" ? String(Object.values(pe)[0]).toLowerCase().includes(G) : String(pe).toLowerCase().includes(G);
    });
  }), [de, v, o, l, m]), se = eu(() => CP(X(), N.current, UT[O]), [O, X, N]);
  return /* @__PURE__ */ P.jsxs("div", { className: "table-full", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "group rounded-box no-print", children: [
      /* @__PURE__ */ P.jsx("label", { className: "bg-primary", htmlFor: "find-all-table", children: pc("common.search") }),
      /* @__PURE__ */ P.jsx(
        "input",
        {
          className: "input input-neutral ring-info",
          id: "find-all-table",
          placeholder: "Filtrar por....",
          style: { flex: "1" },
          onChange: Bw((re) => {
            q(re.target.value);
          }, 300)
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          className: "btn btn-primary btn-icon",
          style: { flex: "0" },
          onClick: () => _("table-config-modal"),
          children: /* @__PURE__ */ P.jsx(mr, { icon: "mdi:filter" })
        }
      )
    ] }),
    /* @__PURE__ */ P.jsx(wP, { mode: D, data: se(), children: ({ data: re }) => {
      let G = 0;
      return /* @__PURE__ */ P.jsxs("table", { className: "table", children: [
        /* @__PURE__ */ P.jsx("thead", { children: /* @__PURE__ */ P.jsxs("tr", { children: [
          r && r.map((J, we) => v.includes(J) ? null : (we++, /* @__PURE__ */ P.jsx("th", { children: J }, we))),
          r === void 0 && re.length > 0 && Object.keys(re[0]).map((J) => v.includes(J) ? null : (G++, /* @__PURE__ */ P.jsx(
            EP,
            {
              tBodyRef: W,
              mousePosition: ue,
              orderedHeader: N,
              order: O,
              setOrder: F,
              column: J,
              index: G - 1,
              columns: Object.keys(re[0]),
              ordersType: UT,
              translation: k
            },
            G - 1
          ))),
          m && /* @__PURE__ */ P.jsx("th", {}),
          d && /* @__PURE__ */ P.jsx("th", { children: pc("common.action") })
        ] }) }),
        /* @__PURE__ */ P.jsxs("tbody", { ref: W, children: [
          m && /* @__PURE__ */ P.jsxs(
            "h2",
            {
              className: "subtitle",
              style: {
                margin: "auto",
                marginTop: "1rem",
                width: "fit-content"
              },
              children: [
                pc("common.loading"),
                "..."
              ]
            }
          ),
          !m && re.map((J, we) => /* @__PURE__ */ P.jsxs("tr", { tabIndex: 0, children: [
            Object.entries(J).map(([pe, me], Fe) => {
              var Ne;
              let Qe;
              return v.includes(pe) ? null : (typeof me == "object" && (l == null ? void 0 : l[pe]) === void 0 ? Qe = Object.values(me)[0] : Object.hasOwnProperty.call(l ?? {}, pe) ? Qe = (Ne = l == null ? void 0 : l[pe]) == null ? void 0 : Ne.call(
                l,
                me,
                J
              ) : Qe = me, /* @__PURE__ */ P.jsx(
                "td",
                {
                  title: "Click to copy",
                  style: { width: "auto" },
                  children: typeof me != "object" || !(c != null && c[pe]) ? Qe : /* @__PURE__ */ P.jsx("div", { className: "cell-container", children: /* @__PURE__ */ P.jsxs("div", { className: "cell-container--header", children: [
                    Qe,
                    /* @__PURE__ */ P.jsx(
                      "button",
                      {
                        className: "btn btn-primary btn-icon btn-xs btn-square",
                        onClick: (Ze) => {
                          var Vt;
                          const lt = (Vt = Ze.currentTarget.parentNode) == null ? void 0 : Vt.parentNode;
                          if (lt === null)
                            return;
                          if (lt.lastChild.className === "content") {
                            lt.removeChild(
                              lt.lastChild
                            );
                            return;
                          }
                          const st = document.createElement("ul");
                          st.className = "content", Object.entries(me).forEach(
                            ([he, Pe]) => {
                              const be = document.createElement("li");
                              be.innerText = `${k(
                                he
                              )}: ${Pe}`, st.appendChild(be);
                            }
                          ), lt.appendChild(
                            st
                          );
                        },
                        children: /* @__PURE__ */ P.jsx(mr, { icon: "eva:arrow-down-fill" })
                      }
                    )
                  ] }) })
                },
                Fe
              ));
            }),
            d && d(J, we)
          ] }, we))
        ] })
      ] });
    } }),
    !m && /* @__PURE__ */ P.jsx(
      bP,
      {
        config: Object.keys(o[0]),
        closeModal: w
      }
    )
  ] });
}, _P = {
  small: "4rem",
  medium: "6rem",
  large: "8rem"
}, PP = cR(
  fR(
    {
      currentOpen: []
    },
    () => ({
      dispatch: (r) => {
        const o = document.querySelector("#toast-root"), l = document.createElement("div");
        l.className = "toast";
        const c = document.createElement("div");
        c.className = `toast-body shadow-md container rounded-box bg-${(r == null ? void 0 : r.variant) ?? "neutral"}`, l.append(c), l.style.setProperty(
          "--toast-size",
          `${_P[(r == null ? void 0 : r.size) ?? "small"]}`
        );
        const d = document.createElement("span");
        d.innerText = r.message;
        const m = document.createElement("button");
        m.className = "close-btn", m.innerText = "x", m.addEventListener("click", () => {
          l.classList.add("closed"), setTimeout(() => {
            l.remove();
          }, 200);
        });
        const v = document.createElement("div");
        v.className = "fill-bar", v.style.setProperty(
          "--fill-color",
          `var(--${(r == null ? void 0 : r.type) ?? "info"})`
        ), setTimeout(() => {
          l.classList.add("closed");
        }, 2.8 * 1e3), setTimeout(() => {
          l.remove();
        }, 3 * 1e3), c.append(d, m, v), o == null || o.appendChild(l);
      }
    })
  )
), HP = hP, IP = vP;
export {
  OP as Chart,
  NP as DateRangePicker,
  UP as DetailedWorkDay,
  AP as Header,
  $3 as Modal,
  jP as MultiSelect,
  Vw as Select,
  LP as ShowPassword,
  zP as Sidebar,
  FP as Table,
  fF as Textfield,
  IP as changeDesignLanguage,
  Bw as debounce,
  HP as initDesignTranslator,
  dR as useModal,
  yP as useScroll,
  PP as useToast
};
