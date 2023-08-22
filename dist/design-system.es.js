import Po, { Fragment as s2, useRef as c2, useDebugValue as f2 } from "react";
function d2(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var db = { exports: {} }, Dh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z_;
function p2() {
  if (z_)
    return Dh;
  z_ = 1;
  var i = Po, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(D, R, M) {
    var P, U = {}, I = null, Q = null;
    M !== void 0 && (I = "" + M), R.key !== void 0 && (I = "" + R.key), R.ref !== void 0 && (Q = R.ref);
    for (P in R)
      h.call(R, P) && !x.hasOwnProperty(P) && (U[P] = R[P]);
    if (D && D.defaultProps)
      for (P in R = D.defaultProps, R)
        U[P] === void 0 && (U[P] = R[P]);
    return { $$typeof: s, type: D, key: I, ref: Q, props: U, _owner: m.current };
  }
  return Dh.Fragment = f, Dh.jsx = S, Dh.jsxs = S, Dh;
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
var A_;
function h2() {
  return A_ || (A_ = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Po, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), D = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
    function se(T) {
      if (T === null || typeof T != "object")
        return null;
      var K = ne && T[ne] || T[ae];
      return typeof K == "function" ? K : null;
    }
    var Me = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ie(T) {
      {
        for (var K = arguments.length, pe = new Array(K > 1 ? K - 1 : 0), Fe = 1; Fe < K; Fe++)
          pe[Fe - 1] = arguments[Fe];
        ee("error", T, pe);
      }
    }
    function ee(T, K, pe) {
      {
        var Fe = Me.ReactDebugCurrentFrame, Ze = Fe.getStackAddendum();
        Ze !== "" && (K += "%s", pe = pe.concat([Ze]));
        var vt = pe.map(function(Je) {
          return String(Je);
        });
        vt.unshift("Warning: " + K), Function.prototype.apply.call(console[T], console, vt);
      }
    }
    var ye = !1, ve = !1, le = !1, he = !1, it = !1, tt;
    tt = Symbol.for("react.module.reference");
    function lt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === h || T === x || it || T === m || T === M || T === P || he || T === Q || ye || ve || le || typeof T == "object" && T !== null && (T.$$typeof === I || T.$$typeof === U || T.$$typeof === S || T.$$typeof === D || T.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === tt || T.getModuleId !== void 0));
    }
    function ht(T, K, pe) {
      var Fe = T.displayName;
      if (Fe)
        return Fe;
      var Ze = K.displayName || K.name || "";
      return Ze !== "" ? pe + "(" + Ze + ")" : pe;
    }
    function Vt(T) {
      return T.displayName || "Context";
    }
    function Ie(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
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
      if (typeof T == "object")
        switch (T.$$typeof) {
          case D:
            var K = T;
            return Vt(K) + ".Consumer";
          case S:
            var pe = T;
            return Vt(pe._context) + ".Provider";
          case R:
            return ht(T, T.render, "ForwardRef");
          case U:
            var Fe = T.displayName || null;
            return Fe !== null ? Fe : Ie(T.type) || "Memo";
          case I: {
            var Ze = T, vt = Ze._payload, Je = Ze._init;
            try {
              return Ie(Je(vt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, hn = 0, Rt, xn, ue, Ae, be, yt, wt;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function hr() {
      {
        if (hn === 0) {
          Rt = console.log, xn = console.info, ue = console.warn, Ae = console.error, be = console.group, yt = console.groupCollapsed, wt = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        hn++;
      }
    }
    function Ja() {
      {
        if (hn--, hn === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, T, {
              value: Rt
            }),
            info: et({}, T, {
              value: xn
            }),
            warn: et({}, T, {
              value: ue
            }),
            error: et({}, T, {
              value: Ae
            }),
            group: et({}, T, {
              value: be
            }),
            groupCollapsed: et({}, T, {
              value: yt
            }),
            groupEnd: et({}, T, {
              value: wt
            })
          });
        }
        hn < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wn = Me.ReactCurrentDispatcher, sa;
    function nr(T, K, pe) {
      {
        if (sa === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var Fe = Ze.stack.trim().match(/\n( *(at )?)/);
            sa = Fe && Fe[1] || "";
          }
        return `
` + sa + T;
      }
    }
    var Tr = !1, ei;
    {
      var kr = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new kr();
    }
    function ca(T, K) {
      if (!T || Tr)
        return "";
      {
        var pe = ei.get(T);
        if (pe !== void 0)
          return pe;
      }
      var Fe;
      Tr = !0;
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
            } catch (gt) {
              Fe = gt;
            }
            Reflect.construct(T, [], Je);
          } else {
            try {
              Je.call();
            } catch (gt) {
              Fe = gt;
            }
            T.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Fe = gt;
          }
          T();
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
                    return T.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", T.displayName)), typeof T == "function" && ei.set(T, vr), vr;
                  }
                while (Qt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        Tr = !1, wn.current = vt, Ja(), Error.prepareStackTrace = Ze;
      }
      var rl = T ? T.displayName || T.name : "", fc = rl ? nr(rl) : "";
      return typeof T == "function" && ei.set(T, fc), fc;
    }
    function Mn(T, K, pe) {
      return ca(T, !1);
    }
    function rr(T) {
      var K = T.prototype;
      return !!(K && K.isReactComponent);
    }
    function In(T, K, pe) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return ca(T, rr(T));
      if (typeof T == "string")
        return nr(T);
      switch (T) {
        case M:
          return nr("Suspense");
        case P:
          return nr("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case R:
            return Mn(T.render);
          case U:
            return In(T.type, K, pe);
          case I: {
            var Fe = T, Ze = Fe._payload, vt = Fe._init;
            try {
              return In(vt(Ze), K, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var ar = Object.prototype.hasOwnProperty, ir = {}, fa = Me.ReactDebugCurrentFrame;
    function za(T) {
      if (T) {
        var K = T._owner, pe = In(T.type, T._source, K ? K.type : null);
        fa.setExtraStackFrame(pe);
      } else
        fa.setExtraStackFrame(null);
    }
    function xi(T, K, pe, Fe, Ze) {
      {
        var vt = Function.call.bind(ar);
        for (var Je in T)
          if (vt(T, Je)) {
            var Ye = void 0;
            try {
              if (typeof T[Je] != "function") {
                var Nn = Error((Fe || "React class") + ": " + pe + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              Ye = T[Je](K, Je, Fe, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              Ye = Qt;
            }
            Ye && !(Ye instanceof Error) && (za(Ze), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", pe, Je, typeof Ye), za(null)), Ye instanceof Error && !(Ye.message in ir) && (ir[Ye.message] = !0, za(Ze), ie("Failed %s type: %s", pe, Ye.message), za(null));
          }
      }
    }
    var ti = Array.isArray;
    function Aa(T) {
      return ti(T);
    }
    function $r(T) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, pe = K && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return pe;
      }
    }
    function ni(T) {
      try {
        return Gr(T), !1;
      } catch {
        return !0;
      }
    }
    function Gr(T) {
      return "" + T;
    }
    function Fa(T) {
      if (ni(T))
        return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $r(T)), Gr(T);
    }
    var vn = Me.ReactCurrentOwner, Qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, el, Ha, de;
    de = {};
    function Ne(T) {
      if (ar.call(T, "ref")) {
        var K = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function nt(T) {
      if (ar.call(T, "key")) {
        var K = Object.getOwnPropertyDescriptor(T, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Dt(T, K) {
      if (typeof T.ref == "string" && vn.current && K && vn.current.stateNode !== K) {
        var pe = Ie(vn.current.type);
        de[pe] || (ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(vn.current.type), T.ref), de[pe] = !0);
      }
    }
    function Zt(T, K) {
      {
        var pe = function() {
          el || (el = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        pe.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Ln(T, K) {
      {
        var pe = function() {
          Ha || (Ha = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        pe.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var cn = function(T, K, pe, Fe, Ze, vt, Je) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: T,
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
    function Rr(T, K, pe, Fe, Ze) {
      {
        var vt, Je = {}, Ye = null, Nn = null;
        pe !== void 0 && (Fa(pe), Ye = "" + pe), nt(K) && (Fa(K.key), Ye = "" + K.key), Ne(K) && (Nn = K.ref, Dt(K, Ze));
        for (vt in K)
          ar.call(K, vt) && !Qr.hasOwnProperty(vt) && (Je[vt] = K[vt]);
        if (T && T.defaultProps) {
          var Qt = T.defaultProps;
          for (vt in Qt)
            Je[vt] === void 0 && (Je[vt] = Qt[vt]);
        }
        if (Ye || Nn) {
          var qt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          Ye && Zt(Je, qt), Nn && Ln(Je, qt);
        }
        return cn(T, Ye, Nn, Ze, Fe, vn.current, Je);
      }
    }
    var Ht = Me.ReactCurrentOwner, qr = Me.ReactDebugCurrentFrame;
    function Ut(T) {
      if (T) {
        var K = T._owner, pe = In(T.type, T._source, K ? K.type : null);
        qr.setExtraStackFrame(pe);
      } else
        qr.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function Bo(T) {
      return typeof T == "object" && T !== null && T.$$typeof === s;
    }
    function Vl() {
      {
        if (Ht.current) {
          var T = Ie(Ht.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Wo(T) {
      {
        if (T !== void 0) {
          var K = T.fileName.replace(/^.*[\\\/]/, ""), pe = T.lineNumber;
          return `

Check your code at ` + K + ":" + pe + ".";
        }
        return "";
      }
    }
    var Xu = {};
    function cc(T) {
      {
        var K = Vl();
        if (!K) {
          var pe = typeof T == "string" ? T : T.displayName || T.name;
          pe && (K = `

Check the top-level render call using <` + pe + ">.");
        }
        return K;
      }
    }
    function Il(T, K) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var pe = cc(K);
        if (Xu[pe])
          return;
        Xu[pe] = !0;
        var Fe = "";
        T && T._owner && T._owner !== Ht.current && (Fe = " It was passed a child from " + Ie(T._owner.type) + "."), Ut(T), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Fe), Ut(null);
      }
    }
    function $o(T, K) {
      {
        if (typeof T != "object")
          return;
        if (Aa(T))
          for (var pe = 0; pe < T.length; pe++) {
            var Fe = T[pe];
            Bo(Fe) && Il(Fe, K);
          }
        else if (Bo(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Ze = se(T);
          if (typeof Ze == "function" && Ze !== T.entries)
            for (var vt = Ze.call(T), Je; !(Je = vt.next()).done; )
              Bo(Je.value) && Il(Je.value, K);
        }
      }
    }
    function Bl(T) {
      {
        var K = T.type;
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
          var Fe = Ie(K);
          xi(pe, T.props, "prop", Fe, T);
        } else if (K.PropTypes !== void 0 && !jt) {
          jt = !0;
          var Ze = Ie(K);
          ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Go(T) {
      {
        for (var K = Object.keys(T.props), pe = 0; pe < K.length; pe++) {
          var Fe = K[pe];
          if (Fe !== "children" && Fe !== "key") {
            Ut(T), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), Ut(null);
            break;
          }
        }
        T.ref !== null && (Ut(T), ie("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    function ri(T, K, pe, Fe, Ze, vt) {
      {
        var Je = lt(T);
        if (!Je) {
          var Ye = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = Wo(Ze);
          Nn ? Ye += Nn : Ye += Vl();
          var Qt;
          T === null ? Qt = "null" : Aa(T) ? Qt = "array" : T !== void 0 && T.$$typeof === s ? (Qt = "<" + (Ie(T.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof T, ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, Ye);
        }
        var qt = Rr(T, K, pe, Ze, vt);
        if (qt == null)
          return qt;
        if (Je) {
          var vr = K.children;
          if (vr !== void 0)
            if (Fe)
              if (Aa(vr)) {
                for (var rl = 0; rl < vr.length; rl++)
                  $o(vr[rl], T);
                Object.freeze && Object.freeze(vr);
              } else
                ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $o(vr, T);
        }
        return T === h ? Go(qt) : Bl(qt), qt;
      }
    }
    function tl(T, K, pe) {
      return ri(T, K, pe, !0);
    }
    function Xr(T, K, pe) {
      return ri(T, K, pe, !1);
    }
    var ja = Xr, nl = tl;
    Oh.Fragment = h, Oh.jsx = ja, Oh.jsxs = nl;
  }()), Oh;
}
process.env.NODE_ENV === "production" ? db.exports = p2() : db.exports = h2();
var Yt = db.exports, qu = Po;
const Uh = /^[a-z0-9]+(-[a-z0-9]+)*$/, sg = (i, s, f, h = "") => {
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
    return s && !Ky(M) ? null : M;
  }
  const x = m[0], S = x.split("-");
  if (S.length > 1) {
    const D = {
      provider: h,
      prefix: S.shift(),
      name: S.join("-")
    };
    return s && !Ky(D) ? null : D;
  }
  if (f && h === "") {
    const D = {
      provider: h,
      prefix: "",
      name: x
    };
    return s && !Ky(D, f) ? null : D;
  }
  return null;
}, Ky = (i, s) => i ? !!((i.provider === "" || i.provider.match(Uh)) && (s && i.prefix === "" || i.prefix.match(Uh)) && i.name.match(Uh)) : !1, dC = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), ng = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Rb = Object.freeze({
  ...dC,
  ...ng
}), pb = Object.freeze({
  ...Rb,
  body: "",
  hidden: !1
});
function v2(i, s) {
  const f = {};
  !i.hFlip != !s.hFlip && (f.hFlip = !0), !i.vFlip != !s.vFlip && (f.vFlip = !0);
  const h = ((i.rotate || 0) + (s.rotate || 0)) % 4;
  return h && (f.rotate = h), f;
}
function F_(i, s) {
  const f = v2(i, s);
  for (const h in pb)
    h in ng ? h in i && !(h in f) && (f[h] = ng[h]) : h in s ? f[h] = s[h] : h in i && (f[h] = i[h]);
  return f;
}
function m2(i, s) {
  const f = i.icons, h = i.aliases || /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function x(S) {
    if (f[S])
      return m[S] = [];
    if (!(S in m)) {
      m[S] = null;
      const D = h[S] && h[S].parent, R = D && x(D);
      R && (m[S] = [D].concat(R));
    }
    return m[S];
  }
  return (s || Object.keys(f).concat(Object.keys(h))).forEach(x), m;
}
function y2(i, s, f) {
  const h = i.icons, m = i.aliases || /* @__PURE__ */ Object.create(null);
  let x = {};
  function S(D) {
    x = F_(
      h[D] || m[D],
      x
    );
  }
  return S(s), f.forEach(S), F_(i, x);
}
function pC(i, s) {
  const f = [];
  if (typeof i != "object" || typeof i.icons != "object")
    return f;
  i.not_found instanceof Array && i.not_found.forEach((m) => {
    s(m, null), f.push(m);
  });
  const h = m2(i);
  for (const m in h) {
    const x = h[m];
    x && (s(m, y2(i, m, x)), f.push(m));
  }
  return f;
}
const g2 = {
  provider: "",
  aliases: {},
  not_found: {},
  ...dC
};
function eb(i, s) {
  for (const f in s)
    if (f in i && typeof i[f] != typeof s[f])
      return !1;
  return !0;
}
function hC(i) {
  if (typeof i != "object" || i === null)
    return null;
  const s = i;
  if (typeof s.prefix != "string" || !i.icons || typeof i.icons != "object" || !eb(i, g2))
    return null;
  const f = s.icons;
  for (const m in f) {
    const x = f[m];
    if (!m.match(Uh) || typeof x.body != "string" || !eb(
      x,
      pb
    ))
      return null;
  }
  const h = s.aliases || /* @__PURE__ */ Object.create(null);
  for (const m in h) {
    const x = h[m], S = x.parent;
    if (!m.match(Uh) || typeof S != "string" || !f[S] && !h[S] || !eb(
      x,
      pb
    ))
      return null;
  }
  return s;
}
const H_ = /* @__PURE__ */ Object.create(null);
function S2(i, s) {
  return {
    provider: i,
    prefix: s,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function uc(i, s) {
  const f = H_[i] || (H_[i] = /* @__PURE__ */ Object.create(null));
  return f[s] || (f[s] = S2(i, s));
}
function Db(i, s) {
  return hC(s) ? pC(s, (f, h) => {
    h ? i.icons[f] = h : i.missing.add(f);
  }) : [];
}
function b2(i, s, f) {
  try {
    if (typeof f.body == "string")
      return i.icons[s] = { ...f }, !0;
  } catch {
  }
  return !1;
}
let Hh = !1;
function vC(i) {
  return typeof i == "boolean" && (Hh = i), Hh;
}
function x2(i) {
  const s = typeof i == "string" ? sg(i, !0, Hh) : i;
  if (s) {
    const f = uc(s.provider, s.prefix), h = s.name;
    return f.icons[h] || (f.missing.has(h) ? null : void 0);
  }
}
function w2(i, s) {
  const f = sg(i, !0, Hh);
  if (!f)
    return !1;
  const h = uc(f.provider, f.prefix);
  return b2(h, f.name, s);
}
function E2(i, s) {
  if (typeof i != "object")
    return !1;
  if (typeof s != "string" && (s = i.provider || ""), Hh && !s && !i.prefix) {
    let m = !1;
    return hC(i) && (i.prefix = "", pC(i, (x, S) => {
      S && w2(x, S) && (m = !0);
    })), m;
  }
  const f = i.prefix;
  if (!Ky({
    provider: s,
    prefix: f,
    name: "a"
  }))
    return !1;
  const h = uc(s, f);
  return !!Db(h, i);
}
const mC = Object.freeze({
  width: null,
  height: null
}), yC = Object.freeze({
  // Dimensions
  ...mC,
  // Transformations
  ...ng
}), _2 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, C2 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function j_(i, s, f) {
  if (s === 1)
    return i;
  if (f = f || 100, typeof i == "number")
    return Math.ceil(i * s * f) / f;
  if (typeof i != "string")
    return i;
  const h = i.split(_2);
  if (h === null || !h.length)
    return i;
  const m = [];
  let x = h.shift(), S = C2.test(x);
  for (; ; ) {
    if (S) {
      const D = parseFloat(x);
      isNaN(D) ? m.push(x) : m.push(Math.ceil(D * s * f) / f);
    } else
      m.push(x);
    if (x = h.shift(), x === void 0)
      return m.join("");
    S = !S;
  }
}
const T2 = (i) => i === "unset" || i === "undefined" || i === "none";
function k2(i, s) {
  const f = {
    ...Rb,
    ...i
  }, h = {
    ...yC,
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
  const S = h.width, D = h.height, R = m.width, M = m.height;
  let P, U;
  S === null ? (U = D === null ? "1em" : D === "auto" ? M : D, P = j_(U, R / M)) : (P = S === "auto" ? R : S, U = D === null ? j_(P, M / R) : D === "auto" ? M : D);
  const I = {}, Q = (ne, ae) => {
    T2(ae) || (I[ne] = ae.toString());
  };
  return Q("width", P), Q("height", U), I.viewBox = m.left.toString() + " " + m.top.toString() + " " + R.toString() + " " + M.toString(), {
    attributes: I,
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
    const S = typeof s == "function" ? s(x) : s + (O2++).toString(), D = x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + D + ')([")]|\\.[a-z])', "g"),
      "$1" + S + m + "$3"
    );
  }), i = i.replace(new RegExp(m, "g"), ""), i;
}
const hb = /* @__PURE__ */ Object.create(null);
function L2(i, s) {
  hb[i] = s;
}
function vb(i) {
  return hb[i] || hb[""];
}
function Ob(i) {
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
const Mb = /* @__PURE__ */ Object.create(null), Mh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Zy = [];
for (; Mh.length > 0; )
  Mh.length === 1 || Math.random() > 0.5 ? Zy.push(Mh.shift()) : Zy.push(Mh.pop());
Mb[""] = Ob({
  resources: ["https://api.iconify.design"].concat(Zy)
});
function N2(i, s) {
  const f = Ob(s);
  return f === null ? !1 : (Mb[i] = f, !0);
}
function Lb(i) {
  return Mb[i];
}
const U2 = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let Y_ = U2();
function z2(i, s) {
  const f = Lb(i);
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
  let S = {
    type: x,
    provider: i,
    prefix: s,
    icons: []
  }, D = 0;
  return f.forEach((R, M) => {
    D += R.length + 1, D >= m && M > 0 && (h.push(S), S = {
      type: x,
      provider: i,
      prefix: s,
      icons: []
    }, D = R.length), S.icons.push(R);
  }), h.push(S), h;
};
function H2(i) {
  if (typeof i == "string") {
    const s = Lb(i);
    if (s)
      return s.path;
  }
  return "/";
}
const j2 = (i, s, f) => {
  if (!Y_) {
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
  Y_(i + h).then((x) => {
    const S = x.status;
    if (S !== 200) {
      setTimeout(() => {
        f(A2(S) ? "abort" : "next", S);
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
    const x = m.provider, S = m.prefix, D = m.name, R = f[x] || (f[x] = /* @__PURE__ */ Object.create(null)), M = R[S] || (R[S] = uc(x, S));
    let P;
    D in M.icons ? P = s.loaded : S === "" || M.missing.has(D) ? P = s.missing : P = s.pending;
    const U = {
      provider: x,
      prefix: S,
      name: D
    };
    P.push(U);
  }), s;
}
function gC(i, s) {
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
      const S = x.icons, D = S.pending.length;
      S.pending = S.pending.filter((R) => {
        if (R.prefix !== m)
          return !0;
        const M = R.name;
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
      }), S.pending.length !== D && (f || gC([i], x.id), x.callback(
        S.loaded.slice(0),
        S.missing.slice(0),
        S.pending.slice(0),
        x.abort
      ));
    });
  }));
}
let I2 = 0;
function B2(i, s, f) {
  const h = I2++, m = gC.bind(null, f, h);
  if (!s.pending.length)
    return m;
  const x = {
    id: h,
    icons: s,
    callback: i,
    abort: m
  };
  return f.forEach((S) => {
    (S.loaderCallbacks || (S.loaderCallbacks = [])).push(x);
  }), m;
}
function W2(i, s = !0, f = !1) {
  const h = [];
  return i.forEach((m) => {
    const x = typeof m == "string" ? sg(m, s, f) : m;
    x && h.push(x);
  }), h;
}
var $2 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function G2(i, s, f, h) {
  const m = i.resources.length, x = i.random ? Math.floor(Math.random() * m) : i.index;
  let S;
  if (i.random) {
    let le = i.resources.slice(0);
    for (S = []; le.length > 1; ) {
      const he = Math.floor(Math.random() * le.length);
      S.push(le[he]), le = le.slice(0, he).concat(le.slice(he + 1));
    }
    S = S.concat(le);
  } else
    S = i.resources.slice(x).concat(i.resources.slice(0, x));
  const D = Date.now();
  let R = "pending", M = 0, P, U = null, I = [], Q = [];
  typeof h == "function" && Q.push(h);
  function ne() {
    U && (clearTimeout(U), U = null);
  }
  function ae() {
    R === "pending" && (R = "aborted"), ne(), I.forEach((le) => {
      le.status === "pending" && (le.status = "aborted");
    }), I = [];
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
      queriesPending: I.length,
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
    I.forEach((le) => {
      le.status === "pending" && (le.status = "aborted");
    }), I = [];
  }
  function ye(le, he, it) {
    const tt = he !== "success";
    switch (I = I.filter((lt) => lt !== le), R) {
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
    R = "completed", Q.forEach((lt) => {
      lt(it);
    });
  }
  function ve() {
    if (R !== "pending")
      return;
    ne();
    const le = S.shift();
    if (le === void 0) {
      if (I.length) {
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
        ye(he, it, tt);
      }
    };
    I.push(he), M++, U = setTimeout(ve, i.rotate), f(le, s, he.callback);
  }
  return setTimeout(ve), Me;
}
function SC(i) {
  const s = {
    ...$2,
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
      (U, I) => {
        h(), M && M(U, I);
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
function P_() {
}
const tb = /* @__PURE__ */ Object.create(null);
function Q2(i) {
  if (!tb[i]) {
    const s = Lb(i);
    if (!s)
      return;
    const f = SC(s), h = {
      config: s,
      redundancy: f
    };
    tb[i] = h;
  }
  return tb[i];
}
function q2(i, s, f) {
  let h, m;
  if (typeof i == "string") {
    const x = vb(i);
    if (!x)
      return f(void 0, 424), P_;
    m = x.send;
    const S = Q2(i);
    S && (h = S.redundancy);
  } else {
    const x = Ob(i);
    if (x) {
      h = SC(x);
      const S = i.resources ? i.resources[0] : "", D = vb(S);
      D && (m = D.send);
    }
  }
  return !h || !m ? (f(void 0, 424), P_) : h.query(s, m, f)().abort;
}
const V_ = "iconify2", jh = "iconify", bC = jh + "-count", I_ = jh + "-version", xC = 36e5, X2 = 168;
function mb(i, s) {
  try {
    return i.getItem(s);
  } catch {
  }
}
function Nb(i, s, f) {
  try {
    return i.setItem(s, f), !0;
  } catch {
  }
}
function B_(i, s) {
  try {
    i.removeItem(s);
  } catch {
  }
}
function yb(i, s) {
  return Nb(i, bC, s.toString());
}
function gb(i) {
  return parseInt(mb(i, bC)) || 0;
}
const cg = {
  local: !0,
  session: !0
}, wC = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Ub = !1;
function K2(i) {
  Ub = i;
}
let $y = typeof window > "u" ? {} : window;
function EC(i) {
  const s = i + "Storage";
  try {
    if ($y && $y[s] && typeof $y[s].length == "number")
      return $y[s];
  } catch {
  }
  cg[i] = !1;
}
function _C(i, s) {
  const f = EC(i);
  if (!f)
    return;
  const h = mb(f, I_);
  if (h !== V_) {
    if (h) {
      const D = gb(f);
      for (let R = 0; R < D; R++)
        B_(f, jh + R.toString());
    }
    Nb(f, I_, V_), yb(f, 0);
    return;
  }
  const m = Math.floor(Date.now() / xC) - X2, x = (D) => {
    const R = jh + D.toString(), M = mb(f, R);
    if (typeof M == "string") {
      try {
        const P = JSON.parse(M);
        if (typeof P == "object" && typeof P.cached == "number" && P.cached > m && typeof P.provider == "string" && typeof P.data == "object" && typeof P.data.prefix == "string" && // Valid item: run callback
        s(P, D))
          return !0;
      } catch {
      }
      B_(f, R);
    }
  };
  let S = gb(f);
  for (let D = S - 1; D >= 0; D--)
    x(D) || (D === S - 1 ? (S--, yb(f, S)) : wC[i].add(D));
}
function CC() {
  if (!Ub) {
    K2(!0);
    for (const i in cg)
      _C(i, (s) => {
        const f = s.data, h = s.provider, m = f.prefix, x = uc(
          h,
          m
        );
        if (!Db(x, f).length)
          return !1;
        const S = f.lastModified || -1;
        return x.lastModifiedCached = x.lastModifiedCached ? Math.min(x.lastModifiedCached, S) : S, !0;
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
    for (const h in cg)
      _C(h, (m) => {
        const x = m.data;
        return m.provider !== i.provider || x.prefix !== i.prefix || x.lastModified === s;
      });
  return !0;
}
function J2(i, s) {
  Ub || CC();
  function f(h) {
    let m;
    if (!cg[h] || !(m = EC(h)))
      return;
    const x = wC[h];
    let S;
    if (x.size)
      x.delete(S = Array.from(x).shift());
    else if (S = gb(m), !yb(m, S + 1))
      return;
    const D = {
      cached: Math.floor(Date.now() / xC),
      provider: i.provider,
      data: s
    };
    return Nb(
      m,
      jh + S.toString(),
      JSON.stringify(D)
    );
  }
  s.lastModified && !Z2(i, s.lastModified) || Object.keys(s.icons).length && (s.not_found && (s = Object.assign({}, s), delete s.not_found), f("local") || f("session"));
}
function W_() {
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
    if (!m || !(x = vb(f)))
      return;
    x.prepare(f, h, m).forEach((D) => {
      q2(f, D, (R) => {
        if (typeof R != "object")
          D.icons.forEach((M) => {
            i.missing.add(M);
          });
        else
          try {
            const M = Db(
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
  const f = W2(i, !0, vC()), h = P2(f);
  if (!h.pending.length) {
    let R = !0;
    return s && setTimeout(() => {
      R && s(
        h.loaded,
        h.missing,
        h.pending,
        W_
      );
    }), () => {
      R = !1;
    };
  }
  const m = /* @__PURE__ */ Object.create(null), x = [];
  let S, D;
  return h.pending.forEach((R) => {
    const { provider: M, prefix: P } = R;
    if (P === D && M === S)
      return;
    S = M, D = P, x.push(uc(M, P));
    const U = m[M] || (m[M] = /* @__PURE__ */ Object.create(null));
    U[P] || (U[P] = []);
  }), h.pending.forEach((R) => {
    const { provider: M, prefix: P, name: U } = R, I = uc(M, P), Q = I.pendingIcons || (I.pendingIcons = /* @__PURE__ */ new Set());
    Q.has(U) || (Q.add(U), m[M][P].push(U));
  }), x.forEach((R) => {
    const { provider: M, prefix: P } = R;
    m[M][P].length && tL(R, m[M][P]);
  }), s ? B2(s, h, x) : W_;
};
function rL(i, s) {
  const f = {
    ...i
  };
  for (const h in s) {
    const m = s[h], x = typeof m;
    h in mC ? (m === null || m && (x === "string" || x === "number")) && (f[h] = m) : x === typeof f[h] && (f[h] = h === "rotate" ? m % 4 : m);
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
const TC = {
  ...yC,
  inline: !1
}, pL = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, hL = {
  display: "inline-block"
}, Sb = {
  backgroundColor: "currentColor"
}, kC = {
  backgroundColor: "transparent"
}, $_ = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, G_ = {
  WebkitMask: Sb,
  mask: Sb,
  background: kC
};
for (const i in G_) {
  const s = G_[i];
  for (const f in $_)
    s[i + f] = $_[f];
}
const vL = {
  ...TC,
  inline: !0
};
function Q_(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const mL = (i, s, f, h) => {
  const m = f ? vL : TC, x = rL(m, s), S = s.mode || "svg", D = {}, R = s.style || {}, M = {
    ...S === "svg" ? pL : {},
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
  const P = k2(i, x), U = P.attributes;
  if (x.inline && (D.verticalAlign = "-0.125em"), S === "svg") {
    M.style = {
      ...D,
      ...R
    }, Object.assign(M, U);
    let Me = 0, ie = s.id;
    return typeof ie == "string" && (ie = ie.replace(/-/g, "_")), M.dangerouslySetInnerHTML = {
      __html: dL(M2(P.body, ie ? () => ie + "ID" + Me++ : "iconifyReact"))
    }, qu.createElement("svg", M);
  }
  const { body: I, width: Q, height: ne } = i, ae = S === "mask" || (S === "bg" ? !1 : I.indexOf("currentColor") !== -1), se = oL(I, {
    ...U,
    width: Q + "",
    height: ne + ""
  });
  return M.style = {
    ...D,
    "--svg": cL(se),
    width: Q_(U.width),
    height: Q_(U.height),
    ...hL,
    ...ae ? Sb : kC,
    ...R
  }, qu.createElement("span", M);
};
vC(!0);
L2("", Y2);
if (typeof document < "u" && typeof window < "u") {
  CC();
  const i = window;
  if (i.IconifyPreload !== void 0) {
    const s = i.IconifyPreload, f = "Invalid IconifyPreload syntax.";
    typeof s == "object" && s !== null && (s instanceof Array ? s : [s]).forEach((h) => {
      try {
        // Check if item is an object and not null/array
        (typeof h != "object" || h === null || h instanceof Array || // Check for 'icons' and 'prefix'
        typeof h.icons != "object" || typeof h.prefix != "string" || // Add icon set
        !E2(h)) && console.error(f);
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
class RC extends qu.Component {
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
    if (typeof h != "string" || (m = sg(h, !1, !0)) === null) {
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
      const S = ["iconify"];
      m.prefix !== "" && S.push("iconify--" + m.prefix), m.provider !== "" && S.push("iconify--" + m.provider), this._setData({
        data: x,
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
      return s.children ? s.children : qu.createElement("span", {});
    let h = s;
    return f.classes && (h = {
      ...s,
      className: (typeof s.className == "string" ? s.className + " " : "") + f.classes.join(" ")
    }), mL({
      ...Rb,
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
  return qu.createElement(RC, h);
});
qu.forwardRef(function(s, f) {
  const h = {
    ...s,
    _ref: f,
    _inline: !0
  };
  return qu.createElement(RC, h);
});
const yL = (i, s, f, h, m, x) => {
  s = s - 16;
  const S = s / h, D = [];
  return Object.values(i).forEach((R) => {
    let M = "";
    R.forEach((P, U) => {
      U === 0 && (x ? M += `M-4,${s + 50}L-4,${s - P * S}` : M += `M0,${s - P * S}`), U > 0 && (M += `L${m * U},${s - P * S}`), U === R.length - 1 && (M += `L${f + 4},${s + 50}`);
    }), D.push(M);
  }), D;
}, jA = ({
  data: i,
  width: s,
  height: f,
  filled: h = !0,
  tooltipRef: m,
  maxItemValue: x,
  lineRef: S
}) => {
  if (s === 0 || f === 0 || i.length === 0)
    return null;
  const D = Object.keys(i[0]).length, R = s / (i.length - 1) + 1, M = i.reduce(
    (U, I) => (Object.entries(I).forEach(
      ([Q, ne]) => {
        U != null && U[Q] ? U[Q].push(ne) : U[Q] = [ne];
      }
    ), U),
    {}
  ), P = yL(
    M,
    f,
    s,
    x,
    R,
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
            const ae = S.current.parentNode.getBoundingClientRect().left, Me = Array.from({ length: D }).map(
              (ee, ye) => R * ye
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
}, gL = ({
  label: i,
  onMouseEnter: s,
  x: f,
  y: h,
  height: m,
  width: x,
  ...S
}) => {
  const D = String(S.value).length * 4, R = x / 2 - D;
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
        /* @__PURE__ */ Yt.jsx("text", { x: f + R, y: h - 5, children: S.value }),
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
  maxItemValue: S
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
    const I = (s - 40) / S, Q = { ...P };
    delete Q[x];
    let ne = 1, se = U * ne * D * ((M + R) / (D - 1)), Me = U > 0 ? se / 2 : se;
    Me += String(P[x]).length * 6;
    const ie = (M + R) * D;
    if (!h) {
      const ee = (i - R * (f.length - 1)) / f.length;
      Me = ee * U + ee / 2 - String(P[x]).length * 8;
    }
    return /* @__PURE__ */ Yt.jsxs("g", { children: [
      Object.entries(Q).map(([ee, ye], ve) => {
        se = ve * D * ((M + R * (D - 1)) / (D - 1)), se = se + U * ie, h && (se /= 2);
        const he = ye * I;
        return ne += 1, /* @__PURE__ */ Yt.jsx(
          gL,
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
var DC;
function oe() {
  return DC.apply(null, arguments);
}
function SL(i) {
  DC = i;
}
function Ki(i) {
  return i instanceof Array || Object.prototype.toString.call(i) === "[object Array]";
}
function oc(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Object]";
}
function Tt(i, s) {
  return Object.prototype.hasOwnProperty.call(i, s);
}
function zb(i) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(i).length === 0;
  var s;
  for (s in i)
    if (Tt(i, s))
      return !1;
  return !0;
}
function Ua(i) {
  return i === void 0;
}
function Yo(i) {
  return typeof i == "number" || Object.prototype.toString.call(i) === "[object Number]";
}
function Ih(i) {
  return i instanceof Date || Object.prototype.toString.call(i) === "[object Date]";
}
function OC(i, s) {
  var f = [], h, m = i.length;
  for (h = 0; h < m; ++h)
    f.push(s(i[h], h));
  return f;
}
function $u(i, s) {
  for (var f in s)
    Tt(s, f) && (i[f] = s[f]);
  return Tt(s, "toString") && (i.toString = s.toString), Tt(s, "valueOf") && (i.valueOf = s.valueOf), i;
}
function Yl(i, s, f, h) {
  return eT(i, s, f, h, !0).utc();
}
function bL() {
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
  return i._pf == null && (i._pf = bL()), i._pf;
}
var bb;
Array.prototype.some ? bb = Array.prototype.some : bb = function(i) {
  var s = Object(this), f = s.length >>> 0, h;
  for (h = 0; h < f; h++)
    if (h in s && i.call(this, s[h], h, s))
      return !0;
  return !1;
};
function Ab(i) {
  if (i._isValid == null) {
    var s = at(i), f = bb.call(s.parsedDateParts, function(m) {
      return m != null;
    }), h = !isNaN(i._d.getTime()) && s.overflow < 0 && !s.empty && !s.invalidEra && !s.invalidMonth && !s.invalidWeekday && !s.weekdayMismatch && !s.nullInput && !s.invalidFormat && !s.userInvalidated && (!s.meridiem || s.meridiem && f);
    if (i._strict && (h = h && s.charsLeftOver === 0 && s.unusedTokens.length === 0 && s.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(i))
      i._isValid = h;
    else
      return h;
  }
  return i._isValid;
}
function fg(i) {
  var s = Yl(NaN);
  return i != null ? $u(at(s), i) : at(s).userInvalidated = !0, s;
}
var q_ = oe.momentProperties = [], nb = !1;
function Fb(i, s) {
  var f, h, m, x = q_.length;
  if (Ua(s._isAMomentObject) || (i._isAMomentObject = s._isAMomentObject), Ua(s._i) || (i._i = s._i), Ua(s._f) || (i._f = s._f), Ua(s._l) || (i._l = s._l), Ua(s._strict) || (i._strict = s._strict), Ua(s._tzm) || (i._tzm = s._tzm), Ua(s._isUTC) || (i._isUTC = s._isUTC), Ua(s._offset) || (i._offset = s._offset), Ua(s._pf) || (i._pf = at(s)), Ua(s._locale) || (i._locale = s._locale), x > 0)
    for (f = 0; f < x; f++)
      h = q_[f], m = s[h], Ua(m) || (i[h] = m);
  return i;
}
function Bh(i) {
  Fb(this, i), this._d = new Date(i._d != null ? i._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), nb === !1 && (nb = !0, oe.updateOffset(this), nb = !1);
}
function Zi(i) {
  return i instanceof Bh || i != null && i._isAMomentObject != null;
}
function MC(i) {
  oe.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + i);
}
function Si(i, s) {
  var f = !0;
  return $u(function() {
    if (oe.deprecationHandler != null && oe.deprecationHandler(null, i), f) {
      var h = [], m, x, S, D = arguments.length;
      for (x = 0; x < D; x++) {
        if (m = "", typeof arguments[x] == "object") {
          m += `
[` + x + "] ";
          for (S in arguments[0])
            Tt(arguments[0], S) && (m += S + ": " + arguments[0][S] + ", ");
          m = m.slice(0, -2);
        } else
          m = arguments[x];
        h.push(m);
      }
      MC(
        i + `
Arguments: ` + Array.prototype.slice.call(h).join("") + `
` + new Error().stack
      ), f = !1;
    }
    return s.apply(this, arguments);
  }, s);
}
var X_ = {};
function LC(i, s) {
  oe.deprecationHandler != null && oe.deprecationHandler(i, s), X_[i] || (MC(s), X_[i] = !0);
}
oe.suppressDeprecationWarnings = !1;
oe.deprecationHandler = null;
function Pl(i) {
  return typeof Function < "u" && i instanceof Function || Object.prototype.toString.call(i) === "[object Function]";
}
function xL(i) {
  var s, f;
  for (f in i)
    Tt(i, f) && (s = i[f], Pl(s) ? this[f] = s : this["_" + f] = s);
  this._config = i, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function xb(i, s) {
  var f = $u({}, i), h;
  for (h in s)
    Tt(s, h) && (oc(i[h]) && oc(s[h]) ? (f[h] = {}, $u(f[h], i[h]), $u(f[h], s[h])) : s[h] != null ? f[h] = s[h] : delete f[h]);
  for (h in i)
    Tt(i, h) && !Tt(s, h) && oc(i[h]) && (f[h] = $u({}, f[h]));
  return f;
}
function Hb(i) {
  i != null && this.set(i);
}
var wb;
Object.keys ? wb = Object.keys : wb = function(i) {
  var s, f = [];
  for (s in i)
    Tt(i, s) && f.push(s);
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
function EL(i, s, f) {
  var h = this._calendar[i] || this._calendar.sameElse;
  return Pl(h) ? h.call(s, f) : h;
}
function jl(i, s, f) {
  var h = "" + Math.abs(i), m = s - h.length, x = i >= 0;
  return (x ? f ? "+" : "" : "-") + Math.pow(10, Math.max(0, m)).toString().substr(1) + h;
}
var jb = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Gy = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, rb = {}, ud = {};
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
function _L(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function CL(i) {
  var s = i.match(jb), f, h;
  for (f = 0, h = s.length; f < h; f++)
    ud[s[f]] ? s[f] = ud[s[f]] : s[f] = _L(s[f]);
  return function(m) {
    var x = "", S;
    for (S = 0; S < h; S++)
      x += Pl(s[S]) ? s[S].call(m, i) : s[S];
    return x;
  };
}
function Jy(i, s) {
  return i.isValid() ? (s = NC(s, i.localeData()), rb[s] = rb[s] || CL(s), rb[s](i)) : i.localeData().invalidDate();
}
function NC(i, s) {
  var f = 5;
  function h(m) {
    return s.longDateFormat(m) || m;
  }
  for (Gy.lastIndex = 0; f >= 0 && Gy.test(i); )
    i = i.replace(
      Gy,
      h
    ), Gy.lastIndex = 0, f -= 1;
  return i;
}
var TL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function kL(i) {
  var s = this._longDateFormat[i], f = this._longDateFormat[i.toUpperCase()];
  return s || !f ? s : (this._longDateFormat[i] = f.match(jb).map(function(h) {
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
function Br(i, s) {
  var f = i.toLowerCase();
  Ah[f] = Ah[f + "s"] = Ah[s] = i;
}
function bi(i) {
  return typeof i == "string" ? Ah[i] || Ah[i.toLowerCase()] : void 0;
}
function Yb(i) {
  var s = {}, f, h;
  for (h in i)
    Tt(i, h) && (f = bi(h), f && (s[f] = i[h]));
  return s;
}
var UC = {};
function Wr(i, s) {
  UC[i] = s;
}
function AL(i) {
  var s = [], f;
  for (f in i)
    Tt(i, f) && s.push({ unit: f, priority: UC[f] });
  return s.sort(function(h, m) {
    return h.priority - m.priority;
  }), s;
}
function dg(i) {
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
    return f != null ? (zC(this, i, f), oe.updateOffset(this, s), this) : rg(this, i);
  };
}
function rg(i, s) {
  return i.isValid() ? i._d["get" + (i._isUTC ? "UTC" : "") + s]() : NaN;
}
function zC(i, s, f) {
  i.isValid() && !isNaN(f) && (s === "FullYear" && dg(i.year()) && i.month() === 1 && i.date() === 29 ? (f = ct(f), i._d["set" + (i._isUTC ? "UTC" : "") + s](
    f,
    i.month(),
    gg(f, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + s](f));
}
function FL(i) {
  return i = bi(i), Pl(this[i]) ? this[i]() : this;
}
function HL(i, s) {
  if (typeof i == "object") {
    i = Yb(i);
    var f = AL(i), h, m = f.length;
    for (h = 0; h < m; h++)
      this[f[h].unit](i[f[h].unit]);
  } else if (i = bi(i), Pl(this[i]))
    return this[i](s);
  return this;
}
var AC = /\d/, Za = /\d\d/, FC = /\d{3}/, Pb = /\d{4}/, pg = /[+-]?\d{6}/, an = /\d\d?/, HC = /\d\d\d\d?/, jC = /\d\d\d\d\d\d?/, hg = /\d{1,3}/, Vb = /\d{1,4}/, vg = /[+-]?\d{1,6}/, dd = /\d+/, mg = /[+-]?\d+/, jL = /Z|[+-]\d\d:?\d\d/gi, yg = /Z|[+-]\d\d(?::?\d\d)?/gi, YL = /[+-]?\d+(\.\d{1,3})?/, Wh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ag;
ag = {};
function _e(i, s, f) {
  ag[i] = Pl(s) ? s : function(h, m) {
    return h && f ? f : s;
  };
}
function PL(i, s) {
  return Tt(ag, i) ? ag[i](s._strict, s._locale) : new RegExp(VL(i));
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
var Eb = {};
function Pt(i, s) {
  var f, h = s, m;
  for (typeof i == "string" && (i = [i]), Yo(s) && (h = function(x, S) {
    S[s] = ct(x);
  }), m = i.length, f = 0; f < m; f++)
    Eb[i[f]] = h;
}
function $h(i, s) {
  Pt(i, function(f, h, m, x) {
    m._w = m._w || {}, s(f, m._w, m, x);
  });
}
function IL(i, s, f) {
  s != null && Tt(Eb, i) && Eb[i](s, f._a, f, i);
}
var Ir = 0, Fo = 1, Hl = 2, tr = 3, Xi = 4, Ho = 5, lc = 6, BL = 7, WL = 8;
function $L(i, s) {
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
function gg(i, s) {
  if (isNaN(i) || isNaN(s))
    return NaN;
  var f = $L(s, 12);
  return i += (s - f) / 12, f === 1 ? dg(i) ? 29 : 28 : 31 - f % 7 % 2;
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
_e("M", an);
_e("MM", an, Za);
_e("MMM", function(i, s) {
  return s.monthsShortRegex(i);
});
_e("MMMM", function(i, s) {
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
), YC = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), PC = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, QL = Wh, qL = Wh;
function XL(i, s) {
  return i ? Ki(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || PC).test(s) ? "format" : "standalone"][i.month()] : Ki(this._months) ? this._months : this._months.standalone;
}
function KL(i, s) {
  return i ? Ki(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[PC.test(s) ? "format" : "standalone"][i.month()] : Ki(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ZL(i, s, f) {
  var h, m, x, S = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], h = 0; h < 12; ++h)
      x = Yl([2e3, h]), this._shortMonthsParse[h] = this.monthsShort(
        x,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[h] = this.months(x, "").toLocaleLowerCase();
  return f ? s === "MMM" ? (m = On.call(this._shortMonthsParse, S), m !== -1 ? m : null) : (m = On.call(this._longMonthsParse, S), m !== -1 ? m : null) : s === "MMM" ? (m = On.call(this._shortMonthsParse, S), m !== -1 ? m : (m = On.call(this._longMonthsParse, S), m !== -1 ? m : null)) : (m = On.call(this._longMonthsParse, S), m !== -1 ? m : (m = On.call(this._shortMonthsParse, S), m !== -1 ? m : null));
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
function VC(i, s) {
  var f;
  if (!i.isValid())
    return i;
  if (typeof s == "string") {
    if (/^\d+$/.test(s))
      s = ct(s);
    else if (s = i.localeData().monthsParse(s), !Yo(s))
      return i;
  }
  return f = Math.min(i.date(), gg(i.year(), s)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](s, f), i;
}
function IC(i) {
  return i != null ? (VC(this, i), oe.updateOffset(this, !0), this) : rg(this, "Month");
}
function eN() {
  return gg(this.year(), this.month());
}
function tN(i) {
  return this._monthsParseExact ? (Tt(this, "_monthsRegex") || BC.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Tt(this, "_monthsShortRegex") || (this._monthsShortRegex = QL), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function nN(i) {
  return this._monthsParseExact ? (Tt(this, "_monthsRegex") || BC.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Tt(this, "_monthsRegex") || (this._monthsRegex = qL), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function BC() {
  function i(S, D) {
    return D.length - S.length;
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
Br("year", "y");
Wr("year", 1);
_e("Y", mg);
_e("YY", an, Za);
_e("YYYY", Vb, Pb);
_e("YYYYY", vg, pg);
_e("YYYYYY", vg, pg);
Pt(["YYYYY", "YYYYYY"], Ir);
Pt("YYYY", function(i, s) {
  s[Ir] = i.length === 2 ? oe.parseTwoDigitYear(i) : ct(i);
});
Pt("YY", function(i, s) {
  s[Ir] = oe.parseTwoDigitYear(i);
});
Pt("Y", function(i, s) {
  s[Ir] = parseInt(i, 10);
});
function Fh(i) {
  return dg(i) ? 366 : 365;
}
oe.parseTwoDigitYear = function(i) {
  return ct(i) + (ct(i) > 68 ? 1900 : 2e3);
};
var WC = fd("FullYear", !0);
function rN() {
  return dg(this.year());
}
function aN(i, s, f, h, m, x, S) {
  var D;
  return i < 100 && i >= 0 ? (D = new Date(i + 400, s, f, h, m, x, S), isFinite(D.getFullYear()) && D.setFullYear(i)) : D = new Date(i, s, f, h, m, x, S), D;
}
function Yh(i) {
  var s, f;
  return i < 100 && i >= 0 ? (f = Array.prototype.slice.call(arguments), f[0] = i + 400, s = new Date(Date.UTC.apply(null, f)), isFinite(s.getUTCFullYear()) && s.setUTCFullYear(i)) : s = new Date(Date.UTC.apply(null, arguments)), s;
}
function ig(i, s, f) {
  var h = 7 + s - f, m = (7 + Yh(i, 0, h).getUTCDay() - s) % 7;
  return -m + h - 1;
}
function $C(i, s, f, h, m) {
  var x = (7 + f - h) % 7, S = ig(i, h, m), D = 1 + 7 * (s - 1) + x + S, R, M;
  return D <= 0 ? (R = i - 1, M = Fh(R) + D) : D > Fh(i) ? (R = i + 1, M = D - Fh(i)) : (R = i, M = D), {
    year: R,
    dayOfYear: M
  };
}
function Ph(i, s, f) {
  var h = ig(i.year(), s, f), m = Math.floor((i.dayOfYear() - h - 1) / 7) + 1, x, S;
  return m < 1 ? (S = i.year() - 1, x = m + jo(S, s, f)) : m > jo(i.year(), s, f) ? (x = m - jo(i.year(), s, f), S = i.year() + 1) : (S = i.year(), x = m), {
    week: x,
    year: S
  };
}
function jo(i, s, f) {
  var h = ig(i, s, f), m = ig(i + 1, s, f);
  return (Fh(i) - h + m) / 7;
}
je("w", ["ww", 2], "wo", "week");
je("W", ["WW", 2], "Wo", "isoWeek");
Br("week", "w");
Br("isoWeek", "W");
Wr("week", 5);
Wr("isoWeek", 5);
_e("w", an);
_e("ww", an, Za);
_e("W", an);
_e("WW", an, Za);
$h(
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
Br("day", "d");
Br("weekday", "e");
Br("isoWeekday", "E");
Wr("day", 11);
Wr("weekday", 11);
Wr("isoWeekday", 11);
_e("d", an);
_e("e", an);
_e("E", an);
_e("dd", function(i, s) {
  return s.weekdaysMinRegex(i);
});
_e("ddd", function(i, s) {
  return s.weekdaysShortRegex(i);
});
_e("dddd", function(i, s) {
  return s.weekdaysRegex(i);
});
$h(["dd", "ddd", "dddd"], function(i, s, f, h) {
  var m = f._locale.weekdaysParse(i, h, f._strict);
  m != null ? s.d = m : at(f).invalidWeekday = i;
});
$h(["d", "e", "E"], function(i, s, f, h) {
  s[h] = ct(i);
});
function fN(i, s) {
  return typeof i != "string" ? i : isNaN(i) ? (i = s.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function dN(i, s) {
  return typeof i == "string" ? s.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function Ib(i, s) {
  return i.slice(s, 7).concat(i.slice(0, s));
}
var pN = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), GC = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), hN = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), vN = Wh, mN = Wh, yN = Wh;
function gN(i, s) {
  var f = Ki(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(s) ? "format" : "standalone"];
  return i === !0 ? Ib(f, this._week.dow) : i ? f[i.day()] : f;
}
function SN(i) {
  return i === !0 ? Ib(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function bN(i) {
  return i === !0 ? Ib(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function xN(i, s, f) {
  var h, m, x, S = i.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], h = 0; h < 7; ++h)
      x = Yl([2e3, 1]).day(h), this._minWeekdaysParse[h] = this.weekdaysMin(
        x,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[h] = this.weekdaysShort(
        x,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[h] = this.weekdays(x, "").toLocaleLowerCase();
  return f ? s === "dddd" ? (m = On.call(this._weekdaysParse, S), m !== -1 ? m : null) : s === "ddd" ? (m = On.call(this._shortWeekdaysParse, S), m !== -1 ? m : null) : (m = On.call(this._minWeekdaysParse, S), m !== -1 ? m : null) : s === "dddd" ? (m = On.call(this._weekdaysParse, S), m !== -1 || (m = On.call(this._shortWeekdaysParse, S), m !== -1) ? m : (m = On.call(this._minWeekdaysParse, S), m !== -1 ? m : null)) : s === "ddd" ? (m = On.call(this._shortWeekdaysParse, S), m !== -1 || (m = On.call(this._weekdaysParse, S), m !== -1) ? m : (m = On.call(this._minWeekdaysParse, S), m !== -1 ? m : null)) : (m = On.call(this._minWeekdaysParse, S), m !== -1 || (m = On.call(this._weekdaysParse, S), m !== -1) ? m : (m = On.call(this._shortWeekdaysParse, S), m !== -1 ? m : null));
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
function EN(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = fN(i, this.localeData()), this.add(i - s, "d")) : s;
}
function _N(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var s = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? s : this.add(i - s, "d");
}
function CN(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var s = dN(i, this.localeData());
    return this.day(this.day() % 7 ? s : s - 7);
  } else
    return this.day() || 7;
}
function TN(i) {
  return this._weekdaysParseExact ? (Tt(this, "_weekdaysRegex") || Bb.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Tt(this, "_weekdaysRegex") || (this._weekdaysRegex = vN), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function kN(i) {
  return this._weekdaysParseExact ? (Tt(this, "_weekdaysRegex") || Bb.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Tt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = mN), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function RN(i) {
  return this._weekdaysParseExact ? (Tt(this, "_weekdaysRegex") || Bb.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Tt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = yN), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Bb() {
  function i(P, U) {
    return U.length - P.length;
  }
  var s = [], f = [], h = [], m = [], x, S, D, R, M;
  for (x = 0; x < 7; x++)
    S = Yl([2e3, 1]).day(x), D = Ka(this.weekdaysMin(S, "")), R = Ka(this.weekdaysShort(S, "")), M = Ka(this.weekdays(S, "")), s.push(D), f.push(R), h.push(M), m.push(D), m.push(R), m.push(M);
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
function Wb() {
  return this.hours() % 12 || 12;
}
function DN() {
  return this.hours() || 24;
}
je("H", ["HH", 2], 0, "hour");
je("h", ["hh", 2], 0, Wb);
je("k", ["kk", 2], 0, DN);
je("hmm", 0, 0, function() {
  return "" + Wb.apply(this) + jl(this.minutes(), 2);
});
je("hmmss", 0, 0, function() {
  return "" + Wb.apply(this) + jl(this.minutes(), 2) + jl(this.seconds(), 2);
});
je("Hmm", 0, 0, function() {
  return "" + this.hours() + jl(this.minutes(), 2);
});
je("Hmmss", 0, 0, function() {
  return "" + this.hours() + jl(this.minutes(), 2) + jl(this.seconds(), 2);
});
function QC(i, s) {
  je(i, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      s
    );
  });
}
QC("a", !0);
QC("A", !1);
Br("hour", "h");
Wr("hour", 13);
function qC(i, s) {
  return s._meridiemParse;
}
_e("a", qC);
_e("A", qC);
_e("H", an);
_e("h", an);
_e("k", an);
_e("HH", an, Za);
_e("hh", an, Za);
_e("kk", an, Za);
_e("hmm", HC);
_e("hmmss", jC);
_e("Hmm", HC);
_e("Hmmss", jC);
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
var XC = {
  calendar: wL,
  longDateFormat: TL,
  invalidDate: RL,
  ordinal: OL,
  dayOfMonthOrdinalParse: ML,
  relativeTime: NL,
  months: GL,
  monthsShort: YC,
  week: lN,
  weekdays: pN,
  weekdaysMin: hN,
  weekdaysShort: GC,
  meridiemParse: MN
}, sn = {}, Lh = {}, Vh;
function UN(i, s) {
  var f, h = Math.min(i.length, s.length);
  for (f = 0; f < h; f += 1)
    if (i[f] !== s[f])
      return f;
  return h;
}
function K_(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function zN(i) {
  for (var s = 0, f, h, m, x; s < i.length; ) {
    for (x = K_(i[s]).split("-"), f = x.length, h = K_(i[s + 1]), h = h ? h.split("-") : null; f > 0; ) {
      if (m = Sg(x.slice(0, f).join("-")), m)
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
function Sg(i) {
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
  return i && (Ua(s) ? f = Vo(i) : f = $b(i, s), f ? Vh = f : typeof console < "u" && console.warn && console.warn(
    "Locale " + i + " not found. Did you forget to load it?"
  )), Vh._abbr;
}
function $b(i, s) {
  if (s !== null) {
    var f, h = XC;
    if (s.abbr = i, sn[i] != null)
      LC(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), h = sn[i]._config;
    else if (s.parentLocale != null)
      if (sn[s.parentLocale] != null)
        h = sn[s.parentLocale]._config;
      else if (f = Sg(s.parentLocale), f != null)
        h = f._config;
      else
        return Lh[s.parentLocale] || (Lh[s.parentLocale] = []), Lh[s.parentLocale].push({
          name: i,
          config: s
        }), null;
    return sn[i] = new Hb(xb(h, s)), Lh[i] && Lh[i].forEach(function(m) {
      $b(m.name, m.config);
    }), Qu(i), sn[i];
  } else
    return delete sn[i], null;
}
function FN(i, s) {
  if (s != null) {
    var f, h, m = XC;
    sn[i] != null && sn[i].parentLocale != null ? sn[i].set(xb(sn[i]._config, s)) : (h = Sg(i), h != null && (m = h._config), s = xb(m, s), h == null && (s.abbr = i), f = new Hb(s), f.parentLocale = sn[i], sn[i] = f), Qu(i);
  } else
    sn[i] != null && (sn[i].parentLocale != null ? (sn[i] = sn[i].parentLocale, i === Qu() && Qu(i)) : sn[i] != null && delete sn[i]);
  return sn[i];
}
function Vo(i) {
  var s;
  if (i && i._locale && i._locale._abbr && (i = i._locale._abbr), !i)
    return Vh;
  if (!Ki(i)) {
    if (s = Sg(i), s)
      return s;
    i = [i];
  }
  return zN(i);
}
function HN() {
  return wb(sn);
}
function Gb(i) {
  var s, f = i._a;
  return f && at(i).overflow === -2 && (s = f[Fo] < 0 || f[Fo] > 11 ? Fo : f[Hl] < 1 || f[Hl] > gg(f[Ir], f[Fo]) ? Hl : f[tr] < 0 || f[tr] > 24 || f[tr] === 24 && (f[Xi] !== 0 || f[Ho] !== 0 || f[lc] !== 0) ? tr : f[Xi] < 0 || f[Xi] > 59 ? Xi : f[Ho] < 0 || f[Ho] > 59 ? Ho : f[lc] < 0 || f[lc] > 999 ? lc : -1, at(i)._overflowDayOfYear && (s < Ir || s > Hl) && (s = Hl), at(i)._overflowWeeks && s === -1 && (s = BL), at(i)._overflowWeekday && s === -1 && (s = WL), at(i).overflow = s), i;
}
var jN = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, YN = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, PN = /Z|[+-]\d\d(?::?\d\d)?/, Qy = [
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
], ab = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], VN = /^\/?Date\((-?\d+)/i, IN = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, BN = {
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
function KC(i) {
  var s, f, h = i._i, m = jN.exec(h) || YN.exec(h), x, S, D, R, M = Qy.length, P = ab.length;
  if (m) {
    for (at(i).iso = !0, s = 0, f = M; s < f; s++)
      if (Qy[s][1].exec(m[1])) {
        S = Qy[s][0], x = Qy[s][2] !== !1;
        break;
      }
    if (S == null) {
      i._isValid = !1;
      return;
    }
    if (m[3]) {
      for (s = 0, f = P; s < f; s++)
        if (ab[s][1].exec(m[3])) {
          D = (m[2] || " ") + ab[s][0];
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
    i._f = S + (D || "") + (R || ""), qb(i);
  } else
    i._isValid = !1;
}
function WN(i, s, f, h, m, x) {
  var S = [
    $N(i),
    YC.indexOf(s),
    parseInt(f, 10),
    parseInt(h, 10),
    parseInt(m, 10)
  ];
  return x && S.push(parseInt(x, 10)), S;
}
function $N(i) {
  var s = parseInt(i, 10);
  return s <= 49 ? 2e3 + s : s <= 999 ? 1900 + s : s;
}
function GN(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function QN(i, s, f) {
  if (i) {
    var h = GC.indexOf(i), m = new Date(
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
    return BN[i];
  if (s)
    return 0;
  var h = parseInt(f, 10), m = h % 100, x = (h - m) / 100;
  return x * 60 + m;
}
function ZC(i) {
  var s = IN.exec(GN(i._i)), f;
  if (s) {
    if (f = WN(
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
  if (KC(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  if (ZC(i), i._isValid === !1)
    delete i._isValid;
  else
    return;
  i._strict ? i._isValid = !1 : oe.createFromInputFallback(i);
}
oe.createFromInputFallback = Si(
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
function Qb(i) {
  var s, f, h = [], m, x, S;
  if (!i._d) {
    for (m = KN(i), i._w && i._a[Hl] == null && i._a[Fo] == null && ZN(i), i._dayOfYear != null && (S = ld(i._a[Ir], m[Ir]), (i._dayOfYear > Fh(S) || i._dayOfYear === 0) && (at(i)._overflowDayOfYear = !0), f = Yh(S, 0, i._dayOfYear), i._a[Fo] = f.getUTCMonth(), i._a[Hl] = f.getUTCDate()), s = 0; s < 3 && i._a[s] == null; ++s)
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
  var s, f, h, m, x, S, D, R, M;
  s = i._w, s.GG != null || s.W != null || s.E != null ? (x = 1, S = 4, f = ld(
    s.GG,
    i._a[Ir],
    Ph(rn(), 1, 4).year
  ), h = ld(s.W, 1), m = ld(s.E, 1), (m < 1 || m > 7) && (R = !0)) : (x = i._locale._week.dow, S = i._locale._week.doy, M = Ph(rn(), x, S), f = ld(s.gg, i._a[Ir], M.year), h = ld(s.w, M.week), s.d != null ? (m = s.d, (m < 0 || m > 6) && (R = !0)) : s.e != null ? (m = s.e + x, (s.e < 0 || s.e > 6) && (R = !0)) : m = x), h < 1 || h > jo(f, x, S) ? at(i)._overflowWeeks = !0 : R != null ? at(i)._overflowWeekday = !0 : (D = $C(f, h, m, x, S), i._a[Ir] = D.year, i._dayOfYear = D.dayOfYear);
}
oe.ISO_8601 = function() {
};
oe.RFC_2822 = function() {
};
function qb(i) {
  if (i._f === oe.ISO_8601) {
    KC(i);
    return;
  }
  if (i._f === oe.RFC_2822) {
    ZC(i);
    return;
  }
  i._a = [], at(i).empty = !0;
  var s = "" + i._i, f, h, m, x, S, D = s.length, R = 0, M, P;
  for (m = NC(i._f, i._locale).match(jb) || [], P = m.length, f = 0; f < P; f++)
    x = m[f], h = (s.match(PL(x, i)) || [])[0], h && (S = s.substr(0, s.indexOf(h)), S.length > 0 && at(i).unusedInput.push(S), s = s.slice(
      s.indexOf(h) + h.length
    ), R += h.length), ud[x] ? (h ? at(i).empty = !1 : at(i).unusedTokens.push(x), IL(x, h, i)) : i._strict && !h && at(i).unusedTokens.push(x);
  at(i).charsLeftOver = D - R, s.length > 0 && at(i).unusedInput.push(s), i._a[tr] <= 12 && at(i).bigHour === !0 && i._a[tr] > 0 && (at(i).bigHour = void 0), at(i).parsedDateParts = i._a.slice(0), at(i).meridiem = i._meridiem, i._a[tr] = JN(
    i._locale,
    i._a[tr],
    i._meridiem
  ), M = at(i).era, M !== null && (i._a[Ir] = i._locale.erasConvertYear(M, i._a[Ir])), Qb(i), Gb(i);
}
function JN(i, s, f) {
  var h;
  return f == null ? s : i.meridiemHour != null ? i.meridiemHour(s, f) : (i.isPM != null && (h = i.isPM(f), h && s < 12 && (s += 12), !h && s === 12 && (s = 0)), s);
}
function eU(i) {
  var s, f, h, m, x, S, D = !1, R = i._f.length;
  if (R === 0) {
    at(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (m = 0; m < R; m++)
    x = 0, S = !1, s = Fb({}, i), i._useUTC != null && (s._useUTC = i._useUTC), s._f = i._f[m], qb(s), Ab(s) && (S = !0), x += at(s).charsLeftOver, x += at(s).unusedTokens.length * 10, at(s).score = x, D ? x < h && (h = x, f = s) : (h == null || x < h || S) && (h = x, f = s, S && (D = !0));
  $u(i, f || s);
}
function tU(i) {
  if (!i._d) {
    var s = Yb(i._i), f = s.day === void 0 ? s.date : s.day;
    i._a = OC(
      [s.year, s.month, f, s.hour, s.minute, s.second, s.millisecond],
      function(h) {
        return h && parseInt(h, 10);
      }
    ), Qb(i);
  }
}
function nU(i) {
  var s = new Bh(Gb(JC(i)));
  return s._nextDay && (s.add(1, "d"), s._nextDay = void 0), s;
}
function JC(i) {
  var s = i._i, f = i._f;
  return i._locale = i._locale || Vo(i._l), s === null || f === void 0 && s === "" ? fg({ nullInput: !0 }) : (typeof s == "string" && (i._i = s = i._locale.preparse(s)), Zi(s) ? new Bh(Gb(s)) : (Ih(s) ? i._d = s : Ki(f) ? eU(i) : f ? qb(i) : rU(i), Ab(i) || (i._d = null), i));
}
function rU(i) {
  var s = i._i;
  Ua(s) ? i._d = new Date(oe.now()) : Ih(s) ? i._d = new Date(s.valueOf()) : typeof s == "string" ? XN(i) : Ki(s) ? (i._a = OC(s.slice(0), function(f) {
    return parseInt(f, 10);
  }), Qb(i)) : oc(s) ? tU(i) : Yo(s) ? i._d = new Date(s) : oe.createFromInputFallback(i);
}
function eT(i, s, f, h, m) {
  var x = {};
  return (s === !0 || s === !1) && (h = s, s = void 0), (f === !0 || f === !1) && (h = f, f = void 0), (oc(i) && zb(i) || Ki(i) && i.length === 0) && (i = void 0), x._isAMomentObject = !0, x._useUTC = x._isUTC = m, x._l = f, x._i = i, x._f = s, x._strict = h, nU(x);
}
function rn(i, s, f, h) {
  return eT(i, s, f, h, !1);
}
var aU = Si(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : fg();
  }
), iU = Si(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : fg();
  }
);
function tT(i, s) {
  var f, h;
  if (s.length === 1 && Ki(s[0]) && (s = s[0]), !s.length)
    return rn();
  for (f = s[0], h = 1; h < s.length; ++h)
    (!s[h].isValid() || s[h][i](f)) && (f = s[h]);
  return f;
}
function lU() {
  var i = [].slice.call(arguments, 0);
  return tT("isBefore", i);
}
function oU() {
  var i = [].slice.call(arguments, 0);
  return tT("isAfter", i);
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
    if (Tt(i, s) && !(On.call(Nh, s) !== -1 && (i[s] == null || !isNaN(i[s]))))
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
function bg(i) {
  var s = Yb(i), f = s.year || 0, h = s.quarter || 0, m = s.month || 0, x = s.week || s.isoWeek || 0, S = s.day || 0, D = s.hour || 0, R = s.minute || 0, M = s.second || 0, P = s.millisecond || 0;
  this._isValid = sU(s), this._milliseconds = +P + M * 1e3 + // 1000
  R * 6e4 + // 1000 * 60
  D * 1e3 * 60 * 60, this._days = +S + x * 7, this._months = +m + h * 3 + f * 12, this._data = {}, this._locale = Vo(), this._bubble();
}
function eg(i) {
  return i instanceof bg;
}
function _b(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function dU(i, s, f) {
  var h = Math.min(i.length, s.length), m = Math.abs(i.length - s.length), x = 0, S;
  for (S = 0; S < h; S++)
    (f && i[S] !== s[S] || !f && ct(i[S]) !== ct(s[S])) && x++;
  return x + m;
}
function nT(i, s) {
  je(i, 0, 0, function() {
    var f = this.utcOffset(), h = "+";
    return f < 0 && (f = -f, h = "-"), h + jl(~~(f / 60), 2) + s + jl(~~f % 60, 2);
  });
}
nT("Z", ":");
nT("ZZ", "");
_e("Z", yg);
_e("ZZ", yg);
Pt(["Z", "ZZ"], function(i, s, f) {
  f._useUTC = !0, f._tzm = Xb(yg, i);
});
var pU = /([\+\-]|\d\d)/gi;
function Xb(i, s) {
  var f = (s || "").match(i), h, m, x;
  return f === null ? null : (h = f[f.length - 1] || [], m = (h + "").match(pU) || ["-", 0, 0], x = +(m[1] * 60) + ct(m[2]), x === 0 ? 0 : m[0] === "+" ? x : -x);
}
function Kb(i, s) {
  var f, h;
  return s._isUTC ? (f = s.clone(), h = (Zi(i) || Ih(i) ? i.valueOf() : rn(i).valueOf()) - f.valueOf(), f._d.setTime(f._d.valueOf() + h), oe.updateOffset(f, !1), f) : rn(i).local();
}
function Cb(i) {
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
      if (i = Xb(yg, i), i === null)
        return this;
    } else
      Math.abs(i) < 16 && !f && (i = i * 60);
    return !this._isUTC && s && (m = Cb(this)), this._offset = i, this._isUTC = !0, m != null && this.add(m, "m"), h !== i && (!s || this._changeInProgress ? iT(
      this,
      Ji(i - h, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, oe.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? h : Cb(this);
}
function vU(i, s) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, s), this) : -this.utcOffset();
}
function mU(i) {
  return this.utcOffset(0, i);
}
function yU(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(Cb(this), "m")), this;
}
function gU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = Xb(jL, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function SU(i) {
  return this.isValid() ? (i = i ? rn(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function bU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function xU() {
  if (!Ua(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, s;
  return Fb(i, this), i = JC(i), i._a ? (s = i._isUTC ? Yl(i._a) : rn(i._a), this._isDSTShifted = this.isValid() && dU(i._a, s.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function wU() {
  return this.isValid() ? !this._isUTC : !1;
}
function EU() {
  return this.isValid() ? this._isUTC : !1;
}
function rT() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var _U = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, CU = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ji(i, s) {
  var f = i, h = null, m, x, S;
  return eg(i) ? f = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : Yo(i) || !isNaN(+i) ? (f = {}, s ? f[s] = +i : f.milliseconds = +i) : (h = _U.exec(i)) ? (m = h[1] === "-" ? -1 : 1, f = {
    y: 0,
    d: ct(h[Hl]) * m,
    h: ct(h[tr]) * m,
    m: ct(h[Xi]) * m,
    s: ct(h[Ho]) * m,
    ms: ct(_b(h[lc] * 1e3)) * m
    // the millisecond decimal point is included in the match
  }) : (h = CU.exec(i)) ? (m = h[1] === "-" ? -1 : 1, f = {
    y: ic(h[2], m),
    M: ic(h[3], m),
    w: ic(h[4], m),
    d: ic(h[5], m),
    h: ic(h[6], m),
    m: ic(h[7], m),
    s: ic(h[8], m)
  }) : f == null ? f = {} : typeof f == "object" && ("from" in f || "to" in f) && (S = TU(
    rn(f.from),
    rn(f.to)
  ), f = {}, f.ms = S.milliseconds, f.M = S.months), x = new bg(f), eg(i) && Tt(i, "_locale") && (x._locale = i._locale), eg(i) && Tt(i, "_isValid") && (x._isValid = i._isValid), x;
}
Ji.fn = bg.prototype;
Ji.invalid = fU;
function ic(i, s) {
  var f = i && parseFloat(i.replace(",", "."));
  return (isNaN(f) ? 0 : f) * s;
}
function Z_(i, s) {
  var f = {};
  return f.months = s.month() - i.month() + (s.year() - i.year()) * 12, i.clone().add(f.months, "M").isAfter(s) && --f.months, f.milliseconds = +s - +i.clone().add(f.months, "M"), f;
}
function TU(i, s) {
  var f;
  return i.isValid() && s.isValid() ? (s = Kb(s, i), i.isBefore(s) ? f = Z_(i, s) : (f = Z_(s, i), f.milliseconds = -f.milliseconds, f.months = -f.months), f) : { milliseconds: 0, months: 0 };
}
function aT(i, s) {
  return function(f, h) {
    var m, x;
    return h !== null && !isNaN(+h) && (LC(
      s,
      "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), x = f, f = h, h = x), m = Ji(f, h), iT(this, m, i), this;
  };
}
function iT(i, s, f, h) {
  var m = s._milliseconds, x = _b(s._days), S = _b(s._months);
  i.isValid() && (h = h ?? !0, S && VC(i, rg(i, "Month") + S * f), x && zC(i, "Date", rg(i, "Date") + x * f), m && i._d.setTime(i._d.valueOf() + m * f), h && oe.updateOffset(i, x || S));
}
var kU = aT(1, "add"), RU = aT(-1, "subtract");
function lT(i) {
  return typeof i == "string" || i instanceof String;
}
function DU(i) {
  return Zi(i) || Ih(i) || lT(i) || Yo(i) || MU(i) || OU(i) || i === null || i === void 0;
}
function OU(i) {
  var s = oc(i) && !zb(i), f = !1, h = [
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
  ], m, x, S = h.length;
  for (m = 0; m < S; m += 1)
    x = h[m], f = f || Tt(i, x);
  return s && f;
}
function MU(i) {
  var s = Ki(i), f = !1;
  return s && (f = i.filter(function(h) {
    return !Yo(h) && lT(i);
  }).length === 0), s && f;
}
function LU(i) {
  var s = oc(i) && !zb(i), f = !1, h = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], m, x;
  for (m = 0; m < h.length; m += 1)
    x = h[m], f = f || Tt(i, x);
  return s && f;
}
function NU(i, s) {
  var f = i.diff(s, "days", !0);
  return f < -6 ? "sameElse" : f < -1 ? "lastWeek" : f < 0 ? "lastDay" : f < 1 ? "sameDay" : f < 2 ? "nextDay" : f < 7 ? "nextWeek" : "sameElse";
}
function UU(i, s) {
  arguments.length === 1 && (arguments[0] ? DU(arguments[0]) ? (i = arguments[0], s = void 0) : LU(arguments[0]) && (s = arguments[0], i = void 0) : (i = void 0, s = void 0));
  var f = i || rn(), h = Kb(f, this).startOf("day"), m = oe.calendarFormat(this, h) || "sameElse", x = s && (Pl(s[m]) ? s[m].call(this, f) : s[m]);
  return this.format(
    x || this.localeData().calendar(m, this, rn(f))
  );
}
function zU() {
  return new Bh(this);
}
function AU(i, s) {
  var f = Zi(i) ? i : rn(i);
  return this.isValid() && f.isValid() ? (s = bi(s) || "millisecond", s === "millisecond" ? this.valueOf() > f.valueOf() : f.valueOf() < this.clone().startOf(s).valueOf()) : !1;
}
function FU(i, s) {
  var f = Zi(i) ? i : rn(i);
  return this.isValid() && f.isValid() ? (s = bi(s) || "millisecond", s === "millisecond" ? this.valueOf() < f.valueOf() : this.clone().endOf(s).valueOf() < f.valueOf()) : !1;
}
function HU(i, s, f, h) {
  var m = Zi(i) ? i : rn(i), x = Zi(s) ? s : rn(s);
  return this.isValid() && m.isValid() && x.isValid() ? (h = h || "()", (h[0] === "(" ? this.isAfter(m, f) : !this.isBefore(m, f)) && (h[1] === ")" ? this.isBefore(x, f) : !this.isAfter(x, f))) : !1;
}
function jU(i, s) {
  var f = Zi(i) ? i : rn(i), h;
  return this.isValid() && f.isValid() ? (s = bi(s) || "millisecond", s === "millisecond" ? this.valueOf() === f.valueOf() : (h = f.valueOf(), this.clone().startOf(s).valueOf() <= h && h <= this.clone().endOf(s).valueOf())) : !1;
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
  if (h = Kb(i, this), !h.isValid())
    return NaN;
  switch (m = (h.utcOffset() - this.utcOffset()) * 6e4, s = bi(s), s) {
    case "year":
      x = tg(this, h) / 12;
      break;
    case "month":
      x = tg(this, h);
      break;
    case "quarter":
      x = tg(this, h) / 3;
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
  return f ? x : gi(x);
}
function tg(i, s) {
  if (i.date() < s.date())
    return -tg(s, i);
  var f = (s.year() - i.year()) * 12 + (s.month() - i.month()), h = i.clone().add(f, "months"), m, x;
  return s - h < 0 ? (m = i.clone().add(f - 1, "months"), x = (s - h) / (h - m)) : (m = i.clone().add(f + 1, "months"), x = (s - h) / (m - h)), -(f + x) || 0;
}
oe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
oe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function IU() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function BU(i) {
  if (!this.isValid())
    return null;
  var s = i !== !0, f = s ? this.clone().utc() : this;
  return f.year() < 0 || f.year() > 9999 ? Jy(
    f,
    s ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Pl(Date.prototype.toISOString) ? s ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Jy(f, "Z")) : Jy(
    f,
    s ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function WU() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", s = "", f, h, m, x;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", s = "Z"), f = "[" + i + '("]', h = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", m = "-MM-DD[T]HH:mm:ss.SSS", x = s + '[")]', this.format(f + h + m + x);
}
function $U(i) {
  i || (i = this.isUtc() ? oe.defaultFormatUtc : oe.defaultFormat);
  var s = Jy(this, i);
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
function oT(i) {
  var s;
  return i === void 0 ? this._locale._abbr : (s = Vo(i), s != null && (this._locale = s), this);
}
var uT = Si(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(i) {
    return i === void 0 ? this.localeData() : this.locale(i);
  }
);
function sT() {
  return this._locale;
}
var lg = 1e3, sd = 60 * lg, og = 60 * sd, cT = (365 * 400 + 97) * 24 * og;
function cd(i, s) {
  return (i % s + s) % s;
}
function fT(i, s, f) {
  return i < 100 && i >= 0 ? new Date(i + 400, s, f) - cT : new Date(i, s, f).valueOf();
}
function dT(i, s, f) {
  return i < 100 && i >= 0 ? Date.UTC(i + 400, s, f) - cT : Date.UTC(i, s, f);
}
function KU(i) {
  var s, f;
  if (i = bi(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (f = this._isUTC ? dT : fT, i) {
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
        og
      );
      break;
    case "minute":
      s = this._d.valueOf(), s -= cd(s, sd);
      break;
    case "second":
      s = this._d.valueOf(), s -= cd(s, lg);
      break;
  }
  return this._d.setTime(s), oe.updateOffset(this, !0), this;
}
function ZU(i) {
  var s, f;
  if (i = bi(i), i === void 0 || i === "millisecond" || !this.isValid())
    return this;
  switch (f = this._isUTC ? dT : fT, i) {
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
      s = this._d.valueOf(), s += og - cd(
        s + (this._isUTC ? 0 : this.utcOffset() * sd),
        og
      ) - 1;
      break;
    case "minute":
      s = this._d.valueOf(), s += sd - cd(s, sd) - 1;
      break;
    case "second":
      s = this._d.valueOf(), s += lg - cd(s, lg) - 1;
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
  return Ab(this);
}
function lz() {
  return $u({}, at(this));
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
_e("N", Zb);
_e("NN", Zb);
_e("NNN", Zb);
_e("NNNN", Sz);
_e("NNNNN", bz);
Pt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(i, s, f, h) {
    var m = f._locale.erasParse(i, h, f._strict);
    m ? at(f).era = m : at(f).invalidEra = i;
  }
);
_e("y", dd);
_e("yy", dd);
_e("yyy", dd);
_e("yyyy", dd);
_e("yo", xz);
Pt(["y", "yy", "yyy", "yyyy"], Ir);
Pt(["yo"], function(i, s, f, h) {
  var m;
  f._locale._eraYearOrdinalRegex && (m = i.match(f._locale._eraYearOrdinalRegex)), f._locale.eraYearOrdinalParse ? s[Ir] = f._locale.eraYearOrdinalParse(i, m) : s[Ir] = parseInt(i, 10);
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
  var h, m, x = this.eras(), S, D, R;
  for (i = i.toUpperCase(), h = 0, m = x.length; h < m; ++h)
    if (S = x[h].name.toUpperCase(), D = x[h].abbr.toUpperCase(), R = x[h].narrow.toUpperCase(), f)
      switch (s) {
        case "N":
        case "NN":
        case "NNN":
          if (D === i)
            return x[h];
          break;
        case "NNNN":
          if (S === i)
            return x[h];
          break;
        case "NNNNN":
          if (R === i)
            return x[h];
          break;
      }
    else if ([S, D, R].indexOf(i) >= 0)
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
  return Tt(this, "_erasNameRegex") || Jb.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function yz(i) {
  return Tt(this, "_erasAbbrRegex") || Jb.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function gz(i) {
  return Tt(this, "_erasNarrowRegex") || Jb.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function Zb(i, s) {
  return s.erasAbbrRegex(i);
}
function Sz(i, s) {
  return s.erasNameRegex(i);
}
function bz(i, s) {
  return s.erasNarrowRegex(i);
}
function xz(i, s) {
  return s._eraYearOrdinalRegex || dd;
}
function Jb() {
  var i = [], s = [], f = [], h = [], m, x, S = this.eras();
  for (m = 0, x = S.length; m < x; ++m)
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
function xg(i, s) {
  je(0, [i, i.length], 0, s);
}
xg("gggg", "weekYear");
xg("ggggg", "weekYear");
xg("GGGG", "isoWeekYear");
xg("GGGGG", "isoWeekYear");
Br("weekYear", "gg");
Br("isoWeekYear", "GG");
Wr("weekYear", 1);
Wr("isoWeekYear", 1);
_e("G", mg);
_e("g", mg);
_e("GG", an, Za);
_e("gg", an, Za);
_e("GGGG", Vb, Pb);
_e("gggg", Vb, Pb);
_e("GGGGG", vg, pg);
_e("ggggg", vg, pg);
$h(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, s, f, h) {
    s[h.substr(0, 2)] = ct(i);
  }
);
$h(["gg", "GG"], function(i, s, f, h) {
  s[h] = oe.parseTwoDigitYear(i);
});
function wz(i) {
  return pT.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ez(i) {
  return pT.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function _z() {
  return jo(this.year(), 1, 4);
}
function Cz() {
  return jo(this.isoWeekYear(), 1, 4);
}
function Tz() {
  var i = this.localeData()._week;
  return jo(this.year(), i.dow, i.doy);
}
function kz() {
  var i = this.localeData()._week;
  return jo(this.weekYear(), i.dow, i.doy);
}
function pT(i, s, f, h, m) {
  var x;
  return i == null ? Ph(this, h, m).year : (x = jo(i, h, m), s > x && (s = x), Rz.call(this, i, s, f, h, m));
}
function Rz(i, s, f, h, m) {
  var x = $C(i, s, f, h, m), S = Yh(x.year, 0, x.dayOfYear);
  return this.year(S.getUTCFullYear()), this.month(S.getUTCMonth()), this.date(S.getUTCDate()), this;
}
je("Q", 0, "Qo", "quarter");
Br("quarter", "Q");
Wr("quarter", 7);
_e("Q", AC);
Pt("Q", function(i, s) {
  s[Fo] = (ct(i) - 1) * 3;
});
function Dz(i) {
  return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3);
}
je("D", ["DD", 2], "Do", "date");
Br("date", "D");
Wr("date", 9);
_e("D", an);
_e("DD", an, Za);
_e("Do", function(i, s) {
  return i ? s._dayOfMonthOrdinalParse || s._ordinalParse : s._dayOfMonthOrdinalParseLenient;
});
Pt(["D", "DD"], Hl);
Pt("Do", function(i, s) {
  s[Hl] = ct(i.match(an)[0]);
});
var hT = fd("Date", !0);
je("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Br("dayOfYear", "DDD");
Wr("dayOfYear", 4);
_e("DDD", hg);
_e("DDDD", FC);
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
Br("minute", "m");
Wr("minute", 14);
_e("m", an);
_e("mm", an, Za);
Pt(["m", "mm"], Xi);
var Mz = fd("Minutes", !1);
je("s", ["ss", 2], 0, "second");
Br("second", "s");
Wr("second", 15);
_e("s", an);
_e("ss", an, Za);
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
Br("millisecond", "ms");
Wr("millisecond", 16);
_e("S", hg, AC);
_e("SS", hg, Za);
_e("SSS", hg, FC);
var Gu, vT;
for (Gu = "SSSS"; Gu.length <= 9; Gu += "S")
  _e(Gu, dd);
function Nz(i, s) {
  s[lc] = ct(("0." + i) * 1e3);
}
for (Gu = "S"; Gu.length <= 9; Gu += "S")
  Pt(Gu, Nz);
vT = fd("Milliseconds", !1);
je("z", 0, 0, "zoneAbbr");
je("zz", 0, 0, "zoneName");
function Uz() {
  return this._isUTC ? "UTC" : "";
}
function zz() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var te = Bh.prototype;
te.add = kU;
te.calendar = UU;
te.clone = zU;
te.diff = VU;
te.endOf = ZU;
te.format = $U;
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
te.lang = uT;
te.locale = oT;
te.localeData = sT;
te.max = iU;
te.min = aU;
te.parsingFlags = lz;
te.set = HL;
te.startOf = KU;
te.subtract = RU;
te.toArray = nz;
te.toObject = rz;
te.toDate = tz;
te.toISOString = BU;
te.inspect = WU;
typeof Symbol < "u" && Symbol.for != null && (te[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
te.toJSON = az;
te.toString = IU;
te.unix = ez;
te.valueOf = JU;
te.creationData = uz;
te.eraName = dz;
te.eraNarrow = pz;
te.eraAbbr = hz;
te.eraYear = vz;
te.year = WC;
te.isLeapYear = rN;
te.weekYear = wz;
te.isoWeekYear = Ez;
te.quarter = te.quarters = Dz;
te.month = IC;
te.daysInMonth = eN;
te.week = te.weeks = sN;
te.isoWeek = te.isoWeeks = cN;
te.weeksInYear = Tz;
te.weeksInWeekYear = kz;
te.isoWeeksInYear = _z;
te.isoWeeksInISOWeekYear = Cz;
te.date = hT;
te.day = te.days = EN;
te.weekday = _N;
te.isoWeekday = CN;
te.dayOfYear = Oz;
te.hour = te.hours = LN;
te.minute = te.minutes = Mz;
te.second = te.seconds = Lz;
te.millisecond = te.milliseconds = vT;
te.utcOffset = hU;
te.utc = mU;
te.local = yU;
te.parseZone = gU;
te.hasAlignedHourOffset = SU;
te.isDST = bU;
te.isLocal = wU;
te.isUtcOffset = EU;
te.isUtc = rT;
te.isUTC = rT;
te.zoneAbbr = Uz;
te.zoneName = zz;
te.dates = Si(
  "dates accessor is deprecated. Use date instead.",
  hT
);
te.months = Si(
  "months accessor is deprecated. Use month instead",
  IC
);
te.years = Si(
  "years accessor is deprecated. Use year instead",
  WC
);
te.zone = Si(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  vU
);
te.isDSTShifted = Si(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  xU
);
function Az(i) {
  return rn(i * 1e3);
}
function Fz() {
  return rn.apply(null, arguments).parseZone();
}
function mT(i) {
  return i;
}
var kt = Hb.prototype;
kt.calendar = EL;
kt.longDateFormat = kL;
kt.invalidDate = DL;
kt.ordinal = LL;
kt.preparse = mT;
kt.postformat = mT;
kt.relativeTime = UL;
kt.pastFuture = zL;
kt.set = xL;
kt.eras = sz;
kt.erasParse = cz;
kt.erasConvertYear = fz;
kt.erasAbbrRegex = yz;
kt.erasNameRegex = mz;
kt.erasNarrowRegex = gz;
kt.months = XL;
kt.monthsShort = KL;
kt.monthsParse = JL;
kt.monthsRegex = nN;
kt.monthsShortRegex = tN;
kt.week = iN;
kt.firstDayOfYear = uN;
kt.firstDayOfWeek = oN;
kt.weekdays = gN;
kt.weekdaysMin = bN;
kt.weekdaysShort = SN;
kt.weekdaysParse = wN;
kt.weekdaysRegex = TN;
kt.weekdaysShortRegex = kN;
kt.weekdaysMinRegex = RN;
kt.isPM = ON;
kt.meridiem = NN;
function ug(i, s, f, h) {
  var m = Vo(), x = Yl().set(h, s);
  return m[f](x, i);
}
function yT(i, s, f) {
  if (Yo(i) && (s = i, i = void 0), i = i || "", s != null)
    return ug(i, s, f, "month");
  var h, m = [];
  for (h = 0; h < 12; h++)
    m[h] = ug(i, h, f, "month");
  return m;
}
function ex(i, s, f, h) {
  typeof i == "boolean" ? (Yo(s) && (f = s, s = void 0), s = s || "") : (s = i, f = s, i = !1, Yo(s) && (f = s, s = void 0), s = s || "");
  var m = Vo(), x = i ? m._week.dow : 0, S, D = [];
  if (f != null)
    return ug(s, (f + x) % 7, h, "day");
  for (S = 0; S < 7; S++)
    D[S] = ug(s, (S + x) % 7, h, "day");
  return D;
}
function Hz(i, s) {
  return yT(i, s, "months");
}
function jz(i, s) {
  return yT(i, s, "monthsShort");
}
function Yz(i, s, f) {
  return ex(i, s, f, "weekdays");
}
function Pz(i, s, f) {
  return ex(i, s, f, "weekdaysShort");
}
function Vz(i, s, f) {
  return ex(i, s, f, "weekdaysMin");
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
oe.lang = Si(
  "moment.lang is deprecated. Use moment.locale instead.",
  Qu
);
oe.langData = Si(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Vo
);
var zo = Math.abs;
function Iz() {
  var i = this._data;
  return this._milliseconds = zo(this._milliseconds), this._days = zo(this._days), this._months = zo(this._months), i.milliseconds = zo(i.milliseconds), i.seconds = zo(i.seconds), i.minutes = zo(i.minutes), i.hours = zo(i.hours), i.months = zo(i.months), i.years = zo(i.years), this;
}
function gT(i, s, f, h) {
  var m = Ji(s, f);
  return i._milliseconds += h * m._milliseconds, i._days += h * m._days, i._months += h * m._months, i._bubble();
}
function Bz(i, s) {
  return gT(this, i, s, 1);
}
function Wz(i, s) {
  return gT(this, i, s, -1);
}
function J_(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function $z() {
  var i = this._milliseconds, s = this._days, f = this._months, h = this._data, m, x, S, D, R;
  return i >= 0 && s >= 0 && f >= 0 || i <= 0 && s <= 0 && f <= 0 || (i += J_(Tb(f) + s) * 864e5, s = 0, f = 0), h.milliseconds = i % 1e3, m = gi(i / 1e3), h.seconds = m % 60, x = gi(m / 60), h.minutes = x % 60, S = gi(x / 60), h.hours = S % 24, s += gi(S / 24), R = gi(ST(s)), f += R, s -= J_(Tb(R)), D = gi(f / 12), f %= 12, h.days = s, h.months = f, h.years = D, this;
}
function ST(i) {
  return i * 4800 / 146097;
}
function Tb(i) {
  return i * 146097 / 4800;
}
function Gz(i) {
  if (!this.isValid())
    return NaN;
  var s, f, h = this._milliseconds;
  if (i = bi(i), i === "month" || i === "quarter" || i === "year")
    switch (s = this._days + h / 864e5, f = this._months + ST(s), i) {
      case "month":
        return f;
      case "quarter":
        return f / 3;
      case "year":
        return f / 12;
    }
  else
    switch (s = this._days + Math.round(Tb(this._months)), i) {
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
function Io(i) {
  return function() {
    return this.as(i);
  };
}
var qz = Io("ms"), Xz = Io("s"), Kz = Io("m"), Zz = Io("h"), Jz = Io("d"), eA = Io("w"), tA = Io("M"), nA = Io("Q"), rA = Io("y");
function aA() {
  return Ji(this);
}
function iA(i) {
  return i = bi(i), this.isValid() ? this[i + "s"]() : NaN;
}
function sc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var lA = sc("milliseconds"), oA = sc("seconds"), uA = sc("minutes"), sA = sc("hours"), cA = sc("days"), fA = sc("months"), dA = sc("years");
function pA() {
  return gi(this.days() / 7);
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
  var m = Ji(i).abs(), x = Ao(m.as("s")), S = Ao(m.as("m")), D = Ao(m.as("h")), R = Ao(m.as("d")), M = Ao(m.as("M")), P = Ao(m.as("w")), U = Ao(m.as("y")), I = x <= f.ss && ["s", x] || x < f.s && ["ss", x] || S <= 1 && ["m"] || S < f.m && ["mm", S] || D <= 1 && ["h"] || D < f.h && ["hh", D] || R <= 1 && ["d"] || R < f.d && ["dd", R];
  return f.w != null && (I = I || P <= 1 && ["w"] || P < f.w && ["ww", P]), I = I || M <= 1 && ["M"] || M < f.M && ["MM", M] || U <= 1 && ["y"] || ["yy", U], I[2] = s, I[3] = +i > 0, I[4] = h, hA.apply(null, I);
}
function mA(i) {
  return i === void 0 ? Ao : typeof i == "function" ? (Ao = i, !0) : !1;
}
function yA(i, s) {
  return od[i] === void 0 ? !1 : s === void 0 ? od[i] : (od[i] = s, i === "s" && (od.ss = s - 1), !0);
}
function gA(i, s) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var f = !1, h = od, m, x;
  return typeof i == "object" && (s = i, i = !1), typeof i == "boolean" && (f = i), typeof s == "object" && (h = Object.assign({}, od, s), s.s != null && s.ss == null && (h.ss = s.s - 1)), m = this.localeData(), x = vA(this, !f, h, m), f && (x = m.pastFuture(+this, x)), m.postformat(x);
}
var ib = Math.abs;
function id(i) {
  return (i > 0) - (i < 0) || +i;
}
function wg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = ib(this._milliseconds) / 1e3, s = ib(this._days), f = ib(this._months), h, m, x, S, D = this.asSeconds(), R, M, P, U;
  return D ? (h = gi(i / 60), m = gi(h / 60), i %= 60, h %= 60, x = gi(f / 12), f %= 12, S = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", R = D < 0 ? "-" : "", M = id(this._months) !== id(D) ? "-" : "", P = id(this._days) !== id(D) ? "-" : "", U = id(this._milliseconds) !== id(D) ? "-" : "", R + "P" + (x ? M + x + "Y" : "") + (f ? M + f + "M" : "") + (s ? P + s + "D" : "") + (m || h || i ? "T" : "") + (m ? U + m + "H" : "") + (h ? U + h + "M" : "") + (i ? U + S + "S" : "")) : "P0D";
}
var xt = bg.prototype;
xt.isValid = cU;
xt.abs = Iz;
xt.add = Bz;
xt.subtract = Wz;
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
xt._bubble = $z;
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
xt.humanize = gA;
xt.toISOString = wg;
xt.toString = wg;
xt.toJSON = wg;
xt.locale = oT;
xt.localeData = sT;
xt.toIsoString = Si(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  wg
);
xt.lang = uT;
je("X", 0, 0, "unix");
je("x", 0, 0, "valueOf");
_e("x", mg);
_e("X", YL);
Pt("X", function(i, s, f) {
  f._d = new Date(parseFloat(i) * 1e3);
});
Pt("x", function(i, s, f) {
  f._d = new Date(ct(i));
});
//! moment.js
oe.version = "2.29.4";
SL(rn);
oe.fn = te;
oe.min = lU;
oe.max = oU;
oe.now = uU;
oe.utc = Yl;
oe.unix = Az;
oe.months = Hz;
oe.isDate = Ih;
oe.locale = Qu;
oe.invalid = fg;
oe.duration = Ji;
oe.isMoment = Zi;
oe.weekdays = Yz;
oe.parseZone = Fz;
oe.localeData = Vo;
oe.isDuration = eg;
oe.monthsShort = jz;
oe.weekdaysMin = Vz;
oe.defineLocale = $b;
oe.updateLocale = FN;
oe.locales = HN;
oe.weekdaysShort = Pz;
oe.normalizeUnits = bi;
oe.relativeTimeRounding = mA;
oe.relativeTimeThreshold = yA;
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
const SA = ({
  tooltipRef: i,
  width: s,
  maxDate: f,
  minDate: h,
  labels: m,
  spacing: x,
  iteration: S,
  rectHeight: D,
  proportion: R,
  theme: M,
  items: P,
  translation: U
}) => {
  const I = c2(null);
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
            x: x / 2 - m[S].length * 4,
            y: D / 2 + D * S + 4 + 20,
            children: m[S]
          }
        ),
        /* @__PURE__ */ Yt.jsx(
          "rect",
          {
            rx: 4,
            x,
            y: D * S + 20,
            ref: I,
            width: f.diff(h) * R,
            height: D,
            className: M == null ? void 0 : M.period
          }
        ),
        Object.values(P).map(
          (Q, ne) => Q.map((ae, se) => {
            if (Object.keys(P)[ne] === "period")
              return null;
            const Me = ae.start.diff(h) * R, ie = ae.finish.diff(ae.start), ee = ie * R, ye = Object.keys(P)[ne];
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
                  <span>${U(ye)}</span>
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
                      y: D * S + 20,
                      fill: "currentColor"
                    }
                  ),
                  le < ee / 2 && /* @__PURE__ */ Yt.jsx(
                    "text",
                    {
                      x: Me + ee / 2 - le + x,
                      y: D * S + D / 2 + 26,
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
  theme: S
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
  const U = P.diff(M), I = s / U, Q = oe.duration(U, "milliseconds").hours(), ne = s / Q / 4;
  return /* @__PURE__ */ Yt.jsxs(Yt.Fragment, { children: [
    i.map((ae, se) => /* @__PURE__ */ Yt.jsx(s2, { children: /* @__PURE__ */ Yt.jsx(
      SA,
      {
        width: s + D,
        labels: h,
        items: ae,
        maxDate: P,
        minDate: M,
        spacing: D,
        iteration: se,
        proportion: I,
        rectHeight: R,
        translation: x,
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
var La = {}, qy = { exports: {} }, lb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eC;
function bA() {
  return eC || (eC = 1, function(i) {
    function s(ue, Ae) {
      var be = ue.length;
      ue.push(Ae);
      e:
        for (; 0 < be; ) {
          var yt = be - 1 >>> 1, wt = ue[yt];
          if (0 < m(wt, Ae))
            ue[yt] = Ae, ue[be] = wt, be = yt;
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
      var Ae = ue[0], be = ue.pop();
      if (be !== Ae) {
        ue[0] = be;
        e:
          for (var yt = 0, wt = ue.length, Vn = wt >>> 1; yt < Vn; ) {
            var hr = 2 * (yt + 1) - 1, Ja = ue[hr], wn = hr + 1, sa = ue[wn];
            if (0 > m(Ja, be))
              wn < wt && 0 > m(sa, Ja) ? (ue[yt] = sa, ue[wn] = be, yt = wn) : (ue[yt] = Ja, ue[hr] = be, yt = hr);
            else if (wn < wt && 0 > m(sa, be))
              ue[yt] = sa, ue[wn] = be, yt = wn;
            else
              break e;
          }
      }
      return Ae;
    }
    function m(ue, Ae) {
      var be = ue.sortIndex - Ae.sortIndex;
      return be !== 0 ? be : ue.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      i.unstable_now = function() {
        return x.now();
      };
    } else {
      var S = Date, D = S.now();
      i.unstable_now = function() {
        return S.now() - D;
      };
    }
    var R = [], M = [], P = 1, U = null, I = 3, Q = !1, ne = !1, ae = !1, se = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
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
    function ye(ue) {
      if (ae = !1, ee(ue), !ne)
        if (f(R) !== null)
          ne = !0, Rt(ve);
        else {
          var Ae = f(M);
          Ae !== null && xn(ye, Ae.startTime - ue);
        }
    }
    function ve(ue, Ae) {
      ne = !1, ae && (ae = !1, Me(it), it = -1), Q = !0;
      var be = I;
      try {
        for (ee(Ae), U = f(R); U !== null && (!(U.expirationTime > Ae) || ue && !ht()); ) {
          var yt = U.callback;
          if (typeof yt == "function") {
            U.callback = null, I = U.priorityLevel;
            var wt = yt(U.expirationTime <= Ae);
            Ae = i.unstable_now(), typeof wt == "function" ? U.callback = wt : U === f(R) && h(R), ee(Ae);
          } else
            h(R);
          U = f(R);
        }
        if (U !== null)
          var Vn = !0;
        else {
          var hr = f(M);
          hr !== null && xn(ye, hr.startTime - Ae), Vn = !1;
        }
        return Vn;
      } finally {
        U = null, I = be, Q = !1;
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
    function Rt(ue) {
      he = ue, le || (le = !0, Ie());
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
      return I;
    }, i.unstable_getFirstCallbackNode = function() {
      return f(R);
    }, i.unstable_next = function(ue) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = I;
      }
      var be = I;
      I = Ae;
      try {
        return ue();
      } finally {
        I = be;
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
      var be = I;
      I = ue;
      try {
        return Ae();
      } finally {
        I = be;
      }
    }, i.unstable_scheduleCallback = function(ue, Ae, be) {
      var yt = i.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? yt + be : yt) : be = yt, ue) {
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
      return wt = be + wt, ue = { id: P++, callback: Ae, priorityLevel: ue, startTime: be, expirationTime: wt, sortIndex: -1 }, be > yt ? (ue.sortIndex = be, s(M, ue), f(R) === null && ue === f(M) && (ae ? (Me(it), it = -1) : ae = !0, xn(ye, be - yt))) : (ue.sortIndex = wt, s(R, ue), ne || Q || (ne = !0, Rt(ve))), ue;
    }, i.unstable_shouldYield = ht, i.unstable_wrapCallback = function(ue) {
      var Ae = I;
      return function() {
        var be = I;
        I = Ae;
        try {
          return ue.apply(this, arguments);
        } finally {
          I = be;
        }
      };
    };
  }(lb)), lb;
}
var ob = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tC;
function xA() {
  return tC || (tC = 1, function(i) {
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
      function S(de) {
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
      var ye = 1073741823, ve = -1, le = 250, he = 5e3, it = 1e4, tt = ye, lt = [], ht = [], Vt = 1, Ie = null, et = I, hn = !1, Rt = !1, xn = !1, ue = typeof setTimeout == "function" ? setTimeout : null, Ae = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function yt(de) {
        for (var Ne = x(ht); Ne !== null; ) {
          if (Ne.callback === null)
            S(ht);
          else if (Ne.startTime <= de)
            S(ht), Ne.sortIndex = Ne.expirationTime, m(lt, Ne);
          else
            return;
          Ne = x(ht);
        }
      }
      function wt(de) {
        if (xn = !1, yt(de), !Rt)
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
          Ie = null, et = nt, hn = !1;
        }
      }
      function hr(de, Ne) {
        var nt = Ne;
        for (yt(nt), Ie = x(lt); Ie !== null && !s && !(Ie.expirationTime > nt && (!de || za())); ) {
          var Dt = Ie.callback;
          if (typeof Dt == "function") {
            Ie.callback = null, et = Ie.priorityLevel;
            var Zt = Ie.expirationTime <= nt, Ln = Dt(Zt);
            nt = i.unstable_now(), typeof Ln == "function" ? Ie.callback = Ln : Ie === x(lt) && S(lt), yt(nt);
          } else
            S(lt);
          Ie = x(lt);
        }
        if (Ie !== null)
          return !0;
        var cn = x(ht);
        return cn !== null && vn(wt, cn.startTime - nt), !1;
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
      function wn(de) {
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
          case I:
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
      function Tr() {
      }
      function ei() {
        !Rt && !hn && (Rt = !0, Fa(Vn));
      }
      function kr() {
        return x(lt);
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
      if (typeof be == "function")
        $r = function() {
          be(Aa);
        };
      else if (typeof MessageChannel < "u") {
        var ni = new MessageChannel(), Gr = ni.port2;
        ni.port1.onmessage = Aa, $r = function() {
          Gr.postMessage(null);
        };
      } else
        $r = function() {
          ue(Aa, 0);
        };
      function Fa(de) {
        In = de, rr || (rr = !0, $r());
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
      i.unstable_IdlePriority = ne, i.unstable_ImmediatePriority = P, i.unstable_LowPriority = Q, i.unstable_NormalPriority = I, i.unstable_Profiling = Ha, i.unstable_UserBlockingPriority = U, i.unstable_cancelCallback = ca, i.unstable_continueExecution = ei, i.unstable_forceFrameRate = ti, i.unstable_getCurrentPriorityLevel = Mn, i.unstable_getFirstCallbackNode = kr, i.unstable_next = wn, i.unstable_pauseExecution = Tr, i.unstable_requestPaint = el, i.unstable_runWithPriority = Ja, i.unstable_scheduleCallback = nr, i.unstable_shouldYield = za, i.unstable_wrapCallback = sa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ob)), ob;
}
var nC;
function bT() {
  return nC || (nC = 1, process.env.NODE_ENV === "production" ? qy.exports = bA() : qy.exports = xA()), qy.exports;
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
var rC;
function wA() {
  if (rC)
    return La;
  rC = 1;
  var i = Po, s = bT();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), m = {};
  function x(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++)
      h.add(r[n]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, U = {};
  function I(n) {
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
  function ae(n, r, o, c, p, y, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = w;
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
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ne(r, o, p, c) && (o = null), c || p === null ? I(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, c = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var ye = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = Symbol.for("react.element"), le = Symbol.for("react.portal"), he = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), ht = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), xn = Symbol.for("react.offscreen"), ue = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = ue && n[ue] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var be = Object.assign, yt;
  function wt(n) {
    if (yt === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
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
`), y = c.stack.split(`
`), w = p.length - 1, C = y.length - 1; 1 <= w && 0 <= C && p[w] !== y[C]; )
          C--;
        for (; 1 <= w && 0 <= C; w--, C--)
          if (p[w] !== y[C]) {
            if (w !== 1 || C !== 1)
              do
                if (w--, C--, 0 > C || p[w] !== y[C]) {
                  var k = `
` + p[w].replace(" at new ", " at ");
                  return n.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", n.displayName)), k;
                }
              while (1 <= w && 0 <= C);
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
  function Tr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ei(n) {
    var r = Tr(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, y = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(w) {
        c = "" + w, y.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(w) {
        c = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function kr(n) {
    n._valueTracker || (n._valueTracker = ei(n));
  }
  function ca(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), c = "";
    return n && (c = Tr(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (r.setValue(n), !0) : !1;
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
    return be({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function In(n, r) {
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
    return be({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function $r(n, r) {
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
  var Zt = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function Bo(n) {
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
  function Wo() {
    if (Ut) {
      var n = Ut, r = jt;
      if (jt = Ut = null, Bo(n), r)
        for (n = 0; n < r.length; n++)
          Bo(r[n]);
    }
  }
  function Xu(n, r) {
    return n(r);
  }
  function cc() {
  }
  var Il = !1;
  function $o(n, r, o) {
    if (Il)
      return n(r, o);
    Il = !0;
    try {
      return Xu(n, r, o);
    } finally {
      Il = !1, (Ut !== null || jt !== null) && (cc(), Wo());
    }
  }
  function Bl(n, r) {
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
  function tl(n, r, o, c, p, y, w, C, k) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, V);
    } catch (X) {
      this.onError(X);
    }
  }
  var Xr = !1, ja = null, nl = !1, T = null, K = { onError: function(n) {
    Xr = !0, ja = n;
  } };
  function pe(n, r, o, c, p, y, w, C, k) {
    Xr = !1, ja = null, tl.apply(K, arguments);
  }
  function Fe(n, r, o, c, p, y, w, C, k) {
    if (pe.apply(this, arguments), Xr) {
      if (Xr) {
        var V = ja;
        Xr = !1, ja = null;
      } else
        throw Error(f(198));
      nl || (nl = !0, T = V);
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
      var y = p.alternate;
      if (y === null) {
        if (c = p.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (p.child === y.child) {
        for (y = p.child; y; ) {
          if (y === o)
            return Je(p), n;
          if (y === c)
            return Je(p), r;
          y = y.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== c.return)
        o = p, c = y;
      else {
        for (var w = !1, C = p.child; C; ) {
          if (C === o) {
            w = !0, o = p, c = y;
            break;
          }
          if (C === c) {
            w = !0, c = p, o = y;
            break;
          }
          C = C.sibling;
        }
        if (!w) {
          for (C = y.child; C; ) {
            if (C === o) {
              w = !0, o = y, c = p;
              break;
            }
            if (C === c) {
              w = !0, c = y, o = p;
              break;
            }
            C = C.sibling;
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
  var qt = s.unstable_scheduleCallback, vr = s.unstable_cancelCallback, rl = s.unstable_shouldYield, fc = s.unstable_requestPaint, gt = s.unstable_now, Eg = s.unstable_getCurrentPriorityLevel, wi = s.unstable_ImmediatePriority, ot = s.unstable_UserBlockingPriority, al = s.unstable_NormalPriority, Gh = s.unstable_LowPriority, pd = s.unstable_IdlePriority, Ku = null, Ya = null;
  function Qh(n) {
    if (Ya && typeof Ya.onCommitFiberRoot == "function")
      try {
        Ya.onCommitFiberRoot(Ku, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var da = Math.clz32 ? Math.clz32 : _g, qh = Math.log, Xh = Math.LN2;
  function _g(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (qh(n) / Xh | 0) | 0;
  }
  var dc = 64, Qo = 4194304;
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
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var c = 0, p = n.suspendedLanes, y = n.pingedLanes, w = o & 268435455;
    if (w !== 0) {
      var C = w & ~p;
      C !== 0 ? c = Wl(C) : (y &= w, y !== 0 && (c = Wl(y)));
    } else
      w = o & ~p, w !== 0 ? c = Wl(w) : y !== 0 && (c = Wl(y));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, y = r & -r, p >= y || p === 16 && (y & 4194240) !== 0))
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
    for (var o = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var w = 31 - da(y), C = 1 << w, k = p[w];
      k === -1 ? (!(C & o) || C & c) && (p[w] = hd(C, r)) : k <= r && (n.expiredLanes |= C), y &= ~C;
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
  function $l(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - da(r), n[r] = o;
  }
  function Cg(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - da(o), y = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, o &= ~y;
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
  function yd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Kh, vc, zt, Zh, gd, qe = !1, Ju = [], mn = null, pa = null, ha = null, es = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map(), Mt = [], Tg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        En.delete(r.pointerId);
    }
  }
  function lr(n, r, o, c, p, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: y, targetContainers: [p] }, r !== null && (r = gs(r), r !== null && vc(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
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
        var y = p.pointerId;
        return es.set(y, lr(es.get(y) || null, n, r, o, c, p)), !0;
      case "gotpointercapture":
        return y = p.pointerId, En.set(y, lr(En.get(y) || null, n, r, o, c, p)), !0;
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
            n.blockedOn = r, gd(n.priority, function() {
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
      var o = gc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var c = new o.constructor(o.type, o);
        Rr = c, o.target.dispatchEvent(c), Rr = null;
      } else
        return r = gs(o), r !== null && vc(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Sd(n, r, o) {
    qo(n) && o.delete(r);
  }
  function ev() {
    qe = !1, mn !== null && qo(mn) && (mn = null), pa !== null && qo(pa) && (pa = null), ha !== null && qo(ha) && (ha = null), es.forEach(Sd), En.forEach(Sd);
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
    for (mn !== null && ts(mn, n), pa !== null && ts(pa, n), ha !== null && ts(ha, n), es.forEach(r), En.forEach(r), o = 0; o < Mt.length; o++)
      c = Mt[o], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Mt.length && (o = Mt[0], o.blockedOn === null); )
      Jh(o), o.blockedOn === null && Mt.shift();
  }
  var Xo = ye.ReactCurrentBatchConfig, Gl = !0;
  function tv(n, r, o, c) {
    var p = Ot, y = Xo.transition;
    Xo.transition = null;
    try {
      Ot = 1, yc(n, r, o, c);
    } finally {
      Ot = p, Xo.transition = y;
    }
  }
  function mc(n, r, o, c) {
    var p = Ot, y = Xo.transition;
    Xo.transition = null;
    try {
      Ot = 4, yc(n, r, o, c);
    } finally {
      Ot = p, Xo.transition = y;
    }
  }
  function yc(n, r, o, c) {
    if (Gl) {
      var p = gc(n, r, o, c);
      if (p === null)
        Oc(n, r, c, rs, o), Va(n, c);
      else if (il(p, n, r, o, c))
        c.stopPropagation();
      else if (Va(n, c), r & 4 && -1 < Tg.indexOf(n)) {
        for (; p !== null; ) {
          var y = gs(p);
          if (y !== null && Kh(y), y = gc(n, r, o, c), y === null && Oc(n, r, c, rs, o), y === p)
            break;
          p = y;
        }
        p !== null && c.stopPropagation();
      } else
        Oc(n, r, c, null, o);
    }
  }
  var rs = null;
  function gc(n, r, o, c) {
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
        switch (Eg()) {
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
  var Ei = null, as = null, is = null;
  function xd() {
    if (is)
      return is;
    var n, r = as, o = r.length, c, p = "value" in Ei ? Ei.value : Ei.textContent, y = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var w = o - n;
    for (c = 1; c <= w && r[o - c] === p[y - c]; c++)
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
    function r(o, c, p, y, w) {
      this._reactName = o, this._targetInst = p, this.type = c, this.nativeEvent = y, this.target = w, this.currentTarget = null;
      for (var C in n)
        n.hasOwnProperty(C) && (o = n[C], this[C] = o ? o(y) : y[C]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? ls : nv, this.isPropagationStopped = nv, this;
    }
    return be(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Sc = Kr(ll), Zo = be({}, ll, { view: 0, detail: 0 }), rv = Kr(Zo), bc, wd, os, Un = be({}, Zo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Td, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== os && (os && n.type === "mousemove" ? (bc = n.screenX - os.screenX, wd = n.screenY - os.screenY) : wd = bc = 0, os = n), bc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : wd;
  } }), xc = Kr(Un), av = be({}, Un, { dataTransfer: 0 }), iv = Kr(av), kg = be({}, Zo, { relatedTarget: 0 }), ol = Kr(kg), Ed = be({}, ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lv = Kr(Ed), Rg = be({}, ll, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dg = Kr(Rg), Og = be({}, ll, { data: 0 }), _d = Kr(Og), Cd = {
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
  function Td() {
    return sv;
  }
  var _i = be({}, Zo, { key: function(n) {
    if (n.key) {
      var r = Cd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ko(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? ov[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Td, charCode: function(n) {
    return n.type === "keypress" ? Ko(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ko(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Mg = Kr(_i), kd = be({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wc = Kr(kd), Rd = be({}, Zo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Td }), Lg = Kr(Rd), Ec = be({}, ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cv = Kr(Ec), Dr = be({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ci = Kr(Dr), yn = [9, 13, 27, 32], Ia = D && "CompositionEvent" in window, Ql = null;
  D && "documentMode" in document && (Ql = document.documentMode);
  var _c = D && "TextEvent" in window && !Ql, fv = D && (!Ia || Ql && 8 < Ql && 11 >= Ql), Jo = String.fromCharCode(32), dv = !1;
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
  function Cc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var eu = !1;
  function Ng(n, r) {
    switch (n) {
      case "compositionend":
        return Cc(r);
      case "keypress":
        return r.which !== 32 ? null : (dv = !0, Jo);
      case "textInput":
        return n = r.data, n === Jo && dv ? null : n;
      default:
        return null;
    }
  }
  function Ug(n, r) {
    if (eu)
      return n === "compositionend" || !Ia && pv(n, r) ? (n = xd(), is = as = Ei = null, eu = !1, n) : null;
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
    Vl(c), r = vs(r, "onChange"), 0 < r.length && (o = new Sc("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
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
  function yv(n, r) {
    if (n === "change")
      return r;
  }
  var Dd = !1;
  if (D) {
    var Od;
    if (D) {
      var Md = "oninput" in document;
      if (!Md) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), Md = typeof gv.oninput == "function";
      }
      Od = Md;
    } else
      Od = !1;
    Dd = Od && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    us && (us.detachEvent("onpropertychange", bv), tu = us = null);
  }
  function bv(n) {
    if (n.propertyName === "value" && ru(tu)) {
      var r = [];
      mv(r, tu, n, Ht(n)), $o(nu, r);
    }
  }
  function zg(n, r, o) {
    n === "focusin" ? (Sv(), us = r, tu = o, us.attachEvent("onpropertychange", bv)) : n === "focusout" && Sv();
  }
  function Ag(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ru(tu);
  }
  function Fg(n, r) {
    if (n === "click")
      return ru(r);
  }
  function xv(n, r) {
    if (n === "input" || n === "change")
      return ru(r);
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
  function Ev(n, r) {
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
  function _v(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? _v(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Tc() {
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
  function Ti(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function kc(n) {
    var r = Tc(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && _v(o.ownerDocument.documentElement, o)) {
      if (c !== null && Ti(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, y = Math.min(c.start, p);
          c = c.end === void 0 ? y : Math.min(c.end, p), !n.extend && y > c && (p = c, c = y, y = p), p = Ev(o, y);
          var w = Ev(
            o,
            c
          );
          p && w && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), y > c ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Cv = D && "documentMode" in document && 11 >= document.documentMode, Ba = null, Ld = null, cs = null, Nd = !1;
  function Tv(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Nd || Ba == null || Ba !== Mn(c) || (c = Ba, "selectionStart" in c && Ti(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), cs && ss(cs, c) || (cs = c, c = vs(Ld, "onSelect"), 0 < c.length && (r = new Sc("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = Ba)));
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
  var Ad = zn("animationend"), kv = zn("animationiteration"), Rv = zn("animationstart"), Dv = zn("transitionend"), Ov = /* @__PURE__ */ new Map(), Mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ki(n, r) {
    Ov.set(n, r), x(r, [n]);
  }
  for (var fs = 0; fs < Mv.length; fs++) {
    var Xl = Mv[fs], jg = Xl.toLowerCase(), ds = Xl[0].toUpperCase() + Xl.slice(1);
    ki(jg, "on" + ds);
  }
  ki(Ad, "onAnimationEnd"), ki(kv, "onAnimationIteration"), ki(Rv, "onAnimationStart"), ki("dblclick", "onDoubleClick"), ki("focusin", "onFocus"), ki("focusout", "onBlur"), ki(Dv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
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
        var y = void 0;
        if (r)
          for (var w = c.length - 1; 0 <= w; w--) {
            var C = c[w], k = C.instance, V = C.currentTarget;
            if (C = C.listener, k !== y && p.isPropagationStopped())
              break e;
            Lv(p, C, V), y = k;
          }
        else
          for (w = 0; w < c.length; w++) {
            if (C = c[w], k = C.instance, V = C.currentTarget, C = C.listener, k !== y && p.isPropagationStopped())
              break e;
            Lv(p, C, V), y = k;
          }
      }
    }
    if (nl)
      throw n = T, nl = !1, T = null, n;
  }
  function At(n, r) {
    var o = r[Id];
    o === void 0 && (o = r[Id] = /* @__PURE__ */ new Set());
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
        o !== "selectionchange" && (Yg.has(o) || ul(o, !1, n), ul(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ri] || (r[Ri] = !0, ul("selectionchange", !1, r));
    }
  }
  function Nv(n, r, o, c) {
    switch (bd(r)) {
      case 1:
        var p = tv;
        break;
      case 4:
        p = mc;
        break;
      default:
        p = yc;
    }
    o = p.bind(null, r, o, n), p = void 0, !Go || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function Oc(n, r, o, c, p) {
    var y = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var w = c.tag;
          if (w === 3 || w === 4) {
            var C = c.stateNode.containerInfo;
            if (C === p || C.nodeType === 8 && C.parentNode === p)
              break;
            if (w === 4)
              for (w = c.return; w !== null; ) {
                var k = w.tag;
                if ((k === 3 || k === 4) && (k = w.stateNode.containerInfo, k === p || k.nodeType === 8 && k.parentNode === p))
                  return;
                w = w.return;
              }
            for (; C !== null; ) {
              if (w = ma(C), w === null)
                return;
              if (k = w.tag, k === 5 || k === 6) {
                c = y = w;
                continue e;
              }
              C = C.parentNode;
            }
          }
          c = c.return;
        }
    $o(function() {
      var V = y, X = Ht(o), Z = [];
      e: {
        var q = Ov.get(n);
        if (q !== void 0) {
          var ge = Sc, Ce = n;
          switch (n) {
            case "keypress":
              if (Ko(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              ge = Mg;
              break;
            case "focusin":
              Ce = "focus", ge = ol;
              break;
            case "focusout":
              Ce = "blur", ge = ol;
              break;
            case "beforeblur":
            case "afterblur":
              ge = ol;
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
              ge = iv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = Lg;
              break;
            case Ad:
            case kv:
            case Rv:
              ge = lv;
              break;
            case Dv:
              ge = cv;
              break;
            case "scroll":
              ge = rv;
              break;
            case "wheel":
              ge = Ci;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = Dg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = wc;
          }
          var Re = (r & 4) !== 0, dn = !Re && n === "scroll", z = Re ? q !== null ? q + "Capture" : null : q;
          Re = [];
          for (var L = V, H; L !== null; ) {
            H = L;
            var re = H.stateNode;
            if (H.tag === 5 && re !== null && (H = re, z !== null && (re = Bl(L, z), re != null && Re.push(hs(L, re, H)))), dn)
              break;
            L = L.return;
          }
          0 < Re.length && (q = new ge(q, Ce, null, o, X), Z.push({ event: q, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", q && o !== Rr && (Ce = o.relatedTarget || o.fromElement) && (ma(Ce) || Ce[Di]))
            break e;
          if ((ge || q) && (q = X.window === X ? X : (q = X.ownerDocument) ? q.defaultView || q.parentWindow : window, ge ? (Ce = o.relatedTarget || o.toElement, ge = V, Ce = Ce ? ma(Ce) : null, Ce !== null && (dn = Ze(Ce), Ce !== dn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (ge = null, Ce = V), ge !== Ce)) {
            if (Re = xc, re = "onMouseLeave", z = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Re = wc, re = "onPointerLeave", z = "onPointerEnter", L = "pointer"), dn = ge == null ? q : iu(ge), H = Ce == null ? q : iu(Ce), q = new Re(re, L + "leave", ge, o, X), q.target = dn, q.relatedTarget = H, re = null, ma(X) === V && (Re = new Re(z, L + "enter", Ce, o, X), Re.target = H, Re.relatedTarget = dn, re = Re), dn = re, ge && Ce)
              t: {
                for (Re = ge, z = Ce, L = 0, H = Re; H; H = Kl(H))
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
            ge !== null && Fd(Z, q, ge, Re, !1), Ce !== null && dn !== null && Fd(Z, dn, Ce, Re, !0);
          }
        }
        e: {
          if (q = V ? iu(V) : window, ge = q.nodeName && q.nodeName.toLowerCase(), ge === "select" || ge === "input" && q.type === "file")
            var De = yv;
          else if (vv(q))
            if (Dd)
              De = xv;
            else {
              De = Ag;
              var Te = zg;
            }
          else
            (ge = q.nodeName) && ge.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (De = Fg);
          if (De && (De = De(n, V))) {
            mv(Z, De, o, X);
            break e;
          }
          Te && Te(n, q, V), n === "focusout" && (Te = q._wrapperState) && Te.controlled && q.type === "number" && za(q, "number", q.value);
        }
        switch (Te = V ? iu(V) : window, n) {
          case "focusin":
            (vv(Te) || Te.contentEditable === "true") && (Ba = Te, Ld = V, cs = null);
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
            Nd = !1, Tv(Z, o, X);
            break;
          case "selectionchange":
            if (Cv)
              break;
          case "keydown":
          case "keyup":
            Tv(Z, o, X);
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
          eu ? pv(n, o) && ($e = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && ($e = "onCompositionStart");
        $e && (fv && o.locale !== "ko" && (eu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && eu && (Le = xd()) : (Ei = X, as = "value" in Ei ? Ei.value : Ei.textContent, eu = !0)), Te = vs(V, $e), 0 < Te.length && ($e = new _d($e, n, null, o, X), Z.push({ event: $e, listeners: Te }), Le ? $e.data = Le : (Le = Cc(o), Le !== null && ($e.data = Le)))), (Le = _c ? Ng(n, o) : Ug(n, o)) && (V = vs(V, "onBeforeInput"), 0 < V.length && (X = new _d("onBeforeInput", "beforeinput", null, o, X), Z.push({ event: X, listeners: V }), X.data = Le));
      }
      Dc(Z, r);
    });
  }
  function hs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function vs(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var p = n, y = p.stateNode;
      p.tag === 5 && y !== null && (p = y, y = Bl(n, o), y != null && c.unshift(hs(n, y, p)), y = Bl(n, r), y != null && c.push(hs(n, y, p))), n = n.return;
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
    for (var y = r._reactName, w = []; o !== null && o !== c; ) {
      var C = o, k = C.alternate, V = C.stateNode;
      if (k !== null && k === c)
        break;
      C.tag === 5 && V !== null && (C = V, p ? (k = Bl(o, y), k != null && w.unshift(hs(o, k, C))) : p || (k = Bl(o, y), k != null && w.push(hs(o, k, C)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Hd = /\r\n?/g, Pg = /\u0000|\uFFFD/g;
  function jd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Hd, `
`).replace(Pg, "");
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
    return Pd.resolve(null).then(n).catch(Vg);
  } : Jl;
  function Vg(n) {
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
  var cl = Math.random().toString(36).slice(2), ai = "__reactFiber$" + cl, eo = "__reactProps$" + cl, Di = "__reactContainer$" + cl, Id = "__reactEvents$" + cl, Ig = "__reactListeners$" + cl, Bd = "__reactHandles$" + cl;
  function ma(n) {
    var r = n[ai];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Di] || o[ai]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = ys(n); n !== null; ) {
            if (o = n[ai])
              return o;
            n = ys(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function gs(n) {
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
  var fl = [], It = -1;
  function Xe(n) {
    return { current: n };
  }
  function Et(n) {
    0 > It || (n.current = fl[It], fl[It] = null, It--);
  }
  function _t(n, r) {
    It++, fl[It] = n.current, n.current = r;
  }
  var ii = {}, We = Xe(ii), ln = Xe(!1), Or = ii;
  function ya(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ii;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, y;
    for (y in o)
      p[y] = r[y];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ga() {
    Et(ln), Et(We);
  }
  function dl(n, r, o) {
    if (We.current !== ii)
      throw Error(f(168));
    _t(We, r), _t(ln, o);
  }
  function Ss(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return o;
    c = c.getChildContext();
    for (var p in c)
      if (!(p in r))
        throw Error(f(108, sa(n) || "Unknown", p));
    return be({}, o, c);
  }
  function Nc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ii, Or = We.current, _t(We, n), _t(ln, ln.current), !0;
  }
  function zv(n, r, o) {
    var c = n.stateNode;
    if (!c)
      throw Error(f(169));
    o ? (n = Ss(n, r, Or), c.__reactInternalMemoizedMergedChildContext = n, Et(ln), Et(We), _t(We, n)) : Et(ln), _t(ln, o);
  }
  var Zr = null, An = !1, bs = !1;
  function Wd(n) {
    Zr === null ? Zr = [n] : Zr.push(n);
  }
  function $d(n) {
    An = !0, Wd(n);
  }
  function Mr() {
    if (!bs && Zr !== null) {
      bs = !0;
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
        Ot = r, bs = !1;
      }
    }
    return null;
  }
  var pl = [], Lr = 0, to = null, lu = 0, Nr = [], or = 0, Sa = null, Bn = 1, Oi = "";
  function Jr(n, r) {
    pl[Lr++] = lu, pl[Lr++] = to, to = n, lu = r;
  }
  function Gd(n, r, o) {
    Nr[or++] = Bn, Nr[or++] = Oi, Nr[or++] = Sa, Sa = n;
    var c = Bn;
    n = Oi;
    var p = 32 - da(c) - 1;
    c &= ~(1 << p), o += 1;
    var y = 32 - da(r) + p;
    if (30 < y) {
      var w = p - p % 5;
      y = (c & (1 << w) - 1).toString(32), c >>= w, p -= w, Bn = 1 << 32 - da(r) + p | o << p | c, Oi = y + n;
    } else
      Bn = 1 << y | o << p | c, Oi = n;
  }
  function Uc(n) {
    n.return !== null && (Jr(n, 1), Gd(n, 1, 0));
  }
  function Qd(n) {
    for (; n === to; )
      to = pl[--Lr], pl[Lr] = null, lu = pl[--Lr], pl[Lr] = null;
    for (; n === Sa; )
      Sa = Nr[--or], Nr[or] = null, Oi = Nr[--or], Nr[or] = null, Bn = Nr[--or], Nr[or] = null;
  }
  var ea = null, Ur = null, Bt = !1, ba = null;
  function qd(n, r) {
    var o = Ta(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Av(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, Ur = Wa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Sa !== null ? { id: Bn, overflow: Oi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ta(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ea = n, Ur = null, !0) : !1;
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
        var o = r;
        if (!Av(n, r)) {
          if (zc(n))
            throw Error(f(418));
          r = Wa(o.nextSibling);
          var c = ea;
          r && Av(n, r) ? qd(c, o) : (n.flags = n.flags & -4097 | 2, Bt = !1, ea = n);
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
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Ur = Wa(n.nextSibling);
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
    ba === null ? ba = [n] : ba.push(n);
  }
  var Hc = ye.ReactCurrentBatchConfig;
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = be({}, r), n = n.defaultProps;
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
    Et(li), n._currentValue = r;
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
  function _n(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Li(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function yl(n, r, o) {
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
      var p = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var w = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? p = y = w : y = y.next = w, o = o.next;
        } while (o !== null);
        y === null ? p = y = r : y = y.next = r;
      } else
        p = y = r;
      o = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: y, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function gl(n, r, o, c) {
    var p = n.updateQueue;
    ml = !1;
    var y = p.firstBaseUpdate, w = p.lastBaseUpdate, C = p.shared.pending;
    if (C !== null) {
      p.shared.pending = null;
      var k = C, V = k.next;
      k.next = null, w === null ? y = V : w.next = V, w = k;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, C = X.lastBaseUpdate, C !== w && (C === null ? X.firstBaseUpdate = V : C.next = V, X.lastBaseUpdate = k));
    }
    if (y !== null) {
      var Z = p.baseState;
      w = 0, X = V = k = null, C = y;
      do {
        var q = C.lane, ge = C.eventTime;
        if ((c & q) === q) {
          X !== null && (X = X.next = {
            eventTime: ge,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var Ce = n, Re = C;
            switch (q = r, ge = o, Re.tag) {
              case 1:
                if (Ce = Re.payload, typeof Ce == "function") {
                  Z = Ce.call(ge, Z, q);
                  break e;
                }
                Z = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = Re.payload, q = typeof Ce == "function" ? Ce.call(ge, Z, q) : Ce, q == null)
                  break e;
                Z = be({}, Z, q);
                break e;
              case 2:
                ml = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, q = p.effects, q === null ? p.effects = [C] : q.push(C));
        } else
          ge = { eventTime: ge, lane: q, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, X === null ? (V = X = ge, k = Z) : X = X.next = ge, w |= q;
        if (C = C.next, C === null) {
          if (C = p.shared.pending, C === null)
            break;
          q = C, C = q.next, q.next = null, p.lastBaseUpdate = q, p.shared.pending = null;
        }
      } while (1);
      if (X === null && (k = Z), p.baseState = k, p.firstBaseUpdate = V, p.lastBaseUpdate = X, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          w |= p.lane, p = p.next;
        while (p !== r);
      } else
        y === null && (p.shared.lanes = 0);
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
    r = n.memoizedState, o = o(c, r), o = o == null ? r : be({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Pc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = fr(), p = Sn(n), y = Li(c, p);
    y.payload = r, o != null && (y.callback = o), r = yl(n, y, p), r !== null && (dr(r, n, p, c), Yc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = fr(), p = Sn(n), y = Li(c, p);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = yl(n, y, p), r !== null && (dr(r, n, p, c), Yc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = fr(), c = Sn(n), p = Li(o, c);
    p.tag = 2, r != null && (p.callback = r), r = yl(n, p, c), r !== null && (dr(r, n, c, o), Yc(r, n, c));
  } };
  function Pv(n, r, o, c, p, y, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, y, w) : r.prototype && r.prototype.isPureReactComponent ? !ss(o, c) || !ss(p, y) : !0;
  }
  function Vv(n, r, o) {
    var c = !1, p = ii, y = r.contextType;
    return typeof y == "object" && y !== null ? y = fn(y) : (p = Xt(r) ? Or : We.current, c = r.contextTypes, y = (c = c != null) ? ya(n, p) : ii), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Pc, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Iv(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && Pc.enqueueReplaceState(r, r.state, null);
  }
  function Vc(n, r, o, c) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = Yv, ep(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? p.context = fn(y) : (y = Xt(r) ? Or : We.current, p.context = ya(n, y)), p.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (np(n, r, y, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Pc.enqueueReplaceState(p, p.state, null), gl(n, o, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
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
        var p = c, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(w) {
          var C = p.refs;
          C === Yv && (C = p.refs = {}), w === null ? delete C[y] : C[y] = w;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
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
      return z = Tl(z, L), z.index = 0, z.sibling = null, z;
    }
    function y(z, L, H) {
      return z.index = H, n ? (H = z.alternate, H !== null ? (H = H.index, H < L ? (z.flags |= 2, L) : H) : (z.flags |= 2, L)) : (z.flags |= 1048576, L);
    }
    function w(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function C(z, L, H, re) {
      return L === null || L.tag !== 6 ? (L = js(H, z.mode, re), L.return = z, L) : (L = p(L, H), L.return = z, L);
    }
    function k(z, L, H, re) {
      var De = H.type;
      return De === he ? X(z, L, H.props.children, re, H.key) : L !== null && (L.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Rt && Bv(De) === L.type) ? (re = p(L, H.props), re.ref = ou(z, L, H), re.return = z, re) : (re = wf(H.type, H.key, H.props, null, z.mode, re), re.ref = ou(z, L, H), re.return = z, re);
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
        Ic(z, L);
      }
      return null;
    }
    function q(z, L, H, re) {
      var De = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return De !== null ? null : C(z, L, "" + H, re);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            return H.key === De ? k(z, L, H, re) : null;
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
        Ic(z, H);
      }
      return null;
    }
    function ge(z, L, H, re, De) {
      if (typeof re == "string" && re !== "" || typeof re == "number")
        return z = z.get(H) || null, C(L, z, "" + re, De);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case ve:
            return z = z.get(re.key === null ? H : re.key) || null, k(L, z, re, De);
          case le:
            return z = z.get(re.key === null ? H : re.key) || null, V(L, z, re, De);
          case Rt:
            var Te = re._init;
            return ge(z, L, H, Te(re._payload), De);
        }
        if (xi(re) || Ae(re))
          return z = z.get(H) || null, X(L, z, re, De, null);
        Ic(L, re);
      }
      return null;
    }
    function Ce(z, L, H, re) {
      for (var De = null, Te = null, Le = L, $e = L = 0, Yn = null; Le !== null && $e < H.length; $e++) {
        Le.index > $e ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var mt = q(z, Le, H[$e], re);
        if (mt === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && mt.alternate === null && r(z, Le), L = y(mt, L, $e), Te === null ? De = mt : Te.sibling = mt, Te = mt, Le = Yn;
      }
      if ($e === H.length)
        return o(z, Le), Bt && Jr(z, $e), De;
      if (Le === null) {
        for (; $e < H.length; $e++)
          Le = Z(z, H[$e], re), Le !== null && (L = y(Le, L, $e), Te === null ? De = Le : Te.sibling = Le, Te = Le);
        return Bt && Jr(z, $e), De;
      }
      for (Le = c(z, Le); $e < H.length; $e++)
        Yn = ge(Le, z, $e, H[$e], re), Yn !== null && (n && Yn.alternate !== null && Le.delete(Yn.key === null ? $e : Yn.key), L = y(Yn, L, $e), Te === null ? De = Yn : Te.sibling = Yn, Te = Yn);
      return n && Le.forEach(function(kl) {
        return r(z, kl);
      }), Bt && Jr(z, $e), De;
    }
    function Re(z, L, H, re) {
      var De = Ae(H);
      if (typeof De != "function")
        throw Error(f(150));
      if (H = De.call(H), H == null)
        throw Error(f(151));
      for (var Te = De = null, Le = L, $e = L = 0, Yn = null, mt = H.next(); Le !== null && !mt.done; $e++, mt = H.next()) {
        Le.index > $e ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var kl = q(z, Le, mt.value, re);
        if (kl === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && kl.alternate === null && r(z, Le), L = y(kl, L, $e), Te === null ? De = kl : Te.sibling = kl, Te = kl, Le = Yn;
      }
      if (mt.done)
        return o(
          z,
          Le
        ), Bt && Jr(z, $e), De;
      if (Le === null) {
        for (; !mt.done; $e++, mt = H.next())
          mt = Z(z, mt.value, re), mt !== null && (L = y(mt, L, $e), Te === null ? De = mt : Te.sibling = mt, Te = mt);
        return Bt && Jr(z, $e), De;
      }
      for (Le = c(z, Le); !mt.done; $e++, mt = H.next())
        mt = ge(Le, z, $e, mt.value, re), mt !== null && (n && mt.alternate !== null && Le.delete(mt.key === null ? $e : mt.key), L = y(mt, L, $e), Te === null ? De = mt : Te.sibling = mt, Te = mt);
      return n && Le.forEach(function(s0) {
        return r(z, s0);
      }), Bt && Jr(z, $e), De;
    }
    function dn(z, L, H, re) {
      if (typeof H == "object" && H !== null && H.type === he && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            e: {
              for (var De = H.key, Te = L; Te !== null; ) {
                if (Te.key === De) {
                  if (De = H.type, De === he) {
                    if (Te.tag === 7) {
                      o(z, Te.sibling), L = p(Te, H.props.children), L.return = z, z = L;
                      break e;
                    }
                  } else if (Te.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Rt && Bv(De) === Te.type) {
                    o(z, Te.sibling), L = p(Te, H.props), L.ref = ou(z, Te, H), L.return = z, z = L;
                    break e;
                  }
                  o(z, Te);
                  break;
                } else
                  r(z, Te);
                Te = Te.sibling;
              }
              H.type === he ? (L = xo(H.props.children, z.mode, re, H.key), L.return = z, z = L) : (re = wf(H.type, H.key, H.props, null, z.mode, re), re.ref = ou(z, L, H), re.return = z, z = re);
            }
            return w(z);
          case le:
            e: {
              for (Te = H.key; L !== null; ) {
                if (L.key === Te)
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
            return Te = H._init, dn(z, L, Te(H._payload), re);
        }
        if (xi(H))
          return Ce(z, L, H, re);
        if (Ae(H))
          return Re(z, L, H, re);
        Ic(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, L !== null && L.tag === 6 ? (o(z, L.sibling), L = p(L, H), L.return = z, z = L) : (o(z, L), L = js(H, z.mode, re), L.return = z, z = L), w(z)) : o(z, L);
    }
    return dn;
  }
  var uu = Wv(!0), $v = Wv(!1), xs = {}, $a = Xe(xs), ws = Xe(xs), su = Xe(xs);
  function ro(n) {
    if (n === xs)
      throw Error(f(174));
    return n;
  }
  function rp(n, r) {
    switch (_t(su, r), _t(ws, n), _t($a, xs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Et($a), _t($a, r);
  }
  function Sl() {
    Et($a), Et(ws), Et(su);
  }
  function He(n) {
    ro(su.current);
    var r = ro($a.current), o = vn(r, n.type);
    r !== o && (_t(ws, n), _t($a, o));
  }
  function rt(n) {
    ws.current === n && (Et($a), Et(ws));
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
  function Bc() {
    for (var n = 0; n < xa.length; n++)
      xa[n]._workInProgressVersionPrimary = null;
    xa.length = 0;
  }
  var Wc = ye.ReactCurrentDispatcher, ap = ye.ReactCurrentBatchConfig, ao = 0, Wt = null, $ = null, ft = null, Ve = !1, oi = !1, na = 0, io = 0;
  function $t() {
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
  function bl(n, r, o, c, p, y) {
    if (ao = y, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Wc.current = n === null || n.memoizedState === null ? Wg : $g, n = o(c, p), oi) {
      y = 0;
      do {
        if (oi = !1, na = 0, 25 <= y)
          throw Error(f(301));
        y += 1, ft = $ = null, r.updateQueue = null, Wc.current = lp, n = o(c, p);
      } while (oi);
    }
    if (Wc.current = uf, r = $ !== null && $.next !== null, ao = 0, ft = $ = Wt = null, Ve = !1, r)
      throw Error(f(300));
    return n;
  }
  function oo() {
    var n = na !== 0;
    return na = 0, n;
  }
  function wa() {
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
  function uo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Es(n) {
    var r = zr(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = $, p = c.baseQueue, y = o.pending;
    if (y !== null) {
      if (p !== null) {
        var w = p.next;
        p.next = y.next, y.next = w;
      }
      c.baseQueue = p = y, o.pending = null;
    }
    if (p !== null) {
      y = p.next, c = c.baseState;
      var C = w = null, k = null, V = y;
      do {
        var X = V.lane;
        if ((ao & X) === X)
          k !== null && (k = k.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), c = V.hasEagerState ? V.eagerState : n(c, V.action);
        else {
          var Z = {
            lane: X,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          k === null ? (C = k = Z, w = c) : k = k.next = Z, Wt.lanes |= X, Ai |= X;
        }
        V = V.next;
      } while (V !== null && V !== y);
      k === null ? w = c : k.next = C, va(c, r.memoizedState) || (gn = !0), r.memoizedState = c, r.baseState = w, r.baseQueue = k, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        y = p.lane, Wt.lanes |= y, Ai |= y, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function _s(n) {
    var r = zr(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, p = o.pending, y = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var w = p = p.next;
      do
        y = n(y, w.action), w = w.next;
      while (w !== p);
      va(y, r.memoizedState) || (gn = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
    }
    return [y, c];
  }
  function $c() {
  }
  function Gc(n, r) {
    var o = Wt, c = zr(), p = r(), y = !va(c.memoizedState, p);
    if (y && (c.memoizedState = p, gn = !0), c = c.queue, Cs(Xc.bind(null, o, c, n), [n]), c.getSnapshot !== r || y || ft !== null && ft.memoizedState.tag & 1) {
      if (o.flags |= 2048, so(9, qc.bind(null, o, c, p, r), void 0, null), tn === null)
        throw Error(f(349));
      ao & 30 || Qc(o, r, p);
    }
    return p;
  }
  function Qc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: n }, r.queue = n, n = n.dispatch = of.bind(null, Wt, n), [r.memoizedState, n];
  }
  function so(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function ef() {
    return zr().memoizedState;
  }
  function co(n, r, o, c) {
    var p = wa();
    Wt.flags |= n, p.memoizedState = so(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Ni(n, r, o, c) {
    var p = zr();
    c = c === void 0 ? null : c;
    var y = void 0;
    if ($ !== null) {
      var w = $.memoizedState;
      if (y = w.destroy, c !== null && lo(c, w.deps)) {
        p.memoizedState = so(r, o, y, c);
        return;
      }
    }
    Wt.flags |= n, p.memoizedState = so(1 | r, o, y, c);
  }
  function tf(n, r) {
    return co(8390656, 8, n, r);
  }
  function Cs(n, r) {
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
    return ao & 21 ? (va(o, r) || (o = hc(), Wt.lanes |= o, Ai |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, gn = !0), n.memoizedState = o);
  }
  function Bg(n, r) {
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
    var c = Sn(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, du(n))
      Ts(r, o);
    else if (o = jv(n, r, o, c), o !== null) {
      var p = fr();
      dr(o, n, c, p), Gv(o, r, c);
    }
  }
  function of(n, r, o) {
    var c = Sn(n), p = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (du(n))
      Ts(r, p);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var w = r.lastRenderedState, C = y(w, o);
          if (p.hasEagerState = !0, p.eagerState = C, va(C, w)) {
            var k = r.interleaved;
            k === null ? (p.next = p, Jd(r)) : (p.next = k.next, k.next = p), r.interleaved = p;
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
    return n === Wt || r !== null && r === Wt;
  }
  function Ts(n, r) {
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
  var uf = { readContext: fn, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: !1 }, Wg = { readContext: fn, useCallback: function(n, r) {
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
    return r = o !== void 0 ? o(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = lf.bind(null, Wt, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = wa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Jc, useDebugValue: af, useDeferredValue: function(n) {
    return wa().memoizedState = n;
  }, useTransition: function() {
    var n = Jc(!1), r = n[0];
    return n = Bg.bind(null, n[1]), wa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = Wt, p = wa();
    if (Bt) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), tn === null)
        throw Error(f(349));
      ao & 30 || Qc(c, r, o);
    }
    p.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return p.queue = y, tf(Xc.bind(
      null,
      c,
      y,
      n
    ), [n]), c.flags |= 2048, so(9, qc.bind(null, c, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = wa(), r = tn.identifierPrefix;
    if (Bt) {
      var o = Oi, c = Bn;
      o = (c & ~(1 << 32 - da(c) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = na++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = io++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $g = {
    readContext: fn,
    useCallback: fu,
    useContext: fn,
    useEffect: Cs,
    useImperativeHandle: cu,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: xl,
    useReducer: Es,
    useRef: ef,
    useState: function() {
      return Es(uo);
    },
    useDebugValue: af,
    useDeferredValue: function(n) {
      var r = zr();
      return Ar(r, $.memoizedState, n);
    },
    useTransition: function() {
      var n = Es(uo)[0], r = zr().memoizedState;
      return [n, r];
    },
    useMutableSource: $c,
    useSyncExternalStore: Gc,
    useId: Ft,
    unstable_isNewReconciler: !1
  }, lp = { readContext: fn, useCallback: fu, useContext: fn, useEffect: Cs, useImperativeHandle: cu, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: xl, useReducer: _s, useRef: ef, useState: function() {
    return _s(uo);
  }, useDebugValue: af, useDeferredValue: function(n) {
    var r = zr();
    return $ === null ? r.memoizedState = n : Ar(r, $.memoizedState, n);
  }, useTransition: function() {
    var n = _s(uo)[0], r = zr().memoizedState;
    return [n, r];
  }, useMutableSource: $c, useSyncExternalStore: Gc, useId: Ft, unstable_isNewReconciler: !1 };
  function pu(n, r) {
    try {
      var o = "", c = r;
      do
        o += Ja(c), c = c.return;
      while (c);
      var p = o;
    } catch (y) {
      p = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function ks(n, r, o) {
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
  var Gg = typeof WeakMap == "function" ? WeakMap : Map;
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
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      sf(n, r), typeof c != "function" && (ci === null ? ci = /* @__PURE__ */ new Set([this]) : ci.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function qv(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Gg();
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Li(-1, 1), r.tag = 2, yl(o, r, 1))), o.lanes |= 1), n);
  }
  var Qg = ye.ReactCurrentOwner, gn = !1;
  function Cn(n, r, o, c) {
    r.child = n === null ? $v(r, null, o, c) : uu(r, n.child, o, c);
  }
  function wl(n, r, o, c, p) {
    o = o.render;
    var y = r.ref;
    return ce(r, p), c = bl(n, r, o, c, y, p), o = oo(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, $n(n, r, p)) : (Bt && o && Uc(r), r.flags |= 1, Cn(n, r, c, p), r.child);
  }
  function cf(n, r, o, c, p) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !kp(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, Fr(n, r, y, c, p)) : (n = wf(o.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & p)) {
      var w = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ss, o(w, c) && n.ref === r.ref)
        return $n(n, r, p);
    }
    return r.flags |= 1, n = Tl(y, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fr(n, r, o, c, p) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ss(y, c) && n.ref === r.ref)
        if (gn = !1, r.pendingProps = c = y, (n.lanes & p) !== 0)
          n.flags & 131072 && (gn = !0);
        else
          return r.lanes = n.lanes, $n(n, r, p);
    }
    return hu(n, r, o, c, p);
  }
  function fo(n, r, o) {
    var c = r.pendingProps, p = c.children, y = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _t(bu, ra), ra |= o;
      else {
        if (!(o & 1073741824))
          return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _t(bu, ra), ra |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = y !== null ? y.baseLanes : o, _t(bu, ra), ra |= c;
      }
    else
      y !== null ? (c = y.baseLanes | o, r.memoizedState = null) : c = o, _t(bu, ra), ra |= c;
    return Cn(n, r, p, o), r.child;
  }
  function Ke(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function hu(n, r, o, c, p) {
    var y = Xt(o) ? Or : We.current;
    return y = ya(r, y), ce(r, p), o = bl(n, r, o, c, y, p), c = oo(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, $n(n, r, p)) : (Bt && c && Uc(r), r.flags |= 1, Cn(n, r, o, p), r.child);
  }
  function sp(n, r, o, c, p) {
    if (Xt(o)) {
      var y = !0;
      Nc(r);
    } else
      y = !1;
    if (ce(r, p), r.stateNode === null)
      ur(n, r), Vv(r, o, c), Vc(r, o, c, p), c = !0;
    else if (n === null) {
      var w = r.stateNode, C = r.memoizedProps;
      w.props = C;
      var k = w.context, V = o.contextType;
      typeof V == "object" && V !== null ? V = fn(V) : (V = Xt(o) ? Or : We.current, V = ya(r, V));
      var X = o.getDerivedStateFromProps, Z = typeof X == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      Z || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (C !== c || k !== V) && Iv(r, w, c, V), ml = !1;
      var q = r.memoizedState;
      w.state = q, gl(r, c, w, p), k = r.memoizedState, C !== c || q !== k || ln.current || ml ? (typeof X == "function" && (np(r, o, X, c), k = r.memoizedState), (C = ml || Pv(r, o, C, c, q, k, V)) ? (Z || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = k), w.props = c, w.state = k, w.context = V, c = C) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      w = r.stateNode, _n(n, r), C = r.memoizedProps, V = r.type === r.elementType ? C : ta(r.type, C), w.props = V, Z = r.pendingProps, q = w.context, k = o.contextType, typeof k == "object" && k !== null ? k = fn(k) : (k = Xt(o) ? Or : We.current, k = ya(r, k));
      var ge = o.getDerivedStateFromProps;
      (X = typeof ge == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (C !== Z || q !== k) && Iv(r, w, c, k), ml = !1, q = r.memoizedState, w.state = q, gl(r, c, w, p);
      var Ce = r.memoizedState;
      C !== Z || q !== Ce || ln.current || ml ? (typeof ge == "function" && (np(r, o, ge, c), Ce = r.memoizedState), (V = ml || Pv(r, o, V, c, q, Ce, k) || !1) ? (X || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(c, Ce, k), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(c, Ce, k)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || C === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = Ce), w.props = c, w.state = Ce, w.context = k, c = V) : (typeof w.componentDidUpdate != "function" || C === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Xv(n, r, o, c, y, p);
  }
  function Xv(n, r, o, c, p, y) {
    Ke(n, r);
    var w = (r.flags & 128) !== 0;
    if (!c && !w)
      return p && zv(r, o, !1), $n(n, r, y);
    c = r.stateNode, Qg.current = r;
    var C = w && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && w ? (r.child = uu(r, n.child, null, y), r.child = uu(r, null, C, y)) : Cn(n, r, C, y), r.memoizedState = c.state, p && zv(r, o, !0), r.child;
  }
  function Kv(n) {
    var r = n.stateNode;
    r.pendingContext ? dl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && dl(n, r.context, !1), rp(n, r.containerInfo);
  }
  function ff(n, r, o, c, p) {
    return Jt(), Xd(p), r.flags |= 256, Cn(n, r, o, c), r.child;
  }
  var po = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function fp(n, r, o) {
    var c = r.pendingProps, p = Pe.current, y = !1, w = (r.flags & 128) !== 0, C;
    if ((C = w) || (C = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), C ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), _t(Pe, p & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = c.children, n = c.fallback, y ? (c = r.mode, y = r.child, w = { mode: "hidden", children: w }, !(c & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = w) : y = Hs(w, c, 0, null), n = xo(n, c, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = cp(o), r.memoizedState = po, n) : dp(r, w));
    if (p = n.memoizedState, p !== null && (C = p.dehydrated, C !== null))
      return qg(n, r, w, c, C, p, o);
    if (y) {
      y = c.fallback, w = r.mode, p = n.child, C = p.sibling;
      var k = { mode: "hidden", children: c.children };
      return !(w & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = k, r.deletions = null) : (c = Tl(p, k), c.subtreeFlags = p.subtreeFlags & 14680064), C !== null ? y = Tl(C, y) : (y = xo(y, w, o, null), y.flags |= 2), y.return = r, c.return = r, c.sibling = y, r.child = c, c = y, y = r.child, w = n.child.memoizedState, w = w === null ? cp(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, y.memoizedState = w, y.childLanes = n.childLanes & ~o, r.memoizedState = po, c;
    }
    return y = n.child, n = y.sibling, c = Tl(y, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function dp(n, r) {
    return r = Hs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vu(n, r, o, c) {
    return c !== null && Xd(c), uu(r, n.child, null, o), n = dp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qg(n, r, o, c, p, y, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = ks(Error(f(422))), vu(n, r, w, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = c.fallback, p = r.mode, c = Hs({ mode: "visible", children: c.children }, p, 0, null), y = xo(y, p, w, null), y.flags |= 2, c.return = r, y.return = r, c.sibling = y, r.child = c, r.mode & 1 && uu(r, n.child, null, w), r.child.memoizedState = cp(w), r.memoizedState = po, y);
    if (!(r.mode & 1))
      return vu(n, r, w, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c)
        var C = c.dgst;
      return c = C, y = Error(f(419)), c = ks(y, c, void 0), vu(n, r, w, c);
    }
    if (C = (w & n.childLanes) !== 0, gn || C) {
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
        p = p & (c.suspendedLanes | w) ? 0 : p, p !== 0 && p !== y.retryLane && (y.retryLane = p, Mi(n, p), dr(c, n, p, -1));
      }
      return _p(), c = ks(Error(f(421))), vu(n, r, w, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = t0.bind(null, n), p._reactRetry = r, null) : (n = y.treeContext, Ur = Wa(p.nextSibling), ea = r, Bt = !0, ba = null, n !== null && (Nr[or++] = Bn, Nr[or++] = Oi, Nr[or++] = Sa, Bn = n.id, Oi = n.overflow, Sa = r), r = dp(r, c.children), r.flags |= 4096, r);
  }
  function pp(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), Fn(n.return, r, o);
  }
  function df(n, r, o, c, p) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: p } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = o, y.tailMode = p);
  }
  function hp(n, r, o) {
    var c = r.pendingProps, p = c.revealOrder, y = c.tail;
    if (Cn(n, r, c.children, o), c = Pe.current, c & 2)
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
    if (_t(Pe, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && en(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), df(r, !1, p, o, y);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && en(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          df(r, !0, o, null, y);
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
  function $n(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = Tl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Tl(n, n.pendingProps), o.return = r;
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
        _t(li, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (_t(Pe, Pe.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? fp(n, r, o) : (_t(Pe, Pe.current & 1), n = $n(n, r, o), n !== null ? n.sibling : null);
        _t(Pe, Pe.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return hp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), _t(Pe, Pe.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, fo(n, r, o);
    }
    return $n(n, r, o);
  }
  var Ds, ho, Ea, Tn;
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
  }, Ea = function(n, r, o, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, ro($a.current);
      var y = null;
      switch (o) {
        case "input":
          p = rr(n, p), c = rr(n, c), y = [];
          break;
        case "select":
          p = be({}, p, { value: void 0 }), c = be({}, c, { value: void 0 }), y = [];
          break;
        case "textarea":
          p = Aa(n, p), c = Aa(n, c), y = [];
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
            var C = p[V];
            for (w in C)
              C.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (m.hasOwnProperty(V) ? y || (y = []) : (y = y || []).push(V, null));
      for (V in c) {
        var k = c[V];
        if (C = p != null ? p[V] : void 0, c.hasOwnProperty(V) && k !== C && (k != null || C != null))
          if (V === "style")
            if (C) {
              for (w in C)
                !C.hasOwnProperty(w) || k && k.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
              for (w in k)
                k.hasOwnProperty(w) && C[w] !== k[w] && (o || (o = {}), o[w] = k[w]);
            } else
              o || (y || (y = []), y.push(
                V,
                o
              )), o = k;
          else
            V === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, C = C ? C.__html : void 0, k != null && C !== k && (y = y || []).push(V, k)) : V === "children" ? typeof k != "string" && typeof k != "number" || (y = y || []).push(V, "" + k) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (m.hasOwnProperty(V) ? (k != null && V === "onScroll" && At("scroll", n), y || C === k || (y = [])) : (y = y || []).push(V, k));
      }
      o && (y = y || []).push("style", o);
      var V = y;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, Tn = function(n, r, o, c) {
    o !== c && (r.flags |= 4);
  };
  function Os(n, r) {
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
  function Xg(n, r, o) {
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
        return c = r.stateNode, Sl(), Et(ln), Et(We), Bc(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (Fc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ba !== null && (Fs(ba), ba = null))), ho(n, r), sr(r), null;
      case 5:
        rt(r);
        var p = ro(su.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Ea(n, r, o, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(f(166));
            return sr(r), null;
          }
          if (n = ro($a.current), Fc(r)) {
            c = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (c[ai] = r, c[eo] = y, n = (r.mode & 1) !== 0, o) {
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
            Ln(o, y), p = null;
            for (var w in y)
              if (y.hasOwnProperty(w)) {
                var C = y[w];
                w === "children" ? typeof C == "string" ? c.textContent !== C && (y.suppressHydrationWarning !== !0 && Mc(c.textContent, C, n), p = ["children", C]) : typeof C == "number" && c.textContent !== "" + C && (y.suppressHydrationWarning !== !0 && Mc(
                  c.textContent,
                  C,
                  n
                ), p = ["children", "" + C]) : m.hasOwnProperty(w) && C != null && w === "onScroll" && At("scroll", c);
              }
            switch (o) {
              case "input":
                kr(c), fa(c, y, !0);
                break;
              case "textarea":
                kr(c), Gr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (c.onclick = Lc);
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
                  In(n, c), p = rr(n, c), At("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = be({}, c, { value: void 0 }), At("invalid", n);
                  break;
                case "textarea":
                  $r(n, c), p = Aa(n, c), At("invalid", n);
                  break;
                default:
                  p = c;
              }
              Ln(o, p), C = p;
              for (y in C)
                if (C.hasOwnProperty(y)) {
                  var k = C[y];
                  y === "style" ? Dt(n, k) : y === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && el(n, k)) : y === "children" ? typeof k == "string" ? (o !== "textarea" || k !== "") && Ha(n, k) : typeof k == "number" && Ha(n, "" + k) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? k != null && y === "onScroll" && At("scroll", n) : k != null && ee(n, y, k, w));
                }
              switch (o) {
                case "input":
                  kr(n), fa(n, c, !1);
                  break;
                case "textarea":
                  kr(n), Gr(n);
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
          Tn(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = ro(su.current), ro($a.current), Fc(r)) {
            if (c = r.stateNode, o = r.memoizedProps, c[ai] = r, (y = c.nodeValue !== o) && (n = ea, n !== null))
              switch (n.tag) {
                case 3:
                  Mc(c.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Mc(c.nodeValue, o, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[ai] = r, r.stateNode = c;
        }
        return sr(r), null;
      case 13:
        if (Et(Pe), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
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
            ba !== null && (Fs(ba), ba = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || Pe.current & 1 ? Rn === 0 && (Rn = 3) : _p())), r.updateQueue !== null && (r.flags |= 4), sr(r), null);
      case 4:
        return Sl(), ho(n, r), n === null && au(r.stateNode.containerInfo), sr(r), null;
      case 10:
        return vl(r.type._context), sr(r), null;
      case 17:
        return Xt(r.type) && ga(), sr(r), null;
      case 19:
        if (Et(Pe), y = r.memoizedState, y === null)
          return sr(r), null;
        if (c = (r.flags & 128) !== 0, w = y.rendering, w === null)
          if (c)
            Os(y, !1);
          else {
            if (Rn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = en(n), w !== null) {
                  for (r.flags |= 128, Os(y, !1), c = w.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; )
                    y = o, n = c, y.flags &= 14680066, w = y.alternate, w === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = w.childLanes, y.lanes = w.lanes, y.child = w.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = w.memoizedProps, y.memoizedState = w.memoizedState, y.updateQueue = w.updateQueue, y.type = w.type, n = w.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return _t(Pe, Pe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && gt() > wu && (r.flags |= 128, c = !0, Os(y, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = en(w), n !== null) {
              if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Os(y, !0), y.tail === null && y.tailMode === "hidden" && !w.alternate && !Bt)
                return sr(r), null;
            } else
              2 * gt() - y.renderingStartTime > wu && o !== 1073741824 && (r.flags |= 128, c = !0, Os(y, !1), r.lanes = 4194304);
          y.isBackwards ? (w.sibling = r.child, r.child = w) : (o = y.last, o !== null ? o.sibling = w : r.child = w, y.last = w);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = gt(), r.sibling = null, o = Pe.current, _t(Pe, c ? o & 1 | 2 : o & 1), r) : (sr(r), null);
      case 22:
      case 23:
        return Ep(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? ra & 1073741824 && (sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : sr(r), null;
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
        return Sl(), Et(ln), Et(We), Bc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rt(r), null;
      case 13:
        if (Et(Pe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          Jt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Et(Pe), null;
      case 4:
        return Sl(), null;
      case 10:
        return vl(r.type._context), null;
      case 22:
      case 23:
        return Ep(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ms = !1, kn = !1, Zv = typeof WeakSet == "function" ? WeakSet : Set, Ee = null;
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
    if (Yd = Gl, n = Tc(), Ti(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var p = c.anchorOffset, y = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType, y.nodeType;
            } catch {
              o = null;
              break e;
            }
            var w = 0, C = -1, k = -1, V = 0, X = 0, Z = n, q = null;
            t:
              for (; ; ) {
                for (var ge; Z !== o || p !== 0 && Z.nodeType !== 3 || (C = w + p), Z !== y || c !== 0 && Z.nodeType !== 3 || (k = w + c), Z.nodeType === 3 && (w += Z.nodeValue.length), (ge = Z.firstChild) !== null; )
                  q = Z, Z = ge;
                for (; ; ) {
                  if (Z === n)
                    break t;
                  if (q === o && ++V === p && (C = w), q === y && ++X === c && (k = w), (ge = Z.nextSibling) !== null)
                    break;
                  Z = q, q = Z.parentNode;
                }
                Z = ge;
              }
            o = C === -1 || k === -1 ? null : { start: C, end: k };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Zl = { focusedElem: n, selectionRange: o }, Gl = !1, Ee = r; Ee !== null; )
      if (r = Ee, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ee = n;
      else
        for (; Ee !== null; ) {
          r = Ee;
          try {
            var Ce = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ce !== null) {
                    var Re = Ce.memoizedProps, dn = Ce.memoizedState, z = r.stateNode, L = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Re : ta(r.type, Re), dn);
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
            n.return = r.return, Ee = n;
            break;
          }
          Ee = r.return;
        }
    return Ce = Jv, Jv = !1, Ce;
  }
  function Ns(n, r, o) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var y = p.destroy;
          p.destroy = void 0, y !== void 0 && Ls(r, o, y);
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
  function yp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, yp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ai], delete r[eo], delete r[Id], delete r[Ig], delete r[Bd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function yu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Lc));
    else if (c !== 4 && (n = n.child, n !== null))
      for (yu(n, r, o), n = n.sibling; n !== null; )
        yu(n, r, o), n = n.sibling;
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
  function _a(n, r, o) {
    for (o = o.child; o !== null; )
      gu(n, r, o), o = o.sibling;
  }
  function gu(n, r, o) {
    if (Ya && typeof Ya.onCommitFiberUnmount == "function")
      try {
        Ya.onCommitFiberUnmount(Ku, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        kn || mu(o, r);
      case 6:
        var c = Kt, p = Hn;
        Kt = null, _a(n, r, o), Kt = c, Hn = p, Kt !== null && (Hn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Kt.removeChild(o.stateNode));
        break;
      case 18:
        Kt !== null && (Hn ? (n = Kt, o = o.stateNode, n.nodeType === 8 ? sl(n.parentNode, o) : n.nodeType === 1 && sl(n, o), ns(n)) : sl(Kt, o.stateNode));
        break;
      case 4:
        c = Kt, p = Hn, Kt = o.stateNode.containerInfo, Hn = !0, _a(n, r, o), Kt = c, Hn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kn && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var y = p, w = y.destroy;
            y = y.tag, w !== void 0 && (y & 2 || y & 4) && Ls(o, r, w), p = p.next;
          } while (p !== c);
        }
        _a(n, r, o);
        break;
      case 1:
        if (!kn && (mu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
          } catch (C) {
            un(o, r, C);
          }
        _a(n, r, o);
        break;
      case 21:
        _a(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (kn = (c = kn) || o.memoizedState !== null, _a(n, r, o), kn = c) : _a(n, r, o);
        break;
      default:
        _a(n, r, o);
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
          var y = n, w = r, C = w;
          e:
            for (; C !== null; ) {
              switch (C.tag) {
                case 5:
                  Kt = C.stateNode, Hn = !1;
                  break e;
                case 3:
                  Kt = C.stateNode.containerInfo, Hn = !0;
                  break e;
                case 4:
                  Kt = C.stateNode.containerInfo, Hn = !0;
                  break e;
              }
              C = C.return;
            }
          if (Kt === null)
            throw Error(f(160));
          gu(y, w, p), Kt = null, Hn = !1;
          var k = p.alternate;
          k !== null && (k.return = null), p.return = null;
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
          var y = n.memoizedProps, w = o !== null ? o.memoizedProps : y, C = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null)
            try {
              C === "input" && y.type === "radio" && y.name != null && ar(p, y), cn(C, w);
              var V = cn(C, y);
              for (w = 0; w < k.length; w += 2) {
                var X = k[w], Z = k[w + 1];
                X === "style" ? Dt(p, Z) : X === "dangerouslySetInnerHTML" ? el(p, Z) : X === "children" ? Ha(p, Z) : ee(p, X, Z, V);
              }
              switch (C) {
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
              p[eo] = y;
            } catch (Re) {
              un(n, n.return, Re);
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
        Ga(r, n), si(n), p = n.child, p.flags & 8192 && (y = p.memoizedState !== null, p.stateNode.isHidden = y, !y || p.alternate !== null && p.alternate.memoizedState !== null || (bp = gt())), c & 4 && zi(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (kn = (V = kn) || X, Ga(r, n), kn = V) : Ga(r, n), si(n), c & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !X && n.mode & 1)
            for (Ee = n, X = n.child; X !== null; ) {
              for (Z = Ee = X; Ee !== null; ) {
                switch (q = Ee, ge = q.child, q.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ns(4, q, q.return);
                    break;
                  case 1:
                    mu(q, q.return);
                    var Ce = q.stateNode;
                    if (typeof Ce.componentWillUnmount == "function") {
                      c = q, o = q.return;
                      try {
                        r = c, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
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
                      gp(Z);
                      continue;
                    }
                }
                ge !== null ? (ge.return = q, Ee = ge) : gp(Z);
              }
              X = X.sibling;
            }
          e:
            for (X = null, Z = n; ; ) {
              if (Z.tag === 5) {
                if (X === null) {
                  X = Z;
                  try {
                    p = Z.stateNode, V ? (y = p.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (C = Z.stateNode, k = Z.memoizedProps.style, w = k != null && k.hasOwnProperty("display") ? k.display : null, C.style.display = nt("display", w));
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
            var y = pf(n);
            ui(n, y, p);
            break;
          case 3:
          case 4:
            var w = c.stateNode.containerInfo, C = pf(n);
            yu(n, C, w);
            break;
          default:
            throw Error(f(161));
        }
      } catch (k) {
        un(n, n.return, k);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function rm(n, r, o) {
    Ee = n, Su(n);
  }
  function Su(n, r, o) {
    for (var c = (n.mode & 1) !== 0; Ee !== null; ) {
      var p = Ee, y = p.child;
      if (p.tag === 22 && c) {
        var w = p.memoizedState !== null || Ms;
        if (!w) {
          var C = p.alternate, k = C !== null && C.memoizedState !== null || kn;
          C = Ms;
          var V = kn;
          if (Ms = w, (kn = k) && !V)
            for (Ee = p; Ee !== null; )
              w = Ee, k = w.child, w.tag === 22 && w.memoizedState !== null ? im(p) : k !== null ? (k.return = w, Ee = k) : im(p);
          for (; y !== null; )
            Ee = y, Su(y), y = y.sibling;
          Ee = p, Ms = C, kn = V;
        }
        am(n);
      } else
        p.subtreeFlags & 8772 && y !== null ? (y.return = p, Ee = y) : am(n);
    }
  }
  function am(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                kn || Us(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !kn)
                  if (o === null)
                    c.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : ta(r.type, o.memoizedProps);
                    c.componentDidUpdate(p, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && no(r, y, c);
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
                var C = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = C;
                  var k = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && o.focus();
                      break;
                    case "img":
                      k.src && (o.src = k.src);
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
          kn || r.flags & 512 && mp(r);
        } catch (q) {
          un(r, r.return, q);
        }
      }
      if (r === n) {
        Ee = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ee = o;
        break;
      }
      Ee = r.return;
    }
  }
  function gp(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r === n) {
        Ee = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ee = o;
        break;
      }
      Ee = r.return;
    }
  }
  function im(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Us(4, r);
            } catch (k) {
              un(r, o, k);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (k) {
                un(r, p, k);
              }
            }
            var y = r.return;
            try {
              mp(r);
            } catch (k) {
              un(r, y, k);
            }
            break;
          case 5:
            var w = r.return;
            try {
              mp(r);
            } catch (k) {
              un(r, w, k);
            }
        }
      } catch (k) {
        un(r, r.return, k);
      }
      if (r === n) {
        Ee = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        C.return = r.return, Ee = C;
        break;
      }
      Ee = r.return;
    }
  }
  var hf = Math.ceil, zs = ye.ReactCurrentDispatcher, Sp = ye.ReactCurrentOwner, cr = ye.ReactCurrentBatchConfig, ut = 0, tn = null, on = null, jn = 0, ra = 0, bu = Xe(0), Rn = 0, As = null, Ai = 0, vf = 0, xu = 0, vo = null, mr = null, bp = 0, wu = 1 / 0, Fi = null, mf = !1, mo = null, ci = null, El = !1, _l = null, yf = 0, Eu = 0, gf = null, yo = -1, go = 0;
  function fr() {
    return ut & 6 ? gt() : yo !== -1 ? yo : yo = gt();
  }
  function Sn(n) {
    return n.mode & 1 ? ut & 2 && jn !== 0 ? jn & -jn : Hc.transition !== null ? (go === 0 && (go = hc()), go) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : bd(n.type)), n) : 1;
  }
  function dr(n, r, o, c) {
    if (50 < Eu)
      throw Eu = 0, gf = null, Error(f(185));
    $l(n, o, c), (!(ut & 2) || n !== tn) && (n === tn && (!(ut & 2) && (vf |= o), Rn === 4 && Ca(n, jn)), pr(n, c), o === 1 && ut === 0 && !(r.mode & 1) && (wu = gt() + 500, An && Mr()));
  }
  function pr(n, r) {
    var o = n.callbackNode;
    pc(n, r);
    var c = Pa(n, n === tn ? jn : 0);
    if (c === 0)
      o !== null && vr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && vr(o), r === 1)
        n.tag === 0 ? $d(lm.bind(null, n)) : Wd(lm.bind(null, n)), Vd(function() {
          !(ut & 6) && Mr();
        }), o = null;
      else {
        switch (yd(c)) {
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
        o = Tp(o, _u.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function _u(n, r) {
    if (yo = -1, go = 0, ut & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (Tu() && n.callbackNode !== o)
      return null;
    var c = Pa(n, n === tn ? jn : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = bf(n, c);
    else {
      r = c;
      var p = ut;
      ut |= 2;
      var y = Sf();
      (tn !== n || jn !== r) && (Fi = null, wu = gt() + 500, So(n, r));
      do
        try {
          Zg();
          break;
        } catch (C) {
          om(n, C);
        }
      while (1);
      Zd(), zs.current = y, ut = p, on !== null ? r = 0 : (tn = null, jn = 0, r = Rn);
    }
    if (r !== 0) {
      if (r === 2 && (p = vd(n), p !== 0 && (c = p, r = xp(n, p))), r === 1)
        throw o = As, So(n, 0), Ca(n, c), pr(n, gt()), o;
      if (r === 6)
        Ca(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !wp(p) && (r = bf(n, c), r === 2 && (y = vd(n), y !== 0 && (c = y, r = xp(n, y))), r === 1))
          throw o = As, So(n, 0), Ca(n, c), pr(n, gt()), o;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            bo(n, mr, Fi);
            break;
          case 3:
            if (Ca(n, c), (c & 130023424) === c && (r = bp + 500 - gt(), 10 < r)) {
              if (Pa(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                fr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Jl(bo.bind(null, n, mr, Fi), r);
              break;
            }
            bo(n, mr, Fi);
            break;
          case 4:
            if (Ca(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var w = 31 - da(c);
              y = 1 << w, w = r[w], w > p && (p = w), c &= ~y;
            }
            if (c = p, c = gt() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * hf(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Jl(bo.bind(null, n, mr, Fi), c);
              break;
            }
            bo(n, mr, Fi);
            break;
          case 5:
            bo(n, mr, Fi);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return pr(n, gt()), n.callbackNode === o ? _u.bind(null, n) : null;
  }
  function xp(n, r) {
    var o = vo;
    return n.current.memoizedState.isDehydrated && (So(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = mr, mr = o, r !== null && Fs(r)), n;
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
            var p = o[c], y = p.getSnapshot;
            p = p.value;
            try {
              if (!va(y(), p))
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
  function Ca(n, r) {
    for (r &= ~xu, r &= ~vf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - da(r), c = 1 << o;
      n[o] = -1, r &= ~c;
    }
  }
  function lm(n) {
    if (ut & 6)
      throw Error(f(327));
    Tu();
    var r = Pa(n, 0);
    if (!(r & 1))
      return pr(n, gt()), null;
    var o = bf(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = vd(n);
      c !== 0 && (r = c, o = xp(n, c));
    }
    if (o === 1)
      throw o = As, So(n, 0), Ca(n, r), pr(n, gt()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bo(n, mr, Fi), pr(n, gt()), null;
  }
  function Cu(n, r) {
    var o = ut;
    ut |= 1;
    try {
      return n(r);
    } finally {
      ut = o, ut === 0 && (wu = gt() + 500, An && Mr());
    }
  }
  function Cl(n) {
    _l !== null && _l.tag === 0 && !(ut & 6) && Tu();
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
  function Ep() {
    ra = bu.current, Et(bu);
  }
  function So(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Uv(o)), on !== null)
      for (o = on.return; o !== null; ) {
        var c = o;
        switch (Qd(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && ga();
            break;
          case 3:
            Sl(), Et(ln), Et(We), Bc();
            break;
          case 5:
            rt(c);
            break;
          case 4:
            Sl();
            break;
          case 13:
            Et(Pe);
            break;
          case 19:
            Et(Pe);
            break;
          case 10:
            vl(c.type._context);
            break;
          case 22:
          case 23:
            Ep();
        }
        o = o.return;
      }
    if (tn = n, on = n = Tl(n.current, null), jn = ra = r, Rn = 0, As = null, xu = vf = Ai = 0, mr = vo = null, Wn !== null) {
      for (r = 0; r < Wn.length; r++)
        if (o = Wn[r], c = o.interleaved, c !== null) {
          o.interleaved = null;
          var p = c.next, y = o.pending;
          if (y !== null) {
            var w = y.next;
            y.next = p, c.next = w;
          }
          o.pending = c;
        }
      Wn = null;
    }
    return n;
  }
  function om(n, r) {
    do {
      var o = on;
      try {
        if (Zd(), Wc.current = uf, Ve) {
          for (var c = Wt.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          Ve = !1;
        }
        if (ao = 0, ft = $ = Wt = null, oi = !1, na = 0, Sp.current = null, o === null || o.return === null) {
          Rn = 1, As = r, on = null;
          break;
        }
        e: {
          var y = n, w = o.return, C = o, k = r;
          if (r = jn, C.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var V = k, X = C, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var q = X.alternate;
              q ? (X.updateQueue = q.updateQueue, X.memoizedState = q.memoizedState, X.lanes = q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ge = op(w);
            if (ge !== null) {
              ge.flags &= -257, up(ge, w, C, y, r), ge.mode & 1 && qv(y, V, r), r = ge, k = V;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var Re = /* @__PURE__ */ new Set();
                Re.add(k), r.updateQueue = Re;
              } else
                Ce.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                qv(y, V, r), _p();
                break e;
              }
              k = Error(f(426));
            }
          } else if (Bt && C.mode & 1) {
            var dn = op(w);
            if (dn !== null) {
              !(dn.flags & 65536) && (dn.flags |= 256), up(dn, w, C, y, r), Xd(pu(k, C));
              break e;
            }
          }
          y = k = pu(k, C), Rn !== 4 && (Rn = 2), vo === null ? vo = [y] : vo.push(y), y = w;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var z = Qv(y, k, r);
                tp(y, z);
                break e;
              case 1:
                C = k;
                var L = y.type, H = y.stateNode;
                if (!(y.flags & 128) && (typeof L.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (ci === null || !ci.has(H)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var re = Rs(y, C, r);
                  tp(y, re);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Cp(o);
      } catch (De) {
        r = De, on === o && o !== null && (on = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Sf() {
    var n = zs.current;
    return zs.current = uf, n === null ? uf : n;
  }
  function _p() {
    (Rn === 0 || Rn === 3 || Rn === 2) && (Rn = 4), tn === null || !(Ai & 268435455) && !(vf & 268435455) || Ca(tn, jn);
  }
  function bf(n, r) {
    var o = ut;
    ut |= 2;
    var c = Sf();
    (tn !== n || jn !== r) && (Fi = null, So(n, r));
    do
      try {
        Kg();
        break;
      } catch (p) {
        om(n, p);
      }
    while (1);
    if (Zd(), ut = o, zs.current = c, on !== null)
      throw Error(f(261));
    return tn = null, jn = 0, Rn;
  }
  function Kg() {
    for (; on !== null; )
      um(on);
  }
  function Zg() {
    for (; on !== null && !rl(); )
      um(on);
  }
  function um(n) {
    var r = cm(n.alternate, n, ra);
    n.memoizedProps = n.pendingProps, r === null ? Cp(n) : on = r, Sp.current = null;
  }
  function Cp(n) {
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
      } else if (o = Xg(o, r, ra), o !== null) {
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
  function bo(n, r, o) {
    var c = Ot, p = cr.transition;
    try {
      cr.transition = null, Ot = 1, Jg(n, r, o, c);
    } finally {
      cr.transition = p, Ot = c;
    }
    return null;
  }
  function Jg(n, r, o, c) {
    do
      Tu();
    while (_l !== null);
    if (ut & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (Cg(n, y), n === tn && (on = tn = null, jn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || El || (El = !0, Tp(al, function() {
      return Tu(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = cr.transition, cr.transition = null;
      var w = Ot;
      Ot = 1;
      var C = ut;
      ut |= 4, Sp.current = null, em(n, o), nm(o, n), kc(Zl), Gl = !!Yd, Zl = Yd = null, n.current = o, rm(o), fc(), ut = C, Ot = w, cr.transition = y;
    } else
      n.current = o;
    if (El && (El = !1, _l = n, yf = p), y = n.pendingLanes, y === 0 && (ci = null), Qh(o.stateNode), pr(n, gt()), r !== null)
      for (c = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (mf)
      throw mf = !1, n = mo, mo = null, n;
    return yf & 1 && n.tag !== 0 && Tu(), y = n.pendingLanes, y & 1 ? n === gf ? Eu++ : (Eu = 0, gf = n) : Eu = 0, Mr(), null;
  }
  function Tu() {
    if (_l !== null) {
      var n = yd(yf), r = cr.transition, o = Ot;
      try {
        if (cr.transition = null, Ot = 16 > n ? 16 : n, _l === null)
          var c = !1;
        else {
          if (n = _l, _l = null, yf = 0, ut & 6)
            throw Error(f(331));
          var p = ut;
          for (ut |= 4, Ee = n.current; Ee !== null; ) {
            var y = Ee, w = y.child;
            if (Ee.flags & 16) {
              var C = y.deletions;
              if (C !== null) {
                for (var k = 0; k < C.length; k++) {
                  var V = C[k];
                  for (Ee = V; Ee !== null; ) {
                    var X = Ee;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, X, y);
                    }
                    var Z = X.child;
                    if (Z !== null)
                      Z.return = X, Ee = Z;
                    else
                      for (; Ee !== null; ) {
                        X = Ee;
                        var q = X.sibling, ge = X.return;
                        if (yp(X), X === V) {
                          Ee = null;
                          break;
                        }
                        if (q !== null) {
                          q.return = ge, Ee = q;
                          break;
                        }
                        Ee = ge;
                      }
                  }
                }
                var Ce = y.alternate;
                if (Ce !== null) {
                  var Re = Ce.child;
                  if (Re !== null) {
                    Ce.child = null;
                    do {
                      var dn = Re.sibling;
                      Re.sibling = null, Re = dn;
                    } while (Re !== null);
                  }
                }
                Ee = y;
              }
            }
            if (y.subtreeFlags & 2064 && w !== null)
              w.return = y, Ee = w;
            else
              e:
                for (; Ee !== null; ) {
                  if (y = Ee, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(9, y, y.return);
                    }
                  var z = y.sibling;
                  if (z !== null) {
                    z.return = y.return, Ee = z;
                    break e;
                  }
                  Ee = y.return;
                }
          }
          var L = n.current;
          for (Ee = L; Ee !== null; ) {
            w = Ee;
            var H = w.child;
            if (w.subtreeFlags & 2064 && H !== null)
              H.return = w, Ee = H;
            else
              e:
                for (w = L; Ee !== null; ) {
                  if (C = Ee, C.flags & 2048)
                    try {
                      switch (C.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Us(9, C);
                      }
                    } catch (De) {
                      un(C, C.return, De);
                    }
                  if (C === w) {
                    Ee = null;
                    break e;
                  }
                  var re = C.sibling;
                  if (re !== null) {
                    re.return = C.return, Ee = re;
                    break e;
                  }
                  Ee = C.return;
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
    r = pu(o, r), r = Qv(n, r, 1), n = yl(n, r, 1), r = fr(), n !== null && ($l(n, 1, r), pr(n, r));
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
            n = pu(o, n), n = Rs(r, n, 1), r = yl(r, n, 1), n = fr(), r !== null && ($l(r, 1, n), pr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function e0(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = fr(), n.pingedLanes |= n.suspendedLanes & o, tn === n && (jn & o) === o && (Rn === 4 || Rn === 3 && (jn & 130023424) === jn && 500 > gt() - bp ? So(n, 0) : xu |= o), pr(n, r);
  }
  function xf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Qo, Qo <<= 1, !(Qo & 130023424) && (Qo = 4194304)) : r = 1);
    var o = fr();
    n = Mi(n, r), n !== null && ($l(n, r, o), pr(n, o));
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
        gn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return gn = !1, Ui(n, r, o);
        gn = !!(n.flags & 131072);
      }
    else
      gn = !1, Bt && r.flags & 1048576 && Gd(r, lu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        ur(n, r), n = r.pendingProps;
        var p = ya(r, We.current);
        ce(r, o), p = bl(null, r, c, n, p, o);
        var y = oo();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(c) ? (y = !0, Nc(r)) : y = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ep(r), p.updater = Pc, r.stateNode = p, p._reactInternals = r, Vc(r, c, n, o), r = Xv(null, r, c, !0, y, o)) : (r.tag = 0, Bt && y && Uc(r), Cn(null, r, p, o), r = r.child), r;
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
          c = r.pendingProps, y = r.memoizedState, p = y.element, _n(n, r), gl(r, c, null, o);
          var w = r.memoizedState;
          if (c = w.element, y.isDehydrated)
            if (y = { element: c, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              p = pu(Error(f(423)), r), r = ff(n, r, c, o, p);
              break e;
            } else if (c !== p) {
              p = pu(Error(f(424)), r), r = ff(n, r, c, o, p);
              break e;
            } else
              for (Ur = Wa(r.stateNode.containerInfo.firstChild), ea = r, Bt = !0, ba = null, o = $v(r, null, c, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Jt(), c === p) {
              r = $n(n, r, o);
              break e;
            }
            Cn(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return He(r), n === null && Ac(r), c = r.type, p = r.pendingProps, y = n !== null ? n.memoizedProps : null, w = p.children, ms(c, p) ? w = null : y !== null && ms(c, y) && (r.flags |= 32), Ke(n, r), Cn(n, r, w, o), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return fp(n, r, o);
      case 4:
        return rp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = uu(r, null, c, o) : Cn(n, r, c, o), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ta(c, p), wl(n, r, c, p, o);
      case 7:
        return Cn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Cn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Cn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, y = r.memoizedProps, w = p.value, _t(li, c._currentValue), c._currentValue = w, y !== null)
            if (va(y.value, w)) {
              if (y.children === p.children && !ln.current) {
                r = $n(n, r, o);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var C = y.dependencies;
                if (C !== null) {
                  w = y.child;
                  for (var k = C.firstContext; k !== null; ) {
                    if (k.context === c) {
                      if (y.tag === 1) {
                        k = Li(-1, o & -o), k.tag = 2;
                        var V = y.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var X = V.pending;
                          X === null ? k.next = k : (k.next = X.next, X.next = k), V.pending = k;
                        }
                      }
                      y.lanes |= o, k = y.alternate, k !== null && (k.lanes |= o), Fn(
                        y.return,
                        o,
                        r
                      ), C.lanes |= o;
                      break;
                    }
                    k = k.next;
                  }
                } else if (y.tag === 10)
                  w = y.type === r.type ? null : y.child;
                else if (y.tag === 18) {
                  if (w = y.return, w === null)
                    throw Error(f(341));
                  w.lanes |= o, C = w.alternate, C !== null && (C.lanes |= o), Fn(w, o, r), w = y.sibling;
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
          Cn(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, ce(r, o), p = fn(p), c = c(p), r.flags |= 1, Cn(n, r, c, o), r.child;
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
  function Tp(n, r) {
    return qt(n, r);
  }
  function r0(n, r, o, c) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ta(n, r, o, c) {
    return new r0(n, r, o, c);
  }
  function kp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function a0(n) {
    if (typeof n == "function")
      return kp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vt)
        return 11;
      if (n === hn)
        return 14;
    }
    return 2;
  }
  function Tl(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ta(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function wf(n, r, o, c, p, y) {
    var w = 2;
    if (c = n, typeof n == "function")
      kp(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case he:
            return xo(o.children, p, y, r);
          case it:
            w = 8, p |= 8;
            break;
          case tt:
            return n = Ta(12, o, r, p | 2), n.elementType = tt, n.lanes = y, n;
          case Ie:
            return n = Ta(13, o, r, p), n.elementType = Ie, n.lanes = y, n;
          case et:
            return n = Ta(19, o, r, p), n.elementType = et, n.lanes = y, n;
          case xn:
            return Hs(o, p, y, r);
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
    return r = Ta(w, o, r, p), r.elementType = n, r.type = c, r.lanes = y, r;
  }
  function xo(n, r, o, c) {
    return n = Ta(7, n, c, r), n.lanes = o, n;
  }
  function Hs(n, r, o, c) {
    return n = Ta(22, n, c, r), n.elementType = xn, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function js(n, r, o) {
    return n = Ta(6, n, null, r), n.lanes = o, n;
  }
  function wo(n, r, o) {
    return r = Ta(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function i0(n, r, o, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = md(0), this.expirationTimes = md(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = md(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Ef(n, r, o, c, p, y, w, C, k) {
    return n = new i0(n, r, o, C, k), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = Ta(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ep(y), n;
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
        return Ss(n, o, r);
    }
    return r;
  }
  function dm(n, r, o, c, p, y, w, C, k) {
    return n = Ef(o, c, !0, n, p, y, w, C, k), n.context = Rp(null), o = n.current, c = fr(), p = Sn(o), y = Li(c, p), y.callback = r ?? null, yl(o, y, p), n.current.lanes = p, $l(n, p, c), pr(n, c), n;
  }
  function Ys(n, r, o, c) {
    var p = r.current, y = fr(), w = Sn(p);
    return o = Rp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Li(y, w), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = yl(p, r, w), n !== null && (dr(n, p, w, y), Yc(n, p, w)), w;
  }
  function _f(n) {
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
  function Cf(n) {
    this._internalRoot = n;
  }
  Hi.prototype.render = Cf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Ys(n, r, null, null);
  }, Hi.prototype.unmount = Cf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Cl(function() {
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
  function Tf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vm() {
  }
  function l0(n, r, o, c, p) {
    if (p) {
      if (typeof c == "function") {
        var y = c;
        c = function() {
          var V = _f(w);
          y.call(V);
        };
      }
      var w = dm(r, c, n, 0, null, !1, !1, "", vm);
      return n._reactRootContainer = w, n[Di] = w.current, au(n.nodeType === 8 ? n.parentNode : n), Cl(), w;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof c == "function") {
      var C = c;
      c = function() {
        var V = _f(k);
        C.call(V);
      };
    }
    var k = Ef(n, 0, !1, null, null, !1, !1, "", vm);
    return n._reactRootContainer = k, n[Di] = k.current, au(n.nodeType === 8 ? n.parentNode : n), Cl(function() {
      Ys(r, k, o, c);
    }), k;
  }
  function kf(n, r, o, c, p) {
    var y = o._reactRootContainer;
    if (y) {
      var w = y;
      if (typeof p == "function") {
        var C = p;
        p = function() {
          var k = _f(w);
          C.call(k);
        };
      }
      Ys(r, w, n, p);
    } else
      w = l0(o, r, n, p, c);
    return _f(w);
  }
  Kh = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Wl(r.pendingLanes);
          o !== 0 && (Zu(r, o | 1), pr(r, gt()), !(ut & 6) && (wu = gt() + 500, Mr()));
        }
        break;
      case 13:
        Cl(function() {
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
      var r = Sn(n), o = Mi(n, r);
      if (o !== null) {
        var c = fr();
        dr(o, n, r, c);
      }
      Dp(n, r);
    }
  }, Zh = function() {
    return Ot;
  }, gd = function(n, r) {
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
  }, Xu = Cu, cc = Cl;
  var o0 = { usingClientEntryPoint: !1, Events: [gs, iu, Ue, Vl, Wo, Cu] }, ku = { findFiberByHostInstance: ma, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, u0 = { bundleType: ku.bundleType, version: ku.version, rendererPackageName: ku.rendererPackageName, rendererConfig: ku.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Nn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ku.findFiberByHostInstance || hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
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
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Ef(n, 1, !1, null, null, o, !1, c, p), n[Di] = r.current, au(n.nodeType === 8 ? n.parentNode : n), new Cf(r);
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
    return Cl(n);
  }, La.hydrate = function(n, r, o) {
    if (!Tf(r))
      throw Error(f(200));
    return kf(null, n, r, !0, o);
  }, La.hydrateRoot = function(n, r, o) {
    if (!Mp(n))
      throw Error(f(405));
    var c = o != null && o.hydratedSources || null, p = !1, y = "", w = Op;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = dm(r, null, n, 1, o ?? null, p, !1, y, w), n[Di] = r.current, au(n), c)
      for (n = 0; n < c.length; n++)
        o = c[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new Hi(r);
  }, La.render = function(n, r, o) {
    if (!Tf(r))
      throw Error(f(200));
    return kf(null, n, r, !1, o);
  }, La.unmountComponentAtNode = function(n) {
    if (!Tf(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Cl(function() {
      kf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Di] = null;
      });
    }), !0) : !1;
  }, La.unstable_batchedUpdates = Cu, La.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!Tf(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return kf(n, r, o, !1, c);
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
var aC;
function EA() {
  return aC || (aC = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Po, s = bT(), f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = !1;
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
    function S(e) {
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
    var R = 0, M = 1, P = 2, U = 3, I = 4, Q = 5, ne = 6, ae = 7, se = 8, Me = 9, ie = 10, ee = 11, ye = 12, ve = 13, le = 14, he = 15, it = 16, tt = 17, lt = 18, ht = 19, Vt = 21, Ie = 22, et = 23, hn = 24, Rt = 25, xn = !0, ue = !1, Ae = !1, be = !1, yt = !1, wt = !0, Vn = !1, hr = !1, Ja = !0, wn = !0, sa = !0, nr = /* @__PURE__ */ new Set(), Tr = {}, ei = {};
    function kr(e, t) {
      ca(e, t), ca(e + "Capture", t);
    }
    function ca(e, t) {
      Tr[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Tr[e] = t;
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
    function xi(e, t) {
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
    var ni = 0, Gr = 1, Fa = 2, vn = 3, Qr = 4, el = 5, Ha = 6, de = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = de + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", nt = new RegExp("^[" + de + "][" + Ne + "]*$"), Dt = {}, Zt = {};
    function Ln(e) {
      return rr.call(Zt, e) ? !0 : rr.call(Dt, e) ? !1 : nt.test(e) ? (Zt[e] = !0, !0) : (Dt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
    var jt = {}, Bo = [
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
    Bo.forEach(function(e) {
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
    var Vl = /[\-\:]([a-z])/g, Wo = function(e) {
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
      var t = e.replace(Vl, Wo);
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
      var t = e.replace(Vl, Wo);
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
      var t = e.replace(Vl, Wo);
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
    var cc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Il = !1;
    function $o(e) {
      !Il && cc.test(e) && (Il = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Bl(e, t, a, l) {
      if (l.mustUseProperty) {
        var u = l.propertyName;
        return e[u];
      } else {
        fa(a, t), l.sanitizeURL && $o("" + a);
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
          var g = u.propertyName;
          if (a === null) {
            var b = u.type;
            e[g] = b === vn ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var E = u.attributeName, _ = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var N = u.type, O;
          N === vn || N === Qr && a === !0 ? O = "" : (fa(a, E), O = "" + a, u.sanitizeURL && $o(O.toString())), _ ? e.setAttributeNS(_, E, O) : e.setAttribute(E, O);
        }
      }
    }
    var tl = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), ja = Symbol.for("react.fragment"), nl = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Nn = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), vr = Symbol.for("react.legacy_hidden"), rl = Symbol.for("react.cache"), fc = Symbol.for("react.tracing_marker"), gt = Symbol.iterator, Eg = "@@iterator";
    function wi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = gt && e[gt] || e[Eg];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, al = 0, Gh, pd, Ku, Ya, Qh, da, qh;
    function Xh() {
    }
    Xh.__reactDisabledLog = !0;
    function _g() {
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
        al < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qo = f.ReactCurrentDispatcher, Wl;
    function Pa(e, t, a) {
      {
        if (Wl === void 0)
          try {
            throw Error();
          } catch (u) {
            var l = u.stack.trim().match(/\n( *(at )?)/);
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
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Qo.current, Qo.current = null, _g();
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
`), b = l.stack.split(`
`), E = g.length - 1, _ = b.length - 1; E >= 1 && _ >= 0 && g[E] !== b[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (g[E] !== b[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || g[E] !== b[_]) {
                    var N = `
` + g[E].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && pc.set(e, N), N;
                  }
                while (E >= 1 && _ >= 0);
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
    function $l(e, t, a) {
      return hc(e, !1);
    }
    function Cg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return hc(e, Cg(e));
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
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
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
        case T:
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
          var u = a;
          return gd(u._context) + ".Provider";
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
      return mn === null ? "" : yd(mn);
    }
    function En() {
      Ju.getCurrentStack = null, mn = null, pa = !1;
    }
    function Mt(e) {
      Ju.getCurrentStack = e === null ? null : es, mn = e, pa = !1;
    }
    function Tg() {
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
    function qo(e, t) {
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
    function Xo(e) {
      var t = Sd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      $r(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
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
    var yc = !1, rs = !1, gc = !1, bd = !1;
    function Ei(e) {
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
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !rs && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), rs = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yc && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), yc = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: il(t.value != null ? t.value : l),
        controlled: Ei(t)
      };
    }
    function xd(e, t) {
      var a = e, l = t.checked;
      l != null && ri(a, "checked", l, !1);
    }
    function Ko(e, t) {
      var a = e;
      {
        var l = Ei(t);
        !a._wrapperState.controlled && l && !bd && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bd = !0), a._wrapperState.controlled && !l && !gc && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), gc = !0);
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
      var g = l.name;
      g !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, g !== "" && (l.name = g);
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
            var g = Lm(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            tv(v), Ko(v, g);
          }
        }
      }
    }
    function ll(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || mc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = lr(e._wrapperState.initialValue) : e.defaultValue !== lr(a) && (e.defaultValue = lr(a)));
    }
    var Sc = !1, Zo = !1, rv = !1;
    function bc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Zo || (Zo = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (rv || (rv = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Sc && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Sc = !0);
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
    function kg(e) {
      {
        qo("select", e);
        for (var t = 0; t < iv.length; t++) {
          var a = iv[t];
          if (e[a] != null) {
            var l = Un(e[a]);
            e.multiple && !l ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, av()) : !e.multiple && l && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, av());
          }
        }
      }
    }
    function ol(e, t, a, l) {
      var u = e.options;
      if (t) {
        for (var d = a, v = {}, g = 0; g < d.length; g++)
          v["$" + d[g]] = !0;
        for (var b = 0; b < u.length; b++) {
          var E = v.hasOwnProperty("$" + u[b].value);
          u[b].selected !== E && (u[b].selected = E), E && l && (u[b].defaultSelected = !0);
        }
      } else {
        for (var _ = lr(il(a)), N = null, O = 0; O < u.length; O++) {
          if (u[O].value === _) {
            u[O].selected = !0, l && (u[O].defaultSelected = !0);
            return;
          }
          N === null && !u[O].disabled && (N = u[O]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function Ed(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function lv(e, t) {
      var a = e;
      kg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xc && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xc = !0);
    }
    function Rg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? ol(a, !!t.multiple, l, !1) : t.defaultValue != null && ol(a, !!t.multiple, t.defaultValue, !0);
    }
    function Dg(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ol(a, !!t.multiple, u, !1) : l !== !!t.multiple && (t.defaultValue != null ? ol(a, !!t.multiple, t.defaultValue, !0) : ol(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Og(e, t) {
      var a = e, l = t.value;
      l != null && ol(a, !!t.multiple, l, !1);
    }
    var _d = !1;
    function Cd(e, t) {
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
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !_d && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component"), _d = !0);
      var l = t.value;
      if (l == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
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
    function Td(e, t) {
      uv(e, t);
    }
    var _i = "http://www.w3.org/1999/xhtml", Mg = "http://www.w3.org/1998/Math/MathML", kd = "http://www.w3.org/2000/svg";
    function wc(e) {
      switch (e) {
        case "svg":
          return kd;
        case "math":
          return Mg;
        default:
          return _i;
      }
    }
    function Rd(e, t) {
      return e == null || e === _i ? wc(t) : e === kd && t === "foreignObject" ? _i : e;
    }
    var Lg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, l, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, u);
        });
      } : e;
    }, Ec, cv = Lg(function(e, t) {
      if (e.namespaceURI === kd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Dr = 1, Ci = 3, yn = 8, Ia = 9, Ql = 11, _c = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ci) {
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
    function Cc(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (ti(t, e), ("" + t).trim());
    }
    var eu = /([A-Z])/g, Ng = /^ms-/;
    function Ug(e) {
      return e.replace(eu, "-$1").toLowerCase().replace(Ng, "-ms-");
    }
    var hv = function() {
    };
    {
      var vv = /^(?:webkit|moz|o)[A-Z]/, mv = /^-ms-/, us = /-(.)/g, tu = /;\s*$/, nu = {}, ru = {}, yv = !1, Dd = !1, Od = function(e) {
        return e.replace(us, function(t, a) {
          return a.toUpperCase();
        });
      }, Md = function(e) {
        nu.hasOwnProperty(e) && nu[e] || (nu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Od(e.replace(mv, "ms-"))
        ));
      }, gv = function(e) {
        nu.hasOwnProperty(e) && nu[e] || (nu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Sv = function(e, t) {
        ru.hasOwnProperty(t) && ru[t] || (ru[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(tu, "")));
      }, bv = function(e, t) {
        yv || (yv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, zg = function(e, t) {
        Dd || (Dd = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      hv = function(e, t) {
        e.indexOf("-") > -1 ? Md(e) : vv.test(e) ? gv(e) : tu.test(t) && Sv(e, t), typeof t == "number" && (isNaN(t) ? bv(e, t) : isFinite(t) || zg(e, t));
      };
    }
    var Ag = hv;
    function Fg(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var u = e[l];
            if (u != null) {
              var d = l.indexOf("--") === 0;
              t += a + (d ? l : Ug(l)) + ":", t += Cc(l, u, d), a = ";";
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
          u || Ag(l, t[l]);
          var d = Cc(l, t[l], u);
          l === "float" && (l = "cssFloat"), u ? a.setProperty(l, d) : a[l] = d;
        }
    }
    function Hg(e) {
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
          var v = a[d], g = l[d];
          if (g && v !== g) {
            var b = v + "," + g;
            if (u[b])
              continue;
            u[b] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Hg(e[v]) ? "Removing" : "Updating", v, g);
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
    }, Ev = ot({
      menuitem: !0
    }, wv), _v = "__html";
    function Tc(e, t) {
      if (t) {
        if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(_v in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ti(e, t) {
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
    var kc = {
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
    }, Cv = {
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
          var a = "aria-" + t.slice(4).toLowerCase(), l = Cv.hasOwnProperty(a) ? a : null;
          if (l == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ba[t] = !0, !0;
          if (t !== l)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Ba[t] = !0, !0;
        }
        if (Ld.test(t)) {
          var u = t.toLowerCase(), d = Cv.hasOwnProperty(u) ? u : null;
          if (d == null)
            return Ba[t] = !0, !1;
          if (t !== d)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ba[t] = !0, !0;
        }
      }
      return !0;
    }
    function Tv(e, t) {
      {
        var a = [];
        for (var l in t) {
          var u = Nd(e, l);
          u || a.push(l);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Rc(e, t) {
      Ti(e, t) || Tv(e, t);
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
      var zn = {}, Ad = /^on./, kv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + Ne + "]*$"), Dv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      zd = function(e, t, a, l) {
        if (rr.call(zn, t) && zn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (l != null) {
          var d = l.registrationNameDependencies, v = l.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(u) ? v[u] : null;
          if (g != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, g), zn[t] = !0, !0;
          if (Ad.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Ad.test(t))
          return kv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Rv.test(t) || Dv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var b = qr(t), E = b !== null && b.type === ni;
        if (kc.hasOwnProperty(u)) {
          var _ = kc[u];
          if (_ !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, _), zn[t] = !0, !0;
        } else if (!E && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), zn[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, b, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : E ? !0 : Rr(t, a, b, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && b !== null && b.type === vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var Ov = function(e, t, a) {
      {
        var l = [];
        for (var u in t) {
          var d = zd(e, u, t[u], a);
          d || l.push(u);
        }
        var v = l.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        l.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Mv(e, t, a) {
      Ti(e, t) || Ov(e, t, a);
    }
    var ki = 1, fs = 2, Xl = 4, jg = ki | fs | Xl, ds = null;
    function ps(e) {
      ds !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function Yg() {
      ds === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Lv(e) {
      return e === ds;
    }
    function Dc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ci ? t.parentNode : t;
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
    function Uv(e, t, a, l, u, d, v, g, b) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (_) {
        this.onError(_);
      }
    }
    var Pd = Uv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Vd = document.createElement("react");
      Pd = function(t, a, l, u, d, v, g, b, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), N = !1, O = !0, j = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function B() {
          Vd.removeEventListener(W, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function ze() {
          N = !0, B(), a.apply(l, xe), O = !1;
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
        if (window.addEventListener("error", A), Vd.addEventListener(W, ze, !1), _.initEvent(W, !1, !1), Vd.dispatchEvent(_), Y && Object.defineProperty(window, "event", Y), N && O && (pt ? st && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", A), !N)
          return B(), Uv.apply(this, arguments);
      };
    }
    var Vg = Pd, sl = !1, Wa = null, ys = !1, cl = null, ai = {
      onError: function(e) {
        sl = !0, Wa = e;
      }
    };
    function eo(e, t, a, l, u, d, v, g, b) {
      sl = !1, Wa = null, Vg.apply(ai, arguments);
    }
    function Di(e, t, a, l, u, d, v, g, b) {
      if (eo.apply(this, arguments), sl) {
        var E = Bd();
        ys || (ys = !0, cl = E);
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
    function iu(e, t) {
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
    ), Et = (
      /*                */
      16
    ), _t = (
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
    ), bs = (
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
    ), to = (
      /*              */
      33554432
    ), lu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Xe | ya | 0
    ), Nr = It | Xe | Et | _t | Or | ga | dl, or = Xe | ii | Or | dl, Sa = Xt | Et, Bn = Mr | pl | $d, Oi = f.ReactCurrentOwner;
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
      var u = ma(e);
      return u ? Jr(u) === u : !1;
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
      for (var l = e, u = t; ; ) {
        var d = l.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var g = d.return;
          if (g !== null) {
            l = u = g;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var b = d.child; b; ) {
            if (b === l)
              return Ur(d), e;
            if (b === u)
              return Ur(d), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== u.return)
          l = d, u = v;
        else {
          for (var E = !1, _ = d.child; _; ) {
            if (_ === l) {
              E = !0, l = d, u = v;
              break;
            }
            if (_ === u) {
              E = !0, u = d, l = v;
              break;
            }
            _ = _.sibling;
          }
          if (!E) {
            for (_ = v.child; _; ) {
              if (_ === l) {
                E = !0, l = v, u = d;
                break;
              }
              if (_ === u) {
                E = !0, u = v, l = d;
                break;
              }
              _ = _.sibling;
            }
            if (!E)
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
    function ba(e) {
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
        Ja && (e = ot({}, e, {
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
          if (wn) {
            var l;
            switch (t) {
              case ur:
                l = Hc;
                break;
              case $n:
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
          fn || (fn = !0, S("React instrumentation encountered an error: %s", u));
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
    function _n(e) {
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
    function Iv() {
      ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped();
    }
    function Vc(e) {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function ou() {
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
    function uu() {
      ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
    }
    function $v(e) {
      ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(e);
    }
    function xs() {
      ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped();
    }
    function $a(e) {
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
    ), xa = (
      /*              */
      16
    ), Bc = Math.clz32 ? Math.clz32 : ao, Wc = Math.log, ap = Math.LN2;
    function ao(e) {
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
    ), oi = (
      /*    */
      2
    ), na = (
      /*             */
      4
    ), io = (
      /*            */
      8
    ), $t = (
      /*                     */
      16
    ), lo = (
      /*                */
      32
    ), bl = (
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
    ), Es = (
      /*                        */
      1024
    ), _s = (
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
    ), Cs = (
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
    function Bg(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & oi)
          return "InputContinuousHydration";
        if (e & na)
          return "InputContinuous";
        if (e & io)
          return "DefaultHydration";
        if (e & $t)
          return "Default";
        if (e & lo)
          return "TransitionHydration";
        if (e & bl)
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
      switch (gn(e)) {
        case Ve:
          return Ve;
        case oi:
          return oi;
        case na:
          return na;
        case io:
          return io;
        case $t:
          return $t;
        case lo:
          return lo;
        case oo:
        case wa:
        case zr:
        case uo:
        case Es:
        case _s:
        case $c:
        case Gc:
        case Qc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case so:
        case ef:
          return e & bl;
        case Ni:
        case tf:
        case Cs:
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
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ts(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var l = $, u = e.suspendedLanes, d = e.pingedLanes, v = a & af;
      if (v !== $) {
        var g = v & ~u;
        if (g !== $)
          l = du(g);
        else {
          var b = v & d;
          b !== $ && (l = du(b));
        }
      } else {
        var E = a & ~u;
        E !== $ ? l = du(E) : d !== $ && (l = du(d));
      }
      if (l === $)
        return $;
      if (t !== $ && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var _ = gn(l), N = gn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === $t && (N & bl) !== $
        )
          return t;
      }
      (l & na) !== $ && (l |= a & $t);
      var O = e.entangledLanes;
      if (O !== $)
        for (var j = e.entanglements, Y = l & O; Y > 0; ) {
          var B = wl(Y), xe = 1 << B;
          l |= j[B], Y &= ~xe;
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
        case $t:
        case lo:
        case oo:
        case wa:
        case zr:
        case uo:
        case Es:
        case _s:
        case $c:
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
        case Cs:
        case nf:
        case rf:
          return Ft;
        case cu:
        case fu:
        case xl:
        case Ar:
          return Ft;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Ft;
      }
    }
    function Wg(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var g = wl(v), b = 1 << g, E = d[g];
        E === Ft ? ((b & l) === $ || (b & u) !== $) && (d[g] = uf(b, t)) : E <= t && (e.expiredLanes |= b), v &= ~b;
      }
    }
    function $g(e) {
      return du(e.pendingLanes);
    }
    function lp(e) {
      var t = e.pendingLanes & ~Ar;
      return t !== $ ? t : t & Ar ? Ar : $;
    }
    function pu(e) {
      return (e & Ve) !== $;
    }
    function ks(e) {
      return (e & af) !== $;
    }
    function sf(e) {
      return (e & co) === e;
    }
    function Gg(e) {
      var t = Ve | na | $t;
      return (e & t) === $;
    }
    function Qv(e) {
      return (e & bl) === e;
    }
    function Rs(e, t) {
      var a = oi | na | io | $t;
      return (t & a) !== $;
    }
    function qv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function op(e) {
      return (e & bl) !== $;
    }
    function up() {
      var e = lf;
      return lf <<= 1, (lf & bl) === $ && (lf = oo), e;
    }
    function Qg() {
      var e = of;
      return of <<= 1, (of & co) === $ && (of = Ni), e;
    }
    function gn(e) {
      return e & -e;
    }
    function Cn(e) {
      return gn(e);
    }
    function wl(e) {
      return 31 - Bc(e);
    }
    function cf(e) {
      return wl(e);
    }
    function Fr(e, t) {
      return (e & t) !== $;
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
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function po(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = $, e.pingedLanes = $);
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
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, u = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var g = wl(v), b = 1 << g;
        l[g] = $, u[g] = Ft, d[g] = Ft, v &= ~b;
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
    function qg(e, t) {
      var a = gn(t), l;
      switch (a) {
        case na:
          l = oi;
          break;
        case $t:
          l = io;
          break;
        case oo:
        case wa:
        case zr:
        case uo:
        case Es:
        case _s:
        case $c:
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
        case Cs:
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
      if (Wn)
        for (var l = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = cf(a), d = 1 << u, v = l[u];
          v.add(t), a &= ~d;
        }
    }
    function df(e, t) {
      if (Wn)
        for (var a = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var u = cf(t), d = 1 << u, v = a[u];
          v.size > 0 && (v.forEach(function(g) {
            var b = g.alternate;
            (b === null || !l.has(b)) && l.add(g);
          }), v.clear()), t &= ~d;
        }
    }
    function hp(e, t) {
      return null;
    }
    var ur = Ve, $n = na, Ui = $t, Ds = xl, ho = ft;
    function Ea() {
      return ho;
    }
    function Tn(e) {
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
    function Xg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function vp(e, t) {
      return e !== 0 && e < t;
    }
    function Ms(e) {
      var t = gn(e);
      return vp(ur, t) ? vp($n, t) ? ks(t) ? Ui : Ds : $n : ur;
    }
    function kn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Zv;
    function Ee(e) {
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
    var yp;
    function tm(e) {
      yp = e;
    }
    var pf = !1, yu = [], ui = null, Kt = null, Hn = null, _a = /* @__PURE__ */ new Map(), gu = /* @__PURE__ */ new Map(), zi = [], Ga = [
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
          _a.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          gu.delete(l);
          break;
        }
      }
    }
    function Su(e, t, a, l, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = si(t, a, l, u, d);
        if (t !== null) {
          var g = Ou(t);
          g !== null && Ls(g);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var b = e.targetContainers;
      return u !== null && b.indexOf(u) === -1 && b.push(u), e;
    }
    function am(e, t, a, l, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return ui = Su(ui, e, t, a, l, d), !0;
        }
        case "dragenter": {
          var v = u;
          return Kt = Su(Kt, e, t, a, l, v), !0;
        }
        case "mouseover": {
          var g = u;
          return Hn = Su(Hn, e, t, a, l, g), !0;
        }
        case "pointerover": {
          var b = u, E = b.pointerId;
          return _a.set(E, Su(_a.get(E) || null, e, t, a, l, b)), !0;
        }
        case "gotpointercapture": {
          var _ = u, N = _.pointerId;
          return gu.set(N, Su(gu.get(N) || null, e, t, a, l, _)), !0;
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
            var u = Gd(a);
            if (u !== null) {
              e.blockedOn = u, yp(e.priority, function() {
                em(a);
              });
              return;
            }
          } else if (l === U) {
            var d = a.stateNode;
            if (kn(d)) {
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
        var a = t[0], l = vo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          ps(d), u.target.dispatchEvent(d), Yg();
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
    function Sp() {
      pf = !1, ui !== null && hf(ui) && (ui = null), Kt !== null && hf(Kt) && (Kt = null), Hn !== null && hf(Hn) && (Hn = null), _a.forEach(zs), gu.forEach(zs);
    }
    function cr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Sp)));
    }
    function ut(e) {
      if (yu.length > 0) {
        cr(yu[0], e);
        for (var t = 1; t < yu.length; t++) {
          var a = yu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ui !== null && cr(ui, e), Kt !== null && cr(Kt, e), Hn !== null && cr(Hn, e);
      var l = function(g) {
        return cr(g, e);
      };
      _a.forEach(l), gu.forEach(l);
      for (var u = 0; u < zi.length; u++) {
        var d = zi[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; zi.length > 0; ) {
        var v = zi[0];
        if (v.blockedOn !== null)
          break;
        gp(v), v.blockedOn === null && zi.shift();
      }
    }
    var tn = f.ReactCurrentBatchConfig, on = !0;
    function jn(e) {
      on = !!e;
    }
    function ra() {
      return on;
    }
    function bu(e, t, a) {
      var l = mr(t), u;
      switch (l) {
        case ur:
          u = Rn;
          break;
        case $n:
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
      var u = Ea(), d = tn.transition;
      tn.transition = null;
      try {
        Tn(ur), Ai(e, t, a, l);
      } finally {
        Tn(u), tn.transition = d;
      }
    }
    function As(e, t, a, l) {
      var u = Ea(), d = tn.transition;
      tn.transition = null;
      try {
        Tn($n), Ai(e, t, a, l);
      } finally {
        Tn(u), tn.transition = d;
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
      var u = Dc(l), d = Is(u);
      if (d !== null) {
        var v = Jr(d);
        if (v === null)
          d = null;
        else {
          var g = v.tag;
          if (g === ve) {
            var b = Gd(v);
            if (b !== null)
              return b;
            d = null;
          } else if (g === U) {
            var E = v.stateNode;
            if (kn(E))
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
          return $n;
        case "message": {
          var t = Xd();
          switch (t) {
            case Hc:
              return ur;
            case ta:
              return $n;
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
    function bp(e, t, a) {
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
    var mo = null, ci = null, El = null;
    function _l(e) {
      return mo = e, ci = gf(), !0;
    }
    function yf() {
      mo = null, ci = null, El = null;
    }
    function Eu() {
      if (El)
        return El;
      var e, t = ci, a = t.length, l, u = gf(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var v = a - e;
      for (l = 1; l <= v && t[a - l] === u[d - l]; l++)
        ;
      var g = l > 1 ? 1 - l : void 0;
      return El = u.slice(e, g), El;
    }
    function gf() {
      return "value" in mo ? mo.value : mo.textContent;
    }
    function yo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function go() {
      return !0;
    }
    function fr() {
      return !1;
    }
    function Sn(e) {
      function t(a, l, u, d, v) {
        this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var b = e[g];
            b ? this[g] = b(d) : this[g] = d[g];
          }
        var E = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return E ? this.isDefaultPrevented = go : this.isDefaultPrevented = fr, this.isPropagationStopped = fr, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = go);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = go);
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
        isPersistent: go
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
    }, pr = Sn(dr), _u = ot({}, dr, {
      view: 0,
      detail: 0
    }), xp = Sn(_u), Fs, wp, Ca;
    function lm(e) {
      e !== Ca && (Ca && e.type === "mousemove" ? (Fs = e.screenX - Ca.screenX, wp = e.screenY - Ca.screenY) : (Fs = 0, wp = 0), Ca = e);
    }
    var Cu = ot({}, _u, {
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
    }), Cl = Sn(Cu), Ep = ot({}, Cu, {
      dataTransfer: 0
    }), So = Sn(Ep), om = ot({}, _u, {
      relatedTarget: 0
    }), Sf = Sn(om), _p = ot({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = Sn(_p), Kg = ot({}, dr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zg = Sn(Kg), um = ot({}, dr, {
      data: 0
    }), Cp = Sn(um), bo = Cp, Jg = {
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
    }, Tu = {
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
        var a = yo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Tu[e.keyCode] || "Unidentified" : "";
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
    var t0 = ot({}, _u, {
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
        return e.type === "keypress" ? yo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), n0 = Sn(t0), cm = ot({}, Cu, {
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
    }), Tp = Sn(cm), r0 = ot({}, _u, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xf
    }), Ta = Sn(r0), kp = ot({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), a0 = Sn(kp), Tl = ot({}, Cu, {
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
    }), wf = Sn(Tl), xo = [9, 13, 27, 32], Hs = 229, js = Mn && "CompositionEvent" in window, wo = null;
    Mn && "documentMode" in document && (wo = document.documentMode);
    var i0 = Mn && "TextEvent" in window && !wo, Ef = Mn && (!js || wo && wo > 8 && wo <= 11), fm = 32, Rp = String.fromCharCode(fm);
    function dm() {
      kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), kr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ys = !1;
    function _f(e) {
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
    function Cf(e) {
      return e.locale === "ko";
    }
    var Hi = !1;
    function Mp(e, t, a, l, u) {
      var d, v;
      if (js ? d = pm(t) : Hi ? hm(t, l) && (d = "onCompositionEnd") : Dp(t, l) && (d = "onCompositionStart"), !d)
        return null;
      Ef && !Cf(l) && (!Hi && d === "onCompositionStart" ? Hi = _l(u) : d === "onCompositionEnd" && Hi && (v = Eu()));
      var g = Sm(a, d);
      if (g.length > 0) {
        var b = new Cp(d, t, null, l, u);
        if (e.push({
          event: b,
          listeners: g
        }), v)
          b.data = v;
        else {
          var E = Op(l);
          E !== null && (b.data = E);
        }
      }
    }
    function Tf(e, t) {
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
          var a = Eu();
          return yf(), Hi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!_f(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ef && !Cf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function l0(e, t, a, l, u) {
      var d;
      if (i0 ? d = Tf(t, l) : d = vm(t, l), !d)
        return null;
      var v = Sm(a, "onBeforeInput");
      if (v.length > 0) {
        var g = new bo("onBeforeInput", "beforeinput", null, l, u);
        e.push({
          event: g,
          listeners: v
        }), g.data = d;
      }
    }
    function kf(e, t, a, l, u, d, v) {
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
    function ku(e) {
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
      kr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, l) {
      Oc(l);
      var u = Sm(t, "onChange");
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
      n(t, o, e, Dc(e)), jd(y, t);
    }
    function y(e) {
      px(e, 0);
    }
    function w(e) {
      var t = Uf(e);
      if (tv(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var k = !1;
    Mn && (k = u0("input") && (!document.documentMode || document.documentMode > 9));
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
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(o);
    }
    function Ce(e) {
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
      var g = a ? Uf(a) : window, b, E;
      if (c(g) ? b = C : ku(g) ? k ? b = dn : (b = ge, E = q) : Ce(g) && (b = Re), b) {
        var _ = b(t, a);
        if (_) {
          n(e, _, l, u);
          return;
        }
      }
      E && E(t, g, a), t === "focusout" && z(g);
    }
    function H() {
      ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function re(e, t, a, l, u, d, v) {
      var g = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (g && !Lv(l)) {
        var E = l.relatedTarget || l.fromElement;
        if (E && (Is(E) || Wp(E)))
          return;
      }
      if (!(!b && !g)) {
        var _;
        if (u.window === u)
          _ = u;
        else {
          var N = u.ownerDocument;
          N ? _ = N.defaultView || N.parentWindow : _ = window;
        }
        var O, j;
        if (b) {
          var Y = l.relatedTarget || l.toElement;
          if (O = a, j = Y ? Is(Y) : null, j !== null) {
            var B = Jr(j);
            (j !== B || j.tag !== Q && j.tag !== ne) && (j = null);
          }
        } else
          O = null, j = a;
        if (O !== j) {
          var xe = Cl, ze = "onMouseLeave", Oe = "onMouseEnter", pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = Tp, ze = "onPointerLeave", Oe = "onPointerEnter", pt = "pointer");
          var st = O == null ? _ : Uf(O), A = j == null ? _ : Uf(j), W = new xe(ze, pt + "leave", O, l, u);
          W.target = st, W.relatedTarget = A;
          var F = null, J = Is(u);
          if (J === a) {
            var we = new xe(Oe, pt + "enter", j, l, u);
            we.target = A, we.relatedTarget = st, F = we;
          }
          VT(e, W, F, O, j);
        }
      }
    }
    function De(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Te = typeof Object.is == "function" ? Object.is : De;
    function Le(e, t) {
      if (Te(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!rr.call(t, d) || !Te(e[d], t[d]))
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
      for (var a = $e(e), l = 0, u = 0; a; ) {
        if (a.nodeType === Ci) {
          if (u = l + a.textContent.length, l <= t && u >= t)
            return {
              node: a,
              offset: t - l
            };
          l = u;
        }
        a = $e(Yn(a));
      }
    }
    function kl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var u = l.anchorNode, d = l.anchorOffset, v = l.focusNode, g = l.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return s0(e, u, d, v, g);
    }
    function s0(e, t, a, l, u) {
      var d = 0, v = -1, g = -1, b = 0, E = 0, _ = e, N = null;
      e:
        for (; ; ) {
          for (var O = null; _ === t && (a === 0 || _.nodeType === Ci) && (v = d + a), _ === l && (u === 0 || _.nodeType === Ci) && (g = d + u), _.nodeType === Ci && (d += _.nodeValue.length), (O = _.firstChild) !== null; )
            N = _, _ = O;
          for (; ; ) {
            if (_ === e)
              break e;
            if (N === t && ++b === a && (v = d), N === l && ++E === u && (g = d), (O = _.nextSibling) !== null)
              break;
            _ = N, N = _.parentNode;
          }
          _ = O;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function ET(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var u = l.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), g = t.end === void 0 ? v : Math.min(t.end, d);
        if (!u.extend && v > g) {
          var b = g;
          g = v, v = b;
        }
        var E = mt(e, v), _ = mt(e, g);
        if (E && _) {
          if (u.rangeCount === 1 && u.anchorNode === E.node && u.anchorOffset === E.offset && u.focusNode === _.node && u.focusOffset === _.offset)
            return;
          var N = a.createRange();
          N.setStart(E.node, E.offset), u.removeAllRanges(), v > g ? (u.addRange(N), u.extend(_.node, _.offset)) : (N.setEnd(_.node, _.offset), u.addRange(N));
        }
      }
    }
    function tx(e) {
      return e && e.nodeType === Ci;
    }
    function nx(e, t) {
      return !e || !t ? !1 : e === t ? !0 : tx(e) ? !1 : tx(t) ? nx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function _T(e) {
      return e && e.ownerDocument && nx(e.ownerDocument.documentElement, e);
    }
    function CT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function rx() {
      for (var e = window, t = mc(); t instanceof e.HTMLIFrameElement; ) {
        if (CT(t))
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
    function TT() {
      var e = rx();
      return {
        focusedElem: e,
        selectionRange: c0(e) ? RT(e) : null
      };
    }
    function kT(e) {
      var t = rx(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && _T(a)) {
        l !== null && c0(a) && DT(a, l);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === Dr && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < u.length; v++) {
          var g = u[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function RT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = kl(e), t || {
        start: 0,
        end: 0
      };
    }
    function DT(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : ET(e, t);
    }
    var OT = Mn && "documentMode" in document && document.documentMode <= 11;
    function MT() {
      kr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, f0 = null, Lp = null, d0 = !1;
    function LT(e) {
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
    function NT(e) {
      return e.window === e ? e.document : e.nodeType === Ia ? e : e.ownerDocument;
    }
    function ax(e, t, a) {
      var l = NT(a);
      if (!(d0 || Df == null || Df !== mc(l))) {
        var u = LT(Df);
        if (!Lp || !Le(Lp, u)) {
          Lp = u;
          var d = Sm(f0, "onSelect");
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
    function UT(e, t, a, l, u, d, v) {
      var g = a ? Uf(a) : window;
      switch (t) {
        case "focusin":
          (ku(g) || g.contentEditable === "true") && (Df = g, f0 = a, Lp = null);
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
          d0 = !1, ax(e, l, u);
          break;
        case "selectionchange":
          if (OT)
            break;
        case "keydown":
        case "keyup":
          ax(e, l, u);
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
    }, p0 = {}, ix = {};
    Mn && (ix = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function ym(e) {
      if (p0[e])
        return p0[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in ix)
          return p0[e] = t[a];
      return e;
    }
    var lx = ym("animationend"), ox = ym("animationiteration"), ux = ym("animationstart"), sx = ym("transitionend"), cx = /* @__PURE__ */ new Map(), fx = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ru(e, t) {
      cx.set(e, t), kr(t, [e]);
    }
    function zT() {
      for (var e = 0; e < fx.length; e++) {
        var t = fx[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Ru(a, "on" + l);
      }
      Ru(lx, "onAnimationEnd"), Ru(ox, "onAnimationIteration"), Ru(ux, "onAnimationStart"), Ru("dblclick", "onDoubleClick"), Ru("focusin", "onFocus"), Ru("focusout", "onBlur"), Ru(sx, "onTransitionEnd");
    }
    function AT(e, t, a, l, u, d, v) {
      var g = cx.get(t);
      if (g !== void 0) {
        var b = pr, E = t;
        switch (t) {
          case "keypress":
            if (yo(l) === 0)
              return;
          case "keydown":
          case "keyup":
            b = n0;
            break;
          case "focusin":
            E = "focus", b = Sf;
            break;
          case "focusout":
            E = "blur", b = Sf;
            break;
          case "beforeblur":
          case "afterblur":
            b = Sf;
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
            b = Cl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = So;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Ta;
            break;
          case lx:
          case ox:
          case ux:
            b = bf;
            break;
          case sx:
            b = a0;
            break;
          case "scroll":
            b = xp;
            break;
          case "wheel":
            b = wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Zg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Tp;
            break;
        }
        var _ = (d & Xl) !== 0;
        {
          var N = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = YT(a, g, l.type, _, N);
          if (O.length > 0) {
            var j = new b(g, E, null, l, u);
            e.push({
              event: j,
              listeners: O
            });
          }
        }
      }
    }
    zT(), H(), Rf(), MT(), dm();
    function FT(e, t, a, l, u, d, v) {
      AT(e, t, a, l, u, d);
      var g = (d & jg) === 0;
      g && (re(e, t, a, l, u), L(e, t, a, l, u), UT(e, t, a, l, u), kf(e, t, a, l, u));
    }
    var Np = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], h0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Np));
    function dx(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Di(l, t, void 0, e), e.currentTarget = null;
    }
    function HT(e, t, a) {
      var l;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], v = d.instance, g = d.currentTarget, b = d.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          dx(e, b, g), l = v;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var _ = t[E], N = _.instance, O = _.currentTarget, j = _.listener;
          if (N !== l && e.isPropagationStopped())
            return;
          dx(e, j, O), l = N;
        }
    }
    function px(e, t) {
      for (var a = (t & Xl) !== 0, l = 0; l < e.length; l++) {
        var u = e[l], d = u.event, v = u.listeners;
        HT(d, v, a);
      }
      Id();
    }
    function jT(e, t, a, l, u) {
      var d = Dc(a), v = [];
      FT(v, e, l, a, d, t), px(v, t);
    }
    function nn(e, t) {
      h0.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = vR(t), u = IT(e, a);
      l.has(u) || (hx(t, e, fs, a), l.add(u));
    }
    function v0(e, t, a) {
      h0.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= Xl), hx(a, e, l, t);
    }
    var gm = "_reactListening" + Math.random().toString(36).slice(2);
    function Up(e) {
      if (!e[gm]) {
        e[gm] = !0, nr.forEach(function(a) {
          a !== "selectionchange" && (h0.has(a) || v0(a, !1, e), v0(a, !0, e));
        });
        var t = e.nodeType === Ia ? e : e.ownerDocument;
        t !== null && (t[gm] || (t[gm] = !0, v0("selectionchange", !1, t)));
      }
    }
    function hx(e, t, a, l, u) {
      var d = bu(e, t, a), v = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Fi(e, t, d, v) : wu(e, t, d) : v !== void 0 ? mf(e, t, d, v) : bp(e, t, d);
    }
    function vx(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function m0(e, t, a, l, u) {
      var d = l;
      if (!(t & ki) && !(t & fs)) {
        var v = u;
        if (l !== null) {
          var g = l;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var b = g.tag;
              if (b === U || b === I) {
                var E = g.stateNode.containerInfo;
                if (vx(E, v))
                  break;
                if (b === I)
                  for (var _ = g.return; _ !== null; ) {
                    var N = _.tag;
                    if (N === U || N === I) {
                      var O = _.stateNode.containerInfo;
                      if (vx(O, v))
                        return;
                    }
                    _ = _.return;
                  }
                for (; E !== null; ) {
                  var j = Is(E);
                  if (j === null)
                    return;
                  var Y = j.tag;
                  if (Y === Q || Y === ne) {
                    g = d = j;
                    continue e;
                  }
                  E = E.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      jd(function() {
        return jT(e, t, a, d);
      });
    }
    function zp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function YT(e, t, a, l, u, d) {
      for (var v = t !== null ? t + "Capture" : null, g = l ? v : t, b = [], E = e, _ = null; E !== null; ) {
        var N = E, O = N.stateNode, j = N.tag;
        if (j === Q && O !== null && (_ = O, g !== null)) {
          var Y = Zl(E, g);
          Y != null && b.push(zp(E, Y, _));
        }
        if (u)
          break;
        E = E.return;
      }
      return b;
    }
    function Sm(e, t) {
      for (var a = t + "Capture", l = [], u = e; u !== null; ) {
        var d = u, v = d.stateNode, g = d.tag;
        if (g === Q && v !== null) {
          var b = v, E = Zl(u, a);
          E != null && l.unshift(zp(u, E, b));
          var _ = Zl(u, t);
          _ != null && l.push(zp(u, _, b));
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
    function PT(e, t) {
      for (var a = e, l = t, u = 0, d = a; d; d = Mf(d))
        u++;
      for (var v = 0, g = l; g; g = Mf(g))
        v++;
      for (; u - v > 0; )
        a = Mf(a), u--;
      for (; v - u > 0; )
        l = Mf(l), v--;
      for (var b = u; b--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Mf(a), l = Mf(l);
      }
      return null;
    }
    function mx(e, t, a, l, u) {
      for (var d = t._reactName, v = [], g = a; g !== null && g !== l; ) {
        var b = g, E = b.alternate, _ = b.stateNode, N = b.tag;
        if (E !== null && E === l)
          break;
        if (N === Q && _ !== null) {
          var O = _;
          if (u) {
            var j = Zl(g, d);
            j != null && v.unshift(zp(g, j, O));
          } else if (!u) {
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
    function VT(e, t, a, l, u) {
      var d = l && u ? PT(l, u) : null;
      l !== null && mx(e, t, l, d, !1), u !== null && a !== null && mx(e, a, u, d, !0);
    }
    function IT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ka = !1, Ap = "dangerouslySetInnerHTML", bm = "suppressContentEditableWarning", Du = "suppressHydrationWarning", yx = "autoFocus", Ps = "children", Vs = "style", xm = "__html", y0, wm, Fp, gx, Em, Sx, bx;
    y0 = {
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
        registrationNameDependencies: Tr,
        possibleRegistrationNames: ei
      });
    }, Sx = Mn && !document.documentMode, Fp = function(e, t, a) {
      if (!ka) {
        var l = _m(a), u = _m(t);
        u !== l && (ka = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(l)));
      }
    }, gx = function(e) {
      if (!ka) {
        ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Em = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, bx = function(e, t) {
      var a = e.namespaceURI === _i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var BT = /\r\n?/g, WT = /\u0000|\uFFFD/g;
    function _m(e) {
      Aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(BT, `
`).replace(WT, "");
    }
    function Cm(e, t, a, l) {
      var u = _m(t), d = _m(e);
      if (d !== u && (l && (ka || (ka = !0, S('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && xn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function xx(e) {
      return e.nodeType === Ia ? e : e.ownerDocument;
    }
    function $T() {
    }
    function Tm(e) {
      e.onclick = $T;
    }
    function GT(e, t, a, l, u) {
      for (var d in l)
        if (l.hasOwnProperty(d)) {
          var v = l[d];
          if (d === Vs)
            v && Object.freeze(v), xv(t, v);
          else if (d === Ap) {
            var g = v ? v[xm] : void 0;
            g != null && cv(t, g);
          } else if (d === Ps)
            if (typeof v == "string") {
              var b = e !== "textarea" || v !== "";
              b && _c(t, v);
            } else
              typeof v == "number" && _c(t, "" + v);
          else
            d === bm || d === Du || d === yx || (Tr.hasOwnProperty(d) ? v != null && (typeof v != "function" && Em(d, v), d === "onScroll" && nn("scroll", t)) : v != null && ri(t, d, v, u));
        }
    }
    function QT(e, t, a, l) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], v = t[u + 1];
        d === Vs ? xv(e, v) : d === Ap ? cv(e, v) : d === Ps ? _c(e, v) : ri(e, d, v, l);
      }
    }
    function qT(e, t, a, l) {
      var u, d = xx(a), v, g = l;
      if (g === _i && (g = wc(e)), g === _i) {
        if (u = Ti(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = d.createElement("div");
          b.innerHTML = "<script><\/script>";
          var E = b.firstChild;
          v = b.removeChild(E);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var _ = v;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        v = d.createElementNS(g, e);
      return g === _i && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !rr.call(y0, e) && (y0[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function XT(e, t) {
      return xx(t).createTextNode(e);
    }
    function KT(e, t, a, l) {
      var u = Ti(t, a);
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
          bc(e, a), d = a;
          break;
        case "select":
          lv(e, a), d = Ed(e, a), nn("invalid", e);
          break;
        case "textarea":
          ov(e, a), d = Cd(e, a), nn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Tc(t, d), GT(t, e, l, d, u), t) {
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
          Rg(e, a);
          break;
        default:
          typeof d.onClick == "function" && Tm(e);
          break;
      }
    }
    function ZT(e, t, a, l, u) {
      wm(t, l);
      var d = null, v, g;
      switch (t) {
        case "input":
          v = as(e, a), g = as(e, l), d = [];
          break;
        case "select":
          v = Ed(e, a), g = Ed(e, l), d = [];
          break;
        case "textarea":
          v = Cd(e, a), g = Cd(e, l), d = [];
          break;
        default:
          v = a, g = l, typeof v.onClick != "function" && typeof g.onClick == "function" && Tm(e);
          break;
      }
      Tc(t, g);
      var b, E, _ = null;
      for (b in v)
        if (!(g.hasOwnProperty(b) || !v.hasOwnProperty(b) || v[b] == null))
          if (b === Vs) {
            var N = v[b];
            for (E in N)
              N.hasOwnProperty(E) && (_ || (_ = {}), _[E] = "");
          } else
            b === Ap || b === Ps || b === bm || b === Du || b === yx || (Tr.hasOwnProperty(b) ? d || (d = []) : (d = d || []).push(b, null));
      for (b in g) {
        var O = g[b], j = v != null ? v[b] : void 0;
        if (!(!g.hasOwnProperty(b) || O === j || O == null && j == null))
          if (b === Vs)
            if (O && Object.freeze(O), j) {
              for (E in j)
                j.hasOwnProperty(E) && (!O || !O.hasOwnProperty(E)) && (_ || (_ = {}), _[E] = "");
              for (E in O)
                O.hasOwnProperty(E) && j[E] !== O[E] && (_ || (_ = {}), _[E] = O[E]);
            } else
              _ || (d || (d = []), d.push(b, _)), _ = O;
          else if (b === Ap) {
            var Y = O ? O[xm] : void 0, B = j ? j[xm] : void 0;
            Y != null && B !== Y && (d = d || []).push(b, Y);
          } else
            b === Ps ? (typeof O == "string" || typeof O == "number") && (d = d || []).push(b, "" + O) : b === bm || b === Du || (Tr.hasOwnProperty(b) ? (O != null && (typeof O != "function" && Em(b, O), b === "onScroll" && nn("scroll", e)), !d && j !== O && (d = [])) : (d = d || []).push(b, O));
      }
      return _ && (ss(_, g[Vs]), (d = d || []).push(Vs, _)), d;
    }
    function JT(e, t, a, l, u) {
      a === "input" && u.type === "radio" && u.name != null && xd(e, u);
      var d = Ti(a, l), v = Ti(a, u);
      switch (QT(e, t, d, v), a) {
        case "input":
          Ko(e, u);
          break;
        case "textarea":
          uv(e, u);
          break;
        case "select":
          Dg(e, u);
          break;
      }
    }
    function ek(e) {
      {
        var t = e.toLowerCase();
        return kc.hasOwnProperty(t) && kc[t] || null;
      }
    }
    function tk(e, t, a, l, u, d, v) {
      var g, b;
      switch (g = Ti(t, a), wm(t, a), t) {
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
          for (var E = 0; E < Np.length; E++)
            nn(Np[E], e);
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
          bc(e, a);
          break;
        case "select":
          lv(e, a), nn("invalid", e);
          break;
        case "textarea":
          ov(e, a), nn("invalid", e);
          break;
      }
      Tc(t, a);
      {
        b = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, N = 0; N < _.length; N++) {
          var O = _[N].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(_[N].name);
          }
        }
      }
      var j = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var B = a[Y];
          if (Y === Ps)
            typeof B == "string" ? e.textContent !== B && (a[Du] !== !0 && Cm(e.textContent, B, d, v), j = [Ps, B]) : typeof B == "number" && e.textContent !== "" + B && (a[Du] !== !0 && Cm(e.textContent, B, d, v), j = [Ps, "" + B]);
          else if (Tr.hasOwnProperty(Y))
            B != null && (typeof B != "function" && Em(Y, B), Y === "onScroll" && nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var xe = void 0, ze = g && Vn ? null : qr(Y);
            if (a[Du] !== !0) {
              if (!(Y === bm || Y === Du || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === Ap) {
                  var Oe = e.innerHTML, pt = B ? B[xm] : void 0;
                  if (pt != null) {
                    var st = bx(e, pt);
                    st !== Oe && Fp(Y, Oe, st);
                  }
                } else if (Y === Vs) {
                  if (b.delete(Y), Sx) {
                    var A = Fg(B);
                    xe = e.getAttribute("style"), A !== xe && Fp(Y, xe, A);
                  }
                } else if (g && !Vn)
                  b.delete(Y.toLowerCase()), xe = Go(e, Y, B), B !== xe && Fp(Y, xe, B);
                else if (!cn(Y, ze, g) && !Ht(Y, B, ze, g)) {
                  var W = !1;
                  if (ze !== null)
                    b.delete(ze.attributeName), xe = Bl(e, Y, B, ze);
                  else {
                    var F = l;
                    if (F === _i && (F = wc(t)), F === _i)
                      b.delete(Y.toLowerCase());
                    else {
                      var J = ek(Y);
                      J !== null && J !== Y && (W = !0, b.delete(J)), b.delete(Y);
                    }
                    xe = Go(e, Y, B);
                  }
                  var we = Vn;
                  !we && B !== xe && !W && Fp(Y, xe, B);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && a[Du] !== !0 && gx(b), t) {
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
          typeof a.onClick == "function" && Tm(e);
          break;
      }
      return j;
    }
    function nk(e, t, a) {
      var l = e.nodeValue !== t;
      return l;
    }
    function g0(e, t) {
      {
        if (ka)
          return;
        ka = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function S0(e, t) {
      {
        if (ka)
          return;
        ka = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function b0(e, t, a) {
      {
        if (ka)
          return;
        ka = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function x0(e, t) {
      {
        if (t === "" || ka)
          return;
        ka = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function rk(e, t, a) {
      switch (t) {
        case "input":
          nv(e, a);
          return;
        case "textarea":
          Td(e, a);
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
      var ak = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], wx = [
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
      ], ik = wx.concat(["button"]), lk = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Ex = {
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
        var a = ot({}, e || Ex), l = {
          tag: t
        };
        return wx.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ik.indexOf(t) !== -1 && (a.pTagInButtonScope = null), ak.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var ok = function(e, t) {
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
            return lk.indexOf(t) === -1;
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
      }, uk = function(e, t) {
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
      }, _x = {};
      Hp = function(e, t, a) {
        a = a || Ex;
        var l = a.current, u = l && l.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = ok(e, u) ? null : l, v = d ? null : uk(e, a), g = d || v;
        if (g) {
          var b = g.tag, E = !!d + "|" + e + "|" + b;
          if (!_x[E]) {
            _x[E] = !0;
            var _ = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", d) {
              var O = "";
              b === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, b, N, O);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, b);
          }
        }
      };
    }
    var km = "suppressHydrationWarning", Rm = "$", Dm = "/$", Yp = "$?", Pp = "$!", sk = "style", w0 = null, E0 = null;
    function ck(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case Ia:
        case Ql: {
          t = l === Ia ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Rd(null, "");
          break;
        }
        default: {
          var d = l === yn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = Rd(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), b = jp(null, g);
        return {
          namespace: a,
          ancestorInfo: b
        };
      }
    }
    function fk(e, t, a) {
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
    function dk(e) {
      w0 = ra(), E0 = TT();
      var t = null;
      return jn(!1), t;
    }
    function pk(e) {
      kT(E0), jn(w0), w0 = null, E0 = null;
    }
    function hk(e, t, a, l, u) {
      var d;
      {
        var v = l;
        if (Hp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, b = jp(v.ancestorInfo, e);
          Hp(null, g, b);
        }
        d = v.namespace;
      }
      var E = qT(e, t, a, d);
      return Bp(u, E), M0(E, t), E;
    }
    function vk(e, t) {
      e.appendChild(t);
    }
    function mk(e, t, a, l, u) {
      switch (KT(e, t, a, l), t) {
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
    function yk(e, t, a, l, u, d) {
      {
        var v = d;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var g = "" + l.children, b = jp(v.ancestorInfo, t);
          Hp(null, g, b);
        }
      }
      return ZT(e, t, a, l);
    }
    function _0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function gk(e, t, a, l) {
      {
        var u = a;
        Hp(null, e, u.ancestorInfo);
      }
      var d = XT(e, t);
      return Bp(l, d), d;
    }
    function Sk() {
      var e = window.event;
      return e === void 0 ? Ui : mr(e.type);
    }
    var C0 = typeof setTimeout == "function" ? setTimeout : void 0, bk = typeof clearTimeout == "function" ? clearTimeout : void 0, T0 = -1, Cx = typeof Promise == "function" ? Promise : void 0, xk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cx < "u" ? function(e) {
      return Cx.resolve(null).then(e).catch(wk);
    } : C0;
    function wk(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ek(e, t, a, l) {
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
    function _k(e, t, a, l, u, d) {
      JT(e, t, a, l, u), M0(e, u);
    }
    function Tx(e) {
      _c(e, "");
    }
    function Ck(e, t, a) {
      e.nodeValue = a;
    }
    function Tk(e, t) {
      e.appendChild(t);
    }
    function kk(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Tm(a);
    }
    function Rk(e, t, a) {
      e.insertBefore(t, a);
    }
    function Dk(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Ok(e, t) {
      e.removeChild(t);
    }
    function Mk(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function k0(e, t) {
      var a = t, l = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === yn) {
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
    function Lk(e, t) {
      e.nodeType === yn ? k0(e.parentNode, t) : e.nodeType === Dr && k0(e, t), ut(e);
    }
    function Nk(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Uk(e) {
      e.nodeValue = "";
    }
    function zk(e, t) {
      e = e;
      var a = t[sk], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Cc("display", l);
    }
    function Ak(e, t) {
      e.nodeValue = t;
    }
    function Fk(e) {
      e.nodeType === Dr ? e.textContent = "" : e.nodeType === Ia && e.documentElement && e.removeChild(e.documentElement);
    }
    function Hk(e, t, a) {
      return e.nodeType !== Dr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jk(e, t) {
      return t === "" || e.nodeType !== Ci ? null : e;
    }
    function Yk(e) {
      return e.nodeType !== yn ? null : e;
    }
    function kx(e) {
      return e.data === Yp;
    }
    function R0(e) {
      return e.data === Pp;
    }
    function Pk(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, u;
      return t && (a = t.dgst, l = t.msg, u = t.stck), {
        message: l,
        digest: a,
        stack: u
      };
    }
    function Vk(e, t) {
      e._reactRetry = t;
    }
    function Om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Dr || t === Ci)
          break;
        if (t === yn) {
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
    function Ik(e) {
      return Om(e.firstChild);
    }
    function Bk(e) {
      return Om(e.firstChild);
    }
    function Wk(e) {
      return Om(e.nextSibling);
    }
    function $k(e, t, a, l, u, d, v) {
      Bp(d, e), M0(e, a);
      var g;
      {
        var b = u;
        g = b.namespace;
      }
      var E = (d.mode & rt) !== He;
      return tk(e, t, a, g, l, E, v);
    }
    function Gk(e, t, a, l) {
      return Bp(a, e), a.mode & rt, nk(e, t);
    }
    function Qk(e, t) {
      Bp(t, e);
    }
    function qk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
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
    function Rx(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
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
    function Xk(e) {
      ut(e);
    }
    function Kk(e) {
      ut(e);
    }
    function Zk(e) {
      return e !== "head" && e !== "body";
    }
    function Jk(e, t, a, l) {
      var u = !0;
      Cm(t.nodeValue, a, l, u);
    }
    function eR(e, t, a, l, u, d) {
      if (t[km] !== !0) {
        var v = !0;
        Cm(l.nodeValue, u, d, v);
      }
    }
    function tR(e, t) {
      t.nodeType === Dr ? g0(e, t) : t.nodeType === yn || S0(e, t);
    }
    function nR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Dr ? g0(a, t) : t.nodeType === yn || S0(a, t));
      }
    }
    function rR(e, t, a, l, u) {
      (u || t[km] !== !0) && (l.nodeType === Dr ? g0(a, l) : l.nodeType === yn || S0(a, l));
    }
    function aR(e, t, a) {
      b0(e, t);
    }
    function iR(e, t) {
      x0(e, t);
    }
    function lR(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && b0(l, t);
      }
    }
    function oR(e, t) {
      {
        var a = e.parentNode;
        a !== null && x0(a, t);
      }
    }
    function uR(e, t, a, l, u, d) {
      (d || t[km] !== !0) && b0(a, l);
    }
    function sR(e, t, a, l, u) {
      (u || t[km] !== !0) && x0(a, l);
    }
    function cR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function fR(e) {
      Up(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, D0 = "__reactProps$" + Lf, Ip = "__reactContainer$" + Lf, O0 = "__reactEvents$" + Lf, dR = "__reactListeners$" + Lf, pR = "__reactHandles$" + Lf;
    function hR(e) {
      delete e[Nf], delete e[D0], delete e[O0], delete e[dR], delete e[pR];
    }
    function Bp(e, t) {
      t[Nf] = e;
    }
    function Mm(e, t) {
      t[Ip] = e;
    }
    function Dx(e) {
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
            for (var u = Rx(e); u !== null; ) {
              var d = u[Nf];
              if (d)
                return d;
              u = Rx(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ou(e) {
      var t = e[Nf] || e[Ip];
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
    var Ox = {}, Mx = f.ReactDebugCurrentFrame;
    function Nm(e) {
      if (e) {
        var t = e._owner, a = Zu(e.type, e._source, t ? t.type : null);
        Mx.setExtraStackFrame(a);
      } else
        Mx.setExtraStackFrame(null);
    }
    function ji(e, t, a, l, u) {
      {
        var d = Function.call.bind(rr);
        for (var v in e)
          if (d(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var b = Error((l || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              g = e[v](t, v, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              g = E;
            }
            g && !(g instanceof Error) && (Nm(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, v, typeof g), Nm(null)), g instanceof Error && !(g.message in Ox) && (Ox[g.message] = !0, Nm(u), S("Failed %s type: %s", a, g.message), Nm(null));
          }
      }
    }
    var L0 = [], Um;
    Um = [];
    var Eo = -1;
    function Mu(e) {
      return {
        current: e
      };
    }
    function Hr(e, t) {
      if (Eo < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Um[Eo] && S("Unexpected Fiber popped."), e.current = L0[Eo], L0[Eo] = null, Um[Eo] = null, Eo--;
    }
    function jr(e, t, a) {
      Eo++, L0[Eo] = e.current, Um[Eo] = a, e.current = t;
    }
    var N0;
    N0 = {};
    var Qa = {};
    Object.freeze(Qa);
    var _o = Mu(Qa), Rl = Mu(!1), U0 = Qa;
    function zf(e, t, a) {
      return a && Dl(t) ? U0 : _o.current;
    }
    function Lx(e, t, a) {
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
          var g = qe(e) || "Unknown";
          ji(l, d, "context", g);
        }
        return u && Lx(e, t, d), d;
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
      Hr(Rl, e), Hr(_o, e);
    }
    function z0(e) {
      Hr(Rl, e), Hr(_o, e);
    }
    function Nx(e, t, a) {
      {
        if (_o.current !== Qa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        jr(_o, t, e), jr(Rl, a, e);
      }
    }
    function Ux(e, t, a) {
      {
        var l = e.stateNode, u = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var d = qe(e) || "Unknown";
            N0[d] || (N0[d] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = l.getChildContext();
        for (var g in v)
          if (!(g in u))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var b = qe(e) || "Unknown";
          ji(u, v, "child context", b);
        }
        return ot({}, a, v);
      }
    }
    function Fm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Qa;
        return U0 = _o.current, jr(_o, a, e), jr(Rl, Rl.current, e), !0;
      }
    }
    function zx(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Ux(e, t, U0);
          l.__reactInternalMemoizedMergedChildContext = u, Hr(Rl, e), Hr(_o, e), jr(_o, u, e), jr(Rl, a, e);
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
    var Lu = 0, Hm = 1, Co = null, A0 = !1, F0 = !1;
    function Ax(e) {
      Co === null ? Co = [e] : Co.push(e);
    }
    function yR(e) {
      A0 = !0, Ax(e);
    }
    function Fx() {
      A0 && Nu();
    }
    function Nu() {
      if (!F0 && Co !== null) {
        F0 = !0;
        var e = 0, t = Ea();
        try {
          var a = !0, l = Co;
          for (Tn(ur); e < l.length; e++) {
            var u = l[e];
            do
              u = u(a);
            while (u !== null);
          }
          Co = null, A0 = !1;
        } catch (d) {
          throw Co !== null && (Co = Co.slice(e + 1)), Ac(Hc, Nu), d;
        } finally {
          Tn(t), F0 = !1;
        }
      }
      return null;
    }
    var Ff = [], Hf = 0, jm = null, Ym = 0, fi = [], di = 0, Bs = null, To = 1, ko = "";
    function gR(e) {
      return $s(), (e.flags & Wd) !== Ue;
    }
    function SR(e) {
      return $s(), Ym;
    }
    function bR() {
      var e = ko, t = To, a = t & ~xR(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      $s(), Ff[Hf++] = Ym, Ff[Hf++] = jm, jm = e, Ym = t;
    }
    function Hx(e, t, a) {
      $s(), fi[di++] = To, fi[di++] = ko, fi[di++] = Bs, Bs = e;
      var l = To, u = ko, d = Pm(l) - 1, v = l & ~(1 << d), g = a + 1, b = Pm(t) + d;
      if (b > 30) {
        var E = d - d % 5, _ = (1 << E) - 1, N = (v & _).toString(32), O = v >> E, j = d - E, Y = Pm(t) + j, B = g << j, xe = B | O, ze = N + u;
        To = 1 << Y | xe, ko = ze;
      } else {
        var Oe = g << d, pt = Oe | v, st = u;
        To = 1 << b | pt, ko = st;
      }
    }
    function H0(e) {
      $s();
      var t = e.return;
      if (t !== null) {
        var a = 1, l = 0;
        Ws(e, a), Hx(e, a, l);
      }
    }
    function Pm(e) {
      return 32 - Bc(e);
    }
    function xR(e) {
      return 1 << Pm(e) - 1;
    }
    function j0(e) {
      for (; e === jm; )
        jm = Ff[--Hf], Ff[Hf] = null, Ym = Ff[--Hf], Ff[Hf] = null;
      for (; e === Bs; )
        Bs = fi[--di], fi[di] = null, ko = fi[--di], fi[di] = null, To = fi[--di], fi[di] = null;
    }
    function wR() {
      return $s(), Bs !== null ? {
        id: To,
        overflow: ko
      } : null;
    }
    function ER(e, t) {
      $s(), fi[di++] = To, fi[di++] = ko, fi[di++] = Bs, To = t.id, ko = t.overflow, Bs = e;
    }
    function $s() {
      gr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var yr = null, pi = null, Yi = !1, Gs = !1, Uu = null;
    function _R() {
      Yi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function jx() {
      Gs = !0;
    }
    function CR() {
      return Gs;
    }
    function TR(e) {
      var t = e.stateNode.containerInfo;
      return pi = Bk(t), yr = e, Yi = !0, Uu = null, Gs = !1, !0;
    }
    function kR(e, t, a) {
      return pi = Wk(t), yr = e, Yi = !0, Uu = null, Gs = !1, a !== null && ER(e, a), !0;
    }
    function Yx(e, t) {
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
    function Px(e, t) {
      Yx(e, t);
      var a = OM();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Et) : l.push(a);
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
            var d = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case Q: {
                var b = t.type, E = t.pendingProps, _ = (e.mode & rt) !== He;
                uR(
                  d,
                  v,
                  g,
                  b,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case ne: {
                var N = t.pendingProps, O = (e.mode & rt) !== He;
                sR(
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
                  t.pendingProps, lR(Y, B);
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
    function Vx(e, t) {
      t.flags = t.flags & ~ga | It, Y0(e, t);
    }
    function Ix(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var l = Hk(t, a);
          return l !== null ? (e.stateNode = l, yr = e, pi = Ik(l), !0) : !1;
        }
        case ne: {
          var u = e.pendingProps, d = jk(t, u);
          return d !== null ? (e.stateNode = d, yr = e, pi = null, !0) : !1;
        }
        case ve: {
          var v = Yk(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: wR(),
              retryLane: Ar
            };
            e.memoizedState = g;
            var b = MM(v);
            return b.return = e, e.child = b, yr = e, pi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function P0(e) {
      return (e.mode & rt) !== He && (e.flags & We) === Ue;
    }
    function V0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function I0(e) {
      if (Yi) {
        var t = pi;
        if (!t) {
          P0(e) && (Y0(yr, e), V0()), Vx(yr, e), Yi = !1, yr = e;
          return;
        }
        var a = t;
        if (!Ix(e, t)) {
          P0(e) && (Y0(yr, e), V0()), t = Vp(a);
          var l = yr;
          if (!t || !Ix(e, t)) {
            Vx(yr, e), Yi = !1, yr = e;
            return;
          }
          Px(l, a);
        }
      }
    }
    function RR(e, t, a) {
      var l = e.stateNode, u = !Gs, d = $k(l, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function DR(e) {
      var t = e.stateNode, a = e.memoizedProps, l = Gk(t, a, e);
      if (l) {
        var u = yr;
        if (u !== null)
          switch (u.tag) {
            case U: {
              var d = u.stateNode.containerInfo, v = (u.mode & rt) !== He;
              Jk(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Q: {
              var g = u.type, b = u.memoizedProps, E = u.stateNode, _ = (u.mode & rt) !== He;
              eR(
                g,
                b,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
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
      Qk(a, e);
    }
    function MR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return qk(a);
    }
    function Bx(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== U && t.tag !== ve; )
        t = t.return;
      yr = t;
    }
    function Vm(e) {
      if (e !== yr)
        return !1;
      if (!Yi)
        return Bx(e), Yi = !0, !1;
      if (e.tag !== U && (e.tag !== Q || Zk(e.type) && !_0(e.type, e.memoizedProps))) {
        var t = pi;
        if (t)
          if (P0(e))
            Wx(e), V0();
          else
            for (; t; )
              Px(e, t), t = Vp(t);
      }
      return Bx(e), e.tag === ve ? pi = MR(e) : pi = yr ? Vp(e.stateNode) : null, !0;
    }
    function LR() {
      return Yi && pi !== null;
    }
    function Wx(e) {
      for (var t = pi; t; )
        Yx(e, t), t = Vp(t);
    }
    function jf() {
      yr = null, pi = null, Yi = !1, Gs = !1;
    }
    function $x() {
      Uu !== null && (YE(Uu), Uu = null);
    }
    function gr() {
      return Yi;
    }
    function B0(e) {
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
        var u = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          u.add(qe(O) || "Component"), qs.add(O.type);
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
          var b = Qs(d);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var E = Qs(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var _ = Qs(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (u.size > 0) {
          var N = Qs(u);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var Im = /* @__PURE__ */ new Map(), Gx = /* @__PURE__ */ new Set();
      Pi.recordLegacyContextWarning = function(e, t) {
        var a = AR(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Gx.has(e.type)) {
          var l = Im.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Im.set(a, l)), l.push(e));
        }
      }, Pi.flushLegacyContextWarning = function() {
        Im.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              l.add(qe(d) || "Component"), Gx.add(d.type);
            });
            var u = Qs(l);
            try {
              Mt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              En();
            }
          }
        });
      }, Pi.discardPendingWarnings = function() {
        $p = [], Gp = [], Qp = [], qp = [], Xp = [], Kp = [], Im = /* @__PURE__ */ new Map();
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
    var W0 = Mu(null), $0;
    $0 = {};
    var Bm = null, Yf = null, G0 = null, Wm = !1;
    function $m() {
      Bm = null, Yf = null, G0 = null, Wm = !1;
    }
    function Qx() {
      Wm = !0;
    }
    function qx() {
      Wm = !1;
    }
    function Xx(e, t, a) {
      jr(W0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $0 && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = $0;
    }
    function Q0(e, t) {
      var a = W0.current;
      Hr(W0, t), e._currentValue = a;
    }
    function q0(e, t, a) {
      for (var l = e; l !== null; ) {
        var u = l.alternate;
        if (fo(l.childLanes, t) ? u !== null && !fo(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (l.childLanes = Ke(l.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
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
                var g = Cn(a), b = Ro(Ft, g);
                b.tag = Qm;
                var E = l.updateQueue;
                if (E !== null) {
                  var _ = E.shared, N = _.pending;
                  N === null ? b.next = b : (b.next = N.next, N.next = b), _.pending = b;
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
            var B = u.sibling;
            if (B !== null) {
              B.return = u.return, u = B;
              break;
            }
            u = u.return;
          }
        l = u;
      }
    }
    function Pf(e, t) {
      Bm = e, Yf = null, G0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Fr(a.lanes, t) && fh(), a.firstContext = null);
      }
    }
    function Pn(e) {
      Wm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (G0 !== e) {
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
    function Kx(e, t, a, l) {
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
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (It | ga)) !== Ue && ZE(e);
      for (var l = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (It | ga)) !== Ue && ZE(e), l = u, u = u.return;
      if (l.tag === U) {
        var d = l.stateNode;
        return d;
      } else
        return null;
    }
    var Zx = 0, Jx = 1, Qm = 2, K0 = 3, qm = !1, Z0, Xm;
    Z0 = !1, Xm = null;
    function J0(e) {
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
        tag: Zx,
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
      if (Xm === u && !Z0 && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Z0 = !0), VO()) {
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
    function eS(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var u = l.updateQueue;
        if (a === u) {
          var d = null, v = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var b = g;
            do {
              var E = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              v === null ? d = v = E : (v.next = E, v = E), b = b.next;
            } while (b !== null);
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
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function IR(e, t, a, l, u, d) {
      switch (a.tag) {
        case Jx: {
          var v = a.payload;
          if (typeof v == "function") {
            Qx();
            var g = v.call(d, l, u);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  v.call(d, l, u);
                } finally {
                  _n(!1);
                }
              }
              qx();
            }
            return g;
          }
          return v;
        }
        case K0:
          e.flags = e.flags & ~An | We;
        case Zx: {
          var b = a.payload, E;
          if (typeof b == "function") {
            Qx(), E = b.call(d, l, u);
            {
              if (e.mode & en) {
                _n(!0);
                try {
                  b.call(d, l, u);
                } finally {
                  _n(!1);
                }
              }
              qx();
            }
          } else
            E = b;
          return E == null ? l : ot({}, l, E);
        }
        case Qm:
          return qm = !0, l;
      }
      return l;
    }
    function Zm(e, t, a, l) {
      var u = e.updateQueue;
      qm = !1, Xm = u.shared;
      var d = u.firstBaseUpdate, v = u.lastBaseUpdate, g = u.shared.pending;
      if (g !== null) {
        u.shared.pending = null;
        var b = g, E = b.next;
        b.next = null, v === null ? d = E : v.next = E, v = b;
        var _ = e.alternate;
        if (_ !== null) {
          var N = _.updateQueue, O = N.lastBaseUpdate;
          O !== v && (O === null ? N.firstBaseUpdate = E : O.next = E, N.lastBaseUpdate = b);
        }
      }
      if (d !== null) {
        var j = u.baseState, Y = $, B = null, xe = null, ze = null, Oe = d;
        do {
          var pt = Oe.lane, st = Oe.eventTime;
          if (fo(l, pt)) {
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
            j = IR(e, u, Oe, j, t, a);
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
            ze === null ? (xe = ze = A, B = j) : ze = ze.next = A, Y = Ke(Y, pt);
          }
          if (Oe = Oe.next, Oe === null) {
            if (g = u.shared.pending, g === null)
              break;
            var we = g, me = we.next;
            we.next = null, Oe = me, u.lastBaseUpdate = we, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (B = j), u.baseState = B, u.firstBaseUpdate = xe, u.lastBaseUpdate = ze;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Qe = Be;
          do
            Y = Ke(Y, Qe.lane), Qe = Qe.next;
          while (Qe !== Be);
        } else
          d === null && (u.shared.lanes = $);
        Eh(Y), e.lanes = Y, e.memoizedState = j;
      }
      Xm = null;
    }
    function BR(e, t) {
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
          v !== null && (d.callback = null, BR(v, a));
        }
    }
    var tS = {}, rw = new i.Component().refs, nS, rS, aS, iS, lS, aw, ey, oS, uS, sS;
    {
      nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set();
      var iw = /* @__PURE__ */ new Set();
      ey = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iw.has(a) || (iw.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aw = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          lS.has(a) || (lS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(tS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(tS);
    }
    function cS(e, t, a, l) {
      var u = e.memoizedState, d = a(l, u);
      {
        if (e.mode & en) {
          _n(!0);
          try {
            d = a(l, u);
          } finally {
            _n(!1);
          }
        }
        aw(t, d);
      }
      var v = d == null ? u : ot({}, u, d);
      if (e.memoizedState = v, e.lanes === $) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var fS = {
      isMounted: ea,
      enqueueSetState: function(e, t, a) {
        var l = ma(e), u = la(), d = Iu(l), v = Ro(u, d);
        v.payload = t, a != null && (ey(a, "setState"), v.callback = a);
        var g = zu(l, v, d);
        g !== null && (er(g, l, d, u), Km(g, l, d)), Sl(l, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = ma(e), u = la(), d = Iu(l), v = Ro(u, d);
        v.tag = Jx, v.payload = t, a != null && (ey(a, "replaceState"), v.callback = a);
        var g = zu(l, v, d);
        g !== null && (er(g, l, d, u), Km(g, l, d)), Sl(l, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ma(e), l = la(), u = Iu(a), d = Ro(l, u);
        d.tag = Qm, t != null && (ey(t, "forceUpdate"), d.callback = t);
        var v = zu(a, d, u);
        v !== null && (er(v, a, u, l), Km(v, a, u)), rp(a, u);
      }
    };
    function lw(e, t, a, l, u, d, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var b = g.shouldComponentUpdate(l, d, v);
        {
          if (e.mode & en) {
            _n(!0);
            try {
              b = g.shouldComponentUpdate(l, d, v);
            } finally {
              _n(!1);
            }
          }
          b === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, l) || !Le(u, d) : !0;
    }
    function WR(e, t, a) {
      var l = e.stateNode;
      {
        var u = zt(t) || "Component", d = l.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), l.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), l.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), l.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !uS.has(t) && (uS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof l.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof l.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof l.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof l.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = l.props !== a;
        l.props !== void 0 && v && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), l.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !aS.has(t) && (aS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof l.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof l.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var g = l.state;
        g && (typeof g != "object" || Un(g)) && S("%s.state: must be set to an object or null", u), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function ow(e, t) {
      t.updater = fS, e.stateNode = t, iu(t, e), t._reactInternalInstance = tS;
    }
    function uw(e, t, a) {
      var l = !1, u = Qa, d = Qa, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === pe && v._context === void 0
        );
        if (!g && !sS.has(t)) {
          sS.add(t);
          var b = "";
          v === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? b = " However, it is set to a " + typeof v + "." : v.$$typeof === K ? b = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", b);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Pn(v);
      else {
        u = zf(e, t, !0);
        var E = t.contextTypes;
        l = E != null, d = l ? Af(e, u) : Qa;
      }
      var _ = new t(a, d);
      if (e.mode & en) {
        _n(!0);
        try {
          _ = new t(a, d);
        } finally {
          _n(!1);
        }
      }
      var N = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      ow(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var O = zt(t) || "Component";
          rS.has(O) || (rS.add(O), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, _.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var j = null, Y = null, B = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? B = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (B = "UNSAFE_componentWillUpdate"), j !== null || Y !== null || B !== null) {
            var xe = zt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            iS.has(xe) || (iS.add(xe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, ze, j !== null ? `
  ` + j : "", Y !== null ? `
  ` + Y : "", B !== null ? `
  ` + B : ""));
          }
        }
      }
      return l && Lx(e, u, d), _;
    }
    function $R(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), fS.enqueueReplaceState(t, t.state, null));
    }
    function sw(e, t, a, l) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== u) {
        {
          var d = qe(e) || "Component";
          nS.has(d) || (nS.add(d), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        fS.enqueueReplaceState(t, t.state, null);
      }
    }
    function dS(e, t, a, l) {
      WR(e, t, a);
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
          var g = zt(t) || "Component";
          oS.has(g) || (oS.add(g), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & en && Pi.recordLegacyContextWarning(e, u), Pi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (cS(e, t, b, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && ($R(e, u), Zm(e, a, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var E = Xe;
        E |= Mr, (e.mode & xa) !== He && (E |= Lr), e.flags |= E;
      }
    }
    function GR(e, t, a, l) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var v = u.context, g = t.contextType, b = Qa;
      if (typeof g == "object" && g !== null)
        b = Pn(g);
      else {
        var E = zf(e, t, !0);
        b = Af(e, E);
      }
      var _ = t.getDerivedStateFromProps, N = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !N && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || v !== b) && sw(e, u, a, b), tw();
      var O = e.memoizedState, j = u.state = O;
      if (Zm(e, a, u, l), j = e.memoizedState, d === a && O === j && !zm() && !Jm()) {
        if (typeof u.componentDidMount == "function") {
          var Y = Xe;
          Y |= Mr, (e.mode & xa) !== He && (Y |= Lr), e.flags |= Y;
        }
        return !1;
      }
      typeof _ == "function" && (cS(e, t, _, a), j = e.memoizedState);
      var B = Jm() || lw(e, t, d, a, O, j, b);
      if (B) {
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
      return u.props = a, u.state = j, u.context = b, B;
    }
    function QR(e, t, a, l, u) {
      var d = t.stateNode;
      ew(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : Vi(t.type, v);
      d.props = g;
      var b = t.pendingProps, E = d.context, _ = a.contextType, N = Qa;
      if (typeof _ == "object" && _ !== null)
        N = Pn(_);
      else {
        var O = zf(t, a, !0);
        N = Af(t, O);
      }
      var j = a.getDerivedStateFromProps, Y = typeof j == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !Y && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== b || E !== N) && sw(t, d, l, N), tw();
      var B = t.memoizedState, xe = d.state = B;
      if (Zm(t, l, d, u), xe = t.memoizedState, v === b && B === xe && !zm() && !Jm() && !Ae)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= ya), !1;
      typeof j == "function" && (cS(t, a, j, l), xe = t.memoizedState);
      var ze = Jm() || lw(t, a, g, l, B, xe, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return ze ? (!Y && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, xe, N), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, xe, N)), typeof d.componentDidUpdate == "function" && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= ya)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= ya), t.memoizedProps = l, t.memoizedState = xe), d.props = l, d.state = xe, d.context = N, ze;
    }
    var pS, hS, vS, mS, yS, cw = function(e, t) {
    };
    pS = !1, hS = !1, vS = {}, mS = {}, yS = {}, cw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        mS[a] || (mS[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
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
          vS[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), vS[u] = !0);
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
          var b = v;
          xi(l, "ref");
          var E = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var _ = function(N) {
            var O = b.refs;
            O === rw && (O = b.refs = {}), N === null ? delete O[E] : O[E] = N;
          };
          return _._stringRef = E, _;
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
        if (yS[t])
          return;
        yS[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dw(e) {
      function t(A, W) {
        if (e) {
          var F = A.deletions;
          F === null ? (A.deletions = [W], A.flags |= Et) : F.push(W);
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
      function u(A, W) {
        var F = ac(A, W);
        return F.index = 0, F.sibling = null, F;
      }
      function d(A, W, F) {
        if (A.index = F, !e)
          return A.flags |= Wd, W;
        var J = A.alternate;
        if (J !== null) {
          var we = J.index;
          return we < W ? (A.flags |= It, W) : we;
        } else
          return A.flags |= It, W;
      }
      function v(A) {
        return e && A.alternate === null && (A.flags |= It), A;
      }
      function g(A, W, F, J) {
        if (W === null || W.tag !== ne) {
          var we = B1(F, A.mode, J);
          return we.return = A, we;
        } else {
          var me = u(W, F);
          return me.return = A, me;
        }
      }
      function b(A, W, F, J) {
        var we = F.type;
        if (we === ja)
          return _(A, W, F.props.children, J, F.key);
        if (W !== null && (W.elementType === we || // Keep this check inline so it only runs on the false path:
        n_(W, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof we == "object" && we !== null && we.$$typeof === Ye && fw(we) === W.type)) {
          var me = u(W, F.props);
          return me.ref = Zp(A, W, F), me.return = A, me._debugSource = F._source, me._debugOwner = F._owner, me;
        }
        var Be = I1(F, A.mode, J);
        return Be.ref = Zp(A, W, F), Be.return = A, Be;
      }
      function E(A, W, F, J) {
        if (W === null || W.tag !== I || W.stateNode.containerInfo !== F.containerInfo || W.stateNode.implementation !== F.implementation) {
          var we = W1(F, A.mode, J);
          return we.return = A, we;
        } else {
          var me = u(W, F.children || []);
          return me.return = A, me;
        }
      }
      function _(A, W, F, J, we) {
        if (W === null || W.tag !== ae) {
          var me = Wu(F, A.mode, J, we);
          return me.return = A, me;
        } else {
          var Be = u(W, F);
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
              var we = I1(W, A.mode, F);
              return we.ref = Zp(A, null, W), we.return = A, we;
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
          if (Un(W) || wi(W)) {
            var Nt = Wu(W, A.mode, F, null);
            return Nt.return = A, Nt;
          }
          ty(A, W);
        }
        return typeof W == "function" && ny(A), null;
      }
      function O(A, W, F, J) {
        var we = W !== null ? W.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return we !== null ? null : g(A, W, "" + F, J);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case tl:
              return F.key === we ? b(A, W, F, J) : null;
            case Xr:
              return F.key === we ? E(A, W, F, J) : null;
            case Ye: {
              var me = F._payload, Be = F._init;
              return O(A, W, Be(me), J);
            }
          }
          if (Un(F) || wi(F))
            return we !== null ? null : _(A, W, F, J, null);
          ty(A, F);
        }
        return typeof F == "function" && ny(A), null;
      }
      function j(A, W, F, J, we) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var me = A.get(F) || null;
          return g(W, me, "" + J, we);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case tl: {
              var Be = A.get(J.key === null ? F : J.key) || null;
              return b(W, Be, J, we);
            }
            case Xr: {
              var Qe = A.get(J.key === null ? F : J.key) || null;
              return E(W, Qe, J, we);
            }
            case Ye:
              var Nt = J._payload, St = J._init;
              return j(A, W, F, St(Nt), we);
          }
          if (Un(J) || wi(J)) {
            var Dn = A.get(F) || null;
            return _(W, Dn, J, we, null);
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
              cw(A, F);
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
              var we = A._payload, me = A._init;
              Y(me(we), W, F);
              break;
          }
        }
        return W;
      }
      function B(A, W, F, J) {
        for (var we = null, me = 0; me < F.length; me++) {
          var Be = F[me];
          we = Y(Be, we, A);
        }
        for (var Qe = null, Nt = null, St = W, Dn = 0, bt = 0, bn = null; St !== null && bt < F.length; bt++) {
          St.index > bt ? (bn = St, St = null) : bn = St.sibling;
          var Pr = O(A, St, F[bt], J);
          if (Pr === null) {
            St === null && (St = bn);
            break;
          }
          e && St && Pr.alternate === null && t(A, St), Dn = d(Pr, Dn, bt), Nt === null ? Qe = Pr : Nt.sibling = Pr, Nt = Pr, St = bn;
        }
        if (bt === F.length) {
          if (a(A, St), gr()) {
            var Cr = bt;
            Ws(A, Cr);
          }
          return Qe;
        }
        if (St === null) {
          for (; bt < F.length; bt++) {
            var Xa = N(A, F[bt], J);
            Xa !== null && (Dn = d(Xa, Dn, bt), Nt === null ? Qe = Xa : Nt.sibling = Xa, Nt = Xa);
          }
          if (gr()) {
            var oa = bt;
            Ws(A, oa);
          }
          return Qe;
        }
        for (var ua = l(A, St); bt < F.length; bt++) {
          var Vr = j(ua, A, bt, F[bt], J);
          Vr !== null && (e && Vr.alternate !== null && ua.delete(Vr.key === null ? bt : Vr.key), Dn = d(Vr, Dn, bt), Nt === null ? Qe = Vr : Nt.sibling = Vr, Nt = Vr);
        }
        if (e && ua.forEach(function(ad) {
          return t(A, ad);
        }), gr()) {
          var Uo = bt;
          Ws(A, Uo);
        }
        return Qe;
      }
      function xe(A, W, F, J) {
        var we = wi(F);
        if (typeof we != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (hS || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hS = !0), F.entries === we && (pS || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pS = !0);
          var me = we.call(F);
          if (me)
            for (var Be = null, Qe = me.next(); !Qe.done; Qe = me.next()) {
              var Nt = Qe.value;
              Be = Y(Nt, Be, A);
            }
        }
        var St = we.call(F);
        if (St == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Dn = null, bt = null, bn = W, Pr = 0, Cr = 0, Xa = null, oa = St.next(); bn !== null && !oa.done; Cr++, oa = St.next()) {
          bn.index > Cr ? (Xa = bn, bn = null) : Xa = bn.sibling;
          var ua = O(A, bn, oa.value, J);
          if (ua === null) {
            bn === null && (bn = Xa);
            break;
          }
          e && bn && ua.alternate === null && t(A, bn), Pr = d(ua, Pr, Cr), bt === null ? Dn = ua : bt.sibling = ua, bt = ua, bn = Xa;
        }
        if (oa.done) {
          if (a(A, bn), gr()) {
            var Vr = Cr;
            Ws(A, Vr);
          }
          return Dn;
        }
        if (bn === null) {
          for (; !oa.done; Cr++, oa = St.next()) {
            var Uo = N(A, oa.value, J);
            Uo !== null && (Pr = d(Uo, Pr, Cr), bt === null ? Dn = Uo : bt.sibling = Uo, bt = Uo);
          }
          if (gr()) {
            var ad = Cr;
            Ws(A, ad);
          }
          return Dn;
        }
        for (var Rh = l(A, bn); !oa.done; Cr++, oa = St.next()) {
          var Fl = j(Rh, A, Cr, oa.value, J);
          Fl !== null && (e && Fl.alternate !== null && Rh.delete(Fl.key === null ? Cr : Fl.key), Pr = d(Fl, Pr, Cr), bt === null ? Dn = Fl : bt.sibling = Fl, bt = Fl);
        }
        if (e && Rh.forEach(function(u2) {
          return t(A, u2);
        }), gr()) {
          var o2 = Cr;
          Ws(A, o2);
        }
        return Dn;
      }
      function ze(A, W, F, J) {
        if (W !== null && W.tag === ne) {
          a(A, W.sibling);
          var we = u(W, F);
          return we.return = A, we;
        }
        a(A, W);
        var me = B1(F, A.mode, J);
        return me.return = A, me;
      }
      function Oe(A, W, F, J) {
        for (var we = F.key, me = W; me !== null; ) {
          if (me.key === we) {
            var Be = F.type;
            if (Be === ja) {
              if (me.tag === ae) {
                a(A, me.sibling);
                var Qe = u(me, F.props.children);
                return Qe.return = A, Qe._debugSource = F._source, Qe._debugOwner = F._owner, Qe;
              }
            } else if (me.elementType === Be || // Keep this check inline so it only runs on the false path:
            n_(me, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === Ye && fw(Be) === me.type) {
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
          var St = Wu(F.props.children, A.mode, J, F.key);
          return St.return = A, St;
        } else {
          var Dn = I1(F, A.mode, J);
          return Dn.ref = Zp(A, W, F), Dn.return = A, Dn;
        }
      }
      function pt(A, W, F, J) {
        for (var we = F.key, me = W; me !== null; ) {
          if (me.key === we)
            if (me.tag === I && me.stateNode.containerInfo === F.containerInfo && me.stateNode.implementation === F.implementation) {
              a(A, me.sibling);
              var Be = u(me, F.children || []);
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
        var we = typeof F == "object" && F !== null && F.type === ja && F.key === null;
        if (we && (F = F.props.children), typeof F == "object" && F !== null) {
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
          if (wi(F))
            return xe(A, W, F, J);
          ty(A, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? v(ze(A, W, "" + F, J)) : (typeof F == "function" && ny(A), a(A, W));
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
        CM(a, t), a = a.sibling;
    }
    var Jp = {}, Au = Mu(Jp), eh = Mu(Jp), ry = Mu(Jp);
    function ay(e) {
      if (e === Jp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function hw() {
      var e = ay(ry.current);
      return e;
    }
    function gS(e, t) {
      jr(ry, t, e), jr(eh, e, e), jr(Au, Jp, e);
      var a = ck(t);
      Hr(Au, e), jr(Au, a, e);
    }
    function If(e) {
      Hr(Au, e), Hr(eh, e), Hr(ry, e);
    }
    function SS() {
      var e = ay(Au.current);
      return e;
    }
    function vw(e) {
      ay(ry.current);
      var t = ay(Au.current), a = fk(t, e.type);
      t !== a && (jr(eh, e, e), jr(Au, a, e));
    }
    function bS(e) {
      eh.current === e && (Hr(Au, e), Hr(eh, e));
    }
    var KR = 0, mw = 1, yw = 1, th = 2, Ii = Mu(KR);
    function xS(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & mw;
    }
    function wS(e, t) {
      return e & mw | t;
    }
    function ZR(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      jr(Ii, t, e);
    }
    function Wf(e) {
      Hr(Ii, e);
    }
    function JR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function iy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || kx(l) || R0(l))
              return t;
          }
        } else if (t.tag === ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & We) !== Ue;
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
    ), Sr = (
      /*   */
      8
    ), ES = [];
    function _S() {
      for (var e = 0; e < ES.length; e++) {
        var t = ES[e];
        t._workInProgressVersionPrimary = null;
      }
      ES.length = 0;
    }
    function eD(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Se = f.ReactCurrentDispatcher, nh = f.ReactCurrentBatchConfig, CS, $f;
    CS = /* @__PURE__ */ new Set();
    var Ks = $, Lt = null, qn = null, Xn = null, ly = !1, rh = !1, ah = 0, tD = 0, nD = 25, G = null, hi = null, Hu = -1, TS = !1;
    function Ct() {
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
      e != null && !Un(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
    }
    function rD(e) {
      {
        var t = qe(Lt);
        if (!CS.has(t) && (CS.add(t), hi !== null)) {
          for (var a = "", l = 30, u = 0; u <= Hu; u++) {
            for (var d = hi[u], v = u === Hu ? e : d, g = u + 1 + ". " + d; g.length < l; )
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
    function kS(e, t) {
      if (TS)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Te(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, l, u, d) {
      Ks = d, Lt = t, hi = e !== null ? e._debugHookTypes : null, Hu = -1, TS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? Se.current = jw : hi !== null ? Se.current = Hw : Se.current = Fw;
      var v = a(l, u);
      if (rh) {
        var g = 0;
        do {
          if (rh = !1, ah = 0, g >= nD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, TS = !1, qn = null, Xn = null, t.updateQueue = null, Hu = -1, Se.current = Yw, v = a(l, u);
        } while (rh);
      }
      Se.current = Sy, t._debugHookTypes = hi;
      var b = qn !== null && qn.next !== null;
      if (Ks = $, Lt = null, qn = null, Xn = null, G = null, hi = null, Hu = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & rt) !== He && S("Internal React error: Expected static flag was missing. Please notify the React team."), ly = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function qf() {
      var e = ah !== 0;
      return ah = 0, e;
    }
    function gw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & xa) !== He ? t.flags &= ~(to | Lr | Xt | Xe) : t.flags &= ~(Xt | Xe), e.lanes = hu(e.lanes, a);
    }
    function Sw() {
      if (Se.current = Sy, ly) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        ly = !1;
      }
      Ks = $, Lt = null, qn = null, Xn = null, hi = null, Hu = -1, G = null, Lw = !1, rh = !1, ah = 0;
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
    function bw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function RS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function DS(e, t, a) {
      var l = Ml(), u;
      a !== void 0 ? u = a(t) : u = t, l.memoizedState = l.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      l.queue = d;
      var v = d.dispatch = oD.bind(null, Lt, d);
      return [l.memoizedState, v];
    }
    function OS(e, t, a) {
      var l = vi(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = qn, v = d.baseQueue, g = u.pending;
      if (g !== null) {
        if (v !== null) {
          var b = v.next, E = g.next;
          v.next = E, g.next = b;
        }
        d.baseQueue !== v && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = g, u.pending = null;
      }
      if (v !== null) {
        var _ = v.next, N = d.baseState, O = null, j = null, Y = null, B = _;
        do {
          var xe = B.lane;
          if (fo(Ks, xe)) {
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
              lane: xe,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            };
            Y === null ? (j = Y = ze, O = N) : Y = Y.next = ze, Lt.lanes = Ke(Lt.lanes, xe), Eh(xe);
          }
          B = B.next;
        } while (B !== null && B !== _);
        Y === null ? O = N : Y.next = j, Te(N, l.memoizedState) || fh(), l.memoizedState = N, l.baseState = O, l.baseQueue = Y, u.lastRenderedState = N;
      }
      var st = u.interleaved;
      if (st !== null) {
        var A = st;
        do {
          var W = A.lane;
          Lt.lanes = Ke(Lt.lanes, W), Eh(W), A = A.next;
        } while (A !== st);
      } else
        v === null && (u.lanes = $);
      var F = u.dispatch;
      return [l.memoizedState, F];
    }
    function MS(e, t, a) {
      var l = vi(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, v = u.pending, g = l.memoizedState;
      if (v !== null) {
        u.pending = null;
        var b = v.next, E = b;
        do {
          var _ = E.action;
          g = e(g, _), E = E.next;
        } while (E !== b);
        Te(g, l.memoizedState) || fh(), l.memoizedState = g, l.baseQueue === null && (l.baseState = g), u.lastRenderedState = g;
      }
      return [g, d];
    }
    function AA(e, t, a) {
    }
    function FA(e, t, a) {
    }
    function LS(e, t, a) {
      var l = Lt, u = Ml(), d, v = gr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), $f || d !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), $f = !0);
      } else {
        if (d = t(), !$f) {
          var g = t();
          Te(d, g) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
        }
        var b = Fy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(b, Ks) || xw(l, t, d);
      }
      u.memoizedState = d;
      var E = {
        value: d,
        getSnapshot: t
      };
      return u.queue = E, fy(Ew.bind(null, l, E, e), [e]), l.flags |= Xt, ih(Gn | Sr, ww.bind(null, l, E, d, t), void 0, null), d;
    }
    function oy(e, t, a) {
      var l = Lt, u = vi(), d = t();
      if (!$f) {
        var v = t();
        Te(d, v) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
      }
      var g = u.memoizedState, b = !Te(g, d);
      b && (u.memoizedState = d, fh());
      var E = u.queue;
      if (oh(Ew.bind(null, l, E, e), [e]), E.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & Gn) {
        l.flags |= Xt, ih(Gn | Sr, ww.bind(null, l, E, d, t), void 0, null);
        var _ = Fy();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(_, Ks) || xw(l, t, d);
      }
      return d;
    }
    function xw(e, t, a) {
      e.flags |= Ss;
      var l = {
        getSnapshot: t,
        value: a
      }, u = Lt.updateQueue;
      if (u === null)
        u = bw(), Lt.updateQueue = u, u.stores = [l];
      else {
        var d = u.stores;
        d === null ? u.stores = [l] : d.push(l);
      }
    }
    function ww(e, t, a, l) {
      t.value = a, t.getSnapshot = l, _w(t) && Cw(e);
    }
    function Ew(e, t, a) {
      var l = function() {
        _w(t) && Cw(e);
      };
      return a(l);
    }
    function _w(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var l = t();
        return !Te(a, l);
      } catch {
        return !0;
      }
    }
    function Cw(e) {
      var t = Ra(e, Ve);
      t !== null && er(t, e, Ve, Ft);
    }
    function uy(e) {
      var t = Ml();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: RS,
        lastRenderedState: e
      };
      t.queue = a;
      var l = a.dispatch = uD.bind(null, Lt, a);
      return [t.memoizedState, l];
    }
    function NS(e) {
      return OS(RS);
    }
    function US(e) {
      return MS(RS);
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
        d = bw(), Lt.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = u.next = u;
        else {
          var g = v.next;
          v.next = u, u.next = g, d.lastEffect = u;
        }
      }
      return u;
    }
    function zS(e) {
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
      var u = Ml(), d = l === void 0 ? null : l;
      Lt.flags |= e, u.memoizedState = ih(Gn | t, a, void 0, d);
    }
    function cy(e, t, a, l) {
      var u = vi(), d = l === void 0 ? null : l, v = void 0;
      if (qn !== null) {
        var g = qn.memoizedState;
        if (v = g.destroy, d !== null) {
          var b = g.deps;
          if (kS(d, b)) {
            u.memoizedState = ih(t, a, v, d);
            return;
          }
        }
      }
      Lt.flags |= e, u.memoizedState = ih(Gn | t, a, v, d);
    }
    function fy(e, t) {
      return (Lt.mode & xa) !== He ? lh(to | Xt | pl, Sr, e, t) : lh(Xt | pl, Sr, e, t);
    }
    function oh(e, t) {
      return cy(Xt, Sr, e, t);
    }
    function AS(e, t) {
      return lh(Xe, Ol, e, t);
    }
    function dy(e, t) {
      return cy(Xe, Ol, e, t);
    }
    function FS(e, t) {
      var a = Xe;
      return a |= Mr, (Lt.mode & xa) !== He && (a |= Lr), lh(a, Qn, e, t);
    }
    function py(e, t) {
      return cy(Xe, Qn, e, t);
    }
    function Tw(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function HS(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null, u = Xe;
      return u |= Mr, (Lt.mode & xa) !== He && (u |= Lr), lh(u, Qn, Tw.bind(null, t, e), l);
    }
    function hy(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return cy(Xe, Qn, Tw.bind(null, t, e), l);
    }
    function aD(e, t) {
    }
    var vy = aD;
    function jS(e, t) {
      var a = Ml(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function my(e, t) {
      var a = vi(), l = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && l !== null) {
        var d = u[1];
        if (kS(l, d))
          return u[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function YS(e, t) {
      var a = Ml(), l = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, l], u;
    }
    function yy(e, t) {
      var a = vi(), l = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && l !== null) {
        var d = u[1];
        if (kS(l, d))
          return u[0];
      }
      var v = e();
      return a.memoizedState = [v, l], v;
    }
    function PS(e) {
      var t = Ml();
      return t.memoizedState = e, e;
    }
    function kw(e) {
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
      var l = !Gg(Ks);
      if (l) {
        if (!Te(a, t)) {
          var u = up();
          Lt.lanes = Ke(Lt.lanes, u), Eh(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, fh()), e.memoizedState = a, a;
    }
    function iD(e, t, a) {
      var l = Ea();
      Tn(sr(l, $n)), e(!0);
      var u = nh.transition;
      nh.transition = {};
      var d = nh.transition;
      nh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(l), nh.transition = u, u === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function VS() {
      var e = uy(!1), t = e[0], a = e[1], l = iD.bind(null, a), u = Ml();
      return u.memoizedState = l, [t, l];
    }
    function Ow() {
      var e = NS(), t = e[0], a = vi(), l = a.memoizedState;
      return [t, l];
    }
    function Mw() {
      var e = US(), t = e[0], a = vi(), l = a.memoizedState;
      return [t, l];
    }
    var Lw = !1;
    function lD() {
      return Lw;
    }
    function IS() {
      var e = Ml(), t = Fy(), a = t.identifierPrefix, l;
      if (gr()) {
        var u = bR();
        l = ":" + a + "R" + u;
        var d = ah++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = tD++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function gy() {
      var e = vi(), t = e.memoizedState;
      return t;
    }
    function oD(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Iu(e), u = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Nw(e))
        Uw(t, u);
      else {
        var d = Kx(e, t, u, l);
        if (d !== null) {
          var v = la();
          er(d, e, l, v), zw(d, t, l);
        }
      }
      Aw(e, l);
    }
    function uD(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Iu(e), u = {
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
        if (e.lanes === $ && (d === null || d.lanes === $)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = Se.current, Se.current = Bi;
            try {
              var b = t.lastRenderedState, E = v(b, a);
              if (u.hasEagerState = !0, u.eagerState = E, Te(E, b)) {
                YR(e, t, u, l);
                return;
              }
            } catch {
            } finally {
              Se.current = g;
            }
          }
        }
        var _ = Kx(e, t, u, l);
        if (_ !== null) {
          var N = la();
          er(_, e, l, N), zw(_, t, l);
        }
      }
      Aw(e, l);
    }
    function Nw(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
    }
    function Uw(e, t) {
      rh = ly = !0;
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
      unstable_isNewReconciler: ue
    }, Fw = null, Hw = null, jw = null, Yw = null, Ll = null, Bi = null, by = null;
    {
      var BS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Fw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ct(), Gf(t), jS(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ct(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ct(), Gf(t), fy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ct(), Gf(a), HS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ct(), Gf(t), AS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ct(), Gf(t), FS(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ct(), Gf(t);
          var a = Se.current;
          Se.current = Ll;
          try {
            return YS(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ct();
          var l = Se.current;
          Se.current = Ll;
          try {
            return DS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ct(), zS(e);
        },
        useState: function(e) {
          G = "useState", Ct();
          var t = Se.current;
          Se.current = Ll;
          try {
            return uy(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ct(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ct(), PS(e);
        },
        useTransition: function() {
          return G = "useTransition", Ct(), VS();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ct(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ct(), LS(e, t, a);
        },
        useId: function() {
          return G = "useId", Ct(), IS();
        },
        unstable_isNewReconciler: ue
      }, Hw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", fe(), jS(e, t);
        },
        useContext: function(e) {
          return G = "useContext", fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", fe(), fy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", fe(), HS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", fe(), AS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", fe(), FS(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", fe();
          var a = Se.current;
          Se.current = Ll;
          try {
            return YS(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = Se.current;
          Se.current = Ll;
          try {
            return DS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", fe(), zS(e);
        },
        useState: function(e) {
          G = "useState", fe();
          var t = Se.current;
          Se.current = Ll;
          try {
            return uy(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), PS(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), VS();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), LS(e, t, a);
        },
        useId: function() {
          return G = "useId", fe(), IS();
        },
        unstable_isNewReconciler: ue
      }, jw = {
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
          return G = "useEffect", fe(), oh(e, t);
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
            return OS(e, t, a);
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
            return NS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), vy();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", fe(), kw(e);
        },
        useTransition: function() {
          return G = "useTransition", fe(), Ow();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", fe(), oy(e, t);
        },
        useId: function() {
          return G = "useId", fe(), gy();
        },
        unstable_isNewReconciler: ue
      }, Yw = {
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
          return G = "useEffect", fe(), oh(e, t);
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
          Se.current = by;
          try {
            return yy(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", fe();
          var l = Se.current;
          Se.current = by;
          try {
            return MS(e, t, a);
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
          Se.current = by;
          try {
            return US(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", fe(), vy();
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
          return G = "useSyncExternalStore", fe(), oy(e, t);
        },
        useId: function() {
          return G = "useId", fe(), gy();
        },
        unstable_isNewReconciler: ue
      }, Ll = {
        readContext: function(e) {
          return BS(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), Ct(), jS(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), Ct(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), Ct(), fy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Ge(), Ct(), HS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Ge(), Ct(), AS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Ge(), Ct(), FS(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Ge(), Ct();
          var a = Se.current;
          Se.current = Ll;
          try {
            return YS(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Ge(), Ct();
          var l = Se.current;
          Se.current = Ll;
          try {
            return DS(e, t, a);
          } finally {
            Se.current = l;
          }
        },
        useRef: function(e) {
          return G = "useRef", Ge(), Ct(), zS(e);
        },
        useState: function(e) {
          G = "useState", Ge(), Ct();
          var t = Se.current;
          Se.current = Ll;
          try {
            return uy(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), Ct(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), Ct(), PS(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), Ct(), VS();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), Ct(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), Ct(), LS(e, t, a);
        },
        useId: function() {
          return G = "useId", Ge(), Ct(), IS();
        },
        unstable_isNewReconciler: ue
      }, Bi = {
        readContext: function(e) {
          return BS(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), fe(), my(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), fe(), oh(e, t);
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
            return OS(e, t, a);
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
            return NS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), fe(), vy();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Ge(), fe(), kw(e);
        },
        useTransition: function() {
          return G = "useTransition", Ge(), fe(), Ow();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Ge(), fe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Ge(), fe(), oy(e, t);
        },
        useId: function() {
          return G = "useId", Ge(), fe(), gy();
        },
        unstable_isNewReconciler: ue
      }, by = {
        readContext: function(e) {
          return BS(), Pn(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Ge(), fe(), my(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Ge(), fe(), Pn(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Ge(), fe(), oh(e, t);
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
            return MS(e, t, a);
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
            return US(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Ge(), fe(), vy();
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
          return G = "useSyncExternalStore", Ge(), fe(), oy(e, t);
        },
        useId: function() {
          return G = "useId", Ge(), fe(), gy();
        },
        unstable_isNewReconciler: ue
      };
    }
    var ju = s.unstable_now, Pw = 0, xy = -1, uh = -1, wy = -1, WS = !1, Ey = !1;
    function Vw() {
      return WS;
    }
    function sD() {
      Ey = !0;
    }
    function cD() {
      WS = !1, Ey = !1;
    }
    function fD() {
      WS = Ey, Ey = !1;
    }
    function Iw() {
      return Pw;
    }
    function Bw() {
      Pw = ju();
    }
    function $S(e) {
      uh = ju(), e.actualStartTime < 0 && (e.actualStartTime = ju());
    }
    function Ww(e) {
      uh = -1;
    }
    function _y(e, t) {
      if (uh >= 0) {
        var a = ju() - uh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), uh = -1;
      }
    }
    function Nl(e) {
      if (xy >= 0) {
        var t = ju() - xy;
        xy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case ye:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function GS(e) {
      if (wy >= 0) {
        var t = ju() - wy;
        wy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case ye:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ul() {
      xy = ju();
    }
    function QS() {
      wy = ju();
    }
    function qS(e) {
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
    function XS(e, t, a) {
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
    function KS(e, t) {
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
        var g = u ? qe(u) : null, b = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === U)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = qe(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var N = b + `
` + v + `

` + ("" + E);
        console.error(N);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var pD = typeof WeakMap == "function" ? WeakMap : Map;
    function $w(e, t, a) {
      var l = Ro(Ft, a);
      l.tag = K0, l.payload = {
        element: null
      };
      var u = t.value;
      return l.callback = function() {
        iM(u), KS(e, t);
      }, l;
    }
    function ZS(e, t, a) {
      var l = Ro(Ft, a);
      l.tag = K0;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        l.payload = function() {
          return u(d);
        }, l.callback = function() {
          r_(e), KS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        r_(e), KS(e, t), typeof u != "function" && rM(this);
        var b = t.value, E = t.stack;
        this.componentDidCatch(b, {
          componentStack: E !== null ? E : ""
        }), typeof u != "function" && (Fr(e.lanes, Ve) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), l;
    }
    function Gw(e, t, a) {
      var l = e.pingCache, u;
      if (l === null ? (l = e.pingCache = new pD(), u = /* @__PURE__ */ new Set(), l.set(t, u)) : (u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = lM.bind(null, e, t, a);
        Wn && _h(e, a), t.then(d, d);
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
          if (e.flags |= We, a.flags |= bs, a.flags &= ~(Nc | Zr), a.tag === M) {
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
      if (a.flags |= Zr, Wn && _h(e, u), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        vD(a), gr() && a.mode & rt && jx();
        var v = Qw(t);
        if (v !== null) {
          v.flags &= ~ln, qw(v, t, a, e, u), v.mode & rt && Gw(e, d, u), hD(v, e, d);
          return;
        } else {
          if (!pu(u)) {
            Gw(e, d, u), M1();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = g;
        }
      } else if (gr() && a.mode & rt) {
        jx();
        var b = Qw(t);
        if (b !== null) {
          (b.flags & An) === Ue && (b.flags |= ln), qw(b, t, a, e, u), B0(Zs(l, a));
          return;
        }
      }
      l = Zs(l, a), qO(l);
      var E = t;
      do {
        switch (E.tag) {
          case U: {
            var _ = l;
            E.flags |= An;
            var N = Cn(u);
            E.lanes = Ke(E.lanes, N);
            var O = $w(E, _, N);
            eS(E, O);
            return;
          }
          case M:
            var j = l, Y = E.type, B = E.stateNode;
            if ((E.flags & We) === Ue && (typeof Y.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && !QE(B))) {
              E.flags |= An;
              var xe = Cn(u);
              E.lanes = Ke(E.lanes, xe);
              var ze = ZS(E, j, xe);
              eS(E, ze);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function yD() {
      return null;
    }
    var sh = f.ReactCurrentOwner, Wi = !1, JS, ch, e1, t1, n1, Js, r1, Cy;
    JS = {}, ch = {}, e1 = {}, t1 = {}, n1 = {}, Js = !1, r1 = {}, Cy = {};
    function aa(e, t, a, l) {
      e === null ? t.child = pw(t, null, a, l) : t.child = Vf(t, e.child, a, l);
    }
    function gD(e, t, a, l) {
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
      var v = a.render, g = t.ref, b, E;
      Pf(t, u), gl(t);
      {
        if (sh.current = t, Va(!0), b = Qf(e, t, v, l, g, u), E = qf(), t.mode & en) {
          _n(!0);
          try {
            b = Qf(e, t, v, l, g, u), E = qf();
          } finally {
            _n(!1);
          }
        }
        Va(!1);
      }
      return no(), e !== null && !Wi ? (gw(e, t, u), Do(e, t, u)) : (gr() && E && H0(t), t.flags |= fl, aa(e, t, b, u), t.child);
    }
    function Kw(e, t, a, l, u) {
      if (e === null) {
        var d = a.type;
        if (EM(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = rd(d), t.tag = he, t.type = v, l1(t, d), Zw(e, t, v, l, u);
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
        var b = V1(a.type, null, l, t, t.mode, u);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var E = a.type, _ = E.propTypes;
        _ && ji(
          _,
          l,
          // Resolved props
          "prop",
          zt(E)
        );
      }
      var N = e.child, O = d1(e, u);
      if (!O) {
        var j = N.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Le, Y(j, l) && e.ref === t.ref)
          return Do(e, t, u);
      }
      t.flags |= fl;
      var B = ac(N, l);
      return B.ref = t.ref, B.return = t, t.child = B, B;
    }
    function Zw(e, t, a, l, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === Ye) {
          var v = d, g = v._payload, b = v._init;
          try {
            d = b(g);
          } catch {
            d = null;
          }
          var E = d && d.propTypes;
          E && ji(
            E,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(d)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Le(_, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Wi = !1, t.pendingProps = l = _, d1(e, u))
            (e.flags & bs) !== Ue && (Wi = !0);
          else
            return t.lanes = e.lanes, Do(e, t, u);
      }
      return a1(e, t, a, l, u);
    }
    function Jw(e, t, a) {
      var l = t.pendingProps, u = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || be)
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
          var g = null, b;
          if (d !== null) {
            var E = d.baseLanes;
            b = Ke(E, a);
          } else
            b = a;
          t.lanes = t.childLanes = Ar;
          var _ = {
            baseLanes: b,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Hy(t, b), null;
        }
      else {
        var j;
        d !== null ? (j = Ke(d.baseLanes, a), t.memoizedState = null) : j = a, Hy(t, j);
      }
      return aa(e, t, u, a), t.child;
    }
    function SD(e, t, a) {
      var l = t.pendingProps;
      return aa(e, t, l, a), t.child;
    }
    function bD(e, t, a) {
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
    function eE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Or, t.flags |= $d);
    }
    function a1(e, t, a, l, u) {
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
      var b, E;
      Pf(t, u), gl(t);
      {
        if (sh.current = t, Va(!0), b = Qf(e, t, a, l, v, u), E = qf(), t.mode & en) {
          _n(!0);
          try {
            b = Qf(e, t, a, l, v, u), E = qf();
          } finally {
            _n(!1);
          }
        }
        Va(!1);
      }
      return no(), e !== null && !Wi ? (gw(e, t, u), Do(e, t, u)) : (gr() && E && H0(t), t.flags |= fl, aa(e, t, b, u), t.child);
    }
    function tE(e, t, a, l, u) {
      {
        switch (HM(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, g = new v(t.memoizedProps, d.context), b = g.state;
            d.updater.enqueueSetState(d, b, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= An;
            var E = new Error("Simulated error coming from DevTools"), _ = Cn(u);
            t.lanes = Ke(t.lanes, _);
            var N = ZS(t, Zs(E, t), _);
            eS(t, N);
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
      var Y = t.stateNode, B;
      Y === null ? (ky(e, t), uw(t, a, l), dS(t, a, l, u), B = !0) : e === null ? B = GR(t, a, l, u) : B = QR(e, t, a, l, u);
      var xe = i1(e, t, a, B, j, u);
      {
        var ze = t.stateNode;
        B && ze.props !== l && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), Js = !0);
      }
      return xe;
    }
    function i1(e, t, a, l, u, d) {
      eE(e, t);
      var v = (t.flags & We) !== Ue;
      if (!l && !v)
        return u && zx(t, a, !1), Do(e, t, d);
      var g = t.stateNode;
      sh.current = t;
      var b;
      if (v && typeof a.getDerivedStateFromError != "function")
        b = null, Ww();
      else {
        gl(t);
        {
          if (Va(!0), b = g.render(), t.mode & en) {
            _n(!0);
            try {
              g.render();
            } finally {
              _n(!1);
            }
          }
          Va(!1);
        }
        no();
      }
      return t.flags |= fl, e !== null && v ? gD(e, t, b, d) : aa(e, t, b, d), t.memoizedState = g.state, u && zx(t, a, !0), t.child;
    }
    function nE(e) {
      var t = e.stateNode;
      t.pendingContext ? Nx(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nx(e, t.context, !1), gS(e, t.containerInfo);
    }
    function wD(e, t, a) {
      if (nE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, u = t.memoizedState, d = u.element;
      ew(e, t), Zm(t, l, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (u.isDehydrated) {
        var b = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, E = t.updateQueue;
        if (E.baseState = b, t.memoizedState = b, t.flags & ln) {
          var _ = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return rE(e, t, g, a, _);
        } else if (g !== d) {
          var N = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return rE(e, t, g, a, N);
        } else {
          TR(t);
          var O = pw(t, null, g, a);
          t.child = O;
          for (var j = O; j; )
            j.flags = j.flags & ~It | ga, j = j.sibling;
        }
      } else {
        if (jf(), g === d)
          return Do(e, t, a);
        aa(e, t, g, a);
      }
      return t.child;
    }
    function rE(e, t, a, l, u) {
      return jf(), B0(u), t.flags |= ln, aa(e, t, a, l), t.child;
    }
    function ED(e, t, a) {
      vw(t), e === null && I0(t);
      var l = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = u.children, g = _0(l, u);
      return g ? v = null : d !== null && _0(l, d) && (t.flags |= _t), eE(e, t), aa(e, t, v, a), t.child;
    }
    function _D(e, t) {
      return e === null && I0(t), null;
    }
    function CD(e, t, a, l) {
      ky(e, t);
      var u = t.pendingProps, d = a, v = d._payload, g = d._init, b = g(v);
      t.type = b;
      var E = t.tag = _M(b), _ = Vi(b, u), N;
      switch (E) {
        case R:
          return l1(t, b), t.type = b = rd(b), N = a1(null, t, b, _, l), N;
        case M:
          return t.type = b = A1(b), N = tE(null, t, b, _, l), N;
        case ee:
          return t.type = b = F1(b), N = Xw(null, t, b, _, l), N;
        case le: {
          if (t.type !== t.elementType) {
            var O = b.propTypes;
            O && ji(
              O,
              _,
              // Resolved for outer only
              "prop",
              zt(b)
            );
          }
          return N = Kw(
            null,
            t,
            b,
            Vi(b.type, _),
            // The inner type can have defaults too
            l
          ), N;
        }
      }
      var j = "";
      throw b !== null && typeof b == "object" && b.$$typeof === Ye && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function TD(e, t, a, l, u) {
      ky(e, t), t.tag = M;
      var d;
      return Dl(a) ? (d = !0, Fm(t)) : d = !1, Pf(t, u), uw(t, a, l), dS(t, a, l, u), i1(null, t, a, !0, d, u);
    }
    function kD(e, t, a, l) {
      ky(e, t);
      var u = t.pendingProps, d;
      {
        var v = zf(t, a, !1);
        d = Af(t, v);
      }
      Pf(t, l);
      var g, b;
      gl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = zt(a) || "Unknown";
          JS[E] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), JS[E] = !0);
        }
        t.mode & en && Pi.recordLegacyContextWarning(t, null), Va(!0), sh.current = t, g = Qf(null, t, a, u, d, l), b = qf(), Va(!1);
      }
      if (no(), t.flags |= fl, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var _ = zt(a) || "Unknown";
        ch[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), ch[_] = !0);
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
        return Dl(a) ? (O = !0, Fm(t)) : O = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, J0(t), ow(t, g), dS(t, a, u, l), i1(null, t, a, !0, O, l);
      } else {
        if (t.tag = R, t.mode & en) {
          _n(!0);
          try {
            g = Qf(null, t, a, u, d, l), b = qf();
          } finally {
            _n(!1);
          }
        }
        return gr() && b && H0(t), aa(null, t, g, l), l1(t, a), t.child;
      }
    }
    function l1(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = ha();
          l && (a += `

Check the render method of \`` + l + "`.");
          var u = l || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), n1[u] || (n1[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
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
    var o1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: ft
    };
    function u1(e) {
      return {
        baseLanes: e,
        cachePool: yD(),
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
      return xS(e, th);
    }
    function OD(e, t) {
      return hu(e.childLanes, t);
    }
    function aE(e, t, a) {
      var l = t.pendingProps;
      jM(t) && (t.flags |= We);
      var u = Ii.current, d = !1, v = (t.flags & We) !== Ue;
      if (v || DD(u, e) ? (d = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (u = ZR(u, yw)), u = Bf(u), Fu(t, u), e === null) {
        I0(t);
        var g = t.memoizedState;
        if (g !== null) {
          var b = g.dehydrated;
          if (b !== null)
            return zD(t, b);
        }
        var E = l.children, _ = l.fallback;
        if (d) {
          var N = MD(t, E, _, a), O = t.child;
          return O.memoizedState = u1(a), t.memoizedState = o1, N;
        } else
          return s1(t, E);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var Y = j.dehydrated;
          if (Y !== null)
            return AD(e, t, v, l, Y, j, a);
        }
        if (d) {
          var B = l.fallback, xe = l.children, ze = ND(e, t, xe, B, a), Oe = t.child, pt = e.child.memoizedState;
          return Oe.memoizedState = pt === null ? u1(a) : RD(pt, a), Oe.childLanes = OD(e, a), t.memoizedState = o1, ze;
        } else {
          var st = l.children, A = LD(e, t, st, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function s1(e, t, a) {
      var l = e.mode, u = {
        mode: "visible",
        children: t
      }, d = c1(u, l);
      return d.return = e, e.child = d, d;
    }
    function MD(e, t, a, l) {
      var u = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, g, b;
      return (u & rt) === He && d !== null ? (g = d, g.childLanes = $, g.pendingProps = v, e.mode & Pe && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), b = Wu(a, u, l, null)) : (g = c1(v, u), b = Wu(a, u, l, null)), g.return = e, b.return = e, g.sibling = b, e.child = g, b;
    }
    function c1(e, t, a) {
      return i_(e, t, $, null);
    }
    function iE(e, t) {
      return ac(e, t);
    }
    function LD(e, t, a, l) {
      var u = e.child, d = u.sibling, v = iE(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & rt) === He && (v.lanes = l), v.return = t, v.sibling = null, d !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [d], t.flags |= Et) : g.push(d);
      }
      return t.child = v, v;
    }
    function ND(e, t, a, l, u) {
      var d = t.mode, v = e.child, g = v.sibling, b = {
        mode: "hidden",
        children: a
      }, E;
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
        var _ = t.child;
        E = _, E.childLanes = $, E.pendingProps = b, t.mode & Pe && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = v.selfBaseDuration, E.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        E = iE(v, b), E.subtreeFlags = v.subtreeFlags & Bn;
      var N;
      return g !== null ? N = ac(g, l) : (N = Wu(l, d, u, null), N.flags |= It), N.return = t, E.return = t, E.sibling = N, t.child = E, N;
    }
    function Ty(e, t, a, l) {
      l !== null && B0(l), Vf(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, v = s1(t, d);
      return v.flags |= It, t.memoizedState = null, v;
    }
    function UD(e, t, a, l, u) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, g = c1(v, d), b = Wu(l, d, u, null);
      return b.flags |= It, g.return = t, b.return = t, g.sibling = b, t.child = g, (t.mode & rt) !== He && Vf(t, e.child, null, u), b;
    }
    function zD(e, t, a) {
      return (e.mode & rt) === He ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : R0(t) ? e.lanes = io : e.lanes = Ar, null;
    }
    function AD(e, t, a, l, u, d, v) {
      if (a)
        if (t.flags & ln) {
          t.flags &= ~ln;
          var A = XS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Ty(e, t, v, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var W = l.children, F = l.fallback, J = UD(e, t, W, F, v), we = t.child;
          return we.memoizedState = u1(v), t.memoizedState = o1, J;
        }
      else {
        if (_R(), (t.mode & rt) === He)
          return Ty(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (R0(u)) {
          var g, b, E;
          {
            var _ = Pk(u);
            g = _.digest, b = _.message, E = _.stack;
          }
          var N;
          b ? N = new Error(b) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = XS(N, g, E);
          return Ty(e, t, v, O);
        }
        var j = Fr(v, e.childLanes);
        if (Wi || j) {
          var Y = Fy();
          if (Y !== null) {
            var B = qg(Y, v);
            if (B !== ft && B !== d.retryLane) {
              d.retryLane = B;
              var xe = Ft;
              Ra(e, B), er(Y, e, B, xe);
            }
          }
          M1();
          var ze = XS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Ty(e, t, v, ze);
        } else if (kx(u)) {
          t.flags |= We, t.child = e.child;
          var Oe = oM.bind(null, e);
          return Vk(u, Oe), null;
        } else {
          kR(t, u, d.treeContext);
          var pt = l.children, st = s1(t, pt);
          return st.flags |= ga, st;
        }
      }
    }
    function lE(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = Ke(l.lanes, t)), q0(e.return, t, a);
    }
    function FD(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ve) {
          var u = l.memoizedState;
          u !== null && lE(l, a, e);
        } else if (l.tag === ht)
          lE(l, a, e);
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
        l !== null && iy(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jD(e) {
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
    function YD(e, t) {
      e !== void 0 && !Cy[e] && (e !== "collapsed" && e !== "hidden" ? (Cy[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cy[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function oE(e, t) {
      {
        var a = Un(e), l = !a && typeof wi(e) == "function";
        if (a || l) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function PD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Un(e)) {
          for (var a = 0; a < e.length; a++)
            if (!oE(e[a], a))
              return;
        } else {
          var l = wi(e);
          if (typeof l == "function") {
            var u = l.call(e);
            if (u)
              for (var d = u.next(), v = 0; !d.done; d = u.next()) {
                if (!oE(d.value, v))
                  return;
                v++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function f1(e, t, a, l, u) {
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
    function uE(e, t, a) {
      var l = t.pendingProps, u = l.revealOrder, d = l.tail, v = l.children;
      jD(u), YD(d, u), PD(v, u), aa(e, t, v, a);
      var g = Ii.current, b = xS(g, th);
      if (b)
        g = wS(g, th), t.flags |= We;
      else {
        var E = e !== null && (e.flags & We) !== Ue;
        E && FD(t, t.child, a), g = Bf(g);
      }
      if (Fu(t, g), (t.mode & rt) === He)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var _ = HD(t.child), N;
            _ === null ? (N = t.child, t.child = null) : (N = _.sibling, _.sibling = null), f1(
              t,
              !1,
              // isBackwards
              N,
              _,
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
    function VD(e, t, a) {
      gS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Vf(t, null, l, a) : aa(e, t, l, a), t.child;
    }
    var sE = !1;
    function ID(e, t, a) {
      var l = t.type, u = l._context, d = t.pendingProps, v = t.memoizedProps, g = d.value;
      {
        "value" in d || sE || (sE = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && ji(b, d, "prop", "Context.Provider");
      }
      if (Xx(t, u, g), v !== null) {
        var E = v.value;
        if (Te(E, g)) {
          if (v.children === d.children && !zm())
            return Do(e, t, a);
        } else
          FR(t, u, a);
      }
      var _ = d.children;
      return aa(e, t, _, a), t.child;
    }
    var cE = !1;
    function BD(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (cE || (cE = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Pf(t, a);
      var v = Pn(l);
      gl(t);
      var g;
      return sh.current = t, Va(!0), g = d(v), Va(!1), no(), t.flags |= fl, aa(e, t, g, a), t.child;
    }
    function fh() {
      Wi = !0;
    }
    function ky(e, t) {
      (t.mode & rt) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= It);
    }
    function Do(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Ww(), Eh(t.lanes), Fr(a, t.childLanes) ? (qR(e, t), t.child) : null;
    }
    function WD(e, t, a) {
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
        return d === null ? (l.deletions = [e], l.flags |= Et) : d.push(e), a.flags |= It, a;
      }
    }
    function d1(e, t) {
      var a = e.lanes;
      return !!Fr(a, t);
    }
    function $D(e, t, a) {
      switch (t.tag) {
        case U:
          nE(t), t.stateNode, jf();
          break;
        case Q:
          vw(t);
          break;
        case M: {
          var l = t.type;
          Dl(l) && Fm(t);
          break;
        }
        case I:
          gS(t, t.stateNode.containerInfo);
          break;
        case ie: {
          var u = t.memoizedProps.value, d = t.type._context;
          Xx(t, d, u);
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
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return Fu(t, Bf(Ii.current)), t.flags |= We, null;
            var E = t.child, _ = E.childLanes;
            if (Fr(a, _))
              return aE(e, t, a);
            Fu(t, Bf(Ii.current));
            var N = Do(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Fu(t, Bf(Ii.current));
          break;
        }
        case ht: {
          var O = (e.flags & We) !== Ue, j = Fr(a, t.childLanes);
          if (O) {
            if (j)
              return uE(e, t, a);
            t.flags |= We;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Fu(t, Ii.current), j)
            break;
          return null;
        }
        case Ie:
        case et:
          return t.lanes = $, Jw(e, t, a);
      }
      return Do(e, t, a);
    }
    function fE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return WD(e, t, V1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, u = t.pendingProps;
        if (l !== u || zm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Wi = !0;
        else {
          var d = d1(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Ue)
            return Wi = !1, $D(e, t, a);
          (e.flags & bs) !== Ue ? Wi = !0 : Wi = !1;
        }
      } else if (Wi = !1, gr() && gR(t)) {
        var v = t.index, g = SR();
        Hx(t, g, v);
      }
      switch (t.lanes = $, t.tag) {
        case P:
          return kD(e, t, t.type, a);
        case it: {
          var b = t.elementType;
          return CD(e, t, b, a);
        }
        case R: {
          var E = t.type, _ = t.pendingProps, N = t.elementType === E ? _ : Vi(E, _);
          return a1(e, t, E, N, a);
        }
        case M: {
          var O = t.type, j = t.pendingProps, Y = t.elementType === O ? j : Vi(O, j);
          return tE(e, t, O, Y, a);
        }
        case U:
          return wD(e, t, a);
        case Q:
          return ED(e, t, a);
        case ne:
          return _D(e, t);
        case ve:
          return aE(e, t, a);
        case I:
          return VD(e, t, a);
        case ee: {
          var B = t.type, xe = t.pendingProps, ze = t.elementType === B ? xe : Vi(B, xe);
          return Xw(e, t, B, ze, a);
        }
        case ae:
          return SD(e, t, a);
        case se:
          return bD(e, t, a);
        case ye:
          return xD(e, t, a);
        case ie:
          return ID(e, t, a);
        case Me:
          return BD(e, t, a);
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
          var W = t.type, F = t.pendingProps, J = t.elementType === W ? F : Vi(W, F);
          return TD(e, t, W, J, a);
        }
        case ht:
          return uE(e, t, a);
        case Vt:
          break;
        case Ie:
          return Jw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= Xe;
    }
    function dE(e) {
      e.flags |= Or, e.flags |= $d;
    }
    var pE, p1, hE, vE;
    pE = function(e, t, a, l) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Q || u.tag === ne)
          vk(e, u.stateNode);
        else if (u.tag !== I) {
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
    }, p1 = function(e, t) {
    }, hE = function(e, t, a, l, u) {
      var d = e.memoizedProps;
      if (d !== l) {
        var v = t.stateNode, g = SS(), b = yk(v, a, d, l, u, g);
        t.updateQueue = b, b && Xf(t);
      }
    }, vE = function(e, t, a, l) {
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
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function br(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, l = Ue;
      if (t) {
        if ((e.mode & Pe) !== He) {
          for (var b = e.selfBaseDuration, E = e.child; E !== null; )
            a = Ke(a, Ke(E.lanes, E.childLanes)), l |= E.subtreeFlags & Bn, l |= E.flags & Bn, b += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = b;
        } else
          for (var _ = e.child; _ !== null; )
            a = Ke(a, Ke(_.lanes, _.childLanes)), l |= _.subtreeFlags & Bn, l |= _.flags & Bn, _.return = e, _ = _.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & Pe) !== He) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = Ke(a, Ke(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, u += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), l |= g.subtreeFlags, l |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = a, t;
    }
    function GD(e, t, a) {
      if (LR() && (t.mode & rt) !== He && (t.flags & We) === Ue)
        return Wx(t), jf(), t.flags |= ln | Zr | An, !1;
      var l = Vm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (OR(t), br(t), (t.mode & Pe) !== He) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (jf(), (t.flags & We) === Ue && (t.memoizedState = null), t.flags |= Xe, br(t), (t.mode & Pe) !== He) {
            var v = a !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return $x(), !0;
    }
    function mE(e, t, a) {
      var l = t.pendingProps;
      switch (j0(t), t.tag) {
        case P:
        case it:
        case he:
        case R:
        case ee:
        case ae:
        case se:
        case ye:
        case Me:
        case le:
          return br(t), null;
        case M: {
          var u = t.type;
          return Dl(u) && Am(t), br(t), null;
        }
        case U: {
          var d = t.stateNode;
          if (If(t), z0(t), _S(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = Vm(t);
            if (v)
              Xf(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ln) !== Ue) && (t.flags |= ya, $x());
            }
          }
          return p1(e, t), br(t), null;
        }
        case Q: {
          bS(t);
          var b = hw(), E = t.type;
          if (e !== null && t.stateNode != null)
            hE(e, t, E, l, b), e.ref !== t.ref && dE(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return br(t), null;
            }
            var _ = SS(), N = Vm(t);
            if (N)
              RR(t, b, _) && Xf(t);
            else {
              var O = hk(E, l, b, _, t);
              pE(O, t, !1, !1), t.stateNode = O, mk(O, E, l, b) && Xf(t);
            }
            t.ref !== null && dE(t);
          }
          return br(t), null;
        }
        case ne: {
          var j = l;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            vE(e, t, Y, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var B = hw(), xe = SS(), ze = Vm(t);
            ze ? DR(t) && Xf(t) : t.stateNode = gk(j, B, xe, t);
          }
          return br(t), null;
        }
        case ve: {
          Wf(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var pt = GD(e, t, Oe);
            if (!pt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & We) !== Ue)
            return t.lanes = a, (t.mode & Pe) !== He && qS(t), t;
          var st = Oe !== null, A = e !== null && e.memoizedState !== null;
          if (st !== A && st) {
            var W = t.child;
            if (W.flags |= dl, (t.mode & rt) !== He) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !yt);
              F || xS(Ii.current, yw) ? QO() : M1();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= Xe), br(t), (t.mode & Pe) !== He && st) {
            var we = t.child;
            we !== null && (t.treeBaseDuration -= we.treeBaseDuration);
          }
          return null;
        }
        case I:
          return If(t), p1(e, t), e === null && fR(t.stateNode.containerInfo), br(t), null;
        case ie:
          var me = t.type._context;
          return Q0(me, t), br(t), null;
        case tt: {
          var Be = t.type;
          return Dl(Be) && Am(t), br(t), null;
        }
        case ht: {
          Wf(t);
          var Qe = t.memoizedState;
          if (Qe === null)
            return br(t), null;
          var Nt = (t.flags & We) !== Ue, St = Qe.rendering;
          if (St === null)
            if (Nt)
              dh(Qe, !1);
            else {
              var Dn = XO() && (e === null || (e.flags & We) === Ue);
              if (!Dn)
                for (var bt = t.child; bt !== null; ) {
                  var bn = iy(bt);
                  if (bn !== null) {
                    Nt = !0, t.flags |= We, dh(Qe, !1);
                    var Pr = bn.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= Xe), t.subtreeFlags = Ue, XR(t, a), Fu(t, wS(Ii.current, th)), t.child;
                  }
                  bt = bt.sibling;
                }
              Qe.tail !== null && Jt() > FE() && (t.flags |= We, Nt = !0, dh(Qe, !1), t.lanes = ip);
            }
          else {
            if (!Nt) {
              var Cr = iy(St);
              if (Cr !== null) {
                t.flags |= We, Nt = !0;
                var Xa = Cr.updateQueue;
                if (Xa !== null && (t.updateQueue = Xa, t.flags |= Xe), dh(Qe, !0), Qe.tail === null && Qe.tailMode === "hidden" && !St.alternate && !gr())
                  return br(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Jt() * 2 - Qe.renderingStartTime > FE() && a !== Ar && (t.flags |= We, Nt = !0, dh(Qe, !1), t.lanes = ip);
            }
            if (Qe.isBackwards)
              St.sibling = t.child, t.child = St;
            else {
              var oa = Qe.last;
              oa !== null ? oa.sibling = St : t.child = St, Qe.last = St;
            }
          }
          if (Qe.tail !== null) {
            var ua = Qe.tail;
            Qe.rendering = ua, Qe.tail = ua.sibling, Qe.renderingStartTime = Jt(), ua.sibling = null;
            var Vr = Ii.current;
            return Nt ? Vr = wS(Vr, th) : Vr = Bf(Vr), Fu(t, Vr), ua;
          }
          return br(t), null;
        }
        case Vt:
          break;
        case Ie:
        case et: {
          O1(t);
          var Uo = t.memoizedState, ad = Uo !== null;
          if (e !== null) {
            var Rh = e.memoizedState, Fl = Rh !== null;
            Fl !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !be && (t.flags |= dl);
          }
          return !ad || (t.mode & rt) === He ? br(t) : Fr(Al, Ar) && (br(t), t.subtreeFlags & (It | Xe) && (t.flags |= dl)), null;
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
          return u & An ? (t.flags = u & ~An | We, (t.mode & Pe) !== He && qS(t), t) : null;
        }
        case U: {
          t.stateNode, If(t), z0(t), _S();
          var d = t.flags;
          return (d & An) !== Ue && (d & We) === Ue ? (t.flags = d & ~An | We, t) : null;
        }
        case Q:
          return bS(t), null;
        case ve: {
          Wf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            jf();
          }
          var g = t.flags;
          return g & An ? (t.flags = g & ~An | We, (t.mode & Pe) !== He && qS(t), t) : null;
        }
        case ht:
          return Wf(t), null;
        case I:
          return If(t), null;
        case ie:
          var b = t.type._context;
          return Q0(b, t), null;
        case Ie:
        case et:
          return O1(t), null;
        case hn:
          return null;
        default:
          return null;
      }
    }
    function yE(e, t, a) {
      switch (j0(t), t.tag) {
        case M: {
          var l = t.type.childContextTypes;
          l != null && Am(t);
          break;
        }
        case U: {
          t.stateNode, If(t), z0(t), _S();
          break;
        }
        case Q: {
          bS(t);
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
          var u = t.type._context;
          Q0(u, t);
          break;
        case Ie:
        case et:
          O1(t);
          break;
      }
    }
    var gE = null;
    gE = /* @__PURE__ */ new Set();
    var Ry = !1, xr = !1, qD = typeof WeakSet == "function" ? WeakSet : Set, ke = null, Kf = null, Zf = null;
    function XD(e) {
      eo(null, function() {
        throw e;
      }), Bd();
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
    function SE(e, t) {
      try {
        Yu(Qn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function h1(e, t, a) {
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
    function bE(e, t) {
      try {
        wE(e);
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
          typeof l == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function Dy(e, t, a) {
      try {
        a();
      } catch (l) {
        Gt(e, t, l);
      }
    }
    var xE = !1;
    function JD(e, t) {
      dk(e.containerInfo), ke = t, eO();
      var a = xE;
      return xE = !1, a;
    }
    function eO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & lu) !== Ue && t !== null ? (t.return = e, ke = t) : tO();
      }
    }
    function tO() {
      for (; ke !== null; ) {
        var e = ke;
        Mt(e);
        try {
          nO(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        En();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function nO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ya) !== Ue) {
        switch (Mt(e), e.tag) {
          case R:
          case ee:
          case he:
            break;
          case M: {
            if (t !== null) {
              var l = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Js && (d.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), d.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : Vi(e.type, l), u);
              {
                var g = gE;
                v === void 0 && !g.has(e.type) && (g.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var b = e.stateNode;
              Fk(b.containerInfo);
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
        En();
      }
    }
    function $i(e, t, a) {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var d = u.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & Sr) !== Da ? Pc(t) : (e & Qn) !== Da && Vc(t), (e & Ol) !== Da && Ch(!0), Dy(t, a, g), (e & Ol) !== Da && Ch(!1), (e & Sr) !== Da ? Pv() : (e & Qn) !== Da && ou());
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
            (e & Sr) !== Da ? Yv(t) : (e & Qn) !== Da && Vv(t);
            var v = d.create;
            (e & Ol) !== Da && Ch(!0), d.destroy = v(), (e & Ol) !== Da && Ch(!1), (e & Sr) !== Da ? np() : (e & Qn) !== Da && Iv();
            {
              var g = d.destroy;
              if (g !== void 0 && typeof g != "function") {
                var b = void 0;
                (d.tag & Qn) !== Ue ? b = "useLayoutEffect" : (d.tag & Ol) !== Ue ? b = "useInsertionEffect" : b = "useEffect";
                var E = void 0;
                g === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? E = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + g, S("%s must not return anything besides a function, which is used for clean-up.%s", b, E);
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
          case ye: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, u = l.id, d = l.onPostCommit, v = Iw(), g = t.alternate === null ? "mount" : "update";
            Vw() && (g = "nested-update"), typeof d == "function" && d(u, g, a, v);
            var b = t.return;
            e:
              for (; b !== null; ) {
                switch (b.tag) {
                  case U:
                    var E = b.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                  case ye:
                    var _ = b.stateNode;
                    _.passiveEffectDuration += a;
                    break e;
                }
                b = b.return;
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
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Pe)
                  try {
                    Ul(), u.componentDidMount();
                  } finally {
                    Nl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Vi(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Pe)
                  try {
                    Ul(), u.componentDidUpdate(d, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Nl(a);
                  }
                else
                  u.componentDidUpdate(d, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), nw(a, g, u));
            break;
          }
          case U: {
            var b = a.updateQueue;
            if (b !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    E = a.child.stateNode;
                    break;
                  case M:
                    E = a.child.stateNode;
                    break;
                }
              nw(a, b, E);
            }
            break;
          }
          case Q: {
            var _ = a.stateNode;
            if (t === null && a.flags & Xe) {
              var N = a.type, O = a.memoizedProps;
              Ek(_, N, O);
            }
            break;
          }
          case ne:
            break;
          case I:
            break;
          case ye: {
            {
              var j = a.memoizedProps, Y = j.onCommit, B = j.onRender, xe = a.stateNode.effectDuration, ze = Iw(), Oe = t === null ? "mount" : "update";
              Vw() && (Oe = "nested-update"), typeof B == "function" && B(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
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
                      case ye:
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
          case Ie:
          case et:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      xr || a.flags & Or && wE(a);
    }
    function iO(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          if (e.mode & Pe)
            try {
              Ul(), SE(e, e.return);
            } finally {
              Nl(e);
            }
          else
            SE(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ZD(e, e.return, t), bE(e, e.return);
          break;
        }
        case Q: {
          bE(e, e.return);
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
              t ? Nk(u) : zk(l.stateNode, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
          }
        } else if (l.tag === ne) {
          if (a === null)
            try {
              var d = l.stateNode;
              t ? Uk(d) : Ak(d, l.memoizedProps);
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
    function wE(e) {
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
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = l;
      }
    }
    function oO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function EE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, EE(t));
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
        if (_E(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _E(e) {
      return e.tag === Q || e.tag === U || e.tag === I;
    }
    function CE(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || _E(t.return))
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
      var t = uO(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & _t && (Tx(a), t.flags &= ~_t);
          var l = CE(e);
          m1(e, l, a);
          break;
        }
        case U:
        case I: {
          var u = t.stateNode.containerInfo, d = CE(e);
          v1(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function v1(e, t, a) {
      var l = e.tag, u = l === Q || l === ne;
      if (u) {
        var d = e.stateNode;
        t ? Dk(a, d, t) : kk(a, d);
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
      var l = e.tag, u = l === Q || l === ne;
      if (u) {
        var d = e.stateNode;
        t ? Rk(a, d, t) : Tk(a, d);
      } else if (l !== I) {
        var v = e.child;
        if (v !== null) {
          m1(v, t, a);
          for (var g = v.sibling; g !== null; )
            m1(g, t, a), g = g.sibling;
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
              case I: {
                wr = l.stateNode.containerInfo, Gi = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        TE(e, t, a), wr = null, Gi = !1;
      }
      oO(a);
    }
    function Pu(e, t, a) {
      for (var l = a.child; l !== null; )
        TE(e, t, l), l = l.sibling;
    }
    function TE(e, t, a) {
      switch (ep(a), a.tag) {
        case Q:
          xr || Jf(a, t);
        case ne: {
          {
            var l = wr, u = Gi;
            wr = null, Pu(e, t, a), wr = l, Gi = u, wr !== null && (Gi ? Mk(wr, a.stateNode) : Ok(wr, a.stateNode));
          }
          return;
        }
        case lt: {
          wr !== null && (Gi ? Lk(wr, a.stateNode) : k0(wr, a.stateNode));
          return;
        }
        case I: {
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
            var g = a.updateQueue;
            if (g !== null) {
              var b = g.lastEffect;
              if (b !== null) {
                var E = b.next, _ = E;
                do {
                  var N = _, O = N.destroy, j = N.tag;
                  O !== void 0 && ((j & Ol) !== Da ? Dy(a, t, O) : (j & Qn) !== Da && (Vc(a), a.mode & Pe ? (Ul(), Dy(a, t, O), Nl(a)) : Dy(a, t, O), ou())), _ = _.next;
                } while (_ !== E);
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
            typeof Y.componentWillUnmount == "function" && h1(a, t, Y);
          }
          Pu(e, t, a);
          return;
        }
        case Vt: {
          Pu(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & rt
          ) {
            var B = xr;
            xr = B || a.memoizedState !== null, Pu(e, t, a), xr = B;
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
            d !== null && Kk(d);
          }
        }
      }
    }
    function kE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new qD()), t.forEach(function(l) {
          var u = uM.bind(null, e, l);
          if (!a.has(l)) {
            if (a.add(l), Wn)
              if (Kf !== null && Zf !== null)
                _h(Zf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(u, u);
          }
        });
      }
    }
    function pO(e, t, a) {
      Kf = a, Zf = e, Mt(t), RE(t, e), Mt(t), Kf = null, Zf = null;
    }
    function Qi(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var d = l[u];
          try {
            cO(e, t, d);
          } catch (b) {
            Gt(d, t, b);
          }
        }
      var v = Tg();
      if (t.subtreeFlags & Nr)
        for (var g = t.child; g !== null; )
          Mt(g), RE(g, e), g = g.sibling;
      Mt(v);
    }
    function RE(e, t, a) {
      var l = e.alternate, u = e.flags;
      switch (e.tag) {
        case R:
        case ee:
        case le:
        case he: {
          if (Qi(t, e), zl(e), u & Xe) {
            try {
              $i(Ol | Gn, e, e.return), Yu(Ol | Gn, e);
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
          Qi(t, e), zl(e), u & Or && l !== null && Jf(l, l.return);
          return;
        }
        case Q: {
          Qi(t, e), zl(e), u & Or && l !== null && Jf(l, l.return);
          {
            if (e.flags & _t) {
              var d = e.stateNode;
              try {
                Tx(d);
              } catch (Be) {
                Gt(e, e.return, Be);
              }
            }
            if (u & Xe) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, b = l !== null ? l.memoizedProps : g, E = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    _k(v, _, E, b, g, e);
                  } catch (Be) {
                    Gt(e, e.return, Be);
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
              Ck(N, j, O);
            } catch (Be) {
              Gt(e, e.return, Be);
            }
          }
          return;
        }
        case U: {
          if (Qi(t, e), zl(e), u & Xe && l !== null) {
            var Y = l.memoizedState;
            if (Y.isDehydrated)
              try {
                Xk(t.containerInfo);
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
            var xe = B.stateNode, ze = B.memoizedState, Oe = ze !== null;
            if (xe.isHidden = Oe, Oe) {
              var pt = B.alternate !== null && B.alternate.memoizedState !== null;
              pt || GO();
            }
          }
          if (u & Xe) {
            try {
              fO(e);
            } catch (Be) {
              Gt(e, e.return, Be);
            }
            kE(e);
          }
          return;
        }
        case Ie: {
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
            var W = e.stateNode, F = e.memoizedState, J = F !== null, we = e;
            if (W.isHidden = J, J && !st && (we.mode & rt) !== He) {
              ke = we;
              for (var me = we.child; me !== null; )
                ke = me, vO(me), me = me.sibling;
            }
            lO(we, J);
          }
          return;
        }
        case ht: {
          Qi(t, e), zl(e), u & Xe && kE(e);
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
      Kf = a, Zf = t, ke = e, DE(e, t, a), Kf = null, Zf = null;
    }
    function DE(e, t, a) {
      for (var l = (e.mode & rt) !== He; ke !== null; ) {
        var u = ke, d = u.child;
        if (u.tag === Ie && l) {
          var v = u.memoizedState !== null, g = v || Ry;
          if (g) {
            y1(e, t, a);
            continue;
          } else {
            var b = u.alternate, E = b !== null && b.memoizedState !== null, _ = E || xr, N = Ry, O = xr;
            Ry = g, xr = _, xr && !O && (ke = u, mO(u));
            for (var j = d; j !== null; )
              ke = j, DE(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            ke = u, Ry = N, xr = O, y1(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & or) !== Ue && d !== null ? (d.return = u, ke = d) : y1(e, t, a);
      }
    }
    function y1(e, t, a) {
      for (; ke !== null; ) {
        var l = ke;
        if ((l.flags & or) !== Ue) {
          var u = l.alternate;
          Mt(l);
          try {
            aO(t, u, l, a);
          } catch (v) {
            Gt(l, l.return, v);
          }
          En();
        }
        if (l === e) {
          ke = null;
          return;
        }
        var d = l.sibling;
        if (d !== null) {
          d.return = l.return, ke = d;
          return;
        }
        ke = l.return;
      }
    }
    function vO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case R:
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
            var u = t.memoizedState !== null;
            if (u) {
              OE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : OE(e);
      }
    }
    function OE(e) {
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
    function mO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Ie) {
          var l = t.memoizedState !== null;
          if (l) {
            ME(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : ME(e);
      }
    }
    function ME(e) {
      for (; ke !== null; ) {
        var t = ke;
        Mt(t);
        try {
          iO(t);
        } catch (l) {
          Gt(t, t.return, l);
        }
        if (En(), t === e) {
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
    function yO(e, t, a, l) {
      ke = t, gO(t, e, a, l);
    }
    function gO(e, t, a, l) {
      for (; ke !== null; ) {
        var u = ke, d = u.child;
        (u.subtreeFlags & Sa) !== Ue && d !== null ? (d.return = u, ke = d) : SO(e, t, a, l);
      }
    }
    function SO(e, t, a, l) {
      for (; ke !== null; ) {
        var u = ke;
        if ((u.flags & Xt) !== Ue) {
          Mt(u);
          try {
            bO(t, u, a, l);
          } catch (v) {
            Gt(u, u.return, v);
          }
          En();
        }
        if (u === e) {
          ke = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, ke = d;
          return;
        }
        ke = u.return;
      }
    }
    function bO(e, t, a, l) {
      switch (t.tag) {
        case R:
        case ee:
        case he: {
          if (t.mode & Pe) {
            QS();
            try {
              Yu(Sr | Gn, t);
            } finally {
              GS(t);
            }
          } else
            Yu(Sr | Gn, t);
          break;
        }
      }
    }
    function xO(e) {
      ke = e, wO();
    }
    function wO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Et) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var u = a[l];
              ke = u, CO(u, e);
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
            ke = e;
          }
        }
        (e.subtreeFlags & Sa) !== Ue && t !== null ? (t.return = e, ke = t) : EO();
      }
    }
    function EO() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & Xt) !== Ue && (Mt(e), _O(e), En());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function _O(e) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          e.mode & Pe ? (QS(), $i(Sr | Gn, e, e.return), GS(e)) : $i(Sr | Gn, e, e.return);
          break;
        }
      }
    }
    function CO(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        Mt(a), kO(a, t), En();
        var l = a.child;
        l !== null ? (l.return = a, ke = l) : TO(e);
      }
    }
    function TO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, l = t.return;
        if (EE(t), t === e) {
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
    function kO(e, t) {
      switch (e.tag) {
        case R:
        case ee:
        case he: {
          e.mode & Pe ? (QS(), $i(Sr, e, t), GS(e)) : $i(Sr, e, t);
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
            Yu(Sr | Gn, e);
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
        case R:
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
    function LE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && UO.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var AO = Math.ceil, g1 = f.ReactCurrentDispatcher, S1 = f.ReactCurrentOwner, Er = f.ReactCurrentBatchConfig, qi = f.ReactCurrentActQueue, Kn = (
      /*             */
      0
    ), NE = (
      /*               */
      1
    ), _r = (
      /*                */
      2
    ), mi = (
      /*                */
      4
    ), Oo = 0, hh = 1, ec = 2, Oy = 3, vh = 4, UE = 5, b1 = 6, dt = Kn, ia = null, pn = null, Zn = $, Al = $, x1 = Mu($), Jn = Oo, mh = null, My = $, yh = $, Ly = $, gh = null, Oa = null, w1 = 0, zE = 500, AE = 1 / 0, FO = 500, Mo = null;
    function Sh() {
      AE = Jt() + FO;
    }
    function FE() {
      return AE;
    }
    var Ny = !1, E1 = null, ed = null, tc = !1, Vu = null, bh = $, _1 = [], C1 = null, HO = 50, xh = 0, T1 = null, k1 = !1, Uy = !1, jO = 50, td = 0, zy = null, wh = Ft, Ay = $, HE = !1;
    function Fy() {
      return ia;
    }
    function la() {
      return (dt & (_r | mi)) !== Kn ? Jt() : (wh !== Ft || (wh = Jt()), wh);
    }
    function Iu(e) {
      var t = e.mode;
      if ((t & rt) === He)
        return Ve;
      if ((dt & _r) !== Kn && Zn !== $)
        return Cn(Zn);
      var a = zR() !== UR;
      if (a) {
        if (Er.transition !== null) {
          var l = Er.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return Ay === ft && (Ay = up()), Ay;
      }
      var u = Ea();
      if (u !== ft)
        return u;
      var d = Sk();
      return d;
    }
    function YO(e) {
      var t = e.mode;
      return (t & rt) === He ? Ve : Qg();
    }
    function er(e, t, a, l) {
      cM(), HE && S("useInsertionEffect must not schedule updates."), k1 && (Uy = !0), po(e, a, l), (dt & _r) !== $ && e === ia ? pM(t) : (Wn && pp(e, t, a), hM(t), e === ia && ((dt & _r) === Kn && (yh = Ke(yh, a)), Jn === vh && Bu(e, Zn)), Ma(e, l), a === Ve && dt === Kn && (t.mode & rt) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !qi.isBatchingLegacy && (Sh(), Fx()));
    }
    function PO(e, t, a) {
      var l = e.current;
      l.lanes = t, po(e, t, a), Ma(e, a);
    }
    function VO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (dt & _r) !== Kn
      );
    }
    function Ma(e, t) {
      var a = e.callbackNode;
      Wg(e, t);
      var l = Ts(e, e === ia ? Zn : $);
      if (l === $) {
        a !== null && e_(a), e.callbackNode = null, e.callbackPriority = ft;
        return;
      }
      var u = gn(l), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(qi.current !== null && a !== U1)) {
        a == null && d !== Ve && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && e_(a);
      var v;
      if (u === Ve)
        e.tag === Lu ? (qi.isBatchingLegacy !== null && (qi.didScheduleLegacyUpdate = !0), yR(PE.bind(null, e))) : Ax(PE.bind(null, e)), qi.current !== null ? qi.current.push(Nu) : xk(function() {
          (dt & (_r | mi)) === Kn && Nu();
        }), v = null;
      else {
        var g;
        switch (Ms(l)) {
          case ur:
            g = Hc;
            break;
          case $n:
            g = ta;
            break;
          case Ui:
            g = li;
            break;
          case Ds:
            g = hl;
            break;
          default:
            g = li;
            break;
        }
        v = z1(g, jE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function jE(e, t) {
      if (cD(), wh = Ft, Ay = $, (dt & (_r | mi)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = No();
      if (l && e.callbackNode !== a)
        return null;
      var u = Ts(e, e === ia ? Zn : $);
      if (u === $)
        return null;
      var d = !Rs(e, u) && !qv(e, u) && !t, v = d ? ZO(e, u) : jy(e, u);
      if (v !== Oo) {
        if (v === ec) {
          var g = lp(e);
          g !== $ && (u = g, v = R1(e, g));
        }
        if (v === hh) {
          var b = mh;
          throw nc(e, $), Bu(e, u), Ma(e, Jt()), b;
        }
        if (v === b1)
          Bu(e, u);
        else {
          var E = !Rs(e, u), _ = e.current.alternate;
          if (E && !BO(_)) {
            if (v = jy(e, u), v === ec) {
              var N = lp(e);
              N !== $ && (u = N, v = R1(e, N));
            }
            if (v === hh) {
              var O = mh;
              throw nc(e, $), Bu(e, u), Ma(e, Jt()), O;
            }
          }
          e.finishedWork = _, e.finishedLanes = u, IO(e, v, u);
        }
      }
      return Ma(e, Jt()), e.callbackNode === a ? jE.bind(null, e) : null;
    }
    function R1(e, t) {
      var a = gh;
      if (kn(e)) {
        var l = nc(e, t);
        l.flags |= ln, cR(e.containerInfo);
      }
      var u = jy(e, t);
      if (u !== ec) {
        var d = Oa;
        Oa = a, d !== null && YE(d);
      }
      return u;
    }
    function YE(e) {
      Oa === null ? Oa = e : Oa.push.apply(Oa, e);
    }
    function IO(e, t, a) {
      switch (t) {
        case Oo:
        case hh:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Oa, Mo);
          break;
        }
        case Oy: {
          if (Bu(e, a), sf(a) && // do not delay if we're inside an act() scope
          !t_()) {
            var l = w1 + zE - Jt();
            if (l > 10) {
              var u = Ts(e, $);
              if (u !== $)
                break;
              var d = e.suspendedLanes;
              if (!fo(d, a)) {
                la(), fp(e, d);
                break;
              }
              e.timeoutHandle = C0(rc.bind(null, e, Oa, Mo), l);
              break;
            }
          }
          rc(e, Oa, Mo);
          break;
        }
        case vh: {
          if (Bu(e, a), Qv(a))
            break;
          if (!t_()) {
            var v = Gv(e, a), g = v, b = Jt() - g, E = sM(b) - b;
            if (E > 10) {
              e.timeoutHandle = C0(rc.bind(null, e, Oa, Mo), E);
              break;
            }
          }
          rc(e, Oa, Mo);
          break;
        }
        case UE: {
          rc(e, Oa, Mo);
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
              for (var u = 0; u < l.length; u++) {
                var d = l[u], v = d.getSnapshot, g = d.value;
                try {
                  if (!Te(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & Ss && b !== null) {
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
    function Bu(e, t) {
      t = hu(t, Ly), t = hu(t, yh), cp(e, t);
    }
    function PE(e) {
      if (fD(), (dt & (_r | mi)) !== Kn)
        throw new Error("Should not already be working.");
      No();
      var t = Ts(e, $);
      if (!Fr(t, Ve))
        return Ma(e, Jt()), null;
      var a = jy(e, t);
      if (e.tag !== Lu && a === ec) {
        var l = lp(e);
        l !== $ && (t = l, a = R1(e, l));
      }
      if (a === hh) {
        var u = mh;
        throw nc(e, $), Bu(e, t), Ma(e, Jt()), u;
      }
      if (a === b1)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, rc(e, Oa, Mo), Ma(e, Jt()), null;
    }
    function WO(e, t) {
      t !== $ && (vu(e, Ke(t, Ve)), Ma(e, Jt()), (dt & (_r | mi)) === Kn && (Sh(), Nu()));
    }
    function D1(e, t) {
      var a = dt;
      dt |= NE;
      try {
        return e(t);
      } finally {
        dt = a, dt === Kn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !qi.isBatchingLegacy && (Sh(), Fx());
      }
    }
    function $O(e, t, a, l, u) {
      var d = Ea(), v = Er.transition;
      try {
        return Er.transition = null, Tn(ur), e(t, a, l, u);
      } finally {
        Tn(d), Er.transition = v, dt === Kn && Sh();
      }
    }
    function Lo(e) {
      Vu !== null && Vu.tag === Lu && (dt & (_r | mi)) === Kn && No();
      var t = dt;
      dt |= NE;
      var a = Er.transition, l = Ea();
      try {
        return Er.transition = null, Tn(ur), e ? e() : void 0;
      } finally {
        Tn(l), Er.transition = a, dt = t, (dt & (_r | mi)) === Kn && Nu();
      }
    }
    function VE() {
      return (dt & (_r | mi)) !== Kn;
    }
    function Hy(e, t) {
      jr(x1, Al, e), Al = Ke(Al, t);
    }
    function O1(e) {
      Al = x1.current, Hr(x1, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== T0 && (e.timeoutHandle = T0, bk(a)), pn !== null)
        for (var l = pn.return; l !== null; ) {
          var u = l.alternate;
          yE(u, l), l = l.return;
        }
      ia = e;
      var d = ac(e.current, null);
      return pn = d, Zn = Al = t, Jn = Oo, mh = null, My = $, yh = $, Ly = $, gh = null, Oa = null, jR(), Pi.discardPendingWarnings(), d;
    }
    function IE(e, t) {
      do {
        var a = pn;
        try {
          if ($m(), Sw(), En(), S1.current = null, a === null || a.return === null) {
            Jn = hh, mh = t, pn = null;
            return;
          }
          if (wn && a.mode & Pe && _y(a, !0), Ja)
            if (no(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              Bv(a, l, Zn);
            } else
              Ic(a, t, Zn);
          mD(e, a.return, a, t, Zn), GE(a);
        } catch (u) {
          t = u, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
          continue;
        }
        return;
      } while (!0);
    }
    function BE() {
      var e = g1.current;
      return g1.current = Sy, e === null ? Sy : e;
    }
    function WE(e) {
      g1.current = e;
    }
    function GO() {
      w1 = Jt();
    }
    function Eh(e) {
      My = Ke(e, My);
    }
    function QO() {
      Jn === Oo && (Jn = Oy);
    }
    function M1() {
      (Jn === Oo || Jn === Oy || Jn === ec) && (Jn = vh), ia !== null && (ks(My) || ks(yh)) && Bu(ia, Zn);
    }
    function qO(e) {
      Jn !== vh && (Jn = ec), gh === null ? gh = [e] : gh.push(e);
    }
    function XO() {
      return Jn === Oo;
    }
    function jy(e, t) {
      var a = dt;
      dt |= _r;
      var l = BE();
      if (ia !== e || Zn !== t) {
        if (Wn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (_h(e, Zn), u.clear()), df(e, t);
        }
        Mo = hp(), nc(e, t);
      }
      $a(t);
      do
        try {
          KO();
          break;
        } catch (d) {
          IE(e, d);
        }
      while (!0);
      if ($m(), dt = a, WE(l), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return su(), ia = null, Zn = $, Jn;
    }
    function KO() {
      for (; pn !== null; )
        $E(pn);
    }
    function ZO(e, t) {
      var a = dt;
      dt |= _r;
      var l = BE();
      if (ia !== e || Zn !== t) {
        if (Wn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (_h(e, Zn), u.clear()), df(e, t);
        }
        Mo = hp(), Sh(), nc(e, t);
      }
      $a(t);
      do
        try {
          JO();
          break;
        } catch (d) {
          IE(e, d);
        }
      while (!0);
      return $m(), WE(l), dt = a, pn !== null ? (ws(), Oo) : (su(), ia = null, Zn = $, Jn);
    }
    function JO() {
      for (; pn !== null && !Fc(); )
        $E(pn);
    }
    function $E(e) {
      var t = e.alternate;
      Mt(e);
      var a;
      (e.mode & Pe) !== He ? ($S(e), a = L1(t, e, Al), _y(e, !0)) : a = L1(t, e, Al), En(), e.memoizedProps = e.pendingProps, a === null ? GE(e) : pn = a, S1.current = null;
    }
    function GE(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & Zr) === Ue) {
          Mt(t);
          var u = void 0;
          if ((t.mode & Pe) === He ? u = mE(a, t, Al) : ($S(t), u = mE(a, t, Al), _y(t, !1)), En(), u !== null) {
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
            _y(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= Zr, l.subtreeFlags = Ue, l.deletions = null;
          else {
            Jn = b1, pn = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          pn = b;
          return;
        }
        t = l, pn = t;
      } while (t !== null);
      Jn === Oo && (Jn = UE);
    }
    function rc(e, t, a) {
      var l = Ea(), u = Er.transition;
      try {
        Er.transition = null, Tn(ur), eM(e, t, a, l);
      } finally {
        Er.transition = u, Tn(l);
      }
      return null;
    }
    function eM(e, t, a, l) {
      do
        No();
      while (Vu !== null);
      if (fM(), (dt & (_r | mi)) !== Kn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Yc(d), u === null)
        return tp(), null;
      if (d === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ft;
      var v = Ke(u.lanes, u.childLanes);
      dp(e, v), e === ia && (ia = null, pn = null, Zn = $), ((u.subtreeFlags & Sa) !== Ue || (u.flags & Sa) !== Ue) && (tc || (tc = !0, C1 = a, z1(li, function() {
        return No(), null;
      })));
      var g = (u.subtreeFlags & (lu | Nr | or | Sa)) !== Ue, b = (u.flags & (lu | Nr | or | Sa)) !== Ue;
      if (g || b) {
        var E = Er.transition;
        Er.transition = null;
        var _ = Ea();
        Tn(ur);
        var N = dt;
        dt |= mi, S1.current = null, JD(e, u), Bw(), pO(e, u, d), pk(e.containerInfo), e.current = u, Wv(d), hO(u, e, d), uu(), Hv(), dt = N, Tn(_), Er.transition = E;
      } else
        e.current = u, Bw();
      var O = tc;
      if (tc ? (tc = !1, Vu = e, bh = d) : (td = 0, zy = null), v = e.pendingLanes, v === $ && (ed = null), O || KE(e.current, !1), Mi(u.stateNode, l), Wn && e.memoizedUpdaters.clear(), NO(), Ma(e, Jt()), t !== null)
        for (var j = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var B = t[Y], xe = B.stack, ze = B.digest;
          j(B.value, {
            componentStack: xe,
            digest: ze
          });
        }
      if (Ny) {
        Ny = !1;
        var Oe = E1;
        throw E1 = null, Oe;
      }
      return Fr(bh, Ve) && e.tag !== Lu && No(), v = e.pendingLanes, Fr(v, Ve) ? (sD(), e === T1 ? xh++ : (xh = 0, T1 = e)) : xh = 0, Nu(), tp(), null;
    }
    function No() {
      if (Vu !== null) {
        var e = Ms(bh), t = Xg(Ui, e), a = Er.transition, l = Ea();
        try {
          return Er.transition = null, Tn(t), nM();
        } finally {
          Tn(l), Er.transition = a;
        }
      }
      return !1;
    }
    function tM(e) {
      _1.push(e), tc || (tc = !0, z1(li, function() {
        return No(), null;
      }));
    }
    function nM() {
      if (Vu === null)
        return !1;
      var e = C1;
      C1 = null;
      var t = Vu, a = bh;
      if (Vu = null, bh = $, (dt & (_r | mi)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      k1 = !0, Uy = !1, $v(a);
      var l = dt;
      dt |= mi, xO(t.current), yO(t, t.current, a, e);
      {
        var u = _1;
        _1 = [];
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          rO(t, v);
        }
      }
      xs(), KE(t.current, !0), dt = l, Nu(), Uy ? t === zy ? td++ : (td = 0, zy = t) : td = 0, k1 = !1, Uy = !1, ml(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function QE(e) {
      return ed !== null && ed.has(e);
    }
    function rM(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function aM(e) {
      Ny || (Ny = !0, E1 = e);
    }
    var iM = aM;
    function qE(e, t, a) {
      var l = Zs(a, t), u = $w(e, l, Ve), d = zu(e, u, Ve), v = la();
      d !== null && (po(d, Ve, v), Ma(d, v));
    }
    function Gt(e, t, a) {
      if (XD(a), Ch(!1), e.tag === U) {
        qE(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === U) {
          qE(l, e, a);
          return;
        } else if (l.tag === M) {
          var u = l.type, d = l.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !QE(d)) {
            var v = Zs(a, e), g = ZS(l, v, Ve), b = zu(l, g, Ve), E = la();
            b !== null && (po(b, Ve, E), Ma(b, E));
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
      var u = la();
      fp(e, a), vM(e), ia === e && fo(Zn, a) && (Jn === vh || Jn === Oy && sf(Zn) && Jt() - w1 < zE ? nc(e, $) : Ly = Ke(Ly, a)), Ma(e, u);
    }
    function XE(e, t) {
      t === ft && (t = YO(e));
      var a = la(), l = Ra(e, t);
      l !== null && (po(l, t, a), Ma(l, a));
    }
    function oM(e) {
      var t = e.memoizedState, a = ft;
      t !== null && (a = t.retryLane), XE(e, a);
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
      l !== null && l.delete(t), XE(e, a);
    }
    function sM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : AO(e / 1960) * 1960;
    }
    function cM() {
      if (xh > HO)
        throw xh = 0, T1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > jO && (td = 0, zy = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function fM() {
      Pi.flushLegacyContextWarning(), Pi.flushPendingUnsafeLifecycleWarnings();
    }
    function KE(e, t) {
      Mt(e), Yy(e, Lr, OO), t && Yy(e, to, MO), Yy(e, Lr, RO), t && Yy(e, to, DO), En();
    }
    function Yy(e, t, a) {
      for (var l = e, u = null; l !== null; ) {
        var d = l.subtreeFlags & t;
        l !== u && l.child !== null && d !== Ue ? l = l.child : ((l.flags & t) !== Ue && a(l), l.sibling !== null ? l = l.sibling : l = u = l.return);
      }
    }
    var Py = null;
    function ZE(e) {
      {
        if ((dt & _r) !== Kn || !(e.mode & rt))
          return;
        var t = e.tag;
        if (t !== P && t !== U && t !== M && t !== R && t !== ee && t !== le && t !== he)
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
          l ? Mt(e) : En();
        }
      }
    }
    var L1;
    {
      var dM = null;
      L1 = function(e, t, a) {
        var l = l_(dM, t);
        try {
          return fE(e, t, a);
        } catch (d) {
          if (CR() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if ($m(), Sw(), yE(e, t), l_(t, l), t.mode & Pe && $S(t), eo(null, fE, null, e, t, a), Ig()) {
            var u = Bd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var JE = !1, N1;
    N1 = /* @__PURE__ */ new Set();
    function pM(e) {
      if (pa && !lD())
        switch (e.tag) {
          case R:
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
            JE || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), JE = !0);
            break;
          }
        }
    }
    function _h(e, t) {
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
    function e_(e) {
      if (e !== U1)
        return Fv(e);
    }
    function t_() {
      return qi.current !== null;
    }
    function hM(e) {
      {
        if (e.mode & rt) {
          if (!LE())
            return;
        } else if (!zO() || dt !== Kn || e.tag !== R && e.tag !== ee && e.tag !== he)
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
            t ? Mt(e) : En();
          }
        }
      }
    }
    function vM(e) {
      e.tag !== Lu && LE() && qi.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ch(e) {
      HE = e;
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
    function n_(e, t) {
      {
        if (yi === null)
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
          var v = yi(a);
          if (v !== void 0 && v === yi(l))
            return !0;
        }
        return !1;
      }
    }
    function r_(e) {
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
        No(), Lo(function() {
          H1(e.current, l, a);
        });
      }
    }, gM = function(e, t) {
      {
        if (e.context !== Qa)
          return;
        No(), Lo(function() {
          Th(t, e, null, null);
        });
      }
    };
    function H1(e, t, a) {
      {
        var l = e.alternate, u = e.child, d = e.sibling, v = e.tag, g = e.type, b = null;
        switch (v) {
          case R:
          case he:
          case M:
            b = g;
            break;
          case ee:
            b = g.render;
            break;
        }
        if (yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, _ = !1;
        if (b !== null) {
          var N = yi(b);
          N !== void 0 && (a.has(N) ? _ = !0 : t.has(N) && (v === M ? _ = !0 : E = !0));
        }
        if (nd !== null && (nd.has(e) || l !== null && nd.has(l)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || E) {
          var O = Ra(e, Ve);
          O !== null && er(O, e, Ve, Ft);
        }
        u !== null && !_ && H1(u, t, a), d !== null && H1(d, t, a);
      }
    }
    var SM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(u) {
          return u.current;
        }));
        return j1(e.current, l, a), a;
      }
    };
    function j1(e, t, a) {
      {
        var l = e.child, u = e.sibling, d = e.tag, v = e.type, g = null;
        switch (d) {
          case R:
          case he:
          case M:
            g = v;
            break;
          case ee:
            g = v.render;
            break;
        }
        var b = !1;
        g !== null && t.has(g) && (b = !0), b ? bM(e, a) : l !== null && j1(l, t, a), u !== null && j1(u, t, a);
      }
    }
    function bM(e, t) {
      {
        var a = xM(e, t);
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
    var Y1;
    {
      Y1 = !1;
      try {
        var a_ = Object.preventExtensions({});
      } catch {
        Y1 = !0;
      }
    }
    function wM(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Y1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var qa = function(e, t, a, l) {
      return new wM(e, t, a, l);
    };
    function P1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function EM(e) {
      return typeof e == "function" && !P1(e) && e.defaultProps === void 0;
    }
    function _M(e) {
      if (typeof e == "function")
        return P1(e) ? M : R;
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
        case R:
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
    function CM(e, t) {
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
    function TM(e, t, a) {
      var l;
      return e === Hm ? (l = rt, t === !0 && (l |= en, l |= xa)) : l = He, Wn && (l |= Pe), qa(U, null, null, l);
    }
    function V1(e, t, a, l, u, d) {
      var v = P, g = e;
      if (typeof e == "function")
        P1(e) ? (v = M, g = A1(g)) : g = rd(g);
      else if (typeof e == "string")
        v = Q;
      else
        e:
          switch (e) {
            case ja:
              return Wu(a.children, u, d, t);
            case nl:
              v = se, u |= en, (u & rt) !== He && (u |= xa);
              break;
            case T:
              return kM(a, u, d, t);
            case Ze:
              return RM(a, u, d, t);
            case vt:
              return DM(a, u, d, t);
            case qt:
              return i_(a, u, d, t);
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
              var b = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = l ? qe(l) : null;
                E && (b += `

Check the render method of \`` + E + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
            }
          }
      var _ = qa(v, a, t, u);
      return _.elementType = e, _.type = g, _.lanes = d, _._debugOwner = l, _;
    }
    function I1(e, t, a) {
      var l = null;
      l = e._owner;
      var u = e.type, d = e.key, v = e.props, g = V1(u, d, v, l, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function Wu(e, t, a, l) {
      var u = qa(ae, e, l, t);
      return u.lanes = a, u;
    }
    function kM(e, t, a, l) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = qa(ye, e, l, t | Pe);
      return u.elementType = T, u.lanes = a, u.stateNode = {
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
    function i_(e, t, a, l) {
      var u = qa(Ie, e, l, t);
      u.elementType = qt, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
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
      var l = e.children !== null ? e.children : [], u = qa(I, l, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function l_(e, t) {
      return e === null && (e = qa(P, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function LM(e, t, a, l, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = T0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ft, this.eventTimes = ff($), this.expirationTimes = ff(Ft), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = ff($), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Wt; v++)
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
    function o_(e, t, a, l, u, d, v, g, b, E) {
      var _ = new LM(e, t, a, g, b), N = TM(t, d);
      _.current = N, N.stateNode = _;
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
      return J0(N), _;
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
    function u_(e) {
      if (!e)
        return Qa;
      var t = ma(e), a = mR(t);
      if (t.tag === M) {
        var l = t.type;
        if (Dl(l))
          return Ux(t, l, a);
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
        var u = ba(a);
        if (u === null)
          return null;
        if (u.mode & en) {
          var d = qe(a) || "Component";
          if (!Q1[d]) {
            Q1[d] = !0;
            var v = mn;
            try {
              Mt(u), a.mode & en ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Mt(v) : En();
            }
          }
        }
        return u.stateNode;
      }
    }
    function s_(e, t, a, l, u, d, v, g) {
      var b = !1, E = null;
      return o_(e, t, b, E, a, l, u, d, v);
    }
    function c_(e, t, a, l, u, d, v, g, b, E) {
      var _ = !0, N = o_(a, l, _, e, u, d, v, g, b);
      N.context = u_(null);
      var O = N.current, j = la(), Y = Iu(O), B = Ro(j, Y);
      return B.callback = t ?? null, zu(O, B, Y), PO(N, Y, j), N;
    }
    function Th(e, t, a, l) {
      jv(t, e);
      var u = t.current, d = la(), v = Iu(u);
      ro(v);
      var g = u_(a);
      t.context === null ? t.context = g : t.pendingContext = g, pa && mn !== null && !G1 && (G1 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(mn) || "Unknown"));
      var b = Ro(d, v);
      b.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), b.callback = l);
      var E = zu(u, b, v);
      return E !== null && (er(E, u, v, d), Km(E, u, v)), v;
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
          if (kn(t)) {
            var a = $g(t);
            WO(t, a);
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
          q1(e, l);
          break;
        }
      }
    }
    function f_(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function q1(e, t) {
      f_(e, t);
      var a = e.alternate;
      a && f_(a, t);
    }
    function AM(e) {
      if (e.tag === ve) {
        var t = cu, a = Ra(e, t);
        if (a !== null) {
          var l = la();
          er(a, e, t, l);
        }
        q1(e, t);
      }
    }
    function FM(e) {
      if (e.tag === ve) {
        var t = Iu(e), a = Ra(e, t);
        if (a !== null) {
          var l = la();
          er(a, e, t, l);
        }
        q1(e, t);
      }
    }
    function d_(e) {
      var t = Av(e);
      return t === null ? null : t.stateNode;
    }
    var p_ = function(e) {
      return null;
    };
    function HM(e) {
      return p_(e);
    }
    var h_ = function(e) {
      return !1;
    };
    function jM(e) {
      return h_(e);
    }
    var v_ = null, m_ = null, y_ = null, g_ = null, S_ = null, b_ = null, x_ = null, w_ = null, E_ = null;
    {
      var __ = function(e, t, a) {
        var l = t[a], u = Un(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (Un(u) ? u.splice(l, 1) : delete u[l], u) : (u[l] = __(e[l], t, a + 1), u);
      }, C_ = function(e, t) {
        return __(e, t, 0);
      }, T_ = function(e, t, a, l) {
        var u = t[l], d = Un(e) ? e.slice() : ot({}, e);
        if (l + 1 === t.length) {
          var v = a[l];
          d[v] = d[u], Un(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = T_(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            l + 1
          );
        return d;
      }, k_ = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return T_(e, t, a, 0);
      }, R_ = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var u = t[a], d = Un(e) ? e.slice() : ot({}, e);
        return d[u] = R_(e[u], t, a + 1, l), d;
      }, D_ = function(e, t, a) {
        return R_(e, t, 0, a);
      }, X1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      v_ = function(e, t, a, l) {
        var u = X1(e, t);
        if (u !== null) {
          var d = D_(u.memoizedState, a, l);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = ot({}, e.memoizedProps);
          var v = Ra(e, Ve);
          v !== null && er(v, e, Ve, Ft);
        }
      }, m_ = function(e, t, a) {
        var l = X1(e, t);
        if (l !== null) {
          var u = C_(l.memoizedState, a);
          l.memoizedState = u, l.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var d = Ra(e, Ve);
          d !== null && er(d, e, Ve, Ft);
        }
      }, y_ = function(e, t, a, l) {
        var u = X1(e, t);
        if (u !== null) {
          var d = k_(u.memoizedState, a, l);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = ot({}, e.memoizedProps);
          var v = Ra(e, Ve);
          v !== null && er(v, e, Ve, Ft);
        }
      }, g_ = function(e, t, a) {
        e.pendingProps = D_(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Ra(e, Ve);
        l !== null && er(l, e, Ve, Ft);
      }, S_ = function(e, t) {
        e.pendingProps = C_(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ra(e, Ve);
        a !== null && er(a, e, Ve, Ft);
      }, b_ = function(e, t, a) {
        e.pendingProps = k_(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = Ra(e, Ve);
        l !== null && er(l, e, Ve, Ft);
      }, x_ = function(e) {
        var t = Ra(e, Ve);
        t !== null && er(t, e, Ve, Ft);
      }, w_ = function(e) {
        p_ = e;
      }, E_ = function(e) {
        h_ = e;
      };
    }
    function YM(e) {
      var t = ba(e);
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
        overrideHookState: v_,
        overrideHookStateDeletePath: m_,
        overrideHookStateRenamePath: y_,
        overrideProps: g_,
        overridePropsDeletePath: S_,
        overridePropsRenamePath: b_,
        setErrorHandler: w_,
        setSuspenseHandler: E_,
        scheduleUpdate: x_,
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
    var O_ = typeof reportError == "function" ? (
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
          var l = d_(t.current);
          l && l.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Th(e, t, null, null);
    }, Iy.prototype.unmount = K1.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        VE() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Lo(function() {
          Th(null, e, null, null);
        }), Dx(t);
      }
    };
    function BM(e, t) {
      if (!By(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      M_(e);
      var a = !1, l = !1, u = "", d = O_;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === tl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = s_(e, Hm, null, a, l, u, d);
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
      M_(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, u = a != null && a.hydratedSources || null, d = !1, v = !1, g = "", b = O_;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (b = a.onRecoverableError));
      var E = c_(t, null, e, Hm, l, d, v, g, b);
      if (Mm(E.current, e), Up(e), u)
        for (var _ = 0; _ < u.length; _++) {
          var N = u[_];
          eD(E, N);
        }
      return new Iy(E);
    }
    function By(e) {
      return !!(e && (e.nodeType === Dr || e.nodeType === Ia || e.nodeType === Ql || !wt));
    }
    function kh(e) {
      return !!(e && (e.nodeType === Dr || e.nodeType === Ia || e.nodeType === Ql || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function M_(e) {
      e.nodeType === Dr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Wp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var GM = f.ReactCurrentOwner, L_;
    L_ = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = d_(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = Z1(e), u = !!(l && Ou(l));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Dr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Z1(e) {
      return e ? e.nodeType === Ia ? e.documentElement : e.firstChild : null;
    }
    function N_() {
    }
    function QM(e, t, a, l, u) {
      if (u) {
        if (typeof l == "function") {
          var d = l;
          l = function() {
            var O = Vy(v);
            d.call(O);
          };
        }
        var v = c_(
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
          N_
        );
        e._reactRootContainer = v, Mm(v.current, e);
        var g = e.nodeType === yn ? e.parentNode : e;
        return Up(g), Lo(), v;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof l == "function") {
          var E = l;
          l = function() {
            var O = Vy(_);
            E.call(O);
          };
        }
        var _ = s_(
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
          N_
        );
        e._reactRootContainer = _, Mm(_.current, e);
        var N = e.nodeType === yn ? e.parentNode : e;
        return Up(N), Lo(function() {
          Th(t, _, a, l);
        }), _;
      }
    }
    function qM(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wy(e, t, a, l, u) {
      L_(a), qM(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = QM(a, t, e, u, l);
      else {
        if (v = d, typeof u == "function") {
          var g = u;
          u = function() {
            var b = Vy(v);
            g.call(b);
          };
        }
        Th(t, v, e, u);
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
      return e == null ? null : e.nodeType === Dr ? e : UM(e, "findDOMNode");
    }
    function KM(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !kh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Wp(t) && t._reactRootContainer === void 0;
        l && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wy(null, e, t, !0, a);
    }
    function ZM(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !kh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Wp(t) && t._reactRootContainer === void 0;
        l && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wy(null, e, t, !1, a);
    }
    function JM(e, t, a, l) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !kh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gs(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wy(e, t, a, !1, l);
    }
    function e2(e) {
      if (!kh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Wp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Z1(e), l = a && !Ou(a);
          l && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Lo(function() {
          Wy(null, null, e, !1, function() {
            e._reactRootContainer = null, Dx(e);
          });
        }), !0;
      } else {
        {
          var u = Z1(e), d = !!(u && Ou(u)), v = e.nodeType === Dr && kh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ee(zM), Jv(AM), Ns(FM), mp(Ea), tm(Os), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Nv(rk), Mc(D1, $O, Lo);
    function t2(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!By(t))
        throw new Error("Target container is not a DOM element.");
      return NM(e, t, null, a);
    }
    function n2(e, t, a, l) {
      return JM(e, t, a, l);
    }
    var J1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ou, Uf, Lm, Oc, vs, D1]
    };
    function r2(e, t) {
      return J1.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), BM(e, t);
    }
    function a2(e, t, a) {
      return J1.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), $M(e, t, a);
    }
    function i2(e) {
      return VE() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Lo(e);
    }
    var l2 = IM({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: $1,
      rendererPackageName: "react-dom"
    });
    if (!l2 && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var U_ = window.location.protocol;
      /^(https?|file):$/.test(U_) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (U_ === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Na.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1, Na.createPortal = t2, Na.createRoot = r2, Na.findDOMNode = XM, Na.flushSync = i2, Na.hydrate = KM, Na.hydrateRoot = a2, Na.render = ZM, Na.unmountComponentAtNode = e2, Na.unstable_batchedUpdates = D1, Na.unstable_renderSubtreeIntoContainer = n2, Na.version = $1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Na;
}
function xT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xT);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (xT(), wA()) : EA();
const iC = (i) => {
  let s;
  const f = /* @__PURE__ */ new Set(), h = (R, M) => {
    const P = typeof R == "function" ? R(s) : R;
    if (!Object.is(P, s)) {
      const U = s;
      s = M ?? typeof P != "object" ? P : Object.assign({}, s, P), f.forEach((I) => I(s, U));
    }
  }, m = () => s, D = { setState: h, getState: m, subscribe: (R) => (f.add(R), () => f.delete(R)), destroy: () => {
    f.clear();
  } };
  return s = i(h, m, D), D;
}, _A = (i) => i ? iC(i) : iC;
var kb = { exports: {} }, ub = {}, Xy = { exports: {} }, sb = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lC;
function CA() {
  if (lC)
    return sb;
  lC = 1;
  var i = Po;
  function s(U, I) {
    return U === I && (U !== 0 || 1 / U === 1 / I) || U !== U && I !== I;
  }
  var f = typeof Object.is == "function" ? Object.is : s, h = i.useState, m = i.useEffect, x = i.useLayoutEffect, S = i.useDebugValue;
  function D(U, I) {
    var Q = I(), ne = h({ inst: { value: Q, getSnapshot: I } }), ae = ne[0].inst, se = ne[1];
    return x(function() {
      ae.value = Q, ae.getSnapshot = I, R(ae) && se({ inst: ae });
    }, [U, Q, I]), m(function() {
      return R(ae) && se({ inst: ae }), U(function() {
        R(ae) && se({ inst: ae });
      });
    }, [U]), S(Q), Q;
  }
  function R(U) {
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
  var P = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? M : D;
  return sb.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : P, sb;
}
var cb = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oC;
function TA() {
  return oC || (oC = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Po, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    var x = typeof Object.is == "function" ? Object.is : m, S = i.useState, D = i.useEffect, R = i.useLayoutEffect, M = i.useDebugValue, P = !1, U = !1;
    function I(ee, ye, ve) {
      P || i.startTransition !== void 0 && (P = !0, f("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var le = ye();
      if (!U) {
        var he = ye();
        x(le, he) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), U = !0);
      }
      var it = S({
        inst: {
          value: le,
          getSnapshot: ye
        }
      }), tt = it[0].inst, lt = it[1];
      return R(function() {
        tt.value = le, tt.getSnapshot = ye, Q(tt) && lt({
          inst: tt
        });
      }, [ee, le, ye]), D(function() {
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
        return !x(ve, le);
      } catch {
        return !0;
      }
    }
    function ne(ee, ye, ve) {
      return ye();
    }
    var ae = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", se = !ae, Me = se ? ne : I, ie = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Me;
    cb.useSyncExternalStore = ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), cb;
}
var uC;
function wT() {
  return uC || (uC = 1, process.env.NODE_ENV === "production" ? Xy.exports = CA() : Xy.exports = TA()), Xy.exports;
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
var sC;
function kA() {
  if (sC)
    return ub;
  sC = 1;
  var i = Po, s = wT();
  function f(M, P) {
    return M === P && (M !== 0 || 1 / M === 1 / P) || M !== M && P !== P;
  }
  var h = typeof Object.is == "function" ? Object.is : f, m = s.useSyncExternalStore, x = i.useRef, S = i.useEffect, D = i.useMemo, R = i.useDebugValue;
  return ub.useSyncExternalStoreWithSelector = function(M, P, U, I, Q) {
    var ne = x(null);
    if (ne.current === null) {
      var ae = { hasValue: !1, value: null };
      ne.current = ae;
    } else
      ae = ne.current;
    ne = D(function() {
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
    }, [se]), R(se), se;
  }, ub;
}
var fb = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cC;
function RA() {
  return cC || (cC = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Po, s = wT();
    function f(P, U) {
      return P === U && (P !== 0 || 1 / P === 1 / U) || P !== P && U !== U;
    }
    var h = typeof Object.is == "function" ? Object.is : f, m = s.useSyncExternalStore, x = i.useRef, S = i.useEffect, D = i.useMemo, R = i.useDebugValue;
    function M(P, U, I, Q, ne) {
      var ae = x(null), se;
      ae.current === null ? (se = {
        hasValue: !1,
        value: null
      }, ae.current = se) : se = ae.current;
      var Me = D(function() {
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
          var hn = le, Rt = he;
          if (h(hn, Vt))
            return Rt;
          var xn = Q(Vt);
          return ne !== void 0 && ne(Rt, xn) ? Rt : (le = Vt, he = xn, xn);
        }, tt = I === void 0 ? null : I, lt = function() {
          return it(U());
        }, ht = tt === null ? void 0 : function() {
          return it(tt());
        };
        return [lt, ht];
      }, [U, I, Q, ne]), ie = Me[0], ee = Me[1], ye = m(P, ie, ee);
      return S(function() {
        se.hasValue = !0, se.value = ye;
      }, [ye]), R(ye), ye;
    }
    fb.useSyncExternalStoreWithSelector = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), fb;
}
process.env.NODE_ENV === "production" ? kb.exports = kA() : kb.exports = RA();
var DA = kb.exports;
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
const fC = (i) => {
  const s = typeof i == "function" ? _A(i) : i, f = (h, m) => LA(s, h, m);
  return Object.assign(f, s), f;
}, NA = (i) => i ? fC(i) : fC, UA = (i, s) => (...f) => Object.assign({}, i, s(...f));
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
    }, D = f && !h;
    clearTimeout(h), h = setTimeout(S, s), D && i.apply(void 0, m);
  };
};
export {
  YA as Bar,
  jA as Line,
  PA as Time,
  VA as debounce
};
