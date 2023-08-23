import Po, { Fragment as s2, useRef as c2, useDebugValue as f2 } from "react";
function d2(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var dx = { exports: {} }, Dh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zE;
function p2() {
  if (zE)
    return Dh;
  zE = 1;
  var i = Po, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(D, R, M) {
    var P, U = {}, $ = null, Q = null;
    M !== void 0 && ($ = "" + M), R.key !== void 0 && ($ = "" + R.key), R.ref !== void 0 && (Q = R.ref);
    for (P in R)
      h.call(R, P) && !x.hasOwnProperty(P) && (U[P] = R[P]);
    if (D && D.defaultProps)
      for (P in R = D.defaultProps, R)
        U[P] === void 0 && (U[P] = R[P]);
    return { $$typeof: s, type: D, key: $, ref: Q, props: U, _owner: m.current };
  }
  return Dh.Fragment = f, Dh.jsx = b, Dh.jsxs = b, Dh;
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
var AE;
function h2() {
  return AE || (AE = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Po, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), D = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
    function se(C) {
      if (C === null || typeof C != "object")
        return null;
      var K = ne && C[ne] || C[ae];
      return typeof K == "function" ? K : null;
    }
    var Me = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ie(C) {
      {
        for (var K = arguments.length, pe = new Array(K > 1 ? K - 1 : 0), Fe = 1; Fe < K; Fe++)
          pe[Fe - 1] = arguments[Fe];
        ee("error", C, pe);
      }
    }
    function ee(C, K, pe) {
      {
        var Fe = Me.ReactDebugCurrentFrame, Ze = Fe.getStackAddendum();
        Ze !== "" && (K += "%s", pe = pe.concat([Ze]));
        var vt = pe.map(function(Je) {
          return String(Je);
        });
        vt.unshift("Warning: " + K), Function.prototype.apply.call(console[C], console, vt);
      }
    }
    var ge = !1, ve = !1, le = !1, he = !1, it = !1, tt;
    tt = Symbol.for("react.module.reference");
    function lt(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === h || C === x || it || C === m || C === M || C === P || he || C === Q || ge || ve || le || typeof C == "object" && C !== null && (C.$$typeof === $ || C.$$typeof === U || C.$$typeof === b || C.$$typeof === D || C.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === tt || C.getModuleId !== void 0));
    }
    function ht(C, K, pe) {
      var Fe = C.displayName;
      if (Fe)
        return Fe;
      var Ze = K.displayName || K.name || "";
      return Ze !== "" ? pe + "(" + Ze + ")" : pe;
    }
    function Vt(C) {
      return C.displayName || "Context";
    }
    function $e(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case h:
          return "Fragment";
        case f:
          return "Portal";
        case x:
          return "Profiler";
        case m:
          return "StrictMode";
        case M:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case D:
            var K = C;
            return Vt(K) + ".Consumer";
          case b:
            var pe = C;
            return Vt(pe._context) + ".Provider";
          case R:
            return ht(C, C.render, "ForwardRef");
          case U:
            var Fe = C.displayName || null;
            return Fe !== null ? Fe : $e(C.type) || "Memo";
          case $: {
            var Ze = C, vt = Ze._payload, Je = Ze._init;
            try {
              return $e(Je(vt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, hn = 0, Rt, xn, ue, Ae, Se, gt, wt;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function hr() {
      {
        if (hn === 0) {
          Rt = console.log, xn = console.info, ue = console.warn, Ae = console.error, Se = console.group, gt = console.groupCollapsed, wt = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        hn++;
      }
    }
    function Ja() {
      {
        if (hn--, hn === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, C, {
              value: Rt
            }),
            info: et({}, C, {
              value: xn
            }),
            warn: et({}, C, {
              value: ue
            }),
            error: et({}, C, {
              value: Ae
            }),
            group: et({}, C, {
              value: Se
            }),
            groupCollapsed: et({}, C, {
              value: gt
            }),
            groupEnd: et({}, C, {
              value: wt
            })
          });
        }
        hn < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wn = Me.ReactCurrentDispatcher, sa;
    function nr(C, K, pe) {
      {
        if (sa === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var Fe = Ze.stack.trim().match(/\n( *(at )?)/);
            sa = Fe && Fe[1] || "";
          }
        return `
` + sa + C;
      }
    }
    var Cr = !1, ei;
    {
      var Tr = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new Tr();
    }
    function ca(C, K) {
      if (!C || Cr)
        return "";
      {
        var pe = ei.get(C);
        if (pe !== void 0)
          return pe;
      }
      var Fe;
      Cr = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var vt;
      vt = wn.current, wn.current = null, hr();
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
            } catch (yt) {
              Fe = yt;
            }
            Reflect.construct(C, [], Je);
          } else {
            try {
              Je.call();
            } catch (yt) {
              Fe = yt;
            }
            C.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            Fe = yt;
          }
          C();
        }
      } catch (yt) {
        if (yt && Fe && typeof yt.stack == "string") {
          for (var Ye = yt.stack.split(`
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
                    return C.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", C.displayName)), typeof C == "function" && ei.set(C, vr), vr;
                  }
                while (Qt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        Cr = !1, wn.current = vt, Ja(), Error.prepareStackTrace = Ze;
      }
      var rl = C ? C.displayName || C.name : "", fc = rl ? nr(rl) : "";
      return typeof C == "function" && ei.set(C, fc), fc;
    }
    function Mn(C, K, pe) {
      return ca(C, !1);
    }
    function rr(C) {
      var K = C.prototype;
      return !!(K && K.isReactComponent);
    }
    function $n(C, K, pe) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return ca(C, rr(C));
      if (typeof C == "string")
        return nr(C);
      switch (C) {
        case M:
          return nr("Suspense");
        case P:
          return nr("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case R:
            return Mn(C.render);
          case U:
            return $n(C.type, K, pe);
          case $: {
            var Fe = C, Ze = Fe._payload, vt = Fe._init;
            try {
              return $n(vt(Ze), K, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var ar = Object.prototype.hasOwnProperty, ir = {}, fa = Me.ReactDebugCurrentFrame;
    function za(C) {
      if (C) {
        var K = C._owner, pe = $n(C.type, C._source, K ? K.type : null);
        fa.setExtraStackFrame(pe);
      } else
        fa.setExtraStackFrame(null);
    }
    function xi(C, K, pe, Fe, Ze) {
      {
        var vt = Function.call.bind(ar);
        for (var Je in C)
          if (vt(C, Je)) {
            var Ye = void 0;
            try {
              if (typeof C[Je] != "function") {
                var Nn = Error((Fe || "React class") + ": " + pe + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              Ye = C[Je](K, Je, Fe, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              Ye = Qt;
            }
            Ye && !(Ye instanceof Error) && (za(Ze), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", pe, Je, typeof Ye), za(null)), Ye instanceof Error && !(Ye.message in ir) && (ir[Ye.message] = !0, za(Ze), ie("Failed %s type: %s", pe, Ye.message), za(null));
          }
      }
    }
    var ti = Array.isArray;
    function Aa(C) {
      return ti(C);
    }
    function Wr(C) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, pe = K && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return pe;
      }
    }
    function ni(C) {
      try {
        return Gr(C), !1;
      } catch {
        return !0;
      }
    }
    function Gr(C) {
      return "" + C;
    }
    function Fa(C) {
      if (ni(C))
        return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(C)), Gr(C);
    }
    var vn = Me.ReactCurrentOwner, Qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, el, Ha, de;
    de = {};
    function Ne(C) {
      if (ar.call(C, "ref")) {
        var K = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function nt(C) {
      if (ar.call(C, "key")) {
        var K = Object.getOwnPropertyDescriptor(C, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Dt(C, K) {
      if (typeof C.ref == "string" && vn.current && K && vn.current.stateNode !== K) {
        var pe = $e(vn.current.type);
        de[pe] || (ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $e(vn.current.type), C.ref), de[pe] = !0);
      }
    }
    function Zt(C, K) {
      {
        var pe = function() {
          el || (el = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        pe.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Ln(C, K) {
      {
        var pe = function() {
          Ha || (Ha = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        pe.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var cn = function(C, K, pe, Fe, Ze, vt, Je) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: C,
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
    function Rr(C, K, pe, Fe, Ze) {
      {
        var vt, Je = {}, Ye = null, Nn = null;
        pe !== void 0 && (Fa(pe), Ye = "" + pe), nt(K) && (Fa(K.key), Ye = "" + K.key), Ne(K) && (Nn = K.ref, Dt(K, Ze));
        for (vt in K)
          ar.call(K, vt) && !Qr.hasOwnProperty(vt) && (Je[vt] = K[vt]);
        if (C && C.defaultProps) {
          var Qt = C.defaultProps;
          for (vt in Qt)
            Je[vt] === void 0 && (Je[vt] = Qt[vt]);
        }
        if (Ye || Nn) {
          var qt = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          Ye && Zt(Je, qt), Nn && Ln(Je, qt);
        }
        return cn(C, Ye, Nn, Ze, Fe, vn.current, Je);
      }
    }
    var Ht = Me.ReactCurrentOwner, qr = Me.ReactDebugCurrentFrame;
    function Ut(C) {
      if (C) {
        var K = C._owner, pe = $n(C.type, C._source, K ? K.type : null);
        qr.setExtraStackFrame(pe);
      } else
        qr.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function Io(C) {
      return typeof C == "object" && C !== null && C.$$typeof === s;
    }
    function Vl() {
      {
        if (Ht.current) {
          var C = $e(Ht.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function Bo(C) {
      {
        if (C !== void 0) {
          var K = C.fileName.replace(/^.*[\\\/]/, ""), pe = C.lineNumber;
          return `

Check your code at ` + K + ":" + pe + ".";
        }
        return "";
      }
    }
    var Xu = {};
    function cc(C) {
      {
        var K = Vl();
        if (!K) {
          var pe = typeof C == "string" ? C : C.displayName || C.name;
          pe && (K = `

Check the top-level render call using <` + pe + ">.");
        }
        return K;
      }
    }
    function $l(C, K) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var pe = cc(K);
        if (Xu[pe])
          return;
        Xu[pe] = !0;
        var Fe = "";
        C && C._owner && C._owner !== Ht.current && (Fe = " It was passed a child from " + $e(C._owner.type) + "."), Ut(C), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Fe), Ut(null);
      }
    }
    function Wo(C, K) {
      {
        if (typeof C != "object")
          return;
        if (Aa(C))
          for (var pe = 0; pe < C.length; pe++) {
            var Fe = C[pe];
            Io(Fe) && $l(Fe, K);
          }
        else if (Io(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Ze = se(C);
          if (typeof Ze == "function" && Ze !== C.entries)
            for (var vt = Ze.call(C), Je; !(Je = vt.next()).done; )
              Io(Je.value) && $l(Je.value, K);
        }
      }
    }
    function Il(C) {
      {
        var K = C.type;
        if (K == null || typeof K == "string")
          return;
        var pe;
        if (typeof K == "function")
          pe = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === U))
          pe = K.propTypes;
        else
          return;
        if (pe) {
          var Fe = $e(K);
          xi(pe, C.props, "prop", Fe, C);
        } else if (K.PropTypes !== void 0 && !jt) {
          jt = !0;
          var Ze = $e(K);
          ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Go(C) {
      {
        for (var K = Object.keys(C.props), pe = 0; pe < K.length; pe++) {
          var Fe = K[pe];
          if (Fe !== "children" && Fe !== "key") {
            Ut(C), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), Ut(null);
            break;
          }
        }
        C.ref !== null && (Ut(C), ie("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    function ri(C, K, pe, Fe, Ze, vt) {
      {
        var Je = lt(C);
        if (!Je) {
          var Ye = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = Bo(Ze);
          Nn ? Ye += Nn : Ye += Vl();
          var Qt;
          C === null ? Qt = "null" : Aa(C) ? Qt = "array" : C !== void 0 && C.$$typeof === s ? (Qt = "<" + ($e(C.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof C, ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, Ye);
        }
        var qt = Rr(C, K, pe, Ze, vt);
        if (qt == null)
          return qt;
        if (Je) {
          var vr = K.children;
          if (vr !== void 0)
            if (Fe)
              if (Aa(vr)) {
                for (var rl = 0; rl < vr.length; rl++)
                  Wo(vr[rl], C);
                Object.freeze && Object.freeze(vr);
              } else
                ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wo(vr, C);
        }
        return C === h ? Go(qt) : Il(qt), qt;
      }
    }
    function tl(C, K, pe) {
      return ri(C, K, pe, !0);
    }
    function Xr(C, K, pe) {
      return ri(C, K, pe, !1);
    }
    var ja = Xr, nl = tl;
    Oh.Fragment = h, Oh.jsx = ja, Oh.jsxs = nl;
  }()), Oh;
}
process.env.NODE_ENV === "production" ? dx.exports = p2() : dx.exports = h2();
var Yt = dx.exports, qu = Po;
const Uh = /^[a-z0-9]+(-[a-z0-9]+)*$/, sy = (i, s, f, h = "") => {
  const m = i.split(":");
  if (i.slice(0, 1) === "@") {
    if (m.length < 2 || m.length > 3)
      return null;
    h = m.shift().slice(1);
  }
  if (m.length > 3 || !m.length)
    return null;
  if (m.length > 1) {
    const D = m.pop(), R = m.pop(), M = {
      // Allow provider without '@': "provider:prefix:name"
      provider: m.length > 0 ? m[0] : h,
      prefix: R,
      name: D
    };
    return s && !Kg(M) ? null : M;
  }
  const x = m[0], b = x.split("-");
  if (b.length > 1) {
    const D = {
      provider: h,
      prefix: b.shift(),
      name: b.join("-")
    };
    return s && !Kg(D) ? null : D;
  }
  if (f && h === "") {
    const D = {
      provider: h,
      prefix: "",
      name: x
    };
    return s && !Kg(D, f) ? null : D;
  }
  return null;
}, Kg = (i, s) => i ? !!((i.provider === "" || i.provider.match(Uh)) && (s && i.prefix === "" || i.prefix.match(Uh)) && i.name.match(Uh)) : !1, d_ = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), ny = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Rx = Object.freeze({
  ...d_,
  ...ny
}), px = Object.freeze({
  ...Rx,
  body: "",
  hidden: !1
});
function v2(i, s) {
  const f = {};
  !i.hFlip != !s.hFlip && (f.hFlip = !0), !i.vFlip != !s.vFlip && (f.vFlip = !0);
  const h = ((i.rotate || 0) + (s.rotate || 0)) % 4;
  return h && (f.rotate = h), f;
}
function FE(i, s) {
  const f = v2(i, s);
  for (const h in px)
    h in ny ? h in i && !(h in f) && (f[h] = ny[h]) : h in s ? f[h] = s[h] : h in i && (f[h] = i[h]);
  return f;
}
function m2(i, s) {
  const f = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function x(b) {
    if (f[b])
      return m[b] = [];
    if (!(b in m)) {
      m[b] = null;
      const D = h[b] && h[b].parent, R = D && x(D);
      R && (m[b] = [D].concat(R));
    }
    return m[b];
  }
  return (s || Object.keys(f).concat(Object.keys(h))).forEach(x), m;
}
function g2(i, s, f) {
  const h = i.icons, m = i.aliases || /* @__PURE__ */ Object.create(null);
  let x = {};
  function b(D) {
    x = FE(
      h[D] || m[D],
      x
    );
  }
  return b(s), f.forEach(b), FE(i, x);
}
function p_(i, s) {
  const f = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return f;
  i.not_found instanceof Array && i.not_found.forEach((m) => {
    s(m, null), f.push(m);
  });
  const h = m2(i);
  for (const m in h) {
    const x = h[m];
    x && (s(m, g2(i, m, x)), f.push(m));
  }
  return f;
}
const y2 = {
  provider: "",
  aliases: {},
  not_found: {},
  ...d_
};
function ex(i, s) {
  for (const f in s)
    if (f in i && typeof i[f] != typeof s[f])
      return !1;
  return !0;
}
function h_(i) {
  if (typeof i != "object" || i === null)
    return null;
  const s = i;
  if (typeof s.prefix != "string" || !i.icons || typeof i.icons != "object" || !ex(i, y2))
    return null;
  const f = s.icons;
  for (const m in f) {
    const x = f[m];
    if (!m.match(Uh) || typeof x.body != "string" || !ex(
      x,
      px
    ))
      return null;
  }
  const h = s.aliases || /* @__PURE__ */ Object.create(null);
  for (const m in h) {
    const x = h[m], b = x.parent;
    if (!m.match(Uh) || typeof b != "string" || !f[b] && !h[b] || !ex(
      x,
      px
    ))
      return null;
  }
  return s;
}
const HE = /* @__PURE__ */ Object.create(null);
function b2(i, s) {
  return {
    provider: i,
    prefix: s,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function uc(i, s) {
  const f = HE[i] || (HE[i] = /* @__PURE__ */ Object.create(null));
  return f[s] || (f[s] = b2(i, s));
}
function Dx(i, s) {
  return h_(s) ? p_(s, (f, h) => {
    h ? i.icons[f] = h : i.missing.add(f);
  }) : [];
}
function S2(i, s, f) {
  try {
    if (typeof f.body == "string")
      return i.icons[s] = { ...f }, !0;
  } catch {
  }
  return !1;
}
let Hh = !1;
function v_(i) {
  return typeof i == "boolean" && (Hh = i), Hh;
}
function x2(i) {
  const s = typeof i == "string" ? sy(i, !0, Hh) : i;
  if (s) {
    const f = uc(s.provider, s.prefix), h = s.name;
    return f.icons[h] || (f.missing.has(h) ? null : void 0);
  }
}
function w2(i, s) {
  const f = sy(i, !0, Hh);
  if (!f)
    return !1;
  const h = uc(f.provider, f.prefix);
  return S2(h, f.name, s);
}
function k2(i, s) {
  if (typeof i != "object")
    return !1;
  if (typeof s != "string" && (s = i.provider || ""), Hh && !s && !i.prefix) {
    let m = !1;
    return h_(i) && (i.prefix = "", p_(i, (x, b) => {
      b && w2(x, b) && (m = !0);
    })), m;
  }
  const f = i.prefix;
  if (!Kg({
    provider: s,
    prefix: f,
    name: "a"
  }))
    return !1;
  const h = uc(s, f);
  return !!Dx(h, i);
}
const m_ = Object.freeze({
  width: null,
  height: null
}), g_ = Object.freeze({
  // Dimensions
  ...m_,
  // Transformations
  ...ny
}), E2 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, _2 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function jE(i, s, f) {
  if (s === 1)
    return i;
  if (f = f || 100, typeof i == "number")
    return Math.ceil(i * s * f) / f;
  if (typeof i != "string")
    return i;
  const h = i.split(E2);
  if (h === null || !h.length)
    return i;
  const m = [];
  let x = h.shift(), b = _2.test(x);
  for (; ; ) {
    if (b) {
      const D = parseFloat(x);
      isNaN(D) ? m.push(x) : m.push(Math.ceil(D * s * f) / f);
    } else
      m.push(x);
    if (x = h.shift(), x === void 0)
      return m.join("");
    b = !b;
  }
}
const C2 = (i) => i === "unset" || i === "undefined" || i === "none";
function T2(i, s) {
  const f = {
    ...Rx,
    ...i
  }, h = {
    ...g_,
    ...s
  }, m = {
    left: f.left,
    top: f.top,
    width: f.width,
    height: f.height
  };
  let x = f.body;
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
    ie % 2 === 1 && (m.left !== m.top && (ee = m.left, m.left = m.top, m.top = ee), m.width !== m.height && (ee = m.width, m.width = m.height, m.height = ee)), ae.length && (x = '<g transform="' + ae.join(" ") + '">' + x + "</g>");
  });
  const b = h.width, D = h.height, R = m.width, M = m.height;
  let P, U;
  b === null ? (U = D === null ? "1em" : D === "auto" ? M : D, P = jE(U, R / M)) : (P = b === "auto" ? R : b, U = D === null ? jE(P, M / R) : D === "auto" ? M : D);
  const $ = {}, Q = (ne, ae) => {
    C2(ae) || ($[ne] = ae.toString());
  };
  return Q("width", P), Q("height", U), $.viewBox = m.left.toString() + " " + m.top.toString() + " " + R.toString() + " " + M.toString(), {
    attributes: $,
    body: x
  };
}
const R2 = /\sid="(\S+)"/g, D2 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let O2 = 0;
function M2(i, s = D2) {
  const f = [];
  let h;
  for (; h = R2.exec(i); )
    f.push(h[1]);
  if (!f.length)
    return i;
  const m = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return f.forEach((x) => {
    const b = typeof s == "function" ? s(x) : s + (O2++).toString(), D = x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + D + ')([")]|\\.[a-z])', "g"),
      "$1" + b + m + "$3"
    );
  }), i = i.replace(new RegExp(m, "g"), ""), i;
}
const hx = /* @__PURE__ */ Object.create(null);
function L2(i, s) {
  hx[i] = s;
}
function vx(i) {
  return hx[i] || hx[""];
}
function Ox(i) {
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
const Mx = /* @__PURE__ */ Object.create(null), Mh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Zg = [];
for (; Mh.length > 0; )
  Mh.length === 1 || Math.random() > 0.5 ? Zg.push(Mh.shift()) : Zg.push(Mh.pop());
Mx[""] = Ox({
  resources: ["https://api.iconify.design"].concat(Zg)
});
function N2(i, s) {
  const f = Ox(s);
  return f === null ? !1 : (Mx[i] = f, !0);
}
function Lx(i) {
  return Mx[i];
}
const U2 = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let YE = U2();
function z2(i, s) {
  const f = Lx(i);
  if (!f)
    return 0;
  let h;
  if (!f.maxURL)
    h = 0;
  else {
    let m = 0;
    f.resources.forEach((b) => {
      m = Math.max(m, b.length);
    });
    const x = s + ".json?icons=";
    h = f.maxURL - m - f.path.length - x.length;
  }
  return h;
}
function A2(i) {
  return i === 404;
}
const F2 = (i, s, f) => {
  const h = [], m = z2(i, s), x = "icons";
  let b = {
    type: x,
    provider: i,
    prefix: s,
    icons: []
  }, D = 0;
  return f.forEach((R, M) => {
    D += R.length + 1, D >= m && M > 0 && (h.push(b), b = {
      type: x,
      provider: i,
      prefix: s,
      icons: []
    }, D = R.length), b.icons.push(R);
  }), h.push(b), h;
};
function H2(i) {
  if (typeof i == "string") {
    const s = Lx(i);
    if (s)
      return s.path;
  }
  return "/";
}
const j2 = (i, s, f) => {
  if (!YE) {
    f("abort", 424);
    return;
  }
  let h = H2(s.provider);
  switch (s.type) {
    case "icons": {
      const x = s.prefix, D = s.icons.join(","), R = new URLSearchParams({
        icons: D
      });
      h += x + ".json?" + R.toString();
      break;
    }
    case "custom": {
      const x = s.uri;
      h += x.slice(0, 1) === "/" ? x.slice(1) : x;
      break;
    }
    default:
      f("abort", 400);
      return;
  }
  let m = 503;
  YE(i + h).then((x) => {
    const b = x.status;
    if (b !== 200) {
      setTimeout(() => {
        f(A2(b) ? "abort" : "next", b);
      });
      return;
    }
    return m = 501, x.json();
  }).then((x) => {
    if (typeof x != "object" || x === null) {
      setTimeout(() => {
        x === 404 ? f("abort", x) : f("next", m);
      });
      return;
    }
    setTimeout(() => {
      f("success", x);
    });
  }).catch(() => {
    f("next", m);
  });
}, Y2 = {
  prepare: F2,
  send: j2
};
function P2(i) {
  const s = {
    loaded: [],
    missing: [],
    pending: []
  }, f = /* @__PURE__ */ Object.create(null);
  i.sort((m, x) => m.provider !== x.provider ? m.provider.localeCompare(x.provider) : m.prefix !== x.prefix ? m.prefix.localeCompare(x.prefix) : m.name.localeCompare(x.name));
  let h = {
    provider: "",
    prefix: "",
    name: ""
  };
  return i.forEach((m) => {
    if (h.name === m.name && h.prefix === m.prefix && h.provider === m.provider)
      return;
    h = m;
    const x = m.provider, b = m.prefix, D = m.name, R = f[x] || (f[x] = /* @__PURE__ */ Object.create(null)), M = R[b] || (R[b] = uc(x, b));
    let P;
    D in M.icons ? P = s.loaded : b === "" || M.missing.has(D) ? P = s.missing : P = s.pending;
    const U = {
      provider: x,
      prefix: b,
      name: D
    };
    P.push(U);
  }), s;
}
function y_(i, s) {
  i.forEach((f) => {
    const h = f.loaderCallbacks;
    h && (f.loaderCallbacks = h.filter((m) => m.id !== s));
  });
}
function V2(i) {
  i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0, setTimeout(() => {
    i.pendingCallbacksFlag = !1;
    const s = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
    if (!s.length)
      return;
    let f = !1;
    const h = i.provider, m = i.prefix;
    s.forEach((x) => {
      const b = x.icons, D = b.pending.length;
      b.pending = b.pending.filter((R) => {
        if (R.prefix !== m)
          return !0;
        const M = R.name;
        if (i.icons[M])
          b.loaded.push({
            provider: h,
            prefix: m,
            name: M
          });
        else if (i.missing.has(M))
          b.missing.push({
            provider: h,
            prefix: m,
            name: M
          });
        else
          return f = !0, !0;
        return !1;
      }), b.pending.length !== D && (f || y_([i], x.id), x.callback(
        b.loaded.slice(0),
        b.missing.slice(0),
        b.pending.slice(0),
        x.abort
      ));
    });
  }));
}
let $2 = 0;
function I2(i, s, f) {
  const h = $2++, m = y_.bind(null, f, h);
  if (!s.pending.length)
    return m;
  const x = {
    id: h,
    icons: s,
    callback: i,
    abort: m
  };
  return f.forEach((b) => {
    (b.loaderCallbacks || (b.loaderCallbacks = [])).push(x);
  }), m;
}
function B2(i, s = !0, f = !1) {
  const h = [];
  return i.forEach((m) => {
    const x = typeof m == "string" ? sy(m, s, f) : m;
    x && h.push(x);
  }), h;
}
var W2 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function G2(i, s, f, h) {
  const m = i.resources.length, x = i.random ? Math.floor(Math.random() * m) : i.index;
  let b;
  if (i.random) {
    let le = i.resources.slice(0);
    for (b = []; le.length > 1; ) {
      const he = Math.floor(Math.random() * le.length);
      b.push(le[he]), le = le.slice(0, he).concat(le.slice(he + 1));
    }
    b = b.concat(le);
  } else
    b = i.resources.slice(x).concat(i.resources.slice(0, x));
  const D = Date.now();
  let R = "pending", M = 0, P, U = null, $ = [], Q = [];
  typeof h == "function" && Q.push(h);
  function ne() {
    U && (clearTimeout(U), U = null);
  }
  function ae() {
    R === "pending" && (R = "aborted"), ne(), $.forEach((le) => {
      le.status === "pending" && (le.status = "aborted");
    }), $ = [];
  }
  function se(le, he) {
    he && (Q = []), typeof le == "function" && Q.push(le);
  }
  function Me() {
    return {
      startTime: D,
      payload: s,
      status: R,
      queriesSent: M,
      queriesPending: $.length,
      subscribe: se,
      abort: ae
    };
  }
  function ie() {
    R = "failed", Q.forEach((le) => {
      le(void 0, P);
    });
  }
  function ee() {
    $.forEach((le) => {
      le.status === "pending" && (le.status = "aborted");
    }), $ = [];
  }
  function ge(le, he, it) {
    const tt = he !== "success";
    switch ($ = $.filter((lt) => lt !== le), R) {
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
      P = it, $.length || (b.length ? ve() : ie());
      return;
    }
    if (ne(), ee(), !i.random) {
      const lt = i.resources.indexOf(le.resource);
      lt !== -1 && lt !== i.index && (i.index = lt);
    }
    R = "completed", Q.forEach((lt) => {
      lt(it);
    });
  }
  function ve() {
    if (R !== "pending")
      return;
    ne();
    const le = b.shift();
    if (le === void 0) {
      if ($.length) {
        U = setTimeout(() => {
          ne(), R === "pending" && (ee(), ie());
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
        ge(he, it, tt);
      }
    };
    $.push(he), M++, U = setTimeout(ve, i.rotate), f(le, s, he.callback);
  }
  return setTimeout(ve), Me;
}
function b_(i) {
  const s = {
    ...W2,
    ...i
  };
  let f = [];
  function h() {
    f = f.filter((D) => D().status === "pending");
  }
  function m(D, R, M) {
    const P = G2(
      s,
      D,
      R,
      (U, $) => {
        h(), M && M(U, $);
      }
    );
    return f.push(P), P;
  }
  function x(D) {
    return f.find((R) => D(R)) || null;
  }
  return {
    query: m,
    find: x,
    setIndex: (D) => {
      s.index = D;
    },
    getIndex: () => s.index,
    cleanup: h
  };
}
function PE() {
}
const tx = /* @__PURE__ */ Object.create(null);
function Q2(i) {
  if (!tx[i]) {
    const s = Lx(i);
    if (!s)
      return;
    const f = b_(s), h = {
      config: s,
      redundancy: f
    };
    tx[i] = h;
  }
  return tx[i];
}
function q2(i, s, f) {
  let h, m;
  if (typeof i == "string") {
    const x = vx(i);
    if (!x)
      return f(void 0, 424), PE;
    m = x.send;
    const b = Q2(i);
    b && (h = b.redundancy);
  } else {
    const x = Ox(i);
    if (x) {
      h = b_(x);
      const b = i.resources ? i.resources[0] : "", D = vx(b);
      D && (m = D.send);
    }
  }
  return !h || !m ? (f(void 0, 424), PE) : h.query(s, m, f)().abort;
}
const VE = "iconify2", jh = "iconify", S_ = jh + "-count", $E = jh + "-version", x_ = 36e5, X2 = 168;
function mx(i, s) {
  try {
    return i.getItem(s);
  } catch {
  }
}
function Nx(i, s, f) {
  try {
    return i.setItem(s, f), !0;
  } catch {
  }
}
function IE(i, s) {
  try {
    i.removeItem(s);
  } catch {
  }
}
function gx(i, s) {
  return Nx(i, S_, s.toString());
}
function yx(i) {
  return parseInt(mx(i, S_)) || 0;
}
const cy = {
  local: !0,
  session: !0
}, w_ = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Ux = !1;
function K2(i) {
  Ux = i;
}
let Wg = typeof window > "u" ? {} : window;
function k_(i) {
  const s = i + "Storage";
  try {
    if (Wg && Wg[s] && typeof Wg[s].length == "number")
      return Wg[s];
  } catch {
  }
  cy[i] = !1;
}
function E_(i, s) {
  const f = k_(i);
  if (!f)
    return;
  const h = mx(f, $E);
  if (h !== VE) {
    if (h) {
      const D = yx(f);
      for (let R = 0; R < D; R++)
        IE(f, jh + R.toString());
    }
    Nx(f, $E, VE), gx(f, 0);
    return;
  }
  const m = Math.floor(Date.now() / x_) - X2, x = (D) => {
    const R = jh + D.toString(), M = mx(f, R);
    if (typeof M == "string") {
      try {
        const P = JSON.parse(M);
        if (typeof P == "object" && typeof P.cached == "number" && P.cached > m && typeof P.provider == "string" && typeof P.data == "object" && typeof P.data.prefix == "string" && // Valid item: run callback
        s(P, D))
          return !0;
      } catch {
      }
      IE(f, R);
    }
  };
  let b = yx(f);
  for (let D = b - 1; D >= 0; D--)
    x(D) || (D === b - 1 ? (b--, gx(f, b)) : w_[i].add(D));
}
function __() {
  if (!Ux) {
    K2(!0);
    for (const i in cy)
      E_(i, (s) => {
        const f = s.data, h = s.provider, m = f.prefix, x = uc(
          h,
          m
        );
        if (!Dx(x, f).length)
          return !1;
        const b = f.lastModified || -1;
        return x.lastModifiedCached = x.lastModifiedCached ? Math.min(x.lastModifiedCached, b) : b, !0;
      });
  }
}
function Z2(i, s) {
  const f = i.lastModifiedCached;
  if (
    // Matches or newer
    f && f >= s
  )
    return f === s;
  if (i.lastModifiedCached = s, f)
    for (const h in cy)
      E_(h, (m) => {
        const x = m.data;
        return m.provider !== i.provider || x.prefix !== i.prefix || x.lastModified === s;
      });
  return !0;
}
function J2(i, s) {
  Ux || __();
  function f(h) {
    let m;
    if (!cy[h] || !(m = k_(h)))
      return;
    const x = w_[h];
    let b;
    if (x.size)
      x.delete(b = Array.from(x).shift());
    else if (b = yx(m), !gx(m, b + 1))
      return;
    const D = {
      cached: Math.floor(Date.now() / x_),
      provider: i.provider,
      data: s
    };
    return Nx(
      m,
      jh + b.toString(),
      JSON.stringify(D)
    );
  }
  s.lastModified && !Z2(i, s.lastModified) || Object.keys(s.icons).length && (s.not_found && (s = Object.assign({}, s), delete s.not_found), f("local") || f("session"));
}
function BE() {
}
function eL(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, V2(i);
  }));
}
function tL(i, s) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(s).sort() : i.iconsToLoad = s, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: f, prefix: h } = i, m = i.iconsToLoad;
    delete i.iconsToLoad;
    let x;
    if (!m || !(x = vx(f)))
      return;
    x.prepare(f, h, m).forEach((D) => {
      q2(f, D, (R) => {
        if (typeof R != "object")
          D.icons.forEach((M) => {
            i.missing.add(M);
          });
        else
          try {
            const M = Dx(
              i,
              R
            );
            if (!M.length)
              return;
            const P = i.pendingIcons;
            P && M.forEach((U) => {
              P.delete(U);
            }), J2(i, R);
          } catch (M) {
            console.error(M);
          }
        eL(i);
      });
    });
  }));
}
const nL = (i, s) => {
  const f = B2(i, !0, v_()), h = P2(f);
  if (!h.pending.length) {
    let R = !0;
    return s && setTimeout(() => {
      R && s(
        h.loaded,
        h.missing,
        h.pending,
        BE
      );
    }), () => {
      R = !1;
    };
  }
  const m = /* @__PURE__ */ Object.create(null), x = [];
  let b, D;
  return h.pending.forEach((R) => {
    const { provider: M, prefix: P } = R;
    if (P === D && M === b)
      return;
    b = M, D = P, x.push(uc(M, P));
    const U = m[M] || (m[M] = /* @__PURE__ */ Object.create(null));
    U[P] || (U[P] = []);
  }), h.pending.forEach((R) => {
    const { provider: M, prefix: P, name: U } = R, $ = uc(M, P), Q = $.pendingIcons || ($.pendingIcons = /* @__PURE__ */ new Set());
    Q.has(U) || (Q.add(U), m[M][P].push(U));
  }), x.forEach((R) => {
    const { provider: M, prefix: P } = R;
    m[M][P].length && tL(R, m[M][P]);
  }), s ? I2(s, h, x) : BE;
};
function rL(i, s) {
  const f = {
    ...i
  };
  for (const h in s) {
    const m = s[h], x = typeof m;
    h in m_ ? (m === null || m && (x === "string" || x === "number")) && (f[h] = m) : x === typeof f[h] && (f[h] = h === "rotate" ? m % 4 : m);
  }
  return f;
}
const aL = /[\s,]+/;
function iL(i, s) {
  s.split(aL).forEach((f) => {
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
function lL(i, s = 0) {
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
      let x = parseFloat(i.slice(0, i.length - f.length));
      return isNaN(x) ? 0 : (x = x / m, x % 1 === 0 ? h(x) : 0);
    }
  }
  return s;
}
function oL(i, s) {
  let f = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const h in s)
    f += " " + h + '="' + s[h] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + f + ">" + i + "</svg>";
}
function uL(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function sL(i) {
  return "data:image/svg+xml," + uL(i);
}
function cL(i) {
  return 'url("' + sL(i) + '")';
}
let zh;
function fL() {
  try {
    zh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    zh = null;
  }
}
function dL(i) {
  return zh === void 0 && fL(), zh ? zh.createHTML(i) : i;
}
const C_ = {
  ...g_,
  inline: !1
}, pL = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, hL = {
  display: "inline-block"
}, bx = {
  backgroundColor: "currentColor"
}, T_ = {
  backgroundColor: "transparent"
}, WE = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, GE = {
  WebkitMask: bx,
  mask: bx,
  background: T_
};
for (const i in GE) {
  const s = GE[i];
  for (const f in WE)
    s[i + f] = WE[f];
}
const vL = {
  ...C_,
  inline: !0
};
function QE(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const mL = (i, s, f, h) => {
  const m = f ? vL : C_, x = rL(m, s), b = s.mode || "svg", D = {}, R = s.style || {}, M = {
    ...b === "svg" ? pL : {},
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
          x[Me] = ie === !0 || ie === "true" || ie === 1;
          break;
        case "flip":
          typeof ie == "string" && iL(x, ie);
          break;
        case "color":
          D.color = ie;
          break;
        case "rotate":
          typeof ie == "string" ? x[Me] = lL(ie) : typeof ie == "number" && (x[Me] = ie);
          break;
        case "ariaHidden":
        case "aria-hidden":
          ie !== !0 && ie !== "true" && delete M["aria-hidden"];
          break;
        default:
          m[Me] === void 0 && (M[Me] = ie);
      }
  }
  const P = T2(i, x), U = P.attributes;
  if (x.inline && (D.verticalAlign = "-0.125em"), b === "svg") {
    M.style = {
      ...D,
      ...R
    }, Object.assign(M, U);
    let Me = 0, ie = s.id;
    return typeof ie == "string" && (ie = ie.replace(/-/g, "_")), M.dangerouslySetInnerHTML = {
      __html: dL(M2(P.body, ie ? () => ie + "ID" + Me++ : "iconifyReact"))
    }, qu.createElement("svg", M);
  }
  const { body: $, width: Q, height: ne } = i, ae = b === "mask" || (b === "bg" ? !1 : $.indexOf("currentColor") !== -1), se = oL($, {
    ...U,
    width: Q + "",
    height: ne + ""
  });
  return M.style = {
    ...D,
    "--svg": cL(se),
    width: QE(U.width),
    height: QE(U.height),
    ...hL,
    ...ae ? bx : T_,
    ...R
  }, qu.createElement("span", M);
};
v_(!0);
L2("", Y2);
if (typeof document < "u" && typeof window < "u") {
  __();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const s = i.IconifyPreload, f = "Invalid IconifyPreload syntax.";
    typeof s == "object" && s !== null && (s instanceof Array ? s : [s]).forEach((h) => {
      try {
        // Check if item is an object and not null/array
        (typeof h != "object" || h === null || h instanceof Array || // Check for 'icons' and 'prefix'
        typeof h.icons != "object" || typeof h.prefix != "string" || // Add icon set
        !k2(h)) && console.error(f);
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
          N2(f, m) || console.error(h);
        } catch {
          console.error(h);
        }
      }
  }
}
class R_ extends qu.Component {
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
    if (typeof h != "string" || (m = sy(h, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const x = x2(m);
    if (!x) {
      (!this._loading || this._loading.name !== h) && (this._abortLoading(), this._icon = "", this._setData(null), x !== null && (this._loading = {
        name: h,
        abort: nL([m], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== h || f.icon === null) {
      this._abortLoading(), this._icon = h;
      const b = ["iconify"];
      m.prefix !== "" && b.push("iconify--" + m.prefix), m.provider !== "" && b.push("iconify--" + m.provider), this._setData({
        data: x,
        classes: b
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
      return s.children ? s.children : qu.createElement("span", {});
    let h = s;
    return f.classes && (h = {
      ...s,
      className: (typeof s.className == "string" ? s.className + " " : "") + f.classes.join(" ")
    }), mL({
      ...Rx,
      ...f.data
    }, h, s._inline, s._ref);
  }
}
qu.forwardRef(function(s, f) {
  const h = {
    ...s,
    _ref: f,
    _inline: !1
  };
  return qu.createElement(R_, h);
});
qu.forwardRef(function(s, f) {
  const h = {
    ...s,
    _ref: f,
    _inline: !0
  };
  return qu.createElement(R_, h);
});
const gL = (i, s, f, h, m, x) => {
  s = s - 16;
  const b = s / h, D = [];
  return Object.values(i).forEach((R) => {
    let M = "";
    R.forEach((P, U) => {
      U === 0 && (x ? M += `M-4,${s + 50}L-4,${s - P * b}` : M += `M0,${s - P * b}`), U > 0 && (M += `L${m * U},${s - P * b}`), U === R.length - 1 && (M += `L${f + 4},${s + 50}`);
    }), D.push(M);
  }), D;
}, jA = ({
  data: i,
  width: s,
  height: f,
  filled: h = !0,
  tooltipRef: m,
  maxItemValue: x,
  lineRef: b
}) => {
  if (s === 0 || f === 0 || i.length === 0)
    return null;
  const D = Object.keys(i[0]).length, R = s / (i.length - 1) + 1, M = i.reduce(
    (U, $) => (Object.entries($).forEach(
      ([Q, ne]) => {
        U != null && U[Q] ? U[Q].push(ne) : U[Q] = [ne];
      }
    ), U),
    {}
  ), P = gL(
    M,
    f,
    s,
    x,
    R,
    h
  );
  return /* @__PURE__ */ Yt.jsx(Yt.Fragment, { children: P == null ? void 0 : P.map((U, $) => /* @__PURE__ */ Yt.jsxs("g", { children: [
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
          if (b.current) {
            const ae = b.current.parentNode.getBoundingClientRect().left, Me = Array.from({ length: D }).map(
              (ee, ge) => R * ge
            ).map(
              (ee) => Math.abs(ne - ae - ee)
            ), ie = Me.indexOf(
              Math.min(...Me)
            );
            if (m.current) {
              const ee = Object.entries(
                i[ie] ?? []
              ).reduce((ge, ve) => (ge += `<span>${ve[0]}: ${ve[1]}</span>`, ge), "");
              m.current.innerHTML = `
                       ${ee}
                    `;
            }
          }
        }
      }
    ),
    h && /* @__PURE__ */ Yt.jsxs("linearGradient", { id: `lgrad-${$}`, gradientTransform: "rotate(90)", children: [
      /* @__PURE__ */ Yt.jsx("stop", { offset: "0%", stopColor: "#4169e1" }),
      /* @__PURE__ */ Yt.jsx("stop", { offset: "75%", stopColor: "#c44764" })
    ] })
  ] }, $)) });
}, yL = ({
  label: i,
  onMouseEnter: s,
  x: f,
  y: h,
  height: m,
  width: x,
  ...b
}) => {
  const D = String(b.value).length * 4, R = x / 2 - D;
  return /* @__PURE__ */ Yt.jsxs(
    "g",
    {
      onMouseEnter: () => s == null ? void 0 : s({
        label: i,
        value: b.value
      }),
      onMouseMove: (M) => {
        var P;
        return (P = b.onMouseMove) == null ? void 0 : P.call(b, { x: M.clientX, y: M.clientY });
      },
      children: [
        /* @__PURE__ */ Yt.jsx("text", { x: f + R, y: h - 5, children: b.value }),
        /* @__PURE__ */ Yt.jsx("rect", { x: f, y: h, height: m, width: x, rx: 4 })
      ]
    }
  );
}, YA = ({
  width: i,
  height: s,
  data: f,
  showOnly: h,
  tooltipRef: m,
  groupBy: x,
  maxItemValue: b
}) => {
  if (console.log(f), i === 0 || s === 0 || f.length === 0)
    return null;
  h && (f = f.map((P) => ({
    [x]: P[x],
    [h]: P[h]
  })));
  const D = Object.keys(f[0]).length;
  let R = 24, M = (i - R * (f.length - 1)) / f.length;
  return h ? R = 24 : (R = 0, M = (i - R * (f.length - 1) * (D - 1)) / f.length / D), console.log(f, M, D), /* @__PURE__ */ Yt.jsx(Yt.Fragment, { children: f.map((P, U) => {
    const $ = (s - 40) / b, Q = { ...P };
    delete Q[x];
    let ne = 1, se = U * ne * D * ((M + R) / (D - 1)), Me = U > 0 ? se / 2 : se;
    Me += String(P[x]).length * 6;
    const ie = (M + R) * D;
    if (!h) {
      const ee = (i - R * (f.length - 1)) / f.length;
      Me = ee * U + ee / 2 - String(P[x]).length * 8;
    }
    return /* @__PURE__ */ Yt.jsxs("g", { children: [
      Object.entries(Q).map(([ee, ge], ve) => {
        se = ve * D * ((M + R * (D - 1)) / (D - 1)), se = se + U * ie, h && (se /= 2);
        const he = ge * $;
        return ne += 1, /* @__PURE__ */ Yt.jsx(
          yL,
          {
            x: se,
            value: ge,
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
          x: Me + (M - R - String(P[x]).length * 8) / 2,
          children: P[x]
        }
      )
    ] }, U);
  }) });
};
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var D_;
function oe() {
  return D_.apply(null, arguments);
}
function bL(i) {
  D_ = i;
}
function Ki(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function oc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function Ct(i, s) {
  return Object.prototype.hasOwnProperty.call(i, s);
}
function zx(i) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(i).length === 0;
  var s;
  for (s in i)
    if (Ct(i, s))
      return !1;
  return !0;
}
function Ua(i) {
  return i === void 0;
}
function Yo(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function $h(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function O_(i, s) {
  var f = [], h, m = i.length;
  for (h = 0; h < m; ++h)
    f.push(s(i[h], h));
  return f;
}
function Wu(i, s) {
  for (var f in s)
    Ct(s, f) && (i[f] = s[f]);
  return Ct(s, "toString") && (i.toString = s.toString), Ct(s, "valueOf") && (i.valueOf = s.valueOf), i;
}
function Yl(i, s, f, h) {
  return eC(i, s, f, h, !0).utc();
}
function SL() {
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
  return i._pf == null && (i._pf = SL()), i._pf;
}
var Sx;
Array.prototype.some ? Sx = Array.prototype.some : Sx = function(i) {
  var s = Object(this), f = s.length >>> 0, h;
  for (h = 0; h < f; h++)
    if (h in s && i.call(this, s[h], h, s))
      return !0;
  return !1;
};
function Ax(i) {
  if (i._isValid == null) {
    var s = at(i), f = Sx.call(s.parsedDateParts, function(m) {
      return m != null;
    }), h = !isNaN(i._d.getTime()) && s.overflow < 0 && !s.empty && !s.invalidEra && !s.invalidMonth && !s.invalidWeekday && !s.weekdayMismatch && !s.nullInput && !s.invalidFormat && !s.userInvalidated && (!s.meridiem || s.meridiem && f);
    if (i._strict && (h = h && s.charsLeftOver === 0 && s.unusedTokens.length === 0 && s.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = h;
    else
      return h;
  }
  return i._isValid;
}
function fy(i) {
  var s = Yl(NaN);
  return i != null ? Wu(at(s), i) : at(s).userInvalidated = !0, s;
}
var qE = oe.momentProperties = [], nx = !1;
function Fx(i, s) {
  var f, h, m, x = qE.length;
  if (Ua(s._isAMomentObject) || (i._isAMomentObject = s._isAMomentObject), Ua(s._i) || (i._i = s._i), Ua(s._f) || (i._f = s._f), Ua(s._l) || (i._l = s._l), Ua(s._strict) || (i._strict = s._strict), Ua(s._tzm) || (i._tzm = s._tzm), Ua(s._isUTC) || (i._isUTC = s._isUTC), Ua(s._offset) || (i._offset = s._offset), Ua(s._pf) || (i._pf = at(s)), Ua(s._locale) || (i._locale = s._locale), x > 0)
    for (f = 0; f < x; f++)
      h = qE[f], m = s[h], Ua(m) || (i[h] = m);
  return i;
}
function Ih(i) {
  Fx(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), nx === !1 && (nx = !0, oe.updateOffset(this), nx = !1);
}
function Zi(i) {
  return i instanceof Ih || i != null && i._isAMomentObject != null;
}
function M_(i) {
  oe.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function bi(i, s) {
  var f = !0;
  return Wu(function() {
    if (oe.deprecationHandler != null && oe.deprecationHandler(null, i), f) {
      var h = [], m, x, b, D = arguments.length;
      for (x = 0; x < D; x++) {
        if (m = "", typeof arguments[x] == "object") {
          m += `
[` + x + "] ";
          for (b in arguments[0])
            Ct(arguments[0], b) && (m += b + ": " + arguments[0][b] + ", ");
          m = m.slice(0, -2);
        } else
          m = arguments[x];
        h.push(m);
      }
      M_(
        i + `
Arguments: ` + Array.prototype.slice.call(h).join("") + `
` + new Error().stack
      ), f = !1;
    }
    return s.apply(this, arguments);
  }, s);
}
var XE = {};
function L_(i, s) {
  oe.deprecationHandler != null && oe.deprecationHandler(i, s), XE[i] || (M_(s), XE[i] = !0);
}
oe.suppressDeprecationWarnings = !1;
oe.deprecationHandler = null;
function Pl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function xL(i) {
  var s, f;
  for (f in i)
    Ct(i, f) && (s = i[f], Pl(s) ? this[f] = s : this["_" + f] = s);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function xx(i, s) {
  var f = Wu({}, i), h;
  for (h in s)
    Ct(s, h) && (oc(i[h]) && oc(s[h]) ? (f[h] = {}, Wu(f[h], i[h]), Wu(f[h], s[h])) : s[h] != null ? f[h] = s[h] : delete f[h]);
  for (h in i)
    Ct(i, h) && !Ct(s, h) && oc(i[h]) && (f[h] = Wu({}, f[h]));
  return f;
}
function Hx(i) {
  i != null && this.set(i);
}
var wx;
Object.keys ? wx = Object.keys : wx = function(i) {
  var s, f = [];
  for (s in i)
    Ct(i, s) && f.push(s);
  return f;
};
var wL = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function kL(i, s, f) {
  var h = this._calendar[i] || this._calendar.sameElse;
  return Pl(h) ? h.call(s, f) : h;
}
function jl(i, s, f) {
  var h = "" + Math.abs(i), m = s - h.length, x = i >= 0;
  return (x ? f ? "+" : "" : "-") + Math.pow(10, Math.max(0, m)).toString().substr(1) + h;
}
var jx = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Gg = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, rx = {}, ud = {};
function je(i, s, f, h) {
  var m = h;
  typeof h == "string" && (m = function() {
    return this[h]();
  }), i && (ud[i] = m), s && (ud[s[0]] = function() {
    return jl(m.apply(this, arguments), s[1], s[2]);
  }), f && (ud[f] = function() {
    return this.localeData().ordinal(
      m.apply(this, arguments),
      i
    );
  });
}
function EL(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function _L(i) {
  var s = i.match(jx), f, h;
  for (f = 0, h = s.length; f < h; f++)
    ud[s[f]] ? s[f] = ud[s[f]] : s[f] = EL(s[f]);
  return function(m) {
    var x = "", b;
    for (b = 0; b < h; b++)
      x += Pl(s[b]) ? s[b].call(m, i) : s[b];
    return x;
  };
}
function Jg(i, s) {
  return i.isValid() ? (s = N_(s, i.localeData()), rx[s] = rx[s] || _L(s), rx[s](i)) : i.localeData().invalidDate();
}
function N_(i, s) {
  var f = 5;
  function h(m) {
    return s.longDateFormat(m) || m;
  }
  for (Gg.lastIndex = 0; f >= 0 && Gg.test(i); )
    i = i.replace(
      Gg,
      h
    ), Gg.lastIndex = 0, f -= 1;
  return i;
}
var CL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function TL(i) {
  var s = this._longDateFormat[i], f = this._longDateFormat[i.toUpperCase()];
  return s || !f ? s : (this._longDateFormat[i] = f.match(jx).map(function(h) {
    return h === "MMMM" || h === "MM" || h === "DD" || h === "dddd" ? h.slice(1) : h;
  }).join(""), this._longDateFormat[i]);
}
var RL = "Invalid date";
function DL() {
  return this._invalidDate;
}
var OL = "%d", ML = /\d{1,2}/;
function LL(i) {
  return this._ordinal.replace("%d", i);
}
var NL = {
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
function UL(i, s, f, h) {
  var m = this._relativeTime[f];
  return Pl(m) ? m(i, s, f, h) : m.replace(/%d/i, i);
}
function zL(i, s) {
  var f = this._relativeTime[i > 0 ? "future" : "past"];
  return Pl(f) ? f(s) : f.replace(/%s/i, s);
}
var Ah = {};
function Ir(i, s) {
  var f = i.toLowerCase();
  Ah[f] = Ah[f + "s"] = Ah[s] = i;
}
function Si(i) {
  return typeof i == "string" ? Ah[i] || Ah[i.toLowerCase()] : void 0;
}
function Yx(i) {
  var s = {}, f, h;
  for (h in i)
    Ct(i, h) && (f = Si(h), f && (s[f] = i[h]));
  return s;
}
var U_ = {};
function Br(i, s) {
  U_[i] = s;
}
function AL(i) {
  var s = [], f;
  for (f in i)
    Ct(i, f) && s.push({ unit: f, priority: U_[f] });
  return s.sort(function(h, m) {
    return h.priority - m.priority;
  }), s;
}
function dy(i) {
  return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0;
}
function yi(i) {
  return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
}
function ct(i) {
  var s = +i, f = 0;
  return s !== 0 && isFinite(s) && (f = yi(s)), f;
}
function fd(i, s) {
  return function(f) {
    return f != null ? (z_(this, i, f), oe.updateOffset(this, s), this) : ry(this, i);
  };
}
function ry(i, s) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + s]() : NaN;
}
function z_(i, s, f) {
  i.isValid() && !isNaN(f) && (s === "FullYear" && dy(i.year()) && i.month() === 1 && i.date() === 29 ? (f = ct(f), i._d["set" + (i._isUTC ? "UTC" : "") + s](
    f,
    i.month(),
    yy(f, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + s](f));
}
function FL(i) {
  return i = Si(i), Pl(this[i]) ? this[i]() : this;
}
function HL(i, s) {
  if (typeof i == "object") {
    i = Yx(i);
    var f = AL(i), h, m = f.length;
    for (h = 0; h < m; h++)
      this[f[h].unit](i[f[h].unit]);
  } else if (i = Si(i), Pl(this[i]))
    return this[i](s);
  return this;
}
var A_ = /\d/, Za = /\d\d/, F_ = /\d{3}/, Px = /\d{4}/, py = /[+-]?\d{6}/, an = /\d\d?/, H_ = /\d\d\d\d?/, j_ = /\d\d\d\d\d\d?/, hy = /\d{1,3}/, Vx = /\d{1,4}/, vy = /[+-]?\d{1,6}/, dd = /\d+/, my = /[+-]?\d+/, jL = /Z|[+-]\d\d:?\d\d/gi, gy = /Z|[+-]\d\d(?::?\d\d)?/gi, YL = /[+-]?\d+(\.\d{1,3})?/, Bh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ay;
ay = {};
function Ee(i, s, f) {
  ay[i] = Pl(s) ? s : function(h, m) {
    return h && f ? f : s;
  };
}
function PL(i, s) {
  return Ct(ay, i) ? ay[i](s._strict, s._locale) : new RegExp(VL(i));
}
function VL(i) {
  return Ka(
    i.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(s, f, h, m, x) {
        return f || h || m || x;
      }
    )
  );
}
function Ka(i) {
  return i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var kx = {};
function Pt(i, s) {
  var f, h = s, m;
  for (typeof i == "string" && (i = [i]), Yo(s) && (h = function(x, b) {
    b[s] = ct(x);
  }), m = i.length, f = 0; f < m; f++)
    kx[i[f]] = h;
}
function Wh(i, s) {
  Pt(i, function(f, h, m, x) {
    m._w = m._w || {}, s(f, m._w, m, x);
  });
}
function $L(i, s, f) {
  s != null && Ct(kx, i) && kx[i](s, f._a, f, i);
}
var $r = 0, Fo = 1, Hl = 2, tr = 3, Xi = 4, Ho = 5, lc = 6, IL = 7, BL = 8;
function WL(i, s) {
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
function yy(i, s) {
  if (isNaN(i) || isNaN(s))
    return NaN;
  var f = WL(s, 12);
  return i += (s - f) / 12, f === 1 ? dy(i) ? 29 : 28 : 31 - f % 7 % 2;
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
Ir("month", "M");
Br("month", 8);
Ee("M", an);
Ee("MM", an, Za);
Ee("MMM", function(i, s) {
  return s.monthsShortRegex(i);
});
Ee("MMMM", function(i, s) {
  return s.monthsRegex(i);
});
Pt(["M", "MM"], function(i, s) {
  s[Fo] = ct(i) - 1;
});
Pt(["MMM", "MMMM"], function(i, s, f, h) {
  var m = f._locale.monthsParse(i, h, f._strict);
  m != null ? s[Fo] = m : at(f).invalidMonth = i;
});
var GL = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Y_ = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), P_ = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, QL = Bh, qL = Bh;
function XL(i, s) {
  return i ? Ki(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || P_).test(s) ? "format" : "standalone"][i.month()] : Ki(this._months) ? this._months : this._months.standalone;
}
function KL(i, s) {
  return i ? Ki(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[P_.test(s) ? "format" : "standalone"][i.month()] : Ki(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ZL(i, s, f) {
  var h, m, x, b = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], h = 0; h < 12; ++h)
      x = Yl([2e3, h]), this._shortMonthsParse[h] = this.monthsShort(
        x,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[h] = this.months(x, "").toLocaleLowerCase();
  return f ? s === "MMM" ? (m = On.call(this._shortMonthsParse, b), m !== -1 ? m : null) : (m = On.call(this._longMonthsParse, b), m !== -1 ? m : null) : s === "MMM" ? (m = On.call(this._shortMonthsParse, b), m !== -1 ? m : (m = On.call(this._longMonthsParse, b), m !== -1 ? m : null)) : (m = On.call(this._longMonthsParse, b), m !== -1 ? m : (m = On.call(this._shortMonthsParse, b), m !== -1 ? m : null));
}
function JL(i, s, f) {
  var h, m, x;
  if (this._monthsParseExact)
    return ZL.call(this, i, s, f);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), h = 0; h < 12; h++) {
    if (m = Yl([2e3, h]), f && !this._longMonthsParse[h] && (this._longMonthsParse[h] = new RegExp(
      "^" + this.months(m, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[h] = new RegExp(
      "^" + this.monthsShort(m, "").replace(".", "") + "$",
      "i"
    )), !f && !this._monthsParse[h] && (x = "^" + this.months(m, "") + "|^" + this.monthsShort(m, ""), this._monthsParse[h] = new RegExp(x.replace(".", ""), "i")), f && s === "MMMM" && this._longMonthsParse[h].test(i))
      return h;
    if (f && s === "MMM" && this._shortMonthsParse[h].test(i))
      return h;
    if (!f && this._monthsParse[h].test(i))
      return h;
  }
}
function V_(i, s) {
  var f;
  if (!i.isValid())
    return i;
  if (typeof s == "string") {
    if (/^\d+$/.test(s))
      s = ct(s);
    else if (s = i.localeData().monthsParse(s), !Yo(s))
      return i;
  }
  return f = Math.min(i.date(), yy(i.year(), s)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](s, f), i;
}
function $_(i) {
  return i != null ? (V_(this, i), oe.updateOffset(this, !0), this) : ry(this, "Month");
}
function eN() {
  return yy(this.year(), this.month());
}
function tN(i) {
  return this._monthsParseExact ? (Ct(this, "_monthsRegex") || I_.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ct(this, "_monthsShortRegex") || (this._monthsShortRegex = QL), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function nN(i) {
  return this._monthsParseExact ? (Ct(this, "_monthsRegex") || I_.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Ct(this, "_monthsRegex") || (this._monthsRegex = qL), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function I_() {
  function i(b, D) {
    return D.length - b.length;
  }
  var s = [], f = [], h = [], m, x;
  for (m = 0; m < 12; m++)
    x = Yl([2e3, m]), s.push(this.monthsShort(x, "")), f.push(this.months(x, "")), h.push(this.months(x, "")), h.push(this.monthsShort(x, ""));
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
Ir("year", "y");
Br("year", 1);
Ee("Y", my);
Ee("YY", an, Za);
Ee("YYYY", Vx, Px);
Ee("YYYYY", vy, py);
Ee("YYYYYY", vy, py);
Pt(["YYYYY", "YYYYYY"], $r);
Pt("YYYY", function(i, s) {
  s[$r] = i.length === 2 ? oe.parseTwoDigitYear(i) : ct(i);
});
Pt("YY", function(i, s) {
  s[$r] = oe.parseTwoDigitYear(i);
});
Pt("Y", function(i, s) {
  s[$r] = parseInt(i, 10);
});
function Fh(i) {
  return dy(i) ? 366 : 365;
}
oe.parseTwoDigitYear = function(i) {
  return ct(i) + (ct(i) > 68 ? 1900 : 2e3);
};
var B_ = fd("FullYear", !0);
function rN() {
  return dy(this.year());
}
function aN(i, s, f, h, m, x, b) {
  var D;
  return i < 100 && i >= 0 ? (D = new Date(i + 400, s, f, h, m, x, b), isFinite(D.getFullYear()) && D.setFullYear(i)) : D = new Date(i, s, f, h, m, x, b), D;
}
function Yh(i) {
  var s, f;
  return i < 100 && i >= 0 ? (f = Array.prototype.slice.call(arguments), f[0] = i + 400, s = new Date(Date.UTC.apply(null, f)), isFinite(s.getUTCFullYear()) && s.setUTCFullYear(i)) : s = new Date(Date.UTC.apply(null, arguments)), s;
}
function iy(i, s, f) {
  var h = 7 + s - f, m = (7 + Yh(i, 0, h).getUTCDay() - s) % 7;
  return -m + h - 1;
}
function W_(i, s, f, h, m) {
  var x = (7 + f - h) % 7, b = iy(i, h, m), D = 1 + 7 * (s - 1) + x + b, R, M;
  return D <= 0 ? (R = i - 1, M = Fh(R) + D) : D > Fh(i) ? (R = i + 1, M = D - Fh(i)) : (R = i, M = D), {
    year: R,
    dayOfYear: M
  };
}
function Ph(i, s, f) {
  var h = iy(i.year(), s, f), m = Math.floor((i.dayOfYear() - h - 1) / 7) + 1, x, b;
  return m < 1 ? (b = i.year() - 1, x = m + jo(b, s, f)) : m > jo(i.year(), s, f) ? (x = m - jo(i.year(), s, f), b = i.year() + 1) : (b = i.year(), x = m), {
    week: x,
    year: b
  };
}
function jo(i, s, f) {
  var h = iy(i, s, f), m = iy(i + 1, s, f);
  return (Fh(i) - h + m) / 7;
}
je("w", ["ww", 2], "wo", "week");
je("W", ["WW", 2], "Wo", "isoWeek");
Ir("week", "w");
Ir("isoWeek", "W");
Br("week", 5);
Br("isoWeek", 5);
Ee("w", an);
Ee("ww", an, Za);
Ee("W", an);
Ee("WW", an, Za);
Wh(
  ["w", "ww", "W", "WW"],
  function(i, s, f, h) {
    s[h.substr(0, 1)] = ct(i);
  }
);
function iN(i) {
  return Ph(i, this._week.dow, this._week.doy).week;
}
var lN = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function oN() {
  return this._week.dow;
}
function uN() {
  return this._week.doy;
}
function sN(i) {
  var s = this.localeData().week(this);
  return i == null ? s : this.add((i - s) * 7, "d");
}
function cN(i) {
  var s = Ph(this, 1, 4).week;
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
Ir("day", "d");
Ir("weekday", "e");
Ir("isoWeekday", "E");
Br("day", 11);
Br("weekday", 11);
Br("isoWeekday", 11);
Ee("d", an);
Ee("e", an);
Ee("E", an);
Ee("dd", function(i, s) {
  return s.weekdaysMinRegex(i);
});
Ee("ddd", function(i, s) {
  return s.weekdaysShortRegex(i);
});
Ee("dddd", function(i, s) {
  return s.weekdaysRegex(i);
});
Wh(["dd", "ddd", "dddd"], function(i, s, f, h) {
  var m = f._locale.weekdaysParse(i, h, f._strict);
  m != null ? s.d = m : at(f).invalidWeekday = i;
});
Wh(["d", "e", "E"], function(i, s, f, h) {
  s[h] = ct(i);
});
function fN(i, s) {
  return typeof i != "string" ? i : isNaN(i) ? (i = s.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function dN(i, s) {
  return typeof i == "string" ? s.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function $x(i, s) {
  return i.slice(s, 7).concat(i.slice(0, s));
}
var pN = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), G_ = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), hN = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), vN = Bh, mN = Bh, gN = Bh;
function yN(i, s) {
  var f = Ki(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(s) ? "format" : "standalone"];
  return i === !0 ? $x(f, this._week.dow) : i ? f[i.day()] : f;
}
function bN(i) {
  return i === !0 ? $x(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function SN(i) {
  return i === !0 ? $x(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function xN(i, s, f) {
  var h, m, x, b = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], h = 0; h < 7; ++h)
      x = Yl([2e3, 1]).day(h), this._minWeekdaysParse[h] = this.weekdaysMin(
        x,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[h] = this.weekdaysShort(
        x,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[h] = this.weekdays(x, "").toLocaleLowerCase();
  return f ? s === "dddd" ? (m = On.call(this._weekdaysParse, b), m !== -1 ? m : null) : s === "ddd" ? (m = On.call(this._shortWeekdaysParse, b), m !== -1 ? m : null) : (m = On.call(this._minWeekdaysParse, b), m !== -1 ? m : null) : s === "dddd" ? (m = On.call(this._weekdaysParse, b), m !== -1 || (m = On.call(this._shortWeekdaysParse, b), m !== -1) ? m : (m = On.call(this._minWeekdaysParse, b), m !== -1 ? m : null)) : s === "ddd" ? (m = On.call(this._shortWeekdaysParse, b), m !== -1 || (m = On.call(this._weekdaysParse, b), m !== -1) ? m : (m = On.call(this._minWeekdaysParse, b), m !== -1 ? m : null)) : (m = On.call(this._minWeekdaysParse, b), m !== -1 || (m = On.call(this._weekdaysParse, b), m !== -1) ? m : (m = On.call(this._shortWeekdaysParse, b), m !== -1 ? m : null));
}
function wN(i, s, f) {
  var h, m, x;
  if (this._weekdaysParseExact)
    return xN.call(this, i, s, f);
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
    )), this._weekdaysParse[h] || (x = "^" + this.weekdays(m, "") + "|^" + this.weekdaysShort(m, "") + "|^" + this.weekdaysMin(m, ""), this._weekdaysParse[h] = new RegExp(x.replace(".", ""), "i")), f && s === "dddd" && this._fullWeekdaysParse[h].test(i))
      return h;
    if (f && s === "ddd" && this._shortWeekdaysParse[h].test(i))
      return h;
    if (f && s === "dd" && this._minWeekdaysParse[h].test(i))
      return h;
    if (!f && this._weekdaysParse[h].test(i))
      return h;
  }
}
function kN(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = fN(i, this.localeData()), this.add(i - s, "d")) : s;
}
function EN(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var s = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? s : this.add(i - s, "d");
}
function _N(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var s = dN(i, this.localeData());
    return this.day(this.day() % 7 ? s : s - 7);
  } else
    return this.day() || 7;
}
function CN(i) {
  return this._weekdaysParseExact ? (Ct(this, "_weekdaysRegex") || Ix.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ct(this, "_weekdaysRegex") || (this._weekdaysRegex = vN), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function TN(i) {
  return this._weekdaysParseExact ? (Ct(this, "_weekdaysRegex") || Ix.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ct(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = mN), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function RN(i) {
  return this._weekdaysParseExact ? (Ct(this, "_weekdaysRegex") || Ix.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ct(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = gN), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ix() {
  function i(P, U) {
    return U.length - P.length;
  }
  var s = [], f = [], h = [], m = [], x, b, D, R, M;
  for (x = 0; x < 7; x++)
    b = Yl([2e3, 1]).day(x), D = Ka(this.weekdaysMin(b, "")), R = Ka(this.weekdaysShort(b, "")), M = Ka(this.weekdays(b, "")), s.push(D), f.push(R), h.push(M), m.push(D), m.push(R), m.push(M);
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
function Bx() {
  return this.hours() % 12 || 12;
}
function DN() {
  return this.hours() || 24;
}
je("H", ["HH", 2], 0, "hour");
je("h", ["hh", 2], 0, Bx);
je("k", ["kk", 2], 0, DN);
je("hmm", 0, 0, function() {
  return "" + Bx.apply(this) + jl(this.minutes(), 2);
});
je("hmmss", 0, 0, function() {
  return "" + Bx.apply(this) + jl(this.minutes(), 2) + jl(this.seconds(), 2);
});
je("Hmm", 0, 0, function() {
  return "" + this.hours() + jl(this.minutes(), 2);
});
je("Hmmss", 0, 0, function() {
  return "" + this.hours() + jl(this.minutes(), 2) + jl(this.seconds(), 2);
});
function Q_(i, s) {
  je(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      s
    );
  });
}
Q_("a", !0);
Q_("A", !1);
Ir("hour", "h");
Br("hour", 13);
function q_(i, s) {
  return s._meridiemParse;
}
Ee("a", q_);
Ee("A", q_);
Ee("H", an);
Ee("h", an);
Ee("k", an);
Ee("HH", an, Za);
Ee("hh", an, Za);
Ee("kk", an, Za);
Ee("hmm", H_);
Ee("hmmss", j_);
Ee("Hmm", H_);
Ee("Hmmss", j_);
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
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h, 2)), s[Ho] = ct(i.substr(m)), at(f).bigHour = !0;
});
Pt("Hmm", function(i, s, f) {
  var h = i.length - 2;
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h));
});
Pt("Hmmss", function(i, s, f) {
  var h = i.length - 4, m = i.length - 2;
  s[tr] = ct(i.substr(0, h)), s[Xi] = ct(i.substr(h, 2)), s[Ho] = ct(i.substr(m));
});
function ON(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var MN = /[ap]\.?m?\.?/i, LN = fd("Hours", !0);
function NN(i, s, f) {
  return i > 11 ? f ? "pm" : "PM" : f ? "am" : "AM";
}
var X_ = {
  calendar: wL,
  longDateFormat: CL,
  invalidDate: RL,
  ordinal: OL,
  dayOfMonthOrdinalParse: ML,
  relativeTime: NL,
  months: GL,
  monthsShort: Y_,
  week: lN,
  weekdays: pN,
  weekdaysMin: hN,
  weekdaysShort: G_,
  meridiemParse: MN
}, sn = {}, Lh = {}, Vh;
function UN(i, s) {
  var f, h = Math.min(i.length, s.length);
  for (f = 0; f < h; f += 1)
    if (i[f] !== s[f])
      return f;
  return h;
}
function KE(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function zN(i) {
  for (var s = 0, f, h, m, x; s < i.length; ) {
    for (x = KE(i[s]).split("-"), f = x.length, h = KE(i[s + 1]), h = h ? h.split("-") : null; f > 0; ) {
      if (m = by(x.slice(0, f).join("-")), m)
        return m;
      if (h && h.length >= f && UN(x, h) >= f - 1)
        break;
      f--;
    }
    s++;
  }
  return Vh;
}
function AN(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function by(i) {
  var s = null, f;
  if (sn[i] === void 0 && typeof module < "u" && module && module.exports && AN(i))
    try {
      s = Vh._abbr, f = require, f("./locale/" + i), Qu(s);
    } catch {
      sn[i] = null;
    }
  return sn[i];
}
function Qu(i, s) {
  var f;
  return i && (Ua(s) ? f = Vo(i) : f = Wx(i, s), f ? Vh = f : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Vh._abbr;
}
function Wx(i, s) {
  if (s !== null) {
    var f, h = X_;
    if (s.abbr = i, sn[i] != null)
      L_(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), h = sn[i]._config;
    else if (s.parentLocale != null)
      if (sn[s.parentLocale] != null)
        h = sn[s.parentLocale]._config;
      else if (f = by(s.parentLocale), f != null)
        h = f._config;
      else
        return Lh[s.parentLocale] || (Lh[s.parentLocale] = []), Lh[s.parentLocale].push({
          name: i,
          config: s
        }), null;
    return sn[i] = new Hx(xx(h, s)), Lh[i] && Lh[i].forEach(function(m) {
      Wx(m.name, m.config);
    }), Qu(i), sn[i];
  } else
    return delete sn[i], null;
}
function FN(i, s) {
  if (s != null) {
    var f, h, m = X_;
    sn[i] != null && sn[i].parentLocale != null ? sn[i].set(xx(sn[i]._config, s)) : (h = by(i), h != null && (m = h._config), s = xx(m, s), h == null && (s.abbr = i), f = new Hx(s), f.parentLocale = sn[i], sn[i] = f), Qu(i);
  } else
    sn[i] != null && (sn[i].parentLocale != null ? (sn[i] = sn[i].parentLocale, i === Qu() && Qu(i)) : sn[i] != null && delete sn[i]);
  return sn[i];
}
function Vo(i) {
  var s;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Vh;
  if (!Ki(i)) {
    if (s = by(i), s)
      return s;
    i = [i];
  }
  return zN(i);
}
function HN() {
  return wx(sn);
}
function Gx(i) {
  var s, f = i._a;
  return f && at(i).overflow === -2 && (s = f[Fo] < 0 || f[Fo] > 11 ? Fo : f[Hl] < 1 || f[Hl] > yy(f[$r], f[Fo]) ? Hl : f[tr] < 0 || f[tr] > 24 || f[tr] === 24 && (f[Xi] !== 0 || f[Ho] !== 0 || f[lc] !== 0) ? tr : f[Xi] < 0 || f[Xi] > 59 ? Xi : f[Ho] < 0 || f[Ho] > 59 ? Ho : f[lc] < 0 || f[lc] > 999 ? lc : -1, at(i)._overflowDayOfYear && (s < $r || s > Hl) && (s = Hl), at(i)._overflowWeeks && s === -1 && (s = IL), at(i)._overflowWeekday && s === -1 && (s = BL), at(i).overflow = s), i;
}
var jN = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, YN = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, PN = /Z|[+-]\d\d(?::?\d\d)?/, Qg = [
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
], ax = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], VN = /^\/?Date\((-?\d+)/i, $N = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, IN = {
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
function K_(i) {
  var s, f, h = i._i, m = jN.exec(h) || YN.exec(h), x, b, D, R, M = Qg.length, P = ax.length;
  if (m) {
    for (at(i).iso = !0, s = 0, f = M; s < f; s++)
      if (Qg[s][1].exec(m[1])) {
        b = Qg[s][0], x = Qg[s][2] !== !1;
        break;
      }
    if (b == null) {
      i._isValid = !1;
      return;
    }
    if (m[3]) {
      for (s = 0, f = P; s < f; s++)
        if (ax[s][1].exec(m[3])) {
          D = (m[2] || " ") + ax[s][0];
          break;
        }
      if (D == null) {
        i._isValid = !1;
        return;
      }
    }
    if (!x && D != null) {
      i._isValid = !1;
      return;
    }
    if (m[4])
      if (PN.exec(m[4]))
        R = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = b + (D || "") + (R || ""), qx(i);
  } else
    i._isValid = !1;
}
function BN(i, s, f, h, m, x) {
  var b = [
    WN(i),
    Y_.indexOf(s),
    parseInt(f, 10),
    parseInt(h, 10),
    parseInt(m, 10)
  ];
  return x && b.push(parseInt(x, 10)), b;
}
function WN(i) {
  var s = parseInt(i, 10);
  return s <= 49 ? 2e3 + s : s <= 999 ? 1900 + s : s;
}
function GN(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function QN(i, s, f) {
  if (i) {
    var h = G_.indexOf(i), m = new Date(
      s[0],
      s[1],
      s[2]
    ).getDay();
    if (h !== m)
      return at(f).weekdayMismatch = !0, f._isValid = !1, !1;
  }
  return !0;
}
function qN(i, s, f) {
  if (i)
    return IN[i];
  if (s)
    return 0;
  var h = parseInt(f, 10), m = h % 100, x = (h - m) / 100;
  return x * 60 + m;
}
function Z_(i) {
  var s = $N.exec(GN(i._i)), f;
  if (s) {
    if (f = BN(
      s[4],
      s[3],
      s[2],
      s[5],
      s[6],
      s[7]
    ), !QN(s[1], f, i))
      return;
    i._a = f, i._tzm = qN(s[8], s[9], s[10]), i._d = Yh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), at(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function XN(i) {
  var s = VN.exec(i._i);
  if (s !== null) {
    i._d = /* @__PURE__ */ new Date(+s[1]);
    return;
  }
  if (K_(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if (Z_(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : oe.createFromInputFallback(i);
}
oe.createFromInputFallback = bi(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(i) {
    i._d = /* @__PURE__ */ new Date(i._i + (i._useUTC ? " UTC" : ""));
  }
);
function ld(i, s, f) {
  return i ?? s ?? f;
}
function KN(i) {
  var s = new Date(oe.now());
  return i._useUTC ? [
    s.getUTCFullYear(),
    s.getUTCMonth(),
    s.getUTCDate()
  ] : [s.getFullYear(), s.getMonth(), s.getDate()];
}
function Qx(i) {
  var s, f, h = [], m, x, b;
  if (!i._d) {
    for (m = KN(i), i._w && i._a[Hl] == null && i._a[Fo] == null && ZN(i), i._dayOfYear != null && (b = ld(i._a[$r], m[$r]), (i._dayOfYear > Fh(b) || i._dayOfYear === 0) && (at(i)._overflowDayOfYear = !0), f = Yh(b, 0, i._dayOfYear), i._a[Fo] = f.getUTCMonth(), i._a[Hl] = f.getUTCDate()), s = 0; s < 3 && i._a[s] == null; ++s)
      i._a[s] = h[s] = m[s];
    for (; s < 7; s++)
      i._a[s] = h[s] = i._a[s] == null ? s === 2 ? 1 : 0 : i._a[s];
    i._a[tr] === 24 && i._a[Xi] === 0 && i._a[Ho] === 0 && i._a[lc] === 0 && (i._nextDay = !0, i._a[tr] = 0), i._d = (i._useUTC ? Yh : aN).apply(
      null,
      h
    ), x = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[tr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== x && (at(i).weekdayMismatch = !0);
  }
}
function ZN(i) {
  var s, f, h, m, x, b, D, R, M;
  s = i._w, s.GG != null || s.W != null || s.E != null ? (x = 1, b = 4, f = ld(
    s.GG,
    i._a[$r],
    Ph(rn(), 1, 4).year
  ), h = ld(s.W, 1), m = ld(s.E, 1), (m < 1 || m > 7) && (R = !0)) : (x = i._locale._week.dow, b = i._locale._week.doy, M = Ph(rn(), x, b), f = ld(s.gg, i._a[$r], M.year), h = ld(s.w, M.week), s.d != null ? (m = s.d, (m < 0 || m > 6) && (R = !0)) : s.e != null ? (m = s.e + x, (s.e < 0 || s.e > 6) && (R = !0)) : m = x), h < 1 || h > jo(f, x, b) ? at(i)._overflowWeeks = !0 : R != null ? at(i)._overflowWeekday = !0 : (D = W_(f, h, m, x, b), i._a[$r] = D.year, i._dayOfYear = D.dayOfYear);
}
oe.ISO_8601 = function() {
};
oe.RFC_2822 = function() {
};
function qx(i) {
  if (i._f === oe.ISO_8601) {
    K_(i);
    return;
  }
  if (i._f === oe.RFC_2822) {
    Z_(i);
    return;
  }
  i._a = [], at(i).empty = !0;
  var s = "" + i._i, f, h, m, x, b, D = s.length, R = 0, M, P;
  for (m = N_(i._f, i._locale).match(jx) || [], P = m.length, f = 0; f < P; f++)
    x = m[f], h = (s.match(PL(x, i)) || [])[0], h && (b = s.substr(0, s.indexOf(h)), b.length > 0 && at(i).unusedInput.push(b), s = s.slice(
      s.indexOf(h) + h.length
    ), R += h.length), ud[x] ? (h ? at(i).empty = !1 : at(i).unusedTokens.push(x), $L(x, h, i)) : i._strict && !h && at(i).unusedTokens.push(x);
  at(i).charsLeftOver = D - R, s.length > 0 && at(i).unusedInput.push(s), i._a[tr] <= 12 && at(i).bigHour === !0 && i._a[tr] > 0 && (at(i).bigHour = void 0), at(i).parsedDateParts = i._a.slice(0), at(i).meridiem = i._meridiem, i._a[tr] = JN(
    i._locale,
    i._a[tr],
    i._meridiem
  ), M = at(i).era, M !== null && (i._a[$r] = i._locale.erasConvertYear(M, i._a[$r])), Qx(i), Gx(i);
}
function JN(i, s, f) {
  var h;
  return f == null ? s : i.meridiemHour != null ? i.meridiemHour(s, f) : (i.isPM != null && (h = i.isPM(f), h && s < 12 && (s += 12), !h && s === 12 && (s = 0)), s);
}
function eU(i) {
  var s, f, h, m, x, b, D = !1, R = i._f.length;
  if (R === 0) {
    at(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (m = 0; m < R; m++)
    x = 0, b = !1, s = Fx({}, i), i._useUTC != null && (s._useUTC = i._useUTC), s._f = i._f[m], qx(s), Ax(s) && (b = !0), x += at(s).charsLeftOver, x += at(s).unusedTokens.length * 10, at(s).score = x, D ? x < h && (h = x, f = s) : (h == null || x < h || b) && (h = x, f = s, b && (D = !0));
  Wu(i, f || s);
}
function tU(i) {
  if (!i._d) {
    var s = Yx(i._i), f = s.day === void 0 ? s.date : s.day;
    i._a = O_(
      [s.year, s.month, f, s.hour, s.minute, s.second, s.millisecond],
      function(h) {
        return h && parseInt(h, 10);
      }
    ), Qx(i);
  }
}
function nU(i) {
  var s = new Ih(Gx(J_(i)));
  return s._nextDay && (s.add(1, "d"), s._nextDay = void 0), s;
}
function J_(i) {
  var s = i._i, f = i._f;
  return i._locale = i._locale || Vo(i._l), s === null || f === void 0 && s === "" ? fy({ nullInput: !0 }) : (typeof s == "string" && (i._i = s = i._locale.preparse(s)), Zi(s) ? new Ih(Gx(s)) : ($h(s) ? i._d = s : Ki(f) ? eU(i) : f ? qx(i) : rU(i), Ax(i) || (i._d = null), i));
}
function rU(i) {
  var s = i._i;
  Ua(s) ? i._d = new Date(oe.now()) : $h(s) ? i._d = new Date(s.valueOf()) : typeof s == "string" ? XN(i) : Ki(s) ? (i._a = O_(s.slice(0), function(f) {
    return parseInt(f, 10);
  }), Qx(i)) : oc(s) ? tU(i) : Yo(s) ? i._d = new Date(s) : oe.createFromInputFallback(i);
}
function eC(i, s, f, h, m) {
  var x = {};
  return (s === !0 || s === !1) && (h = s, s = void 0), (f === !0 || f === !1) && (h = f, f = void 0), (oc(i) && zx(i) || Ki(i) && i.length === 0) && (i = void 0), x._isAMomentObject = !0, x._useUTC = x._isUTC = m, x._l = f, x._i = i, x._f = s, x._strict = h, nU(x);
}
function rn(i, s, f, h) {
  return eC(i, s, f, h, !1);
}
var aU = bi(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : fy();
  }
), iU = bi(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : fy();
  }
);
function tC(i, s) {
  var f, h;
  if (s.length === 1 && Ki(s[0]) && (s = s[0]), !s.length)
    return rn();
  for (f = s[0], h = 1; h < s.length; ++h)
    (!s[h].isValid() || s[h][i](f)) && (f = s[h]);
  return f;
}
function lU() {
  var i = [].slice.call(arguments, 0);
  return tC("isBefore", i);
}
function oU() {
  var i = [].slice.call(arguments, 0);
  return tC("isAfter", i);
}
var uU = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Nh = [
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
function sU(i) {
  var s, f = !1, h, m = Nh.length;
  for (s in i)
    if (Ct(i, s) && !(On.call(Nh, s) !== -1 && (i[s] == null || !isNaN(i[s]))))
      return !1;
  for (h = 0; h < m; ++h)
    if (i[Nh[h]]) {
      if (f)
        return !1;
      parseFloat(i[Nh[h]]) !== ct(i[Nh[h]]) && (f = !0);
    }
  return !0;
}
function cU() {
  return this._isValid;
}
function fU() {
  return Ji(NaN);
}
function Sy(i) {
  var s = Yx(i), f = s.year || 0, h = s.quarter || 0, m = s.month || 0, x = s.week || s.isoWeek || 0, b = s.day || 0, D = s.hour || 0, R = s.minute || 0, M = s.second || 0, P = s.millisecond || 0;
  this._isValid = sU(s), this._milliseconds = +P + M * 1e3 + // 1000
  R * 6e4 + // 1000 * 60
  D * 1e3 * 60 * 60, this._days = +b + x * 7, this._months = +m + h * 3 + f * 12, this._data = {}, this._locale = Vo(), this._bubble();
}
function ey(i) {
  return i instanceof Sy;
}
function Ex(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function dU(i, s, f) {
  var h = Math.min(i.length, s.length), m = Math.abs(i.length - s.length), x = 0, b;
  for (b = 0; b < h; b++)
    (f && i[b] !== s[b] || !f && ct(i[b]) !== ct(s[b])) && x++;
  return x + m;
}
function nC(i, s) {
  je(i, 0, 0, function() {
    var f = this.utcOffset(), h = "+";
    return f < 0 && (f = -f, h = "-"), h + jl(~~(f / 60), 2) + s + jl(~~f % 60, 2);
  });
}
nC("Z", ":");
nC("ZZ", "");
Ee("Z", gy);
Ee("ZZ", gy);
Pt(["Z", "ZZ"], function(i, s, f) {
  f._useUTC = !0, f._tzm = Xx(gy, i);
});
var pU = /([\+\-]|\d\d)/gi;
function Xx(i, s) {
  var f = (s || "").match(i), h, m, x;
  return f === null ? null : (h = f[f.length - 1] || [], m = (h + "").match(pU) || ["-", 0, 0], x = +(m[1] * 60) + ct(m[2]), x === 0 ? 0 : m[0] === "+" ? x : -x);
}
function Kx(i, s) {
  var f, h;
  return s._isUTC ? (f = s.clone(), h = (Zi(i) || $h(i) ? i.valueOf() : rn(i).valueOf()) - f.valueOf(), f._d.setTime(f._d.valueOf() + h), oe.updateOffset(f, !1), f) : rn(i).local();
}
function _x(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
oe.updateOffset = function() {
};
function hU(i, s, f) {
  var h = this._offset || 0, m;
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    if (typeof i == "string") {
      if (i = Xx(gy, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !f && (i = i * 60);
    return !this._isUTC && s && (m = _x(this)), this._offset = i, this._isUTC = !0, m != null && this.add(m, "m"), h !== i && (!s || this._changeInProgress ? iC(
      this,
      Ji(i - h, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, oe.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? h : _x(this);
}
function vU(i, s) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, s), this) : -this.utcOffset();
}
function mU(i) {
  return this.utcOffset(0, i);
}
function gU(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(_x(this), "m")), this;
}
function yU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = Xx(jL, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function bU(i) {
  return this.isValid() ? (i = i ? rn(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function SU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function xU() {
  if (!Ua(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, s;
  return Fx(i, this), i = J_(i), i._a ? (s = i._isUTC ? Yl(i._a) : rn(i._a), this._isDSTShifted = this.isValid() && dU(i._a, s.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function wU() {
  return this.isValid() ? !this._isUTC : !1;
}
function kU() {
  return this.isValid() ? this._isUTC : !1;
}
function rC() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var EU = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, _U = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ji(i, s) {
  var f = i, h = null, m, x, b;
  return ey(i) ? f = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : Yo(i) || !isNaN(+i) ? (f = {}, s ? f[s] = +i : f.milliseconds = +i) : (h = EU.exec(i)) ? (m = h[1] === "-" ? -1 : 1, f = {
    y: 0,
    d: ct(h[Hl]) * m,
    h: ct(h[tr]) * m,
    m: ct(h[Xi]) * m,
    s: ct(h[Ho]) * m,
    ms: ct(Ex(h[lc] * 1e3)) * m
    // the millisecond decimal point is included in the match
  }) : (h = _U.exec(i)) ? (m = h[1] === "-" ? -1 : 1, f = {
    y: ic(h[2], m),
    M: ic(h[3], m),
    w: ic(h[4], m),
    d: ic(h[5], m),
    h: ic(h[6], m),
    m: ic(h[7], m),
    s: ic(h[8], m)
  }) : f == null ? f = {} : typeof f == "object" && ("from" in f || "to" in f) && (b = CU(
    rn(f.from),
    rn(f.to)
  ), f = {}, f.ms = b.milliseconds, f.M = b.months), x = new Sy(f), ey(i) && Ct(i, "_locale") && (x._locale = i._locale), ey(i) && Ct(i, "_isValid") && (x._isValid = i._isValid), x;
}
Ji.fn = Sy.prototype;
Ji.invalid = fU;
function ic(i, s) {
  var f = i && parseFloat(i.replace(",", "."));
  return (isNaN(f) ? 0 : f) * s;
}
function ZE(i, s) {
  var f = {};
  return f.months = s.month() - i.month() + (s.year() - i.year()) * 12, i.clone().add(f.months, "M").isAfter(s) && --f.months, f.milliseconds = +s - +i.clone().add(f.months, "M"), f;
}
function CU(i, s) {
  var f;
  return i.isValid() && s.isValid() ? (s = Kx(s, i), i.isBefore(s) ? f = ZE(i, s) : (f = ZE(s, i), f.milliseconds = -f.milliseconds, f.months = -f.months), f) : { milliseconds: 0, months: 0 };
}
function aC(i, s) {
  return function(f, h) {
    var m, x;
    return h !== null && !isNaN(+h) && (L_(
      s,
      "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), x = f, f = h, h = x), m = Ji(f, h), iC(this, m, i), this;
  };
}
function iC(i, s, f, h) {
  var m = s._milliseconds, x = Ex(s._days), b = Ex(s._months);
  i.isValid() && (h = h ?? !0, b && V_(i, ry(i, "Month") + b * f), x && z_(i, "Date", ry(i, "Date") + x * f), m && i._d.setTime(i._d.valueOf() + m * f), h && oe.updateOffset(i, x || b));
}
var TU = aC(1, "add"), RU = aC(-1, "subtract");
function lC(i) {
  return typeof i == "string" || i instanceof String;
}
function DU(i) {
  return Zi(i) || $h(i) || lC(i) || Yo(i) || MU(i) || OU(i) || i === null || i === void 0;
}
function OU(i) {
  var s = oc(i) && !zx(i), f = !1, h = [
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
  ], m, x, b = h.length;
  for (m = 0; m < b; m += 1)
    x = h[m], f = f || Ct(i, x);
  return s && f;
}
function MU(i) {
  var s = Ki(i), f = !1;
  return s && (f = i.filter(function(h) {
    return !Yo(h) && lC(i);
  }).length === 0), s && f;
}
function LU(i) {
  var s = oc(i) && !zx(i), f = !1, h = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], m, x;
  for (m = 0; m < h.length; m += 1)
    x = h[m], f = f || Ct(i, x);
  return s && f;
}
function NU(i, s) {
  var f = i.diff(s, "days", !0);
  return f < -6 ? "sameElse" : f < -1 ? "lastWeek" : f < 0 ? "lastDay" : f < 1 ? "sameDay" : f < 2 ? "nextDay" : f < 7 ? "nextWeek" : "sameElse";
}
function UU(i, s) {
  arguments.length === 1 && (arguments[0] ? DU(arguments[0]) ? (i = arguments[0], s = void 0) : LU(arguments[0]) && (s = arguments[0], i = void 0) : (i = void 0, s = void 0));
  var f = i || rn(), h = Kx(f, this).startOf("day"), m = oe.calendarFormat(this, h) || "sameElse", x = s && (Pl(s[m]) ? s[m].call(this, f) : s[m]);
  return this.format(
    x || this.localeData().calendar(m, this, rn(f))
  );
}
function zU() {
  return new Ih(this);
}
function AU(i, s) {
  var f = Zi(i) ? i : rn(i);
  return this.isValid() && f.isValid() ? (s = Si(s) || "millisecond", s === "millisecond" ? this.valueOf() > f.valueOf() : f.valueOf() < this.clone().startOf(s).valueOf()) : !1;
}
function FU(i, s) {
  var f = Zi(i) ? i : rn(i);
  return this.isValid() && f.isValid() ? (s = Si(s) || "millisecond", s === "millisecond" ? this.valueOf() < f.valueOf() : this.clone().endOf(s).valueOf() < f.valueOf()) : !1;
}
function HU(i, s, f, h) {
  var m = Zi(i) ? i : rn(i), x = Zi(s) ? s : rn(s);
  return this.isValid() && m.isValid() && x.isValid() ? (h = h || "()", (h[0] === "(" ? this.isAfter(m, f) : !this.isBefore(m, f)) && (h[1] === ")" ? this.isBefore(x, f) : !this.isAfter(x, f))) : !1;
}
function jU(i, s) {
  var f = Zi(i) ? i : rn(i), h;
  return this.isValid() && f.isValid() ? (s = Si(s) || "millisecond", s === "millisecond" ? this.valueOf() === f.valueOf() : (h = f.valueOf(), this.clone().startOf(s).valueOf() <= h && h <= this.clone().endOf(s).valueOf())) : !1;
}
function YU(i, s) {
  return this.isSame(i, s) || this.isAfter(i, s);
}
function PU(i, s) {
  return this.isSame(i, s) || this.isBefore(i, s);
}
function VU(i, s, f) {
  var h, m, x;
  if (!this.isValid())
    return NaN;
  if (h = Kx(i, this), !h.isValid())
    return NaN;
  switch (m = (h.utcOffset() - this.utcOffset()) * 6e4, s = Si(s), s) {
    case "year":
      x = ty(this, h) / 12;
      break;
    case "month":
      x = ty(this, h);
      break;
    case "quarter":
      x = ty(this, h) / 3;
      break;
    case "second":
      x = (this - h) / 1e3;
      break;
    case "minute":
      x = (this - h) / 6e4;
      break;
    case "hour":
      x = (this - h) / 36e5;
      break;
    case "day":
      x = (this - h - m) / 864e5;
      break;
    case "week":
      x = (this - h - m) / 6048e5;
      break;
    default:
      x = this - h;
  }
  return f ? x : yi(x);
}
function ty(i, s) {
  if (i.date() < s.date())
    return -ty(s, i);
  var f = (s.year() - i.year()) * 12 + (s.month() - i.month()), h = i.clone().add(f, "months"), m, x;
  return s - h < 0 ? (m = i.clone().add(f - 1, "months"), x = (s - h) / (h - m)) : (m = i.clone().add(f + 1, "months"), x = (s - h) / (m - h)), -(f + x) || 0;
}
oe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
oe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function $U() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function IU(i) {
  if (!this.isValid())
    return null;
  var s = i !== !0, f = s ? this.clone().utc() : this;
  return f.year() < 0 || f.year() > 9999 ? Jg(
    f,
    s ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Pl(Date.prototype.toISOString) ? s ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Jg(f, "Z")) : Jg(
    f,
    s ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function BU() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", s = "", f, h, m, x;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", s = "Z"), f = "[" + i + '("]', h = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", m = "-MM-DD[T]HH:mm:ss.SSS", x = s + '[")]', this.format(f + h + m + x);
}
function WU(i) {
  i || (i = this.isUtc() ? oe.defaultFormatUtc : oe.defaultFormat);
  var s = Jg(this, i);
  return this.localeData().postformat(s);
}
function GU(i, s) {
  return this.isValid() && (Zi(i) && i.isValid() || rn(i).isValid()) ? Ji({ to: this, from: i }).locale(this.locale()).humanize(!s) : this.localeData().invalidDate();
}
function QU(i) {
  return this.from(rn(), i);
}
function qU(i, s) {
  return this.isValid() && (Zi(i) && i.isValid() || rn(i).isValid()) ? Ji({ from: this, to: i }).locale(this.locale()).humanize(!s) : this.localeData().invalidDate();
}
function XU(i) {
  return this.to(rn(), i);
}
function oC(i) {
  var s;
  return i === void 0 ? this._locale._abbr : (s = Vo(i), s != null && (this._locale = s), this);
}
var uC = bi(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function sC() {
  return this._locale;
}
var ly = 1e3, sd = 60 * ly, oy = 60 * sd, cC = (365 * 400 + 97) * 24 * oy;
function cd(i, s) {
  return (i % s + s) % s;
}
function fC(i, s, f) {
  return i < 100 && i >= 0 ? new Date(i + 400, s, f) - cC : new Date(i, s, f).valueOf();
}
function dC(i, s, f) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, s, f) - cC : Date.UTC(i, s, f);
}
function KU(i) {
  var s, f;
  if (i = Si(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (f = this._isUTC ? dC : fC, i) {
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
        oy
      );
      break;
    case "minute":
      s = this._d.valueOf(), s -= cd(s, sd);
      break;
    case "second":
      s = this._d.valueOf(), s -= cd(s, ly);
      break;
  }
  return this._d.setTime(s), oe.updateOffset(this, !0), this;
}
function ZU(i) {
  var s, f;
  if (i = Si(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (f = this._isUTC ? dC : fC, i) {
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
      s = this._d.valueOf(), s += oy - cd(
        s + (this._isUTC ? 0 : this.utcOffset() * sd),
        oy
      ) - 1;
      break;
    case "minute":
      s = this._d.valueOf(), s += sd - cd(s, sd) - 1;
      break;
    case "second":
      s = this._d.valueOf(), s += ly - cd(s, ly) - 1;
      break;
  }
  return this._d.setTime(s), oe.updateOffset(this, !0), this;
}
function JU() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ez() {
  return Math.floor(this.valueOf() / 1e3);
}
function tz() {
  return new Date(this.valueOf());
}
function nz() {
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
function rz() {
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
function az() {
  return this.isValid() ? this.toISOString() : null;
}
function iz() {
  return Ax(this);
}
function lz() {
  return Wu({}, at(this));
}
function oz() {
  return at(this).overflow;
}
function uz() {
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
Ee("N", Zx);
Ee("NN", Zx);
Ee("NNN", Zx);
Ee("NNNN", bz);
Ee("NNNNN", Sz);
Pt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, s, f, h) {
    var m = f._locale.erasParse(i, h, f._strict);
    m ? at(f).era = m : at(f).invalidEra = i;
  }
);
Ee("y", dd);
Ee("yy", dd);
Ee("yyy", dd);
Ee("yyyy", dd);
Ee("yo", xz);
Pt(["y", "yy", "yyy", "yyyy"], $r);
Pt(["yo"], function(i, s, f, h) {
  var m;
  f._locale._eraYearOrdinalRegex && (m = i.match(f._locale._eraYearOrdinalRegex)), f._locale.eraYearOrdinalParse ? s[$r] = f._locale.eraYearOrdinalParse(i, m) : s[$r] = parseInt(i, 10);
});
function sz(i, s) {
  var f, h, m, x = this._eras || Vo("en")._eras;
  for (f = 0, h = x.length; f < h; ++f) {
    switch (typeof x[f].since) {
      case "string":
        m = oe(x[f].since).startOf("day"), x[f].since = m.valueOf();
        break;
    }
    switch (typeof x[f].until) {
      case "undefined":
        x[f].until = 1 / 0;
        break;
      case "string":
        m = oe(x[f].until).startOf("day").valueOf(), x[f].until = m.valueOf();
        break;
    }
  }
  return x;
}
function cz(i, s, f) {
  var h, m, x = this.eras(), b, D, R;
  for (i = i.toUpperCase(), h = 0, m = x.length; h < m; ++h)
    if (b = x[h].name.toUpperCase(), D = x[h].abbr.toUpperCase(), R = x[h].narrow.toUpperCase(), f)
      switch (s) {
        case "N":
        case "NN":
        case "NNN":
          if (D === i)
            return x[h];
          break;
        case "NNNN":
          if (b === i)
            return x[h];
          break;
        case "NNNNN":
          if (R === i)
            return x[h];
          break;
      }
    else if ([b, D, R].indexOf(i) >= 0)
      return x[h];
}
function fz(i, s) {
  var f = i.since <= i.until ? 1 : -1;
  return s === void 0 ? oe(i.since).year() : oe(i.since).year() + (s - i.offset) * f;
}
function dz() {
  var i, s, f, h = this.localeData().eras();
  for (i = 0, s = h.length; i < s; ++i)
    if (f = this.clone().startOf("day").valueOf(), h[i].since <= f && f <= h[i].until || h[i].until <= f && f <= h[i].since)
      return h[i].name;
  return "";
}
function pz() {
  var i, s, f, h = this.localeData().eras();
  for (i = 0, s = h.length; i < s; ++i)
    if (f = this.clone().startOf("day").valueOf(), h[i].since <= f && f <= h[i].until || h[i].until <= f && f <= h[i].since)
      return h[i].narrow;
  return "";
}
function hz() {
  var i, s, f, h = this.localeData().eras();
  for (i = 0, s = h.length; i < s; ++i)
    if (f = this.clone().startOf("day").valueOf(), h[i].since <= f && f <= h[i].until || h[i].until <= f && f <= h[i].since)
      return h[i].abbr;
  return "";
}
function vz() {
  var i, s, f, h, m = this.localeData().eras();
  for (i = 0, s = m.length; i < s; ++i)
    if (f = m[i].since <= m[i].until ? 1 : -1, h = this.clone().startOf("day").valueOf(), m[i].since <= h && h <= m[i].until || m[i].until <= h && h <= m[i].since)
      return (this.year() - oe(m[i].since).year()) * f + m[i].offset;
  return this.year();
}
function mz(i) {
  return Ct(this, "_erasNameRegex") || Jx.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function gz(i) {
  return Ct(this, "_erasAbbrRegex") || Jx.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function yz(i) {
  return Ct(this, "_erasNarrowRegex") || Jx.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function Zx(i, s) {
  return s.erasAbbrRegex(i);
}
function bz(i, s) {
  return s.erasNameRegex(i);
}
function Sz(i, s) {
  return s.erasNarrowRegex(i);
}
function xz(i, s) {
  return s._eraYearOrdinalRegex || dd;
}
function Jx() {
  var i = [], s = [], f = [], h = [], m, x, b = this.eras();
  for (m = 0, x = b.length; m < x; ++m)
    s.push(Ka(b[m].name)), i.push(Ka(b[m].abbr)), f.push(Ka(b[m].narrow)), h.push(Ka(b[m].name)), h.push(Ka(b[m].abbr)), h.push(Ka(b[m].narrow));
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
function xy(i, s) {
  je(0, [i, i.length], 0, s);
}
xy("gggg", "weekYear");
xy("ggggg", "weekYear");
xy("GGGG", "isoWeekYear");
xy("GGGGG", "isoWeekYear");
Ir("weekYear", "gg");
Ir("isoWeekYear", "GG");
Br("weekYear", 1);
Br("isoWeekYear", 1);
Ee("G", my);
Ee("g", my);
Ee("GG", an, Za);
Ee("gg", an, Za);
Ee("GGGG", Vx, Px);
Ee("gggg", Vx, Px);
Ee("GGGGG", vy, py);
Ee("ggggg", vy, py);
Wh(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, s, f, h) {
    s[h.substr(0, 2)] = ct(i);
  }
);
Wh(["gg", "GG"], function(i, s, f, h) {
  s[h] = oe.parseTwoDigitYear(i);
});
function wz(i) {
  return pC.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function kz(i) {
  return pC.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ez() {
  return jo(this.year(), 1, 4);
}
function _z() {
  return jo(this.isoWeekYear(), 1, 4);
}
function Cz() {
  var i = this.localeData()._week;
  return jo(this.year(), i.dow, i.doy);
}
function Tz() {
  var i = this.localeData()._week;
  return jo(this.weekYear(), i.dow, i.doy);
}
function pC(i, s, f, h, m) {
  var x;
  return i == null ? Ph(this, h, m).year : (x = jo(i, h, m), s > x && (s = x), Rz.call(this, i, s, f, h, m));
}
function Rz(i, s, f, h, m) {
  var x = W_(i, s, f, h, m), b = Yh(x.year, 0, x.dayOfYear);
  return this.year(b.getUTCFullYear()), this.month(b.getUTCMonth()), this.date(b.getUTCDate()), this;
}
je("Q", 0, "Qo", "quarter");
Ir("quarter", "Q");
Br("quarter", 7);
Ee("Q", A_);
Pt("Q", function(i, s) {
  s[Fo] = (ct(i) - 1) * 3;
});
function Dz(i) {
  return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3);
}
je("D", ["DD", 2], "Do", "date");
Ir("date", "D");
Br("date", 9);
Ee("D", an);
Ee("DD", an, Za);
Ee("Do", function(i, s) {
  return i ? s._dayOfMonthOrdinalParse || s._ordinalParse : s._dayOfMonthOrdinalParseLenient;
});
Pt(["D", "DD"], Hl);
Pt("Do", function(i, s) {
  s[Hl] = ct(i.match(an)[0]);
});
var hC = fd("Date", !0);
je("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Ir("dayOfYear", "DDD");
Br("dayOfYear", 4);
Ee("DDD", hy);
Ee("DDDD", F_);
Pt(["DDD", "DDDD"], function(i, s, f) {
  f._dayOfYear = ct(i);
});
function Oz(i) {
  var s = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return i == null ? s : this.add(i - s, "d");
}
je("m", ["mm", 2], 0, "minute");
Ir("minute", "m");
Br("minute", 14);
Ee("m", an);
Ee("mm", an, Za);
Pt(["m", "mm"], Xi);
var Mz = fd("Minutes", !1);
je("s", ["ss", 2], 0, "second");
Ir("second", "s");
Br("second", 15);
Ee("s", an);
Ee("ss", an, Za);
Pt(["s", "ss"], Ho);
var Lz = fd("Seconds", !1);
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
Ir("millisecond", "ms");
Br("millisecond", 16);
Ee("S", hy, A_);
Ee("SS", hy, Za);
Ee("SSS", hy, F_);
var Gu, vC;
for (Gu = "SSSS"; Gu.length <= 9; Gu += "S")
  Ee(Gu, dd);
function Nz(i, s) {
  s[lc] = ct(("0." + i) * 1e3);
}
for (Gu = "S"; Gu.length <= 9; Gu += "S")
  Pt(Gu, Nz);
vC = fd("Milliseconds", !1);
je("z", 0, 0, "zoneAbbr");
je("zz", 0, 0, "zoneName");
function Uz() {
  return this._isUTC ? "UTC" : "";
}
function zz() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var te = Ih.prototype;
te.add = TU;
te.calendar = UU;
te.clone = zU;
te.diff = VU;
te.endOf = ZU;
te.format = WU;
te.from = GU;
te.fromNow = QU;
te.to = qU;
te.toNow = XU;
te.get = FL;
te.invalidAt = oz;
te.isAfter = AU;
te.isBefore = FU;
te.isBetween = HU;
te.isSame = jU;
te.isSameOrAfter = YU;
te.isSameOrBefore = PU;
te.isValid = iz;
te.lang = uC;
te.locale = oC;
te.localeData = sC;
te.max = iU;
te.min = aU;
te.parsingFlags = lz;
te.set = HL;
te.startOf = KU;
te.subtract = RU;
te.toArray = nz;
te.toObject = rz;
te.toDate = tz;
te.toISOString = IU;
te.inspect = BU;
typeof Symbol < "u" && Symbol.for != null && (te[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
te.toJSON = az;
te.toString = $U;
te.unix = ez;
te.valueOf = JU;
te.creationData = uz;
te.eraName = dz;
te.eraNarrow = pz;
te.eraAbbr = hz;
te.eraYear = vz;
te.year = B_;
te.isLeapYear = rN;
te.weekYear = wz;
te.isoWeekYear = kz;
te.quarter = te.quarters = Dz;
te.month = $_;
te.daysInMonth = eN;
te.week = te.weeks = sN;
te.isoWeek = te.isoWeeks = cN;
te.weeksInYear = Cz;
te.weeksInWeekYear = Tz;
te.isoWeeksInYear = Ez;
te.isoWeeksInISOWeekYear = _z;
te.date = hC;
te.day = te.days = kN;
te.weekday = EN;
te.isoWeekday = _N;
te.dayOfYear = Oz;
te.hour = te.hours = LN;
te.minute = te.minutes = Mz;
te.second = te.seconds = Lz;
te.millisecond = te.milliseconds = vC;
te.utcOffset = hU;
te.utc = mU;
te.local = gU;
te.parseZone = yU;
te.hasAlignedHourOffset = bU;
te.isDST = SU;
te.isLocal = wU;
te.isUtcOffset = kU;
te.isUtc = rC;
te.isUTC = rC;
te.zoneAbbr = Uz;
te.zoneName = zz;
te.dates = bi(
  "dates accessor is deprecated. Use date instead.",
  hC
);
te.months = bi(
  "months accessor is deprecated. Use month instead",
  $_
);
te.years = bi(
  "years accessor is deprecated. Use year instead",
  B_
);
te.zone = bi(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  vU
);
te.isDSTShifted = bi(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  xU
);
function Az(i) {
  return rn(i * 1e3);
}
function Fz() {
  return rn.apply(null, arguments).parseZone();
}
function mC(i) {
  return i;
}
var Tt = Hx.prototype;
Tt.calendar = kL;
Tt.longDateFormat = TL;
Tt.invalidDate = DL;
Tt.ordinal = LL;
Tt.preparse = mC;
Tt.postformat = mC;
Tt.relativeTime = UL;
Tt.pastFuture = zL;
Tt.set = xL;
Tt.eras = sz;
Tt.erasParse = cz;
Tt.erasConvertYear = fz;
Tt.erasAbbrRegex = gz;
Tt.erasNameRegex = mz;
Tt.erasNarrowRegex = yz;
Tt.months = XL;
Tt.monthsShort = KL;
Tt.monthsParse = JL;
Tt.monthsRegex = nN;
Tt.monthsShortRegex = tN;
Tt.week = iN;
Tt.firstDayOfYear = uN;
Tt.firstDayOfWeek = oN;
Tt.weekdays = yN;
Tt.weekdaysMin = SN;
Tt.weekdaysShort = bN;
Tt.weekdaysParse = wN;
Tt.weekdaysRegex = CN;
Tt.weekdaysShortRegex = TN;
Tt.weekdaysMinRegex = RN;
Tt.isPM = ON;
Tt.meridiem = NN;
function uy(i, s, f, h) {
  var m = Vo(), x = Yl().set(h, s);
  return m[f](x, i);
}
function gC(i, s, f) {
  if (Yo(i) && (s = i, i = void 0), i = i || "", s != null)
    return uy(i, s, f, "month");
  var h, m = [];
  for (h = 0; h < 12; h++)
    m[h] = uy(i, h, f, "month");
  return m;
}
function e1(i, s, f, h) {
  typeof i == "boolean" ? (Yo(s) && (f = s, s = void 0), s = s || "") : (s = i, f = s, i = !1, Yo(s) && (f = s, s = void 0), s = s || "");
  var m = Vo(), x = i ? m._week.dow : 0, b, D = [];
  if (f != null)
    return uy(s, (f + x) % 7, h, "day");
  for (b = 0; b < 7; b++)
    D[b] = uy(s, (b + x) % 7, h, "day");
  return D;
}
function Hz(i, s) {
  return gC(i, s, "months");
}
function jz(i, s) {
  return gC(i, s, "monthsShort");
}
function Yz(i, s, f) {
  return e1(i, s, f, "weekdays");
}
function Pz(i, s, f) {
  return e1(i, s, f, "weekdaysShort");
}
function Vz(i, s, f) {
  return e1(i, s, f, "weekdaysMin");
}
Qu("en", {
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
oe.lang = bi(
  "moment.lang is deprecated. Use moment.locale instead.",
  Qu
);
oe.langData = bi(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Vo
);
var zo = Math.abs;
function $z() {
  var i = this._data;
  return this._milliseconds = zo(this._milliseconds), this._days = zo(this._days), this._months = zo(this._months), i.milliseconds = zo(i.milliseconds), i.seconds = zo(i.seconds), i.minutes = zo(i.minutes), i.hours = zo(i.hours), i.months = zo(i.months), i.years = zo(i.years), this;
}
function yC(i, s, f, h) {
  var m = Ji(s, f);
  return i._milliseconds += h * m._milliseconds, i._days += h * m._days, i._months += h * m._months, i._bubble();
}
function Iz(i, s) {
  return yC(this, i, s, 1);
}
function Bz(i, s) {
  return yC(this, i, s, -1);
}
function JE(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function Wz() {
  var i = this._milliseconds, s = this._days, f = this._months, h = this._data, m, x, b, D, R;
  return i >= 0 && s >= 0 && f >= 0 || i <= 0 && s <= 0 && f <= 0 || (i += JE(Cx(f) + s) * 864e5, s = 0, f = 0), h.milliseconds = i % 1e3, m = yi(i / 1e3), h.seconds = m % 60, x = yi(m / 60), h.minutes = x % 60, b = yi(x / 60), h.hours = b % 24, s += yi(b / 24), R = yi(bC(s)), f += R, s -= JE(Cx(R)), D = yi(f / 12), f %= 12, h.days = s, h.months = f, h.years = D, this;
}
function bC(i) {
  return i * 4800 / 146097;
}
function Cx(i) {
  return i * 146097 / 4800;
}
function Gz(i) {
  if (!this.isValid())
    return NaN;
  var s, f, h = this._milliseconds;
  if (i = Si(i), i === "month" || i === "quarter" || i === "year")
    switch (s = this._days + h / 864e5, f = this._months + bC(s), i) {
      case "month":
        return f;
      case "quarter":
        return f / 3;
      case "year":
        return f / 12;
    }
  else
    switch (s = this._days + Math.round(Cx(this._months)), i) {
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
function Qz() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ct(this._months / 12) * 31536e6 : NaN;
}
function $o(i) {
  return function() {
    return this.as(i);
  };
}
var qz = $o("ms"), Xz = $o("s"), Kz = $o("m"), Zz = $o("h"), Jz = $o("d"), eA = $o("w"), tA = $o("M"), nA = $o("Q"), rA = $o("y");
function aA() {
  return Ji(this);
}
function iA(i) {
  return i = Si(i), this.isValid() ? this[i + "s"]() : NaN;
}
function sc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var lA = sc("milliseconds"), oA = sc("seconds"), uA = sc("minutes"), sA = sc("hours"), cA = sc("days"), fA = sc("months"), dA = sc("years");
function pA() {
  return yi(this.days() / 7);
}
var Ao = Math.round, od = {
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
function hA(i, s, f, h, m) {
  return m.relativeTime(s || 1, !!f, i, h);
}
function vA(i, s, f, h) {
  var m = Ji(i).abs(), x = Ao(m.as("s")), b = Ao(m.as("m")), D = Ao(m.as("h")), R = Ao(m.as("d")), M = Ao(m.as("M")), P = Ao(m.as("w")), U = Ao(m.as("y")), $ = x <= f.ss && ["s", x] || x < f.s && ["ss", x] || b <= 1 && ["m"] || b < f.m && ["mm", b] || D <= 1 && ["h"] || D < f.h && ["hh", D] || R <= 1 && ["d"] || R < f.d && ["dd", R];
  return f.w != null && ($ = $ || P <= 1 && ["w"] || P < f.w && ["ww", P]), $ = $ || M <= 1 && ["M"] || M < f.M && ["MM", M] || U <= 1 && ["y"] || ["yy", U], $[2] = s, $[3] = +i > 0, $[4] = h, hA.apply(null, $);
}
function mA(i) {
  return i === void 0 ? Ao : typeof i == "function" ? (Ao = i, !0) : !1;
}
function gA(i, s) {
  return od[i] === void 0 ? !1 : s === void 0 ? od[i] : (od[i] = s, i === "s" && (od.ss = s - 1), !0);
}
function yA(i, s) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var f = !1, h = od, m, x;
  return typeof i == "object" && (s = i, i = !1), typeof i == "boolean" && (f = i), typeof s == "object" && (h = Object.assign({}, od, s), s.s != null && s.ss == null && (h.ss = s.s - 1)), m = this.localeData(), x = vA(this, !f, h, m), f && (x = m.pastFuture(+this, x)), m.postformat(x);
}
var ix = Math.abs;
function id(i) {
  return (i > 0) - (i < 0) || +i;
}
function wy() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = ix(this._milliseconds) / 1e3, s = ix(this._days), f = ix(this._months), h, m, x, b, D = this.asSeconds(), R, M, P, U;
  return D ? (h = yi(i / 60), m = yi(h / 60), i %= 60, h %= 60, x = yi(f / 12), f %= 12, b = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", R = D < 0 ? "-" : "", M = id(this._months) !== id(D) ? "-" : "", P = id(this._days) !== id(D) ? "-" : "", U = id(this._milliseconds) !== id(D) ? "-" : "", R + "P" + (x ? M + x + "Y" : "") + (f ? M + f + "M" : "") + (s ? P + s + "D" : "") + (m || h || i ? "T" : "") + (m ? U + m + "H" : "") + (h ? U + h + "M" : "") + (i ? U + b + "S" : "")) : "P0D";
}
var xt = Sy.prototype;
xt.isValid = cU;
xt.abs = $z;
xt.add = Iz;
xt.subtract = Bz;
xt.as = Gz;
xt.asMilliseconds = qz;
xt.asSeconds = Xz;
xt.asMinutes = Kz;
xt.asHours = Zz;
xt.asDays = Jz;
xt.asWeeks = eA;
xt.asMonths = tA;
xt.asQuarters = nA;
xt.asYears = rA;
xt.valueOf = Qz;
xt._bubble = Wz;
xt.clone = aA;
xt.get = iA;
xt.milliseconds = lA;
xt.seconds = oA;
xt.minutes = uA;
xt.hours = sA;
xt.days = cA;
xt.weeks = pA;
xt.months = fA;
xt.years = dA;
xt.humanize = yA;
xt.toISOString = wy;
xt.toString = wy;
xt.toJSON = wy;
xt.locale = oC;
xt.localeData = sC;
xt.toIsoString = bi(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  wy
);
xt.lang = uC;
je("X", 0, 0, "unix");
je("x", 0, 0, "valueOf");
Ee("x", my);
Ee("X", YL);
Pt("X", function(i, s, f) {
  f._d = new Date(parseFloat(i) * 1e3);
});
Pt("x", function(i, s, f) {
  f._d = new Date(ct(i));
});
//! moment.js
oe.version = "2.29.4";
bL(rn);
oe.fn = te;
oe.min = lU;
oe.max = oU;
oe.now = uU;
oe.utc = Yl;
oe.unix = Az;
oe.months = Hz;
oe.isDate = $h;
oe.locale = Qu;
oe.invalid = fy;
oe.duration = Ji;
oe.isMoment = Zi;
oe.weekdays = Yz;
oe.parseZone = Fz;
oe.localeData = Vo;
oe.isDuration = ey;
oe.monthsShort = jz;
oe.weekdaysMin = Vz;
oe.defineLocale = Wx;
oe.updateLocale = FN;
oe.locales = HN;
oe.weekdaysShort = Pz;
oe.normalizeUnits = Si;
oe.relativeTimeRounding = mA;
oe.relativeTimeThreshold = gA;
oe.calendarFormat = NU;
oe.prototype = te;
oe.HTML5_FMT = {
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
const bA = ({
  tooltipRef: i,
  width: s,
  maxDate: f,
  minDate: h,
  labels: m,
  spacing: x,
  iteration: b,
  rectHeight: D,
  proportion: R,
  theme: M,
  items: P,
  translation: U
}) => {
  const $ = c2(null);
  return /* @__PURE__ */ Yt.jsxs(
    "g",
    {
      onMouseMove: (Q) => {
        if (Q.target === $.current && i.current) {
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
            x: x / 2 - m[b].length * 4,
            y: D / 2 + D * b + 4 + 20,
            children: m[b]
          }
        ),
        /* @__PURE__ */ Yt.jsx(
          "rect",
          {
            rx: 4,
            x,
            y: D * b + 20,
            ref: $,
            width: f.diff(h) * R,
            height: D,
            className: M == null ? void 0 : M.period
          }
        ),
        Object.values(P).map(
          (Q, ne) => Q.map((ae, se) => {
            if (Object.keys(P)[ne] === "period")
              return null;
            const Me = ae.start.diff(h) * R, ie = ae.finish.diff(ae.start), ee = ie * R, ge = Object.keys(P)[ne];
            let ve = ie / 3600 / 1e3 < 1 ? oe.utc(ie).format("mm[m]") : oe.utc(ie).format("HH[h]mm");
            ve = ve.substring(ve.length - 2, ve.length) === "00" ? ve.substring(0, ve.length - 2) : ve;
            const le = (ve.length + 0.5) * 4;
            return /* @__PURE__ */ Yt.jsxs(
              "g",
              {
                y: 20,
                onMouseMove: (he) => {
                  const tt = he.nativeEvent.offsetX / s * f.diff(h), lt = h.clone().add(tt, "milliseconds"), Vt = f.diff(h) / 3600 / 1e3 > 24 ? "YYYY-MM-DD HH:mm:ss" : "HH:mm:ss";
                  i.current && (i.current.innerHTML = `
                  <span>${U(ge)}</span>
                  <span>
                  ${lt.format(Vt)} |
                    ${oe.utc(ae.start).format("HH[h]mm")} -
                    ${oe.utc(ae.finish).format("HH[h]mm")}
                  </span>
                  <span>
                    Escalado: ${oe.utc(ae == null ? void 0 : ae.scaled).format("HH[h]mm")}
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
                      x: Me + x,
                      height: D,
                      y: D * b + 20,
                      fill: "currentColor"
                    }
                  ),
                  le < ee / 2 && /* @__PURE__ */ Yt.jsx(
                    "text",
                    {
                      x: Me + ee / 2 - le + x,
                      y: D * b + D / 2 + 26,
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
  translation: x,
  theme: b
}) => {
  if (s === 0 || f === 0 || i.length === 0)
    return null;
  const D = h != null && h.length && (h == null ? void 0 : h.length) > 0 ? 80 : 0;
  s = s - D, f = f - 20;
  const R = f / i.length;
  let M = oe(), P = oe();
  i.forEach((ae) => {
    Object.values(ae).forEach((se) => {
      se.forEach((Me) => {
        M = oe.min(M, Me.start), P = oe.max(P, Me.finish);
      });
    });
  });
  const U = P.diff(M), $ = s / U, Q = oe.duration(U, "milliseconds").hours(), ne = s / Q / 4;
  return /* @__PURE__ */ Yt.jsxs(Yt.Fragment, { children: [
    i.map((ae, se) => /* @__PURE__ */ Yt.jsx(s2, { children: /* @__PURE__ */ Yt.jsx(
      bA,
      {
        width: s + D,
        labels: h,
        items: ae,
        maxDate: P,
        minDate: M,
        spacing: D,
        iteration: se,
        proportion: $,
        rectHeight: R,
        translation: x,
        tooltipRef: m,
        theme: b
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
      const Me = oe.utc(M).hours() + se;
      return /* @__PURE__ */ Yt.jsxs(
        "text",
        {
          x: ne * 4 * se + D - String(Me).length * 8,
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
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
oe.defineLocale("pt-br", {
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
oe.locale("pt-br");
var La = {}, qg = { exports: {} }, lx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e_;
function SA() {
  return e_ || (e_ = 1, function(i) {
    function s(ue, Ae) {
      var Se = ue.length;
      ue.push(Ae);
      e:
        for (; 0 < Se; ) {
          var gt = Se - 1 >>> 1, wt = ue[gt];
          if (0 < m(wt, Ae))
            ue[gt] = Ae, ue[Se] = wt, Se = gt;
          else
            break e;
        }
    }
    function f(ue) {
      return ue.length === 0 ? null : ue[0];
    }
    function h(ue) {
      if (ue.length === 0)
        return null;
      var Ae = ue[0], Se = ue.pop();
      if (Se !== Ae) {
        ue[0] = Se;
        e:
          for (var gt = 0, wt = ue.length, Vn = wt >>> 1; gt < Vn; ) {
            var hr = 2 * (gt + 1) - 1, Ja = ue[hr], wn = hr + 1, sa = ue[wn];
            if (0 > m(Ja, Se))
              wn < wt && 0 > m(sa, Ja) ? (ue[gt] = sa, ue[wn] = Se, gt = wn) : (ue[gt] = Ja, ue[hr] = Se, gt = hr);
            else if (wn < wt && 0 > m(sa, Se))
              ue[gt] = sa, ue[wn] = Se, gt = wn;
            else
              break e;
          }
      }
      return Ae;
    }
    function m(ue, Ae) {
      var Se = ue.sortIndex - Ae.sortIndex;
      return Se !== 0 ? Se : ue.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      i.unstable_now = function() {
        return x.now();
      };
    } else {
      var b = Date, D = b.now();
      i.unstable_now = function() {
        return b.now() - D;
      };
    }
    var R = [], M = [], P = 1, U = null, $ = 3, Q = !1, ne = !1, ae = !1, se = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(ue) {
      for (var Ae = f(M); Ae !== null; ) {
        if (Ae.callback === null)
          h(M);
        else if (Ae.startTime <= ue)
          h(M), Ae.sortIndex = Ae.expirationTime, s(R, Ae);
        else
          break;
        Ae = f(M);
      }
    }
    function ge(ue) {
      if (ae = !1, ee(ue), !ne)
        if (f(R) !== null)
          ne = !0, Rt(ve);
        else {
          var Ae = f(M);
          Ae !== null && xn(ge, Ae.startTime - ue);
        }
    }
    function ve(ue, Ae) {
      ne = !1, ae && (ae = !1, Me(it), it = -1), Q = !0;
      var Se = $;
      try {
        for (ee(Ae), U = f(R); U !== null && (!(U.expirationTime > Ae) || ue && !ht()); ) {
          var gt = U.callback;
          if (typeof gt == "function") {
            U.callback = null, $ = U.priorityLevel;
            var wt = gt(U.expirationTime <= Ae);
            Ae = i.unstable_now(), typeof wt == "function" ? U.callback = wt : U === f(R) && h(R), ee(Ae);
          } else
            h(R);
          U = f(R);
        }
        if (U !== null)
          var Vn = !0;
        else {
          var hr = f(M);
          hr !== null && xn(ge, hr.startTime - Ae), Vn = !1;
        }
        return Vn;
      } finally {
        U = null, $ = Se, Q = !1;
      }
    }
    var le = !1, he = null, it = -1, tt = 5, lt = -1;
    function ht() {
      return !(i.unstable_now() - lt < tt);
    }
    function Vt() {
      if (he !== null) {
        var ue = i.unstable_now();
        lt = ue;
        var Ae = !0;
        try {
          Ae = he(!0, ue);
        } finally {
          Ae ? $e() : (le = !1, he = null);
        }
      } else
        le = !1;
    }
    var $e;
    if (typeof ie == "function")
      $e = function() {
        ie(Vt);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), hn = et.port2;
      et.port1.onmessage = Vt, $e = function() {
        hn.postMessage(null);
      };
    } else
      $e = function() {
        se(Vt, 0);
      };
    function Rt(ue) {
      he = ue, le || (le = !0, $e());
    }
    function xn(ue, Ae) {
      it = se(function() {
        ue(i.unstable_now());
      }, Ae);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(ue) {
      ue.callback = null;
    }, i.unstable_continueExecution = function() {
      ne || Q || (ne = !0, Rt(ve));
    }, i.unstable_forceFrameRate = function(ue) {
      0 > ue || 125 < ue ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < ue ? Math.floor(1e3 / ue) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, i.unstable_getFirstCallbackNode = function() {
      return f(R);
    }, i.unstable_next = function(ue) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = $;
      }
      var Se = $;
      $ = Ae;
      try {
        return ue();
      } finally {
        $ = Se;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(ue, Ae) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ue = 3;
      }
      var Se = $;
      $ = ue;
      try {
        return Ae();
      } finally {
        $ = Se;
      }
    }, i.unstable_scheduleCallback = function(ue, Ae, Se) {
      var gt = i.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? gt + Se : gt) : Se = gt, ue) {
        case 1:
          var wt = -1;
          break;
        case 2:
          wt = 250;
          break;
        case 5:
          wt = 1073741823;
          break;
        case 4:
          wt = 1e4;
          break;
        default:
          wt = 5e3;
      }
      return wt = Se + wt, ue = { id: P++, callback: Ae, priorityLevel: ue, startTime: Se, expirationTime: wt, sortIndex: -1 }, Se > gt ? (ue.sortIndex = Se, s(M, ue), f(R) === null && ue === f(M) && (ae ? (Me(it), it = -1) : ae = !0, xn(ge, Se - gt))) : (ue.sortIndex = wt, s(R, ue), ne || Q || (ne = !0, Rt(ve))), ue;
    }, i.unstable_shouldYield = ht, i.unstable_wrapCallback = function(ue) {
      var Ae = $;
      return function() {
        var Se = $;
        $ = Ae;
        try {
          return ue.apply(this, arguments);
        } finally {
          $ = Se;
        }
      };
    };
  }(lx)), lx;
}
var ox = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t_;
function xA() {
  return t_ || (t_ = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, f = !1, h = 5;
      function m(de, Ne) {
        var nt = de.length;
        de.push(Ne), D(de, Ne, nt);
      }
      function x(de) {
        return de.length === 0 ? null : de[0];
      }
      function b(de) {
        if (de.length === 0)
          return null;
        var Ne = de[0], nt = de.pop();
        return nt !== Ne && (de[0] = nt, R(de, nt, 0)), Ne;
      }
      function D(de, Ne, nt) {
        for (var Dt = nt; Dt > 0; ) {
          var Zt = Dt - 1 >>> 1, Ln = de[Zt];
          if (M(Ln, Ne) > 0)
            de[Zt] = Ne, de[Dt] = Ln, Dt = Zt;
          else
            return;
        }
      }
      function R(de, Ne, nt) {
        for (var Dt = nt, Zt = de.length, Ln = Zt >>> 1; Dt < Ln; ) {
          var cn = (Dt + 1) * 2 - 1, Rr = de[cn], Ht = cn + 1, qr = de[Ht];
          if (M(Rr, Ne) < 0)
            Ht < Zt && M(qr, Rr) < 0 ? (de[Dt] = qr, de[Ht] = Ne, Dt = Ht) : (de[Dt] = Rr, de[cn] = Ne, Dt = cn);
          else if (Ht < Zt && M(qr, Ne) < 0)
            de[Dt] = qr, de[Ht] = Ne, Dt = Ht;
          else
            return;
        }
      }
      function M(de, Ne) {
        var nt = de.sortIndex - Ne.sortIndex;
        return nt !== 0 ? nt : de.id - Ne.id;
      }
      var P = 1, U = 2, $ = 3, Q = 4, ne = 5;
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
      var ge = 1073741823, ve = -1, le = 250, he = 5e3, it = 1e4, tt = ge, lt = [], ht = [], Vt = 1, $e = null, et = $, hn = !1, Rt = !1, xn = !1, ue = typeof setTimeout == "function" ? setTimeout : null, Ae = typeof clearTimeout == "function" ? clearTimeout : null, Se = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function gt(de) {
        for (var Ne = x(ht); Ne !== null; ) {
          if (Ne.callback === null)
            b(ht);
          else if (Ne.startTime <= de)
            b(ht), Ne.sortIndex = Ne.expirationTime, m(lt, Ne);
          else
            return;
          Ne = x(ht);
        }
      }
      function wt(de) {
        if (xn = !1, gt(de), !Rt)
          if (x(lt) !== null)
            Rt = !0, Fa(Vn);
          else {
            var Ne = x(ht);
            Ne !== null && vn(wt, Ne.startTime - de);
          }
      }
      function Vn(de, Ne) {
        Rt = !1, xn && (xn = !1, Qr()), hn = !0;
        var nt = et;
        try {
          var Dt;
          if (!f)
            return hr(de, Ne);
        } finally {
          $e = null, et = nt, hn = !1;
        }
      }
      function hr(de, Ne) {
        var nt = Ne;
        for (gt(nt), $e = x(lt); $e !== null && !s && !($e.expirationTime > nt && (!de || za())); ) {
          var Dt = $e.callback;
          if (typeof Dt == "function") {
            $e.callback = null, et = $e.priorityLevel;
            var Zt = $e.expirationTime <= nt, Ln = Dt(Zt);
            nt = i.unstable_now(), typeof Ln == "function" ? $e.callback = Ln : $e === x(lt) && b(lt), gt(nt);
          } else
            b(lt);
          $e = x(lt);
        }
        if ($e !== null)
          return !0;
        var cn = x(ht);
        return cn !== null && vn(wt, cn.startTime - nt), !1;
      }
      function Ja(de, Ne) {
        switch (de) {
          case P:
          case U:
          case $:
          case Q:
          case ne:
            break;
          default:
            de = $;
        }
        var nt = et;
        et = de;
        try {
          return Ne();
        } finally {
          et = nt;
        }
      }
      function wn(de) {
        var Ne;
        switch (et) {
          case P:
          case U:
          case $:
            Ne = $;
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
        var Dt = i.unstable_now(), Zt;
        if (typeof nt == "object" && nt !== null) {
          var Ln = nt.delay;
          typeof Ln == "number" && Ln > 0 ? Zt = Dt + Ln : Zt = Dt;
        } else
          Zt = Dt;
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
          case $:
          default:
            cn = he;
            break;
        }
        var Rr = Zt + cn, Ht = {
          id: Vt++,
          callback: Ne,
          priorityLevel: de,
          startTime: Zt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return Zt > Dt ? (Ht.sortIndex = Zt, m(ht, Ht), x(lt) === null && Ht === x(ht) && (xn ? Qr() : xn = !0, vn(wt, Zt - Dt))) : (Ht.sortIndex = Rr, m(lt, Ht), !Rt && !hn && (Rt = !0, Fa(Vn))), Ht;
      }
      function Cr() {
      }
      function ei() {
        !Rt && !hn && (Rt = !0, Fa(Vn));
      }
      function Tr() {
        return x(lt);
      }
      function ca(de) {
        de.callback = null;
      }
      function Mn() {
        return et;
      }
      var rr = !1, $n = null, ar = -1, ir = h, fa = -1;
      function za() {
        var de = i.unstable_now() - fa;
        return !(de < ir);
      }
      function xi() {
      }
      function ti(de) {
        if (de < 0 || de > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        de > 0 ? ir = Math.floor(1e3 / de) : ir = h;
      }
      var Aa = function() {
        if ($n !== null) {
          var de = i.unstable_now();
          fa = de;
          var Ne = !0, nt = !0;
          try {
            nt = $n(Ne, de);
          } finally {
            nt ? Wr() : (rr = !1, $n = null);
          }
        } else
          rr = !1;
      }, Wr;
      if (typeof Se == "function")
        Wr = function() {
          Se(Aa);
        };
      else if (typeof MessageChannel < "u") {
        var ni = new MessageChannel(), Gr = ni.port2;
        ni.port1.onmessage = Aa, Wr = function() {
          Gr.postMessage(null);
        };
      } else
        Wr = function() {
          ue(Aa, 0);
        };
      function Fa(de) {
        $n = de, rr || (rr = !0, Wr());
      }
      function vn(de, Ne) {
        ar = ue(function() {
          de(i.unstable_now());
        }, Ne);
      }
      function Qr() {
        Ae(ar), ar = -1;
      }
      var el = xi, Ha = null;
      i.unstable_IdlePriority = ne, i.unstable_ImmediatePriority = P, i.unstable_LowPriority = Q, i.unstable_NormalPriority = $, i.unstable_Profiling = Ha, i.unstable_UserBlockingPriority = U, i.unstable_cancelCallback = ca, i.unstable_continueExecution = ei, i.unstable_forceFrameRate = ti, i.unstable_getCurrentPriorityLevel = Mn, i.unstable_getFirstCallbackNode = Tr, i.unstable_next = wn, i.unstable_pauseExecution = Cr, i.unstable_requestPaint = el, i.unstable_runWithPriority = Ja, i.unstable_scheduleCallback = nr, i.unstable_shouldYield = za, i.unstable_wrapCallback = sa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ox)), ox;
}
var n_;
function SC() {
  return n_ || (n_ = 1, process.env.NODE_ENV === "production" ? qg.exports = SA() : qg.exports = xA()), qg.exports;
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
var r_;
function wA() {
  if (r_)
    return La;
  r_ = 1;
  var i = Po, s = SC();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), m = {};
  function x(n, r) {
    b(n, r), b(n + "Capture", r);
  }
  function b(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++)
      h.add(r[n]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, U = {};
  function $(n) {
    return R.call(U, n) ? !0 : R.call(P, n) ? !1 : M.test(n) ? U[n] = !0 : (P[n] = !0, !1);
  }
  function Q(n, r, o, c) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ne(n, r, o, c) {
    if (r === null || typeof r > "u" || Q(n, r, o, c))
      return !0;
    if (c)
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
  function ae(n, r, o, c, p, g, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = w;
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
  function ee(n, r, o, c) {
    var p = se.hasOwnProperty(r) ? se[r] : null;
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ne(r, o, p, c) && (o = null), c || p === null ? $(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, c = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var ge = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = Symbol.for("react.element"), le = Symbol.for("react.portal"), he = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), ht = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), xn = Symbol.for("react.offscreen"), ue = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = ue && n[ue] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se = Object.assign, gt;
  function wt(n) {
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
  function hr(n, r) {
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
`), g = c.stack.split(`
`), w = p.length - 1, _ = g.length - 1; 1 <= w && 0 <= _ && p[w] !== g[_]; )
          _--;
        for (; 1 <= w && 0 <= _; w--, _--)
          if (p[w] !== g[_]) {
            if (w !== 1 || _ !== 1)
              do
                if (w--, _--, 0 > _ || p[w] !== g[_]) {
                  var T = `
` + p[w].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= w && 0 <= _);
            break;
          }
      }
    } finally {
      Vn = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? wt(n) : "";
  }
  function Ja(n) {
    switch (n.tag) {
      case 5:
        return wt(n.type);
      case 16:
        return wt("Lazy");
      case 13:
        return wt("Suspense");
      case 19:
        return wt("SuspenseList");
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
  function wn(n) {
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
      case $e:
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
          return r = n.displayName || null, r !== null ? r : wn(n.type) || "Memo";
        case Rt:
          r = n._payload, n = n._init;
          try {
            return wn(n(r));
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
        return wn(r);
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
  function Cr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ei(n) {
    var r = Cr(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, g = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(w) {
        c = "" + w, g.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(w) {
        c = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Tr(n) {
    n._valueTracker || (n._valueTracker = ei(n));
  }
  function ca(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), c = "";
    return n && (c = Cr(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (r.setValue(n), !0) : !1;
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
    var o = r.checked;
    return Se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    o = nr(r.value != null ? r.value : o), n._wrapperState = { initialChecked: c, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ar(n, r) {
    r = r.checked, r != null && ee(n, "checked", r, !1);
  }
  function ir(n, r) {
    ar(n, r);
    var o = nr(r.value), c = r.type;
    if (o != null)
      c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? za(n, r.type, o) : r.hasOwnProperty("defaultValue") && za(n, r.type, nr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fa(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function za(n, r, o) {
    (r !== "number" || Mn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var xi = Array.isArray;
  function ti(n, r, o, c) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && c && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + nr(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
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
    return Se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Wr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(f(92));
        if (xi(o)) {
          if (1 < o.length)
            throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: nr(o) };
  }
  function ni(n, r) {
    var o = nr(r.value), c = nr(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c);
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
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, c, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, c, p);
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
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
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
  function nt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || de.hasOwnProperty(n) && de[n] ? ("" + r).trim() : r + "px";
  }
  function Dt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var c = o.indexOf("--") === 0, p = nt(o, r[o], c);
        o === "float" && (o = "cssFloat"), c ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var Zt = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Rr = null;
  function Ht(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qr = null, Ut = null, jt = null;
  function Io(n) {
    if (n = ys(n)) {
      if (typeof qr != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = Ue(r), qr(n.stateNode, n.type, r));
    }
  }
  function Vl(n) {
    Ut ? jt ? jt.push(n) : jt = [n] : Ut = n;
  }
  function Bo() {
    if (Ut) {
      var n = Ut, r = jt;
      if (jt = Ut = null, Io(n), r)
        for (n = 0; n < r.length; n++)
          Io(r[n]);
    }
  }
  function Xu(n, r) {
    return n(r);
  }
  function cc() {
  }
  var $l = !1;
  function Wo(n, r, o) {
    if ($l)
      return n(r, o);
    $l = !0;
    try {
      return Xu(n, r, o);
    } finally {
      $l = !1, (Ut !== null || jt !== null) && (cc(), Bo());
    }
  }
  function Il(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var c = Ue(o);
    if (c === null)
      return null;
    o = c[r];
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
    if (o && typeof o != "function")
      throw Error(f(231, r, typeof o));
    return o;
  }
  var Go = !1;
  if (D)
    try {
      var ri = {};
      Object.defineProperty(ri, "passive", { get: function() {
        Go = !0;
      } }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
    } catch {
      Go = !1;
    }
  function tl(n, r, o, c, p, g, w, _, T) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, V);
    } catch (X) {
      this.onError(X);
    }
  }
  var Xr = !1, ja = null, nl = !1, C = null, K = { onError: function(n) {
    Xr = !0, ja = n;
  } };
  function pe(n, r, o, c, p, g, w, _, T) {
    Xr = !1, ja = null, tl.apply(K, arguments);
  }
  function Fe(n, r, o, c, p, g, w, _, T) {
    if (pe.apply(this, arguments), Xr) {
      if (Xr) {
        var V = ja;
        Xr = !1, ja = null;
      } else
        throw Error(f(198));
      nl || (nl = !0, C = V);
    }
  }
  function Ze(n) {
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
    for (var o = n, c = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var g = p.alternate;
      if (g === null) {
        if (c = p.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (p.child === g.child) {
        for (g = p.child; g; ) {
          if (g === o)
            return Je(p), n;
          if (g === c)
            return Je(p), r;
          g = g.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== c.return)
        o = p, c = g;
      else {
        for (var w = !1, _ = p.child; _; ) {
          if (_ === o) {
            w = !0, o = p, c = g;
            break;
          }
          if (_ === c) {
            w = !0, c = p, o = g;
            break;
          }
          _ = _.sibling;
        }
        if (!w) {
          for (_ = g.child; _; ) {
            if (_ === o) {
              w = !0, o = g, c = p;
              break;
            }
            if (_ === c) {
              w = !0, c = g, o = p;
              break;
            }
            _ = _.sibling;
          }
          if (!w)
            throw Error(f(189));
        }
      }
      if (o.alternate !== c)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : r;
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
  var qt = s.unstable_scheduleCallback, vr = s.unstable_cancelCallback, rl = s.unstable_shouldYield, fc = s.unstable_requestPaint, yt = s.unstable_now, ky = s.unstable_getCurrentPriorityLevel, wi = s.unstable_ImmediatePriority, ot = s.unstable_UserBlockingPriority, al = s.unstable_NormalPriority, Gh = s.unstable_LowPriority, pd = s.unstable_IdlePriority, Ku = null, Ya = null;
  function Qh(n) {
    if (Ya && typeof Ya.onCommitFiberRoot == "function")
      try {
        Ya.onCommitFiberRoot(Ku, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var da = Math.clz32 ? Math.clz32 : Ey, qh = Math.log, Xh = Math.LN2;
  function Ey(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (qh(n) / Xh | 0) | 0;
  }
  var dc = 64, Qo = 4194304;
  function Bl(n) {
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
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var c = 0, p = n.suspendedLanes, g = n.pingedLanes, w = o & 268435455;
    if (w !== 0) {
      var _ = w & ~p;
      _ !== 0 ? c = Bl(_) : (g &= w, g !== 0 && (c = Bl(g)));
    } else
      w = o & ~p, w !== 0 ? c = Bl(w) : g !== 0 && (c = Bl(g));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, g = r & -r, p >= g || p === 16 && (g & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        o = 31 - da(r), p = 1 << o, c |= n[o], r &= ~p;
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
    for (var o = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var w = 31 - da(g), _ = 1 << w, T = p[w];
      T === -1 ? (!(_ & o) || _ & c) && (p[w] = hd(_, r)) : T <= r && (n.expiredLanes |= _), g &= ~_;
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
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Wl(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - da(r), n[r] = o;
  }
  function _y(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - da(o), g = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, o &= ~g;
    }
  }
  function Zu(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var c = 31 - da(o), p = 1 << c;
      p & r | n[c] & r && (n[c] |= r), o &= ~p;
    }
  }
  var Ot = 0;
  function gd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Kh, vc, zt, Zh, yd, qe = !1, Ju = [], mn = null, pa = null, ha = null, es = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), Mt = [], Cy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        kn.delete(r.pointerId);
    }
  }
  function lr(n, r, o, c, p, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: g, targetContainers: [p] }, r !== null && (r = ys(r), r !== null && vc(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function il(n, r, o, c, p) {
    switch (r) {
      case "focusin":
        return mn = lr(mn, n, r, o, c, p), !0;
      case "dragenter":
        return pa = lr(pa, n, r, o, c, p), !0;
      case "mouseover":
        return ha = lr(ha, n, r, o, c, p), !0;
      case "pointerover":
        var g = p.pointerId;
        return es.set(g, lr(es.get(g) || null, n, r, o, c, p)), !0;
      case "gotpointercapture":
        return g = p.pointerId, kn.set(g, lr(kn.get(g) || null, n, r, o, c, p)), !0;
    }
    return !1;
  }
  function Jh(n) {
    var r = ma(n.target);
    if (r !== null) {
      var o = Ze(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = vt(o), r !== null) {
            n.blockedOn = r, yd(n.priority, function() {
              zt(o);
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
  function qo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = yc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var c = new o.constructor(o.type, o);
        Rr = c, o.target.dispatchEvent(c), Rr = null;
      } else
        return r = ys(o), r !== null && vc(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function bd(n, r, o) {
    qo(n) && o.delete(r);
  }
  function ev() {
    qe = !1, mn !== null && qo(mn) && (mn = null), pa !== null && qo(pa) && (pa = null), ha !== null && qo(ha) && (ha = null), es.forEach(bd), kn.forEach(bd);
  }
  function ts(n, r) {
    n.blockedOn === r && (n.blockedOn = null, qe || (qe = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, ev)));
  }
  function ns(n) {
    function r(p) {
      return ts(p, n);
    }
    if (0 < Ju.length) {
      ts(Ju[0], n);
      for (var o = 1; o < Ju.length; o++) {
        var c = Ju[o];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (mn !== null && ts(mn, n), pa !== null && ts(pa, n), ha !== null && ts(ha, n), es.forEach(r), kn.forEach(r), o = 0; o < Mt.length; o++)
      c = Mt[o], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Mt.length && (o = Mt[0], o.blockedOn === null); )
      Jh(o), o.blockedOn === null && Mt.shift();
  }
  var Xo = ge.ReactCurrentBatchConfig, Gl = !0;
  function tv(n, r, o, c) {
    var p = Ot, g = Xo.transition;
    Xo.transition = null;
    try {
      Ot = 1, gc(n, r, o, c);
    } finally {
      Ot = p, Xo.transition = g;
    }
  }
  function mc(n, r, o, c) {
    var p = Ot, g = Xo.transition;
    Xo.transition = null;
    try {
      Ot = 4, gc(n, r, o, c);
    } finally {
      Ot = p, Xo.transition = g;
    }
  }
  function gc(n, r, o, c) {
    if (Gl) {
      var p = yc(n, r, o, c);
      if (p === null)
        Oc(n, r, c, rs, o), Va(n, c);
      else if (il(p, n, r, o, c))
        c.stopPropagation();
      else if (Va(n, c), r & 4 && -1 < Cy.indexOf(n)) {
        for (; p !== null; ) {
          var g = ys(p);
          if (g !== null && Kh(g), g = yc(n, r, o, c), g === null && Oc(n, r, c, rs, o), g === p)
            break;
          p = g;
        }
        p !== null && c.stopPropagation();
      } else
        Oc(n, r, c, null, o);
    }
  }
  var rs = null;
  function yc(n, r, o, c) {
    if (rs = null, n = Ht(c), n = ma(n), n !== null)
      if (r = Ze(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = vt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return rs = n, null;
  }
  function Sd(n) {
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
        switch (ky()) {
          case wi:
            return 1;
          case ot:
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
  var ki = null, as = null, is = null;
  function xd() {
    if (is)
      return is;
    var n, r = as, o = r.length, c, p = "value" in ki ? ki.value : ki.textContent, g = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var w = o - n;
    for (c = 1; c <= w && r[o - c] === p[g - c]; c++)
      ;
    return is = p.slice(n, 1 < c ? 1 - c : void 0);
  }
  function Ko(n) {
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
    function r(o, c, p, g, w) {
      this._reactName = o, this._targetInst = p, this.type = c, this.nativeEvent = g, this.target = w, this.currentTarget = null;
      for (var _ in n)
        n.hasOwnProperty(_) && (o = n[_], this[_] = o ? o(g) : g[_]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? ls : nv, this.isPropagationStopped = nv, this;
    }
    return Se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ls);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ls);
    }, persist: function() {
    }, isPersistent: ls }), r;
  }
  var ll = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bc = Kr(ll), Zo = Se({}, ll, { view: 0, detail: 0 }), rv = Kr(Zo), Sc, wd, os, Un = Se({}, Zo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== os && (os && n.type === "mousemove" ? (Sc = n.screenX - os.screenX, wd = n.screenY - os.screenY) : wd = Sc = 0, os = n), Sc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : wd;
  } }), xc = Kr(Un), av = Se({}, Un, { dataTransfer: 0 }), iv = Kr(av), Ty = Se({}, Zo, { relatedTarget: 0 }), ol = Kr(Ty), kd = Se({}, ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lv = Kr(kd), Ry = Se({}, ll, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dy = Kr(Ry), Oy = Se({}, ll, { data: 0 }), Ed = Kr(Oy), _d = {
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
  }, ov = {
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
  }, uv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = uv[n]) ? !!r[n] : !1;
  }
  function Cd() {
    return sv;
  }
  var Ei = Se({}, Zo, { key: function(n) {
    if (n.key) {
      var r = _d[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ko(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? ov[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cd, charCode: function(n) {
    return n.type === "keypress" ? Ko(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ko(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), My = Kr(Ei), Td = Se({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wc = Kr(Td), Rd = Se({}, Zo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cd }), Ly = Kr(Rd), kc = Se({}, ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cv = Kr(kc), Dr = Se({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _i = Kr(Dr), gn = [9, 13, 27, 32], $a = D && "CompositionEvent" in window, Ql = null;
  D && "documentMode" in document && (Ql = document.documentMode);
  var Ec = D && "TextEvent" in window && !Ql, fv = D && (!$a || Ql && 8 < Ql && 11 >= Ql), Jo = String.fromCharCode(32), dv = !1;
  function pv(n, r) {
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
  function _c(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var eu = !1;
  function Ny(n, r) {
    switch (n) {
      case "compositionend":
        return _c(r);
      case "keypress":
        return r.which !== 32 ? null : (dv = !0, Jo);
      case "textInput":
        return n = r.data, n === Jo && dv ? null : n;
      default:
        return null;
    }
  }
  function Uy(n, r) {
    if (eu)
      return n === "compositionend" || !$a && pv(n, r) ? (n = xd(), is = as = ki = null, eu = !1, n) : null;
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
  function mv(n, r, o, c) {
    Vl(c), r = vs(r, "onChange"), 0 < r.length && (o = new bc("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
  }
  var us = null, tu = null;
  function nu(n) {
    Dc(n, 0);
  }
  function ru(n) {
    var r = iu(n);
    if (ca(r))
      return n;
  }
  function gv(n, r) {
    if (n === "change")
      return r;
  }
  var Dd = !1;
  if (D) {
    var Od;
    if (D) {
      var Md = "oninput" in document;
      if (!Md) {
        var yv = document.createElement("div");
        yv.setAttribute("oninput", "return;"), Md = typeof yv.oninput == "function";
      }
      Od = Md;
    } else
      Od = !1;
    Dd = Od && (!document.documentMode || 9 < document.documentMode);
  }
  function bv() {
    us && (us.detachEvent("onpropertychange", Sv), tu = us = null);
  }
  function Sv(n) {
    if (n.propertyName === "value" && ru(tu)) {
      var r = [];
      mv(r, tu, n, Ht(n)), Wo(nu, r);
    }
  }
  function zy(n, r, o) {
    n === "focusin" ? (bv(), us = r, tu = o, us.attachEvent("onpropertychange", Sv)) : n === "focusout" && bv();
  }
  function Ay(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ru(tu);
  }
  function Fy(n, r) {
    if (n === "click")
      return ru(r);
  }
  function xv(n, r) {
    if (n === "input" || n === "change")
      return ru(r);
  }
  function Hy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var va = typeof Object.is == "function" ? Object.is : Hy;
  function ss(n, r) {
    if (va(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), c = Object.keys(r);
    if (o.length !== c.length)
      return !1;
    for (c = 0; c < o.length; c++) {
      var p = o[c];
      if (!R.call(r, p) || !va(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function wv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function kv(n, r) {
    var o = wv(n);
    n = 0;
    for (var c; o; ) {
      if (o.nodeType === 3) {
        if (c = n + o.textContent.length, n <= r && c >= r)
          return { node: o, offset: r - n };
        n = c;
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
      o = wv(o);
    }
  }
  function Ev(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ev(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Cc() {
    for (var n = window, r = Mn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Mn(n.document);
    }
    return r;
  }
  function Ci(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Tc(n) {
    var r = Cc(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Ev(o.ownerDocument.documentElement, o)) {
      if (c !== null && Ci(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, g = Math.min(c.start, p);
          c = c.end === void 0 ? g : Math.min(c.end, p), !n.extend && g > c && (p = c, c = g, g = p), p = kv(o, g);
          var w = kv(
            o,
            c
          );
          p && w && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), g > c ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var _v = D && "documentMode" in document && 11 >= document.documentMode, Ia = null, Ld = null, cs = null, Nd = !1;
  function Cv(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Nd || Ia == null || Ia !== Mn(c) || (c = Ia, "selectionStart" in c && Ci(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), cs && ss(cs, c) || (cs = c, c = vs(Ld, "onSelect"), 0 < c.length && (r = new bc("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = Ia)));
  }
  function Rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ql = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, Ud = {}, zd = {};
  D && (zd = document.createElement("div").style, "AnimationEvent" in window || (delete ql.animationend.animation, delete ql.animationiteration.animation, delete ql.animationstart.animation), "TransitionEvent" in window || delete ql.transitionend.transition);
  function zn(n) {
    if (Ud[n])
      return Ud[n];
    if (!ql[n])
      return n;
    var r = ql[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in zd)
        return Ud[n] = r[o];
    return n;
  }
  var Ad = zn("animationend"), Tv = zn("animationiteration"), Rv = zn("animationstart"), Dv = zn("transitionend"), Ov = /* @__PURE__ */ new Map(), Mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ti(n, r) {
    Ov.set(n, r), x(r, [n]);
  }
  for (var fs = 0; fs < Mv.length; fs++) {
    var Xl = Mv[fs], jy = Xl.toLowerCase(), ds = Xl[0].toUpperCase() + Xl.slice(1);
    Ti(jy, "on" + ds);
  }
  Ti(Ad, "onAnimationEnd"), Ti(Tv, "onAnimationIteration"), Ti(Rv, "onAnimationStart"), Ti("dblclick", "onDoubleClick"), Ti("focusin", "onFocus"), Ti("focusout", "onBlur"), Ti(Dv, "onTransitionEnd"), b("onMouseEnter", ["mouseout", "mouseover"]), b("onMouseLeave", ["mouseout", "mouseover"]), b("onPointerEnter", ["pointerout", "pointerover"]), b("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Lv(n, r, o) {
    var c = n.type || "unknown-event";
    n.currentTarget = o, Fe(c, r, void 0, n), n.currentTarget = null;
  }
  function Dc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var c = n[o], p = c.event;
      c = c.listeners;
      e: {
        var g = void 0;
        if (r)
          for (var w = c.length - 1; 0 <= w; w--) {
            var _ = c[w], T = _.instance, V = _.currentTarget;
            if (_ = _.listener, T !== g && p.isPropagationStopped())
              break e;
            Lv(p, _, V), g = T;
          }
        else
          for (w = 0; w < c.length; w++) {
            if (_ = c[w], T = _.instance, V = _.currentTarget, _ = _.listener, T !== g && p.isPropagationStopped())
              break e;
            Lv(p, _, V), g = T;
          }
      }
    }
    if (nl)
      throw n = C, nl = !1, C = null, n;
  }
  function At(n, r) {
    var o = r[$d];
    o === void 0 && (o = r[$d] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    o.has(c) || (Nv(r, n, 2, !1), o.add(c));
  }
  function ul(n, r, o) {
    var c = 0;
    r && (c |= 4), Nv(o, n, c, r);
  }
  var Ri = "_reactListening" + Math.random().toString(36).slice(2);
  function au(n) {
    if (!n[Ri]) {
      n[Ri] = !0, h.forEach(function(o) {
        o !== "selectionchange" && (Yy.has(o) || ul(o, !1, n), ul(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ri] || (r[Ri] = !0, ul("selectionchange", !1, r));
    }
  }
  function Nv(n, r, o, c) {
    switch (Sd(r)) {
      case 1:
        var p = tv;
        break;
      case 4:
        p = mc;
        break;
      default:
        p = gc;
    }
    o = p.bind(null, r, o, n), p = void 0, !Go || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function Oc(n, r, o, c, p) {
    var g = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var w = c.tag;
          if (w === 3 || w === 4) {
            var _ = c.stateNode.containerInfo;
            if (_ === p || _.nodeType === 8 && _.parentNode === p)
              break;
            if (w === 4)
              for (w = c.return; w !== null; ) {
                var T = w.tag;
                if ((T === 3 || T === 4) && (T = w.stateNode.containerInfo, T === p || T.nodeType === 8 && T.parentNode === p))
                  return;
                w = w.return;
              }
            for (; _ !== null; ) {
              if (w = ma(_), w === null)
                return;
              if (T = w.tag, T === 5 || T === 6) {
                c = g = w;
                continue e;
              }
              _ = _.parentNode;
            }
          }
          c = c.return;
        }
    Wo(function() {
      var V = g, X = Ht(o), Z = [];
      e: {
        var q = Ov.get(n);
        if (q !== void 0) {
          var ye = bc, _e = n;
          switch (n) {
            case "keypress":
              if (Ko(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              ye = My;
              break;
            case "focusin":
              _e = "focus", ye = ol;
              break;
            case "focusout":
              _e = "blur", ye = ol;
              break;
            case "beforeblur":
            case "afterblur":
              ye = ol;
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
              ye = xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ye = iv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ye = Ly;
              break;
            case Ad:
            case Tv:
            case Rv:
              ye = lv;
              break;
            case Dv:
              ye = cv;
              break;
            case "scroll":
              ye = rv;
              break;
            case "wheel":
              ye = _i;
              break;
            case "copy":
            case "cut":
            case "paste":
              ye = Dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ye = wc;
          }
          var Re = (r & 4) !== 0, dn = !Re && n === "scroll", z = Re ? q !== null ? q + "Capture" : null : q;
          Re = [];
          for (var L = V, H; L !== null; ) {
            H = L;
            var re = H.stateNode;
            if (H.tag === 5 && re !== null && (H = re, z !== null && (re = Il(L, z), re != null && Re.push(hs(L, re, H)))), dn)
              break;
            L = L.return;
          }
          0 < Re.length && (q = new ye(q, _e, null, o, X), Z.push({ event: q, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", q && o !== Rr && (_e = o.relatedTarget || o.fromElement) && (ma(_e) || _e[Di]))
            break e;
          if ((ye || q) && (q = X.window === X ? X : (q = X.ownerDocument) ? q.defaultView || q.parentWindow : window, ye ? (_e = o.relatedTarget || o.toElement, ye = V, _e = _e ? ma(_e) : null, _e !== null && (dn = Ze(_e), _e !== dn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (ye = null, _e = V), ye !== _e)) {
            if (Re = xc, re = "onMouseLeave", z = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Re = wc, re = "onPointerLeave", z = "onPointerEnter", L = "pointer"), dn = ye == null ? q : iu(ye), H = _e == null ? q : iu(_e), q = new Re(re, L + "leave", ye, o, X), q.target = dn, q.relatedTarget = H, re = null, ma(X) === V && (Re = new Re(z, L + "enter", _e, o, X), Re.target = H, Re.relatedTarget = dn, re = Re), dn = re, ye && _e)
              t: {
                for (Re = ye, z = _e, L = 0, H = Re; H; H = Kl(H))
                  L++;
                for (H = 0, re = z; re; re = Kl(re))
                  H++;
                for (; 0 < L - H; )
                  Re = Kl(Re), L--;
                for (; 0 < H - L; )
                  z = Kl(z), H--;
                for (; L--; ) {
                  if (Re === z || z !== null && Re === z.alternate)
                    break t;
                  Re = Kl(Re), z = Kl(z);
                }
                Re = null;
              }
            else
              Re = null;
            ye !== null && Fd(Z, q, ye, Re, !1), _e !== null && dn !== null && Fd(Z, dn, _e, Re, !0);
          }
        }
        e: {
          if (q = V ? iu(V) : window, ye = q.nodeName && q.nodeName.toLowerCase(), ye === "select" || ye === "input" && q.type === "file")
            var De = gv;
          else if (vv(q))
            if (Dd)
              De = xv;
            else {
              De = Ay;
              var Ce = zy;
            }
          else
            (ye = q.nodeName) && ye.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (De = Fy);
          if (De && (De = De(n, V))) {
            mv(Z, De, o, X);
            break e;
          }
          Ce && Ce(n, q, V), n === "focusout" && (Ce = q._wrapperState) && Ce.controlled && q.type === "number" && za(q, "number", q.value);
        }
        switch (Ce = V ? iu(V) : window, n) {
          case "focusin":
            (vv(Ce) || Ce.contentEditable === "true") && (Ia = Ce, Ld = V, cs = null);
            break;
          case "focusout":
            cs = Ld = Ia = null;
            break;
          case "mousedown":
            Nd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nd = !1, Cv(Z, o, X);
            break;
          case "selectionchange":
            if (_v)
              break;
          case "keydown":
          case "keyup":
            Cv(Z, o, X);
        }
        var Le;
        if ($a)
          e: {
            switch (n) {
              case "compositionstart":
                var We = "onCompositionStart";
                break e;
              case "compositionend":
                We = "onCompositionEnd";
                break e;
              case "compositionupdate":
                We = "onCompositionUpdate";
                break e;
            }
            We = void 0;
          }
        else
          eu ? pv(n, o) && (We = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (We = "onCompositionStart");
        We && (fv && o.locale !== "ko" && (eu || We !== "onCompositionStart" ? We === "onCompositionEnd" && eu && (Le = xd()) : (ki = X, as = "value" in ki ? ki.value : ki.textContent, eu = !0)), Ce = vs(V, We), 0 < Ce.length && (We = new Ed(We, n, null, o, X), Z.push({ event: We, listeners: Ce }), Le ? We.data = Le : (Le = _c(o), Le !== null && (We.data = Le)))), (Le = Ec ? Ny(n, o) : Uy(n, o)) && (V = vs(V, "onBeforeInput"), 0 < V.length && (X = new Ed("onBeforeInput", "beforeinput", null, o, X), Z.push({ event: X, listeners: V }), X.data = Le));
      }
      Dc(Z, r);
    });
  }
  function hs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function vs(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var p = n, g = p.stateNode;
      p.tag === 5 && g !== null && (p = g, g = Il(n, o), g != null && c.unshift(hs(n, g, p)), g = Il(n, r), g != null && c.push(hs(n, g, p))), n = n.return;
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
  function Fd(n, r, o, c, p) {
    for (var g = r._reactName, w = []; o !== null && o !== c; ) {
      var _ = o, T = _.alternate, V = _.stateNode;
      if (T !== null && T === c)
        break;
      _.tag === 5 && V !== null && (_ = V, p ? (T = Il(o, g), T != null && w.unshift(hs(o, T, _))) : p || (T = Il(o, g), T != null && w.push(hs(o, T, _)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Hd = /\r\n?/g, Py = /\u0000|\uFFFD/g;
  function jd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Hd, `
`).replace(Py, "");
  }
  function Mc(n, r, o) {
    if (r = jd(r), jd(n) !== r && o)
      throw Error(f(425));
  }
  function Lc() {
  }
  var Yd = null, Zl = null;
  function ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Jl = typeof setTimeout == "function" ? setTimeout : void 0, Uv = typeof clearTimeout == "function" ? clearTimeout : void 0, Pd = typeof Promise == "function" ? Promise : void 0, Vd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pd < "u" ? function(n) {
    return Pd.resolve(null).then(n).catch(Vy);
  } : Jl;
  function Vy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function sl(n, r) {
    var o = r, c = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (c === 0) {
            n.removeChild(p), ns(r);
            return;
          }
          c--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || c++;
      o = p;
    } while (o);
    ns(r);
  }
  function Ba(n) {
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
  function gs(n) {
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
  var cl = Math.random().toString(36).slice(2), ai = "__reactFiber$" + cl, eo = "__reactProps$" + cl, Di = "__reactContainer$" + cl, $d = "__reactEvents$" + cl, $y = "__reactListeners$" + cl, Id = "__reactHandles$" + cl;
  function ma(n) {
    var r = n[ai];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Di] || o[ai]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = gs(n); n !== null; ) {
            if (o = n[ai])
              return o;
            n = gs(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ys(n) {
    return n = n[ai] || n[Di], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function iu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function Ue(n) {
    return n[eo] || null;
  }
  var fl = [], $t = -1;
  function Xe(n) {
    return { current: n };
  }
  function kt(n) {
    0 > $t || (n.current = fl[$t], fl[$t] = null, $t--);
  }
  function Et(n, r) {
    $t++, fl[$t] = n.current, n.current = r;
  }
  var ii = {}, Be = Xe(ii), ln = Xe(!1), Or = ii;
  function ga(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ii;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, g;
    for (g in o)
      p[g] = r[g];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ya() {
    kt(ln), kt(Be);
  }
  function dl(n, r, o) {
    if (Be.current !== ii)
      throw Error(f(168));
    Et(Be, r), Et(ln, o);
  }
  function bs(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return o;
    c = c.getChildContext();
    for (var p in c)
      if (!(p in r))
        throw Error(f(108, sa(n) || "Unknown", p));
    return Se({}, o, c);
  }
  function Nc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ii, Or = Be.current, Et(Be, n), Et(ln, ln.current), !0;
  }
  function zv(n, r, o) {
    var c = n.stateNode;
    if (!c)
      throw Error(f(169));
    o ? (n = bs(n, r, Or), c.__reactInternalMemoizedMergedChildContext = n, kt(ln), kt(Be), Et(Be, n)) : kt(ln), Et(ln, o);
  }
  var Zr = null, An = !1, Ss = !1;
  function Bd(n) {
    Zr === null ? Zr = [n] : Zr.push(n);
  }
  function Wd(n) {
    An = !0, Bd(n);
  }
  function Mr() {
    if (!Ss && Zr !== null) {
      Ss = !0;
      var n = 0, r = Ot;
      try {
        var o = Zr;
        for (Ot = 1; n < o.length; n++) {
          var c = o[n];
          do
            c = c(!0);
          while (c !== null);
        }
        Zr = null, An = !1;
      } catch (p) {
        throw Zr !== null && (Zr = Zr.slice(n + 1)), qt(wi, Mr), p;
      } finally {
        Ot = r, Ss = !1;
      }
    }
    return null;
  }
  var pl = [], Lr = 0, to = null, lu = 0, Nr = [], or = 0, ba = null, In = 1, Oi = "";
  function Jr(n, r) {
    pl[Lr++] = lu, pl[Lr++] = to, to = n, lu = r;
  }
  function Gd(n, r, o) {
    Nr[or++] = In, Nr[or++] = Oi, Nr[or++] = ba, ba = n;
    var c = In;
    n = Oi;
    var p = 32 - da(c) - 1;
    c &= ~(1 << p), o += 1;
    var g = 32 - da(r) + p;
    if (30 < g) {
      var w = p - p % 5;
      g = (c & (1 << w) - 1).toString(32), c >>= w, p -= w, In = 1 << 32 - da(r) + p | o << p | c, Oi = g + n;
    } else
      In = 1 << g | o << p | c, Oi = n;
  }
  function Uc(n) {
    n.return !== null && (Jr(n, 1), Gd(n, 1, 0));
  }
  function Qd(n) {
    for (; n === to; )
      to = pl[--Lr], pl[Lr] = null, lu = pl[--Lr], pl[Lr] = null;
    for (; n === ba; )
      ba = Nr[--or], Nr[or] = null, Oi = Nr[--or], Nr[or] = null, In = Nr[--or], Nr[or] = null;
  }
  var ea = null, Ur = null, It = !1, Sa = null;
  function qd(n, r) {
    var o = Ca(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Av(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, Ur = Ba(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ba !== null ? { id: In, overflow: Oi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ca(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ea = n, Ur = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ac(n) {
    if (It) {
      var r = Ur;
      if (r) {
        var o = r;
        if (!Av(n, r)) {
          if (zc(n))
            throw Error(f(418));
          r = Ba(o.nextSibling);
          var c = ea;
          r && Av(n, r) ? qd(c, o) : (n.flags = n.flags & -4097 | 2, It = !1, ea = n);
        }
      } else {
        if (zc(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, It = !1, ea = n;
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
    if (!It)
      return Fv(n), It = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ms(n.type, n.memoizedProps)), r && (r = Ur)) {
      if (zc(n))
        throw Hv(), Error(f(418));
      for (; r; )
        qd(n, r), r = Ba(r.nextSibling);
    }
    if (Fv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Ur = Ba(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ur = null;
      }
    } else
      Ur = ea ? Ba(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Hv() {
    for (var n = Ur; n; )
      n = Ba(n.nextSibling);
  }
  function Jt() {
    Ur = ea = null, It = !1;
  }
  function Xd(n) {
    Sa === null ? Sa = [n] : Sa.push(n);
  }
  var Hc = ge.ReactCurrentBatchConfig;
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = Se({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
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
    kt(li), n._currentValue = r;
  }
  function Fn(n, r, o) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function ce(n, r) {
    jc = n, Kd = hl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (yn = !0), n.firstContext = null);
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
  var Bn = null;
  function Jd(n) {
    Bn === null ? Bn = [n] : Bn.push(n);
  }
  function jv(n, r, o, c) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Jd(r)) : (o.next = p.next, p.next = o), r.interleaved = o, Mi(n, c);
  }
  function Mi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var ml = !1;
  function ep(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function En(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Li(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function gl(n, r, o) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, ut & 2) {
      var p = c.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), c.pending = r, Mi(n, o);
    }
    return p = c.interleaved, p === null ? (r.next = r, Jd(c)) : (r.next = p.next, p.next = r), c.interleaved = r, Mi(n, o);
  }
  function Yc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Zu(n, o);
    }
  }
  function tp(n, r) {
    var o = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var p = null, g = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var w = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          g === null ? p = g = w : g = g.next = w, o = o.next;
        } while (o !== null);
        g === null ? p = g = r : g = g.next = r;
      } else
        p = g = r;
      o = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: g, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function yl(n, r, o, c) {
    var p = n.updateQueue;
    ml = !1;
    var g = p.firstBaseUpdate, w = p.lastBaseUpdate, _ = p.shared.pending;
    if (_ !== null) {
      p.shared.pending = null;
      var T = _, V = T.next;
      T.next = null, w === null ? g = V : w.next = V, w = T;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, _ = X.lastBaseUpdate, _ !== w && (_ === null ? X.firstBaseUpdate = V : _.next = V, X.lastBaseUpdate = T));
    }
    if (g !== null) {
      var Z = p.baseState;
      w = 0, X = V = T = null, _ = g;
      do {
        var q = _.lane, ye = _.eventTime;
        if ((c & q) === q) {
          X !== null && (X = X.next = {
            eventTime: ye,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var _e = n, Re = _;
            switch (q = r, ye = o, Re.tag) {
              case 1:
                if (_e = Re.payload, typeof _e == "function") {
                  Z = _e.call(ye, Z, q);
                  break e;
                }
                Z = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Re.payload, q = typeof _e == "function" ? _e.call(ye, Z, q) : _e, q == null)
                  break e;
                Z = Se({}, Z, q);
                break e;
              case 2:
                ml = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, q = p.effects, q === null ? p.effects = [_] : q.push(_));
        } else
          ye = { eventTime: ye, lane: q, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, X === null ? (V = X = ye, T = Z) : X = X.next = ye, w |= q;
        if (_ = _.next, _ === null) {
          if (_ = p.shared.pending, _ === null)
            break;
          q = _, _ = q.next, q.next = null, p.lastBaseUpdate = q, p.shared.pending = null;
        }
      } while (1);
      if (X === null && (T = Z), p.baseState = T, p.firstBaseUpdate = V, p.lastBaseUpdate = X, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          w |= p.lane, p = p.next;
        while (p !== r);
      } else
        g === null && (p.shared.lanes = 0);
      Ai |= w, n.lanes = w, n.memoizedState = Z;
    }
  }
  function no(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], p = c.callback;
        if (p !== null) {
          if (c.callback = null, c = o, typeof p != "function")
            throw Error(f(191, p));
          p.call(c);
        }
      }
  }
  var Yv = new i.Component().refs;
  function np(n, r, o, c) {
    r = n.memoizedState, o = o(c, r), o = o == null ? r : Se({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Pc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = fr(), p = bn(n), g = Li(c, p);
    g.payload = r, o != null && (g.callback = o), r = gl(n, g, p), r !== null && (dr(r, n, p, c), Yc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = fr(), p = bn(n), g = Li(c, p);
    g.tag = 1, g.payload = r, o != null && (g.callback = o), r = gl(n, g, p), r !== null && (dr(r, n, p, c), Yc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = fr(), c = bn(n), p = Li(o, c);
    p.tag = 2, r != null && (p.callback = r), r = gl(n, p, c), r !== null && (dr(r, n, c, o), Yc(r, n, c));
  } };
  function Pv(n, r, o, c, p, g, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, g, w) : r.prototype && r.prototype.isPureReactComponent ? !ss(o, c) || !ss(p, g) : !0;
  }
  function Vv(n, r, o) {
    var c = !1, p = ii, g = r.contextType;
    return typeof g == "object" && g !== null ? g = fn(g) : (p = Xt(r) ? Or : Be.current, c = r.contextTypes, g = (c = c != null) ? ga(n, p) : ii), r = new r(o, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Pc, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function $v(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && Pc.enqueueReplaceState(r, r.state, null);
  }
  function Vc(n, r, o, c) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = Yv, ep(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? p.context = fn(g) : (g = Xt(r) ? Or : Be.current, p.context = ga(n, g)), p.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (np(n, r, g, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Pc.enqueueReplaceState(p, p.state, null), yl(n, o, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ou(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var c = o.stateNode;
        }
        if (!c)
          throw Error(f(147, n));
        var p = c, g = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(w) {
          var _ = p.refs;
          _ === Yv && (_ = p.refs = {}), w === null ? delete _[g] : _[g] = w;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function $c(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Iv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Bv(n) {
    function r(z, L) {
      if (n) {
        var H = z.deletions;
        H === null ? (z.deletions = [L], z.flags |= 16) : H.push(L);
      }
    }
    function o(z, L) {
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
      return z = Cl(z, L), z.index = 0, z.sibling = null, z;
    }
    function g(z, L, H) {
      return z.index = H, n ? (H = z.alternate, H !== null ? (H = H.index, H < L ? (z.flags |= 2, L) : H) : (z.flags |= 2, L)) : (z.flags |= 1048576, L);
    }
    function w(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function _(z, L, H, re) {
      return L === null || L.tag !== 6 ? (L = js(H, z.mode, re), L.return = z, L) : (L = p(L, H), L.return = z, L);
    }
    function T(z, L, H, re) {
      var De = H.type;
      return De === he ? X(z, L, H.props.children, re, H.key) : L !== null && (L.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Rt && Iv(De) === L.type) ? (re = p(L, H.props), re.ref = ou(z, L, H), re.return = z, re) : (re = wf(H.type, H.key, H.props, null, z.mode, re), re.ref = ou(z, L, H), re.return = z, re);
    }
    function V(z, L, H, re) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== H.containerInfo || L.stateNode.implementation !== H.implementation ? (L = wo(H, z.mode, re), L.return = z, L) : (L = p(L, H.children || []), L.return = z, L);
    }
    function X(z, L, H, re, De) {
      return L === null || L.tag !== 7 ? (L = xo(H, z.mode, re, De), L.return = z, L) : (L = p(L, H), L.return = z, L);
    }
    function Z(z, L, H) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = js("" + L, z.mode, H), L.return = z, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ve:
            return H = wf(L.type, L.key, L.props, null, z.mode, H), H.ref = ou(z, null, L), H.return = z, H;
          case le:
            return L = wo(L, z.mode, H), L.return = z, L;
          case Rt:
            var re = L._init;
            return Z(z, re(L._payload), H);
        }
        if (xi(L) || Ae(L))
          return L = xo(L, z.mode, H, null), L.return = z, L;
        $c(z, L);
      }
      return null;
    }
    function q(z, L, H, re) {
      var De = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return De !== null ? null : _(z, L, "" + H, re);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            return H.key === De ? T(z, L, H, re) : null;
          case le:
            return H.key === De ? V(z, L, H, re) : null;
          case Rt:
            return De = H._init, q(
              z,
              L,
              De(H._payload),
              re
            );
        }
        if (xi(H) || Ae(H))
          return De !== null ? null : X(z, L, H, re, null);
        $c(z, H);
      }
      return null;
    }
    function ye(z, L, H, re, De) {
      if (typeof re == "string" && re !== "" || typeof re == "number")
        return z = z.get(H) || null, _(L, z, "" + re, De);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case ve:
            return z = z.get(re.key === null ? H : re.key) || null, T(L, z, re, De);
          case le:
            return z = z.get(re.key === null ? H : re.key) || null, V(L, z, re, De);
          case Rt:
            var Ce = re._init;
            return ye(z, L, H, Ce(re._payload), De);
        }
        if (xi(re) || Ae(re))
          return z = z.get(H) || null, X(L, z, re, De, null);
        $c(L, re);
      }
      return null;
    }
    function _e(z, L, H, re) {
      for (var De = null, Ce = null, Le = L, We = L = 0, Yn = null; Le !== null && We < H.length; We++) {
        Le.index > We ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var mt = q(z, Le, H[We], re);
        if (mt === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && mt.alternate === null && r(z, Le), L = g(mt, L, We), Ce === null ? De = mt : Ce.sibling = mt, Ce = mt, Le = Yn;
      }
      if (We === H.length)
        return o(z, Le), It && Jr(z, We), De;
      if (Le === null) {
        for (; We < H.length; We++)
          Le = Z(z, H[We], re), Le !== null && (L = g(Le, L, We), Ce === null ? De = Le : Ce.sibling = Le, Ce = Le);
        return It && Jr(z, We), De;
      }
      for (Le = c(z, Le); We < H.length; We++)
        Yn = ye(Le, z, We, H[We], re), Yn !== null && (n && Yn.alternate !== null && Le.delete(Yn.key === null ? We : Yn.key), L = g(Yn, L, We), Ce === null ? De = Yn : Ce.sibling = Yn, Ce = Yn);
      return n && Le.forEach(function(Tl) {
        return r(z, Tl);
      }), It && Jr(z, We), De;
    }
    function Re(z, L, H, re) {
      var De = Ae(H);
      if (typeof De != "function")
        throw Error(f(150));
      if (H = De.call(H), H == null)
        throw Error(f(151));
      for (var Ce = De = null, Le = L, We = L = 0, Yn = null, mt = H.next(); Le !== null && !mt.done; We++, mt = H.next()) {
        Le.index > We ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var Tl = q(z, Le, mt.value, re);
        if (Tl === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && Tl.alternate === null && r(z, Le), L = g(Tl, L, We), Ce === null ? De = Tl : Ce.sibling = Tl, Ce = Tl, Le = Yn;
      }
      if (mt.done)
        return o(
          z,
          Le
        ), It && Jr(z, We), De;
      if (Le === null) {
        for (; !mt.done; We++, mt = H.next())
          mt = Z(z, mt.value, re), mt !== null && (L = g(mt, L, We), Ce === null ? De = mt : Ce.sibling = mt, Ce = mt);
        return It && Jr(z, We), De;
      }
      for (Le = c(z, Le); !mt.done; We++, mt = H.next())
        mt = ye(Le, z, We, mt.value, re), mt !== null && (n && mt.alternate !== null && Le.delete(mt.key === null ? We : mt.key), L = g(mt, L, We), Ce === null ? De = mt : Ce.sibling = mt, Ce = mt);
      return n && Le.forEach(function(s0) {
        return r(z, s0);
      }), It && Jr(z, We), De;
    }
    function dn(z, L, H, re) {
      if (typeof H == "object" && H !== null && H.type === he && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            e: {
              for (var De = H.key, Ce = L; Ce !== null; ) {
                if (Ce.key === De) {
                  if (De = H.type, De === he) {
                    if (Ce.tag === 7) {
                      o(z, Ce.sibling), L = p(Ce, H.props.children), L.return = z, z = L;
                      break e;
                    }
                  } else if (Ce.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Rt && Iv(De) === Ce.type) {
                    o(z, Ce.sibling), L = p(Ce, H.props), L.ref = ou(z, Ce, H), L.return = z, z = L;
                    break e;
                  }
                  o(z, Ce);
                  break;
                } else
                  r(z, Ce);
                Ce = Ce.sibling;
              }
              H.type === he ? (L = xo(H.props.children, z.mode, re, H.key), L.return = z, z = L) : (re = wf(H.type, H.key, H.props, null, z.mode, re), re.ref = ou(z, L, H), re.return = z, z = re);
            }
            return w(z);
          case le:
            e: {
              for (Ce = H.key; L !== null; ) {
                if (L.key === Ce)
                  if (L.tag === 4 && L.stateNode.containerInfo === H.containerInfo && L.stateNode.implementation === H.implementation) {
                    o(z, L.sibling), L = p(L, H.children || []), L.return = z, z = L;
                    break e;
                  } else {
                    o(z, L);
                    break;
                  }
                else
                  r(z, L);
                L = L.sibling;
              }
              L = wo(H, z.mode, re), L.return = z, z = L;
            }
            return w(z);
          case Rt:
            return Ce = H._init, dn(z, L, Ce(H._payload), re);
        }
        if (xi(H))
          return _e(z, L, H, re);
        if (Ae(H))
          return Re(z, L, H, re);
        $c(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, L !== null && L.tag === 6 ? (o(z, L.sibling), L = p(L, H), L.return = z, z = L) : (o(z, L), L = js(H, z.mode, re), L.return = z, z = L), w(z)) : o(z, L);
    }
    return dn;
  }
  var uu = Bv(!0), Wv = Bv(!1), xs = {}, Wa = Xe(xs), ws = Xe(xs), su = Xe(xs);
  function ro(n) {
    if (n === xs)
      throw Error(f(174));
    return n;
  }
  function rp(n, r) {
    switch (Et(su, r), Et(ws, n), Et(Wa, xs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    kt(Wa), Et(Wa, r);
  }
  function bl() {
    kt(Wa), kt(ws), kt(su);
  }
  function He(n) {
    ro(su.current);
    var r = ro(Wa.current), o = vn(r, n.type);
    r !== o && (Et(ws, n), Et(Wa, o));
  }
  function rt(n) {
    ws.current === n && (kt(Wa), kt(ws));
  }
  var Pe = Xe(0);
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
  var xa = [];
  function Ic() {
    for (var n = 0; n < xa.length; n++)
      xa[n]._workInProgressVersionPrimary = null;
    xa.length = 0;
  }
  var Bc = ge.ReactCurrentDispatcher, ap = ge.ReactCurrentBatchConfig, ao = 0, Bt = null, W = null, ft = null, Ve = !1, oi = !1, na = 0, io = 0;
  function Wt() {
    throw Error(f(321));
  }
  function lo(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!va(n[o], r[o]))
        return !1;
    return !0;
  }
  function Sl(n, r, o, c, p, g) {
    if (ao = g, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bc.current = n === null || n.memoizedState === null ? By : Wy, n = o(c, p), oi) {
      g = 0;
      do {
        if (oi = !1, na = 0, 25 <= g)
          throw Error(f(301));
        g += 1, ft = W = null, r.updateQueue = null, Bc.current = lp, n = o(c, p);
      } while (oi);
    }
    if (Bc.current = uf, r = W !== null && W.next !== null, ao = 0, ft = W = Bt = null, Ve = !1, r)
      throw Error(f(300));
    return n;
  }
  function oo() {
    var n = na !== 0;
    return na = 0, n;
  }
  function wa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? Bt.memoizedState = ft = n : ft = ft.next = n, ft;
  }
  function zr() {
    if (W === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = W.next;
    var r = ft === null ? Bt.memoizedState : ft.next;
    if (r !== null)
      ft = r, W = n;
    else {
      if (n === null)
        throw Error(f(310));
      W = n, n = { memoizedState: W.memoizedState, baseState: W.baseState, baseQueue: W.baseQueue, queue: W.queue, next: null }, ft === null ? Bt.memoizedState = ft = n : ft = ft.next = n;
    }
    return ft;
  }
  function uo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ks(n) {
    var r = zr(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = W, p = c.baseQueue, g = o.pending;
    if (g !== null) {
      if (p !== null) {
        var w = p.next;
        p.next = g.next, g.next = w;
      }
      c.baseQueue = p = g, o.pending = null;
    }
    if (p !== null) {
      g = p.next, c = c.baseState;
      var _ = w = null, T = null, V = g;
      do {
        var X = V.lane;
        if ((ao & X) === X)
          T !== null && (T = T.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), c = V.hasEagerState ? V.eagerState : n(c, V.action);
        else {
          var Z = {
            lane: X,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          T === null ? (_ = T = Z, w = c) : T = T.next = Z, Bt.lanes |= X, Ai |= X;
        }
        V = V.next;
      } while (V !== null && V !== g);
      T === null ? w = c : T.next = _, va(c, r.memoizedState) || (yn = !0), r.memoizedState = c, r.baseState = w, r.baseQueue = T, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        g = p.lane, Bt.lanes |= g, Ai |= g, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Es(n) {
    var r = zr(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, p = o.pending, g = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var w = p = p.next;
      do
        g = n(g, w.action), w = w.next;
      while (w !== p);
      va(g, r.memoizedState) || (yn = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), o.lastRenderedState = g;
    }
    return [g, c];
  }
  function Wc() {
  }
  function Gc(n, r) {
    var o = Bt, c = zr(), p = r(), g = !va(c.memoizedState, p);
    if (g && (c.memoizedState = p, yn = !0), c = c.queue, _s(Xc.bind(null, o, c, n), [n]), c.getSnapshot !== r || g || ft !== null && ft.memoizedState.tag & 1) {
      if (o.flags |= 2048, so(9, qc.bind(null, o, c, p, r), void 0, null), tn === null)
        throw Error(f(349));
      ao & 30 || Qc(o, r, p);
    }
    return p;
  }
  function Qc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function qc(n, r, o, c) {
    r.value = o, r.getSnapshot = c, Kc(r) && Zc(n);
  }
  function Xc(n, r, o) {
    return o(function() {
      Kc(r) && Zc(n);
    });
  }
  function Kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !va(n, o);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = Mi(n, 1);
    r !== null && dr(r, n, 1, -1);
  }
  function Jc(n) {
    var r = wa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: n }, r.queue = n, n = n.dispatch = of.bind(null, Bt, n), [r.memoizedState, n];
  }
  function so(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function ef() {
    return zr().memoizedState;
  }
  function co(n, r, o, c) {
    var p = wa();
    Bt.flags |= n, p.memoizedState = so(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Ni(n, r, o, c) {
    var p = zr();
    c = c === void 0 ? null : c;
    var g = void 0;
    if (W !== null) {
      var w = W.memoizedState;
      if (g = w.destroy, c !== null && lo(c, w.deps)) {
        p.memoizedState = so(r, o, g, c);
        return;
      }
    }
    Bt.flags |= n, p.memoizedState = so(1 | r, o, g, c);
  }
  function tf(n, r) {
    return co(8390656, 8, n, r);
  }
  function _s(n, r) {
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
  function cu(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ni(4, 4, ip.bind(null, r, n), o);
  }
  function af() {
  }
  function fu(n, r) {
    var o = zr();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && lo(r, c[1]) ? c[0] : (o.memoizedState = [n, r], n);
  }
  function xl(n, r) {
    var o = zr();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && lo(r, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Ar(n, r, o) {
    return ao & 21 ? (va(o, r) || (o = hc(), Bt.lanes |= o, Ai |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, yn = !0), n.memoizedState = o);
  }
  function Iy(n, r) {
    var o = Ot;
    Ot = o !== 0 && 4 > o ? o : 4, n(!0);
    var c = ap.transition;
    ap.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = o, ap.transition = c;
    }
  }
  function Ft() {
    return zr().memoizedState;
  }
  function lf(n, r, o) {
    var c = bn(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, du(n))
      Cs(r, o);
    else if (o = jv(n, r, o, c), o !== null) {
      var p = fr();
      dr(o, n, c, p), Gv(o, r, c);
    }
  }
  function of(n, r, o) {
    var c = bn(n), p = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (du(n))
      Cs(r, p);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var w = r.lastRenderedState, _ = g(w, o);
          if (p.hasEagerState = !0, p.eagerState = _, va(_, w)) {
            var T = r.interleaved;
            T === null ? (p.next = p, Jd(r)) : (p.next = T.next, T.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = jv(n, r, p, c), o !== null && (p = fr(), dr(o, n, c, p), Gv(o, r, c));
    }
  }
  function du(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function Cs(n, r) {
    oi = Ve = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Gv(n, r, o) {
    if (o & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Zu(n, o);
    }
  }
  var uf = { readContext: fn, useCallback: Wt, useContext: Wt, useEffect: Wt, useImperativeHandle: Wt, useInsertionEffect: Wt, useLayoutEffect: Wt, useMemo: Wt, useReducer: Wt, useRef: Wt, useState: Wt, useDebugValue: Wt, useDeferredValue: Wt, useTransition: Wt, useMutableSource: Wt, useSyncExternalStore: Wt, useId: Wt, unstable_isNewReconciler: !1 }, By = { readContext: fn, useCallback: function(n, r) {
    return wa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fn, useEffect: tf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, co(
      4194308,
      4,
      ip.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = wa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var c = wa();
    return r = o !== void 0 ? o(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = lf.bind(null, Bt, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = wa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Jc, useDebugValue: af, useDeferredValue: function(n) {
    return wa().memoizedState = n;
  }, useTransition: function() {
    var n = Jc(!1), r = n[0];
    return n = Iy.bind(null, n[1]), wa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = Bt, p = wa();
    if (It) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), tn === null)
        throw Error(f(349));
      ao & 30 || Qc(c, r, o);
    }
    p.memoizedState = o;
    var g = { value: o, getSnapshot: r };
    return p.queue = g, tf(Xc.bind(
      null,
      c,
      g,
      n
    ), [n]), c.flags |= 2048, so(9, qc.bind(null, c, g, o, r), void 0, null), o;
  }, useId: function() {
    var n = wa(), r = tn.identifierPrefix;
    if (It) {
      var o = Oi, c = In;
      o = (c & ~(1 << 32 - da(c) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = na++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = io++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Wy = {
    readContext: fn,
    useCallback: fu,
    useContext: fn,
    useEffect: _s,
    useImperativeHandle: cu,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: xl,
    useReducer: ks,
    useRef: ef,
    useState: function() {
      return ks(uo);
    },
    useDebugValue: af,
    useDeferredValue: function(n) {
      var r = zr();
      return Ar(r, W.memoizedState, n);
    },
    useTransition: function() {
      var n = ks(uo)[0], r = zr().memoizedState;
      return [n, r];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: Ft,
    unstable_isNewReconciler: !1
  }, lp = { readContext: fn, useCallback: fu, useContext: fn, useEffect: _s, useImperativeHandle: cu, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: xl, useReducer: Es, useRef: ef, useState: function() {
    return Es(uo);
  }, useDebugValue: af, useDeferredValue: function(n) {
    var r = zr();
    return W === null ? r.memoizedState = n : Ar(r, W.memoizedState, n);
  }, useTransition: function() {
    var n = Es(uo)[0], r = zr().memoizedState;
    return [n, r];
  }, useMutableSource: Wc, useSyncExternalStore: Gc, useId: Ft, unstable_isNewReconciler: !1 };
  function pu(n, r) {
    try {
      var o = "", c = r;
      do
        o += Ja(c), c = c.return;
      while (c);
      var p = o;
    } catch (g) {
      p = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Ts(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function sf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Gy = typeof WeakMap == "function" ? WeakMap : Map;
  function Qv(n, r, o) {
    o = Li(-1, o), o.tag = 3, o.payload = { element: null };
    var c = r.value;
    return o.callback = function() {
      mf || (mf = !0, mo = c), sf(n, r);
    }, o;
  }
  function Rs(n, r, o) {
    o = Li(-1, o), o.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = r.value;
      o.payload = function() {
        return c(p);
      }, o.callback = function() {
        sf(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
      sf(n, r), typeof c != "function" && (ci === null ? ci = /* @__PURE__ */ new Set([this]) : ci.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function qv(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Gy();
      var p = /* @__PURE__ */ new Set();
      c.set(r, p);
    } else
      p = c.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), c.set(r, p));
    p.has(o) || (p.add(o), n = e0.bind(null, n, r, o), r.then(n, n));
  }
  function op(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function up(n, r, o, c, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Li(-1, 1), r.tag = 2, gl(o, r, 1))), o.lanes |= 1), n);
  }
  var Qy = ge.ReactCurrentOwner, yn = !1;
  function _n(n, r, o, c) {
    r.child = n === null ? Wv(r, null, o, c) : uu(r, n.child, o, c);
  }
  function wl(n, r, o, c, p) {
    o = o.render;
    var g = r.ref;
    return ce(r, p), c = Sl(n, r, o, c, g, p), o = oo(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Wn(n, r, p)) : (It && o && Uc(r), r.flags |= 1, _n(n, r, c, p), r.child);
  }
  function cf(n, r, o, c, p) {
    if (n === null) {
      var g = o.type;
      return typeof g == "function" && !Tp(g) && g.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = g, Fr(n, r, g, c, p)) : (n = wf(o.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & p)) {
      var w = g.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ss, o(w, c) && n.ref === r.ref)
        return Wn(n, r, p);
    }
    return r.flags |= 1, n = Cl(g, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fr(n, r, o, c, p) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (ss(g, c) && n.ref === r.ref)
        if (yn = !1, r.pendingProps = c = g, (n.lanes & p) !== 0)
          n.flags & 131072 && (yn = !0);
        else
          return r.lanes = n.lanes, Wn(n, r, p);
    }
    return hu(n, r, o, c, p);
  }
  function fo(n, r, o) {
    var c = r.pendingProps, p = c.children, g = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Et(Su, ra), ra |= o;
      else {
        if (!(o & 1073741824))
          return n = g !== null ? g.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Et(Su, ra), ra |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = g !== null ? g.baseLanes : o, Et(Su, ra), ra |= c;
      }
    else
      g !== null ? (c = g.baseLanes | o, r.memoizedState = null) : c = o, Et(Su, ra), ra |= c;
    return _n(n, r, p, o), r.child;
  }
  function Ke(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function hu(n, r, o, c, p) {
    var g = Xt(o) ? Or : Be.current;
    return g = ga(r, g), ce(r, p), o = Sl(n, r, o, c, g, p), c = oo(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Wn(n, r, p)) : (It && c && Uc(r), r.flags |= 1, _n(n, r, o, p), r.child);
  }
  function sp(n, r, o, c, p) {
    if (Xt(o)) {
      var g = !0;
      Nc(r);
    } else
      g = !1;
    if (ce(r, p), r.stateNode === null)
      ur(n, r), Vv(r, o, c), Vc(r, o, c, p), c = !0;
    else if (n === null) {
      var w = r.stateNode, _ = r.memoizedProps;
      w.props = _;
      var T = w.context, V = o.contextType;
      typeof V == "object" && V !== null ? V = fn(V) : (V = Xt(o) ? Or : Be.current, V = ga(r, V));
      var X = o.getDerivedStateFromProps, Z = typeof X == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      Z || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (_ !== c || T !== V) && $v(r, w, c, V), ml = !1;
      var q = r.memoizedState;
      w.state = q, yl(r, c, w, p), T = r.memoizedState, _ !== c || q !== T || ln.current || ml ? (typeof X == "function" && (np(r, o, X, c), T = r.memoizedState), (_ = ml || Pv(r, o, _, c, q, T, V)) ? (Z || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = T), w.props = c, w.state = T, w.context = V, c = _) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      w = r.stateNode, En(n, r), _ = r.memoizedProps, V = r.type === r.elementType ? _ : ta(r.type, _), w.props = V, Z = r.pendingProps, q = w.context, T = o.contextType, typeof T == "object" && T !== null ? T = fn(T) : (T = Xt(o) ? Or : Be.current, T = ga(r, T));
      var ye = o.getDerivedStateFromProps;
      (X = typeof ye == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (_ !== Z || q !== T) && $v(r, w, c, T), ml = !1, q = r.memoizedState, w.state = q, yl(r, c, w, p);
      var _e = r.memoizedState;
      _ !== Z || q !== _e || ln.current || ml ? (typeof ye == "function" && (np(r, o, ye, c), _e = r.memoizedState), (V = ml || Pv(r, o, V, c, q, _e, T) || !1) ? (X || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(c, _e, T), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(c, _e, T)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || _ === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = _e), w.props = c, w.state = _e, w.context = T, c = V) : (typeof w.componentDidUpdate != "function" || _ === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Xv(n, r, o, c, g, p);
  }
  function Xv(n, r, o, c, p, g) {
    Ke(n, r);
    var w = (r.flags & 128) !== 0;
    if (!c && !w)
      return p && zv(r, o, !1), Wn(n, r, g);
    c = r.stateNode, Qy.current = r;
    var _ = w && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && w ? (r.child = uu(r, n.child, null, g), r.child = uu(r, null, _, g)) : _n(n, r, _, g), r.memoizedState = c.state, p && zv(r, o, !0), r.child;
  }
  function Kv(n) {
    var r = n.stateNode;
    r.pendingContext ? dl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && dl(n, r.context, !1), rp(n, r.containerInfo);
  }
  function ff(n, r, o, c, p) {
    return Jt(), Xd(p), r.flags |= 256, _n(n, r, o, c), r.child;
  }
  var po = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function fp(n, r, o) {
    var c = r.pendingProps, p = Pe.current, g = !1, w = (r.flags & 128) !== 0, _;
    if ((_ = w) || (_ = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), _ ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Et(Pe, p & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = c.children, n = c.fallback, g ? (c = r.mode, g = r.child, w = { mode: "hidden", children: w }, !(c & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = w) : g = Hs(w, c, 0, null), n = xo(n, c, o, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = cp(o), r.memoizedState = po, n) : dp(r, w));
    if (p = n.memoizedState, p !== null && (_ = p.dehydrated, _ !== null))
      return qy(n, r, w, c, _, p, o);
    if (g) {
      g = c.fallback, w = r.mode, p = n.child, _ = p.sibling;
      var T = { mode: "hidden", children: c.children };
      return !(w & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = T, r.deletions = null) : (c = Cl(p, T), c.subtreeFlags = p.subtreeFlags & 14680064), _ !== null ? g = Cl(_, g) : (g = xo(g, w, o, null), g.flags |= 2), g.return = r, c.return = r, c.sibling = g, r.child = c, c = g, g = r.child, w = n.child.memoizedState, w = w === null ? cp(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, g.memoizedState = w, g.childLanes = n.childLanes & ~o, r.memoizedState = po, c;
    }
    return g = n.child, n = g.sibling, c = Cl(g, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function dp(n, r) {
    return r = Hs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vu(n, r, o, c) {
    return c !== null && Xd(c), uu(r, n.child, null, o), n = dp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qy(n, r, o, c, p, g, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = Ts(Error(f(422))), vu(n, r, w, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = c.fallback, p = r.mode, c = Hs({ mode: "visible", children: c.children }, p, 0, null), g = xo(g, p, w, null), g.flags |= 2, c.return = r, g.return = r, c.sibling = g, r.child = c, r.mode & 1 && uu(r, n.child, null, w), r.child.memoizedState = cp(w), r.memoizedState = po, g);
    if (!(r.mode & 1))
      return vu(n, r, w, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c)
        var _ = c.dgst;
      return c = _, g = Error(f(419)), c = Ts(g, c, void 0), vu(n, r, w, c);
    }
    if (_ = (w & n.childLanes) !== 0, yn || _) {
      if (c = tn, c !== null) {
        switch (w & -w) {
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
        p = p & (c.suspendedLanes | w) ? 0 : p, p !== 0 && p !== g.retryLane && (g.retryLane = p, Mi(n, p), dr(c, n, p, -1));
      }
      return Ep(), c = Ts(Error(f(421))), vu(n, r, w, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = t0.bind(null, n), p._reactRetry = r, null) : (n = g.treeContext, Ur = Ba(p.nextSibling), ea = r, It = !0, Sa = null, n !== null && (Nr[or++] = In, Nr[or++] = Oi, Nr[or++] = ba, In = n.id, Oi = n.overflow, ba = r), r = dp(r, c.children), r.flags |= 4096, r);
  }
  function pp(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), Fn(n.return, r, o);
  }
  function df(n, r, o, c, p) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: p } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = c, g.tail = o, g.tailMode = p);
  }
  function hp(n, r, o) {
    var c = r.pendingProps, p = c.revealOrder, g = c.tail;
    if (_n(n, r, c.children, o), c = Pe.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && pp(n, o, r);
            else if (n.tag === 19)
              pp(n, o, r);
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
    if (Et(Pe, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && en(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), df(r, !1, p, o, g);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && en(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          df(r, !0, o, null, g);
          break;
        case "together":
          df(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ur(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Wn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = Cl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Cl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Ui(n, r, o) {
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
        Et(li, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (Et(Pe, Pe.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? fp(n, r, o) : (Et(Pe, Pe.current & 1), n = Wn(n, r, o), n !== null ? n.sibling : null);
        Et(Pe, Pe.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return hp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Et(Pe, Pe.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, fo(n, r, o);
    }
    return Wn(n, r, o);
  }
  var Ds, ho, ka, Cn;
  Ds = function(n, r) {
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
  }, ho = function() {
  }, ka = function(n, r, o, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, ro(Wa.current);
      var g = null;
      switch (o) {
        case "input":
          p = rr(n, p), c = rr(n, c), g = [];
          break;
        case "select":
          p = Se({}, p, { value: void 0 }), c = Se({}, c, { value: void 0 }), g = [];
          break;
        case "textarea":
          p = Aa(n, p), c = Aa(n, c), g = [];
          break;
        default:
          typeof p.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Lc);
      }
      Ln(o, c);
      var w;
      o = null;
      for (V in p)
        if (!c.hasOwnProperty(V) && p.hasOwnProperty(V) && p[V] != null)
          if (V === "style") {
            var _ = p[V];
            for (w in _)
              _.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (m.hasOwnProperty(V) ? g || (g = []) : (g = g || []).push(V, null));
      for (V in c) {
        var T = c[V];
        if (_ = p != null ? p[V] : void 0, c.hasOwnProperty(V) && T !== _ && (T != null || _ != null))
          if (V === "style")
            if (_) {
              for (w in _)
                !_.hasOwnProperty(w) || T && T.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
              for (w in T)
                T.hasOwnProperty(w) && _[w] !== T[w] && (o || (o = {}), o[w] = T[w]);
            } else
              o || (g || (g = []), g.push(
                V,
                o
              )), o = T;
          else
            V === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, _ = _ ? _.__html : void 0, T != null && _ !== T && (g = g || []).push(V, T)) : V === "children" ? typeof T != "string" && typeof T != "number" || (g = g || []).push(V, "" + T) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (m.hasOwnProperty(V) ? (T != null && V === "onScroll" && At("scroll", n), g || _ === T || (g = [])) : (g = g || []).push(V, T));
      }
      o && (g = g || []).push("style", o);
      var V = g;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, Cn = function(n, r, o, c) {
    o !== c && (r.flags |= 4);
  };
  function Os(n, r) {
    if (!It)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var c = null; o !== null; )
            o.alternate !== null && (c = o), o = o.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, c = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, c |= p.subtreeFlags & 14680064, c |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= c, n.childLanes = o, r;
  }
  function Xy(n, r, o) {
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
        return Xt(r.type) && ya(), sr(r), null;
      case 3:
        return c = r.stateNode, bl(), kt(ln), kt(Be), Ic(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (Fc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Sa !== null && (Fs(Sa), Sa = null))), ho(n, r), sr(r), null;
      case 5:
        rt(r);
        var p = ro(su.current);
        if (o = r.type, n !== null && r.stateNode != null)
          ka(n, r, o, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(f(166));
            return sr(r), null;
          }
          if (n = ro(Wa.current), Fc(r)) {
            c = r.stateNode, o = r.type;
            var g = r.memoizedProps;
            switch (c[ai] = r, c[eo] = g, n = (r.mode & 1) !== 0, o) {
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
                $n(c, g), At("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!g.multiple }, At("invalid", c);
                break;
              case "textarea":
                Wr(c, g), At("invalid", c);
            }
            Ln(o, g), p = null;
            for (var w in g)
              if (g.hasOwnProperty(w)) {
                var _ = g[w];
                w === "children" ? typeof _ == "string" ? c.textContent !== _ && (g.suppressHydrationWarning !== !0 && Mc(c.textContent, _, n), p = ["children", _]) : typeof _ == "number" && c.textContent !== "" + _ && (g.suppressHydrationWarning !== !0 && Mc(
                  c.textContent,
                  _,
                  n
                ), p = ["children", "" + _]) : m.hasOwnProperty(w) && _ != null && w === "onScroll" && At("scroll", c);
              }
            switch (o) {
              case "input":
                Tr(c), fa(c, g, !0);
                break;
              case "textarea":
                Tr(c), Gr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (c.onclick = Lc);
            }
            c = p, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            w = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Fa(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = w.createElement(o, { is: c.is }) : (n = w.createElement(o), o === "select" && (w = n, c.multiple ? w.multiple = !0 : c.size && (w.size = c.size))) : n = w.createElementNS(n, o), n[ai] = r, n[eo] = c, Ds(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = cn(o, c), o) {
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
                  $n(n, c), p = rr(n, c), At("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = Se({}, c, { value: void 0 }), At("invalid", n);
                  break;
                case "textarea":
                  Wr(n, c), p = Aa(n, c), At("invalid", n);
                  break;
                default:
                  p = c;
              }
              Ln(o, p), _ = p;
              for (g in _)
                if (_.hasOwnProperty(g)) {
                  var T = _[g];
                  g === "style" ? Dt(n, T) : g === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && el(n, T)) : g === "children" ? typeof T == "string" ? (o !== "textarea" || T !== "") && Ha(n, T) : typeof T == "number" && Ha(n, "" + T) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (m.hasOwnProperty(g) ? T != null && g === "onScroll" && At("scroll", n) : T != null && ee(n, g, T, w));
                }
              switch (o) {
                case "input":
                  Tr(n), fa(n, c, !1);
                  break;
                case "textarea":
                  Tr(n), Gr(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + nr(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, g = c.value, g != null ? ti(n, !!c.multiple, g, !1) : c.defaultValue != null && ti(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Lc);
              }
              switch (o) {
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
          Cn(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = ro(su.current), ro(Wa.current), Fc(r)) {
            if (c = r.stateNode, o = r.memoizedProps, c[ai] = r, (g = c.nodeValue !== o) && (n = ea, n !== null))
              switch (n.tag) {
                case 3:
                  Mc(c.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Mc(c.nodeValue, o, (n.mode & 1) !== 0);
              }
            g && (r.flags |= 4);
          } else
            c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[ai] = r, r.stateNode = c;
        }
        return sr(r), null;
      case 13:
        if (kt(Pe), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (It && Ur !== null && r.mode & 1 && !(r.flags & 128))
            Hv(), Jt(), r.flags |= 98560, g = !1;
          else if (g = Fc(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!g)
                throw Error(f(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g)
                throw Error(f(317));
              g[ai] = r;
            } else
              Jt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            sr(r), g = !1;
          } else
            Sa !== null && (Fs(Sa), Sa = null), g = !0;
          if (!g)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || Pe.current & 1 ? Rn === 0 && (Rn = 3) : Ep())), r.updateQueue !== null && (r.flags |= 4), sr(r), null);
      case 4:
        return bl(), ho(n, r), n === null && au(r.stateNode.containerInfo), sr(r), null;
      case 10:
        return vl(r.type._context), sr(r), null;
      case 17:
        return Xt(r.type) && ya(), sr(r), null;
      case 19:
        if (kt(Pe), g = r.memoizedState, g === null)
          return sr(r), null;
        if (c = (r.flags & 128) !== 0, w = g.rendering, w === null)
          if (c)
            Os(g, !1);
          else {
            if (Rn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = en(n), w !== null) {
                  for (r.flags |= 128, Os(g, !1), c = w.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; )
                    g = o, n = c, g.flags &= 14680066, w = g.alternate, w === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = w.childLanes, g.lanes = w.lanes, g.child = w.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = w.memoizedProps, g.memoizedState = w.memoizedState, g.updateQueue = w.updateQueue, g.type = w.type, n = w.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Et(Pe, Pe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            g.tail !== null && yt() > wu && (r.flags |= 128, c = !0, Os(g, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = en(w), n !== null) {
              if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Os(g, !0), g.tail === null && g.tailMode === "hidden" && !w.alternate && !It)
                return sr(r), null;
            } else
              2 * yt() - g.renderingStartTime > wu && o !== 1073741824 && (r.flags |= 128, c = !0, Os(g, !1), r.lanes = 4194304);
          g.isBackwards ? (w.sibling = r.child, r.child = w) : (o = g.last, o !== null ? o.sibling = w : r.child = w, g.last = w);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = yt(), r.sibling = null, o = Pe.current, Et(Pe, c ? o & 1 | 2 : o & 1), r) : (sr(r), null);
      case 22:
      case 23:
        return kp(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? ra & 1073741824 && (sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : sr(r), null;
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
        return Xt(r.type) && ya(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return bl(), kt(ln), kt(Be), Ic(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rt(r), null;
      case 13:
        if (kt(Pe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          Jt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return kt(Pe), null;
      case 4:
        return bl(), null;
      case 10:
        return vl(r.type._context), null;
      case 22:
      case 23:
        return kp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ms = !1, Tn = !1, Zv = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function mu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (c) {
          un(n, r, c);
        }
      else
        o.current = null;
  }
  function Ls(n, r, o) {
    try {
      o();
    } catch (c) {
      un(n, r, c);
    }
  }
  var Jv = !1;
  function em(n, r) {
    if (Yd = Gl, n = Cc(), Ci(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var p = c.anchorOffset, g = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType, g.nodeType;
            } catch {
              o = null;
              break e;
            }
            var w = 0, _ = -1, T = -1, V = 0, X = 0, Z = n, q = null;
            t:
              for (; ; ) {
                for (var ye; Z !== o || p !== 0 && Z.nodeType !== 3 || (_ = w + p), Z !== g || c !== 0 && Z.nodeType !== 3 || (T = w + c), Z.nodeType === 3 && (w += Z.nodeValue.length), (ye = Z.firstChild) !== null; )
                  q = Z, Z = ye;
                for (; ; ) {
                  if (Z === n)
                    break t;
                  if (q === o && ++V === p && (_ = w), q === g && ++X === c && (T = w), (ye = Z.nextSibling) !== null)
                    break;
                  Z = q, q = Z.parentNode;
                }
                Z = ye;
              }
            o = _ === -1 || T === -1 ? null : { start: _, end: T };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Zl = { focusedElem: n, selectionRange: o }, Gl = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var _e = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_e !== null) {
                    var Re = _e.memoizedProps, dn = _e.memoizedState, z = r.stateNode, L = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Re : ta(r.type, Re), dn);
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
            un(r, r.return, re);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return _e = Jv, Jv = !1, _e;
  }
  function Ns(n, r, o) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var g = p.destroy;
          p.destroy = void 0, g !== void 0 && Ls(r, o, g);
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function Us(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var c = o.create;
          o.destroy = c();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function mp(n) {
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
  function gp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, gp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ai], delete r[eo], delete r[$d], delete r[$y], delete r[Id])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function gu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Lc));
    else if (c !== 4 && (n = n.child, n !== null))
      for (gu(n, r, o), n = n.sibling; n !== null; )
        gu(n, r, o), n = n.sibling;
  }
  function ui(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (ui(n, r, o), n = n.sibling; n !== null; )
        ui(n, r, o), n = n.sibling;
  }
  var Kt = null, Hn = !1;
  function Ea(n, r, o) {
    for (o = o.child; o !== null; )
      yu(n, r, o), o = o.sibling;
  }
  function yu(n, r, o) {
    if (Ya && typeof Ya.onCommitFiberUnmount == "function")
      try {
        Ya.onCommitFiberUnmount(Ku, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Tn || mu(o, r);
      case 6:
        var c = Kt, p = Hn;
        Kt = null, Ea(n, r, o), Kt = c, Hn = p, Kt !== null && (Hn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Kt.removeChild(o.stateNode));
        break;
      case 18:
        Kt !== null && (Hn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? sl(n.parentNode, o) : n.nodeType === 1 && sl(n, o), ns(n)) : sl(Kt, o.stateNode));
        break;
      case 4:
        c = Kt, p = Hn, Kt = o.stateNode.containerInfo, Hn = !0, Ea(n, r, o), Kt = c, Hn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tn && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var g = p, w = g.destroy;
            g = g.tag, w !== void 0 && (g & 2 || g & 4) && Ls(o, r, w), p = p.next;
          } while (p !== c);
        }
        Ea(n, r, o);
        break;
      case 1:
        if (!Tn && (mu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
          } catch (_) {
            un(o, r, _);
          }
        Ea(n, r, o);
        break;
      case 21:
        Ea(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Tn = (c = Tn) || o.memoizedState !== null, Ea(n, r, o), Tn = c) : Ea(n, r, o);
        break;
      default:
        Ea(n, r, o);
    }
  }
  function zi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Zv()), r.forEach(function(c) {
        var p = n0.bind(null, n, c);
        o.has(c) || (o.add(c), c.then(p, p));
      });
    }
  }
  function Ga(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var c = 0; c < o.length; c++) {
        var p = o[c];
        try {
          var g = n, w = r, _ = w;
          e:
            for (; _ !== null; ) {
              switch (_.tag) {
                case 5:
                  Kt = _.stateNode, Hn = !1;
                  break e;
                case 3:
                  Kt = _.stateNode.containerInfo, Hn = !0;
                  break e;
                case 4:
                  Kt = _.stateNode.containerInfo, Hn = !0;
                  break e;
              }
              _ = _.return;
            }
          if (Kt === null)
            throw Error(f(160));
          yu(g, w, p), Kt = null, Hn = !1;
          var T = p.alternate;
          T !== null && (T.return = null), p.return = null;
        } catch (V) {
          un(p, r, V);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        nm(r, n), r = r.sibling;
  }
  function nm(n, r) {
    var o = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ga(r, n), si(n), c & 4) {
          try {
            Ns(3, n, n.return), Us(3, n);
          } catch (Re) {
            un(n, n.return, Re);
          }
          try {
            Ns(5, n, n.return);
          } catch (Re) {
            un(n, n.return, Re);
          }
        }
        break;
      case 1:
        Ga(r, n), si(n), c & 512 && o !== null && mu(o, o.return);
        break;
      case 5:
        if (Ga(r, n), si(n), c & 512 && o !== null && mu(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Ha(p, "");
          } catch (Re) {
            un(n, n.return, Re);
          }
        }
        if (c & 4 && (p = n.stateNode, p != null)) {
          var g = n.memoizedProps, w = o !== null ? o.memoizedProps : g, _ = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              _ === "input" && g.type === "radio" && g.name != null && ar(p, g), cn(_, w);
              var V = cn(_, g);
              for (w = 0; w < T.length; w += 2) {
                var X = T[w], Z = T[w + 1];
                X === "style" ? Dt(p, Z) : X === "dangerouslySetInnerHTML" ? el(p, Z) : X === "children" ? Ha(p, Z) : ee(p, X, Z, V);
              }
              switch (_) {
                case "input":
                  ir(p, g);
                  break;
                case "textarea":
                  ni(p, g);
                  break;
                case "select":
                  var q = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!g.multiple;
                  var ye = g.value;
                  ye != null ? ti(p, !!g.multiple, ye, !1) : q !== !!g.multiple && (g.defaultValue != null ? ti(
                    p,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  ) : ti(p, !!g.multiple, g.multiple ? [] : "", !1));
              }
              p[eo] = g;
            } catch (Re) {
              un(n, n.return, Re);
            }
        }
        break;
      case 6:
        if (Ga(r, n), si(n), c & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          p = n.stateNode, g = n.memoizedProps;
          try {
            p.nodeValue = g;
          } catch (Re) {
            un(n, n.return, Re);
          }
        }
        break;
      case 3:
        if (Ga(r, n), si(n), c & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            ns(r.containerInfo);
          } catch (Re) {
            un(n, n.return, Re);
          }
        break;
      case 4:
        Ga(r, n), si(n);
        break;
      case 13:
        Ga(r, n), si(n), p = n.child, p.flags & 8192 && (g = p.memoizedState !== null, p.stateNode.isHidden = g, !g || p.alternate !== null && p.alternate.memoizedState !== null || (Sp = yt())), c & 4 && zi(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (Tn = (V = Tn) || X, Ga(r, n), Tn = V) : Ga(r, n), si(n), c & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !X && n.mode & 1)
            for (ke = n, X = n.child; X !== null; ) {
              for (Z = ke = X; ke !== null; ) {
                switch (q = ke, ye = q.child, q.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ns(4, q, q.return);
                    break;
                  case 1:
                    mu(q, q.return);
                    var _e = q.stateNode;
                    if (typeof _e.componentWillUnmount == "function") {
                      c = q, o = q.return;
                      try {
                        r = c, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                      } catch (Re) {
                        un(c, o, Re);
                      }
                    }
                    break;
                  case 5:
                    mu(q, q.return);
                    break;
                  case 22:
                    if (q.memoizedState !== null) {
                      yp(Z);
                      continue;
                    }
                }
                ye !== null ? (ye.return = q, ke = ye) : yp(Z);
              }
              X = X.sibling;
            }
          e:
            for (X = null, Z = n; ; ) {
              if (Z.tag === 5) {
                if (X === null) {
                  X = Z;
                  try {
                    p = Z.stateNode, V ? (g = p.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (_ = Z.stateNode, T = Z.memoizedProps.style, w = T != null && T.hasOwnProperty("display") ? T.display : null, _.style.display = nt("display", w));
                  } catch (Re) {
                    un(n, n.return, Re);
                  }
                }
              } else if (Z.tag === 6) {
                if (X === null)
                  try {
                    Z.stateNode.nodeValue = V ? "" : Z.memoizedProps;
                  } catch (Re) {
                    un(n, n.return, Re);
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
          for (var o = n.return; o !== null; ) {
            if (tm(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (c.tag) {
          case 5:
            var p = c.stateNode;
            c.flags & 32 && (Ha(p, ""), c.flags &= -33);
            var g = pf(n);
            ui(n, g, p);
            break;
          case 3:
          case 4:
            var w = c.stateNode.containerInfo, _ = pf(n);
            gu(n, _, w);
            break;
          default:
            throw Error(f(161));
        }
      } catch (T) {
        un(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function rm(n, r, o) {
    ke = n, bu(n);
  }
  function bu(n, r, o) {
    for (var c = (n.mode & 1) !== 0; ke !== null; ) {
      var p = ke, g = p.child;
      if (p.tag === 22 && c) {
        var w = p.memoizedState !== null || Ms;
        if (!w) {
          var _ = p.alternate, T = _ !== null && _.memoizedState !== null || Tn;
          _ = Ms;
          var V = Tn;
          if (Ms = w, (Tn = T) && !V)
            for (ke = p; ke !== null; )
              w = ke, T = w.child, w.tag === 22 && w.memoizedState !== null ? im(p) : T !== null ? (T.return = w, ke = T) : im(p);
          for (; g !== null; )
            ke = g, bu(g), g = g.sibling;
          ke = p, Ms = _, Tn = V;
        }
        am(n);
      } else
        p.subtreeFlags & 8772 && g !== null ? (g.return = p, ke = g) : am(n);
    }
  }
  function am(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Tn || Us(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !Tn)
                  if (o === null)
                    c.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : ta(r.type, o.memoizedProps);
                    c.componentDidUpdate(p, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var g = r.updateQueue;
                g !== null && no(r, g, c);
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
                  no(r, w, o);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = _;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && o.focus();
                      break;
                    case "img":
                      T.src && (o.src = T.src);
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
          Tn || r.flags & 512 && mp(r);
        } catch (q) {
          un(r, r.return, q);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function yp(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function im(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Us(4, r);
            } catch (T) {
              un(r, o, T);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (T) {
                un(r, p, T);
              }
            }
            var g = r.return;
            try {
              mp(r);
            } catch (T) {
              un(r, g, T);
            }
            break;
          case 5:
            var w = r.return;
            try {
              mp(r);
            } catch (T) {
              un(r, w, T);
            }
        }
      } catch (T) {
        un(r, r.return, T);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, ke = _;
        break;
      }
      ke = r.return;
    }
  }
  var hf = Math.ceil, zs = ge.ReactCurrentDispatcher, bp = ge.ReactCurrentOwner, cr = ge.ReactCurrentBatchConfig, ut = 0, tn = null, on = null, jn = 0, ra = 0, Su = Xe(0), Rn = 0, As = null, Ai = 0, vf = 0, xu = 0, vo = null, mr = null, Sp = 0, wu = 1 / 0, Fi = null, mf = !1, mo = null, ci = null, kl = !1, El = null, gf = 0, ku = 0, yf = null, go = -1, yo = 0;
  function fr() {
    return ut & 6 ? yt() : go !== -1 ? go : go = yt();
  }
  function bn(n) {
    return n.mode & 1 ? ut & 2 && jn !== 0 ? jn & -jn : Hc.transition !== null ? (yo === 0 && (yo = hc()), yo) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Sd(n.type)), n) : 1;
  }
  function dr(n, r, o, c) {
    if (50 < ku)
      throw ku = 0, yf = null, Error(f(185));
    Wl(n, o, c), (!(ut & 2) || n !== tn) && (n === tn && (!(ut & 2) && (vf |= o), Rn === 4 && _a(n, jn)), pr(n, c), o === 1 && ut === 0 && !(r.mode & 1) && (wu = yt() + 500, An && Mr()));
  }
  function pr(n, r) {
    var o = n.callbackNode;
    pc(n, r);
    var c = Pa(n, n === tn ? jn : 0);
    if (c === 0)
      o !== null && vr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && vr(o), r === 1)
        n.tag === 0 ? Wd(lm.bind(null, n)) : Bd(lm.bind(null, n)), Vd(function() {
          !(ut & 6) && Mr();
        }), o = null;
      else {
        switch (gd(c)) {
          case 1:
            o = wi;
            break;
          case 4:
            o = ot;
            break;
          case 16:
            o = al;
            break;
          case 536870912:
            o = pd;
            break;
          default:
            o = al;
        }
        o = Cp(o, Eu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Eu(n, r) {
    if (go = -1, yo = 0, ut & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (Cu() && n.callbackNode !== o)
      return null;
    var c = Pa(n, n === tn ? jn : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = Sf(n, c);
    else {
      r = c;
      var p = ut;
      ut |= 2;
      var g = bf();
      (tn !== n || jn !== r) && (Fi = null, wu = yt() + 500, bo(n, r));
      do
        try {
          Zy();
          break;
        } catch (_) {
          om(n, _);
        }
      while (1);
      Zd(), zs.current = g, ut = p, on !== null ? r = 0 : (tn = null, jn = 0, r = Rn);
    }
    if (r !== 0) {
      if (r === 2 && (p = vd(n), p !== 0 && (c = p, r = xp(n, p))), r === 1)
        throw o = As, bo(n, 0), _a(n, c), pr(n, yt()), o;
      if (r === 6)
        _a(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !wp(p) && (r = Sf(n, c), r === 2 && (g = vd(n), g !== 0 && (c = g, r = xp(n, g))), r === 1))
          throw o = As, bo(n, 0), _a(n, c), pr(n, yt()), o;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            So(n, mr, Fi);
            break;
          case 3:
            if (_a(n, c), (c & 130023424) === c && (r = Sp + 500 - yt(), 10 < r)) {
              if (Pa(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                fr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Jl(So.bind(null, n, mr, Fi), r);
              break;
            }
            So(n, mr, Fi);
            break;
          case 4:
            if (_a(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var w = 31 - da(c);
              g = 1 << w, w = r[w], w > p && (p = w), c &= ~g;
            }
            if (c = p, c = yt() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * hf(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Jl(So.bind(null, n, mr, Fi), c);
              break;
            }
            So(n, mr, Fi);
            break;
          case 5:
            So(n, mr, Fi);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return pr(n, yt()), n.callbackNode === o ? Eu.bind(null, n) : null;
  }
  function xp(n, r) {
    var o = vo;
    return n.current.memoizedState.isDehydrated && (bo(n, r).flags |= 256), n = Sf(n, r), n !== 2 && (r = mr, mr = o, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    mr === null ? mr = n : mr.push.apply(mr, n);
  }
  function wp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var c = 0; c < o.length; c++) {
            var p = o[c], g = p.getSnapshot;
            p = p.value;
            try {
              if (!va(g(), p))
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
  function _a(n, r) {
    for (r &= ~xu, r &= ~vf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - da(r), c = 1 << o;
      n[o] = -1, r &= ~c;
    }
  }
  function lm(n) {
    if (ut & 6)
      throw Error(f(327));
    Cu();
    var r = Pa(n, 0);
    if (!(r & 1))
      return pr(n, yt()), null;
    var o = Sf(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = vd(n);
      c !== 0 && (r = c, o = xp(n, c));
    }
    if (o === 1)
      throw o = As, bo(n, 0), _a(n, r), pr(n, yt()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, So(n, mr, Fi), pr(n, yt()), null;
  }
  function _u(n, r) {
    var o = ut;
    ut |= 1;
    try {
      return n(r);
    } finally {
      ut = o, ut === 0 && (wu = yt() + 500, An && Mr());
    }
  }
  function _l(n) {
    El !== null && El.tag === 0 && !(ut & 6) && Cu();
    var r = ut;
    ut |= 1;
    var o = cr.transition, c = Ot;
    try {
      if (cr.transition = null, Ot = 1, n)
        return n();
    } finally {
      Ot = c, cr.transition = o, ut = r, !(ut & 6) && Mr();
    }
  }
  function kp() {
    ra = Su.current, kt(Su);
  }
  function bo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Uv(o)), on !== null)
      for (o = on.return; o !== null; ) {
        var c = o;
        switch (Qd(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && ya();
            break;
          case 3:
            bl(), kt(ln), kt(Be), Ic();
            break;
          case 5:
            rt(c);
            break;
          case 4:
            bl();
            break;
          case 13:
            kt(Pe);
            break;
          case 19:
            kt(Pe);
            break;
          case 10:
            vl(c.type._context);
            break;
          case 22:
          case 23:
            kp();
        }
        o = o.return;
      }
    if (tn = n, on = n = Cl(n.current, null), jn = ra = r, Rn = 0, As = null, xu = vf = Ai = 0, mr = vo = null, Bn !== null) {
      for (r = 0; r < Bn.length; r++)
        if (o = Bn[r], c = o.interleaved, c !== null) {
          o.interleaved = null;
          var p = c.next, g = o.pending;
          if (g !== null) {
            var w = g.next;
            g.next = p, c.next = w;
          }
          o.pending = c;
        }
      Bn = null;
    }
    return n;
  }
  function om(n, r) {
    do {
      var o = on;
      try {
        if (Zd(), Bc.current = uf, Ve) {
          for (var c = Bt.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          Ve = !1;
        }
        if (ao = 0, ft = W = Bt = null, oi = !1, na = 0, bp.current = null, o === null || o.return === null) {
          Rn = 1, As = r, on = null;
          break;
        }
        e: {
          var g = n, w = o.return, _ = o, T = r;
          if (r = jn, _.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var V = T, X = _, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var q = X.alternate;
              q ? (X.updateQueue = q.updateQueue, X.memoizedState = q.memoizedState, X.lanes = q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ye = op(w);
            if (ye !== null) {
              ye.flags &= -257, up(ye, w, _, g, r), ye.mode & 1 && qv(g, V, r), r = ye, T = V;
              var _e = r.updateQueue;
              if (_e === null) {
                var Re = /* @__PURE__ */ new Set();
                Re.add(T), r.updateQueue = Re;
              } else
                _e.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                qv(g, V, r), Ep();
                break e;
              }
              T = Error(f(426));
            }
          } else if (It && _.mode & 1) {
            var dn = op(w);
            if (dn !== null) {
              !(dn.flags & 65536) && (dn.flags |= 256), up(dn, w, _, g, r), Xd(pu(T, _));
              break e;
            }
          }
          g = T = pu(T, _), Rn !== 4 && (Rn = 2), vo === null ? vo = [g] : vo.push(g), g = w;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var z = Qv(g, T, r);
                tp(g, z);
                break e;
              case 1:
                _ = T;
                var L = g.type, H = g.stateNode;
                if (!(g.flags & 128) && (typeof L.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (ci === null || !ci.has(H)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var re = Rs(g, _, r);
                  tp(g, re);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        _p(o);
      } catch (De) {
        r = De, on === o && o !== null && (on = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function bf() {
    var n = zs.current;
    return zs.current = uf, n === null ? uf : n;
  }
  function Ep() {
    (Rn === 0 || Rn === 3 || Rn === 2) && (Rn = 4), tn === null || !(Ai & 268435455) && !(vf & 268435455) || _a(tn, jn);
  }
  function Sf(n, r) {
    var o = ut;
    ut |= 2;
    var c = bf();
    (tn !== n || jn !== r) && (Fi = null, bo(n, r));
    do
      try {
        Ky();
        break;
      } catch (p) {
        om(n, p);
      }
    while (1);
    if (Zd(), ut = o, zs.current = c, on !== null)
      throw Error(f(261));
    return tn = null, jn = 0, Rn;
  }
  function Ky() {
    for (; on !== null; )
      um(on);
  }
  function Zy() {
    for (; on !== null && !rl(); )
      um(on);
  }
  function um(n) {
    var r = cm(n.alternate, n, ra);
    n.memoizedProps = n.pendingProps, r === null ? _p(n) : on = r, bp.current = null;
  }
  function _p(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = vp(o, r), o !== null) {
          o.flags &= 32767, on = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Rn = 6, on = null;
          return;
        }
      } else if (o = Xy(o, r, ra), o !== null) {
        on = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    Rn === 0 && (Rn = 5);
  }
  function So(n, r, o) {
    var c = Ot, p = cr.transition;
    try {
      cr.transition = null, Ot = 1, Jy(n, r, o, c);
    } finally {
      cr.transition = p, Ot = c;
    }
    return null;
  }
  function Jy(n, r, o, c) {
    do
      Cu();
    while (El !== null);
    if (ut & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = o.lanes | o.childLanes;
    if (_y(n, g), n === tn && (on = tn = null, jn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || kl || (kl = !0, Cp(al, function() {
      return Cu(), null;
    })), g = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || g) {
      g = cr.transition, cr.transition = null;
      var w = Ot;
      Ot = 1;
      var _ = ut;
      ut |= 4, bp.current = null, em(n, o), nm(o, n), Tc(Zl), Gl = !!Yd, Zl = Yd = null, n.current = o, rm(o), fc(), ut = _, Ot = w, cr.transition = g;
    } else
      n.current = o;
    if (kl && (kl = !1, El = n, gf = p), g = n.pendingLanes, g === 0 && (ci = null), Qh(o.stateNode), pr(n, yt()), r !== null)
      for (c = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (mf)
      throw mf = !1, n = mo, mo = null, n;
    return gf & 1 && n.tag !== 0 && Cu(), g = n.pendingLanes, g & 1 ? n === yf ? ku++ : (ku = 0, yf = n) : ku = 0, Mr(), null;
  }
  function Cu() {
    if (El !== null) {
      var n = gd(gf), r = cr.transition, o = Ot;
      try {
        if (cr.transition = null, Ot = 16 > n ? 16 : n, El === null)
          var c = !1;
        else {
          if (n = El, El = null, gf = 0, ut & 6)
            throw Error(f(331));
          var p = ut;
          for (ut |= 4, ke = n.current; ke !== null; ) {
            var g = ke, w = g.child;
            if (ke.flags & 16) {
              var _ = g.deletions;
              if (_ !== null) {
                for (var T = 0; T < _.length; T++) {
                  var V = _[T];
                  for (ke = V; ke !== null; ) {
                    var X = ke;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, X, g);
                    }
                    var Z = X.child;
                    if (Z !== null)
                      Z.return = X, ke = Z;
                    else
                      for (; ke !== null; ) {
                        X = ke;
                        var q = X.sibling, ye = X.return;
                        if (gp(X), X === V) {
                          ke = null;
                          break;
                        }
                        if (q !== null) {
                          q.return = ye, ke = q;
                          break;
                        }
                        ke = ye;
                      }
                  }
                }
                var _e = g.alternate;
                if (_e !== null) {
                  var Re = _e.child;
                  if (Re !== null) {
                    _e.child = null;
                    do {
                      var dn = Re.sibling;
                      Re.sibling = null, Re = dn;
                    } while (Re !== null);
                  }
                }
                ke = g;
              }
            }
            if (g.subtreeFlags & 2064 && w !== null)
              w.return = g, ke = w;
            else
              e:
                for (; ke !== null; ) {
                  if (g = ke, g.flags & 2048)
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(9, g, g.return);
                    }
                  var z = g.sibling;
                  if (z !== null) {
                    z.return = g.return, ke = z;
                    break e;
                  }
                  ke = g.return;
                }
          }
          var L = n.current;
          for (ke = L; ke !== null; ) {
            w = ke;
            var H = w.child;
            if (w.subtreeFlags & 2064 && H !== null)
              H.return = w, ke = H;
            else
              e:
                for (w = L; ke !== null; ) {
                  if (_ = ke, _.flags & 2048)
                    try {
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Us(9, _);
                      }
                    } catch (De) {
                      un(_, _.return, De);
                    }
                  if (_ === w) {
                    ke = null;
                    break e;
                  }
                  var re = _.sibling;
                  if (re !== null) {
                    re.return = _.return, ke = re;
                    break e;
                  }
                  ke = _.return;
                }
          }
          if (ut = p, Mr(), Ya && typeof Ya.onPostCommitFiberRoot == "function")
            try {
              Ya.onPostCommitFiberRoot(Ku, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Ot = o, cr.transition = r;
      }
    }
    return !1;
  }
  function sm(n, r, o) {
    r = pu(o, r), r = Qv(n, r, 1), n = gl(n, r, 1), r = fr(), n !== null && (Wl(n, 1, r), pr(n, r));
  }
  function un(n, r, o) {
    if (n.tag === 3)
      sm(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          sm(r, n, o);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ci === null || !ci.has(c))) {
            n = pu(o, n), n = Rs(r, n, 1), r = gl(r, n, 1), n = fr(), r !== null && (Wl(r, 1, n), pr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function e0(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = fr(), n.pingedLanes |= n.suspendedLanes & o, tn === n && (jn & o) === o && (Rn === 4 || Rn === 3 && (jn & 130023424) === jn && 500 > yt() - Sp ? bo(n, 0) : xu |= o), pr(n, r);
  }
  function xf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Qo, Qo <<= 1, !(Qo & 130023424) && (Qo = 4194304)) : r = 1);
    var o = fr();
    n = Mi(n, r), n !== null && (Wl(n, r, o), pr(n, o));
  }
  function t0(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), xf(n, o);
  }
  function n0(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    c !== null && c.delete(r), xf(n, o);
  }
  var cm;
  cm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || ln.current)
        yn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return yn = !1, Ui(n, r, o);
        yn = !!(n.flags & 131072);
      }
    else
      yn = !1, It && r.flags & 1048576 && Gd(r, lu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        ur(n, r), n = r.pendingProps;
        var p = ga(r, Be.current);
        ce(r, o), p = Sl(null, r, c, n, p, o);
        var g = oo();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(c) ? (g = !0, Nc(r)) : g = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ep(r), p.updater = Pc, r.stateNode = p, p._reactInternals = r, Vc(r, c, n, o), r = Xv(null, r, c, !0, g, o)) : (r.tag = 0, It && g && Uc(r), _n(null, r, p, o), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (ur(n, r), n = r.pendingProps, p = c._init, c = p(c._payload), r.type = c, p = r.tag = a0(c), n = ta(c, n), p) {
            case 0:
              r = hu(null, r, c, n, o);
              break e;
            case 1:
              r = sp(null, r, c, n, o);
              break e;
            case 11:
              r = wl(null, r, c, n, o);
              break e;
            case 14:
              r = cf(null, r, c, ta(c.type, n), o);
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
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), hu(n, r, c, p, o);
      case 1:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), sp(n, r, c, p, o);
      case 3:
        e: {
          if (Kv(r), n === null)
            throw Error(f(387));
          c = r.pendingProps, g = r.memoizedState, p = g.element, En(n, r), yl(r, c, null, o);
          var w = r.memoizedState;
          if (c = w.element, g.isDehydrated)
            if (g = { element: c, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
              p = pu(Error(f(423)), r), r = ff(n, r, c, o, p);
              break e;
            } else if (c !== p) {
              p = pu(Error(f(424)), r), r = ff(n, r, c, o, p);
              break e;
            } else
              for (Ur = Ba(r.stateNode.containerInfo.firstChild), ea = r, It = !0, Sa = null, o = Wv(r, null, c, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Jt(), c === p) {
              r = Wn(n, r, o);
              break e;
            }
            _n(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return He(r), n === null && Ac(r), c = r.type, p = r.pendingProps, g = n !== null ? n.memoizedProps : null, w = p.children, ms(c, p) ? w = null : g !== null && ms(c, g) && (r.flags |= 32), Ke(n, r), _n(n, r, w, o), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return fp(n, r, o);
      case 4:
        return rp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = uu(r, null, c, o) : _n(n, r, c, o), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), wl(n, r, c, p, o);
      case 7:
        return _n(n, r, r.pendingProps, o), r.child;
      case 8:
        return _n(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return _n(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, g = r.memoizedProps, w = p.value, Et(li, c._currentValue), c._currentValue = w, g !== null)
            if (va(g.value, w)) {
              if (g.children === p.children && !ln.current) {
                r = Wn(n, r, o);
                break e;
              }
            } else
              for (g = r.child, g !== null && (g.return = r); g !== null; ) {
                var _ = g.dependencies;
                if (_ !== null) {
                  w = g.child;
                  for (var T = _.firstContext; T !== null; ) {
                    if (T.context === c) {
                      if (g.tag === 1) {
                        T = Li(-1, o & -o), T.tag = 2;
                        var V = g.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var X = V.pending;
                          X === null ? T.next = T : (T.next = X.next, X.next = T), V.pending = T;
                        }
                      }
                      g.lanes |= o, T = g.alternate, T !== null && (T.lanes |= o), Fn(
                        g.return,
                        o,
                        r
                      ), _.lanes |= o;
                      break;
                    }
                    T = T.next;
                  }
                } else if (g.tag === 10)
                  w = g.type === r.type ? null : g.child;
                else if (g.tag === 18) {
                  if (w = g.return, w === null)
                    throw Error(f(341));
                  w.lanes |= o, _ = w.alternate, _ !== null && (_.lanes |= o), Fn(w, o, r), w = g.sibling;
                } else
                  w = g.child;
                if (w !== null)
                  w.return = g;
                else
                  for (w = g; w !== null; ) {
                    if (w === r) {
                      w = null;
                      break;
                    }
                    if (g = w.sibling, g !== null) {
                      g.return = w.return, w = g;
                      break;
                    }
                    w = w.return;
                  }
                g = w;
              }
          _n(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, ce(r, o), p = fn(p), c = c(p), r.flags |= 1, _n(n, r, c, o), r.child;
      case 14:
        return c = r.type, p = ta(c, r.pendingProps), p = ta(c.type, p), cf(n, r, c, p, o);
      case 15:
        return Fr(n, r, r.type, r.pendingProps, o);
      case 17:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), ur(n, r), r.tag = 1, Xt(c) ? (n = !0, Nc(r)) : n = !1, ce(r, o), Vv(r, c, p), Vc(r, c, p, o), Xv(null, r, c, !0, n, o);
      case 19:
        return hp(n, r, o);
      case 22:
        return fo(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function Cp(n, r) {
    return qt(n, r);
  }
  function r0(n, r, o, c) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, o, c) {
    return new r0(n, r, o, c);
  }
  function Tp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function a0(n) {
    if (typeof n == "function")
      return Tp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vt)
        return 11;
      if (n === hn)
        return 14;
    }
    return 2;
  }
  function Cl(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ca(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function wf(n, r, o, c, p, g) {
    var w = 2;
    if (c = n, typeof n == "function")
      Tp(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case he:
            return xo(o.children, p, g, r);
          case it:
            w = 8, p |= 8;
            break;
          case tt:
            return n = Ca(12, o, r, p | 2), n.elementType = tt, n.lanes = g, n;
          case $e:
            return n = Ca(13, o, r, p), n.elementType = $e, n.lanes = g, n;
          case et:
            return n = Ca(19, o, r, p), n.elementType = et, n.lanes = g, n;
          case xn:
            return Hs(o, p, g, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case lt:
                  w = 10;
                  break e;
                case ht:
                  w = 9;
                  break e;
                case Vt:
                  w = 11;
                  break e;
                case hn:
                  w = 14;
                  break e;
                case Rt:
                  w = 16, c = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = Ca(w, o, r, p), r.elementType = n, r.type = c, r.lanes = g, r;
  }
  function xo(n, r, o, c) {
    return n = Ca(7, n, c, r), n.lanes = o, n;
  }
  function Hs(n, r, o, c) {
    return n = Ca(22, n, c, r), n.elementType = xn, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function js(n, r, o) {
    return n = Ca(6, n, null, r), n.lanes = o, n;
  }
  function wo(n, r, o) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function i0(n, r, o, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = md(0), this.expirationTimes = md(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = md(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function kf(n, r, o, c, p, g, w, _, T) {
    return n = new i0(n, r, o, _, T), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Ca(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ep(g), n;
  }
  function fm(n, r, o) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: o };
  }
  function Rp(n) {
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
      var o = n.type;
      if (Xt(o))
        return bs(n, o, r);
    }
    return r;
  }
  function dm(n, r, o, c, p, g, w, _, T) {
    return n = kf(o, c, !0, n, p, g, w, _, T), n.context = Rp(null), o = n.current, c = fr(), p = bn(o), g = Li(c, p), g.callback = r ?? null, gl(o, g, p), n.current.lanes = p, Wl(n, p, c), pr(n, c), n;
  }
  function Ys(n, r, o, c) {
    var p = r.current, g = fr(), w = bn(p);
    return o = Rp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Li(g, w), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = gl(p, r, w), n !== null && (dr(n, p, w, g), Yc(n, p, w)), w;
  }
  function Ef(n) {
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
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Dp(n, r) {
    pm(n, r), (n = n.alternate) && pm(n, r);
  }
  function hm() {
    return null;
  }
  var Op = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function _f(n) {
    this._internalRoot = n;
  }
  Hi.prototype.render = _f.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Ys(n, r, null, null);
  }, Hi.prototype.unmount = _f.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      _l(function() {
        Ys(null, n, null, null);
      }), r[Di] = null;
    }
  };
  function Hi(n) {
    this._internalRoot = n;
  }
  Hi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Zh();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Mt.length && r !== 0 && r < Mt[o].priority; o++)
        ;
      Mt.splice(o, 0, n), o === 0 && Jh(n);
    }
  };
  function Mp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vm() {
  }
  function l0(n, r, o, c, p) {
    if (p) {
      if (typeof c == "function") {
        var g = c;
        c = function() {
          var V = Ef(w);
          g.call(V);
        };
      }
      var w = dm(r, c, n, 0, null, !1, !1, "", vm);
      return n._reactRootContainer = w, n[Di] = w.current, au(n.nodeType === 8 ? n.parentNode : n), _l(), w;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof c == "function") {
      var _ = c;
      c = function() {
        var V = Ef(T);
        _.call(V);
      };
    }
    var T = kf(n, 0, !1, null, null, !1, !1, "", vm);
    return n._reactRootContainer = T, n[Di] = T.current, au(n.nodeType === 8 ? n.parentNode : n), _l(function() {
      Ys(r, T, o, c);
    }), T;
  }
  function Tf(n, r, o, c, p) {
    var g = o._reactRootContainer;
    if (g) {
      var w = g;
      if (typeof p == "function") {
        var _ = p;
        p = function() {
          var T = Ef(w);
          _.call(T);
        };
      }
      Ys(r, w, n, p);
    } else
      w = l0(o, r, n, p, c);
    return Ef(w);
  }
  Kh = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Bl(r.pendingLanes);
          o !== 0 && (Zu(r, o | 1), pr(r, yt()), !(ut & 6) && (wu = yt() + 500, Mr()));
        }
        break;
      case 13:
        _l(function() {
          var c = Mi(n, 1);
          if (c !== null) {
            var p = fr();
            dr(c, n, 1, p);
          }
        }), Dp(n, 1);
    }
  }, vc = function(n) {
    if (n.tag === 13) {
      var r = Mi(n, 134217728);
      if (r !== null) {
        var o = fr();
        dr(r, n, 134217728, o);
      }
      Dp(n, 134217728);
    }
  }, zt = function(n) {
    if (n.tag === 13) {
      var r = bn(n), o = Mi(n, r);
      if (o !== null) {
        var c = fr();
        dr(o, n, r, c);
      }
      Dp(n, r);
    }
  }, Zh = function() {
    return Ot;
  }, yd = function(n, r) {
    var o = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = o;
    }
  }, qr = function(n, r, o) {
    switch (r) {
      case "input":
        if (ir(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var c = o[r];
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
        ni(n, o);
        break;
      case "select":
        r = o.value, r != null && ti(n, !!o.multiple, r, !1);
    }
  }, Xu = _u, cc = _l;
  var o0 = { usingClientEntryPoint: !1, Events: [ys, iu, Ue, Vl, Bo, _u] }, Tu = { findFiberByHostInstance: ma, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, u0 = { bundleType: Tu.bundleType, version: Tu.version, rendererPackageName: Tu.rendererPackageName, rendererConfig: Tu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Nn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Tu.findFiberByHostInstance || hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rf.isDisabled && Rf.supportsFiber)
      try {
        Ku = Rf.inject(u0), Ya = Rf;
      } catch {
      }
  }
  return La.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0, La.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mp(r))
      throw Error(f(200));
    return fm(n, r, null, o);
  }, La.createRoot = function(n, r) {
    if (!Mp(n))
      throw Error(f(299));
    var o = !1, c = "", p = Op;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = kf(n, 1, !1, null, null, o, !1, c, p), n[Di] = r.current, au(n.nodeType === 8 ? n.parentNode : n), new _f(r);
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
    return _l(n);
  }, La.hydrate = function(n, r, o) {
    if (!Cf(r))
      throw Error(f(200));
    return Tf(null, n, r, !0, o);
  }, La.hydrateRoot = function(n, r, o) {
    if (!Mp(n))
      throw Error(f(405));
    var c = o != null && o.hydratedSources || null, p = !1, g = "", w = Op;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (g = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = dm(r, null, n, 1, o ?? null, p, !1, g, w), n[Di] = r.current, au(n), c)
      for (n = 0; n < c.length; n++)
        o = c[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new Hi(r);
  }, La.render = function(n, r, o) {
    if (!Cf(r))
      throw Error(f(200));
    return Tf(null, n, r, !1, o);
  }, La.unmountComponentAtNode = function(n) {
    if (!Cf(n))
      throw Error(f(40));
    return n._reactRootContainer ? (_l(function() {
      Tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Di] = null;
      });
    }), !0) : !1;
  }, La.unstable_batchedUpdates = _u, La.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!Cf(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return Tf(n, r, o, !1, c);
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
var a_;
function kA() {
  return a_ || (a_ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Po, s = SC(), f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = !1;
    function m(e) {
      h = e;
    }
    function x(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        D("warn", e, a);
      }
    }
    function b(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        D("error", e, a);
      }
    }
    function D(e, t, a) {
      {
        var l = f.ReactDebugCurrentFrame, u = l.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var R = 0, M = 1, P = 2, U = 3, $ = 4, Q = 5, ne = 6, ae = 7, se = 8, Me = 9, ie = 10, ee = 11, ge = 12, ve = 13, le = 14, he = 15, it = 16, tt = 17, lt = 18, ht = 19, Vt = 21, $e = 22, et = 23, hn = 24, Rt = 25, xn = !0, ue = !1, Ae = !1, Se = !1, gt = !1, wt = !0, Vn = !1, hr = !1, Ja = !0, wn = !0, sa = !0, nr = /* @__PURE__ */ new Set(), Cr = {}, ei = {};
    function Tr(e, t) {
      ca(e, t), ca(e + "Capture", t);
    }
    function ca(e, t) {
      Cr[e] && b("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Cr[e] = t;
      {
        var a = e.toLowerCase();
        ei[a] = e, e === "onDoubleClick" && (ei.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        nr.add(t[l]);
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function $n(e) {
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
        return b("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $n(e)), ir(e);
    }
    function za(e) {
      if (ar(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $n(e)), ir(e);
    }
    function xi(e, t) {
      if (ar(e))
        return b("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $n(e)), ir(e);
    }
    function ti(e, t) {
      if (ar(e))
        return b("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $n(e)), ir(e);
    }
    function Aa(e) {
      if (ar(e))
        return b("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", $n(e)), ir(e);
    }
    function Wr(e) {
      if (ar(e))
        return b("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", $n(e)), ir(e);
    }
    var ni = 0, Gr = 1, Fa = 2, vn = 3, Qr = 4, el = 5, Ha = 6, de = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = de + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", nt = new RegExp("^[" + de + "][" + Ne + "]*$"), Dt = {}, Zt = {};
    function Ln(e) {
      return rr.call(Zt, e) ? !0 : rr.call(Dt, e) ? !1 : nt.test(e) ? (Zt[e] = !0, !0) : (Dt[e] = !0, b("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === ni : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, l) {
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
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ht(e, t, a, l) {
      if (t === null || typeof t > "u" || Rr(e, t, a, l))
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
    function Ut(e, t, a, l, u, d, v) {
      this.acceptsBooleans = t === Fa || t === vn || t === Qr, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var jt = {}, Io = [
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
    Io.forEach(function(e) {
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
    var Vl = /[\-\:]([a-z])/g, Bo = function(e) {
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
      var t = e.replace(Vl, Bo);
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
      var t = e.replace(Vl, Bo);
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
      var t = e.replace(Vl, Bo);
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
    var Xu = "xlinkHref";
    jt[Xu] = new Ut(
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
    var cc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $l = !1;
    function Wo(e) {
      !$l && cc.test(e) && ($l = !0, b("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Il(e, t, a, l) {
      if (l.mustUseProperty) {
        var u = l.propertyName;
        return e[u];
      } else {
        fa(a, t), l.sanitizeURL && Wo("" + a);
        var d = l.attributeName, v = null;
        if (l.type === Qr) {
          if (e.hasAttribute(d)) {
            var y = e.getAttribute(d);
            return y === "" ? !0 : Ht(t, a, l, !1) ? y : y === "" + a ? a : y;
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
    function Go(e, t, a, l) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return fa(a, t), u === "" + a ? a : u;
      }
    }
    function ri(e, t, a, l) {
      var u = qr(t);
      if (!cn(t, u, l)) {
        if (Ht(t, a, u, l) && (a = null), l || u === null) {
          if (Ln(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (fa(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var v = u.mustUseProperty;
        if (v) {
          var y = u.propertyName;
          if (a === null) {
            var S = u.type;
            e[y] = S === vn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var k = u.attributeName, E = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(k);
        else {
          var N = u.type, O;
          N === vn || N === Qr && a === !0 ? O = "" : (fa(a, k), O = "" + a, u.sanitizeURL && Wo(O.toString())), E ? e.setAttributeNS(E, k, O) : e.setAttribute(k, O);
        }
      }
    }
    var tl = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), ja = Symbol.for("react.fragment"), nl = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Nn = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), vr = Symbol.for("react.legacy_hidden"), rl = Symbol.for("react.cache"), fc = Symbol.for("react.tracing_marker"), yt = Symbol.iterator, ky = "@@iterator";
    function wi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = yt && e[yt] || e[ky];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, al = 0, Gh, pd, Ku, Ya, Qh, da, qh;
    function Xh() {
    }
    Xh.__reactDisabledLog = !0;
    function Ey() {
      {
        if (al === 0) {
          Gh = console.log, pd = console.info, Ku = console.warn, Ya = console.error, Qh = console.group, da = console.groupCollapsed, qh = console.groupEnd;
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
            log: ot({}, e, {
              value: Gh
            }),
            info: ot({}, e, {
              value: pd
            }),
            warn: ot({}, e, {
              value: Ku
            }),
            error: ot({}, e, {
              value: Ya
            }),
            group: ot({}, e, {
              value: Qh
            }),
            groupCollapsed: ot({}, e, {
              value: da
            }),
            groupEnd: ot({}, e, {
              value: qh
            })
          });
        }
        al < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qo = f.ReactCurrentDispatcher, Bl;
    function Pa(e, t, a) {
      {
        if (Bl === void 0)
          try {
            throw Error();
          } catch (u) {
            var l = u.stack.trim().match(/\n( *(at )?)/);
            Bl = l && l[1] || "";
          }
        return `
` + Bl + e;
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
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Qo.current, Qo.current = null, Ey();
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
          for (var y = Y.stack.split(`
`), S = l.stack.split(`
`), k = y.length - 1, E = S.length - 1; k >= 1 && E >= 0 && y[k] !== S[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (y[k] !== S[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || y[k] !== S[E]) {
                    var N = `
` + y[k].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && pc.set(e, N), N;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        hd = !1, Qo.current = d, dc(), Error.prepareStackTrace = u;
      }
      var O = e ? e.displayName || e.name : "", j = O ? Pa(O) : "";
      return typeof e == "function" && pc.set(e, j), j;
    }
    function md(e, t, a) {
      return hc(e, !0);
    }
    function Wl(e, t, a) {
      return hc(e, !1);
    }
    function _y(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return hc(e, _y(e));
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
            return Wl(e.render);
          case Je:
            return Zu(e.type, t, a);
          case Ye: {
            var l = e, u = l._payload, d = l._init;
            try {
              return Zu(d(u), t, a);
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
        case R:
        case P:
        case he:
          return Wl(e.type);
        case ee:
          return Wl(e.type.render);
        case M:
          return md(e.type);
        default:
          return "";
      }
    }
    function gd(e) {
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
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function vc(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ja:
          return "Fragment";
        case Xr:
          return "Portal";
        case C:
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
            var u = e, d = u._payload, v = u._init;
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
    function yd(e) {
      return e.displayName || "Context";
    }
    function qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case hn:
          return "Cache";
        case Me:
          var l = a;
          return yd(l) + ".Consumer";
        case ie:
          var u = a;
          return yd(u._context) + ".Provider";
        case lt:
          return "DehydratedFragment";
        case ee:
          return Zh(a, a.render, "ForwardRef");
        case ae:
          return "Fragment";
        case Q:
          return a;
        case $:
          return "Portal";
        case U:
          return "Root";
        case ne:
          return "Text";
        case it:
          return zt(a);
        case se:
          return a === nl ? "StrictMode" : "Mode";
        case $e:
          return "Offscreen";
        case ge:
          return "Profiler";
        case Vt:
          return "Scope";
        case ve:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case Rt:
          return "TracingMarker";
        case M:
        case R:
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
    var Ju = f.ReactDebugCurrentFrame, mn = null, pa = !1;
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
      return mn === null ? "" : gd(mn);
    }
    function kn() {
      Ju.getCurrentStack = null, mn = null, pa = !1;
    }
    function Mt(e) {
      Ju.getCurrentStack = e === null ? null : es, mn = e, pa = !1;
    }
    function Cy() {
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
          return Wr(e), e;
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
    function qo(e, t) {
      Jh[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || b("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || b("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function bd(e) {
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
      return e && (bd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Xo(e) {
      var t = bd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Wr(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(y) {
            Wr(y), l = "" + y, d.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return l;
          },
          setValue: function(y) {
            Wr(y), l = "" + y;
          },
          stopTracking: function() {
            ts(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Gl(e) {
      ev(e) || (e._valueTracker = Xo(e));
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
    var gc = !1, rs = !1, yc = !1, Sd = !1;
    function ki(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function as(e, t) {
      var a = e, l = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function is(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !rs && (b("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), rs = !0), t.value !== void 0 && t.defaultValue !== void 0 && !gc && (b("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), gc = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: il(t.value != null ? t.value : l),
        controlled: ki(t)
      };
    }
    function xd(e, t) {
      var a = e, l = t.checked;
      l != null && ri(a, "checked", l, !1);
    }
    function Ko(e, t) {
      var a = e;
      {
        var l = ki(t);
        !a._wrapperState.controlled && l && !Sd && (b("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Sd = !0), a._wrapperState.controlled && !l && !yc && (b("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), yc = !0);
      }
      xd(e, t);
      var u = il(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = lr(u)) : a.value !== lr(u) && (a.value = lr(u));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ll(a, t.type, u) : t.hasOwnProperty("defaultValue") && ll(a, t.type, il(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ls(e, t, a) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var v = lr(l._wrapperState.initialValue);
        a || v !== l.value && (l.value = v), l.defaultValue = v;
      }
      var y = l.name;
      y !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, y !== "" && (l.name = y);
    }
    function nv(e, t) {
      var a = e;
      Ko(a, t), Kr(a, t);
    }
    function Kr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        fa(a, "name");
        for (var u = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var v = u[d];
          if (!(v === e || v.form !== e.form)) {
            var y = Lm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            tv(v), Ko(v, y);
          }
        }
      }
    }
    function ll(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || mc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = lr(e._wrapperState.initialValue) : e.defaultValue !== lr(a) && (e.defaultValue = lr(a)));
    }
    var bc = !1, Zo = !1, rv = !1;
    function Sc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Zo || (Zo = !0, b("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (rv || (rv = !0, b("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !bc && (b("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), bc = !0);
    }
    function wd(e, t) {
      t.value != null && e.setAttribute("value", lr(il(t.value)));
    }
    var os = Array.isArray;
    function Un(e) {
      return os(e);
    }
    var xc;
    xc = !1;
    function av() {
      var e = ha();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var iv = ["value", "defaultValue"];
    function Ty(e) {
      {
        qo("select", e);
        for (var t = 0; t < iv.length; t++) {
          var a = iv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? b("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, av()) : !e.multiple && l && b("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, av());
          }
        }
      }
    }
    function ol(e, t, a, l) {
      var u = e.options;
      if (t) {
        for (var d = a, v = {}, y = 0; y < d.length; y++)
          v["$" + d[y]] = !0;
        for (var S = 0; S < u.length; S++) {
          var k = v.hasOwnProperty("$" + u[S].value);
          u[S].selected !== k && (u[S].selected = k), k && l && (u[S].defaultSelected = !0);
        }
      } else {
        for (var E = lr(il(a)), N = null, O = 0; O < u.length; O++) {
          if (u[O].value === E) {
            u[O].selected = !0, l && (u[O].defaultSelected = !0);
            return;
          }
          N === null && !u[O].disabled && (N = u[O]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function kd(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function lv(e, t) {
      var a = e;
      Ty(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xc && (b("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xc = !0);
    }
    function Ry(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? ol(a, !!t.multiple, l, !1) : t.defaultValue != null && ol(a, !!t.multiple, t.defaultValue, !0);
    }
    function Dy(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ol(a, !!t.multiple, u, !1) : l !== !!t.multiple && (t.defaultValue != null ? ol(a, !!t.multiple, t.defaultValue, !0) : ol(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Oy(e, t) {
      var a = e, l = t.value;
      l != null && ol(a, !!t.multiple, l, !1);
    }
    var Ed = !1;
    function _d(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: lr(a._wrapperState.initialValue)
      });
      return l;
    }
    function ov(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ed && (b("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component"), Ed = !0);
      var l = t.value;
      if (l == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          b("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Un(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), l = d;
      }
      a._wrapperState = {
        initialValue: il(l)
      };
    }
    function uv(e, t) {
      var a = e, l = il(t.value), u = il(t.defaultValue);
      if (l != null) {
        var d = lr(l);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      u != null && (a.defaultValue = lr(u));
    }
    function sv(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Cd(e, t) {
      uv(e, t);
    }
    var Ei = "http://www.w3.org/1999/xhtml", My = "http://www.w3.org/1998/Math/MathML", Td = "http://www.w3.org/2000/svg";
    function wc(e) {
      switch (e) {
        case "svg":
          return Td;
        case "math":
          return My;
        default:
          return Ei;
      }
    }
    function Rd(e, t) {
      return e == null || e === Ei ? wc(t) : e === Td && t === "foreignObject" ? Ei : e;
    }
    var Ly = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, u);
        });
      } : e;
    }, kc, cv = Ly(function(e, t) {
      if (e.namespaceURI === Td && !("innerHTML" in e)) {
        kc = kc || document.createElement("div"), kc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = kc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Dr = 1, _i = 3, gn = 8, $a = 9, Ql = 11, Ec = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === _i) {
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
    }, Jo = {
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
    Object.keys(Jo).forEach(function(e) {
      pv.forEach(function(t) {
        Jo[dv(t, e)] = Jo[e];
      });
    });
    function _c(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (ti(t, e), ("" + t).trim());
    }
    var eu = /([A-Z])/g, Ny = /^ms-/;
    function Uy(e) {
      return e.replace(eu, "-$1").toLowerCase().replace(Ny, "-ms-");
    }
    var hv = function() {
    };
    {
      var vv = /^(?:webkit|moz|o)[A-Z]/, mv = /^-ms-/, us = /-(.)/g, tu = /;\s*$/, nu = {}, ru = {}, gv = !1, Dd = !1, Od = function(e) {
        return e.replace(us, function(t, a) {
          return a.toUpperCase();
        });
      }, Md = function(e) {
        nu.hasOwnProperty(e) && nu[e] || (nu[e] = !0, b(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Od(e.replace(mv, "ms-"))
        ));
      }, yv = function(e) {
        nu.hasOwnProperty(e) && nu[e] || (nu[e] = !0, b("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, bv = function(e, t) {
        ru.hasOwnProperty(t) && ru[t] || (ru[t] = !0, b(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(tu, "")));
      }, Sv = function(e, t) {
        gv || (gv = !0, b("`NaN` is an invalid value for the `%s` css style property.", e));
      }, zy = function(e, t) {
        Dd || (Dd = !0, b("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      hv = function(e, t) {
        e.indexOf("-") > -1 ? Md(e) : vv.test(e) ? yv(e) : tu.test(t) && bv(e, t), typeof t == "number" && (isNaN(t) ? Sv(e, t) : isFinite(t) || zy(e, t));
      };
    }
    var Ay = hv;
    function Fy(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var u = e[l];
            if (u != null) {
              var d = l.indexOf("--") === 0;
              t += a + (d ? l : Uy(l)) + ":", t += _c(l, u, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function xv(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var u = l.indexOf("--") === 0;
          u || Ay(l, t[l]);
          var d = _c(l, t[l], u);
          l === "float" && (l = "cssFloat"), u ? a.setProperty(l, d) : a[l] = d;
        }
    }
    function Hy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function va(e) {
      var t = {};
      for (var a in e)
        for (var l = fv[a] || [a], u = 0; u < l.length; u++)
          t[l[u]] = a;
      return t;
    }
    function ss(e, t) {
      {
        if (!t)
          return;
        var a = va(e), l = va(t), u = {};
        for (var d in a) {
          var v = a[d], y = l[d];
          if (y && v !== y) {
            var S = v + "," + y;
            if (u[S])
              continue;
            u[S] = !0, b("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Hy(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var wv = {
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
    }, kv = ot({
      menuitem: !0
    }, wv), Ev = "__html";
    function Cc(e, t) {
      if (t) {
        if (kv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && b("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ci(e, t) {
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
    var Tc = {
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
    }, _v = {
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
    }, Ia = {}, Ld = new RegExp("^(aria)-[" + Ne + "]*$"), cs = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function Nd(e, t) {
      {
        if (rr.call(Ia, t) && Ia[t])
          return !0;
        if (cs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = _v.hasOwnProperty(a) ? a : null;
          if (l == null)
            return b("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ia[t] = !0, !0;
          if (t !== l)
            return b("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Ia[t] = !0, !0;
        }
        if (Ld.test(t)) {
          var u = t.toLowerCase(), d = _v.hasOwnProperty(u) ? u : null;
          if (d == null)
            return Ia[t] = !0, !1;
          if (t !== d)
            return b("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ia[t] = !0, !0;
        }
      }
      return !0;
    }
    function Cv(e, t) {
      {
        var a = [];
        for (var l in t) {
          var u = Nd(e, l);
          u || a.push(l);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? b("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && b("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Rc(e, t) {
      Ci(e, t) || Cv(e, t);
    }
    var ql = !1;
    function Ud(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ql && (ql = !0, e === "select" && t.multiple ? b("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : b("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var zd = function() {
    };
    {
      var zn = {}, Ad = /^on./, Tv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + Ne + "]*$"), Dv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      zd = function(e, t, a, l) {
        if (rr.call(zn, t) && zn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return b("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (l != null) {
          var d = l.registrationNameDependencies, v = l.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(u) ? v[u] : null;
          if (y != null)
            return b("Invalid event handler property `%s`. Did you mean `%s`?", t, y), zn[t] = !0, !0;
          if (Ad.test(t))
            return b("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Ad.test(t))
          return Tv.test(t) && b("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Rv.test(t) || Dv.test(t))
          return !0;
        if (u === "innerhtml")
          return b("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (u === "aria")
          return b("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return b("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return b("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var S = qr(t), k = S !== null && S.type === ni;
        if (Tc.hasOwnProperty(u)) {
          var E = Tc[u];
          if (E !== t)
            return b("Invalid DOM property `%s`. Did you mean `%s`?", t, E), zn[t] = !0, !0;
        } else if (!k && t !== u)
          return b("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), zn[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, S, !1) ? (a ? b('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : b('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : k ? !0 : Rr(t, a, S, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === vn && (b("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var Ov = function(e, t, a) {
      {
        var l = [];
        for (var u in t) {
          var d = zd(e, u, t[u], a);
          d || l.push(u);
        }
        var v = l.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        l.length === 1 ? b("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && b("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Mv(e, t, a) {
      Ci(e, t) || Ov(e, t, a);
    }
    var Ti = 1, fs = 2, Xl = 4, jy = Ti | fs | Xl, ds = null;
    function ps(e) {
      ds !== null && b("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function Yy() {
      ds === null && b("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Lv(e) {
      return e === ds;
    }
    function Dc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === _i ? t.parentNode : t;
    }
    var At = null, ul = null, Ri = null;
    function au(e) {
      var t = Ou(e);
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
      ul ? Ri ? Ri.push(e) : Ri = [e] : ul = e;
    }
    function hs() {
      return ul !== null || Ri !== null;
    }
    function vs() {
      if (ul) {
        var e = ul, t = Ri;
        if (ul = null, Ri = null, au(e), t)
          for (var a = 0; a < t.length; a++)
            au(t[a]);
      }
    }
    var Kl = function(e, t) {
      return e(t);
    }, Fd = function() {
    }, Hd = !1;
    function Py() {
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
        Hd = !1, Py();
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
      var u = l[t];
      if (Yd(t, e.type, l))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
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
    function Uv(e, t, a, l, u, d, v, y, S) {
      var k = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, k);
      } catch (E) {
        this.onError(E);
      }
    }
    var Pd = Uv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Vd = document.createElement("react");
      Pd = function(t, a, l, u, d, v, y, S, k) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), N = !1, O = !0, j = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function I() {
          Vd.removeEventListener(B, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function ze() {
          N = !0, I(), a.apply(l, xe), O = !1;
        }
        var Oe, pt = !1, st = !1;
        function A(F) {
          if (Oe = F.error, pt = !0, Oe === null && F.colno === 0 && F.lineno === 0 && (st = !0), F.defaultPrevented && Oe != null && typeof Oe == "object")
            try {
              Oe._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Vd.addEventListener(B, ze, !1), E.initEvent(B, !1, !1), Vd.dispatchEvent(E), Y && Object.defineProperty(window, "event", Y), N && O && (pt ? st && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", A), !N)
          return I(), Uv.apply(this, arguments);
      };
    }
    var Vy = Pd, sl = !1, Ba = null, gs = !1, cl = null, ai = {
      onError: function(e) {
        sl = !0, Ba = e;
      }
    };
    function eo(e, t, a, l, u, d, v, y, S) {
      sl = !1, Ba = null, Vy.apply(ai, arguments);
    }
    function Di(e, t, a, l, u, d, v, y, S) {
      if (eo.apply(this, arguments), sl) {
        var k = Id();
        gs || (gs = !0, cl = k);
      }
    }
    function $d() {
      if (gs) {
        var e = cl;
        throw gs = !1, cl = null, e;
      }
    }
    function $y() {
      return sl;
    }
    function Id() {
      if (sl) {
        var e = Ba;
        return sl = !1, Ba = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ma(e) {
      return e._reactInternals;
    }
    function ys(e) {
      return e._reactInternals !== void 0;
    }
    function iu(e, t) {
      e._reactInternals = t;
    }
    var Ue = (
      /*                      */
      0
    ), fl = (
      /*                */
      1
    ), $t = (
      /*                    */
      2
    ), Xe = (
      /*                       */
      4
    ), kt = (
      /*                */
      16
    ), Et = (
      /*                 */
      32
    ), ii = (
      /*                     */
      64
    ), Be = (
      /*                   */
      128
    ), ln = (
      /*            */
      256
    ), Or = (
      /*                          */
      512
    ), ga = (
      /*                     */
      1024
    ), Xt = (
      /*                      */
      2048
    ), ya = (
      /*                    */
      4096
    ), dl = (
      /*                   */
      8192
    ), bs = (
      /*             */
      16384
    ), Nc = Xt | Xe | ii | Or | ga | bs, zv = (
      /*               */
      32767
    ), Zr = (
      /*                   */
      32768
    ), An = (
      /*                */
      65536
    ), Ss = (
      /* */
      131072
    ), Bd = (
      /*                       */
      1048576
    ), Wd = (
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
    ), to = (
      /*              */
      33554432
    ), lu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Xe | ga | 0
    ), Nr = $t | Xe | kt | Et | Or | ya | dl, or = Xe | ii | Or | dl, ba = Xt | kt, In = Mr | pl | Wd, Oi = f.ReactCurrentOwner;
    function Jr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & ($t | ya)) !== Ue && (a = t.return), l = t.return;
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
          l._warnedAboutRefsInRender || b("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(a) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var u = ma(e);
      return u ? Jr(u) === u : !1;
    }
    function Ur(e) {
      if (Jr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function It(e) {
      var t = e.alternate;
      if (!t) {
        var a = Jr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var l = e, u = t; ; ) {
        var d = l.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var y = d.return;
          if (y !== null) {
            l = u = y;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var S = d.child; S; ) {
            if (S === l)
              return Ur(d), e;
            if (S === u)
              return Ur(d), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== u.return)
          l = d, u = v;
        else {
          for (var k = !1, E = d.child; E; ) {
            if (E === l) {
              k = !0, l = d, u = v;
              break;
            }
            if (E === u) {
              k = !0, u = d, l = v;
              break;
            }
            E = E.sibling;
          }
          if (!k) {
            for (E = v.child; E; ) {
              if (E === l) {
                k = !0, l = v, u = d;
                break;
              }
              if (E === u) {
                k = !0, u = v, l = d;
                break;
              }
              E = E.sibling;
            }
            if (!k)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Sa(e) {
      var t = It(e);
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
      var t = It(e);
      return t !== null ? zc(t) : null;
    }
    function zc(e) {
      if (e.tag === Q || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== $) {
          var a = zc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ac = s.unstable_scheduleCallback, Fv = s.unstable_cancelCallback, Fc = s.unstable_shouldYield, Hv = s.unstable_requestPaint, Jt = s.unstable_now, Xd = s.unstable_getCurrentPriorityLevel, Hc = s.unstable_ImmediatePriority, ta = s.unstable_UserBlockingPriority, li = s.unstable_NormalPriority, jc = s.unstable_LowPriority, hl = s.unstable_IdlePriority, Kd = s.unstable_yieldValue, Zd = s.unstable_setDisableYieldValue, vl = null, Fn = null, ce = null, fn = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Jd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return b("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ja && (e = ot({}, e, {
          getLaneLabelMap: gl,
          injectProfilingHooks: Li
        })), vl = t.inject(e), Fn = t;
      } catch (a) {
        b("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function jv(e, t) {
      if (Fn && typeof Fn.onScheduleFiberRoot == "function")
        try {
          Fn.onScheduleFiberRoot(vl, e, t);
        } catch (a) {
          fn || (fn = !0, b("React instrumentation encountered an error: %s", a));
        }
    }
    function Mi(e, t) {
      if (Fn && typeof Fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Be) === Be;
          if (wn) {
            var l;
            switch (t) {
              case ur:
                l = Hc;
                break;
              case Wn:
                l = ta;
                break;
              case Ui:
                l = li;
                break;
              case Ds:
                l = hl;
                break;
              default:
                l = li;
                break;
            }
            Fn.onCommitFiberRoot(vl, e, l, a);
          }
        } catch (u) {
          fn || (fn = !0, b("React instrumentation encountered an error: %s", u));
        }
    }
    function ml(e) {
      if (Fn && typeof Fn.onPostCommitFiberRoot == "function")
        try {
          Fn.onPostCommitFiberRoot(vl, e);
        } catch (t) {
          fn || (fn = !0, b("React instrumentation encountered an error: %s", t));
        }
    }
    function ep(e) {
      if (Fn && typeof Fn.onCommitFiberUnmount == "function")
        try {
          Fn.onCommitFiberUnmount(vl, e);
        } catch (t) {
          fn || (fn = !0, b("React instrumentation encountered an error: %s", t));
        }
    }
    function En(e) {
      if (typeof Kd == "function" && (Zd(e), m(e)), Fn && typeof Fn.setStrictMode == "function")
        try {
          Fn.setStrictMode(vl, e);
        } catch (t) {
          fn || (fn = !0, b("React instrumentation encountered an error: %s", t));
        }
    }
    function Li(e) {
      ce = e;
    }
    function gl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Bt; a++) {
          var l = Iy(t);
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
    function yl(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function no() {
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
    function $v() {
      ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped();
    }
    function Vc(e) {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function ou() {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped();
    }
    function $c(e, t, a) {
      ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(e, t, a);
    }
    function Iv(e, t, a) {
      ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(e, t, a);
    }
    function Bv(e) {
      ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(e);
    }
    function uu() {
      ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
    }
    function Wv(e) {
      ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(e);
    }
    function xs() {
      ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped();
    }
    function Wa(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function ws() {
      ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded();
    }
    function su() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function ro(e) {
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(e);
    }
    function rp(e, t) {
      ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, t);
    }
    function bl(e, t) {
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
    ), xa = (
      /*              */
      16
    ), Ic = Math.clz32 ? Math.clz32 : ao, Bc = Math.log, ap = Math.LN2;
    function ao(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Bc(t) / ap | 0) | 0;
    }
    var Bt = 31, W = (
      /*                        */
      0
    ), ft = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), oi = (
      /*    */
      2
    ), na = (
      /*             */
      4
    ), io = (
      /*            */
      8
    ), Wt = (
      /*                     */
      16
    ), lo = (
      /*                */
      32
    ), Sl = (
      /*                       */
      4194240
    ), oo = (
      /*                        */
      64
    ), wa = (
      /*                        */
      128
    ), zr = (
      /*                        */
      256
    ), uo = (
      /*                        */
      512
    ), ks = (
      /*                        */
      1024
    ), Es = (
      /*                        */
      2048
    ), Wc = (
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
    ), so = (
      /*                       */
      1048576
    ), ef = (
      /*                       */
      2097152
    ), co = (
      /*                            */
      130023424
    ), Ni = (
      /*                             */
      4194304
    ), tf = (
      /*                             */
      8388608
    ), _s = (
      /*                             */
      16777216
    ), nf = (
      /*                             */
      33554432
    ), rf = (
      /*                             */
      67108864
    ), ip = Ni, cu = (
      /*          */
      134217728
    ), af = (
      /*                          */
      268435455
    ), fu = (
      /*               */
      268435456
    ), xl = (
      /*                        */
      536870912
    ), Ar = (
      /*                   */
      1073741824
    );
    function Iy(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & oi)
          return "InputContinuousHydration";
        if (e & na)
          return "InputContinuous";
        if (e & io)
          return "DefaultHydration";
        if (e & Wt)
          return "Default";
        if (e & lo)
          return "TransitionHydration";
        if (e & Sl)
          return "Transition";
        if (e & co)
          return "Retry";
        if (e & cu)
          return "SelectiveHydration";
        if (e & fu)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & Ar)
          return "Offscreen";
      }
    }
    var Ft = -1, lf = oo, of = Ni;
    function du(e) {
      switch (yn(e)) {
        case Ve:
          return Ve;
        case oi:
          return oi;
        case na:
          return na;
        case io:
          return io;
        case Wt:
          return Wt;
        case lo:
          return lo;
        case oo:
        case wa:
        case zr:
        case uo:
        case ks:
        case Es:
        case Wc:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case so:
        case ef:
          return e & Sl;
        case Ni:
        case tf:
        case _s:
        case nf:
        case rf:
          return e & co;
        case cu:
          return cu;
        case fu:
          return fu;
        case xl:
          return xl;
        case Ar:
          return Ar;
        default:
          return b("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Cs(e, t) {
      var a = e.pendingLanes;
      if (a === W)
        return W;
      var l = W, u = e.suspendedLanes, d = e.pingedLanes, v = a & af;
      if (v !== W) {
        var y = v & ~u;
        if (y !== W)
          l = du(y);
        else {
          var S = v & d;
          S !== W && (l = du(S));
        }
      } else {
        var k = a & ~u;
        k !== W ? l = du(k) : d !== W && (l = du(d));
      }
      if (l === W)
        return W;
      if (t !== W && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === W) {
        var E = yn(l), N = yn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === Wt && (N & Sl) !== W
        )
          return t;
      }
      (l & na) !== W && (l |= a & Wt);
      var O = e.entangledLanes;
      if (O !== W)
        for (var j = e.entanglements, Y = l & O; Y > 0; ) {
          var I = wl(Y), xe = 1 << I;
          l |= j[I], Y &= ~xe;
        }
      return l;
    }
    function Gv(e, t) {
      for (var a = e.eventTimes, l = Ft; t > 0; ) {
        var u = wl(t), d = 1 << u, v = a[u];
        v > l && (l = v), t &= ~d;
      }
      return l;
    }
    function uf(e, t) {
      switch (e) {
        case Ve:
        case oi:
        case na:
          return t + 250;
        case io:
        case Wt:
        case lo:
        case oo:
        case wa:
        case zr:
        case uo:
        case ks:
        case Es:
        case Wc:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case so:
        case ef:
          return t + 5e3;
        case Ni:
        case tf:
        case _s:
        case nf:
        case rf:
          return Ft;
        case cu:
        case fu:
        case xl:
        case Ar:
          return Ft;
        default:
          return b("Should have found matching lanes. This is a bug in React."), Ft;
      }
    }
    function By(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var y = wl(v), S = 1 << y, k = d[y];
        k === Ft ? ((S & l) === W || (S & u) !== W) && (d[y] = uf(S, t)) : k <= t && (e.expiredLanes |= S), v &= ~S;
      }
    }
    function Wy(e) {
      return du(e.pendingLanes);
    }
    function lp(e) {
      var t = e.pendingLanes & ~Ar;
      return t !== W ? t : t & Ar ? Ar : W;
    }
    function pu(e) {
      return (e & Ve) !== W;
    }
    function Ts(e) {
      return (e & af) !== W;
    }
    function sf(e) {
      return (e & co) === e;
    }
    function Gy(e) {
      var t = Ve | na | Wt;
      return (e & t) === W;
    }
    function Qv(e) {
      return (e & Sl) === e;
    }
    function Rs(e, t) {
      var a = oi | na | io | Wt;
      return (t & a) !== W;
    }
    function qv(e, t) {
      return (t & e.expiredLanes) !== W;
    }
    function op(e) {
      return (e & Sl) !== W;
    }
    function up() {
      var e = lf;
      return lf <<= 1, (lf & Sl) === W && (lf = oo), e;
    }
    function Qy() {
      var e = of;
      return of <<= 1, (of & co) === W && (of = Ni), e;
    }
    function yn(e) {
      return e & -e;
    }
    function _n(e) {
      return yn(e);
    }
    function wl(e) {
      return 31 - Ic(e);
    }
    function cf(e) {
      return wl(e);
    }
    function Fr(e, t) {
      return (e & t) !== W;
    }
    function fo(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function hu(e, t) {
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
      for (var t = [], a = 0; a < Bt; a++)
        t.push(e);
      return t;
    }
    function po(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = W, e.pingedLanes = W);
      var l = e.eventTimes, u = cf(t);
      l[u] = a;
    }
    function cp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var u = wl(l), d = 1 << u;
        a[u] = Ft, l &= ~d;
      }
    }
    function fp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function dp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = W, e.pingedLanes = W, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, u = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var y = wl(v), S = 1 << y;
        l[y] = W, u[y] = Ft, d[y] = Ft, v &= ~S;
      }
    }
    function vu(e, t) {
      for (var a = e.entangledLanes |= t, l = e.entanglements, u = a; u; ) {
        var d = wl(u), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[d] & t && (l[d] |= t), u &= ~v;
      }
    }
    function qy(e, t) {
      var a = yn(t), l;
      switch (a) {
        case na:
          l = oi;
          break;
        case Wt:
          l = io;
          break;
        case oo:
        case wa:
        case zr:
        case uo:
        case ks:
        case Es:
        case Wc:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case so:
        case ef:
        case Ni:
        case tf:
        case _s:
        case nf:
        case rf:
          l = lo;
          break;
        case xl:
          l = fu;
          break;
        default:
          l = ft;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== ft ? ft : l;
    }
    function pp(e, t, a) {
      if (Bn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = cf(a), d = 1 << u, v = l[u];
          v.add(t), a &= ~d;
        }
    }
    function df(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var u = cf(t), d = 1 << u, v = a[u];
          v.size > 0 && (v.forEach(function(y) {
            var S = y.alternate;
            (S === null || !l.has(S)) && l.add(y);
          }), v.clear()), t &= ~d;
        }
    }
    function hp(e, t) {
      return null;
    }
    var ur = Ve, Wn = na, Ui = Wt, Ds = xl, ho = ft;
    function ka() {
      return ho;
    }
    function Cn(e) {
      ho = e;
    }
    function Os(e, t) {
      var a = ho;
      try {
        return ho = e, t();
      } finally {
        ho = a;
      }
    }
    function sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Xy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function vp(e, t) {
      return e !== 0 && e < t;
    }
    function Ms(e) {
      var t = yn(e);
      return vp(ur, t) ? vp(Wn, t) ? Ts(t) ? Ui : Ds : Wn : ur;
    }
    function Tn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Zv;
    function ke(e) {
      Zv = e;
    }
    function mu(e) {
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
    var gp;
    function tm(e) {
      gp = e;
    }
    var pf = !1, gu = [], ui = null, Kt = null, Hn = null, Ea = /* @__PURE__ */ new Map(), yu = /* @__PURE__ */ new Map(), zi = [], Ga = [
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
    function si(e, t, a, l, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [l]
      };
    }
    function rm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ui = null;
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
          Ea.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          yu.delete(l);
          break;
        }
      }
    }
    function bu(e, t, a, l, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = si(t, a, l, u, d);
        if (t !== null) {
          var y = Ou(t);
          y !== null && Ls(y);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var S = e.targetContainers;
      return u !== null && S.indexOf(u) === -1 && S.push(u), e;
    }
    function am(e, t, a, l, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return ui = bu(ui, e, t, a, l, d), !0;
        }
        case "dragenter": {
          var v = u;
          return Kt = bu(Kt, e, t, a, l, v), !0;
        }
        case "mouseover": {
          var y = u;
          return Hn = bu(Hn, e, t, a, l, y), !0;
        }
        case "pointerover": {
          var S = u, k = S.pointerId;
          return Ea.set(k, bu(Ea.get(k) || null, e, t, a, l, S)), !0;
        }
        case "gotpointercapture": {
          var E = u, N = E.pointerId;
          return yu.set(N, bu(yu.get(N) || null, e, t, a, l, E)), !0;
        }
      }
      return !1;
    }
    function yp(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = Jr(t);
        if (a !== null) {
          var l = a.tag;
          if (l === ve) {
            var u = Gd(a);
            if (u !== null) {
              e.blockedOn = u, gp(e.priority, function() {
                em(a);
              });
              return;
            }
          } else if (l === U) {
            var d = a.stateNode;
            if (Tn(d)) {
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
      zi.splice(l, 0, a), l === 0 && yp(a);
    }
    function hf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = vo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          ps(d), u.target.dispatchEvent(d), Yy();
        } else {
          var v = Ou(l);
          return v !== null && Ls(v), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function zs(e, t, a) {
      hf(e) && a.delete(t);
    }
    function bp() {
      pf = !1, ui !== null && hf(ui) && (ui = null), Kt !== null && hf(Kt) && (Kt = null), Hn !== null && hf(Hn) && (Hn = null), Ea.forEach(zs), yu.forEach(zs);
    }
    function cr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, bp)));
    }
    function ut(e) {
      if (gu.length > 0) {
        cr(gu[0], e);
        for (var t = 1; t < gu.length; t++) {
          var a = gu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ui !== null && cr(ui, e), Kt !== null && cr(Kt, e), Hn !== null && cr(Hn, e);
      var l = function(y) {
        return cr(y, e);
      };
      Ea.forEach(l), yu.forEach(l);
      for (var u = 0; u < zi.length; u++) {
        var d = zi[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; zi.length > 0; ) {
        var v = zi[0];
        if (v.blockedOn !== null)
          break;
        yp(v), v.blockedOn === null && zi.shift();
      }
    }
    var tn = f.ReactCurrentBatchConfig, on = !0;
    function jn(e) {
      on = !!e;
    }
    function ra() {
      return on;
    }
    function Su(e, t, a) {
      var l = mr(t), u;
      switch (l) {
        case ur:
          u = Rn;
          break;
        case Wn:
          u = As;
          break;
        case Ui:
        default:
          u = Ai;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Rn(e, t, a, l) {
      var u = ka(), d = tn.transition;
      tn.transition = null;
      try {
        Cn(ur), Ai(e, t, a, l);
      } finally {
        Cn(u), tn.transition = d;
      }
    }
    function As(e, t, a, l) {
      var u = ka(), d = tn.transition;
      tn.transition = null;
      try {
        Cn(Wn), Ai(e, t, a, l);
      } finally {
        Cn(u), tn.transition = d;
      }
    }
    function Ai(e, t, a, l) {
      on && vf(e, t, a, l);
    }
    function vf(e, t, a, l) {
      var u = vo(e, t, a, l);
      if (u === null) {
        m0(e, t, l, xu, a), rm(e, l);
        return;
      }
      if (am(u, e, t, a, l)) {
        l.stopPropagation();
        return;
      }
      if (rm(e, l), t & Xl && nm(e)) {
        for (; u !== null; ) {
          var d = Ou(u);
          d !== null && mu(d);
          var v = vo(e, t, a, l);
          if (v === null && m0(e, t, l, xu, a), v === u)
            break;
          u = v;
        }
        u !== null && l.stopPropagation();
        return;
      }
      m0(e, t, l, null, a);
    }
    var xu = null;
    function vo(e, t, a, l) {
      xu = null;
      var u = Dc(l), d = $s(u);
      if (d !== null) {
        var v = Jr(d);
        if (v === null)
          d = null;
        else {
          var y = v.tag;
          if (y === ve) {
            var S = Gd(v);
            if (S !== null)
              return S;
            d = null;
          } else if (y === U) {
            var k = v.stateNode;
            if (Tn(k))
              return Uc(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return xu = d, null;
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
          return ur;
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
          var t = Xd();
          switch (t) {
            case Hc:
              return ur;
            case ta:
              return Wn;
            case li:
            case jc:
              return Ui;
            case hl:
              return Ds;
            default:
              return Ui;
          }
        }
        default:
          return Ui;
      }
    }
    function Sp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function wu(e, t, a) {
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
    var mo = null, ci = null, kl = null;
    function El(e) {
      return mo = e, ci = yf(), !0;
    }
    function gf() {
      mo = null, ci = null, kl = null;
    }
    function ku() {
      if (kl)
        return kl;
      var e, t = ci, a = t.length, l, u = yf(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var v = a - e;
      for (l = 1; l <= v && t[a - l] === u[d - l]; l++)
        ;
      var y = l > 1 ? 1 - l : void 0;
      return kl = u.slice(e, y), kl;
    }
    function yf() {
      return "value" in mo ? mo.value : mo.textContent;
    }
    function go(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function yo() {
      return !0;
    }
    function fr() {
      return !1;
    }
    function bn(e) {
      function t(a, l, u, d, v) {
        this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var S = e[y];
            S ? this[y] = S(d) : this[y] = d[y];
          }
        var k = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return k ? this.isDefaultPrevented = yo : this.isDefaultPrevented = fr, this.isPropagationStopped = fr, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yo);
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
        isPersistent: yo
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
    }, pr = bn(dr), Eu = ot({}, dr, {
      view: 0,
      detail: 0
    }), xp = bn(Eu), Fs, wp, _a;
    function lm(e) {
      e !== _a && (_a && e.type === "mousemove" ? (Fs = e.screenX - _a.screenX, wp = e.screenY - _a.screenY) : (Fs = 0, wp = 0), _a = e);
    }
    var _u = ot({}, Eu, {
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
        return "movementX" in e ? e.movementX : (lm(e), Fs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : wp;
      }
    }), _l = bn(_u), kp = ot({}, _u, {
      dataTransfer: 0
    }), bo = bn(kp), om = ot({}, Eu, {
      relatedTarget: 0
    }), bf = bn(om), Ep = ot({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sf = bn(Ep), Ky = ot({}, dr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zy = bn(Ky), um = ot({}, dr, {
      data: 0
    }), _p = bn(um), So = _p, Jy = {
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
    }, Cu = {
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
        var t = Jy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = go(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Cu[e.keyCode] || "Unidentified" : "";
    }
    var un = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function e0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = un[e];
      return l ? !!a[l] : !1;
    }
    function xf(e) {
      return e0;
    }
    var t0 = ot({}, Eu, {
      key: sm,
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
        return e.type === "keypress" ? go(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), n0 = bn(t0), cm = ot({}, _u, {
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
    }), Cp = bn(cm), r0 = ot({}, Eu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xf
    }), Ca = bn(r0), Tp = ot({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), a0 = bn(Tp), Cl = ot({}, _u, {
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
    }), wf = bn(Cl), xo = [9, 13, 27, 32], Hs = 229, js = Mn && "CompositionEvent" in window, wo = null;
    Mn && "documentMode" in document && (wo = document.documentMode);
    var i0 = Mn && "TextEvent" in window && !wo, kf = Mn && (!js || wo && wo > 8 && wo <= 11), fm = 32, Rp = String.fromCharCode(fm);
    function dm() {
      Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ys = !1;
    function Ef(e) {
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
    function Dp(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function hm(e, t) {
      switch (e) {
        case "keyup":
          return xo.indexOf(t.keyCode) !== -1;
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
    function _f(e) {
      return e.locale === "ko";
    }
    var Hi = !1;
    function Mp(e, t, a, l, u) {
      var d, v;
      if (js ? d = pm(t) : Hi ? hm(t, l) && (d = "onCompositionEnd") : Dp(t, l) && (d = "onCompositionStart"), !d)
        return null;
      kf && !_f(l) && (!Hi && d === "onCompositionStart" ? Hi = El(u) : d === "onCompositionEnd" && Hi && (v = ku()));
      var y = bm(a, d);
      if (y.length > 0) {
        var S = new _p(d, t, null, l, u);
        if (e.push({
          event: S,
          listeners: y
        }), v)
          S.data = v;
        else {
          var k = Op(l);
          k !== null && (S.data = k);
        }
      }
    }
    function Cf(e, t) {
      switch (e) {
        case "compositionend":
          return Op(t);
        case "keypress":
          var a = t.which;
          return a !== fm ? null : (Ys = !0, Rp);
        case "textInput":
          var l = t.data;
          return l === Rp && Ys ? null : l;
        default:
          return null;
      }
    }
    function vm(e, t) {
      if (Hi) {
        if (e === "compositionend" || !js && hm(e, t)) {
          var a = ku();
          return gf(), Hi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ef(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return kf && !_f(t) ? null : t.data;
        default:
          return null;
      }
    }
    function l0(e, t, a, l, u) {
      var d;
      if (i0 ? d = Cf(t, l) : d = vm(t, l), !d)
        return null;
      var v = bm(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new So("onBeforeInput", "beforeinput", null, l, u);
        e.push({
          event: y,
          listeners: v
        }), y.data = d;
      }
    }
    function Tf(e, t, a, l, u, d, v) {
      Mp(e, t, a, l, u), l0(e, t, a, l, u);
    }
    var o0 = {
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
    function Tu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!o0[e.type] : t === "textarea";
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
    function u0(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function Rf() {
      Tr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      Oc(l);
      var u = bm(t, "onChange");
      if (u.length > 0) {
        var d = new pr("onChange", "change", null, a, l);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var r = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, o, e, Dc(e)), jd(g, t);
    }
    function g(e) {
      p1(e, 0);
    }
    function w(e) {
      var t = Uf(e);
      if (tv(t))
        return e;
    }
    function _(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    Mn && (T = u0("input") && (!document.documentMode || document.documentMode > 9));
    function V(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", Z);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", Z), r = null, o = null);
    }
    function Z(e) {
      e.propertyName === "value" && w(o) && p(e);
    }
    function q(e, t, a) {
      e === "focusin" ? (X(), V(t, a)) : e === "focusout" && X();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(o);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Re(e, t) {
      if (e === "click")
        return w(t);
    }
    function dn(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ll(e, "number", e.value);
    }
    function L(e, t, a, l, u, d, v) {
      var y = a ? Uf(a) : window, S, k;
      if (c(y) ? S = _ : Tu(y) ? T ? S = dn : (S = ye, k = q) : _e(y) && (S = Re), S) {
        var E = S(t, a);
        if (E) {
          n(e, E, l, u);
          return;
        }
      }
      k && k(t, y, a), t === "focusout" && z(y);
    }
    function H() {
      ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function re(e, t, a, l, u, d, v) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !Lv(l)) {
        var k = l.relatedTarget || l.fromElement;
        if (k && ($s(k) || Bp(k)))
          return;
      }
      if (!(!S && !y)) {
        var E;
        if (u.window === u)
          E = u;
        else {
          var N = u.ownerDocument;
          N ? E = N.defaultView || N.parentWindow : E = window;
        }
        var O, j;
        if (S) {
          var Y = l.relatedTarget || l.toElement;
          if (O = a, j = Y ? $s(Y) : null, j !== null) {
            var I = Jr(j);
            (j !== I || j.tag !== Q && j.tag !== ne) && (j = null);
          }
        } else
          O = null, j = a;
        if (O !== j) {
          var xe = _l, ze = "onMouseLeave", Oe = "onMouseEnter", pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = Cp, ze = "onPointerLeave", Oe = "onPointerEnter", pt = "pointer");
          var st = O == null ? E : Uf(O), A = j == null ? E : Uf(j), B = new xe(ze, pt + "leave", O, l, u);
          B.target = st, B.relatedTarget = A;
          var F = null, J = $s(u);
          if (J === a) {
            var we = new xe(Oe, pt + "enter", j, l, u);
            we.target = A, we.relatedTarget = st, F = we;
          }
          VC(e, B, F, O, j);
        }
      }
    }
    function De(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : De;
    function Le(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!rr.call(t, d) || !Ce(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function We(e) {
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
      for (var a = We(e), l = 0, u = 0; a; ) {
        if (a.nodeType === _i) {
          if (u = l + a.textContent.length, l <= t && u >= t)
            return {
              node: a,
              offset: t - l
            };
          l = u;
        }
        a = We(Yn(a));
      }
    }
    function Tl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var u = l.anchorNode, d = l.anchorOffset, v = l.focusNode, y = l.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return s0(e, u, d, v, y);
    }
    function s0(e, t, a, l, u) {
      var d = 0, v = -1, y = -1, S = 0, k = 0, E = e, N = null;
      e:
        for (; ; ) {
          for (var O = null; E === t && (a === 0 || E.nodeType === _i) && (v = d + a), E === l && (u === 0 || E.nodeType === _i) && (y = d + u), E.nodeType === _i && (d += E.nodeValue.length), (O = E.firstChild) !== null; )
            N = E, E = O;
          for (; ; ) {
            if (E === e)
              break e;
            if (N === t && ++S === a && (v = d), N === l && ++k === u && (y = d), (O = E.nextSibling) !== null)
              break;
            E = N, N = E.parentNode;
          }
          E = O;
        }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function kC(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var u = l.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), y = t.end === void 0 ? v : Math.min(t.end, d);
        if (!u.extend && v > y) {
          var S = y;
          y = v, v = S;
        }
        var k = mt(e, v), E = mt(e, y);
        if (k && E) {
          if (u.rangeCount === 1 && u.anchorNode === k.node && u.anchorOffset === k.offset && u.focusNode === E.node && u.focusOffset === E.offset)
            return;
          var N = a.createRange();
          N.setStart(k.node, k.offset), u.removeAllRanges(), v > y ? (u.addRange(N), u.extend(E.node, E.offset)) : (N.setEnd(E.node, E.offset), u.addRange(N));
        }
      }
    }
    function t1(e) {
      return e && e.nodeType === _i;
    }
    function n1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : t1(e) ? !1 : t1(t) ? n1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function EC(e) {
      return e && e.ownerDocument && n1(e.ownerDocument.documentElement, e);
    }
    function _C(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function r1() {
      for (var e = window, t = mc(); t instanceof e.HTMLIFrameElement; ) {
        if (_C(t))
          e = t.contentWindow;
        else
          return t;
        t = mc(e.document);
      }
      return t;
    }
    function c0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function CC() {
      var e = r1();
      return {
        focusedElem: e,
        selectionRange: c0(e) ? RC(e) : null
      };
    }
    function TC(e) {
      var t = r1(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && EC(a)) {
        l !== null && c0(a) && DC(a, l);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === Dr && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < u.length; v++) {
          var y = u[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function RC(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Tl(e), t || {
        start: 0,
        end: 0
      };
    }
    function DC(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : kC(e, t);
    }
    var OC = Mn && "documentMode" in document && document.documentMode <= 11;
    function MC() {
      Tr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, f0 = null, Lp = null, d0 = !1;
    function LC(e) {
      if ("selectionStart" in e && c0(e))
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
    function NC(e) {
      return e.window === e ? e.document : e.nodeType === $a ? e : e.ownerDocument;
    }
    function a1(e, t, a) {
      var l = NC(a);
      if (!(d0 || Df == null || Df !== mc(l))) {
        var u = LC(Df);
        if (!Lp || !Le(Lp, u)) {
          Lp = u;
          var d = bm(f0, "onSelect");
          if (d.length > 0) {
            var v = new pr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: d
            }), v.target = Df;
          }
        }
      }
    }
    function UC(e, t, a, l, u, d, v) {
      var y = a ? Uf(a) : window;
      switch (t) {
        case "focusin":
          (Tu(y) || y.contentEditable === "true") && (Df = y, f0 = a, Lp = null);
          break;
        case "focusout":
          Df = null, f0 = null, Lp = null;
          break;
        case "mousedown":
          d0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          d0 = !1, a1(e, l, u);
          break;
        case "selectionchange":
          if (OC)
            break;
        case "keydown":
        case "keyup":
          a1(e, l, u);
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
    }, p0 = {}, i1 = {};
    Mn && (i1 = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function gm(e) {
      if (p0[e])
        return p0[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in i1)
          return p0[e] = t[a];
      return e;
    }
    var l1 = gm("animationend"), o1 = gm("animationiteration"), u1 = gm("animationstart"), s1 = gm("transitionend"), c1 = /* @__PURE__ */ new Map(), f1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ru(e, t) {
      c1.set(e, t), Tr(t, [e]);
    }
    function zC() {
      for (var e = 0; e < f1.length; e++) {
        var t = f1[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Ru(a, "on" + l);
      }
      Ru(l1, "onAnimationEnd"), Ru(o1, "onAnimationIteration"), Ru(u1, "onAnimationStart"), Ru("dblclick", "onDoubleClick"), Ru("focusin", "onFocus"), Ru("focusout", "onBlur"), Ru(s1, "onTransitionEnd");
    }
    function AC(e, t, a, l, u, d, v) {
      var y = c1.get(t);
      if (y !== void 0) {
        var S = pr, k = t;
        switch (t) {
          case "keypress":
            if (go(l) === 0)
              return;
          case "keydown":
          case "keyup":
            S = n0;
            break;
          case "focusin":
            k = "focus", S = bf;
            break;
          case "focusout":
            k = "blur", S = bf;
            break;
          case "beforeblur":
          case "afterblur":
            S = bf;
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
            S = _l;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = bo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Ca;
            break;
          case l1:
          case o1:
          case u1:
            S = Sf;
            break;
          case s1:
            S = a0;
            break;
          case "scroll":
            S = xp;
            break;
          case "wheel":
            S = wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Zy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Cp;
            break;
        }
        var E = (d & Xl) !== 0;
        {
          var N = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = YC(a, y, l.type, E, N);
          if (O.length > 0) {
            var j = new S(y, k, null, l, u);
            e.push({
              event: j,
              listeners: O
            });
          }
        }
      }
    }
    zC(), H(), Rf(), MC(), dm();
    function FC(e, t, a, l, u, d, v) {
      AC(e, t, a, l, u, d);
      var y = (d & jy) === 0;
      y && (re(e, t, a, l, u), L(e, t, a, l, u), UC(e, t, a, l, u), Tf(e, t, a, l, u));
    }
    var Np = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], h0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Np));
    function d1(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Di(l, t, void 0, e), e.currentTarget = null;
    }
    function HC(e, t, a) {
      var l;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], v = d.instance, y = d.currentTarget, S = d.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          d1(e, S, y), l = v;
        }
      else
        for (var k = 0; k < t.length; k++) {
          var E = t[k], N = E.instance, O = E.currentTarget, j = E.listener;
          if (N !== l && e.isPropagationStopped())
            return;
          d1(e, j, O), l = N;
        }
    }
    function p1(e, t) {
      for (var a = (t & Xl) !== 0, l = 0; l < e.length; l++) {
        var u = e[l], d = u.event, v = u.listeners;
        HC(d, v, a);
      }
      $d();
    }
    function jC(e, t, a, l, u) {
      var d = Dc(a), v = [];
      FC(v, e, l, a, d, t), p1(v, t);
    }
    function nn(e, t) {
      h0.has(e) || b('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = vR(t), u = $C(e, a);
      l.has(u) || (h1(t, e, fs, a), l.add(u));
    }
    function v0(e, t, a) {
      h0.has(e) && !t && b('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= Xl), h1(a, e, l, t);
    }
    var ym = "_reactListening" + Math.random().toString(36).slice(2);
    function Up(e) {
      if (!e[ym]) {
        e[ym] = !0, nr.forEach(function(a) {
          a !== "selectionchange" && (h0.has(a) || v0(a, !1, e), v0(a, !0, e));
        });
        var t = e.nodeType === $a ? e : e.ownerDocument;
        t !== null && (t[ym] || (t[ym] = !0, v0("selectionchange", !1, t)));
      }
    }
    function h1(e, t, a, l, u) {
      var d = Su(e, t, a), v = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Fi(e, t, d, v) : wu(e, t, d) : v !== void 0 ? mf(e, t, d, v) : Sp(e, t, d);
    }
    function v1(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function m0(e, t, a, l, u) {
      var d = l;
      if (!(t & Ti) && !(t & fs)) {
        var v = u;
        if (l !== null) {
          var y = l;
          e:
            for (; ; ) {
              if (y === null)
                return;
              var S = y.tag;
              if (S === U || S === $) {
                var k = y.stateNode.containerInfo;
                if (v1(k, v))
                  break;
                if (S === $)
                  for (var E = y.return; E !== null; ) {
                    var N = E.tag;
                    if (N === U || N === $) {
                      var O = E.stateNode.containerInfo;
                      if (v1(O, v))
                        return;
                    }
                    E = E.return;
                  }
                for (; k !== null; ) {
                  var j = $s(k);
                  if (j === null)
                    return;
                  var Y = j.tag;
                  if (Y === Q || Y === ne) {
                    y = d = j;
                    continue e;
                  }
                  k = k.parentNode;
                }
              }
              y = y.return;
            }
        }
      }
      jd(function() {
        return jC(e, t, a, d);
      });
    }
    function zp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function YC(e, t, a, l, u, d) {
      for (var v = t !== null ? t + "Capture" : null, y = l ? v : t, S = [], k = e, E = null; k !== null; ) {
        var N = k, O = N.stateNode, j = N.tag;
        if (j === Q && O !== null && (E = O, y !== null)) {
          var Y = Zl(k, y);
          Y != null && S.push(zp(k, Y, E));
        }
        if (u)
          break;
        k = k.return;
      }
      return S;
    }
    function bm(e, t) {
      for (var a = t + "Capture", l = [], u = e; u !== null; ) {
        var d = u, v = d.stateNode, y = d.tag;
        if (y === Q && v !== null) {
          var S = v, k = Zl(u, a);
          k != null && l.unshift(zp(u, k, S));
          var E = Zl(u, t);
          E != null && l.push(zp(u, E, S));
        }
        u = u.return;
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
    function PC(e, t) {
      for (var a = e, l = t, u = 0, d = a; d; d = Mf(d))
        u++;
      for (var v = 0, y = l; y; y = Mf(y))
        v++;
      for (; u - v > 0; )
        a = Mf(a), u--;
      for (; v - u > 0; )
        l = Mf(l), v--;
      for (var S = u; S--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Mf(a), l = Mf(l);
      }
      return null;
    }
    function m1(e, t, a, l, u) {
      for (var d = t._reactName, v = [], y = a; y !== null && y !== l; ) {
        var S = y, k = S.alternate, E = S.stateNode, N = S.tag;
        if (k !== null && k === l)
          break;
        if (N === Q && E !== null) {
          var O = E;
          if (u) {
            var j = Zl(y, d);
            j != null && v.unshift(zp(y, j, O));
          } else if (!u) {
            var Y = Zl(y, d);
            Y != null && v.push(zp(y, Y, O));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function VC(e, t, a, l, u) {
      var d = l && u ? PC(l, u) : null;
      l !== null && m1(e, t, l, d, !1), u !== null && a !== null && m1(e, a, u, d, !0);
    }
    function $C(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ta = !1, Ap = "dangerouslySetInnerHTML", Sm = "suppressContentEditableWarning", Du = "suppressHydrationWarning", g1 = "autoFocus", Ps = "children", Vs = "style", xm = "__html", g0, wm, Fp, y1, km, b1, S1;
    g0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, wm = function(e, t) {
      Rc(e, t), Ud(e, t), Mv(e, t, {
        registrationNameDependencies: Cr,
        possibleRegistrationNames: ei
      });
    }, b1 = Mn && !document.documentMode, Fp = function(e, t, a) {
      if (!Ta) {
        var l = Em(a), u = Em(t);
        u !== l && (Ta = !0, b("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(l)));
      }
    }, y1 = function(e) {
      if (!Ta) {
        Ta = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), b("Extra attributes from the server: %s", t);
      }
    }, km = function(e, t) {
      t === !1 ? b("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : b("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, S1 = function(e, t) {
      var a = e.namespaceURI === Ei ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var IC = /\r\n?/g, BC = /\u0000|\uFFFD/g;
    function Em(e) {
      Aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(IC, `
`).replace(BC, "");
    }
    function _m(e, t, a, l) {
      var u = Em(t), d = Em(e);
      if (d !== u && (l && (Ta || (Ta = !0, b('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && xn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function x1(e) {
      return e.nodeType === $a ? e : e.ownerDocument;
    }
    function WC() {
    }
    function Cm(e) {
      e.onclick = WC;
    }
    function GC(e, t, a, l, u) {
      for (var d in l)
        if (l.hasOwnProperty(d)) {
          var v = l[d];
          if (d === Vs)
            v && Object.freeze(v), xv(t, v);
          else if (d === Ap) {
            var y = v ? v[xm] : void 0;
            y != null && cv(t, y);
          } else if (d === Ps)
            if (typeof v == "string") {
              var S = e !== "textarea" || v !== "";
              S && Ec(t, v);
            } else
              typeof v == "number" && Ec(t, "" + v);
          else
            d === Sm || d === Du || d === g1 || (Cr.hasOwnProperty(d) ? v != null && (typeof v != "function" && km(d, v), d === "onScroll" && nn("scroll", t)) : v != null && ri(t, d, v, u));
        }
    }
    function QC(e, t, a, l) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], v = t[u + 1];
        d === Vs ? xv(e, v) : d === Ap ? cv(e, v) : d === Ps ? Ec(e, v) : ri(e, d, v, l);
      }
    }
    function qC(e, t, a, l) {
      var u, d = x1(a), v, y = l;
      if (y === Ei && (y = wc(e)), y === Ei) {
        if (u = Ci(e, t), !u && e !== e.toLowerCase() && b("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = d.createElement("div");
          S.innerHTML = "<script><\/script>";
          var k = S.firstChild;
          v = S.removeChild(k);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var E = v;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        v = d.createElementNS(y, e);
      return y === Ei && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !rr.call(g0, e) && (g0[e] = !0, b("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function XC(e, t) {
      return x1(t).createTextNode(e);
    }
    function KC(e, t, a, l) {
      var u = Ci(t, a);
      wm(t, a);
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
          Sc(e, a), d = a;
          break;
        case "select":
          lv(e, a), d = kd(e, a), nn("invalid", e);
          break;
        case "textarea":
          ov(e, a), d = _d(e, a), nn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Cc(t, d), GC(t, e, l, d, u), t) {
        case "input":
          Gl(e), ls(e, a, !1);
          break;
        case "textarea":
          Gl(e), sv(e);
          break;
        case "option":
          wd(e, a);
          break;
        case "select":
          Ry(e, a);
          break;
        default:
          typeof d.onClick == "function" && Cm(e);
          break;
      }
    }
    function ZC(e, t, a, l, u) {
      wm(t, l);
      var d = null, v, y;
      switch (t) {
        case "input":
          v = as(e, a), y = as(e, l), d = [];
          break;
        case "select":
          v = kd(e, a), y = kd(e, l), d = [];
          break;
        case "textarea":
          v = _d(e, a), y = _d(e, l), d = [];
          break;
        default:
          v = a, y = l, typeof v.onClick != "function" && typeof y.onClick == "function" && Cm(e);
          break;
      }
      Cc(t, y);
      var S, k, E = null;
      for (S in v)
        if (!(y.hasOwnProperty(S) || !v.hasOwnProperty(S) || v[S] == null))
          if (S === Vs) {
            var N = v[S];
            for (k in N)
              N.hasOwnProperty(k) && (E || (E = {}), E[k] = "");
          } else
            S === Ap || S === Ps || S === Sm || S === Du || S === g1 || (Cr.hasOwnProperty(S) ? d || (d = []) : (d = d || []).push(S, null));
      for (S in y) {
        var O = y[S], j = v != null ? v[S] : void 0;
        if (!(!y.hasOwnProperty(S) || O === j || O == null && j == null))
          if (S === Vs)
            if (O && Object.freeze(O), j) {
              for (k in j)
                j.hasOwnProperty(k) && (!O || !O.hasOwnProperty(k)) && (E || (E = {}), E[k] = "");
              for (k in O)
                O.hasOwnProperty(k) && j[k] !== O[k] && (E || (E = {}), E[k] = O[k]);
            } else
              E || (d || (d = []), d.push(S, E)), E = O;
          else if (S === Ap) {
            var Y = O ? O[xm] : void 0, I = j ? j[xm] : void 0;
            Y != null && I !== Y && (d = d || []).push(S, Y);
          } else
            S === Ps ? (typeof O == "string" || typeof O == "number") && (d = d || []).push(S, "" + O) : S === Sm || S === Du || (Cr.hasOwnProperty(S) ? (O != null && (typeof O != "function" && km(S, O), S === "onScroll" && nn("scroll", e)), !d && j !== O && (d = [])) : (d = d || []).push(S, O));
      }
      return E && (ss(E, y[Vs]), (d = d || []).push(Vs, E)), d;
    }
    function JC(e, t, a, l, u) {
      a === "input" && u.type === "radio" && u.name != null && xd(e, u);
      var d = Ci(a, l), v = Ci(a, u);
      switch (QC(e, t, d, v), a) {
        case "input":
          Ko(e, u);
          break;
        case "textarea":
          uv(e, u);
          break;
        case "select":
          Dy(e, u);
          break;
      }
    }
    function eT(e) {
      {
        var t = e.toLowerCase();
        return Tc.hasOwnProperty(t) && Tc[t] || null;
      }
    }
    function tT(e, t, a, l, u, d, v) {
      var y, S;
      switch (y = Ci(t, a), wm(t, a), t) {
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
          for (var k = 0; k < Np.length; k++)
            nn(Np[k], e);
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
          Sc(e, a);
          break;
        case "select":
          lv(e, a), nn("invalid", e);
          break;
        case "textarea":
          ov(e, a), nn("invalid", e);
          break;
      }
      Cc(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var E = e.attributes, N = 0; N < E.length; N++) {
          var O = E[N].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(E[N].name);
          }
        }
      }
      var j = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var I = a[Y];
          if (Y === Ps)
            typeof I == "string" ? e.textContent !== I && (a[Du] !== !0 && _m(e.textContent, I, d, v), j = [Ps, I]) : typeof I == "number" && e.textContent !== "" + I && (a[Du] !== !0 && _m(e.textContent, I, d, v), j = [Ps, "" + I]);
          else if (Cr.hasOwnProperty(Y))
            I != null && (typeof I != "function" && km(Y, I), Y === "onScroll" && nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var xe = void 0, ze = y && Vn ? null : qr(Y);
            if (a[Du] !== !0) {
              if (!(Y === Sm || Y === Du || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === Ap) {
                  var Oe = e.innerHTML, pt = I ? I[xm] : void 0;
                  if (pt != null) {
                    var st = S1(e, pt);
                    st !== Oe && Fp(Y, Oe, st);
                  }
                } else if (Y === Vs) {
                  if (S.delete(Y), b1) {
                    var A = Fy(I);
                    xe = e.getAttribute("style"), A !== xe && Fp(Y, xe, A);
                  }
                } else if (y && !Vn)
                  S.delete(Y.toLowerCase()), xe = Go(e, Y, I), I !== xe && Fp(Y, xe, I);
                else if (!cn(Y, ze, y) && !Ht(Y, I, ze, y)) {
                  var B = !1;
                  if (ze !== null)
                    S.delete(ze.attributeName), xe = Il(e, Y, I, ze);
                  else {
                    var F = l;
                    if (F === Ei && (F = wc(t)), F === Ei)
                      S.delete(Y.toLowerCase());
                    else {
                      var J = eT(Y);
                      J !== null && J !== Y && (B = !0, S.delete(J)), S.delete(Y);
                    }
                    xe = Go(e, Y, I);
                  }
                  var we = Vn;
                  !we && I !== xe && !B && Fp(Y, xe, I);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Du] !== !0 && y1(S), t) {
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
          typeof a.onClick == "function" && Cm(e);
          break;
      }
      return j;
    }
    function nT(e, t, a) {
      var l = e.nodeValue !== t;
      return l;
    }
    function y0(e, t) {
      {
        if (Ta)
          return;
        Ta = !0, b("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function b0(e, t) {
      {
        if (Ta)
          return;
        Ta = !0, b('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function S0(e, t, a) {
      {
        if (Ta)
          return;
        Ta = !0, b("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function x0(e, t) {
      {
        if (t === "" || Ta)
          return;
        Ta = !0, b('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function rT(e, t, a) {
      switch (t) {
        case "input":
          nv(e, a);
          return;
        case "textarea":
          Cd(e, a);
          return;
        case "select":
          Oy(e, a);
          return;
      }
    }
    var Hp = function() {
    }, jp = function() {
    };
    {
      var aT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], w1 = [
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
      ], iT = w1.concat(["button"]), lT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], k1 = {
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
        var a = ot({}, e || k1), l = {
          tag: t
        };
        return w1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), iT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), aT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var oT = function(e, t) {
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
            return lT.indexOf(t) === -1;
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
      }, uT = function(e, t) {
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
      }, E1 = {};
      Hp = function(e, t, a) {
        a = a || k1;
        var l = a.current, u = l && l.tag;
        t != null && (e != null && b("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = oT(e, u) ? null : l, v = d ? null : uT(e, a), y = d || v;
        if (y) {
          var S = y.tag, k = !!d + "|" + e + "|" + S;
          if (!E1[k]) {
            E1[k] = !0;
            var E = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", d) {
              var O = "";
              S === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), b("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, S, N, O);
            } else
              b("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, S);
          }
        }
      };
    }
    var Tm = "suppressHydrationWarning", Rm = "$", Dm = "/$", Yp = "$?", Pp = "$!", sT = "style", w0 = null, k0 = null;
    function cT(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case $a:
        case Ql: {
          t = l === $a ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Rd(null, "");
          break;
        }
        default: {
          var d = l === gn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = Rd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), S = jp(null, y);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function fT(e, t, a) {
      {
        var l = e, u = Rd(l.namespace, t), d = jp(l.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function zA(e) {
      return e;
    }
    function dT(e) {
      w0 = ra(), k0 = CC();
      var t = null;
      return jn(!1), t;
    }
    function pT(e) {
      TC(k0), jn(w0), w0 = null, k0 = null;
    }
    function hT(e, t, a, l, u) {
      var d;
      {
        var v = l;
        if (Hp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, S = jp(v.ancestorInfo, e);
          Hp(null, y, S);
        }
        d = v.namespace;
      }
      var k = qC(e, t, a, d);
      return Ip(u, k), M0(k, t), k;
    }
    function vT(e, t) {
      e.appendChild(t);
    }
    function mT(e, t, a, l, u) {
      switch (KC(e, t, a, l), t) {
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
    function gT(e, t, a, l, u, d) {
      {
        var v = d;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var y = "" + l.children, S = jp(v.ancestorInfo, t);
          Hp(null, y, S);
        }
      }
      return ZC(e, t, a, l);
    }
    function E0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yT(e, t, a, l) {
      {
        var u = a;
        Hp(null, e, u.ancestorInfo);
      }
      var d = XC(e, t);
      return Ip(l, d), d;
    }
    function bT() {
      var e = window.event;
      return e === void 0 ? Ui : mr(e.type);
    }
    var _0 = typeof setTimeout == "function" ? setTimeout : void 0, ST = typeof clearTimeout == "function" ? clearTimeout : void 0, C0 = -1, _1 = typeof Promise == "function" ? Promise : void 0, xT = typeof queueMicrotask == "function" ? queueMicrotask : typeof _1 < "u" ? function(e) {
      return _1.resolve(null).then(e).catch(wT);
    } : _0;
    function wT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function kT(e, t, a, l) {
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
    function ET(e, t, a, l, u, d) {
      JC(e, t, a, l, u), M0(e, u);
    }
    function C1(e) {
      Ec(e, "");
    }
    function _T(e, t, a) {
      e.nodeValue = a;
    }
    function CT(e, t) {
      e.appendChild(t);
    }
    function TT(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Cm(a);
    }
    function RT(e, t, a) {
      e.insertBefore(t, a);
    }
    function DT(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function OT(e, t) {
      e.removeChild(t);
    }
    function MT(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function T0(e, t) {
      var a = t, l = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === gn) {
          var d = u.data;
          if (d === Dm)
            if (l === 0) {
              e.removeChild(u), ut(t);
              return;
            } else
              l--;
          else
            (d === Rm || d === Yp || d === Pp) && l++;
        }
        a = u;
      } while (a);
      ut(t);
    }
    function LT(e, t) {
      e.nodeType === gn ? T0(e.parentNode, t) : e.nodeType === Dr && T0(e, t), ut(e);
    }
    function NT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function UT(e) {
      e.nodeValue = "";
    }
    function zT(e, t) {
      e = e;
      var a = t[sT], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = _c("display", l);
    }
    function AT(e, t) {
      e.nodeValue = t;
    }
    function FT(e) {
      e.nodeType === Dr ? e.textContent = "" : e.nodeType === $a && e.documentElement && e.removeChild(e.documentElement);
    }
    function HT(e, t, a) {
      return e.nodeType !== Dr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jT(e, t) {
      return t === "" || e.nodeType !== _i ? null : e;
    }
    function YT(e) {
      return e.nodeType !== gn ? null : e;
    }
    function T1(e) {
      return e.data === Yp;
    }
    function R0(e) {
      return e.data === Pp;
    }
    function PT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, u;
      return t && (a = t.dgst, l = t.msg, u = t.stck), {
        message: l,
        digest: a,
        stack: u
      };
    }
    function VT(e, t) {
      e._reactRetry = t;
    }
    function Om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Dr || t === _i)
          break;
        if (t === gn) {
          var a = e.data;
          if (a === Rm || a === Pp || a === Yp)
            break;
          if (a === Dm)
            return null;
        }
      }
      return e;
    }
    function Vp(e) {
      return Om(e.nextSibling);
    }
    function $T(e) {
      return Om(e.firstChild);
    }
    function IT(e) {
      return Om(e.firstChild);
    }
    function BT(e) {
      return Om(e.nextSibling);
    }
    function WT(e, t, a, l, u, d, v) {
      Ip(d, e), M0(e, a);
      var y;
      {
        var S = u;
        y = S.namespace;
      }
      var k = (d.mode & rt) !== He;
      return tT(e, t, a, y, l, k, v);
    }
    function GT(e, t, a, l) {
      return Ip(a, e), a.mode & rt, nT(e, t);
    }
    function QT(e, t) {
      Ip(t, e);
    }
    function qT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Dm) {
            if (a === 0)
              return Vp(t);
            a--;
          } else
            (l === Rm || l === Pp || l === Yp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function R1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var l = t.data;
          if (l === Rm || l === Pp || l === Yp) {
            if (a === 0)
              return t;
            a--;
          } else
            l === Dm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function XT(e) {
      ut(e);
    }
    function KT(e) {
      ut(e);
    }
    function ZT(e) {
      return e !== "head" && e !== "body";
    }
    function JT(e, t, a, l) {
      var u = !0;
      _m(t.nodeValue, a, l, u);
    }
    function eR(e, t, a, l, u, d) {
      if (t[Tm] !== !0) {
        var v = !0;
        _m(l.nodeValue, u, d, v);
      }
    }
    function tR(e, t) {
      t.nodeType === Dr ? y0(e, t) : t.nodeType === gn || b0(e, t);
    }
    function nR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Dr ? y0(a, t) : t.nodeType === gn || b0(a, t));
      }
    }
    function rR(e, t, a, l, u) {
      (u || t[Tm] !== !0) && (l.nodeType === Dr ? y0(a, l) : l.nodeType === gn || b0(a, l));
    }
    function aR(e, t, a) {
      S0(e, t);
    }
    function iR(e, t) {
      x0(e, t);
    }
    function lR(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && S0(l, t);
      }
    }
    function oR(e, t) {
      {
        var a = e.parentNode;
        a !== null && x0(a, t);
      }
    }
    function uR(e, t, a, l, u, d) {
      (d || t[Tm] !== !0) && S0(a, l);
    }
    function sR(e, t, a, l, u) {
      (u || t[Tm] !== !0) && x0(a, l);
    }
    function cR(e) {
      b("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function fR(e) {
      Up(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, D0 = "__reactProps$" + Lf, $p = "__reactContainer$" + Lf, O0 = "__reactEvents$" + Lf, dR = "__reactListeners$" + Lf, pR = "__reactHandles$" + Lf;
    function hR(e) {
      delete e[Nf], delete e[D0], delete e[O0], delete e[dR], delete e[pR];
    }
    function Ip(e, t) {
      t[Nf] = e;
    }
    function Mm(e, t) {
      t[$p] = e;
    }
    function D1(e) {
      e[$p] = null;
    }
    function Bp(e) {
      return !!e[$p];
    }
    function $s(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[$p] || a[Nf], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var u = R1(e); u !== null; ) {
              var d = u[Nf];
              if (d)
                return d;
              u = R1(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ou(e) {
      var t = e[Nf] || e[$p];
      return t && (t.tag === Q || t.tag === ne || t.tag === ve || t.tag === U) ? t : null;
    }
    function Uf(e) {
      if (e.tag === Q || e.tag === ne)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lm(e) {
      return e[D0] || null;
    }
    function M0(e, t) {
      e[D0] = t;
    }
    function vR(e) {
      var t = e[O0];
      return t === void 0 && (t = e[O0] = /* @__PURE__ */ new Set()), t;
    }
    var O1 = {}, M1 = f.ReactDebugCurrentFrame;
    function Nm(e) {
      if (e) {
        var t = e._owner, a = Zu(e.type, e._source, t ? t.type : null);
        M1.setExtraStackFrame(a);
      } else
        M1.setExtraStackFrame(null);
    }
    function ji(e, t, a, l, u) {
      {
        var d = Function.call.bind(rr);
        for (var v in e)
          if (d(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((l || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = e[v](t, v, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              y = k;
            }
            y && !(y instanceof Error) && (Nm(u), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, v, typeof y), Nm(null)), y instanceof Error && !(y.message in O1) && (O1[y.message] = !0, Nm(u), b("Failed %s type: %s", a, y.message), Nm(null));
          }
      }
    }
    var L0 = [], Um;
    Um = [];
    var ko = -1;
    function Mu(e) {
      return {
        current: e
      };
    }
    function Hr(e, t) {
      if (ko < 0) {
        b("Unexpected pop.");
        return;
      }
      t !== Um[ko] && b("Unexpected Fiber popped."), e.current = L0[ko], L0[ko] = null, Um[ko] = null, ko--;
    }
    function jr(e, t, a) {
      ko++, L0[ko] = e.current, Um[ko] = a, e.current = t;
    }
    var N0;
    N0 = {};
    var Qa = {};
    Object.freeze(Qa);
    var Eo = Mu(Qa), Rl = Mu(!1), U0 = Qa;
    function zf(e, t, a) {
      return a && Dl(t) ? U0 : Eo.current;
    }
    function L1(e, t, a) {
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
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in l)
          d[v] = t[v];
        {
          var y = qe(e) || "Unknown";
          ji(l, d, "context", y);
        }
        return u && L1(e, t, d), d;
      }
    }
    function zm() {
      return Rl.current;
    }
    function Dl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Am(e) {
      Hr(Rl, e), Hr(Eo, e);
    }
    function z0(e) {
      Hr(Rl, e), Hr(Eo, e);
    }
    function N1(e, t, a) {
      {
        if (Eo.current !== Qa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        jr(Eo, t, e), jr(Rl, a, e);
      }
    }
    function U1(e, t, a) {
      {
        var l = e.stateNode, u = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var d = qe(e) || "Unknown";
            N0[d] || (N0[d] = !0, b("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = l.getChildContext();
        for (var y in v)
          if (!(y in u))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = qe(e) || "Unknown";
          ji(u, v, "child context", S);
        }
        return ot({}, a, v);
      }
    }
    function Fm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Qa;
        return U0 = Eo.current, jr(Eo, a, e), jr(Rl, Rl.current, e), !0;
      }
    }
    function z1(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = U1(e, t, U0);
          l.__reactInternalMemoizedMergedChildContext = u, Hr(Rl, e), Hr(Eo, e), jr(Eo, u, e), jr(Rl, a, e);
        } else
          Hr(Rl, e), jr(Rl, a, e);
      }
    }
    function mR(e) {
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
              if (Dl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lu = 0, Hm = 1, _o = null, A0 = !1, F0 = !1;
    function A1(e) {
      _o === null ? _o = [e] : _o.push(e);
    }
    function gR(e) {
      A0 = !0, A1(e);
    }
    function F1() {
      A0 && Nu();
    }
    function Nu() {
      if (!F0 && _o !== null) {
        F0 = !0;
        var e = 0, t = ka();
        try {
          var a = !0, l = _o;
          for (Cn(ur); e < l.length; e++) {
            var u = l[e];
            do
              u = u(a);
            while (u !== null);
          }
          _o = null, A0 = !1;
        } catch (d) {
          throw _o !== null && (_o = _o.slice(e + 1)), Ac(Hc, Nu), d;
        } finally {
          Cn(t), F0 = !1;
        }
      }
      return null;
    }
    var Ff = [], Hf = 0, jm = null, Ym = 0, fi = [], di = 0, Is = null, Co = 1, To = "";
    function yR(e) {
      return Ws(), (e.flags & Bd) !== Ue;
    }
    function bR(e) {
      return Ws(), Ym;
    }
    function SR() {
      var e = To, t = Co, a = t & ~xR(t);
      return a.toString(32) + e;
    }
    function Bs(e, t) {
      Ws(), Ff[Hf++] = Ym, Ff[Hf++] = jm, jm = e, Ym = t;
    }
    function H1(e, t, a) {
      Ws(), fi[di++] = Co, fi[di++] = To, fi[di++] = Is, Is = e;
      var l = Co, u = To, d = Pm(l) - 1, v = l & ~(1 << d), y = a + 1, S = Pm(t) + d;
      if (S > 30) {
        var k = d - d % 5, E = (1 << k) - 1, N = (v & E).toString(32), O = v >> k, j = d - k, Y = Pm(t) + j, I = y << j, xe = I | O, ze = N + u;
        Co = 1 << Y | xe, To = ze;
      } else {
        var Oe = y << d, pt = Oe | v, st = u;
        Co = 1 << S | pt, To = st;
      }
    }
    function H0(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        Bs(e, a), H1(e, a, l);
      }
    }
    function Pm(e) {
      return 32 - Ic(e);
    }
    function xR(e) {
      return 1 << Pm(e) - 1;
    }
    function j0(e) {
      for (; e === jm; )
        jm = Ff[--Hf], Ff[Hf] = null, Ym = Ff[--Hf], Ff[Hf] = null;
      for (; e === Is; )
        Is = fi[--di], fi[di] = null, To = fi[--di], fi[di] = null, Co = fi[--di], fi[di] = null;
    }
    function wR() {
      return Ws(), Is !== null ? {
        id: Co,
        overflow: To
      } : null;
    }
    function kR(e, t) {
      Ws(), fi[di++] = Co, fi[di++] = To, fi[di++] = Is, Co = t.id, To = t.overflow, Is = e;
    }
    function Ws() {
      yr() || b("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var gr = null, pi = null, Yi = !1, Gs = !1, Uu = null;
    function ER() {
      Yi && b("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function j1() {
      Gs = !0;
    }
    function _R() {
      return Gs;
    }
    function CR(e) {
      var t = e.stateNode.containerInfo;
      return pi = IT(t), gr = e, Yi = !0, Uu = null, Gs = !1, !0;
    }
    function TR(e, t, a) {
      return pi = BT(t), gr = e, Yi = !0, Uu = null, Gs = !1, a !== null && kR(e, a), !0;
    }
    function Y1(e, t) {
      switch (e.tag) {
        case U: {
          tR(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & rt) !== He;
          rR(
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
          l.dehydrated !== null && nR(l.dehydrated, t);
          break;
        }
      }
    }
    function P1(e, t) {
      Y1(e, t);
      var a = OM();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= kt) : l.push(a);
    }
    function Y0(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var l = t.type;
                t.pendingProps, aR(a, l);
                break;
              case ne:
                var u = t.pendingProps;
                iR(a, u);
                break;
            }
            break;
          }
          case Q: {
            var d = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case Q: {
                var S = t.type, k = t.pendingProps, E = (e.mode & rt) !== He;
                uR(
                  d,
                  v,
                  y,
                  S,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case ne: {
                var N = t.pendingProps, O = (e.mode & rt) !== He;
                sR(
                  d,
                  v,
                  y,
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
                  var I = t.type;
                  t.pendingProps, lR(Y, I);
                  break;
                case ne:
                  var xe = t.pendingProps;
                  oR(Y, xe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function V1(e, t) {
      t.flags = t.flags & ~ya | $t, Y0(e, t);
    }
    function $1(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var l = HT(t, a);
          return l !== null ? (e.stateNode = l, gr = e, pi = $T(l), !0) : !1;
        }
        case ne: {
          var u = e.pendingProps, d = jT(t, u);
          return d !== null ? (e.stateNode = d, gr = e, pi = null, !0) : !1;
        }
        case ve: {
          var v = YT(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: wR(),
              retryLane: Ar
            };
            e.memoizedState = y;
            var S = MM(v);
            return S.return = e, e.child = S, gr = e, pi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function P0(e) {
      return (e.mode & rt) !== He && (e.flags & Be) === Ue;
    }
    function V0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function $0(e) {
      if (Yi) {
        var t = pi;
        if (!t) {
          P0(e) && (Y0(gr, e), V0()), V1(gr, e), Yi = !1, gr = e;
          return;
        }
        var a = t;
        if (!$1(e, t)) {
          P0(e) && (Y0(gr, e), V0()), t = Vp(a);
          var l = gr;
          if (!t || !$1(e, t)) {
            V1(gr, e), Yi = !1, gr = e;
            return;
          }
          P1(l, a);
        }
      }
    }
    function RR(e, t, a) {
      var l = e.stateNode, u = !Gs, d = WT(l, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function DR(e) {
      var t = e.stateNode, a = e.memoizedProps, l = GT(t, a, e);
      if (l) {
        var u = gr;
        if (u !== null)
          switch (u.tag) {
            case U: {
              var d = u.stateNode.containerInfo, v = (u.mode & rt) !== He;
              JT(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Q: {
              var y = u.type, S = u.memoizedProps, k = u.stateNode, E = (u.mode & rt) !== He;
              eR(
                y,
                S,
                k,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return l;
    }
    function OR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      QT(a, e);
    }
    function MR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return qT(a);
    }
    function I1(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== U && t.tag !== ve; )
        t = t.return;
      gr = t;
    }
    function Vm(e) {
      if (e !== gr)
        return !1;
      if (!Yi)
        return I1(e), Yi = !0, !1;
      if (e.tag !== U && (e.tag !== Q || ZT(e.type) && !E0(e.type, e.memoizedProps))) {
        var t = pi;
        if (t)
          if (P0(e))
            B1(e), V0();
          else
            for (; t; )
              P1(e, t), t = Vp(t);
      }
      return I1(e), e.tag === ve ? pi = MR(e) : pi = gr ? Vp(e.stateNode) : null, !0;
    }
    function LR() {
      return Yi && pi !== null;
    }
    function B1(e) {
      for (var t = pi; t; )
        Y1(e, t), t = Vp(t);
    }
    function jf() {
      gr = null, pi = null, Yi = !1, Gs = !1;
    }
    function W1() {
      Uu !== null && (Yk(Uu), Uu = null);
    }
    function yr() {
      return Yi;
    }
    function I0(e) {
      Uu === null ? Uu = [e] : Uu.push(e);
    }
    var NR = f.ReactCurrentBatchConfig, UR = null;
    function zR() {
      return NR.transition;
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
      var AR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, Qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Wp = [], Gp = [], Qp = [], qp = [], Xp = [], Kp = [], qs = /* @__PURE__ */ new Set();
      Pi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Gp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qp.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && qp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Kp.push(e));
      }, Pi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Wp.length > 0 && (Wp.forEach(function(O) {
          e.add(qe(O) || "Component"), qs.add(O.type);
        }), Wp = []);
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
        var u = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          u.add(qe(O) || "Component"), qs.add(O.type);
        }), Xp = []);
        var d = /* @__PURE__ */ new Set();
        if (Kp.length > 0 && (Kp.forEach(function(O) {
          d.add(qe(O) || "Component"), qs.add(O.type);
        }), Kp = []), t.size > 0) {
          var v = Qs(t);
          b(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var y = Qs(l);
          b(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (d.size > 0) {
          var S = Qs(d);
          b(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var k = Qs(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
        if (a.size > 0) {
          var E = Qs(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (u.size > 0) {
          var N = Qs(u);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var $m = /* @__PURE__ */ new Map(), G1 = /* @__PURE__ */ new Set();
      Pi.recordLegacyContextWarning = function(e, t) {
        var a = AR(e);
        if (a === null) {
          b("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!G1.has(e.type)) {
          var l = $m.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], $m.set(a, l)), l.push(e));
        }
      }, Pi.flushLegacyContextWarning = function() {
        $m.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              l.add(qe(d) || "Component"), G1.add(d.type);
            });
            var u = Qs(l);
            try {
              Mt(a), b(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              kn();
            }
          }
        });
      }, Pi.discardPendingWarnings = function() {
        Wp = [], Gp = [], Qp = [], qp = [], Xp = [], Kp = [], $m = /* @__PURE__ */ new Map();
      };
    }
    function Vi(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), l = e.defaultProps;
        for (var u in l)
          a[u] === void 0 && (a[u] = l[u]);
        return a;
      }
      return t;
    }
    var B0 = Mu(null), W0;
    W0 = {};
    var Im = null, Yf = null, G0 = null, Bm = !1;
    function Wm() {
      Im = null, Yf = null, G0 = null, Bm = !1;
    }
    function Q1() {
      Bm = !0;
    }
    function q1() {
      Bm = !1;
    }
    function X1(e, t, a) {
      jr(B0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== W0 && b("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = W0;
    }
    function Q0(e, t) {
      var a = B0.current;
      Hr(B0, t), e._currentValue = a;
    }
    function q0(e, t, a) {
      for (var l = e; l !== null; ) {
        var u = l.alternate;
        if (fo(l.childLanes, t) ? u !== null && !fo(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (l.childLanes = Ke(l.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && b("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FR(e, t, a) {
      HR(e, t, a);
    }
    function HR(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var u = void 0, d = l.dependencies;
        if (d !== null) {
          u = l.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === M) {
                var y = _n(a), S = Ro(Ft, y);
                S.tag = Qm;
                var k = l.updateQueue;
                if (k !== null) {
                  var E = k.shared, N = E.pending;
                  N === null ? S.next = S : (S.next = N.next, N.next = S), E.pending = S;
                }
              }
              l.lanes = Ke(l.lanes, a);
              var O = l.alternate;
              O !== null && (O.lanes = Ke(O.lanes, a)), q0(l.return, a, e), d.lanes = Ke(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === ie)
          u = l.type === e.type ? null : l.child;
        else if (l.tag === lt) {
          var j = l.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = Ke(j.lanes, a);
          var Y = j.alternate;
          Y !== null && (Y.lanes = Ke(Y.lanes, a)), q0(j, a, e), u = l.sibling;
        } else
          u = l.child;
        if (u !== null)
          u.return = l;
        else
          for (u = l; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var I = u.sibling;
            if (I !== null) {
              I.return = u.return, u = I;
              break;
            }
            u = u.return;
          }
        l = u;
      }
    }
    function Pf(e, t) {
      Im = e, Yf = null, G0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Fr(a.lanes, t) && fh(), a.firstContext = null);
      }
    }
    function Pn(e) {
      Bm && b("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (G0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Yf === null) {
          if (Im === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Yf = a, Im.dependencies = {
            lanes: W,
            firstContext: a
          };
        } else
          Yf = Yf.next = a;
      }
      return t;
    }
    var Xs = null;
    function X0(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function jR() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var l = a.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = l, a.next = d;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function K1(e, t, a, l) {
      var u = t.interleaved;
      return u === null ? (a.next = a, X0(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gm(e, l);
    }
    function YR(e, t, a, l) {
      var u = t.interleaved;
      u === null ? (a.next = a, X0(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function PR(e, t, a, l) {
      var u = t.interleaved;
      return u === null ? (a.next = a, X0(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gm(e, l);
    }
    function Ra(e, t) {
      return Gm(e, t);
    }
    var VR = Gm;
    function Gm(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & ($t | ya)) !== Ue && Zk(e);
      for (var l = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & ($t | ya)) !== Ue && Zk(e), l = u, u = u.return;
      if (l.tag === U) {
        var d = l.stateNode;
        return d;
      } else
        return null;
    }
    var Z1 = 0, J1 = 1, Qm = 2, K0 = 3, qm = !1, Z0, Xm;
    Z0 = !1, Xm = null;
    function J0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: W
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function ew(e, t) {
      var a = t.updateQueue, l = e.updateQueue;
      if (a === l) {
        var u = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = u;
      }
    }
    function Ro(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Z1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zu(e, t, a) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var u = l.shared;
      if (Xm === u && !Z0 && (b("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Z0 = !0), VO()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, VR(e, a);
      } else
        return PR(e, u, t, a);
    }
    function Km(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var u = l.shared;
        if (op(a)) {
          var d = u.lanes;
          d = sp(d, e.pendingLanes);
          var v = Ke(d, a);
          u.lanes = v, vu(e, v);
        }
      }
    }
    function eb(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var u = l.updateQueue;
        if (a === u) {
          var d = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var S = y;
            do {
              var k = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              v === null ? d = v = k : (v.next = k, v = k), S = S.next;
            } while (S !== null);
            v === null ? d = v = t : (v.next = t, v = t);
          } else
            d = v = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: v,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function $R(e, t, a, l, u, d) {
      switch (a.tag) {
        case J1: {
          var v = a.payload;
          if (typeof v == "function") {
            Q1();
            var y = v.call(d, l, u);
            {
              if (e.mode & en) {
                En(!0);
                try {
                  v.call(d, l, u);
                } finally {
                  En(!1);
                }
              }
              q1();
            }
            return y;
          }
          return v;
        }
        case K0:
          e.flags = e.flags & ~An | Be;
        case Z1: {
          var S = a.payload, k;
          if (typeof S == "function") {
            Q1(), k = S.call(d, l, u);
            {
              if (e.mode & en) {
                En(!0);
                try {
                  S.call(d, l, u);
                } finally {
                  En(!1);
                }
              }
              q1();
            }
          } else
            k = S;
          return k == null ? l : ot({}, l, k);
        }
        case Qm:
          return qm = !0, l;
      }
      return l;
    }
    function Zm(e, t, a, l) {
      var u = e.updateQueue;
      qm = !1, Xm = u.shared;
      var d = u.firstBaseUpdate, v = u.lastBaseUpdate, y = u.shared.pending;
      if (y !== null) {
        u.shared.pending = null;
        var S = y, k = S.next;
        S.next = null, v === null ? d = k : v.next = k, v = S;
        var E = e.alternate;
        if (E !== null) {
          var N = E.updateQueue, O = N.lastBaseUpdate;
          O !== v && (O === null ? N.firstBaseUpdate = k : O.next = k, N.lastBaseUpdate = S);
        }
      }
      if (d !== null) {
        var j = u.baseState, Y = W, I = null, xe = null, ze = null, Oe = d;
        do {
          var pt = Oe.lane, st = Oe.eventTime;
          if (fo(l, pt)) {
            if (ze !== null) {
              var B = {
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
              ze = ze.next = B;
            }
            j = $R(e, u, Oe, j, t, a);
            var F = Oe.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Oe.lane !== ft) {
              e.flags |= ii;
              var J = u.effects;
              J === null ? u.effects = [Oe] : J.push(Oe);
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
            ze === null ? (xe = ze = A, I = j) : ze = ze.next = A, Y = Ke(Y, pt);
          }
          if (Oe = Oe.next, Oe === null) {
            if (y = u.shared.pending, y === null)
              break;
            var we = y, me = we.next;
            we.next = null, Oe = me, u.lastBaseUpdate = we, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (I = j), u.baseState = I, u.firstBaseUpdate = xe, u.lastBaseUpdate = ze;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var Qe = Ie;
          do
            Y = Ke(Y, Qe.lane), Qe = Qe.next;
          while (Qe !== Ie);
        } else
          d === null && (u.shared.lanes = W);
        kh(Y), e.lanes = Y, e.memoizedState = j;
      }
      Xm = null;
    }
    function IR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function tw() {
      qm = !1;
    }
    function Jm() {
      return qm;
    }
    function nw(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var u = 0; u < l.length; u++) {
          var d = l[u], v = d.callback;
          v !== null && (d.callback = null, IR(v, a));
        }
    }
    var tb = {}, rw = new i.Component().refs, nb, rb, ab, ib, lb, aw, eg, ob, ub, sb;
    {
      nb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set(), ab = /* @__PURE__ */ new Set(), ib = /* @__PURE__ */ new Set(), ob = /* @__PURE__ */ new Set(), lb = /* @__PURE__ */ new Set(), ub = /* @__PURE__ */ new Set(), sb = /* @__PURE__ */ new Set();
      var iw = /* @__PURE__ */ new Set();
      eg = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iw.has(a) || (iw.add(a), b("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aw = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          lb.has(a) || (lb.add(a), b("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(tb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(tb);
    }
    function cb(e, t, a, l) {
      var u = e.memoizedState, d = a(l, u);
      {
        if (e.mode & en) {
          En(!0);
          try {
            d = a(l, u);
          } finally {
            En(!1);
          }
        }
        aw(t, d);
      }
      var v = d == null ? u : ot({}, u, d);
      if (e.memoizedState = v, e.lanes === W) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var fb = {
      isMounted: ea,
      enqueueSetState: function(e, t, a) {
        var l = ma(e), u = la(), d = $u(l), v = Ro(u, d);
        v.payload = t, a != null && (eg(a, "setState"), v.callback = a);
        var y = zu(l, v, d);
        y !== null && (er(y, l, d, u), Km(y, l, d)), bl(l, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = ma(e), u = la(), d = $u(l), v = Ro(u, d);
        v.tag = J1, v.payload = t, a != null && (eg(a, "replaceState"), v.callback = a);
        var y = zu(l, v, d);
        y !== null && (er(y, l, d, u), Km(y, l, d)), bl(l, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ma(e), l = la(), u = $u(a), d = Ro(l, u);
        d.tag = Qm, t != null && (eg(t, "forceUpdate"), d.callback = t);
        var v = zu(a, d, u);
        v !== null && (er(v, a, u, l), Km(v, a, u)), rp(a, u);
      }
    };
    function lw(e, t, a, l, u, d, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var S = y.shouldComponentUpdate(l, d, v);
        {
          if (e.mode & en) {
            En(!0);
            try {
              S = y.shouldComponentUpdate(l, d, v);
            } finally {
              En(!1);
            }
          }
          S === void 0 && b("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, l) || !Le(u, d) : !0;
    }
    function BR(e, t, a) {
      var l = e.stateNode;
      {
        var u = zt(t) || "Component", d = l.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? b("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : b("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && b("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && b("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), l.propTypes && b("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), l.contextType && b("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), l.contextTypes && b("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !ub.has(t) && (ub.add(t), b("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof l.componentShouldUpdate == "function" && b("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && b("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && b("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof l.componentDidReceiveProps == "function" && b("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof l.componentWillRecieveProps == "function" && b("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof l.UNSAFE_componentWillRecieveProps == "function" && b("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = l.props !== a;
        l.props !== void 0 && v && b("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), l.defaultProps && b("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !ab.has(t) && (ab.add(t), b("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof l.getDerivedStateFromProps == "function" && b("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof l.getDerivedStateFromError == "function" && b("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && b("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var y = l.state;
        y && (typeof y != "object" || Un(y)) && b("%s.state: must be set to an object or null", u), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && b("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function ow(e, t) {
      t.updater = fb, e.stateNode = t, iu(t, e), t._reactInternalInstance = tb;
    }
    function uw(e, t, a) {
      var l = !1, u = Qa, d = Qa, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === pe && v._context === void 0
        );
        if (!y && !sb.has(t)) {
          sb.add(t);
          var S = "";
          v === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? S = " However, it is set to a " + typeof v + "." : v.$$typeof === K ? S = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", b("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", S);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Pn(v);
      else {
        u = zf(e, t, !0);
        var k = t.contextTypes;
        l = k != null, d = l ? Af(e, u) : Qa;
      }
      var E = new t(a, d);
      if (e.mode & en) {
        En(!0);
        try {
          E = new t(a, d);
        } finally {
          En(!1);
        }
      }
      var N = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      ow(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var O = zt(t) || "Component";
          rb.has(O) || (rb.add(O), b("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, E.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var j = null, Y = null, I = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? I = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (I = "UNSAFE_componentWillUpdate"), j !== null || Y !== null || I !== null) {
            var xe = zt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ib.has(xe) || (ib.add(xe), b(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, ze, j !== null ? `
  ` + j : "", Y !== null ? `
  ` + Y : "", I !== null ? `
  ` + I : ""));
          }
        }
      }
      return l && L1(e, u, d), E;
    }
    function WR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (b("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), fb.enqueueReplaceState(t, t.state, null));
    }
    function sw(e, t, a, l) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== u) {
        {
          var d = qe(e) || "Component";
          nb.has(d) || (nb.add(d), b("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        fb.enqueueReplaceState(t, t.state, null);
      }
    }
    function db(e, t, a, l) {
      BR(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = rw, J0(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = Pn(d);
      else {
        var v = zf(e, t, !0);
        u.context = Af(e, v);
      }
      {
        if (u.state === a) {
          var y = zt(t) || "Component";
          ob.has(y) || (ob.add(y), b("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & en && Pi.recordLegacyContextWarning(e, u), Pi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (cb(e, t, S, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (WR(e, u), Zm(e, a, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var k = Xe;
        k |= Mr, (e.mode & xa) !== He && (k |= Lr), e.flags |= k;
      }
    }
    function GR(e, t, a, l) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var v = u.context, y = t.contextType, S = Qa;
      if (typeof y == "object" && y !== null)
        S = Pn(y);
      else {
        var k = zf(e, t, !0);
        S = Af(e, k);
      }
      var E = t.getDerivedStateFromProps, N = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !N && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || v !== S) && sw(e, u, a, S), tw();
      var O = e.memoizedState, j = u.state = O;
      if (Zm(e, a, u, l), j = e.memoizedState, d === a && O === j && !zm() && !Jm()) {
        if (typeof u.componentDidMount == "function") {
          var Y = Xe;
          Y |= Mr, (e.mode & xa) !== He && (Y |= Lr), e.flags |= Y;
        }
        return !1;
      }
      typeof E == "function" && (cb(e, t, E, a), j = e.memoizedState);
      var I = Jm() || lw(e, t, d, a, O, j, S);
      if (I) {
        if (!N && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var xe = Xe;
          xe |= Mr, (e.mode & xa) !== He && (xe |= Lr), e.flags |= xe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = Xe;
          ze |= Mr, (e.mode & xa) !== He && (ze |= Lr), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return u.props = a, u.state = j, u.context = S, I;
    }
    function QR(e, t, a, l, u) {
      var d = t.stateNode;
      ew(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : Vi(t.type, v);
      d.props = y;
      var S = t.pendingProps, k = d.context, E = a.contextType, N = Qa;
      if (typeof E == "object" && E !== null)
        N = Pn(E);
      else {
        var O = zf(t, a, !0);
        N = Af(t, O);
      }
      var j = a.getDerivedStateFromProps, Y = typeof j == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !Y && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== S || k !== N) && sw(t, d, l, N), tw();
      var I = t.memoizedState, xe = d.state = I;
      if (Zm(t, l, d, u), xe = t.memoizedState, v === S && I === xe && !zm() && !Jm() && !Ae)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= ga), !1;
      typeof j == "function" && (cb(t, a, j, l), xe = t.memoizedState);
      var ze = Jm() || lw(t, a, y, l, I, xe, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return ze ? (!Y && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, xe, N), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, xe, N)), typeof d.componentDidUpdate == "function" && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= ga)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= ga), t.memoizedProps = l, t.memoizedState = xe), d.props = l, d.state = xe, d.context = N, ze;
    }
    var pb, hb, vb, mb, gb, cw = function(e, t) {
    };
    pb = !1, hb = !1, vb = {}, mb = {}, gb = {}, cw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        mb[a] || (mb[a] = !0, b('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Zp(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & en || hr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = qe(e) || "Component";
          vb[u] || (b('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), vb[u] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var y = d;
            if (y.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = v;
          xi(l, "ref");
          var k = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === k)
            return t.ref;
          var E = function(N) {
            var O = S.refs;
            O === rw && (O = S.refs = {}), N === null ? delete O[k] : O[k] = N;
          };
          return E._stringRef = k, E;
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
    function tg(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ng(e) {
      {
        var t = qe(e) || "Component";
        if (gb[t])
          return;
        gb[t] = !0, b("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dw(e) {
      function t(A, B) {
        if (e) {
          var F = A.deletions;
          F === null ? (A.deletions = [B], A.flags |= kt) : F.push(B);
        }
      }
      function a(A, B) {
        if (!e)
          return null;
        for (var F = B; F !== null; )
          t(A, F), F = F.sibling;
        return null;
      }
      function l(A, B) {
        for (var F = /* @__PURE__ */ new Map(), J = B; J !== null; )
          J.key !== null ? F.set(J.key, J) : F.set(J.index, J), J = J.sibling;
        return F;
      }
      function u(A, B) {
        var F = ac(A, B);
        return F.index = 0, F.sibling = null, F;
      }
      function d(A, B, F) {
        if (A.index = F, !e)
          return A.flags |= Bd, B;
        var J = A.alternate;
        if (J !== null) {
          var we = J.index;
          return we < B ? (A.flags |= $t, B) : we;
        } else
          return A.flags |= $t, B;
      }
      function v(A) {
        return e && A.alternate === null && (A.flags |= $t), A;
      }
      function y(A, B, F, J) {
        if (B === null || B.tag !== ne) {
          var we = IS(F, A.mode, J);
          return we.return = A, we;
        } else {
          var me = u(B, F);
          return me.return = A, me;
        }
      }
      function S(A, B, F, J) {
        var we = F.type;
        if (we === ja)
          return E(A, B, F.props.children, J, F.key);
        if (B !== null && (B.elementType === we || // Keep this check inline so it only runs on the false path:
        nE(B, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof we == "object" && we !== null && we.$$typeof === Ye && fw(we) === B.type)) {
          var me = u(B, F.props);
          return me.ref = Zp(A, B, F), me.return = A, me._debugSource = F._source, me._debugOwner = F._owner, me;
        }
        var Ie = $S(F, A.mode, J);
        return Ie.ref = Zp(A, B, F), Ie.return = A, Ie;
      }
      function k(A, B, F, J) {
        if (B === null || B.tag !== $ || B.stateNode.containerInfo !== F.containerInfo || B.stateNode.implementation !== F.implementation) {
          var we = BS(F, A.mode, J);
          return we.return = A, we;
        } else {
          var me = u(B, F.children || []);
          return me.return = A, me;
        }
      }
      function E(A, B, F, J, we) {
        if (B === null || B.tag !== ae) {
          var me = Bu(F, A.mode, J, we);
          return me.return = A, me;
        } else {
          var Ie = u(B, F);
          return Ie.return = A, Ie;
        }
      }
      function N(A, B, F) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var J = IS("" + B, A.mode, F);
          return J.return = A, J;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case tl: {
              var we = $S(B, A.mode, F);
              return we.ref = Zp(A, null, B), we.return = A, we;
            }
            case Xr: {
              var me = BS(B, A.mode, F);
              return me.return = A, me;
            }
            case Ye: {
              var Ie = B._payload, Qe = B._init;
              return N(A, Qe(Ie), F);
            }
          }
          if (Un(B) || wi(B)) {
            var Nt = Bu(B, A.mode, F, null);
            return Nt.return = A, Nt;
          }
          tg(A, B);
        }
        return typeof B == "function" && ng(A), null;
      }
      function O(A, B, F, J) {
        var we = B !== null ? B.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return we !== null ? null : y(A, B, "" + F, J);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case tl:
              return F.key === we ? S(A, B, F, J) : null;
            case Xr:
              return F.key === we ? k(A, B, F, J) : null;
            case Ye: {
              var me = F._payload, Ie = F._init;
              return O(A, B, Ie(me), J);
            }
          }
          if (Un(F) || wi(F))
            return we !== null ? null : E(A, B, F, J, null);
          tg(A, F);
        }
        return typeof F == "function" && ng(A), null;
      }
      function j(A, B, F, J, we) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var me = A.get(F) || null;
          return y(B, me, "" + J, we);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case tl: {
              var Ie = A.get(J.key === null ? F : J.key) || null;
              return S(B, Ie, J, we);
            }
            case Xr: {
              var Qe = A.get(J.key === null ? F : J.key) || null;
              return k(B, Qe, J, we);
            }
            case Ye:
              var Nt = J._payload, bt = J._init;
              return j(A, B, F, bt(Nt), we);
          }
          if (Un(J) || wi(J)) {
            var Dn = A.get(F) || null;
            return E(B, Dn, J, we, null);
          }
          tg(B, J);
        }
        return typeof J == "function" && ng(B), null;
      }
      function Y(A, B, F) {
        {
          if (typeof A != "object" || A === null)
            return B;
          switch (A.$$typeof) {
            case tl:
            case Xr:
              cw(A, F);
              var J = A.key;
              if (typeof J != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(J);
                break;
              }
              if (!B.has(J)) {
                B.add(J);
                break;
              }
              b("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case Ye:
              var we = A._payload, me = A._init;
              Y(me(we), B, F);
              break;
          }
        }
        return B;
      }
      function I(A, B, F, J) {
        for (var we = null, me = 0; me < F.length; me++) {
          var Ie = F[me];
          we = Y(Ie, we, A);
        }
        for (var Qe = null, Nt = null, bt = B, Dn = 0, St = 0, Sn = null; bt !== null && St < F.length; St++) {
          bt.index > St ? (Sn = bt, bt = null) : Sn = bt.sibling;
          var Pr = O(A, bt, F[St], J);
          if (Pr === null) {
            bt === null && (bt = Sn);
            break;
          }
          e && bt && Pr.alternate === null && t(A, bt), Dn = d(Pr, Dn, St), Nt === null ? Qe = Pr : Nt.sibling = Pr, Nt = Pr, bt = Sn;
        }
        if (St === F.length) {
          if (a(A, bt), yr()) {
            var _r = St;
            Bs(A, _r);
          }
          return Qe;
        }
        if (bt === null) {
          for (; St < F.length; St++) {
            var Xa = N(A, F[St], J);
            Xa !== null && (Dn = d(Xa, Dn, St), Nt === null ? Qe = Xa : Nt.sibling = Xa, Nt = Xa);
          }
          if (yr()) {
            var oa = St;
            Bs(A, oa);
          }
          return Qe;
        }
        for (var ua = l(A, bt); St < F.length; St++) {
          var Vr = j(ua, A, St, F[St], J);
          Vr !== null && (e && Vr.alternate !== null && ua.delete(Vr.key === null ? St : Vr.key), Dn = d(Vr, Dn, St), Nt === null ? Qe = Vr : Nt.sibling = Vr, Nt = Vr);
        }
        if (e && ua.forEach(function(ad) {
          return t(A, ad);
        }), yr()) {
          var Uo = St;
          Bs(A, Uo);
        }
        return Qe;
      }
      function xe(A, B, F, J) {
        var we = wi(F);
        if (typeof we != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (hb || b("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hb = !0), F.entries === we && (pb || b("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pb = !0);
          var me = we.call(F);
          if (me)
            for (var Ie = null, Qe = me.next(); !Qe.done; Qe = me.next()) {
              var Nt = Qe.value;
              Ie = Y(Nt, Ie, A);
            }
        }
        var bt = we.call(F);
        if (bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Dn = null, St = null, Sn = B, Pr = 0, _r = 0, Xa = null, oa = bt.next(); Sn !== null && !oa.done; _r++, oa = bt.next()) {
          Sn.index > _r ? (Xa = Sn, Sn = null) : Xa = Sn.sibling;
          var ua = O(A, Sn, oa.value, J);
          if (ua === null) {
            Sn === null && (Sn = Xa);
            break;
          }
          e && Sn && ua.alternate === null && t(A, Sn), Pr = d(ua, Pr, _r), St === null ? Dn = ua : St.sibling = ua, St = ua, Sn = Xa;
        }
        if (oa.done) {
          if (a(A, Sn), yr()) {
            var Vr = _r;
            Bs(A, Vr);
          }
          return Dn;
        }
        if (Sn === null) {
          for (; !oa.done; _r++, oa = bt.next()) {
            var Uo = N(A, oa.value, J);
            Uo !== null && (Pr = d(Uo, Pr, _r), St === null ? Dn = Uo : St.sibling = Uo, St = Uo);
          }
          if (yr()) {
            var ad = _r;
            Bs(A, ad);
          }
          return Dn;
        }
        for (var Rh = l(A, Sn); !oa.done; _r++, oa = bt.next()) {
          var Fl = j(Rh, A, _r, oa.value, J);
          Fl !== null && (e && Fl.alternate !== null && Rh.delete(Fl.key === null ? _r : Fl.key), Pr = d(Fl, Pr, _r), St === null ? Dn = Fl : St.sibling = Fl, St = Fl);
        }
        if (e && Rh.forEach(function(u2) {
          return t(A, u2);
        }), yr()) {
          var o2 = _r;
          Bs(A, o2);
        }
        return Dn;
      }
      function ze(A, B, F, J) {
        if (B !== null && B.tag === ne) {
          a(A, B.sibling);
          var we = u(B, F);
          return we.return = A, we;
        }
        a(A, B);
        var me = IS(F, A.mode, J);
        return me.return = A, me;
      }
      function Oe(A, B, F, J) {
        for (var we = F.key, me = B; me !== null; ) {
          if (me.key === we) {
            var Ie = F.type;
            if (Ie === ja) {
              if (me.tag === ae) {
                a(A, me.sibling);
                var Qe = u(me, F.props.children);
                return Qe.return = A, Qe._debugSource = F._source, Qe._debugOwner = F._owner, Qe;
              }
            } else if (me.elementType === Ie || // Keep this check inline so it only runs on the false path:
            nE(me, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ye && fw(Ie) === me.type) {
              a(A, me.sibling);
              var Nt = u(me, F.props);
              return Nt.ref = Zp(A, me, F), Nt.return = A, Nt._debugSource = F._source, Nt._debugOwner = F._owner, Nt;
            }
            a(A, me);
            break;
          } else
            t(A, me);
          me = me.sibling;
        }
        if (F.type === ja) {
          var bt = Bu(F.props.children, A.mode, J, F.key);
          return bt.return = A, bt;
        } else {
          var Dn = $S(F, A.mode, J);
          return Dn.ref = Zp(A, B, F), Dn.return = A, Dn;
        }
      }
      function pt(A, B, F, J) {
        for (var we = F.key, me = B; me !== null; ) {
          if (me.key === we)
            if (me.tag === $ && me.stateNode.containerInfo === F.containerInfo && me.stateNode.implementation === F.implementation) {
              a(A, me.sibling);
              var Ie = u(me, F.children || []);
              return Ie.return = A, Ie;
            } else {
              a(A, me);
              break;
            }
          else
            t(A, me);
          me = me.sibling;
        }
        var Qe = BS(F, A.mode, J);
        return Qe.return = A, Qe;
      }
      function st(A, B, F, J) {
        var we = typeof F == "object" && F !== null && F.type === ja && F.key === null;
        if (we && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case tl:
              return v(Oe(A, B, F, J));
            case Xr:
              return v(pt(A, B, F, J));
            case Ye:
              var me = F._payload, Ie = F._init;
              return st(A, B, Ie(me), J);
          }
          if (Un(F))
            return I(A, B, F, J);
          if (wi(F))
            return xe(A, B, F, J);
          tg(A, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? v(ze(A, B, "" + F, J)) : (typeof F == "function" && ng(A), a(A, B));
      }
      return st;
    }
    var Vf = dw(!0), pw = dw(!1);
    function qR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = ac(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = ac(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function XR(e, t) {
      for (var a = e.child; a !== null; )
        _M(a, t), a = a.sibling;
    }
    var Jp = {}, Au = Mu(Jp), eh = Mu(Jp), rg = Mu(Jp);
    function ag(e) {
      if (e === Jp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function hw() {
      var e = ag(rg.current);
      return e;
    }
    function yb(e, t) {
      jr(rg, t, e), jr(eh, e, e), jr(Au, Jp, e);
      var a = cT(t);
      Hr(Au, e), jr(Au, a, e);
    }
    function $f(e) {
      Hr(Au, e), Hr(eh, e), Hr(rg, e);
    }
    function bb() {
      var e = ag(Au.current);
      return e;
    }
    function vw(e) {
      ag(rg.current);
      var t = ag(Au.current), a = fT(t, e.type);
      t !== a && (jr(eh, e, e), jr(Au, a, e));
    }
    function Sb(e) {
      eh.current === e && (Hr(Au, e), Hr(eh, e));
    }
    var KR = 0, mw = 1, gw = 1, th = 2, $i = Mu(KR);
    function xb(e, t) {
      return (e & t) !== 0;
    }
    function If(e) {
      return e & mw;
    }
    function wb(e, t) {
      return e & mw | t;
    }
    function ZR(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      jr($i, t, e);
    }
    function Bf(e) {
      Hr($i, e);
    }
    function JR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ig(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || T1(l) || R0(l))
              return t;
          }
        } else if (t.tag === ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Be) !== Ue;
          if (u)
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
    var Da = (
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
    ), br = (
      /*   */
      8
    ), kb = [];
    function Eb() {
      for (var e = 0; e < kb.length; e++) {
        var t = kb[e];
        t._workInProgressVersionPrimary = null;
      }
      kb.length = 0;
    }
    function eD(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var be = f.ReactCurrentDispatcher, nh = f.ReactCurrentBatchConfig, _b, Wf;
    _b = /* @__PURE__ */ new Set();
    var Ks = W, Lt = null, qn = null, Xn = null, lg = !1, rh = !1, ah = 0, tD = 0, nD = 25, G = null, hi = null, Hu = -1, Cb = !1;
    function _t() {
      {
        var e = G;
        hi === null ? hi = [e] : hi.push(e);
      }
    }
    function fe() {
      {
        var e = G;
        hi !== null && (Hu++, hi[Hu] !== e && rD(e));
      }
    }
    function Gf(e) {
      e != null && !Un(e) && b("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
    }
    function rD(e) {
      {
        var t = qe(Lt);
        if (!_b.has(t) && (_b.add(t), hi !== null)) {
          for (var a = "", l = 30, u = 0; u <= Hu; u++) {
            for (var d = hi[u], v = u === Hu ? e : d, y = u + 1 + ". " + d; y.length < l; )
              y += " ";
            y += v + `
`, a += y;
          }
          b(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

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
    function Tb(e, t) {
      if (Cb)
        return !1;
      if (t === null)
        return b("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
      e.length !== t.length && b(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, l, u, d) {
      Ks = d, Lt = t, hi = e !== null ? e._debugHookTypes : null, Hu = -1, Cb = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = W, e !== null && e.memoizedState !== null ? be.current = jw : hi !== null ? be.current = Hw : be.current = Fw;
      var v = a(l, u);
      if (rh) {
        var y = 0;
        do {
          if (rh = !1, ah = 0, y >= nD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, Cb = !1, qn = null, Xn = null, t.updateQueue = null, Hu = -1, be.current = Yw, v = a(l, u);
        } while (rh);
      }
      be.current = bg, t._debugHookTypes = hi;
      var S = qn !== null && qn.next !== null;
      if (Ks = W, Lt = null, qn = null, Xn = null, G = null, hi = null, Hu = -1, e !== null && (e.flags & In) !== (t.flags & In) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & rt) !== He && b("Internal React error: Expected static flag was missing. Please notify the React team."), lg = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function qf() {
      var e = ah !== 0;
      return ah = 0, e;
    }
    function yw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & xa) !== He ? t.flags &= ~(to | Lr | Xt | Xe) : t.flags &= ~(Xt | Xe), e.lanes = hu(e.lanes, a);
    }
    function bw() {
      if (be.current = bg, lg) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lg = !1;
      }
      Ks = W, Lt = null, qn = null, Xn = null, hi = null, Hu = -1, G = null, Lw = !1, rh = !1, ah = 0;
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
    function Sw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Rb(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Db(e, t, a) {
      var l = Ml(), u;
      a !== void 0 ? u = a(t) : u = t, l.memoizedState = l.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      l.queue = d;
      var v = d.dispatch = oD.bind(null, Lt, d);
      return [l.memoizedState, v];
    }
    function Ob(e, t, a) {
      var l = vi(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = qn, v = d.baseQueue, y = u.pending;
      if (y !== null) {
        if (v !== null) {
          var S = v.next, k = y.next;
          v.next = k, y.next = S;
        }
        d.baseQueue !== v && b("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = y, u.pending = null;
      }
      if (v !== null) {
        var E = v.next, N = d.baseState, O = null, j = null, Y = null, I = E;
        do {
          var xe = I.lane;
          if (fo(Ks, xe)) {
            if (Y !== null) {
              var Oe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ft,
                action: I.action,
                hasEagerState: I.hasEagerState,
                eagerState: I.eagerState,
                next: null
              };
              Y = Y.next = Oe;
            }
            if (I.hasEagerState)
              N = I.eagerState;
            else {
              var pt = I.action;
              N = e(N, pt);
            }
          } else {
            var ze = {
              lane: xe,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            };
            Y === null ? (j = Y = ze, O = N) : Y = Y.next = ze, Lt.lanes = Ke(Lt.lanes, xe), kh(xe);
          }
          I = I.next;
        } while (I !== null && I !== E);
        Y === null ? O = N : Y.next = j, Ce(N, l.memoizedState) || fh(), l.memoizedState = N, l.baseState = O, l.baseQueue = Y, u.lastRenderedState = N;
      }
      var st = u.interleaved;
      if (st !== null) {
        var A = st;
        do {
          var B = A.lane;
          Lt.lanes = Ke(Lt.lanes, B), kh(B), A = A.next;
        } while (A !== st);
      } else
        v === null && (u.lanes = W);
      var F = u.dispatch;
      return [l.memoizedState, F];
    }
    function Mb(e, t, a) {
      var l = vi(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, v = u.pending, y = l.memoizedState;
      if (v !== null) {
        u.pending = null;
        var S = v.next, k = S;
        do {
          var E = k.action;
          y = e(y, E), k = k.next;
        } while (k !== S);
        Ce(y, l.memoizedState) || fh(), l.memoizedState = y, l.baseQueue === null && (l.baseState = y), u.lastRenderedState = y;
      }
      return [y, d];
    }
    function AA(e, t, a) {
    }
    function FA(e, t, a) {
    }
    function Lb(e, t, a) {
      var l = Lt, u = Ml(), d, v = yr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Wf || d !== a() && (b("The result of getServerSnapshot should be cached to avoid an infinite loop"), Wf = !0);
      } else {
        if (d = t(), !Wf) {
          var y = t();
          Ce(d, y) || (b("The result of getSnapshot should be cached to avoid an infinite loop"), Wf = !0);
        }
        var S = Fg();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(S, Ks) || xw(l, t, d);
      }
      u.memoizedState = d;
      var k = {
        value: d,
        getSnapshot: t
      };
      return u.queue = k, fg(kw.bind(null, l, k, e), [e]), l.flags |= Xt, ih(Gn | br, ww.bind(null, l, k, d, t), void 0, null), d;
    }
    function og(e, t, a) {
      var l = Lt, u = vi(), d = t();
      if (!Wf) {
        var v = t();
        Ce(d, v) || (b("The result of getSnapshot should be cached to avoid an infinite loop"), Wf = !0);
      }
      var y = u.memoizedState, S = !Ce(y, d);
      S && (u.memoizedState = d, fh());
      var k = u.queue;
      if (oh(kw.bind(null, l, k, e), [e]), k.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & Gn) {
        l.flags |= Xt, ih(Gn | br, ww.bind(null, l, k, d, t), void 0, null);
        var E = Fg();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(E, Ks) || xw(l, t, d);
      }
      return d;
    }
    function xw(e, t, a) {
      e.flags |= bs;
      var l = {
        getSnapshot: t,
        value: a
      }, u = Lt.updateQueue;
      if (u === null)
        u = Sw(), Lt.updateQueue = u, u.stores = [l];
      else {
        var d = u.stores;
        d === null ? u.stores = [l] : d.push(l);
      }
    }
    function ww(e, t, a, l) {
      t.value = a, t.getSnapshot = l, Ew(t) && _w(e);
    }
    function kw(e, t, a) {
      var l = function() {
        Ew(t) && _w(e);
      };
      return a(l);
    }
    function Ew(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !Ce(a, l);
      } catch {
        return !0;
      }
    }
    function _w(e) {
      var t = Ra(e, Ve);
      t !== null && er(t, e, Ve, Ft);
    }
    function ug(e) {
      var t = Ml();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: Rb,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = uD.bind(null, Lt, a);
      return [t.memoizedState, l];
    }
    function Nb(e) {
      return Ob(Rb);
    }
    function Ub(e) {
      return Mb(Rb);
    }
    function ih(e, t, a, l) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, d = Lt.updateQueue;
      if (d === null)
        d = Sw(), Lt.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = u.next = u;
        else {
          var y = v.next;
          v.next = u, u.next = y, d.lastEffect = u;
        }
      }
      return u;
    }
    function zb(e) {
      var t = Ml();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sg(e) {
      var t = vi();
      return t.memoizedState;
    }
    function lh(e, t, a, l) {
      var u = Ml(), d = l === void 0 ? null : l;
      Lt.flags |= e, u.memoizedState = ih(Gn | t, a, void 0, d);
    }
    function cg(e, t, a, l) {
      var u = vi(), d = l === void 0 ? null : l, v = void 0;
      if (qn !== null) {
        var y = qn.memoizedState;
        if (v = y.destroy, d !== null) {
          var S = y.deps;
          if (Tb(d, S)) {
            u.memoizedState = ih(t, a, v, d);
            return;
          }
        }
      }
      Lt.flags |= e, u.memoizedState = ih(Gn | t, a, v, d);
    }
    function fg(e, t) {
      return (Lt.mode & xa) !== He ? lh(to | Xt | pl, br, e, t) : lh(Xt | pl, br, e, t);
    }
    function oh(e, t) {
      return cg(Xt, br, e, t);
    }
    function Ab(e, t) {
      return lh(Xe, Ol, e, t);
    }
    function dg(e, t) {
      return cg(Xe, Ol, e, t);
    }
    function Fb(e, t) {
      var a = Xe;
      return a |= Mr, (Lt.mode & xa) !== He && (a |= Lr), lh(a, Qn, e, t);
    }
    function pg(e, t) {
      return cg(Xe, Qn, e, t);
    }
    function Cw(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || b("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function Hb(e, t, a) {
      typeof t != "function" && b("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, u = Xe;
      return u |= Mr, (Lt.mode & xa) !== He && (u |= Lr), lh(u, Qn, Cw.bind(null, t, e), l);
    }
    function hg(e, t, a) {
      typeof t != "function" && b("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return cg(Xe, Qn, Cw.bind(null, t, e), l);
    }
    function aD(e, t) {
    }
    var vg = aD;
    function jb(e, t) {
      var a = Ml(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function mg(e, t) {
      var a = vi(), l = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && l !== null) {
        var d = u[1];
        if (Tb(l, d))
          return u[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function Yb(e, t) {
      var a = Ml(), l = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, l], u;
    }
    function gg(e, t) {
      var a = vi(), l = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && l !== null) {
        var d = u[1];
        if (Tb(l, d))
          return u[0];
      }
      var v = e();
      return a.memoizedState = [v, l], v;
    }
    function Pb(e) {
      var t = Ml();
      return t.memoizedState = e, e;
    }
    function Tw(e) {
      var t = vi(), a = qn, l = a.memoizedState;
      return Dw(t, l, e);
    }
    function Rw(e) {
      var t = vi();
      if (qn === null)
        return t.memoizedState = e, e;
      var a = qn.memoizedState;
      return Dw(t, a, e);
    }
    function Dw(e, t, a) {
      var l = !Gy(Ks);
      if (l) {
        if (!Ce(a, t)) {
          var u = up();
          Lt.lanes = Ke(Lt.lanes, u), kh(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, fh()), e.memoizedState = a, a;
    }
    function iD(e, t, a) {
      var l = ka();
      Cn(sr(l, Wn)), e(!0);
      var u = nh.transition;
      nh.transition = {};
      var d = nh.transition;
      nh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Cn(l), nh.transition = u, u === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function Vb() {
      var e = ug(!1), t = e[0], a = e[1], l = iD.bind(null, a), u = Ml();
      return u.memoizedState = l, [t, l];
    }
    function Ow() {
      var e = Nb(), t = e[0], a = vi(), l = a.memoizedState;
      return [t, l];
    }
    function Mw() {
      var e = Ub(), t = e[0], a = vi(), l = a.memoizedState;
      return [t, l];
    }
    var Lw = !1;
    function lD() {
      return Lw;
    }
    function $b() {
      var e = Ml(), t = Fg(), a = t.identifierPrefix, l;
      if (yr()) {
        var u = SR();
        l = ":" + a + "R" + u;
        var d = ah++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = tD++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function yg() {
      var e = vi(), t = e.memoizedState;
      return t;
    }
    function oD(e, t, a) {
      typeof arguments[3] == "function" && b("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = $u(e), u = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Nw(e))
        Uw(t, u);
      else {
        var d = K1(e, t, u, l);
        if (d !== null) {
          var v = la();
          er(d, e, l, v), zw(d, t, l);
        }
      }
      Aw(e, l);
    }
    function uD(e, t, a) {
      typeof arguments[3] == "function" && b("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = $u(e), u = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Nw(e))
        Uw(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === W && (d === null || d.lanes === W)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = be.current, be.current = Ii;
            try {
              var S = t.lastRenderedState, k = v(S, a);
              if (u.hasEagerState = !0, u.eagerState = k, Ce(k, S)) {
                YR(e, t, u, l);
                return;
              }
            } catch {
            } finally {
              be.current = y;
            }
          }
        }
        var E = K1(e, t, u, l);
        if (E !== null) {
          var N = la();
          er(E, e, l, N), zw(E, t, l);
        }
      }
      Aw(e, l);
    }
    function Nw(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
    }
    function Uw(e, t) {
      rh = lg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function zw(e, t, a) {
      if (op(a)) {
        var l = t.lanes;
        l = sp(l, e.pendingLanes);
        var u = Ke(l, a);
        t.lanes = u, vu(e, u);
      }
    }
    function Aw(e, t, a) {
      bl(e, t);
    }
    var bg = {
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
      unstable_isNewReconciler: ue
    }, Fw = null, Hw = null, jw = null, Yw = null, Ll = null, Ii = null, Sg = null;
    {
      var Ib = function() {
        b("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        b("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Fw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", _t(), Gf(t), jb(e, t);
        },
        useContext: function(e) {
          return G = "useContext", _t(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", _t(), Gf(t), fg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", _t(), Gf(a), Hb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", _t(), Gf(t), Ab(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", _t(), Gf(t), Fb(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", _t(), Gf(t);
          var a = be.current;
          be.current = Ll;
          try {
            return Yb(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", _t();
          var l = be.current;
          be.current = Ll;
          try {
            return Db(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", _t(), zb(e);
        },
        useState: function(e) {
          G = "useState", _t();
          var t = be.current;
          be.current = Ll;
          try {
            return ug(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", _t(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", _t(), Pb(e);
        },
        useTransition: function() {
          return G = "useTransition", _t(), Vb();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", _t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", _t(), Lb(e, t, a);
        },
        useId: function() {
          return G = "useId", _t(), $b();
        },
        unstable_isNewReconciler: ue
      }, Hw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), jb(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), fg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), Hb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), Ab(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), Fb(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = be.current;
          be.current = Ll;
          try {
            return Yb(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = be.current;
          be.current = Ll;
          try {
            return Db(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), zb(e);
        },
        useState: function(e) {
          G = "useState", fe();
          var t = be.current;
          be.current = Ll;
          try {
            return ug(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), Pb(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), Vb();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), Lb(e, t, a);
        },
        useId: function() {
          return G = "useId", fe(), $b();
        },
        unstable_isNewReconciler: ue
      }, jw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), mg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), oh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), pg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = be.current;
          be.current = Ii;
          try {
            return gg(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = be.current;
          be.current = Ii;
          try {
            return Ob(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), sg();
        },
        useState: function(e) {
          G = "useState", fe();
          var t = be.current;
          be.current = Ii;
          try {
            return Nb(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), vg();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), Tw(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), Ow();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), og(e, t);
        },
        useId: function() {
          return G = "useId", fe(), yg();
        },
        unstable_isNewReconciler: ue
      }, Yw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), mg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), oh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), pg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = be.current;
          be.current = Sg;
          try {
            return gg(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = be.current;
          be.current = Sg;
          try {
            return Mb(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), sg();
        },
        useState: function(e) {
          G = "useState", fe();
          var t = be.current;
          be.current = Sg;
          try {
            return Ub(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), vg();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), Rw(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), Mw();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), og(e, t);
        },
        useId: function() {
          return G = "useId", fe(), yg();
        },
        unstable_isNewReconciler: ue
      }, Ll = {
        readContext: function(e) {
          return Ib(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), _t(), jb(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), _t(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), _t(), fg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), _t(), Hb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), _t(), Ab(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), _t(), Fb(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), _t();
          var a = be.current;
          be.current = Ll;
          try {
            return Yb(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), _t();
          var l = be.current;
          be.current = Ll;
          try {
            return Db(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), _t(), zb(e);
        },
        useState: function(e) {
          G = "useState", Ge(), _t();
          var t = be.current;
          be.current = Ll;
          try {
            return ug(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), _t(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), _t(), Pb(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), _t(), Vb();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), _t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), _t(), Lb(e, t, a);
        },
        useId: function() {
          return G = "useId", Ge(), _t(), $b();
        },
        unstable_isNewReconciler: ue
      }, Ii = {
        readContext: function(e) {
          return Ib(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), fe(), mg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), fe(), oh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), fe(), hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), fe(), dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), fe(), pg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), fe();
          var a = be.current;
          be.current = Ii;
          try {
            return gg(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), fe();
          var l = be.current;
          be.current = Ii;
          try {
            return Ob(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), fe(), sg();
        },
        useState: function(e) {
          G = "useState", Ge(), fe();
          var t = be.current;
          be.current = Ii;
          try {
            return Nb(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), fe(), vg();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), fe(), Tw(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), fe(), Ow();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), fe(), og(e, t);
        },
        useId: function() {
          return G = "useId", Ge(), fe(), yg();
        },
        unstable_isNewReconciler: ue
      }, Sg = {
        readContext: function(e) {
          return Ib(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), fe(), mg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), fe(), oh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), fe(), hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), fe(), dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), fe(), pg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), fe();
          var a = be.current;
          be.current = Ii;
          try {
            return gg(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), fe();
          var l = be.current;
          be.current = Ii;
          try {
            return Mb(e, t, a);
          } finally {
            be.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), fe(), sg();
        },
        useState: function(e) {
          G = "useState", Ge(), fe();
          var t = be.current;
          be.current = Ii;
          try {
            return Ub(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), fe(), vg();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), fe(), Rw(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), fe(), Mw();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), fe(), og(e, t);
        },
        useId: function() {
          return G = "useId", Ge(), fe(), yg();
        },
        unstable_isNewReconciler: ue
      };
    }
    var ju = s.unstable_now, Pw = 0, xg = -1, uh = -1, wg = -1, Bb = !1, kg = !1;
    function Vw() {
      return Bb;
    }
    function sD() {
      kg = !0;
    }
    function cD() {
      Bb = !1, kg = !1;
    }
    function fD() {
      Bb = kg, kg = !1;
    }
    function $w() {
      return Pw;
    }
    function Iw() {
      Pw = ju();
    }
    function Wb(e) {
      uh = ju(), e.actualStartTime < 0 && (e.actualStartTime = ju());
    }
    function Bw(e) {
      uh = -1;
    }
    function Eg(e, t) {
      if (uh >= 0) {
        var a = ju() - uh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), uh = -1;
      }
    }
    function Nl(e) {
      if (xg >= 0) {
        var t = ju() - xg;
        xg = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case ge:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gb(e) {
      if (wg >= 0) {
        var t = ju() - wg;
        wg = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case ge:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ul() {
      xg = ju();
    }
    function Qb() {
      wg = ju();
    }
    function qb(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: gd(t),
        digest: null
      };
    }
    function Xb(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function dD(e, t) {
      return !0;
    }
    function Kb(e, t) {
      try {
        var a = dD(e, t);
        if (a === !1)
          return;
        var l = t.value, u = t.source, d = t.stack, v = d !== null ? d : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(l);
        }
        var y = u ? qe(u) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", k;
        if (e.tag === U)
          k = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = qe(e) || "Anonymous";
          k = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var N = S + `
` + v + `

` + ("" + k);
        console.error(N);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var pD = typeof WeakMap == "function" ? WeakMap : Map;
    function Ww(e, t, a) {
      var l = Ro(Ft, a);
      l.tag = K0, l.payload = {
        element: null
      };
      var u = t.value;
      return l.callback = function() {
        iM(u), Kb(e, t);
      }, l;
    }
    function Zb(e, t, a) {
      var l = Ro(Ft, a);
      l.tag = K0;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        l.payload = function() {
          return u(d);
        }, l.callback = function() {
          rE(e), Kb(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        rE(e), Kb(e, t), typeof u != "function" && rM(this);
        var S = t.value, k = t.stack;
        this.componentDidCatch(S, {
          componentStack: k !== null ? k : ""
        }), typeof u != "function" && (Fr(e.lanes, Ve) || b("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), l;
    }
    function Gw(e, t, a) {
      var l = e.pingCache, u;
      if (l === null ? (l = e.pingCache = new pD(), u = /* @__PURE__ */ new Set(), l.set(t, u)) : (u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = lM.bind(null, e, t, a);
        Bn && Eh(e, a), t.then(d, d);
      }
    }
    function hD(e, t, a, l) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        u.add(a);
    }
    function vD(e, t) {
      var a = e.tag;
      if ((e.mode & rt) === He && (a === R || a === ee || a === he)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Qw(e) {
      var t = e;
      do {
        if (t.tag === ve && JR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function qw(e, t, a, l, u) {
      if ((e.mode & rt) === He) {
        if (e === t)
          e.flags |= An;
        else {
          if (e.flags |= Be, a.flags |= Ss, a.flags &= ~(Nc | Zr), a.tag === M) {
            var d = a.alternate;
            if (d === null)
              a.tag = tt;
            else {
              var v = Ro(Ft, Ve);
              v.tag = Qm, zu(a, v, Ve);
            }
          }
          a.lanes = Ke(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= An, e.lanes = u, e;
    }
    function mD(e, t, a, l, u) {
      if (a.flags |= Zr, Bn && Eh(e, u), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        vD(a), yr() && a.mode & rt && j1();
        var v = Qw(t);
        if (v !== null) {
          v.flags &= ~ln, qw(v, t, a, e, u), v.mode & rt && Gw(e, d, u), hD(v, e, d);
          return;
        } else {
          if (!pu(u)) {
            Gw(e, d, u), MS();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = y;
        }
      } else if (yr() && a.mode & rt) {
        j1();
        var S = Qw(t);
        if (S !== null) {
          (S.flags & An) === Ue && (S.flags |= ln), qw(S, t, a, e, u), I0(Zs(l, a));
          return;
        }
      }
      l = Zs(l, a), qO(l);
      var k = t;
      do {
        switch (k.tag) {
          case U: {
            var E = l;
            k.flags |= An;
            var N = _n(u);
            k.lanes = Ke(k.lanes, N);
            var O = Ww(k, E, N);
            eb(k, O);
            return;
          }
          case M:
            var j = l, Y = k.type, I = k.stateNode;
            if ((k.flags & Be) === Ue && (typeof Y.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && !Qk(I))) {
              k.flags |= An;
              var xe = _n(u);
              k.lanes = Ke(k.lanes, xe);
              var ze = Zb(k, j, xe);
              eb(k, ze);
              return;
            }
            break;
        }
        k = k.return;
      } while (k !== null);
    }
    function gD() {
      return null;
    }
    var sh = f.ReactCurrentOwner, Bi = !1, Jb, ch, eS, tS, nS, Js, rS, _g;
    Jb = {}, ch = {}, eS = {}, tS = {}, nS = {}, Js = !1, rS = {}, _g = {};
    function aa(e, t, a, l) {
      e === null ? t.child = pw(t, null, a, l) : t.child = Vf(t, e.child, a, l);
    }
    function yD(e, t, a, l) {
      t.child = Vf(t, e.child, null, l), t.child = Vf(t, null, a, l);
    }
    function Xw(e, t, a, l, u) {
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
      var v = a.render, y = t.ref, S, k;
      Pf(t, u), yl(t);
      {
        if (sh.current = t, Va(!0), S = Qf(e, t, v, l, y, u), k = qf(), t.mode & en) {
          En(!0);
          try {
            S = Qf(e, t, v, l, y, u), k = qf();
          } finally {
            En(!1);
          }
        }
        Va(!1);
      }
      return no(), e !== null && !Bi ? (yw(e, t, u), Do(e, t, u)) : (yr() && k && H0(t), t.flags |= fl, aa(e, t, S, u), t.child);
    }
    function Kw(e, t, a, l, u) {
      if (e === null) {
        var d = a.type;
        if (kM(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = rd(d), t.tag = he, t.type = v, lS(t, d), Zw(e, t, v, l, u);
        }
        {
          var y = d.propTypes;
          y && ji(
            y,
            l,
            // Resolved props
            "prop",
            zt(d)
          );
        }
        var S = VS(a.type, null, l, t, t.mode, u);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var k = a.type, E = k.propTypes;
        E && ji(
          E,
          l,
          // Resolved props
          "prop",
          zt(k)
        );
      }
      var N = e.child, O = dS(e, u);
      if (!O) {
        var j = N.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Le, Y(j, l) && e.ref === t.ref)
          return Do(e, t, u);
      }
      t.flags |= fl;
      var I = ac(N, l);
      return I.ref = t.ref, I.return = t, t.child = I, I;
    }
    function Zw(e, t, a, l, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === Ye) {
          var v = d, y = v._payload, S = v._init;
          try {
            d = S(y);
          } catch {
            d = null;
          }
          var k = d && d.propTypes;
          k && ji(
            k,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(d)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (Le(E, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Bi = !1, t.pendingProps = l = E, dS(e, u))
            (e.flags & Ss) !== Ue && (Bi = !0);
          else
            return t.lanes = e.lanes, Do(e, t, u);
      }
      return aS(e, t, a, l, u);
    }
    function Jw(e, t, a) {
      var l = t.pendingProps, u = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || Se)
        if ((t.mode & rt) === He) {
          var v = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Hg(t, a);
        } else if (Fr(a, Ar)) {
          var N = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var O = d !== null ? d.baseLanes : a;
          Hg(t, O);
        } else {
          var y = null, S;
          if (d !== null) {
            var k = d.baseLanes;
            S = Ke(k, a);
          } else
            S = a;
          t.lanes = t.childLanes = Ar;
          var E = {
            baseLanes: S,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, Hg(t, S), null;
        }
      else {
        var j;
        d !== null ? (j = Ke(d.baseLanes, a), t.memoizedState = null) : j = a, Hg(t, j);
      }
      return aa(e, t, u, a), t.child;
    }
    function bD(e, t, a) {
      var l = t.pendingProps;
      return aa(e, t, l, a), t.child;
    }
    function SD(e, t, a) {
      var l = t.pendingProps.children;
      return aa(e, t, l, a), t.child;
    }
    function xD(e, t, a) {
      {
        t.flags |= Xe;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return aa(e, t, d, a), t.child;
    }
    function ek(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Or, t.flags |= Wd);
    }
    function aS(e, t, a, l, u) {
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
        var y = zf(t, a, !0);
        v = Af(t, y);
      }
      var S, k;
      Pf(t, u), yl(t);
      {
        if (sh.current = t, Va(!0), S = Qf(e, t, a, l, v, u), k = qf(), t.mode & en) {
          En(!0);
          try {
            S = Qf(e, t, a, l, v, u), k = qf();
          } finally {
            En(!1);
          }
        }
        Va(!1);
      }
      return no(), e !== null && !Bi ? (yw(e, t, u), Do(e, t, u)) : (yr() && k && H0(t), t.flags |= fl, aa(e, t, S, u), t.child);
    }
    function tk(e, t, a, l, u) {
      {
        switch (HM(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, y = new v(t.memoizedProps, d.context), S = y.state;
            d.updater.enqueueSetState(d, S, null);
            break;
          }
          case !0: {
            t.flags |= Be, t.flags |= An;
            var k = new Error("Simulated error coming from DevTools"), E = _n(u);
            t.lanes = Ke(t.lanes, E);
            var N = Zb(t, Zs(k, t), E);
            eb(t, N);
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
      Dl(a) ? (j = !0, Fm(t)) : j = !1, Pf(t, u);
      var Y = t.stateNode, I;
      Y === null ? (Tg(e, t), uw(t, a, l), db(t, a, l, u), I = !0) : e === null ? I = GR(t, a, l, u) : I = QR(e, t, a, l, u);
      var xe = iS(e, t, a, I, j, u);
      {
        var ze = t.stateNode;
        I && ze.props !== l && (Js || b("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), Js = !0);
      }
      return xe;
    }
    function iS(e, t, a, l, u, d) {
      ek(e, t);
      var v = (t.flags & Be) !== Ue;
      if (!l && !v)
        return u && z1(t, a, !1), Do(e, t, d);
      var y = t.stateNode;
      sh.current = t;
      var S;
      if (v && typeof a.getDerivedStateFromError != "function")
        S = null, Bw();
      else {
        yl(t);
        {
          if (Va(!0), S = y.render(), t.mode & en) {
            En(!0);
            try {
              y.render();
            } finally {
              En(!1);
            }
          }
          Va(!1);
        }
        no();
      }
      return t.flags |= fl, e !== null && v ? yD(e, t, S, d) : aa(e, t, S, d), t.memoizedState = y.state, u && z1(t, a, !0), t.child;
    }
    function nk(e) {
      var t = e.stateNode;
      t.pendingContext ? N1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && N1(e, t.context, !1), yb(e, t.containerInfo);
    }
    function wD(e, t, a) {
      if (nk(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, u = t.memoizedState, d = u.element;
      ew(e, t), Zm(t, l, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (u.isDehydrated) {
        var S = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, k = t.updateQueue;
        if (k.baseState = S, t.memoizedState = S, t.flags & ln) {
          var E = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return rk(e, t, y, a, E);
        } else if (y !== d) {
          var N = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return rk(e, t, y, a, N);
        } else {
          CR(t);
          var O = pw(t, null, y, a);
          t.child = O;
          for (var j = O; j; )
            j.flags = j.flags & ~$t | ya, j = j.sibling;
        }
      } else {
        if (jf(), y === d)
          return Do(e, t, a);
        aa(e, t, y, a);
      }
      return t.child;
    }
    function rk(e, t, a, l, u) {
      return jf(), I0(u), t.flags |= ln, aa(e, t, a, l), t.child;
    }
    function kD(e, t, a) {
      vw(t), e === null && $0(t);
      var l = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = u.children, y = E0(l, u);
      return y ? v = null : d !== null && E0(l, d) && (t.flags |= Et), ek(e, t), aa(e, t, v, a), t.child;
    }
    function ED(e, t) {
      return e === null && $0(t), null;
    }
    function _D(e, t, a, l) {
      Tg(e, t);
      var u = t.pendingProps, d = a, v = d._payload, y = d._init, S = y(v);
      t.type = S;
      var k = t.tag = EM(S), E = Vi(S, u), N;
      switch (k) {
        case R:
          return lS(t, S), t.type = S = rd(S), N = aS(null, t, S, E, l), N;
        case M:
          return t.type = S = AS(S), N = tk(null, t, S, E, l), N;
        case ee:
          return t.type = S = FS(S), N = Xw(null, t, S, E, l), N;
        case le: {
          if (t.type !== t.elementType) {
            var O = S.propTypes;
            O && ji(
              O,
              E,
              // Resolved for outer only
              "prop",
              zt(S)
            );
          }
          return N = Kw(
            null,
            t,
            S,
            Vi(S.type, E),
            // The inner type can have defaults too
            l
          ), N;
        }
      }
      var j = "";
      throw S !== null && typeof S == "object" && S.$$typeof === Ye && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function CD(e, t, a, l, u) {
      Tg(e, t), t.tag = M;
      var d;
      return Dl(a) ? (d = !0, Fm(t)) : d = !1, Pf(t, u), uw(t, a, l), db(t, a, l, u), iS(null, t, a, !0, d, u);
    }
    function TD(e, t, a, l) {
      Tg(e, t);
      var u = t.pendingProps, d;
      {
        var v = zf(t, a, !1);
        d = Af(t, v);
      }
      Pf(t, l);
      var y, S;
      yl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var k = zt(a) || "Unknown";
          Jb[k] || (b("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", k, k), Jb[k] = !0);
        }
        t.mode & en && Pi.recordLegacyContextWarning(t, null), Va(!0), sh.current = t, y = Qf(null, t, a, u, d, l), S = qf(), Va(!1);
      }
      if (no(), t.flags |= fl, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var E = zt(a) || "Unknown";
        ch[E] || (b("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), ch[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var N = zt(a) || "Unknown";
          ch[N] || (b("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), ch[N] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Dl(a) ? (O = !0, Fm(t)) : O = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, J0(t), ow(t, y), db(t, a, u, l), iS(null, t, a, !0, O, l);
      } else {
        if (t.tag = R, t.mode & en) {
          En(!0);
          try {
            y = Qf(null, t, a, u, d, l), S = qf();
          } finally {
            En(!1);
          }
        }
        return yr() && S && H0(t), aa(null, t, y, l), lS(t, a), t.child;
      }
    }
    function lS(e, t) {
      {
        if (t && t.childContextTypes && b("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = ha();
          l && (a += `

Check the render method of \`` + l + "`.");
          var u = l || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), nS[u] || (nS[u] = !0, b("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = zt(t) || "Unknown";
          tS[v] || (b("%s: Function components do not support getDerivedStateFromProps.", v), tS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = zt(t) || "Unknown";
          eS[y] || (b("%s: Function components do not support contextType.", y), eS[y] = !0);
        }
      }
    }
    var oS = {
      dehydrated: null,
      treeContext: null,
      retryLane: ft
    };
    function uS(e) {
      return {
        baseLanes: e,
        cachePool: gD(),
        transitions: null
      };
    }
    function RD(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function DD(e, t, a, l) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return xb(e, th);
    }
    function OD(e, t) {
      return hu(e.childLanes, t);
    }
    function ak(e, t, a) {
      var l = t.pendingProps;
      jM(t) && (t.flags |= Be);
      var u = $i.current, d = !1, v = (t.flags & Be) !== Ue;
      if (v || DD(u, e) ? (d = !0, t.flags &= ~Be) : (e === null || e.memoizedState !== null) && (u = ZR(u, gw)), u = If(u), Fu(t, u), e === null) {
        $0(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return zD(t, S);
        }
        var k = l.children, E = l.fallback;
        if (d) {
          var N = MD(t, k, E, a), O = t.child;
          return O.memoizedState = uS(a), t.memoizedState = oS, N;
        } else
          return sS(t, k);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var Y = j.dehydrated;
          if (Y !== null)
            return AD(e, t, v, l, Y, j, a);
        }
        if (d) {
          var I = l.fallback, xe = l.children, ze = ND(e, t, xe, I, a), Oe = t.child, pt = e.child.memoizedState;
          return Oe.memoizedState = pt === null ? uS(a) : RD(pt, a), Oe.childLanes = OD(e, a), t.memoizedState = oS, ze;
        } else {
          var st = l.children, A = LD(e, t, st, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function sS(e, t, a) {
      var l = e.mode, u = {
        mode: "visible",
        children: t
      }, d = cS(u, l);
      return d.return = e, e.child = d, d;
    }
    function MD(e, t, a, l) {
      var u = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, y, S;
      return (u & rt) === He && d !== null ? (y = d, y.childLanes = W, y.pendingProps = v, e.mode & Pe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), S = Bu(a, u, l, null)) : (y = cS(v, u), S = Bu(a, u, l, null)), y.return = e, S.return = e, y.sibling = S, e.child = y, S;
    }
    function cS(e, t, a) {
      return iE(e, t, W, null);
    }
    function ik(e, t) {
      return ac(e, t);
    }
    function LD(e, t, a, l) {
      var u = e.child, d = u.sibling, v = ik(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & rt) === He && (v.lanes = l), v.return = t, v.sibling = null, d !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [d], t.flags |= kt) : y.push(d);
      }
      return t.child = v, v;
    }
    function ND(e, t, a, l, u) {
      var d = t.mode, v = e.child, y = v.sibling, S = {
        mode: "hidden",
        children: a
      }, k;
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
        var E = t.child;
        k = E, k.childLanes = W, k.pendingProps = S, t.mode & Pe && (k.actualDuration = 0, k.actualStartTime = -1, k.selfBaseDuration = v.selfBaseDuration, k.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        k = ik(v, S), k.subtreeFlags = v.subtreeFlags & In;
      var N;
      return y !== null ? N = ac(y, l) : (N = Bu(l, d, u, null), N.flags |= $t), N.return = t, k.return = t, k.sibling = N, t.child = k, N;
    }
    function Cg(e, t, a, l) {
      l !== null && I0(l), Vf(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, v = sS(t, d);
      return v.flags |= $t, t.memoizedState = null, v;
    }
    function UD(e, t, a, l, u) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, y = cS(v, d), S = Bu(l, d, u, null);
      return S.flags |= $t, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & rt) !== He && Vf(t, e.child, null, u), S;
    }
    function zD(e, t, a) {
      return (e.mode & rt) === He ? (b("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : R0(t) ? e.lanes = io : e.lanes = Ar, null;
    }
    function AD(e, t, a, l, u, d, v) {
      if (a)
        if (t.flags & ln) {
          t.flags &= ~ln;
          var A = Xb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cg(e, t, v, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Be, null;
          var B = l.children, F = l.fallback, J = UD(e, t, B, F, v), we = t.child;
          return we.memoizedState = uS(v), t.memoizedState = oS, J;
        }
      else {
        if (ER(), (t.mode & rt) === He)
          return Cg(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (R0(u)) {
          var y, S, k;
          {
            var E = PT(u);
            y = E.digest, S = E.message, k = E.stack;
          }
          var N;
          S ? N = new Error(S) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = Xb(N, y, k);
          return Cg(e, t, v, O);
        }
        var j = Fr(v, e.childLanes);
        if (Bi || j) {
          var Y = Fg();
          if (Y !== null) {
            var I = qy(Y, v);
            if (I !== ft && I !== d.retryLane) {
              d.retryLane = I;
              var xe = Ft;
              Ra(e, I), er(Y, e, I, xe);
            }
          }
          MS();
          var ze = Xb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cg(e, t, v, ze);
        } else if (T1(u)) {
          t.flags |= Be, t.child = e.child;
          var Oe = oM.bind(null, e);
          return VT(u, Oe), null;
        } else {
          TR(t, u, d.treeContext);
          var pt = l.children, st = sS(t, pt);
          return st.flags |= ya, st;
        }
      }
    }
    function lk(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = Ke(l.lanes, t)), q0(e.return, t, a);
    }
    function FD(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ve) {
          var u = l.memoizedState;
          u !== null && lk(l, a, e);
        } else if (l.tag === ht)
          lk(l, a, e);
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
    function HD(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && ig(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !rS[e])
        if (rS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              b('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              b('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              b('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          b('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function YD(e, t) {
      e !== void 0 && !_g[e] && (e !== "collapsed" && e !== "hidden" ? (_g[e] = !0, b('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_g[e] = !0, b('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function ok(e, t) {
      {
        var a = Un(e), l = !a && typeof wi(e) == "function";
        if (a || l) {
          var u = a ? "array" : "iterable";
          return b("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function PD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!ok(e[a], a))
              return;
        } else {
          var l = wi(e);
          if (typeof l == "function") {
            var u = l.call(e);
            if (u)
              for (var d = u.next(), v = 0; !d.done; d = u.next()) {
                if (!ok(d.value, v))
                  return;
                v++;
              }
          } else
            b('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function fS(e, t, a, l, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = a, d.tailMode = u);
    }
    function uk(e, t, a) {
      var l = t.pendingProps, u = l.revealOrder, d = l.tail, v = l.children;
      jD(u), YD(d, u), PD(v, u), aa(e, t, v, a);
      var y = $i.current, S = xb(y, th);
      if (S)
        y = wb(y, th), t.flags |= Be;
      else {
        var k = e !== null && (e.flags & Be) !== Ue;
        k && FD(t, t.child, a), y = If(y);
      }
      if (Fu(t, y), (t.mode & rt) === He)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var E = HD(t.child), N;
            E === null ? (N = t.child, t.child = null) : (N = E.sibling, E.sibling = null), fS(
              t,
              !1,
              // isBackwards
              N,
              E,
              d
            );
            break;
          }
          case "backwards": {
            var O = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var Y = j.alternate;
              if (Y !== null && ig(Y) === null) {
                t.child = j;
                break;
              }
              var I = j.sibling;
              j.sibling = O, O = j, j = I;
            }
            fS(
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
            fS(
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
    function VD(e, t, a) {
      yb(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Vf(t, null, l, a) : aa(e, t, l, a), t.child;
    }
    var sk = !1;
    function $D(e, t, a) {
      var l = t.type, u = l._context, d = t.pendingProps, v = t.memoizedProps, y = d.value;
      {
        "value" in d || sk || (sk = !0, b("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && ji(S, d, "prop", "Context.Provider");
      }
      if (X1(t, u, y), v !== null) {
        var k = v.value;
        if (Ce(k, y)) {
          if (v.children === d.children && !zm())
            return Do(e, t, a);
        } else
          FR(t, u, a);
      }
      var E = d.children;
      return aa(e, t, E, a), t.child;
    }
    var ck = !1;
    function ID(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (ck || (ck = !0, b("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && b("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Pf(t, a);
      var v = Pn(l);
      yl(t);
      var y;
      return sh.current = t, Va(!0), y = d(v), Va(!1), no(), t.flags |= fl, aa(e, t, y, a), t.child;
    }
    function fh() {
      Bi = !0;
    }
    function Tg(e, t) {
      (t.mode & rt) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= $t);
    }
    function Do(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Bw(), kh(t.lanes), Fr(a, t.childLanes) ? (qR(e, t), t.child) : null;
    }
    function BD(e, t, a) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === l.child)
          l.child = a;
        else {
          var u = l.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var d = l.deletions;
        return d === null ? (l.deletions = [e], l.flags |= kt) : d.push(e), a.flags |= $t, a;
      }
    }
    function dS(e, t) {
      var a = e.lanes;
      return !!Fr(a, t);
    }
    function WD(e, t, a) {
      switch (t.tag) {
        case U:
          nk(t), t.stateNode, jf();
          break;
        case Q:
          vw(t);
          break;
        case M: {
          var l = t.type;
          Dl(l) && Fm(t);
          break;
        }
        case $:
          yb(t, t.stateNode.containerInfo);
          break;
        case ie: {
          var u = t.memoizedProps.value, d = t.type._context;
          X1(t, d, u);
          break;
        }
        case ge:
          {
            var v = Fr(a, t.childLanes);
            v && (t.flags |= Xe);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case ve: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return Fu(t, If($i.current)), t.flags |= Be, null;
            var k = t.child, E = k.childLanes;
            if (Fr(a, E))
              return ak(e, t, a);
            Fu(t, If($i.current));
            var N = Do(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Fu(t, If($i.current));
          break;
        }
        case ht: {
          var O = (e.flags & Be) !== Ue, j = Fr(a, t.childLanes);
          if (O) {
            if (j)
              return uk(e, t, a);
            t.flags |= Be;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Fu(t, $i.current), j)
            break;
          return null;
        }
        case $e:
        case et:
          return t.lanes = W, Jw(e, t, a);
      }
      return Do(e, t, a);
    }
    function fk(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return BD(e, t, VS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, u = t.pendingProps;
        if (l !== u || zm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Bi = !0;
        else {
          var d = dS(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Be) === Ue)
            return Bi = !1, WD(e, t, a);
          (e.flags & Ss) !== Ue ? Bi = !0 : Bi = !1;
        }
      } else if (Bi = !1, yr() && yR(t)) {
        var v = t.index, y = bR();
        H1(t, y, v);
      }
      switch (t.lanes = W, t.tag) {
        case P:
          return TD(e, t, t.type, a);
        case it: {
          var S = t.elementType;
          return _D(e, t, S, a);
        }
        case R: {
          var k = t.type, E = t.pendingProps, N = t.elementType === k ? E : Vi(k, E);
          return aS(e, t, k, N, a);
        }
        case M: {
          var O = t.type, j = t.pendingProps, Y = t.elementType === O ? j : Vi(O, j);
          return tk(e, t, O, Y, a);
        }
        case U:
          return wD(e, t, a);
        case Q:
          return kD(e, t, a);
        case ne:
          return ED(e, t);
        case ve:
          return ak(e, t, a);
        case $:
          return VD(e, t, a);
        case ee: {
          var I = t.type, xe = t.pendingProps, ze = t.elementType === I ? xe : Vi(I, xe);
          return Xw(e, t, I, ze, a);
        }
        case ae:
          return bD(e, t, a);
        case se:
          return SD(e, t, a);
        case ge:
          return xD(e, t, a);
        case ie:
          return $D(e, t, a);
        case Me:
          return ID(e, t, a);
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
          return st = Vi(Oe.type, st), Kw(e, t, Oe, st, a);
        }
        case he:
          return Zw(e, t, t.type, t.pendingProps, a);
        case tt: {
          var B = t.type, F = t.pendingProps, J = t.elementType === B ? F : Vi(B, F);
          return CD(e, t, B, J, a);
        }
        case ht:
          return uk(e, t, a);
        case Vt:
          break;
        case $e:
          return Jw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= Xe;
    }
    function dk(e) {
      e.flags |= Or, e.flags |= Wd;
    }
    var pk, pS, hk, vk;
    pk = function(e, t, a, l) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Q || u.tag === ne)
          vT(e, u.stateNode);
        else if (u.tag !== $) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, pS = function(e, t) {
    }, hk = function(e, t, a, l, u) {
      var d = e.memoizedProps;
      if (d !== l) {
        var v = t.stateNode, y = bb(), S = gT(v, a, d, l, u, y);
        t.updateQueue = S, S && Xf(t);
      }
    }, vk = function(e, t, a, l) {
      a !== l && Xf(t);
    };
    function dh(e, t) {
      if (!yr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, l = null; a !== null; )
              a.alternate !== null && (l = a), a = a.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Sr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = W, l = Ue;
      if (t) {
        if ((e.mode & Pe) !== He) {
          for (var S = e.selfBaseDuration, k = e.child; k !== null; )
            a = Ke(a, Ke(k.lanes, k.childLanes)), l |= k.subtreeFlags & In, l |= k.flags & In, S += k.treeBaseDuration, k = k.sibling;
          e.treeBaseDuration = S;
        } else
          for (var E = e.child; E !== null; )
            a = Ke(a, Ke(E.lanes, E.childLanes)), l |= E.subtreeFlags & In, l |= E.flags & In, E.return = e, E = E.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & Pe) !== He) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = Ke(a, Ke(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, u += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), l |= y.subtreeFlags, l |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function GD(e, t, a) {
      if (LR() && (t.mode & rt) !== He && (t.flags & Be) === Ue)
        return B1(t), jf(), t.flags |= ln | Zr | An, !1;
      var l = Vm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (OR(t), Sr(t), (t.mode & Pe) !== He) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (jf(), (t.flags & Be) === Ue && (t.memoizedState = null), t.flags |= Xe, Sr(t), (t.mode & Pe) !== He) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return W1(), !0;
    }
    function mk(e, t, a) {
      var l = t.pendingProps;
      switch (j0(t), t.tag) {
        case P:
        case it:
        case he:
        case R:
        case ee:
        case ae:
        case se:
        case ge:
        case Me:
        case le:
          return Sr(t), null;
        case M: {
          var u = t.type;
          return Dl(u) && Am(t), Sr(t), null;
        }
        case U: {
          var d = t.stateNode;
          if ($f(t), z0(t), Eb(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = Vm(t);
            if (v)
              Xf(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ln) !== Ue) && (t.flags |= ga, W1());
            }
          }
          return pS(e, t), Sr(t), null;
        }
        case Q: {
          Sb(t);
          var S = hw(), k = t.type;
          if (e !== null && t.stateNode != null)
            hk(e, t, k, l, S), e.ref !== t.ref && dk(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Sr(t), null;
            }
            var E = bb(), N = Vm(t);
            if (N)
              RR(t, S, E) && Xf(t);
            else {
              var O = hT(k, l, S, E, t);
              pk(O, t, !1, !1), t.stateNode = O, mT(O, k, l, S) && Xf(t);
            }
            t.ref !== null && dk(t);
          }
          return Sr(t), null;
        }
        case ne: {
          var j = l;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            vk(e, t, Y, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var I = hw(), xe = bb(), ze = Vm(t);
            ze ? DR(t) && Xf(t) : t.stateNode = yT(j, I, xe, t);
          }
          return Sr(t), null;
        }
        case ve: {
          Bf(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var pt = GD(e, t, Oe);
            if (!pt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & Be) !== Ue)
            return t.lanes = a, (t.mode & Pe) !== He && qb(t), t;
          var st = Oe !== null, A = e !== null && e.memoizedState !== null;
          if (st !== A && st) {
            var B = t.child;
            if (B.flags |= dl, (t.mode & rt) !== He) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !gt);
              F || xb($i.current, gw) ? QO() : MS();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= Xe), Sr(t), (t.mode & Pe) !== He && st) {
            var we = t.child;
            we !== null && (t.treeBaseDuration -= we.treeBaseDuration);
          }
          return null;
        }
        case $:
          return $f(t), pS(e, t), e === null && fR(t.stateNode.containerInfo), Sr(t), null;
        case ie:
          var me = t.type._context;
          return Q0(me, t), Sr(t), null;
        case tt: {
          var Ie = t.type;
          return Dl(Ie) && Am(t), Sr(t), null;
        }
        case ht: {
          Bf(t);
          var Qe = t.memoizedState;
          if (Qe === null)
            return Sr(t), null;
          var Nt = (t.flags & Be) !== Ue, bt = Qe.rendering;
          if (bt === null)
            if (Nt)
              dh(Qe, !1);
            else {
              var Dn = XO() && (e === null || (e.flags & Be) === Ue);
              if (!Dn)
                for (var St = t.child; St !== null; ) {
                  var Sn = ig(St);
                  if (Sn !== null) {
                    Nt = !0, t.flags |= Be, dh(Qe, !1);
                    var Pr = Sn.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= Xe), t.subtreeFlags = Ue, XR(t, a), Fu(t, wb($i.current, th)), t.child;
                  }
                  St = St.sibling;
                }
              Qe.tail !== null && Jt() > Fk() && (t.flags |= Be, Nt = !0, dh(Qe, !1), t.lanes = ip);
            }
          else {
            if (!Nt) {
              var _r = ig(bt);
              if (_r !== null) {
                t.flags |= Be, Nt = !0;
                var Xa = _r.updateQueue;
                if (Xa !== null && (t.updateQueue = Xa, t.flags |= Xe), dh(Qe, !0), Qe.tail === null && Qe.tailMode === "hidden" && !bt.alternate && !yr())
                  return Sr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Jt() * 2 - Qe.renderingStartTime > Fk() && a !== Ar && (t.flags |= Be, Nt = !0, dh(Qe, !1), t.lanes = ip);
            }
            if (Qe.isBackwards)
              bt.sibling = t.child, t.child = bt;
            else {
              var oa = Qe.last;
              oa !== null ? oa.sibling = bt : t.child = bt, Qe.last = bt;
            }
          }
          if (Qe.tail !== null) {
            var ua = Qe.tail;
            Qe.rendering = ua, Qe.tail = ua.sibling, Qe.renderingStartTime = Jt(), ua.sibling = null;
            var Vr = $i.current;
            return Nt ? Vr = wb(Vr, th) : Vr = If(Vr), Fu(t, Vr), ua;
          }
          return Sr(t), null;
        }
        case Vt:
          break;
        case $e:
        case et: {
          OS(t);
          var Uo = t.memoizedState, ad = Uo !== null;
          if (e !== null) {
            var Rh = e.memoizedState, Fl = Rh !== null;
            Fl !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Se && (t.flags |= dl);
          }
          return !ad || (t.mode & rt) === He ? Sr(t) : Fr(Al, Ar) && (Sr(t), t.subtreeFlags & ($t | Xe) && (t.flags |= dl)), null;
        }
        case hn:
          return null;
        case Rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function QD(e, t, a) {
      switch (j0(t), t.tag) {
        case M: {
          var l = t.type;
          Dl(l) && Am(t);
          var u = t.flags;
          return u & An ? (t.flags = u & ~An | Be, (t.mode & Pe) !== He && qb(t), t) : null;
        }
        case U: {
          t.stateNode, $f(t), z0(t), Eb();
          var d = t.flags;
          return (d & An) !== Ue && (d & Be) === Ue ? (t.flags = d & ~An | Be, t) : null;
        }
        case Q:
          return Sb(t), null;
        case ve: {
          Bf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            jf();
          }
          var y = t.flags;
          return y & An ? (t.flags = y & ~An | Be, (t.mode & Pe) !== He && qb(t), t) : null;
        }
        case ht:
          return Bf(t), null;
        case $:
          return $f(t), null;
        case ie:
          var S = t.type._context;
          return Q0(S, t), null;
        case $e:
        case et:
          return OS(t), null;
        case hn:
          return null;
        default:
          return null;
      }
    }
    function gk(e, t, a) {
      switch (j0(t), t.tag) {
        case M: {
          var l = t.type.childContextTypes;
          l != null && Am(t);
          break;
        }
        case U: {
          t.stateNode, $f(t), z0(t), Eb();
          break;
        }
        case Q: {
          Sb(t);
          break;
        }
        case $:
          $f(t);
          break;
        case ve:
          Bf(t);
          break;
        case ht:
          Bf(t);
          break;
        case ie:
          var u = t.type._context;
          Q0(u, t);
          break;
        case $e:
        case et:
          OS(t);
          break;
      }
    }
    var yk = null;
    yk = /* @__PURE__ */ new Set();
    var Rg = !1, xr = !1, qD = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Kf = null, Zf = null;
    function XD(e) {
      eo(null, function() {
        throw e;
      }), Id();
    }
    var KD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Pe)
        try {
          Ul(), t.componentWillUnmount();
        } finally {
          Nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function bk(e, t) {
      try {
        Yu(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function hS(e, t, a) {
      try {
        KD(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function ZD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function Sk(e, t) {
      try {
        wk(e);
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
            if (wn && sa && e.mode & Pe)
              try {
                Ul(), l = a(null);
              } finally {
                Nl(e);
              }
            else
              l = a(null);
          } catch (u) {
            Gt(e, t, u);
          }
          typeof l == "function" && b("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function Dg(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var xk = !1;
    function JD(e, t) {
      dT(e.containerInfo), Te = t, eO();
      var a = xk;
      return xk = !1, a;
    }
    function eO() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & lu) !== Ue && t !== null ? (t.return = e, Te = t) : tO();
      }
    }
    function tO() {
      for (; Te !== null; ) {
        var e = Te;
        Mt(e);
        try {
          nO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        kn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function nO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ga) !== Ue) {
        switch (Mt(e), e.tag) {
          case R:
          case ee:
          case he:
            break;
          case M: {
            if (t !== null) {
              var l = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Js && (d.props !== e.memoizedProps && b("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), d.state !== e.memoizedState && b("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Vi(e.type, l), u);
              {
                var y = yk;
                v === void 0 && !y.has(e.type) && (y.add(e.type), b("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var S = e.stateNode;
              FT(S.containerInfo);
            }
            break;
          }
          case Q:
          case ne:
          case $:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        kn();
      }
    }
    function Wi(e, t, a) {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var d = u.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & br) !== Da ? Pc(t) : (e & Qn) !== Da && Vc(t), (e & Ol) !== Da && _h(!0), Dg(t, a, y), (e & Ol) !== Da && _h(!1), (e & br) !== Da ? Pv() : (e & Qn) !== Da && ou());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function Yu(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & br) !== Da ? Yv(t) : (e & Qn) !== Da && Vv(t);
            var v = d.create;
            (e & Ol) !== Da && _h(!0), d.destroy = v(), (e & Ol) !== Da && _h(!1), (e & br) !== Da ? np() : (e & Qn) !== Da && $v();
            {
              var y = d.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (d.tag & Qn) !== Ue ? S = "useLayoutEffect" : (d.tag & Ol) !== Ue ? S = "useInsertionEffect" : S = "useEffect";
                var k = void 0;
                y === null ? k = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? k = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : k = " You returned: " + y, b("%s must not return anything besides a function, which is used for clean-up.%s", S, k);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function rO(e, t) {
      if ((t.flags & Xe) !== Ue)
        switch (t.tag) {
          case ge: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, u = l.id, d = l.onPostCommit, v = $w(), y = t.alternate === null ? "mount" : "update";
            Vw() && (y = "nested-update"), typeof d == "function" && d(u, y, a, v);
            var S = t.return;
            e:
              for (; S !== null; ) {
                switch (S.tag) {
                  case U:
                    var k = S.stateNode;
                    k.passiveEffectDuration += a;
                    break e;
                  case ge:
                    var E = S.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                }
                S = S.return;
              }
            break;
          }
        }
    }
    function aO(e, t, a, l) {
      if ((a.flags & or) !== Ue)
        switch (a.tag) {
          case R:
          case ee:
          case he: {
            if (!xr)
              if (a.mode & Pe)
                try {
                  Ul(), Yu(Qn | Gn, a);
                } finally {
                  Nl(a);
                }
              else
                Yu(Qn | Gn, a);
            break;
          }
          case M: {
            var u = a.stateNode;
            if (a.flags & Xe && !xr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && b("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && b("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Pe)
                  try {
                    Ul(), u.componentDidMount();
                  } finally {
                    Nl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Vi(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && b("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && b("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Pe)
                  try {
                    Ul(), u.componentDidUpdate(d, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Nl(a);
                  }
                else
                  u.componentDidUpdate(d, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && b("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && b("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), nw(a, y, u));
            break;
          }
          case U: {
            var S = a.updateQueue;
            if (S !== null) {
              var k = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    k = a.child.stateNode;
                    break;
                  case M:
                    k = a.child.stateNode;
                    break;
                }
              nw(a, S, k);
            }
            break;
          }
          case Q: {
            var E = a.stateNode;
            if (t === null && a.flags & Xe) {
              var N = a.type, O = a.memoizedProps;
              kT(E, N, O);
            }
            break;
          }
          case ne:
            break;
          case $:
            break;
          case ge: {
            {
              var j = a.memoizedProps, Y = j.onCommit, I = j.onRender, xe = a.stateNode.effectDuration, ze = $w(), Oe = t === null ? "mount" : "update";
              Vw() && (Oe = "nested-update"), typeof I == "function" && I(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Oe, xe, ze), tM(a);
                var pt = a.return;
                e:
                  for (; pt !== null; ) {
                    switch (pt.tag) {
                      case U:
                        var st = pt.stateNode;
                        st.effectDuration += xe;
                        break e;
                      case ge:
                        var A = pt.stateNode;
                        A.effectDuration += xe;
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
          case $e:
          case et:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      xr || a.flags & Or && wk(a);
    }
    function iO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          if (e.mode & Pe)
            try {
              Ul(), bk(e, e.return);
            } finally {
              Nl(e);
            }
          else
            bk(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ZD(e, e.return, t), Sk(e, e.return);
          break;
        }
        case Q: {
          Sk(e, e.return);
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
              var u = l.stateNode;
              t ? NT(u) : zT(l.stateNode, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
          }
        } else if (l.tag === ne) {
          if (a === null)
            try {
              var d = l.stateNode;
              t ? UT(d) : AT(d, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
        } else if (!((l.tag === $e || l.tag === et) && l.memoizedState !== null && l !== e)) {
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
    function wk(e) {
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
          var u;
          if (e.mode & Pe)
            try {
              Ul(), u = t(l);
            } finally {
              Nl(e);
            }
          else
            u = t(l);
          typeof u == "function" && b("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || b("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = l;
      }
    }
    function oO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function kk(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, kk(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && hR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function uO(e) {
      for (var t = e.return; t !== null; ) {
        if (Ek(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ek(e) {
      return e.tag === Q || e.tag === U || e.tag === $;
    }
    function _k(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Ek(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== ne && t.tag !== lt; ) {
            if (t.flags & $t || t.child === null || t.tag === $)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & $t))
            return t.stateNode;
        }
    }
    function sO(e) {
      var t = uO(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & Et && (C1(a), t.flags &= ~Et);
          var l = _k(e);
          mS(e, l, a);
          break;
        }
        case U:
        case $: {
          var u = t.stateNode.containerInfo, d = _k(e);
          vS(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function vS(e, t, a) {
      var l = e.tag, u = l === Q || l === ne;
      if (u) {
        var d = e.stateNode;
        t ? DT(a, d, t) : TT(a, d);
      } else if (l !== $) {
        var v = e.child;
        if (v !== null) {
          vS(v, t, a);
          for (var y = v.sibling; y !== null; )
            vS(y, t, a), y = y.sibling;
        }
      }
    }
    function mS(e, t, a) {
      var l = e.tag, u = l === Q || l === ne;
      if (u) {
        var d = e.stateNode;
        t ? RT(a, d, t) : CT(a, d);
      } else if (l !== $) {
        var v = e.child;
        if (v !== null) {
          mS(v, t, a);
          for (var y = v.sibling; y !== null; )
            mS(y, t, a), y = y.sibling;
        }
      }
    }
    var wr = null, Gi = !1;
    function cO(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case Q: {
                wr = l.stateNode, Gi = !1;
                break e;
              }
              case U: {
                wr = l.stateNode.containerInfo, Gi = !0;
                break e;
              }
              case $: {
                wr = l.stateNode.containerInfo, Gi = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Ck(e, t, a), wr = null, Gi = !1;
      }
      oO(a);
    }
    function Pu(e, t, a) {
      for (var l = a.child; l !== null; )
        Ck(e, t, l), l = l.sibling;
    }
    function Ck(e, t, a) {
      switch (ep(a), a.tag) {
        case Q:
          xr || Jf(a, t);
        case ne: {
          {
            var l = wr, u = Gi;
            wr = null, Pu(e, t, a), wr = l, Gi = u, wr !== null && (Gi ? MT(wr, a.stateNode) : OT(wr, a.stateNode));
          }
          return;
        }
        case lt: {
          wr !== null && (Gi ? LT(wr, a.stateNode) : T0(wr, a.stateNode));
          return;
        }
        case $: {
          {
            var d = wr, v = Gi;
            wr = a.stateNode.containerInfo, Gi = !0, Pu(e, t, a), wr = d, Gi = v;
          }
          return;
        }
        case R:
        case ee:
        case le:
        case he: {
          if (!xr) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var k = S.next, E = k;
                do {
                  var N = E, O = N.destroy, j = N.tag;
                  O !== void 0 && ((j & Ol) !== Da ? Dg(a, t, O) : (j & Qn) !== Da && (Vc(a), a.mode & Pe ? (Ul(), Dg(a, t, O), Nl(a)) : Dg(a, t, O), ou())), E = E.next;
                } while (E !== k);
              }
            }
          }
          Pu(e, t, a);
          return;
        }
        case M: {
          if (!xr) {
            Jf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && hS(a, t, Y);
          }
          Pu(e, t, a);
          return;
        }
        case Vt: {
          Pu(e, t, a);
          return;
        }
        case $e: {
          if (
            // TODO: Remove this dead flag
            a.mode & rt
          ) {
            var I = xr;
            xr = I || a.memoizedState !== null, Pu(e, t, a), xr = I;
          } else
            Pu(e, t, a);
          break;
        }
        default: {
          Pu(e, t, a);
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
          var u = l.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && KT(d);
          }
        }
      }
    }
    function Tk(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new qD()), t.forEach(function(l) {
          var u = uM.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Bn)
              if (Kf !== null && Zf !== null)
                Eh(Zf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(u, u);
          }
        });
      }
    }
    function pO(e, t, a) {
      Kf = a, Zf = e, Mt(t), Rk(t, e), Mt(t), Kf = null, Zf = null;
    }
    function Qi(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var d = l[u];
          try {
            cO(e, t, d);
          } catch (S) {
            Gt(d, t, S);
          }
        }
      var v = Cy();
      if (t.subtreeFlags & Nr)
        for (var y = t.child; y !== null; )
          Mt(y), Rk(y, e), y = y.sibling;
      Mt(v);
    }
    function Rk(e, t, a) {
      var l = e.alternate, u = e.flags;
      switch (e.tag) {
        case R:
        case ee:
        case le:
        case he: {
          if (Qi(t, e), zl(e), u & Xe) {
            try {
              Wi(Ol | Gn, e, e.return), Yu(Ol | Gn, e);
            } catch (Ie) {
              Gt(e, e.return, Ie);
            }
            if (e.mode & Pe) {
              try {
                Ul(), Wi(Qn | Gn, e, e.return);
              } catch (Ie) {
                Gt(e, e.return, Ie);
              }
              Nl(e);
            } else
              try {
                Wi(Qn | Gn, e, e.return);
              } catch (Ie) {
                Gt(e, e.return, Ie);
              }
          }
          return;
        }
        case M: {
          Qi(t, e), zl(e), u & Or && l !== null && Jf(l, l.return);
          return;
        }
        case Q: {
          Qi(t, e), zl(e), u & Or && l !== null && Jf(l, l.return);
          {
            if (e.flags & Et) {
              var d = e.stateNode;
              try {
                C1(d);
              } catch (Ie) {
                Gt(e, e.return, Ie);
              }
            }
            if (u & Xe) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, S = l !== null ? l.memoizedProps : y, k = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    ET(v, E, k, S, y, e);
                  } catch (Ie) {
                    Gt(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case ne: {
          if (Qi(t, e), zl(e), u & Xe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, O = e.memoizedProps, j = l !== null ? l.memoizedProps : O;
            try {
              _T(N, j, O);
            } catch (Ie) {
              Gt(e, e.return, Ie);
            }
          }
          return;
        }
        case U: {
          if (Qi(t, e), zl(e), u & Xe && l !== null) {
            var Y = l.memoizedState;
            if (Y.isDehydrated)
              try {
                XT(t.containerInfo);
              } catch (Ie) {
                Gt(e, e.return, Ie);
              }
          }
          return;
        }
        case $: {
          Qi(t, e), zl(e);
          return;
        }
        case ve: {
          Qi(t, e), zl(e);
          var I = e.child;
          if (I.flags & dl) {
            var xe = I.stateNode, ze = I.memoizedState, Oe = ze !== null;
            if (xe.isHidden = Oe, Oe) {
              var pt = I.alternate !== null && I.alternate.memoizedState !== null;
              pt || GO();
            }
          }
          if (u & Xe) {
            try {
              fO(e);
            } catch (Ie) {
              Gt(e, e.return, Ie);
            }
            Tk(e);
          }
          return;
        }
        case $e: {
          var st = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & rt
          ) {
            var A = xr;
            xr = A || st, Qi(t, e), xr = A;
          } else
            Qi(t, e);
          if (zl(e), u & dl) {
            var B = e.stateNode, F = e.memoizedState, J = F !== null, we = e;
            if (B.isHidden = J, J && !st && (we.mode & rt) !== He) {
              Te = we;
              for (var me = we.child; me !== null; )
                Te = me, vO(me), me = me.sibling;
            }
            lO(we, J);
          }
          return;
        }
        case ht: {
          Qi(t, e), zl(e), u & Xe && Tk(e);
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
      if (t & $t) {
        try {
          sO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~$t;
      }
      t & ya && (e.flags &= ~ya);
    }
    function hO(e, t, a) {
      Kf = a, Zf = t, Te = e, Dk(e, t, a), Kf = null, Zf = null;
    }
    function Dk(e, t, a) {
      for (var l = (e.mode & rt) !== He; Te !== null; ) {
        var u = Te, d = u.child;
        if (u.tag === $e && l) {
          var v = u.memoizedState !== null, y = v || Rg;
          if (y) {
            gS(e, t, a);
            continue;
          } else {
            var S = u.alternate, k = S !== null && S.memoizedState !== null, E = k || xr, N = Rg, O = xr;
            Rg = y, xr = E, xr && !O && (Te = u, mO(u));
            for (var j = d; j !== null; )
              Te = j, Dk(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            Te = u, Rg = N, xr = O, gS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & or) !== Ue && d !== null ? (d.return = u, Te = d) : gS(e, t, a);
      }
    }
    function gS(e, t, a) {
      for (; Te !== null; ) {
        var l = Te;
        if ((l.flags & or) !== Ue) {
          var u = l.alternate;
          Mt(l);
          try {
            aO(t, u, l, a);
          } catch (v) {
            Gt(l, l.return, v);
          }
          kn();
        }
        if (l === e) {
          Te = null;
          return;
        }
        var d = l.sibling;
        if (d !== null) {
          d.return = l.return, Te = d;
          return;
        }
        Te = l.return;
      }
    }
    function vO(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case R:
          case ee:
          case le:
          case he: {
            if (t.mode & Pe)
              try {
                Ul(), Wi(Qn, t, t.return);
              } finally {
                Nl(t);
              }
            else
              Wi(Qn, t, t.return);
            break;
          }
          case M: {
            Jf(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && hS(t, t.return, l);
            break;
          }
          case Q: {
            Jf(t, t.return);
            break;
          }
          case $e: {
            var u = t.memoizedState !== null;
            if (u) {
              Ok(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : Ok(e);
      }
    }
    function Ok(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function mO(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === $e) {
          var l = t.memoizedState !== null;
          if (l) {
            Mk(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : Mk(e);
      }
    }
    function Mk(e) {
      for (; Te !== null; ) {
        var t = Te;
        Mt(t);
        try {
          iO(t);
        } catch (l) {
          Gt(t, t.return, l);
        }
        if (kn(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function gO(e, t, a, l) {
      Te = t, yO(t, e, a, l);
    }
    function yO(e, t, a, l) {
      for (; Te !== null; ) {
        var u = Te, d = u.child;
        (u.subtreeFlags & ba) !== Ue && d !== null ? (d.return = u, Te = d) : bO(e, t, a, l);
      }
    }
    function bO(e, t, a, l) {
      for (; Te !== null; ) {
        var u = Te;
        if ((u.flags & Xt) !== Ue) {
          Mt(u);
          try {
            SO(t, u, a, l);
          } catch (v) {
            Gt(u, u.return, v);
          }
          kn();
        }
        if (u === e) {
          Te = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Te = d;
          return;
        }
        Te = u.return;
      }
    }
    function SO(e, t, a, l) {
      switch (t.tag) {
        case R:
        case ee:
        case he: {
          if (t.mode & Pe) {
            Qb();
            try {
              Yu(br | Gn, t);
            } finally {
              Gb(t);
            }
          } else
            Yu(br | Gn, t);
          break;
        }
      }
    }
    function xO(e) {
      Te = e, wO();
    }
    function wO() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & kt) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var u = a[l];
              Te = u, _O(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            Te = e;
          }
        }
        (e.subtreeFlags & ba) !== Ue && t !== null ? (t.return = e, Te = t) : kO();
      }
    }
    function kO() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & Xt) !== Ue && (Mt(e), EO(e), kn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function EO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          e.mode & Pe ? (Qb(), Wi(br | Gn, e, e.return), Gb(e)) : Wi(br | Gn, e, e.return);
          break;
        }
      }
    }
    function _O(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        Mt(a), TO(a, t), kn();
        var l = a.child;
        l !== null ? (l.return = a, Te = l) : CO(e);
      }
    }
    function CO(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, l = t.return;
        if (kk(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = l, Te = a;
          return;
        }
        Te = l;
      }
    }
    function TO(e, t) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          e.mode & Pe ? (Qb(), Wi(br, e, t), Gb(e)) : Wi(br, e, t);
          break;
        }
      }
    }
    function RO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          try {
            Yu(Qn | Gn, e);
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
    function DO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          try {
            Yu(br | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function OO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          try {
            Wi(Qn | Gn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && hS(e, e.return, t);
          break;
        }
      }
    }
    function MO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he:
          try {
            Wi(br | Gn, e, e.return);
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
    function Lk() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && UO.current !== null && b("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var AO = Math.ceil, yS = f.ReactCurrentDispatcher, bS = f.ReactCurrentOwner, kr = f.ReactCurrentBatchConfig, qi = f.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), Nk = (
      /*               */
      1
    ), Er = (
      /*                */
      2
    ), mi = (
      /*                */
      4
    ), Oo = 0, hh = 1, ec = 2, Og = 3, vh = 4, Uk = 5, SS = 6, dt = Kn, ia = null, pn = null, Zn = W, Al = W, xS = Mu(W), Jn = Oo, mh = null, Mg = W, gh = W, Lg = W, yh = null, Oa = null, wS = 0, zk = 500, Ak = 1 / 0, FO = 500, Mo = null;
    function bh() {
      Ak = Jt() + FO;
    }
    function Fk() {
      return Ak;
    }
    var Ng = !1, kS = null, ed = null, tc = !1, Vu = null, Sh = W, ES = [], _S = null, HO = 50, xh = 0, CS = null, TS = !1, Ug = !1, jO = 50, td = 0, zg = null, wh = Ft, Ag = W, Hk = !1;
    function Fg() {
      return ia;
    }
    function la() {
      return (dt & (Er | mi)) !== Kn ? Jt() : (wh !== Ft || (wh = Jt()), wh);
    }
    function $u(e) {
      var t = e.mode;
      if ((t & rt) === He)
        return Ve;
      if ((dt & Er) !== Kn && Zn !== W)
        return _n(Zn);
      var a = zR() !== UR;
      if (a) {
        if (kr.transition !== null) {
          var l = kr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Ag === ft && (Ag = up()), Ag;
      }
      var u = ka();
      if (u !== ft)
        return u;
      var d = bT();
      return d;
    }
    function YO(e) {
      var t = e.mode;
      return (t & rt) === He ? Ve : Qy();
    }
    function er(e, t, a, l) {
      cM(), Hk && b("useInsertionEffect must not schedule updates."), TS && (Ug = !0), po(e, a, l), (dt & Er) !== W && e === ia ? pM(t) : (Bn && pp(e, t, a), hM(t), e === ia && ((dt & Er) === Kn && (gh = Ke(gh, a)), Jn === vh && Iu(e, Zn)), Ma(e, l), a === Ve && dt === Kn && (t.mode & rt) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !qi.isBatchingLegacy && (bh(), F1()));
    }
    function PO(e, t, a) {
      var l = e.current;
      l.lanes = t, po(e, t, a), Ma(e, a);
    }
    function VO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (dt & Er) !== Kn
      );
    }
    function Ma(e, t) {
      var a = e.callbackNode;
      By(e, t);
      var l = Cs(e, e === ia ? Zn : W);
      if (l === W) {
        a !== null && eE(a), e.callbackNode = null, e.callbackPriority = ft;
        return;
      }
      var u = yn(l), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(qi.current !== null && a !== US)) {
        a == null && d !== Ve && b("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && eE(a);
      var v;
      if (u === Ve)
        e.tag === Lu ? (qi.isBatchingLegacy !== null && (qi.didScheduleLegacyUpdate = !0), gR(Pk.bind(null, e))) : A1(Pk.bind(null, e)), qi.current !== null ? qi.current.push(Nu) : xT(function() {
          (dt & (Er | mi)) === Kn && Nu();
        }), v = null;
      else {
        var y;
        switch (Ms(l)) {
          case ur:
            y = Hc;
            break;
          case Wn:
            y = ta;
            break;
          case Ui:
            y = li;
            break;
          case Ds:
            y = hl;
            break;
          default:
            y = li;
            break;
        }
        v = zS(y, jk.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function jk(e, t) {
      if (cD(), wh = Ft, Ag = W, (dt & (Er | mi)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = No();
      if (l && e.callbackNode !== a)
        return null;
      var u = Cs(e, e === ia ? Zn : W);
      if (u === W)
        return null;
      var d = !Rs(e, u) && !qv(e, u) && !t, v = d ? ZO(e, u) : jg(e, u);
      if (v !== Oo) {
        if (v === ec) {
          var y = lp(e);
          y !== W && (u = y, v = RS(e, y));
        }
        if (v === hh) {
          var S = mh;
          throw nc(e, W), Iu(e, u), Ma(e, Jt()), S;
        }
        if (v === SS)
          Iu(e, u);
        else {
          var k = !Rs(e, u), E = e.current.alternate;
          if (k && !IO(E)) {
            if (v = jg(e, u), v === ec) {
              var N = lp(e);
              N !== W && (u = N, v = RS(e, N));
            }
            if (v === hh) {
              var O = mh;
              throw nc(e, W), Iu(e, u), Ma(e, Jt()), O;
            }
          }
          e.finishedWork = E, e.finishedLanes = u, $O(e, v, u);
        }
      }
      return Ma(e, Jt()), e.callbackNode === a ? jk.bind(null, e) : null;
    }
    function RS(e, t) {
      var a = yh;
      if (Tn(e)) {
        var l = nc(e, t);
        l.flags |= ln, cR(e.containerInfo);
      }
      var u = jg(e, t);
      if (u !== ec) {
        var d = Oa;
        Oa = a, d !== null && Yk(d);
      }
      return u;
    }
    function Yk(e) {
      Oa === null ? Oa = e : Oa.push.apply(Oa, e);
    }
    function $O(e, t, a) {
      switch (t) {
        case Oo:
        case hh:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Oa, Mo);
          break;
        }
        case Og: {
          if (Iu(e, a), sf(a) && // do not delay if we're inside an act() scope
          !tE()) {
            var l = wS + zk - Jt();
            if (l > 10) {
              var u = Cs(e, W);
              if (u !== W)
                break;
              var d = e.suspendedLanes;
              if (!fo(d, a)) {
                la(), fp(e, d);
                break;
              }
              e.timeoutHandle = _0(rc.bind(null, e, Oa, Mo), l);
              break;
            }
          }
          rc(e, Oa, Mo);
          break;
        }
        case vh: {
          if (Iu(e, a), Qv(a))
            break;
          if (!tE()) {
            var v = Gv(e, a), y = v, S = Jt() - y, k = sM(S) - S;
            if (k > 10) {
              e.timeoutHandle = _0(rc.bind(null, e, Oa, Mo), k);
              break;
            }
          }
          rc(e, Oa, Mo);
          break;
        }
        case Uk: {
          rc(e, Oa, Mo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function IO(e) {
      for (var t = e; ; ) {
        if (t.flags & bs) {
          var a = t.updateQueue;
          if (a !== null) {
            var l = a.stores;
            if (l !== null)
              for (var u = 0; u < l.length; u++) {
                var d = l[u], v = d.getSnapshot, y = d.value;
                try {
                  if (!Ce(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & bs && S !== null) {
          S.return = t, t = S;
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
    function Iu(e, t) {
      t = hu(t, Lg), t = hu(t, gh), cp(e, t);
    }
    function Pk(e) {
      if (fD(), (dt & (Er | mi)) !== Kn)
        throw new Error("Should not already be working.");
      No();
      var t = Cs(e, W);
      if (!Fr(t, Ve))
        return Ma(e, Jt()), null;
      var a = jg(e, t);
      if (e.tag !== Lu && a === ec) {
        var l = lp(e);
        l !== W && (t = l, a = RS(e, l));
      }
      if (a === hh) {
        var u = mh;
        throw nc(e, W), Iu(e, t), Ma(e, Jt()), u;
      }
      if (a === SS)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, rc(e, Oa, Mo), Ma(e, Jt()), null;
    }
    function BO(e, t) {
      t !== W && (vu(e, Ke(t, Ve)), Ma(e, Jt()), (dt & (Er | mi)) === Kn && (bh(), Nu()));
    }
    function DS(e, t) {
      var a = dt;
      dt |= Nk;
      try {
        return e(t);
      } finally {
        dt = a, dt === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !qi.isBatchingLegacy && (bh(), F1());
      }
    }
    function WO(e, t, a, l, u) {
      var d = ka(), v = kr.transition;
      try {
        return kr.transition = null, Cn(ur), e(t, a, l, u);
      } finally {
        Cn(d), kr.transition = v, dt === Kn && bh();
      }
    }
    function Lo(e) {
      Vu !== null && Vu.tag === Lu && (dt & (Er | mi)) === Kn && No();
      var t = dt;
      dt |= Nk;
      var a = kr.transition, l = ka();
      try {
        return kr.transition = null, Cn(ur), e ? e() : void 0;
      } finally {
        Cn(l), kr.transition = a, dt = t, (dt & (Er | mi)) === Kn && Nu();
      }
    }
    function Vk() {
      return (dt & (Er | mi)) !== Kn;
    }
    function Hg(e, t) {
      jr(xS, Al, e), Al = Ke(Al, t);
    }
    function OS(e) {
      Al = xS.current, Hr(xS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = W;
      var a = e.timeoutHandle;
      if (a !== C0 && (e.timeoutHandle = C0, ST(a)), pn !== null)
        for (var l = pn.return; l !== null; ) {
          var u = l.alternate;
          gk(u, l), l = l.return;
        }
      ia = e;
      var d = ac(e.current, null);
      return pn = d, Zn = Al = t, Jn = Oo, mh = null, Mg = W, gh = W, Lg = W, yh = null, Oa = null, jR(), Pi.discardPendingWarnings(), d;
    }
    function $k(e, t) {
      do {
        var a = pn;
        try {
          if (Wm(), bw(), kn(), bS.current = null, a === null || a.return === null) {
            Jn = hh, mh = t, pn = null;
            return;
          }
          if (wn && a.mode & Pe && Eg(a, !0), Ja)
            if (no(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              Iv(a, l, Zn);
            } else
              $c(a, t, Zn);
          mD(e, a.return, a, t, Zn), Gk(a);
        } catch (u) {
          t = u, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ik() {
      var e = yS.current;
      return yS.current = bg, e === null ? bg : e;
    }
    function Bk(e) {
      yS.current = e;
    }
    function GO() {
      wS = Jt();
    }
    function kh(e) {
      Mg = Ke(e, Mg);
    }
    function QO() {
      Jn === Oo && (Jn = Og);
    }
    function MS() {
      (Jn === Oo || Jn === Og || Jn === ec) && (Jn = vh), ia !== null && (Ts(Mg) || Ts(gh)) && Iu(ia, Zn);
    }
    function qO(e) {
      Jn !== vh && (Jn = ec), yh === null ? yh = [e] : yh.push(e);
    }
    function XO() {
      return Jn === Oo;
    }
    function jg(e, t) {
      var a = dt;
      dt |= Er;
      var l = Ik();
      if (ia !== e || Zn !== t) {
        if (Bn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Eh(e, Zn), u.clear()), df(e, t);
        }
        Mo = hp(), nc(e, t);
      }
      Wa(t);
      do
        try {
          KO();
          break;
        } catch (d) {
          $k(e, d);
        }
      while (!0);
      if (Wm(), dt = a, Bk(l), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return su(), ia = null, Zn = W, Jn;
    }
    function KO() {
      for (; pn !== null; )
        Wk(pn);
    }
    function ZO(e, t) {
      var a = dt;
      dt |= Er;
      var l = Ik();
      if (ia !== e || Zn !== t) {
        if (Bn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Eh(e, Zn), u.clear()), df(e, t);
        }
        Mo = hp(), bh(), nc(e, t);
      }
      Wa(t);
      do
        try {
          JO();
          break;
        } catch (d) {
          $k(e, d);
        }
      while (!0);
      return Wm(), Bk(l), dt = a, pn !== null ? (ws(), Oo) : (su(), ia = null, Zn = W, Jn);
    }
    function JO() {
      for (; pn !== null && !Fc(); )
        Wk(pn);
    }
    function Wk(e) {
      var t = e.alternate;
      Mt(e);
      var a;
      (e.mode & Pe) !== He ? (Wb(e), a = LS(t, e, Al), Eg(e, !0)) : a = LS(t, e, Al), kn(), e.memoizedProps = e.pendingProps, a === null ? Gk(e) : pn = a, bS.current = null;
    }
    function Gk(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & Zr) === Ue) {
          Mt(t);
          var u = void 0;
          if ((t.mode & Pe) === He ? u = mk(a, t, Al) : (Wb(t), u = mk(a, t, Al), Eg(t, !1)), kn(), u !== null) {
            pn = u;
            return;
          }
        } else {
          var d = QD(a, t);
          if (d !== null) {
            d.flags &= zv, pn = d;
            return;
          }
          if ((t.mode & Pe) !== He) {
            Eg(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= Zr, l.subtreeFlags = Ue, l.deletions = null;
          else {
            Jn = SS, pn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          pn = S;
          return;
        }
        t = l, pn = t;
      } while (t !== null);
      Jn === Oo && (Jn = Uk);
    }
    function rc(e, t, a) {
      var l = ka(), u = kr.transition;
      try {
        kr.transition = null, Cn(ur), eM(e, t, a, l);
      } finally {
        kr.transition = u, Cn(l);
      }
      return null;
    }
    function eM(e, t, a, l) {
      do
        No();
      while (Vu !== null);
      if (fM(), (dt & (Er | mi)) !== Kn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Yc(d), u === null)
        return tp(), null;
      if (d === W && b("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = W, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ft;
      var v = Ke(u.lanes, u.childLanes);
      dp(e, v), e === ia && (ia = null, pn = null, Zn = W), ((u.subtreeFlags & ba) !== Ue || (u.flags & ba) !== Ue) && (tc || (tc = !0, _S = a, zS(li, function() {
        return No(), null;
      })));
      var y = (u.subtreeFlags & (lu | Nr | or | ba)) !== Ue, S = (u.flags & (lu | Nr | or | ba)) !== Ue;
      if (y || S) {
        var k = kr.transition;
        kr.transition = null;
        var E = ka();
        Cn(ur);
        var N = dt;
        dt |= mi, bS.current = null, JD(e, u), Iw(), pO(e, u, d), pT(e.containerInfo), e.current = u, Bv(d), hO(u, e, d), uu(), Hv(), dt = N, Cn(E), kr.transition = k;
      } else
        e.current = u, Iw();
      var O = tc;
      if (tc ? (tc = !1, Vu = e, Sh = d) : (td = 0, zg = null), v = e.pendingLanes, v === W && (ed = null), O || Kk(e.current, !1), Mi(u.stateNode, l), Bn && e.memoizedUpdaters.clear(), NO(), Ma(e, Jt()), t !== null)
        for (var j = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var I = t[Y], xe = I.stack, ze = I.digest;
          j(I.value, {
            componentStack: xe,
            digest: ze
          });
        }
      if (Ng) {
        Ng = !1;
        var Oe = kS;
        throw kS = null, Oe;
      }
      return Fr(Sh, Ve) && e.tag !== Lu && No(), v = e.pendingLanes, Fr(v, Ve) ? (sD(), e === CS ? xh++ : (xh = 0, CS = e)) : xh = 0, Nu(), tp(), null;
    }
    function No() {
      if (Vu !== null) {
        var e = Ms(Sh), t = Xy(Ui, e), a = kr.transition, l = ka();
        try {
          return kr.transition = null, Cn(t), nM();
        } finally {
          Cn(l), kr.transition = a;
        }
      }
      return !1;
    }
    function tM(e) {
      ES.push(e), tc || (tc = !0, zS(li, function() {
        return No(), null;
      }));
    }
    function nM() {
      if (Vu === null)
        return !1;
      var e = _S;
      _S = null;
      var t = Vu, a = Sh;
      if (Vu = null, Sh = W, (dt & (Er | mi)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      TS = !0, Ug = !1, Wv(a);
      var l = dt;
      dt |= mi, xO(t.current), gO(t, t.current, a, e);
      {
        var u = ES;
        ES = [];
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          rO(t, v);
        }
      }
      xs(), Kk(t.current, !0), dt = l, Nu(), Ug ? t === zg ? td++ : (td = 0, zg = t) : td = 0, TS = !1, Ug = !1, ml(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Qk(e) {
      return ed !== null && ed.has(e);
    }
    function rM(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function aM(e) {
      Ng || (Ng = !0, kS = e);
    }
    var iM = aM;
    function qk(e, t, a) {
      var l = Zs(a, t), u = Ww(e, l, Ve), d = zu(e, u, Ve), v = la();
      d !== null && (po(d, Ve, v), Ma(d, v));
    }
    function Gt(e, t, a) {
      if (XD(a), _h(!1), e.tag === U) {
        qk(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === U) {
          qk(l, e, a);
          return;
        } else if (l.tag === M) {
          var u = l.type, d = l.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !Qk(d)) {
            var v = Zs(a, e), y = Zb(l, v, Ve), S = zu(l, y, Ve), k = la();
            S !== null && (po(S, Ve, k), Ma(S, k));
            return;
          }
        }
        l = l.return;
      }
      b(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function lM(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var u = la();
      fp(e, a), vM(e), ia === e && fo(Zn, a) && (Jn === vh || Jn === Og && sf(Zn) && Jt() - wS < zk ? nc(e, W) : Lg = Ke(Lg, a)), Ma(e, u);
    }
    function Xk(e, t) {
      t === ft && (t = YO(e));
      var a = la(), l = Ra(e, t);
      l !== null && (po(l, t, a), Ma(l, a));
    }
    function oM(e) {
      var t = e.memoizedState, a = ft;
      t !== null && (a = t.retryLane), Xk(e, a);
    }
    function uM(e, t) {
      var a = ft, l;
      switch (e.tag) {
        case ve:
          l = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ht:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), Xk(e, a);
    }
    function sM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : AO(e / 1960) * 1960;
    }
    function cM() {
      if (xh > HO)
        throw xh = 0, CS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > jO && (td = 0, zg = null, b("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function fM() {
      Pi.flushLegacyContextWarning(), Pi.flushPendingUnsafeLifecycleWarnings();
    }
    function Kk(e, t) {
      Mt(e), Yg(e, Lr, OO), t && Yg(e, to, MO), Yg(e, Lr, RO), t && Yg(e, to, DO), kn();
    }
    function Yg(e, t, a) {
      for (var l = e, u = null; l !== null; ) {
        var d = l.subtreeFlags & t;
        l !== u && l.child !== null && d !== Ue ? l = l.child : ((l.flags & t) !== Ue && a(l), l.sibling !== null ? l = l.sibling : l = u = l.return);
      }
    }
    var Pg = null;
    function Zk(e) {
      {
        if ((dt & Er) !== Kn || !(e.mode & rt))
          return;
        var t = e.tag;
        if (t !== P && t !== U && t !== M && t !== R && t !== ee && t !== le && t !== he)
          return;
        var a = qe(e) || "ReactComponent";
        if (Pg !== null) {
          if (Pg.has(a))
            return;
          Pg.add(a);
        } else
          Pg = /* @__PURE__ */ new Set([a]);
        var l = mn;
        try {
          Mt(e), b("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Mt(e) : kn();
        }
      }
    }
    var LS;
    {
      var dM = null;
      LS = function(e, t, a) {
        var l = lE(dM, t);
        try {
          return fk(e, t, a);
        } catch (d) {
          if (_R() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Wm(), bw(), gk(e, t), lE(t, l), t.mode & Pe && Wb(t), eo(null, fk, null, e, t, a), $y()) {
            var u = Id();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Jk = !1, NS;
    NS = /* @__PURE__ */ new Set();
    function pM(e) {
      if (pa && !lD())
        switch (e.tag) {
          case R:
          case ee:
          case he: {
            var t = pn && qe(pn) || "Unknown", a = t;
            if (!NS.has(a)) {
              NS.add(a);
              var l = qe(e) || "Unknown";
              b("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case M: {
            Jk || (b("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Jk = !0);
            break;
          }
        }
    }
    function Eh(e, t) {
      if (Bn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(l) {
          pp(e, l, t);
        });
      }
    }
    var US = {};
    function zS(e, t) {
      {
        var a = qi.current;
        return a !== null ? (a.push(t), US) : Ac(e, t);
      }
    }
    function eE(e) {
      if (e !== US)
        return Fv(e);
    }
    function tE() {
      return qi.current !== null;
    }
    function hM(e) {
      {
        if (e.mode & rt) {
          if (!Lk())
            return;
        } else if (!zO() || dt !== Kn || e.tag !== R && e.tag !== ee && e.tag !== he)
          return;
        if (qi.current === null) {
          var t = mn;
          try {
            Mt(e), b(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(e));
          } finally {
            t ? Mt(e) : kn();
          }
        }
      }
    }
    function vM(e) {
      e.tag !== Lu && Lk() && qi.current === null && b(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function _h(e) {
      Hk = e;
    }
    var gi = null, nd = null, mM = function(e) {
      gi = e;
    };
    function rd(e) {
      {
        if (gi === null)
          return e;
        var t = gi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function AS(e) {
      return rd(e);
    }
    function FS(e) {
      {
        if (gi === null)
          return e;
        var t = gi(e);
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
    function nE(e, t) {
      {
        if (gi === null)
          return !1;
        var a = e.elementType, l = t.type, u = !1, d = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof l == "function" && (u = !0);
            break;
          }
          case R: {
            (typeof l == "function" || d === Ye) && (u = !0);
            break;
          }
          case ee: {
            (d === Fe || d === Ye) && (u = !0);
            break;
          }
          case le:
          case he: {
            (d === Je || d === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var v = gi(a);
          if (v !== void 0 && v === gi(l))
            return !0;
        }
        return !1;
      }
    }
    function rE(e) {
      {
        if (gi === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var gM = function(e, t) {
      {
        if (gi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        No(), Lo(function() {
          HS(e.current, l, a);
        });
      }
    }, yM = function(e, t) {
      {
        if (e.context !== Qa)
          return;
        No(), Lo(function() {
          Ch(t, e, null, null);
        });
      }
    };
    function HS(e, t, a) {
      {
        var l = e.alternate, u = e.child, d = e.sibling, v = e.tag, y = e.type, S = null;
        switch (v) {
          case R:
          case he:
          case M:
            S = y;
            break;
          case ee:
            S = y.render;
            break;
        }
        if (gi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var k = !1, E = !1;
        if (S !== null) {
          var N = gi(S);
          N !== void 0 && (a.has(N) ? E = !0 : t.has(N) && (v === M ? E = !0 : k = !0));
        }
        if (nd !== null && (nd.has(e) || l !== null && nd.has(l)) && (E = !0), E && (e._debugNeedsRemount = !0), E || k) {
          var O = Ra(e, Ve);
          O !== null && er(O, e, Ve, Ft);
        }
        u !== null && !E && HS(u, t, a), d !== null && HS(d, t, a);
      }
    }
    var bM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(u) {
          return u.current;
        }));
        return jS(e.current, l, a), a;
      }
    };
    function jS(e, t, a) {
      {
        var l = e.child, u = e.sibling, d = e.tag, v = e.type, y = null;
        switch (d) {
          case R:
          case he:
          case M:
            y = v;
            break;
          case ee:
            y = v.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? SM(e, a) : l !== null && jS(l, t, a), u !== null && jS(u, t, a);
      }
    }
    function SM(e, t) {
      {
        var a = xM(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case Q:
              t.add(l.stateNode);
              return;
            case $:
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
    function xM(e, t) {
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
    var YS;
    {
      YS = !1;
      try {
        var aE = Object.preventExtensions({});
      } catch {
        YS = !0;
      }
    }
    function wM(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = W, this.childLanes = W, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !YS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var qa = function(e, t, a, l) {
      return new wM(e, t, a, l);
    };
    function PS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function kM(e) {
      return typeof e == "function" && !PS(e) && e.defaultProps === void 0;
    }
    function EM(e) {
      if (typeof e == "function")
        return PS(e) ? M : R;
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
      a === null ? (a = qa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ue, a.subtreeFlags = Ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & In, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case P:
        case R:
        case he:
          a.type = rd(e.type);
          break;
        case M:
          a.type = AS(e.type);
          break;
        case ee:
          a.type = FS(e.type);
          break;
      }
      return a;
    }
    function _M(e, t) {
      e.flags &= In | $t;
      var a = e.alternate;
      if (a === null)
        e.childLanes = W, e.lanes = t, e.child = null, e.subtreeFlags = Ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function CM(e, t, a) {
      var l;
      return e === Hm ? (l = rt, t === !0 && (l |= en, l |= xa)) : l = He, Bn && (l |= Pe), qa(U, null, null, l);
    }
    function VS(e, t, a, l, u, d) {
      var v = P, y = e;
      if (typeof e == "function")
        PS(e) ? (v = M, y = AS(y)) : y = rd(y);
      else if (typeof e == "string")
        v = Q;
      else
        e:
          switch (e) {
            case ja:
              return Bu(a.children, u, d, t);
            case nl:
              v = se, u |= en, (u & rt) !== He && (u |= xa);
              break;
            case C:
              return TM(a, u, d, t);
            case Ze:
              return RM(a, u, d, t);
            case vt:
              return DM(a, u, d, t);
            case qt:
              return iE(a, u, d, t);
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
                    v = ee, y = FS(y);
                    break e;
                  case Je:
                    v = le;
                    break e;
                  case Ye:
                    v = it, y = null;
                    break e;
                }
              var S = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var k = l ? qe(l) : null;
                k && (S += `

Check the render method of \`` + k + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
            }
          }
      var E = qa(v, a, t, u);
      return E.elementType = e, E.type = y, E.lanes = d, E._debugOwner = l, E;
    }
    function $S(e, t, a) {
      var l = null;
      l = e._owner;
      var u = e.type, d = e.key, v = e.props, y = VS(u, d, v, l, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function Bu(e, t, a, l) {
      var u = qa(ae, e, l, t);
      return u.lanes = a, u;
    }
    function TM(e, t, a, l) {
      typeof e.id != "string" && b('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = qa(ge, e, l, t | Pe);
      return u.elementType = C, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function RM(e, t, a, l) {
      var u = qa(ve, e, l, t);
      return u.elementType = Ze, u.lanes = a, u;
    }
    function DM(e, t, a, l) {
      var u = qa(ht, e, l, t);
      return u.elementType = vt, u.lanes = a, u;
    }
    function iE(e, t, a, l) {
      var u = qa($e, e, l, t);
      u.elementType = qt, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function IS(e, t, a) {
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
    function BS(e, t, a) {
      var l = e.children !== null ? e.children : [], u = qa($, l, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function lE(e, t) {
      return e === null && (e = qa(P, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function LM(e, t, a, l, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = C0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ft, this.eventTimes = ff(W), this.expirationTimes = ff(Ft), this.pendingLanes = W, this.suspendedLanes = W, this.pingedLanes = W, this.expiredLanes = W, this.mutableReadLanes = W, this.finishedLanes = W, this.entangledLanes = W, this.entanglements = ff(W), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Bt; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function oE(e, t, a, l, u, d, v, y, S, k) {
      var E = new LM(e, t, a, y, S), N = CM(t, d);
      E.current = N, N.stateNode = E;
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
      return J0(N), E;
    }
    var WS = "18.2.0";
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
    var GS, QS;
    GS = !1, QS = {};
    function uE(e) {
      if (!e)
        return Qa;
      var t = ma(e), a = mR(t);
      if (t.tag === M) {
        var l = t.type;
        if (Dl(l))
          return U1(t, l, a);
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
        var u = Sa(a);
        if (u === null)
          return null;
        if (u.mode & en) {
          var d = qe(a) || "Component";
          if (!QS[d]) {
            QS[d] = !0;
            var v = mn;
            try {
              Mt(u), a.mode & en ? b("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : b("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Mt(v) : kn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function sE(e, t, a, l, u, d, v, y) {
      var S = !1, k = null;
      return oE(e, t, S, k, a, l, u, d, v);
    }
    function cE(e, t, a, l, u, d, v, y, S, k) {
      var E = !0, N = oE(a, l, E, e, u, d, v, y, S);
      N.context = uE(null);
      var O = N.current, j = la(), Y = $u(O), I = Ro(j, Y);
      return I.callback = t ?? null, zu(O, I, Y), PO(N, Y, j), N;
    }
    function Ch(e, t, a, l) {
      jv(t, e);
      var u = t.current, d = la(), v = $u(u);
      ro(v);
      var y = uE(a);
      t.context === null ? t.context = y : t.pendingContext = y, pa && mn !== null && !GS && (GS = !0, b(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(mn) || "Unknown"));
      var S = Ro(d, v);
      S.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && b("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), S.callback = l);
      var k = zu(u, S, v);
      return k !== null && (er(k, u, v, d), Km(k, u, v)), v;
    }
    function Vg(e) {
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
          if (Tn(t)) {
            var a = Wy(t);
            BO(t, a);
          }
          break;
        }
        case ve: {
          Lo(function() {
            var u = Ra(e, Ve);
            if (u !== null) {
              var d = la();
              er(u, e, Ve, d);
            }
          });
          var l = Ve;
          qS(e, l);
          break;
        }
      }
    }
    function fE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function qS(e, t) {
      fE(e, t);
      var a = e.alternate;
      a && fE(a, t);
    }
    function AM(e) {
      if (e.tag === ve) {
        var t = cu, a = Ra(e, t);
        if (a !== null) {
          var l = la();
          er(a, e, t, l);
        }
        qS(e, t);
      }
    }
    function FM(e) {
      if (e.tag === ve) {
        var t = $u(e), a = Ra(e, t);
        if (a !== null) {
          var l = la();
          er(a, e, t, l);
        }
        qS(e, t);
      }
    }
    function dE(e) {
      var t = Av(e);
      return t === null ? null : t.stateNode;
    }
    var pE = function(e) {
      return null;
    };
    function HM(e) {
      return pE(e);
    }
    var hE = function(e) {
      return !1;
    };
    function jM(e) {
      return hE(e);
    }
    var vE = null, mE = null, gE = null, yE = null, bE = null, SE = null, xE = null, wE = null, kE = null;
    {
      var EE = function(e, t, a) {
        var l = t[a], u = Un(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (Un(u) ? u.splice(l, 1) : delete u[l], u) : (u[l] = EE(e[l], t, a + 1), u);
      }, _E = function(e, t) {
        return EE(e, t, 0);
      }, CE = function(e, t, a, l) {
        var u = t[l], d = Un(e) ? e.slice() : ot({}, e);
        if (l + 1 === t.length) {
          var v = a[l];
          d[v] = d[u], Un(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = CE(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            l + 1
          );
        return d;
      }, TE = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return CE(e, t, a, 0);
      }, RE = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var u = t[a], d = Un(e) ? e.slice() : ot({}, e);
        return d[u] = RE(e[u], t, a + 1, l), d;
      }, DE = function(e, t, a) {
        return RE(e, t, 0, a);
      }, XS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      vE = function(e, t, a, l) {
        var u = XS(e, t);
        if (u !== null) {
          var d = DE(u.memoizedState, a, l);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = ot({}, e.memoizedProps);
          var v = Ra(e, Ve);
          v !== null && er(v, e, Ve, Ft);
        }
      }, mE = function(e, t, a) {
        var l = XS(e, t);
        if (l !== null) {
          var u = _E(l.memoizedState, a);
          l.memoizedState = u, l.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var d = Ra(e, Ve);
          d !== null && er(d, e, Ve, Ft);
        }
      }, gE = function(e, t, a, l) {
        var u = XS(e, t);
        if (u !== null) {
          var d = TE(u.memoizedState, a, l);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = ot({}, e.memoizedProps);
          var v = Ra(e, Ve);
          v !== null && er(v, e, Ve, Ft);
        }
      }, yE = function(e, t, a) {
        e.pendingProps = DE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Ra(e, Ve);
        l !== null && er(l, e, Ve, Ft);
      }, bE = function(e, t) {
        e.pendingProps = _E(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ra(e, Ve);
        a !== null && er(a, e, Ve, Ft);
      }, SE = function(e, t, a) {
        e.pendingProps = TE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Ra(e, Ve);
        l !== null && er(l, e, Ve, Ft);
      }, xE = function(e) {
        var t = Ra(e, Ve);
        t !== null && er(t, e, Ve, Ft);
      }, wE = function(e) {
        pE = e;
      }, kE = function(e) {
        hE = e;
      };
    }
    function YM(e) {
      var t = Sa(e);
      return t === null ? null : t.stateNode;
    }
    function PM(e) {
      return null;
    }
    function VM() {
      return mn;
    }
    function $M(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return Jd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: vE,
        overrideHookStateDeletePath: mE,
        overrideHookStateRenamePath: gE,
        overrideProps: yE,
        overridePropsDeletePath: bE,
        overridePropsRenamePath: SE,
        setErrorHandler: wE,
        setSuspenseHandler: kE,
        scheduleUpdate: xE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: YM,
        findFiberByHostInstance: t || PM,
        // React Refresh
        findHostInstancesForRefresh: bM,
        scheduleRefresh: gM,
        scheduleRoot: yM,
        setRefreshHandler: mM,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: VM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: WS
      });
    }
    var OE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function KS(e) {
      this._internalRoot = e;
    }
    $g.prototype.render = KS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? b("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ig(arguments[1]) ? b("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && b("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gn) {
          var l = dE(t.current);
          l && l.parentNode !== a && b("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ch(e, t, null, null);
    }, $g.prototype.unmount = KS.prototype.unmount = function() {
      typeof arguments[0] == "function" && b("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vk() && b("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Lo(function() {
          Ch(null, e, null, null);
        }), D1(t);
      }
    };
    function IM(e, t) {
      if (!Ig(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ME(e);
      var a = !1, l = !1, u = "", d = OE;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === tl && b(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = sE(e, Hm, null, a, l, u, d);
      Mm(v.current, e);
      var y = e.nodeType === gn ? e.parentNode : e;
      return Up(y), new KS(v);
    }
    function $g(e) {
      this._internalRoot = e;
    }
    function BM(e) {
      e && im(e);
    }
    $g.prototype.unstable_scheduleHydration = BM;
    function WM(e, t, a) {
      if (!Ig(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ME(e), t === void 0 && b("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, u = a != null && a.hydratedSources || null, d = !1, v = !1, y = "", S = OE;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var k = cE(t, null, e, Hm, l, d, v, y, S);
      if (Mm(k.current, e), Up(e), u)
        for (var E = 0; E < u.length; E++) {
          var N = u[E];
          eD(k, N);
        }
      return new $g(k);
    }
    function Ig(e) {
      return !!(e && (e.nodeType === Dr || e.nodeType === $a || e.nodeType === Ql || !wt));
    }
    function Th(e) {
      return !!(e && (e.nodeType === Dr || e.nodeType === $a || e.nodeType === Ql || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function ME(e) {
      e.nodeType === Dr && e.tagName && e.tagName.toUpperCase() === "BODY" && b("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Bp(e) && (e._reactRootContainer ? b("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : b("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var GM = f.ReactCurrentOwner, LE;
    LE = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = dE(e._reactRootContainer.current);
        t && t.parentNode !== e && b("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = ZS(e), u = !!(l && Ou(l));
      u && !a && b("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Dr && e.tagName && e.tagName.toUpperCase() === "BODY" && b("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function ZS(e) {
      return e ? e.nodeType === $a ? e.documentElement : e.firstChild : null;
    }
    function NE() {
    }
    function QM(e, t, a, l, u) {
      if (u) {
        if (typeof l == "function") {
          var d = l;
          l = function() {
            var O = Vg(v);
            d.call(O);
          };
        }
        var v = cE(
          t,
          l,
          e,
          Lu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          NE
        );
        e._reactRootContainer = v, Mm(v.current, e);
        var y = e.nodeType === gn ? e.parentNode : e;
        return Up(y), Lo(), v;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof l == "function") {
          var k = l;
          l = function() {
            var O = Vg(E);
            k.call(O);
          };
        }
        var E = sE(
          e,
          Lu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          NE
        );
        e._reactRootContainer = E, Mm(E.current, e);
        var N = e.nodeType === gn ? e.parentNode : e;
        return Up(N), Lo(function() {
          Ch(t, E, a, l);
        }), E;
      }
    }
    function qM(e, t) {
      e !== null && typeof e != "function" && b("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Bg(e, t, a, l, u) {
      LE(a), qM(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = QM(a, t, e, u, l);
      else {
        if (v = d, typeof u == "function") {
          var y = u;
          u = function() {
            var S = Vg(v);
            y.call(S);
          };
        }
        Ch(t, v, e, u);
      }
      return Vg(v);
    }
    function XM(e) {
      {
        var t = GM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || b("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Dr ? e : UM(e, "findDOMNode");
    }
    function KM(e, t, a) {
      if (b("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Th(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Bp(t) && t._reactRootContainer === void 0;
        l && b("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Bg(null, e, t, !0, a);
    }
    function ZM(e, t, a) {
      if (b("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Th(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Bp(t) && t._reactRootContainer === void 0;
        l && b("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Bg(null, e, t, !1, a);
    }
    function JM(e, t, a, l) {
      if (b("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Th(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ys(e))
        throw new Error("parentComponent must be a valid React Component");
      return Bg(e, t, a, !1, l);
    }
    function e2(e) {
      if (!Th(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Bp(e) && e._reactRootContainer === void 0;
        t && b("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = ZS(e), l = a && !Ou(a);
          l && b("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Lo(function() {
          Bg(null, null, e, !1, function() {
            e._reactRootContainer = null, D1(e);
          });
        }), !0;
      } else {
        {
          var u = ZS(e), d = !!(u && Ou(u)), v = e.nodeType === Dr && Th(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && b("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ke(zM), Jv(AM), Ns(FM), mp(ka), tm(Os), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && b("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Nv(rT), Mc(DS, WO, Lo);
    function t2(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ig(t))
        throw new Error("Target container is not a DOM element.");
      return NM(e, t, null, a);
    }
    function n2(e, t, a, l) {
      return JM(e, t, a, l);
    }
    var JS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ou, Uf, Lm, Oc, vs, DS]
    };
    function r2(e, t) {
      return JS.usingClientEntryPoint || b('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), IM(e, t);
    }
    function a2(e, t, a) {
      return JS.usingClientEntryPoint || b('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), WM(e, t, a);
    }
    function i2(e) {
      return Vk() && b("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Lo(e);
    }
    var l2 = $M({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: WS,
      rendererPackageName: "react-dom"
    });
    if (!l2 && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var UE = window.location.protocol;
      /^(https?|file):$/.test(UE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (UE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Na.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JS, Na.createPortal = t2, Na.createRoot = r2, Na.findDOMNode = XM, Na.flushSync = i2, Na.hydrate = KM, Na.hydrateRoot = a2, Na.render = ZM, Na.unmountComponentAtNode = e2, Na.unstable_batchedUpdates = DS, Na.unstable_renderSubtreeIntoContainer = n2, Na.version = WS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Na;
}
function xC() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xC);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (xC(), wA()) : kA();
const i_ = (i) => {
  let s;
  const f = /* @__PURE__ */ new Set(), h = (R, M) => {
    const P = typeof R == "function" ? R(s) : R;
    if (!Object.is(P, s)) {
      const U = s;
      s = M ?? typeof P != "object" ? P : Object.assign({}, s, P), f.forEach(($) => $(s, U));
    }
  }, m = () => s, D = { setState: h, getState: m, subscribe: (R) => (f.add(R), () => f.delete(R)), destroy: () => {
    f.clear();
  } };
  return s = i(h, m, D), D;
}, EA = (i) => i ? i_(i) : i_;
var Tx = { exports: {} }, ux = {}, Xg = { exports: {} }, sx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l_;
function _A() {
  if (l_)
    return sx;
  l_ = 1;
  var i = Po;
  function s(U, $) {
    return U === $ && (U !== 0 || 1 / U === 1 / $) || U !== U && $ !== $;
  }
  var f = typeof Object.is == "function" ? Object.is : s, h = i.useState, m = i.useEffect, x = i.useLayoutEffect, b = i.useDebugValue;
  function D(U, $) {
    var Q = $(), ne = h({ inst: { value: Q, getSnapshot: $ } }), ae = ne[0].inst, se = ne[1];
    return x(function() {
      ae.value = Q, ae.getSnapshot = $, R(ae) && se({ inst: ae });
    }, [U, Q, $]), m(function() {
      return R(ae) && se({ inst: ae }), U(function() {
        R(ae) && se({ inst: ae });
      });
    }, [U]), b(Q), Q;
  }
  function R(U) {
    var $ = U.getSnapshot;
    U = U.value;
    try {
      var Q = $();
      return !f(U, Q);
    } catch {
      return !0;
    }
  }
  function M(U, $) {
    return $();
  }
  var P = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? M : D;
  return sx.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : P, sx;
}
var cx = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o_;
function CA() {
  return o_ || (o_ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Po, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(ee) {
      {
        for (var ge = arguments.length, ve = new Array(ge > 1 ? ge - 1 : 0), le = 1; le < ge; le++)
          ve[le - 1] = arguments[le];
        h("error", ee, ve);
      }
    }
    function h(ee, ge, ve) {
      {
        var le = s.ReactDebugCurrentFrame, he = le.getStackAddendum();
        he !== "" && (ge += "%s", ve = ve.concat([he]));
        var it = ve.map(function(tt) {
          return String(tt);
        });
        it.unshift("Warning: " + ge), Function.prototype.apply.call(console[ee], console, it);
      }
    }
    function m(ee, ge) {
      return ee === ge && (ee !== 0 || 1 / ee === 1 / ge) || ee !== ee && ge !== ge;
    }
    var x = typeof Object.is == "function" ? Object.is : m, b = i.useState, D = i.useEffect, R = i.useLayoutEffect, M = i.useDebugValue, P = !1, U = !1;
    function $(ee, ge, ve) {
      P || i.startTransition !== void 0 && (P = !0, f("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var le = ge();
      if (!U) {
        var he = ge();
        x(le, he) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), U = !0);
      }
      var it = b({
        inst: {
          value: le,
          getSnapshot: ge
        }
      }), tt = it[0].inst, lt = it[1];
      return R(function() {
        tt.value = le, tt.getSnapshot = ge, Q(tt) && lt({
          inst: tt
        });
      }, [ee, le, ge]), D(function() {
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
      var ge = ee.getSnapshot, ve = ee.value;
      try {
        var le = ge();
        return !x(ve, le);
      } catch {
        return !0;
      }
    }
    function ne(ee, ge, ve) {
      return ge();
    }
    var ae = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", se = !ae, Me = se ? ne : $, ie = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Me;
    cx.useSyncExternalStore = ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), cx;
}
var u_;
function wC() {
  return u_ || (u_ = 1, process.env.NODE_ENV === "production" ? Xg.exports = _A() : Xg.exports = CA()), Xg.exports;
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
var s_;
function TA() {
  if (s_)
    return ux;
  s_ = 1;
  var i = Po, s = wC();
  function f(M, P) {
    return M === P && (M !== 0 || 1 / M === 1 / P) || M !== M && P !== P;
  }
  var h = typeof Object.is == "function" ? Object.is : f, m = s.useSyncExternalStore, x = i.useRef, b = i.useEffect, D = i.useMemo, R = i.useDebugValue;
  return ux.useSyncExternalStoreWithSelector = function(M, P, U, $, Q) {
    var ne = x(null);
    if (ne.current === null) {
      var ae = { hasValue: !1, value: null };
      ne.current = ae;
    } else
      ae = ne.current;
    ne = D(function() {
      function Me(le) {
        if (!ie) {
          if (ie = !0, ee = le, le = $(le), Q !== void 0 && ae.hasValue) {
            var he = ae.value;
            if (Q(he, le))
              return ge = he;
          }
          return ge = le;
        }
        if (he = ge, h(ee, le))
          return he;
        var it = $(le);
        return Q !== void 0 && Q(he, it) ? he : (ee = le, ge = it);
      }
      var ie = !1, ee, ge, ve = U === void 0 ? null : U;
      return [function() {
        return Me(P());
      }, ve === null ? void 0 : function() {
        return Me(ve());
      }];
    }, [P, U, $, Q]);
    var se = m(M, ne[0], ne[1]);
    return b(function() {
      ae.hasValue = !0, ae.value = se;
    }, [se]), R(se), se;
  }, ux;
}
var fx = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c_;
function RA() {
  return c_ || (c_ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Po, s = wC();
    function f(P, U) {
      return P === U && (P !== 0 || 1 / P === 1 / U) || P !== P && U !== U;
    }
    var h = typeof Object.is == "function" ? Object.is : f, m = s.useSyncExternalStore, x = i.useRef, b = i.useEffect, D = i.useMemo, R = i.useDebugValue;
    function M(P, U, $, Q, ne) {
      var ae = x(null), se;
      ae.current === null ? (se = {
        hasValue: !1,
        value: null
      }, ae.current = se) : se = ae.current;
      var Me = D(function() {
        var ve = !1, le, he, it = function(Vt) {
          if (!ve) {
            ve = !0, le = Vt;
            var $e = Q(Vt);
            if (ne !== void 0 && se.hasValue) {
              var et = se.value;
              if (ne(et, $e))
                return he = et, et;
            }
            return he = $e, $e;
          }
          var hn = le, Rt = he;
          if (h(hn, Vt))
            return Rt;
          var xn = Q(Vt);
          return ne !== void 0 && ne(Rt, xn) ? Rt : (le = Vt, he = xn, xn);
        }, tt = $ === void 0 ? null : $, lt = function() {
          return it(U());
        }, ht = tt === null ? void 0 : function() {
          return it(tt());
        };
        return [lt, ht];
      }, [U, $, Q, ne]), ie = Me[0], ee = Me[1], ge = m(P, ie, ee);
      return b(function() {
        se.hasValue = !0, se.value = ge;
      }, [ge]), R(ge), ge;
    }
    fx.useSyncExternalStoreWithSelector = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), fx;
}
process.env.NODE_ENV === "production" ? Tx.exports = TA() : Tx.exports = RA();
var DA = Tx.exports;
const OA = /* @__PURE__ */ d2(DA), { useSyncExternalStoreWithSelector: MA } = OA;
function LA(i, s = i.getState, f) {
  const h = MA(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    s,
    f
  );
  return f2(h), h;
}
const f_ = (i) => {
  const s = typeof i == "function" ? EA(i) : i, f = (h, m) => LA(s, h, m);
  return Object.assign(f, s), f;
}, NA = (i) => i ? f_(i) : f_, UA = (i, s) => (...f) => Object.assign({}, i, s(...f));
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
    const b = () => {
      h = null, f || i.apply(void 0, m);
    }, D = f && !h;
    clearTimeout(h), h = setTimeout(b, s), D && i.apply(void 0, m);
  };
};
export {
  YA as Bar,
  jA as Line,
  PA as Time,
  VA as debounce
};
