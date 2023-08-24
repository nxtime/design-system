import Wo, { useRef as tr, useState as Rr, useCallback as dc, useEffect as hg, Fragment as wN, useDebugValue as CN } from "react";
import _i from "moment";
function TN(i) {
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
function xN() {
  if (BT)
    return Uh;
  BT = 1;
  var i = Wo, u = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
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
function bN() {
  return WT || (WT = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Wo, u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), P = Symbol.iterator, te = "@@iterator";
    function Ee(k) {
      if (k === null || typeof k != "object")
        return null;
      var J = P && k[P] || k[te];
      return typeof J == "function" ? J : null;
    }
    var Me = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function le(k) {
      {
        for (var J = arguments.length, he = new Array(J > 1 ? J - 1 : 0), Fe = 1; Fe < J; Fe++)
          he[Fe - 1] = arguments[Fe];
        ne("error", k, he);
      }
    }
    function ne(k, J, he) {
      {
        var Fe = Me.ReactDebugCurrentFrame, tt = Fe.getStackAddendum();
        tt !== "" && (J += "%s", he = he.concat([tt]));
        var mt = he.map(function(rt) {
          return String(rt);
        });
        mt.unshift("Warning: " + J), Function.prototype.apply.call(console[k], console, mt);
      }
    }
    var ve = !1, ce = !1, ee = !1, ue = !1, We = !1, et;
    et = Symbol.for("react.module.reference");
    function nt(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === p || k === E || We || k === m || k === D || k === z || ue || k === Q || ve || ce || ee || typeof k == "object" && k !== null && (k.$$typeof === A || k.$$typeof === U || k.$$typeof === g || k.$$typeof === R || k.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === et || k.getModuleId !== void 0));
    }
    function dt(k, J, he) {
      var Fe = k.displayName;
      if (Fe)
        return Fe;
      var tt = J.displayName || J.name || "";
      return tt !== "" ? he + "(" + tt + ")" : he;
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
            var he = k;
            return Nt(he._context) + ".Provider";
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
    var at = Object.assign, hn = 0, kt, _n, se, je, _e, gt, Ct;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function vr() {
      {
        if (hn === 0) {
          kt = console.log, _n = console.info, se = console.warn, je = console.error, _e = console.group, gt = console.groupCollapsed, Ct = console.groupEnd;
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
              value: se
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
    function rr(k, J, he) {
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
    var Dr = !1, ri;
    {
      var kr = typeof WeakMap == "function" ? WeakMap : Map;
      ri = new kr();
    }
    function pa(k, J) {
      if (!k || Dr)
        return "";
      {
        var he = ri.get(k);
        if (he !== void 0)
          return he;
      }
      var Fe;
      Dr = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = wn.current, wn.current = null, vr();
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
                    var mr = `
` + Ve[Qt].replace(" at new ", " at ");
                    return k.displayName && mr.includes("<anonymous>") && (mr = mr.replace("<anonymous>", k.displayName)), typeof k == "function" && ri.set(k, mr), mr;
                  }
                while (Qt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        Dr = !1, wn.current = mt, ni(), Error.prepareStackTrace = tt;
      }
      var ol = k ? k.displayName || k.name : "", mc = ol ? rr(ol) : "";
      return typeof k == "function" && ri.set(k, mc), mc;
    }
    function On(k, J, he) {
      return pa(k, !1);
    }
    function ar(k) {
      var J = k.prototype;
      return !!(J && J.isReactComponent);
    }
    function In(k, J, he) {
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
            return In(k.type, J, he);
          case A: {
            var Fe = k, tt = Fe._payload, mt = Fe._init;
            try {
              return In(mt(tt), J, he);
            } catch {
            }
          }
        }
      return "";
    }
    var ir = Object.prototype.hasOwnProperty, lr = {}, ha = Me.ReactDebugCurrentFrame;
    function Fa(k) {
      if (k) {
        var J = k._owner, he = In(k.type, k._source, J ? J.type : null);
        ha.setExtraStackFrame(he);
      } else
        ha.setExtraStackFrame(null);
    }
    function xi(k, J, he, Fe, tt) {
      {
        var mt = Function.call.bind(ir);
        for (var rt in k)
          if (mt(k, rt)) {
            var Ve = void 0;
            try {
              if (typeof k[rt] != "function") {
                var Ln = Error((Fe || "React class") + ": " + he + " type `" + rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Ve = k[rt](J, rt, Fe, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              Ve = Qt;
            }
            Ve && !(Ve instanceof Error) && (Fa(tt), le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", he, rt, typeof Ve), Fa(null)), Ve instanceof Error && !(Ve.message in lr) && (lr[Ve.message] = !0, Fa(tt), le("Failed %s type: %s", he, Ve.message), Fa(null));
          }
      }
    }
    var ai = Array.isArray;
    function Ha(k) {
      return ai(k);
    }
    function qr(k) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, he = J && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return he;
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
    }, al, Pa, pe;
    pe = {};
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
        var he = Pe(vn.current.type);
        pe[he] || (le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(vn.current.type), k.ref), pe[he] = !0);
      }
    }
    function Xt(k, J) {
      {
        var he = function() {
          al || (al = !0, le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        he.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function Nn(k, J) {
      {
        var he = function() {
          Pa || (Pa = !0, le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        he.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var cn = function(k, J, he, Fe, tt, mt, rt) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: k,
        key: J,
        ref: he,
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
    function Mr(k, J, he, Fe, tt) {
      {
        var mt, rt = {}, Ve = null, Ln = null;
        he !== void 0 && (Ya(he), Ve = "" + he), it(J) && (Ya(J.key), Ve = "" + J.key), Ue(J) && (Ln = J.ref, Mt(J, tt));
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
        var J = k._owner, he = In(k.type, k._source, J ? J.type : null);
        Xr.setExtraStackFrame(he);
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
          var k = Pe(Yt.current.type);
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
          var J = k.fileName.replace(/^.*[\\\/]/, ""), he = k.lineNumber;
          return `

Check your code at ` + J + ":" + he + ".";
        }
        return "";
      }
    }
    var es = {};
    function vc(k) {
      {
        var J = $l();
        if (!J) {
          var he = typeof k == "string" ? k : k.displayName || k.name;
          he && (J = `

Check the top-level render call using <` + he + ">.");
        }
        return J;
      }
    }
    function Gl(k, J) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var he = vc(J);
        if (es[he])
          return;
        es[he] = !0;
        var Fe = "";
        k && k._owner && k._owner !== Yt.current && (Fe = " It was passed a child from " + Pe(k._owner.type) + "."), At(k), le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Fe), At(null);
      }
    }
    function Zo(k, J) {
      {
        if (typeof k != "object")
          return;
        if (Ha(k))
          for (var he = 0; he < k.length; he++) {
            var Fe = k[he];
            Qo(Fe) && Gl(Fe, J);
          }
        else if (Qo(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var tt = Ee(k);
          if (typeof tt == "function" && tt !== k.entries)
            for (var mt = tt.call(k), rt; !(rt = mt.next()).done; )
              Qo(rt.value) && Gl(rt.value, J);
        }
      }
    }
    function Ql(k) {
      {
        var J = k.type;
        if (J == null || typeof J == "string")
          return;
        var he;
        if (typeof J == "function")
          he = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === U))
          he = J.propTypes;
        else
          return;
        if (he) {
          var Fe = Pe(J);
          xi(he, k.props, "prop", Fe, k);
        } else if (J.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var tt = Pe(J);
          le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ko(k) {
      {
        for (var J = Object.keys(k.props), he = 0; he < J.length; he++) {
          var Fe = J[he];
          if (Fe !== "children" && Fe !== "key") {
            At(k), le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), At(null);
            break;
          }
        }
        k.ref !== null && (At(k), le("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function li(k, J, he, Fe, tt, mt) {
      {
        var rt = nt(k);
        if (!rt) {
          var Ve = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = qo(tt);
          Ln ? Ve += Ln : Ve += $l();
          var Qt;
          k === null ? Qt = "null" : Ha(k) ? Qt = "array" : k !== void 0 && k.$$typeof === u ? (Qt = "<" + (Pe(k.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof k, le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, Ve);
        }
        var qt = Mr(k, J, he, tt, mt);
        if (qt == null)
          return qt;
        if (rt) {
          var mr = J.children;
          if (mr !== void 0)
            if (Fe)
              if (Ha(mr)) {
                for (var ol = 0; ol < mr.length; ol++)
                  Zo(mr[ol], k);
                Object.freeze && Object.freeze(mr);
              } else
                le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zo(mr, k);
        }
        return k === p ? Ko(qt) : Ql(qt), qt;
      }
    }
    function il(k, J, he) {
      return li(k, J, he, !0);
    }
    function Jr(k, J, he) {
      return li(k, J, he, !1);
    }
    var Va = Jr, ll = il;
    zh.Fragment = p, zh.jsx = Va, zh.jsxs = ll;
  }()), zh;
}
process.env.NODE_ENV === "production" ? SE.exports = xN() : SE.exports = bN();
var W = SE.exports;
function RN(i, u = 300) {
  let c;
  return function(...p) {
    clearTimeout(c), c = setTimeout(() => {
      i.apply(this, p);
    }, u);
  };
}
const lE = (i, u, c, p = !1) => {
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
}, Cj = ({
  type: i,
  width: u,
  height: c,
  hide: p,
  data: m,
  children: E,
  snap: g = !1
}) => {
  const R = tr(null), [b, D] = Rr({
    width: u ?? 0,
    height: c ?? 0
  }), z = tr(null), U = tr(null), A = dc(() => p ? [...m].filter((P) => (p.forEach((te) => delete P[te]), P)) : m, [p, m]);
  console.log(b), hg(() => {
    var te;
    const P = (te = R == null ? void 0 : R.current) == null ? void 0 : te.parentNode;
    return window == null || window.addEventListener(
      "resize",
      RN(
        () => lE(P, R, D, c !== void 0)
      )
    ), (!u || !c) && lE(P, R, D, c !== void 0), () => P == null ? void 0 : P.removeEventListener(
      "resize",
      () => lE(P, R, () => {
      }, c !== void 0)
    );
  }, [D, u, c]);
  const Q = Math.max(
    ...m.map((P) => Math.max(...Object.values(P)))
  );
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    /* @__PURE__ */ W.jsx(
      "div",
      {
        ref: z,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ W.jsxs(
      "svg",
      {
        ref: R,
        className: `chart ${i}`,
        viewBox: `0 0 ${u ?? 0} ${c ?? 0}`,
        width: b.width,
        height: b.height,
        onMouseMove: (P) => {
          if (U.current && R.current && z.current) {
            const te = U.current.style, Ee = P.clientX, Me = R.current.getBoundingClientRect().left, le = R.current.getBoundingClientRect().top;
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
              te.transform = `translate(${P.clientX - Me}px, 0px)`, te.transition = "none";
            if (z.current.innerHTML === "") {
              z.current.style.opacity = "0";
              return;
            }
            const ne = P.clientX - Me, ve = z.current.clientWidth;
            z.current.style.opacity = "1";
            let ce = ne + 20;
            const ee = P.clientY - le + 20;
            z.current.offsetLeft + ne + ve + 20 > window.innerWidth && (ce = ne - ve - 20), z.current.style.transform = `translate(${ce}px, ${ee}px)`;
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
          /* @__PURE__ */ W.jsx(
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
    const R = m.pop(), b = m.pop(), D = {
      // Allow provider without '@': "provider:prefix:name"
      provider: m.length > 0 ? m[0] : p,
      prefix: b,
      name: R
    };
    return u && !ng(D) ? null : D;
  }
  const E = m[0], g = E.split("-");
  if (g.length > 1) {
    const R = {
      provider: p,
      prefix: g.shift(),
      name: g.join("-")
    };
    return u && !ng(R) ? null : R;
  }
  if (c && p === "") {
    const R = {
      provider: p,
      prefix: "",
      name: E
    };
    return u && !ng(R, c) ? null : R;
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
function DN(i, u) {
  const c = {};
  !i.hFlip != !u.hFlip && (c.hFlip = !0), !i.vFlip != !u.vFlip && (c.vFlip = !0);
  const p = ((i.rotate || 0) + (u.rotate || 0)) % 4;
  return p && (c.rotate = p), c;
}
function $T(i, u) {
  const c = DN(i, u);
  for (const p in EE)
    p in og ? p in i && !(p in c) && (c[p] = og[p]) : p in u ? c[p] = u[p] : p in i && (c[p] = i[p]);
  return c;
}
function kN(i, u) {
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
function MN(i, u, c) {
  const p = i.icons, m = i.aliases || /* @__PURE__ */ Object.create(null);
  let E = {};
  function g(R) {
    E = $T(
      p[R] || m[R],
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
  const p = kN(i);
  for (const m in p) {
    const E = p[m];
    E && (u(m, MN(i, m, E)), c.push(m));
  }
  return c;
}
const ON = {
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
  if (typeof u.prefix != "string" || !i.icons || typeof i.icons != "object" || !oE(i, ON))
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
function NN(i, u) {
  return {
    provider: i,
    prefix: u,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pc(i, u) {
  const c = GT[i] || (GT[i] = /* @__PURE__ */ Object.create(null));
  return c[u] || (c[u] = NN(i, u));
}
function jE(i, u) {
  return bx(u) ? xx(u, (c, p) => {
    p ? i.icons[c] = p : i.missing.add(c);
  }) : [];
}
function LN(i, u, c) {
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
function UN(i) {
  const u = typeof i == "string" ? vg(i, !0, Ih) : i;
  if (u) {
    const c = pc(u.provider, u.prefix), p = u.name;
    return c.icons[p] || (c.missing.has(p) ? null : void 0);
  }
}
function zN(i, u) {
  const c = vg(i, !0, Ih);
  if (!c)
    return !1;
  const p = pc(c.provider, c.prefix);
  return LN(p, c.name, u);
}
function AN(i, u) {
  if (typeof i != "object")
    return !1;
  if (typeof u != "string" && (u = i.provider || ""), Ih && !u && !i.prefix) {
    let m = !1;
    return bx(i) && (i.prefix = "", xx(i, (E, g) => {
      g && zN(E, g) && (m = !0);
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
}), jN = /(-?[0-9.]*[0-9]+[0-9.]*)/g, FN = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function QT(i, u, c) {
  if (u === 1)
    return i;
  if (c = c || 100, typeof i == "number")
    return Math.ceil(i * u * c) / c;
  if (typeof i != "string")
    return i;
  const p = i.split(jN);
  if (p === null || !p.length)
    return i;
  const m = [];
  let E = p.shift(), g = FN.test(E);
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
const HN = (i) => i === "unset" || i === "undefined" || i === "none";
function YN(i, u) {
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
  [c, p].forEach((P) => {
    const te = [], Ee = P.hFlip, Me = P.vFlip;
    let le = P.rotate;
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
  g === null ? (U = R === null ? "1em" : R === "auto" ? D : R, z = QT(U, b / D)) : (z = g === "auto" ? b : g, U = R === null ? QT(z, D / b) : R === "auto" ? D : R);
  const A = {}, Q = (P, te) => {
    HN(te) || (A[P] = te.toString());
  };
  return Q("width", z), Q("height", U), A.viewBox = m.left.toString() + " " + m.top.toString() + " " + b.toString() + " " + D.toString(), {
    attributes: A,
    body: E
  };
}
const PN = /\sid="(\S+)"/g, VN = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let IN = 0;
function BN(i, u = VN) {
  const c = [];
  let p;
  for (; p = PN.exec(i); )
    c.push(p[1]);
  if (!c.length)
    return i;
  const m = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return c.forEach((E) => {
    const g = typeof u == "function" ? u(E) : u + (IN++).toString(), R = E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    i = i.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + R + ')([")]|\\.[a-z])', "g"),
      "$1" + g + m + "$3"
    );
  }), i = i.replace(new RegExp(m, "g"), ""), i;
}
const _E = /* @__PURE__ */ Object.create(null);
function WN(i, u) {
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
function $N(i, u) {
  const c = FE(u);
  return c === null ? !1 : (HE[i] = c, !0);
}
function YE(i) {
  return HE[i];
}
const GN = () => {
  let i;
  try {
    if (i = fetch, typeof i == "function")
      return i;
  } catch {
  }
};
let qT = GN();
function QN(i, u) {
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
function qN(i) {
  return i === 404;
}
const ZN = (i, u, c) => {
  const p = [], m = QN(i, u), E = "icons";
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
function KN(i) {
  if (typeof i == "string") {
    const u = YE(i);
    if (u)
      return u.path;
  }
  return "/";
}
const XN = (i, u, c) => {
  if (!qT) {
    c("abort", 424);
    return;
  }
  let p = KN(u.provider);
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
  qT(i + p).then((E) => {
    const g = E.status;
    if (g !== 200) {
      setTimeout(() => {
        c(qN(g) ? "abort" : "next", g);
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
}, JN = {
  prepare: ZN,
  send: XN
};
function eL(i) {
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
    const E = m.provider, g = m.prefix, R = m.name, b = c[E] || (c[E] = /* @__PURE__ */ Object.create(null)), D = b[g] || (b[g] = pc(E, g));
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
function Mx(i, u) {
  i.forEach((c) => {
    const p = c.loaderCallbacks;
    p && (c.loaderCallbacks = p.filter((m) => m.id !== u));
  });
}
function tL(i) {
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
      }), g.pending.length !== R && (c || Mx([i], E.id), E.callback(
        g.loaded.slice(0),
        g.missing.slice(0),
        g.pending.slice(0),
        E.abort
      ));
    });
  }));
}
let nL = 0;
function rL(i, u, c) {
  const p = nL++, m = Mx.bind(null, c, p);
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
function aL(i, u = !0, c = !1) {
  const p = [];
  return i.forEach((m) => {
    const E = typeof m == "string" ? vg(m, u, c) : m;
    E && p.push(E);
  }), p;
}
var iL = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function lL(i, u, c, p) {
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
  function P() {
    U && (clearTimeout(U), U = null);
  }
  function te() {
    b === "pending" && (b = "aborted"), P(), A.forEach((ee) => {
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
  function ve(ee, ue, We) {
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
      z = We, A.length || (g.length ? ce() : le());
      return;
    }
    if (P(), ne(), !i.random) {
      const nt = i.resources.indexOf(ee.resource);
      nt !== -1 && nt !== i.index && (i.index = nt);
    }
    b = "completed", Q.forEach((nt) => {
      nt(We);
    });
  }
  function ce() {
    if (b !== "pending")
      return;
    P();
    const ee = g.shift();
    if (ee === void 0) {
      if (A.length) {
        U = setTimeout(() => {
          P(), b === "pending" && (ne(), le());
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
        ve(ue, We, et);
      }
    };
    A.push(ue), D++, U = setTimeout(ce, i.rotate), c(ee, u, ue.callback);
  }
  return setTimeout(ce), Me;
}
function Ox(i) {
  const u = {
    ...iL,
    ...i
  };
  let c = [];
  function p() {
    c = c.filter((R) => R().status === "pending");
  }
  function m(R, b, D) {
    const z = lL(
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
function ZT() {
}
const uE = /* @__PURE__ */ Object.create(null);
function oL(i) {
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
function uL(i, u, c) {
  let p, m;
  if (typeof i == "string") {
    const E = wE(i);
    if (!E)
      return c(void 0, 424), ZT;
    m = E.send;
    const g = oL(i);
    g && (p = g.redundancy);
  } else {
    const E = FE(i);
    if (E) {
      p = Ox(E);
      const g = i.resources ? i.resources[0] : "", R = wE(g);
      R && (m = R.send);
    }
  }
  return !p || !m ? (c(void 0, 424), ZT) : p.query(u, m, c)().abort;
}
const KT = "iconify2", Bh = "iconify", Nx = Bh + "-count", XT = Bh + "-version", Lx = 36e5, sL = 168;
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
function cL(i) {
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
      const R = xE(c);
      for (let b = 0; b < R; b++)
        JT(c, Bh + b.toString());
    }
    PE(c, XT, KT), TE(c, 0);
    return;
  }
  const m = Math.floor(Date.now() / Lx) - sL, E = (R) => {
    const b = Bh + R.toString(), D = CE(c, b);
    if (typeof D == "string") {
      try {
        const z = JSON.parse(D);
        if (typeof z == "object" && typeof z.cached == "number" && z.cached > m && typeof z.provider == "string" && typeof z.data == "object" && typeof z.data.prefix == "string" && // Valid item: run callback
        u(z, R))
          return !0;
      } catch {
      }
      JT(c, b);
    }
  };
  let g = xE(c);
  for (let R = g - 1; R >= 0; R--)
    E(R) || (R === g - 1 ? (g--, TE(c, g)) : Ux[i].add(R));
}
function jx() {
  if (!VE) {
    cL(!0);
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
function fL(i, u) {
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
function dL(i, u) {
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
    const R = {
      cached: Math.floor(Date.now() / Lx),
      provider: i.provider,
      data: u
    };
    return PE(
      m,
      Bh + g.toString(),
      JSON.stringify(R)
    );
  }
  u.lastModified && !fL(i, u.lastModified) || Object.keys(u.icons).length && (u.not_found && (u = Object.assign({}, u), delete u.not_found), c("local") || c("session"));
}
function ex() {
}
function pL(i) {
  i.iconsLoaderFlag || (i.iconsLoaderFlag = !0, setTimeout(() => {
    i.iconsLoaderFlag = !1, tL(i);
  }));
}
function hL(i, u) {
  i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(u).sort() : i.iconsToLoad = u, i.iconsQueueFlag || (i.iconsQueueFlag = !0, setTimeout(() => {
    i.iconsQueueFlag = !1;
    const { provider: c, prefix: p } = i, m = i.iconsToLoad;
    delete i.iconsToLoad;
    let E;
    if (!m || !(E = wE(c)))
      return;
    E.prepare(c, p, m).forEach((R) => {
      uL(c, R, (b) => {
        if (typeof b != "object")
          R.icons.forEach((D) => {
            i.missing.add(D);
          });
        else
          try {
            const D = jE(
              i,
              b
            );
            if (!D.length)
              return;
            const z = i.pendingIcons;
            z && D.forEach((U) => {
              z.delete(U);
            }), dL(i, b);
          } catch (D) {
            console.error(D);
          }
        pL(i);
      });
    });
  }));
}
const vL = (i, u) => {
  const c = aL(i, !0, Rx()), p = eL(c);
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
  let g, R;
  return p.pending.forEach((b) => {
    const { provider: D, prefix: z } = b;
    if (z === R && D === g)
      return;
    g = D, R = z, E.push(pc(D, z));
    const U = m[D] || (m[D] = /* @__PURE__ */ Object.create(null));
    U[z] || (U[z] = []);
  }), p.pending.forEach((b) => {
    const { provider: D, prefix: z, name: U } = b, A = pc(D, z), Q = A.pendingIcons || (A.pendingIcons = /* @__PURE__ */ new Set());
    Q.has(U) || (Q.add(U), m[D][z].push(U));
  }), E.forEach((b) => {
    const { provider: D, prefix: z } = b;
    m[D][z].length && hL(b, m[D][z]);
  }), u ? rL(u, p, E) : ex;
};
function mL(i, u) {
  const c = {
    ...i
  };
  for (const p in u) {
    const m = u[p], E = typeof m;
    p in Dx ? (m === null || m && (E === "string" || E === "number")) && (c[p] = m) : E === typeof c[p] && (c[p] = p === "rotate" ? m % 4 : m);
  }
  return c;
}
const yL = /[\s,]+/;
function gL(i, u) {
  u.split(yL).forEach((c) => {
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
function SL(i, u = 0) {
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
function EL(i, u) {
  let c = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const p in u)
    c += " " + p + '="' + u[p] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + c + ">" + i + "</svg>";
}
function _L(i) {
  return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function wL(i) {
  return "data:image/svg+xml," + _L(i);
}
function CL(i) {
  return 'url("' + wL(i) + '")';
}
let Yh;
function TL() {
  try {
    Yh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (i) => i
    });
  } catch {
    Yh = null;
  }
}
function xL(i) {
  return Yh === void 0 && TL(), Yh ? Yh.createHTML(i) : i;
}
const Fx = {
  ...kx,
  inline: !1
}, bL = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, RL = {
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
const DL = {
  ...Fx,
  inline: !0
};
function rx(i) {
  return i + (i.match(/^[-0-9.]+$/) ? "px" : "");
}
const kL = (i, u, c, p) => {
  const m = c ? DL : Fx, E = mL(m, u), g = u.mode || "svg", R = {}, b = u.style || {}, D = {
    ...g === "svg" ? bL : {},
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
          typeof le == "string" && gL(E, le);
          break;
        case "color":
          R.color = le;
          break;
        case "rotate":
          typeof le == "string" ? E[Me] = SL(le) : typeof le == "number" && (E[Me] = le);
          break;
        case "ariaHidden":
        case "aria-hidden":
          le !== !0 && le !== "true" && delete D["aria-hidden"];
          break;
        default:
          m[Me] === void 0 && (D[Me] = le);
      }
  }
  const z = YN(i, E), U = z.attributes;
  if (E.inline && (R.verticalAlign = "-0.125em"), g === "svg") {
    D.style = {
      ...R,
      ...b
    }, Object.assign(D, U);
    let Me = 0, le = u.id;
    return typeof le == "string" && (le = le.replace(/-/g, "_")), D.dangerouslySetInnerHTML = {
      __html: xL(BN(z.body, le ? () => le + "ID" + Me++ : "iconifyReact"))
    }, Ju.createElement("svg", D);
  }
  const { body: A, width: Q, height: P } = i, te = g === "mask" || (g === "bg" ? !1 : A.indexOf("currentColor") !== -1), Ee = EL(A, {
    ...U,
    width: Q + "",
    height: P + ""
  });
  return D.style = {
    ...R,
    "--svg": CL(Ee),
    width: rx(U.width),
    height: rx(U.height),
    ...RL,
    ...te ? bE : Hx,
    ...b
  }, Ju.createElement("span", D);
};
Rx(!0);
WN("", JN);
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
        !AN(p)) && console.error(c);
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
          $N(c, m) || console.error(p);
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
    const E = UN(m);
    if (!E) {
      (!this._loading || this._loading.name !== p) && (this._abortLoading(), this._icon = "", this._setData(null), E !== null && (this._loading = {
        name: p,
        abort: vL([m], this._checkIcon.bind(this, !1))
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
    }), kL({
      ...AE,
      ...c.data
    }, p, u._inline, u._ref);
  }
}
const ML = Ju.forwardRef(function(u, c) {
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
var Wr = ML;
const OL = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
  const u = Math.random() * 16 | 0;
  return (i === "x" ? u : u & 3 | 8).toString(16);
}), NL = ({
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
  id: U = OL(),
  ...A
}) => /* @__PURE__ */ W.jsxs("div", { className: `textfield ${g ? "bg-" + g : ""} ${D}`, children: [
  /* @__PURE__ */ W.jsx("label", { htmlFor: U, children: E ?? p ?? U }),
  /* @__PURE__ */ W.jsx(
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
  R && /* @__PURE__ */ W.jsx(Wr, { icon: R }),
  b && /* @__PURE__ */ W.jsx("span", { className: "required", children: m ?? p ? `${p ?? U} should not be empty!` : "Should not be empty!" }),
  c && c
] }), Tj = ({
  defaultShow: i = !1,
  ...u
}) => {
  const [c, p] = Rr(i);
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: /* @__PURE__ */ W.jsx(
    NL,
    {
      ...u,
      className: "textfield-password",
      type: c ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ W.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => p((m) => !m),
          children: /* @__PURE__ */ W.jsx(Wr, { icon: c ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, LL = (i) => {
  console.log(i);
}, UL = (i) => {
  console.log(i);
}, zL = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], AL = ({
  defaultSelected: i,
  startDateRef: u,
  endDateRef: c,
  onClose: p
}) => {
  const [m, E] = Rr(
    (i == null ? void 0 : i.end) === void 0 ? _i() : i.end
  ), [g, R] = Rr(
    i === void 0 ? {
      start: null,
      end: null
    } : i
  ), b = m, D = b.clone().startOf("month"), z = b.clone().endOf("month"), U = [], A = D.day(), Q = z.day();
  for (let P = A - 1; P >= 0; P--)
    U.push(D.clone().subtract(P, "days"));
  for (let P = D.clone().add(1, "day"); P.isSameOrBefore(z); P.add(1, "day"))
    U.push(P.clone());
  for (let P = 1; P <= 6 - Q + 1; P++)
    U.push(z.clone().add(P, "days"));
  return /* @__PURE__ */ W.jsx("div", { className: "dropdown", children: /* @__PURE__ */ W.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ W.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ W.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ W.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              E(
                (P) => P.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ W.jsx(Wr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ W.jsx("button", { type: "button", className: "btn", children: b.format("MMM, YYYY") }),
        /* @__PURE__ */ W.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              E(
                (P) => P.clone().add(1, "month")
              );
            },
            disabled: m.clone().add(1, "month").isSameOrAfter(_i()),
            children: /* @__PURE__ */ W.jsx(Wr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ W.jsx("ul", { className: "date-weekdays", children: zL.map((P) => /* @__PURE__ */ W.jsx("li", { children: /* @__PURE__ */ W.jsx("span", { children: P }) }, P)) })
    ] }),
    /* @__PURE__ */ W.jsx("ul", { className: "days-container", children: U.map((P, te) => {
      var ve, ce, ee;
      let Ee = "";
      const Me = (ve = g.start) != null && ve.startOf("day").isSame(P) ? "selected start" : (ee = (ce = g.end) == null ? void 0 : ce.startOf("day")) != null && ee.isSame(P) ? "selected end" : "", le = P.format("MM") !== b.format("MM") ? "not-current" : "", ne = P.isBetween(
        g.start,
        g.end
      ) ? "between" : "";
      return Ee += le + Me + ne, /* @__PURE__ */ W.jsx("li", { children: /* @__PURE__ */ W.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var ue;
            if (!(u.current === null || c.current === null)) {
              if (((ue = g.start) == null ? void 0 : ue.date()) === P.date()) {
                R({
                  start: null,
                  end: null
                }), u.current.value = "", c.current.value = "";
                return;
              }
              if (g.start === null)
                R((We) => ({
                  ...We,
                  start: P
                })), u.current.value = P.format("YYYY-MM-DD");
              else if (g.start !== null) {
                if (P.isBefore(g.start)) {
                  R((We) => ({
                    start: P,
                    end: We.start
                  })), u.current.value = P.format("YYYY-MM-DD"), c.current.value = g.start.format("YYYY-MM-DD");
                  return;
                }
                R((We) => ({
                  ...We,
                  end: P
                })), c.current.value = P.format("YYYY-MM-DD");
              }
            }
          },
          className: Ee,
          disabled: P.isAfter(_i()),
          children: P.format("DD")
        }
      ) }, te);
    }) }),
    /* @__PURE__ */ W.jsx(
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
  const [p, m] = Rr(!1), E = tr(null), g = tr(null), R = {
    ref: E,
    type: "date",
    onFocus: LL,
    onClick: () => {
      m((D) => !D);
    },
    autoComplete: "off",
    defaultValue: i ? i.start.format("YYYY-MM-DD") : ""
  }, b = {
    ref: g,
    type: "date",
    onFocus: UL,
    onClick: () => {
      m((D) => !D);
    },
    autoComplete: "off",
    defaultValue: i != null && i.end ? i.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: /* @__PURE__ */ W.jsxs(
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
        /* @__PURE__ */ W.jsxs("div", { className: "group rounded-box", children: [
          c({ startDateProps: R, endDateProps: b }),
          /* @__PURE__ */ W.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        p && /* @__PURE__ */ W.jsx(
          AL,
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
}, jL = (i, u, c, p, m, E) => {
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
}, FL = (i) => typeof i == "object" ? /* @__PURE__ */ W.jsx("span", { children: "Object.values(value)[0]" }) : /* @__PURE__ */ W.jsx("span", { children: "value" }), IE = ({
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
  keyExtractor: U = FL
}) => {
  const [A, Q] = Rr(!1), [P, te] = Rr(
    i.findIndex(
      (ce) => c ? ce[c] === (u == null ? void 0 : u[c]) : ce === u
    )
  ), [Ee, Me] = Rr(P), le = tr(null), ne = tr(""), ve = tr([]);
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: `select ${A ? "shadow-md" : ""} ${D}`,
      onBlur: () => {
      },
      style: R,
      children: [
        /* @__PURE__ */ W.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${z} btn-select ${A ? "active" : ""}`,
            onClick: () => {
              Q((ee) => !ee);
              const ce = u === void 0 ? 0 : P;
              Me(ce), setTimeout(() => {
                A || ve.current[ce].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ W.jsx("span", { className: P === -1 ? "not-selected" : "", children: P === -1 ? "Select one of the options" : (m == null ? void 0 : m(i[P])) ?? U(i[P]) }),
              /* @__PURE__ */ W.jsx(Wr, { icon: "eva:arrow-down-fill", vFlip: A })
            ]
          }
        ),
        /* @__PURE__ */ W.jsx(
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
        A && /* @__PURE__ */ W.jsx(
          "ul",
          {
            className: `select-items${i.length > 4 ? " custom-scroll " : " "}bg-${z} shadow-md`,
            style: { "--select-items": g },
            children: i.map((ce, ee) => /* @__PURE__ */ W.jsx("li", { className: "item", children: /* @__PURE__ */ W.jsx(
              "button",
              {
                type: "button",
                className: `${ee === P ? "active" : ""}`,
                ref: (ue) => ve.current[ee] = ue,
                tabIndex: 0,
                onClick: () => {
                  te(ee), p !== void 0 && p(ee, i[ee]), le.current && c && (le.current.value = String(i[ee][c])), Q(!1);
                },
                onMouseEnter: (ue) => {
                  Me(ee), ue.target.focus();
                },
                onMouseLeave: () => {
                  Me(P);
                },
                onKeyDown: (ue) => jL(
                  ue,
                  Ee,
                  Me,
                  ne,
                  ve,
                  i.length
                ),
                children: U(ce)
              }
            ) }, ee))
          }
        )
      ]
    }
  );
}, HL = [
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
function YL(i) {
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
function PL() {
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
  return i._pf == null && (i._pf = PL()), i._pf;
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
function VL(i) {
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
var IL = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function BL(i, u, c) {
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
function WL(i) {
  return i.match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
}
function $L(i) {
  var u = i.match(QE), c, p;
  for (c = 0, p = u.length; c < p; c++)
    pd[u[c]] ? u[c] = pd[u[c]] : u[c] = WL(u[c]);
  return function(m) {
    var E = "", g;
    for (g = 0; g < p; g++)
      E += Wl(u[g]) ? u[g].call(m, i) : u[g];
    return E;
  };
}
function ag(i, u) {
  return i.isValid() ? (u = Wx(u, i.localeData()), cE[u] = cE[u] || $L(u), cE[u](i)) : i.localeData().invalidDate();
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
var GL = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function QL(i) {
  var u = this._longDateFormat[i], c = this._longDateFormat[i.toUpperCase()];
  return u || !c ? u : (this._longDateFormat[i] = c.match(QE).map(function(p) {
    return p === "MMMM" || p === "MM" || p === "DD" || p === "dddd" ? p.slice(1) : p;
  }).join(""), this._longDateFormat[i]);
}
var qL = "Invalid date";
function ZL() {
  return this._invalidDate;
}
var KL = "%d", XL = /\d{1,2}/;
function JL(i) {
  return this._ordinal.replace("%d", i);
}
var e2 = {
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
function t2(i, u, c, p) {
  var m = this._relativeTime[c];
  return Wl(m) ? m(i, u, c, p) : m.replace(/%d/i, i);
}
function n2(i, u) {
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
function r2(i) {
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
function ft(i) {
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
  i.isValid() && !isNaN(c) && (u === "FullYear" && gg(i.year()) && i.month() === 1 && i.date() === 29 ? (c = ft(c), i._d["set" + (i._isUTC ? "UTC" : "") + u](
    c,
    i.month(),
    Tg(c, i.month())
  )) : i._d["set" + (i._isUTC ? "UTC" : "") + u](c));
}
function a2(i) {
  return i = Ti(i), Wl(this[i]) ? this[i]() : this;
}
function i2(i, u) {
  if (typeof i == "object") {
    i = qE(i);
    var c = r2(i), p, m = c.length;
    for (p = 0; p < m; p++)
      this[c[p].unit](i[c[p].unit]);
  } else if (i = Ti(i), Wl(this[i]))
    return this[i](u);
  return this;
}
var Qx = /\d/, ti = /\d\d/, qx = /\d{3}/, ZE = /\d{4}/, Sg = /[+-]?\d{6}/, an = /\d\d?/, Zx = /\d\d\d\d?/, Kx = /\d\d\d\d\d\d?/, Eg = /\d{1,3}/, KE = /\d{1,4}/, _g = /[+-]?\d{1,6}/, yd = /\d+/, wg = /[+-]?\d+/, l2 = /Z|[+-]\d\d:?\d\d/gi, Cg = /Z|[+-]\d\d(?::?\d\d)?/gi, o2 = /[+-]?\d+(\.\d{1,3})?/, Zh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, sg;
sg = {};
function xe(i, u, c) {
  sg[i] = Wl(u) ? u : function(p, m) {
    return p && c ? c : u;
  };
}
function u2(i, u) {
  return Rt(sg, i) ? sg[i](u._strict, u._locale) : new RegExp(s2(i));
}
function s2(i) {
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
    g[u] = ft(E);
  }), m = i.length, c = 0; c < m; c++)
    ME[i[c]] = p;
}
function Kh(i, u) {
  Vt(i, function(c, p, m, E) {
    m._w = m._w || {}, u(c, m._w, m, E);
  });
}
function c2(i, u, c) {
  u != null && Rt(ME, i) && ME[i](u, c._a, c, i);
}
var $r = 0, Po = 1, Vl = 2, nr = 3, el = 4, Vo = 5, cc = 6, f2 = 7, d2 = 8;
function p2(i, u) {
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
  var c = p2(u, 12);
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
xe("M", an);
xe("MM", an, ti);
xe("MMM", function(i, u) {
  return u.monthsShortRegex(i);
});
xe("MMMM", function(i, u) {
  return u.monthsRegex(i);
});
Vt(["M", "MM"], function(i, u) {
  u[Po] = ft(i) - 1;
});
Vt(["MMM", "MMMM"], function(i, u, c, p) {
  var m = c._locale.monthsParse(i, p, c._strict);
  m != null ? u[Po] = m : ot(c).invalidMonth = i;
});
var h2 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Xx = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Jx = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, v2 = Zh, m2 = Zh;
function y2(i, u) {
  return i ? tl(this._months) ? this._months[i.month()] : this._months[(this._months.isFormat || Jx).test(u) ? "format" : "standalone"][i.month()] : tl(this._months) ? this._months : this._months.standalone;
}
function g2(i, u) {
  return i ? tl(this._monthsShort) ? this._monthsShort[i.month()] : this._monthsShort[Jx.test(u) ? "format" : "standalone"][i.month()] : tl(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function S2(i, u, c) {
  var p, m, E, g = i.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], p = 0; p < 12; ++p)
      E = Bl([2e3, p]), this._shortMonthsParse[p] = this.monthsShort(
        E,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[p] = this.months(E, "").toLocaleLowerCase();
  return c ? u === "MMM" ? (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : null) : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : null) : u === "MMM" ? (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : null)) : (m = Mn.call(this._longMonthsParse, g), m !== -1 ? m : (m = Mn.call(this._shortMonthsParse, g), m !== -1 ? m : null));
}
function E2(i, u, c) {
  var p, m, E;
  if (this._monthsParseExact)
    return S2.call(this, i, u, c);
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
      u = ft(u);
    else if (u = i.localeData().monthsParse(u), !Bo(u))
      return i;
  }
  return c = Math.min(i.date(), Tg(i.year(), u)), i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](u, c), i;
}
function tb(i) {
  return i != null ? (eb(this, i), Se.updateOffset(this, !0), this) : ug(this, "Month");
}
function _2() {
  return Tg(this.year(), this.month());
}
function w2(i) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || nb.call(this), i ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Rt(this, "_monthsShortRegex") || (this._monthsShortRegex = v2), this._monthsShortStrictRegex && i ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function C2(i) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || nb.call(this), i ? this._monthsStrictRegex : this._monthsRegex) : (Rt(this, "_monthsRegex") || (this._monthsRegex = m2), this._monthsStrictRegex && i ? this._monthsStrictRegex : this._monthsRegex);
}
function nb() {
  function i(g, R) {
    return R.length - g.length;
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
xe("YY", an, ti);
xe("YYYY", KE, ZE);
xe("YYYYY", _g, Sg);
xe("YYYYYY", _g, Sg);
Vt(["YYYYY", "YYYYYY"], $r);
Vt("YYYY", function(i, u) {
  u[$r] = i.length === 2 ? Se.parseTwoDigitYear(i) : ft(i);
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
  return ft(i) + (ft(i) > 68 ? 1900 : 2e3);
};
var rb = md("FullYear", !0);
function T2() {
  return gg(this.year());
}
function x2(i, u, c, p, m, E, g) {
  var R;
  return i < 100 && i >= 0 ? (R = new Date(i + 400, u, c, p, m, E, g), isFinite(R.getFullYear()) && R.setFullYear(i)) : R = new Date(i, u, c, p, m, E, g), R;
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
  var E = (7 + c - p) % 7, g = cg(i, p, m), R = 1 + 7 * (u - 1) + E + g, b, D;
  return R <= 0 ? (b = i - 1, D = Vh(b) + R) : R > Vh(i) ? (b = i + 1, D = R - Vh(i)) : (b = i, D = R), {
    year: b,
    dayOfYear: D
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
xe("w", an);
xe("ww", an, ti);
xe("W", an);
xe("WW", an, ti);
Kh(
  ["w", "ww", "W", "WW"],
  function(i, u, c, p) {
    u[p.substr(0, 1)] = ft(i);
  }
);
function b2(i) {
  return $h(i, this._week.dow, this._week.doy).week;
}
var R2 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function D2() {
  return this._week.dow;
}
function k2() {
  return this._week.doy;
}
function M2(i) {
  var u = this.localeData().week(this);
  return i == null ? u : this.add((i - u) * 7, "d");
}
function O2(i) {
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
Kh(["dd", "ddd", "dddd"], function(i, u, c, p) {
  var m = c._locale.weekdaysParse(i, p, c._strict);
  m != null ? u.d = m : ot(c).invalidWeekday = i;
});
Kh(["d", "e", "E"], function(i, u, c, p) {
  u[p] = ft(i);
});
function N2(i, u) {
  return typeof i != "string" ? i : isNaN(i) ? (i = u.weekdaysParse(i), typeof i == "number" ? i : null) : parseInt(i, 10);
}
function L2(i, u) {
  return typeof i == "string" ? u.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i;
}
function XE(i, u) {
  return i.slice(u, 7).concat(i.slice(0, u));
}
var U2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ib = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), z2 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), A2 = Zh, j2 = Zh, F2 = Zh;
function H2(i, u) {
  var c = tl(this._weekdays) ? this._weekdays : this._weekdays[i && i !== !0 && this._weekdays.isFormat.test(u) ? "format" : "standalone"];
  return i === !0 ? XE(c, this._week.dow) : i ? c[i.day()] : c;
}
function Y2(i) {
  return i === !0 ? XE(this._weekdaysShort, this._week.dow) : i ? this._weekdaysShort[i.day()] : this._weekdaysShort;
}
function P2(i) {
  return i === !0 ? XE(this._weekdaysMin, this._week.dow) : i ? this._weekdaysMin[i.day()] : this._weekdaysMin;
}
function V2(i, u, c) {
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
function I2(i, u, c) {
  var p, m, E;
  if (this._weekdaysParseExact)
    return V2.call(this, i, u, c);
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
function B2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var u = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return i != null ? (i = N2(i, this.localeData()), this.add(i - u, "d")) : u;
}
function W2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  var u = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return i == null ? u : this.add(i - u, "d");
}
function $2(i) {
  if (!this.isValid())
    return i != null ? this : NaN;
  if (i != null) {
    var u = L2(i, this.localeData());
    return this.day(this.day() % 7 ? u : u - 7);
  } else
    return this.day() || 7;
}
function G2(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || JE.call(this), i ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Rt(this, "_weekdaysRegex") || (this._weekdaysRegex = A2), this._weekdaysStrictRegex && i ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Q2(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || JE.call(this), i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Rt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = j2), this._weekdaysShortStrictRegex && i ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function q2(i) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || JE.call(this), i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Rt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = F2), this._weekdaysMinStrictRegex && i ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function JE() {
  function i(z, U) {
    return U.length - z.length;
  }
  var u = [], c = [], p = [], m = [], E, g, R, b, D;
  for (E = 0; E < 7; E++)
    g = Bl([2e3, 1]).day(E), R = ei(this.weekdaysMin(g, "")), b = ei(this.weekdaysShort(g, "")), D = ei(this.weekdays(g, "")), u.push(R), c.push(b), p.push(D), m.push(R), m.push(b), m.push(D);
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
function Z2() {
  return this.hours() || 24;
}
Ye("H", ["HH", 2], 0, "hour");
Ye("h", ["hh", 2], 0, e_);
Ye("k", ["kk", 2], 0, Z2);
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
xe("H", an);
xe("h", an);
xe("k", an);
xe("HH", an, ti);
xe("hh", an, ti);
xe("kk", an, ti);
xe("hmm", Zx);
xe("hmmss", Kx);
xe("Hmm", Zx);
xe("Hmmss", Kx);
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
  u[nr] = ft(i.substr(0, p)), u[el] = ft(i.substr(p)), ot(c).bigHour = !0;
});
Vt("hmmss", function(i, u, c) {
  var p = i.length - 4, m = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[el] = ft(i.substr(p, 2)), u[Vo] = ft(i.substr(m)), ot(c).bigHour = !0;
});
Vt("Hmm", function(i, u, c) {
  var p = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[el] = ft(i.substr(p));
});
Vt("Hmmss", function(i, u, c) {
  var p = i.length - 4, m = i.length - 2;
  u[nr] = ft(i.substr(0, p)), u[el] = ft(i.substr(p, 2)), u[Vo] = ft(i.substr(m));
});
function K2(i) {
  return (i + "").toLowerCase().charAt(0) === "p";
}
var X2 = /[ap]\.?m?\.?/i, J2 = md("Hours", !0);
function eU(i, u, c) {
  return i > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
}
var ub = {
  calendar: IL,
  longDateFormat: GL,
  invalidDate: qL,
  ordinal: KL,
  dayOfMonthOrdinalParse: XL,
  relativeTime: e2,
  months: h2,
  monthsShort: Xx,
  week: R2,
  weekdays: U2,
  weekdaysMin: z2,
  weekdaysShort: ib,
  meridiemParse: X2
}, sn = {}, jh = {}, Gh;
function tU(i, u) {
  var c, p = Math.min(i.length, u.length);
  for (c = 0; c < p; c += 1)
    if (i[c] !== u[c])
      return c;
  return p;
}
function lx(i) {
  return i && i.toLowerCase().replace("_", "-");
}
function nU(i) {
  for (var u = 0, c, p, m, E; u < i.length; ) {
    for (E = lx(i[u]).split("-"), c = E.length, p = lx(i[u + 1]), p = p ? p.split("-") : null; c > 0; ) {
      if (m = xg(E.slice(0, c).join("-")), m)
        return m;
      if (p && p.length >= c && tU(E, p) >= c - 1)
        break;
      c--;
    }
    u++;
  }
  return Gh;
}
function rU(i) {
  return i.match("^[^/\\\\]*$") != null;
}
function xg(i) {
  var u = null, c;
  if (sn[i] === void 0 && typeof module < "u" && module && module.exports && rU(i))
    try {
      u = Gh._abbr, c = require, c("./locale/" + i), Xu(u);
    } catch {
      sn[i] = null;
    }
  return sn[i];
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
    if (u.abbr = i, sn[i] != null)
      Bx(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), p = sn[i]._config;
    else if (u.parentLocale != null)
      if (sn[u.parentLocale] != null)
        p = sn[u.parentLocale]._config;
      else if (c = xg(u.parentLocale), c != null)
        p = c._config;
      else
        return jh[u.parentLocale] || (jh[u.parentLocale] = []), jh[u.parentLocale].push({
          name: i,
          config: u
        }), null;
    return sn[i] = new GE(DE(p, u)), jh[i] && jh[i].forEach(function(m) {
      t_(m.name, m.config);
    }), Xu(i), sn[i];
  } else
    return delete sn[i], null;
}
function aU(i, u) {
  if (u != null) {
    var c, p, m = ub;
    sn[i] != null && sn[i].parentLocale != null ? sn[i].set(DE(sn[i]._config, u)) : (p = xg(i), p != null && (m = p._config), u = DE(m, u), p == null && (u.abbr = i), c = new GE(u), c.parentLocale = sn[i], sn[i] = c), Xu(i);
  } else
    sn[i] != null && (sn[i].parentLocale != null ? (sn[i] = sn[i].parentLocale, i === Xu() && Xu(i)) : sn[i] != null && delete sn[i]);
  return sn[i];
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
  return nU(i);
}
function iU() {
  return kE(sn);
}
function n_(i) {
  var u, c = i._a;
  return c && ot(i).overflow === -2 && (u = c[Po] < 0 || c[Po] > 11 ? Po : c[Vl] < 1 || c[Vl] > Tg(c[$r], c[Po]) ? Vl : c[nr] < 0 || c[nr] > 24 || c[nr] === 24 && (c[el] !== 0 || c[Vo] !== 0 || c[cc] !== 0) ? nr : c[el] < 0 || c[el] > 59 ? el : c[Vo] < 0 || c[Vo] > 59 ? Vo : c[cc] < 0 || c[cc] > 999 ? cc : -1, ot(i)._overflowDayOfYear && (u < $r || u > Vl) && (u = Vl), ot(i)._overflowWeeks && u === -1 && (u = f2), ot(i)._overflowWeekday && u === -1 && (u = d2), ot(i).overflow = u), i;
}
var lU = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, oU = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, uU = /Z|[+-]\d\d(?::?\d\d)?/, Jy = [
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
], sU = /^\/?Date\((-?\d+)/i, cU = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, fU = {
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
  var u, c, p = i._i, m = lU.exec(p) || oU.exec(p), E, g, R, b, D = Jy.length, z = fE.length;
  if (m) {
    for (ot(i).iso = !0, u = 0, c = D; u < c; u++)
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
          R = (m[2] || " ") + fE[u][0];
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
      if (uU.exec(m[4]))
        b = "Z";
      else {
        i._isValid = !1;
        return;
      }
    i._f = g + (R || "") + (b || ""), a_(i);
  } else
    i._isValid = !1;
}
function dU(i, u, c, p, m, E) {
  var g = [
    pU(i),
    Xx.indexOf(u),
    parseInt(c, 10),
    parseInt(p, 10),
    parseInt(m, 10)
  ];
  return E && g.push(parseInt(E, 10)), g;
}
function pU(i) {
  var u = parseInt(i, 10);
  return u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u;
}
function hU(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function vU(i, u, c) {
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
function mU(i, u, c) {
  if (i)
    return fU[i];
  if (u)
    return 0;
  var p = parseInt(c, 10), m = p % 100, E = (p - m) / 100;
  return E * 60 + m;
}
function cb(i) {
  var u = cU.exec(hU(i._i)), c;
  if (u) {
    if (c = dU(
      u[4],
      u[3],
      u[2],
      u[5],
      u[6],
      u[7]
    ), !vU(u[1], c, i))
      return;
    i._a = c, i._tzm = mU(u[8], u[9], u[10]), i._d = Wh.apply(null, i._a), i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), ot(i).rfc2822 = !0;
  } else
    i._isValid = !1;
}
function yU(i) {
  var u = sU.exec(i._i);
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
function gU(i) {
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
    for (m = gU(i), i._w && i._a[Vl] == null && i._a[Po] == null && SU(i), i._dayOfYear != null && (g = fd(i._a[$r], m[$r]), (i._dayOfYear > Vh(g) || i._dayOfYear === 0) && (ot(i)._overflowDayOfYear = !0), c = Wh(g, 0, i._dayOfYear), i._a[Po] = c.getUTCMonth(), i._a[Vl] = c.getUTCDate()), u = 0; u < 3 && i._a[u] == null; ++u)
      i._a[u] = p[u] = m[u];
    for (; u < 7; u++)
      i._a[u] = p[u] = i._a[u] == null ? u === 2 ? 1 : 0 : i._a[u];
    i._a[nr] === 24 && i._a[el] === 0 && i._a[Vo] === 0 && i._a[cc] === 0 && (i._nextDay = !0, i._a[nr] = 0), i._d = (i._useUTC ? Wh : x2).apply(
      null,
      p
    ), E = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), i._tzm != null && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[nr] = 24), i._w && typeof i._w.d < "u" && i._w.d !== E && (ot(i).weekdayMismatch = !0);
  }
}
function SU(i) {
  var u, c, p, m, E, g, R, b, D;
  u = i._w, u.GG != null || u.W != null || u.E != null ? (E = 1, g = 4, c = fd(
    u.GG,
    i._a[$r],
    $h(rn(), 1, 4).year
  ), p = fd(u.W, 1), m = fd(u.E, 1), (m < 1 || m > 7) && (b = !0)) : (E = i._locale._week.dow, g = i._locale._week.doy, D = $h(rn(), E, g), c = fd(u.gg, i._a[$r], D.year), p = fd(u.w, D.week), u.d != null ? (m = u.d, (m < 0 || m > 6) && (b = !0)) : u.e != null ? (m = u.e + E, (u.e < 0 || u.e > 6) && (b = !0)) : m = E), p < 1 || p > Io(c, E, g) ? ot(i)._overflowWeeks = !0 : b != null ? ot(i)._overflowWeekday = !0 : (R = ab(c, p, m, E, g), i._a[$r] = R.year, i._dayOfYear = R.dayOfYear);
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
  var u = "" + i._i, c, p, m, E, g, R = u.length, b = 0, D, z;
  for (m = Wx(i._f, i._locale).match(QE) || [], z = m.length, c = 0; c < z; c++)
    E = m[c], p = (u.match(u2(E, i)) || [])[0], p && (g = u.substr(0, u.indexOf(p)), g.length > 0 && ot(i).unusedInput.push(g), u = u.slice(
      u.indexOf(p) + p.length
    ), b += p.length), pd[E] ? (p ? ot(i).empty = !1 : ot(i).unusedTokens.push(E), c2(E, p, i)) : i._strict && !p && ot(i).unusedTokens.push(E);
  ot(i).charsLeftOver = R - b, u.length > 0 && ot(i).unusedInput.push(u), i._a[nr] <= 12 && ot(i).bigHour === !0 && i._a[nr] > 0 && (ot(i).bigHour = void 0), ot(i).parsedDateParts = i._a.slice(0), ot(i).meridiem = i._meridiem, i._a[nr] = EU(
    i._locale,
    i._a[nr],
    i._meridiem
  ), D = ot(i).era, D !== null && (i._a[$r] = i._locale.erasConvertYear(D, i._a[$r])), r_(i), n_(i);
}
function EU(i, u, c) {
  var p;
  return c == null ? u : i.meridiemHour != null ? i.meridiemHour(u, c) : (i.isPM != null && (p = i.isPM(c), p && u < 12 && (u += 12), !p && u === 12 && (u = 0)), u);
}
function _U(i) {
  var u, c, p, m, E, g, R = !1, b = i._f.length;
  if (b === 0) {
    ot(i).invalidFormat = !0, i._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (m = 0; m < b; m++)
    E = 0, g = !1, u = $E({}, i), i._useUTC != null && (u._useUTC = i._useUTC), u._f = i._f[m], a_(u), WE(u) && (g = !0), E += ot(u).charsLeftOver, E += ot(u).unusedTokens.length * 10, ot(u).score = E, R ? E < p && (p = E, c = u) : (p == null || E < p || g) && (p = E, c = u, g && (R = !0));
  Zu(i, c || u);
}
function wU(i) {
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
function CU(i) {
  var u = new qh(n_(fb(i)));
  return u._nextDay && (u.add(1, "d"), u._nextDay = void 0), u;
}
function fb(i) {
  var u = i._i, c = i._f;
  return i._locale = i._locale || $o(i._l), u === null || c === void 0 && u === "" ? yg({ nullInput: !0 }) : (typeof u == "string" && (i._i = u = i._locale.preparse(u)), nl(u) ? new qh(n_(u)) : (Qh(u) ? i._d = u : tl(c) ? _U(i) : c ? a_(i) : TU(i), WE(i) || (i._d = null), i));
}
function TU(i) {
  var u = i._i;
  ja(u) ? i._d = new Date(Se.now()) : Qh(u) ? i._d = new Date(u.valueOf()) : typeof u == "string" ? yU(i) : tl(u) ? (i._a = Vx(u.slice(0), function(c) {
    return parseInt(c, 10);
  }), r_(i)) : fc(u) ? wU(i) : Bo(u) ? i._d = new Date(u) : Se.createFromInputFallback(i);
}
function db(i, u, c, p, m) {
  var E = {};
  return (u === !0 || u === !1) && (p = u, u = void 0), (c === !0 || c === !1) && (p = c, c = void 0), (fc(i) && BE(i) || tl(i) && i.length === 0) && (i = void 0), E._isAMomentObject = !0, E._useUTC = E._isUTC = m, E._l = c, E._i = i, E._f = u, E._strict = p, CU(E);
}
function rn(i, u, c, p) {
  return db(i, u, c, p, !1);
}
var xU = Ci(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i < this ? this : i : yg();
  }
), bU = Ci(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var i = rn.apply(null, arguments);
    return this.isValid() && i.isValid() ? i > this ? this : i : yg();
  }
);
function pb(i, u) {
  var c, p;
  if (u.length === 1 && tl(u[0]) && (u = u[0]), !u.length)
    return rn();
  for (c = u[0], p = 1; p < u.length; ++p)
    (!u[p].isValid() || u[p][i](c)) && (c = u[p]);
  return c;
}
function RU() {
  var i = [].slice.call(arguments, 0);
  return pb("isBefore", i);
}
function DU() {
  var i = [].slice.call(arguments, 0);
  return pb("isAfter", i);
}
var kU = function() {
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
function MU(i) {
  var u, c = !1, p, m = Fh.length;
  for (u in i)
    if (Rt(i, u) && !(Mn.call(Fh, u) !== -1 && (i[u] == null || !isNaN(i[u]))))
      return !1;
  for (p = 0; p < m; ++p)
    if (i[Fh[p]]) {
      if (c)
        return !1;
      parseFloat(i[Fh[p]]) !== ft(i[Fh[p]]) && (c = !0);
    }
  return !0;
}
function OU() {
  return this._isValid;
}
function NU() {
  return rl(NaN);
}
function bg(i) {
  var u = qE(i), c = u.year || 0, p = u.quarter || 0, m = u.month || 0, E = u.week || u.isoWeek || 0, g = u.day || 0, R = u.hour || 0, b = u.minute || 0, D = u.second || 0, z = u.millisecond || 0;
  this._isValid = MU(u), this._milliseconds = +z + D * 1e3 + // 1000
  b * 6e4 + // 1000 * 60
  R * 1e3 * 60 * 60, this._days = +g + E * 7, this._months = +m + p * 3 + c * 12, this._data = {}, this._locale = $o(), this._bubble();
}
function ig(i) {
  return i instanceof bg;
}
function OE(i) {
  return i < 0 ? Math.round(-1 * i) * -1 : Math.round(i);
}
function LU(i, u, c) {
  var p = Math.min(i.length, u.length), m = Math.abs(i.length - u.length), E = 0, g;
  for (g = 0; g < p; g++)
    (c && i[g] !== u[g] || !c && ft(i[g]) !== ft(u[g])) && E++;
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
var UU = /([\+\-]|\d\d)/gi;
function i_(i, u) {
  var c = (u || "").match(i), p, m, E;
  return c === null ? null : (p = c[c.length - 1] || [], m = (p + "").match(UU) || ["-", 0, 0], E = +(m[1] * 60) + ft(m[2]), E === 0 ? 0 : m[0] === "+" ? E : -E);
}
function l_(i, u) {
  var c, p;
  return u._isUTC ? (c = u.clone(), p = (nl(i) || Qh(i) ? i.valueOf() : rn(i).valueOf()) - c.valueOf(), c._d.setTime(c._d.valueOf() + p), Se.updateOffset(c, !1), c) : rn(i).local();
}
function NE(i) {
  return -Math.round(i._d.getTimezoneOffset());
}
Se.updateOffset = function() {
};
function zU(i, u, c) {
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
function AU(i, u) {
  return i != null ? (typeof i != "string" && (i = -i), this.utcOffset(i, u), this) : -this.utcOffset();
}
function jU(i) {
  return this.utcOffset(0, i);
}
function FU(i) {
  return this._isUTC && (this.utcOffset(0, i), this._isUTC = !1, i && this.subtract(NE(this), "m")), this;
}
function HU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var i = i_(l2, this._i);
    i != null ? this.utcOffset(i) : this.utcOffset(0, !0);
  }
  return this;
}
function YU(i) {
  return this.isValid() ? (i = i ? rn(i).utcOffset() : 0, (this.utcOffset() - i) % 60 === 0) : !1;
}
function PU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function VU() {
  if (!ja(this._isDSTShifted))
    return this._isDSTShifted;
  var i = {}, u;
  return $E(i, this), i = fb(i), i._a ? (u = i._isUTC ? Bl(i._a) : rn(i._a), this._isDSTShifted = this.isValid() && LU(i._a, u.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function IU() {
  return this.isValid() ? !this._isUTC : !1;
}
function BU() {
  return this.isValid() ? this._isUTC : !1;
}
function vb() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var WU = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, $U = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function rl(i, u) {
  var c = i, p = null, m, E, g;
  return ig(i) ? c = {
    ms: i._milliseconds,
    d: i._days,
    M: i._months
  } : Bo(i) || !isNaN(+i) ? (c = {}, u ? c[u] = +i : c.milliseconds = +i) : (p = WU.exec(i)) ? (m = p[1] === "-" ? -1 : 1, c = {
    y: 0,
    d: ft(p[Vl]) * m,
    h: ft(p[nr]) * m,
    m: ft(p[el]) * m,
    s: ft(p[Vo]) * m,
    ms: ft(OE(p[cc] * 1e3)) * m
    // the millisecond decimal point is included in the match
  }) : (p = $U.exec(i)) ? (m = p[1] === "-" ? -1 : 1, c = {
    y: sc(p[2], m),
    M: sc(p[3], m),
    w: sc(p[4], m),
    d: sc(p[5], m),
    h: sc(p[6], m),
    m: sc(p[7], m),
    s: sc(p[8], m)
  }) : c == null ? c = {} : typeof c == "object" && ("from" in c || "to" in c) && (g = GU(
    rn(c.from),
    rn(c.to)
  ), c = {}, c.ms = g.milliseconds, c.M = g.months), E = new bg(c), ig(i) && Rt(i, "_locale") && (E._locale = i._locale), ig(i) && Rt(i, "_isValid") && (E._isValid = i._isValid), E;
}
rl.fn = bg.prototype;
rl.invalid = NU;
function sc(i, u) {
  var c = i && parseFloat(i.replace(",", "."));
  return (isNaN(c) ? 0 : c) * u;
}
function ox(i, u) {
  var c = {};
  return c.months = u.month() - i.month() + (u.year() - i.year()) * 12, i.clone().add(c.months, "M").isAfter(u) && --c.months, c.milliseconds = +u - +i.clone().add(c.months, "M"), c;
}
function GU(i, u) {
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
var QU = mb(1, "add"), qU = mb(-1, "subtract");
function gb(i) {
  return typeof i == "string" || i instanceof String;
}
function ZU(i) {
  return nl(i) || Qh(i) || gb(i) || Bo(i) || XU(i) || KU(i) || i === null || i === void 0;
}
function KU(i) {
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
function XU(i) {
  var u = tl(i), c = !1;
  return u && (c = i.filter(function(p) {
    return !Bo(p) && gb(i);
  }).length === 0), u && c;
}
function JU(i) {
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
function ez(i, u) {
  var c = i.diff(u, "days", !0);
  return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
}
function tz(i, u) {
  arguments.length === 1 && (arguments[0] ? ZU(arguments[0]) ? (i = arguments[0], u = void 0) : JU(arguments[0]) && (u = arguments[0], i = void 0) : (i = void 0, u = void 0));
  var c = i || rn(), p = l_(c, this).startOf("day"), m = Se.calendarFormat(this, p) || "sameElse", E = u && (Wl(u[m]) ? u[m].call(this, c) : u[m]);
  return this.format(
    E || this.localeData().calendar(m, this, rn(c))
  );
}
function nz() {
  return new qh(this);
}
function rz(i, u) {
  var c = nl(i) ? i : rn(i);
  return this.isValid() && c.isValid() ? (u = Ti(u) || "millisecond", u === "millisecond" ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(u).valueOf()) : !1;
}
function az(i, u) {
  var c = nl(i) ? i : rn(i);
  return this.isValid() && c.isValid() ? (u = Ti(u) || "millisecond", u === "millisecond" ? this.valueOf() < c.valueOf() : this.clone().endOf(u).valueOf() < c.valueOf()) : !1;
}
function iz(i, u, c, p) {
  var m = nl(i) ? i : rn(i), E = nl(u) ? u : rn(u);
  return this.isValid() && m.isValid() && E.isValid() ? (p = p || "()", (p[0] === "(" ? this.isAfter(m, c) : !this.isBefore(m, c)) && (p[1] === ")" ? this.isBefore(E, c) : !this.isAfter(E, c))) : !1;
}
function lz(i, u) {
  var c = nl(i) ? i : rn(i), p;
  return this.isValid() && c.isValid() ? (u = Ti(u) || "millisecond", u === "millisecond" ? this.valueOf() === c.valueOf() : (p = c.valueOf(), this.clone().startOf(u).valueOf() <= p && p <= this.clone().endOf(u).valueOf())) : !1;
}
function oz(i, u) {
  return this.isSame(i, u) || this.isAfter(i, u);
}
function uz(i, u) {
  return this.isSame(i, u) || this.isBefore(i, u);
}
function sz(i, u, c) {
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
function cz() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function fz(i) {
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
function dz() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var i = "moment", u = "", c, p, m, E;
  return this.isLocal() || (i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", u = "Z"), c = "[" + i + '("]', p = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", m = "-MM-DD[T]HH:mm:ss.SSS", E = u + '[")]', this.format(c + p + m + E);
}
function pz(i) {
  i || (i = this.isUtc() ? Se.defaultFormatUtc : Se.defaultFormat);
  var u = ag(this, i);
  return this.localeData().postformat(u);
}
function hz(i, u) {
  return this.isValid() && (nl(i) && i.isValid() || rn(i).isValid()) ? rl({ to: this, from: i }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
}
function vz(i) {
  return this.from(rn(), i);
}
function mz(i, u) {
  return this.isValid() && (nl(i) && i.isValid() || rn(i).isValid()) ? rl({ from: this, to: i }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
}
function yz(i) {
  return this.to(rn(), i);
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
function gz(i) {
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
function Sz(i) {
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
function Ez() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function _z() {
  return Math.floor(this.valueOf() / 1e3);
}
function wz() {
  return new Date(this.valueOf());
}
function Cz() {
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
function Tz() {
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
function xz() {
  return this.isValid() ? this.toISOString() : null;
}
function bz() {
  return WE(this);
}
function Rz() {
  return Zu({}, ot(this));
}
function Dz() {
  return ot(this).overflow;
}
function kz() {
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
xe("NNNN", Yz);
xe("NNNNN", Pz);
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
xe("yo", Vz);
Vt(["y", "yy", "yyy", "yyyy"], $r);
Vt(["yo"], function(i, u, c, p) {
  var m;
  c._locale._eraYearOrdinalRegex && (m = i.match(c._locale._eraYearOrdinalRegex)), c._locale.eraYearOrdinalParse ? u[$r] = c._locale.eraYearOrdinalParse(i, m) : u[$r] = parseInt(i, 10);
});
function Mz(i, u) {
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
function Oz(i, u, c) {
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
function Nz(i, u) {
  var c = i.since <= i.until ? 1 : -1;
  return u === void 0 ? Se(i.since).year() : Se(i.since).year() + (u - i.offset) * c;
}
function Lz() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].name;
  return "";
}
function Uz() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].narrow;
  return "";
}
function zz() {
  var i, u, c, p = this.localeData().eras();
  for (i = 0, u = p.length; i < u; ++i)
    if (c = this.clone().startOf("day").valueOf(), p[i].since <= c && c <= p[i].until || p[i].until <= c && c <= p[i].since)
      return p[i].abbr;
  return "";
}
function Az() {
  var i, u, c, p, m = this.localeData().eras();
  for (i = 0, u = m.length; i < u; ++i)
    if (c = m[i].since <= m[i].until ? 1 : -1, p = this.clone().startOf("day").valueOf(), m[i].since <= p && p <= m[i].until || m[i].until <= p && p <= m[i].since)
      return (this.year() - Se(m[i].since).year()) * c + m[i].offset;
  return this.year();
}
function jz(i) {
  return Rt(this, "_erasNameRegex") || u_.call(this), i ? this._erasNameRegex : this._erasRegex;
}
function Fz(i) {
  return Rt(this, "_erasAbbrRegex") || u_.call(this), i ? this._erasAbbrRegex : this._erasRegex;
}
function Hz(i) {
  return Rt(this, "_erasNarrowRegex") || u_.call(this), i ? this._erasNarrowRegex : this._erasRegex;
}
function o_(i, u) {
  return u.erasAbbrRegex(i);
}
function Yz(i, u) {
  return u.erasNameRegex(i);
}
function Pz(i, u) {
  return u.erasNarrowRegex(i);
}
function Vz(i, u) {
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
xe("GG", an, ti);
xe("gg", an, ti);
xe("GGGG", KE, ZE);
xe("gggg", KE, ZE);
xe("GGGGG", _g, Sg);
xe("ggggg", _g, Sg);
Kh(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(i, u, c, p) {
    u[p.substr(0, 2)] = ft(i);
  }
);
Kh(["gg", "GG"], function(i, u, c, p) {
  u[p] = Se.parseTwoDigitYear(i);
});
function Iz(i) {
  return xb.call(
    this,
    i,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Bz(i) {
  return xb.call(
    this,
    i,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Wz() {
  return Io(this.year(), 1, 4);
}
function $z() {
  return Io(this.isoWeekYear(), 1, 4);
}
function Gz() {
  var i = this.localeData()._week;
  return Io(this.year(), i.dow, i.doy);
}
function Qz() {
  var i = this.localeData()._week;
  return Io(this.weekYear(), i.dow, i.doy);
}
function xb(i, u, c, p, m) {
  var E;
  return i == null ? $h(this, p, m).year : (E = Io(i, p, m), u > E && (u = E), qz.call(this, i, u, c, p, m));
}
function qz(i, u, c, p, m) {
  var E = ab(i, u, c, p, m), g = Wh(E.year, 0, E.dayOfYear);
  return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
}
Ye("Q", 0, "Qo", "quarter");
Gr("quarter", "Q");
Qr("quarter", 7);
xe("Q", Qx);
Vt("Q", function(i, u) {
  u[Po] = (ft(i) - 1) * 3;
});
function Zz(i) {
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
Vt(["D", "DD"], Vl);
Vt("Do", function(i, u) {
  u[Vl] = ft(i.match(an)[0]);
});
var bb = md("Date", !0);
Ye("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Gr("dayOfYear", "DDD");
Qr("dayOfYear", 4);
xe("DDD", Eg);
xe("DDDD", qx);
Vt(["DDD", "DDDD"], function(i, u, c) {
  c._dayOfYear = ft(i);
});
function Kz(i) {
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
Vt(["m", "mm"], el);
var Xz = md("Minutes", !1);
Ye("s", ["ss", 2], 0, "second");
Gr("second", "s");
Qr("second", 15);
xe("s", an);
xe("ss", an, ti);
Vt(["s", "ss"], Vo);
var Jz = md("Seconds", !1);
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
function eA(i, u) {
  u[cc] = ft(("0." + i) * 1e3);
}
for (Ku = "S"; Ku.length <= 9; Ku += "S")
  Vt(Ku, eA);
Rb = md("Milliseconds", !1);
Ye("z", 0, 0, "zoneAbbr");
Ye("zz", 0, 0, "zoneName");
function tA() {
  return this._isUTC ? "UTC" : "";
}
function nA() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var ie = qh.prototype;
ie.add = QU;
ie.calendar = tz;
ie.clone = nz;
ie.diff = sz;
ie.endOf = Sz;
ie.format = pz;
ie.from = hz;
ie.fromNow = vz;
ie.to = mz;
ie.toNow = yz;
ie.get = a2;
ie.invalidAt = Dz;
ie.isAfter = rz;
ie.isBefore = az;
ie.isBetween = iz;
ie.isSame = lz;
ie.isSameOrAfter = oz;
ie.isSameOrBefore = uz;
ie.isValid = bz;
ie.lang = Eb;
ie.locale = Sb;
ie.localeData = _b;
ie.max = bU;
ie.min = xU;
ie.parsingFlags = Rz;
ie.set = i2;
ie.startOf = gz;
ie.subtract = qU;
ie.toArray = Cz;
ie.toObject = Tz;
ie.toDate = wz;
ie.toISOString = fz;
ie.inspect = dz;
typeof Symbol < "u" && Symbol.for != null && (ie[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
ie.toJSON = xz;
ie.toString = cz;
ie.unix = _z;
ie.valueOf = Ez;
ie.creationData = kz;
ie.eraName = Lz;
ie.eraNarrow = Uz;
ie.eraAbbr = zz;
ie.eraYear = Az;
ie.year = rb;
ie.isLeapYear = T2;
ie.weekYear = Iz;
ie.isoWeekYear = Bz;
ie.quarter = ie.quarters = Zz;
ie.month = tb;
ie.daysInMonth = _2;
ie.week = ie.weeks = M2;
ie.isoWeek = ie.isoWeeks = O2;
ie.weeksInYear = Gz;
ie.weeksInWeekYear = Qz;
ie.isoWeeksInYear = Wz;
ie.isoWeeksInISOWeekYear = $z;
ie.date = bb;
ie.day = ie.days = B2;
ie.weekday = W2;
ie.isoWeekday = $2;
ie.dayOfYear = Kz;
ie.hour = ie.hours = J2;
ie.minute = ie.minutes = Xz;
ie.second = ie.seconds = Jz;
ie.millisecond = ie.milliseconds = Rb;
ie.utcOffset = zU;
ie.utc = jU;
ie.local = FU;
ie.parseZone = HU;
ie.hasAlignedHourOffset = YU;
ie.isDST = PU;
ie.isLocal = IU;
ie.isUtcOffset = BU;
ie.isUtc = vb;
ie.isUTC = vb;
ie.zoneAbbr = tA;
ie.zoneName = nA;
ie.dates = Ci(
  "dates accessor is deprecated. Use date instead.",
  bb
);
ie.months = Ci(
  "months accessor is deprecated. Use month instead",
  tb
);
ie.years = Ci(
  "years accessor is deprecated. Use year instead",
  rb
);
ie.zone = Ci(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  AU
);
ie.isDSTShifted = Ci(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  VU
);
function rA(i) {
  return rn(i * 1e3);
}
function aA() {
  return rn.apply(null, arguments).parseZone();
}
function Db(i) {
  return i;
}
var Dt = GE.prototype;
Dt.calendar = BL;
Dt.longDateFormat = QL;
Dt.invalidDate = ZL;
Dt.ordinal = JL;
Dt.preparse = Db;
Dt.postformat = Db;
Dt.relativeTime = t2;
Dt.pastFuture = n2;
Dt.set = VL;
Dt.eras = Mz;
Dt.erasParse = Oz;
Dt.erasConvertYear = Nz;
Dt.erasAbbrRegex = Fz;
Dt.erasNameRegex = jz;
Dt.erasNarrowRegex = Hz;
Dt.months = y2;
Dt.monthsShort = g2;
Dt.monthsParse = E2;
Dt.monthsRegex = C2;
Dt.monthsShortRegex = w2;
Dt.week = b2;
Dt.firstDayOfYear = k2;
Dt.firstDayOfWeek = D2;
Dt.weekdays = H2;
Dt.weekdaysMin = P2;
Dt.weekdaysShort = Y2;
Dt.weekdaysParse = I2;
Dt.weekdaysRegex = G2;
Dt.weekdaysShortRegex = Q2;
Dt.weekdaysMinRegex = q2;
Dt.isPM = K2;
Dt.meridiem = eU;
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
  var m = $o(), E = i ? m._week.dow : 0, g, R = [];
  if (c != null)
    return pg(u, (c + E) % 7, p, "day");
  for (g = 0; g < 7; g++)
    R[g] = pg(u, (g + E) % 7, p, "day");
  return R;
}
function iA(i, u) {
  return kb(i, u, "months");
}
function lA(i, u) {
  return kb(i, u, "monthsShort");
}
function oA(i, u, c) {
  return s_(i, u, c, "weekdays");
}
function uA(i, u, c) {
  return s_(i, u, c, "weekdaysShort");
}
function sA(i, u, c) {
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
    var u = i % 10, c = ft(i % 100 / 10) === 1 ? "th" : u === 1 ? "st" : u === 2 ? "nd" : u === 3 ? "rd" : "th";
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
function cA() {
  var i = this._data;
  return this._milliseconds = Ho(this._milliseconds), this._days = Ho(this._days), this._months = Ho(this._months), i.milliseconds = Ho(i.milliseconds), i.seconds = Ho(i.seconds), i.minutes = Ho(i.minutes), i.hours = Ho(i.hours), i.months = Ho(i.months), i.years = Ho(i.years), this;
}
function Mb(i, u, c, p) {
  var m = rl(u, c);
  return i._milliseconds += p * m._milliseconds, i._days += p * m._days, i._months += p * m._months, i._bubble();
}
function fA(i, u) {
  return Mb(this, i, u, 1);
}
function dA(i, u) {
  return Mb(this, i, u, -1);
}
function ux(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function pA() {
  var i = this._milliseconds, u = this._days, c = this._months, p = this._data, m, E, g, R, b;
  return i >= 0 && u >= 0 && c >= 0 || i <= 0 && u <= 0 && c <= 0 || (i += ux(LE(c) + u) * 864e5, u = 0, c = 0), p.milliseconds = i % 1e3, m = wi(i / 1e3), p.seconds = m % 60, E = wi(m / 60), p.minutes = E % 60, g = wi(E / 60), p.hours = g % 24, u += wi(g / 24), b = wi(Ob(u)), c += b, u -= ux(LE(b)), R = wi(c / 12), c %= 12, p.days = u, p.months = c, p.years = R, this;
}
function Ob(i) {
  return i * 4800 / 146097;
}
function LE(i) {
  return i * 146097 / 4800;
}
function hA(i) {
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
function vA() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ft(this._months / 12) * 31536e6 : NaN;
}
function Go(i) {
  return function() {
    return this.as(i);
  };
}
var mA = Go("ms"), yA = Go("s"), gA = Go("m"), SA = Go("h"), EA = Go("d"), _A = Go("w"), wA = Go("M"), CA = Go("Q"), TA = Go("y");
function xA() {
  return rl(this);
}
function bA(i) {
  return i = Ti(i), this.isValid() ? this[i + "s"]() : NaN;
}
function hc(i) {
  return function() {
    return this.isValid() ? this._data[i] : NaN;
  };
}
var RA = hc("milliseconds"), DA = hc("seconds"), kA = hc("minutes"), MA = hc("hours"), OA = hc("days"), NA = hc("months"), LA = hc("years");
function UA() {
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
function zA(i, u, c, p, m) {
  return m.relativeTime(u || 1, !!c, i, p);
}
function AA(i, u, c, p) {
  var m = rl(i).abs(), E = Yo(m.as("s")), g = Yo(m.as("m")), R = Yo(m.as("h")), b = Yo(m.as("d")), D = Yo(m.as("M")), z = Yo(m.as("w")), U = Yo(m.as("y")), A = E <= c.ss && ["s", E] || E < c.s && ["ss", E] || g <= 1 && ["m"] || g < c.m && ["mm", g] || R <= 1 && ["h"] || R < c.h && ["hh", R] || b <= 1 && ["d"] || b < c.d && ["dd", b];
  return c.w != null && (A = A || z <= 1 && ["w"] || z < c.w && ["ww", z]), A = A || D <= 1 && ["M"] || D < c.M && ["MM", D] || U <= 1 && ["y"] || ["yy", U], A[2] = u, A[3] = +i > 0, A[4] = p, zA.apply(null, A);
}
function jA(i) {
  return i === void 0 ? Yo : typeof i == "function" ? (Yo = i, !0) : !1;
}
function FA(i, u) {
  return dd[i] === void 0 ? !1 : u === void 0 ? dd[i] : (dd[i] = u, i === "s" && (dd.ss = u - 1), !0);
}
function HA(i, u) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var c = !1, p = dd, m, E;
  return typeof i == "object" && (u = i, i = !1), typeof i == "boolean" && (c = i), typeof u == "object" && (p = Object.assign({}, dd, u), u.s != null && u.ss == null && (p.ss = u.s - 1)), m = this.localeData(), E = AA(this, !c, p, m), c && (E = m.pastFuture(+this, E)), m.postformat(E);
}
var dE = Math.abs;
function cd(i) {
  return (i > 0) - (i < 0) || +i;
}
function Dg() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var i = dE(this._milliseconds) / 1e3, u = dE(this._days), c = dE(this._months), p, m, E, g, R = this.asSeconds(), b, D, z, U;
  return R ? (p = wi(i / 60), m = wi(p / 60), i %= 60, p %= 60, E = wi(c / 12), c %= 12, g = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", b = R < 0 ? "-" : "", D = cd(this._months) !== cd(R) ? "-" : "", z = cd(this._days) !== cd(R) ? "-" : "", U = cd(this._milliseconds) !== cd(R) ? "-" : "", b + "P" + (E ? D + E + "Y" : "") + (c ? D + c + "M" : "") + (u ? z + u + "D" : "") + (m || p || i ? "T" : "") + (m ? U + m + "H" : "") + (p ? U + p + "M" : "") + (i ? U + g + "S" : "")) : "P0D";
}
var wt = bg.prototype;
wt.isValid = OU;
wt.abs = cA;
wt.add = fA;
wt.subtract = dA;
wt.as = hA;
wt.asMilliseconds = mA;
wt.asSeconds = yA;
wt.asMinutes = gA;
wt.asHours = SA;
wt.asDays = EA;
wt.asWeeks = _A;
wt.asMonths = wA;
wt.asQuarters = CA;
wt.asYears = TA;
wt.valueOf = vA;
wt._bubble = pA;
wt.clone = xA;
wt.get = bA;
wt.milliseconds = RA;
wt.seconds = DA;
wt.minutes = kA;
wt.hours = MA;
wt.days = OA;
wt.weeks = UA;
wt.months = NA;
wt.years = LA;
wt.humanize = HA;
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
xe("X", o2);
Vt("X", function(i, u, c) {
  c._d = new Date(parseFloat(i) * 1e3);
});
Vt("x", function(i, u, c) {
  c._d = new Date(ft(i));
});
//! moment.js
Se.version = "2.29.4";
YL(rn);
Se.fn = ie;
Se.min = RU;
Se.max = DU;
Se.now = kU;
Se.utc = Bl;
Se.unix = rA;
Se.months = iA;
Se.isDate = Qh;
Se.locale = Xu;
Se.invalid = yg;
Se.duration = rl;
Se.isMoment = nl;
Se.weekdays = oA;
Se.parseZone = aA;
Se.localeData = $o;
Se.isDuration = ig;
Se.monthsShort = lA;
Se.weekdaysMin = sA;
Se.defineLocale = t_;
Se.updateLocale = aU;
Se.locales = iU;
Se.weekdaysShort = uA;
Se.normalizeUnits = Ti;
Se.relativeTimeRounding = jA;
Se.relativeTimeThreshold = FA;
Se.calendarFormat = ez;
Se.prototype = ie;
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
const YA = {
  206: "Almoço",
  205: "Banheiro"
}, PA = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], VA = ({
  data: i,
  lastSevenDays: u
}) => /* @__PURE__ */ W.jsx("div", { className: "detailed-workday--period", children: u.map((c, p) => {
  const m = _i(c).format("DD [de] MMMM"), E = i.find(
    ({ date: b }) => _i(b).format("YYYY/MM/DD") === c.format("YYYY/MM/DD")
  );
  if (E === void 0)
    return /* @__PURE__ */ W.jsx("div", { className: "day", children: /* @__PURE__ */ W.jsx("span", { children: m }) }, p);
  const g = _i.utc(E.start).format("HH[h]mm"), R = _i.utc(E.finish).format("HH[h]mm");
  return /* @__PURE__ */ W.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ W.jsx("span", { children: m }),
    /* @__PURE__ */ W.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ W.jsxs("span", { className: "service-time", children: [
      g,
      " - ",
      R
    ] }),
    /* @__PURE__ */ W.jsxs("span", { className: "description", children: [
      E.description,
      "*"
    ] }),
    /* @__PURE__ */ W.jsx("div", { className: "breaks", children: E.breaks.map((b, D) => {
      const z = _i.utc(b.start).format("HH[h]mm"), U = _i.utc(b.finish).format("HH[h]mm");
      return /* @__PURE__ */ W.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ W.jsx("span", { className: "break-item--label", children: YA[String(b.type)] }),
        /* @__PURE__ */ W.jsxs("span", { className: "break-item--content", children: [
          z,
          " - ",
          U
        ] })
      ] }, D);
    }) })
  ] }, p);
}) }), bj = () => {
  const i = Array.from({ length: 7 }).map(
    (u, c) => _i().clone().subtract(7 - c, "days")
  );
  return /* @__PURE__ */ W.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ W.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ W.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ W.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ W.jsx(IE, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ W.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ W.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ W.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ W.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ W.jsx("div", { className: "weekdays", children: i.map((u) => {
          const c = _i(u).day();
          return /* @__PURE__ */ W.jsx("span", { className: "", children: PA[c] });
        }) })
      ] }),
      HL.map((u, c) => /* @__PURE__ */ W.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ W.jsx("span", { children: u.agent.firstName }),
        /* @__PURE__ */ W.jsx(
          VA,
          {
            data: u.period,
            lastSevenDays: i
          },
          c
        )
      ] }, c))
    ] })
  ] });
}, Rj = ({ logo: i, items: u }) => /* @__PURE__ */ W.jsxs("header", { className: "header", children: [
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
}, sx = (i, u, c, p, m, E = 0, g) => {
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
      b.route === c && (R = D), E !== null && (R += m[E].submenus.length), Object.hasOwnProperty.call(b, "submenus") && b.submenus.forEach((z, U) => {
        `${b.route}${z.route}` === c && (E === D ? R = D + U + 1 : R = D);
      });
    }), (g = document.activeElement) == null || g.blur(), R > -1 && (i.current.style.top = `calc(48px * ${R})`, i.current.classList.add("active"));
  }
}, Dj = ({
  data: i,
  itemLink: u,
  onLogout: c,
  pathname: p = ""
}) => {
  const m = tr(null), E = tr(null), g = tr(null), R = tr(3), [b, D] = Rr(!1), [z, U] = Rr(null);
  return /* @__PURE__ */ W.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: m,
      onKeyDown: (A) => IA(A, R),
      children: [
        /* @__PURE__ */ W.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              m.current !== null && (D((A) => !A), m.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ W.jsx(Wr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ W.jsxs(
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
              /* @__PURE__ */ W.jsx("span", { ref: E, className: "sidebar-selector" }),
              /* @__PURE__ */ W.jsx("div", { ref: g, className: "sidebar-tooltip" }),
              i.map((A, Q) => /* @__PURE__ */ W.jsxs(wN, { children: [
                /* @__PURE__ */ W.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => sx(
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
                        (P) => P === Q ? null : Q
                      );
                    },
                    children: [
                      /* @__PURE__ */ W.jsx("div", { className: "sidebar-item--icon", children: u({
                        icon: A.icon,
                        label: A.label,
                        route: A.route,
                        isOpen: b,
                        props: {
                          className: A != null && A.submenus ? "group" : "",
                          onClick: () => {
                            R.current = Q + 2, E.current && E.current.classList.toggle("active");
                          }
                        }
                      }) }),
                      (A == null ? void 0 : A.submenus) && /* @__PURE__ */ W.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        b && /* @__PURE__ */ W.jsx("span", { className: "sidebar-item--indicator", children: A.submenus.length }),
                        /* @__PURE__ */ W.jsx(
                          Wr,
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
                (A == null ? void 0 : A.submenus) && Q === z && /* @__PURE__ */ W.jsx("div", { className: "sidebar-submenu", children: A.submenus.map((P, te) => /* @__PURE__ */ W.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => sx(
                      E,
                      g,
                      p,
                      P,
                      Q,
                      te + 1,
                      b
                    ),
                    children: u({
                      icon: P.icon,
                      label: P.label,
                      route: `${A.route}${P.route}`,
                      isOpen: b,
                      props: { className: "" }
                    })
                  },
                  P.route
                )) })
              ] }, Q))
            ]
          }
        ),
        /* @__PURE__ */ W.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-settings-action ring-info",
            onClick: c,
            children: [
              /* @__PURE__ */ W.jsx(Wr, { icon: "ph:gear-six-fill", height: 16 }),
              b && /* @__PURE__ */ W.jsx("span", { children: "Settings" })
            ]
          }
        ),
        /* @__PURE__ */ W.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-exit-action ring-warning",
            onClick: c,
            children: [
              /* @__PURE__ */ W.jsx(Wr, { icon: "mingcute:exit-fill", height: 16 }),
              b && /* @__PURE__ */ W.jsx("span", { children: "Logout" })
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
function WA() {
  return cx || (cx = 1, function(i) {
    function u(se, je) {
      var _e = se.length;
      se.push(je);
      e:
        for (; 0 < _e; ) {
          var gt = _e - 1 >>> 1, Ct = se[gt];
          if (0 < m(Ct, je))
            se[gt] = je, se[_e] = Ct, _e = gt;
          else
            break e;
        }
    }
    function c(se) {
      return se.length === 0 ? null : se[0];
    }
    function p(se) {
      if (se.length === 0)
        return null;
      var je = se[0], _e = se.pop();
      if (_e !== je) {
        se[0] = _e;
        e:
          for (var gt = 0, Ct = se.length, Vn = Ct >>> 1; gt < Vn; ) {
            var vr = 2 * (gt + 1) - 1, ni = se[vr], wn = vr + 1, da = se[wn];
            if (0 > m(ni, _e))
              wn < Ct && 0 > m(da, ni) ? (se[gt] = da, se[wn] = _e, gt = wn) : (se[gt] = ni, se[vr] = _e, gt = vr);
            else if (wn < Ct && 0 > m(da, _e))
              se[gt] = da, se[wn] = _e, gt = wn;
            else
              break e;
          }
      }
      return je;
    }
    function m(se, je) {
      var _e = se.sortIndex - je.sortIndex;
      return _e !== 0 ? _e : se.id - je.id;
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
    var b = [], D = [], z = 1, U = null, A = 3, Q = !1, P = !1, te = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(se) {
      for (var je = c(D); je !== null; ) {
        if (je.callback === null)
          p(D);
        else if (je.startTime <= se)
          p(D), je.sortIndex = je.expirationTime, u(b, je);
        else
          break;
        je = c(D);
      }
    }
    function ve(se) {
      if (te = !1, ne(se), !P)
        if (c(b) !== null)
          P = !0, kt(ce);
        else {
          var je = c(D);
          je !== null && _n(ve, je.startTime - se);
        }
    }
    function ce(se, je) {
      P = !1, te && (te = !1, Me(We), We = -1), Q = !0;
      var _e = A;
      try {
        for (ne(je), U = c(b); U !== null && (!(U.expirationTime > je) || se && !dt()); ) {
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
          var vr = c(D);
          vr !== null && _n(ve, vr.startTime - je), Vn = !1;
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
        var se = i.unstable_now();
        nt = se;
        var je = !0;
        try {
          je = ue(!0, se);
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
    function kt(se) {
      ue = se, ee || (ee = !0, Pe());
    }
    function _n(se, je) {
      We = Ee(function() {
        se(i.unstable_now());
      }, je);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(se) {
      se.callback = null;
    }, i.unstable_continueExecution = function() {
      P || Q || (P = !0, kt(ce));
    }, i.unstable_forceFrameRate = function(se) {
      0 > se || 125 < se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : et = 0 < se ? Math.floor(1e3 / se) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, i.unstable_getFirstCallbackNode = function() {
      return c(b);
    }, i.unstable_next = function(se) {
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
        return se();
      } finally {
        A = _e;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(se, je) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var _e = A;
      A = se;
      try {
        return je();
      } finally {
        A = _e;
      }
    }, i.unstable_scheduleCallback = function(se, je, _e) {
      var gt = i.unstable_now();
      switch (typeof _e == "object" && _e !== null ? (_e = _e.delay, _e = typeof _e == "number" && 0 < _e ? gt + _e : gt) : _e = gt, se) {
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
      return Ct = _e + Ct, se = { id: z++, callback: je, priorityLevel: se, startTime: _e, expirationTime: Ct, sortIndex: -1 }, _e > gt ? (se.sortIndex = _e, u(D, se), c(b) === null && se === c(D) && (te ? (Me(We), We = -1) : te = !0, _n(ve, _e - gt))) : (se.sortIndex = Ct, u(b, se), P || Q || (P = !0, kt(ce))), se;
    }, i.unstable_shouldYield = dt, i.unstable_wrapCallback = function(se) {
      var je = A;
      return function() {
        var _e = A;
        A = je;
        try {
          return se.apply(this, arguments);
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
var fx;
function $A() {
  return fx || (fx = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, c = !1, p = 5;
      function m(pe, Ue) {
        var it = pe.length;
        pe.push(Ue), R(pe, Ue, it);
      }
      function E(pe) {
        return pe.length === 0 ? null : pe[0];
      }
      function g(pe) {
        if (pe.length === 0)
          return null;
        var Ue = pe[0], it = pe.pop();
        return it !== Ue && (pe[0] = it, b(pe, it, 0)), Ue;
      }
      function R(pe, Ue, it) {
        for (var Mt = it; Mt > 0; ) {
          var Xt = Mt - 1 >>> 1, Nn = pe[Xt];
          if (D(Nn, Ue) > 0)
            pe[Xt] = Ue, pe[Mt] = Nn, Mt = Xt;
          else
            return;
        }
      }
      function b(pe, Ue, it) {
        for (var Mt = it, Xt = pe.length, Nn = Xt >>> 1; Mt < Nn; ) {
          var cn = (Mt + 1) * 2 - 1, Mr = pe[cn], Yt = cn + 1, Xr = pe[Yt];
          if (D(Mr, Ue) < 0)
            Yt < Xt && D(Xr, Mr) < 0 ? (pe[Mt] = Xr, pe[Yt] = Ue, Mt = Yt) : (pe[Mt] = Mr, pe[cn] = Ue, Mt = cn);
          else if (Yt < Xt && D(Xr, Ue) < 0)
            pe[Mt] = Xr, pe[Yt] = Ue, Mt = Yt;
          else
            return;
        }
      }
      function D(pe, Ue) {
        var it = pe.sortIndex - Ue.sortIndex;
        return it !== 0 ? it : pe.id - Ue.id;
      }
      var z = 1, U = 2, A = 3, Q = 4, P = 5;
      function te(pe, Ue) {
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
      var ve = 1073741823, ce = -1, ee = 250, ue = 5e3, We = 1e4, et = ve, nt = [], dt = [], Nt = 1, Pe = null, at = A, hn = !1, kt = !1, _n = !1, se = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function gt(pe) {
        for (var Ue = E(dt); Ue !== null; ) {
          if (Ue.callback === null)
            g(dt);
          else if (Ue.startTime <= pe)
            g(dt), Ue.sortIndex = Ue.expirationTime, m(nt, Ue);
          else
            return;
          Ue = E(dt);
        }
      }
      function Ct(pe) {
        if (_n = !1, gt(pe), !kt)
          if (E(nt) !== null)
            kt = !0, Ya(Vn);
          else {
            var Ue = E(dt);
            Ue !== null && vn(Ct, Ue.startTime - pe);
          }
      }
      function Vn(pe, Ue) {
        kt = !1, _n && (_n = !1, Kr()), hn = !0;
        var it = at;
        try {
          var Mt;
          if (!c)
            return vr(pe, Ue);
        } finally {
          Pe = null, at = it, hn = !1;
        }
      }
      function vr(pe, Ue) {
        var it = Ue;
        for (gt(it), Pe = E(nt); Pe !== null && !u && !(Pe.expirationTime > it && (!pe || Fa())); ) {
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
      function ni(pe, Ue) {
        switch (pe) {
          case z:
          case U:
          case A:
          case Q:
          case P:
            break;
          default:
            pe = A;
        }
        var it = at;
        at = pe;
        try {
          return Ue();
        } finally {
          at = it;
        }
      }
      function wn(pe) {
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
          return pe();
        } finally {
          at = it;
        }
      }
      function da(pe) {
        var Ue = at;
        return function() {
          var it = at;
          at = Ue;
          try {
            return pe.apply(this, arguments);
          } finally {
            at = it;
          }
        };
      }
      function rr(pe, Ue, it) {
        var Mt = i.unstable_now(), Xt;
        if (typeof it == "object" && it !== null) {
          var Nn = it.delay;
          typeof Nn == "number" && Nn > 0 ? Xt = Mt + Nn : Xt = Mt;
        } else
          Xt = Mt;
        var cn;
        switch (pe) {
          case z:
            cn = ce;
            break;
          case U:
            cn = ee;
            break;
          case P:
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
        var Mr = Xt + cn, Yt = {
          id: Nt++,
          callback: Ue,
          priorityLevel: pe,
          startTime: Xt,
          expirationTime: Mr,
          sortIndex: -1
        };
        return Xt > Mt ? (Yt.sortIndex = Xt, m(dt, Yt), E(nt) === null && Yt === E(dt) && (_n ? Kr() : _n = !0, vn(Ct, Xt - Mt))) : (Yt.sortIndex = Mr, m(nt, Yt), !kt && !hn && (kt = !0, Ya(Vn))), Yt;
      }
      function Dr() {
      }
      function ri() {
        !kt && !hn && (kt = !0, Ya(Vn));
      }
      function kr() {
        return E(nt);
      }
      function pa(pe) {
        pe.callback = null;
      }
      function On() {
        return at;
      }
      var ar = !1, In = null, ir = -1, lr = p, ha = -1;
      function Fa() {
        var pe = i.unstable_now() - ha;
        return !(pe < lr);
      }
      function xi() {
      }
      function ai(pe) {
        if (pe < 0 || pe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        pe > 0 ? lr = Math.floor(1e3 / pe) : lr = p;
      }
      var Ha = function() {
        if (In !== null) {
          var pe = i.unstable_now();
          ha = pe;
          var Ue = !0, it = !0;
          try {
            it = In(Ue, pe);
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
          se(Ha, 0);
        };
      function Ya(pe) {
        In = pe, ar || (ar = !0, qr());
      }
      function vn(pe, Ue) {
        ir = se(function() {
          pe(i.unstable_now());
        }, Ue);
      }
      function Kr() {
        je(ir), ir = -1;
      }
      var al = xi, Pa = null;
      i.unstable_IdlePriority = P, i.unstable_ImmediatePriority = z, i.unstable_LowPriority = Q, i.unstable_NormalPriority = A, i.unstable_Profiling = Pa, i.unstable_UserBlockingPriority = U, i.unstable_cancelCallback = pa, i.unstable_continueExecution = ri, i.unstable_forceFrameRate = ai, i.unstable_getCurrentPriorityLevel = On, i.unstable_getFirstCallbackNode = kr, i.unstable_next = wn, i.unstable_pauseExecution = Dr, i.unstable_requestPaint = al, i.unstable_runWithPriority = ni, i.unstable_scheduleCallback = rr, i.unstable_shouldYield = Fa, i.unstable_wrapCallback = da, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(hE)), hE;
}
var dx;
function Nb() {
  return dx || (dx = 1, process.env.NODE_ENV === "production" ? eg.exports = WA() : eg.exports = $A()), eg.exports;
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
function GA() {
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
  function P(n, r, o, f) {
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
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (P(r, o, h, f) && (o = null), f || h === null ? A(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, f = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, f ? n.setAttributeNS(f, r, o) : n.setAttribute(r, o))));
  }
  var ve = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ce = Symbol.for("react.element"), ee = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), dt = Symbol.for("react.context"), Nt = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), _n = Symbol.for("react.offscreen"), se = Symbol.iterator;
  function je(n) {
    return n === null || typeof n != "object" ? null : (n = se && n[se] || n["@@iterator"], typeof n == "function" ? n : null);
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
  function Dr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ri(n) {
    var r = Dr(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
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
  function kr(n) {
    n._valueTracker || (n._valueTracker = ri(n));
  }
  function pa(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), f = "";
    return n && (f = Dr(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== o ? (r.setValue(n), !0) : !1;
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
    return _e({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
  var pe = {
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
  Object.keys(pe).forEach(function(n) {
    Ue.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pe[r] = pe[n];
    });
  });
  function it(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || pe.hasOwnProperty(n) && pe[n] ? ("" + r).trim() : r + "px";
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
  var Mr = null;
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
  if (R)
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
  var Jr = !1, Va = null, ll = !1, k = null, J = { onError: function(n) {
    Jr = !0, Va = n;
  } };
  function he(n, r, o, f, h, y, w, x, M) {
    Jr = !1, Va = null, il.apply(J, arguments);
  }
  function Fe(n, r, o, f, h, y, w, x, M) {
    if (he.apply(this, arguments), Jr) {
      if (Jr) {
        var B = Va;
        Jr = !1, Va = null;
      } else
        throw Error(c(198));
      ll || (ll = !0, k = B);
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
  var qt = u.unstable_scheduleCallback, mr = u.unstable_cancelCallback, ol = u.unstable_shouldYield, mc = u.unstable_requestPaint, St = u.unstable_now, kg = u.unstable_getCurrentPriorityLevel, bi = u.unstable_ImmediatePriority, ut = u.unstable_UserBlockingPriority, ul = u.unstable_NormalPriority, Xh = u.unstable_LowPriority, gd = u.unstable_IdlePriority, ts = null, Ia = null;
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
  var Ot = 0;
  function wd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nv, Ec, jt, rv, Cd, Ke = !1, rs = [], mn = null, ma = null, ya = null, as = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Lt = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      var o = tt(r);
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
        Mr = f, o.target.dispatchEvent(f), Mr = null;
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
    Ke = !1, mn !== null && Jo(mn) && (mn = null), ma !== null && Jo(ma) && (ma = null), ya !== null && Jo(ya) && (ya = null), as.forEach(Td), Cn.forEach(Td);
  }
  function is(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ke || (Ke = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, iv)));
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
  var eu = ve.ReactCurrentBatchConfig, Kl = !0;
  function lv(n, r, o, f) {
    var h = Ot, y = eu.transition;
    eu.transition = null;
    try {
      Ot = 1, wc(n, r, o, f);
    } finally {
      Ot = h, eu.transition = y;
    }
  }
  function _c(n, r, o, f) {
    var h = Ot, y = eu.transition;
    eu.transition = null;
    try {
      Ot = 4, wc(n, r, o, f);
    } finally {
      Ot = h, eu.transition = y;
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
          case ut:
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
    return _e(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Tc = ea(cl), nu = _e({}, cl, { view: 0, detail: 0 }), uv = ea(nu), xc, Rd, fs, Un = _e({}, nu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Od, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== fs && (fs && n.type === "mousemove" ? (xc = n.screenX - fs.screenX, Rd = n.screenY - fs.screenY) : Rd = xc = 0, fs = n), xc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rd;
  } }), bc = ea(Un), sv = _e({}, Un, { dataTransfer: 0 }), cv = ea(sv), Lg = _e({}, nu, { relatedTarget: 0 }), fl = ea(Lg), Dd = _e({}, cl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fv = ea(Dd), Ug = _e({}, cl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), zg = ea(Ug), Ag = _e({}, cl, { data: 0 }), kd = ea(Ag), Md = {
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
  var Di = _e({}, nu, { key: function(n) {
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
  } }), jg = ea(Di), Nd = _e({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rc = ea(Nd), Ld = _e({}, nu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Od }), Fg = ea(Ld), Dc = _e({}, cl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vv = ea(Dc), Or = _e({}, Un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ki = ea(Or), yn = [9, 13, 27, 32], $a = R && "CompositionEvent" in window, Xl = null;
  R && "documentMode" in document && (Xl = document.documentMode);
  var kc = R && "TextEvent" in window && !Xl, mv = R && (!$a || Xl && 8 < Xl && 11 >= Xl), ru = String.fromCharCode(32), yv = !1;
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
  if (R) {
    var zd;
    if (R) {
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
  var Mv = R && "documentMode" in document && 11 >= document.documentMode, Ga = null, jd = null, hs = null, Fd = !1;
  function Ov(n, r, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Fd || Ga == null || Ga !== On(f) || (f = Ga, "selectionStart" in f && Mi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), hs && ps(hs, f) || (hs = f, f = Ss(jd, "onSelect"), 0 < f.length && (r = new Tc("onSelect", "select", null, r, o), n.push({ event: r, listeners: f }), r.target = Ga)));
  }
  function Lc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Jl = { animationend: Lc("Animation", "AnimationEnd"), animationiteration: Lc("Animation", "AnimationIteration"), animationstart: Lc("Animation", "AnimationStart"), transitionend: Lc("Transition", "TransitionEnd") }, Hd = {}, Yd = {};
  R && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
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
      var B = y, X = Yt(o), re = [];
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
          var ke = (r & 4) !== 0, dn = !ke && n === "scroll", j = ke ? K !== null ? K + "Capture" : null : K;
          ke = [];
          for (var N = B, Y; N !== null; ) {
            Y = N;
            var oe = Y.stateNode;
            if (Y.tag === 5 && oe !== null && (Y = oe, j !== null && (oe = Ql(N, j), oe != null && ke.push(gs(N, oe, Y)))), dn)
              break;
            N = N.return;
          }
          0 < ke.length && (K = new ye(K, be, null, o, X), re.push({ event: K, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", K && o !== Mr && (be = o.relatedTarget || o.fromElement) && (Sa(be) || be[Li]))
            break e;
          if ((ye || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, ye ? (be = o.relatedTarget || o.toElement, ye = B, be = be ? Sa(be) : null, be !== null && (dn = tt(be), be !== dn || be.tag !== 5 && be.tag !== 6) && (be = null)) : (ye = null, be = B), ye !== be)) {
            if (ke = bc, oe = "onMouseLeave", j = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (ke = Rc, oe = "onPointerLeave", j = "onPointerEnter", N = "pointer"), dn = ye == null ? K : su(ye), Y = be == null ? K : su(be), K = new ke(oe, N + "leave", ye, o, X), K.target = dn, K.relatedTarget = Y, oe = null, Sa(X) === B && (ke = new ke(j, N + "enter", be, o, X), ke.target = Y, ke.relatedTarget = dn, oe = ke), dn = oe, ye && be)
              t: {
                for (ke = ye, j = be, N = 0, Y = ke; Y; Y = to(Y))
                  N++;
                for (Y = 0, oe = j; oe; oe = to(oe))
                  Y++;
                for (; 0 < N - Y; )
                  ke = to(ke), N--;
                for (; 0 < Y - N; )
                  j = to(j), Y--;
                for (; N--; ) {
                  if (ke === j || j !== null && ke === j.alternate)
                    break t;
                  ke = to(ke), j = to(j);
                }
                ke = null;
              }
            else
              ke = null;
            ye !== null && Vd(re, K, ye, ke, !1), be !== null && dn !== null && Vd(re, dn, be, ke, !0);
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
            _v(re, Oe, o, X);
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
            Fd = !1, Ov(re, o, X);
            break;
          case "selectionchange":
            if (Mv)
              break;
          case "keydown":
          case "keyup":
            Ov(re, o, X);
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
          au ? gv(n, o) && (Qe = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (mv && o.locale !== "ko" && (au || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && au && (Le = bd()) : (Ri = X, us = "value" in Ri ? Ri.value : Ri.textContent, au = !0)), Re = Ss(B, Qe), 0 < Re.length && (Qe = new kd(Qe, n, null, o, X), re.push({ event: Qe, listeners: Re }), Le ? Qe.data = Le : (Le = Mc(o), Le !== null && (Qe.data = Le)))), (Le = kc ? Hg(n, o) : Yg(n, o)) && (B = Ss(B, "onBeforeInput"), 0 < B.length && (X = new kd("onBeforeInput", "beforeinput", null, o, X), re.push({ event: X, listeners: B }), X.data = Le));
      }
      Uc(re, r);
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
  function Xe(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > It || (n.current = vl[It], vl[It] = null, It--);
  }
  function xt(n, r) {
    It++, vl[It] = n.current, n.current = r;
  }
  var ui = {}, Ge = Xe(ui), ln = Xe(!1), Nr = ui;
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
  function ml(n, r, o) {
    if (Ge.current !== ui)
      throw Error(c(168));
    xt(Ge, r), xt(ln, o);
  }
  function Cs(n, r, o) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return o;
    f = f.getChildContext();
    for (var h in f)
      if (!(h in r))
        throw Error(c(108, da(n) || "Unknown", h));
    return _e({}, o, f);
  }
  function Fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ui, Nr = Ge.current, xt(Ge, n), xt(ln, ln.current), !0;
  }
  function Yv(n, r, o) {
    var f = n.stateNode;
    if (!f)
      throw Error(c(169));
    o ? (n = Cs(n, r, Nr), f.__reactInternalMemoizedMergedChildContext = n, Tt(ln), Tt(Ge), xt(Ge, n)) : Tt(ln), xt(ln, o);
  }
  var ta = null, An = !1, Ts = !1;
  function Zd(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  function Kd(n) {
    An = !0, Zd(n);
  }
  function Lr() {
    if (!Ts && ta !== null) {
      Ts = !0;
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
        throw ta !== null && (ta = ta.slice(n + 1)), qt(bi, Lr), h;
      } finally {
        Ot = r, Ts = !1;
      }
    }
    return null;
  }
  var yl = [], Ur = 0, io = null, cu = 0, zr = [], ur = 0, wa = null, Bn = 1, Ui = "";
  function na(n, r) {
    yl[Ur++] = cu, yl[Ur++] = io, io = n, cu = r;
  }
  function Xd(n, r, o) {
    zr[ur++] = Bn, zr[ur++] = Ui, zr[ur++] = wa, wa = n;
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
      io = yl[--Ur], yl[Ur] = null, cu = yl[--Ur], yl[Ur] = null;
    for (; n === wa; )
      wa = zr[--ur], zr[ur] = null, Ui = zr[--ur], zr[ur] = null, Bn = zr[--ur], zr[ur] = null;
  }
  var ra = null, Ar = null, Bt = !1, Ca = null;
  function ep(n, r) {
    var o = ka(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Pv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, Ar = Qa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, Ar = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = wa !== null ? { id: Bn, overflow: Ui } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ka(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, Ar = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pc(n) {
    if (Bt) {
      var r = Ar;
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
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = Ar)) {
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
                Ar = Qa(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ar = null;
      }
    } else
      Ar = ra ? Qa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Iv() {
    for (var n = Ar; n; )
      n = Qa(n.nextSibling);
  }
  function Jt() {
    Ar = ra = null, Bt = !1;
  }
  function tp(n) {
    Ca === null ? Ca = [n] : Ca.push(n);
  }
  var Ic = ve.ReactCurrentBatchConfig;
  function aa(n, r) {
    if (n && n.defaultProps) {
      r = _e({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var si = Xe(null), Bc = null, gl = null, np = null;
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
  function fe(n, r) {
    Bc = n, np = gl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (gn = !0), n.firstContext = null);
  }
  function fn(n) {
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
    if (f = f.shared, st & 2) {
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
      var re = h.baseState;
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
            var be = n, ke = x;
            switch (K = r, ye = o, ke.tag) {
              case 1:
                if (be = ke.payload, typeof be == "function") {
                  re = be.call(ye, re, K);
                  break e;
                }
                re = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ke.payload, K = typeof be == "function" ? be.call(ye, re, K) : be, K == null)
                  break e;
                re = _e({}, re, K);
                break e;
              case 2:
                El = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, K = h.effects, K === null ? h.effects = [x] : K.push(x));
        } else
          ye = { eventTime: ye, lane: K, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, X === null ? (B = X = ye, M = re) : X = X.next = ye, w |= K;
        if (x = x.next, x === null) {
          if (x = h.shared.pending, x === null)
            break;
          K = x, x = K.next, K.next = null, h.lastBaseUpdate = K, h.shared.pending = null;
        }
      } while (1);
      if (X === null && (M = re), h.baseState = M, h.firstBaseUpdate = B, h.lastBaseUpdate = X, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          w |= h.lane, h = h.next;
        while (h !== r);
      } else
        y === null && (h.shared.lanes = 0);
      Yi |= w, n.lanes = w, n.memoizedState = re;
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
    r = n.memoizedState, o = o(f, r), o = o == null ? r : _e({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var $c = { isMounted: function(n) {
    return (n = n._reactInternals) ? tt(n) === n : !1;
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
    return typeof y == "object" && y !== null ? y = fn(y) : (h = Zt(r) ? Nr : Ge.current, f = r.contextTypes, y = (f = f != null) ? Ea(n, h) : ui), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $c, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Qv(n, r, o, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, f), r.state !== n && $c.enqueueReplaceState(r, r.state, null);
  }
  function Gc(n, r, o, f) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = Wv, ip(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? h.context = fn(y) : (y = Zt(r) ? Nr : Ge.current, h.context = Ea(n, y)), h.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (op(n, r, y, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && $c.enqueueReplaceState(h, h.state, null), wl(n, o, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
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
    function r(j, N) {
      if (n) {
        var Y = j.deletions;
        Y === null ? (j.deletions = [N], j.flags |= 16) : Y.push(N);
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
      return j = Ml(j, N), j.index = 0, j.sibling = null, j;
    }
    function y(j, N, Y) {
      return j.index = Y, n ? (Y = j.alternate, Y !== null ? (Y = Y.index, Y < N ? (j.flags |= 2, N) : Y) : (j.flags |= 2, N)) : (j.flags |= 1048576, N);
    }
    function w(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function x(j, N, Y, oe) {
      return N === null || N.tag !== 6 ? (N = Is(Y, j.mode, oe), N.return = j, N) : (N = h(N, Y), N.return = j, N);
    }
    function M(j, N, Y, oe) {
      var Oe = Y.type;
      return Oe === ue ? X(j, N, Y.props.children, oe, Y.key) : N !== null && (N.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === kt && qv(Oe) === N.type) ? (oe = h(N, Y.props), oe.ref = fu(j, N, Y), oe.return = j, oe) : (oe = Rf(Y.type, Y.key, Y.props, null, j.mode, oe), oe.ref = fu(j, N, Y), oe.return = j, oe);
    }
    function B(j, N, Y, oe) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== Y.containerInfo || N.stateNode.implementation !== Y.implementation ? (N = bo(Y, j.mode, oe), N.return = j, N) : (N = h(N, Y.children || []), N.return = j, N);
    }
    function X(j, N, Y, oe, Oe) {
      return N === null || N.tag !== 7 ? (N = xo(Y, j.mode, oe, Oe), N.return = j, N) : (N = h(N, Y), N.return = j, N);
    }
    function re(j, N, Y) {
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return N = Is("" + N, j.mode, Y), N.return = j, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ce:
            return Y = Rf(N.type, N.key, N.props, null, j.mode, Y), Y.ref = fu(j, null, N), Y.return = j, Y;
          case ee:
            return N = bo(N, j.mode, Y), N.return = j, N;
          case kt:
            var oe = N._init;
            return re(j, oe(N._payload), Y);
        }
        if (xi(N) || je(N))
          return N = xo(N, j.mode, Y, null), N.return = j, N;
        Qc(j, N);
      }
      return null;
    }
    function K(j, N, Y, oe) {
      var Oe = N !== null ? N.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return Oe !== null ? null : x(j, N, "" + Y, oe);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case ce:
            return Y.key === Oe ? M(j, N, Y, oe) : null;
          case ee:
            return Y.key === Oe ? B(j, N, Y, oe) : null;
          case kt:
            return Oe = Y._init, K(
              j,
              N,
              Oe(Y._payload),
              oe
            );
        }
        if (xi(Y) || je(Y))
          return Oe !== null ? null : X(j, N, Y, oe, null);
        Qc(j, Y);
      }
      return null;
    }
    function ye(j, N, Y, oe, Oe) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number")
        return j = j.get(Y) || null, x(N, j, "" + oe, Oe);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case ce:
            return j = j.get(oe.key === null ? Y : oe.key) || null, M(N, j, oe, Oe);
          case ee:
            return j = j.get(oe.key === null ? Y : oe.key) || null, B(N, j, oe, Oe);
          case kt:
            var Re = oe._init;
            return ye(j, N, Y, Re(oe._payload), Oe);
        }
        if (xi(oe) || je(oe))
          return j = j.get(Y) || null, X(N, j, oe, Oe, null);
        Qc(N, oe);
      }
      return null;
    }
    function be(j, N, Y, oe) {
      for (var Oe = null, Re = null, Le = N, Qe = N = 0, Yn = null; Le !== null && Qe < Y.length; Qe++) {
        Le.index > Qe ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var yt = K(j, Le, Y[Qe], oe);
        if (yt === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && yt.alternate === null && r(j, Le), N = y(yt, N, Qe), Re === null ? Oe = yt : Re.sibling = yt, Re = yt, Le = Yn;
      }
      if (Qe === Y.length)
        return o(j, Le), Bt && na(j, Qe), Oe;
      if (Le === null) {
        for (; Qe < Y.length; Qe++)
          Le = re(j, Y[Qe], oe), Le !== null && (N = y(Le, N, Qe), Re === null ? Oe = Le : Re.sibling = Le, Re = Le);
        return Bt && na(j, Qe), Oe;
      }
      for (Le = f(j, Le); Qe < Y.length; Qe++)
        Yn = ye(Le, j, Qe, Y[Qe], oe), Yn !== null && (n && Yn.alternate !== null && Le.delete(Yn.key === null ? Qe : Yn.key), N = y(Yn, N, Qe), Re === null ? Oe = Yn : Re.sibling = Yn, Re = Yn);
      return n && Le.forEach(function(Ol) {
        return r(j, Ol);
      }), Bt && na(j, Qe), Oe;
    }
    function ke(j, N, Y, oe) {
      var Oe = je(Y);
      if (typeof Oe != "function")
        throw Error(c(150));
      if (Y = Oe.call(Y), Y == null)
        throw Error(c(151));
      for (var Re = Oe = null, Le = N, Qe = N = 0, Yn = null, yt = Y.next(); Le !== null && !yt.done; Qe++, yt = Y.next()) {
        Le.index > Qe ? (Yn = Le, Le = null) : Yn = Le.sibling;
        var Ol = K(j, Le, yt.value, oe);
        if (Ol === null) {
          Le === null && (Le = Yn);
          break;
        }
        n && Le && Ol.alternate === null && r(j, Le), N = y(Ol, N, Qe), Re === null ? Oe = Ol : Re.sibling = Ol, Re = Ol, Le = Yn;
      }
      if (yt.done)
        return o(
          j,
          Le
        ), Bt && na(j, Qe), Oe;
      if (Le === null) {
        for (; !yt.done; Qe++, yt = Y.next())
          yt = re(j, yt.value, oe), yt !== null && (N = y(yt, N, Qe), Re === null ? Oe = yt : Re.sibling = yt, Re = yt);
        return Bt && na(j, Qe), Oe;
      }
      for (Le = f(j, Le); !yt.done; Qe++, yt = Y.next())
        yt = ye(Le, j, Qe, yt.value, oe), yt !== null && (n && yt.alternate !== null && Le.delete(yt.key === null ? Qe : yt.key), N = y(yt, N, Qe), Re === null ? Oe = yt : Re.sibling = yt, Re = yt);
      return n && Le.forEach(function(v0) {
        return r(j, v0);
      }), Bt && na(j, Qe), Oe;
    }
    function dn(j, N, Y, oe) {
      if (typeof Y == "object" && Y !== null && Y.type === ue && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case ce:
            e: {
              for (var Oe = Y.key, Re = N; Re !== null; ) {
                if (Re.key === Oe) {
                  if (Oe = Y.type, Oe === ue) {
                    if (Re.tag === 7) {
                      o(j, Re.sibling), N = h(Re, Y.props.children), N.return = j, j = N;
                      break e;
                    }
                  } else if (Re.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === kt && qv(Oe) === Re.type) {
                    o(j, Re.sibling), N = h(Re, Y.props), N.ref = fu(j, Re, Y), N.return = j, j = N;
                    break e;
                  }
                  o(j, Re);
                  break;
                } else
                  r(j, Re);
                Re = Re.sibling;
              }
              Y.type === ue ? (N = xo(Y.props.children, j.mode, oe, Y.key), N.return = j, j = N) : (oe = Rf(Y.type, Y.key, Y.props, null, j.mode, oe), oe.ref = fu(j, N, Y), oe.return = j, j = oe);
            }
            return w(j);
          case ee:
            e: {
              for (Re = Y.key; N !== null; ) {
                if (N.key === Re)
                  if (N.tag === 4 && N.stateNode.containerInfo === Y.containerInfo && N.stateNode.implementation === Y.implementation) {
                    o(j, N.sibling), N = h(N, Y.children || []), N.return = j, j = N;
                    break e;
                  } else {
                    o(j, N);
                    break;
                  }
                else
                  r(j, N);
                N = N.sibling;
              }
              N = bo(Y, j.mode, oe), N.return = j, j = N;
            }
            return w(j);
          case kt:
            return Re = Y._init, dn(j, N, Re(Y._payload), oe);
        }
        if (xi(Y))
          return be(j, N, Y, oe);
        if (je(Y))
          return ke(j, N, Y, oe);
        Qc(j, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, N !== null && N.tag === 6 ? (o(j, N.sibling), N = h(N, Y), N.return = j, j = N) : (o(j, N), N = Is(Y, j.mode, oe), N.return = j, j = N), w(j)) : o(j, N);
    }
    return dn;
  }
  var du = Zv(!0), Kv = Zv(!1), xs = {}, qa = Xe(xs), bs = Xe(xs), pu = Xe(xs);
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
  function qc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Zc = ve.ReactCurrentDispatcher, sp = ve.ReactCurrentBatchConfig, uo = 0, Wt = null, q = null, pt = null, Be = !1, ci = !1, ia = 0, so = 0;
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
  function jr() {
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
    var r = jr(), o = r.queue;
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
          var re = {
            lane: X,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          M === null ? (x = M = re, w = f) : M = M.next = re, Wt.lanes |= X, Yi |= X;
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
    var r = jr(), o = r.queue;
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
    var o = Wt, f = jr(), h = r(), y = !ga(f.memoizedState, h);
    if (y && (f.memoizedState = h, gn = !0), f = f.queue, ks(tf.bind(null, o, f, n), [n]), f.getSnapshot !== r || y || pt !== null && pt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ho(9, ef.bind(null, o, f, h, r), void 0, null), tn === null)
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
    return jr().memoizedState;
  }
  function vo(n, r, o, f) {
    var h = xa();
    Wt.flags |= n, h.memoizedState = ho(1 | r, o, void 0, f === void 0 ? null : f);
  }
  function ji(n, r, o, f) {
    var h = jr();
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
    var o = jr();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && co(r, f[1]) ? f[0] : (o.memoizedState = [n, r], n);
  }
  function xl(n, r) {
    var o = jr();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && co(r, f[1]) ? f[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Fr(n, r, o) {
    return uo & 21 ? (ga(o, r) || (o = Sc(), Wt.lanes |= o, Yi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, gn = !0), n.memoizedState = o);
  }
  function Zg(n, r) {
    var o = Ot;
    Ot = o !== 0 && 4 > o ? o : 4, n(!0);
    var f = sp.transition;
    sp.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = o, sp.transition = f;
    }
  }
  function Ht() {
    return jr().memoizedState;
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
  var pf = { readContext: fn, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: !1 }, Kg = { readContext: fn, useCallback: function(n, r) {
    return xa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fn, useEffect: of, useImperativeHandle: function(n, r, o) {
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
      if (o = r(), tn === null)
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
    var n = xa(), r = tn.identifierPrefix;
    if (Bt) {
      var o = Ui, f = Bn;
      o = (f & ~(1 << 32 - va(f) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ia++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = so++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Xg = {
    readContext: fn,
    useCallback: vu,
    useContext: fn,
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
      var r = jr();
      return Fr(r, q.memoizedState, n);
    },
    useTransition: function() {
      var n = Rs(po)[0], r = jr().memoizedState;
      return [n, r];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Xc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, fp = { readContext: fn, useCallback: vu, useContext: fn, useEffect: ks, useImperativeHandle: hu, useInsertionEffect: uf, useLayoutEffect: sf, useMemo: xl, useReducer: Ds, useRef: lf, useState: function() {
    return Ds(po);
  }, useDebugValue: cf, useDeferredValue: function(n) {
    var r = jr();
    return q === null ? r.memoizedState = n : Fr(r, q.memoizedState, n);
  }, useTransition: function() {
    var n = Ds(po)[0], r = jr().memoizedState;
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
  var e0 = ve.ReactCurrentOwner, gn = !1;
  function xn(n, r, o, f) {
    r.child = n === null ? Kv(r, null, o, f) : du(r, n.child, o, f);
  }
  function bl(n, r, o, f, h) {
    o = o.render;
    var y = r.ref;
    return fe(r, h), f = Tl(n, r, o, f, y, h), o = fo(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, $n(n, r, h)) : (Bt && o && Hc(r), r.flags |= 1, xn(n, r, f, h), r.child);
  }
  function vf(n, r, o, f, h) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Np(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, Hr(n, r, y, f, h)) : (n = Rf(o.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & h)) {
      var w = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ps, o(w, f) && n.ref === r.ref)
        return $n(n, r, h);
    }
    return r.flags |= 1, n = Ml(y, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hr(n, r, o, f, h) {
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
  function Je(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function gu(n, r, o, f, h) {
    var y = Zt(o) ? Nr : Ge.current;
    return y = Ea(r, y), fe(r, h), o = Tl(n, r, o, f, y, h), f = fo(), n !== null && !gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, $n(n, r, h)) : (Bt && f && Hc(r), r.flags |= 1, xn(n, r, o, h), r.child);
  }
  function hp(n, r, o, f, h) {
    if (Zt(o)) {
      var y = !0;
      Fc(r);
    } else
      y = !1;
    if (fe(r, h), r.stateNode === null)
      sr(n, r), Gv(r, o, f), Gc(r, o, f, h), f = !0;
    else if (n === null) {
      var w = r.stateNode, x = r.memoizedProps;
      w.props = x;
      var M = w.context, B = o.contextType;
      typeof B == "object" && B !== null ? B = fn(B) : (B = Zt(o) ? Nr : Ge.current, B = Ea(r, B));
      var X = o.getDerivedStateFromProps, re = typeof X == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      re || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (x !== f || M !== B) && Qv(r, w, f, B), El = !1;
      var K = r.memoizedState;
      w.state = K, wl(r, f, w, h), M = r.memoizedState, x !== f || K !== M || ln.current || El ? (typeof X == "function" && (op(r, o, X, f), M = r.memoizedState), (x = El || $v(r, o, x, f, K, M, B)) ? (re || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = M), w.props = f, w.state = M, w.context = B, f = x) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      w = r.stateNode, Tn(n, r), x = r.memoizedProps, B = r.type === r.elementType ? x : aa(r.type, x), w.props = B, re = r.pendingProps, K = w.context, M = o.contextType, typeof M == "object" && M !== null ? M = fn(M) : (M = Zt(o) ? Nr : Ge.current, M = Ea(r, M));
      var ye = o.getDerivedStateFromProps;
      (X = typeof ye == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (x !== re || K !== M) && Qv(r, w, f, M), El = !1, K = r.memoizedState, w.state = K, wl(r, f, w, h);
      var be = r.memoizedState;
      x !== re || K !== be || ln.current || El ? (typeof ye == "function" && (op(r, o, ye, f), be = r.memoizedState), (B = El || $v(r, o, B, f, K, be, M) || !1) ? (X || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(f, be, M), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(f, be, M)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = be), w.props = f, w.state = be, w.context = M, f = B) : (typeof w.componentDidUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return tm(n, r, o, f, y, h);
  }
  function tm(n, r, o, f, h, y) {
    Je(n, r);
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
    return Jt(), tp(h), r.flags |= 256, xn(n, r, o, f), r.child;
  }
  var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function mp(n, r, o) {
    var f = r.pendingProps, h = Ie.current, y = !1, w = (r.flags & 128) !== 0, x;
    if ((x = w) || (x = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), x ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), xt(Ie, h & 1), n === null)
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
        h = h & (f.suspendedLanes | w) ? 0 : h, h !== 0 && h !== y.retryLane && (y.retryLane = h, zi(n, h), pr(f, n, h, -1));
      }
      return kp(), f = Os(Error(c(421))), Su(n, r, w, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = o0.bind(null, n), h._reactRetry = r, null) : (n = y.treeContext, Ar = Qa(h.nextSibling), ra = r, Bt = !0, Ca = null, n !== null && (zr[ur++] = Bn, zr[ur++] = Ui, zr[ur++] = wa, Bn = n.id, Ui = n.overflow, wa = r), r = yp(r, f.children), r.flags |= 4096, r);
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
    if (xn(n, r, f.children, o), f = Ie.current, f & 2)
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
    if (xt(Ie, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (o = r.child, h = null; o !== null; )
            n = o.alternate, n !== null && en(n) === null && (h = o), o = o.sibling;
          o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), yf(r, !1, h, o, y);
          break;
        case "backwards":
          for (o = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && en(n) === null) {
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
        nm(r), Jt();
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
          return f.dehydrated !== null ? (xt(Ie, Ie.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? mp(n, r, o) : (xt(Ie, Ie.current & 1), n = $n(n, r, o), n !== null ? n.sibling : null);
        xt(Ie, Ie.current & 1);
        break;
      case 19:
        if (f = (o & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return Sp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), xt(Ie, Ie.current), f)
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
          h = _e({}, h, { value: void 0 }), f = _e({}, f, { value: void 0 }), y = [];
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
        return f = r.stateNode, Cl(), Tt(ln), Tt(Ge), qc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ca !== null && (Ps(Ca), Ca = null))), go(n, r), cr(r), null;
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
                kr(f), ha(f, y, !0);
                break;
              case "textarea":
                kr(f), Zr(f);
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
                  y === "style" ? Mt(n, M) : y === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && al(n, M)) : y === "children" ? typeof M == "string" ? (o !== "textarea" || M !== "") && Pa(n, M) : typeof M == "number" && Pa(n, "" + M) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? M != null && y === "onScroll" && Ft("scroll", n) : M != null && ne(n, y, M, w));
                }
              switch (o) {
                case "input":
                  kr(n), ha(n, f, !1);
                  break;
                case "textarea":
                  kr(n), Zr(n);
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
        if (Tt(Ie), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Bt && Ar !== null && r.mode & 1 && !(r.flags & 128))
            Iv(), Jt(), r.flags |= 98560, y = !1;
          else if (y = Vc(r), f !== null && f.dehydrated !== null) {
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
            Ca !== null && (Ps(Ca), Ca = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ie.current & 1 ? Dn === 0 && (Dn = 3) : kp())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return Cl(), go(n, r), n === null && uu(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return Sl(r.type._context), cr(r), null;
      case 17:
        return Zt(r.type) && _a(), cr(r), null;
      case 19:
        if (Tt(Ie), y = r.memoizedState, y === null)
          return cr(r), null;
        if (f = (r.flags & 128) !== 0, w = y.rendering, w === null)
          if (f)
            Us(y, !1);
          else {
            if (Dn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = en(n), w !== null) {
                  for (r.flags |= 128, Us(y, !1), f = w.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = o, o = r.child; o !== null; )
                    y = o, n = f, y.flags &= 14680066, w = y.alternate, w === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = w.childLanes, y.lanes = w.lanes, y.child = w.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = w.memoizedProps, y.memoizedState = w.memoizedState, y.updateQueue = w.updateQueue, y.type = w.type, n = w.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return xt(Ie, Ie.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && St() > bu && (r.flags |= 128, f = !0, Us(y, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = en(w), n !== null) {
              if (r.flags |= 128, f = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Us(y, !0), y.tail === null && y.tailMode === "hidden" && !w.alternate && !Bt)
                return cr(r), null;
            } else
              2 * St() - y.renderingStartTime > bu && o !== 1073741824 && (r.flags |= 128, f = !0, Us(y, !1), r.lanes = 4194304);
          y.isBackwards ? (w.sibling = r.child, r.child = w) : (o = y.last, o !== null ? o.sibling = w : r.child = w, y.last = w);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = St(), r.sibling = null, o = Ie.current, xt(Ie, f ? o & 1 | 2 : o & 1), r) : (cr(r), null);
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
        return Cl(), Tt(ln), Tt(Ge), qc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
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
  var zs = !1, Rn = !1, rm = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function Eu(n, r) {
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
  function As(n, r, o) {
    try {
      o();
    } catch (f) {
      un(n, r, f);
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
            var w = 0, x = -1, M = -1, B = 0, X = 0, re = n, K = null;
            t:
              for (; ; ) {
                for (var ye; re !== o || h !== 0 && re.nodeType !== 3 || (x = w + h), re !== y || f !== 0 && re.nodeType !== 3 || (M = w + f), re.nodeType === 3 && (w += re.nodeValue.length), (ye = re.firstChild) !== null; )
                  K = re, re = ye;
                for (; ; ) {
                  if (re === n)
                    break t;
                  if (K === o && ++B === h && (x = w), K === y && ++X === f && (M = w), (ye = re.nextSibling) !== null)
                    break;
                  re = K, K = re.parentNode;
                }
                re = ye;
              }
            o = x === -1 || M === -1 ? null : { start: x, end: M };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (no = { focusedElem: n, selectionRange: o }, Kl = !1, Te = r; Te !== null; )
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
          } catch (oe) {
            un(r, r.return, oe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
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
          un(h, r, B);
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
          } catch (ke) {
            un(n, n.return, ke);
          }
          try {
            js(5, n, n.return);
          } catch (ke) {
            un(n, n.return, ke);
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
          } catch (ke) {
            un(n, n.return, ke);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var y = n.memoizedProps, w = o !== null ? o.memoizedProps : y, x = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              x === "input" && y.type === "radio" && y.name != null && ir(h, y), cn(x, w);
              var B = cn(x, y);
              for (w = 0; w < M.length; w += 2) {
                var X = M[w], re = M[w + 1];
                X === "style" ? Mt(h, re) : X === "dangerouslySetInnerHTML" ? al(h, re) : X === "children" ? Pa(h, re) : ne(h, X, re, B);
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
            ls(r.containerInfo);
          } catch (ke) {
            un(n, n.return, ke);
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
            for (Te = n, X = n.child; X !== null; ) {
              for (re = Te = X; Te !== null; ) {
                switch (K = Te, ye = K.child, K.tag) {
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
                      } catch (ke) {
                        un(f, o, ke);
                      }
                    }
                    break;
                  case 5:
                    Eu(K, K.return);
                    break;
                  case 22:
                    if (K.memoizedState !== null) {
                      Cp(re);
                      continue;
                    }
                }
                ye !== null ? (ye.return = K, Te = ye) : Cp(re);
              }
              X = X.sibling;
            }
          e:
            for (X = null, re = n; ; ) {
              if (re.tag === 5) {
                if (X === null) {
                  X = re;
                  try {
                    h = re.stateNode, B ? (y = h.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (x = re.stateNode, M = re.memoizedProps.style, w = M != null && M.hasOwnProperty("display") ? M.display : null, x.style.display = it("display", w));
                  } catch (ke) {
                    un(n, n.return, ke);
                  }
                }
              } else if (re.tag === 6) {
                if (X === null)
                  try {
                    re.stateNode.nodeValue = B ? "" : re.memoizedProps;
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
        un(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function um(n, r, o) {
    Te = n, Cu(n);
  }
  function Cu(n, r, o) {
    for (var f = (n.mode & 1) !== 0; Te !== null; ) {
      var h = Te, y = h.child;
      if (h.tag === 22 && f) {
        var w = h.memoizedState !== null || zs;
        if (!w) {
          var x = h.alternate, M = x !== null && x.memoizedState !== null || Rn;
          x = zs;
          var B = Rn;
          if (zs = w, (Rn = M) && !B)
            for (Te = h; Te !== null; )
              w = Te, M = w.child, w.tag === 22 && w.memoizedState !== null ? cm(h) : M !== null ? (M.return = w, Te = M) : cm(h);
          for (; y !== null; )
            Te = y, Cu(y), y = y.sibling;
          Te = h, zs = x, Rn = B;
        }
        sm(n);
      } else
        h.subtreeFlags & 8772 && y !== null ? (y.return = h, Te = y) : sm(n);
    }
  }
  function sm(n) {
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
                      var re = X.dehydrated;
                      re !== null && ls(re);
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
  function Cp(n) {
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
  function cm(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Fs(4, r);
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
              _p(r);
            } catch (M) {
              un(r, y, M);
            }
            break;
          case 5:
            var w = r.return;
            try {
              _p(r);
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
  var Sf = Math.ceil, Hs = ve.ReactCurrentDispatcher, Tp = ve.ReactCurrentOwner, fr = ve.ReactCurrentBatchConfig, st = 0, tn = null, on = null, Hn = 0, la = 0, Tu = Xe(0), Dn = 0, Ys = null, Yi = 0, Ef = 0, xu = 0, So = null, yr = null, xp = 0, bu = 1 / 0, Pi = null, _f = !1, Eo = null, pi = null, Rl = !1, Dl = null, wf = 0, Ru = 0, Cf = null, _o = -1, wo = 0;
  function dr() {
    return st & 6 ? St() : _o !== -1 ? _o : _o = St();
  }
  function Sn(n) {
    return n.mode & 1 ? st & 2 && Hn !== 0 ? Hn & -Hn : Ic.transition !== null ? (wo === 0 && (wo = Sc()), wo) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : xd(n.type)), n) : 1;
  }
  function pr(n, r, o, f) {
    if (50 < Ru)
      throw Ru = 0, Cf = null, Error(c(185));
    Zl(n, o, f), (!(st & 2) || n !== tn) && (n === tn && (!(st & 2) && (Ef |= o), Dn === 4 && Da(n, Hn)), hr(n, f), o === 1 && st === 0 && !(r.mode & 1) && (bu = St() + 500, An && Lr()));
  }
  function hr(n, r) {
    var o = n.callbackNode;
    gc(n, r);
    var f = Ba(n, n === tn ? Hn : 0);
    if (f === 0)
      o !== null && mr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (o != null && mr(o), r === 1)
        n.tag === 0 ? Kd(fm.bind(null, n)) : Zd(fm.bind(null, n)), Gd(function() {
          !(st & 6) && Lr();
        }), o = null;
      else {
        switch (wd(f)) {
          case 1:
            o = bi;
            break;
          case 4:
            o = ut;
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
    if (_o = -1, wo = 0, st & 6)
      throw Error(c(327));
    var o = n.callbackNode;
    if (Mu() && n.callbackNode !== o)
      return null;
    var f = Ba(n, n === tn ? Hn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = xf(n, f);
    else {
      r = f;
      var h = st;
      st |= 2;
      var y = Tf();
      (tn !== n || Hn !== r) && (Pi = null, bu = St() + 500, Co(n, r));
      do
        try {
          a0();
          break;
        } catch (x) {
          dm(n, x);
        }
      while (1);
      rp(), Hs.current = y, st = h, on !== null ? r = 0 : (tn = null, Hn = 0, r = Dn);
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
    if (st & 6)
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
    var o = st;
    st |= 1;
    try {
      return n(r);
    } finally {
      st = o, st === 0 && (bu = St() + 500, An && Lr());
    }
  }
  function kl(n) {
    Dl !== null && Dl.tag === 0 && !(st & 6) && Mu();
    var r = st;
    st |= 1;
    var o = fr.transition, f = Ot;
    try {
      if (fr.transition = null, Ot = 1, n)
        return n();
    } finally {
      Ot = f, fr.transition = o, st = r, !(st & 6) && Lr();
    }
  }
  function Dp() {
    la = Tu.current, Tt(Tu);
  }
  function Co(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Hv(o)), on !== null)
      for (o = on.return; o !== null; ) {
        var f = o;
        switch (Jd(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && _a();
            break;
          case 3:
            Cl(), Tt(ln), Tt(Ge), qc();
            break;
          case 5:
            lt(f);
            break;
          case 4:
            Cl();
            break;
          case 13:
            Tt(Ie);
            break;
          case 19:
            Tt(Ie);
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
    if (tn = n, on = n = Ml(n.current, null), Hn = la = r, Dn = 0, Ys = null, xu = Ef = Yi = 0, yr = So = null, Wn !== null) {
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
      var o = on;
      try {
        if (rp(), Zc.current = pf, Be) {
          for (var f = Wt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          Be = !1;
        }
        if (uo = 0, pt = q = Wt = null, ci = !1, ia = 0, Tp.current = null, o === null || o.return === null) {
          Dn = 1, Ys = r, on = null;
          break;
        }
        e: {
          var y = n, w = o.return, x = o, M = r;
          if (r = Hn, x.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var B = M, X = x, re = X.tag;
            if (!(X.mode & 1) && (re === 0 || re === 11 || re === 15)) {
              var K = X.alternate;
              K ? (X.updateQueue = K.updateQueue, X.memoizedState = K.memoizedState, X.lanes = K.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ye = dp(w);
            if (ye !== null) {
              ye.flags &= -257, pp(ye, w, x, y, r), ye.mode & 1 && em(y, B, r), r = ye, M = B;
              var be = r.updateQueue;
              if (be === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(M), r.updateQueue = ke;
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
            var dn = dp(w);
            if (dn !== null) {
              !(dn.flags & 65536) && (dn.flags |= 256), pp(dn, w, x, y, r), tp(yu(M, x));
              break e;
            }
          }
          y = M = yu(M, x), Dn !== 4 && (Dn = 2), So === null ? So = [y] : So.push(y), y = w;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var j = Jv(y, M, r);
                lp(y, j);
                break e;
              case 1:
                x = M;
                var N = y.type, Y = y.stateNode;
                if (!(y.flags & 128) && (typeof N.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (pi === null || !pi.has(Y)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var oe = Ns(y, x, r);
                  lp(y, oe);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Mp(o);
      } catch (Oe) {
        r = Oe, on === o && o !== null && (on = o = o.return);
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
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), tn === null || !(Yi & 268435455) && !(Ef & 268435455) || Da(tn, Hn);
  }
  function xf(n, r) {
    var o = st;
    st |= 2;
    var f = Tf();
    (tn !== n || Hn !== r) && (Pi = null, Co(n, r));
    do
      try {
        r0();
        break;
      } catch (h) {
        dm(n, h);
      }
    while (1);
    if (rp(), st = o, Hs.current = f, on !== null)
      throw Error(c(261));
    return tn = null, Hn = 0, Dn;
  }
  function r0() {
    for (; on !== null; )
      pm(on);
  }
  function a0() {
    for (; on !== null && !ol(); )
      pm(on);
  }
  function pm(n) {
    var r = vm(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? Mp(n) : on = r, Tp.current = null;
  }
  function Mp(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ep(o, r), o !== null) {
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
  function To(n, r, o) {
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
      Mu();
    while (Dl !== null);
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
    if (Og(n, y), n === tn && (on = tn = null, Hn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Rl || (Rl = !0, Op(ul, function() {
      return Mu(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = fr.transition, fr.transition = null;
      var w = Ot;
      Ot = 1;
      var x = st;
      st |= 4, Tp.current = null, im(n, o), om(o, n), Nc(no), Kl = !!Wd, no = Wd = null, n.current = o, um(o), mc(), st = x, Ot = w, fr.transition = y;
    } else
      n.current = o;
    if (Rl && (Rl = !1, Dl = n, wf = h), y = n.pendingLanes, y === 0 && (pi = null), Jh(o.stateNode), hr(n, St()), r !== null)
      for (f = n.onRecoverableError, o = 0; o < r.length; o++)
        h = r[o], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (_f)
      throw _f = !1, n = Eo, Eo = null, n;
    return wf & 1 && n.tag !== 0 && Mu(), y = n.pendingLanes, y & 1 ? n === Cf ? Ru++ : (Ru = 0, Cf = n) : Ru = 0, Lr(), null;
  }
  function Mu() {
    if (Dl !== null) {
      var n = wd(wf), r = fr.transition, o = Ot;
      try {
        if (fr.transition = null, Ot = 16 > n ? 16 : n, Dl === null)
          var f = !1;
        else {
          if (n = Dl, Dl = null, wf = 0, st & 6)
            throw Error(c(331));
          var h = st;
          for (st |= 4, Te = n.current; Te !== null; ) {
            var y = Te, w = y.child;
            if (Te.flags & 16) {
              var x = y.deletions;
              if (x !== null) {
                for (var M = 0; M < x.length; M++) {
                  var B = x[M];
                  for (Te = B; Te !== null; ) {
                    var X = Te;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, X, y);
                    }
                    var re = X.child;
                    if (re !== null)
                      re.return = X, Te = re;
                    else
                      for (; Te !== null; ) {
                        X = Te;
                        var K = X.sibling, ye = X.return;
                        if (wp(X), X === B) {
                          Te = null;
                          break;
                        }
                        if (K !== null) {
                          K.return = ye, Te = K;
                          break;
                        }
                        Te = ye;
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
                        js(9, y, y.return);
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
            var Y = w.child;
            if (w.subtreeFlags & 2064 && Y !== null)
              Y.return = w, Te = Y;
            else
              e:
                for (w = N; Te !== null; ) {
                  if (x = Te, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fs(9, x);
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
          if (st = h, Lr(), Ia && typeof Ia.onPostCommitFiberRoot == "function")
            try {
              Ia.onPostCommitFiberRoot(ts, n);
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
  function hm(n, r, o) {
    r = yu(o, r), r = Jv(n, r, 1), n = _l(n, r, 1), r = dr(), n !== null && (Zl(n, 1, r), hr(n, r));
  }
  function un(n, r, o) {
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
    f !== null && f.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, tn === n && (Hn & o) === o && (Dn === 4 || Dn === 3 && (Hn & 130023424) === Hn && 500 > St() - xp ? Co(n, 0) : xu |= o), hr(n, r);
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
      if (n.memoizedProps !== r.pendingProps || ln.current)
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
        var h = Ea(r, Ge.current);
        fe(r, o), h = Tl(null, r, f, n, h, o);
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
              for (Ar = Qa(r.stateNode.containerInfo.firstChild), ra = r, Bt = !0, Ca = null, o = Kv(r, null, f, o), r.child = o; o; )
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
        return He(r), n === null && Pc(r), f = r.type, h = r.pendingProps, y = n !== null ? n.memoizedProps : null, w = h.children, Es(f, h) ? w = null : y !== null && Es(f, y) && (r.flags |= 32), Je(n, r), xn(n, r, w, o), r.child;
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
        return h = r.type, f = r.pendingProps.children, fe(r, o), h = fn(h), f = f(h), r.flags |= 1, xn(n, r, f, o), r.child;
      case 14:
        return f = r.type, h = aa(f, r.pendingProps), h = aa(f.type, h), vf(n, r, f, h, o);
      case 15:
        return Hr(n, r, r.type, r.pendingProps, o);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : aa(f, h), sr(n, r), r.tag = 1, Zt(f) ? (n = !0, Fc(r)) : n = !1, fe(r, o), Gv(r, f, h), Gc(r, f, h, o), tm(null, r, f, !0, n, o);
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
      if (n = n.$$typeof, n === Nt)
        return 11;
      if (n === hn)
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
          case ue:
            return xo(o.children, h, y, r);
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
            return Vs(o, h, y, r);
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
    return { $$typeof: ee, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: o };
  }
  function Lp(n) {
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
          o !== 0 && (ns(r, o | 1), hr(r, St()), !(st & 6) && (bu = St() + 500, Lr()));
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
    return Ot;
  }, Cd = function(n, r) {
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
  }, es = ku, vc = kl;
  var p0 = { usingClientEntryPoint: !1, Events: [ws, su, ze, $l, qo, ku] }, Ou = { findFiberByHostInstance: Sa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, h0 = { bundleType: Ou.bundleType, version: Ou.version, rendererPackageName: Ou.rendererPackageName, rendererConfig: Ou.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
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
function QA() {
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
    var b = 0, D = 1, z = 2, U = 3, A = 4, Q = 5, P = 6, te = 7, Ee = 8, Me = 9, le = 10, ne = 11, ve = 12, ce = 13, ee = 14, ue = 15, We = 16, et = 17, nt = 18, dt = 19, Nt = 21, Pe = 22, at = 23, hn = 24, kt = 25, _n = !0, se = !1, je = !1, _e = !1, gt = !1, Ct = !0, Vn = !1, vr = !1, ni = !0, wn = !0, da = !0, rr = /* @__PURE__ */ new Set(), Dr = {}, ri = {};
    function kr(e, t) {
      pa(e, t), pa(e + "Capture", t);
    }
    function pa(e, t) {
      Dr[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Dr[e] = t;
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
    var ii = 0, Zr = 1, Ya = 2, vn = 3, Kr = 4, al = 5, Pa = 6, pe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ue = pe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", it = new RegExp("^[" + pe + "][" + Ue + "]*$"), Mt = {}, Xt = {};
    function Nn(e) {
      return ar.call(Xt, e) ? !0 : ar.call(Mt, e) ? !1 : it.test(e) ? (Xt[e] = !0, !0) : (Mt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === ii : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Mr(e, t, a, l) {
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
      if (t === null || typeof t > "u" || Mr(e, t, a, l))
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
          L === vn || L === Kr && a === !0 ? O = "" : (ha(a, C), O = "" + a, s.sanitizeURL && Zo(O.toString())), T ? e.setAttributeNS(T, C, O) : e.setAttribute(C, O);
        }
      }
    }
    var il = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), ll = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), he = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), mr = Symbol.for("react.legacy_hidden"), ol = Symbol.for("react.cache"), mc = Symbol.for("react.tracing_marker"), St = Symbol.iterator, kg = "@@iterator";
    function bi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = St && e[St] || e[kg];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, ul = 0, Xh, gd, ts, Ia, Jh, va, ev;
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
            log: ut({}, e, {
              value: Xh
            }),
            info: ut({}, e, {
              value: gd
            }),
            warn: ut({}, e, {
              value: ts
            }),
            error: ut({}, e, {
              value: Ia
            }),
            group: ut({}, e, {
              value: Jh
            }),
            groupCollapsed: ut({}, e, {
              value: va
            }),
            groupEnd: ut({}, e, {
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
                    var L = `
` + S[C].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && gc.set(e, L), L;
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
        case tt:
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
          case Ve: {
            var l = e, s = l._payload, d = l._init;
            try {
              return ns(d(s), t, a);
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
        case ce:
          return Ba("Suspense");
        case dt:
          return Ba("SuspenseList");
        case b:
        case z:
        case ue:
          return Zl(e.type);
        case ne:
          return Zl(e.type.render);
        case D:
          return _d(e.type);
        default:
          return "";
      }
    }
    function wd(e) {
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
        case tt:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            var t = e;
            return Ec(t) + ".Consumer";
          case J:
            var a = e;
            return Ec(a._context) + ".Provider";
          case Fe:
            return nv(e, e.render, "ForwardRef");
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
    function rv(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function Cd(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case hn:
          return "Cache";
        case Me:
          var l = a;
          return Cd(l) + ".Consumer";
        case le:
          var s = a;
          return Cd(s._context) + ".Provider";
        case nt:
          return "DehydratedFragment";
        case ne:
          return rv(a, a.render, "ForwardRef");
        case te:
          return "Fragment";
        case Q:
          return a;
        case A:
          return "Portal";
        case U:
          return "Root";
        case P:
          return "Text";
        case We:
          return jt(a);
        case Ee:
          return a === ll ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case ve:
          return "Profiler";
        case Nt:
          return "Scope";
        case ce:
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
    var rs = c.ReactDebugCurrentFrame, mn = null, ma = !1;
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
      var a = e, l = t.checked, s = ut({}, t, {
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
        for (var T = or(sl(a)), L = null, O = 0; O < s.length; O++) {
          if (s[O].value === T) {
            s[O].selected = !0, l && (s[O].defaultSelected = !0);
            return;
          }
          L === null && !s[O].disabled && (L = s[O]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function Dd(e, t) {
      return ut({}, t, {
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
      var l = ut({}, t, {
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
    }), Or = 1, ki = 3, yn = 8, $a = 9, Xl = 11, kc = function(e, t) {
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
    }, Dv = ut({
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
        return typeof a == "boolean" && Mr(t, a, _, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : C ? !0 : Mr(t, a, _, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && _ !== null && _.type === vn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
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
        var T = document.createEvent("Event"), L = !1, O = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function $() {
          Gd.removeEventListener(G, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          L = !0, $(), a.apply(l, we), O = !1;
        }
        var Ne, vt = !1, ct = !1;
        function F(H) {
          if (Ne = H.error, vt = !0, Ne === null && H.colno === 0 && H.lineno === 0 && (ct = !0), H.defaultPrevented && Ne != null && typeof Ne == "object")
            try {
              Ne._suppressLogging = !0;
            } catch {
            }
        }
        var G = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Gd.addEventListener(G, Ae, !1), T.initEvent(G, !1, !1), Gd.dispatchEvent(T), I && Object.defineProperty(window, "event", I), L && O && (vt ? ct && (Ne = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ne = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ne)), window.removeEventListener("error", F), !L)
          return $(), Hv.apply(this, arguments);
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
    ), Nr = (
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
    ), Fc = Zt | Xe | ui | Nr | Ea | Cs, Yv = (
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
    ), Lr = (
      /*                 */
      4194304
    ), yl = (
      /*                */
      8388608
    ), Ur = (
      /*               */
      16777216
    ), io = (
      /*              */
      33554432
    ), cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Xe | Ea | 0
    ), zr = It | Xe | Tt | xt | Nr | _a | ml, ur = Xe | ui | Nr | ml, wa = Zt | Tt, Bn = Lr | yl | Kd, Ui = c.ReactCurrentOwner;
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
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Jd(e) {
      return na(e) === e;
    }
    function ra(e) {
      {
        var t = Ui.current;
        if (t !== null && t.tag === D) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var s = Sa(e);
      return s ? na(s) === s : !1;
    }
    function Ar(e) {
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
              return Ar(d), e;
            if (_ === s)
              return Ar(d), t;
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
      return t !== null ? ep(t) : null;
    }
    function ep(e) {
      if (e.tag === Q || e.tag === P)
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
      if (e.tag === Q || e.tag === P)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = Yc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pc = u.unstable_scheduleCallback, Vv = u.unstable_cancelCallback, Vc = u.unstable_shouldYield, Iv = u.unstable_requestPaint, Jt = u.unstable_now, tp = u.unstable_getCurrentPriorityLevel, Ic = u.unstable_ImmediatePriority, aa = u.unstable_UserBlockingPriority, si = u.unstable_NormalPriority, Bc = u.unstable_LowPriority, gl = u.unstable_IdlePriority, np = u.unstable_yieldValue, rp = u.unstable_setDisableYieldValue, Sl = null, jn = null, fe = null, fn = !1, Wn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ap(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ni && (e = ut({}, e, {
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
          fn || (fn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function zi(e, t) {
      if (jn && typeof jn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
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
          fn || (fn = !0, g("React instrumentation encountered an error: %s", s));
        }
    }
    function El(e) {
      if (jn && typeof jn.onPostCommitFiberRoot == "function")
        try {
          jn.onPostCommitFiberRoot(Sl, e);
        } catch (t) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ip(e) {
      if (jn && typeof jn.onCommitFiberUnmount == "function")
        try {
          jn.onCommitFiberUnmount(Sl, e);
        } catch (t) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof np == "function" && (rp(e), m(e)), jn && typeof jn.setStrictMode == "function")
        try {
          jn.setStrictMode(Sl, e);
        } catch (t) {
          fn || (fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ai(e) {
      fe = e;
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
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function lp() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function wl(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function lo() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Wv(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function op() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function $c(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function $v() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Gv(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function Qv() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function Gc(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function fu() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function Qc(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function qv(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function Zv(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function du() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Kv(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function xs() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function qa(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function bs() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function pu() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function oo(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function up(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function Cl(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
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
    ), jr = (
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
    ), Fr = (
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
        if (e & Fr)
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
        case jr:
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
        case Fr:
          return Fr;
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
        var T = gn(l), L = gn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === $t && (L & Tl) !== q
        )
          return t;
      }
      (l & ia) !== q && (l |= a & $t);
      var O = e.entangledLanes;
      if (O !== q)
        for (var V = e.entanglements, I = l & O; I > 0; ) {
          var $ = bl(I), we = 1 << $;
          l |= V[$], I &= ~we;
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
        case jr:
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
        case Fr:
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
      var t = e.pendingLanes & ~Fr;
      return t !== q ? t : t & Fr ? Fr : q;
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
    function Hr(e, t) {
      return (e & t) !== q;
    }
    function mo(e, t) {
      return (e & t) === t;
    }
    function Je(e, t) {
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
        case jr:
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
    function Te(e) {
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
          var T = s, L = T.pointerId;
          return wu.set(L, Cu(wu.get(L) || null, e, t, a, l, T)), !0;
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
          if (l === ce) {
            var s = Xd(a);
            if (s !== null) {
              e.blockedOn = s, wp(e.priority, function() {
                im(a);
              });
              return;
            }
          } else if (l === U) {
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
    function st(e) {
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
    var tn = c.ReactCurrentBatchConfig, on = !0;
    function Hn(e) {
      on = !!e;
    }
    function la() {
      return on;
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
      var s = ba(), d = tn.transition;
      tn.transition = null;
      try {
        bn(sr), Yi(e, t, a, l);
      } finally {
        bn(s), tn.transition = d;
      }
    }
    function Ys(e, t, a, l) {
      var s = ba(), d = tn.transition;
      tn.transition = null;
      try {
        bn($n), Yi(e, t, a, l);
      } finally {
        bn(s), tn.transition = d;
      }
    }
    function Yi(e, t, a, l) {
      on && Ef(e, t, a, l);
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
          if (S === ce) {
            var _ = Xd(v);
            if (_ !== null)
              return _;
            d = null;
          } else if (S === U) {
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
      return ut(t.prototype, {
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
    }, hr = Sn(pr), Du = ut({}, pr, {
      view: 0,
      detail: 0
    }), bp = Sn(Du), Ps, Rp, Da;
    function fm(e) {
      e !== Da && (Da && e.type === "mousemove" ? (Ps = e.screenX - Da.screenX, Rp = e.screenY - Da.screenY) : (Ps = 0, Rp = 0), Da = e);
    }
    var ku = ut({}, Du, {
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
    }), kl = Sn(ku), Dp = ut({}, ku, {
      dataTransfer: 0
    }), Co = Sn(Dp), dm = ut({}, Du, {
      relatedTarget: 0
    }), Tf = Sn(dm), kp = ut({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xf = Sn(kp), r0 = ut({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), a0 = Sn(r0), pm = ut({}, pr, {
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
    function bf(e) {
      return l0;
    }
    var o0 = ut({}, Du, {
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
    }), u0 = Sn(o0), vm = ut({}, ku, {
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
    }), Op = Sn(vm), s0 = ut({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bf
    }), ka = Sn(s0), Np = ut({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), c0 = Sn(Np), Ml = ut({}, ku, {
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
      kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), kr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
      kr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
      r = e, o = t, r.attachEvent("onpropertychange", re);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", re), r = null, o = null);
    }
    function re(e) {
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
      !t || !t.controlled || e.type !== "number" || cl(e, "number", e.value);
    }
    function N(e, t, a, l, s, d, v) {
      var S = a ? Hf(a) : window, _, C;
      if (f(S) ? _ = x : Ou(S) ? M ? _ = dn : (_ = ye, C = K) : be(S) && (_ = ke), _) {
        var T = _(t, a);
        if (T) {
          n(e, T, l, s);
          return;
        }
      }
      C && C(t, S, a), t === "focusout" && j(S);
    }
    function Y() {
      pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function oe(e, t, a, l, s, d, v) {
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
          var L = s.ownerDocument;
          L ? T = L.defaultView || L.parentWindow : T = window;
        }
        var O, V;
        if (_) {
          var I = l.relatedTarget || l.toElement;
          if (O = a, V = I ? Gs(I) : null, V !== null) {
            var $ = na(V);
            (V !== $ || V.tag !== Q && V.tag !== P) && (V = null);
          }
        } else
          O = null, V = a;
        if (O !== V) {
          var we = kl, Ae = "onMouseLeave", Ne = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Op, Ae = "onPointerLeave", Ne = "onPointerEnter", vt = "pointer");
          var ct = O == null ? T : Hf(O), F = V == null ? T : Hf(V), G = new we(Ae, vt + "leave", O, l, s);
          G.target = ct, G.relatedTarget = F;
          var H = null, ae = Gs(s);
          if (ae === a) {
            var Ce = new we(Ne, vt + "enter", V, l, s);
            Ce.target = F, Ce.relatedTarget = ct, H = Ce;
          }
          tR(e, G, H, O, V);
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
        if (a.nodeType === ki) {
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
      var d = 0, v = -1, S = -1, _ = 0, C = 0, T = e, L = null;
      e:
        for (; ; ) {
          for (var O = null; T === t && (a === 0 || T.nodeType === ki) && (v = d + a), T === l && (s === 0 || T.nodeType === ki) && (S = d + s), T.nodeType === ki && (d += T.nodeValue.length), (O = T.firstChild) !== null; )
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
    function Ab(e, t) {
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
    function c_(e) {
      return e && e.nodeType === ki;
    }
    function f_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : c_(e) ? !1 : c_(t) ? f_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jb(e) {
      return e && e.ownerDocument && f_(e.ownerDocument.documentElement, e);
    }
    function Fb(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function d_() {
      for (var e = window, t = _c(); t instanceof e.HTMLIFrameElement; ) {
        if (Fb(t))
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
    function Hb() {
      var e = d_();
      return {
        focusedElem: e,
        selectionRange: m0(e) ? Pb(e) : null
      };
    }
    function Yb(e) {
      var t = d_(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && jb(a)) {
        l !== null && m0(a) && Vb(a, l);
        for (var s = [], d = a; d = d.parentNode; )
          d.nodeType === Or && s.push({
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
    function Pb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ol(e), t || {
        start: 0,
        end: 0
      };
    }
    function Vb(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : Ab(e, t);
    }
    var Ib = On && "documentMode" in document && document.documentMode <= 11;
    function Bb() {
      kr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Uf = null, y0 = null, jp = null, g0 = !1;
    function Wb(e) {
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
    function $b(e) {
      return e.window === e ? e.document : e.nodeType === $a ? e : e.ownerDocument;
    }
    function p_(e, t, a) {
      var l = $b(a);
      if (!(g0 || Uf == null || Uf !== _c(l))) {
        var s = Wb(Uf);
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
    function Gb(e, t, a, l, s, d, v) {
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
          if (Ib)
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
      S_.set(e, t), kr(t, [e]);
    }
    function Qb() {
      for (var e = 0; e < E_.length; e++) {
        var t = E_[e], a = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Nu(a, "on" + l);
      }
      Nu(v_, "onAnimationEnd"), Nu(m_, "onAnimationIteration"), Nu(y_, "onAnimationStart"), Nu("dblclick", "onDoubleClick"), Nu("focusin", "onFocus"), Nu("focusout", "onBlur"), Nu(g_, "onTransitionEnd");
    }
    function qb(e, t, a, l, s, d, v) {
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
          var L = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = Jb(a, S, l.type, T, L);
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
    Qb(), Y(), Lf(), Bb(), ym();
    function Zb(e, t, a, l, s, d, v) {
      qb(e, t, a, l, s, d);
      var S = (d & Wg) === 0;
      S && (oe(e, t, a, l, s), N(e, t, a, l, s), Gb(e, t, a, l, s), Nf(e, t, a, l, s));
    }
    var Fp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], E0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Fp));
    function __(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Li(l, t, void 0, e), e.currentTarget = null;
    }
    function Kb(e, t, a) {
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
          var T = t[C], L = T.instance, O = T.currentTarget, V = T.listener;
          if (L !== l && e.isPropagationStopped())
            return;
          __(e, V, O), l = L;
        }
    }
    function w_(e, t) {
      for (var a = (t & eo) !== 0, l = 0; l < e.length; l++) {
        var s = e[l], d = s.event, v = s.listeners;
        Kb(d, v, a);
      }
      Qd();
    }
    function Xb(e, t, a, l, s) {
      var d = Uc(a), v = [];
      Zb(v, e, l, a, d, t), w_(v, t);
    }
    function nn(e, t) {
      E0.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, l = DD(t), s = nR(e, a);
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
              if (_ === U || _ === A) {
                var C = S.stateNode.containerInfo;
                if (T_(C, v))
                  break;
                if (_ === A)
                  for (var T = S.return; T !== null; ) {
                    var L = T.tag;
                    if (L === U || L === A) {
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
                  if (I === Q || I === P) {
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
        return Xb(e, t, a, d);
      });
    }
    function Yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Jb(e, t, a, l, s, d) {
      for (var v = t !== null ? t + "Capture" : null, S = l ? v : t, _ = [], C = e, T = null; C !== null; ) {
        var L = C, O = L.stateNode, V = L.tag;
        if (V === Q && O !== null && (T = O, S !== null)) {
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
        if (S === Q && v !== null) {
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
      while (e && e.tag !== Q);
      return e || null;
    }
    function eR(e, t) {
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
        var _ = S, C = _.alternate, T = _.stateNode, L = _.tag;
        if (C !== null && C === l)
          break;
        if (L === Q && T !== null) {
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
    function tR(e, t, a, l, s) {
      var d = l && s ? eR(l, s) : null;
      l !== null && x_(e, t, l, d, !1), s !== null && a !== null && x_(e, a, s, d, !0);
    }
    function nR(e, t) {
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
        registrationNameDependencies: Dr,
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
    var rR = /\r\n?/g, aR = /\u0000|\uFFFD/g;
    function km(e) {
      Ha(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rR, `
`).replace(aR, "");
    }
    function Mm(e, t, a, l) {
      var s = km(t), d = km(e);
      if (d !== s && (l && (Ma || (Ma = !0, g('Text content did not match. Server: "%s" Client: "%s"', d, s))), a && _n))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function M_(e) {
      return e.nodeType === $a ? e : e.ownerDocument;
    }
    function iR() {
    }
    function Om(e) {
      e.onclick = iR;
    }
    function lR(e, t, a, l, s) {
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
            d === xm || d === Lu || d === b_ || (Dr.hasOwnProperty(d) ? v != null && (typeof v != "function" && Dm(d, v), d === "onScroll" && nn("scroll", t)) : v != null && li(t, d, v, s));
        }
    }
    function oR(e, t, a, l) {
      for (var s = 0; s < t.length; s += 2) {
        var d = t[s], v = t[s + 1];
        d === $s ? bv(e, v) : d === Pp ? vv(e, v) : d === Ws ? kc(e, v) : li(e, d, v, l);
      }
    }
    function uR(e, t, a, l) {
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
    function sR(e, t) {
      return M_(t).createTextNode(e);
    }
    function cR(e, t, a, l) {
      var s = Mi(t, a);
      Rm(t, a);
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
          for (var v = 0; v < Fp.length; v++)
            nn(Fp[v], e);
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
          ss(e, a), d = us(e, a), nn("invalid", e);
          break;
        case "option":
          xc(e, a), d = a;
          break;
        case "select":
          fv(e, a), d = Dd(e, a), nn("invalid", e);
          break;
        case "textarea":
          dv(e, a), d = Md(e, a), nn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Oc(t, d), lR(t, e, l, d, s), t) {
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
    function fR(e, t, a, l, s) {
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
            var L = v[_];
            for (C in L)
              L.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else
            _ === Pp || _ === Ws || _ === xm || _ === Lu || _ === b_ || (Dr.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
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
            var I = O ? O[bm] : void 0, $ = V ? V[bm] : void 0;
            I != null && $ !== I && (d = d || []).push(_, I);
          } else
            _ === Ws ? (typeof O == "string" || typeof O == "number") && (d = d || []).push(_, "" + O) : _ === xm || _ === Lu || (Dr.hasOwnProperty(_) ? (O != null && (typeof O != "function" && Dm(_, O), _ === "onScroll" && nn("scroll", e)), !d && V !== O && (d = [])) : (d = d || []).push(_, O));
      }
      return T && (ps(T, S[$s]), (d = d || []).push($s, T)), d;
    }
    function dR(e, t, a, l, s) {
      a === "input" && s.type === "radio" && s.name != null && bd(e, s);
      var d = Mi(a, l), v = Mi(a, s);
      switch (oR(e, t, d, v), a) {
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
    function pR(e) {
      {
        var t = e.toLowerCase();
        return Nc.hasOwnProperty(t) && Nc[t] || null;
      }
    }
    function hR(e, t, a, l, s, d, v) {
      var S, _;
      switch (S = Mi(t, a), Rm(t, a), t) {
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
          for (var C = 0; C < Fp.length; C++)
            nn(Fp[C], e);
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
          ss(e, a), nn("invalid", e);
          break;
        case "option":
          xc(e, a);
          break;
        case "select":
          fv(e, a), nn("invalid", e);
          break;
        case "textarea":
          dv(e, a), nn("invalid", e);
          break;
      }
      Oc(t, a);
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
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var $ = a[I];
          if (I === Ws)
            typeof $ == "string" ? e.textContent !== $ && (a[Lu] !== !0 && Mm(e.textContent, $, d, v), V = [Ws, $]) : typeof $ == "number" && e.textContent !== "" + $ && (a[Lu] !== !0 && Mm(e.textContent, $, d, v), V = [Ws, "" + $]);
          else if (Dr.hasOwnProperty(I))
            $ != null && (typeof $ != "function" && Dm(I, $), I === "onScroll" && nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var we = void 0, Ae = S && Vn ? null : Xr(I);
            if (a[Lu] !== !0) {
              if (!(I === xm || I === Lu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === Pp) {
                  var Ne = e.innerHTML, vt = $ ? $[bm] : void 0;
                  if (vt != null) {
                    var ct = k_(e, vt);
                    ct !== Ne && Vp(I, Ne, ct);
                  }
                } else if (I === $s) {
                  if (_.delete(I), D_) {
                    var F = Ig($);
                    we = e.getAttribute("style"), F !== we && Vp(I, we, F);
                  }
                } else if (S && !Vn)
                  _.delete(I.toLowerCase()), we = Ko(e, I, $), $ !== we && Vp(I, we, $);
                else if (!cn(I, Ae, S) && !Yt(I, $, Ae, S)) {
                  var G = !1;
                  if (Ae !== null)
                    _.delete(Ae.attributeName), we = Ql(e, I, $, Ae);
                  else {
                    var H = l;
                    if (H === Di && (H = Rc(t)), H === Di)
                      _.delete(I.toLowerCase());
                    else {
                      var ae = pR(I);
                      ae !== null && ae !== I && (G = !0, _.delete(ae)), _.delete(I);
                    }
                    we = Ko(e, I, $);
                  }
                  var Ce = Vn;
                  !Ce && $ !== we && !G && Vp(I, we, $);
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
    function vR(e, t, a) {
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
    function mR(e, t, a) {
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
      var yR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], O_ = [
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
      ], gR = O_.concat(["button"]), SR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N_ = {
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
        var a = ut({}, e || N_), l = {
          tag: t
        };
        return O_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var ER = function(e, t) {
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
            return SR.indexOf(t) === -1;
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
      }, _R = function(e, t) {
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
        var d = ER(e, s) ? null : l, v = d ? null : _R(e, a), S = d || v;
        if (S) {
          var _ = S.tag, C = !!d + "|" + e + "|" + _;
          if (!L_[C]) {
            L_[C] = !0;
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
    var Nm = "suppressHydrationWarning", Lm = "$", Um = "/$", Wp = "$?", $p = "$!", wR = "style", D0 = null, k0 = null;
    function CR(e) {
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
    function TR(e, t, a) {
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
    function xR(e) {
      D0 = la(), k0 = Hb();
      var t = null;
      return Hn(!1), t;
    }
    function bR(e) {
      Yb(k0), Hn(D0), D0 = null, k0 = null;
    }
    function RR(e, t, a, l, s) {
      var d;
      {
        var v = l;
        if (Ip(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, _ = Bp(v.ancestorInfo, e);
          Ip(null, S, _);
        }
        d = v.namespace;
      }
      var C = uR(e, t, a, d);
      return qp(s, C), j0(C, t), C;
    }
    function DR(e, t) {
      e.appendChild(t);
    }
    function kR(e, t, a, l, s) {
      switch (cR(e, t, a, l), t) {
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
    function MR(e, t, a, l, s, d) {
      {
        var v = d;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var S = "" + l.children, _ = Bp(v.ancestorInfo, t);
          Ip(null, S, _);
        }
      }
      return fR(e, t, a, l);
    }
    function M0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function OR(e, t, a, l) {
      {
        var s = a;
        Ip(null, e, s.ancestorInfo);
      }
      var d = sR(e, t);
      return qp(l, d), d;
    }
    function NR() {
      var e = window.event;
      return e === void 0 ? Fi : yr(e.type);
    }
    var O0 = typeof setTimeout == "function" ? setTimeout : void 0, LR = typeof clearTimeout == "function" ? clearTimeout : void 0, N0 = -1, U_ = typeof Promise == "function" ? Promise : void 0, UR = typeof queueMicrotask == "function" ? queueMicrotask : typeof U_ < "u" ? function(e) {
      return U_.resolve(null).then(e).catch(zR);
    } : O0;
    function zR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function AR(e, t, a, l) {
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
    function jR(e, t, a, l, s, d) {
      dR(e, t, a, l, s), j0(e, s);
    }
    function z_(e) {
      kc(e, "");
    }
    function FR(e, t, a) {
      e.nodeValue = a;
    }
    function HR(e, t) {
      e.appendChild(t);
    }
    function YR(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Om(a);
    }
    function PR(e, t, a) {
      e.insertBefore(t, a);
    }
    function VR(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function IR(e, t) {
      e.removeChild(t);
    }
    function BR(e, t) {
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
              e.removeChild(s), st(t);
              return;
            } else
              l--;
          else
            (d === Lm || d === Wp || d === $p) && l++;
        }
        a = s;
      } while (a);
      st(t);
    }
    function WR(e, t) {
      e.nodeType === yn ? L0(e.parentNode, t) : e.nodeType === Or && L0(e, t), st(e);
    }
    function $R(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function GR(e) {
      e.nodeValue = "";
    }
    function QR(e, t) {
      e = e;
      var a = t[wR], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Mc("display", l);
    }
    function qR(e, t) {
      e.nodeValue = t;
    }
    function ZR(e) {
      e.nodeType === Or ? e.textContent = "" : e.nodeType === $a && e.documentElement && e.removeChild(e.documentElement);
    }
    function KR(e, t, a) {
      return e.nodeType !== Or || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function XR(e, t) {
      return t === "" || e.nodeType !== ki ? null : e;
    }
    function JR(e) {
      return e.nodeType !== yn ? null : e;
    }
    function A_(e) {
      return e.data === Wp;
    }
    function U0(e) {
      return e.data === $p;
    }
    function eD(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, l, s;
      return t && (a = t.dgst, l = t.msg, s = t.stck), {
        message: l,
        digest: a,
        stack: s
      };
    }
    function tD(e, t) {
      e._reactRetry = t;
    }
    function zm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Or || t === ki)
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
    function nD(e) {
      return zm(e.firstChild);
    }
    function rD(e) {
      return zm(e.firstChild);
    }
    function aD(e) {
      return zm(e.nextSibling);
    }
    function iD(e, t, a, l, s, d, v) {
      qp(d, e), j0(e, a);
      var S;
      {
        var _ = s;
        S = _.namespace;
      }
      var C = (d.mode & lt) !== He;
      return hR(e, t, a, S, l, C, v);
    }
    function lD(e, t, a, l) {
      return qp(a, e), a.mode & lt, vR(e, t);
    }
    function oD(e, t) {
      qp(t, e);
    }
    function uD(e) {
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
    function sD(e) {
      st(e);
    }
    function cD(e) {
      st(e);
    }
    function fD(e) {
      return e !== "head" && e !== "body";
    }
    function dD(e, t, a, l) {
      var s = !0;
      Mm(t.nodeValue, a, l, s);
    }
    function pD(e, t, a, l, s, d) {
      if (t[Nm] !== !0) {
        var v = !0;
        Mm(l.nodeValue, s, d, v);
      }
    }
    function hD(e, t) {
      t.nodeType === Or ? T0(e, t) : t.nodeType === yn || x0(e, t);
    }
    function vD(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Or ? T0(a, t) : t.nodeType === yn || x0(a, t));
      }
    }
    function mD(e, t, a, l, s) {
      (s || t[Nm] !== !0) && (l.nodeType === Or ? T0(a, l) : l.nodeType === yn || x0(a, l));
    }
    function yD(e, t, a) {
      b0(e, t);
    }
    function gD(e, t) {
      R0(e, t);
    }
    function SD(e, t, a) {
      {
        var l = e.parentNode;
        l !== null && b0(l, t);
      }
    }
    function ED(e, t) {
      {
        var a = e.parentNode;
        a !== null && R0(a, t);
      }
    }
    function _D(e, t, a, l, s, d) {
      (d || t[Nm] !== !0) && b0(a, l);
    }
    function wD(e, t, a, l, s) {
      (s || t[Nm] !== !0) && R0(a, l);
    }
    function CD(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function TD(e) {
      Hp(e);
    }
    var jf = Math.random().toString(36).slice(2), Ff = "__reactFiber$" + jf, z0 = "__reactProps$" + jf, Qp = "__reactContainer$" + jf, A0 = "__reactEvents$" + jf, xD = "__reactListeners$" + jf, bD = "__reactHandles$" + jf;
    function RD(e) {
      delete e[Ff], delete e[z0], delete e[A0], delete e[xD], delete e[bD];
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
      return t && (t.tag === Q || t.tag === P || t.tag === ce || t.tag === U) ? t : null;
    }
    function Hf(e) {
      if (e.tag === Q || e.tag === P)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function jm(e) {
      return e[z0] || null;
    }
    function j0(e, t) {
      e[z0] = t;
    }
    function DD(e) {
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
    function Yr(e, t) {
      if (Ro < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Hm[Ro] && g("Unexpected Fiber popped."), e.current = F0[Ro], F0[Ro] = null, Hm[Ro] = null, Ro--;
    }
    function Pr(e, t, a) {
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
          var S = Ke(e) || "Unknown";
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
      Yr(Nl, e), Yr(Do, e);
    }
    function P0(e) {
      Yr(Nl, e), Yr(Do, e);
    }
    function V_(e, t, a) {
      {
        if (Do.current !== Ka)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Pr(Do, t, e), Pr(Nl, a, e);
      }
    }
    function I_(e, t, a) {
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
          Ii(s, v, "child context", _);
        }
        return ut({}, a, v);
      }
    }
    function Vm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ka;
        return Y0 = Do.current, Pr(Do, a, e), Pr(Nl, Nl.current, e), !0;
      }
    }
    function B_(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var s = I_(e, t, Y0);
          l.__reactInternalMemoizedMergedChildContext = s, Yr(Nl, e), Yr(Do, e), Pr(Do, s, e), Pr(Nl, a, e);
        } else
          Yr(Nl, e), Pr(Nl, a, e);
      }
    }
    function kD(e) {
      {
        if (!Jd(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case D: {
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
    function MD(e) {
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
    function OD(e) {
      return Zs(), (e.flags & Zd) !== ze;
    }
    function ND(e) {
      return Zs(), Wm;
    }
    function LD() {
      var e = Oo, t = Mo, a = t & ~UD(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Zs(), Vf[If++] = Wm, Vf[If++] = Bm, Bm = e, Wm = t;
    }
    function G_(e, t, a) {
      Zs(), hi[vi++] = Mo, hi[vi++] = Oo, hi[vi++] = Qs, Qs = e;
      var l = Mo, s = Oo, d = $m(l) - 1, v = l & ~(1 << d), S = a + 1, _ = $m(t) + d;
      if (_ > 30) {
        var C = d - d % 5, T = (1 << C) - 1, L = (v & T).toString(32), O = v >> C, V = d - C, I = $m(t) + V, $ = S << V, we = $ | O, Ae = L + s;
        Mo = 1 << I | we, Oo = Ae;
      } else {
        var Ne = S << d, vt = Ne | v, ct = s;
        Mo = 1 << _ | vt, Oo = ct;
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
    function UD(e) {
      return 1 << $m(e) - 1;
    }
    function W0(e) {
      for (; e === Bm; )
        Bm = Vf[--If], Vf[If] = null, Wm = Vf[--If], Vf[If] = null;
      for (; e === Qs; )
        Qs = hi[--vi], hi[vi] = null, Oo = hi[--vi], hi[vi] = null, Mo = hi[--vi], hi[vi] = null;
    }
    function zD() {
      return Zs(), Qs !== null ? {
        id: Mo,
        overflow: Oo
      } : null;
    }
    function AD(e, t) {
      Zs(), hi[vi++] = Mo, hi[vi++] = Oo, hi[vi++] = Qs, Mo = t.id, Oo = t.overflow, Qs = e;
    }
    function Zs() {
      Sr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var gr = null, mi = null, Bi = !1, Ks = !1, Fu = null;
    function jD() {
      Bi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Q_() {
      Ks = !0;
    }
    function FD() {
      return Ks;
    }
    function HD(e) {
      var t = e.stateNode.containerInfo;
      return mi = rD(t), gr = e, Bi = !0, Fu = null, Ks = !1, !0;
    }
    function YD(e, t, a) {
      return mi = aD(t), gr = e, Bi = !0, Fu = null, Ks = !1, a !== null && AD(e, a), !0;
    }
    function q_(e, t) {
      switch (e.tag) {
        case U: {
          hD(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & lt) !== He;
          mD(
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
          l.dehydrated !== null && vD(l.dehydrated, t);
          break;
        }
      }
    }
    function Z_(e, t) {
      q_(e, t);
      var a = IO();
      a.stateNode = t, a.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [a], e.flags |= Tt) : l.push(a);
    }
    function $0(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var l = t.type;
                t.pendingProps, yD(a, l);
                break;
              case P:
                var s = t.pendingProps;
                gD(a, s);
                break;
            }
            break;
          }
          case Q: {
            var d = e.type, v = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case Q: {
                var _ = t.type, C = t.pendingProps, T = (e.mode & lt) !== He;
                _D(
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
              case P: {
                var L = t.pendingProps, O = (e.mode & lt) !== He;
                wD(
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
          case ce: {
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null)
              switch (t.tag) {
                case Q:
                  var $ = t.type;
                  t.pendingProps, SD(I, $);
                  break;
                case P:
                  var we = t.pendingProps;
                  ED(I, we);
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
        case Q: {
          var a = e.type;
          e.pendingProps;
          var l = KR(t, a);
          return l !== null ? (e.stateNode = l, gr = e, mi = nD(l), !0) : !1;
        }
        case P: {
          var s = e.pendingProps, d = XR(t, s);
          return d !== null ? (e.stateNode = d, gr = e, mi = null, !0) : !1;
        }
        case ce: {
          var v = JR(t);
          if (v !== null) {
            var S = {
              dehydrated: v,
              treeContext: zD(),
              retryLane: Fr
            };
            e.memoizedState = S;
            var _ = BO(v);
            return _.return = e, e.child = _, gr = e, mi = null, !0;
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
    function PD(e, t, a) {
      var l = e.stateNode, s = !Ks, d = iD(l, e.type, e.memoizedProps, t, a, e, s);
      return e.updateQueue = d, d !== null;
    }
    function VD(e) {
      var t = e.stateNode, a = e.memoizedProps, l = lD(t, a, e);
      if (l) {
        var s = gr;
        if (s !== null)
          switch (s.tag) {
            case U: {
              var d = s.stateNode.containerInfo, v = (s.mode & lt) !== He;
              dD(
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
              pD(
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
    function ID(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      oD(a, e);
    }
    function BD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return uD(a);
    }
    function J_(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== U && t.tag !== ce; )
        t = t.return;
      gr = t;
    }
    function Gm(e) {
      if (e !== gr)
        return !1;
      if (!Bi)
        return J_(e), Bi = !0, !1;
      if (e.tag !== U && (e.tag !== Q || fD(e.type) && !M0(e.type, e.memoizedProps))) {
        var t = mi;
        if (t)
          if (G0(e))
            ew(e), Q0();
          else
            for (; t; )
              Z_(e, t), t = Gp(t);
      }
      return J_(e), e.tag === ce ? mi = BD(e) : mi = gr ? Gp(e.stateNode) : null, !0;
    }
    function WD() {
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
    var $D = c.ReactCurrentBatchConfig, GD = null;
    function QD() {
      return $D.transition;
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
      var qD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Kp = [], Xp = [], Jp = [], eh = [], th = [], nh = [], Js = /* @__PURE__ */ new Set();
      Wi.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && eh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && nh.push(e));
      }, Wi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(O) {
          e.add(Ke(O) || "Component"), Js.add(O.type);
        }), Kp = []);
        var t = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          t.add(Ke(O) || "Component"), Js.add(O.type);
        }), Xp = []);
        var a = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(O) {
          a.add(Ke(O) || "Component"), Js.add(O.type);
        }), Jp = []);
        var l = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(O) {
          l.add(Ke(O) || "Component"), Js.add(O.type);
        }), eh = []);
        var s = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(O) {
          s.add(Ke(O) || "Component"), Js.add(O.type);
        }), th = []);
        var d = /* @__PURE__ */ new Set();
        if (nh.length > 0 && (nh.forEach(function(O) {
          d.add(Ke(O) || "Component"), Js.add(O.type);
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
          var L = Xs(s);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var Qm = /* @__PURE__ */ new Map(), nw = /* @__PURE__ */ new Set();
      Wi.recordLegacyContextWarning = function(e, t) {
        var a = qD(e);
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
              l.add(Ke(d) || "Component"), nw.add(d.type);
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
        var a = ut({}, t), l = e.defaultProps;
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
      Pr(K0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== X0 && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = X0;
    }
    function eS(e, t) {
      var a = K0.current;
      Yr(K0, t), e._currentValue = a;
    }
    function tS(e, t, a) {
      for (var l = e; l !== null; ) {
        var s = l.alternate;
        if (mo(l.childLanes, t) ? s !== null && !mo(s.childLanes, t) && (s.childLanes = Je(s.childLanes, t)) : (l.childLanes = Je(l.childLanes, t), s !== null && (s.childLanes = Je(s.childLanes, t))), l === a)
          break;
        l = l.return;
      }
      l !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ZD(e, t, a) {
      KD(e, t, a);
    }
    function KD(e, t, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var s = void 0, d = l.dependencies;
        if (d !== null) {
          s = l.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === D) {
                var S = xn(a), _ = No(Ht, S);
                _.tag = Jm;
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
          var V = l.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = Je(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = Je(I.lanes, a)), tS(V, a, e), s = l.sibling;
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
    function $f(e, t) {
      qm = e, Wf = null, J0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (Hr(a.lanes, t) && mh(), a.firstContext = null);
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
    function XD() {
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
    function JD(e, t, a, l) {
      var s = t.interleaved;
      s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
    }
    function ek(e, t, a, l) {
      var s = t.interleaved;
      return s === null ? (a.next = a, nS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, Xm(e, l);
    }
    function Oa(e, t) {
      return Xm(e, t);
    }
    var tk = Xm;
    function Xm(e, t) {
      e.lanes = Je(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Je(a.lanes, t)), a === null && (e.flags & (It | _a)) !== ze && oT(e);
      for (var l = e, s = e.return; s !== null; )
        s.childLanes = Je(s.childLanes, t), a = s.alternate, a !== null ? a.childLanes = Je(a.childLanes, t) : (s.flags & (It | _a)) !== ze && oT(e), l = s, s = s.return;
      if (l.tag === U) {
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
      if (ty === s && !aS && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), aS = !0), tO()) {
        var d = s.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), s.pending = t, tk(e, a);
      } else
        return ek(e, s, t, a);
    }
    function ny(e, t, a) {
      var l = t.updateQueue;
      if (l !== null) {
        var s = l.shared;
        if (dp(a)) {
          var d = s.lanes;
          d = hp(d, e.pendingLanes);
          var v = Je(d, a);
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
    function nk(e, t, a, l, s, d) {
      switch (a.tag) {
        case uw: {
          var v = a.payload;
          if (typeof v == "function") {
            rw();
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
              aw();
            }
            return S;
          }
          return v;
        }
        case rS:
          e.flags = e.flags & ~An | Ge;
        case ow: {
          var _ = a.payload, C;
          if (typeof _ == "function") {
            rw(), C = _.call(d, l, s);
            {
              if (e.mode & en) {
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
          return C == null ? l : ut({}, l, C);
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
          var L = T.updateQueue, O = L.lastBaseUpdate;
          O !== v && (O === null ? L.firstBaseUpdate = C : O.next = C, L.lastBaseUpdate = _);
        }
      }
      if (d !== null) {
        var V = s.baseState, I = q, $ = null, we = null, Ae = null, Ne = d;
        do {
          var vt = Ne.lane, ct = Ne.eventTime;
          if (mo(l, vt)) {
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
            V = nk(e, s, Ne, V, t, a);
            var H = Ne.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ne.lane !== pt) {
              e.flags |= ui;
              var ae = s.effects;
              ae === null ? s.effects = [Ne] : ae.push(Ne);
            }
          } else {
            var F = {
              eventTime: ct,
              lane: vt,
              tag: Ne.tag,
              payload: Ne.payload,
              callback: Ne.callback,
              next: null
            };
            Ae === null ? (we = Ae = F, $ = V) : Ae = Ae.next = F, I = Je(I, vt);
          }
          if (Ne = Ne.next, Ne === null) {
            if (S = s.shared.pending, S === null)
              break;
            var Ce = S, me = Ce.next;
            Ce.next = null, Ne = me, s.lastBaseUpdate = Ce, s.shared.pending = null;
          }
        } while (!0);
        Ae === null && ($ = V), s.baseState = $, s.firstBaseUpdate = we, s.lastBaseUpdate = Ae;
        var $e = s.shared.interleaved;
        if ($e !== null) {
          var Ze = $e;
          do
            I = Je(I, Ze.lane), Ze = Ze.next;
          while (Ze !== $e);
        } else
          d === null && (s.shared.lanes = q);
        Dh(I), e.lanes = I, e.memoizedState = V;
      }
      ty = null;
    }
    function rk(e, t) {
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
          v !== null && (d.callback = null, rk(v, a));
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
        if (e.mode & en) {
          Tn(!0);
          try {
            d = a(l, s);
          } finally {
            Tn(!1);
          }
        }
        pw(t, d);
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
    function ak(e, t, a) {
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
          v === null || v !== void 0 && v.$$typeof === he && v._context === void 0
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
        s = Yf(e, t, !0);
        var C = t.contextTypes;
        l = C != null, d = l ? Pf(e, s) : Ka;
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
      mw(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var O = jt(t) || "Component";
          sS.has(O) || (sS.add(O), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, T.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, $ = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? $ = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && ($ = "UNSAFE_componentWillUpdate"), V !== null || I !== null || $ !== null) {
            var we = jt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(we) || (fS.add(we), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, Ae, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", $ !== null ? `
  ` + $ : ""));
          }
        }
      }
      return l && P_(e, s, d), T;
    }
    function ik(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function gw(e, t, a, l) {
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
      ak(e, t, a);
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
        e.mode & en && Wi.recordLegacyContextWarning(e, s), Wi.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (mS(e, t, _, a), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (ik(e, s), ry(e, a, s, l), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var C = Xe;
        C |= Lr, (e.mode & Ta) !== He && (C |= Ur), e.flags |= C;
      }
    }
    function lk(e, t, a, l) {
      var s = e.stateNode, d = e.memoizedProps;
      s.props = d;
      var v = s.context, S = t.contextType, _ = Ka;
      if (typeof S == "object" && S !== null)
        _ = Pn(S);
      else {
        var C = Yf(e, t, !0);
        _ = Pf(e, C);
      }
      var T = t.getDerivedStateFromProps, L = typeof T == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !L && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== a || v !== _) && gw(e, s, a, _), cw();
      var O = e.memoizedState, V = s.state = O;
      if (ry(e, a, s, l), V = e.memoizedState, d === a && O === V && !Ym() && !ay()) {
        if (typeof s.componentDidMount == "function") {
          var I = Xe;
          I |= Lr, (e.mode & Ta) !== He && (I |= Ur), e.flags |= I;
        }
        return !1;
      }
      typeof T == "function" && (mS(e, t, T, a), V = e.memoizedState);
      var $ = ay() || vw(e, t, d, a, O, V, _);
      if ($) {
        if (!L && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var we = Xe;
          we |= Lr, (e.mode & Ta) !== He && (we |= Ur), e.flags |= we;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var Ae = Xe;
          Ae |= Lr, (e.mode & Ta) !== He && (Ae |= Ur), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return s.props = a, s.state = V, s.context = _, $;
    }
    function ok(e, t, a, l, s) {
      var d = t.stateNode;
      sw(e, t);
      var v = t.memoizedProps, S = t.type === t.elementType ? v : $i(t.type, v);
      d.props = S;
      var _ = t.pendingProps, C = d.context, T = a.contextType, L = Ka;
      if (typeof T == "object" && T !== null)
        L = Pn(T);
      else {
        var O = Yf(t, a, !0);
        L = Pf(t, O);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !I && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== _ || C !== L) && gw(t, d, l, L), cw();
      var $ = t.memoizedState, we = d.state = $;
      if (ry(t, l, d, s), we = t.memoizedState, v === _ && $ === we && !Ym() && !ay() && !je)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Ea), !1;
      typeof V == "function" && (mS(t, a, V, l), we = t.memoizedState);
      var Ae = ay() || vw(t, a, S, l, $, we, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      je;
      return Ae ? (!I && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, we, L), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, we, L)), typeof d.componentDidUpdate == "function" && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Ea)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Xe), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Ea), t.memoizedProps = l, t.memoizedState = we), d.props = l, d.state = we, d.context = L, Ae;
    }
    var SS, ES, _S, wS, CS, Sw = function(e, t) {
    };
    SS = !1, ES = !1, _S = {}, wS = {}, CS = {}, Sw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        wS[a] || (wS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function rh(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & en || vr) && // We warn in ReactElement.js if owner and self are equal for string refs
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
          xi(l, "ref");
          var C = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(L) {
            var O = _.refs;
            O === dw && (O = _.refs = {}), L === null ? delete O[C] : O[C] = L;
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
        var t = Ke(e) || "Component";
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
      function t(F, G) {
        if (e) {
          var H = F.deletions;
          H === null ? (F.deletions = [G], F.flags |= Tt) : H.push(G);
        }
      }
      function a(F, G) {
        if (!e)
          return null;
        for (var H = G; H !== null; )
          t(F, H), H = H.sibling;
        return null;
      }
      function l(F, G) {
        for (var H = /* @__PURE__ */ new Map(), ae = G; ae !== null; )
          ae.key !== null ? H.set(ae.key, ae) : H.set(ae.index, ae), ae = ae.sibling;
        return H;
      }
      function s(F, G) {
        var H = uc(F, G);
        return H.index = 0, H.sibling = null, H;
      }
      function d(F, G, H) {
        if (F.index = H, !e)
          return F.flags |= Zd, G;
        var ae = F.alternate;
        if (ae !== null) {
          var Ce = ae.index;
          return Ce < G ? (F.flags |= It, G) : Ce;
        } else
          return F.flags |= It, G;
      }
      function v(F) {
        return e && F.alternate === null && (F.flags |= It), F;
      }
      function S(F, G, H, ae) {
        if (G === null || G.tag !== P) {
          var Ce = Z1(H, F.mode, ae);
          return Ce.return = F, Ce;
        } else {
          var me = s(G, H);
          return me.return = F, me;
        }
      }
      function _(F, G, H, ae) {
        var Ce = H.type;
        if (Ce === Va)
          return T(F, G, H.props.children, ae, H.key);
        if (G !== null && (G.elementType === Ce || // Keep this check inline so it only runs on the false path:
        fT(G, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ve && Ew(Ce) === G.type)) {
          var me = s(G, H.props);
          return me.ref = rh(F, G, H), me.return = F, me._debugSource = H._source, me._debugOwner = H._owner, me;
        }
        var $e = q1(H, F.mode, ae);
        return $e.ref = rh(F, G, H), $e.return = F, $e;
      }
      function C(F, G, H, ae) {
        if (G === null || G.tag !== A || G.stateNode.containerInfo !== H.containerInfo || G.stateNode.implementation !== H.implementation) {
          var Ce = K1(H, F.mode, ae);
          return Ce.return = F, Ce;
        } else {
          var me = s(G, H.children || []);
          return me.return = F, me;
        }
      }
      function T(F, G, H, ae, Ce) {
        if (G === null || G.tag !== te) {
          var me = qu(H, F.mode, ae, Ce);
          return me.return = F, me;
        } else {
          var $e = s(G, H);
          return $e.return = F, $e;
        }
      }
      function L(F, G, H) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ae = Z1("" + G, F.mode, H);
          return ae.return = F, ae;
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case il: {
              var Ce = q1(G, F.mode, H);
              return Ce.ref = rh(F, null, G), Ce.return = F, Ce;
            }
            case Jr: {
              var me = K1(G, F.mode, H);
              return me.return = F, me;
            }
            case Ve: {
              var $e = G._payload, Ze = G._init;
              return L(F, Ze($e), H);
            }
          }
          if (Un(G) || bi(G)) {
            var zt = qu(G, F.mode, H, null);
            return zt.return = F, zt;
          }
          ly(F, G);
        }
        return typeof G == "function" && oy(F), null;
      }
      function O(F, G, H, ae) {
        var Ce = G !== null ? G.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return Ce !== null ? null : S(F, G, "" + H, ae);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case il:
              return H.key === Ce ? _(F, G, H, ae) : null;
            case Jr:
              return H.key === Ce ? C(F, G, H, ae) : null;
            case Ve: {
              var me = H._payload, $e = H._init;
              return O(F, G, $e(me), ae);
            }
          }
          if (Un(H) || bi(H))
            return Ce !== null ? null : T(F, G, H, ae, null);
          ly(F, H);
        }
        return typeof H == "function" && oy(F), null;
      }
      function V(F, G, H, ae, Ce) {
        if (typeof ae == "string" && ae !== "" || typeof ae == "number") {
          var me = F.get(H) || null;
          return S(G, me, "" + ae, Ce);
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case il: {
              var $e = F.get(ae.key === null ? H : ae.key) || null;
              return _(G, $e, ae, Ce);
            }
            case Jr: {
              var Ze = F.get(ae.key === null ? H : ae.key) || null;
              return C(G, Ze, ae, Ce);
            }
            case Ve:
              var zt = ae._payload, Et = ae._init;
              return V(F, G, H, Et(zt), Ce);
          }
          if (Un(ae) || bi(ae)) {
            var kn = F.get(H) || null;
            return T(G, kn, ae, Ce, null);
          }
          ly(G, ae);
        }
        return typeof ae == "function" && oy(G), null;
      }
      function I(F, G, H) {
        {
          if (typeof F != "object" || F === null)
            return G;
          switch (F.$$typeof) {
            case il:
            case Jr:
              Sw(F, H);
              var ae = F.key;
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
              var Ce = F._payload, me = F._init;
              I(me(Ce), G, H);
              break;
          }
        }
        return G;
      }
      function $(F, G, H, ae) {
        for (var Ce = null, me = 0; me < H.length; me++) {
          var $e = H[me];
          Ce = I($e, Ce, F);
        }
        for (var Ze = null, zt = null, Et = G, kn = 0, _t = 0, En = null; Et !== null && _t < H.length; _t++) {
          Et.index > _t ? (En = Et, Et = null) : En = Et.sibling;
          var Ir = O(F, Et, H[_t], ae);
          if (Ir === null) {
            Et === null && (Et = En);
            break;
          }
          e && Et && Ir.alternate === null && t(F, Et), kn = d(Ir, kn, _t), zt === null ? Ze = Ir : zt.sibling = Ir, zt = Ir, Et = En;
        }
        if (_t === H.length) {
          if (a(F, Et), Sr()) {
            var br = _t;
            qs(F, br);
          }
          return Ze;
        }
        if (Et === null) {
          for (; _t < H.length; _t++) {
            var Ja = L(F, H[_t], ae);
            Ja !== null && (kn = d(Ja, kn, _t), zt === null ? Ze = Ja : zt.sibling = Ja, zt = Ja);
          }
          if (Sr()) {
            var ca = _t;
            qs(F, ca);
          }
          return Ze;
        }
        for (var fa = l(F, Et); _t < H.length; _t++) {
          var Br = V(fa, F, _t, H[_t], ae);
          Br !== null && (e && Br.alternate !== null && fa.delete(Br.key === null ? _t : Br.key), kn = d(Br, kn, _t), zt === null ? Ze = Br : zt.sibling = Br, zt = Br);
        }
        if (e && fa.forEach(function(sd) {
          return t(F, sd);
        }), Sr()) {
          var Fo = _t;
          qs(F, Fo);
        }
        return Ze;
      }
      function we(F, G, H, ae) {
        var Ce = bi(H);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (ES || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ES = !0), H.entries === Ce && (SS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), SS = !0);
          var me = Ce.call(H);
          if (me)
            for (var $e = null, Ze = me.next(); !Ze.done; Ze = me.next()) {
              var zt = Ze.value;
              $e = I(zt, $e, F);
            }
        }
        var Et = Ce.call(H);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kn = null, _t = null, En = G, Ir = 0, br = 0, Ja = null, ca = Et.next(); En !== null && !ca.done; br++, ca = Et.next()) {
          En.index > br ? (Ja = En, En = null) : Ja = En.sibling;
          var fa = O(F, En, ca.value, ae);
          if (fa === null) {
            En === null && (En = Ja);
            break;
          }
          e && En && fa.alternate === null && t(F, En), Ir = d(fa, Ir, br), _t === null ? kn = fa : _t.sibling = fa, _t = fa, En = Ja;
        }
        if (ca.done) {
          if (a(F, En), Sr()) {
            var Br = br;
            qs(F, Br);
          }
          return kn;
        }
        if (En === null) {
          for (; !ca.done; br++, ca = Et.next()) {
            var Fo = L(F, ca.value, ae);
            Fo !== null && (Ir = d(Fo, Ir, br), _t === null ? kn = Fo : _t.sibling = Fo, _t = Fo);
          }
          if (Sr()) {
            var sd = br;
            qs(F, sd);
          }
          return kn;
        }
        for (var Lh = l(F, En); !ca.done; br++, ca = Et.next()) {
          var Pl = V(Lh, F, br, ca.value, ae);
          Pl !== null && (e && Pl.alternate !== null && Lh.delete(Pl.key === null ? br : Pl.key), Ir = d(Pl, Ir, br), _t === null ? kn = Pl : _t.sibling = Pl, _t = Pl);
        }
        if (e && Lh.forEach(function(_N) {
          return t(F, _N);
        }), Sr()) {
          var EN = br;
          qs(F, EN);
        }
        return kn;
      }
      function Ae(F, G, H, ae) {
        if (G !== null && G.tag === P) {
          a(F, G.sibling);
          var Ce = s(G, H);
          return Ce.return = F, Ce;
        }
        a(F, G);
        var me = Z1(H, F.mode, ae);
        return me.return = F, me;
      }
      function Ne(F, G, H, ae) {
        for (var Ce = H.key, me = G; me !== null; ) {
          if (me.key === Ce) {
            var $e = H.type;
            if ($e === Va) {
              if (me.tag === te) {
                a(F, me.sibling);
                var Ze = s(me, H.props.children);
                return Ze.return = F, Ze._debugSource = H._source, Ze._debugOwner = H._owner, Ze;
              }
            } else if (me.elementType === $e || // Keep this check inline so it only runs on the false path:
            fT(me, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === Ve && Ew($e) === me.type) {
              a(F, me.sibling);
              var zt = s(me, H.props);
              return zt.ref = rh(F, me, H), zt.return = F, zt._debugSource = H._source, zt._debugOwner = H._owner, zt;
            }
            a(F, me);
            break;
          } else
            t(F, me);
          me = me.sibling;
        }
        if (H.type === Va) {
          var Et = qu(H.props.children, F.mode, ae, H.key);
          return Et.return = F, Et;
        } else {
          var kn = q1(H, F.mode, ae);
          return kn.ref = rh(F, G, H), kn.return = F, kn;
        }
      }
      function vt(F, G, H, ae) {
        for (var Ce = H.key, me = G; me !== null; ) {
          if (me.key === Ce)
            if (me.tag === A && me.stateNode.containerInfo === H.containerInfo && me.stateNode.implementation === H.implementation) {
              a(F, me.sibling);
              var $e = s(me, H.children || []);
              return $e.return = F, $e;
            } else {
              a(F, me);
              break;
            }
          else
            t(F, me);
          me = me.sibling;
        }
        var Ze = K1(H, F.mode, ae);
        return Ze.return = F, Ze;
      }
      function ct(F, G, H, ae) {
        var Ce = typeof H == "object" && H !== null && H.type === Va && H.key === null;
        if (Ce && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case il:
              return v(Ne(F, G, H, ae));
            case Jr:
              return v(vt(F, G, H, ae));
            case Ve:
              var me = H._payload, $e = H._init;
              return ct(F, G, $e(me), ae);
          }
          if (Un(H))
            return $(F, G, H, ae);
          if (bi(H))
            return we(F, G, H, ae);
          ly(F, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? v(Ae(F, G, "" + H, ae)) : (typeof H == "function" && oy(F), a(F, G));
      }
      return ct;
    }
    var Gf = _w(!0), ww = _w(!1);
    function uk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = uc(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = uc(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function sk(e, t) {
      for (var a = e.child; a !== null; )
        FO(a, t), a = a.sibling;
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
      Pr(uy, t, e), Pr(ih, e, e), Pr(Yu, ah, e);
      var a = CR(t);
      Yr(Yu, e), Pr(Yu, a, e);
    }
    function Qf(e) {
      Yr(Yu, e), Yr(ih, e), Yr(uy, e);
    }
    function xS() {
      var e = sy(Yu.current);
      return e;
    }
    function Tw(e) {
      sy(uy.current);
      var t = sy(Yu.current), a = TR(t, e.type);
      t !== a && (Pr(ih, e, e), Pr(Yu, a, e));
    }
    function bS(e) {
      ih.current === e && (Yr(Yu, e), Yr(ih, e));
    }
    var ck = 0, xw = 1, bw = 1, lh = 2, Gi = zu(ck);
    function RS(e, t) {
      return (e & t) !== 0;
    }
    function qf(e) {
      return e & xw;
    }
    function DS(e, t) {
      return e & xw | t;
    }
    function fk(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      Pr(Gi, t, e);
    }
    function Zf(e) {
      Yr(Gi, e);
    }
    function dk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function cy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || A_(l) || U0(l))
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
    function pk(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var ge = c.ReactCurrentDispatcher, oh = c.ReactCurrentBatchConfig, OS, Kf;
    OS = /* @__PURE__ */ new Set();
    var tc = q, Ut = null, qn = null, Zn = null, fy = !1, uh = !1, sh = 0, hk = 0, vk = 25, Z = null, yi = null, Vu = -1, NS = !1;
    function bt() {
      {
        var e = Z;
        yi === null ? yi = [e] : yi.push(e);
      }
    }
    function de() {
      {
        var e = Z;
        yi !== null && (Vu++, yi[Vu] !== e && mk(e));
      }
    }
    function Xf(e) {
      e != null && !Un(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Z, typeof e);
    }
    function mk(e) {
      {
        var t = Ke(Ut);
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
    function Vr() {
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
          if (uh = !1, sh = 0, S >= vk)
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
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== He ? t.flags &= ~(io | Ur | Zt | Xe) : t.flags &= ~(Zt | Xe), e.lanes = gu(e.lanes, a);
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
      var v = d.dispatch = Ek.bind(null, Ut, d);
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
        var T = v.next, L = d.baseState, O = null, V = null, I = null, $ = T;
        do {
          var we = $.lane;
          if (mo(tc, we)) {
            if (I !== null) {
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
              I = I.next = Ne;
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
            I === null ? (V = I = Ae, O = L) : I = I.next = Ae, Ut.lanes = Je(Ut.lanes, we), Dh(we);
          }
          $ = $.next;
        } while ($ !== null && $ !== T);
        I === null ? O = L : I.next = V, Re(L, l.memoizedState) || mh(), l.memoizedState = L, l.baseState = O, l.baseQueue = I, s.lastRenderedState = L;
      }
      var ct = s.interleaved;
      if (ct !== null) {
        var F = ct;
        do {
          var G = F.lane;
          Ut.lanes = Je(Ut.lanes, G), Dh(G), F = F.next;
        } while (F !== ct);
      } else
        v === null && (s.lanes = q);
      var H = s.dispatch;
      return [l.memoizedState, H];
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
      var l = a.dispatch = _k.bind(null, Ut, a);
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
      return fh(Xe, Ul, e, t);
    }
    function yy(e, t) {
      return vy(Xe, Ul, e, t);
    }
    function IS(e, t) {
      var a = Xe;
      return a |= Lr, (Ut.mode & Ta) !== He && (a |= Ur), fh(a, Qn, e, t);
    }
    function gy(e, t) {
      return vy(Xe, Qn, e, t);
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
      var l = a != null ? a.concat([e]) : null, s = Xe;
      return s |= Lr, (Ut.mode & Ta) !== He && (s |= Ur), fh(s, Qn, zw.bind(null, t, e), l);
    }
    function Sy(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return vy(Xe, Qn, zw.bind(null, t, e), l);
    }
    function yk(e, t) {
    }
    var Ey = yk;
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
          Ut.lanes = Je(Ut.lanes, s), Dh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, mh()), e.memoizedState = a, a;
    }
    function gk(e, t, a) {
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
      var e = py(!1), t = e[0], a = e[1], l = gk.bind(null, a), s = zl();
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
    function Sk() {
      return Pw;
    }
    function qS() {
      var e = zl(), t = Vy(), a = t.identifierPrefix, l;
      if (Sr()) {
        var s = LD();
        l = ":" + a + "R" + s;
        var d = sh++;
        d > 0 && (l += "H" + d.toString(32)), l += ":";
      } else {
        var v = hk++;
        l = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function Cy() {
      var e = gi(), t = e.memoizedState;
      return t;
    }
    function Ek(e, t, a) {
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
        var d = e.alternate;
        if (e.lanes === q && (d === null || d.lanes === q)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var S;
            S = ge.current, ge.current = Qi;
            try {
              var _ = t.lastRenderedState, C = v(_, a);
              if (s.hasEagerState = !0, s.eagerState = C, Re(C, _)) {
                JD(e, t, s, l);
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
          var L = sa();
          er(T, e, l, L), Bw(T, t, l);
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
        var s = Je(l, a);
        t.lanes = s, Su(e, s);
      }
    }
    function Ww(e, t, a) {
      Cl(e, t);
    }
    var Ty = {
      readContext: Pn,
      useCallback: Vr,
      useContext: Vr,
      useEffect: Vr,
      useImperativeHandle: Vr,
      useInsertionEffect: Vr,
      useLayoutEffect: Vr,
      useMemo: Vr,
      useReducer: Vr,
      useRef: Vr,
      useState: Vr,
      useDebugValue: Vr,
      useDeferredValue: Vr,
      useTransition: Vr,
      useMutableSource: Vr,
      useSyncExternalStore: Vr,
      useId: Vr,
      unstable_isNewReconciler: se
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
        unstable_isNewReconciler: se
      }, Gw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", de(), WS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", de(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", de(), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", de(), BS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", de(), VS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", de(), IS(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", de();
          var a = ge.current;
          ge.current = Al;
          try {
            return $S(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", de();
          var l = ge.current;
          ge.current = Al;
          try {
            return zS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", de(), PS(e);
        },
        useState: function(e) {
          Z = "useState", de();
          var t = ge.current;
          ge.current = Al;
          try {
            return py(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", de(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", de(), GS(e);
        },
        useTransition: function() {
          return Z = "useTransition", de(), QS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", de(), FS(e, t, a);
        },
        useId: function() {
          return Z = "useId", de(), qS();
        },
        unstable_isNewReconciler: se
      }, Qw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", de(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", de(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", de(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", de(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", de(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", de(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", de();
          var a = ge.current;
          ge.current = Qi;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", de();
          var l = ge.current;
          ge.current = Qi;
          try {
            return AS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", de(), hy();
        },
        useState: function(e) {
          Z = "useState", de();
          var t = ge.current;
          ge.current = Qi;
          try {
            return HS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", de(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", de(), Aw(e);
        },
        useTransition: function() {
          return Z = "useTransition", de(), Hw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", de(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", de(), Cy();
        },
        unstable_isNewReconciler: se
      }, qw = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", de(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", de(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", de(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", de(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", de(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", de(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", de();
          var a = ge.current;
          ge.current = xy;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", de();
          var l = ge.current;
          ge.current = xy;
          try {
            return jS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", de(), hy();
        },
        useState: function(e) {
          Z = "useState", de();
          var t = ge.current;
          ge.current = xy;
          try {
            return YS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", de(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", de(), jw(e);
        },
        useTransition: function() {
          return Z = "useTransition", de(), Yw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", de(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", de(), Cy();
        },
        unstable_isNewReconciler: se
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
        unstable_isNewReconciler: se
      }, Qi = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), de(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), de(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), de(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), de(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), de(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), de(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), de();
          var a = ge.current;
          ge.current = Qi;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), de();
          var l = ge.current;
          ge.current = Qi;
          try {
            return AS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), de(), hy();
        },
        useState: function(e) {
          Z = "useState", qe(), de();
          var t = ge.current;
          ge.current = Qi;
          try {
            return HS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), de(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", qe(), de(), Aw(e);
        },
        useTransition: function() {
          return Z = "useTransition", qe(), de(), Hw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", qe(), de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", qe(), de(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", qe(), de(), Cy();
        },
        unstable_isNewReconciler: se
      }, xy = {
        readContext: function(e) {
          return ZS(), Pn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", qe(), de(), _y(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", qe(), de(), Pn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", qe(), de(), dh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", qe(), de(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", qe(), de(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", qe(), de(), gy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", qe(), de();
          var a = ge.current;
          ge.current = Qi;
          try {
            return wy(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", qe(), de();
          var l = ge.current;
          ge.current = Qi;
          try {
            return jS(e, t, a);
          } finally {
            ge.current = l;
          }
        },
        useRef: function(e) {
          return Z = "useRef", qe(), de(), hy();
        },
        useState: function(e) {
          Z = "useState", qe(), de();
          var t = ge.current;
          ge.current = Qi;
          try {
            return YS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", qe(), de(), Ey();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", qe(), de(), jw(e);
        },
        useTransition: function() {
          return Z = "useTransition", qe(), de(), Yw();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", qe(), de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", qe(), de(), dy(e, t);
        },
        useId: function() {
          return Z = "useId", qe(), de(), Cy();
        },
        unstable_isNewReconciler: se
      };
    }
    var Iu = u.unstable_now, Zw = 0, by = -1, ph = -1, Ry = -1, KS = !1, Dy = !1;
    function Kw() {
      return KS;
    }
    function wk() {
      Dy = !0;
    }
    function Ck() {
      KS = !1, Dy = !1;
    }
    function Tk() {
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
            case U:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
            case ve:
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
            case U:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case ve:
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
    function xk(e, t) {
      return !0;
    }
    function r1(e, t) {
      try {
        var a = xk(e, t);
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
    var bk = typeof WeakMap == "function" ? WeakMap : Map;
    function tC(e, t, a) {
      var l = No(Ht, a);
      l.tag = rS, l.payload = {
        element: null
      };
      var s = t.value;
      return l.callback = function() {
        gO(s), r1(e, t);
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
        dT(e), r1(e, t), typeof s != "function" && mO(this);
        var _ = t.value, C = t.stack;
        this.componentDidCatch(_, {
          componentStack: C !== null ? C : ""
        }), typeof s != "function" && (Hr(e.lanes, Be) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), l;
    }
    function nC(e, t, a) {
      var l = e.pingCache, s;
      if (l === null ? (l = e.pingCache = new bk(), s = /* @__PURE__ */ new Set(), l.set(t, s)) : (s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s))), !s.has(a)) {
        s.add(a);
        var d = SO.bind(null, e, t, a);
        Wn && kh(e, a), t.then(d, d);
      }
    }
    function Rk(e, t, a, l) {
      var s = e.updateQueue;
      if (s === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        s.add(a);
    }
    function Dk(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === He && (a === b || a === ne || a === ue)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function rC(e) {
      var t = e;
      do {
        if (t.tag === ce && dk(t))
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
          if (e.flags |= Ge, a.flags |= Ts, a.flags &= ~(Fc | ta), a.tag === D) {
            var d = a.alternate;
            if (d === null)
              a.tag = et;
            else {
              var v = No(Ht, Be);
              v.tag = Jm, Hu(a, v, Be);
            }
          }
          a.lanes = Je(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= An, e.lanes = s, e;
    }
    function kk(e, t, a, l, s) {
      if (a.flags |= ta, Wn && kh(e, s), l !== null && typeof l == "object" && typeof l.then == "function") {
        var d = l;
        Dk(a), Sr() && a.mode & lt && Q_();
        var v = rC(t);
        if (v !== null) {
          v.flags &= ~ln, aC(v, t, a, e, s), v.mode & lt && nC(e, d, s), Rk(v, e, d);
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
          (_.flags & An) === ze && (_.flags |= ln), aC(_, t, a, e, s), Z0(nc(l, a));
          return;
        }
      }
      l = nc(l, a), uO(l);
      var C = t;
      do {
        switch (C.tag) {
          case U: {
            var T = l;
            C.flags |= An;
            var L = xn(s);
            C.lanes = Je(C.lanes, L);
            var O = tC(C, T, L);
            lS(C, O);
            return;
          }
          case D:
            var V = l, I = C.type, $ = C.stateNode;
            if ((C.flags & Ge) === ze && (typeof I.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && !rT($))) {
              C.flags |= An;
              var we = xn(s);
              C.lanes = Je(C.lanes, we);
              var Ae = a1(C, V, we);
              lS(C, Ae);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Mk() {
      return null;
    }
    var hh = c.ReactCurrentOwner, qi = !1, i1, vh, l1, o1, u1, rc, s1, My;
    i1 = {}, vh = {}, l1 = {}, o1 = {}, u1 = {}, rc = !1, s1 = {}, My = {};
    function oa(e, t, a, l) {
      e === null ? t.child = ww(t, null, a, l) : t.child = Gf(t, e.child, a, l);
    }
    function Ok(e, t, a, l) {
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
        if (hh.current = t, Wa(!0), _ = Jf(e, t, v, l, S, s), C = ed(), t.mode & en) {
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
        if (AO(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = ud(d), t.tag = ue, t.type = v, d1(t, d), oC(e, t, v, l, s);
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
      var L = e.child, O = g1(e, s);
      if (!O) {
        var V = L.memoizedProps, I = a.compare;
        if (I = I !== null ? I : Le, I(V, l) && e.ref === t.ref)
          return Lo(e, t, s);
      }
      t.flags |= vl;
      var $ = uc(L, l);
      return $.ref = t.ref, $.return = t, t.child = $, $;
    }
    function oC(e, t, a, l, s) {
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
      if (l.mode === "hidden" || _e)
        if ((t.mode & lt) === He) {
          var v = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Iy(t, a);
        } else if (Hr(a, Fr)) {
          var L = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var O = d !== null ? d.baseLanes : a;
          Iy(t, O);
        } else {
          var S = null, _;
          if (d !== null) {
            var C = d.baseLanes;
            _ = Je(C, a);
          } else
            _ = a;
          t.lanes = t.childLanes = Fr;
          var T = {
            baseLanes: _,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Iy(t, _), null;
        }
      else {
        var V;
        d !== null ? (V = Je(d.baseLanes, a), t.memoizedState = null) : V = a, Iy(t, V);
      }
      return oa(e, t, s, a), t.child;
    }
    function Nk(e, t, a) {
      var l = t.pendingProps;
      return oa(e, t, l, a), t.child;
    }
    function Lk(e, t, a) {
      var l = t.pendingProps.children;
      return oa(e, t, l, a), t.child;
    }
    function Uk(e, t, a) {
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
    function sC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nr, t.flags |= Kd);
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
        if (hh.current = t, Wa(!0), _ = Jf(e, t, a, l, v, s), C = ed(), t.mode & en) {
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
        switch (KO(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, S = new v(t.memoizedProps, d.context), _ = S.state;
            d.updater.enqueueSetState(d, _, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= An;
            var C = new Error("Simulated error coming from DevTools"), T = xn(s);
            t.lanes = Je(t.lanes, T);
            var L = a1(t, nc(C, t), T);
            lS(t, L);
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
      var I = t.stateNode, $;
      I === null ? (Ny(e, t), yw(t, a, l), gS(t, a, l, s), $ = !0) : e === null ? $ = lk(t, a, l, s) : $ = ok(e, t, a, l, s);
      var we = f1(e, t, a, $, V, s);
      {
        var Ae = t.stateNode;
        $ && Ae.props !== l && (rc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), rc = !0);
      }
      return we;
    }
    function f1(e, t, a, l, s, d) {
      sC(e, t);
      var v = (t.flags & Ge) !== ze;
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
        lo();
      }
      return t.flags |= vl, e !== null && v ? Ok(e, t, _, d) : oa(e, t, _, d), t.memoizedState = S.state, s && B_(t, a, !0), t.child;
    }
    function fC(e) {
      var t = e.stateNode;
      t.pendingContext ? V_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && V_(e, t.context, !1), TS(e, t.containerInfo);
    }
    function zk(e, t, a) {
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
        if (C.baseState = _, t.memoizedState = _, t.flags & ln) {
          var T = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return dC(e, t, S, a, T);
        } else if (S !== d) {
          var L = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return dC(e, t, S, a, L);
        } else {
          HD(t);
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
      return Bf(), Z0(s), t.flags |= ln, oa(e, t, a, l), t.child;
    }
    function Ak(e, t, a) {
      Tw(t), e === null && q0(t);
      var l = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = s.children, S = M0(l, s);
      return S ? v = null : d !== null && M0(l, d) && (t.flags |= xt), sC(e, t), oa(e, t, v, a), t.child;
    }
    function jk(e, t) {
      return e === null && q0(t), null;
    }
    function Fk(e, t, a, l) {
      Ny(e, t);
      var s = t.pendingProps, d = a, v = d._payload, S = d._init, _ = S(v);
      t.type = _;
      var C = t.tag = jO(_), T = $i(_, s), L;
      switch (C) {
        case b:
          return d1(t, _), t.type = _ = ud(_), L = c1(null, t, _, T, l), L;
        case D:
          return t.type = _ = V1(_), L = cC(null, t, _, T, l), L;
        case ne:
          return t.type = _ = I1(_), L = iC(null, t, _, T, l), L;
        case ee: {
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
          return L = lC(
            null,
            t,
            _,
            $i(_.type, T),
            // The inner type can have defaults too
            l
          ), L;
        }
      }
      var V = "";
      throw _ !== null && typeof _ == "object" && _.$$typeof === Ve && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + _ + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function Hk(e, t, a, l, s) {
      Ny(e, t), t.tag = D;
      var d;
      return Ll(a) ? (d = !0, Vm(t)) : d = !1, $f(t, s), yw(t, a, l), gS(t, a, l, s), f1(null, t, a, !0, d, s);
    }
    function Yk(e, t, a, l) {
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
        t.mode & en && Wi.recordLegacyContextWarning(t, null), Wa(!0), hh.current = t, S = Jf(null, t, a, s, d, l), _ = ed(), Wa(!1);
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
          var L = jt(a) || "Unknown";
          vh[L] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), vh[L] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Ll(a) ? (O = !0, Vm(t)) : O = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, iS(t), mw(t, S), gS(t, a, s, l), f1(null, t, a, !0, O, l);
      } else {
        if (t.tag = b, t.mode & en) {
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
        cachePool: Mk(),
        transitions: null
      };
    }
    function Pk(e, t) {
      var a = null;
      return {
        baseLanes: Je(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Vk(e, t, a, l) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return RS(e, lh);
    }
    function Ik(e, t) {
      return gu(e.childLanes, t);
    }
    function pC(e, t, a) {
      var l = t.pendingProps;
      XO(t) && (t.flags |= Ge);
      var s = Gi.current, d = !1, v = (t.flags & Ge) !== ze;
      if (v || Vk(s, e) ? (d = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (s = fk(s, bw)), s = qf(s), Pu(t, s), e === null) {
        q0(t);
        var S = t.memoizedState;
        if (S !== null) {
          var _ = S.dehydrated;
          if (_ !== null)
            return Qk(t, _);
        }
        var C = l.children, T = l.fallback;
        if (d) {
          var L = Bk(t, C, T, a), O = t.child;
          return O.memoizedState = h1(a), t.memoizedState = p1, L;
        } else
          return v1(t, C);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return qk(e, t, v, l, I, V, a);
        }
        if (d) {
          var $ = l.fallback, we = l.children, Ae = $k(e, t, we, $, a), Ne = t.child, vt = e.child.memoizedState;
          return Ne.memoizedState = vt === null ? h1(a) : Pk(vt, a), Ne.childLanes = Ik(e, a), t.memoizedState = p1, Ae;
        } else {
          var ct = l.children, F = Wk(e, t, ct, a);
          return t.memoizedState = null, F;
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
    function Bk(e, t, a, l) {
      var s = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, S, _;
      return (s & lt) === He && d !== null ? (S = d, S.childLanes = q, S.pendingProps = v, e.mode & Ie && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), _ = qu(a, s, l, null)) : (S = m1(v, s), _ = qu(a, s, l, null)), S.return = e, _.return = e, S.sibling = _, e.child = S, _;
    }
    function m1(e, t, a) {
      return hT(e, t, q, null);
    }
    function hC(e, t) {
      return uc(e, t);
    }
    function Wk(e, t, a, l) {
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
    function $k(e, t, a, l, s) {
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
        C = hC(v, _), C.subtreeFlags = v.subtreeFlags & Bn;
      var L;
      return S !== null ? L = uc(S, l) : (L = qu(l, d, s, null), L.flags |= It), L.return = t, C.return = t, C.sibling = L, t.child = C, L;
    }
    function Oy(e, t, a, l) {
      l !== null && Z0(l), Gf(t, e.child, null, a);
      var s = t.pendingProps, d = s.children, v = v1(t, d);
      return v.flags |= It, t.memoizedState = null, v;
    }
    function Gk(e, t, a, l, s) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, S = m1(v, d), _ = qu(l, d, s, null);
      return _.flags |= It, S.return = t, _.return = t, S.sibling = _, t.child = S, (t.mode & lt) !== He && Gf(t, e.child, null, s), _;
    }
    function Qk(e, t, a) {
      return (e.mode & lt) === He ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : U0(t) ? e.lanes = so : e.lanes = Fr, null;
    }
    function qk(e, t, a, l, s, d, v) {
      if (a)
        if (t.flags & ln) {
          t.flags &= ~ln;
          var F = n1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Oy(e, t, v, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var G = l.children, H = l.fallback, ae = Gk(e, t, G, H, v), Ce = t.child;
          return Ce.memoizedState = h1(v), t.memoizedState = p1, ae;
        }
      else {
        if (jD(), (t.mode & lt) === He)
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
            var T = eD(s);
            S = T.digest, _ = T.message, C = T.stack;
          }
          var L;
          _ ? L = new Error(_) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = n1(L, S, C);
          return Oy(e, t, v, O);
        }
        var V = Hr(v, e.childLanes);
        if (qi || V) {
          var I = Vy();
          if (I !== null) {
            var $ = t0(I, v);
            if ($ !== pt && $ !== d.retryLane) {
              d.retryLane = $;
              var we = Ht;
              Oa(e, $), er(I, e, $, we);
            }
          }
          j1();
          var Ae = n1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Oy(e, t, v, Ae);
        } else if (A_(s)) {
          t.flags |= Ge, t.child = e.child;
          var Ne = EO.bind(null, e);
          return tD(s, Ne), null;
        } else {
          YD(t, s, d.treeContext);
          var vt = l.children, ct = v1(t, vt);
          return ct.flags |= _a, ct;
        }
      }
    }
    function vC(e, t, a) {
      e.lanes = Je(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = Je(l.lanes, t)), tS(e.return, t, a);
    }
    function Zk(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === ce) {
          var s = l.memoizedState;
          s !== null && vC(l, a, e);
        } else if (l.tag === dt)
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
    function Kk(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && cy(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Xk(e) {
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
    function Jk(e, t) {
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
    function eM(e, t) {
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
      Xk(s), Jk(d, s), eM(v, s), oa(e, t, v, a);
      var S = Gi.current, _ = RS(S, lh);
      if (_)
        S = DS(S, lh), t.flags |= Ge;
      else {
        var C = e !== null && (e.flags & Ge) !== ze;
        C && Zk(t, t.child, a), S = qf(S);
      }
      if (Pu(t, S), (t.mode & lt) === He)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var T = Kk(t.child), L;
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
            var O = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && cy(I) === null) {
                t.child = V;
                break;
              }
              var $ = V.sibling;
              V.sibling = O, O = V, V = $;
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
    function tM(e, t, a) {
      TS(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Gf(t, null, l, a) : oa(e, t, l, a), t.child;
    }
    var gC = !1;
    function nM(e, t, a) {
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
          ZD(t, s, a);
      }
      var T = d.children;
      return oa(e, t, T, a), t.child;
    }
    var SC = !1;
    function rM(e, t, a) {
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
      return e !== null && (t.dependencies = e.dependencies), eC(), Dh(t.lanes), Hr(a, t.childLanes) ? (uk(e, t), t.child) : null;
    }
    function aM(e, t, a) {
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
      return !!Hr(a, t);
    }
    function iM(e, t, a) {
      switch (t.tag) {
        case U:
          fC(t), t.stateNode, Bf();
          break;
        case Q:
          Tw(t);
          break;
        case D: {
          var l = t.type;
          Ll(l) && Vm(t);
          break;
        }
        case A:
          TS(t, t.stateNode.containerInfo);
          break;
        case le: {
          var s = t.memoizedProps.value, d = t.type._context;
          iw(t, d, s);
          break;
        }
        case ve:
          {
            var v = Hr(a, t.childLanes);
            v && (t.flags |= Xe);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case ce: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return Pu(t, qf(Gi.current)), t.flags |= Ge, null;
            var C = t.child, T = C.childLanes;
            if (Hr(a, T))
              return pC(e, t, a);
            Pu(t, qf(Gi.current));
            var L = Lo(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            Pu(t, qf(Gi.current));
          break;
        }
        case dt: {
          var O = (e.flags & Ge) !== ze, V = Hr(a, t.childLanes);
          if (O) {
            if (V)
              return yC(e, t, a);
            t.flags |= Ge;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Pu(t, Gi.current), V)
            break;
          return null;
        }
        case Pe:
        case at:
          return t.lanes = q, uC(e, t, a);
      }
      return Lo(e, t, a);
    }
    function EC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return aM(e, t, Q1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, s = t.pendingProps;
        if (l !== s || Ym() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          qi = !0;
        else {
          var d = g1(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ge) === ze)
            return qi = !1, iM(e, t, a);
          (e.flags & Ts) !== ze ? qi = !0 : qi = !1;
        }
      } else if (qi = !1, Sr() && OD(t)) {
        var v = t.index, S = ND();
        G_(t, S, v);
      }
      switch (t.lanes = q, t.tag) {
        case z:
          return Yk(e, t, t.type, a);
        case We: {
          var _ = t.elementType;
          return Fk(e, t, _, a);
        }
        case b: {
          var C = t.type, T = t.pendingProps, L = t.elementType === C ? T : $i(C, T);
          return c1(e, t, C, L, a);
        }
        case D: {
          var O = t.type, V = t.pendingProps, I = t.elementType === O ? V : $i(O, V);
          return cC(e, t, O, I, a);
        }
        case U:
          return zk(e, t, a);
        case Q:
          return Ak(e, t, a);
        case P:
          return jk(e, t);
        case ce:
          return pC(e, t, a);
        case A:
          return tM(e, t, a);
        case ne: {
          var $ = t.type, we = t.pendingProps, Ae = t.elementType === $ ? we : $i($, we);
          return iC(e, t, $, Ae, a);
        }
        case te:
          return Nk(e, t, a);
        case Ee:
          return Lk(e, t, a);
        case ve:
          return Uk(e, t, a);
        case le:
          return nM(e, t, a);
        case Me:
          return rM(e, t, a);
        case ee: {
          var Ne = t.type, vt = t.pendingProps, ct = $i(Ne, vt);
          if (t.type !== t.elementType) {
            var F = Ne.propTypes;
            F && Ii(
              F,
              ct,
              // Resolved for outer only
              "prop",
              jt(Ne)
            );
          }
          return ct = $i(Ne.type, ct), lC(e, t, Ne, ct, a);
        }
        case ue:
          return oC(e, t, t.type, t.pendingProps, a);
        case et: {
          var G = t.type, H = t.pendingProps, ae = t.elementType === G ? H : $i(G, H);
          return Hk(e, t, G, ae, a);
        }
        case dt:
          return yC(e, t, a);
        case Nt:
          break;
        case Pe:
          return uC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function td(e) {
      e.flags |= Xe;
    }
    function _C(e) {
      e.flags |= Nr, e.flags |= Kd;
    }
    var wC, S1, CC, TC;
    wC = function(e, t, a, l) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === Q || s.tag === P)
          DR(e, s.stateNode);
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
    }, CC = function(e, t, a, l, s) {
      var d = e.memoizedProps;
      if (d !== l) {
        var v = t.stateNode, S = xS(), _ = MR(v, a, d, l, s, S);
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
    function lM(e, t, a) {
      if (WD() && (t.mode & lt) !== He && (t.flags & Ge) === ze)
        return ew(t), Bf(), t.flags |= ln | ta | An, !1;
      var l = Gm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ID(t), _r(t), (t.mode & Ie) !== He) {
            var s = a !== null;
            if (s) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Bf(), (t.flags & Ge) === ze && (t.memoizedState = null), t.flags |= Xe, _r(t), (t.mode & Ie) !== He) {
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
        case We:
        case ue:
        case b:
        case ne:
        case te:
        case Ee:
        case ve:
        case Me:
        case ee:
          return _r(t), null;
        case D: {
          var s = t.type;
          return Ll(s) && Pm(t), _r(t), null;
        }
        case U: {
          var d = t.stateNode;
          if (Qf(t), P0(t), MS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = Gm(t);
            if (v)
              td(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ln) !== ze) && (t.flags |= Ea, tw());
            }
          }
          return S1(e, t), _r(t), null;
        }
        case Q: {
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
            var T = xS(), L = Gm(t);
            if (L)
              PD(t, _, T) && td(t);
            else {
              var O = RR(C, l, _, T, t);
              wC(O, t, !1, !1), t.stateNode = O, kR(O, C, l, _) && td(t);
            }
            t.ref !== null && _C(t);
          }
          return _r(t), null;
        }
        case P: {
          var V = l;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            TC(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var $ = Cw(), we = xS(), Ae = Gm(t);
            Ae ? VD(t) && td(t) : t.stateNode = OR(V, $, we, t);
          }
          return _r(t), null;
        }
        case ce: {
          Zf(t);
          var Ne = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = lM(e, t, Ne);
            if (!vt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & Ge) !== ze)
            return t.lanes = a, (t.mode & Ie) !== He && t1(t), t;
          var ct = Ne !== null, F = e !== null && e.memoizedState !== null;
          if (ct !== F && ct) {
            var G = t.child;
            if (G.flags |= ml, (t.mode & lt) !== He) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !gt);
              H || RS(Gi.current, bw) ? oO() : j1();
            }
          }
          var ae = t.updateQueue;
          if (ae !== null && (t.flags |= Xe), _r(t), (t.mode & Ie) !== He && ct) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case A:
          return Qf(t), S1(e, t), e === null && TD(t.stateNode.containerInfo), _r(t), null;
        case le:
          var me = t.type._context;
          return eS(me, t), _r(t), null;
        case et: {
          var $e = t.type;
          return Ll($e) && Pm(t), _r(t), null;
        }
        case dt: {
          Zf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return _r(t), null;
          var zt = (t.flags & Ge) !== ze, Et = Ze.rendering;
          if (Et === null)
            if (zt)
              yh(Ze, !1);
            else {
              var kn = sO() && (e === null || (e.flags & Ge) === ze);
              if (!kn)
                for (var _t = t.child; _t !== null; ) {
                  var En = cy(_t);
                  if (En !== null) {
                    zt = !0, t.flags |= Ge, yh(Ze, !1);
                    var Ir = En.updateQueue;
                    return Ir !== null && (t.updateQueue = Ir, t.flags |= Xe), t.subtreeFlags = ze, sk(t, a), Pu(t, DS(Gi.current, lh)), t.child;
                  }
                  _t = _t.sibling;
                }
              Ze.tail !== null && Jt() > $C() && (t.flags |= Ge, zt = !0, yh(Ze, !1), t.lanes = cp);
            }
          else {
            if (!zt) {
              var br = cy(Et);
              if (br !== null) {
                t.flags |= Ge, zt = !0;
                var Ja = br.updateQueue;
                if (Ja !== null && (t.updateQueue = Ja, t.flags |= Xe), yh(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Et.alternate && !Sr())
                  return _r(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Jt() * 2 - Ze.renderingStartTime > $C() && a !== Fr && (t.flags |= Ge, zt = !0, yh(Ze, !1), t.lanes = cp);
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
            var Br = Gi.current;
            return zt ? Br = DS(Br, lh) : Br = qf(Br), Pu(t, Br), fa;
          }
          return _r(t), null;
        }
        case Nt:
          break;
        case Pe:
        case at: {
          A1(t);
          var Fo = t.memoizedState, sd = Fo !== null;
          if (e !== null) {
            var Lh = e.memoizedState, Pl = Lh !== null;
            Pl !== sd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_e && (t.flags |= ml);
          }
          return !sd || (t.mode & lt) === He ? _r(t) : Hr(Yl, Fr) && (_r(t), t.subtreeFlags & (It | Xe) && (t.flags |= ml)), null;
        }
        case hn:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function oM(e, t, a) {
      switch (W0(t), t.tag) {
        case D: {
          var l = t.type;
          Ll(l) && Pm(t);
          var s = t.flags;
          return s & An ? (t.flags = s & ~An | Ge, (t.mode & Ie) !== He && t1(t), t) : null;
        }
        case U: {
          t.stateNode, Qf(t), P0(t), MS();
          var d = t.flags;
          return (d & An) !== ze && (d & Ge) === ze ? (t.flags = d & ~An | Ge, t) : null;
        }
        case Q:
          return bS(t), null;
        case ce: {
          Zf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Bf();
          }
          var S = t.flags;
          return S & An ? (t.flags = S & ~An | Ge, (t.mode & Ie) !== He && t1(t), t) : null;
        }
        case dt:
          return Zf(t), null;
        case A:
          return Qf(t), null;
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
    function bC(e, t, a) {
      switch (W0(t), t.tag) {
        case D: {
          var l = t.type.childContextTypes;
          l != null && Pm(t);
          break;
        }
        case U: {
          t.stateNode, Qf(t), P0(t), MS();
          break;
        }
        case Q: {
          bS(t);
          break;
        }
        case A:
          Qf(t);
          break;
        case ce:
          Zf(t);
          break;
        case dt:
          Zf(t);
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
    var RC = null;
    RC = /* @__PURE__ */ new Set();
    var Ly = !1, wr = !1, uM = typeof WeakSet == "function" ? WeakSet : Set, De = null, nd = null, rd = null;
    function sM(e) {
      ao(null, function() {
        throw e;
      }), qd();
    }
    var cM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
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
        cM(e, a);
      } catch (l) {
        Gt(e, t, l);
      }
    }
    function fM(e, t, a) {
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
            if (wn && da && e.mode & Ie)
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
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
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
    function dM(e, t) {
      xR(e.containerInfo), De = t, pM();
      var a = MC;
      return MC = !1, a;
    }
    function pM() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & cu) !== ze && t !== null ? (t.return = e, De = t) : hM();
      }
    }
    function hM() {
      for (; De !== null; ) {
        var e = De;
        Lt(e);
        try {
          vM(e);
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
    function vM(e) {
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
              e.type === e.elementType && !rc && (d.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), d.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? l : $i(e.type, l), s);
              {
                var S = RC;
                v === void 0 && !S.has(e.type) && (S.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var _ = e.stateNode;
              ZR(_.containerInfo);
            }
            break;
          }
          case Q:
          case P:
          case A:
          case et:
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
    function mM(e, t) {
      if ((t.flags & Xe) !== ze)
        switch (t.tag) {
          case ve: {
            var a = t.stateNode.passiveEffectDuration, l = t.memoizedProps, s = l.id, d = l.onPostCommit, v = Xw(), S = t.alternate === null ? "mount" : "update";
            Kw() && (S = "nested-update"), typeof d == "function" && d(s, S, a, v);
            var _ = t.return;
            e:
              for (; _ !== null; ) {
                switch (_.tag) {
                  case U:
                    var C = _.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case ve:
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
    function yM(e, t, a, l) {
      if ((a.flags & ur) !== ze)
        switch (a.tag) {
          case b:
          case ne:
          case ue: {
            if (!wr)
              if (a.mode & Ie)
                try {
                  Fl(), Bu(Qn | Gn, a);
                } finally {
                  jl(a);
                }
              else
                Bu(Qn | Gn, a);
            break;
          }
          case D: {
            var s = a.stateNode;
            if (a.flags & Xe && !wr)
              if (t === null)
                if (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Ie)
                  try {
                    Fl(), s.componentDidMount();
                  } finally {
                    jl(a);
                  }
                else
                  s.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : $i(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Ie)
                  try {
                    Fl(), s.componentDidUpdate(d, v, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    jl(a);
                  }
                else
                  s.componentDidUpdate(d, v, s.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !rc && (s.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), s.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), fw(a, S, s));
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
              fw(a, _, C);
            }
            break;
          }
          case Q: {
            var T = a.stateNode;
            if (t === null && a.flags & Xe) {
              var L = a.type, O = a.memoizedProps;
              AR(T, L, O);
            }
            break;
          }
          case P:
            break;
          case A:
            break;
          case ve: {
            {
              var V = a.memoizedProps, I = V.onCommit, $ = V.onRender, we = a.stateNode.effectDuration, Ae = Xw(), Ne = t === null ? "mount" : "update";
              Kw() && (Ne = "nested-update"), typeof $ == "function" && $(a.memoizedProps.id, Ne, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof I == "function" && I(a.memoizedProps.id, Ne, we, Ae), hO(a);
                var vt = a.return;
                e:
                  for (; vt !== null; ) {
                    switch (vt.tag) {
                      case U:
                        var ct = vt.stateNode;
                        ct.effectDuration += we;
                        break e;
                      case ve:
                        var F = vt.stateNode;
                        F.effectDuration += we;
                        break e;
                    }
                    vt = vt.return;
                  }
              }
            }
            break;
          }
          case ce: {
            xM(e, a);
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
      wr || a.flags & Nr && OC(a);
    }
    function gM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          if (e.mode & Ie)
            try {
              Fl(), DC(e, e.return);
            } finally {
              jl(e);
            }
          else
            DC(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && fM(e, e.return, t), kC(e, e.return);
          break;
        }
        case Q: {
          kC(e, e.return);
          break;
        }
      }
    }
    function SM(e, t) {
      for (var a = null, l = e; ; ) {
        if (l.tag === Q) {
          if (a === null) {
            a = l;
            try {
              var s = l.stateNode;
              t ? $R(s) : QR(l.stateNode, l.memoizedProps);
            } catch (v) {
              Gt(e, e.return, v);
            }
          }
        } else if (l.tag === P) {
          if (a === null)
            try {
              var d = l.stateNode;
              t ? GR(d) : qR(d, l.memoizedProps);
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
    function OC(e) {
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
              Fl(), s = t(l);
            } finally {
              jl(e);
            }
          else
            s = t(l);
          typeof s == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = l;
      }
    }
    function EM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function NC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, NC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && RD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function _M(e) {
      for (var t = e.return; t !== null; ) {
        if (LC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function LC(e) {
      return e.tag === Q || e.tag === U || e.tag === A;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== P && t.tag !== nt; ) {
            if (t.flags & It || t.child === null || t.tag === A)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & It))
            return t.stateNode;
        }
    }
    function wM(e) {
      var t = _M(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & xt && (z_(a), t.flags &= ~xt);
          var l = UC(e);
          w1(e, l, a);
          break;
        }
        case U:
        case A: {
          var s = t.stateNode.containerInfo, d = UC(e);
          _1(e, d, s);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _1(e, t, a) {
      var l = e.tag, s = l === Q || l === P;
      if (s) {
        var d = e.stateNode;
        t ? VR(a, d, t) : YR(a, d);
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
      var l = e.tag, s = l === Q || l === P;
      if (s) {
        var d = e.stateNode;
        t ? PR(a, d, t) : HR(a, d);
      } else if (l !== A) {
        var v = e.child;
        if (v !== null) {
          w1(v, t, a);
          for (var S = v.sibling; S !== null; )
            w1(S, t, a), S = S.sibling;
        }
      }
    }
    var Cr = null, Ki = !1;
    function CM(e, t, a) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case Q: {
                Cr = l.stateNode, Ki = !1;
                break e;
              }
              case U: {
                Cr = l.stateNode.containerInfo, Ki = !0;
                break e;
              }
              case A: {
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
      EM(a);
    }
    function Wu(e, t, a) {
      for (var l = a.child; l !== null; )
        zC(e, t, l), l = l.sibling;
    }
    function zC(e, t, a) {
      switch (ip(a), a.tag) {
        case Q:
          wr || ad(a, t);
        case P: {
          {
            var l = Cr, s = Ki;
            Cr = null, Wu(e, t, a), Cr = l, Ki = s, Cr !== null && (Ki ? BR(Cr, a.stateNode) : IR(Cr, a.stateNode));
          }
          return;
        }
        case nt: {
          Cr !== null && (Ki ? WR(Cr, a.stateNode) : L0(Cr, a.stateNode));
          return;
        }
        case A: {
          {
            var d = Cr, v = Ki;
            Cr = a.stateNode.containerInfo, Ki = !0, Wu(e, t, a), Cr = d, Ki = v;
          }
          return;
        }
        case b:
        case ne:
        case ee:
        case ue: {
          if (!wr) {
            var S = a.updateQueue;
            if (S !== null) {
              var _ = S.lastEffect;
              if (_ !== null) {
                var C = _.next, T = C;
                do {
                  var L = T, O = L.destroy, V = L.tag;
                  O !== void 0 && ((V & Ul) !== Na ? Uy(a, t, O) : (V & Qn) !== Na && (Gc(a), a.mode & Ie ? (Fl(), Uy(a, t, O), jl(a)) : Uy(a, t, O), fu())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Wu(e, t, a);
          return;
        }
        case D: {
          if (!wr) {
            ad(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && E1(a, t, I);
          }
          Wu(e, t, a);
          return;
        }
        case Nt: {
          Wu(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var $ = wr;
            wr = $ || a.memoizedState !== null, Wu(e, t, a), wr = $;
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
    function TM(e) {
      e.memoizedState;
    }
    function xM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var s = l.memoizedState;
          if (s !== null) {
            var d = s.dehydrated;
            d !== null && cD(d);
          }
        }
      }
    }
    function AC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new uM()), t.forEach(function(l) {
          var s = _O.bind(null, e, l);
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
    function bM(e, t, a) {
      nd = a, rd = e, Lt(t), jC(t, e), Lt(t), nd = null, rd = null;
    }
    function Xi(e, t, a) {
      var l = t.deletions;
      if (l !== null)
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          try {
            CM(e, t, d);
          } catch (_) {
            Gt(d, t, _);
          }
        }
      var v = Ng();
      if (t.subtreeFlags & zr)
        for (var S = t.child; S !== null; )
          Lt(S), jC(S, e), S = S.sibling;
      Lt(v);
    }
    function jC(e, t, a) {
      var l = e.alternate, s = e.flags;
      switch (e.tag) {
        case b:
        case ne:
        case ee:
        case ue: {
          if (Xi(t, e), Hl(e), s & Xe) {
            try {
              Zi(Ul | Gn, e, e.return), Bu(Ul | Gn, e);
            } catch ($e) {
              Gt(e, e.return, $e);
            }
            if (e.mode & Ie) {
              try {
                Fl(), Zi(Qn | Gn, e, e.return);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
              jl(e);
            } else
              try {
                Zi(Qn | Gn, e, e.return);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
          }
          return;
        }
        case D: {
          Xi(t, e), Hl(e), s & Nr && l !== null && ad(l, l.return);
          return;
        }
        case Q: {
          Xi(t, e), Hl(e), s & Nr && l !== null && ad(l, l.return);
          {
            if (e.flags & xt) {
              var d = e.stateNode;
              try {
                z_(d);
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
                    jR(v, T, C, _, S, e);
                  } catch ($e) {
                    Gt(e, e.return, $e);
                  }
              }
            }
          }
          return;
        }
        case P: {
          if (Xi(t, e), Hl(e), s & Xe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, O = e.memoizedProps, V = l !== null ? l.memoizedProps : O;
            try {
              FR(L, V, O);
            } catch ($e) {
              Gt(e, e.return, $e);
            }
          }
          return;
        }
        case U: {
          if (Xi(t, e), Hl(e), s & Xe && l !== null) {
            var I = l.memoizedState;
            if (I.isDehydrated)
              try {
                sD(t.containerInfo);
              } catch ($e) {
                Gt(e, e.return, $e);
              }
          }
          return;
        }
        case A: {
          Xi(t, e), Hl(e);
          return;
        }
        case ce: {
          Xi(t, e), Hl(e);
          var $ = e.child;
          if ($.flags & ml) {
            var we = $.stateNode, Ae = $.memoizedState, Ne = Ae !== null;
            if (we.isHidden = Ne, Ne) {
              var vt = $.alternate !== null && $.alternate.memoizedState !== null;
              vt || lO();
            }
          }
          if (s & Xe) {
            try {
              TM(e);
            } catch ($e) {
              Gt(e, e.return, $e);
            }
            AC(e);
          }
          return;
        }
        case Pe: {
          var ct = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var F = wr;
            wr = F || ct, Xi(t, e), wr = F;
          } else
            Xi(t, e);
          if (Hl(e), s & ml) {
            var G = e.stateNode, H = e.memoizedState, ae = H !== null, Ce = e;
            if (G.isHidden = ae, ae && !ct && (Ce.mode & lt) !== He) {
              De = Ce;
              for (var me = Ce.child; me !== null; )
                De = me, DM(me), me = me.sibling;
            }
            SM(Ce, ae);
          }
          return;
        }
        case dt: {
          Xi(t, e), Hl(e), s & Xe && AC(e);
          return;
        }
        case Nt:
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
          wM(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= ~It;
      }
      t & _a && (e.flags &= ~_a);
    }
    function RM(e, t, a) {
      nd = a, rd = t, De = e, FC(e, t, a), nd = null, rd = null;
    }
    function FC(e, t, a) {
      for (var l = (e.mode & lt) !== He; De !== null; ) {
        var s = De, d = s.child;
        if (s.tag === Pe && l) {
          var v = s.memoizedState !== null, S = v || Ly;
          if (S) {
            C1(e, t, a);
            continue;
          } else {
            var _ = s.alternate, C = _ !== null && _.memoizedState !== null, T = C || wr, L = Ly, O = wr;
            Ly = S, wr = T, wr && !O && (De = s, kM(s));
            for (var V = d; V !== null; )
              De = V, FC(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            De = s, Ly = L, wr = O, C1(e, t, a);
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
            yM(t, s, l, a);
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
    function DM(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case b:
          case ne:
          case ee:
          case ue: {
            if (t.mode & Ie)
              try {
                Fl(), Zi(Qn, t, t.return);
              } finally {
                jl(t);
              }
            else
              Zi(Qn, t, t.return);
            break;
          }
          case D: {
            ad(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && E1(t, t.return, l);
            break;
          }
          case Q: {
            ad(t, t.return);
            break;
          }
          case Pe: {
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
    function kM(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Pe) {
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
          gM(t);
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
    function MM(e, t, a, l) {
      De = t, OM(t, e, a, l);
    }
    function OM(e, t, a, l) {
      for (; De !== null; ) {
        var s = De, d = s.child;
        (s.subtreeFlags & wa) !== ze && d !== null ? (d.return = s, De = d) : NM(e, t, a, l);
      }
    }
    function NM(e, t, a, l) {
      for (; De !== null; ) {
        var s = De;
        if ((s.flags & Zt) !== ze) {
          Lt(s);
          try {
            LM(t, s, a, l);
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
    function LM(e, t, a, l) {
      switch (t.tag) {
        case b:
        case ne:
        case ue: {
          if (t.mode & Ie) {
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
    function UM(e) {
      De = e, zM();
    }
    function zM() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Tt) !== ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var l = 0; l < a.length; l++) {
              var s = a[l];
              De = s, FM(s, e);
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
        (e.subtreeFlags & wa) !== ze && t !== null ? (t.return = e, De = t) : AM();
      }
    }
    function AM() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Zt) !== ze && (Lt(e), jM(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function jM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          e.mode & Ie ? (e1(), Zi(Er | Gn, e, e.return), JS(e)) : Zi(Er | Gn, e, e.return);
          break;
        }
      }
    }
    function FM(e, t) {
      for (; De !== null; ) {
        var a = De;
        Lt(a), YM(a, t), Cn();
        var l = a.child;
        l !== null ? (l.return = a, De = l) : HM(e);
      }
    }
    function HM(e) {
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
    function YM(e, t) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          e.mode & Ie ? (e1(), Zi(Er, e, t), JS(e)) : Zi(Er, e, t);
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
            Bu(Qn | Gn, e);
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
    function VM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          try {
            Bu(Er | Gn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function IM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue: {
          try {
            Zi(Qn | Gn, e, e.return);
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
    function BM(e) {
      switch (e.tag) {
        case b:
        case ne:
        case ue:
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
    var WM = [];
    function $M() {
      WM.forEach(function(e) {
        return e();
      });
    }
    var GM = c.ReactCurrentActQueue;
    function QM(e) {
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
        return !e && GM.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var qM = Math.ceil, T1 = c.ReactCurrentDispatcher, x1 = c.ReactCurrentOwner, Tr = c.ReactCurrentBatchConfig, Ji = c.ReactCurrentActQueue, Kn = (
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
    ), Uo = 0, Sh = 1, ac = 2, zy = 3, Eh = 4, IC = 5, b1 = 6, ht = Kn, ua = null, pn = null, Xn = q, Yl = q, R1 = zu(q), Jn = Uo, _h = null, Ay = q, wh = q, jy = q, Ch = null, La = null, D1 = 0, BC = 500, WC = 1 / 0, ZM = 500, zo = null;
    function Th() {
      WC = Jt() + ZM;
    }
    function $C() {
      return WC;
    }
    var Fy = !1, k1 = null, id = null, ic = !1, $u = null, xh = q, M1 = [], O1 = null, KM = 50, bh = 0, N1 = null, L1 = !1, Hy = !1, XM = 50, ld = 0, Yy = null, Rh = Ht, Py = q, GC = !1;
    function Vy() {
      return ua;
    }
    function sa() {
      return (ht & (xr | Si)) !== Kn ? Jt() : (Rh !== Ht || (Rh = Jt()), Rh);
    }
    function Gu(e) {
      var t = e.mode;
      if ((t & lt) === He)
        return Be;
      if ((ht & xr) !== Kn && Xn !== q)
        return xn(Xn);
      var a = QD() !== GD;
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
      var d = NR();
      return d;
    }
    function JM(e) {
      var t = e.mode;
      return (t & lt) === He ? Be : e0();
    }
    function er(e, t, a, l) {
      CO(), GC && g("useInsertionEffect must not schedule updates."), L1 && (Hy = !0), yo(e, a, l), (ht & xr) !== q && e === ua ? bO(t) : (Wn && gp(e, t, a), RO(t), e === ua && ((ht & xr) === Kn && (wh = Je(wh, a)), Jn === Eh && Qu(e, Xn)), Ua(e, l), a === Be && ht === Kn && (t.mode & lt) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ji.isBatchingLegacy && (Th(), $_()));
    }
    function eO(e, t, a) {
      var l = e.current;
      l.lanes = t, yo(e, t, a), Ua(e, a);
    }
    function tO(e) {
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
        e.tag === Au ? (Ji.isBatchingLegacy !== null && (Ji.didScheduleLegacyUpdate = !0), MD(ZC.bind(null, e))) : W_(ZC.bind(null, e)), Ji.current !== null ? Ji.current.push(ju) : UR(function() {
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
      if (Ck(), Rh = Ht, Py = q, (ht & (xr | Si)) !== Kn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, l = jo();
      if (l && e.callbackNode !== a)
        return null;
      var s = Ms(e, e === ua ? Xn : q);
      if (s === q)
        return null;
      var d = !Ns(e, s) && !em(e, s) && !t, v = d ? fO(e, s) : By(e, s);
      if (v !== Uo) {
        if (v === ac) {
          var S = fp(e);
          S !== q && (s = S, v = U1(e, S));
        }
        if (v === Sh) {
          var _ = _h;
          throw lc(e, q), Qu(e, s), Ua(e, Jt()), _;
        }
        if (v === b1)
          Qu(e, s);
        else {
          var C = !Ns(e, s), T = e.current.alternate;
          if (C && !rO(T)) {
            if (v = By(e, s), v === ac) {
              var L = fp(e);
              L !== q && (s = L, v = U1(e, L));
            }
            if (v === Sh) {
              var O = _h;
              throw lc(e, q), Qu(e, s), Ua(e, Jt()), O;
            }
          }
          e.finishedWork = T, e.finishedLanes = s, nO(e, v, s);
        }
      }
      return Ua(e, Jt()), e.callbackNode === a ? QC.bind(null, e) : null;
    }
    function U1(e, t) {
      var a = Ch;
      if (Rn(e)) {
        var l = lc(e, t);
        l.flags |= ln, CD(e.containerInfo);
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
    function nO(e, t, a) {
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
            var l = D1 + BC - Jt();
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
            var v = Xv(e, a), S = v, _ = Jt() - S, C = wO(_) - _;
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
    function rO(e) {
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
      if (Tk(), (ht & (xr | Si)) !== Kn)
        throw new Error("Should not already be working.");
      jo();
      var t = Ms(e, q);
      if (!Hr(t, Be))
        return Ua(e, Jt()), null;
      var a = By(e, t);
      if (e.tag !== Au && a === ac) {
        var l = fp(e);
        l !== q && (t = l, a = U1(e, l));
      }
      if (a === Sh) {
        var s = _h;
        throw lc(e, q), Qu(e, t), Ua(e, Jt()), s;
      }
      if (a === b1)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, oc(e, La, zo), Ua(e, Jt()), null;
    }
    function aO(e, t) {
      t !== q && (Su(e, Je(t, Be)), Ua(e, Jt()), (ht & (xr | Si)) === Kn && (Th(), ju()));
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
    function iO(e, t, a, l, s) {
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
      Pr(R1, Yl, e), Yl = Je(Yl, t);
    }
    function A1(e) {
      Yl = R1.current, Yr(R1, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = q;
      var a = e.timeoutHandle;
      if (a !== N0 && (e.timeoutHandle = N0, LR(a)), pn !== null)
        for (var l = pn.return; l !== null; ) {
          var s = l.alternate;
          bC(s, l), l = l.return;
        }
      ua = e;
      var d = uc(e.current, null);
      return pn = d, Xn = Yl = t, Jn = Uo, _h = null, Ay = q, wh = q, jy = q, Ch = null, La = null, XD(), Wi.discardPendingWarnings(), d;
    }
    function XC(e, t) {
      do {
        var a = pn;
        try {
          if (Km(), Dw(), Cn(), x1.current = null, a === null || a.return === null) {
            Jn = Sh, _h = t, pn = null;
            return;
          }
          if (wn && a.mode & Ie && ky(a, !0), ni)
            if (lo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              qv(a, l, Xn);
            } else
              Qc(a, t, Xn);
          kk(e, a.return, a, t, Xn), nT(a);
        } catch (s) {
          t = s, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
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
    function lO() {
      D1 = Jt();
    }
    function Dh(e) {
      Ay = Je(e, Ay);
    }
    function oO() {
      Jn === Uo && (Jn = zy);
    }
    function j1() {
      (Jn === Uo || Jn === zy || Jn === ac) && (Jn = Eh), ua !== null && (Os(Ay) || Os(wh)) && Qu(ua, Xn);
    }
    function uO(e) {
      Jn !== Eh && (Jn = ac), Ch === null ? Ch = [e] : Ch.push(e);
    }
    function sO() {
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
          cO();
          break;
        } catch (d) {
          XC(e, d);
        }
      while (!0);
      if (Km(), ht = a, eT(l), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pu(), ua = null, Xn = q, Jn;
    }
    function cO() {
      for (; pn !== null; )
        tT(pn);
    }
    function fO(e, t) {
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
          dO();
          break;
        } catch (d) {
          XC(e, d);
        }
      while (!0);
      return Km(), eT(l), ht = a, pn !== null ? (bs(), Uo) : (pu(), ua = null, Xn = q, Jn);
    }
    function dO() {
      for (; pn !== null && !Vc(); )
        tT(pn);
    }
    function tT(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & Ie) !== He ? (XS(e), a = F1(t, e, Yl), ky(e, !0)) : a = F1(t, e, Yl), Cn(), e.memoizedProps = e.pendingProps, a === null ? nT(e) : pn = a, x1.current = null;
    }
    function nT(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & ta) === ze) {
          Lt(t);
          var s = void 0;
          if ((t.mode & Ie) === He ? s = xC(a, t, Yl) : (XS(t), s = xC(a, t, Yl), ky(t, !1)), Cn(), s !== null) {
            pn = s;
            return;
          }
        } else {
          var d = oM(a, t);
          if (d !== null) {
            d.flags &= Yv, pn = d;
            return;
          }
          if ((t.mode & Ie) !== He) {
            ky(t, !1);
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
      Jn === Uo && (Jn = IC);
    }
    function oc(e, t, a) {
      var l = ba(), s = Tr.transition;
      try {
        Tr.transition = null, bn(sr), pO(e, t, a, l);
      } finally {
        Tr.transition = s, bn(l);
      }
      return null;
    }
    function pO(e, t, a, l) {
      do
        jo();
      while ($u !== null);
      if (TO(), (ht & (xr | Si)) !== Kn)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, d = e.finishedLanes;
      if (Wc(d), s === null)
        return lp(), null;
      if (d === q && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = pt;
      var v = Je(s.lanes, s.childLanes);
      yp(e, v), e === ua && (ua = null, pn = null, Xn = q), ((s.subtreeFlags & wa) !== ze || (s.flags & wa) !== ze) && (ic || (ic = !0, O1 = a, P1(si, function() {
        return jo(), null;
      })));
      var S = (s.subtreeFlags & (cu | zr | ur | wa)) !== ze, _ = (s.flags & (cu | zr | ur | wa)) !== ze;
      if (S || _) {
        var C = Tr.transition;
        Tr.transition = null;
        var T = ba();
        bn(sr);
        var L = ht;
        ht |= Si, x1.current = null, dM(e, s), Jw(), bM(e, s, d), bR(e.containerInfo), e.current = s, Zv(d), RM(s, e, d), du(), Iv(), ht = L, bn(T), Tr.transition = C;
      } else
        e.current = s, Jw();
      var O = ic;
      if (ic ? (ic = !1, $u = e, xh = d) : (ld = 0, Yy = null), v = e.pendingLanes, v === q && (id = null), O || lT(e.current, !1), zi(s.stateNode, l), Wn && e.memoizedUpdaters.clear(), $M(), Ua(e, Jt()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var $ = t[I], we = $.stack, Ae = $.digest;
          V($.value, {
            componentStack: we,
            digest: Ae
          });
        }
      if (Fy) {
        Fy = !1;
        var Ne = k1;
        throw k1 = null, Ne;
      }
      return Hr(xh, Be) && e.tag !== Au && jo(), v = e.pendingLanes, Hr(v, Be) ? (wk(), e === N1 ? bh++ : (bh = 0, N1 = e)) : bh = 0, ju(), lp(), null;
    }
    function jo() {
      if ($u !== null) {
        var e = zs(xh), t = n0(Fi, e), a = Tr.transition, l = ba();
        try {
          return Tr.transition = null, bn(t), vO();
        } finally {
          bn(l), Tr.transition = a;
        }
      }
      return !1;
    }
    function hO(e) {
      M1.push(e), ic || (ic = !0, P1(si, function() {
        return jo(), null;
      }));
    }
    function vO() {
      if ($u === null)
        return !1;
      var e = O1;
      O1 = null;
      var t = $u, a = xh;
      if ($u = null, xh = q, (ht & (xr | Si)) !== Kn)
        throw new Error("Cannot flush passive effects while already rendering.");
      L1 = !0, Hy = !1, Kv(a);
      var l = ht;
      ht |= Si, UM(t.current), MM(t, t.current, a, e);
      {
        var s = M1;
        M1 = [];
        for (var d = 0; d < s.length; d++) {
          var v = s[d];
          mM(t, v);
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
    function mO(e) {
      id === null ? id = /* @__PURE__ */ new Set([e]) : id.add(e);
    }
    function yO(e) {
      Fy || (Fy = !0, k1 = e);
    }
    var gO = yO;
    function aT(e, t, a) {
      var l = nc(a, t), s = tC(e, l, Be), d = Hu(e, s, Be), v = sa();
      d !== null && (yo(d, Be, v), Ua(d, v));
    }
    function Gt(e, t, a) {
      if (sM(a), Mh(!1), e.tag === U) {
        aT(e, e, a);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === U) {
          aT(l, e, a);
          return;
        } else if (l.tag === D) {
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
    function SO(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var s = sa();
      mp(e, a), DO(e), ua === e && mo(Xn, a) && (Jn === Eh || Jn === zy && hf(Xn) && Jt() - D1 < BC ? lc(e, q) : jy = Je(jy, a)), Ua(e, s);
    }
    function iT(e, t) {
      t === pt && (t = JM(e));
      var a = sa(), l = Oa(e, t);
      l !== null && (yo(l, t, a), Ua(l, a));
    }
    function EO(e) {
      var t = e.memoizedState, a = pt;
      t !== null && (a = t.retryLane), iT(e, a);
    }
    function _O(e, t) {
      var a = pt, l;
      switch (e.tag) {
        case ce:
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
      l !== null && l.delete(t), iT(e, a);
    }
    function wO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : qM(e / 1960) * 1960;
    }
    function CO() {
      if (bh > KM)
        throw bh = 0, N1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > XM && (ld = 0, Yy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function TO() {
      Wi.flushLegacyContextWarning(), Wi.flushPendingUnsafeLifecycleWarnings();
    }
    function lT(e, t) {
      Lt(e), Wy(e, Ur, IM), t && Wy(e, io, BM), Wy(e, Ur, PM), t && Wy(e, io, VM), Cn();
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
        if (t !== z && t !== U && t !== D && t !== b && t !== ne && t !== ee && t !== ue)
          return;
        var a = Ke(e) || "ReactComponent";
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
      var xO = null;
      F1 = function(e, t, a) {
        var l = vT(xO, t);
        try {
          return EC(e, t, a);
        } catch (d) {
          if (FD() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Km(), Dw(), bC(e, t), vT(t, l), t.mode & Ie && XS(t), ao(null, EC, null, e, t, a), qg()) {
            var s = qd();
            typeof s == "object" && s !== null && s._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var uT = !1, H1;
    H1 = /* @__PURE__ */ new Set();
    function bO(e) {
      if (ma && !Sk())
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
    function RO(e) {
      {
        if (e.mode & lt) {
          if (!PC())
            return;
        } else if (!QM() || ht !== Kn || e.tag !== b && e.tag !== ne && e.tag !== ue)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? Lt(e) : Cn();
          }
        }
      }
    }
    function DO(e) {
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
    var Ei = null, od = null, kO = function(e) {
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
    function dT(e) {
      {
        if (Ei === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var MO = function(e, t) {
      {
        if (Ei === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        jo(), Ao(function() {
          B1(e.current, l, a);
        });
      }
    }, OO = function(e, t) {
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
        if (od !== null && (od.has(e) || l !== null && od.has(l)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var O = Oa(e, Be);
          O !== null && er(O, e, Be, Ht);
        }
        s !== null && !T && B1(s, t, a), d !== null && B1(d, t, a);
      }
    }
    var NO = function(e, t) {
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
        S !== null && t.has(S) && (_ = !0), _ ? LO(e, a) : l !== null && W1(l, t, a), s !== null && W1(s, t, a);
      }
    }
    function LO(e, t) {
      {
        var a = UO(e, t);
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
    function UO(e, t) {
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
        var pT = Object.preventExtensions({});
      } catch {
        $1 = !0;
      }
    }
    function zO(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = ze, this.subtreeFlags = ze, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !$1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Xa = function(e, t, a, l) {
      return new zO(e, t, a, l);
    };
    function G1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function AO(e) {
      return typeof e == "function" && !G1(e) && e.defaultProps === void 0;
    }
    function jO(e) {
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
        case ue:
          a.type = ud(e.type);
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
    function FO(e, t) {
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
    function HO(e, t, a) {
      var l;
      return e === Im ? (l = lt, t === !0 && (l |= en, l |= Ta)) : l = He, Wn && (l |= Ie), Xa(U, null, null, l);
    }
    function Q1(e, t, a, l, s, d) {
      var v = z, S = e;
      if (typeof e == "function")
        G1(e) ? (v = D, S = V1(S)) : S = ud(S);
      else if (typeof e == "string")
        v = Q;
      else
        e:
          switch (e) {
            case Va:
              return qu(a.children, s, d, t);
            case ll:
              v = Ee, s |= en, (s & lt) !== He && (s |= Ta);
              break;
            case k:
              return YO(a, s, d, t);
            case tt:
              return PO(a, s, d, t);
            case mt:
              return VO(a, s, d, t);
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
                  case J:
                    v = le;
                    break e;
                  case he:
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
    function qu(e, t, a, l) {
      var s = Xa(te, e, l, t);
      return s.lanes = a, s;
    }
    function YO(e, t, a, l) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Xa(ve, e, l, t | Ie);
      return s.elementType = k, s.lanes = a, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function PO(e, t, a, l) {
      var s = Xa(ce, e, l, t);
      return s.elementType = tt, s.lanes = a, s;
    }
    function VO(e, t, a, l) {
      var s = Xa(dt, e, l, t);
      return s.elementType = mt, s.lanes = a, s;
    }
    function hT(e, t, a, l) {
      var s = Xa(Pe, e, l, t);
      s.elementType = qt, s.lanes = a;
      var d = {
        isHidden: !1
      };
      return s.stateNode = d, s;
    }
    function Z1(e, t, a) {
      var l = Xa(P, e, null, t);
      return l.lanes = a, l;
    }
    function IO() {
      var e = Xa(Q, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function BO(e) {
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
    function vT(e, t) {
      return e === null && (e = Xa(z, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function WO(e, t, a, l, s) {
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
      var T = new WO(e, t, a, S, _), L = HO(t, d);
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
    function $O(e, t, a) {
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
      var t = Sa(e), a = kD(t);
      if (t.tag === D) {
        var l = t.type;
        if (Ll(l))
          return I_(t, l, a);
      }
      return a;
    }
    function GO(e, t) {
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
    function gT(e, t, a, l, s, d, v, S) {
      var _ = !1, C = null;
      return mT(e, t, _, C, a, l, s, d, v);
    }
    function ST(e, t, a, l, s, d, v, S, _, C) {
      var T = !0, L = mT(a, l, T, e, s, d, v, S, _);
      L.context = yT(null);
      var O = L.current, V = sa(), I = Gu(O), $ = No(V, I);
      return $.callback = t ?? null, Hu(O, $, I), eO(L, I, V), L;
    }
    function Oh(e, t, a, l) {
      Bv(t, e);
      var s = t.current, d = sa(), v = Gu(s);
      oo(v);
      var S = yT(a);
      t.context === null ? t.context = S : t.pendingContext = S, ma && mn !== null && !J1 && (J1 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(mn) || "Unknown"));
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
        case Q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function QO(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (Rn(t)) {
            var a = Xg(t);
            aO(t, a);
          }
          break;
        }
        case ce: {
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
    function qO(e) {
      if (e.tag === ce) {
        var t = hu, a = Oa(e, t);
        if (a !== null) {
          var l = sa();
          er(a, e, t, l);
        }
        tE(e, t);
      }
    }
    function ZO(e) {
      if (e.tag === ce) {
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
    function KO(e) {
      return wT(e);
    }
    var CT = function(e) {
      return !1;
    };
    function XO(e) {
      return CT(e);
    }
    var TT = null, xT = null, bT = null, RT = null, DT = null, kT = null, MT = null, OT = null, NT = null;
    {
      var LT = function(e, t, a) {
        var l = t[a], s = Un(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (Un(s) ? s.splice(l, 1) : delete s[l], s) : (s[l] = LT(e[l], t, a + 1), s);
      }, UT = function(e, t) {
        return LT(e, t, 0);
      }, zT = function(e, t, a, l) {
        var s = t[l], d = Un(e) ? e.slice() : ut({}, e);
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
        var s = t[a], d = Un(e) ? e.slice() : ut({}, e);
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
          s.memoizedState = d, s.baseState = d, e.memoizedProps = ut({}, e.memoizedProps);
          var v = Oa(e, Be);
          v !== null && er(v, e, Be, Ht);
        }
      }, xT = function(e, t, a) {
        var l = nE(e, t);
        if (l !== null) {
          var s = UT(l.memoizedState, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var d = Oa(e, Be);
          d !== null && er(d, e, Be, Ht);
        }
      }, bT = function(e, t, a, l) {
        var s = nE(e, t);
        if (s !== null) {
          var d = AT(s.memoizedState, a, l);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = ut({}, e.memoizedProps);
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
    function JO(e) {
      var t = Ca(e);
      return t === null ? null : t.stateNode;
    }
    function eN(e) {
      return null;
    }
    function tN() {
      return mn;
    }
    function nN(e) {
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
        findHostInstanceByFiber: JO,
        findFiberByHostInstance: t || eN,
        // React Refresh
        findHostInstancesForRefresh: NO,
        scheduleRefresh: MO,
        scheduleRoot: OO,
        setRefreshHandler: kO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: tN,
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
    function rN(e, t) {
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
    function aN(e) {
      e && cm(e);
    }
    Qy.prototype.unstable_scheduleHydration = aN;
    function iN(e, t, a) {
      if (!qy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = a ?? null, s = a != null && a.hydratedSources || null, d = !1, v = !1, S = "", _ = HT;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError));
      var C = ST(t, null, e, Im, l, d, v, S, _);
      if (Am(C.current, e), Hp(e), s)
        for (var T = 0; T < s.length; T++) {
          var L = s[T];
          pk(C, L);
        }
      return new Qy(C);
    }
    function qy(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === $a || e.nodeType === Xl || !Ct));
    }
    function Nh(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === $a || e.nodeType === Xl || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YT(e) {
      e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lN = c.ReactCurrentOwner, PT;
    PT = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = _T(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = aE(e), s = !!(l && Uu(l));
      s && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function aE(e) {
      return e ? e.nodeType === $a ? e.documentElement : e.firstChild : null;
    }
    function VT() {
    }
    function oN(e, t, a, l, s) {
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
        var L = e.nodeType === yn ? e.parentNode : e;
        return Hp(L), Ao(function() {
          Oh(t, T, a, l);
        }), T;
      }
    }
    function uN(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Zy(e, t, a, l, s) {
      PT(a), uN(s === void 0 ? null : s, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = oN(a, t, e, s, l);
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
    function sN(e) {
      {
        var t = lN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Or ? e : GO(e, "findDOMNode");
    }
    function cN(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Zp(t) && t._reactRootContainer === void 0;
        l && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Zy(null, e, t, !0, a);
    }
    function fN(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Zp(t) && t._reactRootContainer === void 0;
        l && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Zy(null, e, t, !1, a);
    }
    function dN(e, t, a, l) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ws(e))
        throw new Error("parentComponent must be a valid React Component");
      return Zy(e, t, a, !1, l);
    }
    function pN(e) {
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
          var s = aE(e), d = !!(s && Uu(s)), v = e.nodeType === Or && Nh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Te(QO), am(qO), js(ZO), _p(ba), lm(Us), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Fv(mR), Ac(z1, iO, Ao);
    function hN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qy(t))
        throw new Error("Target container is not a DOM element.");
      return $O(e, t, null, a);
    }
    function vN(e, t, a, l) {
      return dN(e, t, a, l);
    }
    var iE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uu, Hf, jm, zc, Ss, z1]
    };
    function mN(e, t) {
      return iE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rN(e, t);
    }
    function yN(e, t, a) {
      return iE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iN(e, t, a);
    }
    function gN(e) {
      return KC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ao(e);
    }
    var SN = nN({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: X1,
      rendererPackageName: "react-dom"
    });
    if (!SN && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var IT = window.location.protocol;
      /^(https?|file):$/.test(IT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (IT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE, Aa.createPortal = hN, Aa.createRoot = mN, Aa.findDOMNode = sN, Aa.flushSync = gN, Aa.hydrate = cN, Aa.hydrateRoot = yN, Aa.render = fN, Aa.unmountComponentAtNode = pN, Aa.unstable_batchedUpdates = z1, Aa.unstable_renderSubtreeIntoContainer = vN, Aa.version = X1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
process.env.NODE_ENV === "production" ? (Lb(), UE.exports = GA()) : UE.exports = QA();
var qA = UE.exports;
const vx = (i) => {
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
}, ZA = (i) => i ? vx(i) : vx;
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
function KA() {
  if (mx)
    return mE;
  mx = 1;
  var i = Wo;
  function u(U, A) {
    return U === A && (U !== 0 || 1 / U === 1 / A) || U !== U && A !== A;
  }
  var c = typeof Object.is == "function" ? Object.is : u, p = i.useState, m = i.useEffect, E = i.useLayoutEffect, g = i.useDebugValue;
  function R(U, A) {
    var Q = A(), P = p({ inst: { value: Q, getSnapshot: A } }), te = P[0].inst, Ee = P[1];
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
var yx;
function XA() {
  return yx || (yx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Wo, u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(ne) {
      {
        for (var ve = arguments.length, ce = new Array(ve > 1 ? ve - 1 : 0), ee = 1; ee < ve; ee++)
          ce[ee - 1] = arguments[ee];
        p("error", ne, ce);
      }
    }
    function p(ne, ve, ce) {
      {
        var ee = u.ReactDebugCurrentFrame, ue = ee.getStackAddendum();
        ue !== "" && (ve += "%s", ce = ce.concat([ue]));
        var We = ce.map(function(et) {
          return String(et);
        });
        We.unshift("Warning: " + ve), Function.prototype.apply.call(console[ne], console, We);
      }
    }
    function m(ne, ve) {
      return ne === ve && (ne !== 0 || 1 / ne === 1 / ve) || ne !== ne && ve !== ve;
    }
    var E = typeof Object.is == "function" ? Object.is : m, g = i.useState, R = i.useEffect, b = i.useLayoutEffect, D = i.useDebugValue, z = !1, U = !1;
    function A(ne, ve, ce) {
      z || i.startTransition !== void 0 && (z = !0, c("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var ee = ve();
      if (!U) {
        var ue = ve();
        E(ee, ue) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), U = !0);
      }
      var We = g({
        inst: {
          value: ee,
          getSnapshot: ve
        }
      }), et = We[0].inst, nt = We[1];
      return b(function() {
        et.value = ee, et.getSnapshot = ve, Q(et) && nt({
          inst: et
        });
      }, [ne, ee, ve]), R(function() {
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
      var ve = ne.getSnapshot, ce = ne.value;
      try {
        var ee = ve();
        return !E(ce, ee);
      } catch {
        return !0;
      }
    }
    function P(ne, ve, ce) {
      return ve();
    }
    var te = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ee = !te, Me = Ee ? P : A, le = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : Me;
    yE.useSyncExternalStore = le, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yE;
}
var gx;
function Ub() {
  return gx || (gx = 1, process.env.NODE_ENV === "production" ? tg.exports = KA() : tg.exports = XA()), tg.exports;
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
function JA() {
  if (Sx)
    return vE;
  Sx = 1;
  var i = Wo, u = Ub();
  function c(D, z) {
    return D === z && (D !== 0 || 1 / D === 1 / z) || D !== D && z !== z;
  }
  var p = typeof Object.is == "function" ? Object.is : c, m = u.useSyncExternalStore, E = i.useRef, g = i.useEffect, R = i.useMemo, b = i.useDebugValue;
  return vE.useSyncExternalStoreWithSelector = function(D, z, U, A, Q) {
    var P = E(null);
    if (P.current === null) {
      var te = { hasValue: !1, value: null };
      P.current = te;
    } else
      te = P.current;
    P = R(function() {
      function Me(ee) {
        if (!le) {
          if (le = !0, ne = ee, ee = A(ee), Q !== void 0 && te.hasValue) {
            var ue = te.value;
            if (Q(ue, ee))
              return ve = ue;
          }
          return ve = ee;
        }
        if (ue = ve, p(ne, ee))
          return ue;
        var We = A(ee);
        return Q !== void 0 && Q(ue, We) ? ue : (ne = ee, ve = We);
      }
      var le = !1, ne, ve, ce = U === void 0 ? null : U;
      return [function() {
        return Me(z());
      }, ce === null ? void 0 : function() {
        return Me(ce());
      }];
    }, [z, U, A, Q]);
    var Ee = m(D, P[0], P[1]);
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
var Ex;
function ej() {
  return Ex || (Ex = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = Wo, u = Ub();
    function c(z, U) {
      return z === U && (z !== 0 || 1 / z === 1 / U) || z !== z && U !== U;
    }
    var p = typeof Object.is == "function" ? Object.is : c, m = u.useSyncExternalStore, E = i.useRef, g = i.useEffect, R = i.useMemo, b = i.useDebugValue;
    function D(z, U, A, Q, P) {
      var te = E(null), Ee;
      te.current === null ? (Ee = {
        hasValue: !1,
        value: null
      }, te.current = Ee) : Ee = te.current;
      var Me = R(function() {
        var ce = !1, ee, ue, We = function(Nt) {
          if (!ce) {
            ce = !0, ee = Nt;
            var Pe = Q(Nt);
            if (P !== void 0 && Ee.hasValue) {
              var at = Ee.value;
              if (P(at, Pe))
                return ue = at, at;
            }
            return ue = Pe, Pe;
          }
          var hn = ee, kt = ue;
          if (p(hn, Nt))
            return kt;
          var _n = Q(Nt);
          return P !== void 0 && P(kt, _n) ? kt : (ee = Nt, ue = _n, _n);
        }, et = A === void 0 ? null : A, nt = function() {
          return We(U());
        }, dt = et === null ? void 0 : function() {
          return We(et());
        };
        return [nt, dt];
      }, [U, A, Q, P]), le = Me[0], ne = Me[1], ve = m(z, le, ne);
      return g(function() {
        Ee.hasValue = !0, Ee.value = ve;
      }, [ve]), b(ve), ve;
    }
    gE.useSyncExternalStoreWithSelector = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), gE;
}
process.env.NODE_ENV === "production" ? zE.exports = JA() : zE.exports = ej();
var tj = zE.exports;
const nj = /* @__PURE__ */ TN(tj), { useSyncExternalStoreWithSelector: rj } = nj;
function aj(i, u = i.getState, c) {
  const p = rj(
    i.subscribe,
    i.getState,
    i.getServerState || i.getState,
    u,
    c
  );
  return CN(p), p;
}
const _x = (i) => {
  const u = typeof i == "function" ? ZA(i) : i, c = (p, m) => aj(u, p, m);
  return Object.assign(c, u), c;
}, ij = (i) => i ? _x(i) : _x, lj = (i, u) => (...c) => Object.assign({}, i, u(...c)), zb = ij(
  lj(
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
), oj = ({
  children: i,
  currentName: u,
  variant: c = "neutral"
}) => {
  const { isOpen: p, current: m, closeModal: E } = zb(), g = document.querySelector("#modal-root"), R = tr(null);
  return hg(() => {
    p && R.current && R.current.focus();
  }, [p]), !p || u !== m ? null : g ? qA.createPortal(
    /* @__PURE__ */ W.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: R,
        onKeyDown: (b) => {
          b.key === "Escape" && E();
        },
        className: "modal",
        children: [
          /* @__PURE__ */ W.jsx("div", { className: "modal-overlay", onClick: E }),
          /* @__PURE__ */ W.jsx("div", { className: `modal-body container rounded-box bg-${c}`, children: i })
        ]
      }
    ),
    g
  ) : null;
}, uj = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], sj = ({
  children: i,
  data: u,
  itemsPerPage: c = 30
}) => {
  const p = dc(() => u.length, [u]), [m, E] = Rr(1), [g, R] = Rr(c), b = dc(() => u.slice(
    (m - 1) * g,
    m * g
  ), [u, m, g]);
  return /* @__PURE__ */ W.jsxs("div", { className: "table-container pagination", children: [
    /* @__PURE__ */ W.jsx("div", { className: "table-content custom-scroll", children: i({ data: b() }) }),
    /* @__PURE__ */ W.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ W.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: m === 1,
          onClick: () => E(1),
          children: /* @__PURE__ */ W.jsx(Wr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ W.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: m === 1,
          onClick: () => E((D) => D - 1),
          children: /* @__PURE__ */ W.jsx(Wr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ W.jsxs("span", { children: [
        "Page ",
        /* @__PURE__ */ W.jsx("span", { className: "page", children: m }),
        " of",
        " ",
        /* @__PURE__ */ W.jsx("span", { className: "page", children: Math.ceil(p() / g) })
      ] }),
      /* @__PURE__ */ W.jsx(
        IE,
        {
          items: uj,
          currentSelected: c,
          labelExtractor: (D) => `Per page ${D}`,
          showQty: 3,
          position: "bottom",
          onChange: (D, z) => {
            const U = Math.ceil(p() / z), A = m * g, P = (m > U ? U * z : m * z) / A, te = P !== 1 ? Math.floor(m / P) : m;
            m > U ? E(U) : E(te < 1 ? 1 : te), R(z);
          }
        }
      ),
      /* @__PURE__ */ W.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(p() / g) === m,
          onClick: () => E((D) => D + 1),
          children: /* @__PURE__ */ W.jsx(Wr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ W.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(p() / g) === m,
          onClick: () => E(Math.ceil(p() / g)),
          title: "Last Page",
          children: /* @__PURE__ */ W.jsx(Wr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ W.jsxs("span", { children: [
        p(),
        " items"
      ] })
    ] })
  ] });
}, cj = (i, u, c) => {
  let p;
  return (...m) => {
    const g = () => {
      p = null, c || i.apply(void 0, m);
    }, R = c && !p;
    clearTimeout(p), p = setTimeout(g, u), R && i.apply(void 0, m);
  };
}, fj = (i) => {
  const [u, c] = Rr(i ?? null), [p, m] = Rr({
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
      return u == null || u.addEventListener("scroll", cj(E, 150)), () => {
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
  const { height: p, scrollHeight: m, top: E, root: g, setRoot: R, changeScrollData: b } = fj(c == null ? void 0 : c.current), D = tr(0), z = tr(D.current * 2), U = 40, A = dc(() => c.current === null ? 10 : Math.ceil(c.current.clientHeight / U), [c]);
  hg(() => (g === null && R(c.current), D.current = A(), () => {
  }), [A, c, g, R, b]);
  const Q = dc(() => {
    let P = 0;
    return g === null ? [] : (D.current < 10 && (D.current = A() * 2), Math.ceil(p + E) === m && (z.current += D.current, g.scrollTo({
      top: D.current * U
    })), z.current > D.current * 3 && E > 0 && (P = z.current - D.current * 3), E === 0 && z.current > D.current * 3 && (z.current -= D.current, P = z.current - D.current * 3, g.scrollTo({
      top: D.current * U
    })), u.slice(P, z.current));
  }, [u, p, A, m, E, g, D]);
  return i({ data: Q() });
}, pj = {
  scroll: dj,
  pagination: sj
}, hj = ({
  mode: i,
  children: u,
  data: c
}) => {
  const p = tr(null), m = pj[i];
  return /* @__PURE__ */ W.jsx(
    "div",
    {
      className: `table-container ${i}`,
      ref: p,
      children: /* @__PURE__ */ W.jsx(m, { tableContainerRef: p, data: c, children: u })
    }
  );
}, vj = ({
  closeModal: i,
  config: u
}) => /* @__PURE__ */ W.jsxs(oj, { currentName: "table-config-modal", children: [
  u.map((c) => /* @__PURE__ */ W.jsxs("div", { className: "container row center", children: [
    /* @__PURE__ */ W.jsx("span", { children: c }),
    /* @__PURE__ */ W.jsx(IE, { variant: "base-300", items: ["Expected", "Overhelmed", "Below Expectation"] })
  ] }, c)),
  /* @__PURE__ */ W.jsx("button", { className: "btn btn-primary ring-info", onClick: i, children: "Save" })
] }), mj = ({
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
}) => /* @__PURE__ */ W.jsx("th", { children: /* @__PURE__ */ W.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ W.jsx("span", { children: c(p) }),
  /* @__PURE__ */ W.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ W.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${m[g] === "asc" && E.current === p ? "active" : ""}`,
        onClick: () => {
          R(
            (z) => z === 1 && E.current === p ? 0 : 1
          ), E.current = p;
        },
        children: /* @__PURE__ */ W.jsx(Wr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ W.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${m[g] === "desc" && E.current === p ? "active" : ""}`,
        onClick: () => {
          R(
            (z) => z === 2 && E.current === p ? 0 : 2
          ), E.current = p;
        },
        children: /* @__PURE__ */ W.jsx(Wr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  u.length - 1 !== i && /* @__PURE__ */ W.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (z) => {
        D.current.startPosition = z.clientX;
      },
      onMouseMove: (z) => {
        var P;
        if (b.current === null || D.current.startPosition === 0)
          return;
        D.current.currentPosition = z.clientX;
        const U = (P = b.current.firstChild) == null ? void 0 : P.childNodes[i];
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
        /* @__PURE__ */ W.jsx("span", {}),
        /* @__PURE__ */ W.jsx("span", {})
      ]
    }
  )
] }) }), yj = (i, u, c = "asc") => {
  if (c === "default" || u === null)
    return i;
  const p = c === "asc" ? 1 : -1;
  return i.slice().sort((m, E) => {
    const g = m[u], R = E[u];
    return g < R ? -1 * p : g > R ? 1 * p : 0;
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
  const { closeModal: m } = zb(), E = (te) => Object.hasOwnProperty.call(wx, te) ? wx[te] : te, [g] = Rr(p), [R, b] = Rr(0), D = tr(null), z = tr(null), U = tr({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [A] = Rr(""), Q = dc(() => u.filter((te) => {
    if (A.trim() === "")
      return u;
    const Ee = A.toLowerCase().trim();
    return Object.entries(te).some(([le, ne]) => {
      var ve;
      return typeof ne == "object" && Object.hasOwnProperty.call(c, le) ? String((ve = c == null ? void 0 : c[le]) == null ? void 0 : ve.call(c, ne)).toLowerCase().includes(Ee) : typeof ne == "object" ? String(Object.values(ne)[0]).toLowerCase().includes(Ee) : String(ne).toLowerCase().includes(Ee);
    });
  }), [A, u, c]), P = dc(() => yj(Q(), D.current, Cx[R]), [R, Q, D]);
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    /* @__PURE__ */ W.jsx(hj, { mode: g, data: P(), children: ({ data: te }) => te.length === 0 ? null : /* @__PURE__ */ W.jsxs("table", { className: "table", children: [
      /* @__PURE__ */ W.jsx("thead", { children: /* @__PURE__ */ W.jsxs("tr", { children: [
        i && i.map((Ee, Me) => /* @__PURE__ */ W.jsx("th", { children: Ee }, Me)),
        i === void 0 && Object.keys(te[0]).map((Ee, Me) => /* @__PURE__ */ W.jsx(
          mj,
          {
            tBodyRef: z,
            mousePosition: U,
            orderedHeader: D,
            order: R,
            setOrder: b,
            column: Ee,
            index: Me,
            columns: Object.keys(te[0]),
            ordersType: Cx,
            translation: E
          },
          Me
        ))
      ] }) }),
      /* @__PURE__ */ W.jsx("tbody", { ref: z, children: te.map((Ee, Me) => /* @__PURE__ */ W.jsx("tr", { tabIndex: 0, children: Object.entries(Ee).map(([le, ne], ve) => {
        var ee;
        let ce;
        return typeof ne == "object" && (c == null ? void 0 : c[le]) === void 0 ? ce = Object.values(ne)[0] : Object.hasOwnProperty.call(c ?? {}, le) ? ce = (ee = c == null ? void 0 : c[le]) == null ? void 0 : ee.call(c, ne) : ce = ne, /* @__PURE__ */ W.jsx(
          "td",
          {
            title: "Click to copy",
            style: { width: "auto" },
            children: typeof ne != "object" ? ce : /* @__PURE__ */ W.jsx("div", { className: "cell-container", children: /* @__PURE__ */ W.jsxs("div", { className: "cell-container--header", children: [
              /* @__PURE__ */ W.jsx("span", { children: ce }),
              /* @__PURE__ */ W.jsx(
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
                  children: /* @__PURE__ */ W.jsx(Wr, { icon: "eva:arrow-down-fill" })
                }
              )
            ] }) })
          },
          ve
        );
      }) }, Me)) })
    ] }) }),
    /* @__PURE__ */ W.jsx(vj, { config: Object.keys(u[0]), closeModal: m })
  ] });
};
export {
  Cj as Chart,
  xj as DateRangePicker,
  bj as DetailedWorkDay,
  Rj as Header,
  oj as Modal,
  IE as Select,
  Tj as ShowPassword,
  Dj as Sidebar,
  kj as Table,
  NL as Textfield,
  cj as debounce,
  zb as useModal,
  fj as useScroll
};
