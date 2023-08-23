import Bo, { useRef as tr, useState as Dr, useCallback as fc, useEffect as pg, Fragment as _N, useDebugValue as wN } from "react";
function CN(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var SE = { exports: {} }, Lh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IT;
function TN() {
  if (IT)
    return Lh;
  IT = 1;
  var i = Bo, u = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(R, b, D) {
    var z, U = {}, A = null, Q = null;
    D !== void 0 && (A = "" + D), b.key !== void 0 && (A = "" + b.key), b.ref !== void 0 && (Q = b.ref);
    for (z in b)
      p.call(b, z) && !E.hasOwnProperty(z) && (U[z] = b[z]);
    if (R && R.defaultProps)
      for (z in b = R.defaultProps, b)
        U[z] === void 0 && (U[z] = b[z]);
    return { $$typeof: u, type: R, key: A, ref: Q, props: U, _owner: m.current };
  }
  return Lh.Fragment = c, Lh.jsx = g, Lh.jsxs = g, Lh;
}
var Uh = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BT;
function xN() {
  return BT || (BT = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Bo, u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), V = Symbol.iterator, te = "@@iterator";
    function Ee(k) {
      if (k === null || typeof k != "object")
        return null;
      var J = V && k[V] || k[te];
      return typeof J == "function" ? J : null;
    }
    var Me = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function le(k) {
      {
        for (var J = arguments.length, ve = new Array(J > 1 ? J - 1 : 0), Fe = 1; Fe < J; Fe++)
          ve[Fe - 1] = arguments[Fe];
        ne("error", k, ve);
      }
    }
    function ne(k, J, ve) {
      {
        var Fe = Me.ReactDebugCurrentFrame, tt = Fe.getStackAddendum();
        tt !== "" && (J += "%s", ve = ve.concat([tt]));
        var mt = ve.map(function(rt) {
          return String(rt);
        });
        mt.unshift("Warning: " + J), Function.prototype.apply.call(console[k], console, mt);
      }
    }
    var me = !1, fe = !1, ee = !1, ue = !1, We = !1, et;
    et = Symbol.for("react.module.reference");
    function nt(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === p || k === E || We || k === m || k === D || k === z || ue || k === Q || me || fe || ee || typeof k == "object" && k !== null && (k.$$typeof === A || k.$$typeof === U || k.$$typeof === g || k.$$typeof === R || k.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === et || k.getModuleId !== void 0));
    }
    function dt(k, J, ve) {
      var Fe = k.displayName;
      if (Fe)
        return Fe;
      var tt = J.displayName || J.name || "";
      return tt !== "" ? ve + "(" + tt + ")" : ve;
    }
    function Nt(k) {
      return k.displayName || "Context";
    }
    function Pe(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
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
        case D:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case R:
            var J = k;
            return Nt(J) + ".Consumer";
          case g:
            var ve = k;
            return Nt(ve._context) + ".Provider";
          case b:
            return dt(k, k.render, "ForwardRef");
          case U:
            var Fe = k.displayName || null;
            return Fe !== null ? Fe : Pe(k.type) || "Memo";
          case A: {
            var tt = k, mt = tt._payload, rt = tt._init;
            try {
              return Pe(rt(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var at = Object.assign, hn = 0, kt, _n, ce, je, _e, gt, Ct;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function mr() {
      {
        if (hn === 0) {
          kt = console.log, _n = console.info, ce = console.warn, je = console.error, _e = console.group, gt = console.groupCollapsed, Ct = console.groupEnd;
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
        hn++;
      }
    }
    function ni() {
      {
        if (hn--, hn === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, k, {
              value: kt
            }),
            info: at({}, k, {
              value: _n
            }),
            warn: at({}, k, {
              value: ce
            }),
            error: at({}, k, {
              value: je
            }),
            group: at({}, k, {
              value: _e
            }),
            groupCollapsed: at({}, k, {
              value: gt
            }),
            groupEnd: at({}, k, {
              value: Ct
            })
          });
        }
        hn < 0 && le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wn = Me.ReactCurrentDispatcher, da;
    function rr(k, J, ve) {
      {
        if (da === void 0)
          try {
            throw Error();
          } catch (tt) {
            var Fe = tt.stack.trim().match(/\n( *(at )?)/);
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
    function pa(k, J) {
      if (!k || kr)
        return "";
      {
        var ve = ri.get(k);
        if (ve !== void 0)
          return ve;
      }
      var Fe;
      kr = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = wn.current, wn.current = null, mr();
      try {
        if (J) {
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
          for (var Ve = St.stack.split(`
`), Ln = Fe.stack.split(`
`), Qt = Ve.length - 1, qt = Ln.length - 1; Qt >= 1 && qt >= 0 && Ve[Qt] !== Ln[qt]; )
            qt--;
          for (; Qt >= 1 && qt >= 0; Qt--, qt--)
            if (Ve[Qt] !== Ln[qt]) {
              if (Qt !== 1 || qt !== 1)
                do
                  if (Qt--, qt--, qt < 0 || Ve[Qt] !== Ln[qt]) {
                    var yr = `
` + Ve[Qt].replace(" at new ", " at ");
                    return k.displayName && yr.includes("<anonymous>") && (yr = yr.replace("<anonymous>", k.displayName)), typeof k == "function" && ri.set(k, yr), yr;
                  }
                while (Qt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        kr = !1, wn.current = mt, ni(), Error.prepareStackTrace = tt;
      }
      var ll = k ? k.displayName || k.name : "", vc = ll ? rr(ll) : "";
      return typeof k == "function" && ri.set(k, vc), vc;
    }
    function On(k, J, ve) {
      return pa(k, !1);
    }
    function ar(k) {
      var J = k.prototype;
      return !!(J && J.isReactComponent);
    }
    function In(k, J, ve) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return pa(k, ar(k));
      if (typeof k == "string")
        return rr(k);
      switch (k) {
        case D:
          return rr("Suspense");
        case z:
          return rr("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case b:
            return On(k.render);
          case U:
            return In(k.type, J, ve);
          case A: {
            var Fe = k, tt = Fe._payload, mt = Fe._init;
            try {
              return In(mt(tt), J, ve);
            } catch {
            }
          }
        }
      return "";
    }
    var ir = Object.prototype.hasOwnProperty, lr = {}, ha = Me.ReactDebugCurrentFrame;
    function Fa(k) {
      if (k) {
        var J = k._owner, ve = In(k.type, k._source, J ? J.type : null);
        ha.setExtraStackFrame(ve);
      } else
        ha.setExtraStackFrame(null);
    }
    function Ti(k, J, ve, Fe, tt) {
      {
        var mt = Function.call.bind(ir);
        for (var rt in k)
          if (mt(k, rt)) {
            var Ve = void 0;
            try {
              if (typeof k[rt] != "function") {
                var Ln = Error((Fe || "React class") + ": " + ve + " type `" + rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Ve = k[rt](J, rt, Fe, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              Ve = Qt;
            }
            Ve && !(Ve instanceof Error) && (Fa(tt), le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", ve, rt, typeof Ve), Fa(null)), Ve instanceof Error && !(Ve.message in lr) && (lr[Ve.message] = !0, Fa(tt), le("Failed %s type: %s", ve, Ve.message), Fa(null));
          }
      }
    }
    var ai = Array.isArray;
    function Ha(k) {
      return ai(k);
    }
    function qr(k) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, ve = J && k[Symbol.toStringTag] || k.constructor.name || "Object";
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
        return le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(k)), Zr(k);
    }
    var vn = Me.ReactCurrentOwner, Kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rl, Pa, he;
    he = {};
    function Ue(k) {
      if (ir.call(k, "ref")) {
        var J = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function it(k) {
      if (ir.call(k, "key")) {
        var J = Object.getOwnPropertyDescriptor(k, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Mt(k, J) {
      if (typeof k.ref == "string" && vn.current && J && vn.current.stateNode !== J) {
        var ve = Pe(vn.current.type);
        he[ve] || (le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(vn.current.type), k.ref), he[ve] = !0);
      }
    }
    function Xt(k, J) {
      {
        var ve = function() {
          rl || (rl = !0, le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ve.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: ve,
          configurable: !0
        });
      }
    }
    function Nn(k, J) {
      {
        var ve = function() {
          Pa || (Pa = !0, le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ve.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: ve,
          configurable: !0
        });
      }
    }
    var cn = function(k, J, ve, Fe, tt, mt, rt) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: k,
        key: J,
        ref: ve,
        props: rt,
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
        value: Fe
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function Or(k, J, ve, Fe, tt) {
      {
        var mt, rt = {}, Ve = null, Ln = null;
        ve !== void 0 && (Ya(ve), Ve = "" + ve), it(J) && (Ya(J.key), Ve = "" + J.key), Ue(J) && (Ln = J.ref, Mt(J, tt));
        for (mt in J)
          ir.call(J, mt) && !Kr.hasOwnProperty(mt) && (rt[mt] = J[mt]);
        if (k && k.defaultProps) {
          var Qt = k.defaultProps;
          for (mt in Qt)
            rt[mt] === void 0 && (rt[mt] = Qt[mt]);
        }
        if (Ve || Ln) {
          var qt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          Ve && Xt(rt, qt), Ln && Nn(rt, qt);
        }
        return cn(k, Ve, Ln, tt, Fe, vn.current, rt);
      }
    }
    var Yt = Me.ReactCurrentOwner, Xr = Me.ReactDebugCurrentFrame;
    function At(k) {
      if (k) {
        var J = k._owner, ve = In(k.type, k._source, J ? J.type : null);
        Xr.setExtraStackFrame(ve);
      } else
        Xr.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Go(k) {
      return typeof k == "object" && k !== null && k.$$typeof === u;
    }
    function Wl() {
      {
        if (Yt.current) {
          var k = Pe(Yt.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Qo(k) {
      {
        if (k !== void 0) {
          var J = k.fileName.replace(/^.*[\\\/]/, ""), ve = k.lineNumber;
          return `

Check your code at ` + J + ":" + ve + ".";
        }
        return "";
      }
    }
    var Ju = {};
    function hc(k) {
      {
        var J = Wl();
        if (!J) {
          var ve = typeof k == "string" ? k : k.displayName || k.name;
          ve && (J = `

Check the top-level render call using <` + ve + ">.");
        }
        return J;
      }
    }
    function $l(k, J) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var ve = hc(J);
        if (Ju[ve])
          return;
        Ju[ve] = !0;
        var Fe = "";
        k && k._owner && k._owner !== Yt.current && (Fe = " It was passed a child from " + Pe(k._owner.type) + "."), At(k), le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, Fe), At(null);
      }
    }
    function qo(k, J) {
      {
        if (typeof k != "object")
          return;
        if (Ha(k))
          for (var ve = 0; ve < k.length; ve++) {
            var Fe = k[ve];
            Go(Fe) && $l(Fe, J);
          }
        else if (Go(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var tt = Ee(k);
          if (typeof tt == "function" && tt !== k.entries)
            for (var mt = tt.call(k), rt; !(rt = mt.next()).done; )
              Go(rt.value) && $l(rt.value, J);
        }
      }
    }
    function Gl(k) {
      {
        var J = k.type;
        if (J == null || typeof J == "string")
          return;
        var ve;
        if (typeof J == "function")
          ve = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === U))
          ve = J.propTypes;
        else
          return;
        if (ve) {
          var Fe = Pe(J);
          Ti(ve, k.props, "prop", Fe, k);
        } else if (J.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var tt = Pe(J);
          le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zo(k) {
      {
        for (var J = Object.keys(k.props), ve = 0; ve < J.length; ve++) {
          var Fe = J[ve];
          if (Fe !== "children" && Fe !== "key") {
            At(k), le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), At(null);
            break;
          }
        }
        k.ref !== null && (At(k), le("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function li(k, J, ve, Fe, tt, mt) {
      {
        var rt = nt(k);
        if (!rt) {
          var Ve = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = Qo(tt);
          Ln ? Ve += Ln : Ve += Wl();
          var Qt;
          k === null ? Qt = "null" : Ha(k) ? Qt = "array" : k !== void 0 && k.$$typeof === u ? (Qt = "<" + (Pe(k.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof k, le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, Ve);
        }
        var qt = Or(k, J, ve, tt, mt);
        if (qt == null)
          return qt;
        if (rt) {
          var yr = J.children;
          if (yr !== void 0)
            if (Fe)
              if (Ha(yr)) {
                for (var ll = 0; ll < yr.length; ll++)
                  qo(yr[ll], k);
                Object.freeze && Object.freeze(yr);
              } else
                le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qo(yr, k);
        }
        return k === p ? Zo(qt) : Gl(qt), qt;
      }
    }
    function al(k, J, ve) {
      return li(k, J, ve, !0);
    }
    function Jr(k, J, ve) {
      return li(k, J, ve, !1);
    }
    var Va = Jr, il = al;
    Uh.Fragment = p, Uh.jsx = Va, Uh.jsxs = il;
  }()), Uh;
}
process.env.NODE_ENV === "production" ? SE.exports = TN() : SE.exports = xN();
var F = SE.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Cx;
function se() {
  return Cx.apply(null, arguments);
}
function bN(i) {
  Cx = i;
}
function el(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function cc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function Rt(i, u) {
  return Object.prototype.hasOwnProperty.call(i, u);
}
function AE(i) {
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
function Io(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function Gh(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function Tx(i, u) {
  var c = [], p, m = i.length;
  for (p = 0; p < m; ++p)
    c.push(u(i[p], p));
  return c;
}
function qu(i, u) {
  for (var c in u)
    Rt(u, c) && (i[c] = u[c]);
  return Rt(u, "toString") && (i.toString = u.toString), Rt(u, "valueOf") && (i.valueOf = u.valueOf), i;
}
function Il(i, u, c, p) {
  return Qx(i, u, c, p, !0).utc();
}
function RN() {
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
  return i._pf == null && (i._pf = RN()), i._pf;
}
var EE;
Array.prototype.some ? EE = Array.prototype.some : EE = function(i) {
  var u = Object(this), c = u.length >>> 0, p;
  for (p = 0; p < c; p++)
    if (p in u && i.call(this, u[p], p, u))
      return !0;
  return !1;
};
function jE(i) {
  if (i._isValid == null) {
    var u = ot(i), c = EE.call(u.parsedDateParts, function(m) {
      return m != null;
    }), p = !isNaN(i._d.getTime()) && u.overflow < 0 && !u.empty && !u.invalidEra && !u.invalidMonth && !u.invalidWeekday && !u.weekdayMismatch && !u.nullInput && !u.invalidFormat && !u.userInvalidated && (!u.meridiem || u.meridiem && c);
    if (i._strict && (p = p && u.charsLeftOver === 0 && u.unusedTokens.length === 0 && u.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = p;
    else
      return p;
  }
  return i._isValid;
}
function hg(i) {
  var u = Il(NaN);
  return i != null ? qu(ot(u), i) : ot(u).userInvalidated = !0, u;
}
var WT = se.momentProperties = [], lE = !1;
function FE(i, u) {
  var c, p, m, E = WT.length;
  if (ja(u._isAMomentObject) || (i._isAMomentObject = u._isAMomentObject), ja(u._i) || (i._i = u._i), ja(u._f) || (i._f = u._f), ja(u._l) || (i._l = u._l), ja(u._strict) || (i._strict = u._strict), ja(u._tzm) || (i._tzm = u._tzm), ja(u._isUTC) || (i._isUTC = u._isUTC), ja(u._offset) || (i._offset = u._offset), ja(u._pf) || (i._pf = ot(u)), ja(u._locale) || (i._locale = u._locale), E > 0)
    for (c = 0; c < E; c++)
      p = WT[c], m = u[p], ja(m) || (i[p] = m);
  return i;
}
function Qh(i) {
  FE(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), lE === !1 && (lE = !0, se.updateOffset(this), lE = !1);
}
function tl(i) {
  return i instanceof Qh || i != null && i._isAMomentObject != null;
}
function xx(i) {
  se.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function wi(i, u) {
  var c = !0;
  return qu(function() {
    if (se.deprecationHandler != null && se.deprecationHandler(null, i), c) {
      var p = [], m, E, g, R = arguments.length;
      for (E = 0; E < R; E++) {
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
      xx(
        i + `
Arguments: ` + Array.prototype.slice.call(p).join("") + `
` + new Error().stack
      ), c = !1;
    }
    return u.apply(this, arguments);
  }, u);
}
var $T = {};
function bx(i, u) {
  se.deprecationHandler != null && se.deprecationHandler(i, u), $T[i] || (xx(u), $T[i] = !0);
}
se.suppressDeprecationWarnings = !1;
se.deprecationHandler = null;
function Bl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function DN(i) {
  var u, c;
  for (c in i)
    Rt(i, c) && (u = i[c], Bl(u) ? this[c] = u : this["_" + c] = u);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function _E(i, u) {
  var c = qu({}, i), p;
  for (p in u)
    Rt(u, p) && (cc(i[p]) && cc(u[p]) ? (c[p] = {}, qu(c[p], i[p]), qu(c[p], u[p])) : u[p] != null ? c[p] = u[p] : delete c[p]);
  for (p in i)
    Rt(i, p) && !Rt(u, p) && cc(i[p]) && (c[p] = qu({}, c[p]));
  return c;
}
function HE(i) {
  i != null && this.set(i);
}
var wE;
Object.keys ? wE = Object.keys : wE = function(i) {
  var u, c = [];
  for (u in i)
    Rt(i, u) && c.push(u);
  return c;
};
var kN = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function MN(i, u, c) {
  var p = this._calendar[i] || this._calendar.sameElse;
  return Bl(p) ? p.call(u, c) : p;
}
function Vl(i, u, c) {
  var p = "" + Math.abs(i), m = u - p.length, E = i >= 0;
  return (E ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, m)).toString().substr(1) + p;
}
var YE = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Zy = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, oE = {}, dd = {};
function Ye(i, u, c, p) {
  var m = p;
  typeof p == "string" && (m = function() {
    return this[p]();
  }), i && (dd[i] = m), u && (dd[u[0]] = function() {
    return Vl(m.apply(this, arguments), u[1], u[2]);
  }), c && (dd[c] = function() {
    return this.localeData().ordinal(
      m.apply(this, arguments),
      i
    );
  });
}
function ON(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function NN(i) {
  var u = i.match(YE), c, p;
  for (c = 0, p = u.length; c < p; c++)
    dd[u[c]] ? u[c] = dd[u[c]] : u[c] = ON(u[c]);
  return function(m) {
    var E = "", g;
    for (g = 0; g < p; g++)
      E += Bl(u[g]) ? u[g].call(m, i) : u[g];
    return E;
  };
}
function tg(i, u) {
  return i.isValid() ? (u = Rx(u, i.localeData()), oE[u] = oE[u] || NN(u), oE[u](i)) : i.localeData().invalidDate();
}
function Rx(i, u) {
  var c = 5;
  function p(m) {
    return u.longDateFormat(m) || m;
  }
  for (Zy.lastIndex = 0; c >= 0 && Zy.test(i); )
    i = i.replace(
      Zy,
      p
    ), Zy.lastIndex = 0, c -= 1;
  return i;
}
var LN = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function UN(i) {
  var u = this._longDateFormat[i], c = this._longDateFormat[i.toUpperCase()];
  return u || !c ? u : (this._longDateFormat[i] = c.match(YE).map(function(p) {
    return p === "MMMM" || p === "MM" || p === "DD" || p === "dddd" ? p.slice(1) : p;
  }).join(""), this._longDateFormat[i]);
}
var zN = "Invalid date";
function AN() {
  return this._invalidDate;
}
var jN = "%d", FN = /\d{1,2}/;
function HN(i) {
  return this._ordinal.replace("%d", i);
}
var YN = {
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
function PN(i, u, c, p) {
  var m = this._relativeTime[c];
  return Bl(m) ? m(i, u, c, p) : m.replace(/%d/i, i);
}
function VN(i, u) {
  var c = this._relativeTime[i > 0 ? "future" : "past"];
  return Bl(c) ? c(u) : c.replace(/%s/i, u);
}
var Fh = {};
function Gr(i, u) {
  var c = i.toLowerCase();
  Fh[c] = Fh[c + "s"] = Fh[u] = i;
}
function Ci(i) {
  return typeof i == "string" ? Fh[i] || Fh[i.toLowerCase()] : void 0;
}
function PE(i) {
  var u = {}, c, p;
  for (p in i)
    Rt(i, p) && (c = Ci(p), c && (u[c] = i[p]));
  return u;
}
var Dx = {};
function Qr(i, u) {
  Dx[i] = u;
}
function IN(i) {
  var u = [], c;
  for (c in i)
    Rt(i, c) && u.push({ unit: c, priority: Dx[c] });
  return u.sort(function(p, m) {
    return p.priority - m.priority;
  }), u;
}
function vg(i) {
  return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0;
}
function _i(i) {
  return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
}
function ft(i) {
  var u = +i, c = 0;
  return u !== 0 && isFinite(u) && (c = _i(u)), c;
}
function vd(i, u) {
  return function(c) {
    return c != null ? (kx(this, i, c), se.updateOffset(this, u), this) : lg(this, i);
  };
}
function lg(i, u) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + u]() : NaN;
}
function kx(i, u, c) {
  i.isValid() && !isNaN(c) && (u === "FullYear" && vg(i.year()) && i.month() === 1 && i.date() === 29 ? (c = ft(c), i._d["set" + (i._isUTC ? "UTC" : "") + u](
    c,
    i.month(),
    _g(c, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + u](c));
}
function BN(i) {
  return i = Ci(i), Bl(this[i]) ? this[i]() : this;
}
function WN(i, u) {
  if (typeof i == "object") {
    i = PE(i);
    var c = IN(i), p, m = c.length;
    for (p = 0; p < m; p++)
      this[c[p].unit](i[c[p].unit]);
  } else if (i = Ci(i), Bl(this[i]))
    return this[i](u);
  return this;
}
var Mx = /\d/, ti = /\d\d/, Ox = /\d{3}/, VE = /\d{4}/, mg = /[+-]?\d{6}/, an = /\d\d?/, Nx = /\d\d\d\d?/, Lx = /\d\d\d\d\d\d?/, yg = /\d{1,3}/, IE = /\d{1,4}/, gg = /[+-]?\d{1,6}/, md = /\d+/, Sg = /[+-]?\d+/, $N = /Z|[+-]\d\d:?\d\d/gi, Eg = /Z|[+-]\d\d(?::?\d\d)?/gi, GN = /[+-]?\d+(\.\d{1,3})?/, qh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, og;
og = {};
function xe(i, u, c) {
  og[i] = Bl(u) ? u : function(p, m) {
    return p && c ? c : u;
  };
}
function QN(i, u) {
  return Rt(og, i) ? og[i](u._strict, u._locale) : new RegExp(qN(i));
}
function qN(i) {
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
var CE = {};
function Vt(i, u) {
  var c, p = u, m;
  for (typeof i == "string" && (i = [i]), Io(u) && (p = function(E, g) {
    g[u] = ft(E);
  }), m = i.length, c = 0; c < m; c++)
    CE[i[c]] = p;
}
function Zh(i, u) {
  Vt(i, function(c, p, m, E) {
    m._w = m._w || {}, u(c, m._w, m, E);
  });
}
function ZN(i, u, c) {
  u != null && Rt(CE, i) && CE[i](u, c._a, c, i);
}
var $r = 0, Yo = 1, Pl = 2, nr = 3, Ji = 4, Po = 5, sc = 6, KN = 7, XN = 8;
function JN(i, u) {
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
function _g(i, u) {
  if (isNaN(i) || isNaN(u))
    return NaN;
  var c = JN(u, 12);
  return i += (u - c) / 12, c === 1 ? vg(i) ? 29 : 28 : 31 - c % 7 % 2;
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
xe("M", an);
xe("MM", an, ti);
xe("MMM", function(i, u) {
  return u.monthsShortRegex(i);
});
xe("MMMM", function(i, u) {
  return u.monthsRegex(i);
});
Vt(["M", "MM"], function(i, u) {
  u[Yo] = ft(i) - 1;
});
Vt(["MMM", "MMMM"], function(i, u, c, p) {
  var m = c._locale.monthsParse(i, p, c._strict);
  m != null ? u[Yo] = m : ot(c).invalidMonth = i;
});
var eL = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ux = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), zx = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, tL = qh, nL = qh;
function rL(i, u) {
  return i ? el(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || zx).test(u) ? "format" : "standalone"][i.month()] : el(this._months) ? this._months : this._months.standalone;
}
function aL(i, u) {
  return i ? el(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[zx.test(u) ? "format" : "standalone"][i.month()] : el(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function iL(i, u, c) {
  var p, m, E, g = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], p = 0; p < 12; ++p)
      E = Il([2e3, p]), this._shortMonthsParse[p] = this.monthsShort(
        E,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[p] = this.months(E, "").toLocaleLowerCase();
  return c ? u === "MMM" ? (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : null) : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : null) : u === "MMM" ? (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : null)) : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : null));
}
function lL(i, u, c) {
  var p, m, E;
  if (this._monthsParseExact)
    return iL.call(this, i, u, c);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), p = 0; p < 12; p++) {
    if (m = Il([2e3, p]), c && !this._longMonthsParse[p] && (this._longMonthsParse[p] = new RegExp(
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
function Ax(i, u) {
  var c;
  if (!i.isValid())
    return i;
  if (typeof u == "string") {
    if (/^\d+$/.test(u))
      u = ft(u);
    else if (u = i.localeData().monthsParse(u), !Io(u))
      return i;
  }
  return c = Math.min(i.date(), _g(i.year(), u)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](u, c), i;
}
function jx(i) {
  return i != null ? (Ax(this, i), se.updateOffset(this, !0), this) : lg(this, "Month");
}
function oL() {
  return _g(this.year(), this.month());
}
function uL(i) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || Fx.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Rt(this, "_monthsShortRegex") || (this._monthsShortRegex = tL), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function sL(i) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || Fx.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Rt(this, "_monthsRegex") || (this._monthsRegex = nL), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function Fx() {
  function i(g, R) {
    return R.length - g.length;
  }
  var u = [], c = [], p = [], m, E;
  for (m = 0; m < 12; m++)
    E = Il([2e3, m]), u.push(this.monthsShort(E, "")), c.push(this.months(E, "")), p.push(this.months(E, "")), p.push(this.monthsShort(E, ""));
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
  return i <= 9999 ? Vl(i, 4) : "+" + i;
});
Ye(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ye(0, ["YYYY", 4], 0, "year");
Ye(0, ["YYYYY", 5], 0, "year");
Ye(0, ["YYYYYY", 6, !0], 0, "year");
Gr("year", "y");
Qr("year", 1);
xe("Y", Sg);
xe("YY", an, ti);
xe("YYYY", IE, VE);
xe("YYYYY", gg, mg);
xe("YYYYYY", gg, mg);
Vt(["YYYYY", "YYYYYY"], $r);
Vt("YYYY", function(i, u) {
  u[$r] = i.length === 2 ? se.parseTwoDigitYear(i) : ft(i);
});
Vt("YY", function(i, u) {
  u[$r] = se.parseTwoDigitYear(i);
});
Vt("Y", function(i, u) {
  u[$r] = parseInt(i, 10);
});
function Hh(i) {
  return vg(i) ? 366 : 365;
}
se.parseTwoDigitYear = function(i) {
  return ft(i) + (ft(i) > 68 ? 1900 : 2e3);
};
var Hx = vd("FullYear", !0);
function cL() {
  return vg(this.year());
}
function fL(i, u, c, p, m, E, g) {
  var R;
  return i < 100 && i >= 0 ? (R = new Date(i + 400, u, c, p, m, E, g), isFinite(R.getFullYear()) && R.setFullYear(i)) : R = new Date(i, u, c, p, m, E, g), R;
}
function Vh(i) {
  var u, c;
  return i < 100 && i >= 0 ? (c = Array.prototype.slice.call(arguments), c[0] = i + 400, u = new Date(Date.UTC.apply(null, c)), isFinite(u.getUTCFullYear()) && u.setUTCFullYear(i)) : u = new Date(Date.UTC.apply(null, arguments)), u;
}
function ug(i, u, c) {
  var p = 7 + u - c, m = (7 + Vh(i, 0, p).getUTCDay() - u) % 7;
  return -m + p - 1;
}
function Yx(i, u, c, p, m) {
  var E = (7 + c - p) % 7, g = ug(i, p, m), R = 1 + 7 * (u - 1) + E + g, b, D;
  return R <= 0 ? (b = i - 1, D = Hh(b) + R) : R > Hh(i) ? (b = i + 1, D = R - Hh(i)) : (b = i, D = R), {
    year: b,
    dayOfYear: D
  };
}
function Ih(i, u, c) {
  var p = ug(i.year(), u, c), m = Math.floor((i.dayOfYear() - p - 1) / 7) + 1, E, g;
  return m < 1 ? (g = i.year() - 1, E = m + Vo(g, u, c)) : m > Vo(i.year(), u, c) ? (E = m - Vo(i.year(), u, c), g = i.year() + 1) : (g = i.year(), E = m), {
    week: E,
    year: g
  };
}
function Vo(i, u, c) {
  var p = ug(i, u, c), m = ug(i + 1, u, c);
  return (Hh(i) - p + m) / 7;
}
Ye("w", ["ww", 2], "wo", "week");
Ye("W", ["WW", 2], "Wo", "isoWeek");
Gr("week", "w");
Gr("isoWeek", "W");
Qr("week", 5);
Qr("isoWeek", 5);
xe("w", an);
xe("ww", an, ti);
xe("W", an);
xe("WW", an, ti);
Zh(
  ["w", "ww", "W", "WW"],
  function(i, u, c, p) {
    u[p.substr(0, 1)] = ft(i);
  }
);
function dL(i) {
  return Ih(i, this._week.dow, this._week.doy).week;
}
var pL = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function hL() {
  return this._week.dow;
}
function vL() {
  return this._week.doy;
}
function mL(i) {
  var u = this.localeData().week(this);
  return i == null ? u : this.add((i - u) * 7, "d");
}
function yL(i) {
  var u = Ih(this, 1, 4).week;
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
xe("d", an);
xe("e", an);
xe("E", an);
xe("dd", function(i, u) {
  return u.weekdaysMinRegex(i);
});
xe("ddd", function(i, u) {
  return u.weekdaysShortRegex(i);
});
xe("dddd", function(i, u) {
  return u.weekdaysRegex(i);
});
Zh(["dd", "ddd", "dddd"], function(i, u, c, p) {
  var m = c._locale.weekdaysParse(i, p, c._strict);
  m != null ? u.d = m : ot(c).invalidWeekday = i;
});
Zh(["d", "e", "E"], function(i, u, c, p) {
  u[p] = ft(i);
});
function gL(i, u) {
  return typeof i != "string" ? i : isNaN(i) ? (i = u.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function SL(i, u) {
  return typeof i == "string" ? u.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function BE(i, u) {
  return i.slice(u, 7).concat(i.slice(0, u));
}
var EL = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Px = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), _L = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), wL = qh, CL = qh, TL = qh;
function xL(i, u) {
  var c = el(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(u) ? "format" : "standalone"];
  return i === !0 ? BE(c, this._week.dow) : i ? c[i.day()] : c;
}
function bL(i) {
  return i === !0 ? BE(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function RL(i) {
  return i === !0 ? BE(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function DL(i, u, c) {
  var p, m, E, g = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], p = 0; p < 7; ++p)
      E = Il([2e3, 1]).day(p), this._minWeekdaysParse[p] = this.weekdaysMin(
        E,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[p] = this.weekdaysShort(
        E,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[p] = this.weekdays(E, "").toLocaleLowerCase();
  return c ? u === "dddd" ? (m = Mn.call(this._weekdaysParse, g), m !== -1 ? m : null) : u === "ddd" ? (m = Mn.call(this._shortWeekdaysParse, g), m !== -1 ? m : null) : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 ? m : null) : u === "dddd" ? (m = Mn.call(this._weekdaysParse, g), m !== -1 || (m = Mn.call(this._shortWeekdaysParse, g), m !== -1) ? m : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 ? m : null)) : u === "ddd" ? (m = Mn.call(this._shortWeekdaysParse, g), m !== -1 || (m = Mn.call(this._weekdaysParse, g), m !== -1) ? m : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 ? m : null)) : (m = Mn.call(this._minWeekdaysParse, g), m !== -1 || (m = Mn.call(this._weekdaysParse, g), m !== -1) ? m : (m = Mn.call(this._shortWeekdaysParse, g), m !== -1 ? m : null));
}
function kL(i, u, c) {
  var p, m, E;
  if (this._weekdaysParseExact)
    return DL.call(this, i, u, c);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), p = 0; p < 7; p++) {
    if (m = Il([2e3, 1]).day(p), c && !this._fullWeekdaysParse[p] && (this._fullWeekdaysParse[p] = new RegExp(
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
function ML(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var u = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = gL(i, this.localeData()), this.add(i - u, "d")) : u;
}
function OL(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var u = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? u : this.add(i - u, "d");
}
function NL(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var u = SL(i, this.localeData());
    return this.day(this.day() % 7 ? u : u - 7);
  } else
    return this.day() || 7;
}
function LL(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || WE.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Rt(this, "_weekdaysRegex") || (this._weekdaysRegex = wL), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function UL(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || WE.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Rt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = CL), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function zL(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || WE.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Rt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = TL), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function WE() {
  function i(z, U) {
    return U.length - z.length;
  }
  var u = [], c = [], p = [], m = [], E, g, R, b, D;
  for (E = 0; E < 7; E++)
    g = Il([2e3, 1]).day(E), R = ei(this.weekdaysMin(g, "")), b = ei(this.weekdaysShort(g, "")), D = ei(this.weekdays(g, "")), u.push(R), c.push(b), p.push(D), m.push(R), m.push(b), m.push(D);
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
function $E() {
  return this.hours() % 12 || 12;
}
function AL() {
  return this.hours() || 24;
}
Ye("H", ["HH", 2], 0, "hour");
Ye("h", ["hh", 2], 0, $E);
Ye("k", ["kk", 2], 0, AL);
Ye("hmm", 0, 0, function() {
  return "" + $E.apply(this) + Vl(this.minutes(), 2);
});
Ye("hmmss", 0, 0, function() {
  return "" + $E.apply(this) + Vl(this.minutes(), 2) + Vl(this.seconds(), 2);
});
Ye("Hmm", 0, 0, function() {
  return "" + this.hours() + Vl(this.minutes(), 2);
});
Ye("Hmmss", 0, 0, function() {
  return "" + this.hours() + Vl(this.minutes(), 2) + Vl(this.seconds(), 2);
});
function Vx(i, u) {
  Ye(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      u
    );
  });
}
Vx("a", !0);
Vx("A", !1);
Gr("hour", "h");
Qr("hour", 13);
function Ix(i, u) {
  return u._meridiemParse;
}
xe("a", Ix);
xe("A", Ix);
xe("H", an);
xe("h", an);
xe("k", an);
xe("HH", an, ti);
xe("hh", an, ti);
xe("kk", an, ti);
xe("hmm", Nx);
xe("hmmss", Lx);
xe("Hmm", Nx);
xe("Hmmss", Lx);
Vt(["H", "HH"], nr);
Vt(["k", "kk"], function(i, u, c) {
  var p = ft(i);
  u[nr] = p === 24 ? 0 : p;
});
Vt(["a", "A"], function(i, u, c) {
  c._isPm = c._locale.isPM(i), c._meridiem = i;
});
Vt(["h", "hh"], function(i, u, c) {
  u[nr] = ft(i), ot(c).bigHour = !0;
});
Vt("hmm", function(i, u, c) {
  var p = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[Ji] = ft(i.substr(p)), ot(c).bigHour = !0;
});
Vt("hmmss", function(i, u, c) {
  var p = i.length - 4, m = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[Ji] = ft(i.substr(p, 2)), u[Po] = ft(i.substr(m)), ot(c).bigHour = !0;
});
Vt("Hmm", function(i, u, c) {
  var p = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[Ji] = ft(i.substr(p));
});
Vt("Hmmss", function(i, u, c) {
  var p = i.length - 4, m = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[Ji] = ft(i.substr(p, 2)), u[Po] = ft(i.substr(m));
});
function jL(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var FL = /[ap]\.?m?\.?/i, HL = vd("Hours", !0);
function YL(i, u, c) {
  return i > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
}
var Bx = {
  calendar: kN,
  longDateFormat: LN,
  invalidDate: zN,
  ordinal: jN,
  dayOfMonthOrdinalParse: FN,
  relativeTime: YN,
  months: eL,
  monthsShort: Ux,
  week: pL,
  weekdays: EL,
  weekdaysMin: _L,
  weekdaysShort: Px,
  meridiemParse: FL
}, sn = {}, zh = {}, Bh;
function PL(i, u) {
  var c, p = Math.min(i.length, u.length);
  for (c = 0; c < p; c += 1)
    if (i[c] !== u[c])
      return c;
  return p;
}
function GT(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function VL(i) {
  for (var u = 0, c, p, m, E; u < i.length; ) {
    for (E = GT(i[u]).split("-"), c = E.length, p = GT(i[u + 1]), p = p ? p.split("-") : null; c > 0; ) {
      if (m = wg(E.slice(0, c).join("-")), m)
        return m;
      if (p && p.length >= c && PL(E, p) >= c - 1)
        break;
      c--;
    }
    u++;
  }
  return Bh;
}
function IL(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function wg(i) {
  var u = null, c;
  if (sn[i] === void 0 && typeof module < "u" && module && module.exports && IL(i))
    try {
      u = Bh._abbr, c = require, c("./locale/" + i), Ku(u);
    } catch {
      sn[i] = null;
    }
  return sn[i];
}
function Ku(i, u) {
  var c;
  return i && (ja(u) ? c = Wo(i) : c = GE(i, u), c ? Bh = c : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Bh._abbr;
}
function GE(i, u) {
  if (u !== null) {
    var c, p = Bx;
    if (u.abbr = i, sn[i] != null)
      bx(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), p = sn[i]._config;
    else if (u.parentLocale != null)
      if (sn[u.parentLocale] != null)
        p = sn[u.parentLocale]._config;
      else if (c = wg(u.parentLocale), c != null)
        p = c._config;
      else
        return zh[u.parentLocale] || (zh[u.parentLocale] = []), zh[u.parentLocale].push({
          name: i,
          config: u
        }), null;
    return sn[i] = new HE(_E(p, u)), zh[i] && zh[i].forEach(function(m) {
      GE(m.name, m.config);
    }), Ku(i), sn[i];
  } else
    return delete sn[i], null;
}
function BL(i, u) {
  if (u != null) {
    var c, p, m = Bx;
    sn[i] != null && sn[i].parentLocale != null ? sn[i].set(_E(sn[i]._config, u)) : (p = wg(i), p != null && (m = p._config), u = _E(m, u), p == null && (u.abbr = i), c = new HE(u), c.parentLocale = sn[i], sn[i] = c), Ku(i);
  } else
    sn[i] != null && (sn[i].parentLocale != null ? (sn[i] = sn[i].parentLocale, i === Ku() && Ku(i)) : sn[i] != null && delete sn[i]);
  return sn[i];
}
function Wo(i) {
  var u;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Bh;
  if (!el(i)) {
    if (u = wg(i), u)
      return u;
    i = [i];
  }
  return VL(i);
}
function WL() {
  return wE(sn);
}
function QE(i) {
  var u, c = i._a;
  return c && ot(i).overflow === -2 && (u = c[Yo] < 0 || c[Yo] > 11 ? Yo : c[Pl] < 1 || c[Pl] > _g(c[$r], c[Yo]) ? Pl : c[nr] < 0 || c[nr] > 24 || c[nr] === 24 && (c[Ji] !== 0 || c[Po] !== 0 || c[sc] !== 0) ? nr : c[Ji] < 0 || c[Ji] > 59 ? Ji : c[Po] < 0 || c[Po] > 59 ? Po : c[sc] < 0 || c[sc] > 999 ? sc : -1, ot(i)._overflowDayOfYear && (u < $r || u > Pl) && (u = Pl), ot(i)._overflowWeeks && u === -1 && (u = KN), ot(i)._overflowWeekday && u === -1 && (u = XN), ot(i).overflow = u), i;
}
var $L = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, GL = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, QL = /Z|[+-]\d\d(?::?\d\d)?/, Ky = [
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
], uE = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], qL = /^\/?Date\((-?\d+)/i, ZL = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, KL = {
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
function Wx(i) {
  var u, c, p = i._i, m = $L.exec(p) || GL.exec(p), E, g, R, b, D = Ky.length, z = uE.length;
  if (m) {
    for (ot(i).iso = !0, u = 0, c = D; u < c; u++)
      if (Ky[u][1].exec(m[1])) {
        g = Ky[u][0], E = Ky[u][2] !== !1;
        break;
      }
    if (g == null) {
      i._isValid = !1;
      return;
    }
    if (m[3]) {
      for (u = 0, c = z; u < c; u++)
        if (uE[u][1].exec(m[3])) {
          R = (m[2] || " ") + uE[u][0];
          break;
        }
      if (R == null) {
        i._isValid = !1;
        return;
      }
    }
    if (!E && R != null) {
      i._isValid = !1;
      return;
    }
    if (m[4])
      if (QL.exec(m[4]))
        b = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = g + (R || "") + (b || ""), ZE(i);
  } else
    i._isValid = !1;
}
function XL(i, u, c, p, m, E) {
  var g = [
    JL(i),
    Ux.indexOf(u),
    parseInt(c, 10),
    parseInt(p, 10),
    parseInt(m, 10)
  ];
  return E && g.push(parseInt(E, 10)), g;
}
function JL(i) {
  var u = parseInt(i, 10);
  return u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u;
}
function e2(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function t2(i, u, c) {
  if (i) {
    var p = Px.indexOf(i), m = new Date(
      u[0],
      u[1],
      u[2]
    ).getDay();
    if (p !== m)
      return ot(c).weekdayMismatch = !0, c._isValid = !1, !1;
  }
  return !0;
}
function n2(i, u, c) {
  if (i)
    return KL[i];
  if (u)
    return 0;
  var p = parseInt(c, 10), m = p % 100, E = (p - m) / 100;
  return E * 60 + m;
}
function $x(i) {
  var u = ZL.exec(e2(i._i)), c;
  if (u) {
    if (c = XL(
      u[4],
      u[3],
      u[2],
      u[5],
      u[6],
      u[7]
    ), !t2(u[1], c, i))
      return;
    i._a = c, i._tzm = n2(u[8], u[9], u[10]), i._d = Vh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), ot(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function r2(i) {
  var u = qL.exec(i._i);
  if (u !== null) {
    i._d = /* @__PURE__ */ new Date(+u[1]);
    return;
  }
  if (Wx(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if ($x(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : se.createFromInputFallback(i);
}
se.createFromInputFallback = wi(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(i) {
    i._d = /* @__PURE__ */ new Date(i._i + (i._useUTC ? " UTC" : ""));
  }
);
function cd(i, u, c) {
  return i ?? u ?? c;
}
function a2(i) {
  var u = new Date(se.now());
  return i._useUTC ? [
    u.getUTCFullYear(),
    u.getUTCMonth(),
    u.getUTCDate()
  ] : [u.getFullYear(), u.getMonth(), u.getDate()];
}
function qE(i) {
  var u, c, p = [], m, E, g;
  if (!i._d) {
    for (m = a2(i), i._w && i._a[Pl] == null && i._a[Yo] == null && i2(i), i._dayOfYear != null && (g = cd(i._a[$r], m[$r]), (i._dayOfYear > Hh(g) || i._dayOfYear === 0) && (ot(i)._overflowDayOfYear = !0), c = Vh(g, 0, i._dayOfYear), i._a[Yo] = c.getUTCMonth(), i._a[Pl] = c.getUTCDate()), u = 0; u < 3 && i._a[u] == null; ++u)
      i._a[u] = p[u] = m[u];
    for (; u < 7; u++)
      i._a[u] = p[u] = i._a[u] == null ? u === 2 ? 1 : 0 : i._a[u];
    i._a[nr] === 24 && i._a[Ji] === 0 && i._a[Po] === 0 && i._a[sc] === 0 && (i._nextDay = !0, i._a[nr] = 0), i._d = (i._useUTC ? Vh : fL).apply(
      null,
      p
    ), E = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[nr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== E && (ot(i).weekdayMismatch = !0);
  }
}
function i2(i) {
  var u, c, p, m, E, g, R, b, D;
  u = i._w, u.GG != null || u.W != null || u.E != null ? (E = 1, g = 4, c = cd(
    u.GG,
    i._a[$r],
    Ih(rn(), 1, 4).year
  ), p = cd(u.W, 1), m = cd(u.E, 1), (m < 1 || m > 7) && (b = !0)) : (E = i._locale._week.dow, g = i._locale._week.doy, D = Ih(rn(), E, g), c = cd(u.gg, i._a[$r], D.year), p = cd(u.w, D.week), u.d != null ? (m = u.d, (m < 0 || m > 6) && (b = !0)) : u.e != null ? (m = u.e + E, (u.e < 0 || u.e > 6) && (b = !0)) : m = E), p < 1 || p > Vo(c, E, g) ? ot(i)._overflowWeeks = !0 : b != null ? ot(i)._overflowWeekday = !0 : (R = Yx(c, p, m, E, g), i._a[$r] = R.year, i._dayOfYear = R.dayOfYear);
}
se.ISO_8601 = function() {
};
se.RFC_2822 = function() {
};
function ZE(i) {
  if (i._f === se.ISO_8601) {
    Wx(i);
    return;
  }
  if (i._f === se.RFC_2822) {
    $x(i);
    return;
  }
  i._a = [], ot(i).empty = !0;
  var u = "" + i._i, c, p, m, E, g, R = u.length, b = 0, D, z;
  for (m = Rx(i._f, i._locale).match(YE) || [], z = m.length, c = 0; c < z; c++)
    E = m[c], p = (u.match(QN(E, i)) || [])[0], p && (g = u.substr(0, u.indexOf(p)), g.length > 0 && ot(i).unusedInput.push(g), u = u.slice(
      u.indexOf(p) + p.length
    ), b += p.length), dd[E] ? (p ? ot(i).empty = !1 : ot(i).unusedTokens.push(E), ZN(E, p, i)) : i._strict && !p && ot(i).unusedTokens.push(E);
  ot(i).charsLeftOver = R - b, u.length > 0 && ot(i).unusedInput.push(u), i._a[nr] <= 12 && ot(i).bigHour === !0 && i._a[nr] > 0 && (ot(i).bigHour = void 0), ot(i).parsedDateParts = i._a.slice(0), ot(i).meridiem = i._meridiem, i._a[nr] = l2(
    i._locale,
    i._a[nr],
    i._meridiem
  ), D = ot(i).era, D !== null && (i._a[$r] = i._locale.erasConvertYear(D, i._a[$r])), qE(i), QE(i);
}
function l2(i, u, c) {
  var p;
  return c == null ? u : i.meridiemHour != null ? i.meridiemHour(u, c) : (i.isPM != null && (p = i.isPM(c), p && u < 12 && (u += 12), !p && u === 12 && (u = 0)), u);
}
function o2(i) {
  var u, c, p, m, E, g, R = !1, b = i._f.length;
  if (b === 0) {
    ot(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (m = 0; m < b; m++)
    E = 0, g = !1, u = FE({}, i), i._useUTC != null && (u._useUTC = i._useUTC), u._f = i._f[m], ZE(u), jE(u) && (g = !0), E += ot(u).charsLeftOver, E += ot(u).unusedTokens.length * 10, ot(u).score = E, R ? E < p && (p = E, c = u) : (p == null || E < p || g) && (p = E, c = u, g && (R = !0));
  qu(i, c || u);
}
function u2(i) {
  if (!i._d) {
    var u = PE(i._i), c = u.day === void 0 ? u.date : u.day;
    i._a = Tx(
      [u.year, u.month, c, u.hour, u.minute, u.second, u.millisecond],
      function(p) {
        return p && parseInt(p, 10);
      }
    ), qE(i);
  }
}
function s2(i) {
  var u = new Qh(QE(Gx(i)));
  return u._nextDay && (u.add(1, "d"), u._nextDay = void 0), u;
}
function Gx(i) {
  var u = i._i, c = i._f;
  return i._locale = i._locale || Wo(i._l), u === null || c === void 0 && u === "" ? hg({ nullInput: !0 }) : (typeof u == "string" && (i._i = u = i._locale.preparse(u)), tl(u) ? new Qh(QE(u)) : (Gh(u) ? i._d = u : el(c) ? o2(i) : c ? ZE(i) : c2(i), jE(i) || (i._d = null), i));
}
function c2(i) {
  var u = i._i;
  ja(u) ? i._d = new Date(se.now()) : Gh(u) ? i._d = new Date(u.valueOf()) : typeof u == "string" ? r2(i) : el(u) ? (i._a = Tx(u.slice(0), function(c) {
    return parseInt(c, 10);
  }), qE(i)) : cc(u) ? u2(i) : Io(u) ? i._d = new Date(u) : se.createFromInputFallback(i);
}
function Qx(i, u, c, p, m) {
  var E = {};
  return (u === !0 || u === !1) && (p = u, u = void 0), (c === !0 || c === !1) && (p = c, c = void 0), (cc(i) && AE(i) || el(i) && i.length === 0) && (i = void 0), E._isAMomentObject = !0, E._useUTC = E._isUTC = m, E._l = c, E._i = i, E._f = u, E._strict = p, s2(E);
}
function rn(i, u, c, p) {
  return Qx(i, u, c, p, !1);
}
var f2 = wi(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : hg();
  }
), d2 = wi(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : hg();
  }
);
function qx(i, u) {
  var c, p;
  if (u.length === 1 && el(u[0]) && (u = u[0]), !u.length)
    return rn();
  for (c = u[0], p = 1; p < u.length; ++p)
    (!u[p].isValid() || u[p][i](c)) && (c = u[p]);
  return c;
}
function p2() {
  var i = [].slice.call(arguments, 0);
  return qx("isBefore", i);
}
function h2() {
  var i = [].slice.call(arguments, 0);
  return qx("isAfter", i);
}
var v2 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ah = [
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
function m2(i) {
  var u, c = !1, p, m = Ah.length;
  for (u in i)
    if (Rt(i, u) && !(Mn.call(Ah, u) !== -1 && (i[u] == null || !isNaN(i[u]))))
      return !1;
  for (p = 0; p < m; ++p)
    if (i[Ah[p]]) {
      if (c)
        return !1;
      parseFloat(i[Ah[p]]) !== ft(i[Ah[p]]) && (c = !0);
    }
  return !0;
}
function y2() {
  return this._isValid;
}
function g2() {
  return nl(NaN);
}
function Cg(i) {
  var u = PE(i), c = u.year || 0, p = u.quarter || 0, m = u.month || 0, E = u.week || u.isoWeek || 0, g = u.day || 0, R = u.hour || 0, b = u.minute || 0, D = u.second || 0, z = u.millisecond || 0;
  this._isValid = m2(u), this._milliseconds = +z + D * 1e3 + // 1000
  b * 6e4 + // 1000 * 60
  R * 1e3 * 60 * 60, this._days = +g + E * 7, this._months = +m + p * 3 + c * 12, this._data = {}, this._locale = Wo(), this._bubble();
}
function ng(i) {
  return i instanceof Cg;
}
function TE(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function S2(i, u, c) {
  var p = Math.min(i.length, u.length), m = Math.abs(i.length - u.length), E = 0, g;
  for (g = 0; g < p; g++)
    (c && i[g] !== u[g] || !c && ft(i[g]) !== ft(u[g])) && E++;
  return E + m;
}
function Zx(i, u) {
  Ye(i, 0, 0, function() {
    var c = this.utcOffset(), p = "+";
    return c < 0 && (c = -c, p = "-"), p + Vl(~~(c / 60), 2) + u + Vl(~~c % 60, 2);
  });
}
Zx("Z", ":");
Zx("ZZ", "");
xe("Z", Eg);
xe("ZZ", Eg);
Vt(["Z", "ZZ"], function(i, u, c) {
  c._useUTC = !0, c._tzm = KE(Eg, i);
});
var E2 = /([\+\-]|\d\d)/gi;
function KE(i, u) {
  var c = (u || "").match(i), p, m, E;
  return c === null ? null : (p = c[c.length - 1] || [], m = (p + "").match(E2) || ["-", 0, 0], E = +(m[1] * 60) + ft(m[2]), E === 0 ? 0 : m[0] === "+" ? E : -E);
}
function XE(i, u) {
  var c, p;
  return u._isUTC ? (c = u.clone(), p = (tl(i) || Gh(i) ? i.valueOf() : rn(i).valueOf()) - c.valueOf(), c._d.setTime(c._d.valueOf() + p), se.updateOffset(c, !1), c) : rn(i).local();
}
function xE(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
se.updateOffset = function() {
};
function _2(i, u, c) {
  var p = this._offset || 0, m;
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    if (typeof i == "string") {
      if (i = KE(Eg, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !c && (i = i * 60);
    return !this._isUTC && u && (m = xE(this)), this._offset = i, this._isUTC = !0, m != null && this.add(m, "m"), p !== i && (!u || this._changeInProgress ? Jx(
      this,
      nl(i - p, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, se.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? p : xE(this);
}
function w2(i, u) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, u), this) : -this.utcOffset();
}
function C2(i) {
  return this.utcOffset(0, i);
}
function T2(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(xE(this), "m")), this;
}
function x2() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = KE($N, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function b2(i) {
  return this.isValid() ? (i = i ? rn(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function R2() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function D2() {
  if (!ja(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, u;
  return FE(i, this), i = Gx(i), i._a ? (u = i._isUTC ? Il(i._a) : rn(i._a), this._isDSTShifted = this.isValid() && S2(i._a, u.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function k2() {
  return this.isValid() ? !this._isUTC : !1;
}
function M2() {
  return this.isValid() ? this._isUTC : !1;
}
function Kx() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var O2 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, N2 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function nl(i, u) {
  var c = i, p = null, m, E, g;
  return ng(i) ? c = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : Io(i) || !isNaN(+i) ? (c = {}, u ? c[u] = +i : c.milliseconds = +i) : (p = O2.exec(i)) ? (m = p[1] === "-" ? -1 : 1, c = {
    y: 0,
    d: ft(p[Pl]) * m,
    h: ft(p[nr]) * m,
    m: ft(p[Ji]) * m,
    s: ft(p[Po]) * m,
    ms: ft(TE(p[sc] * 1e3)) * m
    // the millisecond decimal point is included in the match
  }) : (p = N2.exec(i)) ? (m = p[1] === "-" ? -1 : 1, c = {
    y: uc(p[2], m),
    M: uc(p[3], m),
    w: uc(p[4], m),
    d: uc(p[5], m),
    h: uc(p[6], m),
    m: uc(p[7], m),
    s: uc(p[8], m)
  }) : c == null ? c = {} : typeof c == "object" && ("from" in c || "to" in c) && (g = L2(
    rn(c.from),
    rn(c.to)
  ), c = {}, c.ms = g.milliseconds, c.M = g.months), E = new Cg(c), ng(i) && Rt(i, "_locale") && (E._locale = i._locale), ng(i) && Rt(i, "_isValid") && (E._isValid = i._isValid), E;
}
nl.fn = Cg.prototype;
nl.invalid = g2;
function uc(i, u) {
  var c = i && parseFloat(i.replace(",", "."));
  return (isNaN(c) ? 0 : c) * u;
}
function QT(i, u) {
  var c = {};
  return c.months = u.month() - i.month() + (u.year() - i.year()) * 12, i.clone().add(c.months, "M").isAfter(u) && --c.months, c.milliseconds = +u - +i.clone().add(c.months, "M"), c;
}
function L2(i, u) {
  var c;
  return i.isValid() && u.isValid() ? (u = XE(u, i), i.isBefore(u) ? c = QT(i, u) : (c = QT(u, i), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
}
function Xx(i, u) {
  return function(c, p) {
    var m, E;
    return p !== null && !isNaN(+p) && (bx(
      u,
      "moment()." + u + "(period, number) is deprecated. Please use moment()." + u + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), E = c, c = p, p = E), m = nl(c, p), Jx(this, m, i), this;
  };
}
function Jx(i, u, c, p) {
  var m = u._milliseconds, E = TE(u._days), g = TE(u._months);
  i.isValid() && (p = p ?? !0, g && Ax(i, lg(i, "Month") + g * c), E && kx(i, "Date", lg(i, "Date") + E * c), m && i._d.setTime(i._d.valueOf() + m * c), p && se.updateOffset(i, E || g));
}
var U2 = Xx(1, "add"), z2 = Xx(-1, "subtract");
function eb(i) {
  return typeof i == "string" || i instanceof String;
}
function A2(i) {
  return tl(i) || Gh(i) || eb(i) || Io(i) || F2(i) || j2(i) || i === null || i === void 0;
}
function j2(i) {
  var u = cc(i) && !AE(i), c = !1, p = [
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
function F2(i) {
  var u = el(i), c = !1;
  return u && (c = i.filter(function(p) {
    return !Io(p) && eb(i);
  }).length === 0), u && c;
}
function H2(i) {
  var u = cc(i) && !AE(i), c = !1, p = [
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
function Y2(i, u) {
  var c = i.diff(u, "days", !0);
  return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
}
function P2(i, u) {
  arguments.length === 1 && (arguments[0] ? A2(arguments[0]) ? (i = arguments[0], u = void 0) : H2(arguments[0]) && (u = arguments[0], i = void 0) : (i = void 0, u = void 0));
  var c = i || rn(), p = XE(c, this).startOf("day"), m = se.calendarFormat(this, p) || "sameElse", E = u && (Bl(u[m]) ? u[m].call(this, c) : u[m]);
  return this.format(
    E || this.localeData().calendar(m, this, rn(c))
  );
}
function V2() {
  return new Qh(this);
}
function I2(i, u) {
  var c = tl(i) ? i : rn(i);
  return this.isValid() && c.isValid() ? (u = Ci(u) || "millisecond", u === "millisecond" ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(u).valueOf()) : !1;
}
function B2(i, u) {
  var c = tl(i) ? i : rn(i);
  return this.isValid() && c.isValid() ? (u = Ci(u) || "millisecond", u === "millisecond" ? this.valueOf() < c.valueOf() : this.clone().endOf(u).valueOf() < c.valueOf()) : !1;
}
function W2(i, u, c, p) {
  var m = tl(i) ? i : rn(i), E = tl(u) ? u : rn(u);
  return this.isValid() && m.isValid() && E.isValid() ? (p = p || "()", (p[0] === "(" ? this.isAfter(m, c) : !this.isBefore(m, c)) && (p[1] === ")" ? this.isBefore(E, c) : !this.isAfter(E, c))) : !1;
}
function $2(i, u) {
  var c = tl(i) ? i : rn(i), p;
  return this.isValid() && c.isValid() ? (u = Ci(u) || "millisecond", u === "millisecond" ? this.valueOf() === c.valueOf() : (p = c.valueOf(), this.clone().startOf(u).valueOf() <= p && p <= this.clone().endOf(u).valueOf())) : !1;
}
function G2(i, u) {
  return this.isSame(i, u) || this.isAfter(i, u);
}
function Q2(i, u) {
  return this.isSame(i, u) || this.isBefore(i, u);
}
function q2(i, u, c) {
  var p, m, E;
  if (!this.isValid())
    return NaN;
  if (p = XE(i, this), !p.isValid())
    return NaN;
  switch (m = (p.utcOffset() - this.utcOffset()) * 6e4, u = Ci(u), u) {
    case "year":
      E = rg(this, p) / 12;
      break;
    case "month":
      E = rg(this, p);
      break;
    case "quarter":
      E = rg(this, p) / 3;
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
  return c ? E : _i(E);
}
function rg(i, u) {
  if (i.date() < u.date())
    return -rg(u, i);
  var c = (u.year() - i.year()) * 12 + (u.month() - i.month()), p = i.clone().add(c, "months"), m, E;
  return u - p < 0 ? (m = i.clone().add(c - 1, "months"), E = (u - p) / (p - m)) : (m = i.clone().add(c + 1, "months"), E = (u - p) / (m - p)), -(c + E) || 0;
}
se.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
se.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Z2() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function K2(i) {
  if (!this.isValid())
    return null;
  var u = i !== !0, c = u ? this.clone().utc() : this;
  return c.year() < 0 || c.year() > 9999 ? tg(
    c,
    u ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Bl(Date.prototype.toISOString) ? u ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", tg(c, "Z")) : tg(
    c,
    u ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function X2() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", u = "", c, p, m, E;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", u = "Z"), c = "[" + i + '("]', p = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", m = "-MM-DD[T]HH:mm:ss.SSS", E = u + '[")]', this.format(c + p + m + E);
}
function J2(i) {
  i || (i = this.isUtc() ? se.defaultFormatUtc : se.defaultFormat);
  var u = tg(this, i);
  return this.localeData().postformat(u);
}
function eU(i, u) {
  return this.isValid() && (tl(i) && i.isValid() || rn(i).isValid()) ? nl({ to: this, from: i }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
}
function tU(i) {
  return this.from(rn(), i);
}
function nU(i, u) {
  return this.isValid() && (tl(i) && i.isValid() || rn(i).isValid()) ? nl({ from: this, to: i }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
}
function rU(i) {
  return this.to(rn(), i);
}
function tb(i) {
  var u;
  return i === void 0 ? this._locale._abbr : (u = Wo(i), u != null && (this._locale = u), this);
}
var nb = wi(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function rb() {
  return this._locale;
}
var sg = 1e3, pd = 60 * sg, cg = 60 * pd, ab = (365 * 400 + 97) * 24 * cg;
function hd(i, u) {
  return (i % u + u) % u;
}
function ib(i, u, c) {
  return i < 100 && i >= 0 ? new Date(i + 400, u, c) - ab : new Date(i, u, c).valueOf();
}
function lb(i, u, c) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, u, c) - ab : Date.UTC(i, u, c);
}
function aU(i) {
  var u, c;
  if (i = Ci(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? lb : ib, i) {
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
      u = this._d.valueOf(), u -= hd(
        u + (this._isUTC ? 0 : this.utcOffset() * pd),
        cg
      );
      break;
    case "minute":
      u = this._d.valueOf(), u -= hd(u, pd);
      break;
    case "second":
      u = this._d.valueOf(), u -= hd(u, sg);
      break;
  }
  return this._d.setTime(u), se.updateOffset(this, !0), this;
}
function iU(i) {
  var u, c;
  if (i = Ci(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (c = this._isUTC ? lb : ib, i) {
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
      u = this._d.valueOf(), u += cg - hd(
        u + (this._isUTC ? 0 : this.utcOffset() * pd),
        cg
      ) - 1;
      break;
    case "minute":
      u = this._d.valueOf(), u += pd - hd(u, pd) - 1;
      break;
    case "second":
      u = this._d.valueOf(), u += sg - hd(u, sg) - 1;
      break;
  }
  return this._d.setTime(u), se.updateOffset(this, !0), this;
}
function lU() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function oU() {
  return Math.floor(this.valueOf() / 1e3);
}
function uU() {
  return new Date(this.valueOf());
}
function sU() {
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
function cU() {
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
function fU() {
  return this.isValid() ? this.toISOString() : null;
}
function dU() {
  return jE(this);
}
function pU() {
  return qu({}, ot(this));
}
function hU() {
  return ot(this).overflow;
}
function vU() {
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
xe("N", JE);
xe("NN", JE);
xe("NNN", JE);
xe("NNNN", bU);
xe("NNNNN", RU);
Vt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, u, c, p) {
    var m = c._locale.erasParse(i, p, c._strict);
    m ? ot(c).era = m : ot(c).invalidEra = i;
  }
);
xe("y", md);
xe("yy", md);
xe("yyy", md);
xe("yyyy", md);
xe("yo", DU);
Vt(["y", "yy", "yyy", "yyyy"], $r);
Vt(["yo"], function(i, u, c, p) {
  var m;
  c._locale._eraYearOrdinalRegex && (m = i.match(c._locale._eraYearOrdinalRegex)), c._locale.eraYearOrdinalParse ? u[$r] = c._locale.eraYearOrdinalParse(i, m) : u[$r] = parseInt(i, 10);
});
function mU(i, u) {
  var c, p, m, E = this._eras || Wo("en")._eras;
  for (c = 0, p = E.length; c < p; ++c) {
    switch (typeof E[c].since) {
      case "string":
        m = se(E[c].since).startOf("day"), E[c].since = m.valueOf();
        break;
    }
    switch (typeof E[c].until) {
      case "undefined":
        E[c].until = 1 / 0;
        break;
      case "string":
        m = se(E[c].until).startOf("day").valueOf(), E[c].until = m.valueOf();
        break;
    }
  }
  return E;
}
function yU(i, u, c) {
  var p, m, E = this.eras(), g, R, b;
  for (i = i.toUpperCase(), p = 0, m = E.length; p < m; ++p)
    if (g = E[p].name.toUpperCase(), R = E[p].abbr.toUpperCase(), b = E[p].narrow.toUpperCase(), c)
      switch (u) {
        case "N":
        case "NN":
        case "NNN":
          if (R === i)
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
    else if ([g, R, b].indexOf(i) >= 0)
      return E[p];
}
function gU(i, u) {
  var c = i.since <= i.until ? 1 : -1;
  return u === void 0 ? se(i.since).year() : se(i.since).year() + (u - i.offset) * c;
}
function SU() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].name;
  return "";
}
function EU() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].narrow;
  return "";
}
function _U() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].abbr;
  return "";
}
function wU() {
  var i, u, c, p, m = this.localeData().eras();
  for (i = 0, u = m.length; i < u; ++i)
    if (c = m[i].since <= m[i].until ? 1 : -1, p = this.clone().startOf("day").valueOf(), m[i].since <= p && p <= m[i].until || m[i].until <= p && p <= m[i].since)
      return (this.year() - se(m[i].since).year()) * c + m[i].offset;
  return this.year();
}
function CU(i) {
  return Rt(this, "_erasNameRegex") || e_.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function TU(i) {
  return Rt(this, "_erasAbbrRegex") || e_.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function xU(i) {
  return Rt(this, "_erasNarrowRegex") || e_.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function JE(i, u) {
  return u.erasAbbrRegex(i);
}
function bU(i, u) {
  return u.erasNameRegex(i);
}
function RU(i, u) {
  return u.erasNarrowRegex(i);
}
function DU(i, u) {
  return u._eraYearOrdinalRegex || md;
}
function e_() {
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
function Tg(i, u) {
  Ye(0, [i, i.length], 0, u);
}
Tg("gggg", "weekYear");
Tg("ggggg", "weekYear");
Tg("GGGG", "isoWeekYear");
Tg("GGGGG", "isoWeekYear");
Gr("weekYear", "gg");
Gr("isoWeekYear", "GG");
Qr("weekYear", 1);
Qr("isoWeekYear", 1);
xe("G", Sg);
xe("g", Sg);
xe("GG", an, ti);
xe("gg", an, ti);
xe("GGGG", IE, VE);
xe("gggg", IE, VE);
xe("GGGGG", gg, mg);
xe("ggggg", gg, mg);
Zh(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, u, c, p) {
    u[p.substr(0, 2)] = ft(i);
  }
);
Zh(["gg", "GG"], function(i, u, c, p) {
  u[p] = se.parseTwoDigitYear(i);
});
function kU(i) {
  return ob.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function MU(i) {
  return ob.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function OU() {
  return Vo(this.year(), 1, 4);
}
function NU() {
  return Vo(this.isoWeekYear(), 1, 4);
}
function LU() {
  var i = this.localeData()._week;
  return Vo(this.year(), i.dow, i.doy);
}
function UU() {
  var i = this.localeData()._week;
  return Vo(this.weekYear(), i.dow, i.doy);
}
function ob(i, u, c, p, m) {
  var E;
  return i == null ? Ih(this, p, m).year : (E = Vo(i, p, m), u > E && (u = E), zU.call(this, i, u, c, p, m));
}
function zU(i, u, c, p, m) {
  var E = Yx(i, u, c, p, m), g = Vh(E.year, 0, E.dayOfYear);
  return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
}
Ye("Q", 0, "Qo", "quarter");
Gr("quarter", "Q");
Qr("quarter", 7);
xe("Q", Mx);
Vt("Q", function(i, u) {
  u[Yo] = (ft(i) - 1) * 3;
});
function AU(i) {
  return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3);
}
Ye("D", ["DD", 2], "Do", "date");
Gr("date", "D");
Qr("date", 9);
xe("D", an);
xe("DD", an, ti);
xe("Do", function(i, u) {
  return i ? u._dayOfMonthOrdinalParse || u._ordinalParse : u._dayOfMonthOrdinalParseLenient;
});
Vt(["D", "DD"], Pl);
Vt("Do", function(i, u) {
  u[Pl] = ft(i.match(an)[0]);
});
var ub = vd("Date", !0);
Ye("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Gr("dayOfYear", "DDD");
Qr("dayOfYear", 4);
xe("DDD", yg);
xe("DDDD", Ox);
Vt(["DDD", "DDDD"], function(i, u, c) {
  c._dayOfYear = ft(i);
});
function jU(i) {
  var u = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return i == null ? u : this.add(i - u, "d");
}
Ye("m", ["mm", 2], 0, "minute");
Gr("minute", "m");
Qr("minute", 14);
xe("m", an);
xe("mm", an, ti);
Vt(["m", "mm"], Ji);
var FU = vd("Minutes", !1);
Ye("s", ["ss", 2], 0, "second");
Gr("second", "s");
Qr("second", 15);
xe("s", an);
xe("ss", an, ti);
Vt(["s", "ss"], Po);
var HU = vd("Seconds", !1);
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
xe("S", yg, Mx);
xe("SS", yg, ti);
xe("SSS", yg, Ox);
var Zu, sb;
for (Zu = "SSSS"; Zu.length <= 9; Zu += "S")
  xe(Zu, md);
function YU(i, u) {
  u[sc] = ft(("0." + i) * 1e3);
}
for (Zu = "S"; Zu.length <= 9; Zu += "S")
  Vt(Zu, YU);
sb = vd("Milliseconds", !1);
Ye("z", 0, 0, "zoneAbbr");
Ye("zz", 0, 0, "zoneName");
function PU() {
  return this._isUTC ? "UTC" : "";
}
function VU() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var ie = Qh.prototype;
ie.add = U2;
ie.calendar = P2;
ie.clone = V2;
ie.diff = q2;
ie.endOf = iU;
ie.format = J2;
ie.from = eU;
ie.fromNow = tU;
ie.to = nU;
ie.toNow = rU;
ie.get = BN;
ie.invalidAt = hU;
ie.isAfter = I2;
ie.isBefore = B2;
ie.isBetween = W2;
ie.isSame = $2;
ie.isSameOrAfter = G2;
ie.isSameOrBefore = Q2;
ie.isValid = dU;
ie.lang = nb;
ie.locale = tb;
ie.localeData = rb;
ie.max = d2;
ie.min = f2;
ie.parsingFlags = pU;
ie.set = WN;
ie.startOf = aU;
ie.subtract = z2;
ie.toArray = sU;
ie.toObject = cU;
ie.toDate = uU;
ie.toISOString = K2;
ie.inspect = X2;
typeof Symbol < "u" && Symbol.for != null && (ie[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
ie.toJSON = fU;
ie.toString = Z2;
ie.unix = oU;
ie.valueOf = lU;
ie.creationData = vU;
ie.eraName = SU;
ie.eraNarrow = EU;
ie.eraAbbr = _U;
ie.eraYear = wU;
ie.year = Hx;
ie.isLeapYear = cL;
ie.weekYear = kU;
ie.isoWeekYear = MU;
ie.quarter = ie.quarters = AU;
ie.month = jx;
ie.daysInMonth = oL;
ie.week = ie.weeks = mL;
ie.isoWeek = ie.isoWeeks = yL;
ie.weeksInYear = LU;
ie.weeksInWeekYear = UU;
ie.isoWeeksInYear = OU;
ie.isoWeeksInISOWeekYear = NU;
ie.date = ub;
ie.day = ie.days = ML;
ie.weekday = OL;
ie.isoWeekday = NL;
ie.dayOfYear = jU;
ie.hour = ie.hours = HL;
ie.minute = ie.minutes = FU;
ie.second = ie.seconds = HU;
ie.millisecond = ie.milliseconds = sb;
ie.utcOffset = _2;
ie.utc = C2;
ie.local = T2;
ie.parseZone = x2;
ie.hasAlignedHourOffset = b2;
ie.isDST = R2;
ie.isLocal = k2;
ie.isUtcOffset = M2;
ie.isUtc = Kx;
ie.isUTC = Kx;
ie.zoneAbbr = PU;
ie.zoneName = VU;
ie.dates = wi(
  "dates accessor is deprecated. Use date instead.",
  ub
);
ie.months = wi(
  "months accessor is deprecated. Use month instead",
  jx
);
ie.years = wi(
  "years accessor is deprecated. Use year instead",
  Hx
);
ie.zone = wi(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  w2
);
ie.isDSTShifted = wi(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  D2
);
function IU(i) {
  return rn(i * 1e3);
}
function BU() {
  return rn.apply(null, arguments).parseZone();
}
function cb(i) {
  return i;
}
var Dt = HE.prototype;
Dt.calendar = MN;
Dt.longDateFormat = UN;
Dt.invalidDate = AN;
Dt.ordinal = HN;
Dt.preparse = cb;
Dt.postformat = cb;
Dt.relativeTime = PN;
Dt.pastFuture = VN;
Dt.set = DN;
Dt.eras = mU;
Dt.erasParse = yU;
Dt.erasConvertYear = gU;
Dt.erasAbbrRegex = TU;
Dt.erasNameRegex = CU;
Dt.erasNarrowRegex = xU;
Dt.months = rL;
Dt.monthsShort = aL;
Dt.monthsParse = lL;
Dt.monthsRegex = sL;
Dt.monthsShortRegex = uL;
Dt.week = dL;
Dt.firstDayOfYear = vL;
Dt.firstDayOfWeek = hL;
Dt.weekdays = xL;
Dt.weekdaysMin = RL;
Dt.weekdaysShort = bL;
Dt.weekdaysParse = kL;
Dt.weekdaysRegex = LL;
Dt.weekdaysShortRegex = UL;
Dt.weekdaysMinRegex = zL;
Dt.isPM = jL;
Dt.meridiem = YL;
function fg(i, u, c, p) {
  var m = Wo(), E = Il().set(p, u);
  return m[c](E, i);
}
function fb(i, u, c) {
  if (Io(i) && (u = i, i = void 0), i = i || "", u != null)
    return fg(i, u, c, "month");
  var p, m = [];
  for (p = 0; p < 12; p++)
    m[p] = fg(i, p, c, "month");
  return m;
}
function t_(i, u, c, p) {
  typeof i == "boolean" ? (Io(u) && (c = u, u = void 0), u = u || "") : (u = i, c = u, i = !1, Io(u) && (c = u, u = void 0), u = u || "");
  var m = Wo(), E = i ? m._week.dow : 0, g, R = [];
  if (c != null)
    return fg(u, (c + E) % 7, p, "day");
  for (g = 0; g < 7; g++)
    R[g] = fg(u, (g + E) % 7, p, "day");
  return R;
}
function WU(i, u) {
  return fb(i, u, "months");
}
function $U(i, u) {
  return fb(i, u, "monthsShort");
}
function GU(i, u, c) {
  return t_(i, u, c, "weekdays");
}
function QU(i, u, c) {
  return t_(i, u, c, "weekdaysShort");
}
function qU(i, u, c) {
  return t_(i, u, c, "weekdaysMin");
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
    var u = i % 10, c = ft(i % 100 / 10) === 1 ? "th" : u === 1 ? "st" : u === 2 ? "nd" : u === 3 ? "rd" : "th";
    return i + c;
  }
});
se.lang = wi(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ku
);
se.langData = wi(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Wo
);
var Fo = Math.abs;
function ZU() {
  var i = this._data;
  return this._milliseconds = Fo(this._milliseconds), this._days = Fo(this._days), this._months = Fo(this._months), i.milliseconds = Fo(i.milliseconds), i.seconds = Fo(i.seconds), i.minutes = Fo(i.minutes), i.hours = Fo(i.hours), i.months = Fo(i.months), i.years = Fo(i.years), this;
}
function db(i, u, c, p) {
  var m = nl(u, c);
  return i._milliseconds += p * m._milliseconds, i._days += p * m._days, i._months += p * m._months, i._bubble();
}
function KU(i, u) {
  return db(this, i, u, 1);
}
function XU(i, u) {
  return db(this, i, u, -1);
}
function qT(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function JU() {
  var i = this._milliseconds, u = this._days, c = this._months, p = this._data, m, E, g, R, b;
  return i >= 0 && u >= 0 && c >= 0 || i <= 0 && u <= 0 && c <= 0 || (i += qT(bE(c) + u) * 864e5, u = 0, c = 0), p.milliseconds = i % 1e3, m = _i(i / 1e3), p.seconds = m % 60, E = _i(m / 60), p.minutes = E % 60, g = _i(E / 60), p.hours = g % 24, u += _i(g / 24), b = _i(pb(u)), c += b, u -= qT(bE(b)), R = _i(c / 12), c %= 12, p.days = u, p.months = c, p.years = R, this;
}
function pb(i) {
  return i * 4800 / 146097;
}
function bE(i) {
  return i * 146097 / 4800;
}
function ez(i) {
  if (!this.isValid())
    return NaN;
  var u, c, p = this._milliseconds;
  if (i = Ci(i), i === "month" || i === "quarter" || i === "year")
    switch (u = this._days + p / 864e5, c = this._months + pb(u), i) {
      case "month":
        return c;
      case "quarter":
        return c / 3;
      case "year":
        return c / 12;
    }
  else
    switch (u = this._days + Math.round(bE(this._months)), i) {
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
function tz() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ft(this._months / 12) * 31536e6 : NaN;
}
function $o(i) {
  return function() {
    return this.as(i);
  };
}
var nz = $o("ms"), rz = $o("s"), az = $o("m"), iz = $o("h"), lz = $o("d"), oz = $o("w"), uz = $o("M"), sz = $o("Q"), cz = $o("y");
function fz() {
  return nl(this);
}
function dz(i) {
  return i = Ci(i), this.isValid() ? this[i + "s"]() : NaN;
}
function pc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var pz = pc("milliseconds"), hz = pc("seconds"), vz = pc("minutes"), mz = pc("hours"), yz = pc("days"), gz = pc("months"), Sz = pc("years");
function Ez() {
  return _i(this.days() / 7);
}
var Ho = Math.round, fd = {
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
function _z(i, u, c, p, m) {
  return m.relativeTime(u || 1, !!c, i, p);
}
function wz(i, u, c, p) {
  var m = nl(i).abs(), E = Ho(m.as("s")), g = Ho(m.as("m")), R = Ho(m.as("h")), b = Ho(m.as("d")), D = Ho(m.as("M")), z = Ho(m.as("w")), U = Ho(m.as("y")), A = E <= c.ss && ["s", E] || E < c.s && ["ss", E] || g <= 1 && ["m"] || g < c.m && ["mm", g] || R <= 1 && ["h"] || R < c.h && ["hh", R] || b <= 1 && ["d"] || b < c.d && ["dd", b];
  return c.w != null && (A = A || z <= 1 && ["w"] || z < c.w && ["ww", z]), A = A || D <= 1 && ["M"] || D < c.M && ["MM", D] || U <= 1 && ["y"] || ["yy", U], A[2] = u, A[3] = +i > 0, A[4] = p, _z.apply(null, A);
}
function Cz(i) {
  return i === void 0 ? Ho : typeof i == "function" ? (Ho = i, !0) : !1;
}
function Tz(i, u) {
  return fd[i] === void 0 ? !1 : u === void 0 ? fd[i] : (fd[i] = u, i === "s" && (fd.ss = u - 1), !0);
}
function xz(i, u) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var c = !1, p = fd, m, E;
  return typeof i == "object" && (u = i, i = !1), typeof i == "boolean" && (c = i), typeof u == "object" && (p = Object.assign({}, fd, u), u.s != null && u.ss == null && (p.ss = u.s - 1)), m = this.localeData(), E = wz(this, !c, p, m), c && (E = m.pastFuture(+this, E)), m.postformat(E);
}
var sE = Math.abs;
function sd(i) {
  return (i > 0) - (i < 0) || +i;
}
function xg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = sE(this._milliseconds) / 1e3, u = sE(this._days), c = sE(this._months), p, m, E, g, R = this.asSeconds(), b, D, z, U;
  return R ? (p = _i(i / 60), m = _i(p / 60), i %= 60, p %= 60, E = _i(c / 12), c %= 12, g = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", b = R < 0 ? "-" : "", D = sd(this._months) !== sd(R) ? "-" : "", z = sd(this._days) !== sd(R) ? "-" : "", U = sd(this._milliseconds) !== sd(R) ? "-" : "", b + "P" + (E ? D + E + "Y" : "") + (c ? D + c + "M" : "") + (u ? z + u + "D" : "") + (m || p || i ? "T" : "") + (m ? U + m + "H" : "") + (p ? U + p + "M" : "") + (i ? U + g + "S" : "")) : "P0D";
}
var wt = Cg.prototype;
wt.isValid = y2;
wt.abs = ZU;
wt.add = KU;
wt.subtract = XU;
wt.as = ez;
wt.asMilliseconds = nz;
wt.asSeconds = rz;
wt.asMinutes = az;
wt.asHours = iz;
wt.asDays = lz;
wt.asWeeks = oz;
wt.asMonths = uz;
wt.asQuarters = sz;
wt.asYears = cz;
wt.valueOf = tz;
wt._bubble = JU;
wt.clone = fz;
wt.get = dz;
wt.milliseconds = pz;
wt.seconds = hz;
wt.minutes = vz;
wt.hours = mz;
wt.days = yz;
wt.weeks = Ez;
wt.months = gz;
wt.years = Sz;
wt.humanize = xz;
wt.toISOString = xg;
wt.toString = xg;
wt.toJSON = xg;
wt.locale = tb;
wt.localeData = rb;
wt.toIsoString = wi(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  xg
);
wt.lang = nb;
Ye("X", 0, 0, "unix");
Ye("x", 0, 0, "valueOf");
xe("x", Sg);
xe("X", GN);
Vt("X", function(i, u, c) {
  c._d = new Date(parseFloat(i) * 1e3);
});
Vt("x", function(i, u, c) {
  c._d = new Date(ft(i));
});
//! moment.js
se.version = "2.29.4";
bN(rn);
se.fn = ie;
se.min = p2;
se.max = h2;
se.now = v2;
se.utc = Il;
se.unix = IU;
se.months = WU;
se.isDate = Gh;
se.locale = Ku;
se.invalid = hg;
se.duration = nl;
se.isMoment = tl;
se.weekdays = GU;
se.parseZone = BU;
se.localeData = Wo;
se.isDuration = ng;
se.monthsShort = $U;
se.weekdaysMin = qU;
se.defineLocale = GE;
se.updateLocale = BL;
se.locales = WL;
se.weekdaysShort = QU;
se.normalizeUnits = Ci;
se.relativeTimeRounding = Cz;
se.relativeTimeThreshold = Tz;
se.calendarFormat = Y2;
se.prototype = ie;
se.HTML5_FMT = {
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
function bz(i, u = 300) {
  let c;
  return function(...p) {
    clearTimeout(c), c = setTimeout(() => {
      i.apply(this, p);
    }, u);
  };
}
const cE = (i, u, c, p = !1) => {
  var g, R, b, D;
  const m = i.clientWidth, E = i.clientHeight;
  if ((g = u.current) == null || g.setAttribute("viewBox", `0 0 ${m} ${E}`), (R = u.current) == null || R.setAttribute("width", String(m)), !p) {
    (b = u.current) == null || b.setAttribute("height", String(E)), c({
      height: E,
      width: m
    });
    return;
  }
  (D = u.current) == null || D.setAttribute("height", String(E)), c((z) => ({
    ...z,
    width: m
  }));
}, bj = ({
  type: i,
  width: u,
  height: c,
  hide: p,
  data: m,
  children: E,
  snap: g = !1
}) => {
  const R = tr(null), [b, D] = Dr({
    width: u ?? 0,
    height: c ?? 0
  }), z = tr(null), U = tr(null), A = fc(() => p ? [...m].filter((V) => (p.forEach((te) => delete V[te]), V)) : m, [p, m]);
  console.log(b), pg(() => {
    var te;
    const V = (te = R == null ? void 0 : R.current) == null ? void 0 : te.parentNode;
    return window == null || window.addEventListener(
      "resize",
      bz(
        () => cE(V, R, D, c !== void 0)
      )
    ), (!u || !c) && cE(V, R, D, c !== void 0), () => V == null ? void 0 : V.removeEventListener(
      "resize",
      () => cE(V, R, () => {
      }, c !== void 0)
    );
  }, [D, u, c]);
  const Q = Math.max(
    ...m.map((V) => Math.max(...Object.values(V)))
  );
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx(
      "div",
      {
        ref: z,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ F.jsxs(
      "svg",
      {
        ref: R,
        className: `chart ${i}`,
        viewBox: `0 0 ${u ?? 0} ${c ?? 0}`,
        width: b.width,
        height: b.height,
        onMouseMove: (V) => {
          if (U.current && R.current && z.current) {
            const te = U.current.style, Ee = V.clientX, Me = R.current.getBoundingClientRect().left, le = R.current.getBoundingClientRect().top;
            if (te.opacity = "1", g) {
              const ue = b.width / (m.length * 4), We = Array.from({
                length: m.length
              }).map((dt, Nt) => Math.abs(
                Ee - Me - ue * Nt - b.width / m.length * Nt
              )), et = We.indexOf(
                Math.min(...We)
              ), nt = b.width / m.length * et + ue * et;
              te.transform = `translate(${nt}px, 0px)`;
            } else
              te.transform = `translate(${V.clientX - Me}px, 0px)`, te.transition = "none";
            if (z.current.innerHTML === "") {
              z.current.style.opacity = "0";
              return;
            }
            const ne = V.clientX - Me, me = z.current.clientWidth;
            z.current.style.opacity = "1";
            let fe = ne + 20;
            const ee = V.clientY - le + 20;
            z.current.offsetLeft + ne + me + 20 > window.innerWidth && (fe = ne - me - 20), z.current.style.transform = `translate(${fe}px, ${ee}px)`;
          }
        },
        onMouseLeave: () => {
          z.current && U.current && (z.current.innerHTML = "", z.current.style.opacity = "0", U.current.style.opacity = "0");
        },
        children: [
          E({
            currentSize: b,
            tooltipRef: z,
            data: A(),
            maxItemValue: Q,
            lineRef: U
          }),
          /* @__PURE__ */ F.jsx(
            "line",
            {
              ref: U,
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
var Xu = Bo;
const Yh = /^[a-z0-9]+(-[a-z0-9]+)*$/, bg = (i, u, c, p = "") => {
  const m = i.split(":");
  if (i.slice(0, 1) === "@") {
    if (m.length < 2 || m.length > 3)
      return null;
    p = m.shift().slice(1);
  }
  if (m.length > 3 || !m.length)
    return null;
  if (m.length > 1) {
    const R = m.pop(), b = m.pop(), D = {
      // Allow provider without '@': "provider:prefix:name"
      provider: m.length > 0 ? m[0] : p,
      prefix: b,
      name: R
    };
    return u && !ag(D) ? null : D;
  }
  const E = m[0], g = E.split("-");
  if (g.length > 1) {
    const R = {
      provider: p,
      prefix: g.shift(),
      name: g.join("-")
    };
    return u && !ag(R) ? null : R;
  }
  if (c && p === "") {
    const R = {
      provider: p,
      prefix: "",
      name: E
    };
    return u && !ag(R, c) ? null : R;
  }
  return null;
}, ag = (i, u) => i ? !!((i.provider === "" || i.provider.match(Yh)) && (u && i.prefix === "" || i.prefix.match(Yh)) && i.name.match(Yh)) : !1, hb = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), dg = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), n_ = Object.freeze({
  ...hb,
  ...dg
}), RE = Object.freeze({
  ...n_,
  body: "",
  hidden: !1
});
function Rz(i, u) {
  const c = {};
  !i.hFlip != !u.hFlip && (c.hFlip = !0), !i.vFlip != !u.vFlip && (c.vFlip = !0);
  const p = ((i.rotate || 0) + (u.rotate || 0)) % 4;
  return p && (c.rotate = p), c;
}
function ZT(i, u) {
  const c = Rz(i, u);
  for (const p in RE)
    p in dg ? p in i && !(p in c) && (c[p] = dg[p]) : p in u ? c[p] = u[p] : p in i && (c[p] = i[p]);
  return c;
}
function Dz(i, u) {
  const c = i.icons, p = i.aliases || /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function E(g) {
    if (c[g])
      return m[g] = [];
    if (!(g in m)) {
      m[g] = null;
      const R = p[g] && p[g].parent, b = R && E(R);
      b && (m[g] = [R].concat(b));
    }
    return m[g];
  }
  return (u || Object.keys(c).concat(Object.keys(p))).forEach(E), m;
}
function kz(i, u, c) {
  const p = i.icons, m = i.aliases || /* @__PURE__ */ Object.create(null);
  let E = {};
  function g(R) {
    E = ZT(
      p[R] || m[R],
      E
    );
  }
  return g(u), c.forEach(g), ZT(i, E);
}
function vb(i, u) {
  const c = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return c;
  i.not_found instanceof Array && i.not_found.forEach((m) => {
    u(m, null), c.push(m);
  });
  const p = Dz(i);
  for (const m in p) {
    const E = p[m];
    E && (u(m, kz(i, m, E)), c.push(m));
  }
  return c;
}
const Mz = {
  provider: "",
  aliases: {},
  not_found: {},
  ...hb
};
function fE(i, u) {
  for (const c in u)
    if (c in i && typeof i[c] != typeof u[c])
      return !1;
  return !0;
}
function mb(i) {
  if (typeof i != "object" || i === null)
    return null;
  const u = i;
  if (typeof u.prefix != "string" || !i.icons || typeof i.icons != "object" || !fE(i, Mz))
    return null;
  const c = u.icons;
  for (const m in c) {
    const E = c[m];
    if (!m.match(Yh) || typeof E.body != "string" || !fE(
      E,
      RE
    ))
      return null;
  }
  const p = u.aliases || /* @__PURE__ */ Object.create(null);
  for (const m in p) {
    const E = p[m], g = E.parent;
    if (!m.match(Yh) || typeof g != "string" || !c[g] && !p[g] || !fE(
      E,
      RE
    ))
      return null;
  }
  return u;
}
const KT = /* @__PURE__ */ Object.create(null);
function Oz(i, u) {
  return {
    provider: i,
    prefix: u,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function dc(i, u) {
  const c = KT[i] || (KT[i] = /* @__PURE__ */ Object.create(null));
  return c[u] || (c[u] = Oz(i, u));
}
function r_(i, u) {
  return mb(u) ? vb(u, (c, p) => {
    p ? i.icons[c] = p : i.missing.add(c);
  }) : [];
}
function Nz(i, u, c) {
  try {
    if (typeof c.body == "string")
      return i.icons[u] = { ...c }, !0;
  } catch {
  }
  return !1;
}
let Wh = !1;
function yb(i) {
  return typeof i == "boolean" && (Wh = i), Wh;
}
function Lz(i) {
  const u = typeof i == "string" ? bg(i, !0, Wh) : i;
  if (u) {
    const c = dc(u.provider, u.prefix), p = u.name;
    return c.icons[p] || (c.missing.has(p) ? null : void 0);
  }
}
function Uz(i, u) {
  const c = bg(i, !0, Wh);
  if (!c)
    return !1;
  const p = dc(c.provider, c.prefix);
  return Nz(p, c.name, u);
}
function zz(i, u) {
  if (typeof i != "object")
    return !1;
  if (typeof u != "string" && (u = i.provider || ""), Wh && !u && !i.prefix) {
    let m = !1;
    return mb(i) && (i.prefix = "", vb(i, (E, g) => {
      g && Uz(E, g) && (m = !0);
    })), m;
  }
  const c = i.prefix;
  if (!ag({
    provider: u,
    prefix: c,
    name: "a"
  }))
    return !1;
  const p = dc(u, c);
  return !!r_(p, i);
}
const gb = Object.freeze({
  width: null,
  height: null
}), Sb = Object.freeze({
  // Dimensions
  ...gb,
  // Transformations
  ...dg
}), Az = /(-?[0-9.]*[0-9]+[0-9.]*)/g, jz = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function XT(i, u, c) {
  if (u === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * u * c) / c;
  if (typeof i != "string")
    return i;
  const p = i.split(Az);
  if (p === null || !p.length)
    return i;
  const m = [];
  let E = p.shift(), g = jz.test(E);
  for (; ; ) {
    if (g) {
      const R = parseFloat(E);
      isNaN(R) ? m.push(E) : m.push(Math.ceil(R * u * c) / c);
    } else
      m.push(E);
    if (E = p.shift(), E === void 0)
      return m.join("");
    g = !g;
  }
}
const Fz = (i) => i === "unset" || i === "undefined" || i === "none";
function Hz(i, u) {
  const c = {
    ...n_,
    ...i
  }, p = {
    ...Sb,
    ...u
  }, m = {
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height
  };
  let E = c.body;
  [c, p].forEach((V) => {
    const te = [], Ee = V.hFlip, Me = V.vFlip;
    let le = V.rotate;
    Ee ? Me ? le += 2 : (te.push(
      "translate(" + (m.width + m.left).toString() + " " + (0 - m.top).toString() + ")"
    ), te.push("scale(-1 1)"), m.top = m.left = 0) : Me && (te.push(
      "translate(" + (0 - m.left).toString() + " " + (m.height + m.top).toString() + ")"
    ), te.push("scale(1 -1)"), m.top = m.left = 0);
    let ne;
    switch (le < 0 && (le -= Math.floor(le / 4) * 4), le = le % 4, le) {
      case 1:
        ne = m.height / 2 + m.top, te.unshift(
          "rotate(90 " + ne.toString() + " " + ne.toString() + ")"
        );
        break;
      case 2:
        te.unshift(
          "rotate(180 " + (m.width / 2 + m.left).toString() + " " + (m.height / 2 + m.top).toString() + ")"
        );
        break;
      case 3:
        ne = m.width / 2 + m.left, te.unshift(
          "rotate(-90 " + ne.toString() + " " + ne.toString() + ")"
        );
        break;
    }
    le % 2 === 1 && (m.left !== m.top && (ne = m.left, m.left = m.top, m.top = ne), m.width !== m.height && (ne = m.width, m.width = m.height, m.height = ne)), te.length && (E = '<g transform="' + te.join(" ") + '">' + E + "</g>");
  });
  const g = p.width, R = p.height, b = m.width, D = m.height;
  let z, U;
  g === null ? (U = R === null ? "1em" : R === "auto" ? D : R, z = XT(U, b / D)) : (z = g === "auto" ? b : g, U = R === null ? XT(z, D / b) : R === "auto" ? D : R);
  const A = {}, Q = (V, te) => {
    Fz(te) || (A[V] = te.toString());
  };
  return Q("width", z), Q("height", U), A.viewBox = m.left.toString() + " " + m.top.toString() + " " + b.toString() + " " + D.toString(), {
    attributes: A,
    body: E
  };
}
const Yz = /\sid="(\S+)"/g, Pz = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Vz = 0;
function Iz(i, u = Pz) {
  const c = [];
  let p;
  for (; p = Yz.exec(i); )
    c.push(p[1]);
  if (!c.length)
    return i;
  const m = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((E) => {
    const g = typeof u == "function" ? u(E) : u + (Vz++).toString(), R = E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + R + ')([")]|\\.[a-z])', "g"),
      "$1" + g + m + "$3"
    );
  }), i = i.replace(new RegExp(m, "g"), ""), i;
}
const DE = /* @__PURE__ */ Object.create(null);
function Bz(i, u) {
  DE[i] = u;
}
function kE(i) {
  return DE[i] || DE[""];
}
function a_(i) {
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
const i_ = /* @__PURE__ */ Object.create(null), jh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], ig = [];
for (; jh.length > 0; )
  jh.length === 1 || Math.random() > 0.5 ? ig.push(jh.shift()) : ig.push(jh.pop());
i_[""] = a_({
  resources: ["https://api.iconify.design"].concat(ig)
});
function Wz(i, u) {
  const c = a_(u);
  return c === null ? !1 : (i_[i] = c, !0);
}
function l_(i) {
  return i_[i];
}
const $z = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let JT = $z();
function Gz(i, u) {
  const c = l_(i);
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
function Qz(i) {
  return i === 404;
}
const qz = (i, u, c) => {
  const p = [], m = Gz(i, u), E = "icons";
  let g = {
    type: E,
    provider: i,
    prefix: u,
    icons: []
  }, R = 0;
  return c.forEach((b, D) => {
    R += b.length + 1, R >= m && D > 0 && (p.push(g), g = {
      type: E,
      provider: i,
      prefix: u,
      icons: []
    }, R = b.length), g.icons.push(b);
  }), p.push(g), p;
};
function Zz(i) {
  if (typeof i == "string") {
    const u = l_(i);
    if (u)
      return u.path;
  }
  return "/";
}
const Kz = (i, u, c) => {
  if (!JT) {
    c("abort", 424);
    return;
  }
  let p = Zz(u.provider);
  switch (u.type) {
    case "icons": {
      const E = u.prefix, R = u.icons.join(","), b = new URLSearchParams({
        icons: R
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
  JT(i + p).then((E) => {
    const g = E.status;
    if (g !== 200) {
      setTimeout(() => {
        c(Qz(g) ? "abort" : "next", g);
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
}, Xz = {
  prepare: qz,
  send: Kz
};
function Jz(i) {
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
    const E = m.provider, g = m.prefix, R = m.name, b = c[E] || (c[E] = /* @__PURE__ */ Object.create(null)), D = b[g] || (b[g] = dc(E, g));
    let z;
    R in D.icons ? z = u.loaded : g === "" || D.missing.has(R) ? z = u.missing : z = u.pending;
    const U = {
      provider: E,
      prefix: g,
      name: R
    };
    z.push(U);
  }), u;
}
function Eb(i, u) {
  i.forEach((c) => {
    const p = c.loaderCallbacks;
    p && (c.loaderCallbacks = p.filter((m) => m.id !== u));
  });
}
function eA(i) {
  i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0, setTimeout(() => {
    i.pendingCallbacksFlag = !1;
    const u = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
    if (!u.length)
      return;
    let c = !1;
    const p = i.provider, m = i.prefix;
    u.forEach((E) => {
      const g = E.icons, R = g.pending.length;
      g.pending = g.pending.filter((b) => {
        if (b.prefix !== m)
          return !0;
        const D = b.name;
        if (i.icons[D])
          g.loaded.push({
            provider: p,
            prefix: m,
            name: D
          });
        else if (i.missing.has(D))
          g.missing.push({
            provider: p,
            prefix: m,
            name: D
          });
        else
          return c = !0, !0;
        return !1;
      }), g.pending.length !== R && (c || Eb([i], E.id), E.callback(
        g.loaded.slice(0),
        g.missing.slice(0),
        g.pending.slice(0),
        E.abort
      ));
    });
  }));
}
let tA = 0;
function nA(i, u, c) {
  const p = tA++, m = Eb.bind(null, c, p);
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
function rA(i, u = !0, c = !1) {
  const p = [];
  return i.forEach((m) => {
    const E = typeof m == "string" ? bg(m, u, c) : m;
    E && p.push(E);
  }), p;
}
var aA = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function iA(i, u, c, p) {
  const m = i.resources.length, E = i.random ? Math.floor(Math.random() * m) : i.index;
  let g;
  if (i.random) {
    let ee = i.resources.slice(0);
    for (g = []; ee.length > 1; ) {
      const ue = Math.floor(Math.random() * ee.length);
      g.push(ee[ue]), ee = ee.slice(0, ue).concat(ee.slice(ue + 1));
    }
    g = g.concat(ee);
  } else
    g = i.resources.slice(E).concat(i.resources.slice(0, E));
  const R = Date.now();
  let b = "pending", D = 0, z, U = null, A = [], Q = [];
  typeof p == "function" && Q.push(p);
  function V() {
    U && (clearTimeout(U), U = null);
  }
  function te() {
    b === "pending" && (b = "aborted"), V(), A.forEach((ee) => {
      ee.status === "pending" && (ee.status = "aborted");
    }), A = [];
  }
  function Ee(ee, ue) {
    ue && (Q = []), typeof ee == "function" && Q.push(ee);
  }
  function Me() {
    return {
      startTime: R,
      payload: u,
      status: b,
      queriesSent: D,
      queriesPending: A.length,
      subscribe: Ee,
      abort: te
    };
  }
  function le() {
    b = "failed", Q.forEach((ee) => {
      ee(void 0, z);
    });
  }
  function ne() {
    A.forEach((ee) => {
      ee.status === "pending" && (ee.status = "aborted");
    }), A = [];
  }
  function me(ee, ue, We) {
    const et = ue !== "success";
    switch (A = A.filter((nt) => nt !== ee), b) {
      case "pending":
        break;
      case "failed":
        if (et || !i.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (ue === "abort") {
      z = We, le();
      return;
    }
    if (et) {
      z = We, A.length || (g.length ? fe() : le());
      return;
    }
    if (V(), ne(), !i.random) {
      const nt = i.resources.indexOf(ee.resource);
      nt !== -1 && nt !== i.index && (i.index = nt);
    }
    b = "completed", Q.forEach((nt) => {
      nt(We);
    });
  }
  function fe() {
    if (b !== "pending")
      return;
    V();
    const ee = g.shift();
    if (ee === void 0) {
      if (A.length) {
        U = setTimeout(() => {
          V(), b === "pending" && (ne(), le());
        }, i.timeout);
        return;
      }
      le();
      return;
    }
    const ue = {
      status: "pending",
      resource: ee,
      callback: (We, et) => {
        me(ue, We, et);
      }
    };
    A.push(ue), D++, U = setTimeout(fe, i.rotate), c(ee, u, ue.callback);
  }
  return setTimeout(fe), Me;
}
function _b(i) {
  const u = {
    ...aA,
    ...i
  };
  let c = [];
  function p() {
    c = c.filter((R) => R().status === "pending");
  }
  function m(R, b, D) {
    const z = iA(
      u,
      R,
      b,
      (U, A) => {
        p(), D && D(U, A);
      }
    );
    return c.push(z), z;
  }
  function E(R) {
    return c.find((b) => R(b)) || null;
  }
  return {
    query: m,
    find: E,
    setIndex: (R) => {
      u.index = R;
    },
    getIndex: () => u.index,
    cleanup: p
  };
}
function ex() {
}
const dE = /* @__PURE__ */ Object.create(null);
function lA(i) {
  if (!dE[i]) {
    const u = l_(i);
    if (!u)
      return;
    const c = _b(u), p = {
      config: u,
      redundancy: c
    };
    dE[i] = p;
  }
  return dE[i];
}
function oA(i, u, c) {
  let p, m;
  if (typeof i == "string") {
    const E = kE(i);
    if (!E)
      return c(void 0, 424), ex;
    m = E.send;
    const g = lA(i);
    g && (p = g.redundancy);
  } else {
    const E = a_(i);
    if (E) {
      p = _b(E);
      const g = i.resources ? i.resources[0] : "", R = kE(g);
      R && (m = R.send);
    }
  }
  return !p || !m ? (c(void 0, 424), ex) : p.query(u, m, c)().abort;
}
const tx = "iconify2", $h = "iconify", wb = $h + "-count", nx = $h + "-version", Cb = 36e5, uA = 168;
function ME(i, u) {
  try {
    return i.getItem(u);
  } catch {
  }
}
function o_(i, u, c) {
  try {
    return i.setItem(u, c), !0;
  } catch {
  }
}
function rx(i, u) {
  try {
    i.removeItem(u);
  } catch {
  }
}
function OE(i, u) {
  return o_(i, wb, u.toString());
}
function NE(i) {
  return parseInt(ME(i, wb)) || 0;
}
const Rg = {
  local: !0,
  session: !0
}, Tb = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let u_ = !1;
function sA(i) {
  u_ = i;
}
let Xy = typeof window > "u" ? {} : window;
function xb(i) {
  const u = i + "Storage";
  try {
    if (Xy && Xy[u] && typeof Xy[u].length == "number")
      return Xy[u];
  } catch {
  }
  Rg[i] = !1;
}
function bb(i, u) {
  const c = xb(i);
  if (!c)
    return;
  const p = ME(c, nx);
  if (p !== tx) {
    if (p) {
      const R = NE(c);
      for (let b = 0; b < R; b++)
        rx(c, $h + b.toString());
    }
    o_(c, nx, tx), OE(c, 0);
    return;
  }
  const m = Math.floor(Date.now() / Cb) - uA, E = (R) => {
    const b = $h + R.toString(), D = ME(c, b);
    if (typeof D == "string") {
      try {
        const z = JSON.parse(D);
        if (typeof z == "object" && typeof z.cached == "number" && z.cached > m && typeof z.provider == "string" && typeof z.data == "object" && typeof z.data.prefix == "string" && // Valid item: run callback
        u(z, R))
          return !0;
      } catch {
      }
      rx(c, b);
    }
  };
  let g = NE(c);
  for (let R = g - 1; R >= 0; R--)
    E(R) || (R === g - 1 ? (g--, OE(c, g)) : Tb[i].add(R));
}
function Rb() {
  if (!u_) {
    sA(!0);
    for (const i in Rg)
      bb(i, (u) => {
        const c = u.data, p = u.provider, m = c.prefix, E = dc(
          p,
          m
        );
        if (!r_(E, c).length)
          return !1;
        const g = c.lastModified || -1;
        return E.lastModifiedCached = E.lastModifiedCached ? Math.min(E.lastModifiedCached, g) : g, !0;
      });
  }
}
function cA(i, u) {
  const c = i.lastModifiedCached;
  if (
    // Matches or newer
    c && c >= u
  )
    return c === u;
  if (i.lastModifiedCached = u, c)
    for (const p in Rg)
      bb(p, (m) => {
        const E = m.data;
        return m.provider !== i.provider || E.prefix !== i.prefix || E.lastModified === u;
      });
  return !0;
}
function fA(i, u) {
  u_ || Rb();
  function c(p) {
    let m;
    if (!Rg[p] || !(m = xb(p)))
      return;
    const E = Tb[p];
    let g;
    if (E.size)
      E.delete(g = Array.from(E).shift());
    else if (g = NE(m), !OE(m, g + 1))
      return;
    const R = {
      cached: Math.floor(Date.now() / Cb),
      provider: i.provider,
      data: u
    };
    return o_(
      m,
      $h + g.toString(),
      JSON.stringify(R)
    );
  }
  u.lastModified && !cA(i, u.lastModified) || Object.keys(u.icons).length && (u.not_found && (u = Object.assign({}, u), delete u.not_found), c("local") || c("session"));
}
function ax() {
}
function dA(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, eA(i);
  }));
}
function pA(i, u) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(u).sort() : i.iconsToLoad = u, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: p } = i, m = i.iconsToLoad;
    delete i.iconsToLoad;
    let E;
    if (!m || !(E = kE(c)))
      return;
    E.prepare(c, p, m).forEach((R) => {
      oA(c, R, (b) => {
        if (typeof b != "object")
          R.icons.forEach((D) => {
            i.missing.add(D);
          });
        else
          try {
            const D = r_(
              i,
              b
            );
            if (!D.length)
              return;
            const z = i.pendingIcons;
            z && D.forEach((U) => {
              z.delete(U);
            }), fA(i, b);
          } catch (D) {
            console.error(D);
          }
        dA(i);
      });
    });
  }));
}
const hA = (i, u) => {
  const c = rA(i, !0, yb()), p = Jz(c);
  if (!p.pending.length) {
    let b = !0;
    return u && setTimeout(() => {
      b && u(
        p.loaded,
        p.missing,
        p.pending,
        ax
      );
    }), () => {
      b = !1;
    };
  }
  const m = /* @__PURE__ */ Object.create(null), E = [];
  let g, R;
  return p.pending.forEach((b) => {
    const { provider: D, prefix: z } = b;
    if (z === R && D === g)
      return;
    g = D, R = z, E.push(dc(D, z));
    const U = m[D] || (m[D] = /* @__PURE__ */ Object.create(null));
    U[z] || (U[z] = []);
  }), p.pending.forEach((b) => {
    const { provider: D, prefix: z, name: U } = b, A = dc(D, z), Q = A.pendingIcons || (A.pendingIcons = /* @__PURE__ */ new Set());
    Q.has(U) || (Q.add(U), m[D][z].push(U));
  }), E.forEach((b) => {
    const { provider: D, prefix: z } = b;
    m[D][z].length && pA(b, m[D][z]);
  }), u ? nA(u, p, E) : ax;
};
function vA(i, u) {
  const c = {
    ...i
  };
  for (const p in u) {
    const m = u[p], E = typeof m;
    p in gb ? (m === null || m && (E === "string" || E === "number")) && (c[p] = m) : E === typeof c[p] && (c[p] = p === "rotate" ? m % 4 : m);
  }
  return c;
}
const mA = /[\s,]+/;
function yA(i, u) {
  u.split(mA).forEach((c) => {
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
function gA(i, u = 0) {
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
function SA(i, u) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const p in u)
    c += " " + p + '="' + u[p] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function EA(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function _A(i) {
  return "data:image/svg+xml," + EA(i);
}
function wA(i) {
  return 'url("' + _A(i) + '")';
}
let Ph;
function CA() {
  try {
    Ph = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Ph = null;
  }
}
function TA(i) {
  return Ph === void 0 && CA(), Ph ? Ph.createHTML(i) : i;
}
const Db = {
  ...Sb,
  inline: !1
}, xA = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, bA = {
  display: "inline-block"
}, LE = {
  backgroundColor: "currentColor"
}, kb = {
  backgroundColor: "transparent"
}, ix = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, lx = {
  WebkitMask: LE,
  mask: LE,
  background: kb
};
for (const i in lx) {
  const u = lx[i];
  for (const c in ix)
    u[i + c] = ix[c];
}
const RA = {
  ...Db,
  inline: !0
};
function ox(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const DA = (i, u, c, p) => {
  const m = c ? RA : Db, E = vA(m, u), g = u.mode || "svg", R = {}, b = u.style || {}, D = {
    ...g === "svg" ? xA : {},
    ref: p
  };
  for (let Me in u) {
    const le = u[Me];
    if (le !== void 0)
      switch (Me) {
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
          E[Me] = le === !0 || le === "true" || le === 1;
          break;
        case "flip":
          typeof le == "string" && yA(E, le);
          break;
        case "color":
          R.color = le;
          break;
        case "rotate":
          typeof le == "string" ? E[Me] = gA(le) : typeof le == "number" && (E[Me] = le);
          break;
        case "ariaHidden":
        case "aria-hidden":
          le !== !0 && le !== "true" && delete D["aria-hidden"];
          break;
        default:
          m[Me] === void 0 && (D[Me] = le);
      }
  }
  const z = Hz(i, E), U = z.attributes;
  if (E.inline && (R.verticalAlign = "-0.125em"), g === "svg") {
    D.style = {
      ...R,
      ...b
    }, Object.assign(D, U);
    let Me = 0, le = u.id;
    return typeof le == "string" && (le = le.replace(/-/g, "_")), D.dangerouslySetInnerHTML = {
      __html: TA(Iz(z.body, le ? () => le + "ID" + Me++ : "iconifyReact"))
    }, Xu.createElement("svg", D);
  }
  const { body: A, width: Q, height: V } = i, te = g === "mask" || (g === "bg" ? !1 : A.indexOf("currentColor") !== -1), Ee = SA(A, {
    ...U,
    width: Q + "",
    height: V + ""
  });
  return D.style = {
    ...R,
    "--svg": wA(Ee),
    width: ox(U.width),
    height: ox(U.height),
    ...bA,
    ...te ? LE : kb,
    ...b
  }, Xu.createElement("span", D);
};
yb(!0);
Bz("", Xz);
if (typeof document < "u" && typeof window < "u") {
  Rb();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const u = i.IconifyPreload, c = "Invalid IconifyPreload syntax.";
    typeof u == "object" && u !== null && (u instanceof Array ? u : [u]).forEach((p) => {
      try {
        // Check if item is an object and not null/array
        (typeof p != "object" || p === null || p instanceof Array || // Check for 'icons' and 'prefix'
        typeof p.icons != "object" || typeof p.prefix != "string" || // Add icon set
        !zz(p)) && console.error(c);
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
          Wz(c, m) || console.error(p);
        } catch {
          console.error(p);
        }
      }
  }
}
class Mb extends Xu.Component {
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
    if (typeof p != "string" || (m = bg(p, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const E = Lz(m);
    if (!E) {
      (!this._loading || this._loading.name !== p) && (this._abortLoading(), this._icon = "", this._setData(null), E !== null && (this._loading = {
        name: p,
        abort: hA([m], this._checkIcon.bind(this, !1))
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
      return u.children ? u.children : Xu.createElement("span", {});
    let p = u;
    return c.classes && (p = {
      ...u,
      className: (typeof u.className == "string" ? u.className + " " : "") + c.classes.join(" ")
    }), DA({
      ...n_,
      ...c.data
    }, p, u._inline, u._ref);
  }
}
const kA = Xu.forwardRef(function(u, c) {
  const p = {
    ...u,
    _ref: c,
    _inline: !1
  };
  return Xu.createElement(Mb, p);
});
Xu.forwardRef(function(u, c) {
  const p = {
    ...u,
    _ref: c,
    _inline: !0
  };
  return Xu.createElement(Mb, p);
});
var vr = kA;
const MA = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
  const u = Math.random() * 16 | 0;
  return (i === "x" ? u : u & 3 | 8).toString(16);
}), OA = ({
  onChange: i,
  defaultValue: u,
  children: c,
  name: p,
  invalidText: m,
  placeholder: E,
  variant: g,
  icon: R,
  required: b = !0,
  className: D = "",
  type: z = "text",
  id: U = MA(),
  ...A
}) => /* @__PURE__ */ F.jsxs("div", { className: `textfield ${g ? "bg-" + g : ""} ${D}`, children: [
  /* @__PURE__ */ F.jsx("label", { htmlFor: U, children: E ?? p ?? U }),
  /* @__PURE__ */ F.jsx(
    "input",
    {
      id: U,
      type: z,
      className: "input",
      name: p ?? U,
      onChange: i,
      defaultValue: u,
      placeholder: E ?? p ?? U ?? "",
      required: b,
      ...A
    }
  ),
  R && /* @__PURE__ */ F.jsx(vr, { icon: R }),
  b && /* @__PURE__ */ F.jsx("span", { className: "required", children: m ?? p ? `${p ?? U} should not be empty!` : "Should not be empty!" }),
  c && c
] }), Rj = ({
  defaultShow: i = !1,
  ...u
}) => {
  const [c, p] = Dr(i);
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsx(
    OA,
    {
      ...u,
      className: "textfield-password",
      type: c ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ F.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => p((m) => !m),
          children: /* @__PURE__ */ F.jsx(vr, { icon: c ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, NA = (i) => {
  console.log(i);
}, LA = (i) => {
  console.log(i);
}, UA = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], zA = ({
  defaultSelected: i,
  startDateRef: u,
  endDateRef: c,
  onClose: p
}) => {
  const [m, E] = Dr(
    (i == null ? void 0 : i.end) === void 0 ? se() : i.end
  ), [g, R] = Dr(
    i === void 0 ? {
      start: null,
      end: null
    } : i
  ), b = m, D = b.clone().startOf("month"), z = b.clone().endOf("month"), U = [], A = D.day(), Q = z.day();
  for (let V = A - 1; V >= 0; V--)
    U.push(D.clone().subtract(V, "days"));
  for (let V = D.clone().add(1, "day"); V.isSameOrBefore(z); V.add(1, "day"))
    U.push(V.clone());
  for (let V = 1; V <= 6 - Q + 1; V++)
    U.push(z.clone().add(V, "days"));
  return /* @__PURE__ */ F.jsx("div", { className: "dropdown", children: /* @__PURE__ */ F.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ F.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              E(
                (V) => V.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ F.jsx(vr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ F.jsx("button", { type: "button", className: "btn", children: b.format("MMM, YYYY") }),
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              E(
                (V) => V.clone().add(1, "month")
              );
            },
            disabled: m.clone().add(1, "month").isSameOrAfter(se()),
            children: /* @__PURE__ */ F.jsx(vr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ F.jsx("ul", { className: "date-weekdays", children: UA.map((V) => /* @__PURE__ */ F.jsx("li", { children: /* @__PURE__ */ F.jsx("span", { children: V }) }, V)) })
    ] }),
    /* @__PURE__ */ F.jsx("ul", { className: "days-container", children: U.map((V, te) => {
      var me, fe, ee;
      let Ee = "";
      const Me = (me = g.start) != null && me.startOf("day").isSame(V) ? "selected start" : (ee = (fe = g.end) == null ? void 0 : fe.startOf("day")) != null && ee.isSame(V) ? "selected end" : "", le = V.format("MM") !== b.format("MM") ? "not-current" : "", ne = V.isBetween(
        g.start,
        g.end
      ) ? "between" : "";
      return Ee += le + Me + ne, /* @__PURE__ */ F.jsx("li", { children: /* @__PURE__ */ F.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var ue;
            if (!(u.current === null || c.current === null)) {
              if (((ue = g.start) == null ? void 0 : ue.date()) === V.date()) {
                R({
                  start: null,
                  end: null
                }), u.current.value = "", c.current.value = "";
                return;
              }
              if (g.start === null)
                R((We) => ({
                  ...We,
                  start: V
                })), u.current.value = V.format("YYYY-MM-DD");
              else if (g.start !== null) {
                if (V.isBefore(g.start)) {
                  R((We) => ({
                    start: V,
                    end: We.start
                  })), u.current.value = V.format("YYYY-MM-DD"), c.current.value = g.start.format("YYYY-MM-DD");
                  return;
                }
                R((We) => ({
                  ...We,
                  end: V
                })), c.current.value = V.format("YYYY-MM-DD");
              }
            }
          },
          className: Ee,
          disabled: V.isAfter(se()),
          children: V.format("DD")
        }
      ) }, te);
    }) }),
    /* @__PURE__ */ F.jsx(
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
}, Dj = ({
  defaultSelected: i,
  onSearch: u,
  children: c
}) => {
  const [p, m] = Dr(!1), E = tr(null), g = tr(null), R = {
    ref: E,
    type: "date",
    onFocus: NA,
    onClick: () => {
      m((D) => !D);
    },
    autoComplete: "off",
    defaultValue: i ? i.start.format("YYYY-MM-DD") : ""
  }, b = {
    ref: g,
    type: "date",
    onFocus: LA,
    onClick: () => {
      m((D) => !D);
    },
    autoComplete: "off",
    defaultValue: i != null && i.end ? i.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsxs(
    "form",
    {
      className: "date-range-picker",
      onSubmit: (D) => {
        D.preventDefault();
        const z = new FormData(D.target), U = Object.fromEntries(
          z.entries()
        );
        u == null || u(U);
      },
      children: [
        /* @__PURE__ */ F.jsxs("div", { className: "group rounded-box", children: [
          c({ startDateProps: R, endDateProps: b }),
          /* @__PURE__ */ F.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        p && /* @__PURE__ */ F.jsx(
          zA,
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
}, AA = (i, u, c, p, m, E) => {
  let g = 0, R = !1;
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
      p.current = p.current.slice(0, -1), p.current.length > 0 && (R = !0);
      break;
    }
    default:
      i.key.length === 1 && isNaN(Number(i.key)) && (p.current += i.key, R = !0);
  }
  if (R) {
    const b = m.current.findIndex(
      (D) => D.innerText.toLowerCase().includes(p.current.toLowerCase())
    );
    if (b === -1)
      return;
    m.current[b].focus(), c(b);
  }
}, jA = (i) => typeof i == "object" ? /* @__PURE__ */ F.jsx("span", { children: "Object.values(value)[0]" }) : /* @__PURE__ */ F.jsx("span", { children: "value" }), Dg = ({
  items: i,
  currentSelected: u,
  selector: c,
  onChange: p,
  labelExtractor: m,
  required: E = !0,
  showQty: g = 4,
  style: R = {},
  name: b = "",
  position: D = "top",
  variant: z = "neutral",
  keyExtractor: U = jA
}) => {
  const [A, Q] = Dr(!1), [V, te] = Dr(
    i.findIndex(
      (fe) => c ? fe[c] === (u == null ? void 0 : u[c]) : fe === u
    )
  ), [Ee, Me] = Dr(V), le = tr(null), ne = tr(""), me = tr([]);
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: `select ${A ? "shadow-md" : ""} ${D}`,
      onBlur: () => {
      },
      style: R,
      children: [
        /* @__PURE__ */ F.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${z} btn-select ${A ? "active" : ""}`,
            onClick: () => {
              Q((ee) => !ee);
              const fe = u === void 0 ? 0 : V;
              Me(fe), setTimeout(() => {
                A || me.current[fe].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ F.jsx("span", { className: V === -1 ? "not-selected" : "", children: V === -1 ? "Select one of the options" : (m == null ? void 0 : m(i[V])) ?? U(i[V]) }),
              /* @__PURE__ */ F.jsx(vr, { icon: "eva:arrow-down-fill", vFlip: A })
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
            ref: le,
            required: E
          }
        ),
        A && /* @__PURE__ */ F.jsx(
          "ul",
          {
            className: `select-items${i.length > 4 ? " custom-scroll " : " "}bg-${z} shadow-md`,
            style: { "--select-items": g },
            children: i.map((fe, ee) => /* @__PURE__ */ F.jsx("li", { className: "item", children: /* @__PURE__ */ F.jsx(
              "button",
              {
                type: "button",
                className: `${ee === V ? "active" : ""}`,
                ref: (ue) => me.current[ee] = ue,
                tabIndex: 0,
                onClick: () => {
                  te(ee), p !== void 0 && p(ee, i[ee]), le.current && c && (le.current.value = String(i[ee][c])), Q(!1);
                },
                onMouseEnter: (ue) => {
                  Me(ee), ue.target.focus();
                },
                onMouseLeave: () => {
                  Me(V);
                },
                onKeyDown: (ue) => AA(
                  ue,
                  Ee,
                  Me,
                  ne,
                  me,
                  i.length
                ),
                children: U(fe)
              }
            ) }, ee))
          }
        )
      ]
    }
  );
}, FA = [
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
se.defineLocale("pt-br", {
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
se.locale("pt-br");
const HA = {
  206: "Almoço",
  205: "Banheiro"
}, YA = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], PA = ({
  data: i,
  lastSevenDays: u
}) => /* @__PURE__ */ F.jsx("div", { className: "detailed-workday--period", children: u.map((c, p) => {
  const m = se(c).format("DD [de] MMMM"), E = i.find(
    ({ date: b }) => se(b).format("YYYY/MM/DD") === c.format("YYYY/MM/DD")
  );
  if (E === void 0)
    return /* @__PURE__ */ F.jsx("div", { className: "day", children: /* @__PURE__ */ F.jsx("span", { children: m }) }, p);
  const g = se.utc(E.start).format("HH[h]mm"), R = se.utc(E.finish).format("HH[h]mm");
  return /* @__PURE__ */ F.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ F.jsx("span", { children: m }),
    /* @__PURE__ */ F.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ F.jsxs("span", { className: "service-time", children: [
      g,
      " - ",
      R
    ] }),
    /* @__PURE__ */ F.jsxs("span", { className: "description", children: [
      E.description,
      "*"
    ] }),
    /* @__PURE__ */ F.jsx("div", { className: "breaks", children: E.breaks.map((b, D) => {
      const z = se.utc(b.start).format("HH[h]mm"), U = se.utc(b.finish).format("HH[h]mm");
      return /* @__PURE__ */ F.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ F.jsx("span", { className: "break-item--label", children: HA[String(b.type)] }),
        /* @__PURE__ */ F.jsxs("span", { className: "break-item--content", children: [
          z,
          " - ",
          U
        ] })
      ] }, D);
    }) })
  ] }, p);
}) }), kj = () => {
  const i = Array.from({ length: 7 }).map(
    (u, c) => se().clone().subtract(7 - c, "days")
  );
  return /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ F.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ F.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ F.jsx(Dg, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ F.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ F.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ F.jsx("div", { className: "weekdays", children: i.map((u) => {
          const c = se(u).day();
          return /* @__PURE__ */ F.jsx("span", { className: "", children: YA[c] });
        }) })
      ] }),
      FA.map((u, c) => /* @__PURE__ */ F.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ F.jsx("span", { children: u.agent.firstName }),
        /* @__PURE__ */ F.jsx(
          PA,
          {
            data: u.period,
            lastSevenDays: i
          },
          c
        )
      ] }, c))
    ] })
  ] });
}, VA = ({ logo: i, items: u }) => /* @__PURE__ */ F.jsxs("header", { className: "header", children: [
  i,
  u
] }), IA = (i, u) => {
  var m, E, g, R;
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
      const b = (R = (g = p[u.current]) == null ? void 0 : g.firstChild) == null ? void 0 : R.firstChild;
      b !== null && b.focus();
      break;
    }
    case " ": {
      const b = i.target;
      b instanceof HTMLAnchorElement && b.click();
    }
  }
}, ux = (i, u, c, p, m, E = 0, g) => {
  i.current === null || u.current === null || (p.route === c && i.current.classList.add("active"), i.current.classList.contains("active") && p.route !== c && i.current.classList.remove("active"), g || (u.current.innerHTML = `
    <div className="sidebar-tooltip-container">
      <span>${p.label}</span>
    </div>
    `, u.current.style.opacity = "1", u.current.style.top = `calc(48px * ${m + E})`), i.current.style.top = `calc(48px * ${m + E})`);
}, BA = (i, u, c, p, m, E) => {
  var g;
  {
    if (i.current === null || u.current === null)
      return;
    let R = -1;
    p || (u.current.innerHTML = "", u.current.style.opacity = "0"), m.forEach((b, D) => {
      b.route === c && (R = D), Object.hasOwnProperty.call(b, "submenus") && b.submenus.forEach((z, U) => {
        z.route === c && (E === D ? R = D + U + 1 : R = D);
      });
    }), (g = document.activeElement) == null || g.blur(), R > -1 && (i.current.style.top = `calc(48px * ${R})`, i.current.classList.add("active"));
  }
}, WA = ({ data: i, itemLink: u, onLogout: c }) => {
  const p = "/scales", m = tr(null), E = tr(null), g = tr(null), R = tr(3), [b, D] = Dr(!1), [z, U] = Dr(null);
  return /* @__PURE__ */ F.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: m,
      onKeyDown: (A) => IA(A, R),
      children: [
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              m.current !== null && (D((A) => !A), m.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ F.jsx(vr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ F.jsxs(
          "ul",
          {
            className: "sidebar-container",
            onMouseLeave: () => BA(
              E,
              g,
              p,
              b,
              i,
              z
            ),
            children: [
              /* @__PURE__ */ F.jsx("span", { ref: E, className: "sidebar-selector" }),
              /* @__PURE__ */ F.jsx("div", { ref: g, className: "sidebar-tooltip" }),
              i.map((A, Q) => /* @__PURE__ */ F.jsxs(_N, { children: [
                /* @__PURE__ */ F.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => ux(
                      E,
                      g,
                      p,
                      A,
                      z !== null && Q > z ? Q + i[z].submenus.length : Q,
                      0,
                      b
                    ),
                    onClick: () => {
                      A != null && A.submenus && U(
                        (V) => V === Q ? null : Q
                      );
                    },
                    children: [
                      /* @__PURE__ */ F.jsx("div", { className: "sidebar-item--icon", children: u({
                        icon: A.icon,
                        label: A.label,
                        route: A.route,
                        isOpen: b,
                        props: {
                          className: A != null && A.submenus ? "group" : "",
                          onClick: () => {
                            R.current = Q + 2;
                          }
                        }
                      }) }),
                      (A == null ? void 0 : A.submenus) && /* @__PURE__ */ F.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        b && /* @__PURE__ */ F.jsx("span", { className: "sidebar-item--indicator", children: A.submenus.length }),
                        /* @__PURE__ */ F.jsx(
                          vr,
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
                (A == null ? void 0 : A.submenus) && Q === z && /* @__PURE__ */ F.jsx("div", { className: "sidebar-submenu", children: A.submenus.map((V, te) => /* @__PURE__ */ F.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => ux(
                      E,
                      g,
                      p,
                      V,
                      Q,
                      te + 1,
                      b
                    ),
                    children: u({
                      icon: V.icon,
                      label: V.label,
                      route: `${A.route}${V.route}`,
                      isOpen: b,
                      props: { className: "" }
                    })
                  },
                  V.route
                )) })
              ] }, Q))
            ]
          }
        ),
        /* @__PURE__ */ F.jsxs("button", { type: "button", className: "sidebar-settings-action ring-info", onClick: c, children: [
          /* @__PURE__ */ F.jsx(vr, { icon: "ph:gear-six-fill", height: 16 }),
          b && /* @__PURE__ */ F.jsx("span", { children: "Settings" })
        ] }),
        /* @__PURE__ */ F.jsxs("button", { type: "button", className: "sidebar-exit-action ring-warning", onClick: c, children: [
          /* @__PURE__ */ F.jsx(vr, { icon: "mingcute:exit-fill", height: 16 }),
          b && /* @__PURE__ */ F.jsx("span", { children: "Logout" })
        ] })
      ]
    }
  );
}, $A = [
  {
    label: "Home",
    route: "/home",
    icon: "fluent:home-20-filled"
  },
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: "ic:round-dashboard"
  },
  {
    label: "Staffing",
    route: "/staffing",
    icon: "bi:people-fill",
    submenus: [
      {
        label: "Workgroups",
        route: "/workgroups",
        icon: "typcn:group"
      },
      {
        label: "Scales",
        route: "/scales",
        icon: "majesticons:clock"
      }
    ]
  },
  {
    label: "Forcast",
    route: "/forcast",
    icon: "ic:outline-preview"
  }
], GA = {
  pt: "twemoji:flag-brazil",
  en: "emojione-v1:flag-for-united-states",
  es: "twemoji:flag-spain"
}, QA = () => /* @__PURE__ */ F.jsx("div", { className: "container row", children: /* @__PURE__ */ F.jsx(
  Dg,
  {
    style: { width: "18ch" },
    items: [
      {
        label: "Portuguese",
        id: "pt"
      },
      {
        label: "English",
        id: "en"
      },
      {
        label: "Spanish",
        id: "es"
      }
    ],
    keyExtractor: (i) => /* @__PURE__ */ F.jsxs("div", { className: "container row", children: [
      /* @__PURE__ */ F.jsx(vr, { icon: GA[i.id] }),
      /* @__PURE__ */ F.jsx("span", { children: i.label })
    ] })
  }
) }), Mj = ({ children: i }) => /* @__PURE__ */ F.jsxs("div", { className: "container no-gap bg-base-200", children: [
  /* @__PURE__ */ F.jsx(
    VA,
    {
      logo: /* @__PURE__ */ F.jsx("h2", { children: /* @__PURE__ */ F.jsx("a", { href: "#/home", children: "Intelligence" }) }),
      items: /* @__PURE__ */ F.jsx(QA, {})
    }
  ),
  /* @__PURE__ */ F.jsxs("div", { className: "container no-gap row", style: { flex: 1 }, children: [
    /* @__PURE__ */ F.jsx(
      WA,
      {
        data: $A,
        itemLink: ({ icon: u, label: c, isOpen: p, route: m, props: E }) => /* @__PURE__ */ F.jsxs("a", { href: `#${m}`, ...E, children: [
          /* @__PURE__ */ F.jsx(vr, { icon: u }),
          p && /* @__PURE__ */ F.jsx("span", { children: c })
        ] }, m)
      }
    ),
    /* @__PURE__ */ F.jsx("div", { className: "main custom-scroll", children: i })
  ] })
] });
var UE = { exports: {} }, za = {}, Jy = { exports: {} }, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sx;
function qA() {
  return sx || (sx = 1, function(i) {
    function u(ce, je) {
      var _e = ce.length;
      ce.push(je);
      e:
        for (; 0 < _e; ) {
          var gt = _e - 1 >>> 1, Ct = ce[gt];
          if (0 < m(Ct, je))
            ce[gt] = je, ce[_e] = Ct, _e = gt;
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
      var je = ce[0], _e = ce.pop();
      if (_e !== je) {
        ce[0] = _e;
        e:
          for (var gt = 0, Ct = ce.length, Vn = Ct >>> 1; gt < Vn; ) {
            var mr = 2 * (gt + 1) - 1, ni = ce[mr], wn = mr + 1, da = ce[wn];
            if (0 > m(ni, _e))
              wn < Ct && 0 > m(da, ni) ? (ce[gt] = da, ce[wn] = _e, gt = wn) : (ce[gt] = ni, ce[mr] = _e, gt = mr);
            else if (wn < Ct && 0 > m(da, _e))
              ce[gt] = da, ce[wn] = _e, gt = wn;
            else
              break e;
          }
      }
      return je;
    }
    function m(ce, je) {
      var _e = ce.sortIndex - je.sortIndex;
      return _e !== 0 ? _e : ce.id - je.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      i.unstable_now = function() {
        return E.now();
      };
    } else {
      var g = Date, R = g.now();
      i.unstable_now = function() {
        return g.now() - R;
      };
    }
    var b = [], D = [], z = 1, U = null, A = 3, Q = !1, V = !1, te = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(ce) {
      for (var je = c(D); je !== null; ) {
        if (je.callback === null)
          p(D);
        else if (je.startTime <= ce)
          p(D), je.sortIndex = je.expirationTime, u(b, je);
        else
          break;
        je = c(D);
      }
    }
    function me(ce) {
      if (te = !1, ne(ce), !V)
        if (c(b) !== null)
          V = !0, kt(fe);
        else {
          var je = c(D);
          je !== null && _n(me, je.startTime - ce);
        }
    }
    function fe(ce, je) {
      V = !1, te && (te = !1, Me(We), We = -1), Q = !0;
      var _e = A;
      try {
        for (ne(je), U = c(b); U !== null && (!(U.expirationTime > je) || ce && !dt()); ) {
          var gt = U.callback;
          if (typeof gt == "function") {
            U.callback = null, A = U.priorityLevel;
            var Ct = gt(U.expirationTime <= je);
            je = i.unstable_now(), typeof Ct == "function" ? U.callback = Ct : U === c(b) && p(b), ne(je);
          } else
            p(b);
          U = c(b);
        }
        if (U !== null)
          var Vn = !0;
        else {
          var mr = c(D);
          mr !== null && _n(me, mr.startTime - je), Vn = !1;
        }
        return Vn;
      } finally {
        U = null, A = _e, Q = !1;
      }
    }
    var ee = !1, ue = null, We = -1, et = 5, nt = -1;
    function dt() {
      return !(i.unstable_now() - nt < et);
    }
    function Nt() {
      if (ue !== null) {
        var ce = i.unstable_now();
        nt = ce;
        var je = !0;
        try {
          je = ue(!0, ce);
        } finally {
          je ? Pe() : (ee = !1, ue = null);
        }
      } else
        ee = !1;
    }
    var Pe;
    if (typeof le == "function")
      Pe = function() {
        le(Nt);
      };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), hn = at.port2;
      at.port1.onmessage = Nt, Pe = function() {
        hn.postMessage(null);
      };
    } else
      Pe = function() {
        Ee(Nt, 0);
      };
    function kt(ce) {
      ue = ce, ee || (ee = !0, Pe());
    }
    function _n(ce, je) {
      We = Ee(function() {
        ce(i.unstable_now());
      }, je);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, i.unstable_continueExecution = function() {
      V || Q || (V = !0, kt(fe));
    }, i.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : et = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, i.unstable_getFirstCallbackNode = function() {
      return c(b);
    }, i.unstable_next = function(ce) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var je = 3;
          break;
        default:
          je = A;
      }
      var _e = A;
      A = je;
      try {
        return ce();
      } finally {
        A = _e;
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
      var _e = A;
      A = ce;
      try {
        return je();
      } finally {
        A = _e;
      }
    }, i.unstable_scheduleCallback = function(ce, je, _e) {
      var gt = i.unstable_now();
      switch (typeof _e == "object" && _e !== null ? (_e = _e.delay, _e = typeof _e == "number" && 0 < _e ? gt + _e : gt) : _e = gt, ce) {
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
      return Ct = _e + Ct, ce = { id: z++, callback: je, priorityLevel: ce, startTime: _e, expirationTime: Ct, sortIndex: -1 }, _e > gt ? (ce.sortIndex = _e, u(D, ce), c(b) === null && ce === c(D) && (te ? (Me(We), We = -1) : te = !0, _n(me, _e - gt))) : (ce.sortIndex = Ct, u(b, ce), V || Q || (V = !0, kt(fe))), ce;
    }, i.unstable_shouldYield = dt, i.unstable_wrapCallback = function(ce) {
      var je = A;
      return function() {
        var _e = A;
        A = je;
        try {
          return ce.apply(this, arguments);
        } finally {
          A = _e;
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
var cx;
function ZA() {
  return cx || (cx = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, c = !1, p = 5;
      function m(he, Ue) {
        var it = he.length;
        he.push(Ue), R(he, Ue, it);
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
      function R(he, Ue, it) {
        for (var Mt = it; Mt > 0; ) {
          var Xt = Mt - 1 >>> 1, Nn = he[Xt];
          if (D(Nn, Ue) > 0)
            he[Xt] = Ue, he[Mt] = Nn, Mt = Xt;
          else
            return;
        }
      }
      function b(he, Ue, it) {
        for (var Mt = it, Xt = he.length, Nn = Xt >>> 1; Mt < Nn; ) {
          var cn = (Mt + 1) * 2 - 1, Or = he[cn], Yt = cn + 1, Xr = he[Yt];
          if (D(Or, Ue) < 0)
            Yt < Xt && D(Xr, Or) < 0 ? (he[Mt] = Xr, he[Yt] = Ue, Mt = Yt) : (he[Mt] = Or, he[cn] = Ue, Mt = cn);
          else if (Yt < Xt && D(Xr, Ue) < 0)
            he[Mt] = Xr, he[Yt] = Ue, Mt = Yt;
          else
            return;
        }
      }
      function D(he, Ue) {
        var it = he.sortIndex - Ue.sortIndex;
        return it !== 0 ? it : he.id - Ue.id;
      }
      var z = 1, U = 2, A = 3, Q = 4, V = 5;
      function te(he, Ue) {
      }
      var Ee = typeof performance == "object" && typeof performance.now == "function";
      if (Ee) {
        var Me = performance;
        i.unstable_now = function() {
          return Me.now();
        };
      } else {
        var le = Date, ne = le.now();
        i.unstable_now = function() {
          return le.now() - ne;
        };
      }
      var me = 1073741823, fe = -1, ee = 250, ue = 5e3, We = 1e4, et = me, nt = [], dt = [], Nt = 1, Pe = null, at = A, hn = !1, kt = !1, _n = !1, ce = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function gt(he) {
        for (var Ue = E(dt); Ue !== null; ) {
          if (Ue.callback === null)
            g(dt);
          else if (Ue.startTime <= he)
            g(dt), Ue.sortIndex = Ue.expirationTime, m(nt, Ue);
          else
            return;
          Ue = E(dt);
        }
      }
      function Ct(he) {
        if (_n = !1, gt(he), !kt)
          if (E(nt) !== null)
            kt = !0, Ya(Vn);
          else {
            var Ue = E(dt);
            Ue !== null && vn(Ct, Ue.startTime - he);
          }
      }
      function Vn(he, Ue) {
        kt = !1, _n && (_n = !1, Kr()), hn = !0;
        var it = at;
        try {
          var Mt;
          if (!c)
            return mr(he, Ue);
        } finally {
          Pe = null, at = it, hn = !1;
        }
      }
      function mr(he, Ue) {
        var it = Ue;
        for (gt(it), Pe = E(nt); Pe !== null && !u && !(Pe.expirationTime > it && (!he || Fa())); ) {
          var Mt = Pe.callback;
          if (typeof Mt == "function") {
            Pe.callback = null, at = Pe.priorityLevel;
            var Xt = Pe.expirationTime <= it, Nn = Mt(Xt);
            it = i.unstable_now(), typeof Nn == "function" ? Pe.callback = Nn : Pe === E(nt) && g(nt), gt(it);
          } else
            g(nt);
          Pe = E(nt);
        }
        if (Pe !== null)
          return !0;
        var cn = E(dt);
        return cn !== null && vn(Ct, cn.startTime - it), !1;
      }
      function ni(he, Ue) {
        switch (he) {
          case z:
          case U:
          case A:
          case Q:
          case V:
            break;
          default:
            he = A;
        }
        var it = at;
        at = he;
        try {
          return Ue();
        } finally {
          at = it;
        }
      }
      function wn(he) {
        var Ue;
        switch (at) {
          case z:
          case U:
          case A:
            Ue = A;
            break;
          default:
            Ue = at;
            break;
        }
        var it = at;
        at = Ue;
        try {
          return he();
        } finally {
          at = it;
        }
      }
      function da(he) {
        var Ue = at;
        return function() {
          var it = at;
          at = Ue;
          try {
            return he.apply(this, arguments);
          } finally {
            at = it;
          }
        };
      }
      function rr(he, Ue, it) {
        var Mt = i.unstable_now(), Xt;
        if (typeof it == "object" && it !== null) {
          var Nn = it.delay;
          typeof Nn == "number" && Nn > 0 ? Xt = Mt + Nn : Xt = Mt;
        } else
          Xt = Mt;
        var cn;
        switch (he) {
          case z:
            cn = fe;
            break;
          case U:
            cn = ee;
            break;
          case V:
            cn = et;
            break;
          case Q:
            cn = We;
            break;
          case A:
          default:
            cn = ue;
            break;
        }
        var Or = Xt + cn, Yt = {
          id: Nt++,
          callback: Ue,
          priorityLevel: he,
          startTime: Xt,
          expirationTime: Or,
          sortIndex: -1
        };
        return Xt > Mt ? (Yt.sortIndex = Xt, m(dt, Yt), E(nt) === null && Yt === E(dt) && (_n ? Kr() : _n = !0, vn(Ct, Xt - Mt))) : (Yt.sortIndex = Or, m(nt, Yt), !kt && !hn && (kt = !0, Ya(Vn))), Yt;
      }
      function kr() {
      }
      function ri() {
        !kt && !hn && (kt = !0, Ya(Vn));
      }
      function Mr() {
        return E(nt);
      }
      function pa(he) {
        he.callback = null;
      }
      function On() {
        return at;
      }
      var ar = !1, In = null, ir = -1, lr = p, ha = -1;
      function Fa() {
        var he = i.unstable_now() - ha;
        return !(he < lr);
      }
      function Ti() {
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
      if (typeof _e == "function")
        qr = function() {
          _e(Ha);
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
      var rl = Ti, Pa = null;
      i.unstable_IdlePriority = V, i.unstable_ImmediatePriority = z, i.unstable_LowPriority = Q, i.unstable_NormalPriority = A, i.unstable_Profiling = Pa, i.unstable_UserBlockingPriority = U, i.unstable_cancelCallback = pa, i.unstable_continueExecution = ri, i.unstable_forceFrameRate = ai, i.unstable_getCurrentPriorityLevel = On, i.unstable_getFirstCallbackNode = Mr, i.unstable_next = wn, i.unstable_pauseExecution = kr, i.unstable_requestPaint = rl, i.unstable_runWithPriority = ni, i.unstable_scheduleCallback = rr, i.unstable_shouldYield = Fa, i.unstable_wrapCallback = da, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(hE)), hE;
}
var fx;
function Ob() {
  return fx || (fx = 1, process.env.NODE_ENV === "production" ? Jy.exports = qA() : Jy.exports = ZA()), Jy.exports;
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
var dx;
function KA() {
  if (dx)
    return za;
  dx = 1;
  var i = Bo, u = Ob();
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
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), b = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, U = {};
  function A(n) {
    return b.call(U, n) ? !0 : b.call(z, n) ? !1 : D.test(n) ? U[n] = !0 : (z[n] = !0, !1);
  }
  function Q(n, r, o, f) {
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
  function V(n, r, o, f) {
    if (r === null || typeof r > "u" || Q(n, r, o, f))
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
  function te(n, r, o, f, h, y, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = w;
  }
  var Ee = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ee[n] = new te(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ee[r] = new te(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ee[n] = new te(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ee[n] = new te(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ee[n] = new te(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ee[n] = new te(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ee[n] = new te(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ee[n] = new te(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ee[n] = new te(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Me = /[\-:]([a-z])/g;
  function le(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Me,
      le
    );
    Ee[r] = new te(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Me, le);
    Ee[r] = new te(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Me, le);
    Ee[r] = new te(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ee[n] = new te(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ee.xlinkHref = new te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ee[n] = new te(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ne(n, r, o, f) {
    var h = Ee.hasOwnProperty(r) ? Ee[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (V(r, o, h, f) && (o = null), f || h === null ? A(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, f = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, f ? n.setAttributeNS(f, r, o) : n.setAttribute(r, o))));
  }
  var me = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = Symbol.for("react.element"), ee = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), dt = Symbol.for("react.context"), Nt = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), _n = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function je(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _e = Object.assign, gt;
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
  function mr(n, r) {
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
        for (var h = W.stack.split(`
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
        return n = mr(n.type, !1), n;
      case 11:
        return n = mr(n.type.render, !1), n;
      case 1:
        return n = mr(n.type, !0), n;
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
      case ue:
        return "Fragment";
      case ee:
        return "Portal";
      case et:
        return "Profiler";
      case We:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case dt:
          return (n.displayName || "Context") + ".Consumer";
        case nt:
          return (n._context.displayName || "Context") + ".Provider";
        case Nt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case hn:
          return r = n.displayName || null, r !== null ? r : wn(n.type) || "Memo";
        case kt:
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
        return r === We ? "StrictMode" : "Mode";
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
    return _e({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function In(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    o = rr(r.value != null ? r.value : o), n._wrapperState = { initialChecked: f, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ir(n, r) {
    r = r.checked, r != null && ne(n, "checked", r, !1);
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
  var Ti = Array.isArray;
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
    return _e({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(c(92));
        if (Ti(o)) {
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
  var Kr, rl = function(n) {
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
  function Mt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var f = o.indexOf("--") === 0, h = it(o, r[o], f);
        o === "float" && (o = "cssFloat"), f ? n.setProperty(o, h) : n[o] = h;
      }
  }
  var Xt = _e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nn(n, r) {
    if (r) {
      if (Xt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
  function cn(n, r) {
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
  function Go(n) {
    if (n = _s(n)) {
      if (typeof Xr != "function")
        throw Error(c(280));
      var r = n.stateNode;
      r && (r = ze(r), Xr(n.stateNode, n.type, r));
    }
  }
  function Wl(n) {
    At ? Pt ? Pt.push(n) : Pt = [n] : At = n;
  }
  function Qo() {
    if (At) {
      var n = At, r = Pt;
      if (Pt = At = null, Go(n), r)
        for (n = 0; n < r.length; n++)
          Go(r[n]);
    }
  }
  function Ju(n, r) {
    return n(r);
  }
  function hc() {
  }
  var $l = !1;
  function qo(n, r, o) {
    if ($l)
      return n(r, o);
    $l = !0;
    try {
      return Ju(n, r, o);
    } finally {
      $l = !1, (At !== null || Pt !== null) && (hc(), Qo());
    }
  }
  function Gl(n, r) {
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
  var Zo = !1;
  if (R)
    try {
      var li = {};
      Object.defineProperty(li, "passive", { get: function() {
        Zo = !0;
      } }), window.addEventListener("test", li, li), window.removeEventListener("test", li, li);
    } catch {
      Zo = !1;
    }
  function al(n, r, o, f, h, y, w, x, M) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, W);
    } catch (X) {
      this.onError(X);
    }
  }
  var Jr = !1, Va = null, il = !1, k = null, J = { onError: function(n) {
    Jr = !0, Va = n;
  } };
  function ve(n, r, o, f, h, y, w, x, M) {
    Jr = !1, Va = null, al.apply(J, arguments);
  }
  function Fe(n, r, o, f, h, y, w, x, M) {
    if (ve.apply(this, arguments), Jr) {
      if (Jr) {
        var W = Va;
        Jr = !1, Va = null;
      } else
        throw Error(c(198));
      il || (il = !0, k = W);
    }
  }
  function tt(n) {
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
    if (tt(n) !== n)
      throw Error(c(188));
  }
  function Ve(n) {
    var r = n.alternate;
    if (!r) {
      if (r = tt(n), r === null)
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
    return n = Ve(n), n !== null ? Qt(n) : null;
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
  var qt = u.unstable_scheduleCallback, yr = u.unstable_cancelCallback, ll = u.unstable_shouldYield, vc = u.unstable_requestPaint, St = u.unstable_now, kg = u.unstable_getCurrentPriorityLevel, xi = u.unstable_ImmediatePriority, ut = u.unstable_UserBlockingPriority, ol = u.unstable_NormalPriority, Kh = u.unstable_LowPriority, yd = u.unstable_IdlePriority, es = null, Ia = null;
  function Xh(n) {
    if (Ia && typeof Ia.onCommitFiberRoot == "function")
      try {
        Ia.onCommitFiberRoot(es, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var va = Math.clz32 ? Math.clz32 : Mg, Jh = Math.log, ev = Math.LN2;
  function Mg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Jh(n) / ev | 0) | 0;
  }
  var mc = 64, Ko = 4194304;
  function Ql(n) {
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
      x !== 0 ? f = Ql(x) : (y &= w, y !== 0 && (f = Ql(y)));
    } else
      w = o & ~h, w !== 0 ? f = Ql(w) : y !== 0 && (f = Ql(y));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & h) && (h = f & -f, y = r & -r, h >= y || h === 16 && (y & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        o = 31 - va(r), h = 1 << o, f |= n[o], r &= ~h;
    return f;
  }
  function gd(n, r) {
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
  function yc(n, r) {
    for (var o = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var w = 31 - va(y), x = 1 << w, M = h[w];
      M === -1 ? (!(x & o) || x & f) && (h[w] = gd(x, r)) : M <= r && (n.expiredLanes |= x), y &= ~x;
    }
  }
  function Sd(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function gc() {
    var n = mc;
    return mc <<= 1, !(mc & 4194240) && (mc = 64), n;
  }
  function Ed(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function ql(n, r, o) {
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
  function ts(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var f = 31 - va(o), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), o &= ~h;
    }
  }
  var Ot = 0;
  function _d(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var tv, Sc, jt, nv, wd, Ke = !1, ns = [], mn = null, ma = null, ya = null, rs = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Lt = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        rs.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function or(n, r, o, f, h, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: f, nativeEvent: y, targetContainers: [h] }, r !== null && (r = _s(r), r !== null && Sc(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function ul(n, r, o, f, h) {
    switch (r) {
      case "focusin":
        return mn = or(mn, n, r, o, f, h), !0;
      case "dragenter":
        return ma = or(ma, n, r, o, f, h), !0;
      case "mouseover":
        return ya = or(ya, n, r, o, f, h), !0;
      case "pointerover":
        var y = h.pointerId;
        return rs.set(y, or(rs.get(y) || null, n, r, o, f, h)), !0;
      case "gotpointercapture":
        return y = h.pointerId, Cn.set(y, or(Cn.get(y) || null, n, r, o, f, h)), !0;
    }
    return !1;
  }
  function rv(n) {
    var r = Sa(n.target);
    if (r !== null) {
      var o = tt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = mt(o), r !== null) {
            n.blockedOn = r, wd(n.priority, function() {
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
  function Xo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = wc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var f = new o.constructor(o.type, o);
        Or = f, o.target.dispatchEvent(f), Or = null;
      } else
        return r = _s(o), r !== null && Sc(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Cd(n, r, o) {
    Xo(n) && o.delete(r);
  }
  function av() {
    Ke = !1, mn !== null && Xo(mn) && (mn = null), ma !== null && Xo(ma) && (ma = null), ya !== null && Xo(ya) && (ya = null), rs.forEach(Cd), Cn.forEach(Cd);
  }
  function as(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ke || (Ke = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, av)));
  }
  function is(n) {
    function r(h) {
      return as(h, n);
    }
    if (0 < ns.length) {
      as(ns[0], n);
      for (var o = 1; o < ns.length; o++) {
        var f = ns[o];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (mn !== null && as(mn, n), ma !== null && as(ma, n), ya !== null && as(ya, n), rs.forEach(r), Cn.forEach(r), o = 0; o < Lt.length; o++)
      f = Lt[o], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Lt.length && (o = Lt[0], o.blockedOn === null); )
      rv(o), o.blockedOn === null && Lt.shift();
  }
  var Jo = me.ReactCurrentBatchConfig, Zl = !0;
  function iv(n, r, o, f) {
    var h = Ot, y = Jo.transition;
    Jo.transition = null;
    try {
      Ot = 1, _c(n, r, o, f);
    } finally {
      Ot = h, Jo.transition = y;
    }
  }
  function Ec(n, r, o, f) {
    var h = Ot, y = Jo.transition;
    Jo.transition = null;
    try {
      Ot = 4, _c(n, r, o, f);
    } finally {
      Ot = h, Jo.transition = y;
    }
  }
  function _c(n, r, o, f) {
    if (Zl) {
      var h = wc(n, r, o, f);
      if (h === null)
        Uc(n, r, f, ls, o), Wa(n, f);
      else if (ul(h, n, r, o, f))
        f.stopPropagation();
      else if (Wa(n, f), r & 4 && -1 < Ng.indexOf(n)) {
        for (; h !== null; ) {
          var y = _s(h);
          if (y !== null && tv(y), y = wc(n, r, o, f), y === null && Uc(n, r, f, ls, o), y === h)
            break;
          h = y;
        }
        h !== null && f.stopPropagation();
      } else
        Uc(n, r, f, null, o);
    }
  }
  var ls = null;
  function wc(n, r, o, f) {
    if (ls = null, n = Yt(f), n = Sa(n), n !== null)
      if (r = tt(n), r === null)
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
        switch (kg()) {
          case xi:
            return 1;
          case ut:
            return 4;
          case ol:
          case Kh:
            return 16;
          case yd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bi = null, os = null, us = null;
  function xd() {
    if (us)
      return us;
    var n, r = os, o = r.length, f, h = "value" in bi ? bi.value : bi.textContent, y = h.length;
    for (n = 0; n < o && r[n] === h[n]; n++)
      ;
    var w = o - n;
    for (f = 1; f <= w && r[o - f] === h[y - f]; f++)
      ;
    return us = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function eu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ss() {
    return !0;
  }
  function lv() {
    return !1;
  }
  function ea(n) {
    function r(o, f, h, y, w) {
      this._reactName = o, this._targetInst = h, this.type = f, this.nativeEvent = y, this.target = w, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(y) : y[x]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? ss : lv, this.isPropagationStopped = lv, this;
    }
    return _e(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ss);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ss);
    }, persist: function() {
    }, isPersistent: ss }), r;
  }
  var sl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Cc = ea(sl), tu = _e({}, sl, { view: 0, detail: 0 }), ov = ea(tu), Tc, bd, cs, Un = _e({}, tu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Md, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== cs && (cs && n.type === "mousemove" ? (Tc = n.screenX - cs.screenX, bd = n.screenY - cs.screenY) : bd = Tc = 0, cs = n), Tc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : bd;
  } }), xc = ea(Un), uv = _e({}, Un, { dataTransfer: 0 }), sv = ea(uv), Lg = _e({}, tu, { relatedTarget: 0 }), cl = ea(Lg), Rd = _e({}, sl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cv = ea(Rd), Ug = _e({}, sl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), zg = ea(Ug), Ag = _e({}, sl, { data: 0 }), Dd = ea(Ag), kd = {
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
  }, fv = {
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
  }, dv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = dv[n]) ? !!r[n] : !1;
  }
  function Md() {
    return pv;
  }
  var Ri = _e({}, tu, { key: function(n) {
    if (n.key) {
      var r = kd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = eu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? fv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Md, charCode: function(n) {
    return n.type === "keypress" ? eu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? eu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), jg = ea(Ri), Od = _e({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bc = ea(Od), Nd = _e({}, tu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Md }), Fg = ea(Nd), Rc = _e({}, sl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hv = ea(Rc), Nr = _e({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Di = ea(Nr), yn = [9, 13, 27, 32], $a = R && "CompositionEvent" in window, Kl = null;
  R && "documentMode" in document && (Kl = document.documentMode);
  var Dc = R && "TextEvent" in window && !Kl, vv = R && (!$a || Kl && 8 < Kl && 11 >= Kl), nu = String.fromCharCode(32), mv = !1;
  function yv(n, r) {
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
  function kc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ru = !1;
  function Hg(n, r) {
    switch (n) {
      case "compositionend":
        return kc(r);
      case "keypress":
        return r.which !== 32 ? null : (mv = !0, nu);
      case "textInput":
        return n = r.data, n === nu && mv ? null : n;
      default:
        return null;
    }
  }
  function Yg(n, r) {
    if (ru)
      return n === "compositionend" || !$a && yv(n, r) ? (n = xd(), us = os = bi = null, ru = !1, n) : null;
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
        return vv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var gv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!gv[n.type] : r === "textarea";
  }
  function Ev(n, r, o, f) {
    Wl(f), r = gs(r, "onChange"), 0 < r.length && (o = new Cc("onChange", "change", null, o, f), n.push({ event: o, listeners: r }));
  }
  var fs = null, au = null;
  function iu(n) {
    Lc(n, 0);
  }
  function lu(n) {
    var r = uu(n);
    if (pa(r))
      return n;
  }
  function _v(n, r) {
    if (n === "change")
      return r;
  }
  var Ld = !1;
  if (R) {
    var Ud;
    if (R) {
      var zd = "oninput" in document;
      if (!zd) {
        var wv = document.createElement("div");
        wv.setAttribute("oninput", "return;"), zd = typeof wv.oninput == "function";
      }
      Ud = zd;
    } else
      Ud = !1;
    Ld = Ud && (!document.documentMode || 9 < document.documentMode);
  }
  function Cv() {
    fs && (fs.detachEvent("onpropertychange", Tv), au = fs = null);
  }
  function Tv(n) {
    if (n.propertyName === "value" && lu(au)) {
      var r = [];
      Ev(r, au, n, Yt(n)), qo(iu, r);
    }
  }
  function Pg(n, r, o) {
    n === "focusin" ? (Cv(), fs = r, au = o, fs.attachEvent("onpropertychange", Tv)) : n === "focusout" && Cv();
  }
  function Vg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return lu(au);
  }
  function Ig(n, r) {
    if (n === "click")
      return lu(r);
  }
  function xv(n, r) {
    if (n === "input" || n === "change")
      return lu(r);
  }
  function Bg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ga = typeof Object.is == "function" ? Object.is : Bg;
  function ds(n, r) {
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
  function bv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Rv(n, r) {
    var o = bv(n);
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
      o = bv(o);
    }
  }
  function Dv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Dv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Mc() {
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
  function ki(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Oc(n) {
    var r = Mc(), o = n.focusedElem, f = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Dv(o.ownerDocument.documentElement, o)) {
      if (f !== null && ki(o)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = o.textContent.length, y = Math.min(f.start, h);
          f = f.end === void 0 ? y : Math.min(f.end, h), !n.extend && y > f && (h = f, f = y, y = h), h = Rv(o, y);
          var w = Rv(
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
  var kv = R && "documentMode" in document && 11 >= document.documentMode, Ga = null, Ad = null, ps = null, jd = !1;
  function Mv(n, r, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    jd || Ga == null || Ga !== On(f) || (f = Ga, "selectionStart" in f && ki(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), ps && ds(ps, f) || (ps = f, f = gs(Ad, "onSelect"), 0 < f.length && (r = new Cc("onSelect", "select", null, r, o), n.push({ event: r, listeners: f }), r.target = Ga)));
  }
  function Nc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Xl = { animationend: Nc("Animation", "AnimationEnd"), animationiteration: Nc("Animation", "AnimationIteration"), animationstart: Nc("Animation", "AnimationStart"), transitionend: Nc("Transition", "TransitionEnd") }, Fd = {}, Hd = {};
  R && (Hd = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function zn(n) {
    if (Fd[n])
      return Fd[n];
    if (!Xl[n])
      return n;
    var r = Xl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Hd)
        return Fd[n] = r[o];
    return n;
  }
  var Yd = zn("animationend"), Ov = zn("animationiteration"), Nv = zn("animationstart"), Lv = zn("transitionend"), Uv = /* @__PURE__ */ new Map(), zv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mi(n, r) {
    Uv.set(n, r), E(r, [n]);
  }
  for (var hs = 0; hs < zv.length; hs++) {
    var Jl = zv[hs], Wg = Jl.toLowerCase(), vs = Jl[0].toUpperCase() + Jl.slice(1);
    Mi(Wg, "on" + vs);
  }
  Mi(Yd, "onAnimationEnd"), Mi(Ov, "onAnimationIteration"), Mi(Nv, "onAnimationStart"), Mi("dblclick", "onDoubleClick"), Mi("focusin", "onFocus"), Mi("focusout", "onBlur"), Mi(Lv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $g = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Av(n, r, o) {
    var f = n.type || "unknown-event";
    n.currentTarget = o, Fe(f, r, void 0, n), n.currentTarget = null;
  }
  function Lc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var f = n[o], h = f.event;
      f = f.listeners;
      e: {
        var y = void 0;
        if (r)
          for (var w = f.length - 1; 0 <= w; w--) {
            var x = f[w], M = x.instance, W = x.currentTarget;
            if (x = x.listener, M !== y && h.isPropagationStopped())
              break e;
            Av(h, x, W), y = M;
          }
        else
          for (w = 0; w < f.length; w++) {
            if (x = f[w], M = x.instance, W = x.currentTarget, x = x.listener, M !== y && h.isPropagationStopped())
              break e;
            Av(h, x, W), y = M;
          }
      }
    }
    if (il)
      throw n = k, il = !1, k = null, n;
  }
  function Ft(n, r) {
    var o = r[Gd];
    o === void 0 && (o = r[Gd] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    o.has(f) || (jv(r, n, 2, !1), o.add(f));
  }
  function fl(n, r, o) {
    var f = 0;
    r && (f |= 4), jv(o, n, f, r);
  }
  var Oi = "_reactListening" + Math.random().toString(36).slice(2);
  function ou(n) {
    if (!n[Oi]) {
      n[Oi] = !0, p.forEach(function(o) {
        o !== "selectionchange" && ($g.has(o) || fl(o, !1, n), fl(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Oi] || (r[Oi] = !0, fl("selectionchange", !1, r));
    }
  }
  function jv(n, r, o, f) {
    switch (Td(r)) {
      case 1:
        var h = iv;
        break;
      case 4:
        h = Ec;
        break;
      default:
        h = _c;
    }
    o = h.bind(null, r, o, n), h = void 0, !Zo || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: h }) : n.addEventListener(r, o, !0) : h !== void 0 ? n.addEventListener(r, o, { passive: h }) : n.addEventListener(r, o, !1);
  }
  function Uc(n, r, o, f, h) {
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
    qo(function() {
      var W = y, X = Yt(o), re = [];
      e: {
        var K = Uv.get(n);
        if (K !== void 0) {
          var ge = Cc, be = n;
          switch (n) {
            case "keypress":
              if (eu(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              ge = jg;
              break;
            case "focusin":
              be = "focus", ge = cl;
              break;
            case "focusout":
              be = "blur", ge = cl;
              break;
            case "beforeblur":
            case "afterblur":
              ge = cl;
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
              ge = xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = sv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = Fg;
              break;
            case Yd:
            case Ov:
            case Nv:
              ge = cv;
              break;
            case Lv:
              ge = hv;
              break;
            case "scroll":
              ge = ov;
              break;
            case "wheel":
              ge = Di;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = zg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = bc;
          }
          var ke = (r & 4) !== 0, dn = !ke && n === "scroll", j = ke ? K !== null ? K + "Capture" : null : K;
          ke = [];
          for (var N = W, P; N !== null; ) {
            P = N;
            var oe = P.stateNode;
            if (P.tag === 5 && oe !== null && (P = oe, j !== null && (oe = Gl(N, j), oe != null && ke.push(ys(N, oe, P)))), dn)
              break;
            N = N.return;
          }
          0 < ke.length && (K = new ge(K, be, null, o, X), re.push({ event: K, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", K && o !== Or && (be = o.relatedTarget || o.fromElement) && (Sa(be) || be[Ni]))
            break e;
          if ((ge || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, ge ? (be = o.relatedTarget || o.toElement, ge = W, be = be ? Sa(be) : null, be !== null && (dn = tt(be), be !== dn || be.tag !== 5 && be.tag !== 6) && (be = null)) : (ge = null, be = W), ge !== be)) {
            if (ke = xc, oe = "onMouseLeave", j = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (ke = bc, oe = "onPointerLeave", j = "onPointerEnter", N = "pointer"), dn = ge == null ? K : uu(ge), P = be == null ? K : uu(be), K = new ke(oe, N + "leave", ge, o, X), K.target = dn, K.relatedTarget = P, oe = null, Sa(X) === W && (ke = new ke(j, N + "enter", be, o, X), ke.target = P, ke.relatedTarget = dn, oe = ke), dn = oe, ge && be)
              t: {
                for (ke = ge, j = be, N = 0, P = ke; P; P = eo(P))
                  N++;
                for (P = 0, oe = j; oe; oe = eo(oe))
                  P++;
                for (; 0 < N - P; )
                  ke = eo(ke), N--;
                for (; 0 < P - N; )
                  j = eo(j), P--;
                for (; N--; ) {
                  if (ke === j || j !== null && ke === j.alternate)
                    break t;
                  ke = eo(ke), j = eo(j);
                }
                ke = null;
              }
            else
              ke = null;
            ge !== null && Pd(re, K, ge, ke, !1), be !== null && dn !== null && Pd(re, dn, be, ke, !0);
          }
        }
        e: {
          if (K = W ? uu(W) : window, ge = K.nodeName && K.nodeName.toLowerCase(), ge === "select" || ge === "input" && K.type === "file")
            var Oe = _v;
          else if (Sv(K))
            if (Ld)
              Oe = xv;
            else {
              Oe = Vg;
              var Re = Pg;
            }
          else
            (ge = K.nodeName) && ge.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (Oe = Ig);
          if (Oe && (Oe = Oe(n, W))) {
            Ev(re, Oe, o, X);
            break e;
          }
          Re && Re(n, K, W), n === "focusout" && (Re = K._wrapperState) && Re.controlled && K.type === "number" && Fa(K, "number", K.value);
        }
        switch (Re = W ? uu(W) : window, n) {
          case "focusin":
            (Sv(Re) || Re.contentEditable === "true") && (Ga = Re, Ad = W, ps = null);
            break;
          case "focusout":
            ps = Ad = Ga = null;
            break;
          case "mousedown":
            jd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jd = !1, Mv(re, o, X);
            break;
          case "selectionchange":
            if (kv)
              break;
          case "keydown":
          case "keyup":
            Mv(re, o, X);
        }
        var Le;
        if ($a)
          e: {
            switch (n) {
              case "compositionstart":
                var Qe = "onCompositionStart";
                break e;
              case "compositionend":
                Qe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Qe = "onCompositionUpdate";
                break e;
            }
            Qe = void 0;
          }
        else
          ru ? yv(n, o) && (Qe = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (vv && o.locale !== "ko" && (ru || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && ru && (Le = xd()) : (bi = X, os = "value" in bi ? bi.value : bi.textContent, ru = !0)), Re = gs(W, Qe), 0 < Re.length && (Qe = new Dd(Qe, n, null, o, X), re.push({ event: Qe, listeners: Re }), Le ? Qe.data = Le : (Le = kc(o), Le !== null && (Qe.data = Le)))), (Le = Dc ? Hg(n, o) : Yg(n, o)) && (W = gs(W, "onBeforeInput"), 0 < W.length && (X = new Dd("onBeforeInput", "beforeinput", null, o, X), re.push({ event: X, listeners: W }), X.data = Le));
      }
      Lc(re, r);
    });
  }
  function ys(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function gs(n, r) {
    for (var o = r + "Capture", f = []; n !== null; ) {
      var h = n, y = h.stateNode;
      h.tag === 5 && y !== null && (h = y, y = Gl(n, o), y != null && f.unshift(ys(n, y, h)), y = Gl(n, r), y != null && f.push(ys(n, y, h))), n = n.return;
    }
    return f;
  }
  function eo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Pd(n, r, o, f, h) {
    for (var y = r._reactName, w = []; o !== null && o !== f; ) {
      var x = o, M = x.alternate, W = x.stateNode;
      if (M !== null && M === f)
        break;
      x.tag === 5 && W !== null && (x = W, h ? (M = Gl(o, y), M != null && w.unshift(ys(o, M, x))) : h || (M = Gl(o, y), M != null && w.push(ys(o, M, x)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Vd = /\r\n?/g, Gg = /\u0000|\uFFFD/g;
  function Id(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vd, `
`).replace(Gg, "");
  }
  function zc(n, r, o) {
    if (r = Id(r), Id(n) !== r && o)
      throw Error(c(425));
  }
  function Ac() {
  }
  var Bd = null, to = null;
  function Ss(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var no = typeof setTimeout == "function" ? setTimeout : void 0, Fv = typeof clearTimeout == "function" ? clearTimeout : void 0, Wd = typeof Promise == "function" ? Promise : void 0, $d = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function(n) {
    return Wd.resolve(null).then(n).catch(Qg);
  } : no;
  function Qg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function dl(n, r) {
    var o = r, f = 0;
    do {
      var h = o.nextSibling;
      if (n.removeChild(o), h && h.nodeType === 8)
        if (o = h.data, o === "/$") {
          if (f === 0) {
            n.removeChild(h), is(r);
            return;
          }
          f--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || f++;
      o = h;
    } while (o);
    is(r);
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
  function Es(n) {
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
  var pl = Math.random().toString(36).slice(2), oi = "__reactFiber$" + pl, ro = "__reactProps$" + pl, Ni = "__reactContainer$" + pl, Gd = "__reactEvents$" + pl, qg = "__reactListeners$" + pl, Qd = "__reactHandles$" + pl;
  function Sa(n) {
    var r = n[oi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ni] || o[oi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Es(n); n !== null; ) {
            if (o = n[oi])
              return o;
            n = Es(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function _s(n) {
    return n = n[oi] || n[Ni], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function ze(n) {
    return n[ro] || null;
  }
  var hl = [], It = -1;
  function Xe(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > It || (n.current = hl[It], hl[It] = null, It--);
  }
  function xt(n, r) {
    It++, hl[It] = n.current, n.current = r;
  }
  var ui = {}, Ge = Xe(ui), ln = Xe(!1), Lr = ui;
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
    Tt(ln), Tt(Ge);
  }
  function vl(n, r, o) {
    if (Ge.current !== ui)
      throw Error(c(168));
    xt(Ge, r), xt(ln, o);
  }
  function ws(n, r, o) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return o;
    f = f.getChildContext();
    for (var h in f)
      if (!(h in r))
        throw Error(c(108, da(n) || "Unknown", h));
    return _e({}, o, f);
  }
  function jc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ui, Lr = Ge.current, xt(Ge, n), xt(ln, ln.current), !0;
  }
  function Hv(n, r, o) {
    var f = n.stateNode;
    if (!f)
      throw Error(c(169));
    o ? (n = ws(n, r, Lr), f.__reactInternalMemoizedMergedChildContext = n, Tt(ln), Tt(Ge), xt(Ge, n)) : Tt(ln), xt(ln, o);
  }
  var ta = null, An = !1, Cs = !1;
  function qd(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  function Zd(n) {
    An = !0, qd(n);
  }
  function Ur() {
    if (!Cs && ta !== null) {
      Cs = !0;
      var n = 0, r = Ot;
      try {
        var o = ta;
        for (Ot = 1; n < o.length; n++) {
          var f = o[n];
          do
            f = f(!0);
          while (f !== null);
        }
        ta = null, An = !1;
      } catch (h) {
        throw ta !== null && (ta = ta.slice(n + 1)), qt(xi, Ur), h;
      } finally {
        Ot = r, Cs = !1;
      }
    }
    return null;
  }
  var ml = [], zr = 0, ao = null, su = 0, Ar = [], ur = 0, wa = null, Bn = 1, Li = "";
  function na(n, r) {
    ml[zr++] = su, ml[zr++] = ao, ao = n, su = r;
  }
  function Kd(n, r, o) {
    Ar[ur++] = Bn, Ar[ur++] = Li, Ar[ur++] = wa, wa = n;
    var f = Bn;
    n = Li;
    var h = 32 - va(f) - 1;
    f &= ~(1 << h), o += 1;
    var y = 32 - va(r) + h;
    if (30 < y) {
      var w = h - h % 5;
      y = (f & (1 << w) - 1).toString(32), f >>= w, h -= w, Bn = 1 << 32 - va(r) + h | o << h | f, Li = y + n;
    } else
      Bn = 1 << y | o << h | f, Li = n;
  }
  function Fc(n) {
    n.return !== null && (na(n, 1), Kd(n, 1, 0));
  }
  function Xd(n) {
    for (; n === ao; )
      ao = ml[--zr], ml[zr] = null, su = ml[--zr], ml[zr] = null;
    for (; n === wa; )
      wa = Ar[--ur], Ar[ur] = null, Li = Ar[--ur], Ar[ur] = null, Bn = Ar[--ur], Ar[ur] = null;
  }
  var ra = null, jr = null, Bt = !1, Ca = null;
  function Jd(n, r) {
    var o = ka(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Yv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, jr = Qa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = wa !== null ? { id: Bn, overflow: Li } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ka(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Hc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Yc(n) {
    if (Bt) {
      var r = jr;
      if (r) {
        var o = r;
        if (!Yv(n, r)) {
          if (Hc(n))
            throw Error(c(418));
          r = Qa(o.nextSibling);
          var f = ra;
          r && Yv(n, r) ? Jd(f, o) : (n.flags = n.flags & -4097 | 2, Bt = !1, ra = n);
        }
      } else {
        if (Hc(n))
          throw Error(c(418));
        n.flags = n.flags & -4097 | 2, Bt = !1, ra = n;
      }
    }
  }
  function Pv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ra = n;
  }
  function Pc(n) {
    if (n !== ra)
      return !1;
    if (!Bt)
      return Pv(n), Bt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ss(n.type, n.memoizedProps)), r && (r = jr)) {
      if (Hc(n))
        throw Vv(), Error(c(418));
      for (; r; )
        Jd(n, r), r = Qa(r.nextSibling);
    }
    if (Pv(n), n.tag === 13) {
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
  function Vv() {
    for (var n = jr; n; )
      n = Qa(n.nextSibling);
  }
  function Jt() {
    jr = ra = null, Bt = !1;
  }
  function ep(n) {
    Ca === null ? Ca = [n] : Ca.push(n);
  }
  var Vc = me.ReactCurrentBatchConfig;
  function aa(n, r) {
    if (n && n.defaultProps) {
      r = _e({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var si = Xe(null), Ic = null, yl = null, tp = null;
  function np() {
    tp = yl = Ic = null;
  }
  function gl(n) {
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
    Ic = n, tp = yl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (gn = !0), n.firstContext = null);
  }
  function fn(n) {
    var r = n._currentValue;
    if (tp !== n)
      if (n = { context: n, memoizedValue: r, next: null }, yl === null) {
        if (Ic === null)
          throw Error(c(308));
        yl = n, Ic.dependencies = { lanes: 0, firstContext: n };
      } else
        yl = yl.next = n;
    return r;
  }
  var Wn = null;
  function rp(n) {
    Wn === null ? Wn = [n] : Wn.push(n);
  }
  function Iv(n, r, o, f) {
    var h = r.interleaved;
    return h === null ? (o.next = o, rp(r)) : (o.next = h.next, h.next = o), r.interleaved = o, Ui(n, f);
  }
  function Ui(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Sl = !1;
  function ap(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function El(n, r, o) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, st & 2) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, Ui(n, o);
    }
    return h = f.interleaved, h === null ? (r.next = r, rp(f)) : (r.next = h.next, h.next = r), f.interleaved = r, Ui(n, o);
  }
  function Bc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, ts(n, o);
    }
  }
  function ip(n, r) {
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
  function _l(n, r, o, f) {
    var h = n.updateQueue;
    Sl = !1;
    var y = h.firstBaseUpdate, w = h.lastBaseUpdate, x = h.shared.pending;
    if (x !== null) {
      h.shared.pending = null;
      var M = x, W = M.next;
      M.next = null, w === null ? y = W : w.next = W, w = M;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, x = X.lastBaseUpdate, x !== w && (x === null ? X.firstBaseUpdate = W : x.next = W, X.lastBaseUpdate = M));
    }
    if (y !== null) {
      var re = h.baseState;
      w = 0, X = W = M = null, x = y;
      do {
        var K = x.lane, ge = x.eventTime;
        if ((f & K) === K) {
          X !== null && (X = X.next = {
            eventTime: ge,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var be = n, ke = x;
            switch (K = r, ge = o, ke.tag) {
              case 1:
                if (be = ke.payload, typeof be == "function") {
                  re = be.call(ge, re, K);
                  break e;
                }
                re = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ke.payload, K = typeof be == "function" ? be.call(ge, re, K) : be, K == null)
                  break e;
                re = _e({}, re, K);
                break e;
              case 2:
                Sl = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, K = h.effects, K === null ? h.effects = [x] : K.push(x));
        } else
          ge = { eventTime: ge, lane: K, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, X === null ? (W = X = ge, M = re) : X = X.next = ge, w |= K;
        if (x = x.next, x === null) {
          if (x = h.shared.pending, x === null)
            break;
          K = x, x = K.next, K.next = null, h.lastBaseUpdate = K, h.shared.pending = null;
        }
      } while (1);
      if (X === null && (M = re), h.baseState = M, h.firstBaseUpdate = W, h.lastBaseUpdate = X, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          w |= h.lane, h = h.next;
        while (h !== r);
      } else
        y === null && (h.shared.lanes = 0);
      Hi |= w, n.lanes = w, n.memoizedState = re;
    }
  }
  function io(n, r, o) {
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
  var Bv = new i.Component().refs;
  function lp(n, r, o, f) {
    r = n.memoizedState, o = o(f, r), o = o == null ? r : _e({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? tt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var f = dr(), h = Sn(n), y = zi(f, h);
    y.payload = r, o != null && (y.callback = o), r = El(n, y, h), r !== null && (pr(r, n, h, f), Bc(r, n, h));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var f = dr(), h = Sn(n), y = zi(f, h);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = El(n, y, h), r !== null && (pr(r, n, h, f), Bc(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), f = Sn(n), h = zi(o, f);
    h.tag = 2, r != null && (h.callback = r), r = El(n, h, f), r !== null && (pr(r, n, f, o), Bc(r, n, f));
  } };
  function Wv(n, r, o, f, h, y, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, y, w) : r.prototype && r.prototype.isPureReactComponent ? !ds(o, f) || !ds(h, y) : !0;
  }
  function $v(n, r, o) {
    var f = !1, h = ui, y = r.contextType;
    return typeof y == "object" && y !== null ? y = fn(y) : (h = Zt(r) ? Lr : Ge.current, f = r.contextTypes, y = (f = f != null) ? Ea(n, h) : ui), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wc, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Gv(n, r, o, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, f), r.state !== n && Wc.enqueueReplaceState(r, r.state, null);
  }
  function $c(n, r, o, f) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = Bv, ap(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? h.context = fn(y) : (y = Zt(r) ? Lr : Ge.current, h.context = Ea(n, y)), h.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (lp(n, r, y, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && Wc.enqueueReplaceState(h, h.state, null), _l(n, o, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function cu(n, r, o) {
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
          x === Bv && (x = h.refs = {}), w === null ? delete x[y] : x[y] = w;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!o._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function Gc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function qv(n) {
    function r(j, N) {
      if (n) {
        var P = j.deletions;
        P === null ? (j.deletions = [N], j.flags |= 16) : P.push(N);
      }
    }
    function o(j, N) {
      if (!n)
        return null;
      for (; N !== null; )
        r(j, N), N = N.sibling;
      return null;
    }
    function f(j, N) {
      for (j = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? j.set(N.key, N) : j.set(N.index, N), N = N.sibling;
      return j;
    }
    function h(j, N) {
      return j = kl(j, N), j.index = 0, j.sibling = null, j;
    }
    function y(j, N, P) {
      return j.index = P, n ? (P = j.alternate, P !== null ? (P = P.index, P < N ? (j.flags |= 2, N) : P) : (j.flags |= 2, N)) : (j.flags |= 1048576, N);
    }
    function w(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function x(j, N, P, oe) {
      return N === null || N.tag !== 6 ? (N = Vs(P, j.mode, oe), N.return = j, N) : (N = h(N, P), N.return = j, N);
    }
    function M(j, N, P, oe) {
      var Oe = P.type;
      return Oe === ue ? X(j, N, P.props.children, oe, P.key) : N !== null && (N.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === kt && Qv(Oe) === N.type) ? (oe = h(N, P.props), oe.ref = cu(j, N, P), oe.return = j, oe) : (oe = bf(P.type, P.key, P.props, null, j.mode, oe), oe.ref = cu(j, N, P), oe.return = j, oe);
    }
    function W(j, N, P, oe) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== P.containerInfo || N.stateNode.implementation !== P.implementation ? (N = xo(P, j.mode, oe), N.return = j, N) : (N = h(N, P.children || []), N.return = j, N);
    }
    function X(j, N, P, oe, Oe) {
      return N === null || N.tag !== 7 ? (N = To(P, j.mode, oe, Oe), N.return = j, N) : (N = h(N, P), N.return = j, N);
    }
    function re(j, N, P) {
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return N = Vs("" + N, j.mode, P), N.return = j, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case fe:
            return P = bf(N.type, N.key, N.props, null, j.mode, P), P.ref = cu(j, null, N), P.return = j, P;
          case ee:
            return N = xo(N, j.mode, P), N.return = j, N;
          case kt:
            var oe = N._init;
            return re(j, oe(N._payload), P);
        }
        if (Ti(N) || je(N))
          return N = To(N, j.mode, P, null), N.return = j, N;
        Gc(j, N);
      }
      return null;
    }
    function K(j, N, P, oe) {
      var Oe = N !== null ? N.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return Oe !== null ? null : x(j, N, "" + P, oe);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case fe:
            return P.key === Oe ? M(j, N, P, oe) : null;
          case ee:
            return P.key === Oe ? W(j, N, P, oe) : null;
          case kt:
            return Oe = P._init, K(
              j,
              N,
              Oe(P._payload),
              oe
            );
        }
        if (Ti(P) || je(P))
          return Oe !== null ? null : X(j, N, P, oe, null);
        Gc(j, P);
      }
      return null;
    }
    function ge(j, N, P, oe, Oe) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number")
        return j = j.get(P) || null, x(N, j, "" + oe, Oe);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case fe:
            return j = j.get(oe.key === null ? P : oe.key) || null, M(N, j, oe, Oe);
          case ee:
            return j = j.get(oe.key === null ? P : oe.key) || null, W(N, j, oe, Oe);
          case kt:
            var Re = oe._init;
            return ge(j, N, P, Re(oe._payload), Oe);
        }
        if (Ti(oe) || je(oe))
          return j = j.get(P) || null, X(N, j, oe, Oe, null);
        Gc(N, oe);
      }
      return null;
    }
    function be(j, N, P, oe) {
      for (var Oe = null, Re = null, Le = N, Qe = N = 0, Yn = null; Le !== null && Qe < P.length; Qe++) {
        Le.index > Qe ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var yt = K(j, Le, P[Qe], oe);
        if (yt === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && yt.alternate === null && r(j, Le), N = y(yt, N, Qe), Re === null ? Oe = yt : Re.sibling = yt, Re = yt, Le = Yn;
      }
      if (Qe === P.length)
        return o(j, Le), Bt && na(j, Qe), Oe;
      if (Le === null) {
        for (; Qe < P.length; Qe++)
          Le = re(j, P[Qe], oe), Le !== null && (N = y(Le, N, Qe), Re === null ? Oe = Le : Re.sibling = Le, Re = Le);
        return Bt && na(j, Qe), Oe;
      }
      for (Le = f(j, Le); Qe < P.length; Qe++)
        Yn = ge(Le, j, Qe, P[Qe], oe), Yn !== null && (n && Yn.alternate !== null && Le.delete(Yn.key === null ? Qe : Yn.key), N = y(Yn, N, Qe), Re === null ? Oe = Yn : Re.sibling = Yn, Re = Yn);
      return n && Le.forEach(function(Ml) {
        return r(j, Ml);
      }), Bt && na(j, Qe), Oe;
    }
    function ke(j, N, P, oe) {
      var Oe = je(P);
      if (typeof Oe != "function")
        throw Error(c(150));
      if (P = Oe.call(P), P == null)
        throw Error(c(151));
      for (var Re = Oe = null, Le = N, Qe = N = 0, Yn = null, yt = P.next(); Le !== null && !yt.done; Qe++, yt = P.next()) {
        Le.index > Qe ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var Ml = K(j, Le, yt.value, oe);
        if (Ml === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && Ml.alternate === null && r(j, Le), N = y(Ml, N, Qe), Re === null ? Oe = Ml : Re.sibling = Ml, Re = Ml, Le = Yn;
      }
      if (yt.done)
        return o(
          j,
          Le
        ), Bt && na(j, Qe), Oe;
      if (Le === null) {
        for (; !yt.done; Qe++, yt = P.next())
          yt = re(j, yt.value, oe), yt !== null && (N = y(yt, N, Qe), Re === null ? Oe = yt : Re.sibling = yt, Re = yt);
        return Bt && na(j, Qe), Oe;
      }
      for (Le = f(j, Le); !yt.done; Qe++, yt = P.next())
        yt = ge(Le, j, Qe, yt.value, oe), yt !== null && (n && yt.alternate !== null && Le.delete(yt.key === null ? Qe : yt.key), N = y(yt, N, Qe), Re === null ? Oe = yt : Re.sibling = yt, Re = yt);
      return n && Le.forEach(function(v0) {
        return r(j, v0);
      }), Bt && na(j, Qe), Oe;
    }
    function dn(j, N, P, oe) {
      if (typeof P == "object" && P !== null && P.type === ue && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case fe:
            e: {
              for (var Oe = P.key, Re = N; Re !== null; ) {
                if (Re.key === Oe) {
                  if (Oe = P.type, Oe === ue) {
                    if (Re.tag === 7) {
                      o(j, Re.sibling), N = h(Re, P.props.children), N.return = j, j = N;
                      break e;
                    }
                  } else if (Re.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === kt && Qv(Oe) === Re.type) {
                    o(j, Re.sibling), N = h(Re, P.props), N.ref = cu(j, Re, P), N.return = j, j = N;
                    break e;
                  }
                  o(j, Re);
                  break;
                } else
                  r(j, Re);
                Re = Re.sibling;
              }
              P.type === ue ? (N = To(P.props.children, j.mode, oe, P.key), N.return = j, j = N) : (oe = bf(P.type, P.key, P.props, null, j.mode, oe), oe.ref = cu(j, N, P), oe.return = j, j = oe);
            }
            return w(j);
          case ee:
            e: {
              for (Re = P.key; N !== null; ) {
                if (N.key === Re)
                  if (N.tag === 4 && N.stateNode.containerInfo === P.containerInfo && N.stateNode.implementation === P.implementation) {
                    o(j, N.sibling), N = h(N, P.children || []), N.return = j, j = N;
                    break e;
                  } else {
                    o(j, N);
                    break;
                  }
                else
                  r(j, N);
                N = N.sibling;
              }
              N = xo(P, j.mode, oe), N.return = j, j = N;
            }
            return w(j);
          case kt:
            return Re = P._init, dn(j, N, Re(P._payload), oe);
        }
        if (Ti(P))
          return be(j, N, P, oe);
        if (je(P))
          return ke(j, N, P, oe);
        Gc(j, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, N !== null && N.tag === 6 ? (o(j, N.sibling), N = h(N, P), N.return = j, j = N) : (o(j, N), N = Vs(P, j.mode, oe), N.return = j, j = N), w(j)) : o(j, N);
    }
    return dn;
  }
  var fu = qv(!0), Zv = qv(!1), Ts = {}, qa = Xe(Ts), xs = Xe(Ts), du = Xe(Ts);
  function lo(n) {
    if (n === Ts)
      throw Error(c(174));
    return n;
  }
  function op(n, r) {
    switch (xt(du, r), xt(xs, n), xt(qa, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Tt(qa), xt(qa, r);
  }
  function wl() {
    Tt(qa), Tt(xs), Tt(du);
  }
  function He(n) {
    lo(du.current);
    var r = lo(qa.current), o = vn(r, n.type);
    r !== o && (xt(xs, n), xt(qa, o));
  }
  function lt(n) {
    xs.current === n && (Tt(qa), Tt(xs));
  }
  var Ie = Xe(0);
  function en(n) {
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
  function Qc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var qc = me.ReactCurrentDispatcher, up = me.ReactCurrentBatchConfig, oo = 0, Wt = null, q = null, pt = null, Be = !1, ci = !1, ia = 0, uo = 0;
  function $t() {
    throw Error(c(321));
  }
  function so(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!ga(n[o], r[o]))
        return !1;
    return !0;
  }
  function Cl(n, r, o, f, h, y) {
    if (oo = y, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, qc.current = n === null || n.memoizedState === null ? Kg : Xg, n = o(f, h), ci) {
      y = 0;
      do {
        if (ci = !1, ia = 0, 25 <= y)
          throw Error(c(301));
        y += 1, pt = q = null, r.updateQueue = null, qc.current = cp, n = o(f, h);
      } while (ci);
    }
    if (qc.current = df, r = q !== null && q.next !== null, oo = 0, pt = q = Wt = null, Be = !1, r)
      throw Error(c(300));
    return n;
  }
  function co() {
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
  function fo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function bs(n) {
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
      var x = w = null, M = null, W = y;
      do {
        var X = W.lane;
        if ((oo & X) === X)
          M !== null && (M = M.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), f = W.hasEagerState ? W.eagerState : n(f, W.action);
        else {
          var re = {
            lane: X,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          M === null ? (x = M = re, w = f) : M = M.next = re, Wt.lanes |= X, Hi |= X;
        }
        W = W.next;
      } while (W !== null && W !== y);
      M === null ? w = f : M.next = x, ga(f, r.memoizedState) || (gn = !0), r.memoizedState = f, r.baseState = w, r.baseQueue = M, o.lastRenderedState = f;
    }
    if (n = o.interleaved, n !== null) {
      h = n;
      do
        y = h.lane, Wt.lanes |= y, Hi |= y, h = h.next;
      while (h !== n);
    } else
      h === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Rs(n) {
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
  function Zc() {
  }
  function Kc(n, r) {
    var o = Wt, f = Fr(), h = r(), y = !ga(f.memoizedState, h);
    if (y && (f.memoizedState = h, gn = !0), f = f.queue, Ds(ef.bind(null, o, f, n), [n]), f.getSnapshot !== r || y || pt !== null && pt.memoizedState.tag & 1) {
      if (o.flags |= 2048, po(9, Jc.bind(null, o, f, h, r), void 0, null), tn === null)
        throw Error(c(349));
      oo & 30 || Xc(o, r, h);
    }
    return h;
  }
  function Xc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Jc(n, r, o, f) {
    r.value = o, r.getSnapshot = f, tf(r) && nf(n);
  }
  function ef(n, r, o) {
    return o(function() {
      tf(r) && nf(n);
    });
  }
  function tf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ga(n, o);
    } catch {
      return !0;
    }
  }
  function nf(n) {
    var r = Ui(n, 1);
    r !== null && pr(r, n, 1, -1);
  }
  function rf(n) {
    var r = xa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fo, lastRenderedState: n }, r.queue = n, n = n.dispatch = ff.bind(null, Wt, n), [r.memoizedState, n];
  }
  function po(n, r, o, f) {
    return n = { tag: n, create: r, destroy: o, deps: f, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (f = o.next, o.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function af() {
    return Fr().memoizedState;
  }
  function ho(n, r, o, f) {
    var h = xa();
    Wt.flags |= n, h.memoizedState = po(1 | r, o, void 0, f === void 0 ? null : f);
  }
  function Ai(n, r, o, f) {
    var h = Fr();
    f = f === void 0 ? null : f;
    var y = void 0;
    if (q !== null) {
      var w = q.memoizedState;
      if (y = w.destroy, f !== null && so(f, w.deps)) {
        h.memoizedState = po(r, o, y, f);
        return;
      }
    }
    Wt.flags |= n, h.memoizedState = po(1 | r, o, y, f);
  }
  function lf(n, r) {
    return ho(8390656, 8, n, r);
  }
  function Ds(n, r) {
    return Ai(2048, 8, n, r);
  }
  function of(n, r) {
    return Ai(4, 2, n, r);
  }
  function uf(n, r) {
    return Ai(4, 4, n, r);
  }
  function sp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function pu(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ai(4, 4, sp.bind(null, r, n), o);
  }
  function sf() {
  }
  function hu(n, r) {
    var o = Fr();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && so(r, f[1]) ? f[0] : (o.memoizedState = [n, r], n);
  }
  function Tl(n, r) {
    var o = Fr();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && so(r, f[1]) ? f[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Hr(n, r, o) {
    return oo & 21 ? (ga(o, r) || (o = gc(), Wt.lanes |= o, Hi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, gn = !0), n.memoizedState = o);
  }
  function Zg(n, r) {
    var o = Ot;
    Ot = o !== 0 && 4 > o ? o : 4, n(!0);
    var f = up.transition;
    up.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = o, up.transition = f;
    }
  }
  function Ht() {
    return Fr().memoizedState;
  }
  function cf(n, r, o) {
    var f = Sn(n);
    if (o = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null }, vu(n))
      ks(r, o);
    else if (o = Iv(n, r, o, f), o !== null) {
      var h = dr();
      pr(o, n, f, h), Kv(o, r, f);
    }
  }
  function ff(n, r, o) {
    var f = Sn(n), h = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (vu(n))
      ks(r, h);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var w = r.lastRenderedState, x = y(w, o);
          if (h.hasEagerState = !0, h.eagerState = x, ga(x, w)) {
            var M = r.interleaved;
            M === null ? (h.next = h, rp(r)) : (h.next = M.next, M.next = h), r.interleaved = h;
            return;
          }
        } catch {
        } finally {
        }
      o = Iv(n, r, h, f), o !== null && (h = dr(), pr(o, n, f, h), Kv(o, r, f));
    }
  }
  function vu(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function ks(n, r) {
    ci = Be = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Kv(n, r, o) {
    if (o & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, ts(n, o);
    }
  }
  var df = { readContext: fn, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: !1 }, Kg = { readContext: fn, useCallback: function(n, r) {
    return xa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fn, useEffect: lf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ho(
      4194308,
      4,
      sp.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return ho(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ho(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = xa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var f = xa();
    return r = o !== void 0 ? o(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = cf.bind(null, Wt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = xa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: rf, useDebugValue: sf, useDeferredValue: function(n) {
    return xa().memoizedState = n;
  }, useTransition: function() {
    var n = rf(!1), r = n[0];
    return n = Zg.bind(null, n[1]), xa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var f = Wt, h = xa();
    if (Bt) {
      if (o === void 0)
        throw Error(c(407));
      o = o();
    } else {
      if (o = r(), tn === null)
        throw Error(c(349));
      oo & 30 || Xc(f, r, o);
    }
    h.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return h.queue = y, lf(ef.bind(
      null,
      f,
      y,
      n
    ), [n]), f.flags |= 2048, po(9, Jc.bind(null, f, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = xa(), r = tn.identifierPrefix;
    if (Bt) {
      var o = Li, f = Bn;
      o = (f & ~(1 << 32 - va(f) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ia++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = uo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Xg = {
    readContext: fn,
    useCallback: hu,
    useContext: fn,
    useEffect: Ds,
    useImperativeHandle: pu,
    useInsertionEffect: of,
    useLayoutEffect: uf,
    useMemo: Tl,
    useReducer: bs,
    useRef: af,
    useState: function() {
      return bs(fo);
    },
    useDebugValue: sf,
    useDeferredValue: function(n) {
      var r = Fr();
      return Hr(r, q.memoizedState, n);
    },
    useTransition: function() {
      var n = bs(fo)[0], r = Fr().memoizedState;
      return [n, r];
    },
    useMutableSource: Zc,
    useSyncExternalStore: Kc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, cp = { readContext: fn, useCallback: hu, useContext: fn, useEffect: Ds, useImperativeHandle: pu, useInsertionEffect: of, useLayoutEffect: uf, useMemo: Tl, useReducer: Rs, useRef: af, useState: function() {
    return Rs(fo);
  }, useDebugValue: sf, useDeferredValue: function(n) {
    var r = Fr();
    return q === null ? r.memoizedState = n : Hr(r, q.memoizedState, n);
  }, useTransition: function() {
    var n = Rs(fo)[0], r = Fr().memoizedState;
    return [n, r];
  }, useMutableSource: Zc, useSyncExternalStore: Kc, useId: Ht, unstable_isNewReconciler: !1 };
  function mu(n, r) {
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
  function Ms(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function pf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Jg = typeof WeakMap == "function" ? WeakMap : Map;
  function Xv(n, r, o) {
    o = zi(-1, o), o.tag = 3, o.payload = { element: null };
    var f = r.value;
    return o.callback = function() {
      Ef || (Ef = !0, So = f), pf(n, r);
    }, o;
  }
  function Os(n, r, o) {
    o = zi(-1, o), o.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      o.payload = function() {
        return f(h);
      }, o.callback = function() {
        pf(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      pf(n, r), typeof f != "function" && (pi === null ? pi = /* @__PURE__ */ new Set([this]) : pi.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function Jv(n, r, o) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Jg();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else
      h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(o) || (h.add(o), n = l0.bind(null, n, r, o), r.then(n, n));
  }
  function fp(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function dp(n, r, o, f, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = zi(-1, 1), r.tag = 2, El(o, r, 1))), o.lanes |= 1), n);
  }
  var e0 = me.ReactCurrentOwner, gn = !1;
  function xn(n, r, o, f) {
    r.child = n === null ? Zv(r, null, o, f) : fu(r, n.child, o, f);
  }
  function xl(n, r, o, f, h) {
    o = o.render;
    var y = r.ref;
    return de(r, h), f = Cl(n, r, o, f, y, h), o = co(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, $n(n, r, h)) : (Bt && o && Fc(r), r.flags |= 1, xn(n, r, f, h), r.child);
  }
  function hf(n, r, o, f, h) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Op(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, Yr(n, r, y, f, h)) : (n = bf(o.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & h)) {
      var w = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ds, o(w, f) && n.ref === r.ref)
        return $n(n, r, h);
    }
    return r.flags |= 1, n = kl(y, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yr(n, r, o, f, h) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ds(y, f) && n.ref === r.ref)
        if (gn = !1, r.pendingProps = f = y, (n.lanes & h) !== 0)
          n.flags & 131072 && (gn = !0);
        else
          return r.lanes = n.lanes, $n(n, r, h);
    }
    return yu(n, r, o, f, h);
  }
  function vo(n, r, o) {
    var f = r.pendingProps, h = f.children, y = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xt(Cu, la), la |= o;
      else {
        if (!(o & 1073741824))
          return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xt(Cu, la), la |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = y !== null ? y.baseLanes : o, xt(Cu, la), la |= f;
      }
    else
      y !== null ? (f = y.baseLanes | o, r.memoizedState = null) : f = o, xt(Cu, la), la |= f;
    return xn(n, r, h, o), r.child;
  }
  function Je(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yu(n, r, o, f, h) {
    var y = Zt(o) ? Lr : Ge.current;
    return y = Ea(r, y), de(r, h), o = Cl(n, r, o, f, y, h), f = co(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, $n(n, r, h)) : (Bt && f && Fc(r), r.flags |= 1, xn(n, r, o, h), r.child);
  }
  function pp(n, r, o, f, h) {
    if (Zt(o)) {
      var y = !0;
      jc(r);
    } else
      y = !1;
    if (de(r, h), r.stateNode === null)
      sr(n, r), $v(r, o, f), $c(r, o, f, h), f = !0;
    else if (n === null) {
      var w = r.stateNode, x = r.memoizedProps;
      w.props = x;
      var M = w.context, W = o.contextType;
      typeof W == "object" && W !== null ? W = fn(W) : (W = Zt(o) ? Lr : Ge.current, W = Ea(r, W));
      var X = o.getDerivedStateFromProps, re = typeof X == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      re || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (x !== f || M !== W) && Gv(r, w, f, W), Sl = !1;
      var K = r.memoizedState;
      w.state = K, _l(r, f, w, h), M = r.memoizedState, x !== f || K !== M || ln.current || Sl ? (typeof X == "function" && (lp(r, o, X, f), M = r.memoizedState), (x = Sl || Wv(r, o, x, f, K, M, W)) ? (re || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = M), w.props = f, w.state = M, w.context = W, f = x) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      w = r.stateNode, Tn(n, r), x = r.memoizedProps, W = r.type === r.elementType ? x : aa(r.type, x), w.props = W, re = r.pendingProps, K = w.context, M = o.contextType, typeof M == "object" && M !== null ? M = fn(M) : (M = Zt(o) ? Lr : Ge.current, M = Ea(r, M));
      var ge = o.getDerivedStateFromProps;
      (X = typeof ge == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (x !== re || K !== M) && Gv(r, w, f, M), Sl = !1, K = r.memoizedState, w.state = K, _l(r, f, w, h);
      var be = r.memoizedState;
      x !== re || K !== be || ln.current || Sl ? (typeof ge == "function" && (lp(r, o, ge, f), be = r.memoizedState), (W = Sl || Wv(r, o, W, f, K, be, M) || !1) ? (X || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(f, be, M), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(f, be, M)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = be), w.props = f, w.state = be, w.context = M, f = W) : (typeof w.componentDidUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return em(n, r, o, f, y, h);
  }
  function em(n, r, o, f, h, y) {
    Je(n, r);
    var w = (r.flags & 128) !== 0;
    if (!f && !w)
      return h && Hv(r, o, !1), $n(n, r, y);
    f = r.stateNode, e0.current = r;
    var x = w && typeof o.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && w ? (r.child = fu(r, n.child, null, y), r.child = fu(r, null, x, y)) : xn(n, r, x, y), r.memoizedState = f.state, h && Hv(r, o, !0), r.child;
  }
  function tm(n) {
    var r = n.stateNode;
    r.pendingContext ? vl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && vl(n, r.context, !1), op(n, r.containerInfo);
  }
  function vf(n, r, o, f, h) {
    return Jt(), ep(h), r.flags |= 256, xn(n, r, o, f), r.child;
  }
  var mo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vp(n, r, o) {
    var f = r.pendingProps, h = Ie.current, y = !1, w = (r.flags & 128) !== 0, x;
    if ((x = w) || (x = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), x ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), xt(Ie, h & 1), n === null)
      return Yc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = f.children, n = f.fallback, y ? (f = r.mode, y = r.child, w = { mode: "hidden", children: w }, !(f & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = w) : y = Ps(w, f, 0, null), n = To(n, f, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = hp(o), r.memoizedState = mo, n) : mp(r, w));
    if (h = n.memoizedState, h !== null && (x = h.dehydrated, x !== null))
      return t0(n, r, w, f, x, h, o);
    if (y) {
      y = f.fallback, w = r.mode, h = n.child, x = h.sibling;
      var M = { mode: "hidden", children: f.children };
      return !(w & 1) && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = M, r.deletions = null) : (f = kl(h, M), f.subtreeFlags = h.subtreeFlags & 14680064), x !== null ? y = kl(x, y) : (y = To(y, w, o, null), y.flags |= 2), y.return = r, f.return = r, f.sibling = y, r.child = f, f = y, y = r.child, w = n.child.memoizedState, w = w === null ? hp(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, y.memoizedState = w, y.childLanes = n.childLanes & ~o, r.memoizedState = mo, f;
    }
    return y = n.child, n = y.sibling, f = kl(y, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = o), f.return = r, f.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function mp(n, r) {
    return r = Ps({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function gu(n, r, o, f) {
    return f !== null && ep(f), fu(r, n.child, null, o), n = mp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function t0(n, r, o, f, h, y, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, f = Ms(Error(c(422))), gu(n, r, w, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = f.fallback, h = r.mode, f = Ps({ mode: "visible", children: f.children }, h, 0, null), y = To(y, h, w, null), y.flags |= 2, f.return = r, y.return = r, f.sibling = y, r.child = f, r.mode & 1 && fu(r, n.child, null, w), r.child.memoizedState = hp(w), r.memoizedState = mo, y);
    if (!(r.mode & 1))
      return gu(n, r, w, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f)
        var x = f.dgst;
      return f = x, y = Error(c(419)), f = Ms(y, f, void 0), gu(n, r, w, f);
    }
    if (x = (w & n.childLanes) !== 0, gn || x) {
      if (f = tn, f !== null) {
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
        h = h & (f.suspendedLanes | w) ? 0 : h, h !== 0 && h !== y.retryLane && (y.retryLane = h, Ui(n, h), pr(f, n, h, -1));
      }
      return Dp(), f = Ms(Error(c(421))), gu(n, r, w, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = o0.bind(null, n), h._reactRetry = r, null) : (n = y.treeContext, jr = Qa(h.nextSibling), ra = r, Bt = !0, Ca = null, n !== null && (Ar[ur++] = Bn, Ar[ur++] = Li, Ar[ur++] = wa, Bn = n.id, Li = n.overflow, wa = r), r = mp(r, f.children), r.flags |= 4096, r);
  }
  function yp(n, r, o) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), jn(n.return, r, o);
  }
  function mf(n, r, o, f, h) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: o, tailMode: h } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = f, y.tail = o, y.tailMode = h);
  }
  function gp(n, r, o) {
    var f = r.pendingProps, h = f.revealOrder, y = f.tail;
    if (xn(n, r, f.children, o), f = Ie.current, f & 2)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && yp(n, o, r);
            else if (n.tag === 19)
              yp(n, o, r);
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
    if (xt(Ie, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (o = r.child, h = null; o !== null; )
            n = o.alternate, n !== null && en(n) === null && (h = o), o = o.sibling;
          o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), mf(r, !1, h, o, y);
          break;
        case "backwards":
          for (o = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && en(n) === null) {
              r.child = h;
              break;
            }
            n = h.sibling, h.sibling = o, o = h, h = n;
          }
          mf(r, !0, o, null, y);
          break;
        case "together":
          mf(r, !1, null, null, void 0);
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
    if (n !== null && (r.dependencies = n.dependencies), Hi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, o = kl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = kl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ji(n, r, o) {
    switch (r.tag) {
      case 3:
        tm(r), Jt();
        break;
      case 5:
        He(r);
        break;
      case 1:
        Zt(r.type) && jc(r);
        break;
      case 4:
        op(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        xt(si, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (xt(Ie, Ie.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? vp(n, r, o) : (xt(Ie, Ie.current & 1), n = $n(n, r, o), n !== null ? n.sibling : null);
        xt(Ie, Ie.current & 1);
        break;
      case 19:
        if (f = (o & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return gp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), xt(Ie, Ie.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, vo(n, r, o);
    }
    return $n(n, r, o);
  }
  var Ns, yo, ba, bn;
  Ns = function(n, r) {
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
  }, yo = function() {
  }, ba = function(n, r, o, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, lo(qa.current);
      var y = null;
      switch (o) {
        case "input":
          h = ar(n, h), f = ar(n, f), y = [];
          break;
        case "select":
          h = _e({}, h, { value: void 0 }), f = _e({}, f, { value: void 0 }), y = [];
          break;
        case "textarea":
          h = Ha(n, h), f = Ha(n, f), y = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Ac);
      }
      Nn(o, f);
      var w;
      o = null;
      for (W in h)
        if (!f.hasOwnProperty(W) && h.hasOwnProperty(W) && h[W] != null)
          if (W === "style") {
            var x = h[W];
            for (w in x)
              x.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (m.hasOwnProperty(W) ? y || (y = []) : (y = y || []).push(W, null));
      for (W in f) {
        var M = f[W];
        if (x = h != null ? h[W] : void 0, f.hasOwnProperty(W) && M !== x && (M != null || x != null))
          if (W === "style")
            if (x) {
              for (w in x)
                !x.hasOwnProperty(w) || M && M.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
              for (w in M)
                M.hasOwnProperty(w) && x[w] !== M[w] && (o || (o = {}), o[w] = M[w]);
            } else
              o || (y || (y = []), y.push(
                W,
                o
              )), o = M;
          else
            W === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, x = x ? x.__html : void 0, M != null && x !== M && (y = y || []).push(W, M)) : W === "children" ? typeof M != "string" && typeof M != "number" || (y = y || []).push(W, "" + M) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (m.hasOwnProperty(W) ? (M != null && W === "onScroll" && Ft("scroll", n), y || x === M || (y = [])) : (y = y || []).push(W, M));
      }
      o && (y = y || []).push("style", o);
      var W = y;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, bn = function(n, r, o, f) {
    o !== f && (r.flags |= 4);
  };
  function Ls(n, r) {
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
    switch (Xd(r), r.tag) {
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
        return f = r.stateNode, wl(), Tt(ln), Tt(Ge), Qc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Pc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ca !== null && (Ys(Ca), Ca = null))), yo(n, r), cr(r), null;
      case 5:
        lt(r);
        var h = lo(du.current);
        if (o = r.type, n !== null && r.stateNode != null)
          ba(n, r, o, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(c(166));
            return cr(r), null;
          }
          if (n = lo(qa.current), Pc(r)) {
            f = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (f[oi] = r, f[ro] = y, n = (r.mode & 1) !== 0, o) {
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
                for (h = 0; h < ms.length; h++)
                  Ft(ms[h], f);
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
                w === "children" ? typeof x == "string" ? f.textContent !== x && (y.suppressHydrationWarning !== !0 && zc(f.textContent, x, n), h = ["children", x]) : typeof x == "number" && f.textContent !== "" + x && (y.suppressHydrationWarning !== !0 && zc(
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
                typeof y.onClick == "function" && (f.onclick = Ac);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            w = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = w.createElement(o, { is: f.is }) : (n = w.createElement(o), o === "select" && (w = n, f.multiple ? w.multiple = !0 : f.size && (w.size = f.size))) : n = w.createElementNS(n, o), n[oi] = r, n[ro] = f, Ns(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = cn(o, f), o) {
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
                  for (h = 0; h < ms.length; h++)
                    Ft(ms[h], n);
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
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = _e({}, f, { value: void 0 }), Ft("invalid", n);
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
                  y === "style" ? Mt(n, M) : y === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && rl(n, M)) : y === "children" ? typeof M == "string" ? (o !== "textarea" || M !== "") && Pa(n, M) : typeof M == "number" && Pa(n, "" + M) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? M != null && y === "onScroll" && Ft("scroll", n) : M != null && ne(n, y, M, w));
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
                  typeof h.onClick == "function" && (n.onclick = Ac);
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
          if (o = lo(du.current), lo(qa.current), Pc(r)) {
            if (f = r.stateNode, o = r.memoizedProps, f[oi] = r, (y = f.nodeValue !== o) && (n = ra, n !== null))
              switch (n.tag) {
                case 3:
                  zc(f.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && zc(f.nodeValue, o, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            f = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(f), f[oi] = r, r.stateNode = f;
        }
        return cr(r), null;
      case 13:
        if (Tt(Ie), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Bt && jr !== null && r.mode & 1 && !(r.flags & 128))
            Vv(), Jt(), r.flags |= 98560, y = !1;
          else if (y = Pc(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!y)
                throw Error(c(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y)
                throw Error(c(317));
              y[oi] = r;
            } else
              Jt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            cr(r), y = !1;
          } else
            Ca !== null && (Ys(Ca), Ca = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ie.current & 1 ? Dn === 0 && (Dn = 3) : Dp())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return wl(), yo(n, r), n === null && ou(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return gl(r.type._context), cr(r), null;
      case 17:
        return Zt(r.type) && _a(), cr(r), null;
      case 19:
        if (Tt(Ie), y = r.memoizedState, y === null)
          return cr(r), null;
        if (f = (r.flags & 128) !== 0, w = y.rendering, w === null)
          if (f)
            Ls(y, !1);
          else {
            if (Dn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = en(n), w !== null) {
                  for (r.flags |= 128, Ls(y, !1), f = w.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = o, o = r.child; o !== null; )
                    y = o, n = f, y.flags &= 14680066, w = y.alternate, w === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = w.childLanes, y.lanes = w.lanes, y.child = w.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = w.memoizedProps, y.memoizedState = w.memoizedState, y.updateQueue = w.updateQueue, y.type = w.type, n = w.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return xt(Ie, Ie.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && St() > xu && (r.flags |= 128, f = !0, Ls(y, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = en(w), n !== null) {
              if (r.flags |= 128, f = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Ls(y, !0), y.tail === null && y.tailMode === "hidden" && !w.alternate && !Bt)
                return cr(r), null;
            } else
              2 * St() - y.renderingStartTime > xu && o !== 1073741824 && (r.flags |= 128, f = !0, Ls(y, !1), r.lanes = 4194304);
          y.isBackwards ? (w.sibling = r.child, r.child = w) : (o = y.last, o !== null ? o.sibling = w : r.child = w, y.last = w);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = St(), r.sibling = null, o = Ie.current, xt(Ie, f ? o & 1 | 2 : o & 1), r) : (cr(r), null);
      case 22:
      case 23:
        return Rp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? la & 1073741824 && (cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function Sp(n, r) {
    switch (Xd(r), r.tag) {
      case 1:
        return Zt(r.type) && _a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wl(), Tt(ln), Tt(Ge), Qc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lt(r), null;
      case 13:
        if (Tt(Ie), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(c(340));
          Jt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Tt(Ie), null;
      case 4:
        return wl(), null;
      case 10:
        return gl(r.type._context), null;
      case 22:
      case 23:
        return Rp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Us = !1, Rn = !1, nm = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function Su(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (f) {
          un(n, r, f);
        }
      else
        o.current = null;
  }
  function zs(n, r, o) {
    try {
      o();
    } catch (f) {
      un(n, r, f);
    }
  }
  var rm = !1;
  function am(n, r) {
    if (Bd = Zl, n = Mc(), ki(n)) {
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
            var w = 0, x = -1, M = -1, W = 0, X = 0, re = n, K = null;
            t:
              for (; ; ) {
                for (var ge; re !== o || h !== 0 && re.nodeType !== 3 || (x = w + h), re !== y || f !== 0 && re.nodeType !== 3 || (M = w + f), re.nodeType === 3 && (w += re.nodeValue.length), (ge = re.firstChild) !== null; )
                  K = re, re = ge;
                for (; ; ) {
                  if (re === n)
                    break t;
                  if (K === o && ++W === h && (x = w), K === y && ++X === f && (M = w), (ge = re.nextSibling) !== null)
                    break;
                  re = K, K = re.parentNode;
                }
                re = ge;
              }
            o = x === -1 || M === -1 ? null : { start: x, end: M };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (to = { focusedElem: n, selectionRange: o }, Zl = !1, Te = r; Te !== null; )
      if (r = Te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Te = n;
      else
        for (; Te !== null; ) {
          r = Te;
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
                    var ke = be.memoizedProps, dn = be.memoizedState, j = r.stateNode, N = j.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : aa(r.type, ke), dn);
                    j.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var P = r.stateNode.containerInfo;
                  P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (oe) {
            un(r, r.return, oe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
        }
    return be = rm, rm = !1, be;
  }
  function As(n, r, o) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var y = h.destroy;
          h.destroy = void 0, y !== void 0 && zs(r, o, y);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function js(n, r) {
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
  function Ep(n) {
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
  function _p(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, _p(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[oi], delete r[ro], delete r[Gd], delete r[qg], delete r[Qd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function im(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function yf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || im(n.return))
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
  function Eu(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Ac));
    else if (f !== 4 && (n = n.child, n !== null))
      for (Eu(n, r, o), n = n.sibling; n !== null; )
        Eu(n, r, o), n = n.sibling;
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
      _u(n, r, o), o = o.sibling;
  }
  function _u(n, r, o) {
    if (Ia && typeof Ia.onCommitFiberUnmount == "function")
      try {
        Ia.onCommitFiberUnmount(es, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Rn || Su(o, r);
      case 6:
        var f = Kt, h = Fn;
        Kt = null, Ra(n, r, o), Kt = f, Fn = h, Kt !== null && (Fn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Kt.removeChild(o.stateNode));
        break;
      case 18:
        Kt !== null && (Fn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? dl(n.parentNode, o) : n.nodeType === 1 && dl(n, o), is(n)) : dl(Kt, o.stateNode));
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
            y = y.tag, w !== void 0 && (y & 2 || y & 4) && zs(o, r, w), h = h.next;
          } while (h !== f);
        }
        Ra(n, r, o);
        break;
      case 1:
        if (!Rn && (Su(o, r), f = o.stateNode, typeof f.componentWillUnmount == "function"))
          try {
            f.props = o.memoizedProps, f.state = o.memoizedState, f.componentWillUnmount();
          } catch (x) {
            un(o, r, x);
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
  function Fi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new nm()), r.forEach(function(f) {
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
          _u(y, w, h), Kt = null, Fn = !1;
          var M = h.alternate;
          M !== null && (M.return = null), h.return = null;
        } catch (W) {
          un(h, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        lm(r, n), r = r.sibling;
  }
  function lm(n, r) {
    var o = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Za(r, n), di(n), f & 4) {
          try {
            As(3, n, n.return), js(3, n);
          } catch (ke) {
            un(n, n.return, ke);
          }
          try {
            As(5, n, n.return);
          } catch (ke) {
            un(n, n.return, ke);
          }
        }
        break;
      case 1:
        Za(r, n), di(n), f & 512 && o !== null && Su(o, o.return);
        break;
      case 5:
        if (Za(r, n), di(n), f & 512 && o !== null && Su(o, o.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Pa(h, "");
          } catch (ke) {
            un(n, n.return, ke);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var y = n.memoizedProps, w = o !== null ? o.memoizedProps : y, x = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              x === "input" && y.type === "radio" && y.name != null && ir(h, y), cn(x, w);
              var W = cn(x, y);
              for (w = 0; w < M.length; w += 2) {
                var X = M[w], re = M[w + 1];
                X === "style" ? Mt(h, re) : X === "dangerouslySetInnerHTML" ? rl(h, re) : X === "children" ? Pa(h, re) : ne(h, X, re, W);
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
                  var ge = y.value;
                  ge != null ? ai(h, !!y.multiple, ge, !1) : K !== !!y.multiple && (y.defaultValue != null ? ai(
                    h,
                    !!y.multiple,
                    y.defaultValue,
                    !0
                  ) : ai(h, !!y.multiple, y.multiple ? [] : "", !1));
              }
              h[ro] = y;
            } catch (ke) {
              un(n, n.return, ke);
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
          } catch (ke) {
            un(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (Za(r, n), di(n), f & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            is(r.containerInfo);
          } catch (ke) {
            un(n, n.return, ke);
          }
        break;
      case 4:
        Za(r, n), di(n);
        break;
      case 13:
        Za(r, n), di(n), h = n.child, h.flags & 8192 && (y = h.memoizedState !== null, h.stateNode.isHidden = y, !y || h.alternate !== null && h.alternate.memoizedState !== null || (Tp = St())), f & 4 && Fi(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (Rn = (W = Rn) || X, Za(r, n), Rn = W) : Za(r, n), di(n), f & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !X && n.mode & 1)
            for (Te = n, X = n.child; X !== null; ) {
              for (re = Te = X; Te !== null; ) {
                switch (K = Te, ge = K.child, K.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    As(4, K, K.return);
                    break;
                  case 1:
                    Su(K, K.return);
                    var be = K.stateNode;
                    if (typeof be.componentWillUnmount == "function") {
                      f = K, o = K.return;
                      try {
                        r = f, be.props = r.memoizedProps, be.state = r.memoizedState, be.componentWillUnmount();
                      } catch (ke) {
                        un(f, o, ke);
                      }
                    }
                    break;
                  case 5:
                    Su(K, K.return);
                    break;
                  case 22:
                    if (K.memoizedState !== null) {
                      wp(re);
                      continue;
                    }
                }
                ge !== null ? (ge.return = K, Te = ge) : wp(re);
              }
              X = X.sibling;
            }
          e:
            for (X = null, re = n; ; ) {
              if (re.tag === 5) {
                if (X === null) {
                  X = re;
                  try {
                    h = re.stateNode, W ? (y = h.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (x = re.stateNode, M = re.memoizedProps.style, w = M != null && M.hasOwnProperty("display") ? M.display : null, x.style.display = it("display", w));
                  } catch (ke) {
                    un(n, n.return, ke);
                  }
                }
              } else if (re.tag === 6) {
                if (X === null)
                  try {
                    re.stateNode.nodeValue = W ? "" : re.memoizedProps;
                  } catch (ke) {
                    un(n, n.return, ke);
                  }
              } else if ((re.tag !== 22 && re.tag !== 23 || re.memoizedState === null || re === n) && re.child !== null) {
                re.child.return = re, re = re.child;
                continue;
              }
              if (re === n)
                break e;
              for (; re.sibling === null; ) {
                if (re.return === null || re.return === n)
                  break e;
                X === re && (X = null), re = re.return;
              }
              X === re && (X = null), re.sibling.return = re.return, re = re.sibling;
            }
        }
        break;
      case 19:
        Za(r, n), di(n), f & 4 && Fi(n);
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
            if (im(o)) {
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
            var y = yf(n);
            fi(n, y, h);
            break;
          case 3:
          case 4:
            var w = f.stateNode.containerInfo, x = yf(n);
            Eu(n, x, w);
            break;
          default:
            throw Error(c(161));
        }
      } catch (M) {
        un(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function om(n, r, o) {
    Te = n, wu(n);
  }
  function wu(n, r, o) {
    for (var f = (n.mode & 1) !== 0; Te !== null; ) {
      var h = Te, y = h.child;
      if (h.tag === 22 && f) {
        var w = h.memoizedState !== null || Us;
        if (!w) {
          var x = h.alternate, M = x !== null && x.memoizedState !== null || Rn;
          x = Us;
          var W = Rn;
          if (Us = w, (Rn = M) && !W)
            for (Te = h; Te !== null; )
              w = Te, M = w.child, w.tag === 22 && w.memoizedState !== null ? sm(h) : M !== null ? (M.return = w, Te = M) : sm(h);
          for (; y !== null; )
            Te = y, wu(y), y = y.sibling;
          Te = h, Us = x, Rn = W;
        }
        um(n);
      } else
        h.subtreeFlags & 8772 && y !== null ? (y.return = h, Te = y) : um(n);
    }
  }
  function um(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r.flags & 8772) {
        var o = r.alternate;
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
                  if (o === null)
                    f.componentDidMount();
                  else {
                    var h = r.elementType === r.type ? o.memoizedProps : aa(r.type, o.memoizedProps);
                    f.componentDidUpdate(h, o.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && io(r, y, f);
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
                  io(r, w, o);
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
                  var W = r.alternate;
                  if (W !== null) {
                    var X = W.memoizedState;
                    if (X !== null) {
                      var re = X.dehydrated;
                      re !== null && is(re);
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
          Rn || r.flags & 512 && Ep(r);
        } catch (K) {
          un(r, r.return, K);
        }
      }
      if (r === n) {
        Te = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Te = o;
        break;
      }
      Te = r.return;
    }
  }
  function wp(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r === n) {
        Te = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Te = o;
        break;
      }
      Te = r.return;
    }
  }
  function sm(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              js(4, r);
            } catch (M) {
              un(r, o, M);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (M) {
                un(r, h, M);
              }
            }
            var y = r.return;
            try {
              Ep(r);
            } catch (M) {
              un(r, y, M);
            }
            break;
          case 5:
            var w = r.return;
            try {
              Ep(r);
            } catch (M) {
              un(r, w, M);
            }
        }
      } catch (M) {
        un(r, r.return, M);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Te = x;
        break;
      }
      Te = r.return;
    }
  }
  var gf = Math.ceil, Fs = me.ReactCurrentDispatcher, Cp = me.ReactCurrentOwner, fr = me.ReactCurrentBatchConfig, st = 0, tn = null, on = null, Hn = 0, la = 0, Cu = Xe(0), Dn = 0, Hs = null, Hi = 0, Sf = 0, Tu = 0, go = null, gr = null, Tp = 0, xu = 1 / 0, Yi = null, Ef = !1, So = null, pi = null, bl = !1, Rl = null, _f = 0, bu = 0, wf = null, Eo = -1, _o = 0;
  function dr() {
    return st & 6 ? St() : Eo !== -1 ? Eo : Eo = St();
  }
  function Sn(n) {
    return n.mode & 1 ? st & 2 && Hn !== 0 ? Hn & -Hn : Vc.transition !== null ? (_o === 0 && (_o = gc()), _o) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Td(n.type)), n) : 1;
  }
  function pr(n, r, o, f) {
    if (50 < bu)
      throw bu = 0, wf = null, Error(c(185));
    ql(n, o, f), (!(st & 2) || n !== tn) && (n === tn && (!(st & 2) && (Sf |= o), Dn === 4 && Da(n, Hn)), hr(n, f), o === 1 && st === 0 && !(r.mode & 1) && (xu = St() + 500, An && Ur()));
  }
  function hr(n, r) {
    var o = n.callbackNode;
    yc(n, r);
    var f = Ba(n, n === tn ? Hn : 0);
    if (f === 0)
      o !== null && yr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (o != null && yr(o), r === 1)
        n.tag === 0 ? Zd(cm.bind(null, n)) : qd(cm.bind(null, n)), $d(function() {
          !(st & 6) && Ur();
        }), o = null;
      else {
        switch (_d(f)) {
          case 1:
            o = xi;
            break;
          case 4:
            o = ut;
            break;
          case 16:
            o = ol;
            break;
          case 536870912:
            o = yd;
            break;
          default:
            o = ol;
        }
        o = Mp(o, Ru.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Ru(n, r) {
    if (Eo = -1, _o = 0, st & 6)
      throw Error(c(327));
    var o = n.callbackNode;
    if (ku() && n.callbackNode !== o)
      return null;
    var f = Ba(n, n === tn ? Hn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = Tf(n, f);
    else {
      r = f;
      var h = st;
      st |= 2;
      var y = Cf();
      (tn !== n || Hn !== r) && (Yi = null, xu = St() + 500, wo(n, r));
      do
        try {
          a0();
          break;
        } catch (x) {
          fm(n, x);
        }
      while (1);
      np(), Fs.current = y, st = h, on !== null ? r = 0 : (tn = null, Hn = 0, r = Dn);
    }
    if (r !== 0) {
      if (r === 2 && (h = Sd(n), h !== 0 && (f = h, r = xp(n, h))), r === 1)
        throw o = Hs, wo(n, 0), Da(n, f), hr(n, St()), o;
      if (r === 6)
        Da(n, f);
      else {
        if (h = n.current.alternate, !(f & 30) && !bp(h) && (r = Tf(n, f), r === 2 && (y = Sd(n), y !== 0 && (f = y, r = xp(n, y))), r === 1))
          throw o = Hs, wo(n, 0), Da(n, f), hr(n, St()), o;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Co(n, gr, Yi);
            break;
          case 3:
            if (Da(n, f), (f & 130023424) === f && (r = Tp + 500 - St(), 10 < r)) {
              if (Ba(n, 0) !== 0)
                break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                dr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = no(Co.bind(null, n, gr, Yi), r);
              break;
            }
            Co(n, gr, Yi);
            break;
          case 4:
            if (Da(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var w = 31 - va(f);
              y = 1 << w, w = r[w], w > h && (h = w), f &= ~y;
            }
            if (f = h, f = St() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * gf(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = no(Co.bind(null, n, gr, Yi), f);
              break;
            }
            Co(n, gr, Yi);
            break;
          case 5:
            Co(n, gr, Yi);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return hr(n, St()), n.callbackNode === o ? Ru.bind(null, n) : null;
  }
  function xp(n, r) {
    var o = go;
    return n.current.memoizedState.isDehydrated && (wo(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = gr, gr = o, r !== null && Ys(r)), n;
  }
  function Ys(n) {
    gr === null ? gr = n : gr.push.apply(gr, n);
  }
  function bp(n) {
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
    for (r &= ~Tu, r &= ~Sf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - va(r), f = 1 << o;
      n[o] = -1, r &= ~f;
    }
  }
  function cm(n) {
    if (st & 6)
      throw Error(c(327));
    ku();
    var r = Ba(n, 0);
    if (!(r & 1))
      return hr(n, St()), null;
    var o = Tf(n, r);
    if (n.tag !== 0 && o === 2) {
      var f = Sd(n);
      f !== 0 && (r = f, o = xp(n, f));
    }
    if (o === 1)
      throw o = Hs, wo(n, 0), Da(n, r), hr(n, St()), o;
    if (o === 6)
      throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Co(n, gr, Yi), hr(n, St()), null;
  }
  function Du(n, r) {
    var o = st;
    st |= 1;
    try {
      return n(r);
    } finally {
      st = o, st === 0 && (xu = St() + 500, An && Ur());
    }
  }
  function Dl(n) {
    Rl !== null && Rl.tag === 0 && !(st & 6) && ku();
    var r = st;
    st |= 1;
    var o = fr.transition, f = Ot;
    try {
      if (fr.transition = null, Ot = 1, n)
        return n();
    } finally {
      Ot = f, fr.transition = o, st = r, !(st & 6) && Ur();
    }
  }
  function Rp() {
    la = Cu.current, Tt(Cu);
  }
  function wo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Fv(o)), on !== null)
      for (o = on.return; o !== null; ) {
        var f = o;
        switch (Xd(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && _a();
            break;
          case 3:
            wl(), Tt(ln), Tt(Ge), Qc();
            break;
          case 5:
            lt(f);
            break;
          case 4:
            wl();
            break;
          case 13:
            Tt(Ie);
            break;
          case 19:
            Tt(Ie);
            break;
          case 10:
            gl(f.type._context);
            break;
          case 22:
          case 23:
            Rp();
        }
        o = o.return;
      }
    if (tn = n, on = n = kl(n.current, null), Hn = la = r, Dn = 0, Hs = null, Tu = Sf = Hi = 0, gr = go = null, Wn !== null) {
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
  function fm(n, r) {
    do {
      var o = on;
      try {
        if (np(), qc.current = df, Be) {
          for (var f = Wt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          Be = !1;
        }
        if (oo = 0, pt = q = Wt = null, ci = !1, ia = 0, Cp.current = null, o === null || o.return === null) {
          Dn = 1, Hs = r, on = null;
          break;
        }
        e: {
          var y = n, w = o.return, x = o, M = r;
          if (r = Hn, x.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var W = M, X = x, re = X.tag;
            if (!(X.mode & 1) && (re === 0 || re === 11 || re === 15)) {
              var K = X.alternate;
              K ? (X.updateQueue = K.updateQueue, X.memoizedState = K.memoizedState, X.lanes = K.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ge = fp(w);
            if (ge !== null) {
              ge.flags &= -257, dp(ge, w, x, y, r), ge.mode & 1 && Jv(y, W, r), r = ge, M = W;
              var be = r.updateQueue;
              if (be === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(M), r.updateQueue = ke;
              } else
                be.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                Jv(y, W, r), Dp();
                break e;
              }
              M = Error(c(426));
            }
          } else if (Bt && x.mode & 1) {
            var dn = fp(w);
            if (dn !== null) {
              !(dn.flags & 65536) && (dn.flags |= 256), dp(dn, w, x, y, r), ep(mu(M, x));
              break e;
            }
          }
          y = M = mu(M, x), Dn !== 4 && (Dn = 2), go === null ? go = [y] : go.push(y), y = w;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var j = Xv(y, M, r);
                ip(y, j);
                break e;
              case 1:
                x = M;
                var N = y.type, P = y.stateNode;
                if (!(y.flags & 128) && (typeof N.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (pi === null || !pi.has(P)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var oe = Os(y, x, r);
                  ip(y, oe);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        kp(o);
      } catch (Oe) {
        r = Oe, on === o && o !== null && (on = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Cf() {
    var n = Fs.current;
    return Fs.current = df, n === null ? df : n;
  }
  function Dp() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), tn === null || !(Hi & 268435455) && !(Sf & 268435455) || Da(tn, Hn);
  }
  function Tf(n, r) {
    var o = st;
    st |= 2;
    var f = Cf();
    (tn !== n || Hn !== r) && (Yi = null, wo(n, r));
    do
      try {
        r0();
        break;
      } catch (h) {
        fm(n, h);
      }
    while (1);
    if (np(), st = o, Fs.current = f, on !== null)
      throw Error(c(261));
    return tn = null, Hn = 0, Dn;
  }
  function r0() {
    for (; on !== null; )
      dm(on);
  }
  function a0() {
    for (; on !== null && !ll(); )
      dm(on);
  }
  function dm(n) {
    var r = hm(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? kp(n) : on = r, Cp.current = null;
  }
  function kp(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Sp(o, r), o !== null) {
          o.flags &= 32767, on = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Dn = 6, on = null;
          return;
        }
      } else if (o = n0(o, r, la), o !== null) {
        on = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    Dn === 0 && (Dn = 5);
  }
  function Co(n, r, o) {
    var f = Ot, h = fr.transition;
    try {
      fr.transition = null, Ot = 1, i0(n, r, o, f);
    } finally {
      fr.transition = h, Ot = f;
    }
    return null;
  }
  function i0(n, r, o, f) {
    do
      ku();
    while (Rl !== null);
    if (st & 6)
      throw Error(c(327));
    o = n.finishedWork;
    var h = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (Og(n, y), n === tn && (on = tn = null, Hn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || bl || (bl = !0, Mp(ol, function() {
      return ku(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = fr.transition, fr.transition = null;
      var w = Ot;
      Ot = 1;
      var x = st;
      st |= 4, Cp.current = null, am(n, o), lm(o, n), Oc(to), Zl = !!Bd, to = Bd = null, n.current = o, om(o), vc(), st = x, Ot = w, fr.transition = y;
    } else
      n.current = o;
    if (bl && (bl = !1, Rl = n, _f = h), y = n.pendingLanes, y === 0 && (pi = null), Xh(o.stateNode), hr(n, St()), r !== null)
      for (f = n.onRecoverableError, o = 0; o < r.length; o++)
        h = r[o], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Ef)
      throw Ef = !1, n = So, So = null, n;
    return _f & 1 && n.tag !== 0 && ku(), y = n.pendingLanes, y & 1 ? n === wf ? bu++ : (bu = 0, wf = n) : bu = 0, Ur(), null;
  }
  function ku() {
    if (Rl !== null) {
      var n = _d(_f), r = fr.transition, o = Ot;
      try {
        if (fr.transition = null, Ot = 16 > n ? 16 : n, Rl === null)
          var f = !1;
        else {
          if (n = Rl, Rl = null, _f = 0, st & 6)
            throw Error(c(331));
          var h = st;
          for (st |= 4, Te = n.current; Te !== null; ) {
            var y = Te, w = y.child;
            if (Te.flags & 16) {
              var x = y.deletions;
              if (x !== null) {
                for (var M = 0; M < x.length; M++) {
                  var W = x[M];
                  for (Te = W; Te !== null; ) {
                    var X = Te;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(8, X, y);
                    }
                    var re = X.child;
                    if (re !== null)
                      re.return = X, Te = re;
                    else
                      for (; Te !== null; ) {
                        X = Te;
                        var K = X.sibling, ge = X.return;
                        if (_p(X), X === W) {
                          Te = null;
                          break;
                        }
                        if (K !== null) {
                          K.return = ge, Te = K;
                          break;
                        }
                        Te = ge;
                      }
                  }
                }
                var be = y.alternate;
                if (be !== null) {
                  var ke = be.child;
                  if (ke !== null) {
                    be.child = null;
                    do {
                      var dn = ke.sibling;
                      ke.sibling = null, ke = dn;
                    } while (ke !== null);
                  }
                }
                Te = y;
              }
            }
            if (y.subtreeFlags & 2064 && w !== null)
              w.return = y, Te = w;
            else
              e:
                for (; Te !== null; ) {
                  if (y = Te, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(9, y, y.return);
                    }
                  var j = y.sibling;
                  if (j !== null) {
                    j.return = y.return, Te = j;
                    break e;
                  }
                  Te = y.return;
                }
          }
          var N = n.current;
          for (Te = N; Te !== null; ) {
            w = Te;
            var P = w.child;
            if (w.subtreeFlags & 2064 && P !== null)
              P.return = w, Te = P;
            else
              e:
                for (w = N; Te !== null; ) {
                  if (x = Te, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          js(9, x);
                      }
                    } catch (Oe) {
                      un(x, x.return, Oe);
                    }
                  if (x === w) {
                    Te = null;
                    break e;
                  }
                  var oe = x.sibling;
                  if (oe !== null) {
                    oe.return = x.return, Te = oe;
                    break e;
                  }
                  Te = x.return;
                }
          }
          if (st = h, Ur(), Ia && typeof Ia.onPostCommitFiberRoot == "function")
            try {
              Ia.onPostCommitFiberRoot(es, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        Ot = o, fr.transition = r;
      }
    }
    return !1;
  }
  function pm(n, r, o) {
    r = mu(o, r), r = Xv(n, r, 1), n = El(n, r, 1), r = dr(), n !== null && (ql(n, 1, r), hr(n, r));
  }
  function un(n, r, o) {
    if (n.tag === 3)
      pm(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          pm(r, n, o);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (pi === null || !pi.has(f))) {
            n = mu(o, n), n = Os(r, n, 1), r = El(r, n, 1), n = dr(), r !== null && (ql(r, 1, n), hr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function l0(n, r, o) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, tn === n && (Hn & o) === o && (Dn === 4 || Dn === 3 && (Hn & 130023424) === Hn && 500 > St() - Tp ? wo(n, 0) : Tu |= o), hr(n, r);
  }
  function xf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ko, Ko <<= 1, !(Ko & 130023424) && (Ko = 4194304)) : r = 1);
    var o = dr();
    n = Ui(n, r), n !== null && (ql(n, r, o), hr(n, o));
  }
  function o0(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), xf(n, o);
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
    f !== null && f.delete(r), xf(n, o);
  }
  var hm;
  hm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || ln.current)
        gn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return gn = !1, ji(n, r, o);
        gn = !!(n.flags & 131072);
      }
    else
      gn = !1, Bt && r.flags & 1048576 && Kd(r, su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        sr(n, r), n = r.pendingProps;
        var h = Ea(r, Ge.current);
        de(r, o), h = Cl(null, r, f, n, h, o);
        var y = co();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Zt(f) ? (y = !0, jc(r)) : y = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, ap(r), h.updater = Wc, r.stateNode = h, h._reactInternals = r, $c(r, f, n, o), r = em(null, r, f, !0, y, o)) : (r.tag = 0, Bt && y && Fc(r), xn(null, r, h, o), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (sr(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = c0(f), n = aa(f, n), h) {
            case 0:
              r = yu(null, r, f, n, o);
              break e;
            case 1:
              r = pp(null, r, f, n, o);
              break e;
            case 11:
              r = xl(null, r, f, n, o);
              break e;
            case 14:
              r = hf(null, r, f, aa(f.type, n), o);
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
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), yu(n, r, f, h, o);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), pp(n, r, f, h, o);
      case 3:
        e: {
          if (tm(r), n === null)
            throw Error(c(387));
          f = r.pendingProps, y = r.memoizedState, h = y.element, Tn(n, r), _l(r, f, null, o);
          var w = r.memoizedState;
          if (f = w.element, y.isDehydrated)
            if (y = { element: f, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              h = mu(Error(c(423)), r), r = vf(n, r, f, o, h);
              break e;
            } else if (f !== h) {
              h = mu(Error(c(424)), r), r = vf(n, r, f, o, h);
              break e;
            } else
              for (jr = Qa(r.stateNode.containerInfo.firstChild), ra = r, Bt = !0, Ca = null, o = Zv(r, null, f, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Jt(), f === h) {
              r = $n(n, r, o);
              break e;
            }
            xn(n, r, f, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return He(r), n === null && Yc(r), f = r.type, h = r.pendingProps, y = n !== null ? n.memoizedProps : null, w = h.children, Ss(f, h) ? w = null : y !== null && Ss(f, y) && (r.flags |= 32), Je(n, r), xn(n, r, w, o), r.child;
      case 6:
        return n === null && Yc(r), null;
      case 13:
        return vp(n, r, o);
      case 4:
        return op(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = fu(r, null, f, o) : xn(n, r, f, o), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), xl(n, r, f, h, o);
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
              if (y.children === h.children && !ln.current) {
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
                        M = zi(-1, o & -o), M.tag = 2;
                        var W = y.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var X = W.pending;
                          X === null ? M.next = M : (M.next = X.next, X.next = M), W.pending = M;
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
        return h = r.type, f = r.pendingProps.children, de(r, o), h = fn(h), f = f(h), r.flags |= 1, xn(n, r, f, o), r.child;
      case 14:
        return f = r.type, h = aa(f, r.pendingProps), h = aa(f.type, h), hf(n, r, f, h, o);
      case 15:
        return Yr(n, r, r.type, r.pendingProps, o);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), sr(n, r), r.tag = 1, Zt(f) ? (n = !0, jc(r)) : n = !1, de(r, o), $v(r, f, h), $c(r, f, h, o), em(null, r, f, !0, n, o);
      case 19:
        return gp(n, r, o);
      case 22:
        return vo(n, r, o);
    }
    throw Error(c(156, r.tag));
  };
  function Mp(n, r) {
    return qt(n, r);
  }
  function s0(n, r, o, f) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ka(n, r, o, f) {
    return new s0(n, r, o, f);
  }
  function Op(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function c0(n) {
    if (typeof n == "function")
      return Op(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Nt)
        return 11;
      if (n === hn)
        return 14;
    }
    return 2;
  }
  function kl(n, r) {
    var o = n.alternate;
    return o === null ? (o = ka(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function bf(n, r, o, f, h, y) {
    var w = 2;
    if (f = n, typeof n == "function")
      Op(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case ue:
            return To(o.children, h, y, r);
          case We:
            w = 8, h |= 8;
            break;
          case et:
            return n = ka(12, o, r, h | 2), n.elementType = et, n.lanes = y, n;
          case Pe:
            return n = ka(13, o, r, h), n.elementType = Pe, n.lanes = y, n;
          case at:
            return n = ka(19, o, r, h), n.elementType = at, n.lanes = y, n;
          case _n:
            return Ps(o, h, y, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case nt:
                  w = 10;
                  break e;
                case dt:
                  w = 9;
                  break e;
                case Nt:
                  w = 11;
                  break e;
                case hn:
                  w = 14;
                  break e;
                case kt:
                  w = 16, f = null;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return r = ka(w, o, r, h), r.elementType = n, r.type = f, r.lanes = y, r;
  }
  function To(n, r, o, f) {
    return n = ka(7, n, f, r), n.lanes = o, n;
  }
  function Ps(n, r, o, f) {
    return n = ka(22, n, f, r), n.elementType = _n, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Vs(n, r, o) {
    return n = ka(6, n, null, r), n.lanes = o, n;
  }
  function xo(n, r, o) {
    return r = ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function f0(n, r, o, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ed(0), this.expirationTimes = Ed(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ed(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, f, h, y, w, x, M) {
    return n = new f0(n, r, o, x, M), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = ka(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: f, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ap(y), n;
  }
  function vm(n, r, o) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: o };
  }
  function Np(n) {
    if (!n)
      return ui;
    n = n._reactInternals;
    e: {
      if (tt(n) !== n || n.tag !== 1)
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
        return ws(n, o, r);
    }
    return r;
  }
  function mm(n, r, o, f, h, y, w, x, M) {
    return n = Rf(o, f, !0, n, h, y, w, x, M), n.context = Np(null), o = n.current, f = dr(), h = Sn(o), y = zi(f, h), y.callback = r ?? null, El(o, y, h), n.current.lanes = h, ql(n, h, f), hr(n, f), n;
  }
  function Is(n, r, o, f) {
    var h = r.current, y = dr(), w = Sn(h);
    return o = Np(o), r.context === null ? r.context = o : r.pendingContext = o, r = zi(y, w), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = El(h, r, w), n !== null && (pr(n, h, w, y), Bc(n, h, w)), w;
  }
  function Df(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ym(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Lp(n, r) {
    ym(n, r), (n = n.alternate) && ym(n, r);
  }
  function gm() {
    return null;
  }
  var Up = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function kf(n) {
    this._internalRoot = n;
  }
  Pi.prototype.render = kf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(c(409));
    Is(n, r, null, null);
  }, Pi.prototype.unmount = kf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Dl(function() {
        Is(null, n, null, null);
      }), r[Ni] = null;
    }
  };
  function Pi(n) {
    this._internalRoot = n;
  }
  Pi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = nv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Lt.length && r !== 0 && r < Lt[o].priority; o++)
        ;
      Lt.splice(o, 0, n), o === 0 && rv(n);
    }
  };
  function zp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Sm() {
  }
  function d0(n, r, o, f, h) {
    if (h) {
      if (typeof f == "function") {
        var y = f;
        f = function() {
          var W = Df(w);
          y.call(W);
        };
      }
      var w = mm(r, f, n, 0, null, !1, !1, "", Sm);
      return n._reactRootContainer = w, n[Ni] = w.current, ou(n.nodeType === 8 ? n.parentNode : n), Dl(), w;
    }
    for (; h = n.lastChild; )
      n.removeChild(h);
    if (typeof f == "function") {
      var x = f;
      f = function() {
        var W = Df(M);
        x.call(W);
      };
    }
    var M = Rf(n, 0, !1, null, null, !1, !1, "", Sm);
    return n._reactRootContainer = M, n[Ni] = M.current, ou(n.nodeType === 8 ? n.parentNode : n), Dl(function() {
      Is(r, M, o, f);
    }), M;
  }
  function Of(n, r, o, f, h) {
    var y = o._reactRootContainer;
    if (y) {
      var w = y;
      if (typeof h == "function") {
        var x = h;
        h = function() {
          var M = Df(w);
          x.call(M);
        };
      }
      Is(r, w, n, h);
    } else
      w = d0(o, r, n, h, f);
    return Df(w);
  }
  tv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Ql(r.pendingLanes);
          o !== 0 && (ts(r, o | 1), hr(r, St()), !(st & 6) && (xu = St() + 500, Ur()));
        }
        break;
      case 13:
        Dl(function() {
          var f = Ui(n, 1);
          if (f !== null) {
            var h = dr();
            pr(f, n, 1, h);
          }
        }), Lp(n, 1);
    }
  }, Sc = function(n) {
    if (n.tag === 13) {
      var r = Ui(n, 134217728);
      if (r !== null) {
        var o = dr();
        pr(r, n, 134217728, o);
      }
      Lp(n, 134217728);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = Sn(n), o = Ui(n, r);
      if (o !== null) {
        var f = dr();
        pr(o, n, r, f);
      }
      Lp(n, r);
    }
  }, nv = function() {
    return Ot;
  }, wd = function(n, r) {
    var o = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = o;
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
  }, Ju = Du, hc = Dl;
  var p0 = { usingClientEntryPoint: !1, Events: [_s, uu, ze, Wl, Qo, Du] }, Mu = { findFiberByHostInstance: Sa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, h0 = { bundleType: Mu.bundleType, version: Mu.version, rendererPackageName: Mu.rendererPackageName, rendererConfig: Mu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Mu.findFiberByHostInstance || gm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nf.isDisabled && Nf.supportsFiber)
      try {
        es = Nf.inject(h0), Ia = Nf;
      } catch {
      }
  }
  return za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0, za.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zp(r))
      throw Error(c(200));
    return vm(n, r, null, o);
  }, za.createRoot = function(n, r) {
    if (!zp(n))
      throw Error(c(299));
    var o = !1, f = "", h = Up;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, f, h), n[Ni] = r.current, ou(n.nodeType === 8 ? n.parentNode : n), new kf(r);
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
    return Dl(n);
  }, za.hydrate = function(n, r, o) {
    if (!Mf(r))
      throw Error(c(200));
    return Of(null, n, r, !0, o);
  }, za.hydrateRoot = function(n, r, o) {
    if (!zp(n))
      throw Error(c(405));
    var f = o != null && o.hydratedSources || null, h = !1, y = "", w = Up;
    if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = mm(r, null, n, 1, o ?? null, h, !1, y, w), n[Ni] = r.current, ou(n), f)
      for (n = 0; n < f.length; n++)
        o = f[n], h = o._getVersion, h = h(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, h] : r.mutableSourceEagerHydrationData.push(
          o,
          h
        );
    return new Pi(r);
  }, za.render = function(n, r, o) {
    if (!Mf(r))
      throw Error(c(200));
    return Of(null, n, r, !1, o);
  }, za.unmountComponentAtNode = function(n) {
    if (!Mf(n))
      throw Error(c(40));
    return n._reactRootContainer ? (Dl(function() {
      Of(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ni] = null;
      });
    }), !0) : !1;
  }, za.unstable_batchedUpdates = Du, za.unstable_renderSubtreeIntoContainer = function(n, r, o, f) {
    if (!Mf(o))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Of(n, r, o, !1, f);
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
var px;
function XA() {
  return px || (px = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Bo, u = Ob(), c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function m(e) {
      p = e;
    }
    function E(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        R("warn", e, a);
      }
    }
    function g(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        R("error", e, a);
      }
    }
    function R(e, t, a) {
      {
        var l = c.ReactDebugCurrentFrame, s = l.getStackAddendum();
        s !== "" && (t += "%s", a = a.concat([s]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var b = 0, D = 1, z = 2, U = 3, A = 4, Q = 5, V = 6, te = 7, Ee = 8, Me = 9, le = 10, ne = 11, me = 12, fe = 13, ee = 14, ue = 15, We = 16, et = 17, nt = 18, dt = 19, Nt = 21, Pe = 22, at = 23, hn = 24, kt = 25, _n = !0, ce = !1, je = !1, _e = !1, gt = !1, Ct = !0, Vn = !1, mr = !1, ni = !0, wn = !0, da = !0, rr = /* @__PURE__ */ new Set(), kr = {}, ri = {};
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
    function Ti(e, t) {
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
    var ii = 0, Zr = 1, Ya = 2, vn = 3, Kr = 4, rl = 5, Pa = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ue = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", it = new RegExp("^[" + he + "][" + Ue + "]*$"), Mt = {}, Xt = {};
    function Nn(e) {
      return ar.call(Xt, e) ? !0 : ar.call(Mt, e) ? !1 : it.test(e) ? (Xt[e] = !0, !0) : (Mt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
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
          case rl:
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
    var Pt = {}, Go = [
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
        rl,
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
      var t = e.replace(Wl, Qo);
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
      var t = e.replace(Wl, Qo);
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
    var Ju = "xlinkHref";
    Pt[Ju] = new At(
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
    var hc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $l = !1;
    function qo(e) {
      !$l && hc.test(e) && ($l = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Gl(e, t, a, l) {
      if (l.mustUseProperty) {
        var s = l.propertyName;
        return e[s];
      } else {
        ha(a, t), l.sanitizeURL && qo("" + a);
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
    function Zo(e, t, a, l) {
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
      if (!cn(t, s, l)) {
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
          var L = s.type, O;
          L === vn || L === Kr && a === !0 ? O = "" : (ha(a, C), O = "" + a, s.sanitizeURL && qo(O.toString())), T ? e.setAttributeNS(T, C, O) : e.setAttribute(C, O);
        }
      }
    }
    var al = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), il = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), ve = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), yr = Symbol.for("react.legacy_hidden"), ll = Symbol.for("react.cache"), vc = Symbol.for("react.tracing_marker"), St = Symbol.iterator, kg = "@@iterator";
    function xi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = St && e[St] || e[kg];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, ol = 0, Kh, yd, es, Ia, Xh, va, Jh;
    function ev() {
    }
    ev.__reactDisabledLog = !0;
    function Mg() {
      {
        if (ol === 0) {
          Kh = console.log, yd = console.info, es = console.warn, Ia = console.error, Xh = console.group, va = console.groupCollapsed, Jh = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ev,
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
        ol++;
      }
    }
    function mc() {
      {
        if (ol--, ol === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: Kh
            }),
            info: ut({}, e, {
              value: yd
            }),
            warn: ut({}, e, {
              value: es
            }),
            error: ut({}, e, {
              value: Ia
            }),
            group: ut({}, e, {
              value: Xh
            }),
            groupCollapsed: ut({}, e, {
              value: va
            }),
            groupEnd: ut({}, e, {
              value: Jh
            })
          });
        }
        ol < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ko = c.ReactCurrentDispatcher, Ql;
    function Ba(e, t, a) {
      {
        if (Ql === void 0)
          try {
            throw Error();
          } catch (s) {
            var l = s.stack.trim().match(/\n( *(at )?)/);
            Ql = l && l[1] || "";
          }
        return `
` + Ql + e;
      }
    }
    var gd = !1, yc;
    {
      var Sd = typeof WeakMap == "function" ? WeakMap : Map;
      yc = new Sd();
    }
    function gc(e, t) {
      if (!e || gd)
        return "";
      {
        var a = yc.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      gd = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Ko.current, Ko.current = null, Mg();
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
            } catch (B) {
              l = B;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (B) {
              l = B;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            l = B;
          }
          e();
        }
      } catch (B) {
        if (B && l && typeof B.stack == "string") {
          for (var S = B.stack.split(`
`), _ = l.stack.split(`
`), C = S.length - 1, T = _.length - 1; C >= 1 && T >= 0 && S[C] !== _[T]; )
            T--;
          for (; C >= 1 && T >= 0; C--, T--)
            if (S[C] !== _[T]) {
              if (C !== 1 || T !== 1)
                do
                  if (C--, T--, T < 0 || S[C] !== _[T]) {
                    var L = `
` + S[C].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && yc.set(e, L), L;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        gd = !1, Ko.current = d, mc(), Error.prepareStackTrace = s;
      }
      var O = e ? e.displayName || e.name : "", I = O ? Ba(O) : "";
      return typeof e == "function" && yc.set(e, I), I;
    }
    function Ed(e, t, a) {
      return gc(e, !0);
    }
    function ql(e, t, a) {
      return gc(e, !1);
    }
    function Og(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ts(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return gc(e, Og(e));
      if (typeof e == "string")
        return Ba(e);
      switch (e) {
        case tt:
          return Ba("Suspense");
        case mt:
          return Ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Fe:
            return ql(e.render);
          case rt:
            return ts(e.type, t, a);
          case Ve: {
            var l = e, s = l._payload, d = l._init;
            try {
              return ts(d(s), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ot(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Q:
          return Ba(e.type);
        case We:
          return Ba("Lazy");
        case fe:
          return Ba("Suspense");
        case dt:
          return Ba("SuspenseList");
        case b:
        case z:
        case ue:
          return ql(e.type);
        case ne:
          return ql(e.type.render);
        case D:
          return Ed(e.type);
        default:
          return "";
      }
    }
    function _d(e) {
      try {
        var t = "", a = e;
        do
          t += Ot(a), a = a.return;
        while (a);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function tv(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var s = t.displayName || t.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function Sc(e) {
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
        case il:
          return "StrictMode";
        case tt:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ve:
            var t = e;
            return Sc(t) + ".Consumer";
          case J:
            var a = e;
            return Sc(a._context) + ".Provider";
          case Fe:
            return tv(e, e.render, "ForwardRef");
          case rt:
            var l = e.displayName || null;
            return l !== null ? l : jt(e.type) || "Memo";
          case Ve: {
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
    function nv(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function wd(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case hn:
          return "Cache";
        case Me:
          var l = a;
          return wd(l) + ".Consumer";
        case le:
          var s = a;
          return wd(s._context) + ".Provider";
        case nt:
          return "DehydratedFragment";
        case ne:
          return nv(a, a.render, "ForwardRef");
        case te:
          return "Fragment";
        case Q:
          return a;
        case A:
          return "Portal";
        case U:
          return "Root";
        case V:
          return "Text";
        case We:
          return jt(a);
        case Ee:
          return a === il ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case me:
          return "Profiler";
        case Nt:
          return "Scope";
        case fe:
          return "Suspense";
        case dt:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case D:
        case b:
        case et:
        case z:
        case ee:
        case ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ns = c.ReactDebugCurrentFrame, mn = null, ma = !1;
    function ya() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function rs() {
      return mn === null ? "" : _d(mn);
    }
    function Cn() {
      ns.getCurrentStack = null, mn = null, ma = !1;
    }
    function Lt(e) {
      ns.getCurrentStack = e === null ? null : rs, mn = e, ma = !1;
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
    function ul(e) {
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
    var rv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Xo(e, t) {
      rv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Cd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function av(e) {
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
            as(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Zl(e) {
      av(e) || (e._valueTracker = Jo(e));
    }
    function iv(e) {
      if (!e)
        return !1;
      var t = av(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = is(e);
      return l !== a ? (t.setValue(l), !0) : !1;
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
    var _c = !1, ls = !1, wc = !1, Td = !1;
    function bi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function os(e, t) {
      var a = e, l = t.checked, s = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? a._wrapperState.initialChecked
      });
      return s;
    }
    function us(e, t) {
      Xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ls && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ya() || "A component", t.type), ls = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_c && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ya() || "A component", t.type), _c = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ul(t.value != null ? t.value : l),
        controlled: bi(t)
      };
    }
    function xd(e, t) {
      var a = e, l = t.checked;
      l != null && li(a, "checked", l, !1);
    }
    function eu(e, t) {
      var a = e;
      {
        var l = bi(t);
        !a._wrapperState.controlled && l && !Td && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Td = !0), a._wrapperState.controlled && !l && !wc && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wc = !0);
      }
      xd(e, t);
      var s = ul(t.value), d = t.type;
      if (s != null)
        d === "number" ? (s === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != s) && (a.value = or(s)) : a.value !== or(s) && (a.value = or(s));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? sl(a, t.type, s) : t.hasOwnProperty("defaultValue") && sl(a, t.type, ul(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ss(e, t, a) {
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
    function lv(e, t) {
      var a = e;
      eu(a, t), ea(a, t);
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
            var S = Am(v);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            iv(v), eu(v, S);
          }
        }
      }
    }
    function sl(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ec(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var Cc = !1, tu = !1, ov = !1;
    function Tc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || tu || (tu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ov || (ov = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Cc && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Cc = !0);
    }
    function bd(e, t) {
      t.value != null && e.setAttribute("value", or(ul(t.value)));
    }
    var cs = Array.isArray;
    function Un(e) {
      return cs(e);
    }
    var xc;
    xc = !1;
    function uv() {
      var e = ya();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var sv = ["value", "defaultValue"];
    function Lg(e) {
      {
        Xo("select", e);
        for (var t = 0; t < sv.length; t++) {
          var a = sv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, uv()) : !e.multiple && l && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, uv());
          }
        }
      }
    }
    function cl(e, t, a, l) {
      var s = e.options;
      if (t) {
        for (var d = a, v = {}, S = 0; S < d.length; S++)
          v["$" + d[S]] = !0;
        for (var _ = 0; _ < s.length; _++) {
          var C = v.hasOwnProperty("$" + s[_].value);
          s[_].selected !== C && (s[_].selected = C), C && l && (s[_].defaultSelected = !0);
        }
      } else {
        for (var T = or(ul(a)), L = null, O = 0; O < s.length; O++) {
          if (s[O].value === T) {
            s[O].selected = !0, l && (s[O].defaultSelected = !0);
            return;
          }
          L === null && !s[O].disabled && (L = s[O]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function Rd(e, t) {
      return ut({}, t, {
        value: void 0
      });
    }
    function cv(e, t) {
      var a = e;
      Lg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xc && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xc = !0);
    }
    function Ug(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? cl(a, !!t.multiple, l, !1) : t.defaultValue != null && cl(a, !!t.multiple, t.defaultValue, !0);
    }
    function zg(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? cl(a, !!t.multiple, s, !1) : l !== !!t.multiple && (t.defaultValue != null ? cl(a, !!t.multiple, t.defaultValue, !0) : cl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ag(e, t) {
      var a = e, l = t.value;
      l != null && cl(a, !!t.multiple, l, !1);
    }
    var Dd = !1;
    function kd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: or(a._wrapperState.initialValue)
      });
      return l;
    }
    function fv(e, t) {
      var a = e;
      Xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Dd && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ya() || "A component"), Dd = !0);
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
        initialValue: ul(l)
      };
    }
    function dv(e, t) {
      var a = e, l = ul(t.value), s = ul(t.defaultValue);
      if (l != null) {
        var d = or(l);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      s != null && (a.defaultValue = or(s));
    }
    function pv(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Md(e, t) {
      dv(e, t);
    }
    var Ri = "http://www.w3.org/1999/xhtml", jg = "http://www.w3.org/1998/Math/MathML", Od = "http://www.w3.org/2000/svg";
    function bc(e) {
      switch (e) {
        case "svg":
          return Od;
        case "math":
          return jg;
        default:
          return Ri;
      }
    }
    function Nd(e, t) {
      return e == null || e === Ri ? bc(t) : e === Od && t === "foreignObject" ? Ri : e;
    }
    var Fg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, s);
        });
      } : e;
    }, Rc, hv = Fg(function(e, t) {
      if (e.namespaceURI === Od && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Nr = 1, Di = 3, yn = 8, $a = 9, Kl = 11, Dc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Di) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, vv = {
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
    function mv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var yv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(nu).forEach(function(e) {
      yv.forEach(function(t) {
        nu[mv(t, e)] = nu[e];
      });
    });
    function kc(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(nu.hasOwnProperty(e) && nu[e]) ? t + "px" : (ai(t, e), ("" + t).trim());
    }
    var ru = /([A-Z])/g, Hg = /^ms-/;
    function Yg(e) {
      return e.replace(ru, "-$1").toLowerCase().replace(Hg, "-ms-");
    }
    var gv = function() {
    };
    {
      var Sv = /^(?:webkit|moz|o)[A-Z]/, Ev = /^-ms-/, fs = /-(.)/g, au = /;\s*$/, iu = {}, lu = {}, _v = !1, Ld = !1, Ud = function(e) {
        return e.replace(fs, function(t, a) {
          return a.toUpperCase();
        });
      }, zd = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ud(e.replace(Ev, "ms-"))
        ));
      }, wv = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cv = function(e, t) {
        lu.hasOwnProperty(t) && lu[t] || (lu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(au, "")));
      }, Tv = function(e, t) {
        _v || (_v = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Pg = function(e, t) {
        Ld || (Ld = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      gv = function(e, t) {
        e.indexOf("-") > -1 ? zd(e) : Sv.test(e) ? wv(e) : au.test(t) && Cv(e, t), typeof t == "number" && (isNaN(t) ? Tv(e, t) : isFinite(t) || Pg(e, t));
      };
    }
    var Vg = gv;
    function Ig(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var s = e[l];
            if (s != null) {
              var d = l.indexOf("--") === 0;
              t += a + (d ? l : Yg(l)) + ":", t += kc(l, s, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function xv(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var s = l.indexOf("--") === 0;
          s || Vg(l, t[l]);
          var d = kc(l, t[l], s);
          l === "float" && (l = "cssFloat"), s ? a.setProperty(l, d) : a[l] = d;
        }
    }
    function Bg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ga(e) {
      var t = {};
      for (var a in e)
        for (var l = vv[a] || [a], s = 0; s < l.length; s++)
          t[l[s]] = a;
      return t;
    }
    function ds(e, t) {
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
    var bv = {
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
    }, Rv = ut({
      menuitem: !0
    }, bv), Dv = "__html";
    function Mc(e, t) {
      if (t) {
        if (Rv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Dv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ki(e, t) {
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
    var Oc = {
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
    }, kv = {
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
    }, Ga = {}, Ad = new RegExp("^(aria)-[" + Ue + "]*$"), ps = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
    function jd(e, t) {
      {
        if (ar.call(Ga, t) && Ga[t])
          return !0;
        if (ps.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = kv.hasOwnProperty(a) ? a : null;
          if (l == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ga[t] = !0, !0;
          if (t !== l)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Ga[t] = !0, !0;
        }
        if (Ad.test(t)) {
          var s = t.toLowerCase(), d = kv.hasOwnProperty(s) ? s : null;
          if (d == null)
            return Ga[t] = !0, !1;
          if (t !== d)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ga[t] = !0, !0;
        }
      }
      return !0;
    }
    function Mv(e, t) {
      {
        var a = [];
        for (var l in t) {
          var s = jd(e, l);
          s || a.push(l);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Nc(e, t) {
      ki(e, t) || Mv(e, t);
    }
    var Xl = !1;
    function Fd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xl && (Xl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Hd = function() {
    };
    {
      var zn = {}, Yd = /^on./, Ov = /^on[^A-Z]/, Nv = new RegExp("^(aria)-[" + Ue + "]*$"), Lv = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
      Hd = function(e, t, a, l) {
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
          if (Yd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Yd.test(t))
          return Ov.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Nv.test(t) || Lv.test(t))
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
        if (Oc.hasOwnProperty(s)) {
          var T = Oc[s];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), zn[t] = !0, !0;
        } else if (!C && t !== s)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), zn[t] = !0, !0;
        return typeof a == "boolean" && Or(t, a, _, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : C ? !0 : Or(t, a, _, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && _ !== null && _.type === vn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var Uv = function(e, t, a) {
      {
        var l = [];
        for (var s in t) {
          var d = Hd(e, s, t[s], a);
          d || l.push(s);
        }
        var v = l.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        l.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function zv(e, t, a) {
      ki(e, t) || Uv(e, t, a);
    }
    var Mi = 1, hs = 2, Jl = 4, Wg = Mi | hs | Jl, vs = null;
    function ms(e) {
      vs !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vs = e;
    }
    function $g() {
      vs === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vs = null;
    }
    function Av(e) {
      return e === vs;
    }
    function Lc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Di ? t.parentNode : t;
    }
    var Ft = null, fl = null, Oi = null;
    function ou(e) {
      var t = Lu(e);
      if (t) {
        if (typeof Ft != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = Am(a);
          Ft(t.stateNode, t.type, l);
        }
      }
    }
    function jv(e) {
      Ft = e;
    }
    function Uc(e) {
      fl ? Oi ? Oi.push(e) : Oi = [e] : fl = e;
    }
    function ys() {
      return fl !== null || Oi !== null;
    }
    function gs() {
      if (fl) {
        var e = fl, t = Oi;
        if (fl = null, Oi = null, ou(e), t)
          for (var a = 0; a < t.length; a++)
            ou(t[a]);
      }
    }
    var eo = function(e, t) {
      return e(t);
    }, Pd = function() {
    }, Vd = !1;
    function Gg() {
      var e = ys();
      e && (Pd(), gs());
    }
    function Id(e, t, a) {
      if (Vd)
        return e(t, a);
      Vd = !0;
      try {
        return eo(e, t, a);
      } finally {
        Vd = !1, Gg();
      }
    }
    function zc(e, t, a) {
      eo = e, Pd = a;
    }
    function Ac(e) {
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
          return !!(a.disabled && Ac(t));
        default:
          return !1;
      }
    }
    function to(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = Am(a);
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
        var no = {};
        Object.defineProperty(no, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", no, no), window.removeEventListener("test", no, no);
      } catch {
        Ss = !1;
      }
    function Fv(e, t, a, l, s, d, v, S, _) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var Wd = Fv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var $d = document.createElement("react");
      Wd = function(t, a, l, s, d, v, S, _, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), L = !1, O = !0, I = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
        function $() {
          $d.removeEventListener(G, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = I);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          L = !0, $(), a.apply(l, we), O = !1;
        }
        var Ne, vt = !1, ct = !1;
        function H(Y) {
          if (Ne = Y.error, vt = !0, Ne === null && Y.colno === 0 && Y.lineno === 0 && (ct = !0), Y.defaultPrevented && Ne != null && typeof Ne == "object")
            try {
              Ne._suppressLogging = !0;
            } catch {
            }
        }
        var G = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), $d.addEventListener(G, Ae, !1), T.initEvent(G, !1, !1), $d.dispatchEvent(T), B && Object.defineProperty(window, "event", B), L && O && (vt ? ct && (Ne = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ne = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ne)), window.removeEventListener("error", H), !L)
          return $(), Fv.apply(this, arguments);
      };
    }
    var Qg = Wd, dl = !1, Qa = null, Es = !1, pl = null, oi = {
      onError: function(e) {
        dl = !0, Qa = e;
      }
    };
    function ro(e, t, a, l, s, d, v, S, _) {
      dl = !1, Qa = null, Qg.apply(oi, arguments);
    }
    function Ni(e, t, a, l, s, d, v, S, _) {
      if (ro.apply(this, arguments), dl) {
        var C = Qd();
        Es || (Es = !0, pl = C);
      }
    }
    function Gd() {
      if (Es) {
        var e = pl;
        throw Es = !1, pl = null, e;
      }
    }
    function qg() {
      return dl;
    }
    function Qd() {
      if (dl) {
        var e = Qa;
        return dl = !1, Qa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Sa(e) {
      return e._reactInternals;
    }
    function _s(e) {
      return e._reactInternals !== void 0;
    }
    function uu(e, t) {
      e._reactInternals = t;
    }
    var ze = (
      /*                      */
      0
    ), hl = (
      /*                */
      1
    ), It = (
      /*                    */
      2
    ), Xe = (
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
    ), Ge = (
      /*                   */
      128
    ), ln = (
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
    ), vl = (
      /*                   */
      8192
    ), ws = (
      /*             */
      16384
    ), jc = Zt | Xe | ui | Lr | Ea | ws, Hv = (
      /*               */
      32767
    ), ta = (
      /*                   */
      32768
    ), An = (
      /*                */
      65536
    ), Cs = (
      /* */
      131072
    ), qd = (
      /*                       */
      1048576
    ), Zd = (
      /*                    */
      2097152
    ), Ur = (
      /*                 */
      4194304
    ), ml = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), ao = (
      /*              */
      33554432
    ), su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Xe | Ea | 0
    ), Ar = It | Xe | Tt | xt | Lr | _a | vl, ur = Xe | ui | Lr | vl, wa = Zt | Tt, Bn = Ur | ml | Zd, Li = c.ReactCurrentOwner;
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
      return t.tag === U ? a : null;
    }
    function Kd(e) {
      if (e.tag === fe) {
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
    function Fc(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Xd(e) {
      return na(e) === e;
    }
    function ra(e) {
      {
        var t = Li.current;
        if (t !== null && t.tag === D) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), l._warnedAboutRefsInRender = !0;
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
      if (l.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Ca(e) {
      var t = Bt(e);
      return t !== null ? Jd(t) : null;
    }
    function Jd(e) {
      if (e.tag === Q || e.tag === V)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Jd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Yv(e) {
      var t = Bt(e);
      return t !== null ? Hc(t) : null;
    }
    function Hc(e) {
      if (e.tag === Q || e.tag === V)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = Hc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Yc = u.unstable_scheduleCallback, Pv = u.unstable_cancelCallback, Pc = u.unstable_shouldYield, Vv = u.unstable_requestPaint, Jt = u.unstable_now, ep = u.unstable_getCurrentPriorityLevel, Vc = u.unstable_ImmediatePriority, aa = u.unstable_UserBlockingPriority, si = u.unstable_NormalPriority, Ic = u.unstable_LowPriority, yl = u.unstable_IdlePriority, tp = u.unstable_yieldValue, np = u.unstable_setDisableYieldValue, gl = null, jn = null, de = null, fn = !1, Wn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function rp(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ni && (e = ut({}, e, {
          getLaneLabelMap: El,
          injectProfilingHooks: zi
        })), gl = t.inject(e), jn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Iv(e, t) {
      if (jn && typeof jn.onScheduleFiberRoot == "function")
        try {
          jn.onScheduleFiberRoot(gl, e, t);
        } catch (a) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ui(e, t) {
      if (jn && typeof jn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
          if (wn) {
            var l;
            switch (t) {
              case sr:
                l = Vc;
                break;
              case $n:
                l = aa;
                break;
              case ji:
                l = si;
                break;
              case Ns:
                l = yl;
                break;
              default:
                l = si;
                break;
            }
            jn.onCommitFiberRoot(gl, e, l, a);
          }
        } catch (s) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", s));
        }
    }
    function Sl(e) {
      if (jn && typeof jn.onPostCommitFiberRoot == "function")
        try {
          jn.onPostCommitFiberRoot(gl, e);
        } catch (t) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ap(e) {
      if (jn && typeof jn.onCommitFiberUnmount == "function")
        try {
          jn.onCommitFiberUnmount(gl, e);
        } catch (t) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof tp == "function" && (np(e), m(e)), jn && typeof jn.setStrictMode == "function")
        try {
          jn.setStrictMode(gl, e);
        } catch (t) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function zi(e) {
      de = e;
    }
    function El() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wt; a++) {
          var l = Zg(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Bc(e) {
      de !== null && typeof de.markCommitStarted == "function" && de.markCommitStarted(e);
    }
    function ip() {
      de !== null && typeof de.markCommitStopped == "function" && de.markCommitStopped();
    }
    function _l(e) {
      de !== null && typeof de.markComponentRenderStarted == "function" && de.markComponentRenderStarted(e);
    }
    function io() {
      de !== null && typeof de.markComponentRenderStopped == "function" && de.markComponentRenderStopped();
    }
    function Bv(e) {
      de !== null && typeof de.markComponentPassiveEffectMountStarted == "function" && de.markComponentPassiveEffectMountStarted(e);
    }
    function lp() {
      de !== null && typeof de.markComponentPassiveEffectMountStopped == "function" && de.markComponentPassiveEffectMountStopped();
    }
    function Wc(e) {
      de !== null && typeof de.markComponentPassiveEffectUnmountStarted == "function" && de.markComponentPassiveEffectUnmountStarted(e);
    }
    function Wv() {
      de !== null && typeof de.markComponentPassiveEffectUnmountStopped == "function" && de.markComponentPassiveEffectUnmountStopped();
    }
    function $v(e) {
      de !== null && typeof de.markComponentLayoutEffectMountStarted == "function" && de.markComponentLayoutEffectMountStarted(e);
    }
    function Gv() {
      de !== null && typeof de.markComponentLayoutEffectMountStopped == "function" && de.markComponentLayoutEffectMountStopped();
    }
    function $c(e) {
      de !== null && typeof de.markComponentLayoutEffectUnmountStarted == "function" && de.markComponentLayoutEffectUnmountStarted(e);
    }
    function cu() {
      de !== null && typeof de.markComponentLayoutEffectUnmountStopped == "function" && de.markComponentLayoutEffectUnmountStopped();
    }
    function Gc(e, t, a) {
      de !== null && typeof de.markComponentErrored == "function" && de.markComponentErrored(e, t, a);
    }
    function Qv(e, t, a) {
      de !== null && typeof de.markComponentSuspended == "function" && de.markComponentSuspended(e, t, a);
    }
    function qv(e) {
      de !== null && typeof de.markLayoutEffectsStarted == "function" && de.markLayoutEffectsStarted(e);
    }
    function fu() {
      de !== null && typeof de.markLayoutEffectsStopped == "function" && de.markLayoutEffectsStopped();
    }
    function Zv(e) {
      de !== null && typeof de.markPassiveEffectsStarted == "function" && de.markPassiveEffectsStarted(e);
    }
    function Ts() {
      de !== null && typeof de.markPassiveEffectsStopped == "function" && de.markPassiveEffectsStopped();
    }
    function qa(e) {
      de !== null && typeof de.markRenderStarted == "function" && de.markRenderStarted(e);
    }
    function xs() {
      de !== null && typeof de.markRenderYielded == "function" && de.markRenderYielded();
    }
    function du() {
      de !== null && typeof de.markRenderStopped == "function" && de.markRenderStopped();
    }
    function lo(e) {
      de !== null && typeof de.markRenderScheduled == "function" && de.markRenderScheduled(e);
    }
    function op(e, t) {
      de !== null && typeof de.markForceUpdateScheduled == "function" && de.markForceUpdateScheduled(e, t);
    }
    function wl(e, t) {
      de !== null && typeof de.markStateUpdateScheduled == "function" && de.markStateUpdateScheduled(e, t);
    }
    var He = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), en = (
      /*               */
      8
    ), Ta = (
      /*              */
      16
    ), Qc = Math.clz32 ? Math.clz32 : oo, qc = Math.log, up = Math.LN2;
    function oo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (qc(t) / up | 0) | 0;
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
    ), uo = (
      /*            */
      8
    ), $t = (
      /*                     */
      16
    ), so = (
      /*                */
      32
    ), Cl = (
      /*                       */
      4194240
    ), co = (
      /*                        */
      64
    ), xa = (
      /*                        */
      128
    ), Fr = (
      /*                        */
      256
    ), fo = (
      /*                        */
      512
    ), bs = (
      /*                        */
      1024
    ), Rs = (
      /*                        */
      2048
    ), Zc = (
      /*                        */
      4096
    ), Kc = (
      /*                        */
      8192
    ), Xc = (
      /*                        */
      16384
    ), Jc = (
      /*                       */
      32768
    ), ef = (
      /*                       */
      65536
    ), tf = (
      /*                       */
      131072
    ), nf = (
      /*                       */
      262144
    ), rf = (
      /*                       */
      524288
    ), po = (
      /*                       */
      1048576
    ), af = (
      /*                       */
      2097152
    ), ho = (
      /*                            */
      130023424
    ), Ai = (
      /*                             */
      4194304
    ), lf = (
      /*                             */
      8388608
    ), Ds = (
      /*                             */
      16777216
    ), of = (
      /*                             */
      33554432
    ), uf = (
      /*                             */
      67108864
    ), sp = Ai, pu = (
      /*          */
      134217728
    ), sf = (
      /*                          */
      268435455
    ), hu = (
      /*               */
      268435456
    ), Tl = (
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
        if (e & uo)
          return "DefaultHydration";
        if (e & $t)
          return "Default";
        if (e & so)
          return "TransitionHydration";
        if (e & Cl)
          return "Transition";
        if (e & ho)
          return "Retry";
        if (e & pu)
          return "SelectiveHydration";
        if (e & hu)
          return "IdleHydration";
        if (e & Tl)
          return "Idle";
        if (e & Hr)
          return "Offscreen";
      }
    }
    var Ht = -1, cf = co, ff = Ai;
    function vu(e) {
      switch (gn(e)) {
        case Be:
          return Be;
        case ci:
          return ci;
        case ia:
          return ia;
        case uo:
          return uo;
        case $t:
          return $t;
        case so:
          return so;
        case co:
        case xa:
        case Fr:
        case fo:
        case bs:
        case Rs:
        case Zc:
        case Kc:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case po:
        case af:
          return e & Cl;
        case Ai:
        case lf:
        case Ds:
        case of:
        case uf:
          return e & ho;
        case pu:
          return pu;
        case hu:
          return hu;
        case Tl:
          return Tl;
        case Hr:
          return Hr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ks(e, t) {
      var a = e.pendingLanes;
      if (a === q)
        return q;
      var l = q, s = e.suspendedLanes, d = e.pingedLanes, v = a & sf;
      if (v !== q) {
        var S = v & ~s;
        if (S !== q)
          l = vu(S);
        else {
          var _ = v & d;
          _ !== q && (l = vu(_));
        }
      } else {
        var C = a & ~s;
        C !== q ? l = vu(C) : d !== q && (l = vu(d));
      }
      if (l === q)
        return q;
      if (t !== q && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === q) {
        var T = gn(l), L = gn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === $t && (L & Cl) !== q
        )
          return t;
      }
      (l & ia) !== q && (l |= a & $t);
      var O = e.entangledLanes;
      if (O !== q)
        for (var I = e.entanglements, B = l & O; B > 0; ) {
          var $ = xl(B), we = 1 << $;
          l |= I[$], B &= ~we;
        }
      return l;
    }
    function Kv(e, t) {
      for (var a = e.eventTimes, l = Ht; t > 0; ) {
        var s = xl(t), d = 1 << s, v = a[s];
        v > l && (l = v), t &= ~d;
      }
      return l;
    }
    function df(e, t) {
      switch (e) {
        case Be:
        case ci:
        case ia:
          return t + 250;
        case uo:
        case $t:
        case so:
        case co:
        case xa:
        case Fr:
        case fo:
        case bs:
        case Rs:
        case Zc:
        case Kc:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case po:
        case af:
          return t + 5e3;
        case Ai:
        case lf:
        case Ds:
        case of:
        case uf:
          return Ht;
        case pu:
        case hu:
        case Tl:
        case Hr:
          return Ht;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function Kg(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var S = xl(v), _ = 1 << S, C = d[S];
        C === Ht ? ((_ & l) === q || (_ & s) !== q) && (d[S] = df(_, t)) : C <= t && (e.expiredLanes |= _), v &= ~_;
      }
    }
    function Xg(e) {
      return vu(e.pendingLanes);
    }
    function cp(e) {
      var t = e.pendingLanes & ~Hr;
      return t !== q ? t : t & Hr ? Hr : q;
    }
    function mu(e) {
      return (e & Be) !== q;
    }
    function Ms(e) {
      return (e & sf) !== q;
    }
    function pf(e) {
      return (e & ho) === e;
    }
    function Jg(e) {
      var t = Be | ia | $t;
      return (e & t) === q;
    }
    function Xv(e) {
      return (e & Cl) === e;
    }
    function Os(e, t) {
      var a = ci | ia | uo | $t;
      return (t & a) !== q;
    }
    function Jv(e, t) {
      return (t & e.expiredLanes) !== q;
    }
    function fp(e) {
      return (e & Cl) !== q;
    }
    function dp() {
      var e = cf;
      return cf <<= 1, (cf & Cl) === q && (cf = co), e;
    }
    function e0() {
      var e = ff;
      return ff <<= 1, (ff & ho) === q && (ff = Ai), e;
    }
    function gn(e) {
      return e & -e;
    }
    function xn(e) {
      return gn(e);
    }
    function xl(e) {
      return 31 - Qc(e);
    }
    function hf(e) {
      return xl(e);
    }
    function Yr(e, t) {
      return (e & t) !== q;
    }
    function vo(e, t) {
      return (e & t) === t;
    }
    function Je(e, t) {
      return e | t;
    }
    function yu(e, t) {
      return e & ~t;
    }
    function pp(e, t) {
      return e & t;
    }
    function em(e) {
      return e;
    }
    function tm(e, t) {
      return e !== pt && e < t ? e : t;
    }
    function vf(e) {
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function mo(e, t, a) {
      e.pendingLanes |= t, t !== Tl && (e.suspendedLanes = q, e.pingedLanes = q);
      var l = e.eventTimes, s = hf(t);
      l[s] = a;
    }
    function hp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var s = xl(l), d = 1 << s;
        a[s] = Ht, l &= ~d;
      }
    }
    function vp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function mp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, s = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var S = xl(v), _ = 1 << S;
        l[S] = q, s[S] = Ht, d[S] = Ht, v &= ~_;
      }
    }
    function gu(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, s = a; s; ) {
        var d = xl(s), v = 1 << d;
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
          l = uo;
          break;
        case co:
        case xa:
        case Fr:
        case fo:
        case bs:
        case Rs:
        case Zc:
        case Kc:
        case Xc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case rf:
        case po:
        case af:
        case Ai:
        case lf:
        case Ds:
        case of:
        case uf:
          l = so;
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
    function yp(e, t, a) {
      if (Wn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var s = hf(a), d = 1 << s, v = l[s];
          v.add(t), a &= ~d;
        }
    }
    function mf(e, t) {
      if (Wn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var s = hf(t), d = 1 << s, v = a[s];
          v.size > 0 && (v.forEach(function(S) {
            var _ = S.alternate;
            (_ === null || !l.has(_)) && l.add(S);
          }), v.clear()), t &= ~d;
        }
    }
    function gp(e, t) {
      return null;
    }
    var sr = Be, $n = ia, ji = $t, Ns = Tl, yo = pt;
    function ba() {
      return yo;
    }
    function bn(e) {
      yo = e;
    }
    function Ls(e, t) {
      var a = yo;
      try {
        return yo = e, t();
      } finally {
        yo = a;
      }
    }
    function cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function n0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Sp(e, t) {
      return e !== 0 && e < t;
    }
    function Us(e) {
      var t = gn(e);
      return Sp(sr, t) ? Sp($n, t) ? Ms(t) ? ji : Ns : $n : sr;
    }
    function Rn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var nm;
    function Te(e) {
      nm = e;
    }
    function Su(e) {
      nm(e);
    }
    var zs;
    function rm(e) {
      zs = e;
    }
    var am;
    function As(e) {
      am = e;
    }
    var js;
    function Ep(e) {
      js = e;
    }
    var _p;
    function im(e) {
      _p = e;
    }
    var yf = !1, Eu = [], fi = null, Kt = null, Fn = null, Ra = /* @__PURE__ */ new Map(), _u = /* @__PURE__ */ new Map(), Fi = [], Za = [
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
    function lm(e) {
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
    function om(e, t) {
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
          _u.delete(l);
          break;
        }
      }
    }
    function wu(e, t, a, l, s, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = di(t, a, l, s, d);
        if (t !== null) {
          var S = Lu(t);
          S !== null && zs(S);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var _ = e.targetContainers;
      return s !== null && _.indexOf(s) === -1 && _.push(s), e;
    }
    function um(e, t, a, l, s) {
      switch (t) {
        case "focusin": {
          var d = s;
          return fi = wu(fi, e, t, a, l, d), !0;
        }
        case "dragenter": {
          var v = s;
          return Kt = wu(Kt, e, t, a, l, v), !0;
        }
        case "mouseover": {
          var S = s;
          return Fn = wu(Fn, e, t, a, l, S), !0;
        }
        case "pointerover": {
          var _ = s, C = _.pointerId;
          return Ra.set(C, wu(Ra.get(C) || null, e, t, a, l, _)), !0;
        }
        case "gotpointercapture": {
          var T = s, L = T.pointerId;
          return _u.set(L, wu(_u.get(L) || null, e, t, a, l, T)), !0;
        }
      }
      return !1;
    }
    function wp(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = na(t);
        if (a !== null) {
          var l = a.tag;
          if (l === fe) {
            var s = Kd(a);
            if (s !== null) {
              e.blockedOn = s, _p(e.priority, function() {
                am(a);
              });
              return;
            }
          } else if (l === U) {
            var d = a.stateNode;
            if (Rn(d)) {
              e.blockedOn = Fc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function sm(e) {
      for (var t = js(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < Fi.length && Sp(t, Fi[l].priority); l++)
        ;
      Fi.splice(l, 0, a), l === 0 && wp(a);
    }
    function gf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = go(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var s = e.nativeEvent, d = new s.constructor(s.type, s);
          ms(d), s.target.dispatchEvent(d), $g();
        } else {
          var v = Lu(l);
          return v !== null && zs(v), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Fs(e, t, a) {
      gf(e) && a.delete(t);
    }
    function Cp() {
      yf = !1, fi !== null && gf(fi) && (fi = null), Kt !== null && gf(Kt) && (Kt = null), Fn !== null && gf(Fn) && (Fn = null), Ra.forEach(Fs), _u.forEach(Fs);
    }
    function fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Cp)));
    }
    function st(e) {
      if (Eu.length > 0) {
        fr(Eu[0], e);
        for (var t = 1; t < Eu.length; t++) {
          var a = Eu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fi !== null && fr(fi, e), Kt !== null && fr(Kt, e), Fn !== null && fr(Fn, e);
      var l = function(S) {
        return fr(S, e);
      };
      Ra.forEach(l), _u.forEach(l);
      for (var s = 0; s < Fi.length; s++) {
        var d = Fi[s];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; Fi.length > 0; ) {
        var v = Fi[0];
        if (v.blockedOn !== null)
          break;
        wp(v), v.blockedOn === null && Fi.shift();
      }
    }
    var tn = c.ReactCurrentBatchConfig, on = !0;
    function Hn(e) {
      on = !!e;
    }
    function la() {
      return on;
    }
    function Cu(e, t, a) {
      var l = gr(t), s;
      switch (l) {
        case sr:
          s = Dn;
          break;
        case $n:
          s = Hs;
          break;
        case ji:
        default:
          s = Hi;
          break;
      }
      return s.bind(null, t, a, e);
    }
    function Dn(e, t, a, l) {
      var s = ba(), d = tn.transition;
      tn.transition = null;
      try {
        bn(sr), Hi(e, t, a, l);
      } finally {
        bn(s), tn.transition = d;
      }
    }
    function Hs(e, t, a, l) {
      var s = ba(), d = tn.transition;
      tn.transition = null;
      try {
        bn($n), Hi(e, t, a, l);
      } finally {
        bn(s), tn.transition = d;
      }
    }
    function Hi(e, t, a, l) {
      on && Sf(e, t, a, l);
    }
    function Sf(e, t, a, l) {
      var s = go(e, t, a, l);
      if (s === null) {
        w0(e, t, l, Tu, a), om(e, l);
        return;
      }
      if (um(s, e, t, a, l)) {
        l.stopPropagation();
        return;
      }
      if (om(e, l), t & Jl && lm(e)) {
        for (; s !== null; ) {
          var d = Lu(s);
          d !== null && Su(d);
          var v = go(e, t, a, l);
          if (v === null && w0(e, t, l, Tu, a), v === s)
            break;
          s = v;
        }
        s !== null && l.stopPropagation();
        return;
      }
      w0(e, t, l, null, a);
    }
    var Tu = null;
    function go(e, t, a, l) {
      Tu = null;
      var s = Lc(l), d = $s(s);
      if (d !== null) {
        var v = na(d);
        if (v === null)
          d = null;
        else {
          var S = v.tag;
          if (S === fe) {
            var _ = Kd(v);
            if (_ !== null)
              return _;
            d = null;
          } else if (S === U) {
            var C = v.stateNode;
            if (Rn(C))
              return Fc(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return Tu = d, null;
    }
    function gr(e) {
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
          var t = ep();
          switch (t) {
            case Vc:
              return sr;
            case aa:
              return $n;
            case si:
            case Ic:
              return ji;
            case yl:
              return Ns;
            default:
              return ji;
          }
        }
        default:
          return ji;
      }
    }
    function Tp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function xu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Yi(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function Ef(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var So = null, pi = null, bl = null;
    function Rl(e) {
      return So = e, pi = wf(), !0;
    }
    function _f() {
      So = null, pi = null, bl = null;
    }
    function bu() {
      if (bl)
        return bl;
      var e, t = pi, a = t.length, l, s = wf(), d = s.length;
      for (e = 0; e < a && t[e] === s[e]; e++)
        ;
      var v = a - e;
      for (l = 1; l <= v && t[a - l] === s[d - l]; l++)
        ;
      var S = l > 1 ? 1 - l : void 0;
      return bl = s.slice(e, S), bl;
    }
    function wf() {
      return "value" in So ? So.value : So.textContent;
    }
    function Eo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
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
        return C ? this.isDefaultPrevented = _o : this.isDefaultPrevented = dr, this.isPropagationStopped = dr, this;
      }
      return ut(t.prototype, {
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
    }, hr = Sn(pr), Ru = ut({}, pr, {
      view: 0,
      detail: 0
    }), xp = Sn(Ru), Ys, bp, Da;
    function cm(e) {
      e !== Da && (Da && e.type === "mousemove" ? (Ys = e.screenX - Da.screenX, bp = e.screenY - Da.screenY) : (Ys = 0, bp = 0), Da = e);
    }
    var Du = ut({}, Ru, {
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
      getModifierState: xf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cm(e), Ys);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : bp;
      }
    }), Dl = Sn(Du), Rp = ut({}, Du, {
      dataTransfer: 0
    }), wo = Sn(Rp), fm = ut({}, Ru, {
      relatedTarget: 0
    }), Cf = Sn(fm), Dp = ut({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Tf = Sn(Dp), r0 = ut({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), a0 = Sn(r0), dm = ut({}, pr, {
      data: 0
    }), kp = Sn(dm), Co = kp, i0 = {
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
    function pm(e) {
      if (e.key) {
        var t = i0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Eo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ku[e.keyCode] || "Unidentified" : "";
    }
    var un = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function l0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = un[e];
      return l ? !!a[l] : !1;
    }
    function xf(e) {
      return l0;
    }
    var o0 = ut({}, Ru, {
      key: pm,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xf,
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
    }), u0 = Sn(o0), hm = ut({}, Du, {
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
    }), Mp = Sn(hm), s0 = ut({}, Ru, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xf
    }), ka = Sn(s0), Op = ut({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), c0 = Sn(Op), kl = ut({}, Du, {
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
    }), bf = Sn(kl), To = [9, 13, 27, 32], Ps = 229, Vs = On && "CompositionEvent" in window, xo = null;
    On && "documentMode" in document && (xo = document.documentMode);
    var f0 = On && "TextEvent" in window && !xo, Rf = On && (!Vs || xo && xo > 8 && xo <= 11), vm = 32, Np = String.fromCharCode(vm);
    function mm() {
      Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Mr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Is = !1;
    function Df(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ym(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Lp(e, t) {
      return e === "keydown" && t.keyCode === Ps;
    }
    function gm(e, t) {
      switch (e) {
        case "keyup":
          return To.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Up(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function kf(e) {
      return e.locale === "ko";
    }
    var Pi = !1;
    function zp(e, t, a, l, s) {
      var d, v;
      if (Vs ? d = ym(t) : Pi ? gm(t, l) && (d = "onCompositionEnd") : Lp(t, l) && (d = "onCompositionStart"), !d)
        return null;
      Rf && !kf(l) && (!Pi && d === "onCompositionStart" ? Pi = Rl(s) : d === "onCompositionEnd" && Pi && (v = bu()));
      var S = Cm(a, d);
      if (S.length > 0) {
        var _ = new kp(d, t, null, l, s);
        if (e.push({
          event: _,
          listeners: S
        }), v)
          _.data = v;
        else {
          var C = Up(l);
          C !== null && (_.data = C);
        }
      }
    }
    function Mf(e, t) {
      switch (e) {
        case "compositionend":
          return Up(t);
        case "keypress":
          var a = t.which;
          return a !== vm ? null : (Is = !0, Np);
        case "textInput":
          var l = t.data;
          return l === Np && Is ? null : l;
        default:
          return null;
      }
    }
    function Sm(e, t) {
      if (Pi) {
        if (e === "compositionend" || !Vs && gm(e, t)) {
          var a = bu();
          return _f(), Pi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Df(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Rf && !kf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function d0(e, t, a, l, s) {
      var d;
      if (f0 ? d = Mf(t, l) : d = Sm(t, l), !d)
        return null;
      var v = Cm(a, "onBeforeInput");
      if (v.length > 0) {
        var S = new Co("onBeforeInput", "beforeinput", null, l, s);
        e.push({
          event: S,
          listeners: v
        }), S.data = d;
      }
    }
    function Of(e, t, a, l, s, d, v) {
      zp(e, t, a, l, s), d0(e, t, a, l, s);
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
    function Mu(e) {
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
    function Nf() {
      Mr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      Uc(l);
      var s = Cm(t, "onChange");
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
      n(t, o, e, Lc(e)), Id(y, t);
    }
    function y(e) {
      __(e, 0);
    }
    function w(e) {
      var t = Ff(e);
      if (iv(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var M = !1;
    On && (M = h0("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", re);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", re), r = null, o = null);
    }
    function re(e) {
      e.propertyName === "value" && w(o) && h(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (X(), W(t, a)) : e === "focusout" && X();
    }
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(o);
    }
    function be(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ke(e, t) {
      if (e === "click")
        return w(t);
    }
    function dn(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function j(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || sl(e, "number", e.value);
    }
    function N(e, t, a, l, s, d, v) {
      var S = a ? Ff(a) : window, _, C;
      if (f(S) ? _ = x : Mu(S) ? M ? _ = dn : (_ = ge, C = K) : be(S) && (_ = ke), _) {
        var T = _(t, a);
        if (T) {
          n(e, T, l, s);
          return;
        }
      }
      C && C(t, S, a), t === "focusout" && j(S);
    }
    function P() {
      pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function oe(e, t, a, l, s, d, v) {
      var S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout";
      if (S && !Av(l)) {
        var C = l.relatedTarget || l.fromElement;
        if (C && ($s(C) || qp(C)))
          return;
      }
      if (!(!_ && !S)) {
        var T;
        if (s.window === s)
          T = s;
        else {
          var L = s.ownerDocument;
          L ? T = L.defaultView || L.parentWindow : T = window;
        }
        var O, I;
        if (_) {
          var B = l.relatedTarget || l.toElement;
          if (O = a, I = B ? $s(B) : null, I !== null) {
            var $ = na(I);
            (I !== $ || I.tag !== Q && I.tag !== V) && (I = null);
          }
        } else
          O = null, I = a;
        if (O !== I) {
          var we = Dl, Ae = "onMouseLeave", Ne = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Mp, Ae = "onPointerLeave", Ne = "onPointerEnter", vt = "pointer");
          var ct = O == null ? T : Ff(O), H = I == null ? T : Ff(I), G = new we(Ae, vt + "leave", O, l, s);
          G.target = ct, G.relatedTarget = H;
          var Y = null, ae = $s(s);
          if (ae === a) {
            var Ce = new we(Ne, vt + "enter", I, l, s);
            Ce.target = H, Ce.relatedTarget = ct, Y = Ce;
          }
          eR(e, G, Y, O, I);
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
    function Qe(e) {
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
      for (var a = Qe(e), l = 0, s = 0; a; ) {
        if (a.nodeType === Di) {
          if (s = l + a.textContent.length, l <= t && s >= t)
            return {
              node: a,
              offset: t - l
            };
          l = s;
        }
        a = Qe(Yn(a));
      }
    }
    function Ml(e) {
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
      var d = 0, v = -1, S = -1, _ = 0, C = 0, T = e, L = null;
      e:
        for (; ; ) {
          for (var O = null; T === t && (a === 0 || T.nodeType === Di) && (v = d + a), T === l && (s === 0 || T.nodeType === Di) && (S = d + s), T.nodeType === Di && (d += T.nodeValue.length), (O = T.firstChild) !== null; )
            L = T, T = O;
          for (; ; ) {
            if (T === e)
              break e;
            if (L === t && ++_ === a && (v = d), L === l && ++C === s && (S = d), (O = T.nextSibling) !== null)
              break;
            T = L, L = T.parentNode;
          }
          T = O;
        }
      return v === -1 || S === -1 ? null : {
        start: v,
        end: S
      };
    }
    function zb(e, t) {
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
          var L = a.createRange();
          L.setStart(C.node, C.offset), s.removeAllRanges(), v > S ? (s.addRange(L), s.extend(T.node, T.offset)) : (L.setEnd(T.node, T.offset), s.addRange(L));
        }
      }
    }
    function s_(e) {
      return e && e.nodeType === Di;
    }
    function c_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : s_(e) ? !1 : s_(t) ? c_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Ab(e) {
      return e && e.ownerDocument && c_(e.ownerDocument.documentElement, e);
    }
    function jb(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function f_() {
      for (var e = window, t = Ec(); t instanceof e.HTMLIFrameElement; ) {
        if (jb(t))
          e = t.contentWindow;
        else
          return t;
        t = Ec(e.document);
      }
      return t;
    }
    function m0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Fb() {
      var e = f_();
      return {
        focusedElem: e,
        selectionRange: m0(e) ? Yb(e) : null
      };
    }
    function Hb(e) {
      var t = f_(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && Ab(a)) {
        l !== null && m0(a) && Pb(a, l);
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
    function Yb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ml(e), t || {
        start: 0,
        end: 0
      };
    }
    function Pb(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : zb(e, t);
    }
    var Vb = On && "documentMode" in document && document.documentMode <= 11;
    function Ib() {
      Mr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Lf = null, y0 = null, Ap = null, g0 = !1;
    function Bb(e) {
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
    function Wb(e) {
      return e.window === e ? e.document : e.nodeType === $a ? e : e.ownerDocument;
    }
    function d_(e, t, a) {
      var l = Wb(a);
      if (!(g0 || Lf == null || Lf !== Ec(l))) {
        var s = Bb(Lf);
        if (!Ap || !Le(Ap, s)) {
          Ap = s;
          var d = Cm(y0, "onSelect");
          if (d.length > 0) {
            var v = new hr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: d
            }), v.target = Lf;
          }
        }
      }
    }
    function $b(e, t, a, l, s, d, v) {
      var S = a ? Ff(a) : window;
      switch (t) {
        case "focusin":
          (Mu(S) || S.contentEditable === "true") && (Lf = S, y0 = a, Ap = null);
          break;
        case "focusout":
          Lf = null, y0 = null, Ap = null;
          break;
        case "mousedown":
          g0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          g0 = !1, d_(e, l, s);
          break;
        case "selectionchange":
          if (Vb)
            break;
        case "keydown":
        case "keyup":
          d_(e, l, s);
      }
    }
    function Em(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Uf = {
      animationend: Em("Animation", "AnimationEnd"),
      animationiteration: Em("Animation", "AnimationIteration"),
      animationstart: Em("Animation", "AnimationStart"),
      transitionend: Em("Transition", "TransitionEnd")
    }, S0 = {}, p_ = {};
    On && (p_ = document.createElement("div").style, "AnimationEvent" in window || (delete Uf.animationend.animation, delete Uf.animationiteration.animation, delete Uf.animationstart.animation), "TransitionEvent" in window || delete Uf.transitionend.transition);
    function _m(e) {
      if (S0[e])
        return S0[e];
      if (!Uf[e])
        return e;
      var t = Uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in p_)
          return S0[e] = t[a];
      return e;
    }
    var h_ = _m("animationend"), v_ = _m("animationiteration"), m_ = _m("animationstart"), y_ = _m("transitionend"), g_ = /* @__PURE__ */ new Map(), S_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ou(e, t) {
      g_.set(e, t), Mr(t, [e]);
    }
    function Gb() {
      for (var e = 0; e < S_.length; e++) {
        var t = S_[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Ou(a, "on" + l);
      }
      Ou(h_, "onAnimationEnd"), Ou(v_, "onAnimationIteration"), Ou(m_, "onAnimationStart"), Ou("dblclick", "onDoubleClick"), Ou("focusin", "onFocus"), Ou("focusout", "onBlur"), Ou(y_, "onTransitionEnd");
    }
    function Qb(e, t, a, l, s, d, v) {
      var S = g_.get(t);
      if (S !== void 0) {
        var _ = hr, C = t;
        switch (t) {
          case "keypress":
            if (Eo(l) === 0)
              return;
          case "keydown":
          case "keyup":
            _ = u0;
            break;
          case "focusin":
            C = "focus", _ = Cf;
            break;
          case "focusout":
            C = "blur", _ = Cf;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Cf;
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
            _ = Dl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = wo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = ka;
            break;
          case h_:
          case v_:
          case m_:
            _ = Tf;
            break;
          case y_:
            _ = c0;
            break;
          case "scroll":
            _ = xp;
            break;
          case "wheel":
            _ = bf;
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
            _ = Mp;
            break;
        }
        var T = (d & Jl) !== 0;
        {
          var L = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = Xb(a, S, l.type, T, L);
          if (O.length > 0) {
            var I = new _(S, C, null, l, s);
            e.push({
              event: I,
              listeners: O
            });
          }
        }
      }
    }
    Gb(), P(), Nf(), Ib(), mm();
    function qb(e, t, a, l, s, d, v) {
      Qb(e, t, a, l, s, d);
      var S = (d & Wg) === 0;
      S && (oe(e, t, a, l, s), N(e, t, a, l, s), $b(e, t, a, l, s), Of(e, t, a, l, s));
    }
    var jp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], E0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(jp));
    function E_(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Ni(l, t, void 0, e), e.currentTarget = null;
    }
    function Zb(e, t, a) {
      var l;
      if (a)
        for (var s = t.length - 1; s >= 0; s--) {
          var d = t[s], v = d.instance, S = d.currentTarget, _ = d.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          E_(e, _, S), l = v;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], L = T.instance, O = T.currentTarget, I = T.listener;
          if (L !== l && e.isPropagationStopped())
            return;
          E_(e, I, O), l = L;
        }
    }
    function __(e, t) {
      for (var a = (t & Jl) !== 0, l = 0; l < e.length; l++) {
        var s = e[l], d = s.event, v = s.listeners;
        Zb(d, v, a);
      }
      Gd();
    }
    function Kb(e, t, a, l, s) {
      var d = Lc(a), v = [];
      qb(v, e, l, a, d, t), __(v, t);
    }
    function nn(e, t) {
      E0.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = RD(t), s = tR(e, a);
      l.has(s) || (w_(t, e, hs, a), l.add(s));
    }
    function _0(e, t, a) {
      E0.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= Jl), w_(a, e, l, t);
    }
    var wm = "_reactListening" + Math.random().toString(36).slice(2);
    function Fp(e) {
      if (!e[wm]) {
        e[wm] = !0, rr.forEach(function(a) {
          a !== "selectionchange" && (E0.has(a) || _0(a, !1, e), _0(a, !0, e));
        });
        var t = e.nodeType === $a ? e : e.ownerDocument;
        t !== null && (t[wm] || (t[wm] = !0, _0("selectionchange", !1, t)));
      }
    }
    function w_(e, t, a, l, s) {
      var d = Cu(e, t, a), v = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Yi(e, t, d, v) : xu(e, t, d) : v !== void 0 ? Ef(e, t, d, v) : Tp(e, t, d);
    }
    function C_(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function w0(e, t, a, l, s) {
      var d = l;
      if (!(t & Mi) && !(t & hs)) {
        var v = s;
        if (l !== null) {
          var S = l;
          e:
            for (; ; ) {
              if (S === null)
                return;
              var _ = S.tag;
              if (_ === U || _ === A) {
                var C = S.stateNode.containerInfo;
                if (C_(C, v))
                  break;
                if (_ === A)
                  for (var T = S.return; T !== null; ) {
                    var L = T.tag;
                    if (L === U || L === A) {
                      var O = T.stateNode.containerInfo;
                      if (C_(O, v))
                        return;
                    }
                    T = T.return;
                  }
                for (; C !== null; ) {
                  var I = $s(C);
                  if (I === null)
                    return;
                  var B = I.tag;
                  if (B === Q || B === V) {
                    S = d = I;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              S = S.return;
            }
        }
      }
      Id(function() {
        return Kb(e, t, a, d);
      });
    }
    function Hp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Xb(e, t, a, l, s, d) {
      for (var v = t !== null ? t + "Capture" : null, S = l ? v : t, _ = [], C = e, T = null; C !== null; ) {
        var L = C, O = L.stateNode, I = L.tag;
        if (I === Q && O !== null && (T = O, S !== null)) {
          var B = to(C, S);
          B != null && _.push(Hp(C, B, T));
        }
        if (s)
          break;
        C = C.return;
      }
      return _;
    }
    function Cm(e, t) {
      for (var a = t + "Capture", l = [], s = e; s !== null; ) {
        var d = s, v = d.stateNode, S = d.tag;
        if (S === Q && v !== null) {
          var _ = v, C = to(s, a);
          C != null && l.unshift(Hp(s, C, _));
          var T = to(s, t);
          T != null && l.push(Hp(s, T, _));
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
      while (e && e.tag !== Q);
      return e || null;
    }
    function Jb(e, t) {
      for (var a = e, l = t, s = 0, d = a; d; d = zf(d))
        s++;
      for (var v = 0, S = l; S; S = zf(S))
        v++;
      for (; s - v > 0; )
        a = zf(a), s--;
      for (; v - s > 0; )
        l = zf(l), v--;
      for (var _ = s; _--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = zf(a), l = zf(l);
      }
      return null;
    }
    function T_(e, t, a, l, s) {
      for (var d = t._reactName, v = [], S = a; S !== null && S !== l; ) {
        var _ = S, C = _.alternate, T = _.stateNode, L = _.tag;
        if (C !== null && C === l)
          break;
        if (L === Q && T !== null) {
          var O = T;
          if (s) {
            var I = to(S, d);
            I != null && v.unshift(Hp(S, I, O));
          } else if (!s) {
            var B = to(S, d);
            B != null && v.push(Hp(S, B, O));
          }
        }
        S = S.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function eR(e, t, a, l, s) {
      var d = l && s ? Jb(l, s) : null;
      l !== null && T_(e, t, l, d, !1), s !== null && a !== null && T_(e, a, s, d, !0);
    }
    function tR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ma = !1, Yp = "dangerouslySetInnerHTML", Tm = "suppressContentEditableWarning", Nu = "suppressHydrationWarning", x_ = "autoFocus", Bs = "children", Ws = "style", xm = "__html", C0, bm, Pp, b_, Rm, R_, D_;
    C0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, bm = function(e, t) {
      Nc(e, t), Fd(e, t), zv(e, t, {
        registrationNameDependencies: kr,
        possibleRegistrationNames: ri
      });
    }, R_ = On && !document.documentMode, Pp = function(e, t, a) {
      if (!Ma) {
        var l = Dm(a), s = Dm(t);
        s !== l && (Ma = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(l)));
      }
    }, b_ = function(e) {
      if (!Ma) {
        Ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Rm = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, D_ = function(e, t) {
      var a = e.namespaceURI === Ri ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nR = /\r\n?/g, rR = /\u0000|\uFFFD/g;
    function Dm(e) {
      Ha(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nR, `
`).replace(rR, "");
    }
    function km(e, t, a, l) {
      var s = Dm(t), d = Dm(e);
      if (d !== s && (l && (Ma || (Ma = !0, g('Text content did not match. Server: "%s" Client: "%s"', d, s))), a && _n))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function k_(e) {
      return e.nodeType === $a ? e : e.ownerDocument;
    }
    function aR() {
    }
    function Mm(e) {
      e.onclick = aR;
    }
    function iR(e, t, a, l, s) {
      for (var d in l)
        if (l.hasOwnProperty(d)) {
          var v = l[d];
          if (d === Ws)
            v && Object.freeze(v), xv(t, v);
          else if (d === Yp) {
            var S = v ? v[xm] : void 0;
            S != null && hv(t, S);
          } else if (d === Bs)
            if (typeof v == "string") {
              var _ = e !== "textarea" || v !== "";
              _ && Dc(t, v);
            } else
              typeof v == "number" && Dc(t, "" + v);
          else
            d === Tm || d === Nu || d === x_ || (kr.hasOwnProperty(d) ? v != null && (typeof v != "function" && Rm(d, v), d === "onScroll" && nn("scroll", t)) : v != null && li(t, d, v, s));
        }
    }
    function lR(e, t, a, l) {
      for (var s = 0; s < t.length; s += 2) {
        var d = t[s], v = t[s + 1];
        d === Ws ? xv(e, v) : d === Yp ? hv(e, v) : d === Bs ? Dc(e, v) : li(e, d, v, l);
      }
    }
    function oR(e, t, a, l) {
      var s, d = k_(a), v, S = l;
      if (S === Ri && (S = bc(e)), S === Ri) {
        if (s = ki(e, t), !s && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return S === Ri && !s && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !ar.call(C0, e) && (C0[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function uR(e, t) {
      return k_(t).createTextNode(e);
    }
    function sR(e, t, a, l) {
      var s = ki(t, a);
      bm(t, a);
      var d;
      switch (t) {
        case "dialog":
          nn("cancel", e), nn("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          nn("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < jp.length; v++)
            nn(jp[v], e);
          d = a;
          break;
        case "source":
          nn("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          nn("error", e), nn("load", e), d = a;
          break;
        case "details":
          nn("toggle", e), d = a;
          break;
        case "input":
          us(e, a), d = os(e, a), nn("invalid", e);
          break;
        case "option":
          Tc(e, a), d = a;
          break;
        case "select":
          cv(e, a), d = Rd(e, a), nn("invalid", e);
          break;
        case "textarea":
          fv(e, a), d = kd(e, a), nn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Mc(t, d), iR(t, e, l, d, s), t) {
        case "input":
          Zl(e), ss(e, a, !1);
          break;
        case "textarea":
          Zl(e), pv(e);
          break;
        case "option":
          bd(e, a);
          break;
        case "select":
          Ug(e, a);
          break;
        default:
          typeof d.onClick == "function" && Mm(e);
          break;
      }
    }
    function cR(e, t, a, l, s) {
      bm(t, l);
      var d = null, v, S;
      switch (t) {
        case "input":
          v = os(e, a), S = os(e, l), d = [];
          break;
        case "select":
          v = Rd(e, a), S = Rd(e, l), d = [];
          break;
        case "textarea":
          v = kd(e, a), S = kd(e, l), d = [];
          break;
        default:
          v = a, S = l, typeof v.onClick != "function" && typeof S.onClick == "function" && Mm(e);
          break;
      }
      Mc(t, S);
      var _, C, T = null;
      for (_ in v)
        if (!(S.hasOwnProperty(_) || !v.hasOwnProperty(_) || v[_] == null))
          if (_ === Ws) {
            var L = v[_];
            for (C in L)
              L.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else
            _ === Yp || _ === Bs || _ === Tm || _ === Nu || _ === x_ || (kr.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
      for (_ in S) {
        var O = S[_], I = v != null ? v[_] : void 0;
        if (!(!S.hasOwnProperty(_) || O === I || O == null && I == null))
          if (_ === Ws)
            if (O && Object.freeze(O), I) {
              for (C in I)
                I.hasOwnProperty(C) && (!O || !O.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in O)
                O.hasOwnProperty(C) && I[C] !== O[C] && (T || (T = {}), T[C] = O[C]);
            } else
              T || (d || (d = []), d.push(_, T)), T = O;
          else if (_ === Yp) {
            var B = O ? O[xm] : void 0, $ = I ? I[xm] : void 0;
            B != null && $ !== B && (d = d || []).push(_, B);
          } else
            _ === Bs ? (typeof O == "string" || typeof O == "number") && (d = d || []).push(_, "" + O) : _ === Tm || _ === Nu || (kr.hasOwnProperty(_) ? (O != null && (typeof O != "function" && Rm(_, O), _ === "onScroll" && nn("scroll", e)), !d && I !== O && (d = [])) : (d = d || []).push(_, O));
      }
      return T && (ds(T, S[Ws]), (d = d || []).push(Ws, T)), d;
    }
    function fR(e, t, a, l, s) {
      a === "input" && s.type === "radio" && s.name != null && xd(e, s);
      var d = ki(a, l), v = ki(a, s);
      switch (lR(e, t, d, v), a) {
        case "input":
          eu(e, s);
          break;
        case "textarea":
          dv(e, s);
          break;
        case "select":
          zg(e, s);
          break;
      }
    }
    function dR(e) {
      {
        var t = e.toLowerCase();
        return Oc.hasOwnProperty(t) && Oc[t] || null;
      }
    }
    function pR(e, t, a, l, s, d, v) {
      var S, _;
      switch (S = ki(t, a), bm(t, a), t) {
        case "dialog":
          nn("cancel", e), nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          nn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < jp.length; C++)
            nn(jp[C], e);
          break;
        case "source":
          nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          nn("error", e), nn("load", e);
          break;
        case "details":
          nn("toggle", e);
          break;
        case "input":
          us(e, a), nn("invalid", e);
          break;
        case "option":
          Tc(e, a);
          break;
        case "select":
          cv(e, a), nn("invalid", e);
          break;
        case "textarea":
          fv(e, a), nn("invalid", e);
          break;
      }
      Mc(t, a);
      {
        _ = /* @__PURE__ */ new Set();
        for (var T = e.attributes, L = 0; L < T.length; L++) {
          var O = T[L].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              _.add(T[L].name);
          }
        }
      }
      var I = null;
      for (var B in a)
        if (a.hasOwnProperty(B)) {
          var $ = a[B];
          if (B === Bs)
            typeof $ == "string" ? e.textContent !== $ && (a[Nu] !== !0 && km(e.textContent, $, d, v), I = [Bs, $]) : typeof $ == "number" && e.textContent !== "" + $ && (a[Nu] !== !0 && km(e.textContent, $, d, v), I = [Bs, "" + $]);
          else if (kr.hasOwnProperty(B))
            $ != null && (typeof $ != "function" && Rm(B, $), B === "onScroll" && nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var we = void 0, Ae = S && Vn ? null : Xr(B);
            if (a[Nu] !== !0) {
              if (!(B === Tm || B === Nu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              B === "value" || B === "checked" || B === "selected")) {
                if (B === Yp) {
                  var Ne = e.innerHTML, vt = $ ? $[xm] : void 0;
                  if (vt != null) {
                    var ct = D_(e, vt);
                    ct !== Ne && Pp(B, Ne, ct);
                  }
                } else if (B === Ws) {
                  if (_.delete(B), R_) {
                    var H = Ig($);
                    we = e.getAttribute("style"), H !== we && Pp(B, we, H);
                  }
                } else if (S && !Vn)
                  _.delete(B.toLowerCase()), we = Zo(e, B, $), $ !== we && Pp(B, we, $);
                else if (!cn(B, Ae, S) && !Yt(B, $, Ae, S)) {
                  var G = !1;
                  if (Ae !== null)
                    _.delete(Ae.attributeName), we = Gl(e, B, $, Ae);
                  else {
                    var Y = l;
                    if (Y === Ri && (Y = bc(t)), Y === Ri)
                      _.delete(B.toLowerCase());
                    else {
                      var ae = dR(B);
                      ae !== null && ae !== B && (G = !0, _.delete(ae)), _.delete(B);
                    }
                    we = Zo(e, B, $);
                  }
                  var Ce = Vn;
                  !Ce && $ !== we && !G && Pp(B, we, $);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      _.size > 0 && a[Nu] !== !0 && b_(_), t) {
        case "input":
          Zl(e), ss(e, a, !0);
          break;
        case "textarea":
          Zl(e), pv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Mm(e);
          break;
      }
      return I;
    }
    function hR(e, t, a) {
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
    function vR(e, t, a) {
      switch (t) {
        case "input":
          lv(e, a);
          return;
        case "textarea":
          Md(e, a);
          return;
        case "select":
          Ag(e, a);
          return;
      }
    }
    var Vp = function() {
    }, Ip = function() {
    };
    {
      var mR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M_ = [
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
      ], yR = M_.concat(["button"]), gR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], O_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ip = function(e, t) {
        var a = ut({}, e || O_), l = {
          tag: t
        };
        return M_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), mR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var SR = function(e, t) {
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
            return gR.indexOf(t) === -1;
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
      }, ER = function(e, t) {
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
      }, N_ = {};
      Vp = function(e, t, a) {
        a = a || O_;
        var l = a.current, s = l && l.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = SR(e, s) ? null : l, v = d ? null : ER(e, a), S = d || v;
        if (S) {
          var _ = S.tag, C = !!d + "|" + e + "|" + _;
          if (!N_[C]) {
            N_[C] = !0;
            var T = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", d) {
              var O = "";
              _ === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, _, L, O);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, _);
          }
        }
      };
    }
    var Om = "suppressHydrationWarning", Nm = "$", Lm = "/$", Bp = "$?", Wp = "$!", _R = "style", D0 = null, k0 = null;
    function wR(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case $a:
        case Kl: {
          t = l === $a ? "#document" : "#fragment";
          var s = e.documentElement;
          a = s ? s.namespaceURI : Nd(null, "");
          break;
        }
        default: {
          var d = l === yn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = Nd(v, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), _ = Ip(null, S);
        return {
          namespace: a,
          ancestorInfo: _
        };
      }
    }
    function CR(e, t, a) {
      {
        var l = e, s = Nd(l.namespace, t), d = Ip(l.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: d
        };
      }
    }
    function wj(e) {
      return e;
    }
    function TR(e) {
      D0 = la(), k0 = Fb();
      var t = null;
      return Hn(!1), t;
    }
    function xR(e) {
      Hb(k0), Hn(D0), D0 = null, k0 = null;
    }
    function bR(e, t, a, l, s) {
      var d;
      {
        var v = l;
        if (Vp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, _ = Ip(v.ancestorInfo, e);
          Vp(null, S, _);
        }
        d = v.namespace;
      }
      var C = oR(e, t, a, d);
      return Qp(s, C), j0(C, t), C;
    }
    function RR(e, t) {
      e.appendChild(t);
    }
    function DR(e, t, a, l, s) {
      switch (sR(e, t, a, l), t) {
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
    function kR(e, t, a, l, s, d) {
      {
        var v = d;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var S = "" + l.children, _ = Ip(v.ancestorInfo, t);
          Vp(null, S, _);
        }
      }
      return cR(e, t, a, l);
    }
    function M0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function MR(e, t, a, l) {
      {
        var s = a;
        Vp(null, e, s.ancestorInfo);
      }
      var d = uR(e, t);
      return Qp(l, d), d;
    }
    function OR() {
      var e = window.event;
      return e === void 0 ? ji : gr(e.type);
    }
    var O0 = typeof setTimeout == "function" ? setTimeout : void 0, NR = typeof clearTimeout == "function" ? clearTimeout : void 0, N0 = -1, L_ = typeof Promise == "function" ? Promise : void 0, LR = typeof queueMicrotask == "function" ? queueMicrotask : typeof L_ < "u" ? function(e) {
      return L_.resolve(null).then(e).catch(UR);
    } : O0;
    function UR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function zR(e, t, a, l) {
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
    function AR(e, t, a, l, s, d) {
      fR(e, t, a, l, s), j0(e, s);
    }
    function U_(e) {
      Dc(e, "");
    }
    function jR(e, t, a) {
      e.nodeValue = a;
    }
    function FR(e, t) {
      e.appendChild(t);
    }
    function HR(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Mm(a);
    }
    function YR(e, t, a) {
      e.insertBefore(t, a);
    }
    function PR(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function VR(e, t) {
      e.removeChild(t);
    }
    function IR(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function L0(e, t) {
      var a = t, l = 0;
      do {
        var s = a.nextSibling;
        if (e.removeChild(a), s && s.nodeType === yn) {
          var d = s.data;
          if (d === Lm)
            if (l === 0) {
              e.removeChild(s), st(t);
              return;
            } else
              l--;
          else
            (d === Nm || d === Bp || d === Wp) && l++;
        }
        a = s;
      } while (a);
      st(t);
    }
    function BR(e, t) {
      e.nodeType === yn ? L0(e.parentNode, t) : e.nodeType === Nr && L0(e, t), st(e);
    }
    function WR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function $R(e) {
      e.nodeValue = "";
    }
    function GR(e, t) {
      e = e;
      var a = t[_R], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = kc("display", l);
    }
    function QR(e, t) {
      e.nodeValue = t;
    }
    function qR(e) {
      e.nodeType === Nr ? e.textContent = "" : e.nodeType === $a && e.documentElement && e.removeChild(e.documentElement);
    }
    function ZR(e, t, a) {
      return e.nodeType !== Nr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function KR(e, t) {
      return t === "" || e.nodeType !== Di ? null : e;
    }
    function XR(e) {
      return e.nodeType !== yn ? null : e;
    }
    function z_(e) {
      return e.data === Bp;
    }
    function U0(e) {
      return e.data === Wp;
    }
    function JR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, s;
      return t && (a = t.dgst, l = t.msg, s = t.stck), {
        message: l,
        digest: a,
        stack: s
      };
    }
    function eD(e, t) {
      e._reactRetry = t;
    }
    function Um(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Nr || t === Di)
          break;
        if (t === yn) {
          var a = e.data;
          if (a === Nm || a === Wp || a === Bp)
            break;
          if (a === Lm)
            return null;
        }
      }
      return e;
    }
    function $p(e) {
      return Um(e.nextSibling);
    }
    function tD(e) {
      return Um(e.firstChild);
    }
    function nD(e) {
      return Um(e.firstChild);
    }
    function rD(e) {
      return Um(e.nextSibling);
    }
    function aD(e, t, a, l, s, d, v) {
      Qp(d, e), j0(e, a);
      var S;
      {
        var _ = s;
        S = _.namespace;
      }
      var C = (d.mode & lt) !== He;
      return pR(e, t, a, S, l, C, v);
    }
    function iD(e, t, a, l) {
      return Qp(a, e), a.mode & lt, hR(e, t);
    }
    function lD(e, t) {
      Qp(t, e);
    }
    function oD(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var l = t.data;
          if (l === Lm) {
            if (a === 0)
              return $p(t);
            a--;
          } else
            (l === Nm || l === Wp || l === Bp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function A_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var l = t.data;
          if (l === Nm || l === Wp || l === Bp) {
            if (a === 0)
              return t;
            a--;
          } else
            l === Lm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function uD(e) {
      st(e);
    }
    function sD(e) {
      st(e);
    }
    function cD(e) {
      return e !== "head" && e !== "body";
    }
    function fD(e, t, a, l) {
      var s = !0;
      km(t.nodeValue, a, l, s);
    }
    function dD(e, t, a, l, s, d) {
      if (t[Om] !== !0) {
        var v = !0;
        km(l.nodeValue, s, d, v);
      }
    }
    function pD(e, t) {
      t.nodeType === Nr ? T0(e, t) : t.nodeType === yn || x0(e, t);
    }
    function hD(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Nr ? T0(a, t) : t.nodeType === yn || x0(a, t));
      }
    }
    function vD(e, t, a, l, s) {
      (s || t[Om] !== !0) && (l.nodeType === Nr ? T0(a, l) : l.nodeType === yn || x0(a, l));
    }
    function mD(e, t, a) {
      b0(e, t);
    }
    function yD(e, t) {
      R0(e, t);
    }
    function gD(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && b0(l, t);
      }
    }
    function SD(e, t) {
      {
        var a = e.parentNode;
        a !== null && R0(a, t);
      }
    }
    function ED(e, t, a, l, s, d) {
      (d || t[Om] !== !0) && b0(a, l);
    }
    function _D(e, t, a, l, s) {
      (s || t[Om] !== !0) && R0(a, l);
    }
    function wD(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function CD(e) {
      Fp(e);
    }
    var Af = Math.random().toString(36).slice(2), jf = "__reactFiber$" + Af, z0 = "__reactProps$" + Af, Gp = "__reactContainer$" + Af, A0 = "__reactEvents$" + Af, TD = "__reactListeners$" + Af, xD = "__reactHandles$" + Af;
    function bD(e) {
      delete e[jf], delete e[z0], delete e[A0], delete e[TD], delete e[xD];
    }
    function Qp(e, t) {
      t[jf] = e;
    }
    function zm(e, t) {
      t[Gp] = e;
    }
    function j_(e) {
      e[Gp] = null;
    }
    function qp(e) {
      return !!e[Gp];
    }
    function $s(e) {
      var t = e[jf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Gp] || a[jf], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var s = A_(e); s !== null; ) {
              var d = s[jf];
              if (d)
                return d;
              s = A_(s);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lu(e) {
      var t = e[jf] || e[Gp];
      return t && (t.tag === Q || t.tag === V || t.tag === fe || t.tag === U) ? t : null;
    }
    function Ff(e) {
      if (e.tag === Q || e.tag === V)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Am(e) {
      return e[z0] || null;
    }
    function j0(e, t) {
      e[z0] = t;
    }
    function RD(e) {
      var t = e[A0];
      return t === void 0 && (t = e[A0] = /* @__PURE__ */ new Set()), t;
    }
    var F_ = {}, H_ = c.ReactDebugCurrentFrame;
    function jm(e) {
      if (e) {
        var t = e._owner, a = ts(e.type, e._source, t ? t.type : null);
        H_.setExtraStackFrame(a);
      } else
        H_.setExtraStackFrame(null);
    }
    function Vi(e, t, a, l, s) {
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
            S && !(S instanceof Error) && (jm(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, v, typeof S), jm(null)), S instanceof Error && !(S.message in F_) && (F_[S.message] = !0, jm(s), g("Failed %s type: %s", a, S.message), jm(null));
          }
      }
    }
    var F0 = [], Fm;
    Fm = [];
    var bo = -1;
    function Uu(e) {
      return {
        current: e
      };
    }
    function Pr(e, t) {
      if (bo < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Fm[bo] && g("Unexpected Fiber popped."), e.current = F0[bo], F0[bo] = null, Fm[bo] = null, bo--;
    }
    function Vr(e, t, a) {
      bo++, F0[bo] = e.current, Fm[bo] = a, e.current = t;
    }
    var H0;
    H0 = {};
    var Ka = {};
    Object.freeze(Ka);
    var Ro = Uu(Ka), Ol = Uu(!1), Y0 = Ka;
    function Hf(e, t, a) {
      return a && Nl(t) ? Y0 : Ro.current;
    }
    function Y_(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Yf(e, t) {
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
          var S = Ke(e) || "Unknown";
          Vi(l, d, "context", S);
        }
        return s && Y_(e, t, d), d;
      }
    }
    function Hm() {
      return Ol.current;
    }
    function Nl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ym(e) {
      Pr(Ol, e), Pr(Ro, e);
    }
    function P0(e) {
      Pr(Ol, e), Pr(Ro, e);
    }
    function P_(e, t, a) {
      {
        if (Ro.current !== Ka)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Ro, t, e), Vr(Ol, a, e);
      }
    }
    function V_(e, t, a) {
      {
        var l = e.stateNode, s = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var d = Ke(e) || "Unknown";
            H0[d] || (H0[d] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = l.getChildContext();
        for (var S in v)
          if (!(S in s))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var _ = Ke(e) || "Unknown";
          Vi(s, v, "child context", _);
        }
        return ut({}, a, v);
      }
    }
    function Pm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ka;
        return Y0 = Ro.current, Vr(Ro, a, e), Vr(Ol, Ol.current, e), !0;
      }
    }
    function I_(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var s = V_(e, t, Y0);
          l.__reactInternalMemoizedMergedChildContext = s, Pr(Ol, e), Pr(Ro, e), Vr(Ro, s, e), Vr(Ol, a, e);
        } else
          Pr(Ol, e), Vr(Ol, a, e);
      }
    }
    function DD(e) {
      {
        if (!Xd(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case D: {
              var a = t.type;
              if (Nl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var zu = 0, Vm = 1, Do = null, V0 = !1, I0 = !1;
    function B_(e) {
      Do === null ? Do = [e] : Do.push(e);
    }
    function kD(e) {
      V0 = !0, B_(e);
    }
    function W_() {
      V0 && Au();
    }
    function Au() {
      if (!I0 && Do !== null) {
        I0 = !0;
        var e = 0, t = ba();
        try {
          var a = !0, l = Do;
          for (bn(sr); e < l.length; e++) {
            var s = l[e];
            do
              s = s(a);
            while (s !== null);
          }
          Do = null, V0 = !1;
        } catch (d) {
          throw Do !== null && (Do = Do.slice(e + 1)), Yc(Vc, Au), d;
        } finally {
          bn(t), I0 = !1;
        }
      }
      return null;
    }
    var Pf = [], Vf = 0, Im = null, Bm = 0, hi = [], vi = 0, Gs = null, ko = 1, Mo = "";
    function MD(e) {
      return qs(), (e.flags & qd) !== ze;
    }
    function OD(e) {
      return qs(), Bm;
    }
    function ND() {
      var e = Mo, t = ko, a = t & ~LD(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      qs(), Pf[Vf++] = Bm, Pf[Vf++] = Im, Im = e, Bm = t;
    }
    function $_(e, t, a) {
      qs(), hi[vi++] = ko, hi[vi++] = Mo, hi[vi++] = Gs, Gs = e;
      var l = ko, s = Mo, d = Wm(l) - 1, v = l & ~(1 << d), S = a + 1, _ = Wm(t) + d;
      if (_ > 30) {
        var C = d - d % 5, T = (1 << C) - 1, L = (v & T).toString(32), O = v >> C, I = d - C, B = Wm(t) + I, $ = S << I, we = $ | O, Ae = L + s;
        ko = 1 << B | we, Mo = Ae;
      } else {
        var Ne = S << d, vt = Ne | v, ct = s;
        ko = 1 << _ | vt, Mo = ct;
      }
    }
    function B0(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        Qs(e, a), $_(e, a, l);
      }
    }
    function Wm(e) {
      return 32 - Qc(e);
    }
    function LD(e) {
      return 1 << Wm(e) - 1;
    }
    function W0(e) {
      for (; e === Im; )
        Im = Pf[--Vf], Pf[Vf] = null, Bm = Pf[--Vf], Pf[Vf] = null;
      for (; e === Gs; )
        Gs = hi[--vi], hi[vi] = null, Mo = hi[--vi], hi[vi] = null, ko = hi[--vi], hi[vi] = null;
    }
    function UD() {
      return qs(), Gs !== null ? {
        id: ko,
        overflow: Mo
      } : null;
    }
    function zD(e, t) {
      qs(), hi[vi++] = ko, hi[vi++] = Mo, hi[vi++] = Gs, ko = t.id, Mo = t.overflow, Gs = e;
    }
    function qs() {
      Er() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Sr = null, mi = null, Ii = !1, Zs = !1, ju = null;
    function AD() {
      Ii && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function G_() {
      Zs = !0;
    }
    function jD() {
      return Zs;
    }
    function FD(e) {
      var t = e.stateNode.containerInfo;
      return mi = nD(t), Sr = e, Ii = !0, ju = null, Zs = !1, !0;
    }
    function HD(e, t, a) {
      return mi = rD(t), Sr = e, Ii = !0, ju = null, Zs = !1, a !== null && zD(e, a), !0;
    }
    function Q_(e, t) {
      switch (e.tag) {
        case U: {
          pD(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & lt) !== He;
          vD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case fe: {
          var l = e.memoizedState;
          l.dehydrated !== null && hD(l.dehydrated, t);
          break;
        }
      }
    }
    function q_(e, t) {
      Q_(e, t);
      var a = VO();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Tt) : l.push(a);
    }
    function $0(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var l = t.type;
                t.pendingProps, mD(a, l);
                break;
              case V:
                var s = t.pendingProps;
                yD(a, s);
                break;
            }
            break;
          }
          case Q: {
            var d = e.type, v = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case Q: {
                var _ = t.type, C = t.pendingProps, T = (e.mode & lt) !== He;
                ED(
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
              case V: {
                var L = t.pendingProps, O = (e.mode & lt) !== He;
                _D(
                  d,
                  v,
                  S,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case fe: {
            var I = e.memoizedState, B = I.dehydrated;
            if (B !== null)
              switch (t.tag) {
                case Q:
                  var $ = t.type;
                  t.pendingProps, gD(B, $);
                  break;
                case V:
                  var we = t.pendingProps;
                  SD(B, we);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Z_(e, t) {
      t.flags = t.flags & ~_a | It, $0(e, t);
    }
    function K_(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var l = ZR(t, a);
          return l !== null ? (e.stateNode = l, Sr = e, mi = tD(l), !0) : !1;
        }
        case V: {
          var s = e.pendingProps, d = KR(t, s);
          return d !== null ? (e.stateNode = d, Sr = e, mi = null, !0) : !1;
        }
        case fe: {
          var v = XR(t);
          if (v !== null) {
            var S = {
              dehydrated: v,
              treeContext: UD(),
              retryLane: Hr
            };
            e.memoizedState = S;
            var _ = IO(v);
            return _.return = e, e.child = _, Sr = e, mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function G0(e) {
      return (e.mode & lt) !== He && (e.flags & Ge) === ze;
    }
    function Q0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function q0(e) {
      if (Ii) {
        var t = mi;
        if (!t) {
          G0(e) && ($0(Sr, e), Q0()), Z_(Sr, e), Ii = !1, Sr = e;
          return;
        }
        var a = t;
        if (!K_(e, t)) {
          G0(e) && ($0(Sr, e), Q0()), t = $p(a);
          var l = Sr;
          if (!t || !K_(e, t)) {
            Z_(Sr, e), Ii = !1, Sr = e;
            return;
          }
          q_(l, a);
        }
      }
    }
    function YD(e, t, a) {
      var l = e.stateNode, s = !Zs, d = aD(l, e.type, e.memoizedProps, t, a, e, s);
      return e.updateQueue = d, d !== null;
    }
    function PD(e) {
      var t = e.stateNode, a = e.memoizedProps, l = iD(t, a, e);
      if (l) {
        var s = Sr;
        if (s !== null)
          switch (s.tag) {
            case U: {
              var d = s.stateNode.containerInfo, v = (s.mode & lt) !== He;
              fD(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Q: {
              var S = s.type, _ = s.memoizedProps, C = s.stateNode, T = (s.mode & lt) !== He;
              dD(
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
    function VD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      lD(a, e);
    }
    function ID(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return oD(a);
    }
    function X_(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== U && t.tag !== fe; )
        t = t.return;
      Sr = t;
    }
    function $m(e) {
      if (e !== Sr)
        return !1;
      if (!Ii)
        return X_(e), Ii = !0, !1;
      if (e.tag !== U && (e.tag !== Q || cD(e.type) && !M0(e.type, e.memoizedProps))) {
        var t = mi;
        if (t)
          if (G0(e))
            J_(e), Q0();
          else
            for (; t; )
              q_(e, t), t = $p(t);
      }
      return X_(e), e.tag === fe ? mi = ID(e) : mi = Sr ? $p(e.stateNode) : null, !0;
    }
    function BD() {
      return Ii && mi !== null;
    }
    function J_(e) {
      for (var t = mi; t; )
        Q_(e, t), t = $p(t);
    }
    function If() {
      Sr = null, mi = null, Ii = !1, Zs = !1;
    }
    function ew() {
      ju !== null && (QC(ju), ju = null);
    }
    function Er() {
      return Ii;
    }
    function Z0(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    var WD = c.ReactCurrentBatchConfig, $D = null;
    function GD() {
      return WD.transition;
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
      var QD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Zp = [], Kp = [], Xp = [], Jp = [], eh = [], th = [], Xs = /* @__PURE__ */ new Set();
      Bi.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && Jp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && eh.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && th.push(e));
      }, Bi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(O) {
          e.add(Ke(O) || "Component"), Xs.add(O.type);
        }), Zp = []);
        var t = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(O) {
          t.add(Ke(O) || "Component"), Xs.add(O.type);
        }), Kp = []);
        var a = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          a.add(Ke(O) || "Component"), Xs.add(O.type);
        }), Xp = []);
        var l = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(O) {
          l.add(Ke(O) || "Component"), Xs.add(O.type);
        }), Jp = []);
        var s = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(O) {
          s.add(Ke(O) || "Component"), Xs.add(O.type);
        }), eh = []);
        var d = /* @__PURE__ */ new Set();
        if (th.length > 0 && (th.forEach(function(O) {
          d.add(Ke(O) || "Component"), Xs.add(O.type);
        }), th = []), t.size > 0) {
          var v = Ks(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var S = Ks(l);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var _ = Ks(d);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, _);
        }
        if (e.size > 0) {
          var C = Ks(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var T = Ks(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (s.size > 0) {
          var L = Ks(s);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var Gm = /* @__PURE__ */ new Map(), tw = /* @__PURE__ */ new Set();
      Bi.recordLegacyContextWarning = function(e, t) {
        var a = QD(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!tw.has(e.type)) {
          var l = Gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Gm.set(a, l)), l.push(e));
        }
      }, Bi.flushLegacyContextWarning = function() {
        Gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              l.add(Ke(d) || "Component"), tw.add(d.type);
            });
            var s = Ks(l);
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
      }, Bi.discardPendingWarnings = function() {
        Zp = [], Kp = [], Xp = [], Jp = [], eh = [], th = [], Gm = /* @__PURE__ */ new Map();
      };
    }
    function Wi(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), l = e.defaultProps;
        for (var s in l)
          a[s] === void 0 && (a[s] = l[s]);
        return a;
      }
      return t;
    }
    var K0 = Uu(null), X0;
    X0 = {};
    var Qm = null, Bf = null, J0 = null, qm = !1;
    function Zm() {
      Qm = null, Bf = null, J0 = null, qm = !1;
    }
    function nw() {
      qm = !0;
    }
    function rw() {
      qm = !1;
    }
    function aw(e, t, a) {
      Vr(K0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== X0 && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = X0;
    }
    function eS(e, t) {
      var a = K0.current;
      Pr(K0, t), e._currentValue = a;
    }
    function tS(e, t, a) {
      for (var l = e; l !== null; ) {
        var s = l.alternate;
        if (vo(l.childLanes, t) ? s !== null && !vo(s.childLanes, t) && (s.childLanes = Je(s.childLanes, t)) : (l.childLanes = Je(l.childLanes, t), s !== null && (s.childLanes = Je(s.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qD(e, t, a) {
      ZD(e, t, a);
    }
    function ZD(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var s = void 0, d = l.dependencies;
        if (d !== null) {
          s = l.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === D) {
                var S = xn(a), _ = Oo(Ht, S);
                _.tag = Xm;
                var C = l.updateQueue;
                if (C !== null) {
                  var T = C.shared, L = T.pending;
                  L === null ? _.next = _ : (_.next = L.next, L.next = _), T.pending = _;
                }
              }
              l.lanes = Je(l.lanes, a);
              var O = l.alternate;
              O !== null && (O.lanes = Je(O.lanes, a)), tS(l.return, a, e), d.lanes = Je(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === le)
          s = l.type === e.type ? null : l.child;
        else if (l.tag === nt) {
          var I = l.return;
          if (I === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          I.lanes = Je(I.lanes, a);
          var B = I.alternate;
          B !== null && (B.lanes = Je(B.lanes, a)), tS(I, a, e), s = l.sibling;
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
            var $ = s.sibling;
            if ($ !== null) {
              $.return = s.return, s = $;
              break;
            }
            s = s.return;
          }
        l = s;
      }
    }
    function Wf(e, t) {
      Qm = e, Bf = null, J0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Yr(a.lanes, t) && vh(), a.firstContext = null);
      }
    }
    function Pn(e) {
      qm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (J0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (Qm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = a, Qm.dependencies = {
            lanes: q,
            firstContext: a
          };
        } else
          Bf = Bf.next = a;
      }
      return t;
    }
    var Js = null;
    function nS(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function KD() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
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
        Js = null;
      }
    }
    function iw(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, Km(e, l);
    }
    function XD(e, t, a, l) {
      var s = t.interleaved;
      s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
    }
    function JD(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, Km(e, l);
    }
    function Oa(e, t) {
      return Km(e, t);
    }
    var ek = Km;
    function Km(e, t) {
      e.lanes = Je(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Je(a.lanes, t)), a === null && (e.flags & (It | _a)) !== ze && lT(e);
      for (var l = e, s = e.return; s !== null; )
        s.childLanes = Je(s.childLanes, t), a = s.alternate, a !== null ? a.childLanes = Je(a.childLanes, t) : (s.flags & (It | _a)) !== ze && lT(e), l = s, s = s.return;
      if (l.tag === U) {
        var d = l.stateNode;
        return d;
      } else
        return null;
    }
    var lw = 0, ow = 1, Xm = 2, rS = 3, Jm = !1, aS, ey;
    aS = !1, ey = null;
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
    function uw(e, t) {
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
    function Oo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: lw,
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
      if (ey === s && !aS && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), aS = !0), eO()) {
        var d = s.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), s.pending = t, ek(e, a);
      } else
        return JD(e, s, t, a);
    }
    function ty(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var s = l.shared;
        if (fp(a)) {
          var d = s.lanes;
          d = pp(d, e.pendingLanes);
          var v = Je(d, a);
          s.lanes = v, gu(e, v);
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
    function tk(e, t, a, l, s, d) {
      switch (a.tag) {
        case ow: {
          var v = a.payload;
          if (typeof v == "function") {
            nw();
            var S = v.call(d, l, s);
            {
              if (e.mode & en) {
                Tn(!0);
                try {
                  v.call(d, l, s);
                } finally {
                  Tn(!1);
                }
              }
              rw();
            }
            return S;
          }
          return v;
        }
        case rS:
          e.flags = e.flags & ~An | Ge;
        case lw: {
          var _ = a.payload, C;
          if (typeof _ == "function") {
            nw(), C = _.call(d, l, s);
            {
              if (e.mode & en) {
                Tn(!0);
                try {
                  _.call(d, l, s);
                } finally {
                  Tn(!1);
                }
              }
              rw();
            }
          } else
            C = _;
          return C == null ? l : ut({}, l, C);
        }
        case Xm:
          return Jm = !0, l;
      }
      return l;
    }
    function ny(e, t, a, l) {
      var s = e.updateQueue;
      Jm = !1, ey = s.shared;
      var d = s.firstBaseUpdate, v = s.lastBaseUpdate, S = s.shared.pending;
      if (S !== null) {
        s.shared.pending = null;
        var _ = S, C = _.next;
        _.next = null, v === null ? d = C : v.next = C, v = _;
        var T = e.alternate;
        if (T !== null) {
          var L = T.updateQueue, O = L.lastBaseUpdate;
          O !== v && (O === null ? L.firstBaseUpdate = C : O.next = C, L.lastBaseUpdate = _);
        }
      }
      if (d !== null) {
        var I = s.baseState, B = q, $ = null, we = null, Ae = null, Ne = d;
        do {
          var vt = Ne.lane, ct = Ne.eventTime;
          if (vo(l, vt)) {
            if (Ae !== null) {
              var G = {
                eventTime: ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pt,
                tag: Ne.tag,
                payload: Ne.payload,
                callback: Ne.callback,
                next: null
              };
              Ae = Ae.next = G;
            }
            I = tk(e, s, Ne, I, t, a);
            var Y = Ne.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ne.lane !== pt) {
              e.flags |= ui;
              var ae = s.effects;
              ae === null ? s.effects = [Ne] : ae.push(Ne);
            }
          } else {
            var H = {
              eventTime: ct,
              lane: vt,
              tag: Ne.tag,
              payload: Ne.payload,
              callback: Ne.callback,
              next: null
            };
            Ae === null ? (we = Ae = H, $ = I) : Ae = Ae.next = H, B = Je(B, vt);
          }
          if (Ne = Ne.next, Ne === null) {
            if (S = s.shared.pending, S === null)
              break;
            var Ce = S, ye = Ce.next;
            Ce.next = null, Ne = ye, s.lastBaseUpdate = Ce, s.shared.pending = null;
          }
        } while (!0);
        Ae === null && ($ = I), s.baseState = $, s.firstBaseUpdate = we, s.lastBaseUpdate = Ae;
        var $e = s.shared.interleaved;
        if ($e !== null) {
          var Ze = $e;
          do
            B = Je(B, Ze.lane), Ze = Ze.next;
          while (Ze !== $e);
        } else
          d === null && (s.shared.lanes = q);
        Rh(B), e.lanes = B, e.memoizedState = I;
      }
      ey = null;
    }
    function nk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function sw() {
      Jm = !1;
    }
    function ry() {
      return Jm;
    }
    function cw(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var s = 0; s < l.length; s++) {
          var d = l[s], v = d.callback;
          v !== null && (d.callback = null, nk(v, a));
        }
    }
    var oS = {}, fw = new i.Component().refs, uS, sS, cS, fS, dS, dw, ay, pS, hS, vS;
    {
      uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set();
      var pw = /* @__PURE__ */ new Set();
      ay = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          pw.has(a) || (pw.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, dw = function(e, t) {
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
        if (e.mode & en) {
          Tn(!0);
          try {
            d = a(l, s);
          } finally {
            Tn(!1);
          }
        }
        dw(t, d);
      }
      var v = d == null ? s : ut({}, s, d);
      if (e.memoizedState = v, e.lanes === q) {
        var S = e.updateQueue;
        S.baseState = v;
      }
    }
    var yS = {
      isMounted: ra,
      enqueueSetState: function(e, t, a) {
        var l = Sa(e), s = sa(), d = $u(l), v = Oo(s, d);
        v.payload = t, a != null && (ay(a, "setState"), v.callback = a);
        var S = Fu(l, v, d);
        S !== null && (er(S, l, d, s), ty(S, l, d)), wl(l, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Sa(e), s = sa(), d = $u(l), v = Oo(s, d);
        v.tag = ow, v.payload = t, a != null && (ay(a, "replaceState"), v.callback = a);
        var S = Fu(l, v, d);
        S !== null && (er(S, l, d, s), ty(S, l, d)), wl(l, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Sa(e), l = sa(), s = $u(a), d = Oo(l, s);
        d.tag = Xm, t != null && (ay(t, "forceUpdate"), d.callback = t);
        var v = Fu(a, d, s);
        v !== null && (er(v, a, s, l), ty(v, a, s)), op(a, s);
      }
    };
    function hw(e, t, a, l, s, d, v) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var _ = S.shouldComponentUpdate(l, d, v);
        {
          if (e.mode & en) {
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
    function rk(e, t, a) {
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
    function vw(e, t) {
      t.updater = yS, e.stateNode = t, uu(t, e), t._reactInternalInstance = oS;
    }
    function mw(e, t, a) {
      var l = !1, s = Ka, d = Ka, v = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ve && v._context === void 0
        );
        if (!S && !vS.has(t)) {
          vS.add(t);
          var _ = "";
          v === void 0 ? _ = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? _ = " However, it is set to a " + typeof v + "." : v.$$typeof === J ? _ = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? _ = " Did you accidentally pass the Context.Consumer instead?" : _ = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", _);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Pn(v);
      else {
        s = Hf(e, t, !0);
        var C = t.contextTypes;
        l = C != null, d = l ? Yf(e, s) : Ka;
      }
      var T = new t(a, d);
      if (e.mode & en) {
        Tn(!0);
        try {
          T = new t(a, d);
        } finally {
          Tn(!1);
        }
      }
      var L = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      vw(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var O = jt(t) || "Component";
          sS.has(O) || (sS.add(O), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, T.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var I = null, B = null, $ = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? $ = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && ($ = "UNSAFE_componentWillUpdate"), I !== null || B !== null || $ !== null) {
            var we = jt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(we) || (fS.add(we), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, Ae, I !== null ? `
  ` + I : "", B !== null ? `
  ` + B : "", $ !== null ? `
  ` + $ : ""));
          }
        }
      }
      return l && Y_(e, s, d), T;
    }
    function ak(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function yw(e, t, a, l) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== s) {
        {
          var d = Ke(e) || "Component";
          uS.has(d) || (uS.add(d), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        yS.enqueueReplaceState(t, t.state, null);
      }
    }
    function gS(e, t, a, l) {
      rk(e, t, a);
      var s = e.stateNode;
      s.props = a, s.state = e.memoizedState, s.refs = fw, iS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        s.context = Pn(d);
      else {
        var v = Hf(e, t, !0);
        s.context = Yf(e, v);
      }
      {
        if (s.state === a) {
          var S = jt(t) || "Component";
          pS.has(S) || (pS.add(S), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & en && Bi.recordLegacyContextWarning(e, s), Bi.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (mS(e, t, _, a), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (ak(e, s), ny(e, a, s, l), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var C = Xe;
        C |= Ur, (e.mode & Ta) !== He && (C |= zr), e.flags |= C;
      }
    }
    function ik(e, t, a, l) {
      var s = e.stateNode, d = e.memoizedProps;
      s.props = d;
      var v = s.context, S = t.contextType, _ = Ka;
      if (typeof S == "object" && S !== null)
        _ = Pn(S);
      else {
        var C = Hf(e, t, !0);
        _ = Yf(e, C);
      }
      var T = t.getDerivedStateFromProps, L = typeof T == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !L && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== a || v !== _) && yw(e, s, a, _), sw();
      var O = e.memoizedState, I = s.state = O;
      if (ny(e, a, s, l), I = e.memoizedState, d === a && O === I && !Hm() && !ry()) {
        if (typeof s.componentDidMount == "function") {
          var B = Xe;
          B |= Ur, (e.mode & Ta) !== He && (B |= zr), e.flags |= B;
        }
        return !1;
      }
      typeof T == "function" && (mS(e, t, T, a), I = e.memoizedState);
      var $ = ry() || hw(e, t, d, a, O, I, _);
      if ($) {
        if (!L && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var we = Xe;
          we |= Ur, (e.mode & Ta) !== He && (we |= zr), e.flags |= we;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var Ae = Xe;
          Ae |= Ur, (e.mode & Ta) !== He && (Ae |= zr), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = I;
      }
      return s.props = a, s.state = I, s.context = _, $;
    }
    function lk(e, t, a, l, s) {
      var d = t.stateNode;
      uw(e, t);
      var v = t.memoizedProps, S = t.type === t.elementType ? v : Wi(t.type, v);
      d.props = S;
      var _ = t.pendingProps, C = d.context, T = a.contextType, L = Ka;
      if (typeof T == "object" && T !== null)
        L = Pn(T);
      else {
        var O = Hf(t, a, !0);
        L = Yf(t, O);
      }
      var I = a.getDerivedStateFromProps, B = typeof I == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !B && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== _ || C !== L) && yw(t, d, l, L), sw();
      var $ = t.memoizedState, we = d.state = $;
      if (ny(t, l, d, s), we = t.memoizedState, v === _ && $ === we && !Hm() && !ry() && !je)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Ea), !1;
      typeof I == "function" && (mS(t, a, I, l), we = t.memoizedState);
      var Ae = ry() || hw(t, a, S, l, $, we, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      je;
      return Ae ? (!B && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, we, L), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, we, L)), typeof d.componentDidUpdate == "function" && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Ea)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Ea), t.memoizedProps = l, t.memoizedState = we), d.props = l, d.state = we, d.context = L, Ae;
    }
    var SS, ES, _S, wS, CS, gw = function(e, t) {
    };
    SS = !1, ES = !1, _S = {}, wS = {}, CS = {}, gw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        wS[a] || (wS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function nh(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & en || mr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var s = Ke(e) || "Component";
          _S[s] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), _S[s] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var S = d;
            if (S.tag !== D)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = S.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var _ = v;
          Ti(l, "ref");
          var C = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(L) {
            var O = _.refs;
            O === fw && (O = _.refs = {}), L === null ? delete O[C] : O[C] = L;
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
    function iy(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ly(e) {
      {
        var t = Ke(e) || "Component";
        if (CS[t])
          return;
        CS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Sw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Ew(e) {
      function t(H, G) {
        if (e) {
          var Y = H.deletions;
          Y === null ? (H.deletions = [G], H.flags |= Tt) : Y.push(G);
        }
      }
      function a(H, G) {
        if (!e)
          return null;
        for (var Y = G; Y !== null; )
          t(H, Y), Y = Y.sibling;
        return null;
      }
      function l(H, G) {
        for (var Y = /* @__PURE__ */ new Map(), ae = G; ae !== null; )
          ae.key !== null ? Y.set(ae.key, ae) : Y.set(ae.index, ae), ae = ae.sibling;
        return Y;
      }
      function s(H, G) {
        var Y = oc(H, G);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function d(H, G, Y) {
        if (H.index = Y, !e)
          return H.flags |= qd, G;
        var ae = H.alternate;
        if (ae !== null) {
          var Ce = ae.index;
          return Ce < G ? (H.flags |= It, G) : Ce;
        } else
          return H.flags |= It, G;
      }
      function v(H) {
        return e && H.alternate === null && (H.flags |= It), H;
      }
      function S(H, G, Y, ae) {
        if (G === null || G.tag !== V) {
          var Ce = Z1(Y, H.mode, ae);
          return Ce.return = H, Ce;
        } else {
          var ye = s(G, Y);
          return ye.return = H, ye;
        }
      }
      function _(H, G, Y, ae) {
        var Ce = Y.type;
        if (Ce === Va)
          return T(H, G, Y.props.children, ae, Y.key);
        if (G !== null && (G.elementType === Ce || // Keep this check inline so it only runs on the false path:
        cT(G, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ve && Sw(Ce) === G.type)) {
          var ye = s(G, Y.props);
          return ye.ref = nh(H, G, Y), ye.return = H, ye._debugSource = Y._source, ye._debugOwner = Y._owner, ye;
        }
        var $e = q1(Y, H.mode, ae);
        return $e.ref = nh(H, G, Y), $e.return = H, $e;
      }
      function C(H, G, Y, ae) {
        if (G === null || G.tag !== A || G.stateNode.containerInfo !== Y.containerInfo || G.stateNode.implementation !== Y.implementation) {
          var Ce = K1(Y, H.mode, ae);
          return Ce.return = H, Ce;
        } else {
          var ye = s(G, Y.children || []);
          return ye.return = H, ye;
        }
      }
      function T(H, G, Y, ae, Ce) {
        if (G === null || G.tag !== te) {
          var ye = Qu(Y, H.mode, ae, Ce);
          return ye.return = H, ye;
        } else {
          var $e = s(G, Y);
          return $e.return = H, $e;
        }
      }
      function L(H, G, Y) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ae = Z1("" + G, H.mode, Y);
          return ae.return = H, ae;
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case al: {
              var Ce = q1(G, H.mode, Y);
              return Ce.ref = nh(H, null, G), Ce.return = H, Ce;
            }
            case Jr: {
              var ye = K1(G, H.mode, Y);
              return ye.return = H, ye;
            }
            case Ve: {
              var $e = G._payload, Ze = G._init;
              return L(H, Ze($e), Y);
            }
          }
          if (Un(G) || xi(G)) {
            var zt = Qu(G, H.mode, Y, null);
            return zt.return = H, zt;
          }
          iy(H, G);
        }
        return typeof G == "function" && ly(H), null;
      }
      function O(H, G, Y, ae) {
        var Ce = G !== null ? G.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return Ce !== null ? null : S(H, G, "" + Y, ae);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case al:
              return Y.key === Ce ? _(H, G, Y, ae) : null;
            case Jr:
              return Y.key === Ce ? C(H, G, Y, ae) : null;
            case Ve: {
              var ye = Y._payload, $e = Y._init;
              return O(H, G, $e(ye), ae);
            }
          }
          if (Un(Y) || xi(Y))
            return Ce !== null ? null : T(H, G, Y, ae, null);
          iy(H, Y);
        }
        return typeof Y == "function" && ly(H), null;
      }
      function I(H, G, Y, ae, Ce) {
        if (typeof ae == "string" && ae !== "" || typeof ae == "number") {
          var ye = H.get(Y) || null;
          return S(G, ye, "" + ae, Ce);
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case al: {
              var $e = H.get(ae.key === null ? Y : ae.key) || null;
              return _(G, $e, ae, Ce);
            }
            case Jr: {
              var Ze = H.get(ae.key === null ? Y : ae.key) || null;
              return C(G, Ze, ae, Ce);
            }
            case Ve:
              var zt = ae._payload, Et = ae._init;
              return I(H, G, Y, Et(zt), Ce);
          }
          if (Un(ae) || xi(ae)) {
            var kn = H.get(Y) || null;
            return T(G, kn, ae, Ce, null);
          }
          iy(G, ae);
        }
        return typeof ae == "function" && ly(G), null;
      }
      function B(H, G, Y) {
        {
          if (typeof H != "object" || H === null)
            return G;
          switch (H.$$typeof) {
            case al:
            case Jr:
              gw(H, Y);
              var ae = H.key;
              if (typeof ae != "string")
                break;
              if (G === null) {
                G = /* @__PURE__ */ new Set(), G.add(ae);
                break;
              }
              if (!G.has(ae)) {
                G.add(ae);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ae);
              break;
            case Ve:
              var Ce = H._payload, ye = H._init;
              B(ye(Ce), G, Y);
              break;
          }
        }
        return G;
      }
      function $(H, G, Y, ae) {
        for (var Ce = null, ye = 0; ye < Y.length; ye++) {
          var $e = Y[ye];
          Ce = B($e, Ce, H);
        }
        for (var Ze = null, zt = null, Et = G, kn = 0, _t = 0, En = null; Et !== null && _t < Y.length; _t++) {
          Et.index > _t ? (En = Et, Et = null) : En = Et.sibling;
          var Br = O(H, Et, Y[_t], ae);
          if (Br === null) {
            Et === null && (Et = En);
            break;
          }
          e && Et && Br.alternate === null && t(H, Et), kn = d(Br, kn, _t), zt === null ? Ze = Br : zt.sibling = Br, zt = Br, Et = En;
        }
        if (_t === Y.length) {
          if (a(H, Et), Er()) {
            var Rr = _t;
            Qs(H, Rr);
          }
          return Ze;
        }
        if (Et === null) {
          for (; _t < Y.length; _t++) {
            var Ja = L(H, Y[_t], ae);
            Ja !== null && (kn = d(Ja, kn, _t), zt === null ? Ze = Ja : zt.sibling = Ja, zt = Ja);
          }
          if (Er()) {
            var ca = _t;
            Qs(H, ca);
          }
          return Ze;
        }
        for (var fa = l(H, Et); _t < Y.length; _t++) {
          var Wr = I(fa, H, _t, Y[_t], ae);
          Wr !== null && (e && Wr.alternate !== null && fa.delete(Wr.key === null ? _t : Wr.key), kn = d(Wr, kn, _t), zt === null ? Ze = Wr : zt.sibling = Wr, zt = Wr);
        }
        if (e && fa.forEach(function(ud) {
          return t(H, ud);
        }), Er()) {
          var jo = _t;
          Qs(H, jo);
        }
        return Ze;
      }
      function we(H, G, Y, ae) {
        var Ce = xi(Y);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (ES || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ES = !0), Y.entries === Ce && (SS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), SS = !0);
          var ye = Ce.call(Y);
          if (ye)
            for (var $e = null, Ze = ye.next(); !Ze.done; Ze = ye.next()) {
              var zt = Ze.value;
              $e = B(zt, $e, H);
            }
        }
        var Et = Ce.call(Y);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kn = null, _t = null, En = G, Br = 0, Rr = 0, Ja = null, ca = Et.next(); En !== null && !ca.done; Rr++, ca = Et.next()) {
          En.index > Rr ? (Ja = En, En = null) : Ja = En.sibling;
          var fa = O(H, En, ca.value, ae);
          if (fa === null) {
            En === null && (En = Ja);
            break;
          }
          e && En && fa.alternate === null && t(H, En), Br = d(fa, Br, Rr), _t === null ? kn = fa : _t.sibling = fa, _t = fa, En = Ja;
        }
        if (ca.done) {
          if (a(H, En), Er()) {
            var Wr = Rr;
            Qs(H, Wr);
          }
          return kn;
        }
        if (En === null) {
          for (; !ca.done; Rr++, ca = Et.next()) {
            var jo = L(H, ca.value, ae);
            jo !== null && (Br = d(jo, Br, Rr), _t === null ? kn = jo : _t.sibling = jo, _t = jo);
          }
          if (Er()) {
            var ud = Rr;
            Qs(H, ud);
          }
          return kn;
        }
        for (var Nh = l(H, En); !ca.done; Rr++, ca = Et.next()) {
          var Yl = I(Nh, H, Rr, ca.value, ae);
          Yl !== null && (e && Yl.alternate !== null && Nh.delete(Yl.key === null ? Rr : Yl.key), Br = d(Yl, Br, Rr), _t === null ? kn = Yl : _t.sibling = Yl, _t = Yl);
        }
        if (e && Nh.forEach(function(EN) {
          return t(H, EN);
        }), Er()) {
          var SN = Rr;
          Qs(H, SN);
        }
        return kn;
      }
      function Ae(H, G, Y, ae) {
        if (G !== null && G.tag === V) {
          a(H, G.sibling);
          var Ce = s(G, Y);
          return Ce.return = H, Ce;
        }
        a(H, G);
        var ye = Z1(Y, H.mode, ae);
        return ye.return = H, ye;
      }
      function Ne(H, G, Y, ae) {
        for (var Ce = Y.key, ye = G; ye !== null; ) {
          if (ye.key === Ce) {
            var $e = Y.type;
            if ($e === Va) {
              if (ye.tag === te) {
                a(H, ye.sibling);
                var Ze = s(ye, Y.props.children);
                return Ze.return = H, Ze._debugSource = Y._source, Ze._debugOwner = Y._owner, Ze;
              }
            } else if (ye.elementType === $e || // Keep this check inline so it only runs on the false path:
            cT(ye, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === Ve && Sw($e) === ye.type) {
              a(H, ye.sibling);
              var zt = s(ye, Y.props);
              return zt.ref = nh(H, ye, Y), zt.return = H, zt._debugSource = Y._source, zt._debugOwner = Y._owner, zt;
            }
            a(H, ye);
            break;
          } else
            t(H, ye);
          ye = ye.sibling;
        }
        if (Y.type === Va) {
          var Et = Qu(Y.props.children, H.mode, ae, Y.key);
          return Et.return = H, Et;
        } else {
          var kn = q1(Y, H.mode, ae);
          return kn.ref = nh(H, G, Y), kn.return = H, kn;
        }
      }
      function vt(H, G, Y, ae) {
        for (var Ce = Y.key, ye = G; ye !== null; ) {
          if (ye.key === Ce)
            if (ye.tag === A && ye.stateNode.containerInfo === Y.containerInfo && ye.stateNode.implementation === Y.implementation) {
              a(H, ye.sibling);
              var $e = s(ye, Y.children || []);
              return $e.return = H, $e;
            } else {
              a(H, ye);
              break;
            }
          else
            t(H, ye);
          ye = ye.sibling;
        }
        var Ze = K1(Y, H.mode, ae);
        return Ze.return = H, Ze;
      }
      function ct(H, G, Y, ae) {
        var Ce = typeof Y == "object" && Y !== null && Y.type === Va && Y.key === null;
        if (Ce && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case al:
              return v(Ne(H, G, Y, ae));
            case Jr:
              return v(vt(H, G, Y, ae));
            case Ve:
              var ye = Y._payload, $e = Y._init;
              return ct(H, G, $e(ye), ae);
          }
          if (Un(Y))
            return $(H, G, Y, ae);
          if (xi(Y))
            return we(H, G, Y, ae);
          iy(H, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? v(Ae(H, G, "" + Y, ae)) : (typeof Y == "function" && ly(H), a(H, G));
      }
      return ct;
    }
    var $f = Ew(!0), _w = Ew(!1);
    function ok(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = oc(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = oc(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function uk(e, t) {
      for (var a = e.child; a !== null; )
        jO(a, t), a = a.sibling;
    }
    var rh = {}, Hu = Uu(rh), ah = Uu(rh), oy = Uu(rh);
    function uy(e) {
      if (e === rh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ww() {
      var e = uy(oy.current);
      return e;
    }
    function TS(e, t) {
      Vr(oy, t, e), Vr(ah, e, e), Vr(Hu, rh, e);
      var a = wR(t);
      Pr(Hu, e), Vr(Hu, a, e);
    }
    function Gf(e) {
      Pr(Hu, e), Pr(ah, e), Pr(oy, e);
    }
    function xS() {
      var e = uy(Hu.current);
      return e;
    }
    function Cw(e) {
      uy(oy.current);
      var t = uy(Hu.current), a = CR(t, e.type);
      t !== a && (Vr(ah, e, e), Vr(Hu, a, e));
    }
    function bS(e) {
      ah.current === e && (Pr(Hu, e), Pr(ah, e));
    }
    var sk = 0, Tw = 1, xw = 1, ih = 2, $i = Uu(sk);
    function RS(e, t) {
      return (e & t) !== 0;
    }
    function Qf(e) {
      return e & Tw;
    }
    function DS(e, t) {
      return e & Tw | t;
    }
    function ck(e, t) {
      return e | t;
    }
    function Yu(e, t) {
      Vr($i, t, e);
    }
    function qf(e) {
      Pr($i, e);
    }
    function fk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function sy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === fe) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || z_(l) || U0(l))
              return t;
          }
        } else if (t.tag === dt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & Ge) !== ze;
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
    ), Ll = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), _r = (
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
    function dk(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Se = c.ReactCurrentDispatcher, lh = c.ReactCurrentBatchConfig, OS, Zf;
    OS = /* @__PURE__ */ new Set();
    var ec = q, Ut = null, qn = null, Zn = null, cy = !1, oh = !1, uh = 0, pk = 0, hk = 25, Z = null, yi = null, Pu = -1, NS = !1;
    function bt() {
      {
        var e = Z;
        yi === null ? yi = [e] : yi.push(e);
      }
    }
    function pe() {
      {
        var e = Z;
        yi !== null && (Pu++, yi[Pu] !== e && vk(e));
      }
    }
    function Kf(e) {
      e != null && !Un(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Z, typeof e);
    }
    function vk(e) {
      {
        var t = Ke(Ut);
        if (!OS.has(t) && (OS.add(t), yi !== null)) {
          for (var a = "", l = 30, s = 0; s <= Pu; s++) {
            for (var d = yi[s], v = s === Pu ? e : d, S = s + 1 + ". " + d; S.length < l; )
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
    function Xf(e, t, a, l, s, d) {
      ec = d, Ut = t, yi = e !== null ? e._debugHookTypes : null, Pu = -1, NS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? Se.current = Gw : yi !== null ? Se.current = $w : Se.current = Ww;
      var v = a(l, s);
      if (oh) {
        var S = 0;
        do {
          if (oh = !1, uh = 0, S >= hk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, NS = !1, qn = null, Zn = null, t.updateQueue = null, Pu = -1, Se.current = Qw, v = a(l, s);
        } while (oh);
      }
      Se.current = Cy, t._debugHookTypes = yi;
      var _ = qn !== null && qn.next !== null;
      if (ec = q, Ut = null, qn = null, Zn = null, Z = null, yi = null, Pu = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== He && g("Internal React error: Expected static flag was missing. Please notify the React team."), cy = !1, _)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Jf() {
      var e = uh !== 0;
      return uh = 0, e;
    }
    function bw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== He ? t.flags &= ~(ao | zr | Zt | Xe) : t.flags &= ~(Zt | Xe), e.lanes = yu(e.lanes, a);
    }
    function Rw() {
      if (Se.current = Cy, cy) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        cy = !1;
      }
      ec = q, Ut = null, qn = null, Zn = null, yi = null, Pu = -1, Z = null, Yw = !1, oh = !1, uh = 0;
    }
    function Ul() {
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
    function Dw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function US(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function zS(e, t, a) {
      var l = Ul(), s;
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
      var v = d.dispatch = Sk.bind(null, Ut, d);
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
        var T = v.next, L = d.baseState, O = null, I = null, B = null, $ = T;
        do {
          var we = $.lane;
          if (vo(ec, we)) {
            if (B !== null) {
              var Ne = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pt,
                action: $.action,
                hasEagerState: $.hasEagerState,
                eagerState: $.eagerState,
                next: null
              };
              B = B.next = Ne;
            }
            if ($.hasEagerState)
              L = $.eagerState;
            else {
              var vt = $.action;
              L = e(L, vt);
            }
          } else {
            var Ae = {
              lane: we,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            };
            B === null ? (I = B = Ae, O = L) : B = B.next = Ae, Ut.lanes = Je(Ut.lanes, we), Rh(we);
          }
          $ = $.next;
        } while ($ !== null && $ !== T);
        B === null ? O = L : B.next = I, Re(L, l.memoizedState) || vh(), l.memoizedState = L, l.baseState = O, l.baseQueue = B, s.lastRenderedState = L;
      }
      var ct = s.interleaved;
      if (ct !== null) {
        var H = ct;
        do {
          var G = H.lane;
          Ut.lanes = Je(Ut.lanes, G), Rh(G), H = H.next;
        } while (H !== ct);
      } else
        v === null && (s.lanes = q);
      var Y = s.dispatch;
      return [l.memoizedState, Y];
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
        Re(S, l.memoizedState) || vh(), l.memoizedState = S, l.baseQueue === null && (l.baseState = S), s.lastRenderedState = S;
      }
      return [S, d];
    }
    function Cj(e, t, a) {
    }
    function Tj(e, t, a) {
    }
    function FS(e, t, a) {
      var l = Ut, s = Ul(), d, v = Er();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Zf || d !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      } else {
        if (d = t(), !Zf) {
          var S = t();
          Re(d, S) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
        }
        var _ = Py();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Os(_, ec) || kw(l, t, d);
      }
      s.memoizedState = d;
      var C = {
        value: d,
        getSnapshot: t
      };
      return s.queue = C, vy(Ow.bind(null, l, C, e), [e]), l.flags |= Zt, sh(Gn | _r, Mw.bind(null, l, C, d, t), void 0, null), d;
    }
    function fy(e, t, a) {
      var l = Ut, s = gi(), d = t();
      if (!Zf) {
        var v = t();
        Re(d, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      }
      var S = s.memoizedState, _ = !Re(S, d);
      _ && (s.memoizedState = d, vh());
      var C = s.queue;
      if (fh(Ow.bind(null, l, C, e), [e]), C.getSnapshot !== t || _ || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zn !== null && Zn.memoizedState.tag & Gn) {
        l.flags |= Zt, sh(Gn | _r, Mw.bind(null, l, C, d, t), void 0, null);
        var T = Py();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Os(T, ec) || kw(l, t, d);
      }
      return d;
    }
    function kw(e, t, a) {
      e.flags |= ws;
      var l = {
        getSnapshot: t,
        value: a
      }, s = Ut.updateQueue;
      if (s === null)
        s = Dw(), Ut.updateQueue = s, s.stores = [l];
      else {
        var d = s.stores;
        d === null ? s.stores = [l] : d.push(l);
      }
    }
    function Mw(e, t, a, l) {
      t.value = a, t.getSnapshot = l, Nw(t) && Lw(e);
    }
    function Ow(e, t, a) {
      var l = function() {
        Nw(t) && Lw(e);
      };
      return a(l);
    }
    function Nw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !Re(a, l);
      } catch {
        return !0;
      }
    }
    function Lw(e) {
      var t = Oa(e, Be);
      t !== null && er(t, e, Be, Ht);
    }
    function dy(e) {
      var t = Ul();
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
      var l = a.dispatch = Ek.bind(null, Ut, a);
      return [t.memoizedState, l];
    }
    function HS(e) {
      return AS(US);
    }
    function YS(e) {
      return jS(US);
    }
    function sh(e, t, a, l) {
      var s = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, d = Ut.updateQueue;
      if (d === null)
        d = Dw(), Ut.updateQueue = d, d.lastEffect = s.next = s;
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
      var t = Ul();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function py(e) {
      var t = gi();
      return t.memoizedState;
    }
    function ch(e, t, a, l) {
      var s = Ul(), d = l === void 0 ? null : l;
      Ut.flags |= e, s.memoizedState = sh(Gn | t, a, void 0, d);
    }
    function hy(e, t, a, l) {
      var s = gi(), d = l === void 0 ? null : l, v = void 0;
      if (qn !== null) {
        var S = qn.memoizedState;
        if (v = S.destroy, d !== null) {
          var _ = S.deps;
          if (LS(d, _)) {
            s.memoizedState = sh(t, a, v, d);
            return;
          }
        }
      }
      Ut.flags |= e, s.memoizedState = sh(Gn | t, a, v, d);
    }
    function vy(e, t) {
      return (Ut.mode & Ta) !== He ? ch(ao | Zt | ml, _r, e, t) : ch(Zt | ml, _r, e, t);
    }
    function fh(e, t) {
      return hy(Zt, _r, e, t);
    }
    function VS(e, t) {
      return ch(Xe, Ll, e, t);
    }
    function my(e, t) {
      return hy(Xe, Ll, e, t);
    }
    function IS(e, t) {
      var a = Xe;
      return a |= Ur, (Ut.mode & Ta) !== He && (a |= zr), ch(a, Qn, e, t);
    }
    function yy(e, t) {
      return hy(Xe, Qn, e, t);
    }
    function Uw(e, t) {
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
      var l = a != null ? a.concat([e]) : null, s = Xe;
      return s |= Ur, (Ut.mode & Ta) !== He && (s |= zr), ch(s, Qn, Uw.bind(null, t, e), l);
    }
    function gy(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return hy(Xe, Qn, Uw.bind(null, t, e), l);
    }
    function mk(e, t) {
    }
    var Sy = mk;
    function WS(e, t) {
      var a = Ul(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function Ey(e, t) {
      var a = gi(), l = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && l !== null) {
        var d = s[1];
        if (LS(l, d))
          return s[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function $S(e, t) {
      var a = Ul(), l = t === void 0 ? null : t, s = e();
      return a.memoizedState = [s, l], s;
    }
    function _y(e, t) {
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
      var t = Ul();
      return t.memoizedState = e, e;
    }
    function zw(e) {
      var t = gi(), a = qn, l = a.memoizedState;
      return jw(t, l, e);
    }
    function Aw(e) {
      var t = gi();
      if (qn === null)
        return t.memoizedState = e, e;
      var a = qn.memoizedState;
      return jw(t, a, e);
    }
    function jw(e, t, a) {
      var l = !Jg(ec);
      if (l) {
        if (!Re(a, t)) {
          var s = dp();
          Ut.lanes = Je(Ut.lanes, s), Rh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, vh()), e.memoizedState = a, a;
    }
    function yk(e, t, a) {
      var l = ba();
      bn(cr(l, $n)), e(!0);
      var s = lh.transition;
      lh.transition = {};
      var d = lh.transition;
      lh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bn(l), lh.transition = s, s === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function QS() {
      var e = dy(!1), t = e[0], a = e[1], l = yk.bind(null, a), s = Ul();
      return s.memoizedState = l, [t, l];
    }
    function Fw() {
      var e = HS(), t = e[0], a = gi(), l = a.memoizedState;
      return [t, l];
    }
    function Hw() {
      var e = YS(), t = e[0], a = gi(), l = a.memoizedState;
      return [t, l];
    }
    var Yw = !1;
    function gk() {
      return Yw;
    }
    function qS() {
      var e = Ul(), t = Py(), a = t.identifierPrefix, l;
      if (Er()) {
        var s = ND();
        l = ":" + a + "R" + s;
        var d = uh++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = pk++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function wy() {
      var e = gi(), t = e.memoizedState;
      return t;
    }
    function Sk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = $u(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Pw(e))
        Vw(t, s);
      else {
        var d = iw(e, t, s, l);
        if (d !== null) {
          var v = sa();
          er(d, e, l, v), Iw(d, t, l);
        }
      }
      Bw(e, l);
    }
    function Ek(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = $u(e), s = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Pw(e))
        Vw(t, s);
      else {
        var d = e.alternate;
        if (e.lanes === q && (d === null || d.lanes === q)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var S;
            S = Se.current, Se.current = Gi;
            try {
              var _ = t.lastRenderedState, C = v(_, a);
              if (s.hasEagerState = !0, s.eagerState = C, Re(C, _)) {
                XD(e, t, s, l);
                return;
              }
            } catch {
            } finally {
              Se.current = S;
            }
          }
        }
        var T = iw(e, t, s, l);
        if (T !== null) {
          var L = sa();
          er(T, e, l, L), Iw(T, t, l);
        }
      }
      Bw(e, l);
    }
    function Pw(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function Vw(e, t) {
      oh = cy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Iw(e, t, a) {
      if (fp(a)) {
        var l = t.lanes;
        l = pp(l, e.pendingLanes);
        var s = Je(l, a);
        t.lanes = s, gu(e, s);
      }
    }
    function Bw(e, t, a) {
      wl(e, t);
    }
    var Cy = {
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
    }, Ww = null, $w = null, Gw = null, Qw = null, zl = null, Gi = null, Ty = null;
    {
      var ZS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Ww = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", bt(), Kf(t), WS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", bt(), Kf(t), vy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", bt(), Kf(a), BS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", bt(), Kf(t), VS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", bt(), Kf(t), IS(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", bt(), Kf(t);
          var a = Se.current;
          Se.current = zl;
          try {
            return $S(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", bt();
          var l = Se.current;
          Se.current = zl;
          try {
            return zS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", bt(), PS(e);
        },
        useState: function(e) {
          Z = "useState", bt();
          var t = Se.current;
          Se.current = zl;
          try {
            return dy(e);
          } finally {
            Se.current = t;
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
      }, $w = {
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
          return Z = "useEffect", pe(), vy(e, t);
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
          var a = Se.current;
          Se.current = zl;
          try {
            return $S(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", pe();
          var l = Se.current;
          Se.current = zl;
          try {
            return zS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", pe(), PS(e);
        },
        useState: function(e) {
          Z = "useState", pe();
          var t = Se.current;
          Se.current = zl;
          try {
            return dy(e);
          } finally {
            Se.current = t;
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
      }, Gw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", pe(), Ey(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", pe(), fh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", pe(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", pe(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", pe(), yy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", pe();
          var a = Se.current;
          Se.current = Gi;
          try {
            return _y(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", pe();
          var l = Se.current;
          Se.current = Gi;
          try {
            return AS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", pe(), py();
        },
        useState: function(e) {
          Z = "useState", pe();
          var t = Se.current;
          Se.current = Gi;
          try {
            return HS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", pe(), Sy();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", pe(), zw(e);
        },
        useTransition: function() {
          return Z = "useTransition", pe(), Fw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", pe(), fy(e, t);
        },
        useId: function() {
          return Z = "useId", pe(), wy();
        },
        unstable_isNewReconciler: ce
      }, Qw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", pe(), Ey(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", pe(), fh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", pe(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", pe(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", pe(), yy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", pe();
          var a = Se.current;
          Se.current = Ty;
          try {
            return _y(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", pe();
          var l = Se.current;
          Se.current = Ty;
          try {
            return jS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", pe(), py();
        },
        useState: function(e) {
          Z = "useState", pe();
          var t = Se.current;
          Se.current = Ty;
          try {
            return YS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", pe(), Sy();
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
          return Z = "useSyncExternalStore", pe(), fy(e, t);
        },
        useId: function() {
          return Z = "useId", pe(), wy();
        },
        unstable_isNewReconciler: ce
      }, zl = {
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
          return Z = "useEffect", qe(), bt(), vy(e, t);
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
          var a = Se.current;
          Se.current = zl;
          try {
            return $S(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), bt();
          var l = Se.current;
          Se.current = zl;
          try {
            return zS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), bt(), PS(e);
        },
        useState: function(e) {
          Z = "useState", qe(), bt();
          var t = Se.current;
          Se.current = zl;
          try {
            return dy(e);
          } finally {
            Se.current = t;
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
      }, Gi = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), pe(), Ey(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), pe(), fh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), pe(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), pe(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), pe(), yy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), pe();
          var a = Se.current;
          Se.current = Gi;
          try {
            return _y(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), pe();
          var l = Se.current;
          Se.current = Gi;
          try {
            return AS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), pe(), py();
        },
        useState: function(e) {
          Z = "useState", qe(), pe();
          var t = Se.current;
          Se.current = Gi;
          try {
            return HS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), pe(), Sy();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", qe(), pe(), zw(e);
        },
        useTransition: function() {
          return Z = "useTransition", qe(), pe(), Fw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", qe(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", qe(), pe(), fy(e, t);
        },
        useId: function() {
          return Z = "useId", qe(), pe(), wy();
        },
        unstable_isNewReconciler: ce
      }, Ty = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), pe(), Ey(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), pe(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), pe(), fh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), pe(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), pe(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), pe(), yy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), pe();
          var a = Se.current;
          Se.current = Gi;
          try {
            return _y(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), pe();
          var l = Se.current;
          Se.current = Gi;
          try {
            return jS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), pe(), py();
        },
        useState: function(e) {
          Z = "useState", qe(), pe();
          var t = Se.current;
          Se.current = Gi;
          try {
            return YS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), pe(), Sy();
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
          return Z = "useSyncExternalStore", qe(), pe(), fy(e, t);
        },
        useId: function() {
          return Z = "useId", qe(), pe(), wy();
        },
        unstable_isNewReconciler: ce
      };
    }
    var Vu = u.unstable_now, qw = 0, xy = -1, dh = -1, by = -1, KS = !1, Ry = !1;
    function Zw() {
      return KS;
    }
    function _k() {
      Ry = !0;
    }
    function wk() {
      KS = !1, Ry = !1;
    }
    function Ck() {
      KS = Ry, Ry = !1;
    }
    function Kw() {
      return qw;
    }
    function Xw() {
      qw = Vu();
    }
    function XS(e) {
      dh = Vu(), e.actualStartTime < 0 && (e.actualStartTime = Vu());
    }
    function Jw(e) {
      dh = -1;
    }
    function Dy(e, t) {
      if (dh >= 0) {
        var a = Vu() - dh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), dh = -1;
      }
    }
    function Al(e) {
      if (xy >= 0) {
        var t = Vu() - xy;
        xy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case me:
              var s = a.stateNode;
              s.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function JS(e) {
      if (by >= 0) {
        var t = Vu() - by;
        by = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case me:
              var s = a.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function jl() {
      xy = Vu();
    }
    function e1() {
      by = Vu();
    }
    function t1(e) {
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
    function n1(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Tk(e, t) {
      return !0;
    }
    function r1(e, t) {
      try {
        var a = Tk(e, t);
        if (a === !1)
          return;
        var l = t.value, s = t.source, d = t.stack, v = d !== null ? d : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === D)
            return;
          console.error(l);
        }
        var S = s ? Ke(s) : null, _ = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === U)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = Ke(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var L = _ + `
` + v + `

` + ("" + C);
        console.error(L);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var xk = typeof WeakMap == "function" ? WeakMap : Map;
    function eC(e, t, a) {
      var l = Oo(Ht, a);
      l.tag = rS, l.payload = {
        element: null
      };
      var s = t.value;
      return l.callback = function() {
        yO(s), r1(e, t);
      }, l;
    }
    function a1(e, t, a) {
      var l = Oo(Ht, a);
      l.tag = rS;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var d = t.value;
        l.payload = function() {
          return s(d);
        }, l.callback = function() {
          fT(e), r1(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        fT(e), r1(e, t), typeof s != "function" && vO(this);
        var _ = t.value, C = t.stack;
        this.componentDidCatch(_, {
          componentStack: C !== null ? C : ""
        }), typeof s != "function" && (Yr(e.lanes, Be) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), l;
    }
    function tC(e, t, a) {
      var l = e.pingCache, s;
      if (l === null ? (l = e.pingCache = new xk(), s = /* @__PURE__ */ new Set(), l.set(t, s)) : (s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s))), !s.has(a)) {
        s.add(a);
        var d = gO.bind(null, e, t, a);
        Wn && Dh(e, a), t.then(d, d);
      }
    }
    function bk(e, t, a, l) {
      var s = e.updateQueue;
      if (s === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        s.add(a);
    }
    function Rk(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === He && (a === b || a === ne || a === ue)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function nC(e) {
      var t = e;
      do {
        if (t.tag === fe && fk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function rC(e, t, a, l, s) {
      if ((e.mode & lt) === He) {
        if (e === t)
          e.flags |= An;
        else {
          if (e.flags |= Ge, a.flags |= Cs, a.flags &= ~(jc | ta), a.tag === D) {
            var d = a.alternate;
            if (d === null)
              a.tag = et;
            else {
              var v = Oo(Ht, Be);
              v.tag = Xm, Fu(a, v, Be);
            }
          }
          a.lanes = Je(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= An, e.lanes = s, e;
    }
    function Dk(e, t, a, l, s) {
      if (a.flags |= ta, Wn && Dh(e, s), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        Rk(a), Er() && a.mode & lt && G_();
        var v = nC(t);
        if (v !== null) {
          v.flags &= ~ln, rC(v, t, a, e, s), v.mode & lt && tC(e, d, s), bk(v, e, d);
          return;
        } else {
          if (!mu(s)) {
            tC(e, d, s), j1();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = S;
        }
      } else if (Er() && a.mode & lt) {
        G_();
        var _ = nC(t);
        if (_ !== null) {
          (_.flags & An) === ze && (_.flags |= ln), rC(_, t, a, e, s), Z0(tc(l, a));
          return;
        }
      }
      l = tc(l, a), oO(l);
      var C = t;
      do {
        switch (C.tag) {
          case U: {
            var T = l;
            C.flags |= An;
            var L = xn(s);
            C.lanes = Je(C.lanes, L);
            var O = eC(C, T, L);
            lS(C, O);
            return;
          }
          case D:
            var I = l, B = C.type, $ = C.stateNode;
            if ((C.flags & Ge) === ze && (typeof B.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && !nT($))) {
              C.flags |= An;
              var we = xn(s);
              C.lanes = Je(C.lanes, we);
              var Ae = a1(C, I, we);
              lS(C, Ae);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function kk() {
      return null;
    }
    var ph = c.ReactCurrentOwner, Qi = !1, i1, hh, l1, o1, u1, nc, s1, ky;
    i1 = {}, hh = {}, l1 = {}, o1 = {}, u1 = {}, nc = !1, s1 = {}, ky = {};
    function oa(e, t, a, l) {
      e === null ? t.child = _w(t, null, a, l) : t.child = $f(t, e.child, a, l);
    }
    function Mk(e, t, a, l) {
      t.child = $f(t, e.child, null, l), t.child = $f(t, null, a, l);
    }
    function aC(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Vi(
          d,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var v = a.render, S = t.ref, _, C;
      Wf(t, s), _l(t);
      {
        if (ph.current = t, Wa(!0), _ = Xf(e, t, v, l, S, s), C = Jf(), t.mode & en) {
          Tn(!0);
          try {
            _ = Xf(e, t, v, l, S, s), C = Jf();
          } finally {
            Tn(!1);
          }
        }
        Wa(!1);
      }
      return io(), e !== null && !Qi ? (bw(e, t, s), No(e, t, s)) : (Er() && C && B0(t), t.flags |= hl, oa(e, t, _, s), t.child);
    }
    function iC(e, t, a, l, s) {
      if (e === null) {
        var d = a.type;
        if (zO(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = od(d), t.tag = ue, t.type = v, d1(t, d), lC(e, t, v, l, s);
        }
        {
          var S = d.propTypes;
          S && Vi(
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
        T && Vi(
          T,
          l,
          // Resolved props
          "prop",
          jt(C)
        );
      }
      var L = e.child, O = g1(e, s);
      if (!O) {
        var I = L.memoizedProps, B = a.compare;
        if (B = B !== null ? B : Le, B(I, l) && e.ref === t.ref)
          return No(e, t, s);
      }
      t.flags |= hl;
      var $ = oc(L, l);
      return $.ref = t.ref, $.return = t, t.child = $, $;
    }
    function lC(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === Ve) {
          var v = d, S = v._payload, _ = v._init;
          try {
            d = _(S);
          } catch {
            d = null;
          }
          var C = d && d.propTypes;
          C && Vi(
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
          if (Qi = !1, t.pendingProps = l = T, g1(e, s))
            (e.flags & Cs) !== ze && (Qi = !0);
          else
            return t.lanes = e.lanes, No(e, t, s);
      }
      return c1(e, t, a, l, s);
    }
    function oC(e, t, a) {
      var l = t.pendingProps, s = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || _e)
        if ((t.mode & lt) === He) {
          var v = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Vy(t, a);
        } else if (Yr(a, Hr)) {
          var L = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var O = d !== null ? d.baseLanes : a;
          Vy(t, O);
        } else {
          var S = null, _;
          if (d !== null) {
            var C = d.baseLanes;
            _ = Je(C, a);
          } else
            _ = a;
          t.lanes = t.childLanes = Hr;
          var T = {
            baseLanes: _,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Vy(t, _), null;
        }
      else {
        var I;
        d !== null ? (I = Je(d.baseLanes, a), t.memoizedState = null) : I = a, Vy(t, I);
      }
      return oa(e, t, s, a), t.child;
    }
    function Ok(e, t, a) {
      var l = t.pendingProps;
      return oa(e, t, l, a), t.child;
    }
    function Nk(e, t, a) {
      var l = t.pendingProps.children;
      return oa(e, t, l, a), t.child;
    }
    function Lk(e, t, a) {
      {
        t.flags |= Xe;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, d = s.children;
      return oa(e, t, d, a), t.child;
    }
    function uC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Lr, t.flags |= Zd);
    }
    function c1(e, t, a, l, s) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Vi(
          d,
          l,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var v;
      {
        var S = Hf(t, a, !0);
        v = Yf(t, S);
      }
      var _, C;
      Wf(t, s), _l(t);
      {
        if (ph.current = t, Wa(!0), _ = Xf(e, t, a, l, v, s), C = Jf(), t.mode & en) {
          Tn(!0);
          try {
            _ = Xf(e, t, a, l, v, s), C = Jf();
          } finally {
            Tn(!1);
          }
        }
        Wa(!1);
      }
      return io(), e !== null && !Qi ? (bw(e, t, s), No(e, t, s)) : (Er() && C && B0(t), t.flags |= hl, oa(e, t, _, s), t.child);
    }
    function sC(e, t, a, l, s) {
      {
        switch (ZO(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, S = new v(t.memoizedProps, d.context), _ = S.state;
            d.updater.enqueueSetState(d, _, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= An;
            var C = new Error("Simulated error coming from DevTools"), T = xn(s);
            t.lanes = Je(t.lanes, T);
            var L = a1(t, tc(C, t), T);
            lS(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && Vi(
            O,
            l,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var I;
      Nl(a) ? (I = !0, Pm(t)) : I = !1, Wf(t, s);
      var B = t.stateNode, $;
      B === null ? (Oy(e, t), mw(t, a, l), gS(t, a, l, s), $ = !0) : e === null ? $ = ik(t, a, l, s) : $ = lk(e, t, a, l, s);
      var we = f1(e, t, a, $, I, s);
      {
        var Ae = t.stateNode;
        $ && Ae.props !== l && (nc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), nc = !0);
      }
      return we;
    }
    function f1(e, t, a, l, s, d) {
      uC(e, t);
      var v = (t.flags & Ge) !== ze;
      if (!l && !v)
        return s && I_(t, a, !1), No(e, t, d);
      var S = t.stateNode;
      ph.current = t;
      var _;
      if (v && typeof a.getDerivedStateFromError != "function")
        _ = null, Jw();
      else {
        _l(t);
        {
          if (Wa(!0), _ = S.render(), t.mode & en) {
            Tn(!0);
            try {
              S.render();
            } finally {
              Tn(!1);
            }
          }
          Wa(!1);
        }
        io();
      }
      return t.flags |= hl, e !== null && v ? Mk(e, t, _, d) : oa(e, t, _, d), t.memoizedState = S.state, s && I_(t, a, !0), t.child;
    }
    function cC(e) {
      var t = e.stateNode;
      t.pendingContext ? P_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && P_(e, t.context, !1), TS(e, t.containerInfo);
    }
    function Uk(e, t, a) {
      if (cC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, s = t.memoizedState, d = s.element;
      uw(e, t), ny(t, l, null, a);
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
        if (C.baseState = _, t.memoizedState = _, t.flags & ln) {
          var T = tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return fC(e, t, S, a, T);
        } else if (S !== d) {
          var L = tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return fC(e, t, S, a, L);
        } else {
          FD(t);
          var O = _w(t, null, S, a);
          t.child = O;
          for (var I = O; I; )
            I.flags = I.flags & ~It | _a, I = I.sibling;
        }
      } else {
        if (If(), S === d)
          return No(e, t, a);
        oa(e, t, S, a);
      }
      return t.child;
    }
    function fC(e, t, a, l, s) {
      return If(), Z0(s), t.flags |= ln, oa(e, t, a, l), t.child;
    }
    function zk(e, t, a) {
      Cw(t), e === null && q0(t);
      var l = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = s.children, S = M0(l, s);
      return S ? v = null : d !== null && M0(l, d) && (t.flags |= xt), uC(e, t), oa(e, t, v, a), t.child;
    }
    function Ak(e, t) {
      return e === null && q0(t), null;
    }
    function jk(e, t, a, l) {
      Oy(e, t);
      var s = t.pendingProps, d = a, v = d._payload, S = d._init, _ = S(v);
      t.type = _;
      var C = t.tag = AO(_), T = Wi(_, s), L;
      switch (C) {
        case b:
          return d1(t, _), t.type = _ = od(_), L = c1(null, t, _, T, l), L;
        case D:
          return t.type = _ = V1(_), L = sC(null, t, _, T, l), L;
        case ne:
          return t.type = _ = I1(_), L = aC(null, t, _, T, l), L;
        case ee: {
          if (t.type !== t.elementType) {
            var O = _.propTypes;
            O && Vi(
              O,
              T,
              // Resolved for outer only
              "prop",
              jt(_)
            );
          }
          return L = iC(
            null,
            t,
            _,
            Wi(_.type, T),
            // The inner type can have defaults too
            l
          ), L;
        }
      }
      var I = "";
      throw _ !== null && typeof _ == "object" && _.$$typeof === Ve && (I = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + _ + ". " + ("Lazy element type must resolve to a class or function." + I));
    }
    function Fk(e, t, a, l, s) {
      Oy(e, t), t.tag = D;
      var d;
      return Nl(a) ? (d = !0, Pm(t)) : d = !1, Wf(t, s), mw(t, a, l), gS(t, a, l, s), f1(null, t, a, !0, d, s);
    }
    function Hk(e, t, a, l) {
      Oy(e, t);
      var s = t.pendingProps, d;
      {
        var v = Hf(t, a, !1);
        d = Yf(t, v);
      }
      Wf(t, l);
      var S, _;
      _l(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = jt(a) || "Unknown";
          i1[C] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), i1[C] = !0);
        }
        t.mode & en && Bi.recordLegacyContextWarning(t, null), Wa(!0), ph.current = t, S = Xf(null, t, a, s, d, l), _ = Jf(), Wa(!1);
      }
      if (io(), t.flags |= hl, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var T = jt(a) || "Unknown";
        hh[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), hh[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var L = jt(a) || "Unknown";
          hh[L] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), hh[L] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Nl(a) ? (O = !0, Pm(t)) : O = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, iS(t), vw(t, S), gS(t, a, s, l), f1(null, t, a, !0, O, l);
      } else {
        if (t.tag = b, t.mode & en) {
          Tn(!0);
          try {
            S = Xf(null, t, a, s, d, l), _ = Jf();
          } finally {
            Tn(!1);
          }
        }
        return Er() && _ && B0(t), oa(null, t, S, l), d1(t, a), t.child;
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
        cachePool: kk(),
        transitions: null
      };
    }
    function Yk(e, t) {
      var a = null;
      return {
        baseLanes: Je(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Pk(e, t, a, l) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return RS(e, ih);
    }
    function Vk(e, t) {
      return yu(e.childLanes, t);
    }
    function dC(e, t, a) {
      var l = t.pendingProps;
      KO(t) && (t.flags |= Ge);
      var s = $i.current, d = !1, v = (t.flags & Ge) !== ze;
      if (v || Pk(s, e) ? (d = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (s = ck(s, xw)), s = Qf(s), Yu(t, s), e === null) {
        q0(t);
        var S = t.memoizedState;
        if (S !== null) {
          var _ = S.dehydrated;
          if (_ !== null)
            return Gk(t, _);
        }
        var C = l.children, T = l.fallback;
        if (d) {
          var L = Ik(t, C, T, a), O = t.child;
          return O.memoizedState = h1(a), t.memoizedState = p1, L;
        } else
          return v1(t, C);
      } else {
        var I = e.memoizedState;
        if (I !== null) {
          var B = I.dehydrated;
          if (B !== null)
            return Qk(e, t, v, l, B, I, a);
        }
        if (d) {
          var $ = l.fallback, we = l.children, Ae = Wk(e, t, we, $, a), Ne = t.child, vt = e.child.memoizedState;
          return Ne.memoizedState = vt === null ? h1(a) : Yk(vt, a), Ne.childLanes = Vk(e, a), t.memoizedState = p1, Ae;
        } else {
          var ct = l.children, H = Bk(e, t, ct, a);
          return t.memoizedState = null, H;
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
    function Ik(e, t, a, l) {
      var s = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, S, _;
      return (s & lt) === He && d !== null ? (S = d, S.childLanes = q, S.pendingProps = v, e.mode & Ie && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), _ = Qu(a, s, l, null)) : (S = m1(v, s), _ = Qu(a, s, l, null)), S.return = e, _.return = e, S.sibling = _, e.child = S, _;
    }
    function m1(e, t, a) {
      return pT(e, t, q, null);
    }
    function pC(e, t) {
      return oc(e, t);
    }
    function Bk(e, t, a, l) {
      var s = e.child, d = s.sibling, v = pC(s, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === He && (v.lanes = l), v.return = t, v.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= Tt) : S.push(d);
      }
      return t.child = v, v;
    }
    function Wk(e, t, a, l, s) {
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
        C = T, C.childLanes = q, C.pendingProps = _, t.mode & Ie && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = v.selfBaseDuration, C.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        C = pC(v, _), C.subtreeFlags = v.subtreeFlags & Bn;
      var L;
      return S !== null ? L = oc(S, l) : (L = Qu(l, d, s, null), L.flags |= It), L.return = t, C.return = t, C.sibling = L, t.child = C, L;
    }
    function My(e, t, a, l) {
      l !== null && Z0(l), $f(t, e.child, null, a);
      var s = t.pendingProps, d = s.children, v = v1(t, d);
      return v.flags |= It, t.memoizedState = null, v;
    }
    function $k(e, t, a, l, s) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, S = m1(v, d), _ = Qu(l, d, s, null);
      return _.flags |= It, S.return = t, _.return = t, S.sibling = _, t.child = S, (t.mode & lt) !== He && $f(t, e.child, null, s), _;
    }
    function Gk(e, t, a) {
      return (e.mode & lt) === He ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : U0(t) ? e.lanes = uo : e.lanes = Hr, null;
    }
    function Qk(e, t, a, l, s, d, v) {
      if (a)
        if (t.flags & ln) {
          t.flags &= ~ln;
          var H = n1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return My(e, t, v, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var G = l.children, Y = l.fallback, ae = $k(e, t, G, Y, v), Ce = t.child;
          return Ce.memoizedState = h1(v), t.memoizedState = p1, ae;
        }
      else {
        if (AD(), (t.mode & lt) === He)
          return My(
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
            var T = JR(s);
            S = T.digest, _ = T.message, C = T.stack;
          }
          var L;
          _ ? L = new Error(_) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = n1(L, S, C);
          return My(e, t, v, O);
        }
        var I = Yr(v, e.childLanes);
        if (Qi || I) {
          var B = Py();
          if (B !== null) {
            var $ = t0(B, v);
            if ($ !== pt && $ !== d.retryLane) {
              d.retryLane = $;
              var we = Ht;
              Oa(e, $), er(B, e, $, we);
            }
          }
          j1();
          var Ae = n1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return My(e, t, v, Ae);
        } else if (z_(s)) {
          t.flags |= Ge, t.child = e.child;
          var Ne = SO.bind(null, e);
          return eD(s, Ne), null;
        } else {
          HD(t, s, d.treeContext);
          var vt = l.children, ct = v1(t, vt);
          return ct.flags |= _a, ct;
        }
      }
    }
    function hC(e, t, a) {
      e.lanes = Je(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = Je(l.lanes, t)), tS(e.return, t, a);
    }
    function qk(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === fe) {
          var s = l.memoizedState;
          s !== null && hC(l, a, e);
        } else if (l.tag === dt)
          hC(l, a, e);
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
    function Zk(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && sy(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Kk(e) {
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
    function Xk(e, t) {
      e !== void 0 && !ky[e] && (e !== "collapsed" && e !== "hidden" ? (ky[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ky[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vC(e, t) {
      {
        var a = Un(e), l = !a && typeof xi(e) == "function";
        if (a || l) {
          var s = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function Jk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!vC(e[a], a))
              return;
        } else {
          var l = xi(e);
          if (typeof l == "function") {
            var s = l.call(e);
            if (s)
              for (var d = s.next(), v = 0; !d.done; d = s.next()) {
                if (!vC(d.value, v))
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
    function mC(e, t, a) {
      var l = t.pendingProps, s = l.revealOrder, d = l.tail, v = l.children;
      Kk(s), Xk(d, s), Jk(v, s), oa(e, t, v, a);
      var S = $i.current, _ = RS(S, ih);
      if (_)
        S = DS(S, ih), t.flags |= Ge;
      else {
        var C = e !== null && (e.flags & Ge) !== ze;
        C && qk(t, t.child, a), S = Qf(S);
      }
      if (Yu(t, S), (t.mode & lt) === He)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var T = Zk(t.child), L;
            T === null ? (L = t.child, t.child = null) : (L = T.sibling, T.sibling = null), y1(
              t,
              !1,
              // isBackwards
              L,
              T,
              d
            );
            break;
          }
          case "backwards": {
            var O = null, I = t.child;
            for (t.child = null; I !== null; ) {
              var B = I.alternate;
              if (B !== null && sy(B) === null) {
                t.child = I;
                break;
              }
              var $ = I.sibling;
              I.sibling = O, O = I, I = $;
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
    function eM(e, t, a) {
      TS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = $f(t, null, l, a) : oa(e, t, l, a), t.child;
    }
    var yC = !1;
    function tM(e, t, a) {
      var l = t.type, s = l._context, d = t.pendingProps, v = t.memoizedProps, S = d.value;
      {
        "value" in d || yC || (yC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var _ = t.type.propTypes;
        _ && Vi(_, d, "prop", "Context.Provider");
      }
      if (aw(t, s, S), v !== null) {
        var C = v.value;
        if (Re(C, S)) {
          if (v.children === d.children && !Hm())
            return No(e, t, a);
        } else
          qD(t, s, a);
      }
      var T = d.children;
      return oa(e, t, T, a), t.child;
    }
    var gC = !1;
    function nM(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (gC || (gC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var s = t.pendingProps, d = s.children;
      typeof d != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Wf(t, a);
      var v = Pn(l);
      _l(t);
      var S;
      return ph.current = t, Wa(!0), S = d(v), Wa(!1), io(), t.flags |= hl, oa(e, t, S, a), t.child;
    }
    function vh() {
      Qi = !0;
    }
    function Oy(e, t) {
      (t.mode & lt) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= It);
    }
    function No(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Jw(), Rh(t.lanes), Yr(a, t.childLanes) ? (ok(e, t), t.child) : null;
    }
    function rM(e, t, a) {
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
    function aM(e, t, a) {
      switch (t.tag) {
        case U:
          cC(t), t.stateNode, If();
          break;
        case Q:
          Cw(t);
          break;
        case D: {
          var l = t.type;
          Nl(l) && Pm(t);
          break;
        }
        case A:
          TS(t, t.stateNode.containerInfo);
          break;
        case le: {
          var s = t.memoizedProps.value, d = t.type._context;
          aw(t, d, s);
          break;
        }
        case me:
          {
            var v = Yr(a, t.childLanes);
            v && (t.flags |= Xe);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case fe: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return Yu(t, Qf($i.current)), t.flags |= Ge, null;
            var C = t.child, T = C.childLanes;
            if (Yr(a, T))
              return dC(e, t, a);
            Yu(t, Qf($i.current));
            var L = No(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            Yu(t, Qf($i.current));
          break;
        }
        case dt: {
          var O = (e.flags & Ge) !== ze, I = Yr(a, t.childLanes);
          if (O) {
            if (I)
              return mC(e, t, a);
            t.flags |= Ge;
          }
          var B = t.memoizedState;
          if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), Yu(t, $i.current), I)
            break;
          return null;
        }
        case Pe:
        case at:
          return t.lanes = q, oC(e, t, a);
      }
      return No(e, t, a);
    }
    function SC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return rM(e, t, Q1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, s = t.pendingProps;
        if (l !== s || Hm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Qi = !0;
        else {
          var d = g1(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ge) === ze)
            return Qi = !1, aM(e, t, a);
          (e.flags & Cs) !== ze ? Qi = !0 : Qi = !1;
        }
      } else if (Qi = !1, Er() && MD(t)) {
        var v = t.index, S = OD();
        $_(t, S, v);
      }
      switch (t.lanes = q, t.tag) {
        case z:
          return Hk(e, t, t.type, a);
        case We: {
          var _ = t.elementType;
          return jk(e, t, _, a);
        }
        case b: {
          var C = t.type, T = t.pendingProps, L = t.elementType === C ? T : Wi(C, T);
          return c1(e, t, C, L, a);
        }
        case D: {
          var O = t.type, I = t.pendingProps, B = t.elementType === O ? I : Wi(O, I);
          return sC(e, t, O, B, a);
        }
        case U:
          return Uk(e, t, a);
        case Q:
          return zk(e, t, a);
        case V:
          return Ak(e, t);
        case fe:
          return dC(e, t, a);
        case A:
          return eM(e, t, a);
        case ne: {
          var $ = t.type, we = t.pendingProps, Ae = t.elementType === $ ? we : Wi($, we);
          return aC(e, t, $, Ae, a);
        }
        case te:
          return Ok(e, t, a);
        case Ee:
          return Nk(e, t, a);
        case me:
          return Lk(e, t, a);
        case le:
          return tM(e, t, a);
        case Me:
          return nM(e, t, a);
        case ee: {
          var Ne = t.type, vt = t.pendingProps, ct = Wi(Ne, vt);
          if (t.type !== t.elementType) {
            var H = Ne.propTypes;
            H && Vi(
              H,
              ct,
              // Resolved for outer only
              "prop",
              jt(Ne)
            );
          }
          return ct = Wi(Ne.type, ct), iC(e, t, Ne, ct, a);
        }
        case ue:
          return lC(e, t, t.type, t.pendingProps, a);
        case et: {
          var G = t.type, Y = t.pendingProps, ae = t.elementType === G ? Y : Wi(G, Y);
          return Fk(e, t, G, ae, a);
        }
        case dt:
          return mC(e, t, a);
        case Nt:
          break;
        case Pe:
          return oC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= Xe;
    }
    function EC(e) {
      e.flags |= Lr, e.flags |= Zd;
    }
    var _C, S1, wC, CC;
    _C = function(e, t, a, l) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === Q || s.tag === V)
          RR(e, s.stateNode);
        else if (s.tag !== A) {
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
    }, wC = function(e, t, a, l, s) {
      var d = e.memoizedProps;
      if (d !== l) {
        var v = t.stateNode, S = xS(), _ = kR(v, a, d, l, s, S);
        t.updateQueue = _, _ && ed(t);
      }
    }, CC = function(e, t, a, l) {
      a !== l && ed(t);
    };
    function mh(e, t) {
      if (!Er())
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
    function wr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = q, l = ze;
      if (t) {
        if ((e.mode & Ie) !== He) {
          for (var _ = e.selfBaseDuration, C = e.child; C !== null; )
            a = Je(a, Je(C.lanes, C.childLanes)), l |= C.subtreeFlags & Bn, l |= C.flags & Bn, _ += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = _;
        } else
          for (var T = e.child; T !== null; )
            a = Je(a, Je(T.lanes, T.childLanes)), l |= T.subtreeFlags & Bn, l |= T.flags & Bn, T.return = e, T = T.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & Ie) !== He) {
          for (var s = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = Je(a, Je(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, s += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = s, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            a = Je(a, Je(S.lanes, S.childLanes)), l |= S.subtreeFlags, l |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function iM(e, t, a) {
      if (BD() && (t.mode & lt) !== He && (t.flags & Ge) === ze)
        return J_(t), If(), t.flags |= ln | ta | An, !1;
      var l = $m(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (VD(t), wr(t), (t.mode & Ie) !== He) {
            var s = a !== null;
            if (s) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (If(), (t.flags & Ge) === ze && (t.memoizedState = null), t.flags |= Xe, wr(t), (t.mode & Ie) !== He) {
            var v = a !== null;
            if (v) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return ew(), !0;
    }
    function TC(e, t, a) {
      var l = t.pendingProps;
      switch (W0(t), t.tag) {
        case z:
        case We:
        case ue:
        case b:
        case ne:
        case te:
        case Ee:
        case me:
        case Me:
        case ee:
          return wr(t), null;
        case D: {
          var s = t.type;
          return Nl(s) && Ym(t), wr(t), null;
        }
        case U: {
          var d = t.stateNode;
          if (Gf(t), P0(t), MS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = $m(t);
            if (v)
              ed(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ln) !== ze) && (t.flags |= Ea, ew());
            }
          }
          return S1(e, t), wr(t), null;
        }
        case Q: {
          bS(t);
          var _ = ww(), C = t.type;
          if (e !== null && t.stateNode != null)
            wC(e, t, C, l, _), e.ref !== t.ref && EC(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return wr(t), null;
            }
            var T = xS(), L = $m(t);
            if (L)
              YD(t, _, T) && ed(t);
            else {
              var O = bR(C, l, _, T, t);
              _C(O, t, !1, !1), t.stateNode = O, DR(O, C, l, _) && ed(t);
            }
            t.ref !== null && EC(t);
          }
          return wr(t), null;
        }
        case V: {
          var I = l;
          if (e && t.stateNode != null) {
            var B = e.memoizedProps;
            CC(e, t, B, I);
          } else {
            if (typeof I != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var $ = ww(), we = xS(), Ae = $m(t);
            Ae ? PD(t) && ed(t) : t.stateNode = MR(I, $, we, t);
          }
          return wr(t), null;
        }
        case fe: {
          qf(t);
          var Ne = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = iM(e, t, Ne);
            if (!vt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & Ge) !== ze)
            return t.lanes = a, (t.mode & Ie) !== He && t1(t), t;
          var ct = Ne !== null, H = e !== null && e.memoizedState !== null;
          if (ct !== H && ct) {
            var G = t.child;
            if (G.flags |= vl, (t.mode & lt) !== He) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !gt);
              Y || RS($i.current, xw) ? lO() : j1();
            }
          }
          var ae = t.updateQueue;
          if (ae !== null && (t.flags |= Xe), wr(t), (t.mode & Ie) !== He && ct) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case A:
          return Gf(t), S1(e, t), e === null && CD(t.stateNode.containerInfo), wr(t), null;
        case le:
          var ye = t.type._context;
          return eS(ye, t), wr(t), null;
        case et: {
          var $e = t.type;
          return Nl($e) && Ym(t), wr(t), null;
        }
        case dt: {
          qf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return wr(t), null;
          var zt = (t.flags & Ge) !== ze, Et = Ze.rendering;
          if (Et === null)
            if (zt)
              mh(Ze, !1);
            else {
              var kn = uO() && (e === null || (e.flags & Ge) === ze);
              if (!kn)
                for (var _t = t.child; _t !== null; ) {
                  var En = sy(_t);
                  if (En !== null) {
                    zt = !0, t.flags |= Ge, mh(Ze, !1);
                    var Br = En.updateQueue;
                    return Br !== null && (t.updateQueue = Br, t.flags |= Xe), t.subtreeFlags = ze, uk(t, a), Yu(t, DS($i.current, ih)), t.child;
                  }
                  _t = _t.sibling;
                }
              Ze.tail !== null && Jt() > WC() && (t.flags |= Ge, zt = !0, mh(Ze, !1), t.lanes = sp);
            }
          else {
            if (!zt) {
              var Rr = sy(Et);
              if (Rr !== null) {
                t.flags |= Ge, zt = !0;
                var Ja = Rr.updateQueue;
                if (Ja !== null && (t.updateQueue = Ja, t.flags |= Xe), mh(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Et.alternate && !Er())
                  return wr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Jt() * 2 - Ze.renderingStartTime > WC() && a !== Hr && (t.flags |= Ge, zt = !0, mh(Ze, !1), t.lanes = sp);
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
            Ze.rendering = fa, Ze.tail = fa.sibling, Ze.renderingStartTime = Jt(), fa.sibling = null;
            var Wr = $i.current;
            return zt ? Wr = DS(Wr, ih) : Wr = Qf(Wr), Yu(t, Wr), fa;
          }
          return wr(t), null;
        }
        case Nt:
          break;
        case Pe:
        case at: {
          A1(t);
          var jo = t.memoizedState, ud = jo !== null;
          if (e !== null) {
            var Nh = e.memoizedState, Yl = Nh !== null;
            Yl !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_e && (t.flags |= vl);
          }
          return !ud || (t.mode & lt) === He ? wr(t) : Yr(Hl, Hr) && (wr(t), t.subtreeFlags & (It | Xe) && (t.flags |= vl)), null;
        }
        case hn:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lM(e, t, a) {
      switch (W0(t), t.tag) {
        case D: {
          var l = t.type;
          Nl(l) && Ym(t);
          var s = t.flags;
          return s & An ? (t.flags = s & ~An | Ge, (t.mode & Ie) !== He && t1(t), t) : null;
        }
        case U: {
          t.stateNode, Gf(t), P0(t), MS();
          var d = t.flags;
          return (d & An) !== ze && (d & Ge) === ze ? (t.flags = d & ~An | Ge, t) : null;
        }
        case Q:
          return bS(t), null;
        case fe: {
          qf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            If();
          }
          var S = t.flags;
          return S & An ? (t.flags = S & ~An | Ge, (t.mode & Ie) !== He && t1(t), t) : null;
        }
        case dt:
          return qf(t), null;
        case A:
          return Gf(t), null;
        case le:
          var _ = t.type._context;
          return eS(_, t), null;
        case Pe:
        case at:
          return A1(t), null;
        case hn:
          return null;
        default:
          return null;
      }
    }
    function xC(e, t, a) {
      switch (W0(t), t.tag) {
        case D: {
          var l = t.type.childContextTypes;
          l != null && Ym(t);
          break;
        }
        case U: {
          t.stateNode, Gf(t), P0(t), MS();
          break;
        }
        case Q: {
          bS(t);
          break;
        }
        case A:
          Gf(t);
          break;
        case fe:
          qf(t);
          break;
        case dt:
          qf(t);
          break;
        case le:
          var s = t.type._context;
          eS(s, t);
          break;
        case Pe:
        case at:
          A1(t);
          break;
      }
    }
    var bC = null;
    bC = /* @__PURE__ */ new Set();
    var Ny = !1, Cr = !1, oM = typeof WeakSet == "function" ? WeakSet : Set, De = null, td = null, nd = null;
    function uM(e) {
      ro(null, function() {
        throw e;
      }), Qd();
    }
    var sM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          jl(), t.componentWillUnmount();
        } finally {
          Al(e);
        }
      else
        t.componentWillUnmount();
    };
    function RC(e, t) {
      try {
        Iu(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function E1(e, t, a) {
      try {
        sM(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function cM(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function DC(e, t) {
      try {
        MC(e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function rd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var l;
          try {
            if (wn && da && e.mode & Ie)
              try {
                jl(), l = a(null);
              } finally {
                Al(e);
              }
            else
              l = a(null);
          } catch (s) {
            Gt(e, t, s);
          }
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function Ly(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var kC = !1;
    function fM(e, t) {
      TR(e.containerInfo), De = t, dM();
      var a = kC;
      return kC = !1, a;
    }
    function dM() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & su) !== ze && t !== null ? (t.return = e, De = t) : pM();
      }
    }
    function pM() {
      for (; De !== null; ) {
        var e = De;
        Lt(e);
        try {
          hM(e);
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
    function hM(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ea) !== ze) {
        switch (Lt(e), e.tag) {
          case b:
          case ne:
          case ue:
            break;
          case D: {
            if (t !== null) {
              var l = t.memoizedProps, s = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !nc && (d.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), d.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Wi(e.type, l), s);
              {
                var S = bC;
                v === void 0 && !S.has(e.type) && (S.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var _ = e.stateNode;
              qR(_.containerInfo);
            }
            break;
          }
          case Q:
          case V:
          case A:
          case et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function qi(e, t, a) {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var d = s.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var S = v.destroy;
            v.destroy = void 0, S !== void 0 && ((e & _r) !== Na ? Wc(t) : (e & Qn) !== Na && $c(t), (e & Ll) !== Na && kh(!0), Ly(t, a, S), (e & Ll) !== Na && kh(!1), (e & _r) !== Na ? Wv() : (e & Qn) !== Na && cu());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function Iu(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            (e & _r) !== Na ? Bv(t) : (e & Qn) !== Na && $v(t);
            var v = d.create;
            (e & Ll) !== Na && kh(!0), d.destroy = v(), (e & Ll) !== Na && kh(!1), (e & _r) !== Na ? lp() : (e & Qn) !== Na && Gv();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var _ = void 0;
                (d.tag & Qn) !== ze ? _ = "useLayoutEffect" : (d.tag & Ll) !== ze ? _ = "useInsertionEffect" : _ = "useEffect";
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
    function vM(e, t) {
      if ((t.flags & Xe) !== ze)
        switch (t.tag) {
          case me: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, s = l.id, d = l.onPostCommit, v = Kw(), S = t.alternate === null ? "mount" : "update";
            Zw() && (S = "nested-update"), typeof d == "function" && d(s, S, a, v);
            var _ = t.return;
            e:
              for (; _ !== null; ) {
                switch (_.tag) {
                  case U:
                    var C = _.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case me:
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
    function mM(e, t, a, l) {
      if ((a.flags & ur) !== ze)
        switch (a.tag) {
          case b:
          case ne:
          case ue: {
            if (!Cr)
              if (a.mode & Ie)
                try {
                  jl(), Iu(Qn | Gn, a);
                } finally {
                  Al(a);
                }
              else
                Iu(Qn | Gn, a);
            break;
          }
          case D: {
            var s = a.stateNode;
            if (a.flags & Xe && !Cr)
              if (t === null)
                if (a.type === a.elementType && !nc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Ie)
                  try {
                    jl(), s.componentDidMount();
                  } finally {
                    Al(a);
                  }
                else
                  s.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Wi(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !nc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Ie)
                  try {
                    jl(), s.componentDidUpdate(d, v, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Al(a);
                  }
                else
                  s.componentDidUpdate(d, v, s.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !nc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), cw(a, S, s));
            break;
          }
          case U: {
            var _ = a.updateQueue;
            if (_ !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    C = a.child.stateNode;
                    break;
                  case D:
                    C = a.child.stateNode;
                    break;
                }
              cw(a, _, C);
            }
            break;
          }
          case Q: {
            var T = a.stateNode;
            if (t === null && a.flags & Xe) {
              var L = a.type, O = a.memoizedProps;
              zR(T, L, O);
            }
            break;
          }
          case V:
            break;
          case A:
            break;
          case me: {
            {
              var I = a.memoizedProps, B = I.onCommit, $ = I.onRender, we = a.stateNode.effectDuration, Ae = Kw(), Ne = t === null ? "mount" : "update";
              Zw() && (Ne = "nested-update"), typeof $ == "function" && $(a.memoizedProps.id, Ne, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof B == "function" && B(a.memoizedProps.id, Ne, we, Ae), pO(a);
                var vt = a.return;
                e:
                  for (; vt !== null; ) {
                    switch (vt.tag) {
                      case U:
                        var ct = vt.stateNode;
                        ct.effectDuration += we;
                        break e;
                      case me:
                        var H = vt.stateNode;
                        H.effectDuration += we;
                        break e;
                    }
                    vt = vt.return;
                  }
              }
            }
            break;
          }
          case fe: {
            TM(e, a);
            break;
          }
          case dt:
          case et:
          case Nt:
          case Pe:
          case at:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Cr || a.flags & Lr && MC(a);
    }
    function yM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          if (e.mode & Ie)
            try {
              jl(), RC(e, e.return);
            } finally {
              Al(e);
            }
          else
            RC(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && cM(e, e.return, t), DC(e, e.return);
          break;
        }
        case Q: {
          DC(e, e.return);
          break;
        }
      }
    }
    function gM(e, t) {
      for (var a = null, l = e; ; ) {
        if (l.tag === Q) {
          if (a === null) {
            a = l;
            try {
              var s = l.stateNode;
              t ? WR(s) : GR(l.stateNode, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
          }
        } else if (l.tag === V) {
          if (a === null)
            try {
              var d = l.stateNode;
              t ? $R(d) : QR(d, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
        } else if (!((l.tag === Pe || l.tag === at) && l.memoizedState !== null && l !== e)) {
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
    function MC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, l;
        switch (e.tag) {
          case Q:
            l = a;
            break;
          default:
            l = a;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & Ie)
            try {
              jl(), s = t(l);
            } finally {
              Al(e);
            }
          else
            s = t(l);
          typeof s == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = l;
      }
    }
    function SM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function OC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, OC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && bD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function EM(e) {
      for (var t = e.return; t !== null; ) {
        if (NC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function NC(e) {
      return e.tag === Q || e.tag === U || e.tag === A;
    }
    function LC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || NC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== V && t.tag !== nt; ) {
            if (t.flags & It || t.child === null || t.tag === A)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & It))
            return t.stateNode;
        }
    }
    function _M(e) {
      var t = EM(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & xt && (U_(a), t.flags &= ~xt);
          var l = LC(e);
          w1(e, l, a);
          break;
        }
        case U:
        case A: {
          var s = t.stateNode.containerInfo, d = LC(e);
          _1(e, d, s);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _1(e, t, a) {
      var l = e.tag, s = l === Q || l === V;
      if (s) {
        var d = e.stateNode;
        t ? PR(a, d, t) : HR(a, d);
      } else if (l !== A) {
        var v = e.child;
        if (v !== null) {
          _1(v, t, a);
          for (var S = v.sibling; S !== null; )
            _1(S, t, a), S = S.sibling;
        }
      }
    }
    function w1(e, t, a) {
      var l = e.tag, s = l === Q || l === V;
      if (s) {
        var d = e.stateNode;
        t ? YR(a, d, t) : FR(a, d);
      } else if (l !== A) {
        var v = e.child;
        if (v !== null) {
          w1(v, t, a);
          for (var S = v.sibling; S !== null; )
            w1(S, t, a), S = S.sibling;
        }
      }
    }
    var Tr = null, Zi = !1;
    function wM(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case Q: {
                Tr = l.stateNode, Zi = !1;
                break e;
              }
              case U: {
                Tr = l.stateNode.containerInfo, Zi = !0;
                break e;
              }
              case A: {
                Tr = l.stateNode.containerInfo, Zi = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (Tr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        UC(e, t, a), Tr = null, Zi = !1;
      }
      SM(a);
    }
    function Bu(e, t, a) {
      for (var l = a.child; l !== null; )
        UC(e, t, l), l = l.sibling;
    }
    function UC(e, t, a) {
      switch (ap(a), a.tag) {
        case Q:
          Cr || rd(a, t);
        case V: {
          {
            var l = Tr, s = Zi;
            Tr = null, Bu(e, t, a), Tr = l, Zi = s, Tr !== null && (Zi ? IR(Tr, a.stateNode) : VR(Tr, a.stateNode));
          }
          return;
        }
        case nt: {
          Tr !== null && (Zi ? BR(Tr, a.stateNode) : L0(Tr, a.stateNode));
          return;
        }
        case A: {
          {
            var d = Tr, v = Zi;
            Tr = a.stateNode.containerInfo, Zi = !0, Bu(e, t, a), Tr = d, Zi = v;
          }
          return;
        }
        case b:
        case ne:
        case ee:
        case ue: {
          if (!Cr) {
            var S = a.updateQueue;
            if (S !== null) {
              var _ = S.lastEffect;
              if (_ !== null) {
                var C = _.next, T = C;
                do {
                  var L = T, O = L.destroy, I = L.tag;
                  O !== void 0 && ((I & Ll) !== Na ? Ly(a, t, O) : (I & Qn) !== Na && ($c(a), a.mode & Ie ? (jl(), Ly(a, t, O), Al(a)) : Ly(a, t, O), cu())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Bu(e, t, a);
          return;
        }
        case D: {
          if (!Cr) {
            rd(a, t);
            var B = a.stateNode;
            typeof B.componentWillUnmount == "function" && E1(a, t, B);
          }
          Bu(e, t, a);
          return;
        }
        case Nt: {
          Bu(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var $ = Cr;
            Cr = $ || a.memoizedState !== null, Bu(e, t, a), Cr = $;
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
    function CM(e) {
      e.memoizedState;
    }
    function TM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var s = l.memoizedState;
          if (s !== null) {
            var d = s.dehydrated;
            d !== null && sD(d);
          }
        }
      }
    }
    function zC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new oM()), t.forEach(function(l) {
          var s = EO.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Wn)
              if (td !== null && nd !== null)
                Dh(nd, td);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(s, s);
          }
        });
      }
    }
    function xM(e, t, a) {
      td = a, nd = e, Lt(t), AC(t, e), Lt(t), td = null, nd = null;
    }
    function Ki(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          try {
            wM(e, t, d);
          } catch (_) {
            Gt(d, t, _);
          }
        }
      var v = Ng();
      if (t.subtreeFlags & Ar)
        for (var S = t.child; S !== null; )
          Lt(S), AC(S, e), S = S.sibling;
      Lt(v);
    }
    function AC(e, t, a) {
      var l = e.alternate, s = e.flags;
      switch (e.tag) {
        case b:
        case ne:
        case ee:
        case ue: {
          if (Ki(t, e), Fl(e), s & Xe) {
            try {
              qi(Ll | Gn, e, e.return), Iu(Ll | Gn, e);
            } catch ($e) {
              Gt(e, e.return, $e);
            }
            if (e.mode & Ie) {
              try {
                jl(), qi(Qn | Gn, e, e.return);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
              Al(e);
            } else
              try {
                qi(Qn | Gn, e, e.return);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
          }
          return;
        }
        case D: {
          Ki(t, e), Fl(e), s & Lr && l !== null && rd(l, l.return);
          return;
        }
        case Q: {
          Ki(t, e), Fl(e), s & Lr && l !== null && rd(l, l.return);
          {
            if (e.flags & xt) {
              var d = e.stateNode;
              try {
                U_(d);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
            }
            if (s & Xe) {
              var v = e.stateNode;
              if (v != null) {
                var S = e.memoizedProps, _ = l !== null ? l.memoizedProps : S, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    AR(v, T, C, _, S, e);
                  } catch ($e) {
                    Gt(e, e.return, $e);
                  }
              }
            }
          }
          return;
        }
        case V: {
          if (Ki(t, e), Fl(e), s & Xe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, O = e.memoizedProps, I = l !== null ? l.memoizedProps : O;
            try {
              jR(L, I, O);
            } catch ($e) {
              Gt(e, e.return, $e);
            }
          }
          return;
        }
        case U: {
          if (Ki(t, e), Fl(e), s & Xe && l !== null) {
            var B = l.memoizedState;
            if (B.isDehydrated)
              try {
                uD(t.containerInfo);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
          }
          return;
        }
        case A: {
          Ki(t, e), Fl(e);
          return;
        }
        case fe: {
          Ki(t, e), Fl(e);
          var $ = e.child;
          if ($.flags & vl) {
            var we = $.stateNode, Ae = $.memoizedState, Ne = Ae !== null;
            if (we.isHidden = Ne, Ne) {
              var vt = $.alternate !== null && $.alternate.memoizedState !== null;
              vt || iO();
            }
          }
          if (s & Xe) {
            try {
              CM(e);
            } catch ($e) {
              Gt(e, e.return, $e);
            }
            zC(e);
          }
          return;
        }
        case Pe: {
          var ct = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var H = Cr;
            Cr = H || ct, Ki(t, e), Cr = H;
          } else
            Ki(t, e);
          if (Fl(e), s & vl) {
            var G = e.stateNode, Y = e.memoizedState, ae = Y !== null, Ce = e;
            if (G.isHidden = ae, ae && !ct && (Ce.mode & lt) !== He) {
              De = Ce;
              for (var ye = Ce.child; ye !== null; )
                De = ye, RM(ye), ye = ye.sibling;
            }
            gM(Ce, ae);
          }
          return;
        }
        case dt: {
          Ki(t, e), Fl(e), s & Xe && zC(e);
          return;
        }
        case Nt:
          return;
        default: {
          Ki(t, e), Fl(e);
          return;
        }
      }
    }
    function Fl(e) {
      var t = e.flags;
      if (t & It) {
        try {
          _M(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~It;
      }
      t & _a && (e.flags &= ~_a);
    }
    function bM(e, t, a) {
      td = a, nd = t, De = e, jC(e, t, a), td = null, nd = null;
    }
    function jC(e, t, a) {
      for (var l = (e.mode & lt) !== He; De !== null; ) {
        var s = De, d = s.child;
        if (s.tag === Pe && l) {
          var v = s.memoizedState !== null, S = v || Ny;
          if (S) {
            C1(e, t, a);
            continue;
          } else {
            var _ = s.alternate, C = _ !== null && _.memoizedState !== null, T = C || Cr, L = Ny, O = Cr;
            Ny = S, Cr = T, Cr && !O && (De = s, DM(s));
            for (var I = d; I !== null; )
              De = I, jC(
                I,
                // New root; bubble back up to here and stop.
                t,
                a
              ), I = I.sibling;
            De = s, Ny = L, Cr = O, C1(e, t, a);
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
            mM(t, s, l, a);
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
    function RM(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case b:
          case ne:
          case ee:
          case ue: {
            if (t.mode & Ie)
              try {
                jl(), qi(Qn, t, t.return);
              } finally {
                Al(t);
              }
            else
              qi(Qn, t, t.return);
            break;
          }
          case D: {
            rd(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && E1(t, t.return, l);
            break;
          }
          case Q: {
            rd(t, t.return);
            break;
          }
          case Pe: {
            var s = t.memoizedState !== null;
            if (s) {
              FC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : FC(e);
      }
    }
    function FC(e) {
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
    function DM(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Pe) {
          var l = t.memoizedState !== null;
          if (l) {
            HC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : HC(e);
      }
    }
    function HC(e) {
      for (; De !== null; ) {
        var t = De;
        Lt(t);
        try {
          yM(t);
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
    function kM(e, t, a, l) {
      De = t, MM(t, e, a, l);
    }
    function MM(e, t, a, l) {
      for (; De !== null; ) {
        var s = De, d = s.child;
        (s.subtreeFlags & wa) !== ze && d !== null ? (d.return = s, De = d) : OM(e, t, a, l);
      }
    }
    function OM(e, t, a, l) {
      for (; De !== null; ) {
        var s = De;
        if ((s.flags & Zt) !== ze) {
          Lt(s);
          try {
            NM(t, s, a, l);
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
    function NM(e, t, a, l) {
      switch (t.tag) {
        case b:
        case ne:
        case ue: {
          if (t.mode & Ie) {
            e1();
            try {
              Iu(_r | Gn, t);
            } finally {
              JS(t);
            }
          } else
            Iu(_r | Gn, t);
          break;
        }
      }
    }
    function LM(e) {
      De = e, UM();
    }
    function UM() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Tt) !== ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var s = a[l];
              De = s, jM(s, e);
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
        (e.subtreeFlags & wa) !== ze && t !== null ? (t.return = e, De = t) : zM();
      }
    }
    function zM() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Zt) !== ze && (Lt(e), AM(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function AM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          e.mode & Ie ? (e1(), qi(_r | Gn, e, e.return), JS(e)) : qi(_r | Gn, e, e.return);
          break;
        }
      }
    }
    function jM(e, t) {
      for (; De !== null; ) {
        var a = De;
        Lt(a), HM(a, t), Cn();
        var l = a.child;
        l !== null ? (l.return = a, De = l) : FM(e);
      }
    }
    function FM(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, l = t.return;
        if (OC(t), t === e) {
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
    function HM(e, t) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          e.mode & Ie ? (e1(), qi(_r, e, t), JS(e)) : qi(_r, e, t);
          break;
        }
      }
    }
    function YM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          try {
            Iu(Qn | Gn, e);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case D: {
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
    function PM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          try {
            Iu(_r | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function VM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          try {
            qi(Qn | Gn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && E1(e, e.return, t);
          break;
        }
      }
    }
    function IM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue:
          try {
            qi(_r | Gn, e, e.return);
          } catch (t) {
            Gt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var yh = Symbol.for;
      yh("selector.component"), yh("selector.has_pseudo_class"), yh("selector.role"), yh("selector.test_id"), yh("selector.text");
    }
    var BM = [];
    function WM() {
      BM.forEach(function(e) {
        return e();
      });
    }
    var $M = c.ReactCurrentActQueue;
    function GM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function YC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && $M.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var QM = Math.ceil, T1 = c.ReactCurrentDispatcher, x1 = c.ReactCurrentOwner, xr = c.ReactCurrentBatchConfig, Xi = c.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), PC = (
      /*               */
      1
    ), br = (
      /*                */
      2
    ), Si = (
      /*                */
      4
    ), Lo = 0, gh = 1, rc = 2, Uy = 3, Sh = 4, VC = 5, b1 = 6, ht = Kn, ua = null, pn = null, Xn = q, Hl = q, R1 = Uu(q), Jn = Lo, Eh = null, zy = q, _h = q, Ay = q, wh = null, La = null, D1 = 0, IC = 500, BC = 1 / 0, qM = 500, Uo = null;
    function Ch() {
      BC = Jt() + qM;
    }
    function WC() {
      return BC;
    }
    var jy = !1, k1 = null, ad = null, ac = !1, Wu = null, Th = q, M1 = [], O1 = null, ZM = 50, xh = 0, N1 = null, L1 = !1, Fy = !1, KM = 50, id = 0, Hy = null, bh = Ht, Yy = q, $C = !1;
    function Py() {
      return ua;
    }
    function sa() {
      return (ht & (br | Si)) !== Kn ? Jt() : (bh !== Ht || (bh = Jt()), bh);
    }
    function $u(e) {
      var t = e.mode;
      if ((t & lt) === He)
        return Be;
      if ((ht & br) !== Kn && Xn !== q)
        return xn(Xn);
      var a = GD() !== $D;
      if (a) {
        if (xr.transition !== null) {
          var l = xr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Yy === pt && (Yy = dp()), Yy;
      }
      var s = ba();
      if (s !== pt)
        return s;
      var d = OR();
      return d;
    }
    function XM(e) {
      var t = e.mode;
      return (t & lt) === He ? Be : e0();
    }
    function er(e, t, a, l) {
      wO(), $C && g("useInsertionEffect must not schedule updates."), L1 && (Fy = !0), mo(e, a, l), (ht & br) !== q && e === ua ? xO(t) : (Wn && yp(e, t, a), bO(t), e === ua && ((ht & br) === Kn && (_h = Je(_h, a)), Jn === Sh && Gu(e, Xn)), Ua(e, l), a === Be && ht === Kn && (t.mode & lt) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Xi.isBatchingLegacy && (Ch(), W_()));
    }
    function JM(e, t, a) {
      var l = e.current;
      l.lanes = t, mo(e, t, a), Ua(e, a);
    }
    function eO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ht & br) !== Kn
      );
    }
    function Ua(e, t) {
      var a = e.callbackNode;
      Kg(e, t);
      var l = ks(e, e === ua ? Xn : q);
      if (l === q) {
        a !== null && uT(a), e.callbackNode = null, e.callbackPriority = pt;
        return;
      }
      var s = gn(l), d = e.callbackPriority;
      if (d === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Xi.current !== null && a !== Y1)) {
        a == null && d !== Be && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && uT(a);
      var v;
      if (s === Be)
        e.tag === zu ? (Xi.isBatchingLegacy !== null && (Xi.didScheduleLegacyUpdate = !0), kD(qC.bind(null, e))) : B_(qC.bind(null, e)), Xi.current !== null ? Xi.current.push(Au) : LR(function() {
          (ht & (br | Si)) === Kn && Au();
        }), v = null;
      else {
        var S;
        switch (Us(l)) {
          case sr:
            S = Vc;
            break;
          case $n:
            S = aa;
            break;
          case ji:
            S = si;
            break;
          case Ns:
            S = yl;
            break;
          default:
            S = si;
            break;
        }
        v = P1(S, GC.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = v;
    }
    function GC(e, t) {
      if (wk(), bh = Ht, Yy = q, (ht & (br | Si)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = Ao();
      if (l && e.callbackNode !== a)
        return null;
      var s = ks(e, e === ua ? Xn : q);
      if (s === q)
        return null;
      var d = !Os(e, s) && !Jv(e, s) && !t, v = d ? cO(e, s) : Iy(e, s);
      if (v !== Lo) {
        if (v === rc) {
          var S = cp(e);
          S !== q && (s = S, v = U1(e, S));
        }
        if (v === gh) {
          var _ = Eh;
          throw ic(e, q), Gu(e, s), Ua(e, Jt()), _;
        }
        if (v === b1)
          Gu(e, s);
        else {
          var C = !Os(e, s), T = e.current.alternate;
          if (C && !nO(T)) {
            if (v = Iy(e, s), v === rc) {
              var L = cp(e);
              L !== q && (s = L, v = U1(e, L));
            }
            if (v === gh) {
              var O = Eh;
              throw ic(e, q), Gu(e, s), Ua(e, Jt()), O;
            }
          }
          e.finishedWork = T, e.finishedLanes = s, tO(e, v, s);
        }
      }
      return Ua(e, Jt()), e.callbackNode === a ? GC.bind(null, e) : null;
    }
    function U1(e, t) {
      var a = wh;
      if (Rn(e)) {
        var l = ic(e, t);
        l.flags |= ln, wD(e.containerInfo);
      }
      var s = Iy(e, t);
      if (s !== rc) {
        var d = La;
        La = a, d !== null && QC(d);
      }
      return s;
    }
    function QC(e) {
      La === null ? La = e : La.push.apply(La, e);
    }
    function tO(e, t, a) {
      switch (t) {
        case Lo:
        case gh:
          throw new Error("Root did not complete. This is a bug in React.");
        case rc: {
          lc(e, La, Uo);
          break;
        }
        case Uy: {
          if (Gu(e, a), pf(a) && // do not delay if we're inside an act() scope
          !sT()) {
            var l = D1 + IC - Jt();
            if (l > 10) {
              var s = ks(e, q);
              if (s !== q)
                break;
              var d = e.suspendedLanes;
              if (!vo(d, a)) {
                sa(), vp(e, d);
                break;
              }
              e.timeoutHandle = O0(lc.bind(null, e, La, Uo), l);
              break;
            }
          }
          lc(e, La, Uo);
          break;
        }
        case Sh: {
          if (Gu(e, a), Xv(a))
            break;
          if (!sT()) {
            var v = Kv(e, a), S = v, _ = Jt() - S, C = _O(_) - _;
            if (C > 10) {
              e.timeoutHandle = O0(lc.bind(null, e, La, Uo), C);
              break;
            }
          }
          lc(e, La, Uo);
          break;
        }
        case VC: {
          lc(e, La, Uo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function nO(e) {
      for (var t = e; ; ) {
        if (t.flags & ws) {
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
        if (t.subtreeFlags & ws && _ !== null) {
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
    function Gu(e, t) {
      t = yu(t, Ay), t = yu(t, _h), hp(e, t);
    }
    function qC(e) {
      if (Ck(), (ht & (br | Si)) !== Kn)
        throw new Error("Should not already be working.");
      Ao();
      var t = ks(e, q);
      if (!Yr(t, Be))
        return Ua(e, Jt()), null;
      var a = Iy(e, t);
      if (e.tag !== zu && a === rc) {
        var l = cp(e);
        l !== q && (t = l, a = U1(e, l));
      }
      if (a === gh) {
        var s = Eh;
        throw ic(e, q), Gu(e, t), Ua(e, Jt()), s;
      }
      if (a === b1)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, lc(e, La, Uo), Ua(e, Jt()), null;
    }
    function rO(e, t) {
      t !== q && (gu(e, Je(t, Be)), Ua(e, Jt()), (ht & (br | Si)) === Kn && (Ch(), Au()));
    }
    function z1(e, t) {
      var a = ht;
      ht |= PC;
      try {
        return e(t);
      } finally {
        ht = a, ht === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Xi.isBatchingLegacy && (Ch(), W_());
      }
    }
    function aO(e, t, a, l, s) {
      var d = ba(), v = xr.transition;
      try {
        return xr.transition = null, bn(sr), e(t, a, l, s);
      } finally {
        bn(d), xr.transition = v, ht === Kn && Ch();
      }
    }
    function zo(e) {
      Wu !== null && Wu.tag === zu && (ht & (br | Si)) === Kn && Ao();
      var t = ht;
      ht |= PC;
      var a = xr.transition, l = ba();
      try {
        return xr.transition = null, bn(sr), e ? e() : void 0;
      } finally {
        bn(l), xr.transition = a, ht = t, (ht & (br | Si)) === Kn && Au();
      }
    }
    function ZC() {
      return (ht & (br | Si)) !== Kn;
    }
    function Vy(e, t) {
      Vr(R1, Hl, e), Hl = Je(Hl, t);
    }
    function A1(e) {
      Hl = R1.current, Pr(R1, e);
    }
    function ic(e, t) {
      e.finishedWork = null, e.finishedLanes = q;
      var a = e.timeoutHandle;
      if (a !== N0 && (e.timeoutHandle = N0, NR(a)), pn !== null)
        for (var l = pn.return; l !== null; ) {
          var s = l.alternate;
          xC(s, l), l = l.return;
        }
      ua = e;
      var d = oc(e.current, null);
      return pn = d, Xn = Hl = t, Jn = Lo, Eh = null, zy = q, _h = q, Ay = q, wh = null, La = null, KD(), Bi.discardPendingWarnings(), d;
    }
    function KC(e, t) {
      do {
        var a = pn;
        try {
          if (Zm(), Rw(), Cn(), x1.current = null, a === null || a.return === null) {
            Jn = gh, Eh = t, pn = null;
            return;
          }
          if (wn && a.mode & Ie && Dy(a, !0), ni)
            if (io(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              Qv(a, l, Xn);
            } else
              Gc(a, t, Xn);
          Dk(e, a.return, a, t, Xn), tT(a);
        } catch (s) {
          t = s, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
          continue;
        }
        return;
      } while (!0);
    }
    function XC() {
      var e = T1.current;
      return T1.current = Cy, e === null ? Cy : e;
    }
    function JC(e) {
      T1.current = e;
    }
    function iO() {
      D1 = Jt();
    }
    function Rh(e) {
      zy = Je(e, zy);
    }
    function lO() {
      Jn === Lo && (Jn = Uy);
    }
    function j1() {
      (Jn === Lo || Jn === Uy || Jn === rc) && (Jn = Sh), ua !== null && (Ms(zy) || Ms(_h)) && Gu(ua, Xn);
    }
    function oO(e) {
      Jn !== Sh && (Jn = rc), wh === null ? wh = [e] : wh.push(e);
    }
    function uO() {
      return Jn === Lo;
    }
    function Iy(e, t) {
      var a = ht;
      ht |= br;
      var l = XC();
      if (ua !== e || Xn !== t) {
        if (Wn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Dh(e, Xn), s.clear()), mf(e, t);
        }
        Uo = gp(), ic(e, t);
      }
      qa(t);
      do
        try {
          sO();
          break;
        } catch (d) {
          KC(e, d);
        }
      while (!0);
      if (Zm(), ht = a, JC(l), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return du(), ua = null, Xn = q, Jn;
    }
    function sO() {
      for (; pn !== null; )
        eT(pn);
    }
    function cO(e, t) {
      var a = ht;
      ht |= br;
      var l = XC();
      if (ua !== e || Xn !== t) {
        if (Wn) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Dh(e, Xn), s.clear()), mf(e, t);
        }
        Uo = gp(), Ch(), ic(e, t);
      }
      qa(t);
      do
        try {
          fO();
          break;
        } catch (d) {
          KC(e, d);
        }
      while (!0);
      return Zm(), JC(l), ht = a, pn !== null ? (xs(), Lo) : (du(), ua = null, Xn = q, Jn);
    }
    function fO() {
      for (; pn !== null && !Pc(); )
        eT(pn);
    }
    function eT(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & Ie) !== He ? (XS(e), a = F1(t, e, Hl), Dy(e, !0)) : a = F1(t, e, Hl), Cn(), e.memoizedProps = e.pendingProps, a === null ? tT(e) : pn = a, x1.current = null;
    }
    function tT(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & ta) === ze) {
          Lt(t);
          var s = void 0;
          if ((t.mode & Ie) === He ? s = TC(a, t, Hl) : (XS(t), s = TC(a, t, Hl), Dy(t, !1)), Cn(), s !== null) {
            pn = s;
            return;
          }
        } else {
          var d = lM(a, t);
          if (d !== null) {
            d.flags &= Hv, pn = d;
            return;
          }
          if ((t.mode & Ie) !== He) {
            Dy(t, !1);
            for (var v = t.actualDuration, S = t.child; S !== null; )
              v += S.actualDuration, S = S.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= ta, l.subtreeFlags = ze, l.deletions = null;
          else {
            Jn = b1, pn = null;
            return;
          }
        }
        var _ = t.sibling;
        if (_ !== null) {
          pn = _;
          return;
        }
        t = l, pn = t;
      } while (t !== null);
      Jn === Lo && (Jn = VC);
    }
    function lc(e, t, a) {
      var l = ba(), s = xr.transition;
      try {
        xr.transition = null, bn(sr), dO(e, t, a, l);
      } finally {
        xr.transition = s, bn(l);
      }
      return null;
    }
    function dO(e, t, a, l) {
      do
        Ao();
      while (Wu !== null);
      if (CO(), (ht & (br | Si)) !== Kn)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, d = e.finishedLanes;
      if (Bc(d), s === null)
        return ip(), null;
      if (d === q && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = pt;
      var v = Je(s.lanes, s.childLanes);
      mp(e, v), e === ua && (ua = null, pn = null, Xn = q), ((s.subtreeFlags & wa) !== ze || (s.flags & wa) !== ze) && (ac || (ac = !0, O1 = a, P1(si, function() {
        return Ao(), null;
      })));
      var S = (s.subtreeFlags & (su | Ar | ur | wa)) !== ze, _ = (s.flags & (su | Ar | ur | wa)) !== ze;
      if (S || _) {
        var C = xr.transition;
        xr.transition = null;
        var T = ba();
        bn(sr);
        var L = ht;
        ht |= Si, x1.current = null, fM(e, s), Xw(), xM(e, s, d), xR(e.containerInfo), e.current = s, qv(d), bM(s, e, d), fu(), Vv(), ht = L, bn(T), xr.transition = C;
      } else
        e.current = s, Xw();
      var O = ac;
      if (ac ? (ac = !1, Wu = e, Th = d) : (id = 0, Hy = null), v = e.pendingLanes, v === q && (ad = null), O || iT(e.current, !1), Ui(s.stateNode, l), Wn && e.memoizedUpdaters.clear(), WM(), Ua(e, Jt()), t !== null)
        for (var I = e.onRecoverableError, B = 0; B < t.length; B++) {
          var $ = t[B], we = $.stack, Ae = $.digest;
          I($.value, {
            componentStack: we,
            digest: Ae
          });
        }
      if (jy) {
        jy = !1;
        var Ne = k1;
        throw k1 = null, Ne;
      }
      return Yr(Th, Be) && e.tag !== zu && Ao(), v = e.pendingLanes, Yr(v, Be) ? (_k(), e === N1 ? xh++ : (xh = 0, N1 = e)) : xh = 0, Au(), ip(), null;
    }
    function Ao() {
      if (Wu !== null) {
        var e = Us(Th), t = n0(ji, e), a = xr.transition, l = ba();
        try {
          return xr.transition = null, bn(t), hO();
        } finally {
          bn(l), xr.transition = a;
        }
      }
      return !1;
    }
    function pO(e) {
      M1.push(e), ac || (ac = !0, P1(si, function() {
        return Ao(), null;
      }));
    }
    function hO() {
      if (Wu === null)
        return !1;
      var e = O1;
      O1 = null;
      var t = Wu, a = Th;
      if (Wu = null, Th = q, (ht & (br | Si)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      L1 = !0, Fy = !1, Zv(a);
      var l = ht;
      ht |= Si, LM(t.current), kM(t, t.current, a, e);
      {
        var s = M1;
        M1 = [];
        for (var d = 0; d < s.length; d++) {
          var v = s[d];
          vM(t, v);
        }
      }
      Ts(), iT(t.current, !0), ht = l, Au(), Fy ? t === Hy ? id++ : (id = 0, Hy = t) : id = 0, L1 = !1, Fy = !1, Sl(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function nT(e) {
      return ad !== null && ad.has(e);
    }
    function vO(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function mO(e) {
      jy || (jy = !0, k1 = e);
    }
    var yO = mO;
    function rT(e, t, a) {
      var l = tc(a, t), s = eC(e, l, Be), d = Fu(e, s, Be), v = sa();
      d !== null && (mo(d, Be, v), Ua(d, v));
    }
    function Gt(e, t, a) {
      if (uM(a), kh(!1), e.tag === U) {
        rT(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === U) {
          rT(l, e, a);
          return;
        } else if (l.tag === D) {
          var s = l.type, d = l.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !nT(d)) {
            var v = tc(a, e), S = a1(l, v, Be), _ = Fu(l, S, Be), C = sa();
            _ !== null && (mo(_, Be, C), Ua(_, C));
            return;
          }
        }
        l = l.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function gO(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var s = sa();
      vp(e, a), RO(e), ua === e && vo(Xn, a) && (Jn === Sh || Jn === Uy && pf(Xn) && Jt() - D1 < IC ? ic(e, q) : Ay = Je(Ay, a)), Ua(e, s);
    }
    function aT(e, t) {
      t === pt && (t = XM(e));
      var a = sa(), l = Oa(e, t);
      l !== null && (mo(l, t, a), Ua(l, a));
    }
    function SO(e) {
      var t = e.memoizedState, a = pt;
      t !== null && (a = t.retryLane), aT(e, a);
    }
    function EO(e, t) {
      var a = pt, l;
      switch (e.tag) {
        case fe:
          l = e.stateNode;
          var s = e.memoizedState;
          s !== null && (a = s.retryLane);
          break;
        case dt:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), aT(e, a);
    }
    function _O(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : QM(e / 1960) * 1960;
    }
    function wO() {
      if (xh > ZM)
        throw xh = 0, N1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      id > KM && (id = 0, Hy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function CO() {
      Bi.flushLegacyContextWarning(), Bi.flushPendingUnsafeLifecycleWarnings();
    }
    function iT(e, t) {
      Lt(e), By(e, zr, VM), t && By(e, ao, IM), By(e, zr, YM), t && By(e, ao, PM), Cn();
    }
    function By(e, t, a) {
      for (var l = e, s = null; l !== null; ) {
        var d = l.subtreeFlags & t;
        l !== s && l.child !== null && d !== ze ? l = l.child : ((l.flags & t) !== ze && a(l), l.sibling !== null ? l = l.sibling : l = s = l.return);
      }
    }
    var Wy = null;
    function lT(e) {
      {
        if ((ht & br) !== Kn || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== z && t !== U && t !== D && t !== b && t !== ne && t !== ee && t !== ue)
          return;
        var a = Ke(e) || "ReactComponent";
        if (Wy !== null) {
          if (Wy.has(a))
            return;
          Wy.add(a);
        } else
          Wy = /* @__PURE__ */ new Set([a]);
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
      var TO = null;
      F1 = function(e, t, a) {
        var l = hT(TO, t);
        try {
          return SC(e, t, a);
        } catch (d) {
          if (jD() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Zm(), Rw(), xC(e, t), hT(t, l), t.mode & Ie && XS(t), ro(null, SC, null, e, t, a), qg()) {
            var s = Qd();
            typeof s == "object" && s !== null && s._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var oT = !1, H1;
    H1 = /* @__PURE__ */ new Set();
    function xO(e) {
      if (ma && !gk())
        switch (e.tag) {
          case b:
          case ne:
          case ue: {
            var t = pn && Ke(pn) || "Unknown", a = t;
            if (!H1.has(a)) {
              H1.add(a);
              var l = Ke(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case D: {
            oT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), oT = !0);
            break;
          }
        }
    }
    function Dh(e, t) {
      if (Wn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          yp(e, l, t);
        });
      }
    }
    var Y1 = {};
    function P1(e, t) {
      {
        var a = Xi.current;
        return a !== null ? (a.push(t), Y1) : Yc(e, t);
      }
    }
    function uT(e) {
      if (e !== Y1)
        return Pv(e);
    }
    function sT() {
      return Xi.current !== null;
    }
    function bO(e) {
      {
        if (e.mode & lt) {
          if (!YC())
            return;
        } else if (!GM() || ht !== Kn || e.tag !== b && e.tag !== ne && e.tag !== ue)
          return;
        if (Xi.current === null) {
          var t = mn;
          try {
            Lt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? Lt(e) : Cn();
          }
        }
      }
    }
    function RO(e) {
      e.tag !== zu && YC() && Xi.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function kh(e) {
      $C = e;
    }
    var Ei = null, ld = null, DO = function(e) {
      Ei = e;
    };
    function od(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        return t === void 0 ? e : t.current;
      }
    }
    function V1(e) {
      return od(e);
    }
    function I1(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = od(e.render);
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
    function cT(e, t) {
      {
        if (Ei === null)
          return !1;
        var a = e.elementType, l = t.type, s = !1, d = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case D: {
            typeof l == "function" && (s = !0);
            break;
          }
          case b: {
            (typeof l == "function" || d === Ve) && (s = !0);
            break;
          }
          case ne: {
            (d === Fe || d === Ve) && (s = !0);
            break;
          }
          case ee:
          case ue: {
            (d === rt || d === Ve) && (s = !0);
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
    function fT(e) {
      {
        if (Ei === null || typeof WeakSet != "function")
          return;
        ld === null && (ld = /* @__PURE__ */ new WeakSet()), ld.add(e);
      }
    }
    var kO = function(e, t) {
      {
        if (Ei === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        Ao(), zo(function() {
          B1(e.current, l, a);
        });
      }
    }, MO = function(e, t) {
      {
        if (e.context !== Ka)
          return;
        Ao(), zo(function() {
          Mh(t, e, null, null);
        });
      }
    };
    function B1(e, t, a) {
      {
        var l = e.alternate, s = e.child, d = e.sibling, v = e.tag, S = e.type, _ = null;
        switch (v) {
          case b:
          case ue:
          case D:
            _ = S;
            break;
          case ne:
            _ = S.render;
            break;
        }
        if (Ei === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, T = !1;
        if (_ !== null) {
          var L = Ei(_);
          L !== void 0 && (a.has(L) ? T = !0 : t.has(L) && (v === D ? T = !0 : C = !0));
        }
        if (ld !== null && (ld.has(e) || l !== null && ld.has(l)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var O = Oa(e, Be);
          O !== null && er(O, e, Be, Ht);
        }
        s !== null && !T && B1(s, t, a), d !== null && B1(d, t, a);
      }
    }
    var OO = function(e, t) {
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
          case ue:
          case D:
            S = v;
            break;
          case ne:
            S = v.render;
            break;
        }
        var _ = !1;
        S !== null && t.has(S) && (_ = !0), _ ? NO(e, a) : l !== null && W1(l, t, a), s !== null && W1(s, t, a);
      }
    }
    function NO(e, t) {
      {
        var a = LO(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case Q:
              t.add(l.stateNode);
              return;
            case A:
              t.add(l.stateNode.containerInfo);
              return;
            case U:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function LO(e, t) {
      for (var a = e, l = !1; ; ) {
        if (a.tag === Q)
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
        var dT = Object.preventExtensions({});
      } catch {
        $1 = !0;
      }
    }
    function UO(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = ze, this.subtreeFlags = ze, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !$1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Xa = function(e, t, a, l) {
      return new UO(e, t, a, l);
    };
    function G1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zO(e) {
      return typeof e == "function" && !G1(e) && e.defaultProps === void 0;
    }
    function AO(e) {
      if (typeof e == "function")
        return G1(e) ? D : b;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Fe)
          return ne;
        if (t === rt)
          return ee;
      }
      return z;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = Xa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ze, a.subtreeFlags = ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case z:
        case b:
        case ue:
          a.type = od(e.type);
          break;
        case D:
          a.type = V1(e.type);
          break;
        case ne:
          a.type = I1(e.type);
          break;
      }
      return a;
    }
    function jO(e, t) {
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
    function FO(e, t, a) {
      var l;
      return e === Vm ? (l = lt, t === !0 && (l |= en, l |= Ta)) : l = He, Wn && (l |= Ie), Xa(U, null, null, l);
    }
    function Q1(e, t, a, l, s, d) {
      var v = z, S = e;
      if (typeof e == "function")
        G1(e) ? (v = D, S = V1(S)) : S = od(S);
      else if (typeof e == "string")
        v = Q;
      else
        e:
          switch (e) {
            case Va:
              return Qu(a.children, s, d, t);
            case il:
              v = Ee, s |= en, (s & lt) !== He && (s |= Ta);
              break;
            case k:
              return HO(a, s, d, t);
            case tt:
              return YO(a, s, d, t);
            case mt:
              return PO(a, s, d, t);
            case qt:
              return pT(a, s, d, t);
            case yr:
            case Ln:
            case ll:
            case vc:
            case Qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case J:
                    v = le;
                    break e;
                  case ve:
                    v = Me;
                    break e;
                  case Fe:
                    v = ne, S = I1(S);
                    break e;
                  case rt:
                    v = ee;
                    break e;
                  case Ve:
                    v = We, S = null;
                    break e;
                }
              var _ = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = l ? Ke(l) : null;
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
    function Qu(e, t, a, l) {
      var s = Xa(te, e, l, t);
      return s.lanes = a, s;
    }
    function HO(e, t, a, l) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Xa(me, e, l, t | Ie);
      return s.elementType = k, s.lanes = a, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function YO(e, t, a, l) {
      var s = Xa(fe, e, l, t);
      return s.elementType = tt, s.lanes = a, s;
    }
    function PO(e, t, a, l) {
      var s = Xa(dt, e, l, t);
      return s.elementType = mt, s.lanes = a, s;
    }
    function pT(e, t, a, l) {
      var s = Xa(Pe, e, l, t);
      s.elementType = qt, s.lanes = a;
      var d = {
        isHidden: !1
      };
      return s.stateNode = d, s;
    }
    function Z1(e, t, a) {
      var l = Xa(V, e, null, t);
      return l.lanes = a, l;
    }
    function VO() {
      var e = Xa(Q, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function IO(e) {
      var t = Xa(nt, null, null, He);
      return t.stateNode = e, t;
    }
    function K1(e, t, a) {
      var l = e.children !== null ? e.children : [], s = Xa(A, l, e.key, t);
      return s.lanes = a, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function hT(e, t) {
      return e === null && (e = Xa(z, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function BO(e, t, a, l, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = N0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = pt, this.eventTimes = vf(q), this.expirationTimes = vf(Ht), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = vf(q), this.identifierPrefix = l, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Wt; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Vm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case zu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function vT(e, t, a, l, s, d, v, S, _, C) {
      var T = new BO(e, t, a, S, _), L = FO(t, d);
      T.current = L, L.stateNode = T;
      {
        var O = {
          element: l,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = O;
      }
      return iS(L), T;
    }
    var X1 = "18.2.0";
    function WO(e, t, a) {
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
    function mT(e) {
      if (!e)
        return Ka;
      var t = Sa(e), a = DD(t);
      if (t.tag === D) {
        var l = t.type;
        if (Nl(l))
          return V_(t, l, a);
      }
      return a;
    }
    function $O(e, t) {
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
        if (s.mode & en) {
          var d = Ke(a) || "Component";
          if (!eE[d]) {
            eE[d] = !0;
            var v = mn;
            try {
              Lt(s), a.mode & en ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Lt(v) : Cn();
            }
          }
        }
        return s.stateNode;
      }
    }
    function yT(e, t, a, l, s, d, v, S) {
      var _ = !1, C = null;
      return vT(e, t, _, C, a, l, s, d, v);
    }
    function gT(e, t, a, l, s, d, v, S, _, C) {
      var T = !0, L = vT(a, l, T, e, s, d, v, S, _);
      L.context = mT(null);
      var O = L.current, I = sa(), B = $u(O), $ = Oo(I, B);
      return $.callback = t ?? null, Fu(O, $, B), JM(L, B, I), L;
    }
    function Mh(e, t, a, l) {
      Iv(t, e);
      var s = t.current, d = sa(), v = $u(s);
      lo(v);
      var S = mT(a);
      t.context === null ? t.context = S : t.pendingContext = S, ma && mn !== null && !J1 && (J1 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(mn) || "Unknown"));
      var _ = Oo(d, v);
      _.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), _.callback = l);
      var C = Fu(s, _, v);
      return C !== null && (er(C, s, v, d), ty(C, s, v)), v;
    }
    function $y(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function GO(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (Rn(t)) {
            var a = Xg(t);
            rO(t, a);
          }
          break;
        }
        case fe: {
          zo(function() {
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
    function ST(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = tm(a.retryLane, t));
    }
    function tE(e, t) {
      ST(e, t);
      var a = e.alternate;
      a && ST(a, t);
    }
    function QO(e) {
      if (e.tag === fe) {
        var t = pu, a = Oa(e, t);
        if (a !== null) {
          var l = sa();
          er(a, e, t, l);
        }
        tE(e, t);
      }
    }
    function qO(e) {
      if (e.tag === fe) {
        var t = $u(e), a = Oa(e, t);
        if (a !== null) {
          var l = sa();
          er(a, e, t, l);
        }
        tE(e, t);
      }
    }
    function ET(e) {
      var t = Yv(e);
      return t === null ? null : t.stateNode;
    }
    var _T = function(e) {
      return null;
    };
    function ZO(e) {
      return _T(e);
    }
    var wT = function(e) {
      return !1;
    };
    function KO(e) {
      return wT(e);
    }
    var CT = null, TT = null, xT = null, bT = null, RT = null, DT = null, kT = null, MT = null, OT = null;
    {
      var NT = function(e, t, a) {
        var l = t[a], s = Un(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (Un(s) ? s.splice(l, 1) : delete s[l], s) : (s[l] = NT(e[l], t, a + 1), s);
      }, LT = function(e, t) {
        return NT(e, t, 0);
      }, UT = function(e, t, a, l) {
        var s = t[l], d = Un(e) ? e.slice() : ut({}, e);
        if (l + 1 === t.length) {
          var v = a[l];
          d[v] = d[s], Un(d) ? d.splice(s, 1) : delete d[s];
        } else
          d[s] = UT(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            a,
            l + 1
          );
        return d;
      }, zT = function(e, t, a) {
        if (t.length !== a.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return UT(e, t, a, 0);
      }, AT = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var s = t[a], d = Un(e) ? e.slice() : ut({}, e);
        return d[s] = AT(e[s], t, a + 1, l), d;
      }, jT = function(e, t, a) {
        return AT(e, t, 0, a);
      }, nE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      CT = function(e, t, a, l) {
        var s = nE(e, t);
        if (s !== null) {
          var d = jT(s.memoizedState, a, l);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = ut({}, e.memoizedProps);
          var v = Oa(e, Be);
          v !== null && er(v, e, Be, Ht);
        }
      }, TT = function(e, t, a) {
        var l = nE(e, t);
        if (l !== null) {
          var s = LT(l.memoizedState, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var d = Oa(e, Be);
          d !== null && er(d, e, Be, Ht);
        }
      }, xT = function(e, t, a, l) {
        var s = nE(e, t);
        if (s !== null) {
          var d = zT(s.memoizedState, a, l);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = ut({}, e.memoizedProps);
          var v = Oa(e, Be);
          v !== null && er(v, e, Be, Ht);
        }
      }, bT = function(e, t, a) {
        e.pendingProps = jT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Oa(e, Be);
        l !== null && er(l, e, Be, Ht);
      }, RT = function(e, t) {
        e.pendingProps = LT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Oa(e, Be);
        a !== null && er(a, e, Be, Ht);
      }, DT = function(e, t, a) {
        e.pendingProps = zT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Oa(e, Be);
        l !== null && er(l, e, Be, Ht);
      }, kT = function(e) {
        var t = Oa(e, Be);
        t !== null && er(t, e, Be, Ht);
      }, MT = function(e) {
        _T = e;
      }, OT = function(e) {
        wT = e;
      };
    }
    function XO(e) {
      var t = Ca(e);
      return t === null ? null : t.stateNode;
    }
    function JO(e) {
      return null;
    }
    function eN() {
      return mn;
    }
    function tN(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return rp({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CT,
        overrideHookStateDeletePath: TT,
        overrideHookStateRenamePath: xT,
        overrideProps: bT,
        overridePropsDeletePath: RT,
        overridePropsRenamePath: DT,
        setErrorHandler: MT,
        setSuspenseHandler: OT,
        scheduleUpdate: kT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: XO,
        findFiberByHostInstance: t || JO,
        // React Refresh
        findHostInstancesForRefresh: OO,
        scheduleRefresh: kO,
        scheduleRoot: MO,
        setRefreshHandler: DO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: eN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: X1
      });
    }
    var FT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function rE(e) {
      this._internalRoot = e;
    }
    Gy.prototype.render = rE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Qy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== yn) {
          var l = ET(t.current);
          l && l.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Mh(e, t, null, null);
    }, Gy.prototype.unmount = rE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ZC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zo(function() {
          Mh(null, e, null, null);
        }), j_(t);
      }
    };
    function nN(e, t) {
      if (!Qy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      HT(e);
      var a = !1, l = !1, s = "", d = FT;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === al && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = yT(e, Vm, null, a, l, s, d);
      zm(v.current, e);
      var S = e.nodeType === yn ? e.parentNode : e;
      return Fp(S), new rE(v);
    }
    function Gy(e) {
      this._internalRoot = e;
    }
    function rN(e) {
      e && sm(e);
    }
    Gy.prototype.unstable_scheduleHydration = rN;
    function aN(e, t, a) {
      if (!Qy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      HT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, s = a != null && a.hydratedSources || null, d = !1, v = !1, S = "", _ = FT;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError));
      var C = gT(t, null, e, Vm, l, d, v, S, _);
      if (zm(C.current, e), Fp(e), s)
        for (var T = 0; T < s.length; T++) {
          var L = s[T];
          dk(C, L);
        }
      return new Gy(C);
    }
    function Qy(e) {
      return !!(e && (e.nodeType === Nr || e.nodeType === $a || e.nodeType === Kl || !Ct));
    }
    function Oh(e) {
      return !!(e && (e.nodeType === Nr || e.nodeType === $a || e.nodeType === Kl || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function HT(e) {
      e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), qp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var iN = c.ReactCurrentOwner, YT;
    YT = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = ET(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = aE(e), s = !!(l && Lu(l));
      s && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function aE(e) {
      return e ? e.nodeType === $a ? e.documentElement : e.firstChild : null;
    }
    function PT() {
    }
    function lN(e, t, a, l, s) {
      if (s) {
        if (typeof l == "function") {
          var d = l;
          l = function() {
            var O = $y(v);
            d.call(O);
          };
        }
        var v = gT(
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
          PT
        );
        e._reactRootContainer = v, zm(v.current, e);
        var S = e.nodeType === yn ? e.parentNode : e;
        return Fp(S), zo(), v;
      } else {
        for (var _; _ = e.lastChild; )
          e.removeChild(_);
        if (typeof l == "function") {
          var C = l;
          l = function() {
            var O = $y(T);
            C.call(O);
          };
        }
        var T = yT(
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
          PT
        );
        e._reactRootContainer = T, zm(T.current, e);
        var L = e.nodeType === yn ? e.parentNode : e;
        return Fp(L), zo(function() {
          Mh(t, T, a, l);
        }), T;
      }
    }
    function oN(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function qy(e, t, a, l, s) {
      YT(a), oN(s === void 0 ? null : s, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = lN(a, t, e, s, l);
      else {
        if (v = d, typeof s == "function") {
          var S = s;
          s = function() {
            var _ = $y(v);
            S.call(_);
          };
        }
        Mh(t, v, e, s);
      }
      return $y(v);
    }
    function uN(e) {
      {
        var t = iN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Nr ? e : $O(e, "findDOMNode");
    }
    function sN(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Oh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = qp(t) && t._reactRootContainer === void 0;
        l && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return qy(null, e, t, !0, a);
    }
    function cN(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Oh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = qp(t) && t._reactRootContainer === void 0;
        l && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return qy(null, e, t, !1, a);
    }
    function fN(e, t, a, l) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Oh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_s(e))
        throw new Error("parentComponent must be a valid React Component");
      return qy(e, t, a, !1, l);
    }
    function dN(e) {
      if (!Oh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = qp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = aE(e), l = a && !Lu(a);
          l && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zo(function() {
          qy(null, null, e, !1, function() {
            e._reactRootContainer = null, j_(e);
          });
        }), !0;
      } else {
        {
          var s = aE(e), d = !!(s && Lu(s)), v = e.nodeType === Nr && Oh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Te(GO), rm(QO), As(qO), Ep(ba), im(Ls), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), jv(vR), zc(z1, aO, zo);
    function pN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qy(t))
        throw new Error("Target container is not a DOM element.");
      return WO(e, t, null, a);
    }
    function hN(e, t, a, l) {
      return fN(e, t, a, l);
    }
    var iE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lu, Ff, Am, Uc, gs, z1]
    };
    function vN(e, t) {
      return iE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nN(e, t);
    }
    function mN(e, t, a) {
      return iE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), aN(e, t, a);
    }
    function yN(e) {
      return ZC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zo(e);
    }
    var gN = tN({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: X1,
      rendererPackageName: "react-dom"
    });
    if (!gN && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var VT = window.location.protocol;
      /^(https?|file):$/.test(VT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (VT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE, Aa.createPortal = pN, Aa.createRoot = vN, Aa.findDOMNode = uN, Aa.flushSync = yN, Aa.hydrate = sN, Aa.hydrateRoot = mN, Aa.render = cN, Aa.unmountComponentAtNode = dN, Aa.unstable_batchedUpdates = z1, Aa.unstable_renderSubtreeIntoContainer = hN, Aa.version = X1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Aa;
}
function Nb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nb);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (Nb(), UE.exports = KA()) : UE.exports = XA();
var JA = UE.exports;
const hx = (i) => {
  let u;
  const c = /* @__PURE__ */ new Set(), p = (b, D) => {
    const z = typeof b == "function" ? b(u) : b;
    if (!Object.is(z, u)) {
      const U = u;
      u = D ?? typeof z != "object" ? z : Object.assign({}, u, z), c.forEach((A) => A(u, U));
    }
  }, m = () => u, R = { setState: p, getState: m, subscribe: (b) => (c.add(b), () => c.delete(b)), destroy: () => {
    c.clear();
  } };
  return u = i(p, m, R), R;
}, ej = (i) => i ? hx(i) : hx;
var zE = { exports: {} }, vE = {}, eg = { exports: {} }, mE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vx;
function tj() {
  if (vx)
    return mE;
  vx = 1;
  var i = Bo;
  function u(U, A) {
    return U === A && (U !== 0 || 1 / U === 1 / A) || U !== U && A !== A;
  }
  var c = typeof Object.is == "function" ? Object.is : u, p = i.useState, m = i.useEffect, E = i.useLayoutEffect, g = i.useDebugValue;
  function R(U, A) {
    var Q = A(), V = p({ inst: { value: Q, getSnapshot: A } }), te = V[0].inst, Ee = V[1];
    return E(function() {
      te.value = Q, te.getSnapshot = A, b(te) && Ee({ inst: te });
    }, [U, Q, A]), m(function() {
      return b(te) && Ee({ inst: te }), U(function() {
        b(te) && Ee({ inst: te });
      });
    }, [U]), g(Q), Q;
  }
  function b(U) {
    var A = U.getSnapshot;
    U = U.value;
    try {
      var Q = A();
      return !c(U, Q);
    } catch {
      return !0;
    }
  }
  function D(U, A) {
    return A();
  }
  var z = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? D : R;
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
var mx;
function nj() {
  return mx || (mx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Bo, u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(ne) {
      {
        for (var me = arguments.length, fe = new Array(me > 1 ? me - 1 : 0), ee = 1; ee < me; ee++)
          fe[ee - 1] = arguments[ee];
        p("error", ne, fe);
      }
    }
    function p(ne, me, fe) {
      {
        var ee = u.ReactDebugCurrentFrame, ue = ee.getStackAddendum();
        ue !== "" && (me += "%s", fe = fe.concat([ue]));
        var We = fe.map(function(et) {
          return String(et);
        });
        We.unshift("Warning: " + me), Function.prototype.apply.call(console[ne], console, We);
      }
    }
    function m(ne, me) {
      return ne === me && (ne !== 0 || 1 / ne === 1 / me) || ne !== ne && me !== me;
    }
    var E = typeof Object.is == "function" ? Object.is : m, g = i.useState, R = i.useEffect, b = i.useLayoutEffect, D = i.useDebugValue, z = !1, U = !1;
    function A(ne, me, fe) {
      z || i.startTransition !== void 0 && (z = !0, c("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var ee = me();
      if (!U) {
        var ue = me();
        E(ee, ue) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), U = !0);
      }
      var We = g({
        inst: {
          value: ee,
          getSnapshot: me
        }
      }), et = We[0].inst, nt = We[1];
      return b(function() {
        et.value = ee, et.getSnapshot = me, Q(et) && nt({
          inst: et
        });
      }, [ne, ee, me]), R(function() {
        Q(et) && nt({
          inst: et
        });
        var dt = function() {
          Q(et) && nt({
            inst: et
          });
        };
        return ne(dt);
      }, [ne]), D(ee), ee;
    }
    function Q(ne) {
      var me = ne.getSnapshot, fe = ne.value;
      try {
        var ee = me();
        return !E(fe, ee);
      } catch {
        return !0;
      }
    }
    function V(ne, me, fe) {
      return me();
    }
    var te = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ee = !te, Me = Ee ? V : A, le = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Me;
    yE.useSyncExternalStore = le, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yE;
}
var yx;
function Lb() {
  return yx || (yx = 1, process.env.NODE_ENV === "production" ? eg.exports = tj() : eg.exports = nj()), eg.exports;
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
var gx;
function rj() {
  if (gx)
    return vE;
  gx = 1;
  var i = Bo, u = Lb();
  function c(D, z) {
    return D === z && (D !== 0 || 1 / D === 1 / z) || D !== D && z !== z;
  }
  var p = typeof Object.is == "function" ? Object.is : c, m = u.useSyncExternalStore, E = i.useRef, g = i.useEffect, R = i.useMemo, b = i.useDebugValue;
  return vE.useSyncExternalStoreWithSelector = function(D, z, U, A, Q) {
    var V = E(null);
    if (V.current === null) {
      var te = { hasValue: !1, value: null };
      V.current = te;
    } else
      te = V.current;
    V = R(function() {
      function Me(ee) {
        if (!le) {
          if (le = !0, ne = ee, ee = A(ee), Q !== void 0 && te.hasValue) {
            var ue = te.value;
            if (Q(ue, ee))
              return me = ue;
          }
          return me = ee;
        }
        if (ue = me, p(ne, ee))
          return ue;
        var We = A(ee);
        return Q !== void 0 && Q(ue, We) ? ue : (ne = ee, me = We);
      }
      var le = !1, ne, me, fe = U === void 0 ? null : U;
      return [function() {
        return Me(z());
      }, fe === null ? void 0 : function() {
        return Me(fe());
      }];
    }, [z, U, A, Q]);
    var Ee = m(D, V[0], V[1]);
    return g(function() {
      te.hasValue = !0, te.value = Ee;
    }, [Ee]), b(Ee), Ee;
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
var Sx;
function aj() {
  return Sx || (Sx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Bo, u = Lb();
    function c(z, U) {
      return z === U && (z !== 0 || 1 / z === 1 / U) || z !== z && U !== U;
    }
    var p = typeof Object.is == "function" ? Object.is : c, m = u.useSyncExternalStore, E = i.useRef, g = i.useEffect, R = i.useMemo, b = i.useDebugValue;
    function D(z, U, A, Q, V) {
      var te = E(null), Ee;
      te.current === null ? (Ee = {
        hasValue: !1,
        value: null
      }, te.current = Ee) : Ee = te.current;
      var Me = R(function() {
        var fe = !1, ee, ue, We = function(Nt) {
          if (!fe) {
            fe = !0, ee = Nt;
            var Pe = Q(Nt);
            if (V !== void 0 && Ee.hasValue) {
              var at = Ee.value;
              if (V(at, Pe))
                return ue = at, at;
            }
            return ue = Pe, Pe;
          }
          var hn = ee, kt = ue;
          if (p(hn, Nt))
            return kt;
          var _n = Q(Nt);
          return V !== void 0 && V(kt, _n) ? kt : (ee = Nt, ue = _n, _n);
        }, et = A === void 0 ? null : A, nt = function() {
          return We(U());
        }, dt = et === null ? void 0 : function() {
          return We(et());
        };
        return [nt, dt];
      }, [U, A, Q, V]), le = Me[0], ne = Me[1], me = m(z, le, ne);
      return g(function() {
        Ee.hasValue = !0, Ee.value = me;
      }, [me]), b(me), me;
    }
    gE.useSyncExternalStoreWithSelector = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), gE;
}
process.env.NODE_ENV === "production" ? zE.exports = rj() : zE.exports = aj();
var ij = zE.exports;
const lj = /* @__PURE__ */ CN(ij), { useSyncExternalStoreWithSelector: oj } = lj;
function uj(i, u = i.getState, c) {
  const p = oj(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    u,
    c
  );
  return wN(p), p;
}
const Ex = (i) => {
  const u = typeof i == "function" ? ej(i) : i, c = (p, m) => uj(u, p, m);
  return Object.assign(c, u), c;
}, sj = (i) => i ? Ex(i) : Ex, cj = (i, u) => (...c) => Object.assign({}, i, u(...c)), Ub = sj(
  cj(
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
), fj = ({
  children: i,
  currentName: u,
  variant: c = "neutral"
}) => {
  const { isOpen: p, current: m, closeModal: E } = Ub(), g = document.querySelector("#modal-root"), R = tr(null);
  return pg(() => {
    p && R.current && R.current.focus();
  }, [p]), !p || u !== m ? null : g ? JA.createPortal(
    /* @__PURE__ */ F.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: R,
        onKeyDown: (b) => {
          b.key === "Escape" && E();
        },
        className: "modal",
        children: [
          /* @__PURE__ */ F.jsx("div", { className: "modal-overlay", onClick: E }),
          /* @__PURE__ */ F.jsx("div", { className: `modal-body container rounded-box bg-${c}`, children: i })
        ]
      }
    ),
    g
  ) : null;
}, dj = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], pj = ({
  children: i,
  data: u,
  itemsPerPage: c = 30
}) => {
  const p = fc(() => u.length, [u]), [m, E] = Dr(1), [g, R] = Dr(c), b = fc(() => u.slice(
    (m - 1) * g,
    m * g
  ), [u, m, g]);
  return /* @__PURE__ */ F.jsxs("div", { className: "table-container pagination", children: [
    /* @__PURE__ */ F.jsx("div", { className: "table-content custom-scroll", children: i({ data: b() }) }),
    /* @__PURE__ */ F.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: m === 1,
          onClick: () => E(1),
          children: /* @__PURE__ */ F.jsx(vr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: m === 1,
          onClick: () => E((D) => D - 1),
          children: /* @__PURE__ */ F.jsx(vr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ F.jsxs("span", { children: [
        "Page ",
        /* @__PURE__ */ F.jsx("span", { className: "page", children: m }),
        " of",
        " ",
        /* @__PURE__ */ F.jsx("span", { className: "page", children: Math.ceil(p() / g) })
      ] }),
      /* @__PURE__ */ F.jsx(
        Dg,
        {
          items: dj,
          currentSelected: c,
          labelExtractor: (D) => `Per page ${D}`,
          showQty: 3,
          onChange: (D, z) => {
            const U = Math.ceil(p() / z), A = m * g, V = (m > U ? U * z : m * z) / A, te = V !== 1 ? Math.floor(m / V) : m;
            m > U ? E(U) : E(te < 1 ? 1 : te), R(z);
          }
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(p() / g) === m,
          onClick: () => E((D) => D + 1),
          children: /* @__PURE__ */ F.jsx(vr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ F.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(p() / g) === m,
          onClick: () => E(Math.ceil(p() / g)),
          title: "Last Page",
          children: /* @__PURE__ */ F.jsx(vr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ F.jsxs("span", { children: [
        p(),
        " items"
      ] })
    ] })
  ] });
}, hj = (i, u, c) => {
  let p;
  return (...m) => {
    const g = () => {
      p = null, c || i.apply(void 0, m);
    }, R = c && !p;
    clearTimeout(p), p = setTimeout(g, u), R && i.apply(void 0, m);
  };
}, vj = (i) => {
  const [u, c] = Dr(i ?? null), [p, m] = Dr({
    top: (u == null ? void 0 : u.scrollTop) ?? 0,
    scrollHeight: (u == null ? void 0 : u.scrollHeight) ?? 0,
    height: (u == null ? void 0 : u.clientHeight) ?? 0
  });
  return pg(() => {
    const E = () => {
      u && m({
        top: u.scrollTop,
        scrollHeight: u.scrollHeight,
        height: u.clientHeight
      });
    };
    if (u)
      return u == null || u.addEventListener("scroll", hj(E, 150)), () => {
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
}, mj = ({
  children: i,
  data: u,
  tableContainerRef: c
}) => {
  const { height: p, scrollHeight: m, top: E, root: g, setRoot: R, changeScrollData: b } = vj(c == null ? void 0 : c.current), D = tr(0), z = tr(D.current * 2), U = 40, A = fc(() => c.current === null ? 10 : Math.ceil(c.current.clientHeight / U), [c]);
  pg(() => (g === null && R(c.current), D.current = A(), () => {
  }), [A, c, g, R, b]);
  const Q = fc(() => {
    let V = 0;
    return g === null ? [] : (D.current < 10 && (D.current = A() * 2), Math.ceil(p + E) === m && (z.current += D.current, g.scrollTo({
      top: D.current * U
    })), z.current > D.current * 3 && E > 0 && (V = z.current - D.current * 3), E === 0 && z.current > D.current * 3 && (z.current -= D.current, V = z.current - D.current * 3, g.scrollTo({
      top: D.current * U
    })), u.slice(V, z.current));
  }, [u, p, A, m, E, g, D]);
  return i({ data: Q() });
}, yj = {
  scroll: mj,
  pagination: pj
}, gj = ({
  mode: i,
  children: u,
  data: c
}) => {
  const p = tr(null), m = yj[i];
  return /* @__PURE__ */ F.jsx(
    "div",
    {
      className: `table-container ${i}`,
      ref: p,
      children: /* @__PURE__ */ F.jsx(m, { tableContainerRef: p, data: c, children: u })
    }
  );
}, Sj = ({
  closeModal: i,
  config: u
}) => /* @__PURE__ */ F.jsxs(fj, { currentName: "table-config-modal", children: [
  u.map((c) => /* @__PURE__ */ F.jsxs("div", { className: "container row center", children: [
    /* @__PURE__ */ F.jsx("span", { children: c }),
    /* @__PURE__ */ F.jsx(Dg, { variant: "base-300", items: ["Expected", "Overhelmed", "Below Expectation"] })
  ] }, c)),
  /* @__PURE__ */ F.jsx("button", { className: "btn btn-primary ring-info", onClick: i, children: "Save" })
] }), Ej = ({
  index: i,
  columns: u,
  translation: c,
  column: p,
  ordersType: m,
  orderedHeader: E,
  order: g,
  setOrder: R,
  tBodyRef: b,
  mousePosition: D
}) => /* @__PURE__ */ F.jsx("th", { children: /* @__PURE__ */ F.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ F.jsx("span", { children: c(p) }),
  /* @__PURE__ */ F.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ F.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${m[g] === "asc" && E.current === p ? "active" : ""}`,
        onClick: () => {
          R(
            (z) => z === 1 && E.current === p ? 0 : 1
          ), E.current = p;
        },
        children: /* @__PURE__ */ F.jsx(vr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${m[g] === "desc" && E.current === p ? "active" : ""}`,
        onClick: () => {
          R(
            (z) => z === 2 && E.current === p ? 0 : 2
          ), E.current = p;
        },
        children: /* @__PURE__ */ F.jsx(vr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  u.length - 1 !== i && /* @__PURE__ */ F.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (z) => {
        D.current.startPosition = z.clientX;
      },
      onMouseMove: (z) => {
        var V;
        if (b.current === null || D.current.startPosition === 0)
          return;
        D.current.currentPosition = z.clientX;
        const U = (V = b.current.firstChild) == null ? void 0 : V.childNodes[i];
        if (U === null)
          return;
        const A = U.getBoundingClientRect().width, Q = D.current.currentPosition - D.current.startPosition;
        U.style.width = `${A + Q}px`, D.current.startPosition = D.current.currentPosition;
      },
      onMouseUp: () => {
        D.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onMouseLeave: () => {
        D.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onClick: (z) => {
        var A;
        if (z.detail < 2 || b.current === null)
          return;
        const U = (A = b.current.firstChild) == null ? void 0 : A.childNodes[i];
        U !== null && (U.style.width = "auto");
      },
      children: [
        /* @__PURE__ */ F.jsx("span", {}),
        /* @__PURE__ */ F.jsx("span", {})
      ]
    }
  )
] }) }), _j = (i, u, c = "asc") => {
  if (c === "default" || u === null)
    return i;
  const p = c === "asc" ? 1 : -1;
  return i.slice().sort((m, E) => {
    const g = m[u], R = E[u];
    return g < R ? -1 * p : g > R ? 1 * p : 0;
  });
}, _x = {
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
}, wx = ["default", "asc", "desc"], Oj = ({
  headers: i,
  data: u,
  // hideColumn = [],
  dataConfig: c,
  // headersConfig,
  mode: p = "pagination"
}) => {
  const { closeModal: m } = Ub(), E = (te) => Object.hasOwnProperty.call(_x, te) ? _x[te] : te, [g] = Dr(p), [R, b] = Dr(0), D = tr(null), z = tr(null), U = tr({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [A] = Dr(""), Q = fc(() => u.filter((te) => {
    if (A.trim() === "")
      return u;
    const Ee = A.toLowerCase().trim();
    return Object.entries(te).some(([le, ne]) => {
      var me;
      return typeof ne == "object" && Object.hasOwnProperty.call(c, le) ? String((me = c == null ? void 0 : c[le]) == null ? void 0 : me.call(c, ne)).toLowerCase().includes(Ee) : typeof ne == "object" ? String(Object.values(ne)[0]).toLowerCase().includes(Ee) : String(ne).toLowerCase().includes(Ee);
    });
  }), [A, u, c]), V = fc(() => _j(Q(), D.current, wx[R]), [R, Q, D]);
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx(gj, { mode: g, data: V(), children: ({ data: te }) => te.length === 0 ? null : /* @__PURE__ */ F.jsxs("table", { className: "table", children: [
      /* @__PURE__ */ F.jsx("thead", { children: /* @__PURE__ */ F.jsxs("tr", { children: [
        i && i.map((Ee, Me) => /* @__PURE__ */ F.jsx("th", { children: Ee }, Me)),
        i === void 0 && Object.keys(te[0]).map((Ee, Me) => /* @__PURE__ */ F.jsx(
          Ej,
          {
            tBodyRef: z,
            mousePosition: U,
            orderedHeader: D,
            order: R,
            setOrder: b,
            column: Ee,
            index: Me,
            columns: Object.keys(te[0]),
            ordersType: wx,
            translation: E
          },
          Me
        ))
      ] }) }),
      /* @__PURE__ */ F.jsx("tbody", { ref: z, children: te.map((Ee, Me) => /* @__PURE__ */ F.jsx("tr", { tabIndex: 0, children: Object.entries(Ee).map(([le, ne], me) => {
        var ee;
        let fe;
        return typeof ne == "object" && (c == null ? void 0 : c[le]) === void 0 ? fe = Object.values(ne)[0] : Object.hasOwnProperty.call(c ?? {}, le) ? fe = (ee = c == null ? void 0 : c[le]) == null ? void 0 : ee.call(c, ne) : fe = ne, /* @__PURE__ */ F.jsx(
          "td",
          {
            title: "Click to copy",
            style: { width: "auto" },
            children: typeof ne != "object" ? fe : /* @__PURE__ */ F.jsx("div", { className: "cell-container", children: /* @__PURE__ */ F.jsxs("div", { className: "cell-container--header", children: [
              /* @__PURE__ */ F.jsx("span", { children: fe }),
              /* @__PURE__ */ F.jsx(
                "button",
                {
                  className: "btn btn-primary btn-icon btn-xs btn-square",
                  onClick: (ue) => {
                    var nt;
                    const We = (nt = ue.currentTarget.parentNode) == null ? void 0 : nt.parentNode;
                    if (We === null)
                      return;
                    if (We.lastChild.className === "content") {
                      We.removeChild(
                        We.lastChild
                      );
                      return;
                    }
                    const et = document.createElement("ul");
                    et.className = "content", Object.entries(ne).forEach(
                      ([dt, Nt]) => {
                        const Pe = document.createElement("li");
                        Pe.innerText = `${E(
                          dt
                        )}: ${Nt}`, et.appendChild(Pe);
                      }
                    ), We.appendChild(
                      et
                    );
                  },
                  children: /* @__PURE__ */ F.jsx(vr, { icon: "eva:arrow-down-fill" })
                }
              )
            ] }) })
          },
          me
        );
      }) }, Me)) })
    ] }) }),
    /* @__PURE__ */ F.jsx(Sj, { config: Object.keys(u[0]), closeModal: m })
  ] });
};
export {
  bj as Chart,
  Dj as DateRangePicker,
  kj as DetailedWorkDay,
  VA as Header,
  Mj as Main,
  fj as Modal,
  Dg as Select,
  Rj as ShowPassword,
  WA as Sidebar,
  Oj as Table,
  OA as Textfield,
  hj as debounce,
  Ub as useModal,
  vj as useScroll
};
