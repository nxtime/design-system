import kr, { useRef as tr, useState as Dr, useCallback as fc, useEffect as xg, Fragment as TL, useDebugValue as bL } from "react";
function RL(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var NE = { exports: {} }, Uh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function DL() {
  if (yT)
    return Uh;
  yT = 1;
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
  return Uh.Fragment = c, Uh.jsx = m, Uh.jsxs = m, Uh;
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
var gT;
function kL() {
  return gT || (gT = 1, process.env.NODE_ENV !== "production" && function() {
    var i = kr, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), C = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), z = Symbol.iterator, J = "@@iterator";
    function ve(M) {
      if (M === null || typeof M != "object")
        return null;
      var ae = z && M[z] || M[J];
      return typeof ae == "function" ? ae : null;
    }
    var Se = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(M) {
      {
        for (var ae = arguments.length, ye = new Array(ae > 1 ? ae - 1 : 0), Pe = 1; Pe < ae; Pe++)
          ye[Pe - 1] = arguments[Pe];
        re("error", M, ye);
      }
    }
    function re(M, ae, ye) {
      {
        var Pe = Se.ReactDebugCurrentFrame, rt = Pe.getStackAddendum();
        rt !== "" && (ae += "%s", ye = ye.concat([rt]));
        var mt = ye.map(function(at) {
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
    function it(M, ae, ye) {
      var Pe = M.displayName;
      if (Pe)
        return Pe;
      var rt = ae.displayName || ae.name || "";
      return rt !== "" ? ye + "(" + rt + ")" : ye;
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
            var ye = M;
            return Mt(ye._context) + ".Provider";
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
    var Ke = Object.assign, Qt = 0, gt, fn, de, Ue, _e, St, Ct;
    function In() {
    }
    In.__reactDisabledLog = !0;
    function vr() {
      {
        if (Qt === 0) {
          gt = console.log, fn = console.info, de = console.warn, Ue = console.error, _e = console.group, St = console.groupCollapsed, Ct = console.groupEnd;
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
              value: de
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
    var _n = Se.ReactCurrentDispatcher, pa;
    function rr(M, ae, ye) {
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
        var ye = ai.get(M);
        if (ye !== void 0)
          return ye;
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
      var ol = M ? M.displayName || M.name : "", mc = ol ? rr(ol) : "";
      return typeof M == "function" && ai.set(M, mc), mc;
    }
    function On(M, ae, ye) {
      return ha(M, !1);
    }
    function ar(M) {
      var ae = M.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Vn(M, ae, ye) {
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
            return Vn(M.type, ae, ye);
          case j: {
            var Pe = M, rt = Pe._payload, mt = Pe._init;
            try {
              return Vn(mt(rt), ae, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var ir = Object.prototype.hasOwnProperty, lr = {}, va = Se.ReactDebugCurrentFrame;
    function Ha(M) {
      if (M) {
        var ae = M._owner, ye = Vn(M.type, M._source, ae ? ae.type : null);
        va.setExtraStackFrame(ye);
      } else
        va.setExtraStackFrame(null);
    }
    function Ti(M, ae, ye, Pe, rt) {
      {
        var mt = Function.call.bind(ir);
        for (var at in M)
          if (mt(M, at)) {
            var Ve = void 0;
            try {
              if (typeof M[at] != "function") {
                var Ln = Error((Pe || "React class") + ": " + ye + " type `" + at + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[at] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Ve = M[at](ae, at, Pe, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              Ve = qt;
            }
            Ve && !(Ve instanceof Error) && (Ha(rt), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", ye, at, typeof Ve), Ha(null)), Ve instanceof Error && !(Ve.message in lr) && (lr[Ve.message] = !0, Ha(rt), K("Failed %s type: %s", ye, Ve.message), Ha(null));
          }
      }
    }
    var ii = Array.isArray;
    function Pa(M) {
      return ii(M);
    }
    function Zr(M) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, ye = ae && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return ye;
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
    var mn = Se.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, al, Ia, me;
    me = {};
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
        var ye = Be(mn.current.type);
        me[ye] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(mn.current.type), M.ref), me[ye] = !0);
      }
    }
    function Jt(M, ae) {
      {
        var ye = function() {
          al || (al = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ye.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function Nn(M, ae) {
      {
        var ye = function() {
          Ia || (Ia = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ye.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var dn = function(M, ae, ye, Pe, rt, mt, at) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: M,
        key: ae,
        ref: ye,
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
    function Nr(M, ae, ye, Pe, rt) {
      {
        var mt, at = {}, Ve = null, Ln = null;
        ye !== void 0 && (Ya(ye), Ve = "" + ye), lt(ae) && (Ya(ae.key), Ve = "" + ae.key), ze(ae) && (Ln = ae.ref, Ot(ae, rt));
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
    var Pt = Se.ReactCurrentOwner, Jr = Se.ReactDebugCurrentFrame;
    function zt(M) {
      if (M) {
        var ae = M._owner, ye = Vn(M.type, M._source, ae ? ae.type : null);
        Jr.setExtraStackFrame(ye);
      } else
        Jr.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function Go(M) {
      return typeof M == "object" && M !== null && M.$$typeof === o;
    }
    function Wl() {
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
    function Qo(M) {
      {
        if (M !== void 0) {
          var ae = M.fileName.replace(/^.*[\\\/]/, ""), ye = M.lineNumber;
          return `

Check your code at ` + ae + ":" + ye + ".";
        }
        return "";
      }
    }
    var Ju = {};
    function vc(M) {
      {
        var ae = Wl();
        if (!ae) {
          var ye = typeof M == "string" ? M : M.displayName || M.name;
          ye && (ae = `

Check the top-level render call using <` + ye + ">.");
        }
        return ae;
      }
    }
    function Gl(M, ae) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var ye = vc(ae);
        if (Ju[ye])
          return;
        Ju[ye] = !0;
        var Pe = "";
        M && M._owner && M._owner !== Pt.current && (Pe = " It was passed a child from " + Be(M._owner.type) + "."), zt(M), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Pe), zt(null);
      }
    }
    function qo(M, ae) {
      {
        if (typeof M != "object")
          return;
        if (Pa(M))
          for (var ye = 0; ye < M.length; ye++) {
            var Pe = M[ye];
            Go(Pe) && Gl(Pe, ae);
          }
        else if (Go(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var rt = ve(M);
          if (typeof rt == "function" && rt !== M.entries)
            for (var mt = rt.call(M), at; !(at = mt.next()).done; )
              Go(at.value) && Gl(at.value, ae);
        }
      }
    }
    function Ql(M) {
      {
        var ae = M.type;
        if (ae == null || typeof ae == "string")
          return;
        var ye;
        if (typeof ae == "function")
          ye = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === O))
          ye = ae.propTypes;
        else
          return;
        if (ye) {
          var Pe = Be(ae);
          Ti(ye, M.props, "prop", Pe, M);
        } else if (ae.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var rt = Be(ae);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zo(M) {
      {
        for (var ae = Object.keys(M.props), ye = 0; ye < ae.length; ye++) {
          var Pe = ae[ye];
          if (Pe !== "children" && Pe !== "key") {
            zt(M), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), zt(null);
            break;
          }
        }
        M.ref !== null && (zt(M), K("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    function oi(M, ae, ye, Pe, rt, mt) {
      {
        var at = Qe(M);
        if (!at) {
          var Ve = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = Qo(rt);
          Ln ? Ve += Ln : Ve += Wl();
          var qt;
          M === null ? qt = "null" : Pa(M) ? qt = "array" : M !== void 0 && M.$$typeof === o ? (qt = "<" + (Be(M.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof M, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, Ve);
        }
        var Zt = Nr(M, ae, ye, rt, mt);
        if (Zt == null)
          return Zt;
        if (at) {
          var mr = ae.children;
          if (mr !== void 0)
            if (Pe)
              if (Pa(mr)) {
                for (var ol = 0; ol < mr.length; ol++)
                  qo(mr[ol], M);
                Object.freeze && Object.freeze(mr);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qo(mr, M);
        }
        return M === d ? Zo(Zt) : Ql(Zt), Zt;
      }
    }
    function il(M, ae, ye) {
      return oi(M, ae, ye, !0);
    }
    function ea(M, ae, ye) {
      return oi(M, ae, ye, !1);
    }
    var Va = ea, ll = il;
    Ah.Fragment = d, Ah.jsx = Va, Ah.jsxs = ll;
  }()), Ah;
}
process.env.NODE_ENV === "production" ? NE.exports = DL() : NE.exports = kL();
var I = NE.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var sb;
function fe() {
  return sb.apply(null, arguments);
}
function ML(i) {
  sb = i;
}
function tl(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function cc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function Dt(i, o) {
  return Object.prototype.hasOwnProperty.call(i, o);
}
function nw(i) {
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
function $o(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function Jh(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function cb(i, o) {
  var c = [], d, h = i.length;
  for (d = 0; d < h; ++d)
    c.push(o(i[d], d));
  return c;
}
function qu(i, o) {
  for (var c in o)
    Dt(o, c) && (i[c] = o[c]);
  return Dt(o, "toString") && (i.toString = o.toString), Dt(o, "valueOf") && (i.valueOf = o.valueOf), i;
}
function $l(i, o, c, d) {
  return Ub(i, o, c, d, !0).utc();
}
function OL() {
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
  return i._pf == null && (i._pf = OL()), i._pf;
}
var LE;
Array.prototype.some ? LE = Array.prototype.some : LE = function(i) {
  var o = Object(this), c = o.length >>> 0, d;
  for (d = 0; d < c; d++)
    if (d in o && i.call(this, o[d], d, o))
      return !0;
  return !1;
};
function rw(i) {
  if (i._isValid == null) {
    var o = ut(i), c = LE.call(o.parsedDateParts, function(h) {
      return h != null;
    }), d = !isNaN(i._d.getTime()) && o.overflow < 0 && !o.empty && !o.invalidEra && !o.invalidMonth && !o.invalidWeekday && !o.weekdayMismatch && !o.nullInput && !o.invalidFormat && !o.userInvalidated && (!o.meridiem || o.meridiem && c);
    if (i._strict && (d = d && o.charsLeftOver === 0 && o.unusedTokens.length === 0 && o.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = d;
    else
      return d;
  }
  return i._isValid;
}
function Cg(i) {
  var o = $l(NaN);
  return i != null ? qu(ut(o), i) : ut(o).userInvalidated = !0, o;
}
var ST = fe.momentProperties = [], yE = !1;
function aw(i, o) {
  var c, d, h, S = ST.length;
  if (Fa(o._isAMomentObject) || (i._isAMomentObject = o._isAMomentObject), Fa(o._i) || (i._i = o._i), Fa(o._f) || (i._f = o._f), Fa(o._l) || (i._l = o._l), Fa(o._strict) || (i._strict = o._strict), Fa(o._tzm) || (i._tzm = o._tzm), Fa(o._isUTC) || (i._isUTC = o._isUTC), Fa(o._offset) || (i._offset = o._offset), Fa(o._pf) || (i._pf = ut(o)), Fa(o._locale) || (i._locale = o._locale), S > 0)
    for (c = 0; c < S; c++)
      d = ST[c], h = o[d], Fa(h) || (i[d] = h);
  return i;
}
function ev(i) {
  aw(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), yE === !1 && (yE = !0, fe.updateOffset(this), yE = !1);
}
function nl(i) {
  return i instanceof ev || i != null && i._isAMomentObject != null;
}
function fb(i) {
  fe.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function xi(i, o) {
  var c = !0;
  return qu(function() {
    if (fe.deprecationHandler != null && fe.deprecationHandler(null, i), c) {
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
      fb(
        i + `
Arguments: ` + Array.prototype.slice.call(d).join("") + `
` + new Error().stack
      ), c = !1;
    }
    return o.apply(this, arguments);
  }, o);
}
var ET = {};
function db(i, o) {
  fe.deprecationHandler != null && fe.deprecationHandler(i, o), ET[i] || (fb(o), ET[i] = !0);
}
fe.suppressDeprecationWarnings = !1;
fe.deprecationHandler = null;
function Bl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function NL(i) {
  var o, c;
  for (c in i)
    Dt(i, c) && (o = i[c], Bl(o) ? this[c] = o : this["_" + c] = o);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function UE(i, o) {
  var c = qu({}, i), d;
  for (d in o)
    Dt(o, d) && (cc(i[d]) && cc(o[d]) ? (c[d] = {}, qu(c[d], i[d]), qu(c[d], o[d])) : o[d] != null ? c[d] = o[d] : delete c[d]);
  for (d in i)
    Dt(i, d) && !Dt(o, d) && cc(i[d]) && (c[d] = qu({}, c[d]));
  return c;
}
function iw(i) {
  i != null && this.set(i);
}
var AE;
Object.keys ? AE = Object.keys : AE = function(i) {
  var o, c = [];
  for (o in i)
    Dt(i, o) && c.push(o);
  return c;
};
var LL = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function UL(i, o, c) {
  var d = this._calendar[i] || this._calendar.sameElse;
  return Bl(d) ? d.call(o, c) : d;
}
function Vl(i, o, c) {
  var d = "" + Math.abs(i), h = o - d.length, S = i >= 0;
  return (S ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, h)).toString().substr(1) + d;
}
var lw = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ng = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, gE = {}, pd = {};
function Ie(i, o, c, d) {
  var h = d;
  typeof d == "string" && (h = function() {
    return this[d]();
  }), i && (pd[i] = h), o && (pd[o[0]] = function() {
    return Vl(h.apply(this, arguments), o[1], o[2]);
  }), c && (pd[c] = function() {
    return this.localeData().ordinal(
      h.apply(this, arguments),
      i
    );
  });
}
function AL(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function zL(i) {
  var o = i.match(lw), c, d;
  for (c = 0, d = o.length; c < d; c++)
    pd[o[c]] ? o[c] = pd[o[c]] : o[c] = AL(o[c]);
  return function(h) {
    var S = "", m;
    for (m = 0; m < d; m++)
      S += Bl(o[m]) ? o[m].call(h, i) : o[m];
    return S;
  };
}
function ug(i, o) {
  return i.isValid() ? (o = pb(o, i.localeData()), gE[o] = gE[o] || zL(o), gE[o](i)) : i.localeData().invalidDate();
}
function pb(i, o) {
  var c = 5;
  function d(h) {
    return o.longDateFormat(h) || h;
  }
  for (ng.lastIndex = 0; c >= 0 && ng.test(i); )
    i = i.replace(
      ng,
      d
    ), ng.lastIndex = 0, c -= 1;
  return i;
}
var jL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function FL(i) {
  var o = this._longDateFormat[i], c = this._longDateFormat[i.toUpperCase()];
  return o || !c ? o : (this._longDateFormat[i] = c.match(lw).map(function(d) {
    return d === "MMMM" || d === "MM" || d === "DD" || d === "dddd" ? d.slice(1) : d;
  }).join(""), this._longDateFormat[i]);
}
var HL = "Invalid date";
function PL() {
  return this._invalidDate;
}
var YL = "%d", IL = /\d{1,2}/;
function VL(i) {
  return this._ordinal.replace("%d", i);
}
var $L = {
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
function BL(i, o, c, d) {
  var h = this._relativeTime[c];
  return Bl(h) ? h(i, o, c, d) : h.replace(/%d/i, i);
}
function WL(i, o) {
  var c = this._relativeTime[i > 0 ? "future" : "past"];
  return Bl(c) ? c(o) : c.replace(/%s/i, o);
}
var Ph = {};
function Qr(i, o) {
  var c = i.toLowerCase();
  Ph[c] = Ph[c + "s"] = Ph[o] = i;
}
function Ci(i) {
  return typeof i == "string" ? Ph[i] || Ph[i.toLowerCase()] : void 0;
}
function ow(i) {
  var o = {}, c, d;
  for (d in i)
    Dt(i, d) && (c = Ci(d), c && (o[c] = i[d]));
  return o;
}
var hb = {};
function qr(i, o) {
  hb[i] = o;
}
function GL(i) {
  var o = [], c;
  for (c in i)
    Dt(i, c) && o.push({ unit: c, priority: hb[c] });
  return o.sort(function(d, h) {
    return d.priority - h.priority;
  }), o;
}
function Tg(i) {
  return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0;
}
function _i(i) {
  return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
}
function dt(i) {
  var o = +i, c = 0;
  return o !== 0 && isFinite(o) && (c = _i(o)), c;
}
function md(i, o) {
  return function(c) {
    return c != null ? (vb(this, i, c), fe.updateOffset(this, o), this) : vg(this, i);
  };
}
function vg(i, o) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + o]() : NaN;
}
function vb(i, o, c) {
  i.isValid() && !isNaN(c) && (o === "FullYear" && Tg(i.year()) && i.month() === 1 && i.date() === 29 ? (c = dt(c), i._d["set" + (i._isUTC ? "UTC" : "") + o](
    c,
    i.month(),
    Og(c, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + o](c));
}
function QL(i) {
  return i = Ci(i), Bl(this[i]) ? this[i]() : this;
}
function qL(i, o) {
  if (typeof i == "object") {
    i = ow(i);
    var c = GL(i), d, h = c.length;
    for (d = 0; d < h; d++)
      this[c[d].unit](i[c[d].unit]);
  } else if (i = Ci(i), Bl(this[i]))
    return this[i](o);
  return this;
}
var mb = /\d/, ni = /\d\d/, yb = /\d{3}/, uw = /\d{4}/, bg = /[+-]?\d{6}/, ln = /\d\d?/, gb = /\d\d\d\d?/, Sb = /\d\d\d\d\d\d?/, Rg = /\d{1,3}/, sw = /\d{1,4}/, Dg = /[+-]?\d{1,6}/, yd = /\d+/, kg = /[+-]?\d+/, ZL = /Z|[+-]\d\d:?\d\d/gi, Mg = /Z|[+-]\d\d(?::?\d\d)?/gi, KL = /[+-]?\d+(\.\d{1,3})?/, tv = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, mg;
mg = {};
function be(i, o, c) {
  mg[i] = Bl(o) ? o : function(d, h) {
    return d && c ? c : o;
  };
}
function XL(i, o) {
  return Dt(mg, i) ? mg[i](o._strict, o._locale) : new RegExp(JL(i));
}
function JL(i) {
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
var zE = {};
function It(i, o) {
  var c, d = o, h;
  for (typeof i == "string" && (i = [i]), $o(o) && (d = function(S, m) {
    m[o] = dt(S);
  }), h = i.length, c = 0; c < h; c++)
    zE[i[c]] = d;
}
function nv(i, o) {
  It(i, function(c, d, h, S) {
    h._w = h._w || {}, o(c, h._w, h, S);
  });
}
function e2(i, o, c) {
  o != null && Dt(zE, i) && zE[i](o, c._a, c, i);
}
var Gr = 0, Yo = 1, Il = 2, nr = 3, el = 4, Io = 5, sc = 6, t2 = 7, n2 = 8;
function r2(i, o) {
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
function Og(i, o) {
  if (isNaN(i) || isNaN(o))
    return NaN;
  var c = r2(o, 12);
  return i += (o - c) / 12, c === 1 ? Tg(i) ? 29 : 28 : 31 - c % 7 % 2;
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
  o[Yo] = dt(i) - 1;
});
It(["MMM", "MMMM"], function(i, o, c, d) {
  var h = c._locale.monthsParse(i, d, c._strict);
  h != null ? o[Yo] = h : ut(c).invalidMonth = i;
});
var a2 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Eb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), wb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, i2 = tv, l2 = tv;
function o2(i, o) {
  return i ? tl(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || wb).test(o) ? "format" : "standalone"][i.month()] : tl(this._months) ? this._months : this._months.standalone;
}
function u2(i, o) {
  return i ? tl(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[wb.test(o) ? "format" : "standalone"][i.month()] : tl(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function s2(i, o, c) {
  var d, h, S, m = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d)
      S = $l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(
        S,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[d] = this.months(S, "").toLocaleLowerCase();
  return c ? o === "MMM" ? (h = Mn.call(this._shortMonthsParse, m), h !== -1 ? h : null) : (h = Mn.call(this._longMonthsParse, m), h !== -1 ? h : null) : o === "MMM" ? (h = Mn.call(this._shortMonthsParse, m), h !== -1 ? h : (h = Mn.call(this._longMonthsParse, m), h !== -1 ? h : null)) : (h = Mn.call(this._longMonthsParse, m), h !== -1 ? h : (h = Mn.call(this._shortMonthsParse, m), h !== -1 ? h : null));
}
function c2(i, o, c) {
  var d, h, S;
  if (this._monthsParseExact)
    return s2.call(this, i, o, c);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
    if (h = $l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp(
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
function _b(i, o) {
  var c;
  if (!i.isValid())
    return i;
  if (typeof o == "string") {
    if (/^\d+$/.test(o))
      o = dt(o);
    else if (o = i.localeData().monthsParse(o), !$o(o))
      return i;
  }
  return c = Math.min(i.date(), Og(i.year(), o)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](o, c), i;
}
function xb(i) {
  return i != null ? (_b(this, i), fe.updateOffset(this, !0), this) : vg(this, "Month");
}
function f2() {
  return Og(this.year(), this.month());
}
function d2(i) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Cb.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Dt(this, "_monthsShortRegex") || (this._monthsShortRegex = i2), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function p2(i) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Cb.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Dt(this, "_monthsRegex") || (this._monthsRegex = l2), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function Cb() {
  function i(m, C) {
    return C.length - m.length;
  }
  var o = [], c = [], d = [], h, S;
  for (h = 0; h < 12; h++)
    S = $l([2e3, h]), o.push(this.monthsShort(S, "")), c.push(this.months(S, "")), d.push(this.months(S, "")), d.push(this.monthsShort(S, ""));
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
  return i <= 9999 ? Vl(i, 4) : "+" + i;
});
Ie(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ie(0, ["YYYY", 4], 0, "year");
Ie(0, ["YYYYY", 5], 0, "year");
Ie(0, ["YYYYYY", 6, !0], 0, "year");
Qr("year", "y");
qr("year", 1);
be("Y", kg);
be("YY", ln, ni);
be("YYYY", sw, uw);
be("YYYYY", Dg, bg);
be("YYYYYY", Dg, bg);
It(["YYYYY", "YYYYYY"], Gr);
It("YYYY", function(i, o) {
  o[Gr] = i.length === 2 ? fe.parseTwoDigitYear(i) : dt(i);
});
It("YY", function(i, o) {
  o[Gr] = fe.parseTwoDigitYear(i);
});
It("Y", function(i, o) {
  o[Gr] = parseInt(i, 10);
});
function Yh(i) {
  return Tg(i) ? 366 : 365;
}
fe.parseTwoDigitYear = function(i) {
  return dt(i) + (dt(i) > 68 ? 1900 : 2e3);
};
var Tb = md("FullYear", !0);
function h2() {
  return Tg(this.year());
}
function v2(i, o, c, d, h, S, m) {
  var C;
  return i < 100 && i >= 0 ? (C = new Date(i + 400, o, c, d, h, S, m), isFinite(C.getFullYear()) && C.setFullYear(i)) : C = new Date(i, o, c, d, h, S, m), C;
}
function Wh(i) {
  var o, c;
  return i < 100 && i >= 0 ? (c = Array.prototype.slice.call(arguments), c[0] = i + 400, o = new Date(Date.UTC.apply(null, c)), isFinite(o.getUTCFullYear()) && o.setUTCFullYear(i)) : o = new Date(Date.UTC.apply(null, arguments)), o;
}
function yg(i, o, c) {
  var d = 7 + o - c, h = (7 + Wh(i, 0, d).getUTCDay() - o) % 7;
  return -h + d - 1;
}
function bb(i, o, c, d, h) {
  var S = (7 + c - d) % 7, m = yg(i, d, h), C = 1 + 7 * (o - 1) + S + m, T, R;
  return C <= 0 ? (T = i - 1, R = Yh(T) + C) : C > Yh(i) ? (T = i + 1, R = C - Yh(i)) : (T = i, R = C), {
    year: T,
    dayOfYear: R
  };
}
function Gh(i, o, c) {
  var d = yg(i.year(), o, c), h = Math.floor((i.dayOfYear() - d - 1) / 7) + 1, S, m;
  return h < 1 ? (m = i.year() - 1, S = h + Vo(m, o, c)) : h > Vo(i.year(), o, c) ? (S = h - Vo(i.year(), o, c), m = i.year() + 1) : (m = i.year(), S = h), {
    week: S,
    year: m
  };
}
function Vo(i, o, c) {
  var d = yg(i, o, c), h = yg(i + 1, o, c);
  return (Yh(i) - d + h) / 7;
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
nv(
  ["w", "ww", "W", "WW"],
  function(i, o, c, d) {
    o[d.substr(0, 1)] = dt(i);
  }
);
function m2(i) {
  return Gh(i, this._week.dow, this._week.doy).week;
}
var y2 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function g2() {
  return this._week.dow;
}
function S2() {
  return this._week.doy;
}
function E2(i) {
  var o = this.localeData().week(this);
  return i == null ? o : this.add((i - o) * 7, "d");
}
function w2(i) {
  var o = Gh(this, 1, 4).week;
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
nv(["dd", "ddd", "dddd"], function(i, o, c, d) {
  var h = c._locale.weekdaysParse(i, d, c._strict);
  h != null ? o.d = h : ut(c).invalidWeekday = i;
});
nv(["d", "e", "E"], function(i, o, c, d) {
  o[d] = dt(i);
});
function _2(i, o) {
  return typeof i != "string" ? i : isNaN(i) ? (i = o.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function x2(i, o) {
  return typeof i == "string" ? o.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function cw(i, o) {
  return i.slice(o, 7).concat(i.slice(0, o));
}
var C2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Rb = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), T2 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), b2 = tv, R2 = tv, D2 = tv;
function k2(i, o) {
  var c = tl(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(o) ? "format" : "standalone"];
  return i === !0 ? cw(c, this._week.dow) : i ? c[i.day()] : c;
}
function M2(i) {
  return i === !0 ? cw(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function O2(i) {
  return i === !0 ? cw(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function N2(i, o, c) {
  var d, h, S, m = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d)
      S = $l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(
        S,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(
        S,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(S, "").toLocaleLowerCase();
  return c ? o === "dddd" ? (h = Mn.call(this._weekdaysParse, m), h !== -1 ? h : null) : o === "ddd" ? (h = Mn.call(this._shortWeekdaysParse, m), h !== -1 ? h : null) : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 ? h : null) : o === "dddd" ? (h = Mn.call(this._weekdaysParse, m), h !== -1 || (h = Mn.call(this._shortWeekdaysParse, m), h !== -1) ? h : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 ? h : null)) : o === "ddd" ? (h = Mn.call(this._shortWeekdaysParse, m), h !== -1 || (h = Mn.call(this._weekdaysParse, m), h !== -1) ? h : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 ? h : null)) : (h = Mn.call(this._minWeekdaysParse, m), h !== -1 || (h = Mn.call(this._weekdaysParse, m), h !== -1) ? h : (h = Mn.call(this._shortWeekdaysParse, m), h !== -1 ? h : null));
}
function L2(i, o, c) {
  var d, h, S;
  if (this._weekdaysParseExact)
    return N2.call(this, i, o, c);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
    if (h = $l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp(
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
function U2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = _2(i, this.localeData()), this.add(i - o, "d")) : o;
}
function A2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var o = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? o : this.add(i - o, "d");
}
function z2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var o = x2(i, this.localeData());
    return this.day(this.day() % 7 ? o : o - 7);
  } else
    return this.day() || 7;
}
function j2(i) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || fw.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Dt(this, "_weekdaysRegex") || (this._weekdaysRegex = b2), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function F2(i) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || fw.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Dt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = R2), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function H2(i) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || fw.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Dt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = D2), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function fw() {
  function i(k, O) {
    return O.length - k.length;
  }
  var o = [], c = [], d = [], h = [], S, m, C, T, R;
  for (S = 0; S < 7; S++)
    m = $l([2e3, 1]).day(S), C = ti(this.weekdaysMin(m, "")), T = ti(this.weekdaysShort(m, "")), R = ti(this.weekdays(m, "")), o.push(C), c.push(T), d.push(R), h.push(C), h.push(T), h.push(R);
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
function dw() {
  return this.hours() % 12 || 12;
}
function P2() {
  return this.hours() || 24;
}
Ie("H", ["HH", 2], 0, "hour");
Ie("h", ["hh", 2], 0, dw);
Ie("k", ["kk", 2], 0, P2);
Ie("hmm", 0, 0, function() {
  return "" + dw.apply(this) + Vl(this.minutes(), 2);
});
Ie("hmmss", 0, 0, function() {
  return "" + dw.apply(this) + Vl(this.minutes(), 2) + Vl(this.seconds(), 2);
});
Ie("Hmm", 0, 0, function() {
  return "" + this.hours() + Vl(this.minutes(), 2);
});
Ie("Hmmss", 0, 0, function() {
  return "" + this.hours() + Vl(this.minutes(), 2) + Vl(this.seconds(), 2);
});
function Db(i, o) {
  Ie(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      o
    );
  });
}
Db("a", !0);
Db("A", !1);
Qr("hour", "h");
qr("hour", 13);
function kb(i, o) {
  return o._meridiemParse;
}
be("a", kb);
be("A", kb);
be("H", ln);
be("h", ln);
be("k", ln);
be("HH", ln, ni);
be("hh", ln, ni);
be("kk", ln, ni);
be("hmm", gb);
be("hmmss", Sb);
be("Hmm", gb);
be("Hmmss", Sb);
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
  o[nr] = dt(i.substr(0, d)), o[el] = dt(i.substr(d)), ut(c).bigHour = !0;
});
It("hmmss", function(i, o, c) {
  var d = i.length - 4, h = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[el] = dt(i.substr(d, 2)), o[Io] = dt(i.substr(h)), ut(c).bigHour = !0;
});
It("Hmm", function(i, o, c) {
  var d = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[el] = dt(i.substr(d));
});
It("Hmmss", function(i, o, c) {
  var d = i.length - 4, h = i.length - 2;
  o[nr] = dt(i.substr(0, d)), o[el] = dt(i.substr(d, 2)), o[Io] = dt(i.substr(h));
});
function Y2(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var I2 = /[ap]\.?m?\.?/i, V2 = md("Hours", !0);
function $2(i, o, c) {
  return i > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
}
var Mb = {
  calendar: LL,
  longDateFormat: jL,
  invalidDate: HL,
  ordinal: YL,
  dayOfMonthOrdinalParse: IL,
  relativeTime: $L,
  months: a2,
  monthsShort: Eb,
  week: y2,
  weekdays: C2,
  weekdaysMin: T2,
  weekdaysShort: Rb,
  meridiemParse: I2
}, cn = {}, zh = {}, Qh;
function B2(i, o) {
  var c, d = Math.min(i.length, o.length);
  for (c = 0; c < d; c += 1)
    if (i[c] !== o[c])
      return c;
  return d;
}
function wT(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function W2(i) {
  for (var o = 0, c, d, h, S; o < i.length; ) {
    for (S = wT(i[o]).split("-"), c = S.length, d = wT(i[o + 1]), d = d ? d.split("-") : null; c > 0; ) {
      if (h = Ng(S.slice(0, c).join("-")), h)
        return h;
      if (d && d.length >= c && B2(S, d) >= c - 1)
        break;
      c--;
    }
    o++;
  }
  return Qh;
}
function G2(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function Ng(i) {
  var o = null, c;
  if (cn[i] === void 0 && typeof module < "u" && module && module.exports && G2(i))
    try {
      o = Qh._abbr, c = require, c("./locale/" + i), Ku(o);
    } catch {
      cn[i] = null;
    }
  return cn[i];
}
function Ku(i, o) {
  var c;
  return i && (Fa(o) ? c = Bo(i) : c = pw(i, o), c ? Qh = c : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Qh._abbr;
}
function pw(i, o) {
  if (o !== null) {
    var c, d = Mb;
    if (o.abbr = i, cn[i] != null)
      db(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), d = cn[i]._config;
    else if (o.parentLocale != null)
      if (cn[o.parentLocale] != null)
        d = cn[o.parentLocale]._config;
      else if (c = Ng(o.parentLocale), c != null)
        d = c._config;
      else
        return zh[o.parentLocale] || (zh[o.parentLocale] = []), zh[o.parentLocale].push({
          name: i,
          config: o
        }), null;
    return cn[i] = new iw(UE(d, o)), zh[i] && zh[i].forEach(function(h) {
      pw(h.name, h.config);
    }), Ku(i), cn[i];
  } else
    return delete cn[i], null;
}
function Q2(i, o) {
  if (o != null) {
    var c, d, h = Mb;
    cn[i] != null && cn[i].parentLocale != null ? cn[i].set(UE(cn[i]._config, o)) : (d = Ng(i), d != null && (h = d._config), o = UE(h, o), d == null && (o.abbr = i), c = new iw(o), c.parentLocale = cn[i], cn[i] = c), Ku(i);
  } else
    cn[i] != null && (cn[i].parentLocale != null ? (cn[i] = cn[i].parentLocale, i === Ku() && Ku(i)) : cn[i] != null && delete cn[i]);
  return cn[i];
}
function Bo(i) {
  var o;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Qh;
  if (!tl(i)) {
    if (o = Ng(i), o)
      return o;
    i = [i];
  }
  return W2(i);
}
function q2() {
  return AE(cn);
}
function hw(i) {
  var o, c = i._a;
  return c && ut(i).overflow === -2 && (o = c[Yo] < 0 || c[Yo] > 11 ? Yo : c[Il] < 1 || c[Il] > Og(c[Gr], c[Yo]) ? Il : c[nr] < 0 || c[nr] > 24 || c[nr] === 24 && (c[el] !== 0 || c[Io] !== 0 || c[sc] !== 0) ? nr : c[el] < 0 || c[el] > 59 ? el : c[Io] < 0 || c[Io] > 59 ? Io : c[sc] < 0 || c[sc] > 999 ? sc : -1, ut(i)._overflowDayOfYear && (o < Gr || o > Il) && (o = Il), ut(i)._overflowWeeks && o === -1 && (o = t2), ut(i)._overflowWeekday && o === -1 && (o = n2), ut(i).overflow = o), i;
}
var Z2 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, K2 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, X2 = /Z|[+-]\d\d(?::?\d\d)?/, rg = [
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
], SE = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], J2 = /^\/?Date\((-?\d+)/i, eU = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, tU = {
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
function Ob(i) {
  var o, c, d = i._i, h = Z2.exec(d) || K2.exec(d), S, m, C, T, R = rg.length, k = SE.length;
  if (h) {
    for (ut(i).iso = !0, o = 0, c = R; o < c; o++)
      if (rg[o][1].exec(h[1])) {
        m = rg[o][0], S = rg[o][2] !== !1;
        break;
      }
    if (m == null) {
      i._isValid = !1;
      return;
    }
    if (h[3]) {
      for (o = 0, c = k; o < c; o++)
        if (SE[o][1].exec(h[3])) {
          C = (h[2] || " ") + SE[o][0];
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
      if (X2.exec(h[4]))
        T = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = m + (C || "") + (T || ""), mw(i);
  } else
    i._isValid = !1;
}
function nU(i, o, c, d, h, S) {
  var m = [
    rU(i),
    Eb.indexOf(o),
    parseInt(c, 10),
    parseInt(d, 10),
    parseInt(h, 10)
  ];
  return S && m.push(parseInt(S, 10)), m;
}
function rU(i) {
  var o = parseInt(i, 10);
  return o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o;
}
function aU(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function iU(i, o, c) {
  if (i) {
    var d = Rb.indexOf(i), h = new Date(
      o[0],
      o[1],
      o[2]
    ).getDay();
    if (d !== h)
      return ut(c).weekdayMismatch = !0, c._isValid = !1, !1;
  }
  return !0;
}
function lU(i, o, c) {
  if (i)
    return tU[i];
  if (o)
    return 0;
  var d = parseInt(c, 10), h = d % 100, S = (d - h) / 100;
  return S * 60 + h;
}
function Nb(i) {
  var o = eU.exec(aU(i._i)), c;
  if (o) {
    if (c = nU(
      o[4],
      o[3],
      o[2],
      o[5],
      o[6],
      o[7]
    ), !iU(o[1], c, i))
      return;
    i._a = c, i._tzm = lU(o[8], o[9], o[10]), i._d = Wh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), ut(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function oU(i) {
  var o = J2.exec(i._i);
  if (o !== null) {
    i._d = /* @__PURE__ */ new Date(+o[1]);
    return;
  }
  if (Ob(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if (Nb(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : fe.createFromInputFallback(i);
}
fe.createFromInputFallback = xi(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(i) {
    i._d = /* @__PURE__ */ new Date(i._i + (i._useUTC ? " UTC" : ""));
  }
);
function fd(i, o, c) {
  return i ?? o ?? c;
}
function uU(i) {
  var o = new Date(fe.now());
  return i._useUTC ? [
    o.getUTCFullYear(),
    o.getUTCMonth(),
    o.getUTCDate()
  ] : [o.getFullYear(), o.getMonth(), o.getDate()];
}
function vw(i) {
  var o, c, d = [], h, S, m;
  if (!i._d) {
    for (h = uU(i), i._w && i._a[Il] == null && i._a[Yo] == null && sU(i), i._dayOfYear != null && (m = fd(i._a[Gr], h[Gr]), (i._dayOfYear > Yh(m) || i._dayOfYear === 0) && (ut(i)._overflowDayOfYear = !0), c = Wh(m, 0, i._dayOfYear), i._a[Yo] = c.getUTCMonth(), i._a[Il] = c.getUTCDate()), o = 0; o < 3 && i._a[o] == null; ++o)
      i._a[o] = d[o] = h[o];
    for (; o < 7; o++)
      i._a[o] = d[o] = i._a[o] == null ? o === 2 ? 1 : 0 : i._a[o];
    i._a[nr] === 24 && i._a[el] === 0 && i._a[Io] === 0 && i._a[sc] === 0 && (i._nextDay = !0, i._a[nr] = 0), i._d = (i._useUTC ? Wh : v2).apply(
      null,
      d
    ), S = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[nr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== S && (ut(i).weekdayMismatch = !0);
  }
}
function sU(i) {
  var o, c, d, h, S, m, C, T, R;
  o = i._w, o.GG != null || o.W != null || o.E != null ? (S = 1, m = 4, c = fd(
    o.GG,
    i._a[Gr],
    Gh(an(), 1, 4).year
  ), d = fd(o.W, 1), h = fd(o.E, 1), (h < 1 || h > 7) && (T = !0)) : (S = i._locale._week.dow, m = i._locale._week.doy, R = Gh(an(), S, m), c = fd(o.gg, i._a[Gr], R.year), d = fd(o.w, R.week), o.d != null ? (h = o.d, (h < 0 || h > 6) && (T = !0)) : o.e != null ? (h = o.e + S, (o.e < 0 || o.e > 6) && (T = !0)) : h = S), d < 1 || d > Vo(c, S, m) ? ut(i)._overflowWeeks = !0 : T != null ? ut(i)._overflowWeekday = !0 : (C = bb(c, d, h, S, m), i._a[Gr] = C.year, i._dayOfYear = C.dayOfYear);
}
fe.ISO_8601 = function() {
};
fe.RFC_2822 = function() {
};
function mw(i) {
  if (i._f === fe.ISO_8601) {
    Ob(i);
    return;
  }
  if (i._f === fe.RFC_2822) {
    Nb(i);
    return;
  }
  i._a = [], ut(i).empty = !0;
  var o = "" + i._i, c, d, h, S, m, C = o.length, T = 0, R, k;
  for (h = pb(i._f, i._locale).match(lw) || [], k = h.length, c = 0; c < k; c++)
    S = h[c], d = (o.match(XL(S, i)) || [])[0], d && (m = o.substr(0, o.indexOf(d)), m.length > 0 && ut(i).unusedInput.push(m), o = o.slice(
      o.indexOf(d) + d.length
    ), T += d.length), pd[S] ? (d ? ut(i).empty = !1 : ut(i).unusedTokens.push(S), e2(S, d, i)) : i._strict && !d && ut(i).unusedTokens.push(S);
  ut(i).charsLeftOver = C - T, o.length > 0 && ut(i).unusedInput.push(o), i._a[nr] <= 12 && ut(i).bigHour === !0 && i._a[nr] > 0 && (ut(i).bigHour = void 0), ut(i).parsedDateParts = i._a.slice(0), ut(i).meridiem = i._meridiem, i._a[nr] = cU(
    i._locale,
    i._a[nr],
    i._meridiem
  ), R = ut(i).era, R !== null && (i._a[Gr] = i._locale.erasConvertYear(R, i._a[Gr])), vw(i), hw(i);
}
function cU(i, o, c) {
  var d;
  return c == null ? o : i.meridiemHour != null ? i.meridiemHour(o, c) : (i.isPM != null && (d = i.isPM(c), d && o < 12 && (o += 12), !d && o === 12 && (o = 0)), o);
}
function fU(i) {
  var o, c, d, h, S, m, C = !1, T = i._f.length;
  if (T === 0) {
    ut(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (h = 0; h < T; h++)
    S = 0, m = !1, o = aw({}, i), i._useUTC != null && (o._useUTC = i._useUTC), o._f = i._f[h], mw(o), rw(o) && (m = !0), S += ut(o).charsLeftOver, S += ut(o).unusedTokens.length * 10, ut(o).score = S, C ? S < d && (d = S, c = o) : (d == null || S < d || m) && (d = S, c = o, m && (C = !0));
  qu(i, c || o);
}
function dU(i) {
  if (!i._d) {
    var o = ow(i._i), c = o.day === void 0 ? o.date : o.day;
    i._a = cb(
      [o.year, o.month, c, o.hour, o.minute, o.second, o.millisecond],
      function(d) {
        return d && parseInt(d, 10);
      }
    ), vw(i);
  }
}
function pU(i) {
  var o = new ev(hw(Lb(i)));
  return o._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
}
function Lb(i) {
  var o = i._i, c = i._f;
  return i._locale = i._locale || Bo(i._l), o === null || c === void 0 && o === "" ? Cg({ nullInput: !0 }) : (typeof o == "string" && (i._i = o = i._locale.preparse(o)), nl(o) ? new ev(hw(o)) : (Jh(o) ? i._d = o : tl(c) ? fU(i) : c ? mw(i) : hU(i), rw(i) || (i._d = null), i));
}
function hU(i) {
  var o = i._i;
  Fa(o) ? i._d = new Date(fe.now()) : Jh(o) ? i._d = new Date(o.valueOf()) : typeof o == "string" ? oU(i) : tl(o) ? (i._a = cb(o.slice(0), function(c) {
    return parseInt(c, 10);
  }), vw(i)) : cc(o) ? dU(i) : $o(o) ? i._d = new Date(o) : fe.createFromInputFallback(i);
}
function Ub(i, o, c, d, h) {
  var S = {};
  return (o === !0 || o === !1) && (d = o, o = void 0), (c === !0 || c === !1) && (d = c, c = void 0), (cc(i) && nw(i) || tl(i) && i.length === 0) && (i = void 0), S._isAMomentObject = !0, S._useUTC = S._isUTC = h, S._l = c, S._i = i, S._f = o, S._strict = d, pU(S);
}
function an(i, o, c, d) {
  return Ub(i, o, c, d, !1);
}
var vU = xi(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = an.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : Cg();
  }
), mU = xi(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = an.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : Cg();
  }
);
function Ab(i, o) {
  var c, d;
  if (o.length === 1 && tl(o[0]) && (o = o[0]), !o.length)
    return an();
  for (c = o[0], d = 1; d < o.length; ++d)
    (!o[d].isValid() || o[d][i](c)) && (c = o[d]);
  return c;
}
function yU() {
  var i = [].slice.call(arguments, 0);
  return Ab("isBefore", i);
}
function gU() {
  var i = [].slice.call(arguments, 0);
  return Ab("isAfter", i);
}
var SU = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, jh = [
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
function EU(i) {
  var o, c = !1, d, h = jh.length;
  for (o in i)
    if (Dt(i, o) && !(Mn.call(jh, o) !== -1 && (i[o] == null || !isNaN(i[o]))))
      return !1;
  for (d = 0; d < h; ++d)
    if (i[jh[d]]) {
      if (c)
        return !1;
      parseFloat(i[jh[d]]) !== dt(i[jh[d]]) && (c = !0);
    }
  return !0;
}
function wU() {
  return this._isValid;
}
function _U() {
  return rl(NaN);
}
function Lg(i) {
  var o = ow(i), c = o.year || 0, d = o.quarter || 0, h = o.month || 0, S = o.week || o.isoWeek || 0, m = o.day || 0, C = o.hour || 0, T = o.minute || 0, R = o.second || 0, k = o.millisecond || 0;
  this._isValid = EU(o), this._milliseconds = +k + R * 1e3 + // 1000
  T * 6e4 + // 1000 * 60
  C * 1e3 * 60 * 60, this._days = +m + S * 7, this._months = +h + d * 3 + c * 12, this._data = {}, this._locale = Bo(), this._bubble();
}
function sg(i) {
  return i instanceof Lg;
}
function jE(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function xU(i, o, c) {
  var d = Math.min(i.length, o.length), h = Math.abs(i.length - o.length), S = 0, m;
  for (m = 0; m < d; m++)
    (c && i[m] !== o[m] || !c && dt(i[m]) !== dt(o[m])) && S++;
  return S + h;
}
function zb(i, o) {
  Ie(i, 0, 0, function() {
    var c = this.utcOffset(), d = "+";
    return c < 0 && (c = -c, d = "-"), d + Vl(~~(c / 60), 2) + o + Vl(~~c % 60, 2);
  });
}
zb("Z", ":");
zb("ZZ", "");
be("Z", Mg);
be("ZZ", Mg);
It(["Z", "ZZ"], function(i, o, c) {
  c._useUTC = !0, c._tzm = yw(Mg, i);
});
var CU = /([\+\-]|\d\d)/gi;
function yw(i, o) {
  var c = (o || "").match(i), d, h, S;
  return c === null ? null : (d = c[c.length - 1] || [], h = (d + "").match(CU) || ["-", 0, 0], S = +(h[1] * 60) + dt(h[2]), S === 0 ? 0 : h[0] === "+" ? S : -S);
}
function gw(i, o) {
  var c, d;
  return o._isUTC ? (c = o.clone(), d = (nl(i) || Jh(i) ? i.valueOf() : an(i).valueOf()) - c.valueOf(), c._d.setTime(c._d.valueOf() + d), fe.updateOffset(c, !1), c) : an(i).local();
}
function FE(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
fe.updateOffset = function() {
};
function TU(i, o, c) {
  var d = this._offset || 0, h;
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    if (typeof i == "string") {
      if (i = yw(Mg, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !c && (i = i * 60);
    return !this._isUTC && o && (h = FE(this)), this._offset = i, this._isUTC = !0, h != null && this.add(h, "m"), d !== i && (!o || this._changeInProgress ? Hb(
      this,
      rl(i - d, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, fe.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? d : FE(this);
}
function bU(i, o) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, o), this) : -this.utcOffset();
}
function RU(i) {
  return this.utcOffset(0, i);
}
function DU(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(FE(this), "m")), this;
}
function kU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = yw(ZL, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function MU(i) {
  return this.isValid() ? (i = i ? an(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function OU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function NU() {
  if (!Fa(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, o;
  return aw(i, this), i = Lb(i), i._a ? (o = i._isUTC ? $l(i._a) : an(i._a), this._isDSTShifted = this.isValid() && xU(i._a, o.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function LU() {
  return this.isValid() ? !this._isUTC : !1;
}
function UU() {
  return this.isValid() ? this._isUTC : !1;
}
function jb() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var AU = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, zU = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function rl(i, o) {
  var c = i, d = null, h, S, m;
  return sg(i) ? c = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : $o(i) || !isNaN(+i) ? (c = {}, o ? c[o] = +i : c.milliseconds = +i) : (d = AU.exec(i)) ? (h = d[1] === "-" ? -1 : 1, c = {
    y: 0,
    d: dt(d[Il]) * h,
    h: dt(d[nr]) * h,
    m: dt(d[el]) * h,
    s: dt(d[Io]) * h,
    ms: dt(jE(d[sc] * 1e3)) * h
    // the millisecond decimal point is included in the match
  }) : (d = zU.exec(i)) ? (h = d[1] === "-" ? -1 : 1, c = {
    y: uc(d[2], h),
    M: uc(d[3], h),
    w: uc(d[4], h),
    d: uc(d[5], h),
    h: uc(d[6], h),
    m: uc(d[7], h),
    s: uc(d[8], h)
  }) : c == null ? c = {} : typeof c == "object" && ("from" in c || "to" in c) && (m = jU(
    an(c.from),
    an(c.to)
  ), c = {}, c.ms = m.milliseconds, c.M = m.months), S = new Lg(c), sg(i) && Dt(i, "_locale") && (S._locale = i._locale), sg(i) && Dt(i, "_isValid") && (S._isValid = i._isValid), S;
}
rl.fn = Lg.prototype;
rl.invalid = _U;
function uc(i, o) {
  var c = i && parseFloat(i.replace(",", "."));
  return (isNaN(c) ? 0 : c) * o;
}
function _T(i, o) {
  var c = {};
  return c.months = o.month() - i.month() + (o.year() - i.year()) * 12, i.clone().add(c.months, "M").isAfter(o) && --c.months, c.milliseconds = +o - +i.clone().add(c.months, "M"), c;
}
function jU(i, o) {
  var c;
  return i.isValid() && o.isValid() ? (o = gw(o, i), i.isBefore(o) ? c = _T(i, o) : (c = _T(o, i), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
}
function Fb(i, o) {
  return function(c, d) {
    var h, S;
    return d !== null && !isNaN(+d) && (db(
      o,
      "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), S = c, c = d, d = S), h = rl(c, d), Hb(this, h, i), this;
  };
}
function Hb(i, o, c, d) {
  var h = o._milliseconds, S = jE(o._days), m = jE(o._months);
  i.isValid() && (d = d ?? !0, m && _b(i, vg(i, "Month") + m * c), S && vb(i, "Date", vg(i, "Date") + S * c), h && i._d.setTime(i._d.valueOf() + h * c), d && fe.updateOffset(i, S || m));
}
var FU = Fb(1, "add"), HU = Fb(-1, "subtract");
function Pb(i) {
  return typeof i == "string" || i instanceof String;
}
function PU(i) {
  return nl(i) || Jh(i) || Pb(i) || $o(i) || IU(i) || YU(i) || i === null || i === void 0;
}
function YU(i) {
  var o = cc(i) && !nw(i), c = !1, d = [
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
function IU(i) {
  var o = tl(i), c = !1;
  return o && (c = i.filter(function(d) {
    return !$o(d) && Pb(i);
  }).length === 0), o && c;
}
function VU(i) {
  var o = cc(i) && !nw(i), c = !1, d = [
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
function $U(i, o) {
  var c = i.diff(o, "days", !0);
  return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
}
function BU(i, o) {
  arguments.length === 1 && (arguments[0] ? PU(arguments[0]) ? (i = arguments[0], o = void 0) : VU(arguments[0]) && (o = arguments[0], i = void 0) : (i = void 0, o = void 0));
  var c = i || an(), d = gw(c, this).startOf("day"), h = fe.calendarFormat(this, d) || "sameElse", S = o && (Bl(o[h]) ? o[h].call(this, c) : o[h]);
  return this.format(
    S || this.localeData().calendar(h, this, an(c))
  );
}
function WU() {
  return new ev(this);
}
function GU(i, o) {
  var c = nl(i) ? i : an(i);
  return this.isValid() && c.isValid() ? (o = Ci(o) || "millisecond", o === "millisecond" ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(o).valueOf()) : !1;
}
function QU(i, o) {
  var c = nl(i) ? i : an(i);
  return this.isValid() && c.isValid() ? (o = Ci(o) || "millisecond", o === "millisecond" ? this.valueOf() < c.valueOf() : this.clone().endOf(o).valueOf() < c.valueOf()) : !1;
}
function qU(i, o, c, d) {
  var h = nl(i) ? i : an(i), S = nl(o) ? o : an(o);
  return this.isValid() && h.isValid() && S.isValid() ? (d = d || "()", (d[0] === "(" ? this.isAfter(h, c) : !this.isBefore(h, c)) && (d[1] === ")" ? this.isBefore(S, c) : !this.isAfter(S, c))) : !1;
}
function ZU(i, o) {
  var c = nl(i) ? i : an(i), d;
  return this.isValid() && c.isValid() ? (o = Ci(o) || "millisecond", o === "millisecond" ? this.valueOf() === c.valueOf() : (d = c.valueOf(), this.clone().startOf(o).valueOf() <= d && d <= this.clone().endOf(o).valueOf())) : !1;
}
function KU(i, o) {
  return this.isSame(i, o) || this.isAfter(i, o);
}
function XU(i, o) {
  return this.isSame(i, o) || this.isBefore(i, o);
}
function JU(i, o, c) {
  var d, h, S;
  if (!this.isValid())
    return NaN;
  if (d = gw(i, this), !d.isValid())
    return NaN;
  switch (h = (d.utcOffset() - this.utcOffset()) * 6e4, o = Ci(o), o) {
    case "year":
      S = cg(this, d) / 12;
      break;
    case "month":
      S = cg(this, d);
      break;
    case "quarter":
      S = cg(this, d) / 3;
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
  return c ? S : _i(S);
}
function cg(i, o) {
  if (i.date() < o.date())
    return -cg(o, i);
  var c = (o.year() - i.year()) * 12 + (o.month() - i.month()), d = i.clone().add(c, "months"), h, S;
  return o - d < 0 ? (h = i.clone().add(c - 1, "months"), S = (o - d) / (d - h)) : (h = i.clone().add(c + 1, "months"), S = (o - d) / (h - d)), -(c + S) || 0;
}
fe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
fe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function eA() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function tA(i) {
  if (!this.isValid())
    return null;
  var o = i !== !0, c = o ? this.clone().utc() : this;
  return c.year() < 0 || c.year() > 9999 ? ug(
    c,
    o ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Bl(Date.prototype.toISOString) ? o ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ug(c, "Z")) : ug(
    c,
    o ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function nA() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", o = "", c, d, h, S;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", o = "Z"), c = "[" + i + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", h = "-MM-DD[T]HH:mm:ss.SSS", S = o + '[")]', this.format(c + d + h + S);
}
function rA(i) {
  i || (i = this.isUtc() ? fe.defaultFormatUtc : fe.defaultFormat);
  var o = ug(this, i);
  return this.localeData().postformat(o);
}
function aA(i, o) {
  return this.isValid() && (nl(i) && i.isValid() || an(i).isValid()) ? rl({ to: this, from: i }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function iA(i) {
  return this.from(an(), i);
}
function lA(i, o) {
  return this.isValid() && (nl(i) && i.isValid() || an(i).isValid()) ? rl({ from: this, to: i }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function oA(i) {
  return this.to(an(), i);
}
function Yb(i) {
  var o;
  return i === void 0 ? this._locale._abbr : (o = Bo(i), o != null && (this._locale = o), this);
}
var Ib = xi(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function Vb() {
  return this._locale;
}
var gg = 1e3, hd = 60 * gg, Sg = 60 * hd, $b = (365 * 400 + 97) * 24 * Sg;
function vd(i, o) {
  return (i % o + o) % o;
}
function Bb(i, o, c) {
  return i < 100 && i >= 0 ? new Date(i + 400, o, c) - $b : new Date(i, o, c).valueOf();
}
function Wb(i, o, c) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, o, c) - $b : Date.UTC(i, o, c);
}
function uA(i) {
  var o, c;
  if (i = Ci(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? Wb : Bb, i) {
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
      o = this._d.valueOf(), o -= vd(
        o + (this._isUTC ? 0 : this.utcOffset() * hd),
        Sg
      );
      break;
    case "minute":
      o = this._d.valueOf(), o -= vd(o, hd);
      break;
    case "second":
      o = this._d.valueOf(), o -= vd(o, gg);
      break;
  }
  return this._d.setTime(o), fe.updateOffset(this, !0), this;
}
function sA(i) {
  var o, c;
  if (i = Ci(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? Wb : Bb, i) {
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
      o = this._d.valueOf(), o += Sg - vd(
        o + (this._isUTC ? 0 : this.utcOffset() * hd),
        Sg
      ) - 1;
      break;
    case "minute":
      o = this._d.valueOf(), o += hd - vd(o, hd) - 1;
      break;
    case "second":
      o = this._d.valueOf(), o += gg - vd(o, gg) - 1;
      break;
  }
  return this._d.setTime(o), fe.updateOffset(this, !0), this;
}
function cA() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function fA() {
  return Math.floor(this.valueOf() / 1e3);
}
function dA() {
  return new Date(this.valueOf());
}
function pA() {
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
function hA() {
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
function vA() {
  return this.isValid() ? this.toISOString() : null;
}
function mA() {
  return rw(this);
}
function yA() {
  return qu({}, ut(this));
}
function gA() {
  return ut(this).overflow;
}
function SA() {
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
be("N", Sw);
be("NN", Sw);
be("NNN", Sw);
be("NNNN", MA);
be("NNNNN", OA);
It(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, o, c, d) {
    var h = c._locale.erasParse(i, d, c._strict);
    h ? ut(c).era = h : ut(c).invalidEra = i;
  }
);
be("y", yd);
be("yy", yd);
be("yyy", yd);
be("yyyy", yd);
be("yo", NA);
It(["y", "yy", "yyy", "yyyy"], Gr);
It(["yo"], function(i, o, c, d) {
  var h;
  c._locale._eraYearOrdinalRegex && (h = i.match(c._locale._eraYearOrdinalRegex)), c._locale.eraYearOrdinalParse ? o[Gr] = c._locale.eraYearOrdinalParse(i, h) : o[Gr] = parseInt(i, 10);
});
function EA(i, o) {
  var c, d, h, S = this._eras || Bo("en")._eras;
  for (c = 0, d = S.length; c < d; ++c) {
    switch (typeof S[c].since) {
      case "string":
        h = fe(S[c].since).startOf("day"), S[c].since = h.valueOf();
        break;
    }
    switch (typeof S[c].until) {
      case "undefined":
        S[c].until = 1 / 0;
        break;
      case "string":
        h = fe(S[c].until).startOf("day").valueOf(), S[c].until = h.valueOf();
        break;
    }
  }
  return S;
}
function wA(i, o, c) {
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
function _A(i, o) {
  var c = i.since <= i.until ? 1 : -1;
  return o === void 0 ? fe(i.since).year() : fe(i.since).year() + (o - i.offset) * c;
}
function xA() {
  var i, o, c, d = this.localeData().eras();
  for (i = 0, o = d.length; i < o; ++i)
    if (c = this.clone().startOf("day").valueOf(), d[i].since <= c && c <= d[i].until || d[i].until <= c && c <= d[i].since)
      return d[i].name;
  return "";
}
function CA() {
  var i, o, c, d = this.localeData().eras();
  for (i = 0, o = d.length; i < o; ++i)
    if (c = this.clone().startOf("day").valueOf(), d[i].since <= c && c <= d[i].until || d[i].until <= c && c <= d[i].since)
      return d[i].narrow;
  return "";
}
function TA() {
  var i, o, c, d = this.localeData().eras();
  for (i = 0, o = d.length; i < o; ++i)
    if (c = this.clone().startOf("day").valueOf(), d[i].since <= c && c <= d[i].until || d[i].until <= c && c <= d[i].since)
      return d[i].abbr;
  return "";
}
function bA() {
  var i, o, c, d, h = this.localeData().eras();
  for (i = 0, o = h.length; i < o; ++i)
    if (c = h[i].since <= h[i].until ? 1 : -1, d = this.clone().startOf("day").valueOf(), h[i].since <= d && d <= h[i].until || h[i].until <= d && d <= h[i].since)
      return (this.year() - fe(h[i].since).year()) * c + h[i].offset;
  return this.year();
}
function RA(i) {
  return Dt(this, "_erasNameRegex") || Ew.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function DA(i) {
  return Dt(this, "_erasAbbrRegex") || Ew.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function kA(i) {
  return Dt(this, "_erasNarrowRegex") || Ew.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function Sw(i, o) {
  return o.erasAbbrRegex(i);
}
function MA(i, o) {
  return o.erasNameRegex(i);
}
function OA(i, o) {
  return o.erasNarrowRegex(i);
}
function NA(i, o) {
  return o._eraYearOrdinalRegex || yd;
}
function Ew() {
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
function Ug(i, o) {
  Ie(0, [i, i.length], 0, o);
}
Ug("gggg", "weekYear");
Ug("ggggg", "weekYear");
Ug("GGGG", "isoWeekYear");
Ug("GGGGG", "isoWeekYear");
Qr("weekYear", "gg");
Qr("isoWeekYear", "GG");
qr("weekYear", 1);
qr("isoWeekYear", 1);
be("G", kg);
be("g", kg);
be("GG", ln, ni);
be("gg", ln, ni);
be("GGGG", sw, uw);
be("gggg", sw, uw);
be("GGGGG", Dg, bg);
be("ggggg", Dg, bg);
nv(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, o, c, d) {
    o[d.substr(0, 2)] = dt(i);
  }
);
nv(["gg", "GG"], function(i, o, c, d) {
  o[d] = fe.parseTwoDigitYear(i);
});
function LA(i) {
  return Gb.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function UA(i) {
  return Gb.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function AA() {
  return Vo(this.year(), 1, 4);
}
function zA() {
  return Vo(this.isoWeekYear(), 1, 4);
}
function jA() {
  var i = this.localeData()._week;
  return Vo(this.year(), i.dow, i.doy);
}
function FA() {
  var i = this.localeData()._week;
  return Vo(this.weekYear(), i.dow, i.doy);
}
function Gb(i, o, c, d, h) {
  var S;
  return i == null ? Gh(this, d, h).year : (S = Vo(i, d, h), o > S && (o = S), HA.call(this, i, o, c, d, h));
}
function HA(i, o, c, d, h) {
  var S = bb(i, o, c, d, h), m = Wh(S.year, 0, S.dayOfYear);
  return this.year(m.getUTCFullYear()), this.month(m.getUTCMonth()), this.date(m.getUTCDate()), this;
}
Ie("Q", 0, "Qo", "quarter");
Qr("quarter", "Q");
qr("quarter", 7);
be("Q", mb);
It("Q", function(i, o) {
  o[Yo] = (dt(i) - 1) * 3;
});
function PA(i) {
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
It(["D", "DD"], Il);
It("Do", function(i, o) {
  o[Il] = dt(i.match(ln)[0]);
});
var Qb = md("Date", !0);
Ie("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Qr("dayOfYear", "DDD");
qr("dayOfYear", 4);
be("DDD", Rg);
be("DDDD", yb);
It(["DDD", "DDDD"], function(i, o, c) {
  c._dayOfYear = dt(i);
});
function YA(i) {
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
It(["m", "mm"], el);
var IA = md("Minutes", !1);
Ie("s", ["ss", 2], 0, "second");
Qr("second", "s");
qr("second", 15);
be("s", ln);
be("ss", ln, ni);
It(["s", "ss"], Io);
var VA = md("Seconds", !1);
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
be("S", Rg, mb);
be("SS", Rg, ni);
be("SSS", Rg, yb);
var Zu, qb;
for (Zu = "SSSS"; Zu.length <= 9; Zu += "S")
  be(Zu, yd);
function $A(i, o) {
  o[sc] = dt(("0." + i) * 1e3);
}
for (Zu = "S"; Zu.length <= 9; Zu += "S")
  It(Zu, $A);
qb = md("Milliseconds", !1);
Ie("z", 0, 0, "zoneAbbr");
Ie("zz", 0, 0, "zoneName");
function BA() {
  return this._isUTC ? "UTC" : "";
}
function WA() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var oe = ev.prototype;
oe.add = FU;
oe.calendar = BU;
oe.clone = WU;
oe.diff = JU;
oe.endOf = sA;
oe.format = rA;
oe.from = aA;
oe.fromNow = iA;
oe.to = lA;
oe.toNow = oA;
oe.get = QL;
oe.invalidAt = gA;
oe.isAfter = GU;
oe.isBefore = QU;
oe.isBetween = qU;
oe.isSame = ZU;
oe.isSameOrAfter = KU;
oe.isSameOrBefore = XU;
oe.isValid = mA;
oe.lang = Ib;
oe.locale = Yb;
oe.localeData = Vb;
oe.max = mU;
oe.min = vU;
oe.parsingFlags = yA;
oe.set = qL;
oe.startOf = uA;
oe.subtract = HU;
oe.toArray = pA;
oe.toObject = hA;
oe.toDate = dA;
oe.toISOString = tA;
oe.inspect = nA;
typeof Symbol < "u" && Symbol.for != null && (oe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
oe.toJSON = vA;
oe.toString = eA;
oe.unix = fA;
oe.valueOf = cA;
oe.creationData = SA;
oe.eraName = xA;
oe.eraNarrow = CA;
oe.eraAbbr = TA;
oe.eraYear = bA;
oe.year = Tb;
oe.isLeapYear = h2;
oe.weekYear = LA;
oe.isoWeekYear = UA;
oe.quarter = oe.quarters = PA;
oe.month = xb;
oe.daysInMonth = f2;
oe.week = oe.weeks = E2;
oe.isoWeek = oe.isoWeeks = w2;
oe.weeksInYear = jA;
oe.weeksInWeekYear = FA;
oe.isoWeeksInYear = AA;
oe.isoWeeksInISOWeekYear = zA;
oe.date = Qb;
oe.day = oe.days = U2;
oe.weekday = A2;
oe.isoWeekday = z2;
oe.dayOfYear = YA;
oe.hour = oe.hours = V2;
oe.minute = oe.minutes = IA;
oe.second = oe.seconds = VA;
oe.millisecond = oe.milliseconds = qb;
oe.utcOffset = TU;
oe.utc = RU;
oe.local = DU;
oe.parseZone = kU;
oe.hasAlignedHourOffset = MU;
oe.isDST = OU;
oe.isLocal = LU;
oe.isUtcOffset = UU;
oe.isUtc = jb;
oe.isUTC = jb;
oe.zoneAbbr = BA;
oe.zoneName = WA;
oe.dates = xi(
  "dates accessor is deprecated. Use date instead.",
  Qb
);
oe.months = xi(
  "months accessor is deprecated. Use month instead",
  xb
);
oe.years = xi(
  "years accessor is deprecated. Use year instead",
  Tb
);
oe.zone = xi(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  bU
);
oe.isDSTShifted = xi(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  NU
);
function GA(i) {
  return an(i * 1e3);
}
function QA() {
  return an.apply(null, arguments).parseZone();
}
function Zb(i) {
  return i;
}
var kt = iw.prototype;
kt.calendar = UL;
kt.longDateFormat = FL;
kt.invalidDate = PL;
kt.ordinal = VL;
kt.preparse = Zb;
kt.postformat = Zb;
kt.relativeTime = BL;
kt.pastFuture = WL;
kt.set = NL;
kt.eras = EA;
kt.erasParse = wA;
kt.erasConvertYear = _A;
kt.erasAbbrRegex = DA;
kt.erasNameRegex = RA;
kt.erasNarrowRegex = kA;
kt.months = o2;
kt.monthsShort = u2;
kt.monthsParse = c2;
kt.monthsRegex = p2;
kt.monthsShortRegex = d2;
kt.week = m2;
kt.firstDayOfYear = S2;
kt.firstDayOfWeek = g2;
kt.weekdays = k2;
kt.weekdaysMin = O2;
kt.weekdaysShort = M2;
kt.weekdaysParse = L2;
kt.weekdaysRegex = j2;
kt.weekdaysShortRegex = F2;
kt.weekdaysMinRegex = H2;
kt.isPM = Y2;
kt.meridiem = $2;
function Eg(i, o, c, d) {
  var h = Bo(), S = $l().set(d, o);
  return h[c](S, i);
}
function Kb(i, o, c) {
  if ($o(i) && (o = i, i = void 0), i = i || "", o != null)
    return Eg(i, o, c, "month");
  var d, h = [];
  for (d = 0; d < 12; d++)
    h[d] = Eg(i, d, c, "month");
  return h;
}
function ww(i, o, c, d) {
  typeof i == "boolean" ? ($o(o) && (c = o, o = void 0), o = o || "") : (o = i, c = o, i = !1, $o(o) && (c = o, o = void 0), o = o || "");
  var h = Bo(), S = i ? h._week.dow : 0, m, C = [];
  if (c != null)
    return Eg(o, (c + S) % 7, d, "day");
  for (m = 0; m < 7; m++)
    C[m] = Eg(o, (m + S) % 7, d, "day");
  return C;
}
function qA(i, o) {
  return Kb(i, o, "months");
}
function ZA(i, o) {
  return Kb(i, o, "monthsShort");
}
function KA(i, o, c) {
  return ww(i, o, c, "weekdays");
}
function XA(i, o, c) {
  return ww(i, o, c, "weekdaysShort");
}
function JA(i, o, c) {
  return ww(i, o, c, "weekdaysMin");
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
  ordinal: function(i) {
    var o = i % 10, c = dt(i % 100 / 10) === 1 ? "th" : o === 1 ? "st" : o === 2 ? "nd" : o === 3 ? "rd" : "th";
    return i + c;
  }
});
fe.lang = xi(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ku
);
fe.langData = xi(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Bo
);
var Ho = Math.abs;
function ez() {
  var i = this._data;
  return this._milliseconds = Ho(this._milliseconds), this._days = Ho(this._days), this._months = Ho(this._months), i.milliseconds = Ho(i.milliseconds), i.seconds = Ho(i.seconds), i.minutes = Ho(i.minutes), i.hours = Ho(i.hours), i.months = Ho(i.months), i.years = Ho(i.years), this;
}
function Xb(i, o, c, d) {
  var h = rl(o, c);
  return i._milliseconds += d * h._milliseconds, i._days += d * h._days, i._months += d * h._months, i._bubble();
}
function tz(i, o) {
  return Xb(this, i, o, 1);
}
function nz(i, o) {
  return Xb(this, i, o, -1);
}
function xT(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function rz() {
  var i = this._milliseconds, o = this._days, c = this._months, d = this._data, h, S, m, C, T;
  return i >= 0 && o >= 0 && c >= 0 || i <= 0 && o <= 0 && c <= 0 || (i += xT(HE(c) + o) * 864e5, o = 0, c = 0), d.milliseconds = i % 1e3, h = _i(i / 1e3), d.seconds = h % 60, S = _i(h / 60), d.minutes = S % 60, m = _i(S / 60), d.hours = m % 24, o += _i(m / 24), T = _i(Jb(o)), c += T, o -= xT(HE(T)), C = _i(c / 12), c %= 12, d.days = o, d.months = c, d.years = C, this;
}
function Jb(i) {
  return i * 4800 / 146097;
}
function HE(i) {
  return i * 146097 / 4800;
}
function az(i) {
  if (!this.isValid())
    return NaN;
  var o, c, d = this._milliseconds;
  if (i = Ci(i), i === "month" || i === "quarter" || i === "year")
    switch (o = this._days + d / 864e5, c = this._months + Jb(o), i) {
      case "month":
        return c;
      case "quarter":
        return c / 3;
      case "year":
        return c / 12;
    }
  else
    switch (o = this._days + Math.round(HE(this._months)), i) {
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
function iz() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + dt(this._months / 12) * 31536e6 : NaN;
}
function Wo(i) {
  return function() {
    return this.as(i);
  };
}
var lz = Wo("ms"), oz = Wo("s"), uz = Wo("m"), sz = Wo("h"), cz = Wo("d"), fz = Wo("w"), dz = Wo("M"), pz = Wo("Q"), hz = Wo("y");
function vz() {
  return rl(this);
}
function mz(i) {
  return i = Ci(i), this.isValid() ? this[i + "s"]() : NaN;
}
function hc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var yz = hc("milliseconds"), gz = hc("seconds"), Sz = hc("minutes"), Ez = hc("hours"), wz = hc("days"), _z = hc("months"), xz = hc("years");
function Cz() {
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
function Tz(i, o, c, d, h) {
  return h.relativeTime(o || 1, !!c, i, d);
}
function bz(i, o, c, d) {
  var h = rl(i).abs(), S = Po(h.as("s")), m = Po(h.as("m")), C = Po(h.as("h")), T = Po(h.as("d")), R = Po(h.as("M")), k = Po(h.as("w")), O = Po(h.as("y")), j = S <= c.ss && ["s", S] || S < c.s && ["ss", S] || m <= 1 && ["m"] || m < c.m && ["mm", m] || C <= 1 && ["h"] || C < c.h && ["hh", C] || T <= 1 && ["d"] || T < c.d && ["dd", T];
  return c.w != null && (j = j || k <= 1 && ["w"] || k < c.w && ["ww", k]), j = j || R <= 1 && ["M"] || R < c.M && ["MM", R] || O <= 1 && ["y"] || ["yy", O], j[2] = o, j[3] = +i > 0, j[4] = d, Tz.apply(null, j);
}
function Rz(i) {
  return i === void 0 ? Po : typeof i == "function" ? (Po = i, !0) : !1;
}
function Dz(i, o) {
  return dd[i] === void 0 ? !1 : o === void 0 ? dd[i] : (dd[i] = o, i === "s" && (dd.ss = o - 1), !0);
}
function kz(i, o) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var c = !1, d = dd, h, S;
  return typeof i == "object" && (o = i, i = !1), typeof i == "boolean" && (c = i), typeof o == "object" && (d = Object.assign({}, dd, o), o.s != null && o.ss == null && (d.ss = o.s - 1)), h = this.localeData(), S = bz(this, !c, d, h), c && (S = h.pastFuture(+this, S)), h.postformat(S);
}
var EE = Math.abs;
function cd(i) {
  return (i > 0) - (i < 0) || +i;
}
function Ag() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = EE(this._milliseconds) / 1e3, o = EE(this._days), c = EE(this._months), d, h, S, m, C = this.asSeconds(), T, R, k, O;
  return C ? (d = _i(i / 60), h = _i(d / 60), i %= 60, d %= 60, S = _i(c / 12), c %= 12, m = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", T = C < 0 ? "-" : "", R = cd(this._months) !== cd(C) ? "-" : "", k = cd(this._days) !== cd(C) ? "-" : "", O = cd(this._milliseconds) !== cd(C) ? "-" : "", T + "P" + (S ? R + S + "Y" : "") + (c ? R + c + "M" : "") + (o ? k + o + "D" : "") + (h || d || i ? "T" : "") + (h ? O + h + "H" : "") + (d ? O + d + "M" : "") + (i ? O + m + "S" : "")) : "P0D";
}
var xt = Lg.prototype;
xt.isValid = wU;
xt.abs = ez;
xt.add = tz;
xt.subtract = nz;
xt.as = az;
xt.asMilliseconds = lz;
xt.asSeconds = oz;
xt.asMinutes = uz;
xt.asHours = sz;
xt.asDays = cz;
xt.asWeeks = fz;
xt.asMonths = dz;
xt.asQuarters = pz;
xt.asYears = hz;
xt.valueOf = iz;
xt._bubble = rz;
xt.clone = vz;
xt.get = mz;
xt.milliseconds = yz;
xt.seconds = gz;
xt.minutes = Sz;
xt.hours = Ez;
xt.days = wz;
xt.weeks = Cz;
xt.months = _z;
xt.years = xz;
xt.humanize = kz;
xt.toISOString = Ag;
xt.toString = Ag;
xt.toJSON = Ag;
xt.locale = Yb;
xt.localeData = Vb;
xt.toIsoString = xi(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ag
);
xt.lang = Ib;
Ie("X", 0, 0, "unix");
Ie("x", 0, 0, "valueOf");
be("x", kg);
be("X", KL);
It("X", function(i, o, c) {
  c._d = new Date(parseFloat(i) * 1e3);
});
It("x", function(i, o, c) {
  c._d = new Date(dt(i));
});
//! moment.js
fe.version = "2.29.4";
ML(an);
fe.fn = oe;
fe.min = yU;
fe.max = gU;
fe.now = SU;
fe.utc = $l;
fe.unix = GA;
fe.months = qA;
fe.isDate = Jh;
fe.locale = Ku;
fe.invalid = Cg;
fe.duration = rl;
fe.isMoment = nl;
fe.weekdays = KA;
fe.parseZone = QA;
fe.localeData = Bo;
fe.isDuration = sg;
fe.monthsShort = ZA;
fe.weekdaysMin = JA;
fe.defineLocale = pw;
fe.updateLocale = Q2;
fe.locales = q2;
fe.weekdaysShort = XA;
fe.normalizeUnits = Ci;
fe.relativeTimeRounding = Rz;
fe.relativeTimeThreshold = Dz;
fe.calendarFormat = $U;
fe.prototype = oe;
fe.HTML5_FMT = {
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
function Mz(i, o = 300) {
  let c;
  return function(...d) {
    clearTimeout(c), c = setTimeout(() => {
      i.apply(this, d);
    }, o);
  };
}
const wE = (i, o, c, d = !1) => {
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
}, R3 = ({
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
  }), k = tr(null), O = tr(null), j = fc(() => d ? [...h].filter((z) => (d.forEach((J) => delete z[J]), z)) : h, [d, h]);
  console.log(T), xg(() => {
    var J;
    const z = (J = C == null ? void 0 : C.current) == null ? void 0 : J.parentNode;
    return window == null || window.addEventListener(
      "resize",
      Mz(
        () => wE(z, C, R, c !== void 0)
      )
    ), (!o || !c) && wE(z, C, R, c !== void 0), () => z == null ? void 0 : z.removeEventListener(
      "resize",
      () => wE(z, C, () => {
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
            const J = O.current.style, ve = z.clientX, Se = C.current.getBoundingClientRect().left, K = C.current.getBoundingClientRect().top;
            if (J.opacity = "1", m) {
              const ee = T.width / (h.length * 4), Me = Array.from({
                length: h.length
              }).map((it, Mt) => Math.abs(
                ve - Se - ee * Mt - T.width / h.length * Mt
              )), He = Me.indexOf(
                Math.min(...Me)
              ), Qe = T.width / h.length * He + ee * He;
              J.transform = `translate(${Qe}px, 0px)`;
            } else
              J.transform = `translate(${z.clientX - Se}px, 0px)`, J.transition = "none";
            if (k.current.innerHTML === "") {
              k.current.style.opacity = "0";
              return;
            }
            const re = z.clientX - Se, se = k.current.clientWidth;
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
var Xu = kr;
const Ih = /^[a-z0-9]+(-[a-z0-9]+)*$/, zg = (i, o, c, d = "") => {
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
    return o && !fg(R) ? null : R;
  }
  const S = h[0], m = S.split("-");
  if (m.length > 1) {
    const C = {
      provider: d,
      prefix: m.shift(),
      name: m.join("-")
    };
    return o && !fg(C) ? null : C;
  }
  if (c && d === "") {
    const C = {
      provider: d,
      prefix: "",
      name: S
    };
    return o && !fg(C, c) ? null : C;
  }
  return null;
}, fg = (i, o) => i ? !!((i.provider === "" || i.provider.match(Ih)) && (o && i.prefix === "" || i.prefix.match(Ih)) && i.name.match(Ih)) : !1, eR = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), wg = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), _w = Object.freeze({
  ...eR,
  ...wg
}), PE = Object.freeze({
  ..._w,
  body: "",
  hidden: !1
});
function Oz(i, o) {
  const c = {};
  !i.hFlip != !o.hFlip && (c.hFlip = !0), !i.vFlip != !o.vFlip && (c.vFlip = !0);
  const d = ((i.rotate || 0) + (o.rotate || 0)) % 4;
  return d && (c.rotate = d), c;
}
function CT(i, o) {
  const c = Oz(i, o);
  for (const d in PE)
    d in wg ? d in i && !(d in c) && (c[d] = wg[d]) : d in o ? c[d] = o[d] : d in i && (c[d] = i[d]);
  return c;
}
function Nz(i, o) {
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
function Lz(i, o, c) {
  const d = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null);
  let S = {};
  function m(C) {
    S = CT(
      d[C] || h[C],
      S
    );
  }
  return m(o), c.forEach(m), CT(i, S);
}
function tR(i, o) {
  const c = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return c;
  i.not_found instanceof Array && i.not_found.forEach((h) => {
    o(h, null), c.push(h);
  });
  const d = Nz(i);
  for (const h in d) {
    const S = d[h];
    S && (o(h, Lz(i, h, S)), c.push(h));
  }
  return c;
}
const Uz = {
  provider: "",
  aliases: {},
  not_found: {},
  ...eR
};
function _E(i, o) {
  for (const c in o)
    if (c in i && typeof i[c] != typeof o[c])
      return !1;
  return !0;
}
function nR(i) {
  if (typeof i != "object" || i === null)
    return null;
  const o = i;
  if (typeof o.prefix != "string" || !i.icons || typeof i.icons != "object" || !_E(i, Uz))
    return null;
  const c = o.icons;
  for (const h in c) {
    const S = c[h];
    if (!h.match(Ih) || typeof S.body != "string" || !_E(
      S,
      PE
    ))
      return null;
  }
  const d = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const h in d) {
    const S = d[h], m = S.parent;
    if (!h.match(Ih) || typeof m != "string" || !c[m] && !d[m] || !_E(
      S,
      PE
    ))
      return null;
  }
  return o;
}
const TT = /* @__PURE__ */ Object.create(null);
function Az(i, o) {
  return {
    provider: i,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function dc(i, o) {
  const c = TT[i] || (TT[i] = /* @__PURE__ */ Object.create(null));
  return c[o] || (c[o] = Az(i, o));
}
function xw(i, o) {
  return nR(o) ? tR(o, (c, d) => {
    d ? i.icons[c] = d : i.missing.add(c);
  }) : [];
}
function zz(i, o, c) {
  try {
    if (typeof c.body == "string")
      return i.icons[o] = { ...c }, !0;
  } catch {
  }
  return !1;
}
let qh = !1;
function rR(i) {
  return typeof i == "boolean" && (qh = i), qh;
}
function jz(i) {
  const o = typeof i == "string" ? zg(i, !0, qh) : i;
  if (o) {
    const c = dc(o.provider, o.prefix), d = o.name;
    return c.icons[d] || (c.missing.has(d) ? null : void 0);
  }
}
function Fz(i, o) {
  const c = zg(i, !0, qh);
  if (!c)
    return !1;
  const d = dc(c.provider, c.prefix);
  return zz(d, c.name, o);
}
function Hz(i, o) {
  if (typeof i != "object")
    return !1;
  if (typeof o != "string" && (o = i.provider || ""), qh && !o && !i.prefix) {
    let h = !1;
    return nR(i) && (i.prefix = "", tR(i, (S, m) => {
      m && Fz(S, m) && (h = !0);
    })), h;
  }
  const c = i.prefix;
  if (!fg({
    provider: o,
    prefix: c,
    name: "a"
  }))
    return !1;
  const d = dc(o, c);
  return !!xw(d, i);
}
const aR = Object.freeze({
  width: null,
  height: null
}), iR = Object.freeze({
  // Dimensions
  ...aR,
  // Transformations
  ...wg
}), Pz = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Yz = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function bT(i, o, c) {
  if (o === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * o * c) / c;
  if (typeof i != "string")
    return i;
  const d = i.split(Pz);
  if (d === null || !d.length)
    return i;
  const h = [];
  let S = d.shift(), m = Yz.test(S);
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
const Iz = (i) => i === "unset" || i === "undefined" || i === "none";
function Vz(i, o) {
  const c = {
    ..._w,
    ...i
  }, d = {
    ...iR,
    ...o
  }, h = {
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height
  };
  let S = c.body;
  [c, d].forEach((z) => {
    const J = [], ve = z.hFlip, Se = z.vFlip;
    let K = z.rotate;
    ve ? Se ? K += 2 : (J.push(
      "translate(" + (h.width + h.left).toString() + " " + (0 - h.top).toString() + ")"
    ), J.push("scale(-1 1)"), h.top = h.left = 0) : Se && (J.push(
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
  m === null ? (O = C === null ? "1em" : C === "auto" ? R : C, k = bT(O, T / R)) : (k = m === "auto" ? T : m, O = C === null ? bT(k, R / T) : C === "auto" ? R : C);
  const j = {}, G = (z, J) => {
    Iz(J) || (j[z] = J.toString());
  };
  return G("width", k), G("height", O), j.viewBox = h.left.toString() + " " + h.top.toString() + " " + T.toString() + " " + R.toString(), {
    attributes: j,
    body: S
  };
}
const $z = /\sid="(\S+)"/g, Bz = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Wz = 0;
function Gz(i, o = Bz) {
  const c = [];
  let d;
  for (; d = $z.exec(i); )
    c.push(d[1]);
  if (!c.length)
    return i;
  const h = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((S) => {
    const m = typeof o == "function" ? o(S) : o + (Wz++).toString(), C = S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"),
      "$1" + m + h + "$3"
    );
  }), i = i.replace(new RegExp(h, "g"), ""), i;
}
const YE = /* @__PURE__ */ Object.create(null);
function Qz(i, o) {
  YE[i] = o;
}
function IE(i) {
  return YE[i] || YE[""];
}
function Cw(i) {
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
const Tw = /* @__PURE__ */ Object.create(null), Fh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], dg = [];
for (; Fh.length > 0; )
  Fh.length === 1 || Math.random() > 0.5 ? dg.push(Fh.shift()) : dg.push(Fh.pop());
Tw[""] = Cw({
  resources: ["https://api.iconify.design"].concat(dg)
});
function qz(i, o) {
  const c = Cw(o);
  return c === null ? !1 : (Tw[i] = c, !0);
}
function bw(i) {
  return Tw[i];
}
const Zz = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let RT = Zz();
function Kz(i, o) {
  const c = bw(i);
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
function Xz(i) {
  return i === 404;
}
const Jz = (i, o, c) => {
  const d = [], h = Kz(i, o), S = "icons";
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
function ej(i) {
  if (typeof i == "string") {
    const o = bw(i);
    if (o)
      return o.path;
  }
  return "/";
}
const tj = (i, o, c) => {
  if (!RT) {
    c("abort", 424);
    return;
  }
  let d = ej(o.provider);
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
  RT(i + d).then((S) => {
    const m = S.status;
    if (m !== 200) {
      setTimeout(() => {
        c(Xz(m) ? "abort" : "next", m);
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
}, nj = {
  prepare: Jz,
  send: tj
};
function rj(i) {
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
    const S = h.provider, m = h.prefix, C = h.name, T = c[S] || (c[S] = /* @__PURE__ */ Object.create(null)), R = T[m] || (T[m] = dc(S, m));
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
function lR(i, o) {
  i.forEach((c) => {
    const d = c.loaderCallbacks;
    d && (c.loaderCallbacks = d.filter((h) => h.id !== o));
  });
}
function aj(i) {
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
      }), m.pending.length !== C && (c || lR([i], S.id), S.callback(
        m.loaded.slice(0),
        m.missing.slice(0),
        m.pending.slice(0),
        S.abort
      ));
    });
  }));
}
let ij = 0;
function lj(i, o, c) {
  const d = ij++, h = lR.bind(null, c, d);
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
function oj(i, o = !0, c = !1) {
  const d = [];
  return i.forEach((h) => {
    const S = typeof h == "string" ? zg(h, o, c) : h;
    S && d.push(S);
  }), d;
}
var uj = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function sj(i, o, c, d) {
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
  function ve(W, ee) {
    ee && (G = []), typeof W == "function" && G.push(W);
  }
  function Se() {
    return {
      startTime: C,
      payload: o,
      status: T,
      queriesSent: R,
      queriesPending: j.length,
      subscribe: ve,
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
  return setTimeout(ce), Se;
}
function oR(i) {
  const o = {
    ...uj,
    ...i
  };
  let c = [];
  function d() {
    c = c.filter((C) => C().status === "pending");
  }
  function h(C, T, R) {
    const k = sj(
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
function DT() {
}
const xE = /* @__PURE__ */ Object.create(null);
function cj(i) {
  if (!xE[i]) {
    const o = bw(i);
    if (!o)
      return;
    const c = oR(o), d = {
      config: o,
      redundancy: c
    };
    xE[i] = d;
  }
  return xE[i];
}
function fj(i, o, c) {
  let d, h;
  if (typeof i == "string") {
    const S = IE(i);
    if (!S)
      return c(void 0, 424), DT;
    h = S.send;
    const m = cj(i);
    m && (d = m.redundancy);
  } else {
    const S = Cw(i);
    if (S) {
      d = oR(S);
      const m = i.resources ? i.resources[0] : "", C = IE(m);
      C && (h = C.send);
    }
  }
  return !d || !h ? (c(void 0, 424), DT) : d.query(o, h, c)().abort;
}
const kT = "iconify2", Zh = "iconify", uR = Zh + "-count", MT = Zh + "-version", sR = 36e5, dj = 168;
function VE(i, o) {
  try {
    return i.getItem(o);
  } catch {
  }
}
function Rw(i, o, c) {
  try {
    return i.setItem(o, c), !0;
  } catch {
  }
}
function OT(i, o) {
  try {
    i.removeItem(o);
  } catch {
  }
}
function $E(i, o) {
  return Rw(i, uR, o.toString());
}
function BE(i) {
  return parseInt(VE(i, uR)) || 0;
}
const jg = {
  local: !0,
  session: !0
}, cR = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Dw = !1;
function pj(i) {
  Dw = i;
}
let ag = typeof window > "u" ? {} : window;
function fR(i) {
  const o = i + "Storage";
  try {
    if (ag && ag[o] && typeof ag[o].length == "number")
      return ag[o];
  } catch {
  }
  jg[i] = !1;
}
function dR(i, o) {
  const c = fR(i);
  if (!c)
    return;
  const d = VE(c, MT);
  if (d !== kT) {
    if (d) {
      const C = BE(c);
      for (let T = 0; T < C; T++)
        OT(c, Zh + T.toString());
    }
    Rw(c, MT, kT), $E(c, 0);
    return;
  }
  const h = Math.floor(Date.now() / sR) - dj, S = (C) => {
    const T = Zh + C.toString(), R = VE(c, T);
    if (typeof R == "string") {
      try {
        const k = JSON.parse(R);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > h && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, C))
          return !0;
      } catch {
      }
      OT(c, T);
    }
  };
  let m = BE(c);
  for (let C = m - 1; C >= 0; C--)
    S(C) || (C === m - 1 ? (m--, $E(c, m)) : cR[i].add(C));
}
function pR() {
  if (!Dw) {
    pj(!0);
    for (const i in jg)
      dR(i, (o) => {
        const c = o.data, d = o.provider, h = c.prefix, S = dc(
          d,
          h
        );
        if (!xw(S, c).length)
          return !1;
        const m = c.lastModified || -1;
        return S.lastModifiedCached = S.lastModifiedCached ? Math.min(S.lastModifiedCached, m) : m, !0;
      });
  }
}
function hj(i, o) {
  const c = i.lastModifiedCached;
  if (
    // Matches or newer
    c && c >= o
  )
    return c === o;
  if (i.lastModifiedCached = o, c)
    for (const d in jg)
      dR(d, (h) => {
        const S = h.data;
        return h.provider !== i.provider || S.prefix !== i.prefix || S.lastModified === o;
      });
  return !0;
}
function vj(i, o) {
  Dw || pR();
  function c(d) {
    let h;
    if (!jg[d] || !(h = fR(d)))
      return;
    const S = cR[d];
    let m;
    if (S.size)
      S.delete(m = Array.from(S).shift());
    else if (m = BE(h), !$E(h, m + 1))
      return;
    const C = {
      cached: Math.floor(Date.now() / sR),
      provider: i.provider,
      data: o
    };
    return Rw(
      h,
      Zh + m.toString(),
      JSON.stringify(C)
    );
  }
  o.lastModified && !hj(i, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), c("local") || c("session"));
}
function NT() {
}
function mj(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, aj(i);
  }));
}
function yj(i, o) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(o).sort() : i.iconsToLoad = o, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: d } = i, h = i.iconsToLoad;
    delete i.iconsToLoad;
    let S;
    if (!h || !(S = IE(c)))
      return;
    S.prepare(c, d, h).forEach((C) => {
      fj(c, C, (T) => {
        if (typeof T != "object")
          C.icons.forEach((R) => {
            i.missing.add(R);
          });
        else
          try {
            const R = xw(
              i,
              T
            );
            if (!R.length)
              return;
            const k = i.pendingIcons;
            k && R.forEach((O) => {
              k.delete(O);
            }), vj(i, T);
          } catch (R) {
            console.error(R);
          }
        mj(i);
      });
    });
  }));
}
const gj = (i, o) => {
  const c = oj(i, !0, rR()), d = rj(c);
  if (!d.pending.length) {
    let T = !0;
    return o && setTimeout(() => {
      T && o(
        d.loaded,
        d.missing,
        d.pending,
        NT
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
    m = R, C = k, S.push(dc(R, k));
    const O = h[R] || (h[R] = /* @__PURE__ */ Object.create(null));
    O[k] || (O[k] = []);
  }), d.pending.forEach((T) => {
    const { provider: R, prefix: k, name: O } = T, j = dc(R, k), G = j.pendingIcons || (j.pendingIcons = /* @__PURE__ */ new Set());
    G.has(O) || (G.add(O), h[R][k].push(O));
  }), S.forEach((T) => {
    const { provider: R, prefix: k } = T;
    h[R][k].length && yj(T, h[R][k]);
  }), o ? lj(o, d, S) : NT;
};
function Sj(i, o) {
  const c = {
    ...i
  };
  for (const d in o) {
    const h = o[d], S = typeof h;
    d in aR ? (h === null || h && (S === "string" || S === "number")) && (c[d] = h) : S === typeof c[d] && (c[d] = d === "rotate" ? h % 4 : h);
  }
  return c;
}
const Ej = /[\s,]+/;
function wj(i, o) {
  o.split(Ej).forEach((c) => {
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
function _j(i, o = 0) {
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
function xj(i, o) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const d in o)
    c += " " + d + '="' + o[d] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function Cj(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Tj(i) {
  return "data:image/svg+xml," + Cj(i);
}
function bj(i) {
  return 'url("' + Tj(i) + '")';
}
let Vh;
function Rj() {
  try {
    Vh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Vh = null;
  }
}
function Dj(i) {
  return Vh === void 0 && Rj(), Vh ? Vh.createHTML(i) : i;
}
const hR = {
  ...iR,
  inline: !1
}, kj = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Mj = {
  display: "inline-block"
}, WE = {
  backgroundColor: "currentColor"
}, vR = {
  backgroundColor: "transparent"
}, LT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, UT = {
  WebkitMask: WE,
  mask: WE,
  background: vR
};
for (const i in UT) {
  const o = UT[i];
  for (const c in LT)
    o[i + c] = LT[c];
}
const Oj = {
  ...hR,
  inline: !0
};
function AT(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const Nj = (i, o, c, d) => {
  const h = c ? Oj : hR, S = Sj(h, o), m = o.mode || "svg", C = {}, T = o.style || {}, R = {
    ...m === "svg" ? kj : {},
    ref: d
  };
  for (let Se in o) {
    const K = o[Se];
    if (K !== void 0)
      switch (Se) {
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
          S[Se] = K === !0 || K === "true" || K === 1;
          break;
        case "flip":
          typeof K == "string" && wj(S, K);
          break;
        case "color":
          C.color = K;
          break;
        case "rotate":
          typeof K == "string" ? S[Se] = _j(K) : typeof K == "number" && (S[Se] = K);
          break;
        case "ariaHidden":
        case "aria-hidden":
          K !== !0 && K !== "true" && delete R["aria-hidden"];
          break;
        default:
          h[Se] === void 0 && (R[Se] = K);
      }
  }
  const k = Vz(i, S), O = k.attributes;
  if (S.inline && (C.verticalAlign = "-0.125em"), m === "svg") {
    R.style = {
      ...C,
      ...T
    }, Object.assign(R, O);
    let Se = 0, K = o.id;
    return typeof K == "string" && (K = K.replace(/-/g, "_")), R.dangerouslySetInnerHTML = {
      __html: Dj(Gz(k.body, K ? () => K + "ID" + Se++ : "iconifyReact"))
    }, Xu.createElement("svg", R);
  }
  const { body: j, width: G, height: z } = i, J = m === "mask" || (m === "bg" ? !1 : j.indexOf("currentColor") !== -1), ve = xj(j, {
    ...O,
    width: G + "",
    height: z + ""
  });
  return R.style = {
    ...C,
    "--svg": bj(ve),
    width: AT(O.width),
    height: AT(O.height),
    ...Mj,
    ...J ? WE : vR,
    ...T
  }, Xu.createElement("span", R);
};
rR(!0);
Qz("", nj);
if (typeof document < "u" && typeof window < "u") {
  pR();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const o = i.IconifyPreload, c = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((d) => {
      try {
        // Check if item is an object and not null/array
        (typeof d != "object" || d === null || d instanceof Array || // Check for 'icons' and 'prefix'
        typeof d.icons != "object" || typeof d.prefix != "string" || // Add icon set
        !Hz(d)) && console.error(c);
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
          qz(c, h) || console.error(d);
        } catch {
          console.error(d);
        }
      }
  }
}
let mR = class extends Xu.Component {
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
    if (typeof d != "string" || (h = zg(d, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const S = jz(h);
    if (!S) {
      (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), S !== null && (this._loading = {
        name: d,
        abort: gj([h], this._checkIcon.bind(this, !1))
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
      return o.children ? o.children : Xu.createElement("span", {});
    let d = o;
    return c.classes && (d = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + c.classes.join(" ")
    }), Nj({
      ..._w,
      ...c.data
    }, d, o._inline, o._ref);
  }
};
const Lj = Xu.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !1
  };
  return Xu.createElement(mR, d);
});
Xu.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !0
  };
  return Xu.createElement(mR, d);
});
var Rr = Lj;
const Uj = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
  const o = Math.random() * 16 | 0;
  return (i === "x" ? o : o & 3 | 8).toString(16);
}), Aj = ({
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
  id: O = Uj(),
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
] }), k3 = ({
  defaultShow: i = !1,
  ...o
}) => {
  const [c, d] = Dr(i);
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsx(
    Aj,
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
}, zj = (i) => {
  console.log(i);
}, jj = (i) => {
  console.log(i);
}, Fj = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], Hj = ({
  defaultSelected: i,
  startDateRef: o,
  endDateRef: c,
  onClose: d
}) => {
  const [h, S] = Dr(
    (i == null ? void 0 : i.end) === void 0 ? fe() : i.end
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
            disabled: h.clone().add(1, "month").isSameOrAfter(fe()),
            children: /* @__PURE__ */ I.jsx(Rr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ I.jsx("ul", { className: "date-weekdays", children: Fj.map((z) => /* @__PURE__ */ I.jsx("li", { children: /* @__PURE__ */ I.jsx("span", { children: z }) }, z)) })
    ] }),
    /* @__PURE__ */ I.jsx("ul", { className: "days-container", children: O.map((z, J) => {
      var se, ce, W;
      let ve = "";
      const Se = (se = m.start) != null && se.startOf("day").isSame(z) ? "selected start" : (W = (ce = m.end) == null ? void 0 : ce.startOf("day")) != null && W.isSame(z) ? "selected end" : "", K = z.format("MM") !== T.format("MM") ? "not-current" : "", re = z.isBetween(
        m.start,
        m.end
      ) ? "between" : "";
      return ve += K + Se + re, /* @__PURE__ */ I.jsx("li", { children: /* @__PURE__ */ I.jsx(
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
          className: ve,
          disabled: z.isAfter(fe()),
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
}, M3 = ({
  defaultSelected: i,
  onSearch: o,
  children: c
}) => {
  const [d, h] = Dr(!1), S = tr(null), m = tr(null), C = {
    ref: S,
    type: "date",
    name: "start",
    onFocus: zj,
    onClick: () => {
      h((R) => !R);
    },
    autoComplete: "off",
    defaultValue: i ? i.start.format("YYYY-MM-DD") : ""
  }, T = {
    ref: m,
    type: "date",
    name: "end",
    onFocus: jj,
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
        const k = new FormData(R.target), O = Object.fromEntries(k.entries()), j = {
          start: fe(O.start, "YYYY-MM-DD"),
          end: fe(O.end, "YYYY-MM-DD")
        };
        o == null || o(j);
      },
      children: [
        /* @__PURE__ */ I.jsxs("div", { className: "group rounded-box", children: [
          c({ startDateProps: C, endDateProps: T }),
          /* @__PURE__ */ I.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        d && /* @__PURE__ */ I.jsx(
          Hj,
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
}, Pj = (i, o, c, d, h, S) => {
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
}, Yj = (i) => typeof i == "object" ? /* @__PURE__ */ I.jsx("span", { children: Object.values(i)[0] }) : /* @__PURE__ */ I.jsx("span", { children: i }), kw = ({
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
  keyExtractor: O = Yj
}) => {
  const [j, G] = Dr(!1), [z, J] = Dr(
    i.findIndex(
      (ce) => c ? ce[c] === (o == null ? void 0 : o[c]) : ce === o
    )
  ), [ve, Se] = Dr(z), K = tr(null), re = tr(""), se = tr([]);
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
              Se(ce), setTimeout(() => {
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
                  Se(W), ee.target.focus();
                },
                onMouseLeave: () => {
                  Se(z);
                },
                onKeyDown: (ee) => Pj(
                  ee,
                  ve,
                  Se,
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
}, Ij = [
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
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
fe.defineLocale("pt-br", {
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
fe.locale("pt-br");
const Vj = {
  206: "Almoço",
  205: "Banheiro"
}, $j = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Bj = ({
  data: i,
  lastSevenDays: o
}) => /* @__PURE__ */ I.jsx("div", { className: "detailed-workday--period", children: o.map((c, d) => {
  const h = fe(c).format("DD [de] MMMM"), S = i.find(
    ({ date: T }) => fe(T).format("YYYY/MM/DD") === c.format("YYYY/MM/DD")
  );
  if (S === void 0)
    return /* @__PURE__ */ I.jsx("div", { className: "day", children: /* @__PURE__ */ I.jsx("span", { children: h }) }, d);
  const m = fe.utc(S.start).format("HH[h]mm"), C = fe.utc(S.finish).format("HH[h]mm");
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
      const k = fe.utc(T.start).format("HH[h]mm"), O = fe.utc(T.finish).format("HH[h]mm");
      return /* @__PURE__ */ I.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ I.jsx("span", { className: "break-item--label", children: Vj[String(T.type)] }),
        /* @__PURE__ */ I.jsxs("span", { className: "break-item--content", children: [
          k,
          " - ",
          O
        ] })
      ] }, R);
    }) })
  ] }, d);
}) }), O3 = () => {
  const i = Array.from({ length: 7 }).map(
    (o, c) => fe().clone().subtract(7 - c, "days")
  );
  return /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ I.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ I.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ I.jsx(kw, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ I.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ I.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ I.jsx("div", { className: "weekdays", children: i.map((o) => {
          const c = fe(o).day();
          return /* @__PURE__ */ I.jsx("span", { className: "", children: $j[c] });
        }) })
      ] }),
      Ij.map((o, c) => /* @__PURE__ */ I.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ I.jsx("span", { children: o.agent.firstName }),
        /* @__PURE__ */ I.jsx(
          Bj,
          {
            data: o.period,
            lastSevenDays: i
          },
          c
        )
      ] }, c))
    ] })
  ] });
}, N3 = ({ logo: i, items: o }) => /* @__PURE__ */ I.jsxs("header", { className: "header", children: [
  i,
  o
] }), Wj = (i, o) => {
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
}, zT = (i, o, c, d, h, S = 0, m) => {
  i.current === null || o.current === null || (d.route === c && i.current.classList.add("active"), i.current.classList.contains("active") && d.route !== c && i.current.classList.remove("active"), m || (o.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${d.label}</span>
      </div>
    `, o.current.style.opacity = "1", o.current.style.top = `calc(48px * ${h + S})`), i.current.style.top = `calc(48px * ${h + S})`);
}, Gj = (i, o, c, d, h, S, m) => {
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
}, L3 = ({
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
      onKeyDown: (z) => Wj(z, R),
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
            onMouseLeave: () => Gj(
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
              i.map((z, J) => /* @__PURE__ */ I.jsxs(TL, { children: [
                /* @__PURE__ */ I.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => zT(
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
                        (ve) => ve === J ? null : J
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
                (z == null ? void 0 : z.submenus) && J === j && /* @__PURE__ */ I.jsx("div", { className: "sidebar-submenu", children: z.submenus.map((ve, Se) => /* @__PURE__ */ I.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => zT(
                      C,
                      T,
                      S,
                      ve,
                      J,
                      Se + 1,
                      k
                    ),
                    children: o({
                      icon: ve.icon,
                      label: ve.label,
                      route: `${z.route}${ve.route}`,
                      isOpen: k,
                      props: { className: "" }
                    })
                  },
                  ve.route
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
var GE = { exports: {} }, za = {}, ig = { exports: {} }, CE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jT;
function Qj() {
  return jT || (jT = 1, function(i) {
    function o(de, Ue) {
      var _e = de.length;
      de.push(Ue);
      e:
        for (; 0 < _e; ) {
          var St = _e - 1 >>> 1, Ct = de[St];
          if (0 < h(Ct, Ue))
            de[St] = Ue, de[_e] = Ct, _e = St;
          else
            break e;
        }
    }
    function c(de) {
      return de.length === 0 ? null : de[0];
    }
    function d(de) {
      if (de.length === 0)
        return null;
      var Ue = de[0], _e = de.pop();
      if (_e !== Ue) {
        de[0] = _e;
        e:
          for (var St = 0, Ct = de.length, In = Ct >>> 1; St < In; ) {
            var vr = 2 * (St + 1) - 1, ri = de[vr], _n = vr + 1, pa = de[_n];
            if (0 > h(ri, _e))
              _n < Ct && 0 > h(pa, ri) ? (de[St] = pa, de[_n] = _e, St = _n) : (de[St] = ri, de[vr] = _e, St = vr);
            else if (_n < Ct && 0 > h(pa, _e))
              de[St] = pa, de[_n] = _e, St = _n;
            else
              break e;
          }
      }
      return Ue;
    }
    function h(de, Ue) {
      var _e = de.sortIndex - Ue.sortIndex;
      return _e !== 0 ? _e : de.id - Ue.id;
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
    var T = [], R = [], k = 1, O = null, j = 3, G = !1, z = !1, J = !1, ve = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function re(de) {
      for (var Ue = c(R); Ue !== null; ) {
        if (Ue.callback === null)
          d(R);
        else if (Ue.startTime <= de)
          d(R), Ue.sortIndex = Ue.expirationTime, o(T, Ue);
        else
          break;
        Ue = c(R);
      }
    }
    function se(de) {
      if (J = !1, re(de), !z)
        if (c(T) !== null)
          z = !0, gt(ce);
        else {
          var Ue = c(R);
          Ue !== null && fn(se, Ue.startTime - de);
        }
    }
    function ce(de, Ue) {
      z = !1, J && (J = !1, Se(Me), Me = -1), G = !0;
      var _e = j;
      try {
        for (re(Ue), O = c(T); O !== null && (!(O.expirationTime > Ue) || de && !it()); ) {
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
        var de = i.unstable_now();
        Qe = de;
        var Ue = !0;
        try {
          Ue = ee(!0, de);
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
        ve(Mt, 0);
      };
    function gt(de) {
      ee = de, W || (W = !0, Be());
    }
    function fn(de, Ue) {
      Me = ve(function() {
        de(i.unstable_now());
      }, Ue);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, i.unstable_continueExecution = function() {
      z || G || (z = !0, gt(ce));
    }, i.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : He = 0 < de ? Math.floor(1e3 / de) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, i.unstable_getFirstCallbackNode = function() {
      return c(T);
    }, i.unstable_next = function(de) {
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
        return de();
      } finally {
        j = _e;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(de, Ue) {
      switch (de) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          de = 3;
      }
      var _e = j;
      j = de;
      try {
        return Ue();
      } finally {
        j = _e;
      }
    }, i.unstable_scheduleCallback = function(de, Ue, _e) {
      var St = i.unstable_now();
      switch (typeof _e == "object" && _e !== null ? (_e = _e.delay, _e = typeof _e == "number" && 0 < _e ? St + _e : St) : _e = St, de) {
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
      return Ct = _e + Ct, de = { id: k++, callback: Ue, priorityLevel: de, startTime: _e, expirationTime: Ct, sortIndex: -1 }, _e > St ? (de.sortIndex = _e, o(R, de), c(T) === null && de === c(R) && (J ? (Se(Me), Me = -1) : J = !0, fn(se, _e - St))) : (de.sortIndex = Ct, o(T, de), z || G || (z = !0, gt(ce))), de;
    }, i.unstable_shouldYield = it, i.unstable_wrapCallback = function(de) {
      var Ue = j;
      return function() {
        var _e = j;
        j = Ue;
        try {
          return de.apply(this, arguments);
        } finally {
          j = _e;
        }
      };
    };
  }(CE)), CE;
}
var TE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FT;
function qj() {
  return FT || (FT = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = !1, c = !1, d = 5;
      function h(me, ze) {
        var lt = me.length;
        me.push(ze), C(me, ze, lt);
      }
      function S(me) {
        return me.length === 0 ? null : me[0];
      }
      function m(me) {
        if (me.length === 0)
          return null;
        var ze = me[0], lt = me.pop();
        return lt !== ze && (me[0] = lt, T(me, lt, 0)), ze;
      }
      function C(me, ze, lt) {
        for (var Ot = lt; Ot > 0; ) {
          var Jt = Ot - 1 >>> 1, Nn = me[Jt];
          if (R(Nn, ze) > 0)
            me[Jt] = ze, me[Ot] = Nn, Ot = Jt;
          else
            return;
        }
      }
      function T(me, ze, lt) {
        for (var Ot = lt, Jt = me.length, Nn = Jt >>> 1; Ot < Nn; ) {
          var dn = (Ot + 1) * 2 - 1, Nr = me[dn], Pt = dn + 1, Jr = me[Pt];
          if (R(Nr, ze) < 0)
            Pt < Jt && R(Jr, Nr) < 0 ? (me[Ot] = Jr, me[Pt] = ze, Ot = Pt) : (me[Ot] = Nr, me[dn] = ze, Ot = dn);
          else if (Pt < Jt && R(Jr, ze) < 0)
            me[Ot] = Jr, me[Pt] = ze, Ot = Pt;
          else
            return;
        }
      }
      function R(me, ze) {
        var lt = me.sortIndex - ze.sortIndex;
        return lt !== 0 ? lt : me.id - ze.id;
      }
      var k = 1, O = 2, j = 3, G = 4, z = 5;
      function J(me, ze) {
      }
      var ve = typeof performance == "object" && typeof performance.now == "function";
      if (ve) {
        var Se = performance;
        i.unstable_now = function() {
          return Se.now();
        };
      } else {
        var K = Date, re = K.now();
        i.unstable_now = function() {
          return K.now() - re;
        };
      }
      var se = 1073741823, ce = -1, W = 250, ee = 5e3, Me = 1e4, He = se, Qe = [], it = [], Mt = 1, Be = null, Ke = j, Qt = !1, gt = !1, fn = !1, de = typeof setTimeout == "function" ? setTimeout : null, Ue = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function St(me) {
        for (var ze = S(it); ze !== null; ) {
          if (ze.callback === null)
            m(it);
          else if (ze.startTime <= me)
            m(it), ze.sortIndex = ze.expirationTime, h(Qe, ze);
          else
            return;
          ze = S(it);
        }
      }
      function Ct(me) {
        if (fn = !1, St(me), !gt)
          if (S(Qe) !== null)
            gt = !0, Ya(In);
          else {
            var ze = S(it);
            ze !== null && mn(Ct, ze.startTime - me);
          }
      }
      function In(me, ze) {
        gt = !1, fn && (fn = !1, Xr()), Qt = !0;
        var lt = Ke;
        try {
          var Ot;
          if (!c)
            return vr(me, ze);
        } finally {
          Be = null, Ke = lt, Qt = !1;
        }
      }
      function vr(me, ze) {
        var lt = ze;
        for (St(lt), Be = S(Qe); Be !== null && !o && !(Be.expirationTime > lt && (!me || Ha())); ) {
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
      function ri(me, ze) {
        switch (me) {
          case k:
          case O:
          case j:
          case G:
          case z:
            break;
          default:
            me = j;
        }
        var lt = Ke;
        Ke = me;
        try {
          return ze();
        } finally {
          Ke = lt;
        }
      }
      function _n(me) {
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
          return me();
        } finally {
          Ke = lt;
        }
      }
      function pa(me) {
        var ze = Ke;
        return function() {
          var lt = Ke;
          Ke = ze;
          try {
            return me.apply(this, arguments);
          } finally {
            Ke = lt;
          }
        };
      }
      function rr(me, ze, lt) {
        var Ot = i.unstable_now(), Jt;
        if (typeof lt == "object" && lt !== null) {
          var Nn = lt.delay;
          typeof Nn == "number" && Nn > 0 ? Jt = Ot + Nn : Jt = Ot;
        } else
          Jt = Ot;
        var dn;
        switch (me) {
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
          priorityLevel: me,
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
      function ha(me) {
        me.callback = null;
      }
      function On() {
        return Ke;
      }
      var ar = !1, Vn = null, ir = -1, lr = d, va = -1;
      function Ha() {
        var me = i.unstable_now() - va;
        return !(me < lr);
      }
      function Ti() {
      }
      function ii(me) {
        if (me < 0 || me > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        me > 0 ? lr = Math.floor(1e3 / me) : lr = d;
      }
      var Pa = function() {
        if (Vn !== null) {
          var me = i.unstable_now();
          va = me;
          var ze = !0, lt = !0;
          try {
            lt = Vn(ze, me);
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
          de(Pa, 0);
        };
      function Ya(me) {
        Vn = me, ar || (ar = !0, Zr());
      }
      function mn(me, ze) {
        ir = de(function() {
          me(i.unstable_now());
        }, ze);
      }
      function Xr() {
        Ue(ir), ir = -1;
      }
      var al = Ti, Ia = null;
      i.unstable_IdlePriority = z, i.unstable_ImmediatePriority = k, i.unstable_LowPriority = G, i.unstable_NormalPriority = j, i.unstable_Profiling = Ia, i.unstable_UserBlockingPriority = O, i.unstable_cancelCallback = ha, i.unstable_continueExecution = ai, i.unstable_forceFrameRate = ii, i.unstable_getCurrentPriorityLevel = On, i.unstable_getFirstCallbackNode = Or, i.unstable_next = _n, i.unstable_pauseExecution = Mr, i.unstable_requestPaint = al, i.unstable_runWithPriority = ri, i.unstable_scheduleCallback = rr, i.unstable_shouldYield = Ha, i.unstable_wrapCallback = pa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(TE)), TE;
}
var HT;
function yR() {
  return HT || (HT = 1, process.env.NODE_ENV === "production" ? ig.exports = Qj() : ig.exports = qj()), ig.exports;
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
var PT;
function Zj() {
  if (PT)
    return za;
  PT = 1;
  var i = kr, o = yR();
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
  var ve = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ve[n] = new J(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ve[r] = new J(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ve[n] = new J(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ve[n] = new J(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ve[n] = new J(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ve[n] = new J(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ve[n] = new J(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ve[n] = new J(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ve[n] = new J(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Se = /[\-:]([a-z])/g;
  function K(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Se,
      K
    );
    ve[r] = new J(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Se, K);
    ve[r] = new J(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Se, K);
    ve[r] = new J(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ve[n] = new J(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ve.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ve[n] = new J(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function re(n, r, u, f) {
    var v = ve.hasOwnProperty(r) ? ve[r] : null;
    (v !== null ? v.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (z(r, u, v, f) && (u = null), f || v === null ? j(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : v.mustUseProperty ? n[v.propertyName] = u === null ? v.type === 3 ? !1 : "" : u : (r = v.attributeName, f = v.attributeNamespace, u === null ? n.removeAttribute(r) : (v = v.type, u = v === 3 || v === 4 && u === !0 ? "" : "" + u, f ? n.setAttributeNS(f, r, u) : n.setAttribute(r, u))));
  }
  var se = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ce = Symbol.for("react.element"), W = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), Me = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), Qe = Symbol.for("react.provider"), it = Symbol.for("react.context"), Mt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), Qt = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), fn = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function Ue(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
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
  var Ti = Array.isArray;
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
        if (Ti(u)) {
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
  var me = {
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
  Object.keys(me).forEach(function(n) {
    ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), me[r] = me[n];
    });
  });
  function lt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || me.hasOwnProperty(n) && me[n] ? ("" + r).trim() : r + "px";
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
  function Go(n) {
    if (n = ws(n)) {
      if (typeof Jr != "function")
        throw Error(c(280));
      var r = n.stateNode;
      r && (r = je(r), Jr(n.stateNode, n.type, r));
    }
  }
  function Wl(n) {
    zt ? Yt ? Yt.push(n) : Yt = [n] : zt = n;
  }
  function Qo() {
    if (zt) {
      var n = zt, r = Yt;
      if (Yt = zt = null, Go(n), r)
        for (n = 0; n < r.length; n++)
          Go(r[n]);
    }
  }
  function Ju(n, r) {
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
      return Ju(n, r, u);
    } finally {
      Gl = !1, (zt !== null || Yt !== null) && (vc(), Qo());
    }
  }
  function Ql(n, r) {
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
  function il(n, r, u, f, v, g, _, D, N) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, B);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var ea = !1, Va = null, ll = !1, M = null, ae = { onError: function(n) {
    ea = !0, Va = n;
  } };
  function ye(n, r, u, f, v, g, _, D, N) {
    ea = !1, Va = null, il.apply(ae, arguments);
  }
  function Pe(n, r, u, f, v, g, _, D, N) {
    if (ye.apply(this, arguments), ea) {
      if (ea) {
        var B = Va;
        ea = !1, Va = null;
      } else
        throw Error(c(198));
      ll || (ll = !0, M = B);
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
  var Zt = o.unstable_scheduleCallback, mr = o.unstable_cancelCallback, ol = o.unstable_shouldYield, mc = o.unstable_requestPaint, Et = o.unstable_now, Pg = o.unstable_getCurrentPriorityLevel, bi = o.unstable_ImmediatePriority, st = o.unstable_UserBlockingPriority, ul = o.unstable_NormalPriority, rv = o.unstable_LowPriority, gd = o.unstable_IdlePriority, es = null, $a = null;
  function av(n) {
    if ($a && typeof $a.onCommitFiberRoot == "function")
      try {
        $a.onCommitFiberRoot(es, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ma = Math.clz32 ? Math.clz32 : Yg, iv = Math.log, lv = Math.LN2;
  function Yg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (iv(n) / lv | 0) | 0;
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
    var f = 0, v = n.suspendedLanes, g = n.pingedLanes, _ = u & 268435455;
    if (_ !== 0) {
      var D = _ & ~v;
      D !== 0 ? f = ql(D) : (g &= _, g !== 0 && (f = ql(g)));
    } else
      _ = u & ~v, _ !== 0 ? f = ql(_) : g !== 0 && (f = ql(g));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & v) && (v = f & -f, g = r & -r, v >= g || v === 16 && (g & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        u = 31 - ma(r), v = 1 << u, f |= n[u], r &= ~v;
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
    for (var u = n.suspendedLanes, f = n.pingedLanes, v = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var _ = 31 - ma(g), D = 1 << _, N = v[_];
      N === -1 ? (!(D & u) || D & f) && (v[_] = Sd(D, r)) : N <= r && (n.expiredLanes |= D), g &= ~D;
    }
  }
  function Ed(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Sc() {
    var n = yc;
    return yc <<= 1, !(yc & 4194240) && (yc = 64), n;
  }
  function wd(n) {
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
      var v = 31 - ma(u), g = 1 << v;
      r[v] = 0, f[v] = -1, n[v] = -1, u &= ~g;
    }
  }
  function ts(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var f = 31 - ma(u), v = 1 << f;
      v & r | n[f] & r && (n[f] |= r), u &= ~v;
    }
  }
  var Nt = 0;
  function _d(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ov, Ec, jt, uv, xd, et = !1, ns = [], yn = null, ya = null, ga = null, rs = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), Lt = [], Vg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        rs.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xn.delete(r.pointerId);
    }
  }
  function or(n, r, u, f, v, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: f, nativeEvent: g, targetContainers: [v] }, r !== null && (r = ws(r), r !== null && Ec(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function sl(n, r, u, f, v) {
    switch (r) {
      case "focusin":
        return yn = or(yn, n, r, u, f, v), !0;
      case "dragenter":
        return ya = or(ya, n, r, u, f, v), !0;
      case "mouseover":
        return ga = or(ga, n, r, u, f, v), !0;
      case "pointerover":
        var g = v.pointerId;
        return rs.set(g, or(rs.get(g) || null, n, r, u, f, v)), !0;
      case "gotpointercapture":
        return g = v.pointerId, xn.set(g, or(xn.get(g) || null, n, r, u, f, v)), !0;
    }
    return !1;
  }
  function sv(n) {
    var r = Ea(n.target);
    if (r !== null) {
      var u = rt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = mt(u), r !== null) {
            n.blockedOn = r, xd(n.priority, function() {
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
        return r = ws(u), r !== null && Ec(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function Cd(n, r, u) {
    Xo(n) && u.delete(r);
  }
  function cv() {
    et = !1, yn !== null && Xo(yn) && (yn = null), ya !== null && Xo(ya) && (ya = null), ga !== null && Xo(ga) && (ga = null), rs.forEach(Cd), xn.forEach(Cd);
  }
  function as(n, r) {
    n.blockedOn === r && (n.blockedOn = null, et || (et = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, cv)));
  }
  function is(n) {
    function r(v) {
      return as(v, n);
    }
    if (0 < ns.length) {
      as(ns[0], n);
      for (var u = 1; u < ns.length; u++) {
        var f = ns[u];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (yn !== null && as(yn, n), ya !== null && as(ya, n), ga !== null && as(ga, n), rs.forEach(r), xn.forEach(r), u = 0; u < Lt.length; u++)
      f = Lt[u], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Lt.length && (u = Lt[0], u.blockedOn === null); )
      sv(u), u.blockedOn === null && Lt.shift();
  }
  var Jo = se.ReactCurrentBatchConfig, Kl = !0;
  function fv(n, r, u, f) {
    var v = Nt, g = Jo.transition;
    Jo.transition = null;
    try {
      Nt = 1, _c(n, r, u, f);
    } finally {
      Nt = v, Jo.transition = g;
    }
  }
  function wc(n, r, u, f) {
    var v = Nt, g = Jo.transition;
    Jo.transition = null;
    try {
      Nt = 4, _c(n, r, u, f);
    } finally {
      Nt = v, Jo.transition = g;
    }
  }
  function _c(n, r, u, f) {
    if (Kl) {
      var v = xc(n, r, u, f);
      if (v === null)
        Ac(n, r, f, ls, u), Wa(n, f);
      else if (sl(v, n, r, u, f))
        f.stopPropagation();
      else if (Wa(n, f), r & 4 && -1 < Vg.indexOf(n)) {
        for (; v !== null; ) {
          var g = ws(v);
          if (g !== null && ov(g), g = xc(n, r, u, f), g === null && Ac(n, r, f, ls, u), g === v)
            break;
          v = g;
        }
        v !== null && f.stopPropagation();
      } else
        Ac(n, r, f, null, u);
    }
  }
  var ls = null;
  function xc(n, r, u, f) {
    if (ls = null, n = Pt(f), n = Ea(n), n !== null)
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
    return ls = n, null;
  }
  function Td(n) {
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
          case st:
            return 4;
          case ul:
          case rv:
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
  var Ri = null, os = null, us = null;
  function bd() {
    if (us)
      return us;
    var n, r = os, u = r.length, f, v = "value" in Ri ? Ri.value : Ri.textContent, g = v.length;
    for (n = 0; n < u && r[n] === v[n]; n++)
      ;
    var _ = u - n;
    for (f = 1; f <= _ && r[u - f] === v[g - f]; f++)
      ;
    return us = v.slice(n, 1 < f ? 1 - f : void 0);
  }
  function eu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ss() {
    return !0;
  }
  function dv() {
    return !1;
  }
  function ta(n) {
    function r(u, f, v, g, _) {
      this._reactName = u, this._targetInst = v, this.type = f, this.nativeEvent = g, this.target = _, this.currentTarget = null;
      for (var D in n)
        n.hasOwnProperty(D) && (u = n[D], this[D] = u ? u(g) : g[D]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? ss : dv, this.isPropagationStopped = dv, this;
    }
    return _e(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ss);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ss);
    }, persist: function() {
    }, isPersistent: ss }), r;
  }
  var cl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Cc = ta(cl), tu = _e({}, cl, { view: 0, detail: 0 }), pv = ta(tu), Tc, Rd, cs, Un = _e({}, tu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Od, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== cs && (cs && n.type === "mousemove" ? (Tc = n.screenX - cs.screenX, Rd = n.screenY - cs.screenY) : Rd = Tc = 0, cs = n), Tc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rd;
  } }), bc = ta(Un), hv = _e({}, Un, { dataTransfer: 0 }), vv = ta(hv), $g = _e({}, tu, { relatedTarget: 0 }), fl = ta($g), Dd = _e({}, cl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mv = ta(Dd), Bg = _e({}, cl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wg = ta(Bg), Gg = _e({}, cl, { data: 0 }), kd = ta(Gg), Md = {
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
  }, yv = {
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
  }, gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = gv[n]) ? !!r[n] : !1;
  }
  function Od() {
    return Sv;
  }
  var Di = _e({}, tu, { key: function(n) {
    if (n.key) {
      var r = Md[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = eu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? yv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Od, charCode: function(n) {
    return n.type === "keypress" ? eu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? eu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Qg = ta(Di), Nd = _e({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rc = ta(Nd), Ld = _e({}, tu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Od }), qg = ta(Ld), Dc = _e({}, cl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ev = ta(Dc), Lr = _e({}, Un, {
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
  var kc = C && "TextEvent" in window && !Xl, wv = C && (!Ga || Xl && 8 < Xl && 11 >= Xl), nu = String.fromCharCode(32), _v = !1;
  function xv(n, r) {
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
        return r.which !== 32 ? null : (_v = !0, nu);
      case "textInput":
        return n = r.data, n === nu && _v ? null : n;
      default:
        return null;
    }
  }
  function Kg(n, r) {
    if (ru)
      return n === "compositionend" || !Ga && xv(n, r) ? (n = bd(), us = os = Ri = null, ru = !1, n) : null;
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
        return wv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Cv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Tv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Cv[n.type] : r === "textarea";
  }
  function bv(n, r, u, f) {
    Wl(f), r = gs(r, "onChange"), 0 < r.length && (u = new Cc("onChange", "change", null, u, f), n.push({ event: u, listeners: r }));
  }
  var fs = null, au = null;
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
  var Ud = !1;
  if (C) {
    var Ad;
    if (C) {
      var zd = "oninput" in document;
      if (!zd) {
        var Dv = document.createElement("div");
        Dv.setAttribute("oninput", "return;"), zd = typeof Dv.oninput == "function";
      }
      Ad = zd;
    } else
      Ad = !1;
    Ud = Ad && (!document.documentMode || 9 < document.documentMode);
  }
  function kv() {
    fs && (fs.detachEvent("onpropertychange", Mv), au = fs = null);
  }
  function Mv(n) {
    if (n.propertyName === "value" && lu(au)) {
      var r = [];
      bv(r, au, n, Pt(n)), qo(iu, r);
    }
  }
  function Xg(n, r, u) {
    n === "focusin" ? (kv(), fs = r, au = u, fs.attachEvent("onpropertychange", Mv)) : n === "focusout" && kv();
  }
  function Jg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return lu(au);
  }
  function e0(n, r) {
    if (n === "click")
      return lu(r);
  }
  function Ov(n, r) {
    if (n === "input" || n === "change")
      return lu(r);
  }
  function t0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Sa = typeof Object.is == "function" ? Object.is : t0;
  function ds(n, r) {
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
  function Nv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Lv(n, r) {
    var u = Nv(n);
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
      u = Nv(u);
    }
  }
  function Uv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Uv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Oc() {
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
  function Mi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Nc(n) {
    var r = Oc(), u = n.focusedElem, f = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Uv(u.ownerDocument.documentElement, u)) {
      if (f !== null && Mi(u)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = u.textContent.length, g = Math.min(f.start, v);
          f = f.end === void 0 ? g : Math.min(f.end, v), !n.extend && g > f && (v = f, f = g, g = v), v = Lv(u, g);
          var _ = Lv(
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
  var Av = C && "documentMode" in document && 11 >= document.documentMode, Qa = null, jd = null, ps = null, Fd = !1;
  function zv(n, r, u) {
    var f = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Fd || Qa == null || Qa !== On(f) || (f = Qa, "selectionStart" in f && Mi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), ps && ds(ps, f) || (ps = f, f = gs(jd, "onSelect"), 0 < f.length && (r = new Cc("onSelect", "select", null, r, u), n.push({ event: r, listeners: f }), r.target = Qa)));
  }
  function Lc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var Jl = { animationend: Lc("Animation", "AnimationEnd"), animationiteration: Lc("Animation", "AnimationIteration"), animationstart: Lc("Animation", "AnimationStart"), transitionend: Lc("Transition", "TransitionEnd") }, Hd = {}, Pd = {};
  C && (Pd = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function An(n) {
    if (Hd[n])
      return Hd[n];
    if (!Jl[n])
      return n;
    var r = Jl[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in Pd)
        return Hd[n] = r[u];
    return n;
  }
  var Yd = An("animationend"), jv = An("animationiteration"), Fv = An("animationstart"), Hv = An("transitionend"), Pv = /* @__PURE__ */ new Map(), Yv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Oi(n, r) {
    Pv.set(n, r), S(r, [n]);
  }
  for (var hs = 0; hs < Yv.length; hs++) {
    var eo = Yv[hs], n0 = eo.toLowerCase(), vs = eo[0].toUpperCase() + eo.slice(1);
    Oi(n0, "on" + vs);
  }
  Oi(Yd, "onAnimationEnd"), Oi(jv, "onAnimationIteration"), Oi(Fv, "onAnimationStart"), Oi("dblclick", "onDoubleClick"), Oi("focusin", "onFocus"), Oi("focusout", "onBlur"), Oi(Hv, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), r0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Iv(n, r, u) {
    var f = n.type || "unknown-event";
    n.currentTarget = u, Pe(f, r, void 0, n), n.currentTarget = null;
  }
  function Uc(n, r) {
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
            Iv(v, D, B), g = N;
          }
        else
          for (_ = 0; _ < f.length; _++) {
            if (D = f[_], N = D.instance, B = D.currentTarget, D = D.listener, N !== g && v.isPropagationStopped())
              break e;
            Iv(v, D, B), g = N;
          }
      }
    }
    if (ll)
      throw n = M, ll = !1, M = null, n;
  }
  function Ft(n, r) {
    var u = r[Qd];
    u === void 0 && (u = r[Qd] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    u.has(f) || (Vv(r, n, 2, !1), u.add(f));
  }
  function dl(n, r, u) {
    var f = 0;
    r && (f |= 4), Vv(u, n, f, r);
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
  function Vv(n, r, u, f) {
    switch (Td(r)) {
      case 1:
        var v = fv;
        break;
      case 4:
        v = wc;
        break;
      default:
        v = _c;
    }
    u = v.bind(null, r, u, n), v = void 0, !Zo || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), f ? v !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: v }) : n.addEventListener(r, u, !0) : v !== void 0 ? n.addEventListener(r, u, { passive: v }) : n.addEventListener(r, u, !1);
  }
  function Ac(n, r, u, f, v) {
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
    qo(function() {
      var B = g, ne = Pt(u), ie = [];
      e: {
        var te = Pv.get(n);
        if (te !== void 0) {
          var Ee = Cc, Re = n;
          switch (n) {
            case "keypress":
              if (eu(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ee = Qg;
              break;
            case "focusin":
              Re = "focus", Ee = fl;
              break;
            case "focusout":
              Re = "blur", Ee = fl;
              break;
            case "beforeblur":
            case "afterblur":
              Ee = fl;
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
              Ee = bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ee = vv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ee = qg;
              break;
            case Yd:
            case jv:
            case Fv:
              Ee = mv;
              break;
            case Hv:
              Ee = Ev;
              break;
            case "scroll":
              Ee = pv;
              break;
            case "wheel":
              Ee = ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ee = Wg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ee = Rc;
          }
          var Oe = (r & 4) !== 0, hn = !Oe && n === "scroll", F = Oe ? te !== null ? te + "Capture" : null : te;
          Oe = [];
          for (var U = B, Y; U !== null; ) {
            Y = U;
            var ue = Y.stateNode;
            if (Y.tag === 5 && ue !== null && (Y = ue, F !== null && (ue = Ql(U, F), ue != null && Oe.push(ys(U, ue, Y)))), hn)
              break;
            U = U.return;
          }
          0 < Oe.length && (te = new Ee(te, Re, null, u, ne), ie.push({ event: te, listeners: Oe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", te && u !== Nr && (Re = u.relatedTarget || u.fromElement) && (Ea(Re) || Re[Li]))
            break e;
          if ((Ee || te) && (te = ne.window === ne ? ne : (te = ne.ownerDocument) ? te.defaultView || te.parentWindow : window, Ee ? (Re = u.relatedTarget || u.toElement, Ee = B, Re = Re ? Ea(Re) : null, Re !== null && (hn = rt(Re), Re !== hn || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (Ee = null, Re = B), Ee !== Re)) {
            if (Oe = bc, ue = "onMouseLeave", F = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Oe = Rc, ue = "onPointerLeave", F = "onPointerEnter", U = "pointer"), hn = Ee == null ? te : uu(Ee), Y = Re == null ? te : uu(Re), te = new Oe(ue, U + "leave", Ee, u, ne), te.target = hn, te.relatedTarget = Y, ue = null, Ea(ne) === B && (Oe = new Oe(F, U + "enter", Re, u, ne), Oe.target = Y, Oe.relatedTarget = hn, ue = Oe), hn = ue, Ee && Re)
              t: {
                for (Oe = Ee, F = Re, U = 0, Y = Oe; Y; Y = to(Y))
                  U++;
                for (Y = 0, ue = F; ue; ue = to(ue))
                  Y++;
                for (; 0 < U - Y; )
                  Oe = to(Oe), U--;
                for (; 0 < Y - U; )
                  F = to(F), Y--;
                for (; U--; ) {
                  if (Oe === F || F !== null && Oe === F.alternate)
                    break t;
                  Oe = to(Oe), F = to(F);
                }
                Oe = null;
              }
            else
              Oe = null;
            Ee !== null && Id(ie, te, Ee, Oe, !1), Re !== null && hn !== null && Id(ie, hn, Re, Oe, !0);
          }
        }
        e: {
          if (te = B ? uu(B) : window, Ee = te.nodeName && te.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && te.type === "file")
            var Ne = Rv;
          else if (Tv(te))
            if (Ud)
              Ne = Ov;
            else {
              Ne = Jg;
              var De = Xg;
            }
          else
            (Ee = te.nodeName) && Ee.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (Ne = e0);
          if (Ne && (Ne = Ne(n, B))) {
            bv(ie, Ne, u, ne);
            break e;
          }
          De && De(n, te, B), n === "focusout" && (De = te._wrapperState) && De.controlled && te.type === "number" && Ha(te, "number", te.value);
        }
        switch (De = B ? uu(B) : window, n) {
          case "focusin":
            (Tv(De) || De.contentEditable === "true") && (Qa = De, jd = B, ps = null);
            break;
          case "focusout":
            ps = jd = Qa = null;
            break;
          case "mousedown":
            Fd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fd = !1, zv(ie, u, ne);
            break;
          case "selectionchange":
            if (Av)
              break;
          case "keydown":
          case "keyup":
            zv(ie, u, ne);
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
          ru ? xv(n, u) && (Ze = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Ze = "onCompositionStart");
        Ze && (wv && u.locale !== "ko" && (ru || Ze !== "onCompositionStart" ? Ze === "onCompositionEnd" && ru && (Ae = bd()) : (Ri = ne, os = "value" in Ri ? Ri.value : Ri.textContent, ru = !0)), De = gs(B, Ze), 0 < De.length && (Ze = new kd(Ze, n, null, u, ne), ie.push({ event: Ze, listeners: De }), Ae ? Ze.data = Ae : (Ae = Mc(u), Ae !== null && (Ze.data = Ae)))), (Ae = kc ? Zg(n, u) : Kg(n, u)) && (B = gs(B, "onBeforeInput"), 0 < B.length && (ne = new kd("onBeforeInput", "beforeinput", null, u, ne), ie.push({ event: ne, listeners: B }), ne.data = Ae));
      }
      Uc(ie, r);
    });
  }
  function ys(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function gs(n, r) {
    for (var u = r + "Capture", f = []; n !== null; ) {
      var v = n, g = v.stateNode;
      v.tag === 5 && g !== null && (v = g, g = Ql(n, u), g != null && f.unshift(ys(n, g, v)), g = Ql(n, r), g != null && f.push(ys(n, g, v))), n = n.return;
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
  function Id(n, r, u, f, v) {
    for (var g = r._reactName, _ = []; u !== null && u !== f; ) {
      var D = u, N = D.alternate, B = D.stateNode;
      if (N !== null && N === f)
        break;
      D.tag === 5 && B !== null && (D = B, v ? (N = Ql(u, g), N != null && _.unshift(ys(u, N, D))) : v || (N = Ql(u, g), N != null && _.push(ys(u, N, D)))), u = u.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Vd = /\r\n?/g, a0 = /\u0000|\uFFFD/g;
  function $d(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vd, `
`).replace(a0, "");
  }
  function zc(n, r, u) {
    if (r = $d(r), $d(n) !== r && u)
      throw Error(c(425));
  }
  function jc() {
  }
  var Bd = null, no = null;
  function Ss(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ro = typeof setTimeout == "function" ? setTimeout : void 0, $v = typeof clearTimeout == "function" ? clearTimeout : void 0, Wd = typeof Promise == "function" ? Promise : void 0, Gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function(n) {
    return Wd.resolve(null).then(n).catch(i0);
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
            n.removeChild(v), is(r);
            return;
          }
          f--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || f++;
      u = v;
    } while (u);
    is(r);
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
  var hl = Math.random().toString(36).slice(2), ui = "__reactFiber$" + hl, ao = "__reactProps$" + hl, Li = "__reactContainer$" + hl, Qd = "__reactEvents$" + hl, l0 = "__reactListeners$" + hl, qd = "__reactHandles$" + hl;
  function Ea(n) {
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
  function ws(n) {
    return n = n[ui] || n[Li], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function je(n) {
    return n[ao] || null;
  }
  var vl = [], Vt = -1;
  function tt(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > Vt || (n.current = vl[Vt], vl[Vt] = null, Vt--);
  }
  function bt(n, r) {
    Vt++, vl[Vt] = n.current, n.current = r;
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
  function ml(n, r, u) {
    if (qe.current !== si)
      throw Error(c(168));
    bt(qe, r), bt(on, u);
  }
  function _s(n, r, u) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return u;
    f = f.getChildContext();
    for (var v in f)
      if (!(v in r))
        throw Error(c(108, pa(n) || "Unknown", v));
    return _e({}, u, f);
  }
  function Fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || si, Ur = qe.current, bt(qe, n), bt(on, on.current), !0;
  }
  function Bv(n, r, u) {
    var f = n.stateNode;
    if (!f)
      throw Error(c(169));
    u ? (n = _s(n, r, Ur), f.__reactInternalMemoizedMergedChildContext = n, Tt(on), Tt(qe), bt(qe, n)) : Tt(on), bt(on, u);
  }
  var na = null, zn = !1, xs = !1;
  function Zd(n) {
    na === null ? na = [n] : na.push(n);
  }
  function Kd(n) {
    zn = !0, Zd(n);
  }
  function Ar() {
    if (!xs && na !== null) {
      xs = !0;
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
        throw na !== null && (na = na.slice(n + 1)), Zt(bi, Ar), v;
      } finally {
        Nt = r, xs = !1;
      }
    }
    return null;
  }
  var yl = [], zr = 0, io = null, su = 0, jr = [], ur = 0, xa = null, $n = 1, Ui = "";
  function ra(n, r) {
    yl[zr++] = su, yl[zr++] = io, io = n, su = r;
  }
  function Xd(n, r, u) {
    jr[ur++] = $n, jr[ur++] = Ui, jr[ur++] = xa, xa = n;
    var f = $n;
    n = Ui;
    var v = 32 - ma(f) - 1;
    f &= ~(1 << v), u += 1;
    var g = 32 - ma(r) + v;
    if (30 < g) {
      var _ = v - v % 5;
      g = (f & (1 << _) - 1).toString(32), f >>= _, v -= _, $n = 1 << 32 - ma(r) + v | u << v | f, Ui = g + n;
    } else
      $n = 1 << g | u << v | f, Ui = n;
  }
  function Hc(n) {
    n.return !== null && (ra(n, 1), Xd(n, 1, 0));
  }
  function Jd(n) {
    for (; n === io; )
      io = yl[--zr], yl[zr] = null, su = yl[--zr], yl[zr] = null;
    for (; n === xa; )
      xa = jr[--ur], jr[ur] = null, Ui = jr[--ur], jr[ur] = null, $n = jr[--ur], jr[ur] = null;
  }
  var aa = null, Fr = null, $t = !1, Ca = null;
  function ep(n, r) {
    var u = Ma(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Wv(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, aa = n, Fr = qa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, aa = n, Fr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = xa !== null ? { id: $n, overflow: Ui } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Ma(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, aa = n, Fr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Yc(n) {
    if ($t) {
      var r = Fr;
      if (r) {
        var u = r;
        if (!Wv(n, r)) {
          if (Pc(n))
            throw Error(c(418));
          r = qa(u.nextSibling);
          var f = aa;
          r && Wv(n, r) ? ep(f, u) : (n.flags = n.flags & -4097 | 2, $t = !1, aa = n);
        }
      } else {
        if (Pc(n))
          throw Error(c(418));
        n.flags = n.flags & -4097 | 2, $t = !1, aa = n;
      }
    }
  }
  function Gv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    aa = n;
  }
  function Ic(n) {
    if (n !== aa)
      return !1;
    if (!$t)
      return Gv(n), $t = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ss(n.type, n.memoizedProps)), r && (r = Fr)) {
      if (Pc(n))
        throw Qv(), Error(c(418));
      for (; r; )
        ep(n, r), r = qa(r.nextSibling);
    }
    if (Gv(n), n.tag === 13) {
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
  function Qv() {
    for (var n = Fr; n; )
      n = qa(n.nextSibling);
  }
  function en() {
    Fr = aa = null, $t = !1;
  }
  function tp(n) {
    Ca === null ? Ca = [n] : Ca.push(n);
  }
  var Vc = se.ReactCurrentBatchConfig;
  function ia(n, r) {
    if (n && n.defaultProps) {
      r = _e({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var ci = tt(null), $c = null, gl = null, np = null;
  function rp() {
    np = gl = $c = null;
  }
  function Sl(n) {
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
  function pe(n, r) {
    $c = n, np = gl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Sn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (np !== n)
      if (n = { context: n, memoizedValue: r, next: null }, gl === null) {
        if ($c === null)
          throw Error(c(308));
        gl = n, $c.dependencies = { lanes: 0, firstContext: n };
      } else
        gl = gl.next = n;
    return r;
  }
  var Bn = null;
  function ap(n) {
    Bn === null ? Bn = [n] : Bn.push(n);
  }
  function qv(n, r, u, f) {
    var v = r.interleaved;
    return v === null ? (u.next = u, ap(r)) : (u.next = v.next, v.next = u), r.interleaved = u, Ai(n, f);
  }
  function Ai(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var El = !1;
  function ip(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function wl(n, r, u) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, ct & 2) {
      var v = f.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), f.pending = r, Ai(n, u);
    }
    return v = f.interleaved, v === null ? (r.next = r, ap(f)) : (r.next = v.next, v.next = r), f.interleaved = r, Ai(n, u);
  }
  function Bc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, ts(n, u);
    }
  }
  function lp(n, r) {
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
  function _l(n, r, u, f) {
    var v = n.updateQueue;
    El = !1;
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
        var te = D.lane, Ee = D.eventTime;
        if ((f & te) === te) {
          ne !== null && (ne = ne.next = {
            eventTime: Ee,
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          });
          e: {
            var Re = n, Oe = D;
            switch (te = r, Ee = u, Oe.tag) {
              case 1:
                if (Re = Oe.payload, typeof Re == "function") {
                  ie = Re.call(Ee, ie, te);
                  break e;
                }
                ie = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = Oe.payload, te = typeof Re == "function" ? Re.call(Ee, ie, te) : Re, te == null)
                  break e;
                ie = _e({}, ie, te);
                break e;
              case 2:
                El = !0;
            }
          }
          D.callback !== null && D.lane !== 0 && (n.flags |= 64, te = v.effects, te === null ? v.effects = [D] : te.push(D));
        } else
          Ee = { eventTime: Ee, lane: te, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, ne === null ? (B = ne = Ee, N = ie) : ne = ne.next = Ee, _ |= te;
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
      Pi |= _, n.lanes = _, n.memoizedState = ie;
    }
  }
  function lo(n, r, u) {
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
  var Zv = new i.Component().refs;
  function op(n, r, u, f) {
    r = n.memoizedState, u = u(f, r), u = u == null ? r : _e({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? rt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var f = dr(), v = En(n), g = zi(f, v);
    g.payload = r, u != null && (g.callback = u), r = wl(n, g, v), r !== null && (pr(r, n, v, f), Bc(r, n, v));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var f = dr(), v = En(n), g = zi(f, v);
    g.tag = 1, g.payload = r, u != null && (g.callback = u), r = wl(n, g, v), r !== null && (pr(r, n, v, f), Bc(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = dr(), f = En(n), v = zi(u, f);
    v.tag = 2, r != null && (v.callback = r), r = wl(n, v, f), r !== null && (pr(r, n, f, u), Bc(r, n, f));
  } };
  function Kv(n, r, u, f, v, g, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, _) : r.prototype && r.prototype.isPureReactComponent ? !ds(u, f) || !ds(v, g) : !0;
  }
  function Xv(n, r, u) {
    var f = !1, v = si, g = r.contextType;
    return typeof g == "object" && g !== null ? g = pn(g) : (v = Kt(r) ? Ur : qe.current, f = r.contextTypes, g = (f = f != null) ? wa(n, v) : si), r = new r(u, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wc, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function Jv(n, r, u, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, f), r.state !== n && Wc.enqueueReplaceState(r, r.state, null);
  }
  function Gc(n, r, u, f) {
    var v = n.stateNode;
    v.props = u, v.state = n.memoizedState, v.refs = Zv, ip(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? v.context = pn(g) : (g = Kt(r) ? Ur : qe.current, v.context = wa(n, g)), v.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (op(n, r, g, u), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && Wc.enqueueReplaceState(v, v.state, null), _l(n, u, v, f), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function cu(n, r, u) {
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
          D === Zv && (D = v.refs = {}), _ === null ? delete D[g] : D[g] = _;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!u._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function Qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function em(n) {
    var r = n._init;
    return r(n._payload);
  }
  function tm(n) {
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
      return F = Ml(F, U), F.index = 0, F.sibling = null, F;
    }
    function g(F, U, Y) {
      return F.index = Y, n ? (Y = F.alternate, Y !== null ? (Y = Y.index, Y < U ? (F.flags |= 2, U) : Y) : (F.flags |= 2, U)) : (F.flags |= 1048576, U);
    }
    function _(F) {
      return n && F.alternate === null && (F.flags |= 2), F;
    }
    function D(F, U, Y, ue) {
      return U === null || U.tag !== 6 ? (U = Is(Y, F.mode, ue), U.return = F, U) : (U = v(U, Y), U.return = F, U);
    }
    function N(F, U, Y, ue) {
      var Ne = Y.type;
      return Ne === ee ? ne(F, U, Y.props.children, ue, Y.key) : U !== null && (U.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === gt && em(Ne) === U.type) ? (ue = v(U, Y.props), ue.ref = cu(F, U, Y), ue.return = F, ue) : (ue = Rf(Y.type, Y.key, Y.props, null, F.mode, ue), ue.ref = cu(F, U, Y), ue.return = F, ue);
    }
    function B(F, U, Y, ue) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== Y.containerInfo || U.stateNode.implementation !== Y.implementation ? (U = bo(Y, F.mode, ue), U.return = F, U) : (U = v(U, Y.children || []), U.return = F, U);
    }
    function ne(F, U, Y, ue, Ne) {
      return U === null || U.tag !== 7 ? (U = To(Y, F.mode, ue, Ne), U.return = F, U) : (U = v(U, Y), U.return = F, U);
    }
    function ie(F, U, Y) {
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return U = Is("" + U, F.mode, Y), U.return = F, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ce:
            return Y = Rf(U.type, U.key, U.props, null, F.mode, Y), Y.ref = cu(F, null, U), Y.return = F, Y;
          case W:
            return U = bo(U, F.mode, Y), U.return = F, U;
          case gt:
            var ue = U._init;
            return ie(F, ue(U._payload), Y);
        }
        if (Ti(U) || Ue(U))
          return U = To(U, F.mode, Y, null), U.return = F, U;
        Qc(F, U);
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
        if (Ti(Y) || Ue(Y))
          return Ne !== null ? null : ne(F, U, Y, ue, null);
        Qc(F, Y);
      }
      return null;
    }
    function Ee(F, U, Y, ue, Ne) {
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
            return Ee(F, U, Y, De(ue._payload), Ne);
        }
        if (Ti(ue) || Ue(ue))
          return F = F.get(Y) || null, ne(U, F, ue, Ne, null);
        Qc(U, ue);
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
        Pn = Ee(Ae, F, Ze, Y[Ze], ue), Pn !== null && (n && Pn.alternate !== null && Ae.delete(Pn.key === null ? Ze : Pn.key), U = g(Pn, U, Ze), De === null ? Ne = Pn : De.sibling = Pn, De = Pn);
      return n && Ae.forEach(function(Ol) {
        return r(F, Ol);
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
        var Ol = te(F, Ae, yt.value, ue);
        if (Ol === null) {
          Ae === null && (Ae = Pn);
          break;
        }
        n && Ae && Ol.alternate === null && r(F, Ae), U = g(Ol, U, Ze), De === null ? Ne = Ol : De.sibling = Ol, De = Ol, Ae = Pn;
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
        yt = Ee(Ae, F, Ze, yt.value, ue), yt !== null && (n && yt.alternate !== null && Ae.delete(yt.key === null ? Ze : yt.key), U = g(yt, U, Ze), De === null ? Ne = yt : De.sibling = yt, De = yt);
      return n && Ae.forEach(function(b0) {
        return r(F, b0);
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
                  } else if (De.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === gt && em(Ne) === De.type) {
                    u(F, De.sibling), U = v(De, Y.props), U.ref = cu(F, De, Y), U.return = F, F = U;
                    break e;
                  }
                  u(F, De);
                  break;
                } else
                  r(F, De);
                De = De.sibling;
              }
              Y.type === ee ? (U = To(Y.props.children, F.mode, ue, Y.key), U.return = F, F = U) : (ue = Rf(Y.type, Y.key, Y.props, null, F.mode, ue), ue.ref = cu(F, U, Y), ue.return = F, F = ue);
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
              U = bo(Y, F.mode, ue), U.return = F, F = U;
            }
            return _(F);
          case gt:
            return De = Y._init, hn(F, U, De(Y._payload), ue);
        }
        if (Ti(Y))
          return Re(F, U, Y, ue);
        if (Ue(Y))
          return Oe(F, U, Y, ue);
        Qc(F, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, U !== null && U.tag === 6 ? (u(F, U.sibling), U = v(U, Y), U.return = F, F = U) : (u(F, U), U = Is(Y, F.mode, ue), U.return = F, F = U), _(F)) : u(F, U);
    }
    return hn;
  }
  var fu = tm(!0), nm = tm(!1), Cs = {}, Za = tt(Cs), Ts = tt(Cs), du = tt(Cs);
  function oo(n) {
    if (n === Cs)
      throw Error(c(174));
    return n;
  }
  function up(n, r) {
    switch (bt(du, r), bt(Ts, n), bt(Za, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : mn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = mn(r, n);
    }
    Tt(Za), bt(Za, r);
  }
  function xl() {
    Tt(Za), Tt(Ts), Tt(du);
  }
  function Ye(n) {
    oo(du.current);
    var r = oo(Za.current), u = mn(r, n.type);
    r !== u && (bt(Ts, n), bt(Za, u));
  }
  function ot(n) {
    Ts.current === n && (Tt(Za), Tt(Ts));
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
  function qc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Zc = se.ReactCurrentDispatcher, sp = se.ReactCurrentBatchConfig, uo = 0, Bt = null, Z = null, pt = null, We = !1, fi = !1, la = 0, so = 0;
  function Wt() {
    throw Error(c(321));
  }
  function co(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!Sa(n[u], r[u]))
        return !1;
    return !0;
  }
  function Cl(n, r, u, f, v, g) {
    if (uo = g, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Zc.current = n === null || n.memoizedState === null ? u0 : s0, n = u(f, v), fi) {
      g = 0;
      do {
        if (fi = !1, la = 0, 25 <= g)
          throw Error(c(301));
        g += 1, pt = Z = null, r.updateQueue = null, Zc.current = fp, n = u(f, v);
      } while (fi);
    }
    if (Zc.current = pf, r = Z !== null && Z.next !== null, uo = 0, pt = Z = Bt = null, We = !1, r)
      throw Error(c(300));
    return n;
  }
  function fo() {
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
  function po(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function bs(n) {
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
        if ((uo & ne) === ne)
          N !== null && (N = N.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), f = B.hasEagerState ? B.eagerState : n(f, B.action);
        else {
          var ie = {
            lane: ne,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          N === null ? (D = N = ie, _ = f) : N = N.next = ie, Bt.lanes |= ne, Pi |= ne;
        }
        B = B.next;
      } while (B !== null && B !== g);
      N === null ? _ = f : N.next = D, Sa(f, r.memoizedState) || (Sn = !0), r.memoizedState = f, r.baseState = _, r.baseQueue = N, u.lastRenderedState = f;
    }
    if (n = u.interleaved, n !== null) {
      v = n;
      do
        g = v.lane, Bt.lanes |= g, Pi |= g, v = v.next;
      while (v !== n);
    } else
      v === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Rs(n) {
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
  function Kc() {
  }
  function Xc(n, r) {
    var u = Bt, f = Hr(), v = r(), g = !Sa(f.memoizedState, v);
    if (g && (f.memoizedState = v, Sn = !0), f = f.queue, Ds(tf.bind(null, u, f, n), [n]), f.getSnapshot !== r || g || pt !== null && pt.memoizedState.tag & 1) {
      if (u.flags |= 2048, ho(9, ef.bind(null, u, f, v, r), void 0, null), nn === null)
        throw Error(c(349));
      uo & 30 || Jc(u, r, v);
    }
    return v;
  }
  function Jc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
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
    var r = Ai(n, 1);
    r !== null && pr(r, n, 1, -1);
  }
  function af(n) {
    var r = ba();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: n }, r.queue = n, n = n.dispatch = df.bind(null, Bt, n), [r.memoizedState, n];
  }
  function ho(n, r, u, f) {
    return n = { tag: n, create: r, destroy: u, deps: f, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (f = u.next, u.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function lf() {
    return Hr().memoizedState;
  }
  function vo(n, r, u, f) {
    var v = ba();
    Bt.flags |= n, v.memoizedState = ho(1 | r, u, void 0, f === void 0 ? null : f);
  }
  function ji(n, r, u, f) {
    var v = Hr();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (Z !== null) {
      var _ = Z.memoizedState;
      if (g = _.destroy, f !== null && co(f, _.deps)) {
        v.memoizedState = ho(r, u, g, f);
        return;
      }
    }
    Bt.flags |= n, v.memoizedState = ho(1 | r, u, g, f);
  }
  function of(n, r) {
    return vo(8390656, 8, n, r);
  }
  function Ds(n, r) {
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
  function pu(n, r, u) {
    return u = u != null ? u.concat([n]) : null, ji(4, 4, cp.bind(null, r, n), u);
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
    return uo & 21 ? (Sa(u, r) || (u = Sc(), Bt.lanes |= u, Pi |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Sn = !0), n.memoizedState = u);
  }
  function o0(n, r) {
    var u = Nt;
    Nt = u !== 0 && 4 > u ? u : 4, n(!0);
    var f = sp.transition;
    sp.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = u, sp.transition = f;
    }
  }
  function Ht() {
    return Hr().memoizedState;
  }
  function ff(n, r, u) {
    var f = En(n);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, vu(n))
      ks(r, u);
    else if (u = qv(n, r, u, f), u !== null) {
      var v = dr();
      pr(u, n, f, v), rm(u, r, f);
    }
  }
  function df(n, r, u) {
    var f = En(n), v = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (vu(n))
      ks(r, v);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var _ = r.lastRenderedState, D = g(_, u);
          if (v.hasEagerState = !0, v.eagerState = D, Sa(D, _)) {
            var N = r.interleaved;
            N === null ? (v.next = v, ap(r)) : (v.next = N.next, N.next = v), r.interleaved = v;
            return;
          }
        } catch {
        } finally {
        }
      u = qv(n, r, v, f), u !== null && (v = dr(), pr(u, n, f, v), rm(u, r, f));
    }
  }
  function vu(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function ks(n, r) {
    fi = We = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function rm(n, r, u) {
    if (u & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, ts(n, u);
    }
  }
  var pf = { readContext: pn, useCallback: Wt, useContext: Wt, useEffect: Wt, useImperativeHandle: Wt, useInsertionEffect: Wt, useLayoutEffect: Wt, useMemo: Wt, useReducer: Wt, useRef: Wt, useState: Wt, useDebugValue: Wt, useDeferredValue: Wt, useTransition: Wt, useMutableSource: Wt, useSyncExternalStore: Wt, useId: Wt, unstable_isNewReconciler: !1 }, u0 = { readContext: pn, useCallback: function(n, r) {
    return ba().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: of, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, vo(
      4194308,
      4,
      cp.bind(null, r, n),
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
    return r = u !== void 0 ? u(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = ff.bind(null, Bt, n), [f.memoizedState, n];
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
    var f = Bt, v = ba();
    if ($t) {
      if (u === void 0)
        throw Error(c(407));
      u = u();
    } else {
      if (u = r(), nn === null)
        throw Error(c(349));
      uo & 30 || Jc(f, r, u);
    }
    v.memoizedState = u;
    var g = { value: u, getSnapshot: r };
    return v.queue = g, of(tf.bind(
      null,
      f,
      g,
      n
    ), [n]), f.flags |= 2048, ho(9, ef.bind(null, f, g, u, r), void 0, null), u;
  }, useId: function() {
    var n = ba(), r = nn.identifierPrefix;
    if ($t) {
      var u = Ui, f = $n;
      u = (f & ~(1 << 32 - ma(f) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = la++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = so++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, s0 = {
    readContext: pn,
    useCallback: hu,
    useContext: pn,
    useEffect: Ds,
    useImperativeHandle: pu,
    useInsertionEffect: uf,
    useLayoutEffect: sf,
    useMemo: Tl,
    useReducer: bs,
    useRef: lf,
    useState: function() {
      return bs(po);
    },
    useDebugValue: cf,
    useDeferredValue: function(n) {
      var r = Hr();
      return Pr(r, Z.memoizedState, n);
    },
    useTransition: function() {
      var n = bs(po)[0], r = Hr().memoizedState;
      return [n, r];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Xc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, fp = { readContext: pn, useCallback: hu, useContext: pn, useEffect: Ds, useImperativeHandle: pu, useInsertionEffect: uf, useLayoutEffect: sf, useMemo: Tl, useReducer: Rs, useRef: lf, useState: function() {
    return Rs(po);
  }, useDebugValue: cf, useDeferredValue: function(n) {
    var r = Hr();
    return Z === null ? r.memoizedState = n : Pr(r, Z.memoizedState, n);
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
    } catch (g) {
      v = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function Ms(n, r, u) {
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
  function am(n, r, u) {
    u = zi(-1, u), u.tag = 3, u.payload = { element: null };
    var f = r.value;
    return u.callback = function() {
      wf || (wf = !0, Eo = f), hf(n, r);
    }, u;
  }
  function Os(n, r, u) {
    u = zi(-1, u), u.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var v = r.value;
      u.payload = function() {
        return f(v);
      }, u.callback = function() {
        hf(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (u.callback = function() {
      hf(n, r), typeof f != "function" && (hi === null ? hi = /* @__PURE__ */ new Set([this]) : hi.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), u;
  }
  function im(n, r, u) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new c0();
      var v = /* @__PURE__ */ new Set();
      f.set(r, v);
    } else
      v = f.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(r, v));
    v.has(u) || (v.add(u), n = y0.bind(null, n, r, u), r.then(n, n));
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
  function pp(n, r, u, f, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = zi(-1, 1), r.tag = 2, wl(u, r, 1))), u.lanes |= 1), n);
  }
  var f0 = se.ReactCurrentOwner, Sn = !1;
  function Tn(n, r, u, f) {
    r.child = n === null ? nm(r, null, u, f) : fu(r, n.child, u, f);
  }
  function bl(n, r, u, f, v) {
    u = u.render;
    var g = r.ref;
    return pe(r, v), f = Cl(n, r, u, f, g, v), u = fo(), n !== null && !Sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Wn(n, r, v)) : ($t && u && Hc(r), r.flags |= 1, Tn(n, r, f, v), r.child);
  }
  function vf(n, r, u, f, v) {
    if (n === null) {
      var g = u.type;
      return typeof g == "function" && !Np(g) && g.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = g, Yr(n, r, g, f, v)) : (n = Rf(u.type, null, f, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & v)) {
      var _ = g.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ds, u(_, f) && n.ref === r.ref)
        return Wn(n, r, v);
    }
    return r.flags |= 1, n = Ml(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yr(n, r, u, f, v) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (ds(g, f) && n.ref === r.ref)
        if (Sn = !1, r.pendingProps = f = g, (n.lanes & v) !== 0)
          n.flags & 131072 && (Sn = !0);
        else
          return r.lanes = n.lanes, Wn(n, r, v);
    }
    return yu(n, r, u, f, v);
  }
  function mo(n, r, u) {
    var f = r.pendingProps, v = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, bt(xu, oa), oa |= u;
      else {
        if (!(u & 1073741824))
          return n = g !== null ? g.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, bt(xu, oa), oa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : u, bt(xu, oa), oa |= f;
      }
    else
      g !== null ? (f = g.baseLanes | u, r.memoizedState = null) : f = u, bt(xu, oa), oa |= f;
    return Tn(n, r, v, u), r.child;
  }
  function nt(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yu(n, r, u, f, v) {
    var g = Kt(u) ? Ur : qe.current;
    return g = wa(r, g), pe(r, v), u = Cl(n, r, u, f, g, v), f = fo(), n !== null && !Sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Wn(n, r, v)) : ($t && f && Hc(r), r.flags |= 1, Tn(n, r, u, v), r.child);
  }
  function hp(n, r, u, f, v) {
    if (Kt(u)) {
      var g = !0;
      Fc(r);
    } else
      g = !1;
    if (pe(r, v), r.stateNode === null)
      sr(n, r), Xv(r, u, f), Gc(r, u, f, v), f = !0;
    else if (n === null) {
      var _ = r.stateNode, D = r.memoizedProps;
      _.props = D;
      var N = _.context, B = u.contextType;
      typeof B == "object" && B !== null ? B = pn(B) : (B = Kt(u) ? Ur : qe.current, B = wa(r, B));
      var ne = u.getDerivedStateFromProps, ie = typeof ne == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ie || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (D !== f || N !== B) && Jv(r, _, f, B), El = !1;
      var te = r.memoizedState;
      _.state = te, _l(r, f, _, v), N = r.memoizedState, D !== f || te !== N || on.current || El ? (typeof ne == "function" && (op(r, u, ne, f), N = r.memoizedState), (D = El || Kv(r, u, D, f, te, N, B)) ? (ie || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = N), _.props = f, _.state = N, _.context = B, f = D) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      _ = r.stateNode, Cn(n, r), D = r.memoizedProps, B = r.type === r.elementType ? D : ia(r.type, D), _.props = B, ie = r.pendingProps, te = _.context, N = u.contextType, typeof N == "object" && N !== null ? N = pn(N) : (N = Kt(u) ? Ur : qe.current, N = wa(r, N));
      var Ee = u.getDerivedStateFromProps;
      (ne = typeof Ee == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (D !== ie || te !== N) && Jv(r, _, f, N), El = !1, te = r.memoizedState, _.state = te, _l(r, f, _, v);
      var Re = r.memoizedState;
      D !== ie || te !== Re || on.current || El ? (typeof Ee == "function" && (op(r, u, Ee, f), Re = r.memoizedState), (B = El || Kv(r, u, B, f, te, Re, N) || !1) ? (ne || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(f, Re, N), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(f, Re, N)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Re), _.props = f, _.state = Re, _.context = N, f = B) : (typeof _.componentDidUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return lm(n, r, u, f, g, v);
  }
  function lm(n, r, u, f, v, g) {
    nt(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!f && !_)
      return v && Bv(r, u, !1), Wn(n, r, g);
    f = r.stateNode, f0.current = r;
    var D = _ && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && _ ? (r.child = fu(r, n.child, null, g), r.child = fu(r, null, D, g)) : Tn(n, r, D, g), r.memoizedState = f.state, v && Bv(r, u, !0), r.child;
  }
  function om(n) {
    var r = n.stateNode;
    r.pendingContext ? ml(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ml(n, r.context, !1), up(n, r.containerInfo);
  }
  function mf(n, r, u, f, v) {
    return en(), tp(v), r.flags |= 256, Tn(n, r, u, f), r.child;
  }
  var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function mp(n, r, u) {
    var f = r.pendingProps, v = $e.current, g = !1, _ = (r.flags & 128) !== 0, D;
    if ((D = _) || (D = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), D ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), bt($e, v & 1), n === null)
      return Yc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = f.children, n = f.fallback, g ? (f = r.mode, g = r.child, _ = { mode: "hidden", children: _ }, !(f & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = _) : g = Ys(_, f, 0, null), n = To(n, f, u, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = vp(u), r.memoizedState = yo, n) : yp(r, _));
    if (v = n.memoizedState, v !== null && (D = v.dehydrated, D !== null))
      return d0(n, r, _, f, D, v, u);
    if (g) {
      g = f.fallback, _ = r.mode, v = n.child, D = v.sibling;
      var N = { mode: "hidden", children: f.children };
      return !(_ & 1) && r.child !== v ? (f = r.child, f.childLanes = 0, f.pendingProps = N, r.deletions = null) : (f = Ml(v, N), f.subtreeFlags = v.subtreeFlags & 14680064), D !== null ? g = Ml(D, g) : (g = To(g, _, u, null), g.flags |= 2), g.return = r, f.return = r, f.sibling = g, r.child = f, f = g, g = r.child, _ = n.child.memoizedState, _ = _ === null ? vp(u) : { baseLanes: _.baseLanes | u, cachePool: null, transitions: _.transitions }, g.memoizedState = _, g.childLanes = n.childLanes & ~u, r.memoizedState = yo, f;
    }
    return g = n.child, n = g.sibling, f = Ml(g, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = u), f.return = r, f.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function yp(n, r) {
    return r = Ys({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function gu(n, r, u, f) {
    return f !== null && tp(f), fu(r, n.child, null, u), n = yp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function d0(n, r, u, f, v, g, _) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, f = Ms(Error(c(422))), gu(n, r, _, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = f.fallback, v = r.mode, f = Ys({ mode: "visible", children: f.children }, v, 0, null), g = To(g, v, _, null), g.flags |= 2, f.return = r, g.return = r, f.sibling = g, r.child = f, r.mode & 1 && fu(r, n.child, null, _), r.child.memoizedState = vp(_), r.memoizedState = yo, g);
    if (!(r.mode & 1))
      return gu(n, r, _, null);
    if (v.data === "$!") {
      if (f = v.nextSibling && v.nextSibling.dataset, f)
        var D = f.dgst;
      return f = D, g = Error(c(419)), f = Ms(g, f, void 0), gu(n, r, _, f);
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
        v = v & (f.suspendedLanes | _) ? 0 : v, v !== 0 && v !== g.retryLane && (g.retryLane = v, Ai(n, v), pr(f, n, v, -1));
      }
      return kp(), f = Ms(Error(c(421))), gu(n, r, _, f);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = g0.bind(null, n), v._reactRetry = r, null) : (n = g.treeContext, Fr = qa(v.nextSibling), aa = r, $t = !0, Ca = null, n !== null && (jr[ur++] = $n, jr[ur++] = Ui, jr[ur++] = xa, $n = n.id, Ui = n.overflow, xa = r), r = yp(r, f.children), r.flags |= 4096, r);
  }
  function gp(n, r, u) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), jn(n.return, r, u);
  }
  function yf(n, r, u, f, v) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: v } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = u, g.tailMode = v);
  }
  function Sp(n, r, u) {
    var f = r.pendingProps, v = f.revealOrder, g = f.tail;
    if (Tn(n, r, f.children, u), f = $e.current, f & 2)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && gp(n, u, r);
            else if (n.tag === 19)
              gp(n, u, r);
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
          u = v, u === null ? (v = r.child, r.child = null) : (v = u.sibling, u.sibling = null), yf(r, !1, v, u, g);
          break;
        case "backwards":
          for (u = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && tn(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = u, u = v, v = n;
          }
          yf(r, !0, u, null, g);
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
  function Wn(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Pi |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(c(153));
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
        om(r), en();
        break;
      case 5:
        Ye(r);
        break;
      case 1:
        Kt(r.type) && Fc(r);
        break;
      case 4:
        up(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, v = r.memoizedProps.value;
        bt(ci, f._currentValue), f._currentValue = v;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (bt($e, $e.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? mp(n, r, u) : (bt($e, $e.current & 1), n = Wn(n, r, u), n !== null ? n.sibling : null);
        bt($e, $e.current & 1);
        break;
      case 19:
        if (f = (u & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return Sp(n, r, u);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), bt($e, $e.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mo(n, r, u);
    }
    return Wn(n, r, u);
  }
  var Ns, go, Ra, bn;
  Ns = function(n, r) {
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
  }, Ra = function(n, r, u, f) {
    var v = n.memoizedProps;
    if (v !== f) {
      n = r.stateNode, oo(Za.current);
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
          typeof v.onClick != "function" && typeof f.onClick == "function" && (n.onclick = jc);
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
  function Ls(n, r) {
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
  function p0(n, r, u) {
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
        return Kt(r.type) && _a(), cr(r), null;
      case 3:
        return f = r.stateNode, xl(), Tt(on), Tt(qe), qc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Ic(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ca !== null && (Ps(Ca), Ca = null))), go(n, r), cr(r), null;
      case 5:
        ot(r);
        var v = oo(du.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Ra(n, r, u, f, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(c(166));
            return cr(r), null;
          }
          if (n = oo(Za.current), Ic(r)) {
            f = r.stateNode, u = r.type;
            var g = r.memoizedProps;
            switch (f[ui] = r, f[ao] = g, n = (r.mode & 1) !== 0, u) {
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
                for (v = 0; v < ms.length; v++)
                  Ft(ms[v], f);
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
                _ === "children" ? typeof D == "string" ? f.textContent !== D && (g.suppressHydrationWarning !== !0 && zc(f.textContent, D, n), v = ["children", D]) : typeof D == "number" && f.textContent !== "" + D && (g.suppressHydrationWarning !== !0 && zc(
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
                typeof g.onClick == "function" && (f.onclick = jc);
            }
            f = v, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            _ = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = _.createElement(u, { is: f.is }) : (n = _.createElement(u), u === "select" && (_ = n, f.multiple ? _.multiple = !0 : f.size && (_.size = f.size))) : n = _.createElementNS(n, u), n[ui] = r, n[ao] = f, Ns(n, r, !1, !1), r.stateNode = n;
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
                  for (v = 0; v < ms.length; v++)
                    Ft(ms[v], n);
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
                  g === "style" ? Ot(n, N) : g === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && al(n, N)) : g === "children" ? typeof N == "string" ? (u !== "textarea" || N !== "") && Ia(n, N) : typeof N == "number" && Ia(n, "" + N) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (h.hasOwnProperty(g) ? N != null && g === "onScroll" && Ft("scroll", n) : N != null && re(n, g, N, _));
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
                  typeof v.onClick == "function" && (n.onclick = jc);
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
          if (u = oo(du.current), oo(Za.current), Ic(r)) {
            if (f = r.stateNode, u = r.memoizedProps, f[ui] = r, (g = f.nodeValue !== u) && (n = aa, n !== null))
              switch (n.tag) {
                case 3:
                  zc(f.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && zc(f.nodeValue, u, (n.mode & 1) !== 0);
              }
            g && (r.flags |= 4);
          } else
            f = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(f), f[ui] = r, r.stateNode = f;
        }
        return cr(r), null;
      case 13:
        if (Tt($e), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if ($t && Fr !== null && r.mode & 1 && !(r.flags & 128))
            Qv(), en(), r.flags |= 98560, g = !1;
          else if (g = Ic(r), f !== null && f.dehydrated !== null) {
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
            Ca !== null && (Ps(Ca), Ca = null), g = !0;
          if (!g)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || $e.current & 1 ? Dn === 0 && (Dn = 3) : kp())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return xl(), go(n, r), n === null && ou(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return Sl(r.type._context), cr(r), null;
      case 17:
        return Kt(r.type) && _a(), cr(r), null;
      case 19:
        if (Tt($e), g = r.memoizedState, g === null)
          return cr(r), null;
        if (f = (r.flags & 128) !== 0, _ = g.rendering, _ === null)
          if (f)
            Ls(g, !1);
          else {
            if (Dn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (_ = tn(n), _ !== null) {
                  for (r.flags |= 128, Ls(g, !1), f = _.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = u, u = r.child; u !== null; )
                    g = u, n = f, g.flags &= 14680066, _ = g.alternate, _ === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = _.childLanes, g.lanes = _.lanes, g.child = _.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = _.memoizedProps, g.memoizedState = _.memoizedState, g.updateQueue = _.updateQueue, g.type = _.type, n = _.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return bt($e, $e.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            g.tail !== null && Et() > Tu && (r.flags |= 128, f = !0, Ls(g, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = tn(_), n !== null) {
              if (r.flags |= 128, f = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Ls(g, !0), g.tail === null && g.tailMode === "hidden" && !_.alternate && !$t)
                return cr(r), null;
            } else
              2 * Et() - g.renderingStartTime > Tu && u !== 1073741824 && (r.flags |= 128, f = !0, Ls(g, !1), r.lanes = 4194304);
          g.isBackwards ? (_.sibling = r.child, r.child = _) : (u = g.last, u !== null ? u.sibling = _ : r.child = _, g.last = _);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = Et(), r.sibling = null, u = $e.current, bt($e, f ? u & 1 | 2 : u & 1), r) : (cr(r), null);
      case 22:
      case 23:
        return Dp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? oa & 1073741824 && (cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : cr(r), null;
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
        return Kt(r.type) && _a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), Tt(on), Tt(qe), qc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
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
        return xl(), null;
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
  var Us = !1, Rn = !1, um = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function Su(n, r) {
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
  function As(n, r, u) {
    try {
      u();
    } catch (f) {
      sn(n, r, f);
    }
  }
  var sm = !1;
  function cm(n, r) {
    if (Bd = Kl, n = Oc(), Mi(n)) {
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
                for (var Ee; ie !== u || v !== 0 && ie.nodeType !== 3 || (D = _ + v), ie !== g || f !== 0 && ie.nodeType !== 3 || (N = _ + f), ie.nodeType === 3 && (_ += ie.nodeValue.length), (Ee = ie.firstChild) !== null; )
                  te = ie, ie = Ee;
                for (; ; ) {
                  if (ie === n)
                    break t;
                  if (te === u && ++B === v && (D = _), te === g && ++ne === f && (N = _), (Ee = ie.nextSibling) !== null)
                    break;
                  ie = te, te = ie.parentNode;
                }
                ie = Ee;
              }
            u = D === -1 || N === -1 ? null : { start: D, end: N };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (no = { focusedElem: n, selectionRange: u }, Kl = !1, Te = r; Te !== null; )
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
    return Re = sm, sm = !1, Re;
  }
  function zs(n, r, u) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var v = f = f.next;
      do {
        if ((v.tag & n) === n) {
          var g = v.destroy;
          v.destroy = void 0, g !== void 0 && As(r, u, g);
        }
        v = v.next;
      } while (v !== f);
    }
  }
  function js(n, r) {
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
  function wp(n) {
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
  function _p(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, _p(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ui], delete r[ao], delete r[Qd], delete r[l0], delete r[qd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function fm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function gf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || fm(n.return))
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
  function Eu(n, r, u) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = jc));
    else if (f !== 4 && (n = n.child, n !== null))
      for (Eu(n, r, u), n = n.sibling; n !== null; )
        Eu(n, r, u), n = n.sibling;
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
      wu(n, r, u), u = u.sibling;
  }
  function wu(n, r, u) {
    if ($a && typeof $a.onCommitFiberUnmount == "function")
      try {
        $a.onCommitFiberUnmount(es, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Rn || Su(u, r);
      case 6:
        var f = Xt, v = Fn;
        Xt = null, Da(n, r, u), Xt = f, Fn = v, Xt !== null && (Fn ? (n = Xt, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : Xt.removeChild(u.stateNode));
        break;
      case 18:
        Xt !== null && (Fn ? (n = Xt, u = u.stateNode, n.nodeType === 8 ? pl(n.parentNode, u) : n.nodeType === 1 && pl(n, u), is(n)) : pl(Xt, u.stateNode));
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
            g = g.tag, _ !== void 0 && (g & 2 || g & 4) && As(u, r, _), v = v.next;
          } while (v !== f);
        }
        Da(n, r, u);
        break;
      case 1:
        if (!Rn && (Su(u, r), f = u.stateNode, typeof f.componentWillUnmount == "function"))
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
  function Hi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new um()), r.forEach(function(f) {
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
          wu(g, _, v), Xt = null, Fn = !1;
          var N = v.alternate;
          N !== null && (N.return = null), v.return = null;
        } catch (B) {
          sn(v, r, B);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        dm(r, n), r = r.sibling;
  }
  function dm(n, r) {
    var u = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ka(r, n), pi(n), f & 4) {
          try {
            zs(3, n, n.return), js(3, n);
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
          try {
            zs(5, n, n.return);
          } catch (Oe) {
            sn(n, n.return, Oe);
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
                ne === "style" ? Ot(v, ie) : ne === "dangerouslySetInnerHTML" ? al(v, ie) : ne === "children" ? Ia(v, ie) : re(v, ne, ie, B);
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
                  var Ee = g.value;
                  Ee != null ? ii(v, !!g.multiple, Ee, !1) : te !== !!g.multiple && (g.defaultValue != null ? ii(
                    v,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  ) : ii(v, !!g.multiple, g.multiple ? [] : "", !1));
              }
              v[ao] = g;
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
            is(r.containerInfo);
          } catch (Oe) {
            sn(n, n.return, Oe);
          }
        break;
      case 4:
        Ka(r, n), pi(n);
        break;
      case 13:
        Ka(r, n), pi(n), v = n.child, v.flags & 8192 && (g = v.memoizedState !== null, v.stateNode.isHidden = g, !g || v.alternate !== null && v.alternate.memoizedState !== null || (Tp = Et())), f & 4 && Hi(n);
        break;
      case 22:
        if (ne = u !== null && u.memoizedState !== null, n.mode & 1 ? (Rn = (B = Rn) || ne, Ka(r, n), Rn = B) : Ka(r, n), pi(n), f & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !ne && n.mode & 1)
            for (Te = n, ne = n.child; ne !== null; ) {
              for (ie = Te = ne; Te !== null; ) {
                switch (te = Te, Ee = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    zs(4, te, te.return);
                    break;
                  case 1:
                    Su(te, te.return);
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
                    Su(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      xp(ie);
                      continue;
                    }
                }
                Ee !== null ? (Ee.return = te, Te = Ee) : xp(ie);
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
            if (fm(u)) {
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
            var g = gf(n);
            di(n, g, v);
            break;
          case 3:
          case 4:
            var _ = f.stateNode.containerInfo, D = gf(n);
            Eu(n, D, _);
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
  function pm(n, r, u) {
    Te = n, _u(n);
  }
  function _u(n, r, u) {
    for (var f = (n.mode & 1) !== 0; Te !== null; ) {
      var v = Te, g = v.child;
      if (v.tag === 22 && f) {
        var _ = v.memoizedState !== null || Us;
        if (!_) {
          var D = v.alternate, N = D !== null && D.memoizedState !== null || Rn;
          D = Us;
          var B = Rn;
          if (Us = _, (Rn = N) && !B)
            for (Te = v; Te !== null; )
              _ = Te, N = _.child, _.tag === 22 && _.memoizedState !== null ? vm(v) : N !== null ? (N.return = _, Te = N) : vm(v);
          for (; g !== null; )
            Te = g, _u(g), g = g.sibling;
          Te = v, Us = D, Rn = B;
        }
        hm(n);
      } else
        v.subtreeFlags & 8772 && g !== null ? (g.return = v, Te = g) : hm(n);
    }
  }
  function hm(n) {
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
                Rn || js(5, r);
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
                g !== null && lo(r, g, f);
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
                      ie !== null && is(ie);
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
          Rn || r.flags & 512 && wp(r);
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
  function xp(n) {
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
  function vm(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              js(4, r);
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
              wp(r);
            } catch (N) {
              sn(r, g, N);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              wp(r);
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
  var Sf = Math.ceil, Fs = se.ReactCurrentDispatcher, Cp = se.ReactCurrentOwner, fr = se.ReactCurrentBatchConfig, ct = 0, nn = null, un = null, Hn = 0, oa = 0, xu = tt(0), Dn = 0, Hs = null, Pi = 0, Ef = 0, Cu = 0, So = null, yr = null, Tp = 0, Tu = 1 / 0, Yi = null, wf = !1, Eo = null, hi = null, Rl = !1, Dl = null, _f = 0, bu = 0, xf = null, wo = -1, _o = 0;
  function dr() {
    return ct & 6 ? Et() : wo !== -1 ? wo : wo = Et();
  }
  function En(n) {
    return n.mode & 1 ? ct & 2 && Hn !== 0 ? Hn & -Hn : Vc.transition !== null ? (_o === 0 && (_o = Sc()), _o) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Td(n.type)), n) : 1;
  }
  function pr(n, r, u, f) {
    if (50 < bu)
      throw bu = 0, xf = null, Error(c(185));
    Zl(n, u, f), (!(ct & 2) || n !== nn) && (n === nn && (!(ct & 2) && (Ef |= u), Dn === 4 && ka(n, Hn)), hr(n, f), u === 1 && ct === 0 && !(r.mode & 1) && (Tu = Et() + 500, zn && Ar()));
  }
  function hr(n, r) {
    var u = n.callbackNode;
    gc(n, r);
    var f = Ba(n, n === nn ? Hn : 0);
    if (f === 0)
      u !== null && mr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (u != null && mr(u), r === 1)
        n.tag === 0 ? Kd(mm.bind(null, n)) : Zd(mm.bind(null, n)), Gd(function() {
          !(ct & 6) && Ar();
        }), u = null;
      else {
        switch (_d(f)) {
          case 1:
            u = bi;
            break;
          case 4:
            u = st;
            break;
          case 16:
            u = ul;
            break;
          case 536870912:
            u = gd;
            break;
          default:
            u = ul;
        }
        u = Op(u, Ru.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function Ru(n, r) {
    if (wo = -1, _o = 0, ct & 6)
      throw Error(c(327));
    var u = n.callbackNode;
    if (ku() && n.callbackNode !== u)
      return null;
    var f = Ba(n, n === nn ? Hn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = Tf(n, f);
    else {
      r = f;
      var v = ct;
      ct |= 2;
      var g = Cf();
      (nn !== n || Hn !== r) && (Yi = null, Tu = Et() + 500, xo(n, r));
      do
        try {
          v0();
          break;
        } catch (D) {
          ym(n, D);
        }
      while (1);
      rp(), Fs.current = g, ct = v, un !== null ? r = 0 : (nn = null, Hn = 0, r = Dn);
    }
    if (r !== 0) {
      if (r === 2 && (v = Ed(n), v !== 0 && (f = v, r = bp(n, v))), r === 1)
        throw u = Hs, xo(n, 0), ka(n, f), hr(n, Et()), u;
      if (r === 6)
        ka(n, f);
      else {
        if (v = n.current.alternate, !(f & 30) && !Rp(v) && (r = Tf(n, f), r === 2 && (g = Ed(n), g !== 0 && (f = g, r = bp(n, g))), r === 1))
          throw u = Hs, xo(n, 0), ka(n, f), hr(n, Et()), u;
        switch (n.finishedWork = v, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Co(n, yr, Yi);
            break;
          case 3:
            if (ka(n, f), (f & 130023424) === f && (r = Tp + 500 - Et(), 10 < r)) {
              if (Ba(n, 0) !== 0)
                break;
              if (v = n.suspendedLanes, (v & f) !== f) {
                dr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = ro(Co.bind(null, n, yr, Yi), r);
              break;
            }
            Co(n, yr, Yi);
            break;
          case 4:
            if (ka(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, v = -1; 0 < f; ) {
              var _ = 31 - ma(f);
              g = 1 << _, _ = r[_], _ > v && (v = _), f &= ~g;
            }
            if (f = v, f = Et() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Sf(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = ro(Co.bind(null, n, yr, Yi), f);
              break;
            }
            Co(n, yr, Yi);
            break;
          case 5:
            Co(n, yr, Yi);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return hr(n, Et()), n.callbackNode === u ? Ru.bind(null, n) : null;
  }
  function bp(n, r) {
    var u = So;
    return n.current.memoizedState.isDehydrated && (xo(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = yr, yr = u, r !== null && Ps(r)), n;
  }
  function Ps(n) {
    yr === null ? yr = n : yr.push.apply(yr, n);
  }
  function Rp(n) {
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
    for (r &= ~Cu, r &= ~Ef, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - ma(r), f = 1 << u;
      n[u] = -1, r &= ~f;
    }
  }
  function mm(n) {
    if (ct & 6)
      throw Error(c(327));
    ku();
    var r = Ba(n, 0);
    if (!(r & 1))
      return hr(n, Et()), null;
    var u = Tf(n, r);
    if (n.tag !== 0 && u === 2) {
      var f = Ed(n);
      f !== 0 && (r = f, u = bp(n, f));
    }
    if (u === 1)
      throw u = Hs, xo(n, 0), ka(n, r), hr(n, Et()), u;
    if (u === 6)
      throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Co(n, yr, Yi), hr(n, Et()), null;
  }
  function Du(n, r) {
    var u = ct;
    ct |= 1;
    try {
      return n(r);
    } finally {
      ct = u, ct === 0 && (Tu = Et() + 500, zn && Ar());
    }
  }
  function kl(n) {
    Dl !== null && Dl.tag === 0 && !(ct & 6) && ku();
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
  function Dp() {
    oa = xu.current, Tt(xu);
  }
  function xo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, $v(u)), un !== null)
      for (u = un.return; u !== null; ) {
        var f = u;
        switch (Jd(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && _a();
            break;
          case 3:
            xl(), Tt(on), Tt(qe), qc();
            break;
          case 5:
            ot(f);
            break;
          case 4:
            xl();
            break;
          case 13:
            Tt($e);
            break;
          case 19:
            Tt($e);
            break;
          case 10:
            Sl(f.type._context);
            break;
          case 22:
          case 23:
            Dp();
        }
        u = u.return;
      }
    if (nn = n, un = n = Ml(n.current, null), Hn = oa = r, Dn = 0, Hs = null, Cu = Ef = Pi = 0, yr = So = null, Bn !== null) {
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
  function ym(n, r) {
    do {
      var u = un;
      try {
        if (rp(), Zc.current = pf, We) {
          for (var f = Bt.memoizedState; f !== null; ) {
            var v = f.queue;
            v !== null && (v.pending = null), f = f.next;
          }
          We = !1;
        }
        if (uo = 0, pt = Z = Bt = null, fi = !1, la = 0, Cp.current = null, u === null || u.return === null) {
          Dn = 1, Hs = r, un = null;
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
            var Ee = dp(_);
            if (Ee !== null) {
              Ee.flags &= -257, pp(Ee, _, D, g, r), Ee.mode & 1 && im(g, B, r), r = Ee, N = B;
              var Re = r.updateQueue;
              if (Re === null) {
                var Oe = /* @__PURE__ */ new Set();
                Oe.add(N), r.updateQueue = Oe;
              } else
                Re.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                im(g, B, r), kp();
                break e;
              }
              N = Error(c(426));
            }
          } else if ($t && D.mode & 1) {
            var hn = dp(_);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), pp(hn, _, D, g, r), tp(mu(N, D));
              break e;
            }
          }
          g = N = mu(N, D), Dn !== 4 && (Dn = 2), So === null ? So = [g] : So.push(g), g = _;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var F = am(g, N, r);
                lp(g, F);
                break e;
              case 1:
                D = N;
                var U = g.type, Y = g.stateNode;
                if (!(g.flags & 128) && (typeof U.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (hi === null || !hi.has(Y)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var ue = Os(g, D, r);
                  lp(g, ue);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Mp(u);
      } catch (Ne) {
        r = Ne, un === u && u !== null && (un = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Cf() {
    var n = Fs.current;
    return Fs.current = pf, n === null ? pf : n;
  }
  function kp() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), nn === null || !(Pi & 268435455) && !(Ef & 268435455) || ka(nn, Hn);
  }
  function Tf(n, r) {
    var u = ct;
    ct |= 2;
    var f = Cf();
    (nn !== n || Hn !== r) && (Yi = null, xo(n, r));
    do
      try {
        h0();
        break;
      } catch (v) {
        ym(n, v);
      }
    while (1);
    if (rp(), ct = u, Fs.current = f, un !== null)
      throw Error(c(261));
    return nn = null, Hn = 0, Dn;
  }
  function h0() {
    for (; un !== null; )
      gm(un);
  }
  function v0() {
    for (; un !== null && !ol(); )
      gm(un);
  }
  function gm(n) {
    var r = Em(n.alternate, n, oa);
    n.memoizedProps = n.pendingProps, r === null ? Mp(n) : un = r, Cp.current = null;
  }
  function Mp(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = Ep(u, r), u !== null) {
          u.flags &= 32767, un = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Dn = 6, un = null;
          return;
        }
      } else if (u = p0(u, r, oa), u !== null) {
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
  function Co(n, r, u) {
    var f = Nt, v = fr.transition;
    try {
      fr.transition = null, Nt = 1, m0(n, r, u, f);
    } finally {
      fr.transition = v, Nt = f;
    }
    return null;
  }
  function m0(n, r, u, f) {
    do
      ku();
    while (Dl !== null);
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
    if (Ig(n, g), n === nn && (un = nn = null, Hn = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Rl || (Rl = !0, Op(ul, function() {
      return ku(), null;
    })), g = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || g) {
      g = fr.transition, fr.transition = null;
      var _ = Nt;
      Nt = 1;
      var D = ct;
      ct |= 4, Cp.current = null, cm(n, u), dm(u, n), Nc(no), Kl = !!Bd, no = Bd = null, n.current = u, pm(u), mc(), ct = D, Nt = _, fr.transition = g;
    } else
      n.current = u;
    if (Rl && (Rl = !1, Dl = n, _f = v), g = n.pendingLanes, g === 0 && (hi = null), av(u.stateNode), hr(n, Et()), r !== null)
      for (f = n.onRecoverableError, u = 0; u < r.length; u++)
        v = r[u], f(v.value, { componentStack: v.stack, digest: v.digest });
    if (wf)
      throw wf = !1, n = Eo, Eo = null, n;
    return _f & 1 && n.tag !== 0 && ku(), g = n.pendingLanes, g & 1 ? n === xf ? bu++ : (bu = 0, xf = n) : bu = 0, Ar(), null;
  }
  function ku() {
    if (Dl !== null) {
      var n = _d(_f), r = fr.transition, u = Nt;
      try {
        if (fr.transition = null, Nt = 16 > n ? 16 : n, Dl === null)
          var f = !1;
        else {
          if (n = Dl, Dl = null, _f = 0, ct & 6)
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
                        zs(8, ne, g);
                    }
                    var ie = ne.child;
                    if (ie !== null)
                      ie.return = ne, Te = ie;
                    else
                      for (; Te !== null; ) {
                        ne = Te;
                        var te = ne.sibling, Ee = ne.return;
                        if (_p(ne), ne === B) {
                          Te = null;
                          break;
                        }
                        if (te !== null) {
                          te.return = Ee, Te = te;
                          break;
                        }
                        Te = Ee;
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
                        zs(9, g, g.return);
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
                          js(9, D);
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
              $a.onPostCommitFiberRoot(es, n);
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
  function Sm(n, r, u) {
    r = mu(u, r), r = am(n, r, 1), n = wl(n, r, 1), r = dr(), n !== null && (Zl(n, 1, r), hr(n, r));
  }
  function sn(n, r, u) {
    if (n.tag === 3)
      Sm(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Sm(r, n, u);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (hi === null || !hi.has(f))) {
            n = mu(u, n), n = Os(r, n, 1), r = wl(r, n, 1), n = dr(), r !== null && (Zl(r, 1, n), hr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function y0(n, r, u) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & u, nn === n && (Hn & u) === u && (Dn === 4 || Dn === 3 && (Hn & 130023424) === Hn && 500 > Et() - Tp ? xo(n, 0) : Cu |= u), hr(n, r);
  }
  function bf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ko, Ko <<= 1, !(Ko & 130023424) && (Ko = 4194304)) : r = 1);
    var u = dr();
    n = Ai(n, r), n !== null && (Zl(n, r, u), hr(n, u));
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
        throw Error(c(314));
    }
    f !== null && f.delete(r), bf(n, u);
  }
  var Em;
  Em = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || on.current)
        Sn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Sn = !1, Fi(n, r, u);
        Sn = !!(n.flags & 131072);
      }
    else
      Sn = !1, $t && r.flags & 1048576 && Xd(r, su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        sr(n, r), n = r.pendingProps;
        var v = wa(r, qe.current);
        pe(r, u), v = Cl(null, r, f, n, v, u);
        var g = fo();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kt(f) ? (g = !0, Fc(r)) : g = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, ip(r), v.updater = Wc, r.stateNode = v, v._reactInternals = r, Gc(r, f, n, u), r = lm(null, r, f, !0, g, u)) : (r.tag = 0, $t && g && Hc(r), Tn(null, r, v, u), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (sr(n, r), n = r.pendingProps, v = f._init, f = v(f._payload), r.type = f, v = r.tag = w0(f), n = ia(f, n), v) {
            case 0:
              r = yu(null, r, f, n, u);
              break e;
            case 1:
              r = hp(null, r, f, n, u);
              break e;
            case 11:
              r = bl(null, r, f, n, u);
              break e;
            case 14:
              r = vf(null, r, f, ia(f.type, n), u);
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
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), yu(n, r, f, v, u);
      case 1:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), hp(n, r, f, v, u);
      case 3:
        e: {
          if (om(r), n === null)
            throw Error(c(387));
          f = r.pendingProps, g = r.memoizedState, v = g.element, Cn(n, r), _l(r, f, null, u);
          var _ = r.memoizedState;
          if (f = _.element, g.isDehydrated)
            if (g = { element: f, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
              v = mu(Error(c(423)), r), r = mf(n, r, f, u, v);
              break e;
            } else if (f !== v) {
              v = mu(Error(c(424)), r), r = mf(n, r, f, u, v);
              break e;
            } else
              for (Fr = qa(r.stateNode.containerInfo.firstChild), aa = r, $t = !0, Ca = null, u = nm(r, null, f, u), r.child = u; u; )
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
        return Ye(r), n === null && Yc(r), f = r.type, v = r.pendingProps, g = n !== null ? n.memoizedProps : null, _ = v.children, Ss(f, v) ? _ = null : g !== null && Ss(f, g) && (r.flags |= 32), nt(n, r), Tn(n, r, _, u), r.child;
      case 6:
        return n === null && Yc(r), null;
      case 13:
        return mp(n, r, u);
      case 4:
        return up(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = fu(r, null, f, u) : Tn(n, r, f, u), r.child;
      case 11:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), bl(n, r, f, v, u);
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
                        N = zi(-1, u & -u), N.tag = 2;
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
        return v = r.type, f = r.pendingProps.children, pe(r, u), v = pn(v), f = f(v), r.flags |= 1, Tn(n, r, f, u), r.child;
      case 14:
        return f = r.type, v = ia(f, r.pendingProps), v = ia(f.type, v), vf(n, r, f, v, u);
      case 15:
        return Yr(n, r, r.type, r.pendingProps, u);
      case 17:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), sr(n, r), r.tag = 1, Kt(f) ? (n = !0, Fc(r)) : n = !1, pe(r, u), Xv(r, f, v), Gc(r, f, v, u), lm(null, r, f, !0, n, u);
      case 19:
        return Sp(n, r, u);
      case 22:
        return mo(n, r, u);
    }
    throw Error(c(156, r.tag));
  };
  function Op(n, r) {
    return Zt(n, r);
  }
  function E0(n, r, u, f) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ma(n, r, u, f) {
    return new E0(n, r, u, f);
  }
  function Np(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function w0(n) {
    if (typeof n == "function")
      return Np(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Mt)
        return 11;
      if (n === Qt)
        return 14;
    }
    return 2;
  }
  function Ml(n, r) {
    var u = n.alternate;
    return u === null ? (u = Ma(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Rf(n, r, u, f, v, g) {
    var _ = 2;
    if (f = n, typeof n == "function")
      Np(n) && (_ = 1);
    else if (typeof n == "string")
      _ = 5;
    else
      e:
        switch (n) {
          case ee:
            return To(u.children, v, g, r);
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
            return Ys(u, v, g, r);
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
  function To(n, r, u, f) {
    return n = Ma(7, n, f, r), n.lanes = u, n;
  }
  function Ys(n, r, u, f) {
    return n = Ma(22, n, f, r), n.elementType = fn, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Is(n, r, u) {
    return n = Ma(6, n, null, r), n.lanes = u, n;
  }
  function bo(n, r, u) {
    return r = Ma(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function _0(n, r, u, f, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wd(0), this.expirationTimes = wd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wd(0), this.identifierPrefix = f, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Df(n, r, u, f, v, g, _, D, N) {
    return n = new _0(n, r, u, D, N), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Ma(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ip(g), n;
  }
  function wm(n, r, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: u };
  }
  function Lp(n) {
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
        return _s(n, u, r);
    }
    return r;
  }
  function _m(n, r, u, f, v, g, _, D, N) {
    return n = Df(u, f, !0, n, v, g, _, D, N), n.context = Lp(null), u = n.current, f = dr(), v = En(u), g = zi(f, v), g.callback = r ?? null, wl(u, g, v), n.current.lanes = v, Zl(n, v, f), hr(n, f), n;
  }
  function Vs(n, r, u, f) {
    var v = r.current, g = dr(), _ = En(v);
    return u = Lp(u), r.context === null ? r.context = u : r.pendingContext = u, r = zi(g, _), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = wl(v, r, _), n !== null && (pr(n, v, _, g), Bc(n, v, _)), _;
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
  function xm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function Up(n, r) {
    xm(n, r), (n = n.alternate) && xm(n, r);
  }
  function Cm() {
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
      throw Error(c(409));
    Vs(n, r, null, null);
  }, Ii.prototype.unmount = Mf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      kl(function() {
        Vs(null, n, null, null);
      }), r[Li] = null;
    }
  };
  function Ii(n) {
    this._internalRoot = n;
  }
  Ii.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = uv();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Lt.length && r !== 0 && r < Lt[u].priority; u++)
        ;
      Lt.splice(u, 0, n), u === 0 && sv(n);
    }
  };
  function zp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Tm() {
  }
  function x0(n, r, u, f, v) {
    if (v) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var B = kf(_);
          g.call(B);
        };
      }
      var _ = _m(r, f, n, 0, null, !1, !1, "", Tm);
      return n._reactRootContainer = _, n[Li] = _.current, ou(n.nodeType === 8 ? n.parentNode : n), kl(), _;
    }
    for (; v = n.lastChild; )
      n.removeChild(v);
    if (typeof f == "function") {
      var D = f;
      f = function() {
        var B = kf(N);
        D.call(B);
      };
    }
    var N = Df(n, 0, !1, null, null, !1, !1, "", Tm);
    return n._reactRootContainer = N, n[Li] = N.current, ou(n.nodeType === 8 ? n.parentNode : n), kl(function() {
      Vs(r, N, u, f);
    }), N;
  }
  function Nf(n, r, u, f, v) {
    var g = u._reactRootContainer;
    if (g) {
      var _ = g;
      if (typeof v == "function") {
        var D = v;
        v = function() {
          var N = kf(_);
          D.call(N);
        };
      }
      Vs(r, _, n, v);
    } else
      _ = x0(u, r, n, v, f);
    return kf(_);
  }
  ov = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ql(r.pendingLanes);
          u !== 0 && (ts(r, u | 1), hr(r, Et()), !(ct & 6) && (Tu = Et() + 500, Ar()));
        }
        break;
      case 13:
        kl(function() {
          var f = Ai(n, 1);
          if (f !== null) {
            var v = dr();
            pr(f, n, 1, v);
          }
        }), Up(n, 1);
    }
  }, Ec = function(n) {
    if (n.tag === 13) {
      var r = Ai(n, 134217728);
      if (r !== null) {
        var u = dr();
        pr(r, n, 134217728, u);
      }
      Up(n, 134217728);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = En(n), u = Ai(n, r);
      if (u !== null) {
        var f = dr();
        pr(u, n, r, f);
      }
      Up(n, r);
    }
  }, uv = function() {
    return Nt;
  }, xd = function(n, r) {
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
  }, Ju = Du, vc = kl;
  var C0 = { usingClientEntryPoint: !1, Events: [ws, uu, je, Wl, Qo, Du] }, Mu = { findFiberByHostInstance: Ea, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, T0 = { bundleType: Mu.bundleType, version: Mu.version, rendererPackageName: Mu.rendererPackageName, rendererConfig: Mu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Mu.findFiberByHostInstance || Cm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lf.isDisabled && Lf.supportsFiber)
      try {
        es = Lf.inject(T0), $a = Lf;
      } catch {
      }
  }
  return za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0, za.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zp(r))
      throw Error(c(200));
    return wm(n, r, null, u);
  }, za.createRoot = function(n, r) {
    if (!zp(n))
      throw Error(c(299));
    var u = !1, f = "", v = Ap;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = Df(n, 1, !1, null, null, u, !1, f, v), n[Li] = r.current, ou(n.nodeType === 8 ? n.parentNode : n), new Mf(r);
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
  }, za.hydrate = function(n, r, u) {
    if (!Of(r))
      throw Error(c(200));
    return Nf(null, n, r, !0, u);
  }, za.hydrateRoot = function(n, r, u) {
    if (!zp(n))
      throw Error(c(405));
    var f = u != null && u.hydratedSources || null, v = !1, g = "", _ = Ap;
    if (u != null && (u.unstable_strictMode === !0 && (v = !0), u.identifierPrefix !== void 0 && (g = u.identifierPrefix), u.onRecoverableError !== void 0 && (_ = u.onRecoverableError)), r = _m(r, null, n, 1, u ?? null, v, !1, g, _), n[Li] = r.current, ou(n), f)
      for (n = 0; n < f.length; n++)
        u = f[n], v = u._getVersion, v = v(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, v] : r.mutableSourceEagerHydrationData.push(
          u,
          v
        );
    return new Ii(r);
  }, za.render = function(n, r, u) {
    if (!Of(r))
      throw Error(c(200));
    return Nf(null, n, r, !1, u);
  }, za.unmountComponentAtNode = function(n) {
    if (!Of(n))
      throw Error(c(40));
    return n._reactRootContainer ? (kl(function() {
      Nf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Li] = null;
      });
    }), !0) : !1;
  }, za.unstable_batchedUpdates = Du, za.unstable_renderSubtreeIntoContainer = function(n, r, u, f) {
    if (!Of(u))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Nf(n, r, u, !1, f);
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
var YT;
function Kj() {
  return YT || (YT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = kr, o = yR(), c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = !1;
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
    var T = 0, R = 1, k = 2, O = 3, j = 4, G = 5, z = 6, J = 7, ve = 8, Se = 9, K = 10, re = 11, se = 12, ce = 13, W = 14, ee = 15, Me = 16, He = 17, Qe = 18, it = 19, Mt = 21, Be = 22, Ke = 23, Qt = 24, gt = 25, fn = !0, de = !1, Ue = !1, _e = !1, St = !1, Ct = !0, In = !1, vr = !1, ri = !0, _n = !0, pa = !0, rr = /* @__PURE__ */ new Set(), Mr = {}, ai = {};
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
    function Ti(e, t) {
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
    var li = 0, Kr = 1, Ya = 2, mn = 3, Xr = 4, al = 5, Ia = 6, me = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ze = me + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + me + "][" + ze + "]*$"), Ot = {}, Jt = {};
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
          case al:
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
    var Yt = {}, Go = [
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
      var t = e.replace(Wl, Qo);
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
      var t = e.replace(Wl, Qo);
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
    var Ju = "xlinkHref";
    Yt[Ju] = new zt(
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
    var vc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Gl = !1;
    function qo(e) {
      !Gl && vc.test(e) && (Gl = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, a, l) {
      if (l.mustUseProperty) {
        var s = l.propertyName;
        return e[s];
      } else {
        va(a, t), l.sanitizeURL && qo("" + a);
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
    function Zo(e, t, a, l) {
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
          A === mn || A === Xr && a === !0 ? L = "" : (va(a, x), L = "" + a, s.sanitizeURL && qo(L.toString())), b ? e.setAttributeNS(b, x, L) : e.setAttribute(x, L);
        }
      }
    }
    var il = Symbol.for("react.element"), ea = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), ll = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), ye = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), rt = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), qt = Symbol.for("react.debug_trace_mode"), Zt = Symbol.for("react.offscreen"), mr = Symbol.for("react.legacy_hidden"), ol = Symbol.for("react.cache"), mc = Symbol.for("react.tracing_marker"), Et = Symbol.iterator, Pg = "@@iterator";
    function bi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Et && e[Et] || e[Pg];
      return typeof t == "function" ? t : null;
    }
    var st = Object.assign, ul = 0, rv, gd, es, $a, av, ma, iv;
    function lv() {
    }
    lv.__reactDisabledLog = !0;
    function Yg() {
      {
        if (ul === 0) {
          rv = console.log, gd = console.info, es = console.warn, $a = console.error, av = console.group, ma = console.groupCollapsed, iv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: lv,
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
              value: rv
            }),
            info: st({}, e, {
              value: gd
            }),
            warn: st({}, e, {
              value: es
            }),
            error: st({}, e, {
              value: $a
            }),
            group: st({}, e, {
              value: av
            }),
            groupCollapsed: st({}, e, {
              value: ma
            }),
            groupEnd: st({}, e, {
              value: iv
            })
          });
        }
        ul < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ko = c.ReactCurrentDispatcher, ql;
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
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && gc.set(e, A), A;
                  }
                while (x >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Sd = !1, Ko.current = p, yc(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", V = L ? Ba(L) : "";
      return typeof e == "function" && gc.set(e, V), V;
    }
    function wd(e, t, a) {
      return Sc(e, !0);
    }
    function Zl(e, t, a) {
      return Sc(e, !1);
    }
    function Ig(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ts(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Sc(e, Ig(e));
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
            return Zl(e.render);
          case at:
            return ts(e.type, t, a);
          case Ve: {
            var l = e, s = l._payload, p = l._init;
            try {
              return ts(p(s), t, a);
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
          return Zl(e.type);
        case re:
          return Zl(e.type.render);
        case R:
          return wd(e.type);
        default:
          return "";
      }
    }
    function _d(e) {
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
    function ov(e, t, a) {
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
        case rt:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ye:
            var t = e;
            return Ec(t) + ".Consumer";
          case ae:
            var a = e;
            return Ec(a._context) + ".Provider";
          case Pe:
            return ov(e, e.render, "ForwardRef");
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
    function uv(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function xd(e) {
      return e.displayName || "Context";
    }
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Qt:
          return "Cache";
        case Se:
          var l = a;
          return xd(l) + ".Consumer";
        case K:
          var s = a;
          return xd(s._context) + ".Provider";
        case Qe:
          return "DehydratedFragment";
        case re:
          return uv(a, a.render, "ForwardRef");
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
        case ve:
          return a === ll ? "StrictMode" : "Mode";
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
    var ns = c.ReactDebugCurrentFrame, yn = null, ya = !1;
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
    function rs() {
      return yn === null ? "" : _d(yn);
    }
    function xn() {
      ns.getCurrentStack = null, yn = null, ya = !1;
    }
    function Lt(e) {
      ns.getCurrentStack = e === null ? null : rs, yn = e, ya = !1;
    }
    function Vg() {
      return yn;
    }
    function Wa(e) {
      ya = e;
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
          return Zr(e), e;
        default:
          return "";
      }
    }
    var sv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Xo(e, t) {
      sv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Cd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function cv(e) {
      return e._valueTracker;
    }
    function as(e) {
      e._valueTracker = null;
    }
    function is(e) {
      var t = "";
      return e && (Cd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Jo(e) {
      var t = Cd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
            as(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Kl(e) {
      cv(e) || (e._valueTracker = Jo(e));
    }
    function fv(e) {
      if (!e)
        return !1;
      var t = cv(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = is(e);
      return l !== a ? (t.setValue(l), !0) : !1;
    }
    function wc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var _c = !1, ls = !1, xc = !1, Td = !1;
    function Ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function os(e, t) {
      var a = e, l = t.checked, s = st({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? a._wrapperState.initialChecked
      });
      return s;
    }
    function us(e, t) {
      Xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ls && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), ls = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_c && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), _c = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: sl(t.value != null ? t.value : l),
        controlled: Ri(t)
      };
    }
    function bd(e, t) {
      var a = e, l = t.checked;
      l != null && oi(a, "checked", l, !1);
    }
    function eu(e, t) {
      var a = e;
      {
        var l = Ri(t);
        !a._wrapperState.controlled && l && !Td && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Td = !0), a._wrapperState.controlled && !l && !xc && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xc = !0);
      }
      bd(e, t);
      var s = sl(t.value), p = t.type;
      if (s != null)
        p === "number" ? (s === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != s) && (a.value = or(s)) : a.value !== or(s) && (a.value = or(s));
      else if (p === "submit" || p === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? cl(a, t.type, s) : t.hasOwnProperty("defaultValue") && cl(a, t.type, sl(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ss(e, t, a) {
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
    function dv(e, t) {
      var a = e;
      eu(a, t), ta(a, t);
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
            var E = Im(y);
            if (!E)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fv(y), eu(y, E);
          }
        }
      }
    }
    function cl(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var Cc = !1, tu = !1, pv = !1;
    function Tc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || tu || (tu = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pv || (pv = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Cc && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Cc = !0);
    }
    function Rd(e, t) {
      t.value != null && e.setAttribute("value", or(sl(t.value)));
    }
    var cs = Array.isArray;
    function Un(e) {
      return cs(e);
    }
    var bc;
    bc = !1;
    function hv() {
      var e = ga();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var vv = ["value", "defaultValue"];
    function $g(e) {
      {
        Xo("select", e);
        for (var t = 0; t < vv.length; t++) {
          var a = vv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hv()) : !e.multiple && l && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hv());
          }
        }
      }
    }
    function fl(e, t, a, l) {
      var s = e.options;
      if (t) {
        for (var p = a, y = {}, E = 0; E < p.length; E++)
          y["$" + p[E]] = !0;
        for (var w = 0; w < s.length; w++) {
          var x = y.hasOwnProperty("$" + s[w].value);
          s[w].selected !== x && (s[w].selected = x), x && l && (s[w].defaultSelected = !0);
        }
      } else {
        for (var b = or(sl(a)), A = null, L = 0; L < s.length; L++) {
          if (s[L].value === b) {
            s[L].selected = !0, l && (s[L].defaultSelected = !0);
            return;
          }
          A === null && !s[L].disabled && (A = s[L]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function Dd(e, t) {
      return st({}, t, {
        value: void 0
      });
    }
    function mv(e, t) {
      var a = e;
      $g(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bc && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bc = !0);
    }
    function Bg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? fl(a, !!t.multiple, l, !1) : t.defaultValue != null && fl(a, !!t.multiple, t.defaultValue, !0);
    }
    function Wg(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? fl(a, !!t.multiple, s, !1) : l !== !!t.multiple && (t.defaultValue != null ? fl(a, !!t.multiple, t.defaultValue, !0) : fl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Gg(e, t) {
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
    function yv(e, t) {
      var a = e;
      Xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !kd && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component"), kd = !0);
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
        initialValue: sl(l)
      };
    }
    function gv(e, t) {
      var a = e, l = sl(t.value), s = sl(t.defaultValue);
      if (l != null) {
        var p = or(l);
        p !== a.value && (a.value = p), t.defaultValue == null && a.defaultValue !== p && (a.defaultValue = p);
      }
      s != null && (a.defaultValue = or(s));
    }
    function Sv(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Od(e, t) {
      gv(e, t);
    }
    var Di = "http://www.w3.org/1999/xhtml", Qg = "http://www.w3.org/1998/Math/MathML", Nd = "http://www.w3.org/2000/svg";
    function Rc(e) {
      switch (e) {
        case "svg":
          return Nd;
        case "math":
          return Qg;
        default:
          return Di;
      }
    }
    function Ld(e, t) {
      return e == null || e === Di ? Rc(t) : e === Nd && t === "foreignObject" ? Di : e;
    }
    var qg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, s);
        });
      } : e;
    }, Dc, Ev = qg(function(e, t) {
      if (e.namespaceURI === Nd && !("innerHTML" in e)) {
        Dc = Dc || document.createElement("div"), Dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Lr = 1, ki = 3, gn = 8, Ga = 9, Xl = 11, kc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, wv = {
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
    function _v(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(nu).forEach(function(e) {
      xv.forEach(function(t) {
        nu[_v(t, e)] = nu[e];
      });
    });
    function Mc(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(nu.hasOwnProperty(e) && nu[e]) ? t + "px" : (ii(t, e), ("" + t).trim());
    }
    var ru = /([A-Z])/g, Zg = /^ms-/;
    function Kg(e) {
      return e.replace(ru, "-$1").toLowerCase().replace(Zg, "-ms-");
    }
    var Cv = function() {
    };
    {
      var Tv = /^(?:webkit|moz|o)[A-Z]/, bv = /^-ms-/, fs = /-(.)/g, au = /;\s*$/, iu = {}, lu = {}, Rv = !1, Ud = !1, Ad = function(e) {
        return e.replace(fs, function(t, a) {
          return a.toUpperCase();
        });
      }, zd = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ad(e.replace(bv, "ms-"))
        ));
      }, Dv = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, kv = function(e, t) {
        lu.hasOwnProperty(t) && lu[t] || (lu[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(au, "")));
      }, Mv = function(e, t) {
        Rv || (Rv = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Xg = function(e, t) {
        Ud || (Ud = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Cv = function(e, t) {
        e.indexOf("-") > -1 ? zd(e) : Tv.test(e) ? Dv(e) : au.test(t) && kv(e, t), typeof t == "number" && (isNaN(t) ? Mv(e, t) : isFinite(t) || Xg(e, t));
      };
    }
    var Jg = Cv;
    function e0(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var s = e[l];
            if (s != null) {
              var p = l.indexOf("--") === 0;
              t += a + (p ? l : Kg(l)) + ":", t += Mc(l, s, p), a = ";";
            }
          }
        return t || null;
      }
    }
    function Ov(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var s = l.indexOf("--") === 0;
          s || Jg(l, t[l]);
          var p = Mc(l, t[l], s);
          l === "float" && (l = "cssFloat"), s ? a.setProperty(l, p) : a[l] = p;
        }
    }
    function t0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sa(e) {
      var t = {};
      for (var a in e)
        for (var l = wv[a] || [a], s = 0; s < l.length; s++)
          t[l[s]] = a;
      return t;
    }
    function ds(e, t) {
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
            s[w] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", t0(e[y]) ? "Removing" : "Updating", y, E);
          }
        }
      }
    }
    var Nv = {
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
    }, Lv = st({
      menuitem: !0
    }, Nv), Uv = "__html";
    function Oc(e, t) {
      if (t) {
        if (Lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Uv in t.dangerouslySetInnerHTML))
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
    }, Qa = {}, jd = new RegExp("^(aria)-[" + ze + "]*$"), ps = new RegExp("^(aria)[A-Z][" + ze + "]*$");
    function Fd(e, t) {
      {
        if (ar.call(Qa, t) && Qa[t])
          return !0;
        if (ps.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = Av.hasOwnProperty(a) ? a : null;
          if (l == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Qa[t] = !0, !0;
          if (t !== l)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Qa[t] = !0, !0;
        }
        if (jd.test(t)) {
          var s = t.toLowerCase(), p = Av.hasOwnProperty(s) ? s : null;
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
        var a = [];
        for (var l in t) {
          var s = Fd(e, l);
          s || a.push(l);
        }
        var p = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function Lc(e, t) {
      Mi(e, t) || zv(e, t);
    }
    var Jl = !1;
    function Hd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Pd = function() {
    };
    {
      var An = {}, Yd = /^on./, jv = /^on[^A-Z]/, Fv = new RegExp("^(aria)-[" + ze + "]*$"), Hv = new RegExp("^(aria)[A-Z][" + ze + "]*$");
      Pd = function(e, t, a, l) {
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
          if (Yd.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), An[t] = !0, !0;
        } else if (Yd.test(t))
          return jv.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), An[t] = !0, !0;
        if (Fv.test(t) || Hv.test(t))
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
        if (Nc.hasOwnProperty(s)) {
          var b = Nc[s];
          if (b !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, b), An[t] = !0, !0;
        } else if (!x && t !== s)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), An[t] = !0, !0;
        return typeof a == "boolean" && Nr(t, a, w, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), An[t] = !0, !0) : x ? !0 : Nr(t, a, w, !1) ? (An[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === mn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), An[t] = !0), !0);
      };
    }
    var Pv = function(e, t, a) {
      {
        var l = [];
        for (var s in t) {
          var p = Pd(e, s, t[s], a);
          p || l.push(s);
        }
        var y = l.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        l.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : l.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function Yv(e, t, a) {
      Mi(e, t) || Pv(e, t, a);
    }
    var Oi = 1, hs = 2, eo = 4, n0 = Oi | hs | eo, vs = null;
    function ms(e) {
      vs !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vs = e;
    }
    function r0() {
      vs === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vs = null;
    }
    function Iv(e) {
      return e === vs;
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
        var a = t.stateNode;
        if (a) {
          var l = Im(a);
          Ft(t.stateNode, t.type, l);
        }
      }
    }
    function Vv(e) {
      Ft = e;
    }
    function Ac(e) {
      dl ? Ni ? Ni.push(e) : Ni = [e] : dl = e;
    }
    function ys() {
      return dl !== null || Ni !== null;
    }
    function gs() {
      if (dl) {
        var e = dl, t = Ni;
        if (dl = null, Ni = null, ou(e), t)
          for (var a = 0; a < t.length; a++)
            ou(t[a]);
      }
    }
    var to = function(e, t) {
      return e(t);
    }, Id = function() {
    }, Vd = !1;
    function a0() {
      var e = ys();
      e && (Id(), gs());
    }
    function $d(e, t, a) {
      if (Vd)
        return e(t, a);
      Vd = !0;
      try {
        return to(e, t, a);
      } finally {
        Vd = !1, a0();
      }
    }
    function zc(e, t, a) {
      to = e, Id = a;
    }
    function jc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Bd(e, t, a) {
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
      var l = Im(a);
      if (l === null)
        return null;
      var s = l[t];
      if (Bd(t, e.type, l))
        return null;
      if (s && typeof s != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var Ss = !1;
    if (On)
      try {
        var ro = {};
        Object.defineProperty(ro, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", ro, ro), window.removeEventListener("test", ro, ro);
      } catch {
        Ss = !1;
      }
    function $v(e, t, a, l, s, p, y, E, w) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (b) {
        this.onError(b);
      }
    }
    var Wd = $v;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Gd = document.createElement("react");
      Wd = function(t, a, l, s, p, y, E, w, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), A = !1, L = !0, V = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          Gd.removeEventListener(q, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
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
        if (window.addEventListener("error", H), Gd.addEventListener(q, Fe, !1), b.initEvent(q, !1, !1), Gd.dispatchEvent(b), $ && Object.defineProperty(window, "event", $), A && L && (vt ? ft && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", H), !A)
          return Q(), $v.apply(this, arguments);
      };
    }
    var i0 = Wd, pl = !1, qa = null, Es = !1, hl = null, ui = {
      onError: function(e) {
        pl = !0, qa = e;
      }
    };
    function ao(e, t, a, l, s, p, y, E, w) {
      pl = !1, qa = null, i0.apply(ui, arguments);
    }
    function Li(e, t, a, l, s, p, y, E, w) {
      if (ao.apply(this, arguments), pl) {
        var x = qd();
        Es || (Es = !0, hl = x);
      }
    }
    function Qd() {
      if (Es) {
        var e = hl;
        throw Es = !1, hl = null, e;
      }
    }
    function l0() {
      return pl;
    }
    function qd() {
      if (pl) {
        var e = qa;
        return pl = !1, qa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ea(e) {
      return e._reactInternals;
    }
    function ws(e) {
      return e._reactInternals !== void 0;
    }
    function uu(e, t) {
      e._reactInternals = t;
    }
    var je = (
      /*                      */
      0
    ), vl = (
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
    ), ml = (
      /*                   */
      8192
    ), _s = (
      /*             */
      16384
    ), Fc = Kt | tt | si | Ur | wa | _s, Bv = (
      /*               */
      32767
    ), na = (
      /*                   */
      32768
    ), zn = (
      /*                */
      65536
    ), xs = (
      /* */
      131072
    ), Zd = (
      /*                       */
      1048576
    ), Kd = (
      /*                    */
      2097152
    ), Ar = (
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
    ), su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      tt | wa | 0
    ), jr = Vt | tt | Tt | bt | Ur | _a | ml, ur = tt | si | Ur | ml, xa = Kt | Tt, $n = Ar | yl | Kd, Ui = c.ReactCurrentOwner;
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
    function Xd(e) {
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
    function Hc(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function Jd(e) {
      return ra(e) === e;
    }
    function aa(e) {
      {
        var t = Ui.current;
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
      return t !== null ? ep(t) : null;
    }
    function ep(e) {
      if (e.tag === G || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ep(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Wv(e) {
      var t = $t(e);
      return t !== null ? Pc(t) : null;
    }
    function Pc(e) {
      if (e.tag === G || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j) {
          var a = Pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Yc = o.unstable_scheduleCallback, Gv = o.unstable_cancelCallback, Ic = o.unstable_shouldYield, Qv = o.unstable_requestPaint, en = o.unstable_now, tp = o.unstable_getCurrentPriorityLevel, Vc = o.unstable_ImmediatePriority, ia = o.unstable_UserBlockingPriority, ci = o.unstable_NormalPriority, $c = o.unstable_LowPriority, gl = o.unstable_IdlePriority, np = o.unstable_yieldValue, rp = o.unstable_setDisableYieldValue, Sl = null, jn = null, pe = null, pn = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ap(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ri && (e = st({}, e, {
          getLaneLabelMap: wl,
          injectProfilingHooks: zi
        })), Sl = t.inject(e), jn = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function qv(e, t) {
      if (jn && typeof jn.onScheduleFiberRoot == "function")
        try {
          jn.onScheduleFiberRoot(Sl, e, t);
        } catch (a) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function Ai(e, t) {
      if (jn && typeof jn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & qe) === qe;
          if (_n) {
            var l;
            switch (t) {
              case sr:
                l = Vc;
                break;
              case Wn:
                l = ia;
                break;
              case Fi:
                l = ci;
                break;
              case Ns:
                l = gl;
                break;
              default:
                l = ci;
                break;
            }
            jn.onCommitFiberRoot(Sl, e, l, a);
          }
        } catch (s) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", s));
        }
    }
    function El(e) {
      if (jn && typeof jn.onPostCommitFiberRoot == "function")
        try {
          jn.onPostCommitFiberRoot(Sl, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function ip(e) {
      if (jn && typeof jn.onCommitFiberUnmount == "function")
        try {
          jn.onCommitFiberUnmount(Sl, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Cn(e) {
      if (typeof np == "function" && (rp(e), h(e)), jn && typeof jn.setStrictMode == "function")
        try {
          jn.setStrictMode(Sl, e);
        } catch (t) {
          pn || (pn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function zi(e) {
      pe = e;
    }
    function wl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Bt; a++) {
          var l = o0(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Bc(e) {
      pe !== null && typeof pe.markCommitStarted == "function" && pe.markCommitStarted(e);
    }
    function lp() {
      pe !== null && typeof pe.markCommitStopped == "function" && pe.markCommitStopped();
    }
    function _l(e) {
      pe !== null && typeof pe.markComponentRenderStarted == "function" && pe.markComponentRenderStarted(e);
    }
    function lo() {
      pe !== null && typeof pe.markComponentRenderStopped == "function" && pe.markComponentRenderStopped();
    }
    function Zv(e) {
      pe !== null && typeof pe.markComponentPassiveEffectMountStarted == "function" && pe.markComponentPassiveEffectMountStarted(e);
    }
    function op() {
      pe !== null && typeof pe.markComponentPassiveEffectMountStopped == "function" && pe.markComponentPassiveEffectMountStopped();
    }
    function Wc(e) {
      pe !== null && typeof pe.markComponentPassiveEffectUnmountStarted == "function" && pe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Kv() {
      pe !== null && typeof pe.markComponentPassiveEffectUnmountStopped == "function" && pe.markComponentPassiveEffectUnmountStopped();
    }
    function Xv(e) {
      pe !== null && typeof pe.markComponentLayoutEffectMountStarted == "function" && pe.markComponentLayoutEffectMountStarted(e);
    }
    function Jv() {
      pe !== null && typeof pe.markComponentLayoutEffectMountStopped == "function" && pe.markComponentLayoutEffectMountStopped();
    }
    function Gc(e) {
      pe !== null && typeof pe.markComponentLayoutEffectUnmountStarted == "function" && pe.markComponentLayoutEffectUnmountStarted(e);
    }
    function cu() {
      pe !== null && typeof pe.markComponentLayoutEffectUnmountStopped == "function" && pe.markComponentLayoutEffectUnmountStopped();
    }
    function Qc(e, t, a) {
      pe !== null && typeof pe.markComponentErrored == "function" && pe.markComponentErrored(e, t, a);
    }
    function em(e, t, a) {
      pe !== null && typeof pe.markComponentSuspended == "function" && pe.markComponentSuspended(e, t, a);
    }
    function tm(e) {
      pe !== null && typeof pe.markLayoutEffectsStarted == "function" && pe.markLayoutEffectsStarted(e);
    }
    function fu() {
      pe !== null && typeof pe.markLayoutEffectsStopped == "function" && pe.markLayoutEffectsStopped();
    }
    function nm(e) {
      pe !== null && typeof pe.markPassiveEffectsStarted == "function" && pe.markPassiveEffectsStarted(e);
    }
    function Cs() {
      pe !== null && typeof pe.markPassiveEffectsStopped == "function" && pe.markPassiveEffectsStopped();
    }
    function Za(e) {
      pe !== null && typeof pe.markRenderStarted == "function" && pe.markRenderStarted(e);
    }
    function Ts() {
      pe !== null && typeof pe.markRenderYielded == "function" && pe.markRenderYielded();
    }
    function du() {
      pe !== null && typeof pe.markRenderStopped == "function" && pe.markRenderStopped();
    }
    function oo(e) {
      pe !== null && typeof pe.markRenderScheduled == "function" && pe.markRenderScheduled(e);
    }
    function up(e, t) {
      pe !== null && typeof pe.markForceUpdateScheduled == "function" && pe.markForceUpdateScheduled(e, t);
    }
    function xl(e, t) {
      pe !== null && typeof pe.markStateUpdateScheduled == "function" && pe.markStateUpdateScheduled(e, t);
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
    ), qc = Math.clz32 ? Math.clz32 : uo, Zc = Math.log, sp = Math.LN2;
    function uo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zc(t) / sp | 0) | 0;
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
    ), so = (
      /*            */
      8
    ), Wt = (
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
    ), bs = (
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
    ), ji = (
      /*                             */
      4194304
    ), of = (
      /*                             */
      8388608
    ), Ds = (
      /*                             */
      16777216
    ), uf = (
      /*                             */
      33554432
    ), sf = (
      /*                             */
      67108864
    ), cp = ji, pu = (
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
        if (e & We)
          return "Sync";
        if (e & fi)
          return "InputContinuousHydration";
        if (e & la)
          return "InputContinuous";
        if (e & so)
          return "DefaultHydration";
        if (e & Wt)
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
    var Ht = -1, ff = fo, df = ji;
    function vu(e) {
      switch (Sn(e)) {
        case We:
          return We;
        case fi:
          return fi;
        case la:
          return la;
        case so:
          return so;
        case Wt:
          return Wt;
        case co:
          return co;
        case fo:
        case ba:
        case Hr:
        case po:
        case bs:
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
        case ji:
        case of:
        case Ds:
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
    function ks(e, t) {
      var a = e.pendingLanes;
      if (a === Z)
        return Z;
      var l = Z, s = e.suspendedLanes, p = e.pingedLanes, y = a & cf;
      if (y !== Z) {
        var E = y & ~s;
        if (E !== Z)
          l = vu(E);
        else {
          var w = y & p;
          w !== Z && (l = vu(w));
        }
      } else {
        var x = a & ~s;
        x !== Z ? l = vu(x) : p !== Z && (l = vu(p));
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
          b === Wt && (A & Cl) !== Z
        )
          return t;
      }
      (l & la) !== Z && (l |= a & Wt);
      var L = e.entangledLanes;
      if (L !== Z)
        for (var V = e.entanglements, $ = l & L; $ > 0; ) {
          var Q = bl($), xe = 1 << Q;
          l |= V[Q], $ &= ~xe;
        }
      return l;
    }
    function rm(e, t) {
      for (var a = e.eventTimes, l = Ht; t > 0; ) {
        var s = bl(t), p = 1 << s, y = a[s];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function pf(e, t) {
      switch (e) {
        case We:
        case fi:
        case la:
          return t + 250;
        case so:
        case Wt:
        case co:
        case fo:
        case ba:
        case Hr:
        case po:
        case bs:
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
        case ji:
        case of:
        case Ds:
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
      for (var a = e.pendingLanes, l = e.suspendedLanes, s = e.pingedLanes, p = e.expirationTimes, y = a; y > 0; ) {
        var E = bl(y), w = 1 << E, x = p[E];
        x === Ht ? ((w & l) === Z || (w & s) !== Z) && (p[E] = pf(w, t)) : x <= t && (e.expiredLanes |= w), y &= ~w;
      }
    }
    function s0(e) {
      return vu(e.pendingLanes);
    }
    function fp(e) {
      var t = e.pendingLanes & ~Pr;
      return t !== Z ? t : t & Pr ? Pr : Z;
    }
    function mu(e) {
      return (e & We) !== Z;
    }
    function Ms(e) {
      return (e & cf) !== Z;
    }
    function hf(e) {
      return (e & vo) === e;
    }
    function c0(e) {
      var t = We | la | Wt;
      return (e & t) === Z;
    }
    function am(e) {
      return (e & Cl) === e;
    }
    function Os(e, t) {
      var a = fi | la | so | Wt;
      return (t & a) !== Z;
    }
    function im(e, t) {
      return (t & e.expiredLanes) !== Z;
    }
    function dp(e) {
      return (e & Cl) !== Z;
    }
    function pp() {
      var e = ff;
      return ff <<= 1, (ff & Cl) === Z && (ff = fo), e;
    }
    function f0() {
      var e = df;
      return df <<= 1, (df & vo) === Z && (df = ji), e;
    }
    function Sn(e) {
      return e & -e;
    }
    function Tn(e) {
      return Sn(e);
    }
    function bl(e) {
      return 31 - qc(e);
    }
    function vf(e) {
      return bl(e);
    }
    function Yr(e, t) {
      return (e & t) !== Z;
    }
    function mo(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function yu(e, t) {
      return e & ~t;
    }
    function hp(e, t) {
      return e & t;
    }
    function lm(e) {
      return e;
    }
    function om(e, t) {
      return e !== pt && e < t ? e : t;
    }
    function mf(e) {
      for (var t = [], a = 0; a < Bt; a++)
        t.push(e);
      return t;
    }
    function yo(e, t, a) {
      e.pendingLanes |= t, t !== Tl && (e.suspendedLanes = Z, e.pingedLanes = Z);
      var l = e.eventTimes, s = vf(t);
      l[s] = a;
    }
    function vp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var s = bl(l), p = 1 << s;
        a[s] = Ht, l &= ~p;
      }
    }
    function mp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function yp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Z, e.pingedLanes = Z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, s = e.eventTimes, p = e.expirationTimes, y = a; y > 0; ) {
        var E = bl(y), w = 1 << E;
        l[E] = Z, s[E] = Ht, p[E] = Ht, y &= ~w;
      }
    }
    function gu(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, s = a; s; ) {
        var p = bl(s), y = 1 << p;
        // Is this one of the newly entangled lanes?
        y & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[p] & t && (l[p] |= t), s &= ~y;
      }
    }
    function d0(e, t) {
      var a = Sn(t), l;
      switch (a) {
        case la:
          l = fi;
          break;
        case Wt:
          l = so;
          break;
        case fo:
        case ba:
        case Hr:
        case po:
        case bs:
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
        case ji:
        case of:
        case Ds:
        case uf:
        case sf:
          l = co;
          break;
        case Tl:
          l = hu;
          break;
        default:
          l = pt;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== pt ? pt : l;
    }
    function gp(e, t, a) {
      if (Bn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var s = vf(a), p = 1 << s, y = l[s];
          y.add(t), a &= ~p;
        }
    }
    function yf(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var s = vf(t), p = 1 << s, y = a[s];
          y.size > 0 && (y.forEach(function(E) {
            var w = E.alternate;
            (w === null || !l.has(w)) && l.add(E);
          }), y.clear()), t &= ~p;
        }
    }
    function Sp(e, t) {
      return null;
    }
    var sr = We, Wn = la, Fi = Wt, Ns = Tl, go = pt;
    function Ra() {
      return go;
    }
    function bn(e) {
      go = e;
    }
    function Ls(e, t) {
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
    function p0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ep(e, t) {
      return e !== 0 && e < t;
    }
    function Us(e) {
      var t = Sn(e);
      return Ep(sr, t) ? Ep(Wn, t) ? Ms(t) ? Fi : Ns : Wn : sr;
    }
    function Rn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var um;
    function Te(e) {
      um = e;
    }
    function Su(e) {
      um(e);
    }
    var As;
    function sm(e) {
      As = e;
    }
    var cm;
    function zs(e) {
      cm = e;
    }
    var js;
    function wp(e) {
      js = e;
    }
    var _p;
    function fm(e) {
      _p = e;
    }
    var gf = !1, Eu = [], di = null, Xt = null, Fn = null, Da = /* @__PURE__ */ new Map(), wu = /* @__PURE__ */ new Map(), Hi = [], Ka = [
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
    function dm(e) {
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
    function pm(e, t) {
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
          wu.delete(l);
          break;
        }
      }
    }
    function _u(e, t, a, l, s, p) {
      if (e === null || e.nativeEvent !== p) {
        var y = pi(t, a, l, s, p);
        if (t !== null) {
          var E = Lu(t);
          E !== null && As(E);
        }
        return y;
      }
      e.eventSystemFlags |= l;
      var w = e.targetContainers;
      return s !== null && w.indexOf(s) === -1 && w.push(s), e;
    }
    function hm(e, t, a, l, s) {
      switch (t) {
        case "focusin": {
          var p = s;
          return di = _u(di, e, t, a, l, p), !0;
        }
        case "dragenter": {
          var y = s;
          return Xt = _u(Xt, e, t, a, l, y), !0;
        }
        case "mouseover": {
          var E = s;
          return Fn = _u(Fn, e, t, a, l, E), !0;
        }
        case "pointerover": {
          var w = s, x = w.pointerId;
          return Da.set(x, _u(Da.get(x) || null, e, t, a, l, w)), !0;
        }
        case "gotpointercapture": {
          var b = s, A = b.pointerId;
          return wu.set(A, _u(wu.get(A) || null, e, t, a, l, b)), !0;
        }
      }
      return !1;
    }
    function xp(e) {
      var t = Ws(e.target);
      if (t !== null) {
        var a = ra(t);
        if (a !== null) {
          var l = a.tag;
          if (l === ce) {
            var s = Xd(a);
            if (s !== null) {
              e.blockedOn = s, _p(e.priority, function() {
                cm(a);
              });
              return;
            }
          } else if (l === O) {
            var p = a.stateNode;
            if (Rn(p)) {
              e.blockedOn = Hc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function vm(e) {
      for (var t = js(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < Hi.length && Ep(t, Hi[l].priority); l++)
        ;
      Hi.splice(l, 0, a), l === 0 && xp(a);
    }
    function Sf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = So(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var s = e.nativeEvent, p = new s.constructor(s.type, s);
          ms(p), s.target.dispatchEvent(p), r0();
        } else {
          var y = Lu(l);
          return y !== null && As(y), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Fs(e, t, a) {
      Sf(e) && a.delete(t);
    }
    function Cp() {
      gf = !1, di !== null && Sf(di) && (di = null), Xt !== null && Sf(Xt) && (Xt = null), Fn !== null && Sf(Fn) && (Fn = null), Da.forEach(Fs), wu.forEach(Fs);
    }
    function fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, gf || (gf = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Cp)));
    }
    function ct(e) {
      if (Eu.length > 0) {
        fr(Eu[0], e);
        for (var t = 1; t < Eu.length; t++) {
          var a = Eu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      di !== null && fr(di, e), Xt !== null && fr(Xt, e), Fn !== null && fr(Fn, e);
      var l = function(E) {
        return fr(E, e);
      };
      Da.forEach(l), wu.forEach(l);
      for (var s = 0; s < Hi.length; s++) {
        var p = Hi[s];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; Hi.length > 0; ) {
        var y = Hi[0];
        if (y.blockedOn !== null)
          break;
        xp(y), y.blockedOn === null && Hi.shift();
      }
    }
    var nn = c.ReactCurrentBatchConfig, un = !0;
    function Hn(e) {
      un = !!e;
    }
    function oa() {
      return un;
    }
    function xu(e, t, a) {
      var l = yr(t), s;
      switch (l) {
        case sr:
          s = Dn;
          break;
        case Wn:
          s = Hs;
          break;
        case Fi:
        default:
          s = Pi;
          break;
      }
      return s.bind(null, t, a, e);
    }
    function Dn(e, t, a, l) {
      var s = Ra(), p = nn.transition;
      nn.transition = null;
      try {
        bn(sr), Pi(e, t, a, l);
      } finally {
        bn(s), nn.transition = p;
      }
    }
    function Hs(e, t, a, l) {
      var s = Ra(), p = nn.transition;
      nn.transition = null;
      try {
        bn(Wn), Pi(e, t, a, l);
      } finally {
        bn(s), nn.transition = p;
      }
    }
    function Pi(e, t, a, l) {
      un && Ef(e, t, a, l);
    }
    function Ef(e, t, a, l) {
      var s = So(e, t, a, l);
      if (s === null) {
        L0(e, t, l, Cu, a), pm(e, l);
        return;
      }
      if (hm(s, e, t, a, l)) {
        l.stopPropagation();
        return;
      }
      if (pm(e, l), t & eo && dm(e)) {
        for (; s !== null; ) {
          var p = Lu(s);
          p !== null && Su(p);
          var y = So(e, t, a, l);
          if (y === null && L0(e, t, l, Cu, a), y === s)
            break;
          s = y;
        }
        s !== null && l.stopPropagation();
        return;
      }
      L0(e, t, l, null, a);
    }
    var Cu = null;
    function So(e, t, a, l) {
      Cu = null;
      var s = Uc(l), p = Ws(s);
      if (p !== null) {
        var y = ra(p);
        if (y === null)
          p = null;
        else {
          var E = y.tag;
          if (E === ce) {
            var w = Xd(y);
            if (w !== null)
              return w;
            p = null;
          } else if (E === O) {
            var x = y.stateNode;
            if (Rn(x))
              return Hc(y);
            p = null;
          } else
            y !== p && (p = null);
        }
      }
      return Cu = p, null;
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
          var t = tp();
          switch (t) {
            case Vc:
              return sr;
            case ia:
              return Wn;
            case ci:
            case $c:
              return Fi;
            case gl:
              return Ns;
            default:
              return Fi;
          }
        }
        default:
          return Fi;
      }
    }
    function Tp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Tu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Yi(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function wf(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var Eo = null, hi = null, Rl = null;
    function Dl(e) {
      return Eo = e, hi = xf(), !0;
    }
    function _f() {
      Eo = null, hi = null, Rl = null;
    }
    function bu() {
      if (Rl)
        return Rl;
      var e, t = hi, a = t.length, l, s = xf(), p = s.length;
      for (e = 0; e < a && t[e] === s[e]; e++)
        ;
      var y = a - e;
      for (l = 1; l <= y && t[a - l] === s[p - l]; l++)
        ;
      var E = l > 1 ? 1 - l : void 0;
      return Rl = s.slice(e, E), Rl;
    }
    function xf() {
      return "value" in Eo ? Eo.value : Eo.textContent;
    }
    function wo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
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
        return x ? this.isDefaultPrevented = _o : this.isDefaultPrevented = dr, this.isPropagationStopped = dr, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _o);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _o);
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
    var pr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, hr = En(pr), Ru = st({}, pr, {
      view: 0,
      detail: 0
    }), bp = En(Ru), Ps, Rp, ka;
    function mm(e) {
      e !== ka && (ka && e.type === "mousemove" ? (Ps = e.screenX - ka.screenX, Rp = e.screenY - ka.screenY) : (Ps = 0, Rp = 0), ka = e);
    }
    var Du = st({}, Ru, {
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
        return "movementX" in e ? e.movementX : (mm(e), Ps);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Rp;
      }
    }), kl = En(Du), Dp = st({}, Du, {
      dataTransfer: 0
    }), xo = En(Dp), ym = st({}, Ru, {
      relatedTarget: 0
    }), Cf = En(ym), kp = st({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Tf = En(kp), h0 = st({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), v0 = En(h0), gm = st({}, pr, {
      data: 0
    }), Mp = En(gm), Co = Mp, m0 = {
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
    function Sm(e) {
      if (e.key) {
        var t = m0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = wo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ku[e.keyCode] || "Unidentified" : "";
    }
    var sn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function y0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = sn[e];
      return l ? !!a[l] : !1;
    }
    function bf(e) {
      return y0;
    }
    var g0 = st({}, Ru, {
      key: Sm,
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
        return e.type === "keypress" ? wo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? wo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), S0 = En(g0), Em = st({}, Du, {
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
    }), Op = En(Em), E0 = st({}, Ru, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bf
    }), Ma = En(E0), Np = st({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), w0 = En(Np), Ml = st({}, Du, {
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
    }), Rf = En(Ml), To = [9, 13, 27, 32], Ys = 229, Is = On && "CompositionEvent" in window, bo = null;
    On && "documentMode" in document && (bo = document.documentMode);
    var _0 = On && "TextEvent" in window && !bo, Df = On && (!Is || bo && bo > 8 && bo <= 11), wm = 32, Lp = String.fromCharCode(wm);
    function _m() {
      Or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Or("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Or("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Or("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Vs = !1;
    function kf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function xm(e) {
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
      return e === "keydown" && t.keyCode === Ys;
    }
    function Cm(e, t) {
      switch (e) {
        case "keyup":
          return To.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ys;
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
    function zp(e, t, a, l, s) {
      var p, y;
      if (Is ? p = xm(t) : Ii ? Cm(t, l) && (p = "onCompositionEnd") : Up(t, l) && (p = "onCompositionStart"), !p)
        return null;
      Df && !Mf(l) && (!Ii && p === "onCompositionStart" ? Ii = Dl(s) : p === "onCompositionEnd" && Ii && (y = bu()));
      var E = km(a, p);
      if (E.length > 0) {
        var w = new Mp(p, t, null, l, s);
        if (e.push({
          event: w,
          listeners: E
        }), y)
          w.data = y;
        else {
          var x = Ap(l);
          x !== null && (w.data = x);
        }
      }
    }
    function Of(e, t) {
      switch (e) {
        case "compositionend":
          return Ap(t);
        case "keypress":
          var a = t.which;
          return a !== wm ? null : (Vs = !0, Lp);
        case "textInput":
          var l = t.data;
          return l === Lp && Vs ? null : l;
        default:
          return null;
      }
    }
    function Tm(e, t) {
      if (Ii) {
        if (e === "compositionend" || !Is && Cm(e, t)) {
          var a = bu();
          return _f(), Ii = !1, a;
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
    function x0(e, t, a, l, s) {
      var p;
      if (_0 ? p = Of(t, l) : p = Tm(t, l), !p)
        return null;
      var y = km(a, "onBeforeInput");
      if (y.length > 0) {
        var E = new Co("onBeforeInput", "beforeinput", null, l, s);
        e.push({
          event: E,
          listeners: y
        }), E.data = p;
      }
    }
    function Nf(e, t, a, l, s, p, y) {
      zp(e, t, a, l, s), x0(e, t, a, l, s);
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
      Or("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      Ac(l);
      var s = km(t, "onChange");
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
      n(t, u, e, Uc(e)), $d(g, t);
    }
    function g(e) {
      qw(e, 0);
    }
    function _(e) {
      var t = Hf(e);
      if (fv(t))
        return e;
    }
    function D(e, t) {
      if (e === "change")
        return t;
    }
    var N = !1;
    On && (N = T0("input") && (!document.documentMode || document.documentMode > 9));
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
    function Ee(e, t) {
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
      !t || !t.controlled || e.type !== "number" || cl(e, "number", e.value);
    }
    function U(e, t, a, l, s, p, y) {
      var E = a ? Hf(a) : window, w, x;
      if (f(E) ? w = D : Mu(E) ? N ? w = hn : (w = Ee, x = te) : Re(E) && (w = Oe), w) {
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
      if (E && !Iv(l)) {
        var x = l.relatedTarget || l.fromElement;
        if (x && (Ws(x) || Zp(x)))
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
          if (L = a, V = $ ? Ws($) : null, V !== null) {
            var Q = ra(V);
            (V !== Q || V.tag !== G && V.tag !== z) && (V = null);
          }
        } else
          L = null, V = a;
        if (L !== V) {
          var xe = kl, Fe = "onMouseLeave", Le = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = Op, Fe = "onPointerLeave", Le = "onPointerEnter", vt = "pointer");
          var ft = L == null ? b : Hf(L), H = V == null ? b : Hf(V), q = new xe(Fe, vt + "leave", L, l, s);
          q.target = ft, q.relatedTarget = H;
          var P = null, le = Ws(s);
          if (le === a) {
            var Ce = new xe(Le, vt + "enter", V, l, s);
            Ce.target = H, Ce.relatedTarget = ft, P = Ce;
          }
          aD(e, q, P, L, V);
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
        if (a.nodeType === ki) {
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
    function Ol(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var s = l.anchorNode, p = l.anchorOffset, y = l.focusNode, E = l.focusOffset;
      try {
        s.nodeType, y.nodeType;
      } catch {
        return null;
      }
      return b0(e, s, p, y, E);
    }
    function b0(e, t, a, l, s) {
      var p = 0, y = -1, E = -1, w = 0, x = 0, b = e, A = null;
      e:
        for (; ; ) {
          for (var L = null; b === t && (a === 0 || b.nodeType === ki) && (y = p + a), b === l && (s === 0 || b.nodeType === ki) && (E = p + s), b.nodeType === ki && (p += b.nodeValue.length), (L = b.firstChild) !== null; )
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
    function HR(e, t) {
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
    function jw(e) {
      return e && e.nodeType === ki;
    }
    function Fw(e, t) {
      return !e || !t ? !1 : e === t ? !0 : jw(e) ? !1 : jw(t) ? Fw(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function PR(e) {
      return e && e.ownerDocument && Fw(e.ownerDocument.documentElement, e);
    }
    function YR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Hw() {
      for (var e = window, t = wc(); t instanceof e.HTMLIFrameElement; ) {
        if (YR(t))
          e = t.contentWindow;
        else
          return t;
        t = wc(e.document);
      }
      return t;
    }
    function R0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function IR() {
      var e = Hw();
      return {
        focusedElem: e,
        selectionRange: R0(e) ? $R(e) : null
      };
    }
    function VR(e) {
      var t = Hw(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && PR(a)) {
        l !== null && R0(a) && BR(a, l);
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
    function $R(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ol(e), t || {
        start: 0,
        end: 0
      };
    }
    function BR(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : HR(e, t);
    }
    var WR = On && "documentMode" in document && document.documentMode <= 11;
    function GR() {
      Or("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Uf = null, D0 = null, jp = null, k0 = !1;
    function QR(e) {
      if ("selectionStart" in e && R0(e))
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
    function qR(e) {
      return e.window === e ? e.document : e.nodeType === Ga ? e : e.ownerDocument;
    }
    function Pw(e, t, a) {
      var l = qR(a);
      if (!(k0 || Uf == null || Uf !== wc(l))) {
        var s = QR(Uf);
        if (!jp || !Ae(jp, s)) {
          jp = s;
          var p = km(D0, "onSelect");
          if (p.length > 0) {
            var y = new hr("onSelect", "select", null, t, a);
            e.push({
              event: y,
              listeners: p
            }), y.target = Uf;
          }
        }
      }
    }
    function ZR(e, t, a, l, s, p, y) {
      var E = a ? Hf(a) : window;
      switch (t) {
        case "focusin":
          (Mu(E) || E.contentEditable === "true") && (Uf = E, D0 = a, jp = null);
          break;
        case "focusout":
          Uf = null, D0 = null, jp = null;
          break;
        case "mousedown":
          k0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          k0 = !1, Pw(e, l, s);
          break;
        case "selectionchange":
          if (WR)
            break;
        case "keydown":
        case "keyup":
          Pw(e, l, s);
      }
    }
    function bm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Af = {
      animationend: bm("Animation", "AnimationEnd"),
      animationiteration: bm("Animation", "AnimationIteration"),
      animationstart: bm("Animation", "AnimationStart"),
      transitionend: bm("Transition", "TransitionEnd")
    }, M0 = {}, Yw = {};
    On && (Yw = document.createElement("div").style, "AnimationEvent" in window || (delete Af.animationend.animation, delete Af.animationiteration.animation, delete Af.animationstart.animation), "TransitionEvent" in window || delete Af.transitionend.transition);
    function Rm(e) {
      if (M0[e])
        return M0[e];
      if (!Af[e])
        return e;
      var t = Af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Yw)
          return M0[e] = t[a];
      return e;
    }
    var Iw = Rm("animationend"), Vw = Rm("animationiteration"), $w = Rm("animationstart"), Bw = Rm("transitionend"), Ww = /* @__PURE__ */ new Map(), Gw = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ou(e, t) {
      Ww.set(e, t), Or(t, [e]);
    }
    function KR() {
      for (var e = 0; e < Gw.length; e++) {
        var t = Gw[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Ou(a, "on" + l);
      }
      Ou(Iw, "onAnimationEnd"), Ou(Vw, "onAnimationIteration"), Ou($w, "onAnimationStart"), Ou("dblclick", "onDoubleClick"), Ou("focusin", "onFocus"), Ou("focusout", "onBlur"), Ou(Bw, "onTransitionEnd");
    }
    function XR(e, t, a, l, s, p, y) {
      var E = Ww.get(t);
      if (E !== void 0) {
        var w = hr, x = t;
        switch (t) {
          case "keypress":
            if (wo(l) === 0)
              return;
          case "keydown":
          case "keyup":
            w = S0;
            break;
          case "focusin":
            x = "focus", w = Cf;
            break;
          case "focusout":
            x = "blur", w = Cf;
            break;
          case "beforeblur":
          case "afterblur":
            w = Cf;
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
            w = kl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = xo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ma;
            break;
          case Iw:
          case Vw:
          case $w:
            w = Tf;
            break;
          case Bw:
            w = w0;
            break;
          case "scroll":
            w = bp;
            break;
          case "wheel":
            w = Rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = v0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Op;
            break;
        }
        var b = (p & eo) !== 0;
        {
          var A = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = nD(a, E, l.type, b, A);
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
    KR(), Y(), Lf(), GR(), _m();
    function JR(e, t, a, l, s, p, y) {
      XR(e, t, a, l, s, p);
      var E = (p & n0) === 0;
      E && (ue(e, t, a, l, s), U(e, t, a, l, s), ZR(e, t, a, l, s), Nf(e, t, a, l, s));
    }
    var Fp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], O0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Fp));
    function Qw(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Li(l, t, void 0, e), e.currentTarget = null;
    }
    function eD(e, t, a) {
      var l;
      if (a)
        for (var s = t.length - 1; s >= 0; s--) {
          var p = t[s], y = p.instance, E = p.currentTarget, w = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          Qw(e, w, E), l = y;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var b = t[x], A = b.instance, L = b.currentTarget, V = b.listener;
          if (A !== l && e.isPropagationStopped())
            return;
          Qw(e, V, L), l = A;
        }
    }
    function qw(e, t) {
      for (var a = (t & eo) !== 0, l = 0; l < e.length; l++) {
        var s = e[l], p = s.event, y = s.listeners;
        eD(p, y, a);
      }
      Qd();
    }
    function tD(e, t, a, l, s) {
      var p = Uc(a), y = [];
      JR(y, e, l, a, p, t), qw(y, t);
    }
    function rn(e, t) {
      O0.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = Ok(t), s = iD(e, a);
      l.has(s) || (Zw(t, e, hs, a), l.add(s));
    }
    function N0(e, t, a) {
      O0.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= eo), Zw(a, e, l, t);
    }
    var Dm = "_reactListening" + Math.random().toString(36).slice(2);
    function Hp(e) {
      if (!e[Dm]) {
        e[Dm] = !0, rr.forEach(function(a) {
          a !== "selectionchange" && (O0.has(a) || N0(a, !1, e), N0(a, !0, e));
        });
        var t = e.nodeType === Ga ? e : e.ownerDocument;
        t !== null && (t[Dm] || (t[Dm] = !0, N0("selectionchange", !1, t)));
      }
    }
    function Zw(e, t, a, l, s) {
      var p = xu(e, t, a), y = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? Yi(e, t, p, y) : Tu(e, t, p) : y !== void 0 ? wf(e, t, p, y) : Tp(e, t, p);
    }
    function Kw(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function L0(e, t, a, l, s) {
      var p = l;
      if (!(t & Oi) && !(t & hs)) {
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
                if (Kw(x, y))
                  break;
                if (w === j)
                  for (var b = E.return; b !== null; ) {
                    var A = b.tag;
                    if (A === O || A === j) {
                      var L = b.stateNode.containerInfo;
                      if (Kw(L, y))
                        return;
                    }
                    b = b.return;
                  }
                for (; x !== null; ) {
                  var V = Ws(x);
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
      $d(function() {
        return tD(e, t, a, p);
      });
    }
    function Pp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function nD(e, t, a, l, s, p) {
      for (var y = t !== null ? t + "Capture" : null, E = l ? y : t, w = [], x = e, b = null; x !== null; ) {
        var A = x, L = A.stateNode, V = A.tag;
        if (V === G && L !== null && (b = L, E !== null)) {
          var $ = no(x, E);
          $ != null && w.push(Pp(x, $, b));
        }
        if (s)
          break;
        x = x.return;
      }
      return w;
    }
    function km(e, t) {
      for (var a = t + "Capture", l = [], s = e; s !== null; ) {
        var p = s, y = p.stateNode, E = p.tag;
        if (E === G && y !== null) {
          var w = y, x = no(s, a);
          x != null && l.unshift(Pp(s, x, w));
          var b = no(s, t);
          b != null && l.push(Pp(s, b, w));
        }
        s = s.return;
      }
      return l;
    }
    function zf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== G);
      return e || null;
    }
    function rD(e, t) {
      for (var a = e, l = t, s = 0, p = a; p; p = zf(p))
        s++;
      for (var y = 0, E = l; E; E = zf(E))
        y++;
      for (; s - y > 0; )
        a = zf(a), s--;
      for (; y - s > 0; )
        l = zf(l), y--;
      for (var w = s; w--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = zf(a), l = zf(l);
      }
      return null;
    }
    function Xw(e, t, a, l, s) {
      for (var p = t._reactName, y = [], E = a; E !== null && E !== l; ) {
        var w = E, x = w.alternate, b = w.stateNode, A = w.tag;
        if (x !== null && x === l)
          break;
        if (A === G && b !== null) {
          var L = b;
          if (s) {
            var V = no(E, p);
            V != null && y.unshift(Pp(E, V, L));
          } else if (!s) {
            var $ = no(E, p);
            $ != null && y.push(Pp(E, $, L));
          }
        }
        E = E.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function aD(e, t, a, l, s) {
      var p = l && s ? rD(l, s) : null;
      l !== null && Xw(e, t, l, p, !1), s !== null && a !== null && Xw(e, a, s, p, !0);
    }
    function iD(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Oa = !1, Yp = "dangerouslySetInnerHTML", Mm = "suppressContentEditableWarning", Nu = "suppressHydrationWarning", Jw = "autoFocus", $s = "children", Bs = "style", Om = "__html", U0, Nm, Ip, e_, Lm, t_, n_;
    U0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Nm = function(e, t) {
      Lc(e, t), Hd(e, t), Yv(e, t, {
        registrationNameDependencies: Mr,
        possibleRegistrationNames: ai
      });
    }, t_ = On && !document.documentMode, Ip = function(e, t, a) {
      if (!Oa) {
        var l = Um(a), s = Um(t);
        s !== l && (Oa = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(l)));
      }
    }, e_ = function(e) {
      if (!Oa) {
        Oa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Lm = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, n_ = function(e, t) {
      var a = e.namespaceURI === Di ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var lD = /\r\n?/g, oD = /\u0000|\uFFFD/g;
    function Um(e) {
      Pa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(lD, `
`).replace(oD, "");
    }
    function Am(e, t, a, l) {
      var s = Um(t), p = Um(e);
      if (p !== s && (l && (Oa || (Oa = !0, m('Text content did not match. Server: "%s" Client: "%s"', p, s))), a && fn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function r_(e) {
      return e.nodeType === Ga ? e : e.ownerDocument;
    }
    function uD() {
    }
    function zm(e) {
      e.onclick = uD;
    }
    function sD(e, t, a, l, s) {
      for (var p in l)
        if (l.hasOwnProperty(p)) {
          var y = l[p];
          if (p === Bs)
            y && Object.freeze(y), Ov(t, y);
          else if (p === Yp) {
            var E = y ? y[Om] : void 0;
            E != null && Ev(t, E);
          } else if (p === $s)
            if (typeof y == "string") {
              var w = e !== "textarea" || y !== "";
              w && kc(t, y);
            } else
              typeof y == "number" && kc(t, "" + y);
          else
            p === Mm || p === Nu || p === Jw || (Mr.hasOwnProperty(p) ? y != null && (typeof y != "function" && Lm(p, y), p === "onScroll" && rn("scroll", t)) : y != null && oi(t, p, y, s));
        }
    }
    function cD(e, t, a, l) {
      for (var s = 0; s < t.length; s += 2) {
        var p = t[s], y = t[s + 1];
        p === Bs ? Ov(e, y) : p === Yp ? Ev(e, y) : p === $s ? kc(e, y) : oi(e, p, y, l);
      }
    }
    function fD(e, t, a, l) {
      var s, p = r_(a), y, E = l;
      if (E === Di && (E = Rc(e)), E === Di) {
        if (s = Mi(e, t), !s && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return E === Di && !s && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !ar.call(U0, e) && (U0[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function dD(e, t) {
      return r_(t).createTextNode(e);
    }
    function pD(e, t, a, l) {
      var s = Mi(t, a);
      Nm(t, a);
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
          for (var y = 0; y < Fp.length; y++)
            rn(Fp[y], e);
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
          us(e, a), p = os(e, a), rn("invalid", e);
          break;
        case "option":
          Tc(e, a), p = a;
          break;
        case "select":
          mv(e, a), p = Dd(e, a), rn("invalid", e);
          break;
        case "textarea":
          yv(e, a), p = Md(e, a), rn("invalid", e);
          break;
        default:
          p = a;
      }
      switch (Oc(t, p), sD(t, e, l, p, s), t) {
        case "input":
          Kl(e), ss(e, a, !1);
          break;
        case "textarea":
          Kl(e), Sv(e);
          break;
        case "option":
          Rd(e, a);
          break;
        case "select":
          Bg(e, a);
          break;
        default:
          typeof p.onClick == "function" && zm(e);
          break;
      }
    }
    function hD(e, t, a, l, s) {
      Nm(t, l);
      var p = null, y, E;
      switch (t) {
        case "input":
          y = os(e, a), E = os(e, l), p = [];
          break;
        case "select":
          y = Dd(e, a), E = Dd(e, l), p = [];
          break;
        case "textarea":
          y = Md(e, a), E = Md(e, l), p = [];
          break;
        default:
          y = a, E = l, typeof y.onClick != "function" && typeof E.onClick == "function" && zm(e);
          break;
      }
      Oc(t, E);
      var w, x, b = null;
      for (w in y)
        if (!(E.hasOwnProperty(w) || !y.hasOwnProperty(w) || y[w] == null))
          if (w === Bs) {
            var A = y[w];
            for (x in A)
              A.hasOwnProperty(x) && (b || (b = {}), b[x] = "");
          } else
            w === Yp || w === $s || w === Mm || w === Nu || w === Jw || (Mr.hasOwnProperty(w) ? p || (p = []) : (p = p || []).push(w, null));
      for (w in E) {
        var L = E[w], V = y != null ? y[w] : void 0;
        if (!(!E.hasOwnProperty(w) || L === V || L == null && V == null))
          if (w === Bs)
            if (L && Object.freeze(L), V) {
              for (x in V)
                V.hasOwnProperty(x) && (!L || !L.hasOwnProperty(x)) && (b || (b = {}), b[x] = "");
              for (x in L)
                L.hasOwnProperty(x) && V[x] !== L[x] && (b || (b = {}), b[x] = L[x]);
            } else
              b || (p || (p = []), p.push(w, b)), b = L;
          else if (w === Yp) {
            var $ = L ? L[Om] : void 0, Q = V ? V[Om] : void 0;
            $ != null && Q !== $ && (p = p || []).push(w, $);
          } else
            w === $s ? (typeof L == "string" || typeof L == "number") && (p = p || []).push(w, "" + L) : w === Mm || w === Nu || (Mr.hasOwnProperty(w) ? (L != null && (typeof L != "function" && Lm(w, L), w === "onScroll" && rn("scroll", e)), !p && V !== L && (p = [])) : (p = p || []).push(w, L));
      }
      return b && (ds(b, E[Bs]), (p = p || []).push(Bs, b)), p;
    }
    function vD(e, t, a, l, s) {
      a === "input" && s.type === "radio" && s.name != null && bd(e, s);
      var p = Mi(a, l), y = Mi(a, s);
      switch (cD(e, t, p, y), a) {
        case "input":
          eu(e, s);
          break;
        case "textarea":
          gv(e, s);
          break;
        case "select":
          Wg(e, s);
          break;
      }
    }
    function mD(e) {
      {
        var t = e.toLowerCase();
        return Nc.hasOwnProperty(t) && Nc[t] || null;
      }
    }
    function yD(e, t, a, l, s, p, y) {
      var E, w;
      switch (E = Mi(t, a), Nm(t, a), t) {
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
          for (var x = 0; x < Fp.length; x++)
            rn(Fp[x], e);
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
          us(e, a), rn("invalid", e);
          break;
        case "option":
          Tc(e, a);
          break;
        case "select":
          mv(e, a), rn("invalid", e);
          break;
        case "textarea":
          yv(e, a), rn("invalid", e);
          break;
      }
      Oc(t, a);
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
          if ($ === $s)
            typeof Q == "string" ? e.textContent !== Q && (a[Nu] !== !0 && Am(e.textContent, Q, p, y), V = [$s, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Nu] !== !0 && Am(e.textContent, Q, p, y), V = [$s, "" + Q]);
          else if (Mr.hasOwnProperty($))
            Q != null && (typeof Q != "function" && Lm($, Q), $ === "onScroll" && rn("scroll", e));
          else if (y && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof E == "boolean") {
            var xe = void 0, Fe = E && In ? null : Jr($);
            if (a[Nu] !== !0) {
              if (!($ === Mm || $ === Nu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === Yp) {
                  var Le = e.innerHTML, vt = Q ? Q[Om] : void 0;
                  if (vt != null) {
                    var ft = n_(e, vt);
                    ft !== Le && Ip($, Le, ft);
                  }
                } else if ($ === Bs) {
                  if (w.delete($), t_) {
                    var H = e0(Q);
                    xe = e.getAttribute("style"), H !== xe && Ip($, xe, H);
                  }
                } else if (E && !In)
                  w.delete($.toLowerCase()), xe = Zo(e, $, Q), Q !== xe && Ip($, xe, Q);
                else if (!dn($, Fe, E) && !Pt($, Q, Fe, E)) {
                  var q = !1;
                  if (Fe !== null)
                    w.delete(Fe.attributeName), xe = Ql(e, $, Q, Fe);
                  else {
                    var P = l;
                    if (P === Di && (P = Rc(t)), P === Di)
                      w.delete($.toLowerCase());
                    else {
                      var le = mD($);
                      le !== null && le !== $ && (q = !0, w.delete(le)), w.delete($);
                    }
                    xe = Zo(e, $, Q);
                  }
                  var Ce = In;
                  !Ce && Q !== xe && !q && Ip($, xe, Q);
                }
              }
            }
          }
        }
      switch (y && // $FlowFixMe - Should be inferred as not undefined.
      w.size > 0 && a[Nu] !== !0 && e_(w), t) {
        case "input":
          Kl(e), ss(e, a, !0);
          break;
        case "textarea":
          Kl(e), Sv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && zm(e);
          break;
      }
      return V;
    }
    function gD(e, t, a) {
      var l = e.nodeValue !== t;
      return l;
    }
    function A0(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function z0(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function j0(e, t, a) {
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
    function SD(e, t, a) {
      switch (t) {
        case "input":
          dv(e, a);
          return;
        case "textarea":
          Od(e, a);
          return;
        case "select":
          Gg(e, a);
          return;
      }
    }
    var Vp = function() {
    }, $p = function() {
    };
    {
      var ED = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], a_ = [
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
      ], wD = a_.concat(["button"]), _D = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], i_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      $p = function(e, t) {
        var a = st({}, e || i_), l = {
          tag: t
        };
        return a_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), wD.indexOf(t) !== -1 && (a.pTagInButtonScope = null), ED.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var xD = function(e, t) {
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
            return _D.indexOf(t) === -1;
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
      }, CD = function(e, t) {
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
      }, l_ = {};
      Vp = function(e, t, a) {
        a = a || i_;
        var l = a.current, s = l && l.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = xD(e, s) ? null : l, y = p ? null : CD(e, a), E = p || y;
        if (E) {
          var w = E.tag, x = !!p + "|" + e + "|" + w;
          if (!l_[x]) {
            l_[x] = !0;
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
    var jm = "suppressHydrationWarning", Fm = "$", Hm = "/$", Bp = "$?", Wp = "$!", TD = "style", H0 = null, P0 = null;
    function bD(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case Ga:
        case Xl: {
          t = l === Ga ? "#document" : "#fragment";
          var s = e.documentElement;
          a = s ? s.namespaceURI : Ld(null, "");
          break;
        }
        default: {
          var p = l === gn ? e.parentNode : e, y = p.namespaceURI || null;
          t = p.tagName, a = Ld(y, t);
          break;
        }
      }
      {
        var E = t.toLowerCase(), w = $p(null, E);
        return {
          namespace: a,
          ancestorInfo: w
        };
      }
    }
    function RD(e, t, a) {
      {
        var l = e, s = Ld(l.namespace, t), p = $p(l.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: p
        };
      }
    }
    function x3(e) {
      return e;
    }
    function DD(e) {
      H0 = oa(), P0 = IR();
      var t = null;
      return Hn(!1), t;
    }
    function kD(e) {
      VR(P0), Hn(H0), H0 = null, P0 = null;
    }
    function MD(e, t, a, l, s) {
      var p;
      {
        var y = l;
        if (Vp(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var E = "" + t.children, w = $p(y.ancestorInfo, e);
          Vp(null, E, w);
        }
        p = y.namespace;
      }
      var x = fD(e, t, a, p);
      return qp(s, x), Q0(x, t), x;
    }
    function OD(e, t) {
      e.appendChild(t);
    }
    function ND(e, t, a, l, s) {
      switch (pD(e, t, a, l), t) {
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
    function LD(e, t, a, l, s, p) {
      {
        var y = p;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var E = "" + l.children, w = $p(y.ancestorInfo, t);
          Vp(null, E, w);
        }
      }
      return hD(e, t, a, l);
    }
    function Y0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function UD(e, t, a, l) {
      {
        var s = a;
        Vp(null, e, s.ancestorInfo);
      }
      var p = dD(e, t);
      return qp(l, p), p;
    }
    function AD() {
      var e = window.event;
      return e === void 0 ? Fi : yr(e.type);
    }
    var I0 = typeof setTimeout == "function" ? setTimeout : void 0, zD = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = -1, o_ = typeof Promise == "function" ? Promise : void 0, jD = typeof queueMicrotask == "function" ? queueMicrotask : typeof o_ < "u" ? function(e) {
      return o_.resolve(null).then(e).catch(FD);
    } : I0;
    function FD(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function HD(e, t, a, l) {
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
    function PD(e, t, a, l, s, p) {
      vD(e, t, a, l, s), Q0(e, s);
    }
    function u_(e) {
      kc(e, "");
    }
    function YD(e, t, a) {
      e.nodeValue = a;
    }
    function ID(e, t) {
      e.appendChild(t);
    }
    function VD(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && zm(a);
    }
    function $D(e, t, a) {
      e.insertBefore(t, a);
    }
    function BD(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function WD(e, t) {
      e.removeChild(t);
    }
    function GD(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function $0(e, t) {
      var a = t, l = 0;
      do {
        var s = a.nextSibling;
        if (e.removeChild(a), s && s.nodeType === gn) {
          var p = s.data;
          if (p === Hm)
            if (l === 0) {
              e.removeChild(s), ct(t);
              return;
            } else
              l--;
          else
            (p === Fm || p === Bp || p === Wp) && l++;
        }
        a = s;
      } while (a);
      ct(t);
    }
    function QD(e, t) {
      e.nodeType === gn ? $0(e.parentNode, t) : e.nodeType === Lr && $0(e, t), ct(e);
    }
    function qD(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ZD(e) {
      e.nodeValue = "";
    }
    function KD(e, t) {
      e = e;
      var a = t[TD], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Mc("display", l);
    }
    function XD(e, t) {
      e.nodeValue = t;
    }
    function JD(e) {
      e.nodeType === Lr ? e.textContent = "" : e.nodeType === Ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function ek(e, t, a) {
      return e.nodeType !== Lr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function tk(e, t) {
      return t === "" || e.nodeType !== ki ? null : e;
    }
    function nk(e) {
      return e.nodeType !== gn ? null : e;
    }
    function s_(e) {
      return e.data === Bp;
    }
    function B0(e) {
      return e.data === Wp;
    }
    function rk(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, s;
      return t && (a = t.dgst, l = t.msg, s = t.stck), {
        message: l,
        digest: a,
        stack: s
      };
    }
    function ak(e, t) {
      e._reactRetry = t;
    }
    function Pm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Lr || t === ki)
          break;
        if (t === gn) {
          var a = e.data;
          if (a === Fm || a === Wp || a === Bp)
            break;
          if (a === Hm)
            return null;
        }
      }
      return e;
    }
    function Gp(e) {
      return Pm(e.nextSibling);
    }
    function ik(e) {
      return Pm(e.firstChild);
    }
    function lk(e) {
      return Pm(e.firstChild);
    }
    function ok(e) {
      return Pm(e.nextSibling);
    }
    function uk(e, t, a, l, s, p, y) {
      qp(p, e), Q0(e, a);
      var E;
      {
        var w = s;
        E = w.namespace;
      }
      var x = (p.mode & ot) !== Ye;
      return yD(e, t, a, E, l, x, y);
    }
    function sk(e, t, a, l) {
      return qp(a, e), a.mode & ot, gD(e, t);
    }
    function ck(e, t) {
      qp(t, e);
    }
    function fk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Hm) {
            if (a === 0)
              return Gp(t);
            a--;
          } else
            (l === Fm || l === Wp || l === Bp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function c_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Fm || l === Wp || l === Bp) {
            if (a === 0)
              return t;
            a--;
          } else
            l === Hm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function dk(e) {
      ct(e);
    }
    function pk(e) {
      ct(e);
    }
    function hk(e) {
      return e !== "head" && e !== "body";
    }
    function vk(e, t, a, l) {
      var s = !0;
      Am(t.nodeValue, a, l, s);
    }
    function mk(e, t, a, l, s, p) {
      if (t[jm] !== !0) {
        var y = !0;
        Am(l.nodeValue, s, p, y);
      }
    }
    function yk(e, t) {
      t.nodeType === Lr ? A0(e, t) : t.nodeType === gn || z0(e, t);
    }
    function gk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Lr ? A0(a, t) : t.nodeType === gn || z0(a, t));
      }
    }
    function Sk(e, t, a, l, s) {
      (s || t[jm] !== !0) && (l.nodeType === Lr ? A0(a, l) : l.nodeType === gn || z0(a, l));
    }
    function Ek(e, t, a) {
      j0(e, t);
    }
    function wk(e, t) {
      F0(e, t);
    }
    function _k(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && j0(l, t);
      }
    }
    function xk(e, t) {
      {
        var a = e.parentNode;
        a !== null && F0(a, t);
      }
    }
    function Ck(e, t, a, l, s, p) {
      (p || t[jm] !== !0) && j0(a, l);
    }
    function Tk(e, t, a, l, s) {
      (s || t[jm] !== !0) && F0(a, l);
    }
    function bk(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Rk(e) {
      Hp(e);
    }
    var jf = Math.random().toString(36).slice(2), Ff = "__reactFiber$" + jf, W0 = "__reactProps$" + jf, Qp = "__reactContainer$" + jf, G0 = "__reactEvents$" + jf, Dk = "__reactListeners$" + jf, kk = "__reactHandles$" + jf;
    function Mk(e) {
      delete e[Ff], delete e[W0], delete e[G0], delete e[Dk], delete e[kk];
    }
    function qp(e, t) {
      t[Ff] = e;
    }
    function Ym(e, t) {
      t[Qp] = e;
    }
    function f_(e) {
      e[Qp] = null;
    }
    function Zp(e) {
      return !!e[Qp];
    }
    function Ws(e) {
      var t = e[Ff];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Qp] || a[Ff], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var s = c_(e); s !== null; ) {
              var p = s[Ff];
              if (p)
                return p;
              s = c_(s);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lu(e) {
      var t = e[Ff] || e[Qp];
      return t && (t.tag === G || t.tag === z || t.tag === ce || t.tag === O) ? t : null;
    }
    function Hf(e) {
      if (e.tag === G || e.tag === z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Im(e) {
      return e[W0] || null;
    }
    function Q0(e, t) {
      e[W0] = t;
    }
    function Ok(e) {
      var t = e[G0];
      return t === void 0 && (t = e[G0] = /* @__PURE__ */ new Set()), t;
    }
    var d_ = {}, p_ = c.ReactDebugCurrentFrame;
    function Vm(e) {
      if (e) {
        var t = e._owner, a = ts(e.type, e._source, t ? t.type : null);
        p_.setExtraStackFrame(a);
      } else
        p_.setExtraStackFrame(null);
    }
    function Vi(e, t, a, l, s) {
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
            E && !(E instanceof Error) && (Vm(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, y, typeof E), Vm(null)), E instanceof Error && !(E.message in d_) && (d_[E.message] = !0, Vm(s), m("Failed %s type: %s", a, E.message), Vm(null));
          }
      }
    }
    var q0 = [], $m;
    $m = [];
    var Ro = -1;
    function Uu(e) {
      return {
        current: e
      };
    }
    function Ir(e, t) {
      if (Ro < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== $m[Ro] && m("Unexpected Fiber popped."), e.current = q0[Ro], q0[Ro] = null, $m[Ro] = null, Ro--;
    }
    function Vr(e, t, a) {
      Ro++, q0[Ro] = e.current, $m[Ro] = a, e.current = t;
    }
    var Z0;
    Z0 = {};
    var Xa = {};
    Object.freeze(Xa);
    var Do = Uu(Xa), Nl = Uu(!1), K0 = Xa;
    function Pf(e, t, a) {
      return a && Ll(t) ? K0 : Do.current;
    }
    function h_(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Yf(e, t) {
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
          Vi(l, p, "context", E);
        }
        return s && h_(e, t, p), p;
      }
    }
    function Bm() {
      return Nl.current;
    }
    function Ll(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Wm(e) {
      Ir(Nl, e), Ir(Do, e);
    }
    function X0(e) {
      Ir(Nl, e), Ir(Do, e);
    }
    function v_(e, t, a) {
      {
        if (Do.current !== Xa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Do, t, e), Vr(Nl, a, e);
      }
    }
    function m_(e, t, a) {
      {
        var l = e.stateNode, s = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var p = et(e) || "Unknown";
            Z0[p] || (Z0[p] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var y = l.getChildContext();
        for (var E in y)
          if (!(E in s))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + E + '" is not defined in childContextTypes.');
        {
          var w = et(e) || "Unknown";
          Vi(s, y, "child context", w);
        }
        return st({}, a, y);
      }
    }
    function Gm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Xa;
        return K0 = Do.current, Vr(Do, a, e), Vr(Nl, Nl.current, e), !0;
      }
    }
    function y_(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var s = m_(e, t, K0);
          l.__reactInternalMemoizedMergedChildContext = s, Ir(Nl, e), Ir(Do, e), Vr(Do, s, e), Vr(Nl, a, e);
        } else
          Ir(Nl, e), Vr(Nl, a, e);
      }
    }
    function Nk(e) {
      {
        if (!Jd(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
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
    var Au = 0, Qm = 1, ko = null, J0 = !1, eS = !1;
    function g_(e) {
      ko === null ? ko = [e] : ko.push(e);
    }
    function Lk(e) {
      J0 = !0, g_(e);
    }
    function S_() {
      J0 && zu();
    }
    function zu() {
      if (!eS && ko !== null) {
        eS = !0;
        var e = 0, t = Ra();
        try {
          var a = !0, l = ko;
          for (bn(sr); e < l.length; e++) {
            var s = l[e];
            do
              s = s(a);
            while (s !== null);
          }
          ko = null, J0 = !1;
        } catch (p) {
          throw ko !== null && (ko = ko.slice(e + 1)), Yc(Vc, zu), p;
        } finally {
          bn(t), eS = !1;
        }
      }
      return null;
    }
    var If = [], Vf = 0, qm = null, Zm = 0, vi = [], mi = 0, Gs = null, Mo = 1, Oo = "";
    function Uk(e) {
      return qs(), (e.flags & Zd) !== je;
    }
    function Ak(e) {
      return qs(), Zm;
    }
    function zk() {
      var e = Oo, t = Mo, a = t & ~jk(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      qs(), If[Vf++] = Zm, If[Vf++] = qm, qm = e, Zm = t;
    }
    function E_(e, t, a) {
      qs(), vi[mi++] = Mo, vi[mi++] = Oo, vi[mi++] = Gs, Gs = e;
      var l = Mo, s = Oo, p = Km(l) - 1, y = l & ~(1 << p), E = a + 1, w = Km(t) + p;
      if (w > 30) {
        var x = p - p % 5, b = (1 << x) - 1, A = (y & b).toString(32), L = y >> x, V = p - x, $ = Km(t) + V, Q = E << V, xe = Q | L, Fe = A + s;
        Mo = 1 << $ | xe, Oo = Fe;
      } else {
        var Le = E << p, vt = Le | y, ft = s;
        Mo = 1 << w | vt, Oo = ft;
      }
    }
    function tS(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        Qs(e, a), E_(e, a, l);
      }
    }
    function Km(e) {
      return 32 - qc(e);
    }
    function jk(e) {
      return 1 << Km(e) - 1;
    }
    function nS(e) {
      for (; e === qm; )
        qm = If[--Vf], If[Vf] = null, Zm = If[--Vf], If[Vf] = null;
      for (; e === Gs; )
        Gs = vi[--mi], vi[mi] = null, Oo = vi[--mi], vi[mi] = null, Mo = vi[--mi], vi[mi] = null;
    }
    function Fk() {
      return qs(), Gs !== null ? {
        id: Mo,
        overflow: Oo
      } : null;
    }
    function Hk(e, t) {
      qs(), vi[mi++] = Mo, vi[mi++] = Oo, vi[mi++] = Gs, Mo = t.id, Oo = t.overflow, Gs = e;
    }
    function qs() {
      Sr() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var gr = null, yi = null, $i = !1, Zs = !1, ju = null;
    function Pk() {
      $i && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function w_() {
      Zs = !0;
    }
    function Yk() {
      return Zs;
    }
    function Ik(e) {
      var t = e.stateNode.containerInfo;
      return yi = lk(t), gr = e, $i = !0, ju = null, Zs = !1, !0;
    }
    function Vk(e, t, a) {
      return yi = ok(t), gr = e, $i = !0, ju = null, Zs = !1, a !== null && Hk(e, a), !0;
    }
    function __(e, t) {
      switch (e.tag) {
        case O: {
          yk(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & ot) !== Ye;
          Sk(
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
          l.dehydrated !== null && gk(l.dehydrated, t);
          break;
        }
      }
    }
    function x_(e, t) {
      __(e, t);
      var a = WN();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Tt) : l.push(a);
    }
    function rS(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var l = t.type;
                t.pendingProps, Ek(a, l);
                break;
              case z:
                var s = t.pendingProps;
                wk(a, s);
                break;
            }
            break;
          }
          case G: {
            var p = e.type, y = e.memoizedProps, E = e.stateNode;
            switch (t.tag) {
              case G: {
                var w = t.type, x = t.pendingProps, b = (e.mode & ot) !== Ye;
                Ck(
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
                Tk(
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
                  t.pendingProps, _k($, Q);
                  break;
                case z:
                  var xe = t.pendingProps;
                  xk($, xe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function C_(e, t) {
      t.flags = t.flags & ~_a | Vt, rS(e, t);
    }
    function T_(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var l = ek(t, a);
          return l !== null ? (e.stateNode = l, gr = e, yi = ik(l), !0) : !1;
        }
        case z: {
          var s = e.pendingProps, p = tk(t, s);
          return p !== null ? (e.stateNode = p, gr = e, yi = null, !0) : !1;
        }
        case ce: {
          var y = nk(t);
          if (y !== null) {
            var E = {
              dehydrated: y,
              treeContext: Fk(),
              retryLane: Pr
            };
            e.memoizedState = E;
            var w = GN(y);
            return w.return = e, e.child = w, gr = e, yi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function aS(e) {
      return (e.mode & ot) !== Ye && (e.flags & qe) === je;
    }
    function iS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function lS(e) {
      if ($i) {
        var t = yi;
        if (!t) {
          aS(e) && (rS(gr, e), iS()), C_(gr, e), $i = !1, gr = e;
          return;
        }
        var a = t;
        if (!T_(e, t)) {
          aS(e) && (rS(gr, e), iS()), t = Gp(a);
          var l = gr;
          if (!t || !T_(e, t)) {
            C_(gr, e), $i = !1, gr = e;
            return;
          }
          x_(l, a);
        }
      }
    }
    function $k(e, t, a) {
      var l = e.stateNode, s = !Zs, p = uk(l, e.type, e.memoizedProps, t, a, e, s);
      return e.updateQueue = p, p !== null;
    }
    function Bk(e) {
      var t = e.stateNode, a = e.memoizedProps, l = sk(t, a, e);
      if (l) {
        var s = gr;
        if (s !== null)
          switch (s.tag) {
            case O: {
              var p = s.stateNode.containerInfo, y = (s.mode & ot) !== Ye;
              vk(
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
              mk(
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
    function Wk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ck(a, e);
    }
    function Gk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return fk(a);
    }
    function b_(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== O && t.tag !== ce; )
        t = t.return;
      gr = t;
    }
    function Xm(e) {
      if (e !== gr)
        return !1;
      if (!$i)
        return b_(e), $i = !0, !1;
      if (e.tag !== O && (e.tag !== G || hk(e.type) && !Y0(e.type, e.memoizedProps))) {
        var t = yi;
        if (t)
          if (aS(e))
            R_(e), iS();
          else
            for (; t; )
              x_(e, t), t = Gp(t);
      }
      return b_(e), e.tag === ce ? yi = Gk(e) : yi = gr ? Gp(e.stateNode) : null, !0;
    }
    function Qk() {
      return $i && yi !== null;
    }
    function R_(e) {
      for (var t = yi; t; )
        __(e, t), t = Gp(t);
    }
    function $f() {
      gr = null, yi = null, $i = !1, Zs = !1;
    }
    function D_() {
      ju !== null && (_C(ju), ju = null);
    }
    function Sr() {
      return $i;
    }
    function oS(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    var qk = c.ReactCurrentBatchConfig, Zk = null;
    function Kk() {
      return qk.transition;
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
      var Xk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Kp = [], Xp = [], Jp = [], eh = [], th = [], nh = [], Xs = /* @__PURE__ */ new Set();
      Bi.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && eh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && nh.push(e));
      }, Bi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(L) {
          e.add(et(L) || "Component"), Xs.add(L.type);
        }), Kp = []);
        var t = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(L) {
          t.add(et(L) || "Component"), Xs.add(L.type);
        }), Xp = []);
        var a = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(L) {
          a.add(et(L) || "Component"), Xs.add(L.type);
        }), Jp = []);
        var l = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(L) {
          l.add(et(L) || "Component"), Xs.add(L.type);
        }), eh = []);
        var s = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(L) {
          s.add(et(L) || "Component"), Xs.add(L.type);
        }), th = []);
        var p = /* @__PURE__ */ new Set();
        if (nh.length > 0 && (nh.forEach(function(L) {
          p.add(et(L) || "Component"), Xs.add(L.type);
        }), nh = []), t.size > 0) {
          var y = Ks(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (l.size > 0) {
          var E = Ks(l);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, E);
        }
        if (p.size > 0) {
          var w = Ks(p);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (e.size > 0) {
          var x = Ks(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var b = Ks(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (s.size > 0) {
          var A = Ks(s);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var Jm = /* @__PURE__ */ new Map(), k_ = /* @__PURE__ */ new Set();
      Bi.recordLegacyContextWarning = function(e, t) {
        var a = Xk(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!k_.has(e.type)) {
          var l = Jm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Jm.set(a, l)), l.push(e));
        }
      }, Bi.flushLegacyContextWarning = function() {
        Jm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(et(p) || "Component"), k_.add(p.type);
            });
            var s = Ks(l);
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
      }, Bi.discardPendingWarnings = function() {
        Kp = [], Xp = [], Jp = [], eh = [], th = [], nh = [], Jm = /* @__PURE__ */ new Map();
      };
    }
    function Wi(e, t) {
      if (e && e.defaultProps) {
        var a = st({}, t), l = e.defaultProps;
        for (var s in l)
          a[s] === void 0 && (a[s] = l[s]);
        return a;
      }
      return t;
    }
    var uS = Uu(null), sS;
    sS = {};
    var ey = null, Bf = null, cS = null, ty = !1;
    function ny() {
      ey = null, Bf = null, cS = null, ty = !1;
    }
    function M_() {
      ty = !0;
    }
    function O_() {
      ty = !1;
    }
    function N_(e, t, a) {
      Vr(uS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== sS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = sS;
    }
    function fS(e, t) {
      var a = uS.current;
      Ir(uS, t), e._currentValue = a;
    }
    function dS(e, t, a) {
      for (var l = e; l !== null; ) {
        var s = l.alternate;
        if (mo(l.childLanes, t) ? s !== null && !mo(s.childLanes, t) && (s.childLanes = nt(s.childLanes, t)) : (l.childLanes = nt(l.childLanes, t), s !== null && (s.childLanes = nt(s.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jk(e, t, a) {
      eM(e, t, a);
    }
    function eM(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var s = void 0, p = l.dependencies;
        if (p !== null) {
          s = l.child;
          for (var y = p.firstContext; y !== null; ) {
            if (y.context === t) {
              if (l.tag === R) {
                var E = Tn(a), w = No(Ht, E);
                w.tag = ay;
                var x = l.updateQueue;
                if (x !== null) {
                  var b = x.shared, A = b.pending;
                  A === null ? w.next = w : (w.next = A.next, A.next = w), b.pending = w;
                }
              }
              l.lanes = nt(l.lanes, a);
              var L = l.alternate;
              L !== null && (L.lanes = nt(L.lanes, a)), dS(l.return, a, e), p.lanes = nt(p.lanes, a);
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
          $ !== null && ($.lanes = nt($.lanes, a)), dS(V, a, e), s = l.sibling;
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
    function Wf(e, t) {
      ey = e, Bf = null, cS = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Yr(a.lanes, t) && mh(), a.firstContext = null);
      }
    }
    function Yn(e) {
      ty && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (cS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (ey === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = a, ey.dependencies = {
            lanes: Z,
            firstContext: a
          };
        } else
          Bf = Bf.next = a;
      }
      return t;
    }
    var Js = null;
    function pS(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function tM() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
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
        Js = null;
      }
    }
    function L_(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, pS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, ry(e, l);
    }
    function nM(e, t, a, l) {
      var s = t.interleaved;
      s === null ? (a.next = a, pS(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
    }
    function rM(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, pS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, ry(e, l);
    }
    function Na(e, t) {
      return ry(e, t);
    }
    var aM = ry;
    function ry(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (Vt | _a)) !== je && UC(e);
      for (var l = e, s = e.return; s !== null; )
        s.childLanes = nt(s.childLanes, t), a = s.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (s.flags & (Vt | _a)) !== je && UC(e), l = s, s = s.return;
      if (l.tag === O) {
        var p = l.stateNode;
        return p;
      } else
        return null;
    }
    var U_ = 0, A_ = 1, ay = 2, hS = 3, iy = !1, vS, ly;
    vS = !1, ly = null;
    function mS(e) {
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
    function z_(e, t) {
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
        tag: U_,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Fu(e, t, a) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var s = l.shared;
      if (ly === s && !vS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vS = !0), aN()) {
        var p = s.pending;
        return p === null ? t.next = t : (t.next = p.next, p.next = t), s.pending = t, aM(e, a);
      } else
        return rM(e, s, t, a);
    }
    function oy(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var s = l.shared;
        if (dp(a)) {
          var p = s.lanes;
          p = hp(p, e.pendingLanes);
          var y = nt(p, a);
          s.lanes = y, gu(e, y);
        }
      }
    }
    function yS(e, t) {
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
    function iM(e, t, a, l, s, p) {
      switch (a.tag) {
        case A_: {
          var y = a.payload;
          if (typeof y == "function") {
            M_();
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
              O_();
            }
            return E;
          }
          return y;
        }
        case hS:
          e.flags = e.flags & ~zn | qe;
        case U_: {
          var w = a.payload, x;
          if (typeof w == "function") {
            M_(), x = w.call(p, l, s);
            {
              if (e.mode & tn) {
                Cn(!0);
                try {
                  w.call(p, l, s);
                } finally {
                  Cn(!1);
                }
              }
              O_();
            }
          } else
            x = w;
          return x == null ? l : st({}, l, x);
        }
        case ay:
          return iy = !0, l;
      }
      return l;
    }
    function uy(e, t, a, l) {
      var s = e.updateQueue;
      iy = !1, ly = s.shared;
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
          if (mo(l, vt)) {
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
            V = iM(e, s, Le, V, t, a);
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
            var Ce = E, ge = Ce.next;
            Ce.next = null, Le = ge, s.lastBaseUpdate = Ce, s.shared.pending = null;
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
        Dh($), e.lanes = $, e.memoizedState = V;
      }
      ly = null;
    }
    function lM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function j_() {
      iy = !1;
    }
    function sy() {
      return iy;
    }
    function F_(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var s = 0; s < l.length; s++) {
          var p = l[s], y = p.callback;
          y !== null && (p.callback = null, lM(y, a));
        }
    }
    var gS = {}, H_ = new i.Component().refs, SS, ES, wS, _S, xS, P_, cy, CS, TS, bS;
    {
      SS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set();
      var Y_ = /* @__PURE__ */ new Set();
      cy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          Y_.has(a) || (Y_.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, P_ = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          xS.has(a) || (xS.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(gS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(gS);
    }
    function RS(e, t, a, l) {
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
        P_(t, p);
      }
      var y = p == null ? s : st({}, s, p);
      if (e.memoizedState = y, e.lanes === Z) {
        var E = e.updateQueue;
        E.baseState = y;
      }
    }
    var DS = {
      isMounted: aa,
      enqueueSetState: function(e, t, a) {
        var l = Ea(e), s = ca(), p = Wu(l), y = No(s, p);
        y.payload = t, a != null && (cy(a, "setState"), y.callback = a);
        var E = Fu(l, y, p);
        E !== null && (er(E, l, p, s), oy(E, l, p)), xl(l, p);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Ea(e), s = ca(), p = Wu(l), y = No(s, p);
        y.tag = A_, y.payload = t, a != null && (cy(a, "replaceState"), y.callback = a);
        var E = Fu(l, y, p);
        E !== null && (er(E, l, p, s), oy(E, l, p)), xl(l, p);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ea(e), l = ca(), s = Wu(a), p = No(l, s);
        p.tag = ay, t != null && (cy(t, "forceUpdate"), p.callback = t);
        var y = Fu(a, p, s);
        y !== null && (er(y, a, s, l), oy(y, a, s)), up(a, s);
      }
    };
    function I_(e, t, a, l, s, p, y) {
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
    function oM(e, t, a) {
      var l = e.stateNode;
      {
        var s = jt(t) || "Component", p = l.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), l.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), l.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), l.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !TS.has(t) && (TS.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof l.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof l.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof l.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof l.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var y = l.props !== a;
        l.props !== void 0 && y && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), l.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !wS.has(t) && (wS.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof l.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof l.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var E = l.state;
        E && (typeof E != "object" || Un(E)) && m("%s.state: must be set to an object or null", s), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function V_(e, t) {
      t.updater = DS, e.stateNode = t, uu(t, e), t._reactInternalInstance = gS;
    }
    function $_(e, t, a) {
      var l = !1, s = Xa, p = Xa, y = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === ye && y._context === void 0
        );
        if (!E && !bS.has(t)) {
          bS.add(t);
          var w = "";
          y === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? w = " However, it is set to a " + typeof y + "." : y.$$typeof === ae ? w = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", w);
        }
      }
      if (typeof y == "object" && y !== null)
        p = Yn(y);
      else {
        s = Pf(e, t, !0);
        var x = t.contextTypes;
        l = x != null, p = l ? Yf(e, s) : Xa;
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
      V_(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && A === null) {
          var L = jt(t) || "Component";
          ES.has(L) || (ES.add(L), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, b.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var V = null, $ = null, Q = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), V !== null || $ !== null || Q !== null) {
            var xe = jt(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _S.has(xe) || (_S.add(xe), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, Fe, V !== null ? `
  ` + V : "", $ !== null ? `
  ` + $ : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return l && h_(e, s, p), b;
    }
    function uM(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), DS.enqueueReplaceState(t, t.state, null));
    }
    function B_(e, t, a, l) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== s) {
        {
          var p = et(e) || "Component";
          SS.has(p) || (SS.add(p), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        DS.enqueueReplaceState(t, t.state, null);
      }
    }
    function kS(e, t, a, l) {
      oM(e, t, a);
      var s = e.stateNode;
      s.props = a, s.state = e.memoizedState, s.refs = H_, mS(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        s.context = Yn(p);
      else {
        var y = Pf(e, t, !0);
        s.context = Yf(e, y);
      }
      {
        if (s.state === a) {
          var E = jt(t) || "Component";
          CS.has(E) || (CS.add(E), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", E));
        }
        e.mode & tn && Bi.recordLegacyContextWarning(e, s), Bi.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      if (typeof w == "function" && (RS(e, t, w, a), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (uM(e, s), uy(e, a, s, l), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var x = tt;
        x |= Ar, (e.mode & Ta) !== Ye && (x |= zr), e.flags |= x;
      }
    }
    function sM(e, t, a, l) {
      var s = e.stateNode, p = e.memoizedProps;
      s.props = p;
      var y = s.context, E = t.contextType, w = Xa;
      if (typeof E == "object" && E !== null)
        w = Yn(E);
      else {
        var x = Pf(e, t, !0);
        w = Yf(e, x);
      }
      var b = t.getDerivedStateFromProps, A = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== a || y !== w) && B_(e, s, a, w), j_();
      var L = e.memoizedState, V = s.state = L;
      if (uy(e, a, s, l), V = e.memoizedState, p === a && L === V && !Bm() && !sy()) {
        if (typeof s.componentDidMount == "function") {
          var $ = tt;
          $ |= Ar, (e.mode & Ta) !== Ye && ($ |= zr), e.flags |= $;
        }
        return !1;
      }
      typeof b == "function" && (RS(e, t, b, a), V = e.memoizedState);
      var Q = sy() || I_(e, t, p, a, L, V, w);
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
    function cM(e, t, a, l, s) {
      var p = t.stateNode;
      z_(e, t);
      var y = t.memoizedProps, E = t.type === t.elementType ? y : Wi(t.type, y);
      p.props = E;
      var w = t.pendingProps, x = p.context, b = a.contextType, A = Xa;
      if (typeof b == "object" && b !== null)
        A = Yn(b);
      else {
        var L = Pf(t, a, !0);
        A = Yf(t, L);
      }
      var V = a.getDerivedStateFromProps, $ = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !$ && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (y !== w || x !== A) && B_(t, p, l, A), j_();
      var Q = t.memoizedState, xe = p.state = Q;
      if (uy(t, l, p, s), xe = t.memoizedState, y === w && Q === xe && !Bm() && !sy() && !Ue)
        return typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= tt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= wa), !1;
      typeof V == "function" && (RS(t, a, V, l), xe = t.memoizedState);
      var Fe = sy() || I_(t, a, E, l, Q, xe, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ue;
      return Fe ? (!$ && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, xe, A), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, xe, A)), typeof p.componentDidUpdate == "function" && (t.flags |= tt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= wa)) : (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= tt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= wa), t.memoizedProps = l, t.memoizedState = xe), p.props = l, p.state = xe, p.context = A, Fe;
    }
    var MS, OS, NS, LS, US, W_ = function(e, t) {
    };
    MS = !1, OS = !1, NS = {}, LS = {}, US = {}, W_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        LS[a] || (LS[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function rh(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & tn || vr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var s = et(e) || "Component";
          NS[s] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), NS[s] = !0);
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
          Ti(l, "ref");
          var x = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var b = function(A) {
            var L = w.refs;
            L === H_ && (L = w.refs = {}), A === null ? delete L[x] : L[x] = A;
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
    function fy(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dy(e) {
      {
        var t = et(e) || "Component";
        if (US[t])
          return;
        US[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function G_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Q_(e) {
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
        var P = oc(H, q);
        return P.index = 0, P.sibling = null, P;
      }
      function p(H, q, P) {
        if (H.index = P, !e)
          return H.flags |= Zd, q;
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
          var Ce = oE(P, H.mode, le);
          return Ce.return = H, Ce;
        } else {
          var ge = s(q, P);
          return ge.return = H, ge;
        }
      }
      function w(H, q, P, le) {
        var Ce = P.type;
        if (Ce === Va)
          return b(H, q, P.props.children, le, P.key);
        if (q !== null && (q.elementType === Ce || // Keep this check inline so it only runs on the false path:
        FC(q, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ve && G_(Ce) === q.type)) {
          var ge = s(q, P.props);
          return ge.ref = rh(H, q, P), ge.return = H, ge._debugSource = P._source, ge._debugOwner = P._owner, ge;
        }
        var Ge = lE(P, H.mode, le);
        return Ge.ref = rh(H, q, P), Ge.return = H, Ge;
      }
      function x(H, q, P, le) {
        if (q === null || q.tag !== j || q.stateNode.containerInfo !== P.containerInfo || q.stateNode.implementation !== P.implementation) {
          var Ce = uE(P, H.mode, le);
          return Ce.return = H, Ce;
        } else {
          var ge = s(q, P.children || []);
          return ge.return = H, ge;
        }
      }
      function b(H, q, P, le, Ce) {
        if (q === null || q.tag !== J) {
          var ge = Qu(P, H.mode, le, Ce);
          return ge.return = H, ge;
        } else {
          var Ge = s(q, P);
          return Ge.return = H, Ge;
        }
      }
      function A(H, q, P) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var le = oE("" + q, H.mode, P);
          return le.return = H, le;
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case il: {
              var Ce = lE(q, H.mode, P);
              return Ce.ref = rh(H, null, q), Ce.return = H, Ce;
            }
            case ea: {
              var ge = uE(q, H.mode, P);
              return ge.return = H, ge;
            }
            case Ve: {
              var Ge = q._payload, Je = q._init;
              return A(H, Je(Ge), P);
            }
          }
          if (Un(q) || bi(q)) {
            var At = Qu(q, H.mode, P, null);
            return At.return = H, At;
          }
          fy(H, q);
        }
        return typeof q == "function" && dy(H), null;
      }
      function L(H, q, P, le) {
        var Ce = q !== null ? q.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Ce !== null ? null : E(H, q, "" + P, le);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case il:
              return P.key === Ce ? w(H, q, P, le) : null;
            case ea:
              return P.key === Ce ? x(H, q, P, le) : null;
            case Ve: {
              var ge = P._payload, Ge = P._init;
              return L(H, q, Ge(ge), le);
            }
          }
          if (Un(P) || bi(P))
            return Ce !== null ? null : b(H, q, P, le, null);
          fy(H, P);
        }
        return typeof P == "function" && dy(H), null;
      }
      function V(H, q, P, le, Ce) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var ge = H.get(P) || null;
          return E(q, ge, "" + le, Ce);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case il: {
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
          if (Un(le) || bi(le)) {
            var kn = H.get(P) || null;
            return b(q, kn, le, Ce, null);
          }
          fy(q, le);
        }
        return typeof le == "function" && dy(q), null;
      }
      function $(H, q, P) {
        {
          if (typeof H != "object" || H === null)
            return q;
          switch (H.$$typeof) {
            case il:
            case ea:
              W_(H, P);
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
              var Ce = H._payload, ge = H._init;
              $(ge(Ce), q, P);
              break;
          }
        }
        return q;
      }
      function Q(H, q, P, le) {
        for (var Ce = null, ge = 0; ge < P.length; ge++) {
          var Ge = P[ge];
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
            Qs(H, br);
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
            Qs(H, fa);
          }
          return Je;
        }
        for (var da = l(H, wt); _t < P.length; _t++) {
          var Wr = V(da, H, _t, P[_t], le);
          Wr !== null && (e && Wr.alternate !== null && da.delete(Wr.key === null ? _t : Wr.key), kn = p(Wr, kn, _t), At === null ? Je = Wr : At.sibling = Wr, At = Wr);
        }
        if (e && da.forEach(function(sd) {
          return t(H, sd);
        }), Sr()) {
          var Fo = _t;
          Qs(H, Fo);
        }
        return Je;
      }
      function xe(H, q, P, le) {
        var Ce = bi(P);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (OS || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), OS = !0), P.entries === Ce && (MS || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), MS = !0);
          var ge = Ce.call(P);
          if (ge)
            for (var Ge = null, Je = ge.next(); !Je.done; Je = ge.next()) {
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
            Qs(H, Wr);
          }
          return kn;
        }
        if (wn === null) {
          for (; !fa.done; br++, fa = wt.next()) {
            var Fo = A(H, fa.value, le);
            Fo !== null && (Br = p(Fo, Br, br), _t === null ? kn = Fo : _t.sibling = Fo, _t = Fo);
          }
          if (Sr()) {
            var sd = br;
            Qs(H, sd);
          }
          return kn;
        }
        for (var Lh = l(H, wn); !fa.done; br++, fa = wt.next()) {
          var Yl = V(Lh, H, br, fa.value, le);
          Yl !== null && (e && Yl.alternate !== null && Lh.delete(Yl.key === null ? br : Yl.key), Br = p(Yl, Br, br), _t === null ? kn = Yl : _t.sibling = Yl, _t = Yl);
        }
        if (e && Lh.forEach(function(CL) {
          return t(H, CL);
        }), Sr()) {
          var xL = br;
          Qs(H, xL);
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
        var ge = oE(P, H.mode, le);
        return ge.return = H, ge;
      }
      function Le(H, q, P, le) {
        for (var Ce = P.key, ge = q; ge !== null; ) {
          if (ge.key === Ce) {
            var Ge = P.type;
            if (Ge === Va) {
              if (ge.tag === J) {
                a(H, ge.sibling);
                var Je = s(ge, P.props.children);
                return Je.return = H, Je._debugSource = P._source, Je._debugOwner = P._owner, Je;
              }
            } else if (ge.elementType === Ge || // Keep this check inline so it only runs on the false path:
            FC(ge, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === Ve && G_(Ge) === ge.type) {
              a(H, ge.sibling);
              var At = s(ge, P.props);
              return At.ref = rh(H, ge, P), At.return = H, At._debugSource = P._source, At._debugOwner = P._owner, At;
            }
            a(H, ge);
            break;
          } else
            t(H, ge);
          ge = ge.sibling;
        }
        if (P.type === Va) {
          var wt = Qu(P.props.children, H.mode, le, P.key);
          return wt.return = H, wt;
        } else {
          var kn = lE(P, H.mode, le);
          return kn.ref = rh(H, q, P), kn.return = H, kn;
        }
      }
      function vt(H, q, P, le) {
        for (var Ce = P.key, ge = q; ge !== null; ) {
          if (ge.key === Ce)
            if (ge.tag === j && ge.stateNode.containerInfo === P.containerInfo && ge.stateNode.implementation === P.implementation) {
              a(H, ge.sibling);
              var Ge = s(ge, P.children || []);
              return Ge.return = H, Ge;
            } else {
              a(H, ge);
              break;
            }
          else
            t(H, ge);
          ge = ge.sibling;
        }
        var Je = uE(P, H.mode, le);
        return Je.return = H, Je;
      }
      function ft(H, q, P, le) {
        var Ce = typeof P == "object" && P !== null && P.type === Va && P.key === null;
        if (Ce && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case il:
              return y(Le(H, q, P, le));
            case ea:
              return y(vt(H, q, P, le));
            case Ve:
              var ge = P._payload, Ge = P._init;
              return ft(H, q, Ge(ge), le);
          }
          if (Un(P))
            return Q(H, q, P, le);
          if (bi(P))
            return xe(H, q, P, le);
          fy(H, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? y(Fe(H, q, "" + P, le)) : (typeof P == "function" && dy(H), a(H, q));
      }
      return ft;
    }
    var Gf = Q_(!0), q_ = Q_(!1);
    function fM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = oc(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = oc(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function dM(e, t) {
      for (var a = e.child; a !== null; )
        YN(a, t), a = a.sibling;
    }
    var ah = {}, Hu = Uu(ah), ih = Uu(ah), py = Uu(ah);
    function hy(e) {
      if (e === ah)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Z_() {
      var e = hy(py.current);
      return e;
    }
    function AS(e, t) {
      Vr(py, t, e), Vr(ih, e, e), Vr(Hu, ah, e);
      var a = bD(t);
      Ir(Hu, e), Vr(Hu, a, e);
    }
    function Qf(e) {
      Ir(Hu, e), Ir(ih, e), Ir(py, e);
    }
    function zS() {
      var e = hy(Hu.current);
      return e;
    }
    function K_(e) {
      hy(py.current);
      var t = hy(Hu.current), a = RD(t, e.type);
      t !== a && (Vr(ih, e, e), Vr(Hu, a, e));
    }
    function jS(e) {
      ih.current === e && (Ir(Hu, e), Ir(ih, e));
    }
    var pM = 0, X_ = 1, J_ = 1, lh = 2, Gi = Uu(pM);
    function FS(e, t) {
      return (e & t) !== 0;
    }
    function qf(e) {
      return e & X_;
    }
    function HS(e, t) {
      return e & X_ | t;
    }
    function hM(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      Vr(Gi, t, e);
    }
    function Zf(e) {
      Ir(Gi, e);
    }
    function vM(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function vy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || s_(l) || B0(l))
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
    ), Ul = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), Er = (
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
    function mM(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var we = c.ReactCurrentDispatcher, oh = c.ReactCurrentBatchConfig, IS, Kf;
    IS = /* @__PURE__ */ new Set();
    var ec = Z, Ut = null, qn = null, Zn = null, my = !1, uh = !1, sh = 0, yM = 0, gM = 25, X = null, gi = null, Yu = -1, VS = !1;
    function Rt() {
      {
        var e = X;
        gi === null ? gi = [e] : gi.push(e);
      }
    }
    function he() {
      {
        var e = X;
        gi !== null && (Yu++, gi[Yu] !== e && SM(e));
      }
    }
    function Xf(e) {
      e != null && !Un(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
    }
    function SM(e) {
      {
        var t = et(Ut);
        if (!IS.has(t) && (IS.add(t), gi !== null)) {
          for (var a = "", l = 30, s = 0; s <= Yu; s++) {
            for (var p = gi[s], y = s === Yu ? e : p, E = s + 1 + ". " + p; E.length < l; )
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
    function $S(e, t) {
      if (VS)
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
    function Jf(e, t, a, l, s, p) {
      ec = p, Ut = t, gi = e !== null ? e._debugHookTypes : null, Yu = -1, VS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Z, e !== null && e.memoizedState !== null ? we.current = wx : gi !== null ? we.current = Ex : we.current = Sx;
      var y = a(l, s);
      if (uh) {
        var E = 0;
        do {
          if (uh = !1, sh = 0, E >= gM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          E += 1, VS = !1, qn = null, Zn = null, t.updateQueue = null, Yu = -1, we.current = _x, y = a(l, s);
        } while (uh);
      }
      we.current = ky, t._debugHookTypes = gi;
      var w = qn !== null && qn.next !== null;
      if (ec = Z, Ut = null, qn = null, Zn = null, X = null, gi = null, Yu = -1, e !== null && (e.flags & $n) !== (t.flags & $n) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== Ye && m("Internal React error: Expected static flag was missing. Please notify the React team."), my = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function ed() {
      var e = sh !== 0;
      return sh = 0, e;
    }
    function ex(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ye ? t.flags &= ~(io | zr | Kt | tt) : t.flags &= ~(Kt | tt), e.lanes = yu(e.lanes, a);
    }
    function tx() {
      if (we.current = ky, my) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        my = !1;
      }
      ec = Z, Ut = null, qn = null, Zn = null, gi = null, Yu = -1, X = null, hx = !1, uh = !1, sh = 0;
    }
    function Al() {
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
    function nx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function BS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function WS(e, t, a) {
      var l = Al(), s;
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
      var y = p.dispatch = xM.bind(null, Ut, p);
      return [l.memoizedState, y];
    }
    function GS(e, t, a) {
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
          if (mo(ec, xe)) {
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
            $ === null ? (V = $ = Fe, L = A) : $ = $.next = Fe, Ut.lanes = nt(Ut.lanes, xe), Dh(xe);
          }
          Q = Q.next;
        } while (Q !== null && Q !== b);
        $ === null ? L = A : $.next = V, De(A, l.memoizedState) || mh(), l.memoizedState = A, l.baseState = L, l.baseQueue = $, s.lastRenderedState = A;
      }
      var ft = s.interleaved;
      if (ft !== null) {
        var H = ft;
        do {
          var q = H.lane;
          Ut.lanes = nt(Ut.lanes, q), Dh(q), H = H.next;
        } while (H !== ft);
      } else
        y === null && (s.lanes = Z);
      var P = s.dispatch;
      return [l.memoizedState, P];
    }
    function QS(e, t, a) {
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
        De(E, l.memoizedState) || mh(), l.memoizedState = E, l.baseQueue === null && (l.baseState = E), s.lastRenderedState = E;
      }
      return [E, p];
    }
    function C3(e, t, a) {
    }
    function T3(e, t, a) {
    }
    function qS(e, t, a) {
      var l = Ut, s = Al(), p, y = Sr();
      if (y) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        p = a(), Kf || p !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (p = t(), !Kf) {
          var E = t();
          De(p, E) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
        }
        var w = Gy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Os(w, ec) || rx(l, t, p);
      }
      s.memoizedState = p;
      var x = {
        value: p,
        getSnapshot: t
      };
      return s.queue = x, wy(ix.bind(null, l, x, e), [e]), l.flags |= Kt, ch(Gn | Er, ax.bind(null, l, x, p, t), void 0, null), p;
    }
    function yy(e, t, a) {
      var l = Ut, s = Si(), p = t();
      if (!Kf) {
        var y = t();
        De(p, y) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var E = s.memoizedState, w = !De(E, p);
      w && (s.memoizedState = p, mh());
      var x = s.queue;
      if (dh(ix.bind(null, l, x, e), [e]), x.getSnapshot !== t || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zn !== null && Zn.memoizedState.tag & Gn) {
        l.flags |= Kt, ch(Gn | Er, ax.bind(null, l, x, p, t), void 0, null);
        var b = Gy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Os(b, ec) || rx(l, t, p);
      }
      return p;
    }
    function rx(e, t, a) {
      e.flags |= _s;
      var l = {
        getSnapshot: t,
        value: a
      }, s = Ut.updateQueue;
      if (s === null)
        s = nx(), Ut.updateQueue = s, s.stores = [l];
      else {
        var p = s.stores;
        p === null ? s.stores = [l] : p.push(l);
      }
    }
    function ax(e, t, a, l) {
      t.value = a, t.getSnapshot = l, lx(t) && ox(e);
    }
    function ix(e, t, a) {
      var l = function() {
        lx(t) && ox(e);
      };
      return a(l);
    }
    function lx(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !De(a, l);
      } catch {
        return !0;
      }
    }
    function ox(e) {
      var t = Na(e, We);
      t !== null && er(t, e, We, Ht);
    }
    function gy(e) {
      var t = Al();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: BS,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = CM.bind(null, Ut, a);
      return [t.memoizedState, l];
    }
    function ZS(e) {
      return GS(BS);
    }
    function KS(e) {
      return QS(BS);
    }
    function ch(e, t, a, l) {
      var s = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, p = Ut.updateQueue;
      if (p === null)
        p = nx(), Ut.updateQueue = p, p.lastEffect = s.next = s;
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
    function XS(e) {
      var t = Al();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Sy(e) {
      var t = Si();
      return t.memoizedState;
    }
    function fh(e, t, a, l) {
      var s = Al(), p = l === void 0 ? null : l;
      Ut.flags |= e, s.memoizedState = ch(Gn | t, a, void 0, p);
    }
    function Ey(e, t, a, l) {
      var s = Si(), p = l === void 0 ? null : l, y = void 0;
      if (qn !== null) {
        var E = qn.memoizedState;
        if (y = E.destroy, p !== null) {
          var w = E.deps;
          if ($S(p, w)) {
            s.memoizedState = ch(t, a, y, p);
            return;
          }
        }
      }
      Ut.flags |= e, s.memoizedState = ch(Gn | t, a, y, p);
    }
    function wy(e, t) {
      return (Ut.mode & Ta) !== Ye ? fh(io | Kt | yl, Er, e, t) : fh(Kt | yl, Er, e, t);
    }
    function dh(e, t) {
      return Ey(Kt, Er, e, t);
    }
    function JS(e, t) {
      return fh(tt, Ul, e, t);
    }
    function _y(e, t) {
      return Ey(tt, Ul, e, t);
    }
    function e1(e, t) {
      var a = tt;
      return a |= Ar, (Ut.mode & Ta) !== Ye && (a |= zr), fh(a, Qn, e, t);
    }
    function xy(e, t) {
      return Ey(tt, Qn, e, t);
    }
    function ux(e, t) {
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
    function t1(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, s = tt;
      return s |= Ar, (Ut.mode & Ta) !== Ye && (s |= zr), fh(s, Qn, ux.bind(null, t, e), l);
    }
    function Cy(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return Ey(tt, Qn, ux.bind(null, t, e), l);
    }
    function EM(e, t) {
    }
    var Ty = EM;
    function n1(e, t) {
      var a = Al(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function by(e, t) {
      var a = Si(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var p = s[1];
        if ($S(l, p))
          return s[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function r1(e, t) {
      var a = Al(), l = t === void 0 ? null : t, s = e();
      return a.memoizedState = [s, l], s;
    }
    function Ry(e, t) {
      var a = Si(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var p = s[1];
        if ($S(l, p))
          return s[0];
      }
      var y = e();
      return a.memoizedState = [y, l], y;
    }
    function a1(e) {
      var t = Al();
      return t.memoizedState = e, e;
    }
    function sx(e) {
      var t = Si(), a = qn, l = a.memoizedState;
      return fx(t, l, e);
    }
    function cx(e) {
      var t = Si();
      if (qn === null)
        return t.memoizedState = e, e;
      var a = qn.memoizedState;
      return fx(t, a, e);
    }
    function fx(e, t, a) {
      var l = !c0(ec);
      if (l) {
        if (!De(a, t)) {
          var s = pp();
          Ut.lanes = nt(Ut.lanes, s), Dh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, mh()), e.memoizedState = a, a;
    }
    function wM(e, t, a) {
      var l = Ra();
      bn(cr(l, Wn)), e(!0);
      var s = oh.transition;
      oh.transition = {};
      var p = oh.transition;
      oh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bn(l), oh.transition = s, s === null && p._updatedFibers) {
          var y = p._updatedFibers.size;
          y > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
        }
      }
    }
    function i1() {
      var e = gy(!1), t = e[0], a = e[1], l = wM.bind(null, a), s = Al();
      return s.memoizedState = l, [t, l];
    }
    function dx() {
      var e = ZS(), t = e[0], a = Si(), l = a.memoizedState;
      return [t, l];
    }
    function px() {
      var e = KS(), t = e[0], a = Si(), l = a.memoizedState;
      return [t, l];
    }
    var hx = !1;
    function _M() {
      return hx;
    }
    function l1() {
      var e = Al(), t = Gy(), a = t.identifierPrefix, l;
      if (Sr()) {
        var s = zk();
        l = ":" + a + "R" + s;
        var p = sh++;
        p > 0 && (l += "H" + p.toString(32)), l += ":";
      } else {
        var y = yM++;
        l = ":" + a + "r" + y.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function Dy() {
      var e = Si(), t = e.memoizedState;
      return t;
    }
    function xM(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Wu(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vx(e))
        mx(t, s);
      else {
        var p = L_(e, t, s, l);
        if (p !== null) {
          var y = ca();
          er(p, e, l, y), yx(p, t, l);
        }
      }
      gx(e, l);
    }
    function CM(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Wu(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vx(e))
        mx(t, s);
      else {
        var p = e.alternate;
        if (e.lanes === Z && (p === null || p.lanes === Z)) {
          var y = t.lastRenderedReducer;
          if (y !== null) {
            var E;
            E = we.current, we.current = Qi;
            try {
              var w = t.lastRenderedState, x = y(w, a);
              if (s.hasEagerState = !0, s.eagerState = x, De(x, w)) {
                nM(e, t, s, l);
                return;
              }
            } catch {
            } finally {
              we.current = E;
            }
          }
        }
        var b = L_(e, t, s, l);
        if (b !== null) {
          var A = ca();
          er(b, e, l, A), yx(b, t, l);
        }
      }
      gx(e, l);
    }
    function vx(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function mx(e, t) {
      uh = my = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function yx(e, t, a) {
      if (dp(a)) {
        var l = t.lanes;
        l = hp(l, e.pendingLanes);
        var s = nt(l, a);
        t.lanes = s, gu(e, s);
      }
    }
    function gx(e, t, a) {
      xl(e, t);
    }
    var ky = {
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
      unstable_isNewReconciler: de
    }, Sx = null, Ex = null, wx = null, _x = null, zl = null, Qi = null, My = null;
    {
      var o1 = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Sx = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Rt(), Xf(t), n1(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Rt(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Rt(), Xf(t), wy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Rt(), Xf(a), t1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Rt(), Xf(t), JS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Rt(), Xf(t), e1(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Rt(), Xf(t);
          var a = we.current;
          we.current = zl;
          try {
            return r1(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Rt();
          var l = we.current;
          we.current = zl;
          try {
            return WS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Rt(), XS(e);
        },
        useState: function(e) {
          X = "useState", Rt();
          var t = we.current;
          we.current = zl;
          try {
            return gy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Rt(), a1(e);
        },
        useTransition: function() {
          return X = "useTransition", Rt(), i1();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Rt(), qS(e, t, a);
        },
        useId: function() {
          return X = "useId", Rt(), l1();
        },
        unstable_isNewReconciler: de
      }, Ex = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", he(), n1(e, t);
        },
        useContext: function(e) {
          return X = "useContext", he(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", he(), wy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", he(), t1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", he(), JS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", he(), e1(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", he();
          var a = we.current;
          we.current = zl;
          try {
            return r1(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", he();
          var l = we.current;
          we.current = zl;
          try {
            return WS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", he(), XS(e);
        },
        useState: function(e) {
          X = "useState", he();
          var t = we.current;
          we.current = zl;
          try {
            return gy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", he(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", he(), a1(e);
        },
        useTransition: function() {
          return X = "useTransition", he(), i1();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", he(), qS(e, t, a);
        },
        useId: function() {
          return X = "useId", he(), l1();
        },
        unstable_isNewReconciler: de
      }, wx = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", he(), by(e, t);
        },
        useContext: function(e) {
          return X = "useContext", he(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", he(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", he(), Cy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", he(), _y(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", he(), xy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", he();
          var a = we.current;
          we.current = Qi;
          try {
            return Ry(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", he();
          var l = we.current;
          we.current = Qi;
          try {
            return GS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", he(), Sy();
        },
        useState: function(e) {
          X = "useState", he();
          var t = we.current;
          we.current = Qi;
          try {
            return ZS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", he(), Ty();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", he(), sx(e);
        },
        useTransition: function() {
          return X = "useTransition", he(), dx();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", he(), yy(e, t);
        },
        useId: function() {
          return X = "useId", he(), Dy();
        },
        unstable_isNewReconciler: de
      }, _x = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", he(), by(e, t);
        },
        useContext: function(e) {
          return X = "useContext", he(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", he(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", he(), Cy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", he(), _y(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", he(), xy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", he();
          var a = we.current;
          we.current = My;
          try {
            return Ry(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", he();
          var l = we.current;
          we.current = My;
          try {
            return QS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", he(), Sy();
        },
        useState: function(e) {
          X = "useState", he();
          var t = we.current;
          we.current = My;
          try {
            return KS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", he(), Ty();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", he(), cx(e);
        },
        useTransition: function() {
          return X = "useTransition", he(), px();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", he(), yy(e, t);
        },
        useId: function() {
          return X = "useId", he(), Dy();
        },
        unstable_isNewReconciler: de
      }, zl = {
        readContext: function(e) {
          return o1(), Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Xe(), Rt(), n1(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Xe(), Rt(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Xe(), Rt(), wy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Xe(), Rt(), t1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Xe(), Rt(), JS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Xe(), Rt(), e1(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Xe(), Rt();
          var a = we.current;
          we.current = zl;
          try {
            return r1(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Xe(), Rt();
          var l = we.current;
          we.current = zl;
          try {
            return WS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Xe(), Rt(), XS(e);
        },
        useState: function(e) {
          X = "useState", Xe(), Rt();
          var t = we.current;
          we.current = zl;
          try {
            return gy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Xe(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Xe(), Rt(), a1(e);
        },
        useTransition: function() {
          return X = "useTransition", Xe(), Rt(), i1();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Xe(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Xe(), Rt(), qS(e, t, a);
        },
        useId: function() {
          return X = "useId", Xe(), Rt(), l1();
        },
        unstable_isNewReconciler: de
      }, Qi = {
        readContext: function(e) {
          return o1(), Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Xe(), he(), by(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Xe(), he(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Xe(), he(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Xe(), he(), Cy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Xe(), he(), _y(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Xe(), he(), xy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Xe(), he();
          var a = we.current;
          we.current = Qi;
          try {
            return Ry(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Xe(), he();
          var l = we.current;
          we.current = Qi;
          try {
            return GS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Xe(), he(), Sy();
        },
        useState: function(e) {
          X = "useState", Xe(), he();
          var t = we.current;
          we.current = Qi;
          try {
            return ZS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Xe(), he(), Ty();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Xe(), he(), sx(e);
        },
        useTransition: function() {
          return X = "useTransition", Xe(), he(), dx();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Xe(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Xe(), he(), yy(e, t);
        },
        useId: function() {
          return X = "useId", Xe(), he(), Dy();
        },
        unstable_isNewReconciler: de
      }, My = {
        readContext: function(e) {
          return o1(), Yn(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Xe(), he(), by(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Xe(), he(), Yn(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Xe(), he(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Xe(), he(), Cy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Xe(), he(), _y(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Xe(), he(), xy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Xe(), he();
          var a = we.current;
          we.current = Qi;
          try {
            return Ry(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Xe(), he();
          var l = we.current;
          we.current = Qi;
          try {
            return QS(e, t, a);
          } finally {
            we.current = l;
          }
        },
        useRef: function(e) {
          return X = "useRef", Xe(), he(), Sy();
        },
        useState: function(e) {
          X = "useState", Xe(), he();
          var t = we.current;
          we.current = Qi;
          try {
            return KS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Xe(), he(), Ty();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Xe(), he(), cx(e);
        },
        useTransition: function() {
          return X = "useTransition", Xe(), he(), px();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Xe(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Xe(), he(), yy(e, t);
        },
        useId: function() {
          return X = "useId", Xe(), he(), Dy();
        },
        unstable_isNewReconciler: de
      };
    }
    var Iu = o.unstable_now, xx = 0, Oy = -1, ph = -1, Ny = -1, u1 = !1, Ly = !1;
    function Cx() {
      return u1;
    }
    function TM() {
      Ly = !0;
    }
    function bM() {
      u1 = !1, Ly = !1;
    }
    function RM() {
      u1 = Ly, Ly = !1;
    }
    function Tx() {
      return xx;
    }
    function bx() {
      xx = Iu();
    }
    function s1(e) {
      ph = Iu(), e.actualStartTime < 0 && (e.actualStartTime = Iu());
    }
    function Rx(e) {
      ph = -1;
    }
    function Uy(e, t) {
      if (ph >= 0) {
        var a = Iu() - ph;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ph = -1;
      }
    }
    function jl(e) {
      if (Oy >= 0) {
        var t = Iu() - Oy;
        Oy = -1;
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
    function c1(e) {
      if (Ny >= 0) {
        var t = Iu() - Ny;
        Ny = -1;
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
    function Fl() {
      Oy = Iu();
    }
    function f1() {
      Ny = Iu();
    }
    function d1(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tc(e, t) {
      return {
        value: e,
        source: t,
        stack: _d(t),
        digest: null
      };
    }
    function p1(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function DM(e, t) {
      return !0;
    }
    function h1(e, t) {
      try {
        var a = DM(e, t);
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
    var kM = typeof WeakMap == "function" ? WeakMap : Map;
    function Dx(e, t, a) {
      var l = No(Ht, a);
      l.tag = hS, l.payload = {
        element: null
      };
      var s = t.value;
      return l.callback = function() {
        wN(s), h1(e, t);
      }, l;
    }
    function v1(e, t, a) {
      var l = No(Ht, a);
      l.tag = hS;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var p = t.value;
        l.payload = function() {
          return s(p);
        }, l.callback = function() {
          HC(e), h1(e, t);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
        HC(e), h1(e, t), typeof s != "function" && SN(this);
        var w = t.value, x = t.stack;
        this.componentDidCatch(w, {
          componentStack: x !== null ? x : ""
        }), typeof s != "function" && (Yr(e.lanes, We) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), l;
    }
    function kx(e, t, a) {
      var l = e.pingCache, s;
      if (l === null ? (l = e.pingCache = new kM(), s = /* @__PURE__ */ new Set(), l.set(t, s)) : (s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s))), !s.has(a)) {
        s.add(a);
        var p = _N.bind(null, e, t, a);
        Bn && kh(e, a), t.then(p, p);
      }
    }
    function MM(e, t, a, l) {
      var s = e.updateQueue;
      if (s === null) {
        var p = /* @__PURE__ */ new Set();
        p.add(a), e.updateQueue = p;
      } else
        s.add(a);
    }
    function OM(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === Ye && (a === T || a === re || a === ee)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Mx(e) {
      var t = e;
      do {
        if (t.tag === ce && vM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Ox(e, t, a, l, s) {
      if ((e.mode & ot) === Ye) {
        if (e === t)
          e.flags |= zn;
        else {
          if (e.flags |= qe, a.flags |= xs, a.flags &= ~(Fc | na), a.tag === R) {
            var p = a.alternate;
            if (p === null)
              a.tag = He;
            else {
              var y = No(Ht, We);
              y.tag = ay, Fu(a, y, We);
            }
          }
          a.lanes = nt(a.lanes, We);
        }
        return e;
      }
      return e.flags |= zn, e.lanes = s, e;
    }
    function NM(e, t, a, l, s) {
      if (a.flags |= na, Bn && kh(e, s), l !== null && typeof l == "object" && typeof l.then == "function") {
        var p = l;
        OM(a), Sr() && a.mode & ot && w_();
        var y = Mx(t);
        if (y !== null) {
          y.flags &= ~on, Ox(y, t, a, e, s), y.mode & ot && kx(e, p, s), MM(y, e, p);
          return;
        } else {
          if (!mu(s)) {
            kx(e, p, s), Q1();
            return;
          }
          var E = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = E;
        }
      } else if (Sr() && a.mode & ot) {
        w_();
        var w = Mx(t);
        if (w !== null) {
          (w.flags & zn) === je && (w.flags |= on), Ox(w, t, a, e, s), oS(tc(l, a));
          return;
        }
      }
      l = tc(l, a), fN(l);
      var x = t;
      do {
        switch (x.tag) {
          case O: {
            var b = l;
            x.flags |= zn;
            var A = Tn(s);
            x.lanes = nt(x.lanes, A);
            var L = Dx(x, b, A);
            yS(x, L);
            return;
          }
          case R:
            var V = l, $ = x.type, Q = x.stateNode;
            if ((x.flags & qe) === je && (typeof $.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !MC(Q))) {
              x.flags |= zn;
              var xe = Tn(s);
              x.lanes = nt(x.lanes, xe);
              var Fe = v1(x, V, xe);
              yS(x, Fe);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function LM() {
      return null;
    }
    var hh = c.ReactCurrentOwner, qi = !1, m1, vh, y1, g1, S1, nc, E1, Ay;
    m1 = {}, vh = {}, y1 = {}, g1 = {}, S1 = {}, nc = !1, E1 = {}, Ay = {};
    function ua(e, t, a, l) {
      e === null ? t.child = q_(t, null, a, l) : t.child = Gf(t, e.child, a, l);
    }
    function UM(e, t, a, l) {
      t.child = Gf(t, e.child, null, l), t.child = Gf(t, null, a, l);
    }
    function Nx(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Vi(
          p,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var y = a.render, E = t.ref, w, x;
      Wf(t, s), _l(t);
      {
        if (hh.current = t, Wa(!0), w = Jf(e, t, y, l, E, s), x = ed(), t.mode & tn) {
          Cn(!0);
          try {
            w = Jf(e, t, y, l, E, s), x = ed();
          } finally {
            Cn(!1);
          }
        }
        Wa(!1);
      }
      return lo(), e !== null && !qi ? (ex(e, t, s), Lo(e, t, s)) : (Sr() && x && tS(t), t.flags |= vl, ua(e, t, w, s), t.child);
    }
    function Lx(e, t, a, l, s) {
      if (e === null) {
        var p = a.type;
        if (HN(p) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var y = p;
          return y = ud(p), t.tag = ee, t.type = y, x1(t, p), Ux(e, t, y, l, s);
        }
        {
          var E = p.propTypes;
          E && Vi(
            E,
            l,
            // Resolved props
            "prop",
            jt(p)
          );
        }
        var w = iE(a.type, null, l, t, t.mode, s);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var x = a.type, b = x.propTypes;
        b && Vi(
          b,
          l,
          // Resolved props
          "prop",
          jt(x)
        );
      }
      var A = e.child, L = k1(e, s);
      if (!L) {
        var V = A.memoizedProps, $ = a.compare;
        if ($ = $ !== null ? $ : Ae, $(V, l) && e.ref === t.ref)
          return Lo(e, t, s);
      }
      t.flags |= vl;
      var Q = oc(A, l);
      return Q.ref = t.ref, Q.return = t, t.child = Q, Q;
    }
    function Ux(e, t, a, l, s) {
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
          x && Vi(
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
          if (qi = !1, t.pendingProps = l = b, k1(e, s))
            (e.flags & xs) !== je && (qi = !0);
          else
            return t.lanes = e.lanes, Lo(e, t, s);
      }
      return w1(e, t, a, l, s);
    }
    function Ax(e, t, a) {
      var l = t.pendingProps, s = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || _e)
        if ((t.mode & ot) === Ye) {
          var y = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = y, Qy(t, a);
        } else if (Yr(a, Pr)) {
          var A = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var L = p !== null ? p.baseLanes : a;
          Qy(t, L);
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
          return t.memoizedState = b, t.updateQueue = null, Qy(t, w), null;
        }
      else {
        var V;
        p !== null ? (V = nt(p.baseLanes, a), t.memoizedState = null) : V = a, Qy(t, V);
      }
      return ua(e, t, s, a), t.child;
    }
    function AM(e, t, a) {
      var l = t.pendingProps;
      return ua(e, t, l, a), t.child;
    }
    function zM(e, t, a) {
      var l = t.pendingProps.children;
      return ua(e, t, l, a), t.child;
    }
    function jM(e, t, a) {
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
    function zx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ur, t.flags |= Kd);
    }
    function w1(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Vi(
          p,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var y;
      {
        var E = Pf(t, a, !0);
        y = Yf(t, E);
      }
      var w, x;
      Wf(t, s), _l(t);
      {
        if (hh.current = t, Wa(!0), w = Jf(e, t, a, l, y, s), x = ed(), t.mode & tn) {
          Cn(!0);
          try {
            w = Jf(e, t, a, l, y, s), x = ed();
          } finally {
            Cn(!1);
          }
        }
        Wa(!1);
      }
      return lo(), e !== null && !qi ? (ex(e, t, s), Lo(e, t, s)) : (Sr() && x && tS(t), t.flags |= vl, ua(e, t, w, s), t.child);
    }
    function jx(e, t, a, l, s) {
      {
        switch (eL(t)) {
          case !1: {
            var p = t.stateNode, y = t.type, E = new y(t.memoizedProps, p.context), w = E.state;
            p.updater.enqueueSetState(p, w, null);
            break;
          }
          case !0: {
            t.flags |= qe, t.flags |= zn;
            var x = new Error("Simulated error coming from DevTools"), b = Tn(s);
            t.lanes = nt(t.lanes, b);
            var A = v1(t, tc(x, t), b);
            yS(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = a.propTypes;
          L && Vi(
            L,
            l,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var V;
      Ll(a) ? (V = !0, Gm(t)) : V = !1, Wf(t, s);
      var $ = t.stateNode, Q;
      $ === null ? (jy(e, t), $_(t, a, l), kS(t, a, l, s), Q = !0) : e === null ? Q = sM(t, a, l, s) : Q = cM(e, t, a, l, s);
      var xe = _1(e, t, a, Q, V, s);
      {
        var Fe = t.stateNode;
        Q && Fe.props !== l && (nc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), nc = !0);
      }
      return xe;
    }
    function _1(e, t, a, l, s, p) {
      zx(e, t);
      var y = (t.flags & qe) !== je;
      if (!l && !y)
        return s && y_(t, a, !1), Lo(e, t, p);
      var E = t.stateNode;
      hh.current = t;
      var w;
      if (y && typeof a.getDerivedStateFromError != "function")
        w = null, Rx();
      else {
        _l(t);
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
        lo();
      }
      return t.flags |= vl, e !== null && y ? UM(e, t, w, p) : ua(e, t, w, p), t.memoizedState = E.state, s && y_(t, a, !0), t.child;
    }
    function Fx(e) {
      var t = e.stateNode;
      t.pendingContext ? v_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && v_(e, t.context, !1), AS(e, t.containerInfo);
    }
    function FM(e, t, a) {
      if (Fx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, s = t.memoizedState, p = s.element;
      z_(e, t), uy(t, l, null, a);
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
          var b = tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Hx(e, t, E, a, b);
        } else if (E !== p) {
          var A = tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Hx(e, t, E, a, A);
        } else {
          Ik(t);
          var L = q_(t, null, E, a);
          t.child = L;
          for (var V = L; V; )
            V.flags = V.flags & ~Vt | _a, V = V.sibling;
        }
      } else {
        if ($f(), E === p)
          return Lo(e, t, a);
        ua(e, t, E, a);
      }
      return t.child;
    }
    function Hx(e, t, a, l, s) {
      return $f(), oS(s), t.flags |= on, ua(e, t, a, l), t.child;
    }
    function HM(e, t, a) {
      K_(t), e === null && lS(t);
      var l = t.type, s = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = s.children, E = Y0(l, s);
      return E ? y = null : p !== null && Y0(l, p) && (t.flags |= bt), zx(e, t), ua(e, t, y, a), t.child;
    }
    function PM(e, t) {
      return e === null && lS(t), null;
    }
    function YM(e, t, a, l) {
      jy(e, t);
      var s = t.pendingProps, p = a, y = p._payload, E = p._init, w = E(y);
      t.type = w;
      var x = t.tag = PN(w), b = Wi(w, s), A;
      switch (x) {
        case T:
          return x1(t, w), t.type = w = ud(w), A = w1(null, t, w, b, l), A;
        case R:
          return t.type = w = J1(w), A = jx(null, t, w, b, l), A;
        case re:
          return t.type = w = eE(w), A = Nx(null, t, w, b, l), A;
        case W: {
          if (t.type !== t.elementType) {
            var L = w.propTypes;
            L && Vi(
              L,
              b,
              // Resolved for outer only
              "prop",
              jt(w)
            );
          }
          return A = Lx(
            null,
            t,
            w,
            Wi(w.type, b),
            // The inner type can have defaults too
            l
          ), A;
        }
      }
      var V = "";
      throw w !== null && typeof w == "object" && w.$$typeof === Ve && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function IM(e, t, a, l, s) {
      jy(e, t), t.tag = R;
      var p;
      return Ll(a) ? (p = !0, Gm(t)) : p = !1, Wf(t, s), $_(t, a, l), kS(t, a, l, s), _1(null, t, a, !0, p, s);
    }
    function VM(e, t, a, l) {
      jy(e, t);
      var s = t.pendingProps, p;
      {
        var y = Pf(t, a, !1);
        p = Yf(t, y);
      }
      Wf(t, l);
      var E, w;
      _l(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = jt(a) || "Unknown";
          m1[x] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), m1[x] = !0);
        }
        t.mode & tn && Bi.recordLegacyContextWarning(t, null), Wa(!0), hh.current = t, E = Jf(null, t, a, s, p, l), w = ed(), Wa(!1);
      }
      if (lo(), t.flags |= vl, typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) {
        var b = jt(a) || "Unknown";
        vh[b] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), vh[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0
      ) {
        {
          var A = jt(a) || "Unknown";
          vh[A] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), vh[A] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Ll(a) ? (L = !0, Gm(t)) : L = !1, t.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null, mS(t), V_(t, E), kS(t, a, s, l), _1(null, t, a, !0, L, l);
      } else {
        if (t.tag = T, t.mode & tn) {
          Cn(!0);
          try {
            E = Jf(null, t, a, s, p, l), w = ed();
          } finally {
            Cn(!1);
          }
        }
        return Sr() && w && tS(t), ua(null, t, E, l), x1(t, a), t.child;
      }
    }
    function x1(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = ga();
          l && (a += `

Check the render method of \`` + l + "`.");
          var s = l || "", p = e._debugSource;
          p && (s = p.fileName + ":" + p.lineNumber), S1[s] || (S1[s] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = jt(t) || "Unknown";
          g1[y] || (m("%s: Function components do not support getDerivedStateFromProps.", y), g1[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = jt(t) || "Unknown";
          y1[E] || (m("%s: Function components do not support contextType.", E), y1[E] = !0);
        }
      }
    }
    var C1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: pt
    };
    function T1(e) {
      return {
        baseLanes: e,
        cachePool: LM(),
        transitions: null
      };
    }
    function $M(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function BM(e, t, a, l) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return FS(e, lh);
    }
    function WM(e, t) {
      return yu(e.childLanes, t);
    }
    function Px(e, t, a) {
      var l = t.pendingProps;
      tL(t) && (t.flags |= qe);
      var s = Gi.current, p = !1, y = (t.flags & qe) !== je;
      if (y || BM(s, e) ? (p = !0, t.flags &= ~qe) : (e === null || e.memoizedState !== null) && (s = hM(s, J_)), s = qf(s), Pu(t, s), e === null) {
        lS(t);
        var E = t.memoizedState;
        if (E !== null) {
          var w = E.dehydrated;
          if (w !== null)
            return KM(t, w);
        }
        var x = l.children, b = l.fallback;
        if (p) {
          var A = GM(t, x, b, a), L = t.child;
          return L.memoizedState = T1(a), t.memoizedState = C1, A;
        } else
          return b1(t, x);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var $ = V.dehydrated;
          if ($ !== null)
            return XM(e, t, y, l, $, V, a);
        }
        if (p) {
          var Q = l.fallback, xe = l.children, Fe = qM(e, t, xe, Q, a), Le = t.child, vt = e.child.memoizedState;
          return Le.memoizedState = vt === null ? T1(a) : $M(vt, a), Le.childLanes = WM(e, a), t.memoizedState = C1, Fe;
        } else {
          var ft = l.children, H = QM(e, t, ft, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function b1(e, t, a) {
      var l = e.mode, s = {
        mode: "visible",
        children: t
      }, p = R1(s, l);
      return p.return = e, e.child = p, p;
    }
    function GM(e, t, a, l) {
      var s = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, E, w;
      return (s & ot) === Ye && p !== null ? (E = p, E.childLanes = Z, E.pendingProps = y, e.mode & $e && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = 0, E.treeBaseDuration = 0), w = Qu(a, s, l, null)) : (E = R1(y, s), w = Qu(a, s, l, null)), E.return = e, w.return = e, E.sibling = w, e.child = E, w;
    }
    function R1(e, t, a) {
      return YC(e, t, Z, null);
    }
    function Yx(e, t) {
      return oc(e, t);
    }
    function QM(e, t, a, l) {
      var s = e.child, p = s.sibling, y = Yx(s, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === Ye && (y.lanes = l), y.return = t, y.sibling = null, p !== null) {
        var E = t.deletions;
        E === null ? (t.deletions = [p], t.flags |= Tt) : E.push(p);
      }
      return t.child = y, y;
    }
    function qM(e, t, a, l, s) {
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
        x = Yx(y, w), x.subtreeFlags = y.subtreeFlags & $n;
      var A;
      return E !== null ? A = oc(E, l) : (A = Qu(l, p, s, null), A.flags |= Vt), A.return = t, x.return = t, x.sibling = A, t.child = x, A;
    }
    function zy(e, t, a, l) {
      l !== null && oS(l), Gf(t, e.child, null, a);
      var s = t.pendingProps, p = s.children, y = b1(t, p);
      return y.flags |= Vt, t.memoizedState = null, y;
    }
    function ZM(e, t, a, l, s) {
      var p = t.mode, y = {
        mode: "visible",
        children: a
      }, E = R1(y, p), w = Qu(l, p, s, null);
      return w.flags |= Vt, E.return = t, w.return = t, E.sibling = w, t.child = E, (t.mode & ot) !== Ye && Gf(t, e.child, null, s), w;
    }
    function KM(e, t, a) {
      return (e.mode & ot) === Ye ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : B0(t) ? e.lanes = so : e.lanes = Pr, null;
    }
    function XM(e, t, a, l, s, p, y) {
      if (a)
        if (t.flags & on) {
          t.flags &= ~on;
          var H = p1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return zy(e, t, y, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= qe, null;
          var q = l.children, P = l.fallback, le = ZM(e, t, q, P, y), Ce = t.child;
          return Ce.memoizedState = T1(y), t.memoizedState = C1, le;
        }
      else {
        if (Pk(), (t.mode & ot) === Ye)
          return zy(
            e,
            t,
            y,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (B0(s)) {
          var E, w, x;
          {
            var b = rk(s);
            E = b.digest, w = b.message, x = b.stack;
          }
          var A;
          w ? A = new Error(w) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = p1(A, E, x);
          return zy(e, t, y, L);
        }
        var V = Yr(y, e.childLanes);
        if (qi || V) {
          var $ = Gy();
          if ($ !== null) {
            var Q = d0($, y);
            if (Q !== pt && Q !== p.retryLane) {
              p.retryLane = Q;
              var xe = Ht;
              Na(e, Q), er($, e, Q, xe);
            }
          }
          Q1();
          var Fe = p1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return zy(e, t, y, Fe);
        } else if (s_(s)) {
          t.flags |= qe, t.child = e.child;
          var Le = xN.bind(null, e);
          return ak(s, Le), null;
        } else {
          Vk(t, s, p.treeContext);
          var vt = l.children, ft = b1(t, vt);
          return ft.flags |= _a, ft;
        }
      }
    }
    function Ix(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = nt(l.lanes, t)), dS(e.return, t, a);
    }
    function JM(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ce) {
          var s = l.memoizedState;
          s !== null && Ix(l, a, e);
        } else if (l.tag === it)
          Ix(l, a, e);
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
    function eO(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && vy(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function tO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !E1[e])
        if (E1[e] = !0, typeof e == "string")
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
    function nO(e, t) {
      e !== void 0 && !Ay[e] && (e !== "collapsed" && e !== "hidden" ? (Ay[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ay[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Vx(e, t) {
      {
        var a = Un(e), l = !a && typeof bi(e) == "function";
        if (a || l) {
          var s = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function rO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Vx(e[a], a))
              return;
        } else {
          var l = bi(e);
          if (typeof l == "function") {
            var s = l.call(e);
            if (s)
              for (var p = s.next(), y = 0; !p.done; p = s.next()) {
                if (!Vx(p.value, y))
                  return;
                y++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function D1(e, t, a, l, s) {
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
    function $x(e, t, a) {
      var l = t.pendingProps, s = l.revealOrder, p = l.tail, y = l.children;
      tO(s), nO(p, s), rO(y, s), ua(e, t, y, a);
      var E = Gi.current, w = FS(E, lh);
      if (w)
        E = HS(E, lh), t.flags |= qe;
      else {
        var x = e !== null && (e.flags & qe) !== je;
        x && JM(t, t.child, a), E = qf(E);
      }
      if (Pu(t, E), (t.mode & ot) === Ye)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var b = eO(t.child), A;
            b === null ? (A = t.child, t.child = null) : (A = b.sibling, b.sibling = null), D1(
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
              if ($ !== null && vy($) === null) {
                t.child = V;
                break;
              }
              var Q = V.sibling;
              V.sibling = L, L = V, V = Q;
            }
            D1(
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
            D1(
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
    function aO(e, t, a) {
      AS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Gf(t, null, l, a) : ua(e, t, l, a), t.child;
    }
    var Bx = !1;
    function iO(e, t, a) {
      var l = t.type, s = l._context, p = t.pendingProps, y = t.memoizedProps, E = p.value;
      {
        "value" in p || Bx || (Bx = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && Vi(w, p, "prop", "Context.Provider");
      }
      if (N_(t, s, E), y !== null) {
        var x = y.value;
        if (De(x, E)) {
          if (y.children === p.children && !Bm())
            return Lo(e, t, a);
        } else
          Jk(t, s, a);
      }
      var b = p.children;
      return ua(e, t, b, a), t.child;
    }
    var Wx = !1;
    function lO(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (Wx || (Wx = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var s = t.pendingProps, p = s.children;
      typeof p != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Wf(t, a);
      var y = Yn(l);
      _l(t);
      var E;
      return hh.current = t, Wa(!0), E = p(y), Wa(!1), lo(), t.flags |= vl, ua(e, t, E, a), t.child;
    }
    function mh() {
      qi = !0;
    }
    function jy(e, t) {
      (t.mode & ot) === Ye && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Vt);
    }
    function Lo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Rx(), Dh(t.lanes), Yr(a, t.childLanes) ? (fM(e, t), t.child) : null;
    }
    function oO(e, t, a) {
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
    function k1(e, t) {
      var a = e.lanes;
      return !!Yr(a, t);
    }
    function uO(e, t, a) {
      switch (t.tag) {
        case O:
          Fx(t), t.stateNode, $f();
          break;
        case G:
          K_(t);
          break;
        case R: {
          var l = t.type;
          Ll(l) && Gm(t);
          break;
        }
        case j:
          AS(t, t.stateNode.containerInfo);
          break;
        case K: {
          var s = t.memoizedProps.value, p = t.type._context;
          N_(t, p, s);
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
              return Pu(t, qf(Gi.current)), t.flags |= qe, null;
            var x = t.child, b = x.childLanes;
            if (Yr(a, b))
              return Px(e, t, a);
            Pu(t, qf(Gi.current));
            var A = Lo(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            Pu(t, qf(Gi.current));
          break;
        }
        case it: {
          var L = (e.flags & qe) !== je, V = Yr(a, t.childLanes);
          if (L) {
            if (V)
              return $x(e, t, a);
            t.flags |= qe;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), Pu(t, Gi.current), V)
            break;
          return null;
        }
        case Be:
        case Ke:
          return t.lanes = Z, Ax(e, t, a);
      }
      return Lo(e, t, a);
    }
    function Gx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return oO(e, t, iE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, s = t.pendingProps;
        if (l !== s || Bm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          qi = !0;
        else {
          var p = k1(e, a);
          if (!p && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & qe) === je)
            return qi = !1, uO(e, t, a);
          (e.flags & xs) !== je ? qi = !0 : qi = !1;
        }
      } else if (qi = !1, Sr() && Uk(t)) {
        var y = t.index, E = Ak();
        E_(t, E, y);
      }
      switch (t.lanes = Z, t.tag) {
        case k:
          return VM(e, t, t.type, a);
        case Me: {
          var w = t.elementType;
          return YM(e, t, w, a);
        }
        case T: {
          var x = t.type, b = t.pendingProps, A = t.elementType === x ? b : Wi(x, b);
          return w1(e, t, x, A, a);
        }
        case R: {
          var L = t.type, V = t.pendingProps, $ = t.elementType === L ? V : Wi(L, V);
          return jx(e, t, L, $, a);
        }
        case O:
          return FM(e, t, a);
        case G:
          return HM(e, t, a);
        case z:
          return PM(e, t);
        case ce:
          return Px(e, t, a);
        case j:
          return aO(e, t, a);
        case re: {
          var Q = t.type, xe = t.pendingProps, Fe = t.elementType === Q ? xe : Wi(Q, xe);
          return Nx(e, t, Q, Fe, a);
        }
        case J:
          return AM(e, t, a);
        case ve:
          return zM(e, t, a);
        case se:
          return jM(e, t, a);
        case K:
          return iO(e, t, a);
        case Se:
          return lO(e, t, a);
        case W: {
          var Le = t.type, vt = t.pendingProps, ft = Wi(Le, vt);
          if (t.type !== t.elementType) {
            var H = Le.propTypes;
            H && Vi(
              H,
              ft,
              // Resolved for outer only
              "prop",
              jt(Le)
            );
          }
          return ft = Wi(Le.type, ft), Lx(e, t, Le, ft, a);
        }
        case ee:
          return Ux(e, t, t.type, t.pendingProps, a);
        case He: {
          var q = t.type, P = t.pendingProps, le = t.elementType === q ? P : Wi(q, P);
          return IM(e, t, q, le, a);
        }
        case it:
          return $x(e, t, a);
        case Mt:
          break;
        case Be:
          return Ax(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function td(e) {
      e.flags |= tt;
    }
    function Qx(e) {
      e.flags |= Ur, e.flags |= Kd;
    }
    var qx, M1, Zx, Kx;
    qx = function(e, t, a, l) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === G || s.tag === z)
          OD(e, s.stateNode);
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
    }, M1 = function(e, t) {
    }, Zx = function(e, t, a, l, s) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, E = zS(), w = LD(y, a, p, l, s, E);
        t.updateQueue = w, w && td(t);
      }
    }, Kx = function(e, t, a, l) {
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
    function sO(e, t, a) {
      if (Qk() && (t.mode & ot) !== Ye && (t.flags & qe) === je)
        return R_(t), $f(), t.flags |= on | na | zn, !1;
      var l = Xm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Wk(t), wr(t), (t.mode & $e) !== Ye) {
            var s = a !== null;
            if (s) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & qe) === je && (t.memoizedState = null), t.flags |= tt, wr(t), (t.mode & $e) !== Ye) {
            var y = a !== null;
            if (y) {
              var E = t.child;
              E !== null && (t.treeBaseDuration -= E.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return D_(), !0;
    }
    function Xx(e, t, a) {
      var l = t.pendingProps;
      switch (nS(t), t.tag) {
        case k:
        case Me:
        case ee:
        case T:
        case re:
        case J:
        case ve:
        case se:
        case Se:
        case W:
          return wr(t), null;
        case R: {
          var s = t.type;
          return Ll(s) && Wm(t), wr(t), null;
        }
        case O: {
          var p = t.stateNode;
          if (Qf(t), X0(t), YS(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = Xm(t);
            if (y)
              td(t);
            else if (e !== null) {
              var E = e.memoizedState;
              // Check if this is a client root
              (!E.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & on) !== je) && (t.flags |= wa, D_());
            }
          }
          return M1(e, t), wr(t), null;
        }
        case G: {
          jS(t);
          var w = Z_(), x = t.type;
          if (e !== null && t.stateNode != null)
            Zx(e, t, x, l, w), e.ref !== t.ref && Qx(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return wr(t), null;
            }
            var b = zS(), A = Xm(t);
            if (A)
              $k(t, w, b) && td(t);
            else {
              var L = MD(x, l, w, b, t);
              qx(L, t, !1, !1), t.stateNode = L, ND(L, x, l, w) && td(t);
            }
            t.ref !== null && Qx(t);
          }
          return wr(t), null;
        }
        case z: {
          var V = l;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            Kx(e, t, $, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = Z_(), xe = zS(), Fe = Xm(t);
            Fe ? Bk(t) && td(t) : t.stateNode = UD(V, Q, xe, t);
          }
          return wr(t), null;
        }
        case ce: {
          Zf(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = sO(e, t, Le);
            if (!vt)
              return t.flags & zn ? t : null;
          }
          if ((t.flags & qe) !== je)
            return t.lanes = a, (t.mode & $e) !== Ye && d1(t), t;
          var ft = Le !== null, H = e !== null && e.memoizedState !== null;
          if (ft !== H && ft) {
            var q = t.child;
            if (q.flags |= ml, (t.mode & ot) !== Ye) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !St);
              P || FS(Gi.current, J_) ? cN() : Q1();
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
          return Qf(t), M1(e, t), e === null && Rk(t.stateNode.containerInfo), wr(t), null;
        case K:
          var ge = t.type._context;
          return fS(ge, t), wr(t), null;
        case He: {
          var Ge = t.type;
          return Ll(Ge) && Wm(t), wr(t), null;
        }
        case it: {
          Zf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return wr(t), null;
          var At = (t.flags & qe) !== je, wt = Je.rendering;
          if (wt === null)
            if (At)
              yh(Je, !1);
            else {
              var kn = dN() && (e === null || (e.flags & qe) === je);
              if (!kn)
                for (var _t = t.child; _t !== null; ) {
                  var wn = vy(_t);
                  if (wn !== null) {
                    At = !0, t.flags |= qe, yh(Je, !1);
                    var Br = wn.updateQueue;
                    return Br !== null && (t.updateQueue = Br, t.flags |= tt), t.subtreeFlags = je, dM(t, a), Pu(t, HS(Gi.current, lh)), t.child;
                  }
                  _t = _t.sibling;
                }
              Je.tail !== null && en() > SC() && (t.flags |= qe, At = !0, yh(Je, !1), t.lanes = cp);
            }
          else {
            if (!At) {
              var br = vy(wt);
              if (br !== null) {
                t.flags |= qe, At = !0;
                var ei = br.updateQueue;
                if (ei !== null && (t.updateQueue = ei, t.flags |= tt), yh(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !wt.alternate && !Sr())
                  return wr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - Je.renderingStartTime > SC() && a !== Pr && (t.flags |= qe, At = !0, yh(Je, !1), t.lanes = cp);
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
            var Wr = Gi.current;
            return At ? Wr = HS(Wr, lh) : Wr = qf(Wr), Pu(t, Wr), da;
          }
          return wr(t), null;
        }
        case Mt:
          break;
        case Be:
        case Ke: {
          G1(t);
          var Fo = t.memoizedState, sd = Fo !== null;
          if (e !== null) {
            var Lh = e.memoizedState, Yl = Lh !== null;
            Yl !== sd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_e && (t.flags |= ml);
          }
          return !sd || (t.mode & ot) === Ye ? wr(t) : Yr(Pl, Pr) && (wr(t), t.subtreeFlags & (Vt | tt) && (t.flags |= ml)), null;
        }
        case Qt:
          return null;
        case gt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function cO(e, t, a) {
      switch (nS(t), t.tag) {
        case R: {
          var l = t.type;
          Ll(l) && Wm(t);
          var s = t.flags;
          return s & zn ? (t.flags = s & ~zn | qe, (t.mode & $e) !== Ye && d1(t), t) : null;
        }
        case O: {
          t.stateNode, Qf(t), X0(t), YS();
          var p = t.flags;
          return (p & zn) !== je && (p & qe) === je ? (t.flags = p & ~zn | qe, t) : null;
        }
        case G:
          return jS(t), null;
        case ce: {
          Zf(t);
          var y = t.memoizedState;
          if (y !== null && y.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var E = t.flags;
          return E & zn ? (t.flags = E & ~zn | qe, (t.mode & $e) !== Ye && d1(t), t) : null;
        }
        case it:
          return Zf(t), null;
        case j:
          return Qf(t), null;
        case K:
          var w = t.type._context;
          return fS(w, t), null;
        case Be:
        case Ke:
          return G1(t), null;
        case Qt:
          return null;
        default:
          return null;
      }
    }
    function Jx(e, t, a) {
      switch (nS(t), t.tag) {
        case R: {
          var l = t.type.childContextTypes;
          l != null && Wm(t);
          break;
        }
        case O: {
          t.stateNode, Qf(t), X0(t), YS();
          break;
        }
        case G: {
          jS(t);
          break;
        }
        case j:
          Qf(t);
          break;
        case ce:
          Zf(t);
          break;
        case it:
          Zf(t);
          break;
        case K:
          var s = t.type._context;
          fS(s, t);
          break;
        case Be:
        case Ke:
          G1(t);
          break;
      }
    }
    var eC = null;
    eC = /* @__PURE__ */ new Set();
    var Fy = !1, _r = !1, fO = typeof WeakSet == "function" ? WeakSet : Set, ke = null, nd = null, rd = null;
    function dO(e) {
      ao(null, function() {
        throw e;
      }), qd();
    }
    var pO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & $e)
        try {
          Fl(), t.componentWillUnmount();
        } finally {
          jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function tC(e, t) {
      try {
        Vu(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function O1(e, t, a) {
      try {
        pO(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function hO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function nC(e, t) {
      try {
        aC(e);
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
            if (_n && pa && e.mode & $e)
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
          typeof l == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function Hy(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var rC = !1;
    function vO(e, t) {
      DD(e.containerInfo), ke = t, mO();
      var a = rC;
      return rC = !1, a;
    }
    function mO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & su) !== je && t !== null ? (t.return = e, ke = t) : yO();
      }
    }
    function yO() {
      for (; ke !== null; ) {
        var e = ke;
        Lt(e);
        try {
          gO(e);
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
    function gO(e) {
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
              e.type === e.elementType && !nc && (p.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), p.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var y = p.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Wi(e.type, l), s);
              {
                var E = eC;
                y === void 0 && !E.has(e.type) && (E.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              p.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          }
          case O: {
            {
              var w = e.stateNode;
              JD(w.containerInfo);
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
    function Zi(e, t, a) {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var p = s.next, y = p;
        do {
          if ((y.tag & e) === e) {
            var E = y.destroy;
            y.destroy = void 0, E !== void 0 && ((e & Er) !== La ? Wc(t) : (e & Qn) !== La && Gc(t), (e & Ul) !== La && Mh(!0), Hy(t, a, E), (e & Ul) !== La && Mh(!1), (e & Er) !== La ? Kv() : (e & Qn) !== La && cu());
          }
          y = y.next;
        } while (y !== p);
      }
    }
    function Vu(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next, p = s;
        do {
          if ((p.tag & e) === e) {
            (e & Er) !== La ? Zv(t) : (e & Qn) !== La && Xv(t);
            var y = p.create;
            (e & Ul) !== La && Mh(!0), p.destroy = y(), (e & Ul) !== La && Mh(!1), (e & Er) !== La ? op() : (e & Qn) !== La && Jv();
            {
              var E = p.destroy;
              if (E !== void 0 && typeof E != "function") {
                var w = void 0;
                (p.tag & Qn) !== je ? w = "useLayoutEffect" : (p.tag & Ul) !== je ? w = "useInsertionEffect" : w = "useEffect";
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
    function SO(e, t) {
      if ((t.flags & tt) !== je)
        switch (t.tag) {
          case se: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, s = l.id, p = l.onPostCommit, y = Tx(), E = t.alternate === null ? "mount" : "update";
            Cx() && (E = "nested-update"), typeof p == "function" && p(s, E, a, y);
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
    function EO(e, t, a, l) {
      if ((a.flags & ur) !== je)
        switch (a.tag) {
          case T:
          case re:
          case ee: {
            if (!_r)
              if (a.mode & $e)
                try {
                  Fl(), Vu(Qn | Gn, a);
                } finally {
                  jl(a);
                }
              else
                Vu(Qn | Gn, a);
            break;
          }
          case R: {
            var s = a.stateNode;
            if (a.flags & tt && !_r)
              if (t === null)
                if (a.type === a.elementType && !nc && (s.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), s.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & $e)
                  try {
                    Fl(), s.componentDidMount();
                  } finally {
                    jl(a);
                  }
                else
                  s.componentDidMount();
              else {
                var p = a.elementType === a.type ? t.memoizedProps : Wi(a.type, t.memoizedProps), y = t.memoizedState;
                if (a.type === a.elementType && !nc && (s.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), s.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & $e)
                  try {
                    Fl(), s.componentDidUpdate(p, y, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    jl(a);
                  }
                else
                  s.componentDidUpdate(p, y, s.__reactInternalSnapshotBeforeUpdate);
              }
            var E = a.updateQueue;
            E !== null && (a.type === a.elementType && !nc && (s.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), s.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), F_(a, E, s));
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
              F_(a, w, x);
            }
            break;
          }
          case G: {
            var b = a.stateNode;
            if (t === null && a.flags & tt) {
              var A = a.type, L = a.memoizedProps;
              HD(b, A, L);
            }
            break;
          }
          case z:
            break;
          case j:
            break;
          case se: {
            {
              var V = a.memoizedProps, $ = V.onCommit, Q = V.onRender, xe = a.stateNode.effectDuration, Fe = Tx(), Le = t === null ? "mount" : "update";
              Cx() && (Le = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof $ == "function" && $(a.memoizedProps.id, Le, xe, Fe), yN(a);
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
            DO(e, a);
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
      _r || a.flags & Ur && aC(a);
    }
    function wO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          if (e.mode & $e)
            try {
              Fl(), tC(e, e.return);
            } finally {
              jl(e);
            }
          else
            tC(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && hO(e, e.return, t), nC(e, e.return);
          break;
        }
        case G: {
          nC(e, e.return);
          break;
        }
      }
    }
    function _O(e, t) {
      for (var a = null, l = e; ; ) {
        if (l.tag === G) {
          if (a === null) {
            a = l;
            try {
              var s = l.stateNode;
              t ? qD(s) : KD(l.stateNode, l.memoizedProps);
            } catch (y) {
              Gt(e, e.return, y);
            }
          }
        } else if (l.tag === z) {
          if (a === null)
            try {
              var p = l.stateNode;
              t ? ZD(p) : XD(p, l.memoizedProps);
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
    function aC(e) {
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
              Fl(), s = t(l);
            } finally {
              jl(e);
            }
          else
            s = t(l);
          typeof s == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = l;
      }
    }
    function xO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function iC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, iC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && Mk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function CO(e) {
      for (var t = e.return; t !== null; ) {
        if (lC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function lC(e) {
      return e.tag === G || e.tag === O || e.tag === j;
    }
    function oC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || lC(t.return))
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
    function TO(e) {
      var t = CO(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & bt && (u_(a), t.flags &= ~bt);
          var l = oC(e);
          L1(e, l, a);
          break;
        }
        case O:
        case j: {
          var s = t.stateNode.containerInfo, p = oC(e);
          N1(e, p, s);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function N1(e, t, a) {
      var l = e.tag, s = l === G || l === z;
      if (s) {
        var p = e.stateNode;
        t ? BD(a, p, t) : VD(a, p);
      } else if (l !== j) {
        var y = e.child;
        if (y !== null) {
          N1(y, t, a);
          for (var E = y.sibling; E !== null; )
            N1(E, t, a), E = E.sibling;
        }
      }
    }
    function L1(e, t, a) {
      var l = e.tag, s = l === G || l === z;
      if (s) {
        var p = e.stateNode;
        t ? $D(a, p, t) : ID(a, p);
      } else if (l !== j) {
        var y = e.child;
        if (y !== null) {
          L1(y, t, a);
          for (var E = y.sibling; E !== null; )
            L1(E, t, a), E = E.sibling;
        }
      }
    }
    var xr = null, Ki = !1;
    function bO(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case G: {
                xr = l.stateNode, Ki = !1;
                break e;
              }
              case O: {
                xr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
              case j: {
                xr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        uC(e, t, a), xr = null, Ki = !1;
      }
      xO(a);
    }
    function $u(e, t, a) {
      for (var l = a.child; l !== null; )
        uC(e, t, l), l = l.sibling;
    }
    function uC(e, t, a) {
      switch (ip(a), a.tag) {
        case G:
          _r || ad(a, t);
        case z: {
          {
            var l = xr, s = Ki;
            xr = null, $u(e, t, a), xr = l, Ki = s, xr !== null && (Ki ? GD(xr, a.stateNode) : WD(xr, a.stateNode));
          }
          return;
        }
        case Qe: {
          xr !== null && (Ki ? QD(xr, a.stateNode) : $0(xr, a.stateNode));
          return;
        }
        case j: {
          {
            var p = xr, y = Ki;
            xr = a.stateNode.containerInfo, Ki = !0, $u(e, t, a), xr = p, Ki = y;
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
                  L !== void 0 && ((V & Ul) !== La ? Hy(a, t, L) : (V & Qn) !== La && (Gc(a), a.mode & $e ? (Fl(), Hy(a, t, L), jl(a)) : Hy(a, t, L), cu())), b = b.next;
                } while (b !== x);
              }
            }
          }
          $u(e, t, a);
          return;
        }
        case R: {
          if (!_r) {
            ad(a, t);
            var $ = a.stateNode;
            typeof $.componentWillUnmount == "function" && O1(a, t, $);
          }
          $u(e, t, a);
          return;
        }
        case Mt: {
          $u(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
          ) {
            var Q = _r;
            _r = Q || a.memoizedState !== null, $u(e, t, a), _r = Q;
          } else
            $u(e, t, a);
          break;
        }
        default: {
          $u(e, t, a);
          return;
        }
      }
    }
    function RO(e) {
      e.memoizedState;
    }
    function DO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var s = l.memoizedState;
          if (s !== null) {
            var p = s.dehydrated;
            p !== null && pk(p);
          }
        }
      }
    }
    function sC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new fO()), t.forEach(function(l) {
          var s = CN.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Bn)
              if (nd !== null && rd !== null)
                kh(rd, nd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(s, s);
          }
        });
      }
    }
    function kO(e, t, a) {
      nd = a, rd = e, Lt(t), cC(t, e), Lt(t), nd = null, rd = null;
    }
    function Xi(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var s = 0; s < l.length; s++) {
          var p = l[s];
          try {
            bO(e, t, p);
          } catch (w) {
            Gt(p, t, w);
          }
        }
      var y = Vg();
      if (t.subtreeFlags & jr)
        for (var E = t.child; E !== null; )
          Lt(E), cC(E, e), E = E.sibling;
      Lt(y);
    }
    function cC(e, t, a) {
      var l = e.alternate, s = e.flags;
      switch (e.tag) {
        case T:
        case re:
        case W:
        case ee: {
          if (Xi(t, e), Hl(e), s & tt) {
            try {
              Zi(Ul | Gn, e, e.return), Vu(Ul | Gn, e);
            } catch (Ge) {
              Gt(e, e.return, Ge);
            }
            if (e.mode & $e) {
              try {
                Fl(), Zi(Qn | Gn, e, e.return);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
              jl(e);
            } else
              try {
                Zi(Qn | Gn, e, e.return);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
          }
          return;
        }
        case R: {
          Xi(t, e), Hl(e), s & Ur && l !== null && ad(l, l.return);
          return;
        }
        case G: {
          Xi(t, e), Hl(e), s & Ur && l !== null && ad(l, l.return);
          {
            if (e.flags & bt) {
              var p = e.stateNode;
              try {
                u_(p);
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
                    PD(y, b, x, w, E, e);
                  } catch (Ge) {
                    Gt(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case z: {
          if (Xi(t, e), Hl(e), s & tt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, L = e.memoizedProps, V = l !== null ? l.memoizedProps : L;
            try {
              YD(A, V, L);
            } catch (Ge) {
              Gt(e, e.return, Ge);
            }
          }
          return;
        }
        case O: {
          if (Xi(t, e), Hl(e), s & tt && l !== null) {
            var $ = l.memoizedState;
            if ($.isDehydrated)
              try {
                dk(t.containerInfo);
              } catch (Ge) {
                Gt(e, e.return, Ge);
              }
          }
          return;
        }
        case j: {
          Xi(t, e), Hl(e);
          return;
        }
        case ce: {
          Xi(t, e), Hl(e);
          var Q = e.child;
          if (Q.flags & ml) {
            var xe = Q.stateNode, Fe = Q.memoizedState, Le = Fe !== null;
            if (xe.isHidden = Le, Le) {
              var vt = Q.alternate !== null && Q.alternate.memoizedState !== null;
              vt || sN();
            }
          }
          if (s & tt) {
            try {
              RO(e);
            } catch (Ge) {
              Gt(e, e.return, Ge);
            }
            sC(e);
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
            _r = H || ft, Xi(t, e), _r = H;
          } else
            Xi(t, e);
          if (Hl(e), s & ml) {
            var q = e.stateNode, P = e.memoizedState, le = P !== null, Ce = e;
            if (q.isHidden = le, le && !ft && (Ce.mode & ot) !== Ye) {
              ke = Ce;
              for (var ge = Ce.child; ge !== null; )
                ke = ge, OO(ge), ge = ge.sibling;
            }
            _O(Ce, le);
          }
          return;
        }
        case it: {
          Xi(t, e), Hl(e), s & tt && sC(e);
          return;
        }
        case Mt:
          return;
        default: {
          Xi(t, e), Hl(e);
          return;
        }
      }
    }
    function Hl(e) {
      var t = e.flags;
      if (t & Vt) {
        try {
          TO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~Vt;
      }
      t & _a && (e.flags &= ~_a);
    }
    function MO(e, t, a) {
      nd = a, rd = t, ke = e, fC(e, t, a), nd = null, rd = null;
    }
    function fC(e, t, a) {
      for (var l = (e.mode & ot) !== Ye; ke !== null; ) {
        var s = ke, p = s.child;
        if (s.tag === Be && l) {
          var y = s.memoizedState !== null, E = y || Fy;
          if (E) {
            U1(e, t, a);
            continue;
          } else {
            var w = s.alternate, x = w !== null && w.memoizedState !== null, b = x || _r, A = Fy, L = _r;
            Fy = E, _r = b, _r && !L && (ke = s, NO(s));
            for (var V = p; V !== null; )
              ke = V, fC(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            ke = s, Fy = A, _r = L, U1(e, t, a);
            continue;
          }
        }
        (s.subtreeFlags & ur) !== je && p !== null ? (p.return = s, ke = p) : U1(e, t, a);
      }
    }
    function U1(e, t, a) {
      for (; ke !== null; ) {
        var l = ke;
        if ((l.flags & ur) !== je) {
          var s = l.alternate;
          Lt(l);
          try {
            EO(t, s, l, a);
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
    function OO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case T:
          case re:
          case W:
          case ee: {
            if (t.mode & $e)
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
            typeof l.componentWillUnmount == "function" && O1(t, t.return, l);
            break;
          }
          case G: {
            ad(t, t.return);
            break;
          }
          case Be: {
            var s = t.memoizedState !== null;
            if (s) {
              dC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : dC(e);
      }
    }
    function dC(e) {
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
    function NO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Be) {
          var l = t.memoizedState !== null;
          if (l) {
            pC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : pC(e);
      }
    }
    function pC(e) {
      for (; ke !== null; ) {
        var t = ke;
        Lt(t);
        try {
          wO(t);
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
    function LO(e, t, a, l) {
      ke = t, UO(t, e, a, l);
    }
    function UO(e, t, a, l) {
      for (; ke !== null; ) {
        var s = ke, p = s.child;
        (s.subtreeFlags & xa) !== je && p !== null ? (p.return = s, ke = p) : AO(e, t, a, l);
      }
    }
    function AO(e, t, a, l) {
      for (; ke !== null; ) {
        var s = ke;
        if ((s.flags & Kt) !== je) {
          Lt(s);
          try {
            zO(t, s, a, l);
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
    function zO(e, t, a, l) {
      switch (t.tag) {
        case T:
        case re:
        case ee: {
          if (t.mode & $e) {
            f1();
            try {
              Vu(Er | Gn, t);
            } finally {
              c1(t);
            }
          } else
            Vu(Er | Gn, t);
          break;
        }
      }
    }
    function jO(e) {
      ke = e, FO();
    }
    function FO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Tt) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var s = a[l];
              ke = s, YO(s, e);
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
        (e.subtreeFlags & xa) !== je && t !== null ? (t.return = e, ke = t) : HO();
      }
    }
    function HO() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & Kt) !== je && (Lt(e), PO(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function PO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          e.mode & $e ? (f1(), Zi(Er | Gn, e, e.return), c1(e)) : Zi(Er | Gn, e, e.return);
          break;
        }
      }
    }
    function YO(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        Lt(a), VO(a, t), xn();
        var l = a.child;
        l !== null ? (l.return = a, ke = l) : IO(e);
      }
    }
    function IO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, l = t.return;
        if (iC(t), t === e) {
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
    function VO(e, t) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          e.mode & $e ? (f1(), Zi(Er, e, t), c1(e)) : Zi(Er, e, t);
          break;
        }
      }
    }
    function $O(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          try {
            Vu(Qn | Gn, e);
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
    function BO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee: {
          try {
            Vu(Er | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
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
            Zi(Qn | Gn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && O1(e, e.return, t);
          break;
        }
      }
    }
    function GO(e) {
      switch (e.tag) {
        case T:
        case re:
        case ee:
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
    var QO = [];
    function qO() {
      QO.forEach(function(e) {
        return e();
      });
    }
    var ZO = c.ReactCurrentActQueue;
    function KO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function hC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && ZO.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var XO = Math.ceil, A1 = c.ReactCurrentDispatcher, z1 = c.ReactCurrentOwner, Cr = c.ReactCurrentBatchConfig, Ji = c.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), vC = (
      /*               */
      1
    ), Tr = (
      /*                */
      2
    ), Ei = (
      /*                */
      4
    ), Uo = 0, Sh = 1, rc = 2, Py = 3, Eh = 4, mC = 5, j1 = 6, ht = Kn, sa = null, vn = null, Xn = Z, Pl = Z, F1 = Uu(Z), Jn = Uo, wh = null, Yy = Z, _h = Z, Iy = Z, xh = null, Ua = null, H1 = 0, yC = 500, gC = 1 / 0, JO = 500, Ao = null;
    function Ch() {
      gC = en() + JO;
    }
    function SC() {
      return gC;
    }
    var Vy = !1, P1 = null, id = null, ac = !1, Bu = null, Th = Z, Y1 = [], I1 = null, eN = 50, bh = 0, V1 = null, $1 = !1, $y = !1, tN = 50, ld = 0, By = null, Rh = Ht, Wy = Z, EC = !1;
    function Gy() {
      return sa;
    }
    function ca() {
      return (ht & (Tr | Ei)) !== Kn ? en() : (Rh !== Ht || (Rh = en()), Rh);
    }
    function Wu(e) {
      var t = e.mode;
      if ((t & ot) === Ye)
        return We;
      if ((ht & Tr) !== Kn && Xn !== Z)
        return Tn(Xn);
      var a = Kk() !== Zk;
      if (a) {
        if (Cr.transition !== null) {
          var l = Cr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Wy === pt && (Wy = pp()), Wy;
      }
      var s = Ra();
      if (s !== pt)
        return s;
      var p = AD();
      return p;
    }
    function nN(e) {
      var t = e.mode;
      return (t & ot) === Ye ? We : f0();
    }
    function er(e, t, a, l) {
      bN(), EC && m("useInsertionEffect must not schedule updates."), $1 && ($y = !0), yo(e, a, l), (ht & Tr) !== Z && e === sa ? kN(t) : (Bn && gp(e, t, a), MN(t), e === sa && ((ht & Tr) === Kn && (_h = nt(_h, a)), Jn === Eh && Gu(e, Xn)), Aa(e, l), a === We && ht === Kn && (t.mode & ot) === Ye && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ji.isBatchingLegacy && (Ch(), S_()));
    }
    function rN(e, t, a) {
      var l = e.current;
      l.lanes = t, yo(e, t, a), Aa(e, a);
    }
    function aN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ht & Tr) !== Kn
      );
    }
    function Aa(e, t) {
      var a = e.callbackNode;
      u0(e, t);
      var l = ks(e, e === sa ? Xn : Z);
      if (l === Z) {
        a !== null && zC(a), e.callbackNode = null, e.callbackPriority = pt;
        return;
      }
      var s = Sn(l), p = e.callbackPriority;
      if (p === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ji.current !== null && a !== K1)) {
        a == null && p !== We && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && zC(a);
      var y;
      if (s === We)
        e.tag === Au ? (Ji.isBatchingLegacy !== null && (Ji.didScheduleLegacyUpdate = !0), Lk(xC.bind(null, e))) : g_(xC.bind(null, e)), Ji.current !== null ? Ji.current.push(zu) : jD(function() {
          (ht & (Tr | Ei)) === Kn && zu();
        }), y = null;
      else {
        var E;
        switch (Us(l)) {
          case sr:
            E = Vc;
            break;
          case Wn:
            E = ia;
            break;
          case Fi:
            E = ci;
            break;
          case Ns:
            E = gl;
            break;
          default:
            E = ci;
            break;
        }
        y = X1(E, wC.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = y;
    }
    function wC(e, t) {
      if (bM(), Rh = Ht, Wy = Z, (ht & (Tr | Ei)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = jo();
      if (l && e.callbackNode !== a)
        return null;
      var s = ks(e, e === sa ? Xn : Z);
      if (s === Z)
        return null;
      var p = !Os(e, s) && !im(e, s) && !t, y = p ? hN(e, s) : qy(e, s);
      if (y !== Uo) {
        if (y === rc) {
          var E = fp(e);
          E !== Z && (s = E, y = B1(e, E));
        }
        if (y === Sh) {
          var w = wh;
          throw ic(e, Z), Gu(e, s), Aa(e, en()), w;
        }
        if (y === j1)
          Gu(e, s);
        else {
          var x = !Os(e, s), b = e.current.alternate;
          if (x && !lN(b)) {
            if (y = qy(e, s), y === rc) {
              var A = fp(e);
              A !== Z && (s = A, y = B1(e, A));
            }
            if (y === Sh) {
              var L = wh;
              throw ic(e, Z), Gu(e, s), Aa(e, en()), L;
            }
          }
          e.finishedWork = b, e.finishedLanes = s, iN(e, y, s);
        }
      }
      return Aa(e, en()), e.callbackNode === a ? wC.bind(null, e) : null;
    }
    function B1(e, t) {
      var a = xh;
      if (Rn(e)) {
        var l = ic(e, t);
        l.flags |= on, bk(e.containerInfo);
      }
      var s = qy(e, t);
      if (s !== rc) {
        var p = Ua;
        Ua = a, p !== null && _C(p);
      }
      return s;
    }
    function _C(e) {
      Ua === null ? Ua = e : Ua.push.apply(Ua, e);
    }
    function iN(e, t, a) {
      switch (t) {
        case Uo:
        case Sh:
          throw new Error("Root did not complete. This is a bug in React.");
        case rc: {
          lc(e, Ua, Ao);
          break;
        }
        case Py: {
          if (Gu(e, a), hf(a) && // do not delay if we're inside an act() scope
          !jC()) {
            var l = H1 + yC - en();
            if (l > 10) {
              var s = ks(e, Z);
              if (s !== Z)
                break;
              var p = e.suspendedLanes;
              if (!mo(p, a)) {
                ca(), mp(e, p);
                break;
              }
              e.timeoutHandle = I0(lc.bind(null, e, Ua, Ao), l);
              break;
            }
          }
          lc(e, Ua, Ao);
          break;
        }
        case Eh: {
          if (Gu(e, a), am(a))
            break;
          if (!jC()) {
            var y = rm(e, a), E = y, w = en() - E, x = TN(w) - w;
            if (x > 10) {
              e.timeoutHandle = I0(lc.bind(null, e, Ua, Ao), x);
              break;
            }
          }
          lc(e, Ua, Ao);
          break;
        }
        case mC: {
          lc(e, Ua, Ao);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function lN(e) {
      for (var t = e; ; ) {
        if (t.flags & _s) {
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
        if (t.subtreeFlags & _s && w !== null) {
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
    function Gu(e, t) {
      t = yu(t, Iy), t = yu(t, _h), vp(e, t);
    }
    function xC(e) {
      if (RM(), (ht & (Tr | Ei)) !== Kn)
        throw new Error("Should not already be working.");
      jo();
      var t = ks(e, Z);
      if (!Yr(t, We))
        return Aa(e, en()), null;
      var a = qy(e, t);
      if (e.tag !== Au && a === rc) {
        var l = fp(e);
        l !== Z && (t = l, a = B1(e, l));
      }
      if (a === Sh) {
        var s = wh;
        throw ic(e, Z), Gu(e, t), Aa(e, en()), s;
      }
      if (a === j1)
        throw new Error("Root did not complete. This is a bug in React.");
      var p = e.current.alternate;
      return e.finishedWork = p, e.finishedLanes = t, lc(e, Ua, Ao), Aa(e, en()), null;
    }
    function oN(e, t) {
      t !== Z && (gu(e, nt(t, We)), Aa(e, en()), (ht & (Tr | Ei)) === Kn && (Ch(), zu()));
    }
    function W1(e, t) {
      var a = ht;
      ht |= vC;
      try {
        return e(t);
      } finally {
        ht = a, ht === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ji.isBatchingLegacy && (Ch(), S_());
      }
    }
    function uN(e, t, a, l, s) {
      var p = Ra(), y = Cr.transition;
      try {
        return Cr.transition = null, bn(sr), e(t, a, l, s);
      } finally {
        bn(p), Cr.transition = y, ht === Kn && Ch();
      }
    }
    function zo(e) {
      Bu !== null && Bu.tag === Au && (ht & (Tr | Ei)) === Kn && jo();
      var t = ht;
      ht |= vC;
      var a = Cr.transition, l = Ra();
      try {
        return Cr.transition = null, bn(sr), e ? e() : void 0;
      } finally {
        bn(l), Cr.transition = a, ht = t, (ht & (Tr | Ei)) === Kn && zu();
      }
    }
    function CC() {
      return (ht & (Tr | Ei)) !== Kn;
    }
    function Qy(e, t) {
      Vr(F1, Pl, e), Pl = nt(Pl, t);
    }
    function G1(e) {
      Pl = F1.current, Ir(F1, e);
    }
    function ic(e, t) {
      e.finishedWork = null, e.finishedLanes = Z;
      var a = e.timeoutHandle;
      if (a !== V0 && (e.timeoutHandle = V0, zD(a)), vn !== null)
        for (var l = vn.return; l !== null; ) {
          var s = l.alternate;
          Jx(s, l), l = l.return;
        }
      sa = e;
      var p = oc(e.current, null);
      return vn = p, Xn = Pl = t, Jn = Uo, wh = null, Yy = Z, _h = Z, Iy = Z, xh = null, Ua = null, tM(), Bi.discardPendingWarnings(), p;
    }
    function TC(e, t) {
      do {
        var a = vn;
        try {
          if (ny(), tx(), xn(), z1.current = null, a === null || a.return === null) {
            Jn = Sh, wh = t, vn = null;
            return;
          }
          if (_n && a.mode & $e && Uy(a, !0), ri)
            if (lo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              em(a, l, Xn);
            } else
              Qc(a, t, Xn);
          NM(e, a.return, a, t, Xn), kC(a);
        } catch (s) {
          t = s, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function bC() {
      var e = A1.current;
      return A1.current = ky, e === null ? ky : e;
    }
    function RC(e) {
      A1.current = e;
    }
    function sN() {
      H1 = en();
    }
    function Dh(e) {
      Yy = nt(e, Yy);
    }
    function cN() {
      Jn === Uo && (Jn = Py);
    }
    function Q1() {
      (Jn === Uo || Jn === Py || Jn === rc) && (Jn = Eh), sa !== null && (Ms(Yy) || Ms(_h)) && Gu(sa, Xn);
    }
    function fN(e) {
      Jn !== Eh && (Jn = rc), xh === null ? xh = [e] : xh.push(e);
    }
    function dN() {
      return Jn === Uo;
    }
    function qy(e, t) {
      var a = ht;
      ht |= Tr;
      var l = bC();
      if (sa !== e || Xn !== t) {
        if (Bn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (kh(e, Xn), s.clear()), yf(e, t);
        }
        Ao = Sp(), ic(e, t);
      }
      Za(t);
      do
        try {
          pN();
          break;
        } catch (p) {
          TC(e, p);
        }
      while (!0);
      if (ny(), ht = a, RC(l), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return du(), sa = null, Xn = Z, Jn;
    }
    function pN() {
      for (; vn !== null; )
        DC(vn);
    }
    function hN(e, t) {
      var a = ht;
      ht |= Tr;
      var l = bC();
      if (sa !== e || Xn !== t) {
        if (Bn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (kh(e, Xn), s.clear()), yf(e, t);
        }
        Ao = Sp(), Ch(), ic(e, t);
      }
      Za(t);
      do
        try {
          vN();
          break;
        } catch (p) {
          TC(e, p);
        }
      while (!0);
      return ny(), RC(l), ht = a, vn !== null ? (Ts(), Uo) : (du(), sa = null, Xn = Z, Jn);
    }
    function vN() {
      for (; vn !== null && !Ic(); )
        DC(vn);
    }
    function DC(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & $e) !== Ye ? (s1(e), a = q1(t, e, Pl), Uy(e, !0)) : a = q1(t, e, Pl), xn(), e.memoizedProps = e.pendingProps, a === null ? kC(e) : vn = a, z1.current = null;
    }
    function kC(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & na) === je) {
          Lt(t);
          var s = void 0;
          if ((t.mode & $e) === Ye ? s = Xx(a, t, Pl) : (s1(t), s = Xx(a, t, Pl), Uy(t, !1)), xn(), s !== null) {
            vn = s;
            return;
          }
        } else {
          var p = cO(a, t);
          if (p !== null) {
            p.flags &= Bv, vn = p;
            return;
          }
          if ((t.mode & $e) !== Ye) {
            Uy(t, !1);
            for (var y = t.actualDuration, E = t.child; E !== null; )
              y += E.actualDuration, E = E.sibling;
            t.actualDuration = y;
          }
          if (l !== null)
            l.flags |= na, l.subtreeFlags = je, l.deletions = null;
          else {
            Jn = j1, vn = null;
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
      Jn === Uo && (Jn = mC);
    }
    function lc(e, t, a) {
      var l = Ra(), s = Cr.transition;
      try {
        Cr.transition = null, bn(sr), mN(e, t, a, l);
      } finally {
        Cr.transition = s, bn(l);
      }
      return null;
    }
    function mN(e, t, a, l) {
      do
        jo();
      while (Bu !== null);
      if (RN(), (ht & (Tr | Ei)) !== Kn)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, p = e.finishedLanes;
      if (Bc(p), s === null)
        return lp(), null;
      if (p === Z && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Z, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = pt;
      var y = nt(s.lanes, s.childLanes);
      yp(e, y), e === sa && (sa = null, vn = null, Xn = Z), ((s.subtreeFlags & xa) !== je || (s.flags & xa) !== je) && (ac || (ac = !0, I1 = a, X1(ci, function() {
        return jo(), null;
      })));
      var E = (s.subtreeFlags & (su | jr | ur | xa)) !== je, w = (s.flags & (su | jr | ur | xa)) !== je;
      if (E || w) {
        var x = Cr.transition;
        Cr.transition = null;
        var b = Ra();
        bn(sr);
        var A = ht;
        ht |= Ei, z1.current = null, vO(e, s), bx(), kO(e, s, p), kD(e.containerInfo), e.current = s, tm(p), MO(s, e, p), fu(), Qv(), ht = A, bn(b), Cr.transition = x;
      } else
        e.current = s, bx();
      var L = ac;
      if (ac ? (ac = !1, Bu = e, Th = p) : (ld = 0, By = null), y = e.pendingLanes, y === Z && (id = null), L || LC(e.current, !1), Ai(s.stateNode, l), Bn && e.memoizedUpdaters.clear(), qO(), Aa(e, en()), t !== null)
        for (var V = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var Q = t[$], xe = Q.stack, Fe = Q.digest;
          V(Q.value, {
            componentStack: xe,
            digest: Fe
          });
        }
      if (Vy) {
        Vy = !1;
        var Le = P1;
        throw P1 = null, Le;
      }
      return Yr(Th, We) && e.tag !== Au && jo(), y = e.pendingLanes, Yr(y, We) ? (TM(), e === V1 ? bh++ : (bh = 0, V1 = e)) : bh = 0, zu(), lp(), null;
    }
    function jo() {
      if (Bu !== null) {
        var e = Us(Th), t = p0(Fi, e), a = Cr.transition, l = Ra();
        try {
          return Cr.transition = null, bn(t), gN();
        } finally {
          bn(l), Cr.transition = a;
        }
      }
      return !1;
    }
    function yN(e) {
      Y1.push(e), ac || (ac = !0, X1(ci, function() {
        return jo(), null;
      }));
    }
    function gN() {
      if (Bu === null)
        return !1;
      var e = I1;
      I1 = null;
      var t = Bu, a = Th;
      if (Bu = null, Th = Z, (ht & (Tr | Ei)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      $1 = !0, $y = !1, nm(a);
      var l = ht;
      ht |= Ei, jO(t.current), LO(t, t.current, a, e);
      {
        var s = Y1;
        Y1 = [];
        for (var p = 0; p < s.length; p++) {
          var y = s[p];
          SO(t, y);
        }
      }
      Cs(), LC(t.current, !0), ht = l, zu(), $y ? t === By ? ld++ : (ld = 0, By = t) : ld = 0, $1 = !1, $y = !1, El(t);
      {
        var E = t.current.stateNode;
        E.effectDuration = 0, E.passiveEffectDuration = 0;
      }
      return !0;
    }
    function MC(e) {
      return id !== null && id.has(e);
    }
    function SN(e) {
      id === null ? id = /* @__PURE__ */ new Set([e]) : id.add(e);
    }
    function EN(e) {
      Vy || (Vy = !0, P1 = e);
    }
    var wN = EN;
    function OC(e, t, a) {
      var l = tc(a, t), s = Dx(e, l, We), p = Fu(e, s, We), y = ca();
      p !== null && (yo(p, We, y), Aa(p, y));
    }
    function Gt(e, t, a) {
      if (dO(a), Mh(!1), e.tag === O) {
        OC(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === O) {
          OC(l, e, a);
          return;
        } else if (l.tag === R) {
          var s = l.type, p = l.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && !MC(p)) {
            var y = tc(a, e), E = v1(l, y, We), w = Fu(l, E, We), x = ca();
            w !== null && (yo(w, We, x), Aa(w, x));
            return;
          }
        }
        l = l.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function _N(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var s = ca();
      mp(e, a), ON(e), sa === e && mo(Xn, a) && (Jn === Eh || Jn === Py && hf(Xn) && en() - H1 < yC ? ic(e, Z) : Iy = nt(Iy, a)), Aa(e, s);
    }
    function NC(e, t) {
      t === pt && (t = nN(e));
      var a = ca(), l = Na(e, t);
      l !== null && (yo(l, t, a), Aa(l, a));
    }
    function xN(e) {
      var t = e.memoizedState, a = pt;
      t !== null && (a = t.retryLane), NC(e, a);
    }
    function CN(e, t) {
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
      l !== null && l.delete(t), NC(e, a);
    }
    function TN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : XO(e / 1960) * 1960;
    }
    function bN() {
      if (bh > eN)
        throw bh = 0, V1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > tN && (ld = 0, By = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function RN() {
      Bi.flushLegacyContextWarning(), Bi.flushPendingUnsafeLifecycleWarnings();
    }
    function LC(e, t) {
      Lt(e), Zy(e, zr, WO), t && Zy(e, io, GO), Zy(e, zr, $O), t && Zy(e, io, BO), xn();
    }
    function Zy(e, t, a) {
      for (var l = e, s = null; l !== null; ) {
        var p = l.subtreeFlags & t;
        l !== s && l.child !== null && p !== je ? l = l.child : ((l.flags & t) !== je && a(l), l.sibling !== null ? l = l.sibling : l = s = l.return);
      }
    }
    var Ky = null;
    function UC(e) {
      {
        if ((ht & Tr) !== Kn || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== k && t !== O && t !== R && t !== T && t !== re && t !== W && t !== ee)
          return;
        var a = et(e) || "ReactComponent";
        if (Ky !== null) {
          if (Ky.has(a))
            return;
          Ky.add(a);
        } else
          Ky = /* @__PURE__ */ new Set([a]);
        var l = yn;
        try {
          Lt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Lt(e) : xn();
        }
      }
    }
    var q1;
    {
      var DN = null;
      q1 = function(e, t, a) {
        var l = IC(DN, t);
        try {
          return Gx(e, t, a);
        } catch (p) {
          if (Yk() || p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (ny(), tx(), Jx(e, t), IC(t, l), t.mode & $e && s1(t), ao(null, Gx, null, e, t, a), l0()) {
            var s = qd();
            typeof s == "object" && s !== null && s._suppressLogging && typeof p == "object" && p !== null && !p._suppressLogging && (p._suppressLogging = !0);
          }
          throw p;
        }
      };
    }
    var AC = !1, Z1;
    Z1 = /* @__PURE__ */ new Set();
    function kN(e) {
      if (ya && !_M())
        switch (e.tag) {
          case T:
          case re:
          case ee: {
            var t = vn && et(vn) || "Unknown", a = t;
            if (!Z1.has(a)) {
              Z1.add(a);
              var l = et(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case R: {
            AC || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), AC = !0);
            break;
          }
        }
    }
    function kh(e, t) {
      if (Bn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          gp(e, l, t);
        });
      }
    }
    var K1 = {};
    function X1(e, t) {
      {
        var a = Ji.current;
        return a !== null ? (a.push(t), K1) : Yc(e, t);
      }
    }
    function zC(e) {
      if (e !== K1)
        return Gv(e);
    }
    function jC() {
      return Ji.current !== null;
    }
    function MN(e) {
      {
        if (e.mode & ot) {
          if (!hC())
            return;
        } else if (!KO() || ht !== Kn || e.tag !== T && e.tag !== re && e.tag !== ee)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? Lt(e) : xn();
          }
        }
      }
    }
    function ON(e) {
      e.tag !== Au && hC() && Ji.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Mh(e) {
      EC = e;
    }
    var wi = null, od = null, NN = function(e) {
      wi = e;
    };
    function ud(e) {
      {
        if (wi === null)
          return e;
        var t = wi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function J1(e) {
      return ud(e);
    }
    function eE(e) {
      {
        if (wi === null)
          return e;
        var t = wi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ud(e.render);
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
    function FC(e, t) {
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
    function HC(e) {
      {
        if (wi === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var LN = function(e, t) {
      {
        if (wi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        jo(), zo(function() {
          tE(e.current, l, a);
        });
      }
    }, UN = function(e, t) {
      {
        if (e.context !== Xa)
          return;
        jo(), zo(function() {
          Oh(t, e, null, null);
        });
      }
    };
    function tE(e, t, a) {
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
        if (od !== null && (od.has(e) || l !== null && od.has(l)) && (b = !0), b && (e._debugNeedsRemount = !0), b || x) {
          var L = Na(e, We);
          L !== null && er(L, e, We, Ht);
        }
        s !== null && !b && tE(s, t, a), p !== null && tE(p, t, a);
      }
    }
    var AN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(s) {
          return s.current;
        }));
        return nE(e.current, l, a), a;
      }
    };
    function nE(e, t, a) {
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
        E !== null && t.has(E) && (w = !0), w ? zN(e, a) : l !== null && nE(l, t, a), s !== null && nE(s, t, a);
      }
    }
    function zN(e, t) {
      {
        var a = jN(e, t);
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
    function jN(e, t) {
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
    var rE;
    {
      rE = !1;
      try {
        var PC = Object.preventExtensions({});
      } catch {
        rE = !0;
      }
    }
    function FN(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = Z, this.childLanes = Z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !rE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ja = function(e, t, a, l) {
      return new FN(e, t, a, l);
    };
    function aE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function HN(e) {
      return typeof e == "function" && !aE(e) && e.defaultProps === void 0;
    }
    function PN(e) {
      if (typeof e == "function")
        return aE(e) ? R : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Pe)
          return re;
        if (t === at)
          return W;
      }
      return k;
    }
    function oc(e, t) {
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
          a.type = ud(e.type);
          break;
        case R:
          a.type = J1(e.type);
          break;
        case re:
          a.type = eE(e.type);
          break;
      }
      return a;
    }
    function YN(e, t) {
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
    function IN(e, t, a) {
      var l;
      return e === Qm ? (l = ot, t === !0 && (l |= tn, l |= Ta)) : l = Ye, Bn && (l |= $e), Ja(O, null, null, l);
    }
    function iE(e, t, a, l, s, p) {
      var y = k, E = e;
      if (typeof e == "function")
        aE(e) ? (y = R, E = J1(E)) : E = ud(E);
      else if (typeof e == "string")
        y = G;
      else
        e:
          switch (e) {
            case Va:
              return Qu(a.children, s, p, t);
            case ll:
              y = ve, s |= tn, (s & ot) !== Ye && (s |= Ta);
              break;
            case M:
              return VN(a, s, p, t);
            case rt:
              return $N(a, s, p, t);
            case mt:
              return BN(a, s, p, t);
            case Zt:
              return YC(a, s, p, t);
            case mr:
            case Ln:
            case ol:
            case mc:
            case qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    y = K;
                    break e;
                  case ye:
                    y = Se;
                    break e;
                  case Pe:
                    y = re, E = eE(E);
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
    function lE(e, t, a) {
      var l = null;
      l = e._owner;
      var s = e.type, p = e.key, y = e.props, E = iE(s, p, y, l, t, a);
      return E._debugSource = e._source, E._debugOwner = e._owner, E;
    }
    function Qu(e, t, a, l) {
      var s = Ja(J, e, l, t);
      return s.lanes = a, s;
    }
    function VN(e, t, a, l) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Ja(se, e, l, t | $e);
      return s.elementType = M, s.lanes = a, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function $N(e, t, a, l) {
      var s = Ja(ce, e, l, t);
      return s.elementType = rt, s.lanes = a, s;
    }
    function BN(e, t, a, l) {
      var s = Ja(it, e, l, t);
      return s.elementType = mt, s.lanes = a, s;
    }
    function YC(e, t, a, l) {
      var s = Ja(Be, e, l, t);
      s.elementType = Zt, s.lanes = a;
      var p = {
        isHidden: !1
      };
      return s.stateNode = p, s;
    }
    function oE(e, t, a) {
      var l = Ja(z, e, null, t);
      return l.lanes = a, l;
    }
    function WN() {
      var e = Ja(G, null, null, Ye);
      return e.elementType = "DELETED", e;
    }
    function GN(e) {
      var t = Ja(Qe, null, null, Ye);
      return t.stateNode = e, t;
    }
    function uE(e, t, a) {
      var l = e.children !== null ? e.children : [], s = Ja(j, l, e.key, t);
      return s.lanes = a, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function IC(e, t) {
      return e === null && (e = Ja(k, null, null, Ye)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function QN(e, t, a, l, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = V0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = pt, this.eventTimes = mf(Z), this.expirationTimes = mf(Ht), this.pendingLanes = Z, this.suspendedLanes = Z, this.pingedLanes = Z, this.expiredLanes = Z, this.mutableReadLanes = Z, this.finishedLanes = Z, this.entangledLanes = Z, this.entanglements = mf(Z), this.identifierPrefix = l, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var p = this.pendingUpdatersLaneMap = [], y = 0; y < Bt; y++)
          p.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Qm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Au:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function VC(e, t, a, l, s, p, y, E, w, x) {
      var b = new QN(e, t, a, E, w), A = IN(t, p);
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
      return mS(A), b;
    }
    var sE = "18.2.0";
    function qN(e, t, a) {
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
    var cE, fE;
    cE = !1, fE = {};
    function $C(e) {
      if (!e)
        return Xa;
      var t = Ea(e), a = Nk(t);
      if (t.tag === R) {
        var l = t.type;
        if (Ll(l))
          return m_(t, l, a);
      }
      return a;
    }
    function ZN(e, t) {
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
          if (!fE[p]) {
            fE[p] = !0;
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
    function BC(e, t, a, l, s, p, y, E) {
      var w = !1, x = null;
      return VC(e, t, w, x, a, l, s, p, y);
    }
    function WC(e, t, a, l, s, p, y, E, w, x) {
      var b = !0, A = VC(a, l, b, e, s, p, y, E, w);
      A.context = $C(null);
      var L = A.current, V = ca(), $ = Wu(L), Q = No(V, $);
      return Q.callback = t ?? null, Fu(L, Q, $), rN(A, $, V), A;
    }
    function Oh(e, t, a, l) {
      qv(t, e);
      var s = t.current, p = ca(), y = Wu(s);
      oo(y);
      var E = $C(a);
      t.context === null ? t.context = E : t.pendingContext = E, ya && yn !== null && !cE && (cE = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(yn) || "Unknown"));
      var w = No(p, y);
      w.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l);
      var x = Fu(s, w, y);
      return x !== null && (er(x, s, y, p), oy(x, s, y)), y;
    }
    function Xy(e) {
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
    function KN(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (Rn(t)) {
            var a = s0(t);
            oN(t, a);
          }
          break;
        }
        case ce: {
          zo(function() {
            var s = Na(e, We);
            if (s !== null) {
              var p = ca();
              er(s, e, We, p);
            }
          });
          var l = We;
          dE(e, l);
          break;
        }
      }
    }
    function GC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = om(a.retryLane, t));
    }
    function dE(e, t) {
      GC(e, t);
      var a = e.alternate;
      a && GC(a, t);
    }
    function XN(e) {
      if (e.tag === ce) {
        var t = pu, a = Na(e, t);
        if (a !== null) {
          var l = ca();
          er(a, e, t, l);
        }
        dE(e, t);
      }
    }
    function JN(e) {
      if (e.tag === ce) {
        var t = Wu(e), a = Na(e, t);
        if (a !== null) {
          var l = ca();
          er(a, e, t, l);
        }
        dE(e, t);
      }
    }
    function QC(e) {
      var t = Wv(e);
      return t === null ? null : t.stateNode;
    }
    var qC = function(e) {
      return null;
    };
    function eL(e) {
      return qC(e);
    }
    var ZC = function(e) {
      return !1;
    };
    function tL(e) {
      return ZC(e);
    }
    var KC = null, XC = null, JC = null, eT = null, tT = null, nT = null, rT = null, aT = null, iT = null;
    {
      var lT = function(e, t, a) {
        var l = t[a], s = Un(e) ? e.slice() : st({}, e);
        return a + 1 === t.length ? (Un(s) ? s.splice(l, 1) : delete s[l], s) : (s[l] = lT(e[l], t, a + 1), s);
      }, oT = function(e, t) {
        return lT(e, t, 0);
      }, uT = function(e, t, a, l) {
        var s = t[l], p = Un(e) ? e.slice() : st({}, e);
        if (l + 1 === t.length) {
          var y = a[l];
          p[y] = p[s], Un(p) ? p.splice(s, 1) : delete p[s];
        } else
          p[s] = uT(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            a,
            l + 1
          );
        return p;
      }, sT = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return uT(e, t, a, 0);
      }, cT = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var s = t[a], p = Un(e) ? e.slice() : st({}, e);
        return p[s] = cT(e[s], t, a + 1, l), p;
      }, fT = function(e, t, a) {
        return cT(e, t, 0, a);
      }, pE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      KC = function(e, t, a, l) {
        var s = pE(e, t);
        if (s !== null) {
          var p = fT(s.memoizedState, a, l);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = st({}, e.memoizedProps);
          var y = Na(e, We);
          y !== null && er(y, e, We, Ht);
        }
      }, XC = function(e, t, a) {
        var l = pE(e, t);
        if (l !== null) {
          var s = oT(l.memoizedState, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var p = Na(e, We);
          p !== null && er(p, e, We, Ht);
        }
      }, JC = function(e, t, a, l) {
        var s = pE(e, t);
        if (s !== null) {
          var p = sT(s.memoizedState, a, l);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = st({}, e.memoizedProps);
          var y = Na(e, We);
          y !== null && er(y, e, We, Ht);
        }
      }, eT = function(e, t, a) {
        e.pendingProps = fT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Na(e, We);
        l !== null && er(l, e, We, Ht);
      }, tT = function(e, t) {
        e.pendingProps = oT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Na(e, We);
        a !== null && er(a, e, We, Ht);
      }, nT = function(e, t, a) {
        e.pendingProps = sT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Na(e, We);
        l !== null && er(l, e, We, Ht);
      }, rT = function(e) {
        var t = Na(e, We);
        t !== null && er(t, e, We, Ht);
      }, aT = function(e) {
        qC = e;
      }, iT = function(e) {
        ZC = e;
      };
    }
    function nL(e) {
      var t = Ca(e);
      return t === null ? null : t.stateNode;
    }
    function rL(e) {
      return null;
    }
    function aL() {
      return yn;
    }
    function iL(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return ap({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: KC,
        overrideHookStateDeletePath: XC,
        overrideHookStateRenamePath: JC,
        overrideProps: eT,
        overridePropsDeletePath: tT,
        overridePropsRenamePath: nT,
        setErrorHandler: aT,
        setSuspenseHandler: iT,
        scheduleUpdate: rT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: nL,
        findFiberByHostInstance: t || rL,
        // React Refresh
        findHostInstancesForRefresh: AN,
        scheduleRefresh: LN,
        scheduleRoot: UN,
        setRefreshHandler: NN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: aL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: sE
      });
    }
    var dT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function hE(e) {
      this._internalRoot = e;
    }
    Jy.prototype.render = hE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : eg(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gn) {
          var l = QC(t.current);
          l && l.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Oh(e, t, null, null);
    }, Jy.prototype.unmount = hE.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        CC() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zo(function() {
          Oh(null, e, null, null);
        }), f_(t);
      }
    };
    function lL(e, t) {
      if (!eg(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      pT(e);
      var a = !1, l = !1, s = "", p = dT;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === il && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var y = BC(e, Qm, null, a, l, s, p);
      Ym(y.current, e);
      var E = e.nodeType === gn ? e.parentNode : e;
      return Hp(E), new hE(y);
    }
    function Jy(e) {
      this._internalRoot = e;
    }
    function oL(e) {
      e && vm(e);
    }
    Jy.prototype.unstable_scheduleHydration = oL;
    function uL(e, t, a) {
      if (!eg(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      pT(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, s = a != null && a.hydratedSources || null, p = !1, y = !1, E = "", w = dT;
      a != null && (a.unstable_strictMode === !0 && (p = !0), a.identifierPrefix !== void 0 && (E = a.identifierPrefix), a.onRecoverableError !== void 0 && (w = a.onRecoverableError));
      var x = WC(t, null, e, Qm, l, p, y, E, w);
      if (Ym(x.current, e), Hp(e), s)
        for (var b = 0; b < s.length; b++) {
          var A = s[b];
          mM(x, A);
        }
      return new Jy(x);
    }
    function eg(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ga || e.nodeType === Xl || !Ct));
    }
    function Nh(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ga || e.nodeType === Xl || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function pT(e) {
      e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var sL = c.ReactCurrentOwner, hT;
    hT = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = QC(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = vE(e), s = !!(l && Lu(l));
      s && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function vE(e) {
      return e ? e.nodeType === Ga ? e.documentElement : e.firstChild : null;
    }
    function vT() {
    }
    function cL(e, t, a, l, s) {
      if (s) {
        if (typeof l == "function") {
          var p = l;
          l = function() {
            var L = Xy(y);
            p.call(L);
          };
        }
        var y = WC(
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
          vT
        );
        e._reactRootContainer = y, Ym(y.current, e);
        var E = e.nodeType === gn ? e.parentNode : e;
        return Hp(E), zo(), y;
      } else {
        for (var w; w = e.lastChild; )
          e.removeChild(w);
        if (typeof l == "function") {
          var x = l;
          l = function() {
            var L = Xy(b);
            x.call(L);
          };
        }
        var b = BC(
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
          vT
        );
        e._reactRootContainer = b, Ym(b.current, e);
        var A = e.nodeType === gn ? e.parentNode : e;
        return Hp(A), zo(function() {
          Oh(t, b, a, l);
        }), b;
      }
    }
    function fL(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function tg(e, t, a, l, s) {
      hT(a), fL(s === void 0 ? null : s, "render");
      var p = a._reactRootContainer, y;
      if (!p)
        y = cL(a, t, e, s, l);
      else {
        if (y = p, typeof s == "function") {
          var E = s;
          s = function() {
            var w = Xy(y);
            E.call(w);
          };
        }
        Oh(t, y, e, s);
      }
      return Xy(y);
    }
    function dL(e) {
      {
        var t = sL.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Lr ? e : ZN(e, "findDOMNode");
    }
    function pL(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Zp(t) && t._reactRootContainer === void 0;
        l && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return tg(null, e, t, !0, a);
    }
    function hL(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Zp(t) && t._reactRootContainer === void 0;
        l && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return tg(null, e, t, !1, a);
    }
    function vL(e, t, a, l) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ws(e))
        throw new Error("parentComponent must be a valid React Component");
      return tg(e, t, a, !1, l);
    }
    function mL(e) {
      if (!Nh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = vE(e), l = a && !Lu(a);
          l && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zo(function() {
          tg(null, null, e, !1, function() {
            e._reactRootContainer = null, f_(e);
          });
        }), !0;
      } else {
        {
          var s = vE(e), p = !!(s && Lu(s)), y = e.nodeType === Lr && Nh(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Te(KN), sm(XN), zs(JN), wp(Ra), fm(Ls), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Vv(SD), zc(W1, uN, zo);
    function yL(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!eg(t))
        throw new Error("Target container is not a DOM element.");
      return qN(e, t, null, a);
    }
    function gL(e, t, a, l) {
      return vL(e, t, a, l);
    }
    var mE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lu, Hf, Im, Ac, gs, W1]
    };
    function SL(e, t) {
      return mE.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lL(e, t);
    }
    function EL(e, t, a) {
      return mE.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uL(e, t, a);
    }
    function wL(e) {
      return CC() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zo(e);
    }
    var _L = iL({
      findFiberByHostInstance: Ws,
      bundleType: 1,
      version: sE,
      rendererPackageName: "react-dom"
    });
    if (!_L && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var mT = window.location.protocol;
      /^(https?|file):$/.test(mT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (mT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mE, ja.createPortal = yL, ja.createRoot = SL, ja.findDOMNode = dL, ja.flushSync = wL, ja.hydrate = pL, ja.hydrateRoot = EL, ja.render = hL, ja.unmountComponentAtNode = mL, ja.unstable_batchedUpdates = W1, ja.unstable_renderSubtreeIntoContainer = gL, ja.version = sE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ja;
}
function gR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gR);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (gR(), GE.exports = Zj()) : GE.exports = Kj();
var Xj = GE.exports;
const $h = /^[a-z0-9]+(-[a-z0-9]+)*$/, Fg = (i, o, c, d = "") => {
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
    return o && !pg(R) ? null : R;
  }
  const S = h[0], m = S.split("-");
  if (m.length > 1) {
    const C = {
      provider: d,
      prefix: m.shift(),
      name: m.join("-")
    };
    return o && !pg(C) ? null : C;
  }
  if (c && d === "") {
    const C = {
      provider: d,
      prefix: "",
      name: S
    };
    return o && !pg(C, c) ? null : C;
  }
  return null;
}, pg = (i, o) => i ? !!((i.provider === "" || i.provider.match($h)) && (o && i.prefix === "" || i.prefix.match($h)) && i.name.match($h)) : !1, SR = Object.freeze(
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
}), Mw = Object.freeze({
  ...SR,
  ..._g
}), QE = Object.freeze({
  ...Mw,
  body: "",
  hidden: !1
});
function Jj(i, o) {
  const c = {};
  !i.hFlip != !o.hFlip && (c.hFlip = !0), !i.vFlip != !o.vFlip && (c.vFlip = !0);
  const d = ((i.rotate || 0) + (o.rotate || 0)) % 4;
  return d && (c.rotate = d), c;
}
function IT(i, o) {
  const c = Jj(i, o);
  for (const d in QE)
    d in _g ? d in i && !(d in c) && (c[d] = _g[d]) : d in o ? c[d] = o[d] : d in i && (c[d] = i[d]);
  return c;
}
function eF(i, o) {
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
function tF(i, o, c) {
  const d = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null);
  let S = {};
  function m(C) {
    S = IT(
      d[C] || h[C],
      S
    );
  }
  return m(o), c.forEach(m), IT(i, S);
}
function ER(i, o) {
  const c = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return c;
  i.not_found instanceof Array && i.not_found.forEach((h) => {
    o(h, null), c.push(h);
  });
  const d = eF(i);
  for (const h in d) {
    const S = d[h];
    S && (o(h, tF(i, h, S)), c.push(h));
  }
  return c;
}
const nF = {
  provider: "",
  aliases: {},
  not_found: {},
  ...SR
};
function bE(i, o) {
  for (const c in o)
    if (c in i && typeof i[c] != typeof o[c])
      return !1;
  return !0;
}
function wR(i) {
  if (typeof i != "object" || i === null)
    return null;
  const o = i;
  if (typeof o.prefix != "string" || !i.icons || typeof i.icons != "object" || !bE(i, nF))
    return null;
  const c = o.icons;
  for (const h in c) {
    const S = c[h];
    if (!h.match($h) || typeof S.body != "string" || !bE(
      S,
      QE
    ))
      return null;
  }
  const d = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const h in d) {
    const S = d[h], m = S.parent;
    if (!h.match($h) || typeof m != "string" || !c[m] && !d[m] || !bE(
      S,
      QE
    ))
      return null;
  }
  return o;
}
const VT = /* @__PURE__ */ Object.create(null);
function rF(i, o) {
  return {
    provider: i,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pc(i, o) {
  const c = VT[i] || (VT[i] = /* @__PURE__ */ Object.create(null));
  return c[o] || (c[o] = rF(i, o));
}
function Ow(i, o) {
  return wR(o) ? ER(o, (c, d) => {
    d ? i.icons[c] = d : i.missing.add(c);
  }) : [];
}
function aF(i, o, c) {
  try {
    if (typeof c.body == "string")
      return i.icons[o] = { ...c }, !0;
  } catch {
  }
  return !1;
}
let Kh = !1;
function _R(i) {
  return typeof i == "boolean" && (Kh = i), Kh;
}
function iF(i) {
  const o = typeof i == "string" ? Fg(i, !0, Kh) : i;
  if (o) {
    const c = pc(o.provider, o.prefix), d = o.name;
    return c.icons[d] || (c.missing.has(d) ? null : void 0);
  }
}
function lF(i, o) {
  const c = Fg(i, !0, Kh);
  if (!c)
    return !1;
  const d = pc(c.provider, c.prefix);
  return aF(d, c.name, o);
}
function oF(i, o) {
  if (typeof i != "object")
    return !1;
  if (typeof o != "string" && (o = i.provider || ""), Kh && !o && !i.prefix) {
    let h = !1;
    return wR(i) && (i.prefix = "", ER(i, (S, m) => {
      m && lF(S, m) && (h = !0);
    })), h;
  }
  const c = i.prefix;
  if (!pg({
    provider: o,
    prefix: c,
    name: "a"
  }))
    return !1;
  const d = pc(o, c);
  return !!Ow(d, i);
}
const xR = Object.freeze({
  width: null,
  height: null
}), CR = Object.freeze({
  // Dimensions
  ...xR,
  // Transformations
  ..._g
}), uF = /(-?[0-9.]*[0-9]+[0-9.]*)/g, sF = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function $T(i, o, c) {
  if (o === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * o * c) / c;
  if (typeof i != "string")
    return i;
  const d = i.split(uF);
  if (d === null || !d.length)
    return i;
  const h = [];
  let S = d.shift(), m = sF.test(S);
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
const cF = (i) => i === "unset" || i === "undefined" || i === "none";
function fF(i, o) {
  const c = {
    ...Mw,
    ...i
  }, d = {
    ...CR,
    ...o
  }, h = {
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height
  };
  let S = c.body;
  [c, d].forEach((z) => {
    const J = [], ve = z.hFlip, Se = z.vFlip;
    let K = z.rotate;
    ve ? Se ? K += 2 : (J.push(
      "translate(" + (h.width + h.left).toString() + " " + (0 - h.top).toString() + ")"
    ), J.push("scale(-1 1)"), h.top = h.left = 0) : Se && (J.push(
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
  m === null ? (O = C === null ? "1em" : C === "auto" ? R : C, k = $T(O, T / R)) : (k = m === "auto" ? T : m, O = C === null ? $T(k, R / T) : C === "auto" ? R : C);
  const j = {}, G = (z, J) => {
    cF(J) || (j[z] = J.toString());
  };
  return G("width", k), G("height", O), j.viewBox = h.left.toString() + " " + h.top.toString() + " " + T.toString() + " " + R.toString(), {
    attributes: j,
    body: S
  };
}
const dF = /\sid="(\S+)"/g, pF = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let hF = 0;
function vF(i, o = pF) {
  const c = [];
  let d;
  for (; d = dF.exec(i); )
    c.push(d[1]);
  if (!c.length)
    return i;
  const h = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((S) => {
    const m = typeof o == "function" ? o(S) : o + (hF++).toString(), C = S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"),
      "$1" + m + h + "$3"
    );
  }), i = i.replace(new RegExp(h, "g"), ""), i;
}
const qE = /* @__PURE__ */ Object.create(null);
function mF(i, o) {
  qE[i] = o;
}
function ZE(i) {
  return qE[i] || qE[""];
}
function Nw(i) {
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
const Lw = /* @__PURE__ */ Object.create(null), Hh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], hg = [];
for (; Hh.length > 0; )
  Hh.length === 1 || Math.random() > 0.5 ? hg.push(Hh.shift()) : hg.push(Hh.pop());
Lw[""] = Nw({
  resources: ["https://api.iconify.design"].concat(hg)
});
function yF(i, o) {
  const c = Nw(o);
  return c === null ? !1 : (Lw[i] = c, !0);
}
function Uw(i) {
  return Lw[i];
}
const gF = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let BT = gF();
function SF(i, o) {
  const c = Uw(i);
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
function EF(i) {
  return i === 404;
}
const wF = (i, o, c) => {
  const d = [], h = SF(i, o), S = "icons";
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
function _F(i) {
  if (typeof i == "string") {
    const o = Uw(i);
    if (o)
      return o.path;
  }
  return "/";
}
const xF = (i, o, c) => {
  if (!BT) {
    c("abort", 424);
    return;
  }
  let d = _F(o.provider);
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
  BT(i + d).then((S) => {
    const m = S.status;
    if (m !== 200) {
      setTimeout(() => {
        c(EF(m) ? "abort" : "next", m);
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
}, CF = {
  prepare: wF,
  send: xF
};
function TF(i) {
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
function TR(i, o) {
  i.forEach((c) => {
    const d = c.loaderCallbacks;
    d && (c.loaderCallbacks = d.filter((h) => h.id !== o));
  });
}
function bF(i) {
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
      }), m.pending.length !== C && (c || TR([i], S.id), S.callback(
        m.loaded.slice(0),
        m.missing.slice(0),
        m.pending.slice(0),
        S.abort
      ));
    });
  }));
}
let RF = 0;
function DF(i, o, c) {
  const d = RF++, h = TR.bind(null, c, d);
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
function kF(i, o = !0, c = !1) {
  const d = [];
  return i.forEach((h) => {
    const S = typeof h == "string" ? Fg(h, o, c) : h;
    S && d.push(S);
  }), d;
}
var MF = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function OF(i, o, c, d) {
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
  function ve(W, ee) {
    ee && (G = []), typeof W == "function" && G.push(W);
  }
  function Se() {
    return {
      startTime: C,
      payload: o,
      status: T,
      queriesSent: R,
      queriesPending: j.length,
      subscribe: ve,
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
  return setTimeout(ce), Se;
}
function bR(i) {
  const o = {
    ...MF,
    ...i
  };
  let c = [];
  function d() {
    c = c.filter((C) => C().status === "pending");
  }
  function h(C, T, R) {
    const k = OF(
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
function WT() {
}
const RE = /* @__PURE__ */ Object.create(null);
function NF(i) {
  if (!RE[i]) {
    const o = Uw(i);
    if (!o)
      return;
    const c = bR(o), d = {
      config: o,
      redundancy: c
    };
    RE[i] = d;
  }
  return RE[i];
}
function LF(i, o, c) {
  let d, h;
  if (typeof i == "string") {
    const S = ZE(i);
    if (!S)
      return c(void 0, 424), WT;
    h = S.send;
    const m = NF(i);
    m && (d = m.redundancy);
  } else {
    const S = Nw(i);
    if (S) {
      d = bR(S);
      const m = i.resources ? i.resources[0] : "", C = ZE(m);
      C && (h = C.send);
    }
  }
  return !d || !h ? (c(void 0, 424), WT) : d.query(o, h, c)().abort;
}
const GT = "iconify2", Xh = "iconify", RR = Xh + "-count", QT = Xh + "-version", DR = 36e5, UF = 168;
function KE(i, o) {
  try {
    return i.getItem(o);
  } catch {
  }
}
function Aw(i, o, c) {
  try {
    return i.setItem(o, c), !0;
  } catch {
  }
}
function qT(i, o) {
  try {
    i.removeItem(o);
  } catch {
  }
}
function XE(i, o) {
  return Aw(i, RR, o.toString());
}
function JE(i) {
  return parseInt(KE(i, RR)) || 0;
}
const Hg = {
  local: !0,
  session: !0
}, kR = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let zw = !1;
function AF(i) {
  zw = i;
}
let lg = typeof window > "u" ? {} : window;
function MR(i) {
  const o = i + "Storage";
  try {
    if (lg && lg[o] && typeof lg[o].length == "number")
      return lg[o];
  } catch {
  }
  Hg[i] = !1;
}
function OR(i, o) {
  const c = MR(i);
  if (!c)
    return;
  const d = KE(c, QT);
  if (d !== GT) {
    if (d) {
      const C = JE(c);
      for (let T = 0; T < C; T++)
        qT(c, Xh + T.toString());
    }
    Aw(c, QT, GT), XE(c, 0);
    return;
  }
  const h = Math.floor(Date.now() / DR) - UF, S = (C) => {
    const T = Xh + C.toString(), R = KE(c, T);
    if (typeof R == "string") {
      try {
        const k = JSON.parse(R);
        if (typeof k == "object" && typeof k.cached == "number" && k.cached > h && typeof k.provider == "string" && typeof k.data == "object" && typeof k.data.prefix == "string" && // Valid item: run callback
        o(k, C))
          return !0;
      } catch {
      }
      qT(c, T);
    }
  };
  let m = JE(c);
  for (let C = m - 1; C >= 0; C--)
    S(C) || (C === m - 1 ? (m--, XE(c, m)) : kR[i].add(C));
}
function NR() {
  if (!zw) {
    AF(!0);
    for (const i in Hg)
      OR(i, (o) => {
        const c = o.data, d = o.provider, h = c.prefix, S = pc(
          d,
          h
        );
        if (!Ow(S, c).length)
          return !1;
        const m = c.lastModified || -1;
        return S.lastModifiedCached = S.lastModifiedCached ? Math.min(S.lastModifiedCached, m) : m, !0;
      });
  }
}
function zF(i, o) {
  const c = i.lastModifiedCached;
  if (
    // Matches or newer
    c && c >= o
  )
    return c === o;
  if (i.lastModifiedCached = o, c)
    for (const d in Hg)
      OR(d, (h) => {
        const S = h.data;
        return h.provider !== i.provider || S.prefix !== i.prefix || S.lastModified === o;
      });
  return !0;
}
function jF(i, o) {
  zw || NR();
  function c(d) {
    let h;
    if (!Hg[d] || !(h = MR(d)))
      return;
    const S = kR[d];
    let m;
    if (S.size)
      S.delete(m = Array.from(S).shift());
    else if (m = JE(h), !XE(h, m + 1))
      return;
    const C = {
      cached: Math.floor(Date.now() / DR),
      provider: i.provider,
      data: o
    };
    return Aw(
      h,
      Xh + m.toString(),
      JSON.stringify(C)
    );
  }
  o.lastModified && !zF(i, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), c("local") || c("session"));
}
function ZT() {
}
function FF(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, bF(i);
  }));
}
function HF(i, o) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(o).sort() : i.iconsToLoad = o, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: d } = i, h = i.iconsToLoad;
    delete i.iconsToLoad;
    let S;
    if (!h || !(S = ZE(c)))
      return;
    S.prepare(c, d, h).forEach((C) => {
      LF(c, C, (T) => {
        if (typeof T != "object")
          C.icons.forEach((R) => {
            i.missing.add(R);
          });
        else
          try {
            const R = Ow(
              i,
              T
            );
            if (!R.length)
              return;
            const k = i.pendingIcons;
            k && R.forEach((O) => {
              k.delete(O);
            }), jF(i, T);
          } catch (R) {
            console.error(R);
          }
        FF(i);
      });
    });
  }));
}
const PF = (i, o) => {
  const c = kF(i, !0, _R()), d = TF(c);
  if (!d.pending.length) {
    let T = !0;
    return o && setTimeout(() => {
      T && o(
        d.loaded,
        d.missing,
        d.pending,
        ZT
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
    h[R][k].length && HF(T, h[R][k]);
  }), o ? DF(o, d, S) : ZT;
};
function YF(i, o) {
  const c = {
    ...i
  };
  for (const d in o) {
    const h = o[d], S = typeof h;
    d in xR ? (h === null || h && (S === "string" || S === "number")) && (c[d] = h) : S === typeof c[d] && (c[d] = d === "rotate" ? h % 4 : h);
  }
  return c;
}
const IF = /[\s,]+/;
function VF(i, o) {
  o.split(IF).forEach((c) => {
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
function $F(i, o = 0) {
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
function BF(i, o) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const d in o)
    c += " " + d + '="' + o[d] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function WF(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function GF(i) {
  return "data:image/svg+xml," + WF(i);
}
function QF(i) {
  return 'url("' + GF(i) + '")';
}
let Bh;
function qF() {
  try {
    Bh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Bh = null;
  }
}
function ZF(i) {
  return Bh === void 0 && qF(), Bh ? Bh.createHTML(i) : i;
}
const LR = {
  ...CR,
  inline: !1
}, KF = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, XF = {
  display: "inline-block"
}, ew = {
  backgroundColor: "currentColor"
}, UR = {
  backgroundColor: "transparent"
}, KT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, XT = {
  WebkitMask: ew,
  mask: ew,
  background: UR
};
for (const i in XT) {
  const o = XT[i];
  for (const c in KT)
    o[i + c] = KT[c];
}
const JF = {
  ...LR,
  inline: !0
};
function JT(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const e3 = (i, o, c, d) => {
  const h = c ? JF : LR, S = YF(h, o), m = o.mode || "svg", C = {}, T = o.style || {}, R = {
    ...m === "svg" ? KF : {},
    ref: d
  };
  for (let Se in o) {
    const K = o[Se];
    if (K !== void 0)
      switch (Se) {
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
          S[Se] = K === !0 || K === "true" || K === 1;
          break;
        case "flip":
          typeof K == "string" && VF(S, K);
          break;
        case "color":
          C.color = K;
          break;
        case "rotate":
          typeof K == "string" ? S[Se] = $F(K) : typeof K == "number" && (S[Se] = K);
          break;
        case "ariaHidden":
        case "aria-hidden":
          K !== !0 && K !== "true" && delete R["aria-hidden"];
          break;
        default:
          h[Se] === void 0 && (R[Se] = K);
      }
  }
  const k = fF(i, S), O = k.attributes;
  if (S.inline && (C.verticalAlign = "-0.125em"), m === "svg") {
    R.style = {
      ...C,
      ...T
    }, Object.assign(R, O);
    let Se = 0, K = o.id;
    return typeof K == "string" && (K = K.replace(/-/g, "_")), R.dangerouslySetInnerHTML = {
      __html: ZF(vF(k.body, K ? () => K + "ID" + Se++ : "iconifyReact"))
    }, kr.createElement("svg", R);
  }
  const { body: j, width: G, height: z } = i, J = m === "mask" || (m === "bg" ? !1 : j.indexOf("currentColor") !== -1), ve = BF(j, {
    ...O,
    width: G + "",
    height: z + ""
  });
  return R.style = {
    ...C,
    "--svg": QF(ve),
    width: JT(O.width),
    height: JT(O.height),
    ...XF,
    ...J ? ew : UR,
    ...T
  }, kr.createElement("span", R);
};
_R(!0);
mF("", CF);
if (typeof document < "u" && typeof window < "u") {
  NR();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const o = i.IconifyPreload, c = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((d) => {
      try {
        // Check if item is an object and not null/array
        (typeof d != "object" || d === null || d instanceof Array || // Check for 'icons' and 'prefix'
        typeof d.icons != "object" || typeof d.prefix != "string" || // Add icon set
        !oF(d)) && console.error(c);
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
          yF(c, h) || console.error(d);
        } catch {
          console.error(d);
        }
      }
  }
}
class AR extends kr.Component {
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
    if (typeof d != "string" || (h = Fg(d, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const S = iF(h);
    if (!S) {
      (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), S !== null && (this._loading = {
        name: d,
        abort: PF([h], this._checkIcon.bind(this, !1))
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
    }), e3({
      ...Mw,
      ...c.data
    }, d, o._inline, o._ref);
  }
}
const t3 = kr.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !1
  };
  return kr.createElement(AR, d);
});
kr.forwardRef(function(o, c) {
  const d = {
    ...o,
    _ref: c,
    _inline: !0
  };
  return kr.createElement(AR, d);
});
const eb = (i) => {
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
}, n3 = (i) => i ? eb(i) : eb;
var tw = { exports: {} }, DE = {}, og = { exports: {} }, kE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tb;
function r3() {
  if (tb)
    return kE;
  tb = 1;
  var i = kr;
  function o(O, j) {
    return O === j && (O !== 0 || 1 / O === 1 / j) || O !== O && j !== j;
  }
  var c = typeof Object.is == "function" ? Object.is : o, d = i.useState, h = i.useEffect, S = i.useLayoutEffect, m = i.useDebugValue;
  function C(O, j) {
    var G = j(), z = d({ inst: { value: G, getSnapshot: j } }), J = z[0].inst, ve = z[1];
    return S(function() {
      J.value = G, J.getSnapshot = j, T(J) && ve({ inst: J });
    }, [O, G, j]), h(function() {
      return T(J) && ve({ inst: J }), O(function() {
        T(J) && ve({ inst: J });
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
  return kE.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : k, kE;
}
var ME = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nb;
function a3() {
  return nb || (nb = 1, process.env.NODE_ENV !== "production" && function() {
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
    var J = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ve = !J, Se = ve ? z : j, K = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Se;
    ME.useSyncExternalStore = K, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ME;
}
var rb;
function zR() {
  return rb || (rb = 1, process.env.NODE_ENV === "production" ? og.exports = r3() : og.exports = a3()), og.exports;
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
var ab;
function i3() {
  if (ab)
    return DE;
  ab = 1;
  var i = kr, o = zR();
  function c(R, k) {
    return R === k && (R !== 0 || 1 / R === 1 / k) || R !== R && k !== k;
  }
  var d = typeof Object.is == "function" ? Object.is : c, h = o.useSyncExternalStore, S = i.useRef, m = i.useEffect, C = i.useMemo, T = i.useDebugValue;
  return DE.useSyncExternalStoreWithSelector = function(R, k, O, j, G) {
    var z = S(null);
    if (z.current === null) {
      var J = { hasValue: !1, value: null };
      z.current = J;
    } else
      J = z.current;
    z = C(function() {
      function Se(W) {
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
        return Se(k());
      }, ce === null ? void 0 : function() {
        return Se(ce());
      }];
    }, [k, O, j, G]);
    var ve = h(R, z[0], z[1]);
    return m(function() {
      J.hasValue = !0, J.value = ve;
    }, [ve]), T(ve), ve;
  }, DE;
}
var OE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function l3() {
  return ib || (ib = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = kr, o = zR();
    function c(k, O) {
      return k === O && (k !== 0 || 1 / k === 1 / O) || k !== k && O !== O;
    }
    var d = typeof Object.is == "function" ? Object.is : c, h = o.useSyncExternalStore, S = i.useRef, m = i.useEffect, C = i.useMemo, T = i.useDebugValue;
    function R(k, O, j, G, z) {
      var J = S(null), ve;
      J.current === null ? (ve = {
        hasValue: !1,
        value: null
      }, J.current = ve) : ve = J.current;
      var Se = C(function() {
        var ce = !1, W, ee, Me = function(Mt) {
          if (!ce) {
            ce = !0, W = Mt;
            var Be = G(Mt);
            if (z !== void 0 && ve.hasValue) {
              var Ke = ve.value;
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
      }, [O, j, G, z]), K = Se[0], re = Se[1], se = h(k, K, re);
      return m(function() {
        ve.hasValue = !0, ve.value = se;
      }, [se]), T(se), se;
    }
    OE.useSyncExternalStoreWithSelector = R, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), OE;
}
process.env.NODE_ENV === "production" ? tw.exports = i3() : tw.exports = l3();
var o3 = tw.exports;
const u3 = /* @__PURE__ */ RL(o3), { useSyncExternalStoreWithSelector: s3 } = u3;
function c3(i, o = i.getState, c) {
  const d = s3(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    o,
    c
  );
  return bL(d), d;
}
const lb = (i) => {
  const o = typeof i == "function" ? n3(i) : i, c = (d, h) => c3(o, d, h);
  return Object.assign(c, o), c;
}, f3 = (i) => i ? lb(i) : lb, d3 = (i, o) => (...c) => Object.assign({}, i, o(...c)), jR = f3(
  d3(
    {
      currentOpen: []
    },
    (i, o) => ({
      openModal: (c) => {
        if (o().currentOpen.includes(c))
          return;
        const d = [...o().currentOpen, c];
        console.log("Updated openModal: ", d), i({ currentOpen: d });
      },
      closeModal: () => {
        const c = document.querySelector("#modal-root");
        c && (c.classList.add("closed"), setTimeout(() => {
          c.classList.remove("closed");
          const d = o().currentOpen.slice(
            0,
            o().currentOpen.length - 1
          );
          console.log("Updated openModal: ", d), i({ currentOpen: d });
        }, 190));
      },
      closeAllModals: () => {
        const c = document.querySelector("#modal-root");
        c && (c.classList.add("closed"), setTimeout(() => {
          c.classList.remove("closed"), i({ currentOpen: [] });
        }, 190));
      }
    })
  )
), p3 = ({
  children: i,
  currentName: o,
  variant: c = "neutral",
  size: d = "normal",
  closeButton: h = !1,
  onClose: S = () => {
  }
}) => {
  const { currentOpen: m, closeModal: C } = jR(), T = document.querySelector("#modal-root"), R = tr(null);
  return xg(() => {
    m.length > 0 && R.current && R.current.focus();
  }, [m]), m.includes(o) && T ? Xj.createPortal(
    /* @__PURE__ */ I.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: R,
        onKeyDown: (k) => {
          k.key === "Escape" && (S(), C());
        },
        className: "modal",
        children: [
          /* @__PURE__ */ I.jsx(
            "div",
            {
              className: "modal-overlay",
              onClick: () => {
                S(), C();
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
                      S(), C();
                    },
                    children: /* @__PURE__ */ I.jsx(t3, { icon: "mingcute:close-fill", height: 16 })
                  }
                ),
                i
              ]
            }
          )
        ]
      }
    ),
    T
  ) : null;
}, h3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], v3 = ({
  children: i,
  data: o,
  itemsPerPage: c = 30
}) => {
  const d = fc(() => o.length, [o]), [h, S] = Dr(1), [m, C] = Dr(c), T = fc(() => o.slice(
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
        kw,
        {
          items: h3,
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
}, FR = (i, o, c) => {
  let d;
  return (...h) => {
    const m = () => {
      d = null, c || i.apply(void 0, h);
    }, C = c && !d;
    clearTimeout(d), d = setTimeout(m, o), C && i.apply(void 0, h);
  };
}, m3 = (i) => {
  const [o, c] = Dr(i ?? null), [d, h] = Dr({
    top: (o == null ? void 0 : o.scrollTop) ?? 0,
    scrollHeight: (o == null ? void 0 : o.scrollHeight) ?? 0,
    height: (o == null ? void 0 : o.clientHeight) ?? 0
  });
  return xg(() => {
    const S = () => {
      o && h({
        top: o.scrollTop,
        scrollHeight: o.scrollHeight,
        height: o.clientHeight
      });
    };
    if (o)
      return o == null || o.addEventListener("scroll", FR(S, 150)), () => {
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
}, y3 = ({
  children: i,
  data: o,
  tableContainerRef: c
}) => {
  const { height: d, scrollHeight: h, top: S, root: m, setRoot: C, changeScrollData: T } = m3(c == null ? void 0 : c.current), R = tr(0), k = tr(R.current * 2), O = 40, j = fc(() => c.current === null ? 10 : Math.ceil(c.current.clientHeight / O), [c]);
  xg(() => (m === null && C(c.current), R.current = j(), () => {
  }), [j, c, m, C, T]);
  const G = fc(() => {
    let z = 0;
    return m === null ? [] : (R.current < 10 && (R.current = j() * 2), Math.ceil(d + S) === h && (k.current += R.current, m.scrollTo({
      top: R.current * O
    })), k.current > R.current * 3 && S > 0 && (z = k.current - R.current * 3), S === 0 && k.current > R.current * 3 && (k.current -= R.current, z = k.current - R.current * 3, m.scrollTo({
      top: R.current * O
    })), o.slice(z, k.current));
  }, [o, d, j, h, S, m, R]);
  return i({ data: G() });
}, g3 = {
  scroll: y3,
  pagination: v3
}, S3 = ({
  mode: i,
  children: o,
  data: c
}) => {
  const d = tr(null), h = g3[i];
  return /* @__PURE__ */ I.jsx("div", { className: `table-container ${i}`, ref: d, children: /* @__PURE__ */ I.jsx(h, { tableContainerRef: d, data: c, children: o }) });
}, E3 = ({
  closeModal: i,
  config: o
}) => /* @__PURE__ */ I.jsxs(p3, { currentName: "table-config-modal", children: [
  o.map((c) => /* @__PURE__ */ I.jsxs("div", { className: "container row between-center", children: [
    /* @__PURE__ */ I.jsx("span", { children: c }),
    /* @__PURE__ */ I.jsx(
      kw,
      {
        variant: "neutral",
        items: ["Expected", "Overhelmed", "Below Expectation"]
      }
    )
  ] }, c)),
  /* @__PURE__ */ I.jsx("button", { className: "btn btn-primary ring-info", onClick: i, children: "Save" })
] }), w3 = ({
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
] }) }), _3 = (i, o, c = "asc") => {
  if (c === "default" || o === null)
    return i;
  const d = c === "asc" ? 1 : -1;
  return i.slice().sort((h, S) => {
    const m = h[o], C = S[o];
    return m < C ? -1 * d : m > C ? 1 * d : 0;
  });
}, ob = {
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
}, ub = ["default", "asc", "desc"], U3 = ({
  headers: i,
  data: o,
  hideColumn: c = [],
  dataConfig: d,
  showObject: h,
  // headersConfig,
  action: S,
  mode: m = "pagination"
}) => {
  const { closeModal: C, openModal: T } = jR(), R = (se) => Object.hasOwnProperty.call(ob, se) ? ob[se] : se, [k] = Dr(m), [O, j] = Dr(0), G = tr(null), z = tr(null), J = tr({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [ve, Se] = Dr(""), K = fc(() => o.filter((se) => {
    if (ve.trim() === "")
      return o;
    const ce = ve.toLowerCase().trim();
    return Object.entries(se).some(([ee, Me]) => {
      var He;
      return c.includes(ee) ? !1 : typeof Me == "object" && Object.hasOwnProperty.call(d, ee) ? String((He = d == null ? void 0 : d[ee]) == null ? void 0 : He.call(d, Me, se)).toLowerCase().includes(ce) : typeof Me == "object" ? String(Object.values(Me)[0]).toLowerCase().includes(ce) : String(Me).toLowerCase().includes(ce);
    });
  }), [ve, c, o, d]), re = fc(() => _3(K(), G.current, ub[O]), [O, K, G]);
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
          onChange: FR((se) => {
            Se(se.target.value);
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
    /* @__PURE__ */ I.jsx(S3, { mode: k, data: re(), children: ({ data: se }) => {
      if (se.length === 0)
        return null;
      let ce = 0;
      return /* @__PURE__ */ I.jsxs("table", { className: "table", children: [
        /* @__PURE__ */ I.jsx("thead", { children: /* @__PURE__ */ I.jsxs("tr", { children: [
          i && i.map((W, ee) => c.includes(W) ? null : (ee++, /* @__PURE__ */ I.jsx("th", { children: W }, ee))),
          i === void 0 && Object.keys(se[0]).map((W) => c.includes(W) ? null : (ce++, /* @__PURE__ */ I.jsx(
            w3,
            {
              tBodyRef: z,
              mousePosition: J,
              orderedHeader: G,
              order: O,
              setOrder: j,
              column: W,
              index: ce - 1,
              columns: Object.keys(se[0]),
              ordersType: ub,
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
                          ([fn, de]) => {
                            const Ue = document.createElement("li");
                            Ue.innerText = `${R(
                              fn
                            )}: ${de}`, Qt.appendChild(Ue);
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
    /* @__PURE__ */ I.jsx(E3, { config: Object.keys(o[0]), closeModal: C })
  ] });
};
export {
  R3 as Chart,
  M3 as DateRangePicker,
  O3 as DetailedWorkDay,
  N3 as Header,
  p3 as Modal,
  kw as Select,
  k3 as ShowPassword,
  L3 as Sidebar,
  U3 as Table,
  Aj as Textfield,
  FR as debounce,
  jR as useModal,
  m3 as useScroll
};
