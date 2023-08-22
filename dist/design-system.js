import Yu, { Fragment as sL, useRef as cL, useDebugValue as fL } from "react";
function dL(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var dE = { exports: {} }, bh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zw;
function pL() {
  if (zw)
    return bh;
  zw = 1;
  var i = Yu, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, k, M) {
    var P, U = {}, I = null, Q = null;
    M !== void 0 && (I = "" + M), k.key !== void 0 && (I = "" + k.key), k.ref !== void 0 && (Q = k.ref);
    for (P in k)
      h.call(k, P) && !_.hasOwnProperty(P) && (U[P] = k[P]);
    if (b && b.defaultProps)
      for (P in k = b.defaultProps, k)
        U[P] === void 0 && (U[P] = k[P]);
    return { $$typeof: s, type: b, key: I, ref: Q, props: U, _owner: m.current };
  }
  return bh.Fragment = f, bh.jsx = S, bh.jsxs = S, bh;
}
var Oh = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aw;
function hL() {
  return Aw || (Aw = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Yu, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
    function se(x) {
      if (x === null || typeof x != "object")
        return null;
      var K = ne && x[ne] || x[ae];
      return typeof K == "function" ? K : null;
    }
    var Me = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ie(x) {
      {
        for (var K = arguments.length, pe = new Array(K > 1 ? K - 1 : 0), Fe = 1; Fe < K; Fe++)
          pe[Fe - 1] = arguments[Fe];
        ee("error", x, pe);
      }
    }
    function ee(x, K, pe) {
      {
        var Fe = Me.ReactDebugCurrentFrame, Ze = Fe.getStackAddendum();
        Ze !== "" && (K += "%s", pe = pe.concat([Ze]));
        var vt = pe.map(function(Je) {
          return String(Je);
        });
        vt.unshift("Warning: " + K), Function.prototype.apply.call(console[x], console, vt);
      }
    }
    var ye = !1, ve = !1, le = !1, he = !1, it = !1, tt;
    tt = Symbol.for("react.module.reference");
    function lt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === h || x === _ || it || x === m || x === M || x === P || he || x === Q || ye || ve || le || typeof x == "object" && x !== null && (x.$$typeof === I || x.$$typeof === U || x.$$typeof === S || x.$$typeof === b || x.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === tt || x.getModuleId !== void 0));
    }
    function ht(x, K, pe) {
      var Fe = x.displayName;
      if (Fe)
        return Fe;
      var Ze = K.displayName || K.name || "";
      return Ze !== "" ? pe + "(" + Ze + ")" : pe;
    }
    function Vt(x) {
      return x.displayName || "Context";
    }
    function Ie(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case h:
          return "Fragment";
        case f:
          return "Portal";
        case _:
          return "Profiler";
        case m:
          return "StrictMode";
        case M:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case b:
            var K = x;
            return Vt(K) + ".Consumer";
          case S:
            var pe = x;
            return Vt(pe._context) + ".Provider";
          case k:
            return ht(x, x.render, "ForwardRef");
          case U:
            var Fe = x.displayName || null;
            return Fe !== null ? Fe : Ie(x.type) || "Memo";
          case I: {
            var Ze = x, vt = Ze._payload, Je = Ze._init;
            try {
              return Ie(Je(vt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, hn = 0, kt, _n, oe, Ae, Ee, yt, Ct;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function hr() {
      {
        if (hn === 0) {
          kt = console.log, _n = console.info, oe = console.warn, Ae = console.error, Ee = console.group, yt = console.groupCollapsed, Ct = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        hn++;
      }
    }
    function Ja() {
      {
        if (hn--, hn === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, x, {
              value: kt
            }),
            info: et({}, x, {
              value: _n
            }),
            warn: et({}, x, {
              value: oe
            }),
            error: et({}, x, {
              value: Ae
            }),
            group: et({}, x, {
              value: Ee
            }),
            groupCollapsed: et({}, x, {
              value: yt
            }),
            groupEnd: et({}, x, {
              value: Ct
            })
          });
        }
        hn < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Cn = Me.ReactCurrentDispatcher, sa;
    function nr(x, K, pe) {
      {
        if (sa === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var Fe = Ze.stack.trim().match(/\n( *(at )?)/);
            sa = Fe && Fe[1] || "";
          }
        return `
` + sa + x;
      }
    }
    var xr = !1, ei;
    {
      var Dr = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new Dr();
    }
    function ca(x, K) {
      if (!x || xr)
        return "";
      {
        var pe = ei.get(x);
        if (pe !== void 0)
          return pe;
      }
      var Fe;
      xr = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var vt;
      vt = Cn.current, Cn.current = null, hr();
      try {
        if (K) {
          var Je = function() {
            throw Error();
          };
          if (Object.defineProperty(Je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Je, []);
            } catch (gt) {
              Fe = gt;
            }
            Reflect.construct(x, [], Je);
          } else {
            try {
              Je.call();
            } catch (gt) {
              Fe = gt;
            }
            x.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Fe = gt;
          }
          x();
        }
      } catch (gt) {
        if (gt && Fe && typeof gt.stack == "string") {
          for (var Ye = gt.stack.split(`
`), Nn = Fe.stack.split(`
`), Qt = Ye.length - 1, qt = Nn.length - 1; Qt >= 1 && qt >= 0 && Ye[Qt] !== Nn[qt]; )
            qt--;
          for (; Qt >= 1 && qt >= 0; Qt--, qt--)
            if (Ye[Qt] !== Nn[qt]) {
              if (Qt !== 1 || qt !== 1)
                do
                  if (Qt--, qt--, qt < 0 || Ye[Qt] !== Nn[qt]) {
                    var vr = `
` + Ye[Qt].replace(" at new ", " at ");
                    return x.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", x.displayName)), typeof x == "function" && ei.set(x, vr), vr;
                  }
                while (Qt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        xr = !1, Cn.current = vt, Ja(), Error.prepareStackTrace = Ze;
      }
      var rl = x ? x.displayName || x.name : "", fc = rl ? nr(rl) : "";
      return typeof x == "function" && ei.set(x, fc), fc;
    }
    function Mn(x, K, pe) {
      return ca(x, !1);
    }
    function rr(x) {
      var K = x.prototype;
      return !!(K && K.isReactComponent);
    }
    function In(x, K, pe) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return ca(x, rr(x));
      if (typeof x == "string")
        return nr(x);
      switch (x) {
        case M:
          return nr("Suspense");
        case P:
          return nr("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case k:
            return Mn(x.render);
          case U:
            return In(x.type, K, pe);
          case I: {
            var Fe = x, Ze = Fe._payload, vt = Fe._init;
            try {
              return In(vt(Ze), K, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var ar = Object.prototype.hasOwnProperty, ir = {}, fa = Me.ReactDebugCurrentFrame;
    function za(x) {
      if (x) {
        var K = x._owner, pe = In(x.type, x._source, K ? K.type : null);
        fa.setExtraStackFrame(pe);
      } else
        fa.setExtraStackFrame(null);
    }
    function _i(x, K, pe, Fe, Ze) {
      {
        var vt = Function.call.bind(ar);
        for (var Je in x)
          if (vt(x, Je)) {
            var Ye = void 0;
            try {
              if (typeof x[Je] != "function") {
                var Nn = Error((Fe || "React class") + ": " + pe + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              Ye = x[Je](K, Je, Fe, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              Ye = Qt;
            }
            Ye && !(Ye instanceof Error) && (za(Ze), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", pe, Je, typeof Ye), za(null)), Ye instanceof Error && !(Ye.message in ir) && (ir[Ye.message] = !0, za(Ze), ie("Failed %s type: %s", pe, Ye.message), za(null));
          }
      }
    }
    var ti = Array.isArray;
    function Aa(x) {
      return ti(x);
    }
    function $r(x) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, pe = K && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return pe;
      }
    }
    function ni(x) {
      try {
        return Gr(x), !1;
      } catch {
        return !0;
      }
    }
    function Gr(x) {
      return "" + x;
    }
    function Fa(x) {
      if (ni(x))
        return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $r(x)), Gr(x);
    }
    var vn = Me.ReactCurrentOwner, Qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, el, Ha, de;
    de = {};
    function Ne(x) {
      if (ar.call(x, "ref")) {
        var K = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function nt(x) {
      if (ar.call(x, "key")) {
        var K = Object.getOwnPropertyDescriptor(x, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function bt(x, K) {
      if (typeof x.ref == "string" && vn.current && K && vn.current.stateNode !== K) {
        var pe = Ie(vn.current.type);
        de[pe] || (ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(vn.current.type), x.ref), de[pe] = !0);
      }
    }
    function Zt(x, K) {
      {
        var pe = function() {
          el || (el = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        pe.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Ln(x, K) {
      {
        var pe = function() {
          Ha || (Ha = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        pe.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var cn = function(x, K, pe, Fe, Ze, vt, Je) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: x,
        key: K,
        ref: pe,
        props: Je,
        // Record the component responsible for creating this element.
        _owner: vt
      };
      return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function kr(x, K, pe, Fe, Ze) {
      {
        var vt, Je = {}, Ye = null, Nn = null;
        pe !== void 0 && (Fa(pe), Ye = "" + pe), nt(K) && (Fa(K.key), Ye = "" + K.key), Ne(K) && (Nn = K.ref, bt(K, Ze));
        for (vt in K)
          ar.call(K, vt) && !Qr.hasOwnProperty(vt) && (Je[vt] = K[vt]);
        if (x && x.defaultProps) {
          var Qt = x.defaultProps;
          for (vt in Qt)
            Je[vt] === void 0 && (Je[vt] = Qt[vt]);
        }
        if (Ye || Nn) {
          var qt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ye && Zt(Je, qt), Nn && Ln(Je, qt);
        }
        return cn(x, Ye, Nn, Ze, Fe, vn.current, Je);
      }
    }
    var Ht = Me.ReactCurrentOwner, qr = Me.ReactDebugCurrentFrame;
    function Ut(x) {
      if (x) {
        var K = x._owner, pe = In(x.type, x._source, K ? K.type : null);
        qr.setExtraStackFrame(pe);
      } else
        qr.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function Iu(x) {
      return typeof x == "object" && x !== null && x.$$typeof === s;
    }
    function Vl() {
      {
        if (Ht.current) {
          var x = Ie(Ht.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Bu(x) {
      {
        if (x !== void 0) {
          var K = x.fileName.replace(/^.*[\\\/]/, ""), pe = x.lineNumber;
          return `

Check your code at ` + K + ":" + pe + ".";
        }
        return "";
      }
    }
    var Xo = {};
    function cc(x) {
      {
        var K = Vl();
        if (!K) {
          var pe = typeof x == "string" ? x : x.displayName || x.name;
          pe && (K = `

Check the top-level render call using <` + pe + ">.");
        }
        return K;
      }
    }
    function Il(x, K) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var pe = cc(K);
        if (Xo[pe])
          return;
        Xo[pe] = !0;
        var Fe = "";
        x && x._owner && x._owner !== Ht.current && (Fe = " It was passed a child from " + Ie(x._owner.type) + "."), Ut(x), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Fe), Ut(null);
      }
    }
    function Wu(x, K) {
      {
        if (typeof x != "object")
          return;
        if (Aa(x))
          for (var pe = 0; pe < x.length; pe++) {
            var Fe = x[pe];
            Iu(Fe) && Il(Fe, K);
          }
        else if (Iu(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Ze = se(x);
          if (typeof Ze == "function" && Ze !== x.entries)
            for (var vt = Ze.call(x), Je; !(Je = vt.next()).done; )
              Iu(Je.value) && Il(Je.value, K);
        }
      }
    }
    function Bl(x) {
      {
        var K = x.type;
        if (K == null || typeof K == "string")
          return;
        var pe;
        if (typeof K == "function")
          pe = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === U))
          pe = K.propTypes;
        else
          return;
        if (pe) {
          var Fe = Ie(K);
          _i(pe, x.props, "prop", Fe, x);
        } else if (K.PropTypes !== void 0 && !jt) {
          jt = !0;
          var Ze = Ie(K);
          ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $u(x) {
      {
        for (var K = Object.keys(x.props), pe = 0; pe < K.length; pe++) {
          var Fe = K[pe];
          if (Fe !== "children" && Fe !== "key") {
            Ut(x), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), Ut(null);
            break;
          }
        }
        x.ref !== null && (Ut(x), ie("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    function ri(x, K, pe, Fe, Ze, vt) {
      {
        var Je = lt(x);
        if (!Je) {
          var Ye = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = Bu(Ze);
          Nn ? Ye += Nn : Ye += Vl();
          var Qt;
          x === null ? Qt = "null" : Aa(x) ? Qt = "array" : x !== void 0 && x.$$typeof === s ? (Qt = "<" + (Ie(x.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof x, ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, Ye);
        }
        var qt = kr(x, K, pe, Ze, vt);
        if (qt == null)
          return qt;
        if (Je) {
          var vr = K.children;
          if (vr !== void 0)
            if (Fe)
              if (Aa(vr)) {
                for (var rl = 0; rl < vr.length; rl++)
                  Wu(vr[rl], x);
                Object.freeze && Object.freeze(vr);
              } else
                ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wu(vr, x);
        }
        return x === h ? $u(qt) : Bl(qt), qt;
      }
    }
    function tl(x, K, pe) {
      return ri(x, K, pe, !0);
    }
    function Xr(x, K, pe) {
      return ri(x, K, pe, !1);
    }
    var ja = Xr, nl = tl;
    Oh.Fragment = h, Oh.jsx = ja, Oh.jsxs = nl;
  }()), Oh;
}
process.env.NODE_ENV === "production" ? dE.exports = pL() : dE.exports = hL();
var Yt = dE.exports;
const vL = ({
  label: i,
  onMouseEnter: s,
  x: f,
  y: h,
  height: m,
  width: _,
  ...S
}) => {
  const b = String(S.value).length * 4, k = _ / 2 - b;
  return /* @__PURE__ */ Yt.jsxs(
    "g",
    {
      onMouseEnter: () => s == null ? void 0 : s({
        label: i,
        value: S.value
      }),
      onMouseMove: (M) => {
        var P;
        return (P = S.onMouseMove) == null ? void 0 : P.call(S, { x: M.clientX, y: M.clientY });
      },
      children: [
        /* @__PURE__ */ Yt.jsx("text", { x: f + k, y: h - 5, children: S.value }),
        /* @__PURE__ */ Yt.jsx("rect", { x: f, y: h, height: m, width: _, rx: 4 })
      ]
    }
  );
}, jA = ({
  width: i,
  height: s,
  data: f,
  showOnly: h,
  tooltipRef: m,
  groupBy: _,
  maxItemValue: S
}) => {
  if (console.log(f), i === 0 || s === 0 || f.length === 0)
    return null;
  h && (f = f.map((P) => ({
    [_]: P[_],
    [h]: P[h]
  })));
  const b = Object.keys(f[0]).length;
  let k = 24, M = (i - k * (f.length - 1)) / f.length;
  return h ? k = 24 : (k = 0, M = (i - k * (f.length - 1) * (b - 1)) / f.length / b), console.log(f, M, b), /* @__PURE__ */ Yt.jsx(Yt.Fragment, { children: f.map((P, U) => {
    const I = (s - 40) / S, Q = { ...P };
    delete Q[_];
    let ne = 1, se = U * ne * b * ((M + k) / (b - 1)), Me = U > 0 ? se / 2 : se;
    Me += String(P[_]).length * 6;
    const ie = (M + k) * b;
    if (!h) {
      const ee = (i - k * (f.length - 1)) / f.length;
      Me = ee * U + ee / 2 - String(P[_]).length * 8;
    }
    return /* @__PURE__ */ Yt.jsxs("g", { children: [
      Object.entries(Q).map(([ee, ye], ve) => {
        se = ve * b * ((M + k * (b - 1)) / (b - 1)), se = se + U * ie, h && (se /= 2);
        const he = ye * I;
        return ne += 1, /* @__PURE__ */ Yt.jsx(
          vL,
          {
            x: se,
            value: ye,
            y: s - 20 - he,
            onMouseEnter: ({ label: it, value: tt }) => {
              m.current && (m.current.innerHTML = `
                         <span>${it}: ${tt}</span>
                    `);
            },
            itemIndex: U,
            width: M,
            height: he,
            label: ee
          },
          `${ee}-${U}`
        );
      }),
      /* @__PURE__ */ Yt.jsx(
        "text",
        {
          y: s - 4,
          x: Me + (M - k - String(P[_]).length * 8) / 2,
          children: P[_]
        }
      )
    ] }, U);
  }) });
}, mL = (i, s, f, h, m, _) => {
  s = s - 16;
  const S = s / h, b = [];
  return Object.values(i).forEach((k) => {
    let M = "";
    k.forEach((P, U) => {
      U === 0 && (_ ? M += `M-4,${s + 50}L-4,${s - P * S}` : M += `M0,${s - P * S}`), U > 0 && (M += `L${m * U},${s - P * S}`), U === k.length - 1 && (M += `L${f + 4},${s + 50}`);
    }), b.push(M);
  }), b;
}, YA = ({
  data: i,
  width: s,
  height: f,
  filled: h = !0,
  tooltipRef: m,
  maxItemValue: _,
  lineRef: S
}) => {
  if (s === 0 || f === 0 || i.length === 0)
    return null;
  const b = Object.keys(i[0]).length, k = s / (i.length - 1) + 1, M = i.reduce(
    (U, I) => (Object.entries(I).forEach(
      ([Q, ne]) => {
        U != null && U[Q] ? U[Q].push(ne) : U[Q] = [ne];
      }
    ), U),
    {}
  ), P = mL(
    M,
    f,
    s,
    _,
    k,
    h
  );
  return /* @__PURE__ */ Yt.jsx(Yt.Fragment, { children: P == null ? void 0 : P.map((U, I) => /* @__PURE__ */ Yt.jsxs("g", { children: [
    /* @__PURE__ */ Yt.jsx(
      "path",
      {
        className: h ? "filled" : "",
        d: U,
        strokeWidth: "3",
        fill: h ? "currentColor" : "none",
        strokeLinejoin: "round",
        strokeLinecap: "round",
        onMouseMove: (Q) => {
          const ne = Q.clientX;
          if (S.current) {
            const ae = S.current.parentNode.getBoundingClientRect().left, Me = Array.from({ length: b }).map(
              (ee, ye) => k * ye
            ).map(
              (ee) => Math.abs(ne - ae - ee)
            ), ie = Me.indexOf(
              Math.min(...Me)
            );
            if (m.current) {
              const ee = Object.entries(
                i[ie] ?? []
              ).reduce((ye, ve) => (ye += `<span>${ve[0]}: ${ve[1]}</span>`, ye), "");
              m.current.innerHTML = `
                       ${ee}
                    `;
            }
          }
        }
      }
    ),
    h && /* @__PURE__ */ Yt.jsxs("linearGradient", { id: `lgrad-${I}`, gradientTransform: "rotate(90)", children: [
      /* @__PURE__ */ Yt.jsx("stop", { offset: "0%", stopColor: "#4169e1" }),
      /* @__PURE__ */ Yt.jsx("stop", { offset: "75%", stopColor: "#c44764" })
    ] })
  ] }, I)) });
};
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var dR;
function ue() {
  return dR.apply(null, arguments);
}
function yL(i) {
  dR = i;
}
function Ki(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function uc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function xt(i, s) {
  return Object.prototype.hasOwnProperty.call(i, s);
}
function kE(i) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(i).length === 0;
  var s;
  for (s in i)
    if (xt(i, s))
      return !1;
  return !0;
}
function Ua(i) {
  return i === void 0;
}
function ju(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function Ih(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function pR(i, s) {
  var f = [], h, m = i.length;
  for (h = 0; h < m; ++h)
    f.push(s(i[h], h));
  return f;
}
function $o(i, s) {
  for (var f in s)
    xt(s, f) && (i[f] = s[f]);
  return xt(s, "toString") && (i.toString = s.toString), xt(s, "valueOf") && (i.valueOf = s.valueOf), i;
}
function Yl(i, s, f, h) {
  return FR(i, s, f, h, !0).utc();
}
function gL() {
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
function at(i) {
  return i._pf == null && (i._pf = gL()), i._pf;
}
var pE;
Array.prototype.some ? pE = Array.prototype.some : pE = function(i) {
  var s = Object(this), f = s.length >>> 0, h;
  for (h = 0; h < f; h++)
    if (h in s && i.call(this, s[h], h, s))
      return !0;
  return !1;
};
function bE(i) {
  if (i._isValid == null) {
    var s = at(i), f = pE.call(s.parsedDateParts, function(m) {
      return m != null;
    }), h = !isNaN(i._d.getTime()) && s.overflow < 0 && !s.empty && !s.invalidEra && !s.invalidMonth && !s.invalidWeekday && !s.weekdayMismatch && !s.nullInput && !s.invalidFormat && !s.userInvalidated && (!s.meridiem || s.meridiem && f);
    if (i._strict && (h = h && s.charsLeftOver === 0 && s.unusedTokens.length === 0 && s.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = h;
    else
      return h;
  }
  return i._isValid;
}
function sg(i) {
  var s = Yl(NaN);
  return i != null ? $o(at(s), i) : at(s).userInvalidated = !0, s;
}
var Fw = ue.momentProperties = [], eE = !1;
function OE(i, s) {
  var f, h, m, _ = Fw.length;
  if (Ua(s._isAMomentObject) || (i._isAMomentObject = s._isAMomentObject), Ua(s._i) || (i._i = s._i), Ua(s._f) || (i._f = s._f), Ua(s._l) || (i._l = s._l), Ua(s._strict) || (i._strict = s._strict), Ua(s._tzm) || (i._tzm = s._tzm), Ua(s._isUTC) || (i._isUTC = s._isUTC), Ua(s._offset) || (i._offset = s._offset), Ua(s._pf) || (i._pf = at(s)), Ua(s._locale) || (i._locale = s._locale), _ > 0)
    for (f = 0; f < _; f++)
      h = Fw[f], m = s[h], Ua(m) || (i[h] = m);
  return i;
}
function Bh(i) {
  OE(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), eE === !1 && (eE = !0, ue.updateOffset(this), eE = !1);
}
function Zi(i) {
  return i instanceof Bh || i != null && i._isAMomentObject != null;
}
function hR(i) {
  ue.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function Si(i, s) {
  var f = !0;
  return $o(function() {
    if (ue.deprecationHandler != null && ue.deprecationHandler(null, i), f) {
      var h = [], m, _, S, b = arguments.length;
      for (_ = 0; _ < b; _++) {
        if (m = "", typeof arguments[_] == "object") {
          m += `
[` + _ + "] ";
          for (S in arguments[0])
            xt(arguments[0], S) && (m += S + ": " + arguments[0][S] + ", ");
          m = m.slice(0, -2);
        } else
          m = arguments[_];
        h.push(m);
      }
      hR(
        i + `
Arguments: ` + Array.prototype.slice.call(h).join("") + `
` + new Error().stack
      ), f = !1;
    }
    return s.apply(this, arguments);
  }, s);
}
var Hw = {};
function vR(i, s) {
  ue.deprecationHandler != null && ue.deprecationHandler(i, s), Hw[i] || (hR(s), Hw[i] = !0);
}
ue.suppressDeprecationWarnings = !1;
ue.deprecationHandler = null;
function Pl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function SL(i) {
  var s, f;
  for (f in i)
    xt(i, f) && (s = i[f], Pl(s) ? this[f] = s : this["_" + f] = s);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function hE(i, s) {
  var f = $o({}, i), h;
  for (h in s)
    xt(s, h) && (uc(i[h]) && uc(s[h]) ? (f[h] = {}, $o(f[h], i[h]), $o(f[h], s[h])) : s[h] != null ? f[h] = s[h] : delete f[h]);
  for (h in i)
    xt(i, h) && !xt(s, h) && uc(i[h]) && (f[h] = $o({}, f[h]));
  return f;
}
function ME(i) {
  i != null && this.set(i);
}
var vE;
Object.keys ? vE = Object.keys : vE = function(i) {
  var s, f = [];
  for (s in i)
    xt(i, s) && f.push(s);
  return f;
};
var EL = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function _L(i, s, f) {
  var h = this._calendar[i] || this._calendar.sameElse;
  return Pl(h) ? h.call(s, f) : h;
}
function jl(i, s, f) {
  var h = "" + Math.abs(i), m = s - h.length, _ = i >= 0;
  return (_ ? f ? "+" : "" : "-") + Math.pow(10, Math.max(0, m)).toString().substr(1) + h;
}
var LE = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, $y = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, tE = {}, od = {};
function je(i, s, f, h) {
  var m = h;
  typeof h == "string" && (m = function() {
    return this[h]();
  }), i && (od[i] = m), s && (od[s[0]] = function() {
    return jl(m.apply(this, arguments), s[1], s[2]);
  }), f && (od[f] = function() {
    return this.localeData().ordinal(
      m.apply(this, arguments),
      i
    );
  });
}
function CL(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function TL(i) {
  var s = i.match(LE), f, h;
  for (f = 0, h = s.length; f < h; f++)
    od[s[f]] ? s[f] = od[s[f]] : s[f] = CL(s[f]);
  return function(m) {
    var _ = "", S;
    for (S = 0; S < h; S++)
      _ += Pl(s[S]) ? s[S].call(m, i) : s[S];
    return _;
  };
}
function Ky(i, s) {
  return i.isValid() ? (s = mR(s, i.localeData()), tE[s] = tE[s] || TL(s), tE[s](i)) : i.localeData().invalidDate();
}
function mR(i, s) {
  var f = 5;
  function h(m) {
    return s.longDateFormat(m) || m;
  }
  for ($y.lastIndex = 0; f >= 0 && $y.test(i); )
    i = i.replace(
      $y,
      h
    ), $y.lastIndex = 0, f -= 1;
  return i;
}
var wL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function RL(i) {
  var s = this._longDateFormat[i], f = this._longDateFormat[i.toUpperCase()];
  return s || !f ? s : (this._longDateFormat[i] = f.match(LE).map(function(h) {
    return h === "MMMM" || h === "MM" || h === "DD" || h === "dddd" ? h.slice(1) : h;
  }).join(""), this._longDateFormat[i]);
}
var xL = "Invalid date";
function DL() {
  return this._invalidDate;
}
var kL = "%d", bL = /\d{1,2}/;
function OL(i) {
  return this._ordinal.replace("%d", i);
}
var ML = {
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
function LL(i, s, f, h) {
  var m = this._relativeTime[f];
  return Pl(m) ? m(i, s, f, h) : m.replace(/%d/i, i);
}
function NL(i, s) {
  var f = this._relativeTime[i > 0 ? "future" : "past"];
  return Pl(f) ? f(s) : f.replace(/%s/i, s);
}
var Uh = {};
function Br(i, s) {
  var f = i.toLowerCase();
  Uh[f] = Uh[f + "s"] = Uh[s] = i;
}
function Ei(i) {
  return typeof i == "string" ? Uh[i] || Uh[i.toLowerCase()] : void 0;
}
function NE(i) {
  var s = {}, f, h;
  for (h in i)
    xt(i, h) && (f = Ei(h), f && (s[f] = i[h]));
  return s;
}
var yR = {};
function Wr(i, s) {
  yR[i] = s;
}
function UL(i) {
  var s = [], f;
  for (f in i)
    xt(i, f) && s.push({ unit: f, priority: yR[f] });
  return s.sort(function(h, m) {
    return h.priority - m.priority;
  }), s;
}
function cg(i) {
  return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0;
}
function gi(i) {
  return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
}
function ct(i) {
  var s = +i, f = 0;
  return s !== 0 && isFinite(s) && (f = gi(s)), f;
}
function fd(i, s) {
  return function(f) {
    return f != null ? (gR(this, i, f), ue.updateOffset(this, s), this) : ng(this, i);
  };
}
function ng(i, s) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + s]() : NaN;
}
function gR(i, s, f) {
  i.isValid() && !isNaN(f) && (s === "FullYear" && cg(i.year()) && i.month() === 1 && i.date() === 29 ? (f = ct(f), i._d["set" + (i._isUTC ? "UTC" : "") + s](
    f,
    i.month(),
    mg(f, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + s](f));
}
function zL(i) {
  return i = Ei(i), Pl(this[i]) ? this[i]() : this;
}
function AL(i, s) {
  if (typeof i == "object") {
    i = NE(i);
    var f = UL(i), h, m = f.length;
    for (h = 0; h < m; h++)
      this[f[h].unit](i[f[h].unit]);
  } else if (i = Ei(i), Pl(this[i]))
    return this[i](s);
  return this;
}
var SR = /\d/, Za = /\d\d/, ER = /\d{3}/, UE = /\d{4}/, fg = /[+-]?\d{6}/, an = /\d\d?/, _R = /\d\d\d\d?/, CR = /\d\d\d\d\d\d?/, dg = /\d{1,3}/, zE = /\d{1,4}/, pg = /[+-]?\d{1,6}/, dd = /\d+/, hg = /[+-]?\d+/, FL = /Z|[+-]\d\d:?\d\d/gi, vg = /Z|[+-]\d\d(?::?\d\d)?/gi, HL = /[+-]?\d+(\.\d{1,3})?/, Wh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, rg;
rg = {};
function we(i, s, f) {
  rg[i] = Pl(s) ? s : function(h, m) {
    return h && f ? f : s;
  };
}
function jL(i, s) {
  return xt(rg, i) ? rg[i](s._strict, s._locale) : new RegExp(YL(i));
}
function YL(i) {
  return Ka(
    i.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(s, f, h, m, _) {
        return f || h || m || _;
      }
    )
  );
}
function Ka(i) {
  return i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var mE = {};
function Pt(i, s) {
  var f, h = s, m;
  for (typeof i == "string" && (i = [i]), ju(s) && (h = function(_, S) {
    S[s] = ct(_);
  }), m = i.length, f = 0; f < m; f++)
    mE[i[f]] = h;
}
function $h(i, s) {
  Pt(i, function(f, h, m, _) {
    m._w = m._w || {}, s(f, m._w, m, _);
  });
}
function PL(i, s, f) {
  s != null && xt(mE, i) && mE[i](s, f._a, f, i);
}
var Ir = 0, Au = 1, Hl = 2, tr = 3, Xi = 4, Fu = 5, lc = 6, VL = 7, IL = 8;
function BL(i, s) {
  return (i % s + s) % s;
}
var On;
Array.prototype.indexOf ? On = Array.prototype.indexOf : On = function(i) {
  var s;
  for (s = 0; s < this.length; ++s)
    if (this[s] === i)
      return s;
  return -1;
};
function mg(i, s) {
  if (isNaN(i) || isNaN(s))
    return NaN;
  var f = BL(s, 12);
  return i += (s - f) / 12, f === 1 ? cg(i) ? 29 : 28 : 31 - f % 7 % 2;
}
je("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
je("MMM", 0, 0, function(i) {
  return this.localeData().monthsShort(this, i);
});
je("MMMM", 0, 0, function(i) {
  return this.localeData().months(this, i);
});
Br("month", "M");
Wr("month", 8);
we("M", an);
we("MM", an, Za);
we("MMM", function(i, s) {
  return s.monthsShortRegex(i);
});
we("MMMM", function(i, s) {
  return s.monthsRegex(i);
});
Pt(["M", "MM"], function(i, s) {
  s[Au] = ct(i) - 1;
});
Pt(["MMM", "MMMM"], function(i, s, f, h) {
  var m = f._locale.monthsParse(i, h, f._strict);
  m != null ? s[Au] = m : at(f).invalidMonth = i;
});
var WL = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), TR = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), wR = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, $L = Wh, GL = Wh;
function QL(i, s) {
  return i ? Ki(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || wR).test(s) ? "format" : "standalone"][i.month()] : Ki(this._months) ? this._months : this._months.standalone;
}
function qL(i, s) {
  return i ? Ki(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[wR.test(s) ? "format" : "standalone"][i.month()] : Ki(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function XL(i, s, f) {
  var h, m, _, S = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], h = 0; h < 12; ++h)
      _ = Yl([2e3, h]), this._shortMonthsParse[h] = this.monthsShort(
        _,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[h] = this.months(_, "").toLocaleLowerCase();
  return f ? s === "MMM" ? (m = On.call(this._shortMonthsParse, S), m !== -1 ? m : null) : (m = On.call(this._longMonthsParse, S), m !== -1 ? m : null) : s === "MMM" ? (m = On.call(this._shortMonthsParse, S), m !== -1 ? m : (m = On.call(this._longMonthsParse, S), m !== -1 ? m : null)) : (m = On.call(this._longMonthsParse, S), m !== -1 ? m : (m = On.call(this._shortMonthsParse, S), m !== -1 ? m : null));
}
function KL(i, s, f) {
  var h, m, _;
  if (this._monthsParseExact)
    return XL.call(this, i, s, f);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), h = 0; h < 12; h++) {
    if (m = Yl([2e3, h]), f && !this._longMonthsParse[h] && (this._longMonthsParse[h] = new RegExp(
      "^" + this.months(m, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[h] = new RegExp(
      "^" + this.monthsShort(m, "").replace(".", "") + "$",
      "i"
    )), !f && !this._monthsParse[h] && (_ = "^" + this.months(m, "") + "|^" + this.monthsShort(m, ""), this._monthsParse[h] = new RegExp(_.replace(".", ""), "i")), f && s === "MMMM" && this._longMonthsParse[h].test(i))
      return h;
    if (f && s === "MMM" && this._shortMonthsParse[h].test(i))
      return h;
    if (!f && this._monthsParse[h].test(i))
      return h;
  }
}
function RR(i, s) {
  var f;
  if (!i.isValid())
    return i;
  if (typeof s == "string") {
    if (/^\d+$/.test(s))
      s = ct(s);
    else if (s = i.localeData().monthsParse(s), !ju(s))
      return i;
  }
  return f = Math.min(i.date(), mg(i.year(), s)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](s, f), i;
}
function xR(i) {
  return i != null ? (RR(this, i), ue.updateOffset(this, !0), this) : ng(this, "Month");
}
function ZL() {
  return mg(this.year(), this.month());
}
function JL(i) {
  return this._monthsParseExact ? (xt(this, "_monthsRegex") || DR.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (xt(this, "_monthsShortRegex") || (this._monthsShortRegex = $L), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function eN(i) {
  return this._monthsParseExact ? (xt(this, "_monthsRegex") || DR.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (xt(this, "_monthsRegex") || (this._monthsRegex = GL), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function DR() {
  function i(S, b) {
    return b.length - S.length;
  }
  var s = [], f = [], h = [], m, _;
  for (m = 0; m < 12; m++)
    _ = Yl([2e3, m]), s.push(this.monthsShort(_, "")), f.push(this.months(_, "")), h.push(this.months(_, "")), h.push(this.monthsShort(_, ""));
  for (s.sort(i), f.sort(i), h.sort(i), m = 0; m < 12; m++)
    s[m] = Ka(s[m]), f[m] = Ka(f[m]);
  for (m = 0; m < 24; m++)
    h[m] = Ka(h[m]);
  this._monthsRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + f.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
je("Y", 0, 0, function() {
  var i = this.year();
  return i <= 9999 ? jl(i, 4) : "+" + i;
});
je(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
je(0, ["YYYY", 4], 0, "year");
je(0, ["YYYYY", 5], 0, "year");
je(0, ["YYYYYY", 6, !0], 0, "year");
Br("year", "y");
Wr("year", 1);
we("Y", hg);
we("YY", an, Za);
we("YYYY", zE, UE);
we("YYYYY", pg, fg);
we("YYYYYY", pg, fg);
Pt(["YYYYY", "YYYYYY"], Ir);
Pt("YYYY", function(i, s) {
  s[Ir] = i.length === 2 ? ue.parseTwoDigitYear(i) : ct(i);
});
Pt("YY", function(i, s) {
  s[Ir] = ue.parseTwoDigitYear(i);
});
Pt("Y", function(i, s) {
  s[Ir] = parseInt(i, 10);
});
function zh(i) {
  return cg(i) ? 366 : 365;
}
ue.parseTwoDigitYear = function(i) {
  return ct(i) + (ct(i) > 68 ? 1900 : 2e3);
};
var kR = fd("FullYear", !0);
function tN() {
  return cg(this.year());
}
function nN(i, s, f, h, m, _, S) {
  var b;
  return i < 100 && i >= 0 ? (b = new Date(i + 400, s, f, h, m, _, S), isFinite(b.getFullYear()) && b.setFullYear(i)) : b = new Date(i, s, f, h, m, _, S), b;
}
function Hh(i) {
  var s, f;
  return i < 100 && i >= 0 ? (f = Array.prototype.slice.call(arguments), f[0] = i + 400, s = new Date(Date.UTC.apply(null, f)), isFinite(s.getUTCFullYear()) && s.setUTCFullYear(i)) : s = new Date(Date.UTC.apply(null, arguments)), s;
}
function ag(i, s, f) {
  var h = 7 + s - f, m = (7 + Hh(i, 0, h).getUTCDay() - s) % 7;
  return -m + h - 1;
}
function bR(i, s, f, h, m) {
  var _ = (7 + f - h) % 7, S = ag(i, h, m), b = 1 + 7 * (s - 1) + _ + S, k, M;
  return b <= 0 ? (k = i - 1, M = zh(k) + b) : b > zh(i) ? (k = i + 1, M = b - zh(i)) : (k = i, M = b), {
    year: k,
    dayOfYear: M
  };
}
function jh(i, s, f) {
  var h = ag(i.year(), s, f), m = Math.floor((i.dayOfYear() - h - 1) / 7) + 1, _, S;
  return m < 1 ? (S = i.year() - 1, _ = m + Hu(S, s, f)) : m > Hu(i.year(), s, f) ? (_ = m - Hu(i.year(), s, f), S = i.year() + 1) : (S = i.year(), _ = m), {
    week: _,
    year: S
  };
}
function Hu(i, s, f) {
  var h = ag(i, s, f), m = ag(i + 1, s, f);
  return (zh(i) - h + m) / 7;
}
je("w", ["ww", 2], "wo", "week");
je("W", ["WW", 2], "Wo", "isoWeek");
Br("week", "w");
Br("isoWeek", "W");
Wr("week", 5);
Wr("isoWeek", 5);
we("w", an);
we("ww", an, Za);
we("W", an);
we("WW", an, Za);
$h(
  ["w", "ww", "W", "WW"],
  function(i, s, f, h) {
    s[h.substr(0, 1)] = ct(i);
  }
);
function rN(i) {
  return jh(i, this._week.dow, this._week.doy).week;
}
var aN = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function iN() {
  return this._week.dow;
}
function lN() {
  return this._week.doy;
}
function uN(i) {
  var s = this.localeData().week(this);
  return i == null ? s : this.add((i - s) * 7, "d");
}
function oN(i) {
  var s = jh(this, 1, 4).week;
  return i == null ? s : this.add((i - s) * 7, "d");
}
je("d", 0, "do", "day");
je("dd", 0, 0, function(i) {
  return this.localeData().weekdaysMin(this, i);
});
je("ddd", 0, 0, function(i) {
  return this.localeData().weekdaysShort(this, i);
});
je("dddd", 0, 0, function(i) {
  return this.localeData().weekdays(this, i);
});
je("e", 0, 0, "weekday");
je("E", 0, 0, "isoWeekday");
Br("day", "d");
Br("weekday", "e");
Br("isoWeekday", "E");
Wr("day", 11);
Wr("weekday", 11);
Wr("isoWeekday", 11);
we("d", an);
we("e", an);
we("E", an);
we("dd", function(i, s) {
  return s.weekdaysMinRegex(i);
});
we("ddd", function(i, s) {
  return s.weekdaysShortRegex(i);
});
we("dddd", function(i, s) {
  return s.weekdaysRegex(i);
});
$h(["dd", "ddd", "dddd"], function(i, s, f, h) {
  var m = f._locale.weekdaysParse(i, h, f._strict);
  m != null ? s.d = m : at(f).invalidWeekday = i;
});
$h(["d", "e", "E"], function(i, s, f, h) {
  s[h] = ct(i);
});
function sN(i, s) {
  return typeof i != "string" ? i : isNaN(i) ? (i = s.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function cN(i, s) {
  return typeof i == "string" ? s.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function AE(i, s) {
  return i.slice(s, 7).concat(i.slice(0, s));
}
var fN = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), OR = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), dN = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), pN = Wh, hN = Wh, vN = Wh;
function mN(i, s) {
  var f = Ki(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(s) ? "format" : "standalone"];
  return i === !0 ? AE(f, this._week.dow) : i ? f[i.day()] : f;
}
function yN(i) {
  return i === !0 ? AE(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function gN(i) {
  return i === !0 ? AE(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function SN(i, s, f) {
  var h, m, _, S = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], h = 0; h < 7; ++h)
      _ = Yl([2e3, 1]).day(h), this._minWeekdaysParse[h] = this.weekdaysMin(
        _,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[h] = this.weekdaysShort(
        _,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[h] = this.weekdays(_, "").toLocaleLowerCase();
  return f ? s === "dddd" ? (m = On.call(this._weekdaysParse, S), m !== -1 ? m : null) : s === "ddd" ? (m = On.call(this._shortWeekdaysParse, S), m !== -1 ? m : null) : (m = On.call(this._minWeekdaysParse, S), m !== -1 ? m : null) : s === "dddd" ? (m = On.call(this._weekdaysParse, S), m !== -1 || (m = On.call(this._shortWeekdaysParse, S), m !== -1) ? m : (m = On.call(this._minWeekdaysParse, S), m !== -1 ? m : null)) : s === "ddd" ? (m = On.call(this._shortWeekdaysParse, S), m !== -1 || (m = On.call(this._weekdaysParse, S), m !== -1) ? m : (m = On.call(this._minWeekdaysParse, S), m !== -1 ? m : null)) : (m = On.call(this._minWeekdaysParse, S), m !== -1 || (m = On.call(this._weekdaysParse, S), m !== -1) ? m : (m = On.call(this._shortWeekdaysParse, S), m !== -1 ? m : null));
}
function EN(i, s, f) {
  var h, m, _;
  if (this._weekdaysParseExact)
    return SN.call(this, i, s, f);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), h = 0; h < 7; h++) {
    if (m = Yl([2e3, 1]).day(h), f && !this._fullWeekdaysParse[h] && (this._fullWeekdaysParse[h] = new RegExp(
      "^" + this.weekdays(m, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[h] = new RegExp(
      "^" + this.weekdaysShort(m, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[h] = new RegExp(
      "^" + this.weekdaysMin(m, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[h] || (_ = "^" + this.weekdays(m, "") + "|^" + this.weekdaysShort(m, "") + "|^" + this.weekdaysMin(m, ""), this._weekdaysParse[h] = new RegExp(_.replace(".", ""), "i")), f && s === "dddd" && this._fullWeekdaysParse[h].test(i))
      return h;
    if (f && s === "ddd" && this._shortWeekdaysParse[h].test(i))
      return h;
    if (f && s === "dd" && this._minWeekdaysParse[h].test(i))
      return h;
    if (!f && this._weekdaysParse[h].test(i))
      return h;
  }
}
function _N(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = sN(i, this.localeData()), this.add(i - s, "d")) : s;
}
function CN(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var s = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? s : this.add(i - s, "d");
}
function TN(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var s = cN(i, this.localeData());
    return this.day(this.day() % 7 ? s : s - 7);
  } else
    return this.day() || 7;
}
function wN(i) {
  return this._weekdaysParseExact ? (xt(this, "_weekdaysRegex") || FE.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (xt(this, "_weekdaysRegex") || (this._weekdaysRegex = pN), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function RN(i) {
  return this._weekdaysParseExact ? (xt(this, "_weekdaysRegex") || FE.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (xt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = hN), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function xN(i) {
  return this._weekdaysParseExact ? (xt(this, "_weekdaysRegex") || FE.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (xt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = vN), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function FE() {
  function i(P, U) {
    return U.length - P.length;
  }
  var s = [], f = [], h = [], m = [], _, S, b, k, M;
  for (_ = 0; _ < 7; _++)
    S = Yl([2e3, 1]).day(_), b = Ka(this.weekdaysMin(S, "")), k = Ka(this.weekdaysShort(S, "")), M = Ka(this.weekdays(S, "")), s.push(b), f.push(k), h.push(M), m.push(b), m.push(k), m.push(M);
  s.sort(i), f.sort(i), h.sort(i), m.sort(i), this._weekdaysRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + h.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + f.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
function HE() {
  return this.hours() % 12 || 12;
}
function DN() {
  return this.hours() || 24;
}
je("H", ["HH", 2], 0, "hour");
je("h", ["hh", 2], 0, HE);
je("k", ["kk", 2], 0, DN);
je("hmm", 0, 0, function() {
  return "" + HE.apply(this) + jl(this.minutes(), 2);
});
je("hmmss", 0, 0, function() {
  return "" + HE.apply(this) + jl(this.minutes(), 2) + jl(this.seconds(), 2);
});
je("Hmm", 0, 0, function() {
  return "" + this.hours() + jl(this.minutes(), 2);
});
je("Hmmss", 0, 0, function() {
  return "" + this.hours() + jl(this.minutes(), 2) + jl(this.seconds(), 2);
});
function MR(i, s) {
  je(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      s
    );
  });
}
MR("a", !0);
MR("A", !1);
Br("hour", "h");
Wr("hour", 13);
function LR(i, s) {
  return s._meridiemParse;
}
we("a", LR);
we("A", LR);
we("H", an);
we("h", an);
we("k", an);
we("HH", an, Za);
we("hh", an, Za);
we("kk", an, Za);
we("hmm", _R);
we("hmmss", CR);
we("Hmm", _R);
we("Hmmss", CR);
Pt(["H", "HH"], tr);
Pt(["k", "kk"], function(i, s, f) {
  var h = ct(i);
  s[tr] = h === 24 ? 0 : h;
});
Pt(["a", "A"], function(i, s, f) {
  f._isPm = f._locale.isPM(i), f._meridiem = i;
});
Pt(["h", "hh"], function(i, s, f) {
  s[tr] = ct(i), at(f).bigHour = !0;
});
Pt("hmm", function(i, s, f) {
  var h = i.length - 2;
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h)), at(f).bigHour = !0;
});
Pt("hmmss", function(i, s, f) {
  var h = i.length - 4, m = i.length - 2;
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h, 2)), s[Fu] = ct(i.substr(m)), at(f).bigHour = !0;
});
Pt("Hmm", function(i, s, f) {
  var h = i.length - 2;
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h));
});
Pt("Hmmss", function(i, s, f) {
  var h = i.length - 4, m = i.length - 2;
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h, 2)), s[Fu] = ct(i.substr(m));
});
function kN(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var bN = /[ap]\.?m?\.?/i, ON = fd("Hours", !0);
function MN(i, s, f) {
  return i > 11 ? f ? "pm" : "PM" : f ? "am" : "AM";
}
var NR = {
  calendar: EL,
  longDateFormat: wL,
  invalidDate: xL,
  ordinal: kL,
  dayOfMonthOrdinalParse: bL,
  relativeTime: ML,
  months: WL,
  monthsShort: TR,
  week: aN,
  weekdays: fN,
  weekdaysMin: dN,
  weekdaysShort: OR,
  meridiemParse: bN
}, sn = {}, Mh = {}, Yh;
function LN(i, s) {
  var f, h = Math.min(i.length, s.length);
  for (f = 0; f < h; f += 1)
    if (i[f] !== s[f])
      return f;
  return h;
}
function jw(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function NN(i) {
  for (var s = 0, f, h, m, _; s < i.length; ) {
    for (_ = jw(i[s]).split("-"), f = _.length, h = jw(i[s + 1]), h = h ? h.split("-") : null; f > 0; ) {
      if (m = yg(_.slice(0, f).join("-")), m)
        return m;
      if (h && h.length >= f && LN(_, h) >= f - 1)
        break;
      f--;
    }
    s++;
  }
  return Yh;
}
function UN(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function yg(i) {
  var s = null, f;
  if (sn[i] === void 0 && typeof module < "u" && module && module.exports && UN(i))
    try {
      s = Yh._abbr, f = require, f("./locale/" + i), Qo(s);
    } catch {
      sn[i] = null;
    }
  return sn[i];
}
function Qo(i, s) {
  var f;
  return i && (Ua(s) ? f = Pu(i) : f = jE(i, s), f ? Yh = f : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Yh._abbr;
}
function jE(i, s) {
  if (s !== null) {
    var f, h = NR;
    if (s.abbr = i, sn[i] != null)
      vR(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), h = sn[i]._config;
    else if (s.parentLocale != null)
      if (sn[s.parentLocale] != null)
        h = sn[s.parentLocale]._config;
      else if (f = yg(s.parentLocale), f != null)
        h = f._config;
      else
        return Mh[s.parentLocale] || (Mh[s.parentLocale] = []), Mh[s.parentLocale].push({
          name: i,
          config: s
        }), null;
    return sn[i] = new ME(hE(h, s)), Mh[i] && Mh[i].forEach(function(m) {
      jE(m.name, m.config);
    }), Qo(i), sn[i];
  } else
    return delete sn[i], null;
}
function zN(i, s) {
  if (s != null) {
    var f, h, m = NR;
    sn[i] != null && sn[i].parentLocale != null ? sn[i].set(hE(sn[i]._config, s)) : (h = yg(i), h != null && (m = h._config), s = hE(m, s), h == null && (s.abbr = i), f = new ME(s), f.parentLocale = sn[i], sn[i] = f), Qo(i);
  } else
    sn[i] != null && (sn[i].parentLocale != null ? (sn[i] = sn[i].parentLocale, i === Qo() && Qo(i)) : sn[i] != null && delete sn[i]);
  return sn[i];
}
function Pu(i) {
  var s;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Yh;
  if (!Ki(i)) {
    if (s = yg(i), s)
      return s;
    i = [i];
  }
  return NN(i);
}
function AN() {
  return vE(sn);
}
function YE(i) {
  var s, f = i._a;
  return f && at(i).overflow === -2 && (s = f[Au] < 0 || f[Au] > 11 ? Au : f[Hl] < 1 || f[Hl] > mg(f[Ir], f[Au]) ? Hl : f[tr] < 0 || f[tr] > 24 || f[tr] === 24 && (f[Xi] !== 0 || f[Fu] !== 0 || f[lc] !== 0) ? tr : f[Xi] < 0 || f[Xi] > 59 ? Xi : f[Fu] < 0 || f[Fu] > 59 ? Fu : f[lc] < 0 || f[lc] > 999 ? lc : -1, at(i)._overflowDayOfYear && (s < Ir || s > Hl) && (s = Hl), at(i)._overflowWeeks && s === -1 && (s = VL), at(i)._overflowWeekday && s === -1 && (s = IL), at(i).overflow = s), i;
}
var FN = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, HN = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, jN = /Z|[+-]\d\d(?::?\d\d)?/, Gy = [
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
], nE = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], YN = /^\/?Date\((-?\d+)/i, PN = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, VN = {
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
function UR(i) {
  var s, f, h = i._i, m = FN.exec(h) || HN.exec(h), _, S, b, k, M = Gy.length, P = nE.length;
  if (m) {
    for (at(i).iso = !0, s = 0, f = M; s < f; s++)
      if (Gy[s][1].exec(m[1])) {
        S = Gy[s][0], _ = Gy[s][2] !== !1;
        break;
      }
    if (S == null) {
      i._isValid = !1;
      return;
    }
    if (m[3]) {
      for (s = 0, f = P; s < f; s++)
        if (nE[s][1].exec(m[3])) {
          b = (m[2] || " ") + nE[s][0];
          break;
        }
      if (b == null) {
        i._isValid = !1;
        return;
      }
    }
    if (!_ && b != null) {
      i._isValid = !1;
      return;
    }
    if (m[4])
      if (jN.exec(m[4]))
        k = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = S + (b || "") + (k || ""), VE(i);
  } else
    i._isValid = !1;
}
function IN(i, s, f, h, m, _) {
  var S = [
    BN(i),
    TR.indexOf(s),
    parseInt(f, 10),
    parseInt(h, 10),
    parseInt(m, 10)
  ];
  return _ && S.push(parseInt(_, 10)), S;
}
function BN(i) {
  var s = parseInt(i, 10);
  return s <= 49 ? 2e3 + s : s <= 999 ? 1900 + s : s;
}
function WN(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function $N(i, s, f) {
  if (i) {
    var h = OR.indexOf(i), m = new Date(
      s[0],
      s[1],
      s[2]
    ).getDay();
    if (h !== m)
      return at(f).weekdayMismatch = !0, f._isValid = !1, !1;
  }
  return !0;
}
function GN(i, s, f) {
  if (i)
    return VN[i];
  if (s)
    return 0;
  var h = parseInt(f, 10), m = h % 100, _ = (h - m) / 100;
  return _ * 60 + m;
}
function zR(i) {
  var s = PN.exec(WN(i._i)), f;
  if (s) {
    if (f = IN(
      s[4],
      s[3],
      s[2],
      s[5],
      s[6],
      s[7]
    ), !$N(s[1], f, i))
      return;
    i._a = f, i._tzm = GN(s[8], s[9], s[10]), i._d = Hh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), at(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function QN(i) {
  var s = YN.exec(i._i);
  if (s !== null) {
    i._d = /* @__PURE__ */ new Date(+s[1]);
    return;
  }
  if (UR(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if (zR(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : ue.createFromInputFallback(i);
}
ue.createFromInputFallback = Si(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(i) {
    i._d = /* @__PURE__ */ new Date(i._i + (i._useUTC ? " UTC" : ""));
  }
);
function ld(i, s, f) {
  return i ?? s ?? f;
}
function qN(i) {
  var s = new Date(ue.now());
  return i._useUTC ? [
    s.getUTCFullYear(),
    s.getUTCMonth(),
    s.getUTCDate()
  ] : [s.getFullYear(), s.getMonth(), s.getDate()];
}
function PE(i) {
  var s, f, h = [], m, _, S;
  if (!i._d) {
    for (m = qN(i), i._w && i._a[Hl] == null && i._a[Au] == null && XN(i), i._dayOfYear != null && (S = ld(i._a[Ir], m[Ir]), (i._dayOfYear > zh(S) || i._dayOfYear === 0) && (at(i)._overflowDayOfYear = !0), f = Hh(S, 0, i._dayOfYear), i._a[Au] = f.getUTCMonth(), i._a[Hl] = f.getUTCDate()), s = 0; s < 3 && i._a[s] == null; ++s)
      i._a[s] = h[s] = m[s];
    for (; s < 7; s++)
      i._a[s] = h[s] = i._a[s] == null ? s === 2 ? 1 : 0 : i._a[s];
    i._a[tr] === 24 && i._a[Xi] === 0 && i._a[Fu] === 0 && i._a[lc] === 0 && (i._nextDay = !0, i._a[tr] = 0), i._d = (i._useUTC ? Hh : nN).apply(
      null,
      h
    ), _ = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[tr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== _ && (at(i).weekdayMismatch = !0);
  }
}
function XN(i) {
  var s, f, h, m, _, S, b, k, M;
  s = i._w, s.GG != null || s.W != null || s.E != null ? (_ = 1, S = 4, f = ld(
    s.GG,
    i._a[Ir],
    jh(rn(), 1, 4).year
  ), h = ld(s.W, 1), m = ld(s.E, 1), (m < 1 || m > 7) && (k = !0)) : (_ = i._locale._week.dow, S = i._locale._week.doy, M = jh(rn(), _, S), f = ld(s.gg, i._a[Ir], M.year), h = ld(s.w, M.week), s.d != null ? (m = s.d, (m < 0 || m > 6) && (k = !0)) : s.e != null ? (m = s.e + _, (s.e < 0 || s.e > 6) && (k = !0)) : m = _), h < 1 || h > Hu(f, _, S) ? at(i)._overflowWeeks = !0 : k != null ? at(i)._overflowWeekday = !0 : (b = bR(f, h, m, _, S), i._a[Ir] = b.year, i._dayOfYear = b.dayOfYear);
}
ue.ISO_8601 = function() {
};
ue.RFC_2822 = function() {
};
function VE(i) {
  if (i._f === ue.ISO_8601) {
    UR(i);
    return;
  }
  if (i._f === ue.RFC_2822) {
    zR(i);
    return;
  }
  i._a = [], at(i).empty = !0;
  var s = "" + i._i, f, h, m, _, S, b = s.length, k = 0, M, P;
  for (m = mR(i._f, i._locale).match(LE) || [], P = m.length, f = 0; f < P; f++)
    _ = m[f], h = (s.match(jL(_, i)) || [])[0], h && (S = s.substr(0, s.indexOf(h)), S.length > 0 && at(i).unusedInput.push(S), s = s.slice(
      s.indexOf(h) + h.length
    ), k += h.length), od[_] ? (h ? at(i).empty = !1 : at(i).unusedTokens.push(_), PL(_, h, i)) : i._strict && !h && at(i).unusedTokens.push(_);
  at(i).charsLeftOver = b - k, s.length > 0 && at(i).unusedInput.push(s), i._a[tr] <= 12 && at(i).bigHour === !0 && i._a[tr] > 0 && (at(i).bigHour = void 0), at(i).parsedDateParts = i._a.slice(0), at(i).meridiem = i._meridiem, i._a[tr] = KN(
    i._locale,
    i._a[tr],
    i._meridiem
  ), M = at(i).era, M !== null && (i._a[Ir] = i._locale.erasConvertYear(M, i._a[Ir])), PE(i), YE(i);
}
function KN(i, s, f) {
  var h;
  return f == null ? s : i.meridiemHour != null ? i.meridiemHour(s, f) : (i.isPM != null && (h = i.isPM(f), h && s < 12 && (s += 12), !h && s === 12 && (s = 0)), s);
}
function ZN(i) {
  var s, f, h, m, _, S, b = !1, k = i._f.length;
  if (k === 0) {
    at(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (m = 0; m < k; m++)
    _ = 0, S = !1, s = OE({}, i), i._useUTC != null && (s._useUTC = i._useUTC), s._f = i._f[m], VE(s), bE(s) && (S = !0), _ += at(s).charsLeftOver, _ += at(s).unusedTokens.length * 10, at(s).score = _, b ? _ < h && (h = _, f = s) : (h == null || _ < h || S) && (h = _, f = s, S && (b = !0));
  $o(i, f || s);
}
function JN(i) {
  if (!i._d) {
    var s = NE(i._i), f = s.day === void 0 ? s.date : s.day;
    i._a = pR(
      [s.year, s.month, f, s.hour, s.minute, s.second, s.millisecond],
      function(h) {
        return h && parseInt(h, 10);
      }
    ), PE(i);
  }
}
function e2(i) {
  var s = new Bh(YE(AR(i)));
  return s._nextDay && (s.add(1, "d"), s._nextDay = void 0), s;
}
function AR(i) {
  var s = i._i, f = i._f;
  return i._locale = i._locale || Pu(i._l), s === null || f === void 0 && s === "" ? sg({ nullInput: !0 }) : (typeof s == "string" && (i._i = s = i._locale.preparse(s)), Zi(s) ? new Bh(YE(s)) : (Ih(s) ? i._d = s : Ki(f) ? ZN(i) : f ? VE(i) : t2(i), bE(i) || (i._d = null), i));
}
function t2(i) {
  var s = i._i;
  Ua(s) ? i._d = new Date(ue.now()) : Ih(s) ? i._d = new Date(s.valueOf()) : typeof s == "string" ? QN(i) : Ki(s) ? (i._a = pR(s.slice(0), function(f) {
    return parseInt(f, 10);
  }), PE(i)) : uc(s) ? JN(i) : ju(s) ? i._d = new Date(s) : ue.createFromInputFallback(i);
}
function FR(i, s, f, h, m) {
  var _ = {};
  return (s === !0 || s === !1) && (h = s, s = void 0), (f === !0 || f === !1) && (h = f, f = void 0), (uc(i) && kE(i) || Ki(i) && i.length === 0) && (i = void 0), _._isAMomentObject = !0, _._useUTC = _._isUTC = m, _._l = f, _._i = i, _._f = s, _._strict = h, e2(_);
}
function rn(i, s, f, h) {
  return FR(i, s, f, h, !1);
}
var n2 = Si(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : sg();
  }
), r2 = Si(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : sg();
  }
);
function HR(i, s) {
  var f, h;
  if (s.length === 1 && Ki(s[0]) && (s = s[0]), !s.length)
    return rn();
  for (f = s[0], h = 1; h < s.length; ++h)
    (!s[h].isValid() || s[h][i](f)) && (f = s[h]);
  return f;
}
function a2() {
  var i = [].slice.call(arguments, 0);
  return HR("isBefore", i);
}
function i2() {
  var i = [].slice.call(arguments, 0);
  return HR("isAfter", i);
}
var l2 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Lh = [
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
function u2(i) {
  var s, f = !1, h, m = Lh.length;
  for (s in i)
    if (xt(i, s) && !(On.call(Lh, s) !== -1 && (i[s] == null || !isNaN(i[s]))))
      return !1;
  for (h = 0; h < m; ++h)
    if (i[Lh[h]]) {
      if (f)
        return !1;
      parseFloat(i[Lh[h]]) !== ct(i[Lh[h]]) && (f = !0);
    }
  return !0;
}
function o2() {
  return this._isValid;
}
function s2() {
  return Ji(NaN);
}
function gg(i) {
  var s = NE(i), f = s.year || 0, h = s.quarter || 0, m = s.month || 0, _ = s.week || s.isoWeek || 0, S = s.day || 0, b = s.hour || 0, k = s.minute || 0, M = s.second || 0, P = s.millisecond || 0;
  this._isValid = u2(s), this._milliseconds = +P + M * 1e3 + // 1000
  k * 6e4 + // 1000 * 60
  b * 1e3 * 60 * 60, this._days = +S + _ * 7, this._months = +m + h * 3 + f * 12, this._data = {}, this._locale = Pu(), this._bubble();
}
function Zy(i) {
  return i instanceof gg;
}
function yE(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function c2(i, s, f) {
  var h = Math.min(i.length, s.length), m = Math.abs(i.length - s.length), _ = 0, S;
  for (S = 0; S < h; S++)
    (f && i[S] !== s[S] || !f && ct(i[S]) !== ct(s[S])) && _++;
  return _ + m;
}
function jR(i, s) {
  je(i, 0, 0, function() {
    var f = this.utcOffset(), h = "+";
    return f < 0 && (f = -f, h = "-"), h + jl(~~(f / 60), 2) + s + jl(~~f % 60, 2);
  });
}
jR("Z", ":");
jR("ZZ", "");
we("Z", vg);
we("ZZ", vg);
Pt(["Z", "ZZ"], function(i, s, f) {
  f._useUTC = !0, f._tzm = IE(vg, i);
});
var f2 = /([\+\-]|\d\d)/gi;
function IE(i, s) {
  var f = (s || "").match(i), h, m, _;
  return f === null ? null : (h = f[f.length - 1] || [], m = (h + "").match(f2) || ["-", 0, 0], _ = +(m[1] * 60) + ct(m[2]), _ === 0 ? 0 : m[0] === "+" ? _ : -_);
}
function BE(i, s) {
  var f, h;
  return s._isUTC ? (f = s.clone(), h = (Zi(i) || Ih(i) ? i.valueOf() : rn(i).valueOf()) - f.valueOf(), f._d.setTime(f._d.valueOf() + h), ue.updateOffset(f, !1), f) : rn(i).local();
}
function gE(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
ue.updateOffset = function() {
};
function d2(i, s, f) {
  var h = this._offset || 0, m;
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    if (typeof i == "string") {
      if (i = IE(vg, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !f && (i = i * 60);
    return !this._isUTC && s && (m = gE(this)), this._offset = i, this._isUTC = !0, m != null && this.add(m, "m"), h !== i && (!s || this._changeInProgress ? VR(
      this,
      Ji(i - h, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ue.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? h : gE(this);
}
function p2(i, s) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, s), this) : -this.utcOffset();
}
function h2(i) {
  return this.utcOffset(0, i);
}
function v2(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(gE(this), "m")), this;
}
function m2() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = IE(FL, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function y2(i) {
  return this.isValid() ? (i = i ? rn(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function g2() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function S2() {
  if (!Ua(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, s;
  return OE(i, this), i = AR(i), i._a ? (s = i._isUTC ? Yl(i._a) : rn(i._a), this._isDSTShifted = this.isValid() && c2(i._a, s.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function E2() {
  return this.isValid() ? !this._isUTC : !1;
}
function _2() {
  return this.isValid() ? this._isUTC : !1;
}
function YR() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var C2 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, T2 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ji(i, s) {
  var f = i, h = null, m, _, S;
  return Zy(i) ? f = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : ju(i) || !isNaN(+i) ? (f = {}, s ? f[s] = +i : f.milliseconds = +i) : (h = C2.exec(i)) ? (m = h[1] === "-" ? -1 : 1, f = {
    y: 0,
    d: ct(h[Hl]) * m,
    h: ct(h[tr]) * m,
    m: ct(h[Xi]) * m,
    s: ct(h[Fu]) * m,
    ms: ct(yE(h[lc] * 1e3)) * m
    // the millisecond decimal point is included in the match
  }) : (h = T2.exec(i)) ? (m = h[1] === "-" ? -1 : 1, f = {
    y: ic(h[2], m),
    M: ic(h[3], m),
    w: ic(h[4], m),
    d: ic(h[5], m),
    h: ic(h[6], m),
    m: ic(h[7], m),
    s: ic(h[8], m)
  }) : f == null ? f = {} : typeof f == "object" && ("from" in f || "to" in f) && (S = w2(
    rn(f.from),
    rn(f.to)
  ), f = {}, f.ms = S.milliseconds, f.M = S.months), _ = new gg(f), Zy(i) && xt(i, "_locale") && (_._locale = i._locale), Zy(i) && xt(i, "_isValid") && (_._isValid = i._isValid), _;
}
Ji.fn = gg.prototype;
Ji.invalid = s2;
function ic(i, s) {
  var f = i && parseFloat(i.replace(",", "."));
  return (isNaN(f) ? 0 : f) * s;
}
function Yw(i, s) {
  var f = {};
  return f.months = s.month() - i.month() + (s.year() - i.year()) * 12, i.clone().add(f.months, "M").isAfter(s) && --f.months, f.milliseconds = +s - +i.clone().add(f.months, "M"), f;
}
function w2(i, s) {
  var f;
  return i.isValid() && s.isValid() ? (s = BE(s, i), i.isBefore(s) ? f = Yw(i, s) : (f = Yw(s, i), f.milliseconds = -f.milliseconds, f.months = -f.months), f) : { milliseconds: 0, months: 0 };
}
function PR(i, s) {
  return function(f, h) {
    var m, _;
    return h !== null && !isNaN(+h) && (vR(
      s,
      "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), _ = f, f = h, h = _), m = Ji(f, h), VR(this, m, i), this;
  };
}
function VR(i, s, f, h) {
  var m = s._milliseconds, _ = yE(s._days), S = yE(s._months);
  i.isValid() && (h = h ?? !0, S && RR(i, ng(i, "Month") + S * f), _ && gR(i, "Date", ng(i, "Date") + _ * f), m && i._d.setTime(i._d.valueOf() + m * f), h && ue.updateOffset(i, _ || S));
}
var R2 = PR(1, "add"), x2 = PR(-1, "subtract");
function IR(i) {
  return typeof i == "string" || i instanceof String;
}
function D2(i) {
  return Zi(i) || Ih(i) || IR(i) || ju(i) || b2(i) || k2(i) || i === null || i === void 0;
}
function k2(i) {
  var s = uc(i) && !kE(i), f = !1, h = [
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
  ], m, _, S = h.length;
  for (m = 0; m < S; m += 1)
    _ = h[m], f = f || xt(i, _);
  return s && f;
}
function b2(i) {
  var s = Ki(i), f = !1;
  return s && (f = i.filter(function(h) {
    return !ju(h) && IR(i);
  }).length === 0), s && f;
}
function O2(i) {
  var s = uc(i) && !kE(i), f = !1, h = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], m, _;
  for (m = 0; m < h.length; m += 1)
    _ = h[m], f = f || xt(i, _);
  return s && f;
}
function M2(i, s) {
  var f = i.diff(s, "days", !0);
  return f < -6 ? "sameElse" : f < -1 ? "lastWeek" : f < 0 ? "lastDay" : f < 1 ? "sameDay" : f < 2 ? "nextDay" : f < 7 ? "nextWeek" : "sameElse";
}
function L2(i, s) {
  arguments.length === 1 && (arguments[0] ? D2(arguments[0]) ? (i = arguments[0], s = void 0) : O2(arguments[0]) && (s = arguments[0], i = void 0) : (i = void 0, s = void 0));
  var f = i || rn(), h = BE(f, this).startOf("day"), m = ue.calendarFormat(this, h) || "sameElse", _ = s && (Pl(s[m]) ? s[m].call(this, f) : s[m]);
  return this.format(
    _ || this.localeData().calendar(m, this, rn(f))
  );
}
function N2() {
  return new Bh(this);
}
function U2(i, s) {
  var f = Zi(i) ? i : rn(i);
  return this.isValid() && f.isValid() ? (s = Ei(s) || "millisecond", s === "millisecond" ? this.valueOf() > f.valueOf() : f.valueOf() < this.clone().startOf(s).valueOf()) : !1;
}
function z2(i, s) {
  var f = Zi(i) ? i : rn(i);
  return this.isValid() && f.isValid() ? (s = Ei(s) || "millisecond", s === "millisecond" ? this.valueOf() < f.valueOf() : this.clone().endOf(s).valueOf() < f.valueOf()) : !1;
}
function A2(i, s, f, h) {
  var m = Zi(i) ? i : rn(i), _ = Zi(s) ? s : rn(s);
  return this.isValid() && m.isValid() && _.isValid() ? (h = h || "()", (h[0] === "(" ? this.isAfter(m, f) : !this.isBefore(m, f)) && (h[1] === ")" ? this.isBefore(_, f) : !this.isAfter(_, f))) : !1;
}
function F2(i, s) {
  var f = Zi(i) ? i : rn(i), h;
  return this.isValid() && f.isValid() ? (s = Ei(s) || "millisecond", s === "millisecond" ? this.valueOf() === f.valueOf() : (h = f.valueOf(), this.clone().startOf(s).valueOf() <= h && h <= this.clone().endOf(s).valueOf())) : !1;
}
function H2(i, s) {
  return this.isSame(i, s) || this.isAfter(i, s);
}
function j2(i, s) {
  return this.isSame(i, s) || this.isBefore(i, s);
}
function Y2(i, s, f) {
  var h, m, _;
  if (!this.isValid())
    return NaN;
  if (h = BE(i, this), !h.isValid())
    return NaN;
  switch (m = (h.utcOffset() - this.utcOffset()) * 6e4, s = Ei(s), s) {
    case "year":
      _ = Jy(this, h) / 12;
      break;
    case "month":
      _ = Jy(this, h);
      break;
    case "quarter":
      _ = Jy(this, h) / 3;
      break;
    case "second":
      _ = (this - h) / 1e3;
      break;
    case "minute":
      _ = (this - h) / 6e4;
      break;
    case "hour":
      _ = (this - h) / 36e5;
      break;
    case "day":
      _ = (this - h - m) / 864e5;
      break;
    case "week":
      _ = (this - h - m) / 6048e5;
      break;
    default:
      _ = this - h;
  }
  return f ? _ : gi(_);
}
function Jy(i, s) {
  if (i.date() < s.date())
    return -Jy(s, i);
  var f = (s.year() - i.year()) * 12 + (s.month() - i.month()), h = i.clone().add(f, "months"), m, _;
  return s - h < 0 ? (m = i.clone().add(f - 1, "months"), _ = (s - h) / (h - m)) : (m = i.clone().add(f + 1, "months"), _ = (s - h) / (m - h)), -(f + _) || 0;
}
ue.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ue.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function P2() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function V2(i) {
  if (!this.isValid())
    return null;
  var s = i !== !0, f = s ? this.clone().utc() : this;
  return f.year() < 0 || f.year() > 9999 ? Ky(
    f,
    s ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Pl(Date.prototype.toISOString) ? s ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ky(f, "Z")) : Ky(
    f,
    s ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function I2() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", s = "", f, h, m, _;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", s = "Z"), f = "[" + i + '("]', h = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", m = "-MM-DD[T]HH:mm:ss.SSS", _ = s + '[")]', this.format(f + h + m + _);
}
function B2(i) {
  i || (i = this.isUtc() ? ue.defaultFormatUtc : ue.defaultFormat);
  var s = Ky(this, i);
  return this.localeData().postformat(s);
}
function W2(i, s) {
  return this.isValid() && (Zi(i) && i.isValid() || rn(i).isValid()) ? Ji({ to: this, from: i }).locale(this.locale()).humanize(!s) : this.localeData().invalidDate();
}
function $2(i) {
  return this.from(rn(), i);
}
function G2(i, s) {
  return this.isValid() && (Zi(i) && i.isValid() || rn(i).isValid()) ? Ji({ from: this, to: i }).locale(this.locale()).humanize(!s) : this.localeData().invalidDate();
}
function Q2(i) {
  return this.to(rn(), i);
}
function BR(i) {
  var s;
  return i === void 0 ? this._locale._abbr : (s = Pu(i), s != null && (this._locale = s), this);
}
var WR = Si(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function $R() {
  return this._locale;
}
var ig = 1e3, sd = 60 * ig, lg = 60 * sd, GR = (365 * 400 + 97) * 24 * lg;
function cd(i, s) {
  return (i % s + s) % s;
}
function QR(i, s, f) {
  return i < 100 && i >= 0 ? new Date(i + 400, s, f) - GR : new Date(i, s, f).valueOf();
}
function qR(i, s, f) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, s, f) - GR : Date.UTC(i, s, f);
}
function q2(i) {
  var s, f;
  if (i = Ei(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (f = this._isUTC ? qR : QR, i) {
    case "year":
      s = f(this.year(), 0, 1);
      break;
    case "quarter":
      s = f(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      s = f(this.year(), this.month(), 1);
      break;
    case "week":
      s = f(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      s = f(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      s = f(this.year(), this.month(), this.date());
      break;
    case "hour":
      s = this._d.valueOf(), s -= cd(
        s + (this._isUTC ? 0 : this.utcOffset() * sd),
        lg
      );
      break;
    case "minute":
      s = this._d.valueOf(), s -= cd(s, sd);
      break;
    case "second":
      s = this._d.valueOf(), s -= cd(s, ig);
      break;
  }
  return this._d.setTime(s), ue.updateOffset(this, !0), this;
}
function X2(i) {
  var s, f;
  if (i = Ei(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (f = this._isUTC ? qR : QR, i) {
    case "year":
      s = f(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      s = f(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      s = f(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      s = f(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      s = f(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      s = f(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      s = this._d.valueOf(), s += lg - cd(
        s + (this._isUTC ? 0 : this.utcOffset() * sd),
        lg
      ) - 1;
      break;
    case "minute":
      s = this._d.valueOf(), s += sd - cd(s, sd) - 1;
      break;
    case "second":
      s = this._d.valueOf(), s += ig - cd(s, ig) - 1;
      break;
  }
  return this._d.setTime(s), ue.updateOffset(this, !0), this;
}
function K2() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Z2() {
  return Math.floor(this.valueOf() / 1e3);
}
function J2() {
  return new Date(this.valueOf());
}
function eU() {
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
function tU() {
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
function nU() {
  return this.isValid() ? this.toISOString() : null;
}
function rU() {
  return bE(this);
}
function aU() {
  return $o({}, at(this));
}
function iU() {
  return at(this).overflow;
}
function lU() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
je("N", 0, 0, "eraAbbr");
je("NN", 0, 0, "eraAbbr");
je("NNN", 0, 0, "eraAbbr");
je("NNNN", 0, 0, "eraName");
je("NNNNN", 0, 0, "eraNarrow");
je("y", ["y", 1], "yo", "eraYear");
je("y", ["yy", 2], 0, "eraYear");
je("y", ["yyy", 3], 0, "eraYear");
je("y", ["yyyy", 4], 0, "eraYear");
we("N", WE);
we("NN", WE);
we("NNN", WE);
we("NNNN", yU);
we("NNNNN", gU);
Pt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, s, f, h) {
    var m = f._locale.erasParse(i, h, f._strict);
    m ? at(f).era = m : at(f).invalidEra = i;
  }
);
we("y", dd);
we("yy", dd);
we("yyy", dd);
we("yyyy", dd);
we("yo", SU);
Pt(["y", "yy", "yyy", "yyyy"], Ir);
Pt(["yo"], function(i, s, f, h) {
  var m;
  f._locale._eraYearOrdinalRegex && (m = i.match(f._locale._eraYearOrdinalRegex)), f._locale.eraYearOrdinalParse ? s[Ir] = f._locale.eraYearOrdinalParse(i, m) : s[Ir] = parseInt(i, 10);
});
function uU(i, s) {
  var f, h, m, _ = this._eras || Pu("en")._eras;
  for (f = 0, h = _.length; f < h; ++f) {
    switch (typeof _[f].since) {
      case "string":
        m = ue(_[f].since).startOf("day"), _[f].since = m.valueOf();
        break;
    }
    switch (typeof _[f].until) {
      case "undefined":
        _[f].until = 1 / 0;
        break;
      case "string":
        m = ue(_[f].until).startOf("day").valueOf(), _[f].until = m.valueOf();
        break;
    }
  }
  return _;
}
function oU(i, s, f) {
  var h, m, _ = this.eras(), S, b, k;
  for (i = i.toUpperCase(), h = 0, m = _.length; h < m; ++h)
    if (S = _[h].name.toUpperCase(), b = _[h].abbr.toUpperCase(), k = _[h].narrow.toUpperCase(), f)
      switch (s) {
        case "N":
        case "NN":
        case "NNN":
          if (b === i)
            return _[h];
          break;
        case "NNNN":
          if (S === i)
            return _[h];
          break;
        case "NNNNN":
          if (k === i)
            return _[h];
          break;
      }
    else if ([S, b, k].indexOf(i) >= 0)
      return _[h];
}
function sU(i, s) {
  var f = i.since <= i.until ? 1 : -1;
  return s === void 0 ? ue(i.since).year() : ue(i.since).year() + (s - i.offset) * f;
}
function cU() {
  var i, s, f, h = this.localeData().eras();
  for (i = 0, s = h.length; i < s; ++i)
    if (f = this.clone().startOf("day").valueOf(), h[i].since <= f && f <= h[i].until || h[i].until <= f && f <= h[i].since)
      return h[i].name;
  return "";
}
function fU() {
  var i, s, f, h = this.localeData().eras();
  for (i = 0, s = h.length; i < s; ++i)
    if (f = this.clone().startOf("day").valueOf(), h[i].since <= f && f <= h[i].until || h[i].until <= f && f <= h[i].since)
      return h[i].narrow;
  return "";
}
function dU() {
  var i, s, f, h = this.localeData().eras();
  for (i = 0, s = h.length; i < s; ++i)
    if (f = this.clone().startOf("day").valueOf(), h[i].since <= f && f <= h[i].until || h[i].until <= f && f <= h[i].since)
      return h[i].abbr;
  return "";
}
function pU() {
  var i, s, f, h, m = this.localeData().eras();
  for (i = 0, s = m.length; i < s; ++i)
    if (f = m[i].since <= m[i].until ? 1 : -1, h = this.clone().startOf("day").valueOf(), m[i].since <= h && h <= m[i].until || m[i].until <= h && h <= m[i].since)
      return (this.year() - ue(m[i].since).year()) * f + m[i].offset;
  return this.year();
}
function hU(i) {
  return xt(this, "_erasNameRegex") || $E.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function vU(i) {
  return xt(this, "_erasAbbrRegex") || $E.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function mU(i) {
  return xt(this, "_erasNarrowRegex") || $E.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function WE(i, s) {
  return s.erasAbbrRegex(i);
}
function yU(i, s) {
  return s.erasNameRegex(i);
}
function gU(i, s) {
  return s.erasNarrowRegex(i);
}
function SU(i, s) {
  return s._eraYearOrdinalRegex || dd;
}
function $E() {
  var i = [], s = [], f = [], h = [], m, _, S = this.eras();
  for (m = 0, _ = S.length; m < _; ++m)
    s.push(Ka(S[m].name)), i.push(Ka(S[m].abbr)), f.push(Ka(S[m].narrow)), h.push(Ka(S[m].name)), h.push(Ka(S[m].abbr)), h.push(Ka(S[m].narrow));
  this._erasRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + f.join("|") + ")",
    "i"
  );
}
je(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
je(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Sg(i, s) {
  je(0, [i, i.length], 0, s);
}
Sg("gggg", "weekYear");
Sg("ggggg", "weekYear");
Sg("GGGG", "isoWeekYear");
Sg("GGGGG", "isoWeekYear");
Br("weekYear", "gg");
Br("isoWeekYear", "GG");
Wr("weekYear", 1);
Wr("isoWeekYear", 1);
we("G", hg);
we("g", hg);
we("GG", an, Za);
we("gg", an, Za);
we("GGGG", zE, UE);
we("gggg", zE, UE);
we("GGGGG", pg, fg);
we("ggggg", pg, fg);
$h(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, s, f, h) {
    s[h.substr(0, 2)] = ct(i);
  }
);
$h(["gg", "GG"], function(i, s, f, h) {
  s[h] = ue.parseTwoDigitYear(i);
});
function EU(i) {
  return XR.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function _U(i) {
  return XR.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function CU() {
  return Hu(this.year(), 1, 4);
}
function TU() {
  return Hu(this.isoWeekYear(), 1, 4);
}
function wU() {
  var i = this.localeData()._week;
  return Hu(this.year(), i.dow, i.doy);
}
function RU() {
  var i = this.localeData()._week;
  return Hu(this.weekYear(), i.dow, i.doy);
}
function XR(i, s, f, h, m) {
  var _;
  return i == null ? jh(this, h, m).year : (_ = Hu(i, h, m), s > _ && (s = _), xU.call(this, i, s, f, h, m));
}
function xU(i, s, f, h, m) {
  var _ = bR(i, s, f, h, m), S = Hh(_.year, 0, _.dayOfYear);
  return this.year(S.getUTCFullYear()), this.month(S.getUTCMonth()), this.date(S.getUTCDate()), this;
}
je("Q", 0, "Qo", "quarter");
Br("quarter", "Q");
Wr("quarter", 7);
we("Q", SR);
Pt("Q", function(i, s) {
  s[Au] = (ct(i) - 1) * 3;
});
function DU(i) {
  return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3);
}
je("D", ["DD", 2], "Do", "date");
Br("date", "D");
Wr("date", 9);
we("D", an);
we("DD", an, Za);
we("Do", function(i, s) {
  return i ? s._dayOfMonthOrdinalParse || s._ordinalParse : s._dayOfMonthOrdinalParseLenient;
});
Pt(["D", "DD"], Hl);
Pt("Do", function(i, s) {
  s[Hl] = ct(i.match(an)[0]);
});
var KR = fd("Date", !0);
je("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Br("dayOfYear", "DDD");
Wr("dayOfYear", 4);
we("DDD", dg);
we("DDDD", ER);
Pt(["DDD", "DDDD"], function(i, s, f) {
  f._dayOfYear = ct(i);
});
function kU(i) {
  var s = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return i == null ? s : this.add(i - s, "d");
}
je("m", ["mm", 2], 0, "minute");
Br("minute", "m");
Wr("minute", 14);
we("m", an);
we("mm", an, Za);
Pt(["m", "mm"], Xi);
var bU = fd("Minutes", !1);
je("s", ["ss", 2], 0, "second");
Br("second", "s");
Wr("second", 15);
we("s", an);
we("ss", an, Za);
Pt(["s", "ss"], Fu);
var OU = fd("Seconds", !1);
je("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
je(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
je(0, ["SSS", 3], 0, "millisecond");
je(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
je(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
je(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
je(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
je(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
je(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Br("millisecond", "ms");
Wr("millisecond", 16);
we("S", dg, SR);
we("SS", dg, Za);
we("SSS", dg, ER);
var Go, ZR;
for (Go = "SSSS"; Go.length <= 9; Go += "S")
  we(Go, dd);
function MU(i, s) {
  s[lc] = ct(("0." + i) * 1e3);
}
for (Go = "S"; Go.length <= 9; Go += "S")
  Pt(Go, MU);
ZR = fd("Milliseconds", !1);
je("z", 0, 0, "zoneAbbr");
je("zz", 0, 0, "zoneName");
function LU() {
  return this._isUTC ? "UTC" : "";
}
function NU() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var te = Bh.prototype;
te.add = R2;
te.calendar = L2;
te.clone = N2;
te.diff = Y2;
te.endOf = X2;
te.format = B2;
te.from = W2;
te.fromNow = $2;
te.to = G2;
te.toNow = Q2;
te.get = zL;
te.invalidAt = iU;
te.isAfter = U2;
te.isBefore = z2;
te.isBetween = A2;
te.isSame = F2;
te.isSameOrAfter = H2;
te.isSameOrBefore = j2;
te.isValid = rU;
te.lang = WR;
te.locale = BR;
te.localeData = $R;
te.max = r2;
te.min = n2;
te.parsingFlags = aU;
te.set = AL;
te.startOf = q2;
te.subtract = x2;
te.toArray = eU;
te.toObject = tU;
te.toDate = J2;
te.toISOString = V2;
te.inspect = I2;
typeof Symbol < "u" && Symbol.for != null && (te[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
te.toJSON = nU;
te.toString = P2;
te.unix = Z2;
te.valueOf = K2;
te.creationData = lU;
te.eraName = cU;
te.eraNarrow = fU;
te.eraAbbr = dU;
te.eraYear = pU;
te.year = kR;
te.isLeapYear = tN;
te.weekYear = EU;
te.isoWeekYear = _U;
te.quarter = te.quarters = DU;
te.month = xR;
te.daysInMonth = ZL;
te.week = te.weeks = uN;
te.isoWeek = te.isoWeeks = oN;
te.weeksInYear = wU;
te.weeksInWeekYear = RU;
te.isoWeeksInYear = CU;
te.isoWeeksInISOWeekYear = TU;
te.date = KR;
te.day = te.days = _N;
te.weekday = CN;
te.isoWeekday = TN;
te.dayOfYear = kU;
te.hour = te.hours = ON;
te.minute = te.minutes = bU;
te.second = te.seconds = OU;
te.millisecond = te.milliseconds = ZR;
te.utcOffset = d2;
te.utc = h2;
te.local = v2;
te.parseZone = m2;
te.hasAlignedHourOffset = y2;
te.isDST = g2;
te.isLocal = E2;
te.isUtcOffset = _2;
te.isUtc = YR;
te.isUTC = YR;
te.zoneAbbr = LU;
te.zoneName = NU;
te.dates = Si(
  "dates accessor is deprecated. Use date instead.",
  KR
);
te.months = Si(
  "months accessor is deprecated. Use month instead",
  xR
);
te.years = Si(
  "years accessor is deprecated. Use year instead",
  kR
);
te.zone = Si(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  p2
);
te.isDSTShifted = Si(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  S2
);
function UU(i) {
  return rn(i * 1e3);
}
function zU() {
  return rn.apply(null, arguments).parseZone();
}
function JR(i) {
  return i;
}
var Dt = ME.prototype;
Dt.calendar = _L;
Dt.longDateFormat = RL;
Dt.invalidDate = DL;
Dt.ordinal = OL;
Dt.preparse = JR;
Dt.postformat = JR;
Dt.relativeTime = LL;
Dt.pastFuture = NL;
Dt.set = SL;
Dt.eras = uU;
Dt.erasParse = oU;
Dt.erasConvertYear = sU;
Dt.erasAbbrRegex = vU;
Dt.erasNameRegex = hU;
Dt.erasNarrowRegex = mU;
Dt.months = QL;
Dt.monthsShort = qL;
Dt.monthsParse = KL;
Dt.monthsRegex = eN;
Dt.monthsShortRegex = JL;
Dt.week = rN;
Dt.firstDayOfYear = lN;
Dt.firstDayOfWeek = iN;
Dt.weekdays = mN;
Dt.weekdaysMin = gN;
Dt.weekdaysShort = yN;
Dt.weekdaysParse = EN;
Dt.weekdaysRegex = wN;
Dt.weekdaysShortRegex = RN;
Dt.weekdaysMinRegex = xN;
Dt.isPM = kN;
Dt.meridiem = MN;
function ug(i, s, f, h) {
  var m = Pu(), _ = Yl().set(h, s);
  return m[f](_, i);
}
function ex(i, s, f) {
  if (ju(i) && (s = i, i = void 0), i = i || "", s != null)
    return ug(i, s, f, "month");
  var h, m = [];
  for (h = 0; h < 12; h++)
    m[h] = ug(i, h, f, "month");
  return m;
}
function GE(i, s, f, h) {
  typeof i == "boolean" ? (ju(s) && (f = s, s = void 0), s = s || "") : (s = i, f = s, i = !1, ju(s) && (f = s, s = void 0), s = s || "");
  var m = Pu(), _ = i ? m._week.dow : 0, S, b = [];
  if (f != null)
    return ug(s, (f + _) % 7, h, "day");
  for (S = 0; S < 7; S++)
    b[S] = ug(s, (S + _) % 7, h, "day");
  return b;
}
function AU(i, s) {
  return ex(i, s, "months");
}
function FU(i, s) {
  return ex(i, s, "monthsShort");
}
function HU(i, s, f) {
  return GE(i, s, f, "weekdays");
}
function jU(i, s, f) {
  return GE(i, s, f, "weekdaysShort");
}
function YU(i, s, f) {
  return GE(i, s, f, "weekdaysMin");
}
Qo("en", {
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
    var s = i % 10, f = ct(i % 100 / 10) === 1 ? "th" : s === 1 ? "st" : s === 2 ? "nd" : s === 3 ? "rd" : "th";
    return i + f;
  }
});
ue.lang = Si(
  "moment.lang is deprecated. Use moment.locale instead.",
  Qo
);
ue.langData = Si(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Pu
);
var Uu = Math.abs;
function PU() {
  var i = this._data;
  return this._milliseconds = Uu(this._milliseconds), this._days = Uu(this._days), this._months = Uu(this._months), i.milliseconds = Uu(i.milliseconds), i.seconds = Uu(i.seconds), i.minutes = Uu(i.minutes), i.hours = Uu(i.hours), i.months = Uu(i.months), i.years = Uu(i.years), this;
}
function tx(i, s, f, h) {
  var m = Ji(s, f);
  return i._milliseconds += h * m._milliseconds, i._days += h * m._days, i._months += h * m._months, i._bubble();
}
function VU(i, s) {
  return tx(this, i, s, 1);
}
function IU(i, s) {
  return tx(this, i, s, -1);
}
function Pw(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function BU() {
  var i = this._milliseconds, s = this._days, f = this._months, h = this._data, m, _, S, b, k;
  return i >= 0 && s >= 0 && f >= 0 || i <= 0 && s <= 0 && f <= 0 || (i += Pw(SE(f) + s) * 864e5, s = 0, f = 0), h.milliseconds = i % 1e3, m = gi(i / 1e3), h.seconds = m % 60, _ = gi(m / 60), h.minutes = _ % 60, S = gi(_ / 60), h.hours = S % 24, s += gi(S / 24), k = gi(nx(s)), f += k, s -= Pw(SE(k)), b = gi(f / 12), f %= 12, h.days = s, h.months = f, h.years = b, this;
}
function nx(i) {
  return i * 4800 / 146097;
}
function SE(i) {
  return i * 146097 / 4800;
}
function WU(i) {
  if (!this.isValid())
    return NaN;
  var s, f, h = this._milliseconds;
  if (i = Ei(i), i === "month" || i === "quarter" || i === "year")
    switch (s = this._days + h / 864e5, f = this._months + nx(s), i) {
      case "month":
        return f;
      case "quarter":
        return f / 3;
      case "year":
        return f / 12;
    }
  else
    switch (s = this._days + Math.round(SE(this._months)), i) {
      case "week":
        return s / 7 + h / 6048e5;
      case "day":
        return s + h / 864e5;
      case "hour":
        return s * 24 + h / 36e5;
      case "minute":
        return s * 1440 + h / 6e4;
      case "second":
        return s * 86400 + h / 1e3;
      case "millisecond":
        return Math.floor(s * 864e5) + h;
      default:
        throw new Error("Unknown unit " + i);
    }
}
function $U() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ct(this._months / 12) * 31536e6 : NaN;
}
function Vu(i) {
  return function() {
    return this.as(i);
  };
}
var GU = Vu("ms"), QU = Vu("s"), qU = Vu("m"), XU = Vu("h"), KU = Vu("d"), ZU = Vu("w"), JU = Vu("M"), ez = Vu("Q"), tz = Vu("y");
function nz() {
  return Ji(this);
}
function rz(i) {
  return i = Ei(i), this.isValid() ? this[i + "s"]() : NaN;
}
function sc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var az = sc("milliseconds"), iz = sc("seconds"), lz = sc("minutes"), uz = sc("hours"), oz = sc("days"), sz = sc("months"), cz = sc("years");
function fz() {
  return gi(this.days() / 7);
}
var zu = Math.round, ud = {
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
function dz(i, s, f, h, m) {
  return m.relativeTime(s || 1, !!f, i, h);
}
function pz(i, s, f, h) {
  var m = Ji(i).abs(), _ = zu(m.as("s")), S = zu(m.as("m")), b = zu(m.as("h")), k = zu(m.as("d")), M = zu(m.as("M")), P = zu(m.as("w")), U = zu(m.as("y")), I = _ <= f.ss && ["s", _] || _ < f.s && ["ss", _] || S <= 1 && ["m"] || S < f.m && ["mm", S] || b <= 1 && ["h"] || b < f.h && ["hh", b] || k <= 1 && ["d"] || k < f.d && ["dd", k];
  return f.w != null && (I = I || P <= 1 && ["w"] || P < f.w && ["ww", P]), I = I || M <= 1 && ["M"] || M < f.M && ["MM", M] || U <= 1 && ["y"] || ["yy", U], I[2] = s, I[3] = +i > 0, I[4] = h, dz.apply(null, I);
}
function hz(i) {
  return i === void 0 ? zu : typeof i == "function" ? (zu = i, !0) : !1;
}
function vz(i, s) {
  return ud[i] === void 0 ? !1 : s === void 0 ? ud[i] : (ud[i] = s, i === "s" && (ud.ss = s - 1), !0);
}
function mz(i, s) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var f = !1, h = ud, m, _;
  return typeof i == "object" && (s = i, i = !1), typeof i == "boolean" && (f = i), typeof s == "object" && (h = Object.assign({}, ud, s), s.s != null && s.ss == null && (h.ss = s.s - 1)), m = this.localeData(), _ = pz(this, !f, h, m), f && (_ = m.pastFuture(+this, _)), m.postformat(_);
}
var rE = Math.abs;
function id(i) {
  return (i > 0) - (i < 0) || +i;
}
function Eg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = rE(this._milliseconds) / 1e3, s = rE(this._days), f = rE(this._months), h, m, _, S, b = this.asSeconds(), k, M, P, U;
  return b ? (h = gi(i / 60), m = gi(h / 60), i %= 60, h %= 60, _ = gi(f / 12), f %= 12, S = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", k = b < 0 ? "-" : "", M = id(this._months) !== id(b) ? "-" : "", P = id(this._days) !== id(b) ? "-" : "", U = id(this._milliseconds) !== id(b) ? "-" : "", k + "P" + (_ ? M + _ + "Y" : "") + (f ? M + f + "M" : "") + (s ? P + s + "D" : "") + (m || h || i ? "T" : "") + (m ? U + m + "H" : "") + (h ? U + h + "M" : "") + (i ? U + S + "S" : "")) : "P0D";
}
var _t = gg.prototype;
_t.isValid = o2;
_t.abs = PU;
_t.add = VU;
_t.subtract = IU;
_t.as = WU;
_t.asMilliseconds = GU;
_t.asSeconds = QU;
_t.asMinutes = qU;
_t.asHours = XU;
_t.asDays = KU;
_t.asWeeks = ZU;
_t.asMonths = JU;
_t.asQuarters = ez;
_t.asYears = tz;
_t.valueOf = $U;
_t._bubble = BU;
_t.clone = nz;
_t.get = rz;
_t.milliseconds = az;
_t.seconds = iz;
_t.minutes = lz;
_t.hours = uz;
_t.days = oz;
_t.weeks = fz;
_t.months = sz;
_t.years = cz;
_t.humanize = mz;
_t.toISOString = Eg;
_t.toString = Eg;
_t.toJSON = Eg;
_t.locale = BR;
_t.localeData = $R;
_t.toIsoString = Si(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Eg
);
_t.lang = WR;
je("X", 0, 0, "unix");
je("x", 0, 0, "valueOf");
we("x", hg);
we("X", HL);
Pt("X", function(i, s, f) {
  f._d = new Date(parseFloat(i) * 1e3);
});
Pt("x", function(i, s, f) {
  f._d = new Date(ct(i));
});
//! moment.js
ue.version = "2.29.4";
yL(rn);
ue.fn = te;
ue.min = a2;
ue.max = i2;
ue.now = l2;
ue.utc = Yl;
ue.unix = UU;
ue.months = AU;
ue.isDate = Ih;
ue.locale = Qo;
ue.invalid = sg;
ue.duration = Ji;
ue.isMoment = Zi;
ue.weekdays = HU;
ue.parseZone = zU;
ue.localeData = Pu;
ue.isDuration = Zy;
ue.monthsShort = FU;
ue.weekdaysMin = YU;
ue.defineLocale = jE;
ue.updateLocale = zN;
ue.locales = AN;
ue.weekdaysShort = jU;
ue.normalizeUnits = Ei;
ue.relativeTimeRounding = hz;
ue.relativeTimeThreshold = vz;
ue.calendarFormat = M2;
ue.prototype = te;
ue.HTML5_FMT = {
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
const yz = ({
  tooltipRef: i,
  width: s,
  maxDate: f,
  minDate: h,
  labels: m,
  spacing: _,
  iteration: S,
  rectHeight: b,
  proportion: k,
  theme: M,
  items: P,
  translation: U
}) => {
  const I = cL(null);
  return /* @__PURE__ */ Yt.jsxs(
    "g",
    {
      onMouseMove: (Q) => {
        if (Q.target === I.current && i.current) {
          const ae = Q.nativeEvent.offsetX / s * f.diff(h), se = h.clone().add(ae, "milliseconds"), ie = f.diff(h) / 3600 / 1e3 > 24 ? "YYYY-MM-DD HH:mm:ss" : "HH:mm:ss";
          i.current.innerHTML = `
              ${se.format(ie)}
          `;
        }
      },
      children: [
        (m == null ? void 0 : m.length) && (m == null ? void 0 : m.length) > 0 && /* @__PURE__ */ Yt.jsx(
          "text",
          {
            x: _ / 2 - m[S].length * 4,
            y: b / 2 + b * S + 4 + 20,
            children: m[S]
          }
        ),
        /* @__PURE__ */ Yt.jsx(
          "rect",
          {
            rx: 4,
            x: _,
            y: b * S + 20,
            ref: I,
            width: f.diff(h) * k,
            height: b,
            className: M == null ? void 0 : M.period
          }
        ),
        Object.values(P).map(
          (Q, ne) => Q.map((ae, se) => {
            if (Object.keys(P)[ne] === "period")
              return null;
            const Me = ae.start.diff(h) * k, ie = ae.finish.diff(ae.start), ee = ie * k, ye = Object.keys(P)[ne];
            let ve = ie / 3600 / 1e3 < 1 ? ue.utc(ie).format("mm[m]") : ue.utc(ie).format("HH[h]mm");
            ve = ve.substring(ve.length - 2, ve.length) === "00" ? ve.substring(0, ve.length - 2) : ve;
            const le = (ve.length + 0.5) * 4;
            return /* @__PURE__ */ Yt.jsxs(
              "g",
              {
                y: 20,
                onMouseMove: (he) => {
                  const tt = he.nativeEvent.offsetX / s * f.diff(h), lt = h.clone().add(tt, "milliseconds"), Vt = f.diff(h) / 3600 / 1e3 > 24 ? "YYYY-MM-DD HH:mm:ss" : "HH:mm:ss";
                  i.current && (i.current.innerHTML = `
                  <span>${U(ye)}</span>
                  <span>
                  ${lt.format(Vt)} |
                    ${ue.utc(ae.start).format("HH[h]mm")} -
                    ${ue.utc(ae.finish).format("HH[h]mm")}
                  </span>
                  <span>
                    Escalado: ${ue.utc(ae == null ? void 0 : ae.scaled).format("HH[h]mm")}
                  </span>
                  <span>
                    Duração: ${ve}
                 </span>
              `);
                },
                children: [
                  /* @__PURE__ */ Yt.jsx(
                    "rect",
                    {
                      className: (M == null ? void 0 : M[Object.keys(P)[ne]]) ?? "fill-text-disabled",
                      width: ee,
                      rx: 4,
                      x: Me + _,
                      height: b,
                      y: b * S + 20,
                      fill: "currentColor"
                    }
                  ),
                  le < ee / 2 && /* @__PURE__ */ Yt.jsx(
                    "text",
                    {
                      x: Me + ee / 2 - le + _,
                      y: b * S + b / 2 + 26,
                      children: ve
                    }
                  )
                ]
              },
              se
            );
          })
        )
      ]
    }
  );
}, PA = ({
  data: i,
  width: s,
  height: f,
  labels: h,
  tooltipRef: m,
  translation: _,
  theme: S
}) => {
  if (s === 0 || f === 0 || i.length === 0)
    return null;
  const b = h != null && h.length && (h == null ? void 0 : h.length) > 0 ? 80 : 0;
  s = s - b, f = f - 20;
  const k = f / i.length;
  let M = ue(), P = ue();
  i.forEach((ae) => {
    Object.values(ae).forEach((se) => {
      se.forEach((Me) => {
        M = ue.min(M, Me.start), P = ue.max(P, Me.finish);
      });
    });
  });
  const U = P.diff(M), I = s / U, Q = ue.duration(U, "milliseconds").hours(), ne = s / Q / 4;
  return /* @__PURE__ */ Yt.jsxs(Yt.Fragment, { children: [
    i.map((ae, se) => /* @__PURE__ */ Yt.jsx(sL, { children: /* @__PURE__ */ Yt.jsx(
      yz,
      {
        width: s + b,
        labels: h,
        items: ae,
        maxDate: P,
        minDate: M,
        spacing: b,
        iteration: se,
        proportion: I,
        rectHeight: k,
        translation: _,
        tooltipRef: m,
        theme: S
      }
    ) }, se)),
    Array.from({ length: Q * 4 }).map((ae, se) => /* @__PURE__ */ Yt.jsx("g", { className: "interval", children: /* @__PURE__ */ Yt.jsx(
      "line",
      {
        x1: ne * se + 80,
        x2: ne * se + 80,
        y1: 20,
        y2: f + 20
      }
    ) }, se)),
    Array.from({ length: Q + 1 }).map((ae, se) => {
      const Me = ue.utc(M).hours() + se;
      return /* @__PURE__ */ Yt.jsxs(
        "text",
        {
          x: ne * 4 * se + b - String(Me).length * 8,
          y: 12,
          fill: "#fff",
          children: [
            Me,
            "h"
          ]
        },
        se
      );
    })
  ] });
};
var qo = Yu;
const Ah = /^[a-z0-9]+(-[a-z0-9]+)*$/, _g = (i, s, f, h = "") => {
  const m = i.split(":");
  if (i.slice(0, 1) === "@") {
    if (m.length < 2 || m.length > 3)
      return null;
    h = m.shift().slice(1);
  }
  if (m.length > 3 || !m.length)
    return null;
  if (m.length > 1) {
    const b = m.pop(), k = m.pop(), M = {
      // Allow provider without '@': "provider:prefix:name"
      provider: m.length > 0 ? m[0] : h,
      prefix: k,
      name: b
    };
    return s && !eg(M) ? null : M;
  }
  const _ = m[0], S = _.split("-");
  if (S.length > 1) {
    const b = {
      provider: h,
      prefix: S.shift(),
      name: S.join("-")
    };
    return s && !eg(b) ? null : b;
  }
  if (f && h === "") {
    const b = {
      provider: h,
      prefix: "",
      name: _
    };
    return s && !eg(b, f) ? null : b;
  }
  return null;
}, eg = (i, s) => i ? !!((i.provider === "" || i.provider.match(Ah)) && (s && i.prefix === "" || i.prefix.match(Ah)) && i.name.match(Ah)) : !1, rx = Object.freeze(
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
}), QE = Object.freeze({
  ...rx,
  ...og
}), EE = Object.freeze({
  ...QE,
  body: "",
  hidden: !1
});
function gz(i, s) {
  const f = {};
  !i.hFlip != !s.hFlip && (f.hFlip = !0), !i.vFlip != !s.vFlip && (f.vFlip = !0);
  const h = ((i.rotate || 0) + (s.rotate || 0)) % 4;
  return h && (f.rotate = h), f;
}
function Vw(i, s) {
  const f = gz(i, s);
  for (const h in EE)
    h in og ? h in i && !(h in f) && (f[h] = og[h]) : h in s ? f[h] = s[h] : h in i && (f[h] = i[h]);
  return f;
}
function Sz(i, s) {
  const f = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function _(S) {
    if (f[S])
      return m[S] = [];
    if (!(S in m)) {
      m[S] = null;
      const b = h[S] && h[S].parent, k = b && _(b);
      k && (m[S] = [b].concat(k));
    }
    return m[S];
  }
  return (s || Object.keys(f).concat(Object.keys(h))).forEach(_), m;
}
function Ez(i, s, f) {
  const h = i.icons, m = i.aliases || /* @__PURE__ */ Object.create(null);
  let _ = {};
  function S(b) {
    _ = Vw(
      h[b] || m[b],
      _
    );
  }
  return S(s), f.forEach(S), Vw(i, _);
}
function ax(i, s) {
  const f = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return f;
  i.not_found instanceof Array && i.not_found.forEach((m) => {
    s(m, null), f.push(m);
  });
  const h = Sz(i);
  for (const m in h) {
    const _ = h[m];
    _ && (s(m, Ez(i, m, _)), f.push(m));
  }
  return f;
}
const _z = {
  provider: "",
  aliases: {},
  not_found: {},
  ...rx
};
function aE(i, s) {
  for (const f in s)
    if (f in i && typeof i[f] != typeof s[f])
      return !1;
  return !0;
}
function ix(i) {
  if (typeof i != "object" || i === null)
    return null;
  const s = i;
  if (typeof s.prefix != "string" || !i.icons || typeof i.icons != "object" || !aE(i, _z))
    return null;
  const f = s.icons;
  for (const m in f) {
    const _ = f[m];
    if (!m.match(Ah) || typeof _.body != "string" || !aE(
      _,
      EE
    ))
      return null;
  }
  const h = s.aliases || /* @__PURE__ */ Object.create(null);
  for (const m in h) {
    const _ = h[m], S = _.parent;
    if (!m.match(Ah) || typeof S != "string" || !f[S] && !h[S] || !aE(
      _,
      EE
    ))
      return null;
  }
  return s;
}
const Iw = /* @__PURE__ */ Object.create(null);
function Cz(i, s) {
  return {
    provider: i,
    prefix: s,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function oc(i, s) {
  const f = Iw[i] || (Iw[i] = /* @__PURE__ */ Object.create(null));
  return f[s] || (f[s] = Cz(i, s));
}
function qE(i, s) {
  return ix(s) ? ax(s, (f, h) => {
    h ? i.icons[f] = h : i.missing.add(f);
  }) : [];
}
function Tz(i, s, f) {
  try {
    if (typeof f.body == "string")
      return i.icons[s] = { ...f }, !0;
  } catch {
  }
  return !1;
}
let Ph = !1;
function lx(i) {
  return typeof i == "boolean" && (Ph = i), Ph;
}
function wz(i) {
  const s = typeof i == "string" ? _g(i, !0, Ph) : i;
  if (s) {
    const f = oc(s.provider, s.prefix), h = s.name;
    return f.icons[h] || (f.missing.has(h) ? null : void 0);
  }
}
function Rz(i, s) {
  const f = _g(i, !0, Ph);
  if (!f)
    return !1;
  const h = oc(f.provider, f.prefix);
  return Tz(h, f.name, s);
}
function xz(i, s) {
  if (typeof i != "object")
    return !1;
  if (typeof s != "string" && (s = i.provider || ""), Ph && !s && !i.prefix) {
    let m = !1;
    return ix(i) && (i.prefix = "", ax(i, (_, S) => {
      S && Rz(_, S) && (m = !0);
    })), m;
  }
  const f = i.prefix;
  if (!eg({
    provider: s,
    prefix: f,
    name: "a"
  }))
    return !1;
  const h = oc(s, f);
  return !!qE(h, i);
}
const ux = Object.freeze({
  width: null,
  height: null
}), ox = Object.freeze({
  // Dimensions
  ...ux,
  // Transformations
  ...og
}), Dz = /(-?[0-9.]*[0-9]+[0-9.]*)/g, kz = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Bw(i, s, f) {
  if (s === 1)
    return i;
  if (f = f || 100, typeof i == "number")
    return Math.ceil(i * s * f) / f;
  if (typeof i != "string")
    return i;
  const h = i.split(Dz);
  if (h === null || !h.length)
    return i;
  const m = [];
  let _ = h.shift(), S = kz.test(_);
  for (; ; ) {
    if (S) {
      const b = parseFloat(_);
      isNaN(b) ? m.push(_) : m.push(Math.ceil(b * s * f) / f);
    } else
      m.push(_);
    if (_ = h.shift(), _ === void 0)
      return m.join("");
    S = !S;
  }
}
const bz = (i) => i === "unset" || i === "undefined" || i === "none";
function Oz(i, s) {
  const f = {
    ...QE,
    ...i
  }, h = {
    ...ox,
    ...s
  }, m = {
    left: f.left,
    top: f.top,
    width: f.width,
    height: f.height
  };
  let _ = f.body;
  [f, h].forEach((ne) => {
    const ae = [], se = ne.hFlip, Me = ne.vFlip;
    let ie = ne.rotate;
    se ? Me ? ie += 2 : (ae.push(
      "translate(" + (m.width + m.left).toString() + " " + (0 - m.top).toString() + ")"
    ), ae.push("scale(-1 1)"), m.top = m.left = 0) : Me && (ae.push(
      "translate(" + (0 - m.left).toString() + " " + (m.height + m.top).toString() + ")"
    ), ae.push("scale(1 -1)"), m.top = m.left = 0);
    let ee;
    switch (ie < 0 && (ie -= Math.floor(ie / 4) * 4), ie = ie % 4, ie) {
      case 1:
        ee = m.height / 2 + m.top, ae.unshift(
          "rotate(90 " + ee.toString() + " " + ee.toString() + ")"
        );
        break;
      case 2:
        ae.unshift(
          "rotate(180 " + (m.width / 2 + m.left).toString() + " " + (m.height / 2 + m.top).toString() + ")"
        );
        break;
      case 3:
        ee = m.width / 2 + m.left, ae.unshift(
          "rotate(-90 " + ee.toString() + " " + ee.toString() + ")"
        );
        break;
    }
    ie % 2 === 1 && (m.left !== m.top && (ee = m.left, m.left = m.top, m.top = ee), m.width !== m.height && (ee = m.width, m.width = m.height, m.height = ee)), ae.length && (_ = '<g transform="' + ae.join(" ") + '">' + _ + "</g>");
  });
  const S = h.width, b = h.height, k = m.width, M = m.height;
  let P, U;
  S === null ? (U = b === null ? "1em" : b === "auto" ? M : b, P = Bw(U, k / M)) : (P = S === "auto" ? k : S, U = b === null ? Bw(P, M / k) : b === "auto" ? M : b);
  const I = {}, Q = (ne, ae) => {
    bz(ae) || (I[ne] = ae.toString());
  };
  return Q("width", P), Q("height", U), I.viewBox = m.left.toString() + " " + m.top.toString() + " " + k.toString() + " " + M.toString(), {
    attributes: I,
    body: _
  };
}
const Mz = /\sid="(\S+)"/g, Lz = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Nz = 0;
function Uz(i, s = Lz) {
  const f = [];
  let h;
  for (; h = Mz.exec(i); )
    f.push(h[1]);
  if (!f.length)
    return i;
  const m = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return f.forEach((_) => {
    const S = typeof s == "function" ? s(_) : s + (Nz++).toString(), b = _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + b + ')([")]|\\.[a-z])', "g"),
      "$1" + S + m + "$3"
    );
  }), i = i.replace(new RegExp(m, "g"), ""), i;
}
const _E = /* @__PURE__ */ Object.create(null);
function zz(i, s) {
  _E[i] = s;
}
function CE(i) {
  return _E[i] || _E[""];
}
function XE(i) {
  let s;
  if (typeof i.resources == "string")
    s = [i.resources];
  else if (s = i.resources, !(s instanceof Array) || !s.length)
    return null;
  return {
    // API hosts
    resources: s,
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
const KE = /* @__PURE__ */ Object.create(null), Nh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], tg = [];
for (; Nh.length > 0; )
  Nh.length === 1 || Math.random() > 0.5 ? tg.push(Nh.shift()) : tg.push(Nh.pop());
KE[""] = XE({
  resources: ["https://api.iconify.design"].concat(tg)
});
function Az(i, s) {
  const f = XE(s);
  return f === null ? !1 : (KE[i] = f, !0);
}
function ZE(i) {
  return KE[i];
}
const Fz = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let Ww = Fz();
function Hz(i, s) {
  const f = ZE(i);
  if (!f)
    return 0;
  let h;
  if (!f.maxURL)
    h = 0;
  else {
    let m = 0;
    f.resources.forEach((S) => {
      m = Math.max(m, S.length);
    });
    const _ = s + ".json?icons=";
    h = f.maxURL - m - f.path.length - _.length;
  }
  return h;
}
function jz(i) {
  return i === 404;
}
const Yz = (i, s, f) => {
  const h = [], m = Hz(i, s), _ = "icons";
  let S = {
    type: _,
    provider: i,
    prefix: s,
    icons: []
  }, b = 0;
  return f.forEach((k, M) => {
    b += k.length + 1, b >= m && M > 0 && (h.push(S), S = {
      type: _,
      provider: i,
      prefix: s,
      icons: []
    }, b = k.length), S.icons.push(k);
  }), h.push(S), h;
};
function Pz(i) {
  if (typeof i == "string") {
    const s = ZE(i);
    if (s)
      return s.path;
  }
  return "/";
}
const Vz = (i, s, f) => {
  if (!Ww) {
    f("abort", 424);
    return;
  }
  let h = Pz(s.provider);
  switch (s.type) {
    case "icons": {
      const _ = s.prefix, b = s.icons.join(","), k = new URLSearchParams({
        icons: b
      });
      h += _ + ".json?" + k.toString();
      break;
    }
    case "custom": {
      const _ = s.uri;
      h += _.slice(0, 1) === "/" ? _.slice(1) : _;
      break;
    }
    default:
      f("abort", 400);
      return;
  }
  let m = 503;
  Ww(i + h).then((_) => {
    const S = _.status;
    if (S !== 200) {
      setTimeout(() => {
        f(jz(S) ? "abort" : "next", S);
      });
      return;
    }
    return m = 501, _.json();
  }).then((_) => {
    if (typeof _ != "object" || _ === null) {
      setTimeout(() => {
        _ === 404 ? f("abort", _) : f("next", m);
      });
      return;
    }
    setTimeout(() => {
      f("success", _);
    });
  }).catch(() => {
    f("next", m);
  });
}, Iz = {
  prepare: Yz,
  send: Vz
};
function Bz(i) {
  const s = {
    loaded: [],
    missing: [],
    pending: []
  }, f = /* @__PURE__ */ Object.create(null);
  i.sort((m, _) => m.provider !== _.provider ? m.provider.localeCompare(_.provider) : m.prefix !== _.prefix ? m.prefix.localeCompare(_.prefix) : m.name.localeCompare(_.name));
  let h = {
    provider: "",
    prefix: "",
    name: ""
  };
  return i.forEach((m) => {
    if (h.name === m.name && h.prefix === m.prefix && h.provider === m.provider)
      return;
    h = m;
    const _ = m.provider, S = m.prefix, b = m.name, k = f[_] || (f[_] = /* @__PURE__ */ Object.create(null)), M = k[S] || (k[S] = oc(_, S));
    let P;
    b in M.icons ? P = s.loaded : S === "" || M.missing.has(b) ? P = s.missing : P = s.pending;
    const U = {
      provider: _,
      prefix: S,
      name: b
    };
    P.push(U);
  }), s;
}
function sx(i, s) {
  i.forEach((f) => {
    const h = f.loaderCallbacks;
    h && (f.loaderCallbacks = h.filter((m) => m.id !== s));
  });
}
function Wz(i) {
  i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0, setTimeout(() => {
    i.pendingCallbacksFlag = !1;
    const s = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
    if (!s.length)
      return;
    let f = !1;
    const h = i.provider, m = i.prefix;
    s.forEach((_) => {
      const S = _.icons, b = S.pending.length;
      S.pending = S.pending.filter((k) => {
        if (k.prefix !== m)
          return !0;
        const M = k.name;
        if (i.icons[M])
          S.loaded.push({
            provider: h,
            prefix: m,
            name: M
          });
        else if (i.missing.has(M))
          S.missing.push({
            provider: h,
            prefix: m,
            name: M
          });
        else
          return f = !0, !0;
        return !1;
      }), S.pending.length !== b && (f || sx([i], _.id), _.callback(
        S.loaded.slice(0),
        S.missing.slice(0),
        S.pending.slice(0),
        _.abort
      ));
    });
  }));
}
let $z = 0;
function Gz(i, s, f) {
  const h = $z++, m = sx.bind(null, f, h);
  if (!s.pending.length)
    return m;
  const _ = {
    id: h,
    icons: s,
    callback: i,
    abort: m
  };
  return f.forEach((S) => {
    (S.loaderCallbacks || (S.loaderCallbacks = [])).push(_);
  }), m;
}
function Qz(i, s = !0, f = !1) {
  const h = [];
  return i.forEach((m) => {
    const _ = typeof m == "string" ? _g(m, s, f) : m;
    _ && h.push(_);
  }), h;
}
var qz = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Xz(i, s, f, h) {
  const m = i.resources.length, _ = i.random ? Math.floor(Math.random() * m) : i.index;
  let S;
  if (i.random) {
    let le = i.resources.slice(0);
    for (S = []; le.length > 1; ) {
      const he = Math.floor(Math.random() * le.length);
      S.push(le[he]), le = le.slice(0, he).concat(le.slice(he + 1));
    }
    S = S.concat(le);
  } else
    S = i.resources.slice(_).concat(i.resources.slice(0, _));
  const b = Date.now();
  let k = "pending", M = 0, P, U = null, I = [], Q = [];
  typeof h == "function" && Q.push(h);
  function ne() {
    U && (clearTimeout(U), U = null);
  }
  function ae() {
    k === "pending" && (k = "aborted"), ne(), I.forEach((le) => {
      le.status === "pending" && (le.status = "aborted");
    }), I = [];
  }
  function se(le, he) {
    he && (Q = []), typeof le == "function" && Q.push(le);
  }
  function Me() {
    return {
      startTime: b,
      payload: s,
      status: k,
      queriesSent: M,
      queriesPending: I.length,
      subscribe: se,
      abort: ae
    };
  }
  function ie() {
    k = "failed", Q.forEach((le) => {
      le(void 0, P);
    });
  }
  function ee() {
    I.forEach((le) => {
      le.status === "pending" && (le.status = "aborted");
    }), I = [];
  }
  function ye(le, he, it) {
    const tt = he !== "success";
    switch (I = I.filter((lt) => lt !== le), k) {
      case "pending":
        break;
      case "failed":
        if (tt || !i.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (he === "abort") {
      P = it, ie();
      return;
    }
    if (tt) {
      P = it, I.length || (S.length ? ve() : ie());
      return;
    }
    if (ne(), ee(), !i.random) {
      const lt = i.resources.indexOf(le.resource);
      lt !== -1 && lt !== i.index && (i.index = lt);
    }
    k = "completed", Q.forEach((lt) => {
      lt(it);
    });
  }
  function ve() {
    if (k !== "pending")
      return;
    ne();
    const le = S.shift();
    if (le === void 0) {
      if (I.length) {
        U = setTimeout(() => {
          ne(), k === "pending" && (ee(), ie());
        }, i.timeout);
        return;
      }
      ie();
      return;
    }
    const he = {
      status: "pending",
      resource: le,
      callback: (it, tt) => {
        ye(he, it, tt);
      }
    };
    I.push(he), M++, U = setTimeout(ve, i.rotate), f(le, s, he.callback);
  }
  return setTimeout(ve), Me;
}
function cx(i) {
  const s = {
    ...qz,
    ...i
  };
  let f = [];
  function h() {
    f = f.filter((b) => b().status === "pending");
  }
  function m(b, k, M) {
    const P = Xz(
      s,
      b,
      k,
      (U, I) => {
        h(), M && M(U, I);
      }
    );
    return f.push(P), P;
  }
  function _(b) {
    return f.find((k) => b(k)) || null;
  }
  return {
    query: m,
    find: _,
    setIndex: (b) => {
      s.index = b;
    },
    getIndex: () => s.index,
    cleanup: h
  };
}
function $w() {
}
const iE = /* @__PURE__ */ Object.create(null);
function Kz(i) {
  if (!iE[i]) {
    const s = ZE(i);
    if (!s)
      return;
    const f = cx(s), h = {
      config: s,
      redundancy: f
    };
    iE[i] = h;
  }
  return iE[i];
}
function Zz(i, s, f) {
  let h, m;
  if (typeof i == "string") {
    const _ = CE(i);
    if (!_)
      return f(void 0, 424), $w;
    m = _.send;
    const S = Kz(i);
    S && (h = S.redundancy);
  } else {
    const _ = XE(i);
    if (_) {
      h = cx(_);
      const S = i.resources ? i.resources[0] : "", b = CE(S);
      b && (m = b.send);
    }
  }
  return !h || !m ? (f(void 0, 424), $w) : h.query(s, m, f)().abort;
}
const Gw = "iconify2", Vh = "iconify", fx = Vh + "-count", Qw = Vh + "-version", dx = 36e5, Jz = 168;
function TE(i, s) {
  try {
    return i.getItem(s);
  } catch {
  }
}
function JE(i, s, f) {
  try {
    return i.setItem(s, f), !0;
  } catch {
  }
}
function qw(i, s) {
  try {
    i.removeItem(s);
  } catch {
  }
}
function wE(i, s) {
  return JE(i, fx, s.toString());
}
function RE(i) {
  return parseInt(TE(i, fx)) || 0;
}
const Cg = {
  local: !0,
  session: !0
}, px = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let e_ = !1;
function eA(i) {
  e_ = i;
}
let Qy = typeof window > "u" ? {} : window;
function hx(i) {
  const s = i + "Storage";
  try {
    if (Qy && Qy[s] && typeof Qy[s].length == "number")
      return Qy[s];
  } catch {
  }
  Cg[i] = !1;
}
function vx(i, s) {
  const f = hx(i);
  if (!f)
    return;
  const h = TE(f, Qw);
  if (h !== Gw) {
    if (h) {
      const b = RE(f);
      for (let k = 0; k < b; k++)
        qw(f, Vh + k.toString());
    }
    JE(f, Qw, Gw), wE(f, 0);
    return;
  }
  const m = Math.floor(Date.now() / dx) - Jz, _ = (b) => {
    const k = Vh + b.toString(), M = TE(f, k);
    if (typeof M == "string") {
      try {
        const P = JSON.parse(M);
        if (typeof P == "object" && typeof P.cached == "number" && P.cached > m && typeof P.provider == "string" && typeof P.data == "object" && typeof P.data.prefix == "string" && // Valid item: run callback
        s(P, b))
          return !0;
      } catch {
      }
      qw(f, k);
    }
  };
  let S = RE(f);
  for (let b = S - 1; b >= 0; b--)
    _(b) || (b === S - 1 ? (S--, wE(f, S)) : px[i].add(b));
}
function mx() {
  if (!e_) {
    eA(!0);
    for (const i in Cg)
      vx(i, (s) => {
        const f = s.data, h = s.provider, m = f.prefix, _ = oc(
          h,
          m
        );
        if (!qE(_, f).length)
          return !1;
        const S = f.lastModified || -1;
        return _.lastModifiedCached = _.lastModifiedCached ? Math.min(_.lastModifiedCached, S) : S, !0;
      });
  }
}
function tA(i, s) {
  const f = i.lastModifiedCached;
  if (
    // Matches or newer
    f && f >= s
  )
    return f === s;
  if (i.lastModifiedCached = s, f)
    for (const h in Cg)
      vx(h, (m) => {
        const _ = m.data;
        return m.provider !== i.provider || _.prefix !== i.prefix || _.lastModified === s;
      });
  return !0;
}
function nA(i, s) {
  e_ || mx();
  function f(h) {
    let m;
    if (!Cg[h] || !(m = hx(h)))
      return;
    const _ = px[h];
    let S;
    if (_.size)
      _.delete(S = Array.from(_).shift());
    else if (S = RE(m), !wE(m, S + 1))
      return;
    const b = {
      cached: Math.floor(Date.now() / dx),
      provider: i.provider,
      data: s
    };
    return JE(
      m,
      Vh + S.toString(),
      JSON.stringify(b)
    );
  }
  s.lastModified && !tA(i, s.lastModified) || Object.keys(s.icons).length && (s.not_found && (s = Object.assign({}, s), delete s.not_found), f("local") || f("session"));
}
function Xw() {
}
function rA(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, Wz(i);
  }));
}
function aA(i, s) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(s).sort() : i.iconsToLoad = s, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: f, prefix: h } = i, m = i.iconsToLoad;
    delete i.iconsToLoad;
    let _;
    if (!m || !(_ = CE(f)))
      return;
    _.prepare(f, h, m).forEach((b) => {
      Zz(f, b, (k) => {
        if (typeof k != "object")
          b.icons.forEach((M) => {
            i.missing.add(M);
          });
        else
          try {
            const M = qE(
              i,
              k
            );
            if (!M.length)
              return;
            const P = i.pendingIcons;
            P && M.forEach((U) => {
              P.delete(U);
            }), nA(i, k);
          } catch (M) {
            console.error(M);
          }
        rA(i);
      });
    });
  }));
}
const iA = (i, s) => {
  const f = Qz(i, !0, lx()), h = Bz(f);
  if (!h.pending.length) {
    let k = !0;
    return s && setTimeout(() => {
      k && s(
        h.loaded,
        h.missing,
        h.pending,
        Xw
      );
    }), () => {
      k = !1;
    };
  }
  const m = /* @__PURE__ */ Object.create(null), _ = [];
  let S, b;
  return h.pending.forEach((k) => {
    const { provider: M, prefix: P } = k;
    if (P === b && M === S)
      return;
    S = M, b = P, _.push(oc(M, P));
    const U = m[M] || (m[M] = /* @__PURE__ */ Object.create(null));
    U[P] || (U[P] = []);
  }), h.pending.forEach((k) => {
    const { provider: M, prefix: P, name: U } = k, I = oc(M, P), Q = I.pendingIcons || (I.pendingIcons = /* @__PURE__ */ new Set());
    Q.has(U) || (Q.add(U), m[M][P].push(U));
  }), _.forEach((k) => {
    const { provider: M, prefix: P } = k;
    m[M][P].length && aA(k, m[M][P]);
  }), s ? Gz(s, h, _) : Xw;
};
function lA(i, s) {
  const f = {
    ...i
  };
  for (const h in s) {
    const m = s[h], _ = typeof m;
    h in ux ? (m === null || m && (_ === "string" || _ === "number")) && (f[h] = m) : _ === typeof f[h] && (f[h] = h === "rotate" ? m % 4 : m);
  }
  return f;
}
const uA = /[\s,]+/;
function oA(i, s) {
  s.split(uA).forEach((f) => {
    switch (f.trim()) {
      case "horizontal":
        i.hFlip = !0;
        break;
      case "vertical":
        i.vFlip = !0;
        break;
    }
  });
}
function sA(i, s = 0) {
  const f = i.replace(/^-?[0-9.]*/, "");
  function h(m) {
    for (; m < 0; )
      m += 4;
    return m % 4;
  }
  if (f === "") {
    const m = parseInt(i);
    return isNaN(m) ? 0 : h(m);
  } else if (f !== i) {
    let m = 0;
    switch (f) {
      case "%":
        m = 25;
        break;
      case "deg":
        m = 90;
    }
    if (m) {
      let _ = parseFloat(i.slice(0, i.length - f.length));
      return isNaN(_) ? 0 : (_ = _ / m, _ % 1 === 0 ? h(_) : 0);
    }
  }
  return s;
}
function cA(i, s) {
  let f = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const h in s)
    f += " " + h + '="' + s[h] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + f + ">" + i + "</svg>";
}
function fA(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function dA(i) {
  return "data:image/svg+xml," + fA(i);
}
function pA(i) {
  return 'url("' + dA(i) + '")';
}
let Fh;
function hA() {
  try {
    Fh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Fh = null;
  }
}
function vA(i) {
  return Fh === void 0 && hA(), Fh ? Fh.createHTML(i) : i;
}
const yx = {
  ...ox,
  inline: !1
}, mA = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, yA = {
  display: "inline-block"
}, xE = {
  backgroundColor: "currentColor"
}, gx = {
  backgroundColor: "transparent"
}, Kw = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Zw = {
  WebkitMask: xE,
  mask: xE,
  background: gx
};
for (const i in Zw) {
  const s = Zw[i];
  for (const f in Kw)
    s[i + f] = Kw[f];
}
const gA = {
  ...yx,
  inline: !0
};
function Jw(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const SA = (i, s, f, h) => {
  const m = f ? gA : yx, _ = lA(m, s), S = s.mode || "svg", b = {}, k = s.style || {}, M = {
    ...S === "svg" ? mA : {},
    ref: h
  };
  for (let Me in s) {
    const ie = s[Me];
    if (ie !== void 0)
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
          _[Me] = ie === !0 || ie === "true" || ie === 1;
          break;
        case "flip":
          typeof ie == "string" && oA(_, ie);
          break;
        case "color":
          b.color = ie;
          break;
        case "rotate":
          typeof ie == "string" ? _[Me] = sA(ie) : typeof ie == "number" && (_[Me] = ie);
          break;
        case "ariaHidden":
        case "aria-hidden":
          ie !== !0 && ie !== "true" && delete M["aria-hidden"];
          break;
        default:
          m[Me] === void 0 && (M[Me] = ie);
      }
  }
  const P = Oz(i, _), U = P.attributes;
  if (_.inline && (b.verticalAlign = "-0.125em"), S === "svg") {
    M.style = {
      ...b,
      ...k
    }, Object.assign(M, U);
    let Me = 0, ie = s.id;
    return typeof ie == "string" && (ie = ie.replace(/-/g, "_")), M.dangerouslySetInnerHTML = {
      __html: vA(Uz(P.body, ie ? () => ie + "ID" + Me++ : "iconifyReact"))
    }, qo.createElement("svg", M);
  }
  const { body: I, width: Q, height: ne } = i, ae = S === "mask" || (S === "bg" ? !1 : I.indexOf("currentColor") !== -1), se = cA(I, {
    ...U,
    width: Q + "",
    height: ne + ""
  });
  return M.style = {
    ...b,
    "--svg": pA(se),
    width: Jw(U.width),
    height: Jw(U.height),
    ...yA,
    ...ae ? xE : gx,
    ...k
  }, qo.createElement("span", M);
};
lx(!0);
zz("", Iz);
if (typeof document < "u" && typeof window < "u") {
  mx();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const s = i.IconifyPreload, f = "Invalid IconifyPreload syntax.";
    typeof s == "object" && s !== null && (s instanceof Array ? s : [s]).forEach((h) => {
      try {
        // Check if item is an object and not null/array
        (typeof h != "object" || h === null || h instanceof Array || // Check for 'icons' and 'prefix'
        typeof h.icons != "object" || typeof h.prefix != "string" || // Add icon set
        !xz(h)) && console.error(f);
      } catch {
        console.error(f);
      }
    });
  }
  if (i.IconifyProviders !== void 0) {
    const s = i.IconifyProviders;
    if (typeof s == "object" && s !== null)
      for (let f in s) {
        const h = "IconifyProviders[" + f + "] is invalid.";
        try {
          const m = s[f];
          if (typeof m != "object" || !m || m.resources === void 0)
            continue;
          Az(f, m) || console.error(h);
        } catch {
          console.error(h);
        }
      }
  }
}
class Sx extends qo.Component {
  constructor(s) {
    super(s), this.state = {
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
  _setData(s) {
    this.state.icon !== s && this.setState({
      icon: s
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(s) {
    const f = this.state, h = this.props.icon;
    if (typeof h == "object" && h !== null && typeof h.body == "string") {
      this._icon = "", this._abortLoading(), (s || f.icon === null) && this._setData({
        data: h
      });
      return;
    }
    let m;
    if (typeof h != "string" || (m = _g(h, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const _ = wz(m);
    if (!_) {
      (!this._loading || this._loading.name !== h) && (this._abortLoading(), this._icon = "", this._setData(null), _ !== null && (this._loading = {
        name: h,
        abort: iA([m], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== h || f.icon === null) {
      this._abortLoading(), this._icon = h;
      const S = ["iconify"];
      m.prefix !== "" && S.push("iconify--" + m.prefix), m.provider !== "" && S.push("iconify--" + m.provider), this._setData({
        data: _,
        classes: S
      }), this.props.onLoad && this.props.onLoad(h);
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
  componentDidUpdate(s) {
    s.icon !== this.props.icon && this._checkIcon(!0);
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
    const s = this.props, f = this.state.icon;
    if (f === null)
      return s.children ? s.children : qo.createElement("span", {});
    let h = s;
    return f.classes && (h = {
      ...s,
      className: (typeof s.className == "string" ? s.className + " " : "") + f.classes.join(" ")
    }), SA({
      ...QE,
      ...f.data
    }, h, s._inline, s._ref);
  }
}
qo.forwardRef(function(s, f) {
  const h = {
    ...s,
    _ref: f,
    _inline: !1
  };
  return qo.createElement(Sx, h);
});
qo.forwardRef(function(s, f) {
  const h = {
    ...s,
    _ref: f,
    _inline: !0
  };
  return qo.createElement(Sx, h);
});
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
ue.defineLocale("pt-br", {
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
ue.locale("pt-br");
var La = {}, qy = { exports: {} }, lE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function EA() {
  return eR || (eR = 1, function(i) {
    function s(oe, Ae) {
      var Ee = oe.length;
      oe.push(Ae);
      e:
        for (; 0 < Ee; ) {
          var yt = Ee - 1 >>> 1, Ct = oe[yt];
          if (0 < m(Ct, Ae))
            oe[yt] = Ae, oe[Ee] = Ct, Ee = yt;
          else
            break e;
        }
    }
    function f(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function h(oe) {
      if (oe.length === 0)
        return null;
      var Ae = oe[0], Ee = oe.pop();
      if (Ee !== Ae) {
        oe[0] = Ee;
        e:
          for (var yt = 0, Ct = oe.length, Vn = Ct >>> 1; yt < Vn; ) {
            var hr = 2 * (yt + 1) - 1, Ja = oe[hr], Cn = hr + 1, sa = oe[Cn];
            if (0 > m(Ja, Ee))
              Cn < Ct && 0 > m(sa, Ja) ? (oe[yt] = sa, oe[Cn] = Ee, yt = Cn) : (oe[yt] = Ja, oe[hr] = Ee, yt = hr);
            else if (Cn < Ct && 0 > m(sa, Ee))
              oe[yt] = sa, oe[Cn] = Ee, yt = Cn;
            else
              break e;
          }
      }
      return Ae;
    }
    function m(oe, Ae) {
      var Ee = oe.sortIndex - Ae.sortIndex;
      return Ee !== 0 ? Ee : oe.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      i.unstable_now = function() {
        return _.now();
      };
    } else {
      var S = Date, b = S.now();
      i.unstable_now = function() {
        return S.now() - b;
      };
    }
    var k = [], M = [], P = 1, U = null, I = 3, Q = !1, ne = !1, ae = !1, se = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(oe) {
      for (var Ae = f(M); Ae !== null; ) {
        if (Ae.callback === null)
          h(M);
        else if (Ae.startTime <= oe)
          h(M), Ae.sortIndex = Ae.expirationTime, s(k, Ae);
        else
          break;
        Ae = f(M);
      }
    }
    function ye(oe) {
      if (ae = !1, ee(oe), !ne)
        if (f(k) !== null)
          ne = !0, kt(ve);
        else {
          var Ae = f(M);
          Ae !== null && _n(ye, Ae.startTime - oe);
        }
    }
    function ve(oe, Ae) {
      ne = !1, ae && (ae = !1, Me(it), it = -1), Q = !0;
      var Ee = I;
      try {
        for (ee(Ae), U = f(k); U !== null && (!(U.expirationTime > Ae) || oe && !ht()); ) {
          var yt = U.callback;
          if (typeof yt == "function") {
            U.callback = null, I = U.priorityLevel;
            var Ct = yt(U.expirationTime <= Ae);
            Ae = i.unstable_now(), typeof Ct == "function" ? U.callback = Ct : U === f(k) && h(k), ee(Ae);
          } else
            h(k);
          U = f(k);
        }
        if (U !== null)
          var Vn = !0;
        else {
          var hr = f(M);
          hr !== null && _n(ye, hr.startTime - Ae), Vn = !1;
        }
        return Vn;
      } finally {
        U = null, I = Ee, Q = !1;
      }
    }
    var le = !1, he = null, it = -1, tt = 5, lt = -1;
    function ht() {
      return !(i.unstable_now() - lt < tt);
    }
    function Vt() {
      if (he !== null) {
        var oe = i.unstable_now();
        lt = oe;
        var Ae = !0;
        try {
          Ae = he(!0, oe);
        } finally {
          Ae ? Ie() : (le = !1, he = null);
        }
      } else
        le = !1;
    }
    var Ie;
    if (typeof ie == "function")
      Ie = function() {
        ie(Vt);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), hn = et.port2;
      et.port1.onmessage = Vt, Ie = function() {
        hn.postMessage(null);
      };
    } else
      Ie = function() {
        se(Vt, 0);
      };
    function kt(oe) {
      he = oe, le || (le = !0, Ie());
    }
    function _n(oe, Ae) {
      it = se(function() {
        oe(i.unstable_now());
      }, Ae);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(oe) {
      oe.callback = null;
    }, i.unstable_continueExecution = function() {
      ne || Q || (ne = !0, kt(ve));
    }, i.unstable_forceFrameRate = function(oe) {
      0 > oe || 125 < oe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < oe ? Math.floor(1e3 / oe) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, i.unstable_getFirstCallbackNode = function() {
      return f(k);
    }, i.unstable_next = function(oe) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = I;
      }
      var Ee = I;
      I = Ae;
      try {
        return oe();
      } finally {
        I = Ee;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(oe, Ae) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          oe = 3;
      }
      var Ee = I;
      I = oe;
      try {
        return Ae();
      } finally {
        I = Ee;
      }
    }, i.unstable_scheduleCallback = function(oe, Ae, Ee) {
      var yt = i.unstable_now();
      switch (typeof Ee == "object" && Ee !== null ? (Ee = Ee.delay, Ee = typeof Ee == "number" && 0 < Ee ? yt + Ee : yt) : Ee = yt, oe) {
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
      return Ct = Ee + Ct, oe = { id: P++, callback: Ae, priorityLevel: oe, startTime: Ee, expirationTime: Ct, sortIndex: -1 }, Ee > yt ? (oe.sortIndex = Ee, s(M, oe), f(k) === null && oe === f(M) && (ae ? (Me(it), it = -1) : ae = !0, _n(ye, Ee - yt))) : (oe.sortIndex = Ct, s(k, oe), ne || Q || (ne = !0, kt(ve))), oe;
    }, i.unstable_shouldYield = ht, i.unstable_wrapCallback = function(oe) {
      var Ae = I;
      return function() {
        var Ee = I;
        I = Ae;
        try {
          return oe.apply(this, arguments);
        } finally {
          I = Ee;
        }
      };
    };
  }(lE)), lE;
}
var uE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function _A() {
  return tR || (tR = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, f = !1, h = 5;
      function m(de, Ne) {
        var nt = de.length;
        de.push(Ne), b(de, Ne, nt);
      }
      function _(de) {
        return de.length === 0 ? null : de[0];
      }
      function S(de) {
        if (de.length === 0)
          return null;
        var Ne = de[0], nt = de.pop();
        return nt !== Ne && (de[0] = nt, k(de, nt, 0)), Ne;
      }
      function b(de, Ne, nt) {
        for (var bt = nt; bt > 0; ) {
          var Zt = bt - 1 >>> 1, Ln = de[Zt];
          if (M(Ln, Ne) > 0)
            de[Zt] = Ne, de[bt] = Ln, bt = Zt;
          else
            return;
        }
      }
      function k(de, Ne, nt) {
        for (var bt = nt, Zt = de.length, Ln = Zt >>> 1; bt < Ln; ) {
          var cn = (bt + 1) * 2 - 1, kr = de[cn], Ht = cn + 1, qr = de[Ht];
          if (M(kr, Ne) < 0)
            Ht < Zt && M(qr, kr) < 0 ? (de[bt] = qr, de[Ht] = Ne, bt = Ht) : (de[bt] = kr, de[cn] = Ne, bt = cn);
          else if (Ht < Zt && M(qr, Ne) < 0)
            de[bt] = qr, de[Ht] = Ne, bt = Ht;
          else
            return;
        }
      }
      function M(de, Ne) {
        var nt = de.sortIndex - Ne.sortIndex;
        return nt !== 0 ? nt : de.id - Ne.id;
      }
      var P = 1, U = 2, I = 3, Q = 4, ne = 5;
      function ae(de, Ne) {
      }
      var se = typeof performance == "object" && typeof performance.now == "function";
      if (se) {
        var Me = performance;
        i.unstable_now = function() {
          return Me.now();
        };
      } else {
        var ie = Date, ee = ie.now();
        i.unstable_now = function() {
          return ie.now() - ee;
        };
      }
      var ye = 1073741823, ve = -1, le = 250, he = 5e3, it = 1e4, tt = ye, lt = [], ht = [], Vt = 1, Ie = null, et = I, hn = !1, kt = !1, _n = !1, oe = typeof setTimeout == "function" ? setTimeout : null, Ae = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function yt(de) {
        for (var Ne = _(ht); Ne !== null; ) {
          if (Ne.callback === null)
            S(ht);
          else if (Ne.startTime <= de)
            S(ht), Ne.sortIndex = Ne.expirationTime, m(lt, Ne);
          else
            return;
          Ne = _(ht);
        }
      }
      function Ct(de) {
        if (_n = !1, yt(de), !kt)
          if (_(lt) !== null)
            kt = !0, Fa(Vn);
          else {
            var Ne = _(ht);
            Ne !== null && vn(Ct, Ne.startTime - de);
          }
      }
      function Vn(de, Ne) {
        kt = !1, _n && (_n = !1, Qr()), hn = !0;
        var nt = et;
        try {
          var bt;
          if (!f)
            return hr(de, Ne);
        } finally {
          Ie = null, et = nt, hn = !1;
        }
      }
      function hr(de, Ne) {
        var nt = Ne;
        for (yt(nt), Ie = _(lt); Ie !== null && !s && !(Ie.expirationTime > nt && (!de || za())); ) {
          var bt = Ie.callback;
          if (typeof bt == "function") {
            Ie.callback = null, et = Ie.priorityLevel;
            var Zt = Ie.expirationTime <= nt, Ln = bt(Zt);
            nt = i.unstable_now(), typeof Ln == "function" ? Ie.callback = Ln : Ie === _(lt) && S(lt), yt(nt);
          } else
            S(lt);
          Ie = _(lt);
        }
        if (Ie !== null)
          return !0;
        var cn = _(ht);
        return cn !== null && vn(Ct, cn.startTime - nt), !1;
      }
      function Ja(de, Ne) {
        switch (de) {
          case P:
          case U:
          case I:
          case Q:
          case ne:
            break;
          default:
            de = I;
        }
        var nt = et;
        et = de;
        try {
          return Ne();
        } finally {
          et = nt;
        }
      }
      function Cn(de) {
        var Ne;
        switch (et) {
          case P:
          case U:
          case I:
            Ne = I;
            break;
          default:
            Ne = et;
            break;
        }
        var nt = et;
        et = Ne;
        try {
          return de();
        } finally {
          et = nt;
        }
      }
      function sa(de) {
        var Ne = et;
        return function() {
          var nt = et;
          et = Ne;
          try {
            return de.apply(this, arguments);
          } finally {
            et = nt;
          }
        };
      }
      function nr(de, Ne, nt) {
        var bt = i.unstable_now(), Zt;
        if (typeof nt == "object" && nt !== null) {
          var Ln = nt.delay;
          typeof Ln == "number" && Ln > 0 ? Zt = bt + Ln : Zt = bt;
        } else
          Zt = bt;
        var cn;
        switch (de) {
          case P:
            cn = ve;
            break;
          case U:
            cn = le;
            break;
          case ne:
            cn = tt;
            break;
          case Q:
            cn = it;
            break;
          case I:
          default:
            cn = he;
            break;
        }
        var kr = Zt + cn, Ht = {
          id: Vt++,
          callback: Ne,
          priorityLevel: de,
          startTime: Zt,
          expirationTime: kr,
          sortIndex: -1
        };
        return Zt > bt ? (Ht.sortIndex = Zt, m(ht, Ht), _(lt) === null && Ht === _(ht) && (_n ? Qr() : _n = !0, vn(Ct, Zt - bt))) : (Ht.sortIndex = kr, m(lt, Ht), !kt && !hn && (kt = !0, Fa(Vn))), Ht;
      }
      function xr() {
      }
      function ei() {
        !kt && !hn && (kt = !0, Fa(Vn));
      }
      function Dr() {
        return _(lt);
      }
      function ca(de) {
        de.callback = null;
      }
      function Mn() {
        return et;
      }
      var rr = !1, In = null, ar = -1, ir = h, fa = -1;
      function za() {
        var de = i.unstable_now() - fa;
        return !(de < ir);
      }
      function _i() {
      }
      function ti(de) {
        if (de < 0 || de > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        de > 0 ? ir = Math.floor(1e3 / de) : ir = h;
      }
      var Aa = function() {
        if (In !== null) {
          var de = i.unstable_now();
          fa = de;
          var Ne = !0, nt = !0;
          try {
            nt = In(Ne, de);
          } finally {
            nt ? $r() : (rr = !1, In = null);
          }
        } else
          rr = !1;
      }, $r;
      if (typeof Ee == "function")
        $r = function() {
          Ee(Aa);
        };
      else if (typeof MessageChannel < "u") {
        var ni = new MessageChannel(), Gr = ni.port2;
        ni.port1.onmessage = Aa, $r = function() {
          Gr.postMessage(null);
        };
      } else
        $r = function() {
          oe(Aa, 0);
        };
      function Fa(de) {
        In = de, rr || (rr = !0, $r());
      }
      function vn(de, Ne) {
        ar = oe(function() {
          de(i.unstable_now());
        }, Ne);
      }
      function Qr() {
        Ae(ar), ar = -1;
      }
      var el = _i, Ha = null;
      i.unstable_IdlePriority = ne, i.unstable_ImmediatePriority = P, i.unstable_LowPriority = Q, i.unstable_NormalPriority = I, i.unstable_Profiling = Ha, i.unstable_UserBlockingPriority = U, i.unstable_cancelCallback = ca, i.unstable_continueExecution = ei, i.unstable_forceFrameRate = ti, i.unstable_getCurrentPriorityLevel = Mn, i.unstable_getFirstCallbackNode = Dr, i.unstable_next = Cn, i.unstable_pauseExecution = xr, i.unstable_requestPaint = el, i.unstable_runWithPriority = Ja, i.unstable_scheduleCallback = nr, i.unstable_shouldYield = za, i.unstable_wrapCallback = sa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(uE)), uE;
}
var nR;
function Ex() {
  return nR || (nR = 1, process.env.NODE_ENV === "production" ? qy.exports = EA() : qy.exports = _A()), qy.exports;
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
var rR;
function CA() {
  if (rR)
    return La;
  rR = 1;
  var i = Yu, s = Ex();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), m = {};
  function _(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++)
      h.add(r[n]);
  }
  var b = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, U = {};
  function I(n) {
    return k.call(U, n) ? !0 : k.call(P, n) ? !1 : M.test(n) ? U[n] = !0 : (P[n] = !0, !1);
  }
  function Q(n, r, u, c) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ne(n, r, u, c) {
    if (r === null || typeof r > "u" || Q(n, r, u, c))
      return !0;
    if (c)
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
  function ae(n, r, u, c, p, y, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = C;
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    se[n] = new ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    se[r] = new ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    se[n] = new ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    se[n] = new ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    se[n] = new ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    se[n] = new ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    se[n] = new ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    se[n] = new ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    se[n] = new ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Me = /[\-:]([a-z])/g;
  function ie(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Me,
      ie
    );
    se[r] = new ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Me, ie);
    se[r] = new ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Me, ie);
    se[r] = new ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    se[n] = new ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), se.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    se[n] = new ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ee(n, r, u, c) {
    var p = se.hasOwnProperty(r) ? se[r] : null;
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ne(r, u, p, c) && (u = null), c || p === null ? I(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : p.mustUseProperty ? n[p.propertyName] = u === null ? p.type === 3 ? !1 : "" : u : (r = p.attributeName, c = p.attributeNamespace, u === null ? n.removeAttribute(r) : (p = p.type, u = p === 3 || p === 4 && u === !0 ? "" : "" + u, c ? n.setAttributeNS(c, r, u) : n.setAttribute(r, u))));
  }
  var ye = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = Symbol.for("react.element"), le = Symbol.for("react.portal"), he = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), ht = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), _n = Symbol.for("react.offscreen"), oe = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = oe && n[oe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ee = Object.assign, yt;
  function Ct(n) {
    if (yt === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        yt = r && r[1] || "";
      }
    return `
` + yt + n;
  }
  var Vn = !1;
  function hr(n, r) {
    if (!n || Vn)
      return "";
    Vn = !0;
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
          } catch (V) {
            var c = V;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (V) {
            c = V;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (V) {
          c = V;
        }
        n();
      }
    } catch (V) {
      if (V && c && typeof V.stack == "string") {
        for (var p = V.stack.split(`
`), y = c.stack.split(`
`), C = p.length - 1, R = y.length - 1; 1 <= C && 0 <= R && p[C] !== y[R]; )
          R--;
        for (; 1 <= C && 0 <= R; C--, R--)
          if (p[C] !== y[R]) {
            if (C !== 1 || R !== 1)
              do
                if (C--, R--, 0 > R || p[C] !== y[R]) {
                  var D = `
` + p[C].replace(" at new ", " at ");
                  return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
                }
              while (1 <= C && 0 <= R);
            break;
          }
      }
    } finally {
      Vn = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Ct(n) : "";
  }
  function Ja(n) {
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
        return n = hr(n.type, !1), n;
      case 11:
        return n = hr(n.type.render, !1), n;
      case 1:
        return n = hr(n.type, !0), n;
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
      case he:
        return "Fragment";
      case le:
        return "Portal";
      case tt:
        return "Profiler";
      case it:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ht:
          return (n.displayName || "Context") + ".Consumer";
        case lt:
          return (n._context.displayName || "Context") + ".Provider";
        case Vt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case hn:
          return r = n.displayName || null, r !== null ? r : Cn(n.type) || "Memo";
        case kt:
          r = n._payload, n = n._init;
          try {
            return Cn(n(r));
          } catch {
          }
      }
    return null;
  }
  function sa(n) {
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
        return r === it ? "StrictMode" : "Mode";
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
  function nr(n) {
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
  function xr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ei(n) {
    var r = xr(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var p = u.get, y = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        c = "" + C, y.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(C) {
        c = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dr(n) {
    n._valueTracker || (n._valueTracker = ei(n));
  }
  function ca(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), c = "";
    return n && (c = xr(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== u ? (r.setValue(n), !0) : !1;
  }
  function Mn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var u = r.checked;
    return Ee({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function In(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    u = nr(r.value != null ? r.value : u), n._wrapperState = { initialChecked: c, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ar(n, r) {
    r = r.checked, r != null && ee(n, "checked", r, !1);
  }
  function ir(n, r) {
    ar(n, r);
    var u = nr(r.value), c = r.type;
    if (u != null)
      c === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? za(n, r.type, u) : r.hasOwnProperty("defaultValue") && za(n, r.type, nr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fa(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function za(n, r, u) {
    (r !== "number" || Mn(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var _i = Array.isArray;
  function ti(n, r, u, c) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < u.length; p++)
        r["$" + u[p]] = !0;
      for (u = 0; u < n.length; u++)
        p = r.hasOwnProperty("$" + n[u].value), n[u].selected !== p && (n[u].selected = p), p && c && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + nr(u), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === u) {
          n[p].selected = !0, c && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Aa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return Ee({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function $r(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(f(92));
        if (_i(u)) {
          if (1 < u.length)
            throw Error(f(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: nr(u) };
  }
  function ni(n, r) {
    var u = nr(r.value), c = nr(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), c != null && (n.defaultValue = "" + c);
  }
  function Gr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Fa(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Fa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qr, el = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, c, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, c, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Qr = Qr || document.createElement("div"), Qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ha(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var de = {
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
  }, Ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(de).forEach(function(n) {
    Ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), de[r] = de[n];
    });
  });
  function nt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || de.hasOwnProperty(n) && de[n] ? ("" + r).trim() : r + "px";
  }
  function bt(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var c = u.indexOf("--") === 0, p = nt(u, r[u], c);
        u === "float" && (u = "cssFloat"), c ? n.setProperty(u, p) : n[u] = p;
      }
  }
  var Zt = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ln(n, r) {
    if (r) {
      if (Zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(f(62));
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
  var kr = null;
  function Ht(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qr = null, Ut = null, jt = null;
  function Iu(n) {
    if (n = gs(n)) {
      if (typeof qr != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = Ue(r), qr(n.stateNode, n.type, r));
    }
  }
  function Vl(n) {
    Ut ? jt ? jt.push(n) : jt = [n] : Ut = n;
  }
  function Bu() {
    if (Ut) {
      var n = Ut, r = jt;
      if (jt = Ut = null, Iu(n), r)
        for (n = 0; n < r.length; n++)
          Iu(r[n]);
    }
  }
  function Xo(n, r) {
    return n(r);
  }
  function cc() {
  }
  var Il = !1;
  function Wu(n, r, u) {
    if (Il)
      return n(r, u);
    Il = !0;
    try {
      return Xo(n, r, u);
    } finally {
      Il = !1, (Ut !== null || jt !== null) && (cc(), Bu());
    }
  }
  function Bl(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var c = Ue(u);
    if (c === null)
      return null;
    u = c[r];
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
          (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(f(231, r, typeof u));
    return u;
  }
  var $u = !1;
  if (b)
    try {
      var ri = {};
      Object.defineProperty(ri, "passive", { get: function() {
        $u = !0;
      } }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
    } catch {
      $u = !1;
    }
  function tl(n, r, u, c, p, y, C, R, D) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, V);
    } catch (X) {
      this.onError(X);
    }
  }
  var Xr = !1, ja = null, nl = !1, x = null, K = { onError: function(n) {
    Xr = !0, ja = n;
  } };
  function pe(n, r, u, c, p, y, C, R, D) {
    Xr = !1, ja = null, tl.apply(K, arguments);
  }
  function Fe(n, r, u, c, p, y, C, R, D) {
    if (pe.apply(this, arguments), Xr) {
      if (Xr) {
        var V = ja;
        Xr = !1, ja = null;
      } else
        throw Error(f(198));
      nl || (nl = !0, x = V);
    }
  }
  function Ze(n) {
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
  function vt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Je(n) {
    if (Ze(n) !== n)
      throw Error(f(188));
  }
  function Ye(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ze(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var u = n, c = r; ; ) {
      var p = u.return;
      if (p === null)
        break;
      var y = p.alternate;
      if (y === null) {
        if (c = p.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (p.child === y.child) {
        for (y = p.child; y; ) {
          if (y === u)
            return Je(p), n;
          if (y === c)
            return Je(p), r;
          y = y.sibling;
        }
        throw Error(f(188));
      }
      if (u.return !== c.return)
        u = p, c = y;
      else {
        for (var C = !1, R = p.child; R; ) {
          if (R === u) {
            C = !0, u = p, c = y;
            break;
          }
          if (R === c) {
            C = !0, c = p, u = y;
            break;
          }
          R = R.sibling;
        }
        if (!C) {
          for (R = y.child; R; ) {
            if (R === u) {
              C = !0, u = y, c = p;
              break;
            }
            if (R === c) {
              C = !0, c = y, u = p;
              break;
            }
            R = R.sibling;
          }
          if (!C)
            throw Error(f(189));
        }
      }
      if (u.alternate !== c)
        throw Error(f(190));
    }
    if (u.tag !== 3)
      throw Error(f(188));
    return u.stateNode.current === u ? n : r;
  }
  function Nn(n) {
    return n = Ye(n), n !== null ? Qt(n) : null;
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
  var qt = s.unstable_scheduleCallback, vr = s.unstable_cancelCallback, rl = s.unstable_shouldYield, fc = s.unstable_requestPaint, gt = s.unstable_now, Tg = s.unstable_getCurrentPriorityLevel, Ci = s.unstable_ImmediatePriority, ut = s.unstable_UserBlockingPriority, al = s.unstable_NormalPriority, Gh = s.unstable_LowPriority, pd = s.unstable_IdlePriority, Ko = null, Ya = null;
  function Qh(n) {
    if (Ya && typeof Ya.onCommitFiberRoot == "function")
      try {
        Ya.onCommitFiberRoot(Ko, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var da = Math.clz32 ? Math.clz32 : wg, qh = Math.log, Xh = Math.LN2;
  function wg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (qh(n) / Xh | 0) | 0;
  }
  var dc = 64, Gu = 4194304;
  function Wl(n) {
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
  function Pa(n, r) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var c = 0, p = n.suspendedLanes, y = n.pingedLanes, C = u & 268435455;
    if (C !== 0) {
      var R = C & ~p;
      R !== 0 ? c = Wl(R) : (y &= C, y !== 0 && (c = Wl(y)));
    } else
      C = u & ~p, C !== 0 ? c = Wl(C) : y !== 0 && (c = Wl(y));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, y = r & -r, p >= y || p === 16 && (y & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        u = 31 - da(r), p = 1 << u, c |= n[u], r &= ~p;
    return c;
  }
  function hd(n, r) {
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
  function pc(n, r) {
    for (var u = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var C = 31 - da(y), R = 1 << C, D = p[C];
      D === -1 ? (!(R & u) || R & c) && (p[C] = hd(R, r)) : D <= r && (n.expiredLanes |= R), y &= ~R;
    }
  }
  function vd(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function hc() {
    var n = dc;
    return dc <<= 1, !(dc & 4194240) && (dc = 64), n;
  }
  function md(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function $l(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - da(r), n[r] = u;
  }
  function Rg(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var p = 31 - da(u), y = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, u &= ~y;
    }
  }
  function Zo(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var c = 31 - da(u), p = 1 << c;
      p & r | n[c] & r && (n[c] |= r), u &= ~p;
    }
  }
  var Ot = 0;
  function yd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Kh, vc, zt, Zh, gd, qe = !1, Jo = [], mn = null, pa = null, ha = null, es = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Mt = [], xg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Va(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        pa = null;
        break;
      case "mouseover":
      case "mouseout":
        ha = null;
        break;
      case "pointerover":
      case "pointerout":
        es.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(r.pointerId);
    }
  }
  function lr(n, r, u, c, p, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: c, nativeEvent: y, targetContainers: [p] }, r !== null && (r = gs(r), r !== null && vc(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function il(n, r, u, c, p) {
    switch (r) {
      case "focusin":
        return mn = lr(mn, n, r, u, c, p), !0;
      case "dragenter":
        return pa = lr(pa, n, r, u, c, p), !0;
      case "mouseover":
        return ha = lr(ha, n, r, u, c, p), !0;
      case "pointerover":
        var y = p.pointerId;
        return es.set(y, lr(es.get(y) || null, n, r, u, c, p)), !0;
      case "gotpointercapture":
        return y = p.pointerId, Tn.set(y, lr(Tn.get(y) || null, n, r, u, c, p)), !0;
    }
    return !1;
  }
  function Jh(n) {
    var r = ma(n.target);
    if (r !== null) {
      var u = Ze(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = vt(u), r !== null) {
            n.blockedOn = r, gd(n.priority, function() {
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
  function Qu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = gc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var c = new u.constructor(u.type, u);
        kr = c, u.target.dispatchEvent(c), kr = null;
      } else
        return r = gs(u), r !== null && vc(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function Sd(n, r, u) {
    Qu(n) && u.delete(r);
  }
  function ev() {
    qe = !1, mn !== null && Qu(mn) && (mn = null), pa !== null && Qu(pa) && (pa = null), ha !== null && Qu(ha) && (ha = null), es.forEach(Sd), Tn.forEach(Sd);
  }
  function ts(n, r) {
    n.blockedOn === r && (n.blockedOn = null, qe || (qe = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, ev)));
  }
  function ns(n) {
    function r(p) {
      return ts(p, n);
    }
    if (0 < Jo.length) {
      ts(Jo[0], n);
      for (var u = 1; u < Jo.length; u++) {
        var c = Jo[u];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (mn !== null && ts(mn, n), pa !== null && ts(pa, n), ha !== null && ts(ha, n), es.forEach(r), Tn.forEach(r), u = 0; u < Mt.length; u++)
      c = Mt[u], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Mt.length && (u = Mt[0], u.blockedOn === null); )
      Jh(u), u.blockedOn === null && Mt.shift();
  }
  var qu = ye.ReactCurrentBatchConfig, Gl = !0;
  function tv(n, r, u, c) {
    var p = Ot, y = qu.transition;
    qu.transition = null;
    try {
      Ot = 1, yc(n, r, u, c);
    } finally {
      Ot = p, qu.transition = y;
    }
  }
  function mc(n, r, u, c) {
    var p = Ot, y = qu.transition;
    qu.transition = null;
    try {
      Ot = 4, yc(n, r, u, c);
    } finally {
      Ot = p, qu.transition = y;
    }
  }
  function yc(n, r, u, c) {
    if (Gl) {
      var p = gc(n, r, u, c);
      if (p === null)
        Oc(n, r, c, rs, u), Va(n, c);
      else if (il(p, n, r, u, c))
        c.stopPropagation();
      else if (Va(n, c), r & 4 && -1 < xg.indexOf(n)) {
        for (; p !== null; ) {
          var y = gs(p);
          if (y !== null && Kh(y), y = gc(n, r, u, c), y === null && Oc(n, r, c, rs, u), y === p)
            break;
          p = y;
        }
        p !== null && c.stopPropagation();
      } else
        Oc(n, r, c, null, u);
    }
  }
  var rs = null;
  function gc(n, r, u, c) {
    if (rs = null, n = Ht(c), n = ma(n), n !== null)
      if (r = Ze(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = vt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return rs = n, null;
  }
  function Ed(n) {
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
        switch (Tg()) {
          case Ci:
            return 1;
          case ut:
            return 4;
          case al:
          case Gh:
            return 16;
          case pd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ti = null, as = null, is = null;
  function _d() {
    if (is)
      return is;
    var n, r = as, u = r.length, c, p = "value" in Ti ? Ti.value : Ti.textContent, y = p.length;
    for (n = 0; n < u && r[n] === p[n]; n++)
      ;
    var C = u - n;
    for (c = 1; c <= C && r[u - c] === p[y - c]; c++)
      ;
    return is = p.slice(n, 1 < c ? 1 - c : void 0);
  }
  function Xu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ls() {
    return !0;
  }
  function nv() {
    return !1;
  }
  function Kr(n) {
    function r(u, c, p, y, C) {
      this._reactName = u, this._targetInst = p, this.type = c, this.nativeEvent = y, this.target = C, this.currentTarget = null;
      for (var R in n)
        n.hasOwnProperty(R) && (u = n[R], this[R] = u ? u(y) : y[R]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? ls : nv, this.isPropagationStopped = nv, this;
    }
    return Ee(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ls);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ls);
    }, persist: function() {
    }, isPersistent: ls }), r;
  }
  var ll = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Sc = Kr(ll), Ku = Ee({}, ll, { view: 0, detail: 0 }), rv = Kr(Ku), Ec, Cd, us, Un = Ee({}, Ku, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== us && (us && n.type === "mousemove" ? (Ec = n.screenX - us.screenX, Cd = n.screenY - us.screenY) : Cd = Ec = 0, us = n), Ec);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Cd;
  } }), _c = Kr(Un), av = Ee({}, Un, { dataTransfer: 0 }), iv = Kr(av), Dg = Ee({}, Ku, { relatedTarget: 0 }), ul = Kr(Dg), Td = Ee({}, ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lv = Kr(Td), kg = Ee({}, ll, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), bg = Kr(kg), Og = Ee({}, ll, { data: 0 }), wd = Kr(Og), Rd = {
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
  }, uv = {
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
  }, ov = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ov[n]) ? !!r[n] : !1;
  }
  function xd() {
    return sv;
  }
  var wi = Ee({}, Ku, { key: function(n) {
    if (n.key) {
      var r = Rd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Xu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? uv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xd, charCode: function(n) {
    return n.type === "keypress" ? Xu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Xu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Mg = Kr(wi), Dd = Ee({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cc = Kr(Dd), kd = Ee({}, Ku, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xd }), Lg = Kr(kd), Tc = Ee({}, ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cv = Kr(Tc), br = Ee({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ri = Kr(br), yn = [9, 13, 27, 32], Ia = b && "CompositionEvent" in window, Ql = null;
  b && "documentMode" in document && (Ql = document.documentMode);
  var wc = b && "TextEvent" in window && !Ql, fv = b && (!Ia || Ql && 8 < Ql && 11 >= Ql), Zu = String.fromCharCode(32), dv = !1;
  function pv(n, r) {
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
  function Rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ju = !1;
  function Ng(n, r) {
    switch (n) {
      case "compositionend":
        return Rc(r);
      case "keypress":
        return r.which !== 32 ? null : (dv = !0, Zu);
      case "textInput":
        return n = r.data, n === Zu && dv ? null : n;
      default:
        return null;
    }
  }
  function Ug(n, r) {
    if (Ju)
      return n === "compositionend" || !Ia && pv(n, r) ? (n = _d(), is = as = Ti = null, Ju = !1, n) : null;
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
        return fv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var hv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!hv[n.type] : r === "textarea";
  }
  function mv(n, r, u, c) {
    Vl(c), r = vs(r, "onChange"), 0 < r.length && (u = new Sc("onChange", "change", null, u, c), n.push({ event: u, listeners: r }));
  }
  var os = null, eo = null;
  function to(n) {
    bc(n, 0);
  }
  function no(n) {
    var r = ao(n);
    if (ca(r))
      return n;
  }
  function yv(n, r) {
    if (n === "change")
      return r;
  }
  var bd = !1;
  if (b) {
    var Od;
    if (b) {
      var Md = "oninput" in document;
      if (!Md) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), Md = typeof gv.oninput == "function";
      }
      Od = Md;
    } else
      Od = !1;
    bd = Od && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    os && (os.detachEvent("onpropertychange", Ev), eo = os = null);
  }
  function Ev(n) {
    if (n.propertyName === "value" && no(eo)) {
      var r = [];
      mv(r, eo, n, Ht(n)), Wu(to, r);
    }
  }
  function zg(n, r, u) {
    n === "focusin" ? (Sv(), os = r, eo = u, os.attachEvent("onpropertychange", Ev)) : n === "focusout" && Sv();
  }
  function Ag(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return no(eo);
  }
  function Fg(n, r) {
    if (n === "click")
      return no(r);
  }
  function _v(n, r) {
    if (n === "input" || n === "change")
      return no(r);
  }
  function Hg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var va = typeof Object.is == "function" ? Object.is : Hg;
  function ss(n, r) {
    if (va(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), c = Object.keys(r);
    if (u.length !== c.length)
      return !1;
    for (c = 0; c < u.length; c++) {
      var p = u[c];
      if (!k.call(r, p) || !va(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function Cv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Tv(n, r) {
    var u = Cv(n);
    n = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = n + u.textContent.length, n <= r && c >= r)
          return { node: u, offset: r - n };
        n = c;
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
      u = Cv(u);
    }
  }
  function wv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? wv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function xc() {
    for (var n = window, r = Mn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = Mn(n.document);
    }
    return r;
  }
  function xi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dc(n) {
    var r = xc(), u = n.focusedElem, c = n.selectionRange;
    if (r !== u && u && u.ownerDocument && wv(u.ownerDocument.documentElement, u)) {
      if (c !== null && xi(u)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = u.textContent.length, y = Math.min(c.start, p);
          c = c.end === void 0 ? y : Math.min(c.end, p), !n.extend && y > c && (p = c, c = y, y = p), p = Tv(u, y);
          var C = Tv(
            u,
            c
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), y > c ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Rv = b && "documentMode" in document && 11 >= document.documentMode, Ba = null, Ld = null, cs = null, Nd = !1;
  function xv(n, r, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Nd || Ba == null || Ba !== Mn(c) || (c = Ba, "selectionStart" in c && xi(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), cs && ss(cs, c) || (cs = c, c = vs(Ld, "onSelect"), 0 < c.length && (r = new Sc("onSelect", "select", null, r, u), n.push({ event: r, listeners: c }), r.target = Ba)));
  }
  function kc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var ql = { animationend: kc("Animation", "AnimationEnd"), animationiteration: kc("Animation", "AnimationIteration"), animationstart: kc("Animation", "AnimationStart"), transitionend: kc("Transition", "TransitionEnd") }, Ud = {}, zd = {};
  b && (zd = document.createElement("div").style, "AnimationEvent" in window || (delete ql.animationend.animation, delete ql.animationiteration.animation, delete ql.animationstart.animation), "TransitionEvent" in window || delete ql.transitionend.transition);
  function zn(n) {
    if (Ud[n])
      return Ud[n];
    if (!ql[n])
      return n;
    var r = ql[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in zd)
        return Ud[n] = r[u];
    return n;
  }
  var Ad = zn("animationend"), Dv = zn("animationiteration"), kv = zn("animationstart"), bv = zn("transitionend"), Ov = /* @__PURE__ */ new Map(), Mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Di(n, r) {
    Ov.set(n, r), _(r, [n]);
  }
  for (var fs = 0; fs < Mv.length; fs++) {
    var Xl = Mv[fs], jg = Xl.toLowerCase(), ds = Xl[0].toUpperCase() + Xl.slice(1);
    Di(jg, "on" + ds);
  }
  Di(Ad, "onAnimationEnd"), Di(Dv, "onAnimationIteration"), Di(kv, "onAnimationStart"), Di("dblclick", "onDoubleClick"), Di("focusin", "onFocus"), Di("focusout", "onBlur"), Di(bv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), _("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Lv(n, r, u) {
    var c = n.type || "unknown-event";
    n.currentTarget = u, Fe(c, r, void 0, n), n.currentTarget = null;
  }
  function bc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var c = n[u], p = c.event;
      c = c.listeners;
      e: {
        var y = void 0;
        if (r)
          for (var C = c.length - 1; 0 <= C; C--) {
            var R = c[C], D = R.instance, V = R.currentTarget;
            if (R = R.listener, D !== y && p.isPropagationStopped())
              break e;
            Lv(p, R, V), y = D;
          }
        else
          for (C = 0; C < c.length; C++) {
            if (R = c[C], D = R.instance, V = R.currentTarget, R = R.listener, D !== y && p.isPropagationStopped())
              break e;
            Lv(p, R, V), y = D;
          }
      }
    }
    if (nl)
      throw n = x, nl = !1, x = null, n;
  }
  function At(n, r) {
    var u = r[Id];
    u === void 0 && (u = r[Id] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    u.has(c) || (Nv(r, n, 2, !1), u.add(c));
  }
  function ol(n, r, u) {
    var c = 0;
    r && (c |= 4), Nv(u, n, c, r);
  }
  var ki = "_reactListening" + Math.random().toString(36).slice(2);
  function ro(n) {
    if (!n[ki]) {
      n[ki] = !0, h.forEach(function(u) {
        u !== "selectionchange" && (Yg.has(u) || ol(u, !1, n), ol(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ki] || (r[ki] = !0, ol("selectionchange", !1, r));
    }
  }
  function Nv(n, r, u, c) {
    switch (Ed(r)) {
      case 1:
        var p = tv;
        break;
      case 4:
        p = mc;
        break;
      default:
        p = yc;
    }
    u = p.bind(null, r, u, n), p = void 0, !$u || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: p }) : n.addEventListener(r, u, !0) : p !== void 0 ? n.addEventListener(r, u, { passive: p }) : n.addEventListener(r, u, !1);
  }
  function Oc(n, r, u, c, p) {
    var y = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var C = c.tag;
          if (C === 3 || C === 4) {
            var R = c.stateNode.containerInfo;
            if (R === p || R.nodeType === 8 && R.parentNode === p)
              break;
            if (C === 4)
              for (C = c.return; C !== null; ) {
                var D = C.tag;
                if ((D === 3 || D === 4) && (D = C.stateNode.containerInfo, D === p || D.nodeType === 8 && D.parentNode === p))
                  return;
                C = C.return;
              }
            for (; R !== null; ) {
              if (C = ma(R), C === null)
                return;
              if (D = C.tag, D === 5 || D === 6) {
                c = y = C;
                continue e;
              }
              R = R.parentNode;
            }
          }
          c = c.return;
        }
    Wu(function() {
      var V = y, X = Ht(u), Z = [];
      e: {
        var q = Ov.get(n);
        if (q !== void 0) {
          var ge = Sc, Re = n;
          switch (n) {
            case "keypress":
              if (Xu(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              ge = Mg;
              break;
            case "focusin":
              Re = "focus", ge = ul;
              break;
            case "focusout":
              Re = "blur", ge = ul;
              break;
            case "beforeblur":
            case "afterblur":
              ge = ul;
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
              ge = _c;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = iv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = Lg;
              break;
            case Ad:
            case Dv:
            case kv:
              ge = lv;
              break;
            case bv:
              ge = cv;
              break;
            case "scroll":
              ge = rv;
              break;
            case "wheel":
              ge = Ri;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = bg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = Cc;
          }
          var ke = (r & 4) !== 0, dn = !ke && n === "scroll", z = ke ? q !== null ? q + "Capture" : null : q;
          ke = [];
          for (var L = V, H; L !== null; ) {
            H = L;
            var re = H.stateNode;
            if (H.tag === 5 && re !== null && (H = re, z !== null && (re = Bl(L, z), re != null && ke.push(hs(L, re, H)))), dn)
              break;
            L = L.return;
          }
          0 < ke.length && (q = new ge(q, Re, null, u, X), Z.push({ event: q, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", q && u !== kr && (Re = u.relatedTarget || u.fromElement) && (ma(Re) || Re[bi]))
            break e;
          if ((ge || q) && (q = X.window === X ? X : (q = X.ownerDocument) ? q.defaultView || q.parentWindow : window, ge ? (Re = u.relatedTarget || u.toElement, ge = V, Re = Re ? ma(Re) : null, Re !== null && (dn = Ze(Re), Re !== dn || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (ge = null, Re = V), ge !== Re)) {
            if (ke = _c, re = "onMouseLeave", z = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (ke = Cc, re = "onPointerLeave", z = "onPointerEnter", L = "pointer"), dn = ge == null ? q : ao(ge), H = Re == null ? q : ao(Re), q = new ke(re, L + "leave", ge, u, X), q.target = dn, q.relatedTarget = H, re = null, ma(X) === V && (ke = new ke(z, L + "enter", Re, u, X), ke.target = H, ke.relatedTarget = dn, re = ke), dn = re, ge && Re)
              t: {
                for (ke = ge, z = Re, L = 0, H = ke; H; H = Kl(H))
                  L++;
                for (H = 0, re = z; re; re = Kl(re))
                  H++;
                for (; 0 < L - H; )
                  ke = Kl(ke), L--;
                for (; 0 < H - L; )
                  z = Kl(z), H--;
                for (; L--; ) {
                  if (ke === z || z !== null && ke === z.alternate)
                    break t;
                  ke = Kl(ke), z = Kl(z);
                }
                ke = null;
              }
            else
              ke = null;
            ge !== null && Fd(Z, q, ge, ke, !1), Re !== null && dn !== null && Fd(Z, dn, Re, ke, !0);
          }
        }
        e: {
          if (q = V ? ao(V) : window, ge = q.nodeName && q.nodeName.toLowerCase(), ge === "select" || ge === "input" && q.type === "file")
            var be = yv;
          else if (vv(q))
            if (bd)
              be = _v;
            else {
              be = Ag;
              var xe = zg;
            }
          else
            (ge = q.nodeName) && ge.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (be = Fg);
          if (be && (be = be(n, V))) {
            mv(Z, be, u, X);
            break e;
          }
          xe && xe(n, q, V), n === "focusout" && (xe = q._wrapperState) && xe.controlled && q.type === "number" && za(q, "number", q.value);
        }
        switch (xe = V ? ao(V) : window, n) {
          case "focusin":
            (vv(xe) || xe.contentEditable === "true") && (Ba = xe, Ld = V, cs = null);
            break;
          case "focusout":
            cs = Ld = Ba = null;
            break;
          case "mousedown":
            Nd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nd = !1, xv(Z, u, X);
            break;
          case "selectionchange":
            if (Rv)
              break;
          case "keydown":
          case "keyup":
            xv(Z, u, X);
        }
        var Le;
        if (Ia)
          e: {
            switch (n) {
              case "compositionstart":
                var $e = "onCompositionStart";
                break e;
              case "compositionend":
                $e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $e = "onCompositionUpdate";
                break e;
            }
            $e = void 0;
          }
        else
          Ju ? pv(n, u) && ($e = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && ($e = "onCompositionStart");
        $e && (fv && u.locale !== "ko" && (Ju || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Ju && (Le = _d()) : (Ti = X, as = "value" in Ti ? Ti.value : Ti.textContent, Ju = !0)), xe = vs(V, $e), 0 < xe.length && ($e = new wd($e, n, null, u, X), Z.push({ event: $e, listeners: xe }), Le ? $e.data = Le : (Le = Rc(u), Le !== null && ($e.data = Le)))), (Le = wc ? Ng(n, u) : Ug(n, u)) && (V = vs(V, "onBeforeInput"), 0 < V.length && (X = new wd("onBeforeInput", "beforeinput", null, u, X), Z.push({ event: X, listeners: V }), X.data = Le));
      }
      bc(Z, r);
    });
  }
  function hs(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function vs(n, r) {
    for (var u = r + "Capture", c = []; n !== null; ) {
      var p = n, y = p.stateNode;
      p.tag === 5 && y !== null && (p = y, y = Bl(n, u), y != null && c.unshift(hs(n, y, p)), y = Bl(n, r), y != null && c.push(hs(n, y, p))), n = n.return;
    }
    return c;
  }
  function Kl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Fd(n, r, u, c, p) {
    for (var y = r._reactName, C = []; u !== null && u !== c; ) {
      var R = u, D = R.alternate, V = R.stateNode;
      if (D !== null && D === c)
        break;
      R.tag === 5 && V !== null && (R = V, p ? (D = Bl(u, y), D != null && C.unshift(hs(u, D, R))) : p || (D = Bl(u, y), D != null && C.push(hs(u, D, R)))), u = u.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Hd = /\r\n?/g, Pg = /\u0000|\uFFFD/g;
  function jd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Hd, `
`).replace(Pg, "");
  }
  function Mc(n, r, u) {
    if (r = jd(r), jd(n) !== r && u)
      throw Error(f(425));
  }
  function Lc() {
  }
  var Yd = null, Zl = null;
  function ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Jl = typeof setTimeout == "function" ? setTimeout : void 0, Uv = typeof clearTimeout == "function" ? clearTimeout : void 0, Pd = typeof Promise == "function" ? Promise : void 0, Vd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pd < "u" ? function(n) {
    return Pd.resolve(null).then(n).catch(Vg);
  } : Jl;
  function Vg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function sl(n, r) {
    var u = r, c = 0;
    do {
      var p = u.nextSibling;
      if (n.removeChild(u), p && p.nodeType === 8)
        if (u = p.data, u === "/$") {
          if (c === 0) {
            n.removeChild(p), ns(r);
            return;
          }
          c--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || c++;
      u = p;
    } while (u);
    ns(r);
  }
  function Wa(n) {
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
  function ys(n) {
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
  var cl = Math.random().toString(36).slice(2), ai = "__reactFiber$" + cl, eu = "__reactProps$" + cl, bi = "__reactContainer$" + cl, Id = "__reactEvents$" + cl, Ig = "__reactListeners$" + cl, Bd = "__reactHandles$" + cl;
  function ma(n) {
    var r = n[ai];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[bi] || u[ai]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = ys(n); n !== null; ) {
            if (u = n[ai])
              return u;
            n = ys(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function gs(n) {
    return n = n[ai] || n[bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ao(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function Ue(n) {
    return n[eu] || null;
  }
  var fl = [], It = -1;
  function Xe(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > It || (n.current = fl[It], fl[It] = null, It--);
  }
  function wt(n, r) {
    It++, fl[It] = n.current, n.current = r;
  }
  var ii = {}, We = Xe(ii), ln = Xe(!1), Or = ii;
  function ya(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return ii;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, y;
    for (y in u)
      p[y] = r[y];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ga() {
    Tt(ln), Tt(We);
  }
  function dl(n, r, u) {
    if (We.current !== ii)
      throw Error(f(168));
    wt(We, r), wt(ln, u);
  }
  function Ss(n, r, u) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return u;
    c = c.getChildContext();
    for (var p in c)
      if (!(p in r))
        throw Error(f(108, sa(n) || "Unknown", p));
    return Ee({}, u, c);
  }
  function Nc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ii, Or = We.current, wt(We, n), wt(ln, ln.current), !0;
  }
  function zv(n, r, u) {
    var c = n.stateNode;
    if (!c)
      throw Error(f(169));
    u ? (n = Ss(n, r, Or), c.__reactInternalMemoizedMergedChildContext = n, Tt(ln), Tt(We), wt(We, n)) : Tt(ln), wt(ln, u);
  }
  var Zr = null, An = !1, Es = !1;
  function Wd(n) {
    Zr === null ? Zr = [n] : Zr.push(n);
  }
  function $d(n) {
    An = !0, Wd(n);
  }
  function Mr() {
    if (!Es && Zr !== null) {
      Es = !0;
      var n = 0, r = Ot;
      try {
        var u = Zr;
        for (Ot = 1; n < u.length; n++) {
          var c = u[n];
          do
            c = c(!0);
          while (c !== null);
        }
        Zr = null, An = !1;
      } catch (p) {
        throw Zr !== null && (Zr = Zr.slice(n + 1)), qt(Ci, Mr), p;
      } finally {
        Ot = r, Es = !1;
      }
    }
    return null;
  }
  var pl = [], Lr = 0, tu = null, io = 0, Nr = [], ur = 0, Sa = null, Bn = 1, Oi = "";
  function Jr(n, r) {
    pl[Lr++] = io, pl[Lr++] = tu, tu = n, io = r;
  }
  function Gd(n, r, u) {
    Nr[ur++] = Bn, Nr[ur++] = Oi, Nr[ur++] = Sa, Sa = n;
    var c = Bn;
    n = Oi;
    var p = 32 - da(c) - 1;
    c &= ~(1 << p), u += 1;
    var y = 32 - da(r) + p;
    if (30 < y) {
      var C = p - p % 5;
      y = (c & (1 << C) - 1).toString(32), c >>= C, p -= C, Bn = 1 << 32 - da(r) + p | u << p | c, Oi = y + n;
    } else
      Bn = 1 << y | u << p | c, Oi = n;
  }
  function Uc(n) {
    n.return !== null && (Jr(n, 1), Gd(n, 1, 0));
  }
  function Qd(n) {
    for (; n === tu; )
      tu = pl[--Lr], pl[Lr] = null, io = pl[--Lr], pl[Lr] = null;
    for (; n === Sa; )
      Sa = Nr[--ur], Nr[ur] = null, Oi = Nr[--ur], Nr[ur] = null, Bn = Nr[--ur], Nr[ur] = null;
  }
  var ea = null, Ur = null, Bt = !1, Ea = null;
  function qd(n, r) {
    var u = xa(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Av(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, Ur = Wa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Sa !== null ? { id: Bn, overflow: Oi } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = xa(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, ea = n, Ur = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ac(n) {
    if (Bt) {
      var r = Ur;
      if (r) {
        var u = r;
        if (!Av(n, r)) {
          if (zc(n))
            throw Error(f(418));
          r = Wa(u.nextSibling);
          var c = ea;
          r && Av(n, r) ? qd(c, u) : (n.flags = n.flags & -4097 | 2, Bt = !1, ea = n);
        }
      } else {
        if (zc(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, Bt = !1, ea = n;
      }
    }
  }
  function Fv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ea = n;
  }
  function Fc(n) {
    if (n !== ea)
      return !1;
    if (!Bt)
      return Fv(n), Bt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ms(n.type, n.memoizedProps)), r && (r = Ur)) {
      if (zc(n))
        throw Hv(), Error(f(418));
      for (; r; )
        qd(n, r), r = Wa(r.nextSibling);
    }
    if (Fv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                Ur = Wa(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ur = null;
      }
    } else
      Ur = ea ? Wa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Hv() {
    for (var n = Ur; n; )
      n = Wa(n.nextSibling);
  }
  function Jt() {
    Ur = ea = null, Bt = !1;
  }
  function Xd(n) {
    Ea === null ? Ea = [n] : Ea.push(n);
  }
  var Hc = ye.ReactCurrentBatchConfig;
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = Ee({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var li = Xe(null), jc = null, hl = null, Kd = null;
  function Zd() {
    Kd = hl = jc = null;
  }
  function vl(n) {
    var r = li.current;
    Tt(li), n._currentValue = r;
  }
  function Fn(n, r, u) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function ce(n, r) {
    jc = n, Kd = hl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (gn = !0), n.firstContext = null);
  }
  function fn(n) {
    var r = n._currentValue;
    if (Kd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, hl === null) {
        if (jc === null)
          throw Error(f(308));
        hl = n, jc.dependencies = { lanes: 0, firstContext: n };
      } else
        hl = hl.next = n;
    return r;
  }
  var Wn = null;
  function Jd(n) {
    Wn === null ? Wn = [n] : Wn.push(n);
  }
  function jv(n, r, u, c) {
    var p = r.interleaved;
    return p === null ? (u.next = u, Jd(r)) : (u.next = p.next, p.next = u), r.interleaved = u, Mi(n, c);
  }
  function Mi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var ml = !1;
  function ep(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Li(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function yl(n, r, u) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, ot & 2) {
      var p = c.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), c.pending = r, Mi(n, u);
    }
    return p = c.interleaved, p === null ? (r.next = r, Jd(c)) : (r.next = p.next, p.next = r), c.interleaved = r, Mi(n, u);
  }
  function Yc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, u |= c, r.lanes = u, Zo(n, u);
    }
  }
  function tp(n, r) {
    var u = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var p = null, y = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var C = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          y === null ? p = y = C : y = y.next = C, u = u.next;
        } while (u !== null);
        y === null ? p = y = r : y = y.next = r;
      } else
        p = y = r;
      u = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: y, shared: c.shared, effects: c.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function gl(n, r, u, c) {
    var p = n.updateQueue;
    ml = !1;
    var y = p.firstBaseUpdate, C = p.lastBaseUpdate, R = p.shared.pending;
    if (R !== null) {
      p.shared.pending = null;
      var D = R, V = D.next;
      D.next = null, C === null ? y = V : C.next = V, C = D;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, R = X.lastBaseUpdate, R !== C && (R === null ? X.firstBaseUpdate = V : R.next = V, X.lastBaseUpdate = D));
    }
    if (y !== null) {
      var Z = p.baseState;
      C = 0, X = V = D = null, R = y;
      do {
        var q = R.lane, ge = R.eventTime;
        if ((c & q) === q) {
          X !== null && (X = X.next = {
            eventTime: ge,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var Re = n, ke = R;
            switch (q = r, ge = u, ke.tag) {
              case 1:
                if (Re = ke.payload, typeof Re == "function") {
                  Z = Re.call(ge, Z, q);
                  break e;
                }
                Z = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = ke.payload, q = typeof Re == "function" ? Re.call(ge, Z, q) : Re, q == null)
                  break e;
                Z = Ee({}, Z, q);
                break e;
              case 2:
                ml = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, q = p.effects, q === null ? p.effects = [R] : q.push(R));
        } else
          ge = { eventTime: ge, lane: q, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, X === null ? (V = X = ge, D = Z) : X = X.next = ge, C |= q;
        if (R = R.next, R === null) {
          if (R = p.shared.pending, R === null)
            break;
          q = R, R = q.next, q.next = null, p.lastBaseUpdate = q, p.shared.pending = null;
        }
      } while (1);
      if (X === null && (D = Z), p.baseState = D, p.firstBaseUpdate = V, p.lastBaseUpdate = X, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else
        y === null && (p.shared.lanes = 0);
      Ai |= C, n.lanes = C, n.memoizedState = Z;
    }
  }
  function nu(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], p = c.callback;
        if (p !== null) {
          if (c.callback = null, c = u, typeof p != "function")
            throw Error(f(191, p));
          p.call(c);
        }
      }
  }
  var Yv = new i.Component().refs;
  function np(n, r, u, c) {
    r = n.memoizedState, u = u(c, r), u = u == null ? r : Ee({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Pc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var c = fr(), p = Sn(n), y = Li(c, p);
    y.payload = r, u != null && (y.callback = u), r = yl(n, y, p), r !== null && (dr(r, n, p, c), Yc(r, n, p));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var c = fr(), p = Sn(n), y = Li(c, p);
    y.tag = 1, y.payload = r, u != null && (y.callback = u), r = yl(n, y, p), r !== null && (dr(r, n, p, c), Yc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = fr(), c = Sn(n), p = Li(u, c);
    p.tag = 2, r != null && (p.callback = r), r = yl(n, p, c), r !== null && (dr(r, n, c, u), Yc(r, n, c));
  } };
  function Pv(n, r, u, c, p, y, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, y, C) : r.prototype && r.prototype.isPureReactComponent ? !ss(u, c) || !ss(p, y) : !0;
  }
  function Vv(n, r, u) {
    var c = !1, p = ii, y = r.contextType;
    return typeof y == "object" && y !== null ? y = fn(y) : (p = Xt(r) ? Or : We.current, c = r.contextTypes, y = (c = c != null) ? ya(n, p) : ii), r = new r(u, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Pc, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Iv(n, r, u, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, c), r.state !== n && Pc.enqueueReplaceState(r, r.state, null);
  }
  function Vc(n, r, u, c) {
    var p = n.stateNode;
    p.props = u, p.state = n.memoizedState, p.refs = Yv, ep(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? p.context = fn(y) : (y = Xt(r) ? Or : We.current, p.context = ya(n, y)), p.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (np(n, r, y, u), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Pc.enqueueReplaceState(p, p.state, null), gl(n, u, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function lo(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(f(309));
          var c = u.stateNode;
        }
        if (!c)
          throw Error(f(147, n));
        var p = c, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(C) {
          var R = p.refs;
          R === Yv && (R = p.refs = {}), C === null ? delete R[y] : R[y] = C;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!u._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function Ic(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Bv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Wv(n) {
    function r(z, L) {
      if (n) {
        var H = z.deletions;
        H === null ? (z.deletions = [L], z.flags |= 16) : H.push(L);
      }
    }
    function u(z, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(z, L), L = L.sibling;
      return null;
    }
    function c(z, L) {
      for (z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function p(z, L) {
      return z = xl(z, L), z.index = 0, z.sibling = null, z;
    }
    function y(z, L, H) {
      return z.index = H, n ? (H = z.alternate, H !== null ? (H = H.index, H < L ? (z.flags |= 2, L) : H) : (z.flags |= 2, L)) : (z.flags |= 1048576, L);
    }
    function C(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function R(z, L, H, re) {
      return L === null || L.tag !== 6 ? (L = js(H, z.mode, re), L.return = z, L) : (L = p(L, H), L.return = z, L);
    }
    function D(z, L, H, re) {
      var be = H.type;
      return be === he ? X(z, L, H.props.children, re, H.key) : L !== null && (L.elementType === be || typeof be == "object" && be !== null && be.$$typeof === kt && Bv(be) === L.type) ? (re = p(L, H.props), re.ref = lo(z, L, H), re.return = z, re) : (re = Cf(H.type, H.key, H.props, null, z.mode, re), re.ref = lo(z, L, H), re.return = z, re);
    }
    function V(z, L, H, re) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== H.containerInfo || L.stateNode.implementation !== H.implementation ? (L = _u(H, z.mode, re), L.return = z, L) : (L = p(L, H.children || []), L.return = z, L);
    }
    function X(z, L, H, re, be) {
      return L === null || L.tag !== 7 ? (L = Eu(H, z.mode, re, be), L.return = z, L) : (L = p(L, H), L.return = z, L);
    }
    function Z(z, L, H) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = js("" + L, z.mode, H), L.return = z, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ve:
            return H = Cf(L.type, L.key, L.props, null, z.mode, H), H.ref = lo(z, null, L), H.return = z, H;
          case le:
            return L = _u(L, z.mode, H), L.return = z, L;
          case kt:
            var re = L._init;
            return Z(z, re(L._payload), H);
        }
        if (_i(L) || Ae(L))
          return L = Eu(L, z.mode, H, null), L.return = z, L;
        Ic(z, L);
      }
      return null;
    }
    function q(z, L, H, re) {
      var be = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return be !== null ? null : R(z, L, "" + H, re);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            return H.key === be ? D(z, L, H, re) : null;
          case le:
            return H.key === be ? V(z, L, H, re) : null;
          case kt:
            return be = H._init, q(
              z,
              L,
              be(H._payload),
              re
            );
        }
        if (_i(H) || Ae(H))
          return be !== null ? null : X(z, L, H, re, null);
        Ic(z, H);
      }
      return null;
    }
    function ge(z, L, H, re, be) {
      if (typeof re == "string" && re !== "" || typeof re == "number")
        return z = z.get(H) || null, R(L, z, "" + re, be);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case ve:
            return z = z.get(re.key === null ? H : re.key) || null, D(L, z, re, be);
          case le:
            return z = z.get(re.key === null ? H : re.key) || null, V(L, z, re, be);
          case kt:
            var xe = re._init;
            return ge(z, L, H, xe(re._payload), be);
        }
        if (_i(re) || Ae(re))
          return z = z.get(H) || null, X(L, z, re, be, null);
        Ic(L, re);
      }
      return null;
    }
    function Re(z, L, H, re) {
      for (var be = null, xe = null, Le = L, $e = L = 0, Yn = null; Le !== null && $e < H.length; $e++) {
        Le.index > $e ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var mt = q(z, Le, H[$e], re);
        if (mt === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && mt.alternate === null && r(z, Le), L = y(mt, L, $e), xe === null ? be = mt : xe.sibling = mt, xe = mt, Le = Yn;
      }
      if ($e === H.length)
        return u(z, Le), Bt && Jr(z, $e), be;
      if (Le === null) {
        for (; $e < H.length; $e++)
          Le = Z(z, H[$e], re), Le !== null && (L = y(Le, L, $e), xe === null ? be = Le : xe.sibling = Le, xe = Le);
        return Bt && Jr(z, $e), be;
      }
      for (Le = c(z, Le); $e < H.length; $e++)
        Yn = ge(Le, z, $e, H[$e], re), Yn !== null && (n && Yn.alternate !== null && Le.delete(Yn.key === null ? $e : Yn.key), L = y(Yn, L, $e), xe === null ? be = Yn : xe.sibling = Yn, xe = Yn);
      return n && Le.forEach(function(Dl) {
        return r(z, Dl);
      }), Bt && Jr(z, $e), be;
    }
    function ke(z, L, H, re) {
      var be = Ae(H);
      if (typeof be != "function")
        throw Error(f(150));
      if (H = be.call(H), H == null)
        throw Error(f(151));
      for (var xe = be = null, Le = L, $e = L = 0, Yn = null, mt = H.next(); Le !== null && !mt.done; $e++, mt = H.next()) {
        Le.index > $e ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var Dl = q(z, Le, mt.value, re);
        if (Dl === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && Dl.alternate === null && r(z, Le), L = y(Dl, L, $e), xe === null ? be = Dl : xe.sibling = Dl, xe = Dl, Le = Yn;
      }
      if (mt.done)
        return u(
          z,
          Le
        ), Bt && Jr(z, $e), be;
      if (Le === null) {
        for (; !mt.done; $e++, mt = H.next())
          mt = Z(z, mt.value, re), mt !== null && (L = y(mt, L, $e), xe === null ? be = mt : xe.sibling = mt, xe = mt);
        return Bt && Jr(z, $e), be;
      }
      for (Le = c(z, Le); !mt.done; $e++, mt = H.next())
        mt = ge(Le, z, $e, mt.value, re), mt !== null && (n && mt.alternate !== null && Le.delete(mt.key === null ? $e : mt.key), L = y(mt, L, $e), xe === null ? be = mt : xe.sibling = mt, xe = mt);
      return n && Le.forEach(function(sS) {
        return r(z, sS);
      }), Bt && Jr(z, $e), be;
    }
    function dn(z, L, H, re) {
      if (typeof H == "object" && H !== null && H.type === he && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            e: {
              for (var be = H.key, xe = L; xe !== null; ) {
                if (xe.key === be) {
                  if (be = H.type, be === he) {
                    if (xe.tag === 7) {
                      u(z, xe.sibling), L = p(xe, H.props.children), L.return = z, z = L;
                      break e;
                    }
                  } else if (xe.elementType === be || typeof be == "object" && be !== null && be.$$typeof === kt && Bv(be) === xe.type) {
                    u(z, xe.sibling), L = p(xe, H.props), L.ref = lo(z, xe, H), L.return = z, z = L;
                    break e;
                  }
                  u(z, xe);
                  break;
                } else
                  r(z, xe);
                xe = xe.sibling;
              }
              H.type === he ? (L = Eu(H.props.children, z.mode, re, H.key), L.return = z, z = L) : (re = Cf(H.type, H.key, H.props, null, z.mode, re), re.ref = lo(z, L, H), re.return = z, z = re);
            }
            return C(z);
          case le:
            e: {
              for (xe = H.key; L !== null; ) {
                if (L.key === xe)
                  if (L.tag === 4 && L.stateNode.containerInfo === H.containerInfo && L.stateNode.implementation === H.implementation) {
                    u(z, L.sibling), L = p(L, H.children || []), L.return = z, z = L;
                    break e;
                  } else {
                    u(z, L);
                    break;
                  }
                else
                  r(z, L);
                L = L.sibling;
              }
              L = _u(H, z.mode, re), L.return = z, z = L;
            }
            return C(z);
          case kt:
            return xe = H._init, dn(z, L, xe(H._payload), re);
        }
        if (_i(H))
          return Re(z, L, H, re);
        if (Ae(H))
          return ke(z, L, H, re);
        Ic(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, L !== null && L.tag === 6 ? (u(z, L.sibling), L = p(L, H), L.return = z, z = L) : (u(z, L), L = js(H, z.mode, re), L.return = z, z = L), C(z)) : u(z, L);
    }
    return dn;
  }
  var uo = Wv(!0), $v = Wv(!1), _s = {}, $a = Xe(_s), Cs = Xe(_s), oo = Xe(_s);
  function ru(n) {
    if (n === _s)
      throw Error(f(174));
    return n;
  }
  function rp(n, r) {
    switch (wt(oo, r), wt(Cs, n), wt($a, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Tt($a), wt($a, r);
  }
  function Sl() {
    Tt($a), Tt(Cs), Tt(oo);
  }
  function He(n) {
    ru(oo.current);
    var r = ru($a.current), u = vn(r, n.type);
    r !== u && (wt(Cs, n), wt($a, u));
  }
  function rt(n) {
    Cs.current === n && (Tt($a), Tt(Cs));
  }
  var Pe = Xe(0);
  function en(n) {
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
  var _a = [];
  function Bc() {
    for (var n = 0; n < _a.length; n++)
      _a[n]._workInProgressVersionPrimary = null;
    _a.length = 0;
  }
  var Wc = ye.ReactCurrentDispatcher, ap = ye.ReactCurrentBatchConfig, au = 0, Wt = null, $ = null, ft = null, Ve = !1, ui = !1, na = 0, iu = 0;
  function $t() {
    throw Error(f(321));
  }
  function lu(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!va(n[u], r[u]))
        return !1;
    return !0;
  }
  function El(n, r, u, c, p, y) {
    if (au = y, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Wc.current = n === null || n.memoizedState === null ? Wg : $g, n = u(c, p), ui) {
      y = 0;
      do {
        if (ui = !1, na = 0, 25 <= y)
          throw Error(f(301));
        y += 1, ft = $ = null, r.updateQueue = null, Wc.current = lp, n = u(c, p);
      } while (ui);
    }
    if (Wc.current = of, r = $ !== null && $.next !== null, au = 0, ft = $ = Wt = null, Ve = !1, r)
      throw Error(f(300));
    return n;
  }
  function uu() {
    var n = na !== 0;
    return na = 0, n;
  }
  function Ca() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? Wt.memoizedState = ft = n : ft = ft.next = n, ft;
  }
  function zr() {
    if ($ === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = $.next;
    var r = ft === null ? Wt.memoizedState : ft.next;
    if (r !== null)
      ft = r, $ = n;
    else {
      if (n === null)
        throw Error(f(310));
      $ = n, n = { memoizedState: $.memoizedState, baseState: $.baseState, baseQueue: $.baseQueue, queue: $.queue, next: null }, ft === null ? Wt.memoizedState = ft = n : ft = ft.next = n;
    }
    return ft;
  }
  function ou(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ts(n) {
    var r = zr(), u = r.queue;
    if (u === null)
      throw Error(f(311));
    u.lastRenderedReducer = n;
    var c = $, p = c.baseQueue, y = u.pending;
    if (y !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = y.next, y.next = C;
      }
      c.baseQueue = p = y, u.pending = null;
    }
    if (p !== null) {
      y = p.next, c = c.baseState;
      var R = C = null, D = null, V = y;
      do {
        var X = V.lane;
        if ((au & X) === X)
          D !== null && (D = D.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), c = V.hasEagerState ? V.eagerState : n(c, V.action);
        else {
          var Z = {
            lane: X,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          D === null ? (R = D = Z, C = c) : D = D.next = Z, Wt.lanes |= X, Ai |= X;
        }
        V = V.next;
      } while (V !== null && V !== y);
      D === null ? C = c : D.next = R, va(c, r.memoizedState) || (gn = !0), r.memoizedState = c, r.baseState = C, r.baseQueue = D, u.lastRenderedState = c;
    }
    if (n = u.interleaved, n !== null) {
      p = n;
      do
        y = p.lane, Wt.lanes |= y, Ai |= y, p = p.next;
      while (p !== n);
    } else
      p === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function ws(n) {
    var r = zr(), u = r.queue;
    if (u === null)
      throw Error(f(311));
    u.lastRenderedReducer = n;
    var c = u.dispatch, p = u.pending, y = r.memoizedState;
    if (p !== null) {
      u.pending = null;
      var C = p = p.next;
      do
        y = n(y, C.action), C = C.next;
      while (C !== p);
      va(y, r.memoizedState) || (gn = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), u.lastRenderedState = y;
    }
    return [y, c];
  }
  function $c() {
  }
  function Gc(n, r) {
    var u = Wt, c = zr(), p = r(), y = !va(c.memoizedState, p);
    if (y && (c.memoizedState = p, gn = !0), c = c.queue, Rs(Xc.bind(null, u, c, n), [n]), c.getSnapshot !== r || y || ft !== null && ft.memoizedState.tag & 1) {
      if (u.flags |= 2048, su(9, qc.bind(null, u, c, p, r), void 0, null), tn === null)
        throw Error(f(349));
      au & 30 || Qc(u, r, p);
    }
    return p;
  }
  function Qc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function qc(n, r, u, c) {
    r.value = u, r.getSnapshot = c, Kc(r) && Zc(n);
  }
  function Xc(n, r, u) {
    return u(function() {
      Kc(r) && Zc(n);
    });
  }
  function Kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !va(n, u);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = Mi(n, 1);
    r !== null && dr(r, n, 1, -1);
  }
  function Jc(n) {
    var r = Ca();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ou, lastRenderedState: n }, r.queue = n, n = n.dispatch = uf.bind(null, Wt, n), [r.memoizedState, n];
  }
  function su(n, r, u, c) {
    return n = { tag: n, create: r, destroy: u, deps: c, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (c = u.next, u.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function ef() {
    return zr().memoizedState;
  }
  function cu(n, r, u, c) {
    var p = Ca();
    Wt.flags |= n, p.memoizedState = su(1 | r, u, void 0, c === void 0 ? null : c);
  }
  function Ni(n, r, u, c) {
    var p = zr();
    c = c === void 0 ? null : c;
    var y = void 0;
    if ($ !== null) {
      var C = $.memoizedState;
      if (y = C.destroy, c !== null && lu(c, C.deps)) {
        p.memoizedState = su(r, u, y, c);
        return;
      }
    }
    Wt.flags |= n, p.memoizedState = su(1 | r, u, y, c);
  }
  function tf(n, r) {
    return cu(8390656, 8, n, r);
  }
  function Rs(n, r) {
    return Ni(2048, 8, n, r);
  }
  function nf(n, r) {
    return Ni(4, 2, n, r);
  }
  function rf(n, r) {
    return Ni(4, 4, n, r);
  }
  function ip(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function so(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Ni(4, 4, ip.bind(null, r, n), u);
  }
  function af() {
  }
  function co(n, r) {
    var u = zr();
    r = r === void 0 ? null : r;
    var c = u.memoizedState;
    return c !== null && r !== null && lu(r, c[1]) ? c[0] : (u.memoizedState = [n, r], n);
  }
  function _l(n, r) {
    var u = zr();
    r = r === void 0 ? null : r;
    var c = u.memoizedState;
    return c !== null && r !== null && lu(r, c[1]) ? c[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function Ar(n, r, u) {
    return au & 21 ? (va(u, r) || (u = hc(), Wt.lanes |= u, Ai |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, gn = !0), n.memoizedState = u);
  }
  function Bg(n, r) {
    var u = Ot;
    Ot = u !== 0 && 4 > u ? u : 4, n(!0);
    var c = ap.transition;
    ap.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = u, ap.transition = c;
    }
  }
  function Ft() {
    return zr().memoizedState;
  }
  function lf(n, r, u) {
    var c = Sn(n);
    if (u = { lane: c, action: u, hasEagerState: !1, eagerState: null, next: null }, fo(n))
      xs(r, u);
    else if (u = jv(n, r, u, c), u !== null) {
      var p = fr();
      dr(u, n, c, p), Gv(u, r, c);
    }
  }
  function uf(n, r, u) {
    var c = Sn(n), p = { lane: c, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (fo(n))
      xs(r, p);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var C = r.lastRenderedState, R = y(C, u);
          if (p.hasEagerState = !0, p.eagerState = R, va(R, C)) {
            var D = r.interleaved;
            D === null ? (p.next = p, Jd(r)) : (p.next = D.next, D.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      u = jv(n, r, p, c), u !== null && (p = fr(), dr(u, n, c, p), Gv(u, r, c));
    }
  }
  function fo(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function xs(n, r) {
    ui = Ve = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function Gv(n, r, u) {
    if (u & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, u |= c, r.lanes = u, Zo(n, u);
    }
  }
  var of = { readContext: fn, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: !1 }, Wg = { readContext: fn, useCallback: function(n, r) {
    return Ca().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fn, useEffect: tf, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, cu(
      4194308,
      4,
      ip.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return cu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return cu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Ca();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var c = Ca();
    return r = u !== void 0 ? u(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = lf.bind(null, Wt, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = Ca();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Jc, useDebugValue: af, useDeferredValue: function(n) {
    return Ca().memoizedState = n;
  }, useTransition: function() {
    var n = Jc(!1), r = n[0];
    return n = Bg.bind(null, n[1]), Ca().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var c = Wt, p = Ca();
    if (Bt) {
      if (u === void 0)
        throw Error(f(407));
      u = u();
    } else {
      if (u = r(), tn === null)
        throw Error(f(349));
      au & 30 || Qc(c, r, u);
    }
    p.memoizedState = u;
    var y = { value: u, getSnapshot: r };
    return p.queue = y, tf(Xc.bind(
      null,
      c,
      y,
      n
    ), [n]), c.flags |= 2048, su(9, qc.bind(null, c, y, u, r), void 0, null), u;
  }, useId: function() {
    var n = Ca(), r = tn.identifierPrefix;
    if (Bt) {
      var u = Oi, c = Bn;
      u = (c & ~(1 << 32 - da(c) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = na++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = iu++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $g = {
    readContext: fn,
    useCallback: co,
    useContext: fn,
    useEffect: Rs,
    useImperativeHandle: so,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: _l,
    useReducer: Ts,
    useRef: ef,
    useState: function() {
      return Ts(ou);
    },
    useDebugValue: af,
    useDeferredValue: function(n) {
      var r = zr();
      return Ar(r, $.memoizedState, n);
    },
    useTransition: function() {
      var n = Ts(ou)[0], r = zr().memoizedState;
      return [n, r];
    },
    useMutableSource: $c,
    useSyncExternalStore: Gc,
    useId: Ft,
    unstable_isNewReconciler: !1
  }, lp = { readContext: fn, useCallback: co, useContext: fn, useEffect: Rs, useImperativeHandle: so, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: _l, useReducer: ws, useRef: ef, useState: function() {
    return ws(ou);
  }, useDebugValue: af, useDeferredValue: function(n) {
    var r = zr();
    return $ === null ? r.memoizedState = n : Ar(r, $.memoizedState, n);
  }, useTransition: function() {
    var n = ws(ou)[0], r = zr().memoizedState;
    return [n, r];
  }, useMutableSource: $c, useSyncExternalStore: Gc, useId: Ft, unstable_isNewReconciler: !1 };
  function po(n, r) {
    try {
      var u = "", c = r;
      do
        u += Ja(c), c = c.return;
      while (c);
      var p = u;
    } catch (y) {
      p = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Ds(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function sf(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Gg = typeof WeakMap == "function" ? WeakMap : Map;
  function Qv(n, r, u) {
    u = Li(-1, u), u.tag = 3, u.payload = { element: null };
    var c = r.value;
    return u.callback = function() {
      mf || (mf = !0, vu = c), sf(n, r);
    }, u;
  }
  function ks(n, r, u) {
    u = Li(-1, u), u.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = r.value;
      u.payload = function() {
        return c(p);
      }, u.callback = function() {
        sf(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (u.callback = function() {
      sf(n, r), typeof c != "function" && (ci === null ? ci = /* @__PURE__ */ new Set([this]) : ci.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), u;
  }
  function qv(n, r, u) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Gg();
      var p = /* @__PURE__ */ new Set();
      c.set(r, p);
    } else
      p = c.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), c.set(r, p));
    p.has(u) || (p.add(u), n = eS.bind(null, n, r, u), r.then(n, n));
  }
  function up(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function op(n, r, u, c, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Li(-1, 1), r.tag = 2, yl(u, r, 1))), u.lanes |= 1), n);
  }
  var Qg = ye.ReactCurrentOwner, gn = !1;
  function Rn(n, r, u, c) {
    r.child = n === null ? $v(r, null, u, c) : uo(r, n.child, u, c);
  }
  function Cl(n, r, u, c, p) {
    u = u.render;
    var y = r.ref;
    return ce(r, p), c = El(n, r, u, c, y, p), u = uu(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, $n(n, r, p)) : (Bt && u && Uc(r), r.flags |= 1, Rn(n, r, c, p), r.child);
  }
  function cf(n, r, u, c, p) {
    if (n === null) {
      var y = u.type;
      return typeof y == "function" && !Dp(y) && y.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = y, Fr(n, r, y, c, p)) : (n = Cf(u.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & p)) {
      var C = y.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ss, u(C, c) && n.ref === r.ref)
        return $n(n, r, p);
    }
    return r.flags |= 1, n = xl(y, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fr(n, r, u, c, p) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ss(y, c) && n.ref === r.ref)
        if (gn = !1, r.pendingProps = c = y, (n.lanes & p) !== 0)
          n.flags & 131072 && (gn = !0);
        else
          return r.lanes = n.lanes, $n(n, r, p);
    }
    return ho(n, r, u, c, p);
  }
  function fu(n, r, u) {
    var c = r.pendingProps, p = c.children, y = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, wt(Eo, ra), ra |= u;
      else {
        if (!(u & 1073741824))
          return n = y !== null ? y.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, wt(Eo, ra), ra |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = y !== null ? y.baseLanes : u, wt(Eo, ra), ra |= c;
      }
    else
      y !== null ? (c = y.baseLanes | u, r.memoizedState = null) : c = u, wt(Eo, ra), ra |= c;
    return Rn(n, r, p, u), r.child;
  }
  function Ke(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ho(n, r, u, c, p) {
    var y = Xt(u) ? Or : We.current;
    return y = ya(r, y), ce(r, p), u = El(n, r, u, c, y, p), c = uu(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, $n(n, r, p)) : (Bt && c && Uc(r), r.flags |= 1, Rn(n, r, u, p), r.child);
  }
  function sp(n, r, u, c, p) {
    if (Xt(u)) {
      var y = !0;
      Nc(r);
    } else
      y = !1;
    if (ce(r, p), r.stateNode === null)
      or(n, r), Vv(r, u, c), Vc(r, u, c, p), c = !0;
    else if (n === null) {
      var C = r.stateNode, R = r.memoizedProps;
      C.props = R;
      var D = C.context, V = u.contextType;
      typeof V == "object" && V !== null ? V = fn(V) : (V = Xt(u) ? Or : We.current, V = ya(r, V));
      var X = u.getDerivedStateFromProps, Z = typeof X == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      Z || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (R !== c || D !== V) && Iv(r, C, c, V), ml = !1;
      var q = r.memoizedState;
      C.state = q, gl(r, c, C, p), D = r.memoizedState, R !== c || q !== D || ln.current || ml ? (typeof X == "function" && (np(r, u, X, c), D = r.memoizedState), (R = ml || Pv(r, u, R, c, q, D, V)) ? (Z || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = D), C.props = c, C.state = D, C.context = V, c = R) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      C = r.stateNode, wn(n, r), R = r.memoizedProps, V = r.type === r.elementType ? R : ta(r.type, R), C.props = V, Z = r.pendingProps, q = C.context, D = u.contextType, typeof D == "object" && D !== null ? D = fn(D) : (D = Xt(u) ? Or : We.current, D = ya(r, D));
      var ge = u.getDerivedStateFromProps;
      (X = typeof ge == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (R !== Z || q !== D) && Iv(r, C, c, D), ml = !1, q = r.memoizedState, C.state = q, gl(r, c, C, p);
      var Re = r.memoizedState;
      R !== Z || q !== Re || ln.current || ml ? (typeof ge == "function" && (np(r, u, ge, c), Re = r.memoizedState), (V = ml || Pv(r, u, V, c, q, Re, D) || !1) ? (X || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(c, Re, D), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(c, Re, D)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || R === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = Re), C.props = c, C.state = Re, C.context = D, c = V) : (typeof C.componentDidUpdate != "function" || R === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Xv(n, r, u, c, y, p);
  }
  function Xv(n, r, u, c, p, y) {
    Ke(n, r);
    var C = (r.flags & 128) !== 0;
    if (!c && !C)
      return p && zv(r, u, !1), $n(n, r, y);
    c = r.stateNode, Qg.current = r;
    var R = C && typeof u.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && C ? (r.child = uo(r, n.child, null, y), r.child = uo(r, null, R, y)) : Rn(n, r, R, y), r.memoizedState = c.state, p && zv(r, u, !0), r.child;
  }
  function Kv(n) {
    var r = n.stateNode;
    r.pendingContext ? dl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && dl(n, r.context, !1), rp(n, r.containerInfo);
  }
  function ff(n, r, u, c, p) {
    return Jt(), Xd(p), r.flags |= 256, Rn(n, r, u, c), r.child;
  }
  var du = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function fp(n, r, u) {
    var c = r.pendingProps, p = Pe.current, y = !1, C = (r.flags & 128) !== 0, R;
    if ((R = C) || (R = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), R ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), wt(Pe, p & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = c.children, n = c.fallback, y ? (c = r.mode, y = r.child, C = { mode: "hidden", children: C }, !(c & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = C) : y = Hs(C, c, 0, null), n = Eu(n, c, u, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = cp(u), r.memoizedState = du, n) : dp(r, C));
    if (p = n.memoizedState, p !== null && (R = p.dehydrated, R !== null))
      return qg(n, r, C, c, R, p, u);
    if (y) {
      y = c.fallback, C = r.mode, p = n.child, R = p.sibling;
      var D = { mode: "hidden", children: c.children };
      return !(C & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = D, r.deletions = null) : (c = xl(p, D), c.subtreeFlags = p.subtreeFlags & 14680064), R !== null ? y = xl(R, y) : (y = Eu(y, C, u, null), y.flags |= 2), y.return = r, c.return = r, c.sibling = y, r.child = c, c = y, y = r.child, C = n.child.memoizedState, C = C === null ? cp(u) : { baseLanes: C.baseLanes | u, cachePool: null, transitions: C.transitions }, y.memoizedState = C, y.childLanes = n.childLanes & ~u, r.memoizedState = du, c;
    }
    return y = n.child, n = y.sibling, c = xl(y, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = u), c.return = r, c.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function dp(n, r) {
    return r = Hs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vo(n, r, u, c) {
    return c !== null && Xd(c), uo(r, n.child, null, u), n = dp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qg(n, r, u, c, p, y, C) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, c = Ds(Error(f(422))), vo(n, r, C, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = c.fallback, p = r.mode, c = Hs({ mode: "visible", children: c.children }, p, 0, null), y = Eu(y, p, C, null), y.flags |= 2, c.return = r, y.return = r, c.sibling = y, r.child = c, r.mode & 1 && uo(r, n.child, null, C), r.child.memoizedState = cp(C), r.memoizedState = du, y);
    if (!(r.mode & 1))
      return vo(n, r, C, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c)
        var R = c.dgst;
      return c = R, y = Error(f(419)), c = Ds(y, c, void 0), vo(n, r, C, c);
    }
    if (R = (C & n.childLanes) !== 0, gn || R) {
      if (c = tn, c !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (c.suspendedLanes | C) ? 0 : p, p !== 0 && p !== y.retryLane && (y.retryLane = p, Mi(n, p), dr(c, n, p, -1));
      }
      return wp(), c = Ds(Error(f(421))), vo(n, r, C, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = tS.bind(null, n), p._reactRetry = r, null) : (n = y.treeContext, Ur = Wa(p.nextSibling), ea = r, Bt = !0, Ea = null, n !== null && (Nr[ur++] = Bn, Nr[ur++] = Oi, Nr[ur++] = Sa, Bn = n.id, Oi = n.overflow, Sa = r), r = dp(r, c.children), r.flags |= 4096, r);
  }
  function pp(n, r, u) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), Fn(n.return, r, u);
  }
  function df(n, r, u, c, p) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: u, tailMode: p } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = u, y.tailMode = p);
  }
  function hp(n, r, u) {
    var c = r.pendingProps, p = c.revealOrder, y = c.tail;
    if (Rn(n, r, c.children, u), c = Pe.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && pp(n, u, r);
            else if (n.tag === 19)
              pp(n, u, r);
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
      c &= 1;
    }
    if (wt(Pe, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (u = r.child, p = null; u !== null; )
            n = u.alternate, n !== null && en(n) === null && (p = u), u = u.sibling;
          u = p, u === null ? (p = r.child, r.child = null) : (p = u.sibling, u.sibling = null), df(r, !1, p, u, y);
          break;
        case "backwards":
          for (u = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && en(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = u, u = p, p = n;
          }
          df(r, !0, u, null, y);
          break;
        case "together":
          df(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function or(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function $n(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, u = xl(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = xl(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Ui(n, r, u) {
    switch (r.tag) {
      case 3:
        Kv(r), Jt();
        break;
      case 5:
        He(r);
        break;
      case 1:
        Xt(r.type) && Nc(r);
        break;
      case 4:
        rp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, p = r.memoizedProps.value;
        wt(li, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (wt(Pe, Pe.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? fp(n, r, u) : (wt(Pe, Pe.current & 1), n = $n(n, r, u), n !== null ? n.sibling : null);
        wt(Pe, Pe.current & 1);
        break;
      case 19:
        if (c = (u & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return hp(n, r, u);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), wt(Pe, Pe.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, fu(n, r, u);
    }
    return $n(n, r, u);
  }
  var bs, pu, Ta, xn;
  bs = function(n, r) {
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
  }, pu = function() {
  }, Ta = function(n, r, u, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, ru($a.current);
      var y = null;
      switch (u) {
        case "input":
          p = rr(n, p), c = rr(n, c), y = [];
          break;
        case "select":
          p = Ee({}, p, { value: void 0 }), c = Ee({}, c, { value: void 0 }), y = [];
          break;
        case "textarea":
          p = Aa(n, p), c = Aa(n, c), y = [];
          break;
        default:
          typeof p.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Lc);
      }
      Ln(u, c);
      var C;
      u = null;
      for (V in p)
        if (!c.hasOwnProperty(V) && p.hasOwnProperty(V) && p[V] != null)
          if (V === "style") {
            var R = p[V];
            for (C in R)
              R.hasOwnProperty(C) && (u || (u = {}), u[C] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (m.hasOwnProperty(V) ? y || (y = []) : (y = y || []).push(V, null));
      for (V in c) {
        var D = c[V];
        if (R = p != null ? p[V] : void 0, c.hasOwnProperty(V) && D !== R && (D != null || R != null))
          if (V === "style")
            if (R) {
              for (C in R)
                !R.hasOwnProperty(C) || D && D.hasOwnProperty(C) || (u || (u = {}), u[C] = "");
              for (C in D)
                D.hasOwnProperty(C) && R[C] !== D[C] && (u || (u = {}), u[C] = D[C]);
            } else
              u || (y || (y = []), y.push(
                V,
                u
              )), u = D;
          else
            V === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, R = R ? R.__html : void 0, D != null && R !== D && (y = y || []).push(V, D)) : V === "children" ? typeof D != "string" && typeof D != "number" || (y = y || []).push(V, "" + D) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (m.hasOwnProperty(V) ? (D != null && V === "onScroll" && At("scroll", n), y || R === D || (y = [])) : (y = y || []).push(V, D));
      }
      u && (y = y || []).push("style", u);
      var V = y;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, xn = function(n, r, u, c) {
    u !== c && (r.flags |= 4);
  };
  function Os(n, r) {
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
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, c = 0;
    if (r)
      for (var p = n.child; p !== null; )
        u |= p.lanes | p.childLanes, c |= p.subtreeFlags & 14680064, c |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        u |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= c, n.childLanes = u, r;
  }
  function Xg(n, r, u) {
    var c = r.pendingProps;
    switch (Qd(r), r.tag) {
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
        return sr(r), null;
      case 1:
        return Xt(r.type) && ga(), sr(r), null;
      case 3:
        return c = r.stateNode, Sl(), Tt(ln), Tt(We), Bc(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (Fc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ea !== null && (Fs(Ea), Ea = null))), pu(n, r), sr(r), null;
      case 5:
        rt(r);
        var p = ru(oo.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Ta(n, r, u, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(f(166));
            return sr(r), null;
          }
          if (n = ru($a.current), Fc(r)) {
            c = r.stateNode, u = r.type;
            var y = r.memoizedProps;
            switch (c[ai] = r, c[eu] = y, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                At("cancel", c), At("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                At("load", c);
                break;
              case "video":
              case "audio":
                for (p = 0; p < ps.length; p++)
                  At(ps[p], c);
                break;
              case "source":
                At("error", c);
                break;
              case "img":
              case "image":
              case "link":
                At(
                  "error",
                  c
                ), At("load", c);
                break;
              case "details":
                At("toggle", c);
                break;
              case "input":
                In(c, y), At("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!y.multiple }, At("invalid", c);
                break;
              case "textarea":
                $r(c, y), At("invalid", c);
            }
            Ln(u, y), p = null;
            for (var C in y)
              if (y.hasOwnProperty(C)) {
                var R = y[C];
                C === "children" ? typeof R == "string" ? c.textContent !== R && (y.suppressHydrationWarning !== !0 && Mc(c.textContent, R, n), p = ["children", R]) : typeof R == "number" && c.textContent !== "" + R && (y.suppressHydrationWarning !== !0 && Mc(
                  c.textContent,
                  R,
                  n
                ), p = ["children", "" + R]) : m.hasOwnProperty(C) && R != null && C === "onScroll" && At("scroll", c);
              }
            switch (u) {
              case "input":
                Dr(c), fa(c, y, !0);
                break;
              case "textarea":
                Dr(c), Gr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (c.onclick = Lc);
            }
            c = p, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Fa(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = C.createElement(u, { is: c.is }) : (n = C.createElement(u), u === "select" && (C = n, c.multiple ? C.multiple = !0 : c.size && (C.size = c.size))) : n = C.createElementNS(n, u), n[ai] = r, n[eu] = c, bs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = cn(u, c), u) {
                case "dialog":
                  At("cancel", n), At("close", n), p = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  At("load", n), p = c;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < ps.length; p++)
                    At(ps[p], n);
                  p = c;
                  break;
                case "source":
                  At("error", n), p = c;
                  break;
                case "img":
                case "image":
                case "link":
                  At(
                    "error",
                    n
                  ), At("load", n), p = c;
                  break;
                case "details":
                  At("toggle", n), p = c;
                  break;
                case "input":
                  In(n, c), p = rr(n, c), At("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = Ee({}, c, { value: void 0 }), At("invalid", n);
                  break;
                case "textarea":
                  $r(n, c), p = Aa(n, c), At("invalid", n);
                  break;
                default:
                  p = c;
              }
              Ln(u, p), R = p;
              for (y in R)
                if (R.hasOwnProperty(y)) {
                  var D = R[y];
                  y === "style" ? bt(n, D) : y === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && el(n, D)) : y === "children" ? typeof D == "string" ? (u !== "textarea" || D !== "") && Ha(n, D) : typeof D == "number" && Ha(n, "" + D) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? D != null && y === "onScroll" && At("scroll", n) : D != null && ee(n, y, D, C));
                }
              switch (u) {
                case "input":
                  Dr(n), fa(n, c, !1);
                  break;
                case "textarea":
                  Dr(n), Gr(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + nr(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, y = c.value, y != null ? ti(n, !!c.multiple, y, !1) : c.defaultValue != null && ti(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Lc);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          xn(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(f(166));
          if (u = ru(oo.current), ru($a.current), Fc(r)) {
            if (c = r.stateNode, u = r.memoizedProps, c[ai] = r, (y = c.nodeValue !== u) && (n = ea, n !== null))
              switch (n.tag) {
                case 3:
                  Mc(c.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Mc(c.nodeValue, u, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            c = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(c), c[ai] = r, r.stateNode = c;
        }
        return sr(r), null;
      case 13:
        if (Tt(Pe), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Bt && Ur !== null && r.mode & 1 && !(r.flags & 128))
            Hv(), Jt(), r.flags |= 98560, y = !1;
          else if (y = Fc(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!y)
                throw Error(f(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y)
                throw Error(f(317));
              y[ai] = r;
            } else
              Jt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            sr(r), y = !1;
          } else
            Ea !== null && (Fs(Ea), Ea = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || Pe.current & 1 ? kn === 0 && (kn = 3) : wp())), r.updateQueue !== null && (r.flags |= 4), sr(r), null);
      case 4:
        return Sl(), pu(n, r), n === null && ro(r.stateNode.containerInfo), sr(r), null;
      case 10:
        return vl(r.type._context), sr(r), null;
      case 17:
        return Xt(r.type) && ga(), sr(r), null;
      case 19:
        if (Tt(Pe), y = r.memoizedState, y === null)
          return sr(r), null;
        if (c = (r.flags & 128) !== 0, C = y.rendering, C === null)
          if (c)
            Os(y, !1);
          else {
            if (kn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = en(n), C !== null) {
                  for (r.flags |= 128, Os(y, !1), c = C.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = u, u = r.child; u !== null; )
                    y = u, n = c, y.flags &= 14680066, C = y.alternate, C === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = C.childLanes, y.lanes = C.lanes, y.child = C.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = C.memoizedProps, y.memoizedState = C.memoizedState, y.updateQueue = C.updateQueue, y.type = C.type, n = C.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return wt(Pe, Pe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && gt() > Co && (r.flags |= 128, c = !0, Os(y, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = en(C), n !== null) {
              if (r.flags |= 128, c = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Os(y, !0), y.tail === null && y.tailMode === "hidden" && !C.alternate && !Bt)
                return sr(r), null;
            } else
              2 * gt() - y.renderingStartTime > Co && u !== 1073741824 && (r.flags |= 128, c = !0, Os(y, !1), r.lanes = 4194304);
          y.isBackwards ? (C.sibling = r.child, r.child = C) : (u = y.last, u !== null ? u.sibling = C : r.child = C, y.last = C);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = gt(), r.sibling = null, u = Pe.current, wt(Pe, c ? u & 1 | 2 : u & 1), r) : (sr(r), null);
      case 22:
      case 23:
        return Tp(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? ra & 1073741824 && (sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function vp(n, r) {
    switch (Qd(r), r.tag) {
      case 1:
        return Xt(r.type) && ga(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Sl(), Tt(ln), Tt(We), Bc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rt(r), null;
      case 13:
        if (Tt(Pe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          Jt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Tt(Pe), null;
      case 4:
        return Sl(), null;
      case 10:
        return vl(r.type._context), null;
      case 22:
      case 23:
        return Tp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ms = !1, Dn = !1, Zv = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function mo(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (c) {
          on(n, r, c);
        }
      else
        u.current = null;
  }
  function Ls(n, r, u) {
    try {
      u();
    } catch (c) {
      on(n, r, c);
    }
  }
  var Jv = !1;
  function em(n, r) {
    if (Yd = Gl, n = xc(), xi(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var p = c.anchorOffset, y = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, y.nodeType;
            } catch {
              u = null;
              break e;
            }
            var C = 0, R = -1, D = -1, V = 0, X = 0, Z = n, q = null;
            t:
              for (; ; ) {
                for (var ge; Z !== u || p !== 0 && Z.nodeType !== 3 || (R = C + p), Z !== y || c !== 0 && Z.nodeType !== 3 || (D = C + c), Z.nodeType === 3 && (C += Z.nodeValue.length), (ge = Z.firstChild) !== null; )
                  q = Z, Z = ge;
                for (; ; ) {
                  if (Z === n)
                    break t;
                  if (q === u && ++V === p && (R = C), q === y && ++X === c && (D = C), (ge = Z.nextSibling) !== null)
                    break;
                  Z = q, q = Z.parentNode;
                }
                Z = ge;
              }
            u = R === -1 || D === -1 ? null : { start: R, end: D };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (Zl = { focusedElem: n, selectionRange: u }, Gl = !1, Te = r; Te !== null; )
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
                    var ke = Re.memoizedProps, dn = Re.memoizedState, z = r.stateNode, L = z.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : ta(r.type, ke), dn);
                    z.__reactInternalSnapshotBeforeUpdate = L;
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
                  throw Error(f(163));
              }
          } catch (re) {
            on(r, r.return, re);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
        }
    return Re = Jv, Jv = !1, Re;
  }
  function Ns(n, r, u) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var y = p.destroy;
          p.destroy = void 0, y !== void 0 && Ls(r, u, y);
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function Us(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var c = u.create;
          u.destroy = c();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function mp(n) {
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
  function yp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, yp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ai], delete r[eu], delete r[Id], delete r[Ig], delete r[Bd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function tm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function pf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || tm(n.return))
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
  function yo(n, r, u) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = Lc));
    else if (c !== 4 && (n = n.child, n !== null))
      for (yo(n, r, u), n = n.sibling; n !== null; )
        yo(n, r, u), n = n.sibling;
  }
  function oi(n, r, u) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (oi(n, r, u), n = n.sibling; n !== null; )
        oi(n, r, u), n = n.sibling;
  }
  var Kt = null, Hn = !1;
  function wa(n, r, u) {
    for (u = u.child; u !== null; )
      go(n, r, u), u = u.sibling;
  }
  function go(n, r, u) {
    if (Ya && typeof Ya.onCommitFiberUnmount == "function")
      try {
        Ya.onCommitFiberUnmount(Ko, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Dn || mo(u, r);
      case 6:
        var c = Kt, p = Hn;
        Kt = null, wa(n, r, u), Kt = c, Hn = p, Kt !== null && (Hn ? (n = Kt, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : Kt.removeChild(u.stateNode));
        break;
      case 18:
        Kt !== null && (Hn ? (n = Kt, u = u.stateNode, n.nodeType === 8 ? sl(n.parentNode, u) : n.nodeType === 1 && sl(n, u), ns(n)) : sl(Kt, u.stateNode));
        break;
      case 4:
        c = Kt, p = Hn, Kt = u.stateNode.containerInfo, Hn = !0, wa(n, r, u), Kt = c, Hn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dn && (c = u.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var y = p, C = y.destroy;
            y = y.tag, C !== void 0 && (y & 2 || y & 4) && Ls(u, r, C), p = p.next;
          } while (p !== c);
        }
        wa(n, r, u);
        break;
      case 1:
        if (!Dn && (mo(u, r), c = u.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = u.memoizedProps, c.state = u.memoizedState, c.componentWillUnmount();
          } catch (R) {
            on(u, r, R);
          }
        wa(n, r, u);
        break;
      case 21:
        wa(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Dn = (c = Dn) || u.memoizedState !== null, wa(n, r, u), Dn = c) : wa(n, r, u);
        break;
      default:
        wa(n, r, u);
    }
  }
  function zi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new Zv()), r.forEach(function(c) {
        var p = nS.bind(null, n, c);
        u.has(c) || (u.add(c), c.then(p, p));
      });
    }
  }
  function Ga(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var p = u[c];
        try {
          var y = n, C = r, R = C;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  Kt = R.stateNode, Hn = !1;
                  break e;
                case 3:
                  Kt = R.stateNode.containerInfo, Hn = !0;
                  break e;
                case 4:
                  Kt = R.stateNode.containerInfo, Hn = !0;
                  break e;
              }
              R = R.return;
            }
          if (Kt === null)
            throw Error(f(160));
          go(y, C, p), Kt = null, Hn = !1;
          var D = p.alternate;
          D !== null && (D.return = null), p.return = null;
        } catch (V) {
          on(p, r, V);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        nm(r, n), r = r.sibling;
  }
  function nm(n, r) {
    var u = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ga(r, n), si(n), c & 4) {
          try {
            Ns(3, n, n.return), Us(3, n);
          } catch (ke) {
            on(n, n.return, ke);
          }
          try {
            Ns(5, n, n.return);
          } catch (ke) {
            on(n, n.return, ke);
          }
        }
        break;
      case 1:
        Ga(r, n), si(n), c & 512 && u !== null && mo(u, u.return);
        break;
      case 5:
        if (Ga(r, n), si(n), c & 512 && u !== null && mo(u, u.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Ha(p, "");
          } catch (ke) {
            on(n, n.return, ke);
          }
        }
        if (c & 4 && (p = n.stateNode, p != null)) {
          var y = n.memoizedProps, C = u !== null ? u.memoizedProps : y, R = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              R === "input" && y.type === "radio" && y.name != null && ar(p, y), cn(R, C);
              var V = cn(R, y);
              for (C = 0; C < D.length; C += 2) {
                var X = D[C], Z = D[C + 1];
                X === "style" ? bt(p, Z) : X === "dangerouslySetInnerHTML" ? el(p, Z) : X === "children" ? Ha(p, Z) : ee(p, X, Z, V);
              }
              switch (R) {
                case "input":
                  ir(p, y);
                  break;
                case "textarea":
                  ni(p, y);
                  break;
                case "select":
                  var q = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!y.multiple;
                  var ge = y.value;
                  ge != null ? ti(p, !!y.multiple, ge, !1) : q !== !!y.multiple && (y.defaultValue != null ? ti(
                    p,
                    !!y.multiple,
                    y.defaultValue,
                    !0
                  ) : ti(p, !!y.multiple, y.multiple ? [] : "", !1));
              }
              p[eu] = y;
            } catch (ke) {
              on(n, n.return, ke);
            }
        }
        break;
      case 6:
        if (Ga(r, n), si(n), c & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          p = n.stateNode, y = n.memoizedProps;
          try {
            p.nodeValue = y;
          } catch (ke) {
            on(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (Ga(r, n), si(n), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ns(r.containerInfo);
          } catch (ke) {
            on(n, n.return, ke);
          }
        break;
      case 4:
        Ga(r, n), si(n);
        break;
      case 13:
        Ga(r, n), si(n), p = n.child, p.flags & 8192 && (y = p.memoizedState !== null, p.stateNode.isHidden = y, !y || p.alternate !== null && p.alternate.memoizedState !== null || (Ep = gt())), c & 4 && zi(n);
        break;
      case 22:
        if (X = u !== null && u.memoizedState !== null, n.mode & 1 ? (Dn = (V = Dn) || X, Ga(r, n), Dn = V) : Ga(r, n), si(n), c & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !X && n.mode & 1)
            for (Te = n, X = n.child; X !== null; ) {
              for (Z = Te = X; Te !== null; ) {
                switch (q = Te, ge = q.child, q.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ns(4, q, q.return);
                    break;
                  case 1:
                    mo(q, q.return);
                    var Re = q.stateNode;
                    if (typeof Re.componentWillUnmount == "function") {
                      c = q, u = q.return;
                      try {
                        r = c, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                      } catch (ke) {
                        on(c, u, ke);
                      }
                    }
                    break;
                  case 5:
                    mo(q, q.return);
                    break;
                  case 22:
                    if (q.memoizedState !== null) {
                      gp(Z);
                      continue;
                    }
                }
                ge !== null ? (ge.return = q, Te = ge) : gp(Z);
              }
              X = X.sibling;
            }
          e:
            for (X = null, Z = n; ; ) {
              if (Z.tag === 5) {
                if (X === null) {
                  X = Z;
                  try {
                    p = Z.stateNode, V ? (y = p.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (R = Z.stateNode, D = Z.memoizedProps.style, C = D != null && D.hasOwnProperty("display") ? D.display : null, R.style.display = nt("display", C));
                  } catch (ke) {
                    on(n, n.return, ke);
                  }
                }
              } else if (Z.tag === 6) {
                if (X === null)
                  try {
                    Z.stateNode.nodeValue = V ? "" : Z.memoizedProps;
                  } catch (ke) {
                    on(n, n.return, ke);
                  }
              } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === n) && Z.child !== null) {
                Z.child.return = Z, Z = Z.child;
                continue;
              }
              if (Z === n)
                break e;
              for (; Z.sibling === null; ) {
                if (Z.return === null || Z.return === n)
                  break e;
                X === Z && (X = null), Z = Z.return;
              }
              X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling;
            }
        }
        break;
      case 19:
        Ga(r, n), si(n), c & 4 && zi(n);
        break;
      case 21:
        break;
      default:
        Ga(
          r,
          n
        ), si(n);
    }
  }
  function si(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (tm(u)) {
              var c = u;
              break e;
            }
            u = u.return;
          }
          throw Error(f(160));
        }
        switch (c.tag) {
          case 5:
            var p = c.stateNode;
            c.flags & 32 && (Ha(p, ""), c.flags &= -33);
            var y = pf(n);
            oi(n, y, p);
            break;
          case 3:
          case 4:
            var C = c.stateNode.containerInfo, R = pf(n);
            yo(n, R, C);
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        on(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function rm(n, r, u) {
    Te = n, So(n);
  }
  function So(n, r, u) {
    for (var c = (n.mode & 1) !== 0; Te !== null; ) {
      var p = Te, y = p.child;
      if (p.tag === 22 && c) {
        var C = p.memoizedState !== null || Ms;
        if (!C) {
          var R = p.alternate, D = R !== null && R.memoizedState !== null || Dn;
          R = Ms;
          var V = Dn;
          if (Ms = C, (Dn = D) && !V)
            for (Te = p; Te !== null; )
              C = Te, D = C.child, C.tag === 22 && C.memoizedState !== null ? im(p) : D !== null ? (D.return = C, Te = D) : im(p);
          for (; y !== null; )
            Te = y, So(y), y = y.sibling;
          Te = p, Ms = R, Dn = V;
        }
        am(n);
      } else
        p.subtreeFlags & 8772 && y !== null ? (y.return = p, Te = y) : am(n);
    }
  }
  function am(n) {
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
                Dn || Us(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !Dn)
                  if (u === null)
                    c.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? u.memoizedProps : ta(r.type, u.memoizedProps);
                    c.componentDidUpdate(p, u.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && nu(r, y, c);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (u = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        u = r.child.stateNode;
                        break;
                      case 1:
                        u = r.child.stateNode;
                    }
                  nu(r, C, u);
                }
                break;
              case 5:
                var R = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = R;
                  var D = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && u.focus();
                      break;
                    case "img":
                      D.src && (u.src = D.src);
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
                  var V = r.alternate;
                  if (V !== null) {
                    var X = V.memoizedState;
                    if (X !== null) {
                      var Z = X.dehydrated;
                      Z !== null && ns(Z);
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
                throw Error(f(163));
            }
          Dn || r.flags & 512 && mp(r);
        } catch (q) {
          on(r, r.return, q);
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
  function gp(n) {
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
  function im(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Us(4, r);
            } catch (D) {
              on(r, u, D);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (D) {
                on(r, p, D);
              }
            }
            var y = r.return;
            try {
              mp(r);
            } catch (D) {
              on(r, y, D);
            }
            break;
          case 5:
            var C = r.return;
            try {
              mp(r);
            } catch (D) {
              on(r, C, D);
            }
        }
      } catch (D) {
        on(r, r.return, D);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, Te = R;
        break;
      }
      Te = r.return;
    }
  }
  var hf = Math.ceil, zs = ye.ReactCurrentDispatcher, Sp = ye.ReactCurrentOwner, cr = ye.ReactCurrentBatchConfig, ot = 0, tn = null, un = null, jn = 0, ra = 0, Eo = Xe(0), kn = 0, As = null, Ai = 0, vf = 0, _o = 0, hu = null, mr = null, Ep = 0, Co = 1 / 0, Fi = null, mf = !1, vu = null, ci = null, Tl = !1, wl = null, yf = 0, To = 0, gf = null, mu = -1, yu = 0;
  function fr() {
    return ot & 6 ? gt() : mu !== -1 ? mu : mu = gt();
  }
  function Sn(n) {
    return n.mode & 1 ? ot & 2 && jn !== 0 ? jn & -jn : Hc.transition !== null ? (yu === 0 && (yu = hc()), yu) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ed(n.type)), n) : 1;
  }
  function dr(n, r, u, c) {
    if (50 < To)
      throw To = 0, gf = null, Error(f(185));
    $l(n, u, c), (!(ot & 2) || n !== tn) && (n === tn && (!(ot & 2) && (vf |= u), kn === 4 && Ra(n, jn)), pr(n, c), u === 1 && ot === 0 && !(r.mode & 1) && (Co = gt() + 500, An && Mr()));
  }
  function pr(n, r) {
    var u = n.callbackNode;
    pc(n, r);
    var c = Pa(n, n === tn ? jn : 0);
    if (c === 0)
      u !== null && vr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (u != null && vr(u), r === 1)
        n.tag === 0 ? $d(lm.bind(null, n)) : Wd(lm.bind(null, n)), Vd(function() {
          !(ot & 6) && Mr();
        }), u = null;
      else {
        switch (yd(c)) {
          case 1:
            u = Ci;
            break;
          case 4:
            u = ut;
            break;
          case 16:
            u = al;
            break;
          case 536870912:
            u = pd;
            break;
          default:
            u = al;
        }
        u = xp(u, wo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function wo(n, r) {
    if (mu = -1, yu = 0, ot & 6)
      throw Error(f(327));
    var u = n.callbackNode;
    if (xo() && n.callbackNode !== u)
      return null;
    var c = Pa(n, n === tn ? jn : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = Ef(n, c);
    else {
      r = c;
      var p = ot;
      ot |= 2;
      var y = Sf();
      (tn !== n || jn !== r) && (Fi = null, Co = gt() + 500, gu(n, r));
      do
        try {
          Zg();
          break;
        } catch (R) {
          um(n, R);
        }
      while (1);
      Zd(), zs.current = y, ot = p, un !== null ? r = 0 : (tn = null, jn = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (p = vd(n), p !== 0 && (c = p, r = _p(n, p))), r === 1)
        throw u = As, gu(n, 0), Ra(n, c), pr(n, gt()), u;
      if (r === 6)
        Ra(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !Cp(p) && (r = Ef(n, c), r === 2 && (y = vd(n), y !== 0 && (c = y, r = _p(n, y))), r === 1))
          throw u = As, gu(n, 0), Ra(n, c), pr(n, gt()), u;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Su(n, mr, Fi);
            break;
          case 3:
            if (Ra(n, c), (c & 130023424) === c && (r = Ep + 500 - gt(), 10 < r)) {
              if (Pa(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                fr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Jl(Su.bind(null, n, mr, Fi), r);
              break;
            }
            Su(n, mr, Fi);
            break;
          case 4:
            if (Ra(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var C = 31 - da(c);
              y = 1 << C, C = r[C], C > p && (p = C), c &= ~y;
            }
            if (c = p, c = gt() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * hf(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Jl(Su.bind(null, n, mr, Fi), c);
              break;
            }
            Su(n, mr, Fi);
            break;
          case 5:
            Su(n, mr, Fi);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return pr(n, gt()), n.callbackNode === u ? wo.bind(null, n) : null;
  }
  function _p(n, r) {
    var u = hu;
    return n.current.memoizedState.isDehydrated && (gu(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = mr, mr = u, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    mr === null ? mr = n : mr.push.apply(mr, n);
  }
  function Cp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var c = 0; c < u.length; c++) {
            var p = u[c], y = p.getSnapshot;
            p = p.value;
            try {
              if (!va(y(), p))
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
  function Ra(n, r) {
    for (r &= ~_o, r &= ~vf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - da(r), c = 1 << u;
      n[u] = -1, r &= ~c;
    }
  }
  function lm(n) {
    if (ot & 6)
      throw Error(f(327));
    xo();
    var r = Pa(n, 0);
    if (!(r & 1))
      return pr(n, gt()), null;
    var u = Ef(n, r);
    if (n.tag !== 0 && u === 2) {
      var c = vd(n);
      c !== 0 && (r = c, u = _p(n, c));
    }
    if (u === 1)
      throw u = As, gu(n, 0), Ra(n, r), pr(n, gt()), u;
    if (u === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Su(n, mr, Fi), pr(n, gt()), null;
  }
  function Ro(n, r) {
    var u = ot;
    ot |= 1;
    try {
      return n(r);
    } finally {
      ot = u, ot === 0 && (Co = gt() + 500, An && Mr());
    }
  }
  function Rl(n) {
    wl !== null && wl.tag === 0 && !(ot & 6) && xo();
    var r = ot;
    ot |= 1;
    var u = cr.transition, c = Ot;
    try {
      if (cr.transition = null, Ot = 1, n)
        return n();
    } finally {
      Ot = c, cr.transition = u, ot = r, !(ot & 6) && Mr();
    }
  }
  function Tp() {
    ra = Eo.current, Tt(Eo);
  }
  function gu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Uv(u)), un !== null)
      for (u = un.return; u !== null; ) {
        var c = u;
        switch (Qd(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && ga();
            break;
          case 3:
            Sl(), Tt(ln), Tt(We), Bc();
            break;
          case 5:
            rt(c);
            break;
          case 4:
            Sl();
            break;
          case 13:
            Tt(Pe);
            break;
          case 19:
            Tt(Pe);
            break;
          case 10:
            vl(c.type._context);
            break;
          case 22:
          case 23:
            Tp();
        }
        u = u.return;
      }
    if (tn = n, un = n = xl(n.current, null), jn = ra = r, kn = 0, As = null, _o = vf = Ai = 0, mr = hu = null, Wn !== null) {
      for (r = 0; r < Wn.length; r++)
        if (u = Wn[r], c = u.interleaved, c !== null) {
          u.interleaved = null;
          var p = c.next, y = u.pending;
          if (y !== null) {
            var C = y.next;
            y.next = p, c.next = C;
          }
          u.pending = c;
        }
      Wn = null;
    }
    return n;
  }
  function um(n, r) {
    do {
      var u = un;
      try {
        if (Zd(), Wc.current = of, Ve) {
          for (var c = Wt.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          Ve = !1;
        }
        if (au = 0, ft = $ = Wt = null, ui = !1, na = 0, Sp.current = null, u === null || u.return === null) {
          kn = 1, As = r, un = null;
          break;
        }
        e: {
          var y = n, C = u.return, R = u, D = r;
          if (r = jn, R.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var V = D, X = R, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var q = X.alternate;
              q ? (X.updateQueue = q.updateQueue, X.memoizedState = q.memoizedState, X.lanes = q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ge = up(C);
            if (ge !== null) {
              ge.flags &= -257, op(ge, C, R, y, r), ge.mode & 1 && qv(y, V, r), r = ge, D = V;
              var Re = r.updateQueue;
              if (Re === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(D), r.updateQueue = ke;
              } else
                Re.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                qv(y, V, r), wp();
                break e;
              }
              D = Error(f(426));
            }
          } else if (Bt && R.mode & 1) {
            var dn = up(C);
            if (dn !== null) {
              !(dn.flags & 65536) && (dn.flags |= 256), op(dn, C, R, y, r), Xd(po(D, R));
              break e;
            }
          }
          y = D = po(D, R), kn !== 4 && (kn = 2), hu === null ? hu = [y] : hu.push(y), y = C;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var z = Qv(y, D, r);
                tp(y, z);
                break e;
              case 1:
                R = D;
                var L = y.type, H = y.stateNode;
                if (!(y.flags & 128) && (typeof L.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (ci === null || !ci.has(H)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var re = ks(y, R, r);
                  tp(y, re);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Rp(u);
      } catch (be) {
        r = be, un === u && u !== null && (un = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Sf() {
    var n = zs.current;
    return zs.current = of, n === null ? of : n;
  }
  function wp() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), tn === null || !(Ai & 268435455) && !(vf & 268435455) || Ra(tn, jn);
  }
  function Ef(n, r) {
    var u = ot;
    ot |= 2;
    var c = Sf();
    (tn !== n || jn !== r) && (Fi = null, gu(n, r));
    do
      try {
        Kg();
        break;
      } catch (p) {
        um(n, p);
      }
    while (1);
    if (Zd(), ot = u, zs.current = c, un !== null)
      throw Error(f(261));
    return tn = null, jn = 0, kn;
  }
  function Kg() {
    for (; un !== null; )
      om(un);
  }
  function Zg() {
    for (; un !== null && !rl(); )
      om(un);
  }
  function om(n) {
    var r = cm(n.alternate, n, ra);
    n.memoizedProps = n.pendingProps, r === null ? Rp(n) : un = r, Sp.current = null;
  }
  function Rp(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = vp(u, r), u !== null) {
          u.flags &= 32767, un = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, un = null;
          return;
        }
      } else if (u = Xg(u, r, ra), u !== null) {
        un = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        un = r;
        return;
      }
      un = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Su(n, r, u) {
    var c = Ot, p = cr.transition;
    try {
      cr.transition = null, Ot = 1, Jg(n, r, u, c);
    } finally {
      cr.transition = p, Ot = c;
    }
    return null;
  }
  function Jg(n, r, u, c) {
    do
      xo();
    while (wl !== null);
    if (ot & 6)
      throw Error(f(327));
    u = n.finishedWork;
    var p = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = u.lanes | u.childLanes;
    if (Rg(n, y), n === tn && (un = tn = null, jn = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Tl || (Tl = !0, xp(al, function() {
      return xo(), null;
    })), y = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || y) {
      y = cr.transition, cr.transition = null;
      var C = Ot;
      Ot = 1;
      var R = ot;
      ot |= 4, Sp.current = null, em(n, u), nm(u, n), Dc(Zl), Gl = !!Yd, Zl = Yd = null, n.current = u, rm(u), fc(), ot = R, Ot = C, cr.transition = y;
    } else
      n.current = u;
    if (Tl && (Tl = !1, wl = n, yf = p), y = n.pendingLanes, y === 0 && (ci = null), Qh(u.stateNode), pr(n, gt()), r !== null)
      for (c = n.onRecoverableError, u = 0; u < r.length; u++)
        p = r[u], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (mf)
      throw mf = !1, n = vu, vu = null, n;
    return yf & 1 && n.tag !== 0 && xo(), y = n.pendingLanes, y & 1 ? n === gf ? To++ : (To = 0, gf = n) : To = 0, Mr(), null;
  }
  function xo() {
    if (wl !== null) {
      var n = yd(yf), r = cr.transition, u = Ot;
      try {
        if (cr.transition = null, Ot = 16 > n ? 16 : n, wl === null)
          var c = !1;
        else {
          if (n = wl, wl = null, yf = 0, ot & 6)
            throw Error(f(331));
          var p = ot;
          for (ot |= 4, Te = n.current; Te !== null; ) {
            var y = Te, C = y.child;
            if (Te.flags & 16) {
              var R = y.deletions;
              if (R !== null) {
                for (var D = 0; D < R.length; D++) {
                  var V = R[D];
                  for (Te = V; Te !== null; ) {
                    var X = Te;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, X, y);
                    }
                    var Z = X.child;
                    if (Z !== null)
                      Z.return = X, Te = Z;
                    else
                      for (; Te !== null; ) {
                        X = Te;
                        var q = X.sibling, ge = X.return;
                        if (yp(X), X === V) {
                          Te = null;
                          break;
                        }
                        if (q !== null) {
                          q.return = ge, Te = q;
                          break;
                        }
                        Te = ge;
                      }
                  }
                }
                var Re = y.alternate;
                if (Re !== null) {
                  var ke = Re.child;
                  if (ke !== null) {
                    Re.child = null;
                    do {
                      var dn = ke.sibling;
                      ke.sibling = null, ke = dn;
                    } while (ke !== null);
                  }
                }
                Te = y;
              }
            }
            if (y.subtreeFlags & 2064 && C !== null)
              C.return = y, Te = C;
            else
              e:
                for (; Te !== null; ) {
                  if (y = Te, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(9, y, y.return);
                    }
                  var z = y.sibling;
                  if (z !== null) {
                    z.return = y.return, Te = z;
                    break e;
                  }
                  Te = y.return;
                }
          }
          var L = n.current;
          for (Te = L; Te !== null; ) {
            C = Te;
            var H = C.child;
            if (C.subtreeFlags & 2064 && H !== null)
              H.return = C, Te = H;
            else
              e:
                for (C = L; Te !== null; ) {
                  if (R = Te, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Us(9, R);
                      }
                    } catch (be) {
                      on(R, R.return, be);
                    }
                  if (R === C) {
                    Te = null;
                    break e;
                  }
                  var re = R.sibling;
                  if (re !== null) {
                    re.return = R.return, Te = re;
                    break e;
                  }
                  Te = R.return;
                }
          }
          if (ot = p, Mr(), Ya && typeof Ya.onPostCommitFiberRoot == "function")
            try {
              Ya.onPostCommitFiberRoot(Ko, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Ot = u, cr.transition = r;
      }
    }
    return !1;
  }
  function sm(n, r, u) {
    r = po(u, r), r = Qv(n, r, 1), n = yl(n, r, 1), r = fr(), n !== null && ($l(n, 1, r), pr(n, r));
  }
  function on(n, r, u) {
    if (n.tag === 3)
      sm(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          sm(r, n, u);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ci === null || !ci.has(c))) {
            n = po(u, n), n = ks(r, n, 1), r = yl(r, n, 1), n = fr(), r !== null && ($l(r, 1, n), pr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function eS(n, r, u) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = fr(), n.pingedLanes |= n.suspendedLanes & u, tn === n && (jn & u) === u && (kn === 4 || kn === 3 && (jn & 130023424) === jn && 500 > gt() - Ep ? gu(n, 0) : _o |= u), pr(n, r);
  }
  function _f(n, r) {
    r === 0 && (n.mode & 1 ? (r = Gu, Gu <<= 1, !(Gu & 130023424) && (Gu = 4194304)) : r = 1);
    var u = fr();
    n = Mi(n, r), n !== null && ($l(n, r, u), pr(n, u));
  }
  function tS(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), _f(n, u);
  }
  function nS(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, p = n.memoizedState;
        p !== null && (u = p.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    c !== null && c.delete(r), _f(n, u);
  }
  var cm;
  cm = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || ln.current)
        gn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return gn = !1, Ui(n, r, u);
        gn = !!(n.flags & 131072);
      }
    else
      gn = !1, Bt && r.flags & 1048576 && Gd(r, io, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        or(n, r), n = r.pendingProps;
        var p = ya(r, We.current);
        ce(r, u), p = El(null, r, c, n, p, u);
        var y = uu();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(c) ? (y = !0, Nc(r)) : y = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ep(r), p.updater = Pc, r.stateNode = p, p._reactInternals = r, Vc(r, c, n, u), r = Xv(null, r, c, !0, y, u)) : (r.tag = 0, Bt && y && Uc(r), Rn(null, r, p, u), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (or(n, r), n = r.pendingProps, p = c._init, c = p(c._payload), r.type = c, p = r.tag = aS(c), n = ta(c, n), p) {
            case 0:
              r = ho(null, r, c, n, u);
              break e;
            case 1:
              r = sp(null, r, c, n, u);
              break e;
            case 11:
              r = Cl(null, r, c, n, u);
              break e;
            case 14:
              r = cf(null, r, c, ta(c.type, n), u);
              break e;
          }
          throw Error(f(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), ho(n, r, c, p, u);
      case 1:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), sp(n, r, c, p, u);
      case 3:
        e: {
          if (Kv(r), n === null)
            throw Error(f(387));
          c = r.pendingProps, y = r.memoizedState, p = y.element, wn(n, r), gl(r, c, null, u);
          var C = r.memoizedState;
          if (c = C.element, y.isDehydrated)
            if (y = { element: c, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              p = po(Error(f(423)), r), r = ff(n, r, c, u, p);
              break e;
            } else if (c !== p) {
              p = po(Error(f(424)), r), r = ff(n, r, c, u, p);
              break e;
            } else
              for (Ur = Wa(r.stateNode.containerInfo.firstChild), ea = r, Bt = !0, Ea = null, u = $v(r, null, c, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Jt(), c === p) {
              r = $n(n, r, u);
              break e;
            }
            Rn(n, r, c, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return He(r), n === null && Ac(r), c = r.type, p = r.pendingProps, y = n !== null ? n.memoizedProps : null, C = p.children, ms(c, p) ? C = null : y !== null && ms(c, y) && (r.flags |= 32), Ke(n, r), Rn(n, r, C, u), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return fp(n, r, u);
      case 4:
        return rp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = uo(r, null, c, u) : Rn(n, r, c, u), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), Cl(n, r, c, p, u);
      case 7:
        return Rn(n, r, r.pendingProps, u), r.child;
      case 8:
        return Rn(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return Rn(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, y = r.memoizedProps, C = p.value, wt(li, c._currentValue), c._currentValue = C, y !== null)
            if (va(y.value, C)) {
              if (y.children === p.children && !ln.current) {
                r = $n(n, r, u);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var R = y.dependencies;
                if (R !== null) {
                  C = y.child;
                  for (var D = R.firstContext; D !== null; ) {
                    if (D.context === c) {
                      if (y.tag === 1) {
                        D = Li(-1, u & -u), D.tag = 2;
                        var V = y.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var X = V.pending;
                          X === null ? D.next = D : (D.next = X.next, X.next = D), V.pending = D;
                        }
                      }
                      y.lanes |= u, D = y.alternate, D !== null && (D.lanes |= u), Fn(
                        y.return,
                        u,
                        r
                      ), R.lanes |= u;
                      break;
                    }
                    D = D.next;
                  }
                } else if (y.tag === 10)
                  C = y.type === r.type ? null : y.child;
                else if (y.tag === 18) {
                  if (C = y.return, C === null)
                    throw Error(f(341));
                  C.lanes |= u, R = C.alternate, R !== null && (R.lanes |= u), Fn(C, u, r), C = y.sibling;
                } else
                  C = y.child;
                if (C !== null)
                  C.return = y;
                else
                  for (C = y; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (y = C.sibling, y !== null) {
                      y.return = C.return, C = y;
                      break;
                    }
                    C = C.return;
                  }
                y = C;
              }
          Rn(n, r, p.children, u), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, ce(r, u), p = fn(p), c = c(p), r.flags |= 1, Rn(n, r, c, u), r.child;
      case 14:
        return c = r.type, p = ta(c, r.pendingProps), p = ta(c.type, p), cf(n, r, c, p, u);
      case 15:
        return Fr(n, r, r.type, r.pendingProps, u);
      case 17:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), or(n, r), r.tag = 1, Xt(c) ? (n = !0, Nc(r)) : n = !1, ce(r, u), Vv(r, c, p), Vc(r, c, p, u), Xv(null, r, c, !0, n, u);
      case 19:
        return hp(n, r, u);
      case 22:
        return fu(n, r, u);
    }
    throw Error(f(156, r.tag));
  };
  function xp(n, r) {
    return qt(n, r);
  }
  function rS(n, r, u, c) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xa(n, r, u, c) {
    return new rS(n, r, u, c);
  }
  function Dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function aS(n) {
    if (typeof n == "function")
      return Dp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vt)
        return 11;
      if (n === hn)
        return 14;
    }
    return 2;
  }
  function xl(n, r) {
    var u = n.alternate;
    return u === null ? (u = xa(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Cf(n, r, u, c, p, y) {
    var C = 2;
    if (c = n, typeof n == "function")
      Dp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case he:
            return Eu(u.children, p, y, r);
          case it:
            C = 8, p |= 8;
            break;
          case tt:
            return n = xa(12, u, r, p | 2), n.elementType = tt, n.lanes = y, n;
          case Ie:
            return n = xa(13, u, r, p), n.elementType = Ie, n.lanes = y, n;
          case et:
            return n = xa(19, u, r, p), n.elementType = et, n.lanes = y, n;
          case _n:
            return Hs(u, p, y, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case lt:
                  C = 10;
                  break e;
                case ht:
                  C = 9;
                  break e;
                case Vt:
                  C = 11;
                  break e;
                case hn:
                  C = 14;
                  break e;
                case kt:
                  C = 16, c = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = xa(C, u, r, p), r.elementType = n, r.type = c, r.lanes = y, r;
  }
  function Eu(n, r, u, c) {
    return n = xa(7, n, c, r), n.lanes = u, n;
  }
  function Hs(n, r, u, c) {
    return n = xa(22, n, c, r), n.elementType = _n, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function js(n, r, u) {
    return n = xa(6, n, null, r), n.lanes = u, n;
  }
  function _u(n, r, u) {
    return r = xa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function iS(n, r, u, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = md(0), this.expirationTimes = md(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = md(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Tf(n, r, u, c, p, y, C, R, D) {
    return n = new iS(n, r, u, R, D), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = xa(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: c, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ep(y), n;
  }
  function fm(n, r, u) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: u };
  }
  function kp(n) {
    if (!n)
      return ii;
    n = n._reactInternals;
    e: {
      if (Ze(n) !== n || n.tag !== 1)
        throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Xt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Xt(u))
        return Ss(n, u, r);
    }
    return r;
  }
  function dm(n, r, u, c, p, y, C, R, D) {
    return n = Tf(u, c, !0, n, p, y, C, R, D), n.context = kp(null), u = n.current, c = fr(), p = Sn(u), y = Li(c, p), y.callback = r ?? null, yl(u, y, p), n.current.lanes = p, $l(n, p, c), pr(n, c), n;
  }
  function Ys(n, r, u, c) {
    var p = r.current, y = fr(), C = Sn(p);
    return u = kp(u), r.context === null ? r.context = u : r.pendingContext = u, r = Li(y, C), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = yl(p, r, C), n !== null && (dr(n, p, C, y), Yc(n, p, C)), C;
  }
  function wf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function pm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function bp(n, r) {
    pm(n, r), (n = n.alternate) && pm(n, r);
  }
  function hm() {
    return null;
  }
  var Op = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Rf(n) {
    this._internalRoot = n;
  }
  Hi.prototype.render = Rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Ys(n, r, null, null);
  }, Hi.prototype.unmount = Rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Rl(function() {
        Ys(null, n, null, null);
      }), r[bi] = null;
    }
  };
  function Hi(n) {
    this._internalRoot = n;
  }
  Hi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Zh();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Mt.length && r !== 0 && r < Mt[u].priority; u++)
        ;
      Mt.splice(u, 0, n), u === 0 && Jh(n);
    }
  };
  function Mp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vm() {
  }
  function lS(n, r, u, c, p) {
    if (p) {
      if (typeof c == "function") {
        var y = c;
        c = function() {
          var V = wf(C);
          y.call(V);
        };
      }
      var C = dm(r, c, n, 0, null, !1, !1, "", vm);
      return n._reactRootContainer = C, n[bi] = C.current, ro(n.nodeType === 8 ? n.parentNode : n), Rl(), C;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof c == "function") {
      var R = c;
      c = function() {
        var V = wf(D);
        R.call(V);
      };
    }
    var D = Tf(n, 0, !1, null, null, !1, !1, "", vm);
    return n._reactRootContainer = D, n[bi] = D.current, ro(n.nodeType === 8 ? n.parentNode : n), Rl(function() {
      Ys(r, D, u, c);
    }), D;
  }
  function Df(n, r, u, c, p) {
    var y = u._reactRootContainer;
    if (y) {
      var C = y;
      if (typeof p == "function") {
        var R = p;
        p = function() {
          var D = wf(C);
          R.call(D);
        };
      }
      Ys(r, C, n, p);
    } else
      C = lS(u, r, n, p, c);
    return wf(C);
  }
  Kh = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = Wl(r.pendingLanes);
          u !== 0 && (Zo(r, u | 1), pr(r, gt()), !(ot & 6) && (Co = gt() + 500, Mr()));
        }
        break;
      case 13:
        Rl(function() {
          var c = Mi(n, 1);
          if (c !== null) {
            var p = fr();
            dr(c, n, 1, p);
          }
        }), bp(n, 1);
    }
  }, vc = function(n) {
    if (n.tag === 13) {
      var r = Mi(n, 134217728);
      if (r !== null) {
        var u = fr();
        dr(r, n, 134217728, u);
      }
      bp(n, 134217728);
    }
  }, zt = function(n) {
    if (n.tag === 13) {
      var r = Sn(n), u = Mi(n, r);
      if (u !== null) {
        var c = fr();
        dr(u, n, r, c);
      }
      bp(n, r);
    }
  }, Zh = function() {
    return Ot;
  }, gd = function(n, r) {
    var u = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = u;
    }
  }, qr = function(n, r, u) {
    switch (r) {
      case "input":
        if (ir(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var c = u[r];
            if (c !== n && c.form === n.form) {
              var p = Ue(c);
              if (!p)
                throw Error(f(90));
              ca(c), ir(c, p);
            }
          }
        }
        break;
      case "textarea":
        ni(n, u);
        break;
      case "select":
        r = u.value, r != null && ti(n, !!u.multiple, r, !1);
    }
  }, Xo = Ro, cc = Rl;
  var uS = { usingClientEntryPoint: !1, Events: [gs, ao, Ue, Vl, Bu, Ro] }, Do = { findFiberByHostInstance: ma, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, oS = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Nn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Do.findFiberByHostInstance || hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kf.isDisabled && kf.supportsFiber)
      try {
        Ko = kf.inject(oS), Ya = kf;
      } catch {
      }
  }
  return La.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uS, La.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mp(r))
      throw Error(f(200));
    return fm(n, r, null, u);
  }, La.createRoot = function(n, r) {
    if (!Mp(n))
      throw Error(f(299));
    var u = !1, c = "", p = Op;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Tf(n, 1, !1, null, null, u, !1, c, p), n[bi] = r.current, ro(n.nodeType === 8 ? n.parentNode : n), new Rf(r);
  }, La.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = Nn(r), n = n === null ? null : n.stateNode, n;
  }, La.flushSync = function(n) {
    return Rl(n);
  }, La.hydrate = function(n, r, u) {
    if (!xf(r))
      throw Error(f(200));
    return Df(null, n, r, !0, u);
  }, La.hydrateRoot = function(n, r, u) {
    if (!Mp(n))
      throw Error(f(405));
    var c = u != null && u.hydratedSources || null, p = !1, y = "", C = Op;
    if (u != null && (u.unstable_strictMode === !0 && (p = !0), u.identifierPrefix !== void 0 && (y = u.identifierPrefix), u.onRecoverableError !== void 0 && (C = u.onRecoverableError)), r = dm(r, null, n, 1, u ?? null, p, !1, y, C), n[bi] = r.current, ro(n), c)
      for (n = 0; n < c.length; n++)
        u = c[n], p = u._getVersion, p = p(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, p] : r.mutableSourceEagerHydrationData.push(
          u,
          p
        );
    return new Hi(r);
  }, La.render = function(n, r, u) {
    if (!xf(r))
      throw Error(f(200));
    return Df(null, n, r, !1, u);
  }, La.unmountComponentAtNode = function(n) {
    if (!xf(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Rl(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[bi] = null;
      });
    }), !0) : !1;
  }, La.unstable_batchedUpdates = Ro, La.unstable_renderSubtreeIntoContainer = function(n, r, u, c) {
    if (!xf(u))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return Df(n, r, u, !1, c);
  }, La.version = "18.2.0-next-9e3b772b8-20220608", La;
}
var Na = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function TA() {
  return aR || (aR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Yu, s = Ex(), f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = !1;
    function m(e) {
      h = e;
    }
    function _(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        b("warn", e, a);
      }
    }
    function S(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        b("error", e, a);
      }
    }
    function b(e, t, a) {
      {
        var l = f.ReactDebugCurrentFrame, o = l.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var k = 0, M = 1, P = 2, U = 3, I = 4, Q = 5, ne = 6, ae = 7, se = 8, Me = 9, ie = 10, ee = 11, ye = 12, ve = 13, le = 14, he = 15, it = 16, tt = 17, lt = 18, ht = 19, Vt = 21, Ie = 22, et = 23, hn = 24, kt = 25, _n = !0, oe = !1, Ae = !1, Ee = !1, yt = !1, Ct = !0, Vn = !1, hr = !1, Ja = !0, Cn = !0, sa = !0, nr = /* @__PURE__ */ new Set(), xr = {}, ei = {};
    function Dr(e, t) {
      ca(e, t), ca(e + "Capture", t);
    }
    function ca(e, t) {
      xr[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), xr[e] = t;
      {
        var a = e.toLowerCase();
        ei[a] = e, e === "onDoubleClick" && (ei.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        nr.add(t[l]);
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function In(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ar(e) {
      try {
        return ir(e), !1;
      } catch {
        return !0;
      }
    }
    function ir(e) {
      return "" + e;
    }
    function fa(e, t) {
      if (ar(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), ir(e);
    }
    function za(e) {
      if (ar(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(e)), ir(e);
    }
    function _i(e, t) {
      if (ar(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), ir(e);
    }
    function ti(e, t) {
      if (ar(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), ir(e);
    }
    function Aa(e) {
      if (ar(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", In(e)), ir(e);
    }
    function $r(e) {
      if (ar(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", In(e)), ir(e);
    }
    var ni = 0, Gr = 1, Fa = 2, vn = 3, Qr = 4, el = 5, Ha = 6, de = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = de + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", nt = new RegExp("^[" + de + "][" + Ne + "]*$"), bt = {}, Zt = {};
    function Ln(e) {
      return rr.call(Zt, e) ? !0 : rr.call(bt, e) ? !1 : nt.test(e) ? (Zt[e] = !0, !0) : (bt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === ni : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function kr(e, t, a, l) {
      if (a !== null && a.type === ni)
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
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ht(e, t, a, l) {
      if (t === null || typeof t > "u" || kr(e, t, a, l))
        return !0;
      if (l)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case Qr:
            return t === !1;
          case el:
            return isNaN(t);
          case Ha:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function qr(e) {
      return jt.hasOwnProperty(e) ? jt[e] : null;
    }
    function Ut(e, t, a, l, o, d, v) {
      this.acceptsBooleans = t === Fa || t === vn || t === Qr, this.attributeName = l, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var jt = {}, Iu = [
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
    Iu.forEach(function(e) {
      jt[e] = new Ut(
        e,
        ni,
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
      jt[t] = new Ut(
        t,
        Gr,
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
      jt[e] = new Ut(
        e,
        Fa,
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
      jt[e] = new Ut(
        e,
        Fa,
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
      jt[e] = new Ut(
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
      jt[e] = new Ut(
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
      jt[e] = new Ut(
        e,
        Qr,
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
      jt[e] = new Ut(
        e,
        Ha,
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
      jt[e] = new Ut(
        e,
        el,
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
    var Vl = /[\-\:]([a-z])/g, Bu = function(e) {
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
      var t = e.replace(Vl, Bu);
      jt[t] = new Ut(
        t,
        Gr,
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
      var t = e.replace(Vl, Bu);
      jt[t] = new Ut(
        t,
        Gr,
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
      var t = e.replace(Vl, Bu);
      jt[t] = new Ut(
        t,
        Gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      jt[e] = new Ut(
        e,
        Gr,
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
    var Xo = "xlinkHref";
    jt[Xo] = new Ut(
      "xlinkHref",
      Gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      jt[e] = new Ut(
        e,
        Gr,
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
    var cc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Il = !1;
    function Wu(e) {
      !Il && cc.test(e) && (Il = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Bl(e, t, a, l) {
      if (l.mustUseProperty) {
        var o = l.propertyName;
        return e[o];
      } else {
        fa(a, t), l.sanitizeURL && Wu("" + a);
        var d = l.attributeName, v = null;
        if (l.type === Qr) {
          if (e.hasAttribute(d)) {
            var g = e.getAttribute(d);
            return g === "" ? !0 : Ht(t, a, l, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(d)) {
          if (Ht(t, a, l, !1))
            return e.getAttribute(d);
          if (l.type === vn)
            return a;
          v = e.getAttribute(d);
        }
        return Ht(t, a, l, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function $u(e, t, a, l) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return fa(a, t), o === "" + a ? a : o;
      }
    }
    function ri(e, t, a, l) {
      var o = qr(t);
      if (!cn(t, o, l)) {
        if (Ht(t, a, o, l) && (a = null), l || o === null) {
          if (Ln(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (fa(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var v = o.mustUseProperty;
        if (v) {
          var g = o.propertyName;
          if (a === null) {
            var E = o.type;
            e[g] = E === vn ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var T = o.attributeName, w = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var N = o.type, O;
          N === vn || N === Qr && a === !0 ? O = "" : (fa(a, T), O = "" + a, o.sanitizeURL && Wu(O.toString())), w ? e.setAttributeNS(w, T, O) : e.setAttribute(T, O);
        }
      }
    }
    var tl = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), ja = Symbol.for("react.fragment"), nl = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Nn = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), vr = Symbol.for("react.legacy_hidden"), rl = Symbol.for("react.cache"), fc = Symbol.for("react.tracing_marker"), gt = Symbol.iterator, Tg = "@@iterator";
    function Ci(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = gt && e[gt] || e[Tg];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, al = 0, Gh, pd, Ko, Ya, Qh, da, qh;
    function Xh() {
    }
    Xh.__reactDisabledLog = !0;
    function wg() {
      {
        if (al === 0) {
          Gh = console.log, pd = console.info, Ko = console.warn, Ya = console.error, Qh = console.group, da = console.groupCollapsed, qh = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Xh,
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
        al++;
      }
    }
    function dc() {
      {
        if (al--, al === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: Gh
            }),
            info: ut({}, e, {
              value: pd
            }),
            warn: ut({}, e, {
              value: Ko
            }),
            error: ut({}, e, {
              value: Ya
            }),
            group: ut({}, e, {
              value: Qh
            }),
            groupCollapsed: ut({}, e, {
              value: da
            }),
            groupEnd: ut({}, e, {
              value: qh
            })
          });
        }
        al < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = f.ReactCurrentDispatcher, Wl;
    function Pa(e, t, a) {
      {
        if (Wl === void 0)
          try {
            throw Error();
          } catch (o) {
            var l = o.stack.trim().match(/\n( *(at )?)/);
            Wl = l && l[1] || "";
          }
        return `
` + Wl + e;
      }
    }
    var hd = !1, pc;
    {
      var vd = typeof WeakMap == "function" ? WeakMap : Map;
      pc = new vd();
    }
    function hc(e, t) {
      if (!e || hd)
        return "";
      {
        var a = pc.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      hd = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Gu.current, Gu.current = null, wg();
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
            } catch (Y) {
              l = Y;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (Y) {
              l = Y;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            l = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && l && typeof Y.stack == "string") {
          for (var g = Y.stack.split(`
`), E = l.stack.split(`
`), T = g.length - 1, w = E.length - 1; T >= 1 && w >= 0 && g[T] !== E[w]; )
            w--;
          for (; T >= 1 && w >= 0; T--, w--)
            if (g[T] !== E[w]) {
              if (T !== 1 || w !== 1)
                do
                  if (T--, w--, w < 0 || g[T] !== E[w]) {
                    var N = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && pc.set(e, N), N;
                  }
                while (T >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        hd = !1, Gu.current = d, dc(), Error.prepareStackTrace = o;
      }
      var O = e ? e.displayName || e.name : "", j = O ? Pa(O) : "";
      return typeof e == "function" && pc.set(e, j), j;
    }
    function md(e, t, a) {
      return hc(e, !0);
    }
    function $l(e, t, a) {
      return hc(e, !1);
    }
    function Rg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return hc(e, Rg(e));
      if (typeof e == "string")
        return Pa(e);
      switch (e) {
        case Ze:
          return Pa("Suspense");
        case vt:
          return Pa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Fe:
            return $l(e.render);
          case Je:
            return Zo(e.type, t, a);
          case Ye: {
            var l = e, o = l._payload, d = l._init;
            try {
              return Zo(d(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ot(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Q:
          return Pa(e.type);
        case it:
          return Pa("Lazy");
        case ve:
          return Pa("Suspense");
        case ht:
          return Pa("SuspenseList");
        case k:
        case P:
        case he:
          return $l(e.type);
        case ee:
          return $l(e.type.render);
        case M:
          return md(e.type);
        default:
          return "";
      }
    }
    function yd(e) {
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
    function Kh(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function vc(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ja:
          return "Fragment";
        case Xr:
          return "Portal";
        case x:
          return "Profiler";
        case nl:
          return "StrictMode";
        case Ze:
          return "Suspense";
        case vt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pe:
            var t = e;
            return vc(t) + ".Consumer";
          case K:
            var a = e;
            return vc(a._context) + ".Provider";
          case Fe:
            return Kh(e, e.render, "ForwardRef");
          case Je:
            var l = e.displayName || null;
            return l !== null ? l : zt(e.type) || "Memo";
          case Ye: {
            var o = e, d = o._payload, v = o._init;
            try {
              return zt(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zh(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function gd(e) {
      return e.displayName || "Context";
    }
    function qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case hn:
          return "Cache";
        case Me:
          var l = a;
          return gd(l) + ".Consumer";
        case ie:
          var o = a;
          return gd(o._context) + ".Provider";
        case lt:
          return "DehydratedFragment";
        case ee:
          return Zh(a, a.render, "ForwardRef");
        case ae:
          return "Fragment";
        case Q:
          return a;
        case I:
          return "Portal";
        case U:
          return "Root";
        case ne:
          return "Text";
        case it:
          return zt(a);
        case se:
          return a === nl ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case ye:
          return "Profiler";
        case Vt:
          return "Scope";
        case ve:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case M:
        case k:
        case tt:
        case P:
        case le:
        case he:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Jo = f.ReactDebugCurrentFrame, mn = null, pa = !1;
    function ha() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return qe(e);
      }
      return null;
    }
    function es() {
      return mn === null ? "" : yd(mn);
    }
    function Tn() {
      Jo.getCurrentStack = null, mn = null, pa = !1;
    }
    function Mt(e) {
      Jo.getCurrentStack = e === null ? null : es, mn = e, pa = !1;
    }
    function xg() {
      return mn;
    }
    function Va(e) {
      pa = e;
    }
    function lr(e) {
      return "" + e;
    }
    function il(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return $r(e), e;
        default:
          return "";
      }
    }
    var Jh = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qu(e, t) {
      Jh[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Sd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ev(e) {
      return e._valueTracker;
    }
    function ts(e) {
      e._valueTracker = null;
    }
    function ns(e) {
      var t = "";
      return e && (Sd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function qu(e) {
      var t = Sd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      $r(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(g) {
            $r(g), l = "" + g, d.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return l;
          },
          setValue: function(g) {
            $r(g), l = "" + g;
          },
          stopTracking: function() {
            ts(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Gl(e) {
      ev(e) || (e._valueTracker = qu(e));
    }
    function tv(e) {
      if (!e)
        return !1;
      var t = ev(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = ns(e);
      return l !== a ? (t.setValue(l), !0) : !1;
    }
    function mc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yc = !1, rs = !1, gc = !1, Ed = !1;
    function Ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function as(e, t) {
      var a = e, l = t.checked, o = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function is(e, t) {
      Qu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !rs && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), rs = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yc && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), yc = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: il(t.value != null ? t.value : l),
        controlled: Ti(t)
      };
    }
    function _d(e, t) {
      var a = e, l = t.checked;
      l != null && ri(a, "checked", l, !1);
    }
    function Xu(e, t) {
      var a = e;
      {
        var l = Ti(t);
        !a._wrapperState.controlled && l && !Ed && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ed = !0), a._wrapperState.controlled && !l && !gc && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), gc = !0);
      }
      _d(e, t);
      var o = il(t.value), d = t.type;
      if (o != null)
        d === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = lr(o)) : a.value !== lr(o) && (a.value = lr(o));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ll(a, t.type, o) : t.hasOwnProperty("defaultValue") && ll(a, t.type, il(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ls(e, t, a) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, d = o === "submit" || o === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var v = lr(l._wrapperState.initialValue);
        a || v !== l.value && (l.value = v), l.defaultValue = v;
      }
      var g = l.name;
      g !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, g !== "" && (l.name = g);
    }
    function nv(e, t) {
      var a = e;
      Xu(a, t), Kr(a, t);
    }
    function Kr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        fa(a, "name");
        for (var o = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < o.length; d++) {
          var v = o[d];
          if (!(v === e || v.form !== e.form)) {
            var g = Lm(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            tv(v), Xu(v, g);
          }
        }
      }
    }
    function ll(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || mc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = lr(e._wrapperState.initialValue) : e.defaultValue !== lr(a) && (e.defaultValue = lr(a)));
    }
    var Sc = !1, Ku = !1, rv = !1;
    function Ec(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ku || (Ku = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (rv || (rv = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Sc && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Sc = !0);
    }
    function Cd(e, t) {
      t.value != null && e.setAttribute("value", lr(il(t.value)));
    }
    var us = Array.isArray;
    function Un(e) {
      return us(e);
    }
    var _c;
    _c = !1;
    function av() {
      var e = ha();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var iv = ["value", "defaultValue"];
    function Dg(e) {
      {
        Qu("select", e);
        for (var t = 0; t < iv.length; t++) {
          var a = iv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, av()) : !e.multiple && l && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, av());
          }
        }
      }
    }
    function ul(e, t, a, l) {
      var o = e.options;
      if (t) {
        for (var d = a, v = {}, g = 0; g < d.length; g++)
          v["$" + d[g]] = !0;
        for (var E = 0; E < o.length; E++) {
          var T = v.hasOwnProperty("$" + o[E].value);
          o[E].selected !== T && (o[E].selected = T), T && l && (o[E].defaultSelected = !0);
        }
      } else {
        for (var w = lr(il(a)), N = null, O = 0; O < o.length; O++) {
          if (o[O].value === w) {
            o[O].selected = !0, l && (o[O].defaultSelected = !0);
            return;
          }
          N === null && !o[O].disabled && (N = o[O]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function Td(e, t) {
      return ut({}, t, {
        value: void 0
      });
    }
    function lv(e, t) {
      var a = e;
      Dg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_c && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _c = !0);
    }
    function kg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? ul(a, !!t.multiple, l, !1) : t.defaultValue != null && ul(a, !!t.multiple, t.defaultValue, !0);
    }
    function bg(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? ul(a, !!t.multiple, o, !1) : l !== !!t.multiple && (t.defaultValue != null ? ul(a, !!t.multiple, t.defaultValue, !0) : ul(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Og(e, t) {
      var a = e, l = t.value;
      l != null && ul(a, !!t.multiple, l, !1);
    }
    var wd = !1;
    function Rd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: lr(a._wrapperState.initialValue)
      });
      return l;
    }
    function uv(e, t) {
      var a = e;
      Qu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !wd && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component"), wd = !0);
      var l = t.value;
      if (l == null) {
        var o = t.children, d = t.defaultValue;
        if (o != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Un(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            d = o;
          }
        }
        d == null && (d = ""), l = d;
      }
      a._wrapperState = {
        initialValue: il(l)
      };
    }
    function ov(e, t) {
      var a = e, l = il(t.value), o = il(t.defaultValue);
      if (l != null) {
        var d = lr(l);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      o != null && (a.defaultValue = lr(o));
    }
    function sv(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function xd(e, t) {
      ov(e, t);
    }
    var wi = "http://www.w3.org/1999/xhtml", Mg = "http://www.w3.org/1998/Math/MathML", Dd = "http://www.w3.org/2000/svg";
    function Cc(e) {
      switch (e) {
        case "svg":
          return Dd;
        case "math":
          return Mg;
        default:
          return wi;
      }
    }
    function kd(e, t) {
      return e == null || e === wi ? Cc(t) : e === Dd && t === "foreignObject" ? wi : e;
    }
    var Lg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, o);
        });
      } : e;
    }, Tc, cv = Lg(function(e, t) {
      if (e.namespaceURI === Dd && !("innerHTML" in e)) {
        Tc = Tc || document.createElement("div"), Tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), br = 1, Ri = 3, yn = 8, Ia = 9, Ql = 11, wc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ri) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, fv = {
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
    }, Zu = {
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
    function dv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var pv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      pv.forEach(function(t) {
        Zu[dv(t, e)] = Zu[e];
      });
    });
    function Rc(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (ti(t, e), ("" + t).trim());
    }
    var Ju = /([A-Z])/g, Ng = /^ms-/;
    function Ug(e) {
      return e.replace(Ju, "-$1").toLowerCase().replace(Ng, "-ms-");
    }
    var hv = function() {
    };
    {
      var vv = /^(?:webkit|moz|o)[A-Z]/, mv = /^-ms-/, os = /-(.)/g, eo = /;\s*$/, to = {}, no = {}, yv = !1, bd = !1, Od = function(e) {
        return e.replace(os, function(t, a) {
          return a.toUpperCase();
        });
      }, Md = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Od(e.replace(mv, "ms-"))
        ));
      }, gv = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Sv = function(e, t) {
        no.hasOwnProperty(t) && no[t] || (no[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eo, "")));
      }, Ev = function(e, t) {
        yv || (yv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, zg = function(e, t) {
        bd || (bd = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      hv = function(e, t) {
        e.indexOf("-") > -1 ? Md(e) : vv.test(e) ? gv(e) : eo.test(t) && Sv(e, t), typeof t == "number" && (isNaN(t) ? Ev(e, t) : isFinite(t) || zg(e, t));
      };
    }
    var Ag = hv;
    function Fg(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var o = e[l];
            if (o != null) {
              var d = l.indexOf("--") === 0;
              t += a + (d ? l : Ug(l)) + ":", t += Rc(l, o, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function _v(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var o = l.indexOf("--") === 0;
          o || Ag(l, t[l]);
          var d = Rc(l, t[l], o);
          l === "float" && (l = "cssFloat"), o ? a.setProperty(l, d) : a[l] = d;
        }
    }
    function Hg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function va(e) {
      var t = {};
      for (var a in e)
        for (var l = fv[a] || [a], o = 0; o < l.length; o++)
          t[l[o]] = a;
      return t;
    }
    function ss(e, t) {
      {
        if (!t)
          return;
        var a = va(e), l = va(t), o = {};
        for (var d in a) {
          var v = a[d], g = l[d];
          if (g && v !== g) {
            var E = v + "," + g;
            if (o[E])
              continue;
            o[E] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Hg(e[v]) ? "Removing" : "Updating", v, g);
          }
        }
      }
    }
    var Cv = {
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
    }, Tv = ut({
      menuitem: !0
    }, Cv), wv = "__html";
    function xc(e, t) {
      if (t) {
        if (Tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(wv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function xi(e, t) {
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
    var Dc = {
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
    }, Rv = {
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
    }, Ba = {}, Ld = new RegExp("^(aria)-[" + Ne + "]*$"), cs = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function Nd(e, t) {
      {
        if (rr.call(Ba, t) && Ba[t])
          return !0;
        if (cs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = Rv.hasOwnProperty(a) ? a : null;
          if (l == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ba[t] = !0, !0;
          if (t !== l)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Ba[t] = !0, !0;
        }
        if (Ld.test(t)) {
          var o = t.toLowerCase(), d = Rv.hasOwnProperty(o) ? o : null;
          if (d == null)
            return Ba[t] = !0, !1;
          if (t !== d)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ba[t] = !0, !0;
        }
      }
      return !0;
    }
    function xv(e, t) {
      {
        var a = [];
        for (var l in t) {
          var o = Nd(e, l);
          o || a.push(l);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function kc(e, t) {
      xi(e, t) || xv(e, t);
    }
    var ql = !1;
    function Ud(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ql && (ql = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var zd = function() {
    };
    {
      var zn = {}, Ad = /^on./, Dv = /^on[^A-Z]/, kv = new RegExp("^(aria)-[" + Ne + "]*$"), bv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      zd = function(e, t, a, l) {
        if (rr.call(zn, t) && zn[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (l != null) {
          var d = l.registrationNameDependencies, v = l.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(o) ? v[o] : null;
          if (g != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, g), zn[t] = !0, !0;
          if (Ad.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Ad.test(t))
          return Dv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (kv.test(t) || bv.test(t))
          return !0;
        if (o === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (o === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var E = qr(t), T = E !== null && E.type === ni;
        if (Dc.hasOwnProperty(o)) {
          var w = Dc[o];
          if (w !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, w), zn[t] = !0, !0;
        } else if (!T && t !== o)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), zn[t] = !0, !0;
        return typeof a == "boolean" && kr(t, a, E, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : T ? !0 : kr(t, a, E, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var Ov = function(e, t, a) {
      {
        var l = [];
        for (var o in t) {
          var d = zd(e, o, t[o], a);
          d || l.push(o);
        }
        var v = l.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        l.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Mv(e, t, a) {
      xi(e, t) || Ov(e, t, a);
    }
    var Di = 1, fs = 2, Xl = 4, jg = Di | fs | Xl, ds = null;
    function ps(e) {
      ds !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function Yg() {
      ds === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Lv(e) {
      return e === ds;
    }
    function bc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ri ? t.parentNode : t;
    }
    var At = null, ol = null, ki = null;
    function ro(e) {
      var t = Oo(e);
      if (t) {
        if (typeof At != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = Lm(a);
          At(t.stateNode, t.type, l);
        }
      }
    }
    function Nv(e) {
      At = e;
    }
    function Oc(e) {
      ol ? ki ? ki.push(e) : ki = [e] : ol = e;
    }
    function hs() {
      return ol !== null || ki !== null;
    }
    function vs() {
      if (ol) {
        var e = ol, t = ki;
        if (ol = null, ki = null, ro(e), t)
          for (var a = 0; a < t.length; a++)
            ro(t[a]);
      }
    }
    var Kl = function(e, t) {
      return e(t);
    }, Fd = function() {
    }, Hd = !1;
    function Pg() {
      var e = hs();
      e && (Fd(), vs());
    }
    function jd(e, t, a) {
      if (Hd)
        return e(t, a);
      Hd = !0;
      try {
        return Kl(e, t, a);
      } finally {
        Hd = !1, Pg();
      }
    }
    function Mc(e, t, a) {
      Kl = e, Fd = a;
    }
    function Lc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Yd(e, t, a) {
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
          return !!(a.disabled && Lc(t));
        default:
          return !1;
      }
    }
    function Zl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = Lm(a);
      if (l === null)
        return null;
      var o = l[t];
      if (Yd(t, e.type, l))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var ms = !1;
    if (Mn)
      try {
        var Jl = {};
        Object.defineProperty(Jl, "passive", {
          get: function() {
            ms = !0;
          }
        }), window.addEventListener("test", Jl, Jl), window.removeEventListener("test", Jl, Jl);
      } catch {
        ms = !1;
      }
    function Uv(e, t, a, l, o, d, v, g, E) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (w) {
        this.onError(w);
      }
    }
    var Pd = Uv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Vd = document.createElement("react");
      Pd = function(t, a, l, o, d, v, g, E, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), N = !1, O = !0, j = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function B() {
          Vd.removeEventListener(W, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function ze() {
          N = !0, B(), a.apply(l, _e), O = !1;
        }
        var Oe, pt = !1, st = !1;
        function A(F) {
          if (Oe = F.error, pt = !0, Oe === null && F.colno === 0 && F.lineno === 0 && (st = !0), F.defaultPrevented && Oe != null && typeof Oe == "object")
            try {
              Oe._suppressLogging = !0;
            } catch {
            }
        }
        var W = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Vd.addEventListener(W, ze, !1), w.initEvent(W, !1, !1), Vd.dispatchEvent(w), Y && Object.defineProperty(window, "event", Y), N && O && (pt ? st && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", A), !N)
          return B(), Uv.apply(this, arguments);
      };
    }
    var Vg = Pd, sl = !1, Wa = null, ys = !1, cl = null, ai = {
      onError: function(e) {
        sl = !0, Wa = e;
      }
    };
    function eu(e, t, a, l, o, d, v, g, E) {
      sl = !1, Wa = null, Vg.apply(ai, arguments);
    }
    function bi(e, t, a, l, o, d, v, g, E) {
      if (eu.apply(this, arguments), sl) {
        var T = Bd();
        ys || (ys = !0, cl = T);
      }
    }
    function Id() {
      if (ys) {
        var e = cl;
        throw ys = !1, cl = null, e;
      }
    }
    function Ig() {
      return sl;
    }
    function Bd() {
      if (sl) {
        var e = Wa;
        return sl = !1, Wa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ma(e) {
      return e._reactInternals;
    }
    function gs(e) {
      return e._reactInternals !== void 0;
    }
    function ao(e, t) {
      e._reactInternals = t;
    }
    var Ue = (
      /*                      */
      0
    ), fl = (
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
    ), wt = (
      /*                 */
      32
    ), ii = (
      /*                     */
      64
    ), We = (
      /*                   */
      128
    ), ln = (
      /*            */
      256
    ), Or = (
      /*                          */
      512
    ), ya = (
      /*                     */
      1024
    ), Xt = (
      /*                      */
      2048
    ), ga = (
      /*                    */
      4096
    ), dl = (
      /*                   */
      8192
    ), Ss = (
      /*             */
      16384
    ), Nc = Xt | Xe | ii | Or | ya | Ss, zv = (
      /*               */
      32767
    ), Zr = (
      /*                   */
      32768
    ), An = (
      /*                */
      65536
    ), Es = (
      /* */
      131072
    ), Wd = (
      /*                       */
      1048576
    ), $d = (
      /*                    */
      2097152
    ), Mr = (
      /*                 */
      4194304
    ), pl = (
      /*                */
      8388608
    ), Lr = (
      /*               */
      16777216
    ), tu = (
      /*              */
      33554432
    ), io = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Xe | ya | 0
    ), Nr = It | Xe | Tt | wt | Or | ga | dl, ur = Xe | ii | Or | dl, Sa = Xt | Tt, Bn = Mr | pl | $d, Oi = f.ReactCurrentOwner;
    function Jr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (It | ga)) !== Ue && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === U ? a : null;
    }
    function Gd(e) {
      if (e.tag === ve) {
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
    function Uc(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Qd(e) {
      return Jr(e) === e;
    }
    function ea(e) {
      {
        var t = Oi.current;
        if (t !== null && t.tag === M) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(a) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var o = ma(e);
      return o ? Jr(o) === o : !1;
    }
    function Ur(e) {
      if (Jr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Bt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Jr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var l = e, o = t; ; ) {
        var d = l.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var g = d.return;
          if (g !== null) {
            l = o = g;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var E = d.child; E; ) {
            if (E === l)
              return Ur(d), e;
            if (E === o)
              return Ur(d), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== o.return)
          l = d, o = v;
        else {
          for (var T = !1, w = d.child; w; ) {
            if (w === l) {
              T = !0, l = d, o = v;
              break;
            }
            if (w === o) {
              T = !0, o = d, l = v;
              break;
            }
            w = w.sibling;
          }
          if (!T) {
            for (w = v.child; w; ) {
              if (w === l) {
                T = !0, l = v, o = d;
                break;
              }
              if (w === o) {
                T = !0, o = v, l = d;
                break;
              }
              w = w.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Ea(e) {
      var t = Bt(e);
      return t !== null ? qd(t) : null;
    }
    function qd(e) {
      if (e.tag === Q || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = qd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Av(e) {
      var t = Bt(e);
      return t !== null ? zc(t) : null;
    }
    function zc(e) {
      if (e.tag === Q || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== I) {
          var a = zc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ac = s.unstable_scheduleCallback, Fv = s.unstable_cancelCallback, Fc = s.unstable_shouldYield, Hv = s.unstable_requestPaint, Jt = s.unstable_now, Xd = s.unstable_getCurrentPriorityLevel, Hc = s.unstable_ImmediatePriority, ta = s.unstable_UserBlockingPriority, li = s.unstable_NormalPriority, jc = s.unstable_LowPriority, hl = s.unstable_IdlePriority, Kd = s.unstable_yieldValue, Zd = s.unstable_setDisableYieldValue, vl = null, Fn = null, ce = null, fn = !1, Wn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Jd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ja && (e = ut({}, e, {
          getLaneLabelMap: yl,
          injectProfilingHooks: Li
        })), vl = t.inject(e), Fn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function jv(e, t) {
      if (Fn && typeof Fn.onScheduleFiberRoot == "function")
        try {
          Fn.onScheduleFiberRoot(vl, e, t);
        } catch (a) {
          fn || (fn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Mi(e, t) {
      if (Fn && typeof Fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & We) === We;
          if (Cn) {
            var l;
            switch (t) {
              case or:
                l = Hc;
                break;
              case $n:
                l = ta;
                break;
              case Ui:
                l = li;
                break;
              case bs:
                l = hl;
                break;
              default:
                l = li;
                break;
            }
            Fn.onCommitFiberRoot(vl, e, l, a);
          }
        } catch (o) {
          fn || (fn = !0, S("React instrumentation encountered an error: %s", o));
        }
    }
    function ml(e) {
      if (Fn && typeof Fn.onPostCommitFiberRoot == "function")
        try {
          Fn.onPostCommitFiberRoot(vl, e);
        } catch (t) {
          fn || (fn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ep(e) {
      if (Fn && typeof Fn.onCommitFiberUnmount == "function")
        try {
          Fn.onCommitFiberUnmount(vl, e);
        } catch (t) {
          fn || (fn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function wn(e) {
      if (typeof Kd == "function" && (Zd(e), m(e)), Fn && typeof Fn.setStrictMode == "function")
        try {
          Fn.setStrictMode(vl, e);
        } catch (t) {
          fn || (fn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Li(e) {
      ce = e;
    }
    function yl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wt; a++) {
          var l = Bg(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Yc(e) {
      ce !== null && typeof ce.markCommitStarted == "function" && ce.markCommitStarted(e);
    }
    function tp() {
      ce !== null && typeof ce.markCommitStopped == "function" && ce.markCommitStopped();
    }
    function gl(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function nu() {
      ce !== null && typeof ce.markComponentRenderStopped == "function" && ce.markComponentRenderStopped();
    }
    function Yv(e) {
      ce !== null && typeof ce.markComponentPassiveEffectMountStarted == "function" && ce.markComponentPassiveEffectMountStarted(e);
    }
    function np() {
      ce !== null && typeof ce.markComponentPassiveEffectMountStopped == "function" && ce.markComponentPassiveEffectMountStopped();
    }
    function Pc(e) {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStarted == "function" && ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function Pv() {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStopped == "function" && ce.markComponentPassiveEffectUnmountStopped();
    }
    function Vv(e) {
      ce !== null && typeof ce.markComponentLayoutEffectMountStarted == "function" && ce.markComponentLayoutEffectMountStarted(e);
    }
    function Iv() {
      ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped();
    }
    function Vc(e) {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped();
    }
    function Ic(e, t, a) {
      ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(e, t, a);
    }
    function Bv(e, t, a) {
      ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(e, t, a);
    }
    function Wv(e) {
      ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(e);
    }
    function uo() {
      ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
    }
    function $v(e) {
      ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(e);
    }
    function _s() {
      ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped();
    }
    function $a(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function Cs() {
      ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded();
    }
    function oo() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function ru(e) {
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(e);
    }
    function rp(e, t) {
      ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, t);
    }
    function Sl(e, t) {
      ce !== null && typeof ce.markStateUpdateScheduled == "function" && ce.markStateUpdateScheduled(e, t);
    }
    var He = (
      /*                         */
      0
    ), rt = (
      /*                 */
      1
    ), Pe = (
      /*                    */
      2
    ), en = (
      /*               */
      8
    ), _a = (
      /*              */
      16
    ), Bc = Math.clz32 ? Math.clz32 : au, Wc = Math.log, ap = Math.LN2;
    function au(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Wc(t) / ap | 0) | 0;
    }
    var Wt = 31, $ = (
      /*                        */
      0
    ), ft = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), ui = (
      /*    */
      2
    ), na = (
      /*             */
      4
    ), iu = (
      /*            */
      8
    ), $t = (
      /*                     */
      16
    ), lu = (
      /*                */
      32
    ), El = (
      /*                       */
      4194240
    ), uu = (
      /*                        */
      64
    ), Ca = (
      /*                        */
      128
    ), zr = (
      /*                        */
      256
    ), ou = (
      /*                        */
      512
    ), Ts = (
      /*                        */
      1024
    ), ws = (
      /*                        */
      2048
    ), $c = (
      /*                        */
      4096
    ), Gc = (
      /*                        */
      8192
    ), Qc = (
      /*                        */
      16384
    ), qc = (
      /*                       */
      32768
    ), Xc = (
      /*                       */
      65536
    ), Kc = (
      /*                       */
      131072
    ), Zc = (
      /*                       */
      262144
    ), Jc = (
      /*                       */
      524288
    ), su = (
      /*                       */
      1048576
    ), ef = (
      /*                       */
      2097152
    ), cu = (
      /*                            */
      130023424
    ), Ni = (
      /*                             */
      4194304
    ), tf = (
      /*                             */
      8388608
    ), Rs = (
      /*                             */
      16777216
    ), nf = (
      /*                             */
      33554432
    ), rf = (
      /*                             */
      67108864
    ), ip = Ni, so = (
      /*          */
      134217728
    ), af = (
      /*                          */
      268435455
    ), co = (
      /*               */
      268435456
    ), _l = (
      /*                        */
      536870912
    ), Ar = (
      /*                   */
      1073741824
    );
    function Bg(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & ui)
          return "InputContinuousHydration";
        if (e & na)
          return "InputContinuous";
        if (e & iu)
          return "DefaultHydration";
        if (e & $t)
          return "Default";
        if (e & lu)
          return "TransitionHydration";
        if (e & El)
          return "Transition";
        if (e & cu)
          return "Retry";
        if (e & so)
          return "SelectiveHydration";
        if (e & co)
          return "IdleHydration";
        if (e & _l)
          return "Idle";
        if (e & Ar)
          return "Offscreen";
      }
    }
    var Ft = -1, lf = uu, uf = Ni;
    function fo(e) {
      switch (gn(e)) {
        case Ve:
          return Ve;
        case ui:
          return ui;
        case na:
          return na;
        case iu:
          return iu;
        case $t:
          return $t;
        case lu:
          return lu;
        case uu:
        case Ca:
        case zr:
        case ou:
        case Ts:
        case ws:
        case $c:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case su:
        case ef:
          return e & El;
        case Ni:
        case tf:
        case Rs:
        case nf:
        case rf:
          return e & cu;
        case so:
          return so;
        case co:
          return co;
        case _l:
          return _l;
        case Ar:
          return Ar;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function xs(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var l = $, o = e.suspendedLanes, d = e.pingedLanes, v = a & af;
      if (v !== $) {
        var g = v & ~o;
        if (g !== $)
          l = fo(g);
        else {
          var E = v & d;
          E !== $ && (l = fo(E));
        }
      } else {
        var T = a & ~o;
        T !== $ ? l = fo(T) : d !== $ && (l = fo(d));
      }
      if (l === $)
        return $;
      if (t !== $ && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === $) {
        var w = gn(l), N = gn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === $t && (N & El) !== $
        )
          return t;
      }
      (l & na) !== $ && (l |= a & $t);
      var O = e.entangledLanes;
      if (O !== $)
        for (var j = e.entanglements, Y = l & O; Y > 0; ) {
          var B = Cl(Y), _e = 1 << B;
          l |= j[B], Y &= ~_e;
        }
      return l;
    }
    function Gv(e, t) {
      for (var a = e.eventTimes, l = Ft; t > 0; ) {
        var o = Cl(t), d = 1 << o, v = a[o];
        v > l && (l = v), t &= ~d;
      }
      return l;
    }
    function of(e, t) {
      switch (e) {
        case Ve:
        case ui:
        case na:
          return t + 250;
        case iu:
        case $t:
        case lu:
        case uu:
        case Ca:
        case zr:
        case ou:
        case Ts:
        case ws:
        case $c:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case su:
        case ef:
          return t + 5e3;
        case Ni:
        case tf:
        case Rs:
        case nf:
        case rf:
          return Ft;
        case so:
        case co:
        case _l:
        case Ar:
          return Ft;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Ft;
      }
    }
    function Wg(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var g = Cl(v), E = 1 << g, T = d[g];
        T === Ft ? ((E & l) === $ || (E & o) !== $) && (d[g] = of(E, t)) : T <= t && (e.expiredLanes |= E), v &= ~E;
      }
    }
    function $g(e) {
      return fo(e.pendingLanes);
    }
    function lp(e) {
      var t = e.pendingLanes & ~Ar;
      return t !== $ ? t : t & Ar ? Ar : $;
    }
    function po(e) {
      return (e & Ve) !== $;
    }
    function Ds(e) {
      return (e & af) !== $;
    }
    function sf(e) {
      return (e & cu) === e;
    }
    function Gg(e) {
      var t = Ve | na | $t;
      return (e & t) === $;
    }
    function Qv(e) {
      return (e & El) === e;
    }
    function ks(e, t) {
      var a = ui | na | iu | $t;
      return (t & a) !== $;
    }
    function qv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function up(e) {
      return (e & El) !== $;
    }
    function op() {
      var e = lf;
      return lf <<= 1, (lf & El) === $ && (lf = uu), e;
    }
    function Qg() {
      var e = uf;
      return uf <<= 1, (uf & cu) === $ && (uf = Ni), e;
    }
    function gn(e) {
      return e & -e;
    }
    function Rn(e) {
      return gn(e);
    }
    function Cl(e) {
      return 31 - Bc(e);
    }
    function cf(e) {
      return Cl(e);
    }
    function Fr(e, t) {
      return (e & t) !== $;
    }
    function fu(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function ho(e, t) {
      return e & ~t;
    }
    function sp(e, t) {
      return e & t;
    }
    function Xv(e) {
      return e;
    }
    function Kv(e, t) {
      return e !== ft && e < t ? e : t;
    }
    function ff(e) {
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function du(e, t, a) {
      e.pendingLanes |= t, t !== _l && (e.suspendedLanes = $, e.pingedLanes = $);
      var l = e.eventTimes, o = cf(t);
      l[o] = a;
    }
    function cp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var o = Cl(l), d = 1 << o;
        a[o] = Ft, l &= ~d;
      }
    }
    function fp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function dp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, o = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var g = Cl(v), E = 1 << g;
        l[g] = $, o[g] = Ft, d[g] = Ft, v &= ~E;
      }
    }
    function vo(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, o = a; o; ) {
        var d = Cl(o), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[d] & t && (l[d] |= t), o &= ~v;
      }
    }
    function qg(e, t) {
      var a = gn(t), l;
      switch (a) {
        case na:
          l = ui;
          break;
        case $t:
          l = iu;
          break;
        case uu:
        case Ca:
        case zr:
        case ou:
        case Ts:
        case ws:
        case $c:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case su:
        case ef:
        case Ni:
        case tf:
        case Rs:
        case nf:
        case rf:
          l = lu;
          break;
        case _l:
          l = co;
          break;
        default:
          l = ft;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== ft ? ft : l;
    }
    function pp(e, t, a) {
      if (Wn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = cf(a), d = 1 << o, v = l[o];
          v.add(t), a &= ~d;
        }
    }
    function df(e, t) {
      if (Wn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var o = cf(t), d = 1 << o, v = a[o];
          v.size > 0 && (v.forEach(function(g) {
            var E = g.alternate;
            (E === null || !l.has(E)) && l.add(g);
          }), v.clear()), t &= ~d;
        }
    }
    function hp(e, t) {
      return null;
    }
    var or = Ve, $n = na, Ui = $t, bs = _l, pu = ft;
    function Ta() {
      return pu;
    }
    function xn(e) {
      pu = e;
    }
    function Os(e, t) {
      var a = pu;
      try {
        return pu = e, t();
      } finally {
        pu = a;
      }
    }
    function sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Xg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function vp(e, t) {
      return e !== 0 && e < t;
    }
    function Ms(e) {
      var t = gn(e);
      return vp(or, t) ? vp($n, t) ? Ds(t) ? Ui : bs : $n : or;
    }
    function Dn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Zv;
    function Te(e) {
      Zv = e;
    }
    function mo(e) {
      Zv(e);
    }
    var Ls;
    function Jv(e) {
      Ls = e;
    }
    var em;
    function Ns(e) {
      em = e;
    }
    var Us;
    function mp(e) {
      Us = e;
    }
    var yp;
    function tm(e) {
      yp = e;
    }
    var pf = !1, yo = [], oi = null, Kt = null, Hn = null, wa = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), zi = [], Ga = [
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
    function nm(e) {
      return Ga.indexOf(e) > -1;
    }
    function si(e, t, a, l, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [l]
      };
    }
    function rm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          oi = null;
          break;
        case "dragenter":
        case "dragleave":
          Kt = null;
          break;
        case "mouseover":
        case "mouseout":
          Hn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          wa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          go.delete(l);
          break;
        }
      }
    }
    function So(e, t, a, l, o, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = si(t, a, l, o, d);
        if (t !== null) {
          var g = Oo(t);
          g !== null && Ls(g);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var E = e.targetContainers;
      return o !== null && E.indexOf(o) === -1 && E.push(o), e;
    }
    function am(e, t, a, l, o) {
      switch (t) {
        case "focusin": {
          var d = o;
          return oi = So(oi, e, t, a, l, d), !0;
        }
        case "dragenter": {
          var v = o;
          return Kt = So(Kt, e, t, a, l, v), !0;
        }
        case "mouseover": {
          var g = o;
          return Hn = So(Hn, e, t, a, l, g), !0;
        }
        case "pointerover": {
          var E = o, T = E.pointerId;
          return wa.set(T, So(wa.get(T) || null, e, t, a, l, E)), !0;
        }
        case "gotpointercapture": {
          var w = o, N = w.pointerId;
          return go.set(N, So(go.get(N) || null, e, t, a, l, w)), !0;
        }
      }
      return !1;
    }
    function gp(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = Jr(t);
        if (a !== null) {
          var l = a.tag;
          if (l === ve) {
            var o = Gd(a);
            if (o !== null) {
              e.blockedOn = o, yp(e.priority, function() {
                em(a);
              });
              return;
            }
          } else if (l === U) {
            var d = a.stateNode;
            if (Dn(d)) {
              e.blockedOn = Uc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function im(e) {
      for (var t = Us(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < zi.length && vp(t, zi[l].priority); l++)
        ;
      zi.splice(l, 0, a), l === 0 && gp(a);
    }
    function hf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = hu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var o = e.nativeEvent, d = new o.constructor(o.type, o);
          ps(d), o.target.dispatchEvent(d), Yg();
        } else {
          var v = Oo(l);
          return v !== null && Ls(v), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function zs(e, t, a) {
      hf(e) && a.delete(t);
    }
    function Sp() {
      pf = !1, oi !== null && hf(oi) && (oi = null), Kt !== null && hf(Kt) && (Kt = null), Hn !== null && hf(Hn) && (Hn = null), wa.forEach(zs), go.forEach(zs);
    }
    function cr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Sp)));
    }
    function ot(e) {
      if (yo.length > 0) {
        cr(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      oi !== null && cr(oi, e), Kt !== null && cr(Kt, e), Hn !== null && cr(Hn, e);
      var l = function(g) {
        return cr(g, e);
      };
      wa.forEach(l), go.forEach(l);
      for (var o = 0; o < zi.length; o++) {
        var d = zi[o];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; zi.length > 0; ) {
        var v = zi[0];
        if (v.blockedOn !== null)
          break;
        gp(v), v.blockedOn === null && zi.shift();
      }
    }
    var tn = f.ReactCurrentBatchConfig, un = !0;
    function jn(e) {
      un = !!e;
    }
    function ra() {
      return un;
    }
    function Eo(e, t, a) {
      var l = mr(t), o;
      switch (l) {
        case or:
          o = kn;
          break;
        case $n:
          o = As;
          break;
        case Ui:
        default:
          o = Ai;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function kn(e, t, a, l) {
      var o = Ta(), d = tn.transition;
      tn.transition = null;
      try {
        xn(or), Ai(e, t, a, l);
      } finally {
        xn(o), tn.transition = d;
      }
    }
    function As(e, t, a, l) {
      var o = Ta(), d = tn.transition;
      tn.transition = null;
      try {
        xn($n), Ai(e, t, a, l);
      } finally {
        xn(o), tn.transition = d;
      }
    }
    function Ai(e, t, a, l) {
      un && vf(e, t, a, l);
    }
    function vf(e, t, a, l) {
      var o = hu(e, t, a, l);
      if (o === null) {
        mS(e, t, l, _o, a), rm(e, l);
        return;
      }
      if (am(o, e, t, a, l)) {
        l.stopPropagation();
        return;
      }
      if (rm(e, l), t & Xl && nm(e)) {
        for (; o !== null; ) {
          var d = Oo(o);
          d !== null && mo(d);
          var v = hu(e, t, a, l);
          if (v === null && mS(e, t, l, _o, a), v === o)
            break;
          o = v;
        }
        o !== null && l.stopPropagation();
        return;
      }
      mS(e, t, l, null, a);
    }
    var _o = null;
    function hu(e, t, a, l) {
      _o = null;
      var o = bc(l), d = Is(o);
      if (d !== null) {
        var v = Jr(d);
        if (v === null)
          d = null;
        else {
          var g = v.tag;
          if (g === ve) {
            var E = Gd(v);
            if (E !== null)
              return E;
            d = null;
          } else if (g === U) {
            var T = v.stateNode;
            if (Dn(T))
              return Uc(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return _o = d, null;
    }
    function mr(e) {
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
          return or;
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
          var t = Xd();
          switch (t) {
            case Hc:
              return or;
            case ta:
              return $n;
            case li:
            case jc:
              return Ui;
            case hl:
              return bs;
            default:
              return Ui;
          }
        }
        default:
          return Ui;
      }
    }
    function Ep(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Co(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Fi(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function mf(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var vu = null, ci = null, Tl = null;
    function wl(e) {
      return vu = e, ci = gf(), !0;
    }
    function yf() {
      vu = null, ci = null, Tl = null;
    }
    function To() {
      if (Tl)
        return Tl;
      var e, t = ci, a = t.length, l, o = gf(), d = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var v = a - e;
      for (l = 1; l <= v && t[a - l] === o[d - l]; l++)
        ;
      var g = l > 1 ? 1 - l : void 0;
      return Tl = o.slice(e, g), Tl;
    }
    function gf() {
      return "value" in vu ? vu.value : vu.textContent;
    }
    function mu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function yu() {
      return !0;
    }
    function fr() {
      return !1;
    }
    function Sn(e) {
      function t(a, l, o, d, v) {
        this._reactName = a, this._targetInst = o, this.type = l, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var E = e[g];
            E ? this[g] = E(d) : this[g] = d[g];
          }
        var T = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return T ? this.isDefaultPrevented = yu : this.isDefaultPrevented = fr, this.isPropagationStopped = fr, this;
      }
      return ut(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yu);
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
        isPersistent: yu
      }), t;
    }
    var dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, pr = Sn(dr), wo = ut({}, dr, {
      view: 0,
      detail: 0
    }), _p = Sn(wo), Fs, Cp, Ra;
    function lm(e) {
      e !== Ra && (Ra && e.type === "mousemove" ? (Fs = e.screenX - Ra.screenX, Cp = e.screenY - Ra.screenY) : (Fs = 0, Cp = 0), Ra = e);
    }
    var Ro = ut({}, wo, {
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
      getModifierState: _f,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (lm(e), Fs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Cp;
      }
    }), Rl = Sn(Ro), Tp = ut({}, Ro, {
      dataTransfer: 0
    }), gu = Sn(Tp), um = ut({}, wo, {
      relatedTarget: 0
    }), Sf = Sn(um), wp = ut({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ef = Sn(wp), Kg = ut({}, dr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zg = Sn(Kg), om = ut({}, dr, {
      data: 0
    }), Rp = Sn(om), Su = Rp, Jg = {
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
    }, xo = {
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
    function sm(e) {
      if (e.key) {
        var t = Jg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = mu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? xo[e.keyCode] || "Unidentified" : "";
    }
    var on = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function eS(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = on[e];
      return l ? !!a[l] : !1;
    }
    function _f(e) {
      return eS;
    }
    var tS = ut({}, wo, {
      key: sm,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _f,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? mu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), nS = Sn(tS), cm = ut({}, Ro, {
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
    }), xp = Sn(cm), rS = ut({}, wo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _f
    }), xa = Sn(rS), Dp = ut({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), aS = Sn(Dp), xl = ut({}, Ro, {
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
    }), Cf = Sn(xl), Eu = [9, 13, 27, 32], Hs = 229, js = Mn && "CompositionEvent" in window, _u = null;
    Mn && "documentMode" in document && (_u = document.documentMode);
    var iS = Mn && "TextEvent" in window && !_u, Tf = Mn && (!js || _u && _u > 8 && _u <= 11), fm = 32, kp = String.fromCharCode(fm);
    function dm() {
      Dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ys = !1;
    function wf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function bp(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function hm(e, t) {
      switch (e) {
        case "keyup":
          return Eu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Op(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Rf(e) {
      return e.locale === "ko";
    }
    var Hi = !1;
    function Mp(e, t, a, l, o) {
      var d, v;
      if (js ? d = pm(t) : Hi ? hm(t, l) && (d = "onCompositionEnd") : bp(t, l) && (d = "onCompositionStart"), !d)
        return null;
      Tf && !Rf(l) && (!Hi && d === "onCompositionStart" ? Hi = wl(o) : d === "onCompositionEnd" && Hi && (v = To()));
      var g = Sm(a, d);
      if (g.length > 0) {
        var E = new Rp(d, t, null, l, o);
        if (e.push({
          event: E,
          listeners: g
        }), v)
          E.data = v;
        else {
          var T = Op(l);
          T !== null && (E.data = T);
        }
      }
    }
    function xf(e, t) {
      switch (e) {
        case "compositionend":
          return Op(t);
        case "keypress":
          var a = t.which;
          return a !== fm ? null : (Ys = !0, kp);
        case "textInput":
          var l = t.data;
          return l === kp && Ys ? null : l;
        default:
          return null;
      }
    }
    function vm(e, t) {
      if (Hi) {
        if (e === "compositionend" || !js && hm(e, t)) {
          var a = To();
          return yf(), Hi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!wf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Tf && !Rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function lS(e, t, a, l, o) {
      var d;
      if (iS ? d = xf(t, l) : d = vm(t, l), !d)
        return null;
      var v = Sm(a, "onBeforeInput");
      if (v.length > 0) {
        var g = new Su("onBeforeInput", "beforeinput", null, l, o);
        e.push({
          event: g,
          listeners: v
        }), g.data = d;
      }
    }
    function Df(e, t, a, l, o, d, v) {
      Mp(e, t, a, l, o), lS(e, t, a, l, o);
    }
    var uS = {
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
    function Do(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!uS[e.type] : t === "textarea";
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
    function oS(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function kf() {
      Dr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      Oc(l);
      var o = Sm(t, "onChange");
      if (o.length > 0) {
        var d = new pr("onChange", "change", null, a, l);
        e.push({
          event: d,
          listeners: o
        });
      }
    }
    var r = null, u = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, u, e, bc(e)), jd(y, t);
    }
    function y(e) {
      p_(e, 0);
    }
    function C(e) {
      var t = Uf(e);
      if (tv(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var D = !1;
    Mn && (D = oS("input") && (!document.documentMode || document.documentMode > 9));
    function V(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", Z);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", Z), r = null, u = null);
    }
    function Z(e) {
      e.propertyName === "value" && C(u) && p(e);
    }
    function q(e, t, a) {
      e === "focusin" ? (X(), V(t, a)) : e === "focusout" && X();
    }
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(u);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ke(e, t) {
      if (e === "click")
        return C(t);
    }
    function dn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ll(e, "number", e.value);
    }
    function L(e, t, a, l, o, d, v) {
      var g = a ? Uf(a) : window, E, T;
      if (c(g) ? E = R : Do(g) ? D ? E = dn : (E = ge, T = q) : Re(g) && (E = ke), E) {
        var w = E(t, a);
        if (w) {
          n(e, w, l, o);
          return;
        }
      }
      T && T(t, g, a), t === "focusout" && z(g);
    }
    function H() {
      ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function re(e, t, a, l, o, d, v) {
      var g = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (g && !Lv(l)) {
        var T = l.relatedTarget || l.fromElement;
        if (T && (Is(T) || Wp(T)))
          return;
      }
      if (!(!E && !g)) {
        var w;
        if (o.window === o)
          w = o;
        else {
          var N = o.ownerDocument;
          N ? w = N.defaultView || N.parentWindow : w = window;
        }
        var O, j;
        if (E) {
          var Y = l.relatedTarget || l.toElement;
          if (O = a, j = Y ? Is(Y) : null, j !== null) {
            var B = Jr(j);
            (j !== B || j.tag !== Q && j.tag !== ne) && (j = null);
          }
        } else
          O = null, j = a;
        if (O !== j) {
          var _e = Rl, ze = "onMouseLeave", Oe = "onMouseEnter", pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = xp, ze = "onPointerLeave", Oe = "onPointerEnter", pt = "pointer");
          var st = O == null ? w : Uf(O), A = j == null ? w : Uf(j), W = new _e(ze, pt + "leave", O, l, o);
          W.target = st, W.relatedTarget = A;
          var F = null, J = Is(o);
          if (J === a) {
            var Ce = new _e(Oe, pt + "enter", j, l, o);
            Ce.target = A, Ce.relatedTarget = st, F = Ce;
          }
          Vx(e, W, F, O, j);
        }
      }
    }
    function be(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : be;
    function Le(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var d = a[o];
        if (!rr.call(t, d) || !xe(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function $e(e) {
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
    function mt(e, t) {
      for (var a = $e(e), l = 0, o = 0; a; ) {
        if (a.nodeType === Ri) {
          if (o = l + a.textContent.length, l <= t && o >= t)
            return {
              node: a,
              offset: t - l
            };
          l = o;
        }
        a = $e(Yn(a));
      }
    }
    function Dl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var o = l.anchorNode, d = l.anchorOffset, v = l.focusNode, g = l.focusOffset;
      try {
        o.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return sS(e, o, d, v, g);
    }
    function sS(e, t, a, l, o) {
      var d = 0, v = -1, g = -1, E = 0, T = 0, w = e, N = null;
      e:
        for (; ; ) {
          for (var O = null; w === t && (a === 0 || w.nodeType === Ri) && (v = d + a), w === l && (o === 0 || w.nodeType === Ri) && (g = d + o), w.nodeType === Ri && (d += w.nodeValue.length), (O = w.firstChild) !== null; )
            N = w, w = O;
          for (; ; ) {
            if (w === e)
              break e;
            if (N === t && ++E === a && (v = d), N === l && ++T === o && (g = d), (O = w.nextSibling) !== null)
              break;
            w = N, N = w.parentNode;
          }
          w = O;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function Tx(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var o = l.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), g = t.end === void 0 ? v : Math.min(t.end, d);
        if (!o.extend && v > g) {
          var E = g;
          g = v, v = E;
        }
        var T = mt(e, v), w = mt(e, g);
        if (T && w) {
          if (o.rangeCount === 1 && o.anchorNode === T.node && o.anchorOffset === T.offset && o.focusNode === w.node && o.focusOffset === w.offset)
            return;
          var N = a.createRange();
          N.setStart(T.node, T.offset), o.removeAllRanges(), v > g ? (o.addRange(N), o.extend(w.node, w.offset)) : (N.setEnd(w.node, w.offset), o.addRange(N));
        }
      }
    }
    function t_(e) {
      return e && e.nodeType === Ri;
    }
    function n_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : t_(e) ? !1 : t_(t) ? n_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function wx(e) {
      return e && e.ownerDocument && n_(e.ownerDocument.documentElement, e);
    }
    function Rx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function r_() {
      for (var e = window, t = mc(); t instanceof e.HTMLIFrameElement; ) {
        if (Rx(t))
          e = t.contentWindow;
        else
          return t;
        t = mc(e.document);
      }
      return t;
    }
    function cS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function xx() {
      var e = r_();
      return {
        focusedElem: e,
        selectionRange: cS(e) ? kx(e) : null
      };
    }
    function Dx(e) {
      var t = r_(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && wx(a)) {
        l !== null && cS(a) && bx(a, l);
        for (var o = [], d = a; d = d.parentNode; )
          d.nodeType === br && o.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < o.length; v++) {
          var g = o[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function kx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Dl(e), t || {
        start: 0,
        end: 0
      };
    }
    function bx(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : Tx(e, t);
    }
    var Ox = Mn && "documentMode" in document && document.documentMode <= 11;
    function Mx() {
      Dr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var bf = null, fS = null, Lp = null, dS = !1;
    function Lx(e) {
      if ("selectionStart" in e && cS(e))
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
    function Nx(e) {
      return e.window === e ? e.document : e.nodeType === Ia ? e : e.ownerDocument;
    }
    function a_(e, t, a) {
      var l = Nx(a);
      if (!(dS || bf == null || bf !== mc(l))) {
        var o = Lx(bf);
        if (!Lp || !Le(Lp, o)) {
          Lp = o;
          var d = Sm(fS, "onSelect");
          if (d.length > 0) {
            var v = new pr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: d
            }), v.target = bf;
          }
        }
      }
    }
    function Ux(e, t, a, l, o, d, v) {
      var g = a ? Uf(a) : window;
      switch (t) {
        case "focusin":
          (Do(g) || g.contentEditable === "true") && (bf = g, fS = a, Lp = null);
          break;
        case "focusout":
          bf = null, fS = null, Lp = null;
          break;
        case "mousedown":
          dS = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dS = !1, a_(e, l, o);
          break;
        case "selectionchange":
          if (Ox)
            break;
        case "keydown":
        case "keyup":
          a_(e, l, o);
      }
    }
    function mm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Of = {
      animationend: mm("Animation", "AnimationEnd"),
      animationiteration: mm("Animation", "AnimationIteration"),
      animationstart: mm("Animation", "AnimationStart"),
      transitionend: mm("Transition", "TransitionEnd")
    }, pS = {}, i_ = {};
    Mn && (i_ = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function ym(e) {
      if (pS[e])
        return pS[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in i_)
          return pS[e] = t[a];
      return e;
    }
    var l_ = ym("animationend"), u_ = ym("animationiteration"), o_ = ym("animationstart"), s_ = ym("transitionend"), c_ = /* @__PURE__ */ new Map(), f_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      c_.set(e, t), Dr(t, [e]);
    }
    function zx() {
      for (var e = 0; e < f_.length; e++) {
        var t = f_[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + l);
      }
      ko(l_, "onAnimationEnd"), ko(u_, "onAnimationIteration"), ko(o_, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(s_, "onTransitionEnd");
    }
    function Ax(e, t, a, l, o, d, v) {
      var g = c_.get(t);
      if (g !== void 0) {
        var E = pr, T = t;
        switch (t) {
          case "keypress":
            if (mu(l) === 0)
              return;
          case "keydown":
          case "keyup":
            E = nS;
            break;
          case "focusin":
            T = "focus", E = Sf;
            break;
          case "focusout":
            T = "blur", E = Sf;
            break;
          case "beforeblur":
          case "afterblur":
            E = Sf;
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
            E = Rl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = gu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = xa;
            break;
          case l_:
          case u_:
          case o_:
            E = Ef;
            break;
          case s_:
            E = aS;
            break;
          case "scroll":
            E = _p;
            break;
          case "wheel":
            E = Cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Zg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = xp;
            break;
        }
        var w = (d & Xl) !== 0;
        {
          var N = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = Yx(a, g, l.type, w, N);
          if (O.length > 0) {
            var j = new E(g, T, null, l, o);
            e.push({
              event: j,
              listeners: O
            });
          }
        }
      }
    }
    zx(), H(), kf(), Mx(), dm();
    function Fx(e, t, a, l, o, d, v) {
      Ax(e, t, a, l, o, d);
      var g = (d & jg) === 0;
      g && (re(e, t, a, l, o), L(e, t, a, l, o), Ux(e, t, a, l, o), Df(e, t, a, l, o));
    }
    var Np = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], hS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Np));
    function d_(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, bi(l, t, void 0, e), e.currentTarget = null;
    }
    function Hx(e, t, a) {
      var l;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var d = t[o], v = d.instance, g = d.currentTarget, E = d.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          d_(e, E, g), l = v;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var w = t[T], N = w.instance, O = w.currentTarget, j = w.listener;
          if (N !== l && e.isPropagationStopped())
            return;
          d_(e, j, O), l = N;
        }
    }
    function p_(e, t) {
      for (var a = (t & Xl) !== 0, l = 0; l < e.length; l++) {
        var o = e[l], d = o.event, v = o.listeners;
        Hx(d, v, a);
      }
      Id();
    }
    function jx(e, t, a, l, o) {
      var d = bc(a), v = [];
      Fx(v, e, l, a, d, t), p_(v, t);
    }
    function nn(e, t) {
      hS.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = vk(t), o = Ix(e, a);
      l.has(o) || (h_(t, e, fs, a), l.add(o));
    }
    function vS(e, t, a) {
      hS.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= Xl), h_(a, e, l, t);
    }
    var gm = "_reactListening" + Math.random().toString(36).slice(2);
    function Up(e) {
      if (!e[gm]) {
        e[gm] = !0, nr.forEach(function(a) {
          a !== "selectionchange" && (hS.has(a) || vS(a, !1, e), vS(a, !0, e));
        });
        var t = e.nodeType === Ia ? e : e.ownerDocument;
        t !== null && (t[gm] || (t[gm] = !0, vS("selectionchange", !1, t)));
      }
    }
    function h_(e, t, a, l, o) {
      var d = Eo(e, t, a), v = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Fi(e, t, d, v) : Co(e, t, d) : v !== void 0 ? mf(e, t, d, v) : Ep(e, t, d);
    }
    function v_(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function mS(e, t, a, l, o) {
      var d = l;
      if (!(t & Di) && !(t & fs)) {
        var v = o;
        if (l !== null) {
          var g = l;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var E = g.tag;
              if (E === U || E === I) {
                var T = g.stateNode.containerInfo;
                if (v_(T, v))
                  break;
                if (E === I)
                  for (var w = g.return; w !== null; ) {
                    var N = w.tag;
                    if (N === U || N === I) {
                      var O = w.stateNode.containerInfo;
                      if (v_(O, v))
                        return;
                    }
                    w = w.return;
                  }
                for (; T !== null; ) {
                  var j = Is(T);
                  if (j === null)
                    return;
                  var Y = j.tag;
                  if (Y === Q || Y === ne) {
                    g = d = j;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      jd(function() {
        return jx(e, t, a, d);
      });
    }
    function zp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Yx(e, t, a, l, o, d) {
      for (var v = t !== null ? t + "Capture" : null, g = l ? v : t, E = [], T = e, w = null; T !== null; ) {
        var N = T, O = N.stateNode, j = N.tag;
        if (j === Q && O !== null && (w = O, g !== null)) {
          var Y = Zl(T, g);
          Y != null && E.push(zp(T, Y, w));
        }
        if (o)
          break;
        T = T.return;
      }
      return E;
    }
    function Sm(e, t) {
      for (var a = t + "Capture", l = [], o = e; o !== null; ) {
        var d = o, v = d.stateNode, g = d.tag;
        if (g === Q && v !== null) {
          var E = v, T = Zl(o, a);
          T != null && l.unshift(zp(o, T, E));
          var w = Zl(o, t);
          w != null && l.push(zp(o, w, E));
        }
        o = o.return;
      }
      return l;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Q);
      return e || null;
    }
    function Px(e, t) {
      for (var a = e, l = t, o = 0, d = a; d; d = Mf(d))
        o++;
      for (var v = 0, g = l; g; g = Mf(g))
        v++;
      for (; o - v > 0; )
        a = Mf(a), o--;
      for (; v - o > 0; )
        l = Mf(l), v--;
      for (var E = o; E--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Mf(a), l = Mf(l);
      }
      return null;
    }
    function m_(e, t, a, l, o) {
      for (var d = t._reactName, v = [], g = a; g !== null && g !== l; ) {
        var E = g, T = E.alternate, w = E.stateNode, N = E.tag;
        if (T !== null && T === l)
          break;
        if (N === Q && w !== null) {
          var O = w;
          if (o) {
            var j = Zl(g, d);
            j != null && v.unshift(zp(g, j, O));
          } else if (!o) {
            var Y = Zl(g, d);
            Y != null && v.push(zp(g, Y, O));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function Vx(e, t, a, l, o) {
      var d = l && o ? Px(l, o) : null;
      l !== null && m_(e, t, l, d, !1), o !== null && a !== null && m_(e, a, o, d, !0);
    }
    function Ix(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Da = !1, Ap = "dangerouslySetInnerHTML", Em = "suppressContentEditableWarning", bo = "suppressHydrationWarning", y_ = "autoFocus", Ps = "children", Vs = "style", _m = "__html", yS, Cm, Fp, g_, Tm, S_, E_;
    yS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Cm = function(e, t) {
      kc(e, t), Ud(e, t), Mv(e, t, {
        registrationNameDependencies: xr,
        possibleRegistrationNames: ei
      });
    }, S_ = Mn && !document.documentMode, Fp = function(e, t, a) {
      if (!Da) {
        var l = wm(a), o = wm(t);
        o !== l && (Da = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(l)));
      }
    }, g_ = function(e) {
      if (!Da) {
        Da = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Tm = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, E_ = function(e, t) {
      var a = e.namespaceURI === wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Bx = /\r\n?/g, Wx = /\u0000|\uFFFD/g;
    function wm(e) {
      Aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Bx, `
`).replace(Wx, "");
    }
    function Rm(e, t, a, l) {
      var o = wm(t), d = wm(e);
      if (d !== o && (l && (Da || (Da = !0, S('Text content did not match. Server: "%s" Client: "%s"', d, o))), a && _n))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function __(e) {
      return e.nodeType === Ia ? e : e.ownerDocument;
    }
    function $x() {
    }
    function xm(e) {
      e.onclick = $x;
    }
    function Gx(e, t, a, l, o) {
      for (var d in l)
        if (l.hasOwnProperty(d)) {
          var v = l[d];
          if (d === Vs)
            v && Object.freeze(v), _v(t, v);
          else if (d === Ap) {
            var g = v ? v[_m] : void 0;
            g != null && cv(t, g);
          } else if (d === Ps)
            if (typeof v == "string") {
              var E = e !== "textarea" || v !== "";
              E && wc(t, v);
            } else
              typeof v == "number" && wc(t, "" + v);
          else
            d === Em || d === bo || d === y_ || (xr.hasOwnProperty(d) ? v != null && (typeof v != "function" && Tm(d, v), d === "onScroll" && nn("scroll", t)) : v != null && ri(t, d, v, o));
        }
    }
    function Qx(e, t, a, l) {
      for (var o = 0; o < t.length; o += 2) {
        var d = t[o], v = t[o + 1];
        d === Vs ? _v(e, v) : d === Ap ? cv(e, v) : d === Ps ? wc(e, v) : ri(e, d, v, l);
      }
    }
    function qx(e, t, a, l) {
      var o, d = __(a), v, g = l;
      if (g === wi && (g = Cc(e)), g === wi) {
        if (o = xi(e, t), !o && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = d.createElement("div");
          E.innerHTML = "<script><\/script>";
          var T = E.firstChild;
          v = E.removeChild(T);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var w = v;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        v = d.createElementNS(g, e);
      return g === wi && !o && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !rr.call(yS, e) && (yS[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Xx(e, t) {
      return __(t).createTextNode(e);
    }
    function Kx(e, t, a, l) {
      var o = xi(t, a);
      Cm(t, a);
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
          for (var v = 0; v < Np.length; v++)
            nn(Np[v], e);
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
          is(e, a), d = as(e, a), nn("invalid", e);
          break;
        case "option":
          Ec(e, a), d = a;
          break;
        case "select":
          lv(e, a), d = Td(e, a), nn("invalid", e);
          break;
        case "textarea":
          uv(e, a), d = Rd(e, a), nn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (xc(t, d), Gx(t, e, l, d, o), t) {
        case "input":
          Gl(e), ls(e, a, !1);
          break;
        case "textarea":
          Gl(e), sv(e);
          break;
        case "option":
          Cd(e, a);
          break;
        case "select":
          kg(e, a);
          break;
        default:
          typeof d.onClick == "function" && xm(e);
          break;
      }
    }
    function Zx(e, t, a, l, o) {
      Cm(t, l);
      var d = null, v, g;
      switch (t) {
        case "input":
          v = as(e, a), g = as(e, l), d = [];
          break;
        case "select":
          v = Td(e, a), g = Td(e, l), d = [];
          break;
        case "textarea":
          v = Rd(e, a), g = Rd(e, l), d = [];
          break;
        default:
          v = a, g = l, typeof v.onClick != "function" && typeof g.onClick == "function" && xm(e);
          break;
      }
      xc(t, g);
      var E, T, w = null;
      for (E in v)
        if (!(g.hasOwnProperty(E) || !v.hasOwnProperty(E) || v[E] == null))
          if (E === Vs) {
            var N = v[E];
            for (T in N)
              N.hasOwnProperty(T) && (w || (w = {}), w[T] = "");
          } else
            E === Ap || E === Ps || E === Em || E === bo || E === y_ || (xr.hasOwnProperty(E) ? d || (d = []) : (d = d || []).push(E, null));
      for (E in g) {
        var O = g[E], j = v != null ? v[E] : void 0;
        if (!(!g.hasOwnProperty(E) || O === j || O == null && j == null))
          if (E === Vs)
            if (O && Object.freeze(O), j) {
              for (T in j)
                j.hasOwnProperty(T) && (!O || !O.hasOwnProperty(T)) && (w || (w = {}), w[T] = "");
              for (T in O)
                O.hasOwnProperty(T) && j[T] !== O[T] && (w || (w = {}), w[T] = O[T]);
            } else
              w || (d || (d = []), d.push(E, w)), w = O;
          else if (E === Ap) {
            var Y = O ? O[_m] : void 0, B = j ? j[_m] : void 0;
            Y != null && B !== Y && (d = d || []).push(E, Y);
          } else
            E === Ps ? (typeof O == "string" || typeof O == "number") && (d = d || []).push(E, "" + O) : E === Em || E === bo || (xr.hasOwnProperty(E) ? (O != null && (typeof O != "function" && Tm(E, O), E === "onScroll" && nn("scroll", e)), !d && j !== O && (d = [])) : (d = d || []).push(E, O));
      }
      return w && (ss(w, g[Vs]), (d = d || []).push(Vs, w)), d;
    }
    function Jx(e, t, a, l, o) {
      a === "input" && o.type === "radio" && o.name != null && _d(e, o);
      var d = xi(a, l), v = xi(a, o);
      switch (Qx(e, t, d, v), a) {
        case "input":
          Xu(e, o);
          break;
        case "textarea":
          ov(e, o);
          break;
        case "select":
          bg(e, o);
          break;
      }
    }
    function eD(e) {
      {
        var t = e.toLowerCase();
        return Dc.hasOwnProperty(t) && Dc[t] || null;
      }
    }
    function tD(e, t, a, l, o, d, v) {
      var g, E;
      switch (g = xi(t, a), Cm(t, a), t) {
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
          for (var T = 0; T < Np.length; T++)
            nn(Np[T], e);
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
          is(e, a), nn("invalid", e);
          break;
        case "option":
          Ec(e, a);
          break;
        case "select":
          lv(e, a), nn("invalid", e);
          break;
        case "textarea":
          uv(e, a), nn("invalid", e);
          break;
      }
      xc(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var w = e.attributes, N = 0; N < w.length; N++) {
          var O = w[N].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(w[N].name);
          }
        }
      }
      var j = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var B = a[Y];
          if (Y === Ps)
            typeof B == "string" ? e.textContent !== B && (a[bo] !== !0 && Rm(e.textContent, B, d, v), j = [Ps, B]) : typeof B == "number" && e.textContent !== "" + B && (a[bo] !== !0 && Rm(e.textContent, B, d, v), j = [Ps, "" + B]);
          else if (xr.hasOwnProperty(Y))
            B != null && (typeof B != "function" && Tm(Y, B), Y === "onScroll" && nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var _e = void 0, ze = g && Vn ? null : qr(Y);
            if (a[bo] !== !0) {
              if (!(Y === Em || Y === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === Ap) {
                  var Oe = e.innerHTML, pt = B ? B[_m] : void 0;
                  if (pt != null) {
                    var st = E_(e, pt);
                    st !== Oe && Fp(Y, Oe, st);
                  }
                } else if (Y === Vs) {
                  if (E.delete(Y), S_) {
                    var A = Fg(B);
                    _e = e.getAttribute("style"), A !== _e && Fp(Y, _e, A);
                  }
                } else if (g && !Vn)
                  E.delete(Y.toLowerCase()), _e = $u(e, Y, B), B !== _e && Fp(Y, _e, B);
                else if (!cn(Y, ze, g) && !Ht(Y, B, ze, g)) {
                  var W = !1;
                  if (ze !== null)
                    E.delete(ze.attributeName), _e = Bl(e, Y, B, ze);
                  else {
                    var F = l;
                    if (F === wi && (F = Cc(t)), F === wi)
                      E.delete(Y.toLowerCase());
                    else {
                      var J = eD(Y);
                      J !== null && J !== Y && (W = !0, E.delete(J)), E.delete(Y);
                    }
                    _e = $u(e, Y, B);
                  }
                  var Ce = Vn;
                  !Ce && B !== _e && !W && Fp(Y, _e, B);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[bo] !== !0 && g_(E), t) {
        case "input":
          Gl(e), ls(e, a, !0);
          break;
        case "textarea":
          Gl(e), sv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && xm(e);
          break;
      }
      return j;
    }
    function nD(e, t, a) {
      var l = e.nodeValue !== t;
      return l;
    }
    function gS(e, t) {
      {
        if (Da)
          return;
        Da = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function SS(e, t) {
      {
        if (Da)
          return;
        Da = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ES(e, t, a) {
      {
        if (Da)
          return;
        Da = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function _S(e, t) {
      {
        if (t === "" || Da)
          return;
        Da = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function rD(e, t, a) {
      switch (t) {
        case "input":
          nv(e, a);
          return;
        case "textarea":
          xd(e, a);
          return;
        case "select":
          Og(e, a);
          return;
      }
    }
    var Hp = function() {
    }, jp = function() {
    };
    {
      var aD = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], C_ = [
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
      ], iD = C_.concat(["button"]), lD = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], T_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      jp = function(e, t) {
        var a = ut({}, e || T_), l = {
          tag: t
        };
        return C_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), iD.indexOf(t) !== -1 && (a.pTagInButtonScope = null), aD.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var uD = function(e, t) {
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
            return lD.indexOf(t) === -1;
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
      }, oD = function(e, t) {
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
      }, w_ = {};
      Hp = function(e, t, a) {
        a = a || T_;
        var l = a.current, o = l && l.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = uD(e, o) ? null : l, v = d ? null : oD(e, a), g = d || v;
        if (g) {
          var E = g.tag, T = !!d + "|" + e + "|" + E;
          if (!w_[T]) {
            w_[T] = !0;
            var w = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", d) {
              var O = "";
              E === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, E, N, O);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, E);
          }
        }
      };
    }
    var Dm = "suppressHydrationWarning", km = "$", bm = "/$", Yp = "$?", Pp = "$!", sD = "style", CS = null, TS = null;
    function cD(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case Ia:
        case Ql: {
          t = l === Ia ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : kd(null, "");
          break;
        }
        default: {
          var d = l === yn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = kd(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), E = jp(null, g);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function fD(e, t, a) {
      {
        var l = e, o = kd(l.namespace, t), d = jp(l.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: d
        };
      }
    }
    function zA(e) {
      return e;
    }
    function dD(e) {
      CS = ra(), TS = xx();
      var t = null;
      return jn(!1), t;
    }
    function pD(e) {
      Dx(TS), jn(CS), CS = null, TS = null;
    }
    function hD(e, t, a, l, o) {
      var d;
      {
        var v = l;
        if (Hp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, E = jp(v.ancestorInfo, e);
          Hp(null, g, E);
        }
        d = v.namespace;
      }
      var T = qx(e, t, a, d);
      return Bp(o, T), MS(T, t), T;
    }
    function vD(e, t) {
      e.appendChild(t);
    }
    function mD(e, t, a, l, o) {
      switch (Kx(e, t, a, l), t) {
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
    function yD(e, t, a, l, o, d) {
      {
        var v = d;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var g = "" + l.children, E = jp(v.ancestorInfo, t);
          Hp(null, g, E);
        }
      }
      return Zx(e, t, a, l);
    }
    function wS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function gD(e, t, a, l) {
      {
        var o = a;
        Hp(null, e, o.ancestorInfo);
      }
      var d = Xx(e, t);
      return Bp(l, d), d;
    }
    function SD() {
      var e = window.event;
      return e === void 0 ? Ui : mr(e.type);
    }
    var RS = typeof setTimeout == "function" ? setTimeout : void 0, ED = typeof clearTimeout == "function" ? clearTimeout : void 0, xS = -1, R_ = typeof Promise == "function" ? Promise : void 0, _D = typeof queueMicrotask == "function" ? queueMicrotask : typeof R_ < "u" ? function(e) {
      return R_.resolve(null).then(e).catch(CD);
    } : RS;
    function CD(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function TD(e, t, a, l) {
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
    function wD(e, t, a, l, o, d) {
      Jx(e, t, a, l, o), MS(e, o);
    }
    function x_(e) {
      wc(e, "");
    }
    function RD(e, t, a) {
      e.nodeValue = a;
    }
    function xD(e, t) {
      e.appendChild(t);
    }
    function DD(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && xm(a);
    }
    function kD(e, t, a) {
      e.insertBefore(t, a);
    }
    function bD(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function OD(e, t) {
      e.removeChild(t);
    }
    function MD(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function DS(e, t) {
      var a = t, l = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === yn) {
          var d = o.data;
          if (d === bm)
            if (l === 0) {
              e.removeChild(o), ot(t);
              return;
            } else
              l--;
          else
            (d === km || d === Yp || d === Pp) && l++;
        }
        a = o;
      } while (a);
      ot(t);
    }
    function LD(e, t) {
      e.nodeType === yn ? DS(e.parentNode, t) : e.nodeType === br && DS(e, t), ot(e);
    }
    function ND(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function UD(e) {
      e.nodeValue = "";
    }
    function zD(e, t) {
      e = e;
      var a = t[sD], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", l);
    }
    function AD(e, t) {
      e.nodeValue = t;
    }
    function FD(e) {
      e.nodeType === br ? e.textContent = "" : e.nodeType === Ia && e.documentElement && e.removeChild(e.documentElement);
    }
    function HD(e, t, a) {
      return e.nodeType !== br || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jD(e, t) {
      return t === "" || e.nodeType !== Ri ? null : e;
    }
    function YD(e) {
      return e.nodeType !== yn ? null : e;
    }
    function D_(e) {
      return e.data === Yp;
    }
    function kS(e) {
      return e.data === Pp;
    }
    function PD(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, o;
      return t && (a = t.dgst, l = t.msg, o = t.stck), {
        message: l,
        digest: a,
        stack: o
      };
    }
    function VD(e, t) {
      e._reactRetry = t;
    }
    function Om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === br || t === Ri)
          break;
        if (t === yn) {
          var a = e.data;
          if (a === km || a === Pp || a === Yp)
            break;
          if (a === bm)
            return null;
        }
      }
      return e;
    }
    function Vp(e) {
      return Om(e.nextSibling);
    }
    function ID(e) {
      return Om(e.firstChild);
    }
    function BD(e) {
      return Om(e.firstChild);
    }
    function WD(e) {
      return Om(e.nextSibling);
    }
    function $D(e, t, a, l, o, d, v) {
      Bp(d, e), MS(e, a);
      var g;
      {
        var E = o;
        g = E.namespace;
      }
      var T = (d.mode & rt) !== He;
      return tD(e, t, a, g, l, T, v);
    }
    function GD(e, t, a, l) {
      return Bp(a, e), a.mode & rt, nD(e, t);
    }
    function QD(e, t) {
      Bp(t, e);
    }
    function qD(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var l = t.data;
          if (l === bm) {
            if (a === 0)
              return Vp(t);
            a--;
          } else
            (l === km || l === Pp || l === Yp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function k_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var l = t.data;
          if (l === km || l === Pp || l === Yp) {
            if (a === 0)
              return t;
            a--;
          } else
            l === bm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function XD(e) {
      ot(e);
    }
    function KD(e) {
      ot(e);
    }
    function ZD(e) {
      return e !== "head" && e !== "body";
    }
    function JD(e, t, a, l) {
      var o = !0;
      Rm(t.nodeValue, a, l, o);
    }
    function ek(e, t, a, l, o, d) {
      if (t[Dm] !== !0) {
        var v = !0;
        Rm(l.nodeValue, o, d, v);
      }
    }
    function tk(e, t) {
      t.nodeType === br ? gS(e, t) : t.nodeType === yn || SS(e, t);
    }
    function nk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === br ? gS(a, t) : t.nodeType === yn || SS(a, t));
      }
    }
    function rk(e, t, a, l, o) {
      (o || t[Dm] !== !0) && (l.nodeType === br ? gS(a, l) : l.nodeType === yn || SS(a, l));
    }
    function ak(e, t, a) {
      ES(e, t);
    }
    function ik(e, t) {
      _S(e, t);
    }
    function lk(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && ES(l, t);
      }
    }
    function uk(e, t) {
      {
        var a = e.parentNode;
        a !== null && _S(a, t);
      }
    }
    function ok(e, t, a, l, o, d) {
      (d || t[Dm] !== !0) && ES(a, l);
    }
    function sk(e, t, a, l, o) {
      (o || t[Dm] !== !0) && _S(a, l);
    }
    function ck(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function fk(e) {
      Up(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, bS = "__reactProps$" + Lf, Ip = "__reactContainer$" + Lf, OS = "__reactEvents$" + Lf, dk = "__reactListeners$" + Lf, pk = "__reactHandles$" + Lf;
    function hk(e) {
      delete e[Nf], delete e[bS], delete e[OS], delete e[dk], delete e[pk];
    }
    function Bp(e, t) {
      t[Nf] = e;
    }
    function Mm(e, t) {
      t[Ip] = e;
    }
    function b_(e) {
      e[Ip] = null;
    }
    function Wp(e) {
      return !!e[Ip];
    }
    function Is(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ip] || a[Nf], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var o = k_(e); o !== null; ) {
              var d = o[Nf];
              if (d)
                return d;
              o = k_(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Oo(e) {
      var t = e[Nf] || e[Ip];
      return t && (t.tag === Q || t.tag === ne || t.tag === ve || t.tag === U) ? t : null;
    }
    function Uf(e) {
      if (e.tag === Q || e.tag === ne)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lm(e) {
      return e[bS] || null;
    }
    function MS(e, t) {
      e[bS] = t;
    }
    function vk(e) {
      var t = e[OS];
      return t === void 0 && (t = e[OS] = /* @__PURE__ */ new Set()), t;
    }
    var O_ = {}, M_ = f.ReactDebugCurrentFrame;
    function Nm(e) {
      if (e) {
        var t = e._owner, a = Zo(e.type, e._source, t ? t.type : null);
        M_.setExtraStackFrame(a);
      } else
        M_.setExtraStackFrame(null);
    }
    function ji(e, t, a, l, o) {
      {
        var d = Function.call.bind(rr);
        for (var v in e)
          if (d(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var E = Error((l || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              g = e[v](t, v, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (Nm(o), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, v, typeof g), Nm(null)), g instanceof Error && !(g.message in O_) && (O_[g.message] = !0, Nm(o), S("Failed %s type: %s", a, g.message), Nm(null));
          }
      }
    }
    var LS = [], Um;
    Um = [];
    var Cu = -1;
    function Mo(e) {
      return {
        current: e
      };
    }
    function Hr(e, t) {
      if (Cu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Um[Cu] && S("Unexpected Fiber popped."), e.current = LS[Cu], LS[Cu] = null, Um[Cu] = null, Cu--;
    }
    function jr(e, t, a) {
      Cu++, LS[Cu] = e.current, Um[Cu] = a, e.current = t;
    }
    var NS;
    NS = {};
    var Qa = {};
    Object.freeze(Qa);
    var Tu = Mo(Qa), kl = Mo(!1), US = Qa;
    function zf(e, t, a) {
      return a && bl(t) ? US : Tu.current;
    }
    function L_(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Af(e, t) {
      {
        var a = e.type, l = a.contextTypes;
        if (!l)
          return Qa;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in l)
          d[v] = t[v];
        {
          var g = qe(e) || "Unknown";
          ji(l, d, "context", g);
        }
        return o && L_(e, t, d), d;
      }
    }
    function zm() {
      return kl.current;
    }
    function bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Am(e) {
      Hr(kl, e), Hr(Tu, e);
    }
    function zS(e) {
      Hr(kl, e), Hr(Tu, e);
    }
    function N_(e, t, a) {
      {
        if (Tu.current !== Qa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        jr(Tu, t, e), jr(kl, a, e);
      }
    }
    function U_(e, t, a) {
      {
        var l = e.stateNode, o = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var d = qe(e) || "Unknown";
            NS[d] || (NS[d] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = l.getChildContext();
        for (var g in v)
          if (!(g in o))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var E = qe(e) || "Unknown";
          ji(o, v, "child context", E);
        }
        return ut({}, a, v);
      }
    }
    function Fm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Qa;
        return US = Tu.current, jr(Tu, a, e), jr(kl, kl.current, e), !0;
      }
    }
    function z_(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = U_(e, t, US);
          l.__reactInternalMemoizedMergedChildContext = o, Hr(kl, e), Hr(Tu, e), jr(Tu, o, e), jr(kl, a, e);
        } else
          Hr(kl, e), jr(kl, a, e);
      }
    }
    function mk(e) {
      {
        if (!Qd(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case M: {
              var a = t.type;
              if (bl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Hm = 1, wu = null, AS = !1, FS = !1;
    function A_(e) {
      wu === null ? wu = [e] : wu.push(e);
    }
    function yk(e) {
      AS = !0, A_(e);
    }
    function F_() {
      AS && No();
    }
    function No() {
      if (!FS && wu !== null) {
        FS = !0;
        var e = 0, t = Ta();
        try {
          var a = !0, l = wu;
          for (xn(or); e < l.length; e++) {
            var o = l[e];
            do
              o = o(a);
            while (o !== null);
          }
          wu = null, AS = !1;
        } catch (d) {
          throw wu !== null && (wu = wu.slice(e + 1)), Ac(Hc, No), d;
        } finally {
          xn(t), FS = !1;
        }
      }
      return null;
    }
    var Ff = [], Hf = 0, jm = null, Ym = 0, fi = [], di = 0, Bs = null, Ru = 1, xu = "";
    function gk(e) {
      return $s(), (e.flags & Wd) !== Ue;
    }
    function Sk(e) {
      return $s(), Ym;
    }
    function Ek() {
      var e = xu, t = Ru, a = t & ~_k(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      $s(), Ff[Hf++] = Ym, Ff[Hf++] = jm, jm = e, Ym = t;
    }
    function H_(e, t, a) {
      $s(), fi[di++] = Ru, fi[di++] = xu, fi[di++] = Bs, Bs = e;
      var l = Ru, o = xu, d = Pm(l) - 1, v = l & ~(1 << d), g = a + 1, E = Pm(t) + d;
      if (E > 30) {
        var T = d - d % 5, w = (1 << T) - 1, N = (v & w).toString(32), O = v >> T, j = d - T, Y = Pm(t) + j, B = g << j, _e = B | O, ze = N + o;
        Ru = 1 << Y | _e, xu = ze;
      } else {
        var Oe = g << d, pt = Oe | v, st = o;
        Ru = 1 << E | pt, xu = st;
      }
    }
    function HS(e) {
      $s();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        Ws(e, a), H_(e, a, l);
      }
    }
    function Pm(e) {
      return 32 - Bc(e);
    }
    function _k(e) {
      return 1 << Pm(e) - 1;
    }
    function jS(e) {
      for (; e === jm; )
        jm = Ff[--Hf], Ff[Hf] = null, Ym = Ff[--Hf], Ff[Hf] = null;
      for (; e === Bs; )
        Bs = fi[--di], fi[di] = null, xu = fi[--di], fi[di] = null, Ru = fi[--di], fi[di] = null;
    }
    function Ck() {
      return $s(), Bs !== null ? {
        id: Ru,
        overflow: xu
      } : null;
    }
    function Tk(e, t) {
      $s(), fi[di++] = Ru, fi[di++] = xu, fi[di++] = Bs, Ru = t.id, xu = t.overflow, Bs = e;
    }
    function $s() {
      gr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var yr = null, pi = null, Yi = !1, Gs = !1, Uo = null;
    function wk() {
      Yi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function j_() {
      Gs = !0;
    }
    function Rk() {
      return Gs;
    }
    function xk(e) {
      var t = e.stateNode.containerInfo;
      return pi = BD(t), yr = e, Yi = !0, Uo = null, Gs = !1, !0;
    }
    function Dk(e, t, a) {
      return pi = WD(t), yr = e, Yi = !0, Uo = null, Gs = !1, a !== null && Tk(e, a), !0;
    }
    function Y_(e, t) {
      switch (e.tag) {
        case U: {
          tk(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & rt) !== He;
          rk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ve: {
          var l = e.memoizedState;
          l.dehydrated !== null && nk(l.dehydrated, t);
          break;
        }
      }
    }
    function P_(e, t) {
      Y_(e, t);
      var a = OM();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Tt) : l.push(a);
    }
    function YS(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var l = t.type;
                t.pendingProps, ak(a, l);
                break;
              case ne:
                var o = t.pendingProps;
                ik(a, o);
                break;
            }
            break;
          }
          case Q: {
            var d = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case Q: {
                var E = t.type, T = t.pendingProps, w = (e.mode & rt) !== He;
                ok(
                  d,
                  v,
                  g,
                  E,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case ne: {
                var N = t.pendingProps, O = (e.mode & rt) !== He;
                sk(
                  d,
                  v,
                  g,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case ve: {
            var j = e.memoizedState, Y = j.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case Q:
                  var B = t.type;
                  t.pendingProps, lk(Y, B);
                  break;
                case ne:
                  var _e = t.pendingProps;
                  uk(Y, _e);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function V_(e, t) {
      t.flags = t.flags & ~ga | It, YS(e, t);
    }
    function I_(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var l = HD(t, a);
          return l !== null ? (e.stateNode = l, yr = e, pi = ID(l), !0) : !1;
        }
        case ne: {
          var o = e.pendingProps, d = jD(t, o);
          return d !== null ? (e.stateNode = d, yr = e, pi = null, !0) : !1;
        }
        case ve: {
          var v = YD(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: Ck(),
              retryLane: Ar
            };
            e.memoizedState = g;
            var E = MM(v);
            return E.return = e, e.child = E, yr = e, pi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function PS(e) {
      return (e.mode & rt) !== He && (e.flags & We) === Ue;
    }
    function VS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function IS(e) {
      if (Yi) {
        var t = pi;
        if (!t) {
          PS(e) && (YS(yr, e), VS()), V_(yr, e), Yi = !1, yr = e;
          return;
        }
        var a = t;
        if (!I_(e, t)) {
          PS(e) && (YS(yr, e), VS()), t = Vp(a);
          var l = yr;
          if (!t || !I_(e, t)) {
            V_(yr, e), Yi = !1, yr = e;
            return;
          }
          P_(l, a);
        }
      }
    }
    function kk(e, t, a) {
      var l = e.stateNode, o = !Gs, d = $D(l, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = d, d !== null;
    }
    function bk(e) {
      var t = e.stateNode, a = e.memoizedProps, l = GD(t, a, e);
      if (l) {
        var o = yr;
        if (o !== null)
          switch (o.tag) {
            case U: {
              var d = o.stateNode.containerInfo, v = (o.mode & rt) !== He;
              JD(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Q: {
              var g = o.type, E = o.memoizedProps, T = o.stateNode, w = (o.mode & rt) !== He;
              ek(
                g,
                E,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return l;
    }
    function Ok(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      QD(a, e);
    }
    function Mk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return qD(a);
    }
    function B_(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== U && t.tag !== ve; )
        t = t.return;
      yr = t;
    }
    function Vm(e) {
      if (e !== yr)
        return !1;
      if (!Yi)
        return B_(e), Yi = !0, !1;
      if (e.tag !== U && (e.tag !== Q || ZD(e.type) && !wS(e.type, e.memoizedProps))) {
        var t = pi;
        if (t)
          if (PS(e))
            W_(e), VS();
          else
            for (; t; )
              P_(e, t), t = Vp(t);
      }
      return B_(e), e.tag === ve ? pi = Mk(e) : pi = yr ? Vp(e.stateNode) : null, !0;
    }
    function Lk() {
      return Yi && pi !== null;
    }
    function W_(e) {
      for (var t = pi; t; )
        Y_(e, t), t = Vp(t);
    }
    function jf() {
      yr = null, pi = null, Yi = !1, Gs = !1;
    }
    function $_() {
      Uo !== null && (YT(Uo), Uo = null);
    }
    function gr() {
      return Yi;
    }
    function BS(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var Nk = f.ReactCurrentBatchConfig, Uk = null;
    function zk() {
      return Nk.transition;
    }
    var Pi = {
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
      var Ak = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, Qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, $p = [], Gp = [], Qp = [], qp = [], Xp = [], Kp = [], qs = /* @__PURE__ */ new Set();
      Pi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Gp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qp.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && qp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Kp.push(e));
      }, Pi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(O) {
          e.add(qe(O) || "Component"), qs.add(O.type);
        }), $p = []);
        var t = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(O) {
          t.add(qe(O) || "Component"), qs.add(O.type);
        }), Gp = []);
        var a = /* @__PURE__ */ new Set();
        Qp.length > 0 && (Qp.forEach(function(O) {
          a.add(qe(O) || "Component"), qs.add(O.type);
        }), Qp = []);
        var l = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(O) {
          l.add(qe(O) || "Component"), qs.add(O.type);
        }), qp = []);
        var o = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          o.add(qe(O) || "Component"), qs.add(O.type);
        }), Xp = []);
        var d = /* @__PURE__ */ new Set();
        if (Kp.length > 0 && (Kp.forEach(function(O) {
          d.add(qe(O) || "Component"), qs.add(O.type);
        }), Kp = []), t.size > 0) {
          var v = Qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var g = Qs(l);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (d.size > 0) {
          var E = Qs(d);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var T = Qs(e);
          _(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var w = Qs(a);
          _(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (o.size > 0) {
          var N = Qs(o);
          _(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var Im = /* @__PURE__ */ new Map(), G_ = /* @__PURE__ */ new Set();
      Pi.recordLegacyContextWarning = function(e, t) {
        var a = Ak(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!G_.has(e.type)) {
          var l = Im.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Im.set(a, l)), l.push(e));
        }
      }, Pi.flushLegacyContextWarning = function() {
        Im.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              l.add(qe(d) || "Component"), G_.add(d.type);
            });
            var o = Qs(l);
            try {
              Mt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Tn();
            }
          }
        });
      }, Pi.discardPendingWarnings = function() {
        $p = [], Gp = [], Qp = [], qp = [], Xp = [], Kp = [], Im = /* @__PURE__ */ new Map();
      };
    }
    function Vi(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), l = e.defaultProps;
        for (var o in l)
          a[o] === void 0 && (a[o] = l[o]);
        return a;
      }
      return t;
    }
    var WS = Mo(null), $S;
    $S = {};
    var Bm = null, Yf = null, GS = null, Wm = !1;
    function $m() {
      Bm = null, Yf = null, GS = null, Wm = !1;
    }
    function Q_() {
      Wm = !0;
    }
    function q_() {
      Wm = !1;
    }
    function X_(e, t, a) {
      jr(WS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $S && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = $S;
    }
    function QS(e, t) {
      var a = WS.current;
      Hr(WS, t), e._currentValue = a;
    }
    function qS(e, t, a) {
      for (var l = e; l !== null; ) {
        var o = l.alternate;
        if (fu(l.childLanes, t) ? o !== null && !fu(o.childLanes, t) && (o.childLanes = Ke(o.childLanes, t)) : (l.childLanes = Ke(l.childLanes, t), o !== null && (o.childLanes = Ke(o.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Fk(e, t, a) {
      Hk(e, t, a);
    }
    function Hk(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var o = void 0, d = l.dependencies;
        if (d !== null) {
          o = l.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === M) {
                var g = Rn(a), E = Du(Ft, g);
                E.tag = Qm;
                var T = l.updateQueue;
                if (T !== null) {
                  var w = T.shared, N = w.pending;
                  N === null ? E.next = E : (E.next = N.next, N.next = E), w.pending = E;
                }
              }
              l.lanes = Ke(l.lanes, a);
              var O = l.alternate;
              O !== null && (O.lanes = Ke(O.lanes, a)), qS(l.return, a, e), d.lanes = Ke(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === ie)
          o = l.type === e.type ? null : l.child;
        else if (l.tag === lt) {
          var j = l.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = Ke(j.lanes, a);
          var Y = j.alternate;
          Y !== null && (Y.lanes = Ke(Y.lanes, a)), qS(j, a, e), o = l.sibling;
        } else
          o = l.child;
        if (o !== null)
          o.return = l;
        else
          for (o = l; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var B = o.sibling;
            if (B !== null) {
              B.return = o.return, o = B;
              break;
            }
            o = o.return;
          }
        l = o;
      }
    }
    function Pf(e, t) {
      Bm = e, Yf = null, GS = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Fr(a.lanes, t) && fh(), a.firstContext = null);
      }
    }
    function Pn(e) {
      Wm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (GS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Yf === null) {
          if (Bm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Yf = a, Bm.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Yf = Yf.next = a;
      }
      return t;
    }
    var Xs = null;
    function XS(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function jk() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var l = a.next, o = t.pending;
            if (o !== null) {
              var d = o.next;
              o.next = l, a.next = d;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function K_(e, t, a, l) {
      var o = t.interleaved;
      return o === null ? (a.next = a, XS(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Gm(e, l);
    }
    function Yk(e, t, a, l) {
      var o = t.interleaved;
      o === null ? (a.next = a, XS(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Pk(e, t, a, l) {
      var o = t.interleaved;
      return o === null ? (a.next = a, XS(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Gm(e, l);
    }
    function ka(e, t) {
      return Gm(e, t);
    }
    var Vk = Gm;
    function Gm(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (It | ga)) !== Ue && ZT(e);
      for (var l = e, o = e.return; o !== null; )
        o.childLanes = Ke(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (o.flags & (It | ga)) !== Ue && ZT(e), l = o, o = o.return;
      if (l.tag === U) {
        var d = l.stateNode;
        return d;
      } else
        return null;
    }
    var Z_ = 0, J_ = 1, Qm = 2, KS = 3, qm = !1, ZS, Xm;
    ZS = !1, Xm = null;
    function JS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function eC(e, t) {
      var a = t.updateQueue, l = e.updateQueue;
      if (a === l) {
        var o = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = o;
      }
    }
    function Du(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Z_,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var o = l.shared;
      if (Xm === o && !ZS && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ZS = !0), VO()) {
        var d = o.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, Vk(e, a);
      } else
        return Pk(e, o, t, a);
    }
    function Km(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var o = l.shared;
        if (up(a)) {
          var d = o.lanes;
          d = sp(d, e.pendingLanes);
          var v = Ke(d, a);
          o.lanes = v, vo(e, v);
        }
      }
    }
    function e0(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var o = l.updateQueue;
        if (a === o) {
          var d = null, v = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var E = g;
            do {
              var T = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              v === null ? d = v = T : (v.next = T, v = T), E = E.next;
            } while (E !== null);
            v === null ? d = v = t : (v.next = t, v = t);
          } else
            d = v = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: v,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function Ik(e, t, a, l, o, d) {
      switch (a.tag) {
        case J_: {
          var v = a.payload;
          if (typeof v == "function") {
            Q_();
            var g = v.call(d, l, o);
            {
              if (e.mode & en) {
                wn(!0);
                try {
                  v.call(d, l, o);
                } finally {
                  wn(!1);
                }
              }
              q_();
            }
            return g;
          }
          return v;
        }
        case KS:
          e.flags = e.flags & ~An | We;
        case Z_: {
          var E = a.payload, T;
          if (typeof E == "function") {
            Q_(), T = E.call(d, l, o);
            {
              if (e.mode & en) {
                wn(!0);
                try {
                  E.call(d, l, o);
                } finally {
                  wn(!1);
                }
              }
              q_();
            }
          } else
            T = E;
          return T == null ? l : ut({}, l, T);
        }
        case Qm:
          return qm = !0, l;
      }
      return l;
    }
    function Zm(e, t, a, l) {
      var o = e.updateQueue;
      qm = !1, Xm = o.shared;
      var d = o.firstBaseUpdate, v = o.lastBaseUpdate, g = o.shared.pending;
      if (g !== null) {
        o.shared.pending = null;
        var E = g, T = E.next;
        E.next = null, v === null ? d = T : v.next = T, v = E;
        var w = e.alternate;
        if (w !== null) {
          var N = w.updateQueue, O = N.lastBaseUpdate;
          O !== v && (O === null ? N.firstBaseUpdate = T : O.next = T, N.lastBaseUpdate = E);
        }
      }
      if (d !== null) {
        var j = o.baseState, Y = $, B = null, _e = null, ze = null, Oe = d;
        do {
          var pt = Oe.lane, st = Oe.eventTime;
          if (fu(l, pt)) {
            if (ze !== null) {
              var W = {
                eventTime: st,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ft,
                tag: Oe.tag,
                payload: Oe.payload,
                callback: Oe.callback,
                next: null
              };
              ze = ze.next = W;
            }
            j = Ik(e, o, Oe, j, t, a);
            var F = Oe.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Oe.lane !== ft) {
              e.flags |= ii;
              var J = o.effects;
              J === null ? o.effects = [Oe] : J.push(Oe);
            }
          } else {
            var A = {
              eventTime: st,
              lane: pt,
              tag: Oe.tag,
              payload: Oe.payload,
              callback: Oe.callback,
              next: null
            };
            ze === null ? (_e = ze = A, B = j) : ze = ze.next = A, Y = Ke(Y, pt);
          }
          if (Oe = Oe.next, Oe === null) {
            if (g = o.shared.pending, g === null)
              break;
            var Ce = g, me = Ce.next;
            Ce.next = null, Oe = me, o.lastBaseUpdate = Ce, o.shared.pending = null;
          }
        } while (!0);
        ze === null && (B = j), o.baseState = B, o.firstBaseUpdate = _e, o.lastBaseUpdate = ze;
        var Be = o.shared.interleaved;
        if (Be !== null) {
          var Qe = Be;
          do
            Y = Ke(Y, Qe.lane), Qe = Qe.next;
          while (Qe !== Be);
        } else
          d === null && (o.shared.lanes = $);
        Th(Y), e.lanes = Y, e.memoizedState = j;
      }
      Xm = null;
    }
    function Bk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function tC() {
      qm = !1;
    }
    function Jm() {
      return qm;
    }
    function nC(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var o = 0; o < l.length; o++) {
          var d = l[o], v = d.callback;
          v !== null && (d.callback = null, Bk(v, a));
        }
    }
    var t0 = {}, rC = new i.Component().refs, n0, r0, a0, i0, l0, aC, ey, u0, o0, s0;
    {
      n0 = /* @__PURE__ */ new Set(), r0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), i0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set(), o0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set();
      var iC = /* @__PURE__ */ new Set();
      ey = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iC.has(a) || (iC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aC = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          l0.has(a) || (l0.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(t0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(t0);
    }
    function c0(e, t, a, l) {
      var o = e.memoizedState, d = a(l, o);
      {
        if (e.mode & en) {
          wn(!0);
          try {
            d = a(l, o);
          } finally {
            wn(!1);
          }
        }
        aC(t, d);
      }
      var v = d == null ? o : ut({}, o, d);
      if (e.memoizedState = v, e.lanes === $) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var f0 = {
      isMounted: ea,
      enqueueSetState: function(e, t, a) {
        var l = ma(e), o = la(), d = Io(l), v = Du(o, d);
        v.payload = t, a != null && (ey(a, "setState"), v.callback = a);
        var g = zo(l, v, d);
        g !== null && (er(g, l, d, o), Km(g, l, d)), Sl(l, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = ma(e), o = la(), d = Io(l), v = Du(o, d);
        v.tag = J_, v.payload = t, a != null && (ey(a, "replaceState"), v.callback = a);
        var g = zo(l, v, d);
        g !== null && (er(g, l, d, o), Km(g, l, d)), Sl(l, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ma(e), l = la(), o = Io(a), d = Du(l, o);
        d.tag = Qm, t != null && (ey(t, "forceUpdate"), d.callback = t);
        var v = zo(a, d, o);
        v !== null && (er(v, a, o, l), Km(v, a, o)), rp(a, o);
      }
    };
    function lC(e, t, a, l, o, d, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var E = g.shouldComponentUpdate(l, d, v);
        {
          if (e.mode & en) {
            wn(!0);
            try {
              E = g.shouldComponentUpdate(l, d, v);
            } finally {
              wn(!1);
            }
          }
          E === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, l) || !Le(o, d) : !0;
    }
    function Wk(e, t, a) {
      var l = e.stateNode;
      {
        var o = zt(t) || "Component", d = l.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), l.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), l.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), l.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !o0.has(t) && (o0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof l.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof l.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof l.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof l.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var v = l.props !== a;
        l.props !== void 0 && v && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), l.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !a0.has(t) && (a0.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof l.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof l.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var g = l.state;
        g && (typeof g != "object" || Un(g)) && S("%s.state: must be set to an object or null", o), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function uC(e, t) {
      t.updater = f0, e.stateNode = t, ao(t, e), t._reactInternalInstance = t0;
    }
    function oC(e, t, a) {
      var l = !1, o = Qa, d = Qa, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === pe && v._context === void 0
        );
        if (!g && !s0.has(t)) {
          s0.add(t);
          var E = "";
          v === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? E = " However, it is set to a " + typeof v + "." : v.$$typeof === K ? E = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", E);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Pn(v);
      else {
        o = zf(e, t, !0);
        var T = t.contextTypes;
        l = T != null, d = l ? Af(e, o) : Qa;
      }
      var w = new t(a, d);
      if (e.mode & en) {
        wn(!0);
        try {
          w = new t(a, d);
        } finally {
          wn(!1);
        }
      }
      var N = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      uC(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var O = zt(t) || "Component";
          r0.has(O) || (r0.add(O), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, w.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var j = null, Y = null, B = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? B = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (B = "UNSAFE_componentWillUpdate"), j !== null || Y !== null || B !== null) {
            var _e = zt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            i0.has(_e) || (i0.add(_e), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, ze, j !== null ? `
  ` + j : "", Y !== null ? `
  ` + Y : "", B !== null ? `
  ` + B : ""));
          }
        }
      }
      return l && L_(e, o, d), w;
    }
    function $k(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), f0.enqueueReplaceState(t, t.state, null));
    }
    function sC(e, t, a, l) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== o) {
        {
          var d = qe(e) || "Component";
          n0.has(d) || (n0.add(d), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        f0.enqueueReplaceState(t, t.state, null);
      }
    }
    function d0(e, t, a, l) {
      Wk(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = rC, JS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        o.context = Pn(d);
      else {
        var v = zf(e, t, !0);
        o.context = Af(e, v);
      }
      {
        if (o.state === a) {
          var g = zt(t) || "Component";
          u0.has(g) || (u0.add(g), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & en && Pi.recordLegacyContextWarning(e, o), Pi.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (c0(e, t, E, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && ($k(e, o), Zm(e, a, o, l), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var T = Xe;
        T |= Mr, (e.mode & _a) !== He && (T |= Lr), e.flags |= T;
      }
    }
    function Gk(e, t, a, l) {
      var o = e.stateNode, d = e.memoizedProps;
      o.props = d;
      var v = o.context, g = t.contextType, E = Qa;
      if (typeof g == "object" && g !== null)
        E = Pn(g);
      else {
        var T = zf(e, t, !0);
        E = Af(e, T);
      }
      var w = t.getDerivedStateFromProps, N = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !N && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (d !== a || v !== E) && sC(e, o, a, E), tC();
      var O = e.memoizedState, j = o.state = O;
      if (Zm(e, a, o, l), j = e.memoizedState, d === a && O === j && !zm() && !Jm()) {
        if (typeof o.componentDidMount == "function") {
          var Y = Xe;
          Y |= Mr, (e.mode & _a) !== He && (Y |= Lr), e.flags |= Y;
        }
        return !1;
      }
      typeof w == "function" && (c0(e, t, w, a), j = e.memoizedState);
      var B = Jm() || lC(e, t, d, a, O, j, E);
      if (B) {
        if (!N && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var _e = Xe;
          _e |= Mr, (e.mode & _a) !== He && (_e |= Lr), e.flags |= _e;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var ze = Xe;
          ze |= Mr, (e.mode & _a) !== He && (ze |= Lr), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return o.props = a, o.state = j, o.context = E, B;
    }
    function Qk(e, t, a, l, o) {
      var d = t.stateNode;
      eC(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : Vi(t.type, v);
      d.props = g;
      var E = t.pendingProps, T = d.context, w = a.contextType, N = Qa;
      if (typeof w == "object" && w !== null)
        N = Pn(w);
      else {
        var O = zf(t, a, !0);
        N = Af(t, O);
      }
      var j = a.getDerivedStateFromProps, Y = typeof j == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !Y && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== E || T !== N) && sC(t, d, l, N), tC();
      var B = t.memoizedState, _e = d.state = B;
      if (Zm(t, l, d, o), _e = t.memoizedState, v === E && B === _e && !zm() && !Jm() && !Ae)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= ya), !1;
      typeof j == "function" && (c0(t, a, j, l), _e = t.memoizedState);
      var ze = Jm() || lC(t, a, g, l, B, _e, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return ze ? (!Y && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, _e, N), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, _e, N)), typeof d.componentDidUpdate == "function" && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= ya)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= ya), t.memoizedProps = l, t.memoizedState = _e), d.props = l, d.state = _e, d.context = N, ze;
    }
    var p0, h0, v0, m0, y0, cC = function(e, t) {
    };
    p0 = !1, h0 = !1, v0 = {}, m0 = {}, y0 = {}, cC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        m0[a] || (m0[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Zp(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & en || hr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = qe(e) || "Component";
          v0[o] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), v0[o] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var g = d;
            if (g.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = g.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = v;
          _i(l, "ref");
          var T = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var w = function(N) {
            var O = E.refs;
            O === rC && (O = E.refs = {}), N === null ? delete O[T] : O[T] = N;
          };
          return w._stringRef = T, w;
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
    function ty(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ny(e) {
      {
        var t = qe(e) || "Component";
        if (y0[t])
          return;
        y0[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dC(e) {
      function t(A, W) {
        if (e) {
          var F = A.deletions;
          F === null ? (A.deletions = [W], A.flags |= Tt) : F.push(W);
        }
      }
      function a(A, W) {
        if (!e)
          return null;
        for (var F = W; F !== null; )
          t(A, F), F = F.sibling;
        return null;
      }
      function l(A, W) {
        for (var F = /* @__PURE__ */ new Map(), J = W; J !== null; )
          J.key !== null ? F.set(J.key, J) : F.set(J.index, J), J = J.sibling;
        return F;
      }
      function o(A, W) {
        var F = ac(A, W);
        return F.index = 0, F.sibling = null, F;
      }
      function d(A, W, F) {
        if (A.index = F, !e)
          return A.flags |= Wd, W;
        var J = A.alternate;
        if (J !== null) {
          var Ce = J.index;
          return Ce < W ? (A.flags |= It, W) : Ce;
        } else
          return A.flags |= It, W;
      }
      function v(A) {
        return e && A.alternate === null && (A.flags |= It), A;
      }
      function g(A, W, F, J) {
        if (W === null || W.tag !== ne) {
          var Ce = B1(F, A.mode, J);
          return Ce.return = A, Ce;
        } else {
          var me = o(W, F);
          return me.return = A, me;
        }
      }
      function E(A, W, F, J) {
        var Ce = F.type;
        if (Ce === ja)
          return w(A, W, F.props.children, J, F.key);
        if (W !== null && (W.elementType === Ce || // Keep this check inline so it only runs on the false path:
        nw(W, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ye && fC(Ce) === W.type)) {
          var me = o(W, F.props);
          return me.ref = Zp(A, W, F), me.return = A, me._debugSource = F._source, me._debugOwner = F._owner, me;
        }
        var Be = I1(F, A.mode, J);
        return Be.ref = Zp(A, W, F), Be.return = A, Be;
      }
      function T(A, W, F, J) {
        if (W === null || W.tag !== I || W.stateNode.containerInfo !== F.containerInfo || W.stateNode.implementation !== F.implementation) {
          var Ce = W1(F, A.mode, J);
          return Ce.return = A, Ce;
        } else {
          var me = o(W, F.children || []);
          return me.return = A, me;
        }
      }
      function w(A, W, F, J, Ce) {
        if (W === null || W.tag !== ae) {
          var me = Wo(F, A.mode, J, Ce);
          return me.return = A, me;
        } else {
          var Be = o(W, F);
          return Be.return = A, Be;
        }
      }
      function N(A, W, F) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var J = B1("" + W, A.mode, F);
          return J.return = A, J;
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case tl: {
              var Ce = I1(W, A.mode, F);
              return Ce.ref = Zp(A, null, W), Ce.return = A, Ce;
            }
            case Xr: {
              var me = W1(W, A.mode, F);
              return me.return = A, me;
            }
            case Ye: {
              var Be = W._payload, Qe = W._init;
              return N(A, Qe(Be), F);
            }
          }
          if (Un(W) || Ci(W)) {
            var Nt = Wo(W, A.mode, F, null);
            return Nt.return = A, Nt;
          }
          ty(A, W);
        }
        return typeof W == "function" && ny(A), null;
      }
      function O(A, W, F, J) {
        var Ce = W !== null ? W.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return Ce !== null ? null : g(A, W, "" + F, J);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case tl:
              return F.key === Ce ? E(A, W, F, J) : null;
            case Xr:
              return F.key === Ce ? T(A, W, F, J) : null;
            case Ye: {
              var me = F._payload, Be = F._init;
              return O(A, W, Be(me), J);
            }
          }
          if (Un(F) || Ci(F))
            return Ce !== null ? null : w(A, W, F, J, null);
          ty(A, F);
        }
        return typeof F == "function" && ny(A), null;
      }
      function j(A, W, F, J, Ce) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var me = A.get(F) || null;
          return g(W, me, "" + J, Ce);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case tl: {
              var Be = A.get(J.key === null ? F : J.key) || null;
              return E(W, Be, J, Ce);
            }
            case Xr: {
              var Qe = A.get(J.key === null ? F : J.key) || null;
              return T(W, Qe, J, Ce);
            }
            case Ye:
              var Nt = J._payload, St = J._init;
              return j(A, W, F, St(Nt), Ce);
          }
          if (Un(J) || Ci(J)) {
            var bn = A.get(F) || null;
            return w(W, bn, J, Ce, null);
          }
          ty(W, J);
        }
        return typeof J == "function" && ny(W), null;
      }
      function Y(A, W, F) {
        {
          if (typeof A != "object" || A === null)
            return W;
          switch (A.$$typeof) {
            case tl:
            case Xr:
              cC(A, F);
              var J = A.key;
              if (typeof J != "string")
                break;
              if (W === null) {
                W = /* @__PURE__ */ new Set(), W.add(J);
                break;
              }
              if (!W.has(J)) {
                W.add(J);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case Ye:
              var Ce = A._payload, me = A._init;
              Y(me(Ce), W, F);
              break;
          }
        }
        return W;
      }
      function B(A, W, F, J) {
        for (var Ce = null, me = 0; me < F.length; me++) {
          var Be = F[me];
          Ce = Y(Be, Ce, A);
        }
        for (var Qe = null, Nt = null, St = W, bn = 0, Et = 0, En = null; St !== null && Et < F.length; Et++) {
          St.index > Et ? (En = St, St = null) : En = St.sibling;
          var Pr = O(A, St, F[Et], J);
          if (Pr === null) {
            St === null && (St = En);
            break;
          }
          e && St && Pr.alternate === null && t(A, St), bn = d(Pr, bn, Et), Nt === null ? Qe = Pr : Nt.sibling = Pr, Nt = Pr, St = En;
        }
        if (Et === F.length) {
          if (a(A, St), gr()) {
            var Rr = Et;
            Ws(A, Rr);
          }
          return Qe;
        }
        if (St === null) {
          for (; Et < F.length; Et++) {
            var Xa = N(A, F[Et], J);
            Xa !== null && (bn = d(Xa, bn, Et), Nt === null ? Qe = Xa : Nt.sibling = Xa, Nt = Xa);
          }
          if (gr()) {
            var ua = Et;
            Ws(A, ua);
          }
          return Qe;
        }
        for (var oa = l(A, St); Et < F.length; Et++) {
          var Vr = j(oa, A, Et, F[Et], J);
          Vr !== null && (e && Vr.alternate !== null && oa.delete(Vr.key === null ? Et : Vr.key), bn = d(Vr, bn, Et), Nt === null ? Qe = Vr : Nt.sibling = Vr, Nt = Vr);
        }
        if (e && oa.forEach(function(ad) {
          return t(A, ad);
        }), gr()) {
          var Nu = Et;
          Ws(A, Nu);
        }
        return Qe;
      }
      function _e(A, W, F, J) {
        var Ce = Ci(F);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (h0 || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), h0 = !0), F.entries === Ce && (p0 || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), p0 = !0);
          var me = Ce.call(F);
          if (me)
            for (var Be = null, Qe = me.next(); !Qe.done; Qe = me.next()) {
              var Nt = Qe.value;
              Be = Y(Nt, Be, A);
            }
        }
        var St = Ce.call(F);
        if (St == null)
          throw new Error("An iterable object provided no iterator.");
        for (var bn = null, Et = null, En = W, Pr = 0, Rr = 0, Xa = null, ua = St.next(); En !== null && !ua.done; Rr++, ua = St.next()) {
          En.index > Rr ? (Xa = En, En = null) : Xa = En.sibling;
          var oa = O(A, En, ua.value, J);
          if (oa === null) {
            En === null && (En = Xa);
            break;
          }
          e && En && oa.alternate === null && t(A, En), Pr = d(oa, Pr, Rr), Et === null ? bn = oa : Et.sibling = oa, Et = oa, En = Xa;
        }
        if (ua.done) {
          if (a(A, En), gr()) {
            var Vr = Rr;
            Ws(A, Vr);
          }
          return bn;
        }
        if (En === null) {
          for (; !ua.done; Rr++, ua = St.next()) {
            var Nu = N(A, ua.value, J);
            Nu !== null && (Pr = d(Nu, Pr, Rr), Et === null ? bn = Nu : Et.sibling = Nu, Et = Nu);
          }
          if (gr()) {
            var ad = Rr;
            Ws(A, ad);
          }
          return bn;
        }
        for (var kh = l(A, En); !ua.done; Rr++, ua = St.next()) {
          var Fl = j(kh, A, Rr, ua.value, J);
          Fl !== null && (e && Fl.alternate !== null && kh.delete(Fl.key === null ? Rr : Fl.key), Pr = d(Fl, Pr, Rr), Et === null ? bn = Fl : Et.sibling = Fl, Et = Fl);
        }
        if (e && kh.forEach(function(oL) {
          return t(A, oL);
        }), gr()) {
          var uL = Rr;
          Ws(A, uL);
        }
        return bn;
      }
      function ze(A, W, F, J) {
        if (W !== null && W.tag === ne) {
          a(A, W.sibling);
          var Ce = o(W, F);
          return Ce.return = A, Ce;
        }
        a(A, W);
        var me = B1(F, A.mode, J);
        return me.return = A, me;
      }
      function Oe(A, W, F, J) {
        for (var Ce = F.key, me = W; me !== null; ) {
          if (me.key === Ce) {
            var Be = F.type;
            if (Be === ja) {
              if (me.tag === ae) {
                a(A, me.sibling);
                var Qe = o(me, F.props.children);
                return Qe.return = A, Qe._debugSource = F._source, Qe._debugOwner = F._owner, Qe;
              }
            } else if (me.elementType === Be || // Keep this check inline so it only runs on the false path:
            nw(me, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === Ye && fC(Be) === me.type) {
              a(A, me.sibling);
              var Nt = o(me, F.props);
              return Nt.ref = Zp(A, me, F), Nt.return = A, Nt._debugSource = F._source, Nt._debugOwner = F._owner, Nt;
            }
            a(A, me);
            break;
          } else
            t(A, me);
          me = me.sibling;
        }
        if (F.type === ja) {
          var St = Wo(F.props.children, A.mode, J, F.key);
          return St.return = A, St;
        } else {
          var bn = I1(F, A.mode, J);
          return bn.ref = Zp(A, W, F), bn.return = A, bn;
        }
      }
      function pt(A, W, F, J) {
        for (var Ce = F.key, me = W; me !== null; ) {
          if (me.key === Ce)
            if (me.tag === I && me.stateNode.containerInfo === F.containerInfo && me.stateNode.implementation === F.implementation) {
              a(A, me.sibling);
              var Be = o(me, F.children || []);
              return Be.return = A, Be;
            } else {
              a(A, me);
              break;
            }
          else
            t(A, me);
          me = me.sibling;
        }
        var Qe = W1(F, A.mode, J);
        return Qe.return = A, Qe;
      }
      function st(A, W, F, J) {
        var Ce = typeof F == "object" && F !== null && F.type === ja && F.key === null;
        if (Ce && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case tl:
              return v(Oe(A, W, F, J));
            case Xr:
              return v(pt(A, W, F, J));
            case Ye:
              var me = F._payload, Be = F._init;
              return st(A, W, Be(me), J);
          }
          if (Un(F))
            return B(A, W, F, J);
          if (Ci(F))
            return _e(A, W, F, J);
          ty(A, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? v(ze(A, W, "" + F, J)) : (typeof F == "function" && ny(A), a(A, W));
      }
      return st;
    }
    var Vf = dC(!0), pC = dC(!1);
    function qk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = ac(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = ac(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function Xk(e, t) {
      for (var a = e.child; a !== null; )
        RM(a, t), a = a.sibling;
    }
    var Jp = {}, Ao = Mo(Jp), eh = Mo(Jp), ry = Mo(Jp);
    function ay(e) {
      if (e === Jp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function hC() {
      var e = ay(ry.current);
      return e;
    }
    function g0(e, t) {
      jr(ry, t, e), jr(eh, e, e), jr(Ao, Jp, e);
      var a = cD(t);
      Hr(Ao, e), jr(Ao, a, e);
    }
    function If(e) {
      Hr(Ao, e), Hr(eh, e), Hr(ry, e);
    }
    function S0() {
      var e = ay(Ao.current);
      return e;
    }
    function vC(e) {
      ay(ry.current);
      var t = ay(Ao.current), a = fD(t, e.type);
      t !== a && (jr(eh, e, e), jr(Ao, a, e));
    }
    function E0(e) {
      eh.current === e && (Hr(Ao, e), Hr(eh, e));
    }
    var Kk = 0, mC = 1, yC = 1, th = 2, Ii = Mo(Kk);
    function _0(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & mC;
    }
    function C0(e, t) {
      return e & mC | t;
    }
    function Zk(e, t) {
      return e | t;
    }
    function Fo(e, t) {
      jr(Ii, t, e);
    }
    function Wf(e) {
      Hr(Ii, e);
    }
    function Jk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function iy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || D_(l) || kS(l))
              return t;
          }
        } else if (t.tag === ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & We) !== Ue;
          if (o)
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
    var ba = (
      /*   */
      0
    ), Gn = (
      /* */
      1
    ), Ol = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), Sr = (
      /*   */
      8
    ), T0 = [];
    function w0() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e];
        t._workInProgressVersionPrimary = null;
      }
      T0.length = 0;
    }
    function eb(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Se = f.ReactCurrentDispatcher, nh = f.ReactCurrentBatchConfig, R0, $f;
    R0 = /* @__PURE__ */ new Set();
    var Ks = $, Lt = null, qn = null, Xn = null, ly = !1, rh = !1, ah = 0, tb = 0, nb = 25, G = null, hi = null, Ho = -1, x0 = !1;
    function Rt() {
      {
        var e = G;
        hi === null ? hi = [e] : hi.push(e);
      }
    }
    function fe() {
      {
        var e = G;
        hi !== null && (Ho++, hi[Ho] !== e && rb(e));
      }
    }
    function Gf(e) {
      e != null && !Un(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
    }
    function rb(e) {
      {
        var t = qe(Lt);
        if (!R0.has(t) && (R0.add(t), hi !== null)) {
          for (var a = "", l = 30, o = 0; o <= Ho; o++) {
            for (var d = hi[o], v = o === Ho ? e : d, g = o + 1 + ". " + d; g.length < l; )
              g += " ";
            g += v + `
`, a += g;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Yr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function D0(e, t) {
      if (x0)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, l, o, d) {
      Ks = d, Lt = t, hi = e !== null ? e._debugHookTypes : null, Ho = -1, x0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? Se.current = jC : hi !== null ? Se.current = HC : Se.current = FC;
      var v = a(l, o);
      if (rh) {
        var g = 0;
        do {
          if (rh = !1, ah = 0, g >= nb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, x0 = !1, qn = null, Xn = null, t.updateQueue = null, Ho = -1, Se.current = YC, v = a(l, o);
        } while (rh);
      }
      Se.current = Sy, t._debugHookTypes = hi;
      var E = qn !== null && qn.next !== null;
      if (Ks = $, Lt = null, qn = null, Xn = null, G = null, hi = null, Ho = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & rt) !== He && S("Internal React error: Expected static flag was missing. Please notify the React team."), ly = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function qf() {
      var e = ah !== 0;
      return ah = 0, e;
    }
    function gC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & _a) !== He ? t.flags &= ~(tu | Lr | Xt | Xe) : t.flags &= ~(Xt | Xe), e.lanes = ho(e.lanes, a);
    }
    function SC() {
      if (Se.current = Sy, ly) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        ly = !1;
      }
      Ks = $, Lt = null, qn = null, Xn = null, hi = null, Ho = -1, G = null, LC = !1, rh = !1, ah = 0;
    }
    function Ml() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Xn === null ? Lt.memoizedState = Xn = e : Xn = Xn.next = e, Xn;
    }
    function vi() {
      var e;
      if (qn === null) {
        var t = Lt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = qn.next;
      var a;
      if (Xn === null ? a = Lt.memoizedState : a = Xn.next, a !== null)
        Xn = a, a = Xn.next, qn = e;
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
        Xn === null ? Lt.memoizedState = Xn = l : Xn = Xn.next = l;
      }
      return Xn;
    }
    function EC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function k0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function b0(e, t, a) {
      var l = Ml(), o;
      a !== void 0 ? o = a(t) : o = t, l.memoizedState = l.baseState = o;
      var d = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      l.queue = d;
      var v = d.dispatch = ub.bind(null, Lt, d);
      return [l.memoizedState, v];
    }
    function O0(e, t, a) {
      var l = vi(), o = l.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var d = qn, v = d.baseQueue, g = o.pending;
      if (g !== null) {
        if (v !== null) {
          var E = v.next, T = g.next;
          v.next = T, g.next = E;
        }
        d.baseQueue !== v && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = g, o.pending = null;
      }
      if (v !== null) {
        var w = v.next, N = d.baseState, O = null, j = null, Y = null, B = w;
        do {
          var _e = B.lane;
          if (fu(Ks, _e)) {
            if (Y !== null) {
              var Oe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ft,
                action: B.action,
                hasEagerState: B.hasEagerState,
                eagerState: B.eagerState,
                next: null
              };
              Y = Y.next = Oe;
            }
            if (B.hasEagerState)
              N = B.eagerState;
            else {
              var pt = B.action;
              N = e(N, pt);
            }
          } else {
            var ze = {
              lane: _e,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            };
            Y === null ? (j = Y = ze, O = N) : Y = Y.next = ze, Lt.lanes = Ke(Lt.lanes, _e), Th(_e);
          }
          B = B.next;
        } while (B !== null && B !== w);
        Y === null ? O = N : Y.next = j, xe(N, l.memoizedState) || fh(), l.memoizedState = N, l.baseState = O, l.baseQueue = Y, o.lastRenderedState = N;
      }
      var st = o.interleaved;
      if (st !== null) {
        var A = st;
        do {
          var W = A.lane;
          Lt.lanes = Ke(Lt.lanes, W), Th(W), A = A.next;
        } while (A !== st);
      } else
        v === null && (o.lanes = $);
      var F = o.dispatch;
      return [l.memoizedState, F];
    }
    function M0(e, t, a) {
      var l = vi(), o = l.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var d = o.dispatch, v = o.pending, g = l.memoizedState;
      if (v !== null) {
        o.pending = null;
        var E = v.next, T = E;
        do {
          var w = T.action;
          g = e(g, w), T = T.next;
        } while (T !== E);
        xe(g, l.memoizedState) || fh(), l.memoizedState = g, l.baseQueue === null && (l.baseState = g), o.lastRenderedState = g;
      }
      return [g, d];
    }
    function AA(e, t, a) {
    }
    function FA(e, t, a) {
    }
    function L0(e, t, a) {
      var l = Lt, o = Ml(), d, v = gr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), $f || d !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), $f = !0);
      } else {
        if (d = t(), !$f) {
          var g = t();
          xe(d, g) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
        }
        var E = Fy();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(E, Ks) || _C(l, t, d);
      }
      o.memoizedState = d;
      var T = {
        value: d,
        getSnapshot: t
      };
      return o.queue = T, fy(TC.bind(null, l, T, e), [e]), l.flags |= Xt, ih(Gn | Sr, CC.bind(null, l, T, d, t), void 0, null), d;
    }
    function uy(e, t, a) {
      var l = Lt, o = vi(), d = t();
      if (!$f) {
        var v = t();
        xe(d, v) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
      }
      var g = o.memoizedState, E = !xe(g, d);
      E && (o.memoizedState = d, fh());
      var T = o.queue;
      if (uh(TC.bind(null, l, T, e), [e]), T.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & Gn) {
        l.flags |= Xt, ih(Gn | Sr, CC.bind(null, l, T, d, t), void 0, null);
        var w = Fy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(w, Ks) || _C(l, t, d);
      }
      return d;
    }
    function _C(e, t, a) {
      e.flags |= Ss;
      var l = {
        getSnapshot: t,
        value: a
      }, o = Lt.updateQueue;
      if (o === null)
        o = EC(), Lt.updateQueue = o, o.stores = [l];
      else {
        var d = o.stores;
        d === null ? o.stores = [l] : d.push(l);
      }
    }
    function CC(e, t, a, l) {
      t.value = a, t.getSnapshot = l, wC(t) && RC(e);
    }
    function TC(e, t, a) {
      var l = function() {
        wC(t) && RC(e);
      };
      return a(l);
    }
    function wC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !xe(a, l);
      } catch {
        return !0;
      }
    }
    function RC(e) {
      var t = ka(e, Ve);
      t !== null && er(t, e, Ve, Ft);
    }
    function oy(e) {
      var t = Ml();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: k0,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = ob.bind(null, Lt, a);
      return [t.memoizedState, l];
    }
    function N0(e) {
      return O0(k0);
    }
    function U0(e) {
      return M0(k0);
    }
    function ih(e, t, a, l) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, d = Lt.updateQueue;
      if (d === null)
        d = EC(), Lt.updateQueue = d, d.lastEffect = o.next = o;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = o.next = o;
        else {
          var g = v.next;
          v.next = o, o.next = g, d.lastEffect = o;
        }
      }
      return o;
    }
    function z0(e) {
      var t = Ml();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sy(e) {
      var t = vi();
      return t.memoizedState;
    }
    function lh(e, t, a, l) {
      var o = Ml(), d = l === void 0 ? null : l;
      Lt.flags |= e, o.memoizedState = ih(Gn | t, a, void 0, d);
    }
    function cy(e, t, a, l) {
      var o = vi(), d = l === void 0 ? null : l, v = void 0;
      if (qn !== null) {
        var g = qn.memoizedState;
        if (v = g.destroy, d !== null) {
          var E = g.deps;
          if (D0(d, E)) {
            o.memoizedState = ih(t, a, v, d);
            return;
          }
        }
      }
      Lt.flags |= e, o.memoizedState = ih(Gn | t, a, v, d);
    }
    function fy(e, t) {
      return (Lt.mode & _a) !== He ? lh(tu | Xt | pl, Sr, e, t) : lh(Xt | pl, Sr, e, t);
    }
    function uh(e, t) {
      return cy(Xt, Sr, e, t);
    }
    function A0(e, t) {
      return lh(Xe, Ol, e, t);
    }
    function dy(e, t) {
      return cy(Xe, Ol, e, t);
    }
    function F0(e, t) {
      var a = Xe;
      return a |= Mr, (Lt.mode & _a) !== He && (a |= Lr), lh(a, Qn, e, t);
    }
    function py(e, t) {
      return cy(Xe, Qn, e, t);
    }
    function xC(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var d = e();
        return o.current = d, function() {
          o.current = null;
        };
      }
    }
    function H0(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, o = Xe;
      return o |= Mr, (Lt.mode & _a) !== He && (o |= Lr), lh(o, Qn, xC.bind(null, t, e), l);
    }
    function hy(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return cy(Xe, Qn, xC.bind(null, t, e), l);
    }
    function ab(e, t) {
    }
    var vy = ab;
    function j0(e, t) {
      var a = Ml(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function my(e, t) {
      var a = vi(), l = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && l !== null) {
        var d = o[1];
        if (D0(l, d))
          return o[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function Y0(e, t) {
      var a = Ml(), l = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, l], o;
    }
    function yy(e, t) {
      var a = vi(), l = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && l !== null) {
        var d = o[1];
        if (D0(l, d))
          return o[0];
      }
      var v = e();
      return a.memoizedState = [v, l], v;
    }
    function P0(e) {
      var t = Ml();
      return t.memoizedState = e, e;
    }
    function DC(e) {
      var t = vi(), a = qn, l = a.memoizedState;
      return bC(t, l, e);
    }
    function kC(e) {
      var t = vi();
      if (qn === null)
        return t.memoizedState = e, e;
      var a = qn.memoizedState;
      return bC(t, a, e);
    }
    function bC(e, t, a) {
      var l = !Gg(Ks);
      if (l) {
        if (!xe(a, t)) {
          var o = op();
          Lt.lanes = Ke(Lt.lanes, o), Th(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, fh()), e.memoizedState = a, a;
    }
    function ib(e, t, a) {
      var l = Ta();
      xn(sr(l, $n)), e(!0);
      var o = nh.transition;
      nh.transition = {};
      var d = nh.transition;
      nh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (xn(l), nh.transition = o, o === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && _("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function V0() {
      var e = oy(!1), t = e[0], a = e[1], l = ib.bind(null, a), o = Ml();
      return o.memoizedState = l, [t, l];
    }
    function OC() {
      var e = N0(), t = e[0], a = vi(), l = a.memoizedState;
      return [t, l];
    }
    function MC() {
      var e = U0(), t = e[0], a = vi(), l = a.memoizedState;
      return [t, l];
    }
    var LC = !1;
    function lb() {
      return LC;
    }
    function I0() {
      var e = Ml(), t = Fy(), a = t.identifierPrefix, l;
      if (gr()) {
        var o = Ek();
        l = ":" + a + "R" + o;
        var d = ah++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = tb++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function gy() {
      var e = vi(), t = e.memoizedState;
      return t;
    }
    function ub(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Io(e), o = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (NC(e))
        UC(t, o);
      else {
        var d = K_(e, t, o, l);
        if (d !== null) {
          var v = la();
          er(d, e, l, v), zC(d, t, l);
        }
      }
      AC(e, l);
    }
    function ob(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Io(e), o = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (NC(e))
        UC(t, o);
      else {
        var d = e.alternate;
        if (e.lanes === $ && (d === null || d.lanes === $)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = Se.current, Se.current = Bi;
            try {
              var E = t.lastRenderedState, T = v(E, a);
              if (o.hasEagerState = !0, o.eagerState = T, xe(T, E)) {
                Yk(e, t, o, l);
                return;
              }
            } catch {
            } finally {
              Se.current = g;
            }
          }
        }
        var w = K_(e, t, o, l);
        if (w !== null) {
          var N = la();
          er(w, e, l, N), zC(w, t, l);
        }
      }
      AC(e, l);
    }
    function NC(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
    }
    function UC(e, t) {
      rh = ly = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function zC(e, t, a) {
      if (up(a)) {
        var l = t.lanes;
        l = sp(l, e.pendingLanes);
        var o = Ke(l, a);
        t.lanes = o, vo(e, o);
      }
    }
    function AC(e, t, a) {
      Sl(e, t);
    }
    var Sy = {
      readContext: Pn,
      useCallback: Yr,
      useContext: Yr,
      useEffect: Yr,
      useImperativeHandle: Yr,
      useInsertionEffect: Yr,
      useLayoutEffect: Yr,
      useMemo: Yr,
      useReducer: Yr,
      useRef: Yr,
      useState: Yr,
      useDebugValue: Yr,
      useDeferredValue: Yr,
      useTransition: Yr,
      useMutableSource: Yr,
      useSyncExternalStore: Yr,
      useId: Yr,
      unstable_isNewReconciler: oe
    }, FC = null, HC = null, jC = null, YC = null, Ll = null, Bi = null, Ey = null;
    {
      var B0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      FC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Rt(), Gf(t), j0(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Rt(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Rt(), Gf(t), fy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Rt(), Gf(a), H0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Rt(), Gf(t), A0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Rt(), Gf(t), F0(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Rt(), Gf(t);
          var a = Se.current;
          Se.current = Ll;
          try {
            return Y0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Rt();
          var l = Se.current;
          Se.current = Ll;
          try {
            return b0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Rt(), z0(e);
        },
        useState: function(e) {
          G = "useState", Rt();
          var t = Se.current;
          Se.current = Ll;
          try {
            return oy(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Rt(), P0(e);
        },
        useTransition: function() {
          return G = "useTransition", Rt(), V0();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Rt(), L0(e, t, a);
        },
        useId: function() {
          return G = "useId", Rt(), I0();
        },
        unstable_isNewReconciler: oe
      }, HC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), j0(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), fy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), H0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), A0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), F0(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = Se.current;
          Se.current = Ll;
          try {
            return Y0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = Se.current;
          Se.current = Ll;
          try {
            return b0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), z0(e);
        },
        useState: function(e) {
          G = "useState", fe();
          var t = Se.current;
          Se.current = Ll;
          try {
            return oy(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), P0(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), V0();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), L0(e, t, a);
        },
        useId: function() {
          return G = "useId", fe(), I0();
        },
        unstable_isNewReconciler: oe
      }, jC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), my(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), dy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), py(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = Se.current;
          Se.current = Bi;
          try {
            return yy(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = Se.current;
          Se.current = Bi;
          try {
            return O0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), sy();
        },
        useState: function(e) {
          G = "useState", fe();
          var t = Se.current;
          Se.current = Bi;
          try {
            return N0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), vy();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), DC(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), OC();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), uy(e, t);
        },
        useId: function() {
          return G = "useId", fe(), gy();
        },
        unstable_isNewReconciler: oe
      }, YC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), my(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), dy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), py(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = Se.current;
          Se.current = Ey;
          try {
            return yy(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = Se.current;
          Se.current = Ey;
          try {
            return M0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), sy();
        },
        useState: function(e) {
          G = "useState", fe();
          var t = Se.current;
          Se.current = Ey;
          try {
            return U0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), vy();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), kC(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), MC();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), uy(e, t);
        },
        useId: function() {
          return G = "useId", fe(), gy();
        },
        unstable_isNewReconciler: oe
      }, Ll = {
        readContext: function(e) {
          return B0(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), Rt(), j0(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), Rt(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), Rt(), fy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), Rt(), H0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), Rt(), A0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), Rt(), F0(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), Rt();
          var a = Se.current;
          Se.current = Ll;
          try {
            return Y0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), Rt();
          var l = Se.current;
          Se.current = Ll;
          try {
            return b0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), Rt(), z0(e);
        },
        useState: function(e) {
          G = "useState", Ge(), Rt();
          var t = Se.current;
          Se.current = Ll;
          try {
            return oy(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), Rt(), P0(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), Rt(), V0();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), Rt(), L0(e, t, a);
        },
        useId: function() {
          return G = "useId", Ge(), Rt(), I0();
        },
        unstable_isNewReconciler: oe
      }, Bi = {
        readContext: function(e) {
          return B0(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), fe(), my(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), fe(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), fe(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), fe(), dy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), fe(), py(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), fe();
          var a = Se.current;
          Se.current = Bi;
          try {
            return yy(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), fe();
          var l = Se.current;
          Se.current = Bi;
          try {
            return O0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), fe(), sy();
        },
        useState: function(e) {
          G = "useState", Ge(), fe();
          var t = Se.current;
          Se.current = Bi;
          try {
            return N0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), fe(), vy();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), fe(), DC(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), fe(), OC();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), fe(), uy(e, t);
        },
        useId: function() {
          return G = "useId", Ge(), fe(), gy();
        },
        unstable_isNewReconciler: oe
      }, Ey = {
        readContext: function(e) {
          return B0(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), fe(), my(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), fe(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), fe(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), fe(), dy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), fe(), py(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), fe();
          var a = Se.current;
          Se.current = Bi;
          try {
            return yy(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), fe();
          var l = Se.current;
          Se.current = Bi;
          try {
            return M0(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), fe(), sy();
        },
        useState: function(e) {
          G = "useState", Ge(), fe();
          var t = Se.current;
          Se.current = Bi;
          try {
            return U0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), fe(), vy();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), fe(), kC(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), fe(), MC();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), fe(), uy(e, t);
        },
        useId: function() {
          return G = "useId", Ge(), fe(), gy();
        },
        unstable_isNewReconciler: oe
      };
    }
    var jo = s.unstable_now, PC = 0, _y = -1, oh = -1, Cy = -1, W0 = !1, Ty = !1;
    function VC() {
      return W0;
    }
    function sb() {
      Ty = !0;
    }
    function cb() {
      W0 = !1, Ty = !1;
    }
    function fb() {
      W0 = Ty, Ty = !1;
    }
    function IC() {
      return PC;
    }
    function BC() {
      PC = jo();
    }
    function $0(e) {
      oh = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function WC(e) {
      oh = -1;
    }
    function wy(e, t) {
      if (oh >= 0) {
        var a = jo() - oh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), oh = -1;
      }
    }
    function Nl(e) {
      if (_y >= 0) {
        var t = jo() - _y;
        _y = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case ye:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function G0(e) {
      if (Cy >= 0) {
        var t = jo() - Cy;
        Cy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case ye:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ul() {
      _y = jo();
    }
    function Q0() {
      Cy = jo();
    }
    function q0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: yd(t),
        digest: null
      };
    }
    function X0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function db(e, t) {
      return !0;
    }
    function K0(e, t) {
      try {
        var a = db(e, t);
        if (a === !1)
          return;
        var l = t.value, o = t.source, d = t.stack, v = d !== null ? d : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(l);
        }
        var g = o ? qe(o) : null, E = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === U)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = qe(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var N = E + `
` + v + `

` + ("" + T);
        console.error(N);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var pb = typeof WeakMap == "function" ? WeakMap : Map;
    function $C(e, t, a) {
      var l = Du(Ft, a);
      l.tag = KS, l.payload = {
        element: null
      };
      var o = t.value;
      return l.callback = function() {
        iM(o), K0(e, t);
      }, l;
    }
    function Z0(e, t, a) {
      var l = Du(Ft, a);
      l.tag = KS;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var d = t.value;
        l.payload = function() {
          return o(d);
        }, l.callback = function() {
          rw(e), K0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        rw(e), K0(e, t), typeof o != "function" && rM(this);
        var E = t.value, T = t.stack;
        this.componentDidCatch(E, {
          componentStack: T !== null ? T : ""
        }), typeof o != "function" && (Fr(e.lanes, Ve) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), l;
    }
    function GC(e, t, a) {
      var l = e.pingCache, o;
      if (l === null ? (l = e.pingCache = new pb(), o = /* @__PURE__ */ new Set(), l.set(t, o)) : (o = l.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(t, o))), !o.has(a)) {
        o.add(a);
        var d = lM.bind(null, e, t, a);
        Wn && wh(e, a), t.then(d, d);
      }
    }
    function hb(e, t, a, l) {
      var o = e.updateQueue;
      if (o === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        o.add(a);
    }
    function vb(e, t) {
      var a = e.tag;
      if ((e.mode & rt) === He && (a === k || a === ee || a === he)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function QC(e) {
      var t = e;
      do {
        if (t.tag === ve && Jk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function qC(e, t, a, l, o) {
      if ((e.mode & rt) === He) {
        if (e === t)
          e.flags |= An;
        else {
          if (e.flags |= We, a.flags |= Es, a.flags &= ~(Nc | Zr), a.tag === M) {
            var d = a.alternate;
            if (d === null)
              a.tag = tt;
            else {
              var v = Du(Ft, Ve);
              v.tag = Qm, zo(a, v, Ve);
            }
          }
          a.lanes = Ke(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= An, e.lanes = o, e;
    }
    function mb(e, t, a, l, o) {
      if (a.flags |= Zr, Wn && wh(e, o), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        vb(a), gr() && a.mode & rt && j_();
        var v = QC(t);
        if (v !== null) {
          v.flags &= ~ln, qC(v, t, a, e, o), v.mode & rt && GC(e, d, o), hb(v, e, d);
          return;
        } else {
          if (!po(o)) {
            GC(e, d, o), M1();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = g;
        }
      } else if (gr() && a.mode & rt) {
        j_();
        var E = QC(t);
        if (E !== null) {
          (E.flags & An) === Ue && (E.flags |= ln), qC(E, t, a, e, o), BS(Zs(l, a));
          return;
        }
      }
      l = Zs(l, a), qO(l);
      var T = t;
      do {
        switch (T.tag) {
          case U: {
            var w = l;
            T.flags |= An;
            var N = Rn(o);
            T.lanes = Ke(T.lanes, N);
            var O = $C(T, w, N);
            e0(T, O);
            return;
          }
          case M:
            var j = l, Y = T.type, B = T.stateNode;
            if ((T.flags & We) === Ue && (typeof Y.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && !QT(B))) {
              T.flags |= An;
              var _e = Rn(o);
              T.lanes = Ke(T.lanes, _e);
              var ze = Z0(T, j, _e);
              e0(T, ze);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function yb() {
      return null;
    }
    var sh = f.ReactCurrentOwner, Wi = !1, J0, ch, e1, t1, n1, Js, r1, Ry;
    J0 = {}, ch = {}, e1 = {}, t1 = {}, n1 = {}, Js = !1, r1 = {}, Ry = {};
    function aa(e, t, a, l) {
      e === null ? t.child = pC(t, null, a, l) : t.child = Vf(t, e.child, a, l);
    }
    function gb(e, t, a, l) {
      t.child = Vf(t, e.child, null, l), t.child = Vf(t, null, a, l);
    }
    function XC(e, t, a, l, o) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && ji(
          d,
          l,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var v = a.render, g = t.ref, E, T;
      Pf(t, o), gl(t);
      {
        if (sh.current = t, Va(!0), E = Qf(e, t, v, l, g, o), T = qf(), t.mode & en) {
          wn(!0);
          try {
            E = Qf(e, t, v, l, g, o), T = qf();
          } finally {
            wn(!1);
          }
        }
        Va(!1);
      }
      return nu(), e !== null && !Wi ? (gC(e, t, o), ku(e, t, o)) : (gr() && T && HS(t), t.flags |= fl, aa(e, t, E, o), t.child);
    }
    function KC(e, t, a, l, o) {
      if (e === null) {
        var d = a.type;
        if (TM(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = rd(d), t.tag = he, t.type = v, l1(t, d), ZC(e, t, v, l, o);
        }
        {
          var g = d.propTypes;
          g && ji(
            g,
            l,
            // Resolved props
            "prop",
            zt(d)
          );
        }
        var E = V1(a.type, null, l, t, t.mode, o);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var T = a.type, w = T.propTypes;
        w && ji(
          w,
          l,
          // Resolved props
          "prop",
          zt(T)
        );
      }
      var N = e.child, O = d1(e, o);
      if (!O) {
        var j = N.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Le, Y(j, l) && e.ref === t.ref)
          return ku(e, t, o);
      }
      t.flags |= fl;
      var B = ac(N, l);
      return B.ref = t.ref, B.return = t, t.child = B, B;
    }
    function ZC(e, t, a, l, o) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === Ye) {
          var v = d, g = v._payload, E = v._init;
          try {
            d = E(g);
          } catch {
            d = null;
          }
          var T = d && d.propTypes;
          T && ji(
            T,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(d)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Le(w, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Wi = !1, t.pendingProps = l = w, d1(e, o))
            (e.flags & Es) !== Ue && (Wi = !0);
          else
            return t.lanes = e.lanes, ku(e, t, o);
      }
      return a1(e, t, a, l, o);
    }
    function JC(e, t, a) {
      var l = t.pendingProps, o = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || Ee)
        if ((t.mode & rt) === He) {
          var v = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Hy(t, a);
        } else if (Fr(a, Ar)) {
          var N = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var O = d !== null ? d.baseLanes : a;
          Hy(t, O);
        } else {
          var g = null, E;
          if (d !== null) {
            var T = d.baseLanes;
            E = Ke(T, a);
          } else
            E = a;
          t.lanes = t.childLanes = Ar;
          var w = {
            baseLanes: E,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, Hy(t, E), null;
        }
      else {
        var j;
        d !== null ? (j = Ke(d.baseLanes, a), t.memoizedState = null) : j = a, Hy(t, j);
      }
      return aa(e, t, o, a), t.child;
    }
    function Sb(e, t, a) {
      var l = t.pendingProps;
      return aa(e, t, l, a), t.child;
    }
    function Eb(e, t, a) {
      var l = t.pendingProps.children;
      return aa(e, t, l, a), t.child;
    }
    function _b(e, t, a) {
      {
        t.flags |= Xe;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, d = o.children;
      return aa(e, t, d, a), t.child;
    }
    function eT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Or, t.flags |= $d);
    }
    function a1(e, t, a, l, o) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && ji(
          d,
          l,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var v;
      {
        var g = zf(t, a, !0);
        v = Af(t, g);
      }
      var E, T;
      Pf(t, o), gl(t);
      {
        if (sh.current = t, Va(!0), E = Qf(e, t, a, l, v, o), T = qf(), t.mode & en) {
          wn(!0);
          try {
            E = Qf(e, t, a, l, v, o), T = qf();
          } finally {
            wn(!1);
          }
        }
        Va(!1);
      }
      return nu(), e !== null && !Wi ? (gC(e, t, o), ku(e, t, o)) : (gr() && T && HS(t), t.flags |= fl, aa(e, t, E, o), t.child);
    }
    function tT(e, t, a, l, o) {
      {
        switch (HM(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, g = new v(t.memoizedProps, d.context), E = g.state;
            d.updater.enqueueSetState(d, E, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= An;
            var T = new Error("Simulated error coming from DevTools"), w = Rn(o);
            t.lanes = Ke(t.lanes, w);
            var N = Z0(t, Zs(T, t), w);
            e0(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && ji(
            O,
            l,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var j;
      bl(a) ? (j = !0, Fm(t)) : j = !1, Pf(t, o);
      var Y = t.stateNode, B;
      Y === null ? (Dy(e, t), oC(t, a, l), d0(t, a, l, o), B = !0) : e === null ? B = Gk(t, a, l, o) : B = Qk(e, t, a, l, o);
      var _e = i1(e, t, a, B, j, o);
      {
        var ze = t.stateNode;
        B && ze.props !== l && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), Js = !0);
      }
      return _e;
    }
    function i1(e, t, a, l, o, d) {
      eT(e, t);
      var v = (t.flags & We) !== Ue;
      if (!l && !v)
        return o && z_(t, a, !1), ku(e, t, d);
      var g = t.stateNode;
      sh.current = t;
      var E;
      if (v && typeof a.getDerivedStateFromError != "function")
        E = null, WC();
      else {
        gl(t);
        {
          if (Va(!0), E = g.render(), t.mode & en) {
            wn(!0);
            try {
              g.render();
            } finally {
              wn(!1);
            }
          }
          Va(!1);
        }
        nu();
      }
      return t.flags |= fl, e !== null && v ? gb(e, t, E, d) : aa(e, t, E, d), t.memoizedState = g.state, o && z_(t, a, !0), t.child;
    }
    function nT(e) {
      var t = e.stateNode;
      t.pendingContext ? N_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && N_(e, t.context, !1), g0(e, t.containerInfo);
    }
    function Cb(e, t, a) {
      if (nT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, o = t.memoizedState, d = o.element;
      eC(e, t), Zm(t, l, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (o.isDehydrated) {
        var E = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, T = t.updateQueue;
        if (T.baseState = E, t.memoizedState = E, t.flags & ln) {
          var w = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return rT(e, t, g, a, w);
        } else if (g !== d) {
          var N = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return rT(e, t, g, a, N);
        } else {
          xk(t);
          var O = pC(t, null, g, a);
          t.child = O;
          for (var j = O; j; )
            j.flags = j.flags & ~It | ga, j = j.sibling;
        }
      } else {
        if (jf(), g === d)
          return ku(e, t, a);
        aa(e, t, g, a);
      }
      return t.child;
    }
    function rT(e, t, a, l, o) {
      return jf(), BS(o), t.flags |= ln, aa(e, t, a, l), t.child;
    }
    function Tb(e, t, a) {
      vC(t), e === null && IS(t);
      var l = t.type, o = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = o.children, g = wS(l, o);
      return g ? v = null : d !== null && wS(l, d) && (t.flags |= wt), eT(e, t), aa(e, t, v, a), t.child;
    }
    function wb(e, t) {
      return e === null && IS(t), null;
    }
    function Rb(e, t, a, l) {
      Dy(e, t);
      var o = t.pendingProps, d = a, v = d._payload, g = d._init, E = g(v);
      t.type = E;
      var T = t.tag = wM(E), w = Vi(E, o), N;
      switch (T) {
        case k:
          return l1(t, E), t.type = E = rd(E), N = a1(null, t, E, w, l), N;
        case M:
          return t.type = E = A1(E), N = tT(null, t, E, w, l), N;
        case ee:
          return t.type = E = F1(E), N = XC(null, t, E, w, l), N;
        case le: {
          if (t.type !== t.elementType) {
            var O = E.propTypes;
            O && ji(
              O,
              w,
              // Resolved for outer only
              "prop",
              zt(E)
            );
          }
          return N = KC(
            null,
            t,
            E,
            Vi(E.type, w),
            // The inner type can have defaults too
            l
          ), N;
        }
      }
      var j = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Ye && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function xb(e, t, a, l, o) {
      Dy(e, t), t.tag = M;
      var d;
      return bl(a) ? (d = !0, Fm(t)) : d = !1, Pf(t, o), oC(t, a, l), d0(t, a, l, o), i1(null, t, a, !0, d, o);
    }
    function Db(e, t, a, l) {
      Dy(e, t);
      var o = t.pendingProps, d;
      {
        var v = zf(t, a, !1);
        d = Af(t, v);
      }
      Pf(t, l);
      var g, E;
      gl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = zt(a) || "Unknown";
          J0[T] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), J0[T] = !0);
        }
        t.mode & en && Pi.recordLegacyContextWarning(t, null), Va(!0), sh.current = t, g = Qf(null, t, a, o, d, l), E = qf(), Va(!1);
      }
      if (nu(), t.flags |= fl, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var w = zt(a) || "Unknown";
        ch[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), ch[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var N = zt(a) || "Unknown";
          ch[N] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), ch[N] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return bl(a) ? (O = !0, Fm(t)) : O = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, JS(t), uC(t, g), d0(t, a, o, l), i1(null, t, a, !0, O, l);
      } else {
        if (t.tag = k, t.mode & en) {
          wn(!0);
          try {
            g = Qf(null, t, a, o, d, l), E = qf();
          } finally {
            wn(!1);
          }
        }
        return gr() && E && HS(t), aa(null, t, g, l), l1(t, a), t.child;
      }
    }
    function l1(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = ha();
          l && (a += `

Check the render method of \`` + l + "`.");
          var o = l || "", d = e._debugSource;
          d && (o = d.fileName + ":" + d.lineNumber), n1[o] || (n1[o] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = zt(t) || "Unknown";
          t1[v] || (S("%s: Function components do not support getDerivedStateFromProps.", v), t1[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = zt(t) || "Unknown";
          e1[g] || (S("%s: Function components do not support contextType.", g), e1[g] = !0);
        }
      }
    }
    var u1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: ft
    };
    function o1(e) {
      return {
        baseLanes: e,
        cachePool: yb(),
        transitions: null
      };
    }
    function kb(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function bb(e, t, a, l) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return _0(e, th);
    }
    function Ob(e, t) {
      return ho(e.childLanes, t);
    }
    function aT(e, t, a) {
      var l = t.pendingProps;
      jM(t) && (t.flags |= We);
      var o = Ii.current, d = !1, v = (t.flags & We) !== Ue;
      if (v || bb(o, e) ? (d = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (o = Zk(o, yC)), o = Bf(o), Fo(t, o), e === null) {
        IS(t);
        var g = t.memoizedState;
        if (g !== null) {
          var E = g.dehydrated;
          if (E !== null)
            return zb(t, E);
        }
        var T = l.children, w = l.fallback;
        if (d) {
          var N = Mb(t, T, w, a), O = t.child;
          return O.memoizedState = o1(a), t.memoizedState = u1, N;
        } else
          return s1(t, T);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var Y = j.dehydrated;
          if (Y !== null)
            return Ab(e, t, v, l, Y, j, a);
        }
        if (d) {
          var B = l.fallback, _e = l.children, ze = Nb(e, t, _e, B, a), Oe = t.child, pt = e.child.memoizedState;
          return Oe.memoizedState = pt === null ? o1(a) : kb(pt, a), Oe.childLanes = Ob(e, a), t.memoizedState = u1, ze;
        } else {
          var st = l.children, A = Lb(e, t, st, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function s1(e, t, a) {
      var l = e.mode, o = {
        mode: "visible",
        children: t
      }, d = c1(o, l);
      return d.return = e, e.child = d, d;
    }
    function Mb(e, t, a, l) {
      var o = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, g, E;
      return (o & rt) === He && d !== null ? (g = d, g.childLanes = $, g.pendingProps = v, e.mode & Pe && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), E = Wo(a, o, l, null)) : (g = c1(v, o), E = Wo(a, o, l, null)), g.return = e, E.return = e, g.sibling = E, e.child = g, E;
    }
    function c1(e, t, a) {
      return iw(e, t, $, null);
    }
    function iT(e, t) {
      return ac(e, t);
    }
    function Lb(e, t, a, l) {
      var o = e.child, d = o.sibling, v = iT(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & rt) === He && (v.lanes = l), v.return = t, v.sibling = null, d !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [d], t.flags |= Tt) : g.push(d);
      }
      return t.child = v, v;
    }
    function Nb(e, t, a, l, o) {
      var d = t.mode, v = e.child, g = v.sibling, E = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & rt) === He && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var w = t.child;
        T = w, T.childLanes = $, T.pendingProps = E, t.mode & Pe && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = v.selfBaseDuration, T.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        T = iT(v, E), T.subtreeFlags = v.subtreeFlags & Bn;
      var N;
      return g !== null ? N = ac(g, l) : (N = Wo(l, d, o, null), N.flags |= It), N.return = t, T.return = t, T.sibling = N, t.child = T, N;
    }
    function xy(e, t, a, l) {
      l !== null && BS(l), Vf(t, e.child, null, a);
      var o = t.pendingProps, d = o.children, v = s1(t, d);
      return v.flags |= It, t.memoizedState = null, v;
    }
    function Ub(e, t, a, l, o) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, g = c1(v, d), E = Wo(l, d, o, null);
      return E.flags |= It, g.return = t, E.return = t, g.sibling = E, t.child = g, (t.mode & rt) !== He && Vf(t, e.child, null, o), E;
    }
    function zb(e, t, a) {
      return (e.mode & rt) === He ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : kS(t) ? e.lanes = iu : e.lanes = Ar, null;
    }
    function Ab(e, t, a, l, o, d, v) {
      if (a)
        if (t.flags & ln) {
          t.flags &= ~ln;
          var A = X0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return xy(e, t, v, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var W = l.children, F = l.fallback, J = Ub(e, t, W, F, v), Ce = t.child;
          return Ce.memoizedState = o1(v), t.memoizedState = u1, J;
        }
      else {
        if (wk(), (t.mode & rt) === He)
          return xy(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (kS(o)) {
          var g, E, T;
          {
            var w = PD(o);
            g = w.digest, E = w.message, T = w.stack;
          }
          var N;
          E ? N = new Error(E) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = X0(N, g, T);
          return xy(e, t, v, O);
        }
        var j = Fr(v, e.childLanes);
        if (Wi || j) {
          var Y = Fy();
          if (Y !== null) {
            var B = qg(Y, v);
            if (B !== ft && B !== d.retryLane) {
              d.retryLane = B;
              var _e = Ft;
              ka(e, B), er(Y, e, B, _e);
            }
          }
          M1();
          var ze = X0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return xy(e, t, v, ze);
        } else if (D_(o)) {
          t.flags |= We, t.child = e.child;
          var Oe = uM.bind(null, e);
          return VD(o, Oe), null;
        } else {
          Dk(t, o, d.treeContext);
          var pt = l.children, st = s1(t, pt);
          return st.flags |= ga, st;
        }
      }
    }
    function lT(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = Ke(l.lanes, t)), qS(e.return, t, a);
    }
    function Fb(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ve) {
          var o = l.memoizedState;
          o !== null && lT(l, a, e);
        } else if (l.tag === ht)
          lT(l, a, e);
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
    function Hb(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && iy(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !r1[e])
        if (r1[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Yb(e, t) {
      e !== void 0 && !Ry[e] && (e !== "collapsed" && e !== "hidden" ? (Ry[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ry[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function uT(e, t) {
      {
        var a = Un(e), l = !a && typeof Ci(e) == "function";
        if (a || l) {
          var o = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Pb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!uT(e[a], a))
              return;
        } else {
          var l = Ci(e);
          if (typeof l == "function") {
            var o = l.call(e);
            if (o)
              for (var d = o.next(), v = 0; !d.done; d = o.next()) {
                if (!uT(d.value, v))
                  return;
                v++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function f1(e, t, a, l, o) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: o
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = a, d.tailMode = o);
    }
    function oT(e, t, a) {
      var l = t.pendingProps, o = l.revealOrder, d = l.tail, v = l.children;
      jb(o), Yb(d, o), Pb(v, o), aa(e, t, v, a);
      var g = Ii.current, E = _0(g, th);
      if (E)
        g = C0(g, th), t.flags |= We;
      else {
        var T = e !== null && (e.flags & We) !== Ue;
        T && Fb(t, t.child, a), g = Bf(g);
      }
      if (Fo(t, g), (t.mode & rt) === He)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var w = Hb(t.child), N;
            w === null ? (N = t.child, t.child = null) : (N = w.sibling, w.sibling = null), f1(
              t,
              !1,
              // isBackwards
              N,
              w,
              d
            );
            break;
          }
          case "backwards": {
            var O = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var Y = j.alternate;
              if (Y !== null && iy(Y) === null) {
                t.child = j;
                break;
              }
              var B = j.sibling;
              j.sibling = O, O = j, j = B;
            }
            f1(
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
            f1(
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
    function Vb(e, t, a) {
      g0(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Vf(t, null, l, a) : aa(e, t, l, a), t.child;
    }
    var sT = !1;
    function Ib(e, t, a) {
      var l = t.type, o = l._context, d = t.pendingProps, v = t.memoizedProps, g = d.value;
      {
        "value" in d || sT || (sT = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && ji(E, d, "prop", "Context.Provider");
      }
      if (X_(t, o, g), v !== null) {
        var T = v.value;
        if (xe(T, g)) {
          if (v.children === d.children && !zm())
            return ku(e, t, a);
        } else
          Fk(t, o, a);
      }
      var w = d.children;
      return aa(e, t, w, a), t.child;
    }
    var cT = !1;
    function Bb(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (cT || (cT = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var o = t.pendingProps, d = o.children;
      typeof d != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Pf(t, a);
      var v = Pn(l);
      gl(t);
      var g;
      return sh.current = t, Va(!0), g = d(v), Va(!1), nu(), t.flags |= fl, aa(e, t, g, a), t.child;
    }
    function fh() {
      Wi = !0;
    }
    function Dy(e, t) {
      (t.mode & rt) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= It);
    }
    function ku(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), WC(), Th(t.lanes), Fr(a, t.childLanes) ? (qk(e, t), t.child) : null;
    }
    function Wb(e, t, a) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === l.child)
          l.child = a;
        else {
          var o = l.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var d = l.deletions;
        return d === null ? (l.deletions = [e], l.flags |= Tt) : d.push(e), a.flags |= It, a;
      }
    }
    function d1(e, t) {
      var a = e.lanes;
      return !!Fr(a, t);
    }
    function $b(e, t, a) {
      switch (t.tag) {
        case U:
          nT(t), t.stateNode, jf();
          break;
        case Q:
          vC(t);
          break;
        case M: {
          var l = t.type;
          bl(l) && Fm(t);
          break;
        }
        case I:
          g0(t, t.stateNode.containerInfo);
          break;
        case ie: {
          var o = t.memoizedProps.value, d = t.type._context;
          X_(t, d, o);
          break;
        }
        case ye:
          {
            var v = Fr(a, t.childLanes);
            v && (t.flags |= Xe);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case ve: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Fo(t, Bf(Ii.current)), t.flags |= We, null;
            var T = t.child, w = T.childLanes;
            if (Fr(a, w))
              return aT(e, t, a);
            Fo(t, Bf(Ii.current));
            var N = ku(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Fo(t, Bf(Ii.current));
          break;
        }
        case ht: {
          var O = (e.flags & We) !== Ue, j = Fr(a, t.childLanes);
          if (O) {
            if (j)
              return oT(e, t, a);
            t.flags |= We;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Fo(t, Ii.current), j)
            break;
          return null;
        }
        case Ie:
        case et:
          return t.lanes = $, JC(e, t, a);
      }
      return ku(e, t, a);
    }
    function fT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Wb(e, t, V1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, o = t.pendingProps;
        if (l !== o || zm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Wi = !0;
        else {
          var d = d1(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Ue)
            return Wi = !1, $b(e, t, a);
          (e.flags & Es) !== Ue ? Wi = !0 : Wi = !1;
        }
      } else if (Wi = !1, gr() && gk(t)) {
        var v = t.index, g = Sk();
        H_(t, g, v);
      }
      switch (t.lanes = $, t.tag) {
        case P:
          return Db(e, t, t.type, a);
        case it: {
          var E = t.elementType;
          return Rb(e, t, E, a);
        }
        case k: {
          var T = t.type, w = t.pendingProps, N = t.elementType === T ? w : Vi(T, w);
          return a1(e, t, T, N, a);
        }
        case M: {
          var O = t.type, j = t.pendingProps, Y = t.elementType === O ? j : Vi(O, j);
          return tT(e, t, O, Y, a);
        }
        case U:
          return Cb(e, t, a);
        case Q:
          return Tb(e, t, a);
        case ne:
          return wb(e, t);
        case ve:
          return aT(e, t, a);
        case I:
          return Vb(e, t, a);
        case ee: {
          var B = t.type, _e = t.pendingProps, ze = t.elementType === B ? _e : Vi(B, _e);
          return XC(e, t, B, ze, a);
        }
        case ae:
          return Sb(e, t, a);
        case se:
          return Eb(e, t, a);
        case ye:
          return _b(e, t, a);
        case ie:
          return Ib(e, t, a);
        case Me:
          return Bb(e, t, a);
        case le: {
          var Oe = t.type, pt = t.pendingProps, st = Vi(Oe, pt);
          if (t.type !== t.elementType) {
            var A = Oe.propTypes;
            A && ji(
              A,
              st,
              // Resolved for outer only
              "prop",
              zt(Oe)
            );
          }
          return st = Vi(Oe.type, st), KC(e, t, Oe, st, a);
        }
        case he:
          return ZC(e, t, t.type, t.pendingProps, a);
        case tt: {
          var W = t.type, F = t.pendingProps, J = t.elementType === W ? F : Vi(W, F);
          return xb(e, t, W, J, a);
        }
        case ht:
          return oT(e, t, a);
        case Vt:
          break;
        case Ie:
          return JC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= Xe;
    }
    function dT(e) {
      e.flags |= Or, e.flags |= $d;
    }
    var pT, p1, hT, vT;
    pT = function(e, t, a, l) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === Q || o.tag === ne)
          vD(e, o.stateNode);
        else if (o.tag !== I) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, p1 = function(e, t) {
    }, hT = function(e, t, a, l, o) {
      var d = e.memoizedProps;
      if (d !== l) {
        var v = t.stateNode, g = S0(), E = yD(v, a, d, l, o, g);
        t.updateQueue = E, E && Xf(t);
      }
    }, vT = function(e, t, a, l) {
      a !== l && Xf(t);
    };
    function dh(e, t) {
      if (!gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, l = null; a !== null; )
              a.alternate !== null && (l = a), a = a.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, d = null; o !== null; )
              o.alternate !== null && (d = o), o = o.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Er(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, l = Ue;
      if (t) {
        if ((e.mode & Pe) !== He) {
          for (var E = e.selfBaseDuration, T = e.child; T !== null; )
            a = Ke(a, Ke(T.lanes, T.childLanes)), l |= T.subtreeFlags & Bn, l |= T.flags & Bn, E += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = E;
        } else
          for (var w = e.child; w !== null; )
            a = Ke(a, Ke(w.lanes, w.childLanes)), l |= w.subtreeFlags & Bn, l |= w.flags & Bn, w.return = e, w = w.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & Pe) !== He) {
          for (var o = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = Ke(a, Ke(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, o += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = o, e.treeBaseDuration = d;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), l |= g.subtreeFlags, l |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function Gb(e, t, a) {
      if (Lk() && (t.mode & rt) !== He && (t.flags & We) === Ue)
        return W_(t), jf(), t.flags |= ln | Zr | An, !1;
      var l = Vm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ok(t), Er(t), (t.mode & Pe) !== He) {
            var o = a !== null;
            if (o) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (jf(), (t.flags & We) === Ue && (t.memoizedState = null), t.flags |= Xe, Er(t), (t.mode & Pe) !== He) {
            var v = a !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return $_(), !0;
    }
    function mT(e, t, a) {
      var l = t.pendingProps;
      switch (jS(t), t.tag) {
        case P:
        case it:
        case he:
        case k:
        case ee:
        case ae:
        case se:
        case ye:
        case Me:
        case le:
          return Er(t), null;
        case M: {
          var o = t.type;
          return bl(o) && Am(t), Er(t), null;
        }
        case U: {
          var d = t.stateNode;
          if (If(t), zS(t), w0(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = Vm(t);
            if (v)
              Xf(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ln) !== Ue) && (t.flags |= ya, $_());
            }
          }
          return p1(e, t), Er(t), null;
        }
        case Q: {
          E0(t);
          var E = hC(), T = t.type;
          if (e !== null && t.stateNode != null)
            hT(e, t, T, l, E), e.ref !== t.ref && dT(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Er(t), null;
            }
            var w = S0(), N = Vm(t);
            if (N)
              kk(t, E, w) && Xf(t);
            else {
              var O = hD(T, l, E, w, t);
              pT(O, t, !1, !1), t.stateNode = O, mD(O, T, l, E) && Xf(t);
            }
            t.ref !== null && dT(t);
          }
          return Er(t), null;
        }
        case ne: {
          var j = l;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            vT(e, t, Y, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var B = hC(), _e = S0(), ze = Vm(t);
            ze ? bk(t) && Xf(t) : t.stateNode = gD(j, B, _e, t);
          }
          return Er(t), null;
        }
        case ve: {
          Wf(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var pt = Gb(e, t, Oe);
            if (!pt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & We) !== Ue)
            return t.lanes = a, (t.mode & Pe) !== He && q0(t), t;
          var st = Oe !== null, A = e !== null && e.memoizedState !== null;
          if (st !== A && st) {
            var W = t.child;
            if (W.flags |= dl, (t.mode & rt) !== He) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !yt);
              F || _0(Ii.current, yC) ? QO() : M1();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= Xe), Er(t), (t.mode & Pe) !== He && st) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case I:
          return If(t), p1(e, t), e === null && fk(t.stateNode.containerInfo), Er(t), null;
        case ie:
          var me = t.type._context;
          return QS(me, t), Er(t), null;
        case tt: {
          var Be = t.type;
          return bl(Be) && Am(t), Er(t), null;
        }
        case ht: {
          Wf(t);
          var Qe = t.memoizedState;
          if (Qe === null)
            return Er(t), null;
          var Nt = (t.flags & We) !== Ue, St = Qe.rendering;
          if (St === null)
            if (Nt)
              dh(Qe, !1);
            else {
              var bn = XO() && (e === null || (e.flags & We) === Ue);
              if (!bn)
                for (var Et = t.child; Et !== null; ) {
                  var En = iy(Et);
                  if (En !== null) {
                    Nt = !0, t.flags |= We, dh(Qe, !1);
                    var Pr = En.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= Xe), t.subtreeFlags = Ue, Xk(t, a), Fo(t, C0(Ii.current, th)), t.child;
                  }
                  Et = Et.sibling;
                }
              Qe.tail !== null && Jt() > FT() && (t.flags |= We, Nt = !0, dh(Qe, !1), t.lanes = ip);
            }
          else {
            if (!Nt) {
              var Rr = iy(St);
              if (Rr !== null) {
                t.flags |= We, Nt = !0;
                var Xa = Rr.updateQueue;
                if (Xa !== null && (t.updateQueue = Xa, t.flags |= Xe), dh(Qe, !0), Qe.tail === null && Qe.tailMode === "hidden" && !St.alternate && !gr())
                  return Er(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Jt() * 2 - Qe.renderingStartTime > FT() && a !== Ar && (t.flags |= We, Nt = !0, dh(Qe, !1), t.lanes = ip);
            }
            if (Qe.isBackwards)
              St.sibling = t.child, t.child = St;
            else {
              var ua = Qe.last;
              ua !== null ? ua.sibling = St : t.child = St, Qe.last = St;
            }
          }
          if (Qe.tail !== null) {
            var oa = Qe.tail;
            Qe.rendering = oa, Qe.tail = oa.sibling, Qe.renderingStartTime = Jt(), oa.sibling = null;
            var Vr = Ii.current;
            return Nt ? Vr = C0(Vr, th) : Vr = Bf(Vr), Fo(t, Vr), oa;
          }
          return Er(t), null;
        }
        case Vt:
          break;
        case Ie:
        case et: {
          O1(t);
          var Nu = t.memoizedState, ad = Nu !== null;
          if (e !== null) {
            var kh = e.memoizedState, Fl = kh !== null;
            Fl !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Ee && (t.flags |= dl);
          }
          return !ad || (t.mode & rt) === He ? Er(t) : Fr(Al, Ar) && (Er(t), t.subtreeFlags & (It | Xe) && (t.flags |= dl)), null;
        }
        case hn:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qb(e, t, a) {
      switch (jS(t), t.tag) {
        case M: {
          var l = t.type;
          bl(l) && Am(t);
          var o = t.flags;
          return o & An ? (t.flags = o & ~An | We, (t.mode & Pe) !== He && q0(t), t) : null;
        }
        case U: {
          t.stateNode, If(t), zS(t), w0();
          var d = t.flags;
          return (d & An) !== Ue && (d & We) === Ue ? (t.flags = d & ~An | We, t) : null;
        }
        case Q:
          return E0(t), null;
        case ve: {
          Wf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            jf();
          }
          var g = t.flags;
          return g & An ? (t.flags = g & ~An | We, (t.mode & Pe) !== He && q0(t), t) : null;
        }
        case ht:
          return Wf(t), null;
        case I:
          return If(t), null;
        case ie:
          var E = t.type._context;
          return QS(E, t), null;
        case Ie:
        case et:
          return O1(t), null;
        case hn:
          return null;
        default:
          return null;
      }
    }
    function yT(e, t, a) {
      switch (jS(t), t.tag) {
        case M: {
          var l = t.type.childContextTypes;
          l != null && Am(t);
          break;
        }
        case U: {
          t.stateNode, If(t), zS(t), w0();
          break;
        }
        case Q: {
          E0(t);
          break;
        }
        case I:
          If(t);
          break;
        case ve:
          Wf(t);
          break;
        case ht:
          Wf(t);
          break;
        case ie:
          var o = t.type._context;
          QS(o, t);
          break;
        case Ie:
        case et:
          O1(t);
          break;
      }
    }
    var gT = null;
    gT = /* @__PURE__ */ new Set();
    var ky = !1, _r = !1, qb = typeof WeakSet == "function" ? WeakSet : Set, De = null, Kf = null, Zf = null;
    function Xb(e) {
      eu(null, function() {
        throw e;
      }), Bd();
    }
    var Kb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Pe)
        try {
          Ul(), t.componentWillUnmount();
        } finally {
          Nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function ST(e, t) {
      try {
        Yo(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function h1(e, t, a) {
      try {
        Kb(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function Zb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function ET(e, t) {
      try {
        CT(e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function Jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var l;
          try {
            if (Cn && sa && e.mode & Pe)
              try {
                Ul(), l = a(null);
              } finally {
                Nl(e);
              }
            else
              l = a(null);
          } catch (o) {
            Gt(e, t, o);
          }
          typeof l == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function by(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var _T = !1;
    function Jb(e, t) {
      dD(e.containerInfo), De = t, eO();
      var a = _T;
      return _T = !1, a;
    }
    function eO() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & io) !== Ue && t !== null ? (t.return = e, De = t) : tO();
      }
    }
    function tO() {
      for (; De !== null; ) {
        var e = De;
        Mt(e);
        try {
          nO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function nO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ya) !== Ue) {
        switch (Mt(e), e.tag) {
          case k:
          case ee:
          case he:
            break;
          case M: {
            if (t !== null) {
              var l = t.memoizedProps, o = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Js && (d.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), d.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Vi(e.type, l), o);
              {
                var g = gT;
                v === void 0 && !g.has(e.type) && (g.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var E = e.stateNode;
              FD(E.containerInfo);
            }
            break;
          }
          case Q:
          case ne:
          case I:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function $i(e, t, a) {
      var l = t.updateQueue, o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var d = o.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & Sr) !== ba ? Pc(t) : (e & Qn) !== ba && Vc(t), (e & Ol) !== ba && Rh(!0), by(t, a, g), (e & Ol) !== ba && Rh(!1), (e & Sr) !== ba ? Pv() : (e & Qn) !== ba && lo());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function Yo(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next, d = o;
        do {
          if ((d.tag & e) === e) {
            (e & Sr) !== ba ? Yv(t) : (e & Qn) !== ba && Vv(t);
            var v = d.create;
            (e & Ol) !== ba && Rh(!0), d.destroy = v(), (e & Ol) !== ba && Rh(!1), (e & Sr) !== ba ? np() : (e & Qn) !== ba && Iv();
            {
              var g = d.destroy;
              if (g !== void 0 && typeof g != "function") {
                var E = void 0;
                (d.tag & Qn) !== Ue ? E = "useLayoutEffect" : (d.tag & Ol) !== Ue ? E = "useInsertionEffect" : E = "useEffect";
                var T = void 0;
                g === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? T = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + g, S("%s must not return anything besides a function, which is used for clean-up.%s", E, T);
              }
            }
          }
          d = d.next;
        } while (d !== o);
      }
    }
    function rO(e, t) {
      if ((t.flags & Xe) !== Ue)
        switch (t.tag) {
          case ye: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, o = l.id, d = l.onPostCommit, v = IC(), g = t.alternate === null ? "mount" : "update";
            VC() && (g = "nested-update"), typeof d == "function" && d(o, g, a, v);
            var E = t.return;
            e:
              for (; E !== null; ) {
                switch (E.tag) {
                  case U:
                    var T = E.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                  case ye:
                    var w = E.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                }
                E = E.return;
              }
            break;
          }
        }
    }
    function aO(e, t, a, l) {
      if ((a.flags & ur) !== Ue)
        switch (a.tag) {
          case k:
          case ee:
          case he: {
            if (!_r)
              if (a.mode & Pe)
                try {
                  Ul(), Yo(Qn | Gn, a);
                } finally {
                  Nl(a);
                }
              else
                Yo(Qn | Gn, a);
            break;
          }
          case M: {
            var o = a.stateNode;
            if (a.flags & Xe && !_r)
              if (t === null)
                if (a.type === a.elementType && !Js && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Pe)
                  try {
                    Ul(), o.componentDidMount();
                  } finally {
                    Nl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Vi(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Js && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Pe)
                  try {
                    Ul(), o.componentDidUpdate(d, v, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Nl(a);
                  }
                else
                  o.componentDidUpdate(d, v, o.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !Js && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), nC(a, g, o));
            break;
          }
          case U: {
            var E = a.updateQueue;
            if (E !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    T = a.child.stateNode;
                    break;
                  case M:
                    T = a.child.stateNode;
                    break;
                }
              nC(a, E, T);
            }
            break;
          }
          case Q: {
            var w = a.stateNode;
            if (t === null && a.flags & Xe) {
              var N = a.type, O = a.memoizedProps;
              TD(w, N, O);
            }
            break;
          }
          case ne:
            break;
          case I:
            break;
          case ye: {
            {
              var j = a.memoizedProps, Y = j.onCommit, B = j.onRender, _e = a.stateNode.effectDuration, ze = IC(), Oe = t === null ? "mount" : "update";
              VC() && (Oe = "nested-update"), typeof B == "function" && B(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Oe, _e, ze), tM(a);
                var pt = a.return;
                e:
                  for (; pt !== null; ) {
                    switch (pt.tag) {
                      case U:
                        var st = pt.stateNode;
                        st.effectDuration += _e;
                        break e;
                      case ye:
                        var A = pt.stateNode;
                        A.effectDuration += _e;
                        break e;
                    }
                    pt = pt.return;
                  }
              }
            }
            break;
          }
          case ve: {
            dO(e, a);
            break;
          }
          case ht:
          case tt:
          case Vt:
          case Ie:
          case et:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      _r || a.flags & Or && CT(a);
    }
    function iO(e) {
      switch (e.tag) {
        case k:
        case ee:
        case he: {
          if (e.mode & Pe)
            try {
              Ul(), ST(e, e.return);
            } finally {
              Nl(e);
            }
          else
            ST(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Zb(e, e.return, t), ET(e, e.return);
          break;
        }
        case Q: {
          ET(e, e.return);
          break;
        }
      }
    }
    function lO(e, t) {
      for (var a = null, l = e; ; ) {
        if (l.tag === Q) {
          if (a === null) {
            a = l;
            try {
              var o = l.stateNode;
              t ? ND(o) : zD(l.stateNode, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
          }
        } else if (l.tag === ne) {
          if (a === null)
            try {
              var d = l.stateNode;
              t ? UD(d) : AD(d, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
        } else if (!((l.tag === Ie || l.tag === et) && l.memoizedState !== null && l !== e)) {
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
    function CT(e) {
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
          var o;
          if (e.mode & Pe)
            try {
              Ul(), o = t(l);
            } finally {
              Nl(e);
            }
          else
            o = t(l);
          typeof o == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = l;
      }
    }
    function uO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function TT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, TT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && hk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function oO(e) {
      for (var t = e.return; t !== null; ) {
        if (wT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wT(e) {
      return e.tag === Q || e.tag === U || e.tag === I;
    }
    function RT(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || wT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== ne && t.tag !== lt; ) {
            if (t.flags & It || t.child === null || t.tag === I)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & It))
            return t.stateNode;
        }
    }
    function sO(e) {
      var t = oO(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & wt && (x_(a), t.flags &= ~wt);
          var l = RT(e);
          m1(e, l, a);
          break;
        }
        case U:
        case I: {
          var o = t.stateNode.containerInfo, d = RT(e);
          v1(e, d, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function v1(e, t, a) {
      var l = e.tag, o = l === Q || l === ne;
      if (o) {
        var d = e.stateNode;
        t ? bD(a, d, t) : DD(a, d);
      } else if (l !== I) {
        var v = e.child;
        if (v !== null) {
          v1(v, t, a);
          for (var g = v.sibling; g !== null; )
            v1(g, t, a), g = g.sibling;
        }
      }
    }
    function m1(e, t, a) {
      var l = e.tag, o = l === Q || l === ne;
      if (o) {
        var d = e.stateNode;
        t ? kD(a, d, t) : xD(a, d);
      } else if (l !== I) {
        var v = e.child;
        if (v !== null) {
          m1(v, t, a);
          for (var g = v.sibling; g !== null; )
            m1(g, t, a), g = g.sibling;
        }
      }
    }
    var Cr = null, Gi = !1;
    function cO(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case Q: {
                Cr = l.stateNode, Gi = !1;
                break e;
              }
              case U: {
                Cr = l.stateNode.containerInfo, Gi = !0;
                break e;
              }
              case I: {
                Cr = l.stateNode.containerInfo, Gi = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (Cr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        xT(e, t, a), Cr = null, Gi = !1;
      }
      uO(a);
    }
    function Po(e, t, a) {
      for (var l = a.child; l !== null; )
        xT(e, t, l), l = l.sibling;
    }
    function xT(e, t, a) {
      switch (ep(a), a.tag) {
        case Q:
          _r || Jf(a, t);
        case ne: {
          {
            var l = Cr, o = Gi;
            Cr = null, Po(e, t, a), Cr = l, Gi = o, Cr !== null && (Gi ? MD(Cr, a.stateNode) : OD(Cr, a.stateNode));
          }
          return;
        }
        case lt: {
          Cr !== null && (Gi ? LD(Cr, a.stateNode) : DS(Cr, a.stateNode));
          return;
        }
        case I: {
          {
            var d = Cr, v = Gi;
            Cr = a.stateNode.containerInfo, Gi = !0, Po(e, t, a), Cr = d, Gi = v;
          }
          return;
        }
        case k:
        case ee:
        case le:
        case he: {
          if (!_r) {
            var g = a.updateQueue;
            if (g !== null) {
              var E = g.lastEffect;
              if (E !== null) {
                var T = E.next, w = T;
                do {
                  var N = w, O = N.destroy, j = N.tag;
                  O !== void 0 && ((j & Ol) !== ba ? by(a, t, O) : (j & Qn) !== ba && (Vc(a), a.mode & Pe ? (Ul(), by(a, t, O), Nl(a)) : by(a, t, O), lo())), w = w.next;
                } while (w !== T);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case M: {
          if (!_r) {
            Jf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && h1(a, t, Y);
          }
          Po(e, t, a);
          return;
        }
        case Vt: {
          Po(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & rt
          ) {
            var B = _r;
            _r = B || a.memoizedState !== null, Po(e, t, a), _r = B;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function fO(e) {
      e.memoizedState;
    }
    function dO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var o = l.memoizedState;
          if (o !== null) {
            var d = o.dehydrated;
            d !== null && KD(d);
          }
        }
      }
    }
    function DT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new qb()), t.forEach(function(l) {
          var o = oM.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Wn)
              if (Kf !== null && Zf !== null)
                wh(Zf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(o, o);
          }
        });
      }
    }
    function pO(e, t, a) {
      Kf = a, Zf = e, Mt(t), kT(t, e), Mt(t), Kf = null, Zf = null;
    }
    function Qi(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var o = 0; o < l.length; o++) {
          var d = l[o];
          try {
            cO(e, t, d);
          } catch (E) {
            Gt(d, t, E);
          }
        }
      var v = xg();
      if (t.subtreeFlags & Nr)
        for (var g = t.child; g !== null; )
          Mt(g), kT(g, e), g = g.sibling;
      Mt(v);
    }
    function kT(e, t, a) {
      var l = e.alternate, o = e.flags;
      switch (e.tag) {
        case k:
        case ee:
        case le:
        case he: {
          if (Qi(t, e), zl(e), o & Xe) {
            try {
              $i(Ol | Gn, e, e.return), Yo(Ol | Gn, e);
            } catch (Be) {
              Gt(e, e.return, Be);
            }
            if (e.mode & Pe) {
              try {
                Ul(), $i(Qn | Gn, e, e.return);
              } catch (Be) {
                Gt(e, e.return, Be);
              }
              Nl(e);
            } else
              try {
                $i(Qn | Gn, e, e.return);
              } catch (Be) {
                Gt(e, e.return, Be);
              }
          }
          return;
        }
        case M: {
          Qi(t, e), zl(e), o & Or && l !== null && Jf(l, l.return);
          return;
        }
        case Q: {
          Qi(t, e), zl(e), o & Or && l !== null && Jf(l, l.return);
          {
            if (e.flags & wt) {
              var d = e.stateNode;
              try {
                x_(d);
              } catch (Be) {
                Gt(e, e.return, Be);
              }
            }
            if (o & Xe) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, E = l !== null ? l.memoizedProps : g, T = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    wD(v, w, T, E, g, e);
                  } catch (Be) {
                    Gt(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case ne: {
          if (Qi(t, e), zl(e), o & Xe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, O = e.memoizedProps, j = l !== null ? l.memoizedProps : O;
            try {
              RD(N, j, O);
            } catch (Be) {
              Gt(e, e.return, Be);
            }
          }
          return;
        }
        case U: {
          if (Qi(t, e), zl(e), o & Xe && l !== null) {
            var Y = l.memoizedState;
            if (Y.isDehydrated)
              try {
                XD(t.containerInfo);
              } catch (Be) {
                Gt(e, e.return, Be);
              }
          }
          return;
        }
        case I: {
          Qi(t, e), zl(e);
          return;
        }
        case ve: {
          Qi(t, e), zl(e);
          var B = e.child;
          if (B.flags & dl) {
            var _e = B.stateNode, ze = B.memoizedState, Oe = ze !== null;
            if (_e.isHidden = Oe, Oe) {
              var pt = B.alternate !== null && B.alternate.memoizedState !== null;
              pt || GO();
            }
          }
          if (o & Xe) {
            try {
              fO(e);
            } catch (Be) {
              Gt(e, e.return, Be);
            }
            DT(e);
          }
          return;
        }
        case Ie: {
          var st = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & rt
          ) {
            var A = _r;
            _r = A || st, Qi(t, e), _r = A;
          } else
            Qi(t, e);
          if (zl(e), o & dl) {
            var W = e.stateNode, F = e.memoizedState, J = F !== null, Ce = e;
            if (W.isHidden = J, J && !st && (Ce.mode & rt) !== He) {
              De = Ce;
              for (var me = Ce.child; me !== null; )
                De = me, vO(me), me = me.sibling;
            }
            lO(Ce, J);
          }
          return;
        }
        case ht: {
          Qi(t, e), zl(e), o & Xe && DT(e);
          return;
        }
        case Vt:
          return;
        default: {
          Qi(t, e), zl(e);
          return;
        }
      }
    }
    function zl(e) {
      var t = e.flags;
      if (t & It) {
        try {
          sO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~It;
      }
      t & ga && (e.flags &= ~ga);
    }
    function hO(e, t, a) {
      Kf = a, Zf = t, De = e, bT(e, t, a), Kf = null, Zf = null;
    }
    function bT(e, t, a) {
      for (var l = (e.mode & rt) !== He; De !== null; ) {
        var o = De, d = o.child;
        if (o.tag === Ie && l) {
          var v = o.memoizedState !== null, g = v || ky;
          if (g) {
            y1(e, t, a);
            continue;
          } else {
            var E = o.alternate, T = E !== null && E.memoizedState !== null, w = T || _r, N = ky, O = _r;
            ky = g, _r = w, _r && !O && (De = o, mO(o));
            for (var j = d; j !== null; )
              De = j, bT(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            De = o, ky = N, _r = O, y1(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & ur) !== Ue && d !== null ? (d.return = o, De = d) : y1(e, t, a);
      }
    }
    function y1(e, t, a) {
      for (; De !== null; ) {
        var l = De;
        if ((l.flags & ur) !== Ue) {
          var o = l.alternate;
          Mt(l);
          try {
            aO(t, o, l, a);
          } catch (v) {
            Gt(l, l.return, v);
          }
          Tn();
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
    function vO(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case k:
          case ee:
          case le:
          case he: {
            if (t.mode & Pe)
              try {
                Ul(), $i(Qn, t, t.return);
              } finally {
                Nl(t);
              }
            else
              $i(Qn, t, t.return);
            break;
          }
          case M: {
            Jf(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && h1(t, t.return, l);
            break;
          }
          case Q: {
            Jf(t, t.return);
            break;
          }
          case Ie: {
            var o = t.memoizedState !== null;
            if (o) {
              OT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : OT(e);
      }
    }
    function OT(e) {
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
    function mO(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Ie) {
          var l = t.memoizedState !== null;
          if (l) {
            MT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : MT(e);
      }
    }
    function MT(e) {
      for (; De !== null; ) {
        var t = De;
        Mt(t);
        try {
          iO(t);
        } catch (l) {
          Gt(t, t.return, l);
        }
        if (Tn(), t === e) {
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
    function yO(e, t, a, l) {
      De = t, gO(t, e, a, l);
    }
    function gO(e, t, a, l) {
      for (; De !== null; ) {
        var o = De, d = o.child;
        (o.subtreeFlags & Sa) !== Ue && d !== null ? (d.return = o, De = d) : SO(e, t, a, l);
      }
    }
    function SO(e, t, a, l) {
      for (; De !== null; ) {
        var o = De;
        if ((o.flags & Xt) !== Ue) {
          Mt(o);
          try {
            EO(t, o, a, l);
          } catch (v) {
            Gt(o, o.return, v);
          }
          Tn();
        }
        if (o === e) {
          De = null;
          return;
        }
        var d = o.sibling;
        if (d !== null) {
          d.return = o.return, De = d;
          return;
        }
        De = o.return;
      }
    }
    function EO(e, t, a, l) {
      switch (t.tag) {
        case k:
        case ee:
        case he: {
          if (t.mode & Pe) {
            Q0();
            try {
              Yo(Sr | Gn, t);
            } finally {
              G0(t);
            }
          } else
            Yo(Sr | Gn, t);
          break;
        }
      }
    }
    function _O(e) {
      De = e, CO();
    }
    function CO() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Tt) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var o = a[l];
              De = o, RO(o, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var g = v.sibling;
                    v.sibling = null, v = g;
                  } while (v !== null);
                }
              }
            }
            De = e;
          }
        }
        (e.subtreeFlags & Sa) !== Ue && t !== null ? (t.return = e, De = t) : TO();
      }
    }
    function TO() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Xt) !== Ue && (Mt(e), wO(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function wO(e) {
      switch (e.tag) {
        case k:
        case ee:
        case he: {
          e.mode & Pe ? (Q0(), $i(Sr | Gn, e, e.return), G0(e)) : $i(Sr | Gn, e, e.return);
          break;
        }
      }
    }
    function RO(e, t) {
      for (; De !== null; ) {
        var a = De;
        Mt(a), DO(a, t), Tn();
        var l = a.child;
        l !== null ? (l.return = a, De = l) : xO(e);
      }
    }
    function xO(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, l = t.return;
        if (TT(t), t === e) {
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
    function DO(e, t) {
      switch (e.tag) {
        case k:
        case ee:
        case he: {
          e.mode & Pe ? (Q0(), $i(Sr, e, t), G0(e)) : $i(Sr, e, t);
          break;
        }
      }
    }
    function kO(e) {
      switch (e.tag) {
        case k:
        case ee:
        case he: {
          try {
            Yo(Qn | Gn, e);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case M: {
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
    function bO(e) {
      switch (e.tag) {
        case k:
        case ee:
        case he: {
          try {
            Yo(Sr | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function OO(e) {
      switch (e.tag) {
        case k:
        case ee:
        case he: {
          try {
            $i(Qn | Gn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && h1(e, e.return, t);
          break;
        }
      }
    }
    function MO(e) {
      switch (e.tag) {
        case k:
        case ee:
        case he:
          try {
            $i(Sr | Gn, e, e.return);
          } catch (t) {
            Gt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ph = Symbol.for;
      ph("selector.component"), ph("selector.has_pseudo_class"), ph("selector.role"), ph("selector.test_id"), ph("selector.text");
    }
    var LO = [];
    function NO() {
      LO.forEach(function(e) {
        return e();
      });
    }
    var UO = f.ReactCurrentActQueue;
    function zO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function LT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && UO.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var AO = Math.ceil, g1 = f.ReactCurrentDispatcher, S1 = f.ReactCurrentOwner, Tr = f.ReactCurrentBatchConfig, qi = f.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), NT = (
      /*               */
      1
    ), wr = (
      /*                */
      2
    ), mi = (
      /*                */
      4
    ), bu = 0, hh = 1, ec = 2, Oy = 3, vh = 4, UT = 5, E1 = 6, dt = Kn, ia = null, pn = null, Zn = $, Al = $, _1 = Mo($), Jn = bu, mh = null, My = $, yh = $, Ly = $, gh = null, Oa = null, C1 = 0, zT = 500, AT = 1 / 0, FO = 500, Ou = null;
    function Sh() {
      AT = Jt() + FO;
    }
    function FT() {
      return AT;
    }
    var Ny = !1, T1 = null, ed = null, tc = !1, Vo = null, Eh = $, w1 = [], R1 = null, HO = 50, _h = 0, x1 = null, D1 = !1, Uy = !1, jO = 50, td = 0, zy = null, Ch = Ft, Ay = $, HT = !1;
    function Fy() {
      return ia;
    }
    function la() {
      return (dt & (wr | mi)) !== Kn ? Jt() : (Ch !== Ft || (Ch = Jt()), Ch);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & rt) === He)
        return Ve;
      if ((dt & wr) !== Kn && Zn !== $)
        return Rn(Zn);
      var a = zk() !== Uk;
      if (a) {
        if (Tr.transition !== null) {
          var l = Tr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Ay === ft && (Ay = op()), Ay;
      }
      var o = Ta();
      if (o !== ft)
        return o;
      var d = SD();
      return d;
    }
    function YO(e) {
      var t = e.mode;
      return (t & rt) === He ? Ve : Qg();
    }
    function er(e, t, a, l) {
      cM(), HT && S("useInsertionEffect must not schedule updates."), D1 && (Uy = !0), du(e, a, l), (dt & wr) !== $ && e === ia ? pM(t) : (Wn && pp(e, t, a), hM(t), e === ia && ((dt & wr) === Kn && (yh = Ke(yh, a)), Jn === vh && Bo(e, Zn)), Ma(e, l), a === Ve && dt === Kn && (t.mode & rt) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !qi.isBatchingLegacy && (Sh(), F_()));
    }
    function PO(e, t, a) {
      var l = e.current;
      l.lanes = t, du(e, t, a), Ma(e, a);
    }
    function VO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (dt & wr) !== Kn
      );
    }
    function Ma(e, t) {
      var a = e.callbackNode;
      Wg(e, t);
      var l = xs(e, e === ia ? Zn : $);
      if (l === $) {
        a !== null && ew(a), e.callbackNode = null, e.callbackPriority = ft;
        return;
      }
      var o = gn(l), d = e.callbackPriority;
      if (d === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(qi.current !== null && a !== U1)) {
        a == null && d !== Ve && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ew(a);
      var v;
      if (o === Ve)
        e.tag === Lo ? (qi.isBatchingLegacy !== null && (qi.didScheduleLegacyUpdate = !0), yk(PT.bind(null, e))) : A_(PT.bind(null, e)), qi.current !== null ? qi.current.push(No) : _D(function() {
          (dt & (wr | mi)) === Kn && No();
        }), v = null;
      else {
        var g;
        switch (Ms(l)) {
          case or:
            g = Hc;
            break;
          case $n:
            g = ta;
            break;
          case Ui:
            g = li;
            break;
          case bs:
            g = hl;
            break;
          default:
            g = li;
            break;
        }
        v = z1(g, jT.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = v;
    }
    function jT(e, t) {
      if (cb(), Ch = Ft, Ay = $, (dt & (wr | mi)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = Lu();
      if (l && e.callbackNode !== a)
        return null;
      var o = xs(e, e === ia ? Zn : $);
      if (o === $)
        return null;
      var d = !ks(e, o) && !qv(e, o) && !t, v = d ? ZO(e, o) : jy(e, o);
      if (v !== bu) {
        if (v === ec) {
          var g = lp(e);
          g !== $ && (o = g, v = k1(e, g));
        }
        if (v === hh) {
          var E = mh;
          throw nc(e, $), Bo(e, o), Ma(e, Jt()), E;
        }
        if (v === E1)
          Bo(e, o);
        else {
          var T = !ks(e, o), w = e.current.alternate;
          if (T && !BO(w)) {
            if (v = jy(e, o), v === ec) {
              var N = lp(e);
              N !== $ && (o = N, v = k1(e, N));
            }
            if (v === hh) {
              var O = mh;
              throw nc(e, $), Bo(e, o), Ma(e, Jt()), O;
            }
          }
          e.finishedWork = w, e.finishedLanes = o, IO(e, v, o);
        }
      }
      return Ma(e, Jt()), e.callbackNode === a ? jT.bind(null, e) : null;
    }
    function k1(e, t) {
      var a = gh;
      if (Dn(e)) {
        var l = nc(e, t);
        l.flags |= ln, ck(e.containerInfo);
      }
      var o = jy(e, t);
      if (o !== ec) {
        var d = Oa;
        Oa = a, d !== null && YT(d);
      }
      return o;
    }
    function YT(e) {
      Oa === null ? Oa = e : Oa.push.apply(Oa, e);
    }
    function IO(e, t, a) {
      switch (t) {
        case bu:
        case hh:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Oa, Ou);
          break;
        }
        case Oy: {
          if (Bo(e, a), sf(a) && // do not delay if we're inside an act() scope
          !tw()) {
            var l = C1 + zT - Jt();
            if (l > 10) {
              var o = xs(e, $);
              if (o !== $)
                break;
              var d = e.suspendedLanes;
              if (!fu(d, a)) {
                la(), fp(e, d);
                break;
              }
              e.timeoutHandle = RS(rc.bind(null, e, Oa, Ou), l);
              break;
            }
          }
          rc(e, Oa, Ou);
          break;
        }
        case vh: {
          if (Bo(e, a), Qv(a))
            break;
          if (!tw()) {
            var v = Gv(e, a), g = v, E = Jt() - g, T = sM(E) - E;
            if (T > 10) {
              e.timeoutHandle = RS(rc.bind(null, e, Oa, Ou), T);
              break;
            }
          }
          rc(e, Oa, Ou);
          break;
        }
        case UT: {
          rc(e, Oa, Ou);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function BO(e) {
      for (var t = e; ; ) {
        if (t.flags & Ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var l = a.stores;
            if (l !== null)
              for (var o = 0; o < l.length; o++) {
                var d = l[o], v = d.getSnapshot, g = d.value;
                try {
                  if (!xe(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & Ss && E !== null) {
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
    function Bo(e, t) {
      t = ho(t, Ly), t = ho(t, yh), cp(e, t);
    }
    function PT(e) {
      if (fb(), (dt & (wr | mi)) !== Kn)
        throw new Error("Should not already be working.");
      Lu();
      var t = xs(e, $);
      if (!Fr(t, Ve))
        return Ma(e, Jt()), null;
      var a = jy(e, t);
      if (e.tag !== Lo && a === ec) {
        var l = lp(e);
        l !== $ && (t = l, a = k1(e, l));
      }
      if (a === hh) {
        var o = mh;
        throw nc(e, $), Bo(e, t), Ma(e, Jt()), o;
      }
      if (a === E1)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, rc(e, Oa, Ou), Ma(e, Jt()), null;
    }
    function WO(e, t) {
      t !== $ && (vo(e, Ke(t, Ve)), Ma(e, Jt()), (dt & (wr | mi)) === Kn && (Sh(), No()));
    }
    function b1(e, t) {
      var a = dt;
      dt |= NT;
      try {
        return e(t);
      } finally {
        dt = a, dt === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !qi.isBatchingLegacy && (Sh(), F_());
      }
    }
    function $O(e, t, a, l, o) {
      var d = Ta(), v = Tr.transition;
      try {
        return Tr.transition = null, xn(or), e(t, a, l, o);
      } finally {
        xn(d), Tr.transition = v, dt === Kn && Sh();
      }
    }
    function Mu(e) {
      Vo !== null && Vo.tag === Lo && (dt & (wr | mi)) === Kn && Lu();
      var t = dt;
      dt |= NT;
      var a = Tr.transition, l = Ta();
      try {
        return Tr.transition = null, xn(or), e ? e() : void 0;
      } finally {
        xn(l), Tr.transition = a, dt = t, (dt & (wr | mi)) === Kn && No();
      }
    }
    function VT() {
      return (dt & (wr | mi)) !== Kn;
    }
    function Hy(e, t) {
      jr(_1, Al, e), Al = Ke(Al, t);
    }
    function O1(e) {
      Al = _1.current, Hr(_1, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== xS && (e.timeoutHandle = xS, ED(a)), pn !== null)
        for (var l = pn.return; l !== null; ) {
          var o = l.alternate;
          yT(o, l), l = l.return;
        }
      ia = e;
      var d = ac(e.current, null);
      return pn = d, Zn = Al = t, Jn = bu, mh = null, My = $, yh = $, Ly = $, gh = null, Oa = null, jk(), Pi.discardPendingWarnings(), d;
    }
    function IT(e, t) {
      do {
        var a = pn;
        try {
          if ($m(), SC(), Tn(), S1.current = null, a === null || a.return === null) {
            Jn = hh, mh = t, pn = null;
            return;
          }
          if (Cn && a.mode & Pe && wy(a, !0), Ja)
            if (nu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              Bv(a, l, Zn);
            } else
              Ic(a, t, Zn);
          mb(e, a.return, a, t, Zn), GT(a);
        } catch (o) {
          t = o, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
          continue;
        }
        return;
      } while (!0);
    }
    function BT() {
      var e = g1.current;
      return g1.current = Sy, e === null ? Sy : e;
    }
    function WT(e) {
      g1.current = e;
    }
    function GO() {
      C1 = Jt();
    }
    function Th(e) {
      My = Ke(e, My);
    }
    function QO() {
      Jn === bu && (Jn = Oy);
    }
    function M1() {
      (Jn === bu || Jn === Oy || Jn === ec) && (Jn = vh), ia !== null && (Ds(My) || Ds(yh)) && Bo(ia, Zn);
    }
    function qO(e) {
      Jn !== vh && (Jn = ec), gh === null ? gh = [e] : gh.push(e);
    }
    function XO() {
      return Jn === bu;
    }
    function jy(e, t) {
      var a = dt;
      dt |= wr;
      var l = BT();
      if (ia !== e || Zn !== t) {
        if (Wn) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (wh(e, Zn), o.clear()), df(e, t);
        }
        Ou = hp(), nc(e, t);
      }
      $a(t);
      do
        try {
          KO();
          break;
        } catch (d) {
          IT(e, d);
        }
      while (!0);
      if ($m(), dt = a, WT(l), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return oo(), ia = null, Zn = $, Jn;
    }
    function KO() {
      for (; pn !== null; )
        $T(pn);
    }
    function ZO(e, t) {
      var a = dt;
      dt |= wr;
      var l = BT();
      if (ia !== e || Zn !== t) {
        if (Wn) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (wh(e, Zn), o.clear()), df(e, t);
        }
        Ou = hp(), Sh(), nc(e, t);
      }
      $a(t);
      do
        try {
          JO();
          break;
        } catch (d) {
          IT(e, d);
        }
      while (!0);
      return $m(), WT(l), dt = a, pn !== null ? (Cs(), bu) : (oo(), ia = null, Zn = $, Jn);
    }
    function JO() {
      for (; pn !== null && !Fc(); )
        $T(pn);
    }
    function $T(e) {
      var t = e.alternate;
      Mt(e);
      var a;
      (e.mode & Pe) !== He ? ($0(e), a = L1(t, e, Al), wy(e, !0)) : a = L1(t, e, Al), Tn(), e.memoizedProps = e.pendingProps, a === null ? GT(e) : pn = a, S1.current = null;
    }
    function GT(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & Zr) === Ue) {
          Mt(t);
          var o = void 0;
          if ((t.mode & Pe) === He ? o = mT(a, t, Al) : ($0(t), o = mT(a, t, Al), wy(t, !1)), Tn(), o !== null) {
            pn = o;
            return;
          }
        } else {
          var d = Qb(a, t);
          if (d !== null) {
            d.flags &= zv, pn = d;
            return;
          }
          if ((t.mode & Pe) !== He) {
            wy(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= Zr, l.subtreeFlags = Ue, l.deletions = null;
          else {
            Jn = E1, pn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          pn = E;
          return;
        }
        t = l, pn = t;
      } while (t !== null);
      Jn === bu && (Jn = UT);
    }
    function rc(e, t, a) {
      var l = Ta(), o = Tr.transition;
      try {
        Tr.transition = null, xn(or), eM(e, t, a, l);
      } finally {
        Tr.transition = o, xn(l);
      }
      return null;
    }
    function eM(e, t, a, l) {
      do
        Lu();
      while (Vo !== null);
      if (fM(), (dt & (wr | mi)) !== Kn)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, d = e.finishedLanes;
      if (Yc(d), o === null)
        return tp(), null;
      if (d === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ft;
      var v = Ke(o.lanes, o.childLanes);
      dp(e, v), e === ia && (ia = null, pn = null, Zn = $), ((o.subtreeFlags & Sa) !== Ue || (o.flags & Sa) !== Ue) && (tc || (tc = !0, R1 = a, z1(li, function() {
        return Lu(), null;
      })));
      var g = (o.subtreeFlags & (io | Nr | ur | Sa)) !== Ue, E = (o.flags & (io | Nr | ur | Sa)) !== Ue;
      if (g || E) {
        var T = Tr.transition;
        Tr.transition = null;
        var w = Ta();
        xn(or);
        var N = dt;
        dt |= mi, S1.current = null, Jb(e, o), BC(), pO(e, o, d), pD(e.containerInfo), e.current = o, Wv(d), hO(o, e, d), uo(), Hv(), dt = N, xn(w), Tr.transition = T;
      } else
        e.current = o, BC();
      var O = tc;
      if (tc ? (tc = !1, Vo = e, Eh = d) : (td = 0, zy = null), v = e.pendingLanes, v === $ && (ed = null), O || KT(e.current, !1), Mi(o.stateNode, l), Wn && e.memoizedUpdaters.clear(), NO(), Ma(e, Jt()), t !== null)
        for (var j = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var B = t[Y], _e = B.stack, ze = B.digest;
          j(B.value, {
            componentStack: _e,
            digest: ze
          });
        }
      if (Ny) {
        Ny = !1;
        var Oe = T1;
        throw T1 = null, Oe;
      }
      return Fr(Eh, Ve) && e.tag !== Lo && Lu(), v = e.pendingLanes, Fr(v, Ve) ? (sb(), e === x1 ? _h++ : (_h = 0, x1 = e)) : _h = 0, No(), tp(), null;
    }
    function Lu() {
      if (Vo !== null) {
        var e = Ms(Eh), t = Xg(Ui, e), a = Tr.transition, l = Ta();
        try {
          return Tr.transition = null, xn(t), nM();
        } finally {
          xn(l), Tr.transition = a;
        }
      }
      return !1;
    }
    function tM(e) {
      w1.push(e), tc || (tc = !0, z1(li, function() {
        return Lu(), null;
      }));
    }
    function nM() {
      if (Vo === null)
        return !1;
      var e = R1;
      R1 = null;
      var t = Vo, a = Eh;
      if (Vo = null, Eh = $, (dt & (wr | mi)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      D1 = !0, Uy = !1, $v(a);
      var l = dt;
      dt |= mi, _O(t.current), yO(t, t.current, a, e);
      {
        var o = w1;
        w1 = [];
        for (var d = 0; d < o.length; d++) {
          var v = o[d];
          rO(t, v);
        }
      }
      _s(), KT(t.current, !0), dt = l, No(), Uy ? t === zy ? td++ : (td = 0, zy = t) : td = 0, D1 = !1, Uy = !1, ml(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function QT(e) {
      return ed !== null && ed.has(e);
    }
    function rM(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function aM(e) {
      Ny || (Ny = !0, T1 = e);
    }
    var iM = aM;
    function qT(e, t, a) {
      var l = Zs(a, t), o = $C(e, l, Ve), d = zo(e, o, Ve), v = la();
      d !== null && (du(d, Ve, v), Ma(d, v));
    }
    function Gt(e, t, a) {
      if (Xb(a), Rh(!1), e.tag === U) {
        qT(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === U) {
          qT(l, e, a);
          return;
        } else if (l.tag === M) {
          var o = l.type, d = l.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !QT(d)) {
            var v = Zs(a, e), g = Z0(l, v, Ve), E = zo(l, g, Ve), T = la();
            E !== null && (du(E, Ve, T), Ma(E, T));
            return;
          }
        }
        l = l.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function lM(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var o = la();
      fp(e, a), vM(e), ia === e && fu(Zn, a) && (Jn === vh || Jn === Oy && sf(Zn) && Jt() - C1 < zT ? nc(e, $) : Ly = Ke(Ly, a)), Ma(e, o);
    }
    function XT(e, t) {
      t === ft && (t = YO(e));
      var a = la(), l = ka(e, t);
      l !== null && (du(l, t, a), Ma(l, a));
    }
    function uM(e) {
      var t = e.memoizedState, a = ft;
      t !== null && (a = t.retryLane), XT(e, a);
    }
    function oM(e, t) {
      var a = ft, l;
      switch (e.tag) {
        case ve:
          l = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case ht:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), XT(e, a);
    }
    function sM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : AO(e / 1960) * 1960;
    }
    function cM() {
      if (_h > HO)
        throw _h = 0, x1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > jO && (td = 0, zy = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function fM() {
      Pi.flushLegacyContextWarning(), Pi.flushPendingUnsafeLifecycleWarnings();
    }
    function KT(e, t) {
      Mt(e), Yy(e, Lr, OO), t && Yy(e, tu, MO), Yy(e, Lr, kO), t && Yy(e, tu, bO), Tn();
    }
    function Yy(e, t, a) {
      for (var l = e, o = null; l !== null; ) {
        var d = l.subtreeFlags & t;
        l !== o && l.child !== null && d !== Ue ? l = l.child : ((l.flags & t) !== Ue && a(l), l.sibling !== null ? l = l.sibling : l = o = l.return);
      }
    }
    var Py = null;
    function ZT(e) {
      {
        if ((dt & wr) !== Kn || !(e.mode & rt))
          return;
        var t = e.tag;
        if (t !== P && t !== U && t !== M && t !== k && t !== ee && t !== le && t !== he)
          return;
        var a = qe(e) || "ReactComponent";
        if (Py !== null) {
          if (Py.has(a))
            return;
          Py.add(a);
        } else
          Py = /* @__PURE__ */ new Set([a]);
        var l = mn;
        try {
          Mt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Mt(e) : Tn();
        }
      }
    }
    var L1;
    {
      var dM = null;
      L1 = function(e, t, a) {
        var l = lw(dM, t);
        try {
          return fT(e, t, a);
        } catch (d) {
          if (Rk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if ($m(), SC(), yT(e, t), lw(t, l), t.mode & Pe && $0(t), eu(null, fT, null, e, t, a), Ig()) {
            var o = Bd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var JT = !1, N1;
    N1 = /* @__PURE__ */ new Set();
    function pM(e) {
      if (pa && !lb())
        switch (e.tag) {
          case k:
          case ee:
          case he: {
            var t = pn && qe(pn) || "Unknown", a = t;
            if (!N1.has(a)) {
              N1.add(a);
              var l = qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case M: {
            JT || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), JT = !0);
            break;
          }
        }
    }
    function wh(e, t) {
      if (Wn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          pp(e, l, t);
        });
      }
    }
    var U1 = {};
    function z1(e, t) {
      {
        var a = qi.current;
        return a !== null ? (a.push(t), U1) : Ac(e, t);
      }
    }
    function ew(e) {
      if (e !== U1)
        return Fv(e);
    }
    function tw() {
      return qi.current !== null;
    }
    function hM(e) {
      {
        if (e.mode & rt) {
          if (!LT())
            return;
        } else if (!zO() || dt !== Kn || e.tag !== k && e.tag !== ee && e.tag !== he)
          return;
        if (qi.current === null) {
          var t = mn;
          try {
            Mt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(e));
          } finally {
            t ? Mt(e) : Tn();
          }
        }
      }
    }
    function vM(e) {
      e.tag !== Lo && LT() && qi.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Rh(e) {
      HT = e;
    }
    var yi = null, nd = null, mM = function(e) {
      yi = e;
    };
    function rd(e) {
      {
        if (yi === null)
          return e;
        var t = yi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function A1(e) {
      return rd(e);
    }
    function F1(e) {
      {
        if (yi === null)
          return e;
        var t = yi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = rd(e.render);
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
    function nw(e, t) {
      {
        if (yi === null)
          return !1;
        var a = e.elementType, l = t.type, o = !1, d = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof l == "function" && (o = !0);
            break;
          }
          case k: {
            (typeof l == "function" || d === Ye) && (o = !0);
            break;
          }
          case ee: {
            (d === Fe || d === Ye) && (o = !0);
            break;
          }
          case le:
          case he: {
            (d === Je || d === Ye) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var v = yi(a);
          if (v !== void 0 && v === yi(l))
            return !0;
        }
        return !1;
      }
    }
    function rw(e) {
      {
        if (yi === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var yM = function(e, t) {
      {
        if (yi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        Lu(), Mu(function() {
          H1(e.current, l, a);
        });
      }
    }, gM = function(e, t) {
      {
        if (e.context !== Qa)
          return;
        Lu(), Mu(function() {
          xh(t, e, null, null);
        });
      }
    };
    function H1(e, t, a) {
      {
        var l = e.alternate, o = e.child, d = e.sibling, v = e.tag, g = e.type, E = null;
        switch (v) {
          case k:
          case he:
          case M:
            E = g;
            break;
          case ee:
            E = g.render;
            break;
        }
        if (yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, w = !1;
        if (E !== null) {
          var N = yi(E);
          N !== void 0 && (a.has(N) ? w = !0 : t.has(N) && (v === M ? w = !0 : T = !0));
        }
        if (nd !== null && (nd.has(e) || l !== null && nd.has(l)) && (w = !0), w && (e._debugNeedsRemount = !0), w || T) {
          var O = ka(e, Ve);
          O !== null && er(O, e, Ve, Ft);
        }
        o !== null && !w && H1(o, t, a), d !== null && H1(d, t, a);
      }
    }
    var SM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(o) {
          return o.current;
        }));
        return j1(e.current, l, a), a;
      }
    };
    function j1(e, t, a) {
      {
        var l = e.child, o = e.sibling, d = e.tag, v = e.type, g = null;
        switch (d) {
          case k:
          case he:
          case M:
            g = v;
            break;
          case ee:
            g = v.render;
            break;
        }
        var E = !1;
        g !== null && t.has(g) && (E = !0), E ? EM(e, a) : l !== null && j1(l, t, a), o !== null && j1(o, t, a);
      }
    }
    function EM(e, t) {
      {
        var a = _M(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case Q:
              t.add(l.stateNode);
              return;
            case I:
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
    function _M(e, t) {
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
    var Y1;
    {
      Y1 = !1;
      try {
        var aw = Object.preventExtensions({});
      } catch {
        Y1 = !0;
      }
    }
    function CM(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Y1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var qa = function(e, t, a, l) {
      return new CM(e, t, a, l);
    };
    function P1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function TM(e) {
      return typeof e == "function" && !P1(e) && e.defaultProps === void 0;
    }
    function wM(e) {
      if (typeof e == "function")
        return P1(e) ? M : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Fe)
          return ee;
        if (t === Je)
          return le;
      }
      return P;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = qa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ue, a.subtreeFlags = Ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case P:
        case k:
        case he:
          a.type = rd(e.type);
          break;
        case M:
          a.type = A1(e.type);
          break;
        case ee:
          a.type = F1(e.type);
          break;
      }
      return a;
    }
    function RM(e, t) {
      e.flags &= Bn | It;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ue, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var l = a.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function xM(e, t, a) {
      var l;
      return e === Hm ? (l = rt, t === !0 && (l |= en, l |= _a)) : l = He, Wn && (l |= Pe), qa(U, null, null, l);
    }
    function V1(e, t, a, l, o, d) {
      var v = P, g = e;
      if (typeof e == "function")
        P1(e) ? (v = M, g = A1(g)) : g = rd(g);
      else if (typeof e == "string")
        v = Q;
      else
        e:
          switch (e) {
            case ja:
              return Wo(a.children, o, d, t);
            case nl:
              v = se, o |= en, (o & rt) !== He && (o |= _a);
              break;
            case x:
              return DM(a, o, d, t);
            case Ze:
              return kM(a, o, d, t);
            case vt:
              return bM(a, o, d, t);
            case qt:
              return iw(a, o, d, t);
            case vr:
            case Nn:
            case rl:
            case fc:
            case Qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case K:
                    v = ie;
                    break e;
                  case pe:
                    v = Me;
                    break e;
                  case Fe:
                    v = ee, g = F1(g);
                    break e;
                  case Je:
                    v = le;
                    break e;
                  case Ye:
                    v = it, g = null;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = l ? qe(l) : null;
                T && (E += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
            }
          }
      var w = qa(v, a, t, o);
      return w.elementType = e, w.type = g, w.lanes = d, w._debugOwner = l, w;
    }
    function I1(e, t, a) {
      var l = null;
      l = e._owner;
      var o = e.type, d = e.key, v = e.props, g = V1(o, d, v, l, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function Wo(e, t, a, l) {
      var o = qa(ae, e, l, t);
      return o.lanes = a, o;
    }
    function DM(e, t, a, l) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = qa(ye, e, l, t | Pe);
      return o.elementType = x, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function kM(e, t, a, l) {
      var o = qa(ve, e, l, t);
      return o.elementType = Ze, o.lanes = a, o;
    }
    function bM(e, t, a, l) {
      var o = qa(ht, e, l, t);
      return o.elementType = vt, o.lanes = a, o;
    }
    function iw(e, t, a, l) {
      var o = qa(Ie, e, l, t);
      o.elementType = qt, o.lanes = a;
      var d = {
        isHidden: !1
      };
      return o.stateNode = d, o;
    }
    function B1(e, t, a) {
      var l = qa(ne, e, null, t);
      return l.lanes = a, l;
    }
    function OM() {
      var e = qa(Q, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function MM(e) {
      var t = qa(lt, null, null, He);
      return t.stateNode = e, t;
    }
    function W1(e, t, a) {
      var l = e.children !== null ? e.children : [], o = qa(I, l, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function lw(e, t) {
      return e === null && (e = qa(P, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function LM(e, t, a, l, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = xS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ft, this.eventTimes = ff($), this.expirationTimes = ff(Ft), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = ff($), this.identifierPrefix = l, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Wt; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function uw(e, t, a, l, o, d, v, g, E, T) {
      var w = new LM(e, t, a, g, E), N = xM(t, d);
      w.current = N, N.stateNode = w;
      {
        var O = {
          element: l,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = O;
      }
      return JS(N), w;
    }
    var $1 = "18.2.0";
    function NM(e, t, a) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return za(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Xr,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var G1, Q1;
    G1 = !1, Q1 = {};
    function ow(e) {
      if (!e)
        return Qa;
      var t = ma(e), a = mk(t);
      if (t.tag === M) {
        var l = t.type;
        if (bl(l))
          return U_(t, l, a);
      }
      return a;
    }
    function UM(e, t) {
      {
        var a = ma(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var o = Ea(a);
        if (o === null)
          return null;
        if (o.mode & en) {
          var d = qe(a) || "Component";
          if (!Q1[d]) {
            Q1[d] = !0;
            var v = mn;
            try {
              Mt(o), a.mode & en ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Mt(v) : Tn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function sw(e, t, a, l, o, d, v, g) {
      var E = !1, T = null;
      return uw(e, t, E, T, a, l, o, d, v);
    }
    function cw(e, t, a, l, o, d, v, g, E, T) {
      var w = !0, N = uw(a, l, w, e, o, d, v, g, E);
      N.context = ow(null);
      var O = N.current, j = la(), Y = Io(O), B = Du(j, Y);
      return B.callback = t ?? null, zo(O, B, Y), PO(N, Y, j), N;
    }
    function xh(e, t, a, l) {
      jv(t, e);
      var o = t.current, d = la(), v = Io(o);
      ru(v);
      var g = ow(a);
      t.context === null ? t.context = g : t.pendingContext = g, pa && mn !== null && !G1 && (G1 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(mn) || "Unknown"));
      var E = Du(d, v);
      E.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), E.callback = l);
      var T = zo(o, E, v);
      return T !== null && (er(T, o, v, d), Km(T, o, v)), v;
    }
    function Vy(e) {
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
    function zM(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (Dn(t)) {
            var a = $g(t);
            WO(t, a);
          }
          break;
        }
        case ve: {
          Mu(function() {
            var o = ka(e, Ve);
            if (o !== null) {
              var d = la();
              er(o, e, Ve, d);
            }
          });
          var l = Ve;
          q1(e, l);
          break;
        }
      }
    }
    function fw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function q1(e, t) {
      fw(e, t);
      var a = e.alternate;
      a && fw(a, t);
    }
    function AM(e) {
      if (e.tag === ve) {
        var t = so, a = ka(e, t);
        if (a !== null) {
          var l = la();
          er(a, e, t, l);
        }
        q1(e, t);
      }
    }
    function FM(e) {
      if (e.tag === ve) {
        var t = Io(e), a = ka(e, t);
        if (a !== null) {
          var l = la();
          er(a, e, t, l);
        }
        q1(e, t);
      }
    }
    function dw(e) {
      var t = Av(e);
      return t === null ? null : t.stateNode;
    }
    var pw = function(e) {
      return null;
    };
    function HM(e) {
      return pw(e);
    }
    var hw = function(e) {
      return !1;
    };
    function jM(e) {
      return hw(e);
    }
    var vw = null, mw = null, yw = null, gw = null, Sw = null, Ew = null, _w = null, Cw = null, Tw = null;
    {
      var ww = function(e, t, a) {
        var l = t[a], o = Un(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (Un(o) ? o.splice(l, 1) : delete o[l], o) : (o[l] = ww(e[l], t, a + 1), o);
      }, Rw = function(e, t) {
        return ww(e, t, 0);
      }, xw = function(e, t, a, l) {
        var o = t[l], d = Un(e) ? e.slice() : ut({}, e);
        if (l + 1 === t.length) {
          var v = a[l];
          d[v] = d[o], Un(d) ? d.splice(o, 1) : delete d[o];
        } else
          d[o] = xw(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            l + 1
          );
        return d;
      }, Dw = function(e, t, a) {
        if (t.length !== a.length) {
          _("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              _("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return xw(e, t, a, 0);
      }, kw = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var o = t[a], d = Un(e) ? e.slice() : ut({}, e);
        return d[o] = kw(e[o], t, a + 1, l), d;
      }, bw = function(e, t, a) {
        return kw(e, t, 0, a);
      }, X1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      vw = function(e, t, a, l) {
        var o = X1(e, t);
        if (o !== null) {
          var d = bw(o.memoizedState, a, l);
          o.memoizedState = d, o.baseState = d, e.memoizedProps = ut({}, e.memoizedProps);
          var v = ka(e, Ve);
          v !== null && er(v, e, Ve, Ft);
        }
      }, mw = function(e, t, a) {
        var l = X1(e, t);
        if (l !== null) {
          var o = Rw(l.memoizedState, a);
          l.memoizedState = o, l.baseState = o, e.memoizedProps = ut({}, e.memoizedProps);
          var d = ka(e, Ve);
          d !== null && er(d, e, Ve, Ft);
        }
      }, yw = function(e, t, a, l) {
        var o = X1(e, t);
        if (o !== null) {
          var d = Dw(o.memoizedState, a, l);
          o.memoizedState = d, o.baseState = d, e.memoizedProps = ut({}, e.memoizedProps);
          var v = ka(e, Ve);
          v !== null && er(v, e, Ve, Ft);
        }
      }, gw = function(e, t, a) {
        e.pendingProps = bw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = ka(e, Ve);
        l !== null && er(l, e, Ve, Ft);
      }, Sw = function(e, t) {
        e.pendingProps = Rw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ka(e, Ve);
        a !== null && er(a, e, Ve, Ft);
      }, Ew = function(e, t, a) {
        e.pendingProps = Dw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = ka(e, Ve);
        l !== null && er(l, e, Ve, Ft);
      }, _w = function(e) {
        var t = ka(e, Ve);
        t !== null && er(t, e, Ve, Ft);
      }, Cw = function(e) {
        pw = e;
      }, Tw = function(e) {
        hw = e;
      };
    }
    function YM(e) {
      var t = Ea(e);
      return t === null ? null : t.stateNode;
    }
    function PM(e) {
      return null;
    }
    function VM() {
      return mn;
    }
    function IM(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return Jd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: vw,
        overrideHookStateDeletePath: mw,
        overrideHookStateRenamePath: yw,
        overrideProps: gw,
        overridePropsDeletePath: Sw,
        overridePropsRenamePath: Ew,
        setErrorHandler: Cw,
        setSuspenseHandler: Tw,
        scheduleUpdate: _w,
        currentDispatcherRef: a,
        findHostInstanceByFiber: YM,
        findFiberByHostInstance: t || PM,
        // React Refresh
        findHostInstancesForRefresh: SM,
        scheduleRefresh: yM,
        scheduleRoot: gM,
        setRefreshHandler: mM,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: VM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: $1
      });
    }
    var Ow = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function K1(e) {
      this._internalRoot = e;
    }
    Iy.prototype.render = K1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : By(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== yn) {
          var l = dw(t.current);
          l && l.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      xh(e, t, null, null);
    }, Iy.prototype.unmount = K1.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        VT() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Mu(function() {
          xh(null, e, null, null);
        }), b_(t);
      }
    };
    function BM(e, t) {
      if (!By(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Mw(e);
      var a = !1, l = !1, o = "", d = Ow;
      t != null && (t.hydrate ? _("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === tl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = sw(e, Hm, null, a, l, o, d);
      Mm(v.current, e);
      var g = e.nodeType === yn ? e.parentNode : e;
      return Up(g), new K1(v);
    }
    function Iy(e) {
      this._internalRoot = e;
    }
    function WM(e) {
      e && im(e);
    }
    Iy.prototype.unstable_scheduleHydration = WM;
    function $M(e, t, a) {
      if (!By(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Mw(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, o = a != null && a.hydratedSources || null, d = !1, v = !1, g = "", E = Ow;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var T = cw(t, null, e, Hm, l, d, v, g, E);
      if (Mm(T.current, e), Up(e), o)
        for (var w = 0; w < o.length; w++) {
          var N = o[w];
          eb(T, N);
        }
      return new Iy(T);
    }
    function By(e) {
      return !!(e && (e.nodeType === br || e.nodeType === Ia || e.nodeType === Ql || !Ct));
    }
    function Dh(e) {
      return !!(e && (e.nodeType === br || e.nodeType === Ia || e.nodeType === Ql || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Mw(e) {
      e.nodeType === br && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Wp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var GM = f.ReactCurrentOwner, Lw;
    Lw = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = dw(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = Z1(e), o = !!(l && Oo(l));
      o && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === br && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Z1(e) {
      return e ? e.nodeType === Ia ? e.documentElement : e.firstChild : null;
    }
    function Nw() {
    }
    function QM(e, t, a, l, o) {
      if (o) {
        if (typeof l == "function") {
          var d = l;
          l = function() {
            var O = Vy(v);
            d.call(O);
          };
        }
        var v = cw(
          t,
          l,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Nw
        );
        e._reactRootContainer = v, Mm(v.current, e);
        var g = e.nodeType === yn ? e.parentNode : e;
        return Up(g), Mu(), v;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof l == "function") {
          var T = l;
          l = function() {
            var O = Vy(w);
            T.call(O);
          };
        }
        var w = sw(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Nw
        );
        e._reactRootContainer = w, Mm(w.current, e);
        var N = e.nodeType === yn ? e.parentNode : e;
        return Up(N), Mu(function() {
          xh(t, w, a, l);
        }), w;
      }
    }
    function qM(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wy(e, t, a, l, o) {
      Lw(a), qM(o === void 0 ? null : o, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = QM(a, t, e, o, l);
      else {
        if (v = d, typeof o == "function") {
          var g = o;
          o = function() {
            var E = Vy(v);
            g.call(E);
          };
        }
        xh(t, v, e, o);
      }
      return Vy(v);
    }
    function XM(e) {
      {
        var t = GM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === br ? e : UM(e, "findDOMNode");
    }
    function KM(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Wp(t) && t._reactRootContainer === void 0;
        l && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wy(null, e, t, !0, a);
    }
    function ZM(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Wp(t) && t._reactRootContainer === void 0;
        l && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wy(null, e, t, !1, a);
    }
    function JM(e, t, a, l) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gs(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wy(e, t, a, !1, l);
    }
    function eL(e) {
      if (!Dh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Wp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Z1(e), l = a && !Oo(a);
          l && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Mu(function() {
          Wy(null, null, e, !1, function() {
            e._reactRootContainer = null, b_(e);
          });
        }), !0;
      } else {
        {
          var o = Z1(e), d = !!(o && Oo(o)), v = e.nodeType === br && Dh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Te(zM), Jv(AM), Ns(FM), mp(Ta), tm(Os), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Nv(rD), Mc(b1, $O, Mu);
    function tL(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!By(t))
        throw new Error("Target container is not a DOM element.");
      return NM(e, t, null, a);
    }
    function nL(e, t, a, l) {
      return JM(e, t, a, l);
    }
    var J1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Oo, Uf, Lm, Oc, vs, b1]
    };
    function rL(e, t) {
      return J1.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), BM(e, t);
    }
    function aL(e, t, a) {
      return J1.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), $M(e, t, a);
    }
    function iL(e) {
      return VT() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Mu(e);
    }
    var lL = IM({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: $1,
      rendererPackageName: "react-dom"
    });
    if (!lL && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Uw = window.location.protocol;
      /^(https?|file):$/.test(Uw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Uw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Na.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1, Na.createPortal = tL, Na.createRoot = rL, Na.findDOMNode = XM, Na.flushSync = iL, Na.hydrate = KM, Na.hydrateRoot = aL, Na.render = ZM, Na.unmountComponentAtNode = eL, Na.unstable_batchedUpdates = b1, Na.unstable_renderSubtreeIntoContainer = nL, Na.version = $1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Na;
}
function _x() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_x);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (_x(), CA()) : TA();
const iR = (i) => {
  let s;
  const f = /* @__PURE__ */ new Set(), h = (k, M) => {
    const P = typeof k == "function" ? k(s) : k;
    if (!Object.is(P, s)) {
      const U = s;
      s = M ?? typeof P != "object" ? P : Object.assign({}, s, P), f.forEach((I) => I(s, U));
    }
  }, m = () => s, b = { setState: h, getState: m, subscribe: (k) => (f.add(k), () => f.delete(k)), destroy: () => {
    f.clear();
  } };
  return s = i(h, m, b), b;
}, wA = (i) => i ? iR(i) : iR;
var DE = { exports: {} }, oE = {}, Xy = { exports: {} }, sE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function RA() {
  if (lR)
    return sE;
  lR = 1;
  var i = Yu;
  function s(U, I) {
    return U === I && (U !== 0 || 1 / U === 1 / I) || U !== U && I !== I;
  }
  var f = typeof Object.is == "function" ? Object.is : s, h = i.useState, m = i.useEffect, _ = i.useLayoutEffect, S = i.useDebugValue;
  function b(U, I) {
    var Q = I(), ne = h({ inst: { value: Q, getSnapshot: I } }), ae = ne[0].inst, se = ne[1];
    return _(function() {
      ae.value = Q, ae.getSnapshot = I, k(ae) && se({ inst: ae });
    }, [U, Q, I]), m(function() {
      return k(ae) && se({ inst: ae }), U(function() {
        k(ae) && se({ inst: ae });
      });
    }, [U]), S(Q), Q;
  }
  function k(U) {
    var I = U.getSnapshot;
    U = U.value;
    try {
      var Q = I();
      return !f(U, Q);
    } catch {
      return !0;
    }
  }
  function M(U, I) {
    return I();
  }
  var P = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? M : b;
  return sE.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : P, sE;
}
var cE = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function xA() {
  return uR || (uR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Yu, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(ee) {
      {
        for (var ye = arguments.length, ve = new Array(ye > 1 ? ye - 1 : 0), le = 1; le < ye; le++)
          ve[le - 1] = arguments[le];
        h("error", ee, ve);
      }
    }
    function h(ee, ye, ve) {
      {
        var le = s.ReactDebugCurrentFrame, he = le.getStackAddendum();
        he !== "" && (ye += "%s", ve = ve.concat([he]));
        var it = ve.map(function(tt) {
          return String(tt);
        });
        it.unshift("Warning: " + ye), Function.prototype.apply.call(console[ee], console, it);
      }
    }
    function m(ee, ye) {
      return ee === ye && (ee !== 0 || 1 / ee === 1 / ye) || ee !== ee && ye !== ye;
    }
    var _ = typeof Object.is == "function" ? Object.is : m, S = i.useState, b = i.useEffect, k = i.useLayoutEffect, M = i.useDebugValue, P = !1, U = !1;
    function I(ee, ye, ve) {
      P || i.startTransition !== void 0 && (P = !0, f("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var le = ye();
      if (!U) {
        var he = ye();
        _(le, he) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), U = !0);
      }
      var it = S({
        inst: {
          value: le,
          getSnapshot: ye
        }
      }), tt = it[0].inst, lt = it[1];
      return k(function() {
        tt.value = le, tt.getSnapshot = ye, Q(tt) && lt({
          inst: tt
        });
      }, [ee, le, ye]), b(function() {
        Q(tt) && lt({
          inst: tt
        });
        var ht = function() {
          Q(tt) && lt({
            inst: tt
          });
        };
        return ee(ht);
      }, [ee]), M(le), le;
    }
    function Q(ee) {
      var ye = ee.getSnapshot, ve = ee.value;
      try {
        var le = ye();
        return !_(ve, le);
      } catch {
        return !0;
      }
    }
    function ne(ee, ye, ve) {
      return ye();
    }
    var ae = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", se = !ae, Me = se ? ne : I, ie = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Me;
    cE.useSyncExternalStore = ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), cE;
}
var oR;
function Cx() {
  return oR || (oR = 1, process.env.NODE_ENV === "production" ? Xy.exports = RA() : Xy.exports = xA()), Xy.exports;
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
var sR;
function DA() {
  if (sR)
    return oE;
  sR = 1;
  var i = Yu, s = Cx();
  function f(M, P) {
    return M === P && (M !== 0 || 1 / M === 1 / P) || M !== M && P !== P;
  }
  var h = typeof Object.is == "function" ? Object.is : f, m = s.useSyncExternalStore, _ = i.useRef, S = i.useEffect, b = i.useMemo, k = i.useDebugValue;
  return oE.useSyncExternalStoreWithSelector = function(M, P, U, I, Q) {
    var ne = _(null);
    if (ne.current === null) {
      var ae = { hasValue: !1, value: null };
      ne.current = ae;
    } else
      ae = ne.current;
    ne = b(function() {
      function Me(le) {
        if (!ie) {
          if (ie = !0, ee = le, le = I(le), Q !== void 0 && ae.hasValue) {
            var he = ae.value;
            if (Q(he, le))
              return ye = he;
          }
          return ye = le;
        }
        if (he = ye, h(ee, le))
          return he;
        var it = I(le);
        return Q !== void 0 && Q(he, it) ? he : (ee = le, ye = it);
      }
      var ie = !1, ee, ye, ve = U === void 0 ? null : U;
      return [function() {
        return Me(P());
      }, ve === null ? void 0 : function() {
        return Me(ve());
      }];
    }, [P, U, I, Q]);
    var se = m(M, ne[0], ne[1]);
    return S(function() {
      ae.hasValue = !0, ae.value = se;
    }, [se]), k(se), se;
  }, oE;
}
var fE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function kA() {
  return cR || (cR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Yu, s = Cx();
    function f(P, U) {
      return P === U && (P !== 0 || 1 / P === 1 / U) || P !== P && U !== U;
    }
    var h = typeof Object.is == "function" ? Object.is : f, m = s.useSyncExternalStore, _ = i.useRef, S = i.useEffect, b = i.useMemo, k = i.useDebugValue;
    function M(P, U, I, Q, ne) {
      var ae = _(null), se;
      ae.current === null ? (se = {
        hasValue: !1,
        value: null
      }, ae.current = se) : se = ae.current;
      var Me = b(function() {
        var ve = !1, le, he, it = function(Vt) {
          if (!ve) {
            ve = !0, le = Vt;
            var Ie = Q(Vt);
            if (ne !== void 0 && se.hasValue) {
              var et = se.value;
              if (ne(et, Ie))
                return he = et, et;
            }
            return he = Ie, Ie;
          }
          var hn = le, kt = he;
          if (h(hn, Vt))
            return kt;
          var _n = Q(Vt);
          return ne !== void 0 && ne(kt, _n) ? kt : (le = Vt, he = _n, _n);
        }, tt = I === void 0 ? null : I, lt = function() {
          return it(U());
        }, ht = tt === null ? void 0 : function() {
          return it(tt());
        };
        return [lt, ht];
      }, [U, I, Q, ne]), ie = Me[0], ee = Me[1], ye = m(P, ie, ee);
      return S(function() {
        se.hasValue = !0, se.value = ye;
      }, [ye]), k(ye), ye;
    }
    fE.useSyncExternalStoreWithSelector = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), fE;
}
process.env.NODE_ENV === "production" ? DE.exports = DA() : DE.exports = kA();
var bA = DE.exports;
const OA = /* @__PURE__ */ dL(bA), { useSyncExternalStoreWithSelector: MA } = OA;
function LA(i, s = i.getState, f) {
  const h = MA(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    s,
    f
  );
  return fL(h), h;
}
const fR = (i) => {
  const s = typeof i == "function" ? wA(i) : i, f = (h, m) => LA(s, h, m);
  return Object.assign(f, s), f;
}, NA = (i) => i ? fR(i) : fR, UA = (i, s) => (...f) => Object.assign({}, i, s(...f));
NA(
  UA(
    {
      isOpen: !1,
      current: ""
    },
    (i) => ({
      openModal: (s) => i({ isOpen: !0, current: s }),
      closeModal: () => {
        const s = document.querySelector("#modal-root");
        s && (s.classList.add("closed"), setTimeout(() => {
          s.classList.remove("closed"), i({ isOpen: !1, current: "" });
        }, 190));
      }
    })
  )
);
const VA = (i, s, f) => {
  let h;
  return (...m) => {
    const S = () => {
      h = null, f || i.apply(void 0, m);
    }, b = f && !h;
    clearTimeout(h), h = setTimeout(S, s), b && i.apply(void 0, m);
  };
};
export {
  jA as Bar,
  YA as Line,
  PA as Time,
  VA as debounce
};
